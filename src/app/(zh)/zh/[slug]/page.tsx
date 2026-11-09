import { slugParams, slugMetadata, SlugPage } from "@/app/_shared/handlers";

export function generateStaticParams() {
  return slugParams("zh-cn");
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return slugMetadata("zh-cn", slug);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <SlugPage locale="zh-cn" slug={slug} />;
}
