import Link from "next/link";
import { textStyles } from "@/lib/text-styles";
import { symbols } from "@/lib/symbols-data";
import { isLookPage, stylePages } from "@/lib/style-pages";
import { platformPages } from "@/lib/platform-pages";
import { homeContent } from "@/lib/content/page-home";
import { getUi } from "@/lib/ui-strings";
import { hreflang, localePath, type Locale } from "@/lib/i18n";
import { PixelHeart, PixelSpark, PixelStar } from "@/components/pixel-star";
import { PlatformChips } from "@/components/platform-chips";
import { Faq, JsonLd, faqJsonLd } from "@/components/sections";
import { contactEmail, getSiteUrl, siteName } from "@/lib/site";
import { workMeta } from "@/lib/schema";
import { sampleNames } from "@/lib/sample-names";
import { SampleNameProvider, SampleStyledName } from "@/components/sample-name";

const siteUrl = getSiteUrl();

const heroStyleIds = ["script", "bold", "fraktur"] as const;
const popularStyleIds = [
  "boldScript",
  "smallCaps",
  "bubble",
  "doubleStruck",
  "fullwidth",
  "monospace",
] as const;

const popularSymbolIds = [
  "hearts-1",
  "hearts-2",
  "hearts-24",
  "stars-1",
  "stars-2",
  "stars-3",
  "stars-4",
  "crowns-5",
  "crowns-6",
  "flowers-1",
  "flowers-13",
  "arrows-1",
  "wings-3",
  "brackets-17",
  "lines-2",
  "faces-1",
  "vibes-1",
  "vibes-16",
];

export function HomePageTemplate({ locale }: { locale: Locale }) {
  const c = homeContent[locale];
  const t = getUi(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: locale === "en" ? siteUrl : `${siteUrl}${localePath(locale, "/")}`,
    description: c.meta.description,
    inLanguage: hreflang[locale],
    publisher: { "@type": "Organization", name: siteName, url: siteUrl, email: contactEmail },
    ...workMeta(),
  };

  const popularSymbols = popularSymbolIds
    .map((id) => symbols.find((s) => s.id === id))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <SampleNameProvider names={sampleNames[locale]}>
      <JsonLd data={jsonLd} />
      <JsonLd data={faqJsonLd(c.faq)} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
          <PixelStar className="pixel-float absolute top-14 left-[7%] h-8 w-8 text-brand-200" />
          <PixelSpark className="pixel-float absolute top-8 right-[8%] h-4 w-4 text-pixel-blue [animation-delay:200ms]" />
          <PixelHeart className="pixel-float absolute top-36 left-[4%] h-5 w-5 text-pixel-pink [animation-delay:500ms]" />
          <PixelStar className="pixel-float absolute top-44 right-[9%] h-5 w-5 text-pixel-lime [animation-delay:900ms]" />
          <PixelSpark className="pixel-float absolute bottom-28 left-[9%] h-4 w-4 text-pixel-lime [animation-delay:1.3s]" />
          <PixelHeart className="pixel-float absolute right-[5%] bottom-16 h-6 w-6 text-pixel-pink [animation-delay:1.6s]" />
        </div>
        <div className="mx-auto max-w-3xl px-4 pt-14 pb-12 text-center sm:px-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
            {c.hero.pre}
            <span className="text-brand-600">{c.hero.accent}</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-ink-600">{c.hero.sub}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={localePath(locale, "/fancy-text-generator/")} className="btn-primary w-full sm:w-auto">
              <span aria-hidden="true">✦</span> {c.hero.ctaPrimary}
            </Link>
            <Link href={localePath(locale, "/gaming-name-generator/")} className="btn-secondary w-full sm:w-auto">
              {c.hero.ctaSecondary}
            </Link>
          </div>

          <div className="mt-8 text-left">
            <PlatformChips locale={locale} includeAll={false} />
          </div>

          <div className="card mx-auto mt-10 max-w-xl p-5 text-left">
            <p className="text-xs font-semibold tracking-wider text-ink-500 uppercase">
              {c.hero.instantPreview}
            </p>
            <ul className="mt-3 space-y-2.5">
              {heroStyleIds.map((id) => (
                <li key={id} className="flex items-baseline justify-between gap-4">
                  <span className="w-20 shrink-0 text-xs text-ink-500">{t.styleNames[id]}</span>
                  <SampleStyledName
                    styleId={id}
                    className="result-text text-lg font-medium text-ink-900"
                  />
                </li>
              ))}
            </ul>
            <Link
              href={localePath(locale, "/fancy-text-generator/")}
              className="mt-4 inline-block text-sm font-semibold text-brand-700 hover:text-brand-800"
            >
              {c.hero.convertLink}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pt-4 sm:px-6" aria-labelledby="what-heading">
        <h2 id="what-heading" className="text-2xl font-bold tracking-tight text-ink-900">
          {c.what.h2}
        </h2>
        <p className="mt-2 text-base leading-relaxed text-ink-600">{c.what.body}</p>
      </section>

      {/* Tool cards */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6" aria-labelledby="tools-heading">
        <h2 id="tools-heading" className="text-2xl font-bold tracking-tight text-ink-900">
          {c.toolsSection.h2}
        </h2>
        <p className="mt-2 max-w-2xl text-ink-600">{c.toolsSection.sub}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {c.toolsSection.cards.map((card, index) => {
            const hrefs = ["/fancy-text-generator/", "/gaming-name-generator/", "/symbols/"];
            return (
              <Link
                key={card.title}
                href={localePath(locale, hrefs[index])}
                className="card group flex flex-col p-5 transition-colors hover:border-brand-300"
              >
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-lg font-bold text-brand-700"
                >
                  {card.icon}
                </span>
                <h3 className="mt-3 font-bold text-ink-900 group-hover:text-brand-700">
                  {card.title}
                </h3>
                <p className="mt-1 flex-1 text-sm leading-relaxed text-ink-600">{card.description}</p>
                <span className="mt-4 text-sm font-semibold text-brand-700">{card.cta} →</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Popular styles */}
      <section className="mx-auto mt-14 max-w-6xl px-4 sm:px-6" aria-labelledby="styles-heading">
        <h2 id="styles-heading" className="text-2xl font-bold tracking-tight text-ink-900">
          {c.popularStyles.h2}
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {popularStyleIds.map((id) => {
            const stylePage = stylePages.find((p) => p.styleIds.includes(id));
            return (
              <li key={id}>
                <Link
                  href={
                    stylePage
                      ? localePath(locale, `/${stylePage.slug}/`)
                      : localePath(locale, "/fancy-text-generator/")
                  }
                  className="flex items-baseline justify-between gap-4 rounded-xl border border-line bg-surface p-4 transition-colors hover:border-brand-300"
                >
                  <span className="shrink-0">
                    <span className="block text-xs font-semibold tracking-wider text-ink-500 uppercase">
                      {t.styleNames[id]}
                    </span>
                    <span className="mt-1 block text-xs font-normal tracking-normal text-ink-500 normal-case">
                      {t.tools.coverage[textStyles.find((style) => style.id === id)!.coverage]}
                    </span>
                  </span>
                  <SampleStyledName
                    styleId={id}
                    className="result-text text-lg font-medium text-ink-900"
                  />
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="mt-4">
          <Link
            href={localePath(locale, "/fancy-text-generator/")}
            className="text-sm font-semibold text-brand-700 hover:text-brand-800"
          >
            {c.popularStyles.seeAll}
          </Link>
        </p>
      </section>

      {/* Popular symbols */}
      <section className="mx-auto mt-14 max-w-6xl px-4 sm:px-6" aria-labelledby="symbols-heading">
        <h2 id="symbols-heading" className="text-2xl font-bold tracking-tight text-ink-900">
          {c.popularSymbols.h2}
        </h2>
        <ul className="mt-6 flex flex-wrap gap-2">
          {popularSymbols.map((entry) => (
            <li
              key={entry.id}
              title={entry.label}
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-surface text-xl text-ink-900"
            >
              {entry.symbol}
            </li>
          ))}
        </ul>
        <p className="mt-4">
          <Link
            href={localePath(locale, "/symbols/")}
            className="text-sm font-semibold text-brand-700 hover:text-brand-800"
          >
            {c.popularSymbols.browse}
          </Link>
        </p>
      </section>

      {/* All generators directory */}
      <section className="mx-auto mt-14 max-w-6xl px-4 sm:px-6" aria-labelledby="directory-heading">
        <h2 id="directory-heading" className="text-2xl font-bold tracking-tight text-ink-900">
          {c.directory.h2}
        </h2>
        <p className="mt-2 max-w-2xl text-ink-600">{c.directory.sub}</p>
        {(
          [
            [t.tools.lookGenerators, stylePages.filter(isLookPage)],
            [t.tools.letterGenerators, stylePages.filter((page) => !isLookPage(page))],
            [t.tools.forPlatforms, platformPages],
          ] as const
        ).map(([heading, pages]) => (
          <div key={heading} className="mt-8">
            <h3 className="text-sm font-semibold tracking-wide text-ink-500 uppercase">{heading}</h3>
            <div className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
              {pages.map((page) => (
                <Link
                  key={page.slug}
                  href={localePath(locale, `/${page.slug}/`)}
                  className="flex items-start justify-between gap-3 border-b border-line pb-2 text-sm font-medium text-ink-700 transition-colors hover:border-brand-300 hover:text-brand-700"
                >
                  <span className="min-w-0">
                    <span className="block">{page.copy[locale].h1}</span>
                    {"styleIds" in page && isLookPage(page) ? (
                      <span className="mt-0.5 block text-xs font-normal text-ink-500">
                        {t.tools.usesLetters(t.styleNames[page.styleIds[0]])}
                      </span>
                    ) : null}
                  </span>
                  <span aria-hidden="true" className="text-ink-500">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* How it works */}
      <section className="mx-auto mt-14 max-w-6xl px-4 sm:px-6" aria-labelledby="how-heading">
        <h2 id="how-heading" className="text-2xl font-bold tracking-tight text-ink-900">
          {c.how.h2}
        </h2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-3">
          {c.how.steps.map((step) => (
            <li key={step.title} className="card p-5">
              <h3 className="font-bold text-ink-900">{step.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-600">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Compatibility */}
      <section className="mx-auto mt-14 max-w-3xl px-4 sm:px-6">
        <div className="rounded-xl border border-warning/20 bg-warning-bg p-4 text-sm leading-relaxed text-warning">
          <p>
            <strong className="font-semibold">{t.compat.lead}</strong> {c.compat}
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto mt-14 max-w-3xl px-4 sm:px-6" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="text-2xl font-bold tracking-tight text-ink-900">
          {c.faqHeading}
        </h2>
        <Faq items={c.faq} />
      </section>
    </SampleNameProvider>
  );
}
