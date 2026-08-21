import type { MetadataRoute } from "next";
import { absoluteUrl, getSiteUrl, isIndexable } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // A preview deployment serves the same pages on a throwaway hostname. Left
  // open, it competes with production for the same queries.
  if (!isIndexable()) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Deliberately nothing else. Blocking `/_next/` would stop Googlebot
        // fetching the JS and CSS it renders the page with, which costs far
        // more than the crawl budget it saves. RSC payload URLs are never
        // linked in the HTML, so there is nothing there to find either.
        disallow: [],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: getSiteUrl(),
  };
}
