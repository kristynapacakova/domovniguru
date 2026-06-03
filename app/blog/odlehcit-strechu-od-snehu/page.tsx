import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak bezpečně odlehčit střechu od sněhu",
  description: "Kdy je sníh na střeše nebezpečný a jak ho bezpečně odstranit. Kolik sněhu střecha unese, jak rozpoznat přetížení a správný postup shrnutí sněhu.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/odlehcit-strechu-od-snehu" },
  openGraph: { title: "Jak odlehčit střechu od sněhu 2026", description: "Kdy je sníh na střeše nebezpečný a jak ho bezpečně odstranit.", url: "https://www.domovniguru.cz/blog/odlehcit-strechu-od-snehu", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-05-01T08:00:00Z", modifiedTime: "2026-05-01T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20bezpe%C4%8Dn%C4%9B%20odleh%C4%8Dit%20st%C5%99echu%20od%20sn%C4%9Bhu&cat=blog", width: 1200, height: 630, alt: "Jak bezpečně odlehčit střechu od sněhu" }] },
  twitter: { card: "summary_large_image", title: "Jak odlehčit střechu od sněhu 2026", description: "Kolik sněhu střecha unese a jak ho bezpečně odstranit." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/odlehcit-strechu-od-snehu#article",
    "headline": "Jak bezpečně odlehčit střechu od sněhu",
    "datePublished": "2026-05-01T08:00:00Z",
    "dateModified": "2026-05-01T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["odlehčit střechu od sněhu", "sníh na střeše nebezpečný", "jak odstranit sníh ze střechy", "shrnutí sněhu střecha", "zatížení střechy sněhem"]
  }]
};

const RELATED = [
  { title: "Příprava domu na zimu", href: "/blog/priprava-domu-na-zimu", read: "10 min" },
  { title: "Jak vyčistit okapy", href: "/blog/jak-vycistit-okapy", read: "5 min" },
  { title: "Jak správně topit", href: "/blog/jak-spravne-topit", read: "5 min" },
  { title: "Jak zkontrolovat kotel před zimou", href: "/blog/zkontrolovat-kotel-pred-zimou", read: "6 min" },
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
              <span>Odlehčení střechy od sněhu</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">🍂 Sezónní údržba</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak odlehčit střechu od sněhu – kdy je nebezpečný a jak ho odstranit</h1>
              <p className="article-lead">Jeden metr mokrého sněhu váží 150–300 kg. Na běžném rodinném domě může sníh přidat desítky tun zatížení. Kdy je to nebezpečné a jak bezpečně zasáhnout?</p>
              <div className="article-meta-row"><span>Aktualizováno: 1. května 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/odlehcit-strechu-od-snehu" title="Jak bezpečně odlehčit střechu od sněhu" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 165" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="165" fill="#f0f4f8"/>
                <text x="380" y="22" textAnchor="middle" fontSize="10" fill="#4a6080" fontWeight="700" letterSpacing="0.04em">HMOTNOST SNĚHU DLE DRUHU – PŘEHLED</text>
                {[
                  { x:20, type:"Čerstvý\nsuchý sníh", weight:"50–100 kg/m³", depth:"30 cm = 15–30 kg/m²", risk:"Nízké", color:"#4a90d9" },
                  { x:200, type:"Starý\nusazený sníh", weight:"200–350 kg/m³", depth:"30 cm = 60–105 kg/m²", risk:"Střední", color:"#9b6fd4" },
                  { x:380, type:"Mokrý\nsníh (obleva)", weight:"300–500 kg/m³", depth:"30 cm = 90–150 kg/m²", risk:"Vysoké ⚠️", color:"#f59e0b" },
                  { x:560, type:"Firn (led\na sníh)", weight:"500–700 kg/m³", depth:"30 cm = 150–210 kg/m²", risk:"Velmi vysoké 🚨", color:"#e07040" },
                ].map(({x, type, weight, depth, risk, color}) => (
                  <g key={x} transform={`translate(${x}, 28)`}>
                    <rect x="0" y="0" width="170" height="128" rx="8" fill="#fff" stroke={color} strokeWidth="1.5"/>
                    {type.split('\n').map((t,i) => <text key={i} x="85" y={20+i*14} textAnchor="middle" fontSize="10" fill={color} fontWeight="700">{t}</text>)}
                    <line x1="10" y1="48" x2="160" y2="48" stroke={color} strokeWidth="0.5" opacity="0.4"/>
                    <text x="85" y="64" textAnchor="middle" fontSize="9" fill="#4a4a40" fontWeight="600">{weight}</text>
                    <text x="85" y="80" textAnchor="middle" fontSize="8" fill="#4a4a40">{depth}</text>
                    <rect x="8" y="95" width="154" height="26" rx="5" fill={color} opacity="0.1"/>
                    <text x="85" y="107" textAnchor="middle" fontSize="8" fill={color} fontWeight="600">Riziko pro střechu:</text>
                    <text x="85" y="118" textAnchor="middle" fontSize="9" fill={color} fontWeight="700">{risk}</text>
                  </g>
                ))}
                <rect y="148" width="760" height="17" fill="#e0eaf4" opacity="0.5"/>
                <text x="380" y="160" textAnchor="middle" fontSize="8" fill="#3a6a8a" fontWeight="600" letterSpacing="0.06em">❄️ MOKRÝ SNÍH PŘI OBLÉVĚ = NEJVĚTŠÍ RIZIKO · PLOCHÉ STŘECHY = NUTNÉ SLEDOVAT · NIKDY SÁM NA STŘEŠE</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#kdy">Kdy je sníh na střeše nebezpečný</a></li>
                <li><a href="#signaly">Varovné signály přetížení</a></li>
                <li><a href="#postup">Jak bezpečně odlehčit střechu</a></li>
                <li><a href="#prevence">Prevence – co pomáhá</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="kdy">
              <h2>Kdy je sníh na střeše nebezpečný</h2>
              <p>Každá střecha má svou nosnou kapacitu. Standardní česká norma (ČSN EN 1991-1-3) počítá s zatížením sněhem 100–200 kg/m² dle oblasti. Problém nastává při překročení tohoto limitu.</p>
              <ul>
                <li><strong>Nejrizikovější situace:</strong> Obleva po delším mrazivém období — sníh absorbuje vodu a jeho hmotnost se může 3–5× zvýšit. Právě tato situace způsobuje nejvíce střešních havárií.</li>
                <li><strong>Ploché střechy:</strong> Plochá nebo mírně skloněná střecha (do 15°) sníh neodklouzne — hromadí se. U šikmých střech (nad 30°) sníh obvykle sám sklouzne.</li>
                <li><strong>Rizikové konstrukční typy:</strong> Průmyslové haly, starší zemědělské budovy, sklady a garáže s plochou střechou a slabší konstrukcí jsou nejrizikovější.</li>
                <li><strong>Výška sněhu:</strong> Orientační pravidlo — při výšce mokrého sněhu nad 30 cm na ploché střeše je vhodné zvážit odlehčení.</li>
              </ul>
              <div className="article-tip"><strong>⚠️ Varování:</strong> Nikdy nevstupuj na zasněženou střechu sám a bez pojištění. Pád ze střechy je smrtelně nebezpečný. Používej hrábě s dlouhou teleskopickou tyčí ze země.</div>
            </section>

            <section id="signaly">
              <h2>Varovné signály přetížení střechy</h2>
              <ul>
                <li><strong>Praskání nebo lámání zvuků ze stropu nebo střechy</strong> — okamžitě opusť budovu a zavolej hasiče nebo statika.</li>
                <li><strong>Viditelné průhyby nebo deformace střešní konstrukce</strong> — trámy, vazníky nebo plechy se prohýbají.</li>
                <li><strong>Trhliny v omítce nebo zdech v horní části budovy</strong> — svislé nebo šikmé trhliny signalizují pohyb konstrukce.</li>
                <li><strong>Dveře nebo okna jdou obtížně otevřít nebo zavřít</strong> — rámy se deformují vlivem sedání nebo pohybu konstrukce.</li>
              </ul>
            </section>

            <section id="postup">
              <h2>Jak bezpečně odlehčit střechu</h2>
              <ul>
                <li><strong>Teleskopické sněhové hrábě:</strong> Nejbezpečnější metoda — hrábě s teleskopickou tyčí (3–6 m) umožňují shrnutí sněhu ze země bez nutnosti vylézt na střechu. Cena 500–1 500 Kč.</li>
                <li><strong>Postup shrnování:</strong> Začni od okraje střechy a postupuj ke středu. Neshrni sníh najednou — velká masa padajícího sněhu je nebezpečná pro kolemjdoucí a může poškodit okapy.</li>
                <li><strong>Bezpečnostní zóna:</strong> Před zahájením práce označ zónu pod střechou (páska nebo kužele) — sníh padá v nepředvídatelných množstvích.</li>
                <li><strong>Profesionální firma:</strong> Pro šikmé nebo vysoké střechy vždy zavolej firmu s pojištěním a vybavením pro práce ve výšce. Nevstupuj sám na střechu v zimě.</li>
                <li><strong>Nenechat holý led:</strong> Neodstraňuj veškerý sníh na ledu — vrstva sněhu chrání střešní krytinu. Nechej 2–3 cm sněhu a neodsekávej led násilím — poškodíš krytinu nebo hydroizolaci.</li>
              </ul>
            </section>

            <section id="prevence">
              <h2>Prevence – co pomáhá</h2>
              <ul>
                <li><strong>Sněžné zábrany:</strong> Kovové zábrany na střeše zabraňují nekontrolovanému pádu sněhových mas. Chrání kolemjdoucí a okapy. Montáž před zimní sezónou.</li>
                <li><strong>Topný kabel na okraje střechy:</strong> Elektrický topný kabel podél okapů a v okapovém žlabu zabraňuje tvorbě ledových ker a rampouchů. Spotřeba: 20–30 W/m, provoz jen při mrazivém počasí.</li>
                <li><strong>Pravidelná revize střechy:</strong> Zkontroluj stav střechy na jaře po zimě — zimní zatížení může odhalit slabá místa. Zlomené nebo posunuté tašky opravit před příští zimou.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Kolik sněhu unese standardní střecha rodinného domu?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Standardní šikmá střecha rodinného domu je dimenzována na 100–200 kg/m² dle sněhové zóny (závisí na nadmořské výšce a poloze). Moderní střechy s dřevěnými vazníky mají obvykle rezervu 2–3× nad normou. Problém nastává u starších a oslabených konstrukcí nebo při extrémním sněžení. Při pochybnostech zavolej statika.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jsou rampochy na střeše nebezpečné?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Rampochy samy o sobě střechu nezatěžují výrazně, ale signalizují tepelné mosty (teplo uniká střechou a taje sníh). Padající rampouchy jsou nebezpečné pro kolemjdoucí. Odstraňuj je tyčí ze země — nikdy nestoupej pod visící rampouchy. Opakované rampochy řeš zateplením podkroví nebo topným kabelem na okraj střechy.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Pojišťovna proplácí škody způsobené sněhem?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Záleží na pojistné smlouvě. Škody způsobené tíhou sněhu nebo pádem sněhových mas jsou obvykle kryty v rámci pojištění budovy pro "živelní události" nebo "tíhu sněhu". Přečti pojistnou smlouvu a při havárii okamžitě kontaktuj pojišťovnu a zdokumentuj škodu fotografiemi před odklízením.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/odlehcit-strechu-od-snehu" title="Jak bezpečně odlehčit střechu od sněhu" />

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
                <li><a href="#kdy">Kdy je sníh nebezpečný</a></li>
                <li><a href="#signaly">Varovné signály</a></li>
                <li><a href="#postup">Jak odlehčit</a></li>
                <li><a href="#prevence">Prevence</a></li>
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
