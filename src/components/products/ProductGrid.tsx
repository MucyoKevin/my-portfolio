import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { ProductCard } from "./ProductCard";
import type { Product } from "@/data/products";

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <Stagger className="grid w-full gap-5 sm:gap-6 md:grid-cols-2">
      {products.map((product) => (
        <StaggerItem key={product.slug} className="h-full">
          <ProductCard product={product} />
        </StaggerItem>
      ))}
    </Stagger>
  );
}
