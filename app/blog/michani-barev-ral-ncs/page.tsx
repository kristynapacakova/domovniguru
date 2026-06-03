import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Míchání barev RAL a NCS – průvodce odstíny",
  description: "Co je RAL a NCS barevný systém, jak z kódu nechat namíchat barvu v obchodě a jak správně kombinovat odstíny. Průvodce barevnými systémy pro laiky.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/michani-barev-ral-ncs" },
  openGraph: { title: "Míchání barev RAL a NCS – jak vybrat přesný odstín 2026", description: "RAL a NCS kódy – jak nechat namíchat barvu a jak správně kombinovat odstíny.", url: "https://www.domovniguru.cz/blog/michani-barev-ral-ncs", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-22T08:00:00Z", modifiedTime: "2026-04-22T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=M%C3%ADch%C3%A1n%C3%AD%20barev%20RAL%20a%20NCS%20%E2%80%93%20pr%C5%AFvodce%20odst%C3%ADny&cat=blog", width: 1200, height: 630, alt: "Míchání barev RAL a NCS – průvodce odstíny" }] },
  twitter: { card: "summary_large_image", title: "Míchání barev RAL a NCS 2026", description: "RAL a NCS – jak vybrat a nechat namíchat přesný odstín barvy." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/michani-barev-ral-ncs#article",
    "headline": "Míchání barev RAL a NCS – průvodce odstíny",
    "datePublished": "2026-04-22T08:00:00Z",
    "dateModified": "2026-04-22T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["míchání barev RAL", "NCS barevný systém", "jak namíchat barvu", "RAL kód barva", "NCS kód barva", "namíchaná barva prodejna"]
  }]
};

const RELATED = [
  { title: "Jak vybrat barvu na zeď", href: "/blog/jak-vybrat-barvu-na-zed", read: "9 min" },
  { title: "Efektové barvy a techniky", href: "/blog/efektove-barvy-techniky", read: "7 min" },
  { title: "Latexová vs. akrylátová barva", href: "/blog/latexova-vs-akrylatova-barva", read: "5 min" },
  { title: "Jak malovat zeď – kompletní průvodce", href: "/blog/jak-malovat-zed", read: "5 min" },
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
              <span>Míchání barev RAL a NCS</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování & barvy</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Míchání barev RAL a NCS – jak vybrat a namíchat přesný odstín</h1>
              <p className="article-lead">Viděl jsi barvu na webu, v katalogu nebo na sousedově fasádě a chceš přesně tu samou? RAL nebo NCS kód ti zaručí identický odstín — kdekoli na světě a kdykoli.</p>
              <div className="article-meta-row"><span>Aktualizováno: 22. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/michani-barev-ral-ncs" title="Míchání barev RAL a NCS – průvodce odstíny" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 185" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="185" fill="#fdf8f4"/>

                {/* RAL sekce */}
                <rect x="20" y="15" width="340" height="155" rx="8" fill="#fff" stroke="#c8904a" strokeWidth="1.2"/>
                <rect x="20" y="15" width="340" height="40" rx="8" fill="#c8904a" opacity="0.15"/>
                <text x="190" y="40" textAnchor="middle" fontSize="13" fill="#c8904a" fontWeight="700">RAL – klasický systém</text>
                <text x="190" y="55" textAnchor="middle" fontSize="9" fill="#8a7050">4místný číselný kód</text>

                {[
                  { code:"RAL 9010", name:"Čistě bílá", hex:"#F4F4F4" },
                  { code:"RAL 7016", name:"Antracitová šedá", hex:"#383E42" },
                  { code:"RAL 5015", name:"Nebeská modrá", hex:"#2278AC" },
                  { code:"RAL 6005", name:"Mechová zelená", hex:"#2F4538" },
                  { code:"RAL 3020", name:"Dopravní červená", hex:"#CC0605" },
                ].map(({code, name, hex}, i) => (
                  <g key={i} transform={`translate(35, ${72+i*18})`}>
                    <rect x="0" y="-10" width="14" height="14" rx="2" fill={hex} stroke="#ccc" strokeWidth="0.5"/>
                    <text x="20" y="2" fontSize="9" fill="#4a4a40" fontWeight="600">{code}</text>
                    <text x="130" y="2" fontSize="9" fill="#8a8078">{name}</text>
                  </g>
                ))}
                <text x="190" y="168" textAnchor="middle" fontSize="8" fill="#8a7050">Používá se pro: fasády, nábytek, průmysl</text>

                {/* NCS sekce */}
                <rect x="400" y="15" width="340" height="155" rx="8" fill="#fff" stroke="#4a90d9" strokeWidth="1.2"/>
                <rect x="400" y="15" width="340" height="40" rx="8" fill="#4a90d9" opacity="0.15"/>
                <text x="570" y="40" textAnchor="middle" fontSize="13" fill="#4a90d9" fontWeight="700">NCS – přirozený systém</text>
                <text x="570" y="55" textAnchor="middle" fontSize="9" fill="#4a6080">Popisuje jak barvu vnímáme</text>

                <text x="415" y="75" fontSize="9" fill="#4a6a8a" fontWeight="600">Struktura kódu: NCS S 2030-B90G</text>
                {[
                  { part:"S", desc:"Druhá generace (standard)" },
                  { part:"20", desc:"Tmavost (0=bílá, 90=černá)" },
                  { part:"30", desc:"Chromatičnost (0=šedá, 90=plná barva)" },
                  { part:"B90G", desc:"Odstín: 90% zelená v modrozelené" },
                ].map(({part, desc}, i) => (
                  <g key={i} transform={`translate(415, ${92+i*18})`}>
                    <rect x="0" y="-11" width="22" height="14" rx="3" fill="#4a90d9" opacity="0.2"/>
                    <text x="11" y="1" textAnchor="middle" fontSize="9" fill="#4a90d9" fontWeight="700">{part}</text>
                    <text x="30" y="1" fontSize="8.5" fill="#4a4a40">{desc}</text>
                  </g>
                ))}
                <text x="570" y="168" textAnchor="middle" fontSize="8" fill="#4a6080">Používá se pro: interiéry, design, architektura</text>

                <rect y="168" width="760" height="17" fill="#f0ece8" opacity="0.5"/>
                <text x="380" y="180" textAnchor="middle" fontSize="8" fill="#8a7050" fontWeight="600" letterSpacing="0.06em">🎨 RAL = PRŮMYSL A FASÁDY · NCS = INTERIÉR A DESIGN · OBA SYSTÉMY MÍCHAJÍ VE VŠECH HOBBYMARKETECH</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#ral">Co je RAL a jak ho číst</a></li>
                <li><a href="#ncs">Co je NCS a jak ho číst</a></li>
                <li><a href="#jak-namichat">Jak nechat namíchat barvu</a></li>
                <li><a href="#kde-najit">Kde najít RAL nebo NCS kód</a></li>
                <li><a href="#tipy">Praktické tipy</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="ral">
              <h2>Co je RAL a jak ho číst</h2>
              <p>RAL (Reichs-Ausschuß für Lieferbedingungen) je německý standard pro standardizaci barev. Každá barva má 4místný číselný kód. Systém obsahuje přes 200 standardních barev.</p>
              <ul>
                <li><strong>Čtení kódu:</strong> RAL 9010 — číslo samotné určuje barvu. První číslice skupinu: 1xxx = žlutá/béžová, 2xxx = oranžová, 3xxx = červená, 4xxx = fialová, 5xxx = modrá, 6xxx = zelená, 7xxx = šedá, 8xxx = hnědá, 9xxx = bílá/černá.</li>
                <li><strong>Populární RAL kódy:</strong> RAL 9010 (čistě bílá), RAL 9016 (dopravní bílá), RAL 7016 (antracit), RAL 5015 (nebeská modrá), RAL 6005 (mechová zelená).</li>
                <li><strong>Kde se používá:</strong> Fasády, kovy, okna, průmyslové nátěry, auto laky. Dnes i v interiérech pro přesné specifikace barev.</li>
              </ul>
            </section>

            <section id="ncs">
              <h2>Co je NCS a jak ho číst</h2>
              <p>NCS (Natural Color System) je švédský systém barev který popisuje jak barvu vidíme — ne jak je namíchaná. Každý odstín je definován třemi vlastnostmi: tmavostí, chromatičností a odstínem.</p>
              <ul>
                <li><strong>Čtení kódu NCS S 2030-B90G:</strong> S = standard, 20 = tmavost (0=bílá, 90=černá), 30 = sytost (0=šedá, 90=plná barva), B90G = 90 % zelené v modrozelené.</li>
                <li><strong>Základní NCS barvy:</strong> Systém je postaven na 6 základních barvách: bílá (W), černá (S), žlutá (Y), červená (R), modrá (B), zelená (G).</li>
                <li><strong>Kde se používá:</strong> Architektura, interiérový design, výroba nábytku, textil. Běžný v Skandinávii a postupně se rozšiřuje.</li>
              </ul>
            </section>

            <section id="jak-namichat">
              <h2>Jak nechat namíchat barvu</h2>
              <ul>
                <li><strong>Postup:</strong> Přijď do hobbymarketu (Hornbach, Bauhaus, OBI, Malíř.cz) s RAL nebo NCS kódem. Obchod má míchací stroj — technik zadá kód, vyberou se pigmenty a barva se namíchá přesně dle kódu.</li>
                <li><strong>Co si připravit:</strong> RAL nebo NCS kód, typ barvy (interiérová, exteriérová, na dřevo, na kov), množství (v litrech), lesklost (matná, satin, lesklá).</li>
                <li><strong>Cena míchání:</strong> Obvykle zdarma nebo za 20–50 Kč jako příplatek za servis. Samotná barva se platí standardně.</li>
                <li><strong>Objednat online:</strong> Mnoho hobbymarketů nabízí míchání online s dodávkou. Zadáš kód, množství a typ — barva dorazí domů.</li>
              </ul>
              <div className="article-tip"><strong>💡 Důležité:</strong> Různé výrobce barev mohou míchat stejný RAL kód s mírně odlišným výsledkem. Pro opravy vždy kupuj ze stejného obchodu a stejného výrobce — jinak bude rozdíl viditelný.</div>
            </section>

            <section id="kde-najit">
              <h2>Kde najít RAL nebo NCS kód</h2>
              <ul>
                <li><strong>Na existující barvě:</strong> Podívej se na víko nebo etiketu plechovky — kód bývá uveden přímo tam.</li>
                <li><strong>Online databáze:</strong> ral-farben.de, ncscolour.com nebo colorpedia.com — zadáš přibližnou barvu a web ukáže nejbližší kódy.</li>
                <li><strong>Fotka + AI:</strong> Vyfotografuj barvu a zadej do Google nebo AI nástroje — dostaneš přibližný RAL kód. Přesnost závisí na osvětlení fotky.</li>
                <li><strong>Výrobce produktu:</strong> Pokud chceš barvu z katalogu nábytku nebo od architekta, výrobce obvykle uvede RAL nebo NCS kód v technické dokumentaci.</li>
              </ul>
            </section>

            <section id="tipy">
              <h2>Praktické tipy</h2>
              <ul>
                <li><strong>Vzorník na místě:</strong> Před objednáním velkého množství kup testovací vzorek (100–200 ml). Nanes na zeď a sleduj ve různých světelných podmínkách — denní světlo, umělé světlo, večer.</li>
                <li><strong>Stejná šarže:</strong> Pokud potřebuješ více plechovek, nechej namíchat vše najednou — různé šarže mohou mít drobné odchylky.</li>
                <li><strong>Uchovej kód:</strong> Zapiš si kód namíchané barvy a výrobce pro budoucí opravy. Ušetříš hodiny hledání.</li>
                <li><strong>RAL vs. NCS v praxi:</strong> Pro fasádu a exteriér volíš RAL. Pro interiéry a design NCS (přesnější vnímání barvy). Hobbymarkety míchají oba systémy.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Mohu namíchat jakoukoli barvu dle fotky?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ano — míchací stroje v hobbymarketech dokážou namíchat tisíce odstínů. Přines vzor barvy (kus materiálu, dřevo, kov) nebo fotku — technik pomocí spektrofotometru změří přesný odstín a namíchá ho. Výsledek se může mírně lišit od originálu kvůli různým povrchům a podmínkám.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Proč vypadá namíchaná barva jinak než na monitoru?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Monitory zobrazují barvy světlem (RGB), barvy na stěně odrážejí světlo (CMYK/pigmenty). Každý monitor je kalibrovaný jinak. Proto nikdy nevybírej barvu podle monitoru — vždy fyzický vzorník nebo RAL/NCS kód. Tiskárny a monitory nikdy nereproducují barvy 100% přesně.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Je RAL a Pantone totéž?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ne — jsou to různé barevné systémy pro různá odvětví. Pantone je americký systém primárně pro tisk a grafický design. RAL je evropský systém pro průmyslové nátěry, fasády a výrobní procesy. NCS je švédský systém pro architekturu a design. Hobbymarkety míchají RAL a NCS, ne Pantone.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/michani-barev-ral-ncs" title="Míchání barev RAL a NCS – průvodce odstíny" />

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
                <li><a href="#ral">Co je RAL</a></li>
                <li><a href="#ncs">Co je NCS</a></li>
                <li><a href="#jak-namichat">Jak nechat namíchat</a></li>
                <li><a href="#kde-najit">Kde najít kód</a></li>
                <li><a href="#tipy">Praktické tipy</a></li>
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
