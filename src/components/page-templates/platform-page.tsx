// 平台专页模板:字数限制表 + 兼容性清单 + 现成示例 + 生成器 +
// 步骤 + 指南反链 + FAQ,配齐 WebApplication / FAQPage / BreadcrumbList。

import { FancyTextTool } from "@/components/fancy-text-tool";
import { CopyChips } from "@/components/copy-chips";
import { HeaderBand, PhoneMockup, SquiggleDivider } from "@/components/illustrations";
import {
  Breadcrumbs,
  Bullets,
  ComparisonTable,
  ExampleChips,
  Faq,
  JsonLd,
  LimitsTable,
  RelatedTools,
  Steps,
  faqJsonLd,
} from "@/components/sections";
import { contextualLinks } from "@/lib/contextual-links";
import { guidesForPage, guidePath } from "@/lib/guides";
import { localePath, type Locale } from "@/lib/i18n";
import { breadcrumbJsonLd, howToJsonLd, workMeta } from "@/lib/schema";
import { hubPath } from "@/lib/hubs";
import { getUi } from "@/lib/ui-strings";
import type { PlatformPageDef } from "@/lib/platform-pages";

export function PlatformPageTemplate({ locale, page }: { locale: Locale; page: PlatformPageDef }) {
  const ui = getUi(locale);
  const c = page.copy[locale]!;
  const guides = guidesForPage(locale, page.slug);
  const neighbors = contextualLinks(locale, page.slug);
  const lp = (slug: string) => localePath(locale, `/${slug}/`);
  const placeholder = locale === "zh-cn" ? "清风徐来" : locale === "en" ? "sunset" : locale === "es" ? "luna" : "estrela";

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
          { name: ui.nav.platforms, path: hubPath(locale, "platforms") },
          { name: c.navName, path: lp(page.slug) },
        ])}
      />

      <Breadcrumbs
        items={[
          { name: ui.breadcrumb.home, href: localePath(locale, "/") },
          { name: ui.nav.platforms, href: hubPath(locale, "platforms") },
          { name: c.navName, href: lp(page.slug) },
        ]}
      />

      {/* 页头插图带:主题底色 + 专属图案(游戏页配游戏视觉) */}
      <HeaderBand
        className="mt-4"
        bandClass={page.theme?.band}
        motif={page.theme?.motif}
        artSrc={page.theme?.art}
        glyphs={[c.examples[0] ?? ""]}
      >
        <h1 className="text-2xl leading-tight font-black sm:text-4xl">{c.h1}</h1>
      </HeaderBand>
      {c.intro.map((paragraph) => (
        <p key={paragraph.slice(0, 16)} className="mt-3 text-sm leading-relaxed text-ink-soft">
          {paragraph}
        </p>
      ))}

      {/* 字数规则 + 手机样机插图(桌面并排) */}
      <div className="mt-10 grid items-start gap-8 sm:grid-cols-[1fr_260px]">
        <section aria-labelledby="limits-heading">
          <h2 id="limits-heading" className="text-xl font-black">
            {ui.platform.limits(c.platform)}
          </h2>
          <LimitsTable limits={c.limits} />
        </section>
        <PhoneMockup
          nickname={c.examples[0] ?? ""}
          platform={c.platform}
          bio={locale === "zh-cn" ? "简介也可以用花式字符 ✨" : locale === "pt-br" ? "a bio também aceita ✨" : locale === "es" ? "la bio también acepta ✨" : "bios accept fancy text too ✨"}
        />
      </div>

      <section aria-labelledby="compat-heading" className="mt-10">
        <h2 id="compat-heading" className="text-xl font-black">
          {ui.platform.compat}
        </h2>
        <Bullets items={c.compat} />
      </section>

      <section aria-labelledby="examples-heading" className="mt-10">
        <h2 id="examples-heading" className="text-xl font-black">
          {ui.platform.examples}
        </h2>
        <p className="mt-1 text-sm text-ink-soft">{ui.platform.examplesIntro}</p>
        <ExampleChips examples={c.examples} />
      </section>

      {/* 分组示例区(一键复制)+ 字段对照表:可选区块,文案随语言。 */}
      {c.copyGroups?.map((group, groupIndex) => (
        <section key={group.heading} aria-labelledby={`copy-group-${groupIndex}`} className="mt-10">
          <h2 id={`copy-group-${groupIndex}`} className="text-xl font-black">
            {group.heading}
          </h2>
          {group.note ? <p className="mt-1 text-sm text-ink-soft">{group.note}</p> : null}
          {group.groups.map((sub, subIndex) => (
            <div key={subIndex}>
              {sub.label ? <h3 className="mt-5 text-base font-black">{sub.label}</h3> : null}
              <CopyChips items={sub.items} copiedLabel={ui.tool.copied} />
            </div>
          ))}
        </section>
      ))}
      {c.fieldTable ? (
        <section aria-labelledby="fields-heading" className="mt-10">
          <h2 id="fields-heading" className="text-xl font-black">
            {c.fieldTable.heading}
          </h2>
          {c.fieldTable.intro ? <p className="mt-1 text-sm text-ink-soft">{c.fieldTable.intro}</p> : null}
          <ComparisonTable columns={c.fieldTable.columns} rows={c.fieldTable.rows} />
        </section>
      ) : null}

      <SquiggleDivider className="mt-10" />

      <section aria-label="生成器" className="mt-8">
        <FancyTextTool
          locale={locale}
          styleIds={page.styleIds[locale] ?? []}
          placeholder={placeholder}
          showCjk={page.cjkFirst?.[locale] ?? false}
        />
      </section>

      <section aria-labelledby="steps-heading" className="mt-12">
        <h2 id="steps-heading" className="text-xl font-black">
          {ui.sections.steps}
        </h2>
        <Steps items={c.steps} />
      </section>

      {guides.length > 0 ? (
        <RelatedTools
          id="related-guides"
          heading={ui.sections.relatedGuides}
          links={guides.map((guide) => ({
            href: guidePath(locale, guide.slug),
            title: guide.navName,
            description: guide.description,
          }))}
        />
      ) : null}

      <RelatedTools id="related-tools" heading={ui.sections.relatedTools} links={neighbors} />

      <section aria-labelledby="faq-heading" className="mt-12">
        <h2 id="faq-heading" className="text-xl font-black">
          {ui.platform.faq(c.platform)}
        </h2>
        <Faq items={c.faq} />
      </section>
    </div>
  );
}
