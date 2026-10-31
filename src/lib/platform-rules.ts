// Fitting numbers for the preview card. None of these are a platform spec.
// ponytail: confidence stays published_approx until a row has a real testedAt.
// Upgrade path: fill testedAt from a dated in-game check, then confidenceLabel can say verified.

export type RuleConfidence = "unverified" | "published_approx" | "verified";

export interface PlatformFieldRule {
  platformId: string;
  field: "display_name" | "username" | "bio" | "player_name" | "status";
  /** Preview ceiling. null means this field does not warn. */
  approxMax: number | null;
  unit: "code_points" | "graphemes" | "utf16";
  unicodePolicy: "unknown" | "often_shown" | "usually_stripped";
  emojiPolicy: "unknown" | "often_shown" | "usually_stripped";
  confidence: RuleConfidence;
  sourceNote: string;
  testedAt: string | null;
}

/** A future in-game check. No rows are stored until someone actually runs one. */
export interface PlatformTestRecord {
  testedAt: string;
  version: string;
  platformId: string;
  field: PlatformFieldRule["field"];
  sample: string;
  result: "shown" | "rejected" | "replaced" | "boxes";
}

const NOTE = "Preview-card fitting number from the product fact sheet. Not a test record.";

export const platformFieldRules: PlatformFieldRule[] = [
  { platformId: "instagram", field: "display_name", approxMax: 30, unit: "code_points", unicodePolicy: "often_shown", emojiPolicy: "unknown", confidence: "published_approx", sourceNote: NOTE, testedAt: null },
  { platformId: "instagram", field: "username", approxMax: 30, unit: "code_points", unicodePolicy: "usually_stripped", emojiPolicy: "usually_stripped", confidence: "published_approx", sourceNote: "Login name keeps documented ASCII (letters, numbers, periods, underscores).", testedAt: null },
  { platformId: "instagram", field: "bio", approxMax: 150, unit: "code_points", unicodePolicy: "often_shown", emojiPolicy: "unknown", confidence: "published_approx", sourceNote: NOTE, testedAt: null },
  { platformId: "tiktok", field: "display_name", approxMax: 24, unit: "code_points", unicodePolicy: "often_shown", emojiPolicy: "unknown", confidence: "published_approx", sourceNote: NOTE, testedAt: null },
  { platformId: "tiktok", field: "bio", approxMax: 80, unit: "code_points", unicodePolicy: "often_shown", emojiPolicy: "unknown", confidence: "published_approx", sourceNote: NOTE, testedAt: null },
  { platformId: "tiktok", field: "username", approxMax: null, unit: "code_points", unicodePolicy: "usually_stripped", emojiPolicy: "usually_stripped", confidence: "published_approx", sourceNote: "Login name is plain text. No published max is stored here.", testedAt: null },
  { platformId: "discord", field: "display_name", approxMax: 32, unit: "code_points", unicodePolicy: "often_shown", emojiPolicy: "unknown", confidence: "published_approx", sourceNote: NOTE, testedAt: null },
  { platformId: "discord", field: "status", approxMax: 128, unit: "code_points", unicodePolicy: "often_shown", emojiPolicy: "unknown", confidence: "published_approx", sourceNote: NOTE, testedAt: null },
  { platformId: "discord", field: "username", approxMax: 32, unit: "code_points", unicodePolicy: "usually_stripped", emojiPolicy: "usually_stripped", confidence: "published_approx", sourceNote: "Preview card slices the login name to 32 ASCII characters.", testedAt: null },
  { platformId: "roblox", field: "display_name", approxMax: 20, unit: "code_points", unicodePolicy: "unknown", emojiPolicy: "unknown", confidence: "published_approx", sourceNote: NOTE, testedAt: null },
  { platformId: "roblox", field: "username", approxMax: 20, unit: "code_points", unicodePolicy: "usually_stripped", emojiPolicy: "usually_stripped", confidence: "published_approx", sourceNote: "Login name keeps documented ASCII (letters, numbers, one underscore).", testedAt: null },
  { platformId: "facebook", field: "display_name", approxMax: 50, unit: "code_points", unicodePolicy: "often_shown", emojiPolicy: "unknown", confidence: "published_approx", sourceNote: NOTE, testedAt: null },
  { platformId: "facebook", field: "bio", approxMax: 101, unit: "code_points", unicodePolicy: "often_shown", emojiPolicy: "unknown", confidence: "published_approx", sourceNote: NOTE, testedAt: null },
  { platformId: "facebook", field: "username", approxMax: null, unit: "code_points", unicodePolicy: "usually_stripped", emojiPolicy: "usually_stripped", confidence: "published_approx", sourceNote: "Username keeps letters, numbers, and periods. No published max is stored here.", testedAt: null },
  { platformId: "youtube", field: "display_name", approxMax: 100, unit: "code_points", unicodePolicy: "often_shown", emojiPolicy: "unknown", confidence: "published_approx", sourceNote: NOTE, testedAt: null },
  { platformId: "youtube", field: "bio", approxMax: 1000, unit: "code_points", unicodePolicy: "often_shown", emojiPolicy: "unknown", confidence: "published_approx", sourceNote: NOTE, testedAt: null },
  { platformId: "youtube", field: "username", approxMax: 30, unit: "code_points", unicodePolicy: "usually_stripped", emojiPolicy: "usually_stripped", confidence: "published_approx", sourceNote: "Handle is about 30 lowercase ASCII characters.", testedAt: null },
  { platformId: "pubg", field: "player_name", approxMax: 16, unit: "code_points", unicodePolicy: "unknown", emojiPolicy: "unknown", confidence: "published_approx", sourceNote: NOTE, testedAt: null },
  { platformId: "freefire", field: "player_name", approxMax: 12, unit: "code_points", unicodePolicy: "unknown", emojiPolicy: "unknown", confidence: "published_approx", sourceNote: NOTE, testedAt: null },
  { platformId: "cod", field: "player_name", approxMax: 16, unit: "code_points", unicodePolicy: "unknown", emojiPolicy: "unknown", confidence: "published_approx", sourceNote: NOTE, testedAt: null },
  { platformId: "cod", field: "username", approxMax: 4, unit: "code_points", unicodePolicy: "usually_stripped", emojiPolicy: "usually_stripped", confidence: "published_approx", sourceNote: "Clan tag is about 2–4 plain characters. The stored ceiling is 4.", testedAt: null },
];

const NAME_FIELD: Record<string, PlatformFieldRule["field"]> = {
  instagram: "display_name",
  tiktok: "display_name",
  discord: "display_name",
  roblox: "display_name",
  facebook: "display_name",
  youtube: "display_name",
  pubg: "player_name",
  freefire: "player_name",
  cod: "player_name",
};

const EXTRA_FIELD: Record<string, PlatformFieldRule["field"]> = {
  instagram: "bio",
  tiktok: "bio",
  discord: "status",
  facebook: "bio",
  youtube: "bio",
};

export function fieldRule(platformId: string, field: PlatformFieldRule["field"]): PlatformFieldRule | undefined {
  return platformFieldRules.find((rule) => rule.platformId === platformId && rule.field === field);
}

export function confidenceLabel(rule: PlatformFieldRule): "verified" | "partial" | "needs_verification" {
  if (rule.confidence === "verified" && rule.testedAt) return "verified";
  if (rule.unicodePolicy === "usually_stripped") return "partial";
  return "needs_verification";
}

export function previewNameRule(platformId: string): PlatformFieldRule {
  const field = NAME_FIELD[platformId];
  const rule = field ? fieldRule(platformId, field) : undefined;
  if (!rule || rule.approxMax === null || rule.unit !== "code_points") {
    throw new Error(`No code-point name rule for ${platformId}`);
  }
  return rule;
}

export function previewNameMax(platformId: string): number {
  const max = previewNameRule(platformId).approxMax;
  if (max === null) throw new Error(`No code-point name rule for ${platformId}`);
  return max;
}

export function previewExtraMax(platformId: string): number | undefined {
  const field = EXTRA_FIELD[platformId];
  if (!field) return undefined;
  const rule = fieldRule(platformId, field);
  if (!rule || rule.approxMax === null || rule.unit !== "code_points") {
    throw new Error(`No code-point extra rule for ${platformId}`);
  }
  return rule.approxMax;
}
