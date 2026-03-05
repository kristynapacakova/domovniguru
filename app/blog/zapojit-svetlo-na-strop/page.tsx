import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak zapojit nové světlo na strop – L, N, PE vodiče 2025",
  description: "Krabice, L, N, PE vodiče – správné zapojení stropního svítidla krok za krokem. Bezpečně a bez elektrikáře.",
  alternates: { canonical: "https://domovniguru.cz/blog/zapojit-svetlo-na-strop" },
  openGraph: { title: "Jak zapojit nové světlo na strop", description: "L, N, PE vodiče – správné zapojení krok za krokem.", url: "https://domovniguru.cz/blog/zapojit-svetlo-na-strop", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2025-01-28T08:00:00Z", modifiedTime: "2025-03-01T08:00:00Z", authors: ["DomovniGuru"] },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://domovniguru.cz/blog/zapojit-svetlo-na-strop#article", "headline": "Jak zapojit nové světlo na strop", "datePublished": "2025-01-28T08:00:00Z", "dateModified": "2025-03-01T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "inLanguage": "cs" }] };

const RELATED = [
  { title: "Jak vyměnit vypínač světla", href: "/blog/jak-vymenit-vypinac", read: "4 min" },
  { title: "Jak vybrat správnou LED žárovku", href: "/blog/jak-vybrat-led-zarovku", read: "5 min" },
  { title: "Proč mi vypadává jistič?", href: "/blog/proc-vypadava-jistic", read: "4 min" },
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
              <span>Zapojit světlo na strop</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">⚡ Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak zapojit nové světlo na strop</h1>
              <p className="article-lead">Výměna stropního svítidla je jedna z nejběžnějších domácích elektroinstalací — a zvládne ji každý kdo dodržuje bezpečnostní pravidla. Klíč je vypnout jistič a správně přiřadit vodiče.</p>
              <div className="article-meta-row"><span>Aktualizováno: 1. března 2025</span><span>·</span><span>DomovniGuru</span></div>
            </header>

            {/* HERO ILLUSTRATION */}
            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="180" fill="#fdf8f2"/>
                {/* Strop */}
                <rect x="0" y="0" width="760" height="30" fill="#f0ece6"/>
                <line x1="0" y1="30" x2="760" y2="30" stroke="#e0d8cc" strokeWidth="1"/>

                {/* Krabice ve stropu */}
                <rect x="320" y="8" width="120" height="22" rx="4" fill="#e8e0d8" stroke="#c8b89a" strokeWidth="1.5"/>
                <text x="380" y="23" fontFamily="var(--font-sans,sans-serif)" fontSize="8" fill="#9a8a7a" textAnchor="middle" letterSpacing="0.04em">KRABICE</text>

                {/* Vodiče z krabice */}
                {/* L — hnědý */}
                <line x1="345" y1="30" x2="345" y2="75" stroke="#c8692a" strokeWidth="3" strokeLinecap="round"/>
                {/* N — modrý */}
                <line x1="380" y1="30" x2="380" y2="75" stroke="#4a7ab0" strokeWidth="3" strokeLinecap="round"/>
                {/* PE — zeleno-žlutý */}
                <line x1="415" y1="30" x2="415" y2="75" stroke="#6a9a3a" strokeWidth="3" strokeLinecap="round"/>

                {/* Svorkovnice */}
                <rect x="310" y="72" width="140" height="24" rx="4" fill="#e8e0d8" stroke="#c8b89a" strokeWidth="1.5"/>
                <rect x="316" y="76" width="36" height="16" rx="2" fill="#c8692a" opacity="0.3"/>
                <rect x="362" y="76" width="36" height="16" rx="2" fill="#4a7ab0" opacity="0.3"/>
                <rect x="408" y="76" width="36" height="16" rx="2" fill="#6a9a3a" opacity="0.3"/>
                <text x="334" y="87" fontFamily="var(--font-sans,sans-serif)" fontSize="7" fill="#c8692a" textAnchor="middle" fontWeight="600">L</text>
                <text x="380" y="87" fontFamily="var(--font-sans,sans-serif)" fontSize="7" fill="#4a7ab0" textAnchor="middle" fontWeight="600">N</text>
                <text x="426" y="87" fontFamily="var(--font-sans,sans-serif)" fontSize="7" fill="#6a9a3a" textAnchor="middle" fontWeight="600">PE</text>

                {/* Svítidlo */}
                <ellipse cx="380" cy="130" rx="70" ry="30" fill="#f5f0e8" stroke="#c8b89a" strokeWidth="1.5"/>
                <ellipse cx="380" cy="122" rx="18" ry="8" fill="#f4c842" opacity="0.4"/>
                {/* Závěs */}
                <line x1="380" y1="96" x2="380" y2="100" stroke="#c8b89a" strokeWidth="2" strokeLinecap="round"/>
                {/* Paprsky světla */}
                {[-50,-30,0,30,50].map((dx,i)=>(
                  <line key={i} x1={380+dx*0.3} y1="155" x2={380+dx} y2="175" stroke="#f4c842" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
                ))}

                {/* Popisky vodičů */}
                <text x="290" y="57" fontFamily="var(--font-sans,sans-serif)" fontSize="8" fill="#c8692a" textAnchor="middle" fontWeight="600">L (fáze)</text>
                <text x="380" y="57" fontFamily="var(--font-sans,sans-serif)" fontSize="8" fill="#4a7ab0" textAnchor="middle" fontWeight="600">N (nula)</text>
                <text x="470" y="57" fontFamily="var(--font-sans,sans-serif)" fontSize="8" fill="#6a9a3a" textAnchor="middle" fontWeight="600">PE (zem)</text>
              </svg>
              <div style={{display:"flex",justifyContent:"center",gap:"32px",padding:"8px 40px 12px",fontSize:"9px",letterSpacing:"0.1em",color:"#c8b89a",textTransform:"uppercase"}}>
                <span style={{color:"#c8692a"}}>● Hnědý = fáze (L)</span>
                <span style={{color:"#4a7ab0"}}>● Modrý = nula (N)</span>
                <span style={{color:"#6a9a3a"}}>● Zeleno-žlutý = zem (PE)</span>
              </div>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#bezpecnost">Bezpečnost na prvním místě</a></li>
                <li><a href="#vodiče">Barvy vodičů – co je co</a></li>
                <li><a href="#postup">Postup zapojení</a></li>
                <li><a href="#druhy-krabic">Druhy stropních krabic</a></li>
                <li><a href="#problemy">Časté problémy</a></li>
              </ol>
            </nav>

            <section id="bezpecnost">
              <h2>Bezpečnost na prvním místě</h2>
              <p>Práce na elektroinstalaci bez vypnutého jističe je smrtelně nebezpečná. Před každou prací:</p>
              <ul>
                <li><strong>Vypni jistič</strong> pro daný okruh v rozvaděči (obvykle označen "světla" nebo číslem místnosti)</li>
                <li><strong>Ověř fázovou tužkou</strong> nebo multimetrem že v krabici opravdu není napětí — ne jen tlačítkem vypínače</li>
                <li><strong>Jistič zajisti</strong> nebo informuj ostatní v domácnosti aby ho nezapínali</li>
              </ul>
              <div className="article-tip"><strong>⚠️ Pozor:</strong> Vypínač na stěně odpojuje pouze fázi — v krabici může být stále přítomno napětí na nulovém vodiči. Vždy ověř napětí přístrojem, ne odhadem.</div>
            </section>

            <section id="vodiče">
              <h2>Barvy vodičů – co je co</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Barva</th><th>Označení</th><th>Funkce</th></tr></thead>
                  <tbody>
                    <tr><td>Hnědá (nebo černá)</td><td>L</td><td>Fáze – vodič pod napětím</td></tr>
                    <tr><td>Modrá</td><td>N</td><td>Nulový vodič</td></tr>
                    <tr><td>Zeleno-žlutá</td><td>PE</td><td>Ochranný zemnicí vodič</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Ve starších instalacích mohou být vodiče označeny jinak (červená = fáze, černá = nula). Vždy ověř multimetrem — nespoléhej se jen na barvu.</p>
            </section>

            <section id="postup">
              <h2>Postup zapojení</h2>
              <ul>
                <li><strong>Krok 1 – Vypni jistič</strong> a ověř absence napětí fázovou tužkou</li>
                <li><strong>Krok 2 – Odmontuj staré svítidlo</strong> — uvolni šrouby krytu, odpoj vodiče ze svorkovnice nebo rozpinovacích svorek</li>
                <li><strong>Krok 3 – Zkontroluj vodiče</strong> — odizoluj cca 8–10 mm každého vodiče, zkontroluj stav izolace</li>
                <li><strong>Krok 4 – Připoj nové svítidlo</strong> — L→L (hnědá→hnědá), N→N (modrá→modrá), PE→PE (zeleno-žlutá→zeleno-žlutá). Vodiče šroubuj pevně do svorkovnice.</li>
                <li><strong>Krok 5 – Zkontroluj spoje</strong> — zatáhni za každý vodič zda drží. Žádný vodič nesmí trčet ven nebo se dotýkat jiného</li>
                <li><strong>Krok 6 – Připevni svítidlo</strong> ke stropní krabici nebo háku</li>
                <li><strong>Krok 7 – Zapni jistič a otestuj</strong></li>
              </ul>
            </section>

            <section id="druhy-krabic">
              <h2>Druhy stropních krabic</h2>
              <ul>
                <li><strong>Pevná krabice s hákem</strong> — nejčastější, svítidlo se zavěsí na hák a vodiče zapojí do svorkovnice</li>
                <li><strong>Krabice se závitem</strong> — svítidlo se přišroubuje přímo ke krabici</li>
                <li><strong>Rozetová krabice</strong> — plochá, pro přisazená svítidla a lustry s rozetou</li>
                <li><strong>Bez krabice (ve starších domech)</strong> — vodiče vycházejí přímo ze stropu; v takovém případě je lepší krabici dodatečně instalovat</li>
              </ul>
            </section>

            <section id="problemy">
              <h2>Časté problémy</h2>
              <ul>
                <li><strong>Světlo nefunguje po zapojení</strong> — zkontroluj zda jsou vodiče pevně v svorkách a správně přiřazeny (L→L, N→N)</li>
                <li><strong>Jistič vypadne hned po zapnutí</strong> — zkrat v zapojení; zkontroluj zda se vodiče nedotýkají navzájem nebo kovu svítidla</li>
                <li><strong>Světlo bliká</strong> — špatný kontakt ve svorkovnici nebo nekompatibilní LED se stmívačem</li>
                <li><strong>Tři vodiče, svítidlo má jen dva</strong> — PE vodič připoj na kovovou kostru svítidla; pokud je svítidlo plastové a nemá zemnicí svorku, PE nechej volně izolovaný</li>
              </ul>
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
                <li><a href="#bezpecnost">Bezpečnost</a></li>
                <li><a href="#vodiče">Barvy vodičů</a></li>
                <li><a href="#postup">Postup zapojení</a></li>
                <li><a href="#druhy-krabic">Druhy krabic</a></li>
                <li><a href="#problemy">Časté problémy</a></li>
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
