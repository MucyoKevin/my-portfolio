import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch about freelance, full-time roles, or collaboration in Kigali and remote.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Mucyo Kevin",
    description: "Email and phone — send a message through the form.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <div className="mb-4 sm:mb-8">
        <span className="px-3 sm:px-4 py-1 rounded-full border border-[var(--accent)] text-[var(--accent)] font-medium text-xs sm:text-sm">
          Contact
        </span>
      </div>
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-8">
        Let us work <span className="text-[var(--accent)]">together</span>
      </h1>
      <div className="flex flex-col sm:flex-row items-center justify-between w-full mb-2 sm:mb-8 gap-2 sm:gap-0">
        <a
          className="text-base sm:text-lg text-black underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] rounded-sm"
          href="mailto:mucyocyeve22@gmail.com"
        >
          mucyocyeve22@gmail.com
        </a>
        <a
          className="text-base sm:text-lg text-black underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] rounded-sm"
          href="tel:+250798380103"
        >
          +250 798 380 103
        </a>
      </div>
      <ContactForm />
    </>
  );
}
