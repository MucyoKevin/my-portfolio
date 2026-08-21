import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { MobileProfileCard } from "@/components/site/MobileProfileCard";
import { PageShell } from "@/components/site/PageShell";
import { StaggerOnMount, StaggerItem } from "@/components/motion/Stagger";
import { pageGraph } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "Mucyo Kevin | Full Stack Developer in Kigali, Rwanda" },
  description:
    "Mucyo Kevin — full stack developer in Kigali, Rwanda. JavaScript, Python, C#, REST APIs, cloud-native delivery, and clean architecture.",
  alternates: { canonical: "/" },
  openGraph: {
    // The home page is the person, so it gets the richer Open Graph type;
    // every other page stays a plain website.
    type: "profile",
    firstName: "Kevin",
    lastName: "Mucyo",
    username: "MucyoKevin",
    title: "Mucyo Kevin | Full Stack Developer",
    description:
      "Portfolio of Mucyo Kevin — full stack developer building elegant, simple software.",
    url: "/",
  },
};

export default function HomePage() {
  return (
    <PageShell center>
      <JsonLd
        data={pageGraph({
          path: "/",
          label: "Home",
          type: "ProfilePage",
          name: "Mucyo Kevin — Full Stack Developer",
          description:
            "Portfolio of Mucyo Kevin, a full stack developer in Kigali, Rwanda.",
        })}
      />
      <MobileProfileCard />

      <StaggerOnMount className="flex w-full flex-col items-center">
        <StaggerItem>
          <span className="rounded-full border border-[var(--accent)] px-3 py-1 text-xs font-medium text-[var(--accent)] sm:px-4 sm:text-sm">
            Introduction
          </span>
        </StaggerItem>

        <StaggerItem className="mt-4 sm:mt-6">
          <h1 className="max-w-3xl text-2xl font-bold sm:text-4xl xl:text-5xl">
            Hello there, I am{" "}
            <span className="text-[var(--accent)]">Kevin</span>,{" "}
            <br className="hidden sm:block" />
            full stack developer
          </h1>
        </StaggerItem>

        <StaggerItem className="mt-3 sm:mt-5">
          <p className="max-w-xl text-sm text-black/80 sm:text-lg">
            I code beautifully elegant simple things and I love what I do.
            <br />
            Just keeping things simple like that!
          </p>
        </StaggerItem>

        <StaggerItem className="mt-6 sm:mt-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 rounded-lg bg-[var(--accent-2)] px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_24px_-12px_rgba(180,70,42,0.9)] transition-colors hover:bg-[var(--accent-2-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-2)] sm:text-base"
            >
              View products
              <ArrowRight
                className="h-4 w-4 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                aria-hidden
              />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--accent)] px-5 py-2.5 text-sm font-bold text-[var(--accent-ink)] transition-colors hover:bg-[var(--accent-soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] sm:text-base"
            >
              <Mail className="h-4 w-4 shrink-0" aria-hidden />
              Get in touch
            </Link>
          </div>
        </StaggerItem>
      </StaggerOnMount>
    </PageShell>
  );
}
