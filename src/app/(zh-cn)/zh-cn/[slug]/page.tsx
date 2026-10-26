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
  const stylePage = getStylePage("zh-cn", slug);
  if (stylePage) {
    const copy = stylePage.copy["zh-cn"];
    return pageMetadata("zh-cn", `/${slug}/`, {
      title: serpTitle(copy.h1, "zh-cn"),
      description: copy.description,
    });
  }
  const platformPage = getPlatformPage("zh-cn", slug);
  if (!platformPage) return {};
  const copy = platformPage.copy["zh-cn"];
  return pageMetadata("zh-cn", `/${slug}/`, {
    title: copy.title,
    description: copy.description,
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const stylePage = getStylePage("zh-cn", slug);
  if (stylePage) return <StylePageTemplate page={stylePage} locale="zh-cn" />;
  const platformPage = getPlatformPage("zh-cn", slug);
  if (platformPage) return <PlatformPageTemplate page={platformPage} locale="zh-cn" />;
  notFound();
}
