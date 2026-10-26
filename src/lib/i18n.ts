// Locale definitions for FancyFont.
//
// English lives at the root; Spanish and Brazilian Portuguese live under
// /es/ and /pt-br/. Every locale page declares hreflang for its siblings
// plus x-default pointing at the English URL. No browser-based redirects.

export const locales = ["en", "es", "pt-br", "zh-cn", "id"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  "pt-br": "Português (BR)",
  "zh-cn": "简体中文",
  id: "Bahasa Indonesia",
};

/** Short label for the header language switcher. */
export const localeShortLabel: Record<Locale, string> = {
  en: "EN",
  es: "ES",
  "pt-br": "PT",
  "zh-cn": "中文",
  id: "ID",
};

/** Value for the <html lang> attribute. */
export const htmlLang: Record<Locale, string> = {
  en: "en",
  es: "es",
  "pt-br": "pt-BR",
  "zh-cn": "zh-CN",
  id: "id",
};

/** hreflang value used in alternates. */
export const hreflang: Record<Locale, string> = {
  en: "en",
  es: "es",
  "pt-br": "pt-BR",
  "zh-cn": "zh-Hans",
  id: "id",
};

export const localePrefix: Record<Locale, string> = {
  en: "",
  es: "/es",
  "pt-br": "/pt-br",
  "zh-cn": "/zh-cn",
  id: "/id",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Builds a locale-aware href, e.g. localePath("es", "/symbols/") -> "/es/symbols/". */
export function localePath(locale: Locale, path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${localePrefix[locale]}${normalized}`;
}

/** Detects the locale from a pathname (root paths are English). */
export function localeFromPathname(pathname: string): Locale {
  const segment = pathname.split("/")[1];
  if (segment === "es") return "es";
  if (segment === "pt-br") return "pt-br";
  if (segment === "zh-cn") return "zh-cn";
  if (segment === "id") return "id";
  return defaultLocale;
}

export function otherLocales(locale: Locale): Locale[] {
  return locales.filter((l) => l !== locale);
}

/**
 * First browser language we can actually serve.
 * zh* maps to zh-cn and pt* to pt-br — those are the only variants on the site.
 */
export function localeFromLanguages(languages: readonly string[]): Locale | null {
  for (const tag of languages) {
    const lower = tag.toLowerCase();
    if (lower.startsWith("zh")) return "zh-cn";
    if (lower.startsWith("pt")) return "pt-br";
    if (lower.startsWith("es")) return "es";
    if (lower.startsWith("id")) return "id";
    if (lower.startsWith("en")) return "en";
  }
  return null;
}

export interface PageMeta {
  title: string;
  description: string;
}
