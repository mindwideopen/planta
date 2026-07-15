import Link from "next/link";
import { ContactBand, PageHero } from "../components/page-elements";
import { createPageMetadata } from "../lib/metadata";

export const metadata = createPageMetadata({
  title: "Как купить цветы на складе «Планта»",
  description: "Пошаговый порядок заказа цветов: выбор ассортимента, подтверждение наличия, оплата, самовывоз или доставка.",
  path: "/kak-kupit",
});

export default function HowToBuyPage() {
  return (
    <>
      <PageHero eyebrow="Покупателям" title="Как купить" lead="Простой сценарий без обязательной регистрации: выберите направление, согласуйте актуальное наличие и получите заказ удобным способом." items={[{ label: "Как купить" }]} />
      <section className="section">
        <div className="container">
          <h2 className="sr-only">Этапы покупки</h2>
          <div className="steps">
            <article className="step"><span className="step__index">1</span><h3>Выбор</h3><p>Откройте каталог или отправьте менеджеру список цветов, оттенков, количества и нужную дату.</p></article>
            <article className="step"><span className="step__index">2</span><h3>Подтверждение</h3><p>Мы уточним фактическое наличие, формат упаковки, стоимость, время комплектации и точку выдачи.</p></article>
            <article className="step"><span className="step__index">3</span><h3>Получение</h3><p>Оплатите согласованным способом и заберите заказ самостоятельно либо оформите доставку.</p></article>
          </div>
          <div className="content-grid" style={{ marginTop: 70 }}>
            <div className="prose">
              <h2>Для оптового заказа</h2><p>Заранее подготовьте реквизиты организации и укажите, нужны ли закрывающие документы. Минимальная партия, единица продажи и условия резерва зависят от конкретной позиции и поставки.</p>
              <h2>Для частного покупателя</h2><p>Можно заказать цветы, растения или готовый букет без регистрации. Состав и срок готовности букета согласуются отдельно.</p>
              <h2>Если нужной позиции нет</h2><p>Сообщите сорт, цвет, объём и желаемую дату. Менеджер проверит возможность привоза или предложит близкую замену.</p>
            </div>
            <aside className="side-card"><h2>Начать заказ</h2><p>Самый быстрый путь — каталог и звонок менеджеру.</p><Link className="button button--light" href="/catalog">Перейти в каталог</Link><a className="button button--outline" href="tel:+79114501095">Позвонить</a></aside>
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
