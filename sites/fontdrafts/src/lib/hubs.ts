// 中间层 hub 页:首页与叶子页之间的分类目录(styles/platforms)。
// slug 跨语言一致(与样式/平台页同惯例);分组定义在这里,分组名在
// ui-strings 按 locale 解析,页面链接按 copy[locale] 过滤——某语言没有
// 的页面自动不出现,空组整组隐藏。

import { localePath, type Locale } from "./i18n";

export type HubSlug = "styles" | "platforms";

export function hubPath(locale: Locale, slug: HubSlug): string {
  return localePath(locale, `/${slug}/`);
}

export type StyleGroupKey = "script" | "gothic" | "cute" | "bold" | "small";
export type PlatformGroupKey = "social" | "games" | "chat";

export const STYLE_GROUPS: { key: StyleGroupKey; slugs: string[] }[] = [
  { key: "script", slugs: ["cursive-fonts", "elegant-font-generator", "coquette-font-generator", "heart-font-generator"] },
  { key: "gothic", slugs: ["gothic-fonts", "dark-font-generator", "chicano-font-generator"] },
  { key: "cute", slugs: ["cute-fonts", "bubble-fonts", "preppy-font-generator", "aesthetic-fonts", "decorated-nicknames"] },
  { key: "bold", slugs: ["bold-fonts", "italic-text-generator", "cool-font-generator", "fancy-numbers", "strikethrough-text"] },
  { key: "small", slugs: ["small-fonts", "tiny-text-generator", "upside-down-text", "zalgo-text", "crazy-font-generator"] },
];

export const PLATFORM_GROUPS: { key: PlatformGroupKey; slugs: string[] }[] = [
  {
    key: "social",
    slugs: [
      "instagram-fonts",
      "tiktok-fonts",
      "facebook-fonts",
      "youtube-fonts",
      "whatsapp-fonts",
      "discord-fonts",
      "douyin-fonts",
      "xiaohongshu-fonts",
      "weibo-fonts",
      "bilibili-fonts",
    ],
  },
  {
    key: "games",
    slugs: [
      "game-name-generator",
      "roblox-name-generator",
      "pubg-name-generator",
      "fortnite-name-generator",
      "cod-name-generator",
      "adopt-me-fonts",
      "berry-avenue-fonts",
      "free-fire-name-generator",
    ],
  },
  { key: "chat", slugs: ["wechat-fonts", "qq-fonts"] },
];

/** 首页/导航的精选样式(各语言都有;顺序即展示顺序)。 */
export const FEATURED_STYLE_SLUGS = [
  "cursive-fonts",
  "bold-fonts",
  "gothic-fonts",
  "cute-fonts",
  "aesthetic-fonts",
  "small-fonts",
  "zalgo-text",
  "fancy-numbers",
];

/** 各语言导航平台下拉的精选顺序(未列出的走 hub 页)。 */
export const FEATURED_PLATFORM_SLUGS: Record<Locale, string[]> = {
  en: ["instagram-fonts", "tiktok-fonts", "facebook-fonts", "youtube-fonts", "discord-fonts", "whatsapp-fonts", "roblox-name-generator", "game-name-generator"],
  "zh-cn": ["douyin-fonts", "xiaohongshu-fonts", "wechat-fonts", "qq-fonts", "weibo-fonts", "bilibili-fonts", "game-name-generator"],
  es: ["instagram-fonts", "tiktok-fonts", "facebook-fonts", "whatsapp-fonts", "free-fire-name-generator"],
  "pt-br": ["instagram-fonts", "tiktok-fonts", "facebook-fonts", "whatsapp-fonts", "roblox-name-generator", "free-fire-name-generator"],
  de: ["instagram-fonts", "tiktok-fonts", "facebook-fonts", "youtube-fonts", "discord-fonts", "whatsapp-fonts", "fortnite-name-generator", "game-name-generator"],
};
