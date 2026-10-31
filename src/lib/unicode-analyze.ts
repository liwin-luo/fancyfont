// What the browser can see in a nickname. It does not know whether a game
// server accepts the characters or whether a device has the font.

import { graphemeParts } from "./measure";
import { confidenceLabel, type PlatformFieldRule } from "./platform-rules";
import { convertText, type TextStyleId } from "./text-styles";

export interface GraphemePoints {
  text: string;
  points: string[];
}

export interface UnicodeAnalysis {
  graphemes: GraphemePoints[];
  hasCombining: boolean;
  hasVariationSelector: boolean;
  hasEmoji: boolean;
  /** Latin letters the selected style leaves unchanged. Empty for plain letters. */
  unchangedLatin: string[];
}

export function formatCodePoint(codePoint: number): string {
  return `U+${codePoint.toString(16).toUpperCase().padStart(4, "0")}`;
}

export function analyzeNickname(
  nickname: string,
  styleId: TextStyleId | "identity",
  source: string,
): UnicodeAnalysis {
  const graphemes = graphemeParts(nickname).map((text) => ({
    text,
    points: [...text].map((char) => formatCodePoint(char.codePointAt(0) ?? 0)),
  }));
  const codePoints = [...nickname].map((char) => char.codePointAt(0) ?? 0);
  return {
    graphemes,
    hasCombining: /\p{M}/u.test(nickname),
    hasVariationSelector: codePoints.some((cp) => cp === 0xfe0e || cp === 0xfe0f),
    hasEmoji: /\p{Extended_Pictographic}/u.test(nickname),
    unchangedLatin: styleId === "identity" ? [] : latinGaps(source, styleId),
  };
}

function latinGaps(source: string, styleId: TextStyleId): string[] {
  const seen = new Set<string>();
  const gaps: string[] = [];
  for (const char of source) {
    if (!/[A-Za-z]/.test(char) || seen.has(char)) continue;
    seen.add(char);
    if (convertText(char, styleId) === char) gaps.push(char);
  }
  return gaps;
}

/** `none` means the page has no platform field. Verified still requires testedAt. */
export function reportStatus(
  rule: PlatformFieldRule | null,
): "needs_verification" | "partial" | "verified" | "none" {
  if (!rule) return "none";
  return confidenceLabel(rule);
}
