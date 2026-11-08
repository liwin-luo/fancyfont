// 插图组件库:纯 SVG + 字形拼贴 + CSS 手机样机,零图片资源、四语言通用。
// 设计语言与新粗野波普一致:硬阴影、高饱和色块、贴纸旋转。
// 全部服务端渲染,零客户端 JS;装饰性元素对屏幕阅读器隐藏。

import { localePath, type Locale } from "@/lib/i18n";
import { convertText, withWrapper, type TextStyleId } from "@/lib/text-styles";
import type { StylePageDef } from "@/lib/style-pages";

/** 页面主题图案 id:每个样式/游戏页的专属视觉元素。 */
export type MotifId =
  | "script" | "bold" | "gothic" | "small" | "vapor" | "cute" | "bubble"
  | "strike" | "numbers" | "glitch" | "flip" | "cjk"
  | "game" | "blocks" | "shooter" | "flame" | "social";

const INK = "var(--color-ink)";

/** 主题图案:按 motif 返回一组新粗野风内联 SVG。装饰性,aria-hidden。 */
export function MotifArt({ motif, className = "" }: { motif: MotifId; className?: string }) {
  const common = { fill: "none", stroke: INK, strokeWidth: 3 } as const;
  return (
    <svg aria-hidden="true" viewBox="0 0 220 90" className={className}>
      {motif === "script" && (
        <g {...common} strokeLinecap="round">
          <path d="M10 62 C 40 18, 66 74, 96 34 S 150 20, 168 48" />
          <path d="M24 74 C 54 40, 84 84, 116 52 S 164 44, 200 60" opacity="0.45" />
          <circle cx="196" cy="30" r="6" fill="var(--color-pop-pink)" stroke={INK} />
        </g>
      )}
      {motif === "bold" && (
        <g>
          <rect x="14" y="26" width="54" height="18" fill="var(--color-pop-yellow)" stroke={INK} strokeWidth="3" transform="rotate(-4 14 26)" />
          <rect x="80" y="44" width="54" height="18" fill="var(--color-ink)" transform="rotate(3 80 44)" />
          <rect x="148" y="32" width="54" height="18" fill="var(--color-pop-orange)" stroke={INK} strokeWidth="3" transform="rotate(-3 148 32)" />
        </g>
      )}
      {motif === "gothic" && (
        <g {...common}>
          <path d="M30 78 V 40 Q 30 24 44 18 Q 58 24 58 40 V 78" fill="var(--color-pop-purple)" />
          <path d="M92 78 V 34 Q 92 16 108 10 Q 124 16 124 34 V 78" fill="var(--color-ink)" />
          <path d="M154 78 V 40 Q 154 24 168 18 Q 182 24 182 40 V 78" fill="var(--color-pop-purple)" />
          <path d="M64 22 q 8 -10 16 0 q 8 -10 16 0" strokeWidth="2.5" />
        </g>
      )}
      {motif === "small" && (
        <g fill="var(--color-pop-blue)" stroke={INK} strokeWidth="2.5">
          <circle cx="30" cy="52" r="7" />
          <circle cx="56" cy="52" r="7" />
          <circle cx="82" cy="52" r="7" />
          <circle cx="108" cy="52" r="7" />
          <circle cx="134" cy="52" r="7" />
          <circle cx="160" cy="52" r="7" />
          <circle cx="186" cy="52" r="7" />
        </g>
      )}
      {motif === "vapor" && (
        <g>
          <path d="M60 58 a 46 46 0 0 1 92 0 Z" fill="var(--color-pop-purple)" stroke={INK} strokeWidth="3" />
          <g stroke={INK} strokeWidth="2.5">
            <line x1="34" y1="66" x2="178" y2="66" />
            <line x1="44" y1="74" x2="168" y2="74" opacity="0.6" />
            <line x1="58" y1="82" x2="154" y2="82" opacity="0.4" />
          </g>
          <circle cx="186" cy="26" r="6" fill="var(--color-pop-cyan, #4d96ff)" stroke={INK} strokeWidth="2.5" />
        </g>
      )}
      {motif === "cute" && (
        <g stroke={INK} strokeWidth="2.5">
          <path d="M44 46 c -8 -12 -24 -6 -20 6 c 3 9 20 16 20 16 c 0 0 17 -7 20 -16 c 4 -12 -12 -18 -20 -6 Z" fill="var(--color-pop-pink)" />
          <path d="M120 40 l 8 10 l 12 2 l -8 9 l 2 12 l -11 -5 l -11 5 l 2 -12 l -8 -9 l 12 -2 Z" fill="var(--color-pop-yellow)" />
          <path d="M178 52 c -6 -9 -18 -5 -15 5 c 2 7 15 12 15 12 c 0 0 13 -5 15 -12 c 3 -10 -9 -14 -15 -5 Z" fill="var(--color-pop-pink)" />
        </g>
      )}
      {motif === "bubble" && (
        <g stroke={INK} strokeWidth="3">
          <circle cx="42" cy="48" r="18" fill="var(--color-pop-blue)" />
          <circle cx="88" cy="44" r="13" fill="var(--color-pop-green)" />
          <circle cx="126" cy="52" r="16" fill="var(--color-pop-yellow)" />
          <circle cx="166" cy="44" r="10" fill="var(--color-pop-pink)" />
          <circle cx="36" cy="42" r="4" fill="#fff" stroke="none" />
          <circle cx="120" cy="46" r="4" fill="#fff" stroke="none" />
        </g>
      )}
      {motif === "strike" && (
        <g strokeLinecap="round" strokeWidth="5">
          <line x1="24" y1="30" x2="96" y2="62" stroke="var(--color-pop-pink)" />
          <line x1="60" y1="26" x2="132" y2="58" stroke={INK} />
          <line x1="100" y1="30" x2="176" y2="62" stroke="var(--color-pop-blue)" />
        </g>
      )}
      {motif === "numbers" && (
        <g stroke={INK} strokeWidth="3" fontFamily="sans-serif" fontWeight="900" fontSize="40" textAnchor="middle">
          <text x="40" y="62" fill="var(--color-pop-yellow)">①</text>
          <text x="110" y="62" fill="var(--color-pop-blue)">𝟙</text>
          <text x="180" y="62" fill="var(--color-pop-green)">➊</text>
        </g>
      )}
      {motif === "glitch" && (
        <g>
          <rect x="20" y="26" width="70" height="12" fill="var(--color-pop-pink)" transform="translate(6 -4)" />
          <rect x="34" y="42" width="90" height="12" fill="var(--color-ink)" transform="translate(-8 2)" />
          <rect x="48" y="58" width="110" height="12" fill="var(--color-pop-blue)" transform="translate(10 -2)" />
          <rect x="150" y="34" width="34" height="12" fill="var(--color-pop-green)" transform="translate(-14 4)" />
        </g>
      )}
      {motif === "flip" && (
        <g {...common} fontFamily="sans-serif" fontWeight="900" fontSize="42" textAnchor="middle">
          <text x="52" y="60" fill="var(--color-pop-orange)" stroke={INK} strokeWidth="2">ɐ</text>
          <text x="120" y="60" fill="var(--color-pop-blue)" stroke={INK} strokeWidth="2">ǝ</text>
          <text x="182" y="60" fill="var(--color-pop-pink)" stroke={INK} strokeWidth="2">ʇ</text>
        </g>
      )}
      {motif === "cjk" && (
        <g stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round">
          <path d="M28 28 h 34 M28 28 v 34 M62 28 v 34" strokeWidth="4" />
          <path d="M156 28 h 34 M156 28 v 34 M190 28 v 34" strokeWidth="4" />
          <path d="M92 46 c -6 -10 -18 -5 -15 5 c 2 7 15 12 15 12 c 0 0 13 -5 15 -12 c 3 -10 -9 -14 -15 -5 Z" fill="var(--color-pop-pink)" />
          <circle cx="150" cy="30" r="5" fill="var(--color-pop-yellow)" />
        </g>
      )}
      {motif === "game" && (
        <g>
          <rect x="26" y="28" width="120" height="44" rx="20" fill="var(--color-pop-green)" stroke={INK} strokeWidth="3" transform="rotate(-6 26 28)" />
          <circle cx="58" cy="50" r="7" fill={INK} />
          <circle cx="116" cy="44" r="7" fill={INK} />
          <circle cx="106" cy="56" r="7" fill={INK} />
          <rect x="160" y="34" width="16" height="30" rx="4" fill="var(--color-pop-yellow)" stroke={INK} strokeWidth="3" transform="rotate(10 160 34)" />
          <text x="168" y="56" fontFamily="sans-serif" fontWeight="900" fontSize="16" textAnchor="middle" fill={INK}>A</text>
        </g>
      )}
      {motif === "blocks" && (
        <g stroke={INK} strokeWidth="3">
          <rect x="46" y="56" width="38" height="24" fill="var(--color-pop-yellow)" />
          <rect x="86" y="56" width="38" height="24" fill="var(--color-pop-pink)" />
          <rect x="66" y="30" width="38" height="24" fill="var(--color-pop-blue)" />
          <rect x="126" y="56" width="38" height="24" fill="var(--color-pop-green)" />
        </g>
      )}
      {motif === "shooter" && (
        <g stroke={INK} strokeWidth="3">
          <circle cx="110" cy="46" r="30" fill="none" />
          <circle cx="110" cy="46" r="5" fill="var(--color-pop-orange)" />
          <line x1="110" y1="4" x2="110" y2="26" />
          <line x1="110" y1="66" x2="110" y2="86" />
          <line x1="66" y1="46" x2="88" y2="46" />
          <line x1="132" y1="46" x2="154" y2="46" />
        </g>
      )}
      {motif === "flame" && (
        <g>
          <path d="M96 16 c 20 22 44 30 40 52 c -3 18 -22 26 -38 22 c 8 -10 6 -20 -2 -30 c -4 10 -14 12 -16 22 c -10 -8 -12 -24 -2 -36 c 6 -8 12 -18 18 -30 Z" fill="var(--color-pop-orange)" stroke={INK} strokeWidth="3" />
          <path d="M108 52 c 8 10 8 20 0 28 c -6 -6 -8 -10 -4 -16 c -2 8 -8 10 -10 16" fill="var(--color-pop-yellow)" stroke={INK} strokeWidth="2.5" />
        </g>
      )}
      {motif === "social" && (
        <g stroke={INK} strokeWidth="3">
          <rect x="22" y="26" width="52" height="40" rx="10" fill="var(--color-pop-pink)" />
          <rect x="86" y="26" width="52" height="40" rx="10" fill="var(--color-pop-blue)" />
          <rect x="150" y="26" width="52" height="40" rx="10" fill="var(--color-pop-green)" />
          <circle cx="48" cy="46" r="9" fill="#fff" stroke="none" />
          <circle cx="112" cy="46" r="9" fill="#fff" stroke="none" />
          <circle cx="176" cy="46" r="9" fill="#fff" stroke="none" />
        </g>
      )}
    </svg>
  );
}

/**
 * 首页样式卡片右上角的迷你字形预览:该页主样式下的 "A"。
 * 纯中文装饰页(无拉丁样式)展示一个装饰框示例。
 */
export function StyleCardGlyph({ page }: { page: StylePageDef }) {
  const char =
    page.extraCjk || !page.styleIds[0]
      ? "꧁字꧂"
      : convertText("A", page.styleIds[0]);
  const tints = ["bg-pop-yellow", "bg-pop-pink text-paper", "bg-pop-blue text-paper", "bg-pop-green text-paper"];
  return (
    <span
      aria-hidden="true"
      className={`flex h-9 w-9 shrink-0 -rotate-6 items-center justify-center rounded-lg border-2 border-ink text-lg font-black shadow-pop-sm ${tints[page.slug.length % tints.length]} transition-transform group-hover:rotate-6`}
    >
      {char}
    </span>
  );
}

/** 平台卡片的文字示意芯片(有色块 + 平台名前两字,不用真实商标)。 */
export function PlatformChipInner({ platform }: { platform: string }) {
  const tints = ["bg-pop-pink text-paper", "bg-pop-blue text-paper", "bg-pop-green text-paper", "bg-pop-orange"];
  return (
    <span
      aria-hidden="true"
      className={`inline-flex h-8 items-center rounded-lg border-2 border-ink px-2 text-xs font-black shadow-pop-sm ${tints[platform.length % tints.length]}`}
    >
      {platform.slice(0, 2)}
    </span>
  );
}

const POP = ["bg-pop-yellow", "bg-pop-pink", "bg-pop-blue", "bg-pop-green", "bg-pop-orange", "bg-pop-purple"];
const POP_TEXT = ["text-ink", "text-paper", "text-paper", "text-paper", "text-ink", "text-paper"];

/**
 * 字形拼贴:把几个大号花式字符装进旋转的贴纸块。
 * 样式页页头 / 首页视觉锚点通用。glyphs 由调用方用引擎生成(确定性输出)。
 */
export function GlyphCollage({
  glyphs,
  size = "md",
  className = "",
}: {
  glyphs: string[];
  size?: "md" | "lg";
  className?: string;
}) {
  const box = size === "lg" ? "h-24 w-24 sm:h-28 sm:w-28 text-4xl sm:text-5xl" : "h-16 w-16 sm:h-20 sm:w-20 text-2xl sm:text-3xl";
  return (
    <div aria-hidden="true" className={`flex flex-wrap items-center gap-3 sm:gap-4 ${className}`}>
      {glyphs.slice(0, 5).map((glyph, index) => (
        <span
          key={`${glyph}-${index}`}
          className={`flex ${box} items-center justify-center rounded-xl border-2 border-ink font-black shadow-pop ${POP[index % POP.length]} ${POP_TEXT[index % POP.length]} ${
            index % 2 === 0 ? "-rotate-6" : "rotate-3"
          }`}
        >
          {glyph}
        </span>
      ))}
    </div>
  );
}

/** 从样式引擎生成展示字形(服务端调用,确定性输出)。 */
export function sampleGlyph(text: string, styleId: TextStyleId): string {
  return convertText(text, styleId);
}

/** 装饰组合字形:主样式 + 装饰对。 */
export function wrappedGlyph(text: string, styleId: TextStyleId, left: string, right: string): string {
  return withWrapper(convertText(text, styleId), [left, right]);
}

/**
 * 手绘锯齿分隔线:区块之间的波普过渡带。
 */
export function SquiggleDivider({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`overflow-hidden ${className}`}>
      <svg viewBox="0 0 1200 24" className="h-4 w-full" preserveAspectRatio="none">
        <path
          d="M0 12 Q 25 0 50 12 T 100 12 T 150 12 T 200 12 T 250 12 T 300 12 T 350 12 T 400 12 T 450 12 T 500 12 T 550 12 T 600 12 T 650 12 T 700 12 T 750 12 T 800 12 T 850 12 T 900 12 T 950 12 T 1000 12 T 1050 12 T 1100 12 T 1150 12 T 1200 12"
          fill="none"
          stroke="var(--color-ink)"
          strokeWidth="4"
        />
      </svg>
    </div>
  );
}

/** 四角星贴纸(波普闪光)。 */
export function PopStar({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" stroke="var(--color-ink)" strokeWidth="1.5" />
    </svg>
  );
}

/** 手绘箭头(指向 CTA)。 */
export function PopArrow({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 64 40" className={className} fill="none">
      <path
        d="M4 6 C 20 28, 36 30, 54 24"
        stroke="var(--color-ink)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path d="M46 16 L56 24 L44 30" stroke="var(--color-ink)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

/**
 * 手机样机:平台页插图——把花式昵称放进"个人资料卡"场景。
 * 纯 CSS 绘制,昵称/平台名/简介由调用方传入(已是该语言文案)。
 */
export function PhoneMockup({
  nickname,
  platform,
  bio,
  accent = "bg-pop-pink",
}: {
  nickname: string;
  platform: string;
  bio?: string;
  accent?: string;
}) {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-[300px]">
      {/* 装饰星 */}
      <PopStar className="absolute -right-3 -top-4 h-8 w-8 rotate-12 text-pop-yellow" />
      <PopStar className="absolute -left-4 bottom-16 h-5 w-5 -rotate-12 text-pop-pink" />
      {/* 机身 */}
      <div className="rounded-[2rem] border-[3px] border-ink bg-surface p-3 shadow-pop-lg">
        <div className="mx-auto mb-2 h-1.5 w-16 rounded-full bg-ink" />
        {/* 资料卡 */}
        <div className={`rounded-2xl border-2 border-ink ${accent} p-4 text-center`}>
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-ink bg-paper text-2xl shadow-pop-sm">
            😎
          </div>
          <p className="result-text mt-2 text-xl font-black text-ink">{nickname}</p>
          {bio ? <p className="mt-1 line-clamp-2 text-xs font-bold text-ink/80">{bio}</p> : null}
          <p className="mt-2 inline-block rounded-full border-2 border-ink bg-paper px-3 py-0.5 text-[10px] font-black text-ink">
            {platform}
          </p>
        </div>
        {/* 模拟输入行 */}
        <div className="mt-2 flex items-center gap-2 rounded-xl border-2 border-ink bg-paper px-3 py-2">
          <span className="text-sm">✏️</span>
          <span className="h-2 flex-1 rounded-full bg-ink/15" />
          <span className="rounded-md border-2 border-ink bg-pop-yellow px-2 py-0.5 text-[10px] font-black">Copy</span>
        </div>
      </div>
    </div>
  );
}

/**
 * 页头插图带:主题底色 + 专属图案水印 + 左文案 + 右字形拼贴,波点底纹。
 * 样式页、平台页与指南页页头通用。
 */
export function HeaderBand({
  children,
  glyphs,
  motif,
  artSrc,
  bandClass = "bg-paper",
  className = "",
}: {
  children: React.ReactNode;
  glyphs?: string[];
  motif?: MotifId;
  /** AI 生成插图(public 路径);存在时替代图案与字形拼贴。 */
  artSrc?: string;
  bandClass?: string;
  className?: string;
}) {
  return (
    <div className={`relative flex items-center overflow-hidden rounded-xl border-2 border-ink shadow-pop sm:min-h-[220px] ${bandClass} ${className}`}>
      {/* 波点底纹 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: "radial-gradient(var(--color-ink) 1.5px, transparent 1.5px)",
          backgroundSize: "18px 18px",
        }}
      />
      {/* 主题图案水印(无 AI 插图时显示,小屏隐藏) */}
      {!artSrc && motif ? (
        <MotifArt
          motif={motif}
          className="pointer-events-none absolute -left-6 bottom-[-24px] hidden w-72 -rotate-3 opacity-[0.16] sm:block"
        />
      ) : null}
      {/* AI 插图:占头带右半幅,整图完整呈现(含品牌框) */}
      {artSrc ? (
        <img
          src={artSrc}
          alt=""
          aria-hidden="true"
          width={1200}
          height={675}
          loading="lazy"
          decoding="async"
          className="absolute inset-y-0 right-0 hidden h-full w-1/2 border-l-2 border-ink object-cover object-left sm:block"
        />
      ) : null}
      <div className="relative flex items-center justify-between gap-6 p-5 sm:p-7 sm:pr-6">
        <div className="min-w-0 sm:w-1/2">{children}</div>
        {!artSrc && glyphs && glyphs.length > 0 ? (
          <div className="hidden shrink-0 flex-col items-end gap-2 sm:flex">
            {motif ? <MotifArt motif={motif} className="w-40 rotate-2" /> : null}
            <GlyphCollage glyphs={glyphs} size="lg" />
          </div>
        ) : null}
      </div>
    </div>
  );
}

/**
 * 首页 Hero 背景:四散的大号花式字形(半透明,不干扰正文)。
 * glyphs 由调用方按 locale 提供。
 */
export function HeroGlyphField({ glyphs }: { glyphs: string[] }) {
  const spots = [
    "left-[2%] top-6 -rotate-12 text-6xl",
    "right-[6%] top-10 rotate-6 text-7xl",
    "left-[8%] bottom-2 rotate-3 text-5xl",
    "right-[12%] bottom-0 -rotate-6 text-6xl",
    "left-[45%] top-0 rotate-12 text-4xl",
  ];
  const colors = ["text-pop-pink/25", "text-pop-blue/25", "text-pop-green/25", "text-pop-purple/25", "text-pop-orange/25"];
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {glyphs.slice(0, 5).map((glyph, index) => (
        <span
          key={index}
          className={`absolute select-none font-black ${spots[index % spots.length]} ${colors[index % colors.length]}`}
        >
          {glyph}
        </span>
      ))}
    </div>
  );
}

/**
 * 平台 logo 芯片:有色块 + 平台首字(不用真实商标,文字示意)。
 * 指南表格/平台页通用。
 */
export function PlatformChip({ label, locale = "zh-cn" as Locale }: { label: string; locale?: Locale }) {
  void localePath;
  void locale;
  const initial = label.slice(0, 2);
  return (
    <span className="inline-flex items-center gap-1.5 align-middle">
      <span
        aria-hidden="true"
        className="inline-flex h-6 w-6 items-center justify-center rounded-md border-2 border-ink bg-pop-blue text-[10px] font-black text-paper"
      >
        {initial}
      </span>
      <span className="font-bold">{label}</span>
    </span>
  );
}
