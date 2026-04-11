import type { Metadata } from "next";
import { ProjectCarousel } from "@/components/projects/ProjectCarousel";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Featured work: full stack apps, data pipelines, analytics, and landing pages.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | Mucyo Kevin",
    description: "Selected projects with links to code, demos, and articles.",
    url: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <div className="mb-4 sm:mb-8">
        <span className="px-3 sm:px-4 py-1 rounded-full border border-[var(--accent)] text-[var(--accent)] font-medium text-xs sm:text-sm">
          Projects
        </span>
      </div>
      <h1 className="text-2xl sm:text-5xl font-bold mb-4 sm:mb-5">
        Featured <span className="text-[var(--accent)]">projects</span>
      </h1>
      <ProjectCarousel projects={projects} />
    </>
  );
}
