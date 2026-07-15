import Image from "next/image";
import { assortmentExamples, categories } from "../data/site";

const filterStyles = categories.map((category) => {
  const filterId = `catalog-filter-${category.slug}`;
  const viewClass = `.catalog-main__view--${category.slug}`;
  const productClass = `.catalog-product--${category.slug}`;

  return `
    .catalog-layout:has(#${filterId}:checked) .catalog-main__view { display: none; }
    .catalog-layout:has(#${filterId}:checked) ${viewClass} { display: block; }
    .catalog-layout:has(#${filterId}:checked) .catalog-product:not(${productClass}) { display: none; }
    #${filterId}:checked + label { color: #fff; background: var(--ink); }
  `;
}).join("");

export function CatalogBrowser() {
  return (
    <div className="container catalog-layout">
      <style dangerouslySetInnerHTML={{ __html: filterStyles }} />
      <aside className="catalog-nav" aria-label="Категории каталога">
        <h2 id="catalog-filter-title">Категории</h2>
        <ul aria-labelledby="catalog-filter-title">
          <li>
            <input className="catalog-filter" type="radio" name="catalog-filter" id="catalog-filter-all" defaultChecked />
            <label htmlFor="catalog-filter-all">Весь ассортимент</label>
          </li>
          {categories.map((category) => (
            <li key={category.slug}>
              <input className="catalog-filter" type="radio" name="catalog-filter" id={`catalog-filter-${category.slug}`} />
              <label htmlFor={`catalog-filter-${category.slug}`}>{category.name}</label>
            </li>
          ))}
        </ul>
      </aside>

      <div className="catalog-main" id="catalog-content">
        <div className="catalog-main__view catalog-main__view--all">
          <div className="catalog-main__header">
            <span className="eyebrow">Каталог</span>
            <h2>Весь ассортимент</h2>
            <p>Основные позиции из разных направлений каталога. Выберите категорию слева, чтобы отфильтровать ассортимент без перехода на другую страницу.</p>
          </div>
        </div>
        {categories.map((category) => {
          const hasProducts = assortmentExamples.some((item) => item.categorySlugs.includes(category.slug));
          return (
            <div className={`catalog-main__view catalog-main__view--${category.slug}`} key={category.slug}>
              <div className="catalog-main__header">
                <span className="eyebrow">Категория</span>
                <h2>{category.name}</h2>
                <p>{category.description}</p>
              </div>
              {!hasProducts && <div className="catalog-empty"><h3>Позиции доступны по запросу</h3><p>Ассортимент этой категории зависит от ближайшей поставки. Сообщите менеджеру, что именно требуется.</p><a className="button button--dark" href={`mailto:svetaooo@yandex.ru?subject=${encodeURIComponent(`Запрос категории: ${category.name}`)}`}>Запросить наличие</a></div>}
            </div>
          );
        })}

        <div className="catalog-note"><strong>Актуальность:</strong> цены и наличие зависят от поставки. Мы показываем их только после подтверждения менеджером — без устаревших остатков и ложных обещаний.</div>
        <div className="arrival-grid">
          {assortmentExamples.map((item) => (
            <article className={`product-card catalog-product ${item.categorySlugs.map((slug) => `catalog-product--${slug}`).join(" ")}`} key={item.name}>
              <div className="product-card__media"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 620px) 100vw, (max-width: 820px) 50vw, 38vw" /><span className="product-card__badge">Наличие по запросу</span></div>
              <div className="product-card__body"><div className="product-card__meta"><span>{item.category}</span><span>{item.origin}</span></div><h3>{item.name}</h3><p>{item.note}</p><div className="product-card__action"><span>Уточнить упаковку и цену</span><a className="text-link" href={`mailto:svetaooo@yandex.ru?subject=${encodeURIComponent(`Запрос: ${item.name}`)}`}>Запросить</a></div></div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
