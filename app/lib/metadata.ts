import type { Metadata } from "next";

type PageMetadata = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  noIndex?: boolean;
};

export function createPageMetadata({ title, description, path, image = "/images/hero-warehouse.webp", imageAlt = "Свежие цветы в ассортименте магазина-склада «Планта»", noIndex = false }: PageMetadata): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: noIndex ? { index: false, follow: true } : undefined,
    openGraph: {
      type: "website",
      locale: "ru_RU",
      siteName: "Планта",
      title,
      description,
      url: path,
      images: [{ url: image, alt: imageAlt }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
