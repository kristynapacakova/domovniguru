import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak naplánovat předsíň a vstupní prostor v bytě",
  description: "Úložné prostory na boty a oblečení, lavice, osvětlení i odolná podlaha – jak z malé předsíně vytěžit maximum a udělat z ní praktický vstup do bytu.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/planovani-predsine-a-vstupu" },
  openGraph: {
    title: "Jak naplánovat předsíň a vstupní prostor v bytě",
    description: "Úložné prostory na boty a oblečení, lavice, osvětlení i odolná podlaha – jak z malé předsíně vytěžit maximum a udělat z ní praktický vstup do bytu.",
    url: "https://www.domovniguru.cz/blog/planovani-predsine-a-vstupu",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "article",
    publishedTime: "2026-06-22T08:00:00Z",
    modifiedTime: "2026-06-22T08:00:00Z",
    authors: ["DomovniGuru"],
    images: [{ url: "/api/og?title=Jak%20napl%C3%A1novat%20p%C5%99eds%C3%AD%C5%88%20a%20vstupn%C3%AD%20prostor%20v%20byt%C4%9B&cat=blog", width: 1200, height: 630, alt: "Jak naplánovat předsíň a vstupní prostor v bytě" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jak naplánovat předsíň a vstupní prostor v bytě",
    description: "Úložné prostory, lavice, osvětlení i odolná podlaha pro malou předsíň.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.domovniguru.cz/blog/planovani-predsine-a-vstupu#article",
      "headline": "Jak naplánovat předsíň a vstupní prostor v bytě",
      "description": "Úložné prostory na boty a oblečení, lavice, osvětlení i odolná podlaha – jak z malé předsíně vytěžit maximum a udělat z ní praktický vstup do bytu.",
      "datePublished": "2026-06-22T08:00:00Z",
      "dateModified": "2026-06-22T08:00:00Z",
      "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.domovniguru.cz/blog/planovani-predsine-a-vstupu" },
      "inLanguage": "cs",
      "keywords": ["předsíň v bytě", "úložný prostor v předsíni", "malá předsíň", "vstupní prostor v bytě", "skříň do předsíně"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.domovniguru.cz/blog/planovani-predsine-a-vstupu#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" },
        { "@type": "ListItem", "position": 3, "name": "Stěhování & rekonstrukce", "item": "https://www.domovniguru.cz/blog/kategorie/stehovani" },
        { "@type": "ListItem", "position": 4, "name": "Jak naplánovat předsíň a vstupní prostor v bytě", "item": "https://www.domovniguru.cz/blog/planovani-predsine-a-vstupu" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.domovniguru.cz/blog/planovani-predsine-a-vstupu#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Jak velká by měla být skříň v předsíni?", "acceptedAnswer": { "@type": "Answer", "text": "I úzká skříň o hloubce 35–40 cm pojme zavěšené oblečení, pokud zvolíš ramínka otočená podélně ke dveřím. Pro běžnou rodinu počítej s šířkou skříně alespoň 90–120 cm, ideálně s kombinací poliček, tyče a zásuvek na drobnosti." } },
        { "@type": "Question", "name": "Vyplatí se v malé předsíni lavice na boty?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, i úzká lavice o hloubce 25–30 cm usnadní obouvání a často skrývá úložný prostor uvnitř sedáku nebo pod ním. Pokud na ni není místo, stačí i sklopná nástěnná lavička, která prostor nezabírá, když se nepoužívá." } },
        { "@type": "Question", "name": "Jaká podlaha je do předsíně nejvhodnější?", "acceptedAnswer": { "@type": "Answer", "text": "Nejlépe poslouží keramická dlažba nebo vinylová podlaha, které snesou vlhkost, písek a sůl z bot a snadno se čistí. Laminátu a masivní dřevěné podlaze se v této zóně raději vyhni, protože vlhkost jim dlouhodobě škodí." } },
        { "@type": "Question", "name": "Jak osvětlit temnou předsíň bez okna?", "acceptedAnswer": { "@type": "Answer", "text": "Kombinuj stropní svítidlo se širokým rozptylem světla a doplňkové zdroje – LED pásek u zrcadla nebo nástěnné svítidlo u vstupních dveří. Teplota světla mezi 3000–3500 K působí příjemně a zároveň dostatečně prosvětlí i bezokenní prostor." } },
        { "@type": "Question", "name": "Kam umístit zrcadlo v předsíni?", "acceptedAnswer": { "@type": "Answer", "text": "Ideální je umístění naproti vstupním dveřím nebo na boční stěnu v zorném poli při odchodu z bytu, ne přímo proti dveřím v ose pohledu z chodby ven. Větší zrcadlo navíc opticky zvětší i ten nejmenší prostor." } },
        { "@type": "Question", "name": "Jak řešit úložný prostor v úzké a dlouhé předsíni?", "acceptedAnswer": { "@type": "Answer", "text": "V úzké předsíni se osvědčí vysoké a štíhlé skříně po celé délce jedné stěny, případně otevřené háčky a polička nad lavicí na opačné straně. Důležité je nechat průchozí šíři alespoň 80–90 cm, aby prostor nepůsobil stísněně." } },
      ],
    },
    {
      "@type": "HowTo",
      "@id": "https://www.domovniguru.cz/blog/planovani-predsine-a-vstupu#howto",
      "name": "Jak naplánovat předsíň a vstupní prostor v bytě",
      "description": "Úložné prostory na boty a oblečení, lavice, osvětlení i odolná podlaha – jak z malé předsíně vytěžit maximum a udělat z ní praktický vstup do bytu.",
      "step": [
        { "@type": "HowToStep", "name": "Úložný prostor na boty a oblečení", "text": "Navrhni skříň nebo botník podle skutečného počtu členů domácnosti a sezónního oblečení, využij hloubku a výšku stěny až ke stropu." },
        { "@type": "HowToStep", "name": "Lavice a místo na obouvání", "text": "Zařaď lavici nebo sedák, ideálně s úložným prostorem uvnitř, aby se obouvání stalo pohodlným i v malém prostoru." },
        { "@type": "HowToStep", "name": "Osvětlení vstupu", "text": "Zkombinuj hlavní stropní svítidlo s doplňkovým světlem u zrcadla nebo skříně, aby byla předsíň dobře vidět i bez denního světla." },
        { "@type": "HowToStep", "name": "Odolná podlahová krytina", "text": "Zvol dlažbu nebo vinyl odolný vůči vlhkosti, písku a soli, ideálně s přechodovou lištou do navazující místnosti." },
        { "@type": "HowToStep", "name": "Zrcadlo a doplňky", "text": "Umísti zrcadlo do zorného pole při odchodu a doplň háčky a poličku na klíče, aby měla každá věc své místo." },
        { "@type": "HowToStep", "name": "Řešení úzkého a dlouhého prostoru", "text": "U protáhlé předsíně rozděl úložný prostor na jednu stěnu a zachovej dostatečnou průchozí šíři." },
      ],
    },
  ],
};

const RELATED = [
  { title: "Úložné prostory v malém bytě", href: "/blog/uloziste-v-malem-byte", read: "6 min" },
  { title: "Plánování rekonstrukce bytu krok za krokem", href: "/blog/planovani-rekonstrukce-bytu", read: "7 min" },
  { title: "Jak vybrat okna při rekonstrukci", href: "/blog/jak-vybrat-okna-pri-rekonstrukci", read: "6 min" },
  { title: "Jak navrhnout malé koupelny", href: "/blog/jak-navrhnout-male-koupelny", read: "6 min" },
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
              <span>Jak naplánovat předsíň a vstupní prostor v bytě</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏠 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak naplánovat předsíň a vstupní prostor v bytě</h1>
              <p className="article-lead">Předsíň je první místo, které vidíte po příchodu domů, a zároveň často ten nejmenší a nejhůř využitý prostor v bytě. Se správným rozmístěním úložných prostor, osvětlení a vhodnou podlahou z ní ale snadno uděláte funkční a příjemný vstup, který zvládne pojmout boty, kabáty i denní drobnosti celé rodiny.</p>
              <div className="article-meta-row">
                <span>Aktualizováno: 22. června 2026</span><span>·</span><span>DomovniGuru</span>
              </div>
              <ShareButtons url="https://www.domovniguru.cz/blog/planovani-predsine-a-vstupu" title="Jak naplánovat předsíň a vstupní prostor v bytě" />
            </header>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#uloziste">Úložný prostor na boty a oblečení</a></li>
                <li><a href="#lavice">Lavice a místo na obouvání</a></li>
                <li><a href="#osvetleni">Osvětlení vstupu</a></li>
                <li><a href="#podlaha">Podlahová krytina</a></li>
                <li><a href="#zrcadlo">Zrcadlo a doplňky</a></li>
                <li><a href="#uzka">Úzká a dlouhá předsíň</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="uloziste">
              <h2>Úložný prostor na boty a oblečení</h2>
              <p>Základem funkční předsíně je dostatek úložného prostoru, který pojme nejen aktuální sezónní oblečení, ale i boty celé rodiny a drobnosti jako klíče, rukavice nebo deštníky. Bez promyšleného úložiště se předsíň velmi rychle změní v nepřehledný sklad bot u dveří.</p>
              <h3>Skříň od podlahy ke stropu</h3>
              <p>Pokud máš na stěnu alespoň 90 cm šířky, vyplatí se postavit skříň využívající celou výšku místnosti až ke stropu. Horní patra, na která nedosáhneš běžně, jsou ideální pro sezónní věci – letní bundy v zimě nebo lyžařské vybavení v létě. I skříň hluboká jen 35–40 cm pojme zavěšené kabáty, pokud zvolíš ramínka otočená podélně ke dveřím skříně.</p>
              <h3>Botník s dostatečnou kapacitou</h3>
              <p>Při výběru botníku počítej s rezervou – běžná domácnost se čtyřmi členy potřebuje místo na 15–20 párů bot včetně sezónních. Šikmé poličky šetří hloubku prostoru oproti rovným, otevřený botník navíc umožní botám lépe vyschnout po dešti.</p>
              <h3>Drobnosti mají mít své místo</h3>
              <p>Vyhraď samostatnou zásuvku nebo misku na klíče, peněženku a drobnosti, které běžně nosíš s sebou. Pokud tyto věci nemají pevné místo, hromadí se na první volné ploše a předsíň rychle vypadá neuspořaně i po důkladném úklidu.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Na míru vyrobená skříň do nepravidelného výklenku se často vyplatí i v malém bytě – využiješ tím prostor, který by jinak zůstal nevyužitý, a skříň zároveň opticky splyne se stěnou.</div>
            </section>

            <section id="lavice">
              <h2>Lavice a místo na obouvání</h2>
              <p>Obouvání ve stoje je nepohodlné a v malé předsíni často znamená opírání se o stěnu nebo skříň. Lavice nebo sedák tento problém vyřeší a zároveň dokáže skrýt další úložný prostor.</p>
              <h3>Lavice s úložným prostorem</h3>
              <p>Lavice se zdvihacím sedákem nebo zásuvkami pod sedací plochou je ideální volbou tam, kde je každý centimetr drahý. Uvnitř se vejdou pantofle, boty na převlékání nebo sezónní doplňky, a navrch zůstává pohodlné místo k sezení.</p>
              <h3>Sklopná varianta pro nejmenší prostory</h3>
              <p>Pokud na klasickou lavici není v předsíni místo, existují sklopné nástěnné lavičky, které se po použití zaklapnou zpět ke zdi a prostor zcela uvolní. Jsou ideální do úzkých chodeb, kde běžná lavice brání průchodu.</p>
              <h3>Výška a umístění</h3>
              <p>Optimální výška sedu je 40–45 cm, podobně jako u běžné židle. Lavici umísti tak, aby byla přístupná hned od vstupních dveří, ideálně blízko botníku, aby se obouvání i zouvání odehrávalo na jednom místě bez zbytečného přecházení.</p>
            </section>

            <section id="osvetleni">
              <h2>Osvětlení vstupu</h2>
              <p>Předsíň často nemá okno, a přesto se v ní denně řeší detaily jako hledání klíčů nebo kontrola výstupu před zrcadlem. Dobré osvětlení je proto stejně důležité jako úložný prostor.</p>
              <h3>Hlavní stropní svítidlo</h3>
              <p>Zvol svítidlo s širokým rozptylem světla, které rovnoměrně prosvětlí celou plochu předsíně, ne jen jeden bod. U nízkých stropů se hodí přisazené svítidlo, u vyšších prostorů poslouží i závěsné svítidlo, pokud nebrání v průchodu.</p>
              <h3>Doplňkové světlo u zrcadla a skříně</h3>
              <p>LED pásek po straně nebo nad zrcadlem odstraní stíny na obličeji a usnadní kontrolu výstupu. Podobně se vyplatí doplňkové světlo uvnitř hluboké skříně nebo nad botníkem, aby bylo vidět i na věci uložené v zadní části.</p>
              <h3>Teplota a typ světla</h3>
              <p>Teplota světla mezi 3000 a 3500 K působí příjemně a zároveň poskytuje dost jasu pro běžné úkony. Studenější bílé světlo nad 4000 K se do předsíně příliš nehodí, protože prostor působí chladně a neosobně.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pohybový senzor u vstupních dveří se v předsíni vyplatí téměř vždy – ruce máte často plné tašek nebo klíčů a automatické rozsvícení ušetří hledání vypínače ve tmě.</div>
            </section>

            <section id="podlaha">
              <h2>Podlahová krytina odolná vůči nečistotám a vlhku</h2>
              <p>Předsíň je nejvíce zatěžovaná plocha v bytě – prochází přes ni veškerá vlhkost, písek, sůl a nečistoty zvenčí. Výběr podlahy by proto měl stavět na odolnosti, ne jen na vzhledu.</p>
              <h3>Keramická dlažba</h3>
              <p>Dlažba je klasickou a osvědčenou volbou – snese vlhkost, snadno se čistí a vydrží desítky let bez výrazného opotřebení. Nevýhodou je chladnější povrch, který lze řešit podlahovým vytápěním nebo předložkou u dveří.</p>
              <h3>Vinylová podlaha</h3>
              <p>Kvalitní vinyl s vodotěsným spojem je v poslední době oblíbenou alternativou k dlažbě – je teplejší na dotek, tlumí kročejový hluk a přitom dobře odolává vlhkosti i mechanickému zatížení od bot.</p>
              <h3>Čemu se v předsíni vyhnout</h3>
              <p>Laminátová podlaha a masivní dřevo nejsou pro tuto zónu ideální, protože opakovaná vlhkost způsobuje bobtnání a poškození povrchu. Pokud chceš zachovat jednotnou podlahu s navazující obytnou částí, řeš alespoň přechod vhodnou lištou a předložkou zachytávající největší znečištění.</p>
            </section>

            <section id="zrcadlo">
              <h2>Zrcadlo a praktické doplňky</h2>
              <p>Drobné doplňky dělají z předsíně funkční celek – bez nich se i dobře navržený úložný prostor stane jen hromadou věcí na jednom místě.</p>
              <h3>Umístění zrcadla</h3>
              <p>Zrcadlo umísti tak, aby bylo viditelné při odchodu z bytu, ideálně na boční stěně nebo na dveřích skříně, ne přímo v ose proti vstupním dveřím. Větší zrcadlo navíc odráží světlo a opticky zvětšuje i velmi malý prostor.</p>
              <h3>Háčky a poličky</h3>
              <p>Řada háčků ve výšce ramen pojme denně používané kabáty a tašky bez nutnosti otevírat skříň. Nad lavicí nebo botníkem se vyplatí úzká polička na klíče, brýle nebo poštu, aby tyto věci nekončily na podlaze nebo v kapsách.</p>
              <h3>Organizéry uvnitř skříně</h3>
              <p>Uvnitř skříně využij závěsné organizéry na šály a čepice nebo dělené boxy na rukavice a drobné doplňky – udrží pořádek i v menším prostoru a usnadní rychlé hledání před odchodem.</p>
            </section>

            <section id="uzka">
              <h2>Řešení pro úzké a dlouhé předsíně</h2>
              <p>Protáhlý a úzký vstupní prostor je v bytech velmi častý a vyžaduje trochu jiný přístup než čtvercová předsíň.</p>
              <h3>Úložný prostor jen na jedné straně</h3>
              <p>V úzké chodbě má smysl soustředit veškerý úložný prostor – skříň, botník i lavici – na jednu stěnu a druhou stranu zachovat volnou. Tím udržíš dostatečnou průchozí šíři, ideálně alespoň 80–90 cm, aby se dva lidé mohli bez problémů potkat.</p>
              <h3>Nízký nábytek místo vysokých skříní</h3>
              <p>Pokud je předsíň navíc úzká i na výšku pohledu, nízký botník s poličkou nahoře působí lehčeji než vysoká skříň a prostor neutlačuje. Vysoké úložiště pak přesuň jen do té části chodby, kde to dispozice dovolí.</p>
              <h3>Optické prodloužení prostoru</h3>
              <p>Světlé barvy stěn a podlahy, podélné vedení osvětlení a zrcadlo na konci chodby pomohou protáhlý prostor opticky zkrátit a zúžit pocit tunelu. Stejně funguje i jednotná barva nábytku splývající se stěnou.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jak velká by měla být skříň v předsíni?", a: "I úzká skříň o hloubce 35–40 cm pojme zavěšené oblečení, pokud zvolíš ramínka otočená podélně ke dveřím. Pro běžnou rodinu počítej s šířkou skříně alespoň 90–120 cm, ideálně s kombinací poliček, tyče a zásuvek na drobnosti." },
                  { q: "Vyplatí se v malé předsíni lavice na boty?", a: "Ano, i úzká lavice o hloubce 25–30 cm usnadní obouvání a často skrývá úložný prostor uvnitř sedáku nebo pod ním. Pokud na ni není místo, stačí i sklopná nástěnná lavička, která prostor nezabírá, když se nepoužívá." },
                  { q: "Jaká podlaha je do předsíně nejvhodnější?", a: "Nejlépe poslouží keramická dlažba nebo vinylová podlaha, které snesou vlhkost, písek a sůl z bot a snadno se čistí. Laminátu a masivní dřevěné podlaze se v této zóně raději vyhni, protože vlhkost jim dlouhodobě škodí." },
                  { q: "Jak osvětlit temnou předsíň bez okna?", a: "Kombinuj stropní svítidlo se širokým rozptylem světla a doplňkové zdroje – LED pásek u zrcadla nebo nástěnné svítidlo u vstupních dveří. Teplota světla mezi 3000–3500 K působí příjemně a zároveň dostatečně prosvětlí i bezokenní prostor." },
                  { q: "Kam umístit zrcadlo v předsíni?", a: "Ideální je umístění naproti vstupním dveřím nebo na boční stěnu v zorném poli při odchodu z bytu, ne přímo proti dveřím v ose pohledu z chodby ven. Větší zrcadlo navíc opticky zvětší i ten nejmenší prostor." },
                  { q: "Jak řešit úložný prostor v úzké a dlouhé předsíni?", a: "V úzké předsíni se osvědčí vysoké a štíhlé skříně po celé délce jedné stěny, případně otevřené háčky a polička nad lavicí na opačné straně. Důležité je nechat průchozí šíři alespoň 80–90 cm, aby prostor nepůsobil stísněně." },
                ].map(({ q, a }) => (
                  <details key={q} className="faq-item">
                    <summary className="faq-summary">{q}<span className="faq-icon">▾</span></summary>
                    <div className="faq-body">{a}</div>
                  </details>
                ))}
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/planovani-predsine-a-vstupu" title="Jak naplánovat předsíň a vstupní prostor v bytě" />

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
                <li><a href="#uloziste">Úložný prostor</a></li>
                <li><a href="#lavice">Lavice a obouvání</a></li>
                <li><a href="#osvetleni">Osvětlení vstupu</a></li>
                <li><a href="#podlaha">Podlahová krytina</a></li>
                <li><a href="#zrcadlo">Zrcadlo a doplňky</a></li>
                <li><a href="#uzka">Úzká předsíň</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/stehovani" className="sidebar-cat-link">🏠 Stěhování & rekonstrukce<span>Více článků →</span></Link>
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
        .faq-list{display:flex;flex-direction:column;gap:8px}
        .faq-item{border:1px solid var(--border);border-radius:10px;overflow:hidden;background:#fff}
        .faq-summary{font-size:15px;font-weight:600;padding:16px 20px;cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center;transition:background 120ms}
        .faq-summary:hover{background:var(--surface)}
        .faq-icon{font-size:14px;font-weight:400;flex-shrink:0;margin-left:12px;transition:transform 150ms}
        details[open] .faq-icon{transform:rotate(180deg)}
        .faq-body{font-size:14px;line-height:1.65;color:var(--muted);font-weight:300;padding:0 20px 16px}
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
        @media(max-width:600px){.article-layout{padding:32px 0 60px}}
      `}</style>
    </>
  );
}
