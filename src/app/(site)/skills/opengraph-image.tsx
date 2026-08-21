import { ogAlt, ogContentType, ogSize, renderOgCard } from "@/lib/og";

export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgCard({
    eyebrow: "Skills",
    title: "My advantages",
    subtitle:
      "JavaScript, Python, Django, React, Vue, HTML, CSS and Git.",
  });
}
