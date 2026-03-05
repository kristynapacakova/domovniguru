import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak vybrat správnou LED žárovku – Kelvin, lumen, CRI 2025",
  description: "Co znamenají čísla na krabičce LED žárovky? Průvodce výběrem podle místnosti, teploty světla a objímky.",
  alternates: { canonical: "https://domovniguru.cz/blog/jak-vybrat-led-zarovku" },
  openGraph: { title: "Jak vybrat správnou LED žárovku", description: "Kelvin, lumen, CRI – co znamenají čísla na krabičce.", url: "https://domovniguru.cz/blog/jak-vybrat-led-zarovku", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2025-02-01T08:00:00Z", modifiedTime: "2025-03-01T08:00:00Z", authors: ["DomovniGuru"] },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://domovniguru.cz/blog/jak-vybrat-led-zarovku#article", "headline": "Jak vybrat správnou LED žárovku", "datePublished": "2025-02-01T08:00:00Z", "dateModified": "2025-03-01T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "inLanguage": "cs" }] };

const RELATED = [
  { title: "LED vs. žárovky – co se skutečně vyplatí?", href: "/blog/led-vs-zarovky", read: "4 min" },
  { title: "Jak zapojit nové světlo na strop", href: "/blog/zapojit-svetlo-na-strop", read: "5 min" },
  { title: "Jak snížit účet za elektřinu doma", href: "/blog/snizit-ucet-za-elektrinu", read: "5 min" },
  { title: "Jak nainstalovat stmívač světla", href: "/blog/instalovat-stmivac", read: "4 min" },
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
              <span>Jak vybrat LED žárovku</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">⚡ Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak vybrat správnou LED žárovku</h1>
              <p className="article-lead">Kelvin, lumen, CRI, E27, GU10 — krabička od LED žárovky vypadá jako technická dokumentace. Tady je co každé číslo znamená a jak vybrat žárovku pro každou místnost.</p>
              <div className="article-meta-row"><span>Aktualizováno: 1. března 2025</span><span>·</span><span>DomovniGuru</span></div>
            </header>

            {/* HERO ILLUSTRATION */}
            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="180" fill="#fdf8f2"/>

                {/* Teplá žárovka — 2700K */}
                <g transform="translate(60, 20)">
                  <ellipse cx="70" cy="75" rx="45" ry="50" fill="#f4c842" opacity="0.25"/>
                  <ellipse cx="70" cy="75" rx="30" ry="34" fill="#f4c842" opacity="0.35"/>
                  <ellipse cx="70" cy="60" rx="22" ry="26" fill="none" stroke="#f4c842" strokeWidth="2" opacity="0.7"/>
                  <rect x="58" y="84" width="24" height="10" rx="2" fill="#c8a97a" opacity="0.6"/>
                  <rect x="60" y="92" width="20" height="18" rx="3" fill="#c8b89a" opacity="0.5"/>
                  <rect x="62" y="108" width="16" height="8" rx="2" fill="#9a8a7a" opacity="0.6"/>
                  {/* Teplé paprsky */}
                  {[0,45,90,135,180,225,270,315].map((angle,i)=>{
                    const r1=36, r2=50;
                    const a = angle * Math.PI / 180;
                    return <line key={i} x1={70+r1*Math.cos(a)} y1={60+r1*Math.sin(a)} x2={70+r2*Math.cos(a)} y2={60+r2*Math.sin(a)} stroke="#f4c842" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
                  })}
                </g>
                <text x="130" y="158" fontFamily="var(--font-sans,sans-serif)" fontSize="9" fill="#9a8a7a" textAnchor="middle">2700 K – teplá</text>

                {/* Neutrální žárovka — 4000K */}
                <g transform="translate(290, 20)">
                  <ellipse cx="70" cy="75" rx="45" ry="50" fill="#f0f4e8" opacity="0.3"/>
                  <ellipse cx="70" cy="75" rx="30" ry="34" fill="#e8f0d8" opacity="0.4"/>
                  <ellipse cx="70" cy="60" rx="22" ry="26" fill="none" stroke="#a0b870" strokeWidth="2" opacity="0.7"/>
                  <rect x="58" y="84" width="24" height="10" rx="2" fill="#c8a97a" opacity="0.6"/>
                  <rect x="60" y="92" width="20" height="18" rx="3" fill="#c8b89a" opacity="0.5"/>
                  <rect x="62" y="108" width="16" height="8" rx="2" fill="#9a8a7a" opacity="0.6"/>
                  {[0,45,90,135,180,225,270,315].map((angle,i)=>{
                    const r1=36, r2=50;
                    const a = angle * Math.PI / 180;
                    return <line key={i} x1={70+r1*Math.cos(a)} y1={60+r1*Math.sin(a)} x2={70+r2*Math.cos(a)} y2={60+r2*Math.sin(a)} stroke="#a0b870" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
                  })}
                </g>
                <text x="360" y="158" fontFamily="var(--font-sans,sans-serif)" fontSize="9" fill="#9a8a7a" textAnchor="middle">4000 K – neutrální</text>

                {/* Studená žárovka — 6500K */}
                <g transform="translate(520, 20)">
                  <ellipse cx="70" cy="75" rx="45" ry="50" fill="#deeaf5" opacity="0.3"/>
                  <ellipse cx="70" cy="75" rx="30" ry="34" fill="#d0e4f4" opacity="0.4"/>
                  <ellipse cx="70" cy="60" rx="22" ry="26" fill="none" stroke="#7ab0d0" strokeWidth="2" opacity="0.7"/>
                  <rect x="58" y="84" width="24" height="10" rx="2" fill="#c8a97a" opacity="0.6"/>
                  <rect x="60" y="92" width="20" height="18" rx="3" fill="#c8b89a" opacity="0.5"/>
                  <rect x="62" y="108" width="16" height="8" rx="2" fill="#9a8a7a" opacity="0.6"/>
                  {[0,45,90,135,180,225,270,315].map((angle,i)=>{
                    const r1=36, r2=50;
                    const a = angle * Math.PI / 180;
                    return <line key={i} x1={70+r1*Math.cos(a)} y1={60+r1*Math.sin(a)} x2={70+r2*Math.cos(a)} y2={60+r2*Math.sin(a)} stroke="#7ab0d0" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
                  })}
                </g>
                <text x="590" y="158" fontFamily="var(--font-sans,sans-serif)" fontSize="9" fill="#9a8a7a" textAnchor="middle">6500 K – studená</text>
              </svg>
              <div style={{display:"flex",justifyContent:"space-around",padding:"4px 60px 12px",fontSize:"9px",letterSpacing:"0.1em",color:"#c8b89a",textTransform:"uppercase"}}>
                <span>Ložnice, obývák</span>
                <span>Kuchyně, pracovna</span>
                <span>Garáž, sklep</span>
              </div>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#kelvin">Teplota světla – Kelvin (K)</a></li>
                <li><a href="#lumen">Jas – lumen (lm)</a></li>
                <li><a href="#cri">Index podání barev – CRI</a></li>
                <li><a href="#objimky">Typy objímek</a></li>
                <li><a href="#mistnosti">Co kam – podle místnosti</a></li>
                <li><a href="#stmivani">Stmívatelné LED</a></li>
              </ol>
            </nav>

            <section id="kelvin">
              <h2>Teplota světla – Kelvin (K)</h2>
              <p>Kelvin říká jak "teplé" nebo "studené" světlo bude. Nemá nic společného s teplotou žárovky — je to jen popis barvy světla.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Hodnota</th><th>Barva světla</th><th>Vhodné pro</th></tr></thead>
                  <tbody>
                    <tr><td>2700–3000 K</td><td>Teplá bílá (žlutavá)</td><td>Ložnice, obývák, jídelna</td></tr>
                    <tr><td>3500–4000 K</td><td>Neutrální bílá</td><td>Kuchyně, koupelna, pracovna</td></tr>
                    <tr><td>5000–6500 K</td><td>Studená bílá (namodralá)</td><td>Garáž, sklep, průmyslové prostory</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Doporučení:</strong> Pro domácnost volte 2700–3000 K — studená světla (6500 K) jsou nepříjemná pro dlouhodobý pobyt a narušují spánek.</div>
            </section>

            <section id="lumen">
              <h2>Jas – lumen (lm)</h2>
              <p>Lumen měří kolik světla žárovka skutečně vydá — ne kolik energie spotřebuje. Watty u LED nemají smysl porovnávat se starými žárovkami přímo — proto je na krabičce vždy uvedena i "ekvivalentní" hodnota.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Stará žárovka</th><th>Odpovídá LED</th><th>Lumeny</th></tr></thead>
                  <tbody>
                    <tr><td>40 W</td><td>~5–6 W LED</td><td>~450 lm</td></tr>
                    <tr><td>60 W</td><td>~8–9 W LED</td><td>~800 lm</td></tr>
                    <tr><td>75 W</td><td>~11–12 W LED</td><td>~1050 lm</td></tr>
                    <tr><td>100 W</td><td>~14–15 W LED</td><td>~1520 lm</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="cri">
              <h2>Index podání barev – CRI</h2>
              <p>CRI (Color Rendering Index) říká jak věrně světlo zobrazuje barvy. Stupnice 0–100, kde 100 = přirozené sluneční světlo.</p>
              <ul>
                <li><strong>CRI 80+</strong> — standard pro domácnost, barvy vypadají přirozeně</li>
                <li><strong>CRI 90+</strong> — doporučeno pro koupelnu, šatnu a místa kde záleží na barvách</li>
                <li><strong>CRI 95+</strong> — profesionální použití (ateliér, galerie, obchod s oblečením)</li>
              </ul>
              <p>Levné žárovky mívají CRI 70–75 — barvy pod nimi vypadají vybledlé a nezdravě. Vždy hledej min. CRI 80.</p>
            </section>

            <section id="objimky">
              <h2>Typy objímek</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Označení</th><th>Popis</th><th>Typické použití</th></tr></thead>
                  <tbody>
                    <tr><td>E27</td><td>Velký závit, ⌀27 mm</td><td>Lustr, stojací lampa, klasické svítidlo</td></tr>
                    <tr><td>E14</td><td>Malý závit, ⌀14 mm</td><td>Noční lampička, dekorativní svítidlo</td></tr>
                    <tr><td>GU10</td><td>Bajonet, otočný zámek</td><td>Bodovky, podhledová svítidla</td></tr>
                    <tr><td>GU5.3 / MR16</td><td>Dvě nožičky, ⌀5,3 mm</td><td>Bodovky s transformátorem (12V)</td></tr>
                    <tr><td>G9</td><td>Dvě nožičky smyčka</td><td>Nástěnná svítidla, lustry</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="mistnosti">
              <h2>Co kam – podle místnosti</h2>
              <ul>
                <li><strong>Obývák:</strong> 2700–3000 K, 800–1200 lm na svítidlo, CRI 80+</li>
                <li><strong>Ložnice:</strong> 2700 K, 400–800 lm, stmívatelné pro atmosféru</li>
                <li><strong>Kuchyně:</strong> 3500–4000 K, 800–1200 lm, CRI 90+ (barvy jídla)</li>
                <li><strong>Koupelna:</strong> 3000–4000 K, 800–1000 lm, CRI 90+ (líčení, holení)</li>
                <li><strong>Pracovna:</strong> 4000 K, 500–800 lm na pracovní plochu, CRI 80+</li>
                <li><strong>Dětský pokoj:</strong> 3000–4000 K, stmívatelné, CRI 90+</li>
              </ul>
            </section>

            <section id="stmivani">
              <h2>Stmívatelné LED</h2>
              <p>Ne každá LED žárovka jde stmívat — na krabičce musí být výslovně uvedeno "dimmable" nebo "stmívatelná". Obyčejná LED žárovka ve stmívači bude blikat nebo se úplně vypne.</p>
              <p>Navíc potřebuješ <strong>kompatibilní stmívač</strong> — starý stmívač pro žárovky (odporový nebo indukční) s LED nefunguje. Potřebuješ stmívač označený jako "LED compatible" nebo "universal dimmer".</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Před koupí stmívatelných LED zkontroluj seznam kompatibilních žárovek v návodu ke stmívači — nebo kup stmívač a žárovky od stejného výrobce.</div>
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
                <li><a href="#kelvin">Kelvin – teplota světla</a></li>
                <li><a href="#lumen">Lumen – jas</a></li>
                <li><a href="#cri">CRI – podání barev</a></li>
                <li><a href="#objimky">Typy objímek</a></li>
                <li><a href="#mistnosti">Co kam</a></li>
                <li><a href="#stmivani">Stmívatelné LED</a></li>
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
