"use client";

import { useEffect, useId, useRef } from "react";
import { clipCodePoints, codePointLength, plainHandle, previewFields, type PlatformPreviewId } from "@/lib/platform-preview";
import { PlatformGlyph, platformTone } from "@/components/platform-mark";
import { CopyButton } from "@/components/copy-button";
import { useLocale } from "@/components/locale-context";
import { getUi } from "@/lib/ui-strings";

const APP_FONT = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';
const AVATAR = "/preview/avatar.jpg";
const SHOTS = ["/preview/shot-1.jpg", "/preview/shot-2.jpg", "/preview/shot-3.jpg"];

// Counts on the fake profiles. 7 is the lucky number the US and Europe share;
// 3, 21, 77, and 777 are the rest of that short list. 13 stays out.
const lucky = {
  posts: "3",
  friends: "7",
  following: "77",
  followers: "777",
  likes: "7,777",
  subscribers: "7K",
  level: { pubg: "21", freefire: "77", cod: "7" },
} as const;

const previewButtonClass =
  "inline-flex h-10 shrink-0 items-center gap-1.5 rounded-lg border border-line bg-white px-3 text-sm font-medium text-ink-700 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 sm:h-9";

const nameCopyClass =
  "inline-flex h-8 shrink-0 items-center gap-1 rounded-lg border border-line bg-white px-2.5 text-xs font-medium text-ink-700 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500";
const nameCopiedClass =
  "inline-flex h-8 shrink-0 items-center gap-1 rounded-lg border border-success/30 bg-success-bg px-2.5 text-xs font-medium text-success focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500";

export function PreviewButton({
  label,
  onClick,
}: {
  /** Visible label. Pass null for an icon-only button, matching Copy. */
  label?: string | null;
  onClick: () => void;
}) {
  const t = getUi(useLocale()).platformPreview;
  const visible = label === undefined ? t.preview : label;

  return (
    <button
      type="button"
      className={previewButtonClass}
      aria-label={visible === null ? t.preview : undefined}
      onClick={onClick}
    >
      <EyeIcon />
      {visible !== null ? <span>{visible}</span> : null}
    </button>
  );
}

export function PlatformPreviewDialog({
  id,
  platform,
  raw,
  items,
  index,
  onIndex,
}: {
  id: PlatformPreviewId;
  platform: string;
  raw: string;
  items: string[];
  index: number | null;
  onIndex: (index: number | null) => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const safeIndex = index === null || items.length === 0 ? null : Math.min(index, items.length - 1);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (safeIndex === null) {
      if (dialog.open) dialog.close();
      return;
    }
    if (!dialog.open) dialog.showModal();
  }, [safeIndex]);

  return (
    <dialog
      ref={dialogRef}
      className="platform-preview-dialog"
      aria-labelledby={titleId}
      onClose={() => onIndex(null)}
      onClick={(event) => {
        if (event.target === event.currentTarget) onIndex(null);
      }}
      onKeyDown={(event) => {
        if (safeIndex === null) return;
        if (event.key === "ArrowLeft" && safeIndex > 0) {
          event.preventDefault();
          onIndex(safeIndex - 1);
        }
        if (event.key === "ArrowRight" && safeIndex < items.length - 1) {
          event.preventDefault();
          onIndex(safeIndex + 1);
        }
      }}
    >
      {safeIndex !== null && (
        <PreviewDialog
          key={safeIndex}
          id={id}
          titleId={titleId}
          platform={platform}
          raw={raw}
          styled={items[safeIndex] ?? ""}
          index={safeIndex}
          total={items.length}
          onIndex={onIndex}
          onClose={() => onIndex(null)}
        />
      )}
    </dialog>
  );
}

function PreviewDialog({
  id,
  titleId,
  platform,
  raw,
  styled,
  index,
  total,
  onIndex,
  onClose,
}: {
  id: PlatformPreviewId;
  titleId: string;
  platform: string;
  raw: string;
  styled: string;
  index: number;
  total: number;
  onIndex: (index: number | null) => void;
  onClose: () => void;
}) {
  const ui = getUi(useLocale());
  const t = ui.platformPreview;
  const fields = previewFields[id];
  const handle = fields.handle ? plainHandle(raw, fields.handle) : "";
  const name = styled ? clipCodePoints(styled, fields.nameMax) : handle || clipCodePoints(raw, fields.nameMax);
  const extra = fields.extra && styled ? clipCodePoints(styled, fields.extra.max) : "";
  const nameOver = codePointLength(styled) > fields.nameMax;
  const extraOver = fields.extra ? codePointLength(styled) > fields.extra.max : false;
  const toast = ui.platformTool.openToPaste(platform);

  return (
    <div>
      <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3">
        <p id={titleId} className="min-w-0 text-sm font-bold text-ink-900">
          {t.heading(platform)}
        </p>
        <button
          type="button"
          onClick={onClose}
          aria-label={t.close}
          autoFocus
          className="flex h-8 w-8 items-center justify-center rounded-lg text-lg text-ink-500 hover:bg-brand-50 hover:text-ink-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
        >
          ×
        </button>
      </div>
      {id === "instagram" && (
        <InstagramScreen name={name} handle={handle} bio={extra} copyText={styled} toast={toast} posts={t.posts} followers={t.followers} following={t.following} follow={t.follow} message={t.message} />
      )}
      {id === "tiktok" && (
        <TikTokScreen name={name} handle={handle} bio={extra} copyText={styled} toast={toast} following={t.following} followers={t.followers} likes={t.likes} follow={t.follow} />
      )}
      {id === "discord" && <DiscordScreen name={name} handle={handle} status={extra} copyText={styled} toast={toast} />}
      {id === "roblox" && (
        <RobloxScreen name={name} handle={handle} copyText={styled} toast={toast} addFriend={t.addFriend} friends={t.friends} followers={t.followers} following={t.following} />
      )}
      {id === "facebook" && (
        <FacebookScreen name={name} handle={handle} bio={extra} copyText={styled} toast={toast} friends={t.friends} addFriend={t.addFriend} />
      )}
      {id === "youtube" && (
        <YouTubeScreen name={name} handle={handle} bio={extra} copyText={styled} toast={toast} subscribers={t.subscribers} subscribe={t.subscribe} />
      )}
      {(id === "pubg" || id === "freefire" || id === "cod") && (
        <GameScreen name={name} copyText={styled} toast={toast} tone={id} />
      )}
      {total > 1 && (
        <div className="flex items-center justify-between gap-3 border-t border-line px-4 py-3">
          <button
            type="button"
            disabled={index <= 0}
            onClick={() => onIndex(index - 1)}
            className="btn-secondary h-10 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {t.previous}
          </button>
          <span className="text-sm tabular-nums text-ink-500">
            {index + 1} / {total}
          </span>
          <button
            type="button"
            disabled={index >= total - 1}
            onClick={() => onIndex(index + 1)}
            className="btn-secondary h-10 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {t.next}
          </button>
        </div>
      )}
      <div className="space-y-1 px-4 py-3">
        {(nameOver || extraOver) && (
          <p className="text-xs text-warning">
            {nameOver ? `${codePointLength(styled)}/${fields.nameMax}` : ""}
            {nameOver && extraOver ? " · " : ""}
            {extraOver && fields.extra ? `${codePointLength(styled)}/${fields.extra.max}` : ""}
            {" · "}
            {t.over}
          </p>
        )}
        <p className="text-xs leading-relaxed text-ink-500">{t.note}</p>
      </div>
    </div>
  );
}

function NameCopy({ text, toast }: { text: string; toast: string }) {
  return <CopyButton text={text} successToast={toast} className={nameCopyClass} copiedClassName={nameCopiedClass} />;
}

function InstagramScreen({
  name,
  handle,
  bio,
  copyText,
  toast,
  posts,
  followers,
  following,
  follow,
  message,
}: {
  name: string;
  handle: string;
  bio: string;
  copyText: string;
  toast: string;
  posts: string;
  followers: string;
  following: string;
  follow: string;
  message: string;
}) {
  return (
    <div className="bg-white text-black" style={{ fontFamily: APP_FONT }}>
      <div className="flex h-14 items-center justify-center border-b border-[#dbdbdb]">
        <span className="text-[18px] leading-none font-semibold">{handle}</span>
      </div>
      <div className="flex items-center gap-6 px-6 pt-5">
        <div className="rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[3px]">
          <img src={AVATAR} alt="" className="h-24 w-24 rounded-full object-cover" />
        </div>
        <div className="flex flex-1 justify-around text-center">
          <Stat n={lucky.posts} label={posts} />
          <Stat n={lucky.followers} label={followers} />
          <Stat n={lucky.following} label={following} />
        </div>
      </div>
      <div className="px-6 pt-4">
        <div className="flex items-center gap-2">
          <p className="result-text min-w-0 text-lg leading-6 font-semibold">{name}</p>
          <NameCopy text={copyText} toast={toast} />
        </div>
        {bio && <p className="result-text mt-1 text-[15px] leading-5">{bio}</p>}
      </div>
      <div className="flex gap-2 px-6 py-4">
        <div className="flex h-9 flex-1 items-center justify-center rounded-lg bg-[#efefef] text-[15px] font-semibold">{follow}</div>
        <div className="flex h-9 flex-1 items-center justify-center rounded-lg bg-[#efefef] text-[15px] font-semibold">{message}</div>
      </div>
      <div className="grid grid-cols-3 gap-0.5">
        {SHOTS.map((src) => (
          <img key={src} src={src} alt="" className="h-36 w-full object-cover sm:h-44" />
        ))}
      </div>
    </div>
  );
}

function TikTokScreen({
  name,
  handle,
  bio,
  copyText,
  toast,
  following,
  followers,
  likes,
  follow,
}: {
  name: string;
  handle: string;
  bio: string;
  copyText: string;
  toast: string;
  following: string;
  followers: string;
  likes: string;
  follow: string;
}) {
  return (
    <div className="bg-black text-white" style={{ fontFamily: APP_FONT }}>
      <div className="flex flex-col items-center px-8 pt-8">
        <img src={AVATAR} alt="" className="h-28 w-28 rounded-full object-cover" />
        <div className="mt-4 flex max-w-full items-center justify-center gap-2">
          <p className="result-text text-2xl leading-8 font-bold">{name}</p>
          <NameCopy text={copyText} toast={toast} />
        </div>
        <p className="mt-1 text-[15px] text-white/60">@{handle}</p>
        <div className="mt-5 flex w-full justify-center gap-10 text-center">
          <Stat n={lucky.following} label={following} light />
          <Stat n={lucky.followers} label={followers} light />
          <Stat n={lucky.likes} label={likes} light />
        </div>
        {bio && <p className="result-text mt-4 text-center text-[15px] leading-6">{bio}</p>}
        <div className="mt-5 mb-6 flex h-11 w-full items-center justify-center rounded-[4px] bg-[#fe2c55] text-[16px] font-semibold">
          {follow}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-0.5">
        {SHOTS.map((src) => (
          <img key={src} src={src} alt="" className="h-44 w-full object-cover sm:h-52" />
        ))}
      </div>
    </div>
  );
}

function DiscordScreen({
  name,
  handle,
  status,
  copyText,
  toast,
}: {
  name: string;
  handle: string;
  status: string;
  copyText: string;
  toast: string;
}) {
  return (
    <div className="bg-[#111214] px-4 py-5" style={{ fontFamily: APP_FONT }}>
      <div className="overflow-hidden rounded-lg bg-[#111214]">
        <img src={SHOTS[1]} alt="" className="h-36 w-full object-cover" />
        <div className="px-5 pb-5">
          <div className="relative -mt-12 h-24 w-24 rounded-full border-[6px] border-[#111214]">
            <img src={AVATAR} alt="" className="h-full w-full rounded-full object-cover" />
            <span className="absolute right-0 bottom-0 h-5 w-5 rounded-full border-[3px] border-[#111214] bg-[#23a559]" />
          </div>
          <div className="mt-4 rounded-lg bg-[#232428] px-4 py-4">
            <div className="flex items-center gap-2">
              <p className="result-text min-w-0 text-2xl leading-8 font-bold text-[#f2f3f5]">{name}</p>
              <NameCopy text={copyText} toast={toast} />
            </div>
            <p className="mt-1 text-[15px] leading-5 text-[#b5bac1]">{handle}</p>
            {status && (
              <p className="result-text mt-3 flex items-start gap-2 text-[15px] leading-6 text-[#dbdee1]">
                <span aria-hidden="true" className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#23a559]" />
                <span>{status}</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function RobloxScreen({
  name,
  handle,
  copyText,
  toast,
  addFriend,
  friends,
  followers,
  following,
}: {
  name: string;
  handle: string;
  copyText: string;
  toast: string;
  addFriend: string;
  friends: string;
  followers: string;
  following: string;
}) {
  return (
    <div className="bg-white px-6 py-6 text-[#191b1d]" style={{ fontFamily: APP_FONT }}>
      <div className="flex items-start gap-5">
        <img src={SHOTS[0]} alt="" className="h-40 w-36 shrink-0 rounded-md object-cover" />
        <div className="min-w-0 pt-1">
          <div className="flex items-center gap-2">
            <p className="result-text min-w-0 text-[28px] leading-9 font-extrabold tracking-tight">{name}</p>
            <NameCopy text={copyText} toast={toast} />
          </div>
          <p className="mt-1 text-[16px] text-[#606162]">@{handle}</p>
          <div className="mt-4 inline-flex h-9 items-center rounded-lg bg-[#393b3d] px-4 text-[14px] font-bold text-white">
            {addFriend}
          </div>
        </div>
      </div>
      <div className="mt-5 flex gap-6 border-t border-[#e6e6e6] pt-4 text-[14px] text-[#393b3d]">
        <span><b className="font-extrabold text-black">{lucky.friends}</b> {friends}</span>
        <span><b className="font-extrabold text-black">{lucky.followers}</b> {followers}</span>
        <span><b className="font-extrabold text-black">{lucky.following}</b> {following}</span>
      </div>
    </div>
  );
}

function FacebookScreen({
  name,
  handle,
  bio,
  copyText,
  toast,
  friends,
  addFriend,
}: {
  name: string;
  handle: string;
  bio: string;
  copyText: string;
  toast: string;
  friends: string;
  addFriend: string;
}) {
  return (
    <div className="bg-[#f0f2f5] text-[#050505]" style={{ fontFamily: APP_FONT }}>
      <img src={SHOTS[1]} alt="" className="h-36 w-full object-cover sm:h-44" />
      <div className="px-6 pb-6">
        <img src={AVATAR} alt="" className="-mt-10 h-24 w-24 rounded-full border-4 border-[#f0f2f5] object-cover" />
        <div className="mt-2 flex items-center gap-2">
          <p className="result-text min-w-0 text-2xl font-bold">{name}</p>
          <NameCopy text={copyText} toast={toast} />
        </div>
        <p className="mt-0.5 text-sm text-[#65676b]">facebook.com/{handle}</p>
        {bio ? <p className="result-text mt-2 text-[15px] leading-5">{bio}</p> : null}
        <p className="mt-2 text-sm font-semibold text-[#65676b]">{lucky.followers} {friends}</p>
        <div className="mt-4 inline-flex h-9 items-center rounded-md bg-[#0866ff] px-4 text-sm font-semibold text-white">
          {addFriend}
        </div>
      </div>
    </div>
  );
}

function YouTubeScreen({
  name,
  handle,
  bio,
  copyText,
  toast,
  subscribers,
  subscribe,
}: {
  name: string;
  handle: string;
  bio: string;
  copyText: string;
  toast: string;
  subscribers: string;
  subscribe: string;
}) {
  return (
    <div className="bg-white text-[#0f0f0f]" style={{ fontFamily: APP_FONT }}>
      <img src={SHOTS[2]} alt="" className="h-32 w-full object-cover sm:h-40" />
      <div className="flex items-start gap-4 px-6 pt-4 pb-6">
        <img src={AVATAR} alt="" className="-mt-10 h-24 w-24 shrink-0 rounded-full object-cover" />
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <p className="result-text min-w-0 text-xl font-bold">{name}</p>
            <NameCopy text={copyText} toast={toast} />
          </div>
          <p className="mt-0.5 text-sm text-[#606060]">
            @{handle} · {lucky.subscribers} {subscribers}
          </p>
          {bio ? <p className="result-text mt-2 max-h-16 overflow-hidden text-sm text-[#606060]">{bio}</p> : null}
          <div className="mt-3 inline-flex h-9 items-center rounded-full bg-[#0f0f0f] px-4 text-sm font-medium text-white">
            {subscribe}
          </div>
        </div>
      </div>
    </div>
  );
}

function RankBadge({ id }: { id: "pubg" | "freefire" | "cod" }) {
  const tone = platformTone[id];
  return (
    <span
      className="inline-flex h-14 w-14 shrink-0 items-center justify-center"
      style={{
        background: tone.bg,
        color: tone.fg,
        clipPath: id === "freefire" ? "polygon(50% 0, 100% 50%, 50% 100%, 0 50%)" : undefined,
        borderRadius: id === "cod" ? 2 : id === "pubg" ? 10 : undefined,
        boxShadow: id === "freefire" ? undefined : `inset 0 0 0 1px ${tone.fg}`,
      }}
    >
      <PlatformGlyph id={id} className="h-7 w-7" />
    </span>
  );
}

function GameScreen({
  name,
  copyText,
  toast,
  tone,
}: {
  name: string;
  copyText: string;
  toast: string;
  tone: "pubg" | "freefire" | "cod";
}) {
  if (tone === "freefire") {
    return (
      <div className="bg-[#1a0e08] text-white" style={{ fontFamily: APP_FONT }}>
        <div className="h-1.5 bg-[#ff6a00]" />
        <div className="flex flex-col items-center px-6 py-8">
          <RankBadge id="freefire" />
          <div className="mt-4 flex max-w-full items-center justify-center gap-2">
            <p className="result-text min-w-0 text-2xl font-bold">{name}</p>
            <NameCopy text={copyText} toast={toast} />
          </div>
          <p className="mt-1 text-xs tracking-widest text-[#ffb080]">Lv.{lucky.level.freefire}</p>
        </div>
      </div>
    );
  }
  if (tone === "cod") {
    return (
      <div className="bg-[#101412] px-6 py-7 text-white" style={{ fontFamily: APP_FONT }}>
        <div className="border border-[#9caf6a]/50 px-4 py-4">
          <div className="flex items-center gap-3">
            <RankBadge id="cod" />
            <p className="result-text min-w-0 text-2xl font-bold tracking-wide">{name}</p>
            <NameCopy text={copyText} toast={toast} />
          </div>
          <p className="mt-3 flex items-center gap-2 text-[11px] tracking-[0.18em] text-[#d5e2a8]">
            <span className="border border-[#9caf6a]/70 px-1.5 py-0.5">TAG</span>
            <span>Lv.{lucky.level.cod}</span>
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-[#14120e] px-6 py-7 text-white" style={{ fontFamily: APP_FONT }}>
      <div className="flex items-center gap-4">
        <RankBadge id="pubg" />
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <p className="result-text min-w-0 text-2xl font-bold text-[#f0d090]">{name}</p>
            <NameCopy text={copyText} toast={toast} />
          </div>
          <p className="mt-1 text-xs tracking-[0.22em] text-white/55">Lv.{lucky.level.pubg}</p>
        </div>
      </div>
    </div>
  );
}

function Stat({ n, label, light }: { n: string; label: string; light?: boolean }) {
  return (
    <div>
      <p className={`text-[18px] leading-6 font-semibold ${light ? "text-white" : "text-black"}`}>{n}</p>
      <p className={`text-[13px] leading-4 ${light ? "text-white/60" : "text-[#737373]"}`}>{label}</p>
    </div>
  );
}

function EyeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M1.5 8s2.4-4.5 6.5-4.5S14.5 8 14.5 8s-2.4 4.5-6.5 4.5S1.5 8 1.5 8Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
