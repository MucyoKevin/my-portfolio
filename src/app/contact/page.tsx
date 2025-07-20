"use client";
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
} from "@mui/icons-material";
import { useState } from "react";

export default function Contact() {
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
          <svg className="w-7 h-7 text-[var(--accent)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
      {/* Mobile nav drawer */}
      {navOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/60 z-50" onClick={() => setNavOpen(false)}>
          <div className="absolute top-0 left-0 w-3/4 max-w-xs h-full bg-white rounded-r-2xl shadow-lg flex flex-col p-6 gap-6 animate-slide-in" onClick={e => e.stopPropagation()}>
            <button className="self-end mb-4" onClick={() => setNavOpen(false)} aria-label="Close navigation menu">
              <svg className="w-7 h-7 text-[var(--accent)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
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
          <p className="text-base sm:text-lg font-medium mb-4">Full Stack Developer</p>
          <div className="flex flex-row gap-2 sm:gap-4">
            <div className="flex flex-row gap-2 sm:gap-4 mb-4">
              <a href="https://github.com/MucyoKevin" className="text-[var(--accent)]">
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
          <div className="mb-2 text-xs sm:text-sm">mucyocyeve22@gmail.com</div>
          <div className="mb-4 text-base sm:text-lg font-bold">Kigali, Rwanda</div>
          <div className="text-xs mb-6">© 2023 Mucyo Kevin. All Right Reserved.</div>
          <Link href="/contact">
            <button className="w-full bg-[var(--accent)] text-white py-2 sm:py-3 rounded-lg flex items-center justify-center gap-2 font-semibold text-base sm:text-lg px-4 sm:px-6 hover:cursor-pointer">
              <Call /> Contact Me
            </button>
          </Link>
        </aside>
        {/* Main Content */}
        <main className="flex-1 flex flex-col justify-center items-start px-4 sm:px-8 md:px-12 lg:px-16 relative mt-6 lg:mt-0">
          <div className="mb-4 sm:mb-8">
            <span className="px-3 sm:px-4 py-1 rounded-full border border-[var(--accent)] text-[var(--accent)] font-medium text-xs sm:text-sm">Contact</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-12">
            Let us Work <span className="text-[var(--accent)]">Together</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-between w-full mb-4 sm:mb-8 gap-2 sm:gap-0">
            <div className="text-base sm:text-lg">mucyocyeve22@gmail.com</div>
            <div className="text-base sm:text-lg">+250 798 380 103</div>
          </div>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 w-full max-w-full sm:max-w-4xl" action="mailto:mucyocyeve22@gmail.com" method="POST" encType="text/plain">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Full Name<span className="text-[var(--accent)]">*</span></label>
              <input className="p-3 rounded bg-white/20 border border-[var(--accent)]" placeholder="Enter Your Name Here" name="Full Name" required autoComplete="name" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email<span className="text-[var(--accent)]">*</span></label>
              <input className="p-3 rounded bg-white/20 border border-[var(--accent)]" placeholder="Enter Your Mail Here" name="Email" required type="email" autoComplete="email" />
            </div>
            <div className="flex flex-col gap-2 sm:col-span-2">
              <label className="font-semibold">Message</label>
              <textarea className="p-3 rounded bg-white/20 border border-[var(--accent)]" placeholder="Write a message here..." rows={2} name="Message" />
            </div>
            <div className="col-span-1 sm:col-span-2 flex justify-center mb-5 ">
              <button type="submit" className="bg-[var(--accent)] text-white px-8 py-3 rounded-lg font-bold text-base sm:text-lg cursor-pointer hover:translate-x-1 transition-transform ease-in-out duration-300 delay-200">SEND</button>
            </div>
          </form>
          {/* Navbar inside main, absolutely positioned at the bottom, centered, with smaller width (desktop only) */}
          <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 bottom-8 w-[500px] max-w-full bg-white/10 rounded-full px-8 py-3 gap-8 shadow-[0_8px_24px_rgba(0,0,0,0.2)] border border-[var(--accent)] z-50 justify-center items-center">
            {navLinks}
          </nav>
        </main>
      </div>
    </div>
  );
} 