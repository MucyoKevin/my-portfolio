"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Instagram,
  Call,
  GitHub,
  Twitter,
  HomeFilled,
  Person,
  Description,
  Code,
  Folder,
  Mail,
  ArrowBackIosNew,
  ArrowForwardIos,
} from "@mui/icons-material";

const projects = [
  {
    title: "Personal Finance Tracker",
    image: "/PersonalFinanceTracker.JPG",
    description: "A web application for managing personal finances, built with ASP.NET Core and Entity Framework Core.",
    tags: ["ASP.NET Core", "C#"],
  },
  {
    title: "Automated Weather Data Pipeline",
    image: "/datapipeline.webp",
    description: "This project implements a complete ETL pipeline for weather data.",
    tags: ["Python", "Supabase"],
  },
  {
    title: "Tesla Model S Showcase",
    image: "/CO2emissionvisualisation.webp",
    description: "A showcase site for Tesla Model S with animations and modern UI.",
    tags: ["Next.js", "Framer Motion"],
  },
  {
    title: "BMW M4 Portfolio",
    image: "/profile.jpeg",
    description: "A portfolio for BMW M4 featuring interactive galleries.",
    tags: ["React", "Tailwind"],
  },
  {
    title: "Audi R8 Experience",
    image: "/profile.jpeg",
    description: "An immersive experience site for Audi R8.",
    tags: ["Three.js", "React"],
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);
  const total = projects.length;
  const goLeft = () => setIndex((prev) => (prev - 1 + total) % total);
  const goRight = () => setIndex((prev) => (prev + 1) % total);
  const project = projects[index];

  return (
    <div className="bg-black px-20 py-10">
      <div className="flex min-h-screen bg-[var(--background)] text-black font-[var(--font-sans)]  border-2  rounded-xl max-h-2/3">
        {/* Left Profile Card */}
        <aside className="w-full max-w-xs bg-white/10 rounded-2xl m-4 flex flex-col items-center p-10 shadow-lg">
          <Image
            src="/profile.jpeg"
            alt="Profile"
            width={250}
            height={250}
            className="rounded-xl object-cover mb-6"
          />
          <h1 className="text-3xl font-bold mb-1">Mucyo Kevin</h1>
          <p className="text-lg font-medium mb-4">Full Stack Developer</p>
          <div className="flex flex-row gap-4">
            <div className="flex flex-row gap-4 mb-4">
              <a
                href="https://github.com/MucyoKevin"
                className="text-[var(--accent)]"
              >
                <GitHub />
              </a>
              <a href="#" className="text-[var(--accent)]">
                <Instagram />
              </a>
              <a href="#" className="text-[var(--accent)]">
                <Twitter />
              </a>
            </div>
          </div>
          <div className="mb-2 text-sm">mucyocyeve22@gmail.com</div>
          <div className="mb-4 text-lg font-bold">Kigali, Rwanda</div>
          <div className="text-xs mb-6">
            © 2023 Mucyo Kevin. All Right Reserved.
          </div>
          <Link href="/contact">
            <button className="w-full bg-[var(--accent)] text-white py-3 rounded-lg flex items-center justify-center gap-2 font-semibold text-lg p-6 hover:cursor-pointer">
              <Call /> Contact Me
            </button>
          </Link>
        </aside>
        {/* Main Content */}
        <main className="flex-1 flex flex-col justify-center items-start px-16 relative">
          <div className="mb-4">
            <span className="px-4 py-1 rounded-full border border-[var(--accent)] text-[var(--accent)] font-medium text-sm">
              Projects
            </span>
          </div>
          <h2 className="text-5xl font-bold mb-12">
            Featured <span className="text-[var(--accent)]">Projects</span>
          </h2>
          {/* Carousel */}
          <div className="flex items-center justify-center w-full mb-12">
            <button onClick={goLeft} className="p-2 rounded-full hover:bg-[var(--accent)]/20 transition-colors">
              <ArrowBackIosNew className="text-[var(--accent)]" />
            </button>
            <div className="mx-8 bg-white/10 rounded-2xl overflow-hidden shadow-lg w-[400px] flex flex-col items-center p-6">
              <Image
                src={project.image}
                alt={project.title}
                width={350}
                height={180}
                className="object-cover w-full h-44 rounded-xl mb-4"
              />
              <div className="text-2xl font-bold mb-2 text-center">{project.title}</div>
              <div className="text-base text-center mb-4 text-black/80">{project.description}</div>
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
            </div>
            <button onClick={goRight} className="p-2 rounded-full hover:bg-[var(--accent)]/20 transition-colors">
              <ArrowForwardIos className="text-[var(--accent)]" />
            </button>
          </div>
          {/* Navbar inside main, absolutely positioned at the bottom, centered, with smaller width */}
          <nav className="absolute left-1/2 -translate-x-1/2 bottom-8 w-[500px] max-w-full bg-white/10 rounded-full px-8 py-3 flex gap-8 shadow-[0_8px_24px_rgba(0,0,0,0.2)] border border-[var(--accent)] z-50 justify-center items-center">
            <Link href="/">
              <HomeFilled className="text-[var(--accent)] transition-transform ease-in-out duration-300 delay-200 hover:-translate-y-2" />
            </Link>
            <Link href="/about">
              <Person className="text-[var(--accent)] transition-transform ease-in-out duration-300 delay-200 hover:-translate-y-2" />
            </Link>
            <Link href="/resume">
              <Description className="text-[var(--accent)] transition-transform ease-in-out duration-300 delay-200 hover:-translate-y-2" />
            </Link>
            <Link href="/skills">
              <Code className="text-[var(--accent)] transition-transform ease-in-out duration-300 delay-200 hover:-translate-y-2" />
            </Link>
            <Link href="/projects">
              <Folder className="text-[var(--accent)] transition-transform ease-in-out duration-300 delay-200 hover:-translate-y-2" />
            </Link>
            <Link href="/contact">
              <Mail className="text-[var(--accent)] transition-transform ease-in-out duration-300 delay-200 hover:-translate-y-2" />
            </Link>
          </nav>
        </main>
      </div>
    </div>
  );
}
