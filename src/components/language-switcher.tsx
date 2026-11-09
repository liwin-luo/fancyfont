"use client";

// 语言切换：链接在首屏 HTML 里就是普通 <a href>，不依赖 useEffect。
// 有对等翻译时链到该页；没有则链到该语言首页。hreflang 仍只由 metadata 声明真实翻译。

import { usePathname } from "next/navigation";
import { NavDropdown } from "@/components/nav-dropdown";
import type { Locale } from "@/lib/i18n";
import { resolveLanguageLinks, type LanguageIndex } from "@/lib/locale-nav-resolve";

const GLOBE = (
  <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="10" cy="10" r="8" />
    <path d="M2 10 h16 M10 2 c 3 2.5 3 13.5 0 16 M10 2 c -3 2.5 -3 13.5 0 16" />
  </svg>
);

export function LanguageSwitcher({
  locale,
  label,
  index,
}: {
  locale: Locale;
  label: string;
  index: LanguageIndex;
}) {
  const pathname = usePathname() || "/";
  const links = resolveLanguageLinks(pathname, index);

  return (
    <NavDropdown
      name="site-nav"
      summaryClassName="flex h-9 cursor-pointer list-none items-center gap-1.5 rounded-lg border-2 border-ink bg-surface px-2 text-xs font-black shadow-pop-sm [&::-webkit-details-marker]:hidden"
      summaryAriaLabel={label}
      summary={
        <>
          {GLOBE}
          <span className="hidden sm:inline">{links.find((link) => link.locale === locale)?.shortLabel}</span>
        </>
      }
      panelClassName="absolute right-0 z-50 mt-1 w-48 rounded-xl border-2 border-ink bg-surface p-1.5 shadow-pop-lg"
    >
      <ul aria-label={label}>
        {links.map((link) => (
          <li key={link.locale}>
            <a
              href={link.href}
              hrefLang={link.hrefLang}
              lang={link.lang}
              aria-current={link.current ? "page" : undefined}
              className={`flex items-center justify-between gap-2 rounded-lg px-2.5 py-1.5 text-sm font-bold ${
                link.current ? "bg-pop-yellow" : "hover:bg-paper"
              }`}
            >
              <span>{link.shortLabel}</span>
              <span className="text-xs font-bold text-ink-soft">{link.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </NavDropdown>
  );
}
