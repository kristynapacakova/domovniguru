import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Vyvýšené záhony: Kompletní průvodce od stavby po první sklizeň 2026",
  description: "Jak postavit vyvýšený záhon, jaký materiál vybrat, jak správně vrstvit substráty a co sázet. Praktický průvodce pro začátečníky i zkušené zahradníky.",
  alternates: { canonical: "https://domovniguru.cz/blog/vyvysene-zahony" },
  openGraph: { title: "Vyvýšené záhony: Kompletní průvodce od stavby po první sklizeň 2026", description: "Materiály, vrstvení, výsadba a péče. Vše co potřebuješ vědět o vyvýšených záhonech.", url: "https://domovniguru.cz/blog/vyvysene-zahony", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-03-01T08:00:00Z", modifiedTime: "2026-03-20T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Vyvýšené záhony: Kompletní průvodce od stavby po první sklizeň 2026", description: "Materiály, vrstvení, výsadba a péče o vyvýšené záhony." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://domovniguru.cz/blog/vyvysene-zahony#article", "headline": "Vyvýšené záhony: Kompletní průvodce od stavby po první sklizeň 2026", "datePublished": "2026-03-01T08:00:00Z", "dateModified": "2026-03-20T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "inLanguage": "cs", "keywords": ["vyvýšený záhon", "jak postavit vyvýšený záhon", "vrstvení vyvýšeného záhonu", "vyvýšený záhon materiál", "co sázet do vyvýšeného záhonu"] }] };

const RELATED = [
  { title: "Jak připravit zahradu na jaro – kompletní checklist", href: "/blog/jarni-zahrada", read: "6 min" },
  { title: "Jak ošetřit dřevěnou terasu před zimou", href: "/blog/drevo-terasa-zima", read: "4 min" },
  { title: "Jak se zbavit plísně v bytě jednou provždy", href: "/blog/jak-odstranit-plisen-na-zdi", read: "9 min" },
  { title: "Příprava domu na zimu - kompletní checklist", href: "/blog/priprava-domu-na-zimu", read: "10 min" },
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
              <span>Vyvýšené záhony</span>
            </nav>

            {/* HEADER */}
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 10 min čtení</span>
              </div>
              <h1 className="article-h1">Vyvýšené záhony: Kompletní průvodce od stavby po první sklizeň</h1>
              <p className="article-lead">Vyvýšený záhon ti dá o 30 % vyšší úrodu, méně plevelů a žádné bolesti zad. Ukážeme ti jak vybrat materiál, správně vrstvit substráty a co sázet, aby záhon fungoval od první sezóny.</p>
              <div className="article-meta-row"><span>Aktualizováno: 20. března 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons
                url="https://domovniguru.cz/blog/vyvysene-zahony"
                title="Vyvýšené záhony: Kompletní průvodce od stavby po první sklizeň 2026"
              />
            </header>

            {/* HERO ILLUSTRATION — průřez záhonem */}
            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 900 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="900" height="220" fill="#f5f2ec"/>
                <defs>
                  <linearGradient id="vetveGrad" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#8B6340"/>
                    <stop offset="100%" stopColor="#6b4820"/>
                  </linearGradient>
                  <linearGradient id="listiGrad" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#7a9e50"/>
                    <stop offset="100%" stopColor="#5a7e30"/>
                  </linearGradient>
                  <linearGradient id="kompostGrad" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#8B5E3C"/>
                    <stop offset="100%" stopColor="#6b4020"/>
                  </linearGradient>
                  <linearGradient id="zeminaGrad" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#5a3e28"/>
                    <stop offset="100%" stopColor="#3a2410"/>
                  </linearGradient>
                  <linearGradient id="substrGrad" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#c8a870"/>
                    <stop offset="100%" stopColor="#a88850"/>
                  </linearGradient>
                </defs>

                {/* Rám záhonu — dřevo */}
                <rect x="100" y="30" width="560" height="170" rx="4" fill="#8B6340" opacity="0.0"/>
                {/* Levá stěna */}
                <rect x="100" y="30" width="18" height="170" rx="3" fill="#7B5330"/>
                {/* Pravá stěna */}
                <rect x="642" y="30" width="18" height="170" rx="3" fill="#7B5330"/>
                {/* Spodek */}
                <rect x="100" y="188" width="560" height="12" rx="3" fill="#6b4320"/>

                {/* Vrstva 1 — větve a klacky (dno) */}
                <rect x="118" y="158" width="524" height="32" fill="url(#vetveGrad)"/>
                {[130,160,195,230,270,310,350,390,430,470,510,550,590,620].map((x,i)=>(
                  <g key={i}>
                    <rect x={x} y={155+Math.sin(i)*3} width={18+Math.cos(i*2)*6} height="5" rx="2" fill="#5a3810" opacity="0.6" transform={`rotate(${Math.sin(i)*8}, ${x+9}, 158)`}/>
                    <rect x={x+8} y={163+Math.cos(i)*2} width={12+Math.sin(i*3)*4} height="4" rx="2" fill="#7B5330" opacity="0.5" transform={`rotate(${Math.cos(i)*5}, ${x+14}, 165)`}/>
                  </g>
                ))}

                {/* Vrstva 2 — listí a organika */}
                <rect x="118" y="126" width="524" height="34" fill="url(#listiGrad)"/>
                {[125,155,185,215,245,280,315,350,385,420,455,490,525,560,595,625].map((x,i)=>(
                  <ellipse key={i} cx={x+6} cy={130+Math.sin(i*1.5)*4} rx={8+Math.cos(i)*3} ry={5+Math.sin(i)*2} fill="#4a7e28" opacity="0.5" transform={`rotate(${i*15}, ${x+6}, 132)`}/>
                ))}
                {[140,175,210,250,290,330,370,410,450,490,530,570,610].map((x,i)=>(
                  <ellipse key={i} cx={x} cy={145+Math.cos(i*2)*3} rx={6+Math.sin(i)*2} ry={4} fill="#6a9e40" opacity="0.4"/>
                ))}

                {/* Vrstva 3 — kompost */}
                <rect x="118" y="96" width="524" height="32" fill="url(#kompostGrad)"/>
                {[130,165,200,238,276,314,352,390,428,466,504,542,580,618].map((x,i)=>(
                  <ellipse key={i} cx={x+5} cy={110+Math.sin(i)*3} rx={5+Math.cos(i*2)*2} ry="3" fill="#4a2e10" opacity="0.3"/>
                ))}
                {[145,182,220,258,296,334,372,410,448,486,524,562,600].map((x,i)=>(
                  <circle key={i} cx={x} cy={104+Math.cos(i)*4} r="3" fill="#6a4020" opacity="0.25"/>
                ))}

                {/* Vrstva 4 — zemina */}
                <rect x="118" y="66" width="524" height="32" fill="url(#zeminaGrad)"/>
                {[135,170,205,242,280,318,356,394,432,470,508,546,584,622].map((x,i)=>(
                  <circle key={i} cx={x} cy={80+Math.sin(i*1.8)*4} r={2+Math.cos(i)*1} fill="#2a1808" opacity="0.3"/>
                ))}

                {/* Vrstva 5 — substrát nahoře */}
                <rect x="118" y="36" width="524" height="32" fill="url(#substrGrad)"/>
                {/* Kamínky v substrátu */}
                {[140,178,216,254,292,330,368,406,444,482,520,558,596,634].map((x,i)=>(
                  <ellipse key={i} cx={x} cy={52+Math.sin(i*2)*4} rx={3+Math.cos(i)*1.5} ry="2" fill="#987848" opacity="0.4"/>
                ))}

                {/* Rostlinky nahoře */}
                {[150,200,255,310,365,420,475,530,585,630].map((x,i)=>(
                  <g key={i}>
                    <rect x={x-1} y={18+Math.sin(i)*4} width="2" height={16+Math.cos(i)*4} fill="#3a7a28"/>
                    <ellipse cx={x} cy={16+Math.sin(i)*4} rx={7+Math.cos(i*1.5)*3} ry={8+Math.sin(i)*3} fill="#5cb840" opacity="0.85"/>
                    {i%3===0 && <ellipse cx={x+6} cy={22+Math.sin(i)*3} rx="5" ry="6" fill="#4aa830" opacity="0.7"/>}
                  </g>
                ))}

                {/* Pletivo na dně */}
                {[118,138,158,178,198,218,238,258,278,298,318,338,358,378,398,418,438,458,478,498,518,538,558,578,598,618,638].map((x,i)=>(
                  <line key={i} x1={x} y1="188" x2={x} y2="196" stroke="#909090" strokeWidth="0.8" opacity="0.5"/>
                ))}
                {[189,192,195].map((y,i)=>(
                  <line key={i} x1="118" y1={y} x2="642" y2={y} stroke="#909090" strokeWidth="0.8" opacity="0.4"/>
                ))}

                {/* Popisky vrstev — vpravo */}
                {[
                  { y: 52, color: "#a88850", label: "5. Substrát / pěstební směs" },
                  { y: 82, color: "#3a2410", label: "4. Zahradní zemina" },
                  { y: 112, color: "#6b4020", label: "3. Zralý kompost" },
                  { y: 143, color: "#5a7e30", label: "2. Listí a organika" },
                  { y: 173, color: "#6b4820", label: "1. Větve a klacky (dno)" },
                ].map(({ y, color, label }, i) => (
                  <g key={i}>
                    <line x1="666" y1={y} x2="680" y2={y} stroke={color} strokeWidth="1.5" opacity="0.8"/>
                    <text x="683" y={y+4} fontSize="9" fill={color} fontWeight="600" letterSpacing="0.02em">{label}</text>
                  </g>
                ))}
              </svg>
              <div style={{display:"flex",justifyContent:"space-around",padding:"8px 30px 12px",fontSize:"9px",letterSpacing:"0.1em",color:"#a09080",textTransform:"uppercase",background:"#f5f2ec"}}>
                <span>🪵 Větve a klacky</span>
                <span>🍂 Listí a organika</span>
                <span>🌱 Kompost a zemina</span>
                <span>🪴 Pěstební substrát</span>
              </div>
            </div>

            {/* TOC */}
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#proc">Proč vyvýšený záhon – výhody a nevýhody</a></li>
                <li><a href="#materialy">Výběr materiálu – srovnání</a></li>
                <li><a href="#stavba">Jak záhon postavit krok za krokem</a></li>
                <li><a href="#vrstvy">Zlaté pravidlo vrstvení</a></li>
                <li><a href="#vysadba">Co sázet – kombinace rostlin</a></li>
                <li><a href="#pece">Péče během sezóny</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            {/* SECTION 1 */}
            <section id="proc">
              <h2>Proč vyvýšený záhon – výhody a nevýhody</h2>
              <p>Vyvýšený záhon není jen módní trend – je to praxí ověřený způsob pěstování, který má konkrétní výhody oproti klasickému záhonu v zemi. Zároveň má i svá omezení, která stojí za to znát dopředu.</p>
              <ul>
                <li><strong>Lepší výnos:</strong> Díky ideálně připravené půdě a hustší výsadbě dává vyvýšený záhon o 20–30 % vyšší úrodu na m² než záhon v zemi.</li>
                <li><strong>Méně plevelů:</strong> Dovezený substrát neobsahuje semena plevelů. První sezóna je téměř bez plevele, druhá výrazně snazší než v klasickém záhonu.</li>
                <li><strong>Ergonomie:</strong> Při výšce 80–100 cm pracuješ bez ohýbání. Pro seniory a lidi se zády je to zásadní rozdíl.</li>
                <li><strong>Rychlejší oteplení půdy:</strong> Vyvýšený záhon se na jaře oteplí o 2–4 týdny dříve než okolní země. Sezóna začíná dřív.</li>
                <li><strong>Kontrola půdy:</strong> Sám určuješ složení substrátu. Ideální pro těžkou jílovou nebo písčitou půdu v zahradě.</li>
              </ul>
              <p><strong>Nevýhody:</strong> Vyšší pořizovací náklady (materiál + substrát), rychlejší vysychání v létě (nutná pravidelná zálivka) a potřeba doplňovat substrát každé 2–3 roky jak se organika rozkládá.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pro začátek postav záhon o rozměrech <strong>120 × 240 cm</strong>. Šířka 120 cm ti umožní dosáhnout na střed ze obou stran bez šlápnutí dovnitř. Je to zlatý standard pro záhony.</div>
            </section>

            {/* SECTION 2 — TABULKA MATERIÁLŮ */}
            <section id="materialy">
              <h2>Výběr materiálu – co se vyplatí</h2>
              <p>Materiál záhonu ovlivňuje životnost, cenu, izolaci půdy a celkový vzhled zahrady. Každá volba má své kompromisy.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead>
                    <tr>
                      <th>Materiál</th>
                      <th>Životnost</th>
                      <th>Cena (120×240 cm)</th>
                      <th>Izolace půdy</th>
                      <th>Vzhled</th>
                      <th>Poznámka</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Smrkové dřevo</strong></td>
                      <td>5–8 let</td>
                      <td>800–1 500 Kč</td>
                      <td>⭐⭐⭐⭐ Výborná</td>
                      <td>Přirozený, teplý</td>
                      <td>Nejpopulárnější volba. Nelakovat uvnitř.</td>
                    </tr>
                    <tr>
                      <td><strong>Modřín / dub</strong></td>
                      <td>15–25 let</td>
                      <td>2 500–5 000 Kč</td>
                      <td>⭐⭐⭐⭐ Výborná</td>
                      <td>Prémiový vzhled</td>
                      <td>Přirozeně odolné, nevyžaduje impregnaci.</td>
                    </tr>
                    <tr>
                      <td><strong>Ocel Corten</strong></td>
                      <td>30–50 let</td>
                      <td>4 000–9 000 Kč</td>
                      <td>⭐⭐ Nízká (ohřívá se)</td>
                      <td>Moderní, industriální</td>
                      <td>Na slunných místech se přehřívá – riziko pro kořeny.</td>
                    </tr>
                    <tr>
                      <td><strong>Plast / kompozit</strong></td>
                      <td>10–20 let</td>
                      <td>1 500–3 500 Kč</td>
                      <td>⭐⭐⭐ Střední</td>
                      <td>Různé varianty</td>
                      <td>Bez údržby, ale méně ekologické.</td>
                    </tr>
                    <tr>
                      <td><strong>Beton / tvárnice</strong></td>
                      <td>30+ let</td>
                      <td>2 000–6 000 Kč</td>
                      <td>⭐⭐ Nízká</td>
                      <td>Pevný, stabilní</td>
                      <td>Neodolávatelná alternativa v kombinaci s omítkou.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Dřevo uvnitř záhonu nikdy neimpregnuj chemickými přípravky – toxiny by mohly prostupovat do substrátu a zeleniny. Pokud chceš prodloužit životnost, použij přírodní lněný olej.</div>
            </section>

            {/* SECTION 3 */}
            <section id="stavba">
              <h2>Jak záhon postavit krok za krokem</h2>
              <p>Stavba záhonu zabere odpoledne. Nepotřebuješ žádné speciální nářadí ani zkušenosti se stavebnictvím.</p>
              <ul>
                <li><strong>Krok 1 – Výběr místa:</strong> Záhon umísti na místo s <strong>min. 6 hodinami přímého slunce denně</strong>. Vyhni se místům pod stromy (kořeny soutěží o živiny, stín).</li>
                <li><strong>Krok 2 – Příprava podloží:</strong> Posec trávu nebo odstraň vrstvu trávníku. Nemusíš kopat – vrstvení záhonu trávu přirozeně udusí. Rovná plocha stačí.</li>
                <li><strong>Krok 3 – Pletivo na dno:</strong> Polož na zem drátěné pletivo (oko max. 1,5 cm) – ochrana proti krtkům a hrabošům. Přesah přes okraje upevni k rámu.</li>
                <li><strong>Krok 4 – Sestavení rámu:</strong> Sešroubuj nebo seber rám. Standardní tloušťka prken 4–5 cm. Vnitřní rohy zpevni kovovými úhelníky nebo hranoly.</li>
                <li><strong>Krok 5 – Vrstvení (viz sekce níže):</strong> Postupuj odspodu nahoru – větve, listí, kompost, zemina, substrát.</li>
                <li><strong>Krok 6 – Zalévání:</strong> Po naplnění záhon důkladně zalej. Vrstvy se usadí a propadnou – po 2–3 dnech doplň substrát na požadovanou výšku.</li>
              </ul>
            </section>

            {/* SECTION 4 — CHECKLIST VRSTVENÍ */}
            <section id="vrstvy">
              <h2>Zlaté pravidlo vrstvení – 4 vrstvy odspodu nahoru</h2>
              <p>Správné vrstvení je tajemství úspěšného záhonu. Spodní vrstvy zajišťují drenáž, odvětrání a postupné uvolňování živin. Horní vrstva je pěstební médium pro kořeny.</p>
              <ul>
                <li>
                  <strong>✅ Vrstva 1 – Hrubé větve a klacky (20–30 cm):</strong> Nejhrubší materiál tvoří základ. Větve a klacky zajišťují odvětrání a drenáž. Rozkládají se pomalu a uvolňují živiny po dobu 3–5 let. Klidně použij čerstvé nebo polozhnilé dřevo ze zahrady.
                </li>
                <li>
                  <strong>✅ Vrstva 2 – Listí, tráva, sláma a organika (15–20 cm):</strong> Jemná organická hmota vyplní mezery mezi větvemi. Rychle se rozkládá a zahřívá záhon zevnitř (kompostovací teplo). Přidej zkosenou trávu, podzimní listí nebo slámu.
                </li>
                <li>
                  <strong>✅ Vrstva 3 – Zralý kompost a zahradní zemina (15–20 cm):</strong> Tato vrstva je bohatá na živiny a mikroorganismy. Ideální poměr je 50 % zralý kompost a 50 % zahradní zemina. Nikdy nepoužívej čerstvý hnůj – kořeny by spálil.
                </li>
                <li>
                  <strong>✅ Vrstva 4 – Pěstební substrát (20–30 cm):</strong> Horní vrstva je to, s čím přijdou do kontaktu kořeny rostlin. Použij kvalitní univerzální nebo zeleninový substrát. Smíchej ho s perlitem (20 %) pro lepší zadržování vody a provzdušnění.
                </li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Záhon plň <strong>o 10–15 cm výše</strong> než je výška rámu. Po zalití a usazení klesne přesně na úroveň okraje. Pokud ho neplníš s přesahem, skončíš s prázdným prostorem pod okrajem.</div>
            </section>

            {/* SECTION 5 — TABULKA VÝSADBY */}
            <section id="vysadba">
              <h2>Co sázet – kombinace rostlin které se podporují</h2>
              <p>Ve vyvýšeném záhonu je hustší výsadba než v klasickém záhonu. Klíč je kombinovat rostliny které si vzájemně pomáhají – odpuzují škůdce, fixují dusík nebo stíní kořeny sousedů.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead>
                    <tr>
                      <th>Hlavní rostlina</th>
                      <th>Ideální kombinace</th>
                      <th>Proč to funguje</th>
                      <th>Co nesázet vedle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>🍅 Rajče</strong></td>
                      <td>Bazalka, mrkev, petržel</td>
                      <td>Bazalka odpuzuje mšice a zlepšuje chuť. Mrkev kyprí půdu kolem kořenů.</td>
                      <td>Kopr, fenykl, zelí</td>
                    </tr>
                    <tr>
                      <td><strong>🥒 Okurka</strong></td>
                      <td>Kopr, ředkvičky, fazole</td>
                      <td>Kopr přitahuje prospěšný hmyz. Fazole fixuje dusík do půdy.</td>
                      <td>Šalvěj, brambory</td>
                    </tr>
                    <tr>
                      <td><strong>🥕 Mrkev</strong></td>
                      <td>Cibule, pór, salát</td>
                      <td>Cibule odpuzuje mrkvovou mušku. Salát stíní půdu a potlačuje plevel.</td>
                      <td>Kopr, petržel (soutěž)</td>
                    </tr>
                    <tr>
                      <td><strong>🥬 Salát</strong></td>
                      <td>Ředkvičky, jahody, mrkev</td>
                      <td>Ředkvičky rychle rostou a uvolní místo. Ideální jako „fill-in" plodina.</td>
                      <td>Celer (alelopatie)</td>
                    </tr>
                    <tr>
                      <td><strong>🌿 Bylinky (obecně)</strong></td>
                      <td>Téměř vše – okraje záhonu</td>
                      <td>Majoránka, tymián a šalvěj na okrajích odpuzují škůdce z celého záhonu.</td>
                      <td>Fenykl (inhibuje sousedy)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Vysaď na sever záhonu (nebo ke stínicí straně) vyšší rostliny jako rajčata nebo fazole na tyčích. Nižší salát a bylinky umísti na jih, kde dostanou dostatek světla i ve stínu vysokých sousedů.</div>
            </section>

            {/* SECTION 6 */}
            <section id="pece">
              <h2>Péče během sezóny</h2>
              <p>Vyvýšený záhon je nenáročný, ale má jedno specifikum: <strong>rychleji vysychá</strong> než záhon v zemi. V horkém létě může být potřeba zalévat každý den.</p>
              <ul>
                <li><strong>Zálivka:</strong> Kontroluj vlhkost každý den v létě. Zastrč prst 5 cm do substrátu – pokud je suchý, zalij. Kapková závlaha nebo závlahová hadice pod mulčem výrazně snižuje spotřebu vody.</li>
                <li><strong>Mulčování:</strong> Nanes 5 cm vrstvu slámy, štěpky nebo zkosené trávy na povrch záhonu. Udrží vlhkost, zabrání plevelům a postupně obohacuje substrát.</li>
                <li><strong>Přihnojování:</strong> Od poloviny sezóny (červenec) přidávej tekuté hnojivo každé 2 týdny. Organické živiny z dolních vrstev se rozkládají, ale nestačí pro výnosné plodiny.</li>
                <li><strong>Doplňování substrátu:</strong> Každý podzim nebo jaro doplň 5–10 cm kompostu. Vrstvy se ročně propadnou o 5–8 cm jak se organika rozkládá.</li>
                <li><strong>Přezimování:</strong> Záhon nezakrývej – mráz zabíjí přezimující škůdce a vajíčka. V listopadu ho osej zeleným hnojením (hořčice, pohanka) nebo nakryj kompostem.</li>
              </ul>
            </section>

            {/* SECTION 7 — FAQ */}
            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">
                    Jak vysoký má být vyvýšený záhon?
                    <span className="faq-icon">▾</span>
                  </summary>
                  <div className="faq-body">
                    Záleží na účelu. Pro práci ve stoje (bez ohýbání) je ideální výška <strong>80–100 cm</strong>. Pro práci v kleku nebo na nižším místě stačí 40–60 cm. Minimální výška pro plnohodnotné vrstvení je 30 cm – méně nedává dostatečný prostor pro kořenový systém a vrstvení.
                  </div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">
                    Musí být vespod pletivo proti hlodavcům?
                    <span className="faq-icon">▾</span>
                  </summary>
                  <div className="faq-body">
                    Silně doporučujeme ano, zejména pokud máš v zahradě krtky nebo hraboše. Drátěné pletivo s okem 1–1,5 cm na dně záhonu je levná pojistka (100–200 Kč) která zachrání celou sezónu. Bez pletiva mohou hlodavci zničit kořenovou zeleninu a cibuloviny za jediný týden.
                  </div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">
                    Kolik substrátu potřebuji na záhon 120 × 240 cm?
                    <span className="faq-icon">▾</span>
                  </summary>
                  <div className="faq-body">
                    Pro záhon 120 × 240 cm o výšce 80 cm potřebuješ přibližně: větve a klacky (volně) cca 0,5 m³, listí a organika cca 0,3 m³, kompost + zemina cca 0,4 m³, pěstební substrát cca 0,5 m³. Celkem přibližně <strong>1,7 m³ materiálu</strong>. Počítej s tím, že vrstvy se po zalití usadí o 15–20 %.
                  </div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">
                    Lze postavit záhon na terase nebo balkoně?
                    <span className="faq-icon">▾</span>
                  </summary>
                  <div className="faq-body">
                    Ano, ale musíš počítat s nosností. Naplněný záhon 120 × 240 cm váží 400–600 kg. Standardní terasa unese 150–300 kg/m², takže rozmístění je klíčové. Na balkoně doporučujeme menší záhony (60 × 120 cm) s lehčím substrátem na bázi perlitu a kokosvlákna. Vždy zkontroluj nosnost balkonu u statika.
                  </div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">
                    Kdy mohu začít sázet do nového záhonu?
                    <span className="faq-icon">▾</span>
                  </summary>
                  <div className="faq-body">
                    Hned po naplnění a důkladném zalití – stačí počkat 2–3 dny na usazení vrstev a doplnit substrát. Nový záhon má výbornou strukturu a množství živin pro první sezónu. V dalších sezónách je třeba substrát doplňovat. Ideální čas pro výsadbu je jaro (duben–květen) nebo podzim pro cibuloviny a přezimující zeleninu.
                  </div>
                </details>
              </div>
            </section>

            {/* SHARE BOTTOM */}
            <ShareButtons
              url="https://domovniguru.cz/blog/vyvysene-zahony"
              title="Vyvýšené záhony: Kompletní průvodce od stavby po první sklizeň 2026"
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
                <li><a href="#proc">Proč vyvýšený záhon</a></li>
                <li><a href="#materialy">Výběr materiálu</a></li>
                <li><a href="#stavba">Jak záhon postavit</a></li>
                <li><a href="#vrstvy">Zlaté pravidlo vrstvení</a></li>
                <li><a href="#vysadba">Co sázet</a></li>
                <li><a href="#pece">Péče během sezóny</a></li>
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
