import Link from "next/link";

export default function NotFound() {
  return <section className="page-hero" style={{ minHeight: "65vh", display: "grid", alignItems: "center" }}><div className="container"><span className="eyebrow" style={{ color: "#dce8a9" }}>404</span><h1>Такой страницы нет</h1><p className="page-hero__lead">Возможно, адрес изменился после обновления сайта.</p><div style={{ marginTop: 30 }}><Link className="button button--light" href="/">На главную</Link></div></div></section>;
}
