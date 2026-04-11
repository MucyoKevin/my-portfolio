import type { Metadata } from "next";
import { WorkExperienceSection } from "@/components/experience/WorkExperienceSection";
import { workExperience } from "@/data/work-experience";

export const metadata: Metadata = {
  title: "Work experience",
  description:
    "CTO at GC Technologies and StroomUp; earlier internships at MTN Rwanda (data analysis, Grafana) and Rwanda Airport Company (IT operations).",
  alternates: { canonical: "/experience" },
  openGraph: {
    title: "Work experience | Mucyo Kevin",
    description:
      "Technology leadership, data visualization, network operations, and platform delivery.",
    url: "/experience",
  },
};

export default function ExperiencePage() {
  return (
    <>
      <div className="mb-4 sm:mb-8">
        <span className="px-3 sm:px-4 py-1 rounded-full border border-[var(--accent)] text-[var(--accent)] font-medium text-xs sm:text-sm">
          Experience
        </span>
      </div>
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4">
        Work <span className="text-[var(--accent)]">experience</span>
      </h1>
      <p className="text-sm sm:text-base text-black/70 mb-8 sm:mb-12 max-w-2xl">
        From current CTO roles back through data and IT internships 
      </p>
      <WorkExperienceSection entries={workExperience} />
    </>
  );
}
