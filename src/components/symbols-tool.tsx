"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { localePath } from "@/lib/i18n";
import {
  categoryFromHash,
  displaySymbol,
  joinBoard,
  searchSymbols,
  symbolCategories,
  symbolCombos,
  symbols,
  type SymbolEntry,
} from "@/lib/symbols-data";
import { copyText } from "@/lib/copy";
import { lengthBucket, measureText, sliceGraphemes } from "@/lib/measure";
import { track } from "@/lib/analytics";
import { useToast } from "@/components/toast";
import { useLocalList } from "@/lib/storage";
import { useLocale } from "@/components/locale-context";
import { getUi } from "@/lib/ui-strings";

const RECENTS_KEY = "fancyfont:recent-symbols";
const RECENTS_MAX = 12;
const BOARD_KEY = "fancyfont:symbol-board";
const BOARD_MAX = 40;
const FAVORITES_KEY = "fancyfont:favorite-symbols";
const FAVORITES_MAX = 80;
const PREFIX_MAX = 120;

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 20 20" aria-hidden="true" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
      <path d="M10 2.5l2.35 4.76 5.25.76-3.8 3.7.9 5.24L10 14.52l-4.7 2.44.9-5.24-3.8-3.7 5.25-.76L10 2.5z" />
    </svg>
  );
}

function savedEntry(symbol: string, idPrefix: string): SymbolEntry {
  return (
    symbols.find((entry) => entry.symbol === symbol) ?? {
      id: `${idPrefix}-${symbol}`,
      symbol,
      category: idPrefix,
      label: symbol,
      keywords: [],
    }
  );
}

export function SymbolsTool() {
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [lastCopied, setLastCopied] = useState<string | null>(null);
  const [prefix, setPrefix] = useState("");
  const boardStore = useLocalList(BOARD_KEY, BOARD_MAX);
  const favorites = useLocalList(FAVORITES_KEY, FAVORITES_MAX);
  const recents = useLocalList(RECENTS_KEY, RECENTS_MAX);
  // ponytail: useLocalList keeps newest first and drops past 40. Reverse so the copy matches add order.
  const board = useMemo(() => [...boardStore.items].reverse(), [boardStore.items]);
  const showToast = useToast();
  const locale = useLocale();
  const t = getUi(locale);

  const results = useMemo(() => searchSymbols(query, category), [query, category]);

  useEffect(() => {
    track("symbols_view", { tool: "symbols" });
  }, []);

  useEffect(() => {
    const graphemes = measureText(query.trim()).graphemes;
    if (graphemes === 0) return;
    const timer = window.setTimeout(() => {
      track("symbols_search", { tool: "symbols", length_bucket: lengthBucket(graphemes) });
    }, 500);
    return () => window.clearTimeout(timer);
  }, [query]);

  async function copySymbol(symbol: string, label: string, record = true) {
    const ok = await copyText(symbol);
    track("symbol_copy", { tool: "symbols", ok });
    if (ok) {
      setLastCopied(symbol);
      if (record) recents.add(symbol);
      showToast(`${t.common.copied} ${label}`);
      window.setTimeout(() => {
        setLastCopied((current) => (current === symbol ? null : current));
      }, 1200);
    } else {
      showToast(t.common.copyFailed);
    }
  }

  function toggleTray(symbol: string) {
    const adding = !boardStore.items.includes(symbol);
    boardStore.toggle(symbol);
    if (adding) track("symbol_add_to_board", { tool: "symbols", ok: true });
  }

  async function copyTray() {
    if (board.length === 0) return;
    const joined = joinBoard(prefix, board);
    const ok = await copyText(joined);
    track("symbol_copy_all", {
      tool: "symbols",
      length_bucket: lengthBucket(measureText(joined).graphemes),
      ok,
    });
    if (ok) {
      showToast(t.symbols.copiedBatch(board.length));
      recents.add(joined);
      boardStore.clear();
    } else {
      showToast(t.symbols.batchFailed);
    }
  }

  const recentEntries = recents.items.map((symbol) => savedEntry(symbol, "recent"));
  const favoriteEntries = favorites.items.map((symbol) => savedEntry(symbol, "favorite"));

  const categoryName = (id: string) => t.symbolCats[id] ?? id;

  useEffect(() => {
    const apply = () => setCategory(categoryFromHash(window.location.hash));
    apply();
    window.addEventListener("hashchange", apply);
    window.addEventListener("popstate", apply);
    return () => {
      window.removeEventListener("hashchange", apply);
      window.removeEventListener("popstate", apply);
    };
  }, []);

  function selectCategory(next: string | null) {
    setCategory(next);
    const path = window.location.pathname + window.location.search;
    window.history.pushState(null, "", next ? `${path}#${next}` : path);
    if (next) track("symbols_category_select", { tool: "symbols", category: next });
  }
  const showInvisibleNote =
    category === "invisible" ||
    (results.length > 0 && results.every((entry) => entry.category === "invisible"));

  return (
    <div>
      <div className="card p-4 sm:p-6">
        <label htmlFor="symbol-search" className="mb-2 block text-sm font-semibold text-ink-700">
          {t.symbols.searchLabel}
        </label>
        <input
          id="symbol-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={t.symbols.searchPlaceholder}
          autoComplete="off"
          className="text-input"
        />
        <div
          role="group"
          aria-label={t.symbols.searchLabel}
          className="-mx-1 mt-4 flex gap-2 overflow-x-auto px-1 pb-1"
        >
          <a
            href={pathname}
            aria-current={category === null ? "true" : undefined}
            onClick={(event) => {
              event.preventDefault();
              selectCategory(null);
            }}
            className={`inline-flex h-9 shrink-0 items-center whitespace-nowrap rounded-full border px-4 text-sm font-medium no-underline transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 ${
              category === null
                ? "border-brand-600 bg-brand-100 text-brand-800"
                : "border-line bg-white text-ink-700 hover:border-brand-300 hover:bg-brand-50"
            }`}
          >
            {t.common.all}
          </a>
          {symbolCategories.map((cat) => {
            const active = category === cat.id;
            return (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                aria-current={active ? "true" : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  selectCategory(active ? null : cat.id);
                }}
                className={`inline-flex h-9 shrink-0 items-center whitespace-nowrap rounded-full border px-4 text-sm font-medium no-underline transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 ${
                  active
                    ? "border-brand-600 bg-brand-100 text-brand-800"
                    : "border-line bg-white text-ink-700 hover:border-brand-300 hover:bg-brand-50"
                }`}
              >
                {categoryName(cat.id)}
              </a>
            );
          })}
        </div>
        <p className="mt-3 text-xs text-ink-500" role="status">
          {t.symbols.countInfo(
            results.length,
            category ? categoryName(category) : null,
            query.trim(),
          )}
        </p>
        {showInvisibleNote && (
          <p className="mt-3 rounded-xl bg-brand-50 px-3 py-2 text-sm leading-relaxed text-ink-700">
            {t.symbolCatNotes.invisible}{" "}
            <Link
              href={localePath(locale, "/blank-space/")}
              className="font-semibold text-brand-800 underline decoration-brand-300 underline-offset-2"
            >
              {t.symbolCatNotes.blankLink}
            </Link>
          </p>
        )}
      </div>

      {favoriteEntries.length > 0 && (
        <section className="mt-6 w-full" aria-labelledby="favorites-heading">
          <h2 id="favorites-heading" className="text-sm font-semibold text-ink-700">
            {t.common.favorites}
          </h2>
          <ul className="mt-2 flex w-full flex-wrap gap-2">
            {favoriteEntries.map((entry) => (
              <li key={entry.id} className="relative max-w-full shrink-0">
                <button
                  type="button"
                  onClick={() => copySymbol(entry.symbol, entry.label, false)}
                  aria-label={t.symbols.copySymbol(entry.label)}
                  className="flex h-11 min-w-11 max-w-full items-center justify-center overflow-hidden whitespace-nowrap rounded-xl border border-line bg-surface px-2.5 text-xl text-ink-900 hover:border-brand-300 hover:bg-brand-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                >
                  {displaySymbol(entry.symbol)}
                </button>
                <button
                  type="button"
                  onClick={() => favorites.remove(entry.symbol)}
                  aria-label={t.common.removeStyle(entry.label)}
                  className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full border border-line bg-white text-[10px] font-bold text-ink-500 hover:text-danger focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

      {recentEntries.length > 0 && (
        <section className="mt-6 w-full" aria-labelledby="recent-heading">
          <h2 id="recent-heading" className="text-sm font-semibold text-ink-700">
            {t.symbols.recent}
          </h2>
          <ul className="mt-2 flex w-full flex-wrap gap-2">
            {recentEntries.map((entry) => (
              <li key={entry.id} className="relative max-w-full shrink-0">
                <button
                  type="button"
                  onClick={() => copySymbol(entry.symbol, entry.label)}
                  aria-label={t.symbols.copySymbol(entry.label)}
                  // ponytail: batch joins can be long; grow the chip, clip instead of painting over neighbors
                  className={`flex h-11 min-w-11 max-w-full items-center justify-center overflow-hidden whitespace-nowrap rounded-xl border px-2.5 text-xl transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 ${
                    lastCopied === entry.symbol
                      ? "border-success/40 bg-success-bg text-success"
                      : "border-line bg-surface text-ink-900 hover:border-brand-300 hover:bg-brand-50"
                  }`}
                >
                  {displaySymbol(entry.symbol)}
                </button>
                <button
                  type="button"
                  onClick={() => recents.remove(entry.symbol)}
                  aria-label={t.symbols.removeRecent(entry.label)}
                  className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full border border-line bg-white text-[10px] font-bold text-ink-500 hover:text-danger focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

      {results.length === 0 ? (
        <p className="mt-6 rounded-xl border border-dashed border-line bg-white/60 p-8 text-center text-sm text-ink-600">
          {t.symbols.noMatch(query.trim())}
        </p>
      ) : (
        <ul className="mt-6 grid grid-cols-5 gap-2 min-[420px]:grid-cols-6 sm:grid-cols-8 md:grid-cols-10">
          {results.map((entry) => {
            const justCopied = lastCopied === entry.symbol;
            const inTray = board.includes(entry.symbol);
            const isFavorite = favorites.items.includes(entry.symbol);
            const wide = entry.category === "kaomoji";
            return (
              <li key={entry.id} className={wide ? "relative col-span-full" : "relative"}>
                <button
                  type="button"
                  onClick={() => copySymbol(entry.symbol, entry.label)}
                  title={entry.label}
                  aria-label={t.symbols.copySymbol(entry.label)}
                  className={`flex w-full items-center justify-center rounded-xl border transition-colors active:scale-95 ${
                    wide
                      ? "h-12 px-3 text-base"
                      : "aspect-square text-xl sm:text-2xl"
                  } ${
                    justCopied
                      ? "border-success/40 bg-success-bg text-success"
                      : "border-line bg-surface text-ink-900 hover:border-brand-300 hover:bg-brand-50"
                  } focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500`}
                >
                  {displaySymbol(entry.symbol)}
                </button>
                <button
                  type="button"
                  onClick={() => favorites.toggle(entry.symbol)}
                  aria-pressed={isFavorite}
                  aria-label={
                    isFavorite
                      ? t.common.removeStyle(entry.label)
                      : t.common.saveStyle(entry.label)
                  }
                  className={`absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 ${
                    isFavorite
                      ? "border-brand-600 bg-white text-brand-700"
                      : "border-line bg-white/95 text-ink-500 hover:border-brand-300 hover:text-brand-700"
                  }`}
                >
                  <StarIcon filled={isFavorite} />
                </button>
                <button
                  type="button"
                  onClick={() => toggleTray(entry.symbol)}
                  aria-label={
                    inTray
                      ? t.symbols.removeFromBatch(entry.label)
                      : t.symbols.addToBatch(entry.label)
                  }
                  aria-pressed={inTray}
                  className={`absolute top-1 right-1 flex h-6 w-6 items-center justify-center rounded-full border text-[11px] font-bold leading-none transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 ${
                    inTray
                      ? "border-brand-600 bg-brand-600 text-white"
                      : "border-line bg-white/95 text-ink-500 hover:border-brand-300 hover:text-brand-700"
                  }`}
                >
                  {inTray ? "✓" : "+"}
                </button>
              </li>
            );
          })}
        </ul>
      )}

      <section className="mt-10" aria-labelledby="combos-heading">
        <h2 id="combos-heading" className="text-lg font-bold text-ink-900">
          {t.symbols.combosHeading}
        </h2>
        <p className="mt-1 text-sm text-ink-600">{t.symbols.combosHint}</p>
        <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {symbolCombos.map((combo) => {
            const justCopied = lastCopied === combo.text;
            return (
              <li key={combo.id}>
                <button
                  type="button"
                  onClick={() => copySymbol(combo.text, combo.label, false)}
                  aria-label={t.symbols.copyCombo(combo.label)}
                  className={`flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left transition-colors ${
                    justCopied
                      ? "border-success/40 bg-success-bg"
                      : "border-line bg-surface hover:border-brand-300 hover:bg-brand-50"
                  } focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500`}
                >
                  <span className="result-text text-base text-ink-900">{combo.text}</span>
                  <span className="shrink-0 text-xs font-medium text-ink-500">{combo.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </section>

      <nav aria-label={t.sections.related} className="mt-8">
        <Link
          href={localePath(locale, "/gaming-name-generator/")}
          className="text-sm font-semibold text-brand-800 underline decoration-brand-300 underline-offset-2"
        >
          {t.nav.gaming}
        </Link>
      </nav>

      {board.length > 0 && (
        <div className="fixed inset-x-4 bottom-4 z-40 sm:left-1/2 sm:w-full sm:max-w-lg sm:-translate-x-1/2">
          <div className="rounded-2xl bg-ink-900 px-4 py-3 text-white shadow-xl">
            <label htmlFor="symbol-prefix" className="sr-only">
              {t.symbols.prefixLabel}
            </label>
            <input
              id="symbol-prefix"
              type="text"
              value={prefix}
              onChange={(event) => setPrefix(sliceGraphemes(event.target.value, PREFIX_MAX))}
              placeholder={t.symbols.prefixPlaceholder}
              autoComplete="off"
              className="mb-2 h-9 w-full rounded-lg border border-white/15 bg-white/10 px-3 text-sm text-white placeholder:text-white/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            />
            <div className="flex items-center gap-3">
              <p className="text-sm">
                <span className="font-bold">{t.symbols.batchSelected(board.length)}</span>
              </p>
              <p className="hidden max-w-48 truncate text-lg sm:block" aria-hidden="true">
                {board.slice(0, 8).map((symbol) => displaySymbol(symbol)).join("")}
              </p>
              <div className="ml-auto flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => boardStore.clear()}
                  className="h-9 rounded-lg px-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {t.symbols.batchClear}
                </button>
                <button
                  type="button"
                  onClick={copyTray}
                  className="h-9 rounded-lg bg-pixel-lime px-3 text-sm font-bold text-ink-900 transition-colors hover:bg-lime-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {t.symbols.copyAll}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
