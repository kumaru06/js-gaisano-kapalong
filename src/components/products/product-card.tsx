import Image from "next/image";

import { getCategory } from "@/data/categories";
import type { Product } from "@/types";

export function ProductCard({ product }: { product: Product }) {
  const category = getCategory(product.categoryId);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card">
      <Image
        src={product.image}
        alt={product.imageAlt}
        width={1024}
        height={1024}
        className="aspect-square w-full bg-[#f3efe8] object-contain"
      />
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium tracking-[0.14em] text-brand-deep uppercase">
          {category?.name}
        </p>
        <h3 className="mt-2 font-serif text-2xl leading-snug">{product.name}</h3>
        <p className="mt-2 text-sm leading-6 text-muted">{product.description}</p>
        {product.details ? (
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
            {product.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        ) : null}
        <p className="mt-4 text-xs text-muted">
          Price and stock were not supplied for this item.
        </p>
      </div>
    </article>
  );
}
