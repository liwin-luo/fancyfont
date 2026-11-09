// 正文里的少量相关入口。只链当前语言真实存在的页面，缺译则不出现。
// 锚文本用目标页自己的 navName，不另造“全都能用在账号名里”的承诺。

import { localePath, type Locale } from "./i18n";
import { FEATURED_GAME_TEXT_SLUGS } from "./hubs";
import { getPlatformPageFor } from "./platform-pages";
import { getStylePageFor } from "./style-pages";

export interface ContextLink {
  href: string;
  title: string;
  description: string;
}

const NEIGHBORS: Record<string, readonly string[]> = {
  "cursive-fonts": ["signature-font-generator"],
  "elegant-font-generator": ["signature-font-generator"],
  "small-fonts": ["superscript-subscript-generator"],
  "tiny-text-generator": ["superscript-subscript-generator"],
  "instagram-fonts": ["twitter-fonts"],
  "game-name-generator": ["minecraft-fonts", "berry-avenue-fonts"],
  "roblox-name-generator": ["berry-avenue-fonts", "adopt-me-fonts"],
  "adopt-me-fonts": ["berry-avenue-fonts", "coquette-font-generator"],
  "coquette-font-generator": ["berry-avenue-fonts"],
  "berry-avenue-fonts": ["roblox-name-generator", "adopt-me-fonts", "coquette-font-generator"],
  "twitter-fonts": ["instagram-fonts"],
  "minecraft-fonts": ["game-name-generator"],
  "signature-font-generator": ["cursive-fonts"],
  "superscript-subscript-generator": ["tiny-text-generator", "small-fonts"],
};

function linkFor(locale: Locale, slug: string): ContextLink | undefined {
  const style = getStylePageFor(slug, locale);
  if (style) {
    const copy = style.copy[locale]!;
    return { href: localePath(locale, `/${slug}/`), title: copy.navName, description: copy.description };
  }
  const platform = getPlatformPageFor(slug, locale);
  if (platform) {
    const copy = platform.copy[locale]!;
    return { href: localePath(locale, `/${slug}/`), title: copy.navName, description: copy.description };
  }
  return undefined;
}

export function contextualLinks(locale: Locale, slug: string): ContextLink[] {
  const slugs = NEIGHBORS[slug] ?? [];
  const links: ContextLink[] = [];
  for (const target of slugs) {
    const link = linkFor(locale, target);
    if (link) links.push(link);
  }
  return links;
}

/** 首页一小块游戏/角色扮演入口。某语言没有的页面直接跳过。 */
export function featuredGameTextLinks(locale: Locale): ContextLink[] {
  const links: ContextLink[] = [];
  for (const slug of FEATURED_GAME_TEXT_SLUGS) {
    const link = linkFor(locale, slug);
    if (link) links.push(link);
  }
  return links;
}

export function uniqueLinks<T extends { href: string }>(links: T[]): T[] {
  const seen = new Set<string>();
  const out: T[] = [];
  for (const link of links) {
    if (seen.has(link.href)) continue;
    seen.add(link.href);
    out.push(link);
  }
  return out;
}
