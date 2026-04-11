import Link from "next/link";
import { Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { ProfileImage } from "./ProfileImage";

export function Sidebar() {
  return (
    <aside className="hidden lg:flex w-full max-w-xs bg-white/10 rounded-2xl m-2 sm:m-4 flex-col items-center p-6 sm:p-8 lg:p-10 shadow-lg">
      <ProfileImage
        width={250}
        height={250}
        className="rounded-xl object-cover mb-4 sm:mb-6 w-full max-w-[200px] sm:max-w-[250px]"
        priority
      />
      <p className="text-2xl sm:text-3xl font-bold mb-1">Mucyo Kevin</p>
      <p className="text-base sm:text-lg font-medium mb-4">Full Stack Developer</p>

      <div className="flex flex-row gap-2 sm:gap-4 mb-4">
        <a
          href="https://github.com/MucyoKevin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--accent)] hover:scale-110 transition-transform rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          aria-label="GitHub profile"
        >
          <GithubIcon className="h-8 w-8" />
        </a>
        <a
          href="https://www.linkedin.com/in/mucyo-kevin-140503375"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--accent)] hover:scale-110 transition-transform rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          aria-label="LinkedIn profile"
        >
          <LinkedinIcon className="h-8 w-8" />
        </a>
      </div>

      <div className="mb-2 text-xs sm:text-sm">mucyocyeve22@gmail.com</div>
      <div className="mb-2 text-xs sm:text-sm">kevinmucyo1@outlook.com</div>
      <div className="mb-2 text-xs sm:text-sm">+250 798 380 103</div>
      <div className="mb-4 text-base sm:text-lg font-bold">Kigali, Rwanda</div>
      <div className="text-xs mb-6">© 2026 Mucyo Kevin. All rights reserved.</div>

      <Link
        href="/contact"
        className="w-full bg-[var(--accent)] text-white py-2 sm:py-3 rounded-lg flex items-center justify-center gap-2 font-semibold text-base sm:text-lg px-4 sm:px-6 hover:opacity-95 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
      >
        <Phone className="h-5 w-5 shrink-0" aria-hidden />
        Contact me
      </Link>
    </aside>
  );
}
