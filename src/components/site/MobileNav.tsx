"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { isActive, navItems } from "./nav-config";

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
      }
    };
    document.addEventListener("keydown", onKey);

    const panel = panelRef.current;
    if (!panel) {
      return () => {
        document.body.style.overflow = prev;
        document.removeEventListener("keydown", onKey);
      };
    }

    const focusables = panel.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    const trap = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || focusables.length === 0) return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else if (document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };
    panel.addEventListener("keydown", trap);

    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
      panel.removeEventListener("keydown", trap);
    };
  }, [open]);

  return (
    <>
      <nav
        aria-label="Mobile menu"
        className="lg:hidden sticky top-2 z-40 ml-auto w-fit"
      >
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="mobile-nav-panel"
          aria-label="Open navigation menu"
          className="flex items-center gap-2 rounded-full border border-[var(--accent)]/60 bg-white/30 px-3.5 py-2 text-[var(--accent)] backdrop-blur-xl shadow-[0_10px_24px_-12px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.6)] transition-transform duration-200 active:scale-95 motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-2)]"
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.18em]">
            Menu
          </span>
          <Menu className="h-5 w-5" aria-hidden />
        </button>
      </nav>

      {open ? (
        <div className="lg:hidden fixed inset-0 z-50">
          {/* Sibling of the dialog, not its parent — aria-hidden is inherited,
              so wrapping the dialog in it would hide the whole menu from
              assistive tech. */}
          <div
            className="absolute inset-0 bg-[var(--background)]/90 backdrop-blur-md motion-safe:animate-[fade-in_.2s_ease-out_both]"
            onClick={close}
            aria-hidden
          />

          <div
            ref={panelRef}
            id="mobile-nav-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="absolute inset-0 flex flex-col px-6 pt-6 pb-8 motion-safe:animate-[fade-in_.2s_ease-out_both]"
          >
            <div className="flex shrink-0 items-center justify-between">
              <h2
                id={titleId}
                className="text-[11px] font-bold uppercase tracking-[0.24em] text-black/50"
              >
                Navigation
              </h2>
              <button
                ref={closeBtnRef}
                type="button"
                onClick={close}
                aria-label="Close navigation menu"
                className="rounded-full border border-[var(--accent)]/60 bg-white/40 p-2 text-[var(--accent)] backdrop-blur-xl transition-transform duration-200 active:scale-95 motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-2)]"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>

            <ul className="my-auto flex list-none flex-col gap-0.5 overflow-y-auto overscroll-contain p-0 py-4">
              {navItems.map(({ href, label, Icon }, i) => {
                const active = isActive(pathname, href);
                return (
                  <li
                    key={href}
                    style={{ animationDelay: `${60 + i * 40}ms` }}
                    className="motion-safe:animate-[fade-up_.45s_cubic-bezier(.22,1,.36,1)_both]"
                  >
                    <Link
                      href={href}
                      onClick={close}
                      aria-current={active ? "page" : undefined}
                      className="group flex items-center gap-4 rounded-2xl px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-2)]"
                    >
                      <span
                        className={`w-7 shrink-0 text-[11px] font-bold tabular-nums tracking-[0.18em] ${
                          active
                            ? "text-[var(--accent-2)]"
                            : "text-[var(--accent)]/70"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`text-2xl sm:text-3xl font-bold tracking-tight transition-colors duration-200 ${
                          active
                            ? "text-[var(--accent-2-ink)]"
                            : "text-black group-active:text-[var(--accent)]"
                        }`}
                      >
                        {label}
                      </span>
                      <Icon
                        className={`ml-auto h-5 w-5 shrink-0 transition-opacity duration-200 ${
                          active
                            ? "text-[var(--accent-2)] opacity-100"
                            : "opacity-25"
                        }`}
                        aria-hidden
                      />
                    </Link>
                    <span
                      aria-hidden
                      className={`ml-3 block h-px origin-left bg-[var(--accent-2)]/50 transition-transform duration-500 ease-out ${
                        active ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </li>
                );
              })}
            </ul>

            <div className="shrink-0 text-[11px] uppercase tracking-[0.18em] text-black/45">
              Kigali, Rwanda
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
