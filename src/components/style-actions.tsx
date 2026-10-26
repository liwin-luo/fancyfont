"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { useLocale } from "@/components/locale-context";
import { useToast } from "@/components/toast";
import { copyText } from "@/lib/copy";
import { shareDest, shareHref, type ShareKind } from "@/lib/share";
import { getUi } from "@/lib/ui-strings";

const iconButtonClass =
  "inline-flex h-10 min-w-9 items-center justify-center rounded-lg border border-line bg-white px-2.5 text-ink-700 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 sm:h-9";

function XIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M9.3 7.1 14.2 2h-1.2L8.8 6.3 5.2 2H1.5l5.2 7.4L1.5 14h1.2l4.4-4.6L10.8 14h3.7L9.3 7.1Zm-1.6 1.7-.5-.7L3.1 2.8h1.7l3.2 4.5.5.7 4.2 5.9h-1.7L7.7 8.8Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 1.4a6.6 6.6 0 0 0-5.7 9.9L1.4 14.6l3.4-.9A6.6 6.6 0 1 0 8 1.4Zm3.3 9.3c-.1.4-.8.7-1.1.8-.3 0-.6.1-2-.5-1.7-.7-2.8-2.4-2.9-2.5-.1-.2-.9-1.2-.9-2.3s.6-1.6.8-1.8c.2-.2.4-.3.6-.3h.4c.2 0 .3 0 .5.4.2.4.5 1.4.6 1.5.1.1 0 .3-.1.4l-.3.4c-.1.1-.2.2-.1.4.2.3.6.9 1.2 1.5.7.6 1.4.9 1.6 1 .2.1.3.1.4-.1l.5-.6c.1-.1.3-.1.4 0l1.3.6c.2.1.3.2.4.3.1.2 0 .7-.1 1Z" />
    </svg>
  );
}

function ThreadsIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 1.5a6.5 6.5 0 0 0-2.1 12.6c.7.3 1.4.1 1.7-.6.1-.3.2-.6.1-.8-.4.2-.8.3-1.2.2A2.5 2.5 0 0 1 4.2 10a2.6 2.6 0 0 1 4.1-2.1V6.4c-.5-.2-1-.2-1.4 0a4.2 4.2 0 0 0-3.6 4.2 4.3 4.3 0 0 0 6.8 3.5c.4.8 1.1 1.3 2.1 1.3h.5V14h-.4c-.6 0-1-.4-1.1-1A6.5 6.5 0 0 0 8 1.5Zm.5 8.7a1.4 1.4 0 1 1 .2-2.8 1.4 1.4 0 0 1 1.3 1.4v.2a1.4 1.4 0 0 1-1.5 1.2Z" />
    </svg>
  );
}

function BlueskyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M3.6 3.1c1.1.9 2.1 2.2 2.7 3.6.4-.9.8-1.7 1-.2.2.4.6 1.2 1 2 .6-1.4 1.6-2.7 2.7-3.6 1.3-1 2.7-1.2 3.2-.4.5 1-.2 2.9-1.5 4.8-.7 1-1.6 1.8-2.4 2.4 1.4.4 3 1.1 3.9 2.4.7 1 .4 2.2-.7 2.4-1.4.2-3-.7-4.1-2.2-.5-.6-.8-1.3-1.1-1.8-.3.5-.6 1.2-1.1 1.8-1.1 1.5-2.7 2.4-4.1 2.2-1.1-.2-1.4-1.4-.7-2.4.9-1.3 2.5-2 3.9-2.4-.8-.6-1.7-1.4-2.4-2.4C1.1 5.6.4 3.7.9 2.7c.5-.8 1.9-.6 2.7.4Z" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M14.4 2.4 1.8 7.3c-.7.3-.7.7-.1.9l3.2 1 1.2 3.8c.2.5.4.6.8.3l1.8-1.4 3.2 2.4c.5.3 1 .1 1.1-.6l1.9-9.6c.2-.8-.3-1.2-1.1-.7ZM6.3 8.8l6-3.7c.3-.2.5.1.3.3L7.2 9.9l-.2 2-.7-3.1Z" />
    </svg>
  );
}

function MenuItem({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      role="menuitem"
      aria-label={label}
      onClick={onClick}
      className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm font-medium text-ink-700 hover:bg-brand-50 hover:text-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
    >
      {children}
    </button>
  );
}

export function ShareLinks({ text, name }: { text: string; name: string }) {
  const t = getUi(useLocale());
  const showToast = useToast();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  async function share(kind: ShareKind) {
    setOpen(false);
    const ok = await copyText(text);
    if (!ok) {
      showToast(t.common.copyFailed);
      return;
    }
    showToast(t.common.copiedOpening(shareDest(kind)));
    window.open(shareHref(kind, text), "_blank", "noopener,noreferrer");
  }

  return (
    <div ref={rootRef} className={open ? "relative z-20" : "relative"}>
      <button
        type="button"
        className={iconButtonClass}
        aria-label={t.common.shareMore}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
      >
        <span aria-hidden="true" className="text-base font-semibold leading-none tracking-widest">
          ...
        </span>
      </button>
      {open && (
        <div
          id={menuId}
          role="menu"
          className="absolute right-0 z-20 mt-1 min-w-40 rounded-lg border border-line bg-white p-1 shadow-lg"
        >
          <MenuItem label={t.common.shareToX(name)} onClick={() => void share("x")}>
            <XIcon />
            <span>X</span>
          </MenuItem>
          <MenuItem label={t.common.shareToThreads(name)} onClick={() => void share("threads")}>
            <ThreadsIcon />
            <span>Threads</span>
          </MenuItem>
          <MenuItem label={t.common.shareToBluesky(name)} onClick={() => void share("bluesky")}>
            <BlueskyIcon />
            <span>Bluesky</span>
          </MenuItem>
          <MenuItem label={t.common.shareToWhatsapp(name)} onClick={() => void share("whatsapp")}>
            <WhatsAppIcon />
            <span>WhatsApp</span>
          </MenuItem>
          <MenuItem label={t.common.shareToTelegram(name)} onClick={() => void share("telegram")}>
            <TelegramIcon />
            <span>Telegram</span>
          </MenuItem>
        </div>
      )}
    </div>
  );
}

export function PreviewOptions({
  size,
  onSize,
  transparent,
  onTransparent,
  onCopyFavorites,
}: {
  size: number;
  onSize: (size: number) => void;
  transparent: boolean;
  onTransparent: (transparent: boolean) => void;
  onCopyFavorites?: () => void;
}) {
  const t = getUi(useLocale());
  return (
    <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-line pt-4">
      <label className="flex items-center gap-2 text-sm text-ink-700">
        <span className="font-semibold">{t.common.previewSize}</span>
        <input
          type="range"
          min={16}
          max={48}
          step={2}
          value={size}
          onChange={(event) => onSize(Number(event.target.value))}
          aria-label={t.common.previewSize}
          className="w-28 accent-brand-600"
        />
      </label>
      <label className="flex items-center gap-2 text-sm font-medium text-ink-700">
        <input
          type="checkbox"
          checked={transparent}
          onChange={(event) => onTransparent(event.target.checked)}
          className="accent-brand-600"
        />
        {t.common.transparentBg}
      </label>
      {onCopyFavorites && (
        <button
          type="button"
          onClick={onCopyFavorites}
          className="text-sm font-semibold text-brand-700 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
        >
          {t.common.copyAllFavorites}
        </button>
      )}
    </div>
  );
}
