import { ogAlt, ogContentType, ogSize, renderOgCard } from "@/lib/og";

export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgCard({
    eyebrow: "About",
    title: "About me",
    subtitle:
      "Telecommunication engineering into full stack product work: embedded, APIs and cloud.",
  });
}
