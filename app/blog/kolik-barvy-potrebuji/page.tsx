import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kolik barvy potřebuji? Kalkulačka + vzorec 2025",
  description: "Spočítej přesné množství barvy na místnost. Vzorec, tabulka spotřeby a tipy jak nekoupit zbytečně moc nebo málo.",
  alternates: { canonical: "https://domovniguru.cz/blog/kolik-barvy-potrebuji" },
  openGraph: { title: "Kolik barvy potřebuji? Kalkulačka + vzorec", description: "Spočítej přesné množství barvy na místnost.", url: "https://domovniguru.cz/blog/kolik-barvy-potrebuji", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2025-01-20T08:00:00Z", modifiedTime: "2025-03-01T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Kolik barvy potřebuji?", description: "Vzorec, tabulka spotřeby a tipy." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://domovniguru.cz/blog/kolik-barvy-potrebuji#article", "headline": "Kolik barvy potřebuji? Kalkulačka + vzorec", "datePublished": "2025-01-20T08:00:00Z", "dateModified": "2025-03-01T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "inLanguage": "cs", "keywords": ["kolik barvy potřebuji", "kalkulačka barvy", "spotřeba barvy na m2", "výpočet barvy na zeď"] }] };

const RELATED = [
  { title: "Jak malovat zeď – průvodce pro začátečníky", href: "/blog/jak-malovat-zed", read: "5 min" },
  { title: "Latexová vs. akrylátová barva – jaký je rozdíl?", href: "/blog/latexova-vs-akrylatova-barva", read: "4 min" },
  { title: "Jak malovat přes tmavou barvu na světlo", href: "/blog/malovat-pres-tmavou-barvu", read: "3 min" },
  { title: "Penetrace před malováním – kdy je nutná?", href: "/blog/penetrace-pred-malovanim", read: "4 min" },
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
              <span>Kolik barvy potřebuji</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování & barvy</Link>
                <span className="article-read-time">⏱ 3 min čtení</span>
              </div>
              <h1 className="article-h1">Kolik barvy potřebuji? Kalkulačka + vzorec</h1>
              <p className="article-lead">Zbývající půllitr barvy v koutě skladu nebo naopak druhá cesta do obchodu uprostřed malování — obojí se dá snadno vyhnout. Tady je přesný výpočet.</p>
              <div className="article-meta-row"><span>Aktualizováno: 1. března 2025</span><span>·</span><span>DomovniGuru</span></div>
            </header>

            {/* HERO ILLUSTRATION */}
            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="180" fill="#fdf8f2"/>

                {/* Místnost — pohled shora */}
                <g transform="translate(40, 20)">
                  {/* Půdorys místnosti */}
                  <rect x="0" y="0" width="200" height="140" rx="4" fill="none" stroke="#c8b89a" strokeWidth="2"/>
                  {/* Rozměry — šířka */}
                  <line x1="0" y1="155" x2="200" y2="155" stroke="#c8b89a" strokeWidth="1" strokeDasharray="3 2"/>
                  <line x1="0" y1="150" x2="0" y2="160" stroke="#c8b89a" strokeWidth="1"/>
                  <line x1="200" y1="150" x2="200" y2="160" stroke="#c8b89a" strokeWidth="1"/>
                  <text x="100" y="168" fontFamily="var(--font-sans,sans-serif)" fontSize="9" fill="#9a8a7a" textAnchor="middle">4 m</text>
                  {/* Rozměry — výška */}
                  <line x1="-15" y1="0" x2="-15" y2="140" stroke="#c8b89a" strokeWidth="1" strokeDasharray="3 2"/>
                  <line x1="-20" y1="0" x2="-10" y2="0" stroke="#c8b89a" strokeWidth="1"/>
                  <line x1="-20" y1="140" x2="-10" y2="140" stroke="#c8b89a" strokeWidth="1"/>
                  <text x="-28" y="74" fontFamily="var(--font-sans,sans-serif)" fontSize="9" fill="#9a8a7a" textAnchor="middle" transform="rotate(-90 -28 74)">3,5 m</text>
                  {/* Okno */}
                  <rect x="60" y="0" width="60" height="8" rx="2" fill="#deeaf5" stroke="#c8b89a" strokeWidth="1"/>
                  <line x1="90" y1="0" x2="90" y2="8" stroke="#c8b89a" strokeWidth="0.8"/>
                  {/* Dveře */}
                  <rect x="160" y="132" width="40" height="8" rx="2" fill="#e8e0d4" stroke="#c8b89a" strokeWidth="1"/>
                  {/* Plocha zdi zvýrazněná */}
                  <rect x="4" y="4" width="192" height="132" rx="2" fill="#c8a97a" opacity="0.08"/>
                </g>

                {/* Šipka */}
                <path d="M258 90 L310 90" stroke="#c8b89a" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M306 85 L312 90 L306 95" stroke="#c8b89a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>

                {/* Vzorec */}
                <g transform="translate(320, 30)">
                  <rect x="0" y="0" width="180" height="120" rx="8" fill="#f5f0e8" stroke="#e0d8cc" strokeWidth="1.5"/>
                  <text x="90" y="22" fontFamily="var(--font-sans,sans-serif)" fontSize="9" fill="#9a8a7a" textAnchor="middle" letterSpacing="0.06em">VZOREC</text>
                  <line x1="16" y1="28" x2="164" y2="28" stroke="#e0d8cc" strokeWidth="1"/>
                  <text x="90" y="52" fontFamily="var(--font-serif,serif)" fontSize="13" fill="#3a3a38" textAnchor="middle">plocha ÷ vydatnost</text>
                  <line x1="30" y1="62" x2="150" y2="62" stroke="#c8b89a" strokeWidth="1"/>
                  <text x="90" y="80" fontFamily="var(--font-serif,serif)" fontSize="13" fill="#3a3a38" textAnchor="middle">× počet vrstev</text>
                  <text x="90" y="106" fontFamily="var(--font-sans,sans-serif)" fontSize="9" fill="#9a8a7a" textAnchor="middle">= litry barvy</text>
                </g>

                {/* Šipka */}
                <path d="M508 90 L558 90" stroke="#c8b89a" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M554 85 L560 90 L554 95" stroke="#c8b89a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>

                {/* Plechovky barvy */}
                <g transform="translate(568, 28)">
                  {[0, 52, 104].map((x, i) => (
                    <g key={i} transform={`translate(${x}, 0)`}>
                      <rect x="4" y="10" width="40" height="50" rx="3" fill={i === 2 ? "#c8a97a" : "#e8e0d4"} opacity={i === 2 ? 0.6 : 0.4}/>
                      <rect x="4" y="10" width="40" height="50" rx="3" fill="none" stroke="#c8b89a" strokeWidth="1.5"/>
                      <rect x="8" y="6" width="32" height="8" rx="2" fill="#d4c8b8" stroke="#c8b89a" strokeWidth="1"/>
                      <rect x="10" y="22" width="28" height="20" rx="2" fill="white" opacity="0.4"/>
                      <text x="24" y="36" fontFamily="var(--font-sans,sans-serif)" fontSize="7" fill="#9a8a7a" textAnchor="middle">{i === 0 ? "2,5 L" : i === 1 ? "2,5 L" : "1 L"}</text>
                    </g>
                  ))}
                  <text x="76" y="80" fontFamily="var(--font-sans,sans-serif)" fontSize="9" fill="#9a8a7a" textAnchor="middle">= 6 L celkem</text>
                </g>
              </svg>
              <div style={{display:"flex",justifyContent:"space-around",padding:"8px 40px 12px",fontSize:"9px",letterSpacing:"0.1em",color:"#c8b89a",textTransform:"uppercase"}}>
                <span>Změř místnost</span>
                <span>Spočítej</span>
                <span>Nakup správně</span>
              </div>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#vzorec">Základní vzorec</a></li>
                <li><a href="#vydatnost">Vydatnost různých barev</a></li>
                <li><a href="#priklad">Příklad výpočtu</a></li>
                <li><a href="#okna-dvere">Odečíst okna a dveře?</a></li>
                <li><a href="#tipy">Tipy při nákupu</a></li>
              </ol>
            </nav>

            <section id="vzorec">
              <h2>Základní vzorec</h2>
              <p>Výpočet množství barvy je jednoduchý pokud znáš tři čísla: plochu ke natření, vydatnost barvy a počet vrstev.</p>
              <div className="article-tip" style={{background:"#f0f4ff", borderColor:"#6b8cff"}}>
                <strong>🧮 Vzorec:</strong><br/>
                <strong>Množství barvy (l) = plocha (m²) ÷ vydatnost (m²/l) × počet vrstev</strong>
              </div>
              <p>Vydatnost najdeš na plechovce barvy — obvykle se uvádí jako rozmezí, například 8–10 m²/l. Počítej vždy s nižší hodnotou (8 m²/l) pro realistický odhad.</p>
            </section>

            <section id="vydatnost">
              <h2>Vydatnost různých barev</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ barvy</th><th>Vydatnost</th><th>Poznámka</th></tr></thead>
                  <tbody>
                    <tr><td>Standardní interiérová barva</td><td>8–12 m²/l</td><td>Na vrstvu, hladký podklad</td></tr>
                    <tr><td>Barva s vysokou kryvostí</td><td>6–9 m²/l</td><td>Silnější pigmentace</td></tr>
                    <tr><td>Základní nátěr / penetrace</td><td>6–10 m²/l</td><td>Závisí na savosti podkladu</td></tr>
                    <tr><td>Fasádní barva</td><td>5–8 m²/l</td><td>Hrubší povrch, větší spotřeba</td></tr>
                    <tr><td>Barva na dřevo (email)</td><td>10–14 m²/l</td><td>Hladký nános</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="priklad">
              <h2>Příklad výpočtu</h2>
              <p>Místnost 4 × 3,5 m, výška stropu 2,6 m, dvě vrstvy barvy, vydatnost 10 m²/l:</p>
              <ul>
                <li>Obvod místnosti: (4 + 3,5) × 2 = 15 m</li>
                <li>Plocha zdí: 15 × 2,6 = 39 m²</li>
                <li>Odečteme okno (1,5 m²) a dveře (2 m²): 39 − 3,5 = <strong>35,5 m²</strong></li>
                <li>Množství na jednu vrstvu: 35,5 ÷ 10 = 3,55 l</li>
                <li>Dvě vrstvy: 3,55 × 2 = <strong>7,1 l</strong></li>
                <li>Zaokrouhlíme nahoru + rezerva 10 %: <strong>8 l</strong></li>
              </ul>
              <div className="article-tip"><strong>💡 Kalkulačka:</strong> Přesný výpočet s kalkulačkou najdeš na <Link href="/kalkulacky/kolik-barvy">domovniguru.cz/kalkulacky/kolik-barvy</Link> — stačí zadat rozměry místnosti.</div>
            </section>

            <section id="okna-dvere">
              <h2>Odečíst okna a dveře?</h2>
              <p>Záleží na velikosti. Obecné pravidlo:</p>
              <ul>
                <li><strong>Okno nebo dveře menší než 0,5 m²</strong> — neodečítej, slouží jako rezerva</li>
                <li><strong>Standardní dveře (0,9 × 2 m = 1,8 m²)</strong> — odečti</li>
                <li><strong>Velká okna nebo balkónové dveře</strong> — vždy odečti</li>
              </ul>
              <p>Pokud máš v místnosti hodně oken (například obývák s panoramatickými okny), může být úspora barvy i 15–20 %.</p>
            </section>

            <section id="tipy">
              <h2>Tipy při nákupu</h2>
              <ul>
                <li><strong>Vždy kup o 10 % víc</strong> než výpočet — na opravy, retušování a různorodost podkladu</li>
                <li><strong>Jednu barvu od jednoho výrobce z jedné šarže</strong> — barvy ze dvou šarží se mohou mírně lišit odstínem</li>
                <li><strong>Velká balení jsou levnější na litr</strong> — 10l kbelík vychází obvykle 20–30 % levněji než dva 5l kbelíky</li>
                <li><strong>Zbytek barvy uchovávej správně</strong> — přelij do menší nádoby, přikryj fólií a uzavři víčkem. Vydrží 2–3 roky.</li>
                <li><strong>Strop vs. zdi</strong> — stropní a nástěnná barva jsou různé produkty; stropní je hustší a méně se stéká</li>
              </ul>
            </section>

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
                <li><a href="#vzorec">Základní vzorec</a></li>
                <li><a href="#vydatnost">Vydatnost barev</a></li>
                <li><a href="#priklad">Příklad výpočtu</a></li>
                <li><a href="#okna-dvere">Okna a dveře</a></li>
                <li><a href="#tipy">Tipy při nákupu</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kalkulačka</div>
              <Link href="/kalkulacky/kolik-barvy" className="sidebar-cat-link">🎨 Kalkulačka barvy<span>Spočítat →</span></Link>
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
        .article-tip{background:#fffbeb;border-left:3px solid #f59e0b;border-radius:0 8px 8px 0;padding:14px 18px;font-size:14px;line-height:1.6;color:#78716c;margin:20px 0}
        .article-table-wrap{overflow-x:auto;margin:16px 0 24px}
        .article-table{width:100%;border-collapse:collapse;font-size:14px;line-height:1.5}
        .article-table th{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);padding:10px 14px;text-align:left;border-bottom:2px solid var(--border);background:var(--surface)}
        .article-table td{padding:10px 14px;border-bottom:1px solid var(--border);vertical-align:top;color:#2a2a28;font-weight:300}
        .article-table tr:last-child td{border-bottom:none}
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
