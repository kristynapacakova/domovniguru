import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Zimní pneumatiky – kdy přezout a jak vybrat 2026",
  description: "Kdy přezout na zimní pneumatiky, jak je vybrat a co hrozí za jízdu na letních v zimě. Zákonné požadavky, správné uskladnění a rozdíl zimní vs. celoroční.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/zimni-pneumatiky-kdy" },
  openGraph: { title: "Zimní pneumatiky – kdy přezout a jak vybrat 2026", description: "Kdy přezout, jak vybrat zimní pneumatiky a co říká zákon – kompletní průvodce.", url: "https://www.domovniguru.cz/blog/zimni-pneumatiky-kdy", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-22T08:00:00Z", modifiedTime: "2026-04-22T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "DomovniGuru" }] },
  twitter: { card: "summary_large_image", title: "Zimní pneumatiky – kdy přezout 2026", description: "Kdy přezout, jak vybrat a co říká zákon – průvodce zimními pneumatikami." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/zimni-pneumatiky-kdy#article",
    "headline": "Zimní pneumatiky – kdy přezout a jak vybrat 2026",
    "datePublished": "2026-04-22T08:00:00Z",
    "dateModified": "2026-04-22T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["zimní pneumatiky kdy přezout", "přezutí na zimní pneumatiky", "zimní vs celoroční pneumatiky", "zákon zimní pneumatiky ČR", "výběr zimních pneumatik", "uskladnění pneumatik"]
  }]
};

const RELATED = [
  { title: "Auto na zimu – karoserie a ochrana", href: "/blog/auto-na-zimu-karoserie", read: "6 min" },
  { title: "Příprava domu na zimu", href: "/blog/priprava-domu-na-zimu", read: "10 min" },
  { title: "Jak zkontrolovat kotel před zimou", href: "/blog/zkontrolovat-kotel-pred-zimou", read: "6 min" },
  { title: "Sezónní údržba domu", href: "/blog/priprava-domu-na-zimu", read: "10 min" },
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
              <Link href="/blog/kategorie/sezonni-udrzba">Sezónní údržba</Link><span className="breadcrumb-sep">/</span>
              <span>Zimní pneumatiky</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">🍂 Sezónní údržba</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Zimní pneumatiky – kdy přezout a jak vybrat</h1>
              <p className="article-lead">Přezutí na zimní pneumatiky není jen zákonná povinnost — je to otázka bezpečnosti. Letní pneumatika na sněhu zastaví o 40 % hůře než zimní. Tady je vše co potřebuješ vědět.</p>
              <div className="article-meta-row"><span>Aktualizováno: 22. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/zimni-pneumatiky-kdy" title="Zimní pneumatiky – kdy přezout a jak vybrat 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 175" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="175" fill="#f0f4f8"/>
                <text x="380" y="22" textAnchor="middle" fontSize="10" fill="#4a6080" fontWeight="700" letterSpacing="0.04em">SROVNÁNÍ TYPŮ PNEUMATIK</text>

                {[
                  { x:20, name:"Letní", icon:"☀️", pros:"Nejlepší handling\nNejnižší spotřeba\nNejlepší brzdění (sucho)", cons:"Nebezpečné pod +7 °C\nTuhne guma v chladu\nŠpatně na sněhu/ledu", use:"Duben – říjen", color:"#f59e0b" },
                  { x:248, name:"Zimní ❄️", icon:"🌨️", pros:"Bezpečné pod +7 °C\nMěkká guma v chladu\nLamely pro sníh a led", cons:"Horší handling v létě\nVyšší spotřeba v létě\nRychleji se opotřebí", use:"Říjen – duben", color:"#4a90d9" },
                  { x:476, name:"Celoroční", icon:"🔄", pros:"Neřešíš přezutí\nKomformis pro město\nJeden set kol", cons:"Průměrné v létě i zimě\nNe pro hory a sníh\nKratší životnost", use:"Celoročně (kompromis)", color:"#9b6fd4" },
                  { x:620, name:"Studená pravidlo", icon:"🌡️", pros:"", cons:"", use:"Přezout při teplotách\npod +7 °C\nnejen při sněhu!", color:"#e07040", special:true },
                ].map(({x, name, icon, pros, cons, use, color, special}) => (
                  <g key={x} transform={`translate(${x}, 28)`}>
                    <rect x="0" y="0" width={special ? 122 : 210} height="132" rx="8" fill="#fff" stroke={color} strokeWidth="1.5"/>
                    <text x={special ? 61 : 105} y="28" textAnchor="middle" fontSize="18">{icon}</text>
                    <text x={special ? 61 : 105} y="46" textAnchor="middle" fontSize="11" fill={color} fontWeight="700">{name}</text>
                    {special ? (
                      <>
                        <text x="61" y="68" textAnchor="middle" fontSize="28" fill={color}>+7°C</text>
                        <text x="61" y="90" textAnchor="middle" fontSize="8" fill="#4a4a40">{use.split('\n')[0]}</text>
                        <text x="61" y="102" textAnchor="middle" fontSize="8" fill="#4a4a40">{use.split('\n')[1]}</text>
                        <text x="61" y="114" textAnchor="middle" fontSize="8" fill="#4a4a40">{use.split('\n')[2]}</text>
                      </>
                    ) : (
                      <>
                        <line x1="10" y1="52" x2={200} y2="52" stroke={color} strokeWidth="0.5" opacity="0.4"/>
                        {pros.split('\n').map((l,i) => <text key={i} x="14" y={65+i*12} fontSize="8.5" fill="#3a7e4f">✓ {l}</text>)}
                        {cons.split('\n').map((l,i) => <text key={i} x="14" y={103+i*12} fontSize="8.5" fill="#e07040">✗ {l}</text>)}
                        <rect x="8" y="120" width="194" height="10" rx="3" fill={color} opacity="0.1"/>
                        <text x="105" y="128" textAnchor="middle" fontSize="7.5" fill={color} fontWeight="600">Sezóna: {use}</text>
                      </>
                    )}
                  </g>
                ))}

                <rect y="158" width="760" height="17" fill="#e0eaf4" opacity="0.5"/>
                <text x="380" y="170" textAnchor="middle" fontSize="8" fill="#3a6a8a" fontWeight="600" letterSpacing="0.06em">🌡️ ZLATÉ PRAVIDLO: POD +7 °C → ZIMNÍ PNEUMATIKY · BEZ OHLEDU NA SNÍH</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#kdy">Kdy přezout – zlaté pravidlo +7 °C</a></li>
                <li><a href="#zakon">Co říká zákon v ČR</a></li>
                <li><a href="#vyber">Jak vybrat zimní pneumatiky</a></li>
                <li><a href="#celorocni">Zimní vs. celoroční pneumatiky</a></li>
                <li><a href="#skladovani">Uskladnění pneumatik</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="kdy">
              <h2>Kdy přezout – zlaté pravidlo +7 °C</h2>
              <p>Čekáš na první sníh? Děláš chybu. Zimní pneumatiky přezuj při teplotách <strong>pod +7 °C</strong> — bez ohledu na to jestli sněží.</p>
              <ul>
                <li><strong>Proč +7 °C a ne sníh:</strong> Zimní pneumatiky jsou vyrobeny z měkčí gumové směsi která funguje správně pod +7 °C. Letní pneumatika se v chladu tvrdí a ztrácí přilnavost — i na suchém asfaltu brzdí hůře.</li>
                <li><strong>Podzim (přezutí na zimní):</strong> Ideálně říjen — kdy noční teploty pravidelně klesají pod +7 °C. Nejpozdější termín: do prvního sněhu.</li>
                <li><strong>Jaro (přezutí na letní):</strong> Ideálně po "ledových mužích" (12.–15. května) kdy nehrozí pozdní mrazy. Dříve přezouvat jen pokud teploty stabilně přesáhly +7 °C.</li>
              </ul>
              <div className="article-tip"><strong>💡 Pamatuj:</strong> Přezutí objednávej aspoň 2–3 týdny předem — pneuservisy jsou v říjnu a v dubnu přeplněné. Kdo přijde pozdě, čeká dny nebo týdny.</div>
            </section>

            <section id="zakon">
              <h2>Co říká zákon v ČR</h2>
              <ul>
                <li><strong>Zákonná povinnost:</strong> V ČR platí povinnost použití zimních pneumatik (nebo celoročních s označením M+S nebo 3PMSF) při zimních podmínkách — sníh, náledí, nebo teplota pod 0 °C na vozovce.</li>
                <li><strong>Hloubka dezénu:</strong> Minimální hloubka dezénu zimní pneumatiky: 4 mm (zákonné minimum je 1,6 mm ale pod 4 mm výrazně klesá bezpečnost).</li>
                <li><strong>Pokuta:</strong> Jízda bez zimních pneumatik za zimních podmínek: pokuta 2 000–3 000 Kč a body. Při nehodě na letních pneumatikách v zimě: pojišťovna může krátit pojistné plnění.</li>
                <li><strong>Označení pneumatik:</strong> Zimní pneumatiky musí mít symbol M+S nebo sněhové vločky s horcem (3PMSF). Celoroční pneumatiky s M+S označením splňují zákonný požadavek.</li>
              </ul>
            </section>

            <section id="vyber">
              <h2>Jak vybrat zimní pneumatiky</h2>
              <ul>
                <li><strong>Správná velikost:</strong> Rozměr pneumatiky je uveden na bočnici (např. 205/55 R16). Musí odpovídat doporučení výrobce vozu (v technickém průkazu nebo v otvoru dveří).</li>
                <li><strong>Značky:</strong> Prémium: Michelin, Continental, Bridgestone, Pirelli. Střední třída: Nokian, Goodyear, Dunlop. Ekonomická: Falken, Matador, Barum. Prémium pneumatiky brzdí výrazně lépe na sněhu a ledu.</li>
                <li><strong>Označení na pneumatice:</strong> 3PMSF (tři horce se sněhovou vločkou) = skutečná zimní pneumatika. Pouze M+S bez 3PMSF = splňuje zákon ale horší výkon na sněhu.</li>
                <li><strong>Stáří pneumatik:</strong> Pneumatiky starší 6–8 let vyměnit bez ohledu na stav dezénu — guma stárne a tvrdne. Datum výroby je na bočnici (DOT kód — poslední 4 číslice = týden a rok výroby).</li>
              </ul>
            </section>

            <section id="celorocni">
              <h2>Zimní vs. celoroční pneumatiky</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Kritérium</th><th>Zimní + letní sety</th><th>Celoroční</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Bezpečnost v zimě</strong></td><td>⭐⭐⭐⭐⭐ Nejlepší</td><td>⭐⭐⭐ Dobrá</td></tr>
                    <tr><td><strong>Bezpečnost v létě</strong></td><td>⭐⭐⭐⭐⭐ Nejlepší</td><td>⭐⭐⭐ Dobrá</td></tr>
                    <tr><td><strong>Náklady (pořizovací)</strong></td><td>Vyšší (2 sety)</td><td>Nižší (1 set)</td></tr>
                    <tr><td><strong>Náklady (provozní)</strong></td><td>Nižší (delší životnost)</td><td>Vyšší (rychleji se opotřebí)</td></tr>
                    <tr><td><strong>Vhodné pro</strong></td><td>Česká republika, hory</td><td>Město, mírné zimy</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Pro typického českého řidiče (zimy se sněhem, jízda mimo město) je stále lepší volbou mít dva sety pneumatik. Celoroční jsou dobrým kompromisem pro město kde je silnice sypána dříve.</p>
            </section>

            <section id="skladovani">
              <h2>Uskladnění pneumatik</h2>
              <ul>
                <li><strong>Pneumatiky na discích (kola):</strong> Uskladni na bok — pneumatika leží na disku. Nebo věs na háky. Neskládej kola na sebe — deformuje pneumatiku.</li>
                <li><strong>Pneumatiky bez disků (jen gumy):</strong> Postav na pláš kolmo (jako kolo) a pravidelně otáčej o čtvrt otočení aby se deformovaly rovnoměrně.</li>
                <li><strong>Podmínky skladu:</strong> Suché, tmavé, bez přímého slunce nebo ozónu (kompresor nebo elektromotor v blízkosti). Teplota 0–25 °C. Nikdy na přímém slunci nebo ve vlhku.</li>
                <li><strong>Pneuservis uskladnění:</strong> Pneuservisy nabízejí uskladnění za 500–1 500 Kč za rok. Výhodné pokud nemáš sklep nebo garáž.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Mohu jezdit s zimními pneumatikami celý rok?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Zákon to nezakazuje, ale je to nevýhodné. Zimní pneumatiky mají měkčí gumovou směs která se v létě rychleji opotřebí, má horší handling při vysokých teplotách a vyšší spotřebu paliva. Průměrná zimní pneumatika celoroční jízdou vydrží jen 2–3 sezóny místo 5–6. Ekonomicky se nevyplatí.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Kolik stojí přezutí pneumatik?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Přezutí (výměna kol na diskách): 200–400 Kč za auto. Přezutí s přehozením pneumatik na disky + vyvážení: 600–1 200 Kč za auto. Sezónní přezutí s uskladněním: 800–1 500 Kč. Ceny se liší dle lokality — Praha a velká města jsou dražší.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak poznám že zimní pneumatika je opotřebená?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Hloubka dezénu pod 4 mm (zákonné minimum 1,6 mm ale bezpečnostní minimum 4 mm). Dezén má ukazatele opotřebení (TWI) — malé výstupky v drážkách dezénu. Když je dezén na úrovni těchto výstupků, pneumatika je opotřebená. Měř pomocí hloubkoměru dezénu (20–50 Kč v hobbymarketu).</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/zimni-pneumatiky-kdy" title="Zimní pneumatiky – kdy přezout a jak vybrat 2026" />

            <section className="related-section">
              <h2>Související články</h2>
              <div className="related-grid">
                {RELATED.map((r) => (
                  <Link key={r.href} href={r.href} className="card">
                    <div className="card-eyebrow-row"><span>Sezónní údržba</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#kdy">Kdy přezout</a></li>
                <li><a href="#zakon">Co říká zákon</a></li>
                <li><a href="#vyber">Jak vybrat</a></li>
                <li><a href="#celorocni">Zimní vs. celoroční</a></li>
                <li><a href="#skladovani">Uskladnění</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/sezonni-udrzba" className="sidebar-cat-link">🍂 Sezónní údržba<span>20 článků →</span></Link>
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
