import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";
import ProductBox from "@/app/components/ProductBox";

export const metadata: Metadata = {
  title: "Demoliční práce svépomocí, nebo najmout firmu? 2026",
  description: "Co lze bourat svépomocí a co ne, jak zjistit nosnou stěnu, jaké nářadí potřebuješ, odvoz suti a kdy se vyplatí demoliční firma. Praktický průvodce.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/demolicni-prace-svepomoci-vs-firma" },
  openGraph: { title: "Demoliční práce svépomocí, nebo najmout firmu? 2026", description: "Co lze bourat svépomocí, jak zjistit nosnou stěnu, nářadí, odvoz suti a kdy se vyplatí demoliční firma.", url: "https://www.domovniguru.cz/blog/demolicni-prace-svepomoci-vs-firma", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-17T08:00:00Z", modifiedTime: "2026-06-17T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Demoli%C4%8Dn%C3%AD%20pr%C3%A1ce%20sv%C3%A9pomoc%C3%AD%2C%20nebo%20naj%C3%ADt%20firmu%3F&cat=blog", width: 1200, height: 630, alt: "Demoliční práce svépomocí, nebo najmout firmu?" }] },
  twitter: { card: "summary_large_image", title: "Demoliční práce svépomocí, nebo firma? 2026", description: "Co lze bourat svépomocí, jak zjistit nosnou stěnu a kdy se vyplatí demoliční firma." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/demolicni-prace-svepomoci-vs-firma#article",
    "headline": "Demoliční práce svépomocí, nebo najmout firmu?",
    "description": "Co lze bourat svépomocí a co ne, jak zjistit nosnou stěnu, jaké nářadí potřebuješ, odvoz suti a kdy se vyplatí demoliční firma.",
    "datePublished": "2026-06-17T08:00:00Z",
    "dateModified": "2026-06-17T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.domovniguru.cz/blog/demolicni-prace-svepomoci-vs-firma" },
    "inLanguage": "cs",
    "keywords": ["demoliční práce svépomocí", "bourání příček", "nosná stěna jak zjistit", "demoliční firma cena", "odvoz suti kontejner", "bourání bytového jádra"]
  }, {
    "@type": "FAQPage",
    "@id": "https://www.domovniguru.cz/blog/demolicni-prace-svepomoci-vs-firma#faq",
    "mainEntity": [
      { "@type": "Question", "name": "Můžu zbourat příčku ve svém bytě bez stavebního povolení?", "acceptedAnswer": { "@type": "Answer", "text": "Bourání nenosné příčky obvykle nevyžaduje stavební povolení, ale u bytového domu (zejména v SVJ) je často potřeba souhlas společenství nebo alespoň ohlášení. U nosných konstrukcí a bytových jader v panelových domech je projektová dokumentace a souhlas stavebního úřadu povinný." } },
      { "@type": "Question", "name": "Jak poznám, že je stěna nosná?", "acceptedAnswer": { "@type": "Answer", "text": "Nahlédni do projektové dokumentace domu (na stavebním úřadě nebo u SVJ). Obvodové stěny a stěny v jedné ose přes více pater bývají nosné, stejně jako stěny tlustší než 15 cm. Jistotu ale dá jen statik – odhad podle oka může být zavádějící." } },
      { "@type": "Question", "name": "Je bytové jádro v panelovém domě nosné?", "acceptedAnswer": { "@type": "Answer", "text": "U řady panelových domů (typicky soustavy B70, T06B) je obvodová konstrukce bytového jádra nosná nebo ztužující prvek celé konstrukce stropu. Bourání bez posouzení statikem může ohrozit stabilitu bytu nad i pod tebou. Vždy si nejprve vyžádej odborné posouzení." } },
      { "@type": "Question", "name": "Kolik stojí odvoz suti v kontejneru?", "acceptedAnswer": { "@type": "Answer", "text": "Kontejner na stavební suť o objemu 3–9 m³ vyjde orientačně na 2 000–6 000 Kč včetně dopravy a uložení na skládce, podle objemu a lokality. Cena se odvíjí i od typu odpadu – směsná suť je dražší na likvidaci než čistý beton nebo cihla." } },
      { "@type": "Question", "name": "Kdy se demoliční práce nevyplatí dělat svépomocí?", "acceptedAnswer": { "@type": "Answer", "text": "Nevyplatí se to u rozsáhlejších demolic (celý byt, více příček, bytové jádro), u podezření na azbest, při zásahu do nosných konstrukcí nebo když nemáš čas – firma s týmem a technikou zvládne za den práci, která kutilovi zabere týden, a odvoz suti má v ceně." } },
      { "@type": "Question", "name": "Kolik stojí demoliční firma?", "acceptedAnswer": { "@type": "Answer", "text": "Orientačně 300–600 Kč/m² bouraných konstrukcí, případně balíčková cena za vybourání celého bytového jádra nebo bytu (často od 15 000 Kč výše). Cena zahrnuje práci, nářadí a často i odvoz suti – ověř si to vždy v nabídce." } }
    ]
  }, {
    "@type": "HowTo",
    "@id": "https://www.domovniguru.cz/blog/demolicni-prace-svepomoci-vs-firma#howto",
    "name": "Demoliční práce svépomocí, nebo najmout firmu?",
    "description": "Postup, jak posoudit rozsah demolice, zjistit nosnost stěn, připravit nářadí, zajistit odvoz suti a rozhodnout se mezi svépomocí a firmou.",
    "step": [
      { "@type": "HowToStep", "name": "Urči, co chceš bourat", "text": "Rozliš, jde-li o nenosnou příčku, obklady, podlahy nebo o konstrukci, kde hrozí zásah do nosného systému domu." },
      { "@type": "HowToStep", "name": "Ověř nosnost stěny", "text": "Nahlédni do projektové dokumentace domu nebo konzultuj se statikem, zejména u obvodových a centrálních stěn a bytových jader." },
      { "@type": "HowToStep", "name": "Připrav nářadí a ochranné pomůcky", "text": "Bourací kladivo nebo perforátor, lopaty, kolečko, odpadní pytle, respirátor a brýle, vypnutí elektřiny a vody v dané zóně." },
      { "@type": "HowToStep", "name": "Objednej odvoz suti", "text": "Zajisti kontejner o objemu 3–9 m³ podle rozsahu prací a stavební suť řádně vytřiď." },
      { "@type": "HowToStep", "name": "Zvaž najmutí firmy", "text": "Pokud jde o větší rozsah, podezření na nosnou konstrukci nebo azbest, anebo chceš ušetřit čas, porovnej nabídky demoličních firem." }
    ]
  }, {
    "@type": "BreadcrumbList",
    "@id": "https://www.domovniguru.cz/blog/demolicni-prace-svepomoci-vs-firma#breadcrumb",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" },
      { "@type": "ListItem", "position": 3, "name": "Stěhování & rekonstrukce", "item": "https://www.domovniguru.cz/blog/kategorie/stehovani" },
      { "@type": "ListItem", "position": 4, "name": "Demoliční práce svépomocí, nebo najmout firmu?", "item": "https://www.domovniguru.cz/blog/demolicni-prace-svepomoci-vs-firma" }
    ]
  }]
};

const RELATED = [
  { title: "Jak naplánovat rekonstrukci bytu krok za krokem", href: "/blog/planovani-rekonstrukce-bytu", read: "6 min" },
  { title: "Jak odhadnout cenu rekonstrukce", href: "/blog/odhadnout-cenu-rekonstrukce", read: "5 min" },
  { title: "Sádrokartonová příčka – postup montáže", href: "/blog/sadrokarton-pricka-postup", read: "6 min" },
  { title: "Jak najít a prověřit řemeslníka", href: "/blog/najit-proveri-remeslnika", read: "5 min" },
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
              <Link href="/blog/kategorie/stehovani">Stěhování & rekonstrukce</Link><span className="breadcrumb-sep">/</span>
              <span>Demoliční práce svépomocí, nebo firma?</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏗️ Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 7 min čtení</span>
              </div>
              <h1 className="article-h1">Demoliční práce svépomocí, nebo najmout firmu?</h1>
              <p className="article-lead">Bourání příčky zvládne kutil za víkend, ale špatný odhad nosné konstrukce může ohrozit celý dům. Tenhle průvodce ti ukáže, co bourat sám, co rozhodně přenechat odborníkům a kolik to stojí v obou případech.</p>
              <div className="article-meta-row"><span>Aktualizováno: 17. června 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/demolicni-prace-svepomoci-vs-firma" title="Demoliční práce svépomocí, nebo najmout firmu?" />
            </header>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#co-lze-bourat">Co lze bezpečně bourat svépomocí</a></li>
                <li><a href="#co-nikdy">Co nikdy bourat svépomocí bez posouzení</a></li>
                <li><a href="#jak-zjistit-nosnost">Jak zjistit, zda je stěna nosná</a></li>
                <li><a href="#naradi">Nářadí pro svépomocnou demolici</a></li>
                <li><a href="#odvoz-suti">Odvoz suti</a></li>
                <li><a href="#bezpecnost">Bezpečnost při bourání</a></li>
                <li><a href="#kdy-firma">Kdy se vyplatí firma</a></li>
                <li><a href="#cena-firmy">Cena demoliční firmy</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="co-lze-bourat">
              <h2>Co lze bezpečně bourat svépomocí</h2>
              <p>Řada demoličních prací v bytě nebo domě je bezpečná i pro kutila bez stavebního vzdělání – pokud dodrží základní pravidla a předem si stěnu prověří.</p>
              <ul>
                <li><strong>Nenosné příčky ze sádrokartonu</strong> – nejjednodušší případ. Sádrokarton se snadno rozebere ruční pákou nebo kladivem, konstrukce z CD/UD profilů se rozšroubuje.</li>
                <li><strong>Nenosné příčky z cihly do tloušťky 10 cm</strong> – po ověření, že nejde o nosnou stěnu (viz sekce níže), lze bourat kladivem a sekáčem nebo lehčím bouracím kladivem.</li>
                <li><strong>Staré obklady a dlažby</strong> – odstranění obkladů ze stěn a podlah pomocí sekáče nebo elektrické sekací pily je běžná svépomocná práce.</li>
                <li><strong>Staré podlahové krytiny</strong> – PVC, koberce, staré dřevěné podlahy nebo plovoucí podlahy se demontují bez odborného zásahu.</li>
                <li><strong>Kuchyňská linka</strong> – demontáž skříněk, pracovní desky a spotřebičů je práce na šroubovák, případně vypnutí přívodu vody a plynu předem.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> I u „bezpečné" demolice si vždy nejdřív ověř, kde vedou elektrické rozvody a vodovodní/plynové potrubí – skryté vedení v příčce je při bourání nejčastější příčina úrazů a škod.</div>
            </section>

            <section id="co-nikdy">
              <h2>Co nikdy nedělej svépomocí bez odborného posouzení</h2>
              <p>Existují konstrukce, u kterých chyba neznamená jen poškozenou zeď, ale ohrožení statiky celého domu.</p>
              <h3>Nosné stěny a sloupy</h3>
              <p>Nosné stěny přenáší zatížení z horních podlaží do základů. Jejich odstranění nebo i jen zúžení bez náhradního nosného prvku (průvlak, ocelová konstrukce) může způsobit praskliny, deformace stropu nebo v krajním případě statickou havárii.</p>
              <h3>Panelové bytové jádro</h3>
              <p>Bytové jádro v panelovém domě bývá často součástí nosné nebo ztužující konstrukce stropní desky. Bourání jádra bez posouzení statikem je jedna z nejčastějších chyb při rekonstrukcích panelových bytů – vizuálně to vypadá jako „jen přepážky", ve skutečnosti to může nést patro nad tebou.</p>
              <h3>Zásahy do stropu</h3>
              <p>Jakékoliv vrtání, sekání nebo prorážení stropní konstrukce (kvůli novým rozvodům, otvoru, schodišti) vyžaduje vždy projekt a posouzení statikem. Strop nese zatížení celého horního podlaží i nábytku a chyba se projeví třeba až za pár let.</p>
              <div className="article-tip"><strong>⚠️ Azbest:</strong> Pokud je stavba starší než rok 1990, můžou obsahovat azbest i zdánlivě nenosné prvky – stará izolace potrubí, podlahové krytiny (PVC s azbestovou vrstvou) nebo obklady. Azbest se nesmí bourat svépomocí, likvidaci musí provést odborná firma s oprávněním.</div>
            </section>

            <section id="jak-zjistit-nosnost">
              <h2>Jak zjistit, zda je stěna nosná</h2>
              <h3>Projektová dokumentace domu</h3>
              <p>Nejspolehlivější zdroj je původní projektová dokumentace stavby, kde jsou nosné konstrukce vyznačeny. U bytových domů ji najdeš na stavebním úřadě nebo u správce/SVJ. U rodinných domů by ji měl mít majitel nebo stavební úřad v archivu.</p>
              <h3>Konzultace se statikem</h3>
              <p>Pokud dokumentace chybí nebo si nejsi jistý, statik provede posouzení přímo na místě – obvykle za pár tisíc korun, což je zlomek nákladů na případnou opravu poškozené konstrukce. U panelových domů a větších zásahů je to investice, která se vždy vyplatí.</p>
              <h3>Tloušťka a umístění stěny</h3>
              <p>Bez dokumentace si můžeš udělat orientační odhad: obvodové stěny domu jsou téměř vždy nosné, stejně jako centrální stěny, které jdou ve stejné ose přes více podlaží. Stěny tlustší než 15 cm bývají nosné častěji než tenčí příčky, ale tloušťka samotná nic nezaručuje – je to jen vodítko, ne důkaz.</p>
              <ul>
                <li><strong>Pravděpodobně nosná:</strong> obvodová stěna, stěna mezi byty, stěna ve stejné pozici v každém patře, tloušťka nad 15 cm</li>
                <li><strong>Pravděpodobně nenosná:</strong> tenká vnitřní příčka uvnitř jednoho bytu, sádrokartonová přepážka, stěna která se v sousedním patře nevyskytuje</li>
              </ul>
            </section>

            <section id="naradi">
              <h2>Nářadí pro svépomocnou demolici</h2>
              <p>Pro běžné bourání nenosných konstrukcí si vystačíš s základní sadou nářadí:</p>
              <ul>
                <li><strong>Bourací kladivo nebo perforátor</strong> – pro cihlové a betonové konstrukce. Lehčí perforátor s SDS-plus uchycením zvládne i menší bourací práce, na masivnější zdivo je lepší silnější bourací kladivo.</li>
                <li><strong>Sekáč a palice</strong> – pro menší úseky, obklady a dokončovací práce, kde se perforátor nevejde.</li>
                <li><strong>Lopaty a hrábě</strong> – na nakládání suti a drobného odpadu.</li>
                <li><strong>Stavební kolečko</strong> – pro přesun suti od místa bourání ke kontejneru nebo k odvozu.</li>
                <li><strong>Velké odpadní pytle nebo přímo kontejner</strong> – na sběr a třídění materiálu (viz další sekce).</li>
              </ul>
              <p>Nářadí na jednorázovou demolici se vyplatí spíš půjčit než kupovat – půjčovny stavebního nářadí nabízí perforátory i bourací kladiva na den nebo víkend.</p>
              <ProductBox
                name="Bourací kladivo, perforátor a doplňkové nářadí"
                store="Nářadí-Praha.cz"
                price="dle aktuální nabídky"
                href="https://ehub.cz/system/scripts/click.php?a_aid=31989715&a_bid=fc349ed4"
                why="Pokud se rozhodneš nářadí na demolici koupit místo půjčení, Nářadí-Praha.cz má širokou nabídku perforátorů, bouracích kladiv i doplňkového nářadí pro stavební práce."
                icon="🔨"
              />
            </section>

            <section id="odvoz-suti">
              <h2>Odvoz suti</h2>
              <h3>Objednání kontejneru</h3>
              <p>Pro běžnou demolici příčky nebo bytového jádra je nejpraktičtější objednat kontejner přímo k domu. Velikost se odvíjí od rozsahu prací – typicky 3–9 m³. Cena se počítá podle objemu a typu odpadu, orientačně se pohybuje v řádu tisíců korun za kontejner včetně přistavení, odvozu a uložení na skládce.</p>
              <h3>Třídění stavebního odpadu</h3>
              <p>Vyplatí se třídit suť už při nakládání – čistý beton, cihla a keramika mají jinou (levnější) cenu likvidace než směsný stavební odpad smíchaný se dřevem, plasty nebo sádrokartonem. Některé skládky účtují za netříděný odpad výrazně více.</p>
              <h3>Zákaz vyhazování do běžného odpadu</h3>
              <p>Stavební suť nepatří do běžných kontejnerů na komunální odpad ani do velkoobjemových kontejnerů určených pro objemný odpad z domácností – jde o stavební a demoliční odpad, který musí být odvezen a zlikvidován samostatně. Porušení může vést k pokutě a navíc to přetíží kapacitu kontejneru pro ostatní obyvatele.</p>
            </section>

            <section id="bezpecnost">
              <h2>Bezpečnost při bourání</h2>
              <h3>Ochranné pomůcky</h3>
              <p>Při bourání vzniká velké množství prachu a drobných úlomků – respirátor (alespoň třídy FFP2) a ochranné brýle jsou minimum. Pracovní rukavice a pevná obuv s ocelovou špicí ochrání před pořezáním a pádem materiálu.</p>
              <h3>Azbest u starších staveb</h3>
              <p>U staveb postavených před rokem 1990 hrozí výskyt azbestu v izolacích, podlahových krytinách nebo obkladech. Pokud máš jakékoliv podezření, demolici nezahajuj a objednej odbornou firmu s oprávněním k likvidaci nebezpečného odpadu – svépomocné bourání azbestu je zdravotní riziko a často i v rozporu s předpisy.</p>
              <h3>Vypnutí elektřiny a vody</h3>
              <p>Před bouráním v dané zóně vždy vypni elektřinu na příslušném jističi a uzavři přívod vody (případně plynu) v okruhu, kde budeš pracovat. I zdánlivě nenosná příčka může skrývat rozvody, které při neopatrném zásahu způsobí zkrat, zatopení nebo únik plynu.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Před prvním seknutím do zdi si na chvíli posviť baterkou podél spár nebo použij detektor kovů a vedení – odhalí kovové trubky a často i elektrické krabice ukryté pod omítkou.</div>
            </section>

            <section id="kdy-firma">
              <h2>Kdy se vyplatí najmout firmu</h2>
              <h3>Rychlost</h3>
              <p>Demoliční firma s týmem a profesionální technikou zvládne vybourat byt nebo bytové jádro za jeden až dva dny – práci, která by kutilovi bez zkušeností a s omezeným časem (večery, víkendy) zabrala klidně celý týden i déle.</p>
              <h3>Zkušenost s odhalením skrytých rozvodů</h3>
              <p>Zkušená firma pozná podle vzhledu a umístění stěny, kde s největší pravděpodobností vedou rozvody, a má vybavení (detektory vedení) k jejich přesné lokalizaci. Sníží se tak riziko poškození elektriky, vody nebo plynu.</p>
              <h3>Odvoz suti v ceně</h3>
              <p>Většina demoličních firem má odvoz a likvidaci suti zahrnutý v ceně nebo ho nabízí jako součást balíčku – ušetříš si starosti s objednáváním kontejneru, třízením odpadu a koordinací svozu.</p>
            </section>

            <section id="cena-firmy">
              <h2>Orientační cena demoliční firmy</h2>
              <p>Cena se odvíjí od rozsahu a typu bouraných konstrukcí. Orientačně se počítá <strong>300–600 Kč/m²</strong> bourané plochy, případně firmy nabízí balíčkovou cenu za celý byt nebo bytové jádro.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Rozsah práce</th><th>Orientační cena</th></tr></thead>
                  <tbody>
                    <tr><td>Vybourání jedné nenosné příčky</td><td>2 000–5 000 Kč</td></tr>
                    <tr><td>Vybourání bytového jádra</td><td>15 000–30 000 Kč</td></tr>
                    <tr><td>Demolice celého bytu (vč. podlah, obkladů)</td><td>od 40 000 Kč výše</td></tr>
                    <tr><td>Odvoz suti (kontejner 3–9 m³)</td><td>2 000–6 000 Kč</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Cena se liší podle lokality, dostupnosti místa (výtah, patro, parkování pro kontejner) a toho, zda je v ceně zahrnut i odvoz suti. Vyžádej si vždy nabídku s rozpisem, co všechno je v ceně obsažené.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Můžu zbourat příčku ve svém bytě bez stavebního povolení?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Bourání nenosné příčky obvykle nevyžaduje stavební povolení, ale u bytového domu (zejména v SVJ) je často potřeba souhlas společenství nebo alespoň ohlášení. U nosných konstrukcí a bytových jader v panelových domech je projektová dokumentace a souhlas stavebního úřadu povinný.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak poznám, že je stěna nosná?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Nahlédni do projektové dokumentace domu (na stavebním úřadě nebo u SVJ). Obvodové stěny a stěny v jedné ose přes více pater bývají nosné, stejně jako stěny tlustší než 15 cm. Jistotu ale dá jen statik – odhad podle oka může být zavádějící.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Je bytové jádro v panelovém domě nosné?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">U řady panelových domů (typicky soustavy B70, T06B) je obvodová konstrukce bytového jádra nosná nebo ztužující prvek celé konstrukce stropu. Bourání bez posouzení statikem může ohrozit stabilitu bytu nad i pod tebou. Vždy si nejprve vyžádej odborné posouzení.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Kolik stojí odvoz suti v kontejneru?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Kontejner na stavební suť o objemu 3–9 m³ vyjde orientačně na 2 000–6 000 Kč včetně dopravy a uložení na skládce, podle objemu a lokality. Cena se odvíjí i od typu odpadu – směsná suť je dražší na likvidaci než čistý beton nebo cihla.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Kdy se demoliční práce nevyplatí dělat svépomocí?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Nevyplatí se to u rozsáhlejších demolic (celý byt, více příček, bytové jádro), u podezření na azbest, při zásahu do nosných konstrukcí nebo když nemáš čas – firma s týmem a technikou zvládne za den práci, která kutilovi zabere týden, a odvoz suti má v ceně.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Kolik stojí demoliční firma?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Orientačně 300–600 Kč/m² bouraných konstrukcí, případně balíčková cena za vybourání celého bytového jádra nebo bytu (často od 15 000 Kč výše). Cena zahrnuje práci, nářadí a často i odvoz suti – ověř si to vždy v nabídce.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/demolicni-prace-svepomoci-vs-firma" title="Demoliční práce svépomocí, nebo najmout firmu?" />

            <section className="related-section">
              <h2>Související články</h2>
              <div className="related-grid">
                {RELATED.map((r) => (
                  <Link key={r.href} href={r.href} className="card">
                    <div className="card-eyebrow-row"><span>Stěhování & rekonstrukce</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#co-lze-bourat">Co lze bourat svépomocí</a></li>
                <li><a href="#co-nikdy">Co nikdy svépomocí</a></li>
                <li><a href="#jak-zjistit-nosnost">Jak zjistit nosnost</a></li>
                <li><a href="#naradi">Potřebné nářadí</a></li>
                <li><a href="#odvoz-suti">Odvoz suti</a></li>
                <li><a href="#bezpecnost">Bezpečnost</a></li>
                <li><a href="#kdy-firma">Kdy firma</a></li>
                <li><a href="#cena-firmy">Cena firmy</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/stehovani" className="sidebar-cat-link">🏗️ Stěhování & rekonstrukce<span>Více článků →</span></Link>
            </div>
          </aside>
        </div>
      </div>
      <style>{`
        .article-layout{display:grid;grid-template-columns:1fr 280px;gap:56px;padding:48px 0 80px;align-items:start}
        .article-header{margin-bottom:32px}.article-meta-top{display:flex;align-items:center;gap:12px;margin-bottom:16px}
        .article-cat-pill{display:inline-flex;align-items:center;height:24px;padding:0 12px;border-radius:999px;border:1px solid var(--border);background:var(--surface);font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);text-decoration:none;transition:background 120ms}
        .article-cat-pill:hover{background:#e8e7e2;color:var(--text)}.article-read-time{font-size:12px;color:var(--muted);font-weight:500}
        .article-h1{font-family:var(--font-serif);font-size:clamp(26px,3.5vw,40px);line-height:1.1;font-weight:400;letter-spacing:-.01em;margin-bottom:16px}
        .article-lead{font-size:18px;line-height:1.65;color:var(--muted);font-weight:300;margin-bottom:14px}
        .article-meta-row{display:flex;gap:8px;font-size:12px;color:var(--muted);font-weight:500}
        .toc{background:var(--surface);border-radius:10px;padding:20px 24px;margin-bottom:40px}.toc-label{font-size:11px;font-weight:700;letter-spacing:.10em;text-transform:uppercase;color:var(--muted);margin-bottom:12px}
        .toc-list{padding-left:18px;display:flex;flex-direction:column;gap:6px}.toc-list li a{font-size:14px;color:var(--muted);text-decoration:none;font-weight:400;transition:color 120ms}.toc-list li a:hover{color:var(--text)}
        .article-body section{margin-bottom:48px}.article-body h2{font-family:var(--font-serif);font-size:clamp(20px,2.5vw,26px);font-weight:400;line-height:1.2;margin-bottom:16px;border-top:1px solid var(--border);padding-top:24px;margin-top:8px}
        .article-body h3{font-family:var(--font-sans);font-size:16px;font-weight:600;margin-top:24px;margin-bottom:10px;color:var(--text)}
        .article-body p{font-size:16px;line-height:1.75;color:#2a2a28;font-weight:300;margin-bottom:14px}.article-body ul{padding-left:22px;margin-bottom:16px;display:flex;flex-direction:column;gap:8px}
        .article-body li{font-size:15px;line-height:1.6;color:#2a2a28;font-weight:300}.article-body strong{font-weight:600;color:var(--text)}
        .article-tip{background:#fff8e8;border-left:3px solid #f59e0b;border-radius:0 8px 8px 0;padding:14px 18px;font-size:14px;line-height:1.6;color:#78716c;margin:20px 0}
        .article-table-wrap{overflow-x:auto;margin:16px 0 24px}.article-table{width:100%;border-collapse:collapse;font-size:14px;line-height:1.5}
        .article-table th{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);padding:10px 14px;text-align:left;border-bottom:2px solid var(--border);background:var(--surface)}
        .article-table td{padding:10px 14px;border-bottom:1px solid var(--border);vertical-align:top;color:#2a2a28;font-weight:300}.article-table tr:last-child td{border-bottom:none}
        .faq-list{display:flex;flex-direction:column;gap:8px;margin-top:16px}.faq-item{border:1px solid var(--border);border-radius:10px;overflow:hidden}
        .faq-summary{display:flex;justify-content:space-between;align-items:center;padding:14px 18px;cursor:pointer;font-size:15px;font-weight:500;color:var(--text);background:var(--surface);list-style:none;gap:12px}
        .faq-summary:hover{background:#e8e7e2}.faq-icon{flex-shrink:0;color:var(--muted);transition:transform 200ms;font-size:14px}
        details[open] .faq-icon{transform:rotate(180deg)}.faq-body{padding:14px 18px;font-size:14px;line-height:1.7;color:#4a4a48;font-weight:300;border-top:1px solid var(--border);background:#fff}
        .related-section{margin-top:56px}.related-section h2{font-family:var(--font-serif);font-size:22px;font-weight:400;margin-bottom:20px;padding-top:24px;border-top:1px solid var(--border)}
        .related-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}.article-sidebar{position:sticky;top:80px;display:flex;flex-direction:column;gap:16px}
        .sidebar-widget{background:#fff;border:1px solid var(--border);border-radius:12px;padding:20px}.sidebar-widget-title{font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-bottom:14px}
        .sidebar-toc{list-style:none;display:flex;flex-direction:column;gap:8px}.sidebar-toc li a{font-size:13px;color:var(--muted);text-decoration:none;font-weight:400;transition:color 120ms;line-height:1.4;display:block}.sidebar-toc li a:hover{color:var(--text)}
        .sidebar-cat-link{display:flex;justify-content:space-between;align-items:center;font-size:14px;font-weight:500;color:var(--text);text-decoration:none;padding:8px 0;border-bottom:1px solid var(--border);transition:color 120ms}.sidebar-cat-link:hover{color:var(--muted)}.sidebar-cat-link span{font-size:12px;color:var(--muted)}
        @media(max-width:960px){.article-layout{grid-template-columns:1fr;gap:0}.article-sidebar{position:static;margin-top:40px}.related-grid{grid-template-columns:1fr}}
      `}</style>
    </>
  );
}
