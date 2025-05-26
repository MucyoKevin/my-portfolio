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

export default function About() {
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
          <div className="mb-8">
            <span className="px-4 py-1 rounded-full border border-[var(--accent)] text-[var(--accent)] font-medium text-sm">
              About
            </span>
          </div>
          <blockquote className="text-4xl font-bold mb-8">
            "The greater the obstacle, the more{" "}
            <span className="text-[var(--accent)]">glory</span> in{" "}
            <span className="text-[var(--accent)]">overcoming</span> it."
            <span className="block text-lg font-normal mt-2 text-right">
              -Molière
            </span>
          </blockquote>
          <div className="text-lg max-w-2xl">
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
