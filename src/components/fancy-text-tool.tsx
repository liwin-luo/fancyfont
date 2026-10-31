"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { localePath } from "@/lib/i18n";
import {
  convertAll,
  getStyle,
  styleCategories,
  styleMatches,
  type ConvertedText,
} from "@/lib/text-styles";
import {
  applyWrap,
  hanFrames,
  hasHan,
  pasteTargets,
  type PasteTargetId,
  type WrapId,
} from "@/lib/composer";
import { lengthBucket, measureText, sliceGraphemes } from "@/lib/measure";
import { track } from "@/lib/analytics";
import { codePointLength } from "@/lib/platform-preview";
import { CompatReport } from "@/components/compat-report";
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
const RECENTS_KEY = "fancyfont:recent-styles";

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
  const [wrapId, setWrapId] = useState<WrapId>("none");
  const [pasteId, setPasteId] = useState<PasteTargetId>("anywhere");
  const [openReport, setOpenReport] = useState<string | null>(null);
  const favorites = useLocalList(FAVORITES_KEY);
  const recents = useLocalList(RECENTS_KEY, 8);

  useEffect(() => {
    track("fancy_text_view", { tool: "fancy" });
  }, []);
  const showToast = useToast();
  const locale = useLocale();
  const t = getUi(locale);

  const source = sliceGraphemes(text, MAX_LENGTH);
  const measures = measureText(source);
  const charCount = measures.graphemes;
  const all = useMemo(
    () =>
      convertAll(source).map((result) => ({
        ...result,
        localName: t.styleNames[result.id],
      })),
    [source, t],
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const matched = all.filter((result) => {
      if (category === "favorites") return favorites.items.includes(result.id);
      if (category === "recent") return recents.items.includes(result.id);
      if (category && result.category !== category) return false;
      if (!q) return true;
      return (
        styleMatches(getStyle(result.id), q) ||
        result.localName.toLowerCase().includes(q) ||
        t.styleCategoryNames[result.category].toLowerCase().includes(q)
      );
    });
    if (category !== "recent") return matched;
    const rank = new Map(recents.items.map((id, index) => [id, index]));
    return matched.sort((a, b) => (rank.get(a.id) ?? 0) - (rank.get(b.id) ?? 0));
  }, [all, category, query, favorites.items, recents.items, t]);

  async function handleDownload(result: ConvertedText & { localName: string }) {
    const ok = await downloadTextPng(result.text, `fancyfont-${result.id}.png`, {
      transparent: transparentPng,
    });
    track("fancy_text_png_export", {
      tool: "fancy",
      style_id: result.id,
      length_bucket: lengthBucket(measures.graphemes),
      ok,
    });
    showToast(ok ? t.common.savedAsPng : t.common.pngFailed);
  }

  const paste = pasteTargets.find((item) => item.id === pasteId) ?? pasteTargets[0];
  const showHan = hasHan(source);

  function dressed(value: string) {
    return applyWrap(value, wrapId);
  }

  async function copyFavorites() {
    const lines = all
      .filter((result) => favorites.items.includes(result.id))
      .map((result) => dressed(result.text))
      .filter((line) => line.trim().length > 0);
    const ok = lines.length > 0 && (await copyText(lines.join("\n")));
    track("fancy_text_copy", {
      tool: "fancy",
      length_bucket: lengthBucket(measures.graphemes),
      ok,
    });
    showToast(ok ? t.common.copiedToClipboard : t.common.copyFailed);
  }

  const wrapChips: { id: WrapId; name: string }[] = [
    { id: "none", name: t.common.wrapNone },
    { id: "star", name: t.common.wrapStar },
    { id: "heart", name: t.common.wrapHeart },
    { id: "wings", name: t.common.wrapWings },
    { id: "brackets", name: t.common.wrapBrackets },
  ];
  const pasteChips: { id: PasteTargetId; name: string }[] = [
    { id: "anywhere", name: t.common.pasteAnywhere },
    { id: "display", name: t.common.pasteDisplay },
    { id: "bio", name: t.common.pasteBio },
    { id: "username", name: t.common.pasteUsername },
  ];
  const chipClass = (active: boolean) =>
    `h-9 shrink-0 whitespace-nowrap rounded-full border px-4 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 ${
      active
        ? "border-brand-600 bg-brand-100 text-brand-800"
        : "border-line bg-white text-ink-700 hover:border-brand-300 hover:bg-brand-50"
    }`;

  const chips: { id: string; name: string }[] = [
    { id: "all", name: t.common.all },
    ...styleCategories.map((c) => ({ id: c.id, name: t.styleCategoryNames[c.id] })),
    ...(recents.items.length > 0 ? [{ id: "recent", name: t.common.recent }] : []),
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
            onChange={(event) => setText(sliceGraphemes(event.target.value, MAX_LENGTH))}
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
        <details className="mt-1">
          <summary className="cursor-pointer text-xs text-ink-500">{t.common.countsSummary}</summary>
          <p className="mt-1 text-xs leading-relaxed text-ink-500">
            {t.common.visibleCount(measures.graphemes)}
            <br />
            {t.common.codePointCount(measures.codePoints)}
            <br />
            {t.common.utf16Count(measures.utf16)}
          </p>
        </details>

        <div className="mt-4">
          <p className="mb-2 text-sm font-semibold text-ink-700">{t.common.wrapLabel}</p>
          <div role="group" aria-label={t.common.wrapLabel} className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
            {wrapChips.map((chip) => (
              <button
                key={chip.id}
                type="button"
                aria-pressed={wrapId === chip.id}
                onClick={() => setWrapId(chip.id)}
                className={chipClass(wrapId === chip.id)}
              >
                {chip.name}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-3">
          <p className="mb-2 text-sm font-semibold text-ink-700">{t.common.pasteLabel}</p>
          <div role="group" aria-label={t.common.pasteLabel} className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
            {pasteChips.map((chip) => (
              <button
                key={chip.id}
                type="button"
                aria-pressed={pasteId === chip.id}
                onClick={() => setPasteId(chip.id)}
                className={chipClass(pasteId === chip.id)}
              >
                {chip.name}
              </button>
            ))}
          </div>
          {paste.plain && (
            <p className="mt-2 text-xs leading-relaxed text-ink-600">{t.common.usernamePlain}</p>
          )}
        </div>

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
                  onClick={() => {
                    const next = chip.id === "all" ? null : chip.id;
                    setCategory(next);
                    if (next) track("fancy_text_style_filter", { tool: "fancy", category: next });
                  }}
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

      {showHan && (
        <section className="mt-6" aria-labelledby="han-frames-heading">
          <h2 id="han-frames-heading" className="text-sm font-semibold text-ink-700">
            {t.common.hanFrames}
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-ink-600">{t.common.hanNote}</p>
          <ul className="mt-3 space-y-2">
            {hanFrames.map(([left, right]) => {
              const line = left + source + right;
              return (
                <li
                  key={left + right}
                  className="flex items-center justify-between gap-3 rounded-xl border border-line bg-surface px-4 py-3"
                >
                  <p className="result-text min-w-0 text-lg text-ink-900">{line}</p>
                  <CopyButton text={line} ariaLabel={t.common.copy} />
                </li>
              );
            })}
          </ul>
        </section>
      )}

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
            const line = dressed(result.text);
            const points = codePointLength(line);
            const over = paste.limit !== null && points > paste.limit;
            return (
              <li
                key={result.id}
                className="rounded-xl border border-line bg-surface p-4 transition-colors hover:border-brand-200"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
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
                      onClick={() => {
                        favorites.toggle(result.id);
                        track("fancy_text_favorite", { tool: "fancy", style_id: result.id });
                      }}
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
                    {line}
                  </p>
                  {over && paste.limit !== null && (
                    <p className="mt-1 text-xs text-warning">{t.common.overLimit(points, paste.limit)}</p>
                  )}
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleDownload({ ...result, text: line })}
                    aria-label={t.common.downloadPng(result.localName)}
                    className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-line bg-white px-3 text-sm font-medium text-ink-700 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 sm:h-9"
                  >
                    <DownloadIcon />
                    <span className="sm:hidden">PNG</span>
                  </button>
                  <CopyButton
                    text={line}
                    ariaLabel={t.common.copyStyle(result.localName)}
                    onCopied={() => {
                      recents.add(result.id);
                      track("fancy_text_copy", {
                        tool: "fancy",
                        style_id: result.id,
                        length_bucket: lengthBucket(measures.graphemes),
                        ok: true,
                      });
                    }}
                  />
                  <ShareLinks text={line} name={result.localName} />
                  <button
                    type="button"
                    aria-expanded={openReport === result.id}
                    aria-controls={openReport === result.id ? `fancy-report-${result.id}` : undefined}
                    onClick={() => setOpenReport((current) => (current === result.id ? null : result.id))}
                    className="text-sm font-semibold text-brand-700 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                  >
                    {t.gaming.checkResult}
                  </button>
                </div>
                </div>
                {openReport === result.id && (
                  <CompatReport
                    id={`fancy-report-${result.id}`}
                    text={line}
                    source={source}
                    styleId={result.id}
                    rule={null}
                  />
                )}
              </li>
            );
          })}
        </ul>
      )}
      <nav aria-label={t.sections.related} className="mt-8 flex flex-wrap gap-x-4 gap-y-2">
        <Link
          href={localePath(locale, "/gaming-name-generator/")}
          className="text-sm font-semibold text-brand-800 underline decoration-brand-300 underline-offset-2"
        >
          {t.nav.gaming}
        </Link>
        <Link
          href={localePath(locale, "/symbols/")}
          className="text-sm font-semibold text-brand-800 underline decoration-brand-300 underline-offset-2"
        >
          {t.nav.symbols}
        </Link>
      </nav>
    </div>
  );
}
