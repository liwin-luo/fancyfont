// English-only guides under /learn/.
//
// Guides answer informational queries the tool pages cannot hold (step-by-step
// how-tos, paste troubleshooting). They exist in English only: no hreflang
// siblings, no locale alternates, and they never enter the per-locale sitemap
// fan-out. Every claim stays inside the boundaries in seo/产品事实底稿.md —
// platform limits are "about", nothing is promised as tested or verified.

import type { FaqItem, RelatedLink } from "@/components/sections";
import { GUIDES_EN } from "@/lib/content/guides-en";

export interface GuideSectionTable {
  head: string[];
  rows: string[][];
}

export interface GuideSeeAlso {
  label: string;
  href: string;
}

export interface GuideSection {
  heading: string;
  paragraphs?: string[];
  steps?: string[];
  bullets?: string[];
  table?: GuideSectionTable;
  seeAlso?: GuideSeeAlso[];
}

export interface GuideDef {
  slug: string;
  /** SERP title, ends with the brand like every other page. */
  title: string;
  h1: string;
  description: string;
  published: string;
  updated: string;
  intro: string[];
  sections: GuideSection[];
  faq: FaqItem[];
  /** Tool/platform page slugs whose English template links back to this guide. */
  appearOn: string[];
  /** Cards in the guide's "Try it" section, linking back into the tools. */
  relatedTools: RelatedLink[];
}

export function guidePath(slug: string): string {
  return `/learn/${slug}/`;
}

export const guides: GuideDef[] = GUIDES_EN;

export function getGuide(slug: string): GuideDef | undefined {
  return guides.find((guide) => guide.slug === slug);
}

/** Guides linked from a tool page's English template. */
export function guidesForPage(pageSlug: string): GuideDef[] {
  return guides.filter((guide) => guide.appearOn.includes(pageSlug));
}
