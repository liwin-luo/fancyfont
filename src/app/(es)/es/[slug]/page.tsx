import { notFound } from "next/navigation";
import { StylePageTemplate } from "@/components/style-page-template";
import { PlatformPageTemplate } from "@/components/platform-page-template";
import { stylePages, getStylePage } from "@/lib/style-pages";
import { platformPages, getPlatformPage } from "@/lib/platform-pages";
import { pageMetadata } from "@/lib/metadata";
import { styleSerpTitle } from "@/lib/serp-title";

export function generateStaticParams() {
  return [...stylePages, ...platformPages].map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const stylePage = getStylePage("es", slug);
  if (stylePage) {
    const copy = stylePage.copy["es"];
    return pageMetadata("es", `/${slug}/`, {
      title: styleSerpTitle(copy.h1, slug, "es"),
      description: copy.description,
    });
  }
  const platformPage = getPlatformPage("es", slug);
  if (!platformPage) return {};
  const copy = platformPage.copy["es"];
  return pageMetadata("es", `/${slug}/`, {
    title: copy.title,
    description: copy.description,
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const stylePage = getStylePage("es", slug);
  if (stylePage) return <StylePageTemplate page={stylePage} locale="es" />;
  const platformPage = getPlatformPage("es", slug);
  if (platformPage) return <PlatformPageTemplate page={platformPage} locale="es" />;
  notFound();
}
