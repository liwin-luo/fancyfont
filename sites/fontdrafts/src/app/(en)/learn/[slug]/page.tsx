import { guideParams, guidePageMetadata, GuideArticlePage } from "@/app/_shared/handlers";

export function generateStaticParams() {
  return guideParams("en");
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return guidePageMetadata("en", slug);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <GuideArticlePage locale="en" slug={slug} />;
}
