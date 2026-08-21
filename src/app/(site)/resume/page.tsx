import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageShell } from "@/components/site/PageShell";
import { credentialsNodes, pageGraph } from "@/lib/schema";

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
    <PageShell>
      <JsonLd
        data={pageGraph(
          {
            path: "/resume",
            label: "Resume",
            type: "ProfilePage",
            name: "Resume — Mucyo Kevin",
            description:
              "BSc in Telecommunication and Information Engineering from JKUAT, with Python Institute and Google Data Analytics certificates.",
          },
          credentialsNodes(),
        )}
      />
      <div className="mb-4 sm:mb-8">
        <span className="px-3 sm:px-4 py-1 rounded-full border border-[var(--accent)] text-[var(--accent)] font-medium text-xs sm:text-sm">
          Resume
        </span>
      </div>
      <h1 className="text-2xl sm:text-5xl font-bold mb-4 sm:mb-12">
        Education &{" "}
        <span className="text-[var(--accent)]">certificates</span>
      </h1>
      {/* The qualification names are headings, not styled divs: it costs
          nothing visually and gives crawlers and screen readers the outline
          the page already has visually. */}
      <div className="border-l-2 border-[var(--accent)] pl-4 sm:pl-8 mb-5">
        <div className="mb-12">
          <div className="text-lg font-bold mb-1">2019–2024</div>
          <h2 className="text-2xl font-semibold">
            Bachelor of Science in Telecommunication and Information
            Engineering
          </h2>
          <div className="text-base">
            Jomo Kenyatta University of Agriculture and Technology
          </div>
        </div>
        <div className="mb-5">
          <div className="text-lg font-bold mb-1">2025</div>
          <h2 className="text-2xl font-semibold">
            Programming Essentials in Python certificate
          </h2>
          <div className="text-base mb-4">OpenEDG Python Institute</div>
          <div className="text-lg font-bold mb-1">2025</div>
          <h2 className="text-2xl font-semibold">
            Google Data Analytics Professional Certificate
          </h2>
          <div className="text-base mb-4">Coursera</div>
        </div>
      </div>
    </PageShell>
  );
}
