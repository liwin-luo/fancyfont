import { guideParams, guidePageMetadata, GuideArticlePage } from "@/app/_shared/handlers";

export function generateStaticParams() {
  return guideParams("pt-br");
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return guidePageMetadata("pt-br", slug);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <GuideArticlePage locale="pt-br" slug={slug} />;
}
