"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useId, useState } from "react";

import { ProductCard } from "@/components/products/product-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { emptyCatalogMessage, filterProducts } from "@/lib/catalog";

function readFilters(value: string) {
  const params = new URLSearchParams(value);
  return {
    query: params.get("q") ?? "",
    categoryId: params.get("category") ?? "all",
  };
}

export function ProductCatalog() {
  const params = useSearchParams();
  const paramKey = params.toString();
  const searchId = useId();
  const initial = readFilters(paramKey);
  const [query, setQuery] = useState(initial.query);
  const [categoryId, setCategoryId] = useState(initial.categoryId);
  const selected =
    categoryId === "all"
      ? undefined
      : categories.find((category) => category.id === categoryId);
  const results = filterProducts(products, query, categoryId);

  useEffect(() => {
    const next = readFilters(paramKey);
    setQuery(next.query);
    setCategoryId(next.categoryId);
  }, [paramKey]);

  function updateFilters(next: { q?: string; category?: string }) {
    const q = next.q ?? query;
    const category = next.category ?? categoryId;
    setQuery(q);
    setCategoryId(category);

    const search = new URLSearchParams();
    if (q) search.set("q", q);
    if (category && category !== "all") search.set("category", category);
    const href = search.size ? `/products?${search.toString()}` : "/products";
    window.history.replaceState(null, "", href);
  }

  return (
    <div>
      <form
        className="rounded-2xl border border-line bg-card p-4 sm:p-5"
        role="search"
        onSubmit={(event) => event.preventDefault()}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="flex-1">
            <label htmlFor={searchId} className="text-sm font-medium">
              Search products or categories
            </label>
            <Input
              id={searchId}
              value={query}
              onChange={(event) => updateFilters({ q: event.target.value })}
              placeholder="Try pickleball, apparel, or cay-cay"
              className="mt-2"
            />
          </div>
          <Button
            type="button"
            variant="outline"
            className="sm:self-end"
            onClick={() => updateFilters({ q: "", category: "all" })}
          >
            Reset filters
          </Button>
        </div>
        <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Category filters">
          <FilterChip
            pressed={categoryId === "all"}
            onClick={() => updateFilters({ category: "all" })}
          >
            All
          </FilterChip>
          {categories.map((category) => (
            <FilterChip
              key={category.id}
              pressed={categoryId === category.id}
              onClick={() => updateFilters({ category: category.id })}
            >
              {category.name}
            </FilterChip>
          ))}
        </div>
      </form>

      <p className="mt-5 text-sm text-muted" aria-live="polite">
        Showing {results.length} of {products.length} listed products
      </p>

      <div key={categoryId} className="catalog-results">
        {results.length > 0 ? (
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="mt-5 rounded-2xl border border-dashed border-line bg-card p-8" role="status">
            <h2 className="font-serif text-2xl">Nothing to show</h2>
            <p className="mt-2 max-w-xl leading-7 text-muted">
              {emptyCatalogMessage(selected, query)}
            </p>
            <Button
              type="button"
              className="mt-5"
              variant="outline"
              onClick={() => updateFilters({ q: "", category: "all" })}
            >
              Reset filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

function FilterChip({
  pressed,
  onClick,
  children,
}: {
  pressed: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={`min-h-11 rounded-full border px-3 text-sm transition-colors duration-200 ${
        pressed
          ? "border-brand-deep bg-brand-deep text-white"
          : "border-line bg-background text-foreground hover:border-brand-deep"
      }`}
    >
      {children}
    </button>
  );
}
