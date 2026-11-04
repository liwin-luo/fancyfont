import { describe, expect, it } from "vitest";
import { locales } from "../i18n";
import { homeContent } from "../content/page-home";
import { stylePages } from "../style-pages";
import { platformPages } from "../platform-pages";
import { resolvedStyleTitle } from "../serp-title";

// Tool-page acceptance (refactoring plan §3.5): every index page in every
// locale carries a title, and no two index pages of one locale share one.

function allTitles(locale: (typeof locales)[number]): string[] {
  const titles: string[] = [homeContent[locale].meta.title];
  for (const page of stylePages) {
    titles.push(resolvedStyleTitle(page.copy[locale], page.slug, locale));
  }
  for (const page of platformPages) {
    titles.push(page.copy[locale].title);
  }
  return titles;
}

describe("index page titles", () => {
  it("every style and platform page has a title in every locale", () => {
    for (const locale of locales) {
      for (const page of stylePages) {
        expect(page.copy[locale].h1.trim().length, `${locale} ${page.slug} h1`).toBeGreaterThan(0);
      }
      for (const page of platformPages) {
        expect(page.copy[locale].title.trim().length, `${locale} ${page.slug} title`).toBeGreaterThan(0);
      }
    }
  });

  it("titles are unique within each locale and never empty", () => {
    for (const locale of locales) {
      const titles = allTitles(locale);
      expect(new Set(titles).size).toBe(titles.length);
      for (const title of titles) {
        expect(title.trim().length, title).toBeGreaterThan(0);
      }
    }
  });
});
