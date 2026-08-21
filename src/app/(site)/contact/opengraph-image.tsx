import { ogAlt, ogContentType, ogSize, renderOgCard } from "@/lib/og";

export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgCard({
    eyebrow: "Contact",
    title: "Let us work together",
    subtitle:
      "Freelance, full-time roles and collaboration. Kigali and remote.",
  });
}
