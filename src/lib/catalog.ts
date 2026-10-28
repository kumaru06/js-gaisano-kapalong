import { getCategory } from "@/data/categories";
import type { Category, Product } from "@/types";

export function emptyCatalogMessage(category: Category | undefined, query: string) {
  if (category?.inventoryStatus === "representative") {
    return `No individual products are listed for ${category.name}. This section is a typical retail category, not a verified inventory of the Kapalong branch.`;
  }

  if (query.trim()) {
    return "No products match that search. Try another name or reset the filters.";
  }

  return "No products match these filters.";
}

export function filterProducts(
  products: Product[],
  query: string,
  categoryId: string,
) {
  const normalizedQuery = query.trim().toLowerCase();
  const activeCategory = categoryId === "all" ? "" : categoryId;

  return products.filter((product) => {
    const category = getCategory(product.categoryId);
    const matchesCategory =
      !activeCategory || product.categoryId === activeCategory;
    const haystack = `${product.name} ${category?.name ?? ""}`.toLowerCase();
    const matchesQuery =
      !normalizedQuery || haystack.includes(normalizedQuery);

    return matchesCategory && matchesQuery;
  });
}
