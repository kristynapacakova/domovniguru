import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak se zbavit plísně na zdi natrvalo – příčiny a řešení 2025",
  description: "Plíseň na zdi nestačí přemalovat – vrátí se. Zjisti příčinu, vyber správný postup čištění a zabraň opakování natrvalo.",
  alternates: { canonical: "https://domovniguru.cz/blog/jak-odstranit-plisen-na-zdi" },
  openGraph: { title: "Jak se zbavit plísně na zdi natrvalo", description: "Příčiny, postup čištění a prevence. Bez chemie nebo s ní.", url: "https://domovniguru.cz/blog/jak-odstranit-plisen-na-zdi", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2025-02-10T08:00:00Z", modifiedTime: "2025-03-01T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak se zbavit plísně na zdi natrvalo", description: "Příčiny, postup čištění a prevence." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://domovniguru.cz/blog/jak-odstranit-plisen-na-zdi#article", "headline": "Jak se zbavit plísně na zdi natrvalo", "datePublished": "2025-02-10T08:00:00Z", "dateModified": "2025-03-01T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "inLanguage": "cs", "keywords": ["jak odstranit plíseň na zdi", "plíseň na zdi", "zbavit se plísně", "plíseň v bytě", "příčina plísně"] }] };

const RELATED = [
  { title: "Penetrace před malováním – kdy je nutná?", href: "/blog/penetrace-pred-malovanim", read: "4 min" },
  { title: "Jak malovat zeď – průvodce pro začátečníky", href: "/blog/jak-malovat-zed", read: "5 min" },
  { title: "Latexová vs. akrylátová barva", href: "/blog/latexova-vs-akrylatova-barva", read: "4 min" },
  { title: "Jak malovat přes tmavou barvu", href: "/blog/malovat-pres-tmavou-barvu", read: "4 min" },
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
              <span>Plíseň na zdi</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování & barvy</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak se zbavit plísně na zdi natrvalo</h1>
              <p className="article-lead">Plíseň přemalovat nestačí — za pár týdnů prosvítí zpátky. Jediný způsob jak se jí zbavit natrvalo je odstranit příčinu. Tady je jak na to krok za krokem.</p>
              <div className="article-meta-row"><span>Aktualizováno: 1. března 2025</span><span>·</span><span>DomovniGuru</span></div>
            </header>

            {/* HERO ILLUSTRATION */}
            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="200" fill="#fdf8f2"/>
                {/* LEFT: zeď s plísní */}
                <rect x="40" y="30" width="160" height="140" rx="4" fill="#f0ece6" stroke="#e0d8cc" strokeWidth="1.5"/>
                {[60,80,100,120,140,160].map((y,i)=><line key={i} x1="40" y1={y} x2="200" y2={y} stroke="#e0d8cc" strokeWidth="0.8"/>)}
                {[90,140].map((x,i)=><line key={i} x1={x} y1="30" x2={x} y2="170" stroke="#e0d8cc" strokeWidth="0.8"/>)}
                <circle cx="62" cy="50" r="18" fill="#3a4a2a" opacity="0.35"/>
                <circle cx="78" cy="38" r="13" fill="#3a4a2a" opacity="0.4"/>
                <circle cx="88" cy="60" r="15" fill="#4a5a3a" opacity="0.3"/>
                <circle cx="58" cy="68" r="11" fill="#3a4a2a" opacity="0.35"/>
                <circle cx="100" cy="46" r="10" fill="#4a5a3a" opacity="0.25"/>
                <circle cx="72" cy="80" r="9" fill="#3a4a2a" opacity="0.2"/>
                <path d="M168 52 Q170 46 172 52 Q172 58 168 58 Q164 58 164 52 Q166 46 168 52Z" fill="#a0b8d0" opacity="0.6"/>
                <path d="M178 72 Q180 66 182 72 Q182 78 178 78 Q174 78 174 72 Q176 66 178 72Z" fill="#a0b8d0" opacity="0.5"/>
                <text x="120" y="192" fontFamily="var(--font-sans,sans-serif)" fontSize="9" fill="#c8b89a" textAnchor="middle" letterSpacing="0.08em">PROBLÉM</text>
                {/* CENTER: čištění */}
                <g transform="translate(285, 52)">
                  <rect x="0" y="22" width="58" height="38" rx="8" fill="#c8a97a" opacity="0.45"/>
                  <rect x="4" y="26" width="50" height="30" rx="6" fill="#d4b48a" opacity="0.35"/>
                  <rect x="18" y="2" width="22" height="26" rx="8" fill="#e8d4b8" opacity="0.8"/>
                  <rect x="12" y="10" width="8" height="16" rx="4" fill="#e8d4b8" opacity="0.8"/>
                  <rect x="38" y="10" width="8" height="16" rx="4" fill="#e8d4b8" opacity="0.8"/>
                  <path d="M-8 82 Q29 67 66 82" stroke="#c0392b" strokeWidth="1.5" strokeDasharray="4 3" fill="none" opacity="0.5" strokeLinecap="round"/>
                  <path d="M-4 92 Q29 77 62 92" stroke="#c0392b" strokeWidth="1.2" strokeDasharray="4 3" fill="none" opacity="0.4" strokeLinecap="round"/>
                </g>
                <g transform="translate(368, 58)">
                  <rect x="0" y="18" width="34" height="54" rx="5" fill="none" stroke="#c8b89a" strokeWidth="1.8"/>
                  <rect x="7" y="10" width="20" height="12" rx="3" fill="none" stroke="#c8b89a" strokeWidth="1.8"/>
                  <rect x="11" y="4" width="12" height="8" rx="2" fill="none" stroke="#c8b89a" strokeWidth="1.5"/>
                  <rect x="4" y="26" width="26" height="22" rx="2" fill="#c8b89a" opacity="0.15"/>
                  <text x="17" y="36" fontFamily="sans-serif" fontSize="6" fill="#9a8a7a" textAnchor="middle">ANTI</text>
                  <text x="17" y="44" fontFamily="sans-serif" fontSize="6" fill="#9a8a7a" textAnchor="middle">MOLD</text>
                </g>
                <text x="348" y="192" fontFamily="var(--font-sans,sans-serif)" fontSize="9" fill="#c8b89a" textAnchor="middle" letterSpacing="0.08em">ČIŠTĚNÍ</text>
                {/* RIGHT: čistá zeď */}
                <rect x="520" y="30" width="200" height="140" rx="4" fill="#f8f4ee" stroke="#e8e0d4" strokeWidth="1.5"/>
                {[60,80,100,120,140,160].map((y,i)=><line key={i} x1="520" y1={y} x2="720" y2={y} stroke="#e8e0d4" strokeWidth="0.8"/>)}
                {[570,620,670].map((x,i)=><line key={i} x1={x} y1="30" x2={x} y2="170" stroke="#e8e0d4" strokeWidth="0.8"/>)}
                <path d="M558 82 L588 82" stroke="#a0b8d0" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M584 78 L589 82 L584 86" stroke="#a0b8d0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M558 97 L588 97" stroke="#a0b8d0" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M584 93 L589 97 L584 101" stroke="#a0b8d0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M558 112 L588 112" stroke="#a0b8d0" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M584 108 L589 112 L584 116" stroke="#a0b8d0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <circle cx="658" cy="97" r="28" fill="none" stroke="#5a9e6f" strokeWidth="2" opacity="0.4"/>
                <path d="M643 97 L654 108 L673 84" stroke="#5a9e6f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <text x="620" y="192" fontFamily="var(--font-sans,sans-serif)" fontSize="9" fill="#c8b89a" textAnchor="middle" letterSpacing="0.08em">VÝSLEDEK</text>
                {/* Šipky */}
                <path d="M205 100 L278 100" stroke="#c8b89a" strokeWidth="1.2" strokeLinecap="round"/>
                <path d="M274 96 L279 100 L274 104" stroke="#c8b89a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M430 100 L512 100" stroke="#c8b89a" strokeWidth="1.2" strokeLinecap="round"/>
                <path d="M508 96 L513 100 L508 104" stroke="#c8b89a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#priciny">Proč plíseň roste</a></li>
                <li><a href="#typy">Typy plísní</a></li>
                <li><a href="#postup">Postup odstranění</a></li>
                <li><a href="#prostredky">Čím čistit</a></li>
                <li><a href="#prevence">Prevence natrvalo</a></li>
                <li><a href="#kdy-odbornik">Kdy volat odborníka</a></li>
              </ol>
            </nav>

            <section id="priciny">
              <h2>Proč plíseň roste</h2>
              <p>Plíseň není problém zdi — je to symptom. Roste tam kde je kombinace vlhkosti, tepla a nedostatečného větrání. Přemalovat ji barvou je jako zakrýt díru kobercem — zmizí z očí, ale příčina zůstává.</p>
              <ul>
                <li><strong>Kondenzace</strong> – teplý vzduch naráží na studenou zeď (typicky rohy, okna, koupelna)</li>
                <li><strong>Zatékání</strong> – voda proniká zvenku přes střechu, fasádu nebo okna</li>
                <li><strong>Vzlínání vlhkosti</strong> – voda stoupá ze základů (starší domy bez izolace)</li>
                <li><strong>Nedostatečné větrání</strong> – vlhkost z vaření, sprchování a dýchání nemá kam odejít</li>
                <li><strong>Tepelný most</strong> – místo kde zeď špatně izoluje a je výrazně chladnější než zbytek</li>
              </ul>
              <div className="article-tip"><strong>💡 Jak poznat příčinu:</strong> Plíseň v rozích místností = kondenzace. Plíseň rovnoměrně na celé zdi = zatékání nebo vzlínání. Plíseň jen u oken = tepelný most nebo zatékající rám.</div>
            </section>

            <section id="typy">
              <h2>Typy plísní a jak je poznat</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ</th><th>Vzhled</th><th>Kde se vyskytuje</th><th>Nebezpečnost</th></tr></thead>
                  <tbody>
                    <tr><td>Černá plíseň (Stachybotrys)</td><td>Černé nebo tmavě zelené skvrny</td><td>Koupelna, sklepní prostory</td><td>Vysoká – uvolňuje toxiny</td></tr>
                    <tr><td>Zelená plíseň (Aspergillus)</td><td>Zelené nebo modrozelené skvrny</td><td>Koupelna, okna</td><td>Střední</td></tr>
                    <tr><td>Bílá plíseň</td><td>Bílé povlaky, někdy prašné</td><td>Sklep, základy</td><td>Nízká až střední</td></tr>
                    <tr><td>Růžová plíseň</td><td>Růžové nebo oranžové skvrny</td><td>Sprchový kout, vana</td><td>Nízká</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>⚠️ Černá plíseň je vážná:</strong> Pokud máš v bytě velké plochy černé plísně (více než 1 m²), neodstraňuj ji sám — zavolej odborníka. Spory mohou způsobit vážné zdravotní problémy.</div>
            </section>

            <section id="postup">
              <h2>Postup odstranění krok za krokem</h2>
              <p>Před začištěním vždy ochranné pomůcky a větrání — plísňové spory jsou při narušení ve vzduchu a snadno se vdechnou.</p>
              <ul>
                <li><strong>Krok 1 – Ochrana:</strong> Nasaď respirátor (min. FFP2), rukavice a brýle. Otevři okno.</li>
                <li><strong>Krok 2 – Odstranění:</strong> Seškrábni nebo setři plíseň suchou textilií do igelitového sáčku. Nevysávej — vysavač spory rozfouká po místnosti.</li>
                <li><strong>Krok 3 – Ošetření:</strong> Nanes protiplísňový přípravek (Savo, Domestos, specializovaný fungicid). Nech působit dle návodu (15–30 min).</li>
                <li><strong>Krok 4 – Omytí:</strong> Setři přípravek vlhkým hadříkem a nech zeď důkladně vyschnout (min. 24–48 hod).</li>
                <li><strong>Krok 5 – Penetrace:</strong> Nanes protiplísňovou penetraci nebo základní nátěr.</li>
                <li><strong>Krok 6 – Malování:</strong> Přemaluj protiplísňovou barvou — obsahuje fungicidy které brání návratu plísně.</li>
              </ul>
            </section>

            <section id="prostredky">
              <h2>Čím čistit – srovnání</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Přípravek</th><th>Účinnost</th><th>Nevýhody</th><th>Vhodné pro</th></tr></thead>
                  <tbody>
                    <tr><td>Savo / Domestos (ředěný 1:5)</td><td>Vysoká</td><td>Silný chlorový zápach, bělí textilie</td><td>Koupelna, malé plochy</td></tr>
                    <tr><td>Bílý ocet (9%)</td><td>Střední</td><td>Méně účinný na tmavé plísně</td><td>Prevence, malé skvrny</td></tr>
                    <tr><td>Specializovaný fungicid</td><td>Velmi vysoká</td><td>Vyšší cena (200–400 Kč)</td><td>Větší plochy, opakující se plíseň</td></tr>
                    <tr><td>Jedlá soda + voda</td><td>Nízká</td><td>Funguje jen na povrchovou plíseň</td><td>Velmi malé skvrny, prevence</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Na koupelnové spáry a silikonové těsnění funguje nejlépe gelový přípravek na bázi chloru — tekutý steče, gel zůstane v kontaktu s povrchem déle a líp zapůsobí.</div>
            </section>

            <section id="prevence">
              <h2>Prevence natrvalo</h2>
              <p>Plíseň se vrátí dokud neodstraníš příčinu. Nejúčinnější prevence je kombinace správného větrání a kontroly vlhkosti.</p>
              <ul>
                <li><strong>Větrání 2–3× denně</strong> po dobu 5–10 minut — krátké intenzivní větrání (průvan) je účinnější než celodenní pootevřené okno</li>
                <li><strong>Větrací mřížky</strong> v koupelně a kuchyni — vlhkost musí mít kam odejít</li>
                <li><strong>Odvlhčovač</strong> do místností kde relativní vlhkost překračuje 60 % (změříš levným hygrometrem za 150 Kč)</li>
                <li><strong>Protiplísňová barva</strong> při příštím malování — obsahuje fungicidy přímo v pigmentu</li>
                <li><strong>Nezakrývat nábytek k zdi</strong> — nechej 5–10 cm mezeru pro cirkulaci vzduchu</li>
                <li><strong>Kontrola oken a střechy</strong> — zatékání je nejčastější příčina plísně na vnějších stěnách</li>
              </ul>
            </section>

            <section id="kdy-odbornik">
              <h2>Kdy volat odborníka</h2>
              <p>Ne každou plíseň zvládneš sám. Zavolej odborníka pokud:</p>
              <ul>
                <li>Plíseň pokrývá plochu větší než 1 m²</li>
                <li>Plíseň se opakovaně vrací i po ošetření</li>
                <li>Máš podezření na zatékání nebo vzlínání vlhkosti</li>
                <li>Někdo v domácnosti má alergii, astma nebo oslabený imunitní systém</li>
                <li>Plíseň je za obkladem, pod podlahou nebo v konstrukci</li>
              </ul>
              <p>V těchto případech je potřeba sanace vlhkosti — injektáž, dodatečná izolace nebo oprava hydroizolace. Kosmetická oprava povrchu problém nevyřeší.</p>
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
                <li><a href="#priciny">Proč plíseň roste</a></li>
                <li><a href="#typy">Typy plísní</a></li>
                <li><a href="#postup">Postup odstranění</a></li>
                <li><a href="#prostredky">Čím čistit</a></li>
                <li><a href="#prevence">Prevence</a></li>
                <li><a href="#kdy-odbornik">Kdy volat odborníka</a></li>
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
