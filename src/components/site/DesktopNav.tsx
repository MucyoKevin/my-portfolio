"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { isActive, navItems } from "./nav-config";

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <div className="hidden lg:block absolute bottom-5 left-1/2 -translate-x-1/2 z-20 max-w-[calc(100%-2rem)] print:hidden">
      <div className="rounded-full p-px bg-gradient-to-b from-white/70 via-white/25 to-[var(--accent)]/50 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.55)]">
        <nav
          aria-label="Primary"
          className="flex items-center gap-1 rounded-full bg-white/25 backdrop-blur-xl px-2 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]"
        >
          {navItems.map(({ href, label, Icon }) => {
            const active = isActive(pathname, href);

            return (
              <Link
                key={href}
                href={href}
                aria-label={label}
                aria-current={active ? "page" : undefined}
                data-active={active || undefined}
                className="group relative flex items-center rounded-full px-2.5 py-2 text-[var(--accent)] outline-none transition-colors duration-300 ease-out hover:bg-[var(--accent)]/15 focus-visible:ring-2 focus-visible:ring-[var(--accent-2)] focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--background)] data-[active]:text-white data-[active]:hover:bg-transparent"
              >
                {active ? (
                  <motion.span
                    layoutId="dock-pill"
                    aria-hidden
                    className="absolute inset-0 -z-0 rounded-full bg-[var(--accent-2)] shadow-[0_6px_16px_-6px_rgba(180,70,42,0.95)]"
                    transition={{
                      type: "spring",
                      stiffness: 420,
                      damping: 34,
                      mass: 0.7,
                    }}
                  />
                ) : null}

                <Icon
                  className="relative z-10 h-5 w-5 shrink-0 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0"
                  aria-hidden
                />

                {/* Animating grid-template-columns eases to the label's exact
                    intrinsic width. The active item skips the transition so
                    the layout pill measures its final size on mount. */}
                <span
                  className={
                    active
                      ? "relative z-10 grid grid-cols-[0fr] xl:grid-cols-[1fr]"
                      : "relative z-10 grid grid-cols-[0fr] transition-[grid-template-columns] duration-300 ease-[cubic-bezier(.22,1,.36,1)] xl:group-hover:grid-cols-[1fr] xl:group-focus-visible:grid-cols-[1fr] motion-reduce:transition-none"
                  }
                >
                  {/* The clipping span carries no padding of its own — with
                      border-box sizing, padding would keep it 6px wide even at
                      0fr and quietly widen the collapsed dock by ~48px. */}
                  <span className="min-w-0 overflow-hidden">
                    <span className="block whitespace-nowrap pl-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] leading-5">
                      {label}
                    </span>
                  </span>
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
