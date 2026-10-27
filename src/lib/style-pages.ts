// Dedicated style generator pages: shared routing/config plus per-locale
// copy. Every locale's copy is hand-written — no machine-swapped keywords.
//
// Look pages (cute, cool, dark, elegant, aesthetic) wrap ONE primary alphabet
// in decorations that no other page uses. styleIds[0] is that alphabet.
// Later ids stay bare so the grids don't collapse into each other.

import type { Locale } from "./i18n";
import { convertText, withWrapper, type TextStyleId } from "./text-styles";
import { stylePagesEn, type StylePageCopy } from "./content/style-pages-en";
import { stylePagesEs } from "./content/style-pages-es";
import { stylePagesPtBr } from "./content/style-pages-pt-br";
import { stylePagesZhCn } from "./content/style-pages-zh-cn";
import { stylePagesId } from "./content/style-pages-id";

export type { StylePageCopy, StylePageFaq } from "./content/style-pages-en";

export interface StylePageDef {
  slug: string;
  styleIds: TextStyleId[];
  /** [left, right] pairs. Only the first style is wrapped. */
  wrappers?: readonly (readonly [string, string])[];
  related: string[];
  copy: Record<Locale, StylePageCopy>;
}

const SHARED: Omit<StylePageDef, "copy">[] = [
  { slug: "cursive-text-generator", styleIds: ["script", "boldScript"], related: ["bold-text-generator", "cute-font-generator", "elegant-font-generator"] },
  { slug: "gothic-text-generator", styleIds: ["fraktur", "boldFraktur"], related: ["chicano-font-generator", "cursive-text-generator", "glitch-text-generator", "dark-font-generator"] },
  { slug: "bold-text-generator", styleIds: ["bold", "sansBold", "boldItalic"], related: ["italic-text-generator", "strikethrough-text-generator", "cool-font-generator"] },
  { slug: "italic-text-generator", styleIds: ["italic", "sansItalic"], related: ["bold-text-generator", "cursive-text-generator"] },
  { slug: "bubble-letters-generator", styleIds: ["bubble", "circled", "squared"], related: ["small-caps-generator", "cute-font-generator"] },
  { slug: "small-caps-generator", styleIds: ["smallCaps"], related: ["preppy-font-generator", "tiny-text-generator", "cursive-text-generator"] },
  { slug: "strikethrough-text-generator", styleIds: ["strike", "slash", "boldStrike"], related: ["bold-text-generator", "upside-down-text-generator"] },
  { slug: "glitch-text-generator", styleIds: ["zalgoLight", "zalgoMedium", "zalgoHeavy"], related: ["upside-down-text-generator", "gothic-text-generator"] },
  { slug: "upside-down-text-generator", styleIds: ["upsideDown"], related: ["glitch-text-generator", "tiny-text-generator"] },
  { slug: "tiny-text-generator", styleIds: ["superscript", "subscript"], related: ["small-caps-generator", "upside-down-text-generator"] },
  {
    slug: "cute-font-generator",
    styleIds: ["bubble", "script", "circled"],
    wrappers: [
      ["♡ ", " ♡"],
      ["୨୧ ", " ୨୧"],
      ["✿ ", " ✿"],
      ["꒰ ", " ꒱"],
    ],
    related: ["heart-font-generator", "coquette-font-generator", "cool-font-generator", "bubble-letters-generator"],
  },
  {
    slug: "cool-font-generator",
    styleIds: ["bold", "smallCaps"],
    wrappers: [
      ["⚡ ", " ⚡"],
      ["★彡 ", " 彡★"],
      ["꧁༒ ", " ༒꧂"],
      ["『", "』"],
    ],
    related: ["cute-font-generator", "dark-font-generator", "bold-text-generator"],
  },
  {
    slug: "dark-font-generator",
    styleIds: ["boldFraktur", "fraktur"],
    wrappers: [
      ["☠︎ ", " ☠︎"],
      ["† ", " †"],
      ["☾ ", " ☽"],
    ],
    related: ["chicano-font-generator", "cool-font-generator", "elegant-font-generator", "gothic-text-generator"],
  },
  {
    slug: "elegant-font-generator",
    styleIds: ["boldScript", "script"],
    wrappers: [
      ["♛ ", " ♛"],
      ["⚜ ", " ⚜"],
      ["❦ ", " ❦"],
    ],
    related: ["cute-font-generator", "dark-font-generator", "cursive-text-generator"],
  },
  {
    slug: "aesthetic-text-generator",
    styleIds: ["fullwidth", "smallCaps"],
    wrappers: [
      ["·˚ ", " ˚·"],
      ["✧･ﾟ ", " ･ﾟ✧"],
    ],
    related: ["cute-font-generator", "elegant-font-generator", "small-caps-generator"],
  },
  {
    slug: "coquette-font-generator",
    styleIds: ["boldScript", "script"],
    wrappers: [
      ["𐙚 ", " 𐙚"],
      ["𝜗𝜚 ", " 𝜗𝜚"],
      ["🎀 ", " 🎀"],
    ],
    related: ["cute-font-generator", "elegant-font-generator", "instagram-fonts", "discord-fonts"],
  },
  {
    slug: "preppy-font-generator",
    styleIds: ["smallCaps", "script"],
    wrappers: [
      ["🤍 ", " 🤍"],
      ["♥ ", " ♥"],
      ["❥ ", " ❥"],
    ],
    related: ["heart-font-generator", "coquette-font-generator", "small-caps-generator", "adopt-me-fonts"],
  },
  {
    slug: "heart-font-generator",
    styleIds: ["boldScript", "script", "bubble"],
    wrappers: [
      ["❤ ", " ❤"],
      ["💖 ", " 💖"],
      ["💗 ", " 💗"],
      ["💓 ", " 💓"],
      ["💞 ", " 💞"],
      ["💕 ", " 💕"],
      ["💝 ", " 💝"],
      ["💘 ", " 💘"],
      ["ღ ", " ღ"],
      ["ᥫ᭡ ", " ᥫ᭡"],
      ["ꨄ ", " ꨄ"],
      ["❣ ", " ❣"],
    ],
    related: ["cute-font-generator", "preppy-font-generator", "coquette-font-generator", "cursive-text-generator", "instagram-fonts"],
  },
  {
    slug: "chicano-font-generator",
    styleIds: ["fraktur", "boldFraktur", "boldScript"],
    wrappers: [
      ["✠ ", " ✠"],
      ["❧ ", " ❧"],
      ["༺", "༻"],
      ["𓆩", "𓆪"],
      ["〘", "〙"],
      ["〖", "〗"],
      ["᯽ ", " ᯽"],
      ["✶ ", " ✶"],
      ["⊹ ", " ⊹"],
      ["۞ ", " ۞"],
      ["⸙ ", " ⸙"],
      ["☙ ", " ☙"],
    ],
    related: ["gothic-text-generator", "dark-font-generator", "cursive-text-generator", "elegant-font-generator"],
  },
];

const COPY: Record<Locale, Record<string, StylePageCopy>> = {
  en: stylePagesEn,
  es: stylePagesEs,
  "pt-br": stylePagesPtBr,
  "zh-cn": stylePagesZhCn,
  id: stylePagesId,
};

export const stylePages: StylePageDef[] = SHARED.map((shared) => ({
  ...shared,
  copy: {
    en: COPY.en[shared.slug],
    es: COPY.es[shared.slug],
    "pt-br": COPY["pt-br"][shared.slug],
    "zh-cn": COPY["zh-cn"][shared.slug],
    id: COPY.id[shared.slug],
  },
}));

export function isLookPage(page: StylePageDef): boolean {
  return Boolean(page.wrappers?.length);
}

/** Static example: primary alphabet, first decoration if this is a look page. */
export function previewStylePage(text: string, page: Pick<StylePageDef, "styleIds" | "wrappers">): string {
  const inner = convertText(text, page.styleIds[0]);
  const wrap = page.wrappers?.[0];
  return wrap ? withWrapper(inner, wrap) : inner;
}

export function getStylePage(locale: Locale, slug: string): StylePageDef | undefined {
  return stylePages.find((page) => page.slug === slug);
}

export function getStylePageCopy(page: StylePageDef, locale: Locale): StylePageCopy {
  return page.copy[locale];
}
