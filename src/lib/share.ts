// Share links for a styled result. Text stays in the query string so the
// user pastes nothing by hand; the site itself is not included.

export type ShareKind = "x" | "threads" | "bluesky" | "whatsapp" | "telegram";

const DEST: Record<ShareKind, string> = {
  x: "X",
  threads: "Threads",
  bluesky: "Bluesky",
  whatsapp: "WhatsApp",
  telegram: "Telegram",
};

export function shareDest(kind: ShareKind): string {
  return DEST[kind];
}

export function shareHref(kind: ShareKind, text: string): string {
  const q = encodeURIComponent(text);
  const href: Record<ShareKind, string> = {
    x: `https://x.com/intent/post?text=${q}`,
    threads: `https://www.threads.com/intent/post?text=${q}`,
    bluesky: `https://bsky.app/intent/compose?text=${q}`,
    whatsapp: `https://wa.me/?text=${q}`,
    telegram: `https://t.me/share/url?text=${q}`,
  };
  return href[kind];
}
