import { CategoryGrid } from "@/components/home/category-grid";
import { PageTransition } from "@/components/motion/page-transition";
import { Hero } from "@/components/home/hero";
import { LocationPreview } from "@/components/home/location-preview";
import { Reasons } from "@/components/home/reasons";
import { ProductCard } from "@/components/products/product-card";
import { PromotionSection } from "@/components/promotions/promotion-section";
import { featuredProducts } from "@/data/products";

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <CategoryGrid />
      <PromotionSection />
      <section
        className="mx-auto max-w-6xl px-4 py-8 sm:px-6"
        aria-labelledby="featured-heading"
      >
        <h2 id="featured-heading" className="font-serif text-3xl">
          Featured highlights
        </h2>
        <div className="mt-3 h-0.5 w-12 bg-gold" />
        <p className="mt-4 max-w-2xl leading-7 text-muted">
          A short selection from the supplied photos. Prices and stock are not
          shown because they were not verified for this branch.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <Reasons />
      <LocationPreview />
    </PageTransition>
  );
}
