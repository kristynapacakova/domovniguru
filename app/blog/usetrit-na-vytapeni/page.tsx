import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak ušetřit na vytápění bez výměny kotle – 10 tipů 2026",
  description: "Termostatické hlavice, programovatelný termostat, těsnění oken – jak ušetřit 20–30 % na vytápění bez investice do nového kotle nebo tepelného čerpadla.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/usetrit-na-vytapeni" },
  openGraph: { title: "Jak ušetřit na vytápění bez výměny kotle 2026", description: "10 tipů jak snížit účty za topení o 20–30 % bez drahých investic.", url: "https://www.domovniguru.cz/blog/usetrit-na-vytapeni", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-13T08:00:00Z", modifiedTime: "2026-04-13T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak ušetřit na vytápění bez výměny kotle 2026", description: "10 tipů jak snížit účty za topení o 20–30 % bez drahých investic." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.domovniguru.cz/blog/usetrit-na-vytapeni#article",
      "headline": "Jak ušetřit na vytápění bez výměny kotle – 10 tipů 2026",
      "datePublished": "2026-04-13T08:00:00Z",
      "dateModified": "2026-04-13T08:00:00Z",
      "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "inLanguage": "cs",
      "keywords": ["jak ušetřit na vytápění", "úspora na topení", "termostatické hlavice", "programovatelný termostat", "těsnění oken", "jak snížit účet za topení", "úspora energie vytápění"]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.domovniguru.cz/blog/usetrit-na-vytapeni#faq",
      "mainEntity": [
        { "@type": "Question", "name": "O kolik mohu snížit účty za vytápění bez výměny kotle?", "acceptedAnswer": { "@type": "Answer", "text": "Kombinací termostatických hlavic, programovatelného termostatu, odvzdušnění radiátorů a těsnění oken lze reálně ušetřit 20–35 % nákladů na vytápění. Při průměrném účtu 40 000 Kč/rok jde o 8 000–14 000 Kč ročně." } },
        { "@type": "Question", "name": "Vyplatí se termostatická hlavice?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, termostatická hlavice se vrátí za 1–2 topné sezóny. Cena je 200–600 Kč za kus, úspora při správném nastavení 10–15 % na dané místnosti. Chytrá hlavice (800–2 000 Kč) se naprogramuje podle rozvrhu a úspora je ještě vyšší." } },
        { "@type": "Question", "name": "Na jakou teplotu nastavit vytápění přes noc?", "acceptedAnswer": { "@type": "Answer", "text": "Doporučená noční teplota je 16–18 °C v ložnici a 15–17 °C v ostatních místnostech. Každý stupeň dolů ušetří přibližně 6 % nákladů na vytápění. Teplotu nenechávej klesnout pod 15 °C — opětovné zahřátí studeného bytu spotřebuje víc energie než udržování mírné teploty." } },
      ]
    }
  ]
};

const RELATED = [
  { title: "Tepelné čerpadlo – kompletní průvodce 2026", href: "/blog/tepelne-cerpadlo-pruvodce", read: "11 min" },
  { title: "Jak odvzdušnit radiátor – krok za krokem", href: "/blog/jak-odvzdusnit-radiatory", read: "5 min" },
  { title: "Jak správně větrat byt", href: "/blog/spravne-vetrat-byt", read: "6 min" },
  { title: "Příprava domu na zimu – kompletní checklist", href: "/blog/priprava-domu-na-zimu", read: "10 min" },
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
              <span>Úspora na vytápění</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">❄️ Sezónní údržba</Link>
                <span className="article-read-time">⏱ 7 min čtení</span>
              </div>
              <h1 className="article-h1">Jak ušetřit na vytápění bez výměny kotle</h1>
              <p className="article-lead">Nový kotel nebo tepelné čerpadlo nejsou jediná cesta ke nižším účtům za topení. Termostatické hlavice, správné větrání a těsnění oken dokáží ušetřit 20–35 % – bez velké investice.</p>
              <div className="article-meta-row"><span>Aktualizováno: 13. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/usetrit-na-vytapeni" title="Jak ušetřit na vytápění bez výměny kotle – 10 tipů 2026" />
            </header>

            {/* HERO SVG */}
            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="200" fill="#f8f4ee"/>
                <defs>
                  <linearGradient id="savingBg" x1="0" y1="0" x2="1" y2="0" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#e07040" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#5a9e6f" stopOpacity="0.8"/>
                  </linearGradient>
                </defs>

                {/* Titulek */}
                <text x="380" y="28" textAnchor="middle" fontSize="11" fill="#888070" fontWeight="700" letterSpacing="0.08em">POTENCIÁL ÚSPOR NA VYTÁPĚNÍ</text>

                {/* Pruh graf — jednotlivé úspory */}
                {[
                  { label: "Termostatické hlavice", pct: 15, color: "#5a9e6f", x: 30 },
                  { label: "Programovatelný termostat", pct: 12, color: "#4a90d9", x: 30 },
                  { label: "Odvzdušnění radiátorů", pct: 8, color: "#e07a5f", x: 30 },
                  { label: "Těsnění oken a dveří", pct: 10, color: "#f59e0b", x: 30 },
                  { label: "Správné větrání", pct: 7, color: "#9b6fd4", x: 30 },
                ].map(({label, pct, color, x}, i) => {
                  const y = 45 + i * 28;
                  const barW = pct * 9;
                  return (
                    <g key={i}>
                      <text x={x} y={y+8} fontSize="9.5" fill="#4a4a40" fontWeight="500">{label}</text>
                      <rect x={230} y={y} width={barW} height="14" rx="3" fill={color} opacity="0.85"/>
                      <text x={230+barW+6} y={y+10} fontSize="9" fill={color} fontWeight="700">{pct} %</text>
                    </g>
                  );
                })}

                {/* Svislá dělicí čára */}
                <line x1="225" y1="38" x2="225" y2="190" stroke="#d8d0c8" strokeWidth="0.8"/>

                {/* Celkem box vpravo */}
                <rect x="490" y="38" width="240" height="150" rx="10" fill="#5a9e6f" opacity="0.08" stroke="#5a9e6f" strokeWidth="1"/>
                <text x="610" y="65" textAnchor="middle" fontSize="10" fill="#3a7e4f" fontWeight="700" letterSpacing="0.06em">CELKOVÁ ÚSPORA</text>
                <text x="610" y="105" textAnchor="middle" fontSize="42" fill="#3a7e4f" fontWeight="300">35%</text>
                <text x="610" y="125" textAnchor="middle" fontSize="10" fill="#5a9e6f">při kombinaci všech opatření</text>
                <line x1="510" y1="140" x2="710" y2="140" stroke="#5a9e6f" strokeWidth="0.5" opacity="0.5"/>
                <text x="610" y="158" textAnchor="middle" fontSize="9" fill="#5a9e6f">= až 14 000 Kč/rok</text>
                <text x="610" y="172" textAnchor="middle" fontSize="9" fill="#5a9e6f">při průměrném účtu 40 000 Kč</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#termostaticky">Termostatické hlavice</a></li>
                <li><a href="#termostat">Programovatelný termostat</a></li>
                <li><a href="#odvzdusni">Odvzdušnění radiátorů</a></li>
                <li><a href="#tesneni">Těsnění oken a dveří</a></li>
                <li><a href="#teploty">Správné teploty v místnostech</a></li>
                <li><a href="#vetrani">Větrání a topení</a></li>
                <li><a href="#dalsi">Další tipy s malou investicí</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="termostaticky">
              <h2>Termostatické hlavice – nejrychlejší návratnost</h2>
              <p>Termostatická hlavice je malé zařízení které nahrazuje ruční ventil na radiátoru a automaticky reguluje průtok vody podle nastavené teploty místnosti. Stojí 200–600 Kč za kus, montáž zvládneš sám za 10 minut.</p>
              <p>Princip je jednoduchý: když místnost dosáhne nastavené teploty, hlavice přivře ventil. Topení neběží zbytečně. <strong>Úspora 10–15 % na dané místnosti.</strong></p>
              <ul>
                <li><strong>Mechanická hlavice (200–400 Kč):</strong> Nastaví se ručně na číslo 1–5 (1 = ~12 °C, 3 = ~20 °C, 5 = ~28 °C). Jednoduché, spolehlivé, bez baterií.</li>
                <li><strong>Chytrá hlavice (800–2 000 Kč):</strong> Propojení s aplikací, týdenní program, geofencing (automatické snížení při odchodu z domu). Úspora až 25 % oproti ručnímu ovládání.</li>
                <li><strong>Kde je největší přínos:</strong> Ložnice (nastav na 18 °C), dětský pokoj, místnosti kde trávíš méně času. V obývacím pokoji kde jsi přes den je přínos menší.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Při výměně hlavic zkontroluj zda ventil pod ní není zkorodovaný nebo zaseklý. Nová hlavice na nefunkčním ventilu nepomůže — ventil pak vyměň nebo nechej vyměnit (200–500 Kč práce).</div>
            </section>

            <section id="termostat">
              <h2>Programovatelný termostat – automatická úspora bez námahy</h2>
              <p>Pokojový termostat řídí kotel nebo celou soustavu — na rozdíl od termostatické hlavice která ovládá jeden radiátor. Programovatelný termostat automaticky snižuje teplotu v době kdy jste pryč nebo spíte.</p>
              <ul>
                <li><strong>Klasický programovatelný (500–1 500 Kč):</strong> Nastavíš týdenní rozvrh — vyšší teplota ráno a večer, nižší přes den a v noci. Instalace zvládne elektrikář za půl hodiny.</li>
                <li><strong>Chytrý termostat (2 000–6 000 Kč):</strong> Ovládání přes telefon, automatické učení tvých návyků, propojení s předpovědí počasí. Nest, Tado, Honeywell. Reálná úspora 12–20 %.</li>
                <li><strong>Úspora každého stupně:</strong> Každý stupeň Celsia dolů ušetří přibližně 6 % nákladů. Snížení z 22 °C na 20 °C = úspora ~12 %.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Nejjednodušší chytrý termostat pro starší domy je Tado nebo Honeywell T6 — fungují se všemi plynovými i kondenzačními kotly a instalace trvá hodinu.</div>
            </section>

            <section id="odvzdusni">
              <h2>Odvzdušnění radiátorů – zdarma, okamžitý efekt</h2>
              <p>Vzduch v topné soustavě snižuje výkon radiátoru o 15–25 %. Topení pracuje naplno, ale teplo se do místnosti nedostane — blokovány vzduchovou kapsou. Odvzdušnění stojí 0 Kč (jen čas) a klíč za 20–50 Kč.</p>
              <ul>
                <li><strong>Jak poznat vzduch:</strong> Radiátor je nahoře studený, dole teplý. Bublání nebo kloktání při provozu topení.</li>
                <li><strong>Kdy odvzdušnit:</strong> Na začátku každé topné sezóny — říjen/listopad. Po každém doplnění vody do soustavy.</li>
                <li><strong>Úspora:</strong> Při vzduchu v 5 radiátorech z 10 může být celková úspora po odvzdušnění 8–12 % nákladů.</li>
              </ul>
              <div className="article-tip"><strong>💡 Viz podrobný návod:</strong> <Link href="/blog/jak-odvzdusnit-radiatory" style={{color:"#5a9e6f",fontWeight:600}}>Jak odvzdušnit radiátor – krok za krokem →</Link></div>
            </section>

            <section id="tesneni">
              <h2>Těsnění oken a dveří – levná investice s velkou úsporou</h2>
              <p>Netěsná okna a dveře způsobují průvan a tepelné ztráty. V starším bytě může infiltrací (nekontrolovaným prouděním vzduchu netěsnostmi) unikat až 15 % tepla. Těsnění stojí 50–300 Kč za okno.</p>
              <ul>
                <li><strong>Samolepicí těsnicí páska (50–150 Kč/okno):</strong> Pěnová nebo silikonová páska na rám. Montáž 10 minut. Vydrží 3–5 let.</li>
                <li><strong>Zimní nastavení kování:</strong> Plastová okna mají dva režimy — letní a zimní přítlak. Otočení klíče na kování zwiní přítlak a okno lépe těsní. Zdarma, trvá 2 minuty na okno.</li>
                <li><strong>Silikonové těsnění rámů:</strong> Pokud staré těsnění v rámu prasklo nebo chybí, nové stojí 100–300 Kč a výrazně zlepší těsnost.</li>
                <li><strong>Větrací štěrbiny:</strong> Pokud máš v oknech větrací štěrbiny (mikroventilaci zabudovanou v rámu), zkontroluj zda je v zimě uzavřena.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Kde jsou netěsnosti poznáš svíčkou nebo vlhkou rukou — v chladném dni projdi okna a dveře a sleduj pohyb plamene nebo chladnutí pokožky.</div>
            </section>

            <section id="teploty">
              <h2>Správné teploty v místnostech – za kolik topíš zbytečně</h2>
              <p>Přetápění je největší plýtvání. Každý stupeň navíc znamená 6 % vyšší účet. Doporučené teploty jsou nižší než většina lidí topí.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Místnost</th><th>Doporučená teplota</th><th>Poznámka</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Obývací pokoj</strong></td><td>20–21 °C</td><td>Při sezení je 20 °C pohodlných</td></tr>
                    <tr><td><strong>Ložnice</strong></td><td>16–18 °C</td><td>Chladnější spánek = lepší kvalita spánku</td></tr>
                    <tr><td><strong>Koupelna</strong></td><td>22–24 °C</td><td>Vyšší teplota = rychlejší vyschnutí, méně plísně</td></tr>
                    <tr><td><strong>Dětský pokoj</strong></td><td>20–22 °C</td><td>Malé děti potřebují o stupeň víc</td></tr>
                    <tr><td><strong>Chodba / předsíň</strong></td><td>15–17 °C</td><td>Přechodná zóna nepotřebuje komfort</td></tr>
                    <tr><td><strong>Přes noc (celý byt)</strong></td><td>16–18 °C</td><td>Nenech klesnout pod 15 °C — opětovné zahřátí stojí víc</td></tr>
                    <tr><td><strong>Prázdný byt přes den</strong></td><td>16–17 °C</td><td>Udržovací teplota je levnější než topení od nuly</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="vetrani">
              <h2>Větrání a topení – jak je kombinovat správně</h2>
              <p>Větrání při zapnutém topení naplno je přímá ztráta peněz. Ale zavřený, nevětraný byt také zdražuje — vlhký vzduch se hůře ohřívá a kondenzace na stěnách odvádí teplo.</p>
              <ul>
                <li><strong>Před větráním snižte termostat nebo zavřete radiátor:</strong> Topení do otevřeného okna topí venkovní vzduch. Stačí přivřít radiátor nebo snížit termostat o 2–3 stupně.</li>
                <li><strong>Větrání 5–10 minut dokořán:</strong> Krátkodobé intenzivní větrání je mnohem efektivnější a levnější než celodenní mikroventilace.</li>
                <li><strong>Vlhkost zvyšuje zdánlivou teplotu:</strong> Suchý vzduch při 22 °C se cítí stejně teplo jako vlhký vzduch při 20 °C. Udržování vlhkosti 40–55 % umožní snížit teplotu o 1–2 °C bez ztráty komfortu.</li>
              </ul>
            </section>

            <section id="dalsi">
              <h2>Další tipy s malou investicí</h2>
              <ul>
                <li><strong>Reflexní fólie za radiátor (100–300 Kč):</strong> Zabrání tomu aby radiátor vytápěl zeď místo místnosti. Úspora 3–7 % na daném radiátoru.</li>
                <li><strong>Zakrytí klíčové dírky a netěsností:</strong> Staré dveře a zámky jsou překvapivě velký zdroj průvanu. Krytka na klíčovou dírku stojí 20 Kč.</li>
                <li><strong>Záclony a těžké závěsy:</strong> Těžké závěsy přes noc snižují tepelné ztráty okny o 10–15 %. Okna jsou nejslabší místo v izolaci bytu.</li>
                <li><strong>Koberce na studené podlahy:</strong> Koberec na studené keramické dlažbě snižuje pocit chladu a umožní snížit teplotu o 1 °C bez ztráty komfortu.</li>
                <li><strong>Vyvážení topné soustavy:</strong> Pokud některé radiátory topí výrazně méně než jiné (při stejném nastavení), soustava je nevyvážená. Topenář ji seřídí za 1 000–3 000 Kč a úspora může být 5–10 %.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Začni od nejlevnějších opatření — odvzdušnění radiátorů a zimní nastavení kování oken jsou zdarma a dají se udělat dnes. Pak přidej termostatické hlavice a teprve pak uvažuj o chytrém termostatu.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">O kolik mohu snížit účty za vytápění bez výměny kotle?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Kombinací termostatických hlavic, programovatelného termostatu, odvzdušnění radiátorů a těsnění oken lze reálně ušetřit 20–35 % nákladů na vytápění. Při průměrném účtu 40 000 Kč/rok jde o 8 000–14 000 Kč ročně.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Vyplatí se termostatická hlavice?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ano, termostatická hlavice se vrátí za 1–2 topné sezóny. Cena je 200–600 Kč za kus, úspora při správném nastavení 10–15 % na dané místnosti. Chytrá hlavice (800–2 000 Kč) se naprogramuje podle rozvrhu a úspora je ještě vyšší.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Na jakou teplotu nastavit vytápění přes noc?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Doporučená noční teplota je 16–18 °C v ložnici a 15–17 °C v ostatních místnostech. Každý stupeň dolů ušetří přibližně 6 % nákladů na vytápění. Teplotu nenechávej klesnout pod 15 °C — opětovné zahřátí studeného bytu spotřebuje víc energie než udržování mírné teploty.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Má smysl investovat do zateplení nebo rovnou tepelného čerpadla?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Zateplení je vždy první krok — tepelné čerpadlo v nezatepleném domě pracuje naplno celou zimu a úspory jsou minimální. Pořadí investic: (1) těsnění oken, (2) termostatické hlavice, (3) zateplení, (4) výměna zdroje tepla. Každý krok zvyšuje efektivitu toho dalšího.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Je výhodný noční proudový tarif pro vytápění?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Pokud topíte elektřinou (přímotopy nebo elektrický kotel), tarif D55d nebo D57d nabízí levnější noční proud. Při akumulačních kamnech nebo podlahovém topení s akumulací lze výrazně ušetřit. Pro plynové kotle tarif na elektřinu nemá vliv na náklady za plyn.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/usetrit-na-vytapeni" title="Jak ušetřit na vytápění bez výměny kotle – 10 tipů 2026" />

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
                <li><a href="#termostaticky">Termostatické hlavice</a></li>
                <li><a href="#termostat">Programovatelný termostat</a></li>
                <li><a href="#odvzdusni">Odvzdušnění radiátorů</a></li>
                <li><a href="#tesneni">Těsnění oken a dveří</a></li>
                <li><a href="#teploty">Správné teploty</a></li>
                <li><a href="#vetrani">Větrání a topení</a></li>
                <li><a href="#dalsi">Další tipy</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/sezonni-udrzba" className="sidebar-cat-link">❄️ Sezónní údržba<span>20 článků →</span></Link>
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
