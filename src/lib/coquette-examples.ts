// Ready-to-copy coquette strings. Built from the same bold script the page uses,
// so the strip and the generator cannot drift into two alphabets.

import { convertText, withWrapper } from "./text-styles";

const ROWS: readonly (readonly [string, readonly [string, string]])[] = [
  ["Mia", ["🎀 ", " 🎀"]],
  ["Lila", ["🎀 ", ""]],
  ["Belle", ["🎀 ", " ♡"]],
  ["Coco", ["♡ ", " 🎀"]],
  ["Lana", ["୨୧ ", " 🎀"]],
  ["Rose", ["🎀 ", " ୨୧"]],
  ["Noa", ["🎀 ", " ♡"]],
  ["Ava", ["𐙚 ", " 🎀"]],
];

export const coquetteCopyExamples: readonly string[] = ROWS.map(([name, wrap]) =>
  withWrapper(convertText(name, "boldScript"), wrap),
);
