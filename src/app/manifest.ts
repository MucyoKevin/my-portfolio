import type { MetadataRoute } from "next";

/**
 * Not a PWA ambition — the manifest is here so Android Chrome paints the
 * address bar in the site's accent, and so an "add to home screen" gets a real
 * name and icon rather than the URL and a screenshot.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mucyo Kevin — Full Stack Developer",
    short_name: "Mucyo Kevin",
    description:
      "Portfolio of Mucyo Kevin, a full stack developer in Kigali, Rwanda — JavaScript, Python, C#, APIs and cloud-native delivery.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    lang: "en",
    dir: "ltr",
    background_color: "#c8c8c8",
    // Matches the `themeColor` in the root viewport export and the page
    // background, so the standalone title bar blends into the site.
    theme_color: "#c8c8c8",
    categories: ["business", "productivity", "portfolio"],
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}
