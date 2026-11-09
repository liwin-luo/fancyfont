// 法务/信息页内容:类型 + 四语言装配。

export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

export interface LegalContent {
  navName: string;
  h1: string;
  intro?: string[];
  sections: LegalSection[];
}

export interface LegalBundle {
  about: LegalContent;
  contact: LegalContent;
  privacy: LegalContent;
  terms: LegalContent;
}

import type { Locale } from "../i18n";
import { legalEn } from "./legal-en";
import { legalZhCn } from "./legal-zh-cn";
import { legalEs } from "./legal-es";
import { legalPtBr } from "./legal-pt-br";
import { legalDe } from "./legal-de";

export const legalContent: Record<Locale, LegalBundle> = {
  en: legalEn,
  "zh-cn": legalZhCn,
  es: legalEs,
  "pt-br": legalPtBr,
  de: legalDe,
};
