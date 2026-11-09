// 共享 section 组件:结构化数据注入、FAQ、步骤、面包屑、相关链接。
// 所有组件都是服务端渲染,零客户端 JS;文案由调用方按 locale 传入。

import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { getUi } from "@/lib/ui-strings";

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function faqJsonLd(items: { q: string; a: string }[]) {
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

export interface BreadcrumbItem {
  name: string;
  href: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="面包屑" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-1.5">
            {index > 0 ? (
              <span aria-hidden="true" className="text-ink-soft">
                →
              </span>
            ) : null}
            {index === items.length - 1 ? (
              <span aria-current="page" className="font-bold">
                {item.name}
              </span>
            ) : (
              <Link href={item.href} className="font-bold hover:underline">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function Steps({ items }: { items: string[] }) {
  return (
    <ol className="mt-6 space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border-2 border-ink bg-pop-yellow text-sm font-black shadow-pop-sm"
          >
            {index + 1}
          </span>
          <p className="pt-1 text-sm leading-relaxed text-ink-soft">{item}</p>
        </li>
      ))}
    </ol>
  );
}

export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft">
          <span aria-hidden="true" className="mt-0.5 font-black text-pop-pink">
            ■
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export interface RelatedLink {
  href: string;
  title: string;
  description: string;
}

export function RelatedTools({
  links,
  heading = "相关工具",
  id = "related-heading",
}: {
  links: RelatedLink[];
  heading?: string;
  id?: string;
}) {
  if (links.length === 0) return null;
  return (
    <section className="mt-12" aria-labelledby={id}>
      <h2 id={id} className="text-xl font-black">
        {heading}
      </h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {links.map((linkItem) => (
          <Link
            key={linkItem.href}
            href={linkItem.href}
            className="card-pop group block p-4 transition-all duration-100 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-pop-sm"
          >
            <p className="font-black group-hover:text-pop-pink">{linkItem.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-ink-soft">{linkItem.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="mt-4 space-y-3">
      {items.map((item) => (
        <details
          key={item.q}
          className="card-pop group px-4 py-3 open:shadow-pop-lg [&::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-black [&::-webkit-details-marker]:hidden">
            {item.q}
            <span
              aria-hidden="true"
              className="shrink-0 font-black transition-transform group-open:rotate-45"
            >
              ＋
            </span>
          </summary>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CompatNote({ locale }: { locale: Locale }) {
  const ui = getUi(locale);
  return (
    <div className="mt-10 rounded-xl border-2 border-ink bg-pop-yellow/40 p-4 text-sm leading-relaxed text-ink-soft shadow-pop-sm">
      <p>{ui.compatNote}</p>
    </div>
  );
}

/** 现成示例昵称:一键复制的成品卡片(平台页用)。 */
export function ExampleChips({ examples }: { examples: string[] }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2.5">
      {examples.map((example) => (
        <li key={example} className="sticker bg-paper text-base">
          {example}
        </li>
      ))}
    </ul>
  );
}

export function LimitsTable({ limits }: { limits: { label: string; value: string }[] }) {
  return (
    <div className="card-pop mt-4 overflow-hidden">
      <table className="w-full text-sm">
        <tbody>
          {limits.map((row, index) => (
            <tr key={row.label} className={index % 2 === 0 ? "bg-paper/60" : ""}>
              <th scope="row" className="border-r-2 border-ink px-4 py-2.5 text-left font-black whitespace-nowrap">
                {row.label}
              </th>
              <td className="px-4 py-2.5 text-ink-soft">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
