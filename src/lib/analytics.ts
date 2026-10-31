// Product events for GA4. Nothing here accepts the user's text: the
// outbound object is an allowlist, and identifiers that are not short
// tokens are dropped. Scripts render only when a measurement ID is set.

export const ANALYTICS_EVENTS = [
  "fancy_text_view",
  "fancy_text_style_filter",
  "fancy_text_copy",
  "fancy_text_favorite",
  "fancy_text_png_export",
  "gaming_name_view",
  "gaming_name_generate",
  "gaming_name_copy",
  "gaming_name_save",
  "symbols_view",
  "symbols_search",
  "symbols_category_select",
  "symbol_copy",
  "symbol_add_to_board",
  "symbol_copy_all",
  "bio_template_select",
  "bio_copy",
  "bio_png_export",
] as const;

export type AnalyticsEvent = (typeof ANALYTICS_EVENTS)[number];

export type AnalyticsTool = "fancy" | "gaming" | "symbols" | "blank" | "bio";

/** Fields that may leave the browser. There is no text field. */
export interface AnalyticsParams {
  page: string;
  tool: AnalyticsTool;
  style_id?: string;
  platform?: string;
  category?: string;
  length_bucket?: string;
  ok?: boolean;
}

export type TrackInput = Omit<AnalyticsParams, "page">;

const TOOLS = new Set<AnalyticsTool>(["fancy", "gaming", "symbols", "blank", "bio"]);
const LENGTH_BUCKET = /^(0|1-20|21-120|121\+)$/;
const TOKEN = /^[a-z0-9_-]{1,40}$/i;
const PAGE = /^\/[a-z0-9/_-]{0,120}$/i;

export function measurementIds(): { ga: string | null; clarity: string | null } {
  const ga = process.env.NEXT_PUBLIC_GA_ID ?? "";
  const clarity = process.env.NEXT_PUBLIC_CLARITY_ID ?? "";
  return {
    ga: /^G-[A-Z0-9]+$/.test(ga) ? ga : null,
    clarity: /^[a-z0-9]+$/i.test(clarity) ? clarity : null,
  };
}

function keepToken(value: string | undefined): string | undefined {
  return value && TOKEN.test(value) ? value : undefined;
}

export function track(event: AnalyticsEvent, params: TrackInput): void {
  if (typeof window === "undefined") return;
  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  if (!gtag) return;
  if (!TOOLS.has(params.tool)) return;

  const page = window.location.pathname;
  const safe: Record<string, string | boolean> = {
    page: PAGE.test(page) ? page : "/",
    tool: params.tool,
  };
  const styleId = keepToken(params.style_id);
  const platform = keepToken(params.platform);
  const category = keepToken(params.category);
  if (styleId) safe.style_id = styleId;
  if (platform) safe.platform = platform;
  if (category) safe.category = category;
  if (params.length_bucket && LENGTH_BUCKET.test(params.length_bucket)) {
    safe.length_bucket = params.length_bucket;
  }
  if (typeof params.ok === "boolean") safe.ok = params.ok;
  gtag("event", event, safe);
}
