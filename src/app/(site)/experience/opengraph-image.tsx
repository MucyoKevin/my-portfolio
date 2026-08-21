import { ogAlt, ogContentType, ogSize, renderOgCard } from "@/lib/og";

export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgCard({
    eyebrow: "Experience",
    title: "Work experience",
    subtitle:
      "CTO at GC Technologies and StroomUp, after data and IT internships.",
  });
}
