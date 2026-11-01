import Link from "next/link";
import { Fragment } from "react";
import { Faq, JsonLd, RelatedTools, Steps, faqJsonLd } from "@/components/sections";
import { guidePath, type GuideDef } from "@/lib/guides";
import { getSiteUrl } from "@/lib/site";
import { siteName } from "@/lib/site";
import { workMeta } from "@/lib/schema";

const siteUrl = getSiteUrl();

/**
 * English-only guide page. Related-tools cards loop back into the generators
 * so the guide passes intent on to the tool pages.
 */
export function GuidePageTemplate({ guide }: { guide: GuideDef }) {
  const path = guidePath(guide.slug);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.h1,
    description: guide.description,
    url: `${siteUrl}${path}`,
    mainEntityOfPage: `${siteUrl}${path}`,
    ...workMeta(),
    datePublished: guide.published,
    dateModified: guide.updated,
    publisher: { "@type": "Organization", name: siteName, url: `${siteUrl}/about/` },
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <JsonLd data={articleJsonLd} />
      <JsonLd data={faqJsonLd(guide.faq)} />

      <p className="text-sm font-semibold text-brand-700">
        <Link href="/learn/" className="hover:text-brand-800">
          Guides
        </Link>
      </p>

      <header className="mt-2">
        <h1 className="text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">{guide.h1}</h1>
        <p className="mt-3 text-xs text-ink-500">
          Published <time dateTime={guide.published}>{guide.published}</time> · Updated{" "}
          <time dateTime={guide.updated}>{guide.updated}</time>
        </p>
      </header>

      <div className="mt-6 space-y-4">
        {guide.intro.map((paragraph) => (
          <p key={paragraph.slice(0, 32)} className="leading-relaxed text-ink-700">
            {paragraph}
          </p>
        ))}
      </div>

      {guide.sections.map((section) => (
        <section key={section.heading} className="mt-10" aria-labelledby={sectionId(section.heading)}>
          <h2 id={sectionId(section.heading)} className="text-xl font-bold text-ink-900">
            {section.heading}
          </h2>
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="mt-3 leading-relaxed text-ink-600">
              {paragraph}
            </p>
          ))}
          {section.steps && <Steps items={section.steps} />}
          {section.bullets && (
            <ul className="mt-3 space-y-2">
              {section.bullets.map((bullet) => (
                <li key={bullet.slice(0, 32)} className="flex items-start gap-2 text-sm leading-relaxed text-ink-600">
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                  {bullet}
                </li>
              ))}
            </ul>
          )}
          {section.image && (
            <figure className="mt-5">
              <img
                src={section.image.src}
                alt={section.image.alt}
                width={section.image.width}
                height={section.image.height}
                loading="lazy"
                decoding="async"
                className="w-full rounded-xl border border-line bg-surface"
              />
              <figcaption className="mt-2 text-xs leading-relaxed text-ink-500">
                {section.image.caption}
              </figcaption>
            </figure>
          )}
          {section.table && (
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-sm">
                <thead>
                  <tr>
                    {section.table.head.map((head) => (
                      <th
                        key={head}
                        scope="col"
                        className="border-b border-line px-3 py-2 text-left font-semibold text-ink-900"
                      >
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.table.rows.map((row) => (
                    <tr key={row[0]} className="border-b border-line/60 align-top">
                      {row.map((cell, index) => (
                        <td key={index} className="px-3 py-2 text-ink-600">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {section.seeAlso && section.seeAlso.length > 0 && (
            <p className="mt-3 text-sm text-ink-600">
              See also:{" "}
              {section.seeAlso.map((link, index) => (
                <Fragment key={link.href}>
                  {index > 0 && " · "}
                  <Link href={link.href} className="font-semibold text-brand-700 hover:text-brand-800">
                    {link.label}
                  </Link>
                </Fragment>
              ))}
            </p>
          )}
        </section>
      ))}

      <RelatedTools locale="en" links={guide.relatedTools} />

      <section className="mt-12" aria-labelledby="guide-faq-heading">
        <h2 id="guide-faq-heading" className="text-xl font-bold text-ink-900">
          Frequently asked questions
        </h2>
        <Faq items={guide.faq} />
      </section>
    </div>
  );
}

function sectionId(heading: string): string {
  return `guide-${heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
}
