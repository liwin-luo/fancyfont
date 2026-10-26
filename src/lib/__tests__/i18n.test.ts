import { describe, expect, it } from "vitest";
import { locales, localePath, hreflang, localeFromLanguages } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { stylePages } from "@/lib/style-pages";
import { platformPages } from "@/lib/platform-pages";
import { ui } from "@/lib/ui-strings";
import { textStyles } from "@/lib/text-styles";
import { symbolCategories } from "@/lib/symbols-data";
import { homeContent } from "@/lib/content/page-home";
import { fancyContent } from "@/lib/content/page-fancy";
import { gamingContent } from "@/lib/content/page-gaming";
import { symbolsContent, privacyContent } from "@/lib/content/page-symbols-privacy";
import { termsContent } from "@/lib/content/page-terms";
import { contactEmail } from "@/lib/site";
import { mcpContent } from "@/lib/content/page-mcp";
import { serpTitle } from "@/lib/serp-title";

describe("i18n completeness", () => {
  it("every style page exists in every locale with non-empty copy", () => {
    const slugs = stylePages.map((page) => page.slug);
    expect(new Set(slugs).size).toBe(stylePages.length);
    for (const locale of locales) {
      for (const page of stylePages) {
        const copy = page.copy[locale];
        expect(copy).toBeDefined();
        expect(copy.h1.length).toBeGreaterThan(0);
        expect(serpTitle(copy.h1, locale).length).toBeGreaterThan(copy.h1.length);
        expect(copy.description.length).toBeGreaterThan(0);
        expect(copy.intro.length).toBeGreaterThan(0);
        expect(copy.howItWorks.length).toBeGreaterThan(0);
        expect(copy.coverageNote.length).toBeGreaterThan(0);
        expect(copy.bestFor.length).toBeGreaterThanOrEqual(3);
        expect(copy.sampleInputs.length).toBeGreaterThanOrEqual(3);
        expect(copy.platformTip.length).toBeGreaterThan(0);
        expect(copy.faq.length).toBeGreaterThanOrEqual(3);
      }
    }
    // All locales share the same slugs.
    for (const locale of locales) {
      expect(stylePages.map((p) => p.copy[locale].h1).length).toBe(slugs.length);
    }
  });

  it("every platform page exists in every locale with non-empty copy", () => {
    const slugs = platformPages.map((page) => page.slug);
    expect(slugs).toEqual([
      "pubg-name-generator",
      "free-fire-name-generator",
      "facebook-fonts",
      "instagram-fonts",
      "tiktok-fonts",
      "discord-fonts",
      "cod-name-generator",
      "youtube-fonts",
      "roblox-name-generator",
    ]);
    for (const locale of locales) {
      for (const page of platformPages) {
        const copy = page.copy[locale];
        expect(copy.h1.length).toBeGreaterThan(0);
        expect(copy.presets.length).toBeGreaterThanOrEqual(3);
        expect(copy.guidance.length).toBeGreaterThanOrEqual(3);
        expect(copy.compatNote.length).toBeGreaterThan(0);
        expect(copy.faq.length).toBeGreaterThanOrEqual(3);
      }
    }
  });

  it("localizes every text style name and symbol category name", () => {
    for (const locale of locales) {
      for (const style of textStyles) {
        expect(ui[locale].styleNames[style.id].length).toBeGreaterThan(0);
      }
      for (const category of symbolCategories) {
        expect(ui[locale].symbolCats[category.id].length).toBeGreaterThan(0);
      }
      for (const vibe of ["cool", "dark", "cute", "pro", "minimal"] as const) {
        expect(ui[locale].vibeNames[vibe].length).toBeGreaterThan(0);
      }
    }
  });

  it("core page content is complete in every locale", () => {
    for (const locale of locales) {
      expect(homeContent[locale].what.body.length).toBeGreaterThan(40);
      expect(homeContent[locale].faq.length).toBeGreaterThanOrEqual(4);
      expect(mcpContent[locale].tools).toHaveLength(4);
      expect(mcpContent[locale].steps.length).toBeGreaterThanOrEqual(3);
      expect(mcpContent[locale].faq.length).toBeGreaterThanOrEqual(3);
      expect(fancyContent[locale].faq.length).toBeGreaterThanOrEqual(4);
      expect(fancyContent[locale].examples.length).toBeGreaterThanOrEqual(4);
      expect(gamingContent[locale].faq.length).toBeGreaterThanOrEqual(4);
      expect(symbolsContent[locale].faq.length).toBeGreaterThanOrEqual(3);
      expect(privacyContent[locale].sections.length).toBeGreaterThanOrEqual(5);
      expect(termsContent[locale].sections.length).toBeGreaterThanOrEqual(5);
      const contact = [...privacyContent[locale].sections, ...termsContent[locale].sections].filter((section) =>
        section.body.includes("{email}"),
      );
      expect(contact).toHaveLength(2);
      expect(contactEmail).toMatch(/@fancyfont\.tools$/);
    }
  });

  it("keeps the homepage headline and Chinese hub descriptions specific", () => {
    expect(homeContent.en.hero.pre + homeContent.en.hero.accent).toBe("Generate and Copy Fancy Text");
    expect(homeContent.es.hero.pre + homeContent.es.hero.accent).toBe("Genera y copia letras bonitas");
    expect(homeContent["pt-br"].hero.pre + homeContent["pt-br"].hero.accent).toBe("Gere e copie letras bonitas");
    expect(homeContent["zh-cn"].hero.pre + homeContent["zh-cn"].hero.accent).toBe("生成并复制个性文字");
    expect(homeContent.id.hero.pre + homeContent.id.hero.accent).toBe("Buat dan salin teks keren");

    const related = gamingContent["pt-br"].related.map((item) => `${item.title} ${item.description}`).join("\n");
    expect(related).not.toMatch(/Generador|Convierte|tu propio|apodos/);
    expect(related).toContain("Gerador de letras bonitas");
    expect(related).toContain("Fontes para Discord");

    for (const description of [
      homeContent["zh-cn"].meta.description,
      fancyContent["zh-cn"].meta.description,
      gamingContent["zh-cn"].meta.description,
      symbolsContent["zh-cn"].meta.description,
    ]) {
      expect(description.length).toBeGreaterThanOrEqual(60);
    }
  });

  it("page metadata builds per-locale canonical, hreflang and x-default", () => {
    const meta = pageMetadata("es", "/symbols/", { title: "T", description: "D" });
    expect(meta.alternates?.canonical).toBe("/es/symbols/");
    const languages = meta.alternates?.languages as Record<string, string>;
    expect(languages[hreflang.en]).toBe("https://fancyfont.tools/symbols/");
    expect(languages[hreflang.es]).toBe("https://fancyfont.tools/es/symbols/");
    expect(languages[hreflang["pt-br"]]).toBe("https://fancyfont.tools/pt-br/symbols/");
    expect(languages["x-default"]).toBe("https://fancyfont.tools/symbols/");
  });

  it("maps browser languages to a site locale", () => {
    expect(localeFromLanguages(["zh-CN", "en"])).toBe("zh-cn");
    expect(localeFromLanguages(["en-US"])).toBe("en");
    expect(localeFromLanguages(["pt-PT"])).toBe("pt-br");
    expect(localeFromLanguages(["es-MX", "en"])).toBe("es");
    expect(localeFromLanguages(["id-ID"])).toBe("id");
    expect(localeFromLanguages(["fr", "de"])).toBeNull();
    expect(localeFromLanguages(["ja", "zh-Hans"])).toBe("zh-cn");
  });

  it("builds locale paths with prefixes", () => {
    expect(localePath("en", "/symbols/")).toBe("/symbols/");
    expect(localePath("es", "/symbols/")).toBe("/es/symbols/");
    expect(localePath("pt-br", "/")).toBe("/pt-br/");
  });
});
