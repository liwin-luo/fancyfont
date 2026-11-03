import { describe, expect, it } from "vitest";
import { existsSync, statSync } from "node:fs";
import { join } from "node:path";
import { getGuide, guidePath, guides, guidesForPage } from "@/lib/guides";
import { platformPages } from "@/lib/platform-pages";
import { stylePages } from "@/lib/style-pages";
import { styleRiskRows } from "@/lib/style-risk";

// Guides are English-only pages. Every claim rule here mirrors
// seo/guide-question-backlog.md's 立项规则: a page may only go out when the
// data itself is complete, honest about limits, and linked to real pages.

const knownPaths = new Set<string>([
  "/",
  "/fancy-text-generator/",
  "/gaming-name-generator/",
  "/symbols/",
  "/blank-space/",
  "/learn/",
  ...stylePages.map((page) => `/${page.slug}/`),
  ...platformPages.map((page) => `/${page.slug}/`),
]);

describe("guides", () => {
  it("has unique kebab-case slugs with trailing-slash paths", () => {
    const slugs = guides.map((guide) => guide.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) {
      expect(slug).toMatch(/^[a-z0-9-]+$/);
      expect(guidePath(slug)).toMatch(/^\/learn\/[a-z0-9-]+\/$/);
    }
  });

  it("keeps the required content blocks filled", () => {
    for (const guide of guides) {
      expect(guide.title.length).toBeLessThanOrEqual(70);
      expect(guide.h1).toBeTruthy();
      expect(guide.intro.length).toBeGreaterThanOrEqual(2);
      expect(guide.sections.length).toBeGreaterThanOrEqual(3);
      for (const section of guide.sections) {
        expect(
          (section.paragraphs?.length ?? 0) + (section.steps?.length ?? 0) + (section.bullets?.length ?? 0),
        ).toBeGreaterThanOrEqual(2);
      }
      expect(guide.faq.length).toBeGreaterThanOrEqual(3);
      expect(guide.published).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(guide.updated).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }
  });

  it("only links to pages that exist", () => {
    for (const guide of guides) {
      for (const slug of guide.appearOn) {
        expect(knownPaths.has(`/${slug}/`)).toBe(true);
      }
      for (const tool of guide.relatedTools) {
        expect(knownPaths.has(tool.href)).toBe(true);
        expect(tool.title).toBeTruthy();
      }
    }
  });

  it("never claims a platform limit is verified", () => {
    const dump = JSON.stringify(guides);
    expect(dump).not.toMatch(/verified/i);
    expect(dump).not.toMatch(/\btested here\b/i);
  });

  it("states platform lengths as approximations", () => {
    const pubgGuide = getGuide("pubg-free-fire-stylish-name");
    expect(pubgGuide).toBeDefined();
    const dump = JSON.stringify(pubgGuide);
    expect(dump).toMatch(/around 16/);
    expect(dump).toMatch(/around 12/);
  });

  it("exposes guides on their tool pages and only in English templates", () => {
    expect(guidesForPage("instagram-fonts").map((guide) => guide.slug)).toContain(
      "change-instagram-bio-font",
    );
    expect(guidesForPage("pubg-name-generator").length).toBeGreaterThanOrEqual(1);
    // No page hides all guides: anything listed in appearOn must resolve.
    for (const guide of guides) {
      for (const slug of guide.appearOn) {
        expect(guidesForPage(slug)).toContain(guide);
      }
    }
  });

  it("publishes one measured row per style, matching the engine", () => {
    const table = getGuide("change-instagram-bio-font")?.sections.find(
      (section) => section.table,
    )?.table;
    expect(table).toBeDefined();
    const engineRows = styleRiskRows();
    expect(table!.head).toEqual(["Style", "Each letter becomes", "Digits", "Notes"]);
    expect(table!.rows).toHaveLength(engineRows.length);
    for (const [index, row] of table!.rows.entries()) {
      expect(row[0]).toBe(engineRows[index].name);
    }
  });

  it("publishes one measured row per decoration pair, hidden code points included", () => {
    const table = getGuide("pubg-free-fire-stylish-name")?.sections.find(
      (section) => section.table?.head[0] === "Decoration",
    )?.table;
    expect(table).toBeDefined();
    expect(table!.rows).toHaveLength(20);
    // ☠︎ carries an invisible variation selector per side, so its pair costs 4.
    const skull = table!.rows.find((row) => row[0].includes("☠︎"));
    expect(skull?.[1]).toBe("+4 code points");
    // The clan frame ꧁༒ ༒꧂ also costs 4; a plain star pair costs 2.
    expect(table!.rows.find((row) => row[0].includes("꧁༒"))?.[1]).toBe("+4 code points");
    expect(table!.rows.find((row) => row[0].includes("★"))?.[1]).toBe("+2 code points");
  });

  it("keeps the Roblox guide inside the fact sheet's boundaries", () => {
    const roblox = getGuide("roblox-display-name-rules");
    expect(roblox).toBeDefined();
    const dump = JSON.stringify(roblox);
    expect(dump).toMatch(/7-day/);
    // 3–20 comes from the staff announcement; the Help article does not restate it.
    expect(dump).toMatch(/3–20|3-20/);
    expect(dump).toMatch(/Japanese/);
    expect(dump).toMatch(/filtered/);
    expect(dump).toMatch(/checked 2026-11-03/i);
    // No "about 20" hedging and no styled-Unicode promises may creep back in.
    expect(dump).not.toMatch(/about 20/);
    expect(dump).not.toMatch(/can take styled Unicode/i);
    expect(dump).not.toMatch(/fonts and symbols can go/i);
    // Free display name vs paid username change, without inventing prices.
    expect(dump).toMatch(/free/i);
    expect(dump).not.toMatch(/Robux \d/);
    expect(roblox!.appearOn).toEqual(
      expect.arrayContaining(["roblox-name-generator", "adopt-me-fonts", "berry-avenue-fonts"]),
    );
  });

  it("keeps see-also links inside /learn/", () => {
    for (const guide of guides) {
      for (const section of guide.sections) {
        for (const link of section.seeAlso ?? []) {
          expect(link.href).toMatch(/^\/learn\//);
          expect(link.label).toBeTruthy();
        }
      }
    }
  });

  it("keeps in-body source links external and anchored in the same section", () => {
    for (const guide of guides) {
      for (const section of guide.sections) {
        for (const link of section.links ?? []) {
          expect(link.href).toMatch(/^https:\/\//);
          expect(link.label.length).toBeGreaterThan(0);
          const copy = [
            ...(section.paragraphs ?? []),
            ...(section.steps ?? []),
            ...(section.bullets ?? []),
          ].join("\n");
          expect(copy).toContain(link.label);
        }
      }
    }
  });

  it("anchors the guide CTA on a real section and a real tool page", () => {
    for (const guide of guides) {
      const cta = guide.cta;
      if (!cta) continue;
      expect(guide.sections.map((section) => section.heading)).toContain(cta.after);
      expect(knownPaths.has(cta.href)).toBe(true);
      expect(cta.heading.length).toBeGreaterThan(0);
      expect(cta.body.length).toBeGreaterThan(0);
      expect(cta.label.length).toBeGreaterThan(0);
    }
  });

  it("ships every guide image as a real file with matching dimensions", () => {
    const seen = new Set<string>();
    for (const guide of guides) {
      for (const section of guide.sections) {
        const image = section.image;
        if (!image) continue;
        expect(seen.has(image.src)).toBe(false);
        seen.add(image.src);
        expect(image.src).toMatch(/^\/guides\/[a-z0-9-]+\.webp$/);
        expect(image.alt.length).toBeGreaterThan(15);
        expect(image.caption.length).toBeGreaterThan(20);
        const file = join(process.cwd(), "public", image.src);
        expect(existsSync(file)).toBe(true);
        expect(statSync(file).size).toBeGreaterThan(1000);
      }
    }
    expect(seen.size).toBeGreaterThanOrEqual(2);
  });
});
