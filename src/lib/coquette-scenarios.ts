// Coquette paste rows. Wrappers match the style page: ribbon, small bow, loop.
// No length cap: Instagram and TikTok do not publish a charset we can cite.

import { measureText } from "./measure";
import { convertText, type TextStyleId } from "./text-styles";

export type CoquetteKitId = "bio" | "tiktok" | "caption" | "discord";
export type CoquettePieceKey = "display" | "bio" | "tiktok" | "caption" | "plain";

export interface CoquetteLine {
  key: Exclude<CoquettePieceKey, "plain">;
  left: string;
  right: string;
  transform: TextStyleId;
}

export interface CoquetteTemplate {
  id: CoquetteKitId;
  lines: CoquetteLine[];
}

export interface CoquettePiece {
  key: CoquettePieceKey;
  text: string;
  graphemes: number;
}

export const COQUETTE_KIT_TEMPLATES: Record<CoquetteKitId, CoquetteTemplate> = {
  bio: {
    id: "bio",
    lines: [
      { key: "display", left: "🎀 ", right: " 🎀", transform: "boldScript" },
      { key: "bio", left: "", right: " ♡", transform: "boldScript" },
    ],
  },
  tiktok: {
    id: "tiktok",
    lines: [{ key: "tiktok", left: "🎀 ", right: "", transform: "boldScript" }],
  },
  caption: {
    id: "caption",
    lines: [{ key: "caption", left: "𐙚 ", right: " 𐙚", transform: "boldScript" }],
  },
  discord: {
    id: "discord",
    lines: [{ key: "display", left: "𝜗𝜚 ", right: "", transform: "boldScript" }],
  },
};

function cleanName(name: string): string {
  return name.trim().replace(/\s+/g, " ");
}

export function buildCoquetteScenario(name: string, template: CoquetteTemplate): CoquettePiece[] {
  const clean = cleanName(name);
  const styled = template.lines.map((line) => {
    const text = `${line.left}${convertText(clean, line.transform)}${line.right}`;
    return { key: line.key, text, graphemes: measureText(text).graphemes };
  });
  return [...styled, { key: "plain", text: clean, graphemes: measureText(clean).graphemes }];
}
