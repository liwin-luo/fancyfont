import { describe, expect, it } from "vitest";
import { generateNicknames, MAX_NICKNAME_LENGTH, vibeStyles } from "@/lib/nickname";
import { textStyles } from "@/lib/text-styles";

describe("nickname engine", () => {
  it("has unique vibe style ids with wrappers and transforms", () => {
    const ids = vibeStyles.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const style of vibeStyles) {
      expect(style.wrappers.length).toBeGreaterThan(0);
      for (const transform of style.transforms) {
        expect(
          transform === "identity" || textStyles.some((t) => t.id === transform),
        ).toBe(true);
      }
    }
  });

  it("returns up to the requested count of unique results", () => {
    const results = generateNicknames("Alex", "all", 0, 24);
    expect(results.length).toBe(24);
    expect(new Set(results).size).toBe(results.length);
  });

  it("keeps the base name or a styled version of it in every result", () => {
    const styledForms = textStyles.map((t) => t.transform("Alex"));
    const results = generateNicknames("Alex", "all", 0, 24);
    for (const nickname of results) {
      const containsBase =
        nickname.includes("Alex") || styledForms.some((form) => nickname.includes(form));
      expect(containsBase).toBe(true);
    }
  });

  it("is deterministic for the same (name, style, nonce)", () => {
    const a = generateNicknames("Shadow", "dark", 3, 20);
    const b = generateNicknames("Shadow", "dark", 3, 20);
    expect(a).toEqual(b);
  });

  it("produces a different order for a new nonce", () => {
    const a = generateNicknames("Shadow", "all", 0, 24);
    const b = generateNicknames("Shadow", "all", 1, 24);
    expect(a).not.toEqual(b);
    expect(new Set(a).size).toBe(a.length);
  });

  it("filters to a single vibe style on demand", () => {
    const cool = generateNicknames("Rex", "cool", 0, 30);
    const styledForms = textStyles.map((t) => t.transform("Rex"));
    expect(cool.length).toBeGreaterThan(0);
    for (const nickname of cool) {
      const containsBase =
        nickname.includes("Rex") || styledForms.some((form) => nickname.includes(form));
      expect(containsBase).toBe(true);
    }
  });

  it("normalizes whitespace and caps length", () => {
    const long = "a".repeat(100);
    const results = generateNicknames(`  ${long}  `, "minimal", 0, 24);
    expect(results.length).toBeGreaterThan(0);
    for (const nickname of results) {
      expect(nickname.length).toBeLessThan(MAX_NICKNAME_LENGTH + 40);
    }
  });

  it("returns nothing for a blank name", () => {
    expect(generateNicknames("   ", "all", 0, 24)).toEqual([]);
  });
});
