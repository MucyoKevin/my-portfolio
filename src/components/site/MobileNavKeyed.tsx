"use client";

import { usePathname } from "next/navigation";
import { MobileNav } from "./MobileNav";

/** Remounts the mobile nav on route change so the drawer closes without a pathname effect. */
export function MobileNavKeyed() {
  const pathname = usePathname();
  return <MobileNav key={pathname} />;
}
