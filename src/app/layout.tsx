import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { getSiteUrl, isIndexable } from "@/lib/site";
import "./globals.css";

const siteUrl = getSiteUrl();
const indexable = isIndexable();

export const metadata: Metadata = {
  // Every relative URL below — canonicals, og:url, og:image — is resolved
  // against this. Without it Next emits relative values that crawlers and
  // social scrapers cannot follow.
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mucyo Kevin | Full Stack Developer",
    template: "%s | Mucyo Kevin",
  },
  description:
    "Mucyo Kevin is a full stack developer in Kigali, Rwanda — JavaScript, Python, C#, REST APIs and cloud-native delivery. CTO at GC Technologies and StroomUp.",
  applicationName: "Mucyo Kevin",
  authors: [{ name: "Mucyo Kevin", url: siteUrl }],
  creator: "Mucyo Kevin",
  publisher: "Mucyo Kevin",
  category: "technology",
  keywords: [
    "Mucyo Kevin",
    "full stack developer",
    "software developer Kigali",
    "developer Rwanda",
    "React developer",
    "Next.js developer",
    "Django developer",
    "Python developer",
    "REST API developer",
    "CTO Rwanda",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Mucyo Kevin",
    title: "Mucyo Kevin | Full Stack Developer",
    description:
      "Portfolio — full stack development, APIs, and data-driven products, from Kigali, Rwanda.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mucyo Kevin | Full Stack Developer",
    description:
      "Portfolio — full stack development, APIs, and data-driven products, from Kigali, Rwanda.",
  },
  // Declaring `icons` here suppresses Next's file-convention detection, so
  // `apple-icon.tsx` has to be listed too or iOS gets no touch icon at all.
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.svg", type: "image/svg+xml", sizes: "any" },
    ],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: indexable,
    follow: indexable,
    googleBot: {
      index: indexable,
      follow: indexable,
      // Default snippet and thumbnail limits are conservative; lifting them is
      // what lets a result carry a full-width social card and a long snippet.
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Set GOOGLE_SITE_VERIFICATION once Search Console hands you a token.
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // The palette is light-only. Declaring it stops mobile browsers from
  // auto-darkening the page into an unreadable low-contrast version.
  colorScheme: "light",
  themeColor: "#c8c8c8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Motion renders its `initial` state as inline opacity:0 during SSR.
            Without JS those elements would never animate in, so the page would
            render blank. Reveal everything if scripting is unavailable. */}
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="font-sans antialiased">
        <MotionProvider>{children}</MotionProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
