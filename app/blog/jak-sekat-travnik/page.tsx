import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak správně sekat trávník 2026: Průvodce pro hustý a zelený pažit bez plevele",
  description: "Pravidlo 1/3, ideální výška sekání, nejlepší čas dne, ostrý nůž a mulčování. Kompletní průvodce sekáním trávníku pro hustý a zdravý pažit celou sezónu.",
  alternates: { canonical: "https://domovniguru.cz/blog/jak-sekat-travnik" },
  openGraph: { title: "Jak správně sekat trávník 2026: Průvodce pro hustý a zelený pažit", description: "Pravidlo 1/3, výška sekání, ostrý nůž a mulčování. Vše co potřebuješ vědět o sekání trávníku.", url: "https://domovniguru.cz/blog/jak-sekat-travnik", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-03-01T08:00:00Z", modifiedTime: "2026-03-21T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak správně sekat trávník 2026", description: "Pravidlo 1/3, výška sekání, ostrý nůž a mulčování." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://domovniguru.cz/blog/jak-sekat-travnik#article", "headline": "Jak správně sekat trávník 2026: Průvodce pro hustý a zelený pažit bez plevele", "datePublished": "2026-03-01T08:00:00Z", "dateModified": "2026-03-21T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "inLanguage": "cs", "keywords": ["jak sekat travnik", "sekani travniku vyska", "pravidlo jedne tretiny travnik", "kdy sekat travnik", "mulcovani travniku"] }] };

const RELATED = [
  { title: "Jak připravit zahradu na jaro – kompletní checklist", href: "/blog/jarni-zahrada", read: "6 min" },
  { title: "Jak se zbavit plevele bez chemie", href: "/blog/zbavit-se-plevele-bez-chemie", read: "4 min" },
  { title: "Jak správně zalévat zahradu", href: "/blog/jak-spravne-zalevat", read: "5 min" },
  { title: "Vyvýšené záhony: Kompletní průvodce od stavby po sklizeň", href: "/blog/vyvysene-zahony", read: "10 min" },
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
              <Link href="/blog/kategorie/zahrada">Zahrada & terasa</Link><span className="breadcrumb-sep">/</span>
              <span>Jak sekat trávník</span>
            </nav>

            {/* HEADER */}
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 8 min čtení</span>
              </div>
              <h1 className="article-h1">Jak správně sekat trávník: Průvodce pro hustý a zelený pažit bez plevele</h1>
              <p className="article-lead">Špatně posečený trávník je jedním z nejčastějších důvodů proč tráva řídne, žloutne a zarůstá plevelem. Pravidlo jedné třetiny, správná výška a ostrý nůž — tři věci které změní váš trávník k nepoznání.</p>
              <div className="article-meta-row"><span>Aktualizováno: 21. března 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons
                url="https://domovniguru.cz/blog/jak-sekat-travnik"
                title="Jak správně sekat trávník 2026: Průvodce pro hustý a zelený pažit bez plevele"
              />
            </header>

            {/* HERO ILLUSTRATION */}
            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 210" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="210" fill="#f2faf0"/>
                <defs>
                  <linearGradient id="travBg" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#e8f8e0"/>
                    <stop offset="100%" stopColor="#f0fae8"/>
                  </linearGradient>
                  <linearGradient id="travPuda" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#8B5E3C"/>
                    <stop offset="100%" stopColor="#6b4020"/>
                  </linearGradient>
                </defs>
                <rect width="760" height="210" fill="url(#travBg)"/>

                {/* === SEKCE 1: Tupý nůž (špatně) === */}
                <g transform="translate(30, 20)">
                  {/* Nadpis */}
                  <rect x="0" y="0" width="150" height="18" rx="4" fill="#e07a5f" opacity="0.15"/>
                  <text x="75" y="13" textAnchor="middle" fontSize="9" fill="#c05030" fontWeight="700" letterSpacing="0.05em">❌ TUPÝ NŮŽ</text>
                  {/* Půda */}
                  <rect x="0" y="145" width="150" height="30" rx="0" fill="url(#travPuda)" opacity="0.7"/>
                  {/* Stébla trávy — roztřepená */}
                  {[15,30,45,60,75,90,105,120,135].map((x,i)=>(
                    <g key={i}>
                      {/* Stéblo */}
                      <path d={`M${x} 145 Q${x+Math.sin(i)*4} ${100+Math.cos(i)*5} ${x+Math.sin(i)*6} ${55+i%3*8}`}
                        stroke="#5aaa30" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                      {/* Roztřepený konec */}
                      <path d={`M${x+Math.sin(i)*6} ${55+i%3*8} Q${x+Math.sin(i)*6+6} ${50+i%3*8} ${x+Math.sin(i)*6+3} ${45+i%3*8}`}
                        stroke="#8acc60" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.7"/>
                      <path d={`M${x+Math.sin(i)*6} ${55+i%3*8} Q${x+Math.sin(i)*6-5} ${48+i%3*8} ${x+Math.sin(i)*6-2} ${43+i%3*8}`}
                        stroke="#8acc60" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.7"/>
                    </g>
                  ))}
                  {/* Nůž tupý */}
                  <g transform="translate(20, 22)">
                    <rect x="0" y="0" width="110" height="14" rx="2" fill="#909090" stroke="#707070" strokeWidth="1"/>
                    <path d="M110 7 L125 0 L125 14 Z" fill="#808080"/>
                    {/* Vroubky = tupý */}
                    {[15,25,35,45,55,65,75,85,95,105].map((x,i)=>(
                      <line key={i} x1={x} y1="14" x2={x+4} y2="18" stroke="#606060" strokeWidth="1" opacity="0.5"/>
                    ))}
                  </g>
                  {/* Popisek */}
                  <text x="75" y="178" textAnchor="middle" fontSize="8" fill="#c05030" fontWeight="600">Trhá — nestříhá</text>
                  <text x="75" y="188" textAnchor="middle" fontSize="7" fill="#a04020">Konec stébla hnědne</text>
                </g>

                {/* Šipka */}
                <g transform="translate(188, 95)">
                  <path d="M0 15 L35 15" stroke="#c8b89a" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M31 10 L37 15 L31 20" stroke="#c8b89a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </g>

                {/* === SEKCE 2: Ostrý nůž (správně) === */}
                <g transform="translate(232, 20)">
                  <rect x="0" y="0" width="150" height="18" rx="4" fill="#5a9e6f" opacity="0.15"/>
                  <text x="75" y="13" textAnchor="middle" fontSize="9" fill="#3a7e4f" fontWeight="700" letterSpacing="0.05em">✅ OSTRÝ NŮŽ</text>
                  {/* Půda */}
                  <rect x="0" y="145" width="150" height="30" rx="0" fill="url(#travPuda)" opacity="0.7"/>
                  {/* Stébla trávy — rovně seříznutá */}
                  {[15,30,45,60,75,90,105,120,135].map((x,i)=>(
                    <g key={i}>
                      <path d={`M${x} 145 Q${x+Math.sin(i)*3} ${105} ${x+Math.sin(i)*4} 65`}
                        stroke="#4aaa20" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                      {/* Rovný čistý řez */}
                      <line x1={x+Math.sin(i)*4-3} y1="65" x2={x+Math.sin(i)*4+3} y2="65"
                        stroke="#80cc40" strokeWidth="1.5" strokeLinecap="round"/>
                    </g>
                  ))}
                  {/* Nůž ostrý */}
                  <g transform="translate(20, 22)">
                    <rect x="0" y="0" width="110" height="14" rx="2" fill="#707070" stroke="#505050" strokeWidth="1"/>
                    <path d="M110 7 L130 7 L115 0 Z" fill="#5a9e6f" opacity="0.7"/>
                    <path d="M110 7 L130 7 L115 14 Z" fill="#4a8e5f" opacity="0.7"/>
                    {/* Lesk = ostrý */}
                    <line x1="20" y1="3" x2="100" y2="3" stroke="white" strokeWidth="1" opacity="0.3"/>
                  </g>
                  <text x="75" y="178" textAnchor="middle" fontSize="8" fill="#3a7e4f" fontWeight="600">Stříhá — čistý řez</text>
                  <text x="75" y="188" textAnchor="middle" fontSize="7" fill="#5a9e5f">Tráva zůstává zelená</text>
                </g>

                {/* === SEKCE 3: Pravidlo 1/3 === */}
                <g transform="translate(422, 20)">
                  <rect x="0" y="0" width="150" height="18" rx="4" fill="#4a90ba" opacity="0.15"/>
                  <text x="75" y="13" textAnchor="middle" fontSize="9" fill="#2a70a0" fontWeight="700" letterSpacing="0.05em">📏 PRAVIDLO 1/3</text>
                  {/* Půda */}
                  <rect x="0" y="145" width="150" height="30" fill="url(#travPuda)" opacity="0.7"/>
                  {/* Vysoká tráva */}
                  {[20,40,60,80,100,120].map((x,i)=>(
                    <path key={i} d={`M${x} 145 Q${x+Math.sin(i)*4} 90 ${x+Math.sin(i)*5} 35`}
                      stroke="#4aaa20" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                  ))}
                  {/* Čára kde se seká — 1/3 shora */}
                  <line x1="5" y1="70" x2="145" y2="70" stroke="#e07040" strokeWidth="2" strokeDasharray="6,3"/>
                  {/* Šipky ukazující 1/3 a 2/3 */}
                  <line x1="155" y1="35" x2="155" y2="70" stroke="#e07040" strokeWidth="1.5"/>
                  <text x="162" y="56" fontSize="8" fill="#e07040" fontWeight="700">1/3</text>
                  <line x1="155" y1="70" x2="155" y2="145" stroke="#4aaa20" strokeWidth="1.5"/>
                  <text x="162" y="112" fontSize="8" fill="#4aaa20" fontWeight="700">2/3</text>
                  {/* Sekačka ikona */}
                  <rect x="5" y="62" width="140" height="14" rx="3" fill="#606060" opacity="0.7"/>
                  <text x="75" y="178" textAnchor="middle" fontSize="8" fill="#2a70a0" fontWeight="600">Max. 1/3 délky najednou</text>
                  <text x="75" y="188" textAnchor="middle" fontSize="7" fill="#4a90ba">Nestresuje kořeny</text>
                </g>

                {/* === SEKCE 4: Výška + slunce + voda === */}
                <g transform="translate(598, 20)">
                  {/* Slunce */}
                  <circle cx="75" cy="35" r="20" fill="#f9d84a" opacity="0.9"/>
                  {[0,45,90,135,180,225,270,315].map((deg,i)=>(
                    <line key={i}
                      x1={75+Math.cos(deg*Math.PI/180)*24} y1={35+Math.sin(deg*Math.PI/180)*24}
                      x2={75+Math.cos(deg*Math.PI/180)*30} y2={35+Math.sin(deg*Math.PI/180)*30}
                      stroke="#f9d84a" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
                  ))}
                  {/* Kapky vody */}
                  {[[25,50],[40,62],[20,70]].map(([x,y],i)=>(
                    <path key={i} d={`M${x} ${y} Q${x-4} ${y+6} ${x} ${y+10} Q${x+4} ${y+6} ${x} ${y}`}
                      fill="#60b0e0" opacity="0.7"/>
                  ))}
                  {/* Výška trávy */}
                  <rect x="0" y="140" width="130" height="30" fill="url(#travPuda)" opacity="0.7"/>
                  {[20,35,50,65,80,95,110].map((x,i)=>(
                    <path key={i} d={`M${x} 140 Q${x+Math.sin(i)*3} 110 ${x+Math.sin(i)*4} 90`}
                      stroke="#4aaa20" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                  ))}
                  {/* Měřítko výšky */}
                  <line x1="140" y1="90" x2="140" y2="140" stroke="#606060" strokeWidth="1.5"/>
                  <line x1="135" y1="90" x2="145" y2="90" stroke="#606060" strokeWidth="1.5"/>
                  <line x1="135" y1="140" x2="145" y2="140" stroke="#606060" strokeWidth="1.5"/>
                  <text x="155" y="118" textAnchor="middle" fontSize="9" fill="#3a6a3a" fontWeight="700">4–5</text>
                  <text x="155" y="128" textAnchor="middle" fontSize="7" fill="#5a8a5a">cm</text>
                  <text x="65" y="178" textAnchor="middle" fontSize="8" fill="#2a6a2a" fontWeight="600">Ideální výška sekání</text>
                  <text x="65" y="188" textAnchor="middle" fontSize="7" fill="#4a8a4a">4–5 cm (nikdy pod 3 cm)</text>
                </g>

                {/* Dolní lišta */}
                <rect y="190" width="760" height="20" fill="#d8f0d0" opacity="0.7"/>
                <text x="95"  y="203" textAnchor="middle" fontSize="8" fill="#3a6a3a" fontWeight="600" letterSpacing="0.04em">✂️ OSTRÝ NŮŽ = ZDRAVÁ TRÁVA</text>
                <text x="285" y="203" textAnchor="middle" fontSize="8" fill="#3a6a3a" fontWeight="600" letterSpacing="0.04em">📏 PRAVIDLO 1/3</text>
                <text x="475" y="203" textAnchor="middle" fontSize="8" fill="#3a6a3a" fontWeight="600" letterSpacing="0.04em">📐 VÝŠKA 4–5 CM</text>
                <text x="655" y="203" textAnchor="middle" fontSize="8" fill="#3a6a3a" fontWeight="600" letterSpacing="0.04em">☀️ SEKA VE SPRÁVNÝ ČAS</text>
              </svg>
            </div>

            {/* TOC */}
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#vyska">Ideální výška sekání</a></li>
                <li><a href="#pravidlo-tretiny">Pravidlo jedné třetiny</a></li>
                <li><a href="#kdy-sekat">Kdy sekat – ráno, v poledne nebo večer</a></li>
                <li><a href="#nuz">Ostrý nůž – proč na tom záleží</a></li>
                <li><a href="#mulcovani">Mulčovat nebo do koše</a></li>
                <li><a href="#chyby">Nejčastější chyby při sekání</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            {/* SECTION 1 — VÝŠKA */}
            <section id="vyska">
              <h2>Ideální výška sekání – tabulka podle typu trávníku</h2>
              <p>Výška sekání je nejdůležitější parametr pro zdraví trávníku. Příliš nízké sekání oslabuje kořeny, trávník žloutne, rychleji schne a zarůstá plevelem. Příliš vysoké sekání naopak podporuje houby a plísně.</p>
              <p>Správná výška závisí na typu trávníku, jeho využití a podmínkách stanoviště.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead>
                    <tr>
                      <th>Typ trávníku</th>
                      <th>Ideální výška</th>
                      <th>Minimální výška</th>
                      <th>Frekvence sekání</th>
                      <th>Poznámka</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Okrasný (dekorativní)</strong></td>
                      <td>2,5–4 cm</td>
                      <td>2 cm</td>
                      <td>1–2× týdně</td>
                      <td>Jemné traviny, reprezentativní vzhled</td>
                    </tr>
                    <tr>
                      <td><strong>Rodinný (s dětmi)</strong></td>
                      <td>4–6 cm</td>
                      <td>3 cm</td>
                      <td>1× týdně</td>
                      <td>Odolnější, toleruje větší zátěž</td>
                    </tr>
                    <tr>
                      <td><strong>Sportovní / hřiště</strong></td>
                      <td>3–5 cm</td>
                      <td>2,5 cm</td>
                      <td>2× týdně v sezóně</td>
                      <td>Pevné druhy travní směsi</td>
                    </tr>
                    <tr>
                      <td><strong>Ve stínu</strong></td>
                      <td>5–7 cm</td>
                      <td>4 cm</td>
                      <td>1× za 10–14 dní</td>
                      <td>Stínová tráva potřebuje více listové plochy pro fotosyntézu</td>
                    </tr>
                    <tr>
                      <td><strong>V létě (sucho)</strong></td>
                      <td>5–8 cm</td>
                      <td>4 cm</td>
                      <td>1× za 2 týdny</td>
                      <td>Vyšší tráva lépe zadržuje vlhkost a stíní půdu</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Nikdy nesekej pod 3 cm — tráva pod touto hranicí nestačí fotosyntézou doplňovat energii a postupně odumírá. V horkém létě nastav sekačku o 1–2 cm výš než obvykle.</div>
            </section>

            {/* SECTION 2 — PRAVIDLO 1/3 */}
            <section id="pravidlo-tretiny">
              <h2>Zlaté pravidlo jedné třetiny – proč ho nikdy nepřekračovat</h2>
              <p>Pravidlo jedné třetiny je nejdůležitější zásada péče o trávník. Říká: <strong>při každém sekání odstraň maximálně 1/3 aktuální délky stébla</strong>. Pokud je tráva 9 cm vysoká, sečeš maximálně 3 cm — a necháš ji 6 cm.</p>

              <h3>Proč na tom záleží</h3>
              <p>Stéblo trávy je zásobníkem energie a živin pro kořen. Při sekání dochází k "stresu" — tráva musí obnovit ztracenou listovou plochu a přestane se soustředit na rozvoj kořenů. Čím větší část stébla odstraníš, tím větší stres.</p>
              <ul>
                <li>
                  <strong>✅ Max. 1/3 najednou:</strong> Tráva se rychle zotaví, kořeny zůstávají silné, hustota trávníku se udržuje. Trávník odolává suchu, plevelu i nemocím.
                </li>
                <li>
                  <strong>✅ Neodkládej sekání:</strong> Pokud necháš trávu přerůst (přes 12 cm) a pak ji sečeš najednou na 4 cm, porušíš pravidlo výrazně — trávník pak zažloutne nebo zhnědne. V takovém případě sečeš ve dvou krocích s odstupem 3–5 dní.
                </li>
                <li>
                  <strong>✅ Pravidelnost je klíč:</strong> Ideální je sekat každý týden v sezóně. Krátké a časté sečení je vždy lepší než občasné drastické sekání.
                </li>
                <li>
                  <strong>✅ Na podzim a jaře sečeš méně:</strong> Tráva roste pomaleji — frekvence 1× za 10–14 dní je dostačující. Nesekat pod 4 cm na zimu — delší tráva lépe snáší mráz.
                </li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Tráva přerostla a nestíháš sekat? Nepanikař — sečeš ve dvou kolech. Nejdřív nastav sekačku výš (odstraníš 1/3) a po 4–5 dnech znovu na cílovou výšku. Trávník si zachová zelenou barvu.</div>
            </section>

            {/* SECTION 3 — KDY SEKAT */}
            <section id="kdy-sekat">
              <h2>Kdy sekat – ráno, v poledne nebo večer?</h2>
              <p>Denní doba sekání má větší vliv na zdraví trávníku než většina zahradníků tuší. Tráva je živý organismus a sekání v nevhodnou dobu zvyšuje stres, riziko chorob a spotřebu vody.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead>
                    <tr>
                      <th>Doba sekání</th>
                      <th>Doporučení</th>
                      <th>Vlhkost trávy</th>
                      <th>Riziko chorob</th>
                      <th>Komfort sekání</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Brzy ráno (6–8 h)</strong></td>
                      <td>⚠️ Vyhni se</td>
                      <td>Mokrá (rosa)</td>
                      <td>🔴 Vysoké</td>
                      <td>Nízký – sekačka se ucpává</td>
                    </tr>
                    <tr>
                      <td><strong>Dopoledne (8–10 h)</strong></td>
                      <td>✅ Ideální</td>
                      <td>Oschlá</td>
                      <td>🟢 Nízké</td>
                      <td>Vysoký – není horko</td>
                    </tr>
                    <tr>
                      <td><strong>Poledne (11–14 h)</strong></td>
                      <td>❌ Vyhni se</td>
                      <td>Suchá</td>
                      <td>🟡 Střední</td>
                      <td>Nízký – velké horko, tráva ve stresu</td>
                    </tr>
                    <tr>
                      <td><strong>Odpoledne (15–18 h)</strong></td>
                      <td>✅ Dobré</td>
                      <td>Suchá</td>
                      <td>🟢 Nízké</td>
                      <td>Dobrý – ochlazuje se</td>
                    </tr>
                    <tr>
                      <td><strong>Večer (po 18 h)</strong></td>
                      <td>⚠️ Opatrně</td>
                      <td>Začíná hromadit vlhkost</td>
                      <td>🟡 Střední</td>
                      <td>Střední – riziko plísní přes noc</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Nejlepší čas pro sekání je <strong>mezi 8–10 hodinou dopoledne</strong> — rosa oschla, není největší horko, tráva má čas se zotavit ještě před poledním žárem. V létě je přijatelné i pozdní odpoledne (15–18 h).</div>
            </section>

            {/* SECTION 4 — NŮŽ */}
            <section id="nuz">
              <h2>Ostrý nůž – proč na tom záleží víc než si myslíš</h2>
              <p>Tupý nůž sekačky je druhá nejčastější příčina nezdravého trávníku (po špatné výšce sekání). Tupé ostří nestříhá — trhá. Roztřepený konec stébla žloutne, stává se vstupní branou pro houby a bakterie a trávník získá šedivý nádech který trvá dny.</p>
              <ul>
                <li><strong>Jak poznám tupý nůž:</strong> Tráva po sekání má šedivohnědé nebo bílé konečky. Sekačka "žvýká" trávu místo čistého řezu. Trávník vypadá otrhaně i po sekání.</li>
                <li><strong>Jak často brousit:</strong> Domácí sekačka → broušení 1–2× ročně (vždy na začátku sezóny). Intenzivní použití nebo kamenitý terén → každých 20–25 hodin provozu.</li>
                <li><strong>Broušení svépomocí:</strong> Sejmi nůž (odpoj svíčku!), nabrousí brouskem nebo úhlovou bruskou. Zachovej původní úhel ostří (obvykle 30°). Vyvaž nůž před montáží — nevyvážený nůž způsobuje vibrace a opotřebení ložisek.</li>
                <li><strong>Výměna nože:</strong> Pokud má nůž výraznější záseky, zlomy nebo ohnutí — vyměň celý nůž. Cena nového nože je 200–500 Kč a vrátí se na zdravějším trávníku a nižší spotřebě paliva.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Před každou sezónou sejmi nůž a zkontroluj ho. Čistý, ostrý nůž je základ — stejně jako ostrý nůž v kuchyni. Vyplatí se.</div>
            </section>

            {/* SECTION 5 — MULČOVÁNÍ */}
            <section id="mulcovani">
              <h2>Mulčovat nebo dávat do koše – co je lepší</h2>
              <p>Posečená tráva je hodnotný organický materiál. Co s ní uděláš, má velký vliv na zdraví a živiny trávníku.</p>
              <ul>
                <li>
                  <strong>Mulčování (nechej na trávníku):</strong> Při dodržení pravidla 1/3 jsou posečená stébla krátká a rychle se rozkládají. Vracejí do půdy dusík, draslík a organické látky. Efekt odpovídá 1–2 hnojením ročně. Podmínka: sekat pravidelně, krátkéstébla — ne hromady mokré trávy.
                </li>
                <li>
                  <strong>Sběr do koše:</strong> Nutný pokud je tráva příliš vysoká (stébla by se hromadila a dusila trávník), pokud je trávník napaden houbovými chorobami (spóry by se šířily), nebo v pozdním podzimu (zabránění hromadění organiky přes zimu).
                </li>
                <li>
                  <strong>Kompostování:</strong> Posečená tráva je ideální kompostovací materiál — přidávej ji střídavě s hnědou hmotou (karton, listí). Čerstvou trávu nedávej tlustou vrstvou — zhnilostnívá a páchne.
                </li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Mulčovací sekačka (nebo mulčovací kryt) seče stébla na jemné kousky a rovnoměrně je rozhazuje. Investice 1 000–3 000 Kč do mulčovacího krytu ušetří práci a zlepší zdraví trávníku.</div>
            </section>

            {/* SECTION 6 — CHYBY */}
            <section id="chyby">
              <h2>Nejčastější chyby při sekání trávníku</h2>
              <ul>
                <li><strong>Sekání příliš nízko:</strong> „Ať to vydrží déle bez sekání" — ale tráva pod 3 cm žloutne, řídne a zarůstá mechem a plevelem. Krátká tráva paradoxně potřebuje sekat častěji.</li>
                <li><strong>Sekání mokré trávy:</strong> Mokrá tráva se lepí na nůž, neseká čistě a hromadí se v sečníku. Výsledek jsou hrudky posečené trávy které dusí trávník pod sebou.</li>
                <li><strong>Vždy ve stejném směru:</strong> Sekání stále stejným směrem způsobuje, že se tráva "nakloní" jedním směrem a tvoří se viditelné pruhy. Střídej směr sekání každý týden.</li>
                <li><strong>Sekání za poledního horka:</strong> Stres z horka + stres ze sekání = oslabená tráva. V létě sečeš dopoledne nebo pozdě odpoledne.</li>
                <li><strong>Sekání přerostlé trávy najednou:</strong> Porušení pravidla 1/3 způsobí zhnědnutí a stres. Vždy ve dvou kolech s odstupem 3–5 dní.</li>
              </ul>
            </section>

            {/* SECTION 7 — FAQ */}
            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">
                    Mohu sekat mokrou trávu?
                    <span className="faq-icon">▾</span>
                  </summary>
                  <div className="faq-body">
                    Nedoporučuje se. Mokrá tráva se lepí na nůž i pod sekačku, neseká se čistě a hromadí se ve sečníku jako hrudky. Tyto hrudky pak leží na trávníku, dusí trávu pod sebou a způsobují žluté skvrny. Navíc mokrá tráva snáší mechanický stres hůře — řezy se hůře hojí a jsou vstupní branou pro houby. Počkej alespoň 2–3 hodiny po dešti nebo rose. Pokud musíš sekat mokrý trávník (například před dlouhodobým deštěm), nastav nůž o 1 cm výš a po sekání posekanou trávu rozhrněte.
                  </div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">
                    Jak často brousit nůž sekačky?
                    <span className="faq-icon">▾</span>
                  </summary>
                  <div className="faq-body">
                    Pro domácí zahradníka: <strong>1× ročně</strong> na začátku sezóny je minimum. Pokud sekáš velkou zahradu nebo terén s kameny a kořeny, brousit 2× ročně (na začátku a v polovině sezóny). Praktický test: po sekání se podívej na konečky stébel — pokud jsou bílé nebo roztřepené místo čistě zelených, nůž je tupý. Broušení si zvládneš sám s úhlovou bruskou nebo pilníkem za 15–20 minut. Nezapomeň odpojit zapalovací svíčku před sundáváním nože!
                  </div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">
                    Co s posekanou trávou – mulčovat nebo do koše?
                    <span className="faq-icon">▾</span>
                  </summary>
                  <div className="faq-body">
                    Záleží na situaci. Pokud seká pravidelně a dodržuješ pravidlo 1/3, krátká stébla nechej na trávníku — přirozený mulč vrací živiny a šetří hnojivo. Pokud je tráva přerostlá nebo mokrá, posekanou trávu odstranitelné — hromady dusí trávník. Posekánou trávu dávej do kompostu (střídej s kartonem). Nikdy nedávej čerstvou trávu silnou vrstvou do kompostu — zhnilostnívá bez přístupu vzduchu a páchne.
                  </div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">
                    Kdy zahájit první sekání na jaře?
                    <span className="faq-icon">▾</span>
                  </summary>
                  <div className="faq-body">
                    První jarní sekání provádíme kdy: (1) teplota půdy je stabilně nad 8–10 °C, (2) tráva je suchá (ne mokrá od roztátého sněhu), (3) tráva dosáhla výšky cca 6–8 cm. První sekání nastavíme o 1–2 cm výš než je standartní výška — tráva po zimě je oslabená. Příliš brzké sekání v mokré půdě způsobuje vyjetí kolej od sekačky a poškozuje kořenový systém.
                  </div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">
                    Proč mi trávník po sekání žloutne nebo hnědne?
                    <span className="faq-icon">▾</span>
                  </summary>
                  <div className="faq-body">
                    Nejčastější příčiny: (1) <strong>Tupý nůž</strong> — trhá místo stříhá, konečky stébel hnědnou. Řešení: nabrousit nůž. (2) <strong>Příliš nízké sekání</strong> — tráva nemá dostatek listové plochy pro fotosyntézu. Nastav sekačku výš. (3) <strong>Porušení pravidla 1/3</strong> — při sekání příliš přerostlé trávy najednou. Nech trávník 1–2 týdny dorůst a opakuj. (4) <strong>Sekání za sucha a horka</strong> — kombinace stresu ze sekání a tepla. Sečeš ráno nebo odpoledne. (5) <strong>Nedostatek vody</strong> — po sekání zalij trávník pokud nehrozí déšť.
                  </div>
                </details>
              </div>
            </section>

            {/* SHARE BOTTOM */}
            <ShareButtons
              url="https://domovniguru.cz/blog/jak-sekat-travnik"
              title="Jak správně sekat trávník 2026: Průvodce pro hustý a zelený pažit bez plevele"
            />

            {/* RELATED */}
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

          {/* SIDEBAR */}
          <aside className="article-sidebar">
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Obsah</div>
              <nav><ul className="sidebar-toc">
                <li><a href="#vyska">Ideální výška sekání</a></li>
                <li><a href="#pravidlo-tretiny">Pravidlo 1/3</a></li>
                <li><a href="#kdy-sekat">Kdy sekat</a></li>
                <li><a href="#nuz">Ostrý nůž</a></li>
                <li><a href="#mulcovani">Mulčovat nebo do koše</a></li>
                <li><a href="#chyby">Nejčastější chyby</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/zahrada" className="sidebar-cat-link">🌿 Zahrada & terasa<span>22 článků →</span></Link>
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
        .article-tip{background:#f0faf0;border-left:3px solid #5a9e6f;border-radius:0 8px 8px 0;padding:14px 18px;font-size:14px;line-height:1.6;color:#78716c;margin:20px 0}
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
