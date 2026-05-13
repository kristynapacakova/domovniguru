import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak postavit dřevěný zahradní plot – postup krok za krokem 2026",
  description: "Dřevěný zahradní plot svépomocí – výběr dřeva, kotvení sloupků, montáž prken a ošetření. Průvodce pro každého kdo chce plot postavit sám za víkend.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/zahradni-plot-ze-dreva" },
  openGraph: { title: "Jak postavit dřevěný zahradní plot 2026", description: "Výběr dřeva, kotvení sloupků a montáž prken – dřevěný plot sám za víkend.", url: "https://www.domovniguru.cz/blog/zahradni-plot-ze-dreva", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-22T08:00:00Z", modifiedTime: "2026-04-22T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak postavit dřevěný zahradní plot 2026", description: "Výběr dřeva, kotvení sloupků a montáž – plot sám za víkend." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/zahradni-plot-ze-dreva#article",
    "headline": "Jak postavit dřevěný zahradní plot – postup krok za krokem 2026",
    "datePublished": "2026-04-22T08:00:00Z",
    "dateModified": "2026-04-22T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak postavit dřevěný plot", "zahradní plot ze dřeva", "kotvení sloupků plotu", "dřevěný plot postup", "plot zahrada DIY", "impregnace dřevěného plotu"]
  }]
};

const RELATED = [
  { title: "Jak ošetřit dřevěnou terasu", href: "/blog/drevo-terasa-zima", read: "5 min" },
  { title: "Jak natřít venkovní dřevo", href: "/blog/natrit-venkovni-drevo", read: "5 min" },
  { title: "Jak postavit pergolu na terasu", href: "/blog/pergola-postup-stavba", read: "9 min" },
  { title: "Jak připravit zahradu na jaro", href: "/blog/jarni-zahrada", read: "7 min" },
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
              <span>Dřevěný zahradní plot</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 7 min čtení</span>
              </div>
              <h1 className="article-h1">Jak postavit dřevěný zahradní plot – krok za krokem</h1>
              <p className="article-lead">Dřevěný plot je nejhezčí ohraničení zahrady — přirozený, teplý a zvladatelný svépomocí. Za víkend máš hotový celý plot. Tady je kompletní postup od sloupků po impregnaci.</p>
              <div className="article-meta-row"><span>Aktualizováno: 22. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/zahradni-plot-ze-dreva" title="Jak postavit dřevěný zahradní plot – postup krok za krokem 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 190" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="190" fill="#f0f8ec"/>
                <defs>
                  <linearGradient id="drevoPlot" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#c8904a"/><stop offset="100%" stopColor="#a07030"/>
                  </linearGradient>
                  <linearGradient id="zemeP" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#6b4820"/><stop offset="100%" stopColor="#4a3010"/>
                  </linearGradient>
                </defs>

                {/* Plot ilustrace */}
                <g transform="translate(20,15)">
                  <rect x="0" y="0" width="340" height="165" rx="8" fill="#fdf8f0" stroke="#d8c8a0" strokeWidth="1.2"/>
                  <text x="170" y="18" textAnchor="middle" fontSize="9" fill="#8a6040" fontWeight="700">ANATOMIE DŘEVĚNÉHO PLOTU</text>

                  {/* Zemina */}
                  <rect x="10" y="120" width="320" height="35" rx="4" fill="#6b4820" opacity="0.3"/>
                  <text x="170" y="140" textAnchor="middle" fontSize="8" fill="#4a3010">zemina / beton</text>

                  {/* Sloupky */}
                  {[30, 160, 290].map((x, i) => (
                    <g key={i}>
                      <rect x={x} y="30" width="18" height="125" rx="3" fill="url(#drevoPlot)"/>
                      <rect x={x-2} y="110" width="22" height="45" rx="2" fill="url(#zemeP)" opacity="0.6"/>
                      <text x={x+9} y="155" textAnchor="middle" fontSize="6.5" fill="#8a6040">sloupek</text>
                    </g>
                  ))}

                  {/* Vodorovné latě */}
                  {[45, 75].map((y, i) => (
                    <rect key={i} x="20" y={y} width="310" height="12" rx="2" fill="#c8904a" opacity="0.7"/>
                  ))}

                  {/* Svislá prkna */}
                  {[58, 78, 98, 118, 138, 158, 178, 198, 218, 238].map((x, i) => (
                    <rect key={i} x={x} y="28" width="14" height="90" rx="2" fill="url(#drevoPlot)" opacity="0.85"/>
                  ))}

                  {/* Popisky */}
                  <text x="170" y="108" textAnchor="middle" fontSize="7.5" fill="#8a6040">svislá prkna + vodorovné latě</text>
                </g>

                {/* Typy plotů */}
                <g transform="translate(378,15)">
                  <rect x="0" y="0" width="362" height="165" rx="8" fill="#fff" stroke="#e0d8d0" strokeWidth="1"/>
                  <text x="181" y="18" textAnchor="middle" fontSize="9" fill="#6a6050" fontWeight="700">TYPY DŘEVĚNÝCH PLOTŮ</text>

                  {[
                    { y:28, name:"Štípaný (rustikální)", desc:"Přírodní kmínky, nejlevnější", color:"#c8904a" },
                    { y:68, name:"Svislé prkna (klasický)", desc:"Nejčastější, snadná stavba", color:"#5a9e6f" },
                    { y:108, name:"Laťový (laťkový)", desc:"Vzdušný, propouští světlo", color:"#4a90d9" },
                    { y:138, name:"Ranch (vodorovný)", desc:"Moderní, pro velké zahrady", color:"#9b6fd4" },
                  ].map(({y, name, desc, color}) => (
                    <g key={y} transform={`translate(12, ${y})`}>
                      <rect x="0" y="0" width="338" height="32" rx="5" fill={color} opacity="0.06" stroke={color} strokeWidth="0.5"/>
                      <rect x="4" y="6" width="20" height="20" rx="3" fill={color} opacity="0.2"/>
                      <text x="30" y="15" fontSize="9" fill={color} fontWeight="700">{name}</text>
                      <text x="30" y="27" fontSize="8" fill="#6a6050">{desc}</text>
                    </g>
                  ))}
                </g>

                <rect y="173" width="760" height="17" fill="#e0f0d8" opacity="0.5"/>
                <text x="380" y="185" textAnchor="middle" fontSize="8" fill="#3a7e4f" fontWeight="600" letterSpacing="0.06em">🪵 SLOUPKY DO BETONU = NEJPEVNĚJŠÍ · IMPREGNACE PŘED MONTÁŽÍ = NEJDELŠÍ ŽIVOTNOST</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#drevo">Výběr dřeva a materiálu</a></li>
                <li><a href="#naradi">Nářadí a příprava</a></li>
                <li><a href="#sloupky">Kotvení sloupků</a></li>
                <li><a href="#montaz">Montáž prken a latí</a></li>
                <li><a href="#impregnace">Impregnace a údržba</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="drevo">
              <h2>Výběr dřeva a materiálu</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Dřevo</th><th>Trvanlivost</th><th>Cena</th><th>Poznámka</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Akát</strong></td><td>25–35 let</td><td>Vysoká</td><td>Nejodolnější, bez impregnace</td></tr>
                    <tr><td><strong>Modřín</strong></td><td>15–25 let</td><td>Střední</td><td>Přirozená odolnost, hezká kresba</td></tr>
                    <tr><td><strong>Dub</strong></td><td>20–30 let</td><td>Vysoká</td><td>Tvrdý, těžší opracování</td></tr>
                    <tr><td><strong>Impregnovaná borovice</strong></td><td>12–20 let</td><td>Nízká</td><td>Zelená nebo hnědá impregnace</td></tr>
                    <tr><td><strong>Smrk (bez impregnace)</strong></td><td>3–7 let</td><td>Nejnižší</td><td>Pro venkovní ploty nevhodný</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Doporučení:</strong> Pro sloupky vždy akát, modřín nebo impregnovaná borovice — sloupky jsou nejvíce namáhány vlhkostí ze země. Na prkna stačí impregnovaná borovice s pravidelným ošetřením olejem každé 2–3 roky.</div>
            </section>

            <section id="naradi">
              <h2>Nářadí a příprava</h2>
              <ul>
                <li><strong>Nářadí:</strong> Pásová pila nebo motorová pila (řezání sloupků), vrtačka, vodováha (min. 1 m), olovnice, šňůra na vyznačení, lopata nebo vrtací souprava na sloupky, šroubovák nebo hřebíkovačka.</li>
                <li><strong>Materiál na 10 m plotu výšky 150 cm:</strong> Sloupky 9×9 cm, délka 250 cm (150 cm viditelná část + 100 cm v zemi): 6 ks. Prkna 2×10 cm, délka dle návrhu. Vodorovné latě 5×10 cm. Impregnační přípravek. Šrouby pozinkované nebo nerezové.</li>
                <li><strong>Příprava terénu:</strong> Vyznač linii plotu šňůrou. Zkontroluj rovnost — plot na nerovném terénu vypadá neupraveně. Zvaž svah — plot může sledovat terén nebo být vodorovný.</li>
              </ul>
            </section>

            <section id="sloupky">
              <h2>Kotvení sloupků – nejdůležitější krok</h2>
              <p>Sloupky jsou základem celého plotu. Špatně zabetonovaný nebo mělce zakopaný sloupek způsobí, že plot brzy povolí nebo se nakloní.</p>
              <ul>
                <li><strong>Hloubka zakopání:</strong> Min. 1/3 celkové délky sloupku v zemi. Pro plot výšky 150 cm: sloupek délky 250 cm, 100 cm v zemi.</li>
                <li><strong>Betonování sloupků:</strong> Vyvrtej nebo vykopej díru průměru 20–25 cm. Vlož sloupek, vyrovnej vodováhou ve dvou směrech. Nalijdruhů beton (B20), uhlaď. Nechej tuhnout 48 hodin před montáží prken.</li>
                <li><strong>Kovové patky:</strong> Alternativa k betonování — ocelová patka zabetonovaná nebo zaražená do země, sloupek se zasadí do patky. Rychlejší a sloupek není v přímém kontaktu s betonem (déle vydrží).</li>
                <li><strong>Rozteč sloupků:</strong> 150–200 cm — kompromis mezi stabilitou a množstvím sloupků. Větší rozteč = více prken se ohýbá, menší = více práce a materiálu.</li>
              </ul>
            </section>

            <section id="montaz">
              <h2>Montáž prken a latí</h2>
              <ul>
                <li><strong>Vodorovné latě jako základ:</strong> Na sloupky přišrubuj 2 vodorovné latě (nahoře a dole) — ty drží svislá prkna. Pro vyšší plot 3 latě.</li>
                <li><strong>Svislá prkna:</strong> Přišrubuj prkna na latě, každé dvěma šrouby. Mezera mezi prkny: 0 (plný plot) nebo 1–3 cm (vzdušný plot). Použij distanční tyčku nebo šroubovák jako mezerník pro rovnoměrné mezery.</li>
                <li><strong>Vrchní zakončení:</strong> Zaoblené vrchní zakončení prken odtéká lépe vodu a déle vydrží. Rovné zakončení zadržuje vodu — rychleji hnijí.</li>
                <li><strong>Vždy pozinkované šrouby:</strong> Obyčejné šrouby rezaví a zanechávají hnědé stopy na dřevě. Pozinkované nebo nerezové šrouby vydrží bez rezavění celou životnost plotu.</li>
              </ul>
            </section>

            <section id="impregnace">
              <h2>Impregnace a údržba</h2>
              <ul>
                <li><strong>Impregnace před montáží:</strong> Ošetři dřevo před stavbou — dostaneš se na všechny plochy, včetně řezných ploch. Řezná místa jsou nejnáchylnější k vlhkosti.</li>
                <li><strong>Typ přípravku:</strong> Terasový olej nebo lazura pro viditelné plochy (hezký výsledek). Bezbarvá impregnace jako základ pod lazuru. Impregnace na bázi vody méně smrdí, na bázi rozpouštědla lepší pronikání.</li>
                <li><strong>Údržba každé 2–3 roky:</strong> Přebrousit lehce jemným papírem (120), přetřít novou vrstvou oleje nebo lazury. Nejkritičtější místa: vrchní zakončení prken a oblasti kolem sloupků u země.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Nejlepší čas na impregnaci je na podzim — dřevo je suché po létě a impregnace ochrání plot přes zimu kdy je vlhkost největší.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Potřebuji souhlas souseda na plot?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Plot do výšky 180 cm na hranici pozemku nevyžaduje stavební povolení, ale sousedský souhlas nebo dohoda je dobrá praxe. Plot vyšší než 180 cm nebo na hranici s veřejnou komunikací může vyžadovat ohlášení stavby. Vždy ověř u místního stavebního úřadu a zkontroluj zakreslení hranice pozemku v katastru.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak dlouho vydrží dřevěný plot?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Impregnovaná borovice s pravidelnou údržbou: 15–20 let. Modřín: 20–30 let. Akát: 30–40 let bez impregnace. Klíč je pravidelná impregnace každé 2–3 roky a správné odtékání vody (zaoblené vrcholy prken, sloupky v patce ne přímo v zemi).</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Kolik stojí dřevěný plot na 20 m?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Impregnovaná borovice, výška 150 cm, 20 m: materiál 5 000–10 000 Kč (sloupky, prkna, latě, šrouby, beton). Impregnace: 500–1 500 Kč. Celkem DIY: 6 000–12 000 Kč. Profesionální stavba přidá 3 000–8 000 Kč za práci. Akát nebo modřín zdraží materiál 2–3×.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/zahradni-plot-ze-dreva" title="Jak postavit dřevěný zahradní plot – postup krok za krokem 2026" />

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
                <li><a href="#drevo">Výběr dřeva</a></li>
                <li><a href="#naradi">Nářadí a příprava</a></li>
                <li><a href="#sloupky">Kotvení sloupků</a></li>
                <li><a href="#montaz">Montáž prken</a></li>
                <li><a href="#impregnace">Impregnace</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/zahrada" className="sidebar-cat-link">🌿 Zahrada & terasa<span>20 článků →</span></Link>
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
        .article-body p{font-size:16px;line-height:1.75;color:#2a2a28;font-weight:300;margin-bottom:14px}
        .article-body ul{padding-left:22px;margin-bottom:16px;display:flex;flex-direction:column;gap:8px}
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
