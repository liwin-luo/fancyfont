"use client";

import { useMemo, useState } from "react";
import { downloadTextPng } from "@/lib/export-image";
import { crazyLevels, generateCrazyVariants, type CrazyLevelId } from "@/lib/crazy-style";
import { measureText, sliceGraphemes } from "@/lib/measure";
import { CopyButton } from "@/components/copy-button";
import { useToast } from "@/components/toast";
import { useLocale } from "@/components/locale-context";
import { getUi } from "@/lib/ui-strings";

const MAX_LENGTH = 120;
const VARIANT_COUNT = 6;

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2v8m0 0l3-3m-3 3L5 7M3 12.5h10" />
    </svg>
  );
}

export function CrazyTextTool({ defaultText }: { defaultText: string }) {
  const locale = useLocale();
  const t = getUi(locale);
  const showToast = useToast();
  const [text, setText] = useState(defaultText);
  const [level, setLevel] = useState<CrazyLevelId>("wild");
  const [nonce, setNonce] = useState(0);
  const source = sliceGraphemes(text, MAX_LENGTH);
  const count = measureText(source).graphemes;
  const variants = useMemo(
    () => generateCrazyVariants(source, level, nonce, VARIANT_COUNT),
    [source, level, nonce],
  );

  async function savePng(variantId: string, value: string) {
    const ok = await downloadTextPng(value, `crazyfont-${variantId}.png`);
    showToast(ok ? t.common.savedAsPng : t.common.pngFailed);
  }

  return (
    <div>
      <div className="card p-4 sm:p-6">
        <label htmlFor="crazy-input" className="mb-2 block text-sm font-semibold text-ink-700">
          {t.common.yourText}
        </label>
        <input
          id="crazy-input"
          type="text"
          value={text}
          onChange={(event) => setText(sliceGraphemes(event.target.value, MAX_LENGTH))}
          placeholder={t.common.yourText}
          autoComplete="off"
          spellCheck={false}
          className="text-input"
        />
        <p className="mt-2 text-xs text-ink-500">
          {count}/{MAX_LENGTH} {t.common.charactersInfo} · {t.common.browserOnly}
        </p>

        <div className="mt-4">
          <p className="mb-2 text-sm font-semibold text-ink-700">{t.common.filterStyles}</p>
          <div role="group" aria-label={t.common.filterStyles} className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
            {crazyLevels.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={level === item.id}
                onClick={() => setLevel(item.id)}
                className={`h-9 shrink-0 whitespace-nowrap rounded-full border px-4 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 ${
                  level === item.id
                    ? "border-brand-600 bg-brand-100 text-brand-800"
                    : "border-line bg-white text-ink-700 hover:border-brand-300 hover:bg-brand-50"
                }`}
              >
                {t.crazyLevelNames[item.id]}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setNonce((n) => n + 1)}
              className="ml-auto inline-flex h-9 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-line bg-white px-4 text-sm font-semibold text-ink-700 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
            >
              <span aria-hidden="true">↻</span> {t.common.shuffle}
            </button>
          </div>
        </div>
      </div>

      {count === 0 ? (
        <p className="mt-6 rounded-xl border border-dashed border-line bg-white/60 p-8 text-center text-sm text-ink-600">
          {t.common.typeToSee(VARIANT_COUNT)}
        </p>
      ) : (
        <ul className="mt-6 space-y-3">
          {variants.map((variant) => (
            <li
              key={variant.id}
              className="rounded-xl border border-line bg-surface p-4 transition-colors hover:border-brand-200"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-500">
                    {t.crazyLevelNames[variant.level]}
                  </span>
                  <p className="result-text mt-1 break-all text-2xl font-medium text-ink-900 select-all">
                    {variant.text}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <button
                    type="button"
                    onClick={() => void savePng(variant.id, variant.text)}
                    aria-label={t.common.downloadPng(t.crazyLevelNames[variant.level])}
                    className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-line bg-white px-3 text-sm font-medium text-ink-700 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 sm:h-9"
                  >
                    <DownloadIcon />
                    <span className="sm:hidden">PNG</span>
                  </button>
                  <CopyButton text={variant.text} ariaLabel={t.common.copy} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
