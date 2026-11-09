"use client";

// 花式文字生成器:输入实时转换,分类过滤,收藏/最近留在本机。
// 服务端渲染初始结果(defaultValue 预填示例),首屏即有内容可看。

import { useEffect, useMemo, useState } from "react";
import {
  convertAll,
  getStyle,
  styleCategories,
  styleMatches,
  type ConvertedText,
  type StyleCategory,
  type TextStyleId,
} from "@/lib/text-styles";
import { convertCjkAll, hasCjk } from "@/lib/cjk-styles";
import { useLocalList } from "@/lib/storage";
import { getUi } from "@/lib/ui-strings";
import { getStyleMeta } from "@/lib/style-meta";
import type { Locale } from "@/lib/i18n";

type TabId = "styles" | "favorites" | "recent";

async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
      return true;
    } catch {
      return false;
    }
  }
}

export function FancyTextTool({
  locale,
  styleIds,
  placeholder,
  showCjk = false,
  showCategories = true,
  showLatin = true,
}: {
  locale: Locale;
  styleIds: TextStyleId[];
  placeholder: string;
  /** 同时渲染中文装饰网格(花式昵称页/部分平台页)。 */
  showCjk?: boolean;
  /** 显示英文样式分类 tab(窄主题页可关)。 */
  showCategories?: boolean;
  /** 渲染英文样式卡片(纯中文装饰页可关)。 */
  showLatin?: boolean;
}) {
  const ui = getUi(locale);
  const meta = getStyleMeta(locale);
  const [input, setInput] = useState(placeholder);
  const [tab, setTab] = useState<TabId>("styles");
  const [category, setCategory] = useState<StyleCategory | "all">("all");
  const [query, setQuery] = useState("");
  const [infoId, setInfoId] = useState<TextStyleId | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const favorites = useLocalList("fontdrafts:favorites", 50);
  const recents = useLocalList("fontdrafts:recent", 10);

  /** ⓘ 详情打开时支持 Esc 关闭。 */
  useEffect(() => {
    if (!infoId) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setInfoId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [infoId]);

  const queryLower = query.trim().toLowerCase();

  /** 页面声明的全部样式(未做分类过滤),供分类 tab 判断"有没有内容"。 */
  const wantedAll = useMemo(() => {
    if (!showLatin) return [];
    const all = convertAll(input);
    // 按页面 styleIds 顺序(精选置顶,fullCatalog 保证)而不是引擎目录顺序。
    const scoped =
      styleIds.length > 0
        ? styleIds
            .map((id) => all.find((r) => r.id === id))
            .filter((r): r is (typeof all)[number] => Boolean(r))
        : all;
    if (!queryLower) return scoped;
    // 搜索:引擎别名/名称/说明 + 本地化名称都参与匹配。
    return scoped.filter((r) => {
      const style = getStyle(r.id);
      const localName = (meta.names[r.id] ?? "").toLowerCase();
      return styleMatches(style, queryLower) || localName.includes(queryLower);
    });
  }, [input, styleIds, showLatin, queryLower, meta.names]);

  const latinResults = useMemo(
    () => (category === "all" ? wantedAll : wantedAll.filter((r) => r.category === category)),
    [wantedAll, category],
  );

  const cjkResults = useMemo(() => {
    if (!showCjk) return [];
    const all = convertCjkAll(input);
    if (!queryLower) return all;
    return all.filter(
      (r) =>
        r.name.toLowerCase().includes(queryLower) ||
        r.text.toLowerCase().includes(queryLower) ||
        r.tags.some((tag) => tag.toLowerCase().includes(queryLower)),
    );
  }, [input, showCjk, queryLower]);
  const containsCjk = hasCjk(input);
  const charCount = Array.from(input).length;

  async function handleCopy(id: string, text: string) {
    const ok = await copyToClipboard(text);
    if (!ok) return;
    setCopied(id);
    window.setTimeout(() => setCopied((current) => (current === id ? null : current)), 1500);
    recents.add(text);
  }

  const tabs: { id: TabId; label: string; count?: number }[] = [
    { id: "styles", label: ui.tool.tabs.styles },
    { id: "favorites", label: ui.tool.tabs.favorites, count: favorites.items.length },
    { id: "recent", label: ui.tool.tabs.recent, count: recents.items.length },
  ];

  const activeCategories = showCategories
    ? styleCategories.filter((c) => wantedAll.some((r) => r.category === c.id))
    : [];

  return (
    <div className="mt-6">
      {/* 输入区(移动端 sticky:翻样式列表时输入框始终在手边) */}
      <div className="card-pop sticky top-14 z-30 p-4 sm:p-5 md:static md:top-0">
        <label htmlFor="fd-input" className="text-sm font-black">
          {ui.tool.inputLabel}
        </label>
        <textarea
          id="fd-input"
          value={input}
          onChange={(event) => setInput(event.target.value.slice(0, 120))}
          rows={2}
          className="mt-2 w-full resize-none rounded-lg border-2 border-ink bg-paper px-4 py-3 text-lg font-bold outline-none placeholder:text-ink-soft/50 focus:shadow-pop-sm"
          placeholder={ui.tool.inputPlaceholder}
          maxLength={120}
        />
        <div className="mt-2 flex items-center justify-between text-xs text-ink-soft">
          <span>
            {charCount}
            {ui.tool.charCount}
          </span>
          <button
            type="button"
            onClick={() => setInput(placeholder)}
            className="font-bold underline-offset-2 hover:underline"
          >
            {ui.tool.reset}
          </button>
        </div>
        {containsCjk && !showCjk ? (
          <p className="mt-2 rounded-lg border-2 border-ink bg-pop-blue/20 px-3 py-2 text-xs font-bold">
            {ui.tool.cjkBanner}
            {locale === "zh-cn" ? (
              <a href="/zh/decorated-nicknames/" className="mx-1 underline">
                {ui.tool.cjkBannerLink}
              </a>
            ) : null}
            {locale === "zh-cn" ? "的环绕框。" : ""}
          </p>
        ) : null}
      </div>

      {/* Tab 行 */}
      <div className="mt-5 flex flex-wrap items-center gap-2" role="tablist" aria-label={ui.tool.tabs.styles}>
        {tabs.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={tab === item.id}
            onClick={() => setTab(item.id)}
            className={`rounded-lg border-2 border-ink px-3 py-1.5 text-sm font-black shadow-pop-sm transition-all ${
              tab === item.id
                ? "bg-pop-pink text-ink"
                : "bg-surface hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
            }`}
          >
            {item.label}
            {typeof item.count === "number" && item.count > 0 ? ` ${item.count}` : ""}
          </button>
        ))}
      </div>

      {/* 样式搜索框 */}
      {tab === "styles" && (wantedAll.length > 0 || cjkResults.length > 0 || queryLower) ? (
        <div className="mt-3">
          <label htmlFor="fd-search" className="sr-only">
            {ui.tool.searchPlaceholder}
          </label>
          <div className="relative">
            <span aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-ink-soft">
              🔍
            </span>
            <input
              id="fd-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="h-10 w-full rounded-lg border-2 border-ink bg-surface pl-9 pr-3 text-sm font-bold outline-none placeholder:text-ink-soft/60 focus:shadow-pop-sm"
              placeholder={ui.tool.searchPlaceholder}
              maxLength={40}
            />
          </div>
        </div>
      ) : null}

      {/* 分类过滤 */}
      {tab === "styles" && activeCategories.length > 1 ? (
        <div className="mt-3 flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() => setCategory("all")}
            className={`rounded-lg border-2 border-ink px-2.5 py-1 text-xs font-black ${
              category === "all" ? "bg-pop-yellow" : "bg-surface"
            }`}
          >
            {ui.tool.all}
          </button>
          {activeCategories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setCategory(c.id)}
              className={`rounded-lg border-2 border-ink px-2.5 py-1 text-xs font-black ${
                category === c.id ? "bg-pop-yellow" : "bg-surface"
              }`}
            >
              {meta.categories[c.id]}
            </button>
          ))}
        </div>
      ) : null}

      {/* 样式网格 */}
      {tab === "styles" ? (
        <div className="pop-scroll mt-4 grid gap-3 md:grid-cols-2">
          {latinResults.map((result) => (
            <StyleCard
              key={result.id}
              result={result}
              ui={ui}
              meta={meta}
              copied={copied === result.id}
              isFavorite={favorites.items.includes(result.text)}
              onCopy={() => handleCopy(result.id, result.text)}
              onToggleFavorite={() => favorites.toggle(result.text)}
              onInfo={() => setInfoId(result.id)}
            />
          ))}
          {cjkResults.length > 0 ? (
            <div className="md:col-span-2">
              <h3 className="mt-6 flex items-center gap-2 text-lg font-black">
                <span className="sticker -rotate-2 bg-pop-green text-paper">{ui.tool.cjkHeading}</span>
                <span className="text-sm font-bold text-ink-soft">{ui.tool.cjkSub}</span>
              </h3>
              <div className="mt-3 grid gap-3 md:grid-cols-2">
                {cjkResults.map((result) => (
                  <CjkCard
                    key={result.id}
                    result={result}
                    copied={copied === result.id}
                    copyLabel={ui.tool.copy}
                    copiedLabel={ui.tool.copied}
                    onCopy={() => handleCopy(result.id, result.text)}
                  />
                ))}
              </div>
            </div>
          ) : null}
          {latinResults.length === 0 && cjkResults.length === 0 ? (
            <p className="text-sm text-ink-soft">{ui.tool.inputPlaceholder}</p>
          ) : null}
        </div>
      ) : null}

      {/* 收藏 */}
      {tab === "favorites" ? (
        <SavedList
          items={favorites.items}
          copied={copied}
          emptyText={ui.tool.favoritesEmpty}
          copyLabel={ui.tool.copy}
          copiedLabel={ui.tool.copied}
          removeAria={ui.tool.removeAria}
          onCopy={(text) => handleCopy(text, text)}
          removeItem={favorites.remove}
        />
      ) : null}

      {/* 最近 */}
      {tab === "recent" ? (
        <SavedList
          items={recents.items}
          copied={copied}
          emptyText={ui.tool.recentEmpty}
          copyLabel={ui.tool.copy}
          copiedLabel={ui.tool.copied}
          removeAria={ui.tool.removeAria}
          onCopy={(text) => handleCopy(text, text)}
          removeItem={recents.remove}
          clear={recents.clear}
          clearLabel={ui.tool.clear}
        />
      ) : null}

      {/* ⓘ 样式详情弹窗 */}
      {infoId ? (
        <InfoDialog
          locale={locale}
          result={wantedAll.find((r) => r.id === infoId) ?? null}
          onClose={() => setInfoId(null)}
        />
      ) : null}
    </div>
  );
}

function StyleCard({
  result,
  ui,
  meta,
  copied,
  isFavorite,
  onCopy,
  onToggleFavorite,
  onInfo,
}: {
  result: ConvertedText;
  ui: ReturnType<typeof getUi>;
  meta: ReturnType<typeof getStyleMeta>;
  copied: boolean;
  isFavorite: boolean;
  onCopy: () => void;
  onToggleFavorite: () => void;
  onInfo: () => void;
}) {
  const name = meta.names[result.id] ?? result.name;
  const risk = result.risk ? (meta.risks[result.id] ?? result.risk) : undefined;
  return (
    <div className="card-pop p-3.5">
      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-sm font-black">{name}</span>
          <span className="rounded border border-ink bg-paper px-1.5 py-0.5 text-[10px] font-bold text-ink-soft">
            {meta.coverage[result.coverage]}
          </span>
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          <button
            type="button"
            onClick={onInfo}
            aria-label={`${ui.tool.infoAria}: ${name}`}
            className="flex h-6 w-6 items-center justify-center rounded-full border border-ink text-[11px] font-black text-ink-soft hover:bg-pop-yellow hover:text-ink"
          >
            ⓘ
          </button>
          <button
            type="button"
            onClick={onToggleFavorite}
            aria-pressed={isFavorite}
            aria-label={isFavorite ? `${ui.tool.unfavAria} ${name}` : `${ui.tool.favAria} ${name}`}
            className="text-lg leading-none hover:scale-110"
          >
            {isFavorite ? "⭐" : "☆"}
          </button>
        </div>
      </div>
      {risk ? <p className="mt-1 text-[11px] leading-snug text-pop-pink">⚠ {risk}</p> : null}
      <p className="result-text mt-2 min-h-7 text-xl leading-relaxed">{result.text}</p>
      <button type="button" onClick={onCopy} className="btn-pop mt-3 h-9 w-full text-xs">
        {copied ? ui.tool.copied : ui.tool.copy}
      </button>
    </div>
  );
}

function CjkCard({
  result,
  copied,
  copyLabel,
  copiedLabel,
  onCopy,
}: {
  result: ReturnType<typeof convertCjkAll>[number];
  copied: boolean;
  copyLabel: string;
  copiedLabel: string;
  onCopy: () => void;
}) {
  return (
    <div className="card-pop p-3.5">
      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-sm font-black">{result.name}</span>
          {result.tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-ink bg-pop-yellow/60 px-1.5 py-0.5 text-[10px] font-bold"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      {result.risk ? <p className="mt-1 text-[11px] leading-snug text-pop-pink">⚠ {result.risk}</p> : null}
      <p className="result-text mt-2 min-h-7 text-xl leading-relaxed">{result.text}</p>
      <button type="button" onClick={onCopy} className="btn-pop mt-3 h-9 w-full text-xs">
        {copied ? copiedLabel : copyLabel}
      </button>
    </div>
  );
}

/** ⓘ 详情弹窗:覆盖范围 / Unicode 区段 / 粘贴后字符数 / 无障碍与检索提示。 */
function InfoDialog({
  locale,
  result,
  onClose,
}: {
  locale: Locale;
  result: ConvertedText | null;
  onClose: () => void;
}) {
  const ui = getUi(locale);
  const meta = getStyleMeta(locale);
  if (!result) return null;
  const name = meta.names[result.id] ?? result.name;
  const pastedChars = Array.from(result.text).length;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={ui.tool.details.title}
    >
      <div className="absolute inset-0 bg-ink/60" onClick={onClose} aria-hidden="true" />
      <div className="card-pop relative w-full max-w-sm bg-surface p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold text-ink-soft">{ui.tool.details.title}</p>
            <h4 className="text-lg font-black">{name}</h4>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={ui.tool.details.close}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border-2 border-ink bg-surface text-sm font-black shadow-pop-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
          >
            ✕
          </button>
        </div>

        <p className="result-text mt-3 rounded-lg border-2 border-ink bg-paper px-3 py-2 text-lg leading-relaxed">
          {result.text}
        </p>

        <dl className="mt-3 space-y-2 text-sm">
          <div className="flex gap-2">
            <dt className="w-24 shrink-0 font-bold text-ink-soft">{ui.tool.details.coverage}</dt>
            <dd className="font-bold">{meta.coverage[result.coverage]}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="w-24 shrink-0 font-bold text-ink-soft">{ui.tool.details.block}</dt>
            <dd className="font-bold">{meta.blocks[result.id] ?? "—"}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="w-24 shrink-0 font-bold text-ink-soft">{ui.tool.details.chars}</dt>
            <dd className="font-black">{pastedChars}</dd>
          </div>
        </dl>

        <ul className="mt-3 space-y-1.5 rounded-lg border-2 border-ink bg-pop-yellow/30 p-3 text-xs leading-relaxed text-ink-soft">
          <li>• {ui.tool.details.charsHint}</li>
          <li>• {ui.tool.details.screenReader}</li>
          <li>• {ui.tool.details.hashtag}</li>
        </ul>

        <button type="button" onClick={onClose} className="btn-pop mt-4 w-full">
          {ui.tool.details.close}
        </button>
      </div>
    </div>
  );
}

function SavedList({
  items,
  copied,
  emptyText,
  copyLabel,
  copiedLabel,
  removeAria,
  onCopy,
  removeItem,
  clear,
  clearLabel,
}: {
  items: string[];
  copied: string | null;
  emptyText: string;
  copyLabel: string;
  copiedLabel: string;
  removeAria: string;
  onCopy: (text: string) => void;
  removeItem: (text: string) => void;
  clear?: () => void;
  clearLabel?: string;
}) {
  if (items.length === 0) {
    return <p className="mt-6 text-sm text-ink-soft">{emptyText}</p>;
  }
  return (
    <div className="mt-4">
      {clear ? (
        <div className="mb-3 text-right">
          <button type="button" onClick={clear} className="text-xs font-bold underline">
            {clearLabel}
          </button>
        </div>
      ) : null}
      <ul className="pop-scroll grid gap-2 md:grid-cols-2">
        {items.map((text, index) => (
          <li key={`${text}-${index}`} className="card-pop flex items-center gap-2 p-3">
            <p className="result-text min-w-0 flex-1 truncate text-lg">{text}</p>
            <button
              type="button"
              onClick={() => onCopy(text)}
              className="btn-pop h-8 shrink-0 px-3 text-xs"
            >
              {copied === text ? copiedLabel : copyLabel}
            </button>
            <button
              type="button"
              onClick={() => removeItem(text)}
              aria-label={removeAria}
              className="shrink-0 px-1 text-ink-soft hover:text-pop-pink"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
