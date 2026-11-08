// 样式专页模板:面包屑 + 生成器 + 步骤 + 知识段落 + 装饰组合 +
// 指南反链 + FAQ,配齐 WebApplication / FAQPage / BreadcrumbList。

import { FancyTextTool } from "@/components/fancy-text-tool";
import { ZalgoCleaner } from "@/components/zalgo-cleaner";
import { HeaderBand } from "@/components/illustrations";
import { Breadcrumbs, CompatNote, Faq, JsonLd, RelatedTools, Steps, faqJsonLd } from "@/components/sections";
import { guidesForPage, guidePath } from "@/lib/guides";
import { hubPath } from "@/lib/hubs";
import { localePath, type Locale } from "@/lib/i18n";
import { breadcrumbJsonLd, howToJsonLd, workMeta } from "@/lib/schema";
import { getUi } from "@/lib/ui-strings";
import { relatedCards, type StylePageDef } from "@/lib/style-pages";

export function StylePageTemplate({ locale, page }: { locale: Locale; page: StylePageDef }) {
  const ui = getUi(locale);
  const c = page.copy[locale]!;
  const guides = guidesForPage(locale, page.slug);
  const primaryStyle = page.styleIds[0];
  const sampleInput = page.placeholder[locale];
  const lp = (slug: string) => localePath(locale, `/${slug}/`);

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: c.h1,
          url: lp(page.slug),
          applicationCategory: "UtilitiesApplication",
          operatingSystem: "Any",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          description: c.description,
          ...workMeta(),
        }}
      />
      <JsonLd data={faqJsonLd(c.faq)} />
      <JsonLd data={howToJsonLd(c.h1, c.steps)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: ui.breadcrumb.home, path: localePath(locale, "/") },
          { name: ui.nav.styles, path: hubPath(locale, "styles") },
          { name: c.navName, path: lp(page.slug) },
        ])}
      />

      <Breadcrumbs
        items={[
          { name: ui.breadcrumb.home, href: localePath(locale, "/") },
          { name: ui.nav.styles, href: hubPath(locale, "styles") },
          { name: c.navName, href: lp(page.slug) },
        ]}
      />

      {/* 页头插图带:主题底色 + 专属图案 + 该页样式的字形拼贴 */}
      <HeaderBand
        className="mt-4"
        bandClass={page.theme?.band}
        motif={page.theme?.motif}
        artSrc={page.theme?.art}
        glyphs={
          page.extraCjk || !page.styleIds[0]
            ? ["꧁字꧂", "『』", "♡♡", "ｈｅｌｌｏ"]
            : page.styleIds.slice(0, 4).map((id) => convertText("A", id))
        }
      >
        <h1 className="text-2xl leading-tight font-black sm:text-4xl">{c.h1}</h1>
      </HeaderBand>
      {c.intro.map((paragraph) => (
        <p key={paragraph.slice(0, 16)} className="mt-3 text-sm leading-relaxed text-ink-soft">
          {paragraph}
        </p>
      ))}

      <FancyTextTool
        locale={locale}
        styleIds={page.styleIds}
        placeholder={sampleInput}
        showCjk={page.extraCjk}
        showCategories={page.styleIds.length > 2}
        showLatin={!page.extraCjk}
      />

      {page.cleaner ? <ZalgoCleaner locale={locale} /> : null}

      {/* 装饰组合:主样式输出再套一层装饰对 */}
      {page.wrapperRows && primaryStyle ? (
        <section aria-labelledby="wrap-heading" className="mt-10">
          <h2 id="wrap-heading" className="text-xl font-black">
            {ui.sections.combos}
          </h2>
          <p className="mt-1 text-sm text-ink-soft">{ui.sections.combosIntro(sampleInput)}</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {page.wrapperRows.map((row) => {
              const decorated = wrapSample(sampleInput, primaryStyle, row.left, row.right);
              const label =
                ui.wrapperLabels[row.label as keyof typeof ui.wrapperLabels] ?? row.label;
              return (
                <li key={row.label} className="card-pop p-3.5">
                  <p className="text-sm font-black">{label}</p>
                  <p className="result-text mt-2 text-xl leading-relaxed">{decorated}</p>
                  <p className="mt-1 text-[11px] text-ink-soft">
                    {ui.sections.structure}: {row.left} + … + {row.right}
                  </p>
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}

      <section aria-labelledby="steps-heading" className="mt-12">
        <h2 id="steps-heading" className="text-xl font-black">
          {ui.sections.steps}
        </h2>
        <Steps items={c.steps} />
      </section>

      <section aria-labelledby="about-heading" className="mt-12">
        <h2 id="about-heading" className="text-xl font-black">{c.about.heading}</h2>
        {c.about.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 16)} className="mt-3 text-sm leading-relaxed text-ink-soft">
            {paragraph}
          </p>
        ))}
      </section>

      {page.extraCjk ? null : <CompatNote locale={locale} />}

      {guides.length > 0 ? (
        <RelatedTools
          heading={ui.sections.relatedGuides}
          links={guides.map((guide) => ({
            href: guidePath(locale, guide.slug),
            title: guide.navName,
            description: guide.description,
          }))}
        />
      ) : null}

      <section aria-labelledby="faq-heading" className="mt-12">
        <h2 id="faq-heading" className="text-xl font-black">
          {ui.sections.faq}
        </h2>
        <Faq items={c.faq} />
      </section>

      {page.related.length > 0 ? (
        <RelatedTools
          links={relatedCards(locale, page.related)}
          heading={guides.length > 0 ? ui.sections.swapStyles : ui.sections.relatedTools}
        />
      ) : null}
    </div>
  );
}

import { convertText, withWrapper, type TextStyleId } from "@/lib/text-styles";

function wrapSample(sample: string, styleId: TextStyleId, left: string, right: string): string {
  return withWrapper(convertText(sample, styleId), [left, right]);
}
