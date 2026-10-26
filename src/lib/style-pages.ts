// Dedicated style generator pages: shared routing/config plus per-locale
// copy. Every locale's copy is hand-written — no machine-swapped keywords.

import type { Locale } from "./i18n";
import type { TextStyleId } from "./text-styles";
import { stylePagesEn, type StylePageCopy } from "./content/style-pages-en";
import { stylePagesEs } from "./content/style-pages-es";
import { stylePagesPtBr } from "./content/style-pages-pt-br";
import { stylePagesZhCn } from "./content/style-pages-zh-cn";
import { stylePagesId } from "./content/style-pages-id";

export type { StylePageCopy, StylePageFaq } from "./content/style-pages-en";

export interface StylePageDef {
  slug: string;
  styleIds: TextStyleId[];
  related: string[];
  copy: Record<Locale, StylePageCopy>;
}

const SHARED: Omit<StylePageDef, "copy">[] = [
  { slug: "cursive-text-generator", styleIds: ["script", "boldScript"], related: ["bold-text-generator", "aesthetic-text-generator"] },
  { slug: "gothic-text-generator", styleIds: ["fraktur", "boldFraktur"], related: ["cursive-text-generator", "glitch-text-generator"] },
  { slug: "bold-text-generator", styleIds: ["bold", "sansBold", "boldItalic"], related: ["italic-text-generator", "strikethrough-text-generator"] },
  { slug: "italic-text-generator", styleIds: ["italic", "sansItalic"], related: ["bold-text-generator", "cursive-text-generator"] },
  { slug: "bubble-letters-generator", styleIds: ["bubble", "circled", "squared"], related: ["small-caps-generator", "aesthetic-text-generator"] },
  { slug: "small-caps-generator", styleIds: ["smallCaps"], related: ["tiny-text-generator", "cursive-text-generator"] },
  { slug: "strikethrough-text-generator", styleIds: ["strike", "slash", "boldStrike"], related: ["bold-text-generator", "upside-down-text-generator"] },
  { slug: "glitch-text-generator", styleIds: ["zalgoLight", "zalgoMedium", "zalgoHeavy"], related: ["upside-down-text-generator", "gothic-text-generator"] },
  { slug: "upside-down-text-generator", styleIds: ["upsideDown"], related: ["glitch-text-generator", "tiny-text-generator"] },
  { slug: "tiny-text-generator", styleIds: ["superscript", "subscript"], related: ["small-caps-generator", "upside-down-text-generator"] },
  { slug: "aesthetic-text-generator", styleIds: ["fullwidth"], related: ["cursive-text-generator", "bubble-letters-generator"] },
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

export function getStylePage(locale: Locale, slug: string): StylePageDef | undefined {
  return stylePages.find((page) => page.slug === slug);
}

export function getStylePageCopy(page: StylePageDef, locale: Locale): StylePageCopy {
  return page.copy[locale];
}
