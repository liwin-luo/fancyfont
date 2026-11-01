import { describe, expect, it } from "vitest";
import { digitsText, styleRiskRows, styleRiskSummary } from "@/lib/style-risk";

// The /learn/ guides publish this table as measured data. If the engine
// changes, these tests break before the guide can quietly go stale.

describe("styleRiskRows", () => {
  const rows = styleRiskRows();

  it("classifies every style as single or marked, never both/neither", () => {
    expect(rows).toHaveLength(30);
    for (const row of rows) {
      expect(["single", "marked"]).toContain(row.construction);
      if (row.construction === "single") {
        expect(row.stacking).toBe("one character");
      } else {
        expect(row.stacking).toMatch(/mark/);
      }
    }
  });

  it("puts the known-safe alphabets in single and the known-risky ones in marked", () => {
    const byId = Object.fromEntries(rows.map((row) => [row.id, row]));
    for (const id of ["script", "bold", "smallCaps", "bubble", "fullwidth", "upsideDown"]) {
      expect(byId[id].construction).toBe("single");
    }
    for (const id of ["strike", "slash", "underline", "boldStrike", "zalgoLight", "zalgoMedium", "zalgoHeavy"]) {
      expect(byId[id].construction).toBe("marked");
    }
    expect(byId.zalgoHeavy.stacking).toMatch(/[4-9]–[4-9] marks/);
  });

  it("measures digit coverage per digit, including the partial cases", () => {
    const byId = Object.fromEntries(rows.map((row) => [row.id, row]));
    expect(byId.script.digitsStyledCount).toBe(0);
    expect(byId.bold.digitsStyledCount).toBe(10);
    expect(byId.upsideDown.digitsStyledCount).toBe(8);
    expect(byId.parenthesized.digitsStyledCount).toBe(9);
  });

  it("records letters with no styled form instead of hiding them", () => {
    const byId = Object.fromEntries(rows.map((row) => [row.id, row]));
    expect(byId.smallCaps.unchangedLetters).toContain("x");
    expect(byId.subscript.unchangedLetters).toContain("q");
  });
});

describe("styleRiskSummary", () => {
  it("pins the counts the guides quote in prose", () => {
    const summary = styleRiskSummary();
    expect(summary.total).toBe(30);
    expect(summary.single).toBe(20);
    expect(summary.marked).toBe(10);
    expect(summary.markFamilies).toEqual({ strike: 7, zalgo: 3 });
  });
});

describe("digitsText", () => {
  it("words the digit column", () => {
    expect(digitsText(10)).toBe("styled");
    expect(digitsText(0)).toBe("stay plain");
    expect(digitsText(8)).toBe("partly styled");
  });
});
