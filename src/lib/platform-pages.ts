// 平台专页:每个语言有自己的平台组合(en 主打 IG/TikTok/Discord/WhatsApp,
// zh 主打抖音/小红书/微信/QQ,es/pt-br 各自本土化)。页面在哪些语言可用
// 由 copy 的键决定;hreflang 只在可用语言之间输出。

import { localePath, type Locale } from "./i18n";
import type { TextStyleId } from "./text-styles";
import { platformPagesZhCn } from "./content/platform-pages-zh-cn";
import { platformPagesEn } from "./content/platform-pages-en";
import { platformPagesMigrationEn } from "./content/platform-pages-migration-en";
import { platformPagesMigrationEs } from "./content/platform-pages-migration-es";
import { platformPagesEs } from "./content/platform-pages-es";
import { platformPagesMigrationPtBr } from "./content/platform-pages-migration-pt-br";
import { platformPagesDe } from "./content/platform-pages-de";
import { platformPagesPtBr } from "./content/platform-pages-pt-br";
import { platformPagesGapEn } from "./content/platform-pages-gap-en";
import { getUi } from "./ui-strings";

export interface PlatformPageCopy {
  /** 导航/页脚短名。 */
  navName: string;
  h1: string;
  title: string;
  description: string;
  /** 平台显示名,如"抖音"/"Instagram"。 */
  platform: string;
  intro: string[];
  limits: { label: string; value: string }[];
  compat: string[];
  /** 现成昵称示例,复制即用。 */
  examples: string[];
  steps: string[];
  faq: { q: string; a: string }[];
}

export interface PlatformPageDef {
  slug: string;
  /** 各语言推荐的生成器样式(缺该语言键时用空列表)。 */
  styleIds: Partial<Record<Locale, TextStyleId[]>>;
  /** 各语言是否以中文装饰网格为主(true 时页面里渲染 CJK 网格)。 */
  cjkFirst?: Partial<Record<Locale, boolean>>;
  /** 页面主题:头带底色 + 专属图案/AI 插图(游戏页配游戏视觉)。 */
  theme?: { band: string; motif?: import("@/components/illustrations").MotifId; art?: string };
  copy: { [L in Locale]?: PlatformPageCopy };
}

// 平台页样式集:统一 10 种起步("每个种类至少 10 种字体"标准)。
const ZH_STYLES: TextStyleId[] = ["script", "bold", "fullwidth", "bubble", "monospace", "circled", "squared", "spaced", "smallCaps", "doubleStruck"];
const LATIN_STYLES: TextStyleId[] = ["script", "bold", "fullwidth", "smallCaps", "bubble", "circled", "monospace", "doubleStruck", "spaced", "sansBold"];
const GAME_STYLES: TextStyleId[] = ["bold", "script", "sansBold", "doubleStruck", "slash", "monospace", "fraktur", "circled", "smallCaps", "negativeCircled"];

const SHARED: Omit<PlatformPageDef, "copy">[] = [
  {
    slug: "instagram-fonts",
    styleIds: { de: LATIN_STYLES, en: LATIN_STYLES, "zh-cn": ZH_STYLES, es: LATIN_STYLES, "pt-br": LATIN_STYLES },
    cjkFirst: { "zh-cn": true },
  },
  {
    slug: "tiktok-fonts",
    styleIds: { de: LATIN_STYLES, en: LATIN_STYLES, es: LATIN_STYLES, "pt-br": LATIN_STYLES, "zh-cn": ZH_STYLES },
    cjkFirst: { "zh-cn": true },
  },
  { slug: "discord-fonts", styleIds: { de: LATIN_STYLES, en: LATIN_STYLES, es: LATIN_STYLES } },
  { slug: "whatsapp-fonts", styleIds: { de: LATIN_STYLES, en: LATIN_STYLES, es: LATIN_STYLES, "pt-br": LATIN_STYLES } },
  { slug: "roblox-name-generator", styleIds: { de: GAME_STYLES, en: GAME_STYLES, "pt-br": GAME_STYLES } },
  { slug: "pubg-name-generator", styleIds: { en: GAME_STYLES } },
  { slug: "free-fire-name-generator", styleIds: { en: GAME_STYLES, es: GAME_STYLES, "pt-br": GAME_STYLES } },
  {
    slug: "game-name-generator",
    styleIds: { de: GAME_STYLES, en: GAME_STYLES, "zh-cn": GAME_STYLES, es: GAME_STYLES, "pt-br": GAME_STYLES },
    cjkFirst: { "zh-cn": true, es: false, "pt-br": false },
  },
  { slug: "douyin-fonts", styleIds: { "zh-cn": ZH_STYLES }, cjkFirst: { "zh-cn": true } },
  // ── 迁移落地页:slug 与旧站一致(保护已收录 URL),文案首版仅英文。──
  {
    slug: "facebook-fonts",
    styleIds: { de: LATIN_STYLES,
      en: ["script", "bold", "sansBold", "smallCaps", "fullwidth", "bubble", "circled", "monospace", "doubleStruck", "spaced"],
      es: ["script", "bold", "sansBold", "smallCaps", "fullwidth", "bubble", "circled", "monospace", "doubleStruck", "spaced"],
      "pt-br": ["script", "bold", "sansBold", "smallCaps", "fullwidth", "bubble", "circled", "monospace", "doubleStruck", "spaced"],
    },
  },
  {
    slug: "youtube-fonts",
    styleIds: { de: LATIN_STYLES,
      en: ["bold", "sansBold", "monospace", "doubleStruck", "script", "smallCaps", "fullwidth", "circled", "bubble", "spaced"],
      es: ["bold", "sansBold", "monospace", "doubleStruck", "script", "smallCaps", "fullwidth", "circled", "bubble", "spaced"],
      "pt-br": ["bold", "sansBold", "monospace", "doubleStruck", "script", "smallCaps", "fullwidth", "circled", "bubble", "spaced"],
    },
  },
  {
    slug: "adopt-me-fonts",
    styleIds: {
      en: ["bold", "script", "sansBold", "doubleStruck", "bubble", "circled", "smallCaps", "fullwidth", "monospace", "spaced"],
      es: ["bold", "script", "sansBold", "doubleStruck", "bubble", "circled", "smallCaps", "fullwidth", "monospace", "spaced"],
      "pt-br": ["bold", "script", "sansBold", "doubleStruck", "bubble", "circled", "smallCaps", "fullwidth", "monospace", "spaced"],
    },
  },
  {
    slug: "berry-avenue-fonts",
    styleIds: {
      en: ["script", "boldScript", "smallCaps", "bubble", "circled", "spaced", "italic", "sansItalic", "fullwidth", "parenthesized"],
      es: ["script", "boldScript", "smallCaps", "bubble", "circled", "spaced", "italic", "sansItalic", "fullwidth", "parenthesized"],
      "pt-br": ["script", "boldScript", "smallCaps", "bubble", "circled", "spaced", "italic", "sansItalic", "fullwidth", "parenthesized"],
    },
  },
  {
    slug: "cod-name-generator",
    styleIds: { de: GAME_STYLES,
      en: ["bold", "script", "sansBold", "doubleStruck", "slash", "monospace", "fraktur", "smallCaps", "negativeCircled", "spaced"],
      es: ["bold", "script", "sansBold", "doubleStruck", "slash", "monospace", "fraktur", "smallCaps", "negativeCircled", "spaced"],
      "pt-br": ["bold", "script", "sansBold", "doubleStruck", "slash", "monospace", "fraktur", "smallCaps", "negativeCircled", "spaced"],
    },
  },
  {
    slug: "fortnite-name-generator",
    styleIds: { de: GAME_STYLES,
      en: ["bold", "sansBold", "doubleStruck", "script", "fraktur", "slash", "monospace", "circled", "smallCaps", "fullwidth"],
      es: ["bold", "sansBold", "doubleStruck", "script", "fraktur", "slash", "monospace", "circled", "smallCaps", "fullwidth"],
      "pt-br": ["bold", "sansBold", "doubleStruck", "script", "fraktur", "slash", "monospace", "circled", "smallCaps", "fullwidth"],
    },
  },
  { slug: "xiaohongshu-fonts", styleIds: { "zh-cn": ZH_STYLES }, cjkFirst: { "zh-cn": true } },
  { slug: "weibo-fonts", styleIds: { "zh-cn": ZH_STYLES }, cjkFirst: { "zh-cn": true } },
  { slug: "wechat-fonts", styleIds: { "zh-cn": ZH_STYLES }, cjkFirst: { "zh-cn": true } },
  { slug: "qq-fonts", styleIds: { "zh-cn": ZH_STYLES }, cjkFirst: { "zh-cn": true } },
  { slug: "bilibili-fonts", styleIds: { "zh-cn": ZH_STYLES }, cjkFirst: { "zh-cn": true } },
  // ── 缺口新页(content-gaps.md P0,50k+ 需求族):首版仅英文。──
  { slug: "twitter-fonts", styleIds: { en: LATIN_STYLES } },
  { slug: "minecraft-fonts", styleIds: { en: GAME_STYLES } },
];

// 按 slug 深合并:同一页面在多个语言文件里都有条目,浅展开会整键覆盖。
const COPIES: Record<string, { [L in Locale]?: PlatformPageCopy }> = {};
for (const source of [platformPagesEn, platformPagesMigrationEn, platformPagesMigrationEs, platformPagesDe, platformPagesZhCn, platformPagesEs, platformPagesMigrationPtBr, platformPagesPtBr, platformPagesGapEn]) {
  for (const [slug, locales] of Object.entries(source)) {
    COPIES[slug] = { ...COPIES[slug], ...locales };
  }
}

// 每页主题:游戏类页面配游戏视觉(手柄/方块/准星/火焰),其余按平台调性。
const PLATFORM_THEMES: Record<string, NonNullable<PlatformPageDef["theme"]>> = {
  "game-name-generator": { band: "bg-pop-green/10", motif: "game", art: "/ai/plat-game.jpg" },
  "roblox-name-generator": { band: "bg-pop-yellow/20", motif: "blocks" , art: "/ai/plat-roblox.jpg"},
  "pubg-name-generator": { band: "bg-pop-orange/10", motif: "shooter" , art: "/ai/plat-pubg.jpg"},
  "free-fire-name-generator": { band: "bg-pop-orange/15", motif: "flame" , art: "/ai/plat-freefire.jpg"},
  "discord-fonts": { band: "bg-pop-purple/10", motif: "game" , art: "/ai/plat-discord.jpg"},
  "qq-fonts": { band: "bg-pop-yellow/15", motif: "game" , art: "/ai/plat-qq.jpg"},
  "instagram-fonts": { band: "bg-pop-pink/10", motif: "social" , art: "/ai/plat-instagram.jpg"},
  "tiktok-fonts": { band: "bg-pop-purple/10", motif: "social" , art: "/ai/plat-tiktok.jpg"},
  "whatsapp-fonts": { band: "bg-pop-green/10", motif: "social" , art: "/ai/plat-whatsapp.jpg"},
  "weibo-fonts": { band: "bg-pop-orange/10", motif: "social" , art: "/ai/plat-weibo.jpg"},
  "wechat-fonts": { band: "bg-pop-green/10", motif: "cjk" , art: "/ai/plat-wechat.jpg"},
  "xiaohongshu-fonts": { band: "bg-pop-pink/10", motif: "cute" , art: "/ai/plat-xiaohongshu.jpg"},
  "douyin-fonts": { band: "bg-pop-purple/10", motif: "social", art: "/ai/plat-douyin.jpg" },
  "bilibili-fonts": { band: "bg-pop-blue/10", motif: "social" , art: "/ai/plat-bilibili.jpg"},
  // 迁移落地页:AI 插图已出图(gen-migration-art.sh)。
  "facebook-fonts": { band: "bg-pop-blue/15", motif: "social", art: "/ai/plat-facebook.jpg" },
  "youtube-fonts": { band: "bg-pop-orange/15", motif: "social", art: "/ai/plat-youtube.jpg" },
  "adopt-me-fonts": { band: "bg-pop-yellow/15", motif: "blocks", art: "/ai/plat-adoptme.jpg" },
  "berry-avenue-fonts": { band: "bg-pop-pink/10", motif: "cute", art: "/ai/plat-berry.jpg" },
  "cod-name-generator": { band: "bg-pop-green/15", motif: "shooter", art: "/ai/plat-cod.jpg" },
  "fortnite-name-generator": { band: "bg-pop-purple/10", motif: "game", art: "/ai/plat-fortnite.jpg" },
  // 缺口新页:暂无 AI 插图,仅配底色与图案。
  "twitter-fonts": { band: "bg-pop-blue/10", motif: "social" },
  "minecraft-fonts": { band: "bg-pop-green/10", motif: "blocks" },
};

export const platformPages: PlatformPageDef[] = SHARED.map((def) => ({
  ...def,
  styleIds: Object.fromEntries(
    Object.entries(def.styleIds).map(([locale, ids]) => [locale, ids ? fullCatalog(ids) : ids]),
  ) as PlatformPageDef["styleIds"],
  theme: PLATFORM_THEMES[def.slug],
  copy: COPIES[def.slug] ?? {},
}));

export function getPlatformPage(slug: string): PlatformPageDef | undefined {
  return platformPages.find((page) => page.slug === slug);
}

/** 该平台页实际可用的语言(copy 键)。 */
export function platformPageLocales(def: PlatformPageDef): Locale[] {
  return (Object.keys(def.copy) as Locale[]).filter((l) => def.copy[l]);
}

export function getPlatformPageFor(slug: string, locale: Locale): PlatformPageDef | undefined {
  const def = getPlatformPage(slug);
  return def && def.copy[locale] ? def : undefined;
}

/** 相关工具卡片:slug 解析为当前语言的标题/描述(样式页优先)。 */
export function relatedCards(
  locale: Locale,
  links: { slug: string; kind: "style" | "guide" }[],
): { href: string; title: string; description: string }[] {
  const out: { href: string; title: string; description: string }[] = [];
  for (const link of links) {
    if (link.kind === "style") {
      const copy = getStylePageCopy(locale, link.slug);
      if (copy) out.push({ href: localePath(locale, `/${link.slug}/`), title: copy.navName, description: copy.description });
    } else {
      const guide = getGuideFor(locale, link.slug);
      if (guide) out.push({ href: guidePath(locale, link.slug), title: guide.navName, description: guide.description });
    }
  }
  return out;
}

// 局部引入避免循环依赖(style-pages/guides 也会引用本文件的类型)。
import { fullCatalog, getStylePage } from "./style-pages";
import { getGuide, guidePath } from "./guides";

function getStylePageCopy(locale: Locale, slug: string) {
  return getStylePage(slug)?.copy[locale];
}

function getGuideFor(locale: Locale, slug: string) {
  return getGuide(locale, slug);
}

/** 平台卡片的副标题(首页网格用)。 */
export function platformCardSubtitle(locale: Locale): string {
  return getUi(locale).home.platformCard;
}
