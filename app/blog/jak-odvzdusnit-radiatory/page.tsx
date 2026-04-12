import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak odvzdušnit radiátor – krok za krokem + úspora tepla 2026",
  description: "Studený radiátor nahoře? Odvzdušnění zvládnete sami za 10 minut. Kompletní návod krok za krokem.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-odvzdusnit-radiatory" },
openGraph: { title: "Jak odvzdušnit radiátor 2026", description: "Studený radiátor nahoře? Za 10 minut to vyřešíš.", url: "https://www.domovniguru.cz/blog/jak-odvzdusnit-radiatory", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-03-01T08:00:00Z", modifiedTime: "2026-04-12T08:00:00Z", authors: ["DomovniGuru"] },

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/jak-odvzdusnit-radiatory#article", "headline": "Jak odvzdušnit radiátor – krok za krokem + úspora tepla 2026", "datePublished": "2026-03-01T08:00:00Z", "dateModified": "2026-04-12T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["jak odvzdušnit radiátor", "odvzdušnění radiátoru", "studený radiátor nahoře", "jak odvzdušnit radiátor bez ventilu", "radiátor nefunguje", "úspora tepla radiátor"] }] };

const RELATED = [
  { title: "Příprava domu na zimu – kompletní checklist", href: "/blog/priprava-domu-na-zimu", read: "10 min" },
  { title: "Jak se zbavit plísně v bytě jednou provždy", href: "/blog/jak-odstranit-plisen-na-zdi", read: "10 min" },
  { title: "Jak ušetřit na vytápění bez výměny kotle", href: "/blog/usetrit-na-vytapeni", read: "5 min" },
  { title: "Tepelné čerpadlo: Kompletní průvodce výběrem a instalací", href: "/blog/tepelne-cerpadlo-pruvodce", read: "11 min" },
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
              <span>Odvzdušnění radiátorů</span>
            </nav>

            {/* HEADER */}
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">❄️ Sezónní údržba</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak odvzdušnit radiátor – krok za krokem</h1>
              <p className="article-lead">Radiátor je nahoře studený a dole teplý? Vzduch v topné soustavě snižuje výkon topení o 15–25 % a zbytečně zvyšuje účty. Odvzdušnění zvládnete sami za 10 minut a bez instalatéra.</p>
              <div className="article-meta-row"><span>Aktualizováno: 20. března 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons
                url="https://domovniguru.cz/blog/jak-odvzdusnit-radiatory"
                title="Jak odvzdušnit radiátor – krok za krokem + úspora tepla 2026"
              />
            </header>

            {/* HERO ILLUSTRATION */}
            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 900 210" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="900" height="210" fill="#fdf6f0"/>
                <defs>
                  <linearGradient id="radGrad" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#e8e0d8"/>
                    <stop offset="100%" stopColor="#d0c8c0"/>
                  </linearGradient>
                  <linearGradient id="hotGrad" x1="0" y1="1" x2="0" y2="0" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#e07040"/>
                    <stop offset="60%" stopColor="#f0a060"/>
                    <stop offset="100%" stopColor="#c0d8e8"/>
                  </linearGradient>
                  <linearGradient id="coldGrad" x1="0" y1="1" x2="0" y2="0" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#e07040"/>
                    <stop offset="40%" stopColor="#f0a060"/>
                    <stop offset="100%" stopColor="#c0d8e8"/>
                  </linearGradient>
                </defs>

                {/* ── RADIÁTOR (ŠPATNÝ — vzduch nahoře) ── */}
                <g transform="translate(60, 25)">
                  {/* Titulek */}
                  <rect x="10" y="0" width="130" height="18" rx="4" fill="#e07a5f" opacity="0.15"/>
                  <text x="75" y="13" textAnchor="middle" fontSize="9" fill="#c05030" fontWeight="700" letterSpacing="0.05em">❌ PŘED ODVZDUŠNĚNÍM</text>

                  {/* Rám radiátoru */}
                  <rect x="0" y="22" width="150" height="155" rx="6" fill="url(#radGrad)" stroke="#c0b8b0" strokeWidth="1.5"/>

                  {/* Článků radiátoru — 5 kusů */}
                  {[8, 36, 64, 92, 120].map((x, i) => (
                    <g key={i}>
                      <rect x={x} y="30" width="22" height="139" rx="3" fill="url(#coldGrad)" stroke="#b8b0a8" strokeWidth="0.8"/>
                      {/* Vzduch nahoře (modrý) */}
                      <rect x={x+1} y="31" width="20" height="55" rx="2" fill="#a8c8e0" opacity="0.5"/>
                      {/* Horká voda dole (červená) */}
                      <rect x={x+1} y="86" width="20" height="82" rx="2" fill="#e07040" opacity="0.35"/>
                    </g>
                  ))}

                  {/* Horní trubka */}
                  <rect x="0" y="22" width="150" height="14" rx="4" fill="#c8c0b8" stroke="#b0a8a0" strokeWidth="1"/>
                  {/* Dolní trubka */}
                  <rect x="0" y="163" width="150" height="14" rx="4" fill="#c8c0b8" stroke="#b0a8a0" strokeWidth="1"/>

                  {/* Vzduch — bubliny */}
                  {[[30,50],[60,42],[95,55],[125,48],[155,52]].map(([x,y],i) => (
                    <circle key={i} cx={x} cy={y} r={4+i%2*2} fill="#a8c8e0" opacity="0.6" stroke="#88a8c0" strokeWidth="0.5"/>
                  ))}

                  {/* Studené nahoře */}
                  <text x="75" y="68" textAnchor="middle" fontSize="8" fill="#4a7a9a" fontWeight="600">🧊 studený vzduch</text>
                  {/* Teplé dole */}
                  <text x="75" y="145" textAnchor="middle" fontSize="8" fill="#c05020" fontWeight="600">🔥 teplá voda</text>

                  {/* Odvzdušňovací ventil */}
                  <rect x="138" y="18" width="14" height="10" rx="2" fill="#808080" stroke="#606060" strokeWidth="1"/>
                  <rect x="143" y="14" width="4" height="6" rx="1" fill="#909090"/>
                </g>

                {/* ── ŠIPKA ── */}
                <g transform="translate(230, 95)">
                  <path d="M0 15 L50 15" stroke="#c8b89a" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M44 9 L52 15 L44 21" stroke="#c8b89a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <text x="25" y="10" textAnchor="middle" fontSize="8" fill="#a09080" fontWeight="600">odvzdušnit</text>
                </g>

                {/* ── POSTUP ODVZDUŠNĚNÍ (střed) ── */}
                <g transform="translate(295, 25)">
                  <text x="90" y="13" textAnchor="middle" fontSize="9" fill="#6a8a6a" fontWeight="700" letterSpacing="0.05em">POSTUP</text>

                  {/* Odvzdušňovací klíč */}
                  <g transform="translate(55, 25)">
                    {/* Tělo klíče */}
                    <rect x="0" y="8" width="60" height="12" rx="3" fill="#707070" stroke="#505050" strokeWidth="1"/>
                    {/* Čtyřhran */}
                    <rect x="52" y="4" width="14" height="20" rx="2" fill="#909090" stroke="#606060" strokeWidth="1"/>
                    <rect x="55" y="8" width="8" height="12" rx="1" fill="#606060"/>
                    {/* Rukojeť */}
                    <rect x="-20" y="10" width="22" height="8" rx="4" fill="#8B6340" stroke="#6b4320" strokeWidth="1"/>
                    {/* Kapka vody/vzduchu */}
                    <path d="M66 14 Q70 10 74 14 Q70 20 66 14Z" fill="#a8c8e0" opacity="0.8"/>
                    <text x="33" y="35" textAnchor="middle" fontSize="8" fill="#606060">odvzdušňovací klíč</text>
                  </g>

                  {/* Kroky */}
                  {[
                    { n: "1", text: "Zapni topení naplno", icon: "🔥" },
                    { n: "2", text: "Připrav hadr a nádobu", icon: "🪣" },
                    { n: "3", text: "Otočí ventil o ¼ doleva", icon: "🔧" },
                    { n: "4", text: "Počkej na vytékání vody", icon: "💧" },
                    { n: "5", text: "Zavři ventil, zkontroluj tlak", icon: "✅" },
                  ].map(({ n, text, icon }, i) => (
                    <g key={i} transform={`translate(0, ${70 + i * 24})`}>
                      <circle cx="12" cy="8" r="10" fill="#5a9e6f" opacity="0.15"/>
                      <text x="12" y="13" textAnchor="middle" fontSize="9" fill="#3a7e4f" fontWeight="700">{n}</text>
                      <text x="28" y="13" fontSize="12">{icon}</text>
                      <text x="46" y="13" fontSize="11" fill="#2a2a28" fontWeight="300">{text}</text>
                    </g>
                  ))}
                </g>

                {/* ── ŠIPKA 2 ── */}
                <g transform="translate(530, 95)">
                  <path d="M0 15 L50 15" stroke="#c8b89a" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M44 9 L52 15 L44 21" stroke="#c8b89a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <text x="25" y="10" textAnchor="middle" fontSize="8" fill="#a09080" fontWeight="600">výsledek</text>
                </g>

                {/* ── RADIÁTOR (DOBRÝ — plný vody) ── */}
                <g transform="translate(595, 25)">
                  <rect x="10" y="0" width="130" height="18" rx="4" fill="#5a9e6f" opacity="0.15"/>
                  <text x="75" y="13" textAnchor="middle" fontSize="9" fill="#3a7e4f" fontWeight="700" letterSpacing="0.05em">✅ PO ODVZDUŠNĚNÍ</text>

                  <rect x="0" y="22" width="150" height="155" rx="6" fill="url(#radGrad)" stroke="#c0b8b0" strokeWidth="1.5"/>

                  {[8, 36, 64, 92, 120].map((x, i) => (
                    <g key={i}>
                      <rect x={x} y="30" width="22" height="139" rx="3" fill="url(#hotGrad)" stroke="#b8b0a8" strokeWidth="0.8"/>
                      {/* Celý článek plný horké vody */}
                      <rect x={x+1} y="31" width="20" height="137" rx="2" fill="#e07040" opacity="0.3"/>
                    </g>
                  ))}

                  <rect x="0" y="22" width="150" height="14" rx="4" fill="#c8c0b8" stroke="#b0a8a0" strokeWidth="1"/>
                  <rect x="0" y="163" width="150" height="14" rx="4" fill="#c8c0b8" stroke="#b0a8a0" strokeWidth="1"/>

                  {/* Tepelné vlnky */}
                  {[30, 65, 100, 135].map((x, i) => (
                    <g key={i}>
                      <path d={`M${x} 80 Q${x+5} 70 ${x+10} 80 Q${x+15} 90 ${x+20} 80`} stroke="#e07040" strokeWidth="1.5" fill="none" opacity="0.5" strokeLinecap="round"/>
                    </g>
                  ))}

                  <text x="75" y="105" textAnchor="middle" fontSize="8" fill="#c05020" fontWeight="600">🔥 rovnoměrné teplo</text>

                  <rect x="138" y="18" width="14" height="10" rx="2" fill="#808080" stroke="#606060" strokeWidth="1"/>
                  <rect x="143" y="14" width="4" height="6" rx="1" fill="#909090"/>
                </g>

                {/* Úspora dole */}
                <rect x="370" y="178" width="160" height="24" rx="6" fill="#5a9e6f" opacity="0.12"/>
                <text x="450" y="194" textAnchor="middle" fontSize="10" fill="#3a7e4f" fontWeight="700">💰 úspora 15–25 % na vytápění</text>
              </svg>
              <div style={{display:"flex",justifyContent:"space-around",padding:"8px 30px 12px",fontSize:"9px",letterSpacing:"0.1em",color:"#a09080",textTransform:"uppercase",background:"#fdf6f0"}}>
                <span>🧊 Vzduch blokuje topení</span>
                <span>🔧 Odvzdušňovací klíč = 10 minut práce</span>
                <span>🔥 Rovnoměrné teplo v celém radiátoru</span>
                <span>💰 Úspora 15–25 %</span>
              </div>
            </div>

            {/* TOC */}
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#proc">Proč radiátor topí špatně – příčiny</a></li>
                <li><a href="#kdy">Kdy odvzdušňovat</a></li>
                <li><a href="#co-potrebujes">Co budeš potřebovat</a></li>
                <li><a href="#postup">Postup odvzdušnění krok za krokem</a></li>
                <li><a href="#tlak">Kontrola tlaku v soustavě</a></li>
                <li><a href="#uspora">Kolik ušetříš</a></li>
                <li><a href="#bez-ventilu">Radiátor bez ventilu</a></li>
                <li><a href="#chyby">Nejčastější chyby</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            {/* SECTION 1 */}
            <section id="proc">
              <h2>Proč radiátor topí špatně – co způsobuje vzduch v soustavě</h2>
              <p>Vzduch se do topné soustavy dostává přirozeně — při plnění soustavy vodou, při opravách nebo postupně přes těsnění. Problém je v tom, že vzduch je lehčí než voda a hromadí se vždy <strong>nahoře v radiátoru</strong>. Vytváří vzduchovou kapsu která blokuje průtok horké vody.</p>
              <p>Výsledek: radiátor je nahoře studený nebo vlažný, dole teplý. Topení pracuje na plný výkon, ale teplo se do místnosti nedostává. Cirkulační čerpadlo může vydávat hluk — charakteristické <strong>bublání nebo kloktání</strong>.</p>
              <ul>
                <li><strong>Nahoře studený, dole teplý:</strong> Klasický příznak vzduchové kapsy. Vzduch blokuje vrchní část článků.</li>
                <li><strong>Celý radiátor studený:</strong> Může jít o vzduch, ale také o uzavřený termostatický ventil nebo poruchu čerpadla.</li>
                <li><strong>Bublání nebo kloktání:</strong> Vzduch se pohybuje v soustavě a vydává zvuky při proudění vody.</li>
                <li><strong>Nerovnoměrné vytápění v domě:</strong> Radiátory blíž kotli topí, vzdálené méně — může jít o vzduch nebo nevyváženost soustavy.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Před odvzdušněním zkontroluj termostatický ventil — může být jednoduše zavřený nebo zaseklý. Otočením hlavice na maximum se přesvědč, že ventil skutečně propouští vodu.</div>
            </section>

            {/* SECTION 2 */}
            <section id="kdy">
              <h2>Kdy odvzdušňovat radiátory</h2>
              <p>Odvzdušnění není nárazová oprava — je to <strong>pravidelná roční údržba</strong> která by měla proběhnout vždy na začátku topné sezóny. Ideální čas je říjen–listopad, před tím než naplno zapnete topení.</p>
              <ul>
                <li><strong>Začátek topné sezóny (říjen–listopad):</strong> Povinné odvzdušnění po letní odstávce. Vzduch se v soustavě nahromadí vždy.</li>
                <li><strong>Po opravě nebo výměně části soustavy:</strong> Kdykoliv do soustavy zasáhneš (výměna radiátoru, oprava těsnění), vzduch se dostane dovnitř.</li>
                <li><strong>Kdykoli radiátor topí nerovnoměrně:</strong> Nemusíš čekat na konec sezóny. Příznaky vzduchové kapsy jsou jasné — jednej hned.</li>
                <li><strong>Po doplnění vody do soustavy:</strong> Přidání vody vždy přináší vzduch. Odvzdušni do 24 hodin po doplnění.</li>
              </ul>
            </section>

            {/* SECTION 3 */}
            <section id="co-potrebujes">
              <h2>Co budeš potřebovat</h2>
              <ul>
                <li><strong>Odvzdušňovací klíč:</strong> Malý čtyřhranný klíč (čtyřhran 5×5 mm) — koupíš ho v každém železářství za 20–50 Kč. Někdy stačí i plochý šroubovák, záleží na typu ventilu.</li>
                <li><strong>Hadr nebo savý papír:</strong> Při uvolnění vzduchu může vytéct trocha vody. Podlož hadr pod ventil.</li>
                <li><strong>Malá nádoba (miska):</strong> Pro zachycení vody která vytéká po vzduchu.</li>
                <li><strong>Manometr (doporučeno):</strong> Pro kontrolu tlaku v soustavě po odvzdušnění. Tlak by měl být 1–2 bar. Manometr bývá na kotli nebo expanzní nádobě.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Odvzdušňovací klíč je specifický pro typ ventilu. Starší radiátory mají čtyřhranný ventil, novější mohou mít šroubovák nebo speciální klíč. Zkontroluj typ před nákupem.</div>
            </section>

            {/* SECTION 4 */}
            <section id="postup">
              <h2>Postup odvzdušnění krok za krokem</h2>
              <p>Celý proces trvá 5–10 minut na jeden radiátor. Postupuj vždy od radiátorů nejblíže kotli směrem k nejvzdálenějším — vzduch se tak vytlačí systematicky z celé soustavy.</p>
              <ul>
                <li>
                  <strong>Krok 1 – Zapni topení naplno:</strong> Topení musí běžet na plný výkon aspoň 20–30 minut před odvzdušněním. Horká voda vytlačí vzduch do nejvyšších míst — do odvzdušňovacích ventilů.
                </li>
                <li>
                  <strong>Krok 2 – Vypni oběhové čerpadlo:</strong> Před samotným odvzdušněním vypni čerpadlo (nebo přepni kotel do pohotovostního režimu). Voda musí stát — pohybující se voda by vzduch nevytlačila správně. Na výkon topení to nemá vliv, voda zůstane horká.
                </li>
                <li>
                  <strong>Krok 3 – Najdi odvzdušňovací ventil:</strong> Ventil je malá šestihranná nebo čtyřhranná hlavice v horním rohu radiátoru (zpravidla vpravo nahoře). Přilož hadr pod ventil a připrav nádobu.
                </li>
                <li>
                  <strong>Krok 4 – Otevři ventil o ¼ otáčky:</strong> Zasuň odvzdušňovací klíč a pomalu otočí <strong>doleva o čtvrt otáčky</strong>. Uslyšíš syčení — to je vzduch který uniká. Drž klíč v ruce, ventil neotvírej více než nutné.
                </li>
                <li>
                  <strong>Krok 5 – Počkej na vytékání vody:</strong> Syčení se změní na šplouchání a pak začne vytékat voda. To je signál že vzduch je venku. <strong>Okamžitě uzavři ventil</strong> — otočí klíčem doprava na doraz. Vyteklá voda může být rezavá nebo žlutavá — to je normální.
                </li>
                <li>
                  <strong>Krok 6 – Zkontroluj těsnost:</strong> Po uzavření ventilu zkontroluj zda nekapá. Pokud ano, dotáhni ventil o trochu více — ale nepřetahuj, mohlo by to poškodit těsnění.
                </li>
                <li>
                  <strong>Krok 7 – Zapni čerpadlo a zkontroluj tlak:</strong> Spusť oběhové čerpadlo a zkontroluj tlak v soustavě na manometru. Správný tlak je <strong>1,5–2 bar za studena</strong>. Pokud tlak klesl pod 1 bar, doplň vodu přes plnicí ventil kotle.
                </li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Odvzdušňuj všechny radiátory v domě — ne jen ten problematický. Vzduch bývá ve více místech a odvzdušnění jen jednoho radiátoru problém nevyřeší úplně.</div>
            </section>

            {/* SECTION 5 */}
            <section id="tlak">
              <h2>Kontrola tlaku v soustavě</h2>
              <p>Po odvzdušnění může tlak v soustavě klesnout — uvolnil ses vzduch a objem soustavy se mírně zmenšil. Správný tlak je klíčový pro správnou funkci topení.</p>
              <ul>
                <li><strong>Normální tlak za studena:</strong> 1,5–2,0 bar (závisí na výšce budovy — vyšší domy potřebují vyšší tlak)</li>
                <li><strong>Normální tlak za tepla:</strong> 2,0–2,5 bar (voda se roztahuje teplem)</li>
                <li><strong>Tlak pod 1 bar:</strong> Doplň vodu přes plnicí kohout u kotle — pomalu, po 0,1 baru kontroluj na manometru</li>
                <li><strong>Tlak nad 3 bar:</strong> Otevři pojistný ventil nebo se obrať na topenáře — přetlak je nebezpečný</li>
              </ul>
              <div className="article-tip"><strong>⚠️ Pozor:</strong> Pokud musíš doplňovat vodu do soustavy opakovaně (každý měsíc nebo víckrát za sezónu), soustava někde netěsní. Neignoruj to — zavolej topenáře.</div>
            </section>

            {/* SECTION 6 */}
            <section id="uspora">
              <h2>Kolik ušetříš odvzdušněním</h2>
              <p>Vzduch v soustavě je přímá ztráta peněz. Radiátor s vzduchovou kapsou musí topné těleso pracovat déle a intenzivněji aby dosáhlo požadované teploty v místnosti — nebo ji vůbec nedosáhne.</p>
              <ul>
                <li><strong>Vzduch v 1 radiátoru:</strong> Snížení výkonu o 15–25 %. Při průměrných nákladech na vytápění 40 000 Kč/rok a 10 radiátorech v domě jde o 600–1 000 Kč ztráty ročně jen z jednoho radiátoru.</li>
                <li><strong>Vzduch ve více radiátorech:</strong> Celková ztráta efektivity topné soustavy může být 10–20 %, což při průměrném domě odpovídá 4 000–8 000 Kč zbytečných nákladů ročně.</li>
                <li><strong>Odvzdušnění stojí:</strong> 30 minut práce + cena klíče (20–50 Kč). Návratnost = okamžitá.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Odvzdušnění kombinuj s nastavením termostatických ventilů a balancováním soustavy. Kompletní seřízení topení může snížit náklady o 20–30 % bez jakékoliv investice do nového vybavení.</div>
            </section>

            {/* SECTION 7 */}
            <section id="chyby">
              <h2>Nejčastější chyby při odvzdušňování</h2>
              <ul>
                <li><strong>Odvzdušňování za chodu čerpadla:</strong> Pohybující se voda nedovolí vzduchu správně uniknout. Vždy vypni čerpadlo před odvzdušněním.</li>
                <li><strong>Příliš velké otevření ventilu:</strong> Stačí čtvrt otáčky. Větší otevření způsobí silný proud vody a špinění okolí.</li>
                <li><strong>Odvzdušnění jen jednoho radiátoru:</strong> Vzduch bývá ve více místech. Projdi všechny radiátory v domě.</li>
                <li><strong>Nekontrolování tlaku po odvzdušnění:</strong> Zapomenutý nízký tlak poškozuje soustavu a kotel. Vždy zkontroluj a případně doplň vodu.</li>
                <li><strong>Ignorování opakovaného poklesu tlaku:</strong> Pokud tlak klesá opakovaně, je to příznak netěsnosti — ne důvod k pravidelnému doplňování.</li>
              </ul>
            </section>
            <section id="bez-ventilu">
  <h2>Jak odvzdušnit radiátor bez odvzdušňovacího ventilu</h2>
  <p>Starší radiátory — zejména litinové nebo paneláková tělesa — někdy nemají klasický odvzdušňovací ventil s čtyřhrannou hlavicí. V takovém případě máš dvě možnosti.</p>
  <ul>
    <li><strong>Automatický odvzdušňovací ventil:</strong> Nejjednodušší řešení — nahraď zátku v horním rohu radiátoru automatickým odvzdušňovacím ventilem (cena 50–150 Kč, montáž svépomocí). Ventil odvzdušňuje průběžně sám.</li>
    <li><strong>Odvzdušnění přes kotel:</strong> Moderní kondenzační kotle mají vlastní odvzdušňovací ventil. Pokud jsou všechny radiátory studené nahoře, může stačit odvzdušnit přímo kotel — postup najdeš v návodu ke kotli.</li>
    <li><strong>Instalatér:</strong> Pokud radiátor nemá žádný přístupový bod, zavolej topenáře. Montáž odvzdušňovacího ventilu trvá 15 minut a stojí 300–600 Kč včetně práce.</li>
  </ul>
  <div className="article-tip"><strong>💡 Tip:</strong> Automatické odvzdušňovací ventily jsou nejlepší investice do topné soustavy za méně než 200 Kč. Instaluj je na všechny radiátory a nikdy víc nebudeš muset ručně odvzdušňovat.</div>
</section>

            {/* SECTION 8 — FAQ */}
            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">
                    Co když po odvzdušnění radiátor stále netopí?
                    <span className="faq-icon">▾</span>
                  </summary>
                  <div className="faq-body">
                    Pokud odvzdušnění nepomohlo, zkontroluj: (1) Termostatický ventil — může být zaseklý nebo zavřený. Zkus otočit hlavici na maximum nebo ji sundat. (2) Tlak v soustavě — příliš nízký tlak zabrání cirkulaci. (3) Vyvažovací ventil — u starších soustav mohou být radiátory nevyvážené. (4) Oběhové čerpadlo — pokud nepracuje správně, voda necirkuluje. Pokud nic nepomáhá, zavolej topenáře.
                  </div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">
                    Jak poznám, že radiátor potřebuje odvzdušnit?
                    <span className="faq-icon">▾</span>
                  </summary>
                  <div className="faq-body">
                    Hlavní příznaky: radiátor je nahoře studený nebo vlažný, dole teplý. Při dotyku ruky na radiátor poznáš jasný teplotní rozdíl — spodní polovina teplá, horní studená. Dalším příznakem je bublání nebo kloktání při zapnutém topení — vzduch se pohybuje soustavou. V některých případech může být celý radiátor studený i přes otevřený ventil.
                  </div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">
                    Musím odvzdušňovat každý rok?
                    <span className="faq-icon">▾</span>
                  </summary>
                  <div className="faq-body">
                    Doporučujeme odvzdušnit na začátku každé topné sezóny — tedy jednou ročně v říjnu nebo listopadu. Vzduch se do soustavy dostává přirozeně i bez zjevné příčiny — přes těsnění, při mikronetěsnostech nebo prostě kyslíkem rozpuštěným ve vodě. Pravidelné roční odvzdušnění je jednoduchá prevence zbytečně vysokých účtů.
                  </div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">
                    Vytéká mi při odvzdušnění rezavá nebo hnědá voda – je to normální?
                    <span className="faq-icon">▾</span>
                  </summary>
                  <div className="faq-body">
                    Ano, rezavá nebo nažloutlá voda je normální — zejména u starších soustav s ocelovými radiátory. Jde o korozní produkty (oxidy železa) které se usazují v soustavě. Pokud je voda velmi tmavá nebo má výrazný zápach, může jít o nadměrnou korozi — zvažte přidání inhibitoru koroze do topné soustavy. Tuto operaci svěřte odborníkovi.
                  </div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">
                    Mohu odvzdušnit radiátor sám, nebo potřebuji topenáře?
                    <span className="faq-icon">▾</span>
                  </summary>
                  <div className="faq-body">
                    Odvzdušnění je jednoduchá operace kterou zvládne každý sám — nepotřebuješ žádnou kvalifikaci ani speciální vybavení. Stačí odvzdušňovací klíč za 20–50 Kč a 10 minut času. Topenáře potřebuješ pouze pokud: tlak v soustavě opakovaně klesá (netěsnost), radiátor netopí ani po odvzdušnění (zaseklý ventil nebo porucha čerpadla), nebo chceš vyvážit celou topnou soustavu pro maximální efektivitu.
                  </div>
                </details>
              </div>
            </section>

            {/* SHARE BOTTOM */}
            <ShareButtons
              url="https://www.domovniguru.cz/blog/jak-odvzdusnit-radiatory"
              title="Jak odvzdušnit radiátor – krok za krokem + úspora tepla 2026"
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
                <li><a href="#proc">Proč radiátor topí špatně</a></li>
                <li><a href="#kdy">Kdy odvzdušňovat</a></li>
                <li><a href="#co-potrebujes">Co budeš potřebovat</a></li>
                <li><a href="#postup">Postup krok za krokem</a></li>
                <li><a href="#tlak">Kontrola tlaku</a></li>
                <li><a href="#uspora">Kolik ušetříš</a></li>
                <li><a href="#bez-ventilu">Radiátor bez ventilu</a></li>
                <li><a href="#chyby">Nejčastější chyby</a></li>
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
