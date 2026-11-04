"use client";

import { useLocale } from "@/components/locale-context";
import { useToast } from "@/components/toast";
import { getUi } from "@/lib/ui-strings";

/**
 * Footer "bookmark this site" link. Browsers cannot add bookmarks
 * programmatically, so the button surfaces the platform-correct hint:
 * the keyboard shortcut on pointer devices, the share menu on touch.
 */
export function BookmarkButton() {
  const locale = useLocale();
  const t = getUi(locale);
  const showToast = useToast();

  function onClick() {
    const isApple = /Mac|iPhone|iPad|iPod/i.test(navigator.platform ?? navigator.userAgent);
    const keys = isApple ? "⌘ D" : "Ctrl D";
    const touch = window.matchMedia("(pointer: coarse)").matches;
    showToast(touch ? t.tools.bookmarkMobile : t.tools.bookmarkHint(keys));
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-1 text-xs font-medium text-ink-500 transition-colors hover:text-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
    >
      <span aria-hidden="true">★</span> {t.tools.bookmarkLabel}
    </button>
  );
}
