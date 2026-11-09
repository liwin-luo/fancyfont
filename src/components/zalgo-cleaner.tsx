"use client";

// 乱码清洗器:剥离 zalgo 组合符号与变体选择符,还原干净文本。

import { useState } from "react";
import { stripZalgo } from "@/lib/zalgo-clean";
import { getUi } from "@/lib/ui-strings";
import type { Locale } from "@/lib/i18n";

export function ZalgoCleaner({ locale }: { locale: Locale }) {
  const ui = getUi(locale).tool.cleaner;
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);

  const { text, removed } = stripZalgo(input);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // 复制失败静默处理:用户可以手动选中输出框复制。
    }
  }

  return (
    <div className="card-pop mt-8 p-4 sm:p-5">
      <h3 className="text-lg font-black">{ui.heading}</h3>
      <p className="mt-1 text-sm text-ink-soft">{ui.intro}</p>
      <label htmlFor="zalgo-input" className="sr-only">
        {ui.inputLabel}
      </label>
      <textarea
        id="zalgo-input"
        value={input}
        onChange={(event) => setInput(event.target.value.slice(0, 400))}
        rows={3}
        className="mt-3 w-full resize-none rounded-lg border-2 border-ink bg-paper px-4 py-3 text-base outline-none focus:shadow-pop-sm"
        placeholder={ui.inputPlaceholder}
        maxLength={400}
      />
      <div className="mt-3 flex items-center justify-between gap-3">
        <p className="text-xs font-bold text-ink-soft" aria-live="polite">
          {input ? `${ui.removedPrefix} ${removed} ${ui.removedSuffix}` : ui.idle}
        </p>
        <div className="flex gap-2">
          <button type="button" onClick={() => setInput("")} className="btn-pop-secondary h-9 text-xs">
            {ui.clear}
          </button>
          <button type="button" onClick={handleCopy} disabled={!text} className="btn-pop h-9 text-xs">
            {copied ? ui.copied : ui.copyResult}
          </button>
        </div>
      </div>
      {text ? (
        <p className="result-text mt-3 min-h-8 rounded-lg border-2 border-ink bg-paper px-4 py-3 text-xl leading-relaxed">
          {text}
        </p>
      ) : null}
    </div>
  );
}
