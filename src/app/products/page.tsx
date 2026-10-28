import type { Metadata } from "next";
import { Suspense } from "react";

import { PageTransition } from "@/components/motion/page-transition";
import { ProductCatalog } from "@/components/products/product-catalog";
import { PromotionSection } from "@/components/promotions/promotion-section";

export const metadata: Metadata = {
  title: "Products and Services",
  description:
    "Browse supplied product highlights for JS Gaisano Kapalong, including snacks, sports equipment, and apparel. Search and filter by category.",
};

export default function ProductsPage() {
  return (
    <PageTransition>
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <p className="text-sm font-medium tracking-[0.16em] text-brand-deep uppercase">
        Catalog
      </p>
      <div className="mt-3 h-0.5 w-12 bg-gold" />
      <h1 className="mt-4 font-serif text-4xl sm:text-5xl">Products and services</h1>
      <p className="mt-4 max-w-2xl leading-7 text-muted">
        Five categories are listed. Items with photos come from materials
        supplied for this project. Prices, stock, and current promotions are
        not confirmed for the Kapalong branch.
      </p>
      <div className="mt-8">
        <Suspense fallback={<p className="text-muted">Loading the catalog…</p>}>
          <ProductCatalog />
        </Suspense>
      </div>
      <div className="mt-16">
        <PromotionSection embedded />
      </div>
    </div>
    </PageTransition>
  );
}
