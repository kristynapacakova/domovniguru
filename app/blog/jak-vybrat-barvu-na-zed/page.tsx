import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak vybrat barvu na zeď – psychologie barev a typy pojiv 2026",
  description: "Jak vybrat správnou barvu do každé místnosti? Psychologie barev, srovnání latexových a akrylátových barev, testování vzorků a praktické tipy. Průvodce 2026.",
  alternates: { canonical: "https://domovniguru.cz/blog/jak-vybrat-barvu-na-zed" },
  openGraph: { title: "Jak vybrat barvu na zeď – psychologie barev a typy pojiv 2026", description: "Psychologie barev, srovnání typů barev a praktické tipy jak testovat vzorky na zdi.", url: "https://domovniguru.cz/blog/jak-vybrat-barvu-na-zed", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-03-01T08:00:00Z", modifiedTime: "2026-03-20T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak vybrat barvu na zeď – psychologie barev a typy pojiv 2026", description: "Psychologie barev, srovnání typů barev a praktické tipy." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://domovniguru.cz/blog/jak-vybrat-barvu-na-zed#article", "headline": "Jak vybrat barvu na zeď – psychologie barev a typy pojiv 2026", "datePublished": "2026-03-01T08:00:00Z", "dateModified": "2026-03-20T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "inLanguage": "cs", "keywords": ["jak vybrat barvu na zeď", "psychologie barev interiér", "barva do obýváku", "barva do ložnice", "latexová barva", "akrylátová barva"] }] };

const RELATED = [
  { title: "Jak malovat zeď – kompletní průvodce pro začátečníky", href: "/blog/jak-malovat-zed", read: "5 min" },
  { title: "Latexová vs. akrylátová barva – jaký je rozdíl?", href: "/blog/latexova-vs-akrylatova-barva", read: "4 min" },
  { title: "Jak malovat rohy a lišty bez přetahování", href: "/blog/jak-malovat-rohy-a-listy", read: "3 min" },
  { title: "Penetrace před malováním – kdy je nutná?", href: "/blog/penetrace-pred-malovanim", read: "4 min" },
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
              <Link href="/blog/kategorie/malovani">Malování & barvy</Link><span className="breadcrumb-sep">/</span>
              <span>Jak vybrat barvu na zeď</span>
            </nav>

            {/* HEADER */}
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování & barvy</Link>
                <span className="article-read-time">⏱ 9 min čtení</span>
              </div>
              <h1 className="article-h1">Jak vybrat barvu na zeď – psychologie barev a typy pojiv</h1>
              <p className="article-lead">Barva zdi dokáže místnost vizuálně zvětšit, zmenšit, uklidnit nebo povzbudit. Než sáhnete po vzorníku, přečtěte si jak barvy fungují v interiéru – a jak si vybrat tu správnou pro každou místnost.</p>
              <div className="article-meta-row"><span>Aktualizováno: 20. března 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons
                url="https://domovniguru.cz/blog/jak-vybrat-barvu-na-zed"
                title="Jak vybrat barvu na zeď – psychologie barev a typy pojiv 2026"
              />
            </header>

            {/* HERO ILLUSTRATION */}
            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 900 210" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="900" height="210" fill="#fdf8f4"/>
                <defs>
                  <linearGradient id="brushGrad" x1="0" y1="0" x2="1" y2="0" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#8B6340"/>
                    <stop offset="100%" stopColor="#6b4820"/>
                  </linearGradient>
                </defs>

                {/* ── VZORNÍK BAREV (vlevo) ── */}
                {[
                  ["#e8a0a0", "#c97070", "Červená"],
                  ["#f0c080", "#d09040", "Oranžová"],
                  ["#f0e080", "#d0c040", "Žlutá"],
                  ["#a0d0a0", "#60a060", "Zelená"],
                  ["#a0c0e8", "#6090c8", "Modrá"],
                  ["#c0a0d8", "#9070b8", "Fialová"],
                  ["#e8c8b0", "#c8a888", "Béžová"],
                  ["#d0d0d0", "#a0a0a0", "Šedá"],
                ].map(([light, dark, label], i) => (
                  <g key={i} transform={`translate(${30 + i * 68}, 20)`}>
                    <rect x="0" y="0" width="56" height="80" rx="4" fill={light} stroke="#e8e0d8" strokeWidth="1"/>
                    <rect x="0" y="55" width="56" height="25" rx="0" fill={dark} style={{borderBottomLeftRadius: 4, borderBottomRightRadius: 4}}/>
                    <rect x="0" y="76" width="56" height="4" rx="0" fill={dark} opacity="0.6"/>
                    <text x="28" y="95" textAnchor="middle" fontSize="8" fill="#8a7a6a" fontWeight="500">{label}</text>
                    {/* Číslo vzorku */}
                    <text x="28" y="48" textAnchor="middle" fontSize="7" fill="#fff" opacity="0.8" fontWeight="600">{`0${i+1}`}</text>
                  </g>
                ))}

                {/* ── PALETA (střed dole) ── */}
                <g transform="translate(80, 130)">
                  <ellipse cx="60" cy="30" rx="58" ry="32" fill="#f5ede0" stroke="#e0d0c0" strokeWidth="1.5"/>
                  {/* Barevné fleky na paletě */}
                  {[
                    {cx:25, cy:22, r:10, fill:"#e8a0a0"},
                    {cx:50, cy:15, r:9, fill:"#a0c0e8"},
                    {cx:75, cy:18, r:10, fill:"#a0d0a0"},
                    {cx:95, cy:28, r:8, fill:"#f0c080"},
                    {cx:40, cy:38, r:8, fill:"#c0a0d8"},
                    {cx:65, cy:40, r:9, fill:"#f0e080"},
                  ].map((c, i) => (
                    <circle key={i} cx={c.cx} cy={c.cy} r={c.r} fill={c.fill} opacity="0.85"/>
                  ))}
                  {/* Díra palety */}
                  <circle cx="18" cy="38" r="6" fill="#f0e8dc" stroke="#e0d0c0" strokeWidth="1"/>
                </g>

                {/* ── ŠTĚTEC ── */}
                <g transform="translate(230, 105) rotate(-35)">
                  {/* Držadlo */}
                  <rect x="0" y="0" width="12" height="70" rx="4" fill="url(#brushGrad)"/>
                  {/* Kovová objímka */}
                  <rect x="-1" y="65" width="14" height="10" rx="1" fill="#909090"/>
                  {/* Štětiny */}
                  <path d="M1 75 Q6 95 4 105 Q6 110 8 105 Q6 95 11 75 Z" fill="#e8d8a0"/>
                  <path d="M3 75 Q5 100 6 108" stroke="#c8b880" strokeWidth="0.8" fill="none" opacity="0.5"/>
                  <path d="M7 75 Q9 98 8 106" stroke="#c8b880" strokeWidth="0.8" fill="none" opacity="0.5"/>
                  {/* Barva na štětci */}
                  <ellipse cx="6" cy="104" rx="5" ry="3" fill="#a0c0e8" opacity="0.7"/>
                </g>

                {/* ── TAH ŠTĚTCEM ── */}
                <path d="M290 155 Q360 140 430 158 Q500 175 570 150" stroke="#a0c0e8" strokeWidth="18" strokeLinecap="round" fill="none" opacity="0.5"/>
                <path d="M290 155 Q360 140 430 158 Q500 175 570 150" stroke="#8ab0d8" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.4"/>

                {/* ── RAL VZORNÍK (vpravo) ── */}
                <g transform="translate(620, 20)">
                  <rect x="0" y="0" width="240" height="170" rx="8" fill="#fff" stroke="#e8e0d8" strokeWidth="1.5"/>
                  <text x="120" y="20" textAnchor="middle" fontSize="10" fill="#8a7a6a" fontWeight="700" letterSpacing="0.08em">RAL VZORNÍK</text>
                  {[
                    ["RAL 9010", "#f5f0e8", "Čistá bílá"],
                    ["RAL 7044", "#c8c4bc", "Hedvábná šedá"],
                    ["RAL 6021", "#8aaa88", "Bledá zelená"],
                    ["RAL 5024", "#7098b8", "Pastelová modrá"],
                    ["RAL 1015", "#e8d898", "Světlá slonová kost"],
                    ["RAL 3014", "#d88080", "Starorůžová"],
                    ["RAL 8025", "#a07858", "Bledě hnědá"],
                    ["RAL 9005", "#181818", "Černá"],
                  ].map(([code, color, name], i) => (
                    <g key={i} transform={`translate(12, ${30 + i * 17})`}>
                      <rect x="0" y="0" width="20" height="12" rx="2" fill={color} stroke="#e0d8d0" strokeWidth="0.5"/>
                      <text x="26" y="10" fontSize="8" fill="#6a5a4a" fontWeight="600">{code}</text>
                      <text x="90" y="10" fontSize="8" fill="#9a8a7a">{name}</text>
                    </g>
                  ))}
                </g>
              </svg>
              <div style={{display:"flex",justifyContent:"space-around",padding:"8px 30px 12px",fontSize:"9px",letterSpacing:"0.1em",color:"#a09080",textTransform:"uppercase",background:"#fdf8f4"}}>
                <span>🎨 Vzorník barevných odstínů</span>
                <span>🖌️ Tah štětcem na zdi</span>
                <span>📋 RAL kódování barev</span>
              </div>
            </div>

            {/* TOC */}
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#jak-barvy-funguji">Jak barvy fungují v interiéru</a></li>
                <li><a href="#psychologie">Psychologie barev – co která barva dělá</a></li>
                <li><a href="#barvy-mistnosti">Barvy podle místností</a></li>
                <li><a href="#typy-barev">Typy barev – pojiva a povrchy</a></li>
                <li><a href="#testovani">Jak testovat vzorky na zdi</a></li>
                <li><a href="#ral-ncs">RAL a NCS systém</a></li>
                <li><a href="#chyby">Nejčastější chyby</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            {/* SECTION 1 */}
            <section id="jak-barvy-funguji">
              <h2>Jak barvy fungují v interiéru</h2>
              <p>Barva zdi je nejsilnější a nejlevnější nástroj jak změnit atmosféru místnosti. Na rozdíl od nábytku nebo podlahy ji lze vyměnit za víkend — přesto ji většina lidí řeší až jako poslední a pak lituje výběru.</p>
              <p>Barvy v interiéru fungují na třech úrovních. <strong>Vizuální</strong> — světlé barvy místnost opticky zvětšují, tmavé zmenšují a přibližují strop. <strong>Psychologická</strong> — teplé tóny stimulují a povzbuzují, studené uklidňují a soustředí. <strong>Světelná</strong> — barva na zdi vypadá zásadně jinak v přirozeném denním světle, při žárovkovém osvětlení a v noci při LED diodách.</p>
              <ul>
                <li><strong>Teplé barvy (červená, oranžová, žlutá):</strong> Opticky přibližují stěny, zvyšují energii místnosti a podporují sociální interakci. Vhodné do obývacích pokojů a jídelen.</li>
                <li><strong>Studené barvy (modrá, zelená, fialová):</strong> Opticky vzdalují stěny, navozují klid a soustředění. Vhodné do ložnic, pracoven a koupelen.</li>
                <li><strong>Neutrální barvy (bílá, šedá, béžová):</strong> Univerzální volba — nezatěžují prostor, fungují s jakýmkoliv nábytkem. Nebezpečí je v tom, že nevhodný odstín šedé nebo bílé může působit studeně a klinicky.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Než si vyberete barvu, zkuste přilepit velký list papíru na zeď a pozorovat ho v různých denních dobách. Barva která vypadá perfektně v poledne může vypadat úplně jinak za umělého osvětlení večer.</div>
            </section>

            {/* SECTION 2 — TABULKA PSYCHOLOGIE */}
            <section id="psychologie">
              <h2>Psychologie barev – co která barva dělá s náladou</h2>
              <p>Vliv barev na psychiku je vědecky doložen. Nejde o mystiku — jde o evoluční reakce mozku na vizuální podněty. Zde je přehled nejběžnějších barev v interiéru a jejich psychologický efekt.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead>
                    <tr>
                      <th>Barva</th>
                      <th>Psychologický efekt</th>
                      <th>Nejlepší místnost</th>
                      <th>Pozor na</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>🔴 Červená</strong></td>
                      <td>Zvyšuje tepovou frekvenci, stimuluje chuť k jídlu, dodává energii</td>
                      <td>Jídelna, obývák (akcent)</td>
                      <td>V ložnici způsobuje neklid a problémy se spánkem</td>
                    </tr>
                    <tr>
                      <td><strong>🟠 Oranžová</strong></td>
                      <td>Podporuje sociální interakci, navozuje teplo a pohodu</td>
                      <td>Obývák, herna, jídelna</td>
                      <td>Přesycené tóny mohou být agresivní</td>
                    </tr>
                    <tr>
                      <td><strong>🟡 Žlutá</strong></td>
                      <td>Zlepšuje náladu, stimuluje kreativitu, navozuje optimismus</td>
                      <td>Kuchyně, pracovna, chodba</td>
                      <td>Intenzivní žlutá způsobuje úzkost – volit světlejší odstíny</td>
                    </tr>
                    <tr>
                      <td><strong>🟢 Zelená</strong></td>
                      <td>Uklidňuje, snižuje stres, navozuje rovnováhu a přírodu</td>
                      <td>Ložnice, pracovna, koupelna</td>
                      <td>Příliš tmavá zelená může působit depresivně</td>
                    </tr>
                    <tr>
                      <td><strong>🔵 Modrá</strong></td>
                      <td>Snižuje krevní tlak, navozuje klid, podporuje soustředění</td>
                      <td>Ložnice, pracovna, koupelna</td>
                      <td>Studené modré bez teplého doplnění působí chladně</td>
                    </tr>
                    <tr>
                      <td><strong>🟣 Fialová</strong></td>
                      <td>Podporuje kreativitu a introspekci, působí luxusně</td>
                      <td>Ložnice, pracovna</td>
                      <td>Tmavá fialová místnost vizuálně zmenšuje</td>
                    </tr>
                    <tr>
                      <td><strong>⬜ Bílá</strong></td>
                      <td>Čistota, prostor, neutralita – nechá vyniknout nábytek</td>
                      <td>Kdekoliv</td>
                      <td>Čistá bílá může působit sterilně – volit teplou bílou (RAL 9010)</td>
                    </tr>
                    <tr>
                      <td><strong>▪️ Šedá</strong></td>
                      <td>Sofistikovanost, klid, neutralita – moderní základ</td>
                      <td>Obývák, ložnice, pracovna</td>
                      <td>Špatný odstín šedé působí smutně – volit teplé šedé s béžovým podtónem</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 3 — TABULKA MÍSTNOSTÍ */}
            <section id="barvy-mistnosti">
              <h2>Barvy podle místností – praktické srovnání</h2>
              <p>Každá místnost má jiné nároky na barvu. Koupelna potřebuje omyvatelnost, dětský pokoj bezpečnost, ložnice paropropustnost. Tady je přehled nejdůležitějších parametrů.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead>
                    <tr>
                      <th>Místnost</th>
                      <th>Doporučené barvy</th>
                      <th>Omyvatelnost</th>
                      <th>Paropropustnost</th>
                      <th>Typ pojivu</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Kuchyně</strong></td>
                      <td>Žlutá, béžová, světlá zelená, bílá</td>
                      <td>🔴 Nutná – třída 1</td>
                      <td>Střední</td>
                      <td>Akrylátová nebo latexová omyvatelná</td>
                    </tr>
                    <tr>
                      <td><strong>Koupelna</strong></td>
                      <td>Světlá modrá, šedá, bílá, pastelová zelená</td>
                      <td>🔴 Nutná – třída 1</td>
                      <td>Vysoká (anti-plíseň)</td>
                      <td>Koupelnová barva s fungicidní přísadou</td>
                    </tr>
                    <tr>
                      <td><strong>Ložnice</strong></td>
                      <td>Tlumená modrá, šedozelená, teplá béžová, levandule</td>
                      <td>⭐⭐ Střední – třída 2</td>
                      <td>Vysoká</td>
                      <td>Minerální nebo prodyšná latexová</td>
                    </tr>
                    <tr>
                      <td><strong>Obývák</strong></td>
                      <td>Teplá bílá, šedá, terrakota, šalvějová zelená</td>
                      <td>⭐⭐ Střední – třída 2</td>
                      <td>Střední</td>
                      <td>Latexová nebo akrylátová</td>
                    </tr>
                    <tr>
                      <td><strong>Dětský pokoj</strong></td>
                      <td>Pastelové tóny, světlá žlutá, mint, levandule</td>
                      <td>🔴 Nutná – třída 1</td>
                      <td>Vysoká</td>
                      <td>Barva bez VOC emisí, certifikát A+</td>
                    </tr>
                    <tr>
                      <td><strong>Pracovna</strong></td>
                      <td>Světlá modrá, šedozelená, teplá bílá</td>
                      <td>⭐ Nízká – třída 3</td>
                      <td>Střední</td>
                      <td>Jakákoliv standardní</td>
                    </tr>
                    <tr>
                      <td><strong>Chodba</strong></td>
                      <td>Světlá neutrální (zvětší prostor), teplé tóny</td>
                      <td>🔴 Nutná – třída 1</td>
                      <td>Střední</td>
                      <td>Omyvatelná latexová nebo akrylátová</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Třída omyvatelnosti 1 znamená odolnost vůči mokrému otírání (kuchyně, chodba). Třída 2 zvládne lehké čištění. Třída 3 je jen do prostor bez přímého znečištění. Vždy zkontroluj třídu na etiketě plechovky.</div>
            </section>

            {/* SECTION 4 */}
            <section id="typy-barev">
              <h2>Typy barev – pojiva a povrchy</h2>
              <p>Barvy se liší nejen barvou ale především pojivem — složkou která drží pigment pohromadě a určuje vlastnosti nátěru. Výběr správného pojivu je stejně důležitý jako výběr odstínu.</p>
              <ul>
                <li><strong>Akrylátové barvy:</strong> Nejpopulárnější typ. Rychlé schnutí (2–4 hodiny), nízký zápach, dobrá omyvatelnost, bez žloutnutí. Vhodné do většiny interiérů. Ředí se vodou.</li>
                <li><strong>Latexové barvy:</strong> Vynikající omyvatelnost a odolnost — ideální do kuchyní, chodeb a dětských pokojů. Trochu delší schnutí než akrylát. Také se ředí vodou.</li>
                <li><strong>Minerální barvy (vápenné, silikonové):</strong> Výborná paropropustnost — „zeď dýchá". Přírodní složení, vhodné pro alergiky a starší domy s omítkami. Méně omyvatelné.</li>
                <li><strong>Disperzní barvy:</strong> Ekonomická varianta, dobrý základ. Nižší omyvatelnost a trvanlivost než akrylát — vhodné do málo namáhaných prostor.</li>
              </ul>
              <p><strong>Povrchová úprava</strong> ovlivňuje jak barva vypadá a jak se čistí. Matný povrch skrývá nerovnosti zdi ale hůře se čistí. Hedvábný lesk je kompromis — dobře se otírá a nepůsobí plasticky. Lesklý povrch je nejodolnější ale každá nerovnost bude vidět.</p>
            </section>

            {/* SECTION 5 — CHECKLIST */}
            <section id="testovani">
              <h2>Jak testovat vzorky na zdi – zlatá pravidla</h2>
              <p>Největší chyba při výběru barvy je rozhodnutí podle malého vzorníku v obchodě pod zářivkovým světlem. Barva na velké ploše zdi v přirozeném světle vypadá vždy jinak — zpravidla intenzivněji.</p>
              <ul>
                <li>
                  <strong>✅ Kupuj zkušební plechovky (0,1–0,5 l):</strong> Každý seriózní výrobce nabízí zkušební balení. Investice 50–100 Kč za vzorek tě zachrání od přemalování celé místnosti za tisíce korun.
                </li>
                <li>
                  <strong>✅ Nanes vzorek velkou plochou (min. 50×50 cm):</strong> Malý vzorek ti nedá představu o výsledku. Nanes barvu na papír nebo přímo na zeď na plochu alespoň 50×50 cm — ideálně A2 formát.
                </li>
                <li>
                  <strong>✅ Sleduj vzorek v různých denních dobách:</strong> Ráno v přirozeném světle, v poledne, odpoledne a večer při umělém osvětlení. Barva se může měnit dramaticky — zvláště šedé a modré tóny.
                </li>
                <li>
                  <strong>✅ Testuj na správném podkladu:</strong> Pokud maluješ přes bílou zeď, vzorek nanesený na bílou bude vypadat jinak než na starou barevnou zeď. Vzorek vždy nanes na stejný podklad jaký bude ve výsledku.
                </li>
                <li>
                  <strong>✅ Porovnej s nábytkem a podlahou:</strong> Přilep vzorek vedle nábytku, dveří a podlahy která zůstane. Barva musí fungovat s celým prostorem — ne jen sama o sobě.
                </li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Nanes dva nátěry vzorku — jeden nátěr je průsvitný a zkresluje barvu. Výsledný efekt uvidíš až po druhém nátěru, stejně jako bude vypadat finální výsledek.</div>
            </section>

            {/* SECTION 6 */}
            <section id="ral-ncs">
              <h2>RAL a NCS systém – jak objednat přesný odstín</h2>
              <p>Pokud chceš přesnou barvu — nebo potřebuješ dokoupit barvu a namíchat stejný odstín — potřebuješ znát systém kódování barev.</p>
              <ul>
                <li><strong>RAL systém:</strong> Evropský standard, nejrozšířenější v ČR. Barvy jsou označeny číslem (např. RAL 9010 = čistá bílá, RAL 7016 = antracitová šedá). Výhoda: kód funguje u všech výrobců kteří RAL podporují.</li>
                <li><strong>NCS systém:</strong> Skandinávský systém, populární u designérů. Popisuje barvu na základě čtyř základních barev (žlutá, červená, modrá, zelená) a přimíchání bílé a černé. Kód jako NCS S 2030-B90G ti přesně říká o jakou barvu jde.</li>
                <li><strong>Jak objednat míchání:</strong> V každém dobře vybaveném obchodě s barvami (Bauhaus, Hornbach, specializované prodejny) namíchají barvu přesně podle RAL nebo NCS kódu. Cena za míchání je obvykle zdarma nebo symbolická.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud dokupuješ barvu na opravné přemalování, vždy uveď stejný RAL nebo NCS kód — a přesto nanes přemalování na celou stěnu. Dokonce i stejný kód ze stejného výrobce může mít mírně odlišný výsledek při jiné šarži výroby.</div>
            </section>

            {/* SECTION 7 */}
            <section id="chyby">
              <h2>Nejčastější chyby při výběru barvy</h2>
              <ul>
                <li><strong>Výběr podle malého vzorníku v obchodě:</strong> Pod zářivkovým světlem obchodu barva vypadá jinak než na velké ploše zdi v přirozeném světle. Vždy testuj zkušební plechovkou doma.</li>
                <li><strong>Ignorování paropropustnosti:</strong> Nátěr s nízkou paropropustností v ložnici nebo dětském pokoji způsobuje kondenzaci vlhkosti a plíseň. Vždy kontroluj specifikace na etiketě.</li>
                <li><strong>Příliš tmavá barva v malé místnosti:</strong> Tmavé barvy vizuálně zmenšují prostor. V malé místnosti použij tmavou barvu maximálně na jednu akcentní stěnu.</li>
                <li><strong>Výběr barvy bez zohlednění osvětlení:</strong> Místnost bez oken nebo se severní orientací potřebuje teplé tóny. Studené modré nebo šedé v takové místnosti budou působit depresivně.</li>
                <li><strong>Koupě barvy bez přečtení etikety:</strong> Omyvatelnost, paropropustnost, VOC emise — to jsou klíčové parametry. Levná barva bez těchto údajů může být nevhodná nebo zdravotně závadná.</li>
              </ul>
            </section>

            {/* SECTION 8 — FAQ */}
            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">
                    Bílá nebo barevná zeď – co je lepší volba?
                    <span className="faq-icon">▾</span>
                  </summary>
                  <div className="faq-body">
                    Záleží na prostoru a účelu. Bílá (nebo teplá bílá) je bezpečná volba která funguje vždy — nechá vyniknout nábytek a umění na zdech. Barevná zeď dává místnosti charakter a osobitost, ale vyžaduje odvahu a testování. Kompromis: akcentní stěna — jedna barevná stěna (zpravidla za postelí nebo pohovkou) ve zbytku bílém pokoji.
                  </div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">
                    Mohu míchat barvy různých výrobců?
                    <span className="faq-icon">▾</span>
                  </summary>
                  <div className="faq-body">
                    Technicky ano, ale nedoporučujeme to. Barvy různých výrobců mohou mít různá pojiva (akrylát vs. latex) a různé konzistence — výsledná barva bude nepředvídatelná a může se špatně nanášet nebo mít nestandardní odstín. Pokud potřebuješ smíchat dva odstíny, drž se jednoho výrobce a jedné řady produktů.
                  </div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">
                    Jak poznat že barva je dostatečně omyvatelná?
                    <span className="faq-icon">▾</span>
                  </summary>
                  <div className="faq-body">
                    Na etiketě hledej „třídu omyvatelnosti" dle normy EN 13300. Třída 1 = odolná vůči mokrému otírání — vhodná do kuchyně, koupelny, chodby. Třída 2 = odolná vůči lehkému čištění. Třída 3 a výše = standardní, pouze do nenáročných prostor. Výrobci také uvádějí počet cyklů otírání bez poškození — hledej minimum 200 cyklů pro namáhané prostory.
                  </div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">
                    Jak vybrat barvu do malé místnosti?
                    <span className="faq-icon">▾</span>
                  </summary>
                  <div className="faq-body">
                    Pro optické zvětšení malé místnosti fungují světlé tóny — teplá bílá, světlá béžová nebo světlé pastelové barvy. Namaluj strop stejnou barvou jako stěny nebo ještě světlejším odstínem — místnost bude vypadat vyšší. Vyhni se tmavým barvám na všech stěnách. Jedna tmavá akcentní stěna ale může fungovat i v malé místnosti — dá jí hloubku.
                  </div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">
                    Co jsou VOC emise a proč na nich záleží?
                    <span className="faq-icon">▾</span>
                  </summary>
                  <div className="faq-body">
                    VOC (Volatile Organic Compounds) jsou těkavé organické sloučeniny které se uvolňují z barvy při schnutí a ještě několik týdnů po nanesení. Způsobují bolesti hlavy, podráždění očí a dýchacích cest. Pro dětské pokoje, ložnice a alergiky hledej barvy s označením „nízký obsah VOC" nebo „bez VOC" a certifikát kvality ovzduší A nebo A+. Tyto barvy jsou bezpečné i ihned po nanesení.
                  </div>
                </details>
              </div>
            </section>

            {/* SHARE BOTTOM */}
            <ShareButtons
              url="https://domovniguru.cz/blog/jak-vybrat-barvu-na-zed"
              title="Jak vybrat barvu na zeď – psychologie barev a typy pojiv 2026"
            />

            {/* RELATED */}
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

          {/* SIDEBAR */}
          <aside className="article-sidebar">
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Obsah</div>
              <nav><ul className="sidebar-toc">
                <li><a href="#jak-barvy-funguji">Jak barvy fungují</a></li>
                <li><a href="#psychologie">Psychologie barev</a></li>
                <li><a href="#barvy-mistnosti">Barvy podle místností</a></li>
                <li><a href="#typy-barev">Typy barev</a></li>
                <li><a href="#testovani">Testování vzorků</a></li>
                <li><a href="#ral-ncs">RAL a NCS systém</a></li>
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
