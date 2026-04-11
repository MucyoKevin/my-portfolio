import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Background in telecommunication and information engineering, full stack experience across embedded systems, APIs, and cloud.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Mucyo Kevin",
    description:
      "Versatile software developer with experience in embedded and full stack development.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <div className="mb-4 sm:mb-8">
        <span className="px-3 sm:px-4 py-1 rounded-full border border-[var(--accent)] text-[var(--accent)] font-medium text-xs sm:text-sm">
          About
        </span>
      </div>
      <h1 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-8">About me</h1>
      <div className="text-base sm:text-lg max-w-full sm:max-w-2xl">
        <p className="mb-4">
          Versatile software developer with a background in Telecommunication
          and Information Engineering, and hands-on experience in both embedded
          and full stack development.
        </p>
        <p className="mb-4">
          Proficient in JavaScript (Node.js, Express.js, React, Next.js), Python
          (Django/Flask), C# (.NET), and SQL/NoSQL databases. Skilled in
          designing RESTful APIs, optimizing frontend performance, and deploying
          cloud-native solutions. Passionate about clean architecture, UX-driven
          development, and solving business problems through full stack
          innovation.
        </p>
      </div>
    </>
  );
}
