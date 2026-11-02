import Link from "next/link";
import { CopyButton } from "@/components/copy-button";
import { SingleStyleTool } from "@/components/single-style-tool";
import {
  CompatNote,
  Faq,
  JsonLd,
  RelatedTools,
  Steps,
  faqJsonLd,
} from "@/components/sections";
import { relatedToolLinks } from "@/lib/platform-pages";
import { previewStylePage, type StylePageDef } from "@/lib/style-pages";
import { getSiteUrl } from "@/lib/site";
import { workMeta } from "@/lib/schema";
import { getUi } from "@/lib/ui-strings";
import { localePath, type Locale } from "@/lib/i18n";

const siteUrl = getSiteUrl();

export function StylePageTemplate({ page, locale }: { page: StylePageDef; locale: Locale }) {
  const c = page.copy[locale];
  const t = getUi(locale);
  const path = localePath(locale, `/${page.slug}/`);

  const relatedLinks = relatedToolLinks(locale, page.related);

  const webAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: c.h1,
    url: `${siteUrl}${path}`,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript",
    description: c.description,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    ...workMeta(),
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <JsonLd data={webAppJsonLd} />
      <JsonLd data={faqJsonLd(c.faq)} />

      <header>
        <h1 className="text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">{c.h1}</h1>
        <p className="mt-3 leading-relaxed text-ink-600">{c.intro}</p>
        {page.wrappers?.length ? (
          <p className="mt-2 text-sm leading-relaxed text-ink-700">
            {t.sections.lookUses(t.styleNames[page.styleIds[0]])}
          </p>
        ) : null}
      </header>

      {c.copyExamples && c.copyExamples.length > 0 && c.examplesHeading && (
        <section className="mt-6" aria-labelledby="copy-examples-heading">
          <h2 id="copy-examples-heading" className="text-xl font-bold text-ink-900">
            {c.examplesHeading}
          </h2>
          {c.examplesHint ? <p className="mt-1 text-sm leading-relaxed text-ink-600">{c.examplesHint}</p> : null}
          <ul className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {c.copyExamples.map((example) => (
              <li key={example} className="shrink-0">
                <CopyButton
                  text={example}
                  label={example}
                  ariaLabel={t.common.copyStyle(example)}
                  className="result-text inline-flex h-11 items-center gap-2 rounded-full border border-line bg-white px-3 text-base text-ink-900 transition-colors hover:border-brand-300 hover:bg-brand-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                  copiedClassName="result-text inline-flex h-11 items-center gap-2 rounded-full border border-success/30 bg-success-bg px-3 text-base text-success focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                />
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="mt-8">
        <SingleStyleTool
          styleIds={page.styleIds}
          wrappers={page.wrappers}
          defaultText={c.sampleInputs[0]}
        />
      </div>

      <CompatNote locale={locale} />

      <section className="mt-12" aria-labelledby="how-heading">
        <h2 id="how-heading" className="text-xl font-bold text-ink-900">
          {t.sections.howToUse}
        </h2>
        <Steps items={t.stylePageSteps} />
      </section>

      <section className="mt-12" aria-labelledby="how-works-heading">
        <h2 id="how-works-heading" className="text-xl font-bold text-ink-900">
          {t.sections.howWorks(c.navName.toLowerCase())}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-ink-700">{c.howItWorks}</p>
        <p className="mt-3 text-sm leading-relaxed text-ink-700">{c.coverageNote}</p>
      </section>

      <section className="mt-12" aria-labelledby="best-heading">
        <h2 id="best-heading" className="text-xl font-bold text-ink-900">
          {t.sections.whereShines}
        </h2>
        <ul className="mt-4 space-y-2">
          {c.bestFor.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-700">
              <span aria-hidden="true" className="mt-0.5 text-brand-600">
                ✦
              </span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12" aria-labelledby="examples-heading">
        <h2 id="examples-heading" className="text-xl font-bold text-ink-900">
          {t.sections.examples}
        </h2>
        <ul className="mt-4 space-y-2">
          {c.sampleInputs.map((input) => (
            <li
              key={input}
              className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 rounded-xl border border-line bg-surface p-4"
            >
              <span className="text-xs font-semibold tracking-wider text-ink-500 uppercase">
                {input}
              </span>
              <span className="result-text text-2xl font-medium text-ink-900">
                {previewStylePage(input, page)}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12" aria-labelledby="platform-heading">
        <h2 id="platform-heading" className="text-xl font-bold text-ink-900">
          {t.sections.onPlatforms}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-ink-700">{c.platformTip}</p>
      </section>

      <RelatedTools
        locale={locale}
        links={[
          ...relatedLinks,
          {
            href: localePath(locale, "/fancy-text-generator/"),
            title: t.tools.fancy,
            description: t.sections.browseFancy,
          },
        ]}
      />

      <section className="mt-12" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="text-xl font-bold text-ink-900">
          {t.sections.faq}
        </h2>
        <Faq items={c.faq} />
      </section>

      <p className="mt-10 text-center">
        <Link
          href={localePath(locale, "/fancy-text-generator/")}
          className="text-sm font-semibold text-brand-700 hover:text-brand-800"
        >
          {t.sections.openFull}
        </Link>
      </p>
    </div>
  );
}
