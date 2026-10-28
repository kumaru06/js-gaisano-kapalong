import type { Promotion } from "@/types";

const suppliedNote =
  "Supplied promotional material. No end date was provided, so this site does not confirm that the offer is currently running at the Kapalong branch.";

export const promotions: Promotion[] = [
  {
    id: "promo-cay-cay",
    title: "Special Cay-Cay — Buy 1 Get 1",
    description: `The supplied post shows a Buy 1 Get 1 graphic for Twilight Delights Special Cay-Cay. ${suppliedNote}`,
    image: "/images/promotions/cay-cay.jpg",
    imageAlt:
      "Promotional photo of Twilight Delights Special Cay-Cay with a Buy 1 Get 1 graphic.",
    href: "/products?q=cay-cay",
    ctaLabel: "View in catalog",
    validUntil: null,
    visible: true,
  },
  {
    id: "promo-durian-tart",
    title: "Durian Tart — Buy 1 Get 1",
    description: `The supplied post shows a Buy 1 Get 1 graphic for Ville's Durian Tart. ${suppliedNote}`,
    image: "/images/promotions/durian-tart.jpg",
    imageAlt:
      "Promotional photo of Ville's durian tarts with a Buy 1 Get 1 graphic.",
    href: "/products?q=durian",
    ctaLabel: "View in catalog",
    validUntil: null,
    visible: true,
  },
  {
    id: "promo-pasti-pina",
    title: "Pasti Pina — Buy 1 Get 1",
    description: `The supplied post shows a Buy 1 Take 1 graphic for Hinam-is Pasti Pina. ${suppliedNote}`,
    image: "/images/promotions/pasti-pina.jpg",
    imageAlt:
      "Promotional photo of Hinam-is Pasti Pina with a Buy 1 Get 1 graphic.",
    href: "/products?q=pasti",
    ctaLabel: "View in catalog",
    validUntil: null,
    visible: true,
  },
  {
    id: "promo-mani-con-leche",
    title: "Mani con Leche — Buy 1 Get 1",
    description: `The supplied post shows a Buy 1 Get 1 graphic for Mani con Leche. ${suppliedNote}`,
    image: "/images/promotions/mani-con-leche.jpg",
    imageAlt:
      "Promotional photo of Mani con Leche with a Buy 1 Get 1 graphic.",
    href: "/products?q=mani",
    ctaLabel: "View in catalog",
    validUntil: null,
    visible: true,
  },
  {
    id: "promo-find-your-style",
    title: "Find Your Style",
    description:
      "Supplied apparel campaign featuring graphic T-shirts. The posts are marked “New.” No campaign end date was provided.",
    image: "/images/products/tee-margarete.jpg",
    imageAlt:
      "Front and back of a cream graphic T-shirt from the Find Your Style posts.",
    href: "/products?category=apparel",
    ctaLabel: "Browse apparel",
    validUntil: null,
    visible: true,
  },
];

export const visiblePromotions = promotions.filter(
  (promotion) => promotion.visible,
);
