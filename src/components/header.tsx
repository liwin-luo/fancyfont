"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PixelStar } from "@/components/pixel-star";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useDismiss } from "@/components/use-dismiss";
import { getUi } from "@/lib/ui-strings";
import { localeFromPathname, localePath, type Locale } from "@/lib/i18n";
import { siteName } from "@/lib/site";
import type { NavItem } from "@/lib/nav";

/** Grace period before a hover-opened menu closes, so the pointer can cross
 * the gap between the trigger and the panel. */
const HOVER_CLOSE_MS = 120;

export function Header({ locale, nav }: { locale: Locale; nav: NavItem[] }) {
  const t = getUi(locale);
  const pathname = usePathname() ?? "/";
  const fromPath = localeFromPathname(pathname);
  const bare = fromPath === "en" ? pathname : pathname.replace(`/${fromPath}`, "") || "/";
  const here = bare.endsWith("/") ? bare : `${bare}/`;

  // One dropdown at a time. A ref'd wrapper lets useDismiss close the menu
  // on any click outside the nav or on Escape.
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  useDismiss(navRef, openMenu !== null, () => setOpenMenu(null));
  useEffect(() => {
    setOpenMenu(null);
  }, [pathname]);

  // Hover-open only on devices with a real pointer; touch taps still toggle.
  const [hoverCapable, setHoverCapable] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setHoverCapable(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const closeTimer = useRef<number | null>(null);
  const cancelHoverClose = () => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const scheduleHoverClose = () => {
    if (!hoverCapable) return;
    cancelHoverClose();
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), HOVER_CLOSE_MS);
  };
  useEffect(() => cancelHoverClose, []);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/85 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-x-2 py-2 sm:h-16 sm:flex-nowrap sm:py-0">
          <Link
            href={localePath(locale, "/")}
            className="order-1 flex items-center gap-2 text-lg font-extrabold tracking-tight text-ink-900"
            aria-label={`${siteName} home`}
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-600">
              <PixelStar className="h-5 w-5 text-white" />
            </span>
            <span className="hidden min-[420px]:inline">{siteName}</span>
          </Link>

          <div className="order-2 sm:order-3">
            <LanguageSwitcher locale={locale} />
          </div>

          <nav
            ref={navRef}
            aria-label="Main"
            className="order-3 -mx-1 flex w-full items-center gap-0.5 overflow-x-auto px-1 pb-0.5 sm:order-2 sm:w-auto sm:gap-1 sm:overflow-visible sm:px-0 sm:pb-0"
          >
            {nav.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative shrink-0"
                  onMouseEnter={() => {
                    if (!hoverCapable) return;
                    cancelHoverClose();
                    setOpenMenu(item.label);
                  }}
                  onMouseLeave={scheduleHoverClose}
                >
                  <button
                    type="button"
                    aria-expanded={openMenu === item.label}
                    onClick={(event) => {
                      // On pointer devices the menu follows hover; a mouse
                      // click must not fight it. Keyboard clicks (detail 0)
                      // and touch taps still toggle.
                      if (hoverCapable && event.detail > 0) return;
                      setOpenMenu(openMenu === item.label ? null : item.label);
                    }}
                    className="flex h-9 cursor-pointer items-center gap-1 whitespace-nowrap rounded-lg px-2 py-2 text-[13px] font-semibold text-ink-900 transition-colors hover:bg-brand-50 hover:text-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 sm:px-3 sm:text-sm"
                  >
                    {item.label}
                    <svg
                      aria-hidden
                      viewBox="0 0 12 12"
                      className={`size-3 text-ink-500 transition-transform ${openMenu === item.label ? "rotate-180" : ""}`}
                      fill="none"
                    >
                      <path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {openMenu === item.label && (
                    <div className="fixed left-4 right-4 top-14 z-50 max-h-[60vh] overflow-y-auto rounded-2xl border border-line bg-white p-2 shadow-lg sm:absolute sm:left-0 sm:right-auto sm:top-full sm:mt-1.5 sm:max-h-[70vh] sm:w-72">
                      {item.children.map((group, groupIndex) => (
                        <div key={group.heading ?? `group-${groupIndex}`} className={groupIndex > 0 ? "mt-1 border-t border-line pt-1" : ""}>
                          {group.heading && (
                            <p className="px-2 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-wider text-ink-500">
                              {group.heading}
                            </p>
                          )}
                          <ul>
                            {group.items.map((link) => (
                              <li key={link.href}>
                                <Link
                                  href={localePath(locale, link.href)}
                                  onClick={() => setOpenMenu(null)}
                                  className="block rounded-xl px-2 py-1.5 text-sm text-ink-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={localePath(locale, item.href ?? "/")}
                  aria-current={here === item.href ? "page" : undefined}
                  className={`shrink-0 whitespace-nowrap rounded-lg px-2 py-2 text-[13px] transition-colors sm:px-3 sm:text-sm ${
                    here === item.href
                      ? "bg-brand-100 font-bold text-brand-800"
                      : "font-semibold text-ink-900 hover:bg-brand-50 hover:text-brand-700"
                  }`}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
