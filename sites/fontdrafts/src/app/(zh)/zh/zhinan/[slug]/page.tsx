import { guideParams, guidePageMetadata, GuideArticlePage } from "@/app/_shared/handlers";

export function generateStaticParams() {
  return guideParams("zh-cn");
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return guidePageMetadata("zh-cn", slug);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <GuideArticlePage locale="zh-cn" slug={slug} />;
}
