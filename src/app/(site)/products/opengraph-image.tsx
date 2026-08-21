import { ogAlt, ogContentType, ogSize, renderOgCard } from "@/lib/og";

export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgCard({
    eyebrow: "Products",
    title: "Built and building",
    subtitle:
      "StroomUp, GC Builds, Ijambo and Agaseke Store: live commercial platforms.",
  });
}
