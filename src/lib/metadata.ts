// Shared page metadata builder: per-locale canonical plus hreflang
// alternates for every locale and x-default pointing at English.

import type { Metadata, Viewport } from "next";
import { getSiteUrl, ogImageAlt, ogImagePath, siteName } from "./site";
import { hreflang, localePath, locales, type Locale, type PageMeta } from "./i18n";
import { homeContent } from "./content/page-home";

export function pageMetadata(locale: Locale, path: string, meta: PageMeta): Metadata {
  const siteUrl = getSiteUrl();
  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[hreflang[l]] = `${siteUrl}${localePath(l, path)}`;
  }
  languages["x-default"] = `${siteUrl}${localePath("en", path)}`;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: localePath(locale, path),
      languages,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: localePath(locale, path),
      siteName,
      images: [{ url: ogImagePath, width: 1200, height: 630, alt: ogImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [ogImagePath],
    },
  };
}

/** Fallback metadata for each locale group's root layout. */
export function layoutMetadata(locale: Locale): Metadata {
  const meta = homeContent[locale].meta;
  return {
    metadataBase: new URL(getSiteUrl()),
    title: meta.title,
    description: meta.description,
    applicationName: siteName,
    openGraph: {
      type: "website",
      siteName,
      title: meta.title,
      description: meta.description,
      url: localePath(locale, "/"),
      images: [{ url: ogImagePath, width: 1200, height: 630, alt: ogImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [ogImagePath],
    },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: "#6d28d9",
  width: "device-width",
  initialScale: 1,
};
