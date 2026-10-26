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
import { gamingContent } from "@/lib/content/page-gaming";
import { getSiteUrl } from "@/lib/site";
import { localePath, type Locale } from "@/lib/i18n";

const siteUrl = getSiteUrl();

export function GamingPageTemplate({ locale }: { locale: Locale }) {
  const c = gamingContent[locale];
  const path = localePath(locale, "/gaming-name-generator/");

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
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <JsonLd data={webAppJsonLd} />
      <JsonLd data={faqJsonLd(c.faq)} />

      <PlatformChips locale={locale} active="all" />

      <header className="mt-6">
        <h1 className="text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">{c.h1}</h1>
        <p className="mt-3 leading-relaxed text-ink-600">{c.intro}</p>
      </header>

      <div className="mt-8">
        <GamingNameTool />
      </div>

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

      <section className="mt-12" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="text-xl font-bold text-ink-900">
          {c.faqHeading}
        </h2>
        <Faq items={c.faq} />
      </section>
    </div>
  );
}
