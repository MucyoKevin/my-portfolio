import type { ReactNode } from "react";
import { DesktopNav } from "@/components/site/DesktopNav";
import { MobileNavKeyed } from "@/components/site/MobileNavKeyed";
import { Sidebar } from "@/components/site/Sidebar";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col px-4 sm:px-8 md:px-12 lg:px-10 xl:px-16 2xl:px-20 py-6 sm:py-8 lg:py-8 xl:py-10 lg:h-dvh lg:overflow-hidden print:h-auto print:overflow-visible">
      <MobileNavKeyed />
      <div className="flex flex-col lg:flex-row lg:flex-1 lg:min-h-0 bg-[var(--background)] text-[var(--foreground)] rounded-xl lg:overflow-hidden">
        <Sidebar />
        <main className="relative flex flex-col flex-1 min-w-0 lg:min-h-0 mt-6 lg:mt-0">
          {children}
          <DesktopNav />
        </main>
      </div>
    </div>
  );
}
