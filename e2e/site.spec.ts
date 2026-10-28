import { expect, test } from "@playwright/test";

test("visitors can open every required page", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "JS Gaisano Mall, Kapalong" })).toBeVisible();
  await expect(page.getByAltText("JS Gaisano logo").first()).toBeVisible();

  await page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: "About Us" }).click();
  await expect(page.getByRole("heading", { name: "Company mission and vision" })).toBeVisible();

  await page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: "Products/Services" }).click();
  await expect(page.getByRole("heading", { name: "Products and services" })).toBeVisible();

  await page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: "Contact Us" }).click();
  await expect(page.getByRole("heading", { name: "Contact us" })).toBeVisible();
});

test("catalog search, filters, and reset work", async ({ page }) => {
  await page.goto("/products");
  await page.getByLabel("Search products or categories").fill("zzzz-not-a-product");
  await expect(page.getByText("No products match that search.")).toBeVisible();

  await page.getByRole("button", { name: "Reset filters" }).first().click();
  await expect(page).toHaveURL(/\/products$/);
  await page.getByRole("button", { name: "Apparel" }).click();
  await expect(page.getByRole("heading", { name: /I'm Super/ })).toBeVisible();
  await expect(page.getByRole("heading", { name: /Pickleball/ })).toHaveCount(0);
});

test("contact form explains that a valid inquiry is not delivered", async ({ page }) => {
  await page.goto("/contact");
  await page.getByRole("button", { name: "Submit inquiry" }).click();
  await expect(page.getByText("Enter your full name.")).toBeVisible();

  await page.getByLabel("Full name").fill("Ana Cruz");
  await page.getByLabel("Email address").fill("ana@example.com");
  await page.getByLabel("Inquiry subject").fill("Store hours");
  await page.getByLabel("Message").fill("Are you open on Sunday afternoon?");
  await page.getByRole("button", { name: "Submit inquiry" }).click();

  await expect(page.getByRole("status")).toContainText("not emailed or saved", {
    timeout: 20000,
  });
  await expect(page.getByText("Message sent")).toHaveCount(0);
});

test("the Kapalong map and directions link are present", async ({ page }) => {
  await page.goto("/contact");
  const map = page.getByTitle(
    "Interactive map of JS Gaisano in Barangay Maniki, Kapalong, Davao del Norte",
  );
  await expect(map).toBeVisible();
  await expect(map).toHaveAttribute("src", /ChIJjRrHD6-x_jIRKnaejCtmfr4/);

  const directions = page.getByRole("link", { name: "Get Directions" });
  await expect(directions).toHaveAttribute("href", /destination_place_id=ChIJjRrHD6-x_jIRKnaejCtmfr4/);
  await expect(page.getByRole("link", { name: "Open this location in Google Maps" })).toBeVisible();
});
