"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "./nav-config";

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
        className="lg:hidden flex items-center justify-end bg-white/10 rounded-full px-2 py-2 mb-2 shadow border border-[var(--accent)] sticky top-2 z-50 w-fit min-w-fit ml-auto"
      >
        <button
          type="button"
          className="rounded-lg p-1 text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="mobile-nav-panel"
          aria-label="Open navigation menu"
        >
          <Menu className="h-7 w-7" aria-hidden />
        </button>
      </nav>

      {open ? (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-black/60"
          onClick={close}
          aria-hidden
        >
          <div
            ref={panelRef}
            id="mobile-nav-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="absolute top-0 left-0 w-3/4 max-w-xs h-full bg-white rounded-r-2xl shadow-lg flex flex-col p-6 gap-6 animate-slide-in"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 id={titleId} className="sr-only">
              Navigation
            </h2>
            <button
              ref={closeBtnRef}
              type="button"
              className="self-end mb-4 rounded-lg p-1 text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              onClick={close}
              aria-label="Close navigation menu"
            >
              <X className="h-7 w-7" aria-hidden />
            </button>
            <div className="flex flex-col gap-4 text-lg">
              {navItems.map(({ href, label, Icon }) => {
                const active = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className="flex items-center gap-2 text-[var(--accent)] rounded-lg p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                    onClick={close}
                  >
                    <Icon className="h-6 w-6 shrink-0" aria-hidden />
                    <span>{label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
