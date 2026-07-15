import type { Metadata, Viewport } from "next";
import { Lora, Manrope } from "next/font/google";
import { GlobalStyles } from "./components/global-styles";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { StyledComponentsRegistry } from "./lib/styled-registry";
import "./globals.css";

const manrope = Manrope({
  subsets: ["cyrillic", "latin"],
  variable: "--font-sans",
  display: "swap",
});

const lora = Lora({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://planta39.ru"),
  title: {
    default: "Цветы оптом в Калининграде — склад-магазин «Планта»",
    template: "%s | Планта",
  },
  description:
    "Срезанные цветы, растения и букеты оптом и в розницу со склада в Калининграде. Регулярные поставки, самовывоз и доставка по области.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "Планта",
    title: "Цветы оптом в Калининграде — склад-магазин «Планта»",
    description: "Свежие цветы со склада: прямые поставки, холодное хранение и удобная выдача.",
    images: [{ url: "/images/hero-warehouse.webp", width: 1599, height: 900, alt: "Свежие цветы на складе Планта" }],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#282c2f",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://planta39.ru/#organization",
        name: "ООО «Планта и К»",
        alternateName: "Планта",
        url: "https://planta39.ru",
        email: "svetaooo@yandex.ru",
        telephone: ["+79114501095", "+79114535118"],
      },
      {
        "@type": ["LocalBusiness", "Store"],
        "@id": "https://planta39.ru/#litovskiy-val",
        name: "Планта — Литовский Вал",
        parentOrganization: { "@id": "https://planta39.ru/#organization" },
        telephone: "+79114535118",
        address: { "@type": "PostalAddress", addressLocality: "Калининград", streetAddress: "ул. Литовский Вал, 21А", addressCountry: "RU" },
      },
      {
        "@type": ["LocalBusiness", "Store"],
        "@id": "https://planta39.ru/#pribrezhnoye",
        name: "Планта — основной склад",
        parentOrganization: { "@id": "https://planta39.ru/#organization" },
        telephone: "+79114501095",
        address: { "@type": "PostalAddress", addressLocality: "пос. Прибрежное", streetAddress: "ул. Центральная, 1Б", addressRegion: "Калининградская область", addressCountry: "RU" },
      },
      {
        "@type": "WebSite",
        "@id": "https://planta39.ru/#website",
        url: "https://planta39.ru",
        name: "Планта",
        publisher: { "@id": "https://planta39.ru/#organization" },
        inLanguage: "ru-RU",
      },
    ],
  };

  return (
    <html lang="ru" className={`${manrope.variable} ${lora.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <a className="skip-link" href="#main-content">Перейти к содержимому</a>
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
        </StyledComponentsRegistry>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
