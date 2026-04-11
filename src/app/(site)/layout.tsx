import type { ReactNode } from "react";
import { DesktopNav } from "@/components/site/DesktopNav";
import { MobileNavKeyed } from "@/components/site/MobileNavKeyed";
import { Sidebar } from "@/components/site/Sidebar";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-20 py-6 sm:py-8 md:py-10">
      <MobileNavKeyed />
      <div className="flex flex-col lg:flex-row min-h-screen bg-[var(--background)] text-black font-[var(--font-sans)] rounded-xl max-h-full lg:max-h-2/3">
        <Sidebar />
        <div className="flex-1 flex flex-col justify-center items-start px-4 sm:px-8 md:px-12 lg:px-16 relative mt-6 lg:mt-0 min-w-0 w-full pb-28 lg:pb-32">
          {children}
          <DesktopNav />
        </div>
      </div>
    </div>
  );
}
