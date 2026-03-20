import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Tepelné čerpadlo: Kompletní průvodce výběrem, úsporami a instalací 2026",
  description: "Vzduch-voda, země-voda nebo vzduch-vzduch? Srovnání typů, reálné úspory, návratnost investice a dotace Nová zelená úsporám. Vše co potřebuješ vědět před nákupem.",
  alternates: { canonical: "https://domovniguru.cz/blog/tepelne-cerpadlo-pruvodce" },
  openGraph: { title: "Tepelné čerpadlo: Kompletní průvodce výběrem, úsporami a instalací 2026", description: "Srovnání typů, reálné úspory, návratnost a dotace. Průvodce pro každého kdo přemýšlí o tepelném čerpadle.", url: "https://domovniguru.cz/blog/tepelne-cerpadlo-pruvodce", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-03-01T08:00:00Z", modifiedTime: "2026-03-20T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Tepelné čerpadlo: Kompletní průvodce výběrem, úsporami a instalací 2026", description: "Srovnání typů, reálné úspory, návratnost a dotace." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://domovniguru.cz/blog/tepelne-cerpadlo-pruvodce#article", "headline": "Tepelné čerpadlo: Kompletní průvodce výběrem, úsporami a instalací 2026", "datePublished": "2026-03-01T08:00:00Z", "dateModified": "2026-03-20T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "inLanguage": "cs", "keywords": ["tepelné čerpadlo", "tepelné čerpadlo vzduch voda", "tepelné čerpadlo cena", "dotace tepelné čerpadlo", "nová zelená úsporám tepelné čerpadlo", "tepelné čerpadlo návratnost"] }] };

const RELATED = [
  { title: "Jak připravit dům na zimu – kompletní checklist", href: "/blog/jak-pripravit-dum-na-zimu", read: "5 min" },
  { title: "Jak se zbavit plísně v bytě jednou provždy", href: "/blog/jak-odstranit-plisen-na-zdi", read: "9 min" },
  { title: "Jak ušetřit na vytápění bez výměny kotle", href: "/blog/usetrit-na-vytapeni", read: "5 min" },
  { title: "Jak správně větrat byt", href: "/blog/spravne-vetrat-byt", read: "4 min" },
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
              <span>Tepelné čerpadlo</span>
            </nav>

            {/* HEADER */}
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">❄️ Sezónní údržba</Link>
                <span className="article-read-time">⏱ 11 min čtení</span>
              </div>
              <h1 className="article-h1">Tepelné čerpadlo: Kompletní průvodce výběrem, úsporami a instalací</h1>
              <p className="article-lead">Tepelné čerpadlo může snížit náklady na vytápění o 50–70 %. Ale jen pokud si vyberete správný typ a máte dům připravený. Tenhle průvodce ti ukáže vše co potřebuješ vědět — než podepíšeš smlouvu.</p>
              <div className="article-meta-row"><span>Aktualizováno: 20. března 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons
                url="https://domovniguru.cz/blog/tepelne-cerpadlo-pruvodce"
                title="Tepelné čerpadlo: Kompletní průvodce výběrem, úsporami a instalací 2026"
              />
            </header>

            {/* HERO ILLUSTRATION */}
            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 900 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="900" height="220" fill="#f0f4f8"/>
                <defs>
                  <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#daeef8"/>
                    <stop offset="100%" stopColor="#eef4f8"/>
                  </linearGradient>
                  <linearGradient id="groundGrad" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#c8d8b0"/>
                    <stop offset="100%" stopColor="#a8b890"/>
                  </linearGradient>
                  <linearGradient id="houseGrad" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#f5f0e8"/>
                    <stop offset="100%" stopColor="#e8e0d0"/>
                  </linearGradient>
                </defs>

                {/* Pozadí */}
                <rect width="900" height="175" fill="url(#skyGrad)"/>
                <rect y="175" width="900" height="45" fill="url(#groundGrad)"/>

                {/* ── DŮM ── */}
                <g transform="translate(530, 40)">
                  {/* Střecha */}
                  <polygon points="0,70 90,70 45,10" fill="#8B5E3C"/>
                  <polygon points="0,70 90,70 45,10" fill="#7a5030" opacity="0.3"/>
                  {/* Stěny */}
                  <rect x="10" y="70" width="70" height="90" fill="url(#houseGrad)" stroke="#d0c8b8" strokeWidth="1"/>
                  {/* Okno */}
                  <rect x="20" y="85" width="22" height="20" rx="2" fill="#a8d8f0" stroke="#c0d8e8" strokeWidth="1"/>
                  <line x1="31" y1="85" x2="31" y2="105" stroke="#c0d8e8" strokeWidth="0.8"/>
                  <line x1="20" y1="95" x2="42" y2="95" stroke="#c0d8e8" strokeWidth="0.8"/>
                  {/* Dveře */}
                  <rect x="50" y="115" width="20" height="45" rx="2" fill="#8B6340" stroke="#7a5030" strokeWidth="1"/>
                  <circle cx="67" cy="137" r="2" fill="#c8a870"/>
                  {/* Komín */}
                  <rect x="62" y="18" width="12" height="25" fill="#7a5030"/>
                  {/* Teplý vzduch z komína */}
                  {[0,1,2].map(i=>(
                    <path key={i} d={`M${68+i*2} 16 Q${70+i*3} 8 ${67+i*2} 2`} stroke="#f0a060" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6"/>
                  ))}
                </g>

                {/* ── VENKOVNÍ JEDNOTKA ── */}
                <g transform="translate(280, 110)">
                  <rect x="0" y="0" width="80" height="55" rx="6" fill="#4a6a8a" stroke="#3a5a7a" strokeWidth="1.5"/>
                  <rect x="5" y="5" width="70" height="45" rx="4" fill="#3a5a7a" opacity="0.4"/>
                  {/* Mřížka ventilátoru */}
                  {[15,25,35,45,55,65].map((x,i)=>(
                    <line key={i} x1={x} y1="8" x2={x} y2="47" stroke="#5a8ab0" strokeWidth="0.8" opacity="0.6"/>
                  ))}
                  {[12,20,28,36,44].map((y,i)=>(
                    <line key={i} x1="8" y1={y} x2="72" y2={y} stroke="#5a8ab0" strokeWidth="0.8" opacity="0.6"/>
                  ))}
                  {/* Ventilátor */}
                  <circle cx="40" cy="28" r="18" fill="#2a4a6a" opacity="0.5" stroke="#4a7a9a" strokeWidth="1"/>
                  <circle cx="40" cy="28" r="4" fill="#6a9aba"/>
                  {[0,60,120,180,240,300].map((deg,i)=>(
                    <path key={i} d={`M40 28 Q${40+14*Math.cos((deg-20)*Math.PI/180)} ${28+14*Math.sin((deg-20)*Math.PI/180)} ${40+16*Math.cos(deg*Math.PI/180)} ${28+16*Math.sin(deg*Math.PI/180)}`} stroke="#6a9aba" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.8"/>
                  ))}
                  {/* Štítek */}
                  <rect x="8" y="48" width="64" height="10" rx="2" fill="#2a4a6a" opacity="0.5"/>
                  <text x="40" y="56" textAnchor="middle" fontSize="6" fill="#a0c8e0" fontWeight="600" letterSpacing="0.05em">TEPELNÉ ČERPADLO</text>
                </g>

                {/* ── ŠIPKY ENERGIE ── */}
                {/* Vzduch → čerpadlo */}
                <g opacity="0.8">
                  <path d="M180 137 L270 137" stroke="#4a9aba" strokeWidth="2" strokeDasharray="6,3" strokeLinecap="round"/>
                  <path d="M266 132 L274 137 L266 142" stroke="#4a9aba" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <text x="220" y="128" textAnchor="middle" fontSize="9" fill="#4a7a9a" fontWeight="600">Vzduch</text>
                  <text x="220" y="138" textAnchor="middle" fontSize="8" fill="#6a9aba">venkovní</text>
                </g>

                {/* Čerpadlo → dům (trubky) */}
                <path d="M360 137 Q430 137 430 100 Q430 70 530 80" stroke="#e07040" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                <path d="M526 75 L532 80 L526 85" stroke="#e07040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>

                {/* Elektřina → čerpadlo */}
                <g opacity="0.8">
                  <path d="M320 110 L320 75 L200 75" stroke="#f0c040" strokeWidth="1.5" strokeDasharray="4,3" strokeLinecap="round"/>
                  <text x="255" y="68" textAnchor="middle" fontSize="9" fill="#c09020" fontWeight="600">⚡ Elektřina (1 kW)</text>
                </g>

                {/* COP popis */}
                <rect x="420" y="88" width="100" height="30" rx="6" fill="#e07040" opacity="0.15"/>
                <text x="470" y="102" textAnchor="middle" fontSize="10" fill="#c05020" fontWeight="700">COP 3–5×</text>
                <text x="470" y="113" textAnchor="middle" fontSize="8" fill="#c05020">= 3–5 kW tepla</text>

                {/* ── PENĚŽENKA / ÚSPORY ── */}
                <g transform="translate(720, 60)">
                  <rect x="0" y="0" width="70" height="45" rx="8" fill="#5a9e6f" opacity="0.15" stroke="#5a9e6f" strokeWidth="1.5"/>
                  <text x="35" y="18" textAnchor="middle" fontSize="18">💰</text>
                  <text x="35" y="34" textAnchor="middle" fontSize="10" fill="#3a7e4f" fontWeight="700">–60 %</text>
                  <text x="35" y="44" textAnchor="middle" fontSize="8" fill="#5a9e6f">na vytápění</text>
                </g>

                {/* Teplota venku */}
                <g transform="translate(60, 80)">
                  <rect x="0" y="0" width="80" height="50" rx="8" fill="#4a6a8a" opacity="0.1" stroke="#4a6a8a" strokeWidth="1"/>
                  <text x="40" y="18" textAnchor="middle" fontSize="14">🌡️</text>
                  <text x="40" y="33" textAnchor="middle" fontSize="11" fill="#3a5a7a" fontWeight="700">–20 °C</text>
                  <text x="40" y="44" textAnchor="middle" fontSize="8" fill="#5a7a9a">funguje!</text>
                </g>

                {/* Popisky dole */}
                <text x="320" y="200" textAnchor="middle" fontSize="9" fill="#6a8aaa" fontWeight="600" letterSpacing="0.05em">VENKOVNÍ JEDNOTKA</text>
                <text x="575" y="200" textAnchor="middle" fontSize="9" fill="#8B6340" fontWeight="600" letterSpacing="0.05em">VYTÁPĚNÝ DŮM</text>
              </svg>
              <div style={{display:"flex",justifyContent:"space-around",padding:"8px 30px 12px",fontSize:"9px",letterSpacing:"0.1em",color:"#6a8aaa",textTransform:"uppercase",background:"#f0f4f8"}}>
                <span>🌡️ Venkovní vzduch jako zdroj</span>
                <span>⚡ 1 kW elektřiny → 3–5 kW tepla</span>
                <span>💰 Úspora 50–70 % nákladů</span>
                <span>✅ Funguje i při –20 °C</span>
              </div>
            </div>

            {/* TOC */}
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#jak-funguje">Jak tepelné čerpadlo funguje</a></li>
                <li><a href="#typy">Srovnání typů tepelných čerpadel</a></li>
                <li><a href="#navratnost">Úspory a návratnost investice</a></li>
                <li><a href="#checklist">5 věcí před objednávkou</a></li>
                <li><a href="#dotace">Dotace Nová zelená úsporám 2026</a></li>
                <li><a href="#instalace">Instalace a provoz</a></li>
                <li><a href="#chyby">Nejčastější chyby</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            {/* SECTION 1 */}
            <section id="jak-funguje">
              <h2>Jak tepelné čerpadlo funguje</h2>
              <p>Tepelné čerpadlo není topidlo v klasickém slova smyslu — <strong>nevyrábí teplo, přemísťuje ho</strong>. Funguje na stejném principu jako lednička, jen obráceně. Odebírá tepelnou energii z venkovního vzduchu, ze země nebo z podzemní vody a přenáší ji do topného systému domu.</p>
              <p>Klíčový ukazatel efektivity je <strong>COP (Coefficient of Performance)</strong> — poměr vyrobeného tepla ku spotřebované elektřině. Moderní čerpadla dosahují COP 3–5, což znamená: za každý 1 kW elektřiny získáš 3–5 kW tepla. Při ceně elektřiny 5–6 Kč/kWh vychází teplo z čerpadla výrazně levněji než ze zemního plynu nebo elektrické přímotopné soustavy.</p>
              <ul>
                <li><strong>Nízkoteplotní systémy:</strong> Čerpadla fungují nejefektivněji s podlahovým topením nebo velkoplošnými radiátory (výstupní teplota 35–45 °C). Starší radiátorové soustavy na 70–90 °C jsou méně vhodné bez modernizace.</li>
                <li><strong>Sezónní efektivita (SCOP):</strong> Reálnější ukazatel než COP — průměrná efektivita přes celou topnou sezónu. Kvalitní čerpadla mají SCOP 3,5–4,5.</li>
                <li><strong>Bivalentní provoz:</strong> V nejchladnějších dnech (pod –15 °C) čerpadlo doplňuje elektrická topná tyč nebo záložní kotel. Bivalentní bod je u moderních čerpadel –20 °C a níže.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Nesrovnávej čerpadla jen podle COP při +7 °C (standardní testovací podmínka). Ptej se na SCOP pro klimatickou zónu střední Evropy — to je reálné číslo které ovlivní tvůj účet.</div>
            </section>

            {/* SECTION 2 — TABULKA TYPŮ */}
            <section id="typy">
              <h2>Srovnání typů tepelných čerpadel</h2>
              <p>Existují tři základní typy lišící se zdrojem tepla, cenou, náročností instalace a vhodností pro různé domy.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead>
                    <tr>
                      <th>Typ</th>
                      <th>Zdroj tepla</th>
                      <th>Pořizovací cena</th>
                      <th>Náročnost instalace</th>
                      <th>SCOP (průměr)</th>
                      <th>Vhodné pro</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Vzduch–voda</strong></td>
                      <td>Venkovní vzduch</td>
                      <td>200–400 tis. Kč</td>
                      <td>⭐⭐ Nízká – venkovní + vnitřní jednotka</td>
                      <td>3,2–4,0</td>
                      <td>Většina rodinných domů, retrofit</td>
                    </tr>
                    <tr>
                      <td><strong>Země–voda</strong></td>
                      <td>Zemní kolektor / vrt</td>
                      <td>350–600 tis. Kč</td>
                      <td>⭐⭐⭐⭐ Vysoká – vrt nebo výkop</td>
                      <td>4,0–5,0</td>
                      <td>Novostavby, domy s pozemkem</td>
                    </tr>
                    <tr>
                      <td><strong>Vzduch–vzduch</strong></td>
                      <td>Venkovní vzduch</td>
                      <td>50–150 tis. Kč</td>
                      <td>⭐ Velmi nízká – jako klimatizace</td>
                      <td>2,8–3,5</td>
                      <td>Byty, chaty, doplňkové vytápění</td>
                    </tr>
                    <tr>
                      <td><strong>Voda–voda</strong></td>
                      <td>Podzemní voda</td>
                      <td>400–700 tis. Kč</td>
                      <td>⭐⭐⭐⭐⭐ Velmi vysoká – studny</td>
                      <td>4,5–6,0</td>
                      <td>Domy u spodní vody, high-end</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Pro většinu českých rodinných domů při rekonstrukci je nejlepší volbou <strong>vzduch–voda</strong>. Nižší pořizovací cena, jednoduchá instalace bez výkopů a dostatečná efektivita pro naše klima.</div>
            </section>

            {/* SECTION 3 — TABULKA NÁVRATNOSTI */}
            <section id="navratnost">
              <h2>Úspory a návratnost investice v roce 2026</h2>
              <p>Návratnost závisí na aktuálních cenách energií, velikosti domu, kvalitě zateplení a typu stávajícího topení. Níže jsou realistické odhady pro průměrný rodinný dům 150 m² v ČR.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead>
                    <tr>
                      <th>Původní topení</th>
                      <th>Roční náklady před</th>
                      <th>Roční náklady po</th>
                      <th>Roční úspora</th>
                      <th>Cena čerpadla</th>
                      <th>Návratnost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Elektřina přímotop</strong></td>
                      <td>80 000 Kč</td>
                      <td>22 000 Kč</td>
                      <td><strong>58 000 Kč</strong></td>
                      <td>250 000 Kč</td>
                      <td>~4–5 let</td>
                    </tr>
                    <tr>
                      <td><strong>Propan-butan</strong></td>
                      <td>65 000 Kč</td>
                      <td>22 000 Kč</td>
                      <td><strong>43 000 Kč</strong></td>
                      <td>250 000 Kč</td>
                      <td>~6 let</td>
                    </tr>
                    <tr>
                      <td><strong>Zemní plyn</strong></td>
                      <td>45 000 Kč</td>
                      <td>22 000 Kč</td>
                      <td><strong>23 000 Kč</strong></td>
                      <td>250 000 Kč</td>
                      <td>~11 let</td>
                    </tr>
                    <tr>
                      <td><strong>Tuhá paliva (uhlí)</strong></td>
                      <td>35 000 Kč</td>
                      <td>22 000 Kč</td>
                      <td><strong>13 000 Kč</strong></td>
                      <td>250 000 Kč</td>
                      <td>~19 let</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>Návratnost se výrazně zkracuje při využití <strong>dotace Nová zelená úsporám</strong> (až 100 000 Kč) a levné noční elektrotarify (D57d). S dotací se návratnost při přechodu z plynu zkracuje na 7–8 let.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Výpočet návratnosti dělej vždy s <strong>reálnou spotřebou</strong> svého domu — ne s průměry. Nech si zpracovat energetický audit nebo alespoň projektový výpočet od dodavatele čerpadla.</div>
            </section>

            {/* SECTION 4 — CHECKLIST */}
            <section id="checklist">
              <h2>5 věcí, které musíš zkontrolovat než si čerpadlo objednáš</h2>
              <p>Tepelné čerpadlo není plug-and-play. Aby fungovalo efektivně a investice se vrátila, dům musí splňovat určité podmínky.</p>
              <ul>
                <li>
                  <strong>✅ 1. Zateplení domu:</strong> Čerpadlo funguje nejlépe v dobře zatepleném domě. Pokud máš tepelnou ztrátu nad 10 kW (starší nezateplený dům), nejdřív zateplit — pak čerpadlo. Jinak budeš platit za velké čerpadlo které běží na plný výkon celou zimu.
                </li>
                <li>
                  <strong>✅ 2. Topný systém — výstupní teplota:</strong> Zkontroluj na jakou teplotu topí tvoje soustava. Podlahové topení (35–45 °C) je ideální. Starší radiátory na 70–90 °C vyžadují buď výměnu za větší, nebo speciální čerpadlo s vyšší výstupní teplotou (s nižším COP).
                </li>
                <li>
                  <strong>✅ 3. Elektrická přípojka a jističe:</strong> Čerpadla vzduch–voda mají příkon 3–6 kW. Zkontroluj zda máš dostatečně dimenzovanou přípojku a jističe. Některé domy vyžadují posílení přípojky (náklad 20–50 tis. Kč navíc).
                </li>
                <li>
                  <strong>✅ 4. Místo pro venkovní jednotku a hlučnost:</strong> Venkovní jednotka vydává 45–60 dB(A) — jako tichá konverzace. Musí být umístěna min. 3 m od hranice souseda (dle zákona o ochraně zdraví). Zkontroluj vzdálenosti a případně naplánuj protihlukovou clonu.
                </li>
                <li>
                  <strong>✅ 5. Zásobník teplé vody (TV):</strong> Čerpadlo samo o sobě neohřeje teplou vodu instantně — potřebuješ zásobník 200–300 litrů. Pokud ho nemáš, připočti k nákladům dalších 20–40 tis. Kč za bojler.
                </li>
              </ul>
            </section>

            {/* SECTION 5 */}
            <section id="dotace">
              <h2>Dotace Nová zelená úsporám 2026</h2>
              <p>Program Nová zelená úsporám (NZÚ) podporovaný SFŽP ČR poskytuje dotace na tepelná čerpadla pro rodinné i bytové domy. V roce 2026 jsou podmínky následující:</p>
              <ul>
                <li><strong>Výše dotace:</strong> Až 100 000 Kč na tepelné čerpadlo vzduch–voda, až 120 000 Kč na země–voda. Dotace pokrývá typicky 30–40 % pořizovací ceny.</li>
                <li><strong>Podmínky:</strong> Rodinný dům musí být trvale obývaný, žadatel musí být vlastník nemovitosti. Čerpadlo musí být instalováno oprávněnou firmou a splňovat minimální SCOP 3,5.</li>
                <li><strong>Postup:</strong> Podání žádosti online přes portál NZÚ → schválení → instalace → doložení faktur → vyplacení dotace. Celý proces trvá 2–6 měsíců.</li>
                <li><strong>Kombinace s kotlíkovou dotací:</strong> NZÚ lze kombinovat s krajskými kotlíkovými dotacemi. Celková podpora může dosáhnout 50–60 % nákladů.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Žádost podávej <strong>před</strong> zahájením instalace — dotace na již instalované čerpadlo většinou nelze přiznat. Nechej si od instalační firmy zpracovat projektovou dokumentaci, kterou NZÚ vyžaduje.</div>
            </section>

            {/* SECTION 6 */}
            <section id="instalace">
              <h2>Instalace a provoz – co čekat</h2>
              <p>Instalace tepelného čerpadla vzduch–voda trvá typicky <strong>2–3 dny</strong> a zahrnuje montáž venkovní jednotky, vnitřní jednotky (hydrobox), zapojení do topné soustavy a nastavení řídící jednotky.</p>
              <ul>
                <li><strong>Venkovní jednotka:</strong> Umísťuje se na fasádu nebo na zem na konzolích. Potřebuje přístup k volnému vzduchu — nesmí být uzavřena v prostoru bez cirkulace.</li>
                <li><strong>Vnitřní hydrobox:</strong> Nahrazuje plynový kotel — zapojuje se do topné soustavy a zásobníku TV. Velikostně odpovídá menšímu kotli.</li>
                <li><strong>Uvedení do provozu:</strong> Vždy zajišťuje autorizovaný technik. Nesprávné nastavení topných křivek a bivalentního bodu způsobuje neefektivní provoz.</li>
                <li><strong>Servis:</strong> Tepelná čerpadla vyžadují roční servis (kontrola chladiva, čištění filtrů, kontrola tlaku). Náklady 2 000–4 000 Kč/rok.</li>
                <li><strong>Životnost:</strong> Kvalitní čerpadlo vydrží 15–20 let. Kompresor je nejdražší součást — jeho výměna stojí 40 000–80 000 Kč.</li>
              </ul>
            </section>

            {/* SECTION 7 */}
            <section id="chyby">
              <h2>Nejčastější chyby při výběru a instalaci</h2>
              <ul>
                <li><strong>Předimenzování čerpadla:</strong> Větší neznamená lepší. Čerpadlo které běží v krátkých cyklech (časté zapínání/vypínání) je neefektivní a opotřebovává kompresor. Nech si udělat správný výpočet tepelné ztráty.</li>
                <li><strong>Instalace bez modernizace topné soustavy:</strong> Zapojení čerpadla do staré vysokoteplotní soustavy bez úpravy radiátorů vede k nízkému COP a vysokým účtům.</li>
                <li><strong>Ignorování hlučnosti:</strong> Levná čerpadla mohou být hlučná. Zkontroluj hlučnost při plném výkonu (A-vážená hladina), ne jen v tichém režimu.</li>
                <li><strong>Výběr pouze podle ceny:</strong> Nejlevnější čerpadlo má obvykle nižší SCOP a kratší životnost. Rozdíl 50 000 Kč v pořizovací ceně se vrátí za 3–4 roky na nižších provozních nákladech.</li>
                <li><strong>Neřešení zateplení předem:</strong> Nejčastější chyba. Čerpadlo v nezatepleném domě pracuje naplno celou zimu — efektivita klesá a úspory jsou minimální.</li>
              </ul>
            </section>

            {/* SECTION 8 — FAQ */}
            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">
                    Funguje tepelné čerpadlo při –20 °C?
                    <span className="faq-icon">▾</span>
                  </summary>
                  <div className="faq-body">
                    Ano — moderní čerpadla vzduch–voda od předních výrobců (Mitsubishi, Daikin, Stiebel Eltron) fungují až do –25 °C. COP při takových teplotách klesá na 1,5–2,0, ale čerpadlo stále topí. Pod bivalentním bodem (obvykle –15 až –20 °C) se automaticky zapíná záložní elektrická topná tyč pro doplnění výkonu.
                  </div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">
                    Jak vysoká je dotace Nová zelená úsporám na tepelné čerpadlo?
                    <span className="faq-icon">▾</span>
                  </summary>
                  <div className="faq-body">
                    V roce 2026 lze získat až 100 000 Kč na tepelné čerpadlo vzduch–voda a až 120 000 Kč na země–voda v programu NZÚ. Podmínkou je minimální SCOP 3,5, instalace oprávněnou firmou a podání žádosti před zahájením prací. Dotace se kombinuje s krajskými kotlíkovými dotacemi — celková podpora může pokrýt 40–60 % nákladů.
                  </div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">
                    Potřebuji stavební povolení na tepelné čerpadlo?
                    <span className="faq-icon">▾</span>
                  </summary>
                  <div className="faq-body">
                    Zpravidla ne — instalace tepelného čerpadla vzduch–voda na rodinný dům nevyžaduje stavební povolení ani ohlášení stavby, pokud venkovní jednotka nepřesahuje určité rozměry a je umístěna na vlastním pozemku. Výjimkou jsou památkově chráněné objekty nebo domy v chráněných krajinných oblastech. Vždy ověř na místním stavebním úřadě.
                  </div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">
                    Lze tepelné čerpadlo použít i na chlazení v létě?
                    <span className="faq-icon">▾</span>
                  </summary>
                  <div className="faq-body">
                    Ano — většina moderních čerpadel vzduch–voda umí reverzní provoz (chlazení). Při podlahovém topení funguje jako pasivní chlazení (cirkulace studené vody podlahou), při aktivním chlazení dosahuje EER 3–4. Čerpadlo vzduch–vzduch funguje jako plnohodnotná klimatizace. Chlazení není podporováno dotacemi NZÚ.
                  </div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">
                    Jak dlouho trvá instalace a musím být doma bez tepla?
                    <span className="faq-icon">▾</span>
                  </summary>
                  <div className="faq-body">
                    Instalace standardního čerpadla vzduch–voda trvá 2–3 dny. Profesionální firma naplánuje instalaci tak, aby byl výpadek topení minimální — obvykle 4–8 hodin během připojování. Doporučujeme instalaci naplánovat na jaro nebo léto, kdy výpadek topení nevadí. V zimě je instalace možná, ale komplikovanější.
                  </div>
                </details>
              </div>
            </section>

            {/* SHARE BOTTOM */}
            <ShareButtons
              url="https://domovniguru.cz/blog/tepelne-cerpadlo-pruvodce"
              title="Tepelné čerpadlo: Kompletní průvodce výběrem, úsporami a instalací 2026"
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
                <li><a href="#jak-funguje">Jak čerpadlo funguje</a></li>
                <li><a href="#typy">Srovnání typů</a></li>
                <li><a href="#navratnost">Úspory a návratnost</a></li>
                <li><a href="#checklist">5 věcí před objednávkou</a></li>
                <li><a href="#dotace">Dotace NZÚ 2026</a></li>
                <li><a href="#instalace">Instalace a provoz</a></li>
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
}
