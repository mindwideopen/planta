import Image from "next/image";
import { ContactBand, PageHero } from "../../components/page-elements";
import { galleryImages } from "../../data/site";
import { createPageMetadata } from "../../lib/metadata";

export const metadata = createPageMetadata({ title: "Ассортимент — галерея", description: "Иллюстрации основных направлений цветочного ассортимента магазина-склада «Планта».", path: "/o-kompanii/galereya" });

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="О компании" title="Направления ассортимента" lead="Иллюстрации помогают сориентироваться в категориях. Фактический вид товара, оттенок и наличие подтверждаются для каждой поставки." items={[{ label: "О компании", href: "/o-kompanii" }, { label: "Галерея" }]} />
      <section className="section" aria-labelledby="gallery-title"><div className="container"><h2 id="gallery-title" className="sr-only">Иллюстрации цветочного ассортимента</h2><div className="gallery-grid">{galleryImages.map((image) => <figure className="gallery-item" key={image.src}><Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 620px) 100vw, 55vw" /></figure>)}</div></div></section>
      <ContactBand />
    </>
  );
}
