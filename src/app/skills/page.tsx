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

const skills = [
  { name: "HTML", percent: 90, icon: "/html-5.svg" },
  { name: "CSS", percent: 80, icon: "/css-3.svg" },
  { name: "JAVA SCRIPT", percent: 80, icon: "/js.svg" },
  { name: "PYTHON", percent: 70, icon: "/python.svg" },
  { name: "REACT", percent: 90, icon: "/react.svg" },
  // { name: "GIT", percent: 69, icon: "/git.svg" },
  { name: "FIGMA", percent: 70, icon: "/figma.svg" },
  { name: "MS EXCEL", percent: 80, icon: "/ms-excel.svg" },
  { name: "C#", percent: 60, icon: "/csharp.svg" },
];

export default function Skills() {
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
          <div className="mb-2 text-sm">mucyocyeve22@gmail.com</div>
          <div className="mb-4 text-lg font-bold">Kigali, Rwanda</div>
          <div className="text-xs mb-6">© 2023 Mucyo Kevin. All Right Reserved.</div>
          <Link href="/contact">
            <button className="w-full bg-[var(--accent)] text-white py-3 rounded-lg flex items-center justify-center gap-2 font-semibold text-lg p-6 hover:cursor-pointer">
              <Call /> Contact Me
            </button>
          </Link>
        </aside>
        {/* Main Content */}
        <main className="flex-1 flex flex-col justify-center items-start px-16 relative">
          <div className="mb-8">
            <span className="px-4 py-1 rounded-full border border-[var(--accent)] text-[var(--accent)] font-medium text-sm">Skills</span>
          </div>
          <h2 className="text-4xl font-bold mb-12">
            My <span className="text-[var(--accent)]">Advantages</span>
          </h2>
          <div className="grid grid-cols-4 gap-8 mb-11">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center">
                <div className="w-28 h-28 rounded-full border-2 border-[var(--accent)] flex flex-col items-center justify-center mb-4">
                  <Image src={skill.icon} alt={skill.name} width={48} height={48} />
                  <div className="text-2xl font-bold text-[var(--accent)]">{skill.percent}%</div>
                </div>
                <div className="text-lg font-semibold">{skill.name}</div>
              </div>
            ))}
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