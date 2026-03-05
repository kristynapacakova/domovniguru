import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Proč mi vypadává jistič? Přetížení, zkrat nebo vadný spotřebič 2025",
  description: "Jistič vypadává opakovaně? Zjisti proč – přetížení okruhu, zkrat nebo vadný spotřebič. Postup diagnostiky krok za krokem.",
  alternates: { canonical: "https://domovniguru.cz/blog/proc-vypadava-jistic" },
  openGraph: { title: "Proč mi vypadává jistič?", description: "Přetížení, zkrat nebo vadný spotřebič – jak zjistit příčinu.", url: "https://domovniguru.cz/blog/proc-vypadava-jistic", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2025-01-25T08:00:00Z", modifiedTime: "2025-03-01T08:00:00Z", authors: ["DomovniGuru"] },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://domovniguru.cz/blog/proc-vypadava-jistic#article", "headline": "Proč mi vypadává jistič?", "datePublished": "2025-01-25T08:00:00Z", "dateModified": "2025-03-01T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "inLanguage": "cs" }] };

const RELATED = [
  { title: "Jak zapojit nové světlo na strop", href: "/blog/zapojit-svetlo-na-strop", read: "5 min" },
  { title: "Jak vyměnit zásuvku sám", href: "/blog/jak-vymenit-zasuvku", read: "5 min" },
  { title: "Co dělat, když nejde proud jen v části bytu", href: "/blog/nejde-proud-cast-bytu", read: "4 min" },
  { title: "Jak fungují pojistky a jak je vyměnit", href: "/blog/jak-funguji-pojistky", read: "4 min" },
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
              <span>Proč vypadává jistič</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">⚡ Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 4 min čtení</span>
              </div>
              <h1 className="article-h1">Proč mi vypadává jistič?</h1>
              <p className="article-lead">Jistič není závada — je to ochrana. Pokud vypadává opakovaně, říká ti že v okruhu je něco špatně. Tady je jak najít příčinu a co s tím.</p>
              <div className="article-meta-row"><span>Aktualizováno: 1. března 2025</span><span>·</span><span>DomovniGuru</span></div>
            </header>

            {/* HERO ILLUSTRATION */}
            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="180" fill="#fdf8f2"/>

                {/* Rozvaděč */}
                <rect x="300" y="20" width="160" height="140" rx="6" fill="#f0ece6" stroke="#c8b89a" strokeWidth="2"/>
                <rect x="310" y="30" width="140" height="120" rx="4" fill="#e8e0d8"/>

                {/* Jističe */}
                {[0,1,2,3,4].map((i) => (
                  <g key={i} transform={`translate(322, ${42 + i*20})`}>
                    <rect x="0" y="0" width="116" height="14" rx="3" fill={i === 2 ? "#e07a3a" : "#f5f0e8"} opacity={i === 2 ? 0.8 : 0.6}/>
                    <rect x="0" y="0" width="116" height="14" rx="3" fill="none" stroke={i === 2 ? "#e07a3a" : "#c8b89a"} strokeWidth="1"/>
                    <rect x="4" y="3" width="24" height="8" rx="2" fill={i === 2 ? "#e07a3a" : "#c8b89a"} opacity={i === 2 ? 0.9 : 0.4}/>
                    <text x="60" y="10" fontFamily="var(--font-sans,sans-serif)" fontSize="7" fill={i === 2 ? "#8a3a0a" : "#9a8a7a"} textAnchor="middle">{i === 2 ? "VYPADL !" : `okruh ${i+1}`}</text>
                  </g>
                ))}

                {/* Šipky příčin */}
                {/* Přetížení */}
                <g transform="translate(40, 40)">
                  <rect x="0" y="0" width="120" height="60" rx="6" fill="#fff8f0" stroke="#e07a3a" strokeWidth="1.5" opacity="0.8"/>
                  <text x="60" y="18" fontFamily="var(--font-sans,sans-serif)" fontSize="9" fill="#e07a3a" textAnchor="middle" fontWeight="600">PŘETÍŽENÍ</text>
                  <text x="60" y="32" fontFamily="var(--font-sans,sans-serif)" fontSize="8" fill="#9a8a7a" textAnchor="middle">příliš spotřebičů</text>
                  <text x="60" y="46" fontFamily="var(--font-sans,sans-serif)" fontSize="8" fill="#9a8a7a" textAnchor="middle">na jednom okruhu</text>
                  <line x1="120" y1="30" x2="295" y2="95" stroke="#e07a3a" strokeWidth="1" strokeDasharray="4 3" opacity="0.5"/>
                </g>

                {/* Zkrat */}
                <g transform="translate(40, 115)">
                  <rect x="0" y="0" width="120" height="44" rx="6" fill="#fff0f0" stroke="#c04040" strokeWidth="1.5" opacity="0.8"/>
                  <text x="60" y="16" fontFamily="var(--font-sans,sans-serif)" fontSize="9" fill="#c04040" textAnchor="middle" fontWeight="600">ZKRAT</text>
                  <text x="60" y="30" fontFamily="var(--font-sans,sans-serif)" fontSize="8" fill="#9a8a7a" textAnchor="middle">vodič–vodič kontakt</text>
                  <line x1="120" y1="22" x2="295" y2="95" stroke="#c04040" strokeWidth="1" strokeDasharray="4 3" opacity="0.5"/>
                </g>

                {/* Vadný spotřebič */}
                <g transform="translate(600, 40)">
                  <rect x="0" y="0" width="130" height="60" rx="6" fill="#f8f0ff" stroke="#8a5ab0" strokeWidth="1.5" opacity="0.8"/>
                  <text x="65" y="18" fontFamily="var(--font-sans,sans-serif)" fontSize="9" fill="#8a5ab0" textAnchor="middle" fontWeight="600">VADNÝ SPOTŘEBIČ</text>
                  <text x="65" y="32" fontFamily="var(--font-sans,sans-serif)" fontSize="8" fill="#9a8a7a" textAnchor="middle">porucha uvnitř</text>
                  <text x="65" y="46" fontFamily="var(--font-sans,sans-serif)" fontSize="8" fill="#9a8a7a" textAnchor="middle">spotřebiče</text>
                  <line x1="0" y1="30" x2="-135" y2="95" stroke="#8a5ab0" strokeWidth="1" strokeDasharray="4 3" opacity="0.5"/>
                </g>

                {/* Vadný jistič */}
                <g transform="translate(600, 115)">
                  <rect x="0" y="0" width="130" height="44" rx="6" fill="#f0f8ff" stroke="#4a7ab0" strokeWidth="1.5" opacity="0.8"/>
                  <text x="65" y="16" fontFamily="var(--font-sans,sans-serif)" fontSize="9" fill="#4a7ab0" textAnchor="middle" fontWeight="600">VADNÝ JISTIČ</text>
                  <text x="65" y="30" fontFamily="var(--font-sans,sans-serif)" fontSize="8" fill="#9a8a7a" textAnchor="middle">méně časté</text>
                  <line x1="0" y1="22" x2="-135" y2="95" stroke="#4a7ab0" strokeWidth="1" strokeDasharray="4 3" opacity="0.5"/>
                </g>
              </svg>
              <div style={{display:"flex",justifyContent:"center",gap:"24px",padding:"8px 40px 12px",fontSize:"9px",letterSpacing:"0.1em",color:"#c8b89a",textTransform:"uppercase"}}>
                <span>4 hlavní příčiny</span>
              </div>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#diagnostika">Jak zjistit příčinu</a></li>
                <li><a href="#pretizeni">Přetížení okruhu</a></li>
                <li><a href="#zkrat">Zkrat</a></li>
                <li><a href="#spotrebic">Vadný spotřebič</a></li>
                <li><a href="#vadny-jistic">Vadný jistič</a></li>
                <li><a href="#kdy-elektrikar">Kdy volat elektrikáře</a></li>
              </ol>
            </nav>

            <section id="diagnostika">
              <h2>Jak zjistit příčinu</h2>
              <p>Postup diagnostiky je jednoduchý — jde o systematické vyloučení příčin:</p>
              <ul>
                <li><strong>Zapni jistič a okamžitě vypadne</strong> → zkrat nebo vadný spotřebič zapojený do sítě</li>
                <li><strong>Vypadne po chvíli provozu</strong> → přetížení okruhu (příliš mnoho spotřebičů)</li>
                <li><strong>Vypadne pouze s jedním konkrétním spotřebičem</strong> → vadný spotřebič</li>
                <li><strong>Vypadne bez zjevného důvodu i při malé zátěži</strong> → vadný jistič nebo problém v elektroinstalaci</li>
              </ul>
            </section>

            <section id="pretizeni">
              <h2>Přetížení okruhu</h2>
              <p>Každý okruh má maximální povolenou zátěž danou hodnotou jističe. Standardní bytový okruh na zásuvky má jistič 16 A = max. ~3500 W současně.</p>
              <p>Přetížení nastane například když na jednom okruhu běží: rychlovarná konvice (2000 W) + mikrovlnná trouba (1000 W) + toustovač (800 W) = 3800 W → jistič vypadne.</p>
              <div className="article-tip"><strong>💡 Řešení:</strong> Přesuň část spotřebičů na jiný okruh. Rozlož spotřebu — nepoužívej velké spotřebiče současně. Pokud okruh pravidelně nestačí, nechej elektrikáře přidat nový okruh.</div>
            </section>

            <section id="zkrat">
              <h2>Zkrat</h2>
              <p>Zkrat nastane když se fázový vodič dotkne nulového nebo ochranného vodiče — průchod obrovského proudu okamžitě vyhodí jistič. Příčiny:</p>
              <ul>
                <li>Poškozená izolace kabelu (přiskřípnutí, stáří, hlodavci)</li>
                <li>Vadná zásuvka nebo prodlužovačka</li>
                <li>Chybné zapojení při opravě</li>
              </ul>
              <p>Pokud jistič vypadne ihned po zapnutí, odpoj všechny spotřebiče z daného okruhu a zapni jistič znovu. Pokud drží — problém je v jednom ze spotřebičů. Pokud stále vypadne — problém je v samotné instalaci a je nutný elektrikář.</p>
            </section>

            <section id="spotrebic">
              <h2>Vadný spotřebič</h2>
              <p>Vadný spotřebič způsobuje zkrat nebo přetížení uvnitř sebe. Identifikace je jednoduchá:</p>
              <ul>
                <li>Odpoj všechny spotřebiče z daného okruhu</li>
                <li>Zapni jistič — pokud drží, problém je ve spotřebiči</li>
                <li>Zapojuj spotřebiče jeden po jednom</li>
                <li>Při zapojení vadného spotřebiče jistič vypadne</li>
              </ul>
              <p>Vadný spotřebič neopravuj sám pokud nemáš zkušenosti s opravou elektroniky — dej ho do servisu nebo vyměň.</p>
            </section>

            <section id="vadny-jistic">
              <h2>Vadný jistič</h2>
              <p>Jističe mají životnost 10 000–20 000 sepnutí a mohou po letech provozu začít vypadávat i při normální zátěži. Poznáš to tak že jistič vypadá i při minimální zátěži nebo bez zjevné příčiny.</p>
              <p>Výměna jističe patří výhradně elektrikáři — práce v hlavním rozvaděči je nebezpečná a vyžaduje odbornou způsobilost.</p>
            </section>

            <section id="kdy-elektrikar">
              <h2>Kdy volat elektrikáře</h2>
              <ul>
                <li>Jistič vypadne okamžitě po zapnutí a všechny spotřebiče jsou odpojeny</li>
                <li>Jistič je horký na dotek</li>
                <li>Vidíš spálené stopy nebo cítíš spálený zápach u rozvaděče nebo zásuvek</li>
                <li>Chránič (proudový chránič, RCD) vypadává opakovaně</li>
                <li>Elektroinstalace je stará nebo neznámého stavu</li>
              </ul>
              <div className="article-tip"><strong>⚠️ Důležité:</strong> Nikdy nevyměňuj jistič za silnější aby přestal vypadávat — jistič chrání kabely před přetížením. Silnější jistič může způsobit požár při přetížení vedení.</div>
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
                <li><a href="#diagnostika">Jak zjistit příčinu</a></li>
                <li><a href="#pretizeni">Přetížení</a></li>
                <li><a href="#zkrat">Zkrat</a></li>
                <li><a href="#spotrebic">Vadný spotřebič</a></li>
                <li><a href="#vadny-jistic">Vadný jistič</a></li>
                <li><a href="#kdy-elektrikar">Kdy elektrikář</a></li>
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
