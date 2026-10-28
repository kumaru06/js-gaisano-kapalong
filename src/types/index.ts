export type InventoryStatus = "supplied" | "representative";

export type Category = {
  id: string;
  name: string;
  description: string;
  image?: string;
  imageAlt?: string;
  inventoryStatus: InventoryStatus;
};

export type Product = {
  id: string;
  name: string;
  categoryId: string;
  image: string;
  imageAlt: string;
  description: string;
  details?: string[];
  featured?: boolean;
};

export type Promotion = {
  id: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  href?: string;
  ctaLabel?: string;
  validUntil: string | null;
  visible: boolean;
};

export type ContactInput = {
  fullName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  companyWebsite?: string;
};
