// Shared wrap + paste-target choices for the fancy and gaming tools.
// Limits are the short end of common fields (display name ~20, bio ~80).
// ponytail: one number per target, not a per-platform table. Platform pages
// already name their own fields.

export const wrapPairs = [
  { id: "none", left: "", right: "" },
  { id: "star", left: "★ ", right: " ★" },
  { id: "heart", left: "♡ ", right: " ♡" },
  { id: "wings", left: "꧁", right: "꧂" },
  { id: "brackets", left: "『", right: "』" },
] as const;

export type WrapId = (typeof wrapPairs)[number]["id"];

export const pasteTargets = [
  { id: "anywhere", limit: null, plain: false },
  { id: "display", limit: 20, plain: false },
  { id: "bio", limit: 80, plain: false },
  { id: "username", limit: 20, plain: true },
] as const;

export type PasteTargetId = (typeof pasteTargets)[number]["id"];

export function applyWrap(text: string, id: WrapId): string {
  const pair = wrapPairs.find((item) => item.id === id) ?? wrapPairs[0];
  return pair.left + text + pair.right;
}

/** Frames for text that cannot be restyled (Han stays as typed). */
export const hanFrames: readonly (readonly [string, string])[] = [
  ["【", "】"],
  ["『", "』"],
  ["♡ ", " ♡"],
  ["★ ", " ★"],
  ["꧁", "꧂"],
];

export function hasHan(text: string): boolean {
  return /\p{Script=Han}/u.test(text);
}
