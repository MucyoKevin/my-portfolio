import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/motion/Reveal";
import { ProductFeatureCard } from "@/components/products/ProductCard";
import { ProductGrid } from "@/components/products/ProductGrid";
import { currentProducts, shippedProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Live platforms I build and lead: StroomUp, GC Builds, Ijambo and Agaseke Store — social, construction ERP, language gaming and multi-vendor commerce.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Products | Mucyo Kevin",
    description:
      "Commercial platforms in production — StroomUp, GC Builds, Ijambo and Agaseke Store.",
    url: "/products",
  },
};

function SectionHeading({
  label,
  count,
}: {
  label: string;
  count: number;
}) {
  return (
    <div className="mb-4 flex w-full items-center gap-4">
      <h2 className="shrink-0 text-[11px] font-bold uppercase tracking-[0.2em] text-black/55">
        {label}
      </h2>
      <span className="h-px flex-1 bg-[var(--accent)]/40" aria-hidden />
      <span className="shrink-0 text-[11px] font-bold tabular-nums text-black/45">
        {String(count).padStart(2, "0")}
      </span>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <PageShell>
      <div className="mb-4 sm:mb-6">
        <span className="rounded-full border border-[var(--accent-2)] px-3 py-1 text-xs font-medium text-[var(--accent-2-ink)] sm:px-4 sm:text-sm">
          Products
        </span>
      </div>
      <h1 className="mb-3 text-2xl font-bold sm:text-5xl">
        Products I&rsquo;ve{" "}
        <span className="text-[var(--accent)]">built</span> &amp; I&rsquo;m{" "}
        <span className="text-[var(--accent-2)]">building</span>
      </h1>
      <p className="mb-8 max-w-2xl text-sm text-black/70 sm:mb-12 sm:text-base">
        Commercial platforms in production — not side projects. Each one is live
        today; follow any card through to its landing page.
      </p>

      {currentProducts.length > 0 ? (
        <section className="mb-10 w-full sm:mb-14">
          <SectionHeading
            label="Currently building"
            count={currentProducts.length}
          />
          <div className="flex w-full flex-col gap-5 sm:gap-6">
            {currentProducts.map((product) => (
              <Reveal key={product.slug}>
                <ProductFeatureCard product={product} />
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}

      {shippedProducts.length > 0 ? (
        <section className="w-full">
          <SectionHeading
            label="Shipped & live"
            count={shippedProducts.length}
          />
          <ProductGrid products={shippedProducts} />
        </section>
      ) : null}
    </PageShell>
  );
}
