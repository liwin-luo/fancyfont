import { SymbolsTool } from "@/components/symbols-tool";
import {
  CompatNote,
  Faq,
  JsonLd,
  RelatedTools,
  Steps,
  faqJsonLd,
} from "@/components/sections";
import { symbolCategories, symbols } from "@/lib/symbols-data";
import { symbolsContent } from "@/lib/content/page-symbols-privacy";
import { getSiteUrl } from "@/lib/site";
import { localePath, type Locale } from "@/lib/i18n";

const siteUrl = getSiteUrl();

export function SymbolsPageTemplate({ locale }: { locale: Locale }) {
  const c = symbolsContent[locale];
  const path = localePath(locale, "/symbols/");

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

      <header>
        <h1 className="text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">{c.h1}</h1>
        <p className="mt-3 leading-relaxed text-ink-600">{c.intro(symbols.length, symbolCategories.length)}</p>
      </header>

      <div className="mt-8">
        <SymbolsTool />
      </div>

      <CompatNote locale={locale} />

      <section className="mt-12" aria-labelledby="how-heading">
        <h2 id="how-heading" className="text-xl font-bold text-ink-900">
          {c.howHeading}
        </h2>
        <Steps items={c.steps} />
      </section>

      <section className="mt-12" aria-labelledby="about-heading">
        <h2 id="about-heading" className="text-xl font-bold text-ink-900">
          {c.aboutHeading}
        </h2>
        <div className="mt-3 space-y-3 text-sm leading-relaxed text-ink-700">
          {c.about(symbols.length, symbolCategories.length).map((paragraph, index) => (
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
