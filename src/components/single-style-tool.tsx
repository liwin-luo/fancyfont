"use client";

import { useMemo, useState } from "react";
import { convertText, getStyle, type TextStyleId } from "@/lib/text-styles";
import { CopyButton } from "@/components/copy-button";
import { PreviewOptions, ShareLinks } from "@/components/style-actions";
import { useToast } from "@/components/toast";
import { downloadTextPng } from "@/lib/export-image";
import { useLocale } from "@/components/locale-context";
import { getUi } from "@/lib/ui-strings";

const MAX_LENGTH = 120;

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2v8m0 0l3-3m-3 3L5 7M3 12.5h10" />
    </svg>
  );
}

export function SingleStyleTool({
  styleIds,
  defaultText,
}: {
  styleIds: TextStyleId[];
  defaultText: string;
}) {
  const [text, setText] = useState(defaultText);
  const [previewSize, setPreviewSize] = useState(24);
  const [transparentPng, setTransparentPng] = useState(false);
  const showToast = useToast();
  const locale = useLocale();
  const t = getUi(locale);
  const charCount = Math.min(text.length, MAX_LENGTH);
  const previewText = text.slice(0, MAX_LENGTH);

  const outputs = useMemo(
    () => styleIds.map((id) => ({ style: getStyle(id), text: convertText(previewText, id) })),
    [styleIds, previewText],
  );

  async function handleDownload(name: string, value: string) {
    const ok = await downloadTextPng(
      value,
      `fancyfont-${name.toLowerCase().replace(/\s+/g, "-")}.png`,
      { transparent: transparentPng },
    );
    showToast(ok ? t.common.savedAsPng : t.common.pngFailed);
  }

  return (
    <div className="card p-4 sm:p-6">
      <label htmlFor="style-page-input" className="mb-2 block text-sm font-semibold text-ink-700">
        {t.common.stylePageInputLabel}
      </label>
      <div className="flex gap-2">
        <input
          id="style-page-input"
          type="text"
          value={text}
          maxLength={MAX_LENGTH}
          onChange={(event) => setText(event.target.value)}
          placeholder={t.common.stylePageInputLabel}
          autoComplete="off"
          spellCheck={false}
          className="text-input"
        />
        {text.length > 0 && (
          <button
            type="button"
            onClick={() => setText("")}
            className="h-12 shrink-0 rounded-xl px-3 text-sm font-medium text-ink-600 transition-colors hover:bg-brand-50 hover:text-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
          >
            {t.common.clear}
          </button>
        )}
      </div>
      <p className="mt-2 text-xs text-ink-500">
        {charCount}/{MAX_LENGTH} {t.common.charactersInfo} · {t.common.browserOnly}
      </p>
      <PreviewOptions
        size={previewSize}
        onSize={setPreviewSize}
        transparent={transparentPng}
        onTransparent={setTransparentPng}
      />

      {charCount === 0 ? (
        <p className="mt-5 rounded-xl border border-dashed border-line bg-white/60 p-8 text-center text-sm text-ink-600">
          {t.common.typeToConvert}
        </p>
      ) : (
        <ul className="mt-5 space-y-3">
          {outputs.map(({ style, text: value }) => {
            const localName = t.styleNames[style.id];
            return (
              <li
                key={style.id}
                className="rounded-xl border border-line bg-white p-4 transition-colors hover:border-brand-200"
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className="text-[11px] font-semibold tracking-wider text-ink-500 uppercase"
                    title={style.note}
                  >
                    {localName}
                  </span>
                  <div className="flex shrink-0 items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleDownload(localName, value)}
                      aria-label={t.common.downloadPng(localName)}
                      className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-line bg-white px-3 text-sm font-medium text-ink-700 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 sm:h-9"
                    >
                      <DownloadIcon />
                      <span className="sm:hidden">PNG</span>
                    </button>
                    <CopyButton text={value} ariaLabel={t.common.copyStyle(localName)} />
                    <ShareLinks text={value} name={localName} />
                  </div>
                </div>
                <p
                  className="result-text mt-1 text-ink-900 select-all"
                  style={{ fontSize: previewSize }}
                >
                  {value}
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
