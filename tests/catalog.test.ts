import { describe, expect, it } from "vitest";

import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { emptyCatalogMessage, filterProducts } from "@/lib/catalog";

describe("filterProducts", () => {
  it("matches a product name", () => {
    const results = filterProducts(products, "pickleball", "all");
    expect(results).toHaveLength(4);
  });

  it("matches a category name from the search box", () => {
    const results = filterProducts(products, "apparel", "all");
    expect(results.every((product) => product.categoryId === "apparel")).toBe(true);
    expect(results.length).toBeGreaterThan(0);
  });

  it("filters by category id", () => {
    const results = filterProducts(products, "", "snacks-and-delicacies");
    expect(results).toHaveLength(4);
  });

  it("returns nothing for an unknown search", () => {
    expect(filterProducts(products, "zzzz-not-a-product", "all")).toHaveLength(0);
  });
});

describe("emptyCatalogMessage", () => {
  it("explains representative categories", () => {
    const grocery = categories.find((category) => category.id === "grocery-and-pantry");
    expect(emptyCatalogMessage(grocery, "")).toMatch(/not a verified inventory/i);
  });

  it("explains a search with no matches", () => {
    expect(emptyCatalogMessage(undefined, "zzzz")).toMatch(/No products match that search/);
  });
});
