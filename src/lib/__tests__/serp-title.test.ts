import { describe, expect, it } from "vitest";
import { locales } from "@/lib/i18n";
import { stylePages } from "@/lib/style-pages";
import { serpScript, serpTitle, styleSerpTitle } from "@/lib/serp-title";
import { siteName } from "@/lib/site";
import { convertText } from "@/lib/text-styles";

describe("serp titles", () => {
  it("uses even bold script instead of the thin script with broken e/g/o", () => {
    const script = serpScript("en");
    expect(script).toBe(`\u2661 ${convertText("Copy & Paste", "boldScript")}`);
    expect(script).not.toContain("\u212F"); // ℯ
    expect(script).not.toContain("\u2134"); // ℴ
    expect(serpScript("es")).not.toContain("\u212F");
    expect(serpScript("es")).not.toContain("\u210A"); // ℊ
    expect(serpTitle("Fancy Text Generator", "en", "30 Styles")).toBe(
      `Fancy Text Generator \u2014 ${script} 30 Styles | ${siteName}`,
    );
    const gothic = styleSerpTitle("Gothic Text Generator", "gothic-text-generator", "en");
    expect(gothic).toContain("Fraktur");
    expect(gothic).toContain("Old English");
  });

  it("gives every style page a plain-text detail after the script", () => {
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
