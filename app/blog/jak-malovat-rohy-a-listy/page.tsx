import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak malovat rohy a lišty bez přetahování – technika štětcem 2026",
  description: "Čistá linka u lišt, rohů a stropu bez malířské pásky? Jde to. Technika odřezávání štětcem krok za krokem – jak malovat rohy a lišty jako profesionál.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-malovat-rohy-a-listy" },
  openGraph: { title: "Jak malovat rohy a lišty bez přetahování 2026", description: "Technika odřezávání štětcem – čisté linie u lišt a rohů bez pásky.", url: "https://www.domovniguru.cz/blog/jak-malovat-rohy-a-listy", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-13T08:00:00Z", modifiedTime: "2026-04-13T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak malovat rohy a lišty bez přetahování 2026", description: "Technika odřezávání štětcem – čisté linie u lišt a rohů." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/jak-malovat-rohy-a-listy#article",
    "headline": "Jak malovat rohy a lišty bez přetahování – technika štětcem 2026",
    "datePublished": "2026-04-13T08:00:00Z",
    "dateModified": "2026-04-13T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak malovat rohy", "malování lišt", "technika odřezávání", "jak malovat bez přetahování", "malování u stropu", "malířská páska alternativa"]
  }]
};

const RELATED = [
  { title: "Jak malovat zeď – kompletní průvodce pro začátečníky", href: "/blog/jak-malovat-zed", read: "5 min" },
  { title: "Jak vybrat barvu na zeď", href: "/blog/jak-vybrat-barvu-na-zed", read: "9 min" },
  { title: "Jak malovat radiátor", href: "/blog/jak-malovat-radiator", read: "5 min" },
  { title: "Jak se zbavit plísně na zdi natrvalo", href: "/blog/jak-odstranit-plisen-na-zdi", read: "10 min" },
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
              <span>Malování rohů a lišt</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování & barvy</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak malovat rohy a lišty bez přetahování</h1>
              <p className="article-lead">Čistá linie u stropu, lišt a rohů je to co odlišuje profesionální výsledek od amatérského. Technika odřezávání štětcem se naučíš za jedno odpoledne — a ušetříš hodiny lepení pásky.</p>
              <div className="article-meta-row"><span>Aktualizováno: 13. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/jak-malovat-rohy-a-listy" title="Jak malovat rohy a lišty bez přetahování – technika štětcem 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="200" fill="#fdf8f4"/>

                {/* ── ŠPATNĚ (vlevo) ── */}
                <g transform="translate(20,20)">
                  <rect x="0" y="0" width="200" height="155" rx="6" fill="#f5f0ea" stroke="#e0d8d0" strokeWidth="1"/>
                  <rect x="20" y="8" width="110" height="16" rx="3" fill="#e07a5f" opacity="0.15"/>
                  <text x="75" y="20" textAnchor="middle" fontSize="8.5" fill="#c05030" fontWeight="700">❌ ŠPATNÁ TECHNIKA</text>
                  {/* Strop */}
                  <rect x="0" y="30" width="200" height="12" rx="0" fill="#e8e0d8"/>
                  {/* Stěna */}
                  <rect x="0" y="42" width="200" height="113" fill="#c8e0f0" opacity="0.5"/>
                  {/* Lišta */}
                  <rect x="0" y="137" width="200" height="8" rx="0" fill="#d8c8a8"/>
                  {/* Barva přetažená na strop */}
                  <path d="M30 42 Q45 35 60 42 Q80 36 100 42 Q120 38 140 42" stroke="#4a90d9" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.6"/>
                  <path d="M50 42 L55 32 M90 42 L88 34 M130 42 L135 36" stroke="#4a90d9" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
                  {/* Barva přetažená na lištu */}
                  <path d="M20 137 Q50 133 80 137 Q110 133 140 137" stroke="#4a90d9" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.5"/>
                  <text x="100" y="90" textAnchor="middle" fontSize="8" fill="#3a6a9a">barva přetažená</text>
                  <text x="100" y="102" textAnchor="middle" fontSize="8" fill="#3a6a9a">na strop i lištu</text>
                </g>

                {/* šipka */}
                <g transform="translate(232,90)">
                  <path d="M0 10 L40 10" stroke="#c8b89a" strokeWidth="1.8" strokeLinecap="round"/>
                  <path d="M34 5 L42 10 L34 15" stroke="#c8b89a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </g>

                {/* ── TECHNIKA (střed) ── */}
                <g transform="translate(282,20)">
                  <rect x="0" y="0" width="200" height="155" rx="6" fill="#f5f8f5" stroke="#c8d8c8" strokeWidth="1"/>
                  <rect x="20" y="8" width="110" height="16" rx="3" fill="#5a9e6f" opacity="0.12"/>
                  <text x="75" y="20" textAnchor="middle" fontSize="8.5" fill="#3a7e4f" fontWeight="700">✅ ODŘEZÁVÁNÍ</text>
                  {/* Strop */}
                  <rect x="0" y="30" width="200" height="12" rx="0" fill="#e8e0d8"/>
                  {/* Stěna */}
                  <rect x="0" y="42" width="200" height="95" fill="#c8e0f0" opacity="0.5"/>
                  {/* Lišta */}
                  <rect x="0" y="137" width="200" height="8" rx="0" fill="#d8c8a8"/>
                  {/* Čistá linie u stropu */}
                  <line x1="0" y1="42" x2="200" y2="42" stroke="#4a90d9" strokeWidth="2.5" opacity="0.8"/>
                  {/* Čistá linie u lišty */}
                  <line x1="0" y1="137" x2="200" y2="137" stroke="#4a90d9" strokeWidth="2" opacity="0.7"/>
                  {/* Štětec */}
                  <g transform="translate(80, 55) rotate(15)">
                    <rect x="0" y="0" width="8" height="50" rx="3" fill="#8B6340"/>
                    <rect x="-1" y="47" width="10" height="7" rx="1" fill="#909090"/>
                    <path d="M1 54 Q4 65 3 72 Q4 75 5 72 Q4 65 7 54 Z" fill="#e8d8a0"/>
                    <ellipse cx="4" cy="71" rx="4" ry="2.5" fill="#4a90d9" opacity="0.8"/>
                  </g>
                  <text x="100" y="115" textAnchor="middle" fontSize="8" fill="#3a7e4f">čistá linie</text>
                  <text x="100" y="126" textAnchor="middle" fontSize="8" fill="#3a7e4f">bez přetažení ✓</text>
                </g>

                {/* šipka 2 */}
                <g transform="translate(494,90)">
                  <path d="M0 10 L40 10" stroke="#c8b89a" strokeWidth="1.8" strokeLinecap="round"/>
                  <path d="M34 5 L42 10 L34 15" stroke="#c8b89a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </g>

                {/* ── VÝSLEDEK (vpravo) ── */}
                <g transform="translate(544,20)">
                  <rect x="0" y="0" width="195" height="155" rx="6" fill="#f5f8f5" stroke="#c8ddc8" strokeWidth="1"/>
                  <rect x="20" y="8" width="110" height="16" rx="3" fill="#5a9e6f" opacity="0.12"/>
                  <text x="72" y="20" textAnchor="middle" fontSize="8.5" fill="#3a7e4f" fontWeight="700">VÝSLEDEK</text>
                  {/* Místnost */}
                  <rect x="10" y="30" width="175" height="115" rx="4" fill="#f0ede8"/>
                  <rect x="10" y="30" width="175" height="10" fill="#e8e0d8"/>
                  <rect x="10" y="135" width="175" height="10" fill="#d8c8a8"/>
                  <rect x="10" y="40" width="175" height="95" fill="#c8e0f0" opacity="0.4"/>
                  <line x1="10" y1="40" x2="185" y2="40" stroke="#4a90d9" strokeWidth="2" opacity="0.9"/>
                  <line x1="10" y1="135" x2="185" y2="135" stroke="#4a90d9" strokeWidth="1.8" opacity="0.8"/>
                  {[
                    { y: 60, text: "✓ Přesná linie u stropu" },
                    { y: 78, text: "✓ Čistá lišta" },
                    { y: 96, text: "✓ Rovný roh" },
                    { y: 114, text: "✓ Bez pásky" },
                  ].map(({y, text}) => (
                    <text key={y} x="97" y={y} textAnchor="middle" fontSize="8" fill="#3a7e4f" fontWeight="500">{text}</text>
                  ))}
                </g>

                <div style={{display:"flex",justifyContent:"space-around",padding:"8px 30px 12px",fontSize:"9px"}}/>
              </svg>
              <div style={{display:"flex",justifyContent:"space-around",padding:"8px 30px 12px",fontSize:"9px",letterSpacing:"0.1em",color:"#a09080",textTransform:"uppercase",background:"#fdf8f4"}}>
                <span>❌ Přetažení = amatérský výsledek</span>
                <span>🖌️ Technika odřezávání štětcem</span>
                <span>✅ Čistá linie jako od profesionála</span>
              </div>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#nastroje">Správný štětec pro odřezávání</a></li>
                <li><a href="#technika">Technika odřezávání krok za krokem</a></li>
                <li><a href="#rohy">Vnitřní a vnější rohy</a></li>
                <li><a href="#listy">Malování u lišt a zárubní</a></li>
                <li><a href="#paska">Kdy použít malířskou pásku</a></li>
                <li><a href="#chyby">Nejčastější chyby</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="nastroje">
              <h2>Správný štětec pro odřezávání</h2>
              <p>Technika odřezávání stojí a padá se správným štětcem. Levný štětec s nekvalitními štětinami ti čistou linii neumožní — štětiny se roztřepí a barva bude kapat.</p>
              <ul>
                <li><strong>Šikmý štětec (angled brush) 5–7 cm:</strong> Nejlepší volba pro odřezávání. Šikmý řez štětin umožňuje přesné vedení linie. Hledej štětec s označením „cutting in" nebo „angled".</li>
                <li><strong>Kvalita štětin:</strong> Syntetické štětiny (polyester nebo nylon) jsou vhodné pro vodou ředitelné barvy. Přírodní štětiny nejsou vhodné — nasávají vodu a ztrácí tvar.</li>
                <li><strong>Cena:</strong> Na odřezávací štětec nešetři. Dobrý štětec stojí 150–400 Kč a vydrží roky — levný za 30 Kč znehodnotí výsledek celé práce.</li>
                <li><strong>Péče o štětec:</strong> Po každém použití důkladně vymyj vodou, vytvaruj štětiny do špičky a nechej schnout horizontálně. Nikdy nesušit špičkou dolů — barva steče do objímky a štětec zničí.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Před začátkem práce namočí nový štětec do vody a důkladně vysuš. Aktivuje syntetické štětiny a zlepší jejich pružnost. První použití suchého štětce bývá horší.</div>
            </section>

            <section id="technika">
              <h2>Technika odřezávání krok za krokem</h2>
              <p>Odřezávání (cutting in) je technika malování přesné linie u okraje — bez pásky, bez šablon. Vyžaduje trochu praxe, ale výsledek je čistší než s páskou pokud ji zvládneš.</p>
              <ul>
                <li><strong>Krok 1 — Načítání štětce:</strong> Ponoř špičku štětce do barvy přibližně do třetiny délky štětin. Odstraň přebytečnou barvu otřením o okraj nádoby — ne o kraj. Štětec nesmí kapat.</li>
                <li><strong>Krok 2 — Zahájení tahu:</strong> Začni 5–10 mm od okraje lišty nebo stropu. Prvním tahem nanes barvu mimo okraj — ne přímo u něj.</li>
                <li><strong>Krok 3 — Přiblížení k linii:</strong> Druhým tahem (zpět) posuň barvu přesně k linii. Drž štětec pod úhlem přibližně 45° k povrchu, špičkou blíže k linii.</li>
                <li><strong>Krok 4 — Vedení linie:</strong> Pohybuj štětcem plynule podél linie, přiměřeným tlakem. Nehýbej zápěstím — pohyb vychází z ramene. Kratší tahy (20–30 cm) dávají lepší kontrolu než jeden dlouhý tah.</li>
                <li><strong>Krok 5 — Napojování tahů:</strong> Každý nový tah začni v mokré části předchozího tahu — mokré do mokrého. Napojení na zaschlou barvu zanechá viditelný spoj.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pracuj vždy mokré do mokrého. Odřezávání celé stěny nejprve, pak váleček — ne sekci po sekci. Váleček nanes dokud je odřezaná barva ještě mokrá, jinak bude spoj viditelný.</div>
            </section>

            <section id="rohy">
              <h2>Vnitřní a vnější rohy</h2>
              <h3>Vnitřní rohy (kde se dvě stěny setkají)</h3>
              <p>Vnitřní roh je nejnáročnější místo. Technika: maluj vždy jednu stěnu jako hlavní a druhou jako sekundární. Odřezávej na hlavní stěně štětcem podél rohu, pak nanes barvu na sekundární stěnu směrem od rohu. Překryv 1–2 mm v rohu je normální a žádoucí.</p>
              <h3>Vnější rohy (roh místnosti nebo pilíř)</h3>
              <p>Vnější rohy jsou jednodušší — barva přirozeně sleduje hranu. Maluj od hrany ven, ne na hranu. Hrana má být ostrá — použij nabitý štětec a tahem podél hrany ji přirozeně vytvoříš.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud se ti vnitřní roh nedaří, je to normální — je to nejtěžší část. Alternativa: nanes barvu na obě stěny přibližně a pak mokrým štětcem "zameť" přesně do rohu. Jeden suchý tah mokrým štětcem v rohu vytvoří čistou linii.</div>
            </section>

            <section id="listy">
              <h2>Malování u lišt a zárubní</h2>
              <h3>Podlahové a stropní lišty</h3>
              <p>Maluj vždy od lišty směrem nahoru (nebo dolů), ne podél lišty. Techniku odřezávání prováděj s lehce naklopeným štětcem tak aby špička sledovala horní hranu lišty. Pokud lišta není rovná (starší domy), malířská páska je rychlejší řešení.</p>
              <h3>Zárubně a okna</h3>
              <p>Kolem zárubní a okenních rámů maluj vždy po vzoru materiálu — pokud je rám dřevěný a stěna omítka, maluj od okraje rámu směrem do stěny. Přechod musí být přesný na hraně materiálů.</p>
              <h3>Elektrické zásuvky a vypínače</h3>
              <p>Vždy sundej krycí rámečky! Je to 30 sekund práce šroubovákem a výsledek je nesrovnatelně čistší než malování kolem rámečku. Odlož rámečky stranou, nanes barvu až ke krabici, nechej zaschnout a rámečky vrať.</p>
            </section>

            <section id="paska">
              <h2>Kdy použít malířskou pásku</h2>
              <p>Malířská páska není slabost — je to správné řešení v konkrétních situacích. Nepoužívej ji všude jen proto, že se bojíš odřezávání.</p>
              <ul>
                <li><strong>Pásku použij:</strong> Na nerovné lišty nebo zdi kde ruka nedokáže sledovat nerovnosti. Na přechod dvou různých barev na jedné stěně (pruhy, geometrické vzory). Na lesklé povrchy kde každá chyba je vidět.</li>
                <li><strong>Pásku nepoužívej:</strong> Na standardní přechod stěna–strop v bílé barvě. Na vnitřní rohy — páska tam nevytvoří čistou linii. Pokud je povrch prašný nebo nesavý — páska nedrží a barva proteče.</li>
                <li><strong>Správné přilepení pásky:</strong> Přilep pásku prstem po celé délce těsně před malováním. Sundávej ji za mokra pod úhlem 45° — nikdy ne když barva zaschne.</li>
              </ul>
            </section>

            <section id="chyby">
              <h2>Nejčastější chyby při malování rohů a lišt</h2>
              <ul>
                <li><strong>Příliš nabitý štětec:</strong> Kapající štětec zanechává kapky a šmouhy. Vždy otři přebytečnou barvu.</li>
                <li><strong>Malování na zaschlou barvu:</strong> Spoj zaschlé a mokré barvy je viditelný. Pracuj vždy mokré do mokrého.</li>
                <li><strong>Příliš pomalý pohyb:</strong> Pomalý tah zanechává nerovnoměrné pokrytí. Pohyb musí být plynulý a svižný.</li>
                <li><strong>Páska na prašném povrchu:</strong> Barva proteče pod pásku. Před lepením pásky vyčisti povrch vlhkým hadrem.</li>
                <li><strong>Sundávání pásky po zaschnutí:</strong> Páska strhne barvu nebo zanechá zubaté okraje. Sundávej vždy za mokra.</li>
                <li><strong>Šetření na štětci:</strong> Levný štětec je největší příčina špatných výsledků. Investuj do kvalitního odřezávacího štětce.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Je lepší malířská páska nebo technika odřezávání?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Záleží na situaci. Technika odřezávání je rychlejší a dává čistší výsledek na rovných površích jakmile ji ovládneš. Malířská páska je spolehlivější na nerovných površích nebo při dvoubarevných přechodech. Profesionálové používají odřezávání — pásku jen výjimečně.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak opravit přetaženou barvu na lištu?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Pokud je barva mokrá, okamžitě setři vlhkým hadrem nebo štětcem namočeným v čisté vodě. Pokud zaschla, přemaluj lištu její barvou — většina lišt je bílá nebo dřevěná, takže přemalování je snadné. U dřevěných lišt po zaschnutí jemně přebrousit a přemalovat.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">V jakém pořadí malovat stěny, strop a lišty?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Správné pořadí: (1) strop, (2) stěny, (3) lišty. Strop maluj jako první — kapky na stěnu nevadí, přemaloval je druhé krokem. Stěny maluj od stropu dolů. Lišty jako poslední — překryješ případné přesahy ze stěn. U podlahových lišt stačí malovat až po položení koberce nebo laminátové podlahy.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak malovat u podlahy bez znečištění podlahy?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Zakryj podlahu zakrývací fólií nebo novinami, přilep malířskou pásku podél spodní lišty (nebo podlahy bez lišty). Maluj vodorovnými tahy od lišty směrem nahoru. Alternativa: přilož kartičku nebo kus plastové fólie na podlahu a posouvej ji podél stěny — chrání podlahu bez pásky.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/jak-malovat-rohy-a-listy" title="Jak malovat rohy a lišty bez přetahování – technika štětcem 2026" />

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
                <li><a href="#nastroje">Správný štětec</a></li>
                <li><a href="#technika">Technika odřezávání</a></li>
                <li><a href="#rohy">Vnitřní a vnější rohy</a></li>
                <li><a href="#listy">Malování u lišt</a></li>
                <li><a href="#paska">Kdy použít pásku</a></li>
                <li><a href="#chyby">Nejčastější chyby</a></li>
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
