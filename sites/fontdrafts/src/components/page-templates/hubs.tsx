// 中间层 hub 页模板:首页与叶子页之间的分类目录。
// 分组来自 hubs.ts,页面按 copy[locale] 过滤,空组隐藏;
// 每组底部不放"查看全部"(hub 本身就是全部)。

import Link from "next/link";
import { Breadcrumbs, JsonLd } from "@/components/sections";
import { PlatformChipInner, StyleCardGlyph } from "@/components/illustrations";
import { getUi } from "@/lib/ui-strings";
import { localePath, type Locale } from "@/lib/i18n";
import { PLATFORM_GROUPS, STYLE_GROUPS, hubPath, type HubSlug } from "@/lib/hubs";
import { platformPages, type PlatformPageDef } from "@/lib/platform-pages";
import { breadcrumbJsonLd } from "@/lib/schema";
import { stylePages, type StylePageDef } from "@/lib/style-pages";

const ACCENT = ["bg-pop-yellow", "bg-pop-pink text-paper", "bg-pop-blue text-paper", "bg-pop-green text-paper"];

function HubBreadcrumbs({ locale, slug }: { locale: Locale; slug: HubSlug }) {
  const ui = getUi(locale);
  const label = slug === "styles" ? ui.nav.styles : ui.nav.platforms;
  const items = [
    { name: ui.breadcrumb.home, href: localePath(locale, "/") },
    { name: label, href: hubPath(locale, slug) },
  ];
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(items.map(({ name, href }) => ({ name, path: href })))}
      />
      <Breadcrumbs items={items} />
    </>
  );
}

export function StylesHubPage({ locale }: { locale: Locale }) {
  const ui = getUi(locale);
  const c = ui.hub.styles;
  const lp = (slug: string) => localePath(locale, `/${slug}/`);
  const groups = STYLE_GROUPS.map((group) => ({
    ...group,
    pages: group.slugs
      .map((slug) => stylePages.find((page) => page.slug === slug))
      .filter((page): page is StylePageDef => Boolean(page?.copy[locale])),
  })).filter((group) => group.pages.length > 0);
  // 符号库/空白字符是迁移工具页,首版仅英文。
  const tools = locale === "en" ? [{ href: "/symbols/", name: "Symbols" }, { href: "/blank-space/", name: "Blank space" }] : [];

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <HubBreadcrumbs locale={locale} slug="styles" />
      <header className="mt-2">
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">{c.h1}</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">{c.intro}</p>
      </header>

      {groups.map((group, groupIndex) => (
        <section key={group.key} aria-labelledby={`group-${group.key}`} className="mt-10">
          <h2 id={`group-${group.key}`} className="text-xl font-black">
            {ui.hub.styleGroups[group.key]}
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {group.pages.map((page, index) => {
              const copy = page.copy[locale]!;
              return (
                <Link
                  key={page.slug}
                  href={lp(page.slug)}
                  className="card-pop group block p-4 transition-all duration-100 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-pop-sm"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className={`sticker -rotate-2 text-xs ${ACCENT[(groupIndex + index) % 4]}`}>{copy.navName}</span>
                    <StyleCardGlyph page={page} />
                  </div>
                  <p className="mt-2 font-black group-hover:text-pop-pink">{copy.h1}</p>
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-ink-soft">{copy.description}</p>
                </Link>
              );
            })}
          </div>
        </section>
      ))}

      {tools.length > 0 ? (
        <section aria-labelledby="hub-tools" className="mt-10">
          <h2 id="hub-tools" className="text-xl font-black">More tools</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="card-pop px-4 py-3 text-sm font-black transition-all duration-100 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-pop-sm"
              >
                {tool.name} →
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}

export function PlatformsHubPage({ locale }: { locale: Locale }) {
  const ui = getUi(locale);
  const c = ui.hub.platforms;
  const lp = (slug: string) => localePath(locale, `/${slug}/`);
  const groups = PLATFORM_GROUPS.map((group) => ({
    ...group,
    pages: group.slugs
      .map((slug) => platformPages.find((page) => page.slug === slug))
      .filter((page): page is PlatformPageDef => Boolean(page?.copy[locale])),
  })).filter((group) => group.pages.length > 0);

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <HubBreadcrumbs locale={locale} slug="platforms" />
      <header className="mt-2">
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">{c.h1}</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">{c.intro}</p>
      </header>

      {groups.map((group) => (
        <section key={group.key} aria-labelledby={`pgroup-${group.key}`} className="mt-10">
          <h2 id={`pgroup-${group.key}`} className="text-xl font-black">
            {ui.hub.platformGroups[group.key]}
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {group.pages.map((page) => {
              const copy = page.copy[locale]!;
              return (
                <Link
                  key={page.slug}
                  href={lp(page.slug)}
                  className="card-pop group block p-4 transition-all duration-100 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-pop-sm"
                >
                  <PlatformChipInner platform={copy.platform} />
                  <p className="mt-2 font-black group-hover:text-pop-blue">{copy.navName}</p>
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-ink-soft">{copy.description}</p>
                </Link>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
