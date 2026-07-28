import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Podhled s LED bodovkami: návrh a instalace",
  description: "Jak navrhnout sádrokartonový podhled s vestavěnými LED bodovkami – kolik bodů, rozteč, rozvržení, zapojení, transformátory, stmívání a barva světla.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/podhled-s-led-bodovkami" },
  openGraph: { title: "Podhled s LED bodovkami: návrh a instalace", description: "Jak navrhnout sádrokartonový podhled s vestavěnými LED bodovkami – kolik bodů, rozteč, rozvržení, zapojení, transformátory, stmívání a barva světla.", url: "https://www.domovniguru.cz/blog/podhled-s-led-bodovkami", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-07-21T08:00:00Z", modifiedTime: "2026-07-21T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Podhled%20s%20LED%20bodovkami&cat=blog", width: 1200, height: 630, alt: "Podhled s LED bodovkami: návrh a instalace" }] },
  twitter: { card: "summary_large_image", title: "Podhled s LED bodovkami: návrh a instalace", description: "Jak navrhnout sádrokartonový podhled s LED bodovkami – počet bodů, rozteč, zapojení, stmívání a barva světla." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/podhled-s-led-bodovkami#article", "headline": "Podhled s LED bodovkami: návrh a instalace", "datePublished": "2026-07-21T08:00:00Z", "dateModified": "2026-07-21T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["LED bodovky do podhledu", "sádrokartonový podhled osvětlení", "kolik bodovek do místnosti", "rozteč bodovek", "zapojení LED bodovek", "stmívání LED", "barva světla Kelvin"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Elektrika & osvětlení", "item": "https://www.domovniguru.cz/blog/kategorie/elektrika" }, { "@type": "ListItem", "position": 4, "name": "Podhled s LED bodovkami", "item": "https://www.domovniguru.cz/blog/podhled-s-led-bodovkami" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Kolik LED bodovek potřebuji do místnosti?", "acceptedAnswer": { "@type": "Answer", "text": "Počet vychází z požadované intenzity osvětlení místnosti a světelného toku jedné bodovky. Obývací pokoj potřebuje kolem 150 luxů, kuchyň 300, koupelna 200 a pracovna až 400 luxů. Vynásobte požadovanou intenzitu plochou místnosti, přičtěte rezervu a vydělte světelným tokem jedné bodovky (typicky 350–500 lumenů). Přesný výpočet nabízí kalkulačka LED bodovek." } }, { "@type": "Question", "name": "Jaká je ideální rozteč bodovek v podhledu?", "acceptedAnswer": { "@type": "Answer", "text": "Osvědčená rozteč je zhruba 80–120 cm mezi body a alespoň 30–50 cm od stěny, aby světlo nedopadalo jen na okraj. Body rozmístěte pravidelně do mřížky, aby osvětlení bylo rovnoměrné bez tmavých míst. U kuchyně nebo zrcadla směřujte body tam, kde je potřeba nasvítit pracovní plochu, ne doprostřed průchozí zóny." } }, { "@type": "Question", "name": "Jakou barvu světla u LED bodovek zvolit?", "acceptedAnswer": { "@type": "Answer", "text": "Teplá bílá (2700–3000 K) se hodí do obývacího pokoje a ložnice, kde vytváří útulné prostředí. Neutrální bílá (4000 K) je vhodná do kuchyně, koupelny a pracovny, kde potřebujete věrné podání barev a svěží světlo. Studenou bílou (nad 5000 K) do bytu obvykle nevolte, působí chladně. Důležitý je i index podání barev CRI, ideálně nad 90." } }, { "@type": "Question", "name": "Potřebují LED bodovky transformátor a jak je stmívat?", "acceptedAnswer": { "@type": "Answer", "text": "Nízkonapěťové bodovky (12 V) vyžadují napájecí zdroj (transformátor či LED driver) dimenzovaný na jejich celkový příkon s rezervou. Síťové bodovky 230 V se zapojují přímo. Pro stmívání musí být stmívatelné jak samotné zdroje, tak stmívač určený pro LED zátěž. Kombinace nekompatibilního stmívače a zdroje způsobuje blikání nebo bzučení." } }, { "@type": "Question", "name": "Můžu instalaci LED bodovek do podhledu udělat sám?", "acceptedAnswer": { "@type": "Answer", "text": "Vyříznutí otvorů, osazení bodovek a mechanická montáž podhledu jsou práce, které zvládne zručný kutil. Připojení do pevné elektroinstalace, tedy zapojení okruhu do rozvaděče a na vypínač, je ale vyhrazená elektroinstalační činnost. Ta musí být provedena při odpojeném okruhu a připojení do sítě přenechte kvalifikovanému elektrikáři, který vystaví revizní zprávu." } }] }] };

const RELATED = [
  { title: "Jak osvětlit kuchyňskou linku", href: "/blog/osvetlit-kuchynskou-linku", read: "4 min" },
  { title: "LED pásky: instalace a výběr", href: "/blog/led-pasky-instalace-a-vyber", read: "5 min" },
  { title: "Sádrokartonová příčka: postup", href: "/blog/sadrokarton-pricka-postup", read: "6 min" },
  { title: "Jak vybrat správnou LED žárovku", href: "/blog/jak-vybrat-led-zarovku", read: "5 min" },
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
              <span>Podhled s LED bodovkami</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">⚡ Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Podhled s LED bodovkami</h1>
              <p className="article-lead">Sádrokartonový podhled s vestavěnými LED bodovkami je dnes nejoblíbenější způsob, jak dostat do místnosti rovnoměrné a nevtíravé osvětlení. Klíč k dobrému výsledku je v návrhu: kolik bodů, jak daleko od sebe a od stěny, jakou barvu světla a jak vše bezpečně zapojit. Projdeme celý postup od plánu až po instalaci.</p>
              <div className="article-meta-row"><span>Aktualizováno: 21. července 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/podhled-s-led-bodovkami" title="Podhled s LED bodovkami: návrh a instalace" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 175" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="175" fill="#fbf9f4"/>
                {[
                  { x:20, icon:"💡", name:"Počet bodů", price:"Podle plochy", use:"Luxy × m²\n350–500 lm na bod\nPřidej rezervu", color:"#f59e0b" },
                  { x:210, icon:"📐", name:"Rozteč", price:"80–120 cm", use:"Pravidelná mřížka\n30–50 cm od stěny\nBez tmavých míst", color:"#4a90d9" },
                  { x:400, icon:"🌡️", name:"Barva světla", price:"Kelviny", use:"Obývák 2700–3000 K\nKuchyň 4000 K\nCRI nad 90", color:"#e07040" },
                  { x:590, icon:"🔌", name:"Zapojení", price:"12 V / 230 V", use:"Zdroj s rezervou\nStmívání kompatibilní\nElektrikář na síť", color:"#5a9e6f" },
                ].map(({x, icon, name, price, use, color}) => (
                  <g key={x} transform={`translate(${x}, 12)`}>
                    <rect x="0" y="0" width="163" height="150" rx="8" fill="#fff" stroke={color} strokeWidth="1.2"/>
                    <text x="81" y="34" textAnchor="middle" fontSize="22">{icon}</text>
                    <text x="81" y="56" textAnchor="middle" fontSize="11" fill={color} fontWeight="700">{name}</text>
                    <text x="81" y="72" textAnchor="middle" fontSize="8" fill="#8a8078">{price}</text>
                    <line x1="10" y1="80" x2="153" y2="80" stroke={color} strokeWidth="0.5" opacity="0.4"/>
                    {use.split('\n').map((l,i) => <text key={i} x="12" y={96+i*13} fontSize="8.5" fill="#3a7e4f">✓ {l}</text>)}
                  </g>
                ))}
                <rect y="158" width="760" height="17" fill="#f0ead8" opacity="0.6"/>
                <text x="380" y="170" textAnchor="middle" fontSize="8" fill="#8a6a20" fontWeight="600" letterSpacing="0.06em">💡 NEJDŘÍV NÁVRH A ROZTEČ · POTOM BARVA SVĚTLA · PŘIPOJENÍ NA SÍŤ VŽDY ELEKTRIKÁŘ</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#kolik">Kolik bodovek potřebuji</a></li>
                <li><a href="#rozvrzeni">Rozvržení a rozteč</a></li>
                <li><a href="#barva">Barva světla a CRI</a></li>
                <li><a href="#zapojeni">Zapojení a transformátory</a></li>
                <li><a href="#instalace">Instalace krok za krokem</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="kolik">
              <h2>Kolik bodovek potřebuji</h2>
              <p>Počet bodovek se neodhaduje od oka, ale vychází z požadované intenzity osvětlení a světelného toku jednoho bodu. Každý typ místnosti má jinou doporučenou intenzitu, měřenou v luxech: obývací pokoj kolem 150 luxů, kuchyň 300, koupelna 200, chodba 100 a pracovna až 400 luxů.</p>
              <p>Postup je jednoduchý: požadovanou intenzitu vynásobíte plochou místnosti, čímž získáte potřebný celkový světelný tok v lumenech, přidáte rezervu na stárnutí a znečištění a vydělíte světelným tokem jedné bodovky (typicky 350–500 lumenů). Výsledek zaokrouhlíte nahoru.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Nechcete počítat ručně? Zadejte plochu a typ místnosti do naší <Link href="/kalkulacky/kolik-bodovek-do-podhledu" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačky LED bodovek do podhledu</Link> a rovnou dostanete doporučený počet bodů, potřebný světelný tok i orientační rozmístění.</div>
            </section>

            <section id="rozvrzeni">
              <h2>Rozvržení a rozteč</h2>
              <p>Rovnoměrnost osvětlení závisí na tom, jak body rozmístíte. Cílem je pokrýt strop pravidelnou mřížkou tak, aby nikde nevznikaly tmavé kouty ani přesvětlená místa.</p>
              <h3>Pravidla pro rozmístění</h3>
              <ul>
                <li><strong>Rozteč 80–120 cm</strong> mezi jednotlivými body podle výšky stropu a výkonu bodovek</li>
                <li><strong>Odstup 30–50 cm od stěny,</strong> aby světlo dopadalo i na okraje místnosti, ne jen doprostřed</li>
                <li><strong>Symetrická mřížka,</strong> například 3 × 3 nebo 2 × 4, působí klidně a profesionálně</li>
                <li><strong>Cílené nasvícení</strong> pracovní desky, zrcadla nebo jídelního stolu tam, kde ho reálně potřebujete</li>
              </ul>
              <p>Nad kuchyňskou linkou zvažte kombinaci podhledových bodovek s dalším osvětlením přímo pod skříňkami, jak popisujeme v článku <Link href="/blog/osvetlit-kuchynskou-linku" style={{ color: "#2a6496", textDecoration: "underline" }}>jak osvětlit kuchyňskou linku</Link>. Podhled a podlinkové osvětlení se skvěle doplňují.</p>
            </section>

            <section id="barva">
              <h2>Barva světla a CRI</h2>
              <p>Barva světla zásadně mění atmosféru místnosti a měří se v kelvinech (K). Vedle ní sledujte i index podání barev CRI, který určuje, jak věrně světlo zobrazuje barvy.</p>
              <ul>
                <li><strong>Teplá bílá 2700–3000 K</strong> do obývacího pokoje a ložnice, vytváří útulné a klidné prostředí</li>
                <li><strong>Neutrální bílá 4000 K</strong> do kuchyně, koupelny a pracovny, kde chcete svěží světlo a věrné barvy</li>
                <li><strong>Studená bílá nad 5000 K</strong> do bytu obvykle nevolte, působí chladně a nemocničně</li>
                <li><strong>CRI nad 90</strong> zajistí, že jídlo, pleť i nábytek vypadají přirozeně</li>
              </ul>
              <p>Význam kelvinů, lumenů i CRI podrobně vysvětlujeme v článku <Link href="/blog/jak-vybrat-led-zarovku" style={{ color: "#2a6496", textDecoration: "underline" }}>jak vybrat správnou LED žárovku</Link>, principy platí i pro bodovky.</p>
            </section>

            <section id="zapojeni">
              <h2>Zapojení a transformátory</h2>
              <p>LED bodovky se dělí podle napájecího napětí, a to určuje, jak je zapojíte.</p>
              <h3>Napájení</h3>
              <ul>
                <li><strong>Nízkonapěťové bodovky 12 V</strong> potřebují napájecí zdroj (LED driver nebo transformátor) dimenzovaný na součet příkonů všech bodů, s rezervou zhruba 20 %</li>
                <li><strong>Síťové bodovky 230 V</strong> se zapojují přímo do okruhu bez zdroje, což zjednodušuje instalaci</li>
                <li><strong>Rozdělení do okruhů</strong> umožní ovládat části osvětlení nezávisle, například pracovní a náladové světlo</li>
              </ul>
              <h3>Stmívání</h3>
              <p>Chcete-li bodovky stmívat, musí být stmívatelné jak samotné bodovky nebo zdroje, tak stmívač určený pro LED zátěž. Nekompatibilní kombinace se projeví blikáním nebo bzučením. Zapojení stmívače rozebíráme v samostatném návodu na webu.</p>
              <div className="article-tip"><strong>⚡ Bezpečnost:</strong> Připojení nového světelného okruhu do rozvaděče a na vypínač je zásah do pevné elektroinstalace. Provádějte veškeré práce výhradně na odpojeném okruhu (vypnutý jistič, ověřeno zkoušečkou) a samotné připojení do sítě přenechte kvalifikovanému elektrikáři, který vystaví revizní zprávu. Vyříznutí otvorů a osazení bodovek zvládnete sami.</div>
            </section>

            <section id="instalace">
              <h2>Instalace krok za krokem</h2>
              <ul>
                <li><strong>Krok 1 — Návrh:</strong> Rozkreslete rozmístění bodů na strop podle výpočtu a rozteče. Ověřte, kudy povedou kabely a kde bude zdroj.</li>
                <li><strong>Krok 2 — Rošt a rozvody:</strong> Postavte sádrokartonový rošt a ještě před zaklopením deskami rozveďte kabeláž k místům bodovek s dostatečnou rezervou délky.</li>
                <li><strong>Krok 3 — Zaklopení a otvory:</strong> Zaklopte podhled deskami, vyměřte pozice bodů a vyřízněte otvory kruhovou vrtací korunkou v přesném průměru bodovek.</li>
                <li><strong>Krok 4 — Osazení:</strong> Protáhněte kabely otvory, připojte bodovky a nízkonapěťové osaďte na zdroj. Zasuňte je pružinami do otvorů.</li>
                <li><strong>Krok 5 — Připojení a zkouška:</strong> Elektrikář připojí okruh do rozvaděče a na vypínač, provede zkoušku a revizi. Teprve poté podhled finálně zatmelíte a vymalujete.</li>
              </ul>
              <p>Pokud si stavíte podhled nebo příčku poprvé, projděte si nejdřív obecný postup v článku <Link href="/blog/sadrokarton-pricka-postup" style={{ color: "#2a6496", textDecoration: "underline" }}>sádrokartonová příčka krok za krokem</Link>, principy roštu a zaklopení jsou stejné.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Kolik LED bodovek potřebuji do místnosti?", a: "Počet vychází z požadované intenzity osvětlení místnosti a světelného toku jedné bodovky. Obývací pokoj potřebuje kolem 150 luxů, kuchyň 300, koupelna 200 a pracovna až 400 luxů. Vynásobte požadovanou intenzitu plochou místnosti, přičtěte rezervu a vydělte světelným tokem jedné bodovky (typicky 350–500 lumenů). Přesný výpočet nabízí kalkulačka LED bodovek." },
                  { q: "Jaká je ideální rozteč bodovek v podhledu?", a: "Osvědčená rozteč je zhruba 80–120 cm mezi body a alespoň 30–50 cm od stěny, aby světlo nedopadalo jen na okraj. Body rozmístěte pravidelně do mřížky, aby osvětlení bylo rovnoměrné bez tmavých míst. U kuchyně nebo zrcadla směřujte body tam, kde je potřeba nasvítit pracovní plochu, ne doprostřed průchozí zóny." },
                  { q: "Jakou barvu světla u LED bodovek zvolit?", a: "Teplá bílá (2700–3000 K) se hodí do obývacího pokoje a ložnice, kde vytváří útulné prostředí. Neutrální bílá (4000 K) je vhodná do kuchyně, koupelny a pracovny, kde potřebujete věrné podání barev a svěží světlo. Studenou bílou (nad 5000 K) do bytu obvykle nevolte, působí chladně. Důležitý je i index podání barev CRI, ideálně nad 90." },
                  { q: "Potřebují LED bodovky transformátor a jak je stmívat?", a: "Nízkonapěťové bodovky (12 V) vyžadují napájecí zdroj (transformátor či LED driver) dimenzovaný na jejich celkový příkon s rezervou. Síťové bodovky 230 V se zapojují přímo. Pro stmívání musí být stmívatelné jak samotné zdroje, tak stmívač určený pro LED zátěž. Kombinace nekompatibilního stmívače a zdroje způsobuje blikání nebo bzučení." },
                  { q: "Můžu instalaci LED bodovek do podhledu udělat sám?", a: "Vyříznutí otvorů, osazení bodovek a mechanická montáž podhledu jsou práce, které zvládne zručný kutil. Připojení do pevné elektroinstalace, tedy zapojení okruhu do rozvaděče a na vypínač, je ale vyhrazená elektroinstalační činnost. Ta musí být provedena při odpojeném okruhu a připojení do sítě přenechte kvalifikovanému elektrikáři, který vystaví revizní zprávu." },
                ].map(({ q, a }) => (
                  <details key={q} className="faq-item">
                    <summary className="faq-q">{q}</summary>
                    <p className="faq-a">{a}</p>
                  </details>
                ))}
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/podhled-s-led-bodovkami" title="Podhled s LED bodovkami: návrh a instalace" />

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
                <li><a href="#kolik">Kolik bodovek</a></li>
                <li><a href="#rozvrzeni">Rozvržení a rozteč</a></li>
                <li><a href="#barva">Barva světla a CRI</a></li>
                <li><a href="#zapojeni">Zapojení</a></li>
                <li><a href="#instalace">Instalace</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/elektrika" className="sidebar-cat-link">⚡ Elektrika & osvětlení<span>35 článků →</span></Link>
            </div>
          </aside>
        </div>
      </div>
      <style>{`
        .article-layout { display: grid; grid-template-columns: 1fr 280px; gap: 56px; padding: 48px 0 80px; align-items: start; }
        .article-header { margin-bottom: 32px; }
        .article-meta-top { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
        .article-cat-pill { display: inline-flex; align-items: center; height: 24px; padding: 0 12px; border-radius: 999px; border: 1px solid var(--border); background: var(--surface); font-size: 11px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--muted); text-decoration: none; transition: background 120ms; }
        .article-cat-pill:hover { background: #e8e7e2; color: var(--text); }
        .article-read-time { font-size: 12px; color: var(--muted); font-weight: 500; }
        .article-h1 { font-family: var(--font-serif); font-size: clamp(26px, 3.5vw, 40px); line-height: 1.1; font-weight: 400; letter-spacing: -0.01em; margin-bottom: 16px; }
        .article-lead { font-size: 18px; line-height: 1.65; color: var(--muted); font-weight: 300; margin-bottom: 14px; }
        .article-meta-row { display: flex; gap: 8px; font-size: 12px; color: var(--muted); font-weight: 500; }
        .hero-illustration { margin: 28px 0 36px; border-radius: 12px; overflow: hidden; border: 1px solid var(--border); }
        .hero-svg { width: 100%; height: auto; display: block; }
        .toc { background: var(--surface); border-radius: 10px; padding: 20px 24px; margin-bottom: 40px; }
        .toc-label { font-size: 11px; font-weight: 700; letter-spacing: 0.10em; text-transform: uppercase; color: var(--muted); margin-bottom: 12px; }
        .toc-list { padding-left: 18px; display: flex; flex-direction: column; gap: 6px; }
        .toc-list li a { font-size: 14px; color: var(--muted); text-decoration: none; font-weight: 400; transition: color 120ms; }
        .toc-list li a:hover { color: var(--text); }
        .article-body section { margin-bottom: 48px; }
        .article-body h2 { font-family: var(--font-serif); font-size: clamp(20px, 2.5vw, 26px); font-weight: 400; line-height: 1.2; margin-bottom: 16px; border-top: 1px solid var(--border); padding-top: 24px; margin-top: 8px; }
        .article-body h3 { font-family: var(--font-sans); font-size: 16px; font-weight: 600; margin-top: 24px; margin-bottom: 10px; color: var(--text); }
        .article-body p { font-size: 16px; line-height: 1.75; color: #2a2a28; font-weight: 300; margin-bottom: 14px; }
        .article-body ul, .article-body ol { padding-left: 22px; margin-bottom: 16px; display: flex; flex-direction: column; gap: 8px; }
        .article-body li { font-size: 15px; line-height: 1.6; color: #2a2a28; font-weight: 300; }
        .article-body strong { font-weight: 600; color: var(--text); }
        .article-tip { background: #fffbeb; border-left: 3px solid #f59e0b; border-radius: 0 8px 8px 0; padding: 14px 18px; font-size: 14px; line-height: 1.6; color: #78716c; margin: 20px 0; }
        .article-table-wrap { overflow-x: auto; margin: 16px 0 24px; }
        .article-table { width: 100%; border-collapse: collapse; font-size: 14px; line-height: 1.5; }
        .article-table th { font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); padding: 10px 14px; text-align: left; border-bottom: 2px solid var(--border); background: var(--surface); }
        .article-table td { padding: 10px 14px; border-bottom: 1px solid var(--border); vertical-align: top; color: #2a2a28; font-weight: 300; }
        .article-table tr:last-child td { border-bottom: none; }
        .faq-list { display: flex; flex-direction: column; gap: 8px; }
        .faq-item { border: 1px solid var(--border); border-radius: 10px; overflow: hidden; background: #fff; }
        .faq-q { font-size: 15px; font-weight: 600; padding: 16px 20px; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; transition: background 120ms; }
        .faq-q:hover { background: var(--surface); }
        .faq-q::after { content: "+"; font-size: 18px; font-weight: 300; flex-shrink: 0; margin-left: 12px; }
        details[open] .faq-q::after { content: "−"; }
        .faq-a { font-size: 14px; line-height: 1.65; color: var(--muted); font-weight: 300; padding: 0 20px 16px; }
        .related-section { margin-top: 56px; }
        .related-section h2 { font-family: var(--font-serif); font-size: 22px; font-weight: 400; margin-bottom: 20px; padding-top: 24px; border-top: 1px solid var(--border); }
        .related-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .article-sidebar { position: sticky; top: 80px; display: flex; flex-direction: column; gap: 16px; }
        .sidebar-widget { background: #fff; border: 1px solid var(--border); border-radius: 12px; padding: 20px; }
        .sidebar-widget-title { font-size: 10px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); margin-bottom: 14px; }
        .sidebar-toc { list-style: none; display: flex; flex-direction: column; gap: 8px; }
        .sidebar-toc li a { font-size: 13px; color: var(--muted); text-decoration: none; font-weight: 400; transition: color 120ms; line-height: 1.4; display: block; }
        .sidebar-toc li a:hover { color: var(--text); }
        .sidebar-cat-link { display: flex; justify-content: space-between; align-items: center; font-size: 14px; font-weight: 500; color: var(--text); text-decoration: none; padding: 8px 0; border-bottom: 1px solid var(--border); transition: color 120ms; }
        .sidebar-cat-link:hover { color: var(--muted); }
        .sidebar-cat-link span { font-size: 12px; color: var(--muted); }
        @media (max-width: 960px) { .article-layout { grid-template-columns: 1fr; gap: 0; } .article-sidebar { position: static; margin-top: 40px; } .related-grid { grid-template-columns: 1fr; } }
        @media (max-width: 600px) { .article-layout { padding: 32px 0 60px; } }
      `}</style>
    </>
  );
}
