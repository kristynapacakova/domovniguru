import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Fasádní barva – jak vybrat správný typ a jak nanášet 2026",
  description: "Silikonová, akrylátová nebo minerální fasádní barva? Jak vybrat barvu na fasádu, připravit povrch a nanést. Trvanlivý výsledek na 10–15 let bez opakování.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/fasadni-barva-vyber" },
  openGraph: { title: "Fasádní barva – jak vybrat správný typ 2026", description: "Silikonová, akrylátová nebo minerální fasáda – jak vybrat, připravit a nanést.", url: "https://www.domovniguru.cz/blog/fasadni-barva-vyber", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-22T08:00:00Z", modifiedTime: "2026-04-22T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Fasádní barva – jak vybrat správný typ 2026", description: "Silikonová, akrylátová nebo minerální – výběr fasádní barvy krok za krokem." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/fasadni-barva-vyber#article",
    "headline": "Fasádní barva – jak vybrat správný typ a jak nanášet 2026",
    "datePublished": "2026-04-22T08:00:00Z",
    "dateModified": "2026-04-22T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["fasádní barva výběr", "silikonová fasádní barva", "jak natřít fasádu", "akrylátová fasádní barva", "minerální fasádní barva", "fasáda barva postup"]
  }]
};

const RELATED = [
  { title: "Jak malovat zeď – kompletní průvodce", href: "/blog/jak-malovat-zed", read: "5 min" },
  { title: "Jak vybrat barvu na zeď", href: "/blog/jak-vybrat-barvu-na-zed", read: "9 min" },
  { title: "Barva do vlhkých prostor – koupelna a kuchyň", href: "/blog/barva-do-vlhkych-prostoru", read: "5 min" },
  { title: "Jak natřít venkovní dřevo", href: "/blog/natrit-venkovni-drevo", read: "5 min" },
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
              <span>Fasádní barva</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování & barvy</Link>
                <span className="article-read-time">⏱ 7 min čtení</span>
              </div>
              <h1 className="article-h1">Fasádní barva – jak vybrat správný typ a jak nanášet</h1>
              <p className="article-lead">Špatně vybraná fasádní barva vydrží 3–5 let a pak se loupe. Správná vydrží 10–15 let bez opravy. Rozdíl je v typu barvy, přípravě povrchu a podmínkách nanášení.</p>
              <div className="article-meta-row"><span>Aktualizováno: 22. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/fasadni-barva-vyber" title="Fasádní barva – jak vybrat správný typ a jak nanášet 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 195" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="195" fill="#f8f4f0"/>
                {[
                  { x:20, name:"Silikonová", stars:"⭐⭐⭐⭐⭐", pros:["Nejodolnější","Samočisticí efekt","Difuzní – zeď dýchá","12–15 let trvanlivost"], price:"400–700 Kč/l", color:"#5a9e6f", tag:"Nejlepší volba" },
                  { x:278, name:"Akrylátová", stars:"⭐⭐⭐⭐", pros:["Dobrá odolnost","Velký výběr barev","Snadná aplikace","7–10 let trvanlivost"], price:"200–400 Kč/l", color:"#4a90d9", tag:"Dobrý poměr cena/výkon" },
                  { x:536, name:"Minerální (vápenná)", stars:"⭐⭐⭐", pros:["Maximálně prodyšná","Ekologická","Pro historické objekty","5–8 let trvanlivost"], price:"100–250 Kč/l", color:"#9b6fd4", tag:"Pro starší domy" },
                ].map(({x, name, stars, pros, price, color, tag}) => (
                  <g key={x} transform={`translate(${x}, 12)`}>
                    <rect x="0" y="0" width="222" height="170" rx="8" fill="#fff" stroke={color} strokeWidth="1.5"/>
                    <rect x="0" y="0" width="222" height="6" rx="4" fill={color} opacity="0.5"/>
                    <text x="111" y="25" textAnchor="middle" fontSize="13" fill={color} fontWeight="700">{name}</text>
                    <text x="111" y="42" textAnchor="middle" fontSize="11">{stars}</text>
                    <line x1="12" y1="50" x2="210" y2="50" stroke={color} strokeWidth="0.5" opacity="0.4"/>
                    {pros.map((p, i) => (
                      <text key={i} x="14" y={65+i*14} fontSize="8.5" fill="#3a3a30">✓ {p}</text>
                    ))}
                    <rect x="8" y="125" width="206" height="20" rx="4" fill={color} opacity="0.12"/>
                    <text x="111" y="138" textAnchor="middle" fontSize="8.5" fill={color} fontWeight="700">od {price}</text>
                    <rect x="8" y="150" width="206" height="16" rx="4" fill={color} opacity="0.06"/>
                    <text x="111" y="161" textAnchor="middle" fontSize="7.5" fill={color} fontWeight="600">{tag}</text>
                  </g>
                ))}
                <rect y="178" width="760" height="17" fill="#f0e8e0" opacity="0.5"/>
                <text x="380" y="190" textAnchor="middle" fontSize="8" fill="#8a7050" fontWeight="600" letterSpacing="0.06em">🎨 PRO VĚTŠINU FASÁD: SILIKONOVÁ · STARŠÍ DOMY: MINERÁLNÍ · NÍZKÝ ROZPOČET: AKRYLÁTOVÁ</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#typy">Typy fasádních barev – srovnání</a></li>
                <li><a href="#jak-vybrat">Jak vybrat pro váš dům</a></li>
                <li><a href="#priprava">Příprava fasády před nátěrem</a></li>
                <li><a href="#nanaseni">Nanášení krok za krokem</a></li>
                <li><a href="#chyby">Nejčastější chyby</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="typy">
              <h2>Typy fasádních barev – srovnání</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ</th><th>Trvanlivost</th><th>Difuznost</th><th>Cena (l)</th><th>Pro koho</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Silikonová</strong></td><td>12–15 let</td><td>Velmi vysoká</td><td>400–700 Kč</td><td>Většina fasád, nové domy</td></tr>
                    <tr><td><strong>Silikonsilikátová</strong></td><td>12–15 let</td><td>Velmi vysoká</td><td>350–600 Kč</td><td>Starší domy s vlhkostí</td></tr>
                    <tr><td><strong>Akrylátová</strong></td><td>7–10 let</td><td>Střední</td><td>200–400 Kč</td><td>Ekonomická varianta</td></tr>
                    <tr><td><strong>Silikonová s nanoefektem</strong></td><td>15–20 let</td><td>Nejvyšší</td><td>600–1 000 Kč</td><td>Prémiové fasády</td></tr>
                    <tr><td><strong>Minerální (vápenná)</strong></td><td>5–8 let</td><td>Maximální</td><td>100–250 Kč</td><td>Historické objekty, staré omítky</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Co je difuznost?</strong> Difuzní barva propouští vodní páru ven ze zdi — zeď "dýchá". Nízká difuznost způsobuje kondenzaci vlhkosti pod barvou a její odlupování. Pro české klima je difuznost klíčový parametr.</div>
            </section>

            <section id="jak-vybrat">
              <h2>Jak vybrat fasádní barvu pro váš dům</h2>
              <ul>
                <li><strong>Nový dům nebo zateplená fasáda (EPS nebo MW):</strong> Silikonová barva — nejlepší kombinace difuznosti, trvanlivosti a ochrany před plísněmi.</li>
                <li><strong>Starý dům s vlhkostí nebo výkvěty solí:</strong> Silikonsilikátová barva — lépe snáší vlhkost a minerální soli z omítky.</li>
                <li><strong>Historický dům nebo omítka z vápna:</strong> Minerální (vápenná) barva — zachová paropropustnost historické omítky. Akrylátová nebo silikonová by ji "uzavřela" a způsobila odlupování.</li>
                <li><strong>Nízký rozpočet:</strong> Akrylátová barva — dobrá odolnost za přijatelnou cenu. Plánuj přemalování za 7–10 let.</li>
              </ul>
            </section>

            <section id="priprava">
              <h2>Příprava fasády před nátěrem</h2>
              <p>Příprava povrchu je 70 % výsledku. Barva nanesená na špatně připravenou fasádu odpadne za 2–3 roky bez ohledu na cenu.</p>
              <ul>
                <li><strong>Čištění fasády:</strong> Tlakovou vodou (100–150 bar) odstraň nečistoty, řasy a staré odlupující se vrstvy. Nechej fasádu 2–4 týdny vyschnout.</li>
                <li><strong>Ošetření plísní a řas:</strong> Pokud jsou viditelné zelené nebo černé skvrny, ošetři fasádním biocidem před malováním. Nechej působit dle návodu (24–48 hodin).</li>
                <li><strong>Oprava prasklin:</strong> Praskliny do 0,5 mm vyplň fasádním tmelem. Větší praskliny (nad 1 mm) mohou signalizovat pohyb konstrukce — konzultuj se statikem.</li>
                <li><strong>Penetrace:</strong> Na savé nebo nové omítky nanes fasádní penetraci. Penetrace sjednotí savost povrchu a zlepší přilnavost barvy.</li>
                <li><strong>Zakrytí okenních rámů a okapů:</strong> Zakryj malířskou páskou a fólií vše co nemá být natřeno.</li>
              </ul>
              <div className="article-tip"><strong>⚠️ Pozor na počasí:</strong> Fasádní barvu nanes pouze při teplotě 5–30 °C a relativní vlhkosti pod 80 %. Nikdy nenáš za přímého slunce, dešti nebo při předpovědi mrazu do 24 hodin.</div>
            </section>

            <section id="nanaseni">
              <h2>Nanášení fasádní barvy krok za krokem</h2>
              <ul>
                <li><strong>Krok 1 — Naředění:</strong> Fasádní barvu naředit dle návodu výrobce — typicky 5–10 % vodou pro první vrstvu (penetrační nátěr).</li>
                <li><strong>Krok 2 — První vrstva:</strong> Nanes fasádním válcem (s dlouhým vlasem) nebo štětcem pro rohové detaily. Pohyb shora dolů, překrývej pásy o 10 cm.</li>
                <li><strong>Krok 3 — Schnutí:</strong> Nechej první vrstvu zaschnout dle návodu — typicky 4–8 hodin. Nespeš — nedostatečně zaschlá první vrstva způsobí odlepování druhé.</li>
                <li><strong>Krok 4 — Druhá vrstva:</strong> Druhou vrstvu nanes bez ředění nebo jen mírně. Pohyb v opačném směru než první vrstva.</li>
                <li><strong>Spotřeba:</strong> Typicky 1 litr barvy na 5–8 m² fasády (závisí na savosti omítky a struktuře). Vždy kup 10–15 % navíc.</li>
              </ul>
            </section>

            <section id="chyby">
              <h2>Nejčastější chyby při malování fasády</h2>
              <ul>
                <li><strong>Malování za horkého počasí nebo přímého slunce:</strong> Barva schne příliš rychle, vznikají přechody a stopy po válci. Maluj ráno nebo na odvrácenou stranu od slunce.</li>
                <li><strong>Přeskočení penetrace:</strong> Na savé omítce barva pronikne hluboko a nestihne vytvořit ochrannou vrstvu. Výsledek: skvrny a nerovnoměrné krytí.</li>
                <li><strong>Malování na mokrou fasádu:</strong> Fasáda po dešti nebo tlakové vodě potřebuje min. 2–4 týdny na vyschnutí. Malování na vlhkou fasádu způsobí odlupování.</li>
                <li><strong>Použití interiérové barvy na fasádu:</strong> Interiérová barva nemá UV stabilizátory a hydroizolační vlastnosti — rozpadne se za jednu sezónu.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Kolik stojí malování fasády?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Práce malíře: 80–200 Kč/m² (2 vrstvy). Materiál: 50–150 Kč/m² (závisí na typu barvy). Pro rodinný dům 150 m² fasády počítej 40 000–80 000 Kč včetně lešení. Lešení tvoří 20–30 % ceny — vyplatí se sjednat malování a lešení najednou.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak dlouho vydrží fasádní barva?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Závisí na typu barvy a orientaci fasády. Silikonová: 12–15 let. Akrylátová: 7–10 let. Minerální: 5–8 let. Jižní fasáda (přímé slunce) se opotřebí rychleji než severní. Pravidelné čištění fasády (každé 3–5 let) prodlouží životnost nátěru.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Mohu malovat fasádu sám bez lešení?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Pro přízemí a nízkopodlažní části ano. Pro patro a výše potřebuješ lešení nebo plošinu — práce na žebříku je nebezpečná a neumožňuje rovnoměrné nanášení. Lešení pro rodinný dům stojí 5 000–15 000 Kč na pronájem na 2–3 týdny.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/fasadni-barva-vyber" title="Fasádní barva – jak vybrat správný typ a jak nanášet 2026" />

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
                <li><a href="#typy">Typy fasádních barev</a></li>
                <li><a href="#jak-vybrat">Jak vybrat pro váš dům</a></li>
                <li><a href="#priprava">Příprava fasády</a></li>
                <li><a href="#nanaseni">Nanášení krok za krokem</a></li>
                <li><a href="#chyby">Nejčastější chyby</a></li>
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
