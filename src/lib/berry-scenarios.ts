// Ready-made Berry Avenue sets. Display names stay inside the 3–20 length
// from Roblox's display-name announcement. Bio and sign have no published
// Berry Avenue maximum, so those pieces only report a grapheme count.

import { measureText, sliceGraphemes } from "./measure";
import { convertText, type TextStyleId } from "./text-styles";

export const DISPLAY_NAME_MIN = 3;
export const DISPLAY_NAME_MAX = 20;

export const ROBLOX_SOURCES = {
  displayNameHelp: "https://en.help.roblox.com/hc/en-us/articles/4401938870292-Changing-Your-Display-Name",
  displayNameAnnouncement: "https://devforum.roblox.com/t/say-hello-to-display-names/1036435",
  experienceChat: "https://en.help.roblox.com/hc/en-us/articles/203313520-Experience-Chat",
  safety: "https://en.help.roblox.com/hc/en-us/articles/203313120-Safety-Features-Chat-Privacy-Filtering",
  textFiltering: "https://create.roblox.com/docs/en-us/ui/text-filtering",
  communityStandards: "https://about.roblox.com/community-standards",
} as const;

export type ScenarioId = "cute" | "cool" | "horror";
export type ScenarioPieceKey = "display" | "bio" | "sign" | "plain";

export interface ScenarioDecor {
  left: string;
  right: string;
  transform: TextStyleId;
}

export interface ScenarioLine {
  before: string;
  after: string;
  transform: TextStyleId;
}

export interface ScenarioTemplate {
  id: ScenarioId;
  display: ScenarioDecor;
  bio: ScenarioLine;
  sign: ScenarioLine;
}

export interface BuiltPiece {
  key: ScenarioPieceKey;
  text: string;
  graphemes: number;
  min: number | null;
  max: number | null;
  outside: boolean;
  trimmed: boolean;
}

function nameForLine(name: string): { text: string; trimmed: boolean } {
  const clean = name.trim().replace(/\s+/g, " ");
  const sliced = sliceGraphemes(clean, DISPLAY_NAME_MAX);
  return { text: sliced, trimmed: measureText(clean).graphemes > DISPLAY_NAME_MAX };
}

function fitDisplay(name: string, decor: ScenarioDecor): { text: string; trimmed: boolean } {
  const base = nameForLine(name);
  const styled = convertText(base.text, decor.transform);
  const wrapped = `${decor.left}${styled}${decor.right}`;
  if (measureText(wrapped).graphemes <= DISPLAY_NAME_MAX) {
    return { text: wrapped, trimmed: base.trimmed };
  }
  return { text: styled, trimmed: base.trimmed };
}

function fitLine(name: string, line: ScenarioLine): { text: string; trimmed: boolean } {
  const base = nameForLine(name);
  return {
    text: `${line.before}${convertText(base.text, line.transform)}${line.after}`,
    trimmed: base.trimmed,
  };
}

function piece(
  key: ScenarioPieceKey,
  text: string,
  trimmed: boolean,
  bounded: boolean,
): BuiltPiece {
  const graphemes = measureText(text).graphemes;
  if (!bounded) {
    return { key, text, graphemes, min: null, max: null, outside: false, trimmed };
  }
  return {
    key,
    text,
    graphemes,
    min: DISPLAY_NAME_MIN,
    max: DISPLAY_NAME_MAX,
    outside: graphemes < DISPLAY_NAME_MIN || graphemes > DISPLAY_NAME_MAX,
    trimmed,
  };
}

export function buildScenario(name: string, template: ScenarioTemplate): BuiltPiece[] {
  const display = fitDisplay(name, template.display);
  const bio = fitLine(name, template.bio);
  const sign = fitLine(name, template.sign);
  const plain = nameForLine(name);
  return [
    piece("display", display.text, display.trimmed, true),
    piece("bio", bio.text, bio.trimmed, false),
    piece("sign", sign.text, sign.trimmed, false),
    piece("plain", plain.text, plain.trimmed, true),
  ];
}
