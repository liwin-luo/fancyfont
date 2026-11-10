// 指南页模板:Article + BreadcrumbList + FAQPage,正文按 section
// 类型渲染段落/列表/表格,页尾链回工具页。

import Link from "next/link";
import {
  Breadcrumbs,
  Bullets,
  Faq,
  JsonLd,
  RelatedTools,
  faqJsonLd,
} from "@/components/sections";
import { HeaderBand, SquiggleDivider } from "@/components/illustrations";
import { guidePath, type GuideDef, type GuideImage } from "@/lib/guides";
import { parseInlineLinks } from "@/lib/inline-links";
import { localePath, type Locale } from "@/lib/i18n";
import { breadcrumbJsonLd, workMeta } from "@/lib/schema";
import { getUi } from "@/lib/ui-strings";

/** 每篇指南的插图表情(竞品式分区图标,新粗野贴纸呈现)。 */
const GUIDE_EMOJI: Record<string, string> = {
  "what-are-unicode-fonts": "🔤",
  "why-boxes-appear": "📦",
  "name-length-limits": "📏",
  "screen-reader-safety": "🎧",
  "account-safety": "🛡️",
  "chinese-nickname-guide": "🏮",
  "platform-support": "📊",
  "pick-your-style": "🎨",
  "tiktok-bio-fonts": "🎵",
};

function formatDate(iso: string): string {
  return iso.replaceAll("-", ".");
}

/** 文章配图:显式宽高防 CLS,lazy 加载,figcaption 说明。 */
function GuideFigure({ image }: { image: GuideImage }) {
  return (
    <figure className="card-pop mt-5 overflow-hidden">
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading="lazy"
        decoding="async"
        className="block h-auto w-full"
      />
      <figcaption className="border-t-2 border-ink bg-paper px-4 py-2 text-xs font-bold text-ink-soft">
        {image.caption}
      </figcaption>
    </figure>
  );
}

export function GuidePageTemplate({ locale, guide }: { locale: Locale; guide: GuideDef }) {
  const ui = getUi(locale);
  const path = guidePath(locale, guide.slug);
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: guide.h1,
          description: guide.description,
          ...workMeta(),
          // 指南自带发布/更新时间,覆盖 workMeta 的全局时间戳。
          datePublished: guide.published,
          dateModified: guide.updated,
          mainEntityOfPage: path,
        }}
      />
      <JsonLd data={faqJsonLd(guide.faq)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: ui.breadcrumb.home, path: localePath(locale, "/") },
          { name: ui.breadcrumb.guides, path: guidePath(locale, "") },
          { name: guide.navName, path },
        ])}
      />

      <Breadcrumbs
        items={[
          { name: ui.breadcrumb.home, href: localePath(locale, "/") },
          { name: ui.breadcrumb.guides, href: guidePath(locale, "") },
          { name: guide.navName, href: path },
        ]}
      />

      {/* 页头插图带:表情贴纸 + 标题 */}
      <HeaderBand className="mt-4" glyphs={[GUIDE_EMOJI[guide.slug] ?? "✨"]}>
        <h1 className="text-2xl leading-tight font-black sm:text-4xl">{guide.h1}</h1>
      </HeaderBand>
      <p className="mt-3 text-xs font-bold text-ink-soft">
        {ui.datePublished} {formatDate(guide.published)} · {ui.dateUpdated} {formatDate(guide.updated)}
      </p>
      <SquiggleDivider className="mt-4" />

      <article>
        {guide.intro.map((paragraph) => (
          <p key={paragraph.slice(0, 16)} className="mt-3 text-sm leading-relaxed text-ink-soft">
            {paragraph}
          </p>
        ))}

        {guide.heroImage ? <GuideFigure image={guide.heroImage} /> : null}

        {guide.sections.map((section) => (
          <section key={section.heading} aria-labelledby={`sec-${section.heading}`}>
            <h2
              id={`sec-${section.heading}`}
              className="mt-10 border-l-4 border-pop-pink pl-3 text-xl font-black"
            >
              {section.heading}
            </h2>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph.slice(0, 16)} className="mt-3 text-sm leading-relaxed text-ink-soft">
                <InlineLinks text={paragraph} />
              </p>
            ))}
            {section.bullets ? <Bullets items={section.bullets} /> : null}
            {section.image ? <GuideFigure image={section.image} /> : null}
            {section.table ? (
              <div className="card-pop mt-4 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-ink bg-pop-yellow/60">
                      {section.table.head.map((cell) => (
                        <th key={cell} scope="col" className="px-4 py-2.5 text-left font-black">
                          {cell}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row) => (
                      <tr key={row[0]} className="border-b border-ink/10 last:border-b-0">
                        {row.map((cell, cellIndex) =>
                          cellIndex === 0 ? (
                            <th key={cell} scope="row" className="px-4 py-2.5 text-left font-bold whitespace-nowrap">
                              {cell}
                            </th>
                          ) : (
                            <td key={cellIndex} className="px-4 py-2.5 text-ink-soft">
                              {cell}
                            </td>
                          ),
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}
          </section>
        ))}
      </article>

      <section aria-labelledby="faq-heading" className="mt-12">
        <h2 id="faq-heading" className="text-xl font-black">
          {ui.sections.faq}
        </h2>
        <Faq items={guide.faq} />
      </section>

      <RelatedTools heading={ui.sections.tryIt} links={guide.relatedTools} />

      <p className="mt-10 text-sm">
        <Link href={guidePath(locale, "")} className="font-bold underline-offset-2 hover:underline">
          ← {ui.breadcrumb.guides}
        </Link>
      </p>
    </div>
  );
}

/** 正文行内链接:`[文字](/slug/)` → 站内 Link;`[文字](https://…)` → 普通 <a>(Step 4 扩展)。
 * 解析逻辑在 lib/inline-links.ts(纯函数,单测覆盖);只接受这两种格式,其余按纯文本渲染。 */
function InlineLinks({ text }: { text: string }) {
  const tokens = parseInlineLinks(text);
  if (tokens.length === 1 && tokens[0].kind === "text") return <>{tokens[0].value}</>;
  return (
    <>
      {tokens.map((token, index) => {
        if (token.kind === "text") return <span key={index}>{token.value}</span>;
        if (token.kind === "internal") {
          return (
            <Link
              key={index}
              href={token.href}
              className="font-bold text-ink underline decoration-pop-pink decoration-2 underline-offset-2 hover:decoration-ink"
            >
              {token.label}
            </Link>
          );
        }
        return (
          <a
            key={index}
            href={token.href}
            rel="noopener noreferrer"
            className="font-bold text-ink underline decoration-pop-pink decoration-2 underline-offset-2 hover:decoration-ink"
          >
            {token.label}
          </a>
        );
      })}
    </>
  );
}
