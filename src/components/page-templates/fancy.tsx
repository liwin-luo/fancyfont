import Link from "next/link";
import { FancyTextTool } from "@/components/fancy-text-tool";
import {
  CompatNote,
  Faq,
  JsonLd,
  RelatedTools,
  Steps,
  faqJsonLd,
} from "@/components/sections";
import { convertText } from "@/lib/text-styles";
import { stylePages } from "@/lib/style-pages";
import { fancyContent } from "@/lib/content/page-fancy";
import { getSiteUrl } from "@/lib/site";
import { getUi } from "@/lib/ui-strings";
import { localePath, type Locale } from "@/lib/i18n";

const siteUrl = getSiteUrl();

export function FancyPageTemplate({ locale }: { locale: Locale }) {
  const c = fancyContent[locale];
  const t = getUi(locale);
  const path = localePath(locale, "/fancy-text-generator/");

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
        <p className="mt-3 leading-relaxed text-ink-600">{c.intro}</p>
      </header>

      <div className="mt-8">
        <FancyTextTool defaultText={c.examples[0].input} />
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
        <ul className="mt-4 space-y-2">
          {c.examples.map((example) => {
            const converted = convertText(example.input, example.styleId);
            const value = `${example.left ?? ""}${converted}${example.right ?? ""}`;
            return (
              <li
                key={example.label}
                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 rounded-xl border border-line bg-surface p-4"
              >
                <span className="text-xs font-semibold tracking-wider text-ink-500 uppercase">
                  {example.label}
                </span>
                <span className="result-text text-lg font-medium text-ink-900">{value}</span>
              </li>
            );
          })}
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

      <section className="mt-12" aria-labelledby="dedicated-heading">
        <h2 id="dedicated-heading" className="text-xl font-bold text-ink-900">
          {c.dedicatedHeading}
        </h2>
        <p className="mt-2 text-sm text-ink-600">{c.dedicatedSub}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {stylePages.map((stylePage) => (
            <li key={stylePage.slug}>
              <Link
                href={localePath(locale, `/${stylePage.slug}/`)}
                className="inline-flex h-9 items-center rounded-full border border-line bg-white px-4 text-sm font-medium text-ink-700 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
              >
                {stylePage.copy[locale].navName}
              </Link>
            </li>
          ))}
        </ul>
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
