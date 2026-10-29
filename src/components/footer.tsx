import Link from "next/link";
import { PixelStar } from "@/components/pixel-star";
import { getUi } from "@/lib/ui-strings";
import { localePath, type Locale } from "@/lib/i18n";
import { getSiteUrl, siteName, contentUpdated } from "@/lib/site";
import { isLookPage, stylePages } from "@/lib/style-pages";
import { platformPages } from "@/lib/platform-pages";

export function Footer({ locale }: { locale: Locale }) {
  const t = getUi(locale);

  return (
    <footer className="mt-16 border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <p className="flex items-center gap-2 text-base font-extrabold tracking-tight text-ink-900">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-brand-600">
              <PixelStar className="h-4 w-4 text-white" />
            </span>
            {siteName}
          </p>
          <p className="mt-1 text-xs text-ink-500">{getSiteUrl().replace(/^https?:\/\//, "")}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-600">{t.tools.tagline}</p>
        </div>
        <nav aria-label="Tools">
          <h2 className="text-sm font-semibold text-ink-900">{t.nav.fancy}</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link className="text-ink-600 hover:text-brand-700" href={localePath(locale, "/fancy-text-generator/")}>
                {t.tools.fancy}
              </Link>
            </li>
            <li>
              <Link className="text-ink-600 hover:text-brand-700" href={localePath(locale, "/gaming-name-generator/")}>
                {t.tools.gaming}
              </Link>
            </li>
            <li>
              <Link className="text-ink-600 hover:text-brand-700" href={localePath(locale, "/symbols/")}>
                {t.tools.symbols}
              </Link>
            </li>
            <li>
              <Link className="text-ink-600 hover:text-brand-700" href={localePath(locale, "/blank-space/")}>
                {t.tools.blank}
              </Link>
            </li>
          </ul>
          <h2 className="mt-6 text-sm font-semibold text-ink-900">{t.tools.forPlatforms}</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {platformPages.map((page) => (
              <li key={page.slug}>
                <Link className="text-ink-600 hover:text-brand-700" href={localePath(locale, `/${page.slug}/`)}>
                  {page.copy[locale].navName}{" "}
                  {page.toolMode === "gaming" ? t.tools.namesWord : t.tools.fontsWord}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Style generators">
          <h2 className="text-sm font-semibold text-ink-900">{t.tools.lookGenerators}</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {stylePages.filter(isLookPage).map((page) => (
              <li key={page.slug}>
                <Link className="text-ink-600 hover:text-brand-700" href={localePath(locale, `/${page.slug}/`)}>
                  {page.copy[locale].navName}
                </Link>
              </li>
            ))}
          </ul>
          <h2 className="mt-6 text-sm font-semibold text-ink-900">{t.tools.letterGenerators}</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {stylePages.filter((page) => !isLookPage(page)).map((page) => (
              <li key={page.slug}>
                <Link className="text-ink-600 hover:text-brand-700" href={localePath(locale, `/${page.slug}/`)}>
                  {page.copy[locale].navName}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Site">
          <h2 className="text-sm font-semibold text-ink-900">{t.tools.site}</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link className="text-ink-600 hover:text-brand-700" href={localePath(locale, "/")}>
                {t.nav.home}
              </Link>
            </li>
            <li>
              <Link className="text-ink-600 hover:text-brand-700" href={localePath(locale, "/privacy/")}>
                {t.tools.privacy}
              </Link>
            </li>
            <li>
              <Link className="text-ink-600 hover:text-brand-700" href={localePath(locale, "/terms/")}>
                {t.tools.terms}
              </Link>
            </li>
            <li>
              <Link className="text-ink-600 hover:text-brand-700" href={localePath(locale, "/about/")}>
                {t.tools.about}
              </Link>
            </li>
            <li>
              <Link className="text-ink-600 hover:text-brand-700" href={localePath(locale, "/contact/")}>
                {t.tools.contact}
              </Link>
            </li>
            <li>
              <Link className="text-ink-600 hover:text-brand-700" href={localePath(locale, "/mcp/")}>
                {t.tools.mcp}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-line py-4 text-center text-xs text-ink-500">
        <p>
          © {new Date().getFullYear()} {siteName}. {t.tools.copyright}
        </p>
        <p className="mt-1">
          {t.tools.publishedBy}{" "}
          <Link href={localePath(locale, "/about/")} className="font-semibold hover:text-brand-700">
            {siteName}
          </Link>{" "}
          · {t.tools.lastUpdated} <time dateTime={contentUpdated}>{contentUpdated}</time>
        </p>
      </div>
    </footer>
  );
}
