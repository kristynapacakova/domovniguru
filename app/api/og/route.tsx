import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "DomovniGuru";
  const category = searchParams.get("cat") ?? "";

  const serifFont = await fetch(
    "https://fonts.gstatic.com/s/dmserifdisplay/v15/-nFnOHM81r4j6k0gjALR8uVHHTwUhkIBGZOT.woff"
  ).then((r) => r.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          background: "#fafaf8",
          fontFamily: "Georgia, serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle dot grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, #0f0f0e18 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            display: "flex",
          }}
        />

        {/* Top accent bar */}
        <div
          style={{
            height: "6px",
            background: "#0f0f0e",
            width: "100%",
            display: "flex",
          }}
        />

        {/* Content area */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            padding: "52px 72px 48px",
            position: "relative",
          }}
        >
          {/* Logo row */}
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
                color: "#0f0f0e",
                fontFamily: "Georgia, serif",
                letterSpacing: "-0.3px",
              }}
            >
              🐼 Domovni<span style={{ display: "flex" }}>Guru</span>
            </div>

            {category ? (
              <div
                style={{
                  display: "flex",
                  background: "#0f0f0e",
                  color: "#fff",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  padding: "6px 14px",
                  borderRadius: "4px",
                  textTransform: "uppercase",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                {category}
              </div>
            ) : null}
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: title.length > 50 ? "52px" : "62px",
              lineHeight: 1.1,
              color: "#0f0f0e",
              fontFamily: "DM Serif Display, Georgia, serif",
              letterSpacing: "-1px",
              maxWidth: "900px",
              marginTop: "auto",
              marginBottom: "40px",
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
                color: "#78776e",
                fontFamily: "system-ui, sans-serif",
                letterSpacing: "0.02em",
              }}
            >
              domovniguru.cz
            </div>

            {/* Decorative line */}
            <div
              style={{
                width: "200px",
                height: "2px",
                background:
                  "linear-gradient(to right, #0f0f0e40, transparent)",
                display: "flex",
              }}
            />
          </div>
        </div>

        {/* Right accent block */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: "6px",
            bottom: 0,
            width: "8px",
            background: "#f2f1ed",
            display: "flex",
          }}
        />
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
