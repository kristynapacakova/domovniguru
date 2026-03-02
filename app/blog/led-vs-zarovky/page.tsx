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
                    <tr><td>40 W</td><td>470 lm</td><td>5–6 W LED</td></tr>
                    <tr><td>60 W</td><td>800 lm</td><td>8–10 W LED</td></tr>
                    <tr><td>75 W</td><td>1 050 lm</td><td>11–13 W LED</td></tr>
                    <tr><td>100 W</td><td>1 400 lm</td><td>14–15 W LED</td></tr>
                  </tbody>
                </table>
              </div>
              <h3>Teplota světla</h3>
              <ul>
                <li><strong>Teplá bílá (2700–3000 K)</strong> – podobná klasické žárovce, příjemná do obývacích pokojů a ložnic</li>
                <li><strong>Neutrální bílá (3500–4000 K)</strong> – přirozené světlo, vhodné do kuchyně a pracovny</li>
                <li><strong>Studená bílá (5000–6500 K)</strong> – ostré světlo, vhodné do garáže nebo dílny</li>
              </ul>
              <h3>Patice</h3>
              <p>Nejčastější patice: E27 (velká závitová), E14 (malá závitová), GU10 (bodovka). Vždy zkontroluj patici staré žárovky před nákupem.</p>
            </section>

            <section id="typy">
              <h2>Typy LED žárovek</h2>
              <ul>
                <li><strong>Standardní LED (tvar A)</strong> – náhrada klasické žárovky, nejvíce rozšířená</li>
                <li><strong>LED reflektory (GU10, MR16)</strong> – bodovky, vhodné do podhledů</li>
                <li><strong>LED svíčky a globe</strong> – dekorativní svítidla, lustry</li>
                <li><strong>LED trubice</strong> – náhrada zářivek v kuchyních a garážích</li>
                <li><strong>Chytré LED (smart bulbs)</strong> – ovládání přes aplikaci, změna barvy světla, Zigbee/WiFi</li>
              </ul>
            </section>

            <section id="mýty">
              <h2>Mýty o LED žárovkách</h2>
              <h3>„LED světlo je studené a nepříjemné"</h3>
              <p>Byl to problém prvních generací LED. Dnešní LED žárovky v teplé bílé (2700 K) mají naprosto stejné světlo jako klasická žárovka. Stačí vybrat správnou teplotu.</p>
              <h3>„LED žárovky se nedají stmívat"</h3>
              <p>Standardní LED se stmívat nedají, ale existují speciální „dimmable" LED žárovky. Musíš také zkontrolovat, zda je tvůj stmívač kompatibilní s LED – starší stmívače pro LED nefungují.</p>
              <h3>„LED žárovky poškozují zrak"</h3>
              <p>Není pravda. LED žárovky s dobrým CRI indexem (Ra &gt; 80) mají kvalitní podání barev a jsou bezpečné. Problém může být jen s velmi levnými LED s výrazným flickeringem (blikáním).</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Kolik ušetří LED žárovka oproti klasické?", a: "LED žárovka 9 W nahrazuje klasickou 60 W. Při 4 hodinách svícení denně a ceně 6 Kč/kWh ušetří přibližně 447 Kč ročně na jedné žárovce." },
                  { q: "Za jak dlouho se LED žárovka zaplatí?", a: "Kvalitní LED žárovka za 100–150 Kč se zaplatí za 3–4 měsíce při běžném používání. Poté je každý rok čistá úspora." },
                  { q: "Jak dlouho vydrží LED žárovka?", a: "Kvalitní LED žárovky mají životnost 15 000–25 000 hodin. Při 4 hodinách denně to je 10–17 let." },
                  { q: "Jsou chytré LED žárovky výhodné?", a: "Chytré LED (Philips Hue, IKEA Tradfri) jsou dražší (200–500 Kč), ale nabízejí ovládání přes telefon, automatizace a změnu barvy světla. Pro základní úsporu energie ale postačí standardní LED." },
                ].map(({ q, a }) => (
                  <details key={q} className="faq-item">
                    <summary className="faq-q">{q}</summary>
                    <p className="faq-a">{a}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="related-section">
              <h2>Související články</h2>
              <div className="related-grid">
                {RELATED.map((r) => (
                  <Link key={r.href} href={r.href} className="card">
                    <div className="card-eyebrow-row"><span>Elektrika & osvětlení</span><span>⏱ {r.read}</span></div>
                    <div className="card-h" style={{ fontSize: 15 }}>{r.title}</div>
                    <div className="card-arrow">Číst →</div>
                  </Link>
                ))}
              </div>
            </section>
          </article>

          <aside className="article-sidebar">
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Obsah</div>
              <nav><ul className="sidebar-toc">
                <li><a href="#porovnani">Základní srovnání</a></li>
                <li><a href="#uspory">Kolik ušetříš</a></li>
                <li><a href="#navratnost">Návratnost</a></li>
                <li><a href="#jak-vybrat">Jak vybrat LED</a></li>
                <li><a href="#typy">Typy LED žárovek</a></li>
                <li><a href="#mýty">Mýty o LED</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/elektrika" className="sidebar-cat-link">💡 Elektrika & osvětlení<span>20 článků →</span></Link>
            </div>
          </aside>
        </div>
      </div>
      <style>{`
        .article-layout { display: grid; grid-template-columns: 1fr 280px; gap: 56px; padding: 48px 0 80px; align-items: start; }
        .article-header { margin-bottom: 32px; }
        .article-meta-top { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
        .article-cat-pill { display: inline-flex; align-items: center; height: 24px; padding: 0 12px; border-radius: 999px; border: 1px solid var(--border); background: var(--surface); font-size: 11px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--muted); text-decoration: none; transition: background 120ms; }
        .article-cat-pill:hover { background: #e8e7e2; color: var(--text); }
        .article-read-time { font-size: 12px; color: var(--muted); font-weight: 500; }
        .article-h1 { font-family: var(--font-serif); font-size: clamp(26px, 3.5vw, 40px); line-height: 1.1; font-weight: 400; letter-spacing: -0.01em; margin-bottom: 16px; }
        .article-lead { font-size: 18px; line-height: 1.65; color: var(--muted); font-weight: 300; margin-bottom: 14px; }
        .article-meta-row { display: flex; gap: 8px; font-size: 12px; color: var(--muted); font-weight: 500; }
        .toc { background: var(--surface); border-radius: 10px; padding: 20px 24px; margin-bottom: 40px; }
        .toc-label { font-size: 11px; font-weight: 700; letter-spacing: 0.10em; text-transform: uppercase; color: var(--muted); margin-bottom: 12px; }
        .toc-list { padding-left: 18px; display: flex; flex-direction: column; gap: 6px; }
        .toc-list li a { font-size: 14px; color: var(--muted); text-decoration: none; font-weight: 400; transition: color 120ms; }
        .toc-list li a:hover { color: var(--text); }
        .article-body section { margin-bottom: 48px; }
        .article-body h2 { font-family: var(--font-serif); font-size: clamp(20px, 2.5vw, 26px); font-weight: 400; line-height: 1.2; margin-bottom: 16px; border-top: 1px solid var(--border); padding-top: 24px; margin-top: 8px; }
        .article-body h3 { font-family: var(--font-sans); font-size: 16px; font-weight: 600; margin-top: 24px; margin-bottom: 10px; color: var(--text); }
        .article-body p { font-size: 16px; line-height: 1.75; color: #2a2a28; font-weight: 300; margin-bottom: 14px; }
        .article-body ul, .article-body ol { padding-left: 22px; margin-bottom: 16px; display: flex; flex-direction: column; gap: 8px; }
        .article-body li { font-size: 15px; line-height: 1.6; color: #2a2a28; font-weight: 300; }
        .article-body strong { font-weight: 600; color: var(--text); }
        .article-tip { background: #fffbeb; border-left: 3px solid #f59e0b; border-radius: 0 8px 8px 0; padding: 14px 18px; font-size: 14px; line-height: 1.6; color: #78716c; margin: 20px 0; }
        .article-table-wrap { overflow-x: auto; margin: 16px 0 24px; }
        .article-table { width: 100%; border-collapse: collapse; font-size: 14px; line-height: 1.5; }
        .article-table th { font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); padding: 10px 14px; text-align: left; border-bottom: 2px solid var(--border); background: var(--surface); }
        .article-table td { padding: 10px 14px; border-bottom: 1px solid var(--border); vertical-align: top; color: #2a2a28; font-weight: 300; }
        .article-table tr:last-child td { border-bottom: none; }
        .faq-list { display: flex; flex-direction: column; gap: 8px; }
        .faq-item { border: 1px solid var(--border); border-radius: 10px; overflow: hidden; background: #fff; }
        .faq-q { font-size: 15px; font-weight: 600; padding: 16px 20px; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; transition: background 120ms; }
        .faq-q:hover { background: var(--surface); }
        .faq-q::after { content: "+"; font-size: 18px; font-weight: 300; flex-shrink: 0; margin-left: 12px; }
        details[open] .faq-q::after { content: "−"; }
        .faq-a { font-size: 14px; line-height: 1.65; color: var(--muted); font-weight: 300; padding: 0 20px 16px; }
        .related-section { margin-top: 56px; }
        .related-section h2 { font-family: var(--font-serif); font-size: 22px; font-weight: 400; margin-bottom: 20px; padding-top: 24px; border-top: 1px solid var(--border); }
        .related-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .article-sidebar { position: sticky; top: 80px; display: flex; flex-direction: column; gap: 16px; }
        .sidebar-widget { background: #fff; border: 1px solid var(--border); border-radius: 12px; padding: 20px; }
        .sidebar-widget-title { font-size: 10px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); margin-bottom: 14px; }
        .sidebar-toc { list-style: none; display: flex; flex-direction: column; gap: 8px; }
        .sidebar-toc li a { font-size: 13px; color: var(--muted); text-decoration: none; font-weight: 400; transition: color 120ms; line-height: 1.4; display: block; }
        .sidebar-toc li a:hover { color: var(--text); }
        .sidebar-cat-link { display: flex; justify-content: space-between; align-items: center; font-size: 14px; font-weight: 500; color: var(--text); text-decoration: none; padding: 8px 0; border-bottom: 1px solid var(--border); transition: color 120ms; }
        .sidebar-cat-link:hover { color: var(--muted); }
        .sidebar-cat-link span { font-size: 12px; color: var(--muted); }
        @media (max-width: 960px) { .article-layout { grid-template-columns: 1fr; gap: 0; } .article-sidebar { position: static; margin-top: 40px; } .related-grid { grid-template-columns: 1fr; } }
        @media (max-width: 600px) { .article-layout { padding: 32px 0 60px; } }
      `}</style>
    </>
  );
}
