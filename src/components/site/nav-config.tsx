import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Code,
  FileText,
  Folder,
  Home,
  Mail,
  Package,
  User,
} from "lucide-react";

export type NavItem = {
  href: string;
  label: string;
  Icon: LucideIcon;
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home", Icon: Home },
  { href: "/about", label: "About", Icon: User },
  { href: "/resume", label: "Resume", Icon: FileText },
  { href: "/experience", label: "Experience", Icon: Briefcase },
  { href: "/skills", label: "Skills", Icon: Code },
  { href: "/projects", label: "Projects", Icon: Folder },
  { href: "/products", label: "Products", Icon: Package },
  { href: "/contact", label: "Contact", Icon: Mail },
];

/** Home only matches exactly; every other route matches its subtree. */
export function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}
