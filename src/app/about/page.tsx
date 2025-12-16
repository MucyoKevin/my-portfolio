"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Call,
  GitHub,
  HomeFilled,
  Person,
  Description,
  Code,
  Folder,
  Mail,
  LinkedIn,
} from "@mui/icons-material";
import { useState } from "react";

export default function About() {
  const [navOpen, setNavOpen] = useState(false);
  // Navbar links for reuse
  const navLinks = (
    <>
      <Link href="/">
        <HomeFilled className="text-[var(--accent)] transition-transform ease-in-out duration-300 delay-200 hover:-translate-y-2" />
        <span className="ml-2 lg:hidden">Home</span>
      </Link>
      <Link href="/about">
        <Person className="text-[var(--accent)] transition-transform ease-in-out duration-300 delay-200 hover:-translate-y-2" />
        <span className="ml-2 lg:hidden">About</span>
      </Link>
      <Link href="/resume">
        <Description className="text-[var(--accent)] transition-transform ease-in-out duration-300 delay-200 hover:-translate-y-2" />
        <span className="ml-2 lg:hidden">Resume</span>
      </Link>
      <Link href="/skills">
        <Code className="text-[var(--accent)] transition-transform ease-in-out duration-300 delay-200 hover:-translate-y-2" />
        <span className="ml-2 lg:hidden">Skills</span>
      </Link>
      <Link href="/projects">
        <Folder className="text-[var(--accent)] transition-transform ease-in-out duration-300 delay-200 hover:-translate-y-2" />
        <span className="ml-2 lg:hidden">Projects</span>
      </Link>
      <Link href="/contact">
        <Mail className="text-[var(--accent)] transition-transform ease-in-out duration-300 delay-200 hover:-translate-y-2" />
        <span className="ml-2 lg:hidden">Contact</span>
      </Link>
    </>
  );
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-20 py-6 sm:py-8 md:py-10">
      {/* Top Navbar for mobile */}
      <nav className="lg:hidden flex items-center justify-end bg-white/10 rounded-full px-2 py-2 mb-2 shadow border border-[var(--accent)] sticky top-2 z-50 w-fit min-w-fit ml-auto">
        <button
          className="focus:outline-none"
          onClick={() => setNavOpen((open) => !open)}
          aria-label="Open navigation menu"
        >
          <svg
            className="w-7 h-7 text-[var(--accent)]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
      {/* Mobile nav drawer */}
      {navOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 z-50"
          onClick={() => setNavOpen(false)}
        >
          <div
            className="absolute top-0 left-0 w-3/4 max-w-xs h-full bg-white rounded-r-2xl shadow-lg flex flex-col p-6 gap-6 animate-slide-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="self-end mb-4"
              onClick={() => setNavOpen(false)}
              aria-label="Close navigation menu"
            >
              <svg
                className="w-7 h-7 text-[var(--accent)]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex flex-col gap-4 text-lg">{navLinks}</div>
          </div>
        </div>
      )}
      <div className="flex flex-col lg:flex-row min-h-screen bg-[var(--background)] text-black font-[var(--font-sans)] rounded-xl max-h-full lg:max-h-2/3">
        {/* Left Profile Card (hidden on mobile) */}
        <aside className="hidden lg:flex w-full max-w-xs bg-white/10 rounded-2xl m-2 sm:m-4 flex-col items-center p-6 sm:p-8 lg:p-10 shadow-lg">
          <Image
            src="/profile3.JPG"
            alt="Profile"
            width={250}
            height={250}
            className="rounded-xl object-cover mb-4 sm:mb-6 w-full max-w-[200px] sm:max-w-[250px]"
          />
          <h1 className="text-2xl sm:text-3xl font-bold mb-1">Mucyo Kevin</h1>
          <p className="text-base sm:text-lg font-medium mb-4">
            Full Stack Developer
          </p>
          <div className="flex flex-row gap-2 sm:gap-4">
            <div className="flex flex-row gap-2 sm:gap-4 mb-4">
              <a
                href="https://github.com/MucyoKevin"
                className="text-[var(--accent)] hover:scale-110 transition-transform"
              >
                <GitHub />
              </a>
              <a
                href="https://www.linkedin.com/in/mucyo-kevin-140503375"
                className="text-[var(--accent)] hover:scale-110 transition-transform"
              >
                <LinkedIn />
              </a>
            </div>
          </div>
          <div className="mb-2 text-xs sm:text-sm">mucyocyeve22@gmail.com</div>
          <div className="mb-4 text-base sm:text-lg font-bold">
            Kigali, Rwanda
          </div>
          <div className="text-xs mb-6">
            © 2023 Mucyo Kevin. All Right Reserved.
          </div>
          <Link href="/contact">
            <button className="w-full bg-[var(--accent)] text-white py-2 sm:py-3 rounded-lg flex items-center justify-center gap-2 font-semibold text-base sm:text-lg px-4 sm:px-6 hover:cursor-pointer">
              <Call /> Contact Me
            </button>
          </Link>
        </aside>
        {/* Main Content */}
        <main className="flex-1 flex flex-col justify-center items-start px-4 sm:px-8 md:px-12 lg:px-16 relative mt-6 lg:mt-0">
          <div className="mb-4 sm:mb-8">
            <span className="px-3 sm:px-4 py-1 rounded-full border border-[var(--accent)] text-[var(--accent)] font-medium text-xs sm:text-sm">
              About
            </span>
          </div>
          {/* <blockquote className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-8">
            "The greater the obstacle, the more{" "}
            <span className="text-[var(--accent)]">glory</span> in{" "}
            <span className="text-[var(--accent)]">overcoming</span> it."
            <span className="block text-base sm:text-lg font-normal mt-2 text-right">
              -Molière
            </span>
          </blockquote> */}
          <div className="text-base sm:text-lg max-w-full sm:max-w-2xl">
            <p className="mb-4">
              Versatile software developer with a background in
              Telecommunication and Information Engineering, and hands-on
              experience in both embedded and full stack development.
            </p>
            <p className="mb-4">
              Proficient in JavaScript (Node.js, Express.js, React, Next.js),
              Python (Django/Flask), C# (.NET), and SQL/NoSQL databases. Skilled
              in designing RESTful APIs, optimizing frontend performance, and
              deploying cloud-native solutions. Passionate about clean
              architecture, UX-driven development, and solving business problems
              through full stack innovation.
            </p>
          </div>
          {/* Navbar inside main, absolutely positioned at the bottom, centered, with smaller width (desktop only) */}
          <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 bottom-8 w-[500px] max-w-full bg-white/10 rounded-full px-8 py-3 gap-8 shadow-[0_8px_24px_rgba(0,0,0,0.2)] border border-[var(--accent)] z-50 justify-center items-center">
            {navLinks}
          </nav>
        </main>
      </div>
    </div>
  );
}
