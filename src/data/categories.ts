import type { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "snacks-and-delicacies",
    name: "Snacks and Delicacies",
    description:
      "Packaged snacks shown in supplied JS Gaisano promotional posts, including local delicacies.",
    image: "/images/promotions/cay-cay.jpg",
    imageAlt:
      "Pack of Twilight Delights Special Cay-Cay held in a hand, with a Buy 1 Get 1 graphic.",
    inventoryStatus: "supplied",
  },
  {
    id: "sports-and-recreation",
    name: "Sports and Recreation",
    description:
      "Pickleball rackets from supplied in-store photos. The same photos also show Liveup racket covers on the display rack.",
    image: "/images/products/pickleball-blue.jpg",
    imageAlt:
      "Blue Franklin Signature pickleball racket held in front of black racket covers.",
    inventoryStatus: "supplied",
  },
  {
    id: "apparel",
    name: "Apparel",
    description:
      "Graphic T-shirts from supplied JS Gaisano “Find your style” posts.",
    image: "/images/products/tee-im-super.jpg",
    imageAlt:
      "Model wearing a white graphic T-shirt in a clothing section, front and back views.",
    inventoryStatus: "supplied",
  },
  {
    id: "grocery-and-pantry",
    name: "Grocery and Pantry Essentials",
    description:
      "A typical supermarket section for rice, canned goods, and pantry staples. No individual products are listed here because a verified Kapalong inventory was not supplied.",
    inventoryStatus: "representative",
  },
  {
    id: "household-and-personal-care",
    name: "Household and Personal Care",
    description:
      "A typical retail section for cleaning and personal-care goods. No individual products are listed here because a verified Kapalong inventory was not supplied.",
    inventoryStatus: "representative",
  },
];

export function getCategory(id: string) {
  return categories.find((category) => category.id === id);
}
