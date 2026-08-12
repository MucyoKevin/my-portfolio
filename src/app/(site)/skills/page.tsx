import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/site/PageShell";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const skills = [
  { name: "JavaScript", icon: "/js.svg" },
  { name: "Python", icon: "/python.svg" },
  { name: "Django", icon: "/django.svg" },
  { name: "React", icon: "/react.svg" },
  { name: "Vue.js", icon: "/vue-96.svg" },
  { name: "HTML", icon: "/html-5.svg" },
  { name: "Git", icon: "/git.svg" },
  { name: "CSS", icon: "/css-3.svg" }
];

export const metadata: Metadata = {
  title: "Skills",
  description:
    "JavaScript, Python, Django, React, Vue, HTML, CSS, and Git — tools I use to ship full stack products.",
  alternates: { canonical: "/skills" },
  openGraph: {
    title: "Skills | Mucyo Kevin",
    description: "Technologies and tools I work with most often.",
    url: "/skills",
  },
};

export default function SkillsPage() {
  return (
    <PageShell>
      <div className="mb-4 sm:mb-8">
        <span className="px-3 sm:px-4 py-1 rounded-full border border-[var(--accent)] text-[var(--accent)] font-medium text-xs sm:text-sm">
          Skills
        </span>
      </div>
      <h1 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-12">
        My <span className="text-[var(--accent)]">advantages</span>
      </h1>
      <p className="text-base text-black/80 mb-6 sm:mb-8 max-w-2xl">
        Core technologies I use regularly across frontend, backend, and delivery
        — depth varies by project.
      </p>
      <Stagger className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 mb-8 sm:mb-11 w-full">
        {skills.map((skill) => (
          <StaggerItem key={skill.name} className="flex flex-col items-center">
            <div className="group w-28 h-28 rounded-full border-2 border-[var(--accent)] flex flex-col items-center justify-center mb-4 p-2 transition-[border-color,transform] duration-300 ease-out hover:-translate-y-1 hover:border-[var(--accent-2)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
              <Image
                src={skill.icon}
                alt={`${skill.name} logo`}
                width={48}
                height={48}
                className="transition-transform duration-300 ease-out group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
            </div>
            <div className="text-lg font-semibold text-center">{skill.name}</div>
          </StaggerItem>
        ))}
      </Stagger>
    </PageShell>
  );
}
