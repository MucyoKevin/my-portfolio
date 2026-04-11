"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { ChevronLeft, ChevronRight, Globe, Newspaper } from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import type { Project } from "@/data/projects";

type Props = {
  projects: Project[];
};

export function ProjectCarousel({ projects }: Props) {
  const total = projects.length;
  const [index, setIndex] = useState(0);
  const project = projects[index];

  const goLeft = useCallback(() => {
    setIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goRight = useCallback(() => {
    setIndex((prev) => (prev + 1) % total);
  }, [total]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full mb-8 sm:mb-12 pb-8 sm:pb-12 gap-4">
      <button
        type="button"
        onClick={goLeft}
        className="p-2 rounded-full hover:bg-[var(--accent)]/20 transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
        aria-label="Previous project"
      >
        <ChevronLeft className="h-6 w-6 text-[var(--accent)]" aria-hidden />
      </button>
      <div className="mx-0 sm:mx-8 bg-white/10 rounded-2xl overflow-hidden shadow-lg w-full max-w-xs sm:w-[400px] flex flex-col items-center p-4 sm:p-6">
        <Image
          src={project.image}
          alt={`Screenshot: ${project.title}`}
          width={350}
          height={180}
          className="object-cover w-full h-32 sm:h-44 rounded-xl mb-4"
        />
        <h3 className="text-lg sm:text-2xl font-bold mb-2 text-center">
          {project.title}
        </h3>
        <p className="text-sm sm:text-base text-center mb-4 text-black/80">
          {project.description}
        </p>
        <div className="flex gap-2 flex-wrap justify-center">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-white text-black px-3 py-1 rounded-full text-xs font-semibold border border-[var(--accent)]"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4 justify-center mt-4">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-[var(--accent)] transition-colors text-2xl rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              title="View on GitHub"
              aria-label={`${project.title} on GitHub`}
            >
              <GithubIcon className="h-8 w-8" />
            </a>
          ) : null}
          {project.article ? (
            <a
              href={project.article}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-[var(--accent)] transition-colors text-2xl rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              title="Read article"
              aria-label={`${project.title} article on Medium`}
            >
              <Newspaper className="h-8 w-8" aria-hidden />
            </a>
          ) : null}
          {project.website ? (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-[var(--accent)] transition-colors text-2xl rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              title="View website"
              aria-label={`${project.title} live site`}
            >
              <Globe className="h-8 w-8" aria-hidden />
            </a>
          ) : null}
        </div>
      </div>
      <button
        type="button"
        onClick={goRight}
        className="p-2 rounded-full hover:bg-[var(--accent)]/20 transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
        aria-label="Next project"
      >
        <ChevronRight className="h-6 w-6 text-[var(--accent)]" aria-hidden />
      </button>
    </div>
  );
}
