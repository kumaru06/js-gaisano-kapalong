import Image from "next/image";

import { SiteLink } from "@/components/navigation/site-link";

import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { categories } from "@/data/categories";

export function CategoryGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6" aria-labelledby="categories-heading">
      <div className="max-w-2xl">
        <h2 id="categories-heading" className="font-serif text-3xl">
          Product categories
        </h2>
        <div className="mt-3 h-0.5 w-12 bg-gold" />
        <p className="mt-4 text-muted leading-7">
          Snacks, sports, and apparel use photos supplied for this project.
          Grocery and household sections describe typical retail areas and are
          not a verified stock list for the Kapalong branch.
        </p>
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Reveal key={category.id}>
            <SiteLink
              href={`/products?category=${category.id}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card"
            >
              {category.image ? (
                <Image
                  src={category.image}
                  alt={category.imageAlt ?? ""}
                  width={1024}
                  height={1024}
                  className="aspect-[4/3] w-full bg-[#f3efe8] object-contain"
                />
              ) : (
                <div className="flex aspect-[4/3] items-end bg-[#e7f6f2] p-5">
                  <span className="font-serif text-2xl text-brand-deep">
                    {category.name}
                  </span>
                </div>
              )}
              <div className="flex flex-1 flex-col p-5">
                <Badge>
                  {category.inventoryStatus === "supplied"
                    ? "Supplied highlights"
                    : "Not a verified inventory"}
                </Badge>
                <h3 className="mt-3 font-serif text-2xl group-hover:text-brand-deep">
                  {category.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {category.description}
                </p>
              </div>
            </SiteLink>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
