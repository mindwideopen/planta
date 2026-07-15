import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactBand, PageHero } from "../../components/page-elements";
import { assortmentExamples, categories } from "../../data/site";
import { createPageMetadata } from "../../lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);
  if (!category) return {};
  return createPageMetadata({
    title: `${category.name} оптом в Калининграде`,
    description: category.description,
    path: `/catalog/${category.slug}`,
    image: category.image,
    imageAlt: category.alt,
  });
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);
  if (!category) notFound();
  const products = assortmentExamples.filter((item) => item.categorySlugs.includes(slug));

  return (
    <>
      <PageHero eyebrow="Категория" title={category.name} lead={category.description} items={[{ label: "Каталог", href: "/catalog" }, { label: category.name }]} />
      <section className="section">
        <div className="container split" style={{ alignItems: "start" }}>
          <div className="warehouse-visual"><Image src={category.image} alt={category.alt} fill sizes="(max-width: 820px) 100vw, 50vw" /></div>
          <div className="split__copy"><span className="eyebrow">Как заказать</span><h2>Уточним поставку под вашу задачу</h2><p>Сообщите вид, цвет, количество, желаемый формат упаковки и дату. Для оптового заказа полезно указать сферу бизнеса и удобный пункт получения.</p><div className="fact-list"><div className="fact"><strong>01</strong><span>Запрос ассортимента</span></div><div className="fact"><strong>02</strong><span>Подтверждение цены</span></div><div className="fact"><strong>03</strong><span>Выдача или доставка</span></div></div><div className="split__actions"><a className="button button--primary" href={`mailto:svetaooo@yandex.ru?subject=${encodeURIComponent(`Запрос категории: ${category.name}`)}`}>Уточнить наличие</a><a className="button button--outline" href="tel:+79114501095">Позвонить</a></div></div>
        </div>
      </section>
      {products.length > 0 && <section className="section section--soft"><div className="container"><div className="section-heading"><div><span className="eyebrow">Ориентиры</span><h2>Примеры позиций</h2></div><p>Не являются обещанием текущего остатка. Перед заказом менеджер подтвердит характеристики.</p></div><div className="arrival-grid">{products.map((item) => <article className="product-card" key={item.name}><div className="product-card__media"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 620px) 100vw, 33vw" /></div><div className="product-card__body"><div className="product-card__meta"><span>{item.category}</span><span>{item.origin}</span></div><h3>{item.name}</h3><p>{item.note}</p><Link className="text-link" href="/kontakty">Связаться</Link></div></article>)}</div></div></section>}
      <ContactBand />
    </>
  );
}
