"use client";

// 符号库工具:分类筛选 + 名称搜索 + 点击复制 + 收藏/最近复制(本机存储)。
// 从旧站 symbols-tool 精简移植:去掉装饰托盘与 hash 同步,保留核心交互。
// 文案首版仅英文。

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  categoryName,
  displaySymbol,
  searchSymbols,
  symbolCategories,
  symbolCombos,
  symbols,
  type SymbolEntry,
} from "@/lib/symbols-data";
import { formatCodePoint } from "@/lib/measure";
import { useLocalList } from "@/lib/storage";

const RECENTS_KEY = "fontdrafts:recent-symbols";
const RECENTS_MAX = 12;
const FAVORITES_KEY = "fontdrafts:favorite-symbols";
const FAVORITES_MAX = 80;

function symbolTitle(symbol: string, label: string): string {
  const points = [...symbol].map((char) => formatCodePoint(char.codePointAt(0) ?? 0));
  const shown = points.slice(0, 6).join(" ");
  return points.length > 6 ? `${label} · ${shown} …` : `${label} · ${shown}`;
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
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [lastCopied, setLastCopied] = useState<string | null>(null);
  const favorites = useLocalList(FAVORITES_KEY, FAVORITES_MAX);
  const recents = useLocalList(RECENTS_KEY, RECENTS_MAX);

  const results = useMemo(() => searchSymbols(query, category), [query, category]);
  const recentEntries = recents.items.map((symbol) => savedEntry(symbol, "recent"));
  const favoriteEntries = favorites.items.map((symbol) => savedEntry(symbol, "favorite"));

  async function copySymbol(symbol: string, record = true) {
    try {
      await navigator.clipboard.writeText(symbol);
      setLastCopied(symbol);
      if (record) recents.add(symbol);
      window.setTimeout(() => setLastCopied((current) => (current === symbol ? null : current)), 1200);
    } catch {
      // 复制失败静默处理:用户可以手动长按复制。
    }
  }

  useEffect(() => {
    if (category === "invisible" && typeof window !== "undefined") {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }, [category]);

  const showInvisibleNote =
    category === "invisible" || (results.length > 0 && results.every((entry) => entry.category === "invisible"));

  return (
    <div>
      <div className="card-pop p-4 sm:p-6">
        <label htmlFor="symbol-search" className="mb-2 block text-sm font-bold">
          Search symbols
        </label>
        <input
          id="symbol-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try “star” or “crown”"
          autoComplete="off"
          className="w-full rounded-lg border-2 border-ink bg-white px-3 py-2 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        />
        <div role="group" aria-label="Categories" className="mt-4 flex gap-2 overflow-x-auto pb-1">
          <button
            type="button"
            aria-pressed={category === null}
            onClick={() => setCategory(null)}
            className={`inline-flex h-9 shrink-0 items-center whitespace-nowrap rounded-lg border-2 px-4 text-sm font-bold transition-all ${
              category === null ? "border-ink bg-pop-yellow text-ink shadow-pop-sm" : "border-ink/30 bg-white text-ink-soft hover:border-ink hover:text-ink"
            }`}
          >
            All
          </button>
          {symbolCategories.map((cat) => {
            const active = category === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                aria-pressed={active}
                onClick={() => setCategory(active ? null : cat.id)}
                className={`inline-flex h-9 shrink-0 items-center whitespace-nowrap rounded-lg border-2 px-4 text-sm font-bold transition-all ${
                  active ? "border-ink bg-pop-yellow text-ink shadow-pop-sm" : "border-ink/30 bg-white text-ink-soft hover:border-ink hover:text-ink"
                }`}
              >
                {categoryName(cat.id)}
              </button>
            );
          })}
        </div>
        <p className="mt-3 text-xs text-ink-soft" role="status">
          {results.length} symbols{category ? ` in ${categoryName(category)}` : ""}
          {query.trim() ? ` matching “${query.trim()}”` : ""}
        </p>
        {showInvisibleNote && (
          <p className="mt-3 rounded-lg bg-pop-blue/20 px-3 py-2 text-sm leading-relaxed">
            Invisible characters take a character position but draw nothing. For a visible-width blank you can put
            between letters, use the{" "}
            <Link href="/blank-space/" className="font-bold underline underline-offset-2">
              blank space tool
            </Link>
            .
          </p>
        )}
      </div>

      {favoriteEntries.length > 0 && (
        <section className="mt-6" aria-labelledby="favorites-heading">
          <h2 id="favorites-heading" className="text-sm font-black tracking-wide uppercase">Favorites</h2>
          <ul className="mt-2 flex flex-wrap gap-2">
            {favoriteEntries.map((entry) => (
              <li key={entry.id} className="relative">
                <button
                  type="button"
                  onClick={() => copySymbol(entry.symbol, false)}
                  title={symbolTitle(entry.symbol, entry.label)}
                  className={`flex h-11 min-w-11 items-center justify-center rounded-lg border-2 border-ink px-2.5 text-xl shadow-pop-sm transition-all ${
                    lastCopied === entry.symbol ? "bg-pop-green" : "bg-surface hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
                  }`}
                >
                  {displaySymbol(entry.symbol)}
                </button>
                <button
                  type="button"
                  onClick={() => favorites.remove(entry.symbol)}
                  aria-label={`Remove ${entry.label} from favorites`}
                  className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-ink bg-white text-[10px] font-black hover:bg-pop-pink"
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

      {recentEntries.length > 0 && (
        <section className="mt-6" aria-labelledby="recent-heading">
          <h2 id="recent-heading" className="text-sm font-black tracking-wide uppercase">Recently copied</h2>
          <ul className="mt-2 flex flex-wrap gap-2">
            {recentEntries.map((entry) => (
              <li key={entry.id} className="relative">
                <button
                  type="button"
                  onClick={() => copySymbol(entry.symbol)}
                  title={symbolTitle(entry.symbol, entry.label)}
                  className={`flex h-11 min-w-11 max-w-full items-center justify-center overflow-hidden whitespace-nowrap rounded-lg border-2 border-ink px-2.5 text-xl shadow-pop-sm transition-all ${
                    lastCopied === entry.symbol ? "bg-pop-green" : "bg-surface hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
                  }`}
                >
                  {displaySymbol(entry.symbol)}
                </button>
                <button
                  type="button"
                  onClick={() => recents.remove(entry.symbol)}
                  aria-label={`Remove ${entry.label} from recents`}
                  className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-ink bg-white text-[10px] font-black hover:bg-pop-pink"
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

      {results.length === 0 ? (
        <p className="mt-6 rounded-lg border-2 border-dashed border-ink/40 bg-white/60 p-8 text-center text-sm text-ink-soft">
          Nothing matches “{query.trim()}”. Try a shorter word, or browse a category.
        </p>
      ) : (
        <ul className="mt-6 grid grid-cols-5 gap-2 min-[420px]:grid-cols-6 sm:grid-cols-8 md:grid-cols-10">
          {results.map((entry) => {
            const justCopied = lastCopied === entry.symbol;
            const isFavorite = favorites.items.includes(entry.symbol);
            return (
              <li key={entry.id} className="relative">
                <button
                  type="button"
                  onClick={() => copySymbol(entry.symbol)}
                  title={symbolTitle(entry.symbol, entry.label)}
                  aria-label={`Copy ${entry.label}`}
                  className={`flex aspect-square w-full items-center justify-center rounded-lg border-2 border-ink text-xl shadow-pop-sm transition-all active:scale-95 sm:text-2xl ${
                    justCopied ? "bg-pop-green" : "bg-surface hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
                  }`}
                >
                  {displaySymbol(entry.symbol)}
                </button>
                <button
                  type="button"
                  onClick={() => favorites.toggle(entry.symbol)}
                  aria-pressed={isFavorite}
                  aria-label={isFavorite ? `Remove ${entry.label} from favorites` : `Save ${entry.label} to favorites`}
                  className={`absolute top-0.5 left-0.5 flex h-5 w-5 items-center justify-center rounded-full border border-ink text-[10px] ${
                    isFavorite ? "bg-pop-yellow" : "bg-white/90 text-ink-soft"
                  }`}
                >
                  ★
                </button>
              </li>
            );
          })}
        </ul>
      )}

      <section className="mt-10" aria-labelledby="combos-heading">
        <h2 id="combos-heading" className="text-lg font-black">Decorative combos</h2>
        <p className="mt-1 text-sm text-ink-soft">
          Ready-made frames and dividers. Click one to copy it whole.
        </p>
        <ul className="mt-4 grid grid-cols-1 gap-2 min-[420px]:grid-cols-2 sm:grid-cols-3">
          {symbolCombos.map((combo) => {
            const justCopied = lastCopied === combo.text;
            return (
              <li key={combo.id}>
                <button
                  type="button"
                  onClick={() => copySymbol(combo.text)}
                  title={symbolTitle(combo.text, combo.label)}
                  aria-label={`Copy ${combo.label}`}
                  className={`flex h-11 w-full items-center justify-center overflow-hidden whitespace-nowrap rounded-lg border-2 border-ink px-3 text-sm shadow-pop-sm transition-all active:scale-95 ${
                    justCopied ? "bg-pop-green" : "bg-surface hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
                  }`}
                >
                  {combo.text}
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
