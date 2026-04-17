import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak se zbavit plísně na zdi – likvidace plísně v bytě 2026",
  description: "Černá, zelená i bílá plíseň na zdi: příčiny, likvidace plísně v bytě a prevence. Krok za krokem jak plíseň odstranit jednou provždy – Savo, fungicidy, ocet.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-odstranit-plisen-na-zdi" },
  openGraph: { title: "Jak se zbavit plísně na zdi – likvidace plísně v bytě 2026", description: "Příčiny, zdravotní rizika a ověřené metody likvidace plísně. Savo vs. fungicidy vs. ocet.", url: "https://www.domovniguru.cz/blog/jak-odstranit-plisen-na-zdi", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-03-01T08:00:00Z", modifiedTime: "2026-04-17T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak se zbavit plísně na zdi – likvidace plísně v bytě 2026", description: "Příčiny, zdravotní rizika a ověřené metody likvidace plísně." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/jak-odstranit-plisen-na-zdi#article",
    "headline": "Jak se zbavit plísně na zdi – likvidace plísně v bytě 2026",
    "datePublished": "2026-03-01T08:00:00Z",
    "dateModified": "2026-04-17T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": [
      "jak se zbavit plísně", "likvidace plísně v bytě", "plíseň na stěně", "jak se zbavit plísně na zdi",
      "plíseň v bytě odstranění", "bílá plíseň na zdi", "jak zlikvidovat plíseň na zdi",
      "černá plíseň na zdi", "plíseň v rohu zdi", "jak odstranit plíseň", "plíseň na stropě"
    ]
  }, {
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Jak se zbavit plísně na zdi?", "acceptedAnswer": { "@type": "Answer", "text": "Nasaď respirátor FFP2 a rukavice. Nanes fungicid nebo Savo, nechej působit 20 minut, odstraň kartáčem. Přetři protiplísňovou barvou. Bez odstranění příčiny se plíseň vrátí." } },
      { "@type": "Question", "name": "Pomáhá ocet na plíseň?", "acceptedAnswer": { "@type": "Answer", "text": "Bílý ocet (alespoň 10%) má mírné fungicidní účinky. Na lehkou plíseň může pomoci, na rozvinutou nestačí." } },
      { "@type": "Question", "name": "Kdy volat odborníka na likvidaci plísně?", "acceptedAnswer": { "@type": "Answer", "text": "Odborníka vol pokud plíseň pokrývá plochu větší než 1 m², je lesklá černá, nebo se vrací i po opakovaném ošetření." } }
    ]
  }]
};

const RELATED = [
  { title: "Příprava domu na zimu – kompletní checklist", href: "/blog/priprava-domu-na-zimu", read: "10 min" },
  { title: "Jak odvzdušnit radiátor – krok za krokem", href: "/blog/jak-odvzdusnit-radiatory", read: "5 min" },
  { title: "Jak správně větrat byt", href: "/blog/spravne-vetrat-byt", read: "4 min" },
  { title: "Jak se zbavit vlhkosti v bytě", href: "/blog/zbavit-se-vlhkosti-v-byte", read: "5 min" },
];

const DOWNLOADS = [
  { icon: "📋", title: "Checklist odstranění plísně", sub: "Krok za krokem · ochrana · přípravky · prevence", href: "/downloads/plisen-checklist.pdf", highlight: false },
  { icon: "🌡️", title: "Deník vlhkosti — 2 týdny", sub: "Tisknutelná tabulka · důkaz pro pronajímatele", href: "/downloads/plisen-denik-vlhkosti.pdf", highlight: false },
  { icon: "📄", title: "Dopis pronajímateli", sub: "Šablona reklamace · § 2257 OZ", href: "/downloads/plisen-dopis-pronajimateli.pdf", highlight: true },
];

const MISTAKES = [
  {
    icon: "🖌️",
    mistake: "Přetřeli plíseň barvou",
    story: "Koupili jsme barvu se slovy 'protiplísňová' a natřeli zeď přes plíseň. Za 3 týdny probublala zpět hůř než předtím.",
    lesson: "Barva plíseň nezabije — jen ji zakryje. Vždy nejdřív chemicky ošetřit, nechat zaschnout, teprve pak natřít.",
  },
  {
    icon: "🧹",
    mistake: "Kartáčovali za sucha",
    story: "Vzali jsme kartáč a drhnuli zeď. Plíseň zmizela — ale za týden jsme všichni kašlali a plíseň se objevila na druhé zdi.",
    lesson: "Suchý kartáč rozhodí spóry do celé místnosti. Vždy nejdřív nanes přípravek, počkej 20 minut, pak teprve odstraňuj.",
  },
  {
    icon: "🚿",
    mistake: "Vyčistili a zapomněli na větrání",
    story: "Dokonale jsme vyčistili koupelnu, koupili nejdražší fungicid. Za 2 měsíce plíseň zpátky na stejném místě.",
    lesson: "Chemie plíseň zlikviduje, ale pokud se podmínky nezmění, spóry se vrátí. Větrání po sprchování je základ.",
  },
  {
    icon: "💨",
    mistake: "Přistavili nábytek zpátky ke zdi",
    story: "Po vyčištění jsme vrátili skříň na stejné místo. O zimu později — plíseň za skříní ještě větší než dřív.",
    lesson: "Za nábytkem přisunutým ke vnější zdi se vzduch nehýbe a vlhkost kondenzuje. Minimálně 8 cm mezera od zdi.",
  },
  {
    icon: "🧪",
    mistake: "Smíchali Savo s čisticím prostředkem",
    story: "Aby to bylo účinnější, přidali jsme do Sava ještě čisticí prostředek na koupelnu. Skončili jsme na záchranné stanici.",
    lesson: "Savo (chlornan) NIKDY nemíchej s kyselinami (octový čistič, WC gel, ocet). Vzniká toxický chlór.",
  },
  {
    icon: "🏠",
    mistake: "Ignorovali prasklinu v omítce",
    story: "Plíseň se vracela každý rok na stejné místo u okna. Tři roky čistili a přemalovali. Nakonec zjistili prasklinu v těsnění.",
    lesson: "Plíseň vždy na stejném místě = stavební závada, ne špatné větrání. Hledej příčinu, ne jen symptom.",
  },
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
              <span>Plíseň v bytě</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">🍂 Sezónní údržba</Link>
                <span className="article-read-time">⏱ 12 min čtení</span>
              </div>
              <h1 className="article-h1">Jak se zbavit plísně na zdi – likvidace plísně v bytě</h1>
              <p className="article-lead">Plíseň na zdi není jen estetický problém – je to zdravotní riziko. Ukážeme ti jak ji správně odstranit, co ji způsobuje a hlavně jak zajistit, aby se nikdy nevrátila.</p>
              <div className="article-meta-row"><span>Aktualizováno: 17. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/jak-odstranit-plisen-na-zdi" title="Jak se zbavit plísně na zdi – likvidace plísně v bytě 2026" />
            </header>

            {/* KE STAŽENÍ */}
            <div style={{ margin: "0 0 36px", background: "#f8f4f0", borderRadius: "14px", padding: "20px 24px", border: "1px solid #e8e0d8" }}>
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "14px" }}>
                📥 Ke stažení zdarma
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: "10px" }}>
                {DOWNLOADS.map(r => (
                  <a key={r.href} href={r.href} download style={{ display: "flex", flexDirection: "column", gap: "8px", background: "#fff", border: r.highlight ? "2px solid #f59e0b" : "1px solid #e8e0d8", borderRadius: "10px", padding: "16px", textDecoration: "none", position: "relative" }}>
                    {r.highlight && (<span style={{ position: "absolute", top: "-10px", left: "12px", background: "#fffbeb", color: "#7a5800", fontSize: "10px", fontWeight: 700, padding: "2px 8px", borderRadius: "6px", border: "1px solid #f59e0b" }}>Nejstahovanější</span>)}
                    <span style={{ fontSize: "20px" }}>{r.icon}</span>
                    <span style={{ fontSize: "13px", fontWeight: 700, color: "#1a1a18", lineHeight: 1.3 }}>{r.title}</span>
                    <span style={{ fontSize: "11px", color: "#8a8a80", lineHeight: 1.4 }}>{r.sub}</span>
                    <span style={{ marginTop: "4px", paddingTop: "10px", borderTop: "1px solid #e8e0d8", fontSize: "12px", fontWeight: 700, color: r.highlight ? "#7a5800" : "#3a3a38" }}>↓ Stáhnout PDF · A4</span>
                  </a>
                ))}
              </div>
            </div>

            {/* HERO SVG */}
            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="200" fill="#f8f6f4"/>
                <defs>
                  <linearGradient id="wallBg" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#f0ede8"/><stop offset="100%" stopColor="#e8e4de"/>
                  </linearGradient>
                </defs>
                <g transform="translate(20, 20)">
                  <rect x="0" y="0" width="200" height="160" rx="6" fill="url(#wallBg)" stroke="#ddd8d0" strokeWidth="1"/>
                  {[[72,120],[78,108],[85,118],[68,130],[75,140],[90,128],[82,98],[65,118],[92,112]].map(([x,y],i)=>(<ellipse key={i} cx={x} cy={y} rx={4+Math.sin(i)*2} ry={3+Math.cos(i)*2} fill="#2d2820" opacity={0.55+i*0.04}/>))}
                  <rect x="20" y="8" width="100" height="18" rx="4" fill="#e07a5f" opacity="0.15"/>
                  <text x="70" y="21" textAnchor="middle" fontSize="9" fill="#c0503a" fontWeight="600">PROBLÉM</text>
                </g>
                <path d="M228 100 L268 100" stroke="#c8b89a" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M264 95 L270 100 L264 105" stroke="#c8b89a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <g transform="translate(276, 20)">
                  <rect x="0" y="0" width="200" height="160" rx="6" fill="url(#wallBg)" stroke="#ddd8d0" strokeWidth="1"/>
                  {[[72,120],[78,108],[85,118]].map(([x,y],i)=>(<ellipse key={i} cx={x} cy={y} rx="3" ry="3" fill="#2d2820" opacity="0.2"/>))}
                  <g transform="translate(95, 55)">
                    <rect x="8" y="20" width="22" height="36" rx="4" fill="#4a90d9" opacity="0.85"/>
                    <rect x="12" y="14" width="14" height="10" rx="2" fill="#3a7abf"/>
                    <path d="M8 28 L2 22 L8 22" fill="#3a7abf" opacity="0.7"/>
                  </g>
                  <rect x="20" y="8" width="100" height="18" rx="4" fill="#f0c040" opacity="0.15"/>
                  <text x="70" y="21" textAnchor="middle" fontSize="9" fill="#b07800" fontWeight="600">ČIŠTĚNÍ</text>
                </g>
                <path d="M484 100 L524 100" stroke="#c8b89a" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M520 95 L526 100 L520 105" stroke="#c8b89a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <g transform="translate(532, 20)">
                  <rect x="0" y="0" width="200" height="160" rx="6" fill="#f5f9f5" stroke="#c8ddc8" strokeWidth="1"/>
                  <circle cx="45" cy="80" r="18" fill="#5a9e6f" opacity="0.12"/>
                  <path d="M36 80 L42 86 L54 72" stroke="#5a9e6f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <rect x="20" y="8" width="100" height="18" rx="4" fill="#5a9e6f" opacity="0.15"/>
                  <text x="70" y="21" textAnchor="middle" fontSize="9" fill="#3a7e4f" fontWeight="600">VÝSLEDEK</text>
                </g>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#priciny">Proč plíseň vzniká</a></li>
                <li><a href="#typy">Typy plísní a jejich nebezpečnost</a></li>
                <li><a href="#likvidace">Jak plíseň odstranit krok za krokem</a></li>
                <li><a href="#metody">Srovnání metod – Savo vs. fungicidy vs. ocet</a></li>
                <li><a href="#roh">Plíseň v rohu a za nábytkem</a></li>
                <li><a href="#chyby-ostatnich">Poučte se z chyb ostatních</a></li>
                <li><a href="#prevence">Prevence – jak plíseň zastavit jednou provždy</a></li>
                <li><a href="#chyby">Nejčastější chyby</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="priciny">
              <h2>Proč plíseň vzniká – skutečné příčiny</h2>
              <p>Plíseň není smůla ani nečistota. Je to přirozená reakce na konkrétní podmínky: <strong>vlhkost, teplo a nedostatek proudění vzduchu</strong>. Bez pochopení příčin je jakékoli čištění jen dočasné řešení – plíseň se vrátí.</p>
              <p>Plísňové spóry jsou přirozeně přítomny v každém vzduchu. Problém nastává, když najdou ideální podmínky pro množení: relativní vlhkost vzduchu nad 70 %, teplota mezi 10–35 °C a organický podklad (omítka, tapeta, dřevo, spáry).</p>
              <ul>
                <li><strong>Tepelné mosty:</strong> Místa kde se stěna ochlazuje pod rosný bod – rohy, ostění oken, místa za nábytkem přisunutým ke zdi.</li>
                <li><strong>Nedostatečné větrání:</strong> Moderní plastová okna těsní perfektně, ale zabraňují přirozené výměně vzduchu. Vlhkost z vaření, sprchování a dýchání nemá kam odejít.</li>
                <li><strong>Skrytá závada:</strong> Prasklina v omítce, netěsnící okno nebo porucha hydroizolace. Plíseň v jednom místě přes celou zimu = pravděpodobně stavební závada.</li>
                <li><strong>Nevhodné topení:</strong> Málo vytápěná místnost nebo přerušované topení způsobuje kondenzaci vlhkosti na chladných površích.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Kup si vlhkoměr (100–200 Kč) a změř vlhkost v každé místnosti. Ideální rozmezí je <strong>40–60 %</strong>. Pokud máš dlouhodobě nad 65 %, plíseň je jen otázkou času.</div>
            </section>

            <section id="typy">
              <h2>Typy plísní a jejich nebezpečnost</h2>
              <p>Ne každá plíseň je stejně nebezpečná. Barva ti dá první orientaci – ale definitivní diagnózu provede jen laboratorní test.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ plísně</th><th>Barva / vzhled</th><th>Nejčastější místo</th><th>Zdravotní riziko</th><th>Obtížnost odstranění</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Cladosporium</strong></td><td>Zelená až černá, sametová</td><td>Okna, záclony, koupelna</td><td>⚠️ Střední – alergie, astma</td><td>Nízká</td></tr>
                    <tr><td><strong>Aspergillus</strong></td><td>Zelená, žlutá, černá</td><td>Stěny, strop, klimatizace</td><td>⚠️⚠️ Vysoké</td><td>Střední</td></tr>
                    <tr><td><strong>Stachybotrys (černá)</strong></td><td>Černá, lesklá, mazlavá</td><td>Vlhké stěny, sádrokarton</td><td>🔴 Velmi vysoké – nutný odborník</td><td>Vysoká</td></tr>
                    <tr><td><strong>Penicillium</strong></td><td>Modrá až zelená, prašná</td><td>Tapety, izolace, potraviny</td><td>⚠️ Střední – alergie</td><td>Střední</td></tr>
                    <tr><td><strong>Bílá plíseň</strong></td><td>Bílá, bavlnitá</td><td>Půda, dřevo, sklep</td><td>⚠️ Nízké až střední</td><td>Nízká</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>⚠️ Varování:</strong> Pokud najdeš lesklou černou plíseň (Stachybotrys), <strong>nečisti ji sám</strong>. Mechanické narušení uvolní toxické spóry do vzduchu. Kontaktuj odbornou firmu na sanaci plísní.</div>
            </section>

            <section id="likvidace">
              <h2>Jak plíseň odstranit krok za krokem</h2>
              <p>Správný postup likvidace plísně není složitý, ale musíš dodržet pořadí. Přeskočení jakéhokoli kroku znamená, že plíseň se vrátí – obvykle do 2–3 měsíců.</p>
              <ul>
                <li><strong>Krok 1 – Ochrana:</strong> Nasaď respirátor (min. FFP2), gumové rukavice a brýle. Nikdy nečisti plíseň bez ochrany.</li>
                <li><strong>Krok 2 – Větrání místnosti:</strong> Otevři okna a dveře. Plíseň čisti vždy v dobře větraném prostoru.</li>
                <li><strong>Krok 3 – Nanes přípravek:</strong> Aplikuj fungicid nebo Savo na postižené místo. Nechej působit minimálně 15–30 minut.</li>
                <li><strong>Krok 4 – Mechanické odstranění:</strong> Odstraň plíseň tvrdým kartáčem nebo houbou. Použitý materiál ihned uzavři do plastového sáčku a vyhoď.</li>
                <li><strong>Krok 5 – Opakovaný nátěr:</strong> Po osušení nanes přípravek znovu a nech zaschnout.</li>
                <li><strong>Krok 6 – Přetření protiplísňovou barvou:</strong> Běžná malířská barva plíseň nezastaví.</li>
                <li><strong>Krok 7 – Odstraň příčinu:</strong> Bez odstranění příčiny se plíseň vrátí do 3–6 měsíců.</li>
              </ul>
            </section>

            <section id="metody">
              <h2>Srovnání metod likvidace – Savo vs. fungicidy vs. ocet</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Metoda</th><th>Složení</th><th>Účinnost</th><th>Bezpečnost</th><th>Cena</th><th>Vhodné pro</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Savo (chlornan sodný)</strong></td><td>Chlor ~5 %</td><td>⭐⭐⭐⭐ Vysoká</td><td>Dráždivé, nutná ventilace</td><td>~50 Kč/l</td><td>Koupelna, spáry, omítka</td></tr>
                    <tr><td><strong>Fungicidy (HG, Anti-Schimmel)</strong></td><td>Kvartérní amoniové soli</td><td>⭐⭐⭐⭐⭐ Velmi vysoká</td><td>Bezpečnější, bez zápachu</td><td>~200–400 Kč</td><td>Stěny, strop, citlivé plochy</td></tr>
                    <tr><td><strong>Ocet (bílý, 10 %)</strong></td><td>Kyselina octová</td><td>⭐⭐⭐ Střední</td><td>Bezpečný, přírodní</td><td>~30 Kč/l</td><td>Lehká plíseň, prevence</td></tr>
                    <tr><td><strong>Profesionální sanace</strong></td><td>Průmyslové biocidy</td><td>⭐⭐⭐⭐⭐ Maximální</td><td>Odborný zásah</td><td>3 000–15 000 Kč</td><td>Rozsáhlá nebo toxická plíseň</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>⚠️ Důležité:</strong> Savo NIKDY nemíchej s octem, WC gelem ani jiným čisticím prostředkem. Vzniká toxický chlor.</div>
            </section>

            <section id="roh">
              <h2>Plíseň v rohu zdi a za nábytkem</h2>
              <p>Nejčastější místa výskytu plísně jsou <strong>rohy místností, ostění oken a stěny za nábytkem</strong> — přesně tam kde proudění vzduchu chybí úplně.</p>
              <ul>
                <li><strong>Plíseň v koupelně bez okna:</strong> Koupelnový ventilátor je nutností. Spouštěj ho při sprchování a nechej běžet ještě 15 minut po skončení.</li>
                <li><strong>Plíseň na ostění okna:</strong> Typický příznak tepelného mostu nebo špatného těsnění. Zkontroluj zda okno správně těsní.</li>
                <li><strong>Plíseň za skříní:</strong> Odsuň nábytek, vyčisti zeď. Nenechávej skříň zpět bez vzduchové mezery — minimálně <strong>5–8 cm od zdi</strong>.</li>
                <li><strong>Plíseň na stropě:</strong> Nejčastěji způsobena zatékáním shora nebo kondenzací. Zkontroluj zda nehrozí zatékání.</li>
              </ul>
            </section>

            {/* ═══════════════════════════════════════════
                NOVÁ SEKCE: CHYBY OSTATNÍCH
            ═══════════════════════════════════════════ */}
            <section id="chyby-ostatnich">
              <h2>Poučte se z chyb ostatních</h2>
              <p>Tyhle chyby dělají lidé znovu a znovu. Každá z nich stála čas, peníze nebo zdraví. Přečti si je dřív než začneš.</p>

              <div className="mistakes-grid">
                {MISTAKES.map((m, i) => (
                  <div key={i} className="mistake-card">
                    <div className="mistake-header">
                      <span className="mistake-icon">{m.icon}</span>
                      <span className="mistake-label">Chyba č. {i + 1}</span>
                    </div>
                    <div className="mistake-title">„{m.mistake}"</div>
                    <div className="mistake-story">
                      <span className="mistake-quote-mark">❝</span>
                      {m.story}
                    </div>
                    <div className="mistake-lesson">
                      <span className="mistake-lesson-label">✅ Správně:</span> {m.lesson}
                    </div>
                  </div>
                ))}
              </div>

              <div className="article-tip">
                <strong>💡 Chceš přidat vlastní zkušenost?</strong> Každá chyba kterou jsi zažil pomáhá dalším. Příběhy ze života jsou cennější než teorie.
              </div>
            </section>

            <section id="likvidace-plisne-v-byte">
              <h2>Likvidace plísně v bytě – kdy to zvládneš sám a kdy ne</h2>
              <p>Likvidace plísně v bytě je zvládnutelná svépomocí pokud je plíseň na povrchu, plocha je menší než 1 m² a nejde o černou lesklou plíseň (Stachybotrys). Ve všech ostatních případech doporučujeme odbornou firmu.</p>
              <ul>
                <li><strong>Zvládneš sám:</strong> Plíseň na omítce nebo spárách do 1 m², koupelnová plíseň z kondenzace, opakující se lehká plíseň v rohu okna.</li>
                <li><strong>Odborník nutný:</strong> Plíseň větší než 1 m², lesklá černá plíseň, plíseň uvnitř stěny nebo pod podlahou, plíseň která se vrací i po správném ošetření.</li>
                <li><strong>Orientační cena odborné sanace:</strong> 3 000–15 000 Kč podle rozsahu. Požaduj certifikát o provedené sanaci — hodí se při reklamaci u pronajímatele.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Před zavoláním odborníka nafotografuj plíseň, změř vlhkost vlhkoměrem a zaznamenej kde a jak dlouho se plíseň vyskytuje. Firmy díky tomu rychleji diagnostikují příčinu a dají přesnější nabídku.</div>
            </section>

            <section id="prevence">
              <h2>Prevence – jak plíseň zastavit jednou provždy</h2>
              <ul>
                <li><strong>✅ Větrání 2× denně po dobu 10 minut:</strong> Otevři okna na protilehlých stranách bytu. Za 10 minut vyměníš celý vzduch bez výrazného ochlazení.</li>
                <li><strong>✅ Udržuj vlhkost vzduchu pod 60 %:</strong> Pořiď vlhkoměr a odvlhčovač do problematických místností.</li>
                <li><strong>✅ Odsuň nábytek min. 5 cm od vnějších zdí:</strong> Za nábytkem přisunutým ke zdi se hromadí studený vzduch a vlhkost.</li>
                <li><strong>✅ Zkontroluj tepelné mosty:</strong> Pokud se plíseň vrací stále na stejné místo, jde pravděpodobně o tepelný most.</li>
                <li><strong>✅ Používej protiplísňovou barvu při malování:</strong> Přidává jen 10–20 % k ceně a výrazně zpomaluje návrat plísně.</li>
              </ul>
            </section>

            <section id="chyby">
              <h2>Nejčastější chyby při odstraňování plísně</h2>
              <ul>
                <li><strong>Přetření plísně barvou bez předchozího ošetření:</strong> Barva plíseň nezabije – jen ji zakryje. Za 2–4 týdny probublá zpět.</li>
                <li><strong>Čištění suchým kartáčem:</strong> Mechanické narušení bez přípravku rozhodí spóry do celé místnosti.</li>
                <li><strong>Použití přípravku na mokrou zeď:</strong> Fungicidy fungují nejlépe na suché a teplé ploše.</li>
                <li><strong>Ignorování příčiny:</strong> Bez odstranění tepelného mostu nebo zlepšení větrání se plíseň vrátí garantovaně.</li>
                <li><strong>Čištění bez ochrany:</strong> Respirátor FFP2 a gumové rukavice jsou nutností — ne volbou.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Jak se zbavit plísně na zdi rychle?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Nasaď respirátor FFP2 a rukavice. Nanes Savo nebo fungicid, nechej 20 minut působit. Odstraň kartáčem do plastového sáčku. Přetři protiplísňovou barvou. Celý postup trvá 1–2 hodiny. Bez zlepšení větrání se ale plíseň vrátí.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Je plíseň v bytě důvod k reklamaci u pronajímatele?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ano, pokud je způsobena stavební závadou (tepelný most, netěsnost, závada hydroizolace). Pronajímatel je povinen udržovat byt ve způsobilém stavu. Zdokumentuj plíseň fotografiemi, změř vlhkost a informuj pronajímatele písemně.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Může plíseň způsobit zdravotní problémy?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ano. Plísňové spóry způsobují alergické reakce, chronický kašel, záněty dýchacích cest a zhoršení astmatu. Toxická černá plíseň (Stachybotrys) produkuje mykotoxiny které mohou způsobit závažné nemoci.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Pomáhá ocet na plíseň?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Bílý ocet (alespoň 10%) má mírné fungicidní účinky. Na lehkou nebo čerstvou plíseň může pomoci. Na rozvinutou nebo opakující se plíseň nestačí — doporučujeme ho jako doplněk prevence, ne jako hlavní metodu likvidace.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak dlouho trvá než se plíseň vrátí po vyčištění?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Pokud neodstraníš příčinu, plíseň se vrátí typicky za 2–6 měsíců. Pokud použiješ kvalitní fungicid, přetřeš protiplísňovou barvou a zlepšíš větrání, může byt zůstat bez plísně roky.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Kdy volat odbornou firmu na sanaci plísně?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Odborníka vol vždy když: (1) plíseň pokrývá plochu větší než 1 m², (2) plíseň je lesklá černá (možný Stachybotrys), (3) plíseň se vrací i po opakovaném ošetření. Průměrná cena sanace je 3 000–15 000 Kč.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/jak-odstranit-plisen-na-zdi" title="Jak se zbavit plísně na zdi – likvidace plísně v bytě 2026" />

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
                <li><a href="#priciny">Proč plíseň vzniká</a></li>
                <li><a href="#typy">Typy plísní</a></li>
                <li><a href="#likvidace">Jak plíseň odstranit</a></li>
                <li><a href="#metody">Srovnání metod</a></li>
                <li><a href="#roh">Plíseň v rohu</a></li>
                <li><a href="#likvidace-plisne-v-byte">Likvidace plísně v bytě</a></li>
                <li><a href="#chyby-ostatnich">Chyby ostatních</a></li>
                <li><a href="#prevence">Prevence</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">📥 Ke stažení</div>
              {DOWNLOADS.map(r => (
                <a key={r.href} href={r.href} download style={{ display:"flex", alignItems:"center", gap:"8px", padding:"8px 0", borderBottom:"1px solid var(--border)", textDecoration:"none" }}>
                  <span style={{ fontSize:"14px" }}>{r.icon}</span>
                  <span style={{ fontSize:"12px", fontWeight:600, color:"#2a2a28", lineHeight:1.3 }}>{r.title}</span>
                </a>
              ))}
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/sezonni-udrzba" className="sidebar-cat-link">🍂 Sezónní údržba<span>21 článků →</span></Link>
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
        .hero-illustration{margin:0 0 36px;border-radius:12px;overflow:hidden;border:1px solid var(--border)}
        .hero-svg{width:100%;height:auto;display:block}
        .toc{background:var(--surface);border-radius:10px;padding:20px 24px;margin-bottom:40px}
        .toc-label{font-size:11px;font-weight:700;letter-spacing:.10em;text-transform:uppercase;color:var(--muted);margin-bottom:12px}
        .toc-list{padding-left:18px;display:flex;flex-direction:column;gap:6px}
        .toc-list li a{font-size:14px;color:var(--muted);text-decoration:none;font-weight:400;transition:color 120ms}
        .toc-list li a:hover{color:var(--text)}
        .article-body section{margin-bottom:48px}
        .article-body h2{font-family:var(--font-serif);font-size:clamp(20px,2.5vw,26px);font-weight:400;line-height:1.2;margin-bottom:16px;border-top:1px solid var(--border);padding-top:24px;margin-top:8px}
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

        /* MISTAKES */
        .mistakes-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:24px 0}
        .mistake-card{background:#fff;border:1px solid #ede8e0;border-radius:12px;padding:20px;display:flex;flex-direction:column;gap:10px;border-top:3px solid #e07a5f}
        .mistake-header{display:flex;align-items:center;gap:8px}
        .mistake-icon{font-size:20px}
        .mistake-label{font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#e07a5f}
        .mistake-title{font-size:15px;font-weight:700;color:#1a1a18;line-height:1.3}
        .mistake-story{font-size:13px;line-height:1.65;color:#6a6a60;background:#faf8f5;border-radius:6px;padding:12px;position:relative}
        .mistake-quote-mark{font-size:20px;color:#d0c8c0;margin-right:4px;vertical-align:-4px}
        .mistake-lesson{font-size:13px;line-height:1.6;color:#2a4a2a;background:#f0fdf4;border-radius:6px;padding:10px 12px}
        .mistake-lesson-label{font-weight:700;color:#3a7e4f}

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
        @media(max-width:960px){.article-layout{grid-template-columns:1fr;gap:0}.article-sidebar{position:static;margin-top:40px}.related-grid{grid-template-columns:1fr}.mistakes-grid{grid-template-columns:1fr}}
      `}</style>
    </>
  );
}
