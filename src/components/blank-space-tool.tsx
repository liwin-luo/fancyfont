"use client";

// 空白字符工具:三种可见宽度空白 + 复制档位 + 字母间隔样式化。
// 文案首版仅英文(symbols/blank-space 页面尚未多语言)。

import { useMemo, useState } from "react";
import {
  BLANK_KINDS,
  COPY_LENGTHS,
  GAP_MAX,
  GAP_MIN,
  codePointLength,
  repeatBlank,
  styleWithBlanks,
  type BlankKindId,
} from "@/lib/blank-space";
import { blankSpaceEn } from "@/lib/content/tools-en";
import { convertAll, getStyle } from "@/lib/text-styles";
import { getStyleMeta } from "@/lib/style-meta";
import { sliceGraphemes } from "@/lib/measure";

const MAX_LENGTH = 120;

const chipActive =
  "border-ink bg-pop-yellow text-ink shadow-pop-sm";
const chipIdle =
  "border-ink/30 bg-white text-ink-soft hover:border-ink hover:text-ink";

export function BlankSpaceTool() {
  const c = blankSpaceEn;
  const meta = getStyleMeta("en");
  const [kindId, setKindId] = useState<BlankKindId>("hangul");
  const [name, setName] = useState("Luna");
  const [gap, setGap] = useState(1);
  const [copied, setCopied] = useState<string | null>(null);

  const kind = BLANK_KINDS.find((entry) => entry.id === kindId) ?? BLANK_KINDS[0];
  const line = repeatBlank(kind.char, 20);
  const trimmed = sliceGraphemes(name, MAX_LENGTH);

  const results = useMemo(
    () =>
      convertAll(trimmed).map((result) => {
        const text = styleWithBlanks(trimmed, result.id, kind.char, gap);
        return { ...result, text, count: codePointLength(text), localName: meta.names[result.id] };
      }),
    [trimmed, kind.char, gap, meta],
  );

  async function copy(text: string, key: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      window.setTimeout(() => setCopied((current) => (current === key ? null : current)), 1200);
    } catch {
      // 复制失败静默处理:用户可以手动选中输出复制。
    }
  }

  return (
    <div className="space-y-10">
      <section className="card-pop p-4 sm:p-6" aria-labelledby="blank-kind-heading">
        <h2 id="blank-kind-heading" className="text-sm font-black tracking-wide uppercase">
          Blank character
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {BLANK_KINDS.map((entry) => {
            const active = entry.id === kind.id;
            return (
              <button
                key={entry.id}
                type="button"
                aria-pressed={active}
                onClick={() => setKindId(entry.id)}
                className={`inline-flex h-9 items-center rounded-lg border-2 px-4 text-sm font-bold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${
                  active ? chipActive : chipIdle
                }`}
              >
                {entry.id === "hangul" ? "Hangul filler" : entry.id === "braille" ? "Braille blank" : "Ideographic space"}
              </button>
            );
          })}
        </div>
        <p className="mt-3 text-sm text-ink-soft">
          {kind.code}. {kind.id === "ideo" ? "A fullwidth space, so the gap is wider." : "One character wide, and it draws blank."}
        </p>

        <div
          className="mt-4 min-h-12 rounded-lg border-2 border-dashed border-ink/40 bg-white px-3 py-3 text-lg leading-relaxed"
          aria-hidden="true"
        >
          {line}
        </div>
        <p className="mt-2 text-xs text-ink-soft">
          The box holds 20 {kind.code} characters. The buttons copy 1, 20 or 100.
        </p>

        <div role="group" aria-label="Copy this blank" className="mt-4 flex flex-wrap gap-2">
          {COPY_LENGTHS.map((count) => {
            const key = `blank-${count}`;
            return (
              <button
                key={count}
                type="button"
                onClick={() => copy(repeatBlank(kind.char, count), key)}
                className={`btn-pop h-9 px-4 text-xs ${copied === key ? "bg-pop-green" : ""}`}
              >
                {copied === key ? "Copied!" : count === 1 ? "Copy 1" : count === 20 ? "Copy a line (20)" : "Copy a block (100)"}
              </button>
            );
          })}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          A keyboard space is U+0020. Chats trim it, and web pages collapse a run of them. These three keep their width.
        </p>
      </section>

      <section aria-labelledby="fancy-blank-heading">
        <h2 id="fancy-blank-heading" className="text-xl font-black">
          Blank between fancy letters
        </h2>
        <div className="card-pop mt-4 p-4 sm:p-6">
          <label htmlFor="blank-name" className="mb-2 block text-sm font-bold">
            Your name
          </label>
          <input
            id="blank-name"
            value={name}
            placeholder="Luna"
            autoComplete="off"
            onChange={(event) => setName(sliceGraphemes(event.target.value, MAX_LENGTH))}
            className="w-full rounded-lg border-2 border-ink bg-white px-3 py-2 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          />

          <fieldset className="mt-4">
            <legend className="text-sm font-bold">Blanks between letters</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {Array.from({ length: GAP_MAX - GAP_MIN + 1 }, (_, index) => {
                const value = GAP_MIN + index;
                const active = value === gap;
                return (
                  <button
                    key={value}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setGap(value)}
                    className={`flex h-9 w-9 items-center justify-center rounded-lg border-2 text-sm font-bold transition-all ${
                      active ? chipActive : chipIdle
                    }`}
                  >
                    {value}
                  </button>
                );
              })}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              0 leaves the fancy text unchanged, including spaces you typed. 1–5 removes those spaces and uses the
              selected blank for every gap.
            </p>
          </fieldset>
        </div>

        {trimmed.length === 0 ? (
          <p className="mt-6 rounded-lg border-2 border-dashed border-ink/40 bg-white/60 p-8 text-center text-sm text-ink-soft">
            Type a name to see styled results.
          </p>
        ) : (
          <ul className="mt-6 space-y-3">
            {results.map((result) => {
              const key = `style-${result.id}`;
              return (
                <li
                  key={result.id}
                  className="flex flex-col gap-3 rounded-xl border-2 border-ink bg-surface p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="min-w-0">
                    <span className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-black tracking-wider text-ink-soft uppercase">
                        {result.localName}
                      </span>
                      <span className="text-[11px] text-ink-soft">{result.count} characters</span>
                      {result.risk && (
                        <span className="rounded bg-pop-orange px-1.5 py-0.5 text-[10px] font-bold" title={result.risk}>
                          !
                        </span>
                      )}
                    </span>
                    <p className="mt-1 text-lg whitespace-pre-wrap break-all select-all">{result.text}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => copy(result.text, key)}
                    className={`btn-pop h-9 shrink-0 px-4 text-xs ${copied === key ? "bg-pop-green" : ""}`}
                  >
                    {copied === key ? "Copied!" : "Copy"}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </div>
  );
}
