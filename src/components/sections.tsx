import Link from "next/link";
import { getUi } from "@/lib/ui-strings";
import { type Locale } from "@/lib/i18n";

export function CompatNote({ locale }: { locale: Locale }) {
  const t = getUi(locale);
  return (
    <div className="mt-10 rounded-xl border border-warning/20 bg-warning-bg p-4 text-sm leading-relaxed text-warning">
      <p>
        <strong className="font-semibold">{t.compat.lead}</strong> {t.compat.body}
      </p>
    </div>
  );
}

export function Steps({ items }: { items: string[] }) {
  return (
    <ol className="mt-4 space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-sm font-bold text-brand-700"
          >
            {index + 1}
          </span>
          <p className="pt-0.5 text-sm leading-relaxed text-ink-700">{item}</p>
        </li>
      ))}
    </ol>
  );
}

export interface RelatedLink {
  href: string;
  title: string;
  description: string;
}

export function RelatedTools({ locale, links }: { locale: Locale; links: RelatedLink[] }) {
  const t = getUi(locale);
  return (
    <section className="mt-12" aria-labelledby="related-heading">
      <h2 id="related-heading" className="text-xl font-bold text-ink-900">
        {t.sections.related}
      </h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="card group block p-4 transition-colors hover:border-brand-300"
          >
            <p className="font-semibold text-ink-900 group-hover:text-brand-700">{link.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-ink-600">{link.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export interface FaqItem {
  q: string;
  a: string;
}

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="mt-4 space-y-3">
      {items.map((item) => (
        <details
          key={item.q}
          className="group card px-4 py-3 open:border-brand-200 [&::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink-900 [&::-webkit-details-marker]:hidden">
            {item.q}
            <span
              aria-hidden="true"
              className="shrink-0 text-ink-500 transition-transform group-open:rotate-45"
            >
              ＋
            </span>
          </summary>
          <p className="mt-2 text-sm leading-relaxed text-ink-600">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
