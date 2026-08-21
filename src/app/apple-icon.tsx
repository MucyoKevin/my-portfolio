import { ImageResponse } from "next/og";

/**
 * iOS ignores `icon.svg` and falls back to a screenshot of the page when no
 * apple-touch-icon is declared, which looks like a bug on a home screen. This
 * renders the same monogram as `public/icon.svg` at the size iOS wants.
 */
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#568c5c",
          color: "#ffffff",
          fontSize: 88,
          fontWeight: 800,
          letterSpacing: -2,
        }}
      >
        MK
      </div>
    ),
    { ...size },
  );
}
