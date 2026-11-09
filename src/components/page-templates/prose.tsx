// 法务/信息页共享模板:标题 + 段落 + 小节。内容对象按 locale 传入。

import { localePath, type Locale } from "@/lib/i18n";
import { Breadcrumbs } from "@/components/sections";

export interface ProseSection {
  heading: string;
  paragraphs: string[];
}

export interface ProseContent {
  navName: string;
  h1: string;
  intro?: string[];
  sections: ProseSection[];
}

export function ProsePageTemplate({
  locale,
  content,
}: {
  locale: Locale;
  content: ProseContent;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <Breadcrumbs
        items={[
          { name: localeHomeName(locale), href: localePath(locale, "/") },
          { name: content.navName, href: localePath(locale, "/") },
        ]}
      />
      <h1 className="mt-4 text-3xl font-black sm:text-4xl">{content.h1}</h1>
      {content.intro?.map((paragraph) => (
        <p key={paragraph.slice(0, 16)} className="mt-3 text-sm leading-relaxed text-ink-soft">
          {paragraph}
        </p>
      ))}
      {content.sections.map((section) => (
        <section key={section.heading} className="mt-10">
          <h2 className="text-xl font-black">{section.heading}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 16)} className="mt-3 text-sm leading-relaxed text-ink-soft">
              {paragraph}
            </p>
          ))}
        </section>
      ))}
    </div>
  );
}

import { getUi } from "@/lib/ui-strings";

function localeHomeName(locale: Locale): string {
  return getUi(locale).breadcrumb.home;
}
