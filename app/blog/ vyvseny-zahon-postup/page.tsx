import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak postavit vyvýšený záhon – dřevěný i betonový za víkend 2025",
  description: "Vyvýšený záhon krok za krokem: výběr materiálu, rozměry, příprava půdy a osazení. Zvládnete sami za víkend.",
  alternates: { canonical: "https://domovniguru.cz/blog/vyvseny-zahon-postup" },
  openGraph: {
    title: "Jak postavit vyvýšený záhon – kompletní průvodce",
    description: "Dřevěný nebo betonový? Správné rozměry, výplň a výběr rostlin.",
    url: "https://domovniguru.cz/blog/vyvseny-zahon-postup",
    siteName: "DomovniGuru", locale: "cs_CZ", type: "article",
    publishedTime: "2025-02-01T08:00:00Z", modifiedTime: "2025-03-01T08:00:00Z",
    authors: ["DomovniGuru"],
  },
  twitter: { card: "summary_large_image", title: "Jak postavit vyvýšený záhon", description: "Krok za krokem za víkend." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://domovniguru.cz/blog/vyvseny-zahon-postup#article",
      "headline": "Jak postavit vyvýšený záhon – dřevěný i betonový za víkend",
      "datePublished": "2025-02-01T08:00:00Z", "dateModified": "2025-03-01T08:00:00Z",
      "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" },
      "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" },
      "inLanguage": "cs",
      "keywords": ["vyvýšený záhon", "jak postavit záhon", "záhon ze dřeva", "záhonová zemina"],
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://domovniguru.cz" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://domovniguru.cz/blog" },
        { "@type": "ListItem", "position": 3, "name": "Zahrada & terasa", "item": "https://domovniguru.cz/blog/kategorie/zahrada" },
        { "@type": "ListItem", "position": 4, "name": "Vyvýšený záhon", "item": "https://domovniguru.cz/blog/vyvseny-zahon-postup" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Jaká je ideální výška vyvýšeného záhonu?", "acceptedAnswer": { "@type": "Answer", "text": "Optimální výška je 60–80 cm. Umožňuje pohodlnou práci ve stoje bez ohýbání zad. Nižší záhony (30–40 cm) jsou vhodné pro děti nebo jako dekorativní prvek." } },
        { "@type": "Question", "name": "Jaké dřevo je nejlepší na záhon?", "acceptedAnswer": { "@type": "Answer", "text": "Nejlepší je modřín, douglaska nebo dub – přirozeně odolné dřeviny. Smrk a borovice vydří 5–8 let, pokud jsou impregnované. Vyhni se dřevu ošetřenému CCA impregnací (obsahuje arsen)." } },
        { "@type": "Question", "name": "Čím vyplnit vyvýšený záhon?", "acceptedAnswer": { "@type": "Answer", "text": "Zdola nahoru: hrubé větve a klacky (drenáž), listí a kompost, zahradní zemina smíchaná s kompostem v poměru 1:1. Vrchní vrstva by měla být kvalitní záhonová zemina." } },
      ],
    },
  ],
};

const RELATED = [
  { title: "Jak připravit zahradu na jaro – kompletní checklist", href: "/blog/jarni-zahrada", read: "6 min" },
  { title: "Jak se zbavit plevele bez chemie", href: "/blog/zbavit-se-plevele-bez-chemie", read: "4 min" },
  { title: "Jak správně zalévat zahradu", href: "/blog/jak-spravne-zalevat", read: "4 min" },
  { title: "Jak ošetřit dřevěnou terasu před zimou", href: "/blog/drevo-terasa-zima", read: "4 min" },
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
              <Link href="/blog/kategorie/zahrada">Zahrada & terasa</Link><span className="breadcrumb-sep">/</span>
              <span>Vyvýšený záhon</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak postavit vyvýšený záhon – dřevěný i betonový za víkend</h1>
              <p className="article-lead">
                Vyvýšený záhon ti umožní pěstovat zeleninu bez klečení, zlepší odvodnění a prodlouží sezónu.
                Dřevěný zvládneš postavit sám za jeden víkend, bez speciálního nářadí.
              </p>
              <div className="article-meta-row">
                <span>Aktualizováno: 1. března 2025</span><span>·</span><span>DomovniGuru</span>
              </div>
            </header>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#proc-vyvseny">Proč vyvýšený záhon?</a></li>
                <li><a href="#rozmery">Správné rozměry</a></li>
                <li><a href="#material">Dřevo nebo beton?</a></li>
                <li><a href="#postup-drevo">Postup – dřevěný záhon</a></li>
                <li><a href="#vypln">Čím vyplnit záhon</a></li>
                <li><a href="#co-pestovat">Co pěstovat ve vyvýšeném záhonu</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="proc-vyvseny">
              <h2>Proč vyvýšený záhon?</h2>
              <p>
                Vyvýšený záhon není jen módní trend – má řadu praktických výhod oproti klasickému záhonu v zemi:
              </p>
              <ul>
                <li><strong>Žádné ohýbání zad</strong> – práce ve výšce 60–80 cm je pohodlná ve stoje</li>
                <li><strong>Lepší zemina</strong> – sám si namícháš ideální složení, nezávisle na zahradní půdě</li>
                <li><strong>Rychlejší ohřev půdy</strong> – sezóna začíná 2–3 týdny dříve než v zemi</li>
                <li><strong>Méně plevele</strong> – plevel z okolí se do záhonu dostane těžko</li>
                <li><strong>Lepší odvodnění</strong> – kořeny nezatopí ani při vydatném dešti</li>
              </ul>
              <div className="article-tip">
                <strong>💡 Tip:</strong> Vyvýšený záhon je ideální pro seniory, lidi s bolestmi zad a zahrady s tvrdou nebo jílnatou půdou, kde zelenina špatně roste.
              </div>
            </section>

            <section id="rozmery">
              <h2>Správné rozměry záhonu</h2>
              <p>
                Nejdůležitější pravidlo: záhon musí být dostupný z obou stran bez šlapání do zeminy.
              </p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead>
                    <tr><th>Rozměr</th><th>Doporučená hodnota</th><th>Proč</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>Šířka</strong></td><td>80–120 cm</td><td>Dosáhneš doprostřed z obou stran</td></tr>
                    <tr><td><strong>Délka</strong></td><td>Libovolná (150–300 cm)</td><td>Přizpůsob prostoru</td></tr>
                    <tr><td><strong>Výška</strong></td><td>60–80 cm</td><td>Pohodlná práce ve stoje</td></tr>
                    <tr><td><strong>Min. výška</strong></td><td>30 cm</td><td>Méně než 30 cm nestojí za to</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip">
                <strong>💡 Tip:</strong> Záhon u zdi nebo plotu musí být dostupný jen z jedné strany – pak max. šířka 60 cm.
              </div>
            </section>

            <section id="material">
              <h2>Dřevo nebo beton?</h2>

              <h3>Dřevěný záhon</h3>
              <p>
                Nejpopulárnější varianta. Dřevo je dostupné, levné, snadno se opracovává a přirozeně vypadá v zahradě.
                Nevýhoda: dřevo časem hnijí – podle druhu vydrží 5–20 let.
              </p>
              <p>
                Nejlepší dřeviny: <strong>modřín, douglaska, dub</strong> (přirozená odolnost 15–20 let), <strong>impregnovaná borovice nebo smrk</strong> (5–10 let).
                Vyhni se dřevu napuštěnému arsenem (starší CCA impregnace) – zdravotně závadné pro zeleninu.
              </p>

              <h3>Betonový nebo kameninový záhon</h3>
              <p>
                Vydrží desítky let, neuhnijí, vypadají reprezentativně. Výrazně vyšší cena a práce – beton, tvarovky nebo přírodní kámen.
                Vhodné pro trvalou instalaci v reprezentativní zahradě.
              </p>

              <h3>Kovový záhon (Corten ocel)</h3>
              <p>
                Moderní varianta z rezavějící oceli. Rzi se neboj – je to záměrná povrchová vrstva, která chrání kov pod ní.
                Vydrží 30+ let, minimální údržba, atraktivní vzhled.
              </p>
            </section>

            <section id="postup-drevo">
              <h2>Postup – dřevěný záhon krok za krokem</h2>

              <h3>Co budeš potřebovat</h3>
              <ul>
                <li>Fošny nebo trámy (tloušťka min. 4 cm, šířka 20–25 cm)</li>
                <li>Rohové sloupky (4×4 cm nebo 6×6 cm, délka = výška záhonu + 20 cm do země)</li>
                <li>Nerezové šrouby nebo vruty (normální šrouby zrezaví)</li>
                <li>Pila, vrtačka, vodováha</li>
                <li>Geotextilie (volitelně – na dno proti krtkům)</li>
              </ul>

              <h3>Postup</h3>
              <ul>
                <li><strong>Krok 1:</strong> Vyměř a vytyč místo záhonu. Zkontroluj vodováhou, zda je terén rovný – jinak vyrovnej.</li>
                <li><strong>Krok 2:</strong> Zaraž nebo zašroubuj rohové sloupky do země (20 cm pod zem pro stabilitu).</li>
                <li><strong>Krok 3:</strong> Přišroubuj fošny ke sloupcům zevnitř. Začni od spodu, postupuj nahoru.</li>
                <li><strong>Krok 4:</strong> Zkontroluj pravé úhly – uhlopříčky obdélníku musí být stejně dlouhé.</li>
                <li><strong>Krok 5:</strong> Volitelně vystlej dno geotextilií – zabrání průniku krtků.</li>
                <li><strong>Krok 6:</strong> Naplň záhon (viz sekce níže) a nechej zeminu usadit přes zimu nebo zalej vodou.</li>
              </ul>
              <div className="article-tip">
                <strong>💡 Tip:</strong> Pokud stavíš záhon na dlažbu nebo terasu, přidej na dno vrstvu štěrku (5–10 cm) pro odvodnění. Záhon musí mít drenáž – stojatá voda zabije kořeny.
              </div>
            </section>

            <section id="vypln">
              <h2>Čím vyplnit záhon – správné vrstvení</h2>
              <p>
                Správné naplnění záhonu je stejně důležité jako jeho stavba. Vrstvení zdola nahoru:
              </p>
              <ul>
                <li><strong>Spodní vrstva (20–30 cm):</strong> Hrubé dřevo, větve, klacky – pomalu se rozkládají a uvolňují živiny. Slouží jako drenáž.</li>
                <li><strong>Střední vrstva (15–20 cm):</strong> Listí, zkosená tráva, kompost – organická hmota bohatá na živiny.</li>
                <li><strong>Vrchní vrstva (20–30 cm):</strong> Směs zahradní zeminy a kompostu 1:1. Do této vrstvy sázíš.</li>
              </ul>
              <div className="article-tip">
                <strong>💡 Tip:</strong> Záhon naplněný čerstvým dřevem a trávou se v prvním roce sníží o 10–20 cm, jak se organika rozkládá. Přidej zásobu zeminy nebo každé jaro dosyp kompost.
              </div>
            </section>

            <section id="co-pestovat">
              <h2>Co pěstovat ve vyvýšeném záhonu</h2>
              <p>Ve vyvýšeném záhonu se daří téměř všemu – ale ne každá plodina ho potřebuje. Nejlépe se osvědčují:</p>
              <ul>
                <li><strong>Zelenina s hlubokými kořeny:</strong> mrkev, petržel, ředkvičky – profitují z kypré půdy</li>
                <li><strong>Rajčata a papriky:</strong> milují teplejší půdu a dobré odvodnění</li>
                <li><strong>Saláty a bylinky:</strong> rychlý výnos, opakovaná sklizeň</li>
                <li><strong>Jahody:</strong> skvělé ve vyvýšeném záhonu – plody nehnijí na zemi</li>
              </ul>
              <p>
                Nevhodné: dýně, tykve a kukuřice – mají velké nároky na prostor a hluboko rostoucí kořeny.
              </p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jaká je ideální výška vyvýšeného záhonu?", a: "Optimální výška je 60–80 cm. Umožňuje pohodlnou práci ve stoje bez ohýbání zad. Nižší záhony (30–40 cm) jsou vhodné pro děti nebo jako dekorativní prvek." },
                  { q: "Jaké dřevo je nejlepší na záhon?", a: "Nejlepší je modřín, douglaska nebo dub – přirozeně odolné dřeviny. Smrk a borovice vydří 5–8 let, pokud jsou impregnované. Vyhni se dřevu ošetřenému CCA impregnací (obsahuje arsen)." },
                  { q: "Čím vyplnit vyvýšený záhon?", a: "Zdola nahoru: hrubé větve a klacky (drenáž), listí a kompost, zahradní zemina smíchaná s kompostem v poměru 1:1. Vrchní vrstva by měla být kvalitní záhonová zemina." },
                  { q: "Musím záhon každý rok přihnojovat?", a: "Ano. Každé jaro přidej 5–10 cm kompostu na povrch. Organika se rozkládá a záhon se každý rok sníží – kompost to vyrovná a doplní živiny." },
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
                    <div className="card-eyebrow-row"><span>Zahrada & terasa</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#proc-vyvseny">Proč vyvýšený záhon?</a></li>
                <li><a href="#rozmery">Správné rozměry</a></li>
                <li><a href="#material">Dřevo nebo beton?</a></li>
                <li><a href="#postup-drevo">Postup stavby</a></li>
                <li><a href="#vypln">Čím vyplnit</a></li>
                <li><a href="#co-pestovat">Co pěstovat</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget sidebar-cta">
              <div style={{ fontSize: 32, marginBottom: 10 }}>🌱</div>
              <div className="sidebar-cta-title">Příprava zahrady na jaro</div>
              <p className="sidebar-cta-desc">Kompletní checklist co udělat v březnu a dubnu.</p>
              <Link href="/blog/jarni-zahrada" className="btn btn-black" style={{ width: "100%", justifyContent: "center", marginTop: 14 }}>Číst článek →</Link>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/zahrada" className="sidebar-cat-link">🌿 Zahrada & terasa<span>20 článků →</span></Link>
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
        .sidebar-cta { background: var(--surface); border-color: transparent; }
        .sidebar-cta-title { font-family: var(--font-serif); font-size: 17px; font-weight: 400; margin-bottom: 6px; }
        .sidebar-cta-desc { font-size: 13px; color: var(--muted); font-weight: 300; line-height: 1.5; }
        .sidebar-cat-link { display: flex; justify-content: space-between; align-items: center; font-size: 14px; font-weight: 500; color: var(--text); text-decoration: none; padding: 8px 0; border-bottom: 1px solid var(--border); transition: color 120ms; }
        .sidebar-cat-link:hover { color: var(--muted); }
        .sidebar-cat-link span { font-size: 12px; color: var(--muted); }
        @media (max-width: 960px) { .article-layout { grid-template-columns: 1fr; gap: 0; } .article-sidebar { position: static; margin-top: 40px; } .related-grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}
