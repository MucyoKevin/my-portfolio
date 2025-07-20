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

import { FaGithub } from "react-icons/fa";
import { GrArticle } from "react-icons/gr";
import { IoMdGlobe } from "react-icons/io";


const projects = [
  {
    title: "Personal Finance Tracker",
    image: "/PersonalFinanceTracker.JPG",
    description: "A web application for managing personal finances, built with ASP.NET Core and Entity Framework Core.",
    tags: ["ASP.NET Core", "C#"],
    github: "https://github.com/MucyoKevin/personal-finance-tracker",
    // article: "https://medium.com/your-article1"
  },
  {
    title: "Automated Weather Data Pipeline",
    image: "/datapipeline.webp",
    description: "This project implements a complete ETL pipeline for weather data.",
    tags: ["Python", "Supabase"],
    github: "https://github.com/MucyoKevin/weather-data-ETL-pipeline",
    article: "https://medium.com/@mucyocyeve22/building-an-automated-weather-data-pipeline-from-api-to-interactive-visualizations-989f13de851c"
  },
  {
    title: "Analysing and Predicting CO2 Emissions in Rwanda",
    image: "/CO2emissionvisualisation.webp",
    description: "This project analyzes RwandaCO2Emissions dataset from kaggle using Python, providing interactive visualizations and statistical analysis of CO2 emissions across Rwanda.",
    tags: ["Python", "Colab Notebook"],
    github: "https://github.com/MucyoKevin/CO2-emission-project",
    article: "https://medium.com/@mucyocyeve22/analysing-and-predicting-co2-emissions-in-rwanda-a-data-driven-approach-74138200dfed"
  },
  {
    title: "A Comparative Study of ARIMA, SARIMA, and LSTM Models",
    image: "/comparisontable.webp",
    description: "This project demonstrated that SARIMA outperforms ARIMA and LSTM for forecasting Romania's energy consumption.",
    tags: ["Python", "Colab Notebook"],
    github: "https://github.com/MucyoKevin/energy-prediction-system",
    article: "https://medium.com/@mucyocyeve22/forecasting-energy-consumption-a-comparative-study-of-arima-sarima-and-lstm-models-9b77e934014d"
  },
  {
    title: "Analysing Car Sales Data",
    image: "/carsales.webp",
    description: " This project explores key insights, data cleaning techniques, and visualization strategies that can help businesses analyze sales performance and identify trends.",
    tags: ["MS Excel", "Power BI"],
    github: "https://github.com/MucyoKevin/sales-performance-analysis",
    article: "https://medium.com/@mucyocyeve22/analysing-car-sales-data-insights-from-a-power-bi-dashboard-12a50c2f852b"
  },
  {
    title: "Ragdoll logistics",
    image: "/ragdoll.PNG",
    description: "a professional truck dispatch company that deals with all kind of trucking and provide the best freight rates to truckers.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/MucyoKevin/ragdoll",
    website: "https://ragdoll-gamma.vercel.app/"
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [navOpen, setNavOpen] = useState(false);
  const total = projects.length;
  const goLeft = () => setIndex((prev) => (prev - 1 + total) % total);
  const goRight = () => setIndex((prev) => (prev + 1) % total);
  const project = projects[index];

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
            src="/profile3.jpg"
            alt="Profile"
            width={250}
            height={250}
            className="rounded-xl object-cover mb-4 sm:mb-6 w-full max-w-[200px] sm:max-w-[250px]"
          />
          <h1 className="text-2xl sm:text-3xl font-bold mb-1">Mucyo Kevin</h1>
          <p className="text-base sm:text-lg font-medium mb-4">Full Stack Developer</p>
          <div className="flex flex-row gap-2 sm:gap-4">
            <div className="flex flex-row gap-2 sm:gap-4 mb-4">
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
            <span className="px-3 sm:px-4 py-1 rounded-full border border-[var(--accent)] text-[var(--accent)] font-medium text-xs sm:text-sm">
              Projects
            </span>
          </div>
          <h2 className="text-2xl sm:text-5xl font-bold mb-4 sm:mb-5">
            Featured <span className="text-[var(--accent)]">Projects</span>
          </h2>
          {/* Carousel */}
          <div className="flex flex-col md:flex-row items-center justify-center w-full mb-8 sm:mb-12 pb-8 sm:pb-12 gap-4">
            <button onClick={goLeft} className="p-2 rounded-full hover:bg-[var(--accent)]/20 transition-colors cursor-pointer">
              <ArrowBackIosNew className="text-[var(--accent)]" />
            </button>
            <div className="mx-0 sm:mx-8 bg-white/10 rounded-2xl overflow-hidden shadow-lg w-full max-w-xs sm:w-[400px] flex flex-col items-center p-4 sm:p-6">
              <Image
                src={project.image}
                alt={project.title}
                width={350}
                height={180}
                className="object-cover w-full h-32 sm:h-44 rounded-xl mb-4"
              />
              <div className="text-lg sm:text-2xl font-bold mb-2 text-center">{project.title}</div>
              <div className="text-sm sm:text-base text-center mb-4 text-black/80">{project.description}</div>
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
              {/* Icons row */}
              <div className="flex gap-4 justify-center mt-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-[var(--accent)] transition-colors text-2xl"
                    title="View on GitHub"
                  >
                    <FaGithub />
                  </a>
                )}
                {project.article && (
                  <a
                    href={project.article}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-[var(--accent)] transition-colors text-2xl"
                    title="Read Article"
                  >
                    <GrArticle />
                  </a>
                )}
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-[var(--accent)] transition-colors text-2xl"
                    title="View Website"
                  >
                    <IoMdGlobe />
                  </a>
                )}
              </div>
            </div>
            <button onClick={goRight} className="p-2 rounded-full hover:bg-[var(--accent)]/20 transition-colors cursor-pointer">
              <ArrowForwardIos className="text-[var(--accent)]" />
            </button>
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
