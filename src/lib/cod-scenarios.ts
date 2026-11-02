// Local COD name rows. The clan line is a short plain slice for preview.
// ponytail: first 3 graphemes, not a clan-tag parser. Official caps stay unclaimed.

import { measureText, sliceGraphemes } from "./measure";
import { convertText, type TextStyleId } from "./text-styles";

export const COD_SOURCES = {
  mobile:
    "https://support.activision.com/cod-mobile/articles/managing-your-account-and-friends-in-call-of-duty-mobile",
  activisionId: "https://support.activision.com/articles/name-changes-in-call-of-duty",
} as const;

export type CodKitId = "ranked" | "clan" | "modes";
export type CodPieceKey = "player" | "clan" | "plain";

export interface CodDecor {
  left: string;
  right: string;
  transform: TextStyleId;
}

export interface CodTemplate {
  id: CodKitId;
  player: CodDecor;
}

export interface CodPiece {
  key: CodPieceKey;
  text: string;
  graphemes: number;
}

export const COD_KIT_TEMPLATES: Record<CodKitId, CodTemplate> = {
  ranked: { id: "ranked", player: { left: "", right: "", transform: "smallCaps" } },
  clan: { id: "clan", player: { left: "「", right: "」", transform: "bold" } },
  modes: { id: "modes", player: { left: "", right: "", transform: "bold" } },
};

function cleanName(name: string): string {
  return name.trim().replace(/\s+/g, " ");
}

export function buildCodScenario(name: string, template: CodTemplate): CodPiece[] {
  const clean = cleanName(name);
  const player = `${template.player.left}${convertText(clean, template.player.transform)}${template.player.right}`;
  const rows: [CodPieceKey, string][] = [
    ["player", player],
    ["clan", sliceGraphemes(clean, 3)],
    ["plain", clean],
  ];
  return rows.map(([key, text]) => ({ key, text, graphemes: measureText(text).graphemes }));
}
