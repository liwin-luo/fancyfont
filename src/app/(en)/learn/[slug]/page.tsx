import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuidePageTemplate } from "@/components/guide-page-template";
import { enOnlyMetadata } from "@/lib/metadata";
import { getGuide, guidePath, guides } from "@/lib/guides";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return enOnlyMetadata(guidePath(guide.slug), {
    title: guide.title,
    description: guide.description,
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();
  return <GuidePageTemplate guide={guide} />;
}
