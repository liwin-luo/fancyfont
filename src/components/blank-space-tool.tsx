"use client";

import { useMemo, useState } from "react";
import { CopyButton } from "@/components/copy-button";
import { useLocale } from "@/components/locale-context";
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
import { blankSpaceContent } from "@/lib/content/page-blank-space";
import { convertAll } from "@/lib/text-styles";
import { getUi } from "@/lib/ui-strings";

const MAX_LENGTH = 120;

const chip =
  "inline-flex h-9 cursor-pointer items-center rounded-full border px-4 text-sm font-medium transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brand-500";

export function BlankSpaceTool() {
  const locale = useLocale();
  const c = blankSpaceContent[locale];
  const t = getUi(locale);
  const [kindId, setKindId] = useState<BlankKindId>("hangul");
  const [name, setName] = useState("Luna");
  const [gap, setGap] = useState(1);

  const kind = BLANK_KINDS.find((entry) => entry.id === kindId) ?? BLANK_KINDS[0];
  const line = repeatBlank(kind.char, 20);
  const trimmed = name.slice(0, MAX_LENGTH);

  const results = useMemo(
    () =>
      convertAll(trimmed).map((result) => {
        const text = styleWithBlanks(trimmed, result.id, kind.char, gap);
        return { ...result, text, count: codePointLength(text), localName: t.styleNames[result.id] };
      }),
    [trimmed, kind.char, gap, t],
  );

  return (
    <div>
      <div className="card p-4 sm:p-6">
        <fieldset>
          <legend className="text-sm font-semibold text-ink-700">{c.blankLabel}</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {BLANK_KINDS.map((entry) => {
              const active = entry.id === kind.id;
              return (
                <label
                  key={entry.id}
                  className={`${chip} ${
                    active
                      ? "border-brand-600 bg-brand-100 text-brand-800"
                      : "border-line bg-white text-ink-700 hover:border-brand-300 hover:bg-brand-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="blank-kind"
                    className="sr-only"
                    checked={active}
                    onChange={() => setKindId(entry.id)}
                  />
                  {c.blanks[entry.id].name}
                </label>
              );
            })}
          </div>
          <p className="mt-3 text-sm text-ink-600">{c.blanks[kind.id].note}</p>
        </fieldset>

        <div
          className="mt-4 min-h-12 whitespace-pre-wrap rounded-xl border border-dashed border-line bg-white px-3 py-3 text-lg leading-relaxed"
          aria-hidden="true"
        >
          {line}
        </div>
        <p className="mt-2 text-xs text-ink-500">{c.previewCaption(kind.code)}</p>

        <div role="group" aria-label={c.copyGroupLabel} className="mt-4 flex flex-wrap gap-2">
          {COPY_LENGTHS.map((count) => (
            <CopyButton
              key={count}
              text={repeatBlank(kind.char, count)}
              label={c.copyLabel(count)}
              ariaLabel={`${c.copyLabel(count)}, ${kind.code}`}
            />
          ))}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-ink-600">{c.spaceNote}</p>
      </div>

      <section className="mt-10" aria-labelledby="fancy-blank-heading">
        <h2 id="fancy-blank-heading" className="text-xl font-bold text-ink-900">
          {c.fancyHeading}
        </h2>
        <div className="card mt-4 p-4 sm:p-6">
          <label htmlFor="blank-name" className="mb-2 block text-sm font-semibold text-ink-700">
            {c.nameLabel}
          </label>
          <input
            id="blank-name"
            value={name}
            maxLength={MAX_LENGTH}
            placeholder={c.namePlaceholder}
            autoComplete="off"
            onChange={(event) => setName(event.target.value.slice(0, MAX_LENGTH))}
            className="text-input"
          />

          <fieldset className="mt-4">
            <legend className="text-sm font-semibold text-ink-700">{c.gapLabel}</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {Array.from({ length: GAP_MAX - GAP_MIN + 1 }, (_, index) => {
                const value = GAP_MIN + index;
                const active = value === gap;
                return (
                  <label
                    key={value}
                    className={`${chip} min-w-9 justify-center px-0 ${
                      active
                        ? "border-brand-600 bg-brand-100 text-brand-800"
                        : "border-line bg-white text-ink-700 hover:border-brand-300 hover:bg-brand-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="blank-gap"
                      className="sr-only"
                      checked={active}
                      onChange={() => setGap(value)}
                    />
                    {value}
                  </label>
                );
              })}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">{c.gapNote}</p>
          </fieldset>
        </div>

        {trimmed.length === 0 ? (
          <p className="mt-6 rounded-xl border border-dashed border-line bg-white/60 p-8 text-center text-sm text-ink-600">
            {t.common.typeToSee(results.length)}
          </p>
        ) : (
          <ul className="mt-6 space-y-3">
            {results.map((result) => (
              <li
                key={result.id}
                className="flex flex-col gap-3 rounded-xl border border-line bg-surface p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="min-w-0">
                  <span className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-semibold tracking-wider text-ink-500 uppercase">
                      {result.localName}
                    </span>
                    <span className="text-[11px] text-ink-500">{c.countLabel(result.count)}</span>
                    {result.coverage === "partial" && (
                      <span className="rounded bg-warning-bg px-1.5 py-0.5 text-[10px] font-semibold text-warning">
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
                  <p className="result-text mt-1 text-lg whitespace-pre-wrap text-ink-900 select-all">
                    {result.text}
                  </p>
                </div>
                <CopyButton text={result.text} ariaLabel={t.common.copyStyle(result.localName)} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
