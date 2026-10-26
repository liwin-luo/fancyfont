// Platform preset pages: shared routing/config plus per-locale copy.
// Platform rules change — every locale's copy keeps the honest wording.

import { localePath, type Locale } from "./i18n";
import { getStylePage } from "./style-pages";
import type { PlatformPreviewId } from "./platform-preview";
import type { TextStyleId } from "./text-styles";
import { platformPagesEn, type PlatformPageCopy } from "./content/platform-pages-en";
import { platformPagesEs } from "./content/platform-pages-es";
import { platformPagesPtBr } from "./content/platform-pages-pt-br";
import { platformPagesZhCn } from "./content/platform-pages-zh-cn";
import { platformPagesId } from "./content/platform-pages-id";
import { morePlatformCopy } from "./content/platform-pages-more";

export type {
  PlatformPageCopy,
  PlatformPageFaq,
  PlatformGuidance,
  PlatformPresetCopy,
} from "./content/platform-pages-en";

export interface PlatformPageDef {
  slug: string;
  platform: string;
  /** "gaming" renders the nickname generator, otherwise the text tool. */
  toolMode: "text" | "gaming";
  preview: PlatformPreviewId;
  featuredStyles: TextStyleId[];
  related: string[];
  copy: Record<Locale, PlatformPageCopy>;
}

const SHARED: Omit<PlatformPageDef, "copy">[] = [
  {
    slug: "pubg-name-generator",
    platform: "PUBG",
    toolMode: "gaming",
    preview: "pubg",
    featuredStyles: ["bold", "smallCaps", "bubble"],
    related: ["free-fire-name-generator", "cod-name-generator"],
  },
  {
    slug: "free-fire-name-generator",
    platform: "Free Fire",
    toolMode: "gaming",
    preview: "freefire",
    featuredStyles: ["bold", "smallCaps", "bubble"],
    related: ["pubg-name-generator", "cod-name-generator"],
  },
  {
    slug: "facebook-fonts",
    platform: "Facebook",
    toolMode: "text",
    preview: "facebook",
    featuredStyles: ["bold", "script", "smallCaps", "fullwidth", "bubble"],
    related: ["instagram-fonts", "youtube-fonts"],
  },
  {
    slug: "instagram-fonts",
    platform: "Instagram",
    toolMode: "text",
    preview: "instagram",
    featuredStyles: ["script", "boldScript", "smallCaps", "fullwidth", "bubble"],
    related: ["tiktok-fonts", "discord-fonts", "coquette-font-generator"],
  },
  {
    slug: "tiktok-fonts",
    platform: "TikTok",
    toolMode: "text",
    preview: "tiktok",
    featuredStyles: ["boldScript", "fraktur", "bubble", "fullwidth", "smallCaps"],
    related: ["instagram-fonts", "glitch-text-generator"],
  },
  {
    slug: "discord-fonts",
    platform: "Discord",
    toolMode: "text",
    preview: "discord",
    featuredStyles: ["bold", "monospace", "fraktur", "smallCaps", "bubble"],
    related: ["roblox-name-generator", "instagram-fonts", "coquette-font-generator"],
  },
  {
    slug: "cod-name-generator",
    platform: "COD",
    toolMode: "gaming",
    preview: "cod",
    featuredStyles: ["bold", "smallCaps", "bubble"],
    related: ["pubg-name-generator", "free-fire-name-generator"],
  },
  {
    slug: "youtube-fonts",
    platform: "YouTube",
    toolMode: "text",
    preview: "youtube",
    featuredStyles: ["bold", "boldScript", "smallCaps", "fullwidth", "bubble"],
    related: ["facebook-fonts", "tiktok-fonts"],
  },
  {
    slug: "roblox-name-generator",
    platform: "Roblox",
    toolMode: "gaming",
    preview: "roblox",
    featuredStyles: ["bold", "smallCaps", "bubble"],
    related: ["adopt-me-fonts", "berry-avenue-fonts", "discord-fonts"],
  },
  {
    slug: "adopt-me-fonts",
    platform: "Adopt Me",
    toolMode: "text",
    preview: "roblox",
    featuredStyles: ["smallCaps", "bubble", "script"],
    related: ["preppy-font-generator", "berry-avenue-fonts", "roblox-name-generator"],
  },
  {
    slug: "berry-avenue-fonts",
    platform: "Berry Avenue",
    toolMode: "text",
    preview: "roblox",
    featuredStyles: ["boldScript", "smallCaps", "script"],
    related: ["coquette-font-generator", "adopt-me-fonts", "roblox-name-generator"],
  },
];

const COPY: Record<Locale, Record<string, PlatformPageCopy>> = {
  en: platformPagesEn,
  es: platformPagesEs,
  "pt-br": platformPagesPtBr,
  "zh-cn": platformPagesZhCn,
  id: platformPagesId,
};

function pageCopy(locale: Locale, slug: string): PlatformPageCopy {
  const copy = COPY[locale][slug] ?? morePlatformCopy[locale][slug];
  if (!copy) throw new Error(`Missing platform copy: ${locale} ${slug}`);
  return copy;
}

export const platformPages: PlatformPageDef[] = SHARED.map((shared) => ({
  ...shared,
  copy: {
    en: pageCopy("en", shared.slug),
    es: pageCopy("es", shared.slug),
    "pt-br": pageCopy("pt-br", shared.slug),
    "zh-cn": pageCopy("zh-cn", shared.slug),
    id: pageCopy("id", shared.slug),
  },
}));

export function getPlatformPage(locale: Locale, slug: string): PlatformPageDef | undefined {
  return platformPages.find((page) => page.slug === slug);
}

/** Style and platform slugs share one related row, so a look can point at a place. */
export function relatedToolLinks(locale: Locale, slugs: readonly string[]) {
  const links: { href: string; title: string; description: string }[] = [];
  for (const slug of slugs) {
    const style = getStylePage(locale, slug);
    if (style) {
      links.push({
        href: localePath(locale, `/${style.slug}/`),
        title: style.copy[locale].h1,
        description: style.copy[locale].intro,
      });
      continue;
    }
    const platform = getPlatformPage(locale, slug);
    if (platform) {
      links.push({
        href: localePath(locale, `/${platform.slug}/`),
        title: platform.copy[locale].h1,
        description: platform.copy[locale].intro,
      });
    }
  }
  return links;
}
