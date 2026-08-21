import { ogAlt, ogContentType, ogSize, renderOgCard } from "@/lib/og";

export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgCard({
    eyebrow: "Resume",
    title: "Education and certificates",
    subtitle:
      "BSc from JKUAT, plus Python Institute and Google Data Analytics certificates.",
  });
}
