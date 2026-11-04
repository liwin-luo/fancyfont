// Per-character mixed-style conversion behind the crazy font page.
// "Crazy" comes from cycling several letter styles across one string with a
// seeded shuffle: deterministic (same text + level + seed rebuilds the same
// result), honest (unsupported characters pass through untouched), and
// reshuffleable (a new seed gives a genuinely new set).

import { convertText, type TextStyleId } from "./text-styles";

export type CrazyLevelId = "mild" | "wild" | "chaos";

export interface CrazyLevel {
  id: CrazyLevelId;
  /** Letter styles drawn per character position. */
  styles: TextStyleId[];
  /** Decoration pairs; each variant wraps the mixed string in one of these. */
  wrappers: [string, string][];
}

export const crazyLevels: CrazyLevel[] = [
  {
    id: "mild",
    styles: ["script", "bold", "smallCaps"],
    wrappers: [["", ""], ["· ", " ·"], ["✦ ", " ✦"]],
  },
  {
    id: "wild",
    styles: ["script", "boldFraktur", "bubble", "fullwidth", "smallCaps"],
    wrappers: [
      ["★ ", " ★"],
      ["꧁", "꧂"],
      ["『", "』"],
      ["⋆ ", " ⋆"],
      ["彡 ", " 彡"],
      ["✧ ", " ✧"],
    ],
  },
  {
    id: "chaos",
    styles: [
      "script",
      "boldFraktur",
      "bubble",
      "circled",
      "fullwidth",
      "upsideDown",
      "smallCaps",
      "monospace",
    ],
    wrappers: [
      ["꧁☠︎", "☠︎꧂"],
      ["⋆｡˚", "˚｡⋆"],
      ["『〖", "〗』"],
      ["⚡ ", " ⚡"],
      ["彡彡 ", " 彡彡"],
      ["⸸", "⸸"],
      ["ˈˌ", "ˌˈ"],
      ["✵", "✵"],
    ],
  },
];

export function isCrazyLevel(value: string): value is CrazyLevelId {
  return crazyLevels.some((level) => level.id === value);
}

/** Deterministic string hash (xmur3), same recipe as the nickname engine. */
function hashSeed(str: string): number {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return h >>> 0;
}

/** Deterministic PRNG (mulberry32). */
function mulberry32(seed: number): () => number {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 16), 2246822507)) ^ (t >>> 13);
    t = (t + Math.imul(t ^ (t >>> 10), 3266489909)) ^ (t >>> 16);
    return (t >>> 0) / 4294967296;
  };
}

export function crazyVariant(text: string, level: CrazyLevelId, seed: number): string {
  const def = crazyLevels.find((item) => item.id === level) ?? crazyLevels[0];
  const rand = mulberry32(hashSeed(`crazy|${def.id}|${seed}`));
  const mixed = [...text]
    .map((char) => {
      const style = def.styles[Math.floor(rand() * def.styles.length)];
      return convertText(char, style);
    })
    .join("");
  const wrapper = def.wrappers[Math.floor(rand() * def.wrappers.length)];
  return wrapper[0] + mixed + wrapper[1];
}

export interface CrazyVariant {
  id: string;
  level: CrazyLevelId;
  text: string;
}

export function generateCrazyVariants(
  text: string,
  level: CrazyLevelId,
  nonce: number,
  count = 6,
): CrazyVariant[] {
  return Array.from({ length: count }, (_, index) => ({
    id: `${level}-${nonce}-${index}`,
    level,
    text: crazyVariant(text, level, nonce * 97 + index),
  }));
}
