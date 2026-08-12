import type { Metadata } from "next";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const siteUrl = getSiteUrl();

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mucyo Kevin",
  jobTitle: "Full Stack Developer",
  url: siteUrl,
  email: "mailto:mucyocyeve22@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kigali",
    addressCountry: "RW",
  },
  sameAs: [
    "https://github.com/MucyoKevin",
    "https://www.linkedin.com/in/mucyo-kevin-140503375",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mucyo Kevin | Full Stack Developer",
    template: "%s | Mucyo Kevin",
  },
  description:
    "Full stack developer in Kigali — JavaScript, Python, APIs, and cloud-native delivery.",
  keywords: [
    "Mucyo Kevin",
    "full stack developer",
    "Kigali",
    "React",
    "Next.js",
    "Python",
    "Django",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en",
    siteName: "Mucyo Kevin",
    title: "Mucyo Kevin | Full Stack Developer",
    description:
      "Portfolio — full stack development, APIs, and data-driven products.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Mucyo Kevin | Full Stack Developer",
    description:
      "Portfolio — full stack development, APIs, and data-driven products.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
