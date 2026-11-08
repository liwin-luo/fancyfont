// 页头导航:按 locale 取标签与前缀,只收该语言可用的页面。

import { localePath, type Locale } from "./i18n";
import { guideBase } from "./guides";
import { FEATURED_PLATFORM_SLUGS, FEATURED_STYLE_SLUGS, hubPath } from "./hubs";
import { platformPages } from "./platform-pages";
import { getStylePage, isCjkOnlyPage, stylePages } from "./style-pages";
import { getUi } from "./ui-strings";

export interface NavLinkItem {
  href: string;
  label: string;
}

export interface NavChildGroup {
  /** 组上方的小标题。 */
  heading?: string;
  items: NavLinkItem[];
}

export interface NavItem {
  label: string;
  /** 存在时渲染下拉组;不存在时是普通链接。 */
  children?: NavChildGroup[];
  href?: string;
}

export function buildNav(locale: Locale): NavItem[] {
  const ui = getUi(locale);
  const lp = (slug: string) => localePath(locale, `/${slug}/`);

  const styleLink = (slug: string): NavLinkItem => {
    const def = getStylePage(slug);
    const copy = def?.copy[locale];
    return { href: lp(slug), label: copy ? copy.navName : slug };
  };

  // 下拉只放精选 + hub 入口,完整目录在 /styles/ /platforms/ 中间层页。
  const featuredStyles = FEATURED_STYLE_SLUGS.filter((slug) => getStylePage(slug)?.copy[locale]);
  const cjkStyles = stylePages.filter((page) => page.copy[locale] && isCjkOnlyPage(page));
  const featuredPlatforms = FEATURED_PLATFORM_SLUGS[locale].filter(
    (slug) => platformPages.find((page) => page.slug === slug)?.copy[locale],
  );

  const items: NavItem[] = [
    {
      label: ui.nav.styles,
      children: [
        {
          heading: ui.nav.stylesHeading,
          items: [
            ...featuredStyles.map((slug) => styleLink(slug)),
            { href: hubPath(locale, "styles"), label: ui.nav.allStyles },
          ],
        },
        ...(cjkStyles.length > 0
          ? [
              {
                heading: ui.nav.cjkHeading,
                items: cjkStyles.map((page) => styleLink(page.slug)),
              },
            ]
          : []),
      ],
    },
    {
      label: ui.nav.platforms,
      children: [
        {
          items: [
            ...featuredPlatforms.map((slug) => {
              const page = platformPages.find((entry) => entry.slug === slug)!;
              return { href: lp(slug), label: page.copy[locale]!.navName };
            }),
            { href: hubPath(locale, "platforms"), label: ui.nav.allPlatforms },
          ],
        },
      ],
    },
    { label: ui.nav.guides, href: guideBase(locale) + "/" },
  ];

  return items;
}
