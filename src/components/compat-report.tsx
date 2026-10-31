"use client";

import { useLocale } from "@/components/locale-context";
import { analyzeNickname, reportStatus } from "@/lib/unicode-analyze";
import type { PlatformFieldRule } from "@/lib/platform-rules";
import type { TextStyleId } from "@/lib/text-styles";
import { getUi } from "@/lib/ui-strings";

export function CompatReport({
  id,
  text,
  source,
  styleId,
  rule,
}: {
  id?: string;
  text: string;
  source: string;
  styleId: TextStyleId | "identity";
  rule: PlatformFieldRule | null;
}) {
  const t = getUi(useLocale()).gaming;
  const analysis = analyzeNickname(text, styleId, source);
  const status = reportStatus(rule);

  return (
    <div id={id} className="mt-2 rounded-xl border border-line bg-white p-3 text-xs leading-relaxed text-ink-600">
      <h3 className="font-semibold text-ink-800">{t.inputPreview}</h3>
      <p className="result-text mt-1 whitespace-pre-wrap text-sm text-ink-900">{text}</p>
      <h3 className="mt-3 font-semibold text-ink-800">{t.unicodeHeading}</h3>
      <p className="mt-1">{t.analysisComplete}</p>
      {analysis.hasCombining && <p>{t.combiningMark}</p>}
      {analysis.hasVariationSelector && <p>{t.variationSelector}</p>}
      {analysis.hasEmoji && <p>{t.emojiFlag}</p>}
      {analysis.unchangedLatin.length > 0 && <p>{t.unchangedLetters(analysis.unchangedLatin.join(" "))}</p>}
      {analysis.graphemes.length > 0 && (
        <ul className="mt-2 max-h-40 space-y-1 overflow-auto font-mono text-[11px] text-ink-700" aria-label={t.codePointsLabel}>
          {analysis.graphemes.map((grapheme, index) => (
            <li key={`${index}-${grapheme.points.join("-")}`}>
              <span className="result-text">{grapheme.text}</span> {grapheme.points.join(" ")}
            </li>
          ))}
        </ul>
      )}
      <h3 className="mt-3 font-semibold text-ink-800">{t.platformHeading}</h3>
      <p className="mt-1">{status === "none" ? t.platformNone : t.platformRule(status)}</p>
      <p>{t.displayDevice}</p>
    </div>
  );
}
