"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { contacts, navItems } from "../data/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div className="utility-bar">
        <div className="container utility-bar__inner">
          <span className="utility-bar__note">Свежие поставки · оптом и в розницу</span>
          <span className="utility-bar__note">Калининград и область · <Link href="/kontakty">2 пункта получения</Link></span>
        </div>
      </div>
      <header className="site-header">
        <div className="container site-header__inner">
          <Link className="brand" href="/" aria-label="Планта — на главную">
            <span className="brand__mark" aria-hidden="true">П</span>
            <span className="brand__name">Планта<span className="brand__caption">магазин-склад цветов</span></span>
          </Link>
          <nav className="main-nav" aria-label="Основная навигация">
            {navItems.map((item) => {
              const isCurrent = pathname === item.href || (item.href === "/catalog" && pathname.startsWith("/catalog/"));
              return <Link key={item.href} href={item.href} aria-current={isCurrent ? "page" : undefined}>{item.label}</Link>;
            })}
          </nav>
          <div className="header-actions">
            <a className="header-phone" href={contacts.phones[0].href}>{contacts.phones[0].display}</a>
            <Link className="button button--dark" href="/catalog">Смотреть ассортимент</Link>
            <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Закрыть меню" : "Открыть меню"} onClick={() => setOpen((value) => !value)}>
              <span aria-hidden="true">{open ? "×" : "☰"}</span>
            </button>
          </div>
        </div>
        <nav id="mobile-menu" className="mobile-panel" aria-label="Мобильная навигация" hidden={!open} onKeyDown={(event) => { if (event.key === "Escape") setOpen(false); }}>
          {navItems.map((item) => {
            const isCurrent = pathname === item.href || (item.href === "/catalog" && pathname.startsWith("/catalog/"));
            return <Link key={item.href} href={item.href} aria-current={isCurrent ? "page" : undefined} onClick={() => setOpen(false)}>{item.label}</Link>;
          })}
          <a href={contacts.phones[0].href}>Позвонить: {contacts.phones[0].display}</a>
        </nav>
      </header>
    </>
  );
}
