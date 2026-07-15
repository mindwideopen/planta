import Link from "next/link";
import { PageHero } from "../components/page-elements";
import { createPageMetadata } from "../lib/metadata";

export const metadata = createPageMetadata({
  title: "Цветы оптом для флористов и бизнеса",
  description: "Условия работы для цветочных магазинов, студий и декораторов: поставки, упаковка, документы, самовывоз и доставка.",
  path: "/optovym-klientam",
});

export default function WholesalePage() {
  return (
    <>
      <PageHero eyebrow="Для бизнеса" title="Оптовая закупка без лишней бюрократии" lead="Помогаем цветочным магазинам, студиям, декораторам и корпоративным клиентам собирать регулярные и проектные заказы." items={[{ label: "Для бизнеса" }]} />
      <section className="section">
        <div className="container content-grid">
          <div className="prose">
            <h2>Что важно профессиональному покупателю</h2>
            <p>Срезанные цветы требуют точной координации. Поэтому до подтверждения заказа менеджер согласует наименование, оттенок, длину или размер, количество в упаковке, доступность и дату получения.</p>
            <div className="fact-list"><div className="fact"><strong>Склад</strong><span>холодное хранение и удобная погрузка</span></div><div className="fact"><strong>Заказ</strong><span>партиями и упаковками по поставке</span></div><div className="fact"><strong>Документы</strong><span>условия для юридических лиц</span></div></div>
            <h2>Как начать работу</h2>
            <ol><li>Сообщите сферу бизнеса, нужные категории и примерный объём.</li><li>Менеджер уточнит доступный ассортимент и коммерческие условия.</li><li>После согласования заказ подготовят к самовывозу или доставке.</li></ol>
            <h2>Запросить условия</h2>
            <p>Форма откроет письмо в вашей почтовой программе. Не отправляйте через неё платёжные данные или документы с чувствительной информацией.</p>
            <form className="contact-form" action="mailto:svetaooo@yandex.ru" method="post" encType="text/plain">
              <div className="form-grid">
                <div className="field"><label htmlFor="company">Компания или имя</label><input id="company" name="Компания" autoComplete="organization" required /></div>
                <div className="field"><label htmlFor="phone">Телефон</label><input id="phone" name="Телефон" type="tel" autoComplete="tel" required /></div>
                <div className="field"><label htmlFor="segment">Кто вы</label><select id="segment" name="Тип клиента" defaultValue=""><option value="" disabled>Выберите вариант</option><option>Цветочный магазин</option><option>Флорист / студия</option><option>Декоратор / event</option><option>Корпоративный клиент</option><option>Другое</option></select></div>
                <div className="field"><label htmlFor="email">Email</label><input id="email" name="Email" type="email" autoComplete="email" /></div>
                <div className="field field--full"><label htmlFor="request">Что требуется</label><textarea id="request" name="Запрос" placeholder="Категории, количество, желаемая дата" required /></div>
              </div>
              <p className="form-help">Отправляя письмо, вы соглашаетесь на обработку данных для ответа на запрос. <Link href="/politika-konfidencialnosti">Политика конфиденциальности</Link>.</p>
              <button className="button button--primary" type="submit">Открыть письмо с запросом</button>
            </form>
          </div>
          <aside className="side-card"><h2>Нужен ответ быстрее?</h2><p>Позвоните на основной склад и сразу назовите категорию, количество и нужную дату.</p><a className="button button--light" href="tel:+79114501095">+7 (911) 450-10-95</a><Link className="button button--outline" href="/catalog">Открыть каталог</Link></aside>
        </div>
      </section>
    </>
  );
}
