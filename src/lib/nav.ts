// Header navigation, assembled on the server from the page registries.
// The client header receives plain strings via props, so the per-locale
// page copy never enters the client bundle.

import { isLookPage, stylePages } from "./style-pages";
import { platformPages } from "./platform-pages";
import { getUi } from "./ui-strings";
import type { Locale } from "./i18n";

export interface NavLinkItem {
  href: string;
  label: string;
}

export interface NavChildGroup {
  /** Optional small caption above the group. */
  heading?: string;
  items: NavLinkItem[];
}

export interface NavItem {
  label: string;
  /** Dropdown groups when present; a plain link when absent. */
  children?: NavChildGroup[];
  href?: string;
}

const gamingOrder = [
  "pubg-name-generator",
  "free-fire-name-generator",
  "cod-name-generator",
  "roblox-name-generator",
  "fortnite-name-generator",
] as const;

export function buildNav(locale: Locale): NavItem[] {
  const t = getUi(locale);
  const pageLabel = (slug: string): NavLinkItem => {
    const style = stylePages.find((page) => page.slug === slug);
    if (style) return { href: `/${style.slug}/`, label: style.copy[locale].h1 };
    const platform = platformPages.find((page) => page.slug === slug);
    if (platform) return { href: `/${platform.slug}/`, label: platform.copy[locale].h1 };
    throw new Error(`Nav: unknown page slug ${slug}`);
  };

  const items: NavItem[] = [
    {
      label: t.nav.textStyles,
      children: [
        {
          heading: t.tools.letterGenerators,
          items: [
            { href: "/fancy-text-generator/", label: t.tools.fancy },
            ...stylePages.filter((page) => !isLookPage(page)).map((page) => ({ href: `/${page.slug}/`, label: page.copy[locale].h1 })),
          ],
        },
        {
          heading: t.tools.lookGenerators,
          items: stylePages.filter(isLookPage).map((page) => ({ href: `/${page.slug}/`, label: page.copy[locale].h1 })),
        },
      ],
    },
    {
      label: t.nav.nameMaker,
      children: [
        {
          items: [
            { href: "/gaming-name-generator/", label: t.tools.gaming },
            ...gamingOrder.map(pageLabel),
          ],
        },
      ],
    },
    { label: t.nav.symbols, href: "/symbols/" },
  ];

  // /learn/ exists in English only; linking to it from other locales would
  // put a dead entry in every non-English header.
  if (locale === "en") {
    items.push({ label: t.nav.guides, href: "/learn/" });
  }

  return items;
}
