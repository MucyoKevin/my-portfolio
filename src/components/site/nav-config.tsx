import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Code,
  FileText,
  Folder,
  Home,
  Mail,
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
  { href: "/contact", label: "Contact", Icon: Mail },
];
