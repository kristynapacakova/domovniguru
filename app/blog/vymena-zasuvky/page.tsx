import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Výměna zásuvky – kdy a jak ji vyměnit správně 2026",
  description: "Kdy je čas vyměnit zásuvku? Poškozená, uvolněná nebo zastaralá zásuvka je bezpečnostní riziko. Jak poznat že je čas na výměnu a jak ji provést správně.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/vymena-zasuvky" },
  openGraph: { title: "Výměna zásuvky – kdy a jak 2026", description: "Kdy vyměnit zásuvku a jak na to – bezpečně a správně.", url: "https://www.domovniguru.cz/blog/vymena-zasuvky", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-15T08:00:00Z", modifiedTime: "2026-04-15T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Výměna zásuvky – kdy a jak 2026", description: "Kdy vyměnit zásuvku a jak na to bezpečně." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/vymena-zasuvky#article",
    "headline": "Výměna zásuvky – kdy a jak ji vyměnit správně 2026",
    "datePublished": "2026-04-15T08:00:00Z",
    "dateModified": "2026-04-15T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["výměna zásuvky", "kdy vyměnit zásuvku", "poškozená zásuvka", "zásuvka jiskří", "uvolněná zásuvka", "zastaralá zásuvka výměna"]
  }]
};

const RELATED = [
  { title: "Jak vyměnit zásuvku sám – bezpečný postup", href: "/blog/jak-vymenit-zasuvku", read: "6 min" },
  { title: "Co dělat když nejde proud v části bytu", href: "/blog/nejde-proud-cast-bytu", read: "5 min" },
  { title: "Jak fungují pojistky a jak je vyměnit", href: "/blog/jak-funguji-pojistky", read: "5 min" },
  { title: "Jak nainstalovat stmívač světla", href: "/blog/instalovat-stmivac", read: "6 min" },
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
              <span>Výměna zásuvky</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">⚡ Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 4 min čtení</span>
              </div>
              <h1 className="article-h1">Výměna zásuvky – kdy je čas a jak na to</h1>
              <p className="article-lead">Jiskřící, uvolněná nebo žlutě zbarvená zásuvka není jen estetický problém — je to bezpečnostní riziko. Jak poznáš že je čas vyměnit zásuvku a co dělat jako první krok.</p>
              <div className="article-meta-row"><span>Aktualizováno: 15. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/vymena-zasuvky" title="Výměna zásuvky – kdy a jak ji vyměnit správně 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 190" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="190" fill="#f8f6f2"/>

                {/* 5 varovných signálů */}
                {[
                  { x:20, icon:"⚡", title:"Jiskření", desc:"při zasouvání zástrčky", color:"#e07040", urgent:true },
                  { x:168, icon:"🔥", title:"Teplá zásuvka", desc:"přehřívání kontaktů", color:"#e07a5f", urgent:true },
                  { x:316, icon:"💀", title:"Popraskané tělo", desc:"fyzické poškození", color:"#9b6fd4", urgent:true },
                  { x:464, icon:"🔌", title:"Uvolněná zástrčka", desc:"opotřebované kontakty", color:"#f59e0b", urgent:false },
                  { x:612, icon:"🎨", title:"Zastaralý design", desc:"renovace, sjednocení", color:"#4a90d9", urgent:false },
                ].map(({x, icon, title, desc, color, urgent}) => (
                  <g key={x} transform={`translate(${x}, 20)`}>
                    <rect x="0" y="0" width="130" height="145" rx="8" fill="#fff" stroke={color} strokeWidth={urgent ? 1.5 : 1} opacity="0.95"/>
                    {urgent && <rect x="0" y="0" width="130" height="8" rx="4" fill={color} opacity="0.3"/>}
                    <text x="65" y="40" textAnchor="middle" fontSize="26">{icon}</text>
                    <text x="65" y="65" textAnchor="middle" fontSize="10" fill={color} fontWeight="700">{title}</text>
                    <line x1="15" y1="72" x2="115" y2="72" stroke={color} strokeWidth="0.5" opacity="0.4"/>
                    <text x="65" y="88" textAnchor="middle" fontSize="8.5" fill="#4a4a40">{desc}</text>
                    <rect x="15" y="108" width="100" height="22" rx="5" fill={color} opacity={urgent ? 0.15 : 0.1}/>
                    <text x="65" y="123" textAnchor="middle" fontSize="8" fill={color} fontWeight="700">{urgent ? "⚠️ Okamžitě vyměnit" : "Doporučeno vyměnit"}</text>
                  </g>
                ))}

                <rect y="173" width="760" height="17" fill="#fef9f0" opacity="0.6"/>
                <text x="380" y="185" textAnchor="middle" fontSize="8" fill="#92400e" fontWeight="600" letterSpacing="0.06em">⚡ JISKŘENÍ A PŘEHŘÍVÁNÍ = OKAMŽITÁ VÝMĚNA · NIKDY NEPOUŽÍVEJ POŠKOZENOU ZÁSUVKU</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#kdy">Kdy vyměnit zásuvku – varovné signály</a></li>
                <li><a href="#typy">Jakou zásuvku koupit</a></li>
                <li><a href="#postup">Jak na výměnu – odkaz na postup</a></li>
                <li><a href="#chyby">Nejčastější chyby</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="kdy">
              <h2>Kdy vyměnit zásuvku – varovné signály</h2>
              <p>Většina lidí vyměňuje zásuvku až když přestane úplně fungovat. To je pozdě — poškozená zásuvka může způsobit požár nebo úraz ještě předtím než zcela selže.</p>

              <h3>🔴 Okamžitá výměna nutná</h3>
              <ul>
                <li><strong>Jiskření při zasouvání zástrčky:</strong> Malá jiskra při zasouvání je normální — velká jiskra nebo opakované jiskření znamená poškozené nebo uvolněné kontakty. Okamžitě přestaň zásuvku používat a vyměň ji.</li>
                <li><strong>Teplá nebo horká zásuvka:</strong> Zásuvka by nikdy neměla být teplá na dotek. Přehřívání signalizuje přetíženou zásuvku nebo vadné kontakty — riziko požáru.</li>
                <li><strong>Popraskané nebo rozbité tělo:</strong> Fyzické poškození krytu odhaluje vnitřní vodiče. Dotykem hrozí úraz elektrickým proudem.</li>
                <li><strong>Zápach po spálení nebo kouř:</strong> Okamžitě vypni jistič pro daný obvod a nechej zásuvku zkontrolovat elektrikářem.</li>
              </ul>

              <h3>🟡 Výměna doporučena</h3>
              <ul>
                <li><strong>Zástrčka se drží volně:</strong> Opotřebované kontakty nedostatečně svírají zástrčku. Špatný kontakt způsobuje přehřívání a jiskření.</li>
                <li><strong>Zásuvka se hýbe nebo je uvolněná ve zdi:</strong> Uvolněná krabice nebo povolené šrouby způsobují pohyb zásuvky při zasouvání — vodiče se postupně uvolňují.</li>
                <li><strong>Zažloutlý nebo zastaralý plast:</strong> Estetický důvod — při rekonstrukci nebo sjednocení designu v bytě.</li>
                <li><strong>Chybí zemnicí kolík:</strong> Starší zásuvky bez zemnicího kolíku (plochý otvor) nejsou vhodné pro moderní spotřebiče.</li>
              </ul>
              <div className="article-tip"><strong>⚠️ Nikdy nepoužívej poškozenou zásuvku!</strong> Ani dočasně. Poškozená zásuvka je přímé bezpečnostní riziko — vypni jistič a zásuvku ihned vyměň nebo zavolej elektrikáře.</div>
            </section>

            <section id="typy">
              <h2>Jakou zásuvku koupit jako náhradu</h2>
              <p>Při výběru nové zásuvky dbej na kompatibilitu s existující krabicí a elektroinstalací.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ</th><th>Cena</th><th>Vhodné pro</th><th>Poznámka</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Standardní s uzemněním</strong></td><td>50–200 Kč</td><td>Obývák, ložnice, chodba</td><td>Nejběžnější typ</td></tr>
                    <tr><td><strong>S dětskou pojistkou</strong></td><td>80–250 Kč</td><td>Dětský pokoj</td><td>Blokované otvory</td></tr>
                    <tr><td><strong>S USB porty</strong></td><td>200–600 Kč</td><td>Ložnice, pracovna</td><td>Praktické bez adaptérů</td></tr>
                    <tr><td><strong>Venkovní IP44</strong></td><td>100–400 Kč</td><td>Terasa, garáž</td><td>Odolná vůči stříkající vodě</td></tr>
                    <tr><td><strong>Koupelnová IP44</strong></td><td>150–500 Kč</td><td>Koupelna (zóna 3)</td><td>Speciální instalace</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Vezmi starou zásuvku do obchodu nebo si vyfotografuj značku a sérii. Různé série mají různé rámečky — nová zásuvka musí sedět na existující krabici.</div>
            </section>

            <section id="postup">
              <h2>Jak na výměnu – postup krok za krokem</h2>
              <p>Výměna zásuvky je práce pro šikovného laika — ale vyžaduje přísné dodržení bezpečnostního postupu. Nejdůležitější je vždy vypnout jistič a ověřit absenci napětí fázovou tužkou.</p>
              <p>Kompletní podrobný postup včetně schématu zapojení vodičů L, N a PE najdeš v článku:</p>
              <div style={{background:"var(--surface)", border:"1px solid var(--border)", borderRadius:"10px", padding:"20px 24px", margin:"20px 0"}}>
                <Link href="/blog/jak-vymenit-zasuvku" style={{textDecoration:"none"}}>
                  <div style={{fontSize:"11px", fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase", color:"var(--muted)", marginBottom:"8px"}}>⚡ Podrobný návod</div>
                  <div style={{fontSize:"18px", fontWeight:400, color:"var(--text)", marginBottom:"6px", fontFamily:"var(--font-serif)"}}>Jak vyměnit zásuvku sám – bezpečný postup krok za krokem</div>
                  <div style={{fontSize:"14px", color:"var(--muted)"}}>Schéma zapojení, barvy vodičů, typy zásuvek a kdy volat elektrikáře →</div>
                </Link>
              </div>
            </section>

            <section id="chyby">
              <h2>Nejčastější chyby při výměně zásuvky</h2>
              <ul>
                <li><strong>Práce pod napětím:</strong> Největší chyba — vždy vypni jistič a ověř fázovou tužkou.</li>
                <li><strong>Záměna vodičů L a N:</strong> Zásuvka bude fungovat, ale fáze bude na neutrálním kontaktu — nebezpečné pro spotřebiče a osoby.</li>
                <li><strong>Nezapojení PE (zemnicího) vodiče:</strong> Zásuvka funguje ale spotřebiče nejsou chráněny před úrazem elektrickým proudem.</li>
                <li><strong>Uvolněné svorky:</strong> Vodiče nedotažené ve svorkách způsobují přehřívání a jiskření. Vždy dotáhni svorky šroubovákem.</li>
                <li><strong>Nesprávný typ zásuvky:</strong> Standardní zásuvka v koupelně nebo venku není odolná vůči vlhkosti — použij IP44.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Jak dlouho vydrží elektrická zásuvka?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Kvalitní zásuvka vydrží 10–20 let při normálním používání. Zásuvky na frekventovaných místech (kuchyň, chodba) opotřebují rychleji. Každá zásuvka má certifikovaný počet zasunutí a vysunutí (typicky 5 000–10 000×) — při častém používání může životnost klesnout na 5–8 let.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Proč zásuvka jiskří?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Malá jiskra při zasouvání je normální — vzniká při prvním kontaktu pod napětím. Velká jiskra, opakované jiskření nebo jiskra při pouhém dotyku zástrčky signalizuje problém: poškozené kontakty, uvolněný spoj nebo zkrat. Takovou zásuvku okamžitě přestaň používat.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Mohu použít prodlužovací kabel místo výměny zásuvky?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Prodlužovací kabel je dočasné řešení, ne náhrada za opravu. Pokud je zásuvka poškozená, jiskří nebo se přehřívá, prodlužovák problém nevyřeší — jen ho přesune. Poškozenou zásuvku vyměň co nejdříve.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/vymena-zasuvky" title="Výměna zásuvky – kdy a jak ji vyměnit správně 2026" />

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
                <li><a href="#kdy">Varovné signály</a></li>
                <li><a href="#typy">Jakou zásuvku koupit</a></li>
                <li><a href="#postup">Postup výměny</a></li>
                <li><a href="#chyby">Nejčastější chyby</a></li>
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
