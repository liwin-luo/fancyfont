import { ImageResponse } from "next/og";

export const dynamic = "force-static";

// Brand tokens mirrored from globals.css (@theme "Lavender Pixel").
const PAGE = "#faf9ff";
const SURFACE = "#ffffff";
const LINE = "#e7e3f0";
const INK = "#181526";
const INK_600 = "#5f5a70";
const BRAND_600 = "#6d28d9";
const BRAND_700 = "#5b21b6";
const PIXEL_LIME = "#a3e635";
const PIXEL_PINK = "#f9a8d4";
const PIXEL_BLUE = "#93c5fd";
const PIXEL_FAINT = "#ddd6fe";

// Same glyph shapes as src/components/pixel-star.tsx (7×7 pixel grids).
const STAR = [[3], [3], [2, 3, 4], [0, 1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5], [2, 3, 4], [0, 2, 4, 6]];
const HEART = [[1, 2, 4, 5], [0, 1, 2, 3, 4, 5, 6], [0, 1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5], [2, 3, 4], [3]];
const SPARK = [[3], [1, 3, 5], [2, 3, 4], [0, 1, 2, 4, 5, 6], [2, 3, 4], [1, 3, 5], [3]];

function Pixel({
  rows,
  size,
  color,
  style,
}: {
  rows: number[][];
  size: number;
  color: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" style={style}>
      {rows.flatMap((cols, r) =>
        cols.map((c) => (
          <rect key={`${c}-${r}`} x={c * 4} y={r * 4} width={4} height={4} fill={color} />
        )),
      )}
    </svg>
  );
}

// Google square-crops this 1200×630 image around its center (630×630, x
// 285–915) for cards like Search Console's "Your content". The white card is
// sized to stay inside that crop with its rounded corners intact, so the side
// strips only ever carry decoration that may be cut away.
export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: PAGE,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", position: "relative", width: 310, height: "100%" }}>
          <Pixel rows={STAR} size={84} color={PIXEL_LIME} style={{ position: "absolute", top: 66, left: 96, transform: "rotate(-10deg)" }} />
          <Pixel rows={SPARK} size={26} color={PIXEL_FAINT} style={{ position: "absolute", top: 212, left: 214 }} />
          <Pixel rows={HEART} size={58} color={PIXEL_PINK} style={{ position: "absolute", top: 316, left: 44 }} />
          <Pixel rows={SPARK} size={40} color={PIXEL_BLUE} style={{ position: "absolute", bottom: 74, left: 156 }} />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: 580,
            height: 520,
            margin: "55px 0",
            background: SURFACE,
            border: `2px solid ${LINE}`,
            borderRadius: 32,
            boxShadow: "0 24px 48px rgba(46, 16, 101, 0.12)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 108,
              height: 108,
              borderRadius: 26,
              background: BRAND_600,
            }}
          >
            <Pixel rows={STAR} size={68} color={SURFACE} />
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 92,
              fontWeight: 800,
              letterSpacing: -2,
              lineHeight: 1.05,
              color: INK,
            }}
          >
            FancyFont
          </div>
          <div
            style={{
              marginTop: 16,
              width: 440,
              fontSize: 27,
              lineHeight: 1.4,
              textAlign: "center",
              color: INK_600,
            }}
          >
            Stylish Unicode text, gaming names and symbols
          </div>
          <div style={{ marginTop: 28, display: "flex", alignItems: "center", gap: 14 }}>
            <Pixel rows={SPARK} size={20} color={PIXEL_LIME} />
            <div style={{ fontSize: 24, fontWeight: 600, color: BRAND_700 }}>fancyfont.tools</div>
            <Pixel rows={HEART} size={20} color={PIXEL_PINK} />
          </div>
        </div>

        <div style={{ display: "flex", position: "relative", width: 310, height: "100%" }}>
          <Pixel rows={SPARK} size={72} color={PIXEL_BLUE} style={{ position: "absolute", top: 72, right: 112 }} />
          <Pixel rows={STAR} size={26} color={PIXEL_FAINT} style={{ position: "absolute", top: 268, right: 44, transform: "rotate(12deg)" }} />
          <Pixel rows={HEART} size={60} color={PIXEL_PINK} style={{ position: "absolute", bottom: 70, right: 124, transform: "rotate(8deg)" }} />
          <Pixel rows={STAR} size={22} color={PIXEL_LIME} style={{ position: "absolute", bottom: 208, right: 210 }} />
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
