import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak osvětlit kuchyňskou linku – LED pásky a bodovky 2026",
  description: "Podsvícení kuchyňské linky LED páskem nebo bodovkami pod skříňky. Jak vybrat, jak připevnit a jak zapojit – bez elektrikáře za odpoledne.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/osvetlit-kuchynskou-linku" },
  openGraph: { title: "Jak osvětlit kuchyňskou linku 2026", description: "LED pásky nebo bodovky pod skříňky – výběr, montáž a zapojení krok za krokem.", url: "https://www.domovniguru.cz/blog/osvetlit-kuchynskou-linku", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-14T08:00:00Z", modifiedTime: "2026-04-14T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak osvětlit kuchyňskou linku 2026", description: "LED pásky nebo bodovky pod skříňky – výběr, montáž a zapojení." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/osvetlit-kuchynskou-linku#article",
    "headline": "Jak osvětlit kuchyňskou linku – LED pásky a bodovky 2026",
    "datePublished": "2026-04-14T08:00:00Z",
    "dateModified": "2026-04-14T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak osvětlit kuchyňskou linku", "LED pásek pod skříňky", "podsvícení kuchyně", "bodovky kuchyňská linka", "osvětlení pracovní desky", "kuchyňské LED světlo"]
  }]
};

const RELATED = [
  { title: "Jak nainstalovat stmívač světla", href: "/blog/instalovat-stmivac", read: "6 min" },
  { title: "Jak vybrat správnou LED žárovku", href: "/blog/jak-vybrat-led-zarovku", read: "5 min" },
  { title: "Jak snížit účet za elektřinu doma", href: "/blog/snizit-ucet-za-elektrinu", read: "7 min" },
  { title: "LED vs. žárovky – co se skutečně vyplatí?", href: "/blog/led-vs-zarovky", read: "4 min" },
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
              <span>Osvětlení kuchyňské linky</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">⚡ Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak osvětlit kuchyňskou linku – LED pásky a bodovky</h1>
              <p className="article-lead">Strop svítí ale pracovní deska je ve stínu skříněk — klasický problém každé kuchyně. LED pásky nebo bodovky pod skříňkami to vyřeší za odpoledne a bez elektrikáře. Tady je jak na to.</p>
              <div className="article-meta-row"><span>Aktualizováno: 14. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/osvetlit-kuchynskou-linku" title="Jak osvětlit kuchyňskou linku – LED pásky a bodovky 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="200" fill="#1a1a2e"/>

                {/* Kuchyňská linka — tmavá verze vlevo */}
                <g transform="translate(20,20)">
                  <rect x="0" y="0" width="200" height="155" rx="6" fill="#2a2a3e" stroke="#3a3a5e" strokeWidth="1"/>
                  <text x="100" y="16" textAnchor="middle" fontSize="8.5" fill="#e07a5f" fontWeight="700">❌ BEZ PODSVÍCENÍ</text>
                  {/* Horní skříňky */}
                  <rect x="10" y="22" width="85" height="50" rx="3" fill="#3a3a50" stroke="#4a4a6a" strokeWidth="1"/>
                  <rect x="105" y="22" width="85" height="50" rx="3" fill="#3a3a50" stroke="#4a4a6a" strokeWidth="1"/>
                  {/* Pracovní deska */}
                  <rect x="10" y="78" width="180" height="8" rx="2" fill="#4a4040"/>
                  {/* Stín na pracovní desce */}
                  <rect x="10" y="86" width="180" height="45" rx="0" fill="#222230" opacity="0.8"/>
                  <text x="100" y="115" textAnchor="middle" fontSize="8" fill="#6a6a80">tmavá pracovní deska</text>
                  <text x="100" y="128" textAnchor="middle" fontSize="8" fill="#6a6a80">špatná viditelnost</text>
                  {/* Dolní skříňky */}
                  <rect x="10" y="131" width="85" height="18" rx="2" fill="#3a3a50" stroke="#4a4a6a" strokeWidth="0.8"/>
                  <rect x="105" y="131" width="85" height="18" rx="2" fill="#3a3a50" stroke="#4a4a6a" strokeWidth="0.8"/>
                </g>

                {/* šipka */}
                <g transform="translate(232,88)">
                  <path d="M0 12 L45 12" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M39 6 L47 12 L39 18" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <text x="22" y="8" textAnchor="middle" fontSize="7.5" fill="#fbbf24">LED pásky</text>
                </g>

                {/* Kuchyňská linka — světlá verze vpravo */}
                <g transform="translate(288,20)">
                  <rect x="0" y="0" width="200" height="155" rx="6" fill="#1e2a3a" stroke="#2a4a6a" strokeWidth="1"/>
                  <text x="100" y="16" textAnchor="middle" fontSize="8.5" fill="#4ade80" fontWeight="700">✅ S LED PODSVÍCENÍM</text>
                  {/* Horní skříňky */}
                  <rect x="10" y="22" width="85" height="50" rx="3" fill="#2a3a50" stroke="#3a5a7a" strokeWidth="1"/>
                  <rect x="105" y="22" width="85" height="50" rx="3" fill="#2a3a50" stroke="#3a5a7a" strokeWidth="1"/>
                  {/* LED pásky pod skříňkami */}
                  <rect x="10" y="71" width="85" height="3" rx="1" fill="#fbbf24" opacity="0.9"/>
                  <rect x="105" y="71" width="85" height="3" rx="1" fill="#fbbf24" opacity="0.9"/>
                  {/* Světelný kužel */}
                  <path d="M10 74 L10 110 L95 110 L95 74 Z" fill="#fef9c3" opacity="0.15"/>
                  <path d="M105 74 L105 110 L190 110 L190 74 Z" fill="#fef9c3" opacity="0.15"/>
                  {/* Pracovní deska */}
                  <rect x="10" y="78" width="180" height="8" rx="2" fill="#5a5040"/>
                  {/* Osvětlená plocha */}
                  <rect x="10" y="86" width="180" height="45" rx="0" fill="#3a3828" opacity="0.7"/>
                  <text x="100" y="112" textAnchor="middle" fontSize="8" fill="#fef9c3">osvětlená pracovní deska</text>
                  <text x="100" y="125" textAnchor="middle" fontSize="8" fill="#fbbf24">pohodlná práce ✓</text>
                  {/* Dolní skříňky */}
                  <rect x="10" y="131" width="85" height="18" rx="2" fill="#2a3a50" stroke="#3a5a7a" strokeWidth="0.8"/>
                  <rect x="105" y="131" width="85" height="18" rx="2" fill="#2a3a50" stroke="#3a5a7a" strokeWidth="0.8"/>
                </g>

                {/* Varianty vpravo */}
                <g transform="translate(506,20)">
                  <rect x="0" y="0" width="234" height="155" rx="8" fill="#1e2030" stroke="#2a3050" strokeWidth="1"/>
                  <text x="117" y="18" textAnchor="middle" fontSize="9" fill="#a0a0c0" fontWeight="700">VARIANTY OSVĚTLENÍ</text>
                  {[
                    { icon:"💡", name:"LED páska", sub:"nejlevnější, DIY", color:"#fbbf24" },
                    { icon:"🔵", name:"LED bodovky", sub:"čistší vzhled", color:"#60a5fa" },
                    { icon:"📏", name:"LED lišta (profil)", sub:"profesionální výsledek", color:"#4ade80" },
                    { icon:"🌈", name:"RGB páska", sub:"barevná atmosféra", color:"#c084fc" },
                  ].map(({icon, name, sub, color}, i) => (
                    <g key={i} transform={`translate(12, ${28+i*28})`}>
                      <rect x="0" y="0" width="210" height="22" rx="4" fill={color} opacity="0.1"/>
                      <text x="8" y="15" fontSize="12">{icon}</text>
                      <text x="28" y="13" fontSize="9.5" fill={color} fontWeight="600">{name}</text>
                      <text x="28" y="22" fontSize="8" fill="#8080a0">{sub}</text>
                    </g>
                  ))}
                </g>

                <rect y="182" width="760" height="18" fill="#2a2a4a" opacity="0.8"/>
                <text x="380" y="194" textAnchor="middle" fontSize="8" fill="#8080c0" fontWeight="600" letterSpacing="0.06em">💡 INSTALACE BEZ ELEKTRIKÁŘE · 12V LED PÁSKY = BEZPEČNÉ · ZA ODPOLEDNE</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#moznosti">LED pásky vs. bodovky – srovnání</a></li>
                <li><a href="#led-pasek">LED pásky – výběr a montáž</a></li>
                <li><a href="#bodovky">LED bodovky pod skříňky</a></li>
                <li><a href="#napajeni">Napájení a zapojení</a></li>
                <li><a href="#teplota">Teplota světla – jakou zvolit</a></li>
                <li><a href="#chyby">Nejčastější chyby</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="moznosti">
              <h2>LED pásky vs. bodovky – srovnání</h2>
              <p>Pro osvětlení kuchyňské linky máš dvě hlavní možnosti. Obě fungují, ale dávají různý výsledek.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Varianta</th><th>Cena</th><th>Obtížnost montáže</th><th>Výsledek</th><th>Vhodné pro</th></tr></thead>
                  <tbody>
                    <tr><td><strong>LED páska</strong></td><td>300–800 Kč</td><td>⭐ Velmi snadná</td><td>Rovnoměrné měkké světlo</td><td>DIY, nízký rozpočet</td></tr>
                    <tr><td><strong>LED páska v hliníkovém profilu</strong></td><td>600–1 500 Kč</td><td>⭐⭐ Snadná</td><td>Profesionální, čisté linie</td><td>Trvalá instalace</td></tr>
                    <tr><td><strong>LED bodovky (puck lights)</strong></td><td>500–1 200 Kč</td><td>⭐⭐ Snadná</td><td>Bodové světlo, více stínů</td><td>Starší kuchyně, retro styl</td></tr>
                    <tr><td><strong>Vestavné bodovky</strong></td><td>800–2 000 Kč</td><td>⭐⭐⭐ Složitější</td><td>Čisté, integrované</td><td>Rekonstrukce, nová kuchyň</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Doporučení:</strong> Pro většinu kuchyní je nejlepší volbou <strong>LED páska v hliníkovém profilu</strong> — rovnoměrné světlo, hliníkový profil odvádí teplo a zakryje vodiče. Cena za 3 m linky cca 800–1 200 Kč.</div>
            </section>

            <section id="led-pasek">
              <h2>LED pásky – jak vybrat a namontovat</h2>
              <h3>Jak vybrat LED pásku</h3>
              <ul>
                <li><strong>Hustota LED (LED/m):</strong> Minimálně 60 LED/m pro rovnoměrné světlo bez "tečkování". 120 LED/m je ještě lepší.</li>
                <li><strong>Výkon (W/m):</strong> Pro pracovní osvětlení min. 9–12 W/m. Dekorativní pásky 4–6 W/m nestačí jako pracovní světlo.</li>
                <li><strong>Napájení:</strong> 12V nebo 24V pásky jsou bezpečné a snadno se instalují. 230V pásky nevyžadují driver ale jsou méně flexibilní.</li>
                <li><strong>Krytí IP:</strong> Pro kuchyni stačí IP20 (vnitřní prostory). U dřezu nebo sporák zóny IP44 (odolnost stříkající vodě).</li>
              </ul>
              <h3>Montáž LED pásky</h3>
              <ul>
                <li><strong>Krok 1 — Změř délku:</strong> Změř spodní hranu všech skříněk. Pásku nelze prodloužit uprostřed — musí být v jednom kuse nebo spojená konektory.</li>
                <li><strong>Krok 2 — Připrav povrch:</strong> Spodní plocha skříněk musí být suchá a odmašťená (aceton nebo líh). Samolepicí páska na mastném povrchu po týdnu odpadne.</li>
                <li><strong>Krok 3 — Připevni hliníkový profil (pokud používáš):</strong> Profil přišroubuj nebo přilep ke skříňce, vlož pásku, uzavři difuzorem.</li>
                <li><strong>Krok 4 — Přilep pásku:</strong> Odlep ochrannou folii a přitlač pásku podél přední hrany skříňky (ne uprostřed — světlo by svítilo rovnou do očí).</li>
                <li><strong>Krok 5 — Veď kabel:</strong> Kabel veď podél horní hrany skříněk ke zdroji napájení. Kabel lze zahnitovat za lišty nebo vést v kabelovém žlabu.</li>
              </ul>
            </section>

            <section id="bodovky">
              <h2>LED bodovky pod skříňky</h2>
              <p>LED bodovky (puck lights) jsou kulaté světelné body které se přišroubují ke spodní ploše skříňky. Dávají bodové světlo — vhodné spíše pro doplňkové osvětlení než jako hlavní pracovní světlo.</p>
              <ul>
                <li><strong>Rozmístění:</strong> Jedna bodovka na každých 40–60 cm. Na lince 3 m = 5–7 bodovek.</li>
                <li><strong>Bateriové vs. kabelové:</strong> Bateriové bodovky nevyžadují zapojení — ideální pro pronajímané byty nebo rychlé řešení. Cena 200–600 Kč za sadu. Nevýhoda: výměna baterií každé 2–4 měsíce.</li>
                <li><strong>Kabelové bodovky:</strong> Trvalé řešení, připojení ke zdroji 12V. Čistší výsledek bez výměny baterií.</li>
              </ul>
            </section>

            <section id="napajeni">
              <h2>Napájení a zapojení</h2>
              <p>LED pásky a bodovky jsou <strong>nízkoproudá 12V nebo 24V zařízení</strong> — bezpečná pro laickou instalaci. Potřebuješ jen správný napájecí zdroj (driver/transformátor).</p>
              <ul>
                <li><strong>Napájecí zdroj (LED driver):</strong> Transformátor 230V → 12V nebo 24V. Výkon zdroje musí být aspoň o 20 % vyšší než celkový příkon pásky. Příklad: páska 10 W/m × 3 m = 30 W → kupuješ zdroj min. 36 W.</li>
                <li><strong>Zapojení do zásuvky:</strong> Nejjednodušší řešení — driver se zástrčkou do zásuvky za skříňkami. Žádné zapojení do elektroinstalace.</li>
                <li><strong>Zapojení do skryté zásuvky:</strong> Elektrikář přidá skrytou zásuvku za skříňkami. Kabel pak není vidět a nemáš zástrčku trčet ze skříňky.</li>
                <li><strong>Stmívání:</strong> Pokud chceš stmívatelné osvětlení, kup dimmable LED pásku + stmívatelný driver + stmívač. Viz <Link href="/blog/instalovat-stmivac" style={{color:"#5a9e6f",fontWeight:600}}>Jak nainstalovat stmívač →</Link></li>
              </ul>
            </section>

            <section id="teplota">
              <h2>Teplota světla – jakou zvolit pro kuchyň</h2>
              <p>Teplota světla v Kelvinech (K) zásadně ovlivňuje pocit z kuchyně.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Teplota</th><th>Barva</th><th>Pocit</th><th>Vhodné pro kuchyň</th></tr></thead>
                  <tbody>
                    <tr><td><strong>2 700–3 000 K</strong></td><td>Teplá bílá</td><td>Útulné, domácí</td><td>✅ Pro večerní atmosféru, starší kuchyně</td></tr>
                    <tr><td><strong>3 500–4 000 K</strong></td><td>Neutrální bílá</td><td>Přirozené, svěží</td><td>✅✅ Nejlepší pro pracovní osvětlení</td></tr>
                    <tr><td><strong>5 000–6 500 K</strong></td><td>Studená bílá</td><td>Chladné, nemocniční</td><td>❌ Nevhodné pro domácí kuchyni</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Pro kuchyňskou linku doporučujeme 3 500–4 000 K — neutrální bílá ukazuje správné barvy potravin a je příjemnější pro dlouhou práci. Teplá 2 700 K dělá jídlo "zlatistější" — pěkné pro fotografování ale horší pro vaření.</div>
            </section>

            <section id="chyby">
              <h2>Nejčastější chyby při osvětlování kuchyně</h2>
              <ul>
                <li><strong>Páska příliš vzadu pod skříňkou:</strong> Světlo svítí na zástěrku (obklad) místo na pracovní desku. Pásku umísti k přední hraně spodní plochy skříňky.</li>
                <li><strong>Příliš slabá páska:</strong> Dekorativní pásky 4–6 W/m nedávají dostatek světla pro vaření. Minimálně 9–12 W/m.</li>
                <li><strong>Zdroj bez dostatečného výkonu:</strong> Poddimenzovaný driver způsobuje přehřívání a kratší životnost. Vždy kupuj s 20 % rezervou.</li>
                <li><strong>Mastný povrch před montáží:</strong> Samolepka nedrží na mastném povrchu. Vždy odmastit acetonem nebo lihem.</li>
                <li><strong>Nesprávná teplota světla:</strong> Studené bílé světlo (6 500 K) v kuchyni působí nepříjemně. Volit 3 500–4 000 K.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Je instalace LED pásku pod skříňky bezpečná pro laika?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ano, 12V nebo 24V LED pásky jsou bezpečné — napětí je příliš nízké pro úraz elektrickým proudem. Driver (transformátor) se zapojuje do standardní zásuvky 230V — jako každý jiný spotřebič. Žádné zapojení do elektroinstalace není nutné.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Kolik stojí osvětlení kuchyňské linky?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Základní LED páska bez profilu: 300–500 Kč za 3 m + driver 150–300 Kč = celkem 450–800 Kč. S hliníkovým profilem: 800–1 500 Kč. Bateriové bodovky (sada 6 ks): 300–600 Kč. Profesionální instalace s vestavnými bodovkami a skrytou elektrikou: 2 000–5 000 Kč.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak dlouho vydrží LED páska?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Kvalitní LED pásky mají životnost 30 000–50 000 hodin. Při 4 hodinách denního provozu to je 20–34 let. Kratší životnost způsobuje přehřívání (poddimenzovaný driver, špatné větrání) nebo vlhkost (nízké IP krytí v kuchyni).</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/osvetlit-kuchynskou-linku" title="Jak osvětlit kuchyňskou linku – LED pásky a bodovky 2026" />

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
                <li><a href="#moznosti">Pásky vs. bodovky</a></li>
                <li><a href="#led-pasek">LED pásky – montáž</a></li>
                <li><a href="#bodovky">LED bodovky</a></li>
                <li><a href="#napajeni">Napájení a zapojení</a></li>
                <li><a href="#teplota">Teplota světla</a></li>
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
