// 站点地图:首页/法务页四语言全有,输出完整 hreflang;样式页与平台页
// 按注册表的可用语言逐页输出(alternates 只覆盖实际存在的语言,避免
// 指向 404);指南是每语言独立页面,单 URL 无 alternates。

import type { MetadataRoute } from "next";
import { guidePath, guidesFor } from "@/lib/guides";
import { ACTIVE_LOCALES, defaultLocale, hreflang, localePath, type Locale } from "@/lib/i18n";
import { platformPageLocales, platformPages } from "@/lib/platform-pages";
import { contentUpdated, getSiteUrl } from "@/lib/site";
import { stylePageLocales, stylePages } from "@/lib/style-pages";

function languagesFor(path: string, available: readonly Locale[]): Record<string, string> {
  const siteUrl = getSiteUrl();
  const languages: Record<string, string> = {};
  for (const l of available) {
    languages[hreflang[l]] = `${siteUrl}${localePath(l, path)}`;
  }
  const fallback = available.includes(defaultLocale) ? defaultLocale : available[0];
  languages["x-default"] = `${siteUrl}${localePath(fallback, path)}`;
  return languages;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date(`${contentUpdated}T00:00:00.000Z`);
  const entries: MetadataRoute.Sitemap = [];

  const push = (
    locale: Locale,
    path: string,
    available: readonly Locale[],
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: number,
  ) => {
    entries.push({
      url: `${siteUrl}${localePath(locale, path)}`,
      lastModified,
      changeFrequency,
      priority,
      alternates: { languages: languagesFor(path, available) },
    });
  };

  // 全语言通用页:首页 + 法务页
  const SHARED: { path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/about/", changeFrequency: "monthly", priority: 0.5 },
    { path: "/contact/", changeFrequency: "yearly", priority: 0.3 },
    { path: "/privacy/", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terms/", changeFrequency: "yearly", priority: 0.3 },
  ];
  for (const { path, changeFrequency, priority } of SHARED) {
    for (const locale of ACTIVE_LOCALES) push(locale, path, ACTIVE_LOCALES, changeFrequency, priority);
  }

  // 样式页:按页面可用语言
  for (const page of stylePages) {
    const available = stylePageLocales(page);
    for (const locale of available) {
      push(locale, `/${page.slug}/`, available, "monthly", 0.8);
    }
  }

  // 平台页:按页面可用语言
  for (const page of platformPages) {
    const available = platformPageLocales(page);
    for (const locale of available) {
      push(locale, `/${page.slug}/`, available, "monthly", 0.8);
    }
  }

  // 中间层 hub 页:四语言全有
  for (const slug of ["styles", "platforms"] as const) {
    for (const locale of ACTIVE_LOCALES) push(locale, `/${slug}/`, ACTIVE_LOCALES, "weekly", 0.9);
  }

  // 迁移工具页(符号库/空白字符):首版仅英文,无 hreflang 兄弟
  for (const path of ["/symbols/", "/blank-space/"]) {
    entries.push({
      url: `${siteUrl}${path}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  // 指南:每语言独立页面,无 hreflang 兄弟
  for (const locale of ACTIVE_LOCALES) {
    for (const guide of guidesFor(locale)) {
      entries.push({
        url: `${siteUrl}${guidePath(locale, guide.slug)}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
