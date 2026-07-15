import Link from "next/link";

export function Breadcrumbs({ items }: { items: Array<{ label: string; href?: string }> }) {
  return (
    <nav className="breadcrumbs" aria-label="Хлебные крошки">
      <Link href="/">Главная</Link><span aria-hidden="true">/</span>
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`}>
          {item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
          {index < items.length - 1 && <span aria-hidden="true"> / </span>}
        </span>
      ))}
    </nav>
  );
}

export function PageHero({ eyebrow, title, lead, items }: { eyebrow: string; title: string; lead: string; items: Array<{ label: string; href?: string }> }) {
  return (
    <section className="page-hero">
      <div className="container">
        <Breadcrumbs items={items} />
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p className="page-hero__lead">{lead}</p>
      </div>
    </section>
  );
}

export function ContactBand() {
  return (
    <section className="cta-band" aria-labelledby="contact-band-title">
      <div className="container cta-band__inner">
        <div>
          <h2 id="contact-band-title">Нужна конкретная позиция или оптовые условия?</h2>
          <p>Сообщите вид цветка, цвет, количество и нужную дату — менеджер проверит ближайшую поставку и варианты заказа.</p>
        </div>
        <div style={{ display: "grid", gap: 10 }}>
          <a className="button button--light" href="tel:+79114501095">Позвонить менеджеру</a>
          <a className="button button--outline" href="mailto:svetaooo@yandex.ru?subject=Запрос%20наличия%20цветов">Написать на почту</a>
        </div>
      </div>
    </section>
  );
}
