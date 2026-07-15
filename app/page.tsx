import Image from "next/image";
import Link from "next/link";
import { ContactBand } from "./components/page-elements";
import { assortmentExamples, categories, locations } from "./data/site";

const benefits = [
  ["01", "Регулярные поставки", "Ассортимент обновляется вместе с поставками, включая сезонные и редкие позиции."],
  ["02", "Холодное хранение", "Срезанные цветы находятся в профессиональной камере до комплектации заказа."],
  ["03", "Быстрая выдача", "Собираем заказ заранее; у основного склада есть парковка и удобная зона погрузки."],
  ["04", "Опт и розница", "Работаем с флористами, магазинами, компаниями и частными покупателями."],
] as const;

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="home-title">
        <div className="hero__media" aria-hidden="true">
          <Image src="/images/hero-warehouse.webp" alt="" fill loading="eager" fetchPriority="high" sizes="100vw" />
        </div>
        <div className="container hero__content">
          <span className="hero__kicker">Магазин-склад · Калининград</span>
          <h1 id="home-title">Свежие цветы<br />прямо со склада</h1>
          <p className="hero__lead">Срезанные цветы, растения и букеты оптом и в розницу. Поможем узнать наличие, собрать заказ и выбрать удобное получение.</p>
          <div className="hero__actions">
            <Link className="button button--dark" href="/catalog">Смотреть ассортимент</Link>
            <Link className="button button--ghost" href="/optovym-klientam">Условия для бизнеса</Link>
          </div>
          <ul className="hero__proof" aria-label="Ключевые преимущества">
            <li><strong>Прямые поставки</strong><span>из разных стран и регионов</span></li>
            <li><strong>Холодное хранение</strong><span>до комплектации заказа</span></li>
            <li><strong>2 пункта получения</strong><span>в Калининграде и рядом</span></li>
          </ul>
        </div>
      </section>

      <section className="section section--intro" aria-labelledby="benefits-title">
        <div className="container">
          <div className="section-heading section-heading--center">
            <div><span className="eyebrow">Почему Планта</span><h2 id="benefits-title">Цветы — наша специализация.<br />Свежесть — наш стандарт.</h2></div>
            <p>Продумали путь от приёмки поставки и хранения до сборки и выдачи, чтобы вы получали цветы в подходящем состоянии и без лишнего ожидания.</p>
          </div>
          <div className="feature-grid">
            {benefits.map(([number, title, text]) => (
              <article className="feature" key={number}>
                <span className="feature__number" aria-hidden="true">{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--blue" aria-labelledby="categories-title">
        <div className="container">
          <div className="section-heading section-heading--center">
            <div><span className="eyebrow">Основные направления</span><h2 id="categories-title">От классических роз<br />до живых растений</h2></div>
            <p>Наличие меняется ежедневно. На сайте показаны направления ассортимента; конкретные сорта, оттенки и упаковку подтвердит менеджер.</p>
          </div>
          <div className="category-grid">
            {categories.slice(0, 6).map((category, index) => (
              <Link key={category.slug} className={`category-card category-card--${index + 1}`} href={`/catalog/${category.slug}`}>
                <Image className="category-card__image" src={category.image} alt="" fill sizes="(max-width: 620px) 100vw, (max-width: 900px) 50vw, 33vw" />
                <div className="category-card__content"><h3>{category.name}</h3><span>{category.short}</span></div>
              </Link>
            ))}
          </div>
          <div className="section-action"><Link className="button button--dark" href="/catalog">Открыть весь каталог</Link></div>
        </div>
      </section>

      <section className="section" aria-labelledby="wholesale-title">
        <div className="container editorial-split">
          <div className="editorial-collage" aria-hidden="true">
            <div className="editorial-collage__large"><Image src="/images/category-roses.webp" alt="" fill sizes="(max-width: 820px) 70vw, 38vw" /></div>
            <div className="editorial-collage__small"><Image src="/images/category-plants.webp" alt="" fill sizes="(max-width: 820px) 42vw, 22vw" /></div>
          </div>
          <div className="editorial-copy">
            <span className="eyebrow">Для флористов и бизнеса</span>
            <h2 id="wholesale-title">Закупка без лишних шагов</h2>
            <p>Подбираем позиции под формат магазина, мероприятие или регулярную закупку. Заранее согласуем упаковку, срок поставки, документы, доставку и точку получения.</p>
            <ol className="editorial-list">
              <li><span>01</span>Пришлите список и нужную дату</li>
              <li><span>02</span>Получите подтверждение наличия и условий</li>
              <li><span>03</span>Заберите готовый заказ или согласуйте доставку</li>
            </ol>
            <div className="split__actions"><Link className="button button--dark" href="/optovym-klientam">Условия для бизнеса</Link><a className="text-link" href="tel:+79114501095">Обсудить заказ</a></div>
          </div>
        </div>
      </section>

      <section className="section section--cream" aria-labelledby="assortment-title">
        <div className="container">
          <div className="section-heading section-heading--center">
            <div><span className="eyebrow">Пример ассортимента</span><h2 id="assortment-title">Что можно заказать</h2></div>
            <p>Не публикуем условные цены и остатки: свежий товар быстро меняется. Менеджер сообщит актуальное наличие и формат упаковки.</p>
          </div>
          <div className="arrival-grid">
            {assortmentExamples.slice(0, 4).map((item) => (
              <article className="product-card" key={item.name}>
                <div className="product-card__media"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 25vw" /><span className="product-card__badge">По запросу</span></div>
                <div className="product-card__body"><div className="product-card__meta"><span>{item.category}</span><span>{item.origin}</span></div><h3>{item.name}</h3><p>{item.note}</p><a className="text-link" href={`mailto:svetaooo@yandex.ru?subject=${encodeURIComponent(`Наличие: ${item.name}`)}`}>Уточнить наличие</a></div>
              </article>
            ))}
          </div>
          <div className="section-action"><Link className="button button--dark" href="/catalog">Весь ассортимент</Link></div>
        </div>
      </section>

      <section className="section section--compact" aria-labelledby="steps-title">
        <div className="container">
          <div className="section-heading section-heading--center"><div><span className="eyebrow">Как купить</span><h2 id="steps-title">Три понятных шага</h2></div><p>Регистрация не нужна. Начните с каталога или сразу сообщите менеджеру, что вам требуется.</p></div>
          <div className="steps">
            <article className="step"><span className="step__index">1</span><h3>Выберите направление</h3><p>Откройте каталог или отправьте список цветов, оттенков и количества.</p></article>
            <article className="step"><span className="step__index">2</span><h3>Подтвердите заказ</h3><p>Менеджер уточнит упаковку, стоимость, дату поставки и подготовит заказ.</p></article>
            <article className="step"><span className="step__index">3</span><h3>Получите удобно</h3><p>Самовывоз из выбранной точки или согласованная доставка по городу и области.</p></article>
          </div>
        </div>
      </section>

      <section className="section section--blue" aria-labelledby="locations-title">
        <div className="container"><div className="section-heading section-heading--center"><div><span className="eyebrow">Где забрать</span><h2 id="locations-title">Две точки получения</h2></div><p>Перед поездкой подтвердите готовность заказа и график — так мы подготовим всё к вашему приезду.</p></div><div className="location-grid">{locations.map((location) => <article className="location-card" key={location.name}><span className="location-card__type">{location.type}</span><h3>{location.name}</h3><address>{location.address}</address><p>{location.note}</p><div className="location-card__links"><a className="button button--dark" href={location.phone.href}>{location.phone.display}</a><a className="text-link" href={location.map} target="_blank" rel="noreferrer">Построить маршрут</a></div></article>)}</div></div>
      </section>

      <ContactBand />
    </>
  );
}
