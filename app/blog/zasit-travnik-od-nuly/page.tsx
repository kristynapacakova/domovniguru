import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak zasít trávník od nuly – příprava půdy, setí, péče 2026",
  description: "Jak zasít nový trávník krok za krokem. Příprava půdy, výběr travní směsi, správné setí a péče po vzejití. Krásný hustý trávník za 6–8 týdnů.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/zasit-travnik-od-nuly" },
  openGraph: { title: "Jak zasít trávník od nuly 2026", description: "Příprava půdy, výběr směsi a správné setí – nový trávník za 6–8 týdnů.", url: "https://www.domovniguru.cz/blog/zasit-travnik-od-nuly", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-22T08:00:00Z", modifiedTime: "2026-04-22T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak zasít trávník od nuly 2026", description: "Příprava půdy, výběr směsi a správné setí – nový trávník za 6–8 týdnů." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/zasit-travnik-od-nuly#article",
    "headline": "Jak zasít trávník od nuly – příprava půdy, setí, péče 2026",
    "datePublished": "2026-04-22T08:00:00Z",
    "dateModified": "2026-04-22T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak zasít trávník", "setí trávníku", "příprava půdy pro trávník", "travní semeno výběr", "nový trávník postup", "trávník od nuly"]
  }]
};

const RELATED = [
  { title: "Jak opravit trávník – mech a holá místa", href: "/blog/opravit-travnik-ples-mech", read: "6 min" },
  { title: "Jak zavlažovat zahradu", href: "/blog/zavlaha-zahrada-postup", read: "6 min" },
  { title: "Jak hnojit zahradu", href: "/blog/jak-hnojit-zahradu", read: "6 min" },
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
              <span>Setí trávníku od nuly</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 7 min čtení</span>
              </div>
              <h1 className="article-h1">Jak zasít trávník od nuly – příprava půdy, setí, péče</h1>
              <p className="article-lead">Nový trávník od nuly není složitý — ale vyžaduje správnou přípravu půdy. 80 % úspěchu je v přípravě podkladu. Samotné setí trvá hodinu, příprava půdy celý den. Tady je kompletní postup.</p>
              <div className="article-meta-row"><span>Aktualizováno: 22. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/zasit-travnik-od-nuly" title="Jak zasít trávník od nuly – příprava půdy, setí, péče 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 185" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="185" fill="#f0f8ec"/>
                <text x="380" y="22" textAnchor="middle" fontSize="10" fill="#3a7e4f" fontWeight="700" letterSpacing="0.04em">POSTUP SETÍ TRÁVNÍKU OD NULY</text>

                {[
                  { n:"1", x:30, label:"Vyčistit plochu", sub:"Odstranit plevel\na kameny", color:"#e07040", icon:"🧹" },
                  { n:"2", x:150, label:"Překopat půdu", sub:"20–25 cm hluboko\nrozdrtit hroudy", color:"#f59e0b", icon:"⛏️" },
                  { n:"3", x:270, label:"Urovnat a upěchovat", sub:"Hráběmi + válek\nrovný povrch", color:"#9b6fd4", icon:"🪥" },
                  { n:"4", x:390, label:"Vápnit a hnojit", sub:"Startovací hnojivo\npH 6–7", color:"#4a90d9", icon:"🌱" },
                  { n:"5", x:510, label:"Sít semeno", sub:"30–40 g/m²\nkřížem", color:"#5a9e6f", icon:"🌾" },
                  { n:"6", x:630, label:"Zálivka", sub:"2× denně\ndo vzejití", color:"#3a7e4f", icon:"💧" },
                ].map(({n, x, label, sub, color, icon}) => (
                  <g key={n} transform={`translate(${x}, 32)`}>
                    <rect x="0" y="0" width="108" height="128" rx="8" fill="#fff" stroke={color} strokeWidth="1.2"/>
                    <circle cx="54" cy="20" r="16" fill={color} opacity="0.15"/>
                    <text x="54" y="25" textAnchor="middle" fontSize="10" fill={color} fontWeight="700">{n}</text>
                    <text x="54" y="52" textAnchor="middle" fontSize="18">{icon}</text>
                    <text x="54" y="72" textAnchor="middle" fontSize="8.5" fill={color} fontWeight="600">{label}</text>
                    {sub.split('\n').map((line, i) => (
                      <text key={i} x="54" y={86+i*12} textAnchor="middle" fontSize="7.5" fill="#6a6050">{line}</text>
                    ))}
                  </g>
                ))}

                <rect y="168" width="760" height="17" fill="#d8f0d0" opacity="0.5"/>
                <text x="380" y="180" textAnchor="middle" fontSize="8" fill="#3a7e4f" fontWeight="600" letterSpacing="0.06em">🌿 IDEÁLNÍ TERMÍN: DUBEN–KVĚTEN nebo SRPEN–ZÁŘÍ · VYHNI SE LETNÍMU VEDRU</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#termin">Kdy zasít – nejlepší termín</a></li>
                <li><a href="#semeno">Výběr travní směsi</a></li>
                <li><a href="#priprava">Příprava půdy – krok za krokem</a></li>
                <li><a href="#seti">Setí</a></li>
                <li><a href="#pece">Péče po vzejití</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="termin">
              <h2>Kdy zasít – nejlepší termín</h2>
              <ul>
                <li><strong>Jaro (duben–květen):</strong> Nejlepší termín. Teplota půdy 10–15 °C, dostatek vlhkosti, tráva stihne zakořenit před létem.</li>
                <li><strong>Léto (červen–červenec):</strong> Nevhodné — horko a sucho zabraňují vzejití nebo seedlingy ihned uschnou. Pouze s intenzivní zálivkou.</li>
                <li><strong>Konec léta (srpen–září):</strong> Druhý nejlepší termín. Teplá půda, méně sucha, tráva zakoření před zimou.</li>
                <li><strong>Podzim (říjen–listopad):</strong> Pozdní, ale možné. Tráva vyklíčí ale nemusí stačit zakořenit před mrazem.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Teplota půdy je důležitější než teplota vzduchu. Minimálně 8–10 °C v půdě pro klíčení — změříš teploměrem na hloubce 5 cm.</div>
            </section>

            <section id="semeno">
              <h2>Výběr travní směsi</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ směsi</th><th>Vhodné pro</th><th>Vlastnosti</th><th>Cena (kg)</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Okrasný trávník</strong></td><td>Reprezentativní zahrada</td><td>Jemný, tmavě zelený, náročný na údržbu</td><td>100–200 Kč</td></tr>
                    <tr><td><strong>Rekreační trávník</strong></td><td>Rodina s dětmi, zahrada</td><td>Odolný, rychle roste, odpouštivý</td><td>60–120 Kč</td></tr>
                    <tr><td><strong>Sportovní trávník</strong></td><td>Intenzivní sešlap</td><td>Nejodolnější, pomalejší obnova</td><td>80–150 Kč</td></tr>
                    <tr><td><strong>Stínová směs</strong></td><td>Pod stromy, sever</td><td>Toleruje nedostatek světla</td><td>80–160 Kč</td></tr>
                    <tr><td><strong>Sucho odolná směs</strong></td><td>Suchá stanoviště</td><td>Méně náročná na zálivku</td><td>80–150 Kč</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="priprava">
              <h2>Příprava půdy – krok za krokem</h2>
              <p>Příprava půdy je nejdůležitější část. Špatná příprava = nerovný, plevelnatý, špatně rostoucí trávník.</p>
              <ul>
                <li><strong>Krok 1 — Vyčistit plochu:</strong> Odstraň kameny, větve, kořeny plevelů a veškerý odpad. Trávník nemůže vyrůst přes kořeny plevele.</li>
                <li><strong>Krok 2 — Odstranit plevel:</strong> Herbicidem totálním (Roundup nebo podobný) ošetři plochu 2–3 týdny před setím. Po uschnutí plevele plochu překopej.</li>
                <li><strong>Krok 3 — Překopat půdu:</strong> Rýčem nebo frézou na hloubku 20–25 cm. Rozbij hroudy, odstraň kameny a kořeny. Pro velké plochy pronajmi půdní frézu (500–800 Kč/den).</li>
                <li><strong>Krok 4 — Zapravit kompost nebo písek:</strong> Na těžkou jílovitou půdu přidej 5–10 cm písku pro lepší drenáž. Na chudou půdu 5 cm kompostu.</li>
                <li><strong>Krok 5 — Urovnat a upěchovat:</strong> Hráběmi urovnej povrch do roviny (použij šňůru jako vodítko). Prošlápni nebo přejeď válcem — půda nesmí být příliš kyprá (semeno by kleslo příliš hluboko).</li>
                <li><strong>Krok 6 — Startovací hnojivo:</strong> Nanes trávníkové startovací hnojivo (vyšší obsah P pro kořeny) 1–2 dny před setím.</li>
              </ul>
            </section>

            <section id="seti">
              <h2>Setí travního semene</h2>
              <ul>
                <li><strong>Množství semene:</strong> 30–40 g/m² pro nový trávník. Více než polovina zahrádkářů seji příliš málo — výsledek je řídký trávník.</li>
                <li><strong>Technika setí:</strong> Rozděl semeno na dvě poloviny. Jednu nanes podél plochy, druhou napříč (křížem). Zajistí rovnoměrné pokrytí.</li>
                <li><strong>Pro velké plochy</strong> použij rozmetadlo hnojiva (pronájem 200 Kč/den nebo koupě 500–1 500 Kč).</li>
                <li><strong>Zapravení semene:</strong> Po setí přejdi hráběmi lehce po povrchu — semeno zaprav 0,5–1 cm hluboko. Hlubší = nezklijí, mělčeji = vyschnou.</li>
                <li><strong>Upěchování:</strong> Přejeď lehkým válcem nebo přejdi prknem — semeno musí mít kontakt s půdou.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Semeno mírně přikryj tenknou vrstvou rašeliny nebo jemné zeminy (3–5 mm). Zabrání rychlému vysychání a pomůže rovnoměrnému klíčení.</div>
            </section>

            <section id="pece">
              <h2>Péče po vzejití</h2>
              <ul>
                <li><strong>Zálivka do vzejití:</strong> 2× denně (ráno a večer), jemným postřikem. Semeno nesmí vyschnout ani jednou — to ho zabije. Trvá 10–21 dní.</li>
                <li><strong>Po vzejití:</strong> Postupně přejdi na méně časté ale vydatnější zálivky.</li>
                <li><strong>První sečení:</strong> Až tráva doroste na 8–10 cm, sekat na 5–6 cm. Dříve nesekej — kořeny nejsou dostatečně ukotveny.</li>
                <li><strong>Hnojení po 6 týdnech:</strong> První hnojení trávníkovým hnojivem s dusíkem pro hustý zelený růst.</li>
                <li><strong>Nesešlapávat</strong> nový trávník minimálně 6 týdnů od vzejití — kořeny jsou ještě slabé.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Kolik stojí nový trávník na 100 m²?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Semeno (4 kg, 40 g/m²): 300–600 Kč. Startovací hnojivo: 300–600 Kč. Kompost nebo písek: 500–1 500 Kč. Půdní fréza (pronájem): 500–800 Kč. Celkem DIY: 1 500–3 500 Kč. Profesionální setí (včetně práce): 3 000–8 000 Kč za 100 m².</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Trávník vs. travní koberec – co je lepší?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Travní koberec (hotový trávník na rolích) je okamžité řešení — po položení máš ihned zeleno. Cena 80–150 Kč/m² jen za materiál + pokládka. Výhodný pro malé plochy nebo kde potřebuješ rychlý výsledek. Setí je 5–10× levnější ale výsledek vidíš za 6–8 týdnů.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Proč trávník nevyklíčil?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Nejčastější příčiny: semeno vyschlo (zálivka jen 1× denně nestačí), semeno zapraveno příliš hluboko (nad 2 cm), teplota půdy pod 8 °C, staré semeno s nízkou klíčivostí. Zkontroluj datum spotřeby na obalu — trávníkové semeno má obvykle klíčivost 2–3 roky.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/zasit-travnik-od-nuly" title="Jak zasít trávník od nuly – příprava půdy, setí, péče 2026" />

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
                <li><a href="#termin">Kdy zasít</a></li>
                <li><a href="#semeno">Výběr směsi</a></li>
                <li><a href="#priprava">Příprava půdy</a></li>
                <li><a href="#seti">Setí</a></li>
                <li><a href="#pece">Péče po vzejití</a></li>
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
