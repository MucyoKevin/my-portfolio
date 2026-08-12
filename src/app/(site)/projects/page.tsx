import type { Metadata } from "next";
import Link from "next/link";
import { ProjectCarousel } from "@/components/projects/ProjectCarousel";
import { PageShell } from "@/components/site/PageShell";
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
    <PageShell>
      <div className="mb-4 sm:mb-8">
        <span className="px-3 sm:px-4 py-1 rounded-full border border-[var(--accent)] text-[var(--accent)] font-medium text-xs sm:text-sm">
          Projects
        </span>
      </div>
      <h1 className="text-2xl sm:text-5xl font-bold mb-2 sm:mb-3">
        Featured <span className="text-[var(--accent)]">projects</span>
      </h1>
      <p className="mb-6 max-w-2xl text-sm text-black/70 sm:mb-8 sm:text-base">
        Personal and learning work. For the commercial platforms I build and
        lead, see{" "}
        <Link
          href="/products"
          className="font-bold text-[var(--accent-2-ink)] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-2)] rounded-sm"
        >
          Products
        </Link>
        .
      </p>
      <ProjectCarousel projects={projects} />
    </PageShell>
  );
}
