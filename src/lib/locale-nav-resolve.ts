// 语言切换链接解析。只依赖纯数据，供服务端组装索引、客户端首屏渲染和测试共用。
// 指南前缀必须与 lib/guides.ts 的 GUIDE_BASE 一致；locale-nav.test.ts 会对照。

import {
  hreflang,
  htmlLang,
  localeNames,
  localePath,
  localePrefix,
  localeShortLabel,
  locales,
  type Locale,
} from "./i18n";

/** 与 guides.ts GUIDE_BASE 保持一致。 */
export const GUIDE_BASE: Record<Locale, string> = {
  en: "/learn",
  "zh-cn": "/zhinan",
  es: "/guia",
  "pt-br": "/guia",
  de: "/anleitung",
};

export interface LanguageIndex {
  /** 样式页或平台页 slug → 实际有文案的语言。 */
  slugs: Record<string, Locale[]>;
  /** 指南 slug → 实际有该篇的语言。 */
  guides: Record<string, Locale[]>;
  /** 五种语言都有、路径后缀相同的页面（不含语言前缀，含尾斜杠）。 */
  shared: string[];
  /** 仅英文存在的路径（含尾斜杠）。 */
  enOnly: string[];
}

export interface LanguageLink {
  locale: Locale;
  href: string;
  hrefLang: string;
  lang: string;
  shortLabel: string;
  name: string;
  current: boolean;
  /** 当前页在该语言有对等翻译。否则 href 是该语言首页。 */
  equivalent: boolean;
}

const PREFIXES: readonly { prefix: string; locale: Locale }[] = [
  { prefix: "/pt-br", locale: "pt-br" },
  { prefix: "/zh", locale: "zh-cn" },
  { prefix: "/es", locale: "es" },
  { prefix: "/de", locale: "de" },
];

export function guideIndexPath(locale: Locale): string {
  return localePath(locale, `${GUIDE_BASE[locale]}/`);
}

export function normalizePathname(pathname: string): string {
  const cut = pathname.split("?")[0]?.split("#")[0] ?? "/";
  let path = cut.startsWith("/") ? cut : `/${cut}`;
  path = path.replace(/\/{2,}/g, "/");
  if (path === "") return "/";
  if (path.length > 1 && !path.endsWith("/")) path = `${path}/`;
  return path;
}

function splitLocale(path: string): { locale: Locale; rest: string } {
  for (const { prefix, locale } of PREFIXES) {
    if (path === `${prefix}/`) return { locale, rest: "/" };
    if (path.startsWith(`${prefix}/`)) {
      const rest = path.slice(prefix.length);
      return { locale, rest: rest.startsWith("/") ? rest : `/${rest}` };
    }
  }
  return { locale: "en", rest: path };
}

function isGuideIndex(rest: string): boolean {
  return (Object.values(GUIDE_BASE) as string[]).some((base) => rest === `${base}/`);
}

function guideSlugFrom(rest: string): string | undefined {
  for (const base of Object.values(GUIDE_BASE)) {
    const prefix = `${base}/`;
    if (!rest.startsWith(prefix) || rest === prefix) continue;
    const slug = rest.slice(prefix.length).replace(/\/$/, "");
    if (slug && !slug.includes("/")) return slug;
  }
  return undefined;
}

function homes(): Map<Locale, { href: string; equivalent: boolean }> {
  const targets = new Map<Locale, { href: string; equivalent: boolean }>();
  for (const locale of locales) targets.set(locale, { href: localePath(locale, "/"), equivalent: false });
  return targets;
}

export function resolveLanguageLinks(pathname: string, index: LanguageIndex): LanguageLink[] {
  const path = normalizePathname(pathname || "/");
  const { locale: current, rest } = splitLocale(path);
  const targets = homes();

  if (rest === "/") {
    for (const locale of locales) targets.set(locale, { href: localePath(locale, "/"), equivalent: true });
  } else if (index.shared.includes(rest)) {
    for (const locale of locales) targets.set(locale, { href: localePath(locale, rest), equivalent: true });
  } else if (index.enOnly.includes(rest)) {
    for (const locale of locales) {
      targets.set(locale, {
        href: locale === "en" ? rest : localePath(locale, "/"),
        equivalent: locale === "en",
      });
    }
  } else if (isGuideIndex(rest)) {
    for (const locale of locales) targets.set(locale, { href: guideIndexPath(locale), equivalent: true });
  } else {
    const guideSlug = guideSlugFrom(rest);
    const guideLocales = guideSlug ? index.guides[guideSlug] : undefined;
    const pageSlug = rest.replace(/^\/|\/$/g, "");
    const pageLocales = !pageSlug.includes("/") ? index.slugs[pageSlug] : undefined;
    const available = new Set(guideLocales ?? pageLocales ?? []);
    const known = guideLocales !== undefined || pageLocales !== undefined;
    if (known) {
      for (const locale of locales) {
        if (!available.has(locale)) continue;
        const href = guideLocales
          ? localePath(locale, `${GUIDE_BASE[locale]}/${guideSlug}/`)
          : localePath(locale, `/${pageSlug}/`);
        targets.set(locale, { href, equivalent: true });
      }
    }
  }

  return locales.map((locale) => {
    const target = targets.get(locale)!;
    return {
      locale,
      href: target.href,
      hrefLang: hreflang[locale],
      lang: htmlLang[locale],
      shortLabel: localeShortLabel[locale],
      name: localeNames[locale],
      current: locale === current,
      equivalent: target.equivalent,
    };
  });
}

/** 供测试确认前缀表没有漏掉已上线语言。 */
export function prefixFor(locale: Locale): string {
  return localePrefix[locale];
}
