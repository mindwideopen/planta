import { ContactBand, PageHero } from "../components/page-elements";
import { locations } from "../data/site";
import { createPageMetadata } from "../lib/metadata";

export const metadata = createPageMetadata({
  title: "Доставка и оплата цветов в Калининграде",
  description: "Условия доставки по Калининграду и области, самовывоз со склада, способы оплаты и порядок согласования заказа.",
  path: "/dostavka-i-oplata",
});

export default function DeliveryPage() {
  return (
    <>
      <PageHero eyebrow="Сервис" title="Доставка и самовывоз" lead="Точный тариф, интервал и возможность доставки зависят от адреса, объёма и времени заказа. Все условия подтверждаются до оплаты." items={[{ label: "Доставка и оплата" }]} />
      <section className="section">
        <div className="container content-grid">
          <div className="prose">
            <h2>Доставка по городу и области</h2>
            <p>Служба доставки работает по согласованию. Сообщите адрес, желаемое время, состав и объём заказа — менеджер рассчитает стоимость и предложит доступный интервал.</p>
            <ul><li>бережная перевозка с учётом характера цветочной продукции;</li><li>доставка по Калининграду и населённым пунктам области;</li><li>точная стоимость фиксируется до подтверждения заказа;</li><li>для юридических лиц заранее согласуется комплект документов.</li></ul>
            <h2>Самовывоз</h2><p>Получить заказ можно в городской точке или на основном складе. Для оптовой загрузки удобнее основной склад в Прибрежном. До поездки уточните, где подготовлен ваш заказ и какой график действует в выбранный день.</p>
            <h2>Оплата</h2><p>Доступный способ оплаты подтверждается менеджером при оформлении заказа. Сумма и условия фиксируются до получения или доставки.</p>
          </div>
          <aside className="side-card"><h2>Рассчитать доставку</h2><p>Подготовьте адрес, желаемое время и примерный объём.</p><a className="button button--light" href="tel:+79114501095">Позвонить менеджеру</a><a className="button button--outline" href="mailto:svetaooo@yandex.ru?subject=Расчёт%20доставки">Написать на почту</a></aside>
        </div>
      </section>
      <section className="section section--soft">
        <div className="container"><div className="section-heading"><div><span className="eyebrow">Самовывоз</span><h2>Пункты получения</h2></div><p>Позвоните перед поездкой: менеджер подтвердит место выдачи, готовность заказа и актуальный график.</p></div><div className="location-grid">{locations.map((location) => <article className="location-card" key={location.name}><span className="location-card__type">{location.type}</span><h3>{location.name}</h3><address>{location.address}</address><p>{location.note}</p><div className="location-card__links"><a className="button button--primary" href={location.phone.href}>{location.phone.display}</a><a className="button button--outline" href={location.map}>Маршрут</a></div></article>)}</div></div>
      </section>
      <ContactBand />
    </>
  );
}
