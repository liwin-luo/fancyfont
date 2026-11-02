import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { faqJsonLd, linkLabels } from "@/components/sections";
import { buildScenario, DISPLAY_NAME_MAX, DISPLAY_NAME_MIN, ROBLOX_SOURCES } from "@/lib/berry-scenarios";
import { berryExtra, berryPageFaq } from "@/lib/content/berry-avenue-extra";
import { locales, type Locale } from "@/lib/i18n";
import { getPlatformPage } from "@/lib/platform-pages";

const NOT_UPLOADED: Record<Locale, string> = {
  en: "is not uploaded",
  es: "no se sube",
  "pt-br": "não é enviado",
  "zh-cn": "不会上传",
  id: "tidak diunggah",
};

describe("Berry Avenue troubleshooting and scenario kits", () => {
  it("keeps default display names inside 3–20 graphemes and flags an empty name", () => {
    for (const locale of locales) {
      const kits = berryExtra[locale].kits.items;
      expect(kits.map((item) => item.id)).toEqual(["cute", "cool", "horror"]);
      for (const kit of kits) {
        const pieces = buildScenario("Blair", kit.template);
        const display = pieces.find((piece) => piece.key === "display")!;
        const plain = pieces.find((piece) => piece.key === "plain")!;
        const bio = pieces.find((piece) => piece.key === "bio")!;
        const sign = pieces.find((piece) => piece.key === "sign")!;
        expect(display.graphemes).toBeGreaterThanOrEqual(DISPLAY_NAME_MIN);
        expect(display.graphemes).toBeLessThanOrEqual(DISPLAY_NAME_MAX);
        expect(display.outside).toBe(false);
        expect(plain.text).toBe("Blair");
        expect(bio.max).toBeNull();
        expect(sign.max).toBeNull();
        expect(display.text.length).toBeGreaterThan(0);

        const long = buildScenario("SuperLongBerryNameExtra", kit.template);
        const longDisplay = long.find((piece) => piece.key === "display")!;
        expect(longDisplay.graphemes).toBeLessThanOrEqual(DISPLAY_NAME_MAX);
        expect(longDisplay.trimmed).toBe(true);

        const empty = buildScenario(" ", kit.template).find((piece) => piece.key === "display")!;
        expect(empty.outside).toBe(true);
      }
    }
  });

  it("adds troubleshooting answers without duplicating questions, and links only checked Roblox URLs", () => {
    const allowed = new Set<string>(Object.values(ROBLOX_SOURCES));
    const page = getPlatformPage("en", "berry-avenue-fonts")!;
    for (const locale of locales) {
      const faq = berryPageFaq(locale, page.copy[locale].faq);
      expect(new Set(faq.map((item) => item.q)).size).toBe(faq.length);
      expect(faq.length).toBe(page.copy[locale].faq.length + berryExtra[locale].faq.length);
      const joined = faq.map((item) => `${item.q}\n${item.a}`).join("\n");
      expect(joined).toMatch(/3/);
      expect(joined).toMatch(/20/);
      expect(joined).toContain("####");
      expect(joined).not.toMatch(/https?:\/\//);
      expect(berryExtra[locale].safety.body).toContain(NOT_UPLOADED[locale]);

      const extra = berryExtra[locale];
      const visible = [...faq.map((item) => item.a), extra.safety.body].join("\n");
      expect(visible).not.toMatch(/https?:\/\//);
      expect(linkLabels(visible, extra.links).map((part) => part.value).join("")).toBe(visible);
      const hrefs = new Set(
        linkLabels(visible, extra.links)
          .filter((part) => part.href)
          .map((part) => part.href as string),
      );
      expect(hrefs.has(ROBLOX_SOURCES.displayNameHelp)).toBe(true);
      expect(hrefs.has(ROBLOX_SOURCES.displayNameAnnouncement)).toBe(true);
      expect(hrefs.has(ROBLOX_SOURCES.experienceChat)).toBe(true);
      expect(hrefs.has(ROBLOX_SOURCES.safety)).toBe(true);
      expect(hrefs.has(ROBLOX_SOURCES.communityStandards)).toBe(true);
      expect(hrefs.has(ROBLOX_SOURCES.textFiltering)).toBe(true);
      for (const link of extra.links) {
        expect(allowed.has(link.href), link.href).toBe(true);
        expect(visible).toContain(link.label);
        expect(link.label).not.toMatch(/https?:\/\//);
      }

      const ld = faqJsonLd(faq);
      expect(ld.mainEntity.map((entry) => entry.name)).toEqual(faq.map((item) => item.q));
      expect(ld.mainEntity.map((entry) => entry.acceptedAnswer.text)).toEqual(faq.map((item) => item.a));
    }
  });

  it("converts names locally: the Berry tool and the kits do not upload the text", () => {
    const tool = readFileSync("src/components/platform-text-tool.tsx", "utf8");
    const kits = readFileSync("src/components/berry-scenario-kits.tsx", "utf8");
    const scenarios = readFileSync("src/lib/berry-scenarios.ts", "utf8");
    const analytics = readFileSync("src/lib/analytics.ts", "utf8");
    for (const source of [tool, kits, scenarios]) {
      expect(source).not.toMatch(/\bfetch\s*\(/);
    }
    expect(analytics).toMatch(/There is no text field/);
    expect(analytics).not.toMatch(/\btext\?:/);
  });
});
