import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/about/howto", destination: "/kak-kupit", permanent: true },
      { source: "/about/delivery", destination: "/dostavka-i-oplata", permanent: true },
      { source: "/about/contacts", destination: "/kontakty", permanent: true },
      { source: "/gallery", destination: "/o-kompanii/galereya", permanent: true },
      { source: "/news", destination: "/novosti", permanent: true },
      { source: "/catalog/tsvety_svezhesrezannye", destination: "/catalog/srezannye-tsvety", permanent: true },
      { source: "/catalog/roza", destination: "/catalog/rozy", permanent: true },
      { source: "/catalog/gvozdika", destination: "/catalog/gvozdiki", permanent: true },
      { source: "/catalog/khrizantema", destination: "/catalog/hrizantemy", permanent: true },
      { source: "/catalog/drugie_tsvety", destination: "/catalog/drugie-tsvety", permanent: true },
      { source: "/catalog/dekorativnye_rasteniya", destination: "/catalog/dekorativnye-rasteniya", permanent: true },
      { source: "/catalog/primery", destination: "/catalog/gorshechnye-rasteniya", permanent: true },
      { source: "/catalog/greens_for_bouquets", destination: "/catalog/zelen-dlya-buketov", permanent: true },
      { source: "/catalog/gotovye_bukety", destination: "/catalog/gotovye-bukety", permanent: true },
      { source: "/catalog/novelty", destination: "/catalog/novinki", permanent: true },
    ];
  },
};

export default nextConfig;
