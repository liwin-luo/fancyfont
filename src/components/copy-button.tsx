"use client";

import { useState, type ReactNode } from "react";
import { copyText } from "@/lib/copy";
import { useToast } from "@/components/toast";
import { useLocale } from "@/components/locale-context";
import { getUi } from "@/lib/ui-strings";

interface CopyButtonProps {
  text: string;
  /** Visible label for text buttons. Icon-only buttons pass null. */
  label?: string | null;
  /** Accessible name when the visible label is absent. */
  ariaLabel?: string;
  className?: string;
  copiedClassName?: string;
  /** Replaces the default "copied" toast. */
  successToast?: string;
}

function CopyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="5.5" y="5.5" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10.5 5.5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v4.5a2 2 0 0 0 2 2h1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="m3 8.5 3.2 3L13 4.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CopyButton({
  text,
  label,
  ariaLabel,
  className,
  copiedClassName,
  successToast,
}: CopyButtonProps) {
  const showToast = useToast();
  const locale = useLocale();
  const t = getUi(locale);
  const [copied, setCopied] = useState(false);
  const visibleLabel = label === undefined ? t.common.copy : label;

  async function handleClick() {
    const ok = await copyText(text);
    if (ok) {
      setCopied(true);
      showToast(successToast ?? t.common.copiedToClipboard);
      window.setTimeout(() => setCopied(false), 1500);
    } else {
      showToast(t.common.copyFailed);
    }
  }

  const idleClass =
    className ??
    "inline-flex h-10 shrink-0 items-center gap-1.5 rounded-lg border border-line bg-white px-3 text-sm font-medium text-ink-700 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 sm:h-9";
  const doneClass =
    copiedClassName ??
    "inline-flex h-10 shrink-0 items-center gap-1.5 rounded-lg border border-success/30 bg-success-bg px-3 text-sm font-medium text-success focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 sm:h-9";

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={ariaLabel}
      className={copied ? doneClass : idleClass}
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
      {visibleLabel !== null ? <span>{copied ? t.common.copied : visibleLabel}</span> : null}
    </button>
  );
}
