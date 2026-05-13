import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak namalovat celý byt za víkend – plán a postup 2026",
  description: "Realistický plán jak vymalovat celý byt za dva dny. Pořadí místností, příprava, správné nářadí a jak nepracovat přesčas. Fungující strategie krok za krokem.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/malovat-cely-byt-za-vikend" },
  openGraph: { title: "Jak namalovat celý byt za víkend 2026", description: "Realistický plán – pořadí místností, příprava a správné nářadí pro vymalování bytu za 2 dny.", url: "https://www.domovniguru.cz/blog/malovat-cely-byt-za-vikend", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-22T08:00:00Z", modifiedTime: "2026-04-22T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak namalovat celý byt za víkend 2026", description: "Realistický plán – pořadí místností a strategie pro vymalování bytu za 2 dny." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/malovat-cely-byt-za-vikend#article",
    "headline": "Jak namalovat celý byt za víkend – plán a postup 2026",
    "datePublished": "2026-04-22T08:00:00Z",
    "dateModified": "2026-04-22T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["malovat celý byt za víkend", "jak vymalovat byt rychle", "plán malování bytu", "pořadí místností malování", "vymalovat byt sám"]
  }]
};

const RELATED = [
  { title: "Jak malovat zeď – kompletní průvodce", href: "/blog/jak-malovat-zed", read: "5 min" },
  { title: "Jak malovat jen štětcem – rohy a detaily", href: "/blog/malovat-jen-stetcem", read: "5 min" },
  { title: "Jak malovat rohy a lišty bez přetahování", href: "/blog/jak-malovat-rohy-a-listy", read: "5 min" },
  { title: "Jak opravit škrábance a díry ve zdi", href: "/blog/opravit-skrabance-diry-ve-zdi", read: "5 min" },
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
              <span>Celý byt za víkend</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování & barvy</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak namalovat celý byt za víkend – plán a postup</h1>
              <p className="article-lead">Vymalovat celý byt za víkend je reálné — ale vyžaduje plán, správné pořadí místností a disciplínu. Bez plánu skončíš v neděli večer s rozemalovanou ložnicí a mokrým obývákem.</p>
              <div className="article-meta-row"><span>Aktualizováno: 22. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/malovat-cely-byt-za-vikend" title="Jak namalovat celý byt za víkend – plán a postup 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 175" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="175" fill="#fdf8f4"/>
                <text x="380" y="22" textAnchor="middle" fontSize="10" fill="#6a6050" fontWeight="700" letterSpacing="0.04em">PLÁN MALOVÁNÍ CELÉHO BYTU ZA VÍKEND</text>

                {/* Sobota */}
                <rect x="20" y="32" width="350" height="128" rx="8" fill="#fff" stroke="#4a90d9" strokeWidth="1.2"/>
                <rect x="20" y="32" width="350" height="30" rx="8" fill="#4a90d9" opacity="0.15"/>
                <text x="195" y="52" textAnchor="middle" fontSize="11" fill="#4a90d9" fontWeight="700">📅 SOBOTA</text>
                {[
                  "7:00 – Příprava nářadí a materiálu",
                  "8:00 – Oprava děr, příprava povrchu",
                  "10:00 – Penetrace (všechny místnosti)",
                  "12:00 – Oběd + schnutí penetrace",
                  "13:00 – 1. vrstva: chodba + koupelna",
                  "15:00 – 1. vrstva: ložnice",
                  "17:00 – 1. vrstva: dětský pokoj",
                  "19:00 – Konec, úklid nářadí",
                ].map((text, i) => (
                  <text key={i} x="32" y={72+i*11} fontSize="8.5" fill="#2a2a28">{text}</text>
                ))}

                {/* Neděle */}
                <rect x="390" y="32" width="350" height="128" rx="8" fill="#fff" stroke="#5a9e6f" strokeWidth="1.2"/>
                <rect x="390" y="32" width="350" height="30" rx="8" fill="#5a9e6f" opacity="0.15"/>
                <text x="565" y="52" textAnchor="middle" fontSize="11" fill="#5a9e6f" fontWeight="700">📅 NEDĚLE</text>
                {[
                  "7:00 – 2. vrstva: chodba + koupelna",
                  "9:00 – 2. vrstva: ložnice",
                  "11:00 – 2. vrstva: dětský pokoj",
                  "13:00 – Oběd + schnutí",
                  "14:00 – Obývák + kuchyň (1. vrstva)",
                  "16:00 – Obývák + kuchyň (2. vrstva)",
                  "18:00 – Sundání malířské pásky, úklid",
                  "19:00 – Hotovo! 🎉",
                ].map((text, i) => (
                  <text key={i} x="402" y={72+i*11} fontSize="8.5" fill="#2a2a28">{text}</text>
                ))}

                <rect y="158" width="760" height="17" fill="#f0ece8" opacity="0.5"/>
                <text x="380" y="170" textAnchor="middle" fontSize="8" fill="#8a7050" fontWeight="600" letterSpacing="0.06em">🎨 KLÍČ K ÚSPĚCHU: PŘÍPRAVA PÁTEK VEČER · ZAČNI V 7:00 · OBÝVÁK A KUCHYŇ AŽ NAKONEC</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#realnost">Je to reálné?</a></li>
                <li><a href="#priprapa">Příprava v pátek večer</a></li>
                <li><a href="#poradi">Pořadí místností</a></li>
                <li><a href="#tipy">Tipy jak to zvládnout rychle</a></li>
                <li><a href="#chyby">Chyby které tě zpomalí</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="realnost">
              <h2>Je to reálné?</h2>
              <p>Ano — ale záleží na velikosti bytu a zkušenostech. Orientační časy pro jednoho člověka:</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Místnost</th><th>Příprava</th><th>Malování (2 vrstvy)</th><th>Celkem</th></tr></thead>
                  <tbody>
                    <tr><td>Chodba (10 m²)</td><td>30 min</td><td>1,5 hod</td><td>2 hod</td></tr>
                    <tr><td>Koupelna (6 m²)</td><td>20 min</td><td>1 hod</td><td>1,5 hod</td></tr>
                    <tr><td>Ložnice (15 m²)</td><td>30 min</td><td>2 hod</td><td>2,5 hod</td></tr>
                    <tr><td>Dětský pokoj (12 m²)</td><td>25 min</td><td>1,5 hod</td><td>2 hod</td></tr>
                    <tr><td>Obývák (25 m²)</td><td>45 min</td><td>3 hod</td><td>3,5–4 hod</td></tr>
                    <tr><td>Kuchyň (12 m²)</td><td>30 min</td><td>1,5 hod</td><td>2 hod</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Celkem pro byt 3+1 (~80 m² plochy zdí): <strong>13–14 hodin čistého malování</strong> + přestávky + schnutí. Za víkend zvládnutelné pokud začneš brzy a máš připravenou přidat druhou ruku.</p>
            </section>

            <section id="priprapa">
              <h2>Příprava v pátek večer</h2>
              <p>Příprava v pátek je klíč. Ztracená hodina ráno hledáním malířské pásky nebo nářadí zruinuje harmonogram.</p>
              <ul>
                <li><strong>Nakoupit v předstihu:</strong> Barva, penetrace, malířská páska, válečky, štětce, folie na zakrytí nábytku. Nedej si zásoby na víkend.</li>
                <li><strong>Přesunout nábytek:</strong> Odsuň vše od zdí, těžký nábytek přesuň do středu místnosti a zakryj fólií.</li>
                <li><strong>Opravit díry:</strong> Tmelem vyplň díry po hmoždinkách — musí zaschnout přes noc.</li>
                <li><strong>Zakrýt podlahy:</strong> Fólie nebo noviny na podlahu — v sobotu ráno jen rozroluj a maluj.</li>
              </ul>
            </section>

            <section id="poradi">
              <h2>Pořadí místností – proč záleží</h2>
              <ul>
                <li><strong>Začni menšími místnostmi:</strong> Chodba, koupelna, dětský pokoj — rychlé výsledky dávají motivaci a nacvičíš techniku.</li>
                <li><strong>Ložnici doprostřed:</strong> Musíš v ní spát — nechej ji zaschnout přes noc v sobotu.</li>
                <li><strong>Obývák a kuchyň na konec:</strong> Největší místnosti kde tráviš čas. Nechej je na neděli — v sobotu večer ještě nemůžeš normálně žít.</li>
                <li><strong>Nikdy nestřídej místnosti:</strong> Domaluj jednu místnost do konce (včetně 2. vrstvy) a teprve přejdi do druhé. Přeskakování způsobí že zapomeneš kde jsi byl a uděláš chybu.</li>
              </ul>
            </section>

            <section id="tipy">
              <h2>Tipy jak to zvládnout rychle</h2>
              <ul>
                <li><strong>Začni v 7:00:</strong> Každá hodina ráno je zlatá — máš energii a barva schne rychleji v denním teple.</li>
                <li><strong>2 osoby = 2× rychleji:</strong> Jedna maluje štětcem rohy, druhá válečkem velkou plochu. Nejefektivnější kombinace.</li>
                <li><strong>Nesušit nářadí mezi vrstvami:</strong> Váleček a štětec nechej zabalené v plastovém sáčku během přestávky — barva nevyschne a nemusíš umývat.</li>
                <li><strong>Prodlužovací tyč na váleček:</strong> Maluj strop a horní části zdí bez žebříku — ušetříš čas a záda.</li>
                <li><strong>Jedna barva na vše:</strong> Pokud je to možné, jedna barva na celý byt = jedno míchání, žádné přepínání, méně odpadu.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Kup o 10–15 % více barvy než kolik potřebuješ. Doobjednávat během víkendu zdržuje. Zbytek vrátíš nebo uschovej pro opravy.</div>
            </section>

            <section id="chyby">
              <h2>Chyby které tě zpomalí</h2>
              <ul>
                <li><strong>Přeskočení penetrace:</strong> Bez penetrace barva hůře kryje a potřebuješ 3 vrstvy místo 2. Ztratíš více času než penetrace zabere.</li>
                <li><strong>Malování příliš silné vrstvy:</strong> Silná vrstva schne pomaleji a může stékat. 2 tenké vrstvy jsou vždy lepší než 1 silná.</li>
                <li><strong>Malování bez plánu:</strong> Bez harmonogramu skončíš bez přehledu kde jsi — zdvojuješ práci nebo naopak vynecháváš části.</li>
                <li><strong>Pozdní start:</strong> Začít malovat v 10:00 místo 7:00 znamená o 3 hodiny méně — to je celá místnost.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Kolik barvy potřebuji na celý byt 3+1?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Pro byt 3+1 (~80 m² podlahové plochy) počítej přibližně 80–100 m² plochy zdí (zdi jsou vyšší než podlaha a je jich víc). Spotřeba barvy: 8–12 litrů pro 2 vrstvy (závisí na savosti povrchu a barvě). Strop: dalších 20–30 m² = 3–4 litry. Celkem: 11–16 litrů. Kup raději o 2 litry více.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Lze malovat stejný den penetraci i barvu?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Závisí na penetraci. Rychleschnoucí penetrace schne 2–4 hodiny — pak lze malovat. Standardní penetrace vyžaduje 4–8 hodin. Pokud penetruješ v sobotu ráno, první vrstvu barvy dáš odpoledne. Přes noc schne a v neděli dáš druhou vrstvu. Nikdy nemaluj na mokrou penetraci — barva nepřilne.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Co s nábytkem během malování?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Těžký nábytek přesuň do středu místnosti a zakryj fólií nebo starými prostěradly. Lehký nábytek přesuň do jiné místnosti. Nemaž za nábytkem přisunutým ke zdi — tuto práci udělej teprve po přesunutí. Po malování nechej barvu zaschnout min. 24–48 hodin před vrácením nábytku ke zdi.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/malovat-cely-byt-za-vikend" title="Jak namalovat celý byt za víkend – plán a postup 2026" />

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
                <li><a href="#realnost">Je to reálné?</a></li>
                <li><a href="#priprapa">Příprava v pátek</a></li>
                <li><a href="#poradi">Pořadí místností</a></li>
                <li><a href="#tipy">Tipy jak být rychlý</a></li>
                <li><a href="#chyby">Chyby které zpomalí</a></li>
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
