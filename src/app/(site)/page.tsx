import type { Metadata } from "next";
import { MobileProfileCard } from "@/components/site/MobileProfileCard";

export const metadata: Metadata = {
  title: { absolute: "Mucyo Kevin | Full Stack Developer" },
  description:
    "Mucyo Kevin — full stack developer in Kigali. JavaScript, Python, cloud, and clean architecture.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Mucyo Kevin | Full Stack Developer",
    description:
      "Portfolio of Mucyo Kevin — full stack developer building elegant, simple software.",
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <MobileProfileCard />
      <div className="mb-4 sm:mb-8">
        <span className="px-3 sm:px-4 py-1 rounded-full border border-[var(--accent)] text-[var(--accent)] font-medium text-xs sm:text-sm">
          Introduction
        </span>
      </div>
      <div className="mb-6 sm:mb-10">
        <h1 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6">
          Hello there, I am{" "}
          <span className="text-[var(--accent)]">Kevin</span>,{" "}
          <br className="hidden sm:block" />
          full stack developer
        </h1>
        <p className="text-base sm:text-xl text-black/80 mb-2">
          I code beautifully elegant simple things and I love what I do.
          <br />
          Just keeping things simple like that!
        </p>
      </div>
    </>
  );
}
