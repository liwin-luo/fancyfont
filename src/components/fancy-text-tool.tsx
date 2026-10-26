"use client";

import { useMemo, useState } from "react";
import {
  convertAll,
  styleCategories,
  type ConvertedText,
} from "@/lib/text-styles";
import { CopyButton } from "@/components/copy-button";
import { PreviewOptions, ShareLinks } from "@/components/style-actions";
import { useToast } from "@/components/toast";
import { copyText } from "@/lib/copy";
import { downloadTextPng } from "@/lib/export-image";
import { useLocalList } from "@/lib/storage";
import { useLocale } from "@/components/locale-context";
import { getUi } from "@/lib/ui-strings";

const MAX_LENGTH = 120;
const FAVORITES_KEY = "fancyfont:favorite-styles";

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" aria-hidden="true" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
      <path d="M10 2.5l2.35 4.76 5.25.76-3.8 3.7.9 5.24L10 14.52l-4.7 2.44.9-5.24-3.8-3.7 5.25-.76L10 2.5z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2v8m0 0l3-3m-3 3L5 7M3 12.5h10" />
    </svg>
  );
}

export function FancyTextTool({ defaultText = "Your Name" }: { defaultText?: string }) {
  const [text, setText] = useState(defaultText);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [previewSize, setPreviewSize] = useState(18);
  const [transparentPng, setTransparentPng] = useState(false);
  const favorites = useLocalList(FAVORITES_KEY);
  const showToast = useToast();
  const locale = useLocale();
  const t = getUi(locale);

  const charCount = Math.min(text.length, MAX_LENGTH);
  const all = useMemo(
    () =>
      convertAll(text.slice(0, MAX_LENGTH)).map((result) => ({
        ...result,
        localName: t.styleNames[result.id],
      })),
    [text, t],
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return all.filter((result) => {
      if (category === "favorites") return favorites.items.includes(result.id);
      if (category && result.category !== category) return false;
      if (!q) return true;
      return (
        result.localName.toLowerCase().includes(q) ||
        result.name.toLowerCase().includes(q) ||
        result.note.toLowerCase().includes(q) ||
        t.styleCategoryNames[result.category].toLowerCase().includes(q)
      );
    });
  }, [all, category, query, favorites.items, t]);

  async function handleDownload(result: ConvertedText & { localName: string }) {
    const ok = await downloadTextPng(result.text, `fancyfont-${result.id}.png`, {
      transparent: transparentPng,
    });
    showToast(ok ? t.common.savedAsPng : t.common.pngFailed);
  }

  async function copyFavorites() {
    const lines = all
      .filter((result) => favorites.items.includes(result.id))
      .map((result) => result.text)
      .filter((line) => line.trim().length > 0);
    const ok = lines.length > 0 && (await copyText(lines.join("\n")));
    showToast(ok ? t.common.copiedToClipboard : t.common.copyFailed);
  }

  const chips: { id: string; name: string }[] = [
    { id: "all", name: t.common.all },
    ...styleCategories.map((c) => ({ id: c.id, name: t.styleCategoryNames[c.id] })),
    {
      id: "favorites",
      name: `★ ${t.common.favorites}${favorites.items.length ? ` (${favorites.items.length})` : ""}`,
    },
  ];

  return (
    <div>
      <div className="card p-4 sm:p-6">
        <label htmlFor="fancy-input" className="mb-2 block text-sm font-semibold text-ink-700">
          {t.common.yourText}
        </label>
        <div className="flex gap-2">
          <input
            id="fancy-input"
            type="text"
            value={text}
            maxLength={MAX_LENGTH}
            onChange={(event) => setText(event.target.value)}
            placeholder={t.common.yourText}
            autoComplete="off"
            spellCheck={false}
            className="text-input"
          />
          {text !== defaultText && (
            <button
              type="button"
              onClick={() => setText(defaultText)}
              className="h-12 shrink-0 rounded-xl px-3 text-sm font-medium text-ink-600 transition-colors hover:bg-brand-50 hover:text-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
            >
              {t.common.reset}
            </button>
          )}
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

        <div className="mt-4 border-t border-line pt-4">
          <label htmlFor="style-search" className="mb-2 block text-sm font-semibold text-ink-700">
            {t.common.filterStyles}
          </label>
          <input
            id="style-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t.common.searchStyles}
            autoComplete="off"
            className="text-input h-11"
          />
          <div
            role="group"
            aria-label={t.common.filterStyles}
            className="-mx-1 mt-3 flex gap-2 overflow-x-auto px-1 pb-1"
          >
            {chips.map((chip) => {
              const active = category === chip.id || (chip.id === "all" && category === null);
              return (
                <button
                  key={chip.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setCategory(chip.id === "all" ? null : chip.id)}
                  className={`h-9 shrink-0 whitespace-nowrap rounded-full border px-4 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 ${
                    active
                      ? "border-brand-600 bg-brand-100 text-brand-800"
                      : "border-line bg-white text-ink-700 hover:border-brand-300 hover:bg-brand-50"
                  }`}
                >
                  {chip.name}
                </button>
              );
            })}
          </div>
          <PreviewOptions
            size={previewSize}
            onSize={setPreviewSize}
            transparent={transparentPng}
            onTransparent={setTransparentPng}
            onCopyFavorites={favorites.items.length > 0 ? copyFavorites : undefined}
          />
        </div>
      </div>

      {charCount === 0 ? (
        <p className="mt-6 rounded-xl border border-dashed border-line bg-white/60 p-8 text-center text-sm text-ink-600">
          {t.common.typeToSee(all.length)}
        </p>
      ) : results.length === 0 ? (
        <p className="mt-6 rounded-xl border border-dashed border-line bg-white/60 p-8 text-center text-sm text-ink-600">
          {category === "favorites" && favorites.items.length === 0
            ? t.common.noFavorites
            : t.common.noStylesMatch(query.trim())}
        </p>
      ) : (
        <ul className="mt-6 space-y-3">
          {results.map((result) => {
            const isFavorite = favorites.items.includes(result.id);
            return (
              <li
                key={result.id}
                className="flex flex-col gap-3 rounded-xl border border-line bg-surface p-4 transition-colors hover:border-brand-200 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="min-w-0">
                  <span className="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      aria-pressed={isFavorite}
                      aria-label={
                        isFavorite
                          ? t.common.removeStyle(result.localName)
                          : t.common.saveStyle(result.localName)
                      }
                      onClick={() => favorites.toggle(result.id)}
                      className={`-ml-1 flex h-7 w-7 items-center justify-center rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 ${
                        isFavorite ? "text-brand-600" : "text-ink-500/50 hover:text-brand-600"
                      }`}
                    >
                      <StarIcon filled={isFavorite} />
                    </button>
                    <span
                      className="text-[11px] font-semibold tracking-wider text-ink-500 uppercase"
                      title={result.note}
                    >
                      {result.localName}
                    </span>
                    {result.coverage === "partial" && (
                      <span
                        className="rounded bg-warning-bg px-1.5 py-0.5 text-[10px] font-semibold text-warning"
                        title={result.note}
                      >
                        {t.common.partialBadge}
                      </span>
                    )}
                    {result.risk && (
                      <span
                        className="rounded bg-warning-bg px-1.5 py-0.5 text-[10px] font-semibold text-warning"
                        title={result.risk}
                      >
                        !
                      </span>
                    )}
                  </span>
                  <p
                    className="result-text mt-1 text-ink-900 select-all"
                    style={{ fontSize: previewSize }}
                  >
                    {result.text}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleDownload(result)}
                    aria-label={t.common.downloadPng(result.localName)}
                    className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-line bg-white px-3 text-sm font-medium text-ink-700 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 sm:h-9"
                  >
                    <DownloadIcon />
                    <span className="sm:hidden">PNG</span>
                  </button>
                  <CopyButton
                    text={result.text}
                    ariaLabel={t.common.copyStyle(result.localName)}
                  />
                  <ShareLinks text={result.text} name={result.localName} />
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
