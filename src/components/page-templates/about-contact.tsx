import Link from "next/link";
import { JsonLd } from "@/components/sections";
import { aboutContent, contactContent } from "@/lib/content/page-about-contact";
import { workMeta } from "@/lib/schema";
import { contactEmail, contentUpdated, getSiteUrl } from "@/lib/site";
import { getUi } from "@/lib/ui-strings";
import { localePath, type Locale } from "@/lib/i18n";

/** Renders copy containing the "{email}" token as a mailto link. */
function EmailText({ body }: { body: string }) {
  const token = "{email}";
  const index = body.indexOf(token);
  if (index === -1) return <>{body}</>;
  return (
    <>
      {body.slice(0, index)}
      <a href={`mailto:${contactEmail}`} className="font-semibold text-brand-700 hover:text-brand-800">
        {contactEmail}
      </a>
      {body.slice(index + token.length)}
    </>
  );
}

function UpdatedLine({ label }: { label: string }) {
  return (
    <p className="mt-2 text-sm text-ink-500">
      {label} <time dateTime={contentUpdated}>{contentUpdated}</time>
    </p>
  );
}

export function AboutPageTemplate({ locale }: { locale: Locale }) {
  const c = aboutContent[locale];
  const t = getUi(locale);
  const siteUrl = getSiteUrl();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: c.h1,
    url: `${siteUrl}${localePath(locale, "/about/")}`,
    description: c.meta.description,
    isPartOf: { "@type": "WebSite", name: "FancyFont", url: siteUrl },
    ...workMeta(),
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <JsonLd data={jsonLd} />
      <h1 className="text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">{c.h1}</h1>
      <UpdatedLine label={t.tools.lastUpdated} />
      <p className="mt-4 text-lg leading-relaxed text-ink-600">{c.intro}</p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-ink-700">
        {c.sections.map((section) => (
          <section key={section.h2}>
            <h2 className="text-lg font-bold text-ink-900">{section.h2}</h2>
            <p className="mt-2">{section.body}</p>
          </section>
        ))}
        <section>
          <h2 className="text-lg font-bold text-ink-900">{c.contactHeading}</h2>
          <p className="mt-2">
            <EmailText body={c.contactBody} />{" "}
            <Link
              href={localePath(locale, "/contact/")}
              className="font-semibold text-brand-700 hover:text-brand-800"
            >
              {t.tools.contact} →
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
}

export function ContactPageTemplate({ locale }: { locale: Locale }) {
  const c = contactContent[locale];
  const t = getUi(locale);
  const siteUrl = getSiteUrl();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: c.h1,
    url: `${siteUrl}${localePath(locale, "/contact/")}`,
    description: c.meta.description,
    isPartOf: { "@type": "WebSite", name: "FancyFont", url: siteUrl },
    ...workMeta(),
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <JsonLd data={jsonLd} />
      <h1 className="text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">{c.h1}</h1>
      <UpdatedLine label={t.tools.lastUpdated} />
      <p className="mt-4 text-lg leading-relaxed text-ink-600">{c.intro}</p>

      <p className="mt-6 text-sm font-semibold tracking-wider text-ink-500 uppercase">
        {c.emailLabel}
      </p>
      <p className="mt-2">
        <a
          href={`mailto:${contactEmail}`}
          className="text-2xl font-extrabold text-brand-700 hover:text-brand-800"
        >
          {contactEmail}
        </a>
      </p>

      <h2 className="mt-10 text-xl font-bold text-ink-900">{c.topicsHeading}</h2>
      <ul className="mt-4 space-y-3">
        {c.topics.map((topic) => (
          <li key={topic.title} className="card p-4">
            <h3 className="font-bold text-ink-900">{topic.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-ink-600">{topic.body}</p>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-sm leading-relaxed text-ink-600">{c.responseNote}</p>
    </div>
  );
}
