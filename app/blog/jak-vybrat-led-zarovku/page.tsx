import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak vybrat LED žárovku 2026: Průvodce parametry, barvou světla a úsporami",
  description: "Watt vs. lumen, Kelviny, CRI index, patice E27/E14/GU10. Průvodce výběrem LED žárovky pro každou místnost.",
  alternates: { canonical: "https://domovniguru.cz/blog/jak-vybrat-led-zarovku" },
  openGraph: { title: "Jak vybrat LED žárovku 2026", description: "Watt vs. lumen, Kelviny, CRI index a reálné úspory.", url: "https://domovniguru.cz/blog/jak-vybrat-led-zarovku", siteName: "DomovniGuru", locale: "cs_CZ", type: "article" },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://domovniguru.cz/blog/jak-vybrat-led-zarovku#article", "headline": "Jak vybrat LED žárovku 2026: Průvodce parametry, barvou světla a úsporami", "datePublished": "2026-03-01T08:00:00Z", "dateModified": "2026-03-21T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "inLanguage": "cs", "keywords": ["jak vybrat LED žárovku", "LED žárovka watt lumen", "teplota světla Kelviny", "CRI index", "úspora LED žárovky", "E27 E14 GU10"] }] };

const RELATED = [
  { title: "LED vs. žárovky – co se skutečně vyplatí?", href: "/blog/led-vs-zarovky", read: "4 min" },
  { title: "Jak snížit účet za elektřinu doma", href: "/blog/snizit-ucet-za-elektrinu", read: "5 min" },
  { title: "Jak osvětlit kuchyňskou linku", href: "/blog/osvetlit-kuchynskou-linku", read: "4 min" },
  { title: "Jak nainstalovat stmívač světla", href: "/blog/instalovat-stmivac", read: "4 min" },
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
              <Link href="/blog/kategorie/elektrika">Elektrika & osvětlení</Link><span className="breadcrumb-sep">/</span>
              <span>Jak vybrat LED žárovku</span>
            </nav>

            {/* HEADER */}
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">⚡ Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 8 min čtení</span>
              </div>
              <h1 className="article-h1">Jak vybrat LED žárovku: Průvodce parametry, barvou světla a úsporami</h1>
              <p className="article-lead">Krabička od LED žárovky je plná čísel — watt, lumen, kelvin, CRI. Víme co každé číslo znamená a jak ho použít pro výběr správné žárovky do každé místnosti. Plus reálné úspory při výměně celého bytu.</p>
              <div className="article-meta-row"><span>Aktualizováno: 21. března 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons
                url="https://domovniguru.cz/blog/jak-vybrat-led-zarovku"
                title="Jak vybrat LED žárovku 2026: Průvodce parametry, barvou světla a úsporami"
              />
            </header>

            {/* HERO ILLUSTRATION */}
            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 210" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="210" fill="#fdf8f0"/>
                <defs>
                  <linearGradient id="ledBgGrad" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#fdf6e8"/>
                    <stop offset="100%" stopColor="#f8f0e0"/>
                  </linearGradient>
                  <linearGradient id="kelvinGrad" x1="0" y1="0" x2="1" y2="0" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#ffcc44"/>
                    <stop offset="35%" stopColor="#fff4cc"/>
                    <stop offset="65%" stopColor="#f0f8ff"/>
                    <stop offset="100%" stopColor="#b0d0ff"/>
                  </linearGradient>
                </defs>

                <rect width="760" height="210" fill="url(#ledBgGrad)"/>

                {/* === KLASICKÁ ŽÁROVKA (vlevo) === */}
                <g transform="translate(48, 20)">
                  {/* Baňka */}
                  <ellipse cx="45" cy="52" rx="38" ry="42" fill="#f5e8c0" stroke="#d4c080" strokeWidth="1.5" opacity="0.9"/>
                  {/* Záře kolem */}
                  <ellipse cx="45" cy="52" rx="48" ry="52" fill="#f9d84a" opacity="0.08"/>
                  {/* Vlákno */}
                  <path d="M38 55 Q40 40 42 55 Q44 70 46 55 Q48 40 50 55 Q52 70 54 55" stroke="#e09020" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
                  <line x1="38" y1="55" x2="38" y2="72" stroke="#c07010" strokeWidth="1.2"/>
                  <line x1="54" y1="55" x2="54" y2="72" stroke="#c07010" strokeWidth="1.2"/>
                  {/* Patice */}
                  <rect x="30" y="88" width="30" height="8" rx="2" fill="#b0a080" stroke="#908060" strokeWidth="1"/>
                  <rect x="32" y="96" width="26" height="14" rx="1" fill="#989070" stroke="#807850" strokeWidth="1"/>
                  {[35,39,43,47,51,55].map((x,i)=>(
                    <line key={i} x1={x} y1="96" x2={x} y2="110" stroke="#706840" strokeWidth="0.7" opacity="0.5"/>
                  ))}
                  {/* Popisky */}
                  <text x="45" y="128" textAnchor="middle" fontSize="9" fill="#8a7040" fontWeight="700">KLASICKÁ</text>
                  <text x="45" y="140" textAnchor="middle" fontSize="8" fill="#a09060">60 W = 60 W</text>
                  {/* Křížek */}
                  <circle cx="80" cy="30" r="10" fill="#e07a5f" opacity="0.15"/>
                  <path d="M74 24 L86 36 M86 24 L74 36" stroke="#c05030" strokeWidth="2" strokeLinecap="round"/>
                  {/* Spotřeba */}
                  <rect x="5" y="150" width="80" height="22" rx="4" fill="#e07a5f" opacity="0.12"/>
                  <text x="45" y="165" textAnchor="middle" fontSize="8" fill="#c05030" fontWeight="600">💸 800 Kč/rok</text>
                </g>

                {/* Šipka přechodu */}
                <g transform="translate(148, 85)">
                  <path d="M0 20 L35 20" stroke="#c8b89a" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M31 15 L37 20 L31 25" stroke="#c8b89a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <text x="18" y="12" textAnchor="middle" fontSize="8" fill="#a09070">náhrada</text>
                </g>

                {/* === LED ŽÁROVKA (střed-vlevo) === */}
                <g transform="translate(195, 20)">
                  {/* Baňka */}
                  <ellipse cx="45" cy="52" rx="38" ry="42" fill="#e8f4ff" stroke="#90c0e0" strokeWidth="1.5" opacity="0.95"/>
                  {/* Záře */}
                  <ellipse cx="45" cy="52" rx="50" ry="55" fill="#a0d8ff" opacity="0.06"/>
                  {/* LED čipy */}
                  {[[30,48],[45,38],[60,48],[35,60],[55,60],[45,62]].map(([x,y],i)=>(
                    <g key={i}>
                      <rect x={x-5} y={y-4} width="10" height="8" rx="2" fill="#40a8e0" opacity="0.8"/>
                      <ellipse cx={x} cy={y} rx="3" ry="2.5" fill="#80d8ff" opacity="0.9"/>
                    </g>
                  ))}
                  {/* Dissipátor */}
                  <rect x="27" y="90" width="36" height="10" rx="2" fill="#70a0c0" stroke="#5080a0" strokeWidth="1"/>
                  {[30,36,42,48,54,60].map((x,i)=>(
                    <line key={i} x1={x} y1="90" x2={x} y2="100" stroke="#4070a0" strokeWidth="1" opacity="0.6"/>
                  ))}
                  {/* Patice */}
                  <rect x="30" y="100" width="30" height="8" rx="2" fill="#b0a080" stroke="#908060" strokeWidth="1"/>
                  <rect x="32" y="108" width="26" height="12" rx="1" fill="#989070" stroke="#807850" strokeWidth="1"/>
                  {/* Popisky */}
                  <text x="45" y="133" textAnchor="middle" fontSize="9" fill="#2a6090" fontWeight="700">LED</text>
                  <text x="45" y="145" textAnchor="middle" fontSize="8" fill="#4080b0">9 W = 60 W světla</text>
                  {/* Fajfka */}
                  <circle cx="80" cy="30" r="10" fill="#5a9e6f" opacity="0.15"/>
                  <path d="M74 30 L78 35 L86 23" stroke="#3a7e4f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  {/* Úspora */}
                  <rect x="5" y="152" width="80" height="22" rx="4" fill="#5a9e6f" opacity="0.12"/>
                  <text x="45" y="167" textAnchor="middle" fontSize="8" fill="#3a7e4f" fontWeight="600">💰 120 Kč/rok</text>
                </g>

                {/* === KELVIN SPEKTRUM (vpravo) === */}
                <g transform="translate(320, 15)">
                  <text x="200" y="12" textAnchor="middle" fontSize="10" fill="#6a5a3a" fontWeight="700" letterSpacing="0.05em">TEPLOTA SVĚTLA (KELVINY)</text>
                  {/* Barevný pruh */}
                  <rect x="0" y="20" width="400" height="28" rx="6" fill="url(#kelvinGrad)" stroke="#e0d8c8" strokeWidth="1"/>
                  {/* Svislé dělicí čáry */}
                  {[0,100,200,300,400].map((x,i)=>(
                    <line key={i} x1={x} y1="20" x2={x} y2="48" stroke="#c0b090" strokeWidth="0.5" opacity="0.4"/>
                  ))}
                  {/* Kelviny */}
                  {[
                    {x:0,   label:"2700 K"},
                    {x:100, label:"3000 K"},
                    {x:200, label:"4000 K"},
                    {x:300, label:"5000 K"},
                    {x:400, label:"6500 K"},
                  ].map(({x,label})=>(
                    <text key={label} x={x} y="60" textAnchor="middle" fontSize="8" fill="#8a7050" fontWeight="600">{label}</text>
                  ))}
                  {/* Popisy místností */}
                  {[
                    {x:30,  icon:"🛏️", name:"Ložnice"},
                    {x:110, icon:"🛋️", name:"Obývák"},
                    {x:205, icon:"🍳", name:"Kuchyně"},
                    {x:305, icon:"💼", name:"Pracovna"},
                    {x:385, icon:"🔧", name:"Garáž"},
                  ].map(({x,icon,name})=>(
                    <g key={name}>
                      <line x1={x} y1="48" x2={x} y2="70" stroke="#c0b090" strokeWidth="1" strokeDasharray="2,2" opacity="0.6"/>
                      <text x={x} y="83" textAnchor="middle" fontSize="11">{icon}</text>
                      <text x={x} y="96" textAnchor="middle" fontSize="7.5" fill="#6a5a3a" fontWeight="600">{name}</text>
                    </g>
                  ))}

                  {/* Legenda teplé/studené */}
                  <text x="30" y="115" textAnchor="middle" fontSize="8" fill="#c08020" fontWeight="600">← Teplá bílá</text>
                  <text x="370" y="115" textAnchor="middle" fontSize="8" fill="#4060c0" fontWeight="600">Studená bílá →</text>

                  {/* Úspora blok */}
                  <rect x="100" y="125" width="200" height="32" rx="6" fill="#5a9e6f" opacity="0.12" stroke="#5a9e6f" strokeWidth="1"/>
                  <text x="200" y="141" textAnchor="middle" fontSize="10" fill="#3a7e4f" fontWeight="700">💰 Úspora až 85 % energie</text>
                  <text x="200" y="153" textAnchor="middle" fontSize="8" fill="#5a9e6f">oproti klasické žárovce</text>
                </g>

                {/* === DOLNÍ LIŠTA v SVG === */}
                <rect y="190" width="760" height="20" fill="#f5f0e8" opacity="0.8"/>
                <text x="95"  y="203" textAnchor="middle" fontSize="8" fill="#8a7040" fontWeight="600" letterSpacing="0.04em">💡 VLÁKNO VS. LED ČIPY</text>
                <text x="285" y="203" textAnchor="middle" fontSize="8" fill="#8a7040" fontWeight="600" letterSpacing="0.04em">🌡️ 2700–6500 K SPEKTRUM</text>
                <text x="475" y="203" textAnchor="middle" fontSize="8" fill="#8a7040" fontWeight="600" letterSpacing="0.04em">💰 ÚSPORA AŽ 85 %</text>
                <text x="650" y="203" textAnchor="middle" fontSize="8" fill="#8a7040" fontWeight="600" letterSpacing="0.04em">⏱️ ŽIVOTNOST 15 000+ HODIN</text>
              </svg>
            </div>

            {/* TOC */}
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#watt-lumen">Watt vs. lumen – co vlastně kupujeme</a></li>
                <li><a href="#kelviny">Teplota světla – Kelviny a barva</a></li>
                <li><a href="#krabicka">Na co koukat na krabičce</a></li>
                <li><a href="#mistnosti">Jakou LED do které místnosti</a></li>
                <li><a href="#uspory">Reálné úspory při výměně žárovek</a></li>
                <li><a href="#chyby">Nejčastější chyby při výběru LED</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            {/* SECTION 1 */}
            <section id="watt-lumen">
              <h2>Watt vs. lumen – co vlastně kupujeme</h2>
              <p>Největší zmatek při výběru LED žárovky způsobuje to, že jsme zvyklí porovnávat žárovky podle wattů — ale watt měří <strong>příkon (spotřebu energie)</strong>, ne jas. U klasických žárovek byl příkon a jas přímočaře propojený — 60 W znamenalo vždy přibližně stejný jas. U LED to neplatí.</p>
              <p>Správná jednotka pro porovnání jasu je <strong>lumen (lm)</strong>. Čím více lumenů, tím jasnější světlo. LED žárovky jsou výrazně efektivnější — na stejný jas spotřebují 5–10× méně energie.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead>
                    <tr>
                      <th>Klasická žárovka</th>
                      <th>Světelný tok (lm)</th>
                      <th>LED náhrada (W)</th>
                      <th>Úspora energie</th>
                      <th>Roční úspora (Kč)*</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>25 W</strong></td>
                      <td>220–250 lm</td>
                      <td>3–4 W LED</td>
                      <td>85 %</td>
                      <td>~110 Kč</td>
                    </tr>
                    <tr>
                      <td><strong>40 W</strong></td>
                      <td>400–450 lm</td>
                      <td>5–6 W LED</td>
                      <td>85 %</td>
                      <td>~175 Kč</td>
                    </tr>
                    <tr>
                      <td><strong>60 W</strong></td>
                      <td>700–800 lm</td>
                      <td>8–10 W LED</td>
                      <td>85 %</td>
                      <td>~260 Kč</td>
                    </tr>
                    <tr>
                      <td><strong>75 W</strong></td>
                      <td>900–1000 lm</td>
                      <td>11–13 W LED</td>
                      <td>83 %</td>
                      <td>~320 Kč</td>
                    </tr>
                    <tr>
                      <td><strong>100 W</strong></td>
                      <td>1300–1500 lm</td>
                      <td>14–16 W LED</td>
                      <td>85 %</td>
                      <td>~430 Kč</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p style={{fontSize:"12px",color:"#9a8a7a"}}>* Výpočet při 4 hodinách svícení denně, cena elektřiny 6 Kč/kWh</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Na krabičce hledej <strong>lm (lumen)</strong> jako hlavní parametr jasu — ne watty. Pro běžné svícení v místnosti potřebuješ 300–500 lm na m² plochy.</div>
            </section>

            {/* SECTION 2 — KELVINY */}
            <section id="kelviny">
              <h2>Teplota světla – Kelviny a barva světla</h2>
              <p>Druhý nejdůležitější parametr po jasu je <strong>teplota světla v Kelvinech (K)</strong>. Určuje barvu světla — od teplé žluté přes neutrální bílou až po studenou modrobílou. Stejně jako jas ovlivňuje to, jak se v místnosti cítíme.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead>
                    <tr>
                      <th>Teplota světla</th>
                      <th>Kelviny</th>
                      <th>Barva světla</th>
                      <th>Doporučená místnost</th>
                      <th>Efekt</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Teplá bílá</strong></td>
                      <td>2 700 K</td>
                      <td>🟡 Žlutooranžová</td>
                      <td>Ložnice, obývák, restaurace</td>
                      <td>Útulnost, relaxace, spánek</td>
                    </tr>
                    <tr>
                      <td><strong>Teplá bílá</strong></td>
                      <td>3 000 K</td>
                      <td>🟡 Teplá bílá</td>
                      <td>Obývák, chodba, koupelna</td>
                      <td>Příjemná, neunavuje oči</td>
                    </tr>
                    <tr>
                      <td><strong>Neutrální bílá</strong></td>
                      <td>4 000 K</td>
                      <td>⬜ Čistá bílá</td>
                      <td>Kuchyně, koupelna, pracovna</td>
                      <td>Soustředění, přesné vnímání barev</td>
                    </tr>
                    <tr>
                      <td><strong>Studená bílá</strong></td>
                      <td>5 000–5 500 K</td>
                      <td>🔵 Chladná bílá</td>
                      <td>Pracovna, dílna, obchod</td>
                      <td>Bdělost, produktivita</td>
                    </tr>
                    <tr>
                      <td><strong>Denní světlo</strong></td>
                      <td>6 500 K</td>
                      <td>🔵 Modrobílá</td>
                      <td>Garáž, sklep, průmysl</td>
                      <td>Maximální ostrost, technické práce</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Do ložnice vždy 2 700–3 000 K — studené světlo (5 000+ K) potlačuje tvorbu melatoninu a zhoršuje kvalitu spánku. Do kuchyně 4 000 K pro přesné vnímání barev při vaření.</div>
            </section>

            {/* SECTION 3 — KRABIČKA CHECKLIST */}
            <section id="krabicka">
              <h2>Na co koukat na krabičce – checklist parametrů</h2>
              <p>Krabička od LED žárovky obsahuje všechny klíčové informace — ale jen pokud víš co hledáš. Tady jsou parametry v pořadí důležitosti.</p>
              <ul>
                <li>
                  <strong>✅ Lumen (lm) — jas:</strong> Hlavní parametr. Pro čtení a práci potřebuješ min. 800 lm, pro ambient osvětlení stačí 400–600 lm. Vyhni se žárovkám které udávají jen watty bez lumenů.
                </li>
                <li>
                  <strong>✅ Kelviny (K) — teplota světla:</strong> 2 700 K = teplá útulná, 4 000 K = neutrální pracovní, 6 500 K = studená technická. Viz tabulka výše.
                </li>
                <li>
                  <strong>✅ CRI / Ra — index podání barev:</strong> Udává jak věrně žárovka zobrazuje barvy oproti přirozenému světlu. Hodnota 0–100, přičemž 100 = sluneční světlo. Pro domácnost hledej min. <strong>Ra 80</strong>, pro koupelnu a šatnu ideálně <strong>Ra 90+</strong>. Levné žárovky mají Ra 60–70 — barvy oblečení a potravin budou vypadat jinak než ve skutečnosti.
                </li>
                <li>
                  <strong>✅ Životnost v hodinách:</strong> Kvalitní LED vydrží 15 000–25 000 hodin. Při 4 hodinách svícení denně = 10–17 let. Vyhni se žárovkám s životností pod 10 000 hodin — jsou levné ale krátkodobé.
                </li>
                <li>
                  <strong>✅ Počet spínacích cyklů:</strong> LED žárovky mají omezený počet zapnutí/vypnutí — kvalitní zvládnou 50 000+ cyklů. Do místností s pohybovým senzorem nebo kde se světlo často přepíná (WC, chodba) kupuj žárovky s vysokým počtem cyklů.
                </li>
                <li>
                  <strong>✅ Patice — E27, E14, GU10:</strong> E27 je standardní velká závitová patice (obývák, ložnice). E14 je malá závitová (lustry, nástěnky). GU10 je bodová (koupelna, kuchyňská linka). Vždy zkontroluj patici svítidla před nákupem.
                </li>
                <li>
                  <strong>✅ Stmívatelnost (dimmable):</strong> Ne každá LED je stmívatelná. Pokud máš stmívač, kupuj explicitně označené žárovky <em>dimmable</em> — ostatní blikají nebo se poškodí.
                </li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Index CRI/Ra je na krabičkách levných žárovek záměrně skrytý nebo chybí — je to červená vlajka. Kvalitní výrobci (Philips, Osram, LEDVANCE) ho vždy uvádějí.</div>
            </section>

            {/* SECTION 4 */}
            <section id="mistnosti">
              <h2>Jakou LED do které místnosti</h2>
              <p>Shrnutí doporučení pro každou místnost na základě jasu, teploty světla a speciálních požadavků.</p>
              <ul>
                <li><strong>Ložnice:</strong> 300–500 lm, 2 700–3 000 K, Ra 80+. Stmívatelná žárovka ideální — večer ztlumit pro pohodlnější usínání.</li>
                <li><strong>Obývací pokoj:</strong> 400–800 lm podle velikosti, 2 700–3 000 K pro odpočinkovou zónu, 4 000 K pro pracovní koutek. Kombinace více světelných bodů s různými teplotami světla.</li>
                <li><strong>Kuchyně:</strong> 500–800 lm, 4 000 K (neutrální bílá pro přesné vnímání barev jídla). Pod skříňky přidat LED pásky nebo bodovky (GU10) pro osvětlení pracovní plochy.</li>
                <li><strong>Koupelna:</strong> 500–700 lm, 3 000–4 000 K, <strong>Ra 90+</strong> (pro přesné vnímání barvy pleti při líčení a holení). Nutné IP44 krytí v zóně u sprchy/vany.</li>
                <li><strong>Pracovna:</strong> 500–1 000 lm, 4 000–5 000 K. Dostatečný jas zabraňuje únavě očí. Přímé osvětlení pracovní plochy (lampa) + nepřímé ambientní osvětlení.</li>
                <li><strong>Dětský pokoj:</strong> 300–500 lm, 3 000 K (ne příliš studené). Noční osvětlení 2 700 K nebo s červeným filtrem aby nerušilo spánek.</li>
                <li><strong>Garáž / sklep / dílna:</strong> 800–1 500 lm, 5 000–6 500 K pro maximální viditelnost detailů. LED trubice nebo průmyslová svítidla pro rovnoměrné osvětlení.</li>
              </ul>
            </section>

            {/* SECTION 5 */}
            <section id="uspory">
              <h2>Reálné úspory při výměně žárovek v bytě</h2>
              <p>Výměna všech žárovek v bytě za LED je jedna z mála investic do domácnosti která se vrátí do roka. Počítejme reálný příklad pro průměrný byt 3+kk s 15 žárovkami.</p>
              <ul>
                <li><strong>Průměrný byt 3+kk:</strong> 15 žárovek, průměrně 60 W klasická žárovka, svícení 4 hodiny denně</li>
                <li><strong>Roční spotřeba před výměnou:</strong> 15 × 60 W × 4 h × 365 = 1 314 kWh → při 6 Kč/kWh = <strong>7 884 Kč/rok</strong></li>
                <li><strong>Roční spotřeba po výměně (LED 9 W):</strong> 15 × 9 W × 4 h × 365 = 197 kWh → = <strong>1 183 Kč/rok</strong></li>
                <li><strong>Roční úspora: 6 701 Kč</strong></li>
                <li><strong>Pořizovací cena LED žárovek:</strong> 15 × 100 Kč = 1 500 Kč</li>
                <li><strong>Návratnost investice: méně než 3 měsíce</strong></li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Nekupuj všechny žárovky najednou — začni od těch kde svítíš nejvíc (obývák, kuchyně). Vrátí se nejrychleji. Méně používané prostory (sklep, WC) vyměň postupně.</div>
            </section>

            {/* SECTION 6 */}
            <section id="chyby">
              <h2>Nejčastější chyby při výběru LED žárovky</h2>
              <ul>
                <li><strong>Výběr podle wattů místo lumenů:</strong> „9W LED = 60W klasická" je orientační, ale různé LED mají různou efektivitu. Vždy porovnávej lumeny.</li>
                <li><strong>Ignorování teploty světla:</strong> Studená LED (6 500 K) v ložnici ruší spánek, teplá LED (2 700 K) v pracovně způsobuje únavu a ospalost.</li>
                <li><strong>Stmívač + nestmívatelná LED:</strong> Způsobuje blikání, přehřívání a předčasné selhání žárovky. Zkontroluj kompatibilitu stmívače i žárovky.</li>
                <li><strong>Nízký CRI bez povšimnutí:</strong> Ra 65 žárovka v šatně způsobí, že barvy oblečení budou vypadat jinak než venku. Vždy min. Ra 80, v koupelně Ra 90+.</li>
                <li><strong>Koupě nejlevnější možné žárovky:</strong> Čínské no-name žárovky za 20 Kč mívají kratší životnost, špatný CRI a mohou elektromagneticky rušit WiFi a jiná zařízení. Philips, Osram nebo LEDVANCE za 60–100 Kč jsou spolehlivější investicí.</li>
              </ul>
            </section>

            {/* SECTION 7 — FAQ */}
            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">
                    Proč LED žárovka po vypnutí mírně svítí?
                    <span className="faq-icon">▾</span>
                  </summary>
                  <div className="faq-body">
                    Toto je běžný jev způsobený dvěma věcmi: (1) Indukční napětí ze souběžně vedených kabelů v elektroinstalaci — malé množství proudu prochází i vypnutým obvodem. (2) Nevhodný stmívač nebo spínač se signalizační LED diodou — tato dioda pouští malý proud přes obvod i ve vypnutém stavu. Řešení: vyměň spínač za typ bez signalizační LED, nebo nainstaluj tzv. „bleed resistor" (bypass). Zdraví ani bezpečnost to neohrožuje, ale obtěžuje to.
                  </div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">
                    Co je to stmívatelná LED a jak ji poznám?
                    <span className="faq-icon">▾</span>
                  </summary>
                  <div className="faq-body">
                    Stmívatelná LED (dimmable) obsahuje speciální elektroniku která umožňuje plynulou regulaci jasu pomocí stmívače. Na krabičce hledej označení <strong>„dimmable"</strong> nebo symbol stmívání. Pozor: ne každá stmívatelná LED je kompatibilní s každým stmívačem. Výrobci uvádějí seznam kompatibilních stmívačů — zkontroluj ho před nákupem. Nestmívatelná LED v obvodu se stmívačem bliká, může bzučet a zkracuje si životnost.
                  </div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">
                    Jak ušetřím co nejvíce při výměně žárovek v bytě?
                    <span className="faq-icon">▾</span>
                  </summary>
                  <div className="faq-body">
                    Prioritizuj podle hodin svícení: obývák a kuchyně svítí nejvíc — tam se investice vrátí nejrychleji. Sklep a WC svítí méně — tam klasické žárovky ještě doslužují. Kupuj žárovky v sadách (3–5 kusů) — cena za kus je nižší. Hledej energetický štítek třídy <strong>A nebo A+</strong>. Vyhni se výprodejovým „energeticky úsporným" žárovkám starší generace (spiral CFL) — LED je efektivnější, spouští se okamžitě a neobsahuje rtuť.
                  </div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">
                    Může LED žárovka fungovat v uzavřeném svítidle?
                    <span className="faq-icon">▾</span>
                  </summary>
                  <div className="faq-body">
                    Záleží na žárovce. LED žárovky jsou citlivé na teplo — v uzavřeném svítidle bez cirkulace vzduchu se přehřívají, zkracuje se jejich životnost a může klesat jas. Hledej žárovky označené <strong>„suitable for enclosed fixtures"</strong> nebo „pro uzavřená svítidla" — mají lepší tepelný management. Případně použij menší žárovky s nižším příkonem (méně tepla) nebo svítidlo vyměň za otevřené.
                  </div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">
                    Jaký je rozdíl mezi E27, E14 a GU10 paticí?
                    <span className="faq-icon">▾</span>
                  </summary>
                  <div className="faq-body">
                    <strong>E27</strong> (Edison 27 mm) je standardní velká závitová patice — nejrozšířenější, používá se v lustrech, stojacích lampách a nástěnkách. <strong>E14</strong> (Edison 14 mm) je malá závitová — typická pro dekorativní svítidla, lustry s více rameny a malé nástěnky. <strong>GU10</strong> je bodová bajonetová patice — používá se v podhledových a koupelnových svítidlech. Před koupí vždy fyzicky zkontroluj patici svítidla nebo vyšroubuj starú žárovku a zkontroluj označení na její patici.
                  </div>
                </details>
              </div>
            </section>

            {/* SHARE BOTTOM */}
            <ShareButtons
              url="https://domovniguru.cz/blog/jak-vybrat-led-zarovku"
              title="Jak vybrat LED žárovku 2026: Průvodce parametry, barvou světla a úsporami"
            />

            {/* RELATED */}
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

          {/* SIDEBAR */}
          <aside className="article-sidebar">
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Obsah</div>
              <nav><ul className="sidebar-toc">
                <li><a href="#watt-lumen">Watt vs. lumen</a></li>
                <li><a href="#kelviny">Teplota světla</a></li>
                <li><a href="#krabicka">Co na krabičce</a></li>
                <li><a href="#mistnosti">Která LED kam</a></li>
                <li><a href="#uspory">Reálné úspory</a></li>
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
        .article-body em{font-style:italic;color:var(--muted)}
        .article-tip{background:#fffbeb;border-left:3px solid #f59e0b;border-radius:0 8px 8px 0;padding:14px 18px;font-size:14px;line-height:1.6;color:#78716c;margin:20px 0}
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
