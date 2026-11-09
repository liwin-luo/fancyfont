// 页头导航:locale 决定标签语言与链接前缀。服务端组装,客户端只收纯字符串。

import Link from "next/link";
import { localePrefix, type Locale } from "@/lib/i18n";
import { languageIndex } from "@/lib/locale-nav";
import type { NavItem } from "@/lib/nav";
import { getUi } from "@/lib/ui-strings";
import { LanguageSwitcher } from "@/components/language-switcher";
import { NavDropdown } from "@/components/nav-dropdown";
import { siteName } from "@/lib/site";

function localeHome(locale: Locale): string {
  const prefix = localePrefix[locale];
  return prefix === "" ? "/" : `${prefix}/`;
}

export function Header({ locale, nav }: { locale: Locale; nav: NavItem[] }) {
  const ui = getUi(locale);
  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-paper">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href={localeHome(locale)}
          className="group flex items-center gap-2"
          aria-label={`${siteName} — ${ui.breadcrumb.home}`}
        >
          <span className="flex h-8 w-8 -rotate-3 items-center justify-center rounded-lg border-2 border-ink bg-pop-yellow text-sm font-black shadow-pop-sm transition-transform group-hover:rotate-3">
            Aa
          </span>
          <span className="text-lg font-black tracking-tight">{siteName}</span>
        </Link>

        <nav aria-label={ui.nav.styles} className="hidden items-center gap-1 md:flex">
          {nav.map((item) =>
            item.children ? (
              <NavDropdown
                key={item.label}
                name="site-nav"
                hover
                summaryClassName="flex h-9 cursor-pointer list-none items-center gap-1 rounded-lg border-2 border-transparent px-3 text-sm font-bold hover:border-ink hover:bg-surface [&::-webkit-details-marker]:hidden"
                summary={
                  <>
                    {item.label}
                    <span aria-hidden="true" className="text-xs transition-transform group-open:rotate-180">
                      ▾
                    </span>
                  </>
                }
                panelClassName="absolute right-0 z-50 mt-1 w-64 rounded-xl border-2 border-ink bg-surface p-2 shadow-pop-lg"
              >
                {item.children.map((group) => (
                  <div key={group.heading ?? "main"}>
                    {group.heading ? (
                      <p className="px-2 pt-2 pb-1 text-xs font-bold text-ink-soft">{group.heading}</p>
                    ) : null}
                    <ul>
                      {group.items.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block rounded-lg px-2 py-1.5 text-sm font-bold hover:bg-pop-yellow"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </NavDropdown>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                className="flex h-9 items-center rounded-lg border-2 border-transparent px-3 text-sm font-bold hover:border-ink hover:bg-surface"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        {/* 语言切换器:桌面在导航尾部,移动端在汉堡菜单旁 */}
        <div className="flex items-center gap-1.5">
          <LanguageSwitcher locale={locale} label={ui.nav.language} index={languageIndex} />

          {/* 移动端菜单:<details> 语义 + 同款关闭逻辑;分组双列栅格,限高滚动 */}
          <NavDropdown
            name="site-nav"
            summaryClassName="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-lg border-2 border-ink bg-surface shadow-pop-sm [&::-webkit-details-marker]:hidden"
            summaryAriaLabel={ui.nav.menu}
            summary={
              <span aria-hidden="true" className="text-base font-black transition-transform group-open:rotate-90">
                ☰
              </span>
            }
            panelClassName="absolute right-0 z-50 mt-2 w-72 rounded-xl border-2 border-ink bg-surface p-2 shadow-pop-lg max-h-[calc(100dvh-4.5rem)] overflow-y-auto"
          >
            {nav.map((item) => (
              <div key={item.label}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="block rounded-lg px-2 py-1.5 text-sm font-bold hover:bg-pop-yellow"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <p className="px-2 pt-2 pb-1 text-xs font-bold text-ink-soft">{item.label}</p>
                )}
                {item.children?.map((group) => (
                  <div key={group.heading ?? item.label}>
                    {item.children!.length > 1 && group.heading ? (
                      <p className="px-2 pt-2 pb-1 text-xs font-bold text-ink-soft">{group.heading}</p>
                    ) : null}
                    <div className="grid grid-cols-2 gap-x-1">
                      {group.items.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-lg px-2 py-1.5 text-sm font-bold hover:bg-pop-yellow"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </NavDropdown>
        </div>
      </div>
    </header>
  );
}
