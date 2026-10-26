"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  locales,
  localeNames,
  localeShortLabel,
  localeFromLanguages,
  localeFromPathname,
  localePath,
  type Locale,
} from "@/lib/i18n";
import { getUi } from "@/lib/ui-strings";

/** Keep in sync with the progress-bar animation duration below. */
const DISMISS_MS = 6000;
const STORAGE_KEY = "fancyfont-locale-suggest";

/**
 * Dropdown that swaps only the locale prefix. A mismatch with the browser
 * language shows a suggestion; it never redirects on its own.
 */
export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname() ?? "/";
  const t = getUi(locale);
  const current = localeFromPathname(pathname);
  const pathWithoutLocale =
    current === "en" ? pathname : pathname.replace(`/${current}`, "") || "/";
  const [suggest, setSuggest] = useState<Locale | null>(null);

  useEffect(() => {
    const list = navigator.languages?.length
      ? navigator.languages
      : navigator.language
        ? [navigator.language]
        : [];
    const system = localeFromLanguages(list);
    if (!system || system === locale) return;
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") return;
    } catch {
      // Private mode: still show for this visit.
    }
    setSuggest(system);
    const id = window.setTimeout(() => {
      setSuggest(null);
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        // Ignore quota / private-mode failures.
      }
    }, DISMISS_MS);
    return () => window.clearTimeout(id);
  }, [locale]);

  const suggested = suggest ? getUi(suggest) : null;

  return (
    <div className="relative">
      <details className="group relative">
        <summary
          aria-label={`${t.languageLabel}: ${localeNames[locale]}`}
          className="flex h-9 cursor-pointer list-none items-center gap-1.5 rounded-full border border-line bg-white pr-2.5 pl-3 text-sm font-semibold text-ink-900 transition-colors hover:border-brand-300 hover:bg-brand-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 [&::-webkit-details-marker]:hidden"
        >
          {localeNames[locale]}
          <svg
            aria-hidden
            viewBox="0 0 12 12"
            className="size-3 text-ink-500 transition-transform group-open:rotate-180"
            fill="none"
          >
            <path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </summary>
        <div className="absolute top-full right-0 z-50 mt-1.5 min-w-48 rounded-2xl border border-line bg-white p-1 shadow-lg">
          {locales.map((code) => {
            const active = code === locale;
            return (
              <Link
                key={code}
                href={localePath(code, pathWithoutLocale)}
                hrefLang={code}
                aria-current={active ? "page" : undefined}
                className={`flex items-center gap-2 rounded-xl px-2.5 py-2 text-sm transition-colors ${
                  active
                    ? "bg-brand-50 font-semibold text-brand-700"
                    : "text-ink-700 hover:bg-brand-50 hover:text-brand-700"
                }`}
              >
                <span className={`w-8 text-xs font-bold tracking-wide ${active ? "text-brand-600" : "text-ink-500"}`}>
                  {localeShortLabel[code]}
                </span>
                {localeNames[code]}
              </Link>
            );
          })}
        </div>
      </details>

      {suggest && suggested && (
        <div
          role="status"
          className="absolute top-full right-0 z-40 mt-2 w-64 overflow-hidden rounded-2xl border border-line bg-white shadow-lg"
        >
          <div className="px-3 pt-3 pb-2.5">
            <p className="text-sm text-ink-700">
              {suggested.localeSuggest.message.replace("{name}", localeNames[suggest])}
            </p>
            <Link
              href={localePath(suggest, pathWithoutLocale)}
              onClick={() => {
                try {
                  sessionStorage.setItem(STORAGE_KEY, "1");
                } catch {
                  // Ignore quota / private-mode failures.
                }
              }}
              className="mt-2 inline-flex h-8 items-center rounded-lg bg-brand-600 px-3 text-xs font-semibold text-white hover:bg-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
            >
              {suggested.localeSuggest.action}
            </Link>
          </div>
          <div className="h-1.5 bg-brand-100" aria-hidden>
            <div
              className="h-full origin-left bg-brand-600"
              style={{ animation: `locale-suggest-bar ${DISMISS_MS}ms linear forwards` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
