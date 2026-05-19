import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak vyměnit staré dveře – výběr, montáž a záruby 2026",
  description: "Jak vyměnit staré dveře v bytě nebo domě. Výběr správných dveří, typy zárubní, postup montáže a na co si dát pozor. Průvodce pro laiky i pokročilé.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/vymenit-stare-dvere" },
  openGraph: { title: "Jak vyměnit staré dveře 2026", description: "Výběr dveří, záruby a postup montáže – jak vyměnit dveře krok za krokem.", url: "https://www.domovniguru.cz/blog/vymenit-stare-dvere", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-22T08:00:00Z", modifiedTime: "2026-04-22T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak vyměnit staré dveře 2026", description: "Výběr dveří, záruby a postup montáže krok za krokem." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/vymenit-stare-dvere#article",
    "headline": "Jak vyměnit staré dveře – výběr, montáž a záruby 2026",
    "datePublished": "2026-04-22T08:00:00Z",
    "dateModified": "2026-04-22T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak vyměnit dveře", "výměna dveří byt", "zárubeň dveře výměna", "montáž dveří postup", "dveře obložková zárubeň", "výběr interiérových dveří"]
  }]
};

const RELATED = [
  { title: "Jak naplánovat rekonstrukci bytu", href: "/blog/planovani-rekonstrukce-bytu", read: "8 min" },
  { title: "Jak odhadnout cenu rekonstrukce", href: "/blog/odhadnout-cenu-rekonstrukce", read: "6 min" },
  { title: "Jak najít a prověřit řemeslníka", href: "/blog/najit-proveri-remeslnika", read: "5 min" },
  { title: "Jak malovat zeď", href: "/blog/jak-malovat-zed", read: "5 min" },
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
              <Link href="/blog/kategorie/stehovani">Stěhování & rekonstrukce</Link><span className="breadcrumb-sep">/</span>
              <span>Výměna starých dveří</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏠 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 7 min čtení</span>
              </div>
              <h1 className="article-h1">Jak vyměnit staré dveře – výběr, montáž a záruby</h1>
              <p className="article-lead">Výměna dveří je jedna z nejefektivnějších renovací — promění celý charakter místnosti za jeden den. Zárubeň nebo obložka, posuvné nebo otočné — tady je jak na to.</p>
              <div className="article-meta-row"><span>Aktualizováno: 22. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/vymenit-stare-dvere" title="Jak vyměnit staré dveře – výběr, montáž a záruby 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 185" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="185" fill="#f8f6f2"/>
                {/* Typy zárubní */}
                <text x="380" y="22" textAnchor="middle" fontSize="10" fill="#6a6050" fontWeight="700" letterSpacing="0.04em">TYPY ZÁRUBNÍ – JAKOU VYBRAT</text>

                {[
                  { x:20, name:"Obložková zárubeň", icon:"🪟", pros:"Snadná montáž\nBez bourání\nVypadá moderně", cons:"Menší otvor\n(tloušťka obložky)", best:"Renovace\nstávajícího otvoru", color:"#5a9e6f" },
                  { x:210, name:"Ocelová zárubeň", icon:"🔩", pros:"Velmi pevná\nDo nosných zdí\nLze zazdít", cons:"Nutné bourání\nDražší montáž", best:"Nový otvor\nnebo novostavba", color:"#4a90d9" },
                  { x:400, name:"Stavební pouzdro\n(posuvné)", icon:"↔️", pros:"Dveře se zasouvají\ndo zdi", cons:"Náročná instalace\nOd nuly", best:"Malé prostory\nbez záruby", color:"#9b6fd4" },
                  { x:590, name:"Zárubeň do SDK", icon:"📐", pros:"Lehká\nPro sádrokarton\nRychlá montáž", cons:"Jen pro SDK stěny\nMenší nosnost", best:"Příčky\nze sádrokartonu", color:"#f59e0b" },
                ].map(({x, name, icon, pros, cons, best, color}) => (
                  <g key={x} transform={`translate(${x}, 28)`}>
                    <rect x="0" y="0" width="163" height="145" rx="8" fill="#fff" stroke={color} strokeWidth="1.2"/>
                    <text x="81" y="28" textAnchor="middle" fontSize="18">{icon}</text>
                    <text x="81" y="47" textAnchor="middle" fontSize="9.5" fill={color} fontWeight="700">{name.split('\n')[0]}</text>
                    {name.split('\n')[1] && <text x="81" y="59" textAnchor="middle" fontSize="9.5" fill={color} fontWeight="700">{name.split('\n')[1]}</text>}
                    <line x1="10" y1="65" x2="153" y2="65" stroke={color} strokeWidth="0.5" opacity="0.4"/>
                    {pros.split('\n').map((l,i) => <text key={i} x="12" y={78+i*12} fontSize="8" fill="#3a7e4f">✓ {l}</text>)}
                    {cons.split('\n').map((l,i) => <text key={i} x="12" y={104+i*12} fontSize="8" fill="#e07040">✗ {l}</text>)}
                    <rect x="8" y="122" width="147" height="18" rx="4" fill={color} opacity="0.1"/>
                    <text x="81" y="134" textAnchor="middle" fontSize="7.5" fill={color} fontWeight="600">{best}</text>
                  </g>
                ))}

                <rect y="168" width="760" height="17" fill="#f0ece8" opacity="0.5"/>
                <text x="380" y="180" textAnchor="middle" fontSize="8" fill="#8a7050" fontWeight="600" letterSpacing="0.06em">🚪 RENOVACE = OBLOŽKOVÁ ZÁRUBEŇ · NOVÁ PŘÍČKA = SDK ZÁRUBEŇ · NOSNÁ ZEĎ = OCELOVÁ</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#mereni">Jak správně změřit otvor pro dveře</a></li>
                <li><a href="#typy">Typy dveří – co vybrat</a></li>
                <li><a href="#zarubne">Zárubeň nebo obložka</a></li>
                <li><a href="#montaz">Montáž krok za krokem</a></li>
                <li><a href="#ceny">Orientační ceny</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="mereni">
              <h2>Jak správně změřit otvor pro dveře</h2>
              <p>Špatné rozměry = dveře se nevejdou nebo jsou příliš malé. Měř vždy hrubý otvor ve zdi, ne existující zárubeň.</p>
              <ul>
                <li><strong>Hrubý otvor:</strong> Šířka a výška stavebního otvoru ve zdi (bez záruby). Typické české rozměry: 600, 700, 800, 900 mm šířka; 1 970, 2 020 mm výška.</li>
                <li><strong>Světlý rozměr:</strong> Průchozí rozměr (šířka a výška po instalaci záruby). Pro dveře 800 mm je světlý rozměr 800 mm, hrubý otvor ~900 mm.</li>
                <li><strong>Tloušťka zdi:</strong> Zárubeň musí odpovídat tloušťce zdi. Obložková zárubeň je nastavitelná (60–120 mm nebo 120–160 mm a více).</li>
                <li><strong>Měř vícekrát:</strong> Na různých místech — zdi nejsou vždy rovné. Berte nejmenší hodnotu jako základ.</li>
              </ul>
            </section>

            <section id="typy">
              <h2>Typy dveří – co vybrat</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ</th><th>Výhody</th><th>Nevýhody</th><th>Cena (dveře)</th></tr></thead>
                  <tbody>
                    <tr><td><strong>CPL (folie)</strong></td><td>Levné, lehké, hladký povrch</td><td>Méně odolné, nelze lakovat</td><td>2 000–5 000 Kč</td></tr>
                    <tr><td><strong>Dýha (přírodní)</strong></td><td>Přirozený vzhled, lakované</td><td>Dražší, citlivé na vlhkost</td><td>5 000–15 000 Kč</td></tr>
                    <tr><td><strong>Plné dřevo</strong></td><td>Nejtrvanlivější, nejtěžší</td><td>Nejdražší, těžký</td><td>10 000–30 000 Kč</td></tr>
                    <tr><td><strong>Skleněné prvky</strong></td><td>Světlo do tmavých prostor</td><td>Méně soukromí</td><td>+1 000–5 000 Kč</td></tr>
                    <tr><td><strong>Posuvné</strong></td><td>Úspora místa</td><td>Složitější instalace</td><td>5 000–20 000 Kč</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="zarubne">
              <h2>Zárubeň nebo obložka – klíčové rozhodnutí</h2>
              <ul>
                <li><strong>Obložková zárubeň:</strong> Nejčastější volba při renovaci. Skládá se z rámu a obložek — obložky překryjí stávající zeď bez nutnosti bourání. Montáž zvládneš sám nebo s jedním pomocníkem. Cena záruby: 1 500–5 000 Kč.</li>
                <li><strong>Ocelová zárubeň:</strong> Pevná zárubeň zabetonovaná nebo zazděná ve stěně. Nutná u nosných zdí nebo při budování nového otvoru. Montáž vyžaduje odborníka. Cena záruby: 500–2 000 Kč, ale práce navíc 2 000–5 000 Kč.</li>
                <li><strong>Zda bourání nutné:</strong> Stará ocelová zárubeň se musí vytlačit nebo vybourat. Stará dřevěná zárubeň se odstraní snáze. Na její místo lze nasadit obložkovou zárubeň bez dalšího bourání.</li>
              </ul>
            </section>

            <section id="montaz">
              <h2>Montáž obložkové záruby krok za krokem</h2>
              <ul>
                <li><strong>Krok 1 — Odstraň staré dveře a zárubeň:</strong> Odstraň závěsy, vytáhni dveřní křídlo. Starý rám vytlačit nebo vyříznout.</li>
                <li><strong>Krok 2 — Uprav hrubý otvor:</strong> Otvor musí být rovný a přibližně pravoúhlý. Nerovnosti vyrovnat maltou.</li>
                <li><strong>Krok 3 — Usaď zárubeň:</strong> Zárubeň vlož do otvoru, vyrovnej vodováhou ve všech směrech. Dočasně podepři klíny.</li>
                <li><strong>Krok 4 — Připevni zárubeň:</strong> Zárubeň přišroubuj kotevními šrouby do zdi. Zkontroluj svislost a vodorovnost po každém šroubu.</li>
                <li><strong>Krok 5 — Zavěs dveřní křídlo:</strong> Nasaď závěsy, zkontroluj vůle (2–3 mm na stranách, 3–5 mm dole). Dolaď polohu závěsů.</li>
                <li><strong>Krok 6 — Vyspáruj a zakryj mezery:</strong> Mezery mezi zárubeň a zdí vyplň PU pěnou nebo maltou. Obložky překryjí spoje se zdí.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Montáž dveří je přesná práce — 1 mm rozdíl v svislosti záruby způsobí, že dveře samy od sebe padají nebo se samovolně otevírají. Vodováhu používej po celou dobu montáže.</div>
            </section>

            <section id="ceny">
              <h2>Orientační ceny 2026</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Položka</th><th>Cena DIY</th><th>Cena s montáží</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Dveře CPL + obložková zárubeň</strong></td><td>3 500–8 000 Kč</td><td>6 000–14 000 Kč</td></tr>
                    <tr><td><strong>Dveře dýha + obložková zárubeň</strong></td><td>7 000–18 000 Kč</td><td>11 000–25 000 Kč</td></tr>
                    <tr><td><strong>Montáž bez materiálu (1 ks dveří)</strong></td><td>—</td><td>1 500–4 000 Kč</td></tr>
                    <tr><td><strong>Výměna záruby (s bouráním)</strong></td><td>—</td><td>+2 000–5 000 Kč</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Mohu vyměnit dveře sám bez odborníka?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Výměna dveřního křídla (do existující záruby) zvládneš sám — odstraníš staré závěsy, nasadíš nové dveře a seřídíš. Výměna záruby je náročnější ale stále proveditelná pro šikovného kutila s vodováhou a trpělivostí. Vyměnit ocelovou zárubeň v nosné zdi je práce pro odborníka.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak dlouho trvá výměna dveří?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Výměna jen křídla do existující záruby: 30–60 minut. Výměna dveří i obložkové záruby (DIY): půl dne až celý den. Profesionální montáž jedněch dveří včetně záruby: 2–4 hodiny. Bourání staré ocelové záruby a instalace nové: celý pracovní den.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak vybrat správnou výšku a šířku dveří?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Standard v ČR: výška 1 970 nebo 2 020 mm (světlý rozměr), šířka 600–900 mm. Pro ložnici a dětský pokoj: 700–800 mm. Pro koupelnu: 600–700 mm. Pro obývák a hlavní průchody: 800–900 mm. Změř světlý rozměr existujících dveří jako základ.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/vymenit-stare-dvere" title="Jak vyměnit staré dveře – výběr, montáž a záruby 2026" />

            <section className="related-section">
              <h2>Související články</h2>
              <div className="related-grid">
                {RELATED.map((r) => (
                  <Link key={r.href} href={r.href} className="card">
                    <div className="card-eyebrow-row"><span>Stěhování & rekonstrukce</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#mereni">Jak změřit otvor</a></li>
                <li><a href="#typy">Typy dveří</a></li>
                <li><a href="#zarubne">Zárubeň nebo obložka</a></li>
                <li><a href="#montaz">Montáž krok za krokem</a></li>
                <li><a href="#ceny">Orientační ceny</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/stehovani" className="sidebar-cat-link">🏠 Stěhování & rekonstrukce<span>20 článků →</span></Link>
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
