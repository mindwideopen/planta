import Link from "next/link";
import { PageHero } from "../components/page-elements";
import { createPageMetadata } from "../lib/metadata";

export const metadata = createPageMetadata({
  title: "Поставки склада цветов",
  description: "Информация о ближайших поступлениях цветочной продукции на склад «Планта».",
  path: "/novosti",
  noIndex: true,
});

export default function NewsPage() {
  return (
    <>
      <PageHero eyebrow="Поставки" title="Ближайшее поступление" lead="Состав и дата ближайшей поставки подтверждаются менеджером — так вы получаете актуальную информацию по нужной категории." items={[{ label: "Поставки" }]} />
      <section className="section"><div className="container content-grid"><div className="prose"><h2>Уточните нужную категорию</h2><p>Сообщите, какие цветы или растения вас интересуют, примерное количество и нужную дату. Менеджер проверит текущий остаток и ближайшее поступление.</p><h2>Что можно узнать</h2><ul><li>категории и цвета в ближайшей поставке;</li><li>доступные упаковки и минимальное количество;</li><li>ориентировочную дату выдачи;</li><li>возможность привоза редкой позиции.</li></ul></div><aside className="side-card"><h2>Уточнить поставку</h2><p>Назовите интересующую категорию — менеджер проверит информацию.</p><a className="button button--light" href="tel:+79114501095">Позвонить</a><Link className="button button--outline" href="/catalog">Каталог</Link></aside></div></section>
    </>
  );
}
