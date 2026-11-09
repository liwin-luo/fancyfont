import { describe, expect, it } from "vitest";
import { slugMetadata } from "@/app/_shared/handlers";
import { contextualLinks, featuredGameTextLinks } from "@/lib/contextual-links";
import { guideBase, guidePath } from "@/lib/guides";
import { PLATFORM_GROUPS, STYLE_GROUPS } from "@/lib/hubs";
import { languageIndex } from "@/lib/locale-nav";
import { guideIndexPath, resolveLanguageLinks } from "@/lib/locale-nav-resolve";
import { relatedCards as platformRelated } from "@/lib/platform-pages";
import { getStylePageFor, relatedCards } from "@/lib/style-pages";
import { getUi } from "@/lib/ui-strings";
import { locales, localePrefix, type Locale } from "@/lib/i18n";

function hrefs(pathname: string) {
  return resolveLanguageLinks(pathname, languageIndex);
}

function byLocale(pathname: string) {
  return Object.fromEntries(hrefs(pathname).map((link) => [link.locale, link])) as Record<
    Locale,
    ReturnType<typeof hrefs>[number]
  >;
}

describe("language navigation", () => {
  it("renders one ordinary path for every supported locale from the English homepage", () => {
    const links = hrefs("/");
    expect(links.map((link) => link.locale)).toEqual([...locales]);
    expect(links.map((link) => link.href)).toEqual(["/", "/zh/", "/es/", "/pt-br/", "/de/"]);
    expect(links.every((link) => link.equivalent)).toBe(true);
    expect(links.find((link) => link.locale === "en")?.current).toBe(true);
    expect(links.every((link) => !link.href.includes("//"))).toBe(true);
  });

  it("keeps the translated page when it exists", () => {
    const links = byLocale("/cursive-fonts/");
    expect(links.en.href).toBe("/cursive-fonts/");
    expect(links["zh-cn"].href).toBe("/zh/cursive-fonts/");
    expect(links.es.href).toBe("/es/cursive-fonts/");
    expect(links["pt-br"].href).toBe("/pt-br/cursive-fonts/");
    expect(links.de.href).toBe("/de/cursive-fonts/");
    expect(Object.values(links).every((link) => link.equivalent)).toBe(true);
  });

  it("falls back to the locale homepage when the page has no translation", () => {
    const decorated = byLocale("/zh/decorated-nicknames/");
    expect(decorated["zh-cn"]).toMatchObject({ href: "/zh/decorated-nicknames/", current: true, equivalent: true });
    for (const locale of ["en", "es", "pt-br", "de"] as const) {
      expect(decorated[locale].href).toBe(`${localePrefix[locale]}/`.replace("//", "/"));
      expect(decorated[locale].equivalent).toBe(false);
      expect(decorated[locale].href).not.toContain("decorated-nicknames");
    }

    const symbols = byLocale("/symbols/");
    expect(symbols.en).toMatchObject({ href: "/symbols/", equivalent: true });
    expect(symbols.de).toMatchObject({ href: "/de/", equivalent: false });
    expect(symbols.es.href).toBe("/es/");
  });

  it("switches guide indexes and articles onto each locale's own path", () => {
    const index = byLocale("/learn/");
    for (const locale of locales) {
      expect(index[locale].href).toBe(guideIndexPath(locale));
      expect(index[locale].href).toBe(`${guideBase(locale)}/`);
      expect(index[locale].equivalent).toBe(true);
    }
    expect(byLocale("/learn//").en.href).toBe("/learn/");

    const shared = byLocale("/learn/why-boxes-appear/");
    expect(shared.de.href).toBe("/de/anleitung/why-boxes-appear/");
    expect(shared.es.href).toBe("/es/guia/why-boxes-appear/");
    expect(shared["zh-cn"].href).toBe("/zh/zhinan/why-boxes-appear/");

    const englishOnly = byLocale("/learn/pick-your-style/");
    expect(englishOnly.en.href).toBe("/learn/pick-your-style/");
    expect(englishOnly["zh-cn"].href).toBe("/zh/zhinan/pick-your-style/");
    expect(englishOnly.es).toMatchObject({ href: "/es/", equivalent: false });
    expect(englishOnly.de.href).toBe("/de/");
  });

  it("does not add hreflang for a locale that has no translation", async () => {
    const meta = await slugMetadata("zh-cn", "decorated-nicknames");
    const languages = meta.alternates?.languages as Record<string, string>;
    expect(languages["zh-Hans"]).toBe("https://fancyfont.tools/zh/decorated-nicknames/");
    expect(languages.es).toBeUndefined();
    expect(languages.en).toBeUndefined();
    expect(languages.de).toBeUndefined();
    expect(languages["pt-BR"]).toBeUndefined();
  });
});

describe("discoverable routes", () => {
  it("lists the four previously unlinked pages on their hubs", () => {
    const styleSlugs = STYLE_GROUPS.flatMap((group) => group.slugs);
    const platformSlugs = PLATFORM_GROUPS.flatMap((group) => group.slugs);
    expect(styleSlugs).toEqual(expect.arrayContaining(["signature-font-generator", "superscript-subscript-generator"]));
    expect(platformSlugs).toEqual(expect.arrayContaining(["twitter-fonts", "minecraft-fonts"]));
  });

  it("adds same-locale contextual entrances and skips missing translations", () => {
    expect(contextualLinks("en", "cursive-fonts").map((link) => link.href)).toContain("/signature-font-generator/");
    expect(contextualLinks("zh-cn", "cursive-fonts").map((link) => link.href)).not.toContain("/signature-font-generator/");
    expect(contextualLinks("en", "tiny-text-generator").map((link) => link.href)).toContain("/superscript-subscript-generator/");
    expect(contextualLinks("en", "instagram-fonts").map((link) => link.href)).toContain("/twitter-fonts/");
    expect(contextualLinks("en", "game-name-generator").map((link) => link.href)).toEqual(
      expect.arrayContaining(["/minecraft-fonts/", "/berry-avenue-fonts/"]),
    );
    expect(contextualLinks("en", "roblox-name-generator").map((link) => link.href)).toContain("/berry-avenue-fonts/");
    expect(contextualLinks("en", "adopt-me-fonts").map((link) => link.href)).toContain("/berry-avenue-fonts/");
    expect(contextualLinks("en", "coquette-font-generator").map((link) => link.href)).toContain("/berry-avenue-fonts/");
    expect(contextualLinks("de", "roblox-name-generator").map((link) => link.href)).not.toContain("/berry-avenue-fonts/");
    expect(contextualLinks("de", "roblox-name-generator").some((link) => link.href.startsWith("/berry"))).toBe(false);
    expect(contextualLinks("zh-cn", "game-name-generator")).toEqual([]);
  });

  it("features Berry Avenue on homepages where that page exists", () => {
    expect(featuredGameTextLinks("en").map((link) => link.href)).toEqual([
      "/berry-avenue-fonts/",
      "/roblox-name-generator/",
      "/adopt-me-fonts/",
      "/coquette-font-generator/",
    ]);
    expect(featuredGameTextLinks("es").map((link) => link.href)).toEqual([
      "/es/berry-avenue-fonts/",
      "/es/adopt-me-fonts/",
      "/es/coquette-font-generator/",
    ]);
    expect(featuredGameTextLinks("pt-br").map((link) => link.href)).toContain("/pt-br/berry-avenue-fonts/");
    expect(featuredGameTextLinks("de").map((link) => link.href)).toEqual([
      "/de/roblox-name-generator/",
      "/de/coquette-font-generator/",
    ]);
    expect(featuredGameTextLinks("zh-cn")).toEqual([]);
    const berry = featuredGameTextLinks("en").find((link) => link.href === "/berry-avenue-fonts/");
    expect(berry?.title.toLowerCase()).toContain("berry");
    expect(berry?.description.toLowerCase()).not.toContain("username accepts");
  });
});

describe("locale-consistent paths", () => {
  it("does not emit a double slash for the guide index", () => {
    expect(guidePath("en", "")).toBe("/learn/");
    expect(guidePath("zh-cn", "")).toBe("/zh/zhinan/");
    expect(guidePath("es", "why-boxes-appear")).toBe("/es/guia/why-boxes-appear/");
  });

  it("prefixes related cards with the current locale", () => {
    expect(relatedCards("zh-cn", ["cursive-fonts"])[0]?.href).toBe("/zh/cursive-fonts/");
    expect(relatedCards("en", ["cursive-fonts"])[0]?.href).toBe("/cursive-fonts/");
    expect(relatedCards("en", ["decorated-nicknames"])).toEqual([]);
    expect(relatedCards("zh-cn", ["decorated-nicknames"])[0]?.href).toBe("/zh/decorated-nicknames/");
    expect(platformRelated("es", [{ slug: "cute-fonts", kind: "style" }])[0]?.href).toBe("/es/cute-fonts/");
  });

  it("keeps homepage start links inside the current locale and off the Chinese decorator redirect", () => {
    for (const locale of locales) {
      for (const link of getUi(locale).home.startLinks) {
        const prefix = localePrefix[locale];
        expect(link.href.includes("//"), link.href).toBe(false);
        if (prefix) expect(link.href.startsWith(`${prefix}/`), `${locale} ${link.href}`).toBe(true);
        else expect(link.href.startsWith("/zh/") || link.href.startsWith("/es/") || link.href.startsWith("/pt-br/") || link.href.startsWith("/de/")).toBe(false);
      }
    }
    expect(getUi("en").home.startLinks.some((link) => link.href.includes("decorated-nicknames"))).toBe(false);
    expect(getUi("zh-cn").home.startLinks[0]?.href).toBe("/zh/decorated-nicknames/");
    expect(getStylePageFor("signature-font-generator", "en")).toBeTruthy();
  });
});
