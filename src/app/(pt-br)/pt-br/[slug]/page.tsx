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
  const stylePage = getStylePage("pt-br", slug);
  if (stylePage) {
    const copy = stylePage.copy["pt-br"];
    return pageMetadata("pt-br", `/${slug}/`, {
      title: resolvedStyleTitle(copy, slug, "pt-br"),
      description: copy.description,
    });
  }
  const platformPage = getPlatformPage("pt-br", slug);
  if (!platformPage) return {};
  const copy = platformPage.copy["pt-br"];
  return pageMetadata("pt-br", `/${slug}/`, {
    title: copy.title,
    description: copy.description,
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const stylePage = getStylePage("pt-br", slug);
  if (stylePage) return <StylePageTemplate page={stylePage} locale="pt-br" />;
  const platformPage = getPlatformPage("pt-br", slug);
  if (platformPage) return <PlatformPageTemplate page={platformPage} locale="pt-br" />;
  notFound();
}
