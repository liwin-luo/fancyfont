import { slugParams, slugMetadata, SlugPage } from "@/app/_shared/handlers";

export function generateStaticParams() {
  return slugParams("pt-br");
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return slugMetadata("pt-br", slug);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <SlugPage locale="pt-br" slug={slug} />;
}
