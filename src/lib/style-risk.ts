// Behavioral classification of the styles, measured from the engine itself.
// The /learn/ guides publish this table, so it must stay derived — a style's
// row here is computed from its transform, never typed by hand.

import { textStyles, type TextStyle } from "./text-styles";

export type Construction = "single" | "marked";

export interface StyleRiskRow {
  id: string;
  name: string;
  /** single: each letter becomes exactly one character. marked: marks are stacked after it. */
  construction: Construction;
  /** Human text for how much is stacked, e.g. "letter + 1 mark" or "0–2 marks per letter". */
  stacking: string;
  /** How many of the ten digits get a styled form (measured per digit). */
  digitsStyledCount: number;
  /** Lowercase letters that stay as typed (measured). */
  unchangedLetters: string[];
  note?: string;
}

export function digitsText(count: number): string {
  if (count === 10) return "styled";
  if (count === 0) return "stay plain";
  return "partly styled";
}

const LOWER_PROBE = "abcdefghijklmnopqrstuvwxyz";

function graphemeClusters(text: string): string[] {
  const Segmenter = (Intl as { Segmenter?: typeof Intl.Segmenter }).Segmenter;
  if (!Segmenter) return [...text];
  return [...new Segmenter(undefined, { granularity: "grapheme" }).segment(text)].map(
    (part) => part.segment,
  );
}

function measureStacking(style: TextStyle): string {
  const base = style.transform("a");
  const extras = [...LOWER_PROBE].map((letter) => {
    const out = style.transform(letter);
    return [...out].length - 1;
  });
  const min = Math.min(...extras);
  const max = Math.max(...extras);
  const perLetterNote = " per letter";
  if (min === max) {
    return min === 1 ? `letter + 1 mark${perLetterNote}` : `letter + ${min} marks${perLetterNote}`;
  }
  return `${min}–${max} marks${perLetterNote}`;
}

function unchangedLowerLetters(style: TextStyle): string[] {
  // Only meaningful for single styles where positions still line up.
  const out = style.transform(LOWER_PROBE);
  if (out.length !== LOWER_PROBE.length) return [];
  return [...LOWER_PROBE].filter((letter, index) => out[index] === letter);
}

function styledDigitCount(style: TextStyle): number {
  return [..."0123456789"].filter((digit) => style.transform(digit) !== digit).length;
}

const MANUAL_NOTES: Record<string, string> = {
  script: "The letters ℯ ℊ ℴ come from older Unicode blocks, so they look slightly different.",
  upsideDown: "Also reverses the string order, so it reads flipped.",
  fullwidth: "Spaces widen too.",
  superscript: "Only part of the alphabet has a raised form; the rest stays as typed.",
  subscript: "Only part of the alphabet has a sunken form; the rest stays as typed.",
  zalgoMedium: "Readability drops fast past this strength.",
  zalgoHeavy: "The highest display risk on the site — expect breakage in strict fields.",
};

export function styleRiskRows(): StyleRiskRow[] {
  return textStyles.map((style) => {
    const probeOut = style.transform("ABab");
    const letters = [..."ABab"].length;
    const construction: Construction =
      [...probeOut].length > letters ? "marked" : "single";
    const unchanged = construction === "single" ? unchangedLowerLetters(style) : [];
    const autoNote =
      unchanged.length > 0
        ? `${unchanged.join(", ")} stay${unchanged.length === 1 ? "s" : ""} as typed (no styled form exists).`
        : undefined;
    return {
      id: style.id,
      name: style.name,
      construction,
      stacking: construction === "single" ? "one character" : measureStacking(style),
      digitsStyledCount: styledDigitCount(style),
      unchangedLetters: unchanged,
      note: MANUAL_NOTES[style.id] ?? autoNote,
    };
  });
}

/** Summary counts the guides quote in prose; tests pin them to the engine. */
export function styleRiskSummary() {
  const rows = styleRiskRows();
  const single = rows.filter((row) => row.construction === "single");
  const marked = rows.filter((row) => row.construction === "marked");
  const partial = rows.filter((row) => row.unchangedLetters.length > 0 || /part of the alphabet/.test(row.note ?? ""));
  return {
    total: rows.length,
    single: single.length,
    marked: marked.length,
    digitsAll: rows.filter((row) => row.digitsStyledCount === 10).length,
    digitsPartly: rows.filter((row) => row.digitsStyledCount > 0 && row.digitsStyledCount < 10).length,
    digitsPlain: rows.filter((row) => row.digitsStyledCount === 0).length,
    partial,
    markFamilies: {
      strike: marked.filter((row) => /strike|underline|slash/i.test(row.id)).length,
      zalgo: marked.filter((row) => row.id.startsWith("zalgo")).length,
    },
  };
}
