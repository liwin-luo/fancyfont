// Gaming nickname combination engine.
//
// Nicknames are built from curated decoration templates per vibe style,
// crossed with Unicode letter styles from the text engine. Generation is
// deterministic for a given (name, style, nonce) so results can be
// reproduced and tested; bumping the nonce yields a fresh shuffle.

import { convertText, type TextStyleId } from "./text-styles";

export type NicknameTransform = TextStyleId | "identity";

export interface VibeStyle {
  id: string;
  name: string;
  /** Accent color for the style chip (decorative only, never the only cue). */
  accent: string;
  /** [left, right] decoration pairs wrapped around the styled name. */
  wrappers: [string, string][];
  /** Letter styles applied to the base name inside each wrapper. */
  transforms: NicknameTransform[];
}

export const vibeStyles: VibeStyle[] = [
  {
    id: "cool",
    name: "Cool",
    accent: "#60A5FA",
    wrappers: [
      ["꧁༒", "༒꧂"],
      ["★彡", "彡★"],
      ["⚡", "⚡"],
      ["♆", "♆"],
      ["『", "』"],
      ["✦", "✦"],
      ["彡", "彡"],
      ["꧁", "꧂"],
      ["【", "】"],
    ],
    transforms: ["script", "smallCaps", "bold", "identity"],
  },
  {
    id: "dark",
    name: "Dark",
    accent: "#8B5CF6",
    wrappers: [
      ["꧁☠︎", "☠︎꧂"],
      ["☠︎", "☠︎"],
      ["†", "†"],
      ["✞", "✞"],
      ["「✘", "✘」"],
      ["◤", "◥"],
      ["☾", "☽"],
      ["༄", "༄"],
    ],
    transforms: ["fraktur", "boldFraktur", "smallCaps", "identity"],
  },
  {
    id: "cute",
    name: "Cute",
    accent: "#F9A8D4",
    wrappers: [
      ["♡", "♡"],
      ["୨୧", "୨୧"],
      ["✿", "✿"],
      ["꒰", "꒱"],
      ["⋆｡˚", "˚｡⋆"],
      ["❀", "❀"],
      ["୧", "୨"],
      ["ᰔᩚ", "ᰔᩚ"],
    ],
    transforms: ["bubble", "script", "circled", "identity"],
  },
  {
    id: "pro",
    name: "Pro",
    accent: "#64748B",
    wrappers: [
      ["✪", "✪"],
      ["「", "」"],
      ["〔", "〕"],
      ["◤", "◥"],
      ["〖", "〗"],
      ["⌈", "⌉"],
    ],
    transforms: ["smallCaps", "bold", "monospace", "identity"],
  },
  {
    id: "minimal",
    name: "Minimal",
    accent: "#A8A29E",
    wrappers: [
      ["", ""],
      ["· ", " ·"],
      ["— ", " —"],
      ["✦ ", ""],
      ["", " ✧"],
    ],
    transforms: ["smallCaps", "identity"],
  },
];

export type VibeStyleId = (typeof vibeStyles)[number]["id"];
export type NicknameStyle = VibeStyleId | "all";

export const MAX_NICKNAME_LENGTH = 24;
export const NICKNAME_PAGE_SIZE = 24;

/** Curated left/right decoration pairs offered in the custom builder. */
export const decoratorPairs: [string, string][] = [
  ["", ""],
  ["꧁༒", "༒꧂"],
  ["꧁", "꧂"],
  ["༺", "༻"],
  ["★", "★"],
  ["✦", "✦"],
  ["⚡", "⚡"],
  ["☠︎", "☠︎"],
  ["†", "†"],
  ["♡", "♡"],
  ["✿", "✿"],
  ["『", "』"],
  ["「", "」"],
  ["【", "】"],
  ["〖", "〗"],
  ["· ", " ·"],
  ["— ", " —"],
  ["⋆｡˚", "˚｡⋆"],
  ["୨୧", "୨୧"],
  ["☾", "☽"],
];

export interface CustomCombo {
  left: string;
  right: string;
  transform: NicknameTransform;
}

export function buildCustomNickname(name: string, combo: CustomCombo): string {
  const clean = name.trim().replace(/\s+/g, " ").slice(0, MAX_NICKNAME_LENGTH);
  const inner =
    combo.transform === "identity" ? clean : convertText(clean, combo.transform);
  return combo.left + inner + combo.right;
}

export interface DecorationCostRow {
  /** Builder-style label, e.g. "★ name ★". */
  label: string;
  /** Code points the pair adds around the name, measured with an identity transform. */
  cost: number;
  /** The pair built around the sample name. */
  example: string;
}

/** Measures each builder decoration pair's code-point cost from the engine itself. */
export function decorationCostRows(name = "Shadow"): DecorationCostRow[] {
  return decoratorPairs.map(([left, right]) => {
    const label = left === "" && right === "" ? "none — plain name" : `${left} name ${right}`;
    const out = buildCustomNickname(name, { left, right, transform: "identity" });
    return { label, cost: [...out].length - [...name.trim()].length, example: out };
  });
}

/** Deterministic string hash (xmur3). */
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
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle<T>(items: readonly T[], seed: number): T[] {
  const rand = mulberry32(seed);
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/** Short bases used only when the user has not typed a name. */
const SUGGESTED_BASES = ["Nova", "Luna", "Rex", "Milo", "Aria", "Kai", "Nyx", "Juno"] as const;

export function suggestedBases(style: NicknameStyle, nonce: number): string[] {
  return shuffle([...SUGGESTED_BASES], hashSeed(`suggest|${style}|${nonce}`)).slice(0, 4);
}

function poolFor(name: string, style: NicknameStyle): string[] {
  const selected = style === "all" ? vibeStyles : vibeStyles.filter((s) => s.id === style);
  const pool: string[] = [];
  for (const vibe of selected) {
    for (const [left, right] of vibe.wrappers) {
      for (const transform of vibe.transforms) {
        const inner = transform === "identity" ? name : convertText(name, transform);
        pool.push(left + inner + right);
      }
    }
  }
  return pool;
}

export function generateNicknames(
  rawName: string,
  style: NicknameStyle = "all",
  nonce = 0,
  count = 24,
): string[] {
  const name = rawName.trim().replace(/\s+/g, " ").slice(0, MAX_NICKNAME_LENGTH);
  const names = name ? [name] : suggestedBases(style, nonce);
  const unique = Array.from(new Set(names.flatMap((base) => poolFor(base, style))));
  const seed = hashSeed(`${(name || "suggest").toLowerCase()}|${style}|${nonce}`);
  return shuffle(unique, seed).slice(0, count);
}
