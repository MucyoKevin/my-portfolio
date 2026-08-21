import type { MetadataRoute } from "next";
import { siteRoutes } from "@/lib/routes";
import { absoluteUrl } from "@/lib/site";

/**
 * Dates, priorities and image references come from `src/lib/routes.ts` so the
 * sitemap, the breadcrumbs and the social cards all describe the same set of
 * pages. Add a route there and it appears here automatically.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return siteRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: new Date(route.lastModified),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    ...(route.image ? { images: [absoluteUrl(route.image)] } : {}),
  }));
}
