import Link from "next/link";
import { contacts, navItems } from "../data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-intro">
            <Link className="brand" href="/" aria-label="Планта — на главную">
              <span className="brand__mark" aria-hidden="true">П</span>
              <span className="brand__name" style={{ color: "#fff" }}>Планта<span className="brand__caption">магазин-склад цветов</span></span>
            </Link>
            <p>Свежие срезанные цветы, растения и букеты для магазинов, флористов, бизнеса и частных покупателей.</p>
          </div>
          <div>
            <div className="footer-title">Покупателям</div>
            <ul className="footer-links">
              <li><Link href="/catalog">Каталог</Link></li>
              <li><Link href="/kak-kupit">Как купить</Link></li>
              <li><Link href="/dostavka-i-oplata">Доставка и оплата</Link></li>
            </ul>
          </div>
          <div>
            <div className="footer-title">Компания</div>
            <ul className="footer-links">
              {navItems.slice(1).map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}
              <li><Link href="/politika-konfidencialnosti">Конфиденциальность</Link></li>
            </ul>
          </div>
          <div className="footer-contact">
            <div className="footer-title">Связаться</div>
            {contacts.phones.map((phone) => <a key={phone.href} href={phone.href}>{phone.display}</a>)}
            <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
            <address>Калининград, ул. Литовский Вал, 21А<br />пос. Прибрежное, ул. Центральная, 1Б</address>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} ООО «Планта и К»</span>
          <span>Информация о наличии и условиях продажи уточняется у менеджера.</span>
        </div>
      </div>
    </footer>
  );
}
