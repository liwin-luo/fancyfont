import type { Metadata } from "next";
import Link from "next/link";
import { enOnlyMetadata } from "@/lib/metadata";
import { guidePath, guides } from "@/lib/guides";

export const metadata: Metadata = enOnlyMetadata("/learn/", {
  title: "FancyFont Guides — Step-by-Step How-Tos for Styled Text",
  description:
    "Plain-English guides for styled Unicode text: change your Instagram bio font, fix pastes that fail in PUBG and Free Fire, and see where styled names work.",
});

export default function LearnIndexPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">Guides</h1>
      <p className="mt-3 leading-relaxed text-ink-600">
        Step-by-step how-tos for styled Unicode text — the things a generator alone does not
        explain. English only for now; the generators themselves are available in{" "}
        <Link href="/" className="font-semibold text-brand-700 hover:text-brand-800">
          four other languages
        </Link>
        .
      </p>

      <div className="mt-8 space-y-4">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={guidePath(guide.slug)}
            className="card group block p-5 transition-colors hover:border-brand-300"
          >
            <h2 className="text-lg font-bold text-ink-900 group-hover:text-brand-700">{guide.h1}</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">{guide.description}</p>
            <p className="mt-3 text-xs text-ink-500">
              Updated <time dateTime={guide.updated}>{guide.updated}</time>
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
