import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak zkontrolovat kotel před topnou sezónou – checklist 2026",
  description: "Co si sám zkontroluješ a co musí servisní technik. Kompletní checklist přípravy kotle před zimou – tlak, odvzdušnění, filtr, spaliny. Ušetři na servisní návštěvě.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/zkontrolovat-kotel-pred-zimou" },
  openGraph: { title: "Jak zkontrolovat kotel před topnou sezónou 2026", description: "Co si sám zkontroluješ a co musí servisní technik. Checklist přípravy kotle před zimou.", url: "https://www.domovniguru.cz/blog/zkontrolovat-kotel-pred-zimou", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-13T08:00:00Z", modifiedTime: "2026-04-13T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak zkontrolovat kotel před topnou sezónou 2026", description: "Co si sám zkontroluješ a co musí servisní technik. Checklist přípravy kotle před zimou." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.domovniguru.cz/blog/zkontrolovat-kotel-pred-zimou#article",
      "headline": "Jak zkontrolovat kotel před topnou sezónou – checklist 2026",
      "datePublished": "2026-04-13T08:00:00Z",
      "dateModified": "2026-04-13T08:00:00Z",
      "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "inLanguage": "cs",
      "keywords": ["jak zkontrolovat kotel před zimou", "servis kotle", "tlak v kotli", "příprava kotle na zimu", "kondenzační kotel servis", "kotel nefunguje", "roční servis kotle"]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.domovniguru.cz/blog/zkontrolovat-kotel-pred-zimou#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Jak často se musí dělat servis kotle?", "acceptedAnswer": { "@type": "Answer", "text": "Zákon nevyžaduje povinný roční servis plynového kotle pro majitele rodinného domu. Výrobci ale podmínkou záruky obvykle stanovují roční servis autorizovaným technikem. Prakticky doporučujeme servis každé 2 roky pro kondenzační kotle a každý rok pro starší atmosférické kotle." } },
        { "@type": "Question", "name": "Jaký má být tlak v kotli?", "acceptedAnswer": { "@type": "Answer", "text": "Správný tlak v topné soustavě za studena je 1,5–2,0 bar. Za tepla (při plném provozu) je normální tlak 2,0–2,5 bar. Pod 1 bar je nutné doplnit vodu. Nad 3 bar je nebezpečný přetlak — otevři pojistný ventil nebo zavolej technika." } },
        { "@type": "Question", "name": "Co dělat když kotel nejde zapnout po létě?", "acceptedAnswer": { "@type": "Answer", "text": "Nejprve zkontroluj tlak v soustavě — po létě mohl klesnout pod minimum. Doplň vodu na 1,5 bar. Pak zkontroluj zda je otevřen přívod plynu a zda funguje termostat. Pokud kotel stále nejde spustit, může být zaseknutý zapalovač nebo chyba v elektronice — zavolej servisního technika." } },
      ]
    }
  ]
};

const RELATED = [
  { title: "Jak odvzdušnit radiátor – krok za krokem", href: "/blog/jak-odvzdusnit-radiatory", read: "5 min" },
  { title: "Jak ušetřit na vytápění bez výměny kotle", href: "/blog/usetrit-na-vytapeni", read: "7 min" },
  { title: "Příprava domu na zimu – kompletní checklist", href: "/blog/priprava-domu-na-zimu", read: "10 min" },
  { title: "Tepelné čerpadlo – kompletní průvodce 2026", href: "/blog/tepelne-cerpadlo-pruvodce", read: "11 min" },
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
              <span>Kontrola kotle před zimou</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">❄️ Sezónní údržba</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak zkontrolovat kotel před topnou sezónou</h1>
              <p className="article-lead">Kotel který celé léto stál potřebuje před první zimní zátěží projít. Část kontrol zvládneš sám za 15 minut — a předejdeš poruchám v mrazech kdy servisní technici mají plné ruce práce.</p>
              <div className="article-meta-row"><span>Aktualizováno: 13. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/zkontrolovat-kotel-pred-zimou" title="Jak zkontrolovat kotel před topnou sezónou – checklist 2026" />
            </header>

            {/* HERO SVG */}
            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 210" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="210" fill="#f4f0ec"/>
                <defs>
                  <linearGradient id="kotleBg" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#e8e0d8"/><stop offset="100%" stopColor="#d8d0c8"/>
                  </linearGradient>
                </defs>

                {/* ── KOTEL (střed) ── */}
                <g transform="translate(270, 15)">
                  {/* Tělo kotle */}
                  <rect x="0" y="20" width="120" height="160" rx="8" fill="url(#kotleBg)" stroke="#c0b8b0" strokeWidth="1.5"/>
                  {/* Displej */}
                  <rect x="15" y="35" width="90" height="40" rx="4" fill="#2a3a4a" stroke="#1a2a3a" strokeWidth="1"/>
                  <text x="60" y="53" textAnchor="middle" fontSize="14" fill="#4af0c0" fontWeight="700" fontFamily="monospace">72°C</text>
                  <text x="60" y="67" textAnchor="middle" fontSize="8" fill="#6ab0a0">1.8 bar  OK</text>
                  {/* Tlačítka */}
                  {[20, 45, 70, 95].map((x, i) => (
                    <rect key={i} x={x} y="85" width="18" height="10" rx="3" fill="#a0a098" stroke="#808078" strokeWidth="0.5"/>
                  ))}
                  {/* Manometr */}
                  <circle cx="30" cy="120" r="18" fill="#f5f0e8" stroke="#c0b8b0" strokeWidth="1.2"/>
                  <circle cx="30" cy="120" r="14" fill="#fff" stroke="#e0d8d0" strokeWidth="0.8"/>
                  {/* Stupnice manometru */}
                  {[0,1,2,3].map(v => {
                    const angle = (-120 + v * 80) * Math.PI / 180;
                    return (
                      <g key={v}>
                        <line x1={30 + 10*Math.cos(angle)} y1={120 + 10*Math.sin(angle)} x2={30 + 13*Math.cos(angle)} y2={120 + 13*Math.sin(angle)} stroke="#808078" strokeWidth="0.8"/>
                        <text x={30 + 8*Math.cos(angle)} y={120 + 8*Math.sin(angle)+2} textAnchor="middle" fontSize="4" fill="#606058">{v}</text>
                      </g>
                    );
                  })}
                  {/* Ukazatel — 1.8 bar (OK) */}
                  <line x1="30" y1="120" x2={30 + 11*Math.cos((-120+1.8*80)*Math.PI/180)} y2={120 + 11*Math.sin((-120+1.8*80)*Math.PI/180)} stroke="#5a9e6f" strokeWidth="1.5" strokeLinecap="round"/>
                  <text x="30" y="140" textAnchor="middle" fontSize="6" fill="#5a9e6f" fontWeight="700">bar</text>

                  {/* Pojistný ventil */}
                  <rect x="95" y="108" width="20" height="26" rx="3" fill="#c0b8b0" stroke="#a0a098" strokeWidth="0.8"/>
                  <text x="105" y="124" textAnchor="middle" fontSize="5.5" fill="#606058" fontWeight="600">PV</text>

                  {/* Plnicí ventil */}
                  <rect x="15" y="150" width="20" height="16" rx="3" fill="#9098b0" stroke="#7080a0" strokeWidth="0.8"/>
                  <text x="25" y="161" textAnchor="middle" fontSize="5" fill="#fff" fontWeight="600">plnění</text>

                  {/* Výstup/vstup trubky */}
                  <rect x="45" y="175" width="16" height="8" rx="2" fill="#808090" stroke="#606070" strokeWidth="0.8"/>
                  <rect x="65" y="175" width="16" height="8" rx="2" fill="#908070" stroke="#707060" strokeWidth="0.8"/>

                  {/* Štítky */}
                  <text x="60" y="13" textAnchor="middle" fontSize="9" fill="#6a6058" fontWeight="700" letterSpacing="0.06em">KOTEL</text>
                </g>

                {/* ── SAM ZKONTROLUJU (vlevo) ── */}
                <g transform="translate(20, 15)">
                  <rect x="0" y="0" width="220" height="175" rx="10" fill="#f0faf5" stroke="#b8d8c8" strokeWidth="1.2"/>
                  <text x="110" y="20" textAnchor="middle" fontSize="9" fill="#3a7e4f" fontWeight="700" letterSpacing="0.06em">✅ SAM ZKONTROLUJU</text>
                  {[
                    { text: "Tlak v soustavě (manometr)", sub: "1,5–2,0 bar" },
                    { text: "Doplnění vody (plnicí kohout)", sub: "pokud tlak pod 1 bar" },
                    { text: "Odvzdušnění radiátorů", sub: "studené nahoře = vzduch" },
                    { text: "Vizuální kontrola kotle", sub: "rez, koroze, netěsnosti" },
                    { text: "Čistota okolí kotle", sub: "min. 50 cm volného místa" },
                    { text: "Termostat — test funkce", sub: "nastav na 5°C výše" },
                  ].map(({text, sub}, i) => (
                    <g key={i} transform={`translate(12, ${30 + i * 23})`}>
                      <circle cx="8" cy="8" r="7" fill="#5a9e6f" opacity="0.15"/>
                      <text x="8" y="12" textAnchor="middle" fontSize="8" fill="#3a7e4f" fontWeight="700">✓</text>
                      <text x="22" y="10" fontSize="9" fill="#2a3a2a" fontWeight="600">{text}</text>
                      <text x="22" y="20" fontSize="7.5" fill="#6a8a7a">{sub}</text>
                    </g>
                  ))}
                </g>

                {/* ── TECHNIK (vpravo) ── */}
                <g transform="translate(520, 15)">
                  <rect x="0" y="0" width="220" height="175" rx="10" fill="#fff8f0" stroke="#e0c8b0" strokeWidth="1.2"/>
                  <text x="110" y="20" textAnchor="middle" fontSize="9" fill="#c05030" fontWeight="700" letterSpacing="0.06em">🔧 TECHNIK (SERVIS)</text>
                  {[
                    { text: "Čištění výměníku tepla", sub: "usazeniny snižují výkon" },
                    { text: "Kontrola hořáku a spalin", sub: "CO analýza" },
                    { text: "Kontrola elektrického jištění", sub: "bezpečnost" },
                    { text: "Čištění kondenzátního sifonu", sub: "u kondenzačních kotlů" },
                    { text: "Kontrola expanzní nádoby", sub: "tlak a membrána" },
                    { text: "Revize plynu a těsnosti", sub: "mýdlová voda" },
                  ].map(({text, sub}, i) => (
                    <g key={i} transform={`translate(12, ${30 + i * 23})`}>
                      <circle cx="8" cy="8" r="7" fill="#e07a5f" opacity="0.15"/>
                      <text x="8" y="12" textAnchor="middle" fontSize="8" fill="#c05030" fontWeight="700">!</text>
                      <text x="22" y="10" fontSize="9" fill="#2a3a2a" fontWeight="600">{text}</text>
                      <text x="22" y="20" fontSize="7.5" fill="#8a6a58">{sub}</text>
                    </g>
                  ))}
                </g>

                {/* dolní lišta */}
                <rect y="190" width="760" height="20" fill="#ece8e0" opacity="0.6"/>
                <text x="190" y="203" textAnchor="middle" fontSize="8" fill="#3a7e4f" fontWeight="600" letterSpacing="0.04em">✅ 6 VĚCÍ CO ZVLÁDNEŠ SÁM — ZDARMA</text>
                <text x="490" y="203" textAnchor="middle" fontSize="8" fill="#c05030" fontWeight="600" letterSpacing="0.04em">🔧 6 VĚCÍ PRO TECHNIKA — 1× ZA 2 ROKY</text>
                <text x="680" y="203" textAnchor="middle" fontSize="8" fill="#6a6058" fontWeight="600" letterSpacing="0.04em">💡 ŘÍJEN = IDEÁLNÍ ČAS</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#proc">Proč kontrolovat kotel před zimou</a></li>
                <li><a href="#sam">Co zkontroluješ sám – za 15 minut</a></li>
                <li><a href="#tlak">Tlak v soustavě – jak doplnit vodu</a></li>
                <li><a href="#technik">Co musí udělat servisní technik</a></li>
                <li><a href="#kdy">Kdy objednat servis</a></li>
                <li><a href="#typy">Specifika podle typu kotle</a></li>
                <li><a href="#chyby">Nejčastější chyby</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="proc">
              <h2>Proč kontrolovat kotel před zimou</h2>
              <p>Kotel který stál celé léto bez zatížení může mít poklesnutý tlak, vzduch v soustavě nebo usazeniny v hořáku. Když ho v říjnu poprvé naplno spustíš, tyto problémy se projeví — a servisní technici mají v listopadu plné ruce práce s havarijními výjezdy.</p>
              <p>Preventivní kontrola v září nebo říjnu trvá 15–30 minut a může předejít:</p>
              <ul>
                <li><strong>Poruše v mrazech</strong> — nejhorší možný čas kdy je servis nejdražší a nejpomaleji dostupný</li>
                <li><strong>Vyšší spotřebě plynu</strong> — znečištěný výměník nebo vzduch v soustavě zvyšuje spotřebu o 10–20 %</li>
                <li><strong>Nebezpečí CO</strong> — špatně seřízený hořák nebo ucpaný odvod spalin může produkovat oxid uhelnatý</li>
                <li><strong>Propadnutí záruky</strong> — většina výrobců podmínkou záruky stanovuje roční nebo dvouletý servis</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Ideální čas na kontrolu kotle je září — technici ještě nejsou zavalení prací, servis je dostupnější a máš čas případnou závadu opravit před příchodem mrazů.</div>
            </section>

            <section id="sam">
              <h2>Co zkontroluješ sám – za 15 minut</h2>
              <p>Těchto 6 kontrol nevyžaduje odbornou kvalifikaci ani speciální nástroje. Zvládneš je sám a ušetříš čas technikovi (a sobě peníze za servisní hodinu).</p>

              <h3>1. Tlak v topné soustavě</h3>
              <p>Manometr je buď přímo na kotli nebo na expanzní nádobě. Správný tlak za studena (kotel vypnutý) je <strong>1,5–2,0 bar</strong>. Pokud je pod 1 bar, soustava potřebuje doplnit vodu — viz sekce níže.</p>

              <h3>2. Vizuální kontrola kotle a okolí</h3>
              <p>Zkontroluj zda na kotli nebo trubkách nejsou stopy rzi, kapky vody nebo bílé usazeniny (solné výkvěty = dřívější netěsnost). Zkontroluj zda je kolem kotle min. 50 cm volného místa — přístup pro technika a ventilaci.</p>

              <h3>3. Test termostatu</h3>
              <p>Nastav termostat o 5 °C výše než je aktuální teplota v místnosti. Kotel by se měl do 2–3 minut spustit. Pokud ne, problém může být v termostatu, kabeláži nebo samotném kotli.</p>

              <h3>4. Kontrola odvzdušňovacích ventilů</h3>
              <p>Automatické odvzdušňovací ventily (malé kovové výstupky na nejvyšších místech soustavy) by měly být volné a neucpané. Pokud z nich kape voda, těsnění je opotřebované.</p>

              <h3>5. Kontrola odtahu spalin</h3>
              <p>Zkontroluj zda komín nebo koaxiální roura (dvě trubky u kondenzačního kotle) nejsou ucpané ptačím hnízdem, listím nebo jiným materiálem. Ucpaný odtah je bezpečnostní riziko.</p>

              <h3>6. Odvzdušnění radiátorů</h3>
              <p>Pokud jsou radiátory nahoře studené při zapnutém topení, je v soustavě vzduch. Odvzdušni před sezónou — je to rychlé a ušetří to energii. Viz <Link href="/blog/jak-odvzdusnit-radiatory" style={{color:"#5a9e6f",fontWeight:600}}>Jak odvzdušnit radiátor →</Link></p>
            </section>

            <section id="tlak">
              <h2>Tlak v soustavě – jak doplnit vodu</h2>
              <p>Po létě bez provozu tlak v soustavě přirozeně klesá. Doplnění vody je jednoduchá operace kterou zvládneš sám — ale musíš postupovat pomalu a sledovat manometr.</p>
              <ul>
                <li><strong>Krok 1:</strong> Ujisti se že kotel je studený (vypnutý aspoň 30 minut).</li>
                <li><strong>Krok 2:</strong> Najdi plnicí kohout nebo plnicí smyčku — zpravidla šedá nebo modrá hadice pod kotlem s ventilem.</li>
                <li><strong>Krok 3:</strong> Pomalu otevři ventil a sleduj manometr. Přidávej vodu po 0,1 bar.</li>
                <li><strong>Krok 4:</strong> Zastaví při 1,5 bar (za studena). Zavři ventil.</li>
                <li><strong>Krok 5:</strong> Spusť kotel a za tepla zkontroluj tlak znovu — za tepla by měl být 2,0–2,5 bar.</li>
              </ul>
              <div className="article-tip"><strong>⚠️ Pozor:</strong> Pokud musíš doplňovat vodu opakovaně (každý měsíc nebo víckrát za sezónu), soustava někde netěsní. Neignoruj to — zavolej technika. Opakované doplňování přináší minerály do soustavy a způsobuje korozi.</div>
            </section>

            <section id="technik">
              <h2>Co musí udělat servisní technik</h2>
              <p>Část kontrol vyžaduje odbornou kvalifikaci, speciální nástroje nebo přístup k plynovým rozvodům. Toto nechej na autorizovaném technikovi.</p>
              <ul>
                <li><strong>Čištění výměníku tepla:</strong> Usazeniny (vodní kámen, saze) snižují přestup tepla a zvyšují spotřebu. Čištění chemicky nebo mechanicky podle typu kotle.</li>
                <li><strong>Kontrola a seřízení hořáku:</strong> Analýza spalin — poměr vzduch/plyn, teplota spalin, obsah CO. Špatně seřízený hořák je bezpečnostní riziko a plýtvá palivem.</li>
                <li><strong>Kontrola expanzní nádoby:</strong> Ztráta tlaku v expanzní nádobě způsobuje výkyvy tlaku v soustavě. Technik zkontroluje tlak dusíku a v případě potřeby přepustí.</li>
                <li><strong>Čištění kondenzátního sifonu:</strong> U kondenzačních kotlů se sifon ucpává usazeninami — ucpání způsobí závadu a výstrahu na displeji.</li>
                <li><strong>Kontrola těsnosti plynových rozvodů:</strong> Technik zkontroluje mýdlovou vodou nebo detektorem úniku plynu všechny spoje.</li>
                <li><strong>Aktualizace software:</strong> Moderní kotle mají firmware — technik může nahrát aktualizaci která zlepšuje funkci nebo opravuje chyby.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Při servisní návštěvě se technika zeptej na stav kotle a předpokládanou životnost. Kotel starší 15 let se blíží konci životnosti — má smysl začít plánovat výměnu než dojde k havárii v zimě.</div>
            </section>

            <section id="kdy">
              <h2>Kdy objednat servis a co stojí</h2>
              <p>Servisní technici jsou nejvíce vytížení v říjnu a listopadu kdy všichni řeší problémy s topením. Objednávej v září — dostaneš lepší termín a techniky kteří se nespěchají.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ servisu</th><th>Cena (orientační)</th><th>Frekvence</th><th>Poznámka</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Základní servis</strong></td><td>1 500–3 000 Kč</td><td>Každé 2 roky</td><td>Čištění, kontrola spalin, těsnosti</td></tr>
                    <tr><td><strong>Komplexní servis</strong></td><td>3 000–6 000 Kč</td><td>Každé 2–3 roky</td><td>+ výměna filtrů, expanzní nádoba</td></tr>
                    <tr><td><strong>Havarijní výjezd</strong></td><td>2 000–5 000 Kč + práce</td><td>Dle potřeby</td><td>Víkendy a svátky 2–3× dražší</td></tr>
                    <tr><td><strong>Servisní smlouva</strong></td><td>1 000–2 500 Kč/rok</td><td>Roční</td><td>Zahrnuje preventivní servis + výjezd zdarma</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Servisní smlouva se vyplatí zejména pro starší kotle (nad 10 let) nebo pro domácnosti kde výpadek topení v zimě není přijatelný (malé děti, senioři).</p>
            </section>

            <section id="typy">
              <h2>Specifika podle typu kotle</h2>
              <h3>Kondenzační kotel (nejčastější v novostavbách)</h3>
              <p>Nejmodernější a nejúčinnější typ. Navíc ke standardní kontrole: čištění kondenzátního sifonu, kontrola neutralizátoru kondenzátu a kontrola koaxiálního odvodu spalin. Kondenzát (kyselá voda) musí správně odtékat.</p>
              <h3>Atmosférický kotel (starší instalace)</h3>
              <p>Starší typ s nižší účinností. Klíčová je kontrola komína a průtahu — atmosférický kotel potřebuje přirozený průtah komínem. Zanedbání komína je u tohoto typu nejčastější příčina CO otravy.</p>
              <h3>Elektrický kotel</h3>
              <p>Jednodušší servis — žádné spaliny, žádný plyn. Kontrola: topná tělesa, bezpečnostní termostat, elektroinstalace. Servis stačí každé 3–5 let.</p>
              <h3>Kotel na tuhá paliva (dřevo, pelety)</h3>
              <p>Nejvíce náročný na údržbu. Čištění spalinových cest před sezónou je povinné — jinak hrozí požár sazí v komíně. Povinná revize komína kominíkem každý rok.</p>
            </section>

            <section id="chyby">
              <h2>Nejčastější chyby před topnou sezónou</h2>
              <ul>
                <li><strong>Čekání na poruchu:</strong> Preventivní servis je vždy levnější než havarijní výjezd. Kotel který 10 let nedostal servis je časovaná bomba.</li>
                <li><strong>Opakované doplňování vody bez hledání příčiny:</strong> Pokud tlak klesá každý měsíc, soustava netěsní. Doplňování je jen oddalování problému.</li>
                <li><strong>Ignorování chybových kódů:</strong> Moderní kotle zobrazují chybové kódy na displeji. Nenechávej je bez povšimnutí — najdi kód v návodu a reaguj.</li>
                <li><strong>Sušení prádla nebo skladování věcí u kotle:</strong> Kotel potřebuje přístup vzduchu a volný prostor pro technika. Věci u kotle jsou fire hazard.</li>
                <li><strong>Neznalost umístění uzávěru plynu:</strong> Každý v domácnosti by měl vědět kde je hlavní uzávěr plynu a jak ho zavřít v případě úniku.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Jak často se musí dělat servis kotle?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Zákon nevyžaduje povinný roční servis plynového kotle pro majitele rodinného domu. Výrobci ale podmínkou záruky obvykle stanovují roční servis autorizovaným technikem. Prakticky doporučujeme servis každé 2 roky pro kondenzační kotle a každý rok pro starší atmosférické kotle.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jaký má být tlak v kotli?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Správný tlak v topné soustavě za studena je 1,5–2,0 bar. Za tepla (při plném provozu) je normální tlak 2,0–2,5 bar. Pod 1 bar je nutné doplnit vodu. Nad 3 bar je nebezpečný přetlak — otevři pojistný ventil nebo zavolej technika.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Co dělat když kotel nejde zapnout po létě?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Nejprve zkontroluj tlak v soustavě — po létě mohl klesnout pod minimum. Doplň vodu na 1,5 bar. Pak zkontroluj zda je otevřen přívod plynu a zda funguje termostat. Pokud kotel stále nejde spustit, může být zaseknutý zapalovač nebo chyba v elektronice — zavolej servisního technika.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Je nebezpečné spustit kotel bez předchozí kontroly?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Spuštění kotle bez kontroly je ve většině případů bezpečné — kotle mají bezpečnostní pojistky. Riziko je ale v tom že závada (ucpaný odtah spalin, poškozené těsnění plynu) nemusí okamžitě spustit alarm. Preventivní kontrola trvá 15 minut a výrazně snižuje riziko CO otravy nebo poruchy v nevhodný čas.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Kdy má smysl vyměnit kotel místo opravovat?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Výměna kotle má smysl pokud: kotel je starší 15–20 let, roční náklady na opravy překračují 5 000–8 000 Kč, nebo pokud přecházíš na tepelné čerpadlo. Moderní kondenzační kotel má účinnost 95–98 % vs. 70–80 % u starých atmosférických kotlů — úspora na plynu může být 20–30 %.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/zkontrolovat-kotel-pred-zimou" title="Jak zkontrolovat kotel před topnou sezónou – checklist 2026" />

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
                <li><a href="#proc">Proč kontrolovat kotel</a></li>
                <li><a href="#sam">Co zvládneš sám</a></li>
                <li><a href="#tlak">Tlak – doplnění vody</a></li>
                <li><a href="#technik">Co musí technik</a></li>
                <li><a href="#kdy">Kdy objednat servis</a></li>
                <li><a href="#typy">Typy kotlů</a></li>
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
