import { notFound } from "next/navigation";
import { StylePageTemplate } from "@/components/style-page-template";
import { PlatformPageTemplate } from "@/components/platform-page-template";
import { stylePages, getStylePage } from "@/lib/style-pages";
import { platformPages, getPlatformPage } from "@/lib/platform-pages";
import { pageMetadata } from "@/lib/metadata";
import { serpTitle } from "@/lib/serp-title";

export function generateStaticParams() {
  return [...stylePages, ...platformPages].map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const stylePage = getStylePage("en", slug);
  if (stylePage) {
    const copy = stylePage.copy["en"];
    return pageMetadata("en", `/${slug}/`, {
      title: serpTitle(copy.h1, "en"),
      description: copy.description,
    });
  }
  const platformPage = getPlatformPage("en", slug);
  if (!platformPage) return {};
  const copy = platformPage.copy["en"];
  return pageMetadata("en", `/${slug}/`, {
    title: copy.title,
    description: copy.description,
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const stylePage = getStylePage("en", slug);
  if (stylePage) return <StylePageTemplate page={stylePage} locale="en" />;
  const platformPage = getPlatformPage("en", slug);
  if (platformPage) return <PlatformPageTemplate page={platformPage} locale="en" />;
  notFound();
}
