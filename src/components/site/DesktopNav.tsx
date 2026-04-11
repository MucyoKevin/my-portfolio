"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "./nav-config";

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className="hidden lg:flex absolute left-1/2 -translate-x-1/2 bottom-8 w-[500px] max-w-full bg-white/10 rounded-full px-8 py-3 gap-8 shadow-[0_8px_24px_rgba(0,0,0,0.2)] border border-[var(--accent)] z-50 justify-center items-center"
    >
      {navItems.map(({ href, label, Icon }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            aria-current={active ? "page" : undefined}
            className="flex flex-col items-center gap-1 rounded-lg p-1 text-[var(--accent)] transition-transform ease-in-out duration-300 hover:-translate-y-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            aria-label={label}
            title={label}
          >
            <Icon className="h-7 w-7 shrink-0" aria-hidden />
            <span className="sr-only">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
