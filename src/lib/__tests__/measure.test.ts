import { describe, expect, it } from "vitest";
import { lengthBucket, measureText, sliceGraphemes } from "@/lib/measure";

describe("measureText", () => {
  it("counts a grapheme cluster as one visible character", () => {
    const m = measureText("e\u0301");
    expect(m.graphemes).toBe(1);
    expect(m.codePoints).toBe(2);
    expect(m.utf16).toBe(2);
  });

  it("counts an emoji as one visible character and two UTF-16 units", () => {
    const m = measureText("😀");
    expect(m.graphemes).toBe(1);
    expect(m.codePoints).toBe(1);
    expect(m.utf16).toBe(2);
  });

  it("buckets length without keeping the text", () => {
    expect(lengthBucket(0)).toBe("0");
    expect(lengthBucket(12)).toBe("1-20");
    expect(lengthBucket(80)).toBe("21-120");
    expect(lengthBucket(121)).toBe("121+");
  });

  it("slices on grapheme boundaries", () => {
    expect(sliceGraphemes("😀😀", 1)).toBe("😀");
    expect(sliceGraphemes("e\u0301x", 1)).toBe("e\u0301");
  });
});
