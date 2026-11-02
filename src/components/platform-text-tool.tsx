"use client";

import { useMemo, useState } from "react";
import { convertText, getStyle, type TextStyleId } from "@/lib/text-styles";
import { buildCustomNickname, type CustomCombo } from "@/lib/nickname";
import { CopyButton } from "@/components/copy-button";
import { PinnedFieldPreview } from "@/components/pinned-field-preview";
import { PlatformPreviewDialog, PreviewButton } from "@/components/platform-preview";
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
  const previewItems = [...styleRows.map((row) => row.text), ...presetRows.map((row) => row.text)];
  const leadRow = presetRows[0];
  const showPinned = Boolean(pinnedPreview && leadRow && platformMax !== null);
  // Same string as the first preset row. Graphemes come from Intl.Segmenter in measureText.
  const pinnedStyled = leadRow?.text ?? "";
  const pinnedCount = showPinned ? measureText(pinnedStyled).graphemes : 0;
  const handleKind = previewFields[preview].handle;

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

  return (
    <div className="card p-4 sm:p-6">
      {showPinned && pinnedPreview && platformMax !== null && leadRow ? (
        <div className="grid items-start gap-4 lg:grid-cols-2">
          <div className="order-2 lg:order-1">{inputFields}</div>
          <div className="order-1 lg:order-2">
            <PinnedFieldPreview
              copy={pinnedPreview}
              styled={pinnedStyled}
              handle={handleKind ? plainHandle(previewText, handleKind) : platform}
              label={leadRow.label}
              count={pinnedCount}
              max={platformMax}
            />
          </div>
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
                className="flex items-center justify-between gap-3 rounded-xl border border-line bg-white p-3"
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
                  <PreviewButton onClick={() => setPreviewAt(index)} />
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
                className="flex items-center justify-between gap-3 rounded-xl border border-line bg-white p-3"
              >
                <div className="min-w-0 flex-1">
                  <span className="text-[11px] font-semibold tracking-wider text-ink-500 uppercase">
                    {preset.label}
                  </span>
                  <p className="result-text text-lg text-ink-900 select-all">{preset.text}</p>
                </div>
                <div className="flex shrink-0 items-center gap-1.5">
                  <PreviewButton onClick={() => setPreviewAt(styleRows.length + index)} />
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
        onIndex={setPreviewAt}
      />
    </div>
  );
}
