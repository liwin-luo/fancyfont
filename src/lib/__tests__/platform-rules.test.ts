import { describe, expect, it } from "vitest";
import { getUi } from "@/lib/ui-strings";
import { previewFields } from "@/lib/platform-preview";
import {
  confidenceLabel,
  platformFieldRules,
  previewExtraMax,
  previewNameMax,
  previewNameRule,
  type PlatformFieldRule,
  type PlatformTestRecord,
} from "@/lib/platform-rules";

const PREVIEW_IDS = ["instagram", "tiktok", "discord", "roblox", "facebook", "youtube", "pubg", "freefire", "cod"] as const;

describe("platform rules", () => {
  it("never labels a rule verified when testedAt is missing", () => {
    for (const rule of platformFieldRules) {
      expect(rule.testedAt).toBeNull();
      expect(rule.confidence).toBe("published_approx");
      expect(confidenceLabel(rule)).not.toBe("verified");
      expect(confidenceLabel({ ...rule, confidence: "verified", testedAt: null })).not.toBe("verified");
      expect(confidenceLabel({ ...rule, confidence: "verified", testedAt: "" })).not.toBe("verified");
    }
  });

  it("returns verified only with a test record", () => {
    const rule = platformFieldRules[0];
    const record: PlatformTestRecord = {
      testedAt: "2026-11-01",
      version: "preview",
      platformId: rule.platformId,
      field: rule.field,
      sample: "A",
      result: "shown",
    };
    expect(confidenceLabel({ ...rule, confidence: "verified", testedAt: record.testedAt })).toBe("verified");
    expect(platformFieldRules.every((item) => item.testedAt === null)).toBe(true);
  });

  it("labels a stripped login name partial", () => {
    const username = platformFieldRules.find((rule) => rule.platformId === "roblox" && rule.field === "username");
    expect(username?.unicodePolicy).toBe("usually_stripped");
    expect(confidenceLabel(username as PlatformFieldRule)).toBe("partial");
    expect(confidenceLabel(previewNameRule("pubg"))).toBe("needs_verification");
  });

  it("feeds the preview card the same ceilings", () => {
    for (const id of PREVIEW_IDS) {
      expect(previewFields[id].nameMax).toBe(previewNameMax(id));
      expect(previewNameRule(id).unit).toBe("code_points");
      const extra = previewExtraMax(id);
      if (extra === undefined) expect(previewFields[id].extra).toBeUndefined();
      else expect(previewFields[id].extra?.max).toBe(extra);
    }
    expect(previewFields.pubg.nameMax).toBe(16);
    expect(previewFields.freefire.nameMax).toBe(12);
    expect(previewFields.roblox.nameMax).toBe(20);
  });

  it("tells the reader the limit was not tested here", () => {
    const en = getUi("en").platformPreview;
    const zh = getUi("zh-cn").platformPreview;
    const blob = `${en.notTested} ${en.approxField("PUBG", 16)} ${en.handleAscii}`;
    expect(blob.toLowerCase()).toContain("not tested on this site");
    expect(blob.toLowerCase()).not.toMatch(/verified|guaranteed|will work|\bsupported\b/);
    expect(zh.notTested).toContain("未在本站实测");
    expect(`${zh.notTested} ${zh.approxField("PUBG", 16)} ${zh.handleAscii}`).not.toContain("已验证");
    expect(en.handleAscii.toLowerCase()).toContain("ascii");
  });
});
