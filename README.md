This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Environment

Copy `.env.example` to `.env.local` and fill it in. One variable is load-bearing:

| Variable | Why |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | The canonical origin. Canonical tags, `sitemap.xml`, `robots.txt` and every `og:image` URL are built from it. Unset, the site falls back to the Vercel deployment hostname, and locally to `http://localhost:3000`. |
| `GOOGLE_SITE_VERIFICATION` | Optional. Emits the Search Console verification meta tag when set. |
| `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL` | Contact form delivery. |

## SEO

Where things live:

- `src/lib/site.ts` — resolves the absolute origin. Everything URL-shaped goes through it.
- `src/lib/routes.ts` — the route registry: labels, sitemap dates, priorities. Adding a page here puts it in the sitemap. Bump a `lastModified` when you change that page.
- `src/lib/schema.ts` — JSON-LD. One `Person` and one `WebSite` node, referenced by `@id` from every page graph.
- `src/lib/og.tsx` — the shared 1200x630 social card. Each route has a four-line `opengraph-image.tsx` that calls it.
- `src/app/robots.ts`, `src/app/sitemap.ts`, `src/app/manifest.ts` — generated at build time.

Preview deployments set `VERCEL_ENV=preview`, which flips robots.txt to `Disallow: /` and the metadata to `noindex`, so previews never compete with production for the same queries.
