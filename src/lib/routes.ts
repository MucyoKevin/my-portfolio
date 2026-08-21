import type { MetadataRoute } from "next";

type ChangeFrequency = NonNullable<
  MetadataRoute.Sitemap[number]["changeFrequency"]
>;

export type SiteRoute = {
  path: string;
  /** Breadcrumb crumb and social-card eyebrow. Matches the nav label. */
  label: string;
  /** One line describing the page, reused by the generated OG card. */
  blurb: string;
  /**
   * The day this page's content last actually changed. Bump it when you edit
   * the page. It is deliberately a literal rather than `new Date()`: a
   * `lastmod` that moves on every build is noise, and crawlers learn to ignore
   * a sitemap that claims everything changed a moment ago.
   */
  lastModified: string;
  priority: number;
  changeFrequency: ChangeFrequency;
  /** Representative image for sitemap image entries, site-relative. */
  image?: string;
};

export const siteRoutes: SiteRoute[] = [
  {
    path: "/",
    label: "Home",
    blurb: "Full stack developer in Kigali, Rwanda",
    lastModified: "2026-08-21",
    priority: 1,
    changeFrequency: "monthly",
    image: "/profile3.JPG",
  },
  {
    path: "/about",
    label: "About",
    blurb: "Telecommunication engineering into full stack product work",
    lastModified: "2026-08-21",
    priority: 0.8,
    changeFrequency: "yearly",
  },
  {
    path: "/resume",
    label: "Resume",
    blurb: "Education and professional certificates",
    lastModified: "2026-08-21",
    priority: 0.7,
    changeFrequency: "yearly",
  },
  {
    path: "/experience",
    label: "Experience",
    blurb: "CTO roles, data analysis and IT operations",
    lastModified: "2026-08-21",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/skills",
    label: "Skills",
    blurb: "JavaScript, Python, Django, React, Vue, Git",
    lastModified: "2026-08-21",
    priority: 0.6,
    changeFrequency: "yearly",
  },
  {
    path: "/projects",
    label: "Projects",
    blurb: "Personal and learning work, with code and write-ups",
    lastModified: "2026-08-21",
    priority: 0.8,
    changeFrequency: "monthly",
    image: "/file_converter.PNG",
  },
  {
    path: "/products",
    label: "Products",
    blurb: "Commercial platforms in production, not side projects",
    lastModified: "2026-08-21",
    priority: 0.9,
    changeFrequency: "monthly",
    image: "/products/gc-builds.svg",
  },
  {
    path: "/contact",
    label: "Contact",
    blurb: "Freelance, full-time and collaboration enquiries",
    lastModified: "2026-08-21",
    priority: 0.7,
    changeFrequency: "yearly",
  },
];

export function findRoute(path: string): SiteRoute | undefined {
  return siteRoutes.find((route) => route.path === path);
}
