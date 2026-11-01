import { describe, expect, it } from "vitest";
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
});
