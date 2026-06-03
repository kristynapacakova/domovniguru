import { ImageResponse } from "next/og";

export const runtime = "edge";

const CATEGORY_THEMES: Record<string, { bg: string; accent: string; label: string }> = {
  kalkulacky:   { bg: "#1a3a4a", accent: "#f4c842", label: "Kalkulačka" },
  navody:       { bg: "#2d4a1e", accent: "#a8d672", label: "Návod" },
  checklisty:   { bg: "#4a2d1e", accent: "#f4a442", label: "Checklist" },
  blog:         { bg: "#2a1e4a", accent: "#c4a8f4", label: "Článek" },
  default:      { bg: "#1e2d4a", accent: "#4ab4f4", label: "" },
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "DomovniGuru";
  const cat = (searchParams.get("cat") ?? "default").toLowerCase();
  const theme = CATEGORY_THEMES[cat] ?? CATEGORY_THEMES.default;

  const serifFont = await fetch(
    "https://fonts.gstatic.com/s/dmserifdisplay/v15/-nFnOHM81r4j6k0gjALR8uVHHTwUhkIBGZOT.woff"
  ).then((r) => r.arrayBuffer());

  const fontSize = title.length > 60 ? 52 : title.length > 40 ? 60 : 68;

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          background: theme.bg,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Diagonal texture lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 40px,
              ${theme.accent}0a 40px,
              ${theme.accent}0a 41px
            )`,
            display: "flex",
          }}
        />

        {/* Large decorative circle background */}
        <div
          style={{
            position: "absolute",
            right: "-120px",
            top: "-120px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: `${theme.accent}18`,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "-40px",
            top: "-40px",
            width: "280px",
            height: "280px",
            borderRadius: "50%",
            background: `${theme.accent}25`,
            display: "flex",
          }}
        />

        {/* Bottom left decorative arc */}
        <div
          style={{
            position: "absolute",
            left: "-80px",
            bottom: "-80px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            border: `3px solid ${theme.accent}30`,
            display: "flex",
          }}
        />

        {/* Accent left border */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "8px",
            background: theme.accent,
            display: "flex",
          }}
        />

        {/* Content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            padding: "52px 72px 52px 80px",
            position: "relative",
          }}
        >
          {/* Top row: logo + category badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "22px",
                fontWeight: 700,
                color: "rgba(255,255,255,0.9)",
                fontFamily: "system-ui, sans-serif",
                letterSpacing: "-0.3px",
              }}
            >
              🐼 Domovni<span style={{ display: "flex", color: theme.accent }}>Guru</span>
            </div>

            {theme.label ? (
              <div
                style={{
                  display: "flex",
                  background: theme.accent,
                  color: theme.bg,
                  fontSize: "13px",
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  padding: "7px 18px",
                  borderRadius: "4px",
                  textTransform: "uppercase",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                {theme.label}
              </div>
            ) : null}
          </div>

          {/* Main title */}
          <div
            style={{
              fontSize: `${fontSize}px`,
              lineHeight: 1.15,
              color: "#ffffff",
              fontFamily: "DM Serif Display, Georgia, serif",
              letterSpacing: "-1px",
              maxWidth: "950px",
              marginTop: "auto",
              marginBottom: "44px",
              textShadow: "0 2px 20px rgba(0,0,0,0.3)",
            }}
          >
            {title}
          </div>

          {/* Bottom row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                fontSize: "18px",
                color: theme.accent,
                fontFamily: "system-ui, sans-serif",
                letterSpacing: "0.04em",
                fontWeight: 600,
              }}
            >
              domovniguru.cz
            </div>

            {/* Decorative dots */}
            <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  style={{
                    width: i === 2 ? "10px" : "6px",
                    height: i === 2 ? "10px" : "6px",
                    borderRadius: "50%",
                    background: i === 2 ? theme.accent : `${theme.accent}60`,
                    display: "flex",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "DM Serif Display",
          data: serifFont,
          style: "normal",
        },
      ],
    }
  );
}
