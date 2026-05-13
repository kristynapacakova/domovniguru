import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak vybrat svítidla do místnosti – teplota světla, příkon, typy 2026",
  description: "Jak vybrat správná svítidla do obýváku, ložnice, kuchyně nebo koupelny. Teplota světla, příkon LED, typy svítidel a jak kombinovat osvětlení pro správnou atmosféru.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/vybrat-svitidla-do-mistnosti" },
  openGraph: { title: "Jak vybrat svítidla do místnosti 2026", description: "Teplota světla, příkon LED a typy svítidel – jak osvětlit každou místnost správně.", url: "https://www.domovniguru.cz/blog/vybrat-svitidla-do-mistnosti", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-22T08:00:00Z", modifiedTime: "2026-04-22T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak vybrat svítidla do místnosti 2026", description: "Teplota světla, příkon LED a typy svítidel – osvětlení pro každou místnost." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/vybrat-svitidla-do-mistnosti#article",
    "headline": "Jak vybrat svítidla do místnosti – teplota světla, příkon, typy 2026",
    "datePublished": "2026-04-22T08:00:00Z",
    "dateModified": "2026-04-22T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak vybrat svítidla", "teplota světla Kelvin", "LED svítidla výběr", "osvětlení do místnosti", "svítidla obývák ložnice", "příkon LED žárovky"]
  }]
};

const RELATED = [
  { title: "Jak osvětlit kuchyňskou linku", href: "/blog/osvetlit-kuchynskou-linku", read: "6 min" },
  { title: "Jak nainstalovat stmívač světla", href: "/blog/instalovat-stmivac", read: "6 min" },
  { title: "Chytrá domácnost – jak začít", href: "/blog/chytra-domacnost-zacinamy", read: "7 min" },
  { title: "LED žárovky – jak vybrat správnou", href: "/blog/jak-vybrat-led-zarovku", read: "5 min" },
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
              <span>Výběr svítidel</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">⚡ Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak vybrat svítidla do místnosti – teplota světla, příkon, typy</h1>
              <p className="article-lead">Špatné osvětlení unavuje oči, kazí náladu a zvyšuje účet za elektřinu. Správná kombinace svítidel a teploty světla promění každou místnost — bez rekonstrukce a za rozumné peníze.</p>
              <div className="article-meta-row"><span>Aktualizováno: 22. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/vybrat-svitidla-do-mistnosti" title="Jak vybrat svítidla do místnosti – teplota světla, příkon, typy 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 185" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="185" fill="#f8f6f0"/>
                <text x="380" y="22" textAnchor="middle" fontSize="10" fill="#6a6050" fontWeight="700" letterSpacing="0.04em">TEPLOTA SVĚTLA (KELVIN) – CO KAM PATŘÍ</text>

                {/* Spektrum teplot */}
                <defs>
                  <linearGradient id="lightSpectrum" x1="0" y1="0" x2="1" y2="0" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#ff9a3c"/>
                    <stop offset="40%" stopColor="#fff4cc"/>
                    <stop offset="70%" stopColor="#f0f8ff"/>
                    <stop offset="100%" stopColor="#cce8ff"/>
                  </linearGradient>
                </defs>
                <rect x="30" y="35" width="700" height="30" rx="6" fill="url(#lightSpectrum)"/>

                {/* Popisky teplot */}
                {[
                  { x:30, k:"2 700 K", label:"Teplá bílá", rooms:"Ložnice, obývák", color:"#e07040" },
                  { x:205, k:"3 000 K", label:"Neutrální teplá", rooms:"Kuchyň, pracovna", color:"#b08040" },
                  { x:400, k:"4 000 K", label:"Neutrální bílá", rooms:"Koupelna, garáž", color:"#6080a0" },
                  { x:580, k:"5 000–6 500 K", label:"Studená bílá", rooms:"Dílna, obchody", color:"#4070c0" },
                ].map(({x, k, label, rooms, color}) => (
                  <g key={x}>
                    <line x1={x+30} y1="65" x2={x+30} y2="75" stroke={color} strokeWidth="1.5"/>
                    <text x={x+30} y="88" textAnchor="middle" fontSize="9" fill={color} fontWeight="700">{k}</text>
                    <text x={x+30} y="102" textAnchor="middle" fontSize="8.5" fill="#4a4a40" fontWeight="600">{label}</text>
                    <text x={x+30} y="116" textAnchor="middle" fontSize="8" fill="#8a8078">{rooms}</text>
                  </g>
                ))}

                {/* Typy svítidel */}
                <rect x="30" y="130" width="700" height="42" rx="8" fill="#fff" stroke="#e0d8d0" strokeWidth="1"/>
                {[
                  { x:80, icon:"💡", name:"Bodové" },
                  { x:185, icon:"🔆", name:"Závěsné" },
                  { x:290, icon:"📐", name:"Nástěnné" },
                  { x:395, icon:"🕯️", name:"Stojací" },
                  { x:500, icon:"🔦", name:"Páskové LED" },
                  { x:605, icon:"☀️", name:"Stropní panel" },
                ].map(({x, icon, name}) => (
                  <g key={x} transform={`translate(${x}, 138)`}>
                    <text x="0" y="14" textAnchor="middle" fontSize="16">{icon}</text>
                    <text x="0" y="30" textAnchor="middle" fontSize="8" fill="#4a4a40" fontWeight="500">{name}</text>
                  </g>
                ))}

                <rect y="168" width="760" height="17" fill="#f0ece8" opacity="0.5"/>
                <text x="380" y="180" textAnchor="middle" fontSize="8" fill="#8a7050" fontWeight="600" letterSpacing="0.06em">💡 ZLATÉ PRAVIDLO: KOMBINUJ HLAVNÍ OSVĚTLENÍ + DOPLŇKOVÉ SVĚTLO + ATMOSFÉRICKÉ SVĚTLO</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#teplota">Teplota světla – co to je a proč záleží</a></li>
                <li><a href="#typy">Typy svítidel a kdy je použít</a></li>
                <li><a href="#mistnosti">Co kam – podle místnosti</a></li>
                <li><a href="#vrstvy">Vrstvení osvětlení</a></li>
                <li><a href="#prikon">Příkon LED – kolik wattů potřebuješ</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="teplota">
              <h2>Teplota světla – co to je a proč záleží</h2>
              <p>Teplota světla se měří v Kelvinech (K) a určuje "barvu" světla — od teplé oranžové po studenou modravou bílou. Je to jeden z nejdůležitějších parametrů při výběru svítidel.</p>
              <ul>
                <li><strong>2 700 K — Teplá bílá:</strong> Připomíná světlo žárovky, teplé a útulné. Ideální pro ložnici, obývák a všude kde chceš relaxovat.</li>
                <li><strong>3 000 K — Neutrální teplá:</strong> Přirozenější bílá, méně žlutá. Vhodná pro kuchyň, jídelnu a pracovnu kde potřebuješ vidět barvy přesněji.</li>
                <li><strong>4 000 K — Neutrální bílá:</strong> Jasná a čistá bílá. Vhodná pro koupelnu, šatnu a garáž — pomáhá vidět detaily.</li>
                <li><strong>5 000–6 500 K — Studená bílá:</strong> Modravá denní bílá. Pro dílny, průmyslové prostory. V domácnosti působí sterilně a studeně.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Nemíchej teplotní řady v jedné místnosti — teplá žárovka v lustru a studená v lampě vypadají nesourodě. Drž se jedné teploty světla na místnost, max. s odchylkou 300 K.</div>
            </section>

            <section id="typy">
              <h2>Typy svítidel a kdy je použít</h2>
              <ul>
                <li><strong>Bodová svítidla (downlighty, spotlighty):</strong> Zabudovaná do stropu, přesně nasměrovatelná. Ideální pro rovnoměrné osvětlení kuchyně nebo koupelny. Nevhodná jako jediné osvětlení obýváku — vytváří tvrdé stíny.</li>
                <li><strong>Závěsná svítidla (lustry, pendlové lampy):</strong> Dominantní prvek nad jídelním stolem nebo v obýváku. Výška zavěšení: 70–80 cm nad stolem, min. 220 cm od podlahy v průchozích místech.</li>
                <li><strong>Nástěnné lampy (apliky):</strong> Doplňkové světlo po stranách postele, v chodbě nebo v koupelně po stranách zrcadla. Vytváří příjemné stínování obličeje na rozdíl od osvětlení shora.</li>
                <li><strong>Stojací lampy:</strong> Flexibilní — přesuneš je dle potřeby. Přímé světlo na čtení nebo nepřímé světlo odražené od stropu pro atmosféru.</li>
                <li><strong>LED pásky:</strong> Dekorativní nepřímé osvětlení pod kuchyňskou linkou, za TV, nebo jako podsvětlení nábytku. Neplní funkci hlavního světla.</li>
              </ul>
            </section>

            <section id="mistnosti">
              <h2>Co kam – doporučení podle místnosti</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Místnost</th><th>Teplota světla</th><th>Doporučená svítidla</th><th>Tip</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Obývák</strong></td><td>2 700–3 000 K</td><td>Lustr/závěsné + stojací lampa + LED pásky</td><td>Víc zdrojů světla = lepší atmosféra</td></tr>
                    <tr><td><strong>Ložnice</strong></td><td>2 700 K</td><td>Stropní + nástěnné po stranách postele</td><td>Noční lampičky s vypínačem u lůžka</td></tr>
                    <tr><td><strong>Kuchyň</strong></td><td>3 000–4 000 K</td><td>Bodová do stropu + pásky pod linkou</td><td>Osvětlení pracovní plochy je nutnost</td></tr>
                    <tr><td><strong>Koupelna</strong></td><td>3 000–4 000 K</td><td>Stropní + boční nástěnné u zrcadla</td><td>IP44 pro vlhké prostory</td></tr>
                    <tr><td><strong>Pracovna</strong></td><td>4 000 K</td><td>Stropní + stolní lampa</td><td>Stolní lampa zabraňuje únavě očí</td></tr>
                    <tr><td><strong>Chodba</strong></td><td>3 000 K</td><td>Stropní bodová nebo apliky</td><td>Pohybový senzor pro úsporu</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="vrstvy">
              <h2>Vrstvení osvětlení – tajemství útulného bytu</h2>
              <p>Byty s jedním zdrojem světla (stropní lustr) vypadají plochě a nudně. Vrstvení osvětlení — kombinace více zdrojů na různých výškách — vytváří hloubku, atmosféru a flexibilitu.</p>
              <ul>
                <li><strong>Vrstva 1 — Hlavní osvětlení:</strong> Stropní svítidla, lustry — celkové rovnoměrné osvětlení místnosti.</li>
                <li><strong>Vrstva 2 — Pracovní osvětlení:</strong> Osvětlení konkrétních zón — kuchyňská linka, pracovní stůl, čtecí místo. Musí být jasnější než hlavní světlo.</li>
                <li><strong>Vrstva 3 — Atmosférické osvětlení:</strong> Stojací lampa, LED pásky, dekorativní svíčky — vytváří náladu. Používej večer při relaxaci.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Nainstaluj stmívač na hlavní osvětlení — možnost regulovat intenzitu od 10 % do 100 % je nejlevnější způsob jak "proměnit" místnost. Viz <Link href="/blog/instalovat-stmivac" style={{color:"#5a9e6f",fontWeight:600}}>Jak nainstalovat stmívač →</Link></div>
            </section>

            <section id="prikon">
              <h2>Příkon LED – kolik wattů potřebuješ</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Místnost (m²)</th><th>Potřebné lm</th><th>LED příkon (W)</th><th>Stará žárovka</th></tr></thead>
                  <tbody>
                    <tr><td>Malá (do 10 m²)</td><td>1 000–2 000 lm</td><td>10–20 W</td><td>75–150 W</td></tr>
                    <tr><td>Střední (10–20 m²)</td><td>2 000–4 000 lm</td><td>20–40 W</td><td>150–300 W</td></tr>
                    <tr><td>Velká (nad 20 m²)</td><td>4 000–6 000 lm</td><td>40–60 W</td><td>300–500 W</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Orientační výpočet: <strong>100 lm na m²</strong> pro standardní osvětlení, <strong>200–300 lm na m²</strong> pro pracovní plochy. Lumen (lm) je skutečný měřitel světelného toku — watt je jen příkon.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Jakou teplotu světla vybrat do ložnice?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Do ložnice patří teplá bílá 2 700 K — připomíná světlo svíček a napomáhá produkci melatoninu (spánkového hormonu). Studená bílá (4 000 K+) v ložnici narušuje spánek. Ideálně kombinuj stropní svítidlo 2 700 K s nočními lampičkami které lze ztlumit nebo vypnout ze lůžka.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Co znamená IP44 u svítidel do koupelny?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">IP44 znamená ochranu proti vstřikující vodě ze všech stran. V koupelně jsou definovány zóny 0, 1, 2 a 3 — v zóně 0 (uvnitř vany) musí být min. IP67, v zóně 1 (nad vanou do výšky 2,25 m) min. IP45, v zóně 2 (60 cm od vany) min. IP44. Mimo tyto zóny stačí standardní svítidla.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Kolik svítidel dát do místnosti?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Závisí na typu. Bodová svítidla: 1 ks na 1–2 m² pro rovnoměrné osvětlení. Lustr: 1 ks do středu místnosti stačí jako hlavní světlo. Doplňkové osvětlení (lampy, apliky): 2–4 ks podle velikosti místnosti. Čím více zdrojů světla (i méně výkonných), tím příjemnější a flexibilnější osvětlení.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/vybrat-svitidla-do-mistnosti" title="Jak vybrat svítidla do místnosti – teplota světla, příkon, typy 2026" />

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
                <li><a href="#teplota">Teplota světla</a></li>
                <li><a href="#typy">Typy svítidel</a></li>
                <li><a href="#mistnosti">Co kam</a></li>
                <li><a href="#vrstvy">Vrstvení osvětlení</a></li>
                <li><a href="#prikon">Příkon LED</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/elektrika" className="sidebar-cat-link">⚡ Elektrika & osvětlení<span>20 článků →</span></Link>
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
