// Search-result titles. The fancy phrase is Mathematical Bold Script:
// one even alphabet. The thin script competitors use has no e, g, or o
// and substitutes a different cut (ℯ ℊ ℴ), so words like "Paste" look broken.
//
// Shape when a detail is passed: query — ♡ script detail | FancyFont.
// The script is the click style. The detail stays plain text so it can match
// a query. The brand is last, so a narrow screen clips it before the query.

import type { Locale } from "./i18n";
import { siteName } from "./site";
import { convertText } from "./text-styles";

const PHRASE: Record<Locale, string> = {
  en: "Copy & Paste",
  es: "Copiar y Pegar",
  "pt-br": "Copiar e Colar",
  "zh-cn": "Copy & Paste",
  id: "Copy Paste",
};

/** Plain-text tail for each style page. Short on purpose: it has to share the title line with the script. */
const styleDetail: Record<string, Record<Locale, string>> = {
  "cursive-text-generator": {
    en: "Bios & Names",
    es: "bios y nombres",
    "pt-br": "bio e nomes",
    "zh-cn": "简介与昵称",
    id: "bio & nama",
  },
  "gothic-text-generator": {
    en: "Clan Tags",
    es: "nombres de clan",
    "pt-br": "nomes de clã",
    "zh-cn": "战队名",
    id: "nama klan",
  },
  "bold-text-generator": {
    en: "Chats & Names",
    es: "chats y nombres",
    "pt-br": "chats e nomes",
    "zh-cn": "聊天与昵称",
    id: "chat & nama",
  },
  "italic-text-generator": {
    en: "Bios & Captions",
    es: "bios y textos",
    "pt-br": "bio e legendas",
    "zh-cn": "简介与配文",
    id: "bio & caption",
  },
  "bubble-letters-generator": {
    en: "Round Letters",
    es: "letras redondas",
    "pt-br": "letras redondas",
    "zh-cn": "圆形字母",
    id: "huruf bulat",
  },
  "small-caps-generator": {
    en: "Quiet Bios",
    es: "bios discretas",
    "pt-br": "bios discretas",
    "zh-cn": "简约简介",
    id: "bio tenang",
  },
  "strikethrough-text-generator": {
    en: "Jokes & Edits",
    es: "bromas y tachados",
    "pt-br": "piadas e riscos",
    "zh-cn": "玩笑与修改",
    id: "lelucon & edit",
  },
  "glitch-text-generator": {
    en: "Zalgo Text",
    es: "texto zalgo",
    "pt-br": "texto zalgo",
    "zh-cn": "故障字",
    id: "teks zalgo",
  },
  "upside-down-text-generator": {
    en: "Flipped Text",
    es: "texto volteado",
    "pt-br": "texto invertido",
    "zh-cn": "倒转文字",
    id: "teks terbalik",
  },
  "tiny-text-generator": {
    en: "Super & Sub",
    es: "superíndice",
    "pt-br": "sobrescrito",
    "zh-cn": "上下标",
    id: "superskrip",
  },
  "cute-font-generator": {
    en: "Hearts & Bows",
    es: "corazones y lazos",
    "pt-br": "corações e laços",
    "zh-cn": "爱心与蝴蝶结",
    id: "hati & pita",
  },
  "cool-font-generator": {
    en: "Stars & Wings",
    es: "estrellas y alas",
    "pt-br": "estrelas e asas",
    "zh-cn": "星星与翅膀",
    id: "bintang & sayap",
  },
  "dark-font-generator": {
    en: "Skull & Moon",
    es: "calavera y luna",
    "pt-br": "caveira e lua",
    "zh-cn": "骷髅与月亮",
    id: "tengkorak & bulan",
  },
  "elegant-font-generator": {
    en: "Crowns & Script",
    es: "coronas y script",
    "pt-br": "coroas e script",
    "zh-cn": "皇冠花体",
    id: "mahkota & script",
  },
  "aesthetic-text-generator": {
    en: "Wide Letters",
    es: "letras anchas",
    "pt-br": "letras largas",
    "zh-cn": "宽体字母",
    id: "huruf lebar",
  },
  "coquette-font-generator": {
    en: "Ribbons & Script",
    es: "lazos y script",
    "pt-br": "laços e script",
    "zh-cn": "丝带花体",
    id: "pita & script",
  },
  "preppy-font-generator": {
    en: "Clean Hearts",
    es: "corazones limpios",
    "pt-br": "corações limpos",
    "zh-cn": "干净爱心",
    id: "hati bersih",
  },
};

export function serpScript(locale: Locale): string {
  return `\u2661 ${convertText(PHRASE[locale], "boldScript")}`;
}

export function serpTitle(head: string, locale: Locale, detail?: string): string {
  const script = serpScript(locale);
  if (!detail) return `${head} \u2014 ${script}`;
  return `${head} \u2014 ${script} ${detail} | ${siteName}`;
}

export function styleSerpTitle(h1: string, slug: string, locale: Locale): string {
  return serpTitle(h1, locale, styleDetail[slug]?.[locale]);
}
