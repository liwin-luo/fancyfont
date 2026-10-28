// Blank characters with a visible advance width, and the gap inserted
// between already-styled letters. Zero-width characters stay in the
// symbol library: repeating them still takes no space.

import { convertText, type TextStyleId } from "./text-styles";

export const BLANK_KINDS = [
  { id: "hangul", char: "\u3164", code: "U+3164" },
  { id: "braille", char: "\u2800", code: "U+2800" },
  { id: "ideo", char: "\u3000", code: "U+3000" },
] as const;

export type BlankKindId = (typeof BLANK_KINDS)[number]["id"];

/** Fixed lengths for the copy-the-blank controls. Independent of the letter gap. */
export const COPY_LENGTHS = [1, 20, 100] as const;

export const GAP_MIN = 0;
export const GAP_MAX = 5;

const DROPPED_SPACE = new Set([0x20, 0x3000, 0x09, 0x0a, 0x0d]);

let segmenter: Intl.Segmenter | undefined;

function graphemes(text: string): string[] {
  segmenter ??= new Intl.Segmenter(undefined, { granularity: "grapheme" });
  return [...segmenter.segment(text)].map((part) => part.segment);
}

function isDroppedSpace(grapheme: string): boolean {
  const cp = grapheme.codePointAt(0);
  return cp !== undefined && DROPPED_SPACE.has(cp);
}

export function codePointLength(text: string): number {
  return [...text].length;
}

export function repeatBlank(char: string, count: number): string {
  return char.repeat(count);
}

export function blankKind(id: BlankKindId) {
  const kind = BLANK_KINDS.find((entry) => entry.id === id);
  if (!kind) throw new Error(`Unknown blank: ${id}`);
  return kind;
}

/**
 * Insert `count` copies of `blank` between grapheme clusters.
 * Count 0 returns `styled` unchanged. Above 0, ASCII spaces and
 * ideographic spaces (including ones a style attached marks to) are
 * removed, so a typed space becomes the same gap.
 */
export function withBlankGaps(styled: string, blank: string, count: number): string {
  if (count <= 0) return styled;
  const parts = graphemes(styled).filter((grapheme) => !isDroppedSpace(grapheme));
  return parts.join(blank.repeat(count));
}

export function styleWithBlanks(text: string, style: TextStyleId, blank: string, count: number): string {
  return withBlankGaps(convertText(text, style), blank, count);
}
