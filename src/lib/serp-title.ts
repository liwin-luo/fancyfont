// Search-result titles. The fancy phrase is Mathematical Bold Script:
// one even alphabet. The thin script competitors use has no e, g, or o
// and substitutes a different cut (ℯ ℊ ℴ), so words like "Paste" look broken.

import type { Locale } from "./i18n";
import { convertText } from "./text-styles";

const PHRASE: Record<Locale, string> = {
  en: "Copy & Paste",
  es: "Copiar y Pegar",
  "pt-br": "Copiar e Colar",
  "zh-cn": "Copy & Paste",
  id: "Copy Paste",
};

export function serpScript(locale: Locale): string {
  return `\u2661 ${convertText(PHRASE[locale], "boldScript")}`;
}

export function serpTitle(head: string, locale: Locale): string {
  return `${head} \u2014 ${serpScript(locale)}`;
}
