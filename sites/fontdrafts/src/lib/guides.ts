// 装扮指南:每语言独立集合,路径本地化(en /learn/,zh /zhinan/,es/pt-br /guia/)。
// 每篇 GuideDef 自带 locale;所有平台限制用"约"表述,不做无法核实的承诺。
// appearOn 控制指南在哪些工具页反向露出。

import type { Locale } from "./i18n";
import { localePath } from "./i18n";
import { guidesZhCn } from "./content/guides-zh-cn";
import { guidesEn } from "./content/guides-en";
import { guidesEs } from "./content/guides-es";
import { guidesPtBr } from "./content/guides-pt-br";
import { guidesDe } from "./content/guides-de";

export interface GuideSectionTable {
  head: string[];
  rows: string[][];
}

export interface GuideSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: GuideSectionTable;
  /** 本节末尾的配图(public 路径 + 尺寸,模板渲染 lazy img + caption)。 */
  image?: GuideImage;
}

export interface GuideImage {
  /** public 下的路径,如 /guides/usernames-panels.png。 */
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
}

export interface GuideDef {
  locale: Locale;
  slug: string;
  navName: string;
  h1: string;
  title: string;
  description: string;
  published: string;
  updated: string;
  intro: string[];
  /** 头图(渲染在导语之后)。 */
  heroImage?: GuideImage;
  sections: GuideSection[];
  faq: { q: string; a: string }[];
  /** 页尾"动手试试"卡片,链回工具页(href 含语言前缀)。 */
  relatedTools: { href: string; title: string; description: string }[];
  /** 这些工具页的模板会在"相关指南"里链接回本篇(slug,不含前缀)。 */
  appearOn: string[];
}

const GUIDE_BASE: Record<Locale, string> = {
  en: "/learn",
  "zh-cn": "/zhinan",
  es: "/guia",
  "pt-br": "/guia",
  de: "/anleitung",
};

const ALL: GuideDef[] = [...guidesEn, ...guidesZhCn, ...guidesEs, ...guidesPtBr, ...guidesDe];

// 返回值都是可直接用于 href/canonical 的完整站内路径(含语言前缀):
// en /learn/…,zh-cn /zh/zhinan/…,es /es/guia/…,pt-br /pt-br/guia/…。
export function guidePath(locale: Locale, slug: string): string {
  return localePath(locale, `${GUIDE_BASE[locale]}/${slug}/`);
}

export function guideBase(locale: Locale): string {
  return localePath(locale, GUIDE_BASE[locale]);
}

export function guidesFor(locale: Locale): GuideDef[] {
  return ALL.filter((guide) => guide.locale === locale);
}

export function getGuide(locale: Locale, slug: string): GuideDef | undefined {
  return ALL.find((guide) => guide.locale === locale && guide.slug === slug);
}

/** 某个工具页在指定语言下要反向露出的指南列表。 */
export function guidesForPage(locale: Locale, pageSlug: string): GuideDef[] {
  return ALL.filter((guide) => guide.locale === locale && guide.appearOn.includes(pageSlug));
}
