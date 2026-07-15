import Link from "next/link";
import Image from "next/image";
import { ContactBand, PageHero } from "../components/page-elements";
import { createPageMetadata } from "../lib/metadata";

export const metadata = createPageMetadata({
  title: "О магазине-складе цветов «Планта»",
  description: "«Планта» — магазин-склад свежесрезанных цветов и растений в Калининграде: поставки, холодное хранение, сборка и выдача заказов.",
  path: "/o-kompanii",
});

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="О компании" title="Свежесть начинается до витрины" lead="«Планта» работает с цветочной продукцией как магазин-склад: принимает поставки, хранит, комплектует и выдаёт заказы оптовым и частным покупателям." items={[{ label: "О компании" }]} />
      <section className="section">
        <div className="container split">
          <div className="split__copy">
            <span className="eyebrow">Наш подход</span>
            <h2>Цветы не терпят задержек</h2>
            <p>Скорость здесь — часть качества: поставка принимается, размещается на хранение, комплектуется под заказ и выдаётся в согласованное время.</p>
            <p>Компания работает с цветами и растениями из разных стран. Происхождение конкретной позиции, сорт и характеристики подтверждаются вместе с текущей поставкой.</p>
            <div className="split__actions"><Link className="button button--primary" href="/catalog">Открыть каталог</Link><Link className="button button--outline" href="/o-kompanii/galereya">Посмотреть ассортимент</Link></div>
          </div>
          <div className="warehouse-visual"><Image src="/images/hero-warehouse.webp" alt="" fill sizes="(max-width: 820px) 100vw, 50vw" /><div className="warehouse-visual__note"><strong>От поставки до выдачи</strong><span>Хранение, сборка и логистика в одном процессе.</span></div></div>
        </div>
      </section>
      <section className="section section--green">
        <div className="container">
          <div className="section-heading"><div><span className="eyebrow" style={{ color: "#dce8a9" }}>Основа сервиса</span><h2>Что получает покупатель</h2></div><p>Управляемый путь от запроса до выдачи.</p></div>
          <div className="feature-grid"><article className="feature"><span className="feature__number">A</span><h3>Выбор</h3><p>Основные категории и возможность запросить необычную позицию.</p></article><article className="feature"><span className="feature__number">B</span><h3>Условия</h3><p>Согласованные упаковка, стоимость, дата и место получения.</p></article><article className="feature"><span className="feature__number">C</span><h3>Хранение</h3><p>Холодильная камера для свежесрезанной продукции.</p></article><article className="feature"><span className="feature__number">D</span><h3>Выдача</h3><p>Парковка, погрузка и два пункта получения.</p></article></div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
