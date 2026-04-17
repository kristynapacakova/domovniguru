import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak funguje chytrá domácnost – začínáme bez rekonstrukce 2025",
  description: "Chytré zásuvky, žárovky a reproduktory bez vrtání a elektrikáře. Jak začít s chytrou domácností za pár stovek.",
  alternates: { canonical: "https://domovniguru.cz/blog/chytra-domacnost-zaciname" },
  openGraph: { title: "Jak funguje chytrá domácnost – začínáme", description: "Chytré zásuvky a žárovky bez rekonstrukce.", url: "https://domovniguru.cz/blog/chytra-domacnost-zaciname", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2025-01-15T08:00:00Z", modifiedTime: "2025-03-01T08:00:00Z", authors: ["DomovniGuru"] },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://domovniguru.cz/blog/chytra-domacnost-zaciname#article", "headline": "Jak funguje chytrá domácnost – začínáme", "datePublished": "2025-01-15T08:00:00Z", "dateModified": "2025-03-01T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "inLanguage": "cs" }] };

const RELATED = [
  { title: "Jak vybrat správnou LED žárovku", href: "/blog/jak-vybrat-led-zarovku", read: "5 min" },
  { title: "LED vs. žárovky – co se skutečně vyplatí?", href: "/blog/led-vs-zarovky", read: "4 min" },
  { title: "Jak snížit účet za elektřinu doma", href: "/blog/snizit-ucet-za-elektrinu", read: "5 min" },
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
              <span>Chytrá domácnost</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">⚡ Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak funguje chytrá domácnost – začínáme</h1>
              <p className="article-lead">Chytrá domácnost neznamená rekonstrukci ani desítky tisíc za instalaci. Začít se dá za pár stovek s chytrou žárovkou nebo zásuvkou — bez vrtání a elektrikáře.</p>
              <div className="article-meta-row"><span>Aktualizováno: 1. března 2025</span><span>·</span><span>DomovniGuru</span></div>
            </header>

            {/* HERO ILLUSTRATION */}
            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="180" fill="#fdf8f2"/>

                {/* Telefon — hub */}
                <g transform="translate(320, 20)">
                  <rect x="0" y="0" width="80" height="140" rx="10" fill="#3a3a38" opacity="0.85"/>
                  <rect x="4" y="14" width="72" height="112" rx="4" fill="#1a3a5a" opacity="0.9"/>
                  {/* WiFi symbol na obrazovce */}
                  <path d="M40 85 Q40 65 40 65" stroke="#f4c842" strokeWidth="0" fill="none"/>
                  <path d="M28 78 Q40 62 52 78" stroke="#a0b8d0" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.8"/>
                  <path d="M22 70 Q40 48 58 70" stroke="#a0b8d0" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5"/>
                  <path d="M16 62 Q40 34 64 62" stroke="#a0b8d0" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.3"/>
                  <circle cx="40" cy="84" r="4" fill="#a0b8d0" opacity="0.9"/>
                  <text x="40" y="108" fontFamily="var(--font-sans,sans-serif)" fontSize="8" fill="#a0b8d0" textAnchor="middle" opacity="0.8">ovládání</text>
                </g>

                {/* Chytrá žárovka — vlevo */}
                <g transform="translate(80, 30)">
                  <ellipse cx="60" cy="55" rx="35" ry="38" fill="#f4c842" opacity="0.2"/>
                  <ellipse cx="60" cy="45" rx="22" ry="26" fill="none" stroke="#f4c842" strokeWidth="2" opacity="0.6"/>
                  <rect x="48" y="69" width="24" height="10" rx="2" fill="#c8a97a" opacity="0.6"/>
                  <rect x="50" y="77" width="20" height="16" rx="3" fill="#c8b89a" opacity="0.5"/>
                  <text x="60" y="108" fontFamily="var(--font-sans,sans-serif)" fontSize="8" fill="#9a8a7a" textAnchor="middle">chytrá žárovka</text>
                  {/* Spojovací čára k telefonu */}
                  <line x1="95" y1="50" x2="235" y2="72" stroke="#a0b8d0" strokeWidth="1" strokeDasharray="4 3" opacity="0.5"/>
                </g>

                {/* Chytrá zásuvka — vpravo */}
                <g transform="translate(540, 50)">
                  <rect x="0" y="0" width="70" height="70" rx="8" fill="#f0ece6" stroke="#c8b89a" strokeWidth="1.5"/>
                  <circle cx="35" cy="28" r="18" fill="none" stroke="#c8b89a" strokeWidth="1.5"/>
                  <circle cx="26" cy="24" r="4" fill="#9a8a7a" opacity="0.4"/>
                  <circle cx="44" cy="24" r="4" fill="#9a8a7a" opacity="0.4"/>
                  <rect x="28" y="32" width="14" height="10" rx="2" fill="#9a8a7a" opacity="0.3"/>
                  {/* WiFi ikonka */}
                  <path d="M28 56 Q35 50 42 56" stroke="#a0b8d0" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7"/>
                  <circle cx="35" cy="59" r="2" fill="#a0b8d0" opacity="0.7"/>
                  <text x="35" y="82" fontFamily="var(--font-sans,sans-serif)" fontSize="8" fill="#9a8a7a" textAnchor="middle">chytrá zásuvka</text>
                  {/* Spojovací čára k telefonu */}
                  <line x1="0" y1="35" x2="-133" y2="55" stroke="#a0b8d0" strokeWidth="1" strokeDasharray="4 3" opacity="0.5"/>
                </g>

                {/* Termostat — dole */}
                <g transform="translate(190, 105)">
                  <rect x="0" y="0" width="80" height="50" rx="8" fill="#f0ece6" stroke="#c8b89a" strokeWidth="1.5"/>
                  <text x="40" y="22" fontFamily="var(--font-sans,sans-serif)" fontSize="14" fill="#3a3a38" textAnchor="middle" fontWeight="300">21°</text>
                  <text x="40" y="38" fontFamily="var(--font-sans,sans-serif)" fontSize="7" fill="#9a8a7a" textAnchor="middle">termostat</text>
                  <line x1="80" y1="25" x2="127" y2="-20" stroke="#a0b8d0" strokeWidth="1" strokeDasharray="4 3" opacity="0.5"/>
                </g>

                {/* Reproduktor — dole vpravo */}
                <g transform="translate(490, 105)">
                  <rect x="0" y="0" width="80" height="50" rx="8" fill="#f0ece6" stroke="#c8b89a" strokeWidth="1.5"/>
                  <circle cx="40" cy="22" r="12" fill="none" stroke="#c8b89a" strokeWidth="1.5"/>
                  <circle cx="40" cy="22" r="6" fill="#c8b89a" opacity="0.3"/>
                  <text x="40" y="42" fontFamily="var(--font-sans,sans-serif)" fontSize="7" fill="#9a8a7a" textAnchor="middle">reproduktor</text>
                  <line x1="0" y1="25" x2="-83" y2="-18" stroke="#a0b8d0" strokeWidth="1" strokeDasharray="4 3" opacity="0.5"/>
                </g>
              </svg>
              <div style={{display:"flex",justifyContent:"center",padding:"8px 40px 12px",fontSize:"9px",letterSpacing:"0.1em",color:"#c8b89a",textTransform:"uppercase"}}>
                <span>Vše ovládáš z telefonu přes WiFi</span>
              </div>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#jak-funguje">Jak chytrá domácnost funguje</a></li>
                <li><a href="#kde-zacit">Kde začít – nejjednodušší kroky</a></li>
                <li><a href="#protokoly">Zigbee, Z-Wave nebo WiFi?</a></li>
                <li><a href="#hub">Potřebuji hub?</a></li>
                <li><a href="#tipy">Tipy pro začátečníky</a></li>
              </ol>
            </nav>

            <section id="jak-funguje">
              <h2>Jak chytrá domácnost funguje</h2>
              <p>Chytrá domácnost je systém zařízení která se připojují k domácí WiFi nebo jinému bezdrátovému protokolu a lze je ovládat přes telefon, hlasem nebo automatickými pravidly.</p>
              <p>Základní princip: <strong>chytré zařízení</strong> (žárovka, zásuvka, termostat) + <strong>aplikace v telefonu</strong> + <strong>WiFi nebo hub</strong>. To je vše co potřebuješ pro start.</p>
            </section>

            <section id="kde-zacit">
              <h2>Kde začít – nejjednodušší kroky</h2>
              <h3>1. Chytré žárovky (nejjednodušší start)</h3>
              <p>Vyšroubuj starou žárovku, zašroubuj chytrou LED — hotovo. Ovládáš jas, barvu světla a nastavíš časovače přes aplikaci. Cena od 200–500 Kč za žárovku.</p>
              <h3>2. Chytré zásuvky</h3>
              <p>Zasuň do normální zásuvky — získáš dálkové ovládání vypínání/zapínání a měření spotřeby. Ideální pro lampy, nabíječky nebo spotřebiče které chceš automaticky vypínat. Cena od 300–600 Kč.</p>
              <h3>3. Chytrý termostat</h3>
              <p>Výměna za stávající termostat — snížíš náklady na vytápění o 15–25 % díky přesnému plánování. Cena od 1500–4000 Kč.</p>
              <h3>4. Chytré bezpečnostní kamery</h3>
              <p>WiFi kamera nevyžaduje žádnou kabeláž — jen zásuvku. Záběr v reálném čase v telefonu odkudkoliv. Cena od 800–2000 Kč.</p>
            </section>

            <section id="protokoly">
              <h2>Zigbee, Z-Wave nebo WiFi?</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Protokol</th><th>Výhody</th><th>Nevýhody</th><th>Pro koho</th></tr></thead>
                  <tbody>
                    <tr><td>WiFi</td><td>Bez hubu, levnější zařízení</td><td>Zatěžuje WiFi síť, vyšší spotřeba</td><td>Začátečníci, malé byty</td></tr>
                    <tr><td>Zigbee</td><td>Nízká spotřeba, mesh síť</td><td>Potřebuje hub</td><td>Větší domácnosti, pokročilí</td></tr>
                    <tr><td>Z-Wave</td><td>Spolehlivý, mesh</td><td>Dražší zařízení, potřebuje hub</td><td>Náročnější uživatelé</td></tr>
                    <tr><td>Matter</td><td>Universální standard, kompatibilita</td><td>Nový standard, méně zařízení</td><td>Budoucnost smart home</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Doporučení pro začátečníky:</strong> Začni s WiFi zařízeními — fungují bez hubu a nastavení je nejjednodušší. Tuya / Smart Life ekosystém nabízí stovky kompatibilních zařízení za rozumné ceny.</div>
            </section>

            <section id="hub">
              <h2>Potřebuji hub?</h2>
              <p>Pro začátek ne. WiFi zařízení fungují přímo přes tvoji domácí síť. Hub (centrální řídící jednotka) oceníš až když:</p>
              <ul>
                <li>Máš více než 20–30 chytrých zařízení</li>
                <li>Chceš Zigbee nebo Z-Wave zařízení</li>
                <li>Potřebuješ fungovat i bez internetu (lokální řízení)</li>
                <li>Chceš složitější automatizace mezi různými ekosystémy</li>
              </ul>
              <p>Populární huby: <strong>Philips Hue Bridge</strong> (osvětlení), <strong>Home Assistant</strong> (open-source, vše), <strong>Amazon Echo / Google Home</strong> (hlasové ovládání).</p>
            </section>

            <section id="tipy">
              <h2>Tipy pro začátečníky</h2>
              <ul>
                <li><strong>Začni malé</strong> — jedna chytrá žárovka nebo zásuvka. Vyzkoušej, jestli tě to baví, pak rozšiřuj.</li>
                <li><strong>Drž se jednoho ekosystému</strong> — směs Philips Hue + IKEA + Xiaomi může komplikovat integraci. Začni s jedním výrobcem.</li>
                <li><strong>Nákup na AliExpress vs. lokální obchod</strong> — levnější, ale delší dodání a horší podpora. Pro začátek doporučujeme lokální e-shopy.</li>
                <li><strong>Silná WiFi je základ</strong> — chytrá zařízení potřebují stabilní WiFi v celém bytě. Pokud máš mrtvé zóny, začni s WiFi mesh systémem.</li>
                <li><strong>Bezpečnost</strong> — změň výchozí hesla zařízení, aktualizuj firmware, oddělená IoT síť (guest network) je dobrou praxí.</li>
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
                <li><a href="#jak-funguje">Jak to funguje</a></li>
                <li><a href="#kde-zacit">Kde začít</a></li>
                <li><a href="#protokoly">Zigbee, Z-Wave, WiFi</a></li>
                <li><a href="#hub">Potřebuji hub?</a></li>
                <li><a href="#tipy">Tipy pro začátečníky</a></li>
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
