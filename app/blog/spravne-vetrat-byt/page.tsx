import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak správně větrat byt – efektivní větrání v létě i v zimě 2026",
  description: "Křížové větrání, rekuperace nebo mikroventilace? Kompletní průvodce větráním bytu bez plísně, bez tepelných ztrát a se zdravým vzduchem.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/spravne-vetrat-byt" },
  openGraph: { title: "Jak správně větrat byt 2026", description: "Křížové větrání, rekuperace nebo mikroventilace? Průvodce větráním bez plísně.", url: "https://www.domovniguru.cz/blog/spravne-vetrat-byt", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-13T08:00:00Z", modifiedTime: "2026-04-13T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak správně větrat byt 2026", description: "Křížové větrání, rekuperace nebo mikroventilace? Průvodce větráním bez plísně." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.domovniguru.cz/blog/spravne-vetrat-byt#article",
      "headline": "Jak správně větrat byt – efektivní větrání v létě i v zimě 2026",
      "datePublished": "2026-04-13T08:00:00Z",
      "dateModified": "2026-04-13T08:00:00Z",
      "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "inLanguage": "cs",
      "keywords": ["jak správně větrat byt", "větrání bytu", "křížové větrání", "mikroventilace okna", "větrání bez tepelných ztrát", "jak větrat v zimě", "plíseň větrání", "rekuperace vzduchu"]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.domovniguru.cz/blog/spravne-vetrat-byt#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Jak dlouho větrat byt?", "acceptedAnswer": { "@type": "Answer", "text": "V zimě stačí 5–10 minut intenzivního křížového větrání 2–3× denně. V létě větrejte ráno a večer, přes den okna zavřená. Krátké intenzivní větrání je efektivnější než celodenní pootevřené okno." } },
        { "@type": "Question", "name": "Kdy větrat – ráno nebo večer?", "acceptedAnswer": { "@type": "Answer", "text": "V létě větrejte ráno před 8:00 a večer po 20:00, kdy je venkovní vzduch nejchladnější. V zimě kdykoli přes den, ideálně po vaření a po sprchování." } },
        { "@type": "Question", "name": "Jak větrat v zimě bez tepelných ztrát?", "acceptedAnswer": { "@type": "Answer", "text": "Krátkým intenzivním větráním (5–10 minut, okna dokořán) vyměníte vzduch a stěny nestihnou vychladnout. Při mikroventilaci (pootevřené okno) naopak stěny chladnou celé hodiny a tepelné ztráty jsou mnohem vyšší." } },
        { "@type": "Question", "name": "Pomáhá větrání proti plísni?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, větrání je nejdůležitější prevence plísně. Vlhkost ze sprchy, vaření a dýchání musí mít kam odejít. Ideální vlhkost je 40–60 %. Větrání 2× denně po 10 minutách výrazně snižuje riziko plísně." } },
      ]
    }
  ]
};

const RELATED = [
  { title: "Jak se zbavit plísně v bytě jednou provždy", href: "/blog/jak-odstranit-plisen-na-zdi", read: "10 min" },
  { title: "Jak se zbavit vlhkosti v bytě", href: "/blog/zbavit-se-vlhkosti-v-byte", read: "5 min" },
  { title: "Příprava domu na zimu – kompletní checklist", href: "/blog/priprava-domu-na-zimu", read: "10 min" },
  { title: "Jak ušetřit na vytápění bez výměny kotle", href: "/blog/usetrit-na-vytapeni", read: "5 min" },
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
              <span>Jak správně větrat byt</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">❄️ Sezónní údržba</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak správně větrat byt – bez plísně a bez tepelných ztrát</h1>
              <p className="article-lead">Větrání není jen o otevření okna. Špatný způsob větrání způsobuje plíseň, zbytečné tepelné ztráty nebo nekvalitní vzduch. Ukážeme ti jak větrat efektivně – v zimě i v létě.</p>
              <div className="article-meta-row"><span>Aktualizováno: 13. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/spravne-vetrat-byt" title="Jak správně větrat byt – efektivní větrání v létě i v zimě 2026" />
            </header>

            {/* HERO SVG */}
            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 210" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="210" fill="#f0f6fb"/>
                <defs>
                  <linearGradient id="roomBg" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#e8f0f8"/><stop offset="100%" stopColor="#dce8f4"/>
                  </linearGradient>
                </defs>

                {/* ── ŠPATNÉ VĚTRÁNÍ ── */}
                <g transform="translate(20,15)">
                  <rect x="0" y="0" width="200" height="170" rx="8" fill="url(#roomBg)" stroke="#b8cce0" strokeWidth="1.2"/>
                  <rect x="20" y="8" width="120" height="18" rx="4" fill="#e07a5f" opacity="0.15"/>
                  <text x="80" y="21" textAnchor="middle" fontSize="9" fill="#c0503a" fontWeight="700">❌ ŠPATNÉ VĚTRÁNÍ</text>
                  {/* okno pootevřené */}
                  <rect x="70" y="30" width="60" height="50" rx="3" fill="#a8c8e8" stroke="#7aaad0" strokeWidth="1"/>
                  <line x1="100" y1="30" x2="100" y2="80" stroke="#7aaad0" strokeWidth="1"/>
                  <line x1="70" y1="55" x2="130" y2="55" stroke="#7aaad0" strokeWidth="1"/>
                  {/* pootevřené - malá šipka */}
                  <rect x="128" y="40" width="6" height="30" rx="2" fill="#5a9aba" opacity="0.6"/>
                  <text x="100" y="95" textAnchor="middle" fontSize="7.5" fill="#4a7a9a" fontWeight="600">mikroventilace</text>
                  <text x="100" y="105" textAnchor="middle" fontSize="7" fill="#6a9aba">(pootevřené celý den)</text>
                  {/* vlhkost kapky */}
                  {[[30,120],[50,110],[70,130],[90,115],[110,125],[140,118],[160,128]].map(([x,y],i)=>(
                    <ellipse key={i} cx={x} cy={y} rx="5" ry="7" fill="#6ba3c8" opacity="0.35"/>
                  ))}
                  {/* plíseň v rohu */}
                  {[[15,145],[22,152],[12,158],[28,160],[18,165]].map(([x,y],i)=>(
                    <circle key={i} cx={x} cy={y} r="4" fill="#2d3820" opacity="0.5"/>
                  ))}
                  <text x="100" y="160" textAnchor="middle" fontSize="7.5" fill="#c05030" fontWeight="600">vlhkost + plíseň</text>
                  {/* Teplota šipka dolů */}
                  <path d="M170 110 L170 145" stroke="#e07a5f" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M165 140 L170 147 L175 140" stroke="#e07a5f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <text x="182" y="130" fontSize="7" fill="#c05030" fontWeight="600">−teplo</text>
                </g>

                {/* šipka */}
                <g transform="translate(232,95)">
                  <path d="M0 15 L50 15" stroke="#c8b89a" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M44 9 L52 15 L44 21" stroke="#c8b89a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <text x="25" y="10" textAnchor="middle" fontSize="8" fill="#a09080" fontWeight="600">správně</text>
                </g>

                {/* ── SPRÁVNÉ VĚTRÁNÍ (křížové) ── */}
                <g transform="translate(292,15)">
                  <rect x="0" y="0" width="200" height="170" rx="8" fill="#f0f8f0" stroke="#b8d8b8" strokeWidth="1.2"/>
                  <rect x="20" y="8" width="120" height="18" rx="4" fill="#5a9e6f" opacity="0.15"/>
                  <text x="80" y="21" textAnchor="middle" fontSize="9" fill="#3a7e4f" fontWeight="700">✅ KŘÍŽOVÉ VĚTRÁNÍ</text>
                  {/* okno levé — otevřené dokořán */}
                  <rect x="10" y="35" width="45" height="55" rx="3" fill="#a8d8c8" stroke="#6ab8a0" strokeWidth="1"/>
                  <line x1="32" y1="35" x2="32" y2="90" stroke="#6ab8a0" strokeWidth="1"/>
                  <line x1="10" y1="62" x2="55" y2="62" stroke="#6ab8a0" strokeWidth="1"/>
                  {/* okno pravé — otevřené dokořán */}
                  <rect x="145" y="35" width="45" height="55" rx="3" fill="#a8d8c8" stroke="#6ab8a0" strokeWidth="1"/>
                  <line x1="167" y1="35" x2="167" y2="90" stroke="#6ab8a0" strokeWidth="1"/>
                  <line x1="145" y1="62" x2="190" y2="62" stroke="#6ab8a0" strokeWidth="1"/>
                  {/* vzduch proud */}
                  {[45,60,75].map((y,i)=>(
                    <g key={i}>
                      <path d={`M55 ${y} L145 ${y}`} stroke="#4a9e7f" strokeWidth={i===1?2:1.2} strokeLinecap="round" strokeDasharray="6,4" opacity="0.7"/>
                      <path d={`M139 ${y-5} L146 ${y} L139 ${y+5}`} stroke="#4a9e7f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.7"/>
                    </g>
                  ))}
                  <text x="100" y="105" textAnchor="middle" fontSize="8" fill="#3a7e4f" fontWeight="600">5–10 minut dokořán</text>
                  {/* hodiny */}
                  <circle cx="100" cy="130" r="14" fill="#5a9e6f" opacity="0.12" stroke="#5a9e6f" strokeWidth="1"/>
                  <text x="100" y="135" textAnchor="middle" fontSize="9" fill="#3a7e4f" fontWeight="700">2–3×</text>
                  <text x="100" y="148" textAnchor="middle" fontSize="7.5" fill="#5a9e6f">denně</text>
                  <text x="100" y="165" textAnchor="middle" fontSize="7.5" fill="#3a7e4f" fontWeight="600">vzduch vyměněn ✓</text>
                </g>

                {/* šipka 2 */}
                <g transform="translate(504,95)">
                  <path d="M0 15 L50 15" stroke="#c8b89a" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M44 9 L52 15 L44 21" stroke="#c8b89a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <text x="25" y="10" textAnchor="middle" fontSize="8" fill="#a09080" fontWeight="600">výsledek</text>
                </g>

                {/* ── VÝSLEDEK ── */}
                <g transform="translate(564,15)">
                  <rect x="0" y="0" width="175" height="170" rx="8" fill="#f5fdf5" stroke="#c8e8c8" strokeWidth="1.2"/>
                  <rect x="15" y="8" width="110" height="18" rx="4" fill="#5a9e6f" opacity="0.12"/>
                  <text x="70" y="21" textAnchor="middle" fontSize="9" fill="#3a7e4f" fontWeight="700">VÝSLEDEK</text>
                  {[
                    { y: 50, text: "✓ Čerstvý vzduch" },
                    { y: 72, text: "✓ Vlhkost 40–60 %" },
                    { y: 94, text: "✓ Bez plísně" },
                    { y: 116, text: "✓ Teplo uvnitř" },
                    { y: 138, text: "✓ Zdravý spánek" },
                  ].map(({y,text})=>(
                    <g key={y}>
                      <circle cx="25" cy={y-3} r="8" fill="#5a9e6f" opacity="0.12"/>
                      <text x="38" y={y+2} fontSize="10" fill="#2a4a3a" fontWeight="400">{text}</text>
                    </g>
                  ))}
                </g>

                {/* dolní popis */}
                <rect y="190" width="760" height="20" fill="#e8f0f8" opacity="0.5"/>
                <text x="130" y="203" textAnchor="middle" fontSize="8" fill="#5a7a9a" fontWeight="600" letterSpacing="0.04em">❌ MIKROVENTILACE = plíseň + tepelné ztráty</text>
                <text x="430" y="203" textAnchor="middle" fontSize="8" fill="#3a7e4f" fontWeight="600" letterSpacing="0.04em">✅ KŘÍŽOVÉ VĚTRÁNÍ 5–10 MIN = efektivní výměna vzduchu</text>
                <text x="660" y="203" textAnchor="middle" fontSize="8" fill="#3a7e4f" fontWeight="600" letterSpacing="0.04em">💚 zdravý vzduch</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#proc">Proč je větrání důležité</a></li>
                <li><a href="#zpusoby">Způsoby větrání – srovnání</a></li>
                <li><a href="#zima">Jak větrat v zimě bez tepelných ztrát</a></li>
                <li><a href="#leto">Jak větrat v létě – kdy a jak</a></li>
                <li><a href="#mistnosti">Větrání podle místnosti</a></li>
                <li><a href="#vlhkost">Vlhkost a plíseň – spojitost</a></li>
                <li><a href="#chyby">Nejčastější chyby</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="proc">
              <h2>Proč je větrání důležité – a co se stane bez něj</h2>
              <p>Průměrný člověk vdechne za noc spánku tolik vzduchu, že v malém pokoji bez větrání výrazně stoupne koncentrace CO₂. Výsledek: ráno se cítíš unavený, máš bolesti hlavy a špatně se soustředíš. To není přepracování — je to špatný vzduch.</p>
              <p>Větrání ale neslouží jen k doplnění kyslíku. <strong>Vlhkost je druhý klíčový problém.</strong> Sprchování, vaření, sušení prádla a samotné dýchání produkují dohromady 8–12 litrů vodní páry denně v průměrné domácnosti. Bez větrání tato vlhkost kondenzuje na chladných površích — a vzniká plíseň.</p>
              <ul>
                <li><strong>CO₂ nad 1 000 ppm:</strong> Únava, ospalost, špatná koncentrace. V nevětraném pokoji se přes noc běžně dostaneš na 2 000–3 000 ppm.</li>
                <li><strong>Vlhkost nad 65 %:</strong> Ideální podmínky pro plíseň. Stačí několik dní bez větrání po sprchování.</li>
                <li><strong>Pachy a VOC:</strong> Čisticí prostředky, nábytek a podlahy uvolňují těkavé organické sloučeniny. Větrání je odvede.</li>
                <li><strong>Alergie:</strong> Roztoči se daří při vlhkosti nad 55 %. Pravidelné větrání snižuje jejich populaci.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pořiď si levný CO₂ měřič (500–1 500 Kč) a zjistíš přesně kdy a jak větrat. Po týdnu měření uvidíš vzorce — a přestaneš větrat náhodně.</div>
            </section>

            <section id="zpusoby">
              <h2>Způsoby větrání – srovnání</h2>
              <p>Ne všechno větrání je stejně efektivní. Tady je přehled od nejhoršího k nejlepšímu.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Způsob</th><th>Efektivita</th><th>Tepelné ztráty</th><th>Kdy použít</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Mikroventilace</strong> (pootevřené okno)</td><td>⭐⭐ Nízká</td><td>🔴 Vysoké — stěny chladnou hodiny</td><td>Jen v létě při velkých vedrech</td></tr>
                    <tr><td><strong>Špaletové větrání</strong> (jedno okno dokořán)</td><td>⭐⭐⭐ Střední</td><td>🟡 Střední</td><td>Rychlé větrání jedné místnosti</td></tr>
                    <tr><td><strong>Křížové větrání</strong> (protilehlá okna/dveře)</td><td>⭐⭐⭐⭐⭐ Výborná</td><td>🟢 Nízké — vzduch vyměněn za 5–10 min</td><td>Ideální pro každodenní větrání</td></tr>
                    <tr><td><strong>Rekuperace</strong> (řízeně větrání s výměníkem)</td><td>⭐⭐⭐⭐⭐ Maximální</td><td>🟢 Minimální — zpětné získávání tepla</td><td>Novostavby a rekonstrukce</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Křížové větrání funguje i v bytě bez protilehlých oken — otevři okno a dveře do chodby nebo jiné místnosti. Průvan který vznikne je přesně to co chceš.</div>
            </section>

            <section id="zima">
              <h2>Jak větrat v zimě bez tepelných ztrát</h2>
              <p>Tady narážíme na největší mýtus o větrání: <strong>mikroventilace (pootevřené okno) NENÍ úsporná.</strong> Při pootevřeném okně chladnou stěny, podlaha a nábytek po celé hodiny. Pak musíš zahřát celou hmotu bytu znovu — to stojí mnohem víc tepla než 10 minut křížového větrání.</p>
              <ul>
                <li><strong>Krátkodobé intenzivní větrání:</strong> Otevři okna a dveře dokořán na 5–10 minut. Vzduch se vymění, stěny nestihnou vychladnout. Pak okna zavři.</li>
                <li><strong>Frekvence v zimě:</strong> 2–3× denně — ráno po vstávání, po vaření/sprchování a večer před spaním.</li>
                <li><strong>Tepelné ztráty:</strong> Při 10minutovém křížovém větrání při –5 °C venku ztratíš přibližně 0,5–1 kWh tepla. Při celodením mikroventilaci klidně 5–10 kWh.</li>
                <li><strong>Vypni topení při větrání:</strong> Před otevřením oken snižte termostat nebo zavři radiátor. Topení do otevřeného okna je přímá ztráta peněz.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Nejlepší čas na větrání v zimě je kolem poledne, kdy je venku nejteplejší. Ranní větrání bývá nejstudenější — udělej ho rychle a krátce.</div>
            </section>

            <section id="leto">
              <h2>Jak větrat v létě – strategie pro horké dny</h2>
              <p>V létě je strategie opačná — chceš dostat ven teplo a zachovat chlad. Klíčový princip: <strong>větrej kdy je venku chladněji než uvnitř.</strong></p>
              <ul>
                <li><strong>Ranní větrání (do 8–9 hod):</strong> Vzduch je nejchladnější, vyměň ho před tím než se byt zahřeje.</li>
                <li><strong>Přes den — okna zavřená:</strong> Pokud je venku teplejší než uvnitř, větráním teplo dovnitř přiváděš. Zavři okna a stíni roletami nebo žaluziemi.</li>
                <li><strong>Večerní větrání (po 20 hod):</strong> Jakmile venkovní teplota klesne pod teplotu bytu, větr znovu intenzivně.</li>
                <li><strong>Noční větrání:</strong> Nejefektivnější způsob ochlazení — otevři okna a nech byt vychladnout přes noc. Ráno zavři.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Stínění oken je 3× efektivnější než klimatizace. Venkovní rolety nebo markýzy zabrání slunci ohřát byt — a pak není co chladit.</div>
            </section>

            <section id="mistnosti">
              <h2>Větrání podle místnosti – co kde potřebuješ</h2>
              <h3>Koupelna</h3>
              <p>Nejkritičtější místnost. Po každém sprchování nebo koupání musí vlhkost odejít. Bez okna je nutný ventilátor — a to nejlevnější co koupíš (500–1 500 Kč) se ti vrátí na zabráněné škodě od plísně mnohonásobně. Nechej ho běžet 15 minut po sprchování.</p>
              <h3>Kuchyně</h3>
              <p>Vaření produkuje vlhkost, pachy a oxid uhličitý. Digestoř odvádí vzduch ven jen pokud má odtah do fasády — recirkulační digestoř pouze filtruje pachy, vlhkost zpět vrací. Při vaření větrej oknem.</p>
              <h3>Ložnice</h3>
              <p>Priorita je ranní větrání po vstávání. Dvě osoby vyprodukují za noc cca 1,5 litru vlhkosti dýcháním. Odhrnout peřiny a větrát 10 minut ráno je minimum.</p>
              <h3>Obývací pokoj</h3>
              <p>Větrání po vaření, po návštěvách a večer před spaním. Pokud máš v obýváku počítač nebo jiné tepelné zdroje, větrání je důležitější.</p>
            </section>

            <section id="vlhkost">
              <h2>Vlhkost a plíseň – přímá spojitost s větráním</h2>
              <p>Plíseň roste při vlhkosti nad 70 % a teplotě 10–35 °C. Větrání je <strong>nejdůležitější a nejlevnější prevence</strong> — levnější než jakýkoli fungicid nebo renovace.</p>
              <ul>
                <li><strong>Ideální vlhkost:</strong> 40–60 %. Pod 30 % je vzduch příliš suchý (dráždí sliznice), nad 65 % roste riziko plísně.</li>
                <li><strong>Vlhkoměr:</strong> Investuj 100–300 Kč do základního vlhkoměru. Bez měření větráš naslepo.</li>
                <li><strong>Zdroje vlhkosti v bytě:</strong> Sprchování (+2 l), vaření (+1 l), sušení prádla (+2 l), dýchání 2 osob (+1,5 l) = 6,5 litru denně při běžném provozu.</li>
                <li><strong>Odvlhčovač:</strong> Pokud i přes pravidelné větrání vlhkost neklesá pod 65 %, jde pravděpodobně o stavební závadu nebo nedostatečný odtah z koupelny. Odvlhčovač je dočasné řešení, ne náhrada za větrání.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud po sprchování kondenzuje voda na oknech nebo zrcadle ještě hodinu po skončení, koupelna nevětrá dostatečně. Ventilátor s časovačem je nutnost — ne luxus.</div>
            </section>

            <section id="chyby">
              <h2>Nejčastější chyby při větrání</h2>
              <ul>
                <li><strong>Mikroventilace celý den:</strong> Největší chyba. Stěny chladnou nepřetržitě, tepelné ztráty jsou obrovské a výměna vzduchu je minimální.</li>
                <li><strong>Větrání jen když "cítím zápach":</strong> CO₂ a vlhkost nemají výrazný zápach. Větrání musí být rutina, ne reakce na problém.</li>
                <li><strong>Zavřená koupelna po sprchování:</strong> Vlhkost zůstane uvnitř a kondenzuje na stěnách. Nech dveře otevřené a ventilátor zapnutý.</li>
                <li><strong>Větrání při topení naplno:</strong> Před otevřením oken vždy snižte termostat nebo vypni radiátor.</li>
                <li><strong>Sušení prádla v ložnici:</strong> Každý kus mokrého prádla uvolní 0,5–1 litr vody do vzduchu. Sušte na balkoně nebo v místnosti s oknem.</li>
                <li><strong>Spoléhání na klimatizaci místo větrání:</strong> Klimatizace chladí ale nevyměňuje vzduch — CO₂ a vlhkost v místnosti zůstanou. Kombinuj větrání s klimatizací.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Jak dlouho větrat byt?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">V zimě stačí 5–10 minut intenzivního křížového větrání 2–3× denně. V létě větrejte ráno a večer, přes den okna zavřená. Krátké intenzivní větrání je efektivnější než celodenní pootevřené okno.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Kdy větrat – ráno nebo večer?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">V létě větrejte ráno před 8:00 a večer po 20:00, kdy je venkovní vzduch nejchladnější. V zimě kdykoli přes den, ideálně po vaření a po sprchování.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak větrat v zimě bez tepelných ztrát?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Krátkým intenzivním větráním (5–10 minut, okna dokořán) vyměníte vzduch a stěny nestihnou vychladnout. Při mikroventilaci (pootevřené okno) naopak stěny chladnou celé hodiny a tepelné ztráty jsou mnohem vyšší.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Pomáhá větrání proti plísni?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ano, větrání je nejdůležitější prevence plísně. Vlhkost ze sprchy, vaření a dýchání musí mít kam odejít. Ideální vlhkost je 40–60 %. Větrání 2× denně po 10 minutách výrazně snižuje riziko plísně.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Je rekuperace nutná nebo luxus?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Rekuperace (řízené větrání s výměníkem tepla) je ideální řešení pro novostavby a rekonstrukce — zpětně získává 70–90 % tepla z odváděného vzduchu. V existujícím bytě bez rekonstrukce je křížové větrání plně dostačující. Rekuperace stojí 50 000–200 000 Kč, investice se vrátí za 10–20 let.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/spravne-vetrat-byt" title="Jak správně větrat byt – efektivní větrání v létě i v zimě 2026" />

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
                <li><a href="#proc">Proč větrat</a></li>
                <li><a href="#zpusoby">Způsoby větrání</a></li>
                <li><a href="#zima">Větrání v zimě</a></li>
                <li><a href="#leto">Větrání v létě</a></li>
                <li><a href="#mistnosti">Větrání podle místnosti</a></li>
                <li><a href="#vlhkost">Vlhkost a plíseň</a></li>
                <li><a href="#chyby">Nejčastější chyby</a></li>
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
