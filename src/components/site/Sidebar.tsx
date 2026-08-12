import Link from "next/link";
import { Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { ProfileImage } from "./ProfileImage";

export function Sidebar() {
  return (
    <aside className="hidden lg:flex lg:min-h-0 shrink-0 lg:w-[15rem] xl:w-[18rem] 2xl:w-xs bg-white/10 rounded-2xl m-2 lg:m-3 xl:m-4 flex-col items-center p-5 xl:p-8 shadow-lg overflow-y-auto overscroll-contain pane-scroll">
      <ProfileImage
        width={250}
        height={250}
        className="rounded-xl object-cover mb-4 w-full max-w-[130px] xl:max-w-[180px] [@media(min-height:900px)]:max-w-[230px]"
        priority
      />
      <p className="text-2xl xl:text-3xl font-bold mb-1 text-center">Mucyo Kevin</p>
      <p className="text-sm xl:text-lg font-medium mb-4 text-center">
        Full Stack Developer
      </p>

      <div className="flex flex-row gap-3 xl:gap-4 mb-4">
        <a
          href="https://github.com/MucyoKevin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--accent)] hover:text-[var(--accent-2)] hover:scale-110 transition-[color,transform] rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          aria-label="GitHub profile"
        >
          <GithubIcon className="h-7 w-7 xl:h-8 xl:w-8" />
        </a>
        <a
          href="https://www.linkedin.com/in/mucyo-kevin-140503375"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--accent)] hover:text-[var(--accent-2)] hover:scale-110 transition-[color,transform] rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          aria-label="LinkedIn profile"
        >
          <LinkedinIcon className="h-7 w-7 xl:h-8 xl:w-8" />
        </a>
      </div>

      <div className="mb-1.5 text-xs xl:text-sm break-all text-center">
        mucyocyeve22@gmail.com
      </div>
      <div className="mb-1.5 text-xs xl:text-sm break-all text-center">
        kevinmucyo1@outlook.com
      </div>
      <div className="mb-2 text-xs xl:text-sm">+250 798 380 103</div>
      <div className="mb-3 text-base xl:text-lg font-bold">Kigali, Rwanda</div>
      <div className="text-[10px] xl:text-xs text-black/60 text-center">
        © 2026 Mucyo Kevin. All rights reserved.
      </div>

      <Link
        href="/contact"
        className="mt-auto pt-5 w-full shrink-0 group"
        aria-label="Contact me"
      >
        <span className="w-full bg-[var(--accent)] text-white py-2 xl:py-3 rounded-lg flex items-center justify-center gap-2 font-semibold text-sm xl:text-lg px-4 xl:px-6 transition-colors group-hover:bg-[var(--accent-2)] group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-2 group-focus-visible:outline-[var(--accent-2)]">
          <Phone className="h-5 w-5 shrink-0" aria-hidden />
          Contact me
        </span>
      </Link>
    </aside>
  );
}
