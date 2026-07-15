import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://planta39.ru/sitemap.xml", host: "https://planta39.ru" };
}
