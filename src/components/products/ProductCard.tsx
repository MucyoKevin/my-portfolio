import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/products";

function StatusChip({ product }: { product: Product }) {
  if (product.current) {
    return (
      <span className="inline-flex self-start items-center gap-2 rounded-full border border-[var(--accent-2)] bg-[var(--accent-2-soft)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--accent-2-ink)]">
        <span
          aria-hidden
          className="h-2 w-2 rounded-full bg-[var(--accent-2)] motion-safe:animate-[pulse-dot_1.8s_ease-in-out_infinite]"
        />
        Building now
      </span>
    );
  }
  return (
    <span className="inline-flex self-start items-center gap-2 rounded-full border border-[var(--accent)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--accent-ink)]">
      <span aria-hidden className="h-2 w-2 rounded-full bg-[var(--accent)]" />
      {product.status}
    </span>
  );
}

function Cover({ product, tall }: { product: Product; tall?: boolean }) {
  return (
    <div
      className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-xl ${
        tall ? "h-40 w-full md:h-full md:min-h-[15rem]" : "h-36 w-full sm:h-40"
      }`}
      style={{
        backgroundImage: `linear-gradient(135deg, ${product.brand.from} 0%, ${product.brand.to} 100%)`,
      }}
    >
      {/* faint grid so the panel reads as a surface rather than a flat swatch */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <Image
        src={product.logo}
        alt={product.logoAlt}
        width={320}
        height={120}
        className="relative z-10 h-auto max-h-[42%] w-auto max-w-[62%] object-contain drop-shadow-[0_4px_14px_rgba(0,0,0,0.28)] transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
    </div>
  );
}

function Meta({ product }: { product: Product }) {
  return (
    <p className="text-xs sm:text-sm text-black/60">
      {product.role}
      {product.org ? ` · ${product.org.name}` : ""}
      {product.period ? ` · ${product.period}` : ""}
    </p>
  );
}

function Tags({ product }: { product: Product }) {
  return (
    <div className="flex flex-wrap gap-2">
      {product.stack.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-[var(--accent)] bg-white px-3 py-1 text-xs font-semibold text-black"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function VisitLink({ product }: { product: Product }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--accent-2-ink)] transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0">
      {new URL(product.url).host.replace(/^www\./, "")}
      <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
    </span>
  );
}

const shell =
  "group flex h-full flex-col rounded-2xl border border-transparent bg-white/10 p-4 sm:p-6 text-left shadow-lg transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-[var(--accent-2)] hover:shadow-[0_18px_40px_-20px_rgba(180,70,42,0.75)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-2)] motion-reduce:transition-none motion-reduce:hover:translate-y-0";

/** Full-width card used for the product being actively built. */
export function ProductFeatureCard({ product }: { product: Product }) {
  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      className={shell}
      aria-label={`${product.name} — open ${product.url} in a new tab`}
    >
      <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] md:gap-7">
        <Cover product={product} tall />
        <div className="flex flex-col gap-3">
          <StatusChip product={product} />
          <h3 className="text-2xl sm:text-3xl font-bold">{product.name}</h3>
          <Meta product={product} />
          <p className="text-base sm:text-lg font-semibold text-[var(--accent-ink)]">
            &ldquo;{product.tagline}&rdquo;
          </p>
          <p className="text-sm sm:text-base text-black/80">
            {product.description}
          </p>
          <ul className="ml-4 list-disc space-y-1 text-sm text-black/75 marker:text-[var(--accent-2)]">
            {product.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-2">
            <Tags product={product} />
            <VisitLink product={product} />
          </div>
        </div>
      </div>
    </a>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      className={shell}
      aria-label={`${product.name} — open ${product.url} in a new tab`}
    >
      <Cover product={product} />
      <div className="flex flex-1 flex-col gap-2.5 pt-4">
        <StatusChip product={product} />
        <h3 className="text-xl sm:text-2xl font-bold">{product.name}</h3>
        <Meta product={product} />
        <p className="text-sm font-semibold text-[var(--accent-ink)]">
          &ldquo;{product.tagline}&rdquo;
        </p>
        <p className="text-sm text-black/80">{product.description}</p>
        <ul className="ml-4 list-disc space-y-1 text-sm text-black/75 marker:text-[var(--accent-2)]">
          {product.highlights.slice(0, 3).map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-4">
          <Tags product={product} />
          <VisitLink product={product} />
        </div>
      </div>
    </a>
  );
}
