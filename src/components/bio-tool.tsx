"use client";

import { useMemo, useState } from "react";
import { composeBio } from "@/lib/bio";
import { copyText } from "@/lib/copy";
import { downloadTextPng } from "@/lib/export-image";
import { lengthBucket, measureText } from "@/lib/measure";
import { previewExtraMax } from "@/lib/platform-rules";
import { useLocalList } from "@/lib/storage";
import { track } from "@/lib/analytics";
import type { BioTemplate } from "@/lib/content/platform-pages-en";
import type { TextStyleId } from "@/lib/text-styles";
import { PlatformPreviewScreen } from "@/components/platform-preview";
import { useToast } from "@/components/toast";
import { useLocale } from "@/components/locale-context";
import type { PlatformPreviewId } from "@/lib/platform-preview";
import { getUi } from "@/lib/ui-strings";

const BOARD_KEY = "fancyfont:symbol-board";

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
  const [templateId, setTemplateId] = useState(templates[0]?.id ?? "");
  const [styleId, setStyleId] = useState<TextStyleId | "plain">(styles[0] ?? "plain");
  const boardStore = useLocalList(BOARD_KEY, 40);
  // ponytail: the board stores newest first. Reverse so the tail matches the order symbols were added.
  const board = useMemo(() => [...boardStore.items].reverse(), [boardStore.items]);
  const template = templates.find((item) => item.id === templateId) ?? templates[0];
  const max = previewExtraMax(platformId) ?? 0;
  const draft = composeBio(template?.text ?? "", styleId, board, max);
  const points = measureText(draft.text).codePoints;

  async function copyDraft() {
    const ok = await copyText(draft.text);
    track("bio_copy", {
      tool: "bio",
      platform: platformId,
      style_id: styleId,
      category: template?.id,
      length_bucket: lengthBucket(measureText(draft.text).graphemes),
      ok,
    });
    showToast(ok ? t.common.copied : t.common.copyFailed);
  }

  async function savePng() {
    const ok = await downloadTextPng(draft.text, `${platformId}-bio.png`);
    track("bio_png_export", {
      tool: "bio",
      platform: platformId,
      style_id: styleId,
      category: template?.id,
      length_bucket: lengthBucket(measureText(draft.text).graphemes),
      ok,
    });
    showToast(ok ? t.common.savedAsPng : t.common.pngFailed);
  }

  return (
    <div className="card p-4 sm:p-6">
      <div className="grid items-start gap-4 md:grid-cols-2">
        <div>
          <div role="group" aria-label={t.bio.drafts} className="flex flex-wrap gap-2">
            {templates.map((item) => {
              const active = item.id === template?.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => {
                    setTemplateId(item.id);
                    track("bio_template_select", {
                      tool: "bio",
                      platform: platformId,
                      category: item.id,
                    });
                  }}
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
          <PlatformPreviewScreen id={platformId} platform={platform} raw={template?.text ?? ""} styled={draft.text} />
        </section>
      </div>
    </div>
  );
}
