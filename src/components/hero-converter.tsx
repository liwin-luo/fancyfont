"use client";

import { useState } from "react";
import { convertText } from "@/lib/text-styles";
import { measureText, sliceGraphemes } from "@/lib/measure";
import { CopyButton } from "@/components/copy-button";
import { useLocale } from "@/components/locale-context";
import { getUi } from "@/lib/ui-strings";

const MAX_LENGTH = 120;

export const HERO_STYLE_IDS = [
  "script",
  "bold",
  "fraktur",
  "smallCaps",
  "bubble",
  "fullwidth",
] as const;

/**
 * Compact first-screen converter for the homepage hero. convertText is a
 * pure character mapping, so the default input's rows server-render into
 * the initial HTML and match the first client render.
 */
export function HeroConverter({ defaultText }: { defaultText: string }) {
  const locale = useLocale();
  const t = getUi(locale);
  const [text, setText] = useState(defaultText);
  const source = sliceGraphemes(text, MAX_LENGTH);
  const count = measureText(source).graphemes;

  return (
    <div className="card p-4 text-left sm:p-5">
      <label htmlFor="hero-input" className="mb-2 block text-sm font-semibold text-ink-700">
        {t.common.yourText}
      </label>
      <input
        id="hero-input"
        type="text"
        value={text}
        onChange={(event) => setText(sliceGraphemes(event.target.value, MAX_LENGTH))}
        placeholder={t.common.yourText}
        autoComplete="off"
        spellCheck={false}
        className="text-input"
      />
      <p className="mt-2 text-xs text-ink-500">
        {count}/{MAX_LENGTH} {t.common.charactersInfo} · {t.common.browserOnly}
      </p>
      <ul className="mt-4 space-y-2.5">
        {HERO_STYLE_IDS.map((id) => {
          const line = convertText(source, id);
          return (
            <li key={id} className="flex items-center justify-between gap-3">
              <span className="w-24 shrink-0 text-xs text-ink-500">{t.styleNames[id]}</span>
              <span className="result-text min-w-0 flex-1 truncate text-lg font-medium text-ink-900">
                {line}
              </span>
              <CopyButton text={line} ariaLabel={t.common.copyStyle(t.styleNames[id])} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
