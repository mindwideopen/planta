import { ContactBand, PageHero } from "../components/page-elements";
import { createPageMetadata } from "../lib/metadata";
import { CatalogBrowser } from "./catalog-browser";

export const metadata = createPageMetadata({
  title: "Каталог цветов оптом в Калининграде",
  description: "Свежесрезанные цветы, растения, декоративная зелень и готовые букеты. Уточняйте актуальный ассортимент склада-магазина «Планта».",
  path: "/catalog",
});

export default function CatalogPage() {
  return (
    <>
      <PageHero eyebrow="Каталог" title="Свежие цветы для работы, событий и дома" lead="Основные категории и примеры ассортимента. Конкретные сорта, цены, упаковку и остаток подтверждает менеджер — товар обновляется с каждой поставкой." items={[{ label: "Каталог" }]} />
      <section className="section">
        <CatalogBrowser />
      </section>
      <ContactBand />
    </>
  );
}
