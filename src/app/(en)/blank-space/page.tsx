import type { Metadata } from "next";
import { BlankSpaceTool } from "@/components/blank-space-tool";
import { Faq, JsonLd, RelatedTools, Steps, faqJsonLd } from "@/components/sections";
import { blankSpaceEn } from "@/lib/content/tools-en";
import { pageMetadata } from "@/lib/metadata";
import { workMeta } from "@/lib/schema";
import { guidesForPage, guidePath } from "@/lib/guides";
import { getSiteUrl } from "@/lib/site";

// 从旧站迁移的工具页,首版仅英文(无 hreflang 兄弟)。
export const metadata: Metadata = pageMetadata("en", "/blank-space/", blankSpaceEn.meta, ["en"]);

const siteUrl = getSiteUrl();

const webAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: blankSpaceEn.h1,
  url: `${siteUrl}/blank-space/`,
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  browserRequirements: "Requires JavaScript",
  description: blankSpaceEn.meta.description,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  ...workMeta(),
};

export default function BlankSpacePage() {
  const c = blankSpaceEn;
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <JsonLd data={webAppJsonLd} />
      <JsonLd data={faqJsonLd(c.faq)} />

      <header>
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">{c.h1}</h1>
        <p className="mt-3 leading-relaxed text-ink-soft">{c.intro}</p>
      </header>

      <div className="mt-8">
        <BlankSpaceTool />
      </div>

      <section className="mt-12" aria-labelledby="how-heading">
        <h2 id="how-heading" className="text-xl font-black">{c.stepsHeading}</h2>
        <Steps items={c.steps} />
      </section>

      <section className="mt-12" aria-labelledby="about-heading">
        <h2 id="about-heading" className="text-xl font-black">{c.aboutHeading}</h2>
        <div className="mt-3 space-y-3 text-sm leading-relaxed">
          {c.about.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </section>

      <RelatedTools links={c.related} heading="Related tools" />
      {guidesForPage("en", "blank-space").length > 0 ? (
        <RelatedTools
          heading="Related guides"
          links={guidesForPage("en", "blank-space").map((guide) => ({
            href: guidePath("en", guide.slug),
            title: guide.navName,
            description: guide.description,
          }))}
        />
      ) : null}

      <section className="mt-12" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="text-xl font-black">{c.faqHeading}</h2>
        <Faq items={c.faq} />
      </section>
    </div>
  );
}
