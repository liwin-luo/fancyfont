import Link from "next/link";
import { PixelStar } from "@/components/pixel-star";
import { LanguageSwitcher } from "@/components/language-switcher";
import { getUi } from "@/lib/ui-strings";
import { localePath, type Locale } from "@/lib/i18n";
import { siteName } from "@/lib/site";

export function Header({ locale }: { locale: Locale }) {
  const t = getUi(locale);
  const links = [
    { href: "/fancy-text-generator/", label: t.nav.fancy },
    { href: "/gaming-name-generator/", label: t.nav.gaming },
    { href: "/symbols/", label: t.nav.symbols },
  ];

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
            aria-label="Main"
            className="order-3 -mx-1 flex w-full items-center gap-0.5 overflow-x-auto px-1 pb-0.5 sm:order-2 sm:w-auto sm:gap-1 sm:overflow-visible sm:px-0 sm:pb-0"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={localePath(locale, link.href)}
                className="whitespace-nowrap rounded-lg px-2 py-2 text-[13px] font-medium text-ink-700 transition-colors hover:bg-brand-50 hover:text-brand-700 sm:px-3 sm:text-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
