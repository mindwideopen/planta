"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --ink: #282c2f;
    --muted: #687176;
    --paper: #fcfbf7;
    --surface: #ffffff;
    --surface-soft: #f1f4ef;
    --blue: #e7f1f7;
    --cream: #f7efe4;
    --lilac: #e8deec;
    --green: #4f765f;
    --green-strong: #294837;
    --lime: #e3e8cf;
    --wine: #7a4052;
    --line: #dfe1de;
    --shadow: 0 18px 50px rgba(40, 44, 47, 0.08);
    --radius-sm: 8px;
    --radius: 12px;
    --radius-lg: 20px;
    --container: min(100% - 48px, 1206px);
  }

  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; color: var(--ink); background: var(--paper); font-family: var(--font-sans), Arial, sans-serif; font-size: 16px; line-height: 1.65; text-rendering: optimizeLegibility; }
  img { display: block; max-width: 100%; }
  a { color: inherit; text-decoration-thickness: 1px; text-underline-offset: 0.2em; }
  button, input, select, textarea { font: inherit; }
  button, a { -webkit-tap-highlight-color: transparent; }
  :focus-visible { outline: 3px solid var(--wine); outline-offset: 3px; }
  h1, h2, h3, p { margin-top: 0; }
  h1, h2 { font-family: var(--font-display), Georgia, serif; font-weight: 400; line-height: 1.13; letter-spacing: -0.025em; }
  h1 { font-size: clamp(2.75rem, 5vw, 4.9rem); }
  h2 { font-size: clamp(2.1rem, 3.7vw, 3.45rem); }
  h3 { font-size: 1.12rem; line-height: 1.35; }
  ::selection { color: #fff; background: var(--wine); }

  .skip-link { position: fixed; z-index: 1000; top: 10px; left: 10px; transform: translateY(-150%); padding: 10px 16px; border-radius: 8px; color: #fff; background: var(--green-strong); }
  .skip-link:focus { transform: translateY(0); }
  .sr-only { position: absolute !important; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
  .container { width: var(--container); margin-inline: auto; }
  .eyebrow { display: inline-flex; align-items: center; gap: 9px; margin-bottom: 20px; color: var(--wine); font-size: .72rem; font-weight: 800; letter-spacing: .16em; text-transform: uppercase; }
  .eyebrow::before { content: "✦"; font-size: .68rem; line-height: 1; }
  .section { padding: clamp(76px, 8vw, 112px) 0; }
  .section--compact { padding: clamp(52px, 7vw, 88px) 0; }
  .section--green { color: #f7f6f1; background: var(--green-strong); }
  .section--soft { background: var(--surface-soft); }
  .section--blue { background: var(--blue); }
  .section--cream { background: var(--cream); }
  .section--intro { background: #fff; }
  .section-heading { display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(260px, .65fr); gap: 48px; align-items: end; margin-bottom: 48px; }
  .section-heading h2 { margin-bottom: 0; }
  .section-heading p { max-width: 560px; margin-bottom: 5px; color: var(--muted); }
  .section-heading--center { display: flex; max-width: 760px; flex-direction: column; align-items: center; gap: 20px; margin-inline: auto; margin-bottom: clamp(48px, 6vw, 72px); text-align: center; }
  .section-heading--center p { max-width: 650px; margin: 0; }
  .section-action { display: flex; justify-content: center; margin-top: 44px; }
  .section--green .section-heading p { color: #c7d4cc; }
  .button { display: inline-flex; min-height: 50px; align-items: center; justify-content: center; gap: 10px; padding: 13px 22px; border: 1px solid transparent; border-radius: 999px; font-weight: 800; line-height: 1.15; text-decoration: none; transition: transform .2s ease, background .2s ease, color .2s ease, border-color .2s ease; cursor: pointer; }
  .button:hover { transform: translateY(-2px); }
  .button--primary { color: #fff; background: var(--wine); }
  .button--primary:hover { background: #721c34; }
  .button--light { color: var(--green-strong); background: #fff; }
  .button--outline { color: inherit; border-color: currentColor; background: transparent; }
  .button--soft { color: var(--green-strong); background: var(--lime); }
  .button--dark { color: #fff; background: var(--ink); }
  .button--dark:hover { background: #0f1112; }
  .button--ghost { color: var(--ink); border-color: rgba(40,44,47,.45); background: rgba(255,255,255,.22); }
  .text-link { display: inline-flex; gap: 8px; align-items: center; font-weight: 800; text-decoration: none; }
  .text-link::after { content: "→"; transition: transform .2s ease; }
  .text-link:hover::after { transform: translateX(4px); }

  .utility-bar { color: #fff; background: var(--ink); font-size: .68rem; letter-spacing: .04em; }
  .utility-bar__inner { min-height: 28px; display: flex; align-items: center; justify-content: space-between; gap: 20px; }
  .utility-bar__note { display: flex; gap: 8px; align-items: center; }
  .utility-bar a { font-weight: 700; text-decoration: none; }
  .site-header { position: sticky; z-index: 100; top: 0; border-bottom: 1px solid rgba(40,44,47,.09); background: rgba(255,255,255,.95); backdrop-filter: blur(18px); }
  .site-header__inner { min-height: 72px; display: grid; grid-template-columns: auto 1fr auto; gap: 30px; align-items: center; }
  .brand { display: inline-flex; align-items: center; gap: 10px; color: var(--ink); text-decoration: none; }
  .brand__mark { width: 34px; height: 34px; display: grid; place-items: center; border-radius: 50% 50% 50% 12%; color: #fff; background: var(--ink); transform: rotate(-6deg); font-family: var(--font-display), Georgia, serif; font-size: 1.15rem; }
  .brand__name { display: grid; font-family: var(--font-display), Georgia, serif; font-size: 1.35rem; line-height: .9; letter-spacing: -.04em; }
  .brand__caption { margin-top: 5px; font-family: var(--font-sans), Arial, sans-serif; font-size: .58rem; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }
  .main-nav { display: flex; align-items: center; justify-content: center; gap: 28px; }
  .main-nav a { padding: 10px 0; color: var(--ink); font-size: .76rem; font-weight: 760; letter-spacing: .04em; text-decoration: none; text-transform: uppercase; }
  .main-nav a:hover { color: var(--wine); }
  .main-nav a[aria-current="page"], .mobile-panel a[aria-current="page"] { color: var(--wine); }
  .header-actions { display: flex; align-items: center; gap: 10px; }
  .header-phone { white-space: nowrap; font-size: .88rem; font-weight: 850; text-decoration: none; }
  .menu-toggle { display: none; width: 48px; height: 48px; border: 1px solid var(--line); border-radius: 50%; color: var(--ink); background: transparent; cursor: pointer; }
  .mobile-panel { display: none; }

  .hero { position: relative; min-height: min(750px, calc(100svh - 100px)); display: grid; place-items: center; overflow: hidden; color: var(--ink); background: var(--lilac); }
  .hero__media { position: absolute; inset: 0; }
  .hero__media img { width: 100%; height: 100%; object-fit: cover; object-position: center; filter: saturate(.72) brightness(1.16); opacity: .52; }
  .hero__media::after { position: absolute; inset: 0; content: ""; background: linear-gradient(90deg, rgba(232,222,236,.74), rgba(244,236,239,.56), rgba(232,222,236,.72)), linear-gradient(0deg, rgba(255,255,255,.18), rgba(255,255,255,.12)); }
  .hero__content { position: relative; z-index: 1; display: flex; max-width: 820px; flex-direction: column; align-items: center; padding: clamp(76px, 11vh, 116px) 0 56px; text-align: center; }
  .hero__kicker { margin-bottom: 22px; font-size: .73rem; font-weight: 800; letter-spacing: .16em; text-transform: uppercase; }
  .hero h1 { max-width: 800px; margin-bottom: 24px; text-wrap: balance; }
  .hero__lead { max-width: 610px; margin-bottom: 32px; color: #454c50; font-size: clamp(1rem, 1.5vw, 1.15rem); }
  .hero__actions { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; margin-bottom: 52px; }
  .hero__proof { width: 100%; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); margin: 0; padding: 0; border-top: 1px solid rgba(40,44,47,.28); border-bottom: 1px solid rgba(40,44,47,.28); list-style: none; }
  .hero__proof li { padding: 14px 18px; border-right: 1px solid rgba(40,44,47,.2); }
  .hero__proof li:last-child { border-right: 0; }
  .hero__proof strong { display: block; font-size: .78rem; }
  .hero__proof span { color: #586166; font-size: .68rem; }

  .category-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 24px; align-items: stretch; }
  .category-card { position: relative; min-height: 390px; grid-column: span 4; display: flex; align-items: flex-end; overflow: hidden; border-radius: 0; color: #fff; background: var(--green); text-decoration: none; box-shadow: none; }
  .category-card--1, .category-card--5 { grid-column: span 5; }
  .category-card--2, .category-card--4 { grid-column: span 3; }
  .category-card__image { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; transition: transform .55s ease; }
  .category-card:hover .category-card__image { transform: scale(1.035); }
  .category-card::after { position: absolute; inset: 0; content: ""; background: linear-gradient(0deg, rgba(26,28,30,.82), rgba(26,28,30,.02) 68%); }
  .category-card__content { position: relative; z-index: 1; width: 100%; padding: 24px; }
  .category-card__content span { display: block; margin-top: 6px; color: #d6e2da; font-size: .88rem; }
  .category-card h3 { margin-bottom: 0; font-family: var(--font-display), Georgia, serif; font-size: 1.7rem; font-weight: 400; }
  .category-card--plain { color: var(--ink); background: #e4e6d4; box-shadow: none; }
  .category-card--plain::after { background: linear-gradient(0deg, rgba(240,241,229,.96), rgba(240,241,229,.2)); }
  .category-card--plain .category-card__content span { color: #52665c; }

  .feature-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 28px; }
  .feature { min-height: 220px; padding: 28px 12px 0; border-top: 1px solid var(--ink); text-align: center; }
  .feature__number { width: 54px; height: 54px; display: grid; place-items: center; margin: 0 auto 30px; border: 1px solid var(--ink); border-radius: 50%; color: var(--ink); font-family: var(--font-display), Georgia, serif; font-size: 1rem; }
  .feature p { margin-bottom: 0; color: var(--muted); font-size: .86rem; }

  .arrival-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
  .product-card { overflow: hidden; border: 0; border-radius: 0; background: transparent; }
  .product-card__media { position: relative; aspect-ratio: .74; overflow: hidden; background: #dce5de; }
  .product-card__media img { width: 100%; height: 100%; object-fit: cover; transition: transform .4s ease; }
  .product-card:hover .product-card__media img { transform: scale(1.025); }
  .product-card__badge { position: absolute; top: 12px; left: 12px; padding: 6px 10px; border-radius: 999px; color: var(--ink); background: rgba(255,255,255,.86); font-size: .66rem; font-weight: 850; }
  .product-card__body { padding: 16px 0 0; }
  .product-card__meta { display: flex; justify-content: space-between; gap: 12px; margin-bottom: 8px; color: var(--muted); font-size: .75rem; }
  .product-card h3 { margin-bottom: 8px; font-size: 1.16rem; }
  .product-card p { min-height: 46px; margin-bottom: 12px; color: var(--muted); font-size: .82rem; }
  .product-card__action { display: flex; align-items: center; justify-content: space-between; gap: 14px; padding-top: 16px; border-top: 1px solid var(--line); }
  .product-card__action span { color: var(--wine); font-size: .78rem; font-weight: 800; }

  .split { display: grid; grid-template-columns: minmax(0, 1fr) minmax(360px, .85fr); gap: clamp(40px, 8vw, 110px); align-items: center; }
  .split__copy p { max-width: 650px; color: var(--muted); }
  .split__actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 28px; }
  .editorial-split { display: grid; grid-template-columns: minmax(360px, 1.05fr) minmax(340px, .8fr); gap: clamp(54px, 8vw, 112px); align-items: center; }
  .editorial-collage { position: relative; min-height: 610px; }
  .editorial-collage__large, .editorial-collage__small { position: absolute; overflow: hidden; background: var(--surface-soft); }
  .editorial-collage__large { inset: 0 18% 9% 0; }
  .editorial-collage__small { right: 0; bottom: 0; width: 44%; height: 43%; border: 14px solid var(--paper); }
  .editorial-collage img { object-fit: cover; }
  .editorial-copy > p { color: var(--muted); }
  .editorial-list { display: grid; gap: 0; margin: 30px 0; padding: 0; list-style: none; }
  .editorial-list li { display: grid; grid-template-columns: 38px 1fr; gap: 12px; padding: 14px 0; border-top: 1px solid var(--line); font-size: .9rem; }
  .editorial-list li:last-child { border-bottom: 1px solid var(--line); }
  .editorial-list span { color: var(--wine); font-family: var(--font-display), Georgia, serif; }
  .warehouse-visual { position: relative; min-height: 520px; overflow: hidden; border-radius: var(--radius-lg); background: #dce5de; }
  .warehouse-visual > img { width: 100%; height: 100%; object-fit: cover; }
  .warehouse-visual__note { position: absolute; z-index: 1; right: 20px; bottom: 20px; left: 20px; padding: 22px; border-radius: var(--radius-sm); color: #fff; background: rgba(16,45,33,.9); backdrop-filter: blur(8px); }
  .warehouse-visual__note strong { display: block; margin-bottom: 4px; font-family: var(--font-display), Georgia, serif; font-size: 1.3rem; font-weight: 400; }
  .steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; border: 0; border-radius: 0; overflow: visible; background: transparent; }
  .step { padding: 28px 26px; border-top: 1px solid var(--ink); background: transparent; }
  .step__index { display: inline-grid; width: 38px; height: 38px; place-items: center; margin-bottom: 42px; border: 1px solid var(--ink); border-radius: 50%; color: var(--ink); background: transparent; font-weight: 800; }
  .step p { margin-bottom: 0; color: var(--muted); font-size: .9rem; }

  .location-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
  .location-card { padding: clamp(30px, 4vw, 46px); border-radius: 0; background: rgba(255,255,255,.78); box-shadow: none; }
  .location-card__type { display: inline-block; margin-bottom: 34px; color: var(--wine); font-size: .7rem; font-weight: 850; letter-spacing: .12em; text-transform: uppercase; }
  .location-card address { margin-bottom: 24px; font-style: normal; }
  .location-card p { color: var(--muted); }
  .location-card__links { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 28px; }

  .cta-band { position: relative; overflow: hidden; padding: clamp(86px, 11vw, 150px) 0; color: #fff; background: linear-gradient(rgba(28,31,33,.72), rgba(28,31,33,.76)), url('/images/category-roses.webp') center 54% / cover; }
  .cta-band::after { position: absolute; inset: 22px; border: 1px solid rgba(255,255,255,.32); content: ""; pointer-events: none; }
  .cta-band__inner { position: relative; z-index: 1; display: grid; grid-template-columns: 1fr auto; gap: 50px; align-items: center; }
  .cta-band h2 { max-width: 790px; margin-bottom: 14px; }
  .cta-band p { max-width: 650px; margin-bottom: 0; color: #eef0ee; }

  .page-hero { padding: clamp(70px, 10vw, 122px) 0 68px; color: var(--ink); background: var(--blue); }
  .breadcrumbs { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; margin-bottom: 42px; color: #667078; font-size: .78rem; }
  .breadcrumbs a { color: inherit; }
  .breadcrumbs span[aria-current] { color: var(--ink); }
  .page-hero h1 { max-width: 960px; margin-bottom: 22px; }
  .page-hero__lead { max-width: 760px; margin-bottom: 0; color: #596368; font-size: 1.08rem; }
  .catalog-layout { display: grid; grid-template-columns: 250px 1fr; gap: 40px; align-items: start; }
  .catalog-nav { position: sticky; top: 126px; padding: 24px; border: 1px solid var(--line); border-radius: var(--radius); background: var(--surface); }
  .catalog-nav h2 { margin-bottom: 18px; font-family: var(--font-sans), Arial, sans-serif; font-size: .8rem; font-weight: 850; letter-spacing: .08em; text-transform: uppercase; }
  .catalog-nav ul { display: grid; gap: 8px; margin: 0; padding: 0; list-style: none; }
  .catalog-filter { position: absolute; width: 1px; height: 1px; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; }
  .catalog-nav label { width: 100%; display: block; padding: 10px 12px; border-radius: 9px; color: var(--muted); font-size: .88rem; font-weight: 700; text-align: left; cursor: pointer; }
  .catalog-nav label:hover { color: var(--ink); background: var(--surface-soft); }
  .catalog-filter:focus-visible + label { outline: 3px solid var(--wine); outline-offset: 2px; }
  #catalog-filter-all:checked + label { color: #fff; background: var(--ink); }
  .catalog-main .arrival-grid { grid-template-columns: repeat(2, 1fr); }
  .catalog-main__view { display: none; }
  .catalog-main__view--all { display: block; }
  .catalog-main__header { max-width: 760px; margin-bottom: 32px; }
  .catalog-main__header h2 { margin-bottom: 12px; font-size: clamp(2rem, 3.5vw, 3.2rem); }
  .catalog-main__header p { margin-bottom: 0; color: var(--muted); }
  .catalog-note { margin-bottom: 30px; padding: 18px 20px; border-left: 4px solid var(--wine); border-radius: 0 var(--radius-sm) var(--radius-sm) 0; color: #394f45; background: #f1e5e8; font-size: .9rem; }
  .catalog-empty { padding: clamp(30px, 6vw, 64px); border: 1px solid var(--line); background: var(--surface); text-align: center; }
  .catalog-empty p { max-width: 620px; margin: 0 auto 28px; color: var(--muted); }

  .content-grid { display: grid; grid-template-columns: minmax(0, 1fr) minmax(280px, .45fr); gap: 70px; align-items: start; }
  .prose { max-width: 780px; }
  .prose h2 { margin: 58px 0 20px; font-size: clamp(1.75rem, 3vw, 2.7rem); }
  .prose h2:first-child { margin-top: 0; }
  .prose h3 { margin-top: 36px; }
  .prose p, .prose li { color: #565f64; }
  .prose ul, .prose ol { padding-left: 1.3em; }
  .side-card { position: sticky; top: 126px; padding: 28px; border-radius: var(--radius); color: #fff; background: var(--ink); }
  .side-card h2 { font-family: var(--font-sans), Arial, sans-serif; font-size: 1.2rem; font-weight: 800; letter-spacing: 0; }
  .side-card p { color: #c8d6ce; }
  .side-card .button { width: 100%; margin-top: 12px; }
  .fact-list { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 44px; }
  .fact { padding: 24px; border: 1px solid var(--line); border-radius: var(--radius-sm); background: var(--surface); }
  .fact strong { display: block; margin-bottom: 8px; color: var(--wine); font-family: var(--font-display), Georgia, serif; font-size: 1.8rem; font-weight: 400; }
  .fact span { color: var(--muted); font-size: .86rem; }

  .contact-form { display: grid; gap: 16px; margin-top: 32px; }
  .form-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
  .field { display: grid; gap: 7px; }
  .field label { font-size: .82rem; font-weight: 800; }
  .field input, .field textarea, .field select { width: 100%; min-height: 50px; padding: 12px 14px; border: 1px solid #5f7168; border-radius: 10px; color: var(--ink); background: #fff; }
  .field textarea { min-height: 130px; resize: vertical; }
  .field--full { grid-column: 1 / -1; }
  .form-help { margin: 0; color: var(--muted); font-size: .76rem; }

  .gallery-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 18px; }
  .gallery-item { min-height: 330px; grid-column: span 5; margin: 0; overflow: hidden; border-radius: var(--radius); }
  .gallery-item:nth-child(3n+1) { grid-column: span 7; }
  .gallery-item img { width: 100%; height: 100%; object-fit: cover; }

  .site-footer { padding: 70px 0 28px; color: #e1e2df; background: var(--ink); }
  .footer-grid { display: grid; grid-template-columns: 1.3fr .7fr .7fr 1fr; gap: 45px; padding-bottom: 54px; }
  .footer-intro p { max-width: 360px; margin: 24px 0 0; color: #b9bdbe; font-size: .88rem; }
  .footer-title { margin-bottom: 18px; color: #fff; font-size: .78rem; font-weight: 850; letter-spacing: .08em; text-transform: uppercase; }
  .footer-links { display: grid; gap: 10px; margin: 0; padding: 0; list-style: none; }
  .footer-links a { color: #c7cacc; font-size: .85rem; text-decoration: none; }
  .footer-links a:hover { color: #fff; }
  .footer-contact { display: grid; gap: 8px; }
  .footer-contact a { color: #fff; font-weight: 800; text-decoration: none; }
  .footer-contact address { color: #b9bdbe; font-size: .82rem; font-style: normal; }
  .footer-bottom { display: flex; justify-content: space-between; gap: 20px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,.12); color: #989ea1; font-size: .75rem; }

  @media (max-width: 1050px) {
    .main-nav, .header-phone { display: none; }
    .site-header__inner { grid-template-columns: auto 1fr auto; }
    .menu-toggle { display: grid; place-items: center; }
    .mobile-panel { position: absolute; z-index: 99; top: 100%; right: 0; left: 0; display: grid; gap: 6px; padding: 24px max(20px, calc((100% - 1240px) / 2)); border-bottom: 1px solid var(--line); background: var(--paper); box-shadow: var(--shadow); }
    .mobile-panel[hidden] { display: none; }
    .mobile-panel a { min-height: 46px; display: flex; align-items: center; padding: 8px 0; font-weight: 800; text-decoration: none; }
    .feature-grid { grid-template-columns: repeat(2, 1fr); }
    .arrival-grid { grid-template-columns: repeat(2, 1fr); }
    .footer-grid { grid-template-columns: 1.2fr 1fr 1fr; }
    .footer-intro { grid-column: 1 / -1; }
  }

  @media (max-width: 820px) {
    :root { --container: min(100% - 28px, 1240px); }
    .utility-bar__inner { justify-content: center; }
    .utility-bar__note:last-child { display: none; }
    .site-header__inner { min-height: 70px; }
    .section-heading, .split, .editorial-split, .content-grid, .cta-band__inner { grid-template-columns: 1fr; gap: 36px; }
    .category-card, .category-card:first-child, .category-card:nth-child(2) { grid-column: span 6; min-height: 340px; }
    .category-card:last-child { grid-column: 1 / -1; }
    .hero { min-height: 720px; }
    .hero__content { padding-bottom: 46px; }
    .hero__proof { grid-template-columns: 1fr; }
    .hero__proof li { padding: 10px 15px; border-right: 0; border-bottom: 1px solid rgba(40,44,47,.16); }
    .hero__proof li:last-child { border-bottom: 0; }
    .hero__proof span { display: none; }
    .editorial-collage { min-height: 560px; }
    .steps, .location-grid, .catalog-layout { grid-template-columns: 1fr; }
    .catalog-nav { position: static; }
    .content-grid { gap: 40px; }
    .side-card { position: static; }
    .gallery-item, .gallery-item:nth-child(3n+1) { grid-column: span 6; }
    .fact-list { grid-template-columns: 1fr; }
  }

  @media (max-width: 620px) {
    h1 { font-size: clamp(2.45rem, 13vw, 3.6rem); }
    h2 { font-size: clamp(1.9rem, 10vw, 2.8rem); }
    .section { padding: 70px 0; }
    .button { width: 100%; }
    .hero__actions { display: grid; }
    .hero__media::after { background: linear-gradient(rgba(232,222,236,.7), rgba(244,236,239,.62)); }
    .category-grid, .arrival-grid, .catalog-main .arrival-grid, .feature-grid, .location-grid { grid-template-columns: 1fr; }
    .category-card, .category-card:first-child, .category-card:nth-child(2), .category-card:last-child { grid-column: 1; min-height: 330px; }
    .feature { min-height: auto; }
    .feature__number { margin-bottom: 26px; }
    .steps { display: grid; border: 0; gap: 12px; background: transparent; }
    .step { border: 1px solid var(--line); border-radius: var(--radius-sm); }
    .step__index { margin-bottom: 28px; }
    .warehouse-visual { min-height: 420px; }
    .editorial-collage { min-height: 440px; }
    .editorial-collage__large { inset: 0 12% 10% 0; }
    .editorial-collage__small { width: 46%; height: 42%; border-width: 8px; }
    .footer-grid { grid-template-columns: 1fr 1fr; }
    .footer-intro, .footer-contact { grid-column: 1 / -1; }
    .footer-bottom { display: grid; }
    .form-grid { grid-template-columns: 1fr; }
    .field--full { grid-column: auto; }
    .gallery-item, .gallery-item:nth-child(3n+1) { grid-column: 1 / -1; min-height: 280px; }
  }

  @media (max-width: 390px) {
    .header-actions .button { display: none; }
  }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important; }
  }
`;
