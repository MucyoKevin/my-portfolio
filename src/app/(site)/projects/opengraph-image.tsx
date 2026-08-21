import { ogAlt, ogContentType, ogSize, renderOgCard } from "@/lib/og";

export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgCard({
    eyebrow: "Projects",
    title: "Featured projects",
    subtitle:
      "Full stack apps, data pipelines, analytics and landing pages.",
  });
}
