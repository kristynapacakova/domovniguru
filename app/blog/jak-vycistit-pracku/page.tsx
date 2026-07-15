import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak vyčistit pračku za hodinu – zápach, plíseň i vodní kámen 2026",
  description: "Pračka, která páchne nebo zanechává skvrny, potřebuje hloubkové čištění. Jak vyčistit buben, zásobník a filtr doma za hodinu bez drahých přípravků.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-vycistit-pracku" },
  openGraph: { title: "Jak vyčistit pračku – zbavte se zápachu a vodního kamene", description: "Pračka, která páchne nebo zanechává skvrny, potřebuje hloubkové čištění. Jak vyčistit buben, zásobník a filtr doma za hodinu bez drahých přípravků.", url: "https://www.domovniguru.cz/blog/jak-vycistit-pracku", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-04T08:00:00Z", modifiedTime: "2026-06-04T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20vy%C4%8Distit%20pra%C4%8Dku%20%E2%80%93%20zbavte%20se%20z%C3%A1pachu%20a%20vodn%C3%ADho%20kamene&cat=blog", width: 1200, height: 630, alt: "Jak vyčistit pračku – zbavte se zápachu a vodního kamene" }] },
  twitter: { card: "summary_large_image", title: "Jak vyčistit pračku 2026", description: "Pračka páchne nebo zanechává skvrny? Postup hloubkového čištění bubnu, zásobníku a filtru za hodinu." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/jak-vycistit-pracku#article",
    "headline": "Jak vyčistit pračku – zbavte se zápachu a vodního kamene",
    "datePublished": "2026-06-04T08:00:00Z",
    "dateModified": "2026-06-04T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak vyčistit pračku", "čištění pračky", "pračka páchne", "vodní kámen pračka", "jak vyčistit buben pračky", "čistění filtru pračky"]
  }]
};

const RELATED = [
  { title: "Jak se zbavit vlhkosti v bytě", href: "/blog/zbavit-se-vlhkosti-v-byte", read: "7 min" },
  { title: "Jak se zbavit plísně na zdi", href: "/blog/jak-odstranit-plisen-na-zdi", read: "12 min" },
  { title: "Jak správně větrat byt", href: "/blog/spravne-vetrat-byt", read: "6 min" },
  { title: "Jak vyčistit filtr klimatizace", href: "/blog/cistit-filtr-klimatizace", read: "5 min" },
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
              <span>Čištění pračky</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">🧺 Sezónní údržba</Link>
                <span className="article-read-time">⏱ 7 min čtení</span>
              </div>
              <h1 className="article-h1">Jak vyčistit pračku – zbavte se zápachu a vodního kamene</h1>
              <p className="article-lead">Pračka, která páchne nebo zanechává skvrny na prádle, potřebuje hloubkové čištění. Buben, zásobník, filtr i gumová manžeta — zvládnete to doma za hodinu a bez drahých přípravků.</p>
              <div className="article-meta-row"><span>Aktualizováno: 4. června 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/jak-vycistit-pracku" title="Jak vyčistit pračku – zbavte se zápachu a vodního kamene" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 185" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="185" fill="#f0f4f8"/>

                <text x="380" y="22" textAnchor="middle" fontSize="10" fill="#4a6080" fontWeight="700" letterSpacing="0.04em">ČÁSTI PRAČKY, KTERÉ POTŘEBUJÍ PRAVIDELNÉ ČIŠTĚNÍ</text>

                {[
                  { x: 20, icon: "🥁", label: "Buben", desc: "Vodní kámen, biofilm\na zbytky pracího prášku", freq: "1× měsíčně", color: "#4a90d9" },
                  { x: 205, icon: "🧴", label: "Zásobník", desc: "Zbytky saponátu\na usazeniny změkčovače", freq: "1× měsíčně", color: "#9b6fd4" },
                  { x: 390, icon: "🔩", label: "Filtr čerpadla", desc: "Vlákna, mince, chloupky\na drobné předměty", freq: "1× za 3 měsíce", color: "#e07040" },
                  { x: 575, icon: "⭕", label: "Manžeta dvířek", desc: "Plíseň a vlhkost\nv záhybech gumy", freq: "Po každém praní", color: "#5a9e6f" },
                ].map(({ x, icon, label, desc, freq, color }) => (
                  <g key={x} transform={`translate(${x}, 32)`}>
                    <rect x="0" y="0" width="168" height="138" rx="8" fill="#fff" stroke={color} strokeWidth="1.2"/>
                    <text x="84" y="32" textAnchor="middle" fontSize="22">{icon}</text>
                    <text x="84" y="52" textAnchor="middle" fontSize="9.5" fill={color} fontWeight="700">{label}</text>
                    <line x1="10" y1="58" x2="158" y2="58" stroke={color} strokeWidth="0.5" opacity="0.4"/>
                    {desc.split('\n').map((line, i) => (
                      <text key={i} x="84" y={72 + i * 13} textAnchor="middle" fontSize="8" fill="#4a4a40">{line}</text>
                    ))}
                    <rect x="8" y="108" width="152" height="24" rx="4" fill={color} opacity="0.1"/>
                    <text x="84" y="118" textAnchor="middle" fontSize="7.5" fill={color} fontWeight="600">Čistit: {freq}</text>
                  </g>
                ))}

                <rect y="168" width="760" height="17" fill="#e0eaf4" opacity="0.5"/>
                <text x="380" y="180" textAnchor="middle" fontSize="8" fill="#3a6a8a" fontWeight="600" letterSpacing="0.06em">🧺 PRAVIDELNÁ ÚDRŽBA PRODLOUŽÍ ŽIVOTNOST PRAČKY O ROKY · KYSELINA CITRONOVÁ MÍSTO DRAHÝCH PŘÍPRAVKŮ</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#proc-smrdi">Proč pračka páchne</a></li>
                <li><a href="#buben">Čištění bubnu</a></li>
                <li><a href="#zasobnik">Čištění zásobníku</a></li>
                <li><a href="#filtr">Čištění filtru čerpadla</a></li>
                <li><a href="#prevence">Jak předejít zápachu</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="proc-smrdi">
              <h2>Proč pračka páchne</h2>
              <p>Nepříjemný zápach z pračky má vždy konkrétní příčinu — nebo rovnou několik najednou. Pochopit, co zápach způsobuje, je první krok ke skutečně účinnému čištění.</p>
              <ul>
                <li><strong>Biofilm v bubnu:</strong> Při praní na nízkých teplotách (30–40 °C) se v bubnu a hadicích postupně usazuje biofilm — vrstva bakterií a plísní, která se při nízkém teplu nedokáže rozložit. Právě biofilm je nejčastějším zdrojem typického „zatuchlého" zápachu z pračky i z čerstvě vyprané prádlo.</li>
                <li><strong>Vodní kámen:</strong> Tvrdá voda zanechává v bubnu, těsnění a topném tělese vápenné usazeniny. Vodní kámen nejen snižuje účinnost praní, ale také zachytává nečistoty a mikroorganismy, které pak zapáchají.</li>
                <li><strong>Plíseň v gumové manžetě:</strong> Gumová manžeta kolem dvířek bubnu má záhyby, ve kterých se zadržuje vlhkost a zbytky nečistot. Bez pravidelného otírání se tam rychle vytvoří černá plíseň — dobře viditelná a silně páchnoucí.</li>
                <li><strong>Zavřená dvířka po praní:</strong> Pokud dvířka zavřete ihned po vyprání, vlhkost uvnitř bubnu nemá kudy odejít. Vlhké prostředí je ideální pro množení bakterií a plísní. Stačí zvyk nechat dvířka pootevřená alespoň hodinu po praní.</li>
                <li><strong>Přeplnění zásobníku pracím práškem:</strong> Více prášku neznamená čistější prádlo. Přebytečný prášek se nevypere, usazuje se ve zásobníku, v hadicích i v bubnu a stává se živnou půdou pro plísně.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud vám prádlo zapáchá hned po vyprání, problém je téměř jistě v biofilmu nebo v plísni v manžetě. Jednorázové čištění při 90 °C s kyselinou citronovou to ve většině případů vyřeší během jediného dne.</div>
            </section>

            <section id="buben">
              <h2>Čištění bubnu</h2>
              <p>Buben je srdcem pračky a také místem, kde se usazuje nejvíce nečistot. Dobrou zprávou je, že jeho důkladné vyčištění nevyžaduje žádné speciální přípravky — stačí kyselina citronová nebo ocet, které najdete v každém supermarketu.</p>
              <ul>
                <li><strong>Program čištění bubnu:</strong> Mnoho moderních praček má speciální program „čištění bubnu" nebo „drum clean". Tento program spustí horký cyklus s prázdnou pračkou a mechanicky odstraní usazeniny. Pokud vaše pračka tento program nemá, použijte nejdelší a nejhorší program (80–90 °C) s prázdným bubnem.</li>
                <li><strong>Kyselina citronová:</strong> Nasypte 2–3 lžíce kyseliny citronové (cena v drogerii cca 25 Kč za 100 g) přímo do bubnu — ne do zásobníku. Spusťte program na 60–90 °C. Kyselina citronová účinně rozpustí vodní kámen a eliminuje bakterie způsobující zápach. Je šetrná k těsnění i k životnímu prostředí.</li>
                <li><strong>Ocet jako alternativa:</strong> Pokud kyselinu citronovou nemáte, použijte 500 ml bílého octa nalejtého přímo do bubnu. Ocet funguje podobně jako kyselina citronová, ale intenzivněji páchne při praní — vyvětrejte místnost. Po vyprání zápach octa zmizí.</li>
                <li><strong>Horký program 1× měsíčně:</strong> Ani kyselina citronová, ani ocet nejsou potřeba každý měsíc. Stačí spustit prázdnou pračku na 60–90 °C bez přípravků. Samotné teplo zahubí většinu mikroorganismů a zabrání hromadění biofilmu.</li>
                <li><strong>Otření bubnu po čištění:</strong> Po skončení programu otřete buben zevnitř hadříkem navlhčeným octem nebo čisticím prostředkem. Zvláštní pozornost věnujte okrajům dveří a záhybům kolem manžety.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Nikdy nesypte kyselinu citronovou a prací prášek do zásobníku zároveň — chemicky se neutralizují a ztratí účinnost. Kyselinu citronovou vždy nasypte přímo do prázdného bubnu nebo použijte zvlášť.</div>
            </section>

            <section id="zasobnik">
              <h2>Čištění zásobníku na prací prostředek</h2>
              <p>Zásobník na prací prášek je místem, které se čistí nejméně, přitom bývá jedním z nejšpinavějších míst v pračce. Zbytky prášku a změkčovače tkanin tam postupně tvrdnou, plesnivějí a mohou ucpávat přívod vody do bubnu.</p>
              <ul>
                <li><strong>Vyjmutí zásobníku:</strong> Většina zásobníků se dá jednoduše vytáhnout — stačí zatáhnout a mírně zatlačit na pojistku (obvykle modré tlačítko nebo páčka uvnitř zásobníku). Přesný postup najdete v návodu k pračce nebo na YouTube pro konkrétní model.</li>
                <li><strong>Namáčení ve vodě:</strong> Vyjmutý zásobník ponořte do teplé vody s trochou mycího prostředku na nádobí a nechte 15–20 minut namočit. Tvrdé usazeniny prášku a změkčovače tkanin se díky tomu uvolní a snadno smyjí.</li>
                <li><strong>Kartáček na čištění:</strong> Starý zubní kartáček nebo malý kartáček na lahve je ideální nástroj pro čištění zásobníku. Dostanete se jím do všech rohů a drážek, kde se hromadí zbytky. Zvláštní pozornost věnujte přihrádce na změkčovač — tam bývají usazeniny nejtvrdší.</li>
                <li><strong>Čistění prostoru zásobníku v pračce:</strong> Zatímco zásobník máčí, otřete vnitřní prostor, ze kterého jste zásobník vyndali. Hadříkem navlhčeným ve vodě s trochou octa odstraňte plíseň a usazeniny ze stěn a ze vstřikovacích trysek vody.</li>
                <li><strong>Vysušení před vrácením:</strong> Zásobník před vrácením nechte oschnout nebo ho otřete do sucha. Vrácení mokrého zásobníku sice nevadí, ale přispívá k rychlejšímu opětovnému zarůstání plísní.</li>
              </ul>
            </section>

            <section id="filtr">
              <h2>Čištění filtru čerpadla</h2>
              <p>Filtr čerpadla je nejméně známou, ale velmi důležitou součástí pračky. Zachytává vlákna z tkanin, chloupky domácích mazlíčků, mince, knoflíky a jiné drobné předměty, které by jinak poškodily čerpadlo. Zanedbaný filtr může způsobit, že pračka přestane odčerpávat vodu nebo začne vytékat.</p>
              <ul>
                <li><strong>Kde filtr najít:</strong> U předních praček (s dvířky vpředu) se filtr nachází nejčastěji v pravém dolním rohu pračky za malými dvířky nebo klapkou. U praček s horním plněním bývá filtr přístupný zezadu nebo ze strany — nahlédněte do návodu.</li>
                <li><strong>Příprava na čištění:</strong> Pod filtr položte starou utěrku nebo mělkou misku — při otevírání filtru vyteče trocha vody (někdy i více). Mějte připravené náhradní ručníky. Filtr otevírejte pomalu a opatrně.</li>
                <li><strong>Otevření filtru:</strong> Filtr se obvykle otočí doleva (proti směru hodinových ručiček) a vytáhne ven. Před úplným vyjmutím mějte pod ním nádobu na zachycení vody. Pokud filtr nechcete vyndávat celý, stačí ho pootočit a nechat vodu vytéct — ale důkladné čištění vyžaduje úplné vyjmutí.</li>
                <li><strong>Co v filtru bývá:</strong> Vlákna z praní, chloupky, mince, knoflíky, kapsy od prádla, gumičky do vlasů — to vše filtr zachytí. Tento obsah vyhoďte a filtr propláchněte pod tekoucí vodou. Pokud jsou na filtru tvrdé usazeniny, použijte starý zubní kartáček.</li>
                <li><strong>Zpětná montáž:</strong> Filtr vraťte na místo a utáhněte otočením doprava. Zkontrolujte, že je filtr správně utažen — špatně dotažený filtr způsobí vytékání vody z pračky. Spusťte krátký program a zkontrolujte těsnost.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Před čištěním filtru vždy vypněte pračku a vytáhněte zástrčku ze zásuvky. Bezpečnost je na prvním místě. A zkontrolujte, zda v pračce nezbyla žádná voda ze zbývajícího programu — filtr otevírejte vždy s připravenou miskou.</div>
            </section>

            <section id="prevence">
              <h2>Jak předejít zápachu v pračce</h2>
              <p>Nejlepší čištění je to, které není potřeba. Několik jednoduchých návyků výrazně sníží frekvenci hloubkového čištění a zároveň prodlouží životnost pračky.</p>
              <ul>
                <li><strong>Horký program 1× měsíčně:</strong> Jednou za měsíc spusťte pračku naprázdno na 60–90 °C. Pokud pravidelně perete na nízkých teplotách, je tento zvyk klíčový — vysoká teplota zabíjí bakterie a plísně, které se za měsíc stihly usadit.</li>
                <li><strong>Otevřená dvířka po praní:</strong> Po každém vyprání nechte dvířka pootevřená alespoň hodinu, ideálně déle. Vlhkost z bubnu se tak odpaří přirozeně a nevytvoří prostředí pro plísně. U praček s horním plněním nechte víko pootevřené.</li>
                <li><strong>Otírání manžety po každém praní:</strong> Stačí rychlé otření gumové manžety kolem dvířek suchou nebo mírně navlhčenou utěrkou. Odstraníte zbytky vlhkosti a nečistot dříve, než stihnou zahnít.</li>
                <li><strong>Méně pracího prášku:</strong> Používejte prací prášek v doporučeném množství nebo mírně pod ním — přebytečný prášek se nevypere a usazuje se v pračce. Při měkčí vodě (Praha, Brno) stačí ještě méně. Kapalné prací prostředky se lépe vymývají než práškové.</li>
                <li><strong>Nevynechávejte zásobník:</strong> Zásobník na prací prostředky čistěte alespoň jednou za měsíc — stačí ho vyjmout a propláchnout teplou vodou. Pravidelná drobná péče brání tvorbě tvrdých usazenin.</li>
                <li><strong>Neuchovávejte mokré prádlo v pračce:</strong> Pokud necháte vyprané prádlo v bubnu déle než dvě hodiny, začne zapáchat — a zápach se přenese i do pračky. Přemístěte prádlo na sušák ihned po skončení programu.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pračku čistěte zároveň s dalšími domácími úkoly — například jednou za měsíc v den, kdy měníte ložní prádlo. Takto čištění nezapomenete a stane se přirozenou součástí domácí rutiny.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Jak často čistit pračku?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Buben čistěte jedním horkým programem (60–90 °C) alespoň jednou měsíčně — zvláště pokud pravidelně perete na nízkých teplotách. Zásobník vyndejte a propláchnete jednou za měsíc. Filtr čerpadla stačí čistit jednou za 3 měsíce, nebo dříve, pokud pračka pomaleji odčerpává vodu. Manžetu otírejte ideálně po každém praní.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Pomůže tableta na čištění pračky, nebo stačí kyselina citronová?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Komerční tablety na čištění pračky (Calgon, Affresh a podobné) fungují dobře, ale jsou výrazně dražší než kyselina citronová. Kyselina citronová (25–40 Kč za 100 g v drogerii) odvápní buben stejně účinně. Pro dezinfekci a odstranění biofilmu přidejte do kyseliny citronové lžičku jedlé sody nebo použijte cyklus při 90 °C. Tablety mají výhodu v jednoduchosti použití, ale finančně ani ekologicky se nad kyselinu citronovou nevyplatí.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Pračka stále páchne i po vyčištění — co dělat?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Pokud zápach přetrvává po hloubkovém čištění, zkontrolujte: (1) Filtr čerpadla — bývá příčinou zapomínaného zápachu; (2) odpadní hadici — hadice na odtok vody může být uvnitř pokrytá biofilmem; vypláchnout ji pomůže program při 90 °C s octem; (3) manžetu dvířek — podívejte se do záhybů gumy na černou plíseň, ta se čistí roztokem jedlé sody nebo octa a starou kartáčkem; (4) zásobník a prostor zásobníku uvnitř pračky. Pokud ani to nepomůže, může být problém v odpadní hadici nebo hadicích uvnitř pračky — zavolejte servis.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Lze čistit pračku octem? Nepoškodí to těsnění?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ocet je přirozeně kyselý a při pravidelném a rozumném používání těsnění nepoškozuje. Doporučuje se používat bílý destilovaný ocet (6–8% kyselost) naředěný vodou nebo v menším množství (500 ml na praní). Problém nastává pouze při velmi častém a koncentrovaném použití — jednou za měsíc je zcela bezpečné. Alternativou je kyselina citronová, která je šetrnější a méně intenzivně voní.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak poznat, že je filtr čerpadla zanesen?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Příznaků ucpaného filtru je několik: pračka déle odčerpává vodu na konci programu, program se zastaví s chybovým kódem (obvykle E3, F21 nebo podobný — viz návod), voda zůstává ve spodní části bubnu po skončení praní, nebo pračka vydává hlasitější zvuky při čerpání. Pokud máte psa nebo kočku, nebo perete hodně froté a vlněné oblečení, čistěte filtr každých 6–8 týdnů.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/jak-vycistit-pracku" title="Jak vyčistit pračku – zbavte se zápachu a vodního kamene" />

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
                <li><a href="#proc-smrdi">Proč pračka páchne</a></li>
                <li><a href="#buben">Čištění bubnu</a></li>
                <li><a href="#zasobnik">Čištění zásobníku</a></li>
                <li><a href="#filtr">Čištění filtru</a></li>
                <li><a href="#prevence">Prevence zápachu</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/sezonni-udrzba" className="sidebar-cat-link">🧺 Sezónní údržba<span>20 článků →</span></Link>
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
        .article-body p{font-size:16px;line-height:1.75;color:#2a2a28;font-weight:300;margin-bottom:14px}
        .article-body ul{padding-left:22px;margin-bottom:16px;display:flex;flex-direction:column;gap:8px}
        .article-body li{font-size:15px;line-height:1.6;color:#2a2a28;font-weight:300}
        .article-body strong{font-weight:600;color:var(--text)}
        .article-tip{background:#fff8e8;border-left:3px solid #f59e0b;border-radius:0 8px 8px 0;padding:14px 18px;font-size:14px;line-height:1.6;color:#78716c;margin:20px 0}
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
