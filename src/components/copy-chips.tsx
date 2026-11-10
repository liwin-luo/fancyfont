"use client";

// 一键复制示例芯片:点击写剪贴板,下方 aria-live 行反馈"已复制"。
// 服务端模板按 locale 传入 copiedLabel;复制失败静默(可长按手动复制),
// 与 symbols-tool 的复制交互保持一致。

import { useState } from "react";

export function CopyChips({ items, copiedLabel }: { items: string[]; copiedLabel: string }) {
  const [copied, setCopied] = useState<string | null>(null);

  async function copy(item: string) {
    try {
      await navigator.clipboard.writeText(item);
      setCopied(item);
      window.setTimeout(() => setCopied((current) => (current === item ? null : current)), 1500);
    } catch {
      // 复制失败静默处理:用户可以手动长按复制。
    }
  }

  return (
    <div>
      <ul className="mt-4 flex flex-wrap gap-2.5">
        {items.map((item) => (
          <li key={item}>
            <button
              type="button"
              onClick={() => copy(item)}
              className="sticker cursor-pointer bg-paper text-base transition-all duration-100 hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-pop-pink/20 hover:shadow-pop-sm"
            >
              {item}
              {copied === item ? <span aria-hidden="true" className="ml-1 text-pop-green">✓</span> : null}
            </button>
          </li>
        ))}
      </ul>
      <p aria-live="polite" className="mt-2 min-h-5 text-xs font-bold text-ink-soft">
        {copied ? `${copied} — ${copiedLabel}` : ""}
      </p>
    </div>
  );
}
