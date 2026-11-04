"use client";

import { useMemo, useState } from "react";
import { stripZalgo } from "@/lib/zalgo-clean";
import { measureText, sliceGraphemes } from "@/lib/measure";
import { CopyButton } from "@/components/copy-button";
import { useToast } from "@/components/toast";
import { useLocale } from "@/components/locale-context";
import { getUi } from "@/lib/ui-strings";

const MAX_LENGTH = 500;

/**
 * The "clean" half of the glitch page's loop: generate zalgo above, copy a
 * result, then paste (or read straight from the clipboard) here to strip
 * the stacked marks back off.
 */
export function ZalgoCleaner() {
  const locale = useLocale();
  const t = getUi(locale);
  const showToast = useToast();
  const [text, setText] = useState("");
  const source = sliceGraphemes(text, MAX_LENGTH);
  const count = measureText(source).graphemes;
  const { text: cleaned, removed } = useMemo(() => stripZalgo(source), [source]);

  async function pasteFromClipboard() {
    try {
      const value = await navigator.clipboard.readText();
      if (value) {
        setText(sliceGraphemes(value, MAX_LENGTH));
      } else {
        showToast(t.common.zalgoClean.pasteFailed);
      }
    } catch {
      showToast(t.common.zalgoClean.pasteFailed);
    }
  }

  return (
    <section className="card mt-8 p-4 sm:p-6" aria-labelledby="zalgo-clean-heading">
      <h2 id="zalgo-clean-heading" className="text-lg font-bold text-ink-900">
        {t.common.zalgoClean.heading}
      </h2>
      <label htmlFor="zalgo-clean-input" className="mt-4 mb-2 block text-sm font-semibold text-ink-700">
        {t.common.zalgoClean.inputLabel}
      </label>
      <textarea
        id="zalgo-clean-input"
        rows={3}
        value={text}
        onChange={(event) => setText(sliceGraphemes(event.target.value, MAX_LENGTH))}
        className="text-input h-auto py-2"
      />
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => void pasteFromClipboard()}
          className="h-9 rounded-lg border border-line bg-white px-3 text-sm font-semibold text-ink-700 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
        >
          {t.common.zalgoClean.pasteButton}
        </button>
        <p className="text-xs text-ink-500">
          {count}/{MAX_LENGTH} {t.common.charactersInfo}
        </p>
      </div>
      {count === 0 ? (
        <p className="mt-4 rounded-xl border border-dashed border-line bg-white/60 p-6 text-center text-sm text-ink-600">
          {t.common.zalgoClean.empty}
        </p>
      ) : (
        <div className="mt-4 rounded-xl border border-line bg-surface p-4">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-500">
            {t.common.zalgoClean.resultLabel}
          </p>
          <p className="result-text mt-2 break-all text-lg text-ink-900 select-all">{cleaned}</p>
          <p className="mt-2 text-xs text-ink-500">{t.common.zalgoClean.removed(removed)}</p>
          <div className="mt-3">
            <CopyButton text={cleaned} ariaLabel={t.common.copy} />
          </div>
        </div>
      )}
    </section>
  );
}
