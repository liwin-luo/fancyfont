import { describe, expect, it } from "vitest";
import { convertAll, convertText, textStyles, styleCategories } from "@/lib/text-styles";

const cp = (s: string) => [...s].map((c) => c.codePointAt(0)!.toString(16)).join(" ");

describe("style metadata", () => {
  it("covers every style with a known category", () => {
    const known = new Set(styleCategories.map((c) => c.id));
    for (const style of textStyles) {
      expect(known.has(style.category)).toBe(true);
      expect(["letters", "lettersDigits", "partial", "all"]).toContain(style.coverage);
      expect(style.note.length).toBeGreaterThan(0);
    }
  });

  it("labels combining-mark styles as all-characters and enclosed styles honestly", () => {
    for (const id of ["strike", "underline", "zalgoHeavy"] as const) {
      expect(textStyles.find((s) => s.id === id)?.coverage).toBe("all");
    }
    expect(textStyles.find((s) => s.id === "squared")?.coverage).toBe("letters");
    expect(textStyles.find((s) => s.id === "superscript")?.coverage).toBe("partial");
  });
});

describe("text style engine", () => {
  it("exposes unique style ids", () => {
    const ids = textStyles.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("converts bold letters and digits", () => {
    expect(cp(convertText("aA0", "bold"))).toBe("1d41a 1d400 1d7ce");
  });

  it("converts italic with the Planck-h exception", () => {
    expect(cp(convertText("h", "italic"))).toBe("210e");
    expect(convertText("hi", "italic")).toBe("\u210E\u{1D456}");
  });

  it("converts cursive with typographic exceptions", () => {
    expect(convertText("Alex", "script")).toBe("𝒜𝓁ℯ𝓍");
    expect(convertText("Bob", "script")).toBe("ℬℴ𝒷");
  });

  it("converts gothic with exceptions", () => {
    expect(convertText("CHR", "fraktur")).toBe("ℭℌℜ");
  });

  it("converts outline (double-struck) with exceptions", () => {
    expect(convertText("R", "doubleStruck")).toBe("ℝ");
    expect(cp(convertText("0", "doubleStruck"))).toBe("1d7d8");
  });

  it("converts small caps including Q and keeps s/x lowercase", () => {
    expect(convertText("Queen", "smallCaps")).toBe("ǫᴜᴇᴇɴ");
    expect(convertText("six", "smallCaps")).toBe("ꜱɪx");
  });

  it("converts circled letters and digits", () => {
    expect(convertText("aA1", "circled")).toBe("ⓐⒶ①");
    expect(convertText("0", "circled")).toBe("⓪");
  });

  it("converts bubble letters and digits", () => {
    expect(convertText("aA", "bubble")).toBe("🅐🅐");
    expect(convertText("05", "bubble")).toBe("⓿❺");
  });

  it("converts fullwidth including spaces", () => {
    expect(convertText("a A 0", "fullwidth")).toBe("ａ　Ａ　０");
  });

  it("converts monospace digits", () => {
    expect(cp(convertText("9", "monospace"))).toBe("1d7ff");
  });

  it("applies combining marks to every character", () => {
    expect(convertText("ab", "strike")).toBe("a\u0336b\u0336");
    expect(convertText("x y", "underline")).toBe("x\u0332 \u0332y\u0332");
  });

  it("keeps unsupported characters unchanged (accents, emoji, CJK)", () => {
    expect(convertText("héllo 🎉 文", "italic")).toBe("ℎé𝑙𝑙𝑜 🎉 文");
    expect(convertText("naïve café", "bold")).toBe("𝐧𝐚ï𝐯𝐞 𝐜𝐚𝐟é");
  });

  it("handles empty and long input without breaking", () => {
    expect(convertText("", "bold")).toBe("");
    const long = "ab".repeat(5000);
    // Compare code points: astral-plane styles use two UTF-16 units each.
    expect([...convertText(long, "script")].length).toBe(long.length);
  });

  it("handles surrogate pairs (emoji) safely", () => {
    expect(convertText("🎉a", "bold")).toBe("🎉𝐚");
  });

  it("convertAll returns one result per style", () => {
    const results = convertAll("Ok");
    expect(results).toHaveLength(textStyles.length);
    expect(results.map((r) => r.id)).toEqual(textStyles.map((s) => s.id));
    expect(results.every((r) => r.text.length > 0)).toBe(true);
  });

  it("never returns the original text when there is anything to convert", () => {
    for (const style of textStyles) {
      expect(convertText("game over", style.id)).not.toBe("game over");
    }
  });
});

describe("new styles", () => {
  it("flips text upside down and reverses it", () => {
    expect(convertText("ab", "upsideDown")).toBe("qɐ");
    expect(convertText("hello!", "upsideDown")).toBe("¡ollǝɥ");
    expect(convertText("69", "upsideDown")).toBe("69");
  });

  it("converts tiny superscript text with full digit coverage", () => {
    expect(convertText("hi2", "superscript")).toBe("ʰⁱ²");
    expect(convertText("q", "superscript")).toBe("q"); // no superscript q exists
  });

  it("converts subscript where forms exist", () => {
    expect(convertText("hello", "subscript")).toBe("ₕₑₗₗₒ");
    expect(convertText("b", "subscript")).toBe("b"); // no subscript b exists
  });

  it("converts sans italic letters", () => {
    expect(cp(convertText("aA", "sansItalic"))).toBe("1d622 1d608");
  });

  it("applies slash and double underline marks", () => {
    expect(convertText("ab", "slash")).toBe("a\u0338b\u0338");
    expect(convertText("ab", "doubleUnderline")).toBe("a\u0333b\u0333");
  });

  it("parenthesizes letters and digits 1-20", () => {
    expect(cp(convertText("a", "parenthesized"))).toBe("249c");
    expect(cp(convertText("1", "parenthesized"))).toBe("2474");
    expect(convertText("0", "parenthesized")).toBe("0");
  });

  it("squares letters", () => {
    expect(cp(convertText("aA", "squared"))).toBe("1f130 1f130");
  });

  it("composes pipeline styles", () => {
    expect(convertText("a", "boldUnderline")).toBe("𝐚\u0332");
    expect(convertText("a", "boldStrike")).toBe("𝐚\u0336");
    expect(convertText("a", "italicUnderline")).toBe("𝑎\u0332");
  });

  it("is deterministic for zalgo and scales with intensity", () => {
    const light = convertText("abc", "zalgoLight");
    const medium = convertText("abc", "zalgoMedium");
    const heavy = convertText("abc", "zalgoHeavy");
    expect(convertText("abc", "zalgoLight")).toBe(light);
    expect(convertText("abc", "zalgoMedium")).toBe(medium);
    expect(convertText("abc", "zalgoHeavy")).toBe(heavy);
    // Base characters are preserved in order, with combining marks around them.
    for (const glitch of [light, medium, heavy]) {
      expect(glitch.replace(/[\u0300-\u036F]/g, "")).toBe("abc");
    }
    expect(medium.length).toBeGreaterThan(light.length);
    expect(heavy.length).toBeGreaterThan(medium.length);
  });

  it("keeps zalgo safe for astral characters (emoji)", () => {
    const out = convertText("🎉", "zalgoLight");
    expect(Array.from(out)[0]).toBe("🎉");
  });
});
