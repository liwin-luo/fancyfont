// 空白字符工具:有可见宽度的空白字符,以及把该空白插入已样式化字母之间的间隔。
// 零宽字符留在符号库的"隐形"分类里:重复它们依旧不占空间。

import { convertText, type TextStyleId } from "./text-styles";

export const BLANK_KINDS = [
  { id: "hangul", char: "\u3164", code: "U+3164" },
  { id: "braille", char: "\u2800", code: "U+2800" },
  { id: "ideo", char: "\u3000", code: "U+3000" },
] as const;

export type BlankKindId = (typeof BLANK_KINDS)[number]["id"];

/** 复制空白按钮的固定档位,与字母间隔无关。 */
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
 * 在字素簇之间插入 `count` 份空白。count 为 0 原样返回;大于 0 时剔除
 * 原有的 ASCII/全角空格(包括样式可能附带的),让用户输入的空格与间隔一致。
 */
export function withBlankGaps(styled: string, blank: string, count: number): string {
  if (count <= 0) return styled;
  const parts = graphemes(styled).filter((grapheme) => !isDroppedSpace(grapheme));
  return parts.join(blank.repeat(count));
}

export function styleWithBlanks(text: string, style: TextStyleId, blank: string, count: number): string {
  return withBlankGaps(convertText(text, style), blank, count);
}
