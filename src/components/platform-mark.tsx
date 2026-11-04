import type { PlatformPreviewId } from "@/lib/platform-preview";

// Original marks. They are color and shape only, not a platform's logo.

export const platformTone: Record<PlatformPreviewId | "all", { bg: string; fg: string }> = {
  all: { bg: "#181526", fg: "#ffffff" },
  pubg: { bg: "#2a2418", fg: "#f0d090" },
  freefire: { bg: "#ff6a00", fg: "#ffffff" },
  facebook: { bg: "#0866ff", fg: "#ffffff" },
  instagram: { bg: "#c13584", fg: "#ffffff" },
  tiktok: { bg: "#111111", fg: "#ffffff" },
  discord: { bg: "#5865f2", fg: "#ffffff" },
  cod: { bg: "#3d4a28", fg: "#d5e2a8" },
  youtube: { bg: "#e10600", fg: "#ffffff" },
  roblox: { bg: "#e2231a", fg: "#ffffff" },
  fortnite: { bg: "#2b3990", fg: "#cfe3ff" },
  whatsapp: { bg: "#25d366", fg: "#ffffff" },
};

export function PlatformGlyph({ id, className }: { id: PlatformPreviewId | "all"; className?: string }) {
  const common = { viewBox: "0 0 16 16", className, "aria-hidden": true as const, focusable: false as const };
  if (id === "all") {
    return (
      <svg {...common}>
        <rect x="1" y="1" width="6" height="6" rx="1" fill="currentColor" />
        <rect x="9" y="1" width="6" height="6" rx="1" fill="currentColor" />
        <rect x="1" y="9" width="6" height="6" rx="1" fill="currentColor" />
        <rect x="9" y="9" width="6" height="6" rx="1" fill="currentColor" />
      </svg>
    );
  }
  if (id === "pubg") {
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square">
        <path d="M2.5 11.5 8 4l5.5 7.5" />
        <path d="M4.5 13.5 8 8.5l3.5 5" />
      </svg>
    );
  }
  if (id === "freefire") {
    return (
      <svg {...common}>
        <path d="M8 1.2 14.2 8 8 14.8 1.8 8Z" fill="currentColor" />
      </svg>
    );
  }
  if (id === "facebook") {
    return (
      <svg {...common} fill="currentColor">
        <circle cx="6" cy="5.5" r="2.2" />
        <circle cx="11" cy="6.2" r="1.7" />
        <path d="M1.8 13.6c.6-2.4 2.2-3.6 4.2-3.6 2 0 3.4 1.1 4 3.2" />
        <path d="M9.2 13.6c.3-1.5 1.2-2.3 2.4-2.3 1 0 1.8.6 2.2 1.8" />
      </svg>
    );
  }
  if (id === "instagram") {
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="8" cy="8" r="5.2" />
        <circle cx="8" cy="8" r="1.6" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (id === "tiktok") {
    return (
      <svg {...common} fill="currentColor">
        <rect x="2.5" y="2" width="4" height="12" rx="1.2" />
        <rect x="9.5" y="5" width="4" height="9" rx="1.2" />
      </svg>
    );
  }
  if (id === "discord") {
    return (
      <svg {...common} fill="currentColor">
        <path d="M2.2 2.8h11.6V10H6.4L2.2 13.4V2.8Z" />
      </svg>
    );
  }
  if (id === "cod") {
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square">
        <path d="M8 1.5v3.2M8 11.3v3.2M1.5 8h3.2M11.3 8h3.2" />
        <circle cx="8" cy="8" r="1.3" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (id === "youtube") {
    return (
      <svg {...common} fill="currentColor">
        <rect x="1" y="4" width="14" height="8" rx="2" />
      </svg>
    );
  }
  if (id === "fortnite") {
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="square">
        <path d="M9.5 1.5 4 9h3.2L6 14.5 12 7H8.6Z" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  return (
    <svg {...common} fill="currentColor">
      <rect x="1.5" y="1.5" width="6" height="6" />
      <rect x="8.5" y="1.5" width="6" height="6" />
      <rect x="1.5" y="8.5" width="6" height="6" />
    </svg>
  );
}

export function PlatformMark({
  id,
  className = "h-10 w-10",
}: {
  id: PlatformPreviewId | "all";
  className?: string;
}) {
  const tone = platformTone[id];
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-xl ${className}`}
      style={{ background: tone.bg, color: tone.fg }}
    >
      <PlatformGlyph id={id} className="h-[58%] w-[58%]" />
    </span>
  );
}
