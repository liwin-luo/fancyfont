// 样式生成器专页:共享路由/配置 + 按语言内容文件。
// 每页聚焦一个搜索意图,自带筛选后的生成器、步骤、知识段落与 FAQ。
// copy 按 locale 可选:页面在哪些语言可用由 copy 的键决定
// (decorated-nicknames 仅中文;*-migration 模块是从旧站迁移的落地页,
//  首版仅英文,slug 与旧站一致以保护已收录 URL)。

import { localePath, type Locale } from "./i18n";
import { textStyles, type TextStyleId } from "./text-styles";
import { stylePagesZhCn } from "./content/style-pages-zh-cn";
import { stylePagesEn } from "./content/style-pages-en";
import { stylePagesMigrationEn } from "./content/style-pages-migration-en";
import { stylePagesMigrationEs } from "./content/style-pages-migration-es";
import { stylePagesEs } from "./content/style-pages-es";
import { stylePagesMigrationPtBr } from "./content/style-pages-migration-pt-br";
import { stylePagesGapEn } from "./content/style-pages-gap-en";
import { stylePagesDe } from "./content/style-pages-de";
import { stylePagesPtBr } from "./content/style-pages-pt-br";
import { getUi } from "./ui-strings";

export interface StylePageCopy {
  /** 导航/页脚短名。 */
  navName: string;
  h1: string;
  title: string;
  description: string;
  intro: string[];
  /** 分组示例区(带一键复制按钮):heading/note 随语言写在文案里,组内可再带小标题。 */
  copyGroups?: { heading: string; note?: string; groups: { label?: string; items: string[] }[] }[];
  steps: string[];
  about: { heading: string; paragraphs: string[] };
  faq: { q: string; a: string }[];
}

export interface WrapperRow {
  left: string;
  right: string;
  /** 装饰组合名称键,取 ui-strings 之外的语言无关标签(存于 shared)。 */
  label: string;
}

export interface StylePageDef {
  slug: string;
  styleIds: TextStyleId[];
  /** 各语言生成器默认示例文本。 */
  placeholder: Record<Locale, string>;
  /** 在主样式输出上再套一层的装饰组合,渲染成"装饰组合"网格。 */
  wrapperRows?: WrapperRow[];
  /** 额外渲染 CJK 装饰网格(仅中文站的花式昵称页)。 */
  extraCjk?: boolean;
  /** 额外渲染乱码清洗器(乱码页用)。 */
  cleaner?: boolean;
  /** 相关页 slug 列表(文案按语言从注册表解析)。 */
  related: string[];
  /** 页面主题:头带底色 + 专属图案/AI 插图(每页各有特色)。 */
  theme?: { band: string; motif?: import("@/components/illustrations").MotifId; art?: string };
  copy: { [L in Locale]?: StylePageCopy };
}

const SHARED: Omit<StylePageDef, "copy">[] = [
  {
    slug: "cursive-fonts",
    styleIds: ["script", "boldScript", "italic", "boldItalic", "sansItalic", "smallCaps", "spaced", "circled", "parenthesized", "fullwidth"],
    placeholder: { de: "Hallo FancyFonts", en: "Hello FancyFonts", "zh-cn": "Hello FancyFonts", es: "Hola FancyFonts", "pt-br": "Olá FancyFonts" },
    wrapperRows: [
      { left: "♡", right: "♡", label: "hearts" },
      { left: "✧", right: "✧", label: "sparkles" },
      { left: "꒰", right: "꒱", label: "softBrackets" },
    ],
    related: ["bold-fonts", "cute-fonts", "decorated-nicknames", "elegant-font-generator"],
  },
  {
    slug: "bold-fonts",
    styleIds: ["bold", "sansBold", "boldItalic", "italic", "sansBoldItalic", "sansItalic", "doubleStruck", "monospace", "squared", "underline"],
    placeholder: { de: "Fett 2026", en: "Bold Text 2026", "zh-cn": "Bold Text 2026", es: "Texto 2026", "pt-br": "Texto 2026" },
    related: ["strikethrough-text", "fancy-numbers", "cursive-fonts", "cool-font-generator", "italic-text-generator"],
  },
  {
    slug: "gothic-fonts",
    styleIds: ["fraktur", "boldFraktur", "doubleStruck", "bold", "boldStrike", "slash", "zalgoLight", "monospace", "boldUnderline", "negativeCircled"],
    placeholder: { de: "Dunkler Ritter", en: "Dark Knight", "zh-cn": "Dark Knight", es: "Caballero", "pt-br": "Cavaleiro" },
    wrapperRows: [
      { left: "☠", right: "☠", label: "skull" },
      { left: "⚔", right: "⚔", label: "blades" },
    ],
    related: ["zalgo-text", "cursive-fonts", "medieval-fonts", "dark-font-generator", "chicano-font-generator"],
  },
  {
    slug: "small-fonts",
    styleIds: ["smallCaps", "superscript", "subscript", "spaced", "monospace", "circled", "parenthesized", "sansItalic", "fullwidth", "bubble"],
    placeholder: { de: "Kapitälchen", en: "Small Caps", "zh-cn": "Small Caps", es: "Letras", "pt-br": "Letras" },
    related: ["bold-fonts", "fancy-numbers", "decorated-nicknames", "tiny-text-generator"],
  },
  {
    slug: "aesthetic-fonts",
    styleIds: ["fullwidth", "spaced", "circled", "squared", "parenthesized", "smallCaps", "bubble", "monospace", "upsideDown", "script"],
    placeholder: { de: "Ästhetisch", en: "Aesthetic", "zh-cn": "Aesthetic", es: "Estética", "pt-br": "Estético" },
    wrapperRows: [
      { left: "✧・", right: "・✧", label: "vaporwave" },
      { left: "｡ﾟ", right: "ﾟ｡", label: "haze" },
      { left: "♡", right: "♡", label: "retroSweet" },
    ],
    related: ["cute-fonts", "japanese-font-generator", "decorated-nicknames", "small-fonts", "preppy-font-generator"],
  },
  {
    slug: "cute-fonts",
    styleIds: ["bubble", "script", "boldScript", "circled", "parenthesized", "smallCaps", "squared", "italic", "spaced", "superscript"],
    placeholder: { de: "Süß", en: "Sweetie", "zh-cn": "Sweetie", es: "Dulce", "pt-br": "Doce" },
    wrapperRows: [
      { left: "♡", right: "♡", label: "hearts" },
      { left: "୨୧", right: "୨୧", label: "bows" },
      { left: "✿", right: "✿", label: "flowers" },
      { left: "꒰", right: "꒱", label: "softBrackets" },
    ],
    related: ["cursive-fonts", "aesthetic-fonts", "decorated-nicknames", "heart-font-generator", "coquette-font-generator"],
  },
  {
    slug: "bubble-fonts",
    styleIds: ["bubble", "circled", "parenthesized", "squared", "negativeCircled", "negativeSquared", "bold", "script", "fullwidth", "monospace"],
    placeholder: { de: "Blase", en: "Bubble", "zh-cn": "Bubble", es: "Burbuja", "pt-br": "Bolha" },
    related: ["cute-fonts", "fancy-numbers", "upside-down-text", "heart-font-generator"],
  },
  {
    slug: "strikethrough-text",
    styleIds: ["strike", "slash", "boldStrike", "underline", "doubleUnderline", "boldUnderline", "italicUnderline", "bold", "monospace", "zalgoLight"],
    placeholder: { de: "Durchgestrichen", en: "Line Through", "zh-cn": "Line Through", es: "Tachado", "pt-br": "Riscado" },
    related: ["bold-fonts", "zalgo-text", "fancy-numbers", "italic-text-generator"],
  },
  {
    slug: "fancy-numbers",
    styleIds: ["bold", "doubleStruck", "monospace", "sansBold", "sansBoldItalic", "circled", "bubble", "negativeCircled", "superscript", "subscript", "fullwidth", "smallCaps"],
    placeholder: { de: "Nr.1 2026", en: "No.1 2026", "zh-cn": "No.1 2026", es: "N.º1 2026", "pt-br": "N.º1 2026" },
    related: ["bold-fonts", "bubble-fonts", "small-fonts", "cool-font-generator"],
  },
  {
    slug: "zalgo-text",
    styleIds: ["zalgoLight", "zalgoMedium", "zalgoHeavy", "upsideDown", "slash", "strike", "boldStrike", "fraktur", "bold", "spaced"],
    cleaner: true,
    placeholder: { de: "Verflucht", en: "Cursed", "zh-cn": "Cursed", es: "Maldito", "pt-br": "Amaldiçoado" },
    related: ["gothic-fonts", "strikethrough-text", "decorated-nicknames", "crazy-font-generator"],
  },
  {
    slug: "decorated-nicknames",
    styleIds: [],
    extraCjk: true,
    placeholder: { de: "Traum", en: "Breeze", "zh-cn": "清风徐来", es: "Brisa", "pt-br": "Brisa" },
    related: ["cute-fonts", "aesthetic-fonts", "fancy-numbers"],
  },
  {
    slug: "upside-down-text",
    styleIds: ["upsideDown", "spaced", "strike", "slash", "circled", "bubble", "smallCaps", "monospace", "bold", "fullwidth"],
    placeholder: { de: "Dreh es", en: "Flip it", "zh-cn": "Flip it", es: "Gíralo", "pt-br": "Vire" },
    related: ["zalgo-text", "bubble-fonts", "strikethrough-text", "crazy-font-generator"],
  },
  // ── 迁移落地页:slug 与旧站一致(保护已收录 URL),文案首版仅英文。──
  {
    slug: "cool-font-generator",
    styleIds: ["bold", "sansBold", "sansBoldItalic", "monospace", "doubleStruck", "smallCaps", "squared", "fullwidth", "spaced", "strike"],
    placeholder: { de: "Cooler Name 2026", en: "Cool Name 2026", "zh-cn": "Cool Name 2026", es: "Nombre 2026", "pt-br": "Nombre 2026" },
    wrapperRows: [
      { left: "⚡ ", right: " ⚡", label: "sparkles" },
      { left: "★彡 ", right: " 彡★", label: "blades" },
      { left: "『", right: "』", label: "softBrackets" },
    ],
    related: ["bold-fonts", "aesthetic-fonts", "fancy-numbers", "dark-font-generator"],
  },
  {
    slug: "elegant-font-generator",
    styleIds: ["script", "boldScript", "italic", "boldItalic", "sansItalic", "sansBoldItalic", "smallCaps", "circled", "parenthesized", "spaced"],
    placeholder: { de: "Elegant", en: "Elegant", "zh-cn": "Elegant", es: "Elegante", "pt-br": "Elegante" },
    wrapperRows: [
      { left: "⚜ ", right: " ⚜", label: "flowers" },
      { left: "❦ ", right: " ❦", label: "hearts" },
    ],
    related: ["cursive-fonts", "cute-fonts", "small-fonts", "coquette-font-generator"],
  },
  {
    slug: "dark-font-generator",
    styleIds: ["fraktur", "boldFraktur", "bold", "boldStrike", "slash", "doubleStruck", "monospace", "zalgoLight", "negativeCircled", "boldUnderline"],
    placeholder: { de: "Dunkel", en: "Dark Knight", "zh-cn": "Dark Knight", es: "Oscuridad", "pt-br": "Sombrio" },
    wrapperRows: [
      { left: "☠ ", right: " ☠", label: "skull" },
      { left: "⚔ ", right: " ⚔", label: "blades" },
    ],
    related: ["gothic-fonts", "zalgo-text", "cool-font-generator", "chicano-font-generator"],
  },
  {
    slug: "heart-font-generator",
    styleIds: ["script", "boldScript", "bubble", "circled", "negativeCircled", "smallCaps", "italic", "sansItalic", "parenthesized", "spaced"],
    placeholder: { de: "Liebe", en: "Love Lane", "zh-cn": "Love Lane", es: "Amor", "pt-br": "Amor" },
    wrapperRows: [
      { left: "♡", right: "♡", label: "hearts" },
      { left: "✿", right: "✿", label: "flowers" },
    ],
    related: ["cute-fonts", "coquette-font-generator", "cursive-fonts", "aesthetic-fonts"],
  },
  {
    slug: "coquette-font-generator",
    styleIds: ["script", "boldScript", "italic", "smallCaps", "bubble", "circled", "parenthesized", "spaced", "sansItalic", "sansBoldItalic"],
    placeholder: { de: "Coquette", en: "Coquette", "zh-cn": "Coquette", es: "Coqueta", "pt-br": "Coquette" },
    wrapperRows: [
      { left: "୨୧", right: "୨୧", label: "bows" },
      { left: "♡", right: "♡", label: "hearts" },
      { left: "✿", right: "✿", label: "flowers" },
      { left: "꒰", right: "꒱", label: "softBrackets" },
    ],
    related: ["cute-fonts", "heart-font-generator", "cursive-fonts", "aesthetic-fonts"],
  },
  {
    slug: "chicano-font-generator",
    styleIds: ["fraktur", "boldFraktur", "boldScript", "script", "bold", "boldUnderline", "slash", "monospace", "negativeCircled", "smallCaps"],
    placeholder: { de: "Chicano Style", en: "Chicano Style", "zh-cn": "Chicano Style", es: "Estilo Chicano", "pt-br": "Estilo Chicano" },
    wrapperRows: [
      { left: "☠ ", right: " ☠", label: "skull" },
      { left: "⚔ ", right: " ⚔", label: "blades" },
    ],
    related: ["gothic-fonts", "bold-fonts", "dark-font-generator", "upside-down-text"],
  },
  {
    slug: "preppy-font-generator",
    styleIds: ["smallCaps", "script", "boldScript", "bubble", "circled", "spaced", "italic", "parenthesized", "sansItalic", "fullwidth"],
    placeholder: { de: "Preppy", en: "Preppy", "zh-cn": "Preppy", es: "Preppy", "pt-br": "Preppy" },
    wrapperRows: [
      { left: "✧", right: "✧", label: "sparkles" },
      { left: "♡", right: "♡", label: "hearts" },
      { left: "୨୧", right: "୨୧", label: "bows" },
    ],
    related: ["aesthetic-fonts", "cute-fonts", "small-fonts", "coquette-font-generator", "chicano-font-generator"],
  },
  {
    slug: "crazy-font-generator",
    styleIds: ["zalgoLight", "zalgoMedium", "zalgoHeavy", "upsideDown", "fraktur", "slash", "strike", "spaced", "negativeSquared", "boldItalic"],
    placeholder: { de: "Cr@zy", en: "Cr@zy", "zh-cn": "Cr@zy", es: "Locura", "pt-br": "Loucura" },
    wrapperRows: [
      { left: "✧ ", right: " ✧", label: "sparkles" },
      { left: "☠ ", right: " ☠", label: "skull" },
    ],
    related: ["zalgo-text", "upside-down-text", "dark-font-generator", "gothic-fonts"],
  },
  {
    slug: "italic-text-generator",
    styleIds: ["italic", "sansItalic", "boldItalic", "sansBoldItalic", "script", "boldScript", "underline", "italicUnderline", "smallCaps", "spaced"],
    placeholder: { de: "Kursiv 2026", en: "Italic 2026", "zh-cn": "Italic 2026", es: "Itálica 2026", "pt-br": "Itálico 2026" },
    related: ["bold-fonts", "cursive-fonts", "small-fonts", "elegant-font-generator"],
  },
  {
    slug: "tiny-text-generator",
    styleIds: ["superscript", "subscript", "smallCaps", "spaced", "monospace", "circled", "parenthesized", "bubble", "fullwidth", "sansItalic"],
    placeholder: { de: "Mini Text", en: "Tiny Text", "zh-cn": "Tiny Text", es: "Textito", "pt-br": "Textinho" },
    related: ["small-fonts", "fancy-numbers", "aesthetic-fonts", "bubble-fonts"],
  },
  // ── 缺口新页(content-gaps.md P0,50k+ 需求族):首版仅英文。──
  {
    slug: "superscript-subscript-generator",
    styleIds: ["superscript", "subscript", "smallCaps", "spaced", "monospace", "circled", "parenthesized", "bubble", "fullwidth", "italic"],
    placeholder: { de: "x2 hoch", en: "x2 notes", "zh-cn": "x2 notes", es: "x2 notas", "pt-br": "x2 notas" },
    related: ["small-fonts", "tiny-text-generator", "fancy-numbers", "bold-fonts"],
  },
  {
    slug: "signature-font-generator",
    styleIds: ["script", "boldScript", "italic", "sansItalic", "boldItalic", "smallCaps", "spaced", "underline", "circled", "fullwidth"],
    placeholder: { de: "Dein Name", en: "Your Name", "zh-cn": "Your Name", es: "Tu nombre", "pt-br": "Seu nome" },
    related: ["cursive-fonts", "elegant-font-generator", "italic-text-generator", "decorated-nicknames"],
  },
  {
    slug: "nickname-generator",
    styleIds: ["script", "boldScript", "smallCaps", "bold", "sansBold", "spaced", "bubble", "circled", "fullwidth", "italic"],
    placeholder: { de: "Dein Nick", en: "YourNick", "zh-cn": "你的昵称", es: "TuNick", "pt-br": "SeuNick" },
    wrapperRows: [
      { left: "꧁", right: "꧂", label: "gamerFrame" },
      { left: "♡", right: "♡", label: "hearts" },
      { left: "『", right: "』", label: "softBrackets" },
    ],
    related: ["cursive-fonts", "elegant-font-generator", "fancy-numbers", "cool-font-generator"],
  },
  {
    slug: "medieval-fonts",
    styleIds: ["fraktur", "boldFraktur", "boldFrakturSpaced", "frakturUnderline", "frakturDoubleUnderline", "boldFrakturStrike", "frakturHalo", "frakturWavy", "frakturArrow", "frakturOverline"],
    placeholder: { de: "Camelot", en: "Camelot", "zh-cn": "Camelot", es: "Camelot", "pt-br": "Camelot" },
    wrapperRows: [
      { left: "⚜", right: "⚜", label: "fleur" },
      { left: "🗡", right: "🛡", label: "heraldry" },
    ],
    related: ["gothic-fonts", "cursive-fonts", "zalgo-text", "elegant-font-generator"],
  },
  {
    slug: "japanese-font-generator",
    styleIds: ["katakanaRomaji", "fullwidth", "spaced", "smallCaps", "bubble", "circled", "monospace", "script", "sansBold", "italic"],
    placeholder: { de: "Sakura", en: "Sakura", "zh-cn": "Sakura", es: "Sakura", "pt-br": "Sakura" },
    wrapperRows: [
      { left: "「", right: "」", label: "kagiBrackets" },
      { left: "♡", right: "♡", label: "hearts" },
    ],
    related: ["korean-font-generator", "aesthetic-fonts", "bubble-fonts", "cute-fonts"],
  },
  {
    slug: "korean-font-generator",
    styleIds: ["koreanJamo", "smallCaps", "bold", "circled", "fullwidth", "spaced", "monospace", "bubble", "sansItalic", "script"],
    placeholder: { de: "Sarang", en: "Sarang", "zh-cn": "Sarang", es: "Sarang", "pt-br": "Sarang" },
    wrapperRows: [
      { left: "✧", right: "✧", label: "sparkle" },
      { left: "♡", right: "♡", label: "hearts" },
    ],
    related: ["japanese-font-generator", "nickname-generator", "aesthetic-fonts", "small-fonts"],
  },
];

// 按 slug 深合并:同一页面在多个语言文件里都有条目,浅展开会整键覆盖。
const COPIES: Record<string, { [L in Locale]?: StylePageCopy }> = {};
for (const source of [stylePagesEn, stylePagesDe, stylePagesMigrationEn, stylePagesMigrationEs, stylePagesZhCn, stylePagesEs, stylePagesMigrationPtBr, stylePagesPtBr, stylePagesGapEn]) {
  for (const [slug, locales] of Object.entries(source)) {
    COPIES[slug] = { ...COPIES[slug], ...locales };
  }
}

// 每页主题:头带底色 + 专属图案 id(见 illustrations.MotifArt)。
const STYLE_THEMES: Record<string, NonNullable<StylePageDef["theme"]>> = {
  "cursive-fonts": { band: "bg-pop-pink/10", motif: "script", art: "/ai/style-cursive.jpg" },
  "bold-fonts": { band: "bg-pop-yellow/25", motif: "bold", art: "/ai/style-bold.jpg" },
  "gothic-fonts": { band: "bg-pop-purple/15", motif: "gothic", art: "/ai/style-gothic.jpg" },
  "small-fonts": { band: "bg-pop-blue/10", motif: "small", art: "/ai/style-small.jpg" },
  "aesthetic-fonts": { band: "bg-pop-purple/10", motif: "vapor", art: "/ai/style-aesthetic.jpg" },
  "cute-fonts": { band: "bg-pop-pink/10", motif: "cute", art: "/ai/style-cute.jpg" },
  "bubble-fonts": { band: "bg-pop-blue/10", motif: "bubble", art: "/ai/style-bubble.jpg" },
  "strikethrough-text": { band: "bg-pop-orange/10", motif: "strike", art: "/ai/style-strikethrough.jpg" },
  "fancy-numbers": { band: "bg-pop-green/10", motif: "numbers", art: "/ai/style-numbers.jpg" },
  "zalgo-text": { band: "bg-pop-pink/15", motif: "glitch", art: "/ai/style-zalgo.jpg" },
  "upside-down-text": { band: "bg-pop-orange/10", motif: "flip", art: "/ai/style-upside-down.jpg" },
  "decorated-nicknames": { band: "bg-pop-green/10", motif: "cjk", art: "/ai/style-decorated.jpg" },
  // 迁移落地页:AI 插图已出图(gen-migration-art.sh)。
  "cool-font-generator": { band: "bg-pop-blue/15", motif: "bold", art: "/ai/style-cool.jpg" },
  "elegant-font-generator": { band: "bg-pop-purple/10", motif: "script", art: "/ai/style-elegant.jpg" },
  "dark-font-generator": { band: "bg-pop-purple/15", motif: "gothic", art: "/ai/style-dark.jpg" },
  "heart-font-generator": { band: "bg-pop-pink/15", motif: "cute", art: "/ai/style-heart.jpg" },
  "coquette-font-generator": { band: "bg-pop-pink/10", motif: "cute", art: "/ai/style-coquette.jpg" },
  "chicano-font-generator": { band: "bg-pop-orange/10", motif: "gothic", art: "/ai/style-chicano.jpg" },
  "preppy-font-generator": { band: "bg-pop-green/10", motif: "cute", art: "/ai/style-preppy.jpg" },
  "crazy-font-generator": { band: "bg-pop-pink/15", motif: "glitch", art: "/ai/style-crazy.jpg" },
  "italic-text-generator": { band: "bg-pop-yellow/20", motif: "bold", art: "/ai/style-italic.jpg" },
  "tiny-text-generator": { band: "bg-pop-blue/10", motif: "small", art: "/ai/style-tiny.jpg" },
  // 缺口新页:暂无 AI 插图,仅配底色与图案。
  "superscript-subscript-generator": { band: "bg-pop-blue/15", motif: "small" },
  "signature-font-generator": { band: "bg-pop-pink/10", motif: "script" },
  "nickname-generator": { band: "bg-pop-green/10", motif: "cute" },
  "medieval-fonts": { band: "bg-pop-orange/15", motif: "gothic" },
  "japanese-font-generator": { band: "bg-pop-yellow/15", motif: "vapor" },
  "korean-font-generator": { band: "bg-pop-green/15", motif: "cute" },
};

/** 页面生成器 = 精选样式置顶 + 其余全目录补齐:分类筛选下每类都有足量卡片。 */
export function fullCatalog(featured: TextStyleId[]): TextStyleId[] {
  const rest = textStyles.map((s) => s.id).filter((id) => !featured.includes(id));
  return [...featured, ...rest];
}

export const stylePages: StylePageDef[] = SHARED.map((def) => ({
  ...def,
  styleIds: def.extraCjk ? def.styleIds : fullCatalog(def.styleIds),
  theme: STYLE_THEMES[def.slug],
  copy: COPIES[def.slug] ?? {},
}));

export function getStylePage(slug: string): StylePageDef | undefined {
  return stylePages.find((page) => page.slug === slug);
}

/** 该样式页实际可用的语言(copy 键)。 */
export function stylePageLocales(def: StylePageDef): Locale[] {
  return (Object.keys(def.copy) as Locale[]).filter((l) => def.copy[l]);
}

export function getStylePageFor(slug: string, locale: Locale): StylePageDef | undefined {
  const def = getStylePage(slug);
  return def && def.copy[locale] ? def : undefined;
}

/** 相关工具卡片:slug 解析为当前语言的标题/描述。 */
export function relatedCards(
  locale: Locale,
  slugs: string[],
): { href: string; title: string; description: string }[] {
  const ui = getUi(locale);
  return slugs
    .map((slug) => {
      const def = getStylePage(slug);
      const copy = def?.copy[locale];
      if (copy) return { href: localePath(locale, `/${def.slug}/`), title: copy.navName, description: copy.description };
      return undefined;
    })
    .filter((c): c is { href: string; title: string; description: string } => Boolean(c));
}

/** 导航"中文装饰"分组:仅中文站的页面。 */
export function isCjkOnlyPage(def: StylePageDef): boolean {
  return Boolean(def.extraCjk);
}
