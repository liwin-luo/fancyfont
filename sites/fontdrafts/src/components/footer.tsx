// 页脚:locale 决定链接前缀与标签语言。黑底反白,硬边风格收尾。

import Link from "next/link";
import { localePath, type Locale } from "@/lib/i18n";
import { guidesFor } from "@/lib/guides";
import { hubPath } from "@/lib/hubs";
import { platformPages } from "@/lib/platform-pages";
import { stylePages } from "@/lib/style-pages";
import { getUi } from "@/lib/ui-strings";
import { siteName } from "@/lib/site";

export function Footer({ locale }: { locale: Locale }) {
  const ui = getUi(locale);
  const lp = (slug: string) => localePath(locale, `/${slug}/`);
  const localeStyles = stylePages.filter((page) => page.copy[locale]);
  const localePlatforms = platformPages.filter((page) => page.copy[locale]);
  const localeGuides = guidesFor(locale);

  return (
    <footer className="mt-16 border-t-2 border-ink bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-xs font-black tracking-widest text-pop-yellow">{ui.footerCols.styles}</p>
            <ul className="mt-3 space-y-2">
              {localeStyles.slice(0, 7).map((page) => (
                <li key={page.slug}>
                  <Link href={lp(page.slug)} className="text-sm hover:text-pop-yellow">
                    {page.copy[locale]!.navName}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={hubPath(locale, "styles")} className="text-sm text-paper/70 hover:text-pop-yellow">
                  {ui.footerCols.allStyles}
                </Link>
              </li>
              {locale === "en" && (
                <>
                  <li>
                    <Link href="/symbols/" className="text-sm text-paper/70 hover:text-pop-yellow">
                      Symbols
                    </Link>
                  </li>
                  <li>
                    <Link href="/blank-space/" className="text-sm text-paper/70 hover:text-pop-yellow">
                      Blank Space
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div>
            <p className="text-xs font-black tracking-widest text-pop-pink">{ui.footerCols.platforms}</p>
            <ul className="mt-3 space-y-2">
              {localePlatforms.slice(0, 8).map((page) => (
                <li key={page.slug}>
                  <Link href={lp(page.slug)} className="text-sm hover:text-pop-pink">
                    {page.copy[locale]!.navName}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={hubPath(locale, "platforms")} className="text-sm text-paper/70 hover:text-pop-pink">
                  {ui.footerCols.allPlatforms}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-black tracking-widest text-pop-green">{ui.footerCols.guides}</p>
            <ul className="mt-3 space-y-2">
              {localeGuides.slice(0, 5).map((guide) => (
                <li key={guide.slug}>
                  <Link href={`${guideBaseFor(locale)}/${guide.slug}/`} className="text-sm hover:text-pop-green">
                    {guide.navName}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={`${guideBaseFor(locale)}/`} className="text-sm text-paper/70 hover:text-pop-green">
                  {ui.footerCols.allGuides}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-black tracking-widest text-pop-blue">{ui.footerCols.about}</p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href={lp("about")} className="text-sm hover:text-pop-blue">
                  {legalNav(locale).about}
                </Link>
              </li>
              <li>
                <Link href={lp("contact")} className="text-sm hover:text-pop-blue">
                  {legalNav(locale).contact}
                </Link>
              </li>
              <li>
                <Link href={lp("privacy")} className="text-sm hover:text-pop-blue">
                  {legalNav(locale).privacy}
                </Link>
              </li>
              <li>
                <Link href={lp("terms")} className="text-sm hover:text-pop-blue">
                  {legalNav(locale).terms}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-paper/20 pt-6 text-xs text-paper/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {siteName} · {ui.footerTagline}
          </p>
          <p>© 2026 {siteName}. {ui.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

import { guideBase } from "@/lib/guides";
import { legalContent } from "@/lib/content/legal";

function guideBaseFor(locale: Locale): string {
  return guideBase(locale);
}

function legalNav(locale: Locale): { about: string; contact: string; privacy: string; terms: string } {
  const bundle = legalContent[locale];
  return {
    about: bundle.about.navName,
    contact: bundle.contact.navName,
    privacy: bundle.privacy.navName,
    terms: bundle.terms.navName,
  };
}
