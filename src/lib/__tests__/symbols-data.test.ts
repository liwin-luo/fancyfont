import { describe, expect, it } from "vitest";
import {
  displaySymbol,
  searchSymbols,
  symbols,
  symbolCategories,
  symbolCombos,
} from "@/lib/symbols-data";

describe("symbol data", () => {
  it("has unique ids and required fields", () => {
    const ids = symbols.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const entry of symbols) {
      expect(entry.symbol.length).toBeGreaterThan(0);
      expect(entry.label.length).toBeGreaterThan(0);
      expect(entry.keywords.length).toBeGreaterThan(0);
    }
  });

  it("only references known categories, each with enough entries", () => {
    const known = new Set(symbolCategories.map((c) => c.id));
    for (const entry of symbols) {
      expect(known.has(entry.category)).toBe(true);
    }
    for (const category of symbolCategories) {
      const count = symbols.filter((s) => s.category === category.id).length;
      expect(count).toBeGreaterThanOrEqual(8);
    }
  });

  it("has no duplicate symbols inside a category", () => {
    for (const category of symbolCategories) {
      const inCategory = symbols
        .filter((s) => s.category === category.id)
        .map((s) => s.symbol);
      expect(new Set(inCategory).size).toBe(inCategory.length);
    }
  });

  it("has non-empty unique combos", () => {
    const ids = symbolCombos.map((c) => c.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const combo of symbolCombos) {
      expect(combo.text.length).toBeGreaterThan(0);
      expect(combo.label.length).toBeGreaterThan(0);
    }
  });
});

describe("symbol search", () => {
  it("returns everything for an empty query with no category", () => {
    expect(searchSymbols("", null)).toHaveLength(symbols.length);
  });

  it("matches labels and keywords", () => {
    const stars = searchSymbols("star", null);
    expect(stars.length).toBeGreaterThanOrEqual(5);
    expect(stars.every((s) => s.label.toLowerCase().includes("star") || s.keywords.some((k) => k.includes("star")))).toBe(true);

    const hearts = searchSymbols("heart", null);
    expect(hearts.length).toBeGreaterThanOrEqual(10);
  });

  it("combines query and category filters", () => {
    const result = searchSymbols("", "crowns");
    expect(result.length).toBeGreaterThan(0);
    expect(result.every((s) => s.category === "crowns")).toBe(true);
  });

  it("returns nothing for gibberish", () => {
    expect(searchSymbols("zzzzqqqq", null)).toEqual([]);
  });

  it("is case-insensitive", () => {
    expect(searchSymbols("STAR", null)).toEqual(searchSymbols("star", null));
  });

  it("keeps invisible characters blank and shows a dotted circle instead", () => {
    const blanks = symbols.filter((entry) => entry.category === "invisible");
    const codePoints = new Set([
      0x3164, 0x2800, 0x115f, 0x1160, 0xffa0, 0x200b, 0x200c, 0x200d, 0x2060, 0xfeff,
      0x2063, 0x034f,
    ]);
    expect(blanks.length).toBeGreaterThanOrEqual(8);
    for (const entry of blanks) {
      const point = entry.symbol.codePointAt(0);
      expect(entry.symbol).toHaveLength(point && point > 0xffff ? 2 : 1);
      expect(codePoints.has(point ?? -1)).toBe(true);
      expect(displaySymbol(entry.symbol)).toBe("◌");
      expect(displaySymbol(entry.symbol)).not.toBe(entry.symbol);
    }
    expect(displaySymbol("★")).toBe("★");
    expect(searchSymbols("blank", "invisible").length).toBe(blanks.length);
  });
});
