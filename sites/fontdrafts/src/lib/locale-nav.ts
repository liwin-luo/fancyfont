// 语言切换索引：服务端按注册表生成，只把 slug→语言 传给客户端。
// 不把指南正文或页面文案打进语言切换器的客户端包。

import { locales, type Locale } from "./i18n";
import { guidesFor } from "./guides";
import { platformPageLocales, platformPages } from "./platform-pages";
import { stylePageLocales, stylePages } from "./style-pages";
import type { LanguageIndex } from "./locale-nav-resolve";

function buildLanguageIndex(): LanguageIndex {
  const slugs: Record<string, Locale[]> = {};
  for (const page of stylePages) {
    const available = stylePageLocales(page);
    if (available.length > 0) slugs[page.slug] = available;
  }
  for (const page of platformPages) {
    const available = platformPageLocales(page);
    if (available.length > 0) slugs[page.slug] = available;
  }

  const guides: Record<string, Locale[]> = {};
  for (const locale of locales) {
    for (const guide of guidesFor(locale)) {
      const list = guides[guide.slug] ?? [];
      list.push(locale);
      guides[guide.slug] = list;
    }
  }

  return {
    slugs,
    guides,
    shared: ["/about/", "/contact/", "/privacy/", "/terms/", "/styles/", "/platforms/"],
    enOnly: ["/symbols/", "/blank-space/"],
  };
}

export const languageIndex: LanguageIndex = buildLanguageIndex();
