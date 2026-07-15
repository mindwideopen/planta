import type { MetadataRoute } from "next";
import { categories } from "./data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://planta39.ru";
  const routes = ["", "/catalog", "/optovym-klientam", "/kak-kupit", "/dostavka-i-oplata", "/o-kompanii", "/o-kompanii/galereya", "/kontakty"];
  return [...routes.map((route) => ({ url: `${base}${route}`, changeFrequency: route === "" ? "weekly" as const : "monthly" as const, priority: route === "" ? 1 : .7 })), ...categories.map((category) => ({ url: `${base}/catalog/${category.slug}`, changeFrequency: "weekly" as const, priority: .8 }))];
}
