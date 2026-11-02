"use client";

import { useMemo, useState } from "react";
import { convertText, getStyle, type TextStyleId } from "@/lib/text-styles";
import { buildCustomNickname, type CustomCombo } from "@/lib/nickname";
import { CopyButton } from "@/components/copy-button";
import { PinnedFieldPreview } from "@/components/pinned-field-preview";
import { PlatformPreviewDialog, PlatformPreviewScreen, PreviewButton } from "@/components/platform-preview";
import { useLocale } from "@/components/locale-context";
import type { PinnedFieldPreview as PinnedFieldPreviewCopy } from "@/lib/content/platform-pages-en";
import type { PlatformPreviewId } from "@/lib/platform-preview";
import { measureText, sliceGraphemes } from "@/lib/measure";
import { codePointLength, plainHandle, previewFields } from "@/lib/platform-preview";
import { confidenceLabel, previewNameRule } from "@/lib/platform-rules";
import { getUi } from "@/lib/ui-strings";

const MAX_LENGTH = 120;

export interface PlatformPreset {
  label: string;
  left: string;
  right: string;
  transform: string;
}

export function PlatformTextTool({
  platform,
  preview,
  defaultText,
  featuredStyles,
  presets,
  pinnedPreview,
}: {
  platform: string;
  preview: PlatformPreviewId;
  defaultText: string;
  featuredStyles: TextStyleId[];
  presets: PlatformPreset[];
  pinnedPreview?: PinnedFieldPreviewCopy;
}) {
  const [text, setText] = useState(defaultText);
  const [selected, setSelected] = useState(0);
  const [previewAt, setPreviewAt] = useState<number | null>(null);
  const locale = useLocale();
  const t = getUi(locale);
  const previewText = sliceGraphemes(text, MAX_LENGTH);
  const charCount = measureText(previewText).graphemes;
  const platformRule = previewNameRule(preview);
  const platformMax = platformRule.approxMax;

  const styleRows = useMemo(
    () => featuredStyles.map((id) => ({ style: getStyle(id), text: convertText(previewText, id) })),
    [featuredStyles, previewText],
  );
  const presetRows = useMemo(
    () =>
      presets.map((preset) => ({
        label: preset.label,
        // Preset transforms come from our own trusted content data.
        text: buildCustomNickname(previewText, preset as CustomCombo),
      })),
    [presets, previewText],
  );
  const rows = [
    ...styleRows.map((row) => ({ label: t.styleNames[row.style.id], text: row.text })),
    ...presetRows,
  ];
  const previewItems = rows.map((row) => row.text);
  const activeIndex = rows.length === 0 ? 0 : Math.min(selected, rows.length - 1);
  const active = rows[activeIndex];
  const showPinned = Boolean(pinnedPreview && active && platformMax !== null);
  const handleKind = previewFields[preview].handle;

  function openPreview(index: number) {
    setSelected(index);
    setPreviewAt(index);
  }

  const inputFields = (
    <>
      <label htmlFor="platform-input" className="mb-2 block text-sm font-semibold text-ink-700">
        {t.common.yourText}
      </label>
      <input
        id="platform-input"
        type="text"
        value={text}
        onChange={(event) => setText(sliceGraphemes(event.target.value, MAX_LENGTH))}
        placeholder={t.common.yourText}
        autoComplete="off"
        spellCheck={false}
        className="text-input"
      />
      <p className="mt-2 text-xs text-ink-500">
        {charCount}/{MAX_LENGTH} {t.common.charactersInfo} · {t.common.browserOnly}
      </p>
      {platformMax !== null && !showPinned && (
        <p className="mt-1 text-xs text-ink-500">{t.platformPreview.approxField(platform, platformMax)}</p>
      )}
      {platformMax !== null &&
        !showPinned &&
        codePointLength(previewText) > platformMax &&
        confidenceLabel(platformRule) !== "verified" && (
          <p className="mt-1 text-xs text-warning">
            {t.common.overLimit(codePointLength(previewText), platformMax)} {t.platformPreview.notTested}
          </p>
        )}
    </>
  );

  const previewPane =
    charCount > 0 && active && showPinned && pinnedPreview && platformMax !== null ? (
      <PinnedFieldPreview
        copy={pinnedPreview}
        styled={active.text}
        handle={handleKind ? plainHandle(previewText, handleKind) : platform}
        label={active.label}
        count={measureText(active.text).graphemes}
        max={platformMax}
      />
    ) : charCount > 0 && active ? (
      <section aria-labelledby="inline-preview-heading" className="overflow-hidden rounded-2xl border border-line">
        <h2 id="inline-preview-heading" className="border-b border-line px-4 py-3 text-sm font-bold text-ink-900">
          {t.platformPreview.heading(platform)}
        </h2>
        <PlatformPreviewScreen id={preview} platform={platform} raw={previewText} styled={active.text} />
      </section>
    ) : null;

  return (
    <div className="card p-4 sm:p-6">
      {previewPane ? (
        <div className="grid items-start gap-4 md:grid-cols-2">
          <div>{inputFields}</div>
          <div>{previewPane}</div>
        </div>
      ) : (
        inputFields
      )}

      {charCount > 0 && (
        <>
          <h3 className="mt-6 text-sm font-bold text-ink-900">
            {t.platformTool.stylesFit(platform)}
          </h3>
          <ul className="mt-3 space-y-2">
            {styleRows.map(({ style, text: value }, index) => (
              <li
                key={style.id}
                className={`flex items-center justify-between gap-3 rounded-xl border bg-white p-3 ${
                  index === activeIndex ? "border-brand-400 ring-1 ring-brand-200" : "border-line"
                }`}
              >
                <div className="min-w-0 flex-1">
                  <span
                    className="text-[11px] font-semibold tracking-wider text-ink-500 uppercase"
                    title={style.note}
                  >
                    {t.styleNames[style.id]}
                  </span>
                  <p className="result-text text-lg text-ink-900 select-all">{value}</p>
                </div>
                <div className="flex shrink-0 items-center gap-1.5">
                  <PreviewButton onClick={() => openPreview(index)} />
                  <CopyButton
                    text={value}
                    ariaLabel={t.common.copyStyle(t.styleNames[style.id])}
                    successToast={t.platformTool.openToPaste(platform)}
                  />
                </div>
              </li>
            ))}
          </ul>

          <h3 className="mt-6 text-sm font-bold text-ink-900">
            {t.platformTool.presetsHeading(platform)}
          </h3>
          <p className="mt-1 text-xs text-ink-500">{t.platformTool.presetsWrap}</p>
          <ul className="mt-3 space-y-2">
            {presetRows.map((preset, index) => (
              <li
                key={preset.label}
                className={`flex items-center justify-between gap-3 rounded-xl border bg-white p-3 ${
                  styleRows.length + index === activeIndex
                    ? "border-brand-400 ring-1 ring-brand-200"
                    : "border-line"
                }`}
              >
                <div className="min-w-0 flex-1">
                  <span className="text-[11px] font-semibold tracking-wider text-ink-500 uppercase">
                    {preset.label}
                  </span>
                  <p className="result-text text-lg text-ink-900 select-all">{preset.text}</p>
                </div>
                <div className="flex shrink-0 items-center gap-1.5">
                  <PreviewButton onClick={() => openPreview(styleRows.length + index)} />
                  <CopyButton
                    text={preset.text}
                    ariaLabel={t.symbols.copyCombo(preset.label)}
                    successToast={t.platformTool.openToPaste(platform)}
                  />
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
      <PlatformPreviewDialog
        id={preview}
        platform={platform}
        raw={previewText}
        items={previewItems}
        index={charCount > 0 ? previewAt : null}
        onIndex={(index) => {
          setPreviewAt(index);
          if (index !== null) setSelected(index);
        }}
        fieldCard={
          showPinned && pinnedPreview
            ? {
                displayName: pinnedPreview.displayName,
                username: pinnedPreview.username,
                sign: pinnedPreview.sign,
                handle: handleKind ? plainHandle(previewText, handleKind) : platform,
              }
            : undefined
        }
      />
    </div>
  );
}
