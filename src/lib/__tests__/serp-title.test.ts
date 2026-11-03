import { describe, expect, it } from "vitest";
import { blankSpaceContent } from "@/lib/content/page-blank-space";
import { fancyContent } from "@/lib/content/page-fancy";
import { homeContent } from "@/lib/content/page-home";
import { locales } from "@/lib/i18n";
import { stylePages } from "@/lib/style-pages";
import { serpPhrase, serpTitle, styleSerpTitle } from "@/lib/serp-title";
import { siteName } from "@/lib/site";

// Printable ASCII plus the em-dash separator. The 2026-11 tech audit removed
// the decorative Unicode script from titles; these guards keep it out.
const TITLE_CHARS = /^[\u0020-\u007E\u2014]+$/;

describe("serp titles", () => {
  it("keeps the title phrase plain text — no decorative Unicode", () => {
    expect(serpPhrase("en")).toBe("Copy & Paste");
    for (const locale of locales) {
      expect(serpPhrase(locale)).not.toMatch(/[\u2000-\uFFFF]/); // no symbols, no script alphabets
    }
    expect(serpTitle("Fancy Text Generator", "en", "30 Styles")).toBe(
      `Fancy Text Generator \u2014 Copy & Paste 30 Styles | ${siteName}`,
    );
    const gothic = styleSerpTitle("Gothic Text Generator", "gothic-text-generator", "en");
    expect(gothic).toContain("Fraktur");
    expect(gothic).toContain("Old English");
  });

  it("keeps decorative Unicode out of every English page title", () => {
    const enTitles = [
      homeContent.en.meta.title,
      fancyContent.en.meta.title,
      blankSpaceContent.en.meta.title,
      ...stylePages.map((page) => page.copy.en.title ?? styleSerpTitle(page.copy.en.h1, page.slug, "en")),
    ];
    for (const title of enTitles) {
      expect(title).toMatch(TITLE_CHARS);
    }
  });

  it("gives every style page a plain-text detail after the phrase", () => {
    for (const locale of locales) {
      for (const page of stylePages) {
        const title = styleSerpTitle(page.copy[locale].h1, page.slug, locale);
        expect(title.startsWith(`${page.copy[locale].h1} \u2014`)).toBe(true);
        expect(title.endsWith(` | ${siteName}`)).toBe(true);
        expect(title.length).toBeGreaterThan(page.copy[locale].h1.length + siteName.length);
      }
    }
  });
});
