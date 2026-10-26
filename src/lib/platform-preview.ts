// Local profile-card limits and the plain handle shown beside styled text.
//
// ponytail: length is code points, and the handle keeps only ASCII the
// platform already documents. Real apps count UTF-16 or graphemes and apply
// their own font — the card is a fitting check, not a pixel match.

export type PlatformPreviewId =
  | "instagram"
  | "tiktok"
  | "discord"
  | "roblox"
  | "facebook"
  | "youtube"
  | "pubg"
  | "freefire"
  | "cod";

export interface PreviewFields {
  nameLabel: "displayName" | "nickname";
  nameMax: number;
  extra?: { label: "bio" | "status"; max: number };
  /** Games that only have one name field omit this. */
  handle?: "social" | "discord" | "roblox" | "youtube";
}

export const previewFields: Record<PlatformPreviewId, PreviewFields> = {
  instagram: { nameLabel: "displayName", nameMax: 30, extra: { label: "bio", max: 150 }, handle: "social" },
  tiktok: { nameLabel: "nickname", nameMax: 24, extra: { label: "bio", max: 80 }, handle: "social" },
  discord: { nameLabel: "nickname", nameMax: 32, extra: { label: "status", max: 128 }, handle: "discord" },
  roblox: { nameLabel: "displayName", nameMax: 20, handle: "roblox" },
  facebook: { nameLabel: "displayName", nameMax: 50, extra: { label: "bio", max: 101 }, handle: "social" },
  youtube: { nameLabel: "displayName", nameMax: 100, extra: { label: "bio", max: 1000 }, handle: "youtube" },
  pubg: { nameLabel: "nickname", nameMax: 16 },
  freefire: { nameLabel: "nickname", nameMax: 12 },
  cod: { nameLabel: "nickname", nameMax: 16 },
};

export function codePointLength(text: string): number {
  return [...text].length;
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
