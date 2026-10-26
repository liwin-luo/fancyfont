import type { ReactNode } from "react";
import { privacyContent } from "@/lib/content/page-symbols-privacy";
import { contactEmail } from "@/lib/site";
import type { Locale } from "@/lib/i18n";

export interface LegalContent {
  h1: string;
  updated: string;
  sections: { h2: string; body: string }[];
}

function renderBody(body: string): ReactNode {
  const token = "{email}";
  const index = body.indexOf(token);
  if (index === -1) return body;
  return (
    <>
      {body.slice(0, index)}
      <a
        href={`mailto:${contactEmail}`}
        className="font-semibold text-brand-700 hover:text-brand-800"
      >
        {contactEmail}
      </a>
      {body.slice(index + token.length)}
    </>
  );
}

export function LegalPageTemplate({ content }: { content: LegalContent }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">{content.h1}</h1>
      <p className="mt-2 text-sm text-ink-500">{content.updated}</p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-ink-700">
        {content.sections.map((section) => (
          <section key={section.h2}>
            <h2 className="text-lg font-bold text-ink-900">{section.h2}</h2>
            <p className="mt-2">{renderBody(section.body)}</p>
          </section>
        ))}
      </div>
    </div>
  );
}

export function PrivacyPageTemplate({ locale }: { locale: Locale }) {
  return <LegalPageTemplate content={privacyContent[locale]} />;
}
