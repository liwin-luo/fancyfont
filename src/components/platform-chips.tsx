import Link from "next/link";
import { platformPages } from "@/lib/platform-pages";
import { getUi } from "@/lib/ui-strings";
import { localePath, type Locale } from "@/lib/i18n";
import { PlatformGlyph, platformTone } from "@/components/platform-mark";
import type { PlatformPreviewId } from "@/lib/platform-preview";

const chipClass =
  "inline-flex h-9 items-center gap-1.5 rounded-full border px-3 text-sm font-medium whitespace-nowrap";

/** Horizontal platform filter. `active` is a platform slug, or "all" on the gaming page. */
export function PlatformChips({ locale, active }: { locale: Locale; active?: string }) {
  const t = getUi(locale);
  const chips: { slug: string; href: string; label: string; mark: PlatformPreviewId | "all" }[] = [
    { slug: "all", href: "/gaming-name-generator/", label: t.common.all, mark: "all" },
    ...platformPages.map((page) => ({
      slug: page.slug,
      href: `/${page.slug}/`,
      label: page.copy[locale].navName,
      mark: page.preview,
    })),
  ];

  return (
    <nav aria-label={t.tools.forPlatforms} className="-mx-1 overflow-x-auto px-1 pb-1">
      <ul className="flex w-max gap-2">
        {chips.map((chip) => {
          const on = chip.slug === active;
          const tone = platformTone[chip.mark];
          return (
            <li key={chip.slug}>
              <Link
                href={localePath(locale, chip.href)}
                aria-current={on ? "page" : undefined}
                className={
                  on
                    ? `${chipClass} border-transparent`
                    : `${chipClass} border-line bg-white text-ink-900 hover:border-ink-900`
                }
                style={on ? { background: tone.bg, color: tone.fg } : undefined}
              >
                <span className="inline-flex" style={on ? undefined : { color: tone.bg }}>
                  <PlatformGlyph id={chip.mark} className="h-3.5 w-3.5" />
                </span>
                {chip.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
