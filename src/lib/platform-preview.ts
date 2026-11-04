// Local profile-card limits and the plain handle shown beside styled text.
//
// ponytail: length is code points, and the handle keeps only ASCII the
// platform already documents. Ceilings come from platform-rules.ts so the
// card and the rule table cannot drift. Real apps count UTF-16 or graphemes
// and apply their own font — the card is a fitting check, not a pixel match.

import { measureText } from "./measure";
import { previewExtraMax, previewNameMax } from "./platform-rules";

export type PlatformPreviewId =
  | "instagram"
  | "tiktok"
  | "discord"
  | "roblox"
  | "facebook"
  | "whatsapp"
  | "youtube"
  | "pubg"
  | "freefire"
  | "cod"
  | "fortnite";

export interface PreviewFields {
  nameLabel: "displayName" | "nickname";
  nameMax: number;
  extra?: { label: "bio" | "status"; max: number };
  /** Games that only have one name field omit this. */
  handle?: "social" | "discord" | "roblox" | "youtube";
}

function extraMax(id: PlatformPreviewId): number {
  const max = previewExtraMax(id);
  if (max === undefined) throw new Error(`No extra rule for ${id}`);
  return max;
}

export const previewFields: Record<PlatformPreviewId, PreviewFields> = {
  instagram: { nameLabel: "displayName", nameMax: previewNameMax("instagram"), extra: { label: "bio", max: extraMax("instagram") }, handle: "social" },
  tiktok: { nameLabel: "nickname", nameMax: previewNameMax("tiktok"), extra: { label: "bio", max: extraMax("tiktok") }, handle: "social" },
  discord: { nameLabel: "nickname", nameMax: previewNameMax("discord"), extra: { label: "status", max: extraMax("discord") }, handle: "discord" },
  roblox: { nameLabel: "displayName", nameMax: previewNameMax("roblox"), handle: "roblox" },
  facebook: { nameLabel: "displayName", nameMax: previewNameMax("facebook"), extra: { label: "bio", max: extraMax("facebook") }, handle: "social" },
  youtube: { nameLabel: "displayName", nameMax: previewNameMax("youtube"), extra: { label: "bio", max: extraMax("youtube") }, handle: "youtube" },
  whatsapp: { nameLabel: "displayName", nameMax: previewNameMax("whatsapp"), extra: { label: "status", max: extraMax("whatsapp") } },
  pubg: { nameLabel: "nickname", nameMax: previewNameMax("pubg") },
  freefire: { nameLabel: "nickname", nameMax: previewNameMax("freefire") },
  cod: { nameLabel: "nickname", nameMax: previewNameMax("cod") },
  fortnite: { nameLabel: "nickname", nameMax: previewNameMax("fortnite") },
};

export function codePointLength(text: string): number {
  return measureText(text).codePoints;
}

/** Visible clip. The full string is what gets copied; this is only the card. */
export function clipCodePoints(text: string, max: number): string {
  const chars = [...text];
  if (chars.length <= max) return text;
  return `${chars.slice(0, max).join("")}…`;
}

export function plainHandle(raw: string, kind: NonNullable<PreviewFields["handle"]>): string {
  const ascii = raw.normalize("NFKD").replace(/[^\x00-\x7F]/g, "");
  if (kind === "roblox") {
    const body = ascii.replace(/[^A-Za-z0-9_]/g, "").replace(/_+/g, "_").replace(/^_|_$/g, "");
    return (body || "Player").slice(0, 20);
  }
  if (kind === "discord") {
    const body = ascii
      .toLowerCase()
      .replace(/[^a-z0-9._]/g, "")
      .replace(/\.{2,}/g, ".")
      .replace(/^[._]+|[._]+$/g, "");
    return (body || "username").slice(0, 32);
  }
  if (kind === "youtube") {
    const body = ascii
      .toLowerCase()
      .replace(/[^a-z0-9._]/g, "")
      .replace(/\.{2,}/g, ".")
      .replace(/^[._]+|[._]+$/g, "");
    return (body || "channel").slice(0, 30);
  }
  const body = ascii.replace(/[^A-Za-z0-9._]/g, "").replace(/\.{2,}/g, ".").replace(/^[._]+|[._]+$/g, "");
  return (body || "username").slice(0, 30);
}
