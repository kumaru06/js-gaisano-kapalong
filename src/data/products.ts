import type { Product } from "@/types";

export const products: Product[] = [
  {
    id: "special-cay-cay",
    name: "Twilight Delights Special Cay-Cay",
    categoryId: "snacks-and-delicacies",
    image: "/images/promotions/cay-cay.jpg",
    imageAlt:
      "Clear pack of Twilight Delights Special Cay-Cay, labeled 285 grams, with a Buy 1 Get 1 graphic.",
    description:
      "Packaged cay-cay from a supplied promotional post. The package lists peanuts among the allergens.",
    details: ["285 grams on the package", "Allergens listed: peanuts"],
    featured: true,
  },
  {
    id: "durian-tart",
    name: "Ville's Durian Tart",
    categoryId: "snacks-and-delicacies",
    image: "/images/promotions/durian-tart.jpg",
    imageAlt:
      "Wrapped stack of Ville's durian tarts with a Buy 1 Get 1 graphic.",
    description:
      "Durian tart from a supplied promotional post. The label on the photo reads Ville's Pastries.",
    featured: true,
  },
  {
    id: "pasti-pina",
    name: "Hinam-is Pasti Pina",
    categoryId: "snacks-and-delicacies",
    image: "/images/promotions/pasti-pina.jpg",
    imageAlt:
      "Green box of Hinam-is Pasti Pina pastillas with pineapple filling and a Buy 1 Take 1 badge.",
    description:
      "Pineapple pastillas from a supplied promotional post. The box describes pastillas with pineapple filling.",
    details: ["Net weight 230 grams on the box", "20 pieces listed on the box"],
  },
  {
    id: "mani-con-leche",
    name: "Mani con Leche",
    categoryId: "snacks-and-delicacies",
    image: "/images/promotions/mani-con-leche.jpg",
    imageAlt:
      "Pack of Mani con Leche peanut delicacy with a Buy 1 Get 1 graphic.",
    description:
      "Peanut and milk delicacy from a supplied promotional post. A shelf sticker is visible in the photo and is not listed here as a confirmed Kapalong price.",
    details: ["12 pieces listed on the package"],
    featured: true,
  },
  {
    id: "pickleball-white",
    name: "Franklin Signature Pickleball Racket — White",
    categoryId: "sports-and-recreation",
    image: "/images/products/pickleball-white.jpg",
    imageAlt:
      "White and gold Franklin Signature pickleball racket held in front of black Liveup racket covers.",
    description:
      "Supplied in-store photo of a Franklin Signature pickleball racket. The packaging shows 16 mm.",
    details: ["16 mm marked on the packaging"],
    featured: true,
  },
  {
    id: "pickleball-blue",
    name: "Franklin Signature Pickleball Racket — Blue",
    categoryId: "sports-and-recreation",
    image: "/images/products/pickleball-blue.jpg",
    imageAlt:
      "Blue Franklin Signature pickleball racket held in front of a sports display.",
    description:
      "Supplied in-store photo of a blue Franklin Signature pickleball racket. The packaging shows 16 mm.",
    details: ["16 mm marked on the packaging"],
  },
  {
    id: "pickleball-pink",
    name: "Franklin Signature Pickleball Racket — Pink",
    categoryId: "sports-and-recreation",
    image: "/images/products/pickleball-pink.jpg",
    imageAlt:
      "Pink Franklin Signature pickleball racket held in front of black racket covers.",
    description:
      "Supplied in-store photo of a pink Franklin Signature pickleball racket. The packaging shows 16 mm.",
    details: ["16 mm marked on the packaging"],
  },
  {
    id: "pickleball-black",
    name: "Franklin Signature Pickleball Racket — Black",
    categoryId: "sports-and-recreation",
    image: "/images/products/pickleball-black.jpg",
    imageAlt:
      "Black Franklin Signature pickleball racket held in front of a wall of racket covers.",
    description:
      "Supplied in-store photo of a black Franklin Signature pickleball racket. The packaging shows 16 mm.",
    details: ["16 mm marked on the packaging"],
  },
  {
    id: "tee-im-super",
    name: "I'm Super Graphic T-shirt — White",
    categoryId: "apparel",
    image: "/images/products/tee-im-super.jpg",
    imageAlt:
      "Front and back of a white oversized T-shirt with an I'm Super graphic, worn in a clothing aisle.",
    description:
      "White graphic T-shirt from a supplied “Find your style” post. The back print reads I'm Super.",
    featured: true,
  },
  {
    id: "tee-gnicano-black",
    name: "Gnicano Graphic T-shirt — Black",
    categoryId: "apparel",
    image: "/images/products/tee-gnicano-black.jpg",
    imageAlt:
      "Front and back of a black oversized T-shirt with a colorful graphic, worn in a clothing aisle.",
    description:
      "Black graphic T-shirt from a supplied “Find your style” post. The back print reads Gnicano.",
  },
  {
    id: "tee-gnicano-green",
    name: "Gnicano Graphic T-shirt — Pale Green",
    categoryId: "apparel",
    image: "/images/products/tee-gnicano-green.jpg",
    imageAlt:
      "Front and back of a pale green oversized T-shirt with a colorful graphic.",
    description:
      "Pale green graphic T-shirt from a supplied “Find your style” post. The back print reads Gnicano.",
    featured: true,
  },
  {
    id: "tee-gnicano-pink",
    name: "Gnicano Graphic T-shirt — Pink",
    categoryId: "apparel",
    image: "/images/products/tee-gnicano-pink.jpg",
    imageAlt:
      "Front and back of a pink oversized T-shirt with a colorful graphic.",
    description:
      "Pink graphic T-shirt from a supplied “Find your style” post. The back print reads Gnicano.",
  },
  {
    id: "tee-margarete",
    name: "Margarete Graphic T-shirt — Cream",
    categoryId: "apparel",
    image: "/images/products/tee-margarete.jpg",
    imageAlt:
      "Front and back of a cream oversized T-shirt with an illustrated character and the name Margarete.",
    description:
      "Cream graphic T-shirt from a supplied “Find your style” post. The back print reads Margarete.",
  },
];

export const featuredProducts = products.filter((product) => product.featured);
