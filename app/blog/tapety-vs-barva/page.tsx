import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Tapety vs. barva na zeď – co je lepší volba pro váš byt 2026",
  description: "Tapety nebo malování? Srovnání ceny, trvanlivosti, údržby a vizuálního výsledku. Kdy zvolit tapety a kdy barvu – praktický průvodce pro každý typ místnosti.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/tapety-vs-barva" },
  openGraph: { title: "Tapety vs. barva na zeď 2026", description: "Tapety nebo malování? Srovnání ceny, trvanlivosti a výsledku pro každou místnost.", url: "https://www.domovniguru.cz/blog/tapety-vs-barva", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-15T08:00:00Z", modifiedTime: "2026-04-15T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Tapety vs. barva na zeď 2026", description: "Tapety nebo malování? Srovnání ceny, trvanlivosti a výsledku." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/tapety-vs-barva#article",
    "headline": "Tapety vs. barva na zeď – co je lepší volba pro váš byt 2026",
    "datePublished": "2026-04-15T08:00:00Z",
    "dateModified": "2026-04-15T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["tapety vs barva", "tapety nebo malování", "výhody tapet", "tapety výhody nevýhody", "malování zdi výhody", "tapety cena vs barva"]
  }]
};

const RELATED = [
  { title: "Jak malovat zeď – kompletní průvodce", href: "/blog/jak-malovat-zed", read: "5 min" },
  { title: "Jak vybrat barvu na zeď", href: "/blog/jak-vybrat-barvu-na-zed", read: "9 min" },
  { title: "Jak opravit škrábance a díry ve zdi", href: "/blog/opravit-skrabance-diry-ve-zdi", read: "5 min" },
  { title: "Jak malovat rohy a lišty bez přetahování", href: "/blog/jak-malovat-rohy-a-listy", read: "5 min" },
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
              <Link href="/blog/kategorie/malovani">Malování & barvy</Link><span className="breadcrumb-sep">/</span>
              <span>Tapety vs. barva</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování & barvy</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Tapety vs. barva na zeď – co je lepší volba</h1>
              <p className="article-lead">Tapety prožívají renesanci — moderní vzory a vinyl tapety daleko překonaly staré papírové role. Ale malování je stále rychlejší, levnější a flexibilnější. Jak se rozhodnout pro svůj byt?</p>
              <div className="article-meta-row"><span>Aktualizováno: 15. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/tapety-vs-barva" title="Tapety vs. barva na zeď – co je lepší volba pro váš byt 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="200" fill="#fdf8f4"/>

                {/* BARVA (vlevo) */}
                <g transform="translate(20,20)">
                  <rect x="0" y="0" width="340" height="155" rx="8" fill="#fff" stroke="#e0d8d0" strokeWidth="1.2"/>
                  <text x="170" y="18" textAnchor="middle" fontSize="10" fill="#4a90d9" fontWeight="700">🖌️ MALOVÁNÍ BARVOU</text>

                  {/* Zeď s barvou */}
                  <rect x="15" y="25" width="100" height="80" rx="4" fill="#a0c0e8" opacity="0.7"/>
                  <rect x="15" y="105" width="100" height="30" rx="4" fill="#5a9e6f" opacity="0.5"/>

                  {/* Výhody a nevýhody */}
                  <text x="130" y="38" fontSize="8.5" fill="#3a7e4f" fontWeight="600">✓ Rychlejší příprava</text>
                  <text x="130" y="52" fontSize="8.5" fill="#3a7e4f" fontWeight="600">✓ Levnější (150–500 Kč/m²)</text>
                  <text x="130" y="66" fontSize="8.5" fill="#3a7e4f" fontWeight="600">✓ Snazší oprava a přemalování</text>
                  <text x="130" y="80" fontSize="8.5" fill="#3a7e4f" fontWeight="600">✓ Neomezené barevné možnosti</text>
                  <text x="130" y="94" fontSize="8.5" fill="#3a7e4f" fontWeight="600">✓ Vhodné i pro nerovné zdi</text>
                  <line x1="130" y1="102" x2="320" y2="102" stroke="#e0d8d0" strokeWidth="0.8"/>
                  <text x="130" y="116" fontSize="8.5" fill="#e07040">✗ Nezkryje velké nerovnosti</text>
                  <text x="130" y="130" fontSize="8.5" fill="#e07040">✗ Méně dekorativních možností</text>
                  <text x="130" y="144" fontSize="8.5" fill="#e07040">✗ Nutné přemalovat po 5–8 letech</text>
                </g>

                {/* TAPETY (vpravo) */}
                <g transform="translate(378,20)">
                  <rect x="0" y="0" width="360" height="155" rx="8" fill="#fff" stroke="#e0d8d0" strokeWidth="1.2"/>
                  <text x="180" y="18" textAnchor="middle" fontSize="10" fill="#9b6fd4" fontWeight="700">🌿 TAPETY</text>

                  {/* Zeď s tapetou — vzor */}
                  <rect x="15" y="25" width="100" height="110" rx="4" fill="#f0e8f8" stroke="#d0c0e8" strokeWidth="1"/>
                  {/* Vzor tapety */}
                  {[0,1,2,3,4].map(row => [0,1].map(col => (
                    <ellipse key={`${row}-${col}`} cx={35+col*40} cy={45+row*20} rx="8" ry="5" fill="#c0a0d8" opacity="0.4"/>
                  )))}

                  {/* Výhody a nevýhody */}
                  <text x="130" y="38" fontSize="8.5" fill="#3a7e4f" fontWeight="600">✓ Zakryje nerovnosti zdi</text>
                  <text x="130" y="52" fontSize="8.5" fill="#3a7e4f" fontWeight="600">✓ Bohatší dekorativní možnosti</text>
                  <text x="130" y="66" fontSize="8.5" fill="#3a7e4f" fontWeight="600">✓ Trvanlivost 10–15 let</text>
                  <text x="130" y="80" fontSize="8.5" fill="#3a7e4f" fontWeight="600">✓ Vinylové tapety omyvatelné</text>
                  <line x1="130" y1="92" x2="345" y2="92" stroke="#e0d8d0" strokeWidth="0.8"/>
                  <text x="130" y="106" fontSize="8.5" fill="#e07040">✗ Dražší (300–1500 Kč/roli)</text>
                  <text x="130" y="120" fontSize="8.5" fill="#e07040">✗ Obtížnější lepení (nutná praxe)</text>
                  <text x="130" y="134" fontSize="8.5" fill="#e07040">✗ Nutná rovná a suchá zeď</text>
                  <text x="130" y="148" fontSize="8.5" fill="#e07040">✗ Složitější odstranění</text>
                </g>

                <rect y="183" width="760" height="17" fill="#f0ece8" opacity="0.5"/>
                <text x="380" y="195" textAnchor="middle" fontSize="8" fill="#8a7050" fontWeight="600" letterSpacing="0.06em">💡 DOPORUČENÍ: BARVA PRO CELÝ BYT · TAPETA PRO JEDNU AKCENTNÍ STĚNU</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#srovnani">Kompletní srovnání – tabulka</a></li>
                <li><a href="#kdy-tapety">Kdy zvolit tapety</a></li>
                <li><a href="#kdy-barva">Kdy zvolit malování</a></li>
                <li><a href="#typy-tapet">Typy tapet – co koupit</a></li>
                <li><a href="#mistnosti">Co kam – podle místnosti</a></li>
                <li><a href="#kombinace">Kombinace – akcentní stěna</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="srovnani">
              <h2>Kompletní srovnání – tabulka</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Kritérium</th><th>Malování barvou</th><th>Tapety</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Cena materiálu (m²)</strong></td><td>50–200 Kč</td><td>100–500 Kč</td></tr>
                    <tr><td><strong>Cena práce (m²)</strong></td><td>100–300 Kč</td><td>150–400 Kč</td></tr>
                    <tr><td><strong>Příprava povrchu</strong></td><td>Snadnější</td><td>Povrch musí být rovný</td></tr>
                    <tr><td><strong>Náročnost aplikace</strong></td><td>⭐⭐ Snadná</td><td>⭐⭐⭐ Střední</td></tr>
                    <tr><td><strong>Trvanlivost</strong></td><td>5–8 let</td><td>10–15 let</td></tr>
                    <tr><td><strong>Omyvatelnost</strong></td><td>Záleží na barvě (třída 1–3)</td><td>Vinyl tapety — výborná</td></tr>
                    <tr><td><strong>Oprava poškození</strong></td><td>Snadná — přemalovat</td><td>Složitější — výměna pásu</td></tr>
                    <tr><td><strong>Odstranění</strong></td><td>Přemalovat přímo</td><td>Namočit a strhnout</td></tr>
                    <tr><td><strong>Vlhké prostory</strong></td><td>Speciální barva (fungicid)</td><td>Nevhodné (výjimka: vinyl)</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="kdy-tapety">
              <h2>Kdy zvolit tapety</h2>
              <ul>
                <li><strong>Stěna má větší nerovnosti:</strong> Tapeta zakryje mírné nerovnosti povrchu — barva je naopak zvýrazní. Pokud je zeď zvlněná nebo má praskliny, tapeta je lepší volba.</li>
                <li><strong>Chceš výrazný vzor nebo texturu:</strong> Geometrické vzory, botanické motivy nebo tkaninové textury — to barva neumožní. Tapeta vytvoří vizuální výraz který barvou nelze napodobit.</li>
                <li><strong>Akcentní stěna:</strong> Jedna tapetovaná stěna v jinak bíle malovaném pokoji je moderní a efektní řešení — bez nutnosti tapetovat celý byt.</li>
                <li><strong>Chodba nebo schodiště:</strong> Odolné vinyl tapety v chodbě vydrží mechanické namáhání lépe než barva.</li>
              </ul>
            </section>

            <section id="kdy-barva">
              <h2>Kdy zvolit malování barvou</h2>
              <ul>
                <li><strong>Chceš rychlé a levné řešení:</strong> Malování je výrazně levnější a rychlejší než tapetování. Jeden člověk vymaluje standardní pokoj za půl dne.</li>
                <li><strong>Plánuješ časté změny:</strong> Barva se přemaluje přímo — bez odstraňování starého povrchu. Pokud měníš barvy každých pár let, malování je flexibilnější.</li>
                <li><strong>Vlhké prostory:</strong> Koupelna, kuchyň — speciální koupelnová barva s fungicidní přísadou je vhodná volba. Tapety ve vlhkých prostorech bobtnají a plísní.</li>
                <li><strong>Pronájem:</strong> V pronajatém bytě je malování standardní a méně invazivní — tapety mohou komplikovat ukončení nájmu.</li>
              </ul>
            </section>

            <section id="typy-tapet">
              <h2>Typy tapet – co koupit</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ tapety</th><th>Vlastnosti</th><th>Cena/roli</th><th>Vhodné pro</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Papírová</strong></td><td>Nejlevnější, málo odolná</td><td>100–300 Kč</td><td>Ložnice, nízké namáhání</td></tr>
                    <tr><td><strong>Vinylová</strong></td><td>Omyvatelná, odolná, snadná montáž</td><td>200–600 Kč</td><td>Chodba, kuchyň, dětský pokoj</td></tr>
                    <tr><td><strong>Textilní</strong></td><td>Luxusní vzhled, teplá textura</td><td>500–1500 Kč</td><td>Obývák, ložnice</td></tr>
                    <tr><td><strong>Přírodní (juta, sisal)</strong></td><td>Ekologická, teplá</td><td>400–1200 Kč</td><td>Obývák — suchá místa</td></tr>
                    <tr><td><strong>3D / strukturovaná</strong></td><td>Výrazný efekt, hloubka</td><td>300–800 Kč</td><td>Akcentní stěna</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="mistnosti">
              <h2>Co kam – doporučení podle místnosti</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Místnost</th><th>Doporučení</th><th>Důvod</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Obývák</strong></td><td>Barva + tapeta akcentní stěna</td><td>Kombinace dá místnosti charakter</td></tr>
                    <tr><td><strong>Ložnice</strong></td><td>Barva nebo papírová/textilní tapeta</td><td>Tapeta za postelí jako akcent</td></tr>
                    <tr><td><strong>Koupelna</strong></td><td>Speciální koupelnová barva</td><td>Tapety ve vlhku bobtnají</td></tr>
                    <tr><td><strong>Kuchyně</strong></td><td>Omyvatelná barva (třída 1)</td><td>Mastnota a pára — tapety nevhodné</td></tr>
                    <tr><td><strong>Dětský pokoj</strong></td><td>Omyvatelná barva nebo vinyl tapeta</td><td>Snadné čištění od šmouh</td></tr>
                    <tr><td><strong>Chodba</strong></td><td>Vinyl tapeta nebo omyvatelná barva</td><td>Mechanické namáhání, čistění</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="kombinace">
              <h2>Kombinace – akcentní stěna s tapetou</h2>
              <p>Nejpopulárnější moderní řešení — jedna stěna s tapetou, zbytek místnosti malovaný. Tato kombinace dá pokoji výraz a charakter bez nutnosti tapetovat celý byt.</p>
              <ul>
                <li><strong>Která stěna:</strong> Zpravidla stěna za postelí (ložnice), za pohovkou (obývák) nebo vstupní stěna u dveří (chodba).</li>
                <li><strong>Jak kombinovat barvy:</strong> Tapeta s dominantní barvou → vybrat jeden odstín z tapety pro zbytek místnosti. Nebo neutrální tapeta (béžová, šedá) + výrazná barva stěn.</li>
                <li><strong>Přechod tapeta-barva:</strong> Na rohu místnosti přechod přirozeně. Na rovné stěně použij lištu nebo malířskou pásku pro čistou linii.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Před lepením tapety na akcentní stěnu namaluj zbytek místnosti. Tapeta se pak lepí přes hranu namalované zdi — čistší výsledek a snazší práce.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Je lepší tapeta nebo barva do obýváku?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Záleží na stylu a rozpočtu. Barva je flexibilnější a levnější — vhodná pro celý pokoj. Tapeta dá pokoji osobitý výraz ale je dražší a složitější. Nejlepší kompromis: malování + jedna tapetovaná akcentní stěna za pohovkou. Výsledek je moderní a nevyžaduje tapetování celé místnosti.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak dlouho vydrží tapeta vs. barva?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Kvalitní vinyl tapeta vydrží 10–15 let bez výrazného opotřebení. Malování barvou vydrží 5–8 let, pak začínají být patrné šmouhy nebo blednutí. Tapeta tedy vydrží déle, ale je dražší pořizovací investicí. Celková cena za 15 let může být srovnatelná.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Mohu lepit tapety přes staré tapety?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Nedoporučujeme. Stará tapeta může bobtnout nebo odpadnout pod vlhkostí lepidla — nová tapeta se pak nerovnoměrně přichytí. Staré tapety vždy odstraň, zeď vyrovnej a penetruj. Výjimka: tenká papírová tapeta na rovné zdi bez bublin — pak je přetapetování možné, ale riskantní.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Kolik rolí tapet potřebuji?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Standardní role tapety pokryje 5–5,5 m². Pro místnost 4×3 m (obvod 14 m, výška 2,5 m = 35 m²) potřebuješ 7–8 rolí. Pro tapety se vzorem přidej 1–2 role navíc na sladění vzoru. Vždy kup o jednu roli více — doobjednat stejnou šarži může být problém.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/tapety-vs-barva" title="Tapety vs. barva na zeď – co je lepší volba pro váš byt 2026" />

            <section className="related-section">
              <h2>Související články</h2>
              <div className="related-grid">
                {RELATED.map((r) => (
                  <Link key={r.href} href={r.href} className="card">
                    <div className="card-eyebrow-row"><span>Malování & barvy</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#srovnani">Kompletní srovnání</a></li>
                <li><a href="#kdy-tapety">Kdy tapety</a></li>
                <li><a href="#kdy-barva">Kdy barva</a></li>
                <li><a href="#typy-tapet">Typy tapet</a></li>
                <li><a href="#mistnosti">Podle místnosti</a></li>
                <li><a href="#kombinace">Akcentní stěna</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/malovani" className="sidebar-cat-link">🎨 Malování & barvy<span>20 článků →</span></Link>
            </div>
          </aside>
        </div>
      </div>
      <style>{`
        .article-layout{display:grid;grid-template-columns:1fr 280px;gap:56px;padding:48px 0 80px;align-items:start}
        .article-header{margin-bottom:32px}
        .article-meta-top{display:flex;align-items:center;gap:12px;margin-bottom:16px}
        .article-cat-pill{display:inline-flex;align-items:center;height:24px;padding:0 12px;border-radius:999px;border:1px solid var(--border);background:var(--surface);font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);text-decoration:none;transition:background 120ms}
        .article-cat-pill:hover{background:#e8e7e2;color:var(--text)}
        .article-read-time{font-size:12px;color:var(--muted);font-weight:500}
        .article-h1{font-family:var(--font-serif);font-size:clamp(26px,3.5vw,40px);line-height:1.1;font-weight:400;letter-spacing:-.01em;margin-bottom:16px}
        .article-lead{font-size:18px;line-height:1.65;color:var(--muted);font-weight:300;margin-bottom:14px}
        .article-meta-row{display:flex;gap:8px;font-size:12px;color:var(--muted);font-weight:500}
        .hero-illustration{margin:28px 0 36px;border-radius:12px;overflow:hidden;border:1px solid var(--border)}
        .hero-svg{width:100%;height:auto;display:block}
        .toc{background:var(--surface);border-radius:10px;padding:20px 24px;margin-bottom:40px}
        .toc-label{font-size:11px;font-weight:700;letter-spacing:.10em;text-transform:uppercase;color:var(--muted);margin-bottom:12px}
        .toc-list{padding-left:18px;display:flex;flex-direction:column;gap:6px}
        .toc-list li a{font-size:14px;color:var(--muted);text-decoration:none;font-weight:400;transition:color 120ms}
        .toc-list li a:hover{color:var(--text)}
        .article-body section{margin-bottom:48px}
        .article-body h2{font-family:var(--font-serif);font-size:clamp(20px,2.5vw,26px);font-weight:400;line-height:1.2;margin-bottom:16px;border-top:1px solid var(--border);padding-top:24px;margin-top:8px}
        .article-body h3{font-family:var(--font-sans);font-size:16px;font-weight:600;margin-top:24px;margin-bottom:10px;color:var(--text)}
        .article-body p{font-size:16px;line-height:1.75;color:#2a2a28;font-weight:300;margin-bottom:14px}
        .article-body ul,.article-body ol{padding-left:22px;margin-bottom:16px;display:flex;flex-direction:column;gap:8px}
        .article-body li{font-size:15px;line-height:1.6;color:#2a2a28;font-weight:300}
        .article-body strong{font-weight:600;color:var(--text)}
        .article-tip{background:#fff8e8;border-left:3px solid #f59e0b;border-radius:0 8px 8px 0;padding:14px 18px;font-size:14px;line-height:1.6;color:#78716c;margin:20px 0}
        .article-table-wrap{overflow-x:auto;margin:16px 0 24px}
        .article-table{width:100%;border-collapse:collapse;font-size:14px;line-height:1.5}
        .article-table th{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);padding:10px 14px;text-align:left;border-bottom:2px solid var(--border);background:var(--surface)}
        .article-table td{padding:10px 14px;border-bottom:1px solid var(--border);vertical-align:top;color:#2a2a28;font-weight:300}
        .article-table tr:last-child td{border-bottom:none}
        .faq-list{display:flex;flex-direction:column;gap:8px;margin-top:16px}
        .faq-item{border:1px solid var(--border);border-radius:10px;overflow:hidden}
        .faq-summary{display:flex;justify-content:space-between;align-items:center;padding:14px 18px;cursor:pointer;font-size:15px;font-weight:500;color:var(--text);background:var(--surface);list-style:none;gap:12px}
        .faq-summary:hover{background:#e8e7e2}
        .faq-icon{flex-shrink:0;color:var(--muted);transition:transform 200ms;font-size:14px}
        details[open] .faq-icon{transform:rotate(180deg)}
        .faq-body{padding:14px 18px;font-size:14px;line-height:1.7;color:#4a4a48;font-weight:300;border-top:1px solid var(--border);background:#fff}
        .related-section{margin-top:56px}
        .related-section h2{font-family:var(--font-serif);font-size:22px;font-weight:400;margin-bottom:20px;padding-top:24px;border-top:1px solid var(--border)}
        .related-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
        .article-sidebar{position:sticky;top:80px;display:flex;flex-direction:column;gap:16px}
        .sidebar-widget{background:#fff;border:1px solid var(--border);border-radius:12px;padding:20px}
        .sidebar-widget-title{font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-bottom:14px}
        .sidebar-toc{list-style:none;display:flex;flex-direction:column;gap:8px}
        .sidebar-toc li a{font-size:13px;color:var(--muted);text-decoration:none;font-weight:400;transition:color 120ms;line-height:1.4;display:block}
        .sidebar-toc li a:hover{color:var(--text)}
        .sidebar-cat-link{display:flex;justify-content:space-between;align-items:center;font-size:14px;font-weight:500;color:var(--text);text-decoration:none;padding:8px 0;border-bottom:1px solid var(--border);transition:color 120ms}
        .sidebar-cat-link:hover{color:var(--muted)}
        .sidebar-cat-link span{font-size:12px;color:var(--muted)}
        @media(max-width:960px){.article-layout{grid-template-columns:1fr;gap:0}.article-sidebar{position:static;margin-top:40px}.related-grid{grid-template-columns:1fr}}
      `}</style>
    </>
  );
}
