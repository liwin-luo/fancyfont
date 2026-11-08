"use client";

// 语言切换器:菜单项来自页面 <head> 里的 hreflang alternates——
// 我们保证 hreflang 只指向真实存在的语言页,所以切换永远不会 404
// (如中文独有的花式昵称页,切换器只显示中文;指南文章按 slug
// 跨语言对应,同样只列存在的语言)。
// 页面没有 alternates 时(404、语言独有文章),兜底到各语言的
// 指南索引(当前在指南区时)或各语言首页,保证任何页面都能切换。

import { useEffect, useState } from "react";
import {
  hreflang,
  localeNames,
  localePath,
  localePrefix,
  localeShortLabel,
  locales,
  type Locale,
} from "@/lib/i18n";
import { NavDropdown } from "@/components/nav-dropdown";

// 与 lib/guides.ts 的 GUIDE_BASE 一致;为避免把全部指南内容打进客户端包,这里单独保留。
const GUIDE_BASE: Record<Locale, string> = {
  en: "/learn",
  "zh-cn": "/zhinan",
  es: "/guia",
  "pt-br": "/guia",
  de: "/anleitung",
};

const GLOBE = (
  <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="10" cy="10" r="8" />
    <path d="M2 10 h16 M10 2 c 3 2.5 3 13.5 0 16 M10 2 c -3 2.5 -3 13.5 0 16" />
  </svg>
);

export function LanguageSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const [alts, setAlts] = useState<{ locale: Locale; href: string }[]>([]);

  useEffect(() => {
    const links = Array.from(
      document.querySelectorAll<HTMLLinkElement>('link[rel="alternate"][hreflang]'),
    );
    const byLocale = new Map<Locale, string>();
    for (const link of links) {
      const hreflangValue = link.getAttribute("hreflang")?.toLowerCase();
      const match = locales.find((l) => hreflang[l].toLowerCase() === hreflangValue);
      const href = link.getAttribute("href");
      if (match && href) {
        // hreflang 是绝对生产域名;只取其路径,拼回当前站点 origin,
        // 本地预览/自有域名下切换都留在当前环境,只换语言路径。
        const parsed = new URL(href);
        byLocale.set(match, parsed.pathname + parsed.search);
      }
    }
    if (byLocale.size > 0) {
      setAlts([...byLocale.entries()].map(([l, href]) => ({ locale: l, href })));
      return;
    }
    // 兜底:去掉当前语言前缀后判断是否在指南区,是则退到各语言指南索引。
    const prefix = localePrefix[locale];
    const stripped = prefix !== "" && window.location.pathname.startsWith(prefix)
      ? window.location.pathname.slice(prefix.length)
      : window.location.pathname;
    const inGuides = locales.some((l) => stripped.startsWith(`${GUIDE_BASE[l]}/`) || stripped === GUIDE_BASE[l]);
    setAlts(
      locales.map((l) => ({
        locale: l,
        href: window.location.origin + (inGuides ? localePath(l, `${GUIDE_BASE[l]}/`) : localePath(l, "/")),
      })),
    );
  }, [locale]);

  return (
    <NavDropdown
      name="site-nav"
      summaryClassName="flex h-9 cursor-pointer list-none items-center gap-1.5 rounded-lg border-2 border-ink bg-surface px-2 text-xs font-black shadow-pop-sm [&::-webkit-details-marker]:hidden"
      summaryAriaLabel={label}
      summary={
        <>
          {GLOBE}
          <span className="hidden sm:inline">{localeShortLabel[locale]}</span>
        </>
      }
      panelClassName="absolute right-0 z-50 mt-1 w-44 rounded-xl border-2 border-ink bg-surface p-1.5 shadow-pop-lg"
    >
      {locales.map((l) => {
        const alt = alts.find((a) => a.locale === l);
        if (!alt) return null;
        const isCurrent = l === locale;
        return (
          <a
            key={l}
            href={alt.href}
            hrefLang={hreflang[l]}
            aria-current={isCurrent ? "true" : undefined}
            className={`flex items-center justify-between rounded-lg px-2.5 py-1.5 text-sm font-bold ${
              isCurrent ? "bg-pop-yellow" : "hover:bg-paper"
            }`}
          >
            <span>{localeShortLabel[l]}</span>
            <span className="text-xs text-ink-soft">{localeNames[l]}</span>
          </a>
        );
      })}
    </NavDropdown>
  );
}
