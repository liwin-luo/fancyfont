import Link from "next/link";
import { GamingNameTool } from "@/components/gaming-name-tool";
import { PlatformChips } from "@/components/platform-chips";
import {
  CompatNote,
  Faq,
  JsonLd,
  RelatedTools,
  Steps,
  faqJsonLd,
} from "@/components/sections";
import { coreFocus } from "@/lib/content/core-focus";
import { gamingContent } from "@/lib/content/page-gaming";
import { guidePath, guidesForPage } from "@/lib/guides";
import { getPlatformPage } from "@/lib/platform-pages";
import { getSiteUrl } from "@/lib/site";
import { workMeta } from "@/lib/schema";
import { localePath, type Locale } from "@/lib/i18n";

const siteUrl = getSiteUrl();

export function GamingPageTemplate({ locale }: { locale: Locale }) {
  const c = gamingContent[locale];
  const path = localePath(locale, "/gaming-name-generator/");
  // Guides exist only in English, so only the English template links them.
  const pageGuides = locale === "en" ? guidesForPage("gaming-name-generator") : [];

  const webAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: c.h1,
    url: `${siteUrl}${path}`,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript",
    description: c.meta.description,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    ...workMeta(),
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <JsonLd data={webAppJsonLd} />
      <JsonLd data={faqJsonLd(c.faq)} />

      <PlatformChips locale={locale} active="all" />

      <header className="mt-6">
        <h1 className="text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">{c.h1}</h1>
        <p className="mt-3 leading-relaxed text-ink-600">{c.intro}</p>
        <p className="mt-2 text-sm leading-relaxed text-ink-700">{coreFocus[locale].gaming}</p>
      </header>

      <div className="mt-8">
        <GamingNameTool />
      </div>

      {c.hub && <GameHub locale={locale} hub={c.hub} />}

      <CompatNote locale={locale} />

      <section className="mt-12" aria-labelledby="how-heading">
        <h2 id="how-heading" className="text-xl font-bold text-ink-900">
          {c.howHeading}
        </h2>
        <Steps items={c.steps} />
      </section>

      <section className="mt-12" aria-labelledby="examples-heading">
        <h2 id="examples-heading" className="text-xl font-bold text-ink-900">
          {c.examplesHeading}
        </h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {c.examples.map((example) => (
            <li
              key={example}
              className="rounded-xl border border-line bg-surface px-4 py-2 text-lg font-medium text-ink-900"
            >
              {example}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12" aria-labelledby="about-heading">
        <h2 id="about-heading" className="text-xl font-bold text-ink-900">
          {c.aboutHeading}
        </h2>
        <div className="mt-3 space-y-3 text-sm leading-relaxed text-ink-700">
          {c.about.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      <RelatedTools
        locale={locale}
        links={c.related.map((link) => ({
          href: localePath(locale, link.path),
          title: link.title,
          description: link.description,
        }))}
      />

      {pageGuides.length > 0 && (
        <section className="mt-12" aria-labelledby="guides-heading">
          <h2 id="guides-heading" className="text-xl font-bold text-ink-900">
            Related guides
          </h2>
          <div className="mt-4 space-y-3">
            {pageGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={guidePath(guide.slug)}
                className="card group block p-4 transition-colors hover:border-brand-300"
              >
                <p className="font-semibold text-ink-900 group-hover:text-brand-700">{guide.h1}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-600">{guide.description}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="mt-12" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="text-xl font-bold text-ink-900">
          {c.faqHeading}
        </h2>
        <Faq items={c.faq} />
      </section>
    </div>
  );
}

function GameHub({
  locale,
  hub,
}: {
  locale: Locale;
  hub: NonNullable<(typeof gamingContent)[Locale]["hub"]>;
}) {
  const cards = hub.cards.flatMap((card) => {
    const page = getPlatformPage(locale, card.slug);
    if (!page) return [];
    return [{ ...card, href: localePath(locale, `/${page.slug}/`) }];
  });
  if (cards.length === 0) return null;

  return (
    <section className="mt-8" aria-labelledby="game-hub-heading">
      <h2 id="game-hub-heading" className="text-xl font-bold text-ink-900">
        {hub.heading}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-ink-600">{hub.intro}</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="card group block p-4 transition-colors hover:border-brand-300"
          >
            <p className="font-semibold text-ink-900 group-hover:text-brand-700">{card.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-ink-600">{card.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
