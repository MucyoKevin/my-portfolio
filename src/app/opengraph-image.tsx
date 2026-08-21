import { ogAlt, ogContentType, ogSize, renderOgCard } from "@/lib/og";

export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgCard({
    eyebrow: "Portfolio",
    title: "Mucyo Kevin",
    subtitle:
      "Full stack developer in Kigali, Rwanda.",
  });
}
