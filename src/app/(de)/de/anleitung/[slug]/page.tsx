import { guideParams, guidePageMetadata, GuideArticlePage } from "@/app/_shared/handlers";

export function generateStaticParams() {
  return guideParams("de");
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return guidePageMetadata("de", slug);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <GuideArticlePage locale="de" slug={slug} />;
}
