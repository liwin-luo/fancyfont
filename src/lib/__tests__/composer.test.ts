import { describe, expect, it } from "vitest";
import { applyWrap, hasHan, hanFrames } from "@/lib/composer";

describe("composer", () => {
  it("wraps text and leaves the none pair empty", () => {
    expect(applyWrap("Luna", "none")).toBe("Luna");
    expect(applyWrap("Luna", "star")).toBe("★ Luna ★");
  });

  it("detects Han and frames the original, not a converted alphabet", () => {
    expect(hasHan("你好")).toBe(true);
    expect(hasHan("Luna")).toBe(false);
    const framed = hanFrames.map(([left, right]) => left + "小明" + right);
    expect(framed[0]).toBe("【小明】");
    expect(framed.every((line) => line.includes("小明"))).toBe(true);
  });
});
