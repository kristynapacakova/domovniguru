import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LED vs. žárovky – co se skutečně vyplatí? Srovnání 2025",
  description: "Srovnání LED a klasických žárovek: spotřeba, životnost, cena a návratnost investice. Kdy se přechod na LED opravdu vyplatí?",
  alternates: { canonical: "https://domovniguru.cz/blog/led-vs-zarovky" },
  openGraph: { title: "LED vs. žárovky – co se skutečně vyplatí?", description: "Spotřeba, životnost, cena a návratnost. Kompletní srovnání.", url: "https://domovniguru.cz/blog/led-vs-zarovky", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2025-02-01T08:00:00Z", modifiedTime: "2025-03-01T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "LED vs. žárovky – co se skutečně vyplatí?", description: "Spotřeba, životnost, cena a návratnost. Kompletní srovnání 2025." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://domovniguru.cz/blog/led-vs-zarovky#article", "headline": "LED vs. žárovky – co se skutečně vyplatí?", "datePublished": "2025-02-01T08:00:00Z", "dateModified": "2025-03-01T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "inLanguage": "cs", "keywords": ["LED žárovky", "úsporné žárovky", "LED vs žárovka", "spotřeba LED", "návratnost LED"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Elektrika & osvětlení", "item": "https://domovniguru.cz/blog/kategorie/elektrika" }, { "@type": "ListItem", "position": 4, "name": "LED vs. žárovky", "item": "https://domovniguru.cz/blog/led-vs-zarovky" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Kolik ušetří LED žárovka oproti klasické?", "acceptedAnswer": { "@type": "Answer", "text": "LED žárovka 9 W nahrazuje klasickou 60 W. Při 4 hodinách svícení denně a ceně 6 Kč/kWh ušetří přibližně 380 Kč ročně na jedné žárovce." } }, { "@type": "Question", "name": "Za jak dlouho se LED žárovka zaplatí?", "acceptedAnswer": { "@type": "Answer", "text": "Kvalitní LED žárovka za 100–150 Kč se zaplatí za 3–6 měsíců při běžném používání. Poté je každý rok čistá úspora." } }] }] };

const RELATED = [
  { title: "Jak vyměnit vypínač – krok za krokem", href: "/blog/jak-vymenit-vypinac", read: "4 min" },
  { title: "Jak připravit dům na zimu – checklist", href: "/blog/jak-pripravit-dum-na-zimu", read: "5 min" },
  { title: "Jak odvzdušnit radiátory", href: "/blog/jak-odvzdusit-radiatory", read: "3 min" },
  { title: "Jak utěsnit okna na zimu", href: "/blog/jak-utesnit-okna-na-zimu", read: "4 min" },
];

export default function ArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="wrap">
        <div className="article-layout">
          <article className="article-body">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Domů</Link><span className="breadcrumb-sep">/</span>
              <Link href="/blog">Blog</Link><span className="breadcrumb-sep">/</span>
              <Link href="/blog/kategorie/elektrika">Elektrika & osvětlení</Link><span className="breadcrumb-sep">/</span>
              <span>LED vs. žárovky</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">💡 Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 4 min čtení</span>
              </div>
              <h1 className="article-h1">LED vs. žárovky – co se skutečně vyplatí?</h1>
              <p className="article-lead">LED žárovky jsou dražší na nákup, ale levnější na provoz. Každý to ví – ale kolik přesně ušetříš? A kdy se přechod skutečně vyplatí? Tenhle článek ti to spočítá konkrétně.</p>
              <div className="article-meta-row"><span>Aktualizováno: 1. března 2025</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#porovnani">Základní srovnání</a></li>
                <li><a href="#uspory">Kolik ušetříš – konkrétní čísla</a></li>
                <li><a href="#navratnost">Návratnost investice</a></li>
                <li><a href="#jak-vybrat">Jak vybrat správnou LED žárovku</a></li>
                <li><a href="#typy">Typy LED žárovek</a></li>
                <li><a href="#mýty">Mýty o LED žárovkách</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="porovnani">
              <h2>Základní srovnání: LED vs. klasická žárovka</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Vlastnost</th><th>LED žárovka</th><th>Klasická žárovka</th><th>Úsporná (CFL)</th></tr></thead>
                  <tbody>
                    <tr><td>Příkon (náhrada 60 W)</td><td>8–10 W</td><td>60 W</td><td>12–15 W</td></tr>
                    <tr><td>Životnost</td><td>15 000–25 000 hod.</td><td>1 000 hod.</td><td>6 000–10 000 hod.</td></tr>
                    <tr><td>Cena žárovky</td><td>80–200 Kč</td><td>20–40 Kč</td><td>60–120 Kč</td></tr>
                    <tr><td>Rozsvícení</td><td>Okamžité</td><td>Okamžité</td><td>Pomalé (10–30 s)</td></tr>
                    <tr><td>Stmívatelnost</td><td>Ano (speciální typy)</td><td>Ano</td><td>Většinou ne</td></tr>
                    <tr><td>Teplo</td><td>Minimální</td><td>Vysoké (95 % teplo)</td><td>Střední</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="uspory">
              <h2>Kolik ušetříš – konkrétní čísla</h2>
              <p>Vezměme reálný příklad: nahrazení jedné klasické žárovky 60 W za LED 9 W při průměrné ceně elektřiny 6 Kč/kWh a 4 hodinách svícení denně.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th></th><th>Klasická 60 W</th><th>LED 9 W</th><th>Úspora</th></tr></thead>
                  <tbody>
                    <tr><td>Spotřeba / den</td><td>0,24 kWh</td><td>0,036 kWh</td><td>0,204 kWh</td></tr>
                    <tr><td>Náklady / den</td><td>1,44 Kč</td><td>0,22 Kč</td><td>1,22 Kč</td></tr>
                    <tr><td>Náklady / rok</td><td>526 Kč</td><td>79 Kč</td><td><strong>447 Kč</strong></td></tr>
                    <tr><td>Náklady / 10 let</td><td>5 260 Kč</td><td>790 Kč</td><td><strong>4 470 Kč</strong></td></tr>
                  </tbody>
                </table>
              </div>
              <p>A to je jen jedna žárovka. Průměrná domácnost má 15–25 žárovek. Při kompletní výměně na LED tedy ušetříš <strong>5 000–8 000 Kč ročně</strong> na elektřině.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Největší úsporu přinesou výměny v místnostech, kde svítíš nejvíce – kuchyně, obývák, pracovna. Sklep nebo spíž se tolik nevyplatí.</div>
            </section>

            <section id="navratnost">
              <h2>Návratnost investice</h2>
              <p>Kvalitní LED žárovka stojí 100–150 Kč. Při úspoře 447 Kč ročně se zaplatí za <strong>3–4 měsíce</strong>. Po zbytek své životnosti (15–25 let) už jen šetří.</p>
              <p>Navíc klasická žárovka vydrží jen ~1 000 hodin, zatímco LED vydrží 15 000–25 000 hodin. Za dobu životnosti jedné LED žárovky bys vyměnil 15–25 klasických žárovek. Náklady na žárovky samotné: 300–1000 Kč za klasické vs. 150 Kč za jednu LED.</p>
              <div className="article-tip"><strong>💡 Nekupuj nejlevnější LED žárovky za 30–50 Kč.</strong> Levné LED mají kratší životnost (2 000–5 000 hodin) a horší světelné parametry. Investuj do značkových žárovek (Philips, OSRAM, Ikea Tradfri) za 80–150 Kč.</div>
            </section>

            <section id="jak-vybrat">
              <h2>Jak vybrat správnou LED žárovku</h2>
              <h3>Lumeny, ne watty</h3>
              <p>Klasické žárovky se označovaly watty (příkon). LED žárovky se porovnávají lumeny (světelný tok). Přehled:</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Klasická žárovka</th><th>Lumeny</th><th>LED náhrada</th></tr></thead>
                  <tbody>
                    <tr><td>25 W</td><td>250 lm</td><td>3–4 W LED</td></tr>
                    <tr><td>40 W</td><td>470 lm</td><td>5–6 W LED
