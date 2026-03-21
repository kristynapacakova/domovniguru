import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Příprava domu na zimu: Kompletní checklist údržby a úspor 2026",
  description: "Okapy, střecha, kotel, okna, komín, zahrada. Kompletní checklist co zkontrolovat před zimou aby dům vydržel, topení fungovalo a účty byly co nejnižší.",
  alternates: { canonical: "https://domovniguru.cz/blog/priprava-domu-na-zimu" },
  openGraph: { title: "Příprava domu na zimu: Kompletní checklist údržby a úspor 2026", description: "Ultimátní průvodce zazimováním domu – exteriér, interiér, kotel, okna, zahrada.", url: "https://domovniguru.cz/blog/priprava-domu-na-zimu", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-03-01T08:00:00Z", modifiedTime: "2026-03-21T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Příprava domu na zimu: Kompletní checklist 2026", description: "Okapy, střecha, kotel, okna, komín, zahrada – vše co zkontrolovat před zimou." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://domovniguru.cz/blog/priprava-domu-na-zimu#article", "headline": "Příprava domu na zimu: Kompletní checklist údržby a úspor 2026", "datePublished": "2026-03-01T08:00:00Z", "dateModified": "2026-03-21T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "inLanguage": "cs", "keywords": ["příprava domu na zimu", "zazimování domu checklist", "revize kotle podzim", "čištění okapů", "těsnění oken zima", "jak ušetřit na topení"] }] };

const RELATED = [
  { title: "Jak odvzdušnit radiátor – krok za krokem", href: "/blog/jak-odvzdusnit-radiatory", read: "5 min" },
  { title: "Jak utěsnit okna na zimu", href: "/blog/jak-utesnit-okna-na-zimu", read: "4 min" },
  { title: "Jak zkontrolovat kotel před topnou sezónou", href: "/blog/zkontrolovat-kotel-pred-zimou", read: "5 min" },
  { title: "Jak ušetřit na vytápění bez výměny kotle", href: "/blog/usetrit-na-vytapeni", read: "5 min" },
];

export default function ArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="wrap">
        <div className="article-layout">
          <article className="article-body">

            {/* BREADCRUMB */}
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Domů</Link><span className="breadcrumb-sep">/</span>
              <Link href="/blog">Blog</Link><span className="breadcrumb-sep">/</span>
              <Link href="/blog/kategorie/sezonni-udrzba">Sezónní údržba</Link><span className="breadcrumb-sep">/</span>
              <span>Příprava domu na zimu</span>
            </nav>

            {/* HEADER */}
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">❄️ Sezónní údržba</Link>
                <span className="article-read-time">⏱ 10 min čtení</span>
              </div>
              <h1 className="article-h1">Příprava domu na zimu: Kompletní checklist údržby a úspor</h1>
              <p className="article-lead">Pár hodin práce na podzim může ušetřit tisíce korun na opravách v zimě a stovky na účtech za topení. Tady je vše co musíš zkontrolovat — od okapů přes kotel až po zahradu.</p>
              <div className="article-meta-row"><span>Aktualizováno: 21. března 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons
                url="https://domovniguru.cz/blog/priprava-domu-na-zimu"
                title="Příprava domu na zimu: Kompletní checklist údržby a úspor 2026"
              />
            </header>

            {/* HERO ILLUSTRATION */}
            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 210" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="210" fill="#eef4f8"/>
                <defs>
                  <linearGradient id="zimaBg" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#daeaf8"/>
                    <stop offset="70%" stopColor="#eef4f8"/>
                    <stop offset="100%" stopColor="#d8e8f0"/>
                  </linearGradient>
                  <linearGradient id="zimaSneh" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#ffffff"/>
                    <stop offset="100%" stopColor="#e8f0f8"/>
                  </linearGradient>
                  <linearGradient id="zimaHouseWall" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#f5f0e8"/>
                    <stop offset="100%" stopColor="#e8e0d0"/>
                  </linearGradient>
                </defs>

                <rect width="760" height="210" fill="url(#zimaBg)"/>

                {/* Sněhové vločky na pozadí */}
                {[[40,30],[120,15],[680,25],[720,50],[650,15],[80,55],[700,10]].map(([x,y],i)=>(
                  <g key={i} transform={`translate(${x},${y})`} opacity="0.3">
                    <line x1="0" y1="-8" x2="0" y2="8" stroke="#90b8d8" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="-8" y1="0" x2="8" y2="0" stroke="#90b8d8" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="-6" y1="-6" x2="6" y2="6" stroke="#90b8d8" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="6" y1="-6" x2="-6" y2="6" stroke="#90b8d8" strokeWidth="1.5" strokeLinecap="round"/>
                  </g>
                ))}

                {/* === DŮM === */}
                <g transform="translate(260, 15)">
                  {/* Střecha */}
                  <polygon points="0,75 240,75 120,10" fill="#6a5040"/>
                  {/* Sníh na střeše */}
                  <polygon points="0,75 240,75 120,10" fill="url(#zimaSneh)" opacity="0.25"/>
                  <path d="M0 75 Q60 65 120 68 Q180 65 240 75" fill="white" opacity="0.7"/>
                  {/* Okap */}
                  <rect x="-4" y="73" width="248" height="5" rx="2" fill="#8a7060" stroke="#6a5040" strokeWidth="0.5"/>
                  {/* Stěny */}
                  <rect x="20" y="75" width="200" height="115" fill="url(#zimaHouseWall)" stroke="#d0c8b8" strokeWidth="1"/>
                  {/* Okno vlevo */}
                  <rect x="30" y="90" width="50" height="42" rx="3" fill="#a8d0e8" stroke="#88b8d0" strokeWidth="1.5"/>
                  <line x1="55" y1="90" x2="55" y2="132" stroke="#88b8d0" strokeWidth="1"/>
                  <line x1="30" y1="111" x2="80" y2="111" stroke="#88b8d0" strokeWidth="1"/>
                  {/* Těsnicí páska kolem okna — zvýrazněná */}
                  <rect x="28" y="88" width="54" height="46" rx="3" fill="none" stroke="#f0a030" strokeWidth="2" strokeDasharray="4,2" opacity="0.8"/>
                  {/* Okno vpravo */}
                  <rect x="160" y="90" width="50" height="42" rx="3" fill="#a8d0e8" stroke="#88b8d0" strokeWidth="1.5"/>
                  <line x1="185" y1="90" x2="185" y2="132" stroke="#88b8d0" strokeWidth="1"/>
                  <line x1="160" y1="111" x2="210" y2="111" stroke="#88b8d0" strokeWidth="1"/>
                  {/* Dveře */}
                  <rect x="90" y="135" width="60" height="55" rx="3" fill="#8B6340" stroke="#7a5030" strokeWidth="1.5"/>
                  <circle cx="143" cy="162" r="3" fill="#c8a870"/>
                  {/* Komín */}
                  <rect x="155" y="18" width="22" height="40" fill="#7a5030" stroke="#6a4020" strokeWidth="1"/>
                  {/* Kouř z komína */}
                  <path d="M166 16 Q172 8 168 2 Q164 -4 170 -8" stroke="#b0b0b0" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.6"/>
                  <path d="M172 14 Q178 6 174 0" stroke="#c0c0c0" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.4"/>
                </g>

                {/* === IKONY KONTROL — vlevo === */}
                <g transform="translate(18, 30)">
                  {/* Okapy */}
                  <rect x="0" y="0" width="100" height="38" rx="8" fill="#e8f0f8" stroke="#b0c8e0" strokeWidth="1"/>
                  <text x="50" y="14" textAnchor="middle" fontSize="12">🍂</text>
                  <text x="50" y="28" textAnchor="middle" fontSize="8" fill="#4a6a8a" fontWeight="700">Okapy</text>
                  <text x="50" y="38" textAnchor="middle" fontSize="7" fill="#6a8aaa">vyčistit</text>

                  {/* Střecha */}
                  <rect x="0" y="48" width="100" height="38" rx="8" fill="#e8f0f8" stroke="#b0c8e0" strokeWidth="1"/>
                  <text x="50" y="62" textAnchor="middle" fontSize="12">🏠</text>
                  <text x="50" y="76" textAnchor="middle" fontSize="8" fill="#4a6a8a" fontWeight="700">Střecha</text>
                  <text x="50" y="86" textAnchor="middle" fontSize="7" fill="#6a8aaa">zkontrolovat</text>

                  {/* Kotel */}
                  <rect x="0" y="96" width="100" height="38" rx="8" fill="#fff0e8" stroke="#e0b090" strokeWidth="1"/>
                  <text x="50" y="110" textAnchor="middle" fontSize="12">🔥</text>
                  <text x="50" y="124" textAnchor="middle" fontSize="8" fill="#a06030" fontWeight="700">Kotel</text>
                  <text x="50" y="134" textAnchor="middle" fontSize="7" fill="#c08050">revize</text>

                  {/* Okna */}
                  <rect x="0" y="144" width="100" height="38" rx="8" fill="#f0fff0" stroke="#90c090" strokeWidth="1"/>
                  <text x="50" y="158" textAnchor="middle" fontSize="12">🪟</text>
                  <text x="50" y="172" textAnchor="middle" fontSize="8" fill="#3a7a3a" fontWeight="700">Okna</text>
                  <text x="50" y="182" textAnchor="middle" fontSize="7" fill="#5a9a5a">utěsnit</text>
                </g>

                {/* === IKONY KONTROL — vpravo === */}
                <g transform="translate(642, 30)">
                  {/* Komín */}
                  <rect x="0" y="0" width="100" height="38" rx="8" fill="#f8f0e8" stroke="#d0b080" strokeWidth="1"/>
                  <text x="50" y="14" textAnchor="middle" fontSize="12">🏭</text>
                  <text x="50" y="28" textAnchor="middle" fontSize="8" fill="#8a6020" fontWeight="700">Komín</text>
                  <text x="50" y="38" textAnchor="middle" fontSize="7" fill="#a08040">kominík</text>

                  {/* Voda */}
                  <rect x="0" y="48" width="100" height="38" rx="8" fill="#e8f4ff" stroke="#90b8e0" strokeWidth="1"/>
                  <text x="50" y="62" textAnchor="middle" fontSize="12">🚰</text>
                  <text x="50" y="76" textAnchor="middle" fontSize="8" fill="#3a5a8a" fontWeight="700">Venkovní voda</text>
                  <text x="50" y="86" textAnchor="middle" fontSize="7" fill="#5a7aaa">vypustit</text>

                  {/* Radiátory */}
                  <rect x="0" y="96" width="100" height="38" rx="8" fill="#fff8e8" stroke="#e0c070" strokeWidth="1"/>
                  <text x="50" y="110" textAnchor="middle" fontSize="12">🌡️</text>
                  <text x="50" y="124" textAnchor="middle" fontSize="8" fill="#9a7010" fontWeight="700">Radiátory</text>
                  <text x="50" y="134" textAnchor="middle" fontSize="7" fill="#c09030">odvzdušnit</text>

                  {/* Zahrada */}
                  <rect x="0" y="144" width="100" height="38" rx="8" fill="#f0fff0" stroke="#80c080" strokeWidth="1"/>
                  <text x="50" y="158" textAnchor="middle" fontSize="12">🌱</text>
                  <text x="50" y="172" textAnchor="middle" fontSize="8" fill="#2a6a2a" fontWeight="700">Zahrada</text>
                  <text x="50" y="182" textAnchor="middle" fontSize="7" fill="#4a8a4a">zazimovat</text>
                </g>

                {/* Teploměr */}
                <g transform="translate(510, 55)">
                  <rect x="10" y="0" width="16" height="80" rx="8" fill="#e8e0d8" stroke="#c0b8b0" strokeWidth="1"/>
                  <rect x="12" y="50" width="12" height="28" rx="4" fill="#e07040"/>
                  <circle cx="18" cy="82" r="10" fill="#e07040" stroke="#c05020" strokeWidth="1"/>
                  <text x="18" y="-8" textAnchor="middle" fontSize="8" fill="#6a5a4a" fontWeight="600">–10°C</text>
                  <text x="18" y="104" textAnchor="middle" fontSize="7" fill="#8a5020">MRÁZ!</text>
                </g>

                {/* Velká vločka uprostřed nahoře */}
                <g transform="translate(385, 5)" opacity="0.4">
                  {[-45,-90,-135,0,45,90,135,180].map((deg,i)=>(
                    <line key={i}
                      x1={15*Math.cos(deg*Math.PI/180)} y1={15*Math.sin(deg*Math.PI/180)}
                      x2={-15*Math.cos(deg*Math.PI/180)} y2={-15*Math.sin(deg*Math.PI/180)}
                      stroke="#7ab0d8" strokeWidth="2" strokeLinecap="round"/>
                  ))}
                </g>

                {/* Dolní lišta */}
                <rect y="190" width="760" height="20" fill="#daeaf8" opacity="0.6"/>
                <text x="95"  y="203" textAnchor="middle" fontSize="8" fill="#4a6a8a" fontWeight="600" letterSpacing="0.04em">🍂 OKAPY A STŘECHA</text>
                <text x="285" y="203" textAnchor="middle" fontSize="8" fill="#4a6a8a" fontWeight="600" letterSpacing="0.04em">🔥 KOTEL A KOMÍN</text>
                <text x="475" y="203" textAnchor="middle" fontSize="8" fill="#4a6a8a" fontWeight="600" letterSpacing="0.04em">🪟 OKNA A TĚSNĚNÍ</text>
                <text x="655" y="203" textAnchor="middle" fontSize="8" fill="#4a6a8a" fontWeight="600" letterSpacing="0.04em">🌱 ZAHRADA A VODA</text>
              </svg>
            </div>

            {/* TOC */}
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#kdy-zacit">Kdy začít s přípravou na zimu</a></li>
                <li><a href="#exteriér">Checklist exteriéru</a></li>
                <li><a href="#interier">Checklist interiéru</a></li>
                <li><a href="#tepelne-ztraty">Tepelné ztráty – kudy uniká teplo</a></li>
                <li><a href="#zahrada">Zazimování zahrady</a></li>
                <li><a href="#uspora">Jak ušetřit na topení bez investic</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            {/* SECTION 1 */}
            <section id="kdy-zacit">
              <h2>Kdy začít s přípravou domu na zimu</h2>
              <p>Ideální čas pro přípravu domu na zimu je <strong>říjen — nejpozději začátek listopadu</strong>. Cílem je mít vše hotové ještě před prvními mrazy a před tím, než plně zapnete topení. Příprava má svůj logický řád — exteriér (střecha, okapy, fasáda) zpravidla před interiérem (kotel, radiátory, těsnění oken).</p>
              <p>Proč spěchat? Protože škody způsobené zimou jsou jedny z nejdražších domovních oprav. Prasklé potrubí z nezajištěného venkovního kohoutku stojí tisíce korun. Zamrzlý kondenzát v nevyčištěném komíně může způsobit požár. Zanesené okapy vedou k tvorbě ledových clon které poškodí střechu i fasádu.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Udělej si z přípravy každoroční rituál — stejný víkend v říjnu. S tímhle checklistem tě to zabere maximálně odpoledne a ušetříš v průměru 5 000–15 000 Kč na preventabilních opravách ročně.</div>
            </section>

            {/* SECTION 2 — EXTERIÉR */}
            <section id="exteriér">
              <h2>Checklist exteriéru</h2>
              <p>Exteriér domu je první linií obrany proti zimě. Každý problém venku — prasklina, zanesený odtok, poškozená taška — se v zimě zhorší a stane se drahou opravou.</p>

              <h3>🍂 Okapy a svody</h3>
              <ul>
                <li><strong>✅ Vyčisti okapy od listí a nečistot:</strong> Zanesené okapy zadržují vodu která při mrazu tuhne a způsobuje tzv. ledové clony. Ty poté mechanicky ničí okap, fasádu i střechu. Stačí žebřík a rukavice — nebo profesionální čištění za 500–1 500 Kč.</li>
                <li><strong>✅ Zkontroluj spoje a uložení žlabů:</strong> Posunutý nebo uvolněný okap nezachytí vodu správně. Překontroluj háky a spoje — oprava je otázka šroubováku a 30 minut práce.</li>
                <li><strong>✅ Zkontroluj svody a odtok u základů:</strong> Voda ze svodu musí být odvedena min. 1,5 m od základů. Pokud se hromadí u domu, může pronikat do sklepa nebo podmáčet základy.</li>
              </ul>

              <h3>🏠 Střecha</h3>
              <ul>
                <li><strong>✅ Vizuální prohlídka tašek:</strong> Z bezpečné vzdálenosti (nebo dalekohledem) zkontroluj zda nejsou posunuté, praskané nebo chybějící tašky. Jedna chybějící taška = průnik vody do krovu za deště nebo při tání sněhu.</li>
                <li><strong>✅ Zkontroluj střešní okna a lemování:</strong> Těsnění kolem střešních oken a prostupů (komín, anténa, větrání) jsou nejčastějším místem průniku vody. Vizuálně zkontroluj stav — tmavé skvrny na vnitřním podhledu jsou příznak zatékání.</li>
                <li><strong>✅ Odstraň mech:</strong> Mech na střeše zadržuje vlhkost, poškozuje povrch tašek a může způsobit zamrzání. Odstraň ho kartáčem nebo speciálním přípravkem.</li>
              </ul>

              <h3>🏗️ Fasáda a základ</h3>
              <ul>
                <li><strong>✅ Zkontroluj praskliny v omítce:</strong> Praskliny které se přes léto ignorují se v zimě rozšiřují — voda pronikne, zamrzne a odtrhne kusy omítky. Malé praskliny (do 2 mm) vyplň venkovním tmelem, větší nechej opravit.</li>
                <li><strong>✅ Zkontroluj sokl a základ:</strong> Spodní část fasády (sokl) je nejvíce ohrožená vlhkostí. Praskliny nebo odlupující se omítka na soklu jsou příznak vlhkostního problému — řeš co nejdřív.</li>
              </ul>

              <h3>🚰 Venkovní voda a potrubí</h3>
              <ul>
                <li><strong>✅ Uzavři a vypusť venkovní kohoutky:</strong> Toto je jeden z nejdůležitějších bodů. Venkovní kohoutek bez tzv. nezámrzného ventilu musí být před mrazem uzavřen zevnitř a vypuštěn. Postup: (1) uzavři uzávěr uvnitř, (2) otevři venkovní kohoutek dokud nevyteče všechna voda, (3) nechej kohoutek otevřený.</li>
                <li><strong>✅ Izoluj exponovaná potrubí:</strong> Potrubí v nevytápěném prostoru (garáž, sklep bez topení, půda) hrozí zamrznutím. Obal je izolační pěnou nebo topným kabelem — cena 200–500 Kč za metr.</li>
                <li><strong>✅ Vypusť zahradní závlahu:</strong> Automatická závlaha, hadice a spojky musí být zcela vypuštěny a uloženy uvnitř. Zamrzlá spojka prasklá = škoda i při tání v únoru.</li>
              </ul>
            </section>

            {/* SECTION 3 — INTERIÉR */}
            <section id="interier">
              <h2>Checklist interiéru</h2>
              <p>Interiérová příprava se soustředí na topný systém, větrání a utěsnění úniku tepla. Správně fungující kotel a utěsněná okna mohou snížit náklady na vytápění o 15–30 %.</p>

              <h3>🔥 Kotel a topný systém</h3>
              <ul>
                <li><strong>✅ Naplánuj revizi kotle:</strong> Zákonná revize plynového kotle je povinná jednou ročně — koná ji autorizovaný technik. Nezanedbávej ji: vadný kotel může unikat oxid uhelnatý (CO) bez varování. Termín: ideálně září–říjen, před topnou sezónou.</li>
                <li><strong>✅ Zkontroluj tlak v soustavě:</strong> Správný provozní tlak je 1,5–2 bar. Pokud je nižší, doplň vodu. Pokud tlak klesá opakovaně, soustava netěsní — zavolej topenáře.</li>
                <li><strong>✅ Odvzdušni radiátory:</strong> Studený radiátor nahoře = vzduch v soustavě. Odvzdušnění zvládneš sám za 10 minut s odvzdušňovacím klíčem. Snižuje spotřebu energie o 15–25 %.</li>
                <li><strong>✅ Vyčisti nebo vyměň filtr kotle:</strong> Zanesený filtr snižuje průtok a efektivitu. Většina moderních kotlů má filtr u vstupu zpátečky — vyčisti ho nebo vyměň (cena 50–200 Kč).</li>
              </ul>

              <h3>🏭 Komín</h3>
              <ul>
                <li><strong>✅ Nechej vyčistit komín kominíkem:</strong> Pravidelné čištění komínu (min. 1× ročně) je zákonná povinnost pro pevná paliva, a silně doporučené pro plyn. Saze a dehet v komíně jsou požární riziko. Kominík zároveň zkontroluje stav komínového průduchu a těsnění.</li>
                <li><strong>✅ Zkontroluj větrací průduchy:</strong> Větrací mřížky a průduchy v koupelně a kuchyni musí být průchodné. Zanesené větrání způsobuje hromadění vlhkosti a vznik plísní.</li>
              </ul>

              <h3>🪟 Okna a dveře</h3>
              <ul>
                <li><strong>✅ Přepni plastová okna na zimní těsnění:</strong> Moderní plastová okna mají dvě polohy — letní (méně utěsněná) a zimní (plné těsnění). Přepnutí je otázka otočení excentrické vačky na kování (plochý šroubovák, 2 minuty na okno).</li>
                <li><strong>✅ Zkontroluj stav těsnění:</strong> Gumová těsnění kolem oken a dveří stárnou a praská. Vložením listu papíru do zavřeného okna a zatažením poznáš zda těsní (papír má jít s odporem). Výměna těsnění stojí 200–500 Kč za okno.</li>
                <li><strong>✅ Utěsni průvany:</strong> Těsnicí pásky na rám okna nebo dveří (samolepicí EPDM nebo molitan, cena 50–100 Kč za okno) výrazně snižují průvan a únik tepla.</li>
              </ul>
            </section>

            {/* SECTION 4 — TABULKA TEPELNÝCH ZTRÁT */}
            <section id="tepelne-ztraty">
              <h2>Tepelné ztráty – kudy uniká nejvíc tepla a jak to levně opravit</h2>
              <p>Ne všechna místa úniku tepla jsou stejně důležitá. Tady jsou hlavní zdroje tepelných ztrát v průměrném starším domě a orientační náklady na nápravu.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead>
                    <tr>
                      <th>Místo úniku tepla</th>
                      <th>Podíl ztrát</th>
                      <th>Levné řešení (do 500 Kč)</th>
                      <th>Investiční řešení</th>
                      <th>Úspora</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Střecha a půda</strong></td>
                      <td>25–30 %</td>
                      <td>Utěsnění průlezů a prostupu; zatemnění střešního okna</td>
                      <td>Zateplení půdy (minerální vata, 5 000–15 000 Kč)</td>
                      <td>15–25 %</td>
                    </tr>
                    <tr>
                      <td><strong>Stěny (nezateplené)</strong></td>
                      <td>20–25 %</td>
                      <td>Záclony a těžké závěsy u vnějších stěn</td>
                      <td>Zateplení fasády ETICS (500–800 Kč/m²)</td>
                      <td>15–30 %</td>
                    </tr>
                    <tr>
                      <td><strong>Okna a dveře</strong></td>
                      <td>15–20 %</td>
                      <td>Těsnicí pásky (50–100 Kč/okno), zimní nastavení kování</td>
                      <td>Výměna za trojsklo (8 000–15 000 Kč/okno)</td>
                      <td>5–15 %</td>
                    </tr>
                    <tr>
                      <td><strong>Podlaha nad terénem</strong></td>
                      <td>10–15 %</td>
                      <td>Koberce a tlusté podložky, zatmelení spár u soklu</td>
                      <td>Zateplení podlahy (300–600 Kč/m²)</td>
                      <td>5–10 %</td>
                    </tr>
                    <tr>
                      <td><strong>Větrání a průvany</strong></td>
                      <td>10–15 %</td>
                      <td>Ucpání nevyužívaných průduchů, dveřní lišta (200 Kč)</td>
                      <td>Rekuperační větrání (30 000–80 000 Kč)</td>
                      <td>5–20 %</td>
                    </tr>
                    <tr>
                      <td><strong>Tepelné mosty (rohy, ostění)</strong></td>
                      <td>5–10 %</td>
                      <td>Reflexní fólie za radiátory u vnějších stěn (100–300 Kč)</td>
                      <td>Komplexní zateplení s přerušením mostu</td>
                      <td>3–8 %</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Nejlepší poměr cena/výkon mají těsnicí pásky na okna (50–100 Kč/okno) a reflexní fólie za radiátory (100–300 Kč celkem). Investice 500 Kč může ušetřit 1 500–3 000 Kč ročně na topení.</div>
            </section>

            {/* SECTION 5 — ZAHRADA */}
            <section id="zahrada">
              <h2>Zazimování zahrady – rychlé tipy</h2>
              <p>Zahrada potřebuje před zimou méně péče než dům, ale správné zazimování rozhoduje o tom, co přežije do jara.</p>
              <ul>
                <li><strong>🌹 Růže:</strong> Prořez na cca 50 cm výšky, zasypání vrcholu hlínou nebo kompostem (10–15 cm). Citlivé odrůdy zakrýt jutou nebo netkanou textilií po prvních mrazech.</li>
                <li><strong>🫙 Hrnkové rostliny:</strong> Přemístit do chladné ale nezámrzné místnosti (sklep, nevytápěná garáž, 5–10 °C). Zálivku omezit na minimum — většina cibulovin a sukulentů "spí".</li>
                <li><strong>🌿 Trvalky:</strong> Nechej stát přes zimu — suché stonky chrání kořeny před mrazem a slouží jako úkryt pro hmyz. Sekat jen na jaře.</li>
                <li><strong>🪣 Nádoby a záhradní nábytek:</strong> Keramické nádoby přemístit dovnitř nebo do chráněného prostoru — mráz je praská. Zahradní nábytek umýt, ošetřit a uskladnit nebo zakrýt.</li>
                <li><strong>🌱 Mulčování záhonů:</strong> Nanes 5–8 cm mulče (kůra, štěpka, listí) na záhony s citlivými rostlinami. Chrání kořeny před mrazem a udržuje půdní vlhkost.</li>
                <li><strong>🔧 Zahradní nástroje:</strong> Vyčisti, naostruj a naolejuj kovové části. Uskladni v suchu — rez vzniklý přes zimu znehodnotí i dobré nástroje.</li>
              </ul>
            </section>

            {/* SECTION 6 */}
            <section id="uspora">
              <h2>Jak ušetřit na topení bez investic</h2>
              <p>Existuje řada opatření která nic nestojí nebo stojí do 500 Kč a přesto mohou snížit náklady na vytápění o 10–20 %.</p>
              <ul>
                <li><strong>Nastav termostat správně:</strong> Každý stupeň navíc znamená přibližně 6 % navíc na účtu. V obytných místnostech stačí 20–21 °C. V ložnici 18 °C (nižší teplota zlepšuje spánek). V nepřítomnosti snižuj na 15–16 °C — ne méně, aby nedocházelo k vlhkosti a plísním.</li>
                <li><strong>Odvzdušni radiátory:</strong> Viz checklist výše. Studenný radiátor = plný výkon kotle, nulový efekt. Odvzdušnění = okamžitá úspora bez investice.</li>
                <li><strong>Reflexní fólie za radiátory:</strong> Fólie vložená mezi radiátor a vnější stěnu odrazí teplo zpět do místnosti. Cena 100–200 Kč, úspora 3–8 % tepla z daného radiátoru.</li>
                <li><strong>Těsnicí pásky na okna a dveře:</strong> Samolepicí těsnicí pásky za 50–100 Kč na okno eliminují průvan a snižují únik tepla.</li>
                <li><strong>Nepřikrývej radiátory:</strong> Nábytek nebo záclony zakrývající radiátor snižují jeho efektivitu o 10–20 %. Přesuň nábytek alespoň 10 cm od radiátoru.</li>
                <li><strong>Větrání správně:</strong> Krátkodobé intenzivní větrání (5–10 minut, dokořán otevřená okna) je mnohem efektivnější než celodenní větrání s pootevřenou škvírou — méně ochlazuje zdi a topení znovu nastartuje rychleji.</li>
              </ul>
            </section>

            {/* SECTION 7 — FAQ */}
            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">
                    Kdy volat kominíka a jak často musím nechat čistit komín?
                    <span className="faq-icon">▾</span>
                  </summary>
                  <div className="faq-body">
                    Zákon (vyhláška č. 34/2016 Sb.) stanovuje povinné lhůty: tuhá paliva (dřevo, uhlí) = čištění a kontrola 3× ročně. Plynový kotel s výkonem do 50 kW = 1× ročně. Neplynové kotle nad 50 kW = 2× ročně. Termín volání kominíka: ideálně září–říjen, před topnou sezónou. Zanedbaný komín může způsobit požár nebo otravu oxidem uhelnatým — nezanedbávej to.
                  </div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">
                    Jak správně vypustit vodu z venkovního kohoutku?
                    <span className="faq-icon">▾</span>
                  </summary>
                  <div className="faq-body">
                    Postup: (1) Uzavři uzávěr venkovního přívodu vody — ten je uvnitř domu, obvykle ve sklepě nebo technické místnosti. (2) Jdi k venkovnímu kohoutku a otevři ho naplno. (3) Počkej dokud nepřestane vytékat voda — může to trvat minutu i déle. (4) Nechej kohoutek otevřený — aby se případný zbytek vody mohl rozpínat při mrazu bez poškození. Pokud máš automatický nezámrzný kohoutek (antigel), stačí ho jen uzavřít — voda se vypustí sama.
                  </div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">
                    Jak ušetřit na topení bez jakékoliv investice?
                    <span className="faq-icon">▾</span>
                  </summary>
                  <div className="faq-body">
                    Nejefektivnější bezinvestiční opatření: (1) Snižuj teplotu o 1–2 °C — každý stupeň navíc je 6 % nákladů navíc. (2) Větrání zkraťte na 5–10 minut dokořán — ne celý den pootevřené okno. (3) Odvzdušni radiátory — okamžitá úspora 15–25 % u neefektivně topícího radiátoru. (4) Přesuň nábytek od radiátorů. (5) Stáhni rolety a závěsy po setmění — izolují okna.
                  </div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">
                    Co se stane když zapomenu vypustit vodu z venkovního kohoutku?
                    <span className="faq-icon">▾</span>
                  </summary>
                  <div className="faq-body">
                    Voda v potrubí při zamrznutí expanduje a může prasknout potrubí, kohoutek nebo spojky. Škody mohou být nenápadné a projevit se až při tání v únoru nebo březnu — prasklé potrubí přestane těsnit a voda zalije okolí. Oprava prasklého potrubí a případné škody od vody stojí tisíce až desítky tisíc korun. Prevence (vypuštění) trvá 5 minut.
                  </div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">
                    Musím nechávat v zimě přitopené i v prázdném domě?
                    <span className="faq-icon">▾</span>
                  </summary>
                  <div className="faq-body">
                    Ano — v prázdném domě nikdy nevypínej topení úplně. Minimální teplota pro ochranu potrubí a konstrukce je 10–12 °C. Při nižší teplotě hrozí zamrznutí vody v potrubí, kondenzace vlhkosti na studených površích (vznik plísní) a poškození materiálů (dřevo, omítka). Moderní kotle mají protimrazový režim — nastav ho při delší nepřítomnosti. Pokud odjíždíš na déle, uzavři přívod vody a vypusť soustavu (nebo nechej spravovat souseda).
                  </div>
                </details>
              </div>
            </section>

            {/* SHARE BOTTOM */}
            <ShareButtons
              url="https://domovniguru.cz/blog/priprava-domu-na-zimu"
              title="Příprava domu na zimu: Kompletní checklist údržby a úspor 2026"
            />

            {/* RELATED */}
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

          {/* SIDEBAR */}
          <aside className="article-sidebar">
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Obsah</div>
              <nav><ul className="sidebar-toc">
                <li><a href="#kdy-zacit">Kdy začít</a></li>
                <li><a href="#exteriér">Checklist exteriéru</a></li>
                <li><a href="#interier">Checklist interiéru</a></li>
                <li><a href="#tepelne-ztraty">Tepelné ztráty</a></li>
                <li><a href="#zahrada">Zahrada</a></li>
                <li><a href="#uspora">Úspora bez investic</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/sezonni-udrzba" className="sidebar-cat-link">❄️ Sezónní údržba<span>21 článků →</span></Link>
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
        .article-tip{background:#e8f4fb;border-left:3px solid #4a9aba;border-radius:0 8px 8px 0;padding:14px 18px;font-size:14px;line-height:1.6;color:#78716c;margin:20px 0}
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
}            </section>

            <section id="okna">
              <h2>Okna a dveře – stop průvanům a úniku tepla</h2>
              <h3>Přepnutí oken na zimní těsnění</h3>
              <p>Plastová okna mají dva režimy těsnění – letní a zimní. Zimní režim nastavíš přetočením kování o 180°. Letní poloha: ventilační mezera pro proudění vzduchu. Zimní poloha: pevnější přitlačení křídla k rámu. Rozdíl ve spotřebě tepla je znatelný. Viz <Link href="/blog/navody/nastaveni-oken">návod na nastavení oken</Link>.</p>
              <h3>Kontrola těsnění</h3>
              <p>Otestuj těsnění papírovým testem: vlož list papíru mezi rám a křídlo a zavři okno. Pokud papír jde vytáhnout bez odporu, těsnění je opotřebované. Výměna těsnění stojí 200–500 Kč na okno a lze ji udělat svépomocí.</p>
              <h3>Utěsnění průvanů</h3>
              <p>Průvany kolem oken, dveří a zárubní utěsni samolepicím těsnicím páskem (20–60 Kč/metr). Průvan pod vchodovými dveřmi řeší dveřní lišta nebo těsnicí kartáč.</p>
              <h3>Zateplení</h3>
              <p>Pokud máš starší okna bez zimního nastavení nebo okna bez izolačního dvojskla, zvaž nalepení izolační fólie na okenní tabule. Snižuje tepelné ztráty a odstraňuje kondenzaci.</p>
            </section>

            <section id="strecha">
              <h2>Střecha a okapy</h2>
              <h3>Čištění okapů</h3>
              <p>Okapy ucpané listím způsobují, že voda stojí a v mrazu se mění na led. Ten roztahuje okap a ničí ho. Na podzim po opadání listí vyčisti okapy – buď ručně (žebřík, gumové rukavice) nebo speciálním foukačem na listí.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pořiď ochranné síťky na okapy (200–400 Kč/metr) – zabrání listí v okapech a čištění budeš dělat jednou za několik let místo každý rok.</div>
              <h3>Kontrola střechy</h3>
              <p>Z bezpečné vzdálenosti (dalekohled, okno podkroví) zkontroluj střechu po létě. Hledej posunuté nebo chybějící tašky, poškozené oplechování a mezery v hřebeni. Malé opravy teď stojí zlomek toho, co opravy po zimě.</p>
              <h3>Střešní okna a průchody</h3>
              <p>Zkontroluj těsnění kolem střešních oken, komínu a ventilačních průchodů. Tady nejčastěji proniká voda.</p>
            </section>

            <section id="zahrada">
              <h2>Zahrada a venkovní prostory</h2>
              <h3>Závlaha a vodovod</h3>
              <p>Nejdůležitější: vypni přívod vody do venkovního vodovodu a vypusť potrubí. Voda zamrzne, potrubí praskne a oprava stojí tisíce. Stačí uzavřít kohout uvnitř a otevřít venkovní kohout, aby voda vytekla.</p>
              <h3>Zahradní nábytek</h3>
              <p>Plastový nábytek ukliď do skladu nebo ho zakryj. Dřevěný nábytek před uskladněním ošetři terasovým olejem. Kovový nábytek zkontroluj na rez.</p>
              <h3>Zahradní technika</h3>
              <p>Sekačku vyčisti, vyměň olej a uskladni bez benzínu (nebo s přísadou do paliva). Akumulátorové stroje uskladni při teplotě nad 5 °C.</p>
              <h3>Rostliny a keře</h3>
              <p>Citlivé rostliny (palmy, oleandry, agávy) přesuň do zimního skladu nebo domu. Trvalky a okrasné trávy nechej na zimu stát – chrání kořeny a jsou atraktivní pod sněhem. Růže přikryj chrániči nebo větvemi jedle.</p>
            </section>

            <section id="sklep">
              <h2>Sklep a garáž</h2>
              <h3>Kontrola vlhkosti ve sklepě</h3>
              <p>Sklep by měl být suchý. Vlhkost nad 70 % způsobuje plíseň a poškozuje uskladněné věci. Zkontroluj zdi na skvrny od vlhkosti, zkontroluj těsnění oken a větracích otvorů.</p>
              <h3>Uskladnění na zimu</h3>
              <p>Do sklepa jdou: brambory, zelenina, ovoce (ideálně 4–8 °C), víno, konzervy. Ven ze sklepa: věci citlivé na mráz a vlhkost.</p>
              <h3>Garáž a příjezdová cesta</h3>
              <p>Zkontroluj, zda máš doma dostatečnou zásobu posypové soli nebo písku. Silikonové těsnění garážových vrat kontroluj jednou ročně – prasklé těsnění pouští chlad a hlodavce.</p>
            </section>

            <section id="checklist">
              <h2>Kompletní checklist přípravy na zimu</h2>
              <div className="article-tip"><strong>✅ Topení</strong></div>
              <ul>
                <li>Servis kotle (do konce září)</li>
                <li>Odvzdušnění všech radiátorů</li>
                <li>Kontrola tlaku v topném systému</li>
                <li>Nastavení programovatelného termostatu</li>
              </ul>
              <div className="article-tip"><strong>✅ Okna a dveře</strong></div>
              <ul>
                <li>Přepnout okna na zimní těsnění</li>
                <li>Papírový test těsnění oken</li>
                <li>Utěsnit průvany samolepicím páskem</li>
                <li>Zkontrolovat dveřní prahová těsnění</li>
              </ul>
              <div className="article-tip"><strong>✅ Střecha a okapy</strong></div>
              <ul>
                <li>Vyčistit okapy po opadání listí</li>
                <li>Vizuální kontrola střechy</li>
                <li>Zkontrolovat těsnění střešních oken a komínu</li>
              </ul>
              <div className="article-tip"><strong>✅ Zahrada</strong></div>
              <ul>
                <li>Vypnout venkovní vodovod a vypustit potrubí</li>
                <li>Uklidit zahradní nábytek</li>
                <li>Přemístit citlivé rostliny do tepla</li>
                <li>Uskladnit zahradní techniku</li>
              </ul>
              <div className="article-tip"><strong>✅ Sklep a garáž</strong></div>
              <ul>
                <li>Zkontrolovat vlhkost ve sklepě</li>
                <li>Doplnit zásobu posypové soli</li>
                <li>Zkontrolovat těsnění garážových vrat</li>
              </ul>
            </section>

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
                <li><a href="#kdy">Kdy začít</a></li>
                <li><a href="#topeni">Topení a kotel</a></li>
                <li><a href="#okna">Okna a dveře</a></li>
                <li><a href="#strecha">Střecha a okapy</a></li>
                <li><a href="#zahrada">Zahrada</a></li>
                <li><a href="#sklep">Sklep a garáž</a></li>
                <li><a href="#checklist">Kompletní checklist</a></li>
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
        .article-layout { display: grid; grid-template-columns: 1fr 280px; gap: 56px; padding: 48px 0 80px; align-items: start; }
        .article-header { margin-bottom: 32px; }
        .article-meta-top { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
        .article-cat-pill { display: inline-flex; align-items: center; height: 24px; padding: 0 12px; border-radius: 999px; border: 1px solid var(--border); background: var(--surface); font-size: 11px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--muted); text-decoration: none; transition: background 120ms; }
        .article-cat-pill:hover { background: #e8e7e2; color: var(--text); }
        .article-read-time { font-size: 12px; color: var(--muted); font-weight: 500; }
        .article-h1 { font-family: var(--font-serif); font-size: clamp(26px, 3.5vw, 40px); line-height: 1.1; font-weight: 400; letter-spacing: -0.01em; margin-bottom: 16px; }
        .article-lead { font-size: 18px; line-height: 1.65; color: var(--muted); font-weight: 300; margin-bottom: 14px; }
        .article-meta-row { display: flex; gap: 8px; font-size: 12px; color: var(--muted); font-weight: 500; }
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
