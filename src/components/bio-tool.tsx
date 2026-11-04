"use client";

import { useMemo, useState } from "react";
import { composeBio } from "@/lib/bio";
import { copyText } from "@/lib/copy";
import { downloadTextPng } from "@/lib/export-image";
import { measureText, sliceGraphemes } from "@/lib/measure";
import { previewExtraMax } from "@/lib/platform-rules";
import { useLocalList } from "@/lib/storage";
import type { BioTemplate } from "@/lib/content/platform-pages-en";
import type { TextStyleId } from "@/lib/text-styles";
import { PlatformPreviewScreen } from "@/components/platform-preview";
import { useToast } from "@/components/toast";
import { useLocale } from "@/components/locale-context";
import type { PlatformPreviewId } from "@/lib/platform-preview";
import { getUi } from "@/lib/ui-strings";

const BOARD_KEY = "fancyfont:symbol-board";
const MAX_LENGTH = 300;

export function BioTool({
  platformId,
  platform,
  templates,
  styles,
}: {
  platformId: PlatformPreviewId;
  platform: string;
  templates: BioTemplate[];
  styles: TextStyleId[];
}) {
  const locale = useLocale();
  const t = getUi(locale);
  const showToast = useToast();
  const [text, setText] = useState(templates[0]?.text ?? "");
  const [styleId, setStyleId] = useState<TextStyleId | "plain">(styles[0] ?? "plain");
  const boardStore = useLocalList(BOARD_KEY, 40);
  // ponytail: the board stores newest first. Reverse so the tail matches the order symbols were added.
  const board = useMemo(() => [...boardStore.items].reverse(), [boardStore.items]);
  const max = previewExtraMax(platformId) ?? 0;
  const draft = composeBio(text, styleId, board, max);
  const points = measureText(draft.text).codePoints;

  async function copyDraft() {
    const ok = await copyText(draft.text);
    showToast(ok ? t.common.copied : t.common.copyFailed);
  }

  async function savePng() {
    const ok = await downloadTextPng(draft.text, `${platformId}-bio.png`);
    showToast(ok ? t.common.savedAsPng : t.common.pngFailed);
  }

  return (
    <div className="card p-4 sm:p-6">
      <div className="grid items-start gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="bio-input" className="mb-2 block text-sm font-semibold text-ink-700">
            {t.common.yourText}
          </label>
          <textarea
            id="bio-input"
            value={text}
            onChange={(event) => setText(sliceGraphemes(event.target.value, MAX_LENGTH))}
            rows={4}
            placeholder={t.common.yourText}
            autoComplete="off"
            spellCheck={false}
            className="text-input h-auto resize-y py-3"
          />
          <div role="group" aria-label={t.bio.drafts} className="mt-4 flex flex-wrap gap-2">
            {templates.map((item) => {
              const active = item.text === text;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setText(item.text)}
                  className={`h-9 rounded-full border px-4 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 ${
                    active
                      ? "border-brand-600 bg-brand-100 text-brand-800"
                      : "border-line bg-white text-ink-700 hover:border-brand-300 hover:bg-brand-50"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
          <p className="mt-2 text-xs text-ink-500">{t.bio.fillHint}</p>
          <label htmlFor="bio-style" className="mt-4 mb-2 block text-sm font-semibold text-ink-700">
            {t.gaming.letterStyle}
          </label>
          <select
            id="bio-style"
            value={styleId}
            onChange={(event) => setStyleId(event.target.value as TextStyleId | "plain")}
            className="text-input h-11"
          >
            <option value="plain">{t.gaming.normalLetters}</option>
            {styles.map((id) => (
              <option key={id} value={id}>
                {t.styleNames[id]}
              </option>
            ))}
          </select>
          <p className="result-text mt-4 text-lg whitespace-pre-wrap text-ink-900">{draft.text}</p>
          <p className="mt-3 text-sm text-ink-600">{t.bio.boardTail}</p>
          <p className="mt-1 text-sm text-ink-600">{t.platformPreview.approxField(platform, max)}</p>
          {draft.over && <p className="mt-1 text-sm text-warning">{t.common.overLimit(points, max)}</p>}
          <div className="mt-4 flex flex-wrap gap-2">
            <button type="button" onClick={copyDraft} className="btn-primary">
              {t.common.copy}
            </button>
            <button type="button" onClick={savePng} className="btn-secondary">
              {t.bio.png}
            </button>
          </div>
        </div>
        <section aria-labelledby="inline-preview-heading" className="overflow-hidden rounded-2xl border border-line">
          <h2 id="inline-preview-heading" className="border-b border-line px-4 py-3 text-sm font-bold text-ink-900">
            {t.platformPreview.heading(platform)}
          </h2>
          <PlatformPreviewScreen id={platformId} platform={platform} raw={text} styled={draft.text} />
        </section>
      </div>
    </div>
  );
}
