import { slugParams, slugMetadata, SlugPage } from "@/app/_shared/handlers";

export function generateStaticParams() {
  return slugParams("es");
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return slugMetadata("es", slug);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <SlugPage locale="es" slug={slug} />;
}
