import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/products", "/contact"].map((route) => ({
    url: route ? `${siteConfig.url}${route}` : siteConfig.url,
    lastModified: "2026-10-27",
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
