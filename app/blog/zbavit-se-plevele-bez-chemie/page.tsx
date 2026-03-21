import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak se zbavit plevele v trávníku i na dlažbě bez chemie (2026)",
  description: "Mechanické vytrhávání, vroucí voda, ocet a plamen. Kompletní průvodce likvidací plevele bez herbicidů – bezpečně pro lidi, zvířata i půdu.",
  alternates: { canonical: "https://domovniguru.cz/blog/zbavit-se-plevele-bez-chemie" },
  openGraph: { title: "Jak se zbavit plevele v trávníku i na dlažbě bez chemie (2026)", description: "Vroucí voda, ocet, mechanické vytrhávání. Průvodce likvidací plevele bez chemie.", url: "https://domovniguru.cz/blog/zbavit-se-plevele-bez-chemie", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-03-01T08:00:00Z", modifiedTime: "2026-03-21T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak se zbavit plevele bez chemie 2026", description: "Vroucí voda, ocet, mechanicky. Průvodce bez herbicidů." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://domovniguru.cz/blog/zbavit-se-plevele-bez-chemie#article", "headline": "Jak se zbavit plevele v trávníku i na dlažbě bez chemie (2026)", "datePublished": "2026-03-01T08:00:00Z", "dateModified": "2026-03-21T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "inLanguage": "cs", "keywords": ["jak se zbavit plevele bez chemie", "plevel v travniku", "plevel v dlazbe", "ocet na plevel", "mulcovani plevele", "vyryvak plevele"] }] };

const RELATED = [
  { title: "Jak správně sekat trávník – průvodce pro hustý pažit", href: "/blog/jak-sekat-travnik", read: "8 min" },
  { title: "Jak připravit zahradu na jaro – kompletní checklist", href: "/blog/jarni-zahrada", read: "6 min" },
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
              <span>Plevel bez chemie</span>
            </nav>

            {/* HEADER */}
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 8 min čtení</span>
              </div>
              <h1 className="article-h1">Jak se zbavit plevele v trávníku i na dlažbě bez chemie</h1>
              <p className="article-lead">Herbicidy jsou rychlé, ale ničí půdní mikrobiom, ohrožují děti a domácí zvířata a jejich efekt je dočasný. Tyhle přírodní metody jsou pomalejší — ale trvalejší, bezpečné a většinu zvládneš s tím co doma máš.</p>
              <div className="article-meta-row"><span>Aktualizováno: 21. března 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons
                url="https://domovniguru.cz/blog/zbavit-se-plevele-bez-chemie"
                title="Jak se zbavit plevele v trávníku i na dlažbě bez chemie (2026)"
              />
            </header>

            {/* HERO ILLUSTRATION */}
            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 210" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="210" fill="#f4faf0"/>
                <defs>
                  <linearGradient id="plevBg" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#eef8e8"/>
                    <stop offset="100%" stopColor="#f4faf0"/>
                  </linearGradient>
                  <linearGradient id="plevPuda" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#7B5E3C"/>
                    <stop offset="100%" stopColor="#5a3e20"/>
                  </linearGradient>
                </defs>
                <rect width="760" height="210" fill="url(#plevBg)"/>

                {/* === PANEL 1: Pampeliška s kořenem === */}
                <g transform="translate(30, 15)">
                  <text x="80" y="13" textAnchor="middle" fontSize="9" fill="#8a6020" fontWeight="700" letterSpacing="0.04em">🌱 PLEVEL S KOŘENEM</text>
                  {/* Půda */}
                  <rect x="0" y="130" width="160" height="50" rx="3" fill="url(#plevPuda)" opacity="0.8"/>
                  {/* Hluboký kořen */}
                  <path d="M80 130 L80 175" stroke="#8B5E3C" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M80 148 Q65 155 60 165" stroke="#8B5E3C" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                  <path d="M80 158 Q95 162 100 172" stroke="#8B5E3C" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                  <path d="M80 140 Q68 145 62 152" stroke="#8B5E3C" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                  {/* Stonek */}
                  <line x1="80" y1="130" x2="80" y2="80" stroke="#5aaa20" strokeWidth="2.5" strokeLinecap="round"/>
                  {/* Listy pampelisky */}
                  {[[-20,0,115,-25,15,105],[-15,5,105,20,0,95],[0,-15,100,5,10,115]].map(([x1,y1,ly1,x2,y2,ly2],i)=>(
                    <path key={i} d={`M80 120 Q${80+x1} ${ly1} ${80+x1+x2} ${ly2}`}
                      stroke="#5aaa20" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  ))}
                  {/* Květ */}
                  {[0,45,90,135,180,225,270,315].map((deg,i)=>(
                    <ellipse key={i}
                      cx={80+14*Math.cos(deg*Math.PI/180)}
                      cy={62+14*Math.sin(deg*Math.PI/180)}
                      rx="6" ry="3"
                      fill="#f9d84a" opacity="0.9"
                      transform={`rotate(${deg}, ${80+14*Math.cos(deg*Math.PI/180)}, ${62+14*Math.sin(deg*Math.PI/180)})`}/>
                  ))}
                  <circle cx="80" cy="62" r="8" fill="#f9b820"/>
                  {/* Popis hloubky kořene */}
                  <line x1="148" y1="130" x2="148" y2="175" stroke="#a08060" strokeWidth="1"/>
                  <text x="155" y="155" fontSize="7" fill="#a08060" fontWeight="600">30+ cm</text>
                </g>

                {/* === PANEL 2: Mechanické vytrhávání === */}
                <g transform="translate(215, 15)">
                  <text x="80" y="13" textAnchor="middle" fontSize="9" fill="#3a7a3a" fontWeight="700" letterSpacing="0.04em">✅ MECHANICKY</text>
                  <rect x="0" y="130" width="160" height="50" rx="3" fill="url(#plevPuda)" opacity="0.8"/>
                  {/* Vypichovak */}
                  <g transform="translate(45, 30)">
                    {/* Rukojet */}
                    <rect x="28" y="0" width="14" height="55" rx="5" fill="#8B6340" stroke="#6b4320" strokeWidth="1"/>
                    {/* Kov */}
                    <rect x="32" y="50" width="6" height="50" rx="1" fill="#707070"/>
                    {/* Vidlicka dole */}
                    <path d="M28 100 L32 115 L38 100" fill="#606060" stroke="#505050" strokeWidth="1"/>
                    <path d="M38 100 L42 115 L48 100" fill="#606060" stroke="#505050" strokeWidth="1"/>
                  </g>
                  {/* Koren vytyhaný nahoru */}
                  <path d="M80 130 Q78 110 82 85" stroke="#8B5E3C" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4,2"/>
                  <path d="M82 85 Q70 78 65 68" stroke="#8B5E3C" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                  <path d="M82 95 Q94 90 98 82" stroke="#8B5E3C" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                  {/* Sipka nahoru */}
                  <path d="M100 120 L100 90" stroke="#3a9a3a" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M95 95 L100 89 L105 95" stroke="#3a9a3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <text x="80" y="175" textAnchor="middle" fontSize="8" fill="#2a6a2a" fontWeight="600">Vyrvi i s korenem</text>
                  <text x="80" y="185" textAnchor="middle" fontSize="7" fill="#4a8a4a">Po dešti snazší</text>
                </g>

                {/* === PANEL 3: Horka voda === */}
                <g transform="translate(400, 15)">
                  <text x="80" y="13" textAnchor="middle" fontSize="9" fill="#c05020" fontWeight="700" letterSpacing="0.04em">♨️ HORKA VODA</text>
                  <rect x="0" y="130" width="160" height="50" rx="3" fill="#c8b8a0" opacity="0.6"/>
                  {/* Dlazba */}
                  {[[0,130,50,20],[50,130,50,20],[100,130,50,20],[25,148,50,20],[75,148,50,20],[125,148,50,20]].map(([x,y,w,h],i)=>(
                    <rect key={i} x={x+1} y={y+1} width={w-2} height={h-2} rx="1" fill="#d8c8b0" stroke="#c0b090" strokeWidth="0.5"/>
                  ))}
                  {/* Plevel v dlazbe */}
                  <path d="M75 130 L75 105" stroke="#5aaa20" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M75 115 Q65 110 60 103" stroke="#5aaa20" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                  <path d="M75 120 Q88 114 92 107" stroke="#5aaa20" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                  {/* Konvice */}
                  <g transform="translate(30, 35)">
                    <path d="M15 0 Q5 0 5 15 L10 50 Q10 55 20 55 L50 55 Q60 55 60 50 L65 15 Q65 0 55 0 Z" fill="#b0a090" stroke="#908070" strokeWidth="1.5"/>
                    <path d="M55 20 Q75 18 72 30 Q70 38 55 38" stroke="#b0a090" strokeWidth="3" fill="none" strokeLinecap="round"/>
                    {/* Para */}
                    {[40,47,54].map((x,i)=>(
                      <path key={i} d={`M${x} 58 Q${x+3} 65 ${x} 72`} stroke="#e07040" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7"/>
                    ))}
                  </g>
                  <text x="80" y="175" textAnchor="middle" fontSize="8" fill="#c05020" fontWeight="600">Jen na dlazbe a chodniku</text>
                  <text x="80" y="185" textAnchor="middle" fontSize="7" fill="#d07040">Neznici travnik!</text>
                </g>

                {/* === PANEL 4: Preskrtnuta chemie === */}
                <g transform="translate(585, 15)">
                  <text x="80" y="13" textAnchor="middle" fontSize="9" fill="#5a5a5a" fontWeight="700" letterSpacing="0.04em">🚫 BEZ CHEMIE</text>
                  {/* Lahev s chemii */}
                  <g transform="translate(45, 25)">
                    <rect x="15" y="15" width="40" height="80" rx="5" fill="#e0e8f0" stroke="#b0c0d0" strokeWidth="1.5"/>
                    <rect x="22" y="8" width="26" height="10" rx="3" fill="#c0c8d8" stroke="#a0b0c8" strokeWidth="1"/>
                    <rect x="19" y="30" width="32" height="40" rx="2" fill="#fff" opacity="0.6"/>
                    <text x="35" y="48" textAnchor="middle" fontSize="7" fill="#4060a0" fontWeight="700">HERB</text>
                    <text x="35" y="58" textAnchor="middle" fontSize="6" fill="#4060a0">ICID</text>
                    <text x="35" y="68" textAnchor="middle" fontSize="9">☠️</text>
                    {/* Preskrtnutí */}
                    <line x1="5" y1="5" x2="65" y2="105" stroke="#e03030" strokeWidth="5" strokeLinecap="round" opacity="0.85"/>
                    <line x1="65" y1="5" x2="5" y2="105" stroke="#e03030" strokeWidth="5" strokeLinecap="round" opacity="0.85"/>
                  </g>
                  <rect x="10" y="140" width="140" height="28" rx="6" fill="#5a9e6f" opacity="0.12"/>
                  <text x="80" y="152" textAnchor="middle" fontSize="8" fill="#3a7a3a" fontWeight="700">Bezpecne pro deti</text>
                  <text x="80" y="163" textAnchor="middle" fontSize="7" fill="#5a9a5a">i domaci zvirata</text>
                </g>

                {/* Dolní lišta */}
                <rect y="190" width="760" height="20" fill="#d8f0d0" opacity="0.7"/>
                <text x="95"  y="203" textAnchor="middle" fontSize="8" fill="#3a6a3a" fontWeight="600" letterSpacing="0.04em">🌱 PLEVEL MA HLUBOKY KOREN</text>
                <text x="285" y="203" textAnchor="middle" fontSize="8" fill="#3a6a3a" fontWeight="600" letterSpacing="0.04em">✅ MECHANICKY = NEJLEPSI</text>
                <text x="475" y="203" textAnchor="middle" fontSize="8" fill="#3a6a3a" fontWeight="600" letterSpacing="0.04em">♨️ HORKA VODA NA DLAZBU</text>
                <text x="655" y="203" textAnchor="middle" fontSize="8" fill="#3a6a3a" fontWeight="600" letterSpacing="0.04em">🚫 BEZ HERBICIDU</text>
              </svg>
            </div>

            {/* TOC */}
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#proc-bez-chemie">Proč se vyhnout herbicidům</a></li>
                <li><a href="#prirodni-metody">Přírodní metody likvidace – srovnání</a></li>
                <li><a href="#travnik-vs-dlazba">Plevel v trávníku vs. na dlažbě</a></li>
                <li><a href="#recepty">Domácí recepty na přírodní postřiky</a></li>
                <li><a href="#prevence">Prevence – jak plevel zastavit</a></li>
                <li><a href="#chyby">Nejčastější chyby</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            {/* SECTION 1 */}
            <section id="proc-bez-chemie">
              <h2>Proč se vyhnout herbicidům</h2>
              <p>Herbicidy (chemické přípravky na plevel) jsou rychlé a zdánlivě pohodlné. Ale mají řadu nevýhod které jsou v zahradě s dětmi, domácími zvířaty nebo zeleninou nepřijatelné.</p>
              <ul>
                <li><strong>Ničí půdní mikrobiom:</strong> Zdravá zahradní půda obsahuje miliardy prospěšných bakterií, hub a žížal. Herbicidy je nezabíjejí selektivně — likvidují vše, čímž narušují přirozené cykly živin a strukturu půdy na roky dopředu.</li>
                <li><strong>Karcinogenita a toxicita:</strong> Glyfosát (nejrozšířenější herbicid, Roundup) je Světovou zdravotnickou organizací (WHO) klasifikován jako „pravděpodobně karcinogenní pro lidi". Přetrvává v půdě i v potravinách.</li>
                <li><strong>Rezistence plevele:</strong> Stejně jako bakterie si vytvářejí rezistenci na antibiotika, plevel si postupně vytváří odolnost na herbicidy. Efekt se rok od roku snižuje, dávky musí růst.</li>
                <li><strong>Dočasný efekt:</strong> Herbicidy ničí nadzemní část plevele, ale kořeny u trvalých druhů (pampeliška, přeslička, pcháč) přežijí a plevel znovu vyraší. Bez mechanického odstranění kořene jde o koloběh bez konce.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> V EU je od roku 2023 postupně omezováno používání glyfosátu pro neprofesionály. Přírodní metody nejsou jen ekologičtější — brzy budou i jedinou legální volbou pro domácí zahrady.</div>
            </section>

            {/* SECTION 2 — TABULKA METOD */}
            <section id="prirodni-metody">
              <h2>Přírodní metody likvidace plevele – srovnání</h2>
              <p>Každá metoda má svůj kontext — co funguje skvěle na dlažbě, může zničit trávník. Tabulka ti pomůže vybrat správnou metodu pro správný povrch.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead>
                    <tr>
                      <th>Metoda</th>
                      <th>Efektivita</th>
                      <th>Trávník</th>
                      <th>Dlažba / chodník</th>
                      <th>Záhon</th>
                      <th>Cena / dostupnost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Mechanické vytrhávání</strong></td>
                      <td>⭐⭐⭐⭐⭐ Nejvyšší</td>
                      <td>✅ Ideální</td>
                      <td>✅ Možné</td>
                      <td>✅ Ideální</td>
                      <td>Zdarma / vypichovák 100–300 Kč</td>
                    </tr>
                    <tr>
                      <td><strong>Vroucí voda</strong></td>
                      <td>⭐⭐⭐⭐ Vysoká</td>
                      <td>❌ Zabije i trávu</td>
                      <td>✅ Výborné</td>
                      <td>⚠️ Opatrně u rostlin</td>
                      <td>Zdarma</td>
                    </tr>
                    <tr>
                      <td><strong>Ocet (10–20 %)</strong></td>
                      <td>⭐⭐⭐ Střední</td>
                      <td>❌ Poškozuje trávu</td>
                      <td>✅ Dobré</td>
                      <td>⚠️ Okyseluje půdu</td>
                      <td>20–50 Kč/litr</td>
                    </tr>
                    <tr>
                      <td><strong>Plamen (hořák)</strong></td>
                      <td>⭐⭐⭐⭐ Vysoká</td>
                      <td>❌ Nebezpečné</td>
                      <td>✅ Výborné</td>
                      <td>❌ Příliš rizikové</td>
                      <td>Hořák 300–800 Kč</td>
                    </tr>
                    <tr>
                      <td><strong>Sůl</strong></td>
                      <td>⭐⭐⭐ Střední</td>
                      <td>❌ Ničí půdu</td>
                      <td>✅ Jen mezi dlaždicemi</td>
                      <td>❌ Ničí půdní mikrobiom</td>
                      <td>Zdarma</td>
                    </tr>
                    <tr>
                      <td><strong>Mulčování</strong></td>
                      <td>⭐⭐⭐⭐ Preventivní</td>
                      <td>⚠️ Omezené použití</td>
                      <td>❌ Nevhodné</td>
                      <td>✅ Výborné</td>
                      <td>100–300 Kč/pytel mulče</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Nejefektivnější a nejuniverzálnější metodou je mechanické vytrhávání s vypichovakem — dostaneš celý kořen, neohrožuješ okolní rostliny a výsledek je trvalý. Ostatní metody jsou vhodné jako doplněk nebo pro specifické plochy.</div>
            </section>

            {/* SECTION 3 — CHECKLIST TRAVNIK VS DLAZBA */}
            <section id="travnik-vs-dlazba">
              <h2>Plevel v trávníku vs. na dlažbě – rozdílné přístupy</h2>
              <p>Největší chyba kterou zahradníci dělají je aplikovat stejnou metodu na všechny povrchy. Vroucí voda nebo ocet na dlažbě funguje skvěle — ale na trávníku zničí trávu i s plevelem.</p>

              <h3>🌱 Plevel v trávníku</h3>
              <ul>
                <li><strong>✅ Mechanické vytrhávání s vypichovakem:</strong> Speciální vypichovák (tzv. "weed puller") dostane celý kořen pampelisky nebo lopuchu bez narušení okolní trávy. Ideálně po dešti kdy je půda měkká.</li>
                <li><strong>✅ Pravidelné sekání na správnou výšku:</strong> Hustý a zdravý trávník je nejlepší prevencí. Tráva posečená na 4–5 cm stíní půdu a zabraňuje klíčení semen plevele. Viz pravidlo 1/3.</li>
                <li><strong>✅ Hnojení dusíkem na jaře:</strong> Silná a hustá tráva vytlačuje plevel přirozeně. Hnojení na jaře (dusíkaté hnojivo) nastartuje rychlý růst trávy a potlačí klíčící plevel.</li>
                <li><strong>✅ Dosévání holých míst:</strong> Holá místa v trávníku jsou pozvánka pro plevel. Dosej je travní směsí a udržuj vlhkost 2–3 týdny.</li>
                <li><strong>❌ Ocet, sůl ani vroucí voda:</strong> Tyto metody nezabíjejí selektivně — zničí vše, trávu i plevel. Zanechají holá místa kam plevel znovu přijde.</li>
              </ul>

              <h3>🧱 Plevel na dlažbě a chodníku</h3>
              <ul>
                <li><strong>✅ Vroucí voda:</strong> Nejjednodušší metoda. Přelij plevel vroucí vodou přímo z konvice — zničí nadzemní část i kořeny blízko povrchu. Opakuj za 1–2 týdny pokud plevel znovu vyraší.</li>
                <li><strong>✅ Plynový hořák:</strong> Rychlý a efektivní pro velké plochy. Nespálit plevel — stačí zahřát buňky na 70–80 °C (stéblo zčervená). Nikdy nepoužívej za sucha nebo poblíž hořlavin.</li>
                <li><strong>✅ Speciální nůž na dlažební spáry:</strong> Úzký nůž nebo dlátko na vytrhávání plevele ze spár — přesné a efektivní mechanické řešení.</li>
                <li><strong>✅ Ocet 10–20 %:</strong> Aplikuj přímo na plevel (ne na okolí) ve slunečný den — UV záření zesiluje účinek. Dávej pozor na blízké rostliny a trávník.</li>
                <li><strong>✅ Fugování spár:</strong> Trvalé řešení — vyplnění dlažebních spár polymersandem nebo spárovací maltou zabrání klíčení semen v budoucnu.</li>
              </ul>
            </section>

            {/* SECTION 4 — TABULKA RECEPTU */}
            <section id="recepty">
              <h2>Domácí recepty na přírodní postřiky – bezpečné poměry</h2>
              <p>Přírodní postřiky jsou levné a snadno dostupné. Ale pozor — ocet a sůl mohou při nadměrném použití okyselit nebo zasolit půdu. Používej je cíleně, s rozumem a jen na nechtěné plochy.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead>
                    <tr>
                      <th>Recept</th>
                      <th>Složení</th>
                      <th>Postup</th>
                      <th>Kde použít</th>
                      <th>Varování</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Základní octový postřik</strong></td>
                      <td>1 l octa (10 %), 1 lžíce mycí prostředek</td>
                      <td>Smíchej, nastříkej přímo na plevel ve slunný den. Mýdlo pomáhá octu přilnout na list.</td>
                      <td>Dlažba, chodník, obrubníky</td>
                      <td>Okyseluje půdu — nepoužívej opakovaně na záhonech.</td>
                    </tr>
                    <tr>
                      <td><strong>Silný octový postřik</strong></td>
                      <td>1 l octa (20 %), 2 lžíce soli, 1 lžíce mycí prostředek</td>
                      <td>Smíchej a postříkej odolné plevele (pampeliška, pcháč). Účinnější na velké rostliny.</td>
                      <td>Pouze dlažba a chodníky</td>
                      <td>Sůl zasoluje půdu na léta — nikdy na záhon ani trávník!</td>
                    </tr>
                    <tr>
                      <td><strong>Mýdlový postřik</strong></td>
                      <td>2 l vody, 4 lžíce tekutého mýdla (bio/přírodní)</td>
                      <td>Postříkej listy — mýdlo narušuje kutikulu listu a rostlina schne. Opakuj 2–3× týdně.</td>
                      <td>Záhony (opatrně), dlažba</td>
                      <td>Syntetické mýdlo může poškodit půdní mikrobiom. Používej přírodní variantu.</td>
                    </tr>
                    <tr>
                      <td><strong>Solný postřik (přímý)</strong></td>
                      <td>1 lžíce soli přímo na kořen nebo do spáry</td>
                      <td>Nasyp sůl přímo do spáry dlažby nebo na kořen. Nenastřikuj roztok — zasoluje okolí.</td>
                      <td>Výhradně dlažební spáry</td>
                      <td>Sůl zůstává v půdě roky. Absolutně ne na záhon, trávník ani poblíž stromů.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>⚠️ Varování:</strong> Ocet a sůl jsou <strong>neselektivní</strong> — zabijí vše s čím přijdou do kontaktu. Aplikuj přesně pomocí lahvičky se sprejem nebo injekční stříkačky. Vyhni se větrným dnům.</div>
            </section>

            {/* SECTION 5 — PREVENCE */}
            <section id="prevence">
              <h2>Prevence – jak plevel zastavit dřív než začne</h2>
              <p>Nejlepší boj s plevelem je ten, ke kterému nedojde. Preventivní opatření jsou méně práce než opakovaná likvidace.</p>
              <ul>
                <li><strong>Mulčování záhonů:</strong> Vrstva mulče (kůra, štěpka, listí) 5–8 cm na záhonech blokuje světlo a zabraňuje klíčení semen plevele. Zároveň udržuje vlhkost a obohacuje půdu. Obnovuj každý rok na jaře.</li>
                <li><strong>Krajinná textilie:</strong> Pod mulč nebo štěrk polož krajinnou (geotextilní) textilii — zabrání plevelu proniknout zdola a zároveň propouští vodu. Trvanlivost 5–10 let.</li>
                <li><strong>Fugování dlažebních spár:</strong> Polymersand nebo spárovací malta ve spárách dlažby fyzicky zabrání klíčení semen. Jednou zaférovné spáry jsou bez plevele roky.</li>
                <li><strong>Hustý trávník:</strong> Zdravý, hustý a pravidelně sekávaný trávník je nejlepší prevence plevele. Tráva stíní půdu a obsazuje místo kde by plevel klíčil.</li>
                <li><strong>Správné kompostování:</strong> Plevel s dozrálými semeny nedávej do kompostu — semena přežijí kompostování a rozšíříš je po zahradě. Plevel bez semen kompostovat lze.</li>
              </ul>
            </section>

            {/* SECTION 6 — CHYBY */}
            <section id="chyby">
              <h2>Nejčastější chyby při likvidaci plevele</h2>
              <ul>
                <li><strong>Odtrhávání bez kořene:</strong> Odtrhnuté stéblo plevele se vrátí za 1–2 týdny. Bez kořene jde jen o dočasné řešení. Vždy použi vypichovák nebo rukou vytrhni celý kořen.</li>
                <li><strong>Ocet nebo vroucí voda na trávník:</strong> Zničíš trávu i s plevelem. Zanecháš holá místa kam plevel příjde znovu, silnější.</li>
                <li><strong>Sůl na záhon:</strong> Sůl zasoluje půdu na roky. Rostliny v okolí přestanou prospívat, půdní mikrobiom se zhroutí. Sůl patří výhradně do spár dlažby.</li>
                <li><strong>Plevel po dozrání semen:</strong> Pokud plevel odstraníš poté co vysemení, rozšíříš tisíce semen po zahradě. Plevel odstraňuj vždy před dozráním semen — nejpozději při prvním kvetení.</li>
                <li><strong>Sekání místo vytrhávání:</strong> Posečený plevel (pampeliška, pcháč) znovu vyraší z kořene a rozšíří semena. Plevel musíš vytrhávat, ne jen sekat.</li>
              </ul>
            </section>

            {/* SECTION 7 — FAQ */}
            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">
                    Funguje mulčování proti plevelu?
                    <span className="faq-icon">▾</span>
                  </summary>
                  <div className="faq-body">
                    Ano — mulčování je jednou z nejúčinnějších preventivních metod. Vrstva organického mulče (kůra, štěpka, kompost) nebo anorganického mulče (štěrk, kamínky) 5–8 cm blokuje světlo a fyzicky brání klíčení semen plevele. Mulč zároveň zadržuje vlhkost a u organických typů postupně obohacuje půdu živinami. Obnovuj organický mulč každý rok na jaře. Pod mulč polož krajinnou textilii pro ještě lepší výsledky.
                  </div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">
                    Kdy je nejlepší doba na likvidaci plevele?
                    <span className="faq-icon">▾</span>
                  </summary>
                  <div className="faq-body">
                    Nejlepší čas jsou dva: (1) <strong>Brzy na jaře</strong> — než plevel dozraje a vysemení. Jednoletý plevel (merlík, laskavec) likvidovaný před květem se nedozraje a semena se nerozšíří. (2) <strong>Po dešti</strong> — mokrá půda uvolní kořen snáze. Vytrhávání za sucha je neefektivní — kořen se lámá a zbylá část znovu vyraší. Pro vroucí vodu nebo plamen je naopak lepší suché a slunečné počasí.
                  </div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">
                    Je sůl bezpečná pro půdu?
                    <span className="faq-icon">▾</span>
                  </summary>
                  <div className="faq-body">
                    Ne — sůl (chlorid sodný) je pro půdu škodlivá. Zvyšuje osmotický tlak v půdě, čímž rostliny nemohou přijímat vodu ani živiny. Zabíjí půdní mikroorganismy a žížaly. Zasolená půda může být neplodná roky. Sůl používej <strong>výhradně do dlažebních spár</strong> kde nehrozí kontakt s půdou. Nikdy ne v záhonech, u stromů, na trávníku ani v blízkosti kořenové zóny jakékoli rostliny.
                  </div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">
                    Jak se zbavit pcháče a přesličky – jsou nejodolnější?
                    <span className="faq-icon">▾</span>
                  </summary>
                  <div className="faq-body">
                    Pcháč a přeslička jsou nejtvrdší soupeři — mají hluboký kořenový systém (pcháč až 1 metr, přeslička až 2 metry) a regenerují z každého úlomku kořene. Přírodní řešení: (1) Opakované mechanické odstraňování — každých 2–3 týdny slábnou kořeny vyčerpáním zásoby. Trvá 1–2 sezóny trpělivosti. (2) Zakrytí černou fólií nebo kartonem na celou sezónu — bez světla přeslička a pcháč odumřou. (3) Přeslička indikuje kyselou půdu — vápnění (pH nad 6,5) přirozené podmínky pro přesličku zhoršuje.
                  </div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">
                    Jak zastavit plevel v dlažebních spárách natrvalo?
                    <span className="faq-icon">▾</span>
                  </summary>
                  <div className="faq-body">
                    Jediné trvalé řešení je <strong>fugování spár</strong>. Možnosti: (1) <strong>Polymersand</strong> — speciální písek s polymerovou přísadou, po navlhčení ztvrdne a zabrání klíčení. Cena 200–400 Kč za pytel, vydrží 3–7 let. (2) <strong>Spárovací malta</strong> — pevnější, ale méně flexibilní při teplotních změnách. (3) <strong>Dočasné řešení</strong>: vroucí voda nebo plynový hořák 2–3× ročně jako údržba. Klíčové je zbavit se plevele kompletně (i kořenů) před fugováním — jinak plevel prolomí spáru zevnitř.
                  </div>
                </details>
              </div>
            </section>

            {/* SHARE BOTTOM */}
            <ShareButtons
              url="https://domovniguru.cz/blog/zbavit-se-plevele-bez-chemie"
              title="Jak se zbavit plevele v trávníku i na dlažbě bez chemie (2026)"
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
                <li><a href="#proc-bez-chemie">Proč bez herbicidů</a></li>
                <li><a href="#prirodni-metody">Srovnání metod</a></li>
                <li><a href="#travnik-vs-dlazba">Trávník vs. dlažba</a></li>
                <li><a href="#recepty">Domácí recepty</a></li>
                <li><a href="#prevence">Prevence</a></li>
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
