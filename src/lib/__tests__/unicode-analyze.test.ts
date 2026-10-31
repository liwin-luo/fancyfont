import { describe, expect, it } from "vitest";
import { getUi } from "@/lib/ui-strings";
import { platformFieldRules } from "@/lib/platform-rules";
import { analyzeNickname, reportStatus } from "@/lib/unicode-analyze";

describe("unicode analyze", () => {
  it("lists the code points of a combining acute", () => {
    const result = analyzeNickname("A\u0301", "identity", "A");
    expect(result.hasCombining).toBe(true);
    expect(result.hasVariationSelector).toBe(false);
    expect(result.hasEmoji).toBe(false);
    expect(result.graphemes).toHaveLength(1);
    expect(result.graphemes[0].points).toEqual(["U+0041", "U+0301"]);
  });

  it("flags the variation selector on a heart emoji", () => {
    const result = analyzeNickname("❤\uFE0F", "identity", "");
    expect(result.hasVariationSelector).toBe(true);
    expect(result.hasEmoji).toBe(true);
    expect(result.graphemes[0].points).toContain("U+FE0F");
  });

  it("names Latin letters a partial style leaves unchanged", () => {
    expect(analyzeNickname("b", "subscript", "b").unchangedLatin).toEqual(["b"]);
    expect(analyzeNickname("a", "subscript", "a").unchangedLatin).toEqual([]);
    expect(analyzeNickname("b", "identity", "b").unchangedLatin).toEqual([]);
  });

  it("never reports verified without a test date", () => {
    const rule = platformFieldRules.find((item) => item.platformId === "pubg" && item.field === "player_name");
    expect(rule).toBeDefined();
    expect(reportStatus(rule!)).toBe("needs_verification");
    expect(reportStatus({ ...rule!, confidence: "verified", testedAt: null })).not.toBe("verified");
    expect(reportStatus(null)).toBe("none");
  });

  it("keeps the status lines free of acceptance claims", () => {
    const gaming = getUi("en").gaming;
    const blob = [
      gaming.inputPreview,
      gaming.unicodeHeading,
      gaming.platformHeading,
      gaming.analysisComplete,
      gaming.platformRule("needs_verification"),
      gaming.platformRule("partial"),
      gaming.platformNone,
      gaming.displayDevice,
      gaming.checkNickname,
      gaming.checkResult,
    ].join(" ");
    expect(gaming.analysisComplete).toBe("Character analysis: complete");
    expect(gaming.platformRule("needs_verification")).toBe("Platform rule: needs verification");
    expect(gaming.platformRule("partial")).toBe("Platform rule: partial");
    expect(gaming.displayDevice).toBe("Display: depends on the device");
    expect(blob.toLowerCase()).not.toMatch(/will work|supported|guaranteed/);
    expect(blob).not.toContain("已验证");
  });
});
