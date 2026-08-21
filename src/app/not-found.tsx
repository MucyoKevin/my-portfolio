import type { Metadata } from "next";
import Link from "next/link";
import { navItems } from "@/components/site/nav-config";

export const metadata: Metadata = {
  title: "Page not found",
  description: "That page does not exist on this site.",
  // A 404 already carries the status code, but a stray link or an old share can
  // still get one crawled. Keep it out of the index and out of the sitemap.
  robots: { index: false, follow: true },
  // Without this it inherits the root layout's `canonical: "/"`, which tells a
  // crawler this 404 is really the home page.
  alternates: { canonical: null },
};

/**
 * Renders outside the `(site)` group, so it has no sidebar or dock. The links
 * below stand in for that navigation — a dead end with no way back leaks the
 * crawl and loses the visitor.
 */
export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center px-6 py-16 text-center">
      <span className="rounded-full border border-[var(--accent-2)] px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent-2-ink)]">
        404
      </span>

      <h1 className="mt-6 text-2xl font-bold sm:text-4xl">
        This page <span className="text-[var(--accent)]">does not exist</span>
      </h1>

      <p className="mt-4 max-w-md text-sm text-black/70 sm:text-base">
        The link may be out of date, or the address mistyped. Everything on the
        site is one of these:
      </p>

      <nav aria-label="Site pages" className="mt-8 w-full max-w-lg">
        <ul className="flex flex-wrap items-center justify-center gap-2">
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="inline-flex rounded-lg border border-[var(--accent)] px-4 py-2 text-sm font-semibold text-[var(--accent-ink)] transition-colors hover:bg-[var(--accent-soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
