import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak čistit filtr klimatizace doma – postup krok za krokem 2026",
  description: "Jak vyčistit nebo vyměnit filtr klimatizace sám doma. Jak často čistit, jak filtr vyjmout, umýt a vrátit zpět. Ušetři na servisním výjezdu.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/cistit-filtr-klimatizace" },
  openGraph: { title: "Jak čistit filtr klimatizace 2026", description: "Vyjmutí, mytí a vrácení filtru klimatizace – postup krok za krokem.", url: "https://www.domovniguru.cz/blog/cistit-filtr-klimatizace", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-05-01T08:00:00Z", modifiedTime: "2026-05-01T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak čistit filtr klimatizace 2026", description: "Čištění filtru klimatizace sám doma – postup krok za krokem." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/cistit-filtr-klimatizace#article",
    "headline": "Jak čistit filtr klimatizace doma – postup krok za krokem 2026",
    "datePublished": "2026-05-01T08:00:00Z",
    "dateModified": "2026-05-01T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak čistit filtr klimatizace", "čištění filtru klimatizace", "výměna filtru klimatizace", "klimatizace filtr doma", "údržba klimatizace"]
  }]
};

const RELATED = [
  { title: "Příprava domu na léto", href: "/blog/dum-priprava-na-leto", read: "6 min" },
  { title: "Jak se zbavit hmyzu bez chemie", href: "/blog/zbavit-se-hmyzu-bez-chemie", read: "4 min" },
  { title: "Jak správně větrat byt", href: "/blog/spravne-vetrat-byt", read: "4 min" },
  { title: "Jak ušetřit na vytápění", href: "/blog/usetrit-na-vytapeni", read: "7 min" },
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
              <Link href="/blog/kategorie/sezonni-udrzba">Sezónní údržba</Link><span className="breadcrumb-sep">/</span>
              <span>Čistění filtru klimatizace</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">🍂 Sezónní údržba</Link>
                <span className="article-read-time">⏱ 4 min čtení</span>
              </div>
              <h1 className="article-h1">Jak čistit filtr klimatizace doma – postup krok za krokem</h1>
              <p className="article-lead">Zanesený filtr klimatizace snižuje výkon o 15–25 %, zvyšuje spotřebu elektřiny a šíří prach a bakterie. Čištění filtru trvá 10 minut a nepotřebuješ technika.</p>
              <div className="article-meta-row"><span>Aktualizováno: 1. května 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/cistit-filtr-klimatizace" title="Jak čistit filtr klimatizace doma – postup krok za krokem 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 165" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="165" fill="#f0f4f8"/>
                <text x="380" y="22" textAnchor="middle" fontSize="10" fill="#4a6080" fontWeight="700" letterSpacing="0.04em">POSTUP ČISTĚNÍ FILTRU KLIMATIZACE</text>
                {[
                  { n:"1", x:20, icon:"🔌", title:"Vypni klimatizaci", desc:"Vypnout + vytáhnout\nzástrčku ze zásuvky\npro bezpečnost", color:"#e07040" },
                  { n:"2", x:168, icon:"🚪", title:"Otevři kryt", desc:"Přední panel\nse sklopí nebo\nodejme dle modelu", color:"#f59e0b" },
                  { n:"3", x:316, icon:"🗂️", title:"Vyjmi filtr", desc:"Filtr vysunout\nnebo vyklopit\ndle pokynů výrobce", color:"#5a9e6f" },
                  { n:"4", x:464, icon:"🚿", title:"Umyj filtr", desc:"Vlažnou vodou\nbez saponátu\noder jemně", color:"#4a90d9" },
                  { n:"5", x:612, icon:"💨", title:"Usuš a vrať", desc:"Zcela vyschnout\nmin. 30 minut\npak vrátit zpět", color:"#9b6fd4" },
                ].map(({n, x, icon, title, desc, color}) => (
                  <g key={n} transform={`translate(${x}, 28)`}>
                    <rect x="0" y="0" width="128" height="118" rx="8" fill="#fff" stroke={color} strokeWidth="1.2"/>
                    <circle cx="64" cy="18" r="14" fill={color} opacity="0.15"/>
                    <text x="64" y="23" textAnchor="middle" fontSize="10" fill={color} fontWeight="700">{n}</text>
                    <text x="64" y="46" textAnchor="middle" fontSize="20">{icon}</text>
                    <text x="64" y="65" textAnchor="middle" fontSize="9" fill={color} fontWeight="700">{title}</text>
                    {desc.split('\n').map((d,i) => <text key={i} x="64" y={78+i*12} textAnchor="middle" fontSize="8" fill="#4a4a40">{d}</text>)}
                  </g>
                ))}
                <rect y="148" width="760" height="17" fill="#e0eaf4" opacity="0.5"/>
                <text x="380" y="160" textAnchor="middle" fontSize="8" fill="#3a6a8a" fontWeight="600" letterSpacing="0.06em">❄️ ČISTIT KAŽDÉ 2–4 TÝDNY V SEZÓNĚ · NIKDY NEVRÁTIT MOKRÝ FILTR · VÝKON + ÚSPORA</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#jak-casto">Jak často čistit filtr</a></li>
                <li><a href="#postup">Postup čistění krok za krokem</a></li>
                <li><a href="#typy">Typy filtrů – mytí nebo výměna</a></li>
                <li><a href="#profiservis">Co zvládneš sám a co technik</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="jak-casto">
              <h2>Jak často čistit filtr klimatizace</h2>
              <ul>
                <li><strong>V průběhu sezóny (léto):</strong> Každé 2–4 týdny pokud klimatizaci používáš denně. Více zvířat nebo prašné prostředí = každé 2 týdny.</li>
                <li><strong>Na začátku sezóny (jaro):</strong> Vždy vyčistit před prvním spuštěním v roce — filtr je zanesený prachem z doby kdy klimatizace neběžela.</li>
                <li><strong>Na konci sezóny (podzim):</strong> Vyčistit před odstavením — čistý filtr neplesniví přes zimu.</li>
                <li><strong>Signály zanešeného filtru:</strong> Slabší chlazení, vyšší hluk, nepříjemný zápach při spuštění, viditelný šedý povlak na filtru.</li>
              </ul>
              <div className="article-tip"><strong>💡 Ekonomický důvod:</strong> Zanesený filtr zvyšuje spotřebu elektřiny o 15–25 %. Při klimatizaci s příkonem 1 kW a ceně 6 Kč/kWh a 8 hodinách provozu denně = úspora 18–36 Kč denně po vyčistění filtru.</div>
            </section>

            <section id="postup">
              <h2>Postup čistění filtru krok za krokem</h2>
              <ul>
                <li><strong>Krok 1 — Vypni a odpoj:</strong> Vypni klimatizaci dálkovým ovladačem a vytáhni zástrčku ze zásuvky (nebo vypni jistič). Bezpečnost na prvním místě.</li>
                <li><strong>Krok 2 — Otevři přední panel:</strong> Přední panel vnitřní jednotky se typicky otevře sklopením nahoru nebo sejmutím. V návodu k tvé klimatizaci je přesný postup — liší se dle výrobce.</li>
                <li><strong>Krok 3 — Vyjmi filtry:</strong> Filtry jsou zpravidla dva nebo čtyři plastové rámy s jemnou síťovinou. Opatrně vysunout nebo vyklopit dle ukotvení.</li>
                <li><strong>Krok 4 — Odstraň hrubý prach:</strong> Nejdřív vysát filtr vysavačem — odstraní hrubé nečistoty bez rozmočení.</li>
                <li><strong>Krok 5 — Umyj vlažnou vodou:</strong> Filtr opláchni vlažnou vodou (ne horkou) ze zadní strany — voda vyplaví nečistoty směrem ven. Jemně pode prsty — nedrhnout. Bez saponátu (poškodí elektrostatické vlastnosti filtru).</li>
                <li><strong>Krok 6 — Usuš filtr:</strong> Nechej vyschnout na vzduchu — min. 30 minut, ideálně hodinu. Nikdy nevracej mokrý filtr — způsobí plíseň a poškodí elektroniku.</li>
                <li><strong>Krok 7 — Vrať filtr a panel:</strong> Vlož suchý filtr zpět, zavři panel, zapoj klimatizaci a otestuj.</li>
              </ul>
            </section>

            <section id="typy">
              <h2>Typy filtrů – mytí nebo výměna</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ filtru</th><th>Čistění</th><th>Životnost</th><th>Cena náhrady</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Hrubý síťový filtr (PM10)</strong></td><td>Mytí vodou</td><td>Opakované</td><td>—</td></tr>
                    <tr><td><strong>Uhlíkový filtr (deodor.)</strong></td><td>Výměna</td><td>6–12 měsíců</td><td>200–500 Kč</td></tr>
                    <tr><td><strong>HEPA filtr</strong></td><td>Výměna</td><td>12–24 měsíců</td><td>300–800 Kč</td></tr>
                    <tr><td><strong>Elektrostatický filtr</strong></td><td>Mytí vodou</td><td>Opakované</td><td>—</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Většina domácích klimatizací má hrubé síťové filtry (mytí) a volitelné sekundární filtry (výměna). Zkontroluj návod k tvé klimatizaci jaké typy filtrů obsahuje.</p>
            </section>

            <section id="profiservis">
              <h2>Co zvládneš sám a co vyžaduje technika</h2>
              <ul>
                <li><strong>Sám zvládneš:</strong> Čistění hrubých filtrů, výměna uhlíkových nebo HEPA filtrů, čistění přední mřížky vnitřní jednotky vlhkým hadříkem.</li>
                <li><strong>Technik jednou ročně:</strong> Čistění lamel výparníku (vnitřní jednotka), čistění a mazání ventilátoru, kontrola tlaku chladiva, čistění kondenzační vany a odtokové hadice, kontrola elektroinstalace.</li>
                <li><strong>Cena profesionálního servisu:</strong> Výjezdní servis + čistění: 800–2 000 Kč. Výjezd bez čistění: 500–800 Kč. Doplnění chladiva: dle množství, cca 500–1 500 Kč.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Proč klimatizace zapáchá po spuštění?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Nejčastější příčina: plíseň nebo bakterie na výparníku nebo ve výparníkové vaně. Čistění filtru pomůže ale nestačí — nutné profesionální čistění výparníku antibakteriálním sprejem. Druhá příčina: zanesený uhlíkový filtr — vyměnit. Třetí: kondenzační vana plná nečistot — vyčistit odtokovou hadici.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Mohu klimatizaci čistit vysavačem místo vodou?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Vysavač je dobrý první krok pro odstranění hrubého prachu, ale neodstraní jemné nečistoty, mastnotu a bakterie. Pro kompletní čistění je nutné opláchnout filtr vodou. Použij vysavač jako první krok, pak opláchni vodou.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Co dělat když klimatizace kape vodu dovnitř?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Kapající voda z vnitřní jednotky je nejčastěji ucpaná kondenzační vana nebo odtoková hadice. Zanesený filtr zpomaluje průtok vzduchu, výparník přemrzne a při rozmrznutí kape voda. Řešení: vyčistit filtr, vyčistit kondenzační hadici (propláchnout vodou nebo foukáním), zavolat technika pro čistění výparníku.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/cistit-filtr-klimatizace" title="Jak čistit filtr klimatizace doma – postup krok za krokem 2026" />

            <section className="related-section">
              <h2>Související články</h2>
              <div className="related-grid">
                {RELATED.map((r) => (
                  <Link key={r.href} href={r.href} className="card">
                    <div className="card-eyebrow-row"><span>Sezónní údržba</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#jak-casto">Jak často čistit</a></li>
                <li><a href="#postup">Postup krok za krokem</a></li>
                <li><a href="#typy">Typy filtrů</a></li>
                <li><a href="#profiservis">Sám vs. technik</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/sezonni-udrzba" className="sidebar-cat-link">🍂 Sezónní údržba<span>20 článků →</span></Link>
            </div>
          </aside>
        </div>
      </div>
      <style>{`
        .article-layout{display:grid;grid-template-columns:1fr 280px;gap:56px;padding:48px 0 80px;align-items:start}
        .article-header{margin-bottom:32px}.article-meta-top{display:flex;align-items:center;gap:12px;margin-bottom:16px}
        .article-cat-pill{display:inline-flex;align-items:center;height:24px;padding:0 12px;border-radius:999px;border:1px solid var(--border);background:var(--surface);font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);text-decoration:none;transition:background 120ms}
        .article-cat-pill:hover{background:#e8e7e2;color:var(--text)}.article-read-time{font-size:12px;color:var(--muted);font-weight:500}
        .article-h1{font-family:var(--font-serif);font-size:clamp(26px,3.5vw,40px);line-height:1.1;font-weight:400;letter-spacing:-.01em;margin-bottom:16px}
        .article-lead{font-size:18px;line-height:1.65;color:var(--muted);font-weight:300;margin-bottom:14px}
        .article-meta-row{display:flex;gap:8px;font-size:12px;color:var(--muted);font-weight:500}
        .hero-illustration{margin:28px 0 36px;border-radius:12px;overflow:hidden;border:1px solid var(--border)}.hero-svg{width:100%;height:auto;display:block}
        .toc{background:var(--surface);border-radius:10px;padding:20px 24px;margin-bottom:40px}.toc-label{font-size:11px;font-weight:700;letter-spacing:.10em;text-transform:uppercase;color:var(--muted);margin-bottom:12px}
        .toc-list{padding-left:18px;display:flex;flex-direction:column;gap:6px}.toc-list li a{font-size:14px;color:var(--muted);text-decoration:none;font-weight:400;transition:color 120ms}.toc-list li a:hover{color:var(--text)}
        .article-body section{margin-bottom:48px}.article-body h2{font-family:var(--font-serif);font-size:clamp(20px,2.5vw,26px);font-weight:400;line-height:1.2;margin-bottom:16px;border-top:1px solid var(--border);padding-top:24px;margin-top:8px}
        .article-body p{font-size:16px;line-height:1.75;color:#2a2a28;font-weight:300;margin-bottom:14px}.article-body ul{padding-left:22px;margin-bottom:16px;display:flex;flex-direction:column;gap:8px}
        .article-body li{font-size:15px;line-height:1.6;color:#2a2a28;font-weight:300}.article-body strong{font-weight:600;color:var(--text)}
        .article-tip{background:#fff8e8;border-left:3px solid #f59e0b;border-radius:0 8px 8px 0;padding:14px 18px;font-size:14px;line-height:1.6;color:#78716c;margin:20px 0}
        .article-table-wrap{overflow-x:auto;margin:16px 0 24px}.article-table{width:100%;border-collapse:collapse;font-size:14px;line-height:1.5}
        .article-table th{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);padding:10px 14px;text-align:left;border-bottom:2px solid var(--border);background:var(--surface)}
        .article-table td{padding:10px 14px;border-bottom:1px solid var(--border);vertical-align:top;color:#2a2a28;font-weight:300}.article-table tr:last-child td{border-bottom:none}
        .faq-list{display:flex;flex-direction:column;gap:8px;margin-top:16px}.faq-item{border:1px solid var(--border);border-radius:10px;overflow:hidden}
        .faq-summary{display:flex;justify-content:space-between;align-items:center;padding:14px 18px;cursor:pointer;font-size:15px;font-weight:500;color:var(--text);background:var(--surface);list-style:none;gap:12px}
        .faq-summary:hover{background:#e8e7e2}.faq-icon{flex-shrink:0;color:var(--muted);transition:transform 200ms;font-size:14px}
        details[open] .faq-icon{transform:rotate(180deg)}.faq-body{padding:14px 18px;font-size:14px;line-height:1.7;color:#4a4a48;font-weight:300;border-top:1px solid var(--border);background:#fff}
        .related-section{margin-top:56px}.related-section h2{font-family:var(--font-serif);font-size:22px;font-weight:400;margin-bottom:20px;padding-top:24px;border-top:1px solid var(--border)}
        .related-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}.article-sidebar{position:sticky;top:80px;display:flex;flex-direction:column;gap:16px}
        .sidebar-widget{background:#fff;border:1px solid var(--border);border-radius:12px;padding:20px}.sidebar-widget-title{font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-bottom:14px}
        .sidebar-toc{list-style:none;display:flex;flex-direction:column;gap:8px}.sidebar-toc li a{font-size:13px;color:var(--muted);text-decoration:none;font-weight:400;transition:color 120ms;line-height:1.4;display:block}.sidebar-toc li a:hover{color:var(--text)}
        .sidebar-cat-link{display:flex;justify-content:space-between;align-items:center;font-size:14px;font-weight:500;color:var(--text);text-decoration:none;padding:8px 0;border-bottom:1px solid var(--border);transition:color 120ms}.sidebar-cat-link:hover{color:var(--muted)}.sidebar-cat-link span{font-size:12px;color:var(--muted)}
        @media(max-width:960px){.article-layout{grid-template-columns:1fr;gap:0}.article-sidebar{position:static;margin-top:40px}.related-grid{grid-template-columns:1fr}}
      `}</style>
    </>
  );
}
