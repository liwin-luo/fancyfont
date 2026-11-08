// 页面元数据构建器:canonical + hreflang alternates + x-default(指向主语言英文)。
// availableLocales 缺省为 ACTIVE_LOCALES;按语言差异存在的页面(平台页/指南)
// 传入该页实际可用的语言列表,避免把 alternate 指向 404 使集群失效。

import type { Metadata } from "next";
import { getSiteUrl, ogImageAlt, ogImagePath, siteName } from "./site";
import { ACTIVE_LOCALES, defaultLocale, hreflang, localePath, type Locale, type PageMeta } from "./i18n";

export function pageMetadata(
  locale: Locale,
  path: string,
  meta: PageMeta,
  availableLocales: readonly Locale[] = ACTIVE_LOCALES,
  /** 逐语言的页面路径;指南类路径按语言不同(/learn/、/zh/zhinan/、/guia/)时传入。 */
  pathsByLocale?: Partial<Record<Locale, string>>,
  /** 页面专属 OG 图(theme.art 的 AI 插图或 og-*.png);缺省用全站默认 /og.png。 */
  options?: { ogImage?: string },
): Metadata {
  const siteUrl = getSiteUrl();
  const pathFor = (l: Locale) => pathsByLocale?.[l] ?? localePath(l, path);
  const languages: Record<string, string> = {};
  for (const l of availableLocales) {
    languages[hreflang[l]] = `${siteUrl}${pathFor(l)}`;
  }
  // x-default 指向可用语言里的英文版;英文不可用则退回默认语言。
  const fallback = availableLocales.includes(defaultLocale) ? defaultLocale : availableLocales[0];
  languages["x-default"] = `${siteUrl}${pathFor(fallback)}`;
  // AI 插图为 1200×675,品牌 OG 图为 1200×630。
  const ogImage = options?.ogImage ?? ogImagePath;
  const ogHeight = ogImage.endsWith(".jpg") ? 675 : 630;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: pathFor(locale),
      languages,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: pathFor(locale),
      siteName,
      images: [{ url: ogImage, width: 1200, height: ogHeight, alt: ogImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [ogImage],
    },
  };
}

/** 每个语言组根布局的兜底 metadata,负责设置 metadataBase。 */
export function layoutMetadata(locale: Locale): Metadata {
  const siteUrl = getSiteUrl();
  return {
    metadataBase: new URL(siteUrl),
    // 各页面 title 已自带品牌位,模板不再重复追加。
    title: { default: `${siteName} — Fancy Text Generator & Nickname Decorator`, template: "%s" },
    description:
      "Fancy text generator: turn letters and numbers into 30 styled Unicode fonts, decorate nicknames with 27 symbol frames. Copy and paste anywhere — converted locally in your browser.",
    applicationName: siteName,
    openGraph: {
      type: "website",
      siteName,
      url: localePath(locale, "/"),
      images: [{ url: ogImagePath, width: 1200, height: 630, alt: ogImageAlt }],
    },
    robots: { index: true, follow: true },
  };
}

export const viewport = {
  themeColor: "#111111",
  width: "device-width",
  initialScale: 1,
} as const;
