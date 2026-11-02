import { notFound } from "next/navigation";
import { StylePageTemplate } from "@/components/style-page-template";
import { PlatformPageTemplate } from "@/components/platform-page-template";
import { stylePages, getStylePage } from "@/lib/style-pages";
import { platformPages, getPlatformPage } from "@/lib/platform-pages";
import { pageMetadata } from "@/lib/metadata";
import { resolvedStyleTitle } from "@/lib/serp-title";

export function generateStaticParams() {
  return [...stylePages, ...platformPages].map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const stylePage = getStylePage("id", slug);
  if (stylePage) {
    const copy = stylePage.copy["id"];
    return pageMetadata("id", `/${slug}/`, {
      title: resolvedStyleTitle(copy, slug, "id"),
      description: copy.description,
    });
  }
  const platformPage = getPlatformPage("id", slug);
  if (!platformPage) return {};
  const copy = platformPage.copy["id"];
  return pageMetadata("id", `/${slug}/`, {
    title: copy.title,
    description: copy.description,
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const stylePage = getStylePage("id", slug);
  if (stylePage) return <StylePageTemplate page={stylePage} locale="id" />;
  const platformPage = getPlatformPage("id", slug);
  if (platformPage) return <PlatformPageTemplate page={platformPage} locale="id" />;
  notFound();
}
