import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#4c1d95",
          color: "#ffffff",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 4, color: "#ddd6fe" }}>
          FANCYFONT.TOOLS
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 800, lineHeight: 1.05 }}>
            FancyFont
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 36, color: "#ede9fe" }}>
            Stylish Unicode text, gaming names and symbols
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#c4b5fd" }}>
          Free, in your browser, nothing uploaded
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
