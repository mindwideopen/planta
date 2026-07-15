import { ContactBand, PageHero } from "../components/page-elements";
import { contacts, locations } from "../data/site";
import { createPageMetadata } from "../lib/metadata";

export const metadata = createPageMetadata({
  title: "Контакты склада-магазина цветов «Планта»",
  description: "Адреса, телефоны и схема проезда к складу-магазину цветов «Планта» в Калининграде и посёлке Прибрежное.",
  path: "/kontakty",
});

export default function ContactsPage() {
  return (
    <>
      <PageHero eyebrow="Контакты" title="Две точки — один понятный заказ" lead="Позвоните перед поездкой: менеджер подтвердит наличие, место выдачи и актуальный график выбранной точки." items={[{ label: "Контакты" }]} />
      <section className="section">
        <div className="container"><div className="location-grid">{locations.map((location) => <article className="location-card" key={location.name}><span className="location-card__type">{location.type}</span><h2 style={{ fontSize: "2.4rem" }}>{location.name}</h2><address>{location.address}</address><p>{location.note}</p><div className="location-card__links"><a className="button button--primary" href={location.phone.href}>{location.phone.display}</a><a className="button button--outline" href={location.map}>Построить маршрут</a></div></article>)}</div></div>
      </section>
      <section className="section section--soft">
        <div className="container content-grid">
          <div className="prose"><h2>ООО «Планта и К»</h2><p>Краткие сведения о юридическом лице. Полные реквизиты и комплект документов предоставит менеджер при оформлении корпоративного заказа.</p><dl><dt><strong>ИНН</strong></dt><dd>3906277134</dd><dt><strong>КПП</strong></dt><dd>390101001</dd><dt><strong>ОГРН</strong></dt><dd>1123926065108</dd></dl></div>
          <aside className="side-card"><h2>Связаться</h2>{contacts.phones.map((phone) => <a key={phone.href} className="button button--light" href={phone.href}>{phone.display}</a>)}<a className="button button--outline" href={`mailto:${contacts.email}`}>{contacts.email}</a></aside>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
