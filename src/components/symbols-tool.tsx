"use client";

import { useMemo, useState } from "react";
import {
  displaySymbol,
  searchSymbols,
  symbolCategories,
  symbolCombos,
  symbols,
  type SymbolEntry,
} from "@/lib/symbols-data";
import { copyText } from "@/lib/copy";
import { useToast } from "@/components/toast";
import { useLocalList } from "@/lib/storage";
import { useLocale } from "@/components/locale-context";
import { getUi } from "@/lib/ui-strings";

const RECENTS_KEY = "fancyfont:recent-symbols";
const RECENTS_MAX = 12;

export function SymbolsTool() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [lastCopied, setLastCopied] = useState<string | null>(null);
  const [tray, setTray] = useState<string[]>([]);
  const recents = useLocalList(RECENTS_KEY, RECENTS_MAX);
  const showToast = useToast();
  const locale = useLocale();
  const t = getUi(locale);

  const results = useMemo(() => searchSymbols(query, category), [query, category]);

  async function copySymbol(symbol: string, label: string, record = true) {
    const ok = await copyText(symbol);
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
    setTray((current) =>
      current.includes(symbol)
        ? current.filter((s) => s !== symbol)
        : [...current, symbol],
    );
  }

  async function copyTray() {
    if (tray.length === 0) return;
    const ok = await copyText(tray.join(""));
    if (ok) {
      showToast(t.symbols.copiedBatch(tray.length));
      recents.add(tray.join(""));
      setTray([]);
    } else {
      showToast(t.symbols.batchFailed);
    }
  }

  const recentEntries = recents.items
    .map((symbol) => {
      const direct = symbols.find((entry) => entry.symbol === symbol);
      return (
        direct ?? {
          id: `recent-${symbol}`,
          symbol,
          category: "recent",
          label: t.symbols.recent.toLowerCase(),
          keywords: [],
        }
      );
    })
    .filter((entry): entry is SymbolEntry => Boolean(entry));

  const categoryName = (id: string) => t.symbolCats[id] ?? id;
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
          <button
            type="button"
            aria-pressed={category === null}
            onClick={() => setCategory(null)}
            className={`h-9 shrink-0 whitespace-nowrap rounded-full border px-4 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 ${
              category === null
                ? "border-brand-600 bg-brand-100 text-brand-800"
                : "border-line bg-white text-ink-700 hover:border-brand-300 hover:bg-brand-50"
            }`}
          >
            {t.common.all}
          </button>
          {symbolCategories.map((cat) => {
            const active = category === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                aria-pressed={active}
                onClick={() => setCategory(active ? null : cat.id)}
                className={`h-9 shrink-0 whitespace-nowrap rounded-full border px-4 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 ${
                  active
                    ? "border-brand-600 bg-brand-100 text-brand-800"
                    : "border-line bg-white text-ink-700 hover:border-brand-300 hover:bg-brand-50"
                }`}
              >
                {categoryName(cat.id)}
              </button>
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
            {t.symbolCatNotes.invisible}
          </p>
        )}
      </div>

      {recentEntries.length > 0 && (
        <section className="mt-6" aria-labelledby="recent-heading">
          <h2 id="recent-heading" className="text-sm font-semibold text-ink-700">
            {t.symbols.recent}
          </h2>
          <ul className="mt-2 flex flex-wrap gap-2">
            {recentEntries.map((entry) => (
              <li key={entry.id} className="relative">
                <button
                  type="button"
                  onClick={() => copySymbol(entry.symbol, entry.label)}
                  aria-label={t.symbols.copySymbol(entry.label)}
                  className={`flex h-11 w-11 items-center justify-center rounded-xl border text-xl transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 ${
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
            const inTray = tray.includes(entry.symbol);
            return (
              <li key={entry.id} className="relative">
                <button
                  type="button"
                  onClick={() => copySymbol(entry.symbol, entry.label)}
                  title={entry.label}
                  aria-label={t.symbols.copySymbol(entry.label)}
                  className={`flex aspect-square w-full items-center justify-center rounded-xl border text-xl transition-colors active:scale-95 sm:text-2xl ${
                    justCopied
                      ? "border-success/40 bg-success-bg text-success"
                      : "border-line bg-surface text-ink-900 hover:border-brand-300 hover:bg-brand-50"
                  } focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500`}
                >
                  {displaySymbol(entry.symbol)}
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

      {tray.length > 0 && (
        <div className="fixed inset-x-4 bottom-4 z-40 sm:left-1/2 sm:right-auto sm:w-auto sm:-translate-x-1/2">
          <div className="flex items-center gap-3 rounded-2xl bg-ink-900 px-4 py-3 text-white shadow-xl">
            <p className="text-sm">
              <span className="font-bold">{t.symbols.batchSelected(tray.length)}</span>
            </p>
            <p className="hidden max-w-48 truncate text-lg sm:block" aria-hidden="true">
              {tray.slice(0, 8).map((symbol) => displaySymbol(symbol)).join("")}
            </p>
            <div className="ml-auto flex items-center gap-2">
              <button
                type="button"
                onClick={() => setTray([])}
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
      )}
    </div>
  );
}
