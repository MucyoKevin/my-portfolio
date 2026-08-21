import { ImageResponse } from "next/og";

/**
 * The shared social card. Every route's `opengraph-image` file is a few lines
 * calling `renderOgCard` — the layout lives here once so the cards stay a set.
 *
 * Twitter's `summary_large_image` and LinkedIn both want 1200×630; anything
 * smaller gets cropped or downgraded to a thumbnail.
 */
export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";
export const ogAlt = "Mucyo Kevin — Full Stack Developer";

const BACKGROUND = "#c8c8c8";
const INK = "#000000";
const ACCENT = "#568c5c";
const ACCENT_2 = "#b4462a";

type Card = {
  /** Small label above the title — usually the section name. */
  eyebrow: string;
  title: string;
  subtitle: string;
};

export function renderOgCard({ eyebrow, title, subtitle }: Card) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: BACKGROUND,
          padding: "72px 80px",
          position: "relative",
        }}
      >
        {/* Brand rule down the left edge, echoing the accent border used
            throughout the site. */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 20,
            display: "flex",
            background: ACCENT,
          }}
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              border: `3px solid ${ACCENT_2}`,
              borderRadius: 999,
              padding: "8px 26px",
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: ACCENT_2,
            }}
          >
            {eyebrow}
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 40,
              fontSize: title.length > 42 ? 76 : 92,
              fontWeight: 800,
              lineHeight: 1.05,
              color: INK,
              maxWidth: 940,
            }}
          >
            {title}
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 34,
              lineHeight: 1.35,
              color: "rgba(0,0,0,0.72)",
              maxWidth: 900,
            }}
          >
            {subtitle}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "3px solid rgba(0,0,0,0.18)",
            paddingTop: 28,
          }}
        >
          <div
            style={{ display: "flex", fontSize: 32, fontWeight: 700, color: INK }}
          >
            Mucyo Kevin
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontWeight: 600,
              color: ACCENT,
              letterSpacing: 1,
            }}
          >
            Full Stack Developer · Kigali, RW
          </div>
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
