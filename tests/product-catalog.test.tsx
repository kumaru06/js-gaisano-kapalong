import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ replace: vi.fn() }),
  useSearchParams: () => new URLSearchParams("category=grocery-and-pantry"),
}));

import { ProductCatalog } from "@/components/products/product-catalog";

describe("ProductCatalog", () => {
  it("shows the representative-category empty state", () => {
    render(<ProductCatalog />);
    expect(
      screen.getByText(/not a verified inventory of the Kapalong branch/i),
    ).toBeInTheDocument();
  });
});
