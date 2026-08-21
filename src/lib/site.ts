/**
 * Absolute origin for the current deployment. Everything that has to be a real
 * URL — canonicals, `sitemap.xml`, `robots.txt`, `og:url`, `og:image` — is
 * built from this.
 *
 * The order matters. An explicit `NEXT_PUBLIC_SITE_URL` always wins: that is
 * the domain you actually want indexed. Vercel's system variables are the
 * safety net so a deploy with no configuration still emits its own hostname
 * rather than `http://localhost:3000` — a canonical pointing at localhost tells
 * Google the real page lives somewhere it cannot reach, which drops the whole
 * site out of the index.
 */
const LOCAL_FALLBACK = "http://localhost:3000";

/** Vercel hands hostnames over without a scheme, and pasted values often carry a trailing slash. */
function normalize(value: string | undefined): string | undefined {
  const trimmed = value?.trim().replace(/\/+$/, "");
  if (!trimmed) return undefined;
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

export function getSiteUrl(): string {
  return (
    normalize(process.env.NEXT_PUBLIC_SITE_URL) ??
    // The project's stable production domain, on every Vercel deployment.
    normalize(process.env.VERCEL_PROJECT_PRODUCTION_URL) ??
    normalize(process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL) ??
    // Per-deployment hostname — what preview builds get.
    normalize(process.env.VERCEL_URL) ??
    normalize(process.env.NEXT_PUBLIC_VERCEL_URL) ??
    LOCAL_FALLBACK
  );
}

/** Join a site-relative path onto the origin. */
export function absoluteUrl(path = "/"): string {
  return new URL(path || "/", `${getSiteUrl()}/`).toString();
}

/**
 * Preview deployments serve the same content on a throwaway hostname. Letting
 * them be indexed splits ranking signals across duplicate copies, so only the
 * production deployment (and local dev, where it is moot) invites crawlers.
 */
export function isIndexable(): boolean {
  const env = process.env.VERCEL_ENV;
  return !env || env === "production";
}
