import type { ReactNode } from "react";

/**
 * The scrolling content pane.
 *
 * This lives in `template.tsx` rather than `layout.tsx` on purpose: templates
 * remount on every navigation, so the pane starts at scrollTop 0 each time.
 * Next scrolls `window`, not inner elements, so a pane declared in the layout
 * would keep its scroll position and land you mid-page after navigating away
 * from a scrolled route. The remount also gives us the route enter animation
 * for free, with no client JS.
 */
export default function SiteTemplate({ children }: { children: ReactNode }) {
  return (
    <div className="flex-1 lg:min-h-0 lg:overflow-y-auto overscroll-contain pane-scroll lg:scroll-fade px-4 sm:px-8 lg:px-8 xl:px-12 2xl:px-16 pt-1 lg:pt-8 pb-10 lg:pb-28 print:overflow-visible motion-safe:animate-[fade-up_.45s_cubic-bezier(.22,1,.36,1)_both]">
      {children}
    </div>
  );
}
