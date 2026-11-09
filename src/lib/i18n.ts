// 语言定义:4 语言,英文为主语言在根路径,中文 /zh/、西语 /es/、巴西葡语 /pt-br/。
//
// ACTIVE_LOCALES 是"实际上线路由存在的语言"。hreflang / sitemap alternates
// 默认只对 ACTIVE_LOCALES 输出;平台页等按语言差异存在的页面通过
// pageMetadata 的 availableLocales 参数覆盖,避免把 alternate 指向 404。

export const locales = ["en", "zh-cn", "es", "pt-br", "de"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** 首版全部上线;如需临时下线某语言,从这里移除并删路由组。 */
export const ACTIVE_LOCALES: readonly Locale[] = ["en", "zh-cn", "es", "pt-br", "de"];

export const localeNames: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  "zh-cn": "简体中文",
  es: "Español",
  "pt-br": "Português (BR)",
};

/** 语言切换器的短标签。 */
export const localeShortLabel: Record<Locale, string> = {
  en: "EN",
  de: "DE",
  "zh-cn": "中文",
  es: "ES",
  "pt-br": "PT",
};

export const htmlLang: Record<Locale, string> = {
  en: "en",
  de: "de",
  "zh-cn": "zh-CN",
  es: "es",
  "pt-br": "pt-BR",
};

export const hreflang: Record<Locale, string> = {
  en: "en",
  de: "de",
  "zh-cn": "zh-Hans",
  es: "es",
  "pt-br": "pt-BR",
};

export const localePrefix: Record<Locale, string> = {
  en: "",
  de: "/de",
  "zh-cn": "/zh",
  es: "/es",
  "pt-br": "/pt-br",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** 生成语言感知链接,如 localePath("zh-cn", "/zalgo-text/") -> "/zh/zalgo-text/"。 */
export function localePath(locale: Locale, path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${localePrefix[locale]}${normalized}`;
}

export interface PageMeta {
  title: string;
  description: string;
}
