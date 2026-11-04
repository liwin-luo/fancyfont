import Link from "next/link";
import { textStyles } from "@/lib/text-styles";
import { symbols } from "@/lib/symbols-data";
import { isLookPage, stylePages } from "@/lib/style-pages";
import { platformPages } from "@/lib/platform-pages";
import { homeContent } from "@/lib/content/page-home";
import { getUi } from "@/lib/ui-strings";
import { hreflang, localePath, type Locale } from "@/lib/i18n";
import { PixelHeart, PixelSpark, PixelStar } from "@/components/pixel-star";
import { Faq, JsonLd, faqJsonLd } from "@/components/sections";
import { contactEmail, getSiteUrl, siteName } from "@/lib/site";
import { workMeta } from "@/lib/schema";
import { sampleNames } from "@/lib/sample-names";
import { SampleNameProvider, SampleStyledName } from "@/components/sample-name";
import { HeroConverter } from "@/components/hero-converter";

const siteUrl = getSiteUrl();

const popularStyleIds = [
  "boldScript",
  "smallCaps",
  "bubble",
  "doubleStruck",
  "fullwidth",
  "monospace",
] as const;

const cardSymbolIds = ["hearts-1", "stars-1", "crowns-5", "flowers-1", "arrows-1", "faces-1"];

const popularToolHrefs = [
  "/fancy-text-generator/",
  "/gaming-name-generator/",
  "/symbols/",
  "/blank-space/",
  "/instagram-fonts/",
  "/pubg-name-generator/",
] as const;

const useCaseGroups = [
  {
    key: "social" as const,
    slugs: ["instagram-fonts", "tiktok-fonts", "discord-fonts", "facebook-fonts", "youtube-fonts"],
  },
  {
    key: "gaming" as const,
    slugs: [
      "pubg-name-generator",
      "free-fire-name-generator",
      "cod-name-generator",
      "roblox-name-generator",
      "fortnite-name-generator",
    ],
  },
  { key: "roleplay" as const, slugs: ["adopt-me-fonts", "berry-avenue-fonts"] },
];

export function HomePageTemplate({ locale }: { locale: Locale }) {
  const c = homeContent[locale];
  const t = getUi(locale);
  const sampleName = sampleNames[locale][0] ?? "Alex";
  const cardSymbols = cardSymbolIds
    .map((id) => symbols.find((s) => s.id === id))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

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

  const popularToolLinks = popularToolHrefs.map((href) => {
    const slug = href.replaceAll("/", "");
    const platform = platformPages.find((page) => page.slug === slug);
    const label = platform
      ? platform.copy[locale].h1
      : href === "/fancy-text-generator/"
        ? t.tools.fancy
        : href === "/gaming-name-generator/"
          ? t.tools.gaming
          : href === "/symbols/"
            ? t.tools.symbols
            : t.tools.blank;
    return { href, label };
  });

  return (
    <SampleNameProvider names={sampleNames[locale]}>
      <JsonLd data={jsonLd} />
      <JsonLd data={faqJsonLd(c.faq)} />

      {/* Hero: H1, pitch, and a converter the visitor can use right here */}
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
            <span className="mt-2 block text-2xl font-bold text-brand-600 sm:text-3xl">
              {c.hero.accent}
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-ink-600">{c.hero.sub}</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={localePath(locale, "/fancy-text-generator/")} className="btn-primary w-full sm:w-auto">
              <span aria-hidden="true">✦</span> {c.hero.ctaPrimary}
            </Link>
            <Link href={localePath(locale, "/gaming-name-generator/")} className="btn-secondary w-full sm:w-auto">
              {c.hero.ctaSecondary}
            </Link>
          </div>

          <div className="mx-auto mt-8 max-w-xl">
            <HeroConverter defaultText={sampleName} />
            <Link
              href={localePath(locale, "/fancy-text-generator/")}
              className="mt-3 inline-block text-sm font-semibold text-brand-700 hover:text-brand-800"
            >
              {c.hero.convertLink}
            </Link>
          </div>
        </div>
      </section>

      {/* Main categories: the three jobs, each with live examples */}
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
                <p className="mt-1 text-sm leading-relaxed text-ink-600">{card.description}</p>
                {index === 0 && (
                  <span className="mt-3 space-y-1.5">
                    {(["script", "smallCaps"] as const).map((id) => (
                      <span key={id} className="flex items-baseline justify-between gap-2">
                        <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wider text-ink-500">
                          {t.styleNames[id]}
                        </span>
                        <SampleStyledName
                          styleId={id}
                          className="result-text min-w-0 truncate text-base font-medium text-ink-900"
                        />
                      </span>
                    ))}
                  </span>
                )}
                {index === 1 && (
                  <span className="mt-3 space-y-1.5">
                    {[`꧁༒ ${sampleName} ༒꧂`, `★ ${sampleName} ★`].map((line) => (
                      <span key={line} className="result-text block truncate text-base font-medium text-ink-900">
                        {line}
                      </span>
                    ))}
                  </span>
                )}
                {index === 2 && (
                  <span className="mt-3 flex flex-wrap gap-1.5">
                    {cardSymbols.map((entry) => (
                      <span
                        key={entry.id}
                        title={entry.label}
                        aria-hidden="true"
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-surface text-base text-ink-900"
                      >
                        {entry.symbol}
                      </span>
                    ))}
                  </span>
                )}
                <span className="mt-4 flex-1" />
                <span className="text-sm font-semibold text-brand-700">{card.cta} →</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Popular tools */}
      <section className="mx-auto mt-14 max-w-6xl px-4 sm:px-6" aria-labelledby="popular-heading">
        <h2 id="popular-heading" className="text-2xl font-bold tracking-tight text-ink-900">
          {c.popularTools.h2}
        </h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {popularToolLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={localePath(locale, link.href)}
                className="inline-flex h-10 items-center rounded-full border border-line bg-white px-4 text-sm font-semibold text-ink-700 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
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

      {/* Use cases: platform pages grouped by job */}
      <section className="mx-auto mt-14 max-w-6xl px-4 sm:px-6" aria-labelledby="use-cases-heading">
        <h2 id="use-cases-heading" className="text-2xl font-bold tracking-tight text-ink-900">
          {c.useCases.h2}
        </h2>
        <p className="mt-2 max-w-2xl text-ink-600">{c.useCases.sub}</p>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {useCaseGroups.map((group) => (
            <div key={group.key}>
              <h3 className="text-sm font-semibold tracking-wide text-ink-500 uppercase">
                {c.useCases[group.key]}
              </h3>
              <ul className="mt-3 space-y-2">
                {group.slugs.map((slug) => {
                  const page = platformPages.find((item) => item.slug === slug);
                  if (!page) return null;
                  return (
                    <li key={slug}>
                      <Link
                        href={localePath(locale, `/${page.slug}/`)}
                        className="flex items-start justify-between gap-3 border-b border-line pb-2 text-sm font-medium text-ink-700 transition-colors hover:border-brand-300 hover:text-brand-700"
                      >
                        <span className="min-w-0">{page.copy[locale].h1}</span>
                        <span aria-hidden="true" className="text-ink-500">
                          →
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
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
    </SampleNameProvider>
  );
}
