import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak pokládat betonové dlaždice na terasu – postup 2026",
  description: "Pokládka betonových dlaždic na terasu nebo chodník krok za krokem. Příprava podloží, spád, kladení a spárování. Trvanlivý výsledek bez vydlážděných pruhů.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/pokladat-betonove-dlazdice" },
  openGraph: { title: "Jak pokládat betonové dlaždice na terasu 2026", description: "Příprava podloží, spád, kladení a spárování – trvanlivá terasa krok za krokem.", url: "https://www.domovniguru.cz/blog/pokladat-betonove-dlazdice", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-14T08:00:00Z", modifiedTime: "2026-04-14T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak pokládat betonové dlaždice na terasu 2026", description: "Příprava podloží, spád, kladení a spárování – trvanlivá terasa." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/pokladat-betonove-dlazdice#article",
    "headline": "Jak pokládat betonové dlaždice na terasu – postup 2026",
    "datePublished": "2026-04-14T08:00:00Z",
    "dateModified": "2026-04-14T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak pokládat betonové dlaždice", "pokládka dlaždic terasa", "příprava podloží dlaždice", "spád terasy", "spárování dlaždic", "betonové dlaždice postup"]
  }]
};

const RELATED = [
  { title: "Jak připravit zahradu na jaro", href: "/blog/jarni-zahrada", read: "7 min" },
  { title: "Jak ošetřit dřevěnou terasu", href: "/blog/drevo-terasa-zima", read: "5 min" },
  { title: "Jak zařídit terasu na balkoně", href: "/blog/terasa-na-balkone", read: "5 min" },
  { title: "Jak postavit pergolu na terasu", href: "/blog/pergola-postup-stavba", read: "7 min" },
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
              <Link href="/blog/kategorie/zahrada">Zahrada & terasa</Link><span className="breadcrumb-sep">/</span>
              <span>Pokládka betonových dlaždic</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 8 min čtení</span>
              </div>
              <h1 className="article-h1">Jak pokládat betonové dlaždice na terasu – příprava podloží, spád a spárování</h1>
              <p className="article-lead">Špatně položená terasa se po první zimě zdvihne, praskne nebo zamokří. Správná příprava podloží je 80 % práce — samotná pokládka dlaždic pak trvá odpoledne. Tady je jak na to.</p>
              <div className="article-meta-row"><span>Aktualizováno: 14. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/pokladat-betonove-dlazdice" title="Jak pokládat betonové dlaždice na terasu – postup 2026" />
            </header>

            {/* HERO SVG */}
            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 210" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="210" fill="#f4f0ec"/>
                <defs>
                  <linearGradient id="zeminaDl" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#8B6340"/><stop offset="100%" stopColor="#6b4820"/>
                  </linearGradient>
                  <linearGradient id="sterkDl" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#c8b898"/><stop offset="100%" stopColor="#a89878"/>
                  </linearGradient>
                  <linearGradient id="pisekDl" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#e8d8a8"/><stop offset="100%" stopColor="#c8b888"/>
                  </linearGradient>
                </defs>

                {/* Průřez podložím — vlevo */}
                <g transform="translate(20,15)">
                  <rect x="0" y="0" width="240" height="180" rx="8" fill="#f8f4ee" stroke="#d8d0c8" strokeWidth="1.2"/>
                  <text x="120" y="16" textAnchor="middle" fontSize="9" fill="#6a6050" fontWeight="700" letterSpacing="0.04em">PRŮŘEZ PODLOŽÍM</text>

                  {/* Vrstvy */}
                  {/* Dlaždice */}
                  <rect x="15" y="22" width="210" height="22" rx="3" fill="#c8c0b8" stroke="#a8a098" strokeWidth="1"/>
                  <line x1="85" y1="22" x2="85" y2="44" stroke="#a8a098" strokeWidth="1"/>
                  <line x1="155" y1="22" x2="155" y2="44" stroke="#a8a098" strokeWidth="1"/>
                  <text x="120" y="37" textAnchor="middle" fontSize="8" fill="#6a6058" fontWeight="600">DLAŽDICE (4–6 cm)</text>

                  {/* Písek */}
                  <rect x="15" y="44" width="210" height="20" rx="0" fill="url(#pisekDl)"/>
                  <text x="120" y="57" textAnchor="middle" fontSize="8" fill="#5a4a30" fontWeight="600">VYROVNÁVACÍ PÍSEK (3–5 cm)</text>

                  {/* Štěrk */}
                  <rect x="15" y="64" width="210" height="40" rx="0" fill="url(#sterkDl)"/>
                  {/* Štěrk textura */}
                  {[30,55,80,105,130,155,180,205].map((x,i) => (
                    <ellipse key={i} cx={x} cy={76+i%3*6} rx="6" ry="4" fill="#b0a080" opacity="0.5"/>
                  ))}
                  <text x="120" y="91" textAnchor="middle" fontSize="8" fill="#4a3a20" fontWeight="600">ŠTĚRKOVÉ LOŽE (10–15 cm)</text>

                  {/* Geotextile */}
                  <rect x="15" y="104" width="210" height="4" rx="0" fill="#9090c0" opacity="0.6"/>
                  <text x="120" y="115" textAnchor="middle" fontSize="7.5" fill="#5050a0">GEOTEXTILIE</text>

                  {/* Zemina */}
                  <rect x="15" y="118" width="210" height="50" rx="0" fill="url(#zeminaDl)"/>
                  <text x="120" y="148" textAnchor="middle" fontSize="8" fill="#f5e8d0" fontWeight="600">ZHUTNĚNÁ ZEMINA</text>

                  {/* Spád šipka */}
                  <path d="M20 22 L220 28" stroke="#e07040" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4,3"/>
                  <text x="175" y="20" fontSize="7.5" fill="#e07040" fontWeight="600">spád 2 %</text>
                </g>

                {/* Postup — vpravo */}
                <g transform="translate(278,15)">
                  <rect x="0" y="0" width="460" height="180" rx="8" fill="#fff" stroke="#e0d8d0" strokeWidth="1"/>
                  <text x="230" y="16" textAnchor="middle" fontSize="9" fill="#6a6050" fontWeight="700" letterSpacing="0.04em">POSTUP POKLÁDKY</text>

                  {[
                    { n:"1", text:"Výkop 20–25 cm hluboko", sub:"dle velikosti dlaždic + vrstvy", color:"#8B6340" },
                    { n:"2", text:"Geotextilie na dno", sub:"zabrání prorůstání plevele", color:"#9090c0" },
                    { n:"3", text:"Štěrk 10–15 cm + zhutnění", sub:"frakce 16–32 mm, pěchovat!", color:"#c8b898" },
                    { n:"4", text:"Vyrovnávací písek 3–5 cm", sub:"hrubý, ne jemný stavební", color:"#e8d8a8" },
                    { n:"5", text:"Kladení dlaždic s mezerami 5 mm", sub:"kontrolovat vodováhou průběžně", color:"#c8c0b8" },
                    { n:"6", text:"Spárování křemičitým pískem", sub:"zametat, zalít, opakovat", color:"#a8a090" },
                  ].map(({n, text, sub, color}, i) => {
                    const col = i < 3 ? 0 : 1;
                    const row = i % 3;
                    return (
                      <g key={i} transform={`translate(${col*228+12}, ${28+row*47})`}>
                        <rect x="0" y="0" width="215" height="40" rx="5" fill={color} opacity="0.1" stroke={color} strokeWidth="0.6"/>
                        <circle cx="16" cy="20" r="12" fill={color} opacity="0.2"/>
                        <text x="16" y="24" textAnchor="middle" fontSize="11" fill={color} fontWeight="700">{n}</text>
                        <text x="35" y="16" fontSize="9.5" fill="#2a2a28" fontWeight="600">{text}</text>
                        <text x="35" y="29" fontSize="8" fill="#8a8078">{sub}</text>
                      </g>
                    );
                  })}
                </g>

                {/* Dolní lišta */}
                <rect y="190" width="760" height="20" fill="#ece8e0" opacity="0.5"/>
                <text x="380" y="203" textAnchor="middle" fontSize="8" fill="#8a7860" fontWeight="600" letterSpacing="0.04em">🏗️ PŘÍPRAVA PODLOŽÍ = 80 % PRÁCE · SPÁD 2 % OD DOMU · GEOTEXTILIE VŽDY</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#priprava">Příprava a plánování</a></li>
                <li><a href="#podlozi">Příprava podloží – klíčový krok</a></li>
                <li><a href="#kladeni">Kladení dlaždic</a></li>
                <li><a href="#spad">Spád – proč je důležitý</a></li>
                <li><a href="#sparovani">Spárování</a></li>
                <li><a href="#material">Kolik materiálu potřebuješ</a></li>
                <li><a href="#chyby">Nejčastější chyby</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="priprava">
              <h2>Příprava a plánování</h2>
              <p>Než začneš kopat, urči přesné rozměry terasy, typ a velikost dlaždic a vyznač spád. Špatné plánování znamená zbytečné přeřezávání dlaždic a nevzhledné řešení u okrajů.</p>
              <ul>
                <li><strong>Rozměry a layout:</strong> Nakresli si půdorys terasy na papír. Dlaždice rozmísti tak aby byly u viditelných hran celé — řezané dlaždice nechej u zdi nebo za nábytkem. Ideálně začni od středu nebo od nejviditelnějšího rohu.</li>
                <li><strong>Výběr dlaždic:</strong> Betonové dlaždice pro exteriér musí mít mrazuvzdornost (označení C3 nebo W4). Tloušťka min. 5 cm pro pěší provoz, 8+ cm pro pojezdové plochy. Povrchová textura (protiskluznost) je důležitá — hladká dlaždice je kluzká za mokra.</li>
                <li><strong>Nákup materiálu:</strong> Dlaždice + 10 % rezerva na odpad a řezání. Štěrk: plocha × 0,15 m = m³. Písek: plocha × 0,05 m = m³. Geotextilie: plocha + 20 % přesah.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Před nákupem dlaždic polož 2–3 kusy na zem a dívej se na ně za různého osvětlení. Barva a textura v obchodě vypadá jinak než venku na přímém slunci.</div>
            </section>

            <section id="podlozi">
              <h2>Příprava podloží – klíčový krok</h2>
              <p>Toto je nejdůležitější část celé práce. Špatné podloží způsobí zdvihnutí, propadnutí nebo prasknutí dlaždic po první zimě. Věnuj přípravě podloží stejně času jako samotné pokládce.</p>
              <ul>
                <li><strong>Krok 1 — Výkop:</strong> Hloubka výkopu = tloušťka dlaždice + 5 cm písek + 12 cm štěrk + 3 cm rezerva = celkem cca 22–25 cm. U pojezdové plochy (auto) počítej s 30+ cm. Výkop musí být rovný a zhutněný.</li>
                <li><strong>Krok 2 — Geotextilie:</strong> Na dno a stěny výkopu polož geotextilii. Zabrání prorůstání plevele, promíchávání štěrku se zeminou a zajistí odvodnění. Přesah přes okraje min. 20 cm.</li>
                <li><strong>Krok 3 — Štěrk (frakce 16–32 mm):</strong> Nasypej 10–15 cm štěrku a důkladně zhutnit pěchem nebo vibrační deskou (pronájem 500–800 Kč/den). Nezdutněný štěrk způsobí pozdější propadnutí.</li>
                <li><strong>Krok 4 — Vyrovnávací písek:</strong> Na zhutnění štěrku nasypej 3–5 cm hrubého písku (ne jemného stavebního — hrubý se lépe roztahuje a nevysychá). Hrábemi vyrovnej na co nejrovnější plochu.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Písek vyrovnávej vodícími lištami (trubky nebo profily položené na štěrku ve správné výšce). Přiložíš latě přes lišty a stáhneš písek na přesnou výšku. Bez lišt je rovné podloží prakticky nemožné.</div>
            </section>

            <section id="spad">
              <h2>Spád – proč je kritický</h2>
              <p>Terasa musí mít spád <strong>minimálně 2 % (2 cm na 1 m)</strong> a musí být vždy od domu směrem ven. Bez spádu se voda hromadí u základů domu a způsobuje vlhkost ve sklepě nebo podmáčení základů.</p>
              <ul>
                <li><strong>Jak nastavit spád:</strong> Při vyrovnávání písku nastav vodící lišty s výškovým rozdílem 2 cm na každý metr vzdálenosti od domu.</li>
                <li><strong>Kontrola vodováhou:</strong> Delší vodováha (min. 1,5 m) s přiloženou podložkou 2 cm na konci ti ukáže správný spád. Bublinka musí být uprostřed.</li>
                <li><strong>Odvodňovací kanálek:</strong> Na větší terasy (nad 20 m²) nebo u vchodů uvažuj o odvodňovacím kanálku u okraje — zvládne větší přívalové srážky.</li>
              </ul>
            </section>

            <section id="kladeni">
              <h2>Kladení dlaždic</h2>
              <ul>
                <li><strong>Začni od správného rohu:</strong> Ideálně od nejviditelnějšího rohu nebo od středu. Natáhni šňůry jako vodítko pro rovné řady.</li>
                <li><strong>Pokládej bez šlápnutí na písek:</strong> Po vyrovnaném písku nešlapej. Klekni na položené dlaždice nebo použij prkno pro rozložení váhy.</li>
                <li><strong>Mezery 5–8 mm:</strong> Použij plastové distančníky nebo dřevěné klínky pro jednotné spáry. Spáry umožňují drobné pohyby při teplotních změnách — bez nich by dlaždice praskaly.</li>
                <li><strong>Poklepej gumovou paličkou:</strong> Každou dlaždici jemně zaklepej gumovou paličkou pro rovnoměrný kontakt s pískem. Zkontroluj vodováhou — dlaždice musí být v rovině se sousedními.</li>
                <li><strong>Průběžná kontrola:</strong> Každých 3–5 dlaždic přiloži dlouhou latě a zkontroluj rovnost. Opravit dlaždici je snadné dokud je písek čerstvý — po dni je to mnohem složitější.</li>
                <li><strong>Řezání dlaždic:</strong> Úhlová bruska s kotoučem na beton nebo zapůjčená stolní řezačka (půjčovna 300–500 Kč/den). Vždy řezat venku nebo s respirátorem — betonový prach je zdraví nebezpečný.</li>
              </ul>
            </section>

            <section id="sparovani">
              <h2>Spárování – finální krok</h2>
              <p>Spárování uzavře spáry, zabrání prorůstání plevele a dá terasu finální vzhled.</p>
              <ul>
                <li><strong>Křemičitý písek pro spárování:</strong> Speciální jemnozrnný křemičitý písek (ne stavební písek — je příliš hrubý). Cena 200–400 Kč za 25 kg pytel.</li>
                <li><strong>Postup:</strong> Nasypej písek na povrch dlaždic a zametej tvrdým kartáčem do spár. Zalijí vodou (ne silným proudem — spláchneš písek). Po zaschnutí opakuj — písek se usadí a spáry se doplní.</li>
                <li><strong>Polymérový spárovací písek:</strong> Speciální písek s pojivem který po navlhčení ztvrdne. Odolnější vůči pleveli a hmyzu, vyšší cena (400–800 Kč/pytel).</li>
                <li><strong>Kdy chodit po nové terase:</strong> Po spárování počkej 24–48 hodin než začneš terasu plně zatěžovat.</li>
              </ul>
            </section>

            <section id="material">
              <h2>Kolik materiálu potřebuješ</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Materiál</th><th>Množství na 10 m²</th><th>Orientační cena</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Betonové dlaždice 40×40 cm</strong></td><td>~65 ks (+ 10 % rezerva)</td><td>1 500–4 000 Kč</td></tr>
                    <tr><td><strong>Štěrk frakce 16–32 mm</strong></td><td>1,5–2 t (cca 1 m³)</td><td>500–800 Kč</td></tr>
                    <tr><td><strong>Hrubý písek</strong></td><td>0,5 m³</td><td>200–400 Kč</td></tr>
                    <tr><td><strong>Geotextilie</strong></td><td>12–15 m²</td><td>150–300 Kč</td></tr>
                    <tr><td><strong>Spárovací písek</strong></td><td>1–2 pytle (25 kg)</td><td>200–600 Kč</td></tr>
                    <tr><td><strong>Celkem materiál</strong></td><td>10 m² terasy</td><td><strong>2 500–6 000 Kč</strong></td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Štěrk a písek objednávej v pytlích nebo volně ložený? Pro plochy nad 15 m² je volně ložený materiál dovezený kontejnerem výrazně levnější. Pod 10 m² je pohodlnější koupení v pytlích v hobbymarketu.</div>
            </section>

            <section id="chyby">
              <h2>Nejčastější chyby při pokládce dlaždic</h2>
              <ul>
                <li><strong>Nedostatečný výkop:</strong> Příliš mělký výkop způsobí že terasa je výše než okolní terén — voda teče na terasu místo od ní.</li>
                <li><strong>Nezdutněný štěrk:</strong> Bez zhutnění se štěrk postupně usadí a dlaždice se propadnou. Vibrační deska je nutnost pro plochy nad 5 m².</li>
                <li><strong>Špatný spád nebo spád k domu:</strong> Nejdražší chyba — podmáčení základů. Vždy kontroluj spád vodováhou.</li>
                <li><strong>Jemný písek místo hrubého:</strong> Jemný písek se při dešti smývá ze spár a dlaždice pak nemají oporu.</li>
                <li><strong>Žádné spáry mezi dlaždicemi:</strong> Betonové dlaždice se roztahují teplem. Bez spár praskají nebo se zdvihají v létě.</li>
                <li><strong>Spárování za sucha ihned po pokládce:</strong> Počkej aspoň den aby se dlaždice usadily a pak spáruj. Spárování čerstvě položených dlaždic způsobí nerovnosti.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Jak hluboký výkop potřebuji pro betonové dlaždice?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Pro pěší terasu s dlaždicemi tloušťky 5 cm: výkop 22–25 cm (5 cm dlaždice + 4 cm písek + 13 cm štěrk + rezerva). Pro pojezdovou plochu osobním autem: min. 30 cm s dlaždicemi 8 cm tloušťky. Výkop vždy zahrnuj rezervu pro geotextilii a zhutnění.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Je nutná geotextilie?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Geotextilie není povinná ale výrazně prodlužuje životnost terasy. Zabrání promíchávání štěrku se zeminou (štěrk by se postupně propadal), prorůstání plevele spárami a zlepšuje odvodnění. Cena je nízká (15–25 Kč/m²) a montáž trvá minuty — vyplatí se vždy.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Mohu položit dlaždice sám nebo potřebuji řemeslníka?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Pokládka betonových dlaždic na sucho (bez lepení) je DIY přístupná práce. Nejtěžší část je příprava podloží — zhutnění štěrku vyžaduje vibrační desku. Malé plochy (do 20 m²) zvládne šikovný laik za víkend. Větší plochy nebo složité vzory jsou lepší svěřit dlaždiči.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak čistit betonové dlaždice od mechů a řas?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Tlakový čistič (100–150 bar) je nejúčinnější. Pro mech a řasy použij roztok jedlé sody (3 lžíce/litr) nebo speciální přípravek na čištění dlaždic. Po vyčištění lze nanést impregnaci proti prorůstání mechu — vydrží 2–3 sezóny.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/pokladat-betonove-dlazdice" title="Jak pokládat betonové dlaždice na terasu – postup 2026" />

            <section className="related-section">
              <h2>Související články</h2>
              <div className="related-grid">
                {RELATED.map((r) => (
                  <Link key={r.href} href={r.href} className="card">
                    <div className="card-eyebrow-row"><span>Zahrada & terasa</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#priprava">Příprava a plánování</a></li>
                <li><a href="#podlozi">Příprava podloží</a></li>
                <li><a href="#spad">Spád</a></li>
                <li><a href="#kladeni">Kladení dlaždic</a></li>
                <li><a href="#sparovani">Spárování</a></li>
                <li><a href="#material">Množství materiálu</a></li>
                <li><a href="#chyby">Nejčastější chyby</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/zahrada" className="sidebar-cat-link">🌿 Zahrada & terasa<span>20 článků →</span></Link>
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
