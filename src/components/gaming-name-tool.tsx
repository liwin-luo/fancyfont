"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { localePath } from "@/lib/i18n";
import {
  buildCustomNickname,
  decoratorPairs,
  generateNicknames,
  suggestedBases,
  MAX_NICKNAME_LENGTH,
  NICKNAME_PAGE_SIZE,
  vibeStyles,
  type CustomCombo,
  type NicknameTransform,
} from "@/lib/nickname";
import { styleCategories, textStyles } from "@/lib/text-styles";
import { pasteTargets, type PasteTargetId } from "@/lib/composer";
import { codePointLength } from "@/lib/platform-preview";
import { confidenceLabel, previewNameRule } from "@/lib/platform-rules";
import { CompatReport } from "@/components/compat-report";
import { CopyButton } from "@/components/copy-button";
import { PlatformPreviewDialog, PlatformPreviewScreen, PreviewButton } from "@/components/platform-preview";
import type { PlatformPreviewId } from "@/lib/platform-preview";
import { useToast } from "@/components/toast";
import { copyText } from "@/lib/copy";
import { lengthBucket, measureText } from "@/lib/measure";
import { track } from "@/lib/analytics";
import { useLocalList } from "@/lib/storage";
import { useLocale } from "@/components/locale-context";
import { getUi } from "@/lib/ui-strings";

type StyleFilter = (typeof vibeStyles)[number]["id"] | "all";

const SAVED_NAMES_KEY = "fancyfont:saved-names";
const CUSTOM_COMBOS_KEY = "fancyfont:custom-combos";

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" aria-hidden="true" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
      <path d="M10 2.5l2.35 4.76 5.25.76-3.8 3.7.9 5.24L10 14.52l-4.7 2.44.9-5.24-3.8-3.7 5.25-.76L10 2.5z" />
    </svg>
  );
}

function parseCombo(raw: string): CustomCombo | null {
  try {
    const parsed: unknown = JSON.parse(raw);
    if (
      parsed &&
      typeof parsed === "object" &&
      typeof (parsed as CustomCombo).left === "string" &&
      typeof (parsed as CustomCombo).right === "string" &&
      typeof (parsed as CustomCombo).transform === "string"
    ) {
      return parsed as CustomCombo;
    }
  } catch {
    // Ignore malformed entries.
  }
  return null;
}

export function GamingNameTool({
  defaultName = "Alex",
  preview,
}: {
  defaultName?: string;
  /** Set on a platform page so the name shows in that platform's local card. */
  preview?: { id: PlatformPreviewId; platform: string };
}) {
  const [name, setName] = useState(defaultName);
  const [selected, setSelected] = useState(0);
  const [previewAt, setPreviewAt] = useState<number | null>(null);
  const [styleFilter, setStyleFilter] = useState<StyleFilter>("all");
  const [nonce, setNonce] = useState(0);
  const [shown, setShown] = useState(NICKNAME_PAGE_SIZE);
  const savedNames = useLocalList(SAVED_NAMES_KEY);
  const customCombos = useLocalList(CUSTOM_COMBOS_KEY);
  const showToast = useToast();
  const locale = useLocale();
  const t = getUi(locale);
  const nameBucket = lengthBucket(measureText(name.trim().slice(0, MAX_NICKNAME_LENGTH)).graphemes);

  useEffect(() => {
    track("gaming_name_view", { tool: "gaming" });
  }, []);

  // Builder state: a decoration pair + a letter style, applied to the name.
  const [pairIndex, setPairIndex] = useState(1);
  const [builderTransform, setBuilderTransform] = useState<NicknameTransform>("script");
  const [pasteId, setPasteId] = useState<PasteTargetId>("anywhere");
  const [checkOpen, setCheckOpen] = useState(false);

  const cleanName = name.trim().slice(0, MAX_NICKNAME_LENGTH);
  const results = useMemo(
    () => generateNicknames(cleanName, styleFilter, nonce, shown),
    [cleanName, styleFilter, nonce, shown],
  );
  const canLoadMore = results.length >= shown;
  const paste = pasteTargets.find((item) => item.id === pasteId) ?? pasteTargets[0];
  const platformRule = preview ? previewNameRule(preview.id) : null;
  const platformMax = platformRule?.approxMax ?? null;

  const combo: CustomCombo = {
    left: decoratorPairs[pairIndex][0],
    right: decoratorPairs[pairIndex][1],
    transform: builderTransform,
  };
  const sampleBase = cleanName || suggestedBases(styleFilter, nonce)[0] || "Nova";
  const builderPreview = buildCustomNickname(sampleBase, combo);
  const previewItems = [builderPreview, ...results];
  const activeIndex = Math.min(selected, previewItems.length - 1);
  const activePreview = previewItems[activeIndex] ?? builderPreview;
  const showScreen = preview !== undefined && preview.id !== "fortnite";

  function openPreview(index: number) {
    setSelected(index);
    setPreviewAt(index);
  }

  function resetPaging() {
    setShown(NICKNAME_PAGE_SIZE);
  }

  const chips: { id: StyleFilter; name: string; accent?: string }[] = [
    { id: "all", name: t.common.all },
    ...vibeStyles.map((s) => ({ id: s.id as StyleFilter, name: t.vibeNames[s.id], accent: s.accent })),
  ];

  return (
    <div>
      <div className="card p-4 sm:p-6">
        {showScreen && preview ? (
          <section aria-labelledby="inline-preview-heading" className="mb-4 overflow-hidden rounded-2xl border border-line">
            <h2 id="inline-preview-heading" className="border-b border-line px-4 py-3 text-sm font-bold text-ink-900">
              {t.platformPreview.heading(preview.platform)}
            </h2>
            <PlatformPreviewScreen id={preview.id} platform={preview.platform} raw={sampleBase} styled={activePreview} />
          </section>
        ) : null}
        <label htmlFor="name-input" className="mb-2 block text-sm font-semibold text-ink-700">
          {t.gaming.yourName}
        </label>
        <input
          id="name-input"
          type="text"
          value={name}
          maxLength={MAX_NICKNAME_LENGTH}
          onChange={(event) => {
            setName(event.target.value);
            resetPaging();
          }}
          placeholder={t.gaming.namePlaceholder}
          autoComplete="off"
          spellCheck={false}
          className="text-input"
        />
        <p className="mt-2 text-xs text-ink-500">{t.gaming.lengthInfo}</p>
        {preview && platformMax !== null && (
          <p className="mt-1 text-xs text-ink-500">{t.platformPreview.approxField(preview.platform, platformMax)}</p>
        )}
        {preview && platformRule && platformMax !== null && codePointLength(cleanName) > platformMax && confidenceLabel(platformRule) !== "verified" && (
          <p className="mt-1 text-xs text-warning">
            {t.common.overLimit(codePointLength(cleanName), platformMax)} {t.platformPreview.notTested}
          </p>
        )}

        <div role="group" aria-label={t.gaming.styleGroup} className="mt-4 flex flex-wrap gap-2">
          {chips.map((chip) => {
            const active = styleFilter === chip.id;
            return (
              <button
                key={chip.id}
                type="button"
                aria-pressed={active}
                onClick={() => {
                  setStyleFilter(chip.id);
                  resetPaging();
                }}
                className={`inline-flex h-9 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 ${
                  active
                    ? "border-brand-600 bg-brand-100 text-brand-800"
                    : "border-line bg-white text-ink-700 hover:border-brand-300 hover:bg-brand-50"
                }`}
              >
                {chip.accent && (
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: chip.accent }}
                  />
                )}
                {chip.name}
              </button>
            );
          })}
        </div>
      </div>

      {savedNames.items.length > 0 && (
        <section className="card mt-4 p-4" aria-labelledby="saved-heading">
          <div className="flex items-center justify-between gap-3">
            <h2 id="saved-heading" className="text-sm font-semibold text-ink-700">
              {t.gaming.savedNames}
            </h2>
            <button
              type="button"
              onClick={async () => {
                const ok = await copyText(savedNames.items.join("\n"));
                track("gaming_name_copy", { tool: "gaming", style_id: styleFilter, length_bucket: nameBucket, ok });
                showToast(ok ? t.common.copiedToClipboard : t.common.copyFailed);
              }}
              className="text-sm font-semibold text-brand-700 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
            >
              {t.gaming.copyAllSaved}
            </button>
          </div>
          <ul className="mt-3 flex flex-wrap gap-2">
            {savedNames.items.map((saved) => (
              <li key={saved} className="relative">
                <CopyButton
                  text={saved}
                  label={saved}
                  ariaLabel={t.gaming.copySaved(saved)}
                  onCopied={() =>
                    track("gaming_name_copy", {
                      tool: "gaming",
                      style_id: styleFilter,
                      length_bucket: lengthBucket(measureText(saved).graphemes),
                      ok: true,
                    })
                  }
                  className="inline-flex h-10 items-center gap-1.5 rounded-full border border-line bg-white pl-4 pr-3 text-sm font-medium text-ink-900 transition-colors hover:border-brand-300 hover:bg-brand-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                />
                <button
                  type="button"
                  onClick={() => savedNames.remove(saved)}
                  aria-label={t.gaming.removeSaved(saved)}
                  className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full border border-line bg-white text-[10px] font-bold text-ink-500 hover:text-danger focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Custom builder */}
      <section className="card mt-4 p-4 sm:p-6" aria-labelledby="builder-heading">
        <h2 id="builder-heading" className="text-base font-bold text-ink-900">
          {t.gaming.buildYourOwn}
        </h2>
        <p className="mt-1 text-sm text-ink-600">
          {t.gaming.buildHint(cleanName || t.gaming.yourName.toLowerCase())}
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div>
            <label htmlFor="builder-pair" className="mb-1.5 block text-xs font-semibold text-ink-700">
              {t.gaming.decoration}
            </label>
            <select
              id="builder-pair"
              value={pairIndex}
              onChange={(event) => {
                setPairIndex(Number(event.target.value));
              }}
              className="text-input h-11 appearance-none bg-white pr-8"
            >
              {decoratorPairs.map(([left, right], index) => {
                const label =
                  left === "" && right === ""
                    ? t.gaming.noDecoration
                    : t.gaming.decoOption(left, right);
                return (
                  <option key={`${left}-${right}-${index}`} value={index}>
                    {label}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <label htmlFor="builder-style" className="mb-1.5 block text-xs font-semibold text-ink-700">
              {t.gaming.letterStyle}
            </label>
            <select
              id="builder-style"
              value={builderTransform}
              onChange={(event) => {
                setBuilderTransform(event.target.value as NicknameTransform);
              }}
              className="text-input h-11 appearance-none bg-white pr-8"
            >
              <option value="identity">{t.gaming.normalLetters}</option>
              {styleCategories.map((cat) => (
                <optgroup key={cat.id} label={t.styleCategoryNames[cat.id]}>
                  {textStyles
                    .filter((style) => style.category === cat.id)
                    .map((style) => (
                      <option key={style.id} value={style.id}>
                        {t.styleNames[style.id]}
                      </option>
                    ))}
                </optgroup>
              ))}
            </select>
          </div>
        </div>
        <div className={`mt-4 flex flex-wrap items-center gap-3 rounded-xl border bg-brand-50 p-4 ${
          activeIndex === 0 ? "border-brand-400 ring-1 ring-brand-200" : "border-brand-100"
        }`}>
          <div className="min-w-0 flex-1">
            <p className="result-text text-xl font-medium text-ink-900">{builderPreview}</p>
            {paste.limit !== null && codePointLength(builderPreview) > paste.limit && (
              <p className="mt-1 text-xs text-warning">
                {t.common.overLimit(codePointLength(builderPreview), paste.limit)}
              </p>
            )}
            {preview && platformRule && platformMax !== null && codePointLength(builderPreview) > platformMax && confidenceLabel(platformRule) !== "verified" && (
              <p className="mt-1 text-xs text-warning">
                {t.common.overLimit(codePointLength(builderPreview), platformMax)} {t.platformPreview.notTested}
              </p>
            )}
            {paste.plain && <p className="mt-1 text-xs leading-relaxed text-ink-600">{t.common.usernamePlain}</p>}
          </div>
          <div className="flex shrink-0 gap-2">
            {preview && <PreviewButton onClick={() => openPreview(0)} />}
            <CopyButton
              text={builderPreview}
              ariaLabel={t.gaming.copyCombo}
              onCopied={() =>
                track("gaming_name_copy", {
                  tool: "gaming",
                  style_id: builderTransform,
                  length_bucket: nameBucket,
                  ok: true,
                })
              }
            />
            <button
              type="button"
              onClick={() => {
                customCombos.add(JSON.stringify(combo));
                showToast(t.gaming.comboSaved);
              }}
              className="btn-secondary h-10"
            >
              {t.gaming.saveCombo}
            </button>
          </div>
        </div>
        <div className="mt-3">
          <button
            type="button"
            aria-expanded={checkOpen}
            aria-controls="nickname-check"
            onClick={() => setCheckOpen((open) => !open)}
            className="text-sm font-semibold text-brand-700 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
          >
            {t.gaming.checkNickname}
          </button>
          {checkOpen && (
            <CompatReport
              id="nickname-check"
              text={builderPreview}
              source={cleanName}
              styleId={builderTransform}
              rule={platformRule}
            />
          )}
        </div>
        <div className="mt-3">
          <p className="mb-2 text-xs font-semibold text-ink-700">{t.common.pasteLabel}</p>
          <div role="group" aria-label={t.common.pasteLabel} className="flex flex-wrap gap-2">
            {(
              [
                ["anywhere", t.common.pasteAnywhere],
                ["display", t.common.pasteDisplay],
                ["bio", t.common.pasteBio],
                ["username", t.common.pasteUsername],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                aria-pressed={pasteId === id}
                onClick={() => setPasteId(id)}
                className={`h-9 rounded-full border px-4 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 ${
                  pasteId === id
                    ? "border-brand-600 bg-brand-100 text-brand-800"
                    : "border-line bg-white text-ink-700 hover:border-brand-300 hover:bg-brand-50"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        {customCombos.items.length > 0 && (
          <div className="mt-3">
            <p className="text-xs font-semibold text-ink-700">{t.gaming.myCombos}</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {customCombos.items.map((raw, index) => {
                const saved = parseCombo(raw);
                if (!saved) return null;
                const preview = buildCustomNickname(cleanName || "Alex", saved);
                return (
                  <li key={`${raw}-${index}`} className="relative">
                    <button
                      type="button"
                      onClick={() => {
                        const match = decoratorPairs.findIndex(
                          ([left, right]) => left === saved.left && right === saved.right,
                        );
                        if (match >= 0) setPairIndex(match);
                        setBuilderTransform(saved.transform);
                      }}
                      title={t.gaming.applyCombo}
                      className="inline-flex h-10 items-center rounded-full border border-brand-200 bg-brand-50 px-4 text-base font-medium text-brand-800 transition-colors hover:bg-brand-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                    >
                      {preview}
                    </button>
                    <button
                      type="button"
                      onClick={() => customCombos.remove(raw)}
                      aria-label={t.gaming.removeCombo}
                      className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full border border-line bg-white text-[10px] font-bold text-ink-500 hover:text-danger focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                    >
                      ×
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </section>

      {cleanName.length === 0 && (
        <p className="mt-6 text-sm text-ink-600">{t.gaming.emptyName}</p>
      )}
      {results.length > 0 && (
        <>
          <ul className={`grid grid-cols-1 gap-3 sm:grid-cols-2 ${cleanName.length === 0 ? "mt-3" : "mt-6"}`}>
            {results.map((nickname, index) => {
              const isSaved = savedNames.items.includes(nickname);
              return (
                <li
                  key={nickname}
                  className={`flex items-center justify-between gap-3 rounded-xl border bg-surface p-4 ${
                    preview && activeIndex === index + 1 ? "border-brand-400 ring-1 ring-brand-200" : "border-line"
                  }`}
                >
                  <p className="result-text min-w-0 flex-1 text-lg font-medium text-ink-900">{nickname}</p>
                  <div className="flex shrink-0 items-center gap-1.5">
                    <button
                      type="button"
                      aria-pressed={isSaved}
                      aria-label={
                        isSaved ? t.gaming.removeName(nickname) : t.gaming.saveName(nickname)
                      }
                      onClick={() => {
                        const saving = !isSaved;
                        savedNames.toggle(nickname);
                        if (saving) {
                          track("gaming_name_save", {
                            tool: "gaming",
                            style_id: styleFilter,
                            length_bucket: nameBucket,
                            ok: true,
                          });
                        }
                      }}
                      className={`flex h-10 w-9 items-center justify-center rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 ${
                        isSaved ? "text-brand-600" : "text-ink-500/50 hover:text-brand-600"
                      }`}
                    >
                      <StarIcon filled={isSaved} />
                    </button>
                    {preview && <PreviewButton label={null} onClick={() => openPreview(index + 1)} />}
                    <CopyButton
                      text={nickname}
                      label={null}
                      ariaLabel={t.gaming.copySaved(nickname)}
                      onCopied={() =>
                        track("gaming_name_copy", {
                          tool: "gaming",
                          style_id: styleFilter,
                          length_bucket: nameBucket,
                          ok: true,
                        })
                      }
                    />
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {canLoadMore && (
              <button type="button" onClick={() => setShown((n) => n + NICKNAME_PAGE_SIZE)} className="btn-secondary">
                {t.gaming.loadMore}
              </button>
            )}
            <button
              type="button"
              onClick={() => {
                setNonce((n) => n + 1);
                track("gaming_name_generate", {
                  tool: "gaming",
                  style_id: styleFilter,
                  length_bucket: nameBucket,
                });
              }}
              className="btn-primary"
            >
              <span aria-hidden="true">↻</span> {t.gaming.generateNew}
            </button>
          </div>
        </>
      )}
      <nav aria-label={t.sections.related} className="mt-8">
        <Link
          href={localePath(locale, "/symbols/")}
          className="text-sm font-semibold text-brand-800 underline decoration-brand-300 underline-offset-2"
        >
          {t.nav.symbols}
        </Link>
      </nav>
      {preview && (
        <PlatformPreviewDialog
          id={preview.id}
          platform={preview.platform}
          raw={sampleBase}
          items={[builderPreview, ...results]}
          index={previewAt}
          onIndex={(index) => {
            setPreviewAt(index);
            if (index !== null) setSelected(index);
          }}
        />
      )}
    </div>
  );
}
