import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { faqJsonLd, splitLinkedText } from "@/components/sections";
import { buildCodScenario, COD_KIT_TEMPLATES, COD_SOURCES } from "@/lib/cod-scenarios";
import { buildCoquetteScenario, COQUETTE_KIT_TEMPLATES } from "@/lib/coquette-scenarios";
import { codExtra, codPageFaq } from "@/lib/content/cod-extra";
import { coquetteExtra, coquettePageFaq } from "@/lib/content/coquette-extra";
import { ROBLOX_ACCOUNT_SOURCES, robloxExtra, robloxPageFaq } from "@/lib/content/roblox-extra";
import { locales, type Locale } from "@/lib/i18n";
import { getPlatformPage } from "@/lib/platform-pages";
import { getStylePage } from "@/lib/style-pages";

const NOT_UPLOADED: Record<Locale, string> = {
  en: "does not upload",
  es: "no se sube",
  "pt-br": "não é enviado",
  "zh-cn": "不会上传",
  id: "tidak diunggah",
};

function urlsIn(text: string): string[] {
  return splitLinkedText(text)
    .filter((part) => part.href)
    .map((part) => part.href as string);
}

describe("COD, Coquette, and Roblox info-gain modules", () => {
  it("merges FAQ without duplicate questions and matches JSON-LD", () => {
    const cod = getPlatformPage("en", "cod-name-generator")!;
    const roblox = getPlatformPage("en", "roblox-name-generator")!;
    const coquette = getStylePage("en", "coquette-font-generator")!;
    for (const locale of locales) {
      const codFaq = codPageFaq(locale, cod.copy[locale].faq);
      const robloxFaq = robloxPageFaq(locale, roblox.copy[locale].faq);
      const coquetteFaq = coquettePageFaq(locale, coquette.copy[locale].faq);
      for (const faq of [codFaq, robloxFaq, coquetteFaq]) {
        expect(new Set(faq.map((item) => item.q)).size).toBe(faq.length);
        const ld = faqJsonLd(faq);
        expect(ld.mainEntity.map((entry) => entry.name)).toEqual(faq.map((item) => item.q));
        expect(ld.mainEntity.map((entry) => entry.acceptedAnswer.text)).toEqual(faq.map((item) => item.a));
      }
      expect(codFaq.length).toBe(cod.copy[locale].faq.length + codExtra[locale].faq.length);
      expect(robloxFaq.length).toBe(roblox.copy[locale].faq.length + robloxExtra[locale].faq.length);
      expect(coquetteFaq.length).toBe(coquette.copy[locale].faq.length);
    }
  });

  it("cites the checked Activision facts and refuses an official cap of 16", () => {
    const page = getPlatformPage("en", "cod-name-generator")!;
    const allowed = new Set<string>(Object.values(COD_SOURCES));
    const denial: Record<Locale, string> = {
      en: "do not state a hard cap of 16",
      es: "no fijan un tope oficial de 16",
      "pt-br": "não fixam um teto oficial de 16",
      "zh-cn": "没有写死 16",
      id: "tidak menetapkan batas resmi 16",
    };
    for (const locale of locales) {
      const faq = codPageFaq(locale, page.copy[locale].faq);
      const visible = [...faq.map((item) => item.a), codExtra[locale].safety.body].join("\n");
      expect(visible).toContain(COD_SOURCES.mobile);
      expect(visible).toContain(COD_SOURCES.activisionId);
      expect(visible).toContain("500");
      expect(visible).toMatch(/3|三|tiga/);
      expect(visible).toMatch(/6|六|enam/);
      expect(visible).toContain(denial[locale]);
      expect(visible).not.toMatch(/official limit of 16/i);
      expect(codExtra[locale].safety.body).toContain(NOT_UPLOADED[locale]);
      expect(splitLinkedText(visible).map((part) => part.value).join("")).toBe(visible);
      for (const href of urlsIn(visible)) expect(allowed.has(href), href).toBe(true);
    }
    const en = codPageFaq("en", page.copy.en.faq).map((item) => item.a).join("\n");
    expect(en).toMatch(/three days/);
    expect(en).toMatch(/six months/);
    expect(en).toMatch(/\btwo\b/);
  });

  it("cites Roblox Help for the 7-day rule and does not pretend Help stated 3–20", () => {
    const page = getPlatformPage("en", "roblox-name-generator")!;
    const allowed = new Set<string>(Object.values(ROBLOX_ACCOUNT_SOURCES));
    for (const locale of locales) {
      const extra = robloxExtra[locale];
      const faq = robloxPageFaq(locale, page.copy[locale].faq);
      const visible = [...faq.map((item) => `${item.q}\n${item.a}`), extra.safety.body].join("\n");
      expect(visible).toContain(ROBLOX_ACCOUNT_SOURCES.displayNameHelp);
      expect(visible).toContain("7");
      expect(extra.safety.body).toContain(ROBLOX_ACCOUNT_SOURCES.communityStandards);
      expect(extra.safety.body).toContain(ROBLOX_ACCOUNT_SOURCES.safety);
      expect(visible).not.toMatch(/3[–-]20/);
      expect(visible).not.toContain("####");
      expect(extra.berryLabel.toLowerCase()).toContain("berry");
      expect(splitLinkedText(visible).map((part) => part.value).join("")).toBe(visible);
      for (const href of urlsIn(visible)) expect(allowed.has(href), href).toBe(true);
    }
  });

  it("builds coquette rows from the typed name, including a plain backup, and lists no charset", () => {
    const page = getStylePage("pt-br", "coquette-font-generator")!;
    const answer = page.copy["pt-br"].faq.map((item) => item.a).join("\n");
    expect(answer).toContain("nome de exibição");
    expect(answer).toContain("bio");
    expect(answer).toContain("não publica uma lista completa");
    for (const locale of locales) {
      const kits = coquetteExtra[locale].kits.items;
      expect(kits.map((item) => item.id)).toEqual(["bio", "tiktok", "caption", "discord"]);
      for (const item of kits) {
        const pieces = buildCoquetteScenario("Mia", item.template);
        expect(pieces.some((piece) => piece.key === "plain" && piece.text === "Mia")).toBe(true);
        for (const piece of pieces) {
          if (piece.key !== "plain") expect(piece.text.length).toBeGreaterThan("Mia".length);
        }
      }
      expect(buildCoquetteScenario("Mia", COQUETTE_KIT_TEMPLATES.caption).some((piece) => piece.text.includes("𐙚"))).toBe(
        true,
      );
      expect(buildCoquetteScenario("Mia", COQUETTE_KIT_TEMPLATES.bio).some((piece) => piece.text.includes("🎀"))).toBe(
        true,
      );
      const visible = coquetteExtra[locale].safety.body;
      expect(urlsIn(visible)).toEqual([]);
      expect(splitLinkedText(visible).map((part) => part.value).join("")).toBe(visible);
    }
    const clan = buildCodScenario("Nova", COD_KIT_TEMPLATES.clan);
    expect(clan.find((piece) => piece.key === "plain")!.text).toBe("Nova");
    expect(clan.find((piece) => piece.key === "clan")!.text).toBe("Nov");
    expect(clan.find((piece) => piece.key === "player")!.text.startsWith("「")).toBe(true);
  });

  it("converts names locally and does not fetch the typed text", () => {
    const sources = [
      "src/components/cod-scenario-kits.tsx",
      "src/components/coquette-scenario-kits.tsx",
      "src/lib/cod-scenarios.ts",
      "src/lib/coquette-scenarios.ts",
    ];
    for (const file of sources) {
      expect(readFileSync(file, "utf8")).not.toMatch(/\bfetch\s*\(/);
    }
  });
});
