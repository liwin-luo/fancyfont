import { describe, expect, it } from "vitest";
import {
  crazyLevels,
  crazyVariant,
  generateCrazyVariants,
  isCrazyLevel,
} from "../crazy-style";

describe("crazy style engine", () => {
  it("is deterministic: same text, level and seed rebuild the same result", () => {
    expect(crazyVariant("Your Name", "wild", 0)).toBe(crazyVariant("Your Name", "wild", 0));
    expect(generateCrazyVariants("Your Name", "chaos", 3, 6)).toEqual(
      generateCrazyVariants("Your Name", "chaos", 3, 6),
    );
  });

  it("reshuffling produces a different set", () => {
    const first = generateCrazyVariants("GlitchQueen", "wild", 0, 6).map((v) => v.text);
    const second = generateCrazyVariants("GlitchQueen", "wild", 1, 6).map((v) => v.text);
    expect(first.some((text, index) => text !== second[index])).toBe(true);
  });

  it("levels actually differ in how many styles they mix", () => {
    expect(crazyLevels.find((l) => l.id === "mild")!.styles.length).toBeLessThan(
      crazyLevels.find((l) => l.id === "chaos")!.styles.length,
    );
    const mild = generateCrazyVariants("abcdefgh", "mild", 0, 6).map((v) => v.text);
    const chaos = generateCrazyVariants("abcdefgh", "chaos", 0, 6).map((v) => v.text);
    expect(mild).not.toEqual(chaos);
  });

  it("leaves characters without a styled lookalike untouched", () => {
    const out = crazyVariant("李A明", "wild", 0);
    expect(out).toContain("李");
    expect(out).toContain("明");
  });

  it("wraps variants in level decorations", () => {
    const wildWrappers = crazyLevels.find((l) => l.id === "wild")!.wrappers;
    const out = crazyVariant("Alex", "wild", 0);
    const wrapped = wildWrappers.some(([left, right]) => out.startsWith(left) && out.endsWith(right));
    expect(wrapped).toBe(true);
    expect(out.length).toBeGreaterThan("Alex".length);
  });

  it("validates level ids and yields the requested variant count", () => {
    expect(isCrazyLevel("wild")).toBe(true);
    expect(isCrazyLevel("spicy")).toBe(false);
    expect(generateCrazyVariants("Alex", "mild", 0, 4)).toHaveLength(4);
  });
});
