import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Education at JKUAT, certificates in Python and Google Data Analytics.",
  alternates: { canonical: "/resume" },
  openGraph: {
    title: "Resume | Mucyo Kevin",
    description: "Education and professional certificates.",
    url: "/resume",
  },
};

export default function ResumePage() {
  return (
    <>
      <div className="mb-4 sm:mb-8">
        <span className="px-3 sm:px-4 py-1 rounded-full border border-[var(--accent)] text-[var(--accent)] font-medium text-xs sm:text-sm">
          Resume
        </span>
      </div>
      <h1 className="text-2xl sm:text-5xl font-bold mb-4 sm:mb-12">
        Education &{" "}
        <span className="text-[var(--accent)]">certificates</span>
      </h1>
      <div className="border-l-2 border-[var(--accent)] pl-4 sm:pl-8 mb-5">
        <div className="mb-12">
          <div className="text-lg font-bold mb-1">2019–2024</div>
          <div className="text-2xl font-semibold">
            Bachelor of Science in Telecommunication and Information
            Engineering
          </div>
          <div className="text-base">
            Jomo Kenyatta University of Agriculture and Technology
          </div>
        </div>
        <div className="mb-5">
          <div className="text-lg font-bold mb-1">2025</div>
          <div className="text-2xl font-semibold">
            Programming Essentials in Python certificate
          </div>
          <div className="text-base mb-4">OpenEDG Python Institute</div>
          <div className="text-lg font-bold mb-1">2025</div>
          <div className="text-2xl font-semibold">
            Google Data Analytics Professional Certificate
          </div>
          <div className="text-base mb-4">Coursera</div>
        </div>
      </div>
    </>
  );
}
