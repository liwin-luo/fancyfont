import type { MetadataRoute } from "next";
import { contentUpdated, getSiteUrl } from "@/lib/site";
import { defaultLocale, hreflang, localePath, locales } from "@/lib/i18n";
import { stylePages } from "@/lib/style-pages";
import { platformPages } from "@/lib/platform-pages";

interface PathSpec {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}

const PATHS: PathSpec[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/fancy-text-generator/", changeFrequency: "monthly", priority: 0.9 },
  { path: "/gaming-name-generator/", changeFrequency: "monthly", priority: 0.9 },
  { path: "/symbols/", changeFrequency: "monthly", priority: 0.9 },
  { path: "/privacy/", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms/", changeFrequency: "yearly", priority: 0.3 },
  { path: "/mcp/", changeFrequency: "monthly", priority: 0.5 },
  ...stylePages.map((page) => ({
    path: `/${page.slug}/`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  })),
  ...platformPages.map((page) => ({
    path: `/${page.slug}/`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date(`${contentUpdated}T00:00:00.000Z`);

  return PATHS.flatMap(({ path, changeFrequency, priority }) =>
    locales.map((locale) => {
      const languages: Record<string, string> = {};
      for (const l of locales) {
        languages[hreflang[l]] = `${siteUrl}${localePath(l, path)}`;
      }
      languages["x-default"] = `${siteUrl}${localePath(defaultLocale, path)}`;

      return {
        url: `${siteUrl}${localePath(locale, path)}`,
        lastModified,
        changeFrequency,
        priority,
        alternates: { languages },
      };
    }),
  );
}
