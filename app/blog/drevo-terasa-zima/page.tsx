import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak ošetřit dřevěnou terasu – broušení, olej a lazura 2026",
  description: "Dřevěná terasa zešedivěla nebo se loupe? Kompletní postup jarního ošetření – broušení, čištění, volba oleje nebo lazury a správné nanášení. Terasa jako nová.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/drevo-terasa-zima" },
  openGraph: { title: "Jak ošetřit dřevěnou terasu 2026", description: "Broušení, čištění, olej nebo lazura – kompletní postup jarního ošetření terasy.", url: "https://www.domovniguru.cz/blog/drevo-terasa-zima", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-14T08:00:00Z", modifiedTime: "2026-04-14T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak ošetřit dřevěnou terasu 2026", description: "Broušení, čištění, olej nebo lazura – kompletní postup jarního ošetření terasy." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/drevo-terasa-zima#article",
    "headline": "Jak ošetřit dřevěnou terasu – broušení, olej a lazura 2026",
    "datePublished": "2026-04-14T08:00:00Z",
    "dateModified": "2026-04-14T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak ošetřit dřevěnou terasu", "terasové dřevo olej", "lazura na terasu", "broušení terasy", "šedivá terasa obnova", "terasová prkna péče jaro"]
  }]
};

const RELATED = [
  { title: "Jak připravit zahradu na jaro", href: "/blog/jarni-zahrada", read: "7 min" },
  { title: "Jak zařídit terasu na balkoně", href: "/blog/terasa-na-balkone", read: "5 min" },
  { title: "Jak pokládat betonové dlaždice na terasu", href: "/blog/pokladat-betonove-dlazdice", read: "6 min" },
  { title: "Jak ošetřit zahradní nábytek před zimou", href: "/blog/osetrit-zahradni-nabytek", read: "4 min" },
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
              <span>Ošetření dřevěné terasy</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak ošetřit dřevěnou terasu – broušení, olej a lazura</h1>
              <p className="article-lead">Dřevěná terasa po zimě zešedivěla nebo se začíná loupit? Jaro je ideální čas na obnovu. Správné ošetření prodlouží životnost dřeva o roky — a terasa bude vypadat jako nová.</p>
              <div className="article-meta-row"><span>Aktualizováno: 14. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/drevo-terasa-zima" title="Jak ošetřit dřevěnou terasu – broušení, olej a lazura 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 195" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="195" fill="#f8f4ee"/>
                <defs>
                  <linearGradient id="woodOld" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#a09080"/><stop offset="100%" stopColor="#888070"/>
                  </linearGradient>
                  <linearGradient id="woodNew" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#c8904a"/><stop offset="100%" stopColor="#a87030"/>
                  </linearGradient>
                </defs>

                {/* PŘED */}
                <g transform="translate(20,20)">
                  <rect x="0" y="0" width="195" height="150" rx="8" fill="#f0ece4" stroke="#d8d0c4" strokeWidth="1.2"/>
                  <text x="97" y="18" textAnchor="middle" fontSize="9" fill="#c05030" fontWeight="700">❌ ZANEDBANÁ TERASA</text>
                  {[0,1,2,3,4].map(i => (
                    <g key={i}>
                      <rect x="10" y={25+i*23} width="175" height="18" rx="2" fill="url(#woodOld)"/>
                      <line x1="10" y1={27+i*23} x2="185" y2={27+i*23} stroke="#808070" strokeWidth="0.5" opacity="0.5"/>
                      {/* Šedivění a loupání */}
                      <rect x={20+i*30} y={28+i*23} width={15+i*5} height="4" rx="1" fill="#c0b8a8" opacity="0.6"/>
                    </g>
                  ))}
                  <text x="97" y="148" textAnchor="middle" fontSize="8" fill="#a08060">šedivění, loupání, vlhkost</text>
                </g>

                {/* Postup */}
                <g transform="translate(228,15)">
                  <rect x="0" y="0" width="305" height="162" rx="8" fill="#fff" stroke="#e0d8d0" strokeWidth="1"/>
                  <text x="152" y="18" textAnchor="middle" fontSize="9" fill="#6a6050" fontWeight="700" letterSpacing="0.06em">POSTUP OŠETŘENÍ</text>
                  {[
                    { n:"1", text:"Vyčisti tlakovou vodou", color:"#4a90d9" },
                    { n:"2", text:"Nechej důkladně oschnout (2 dny)", color:"#f59e0b" },
                    { n:"3", text:"Přebrousit (zrno 80→120)", color:"#9b6fd4" },
                    { n:"4", text:"Setřít prach vlhkým hadrem", color:"#5a9e6f" },
                    { n:"5", text:"Nanést olej nebo lazuru (2 vrstvy)", color:"#c8904a" },
                    { n:"6", text:"Nechat schnout dle návodu", color:"#5a9e6f" },
                  ].map(({n, text, color}, i) => (
                    <g key={i} transform={`translate(12, ${26+i*22})`}>
                      <circle cx="10" cy="9" r="9" fill={color} opacity="0.15"/>
                      <text x="10" y="13" textAnchor="middle" fontSize="9" fill={color} fontWeight="700">{n}</text>
                      <text x="26" y="13" fontSize="9.5" fill="#2a2a28" fontWeight="500">{text}</text>
                    </g>
                  ))}
                </g>

                {/* PO */}
                <g transform="translate(546,20)">
                  <rect x="0" y="0" width="195" height="150" rx="8" fill="#fdf8f0" stroke="#e0cca0" strokeWidth="1.2"/>
                  <text x="97" y="18" textAnchor="middle" fontSize="9" fill="#3a7e4f" fontWeight="700">✅ OŠETŘENÁ TERASA</text>
                  {[0,1,2,3,4].map(i => (
                    <g key={i}>
                      <rect x="10" y={25+i*23} width="175" height="18" rx="2" fill="url(#woodNew)"/>
                      <line x1="10" y1={27+i*23} x2="185" y2={27+i*23} stroke="#a07030" strokeWidth="0.5" opacity="0.4"/>
                    </g>
                  ))}
                  <text x="97" y="148" textAnchor="middle" fontSize="8" fill="#3a7e4f">přirozená barva, ochrana ✓</text>
                </g>

                <rect y="178" width="760" height="17" fill="#ede8e0" opacity="0.5"/>
                <text x="380" y="190" textAnchor="middle" fontSize="8" fill="#8a7860" fontWeight="600" letterSpacing="0.06em">🌿 OŠETŘIT KAŽDÉ 1–2 ROKY · JARO = IDEÁLNÍ ČAS · VYDRŽÍ ROKY</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#kdy">Kdy a jak často ošetřovat</a></li>
                <li><a href="#cisteni">Čištění a příprava</a></li>
                <li><a href="#brouseni">Broušení</a></li>
                <li><a href="#olej-lazura">Olej nebo lazura?</a></li>
                <li><a href="#postup">Postup nanášení</a></li>
                <li><a href="#chyby">Nejčastější chyby</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="kdy">
              <h2>Kdy a jak často dřevěnou terasu ošetřovat</h2>
              <p>Jaro — duben/květen — je ideální čas. Dřevo je suché po zimě, teploty jsou přiměřené pro schnutí přípravků a terasa je čistá od sněhu. Letní ošetření v horku způsobuje příliš rychlé schnutí a nerovnoměrné vstřebávání.</p>
              <ul>
                <li><strong>Frekence ošetření olejem:</strong> Každý rok nebo každé 2 roky podle intenzity používání a typu dřeva.</li>
                <li><strong>Frekvence lazury:</strong> Každé 2–3 roky. Lazura tvoří film na povrchu — přebroušení je nutné až při loupání.</li>
                <li><strong>Jak poznat že je čas ošetřit:</strong> Kapka vody na dřevu — pokud se vsákne okamžitě (do 30 sekund), dřevo je suché a potřebuje ošetření. Pokud zůstane jako kulička, ochrana funguje.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Nové dřevo neolejuj hned — nech ho "zrát" 3–6 měsíců. Čerstvé dřevo obsahuje příliš mnoho pryskyřice a olej se nevstřebá správně.</div>
            </section>

            <section id="cisteni">
              <h2>Čištění a příprava terasy</h2>
              <ul>
                <li><strong>Tlakový čistič (100–150 bar):</strong> Nejrychlejší a nejúčinnější čištění. Odstraní mech, řasy, špínu a zbytky starého oleje. Nastav trysku na paprsek (ne vějíř) a pohybuj se podél vlákna dřeva.</li>
                <li><strong>Speciální čistič na dřevo:</strong> Při silném zešedivění nebo plísni použij speciální přípravek na terasové dřevo (Remmers, Osmo, Bochemit). Nanes, nechej působit 15–30 minut, opláchni.</li>
                <li><strong>Ruční čištění:</strong> Bez tlakového čističe použij tuhý kartáč a roztok jedlé sody (3 lžíce/litr vody). Drhni podél vlákna dřeva.</li>
                <li><strong>Schnutí:</strong> Klíčový krok — dřevo musí být zcela suché před broušením i ošetřením. Ideálně 2 dny suchého počasí po čištění.</li>
              </ul>
            </section>

            <section id="brouseni">
              <h2>Broušení – kdy a jak</h2>
              <p>Broušení není vždy nutné — záleží na stavu povrchu a zvoleném přípravku.</p>
              <ul>
                <li><strong>Broušení nutné pokud:</strong> Starý nátěr se loupe, povrch je hrubý nebo zvlněný, přecházíš z lazury na olej (nebo naopak).</li>
                <li><strong>Broušení není nutné pokud:</strong> Terasa je čistá a starý olej pouze vybledulý — stačí nová vrstva oleje.</li>
                <li><strong>Postup broušení:</strong> Začni hrubším papírem (zrno 60–80) pro odstranění starého nátěru a hrubých vláken, pak dojdi na jemnější (zrno 100–120) pro hladký povrch. Vždy brousit podél vlákna dřeva — nikdy napříč.</li>
                <li><strong>Nástroj:</strong> Orbitální bruska nebo pásová bruska pro rychlou práci. Roh a spáry ruční papír. Pronájem brusky 300–500 Kč/den.</li>
              </ul>
            </section>

            <section id="olej-lazura">
              <h2>Olej nebo lazura – co vybrat</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ</th><th>Princip</th><th>Výhody</th><th>Nevýhody</th><th>Vhodné pro</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Terasový olej</strong></td><td>Proniká do dřeva</td><td>Přirozený vzhled, dřevo "dýchá", snadná obnova</td><td>Nutné opakovat ročně/dvouletě</td><td>Teak, bangkirai, dub, modřín</td></tr>
                    <tr><td><strong>Lazura (transparentní)</strong></td><td>Film na povrchu</td><td>Delší ochrana (2–3 roky), barevné odstíny</td><td>Při loupání nutné přebrousit</td><td>Borovice, smrk, levnější dřeva</td></tr>
                    <tr><td><strong>Impregnace</strong></td><td>Hloubková ochrana</td><td>Ochrana před hnilobou a hmyzem</td><td>Nutná jako základ, ne vrchní nátěr</td><td>Základní ochrana nového dřeva</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Pro exotické dřevo (teak, bangkirai) vždy olej — lazura na exotickém dřevu špatně přilne kvůli přirozeným olejům v dřevu. Pro evropské jehličnany (borovice, smrk) je lazura ekonomičtější.</div>
            </section>

            <section id="postup">
              <h2>Postup nanášení oleje nebo lazury</h2>
              <ul>
                <li><strong>Podmínky:</strong> Teplota 10–25 °C, bez přímého slunce, bez dešťové předpovědi na 24–48 hodin po aplikaci.</li>
                <li><strong>Nanášení olejem:</strong> Štětcem nebo válečkem podél vlákna. Nanes štědře a po 15–30 minutách setři přebytek hadrem — olej nesmí na povrchu zůstat ve vrstvě, musí se vstřebat.</li>
                <li><strong>Nanášení lazury:</strong> Štětcem nebo stříkací pistolí tenkou vrstvou. Nečekej až první vrstva zaschne — nanes druhou vrstvu do mokré první ("mokré do mokrého") pro lepší penetraci.</li>
                <li><strong>Počet vrstev:</strong> Minimálně 2 vrstvy. Pro suchou nebo silně nasákavou terasu klidně 3 vrstvy.</li>
                <li><strong>Spáry mezi prkny:</strong> Neošetřené spáry jsou vstupní bod vlhkosti. Použij speciální kartáč na spáry nebo štětec a důkladně ošetři i boční strany prken.</li>
              </ul>
              <div className="article-tip"><strong>⚠️ Pozor:</strong> Hadry nasáknuté olejem (zejména lněným) se mohou samovznítit — vždy je nech schnout plně rozložené venku nebo ihned vlhké vlož do kovové nádoby s víkem.</div>
            </section>

            <section id="chyby">
              <h2>Nejčastější chyby při ošetřování terasy</h2>
              <ul>
                <li><strong>Ošetření mokrého dřeva:</strong> Vlhkost zablokuje penetraci přípravku. Dřevo musí mít vlhkost pod 18 % — minimum 2 suché dny po čištění.</li>
                <li><strong>Příliš silná vrstva oleje:</strong> Olej který se nevstřebá zůstane na povrchu jako lepkavá vrstva která se špiní. Vždy setři přebytek po 15–30 minutách.</li>
                <li><strong>Ošetření za přímého slunce:</strong> Přípravek schne příliš rychle a nepronikne dostatečně do dřeva. Pracuj ráno nebo ve stínu.</li>
                <li><strong>Přeskočení čištění:</strong> Olej nebo lazura nanesenou na špinavé nebo mech-porostlé dřevo konzervuje nečistoty — výsledek bude špatně vypadat a krátce vydržet.</li>
                <li><strong>Míchání produktů:</strong> Nanes vždy stejný typ přípravku jako předchozí vrstva. Lazura přes olej nebo olej přes lazuru nefunguje.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Jak vrátit šedivé dřevo zpět na přirozenou barvu?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Šedivění je přirozený proces UV degradace. Speciální "greying oil" nebo čistič na dřevo s oxalem kyselinou zrestauruje přirozenou barvu. Po vyčištění a olejování šedivá terasa výrazně zesvětlí. Kompletní vrácení barvy vyžaduje broušení do čistého dřeva.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Kolik oleje potřebuji na terasu?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Přibližně 0,5–1 litr na 5 m² pro první ošetření (suchá nebo nová terasa). Pro obnovu stačí 0,3–0,5 litru na 5 m². Vždy zkontroluj doporučení výrobce — vydatnost se liší. Lepší koupit o trochu víc než dojít.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Kdy po ošetření mohu terasu používat?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Po oleji typicky 24–48 hodin před lehkým provozem, plné zatížení a mytí po 7 dnech. Po lazuře 24 hodin pro chůzi, plné použití po 48–72 hodinách. Vždy sleduj pokyny výrobce — liší se podle teploty a vlhkosti.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/drevo-terasa-zima" title="Jak ošetřit dřevěnou terasu – broušení, olej a lazura 2026" />

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
                <li><a href="#kdy">Kdy ošetřovat</a></li>
                <li><a href="#cisteni">Čištění a příprava</a></li>
                <li><a href="#brouseni">Broušení</a></li>
                <li><a href="#olej-lazura">Olej nebo lazura</a></li>
                <li><a href="#postup">Postup nanášení</a></li>
                <li><a href="#chyby">Nejčastější chyby</a></li>
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
