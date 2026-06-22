import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Rekonstrukce pronajatého bytu – co můžete a co ne (2026)",
  description: "Co si nájemník může v pronajatém bytě upravit bez souhlasu a co vyžaduje písemné svolení pronajímatele. Praktický přehled, časté spory a tipy, jak se vyhnout problémům při skončení nájmu.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/rekonstrukce-bytu-v-najmu-co-je-mozne" },
  openGraph: {
    title: "Rekonstrukce pronajatého bytu – co můžete a co ne (2026)",
    description: "Co si nájemník může v pronajatém bytě upravit bez souhlasu a co vyžaduje písemné svolení pronajímatele.",
    url: "https://www.domovniguru.cz/blog/rekonstrukce-bytu-v-najmu-co-je-mozne",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "article",
    publishedTime: "2026-06-17T08:00:00Z",
    modifiedTime: "2026-06-17T08:00:00Z",
    authors: ["DomovniGuru"],
    images: [{ url: "/api/og?title=Rekonstrukce%20pronajat%C3%A9ho%20bytu%20%E2%80%93%20co%20m%C5%AF%C5%BEete%20a%20co%20ne%20(2026)&cat=blog", width: 1200, height: 630, alt: "Rekonstrukce pronajatého bytu – co můžete a co ne (2026)" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rekonstrukce pronajatého bytu – co můžete a co ne (2026)",
    description: "Co si nájemník může upravit bez souhlasu a co vyžaduje písemné svolení pronajímatele.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/rekonstrukce-bytu-v-najmu-co-je-mozne#article",
    "headline": "Rekonstrukce pronajatého bytu – co můžete a co ne",
    "description": "Co si nájemník může v pronajatém bytě upravit bez souhlasu a co vyžaduje písemné svolení pronajímatele. Praktický přehled, časté spory a tipy, jak se vyhnout problémům při skončení nájmu.",
    "datePublished": "2026-06-17T08:00:00Z",
    "dateModified": "2026-06-17T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.domovniguru.cz/blog/rekonstrukce-bytu-v-najmu-co-je-mozne" },
    "inLanguage": "cs",
    "keywords": ["rekonstrukce bytu v nájmu", "úpravy pronajatého bytu", "souhlas pronajímatele s úpravami", "co může nájemník upravit", "malování bytu v nájmu", "uvedení bytu do původního stavu"]
  }, {
    "@type": "FAQPage",
    "@id": "https://www.domovniguru.cz/blog/rekonstrukce-bytu-v-najmu-co-je-mozne#faq",
    "mainEntity": [
      { "@type": "Question", "name": "Můžu v nájemním bytě přemalovat zeď bez souhlasu pronajímatele?", "acceptedAnswer": { "@type": "Answer", "text": "Přemalování zdí běžnou barvou se obecně považuje za drobnou úpravu, kterou nájemce může provést bez výslovného souhlasu. Rozumné je ale na konci nájmu zeď vrátit do původního nebo neutrálního odstínu, pokud smlouva neříká jinak – sytá nebo netradiční barva bývá zdrojem sporů při předávání." } },
      { "@type": "Question", "name": "Potřebuju souhlas pronajímatele na výměnu podlahy?", "acceptedAnswer": { "@type": "Answer", "text": "Ano. Výměna podlahy je zásah do vybavení bytu a obvykle se považuje za podstatnou změnu, která vyžaduje písemný souhlas pronajímatele. Bez něj riskujete, že budete muset na konci nájmu uvést podlahu do původního stavu na vlastní náklady." } },
      { "@type": "Question", "name": "Kdo platí za vylepšení bytu, která udělá nájemce?", "acceptedAnswer": { "@type": "Answer", "text": "Pokud nájemce investuje do bytu se souhlasem pronajímatele, je vhodné si písemně domluvit, jak se vylepšení vypořádá při skončení nájmu – zda bude nájemci proplaceno, započteno na nájemném, nebo zda úpravu nechá v bytě bez náhrady. Bez takové dohody může být nárok na náhradu sporný." } },
      { "@type": "Question", "name": "Musím byt po skončení nájmu uvést do původního stavu?", "acceptedAnswer": { "@type": "Answer", "text": "Pokud nájemní smlouva nestanoví jinak, je obvyklé, že nájemce vrátí byt do stavu, v jakém ho převzal, s ohledem na běžné opotřebení. Proto je dobré mít fotodokumentace stavu bytu při nastěhování i vystěhování pro případ sporu." } },
      { "@type": "Question", "name": "Mohu si v pronajatém bytě vyměnit kuchyňskou linku?", "acceptedAnswer": { "@type": "Answer", "text": "Výměna kuchyňské linky je zásah do vybavení bytu a patří mezi nejčastější zdroje spor mezi nájemcem a pronajímatelem. I když je linka stará, je rozumné výměnu předem písemně odsouhlasit a domluvit, co se s novou linkou stane po skončení nájmu." } },
      { "@type": "Question", "name": "Smím sám zasahovat do elektroinstalace nebo rozvodů vody?", "acceptedAnswer": { "@type": "Answer", "text": "Zásahy do elektroinstalace a rozvodů vody jsou rizikové z hlediska bezpečnosti i právní odpovědnosti a téměř vždy vyžadují písemný souhlas pronajímatele a provedení odborníkem. Neautorizovaný zásah může způsobit škodu, kterou bude muset nájemce uhradit." } }
    ]
  }, {
    "@type": "HowTo",
    "@id": "https://www.domovniguru.cz/blog/rekonstrukce-bytu-v-najmu-co-je-mozne#howto",
    "name": "Jak postupovat při úpravách pronajatého bytu",
    "description": "Praktický postup, jak si v pronajatém bytě udělat úpravy bez zbytečných sporů s pronajímatelem.",
    "step": [
      { "@type": "HowToStep", "name": "Zkontrolujte nájemní smlouvu", "text": "Nejdřív si přečtěte, co smlouva výslovně zakazuje nebo dovoluje. Smlouva má vždy přednost před obecnými očekáváními." },
      { "@type": "HowToStep", "name": "Rozlište drobné úpravy a podstatné změny", "text": "Drobné úpravy (malování, výměna svítidel, věšení obrazů) lze obvykle provést bez souhlasu. Podstatné změny (bourání příček, výměna podlahy, zásahy do rozvodů) vyžadují písemný souhlas." },
      { "@type": "HowToStep", "name": "Vyžádejte si písemný souhlas", "text": "U všeho, co přesahuje běžné úpravy, si vyžádejte souhlas písemně, klidně i e-mailem. Ústní souhlas se těžko prokazuje při sporu." },
      { "@type": "HowToStep", "name": "Domluvte si vypořádání investice", "text": "Pokud do bytu investujete, dohodněte si předem, jak se vylepšení vypořádá při skončení nájmu – proplacení, započtení nebo ponechání bez náhrady." },
      { "@type": "HowToStep", "name": "Pořiďte fotodokumentaci", "text": "Vyfoťte stav bytu při nastěhování i před vystěhováním. V případě sporu je to nejsilnější důkaz." },
      { "@type": "HowToStep", "name": "Uschovejte účtenky", "text": "Účtenky za materiál i práci uschovejte – budete je potřebovat, pokud budete chtít prokázat rozsah a cenu provedených úprav." }
    ]
  }, {
    "@type": "BreadcrumbList",
    "@id": "https://www.domovniguru.cz/blog/rekonstrukce-bytu-v-najmu-co-je-mozne#breadcrumb",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" },
      { "@type": "ListItem", "position": 3, "name": "Stěhování & rekonstrukce", "item": "https://www.domovniguru.cz/blog/kategorie/stehovani" },
      { "@type": "ListItem", "position": 4, "name": "Rekonstrukce bytu v nájmu – co je možné", "item": "https://www.domovniguru.cz/blog/rekonstrukce-bytu-v-najmu-co-je-mozne" }
    ]
  }]
};

const RELATED = [
  { title: "Jak naplánovat rekonstrukci bytu – rozpočet a pořadí prací", href: "/blog/planovani-rekonstrukce-bytu", read: "8 min" },
  { title: "Jak najít a prověřit řemeslníka", href: "/blog/najit-proveri-remeslnika", read: "5 min" },
  { title: "Jak odhadnout cenu rekonstrukce předem", href: "/blog/odhadnout-cenu-rekonstrukce", read: "5 min" },
  { title: "Checklist pro převzetí bytu", href: "/blog/prebrani-bytu-checklist", read: "4 min" },
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
              <span>Rekonstrukce bytu v nájmu</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏗️ Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 7 min čtení</span>
              </div>
              <h1 className="article-h1">Rekonstrukce pronajatého bytu – co můžete a co ne</h1>
              <p className="article-lead">Chcete si pronajatý byt trochu upravit, ale nevíte, co si můžete dovolit bez souhlasu majitele? Tady je praktický přehled, co je drobná úprava, co už je podstatná změna a jak se vyhnout sporu při skončení nájmu.</p>
              <div className="article-meta-row"><span>Aktualizováno: 17. června 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/rekonstrukce-bytu-v-najmu-co-je-mozne" title="Rekonstrukce pronajatého bytu – co můžete a co ne (2026)" />
            </header>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#smlouva">Co říká nájemní smlouva</a></li>
                <li><a href="#drobne-upravy">Drobné úpravy bez souhlasu</a></li>
                <li><a href="#souhlas">Úpravy vyžadující písemný souhlas</a></li>
                <li><a href="#kdo-plati">Kdo platí za vylepšení bytu</a></li>
                <li><a href="#konec-najmu">Co se stane při odchodu z bytu</a></li>
                <li><a href="#doporuceni">Praktická doporučení</a></li>
                <li><a href="#spory">Časté spory</a></li>
                <li><a href="#faq">Časté otázky (FAQ)</a></li>
              </ol>
            </nav>

            <section id="smlouva">
              <h2>Co říká nájemní smlouva</h2>
              <p>Než se pustíte do jakékoli úpravy bytu, vždy si nejdřív znovu přečtěte nájemní smlouvu. Smlouva má přednost před tím, co je „obvyklé" – pokud v ní pronajímatel výslovně zakázal třeba malování v jiné než bílé barvě nebo jakékoli vrtání do zdí, platí to bez ohledu na to, co byste čekali jinde.</p>
              <h3>Obvyklé úpravy vs. podstatné změny</h3>
              <p>V praxi se rozlišuje mezi <strong>obvyklými úpravami</strong>, které nájemce může provést bez zvláštního svolení, a <strong>podstatnými změnami</strong>, které zasahují do podstaty nebo vybavení bytu a vyžadují písemný souhlas pronajímatele. Hranice mezi nimi není vždy ostrá, a právě proto je dobré mít jasno už na začátku nájmu, ideálně přímo v textu smlouvy.</p>
              <ul>
                <li><strong>Obvyklá úprava:</strong> nezasahuje do konstrukce ani vybavení bytu, je snadno vratná a nemění hodnotu nemovitosti.</li>
                <li><strong>Podstatná změna:</strong> zasahuje do dispozice, rozvodů nebo trvalého vybavení bytu, případně vyžaduje stavební zásah.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud smlouva mlčí a nejste si jistí, zda je úprava „drobná", napište pronajímateli krátký e-mail s popisem plánované úpravy. I jen vlastní iniciativa s žádostí o vyjádření vás chrání před nedorozuměním.</div>
            </section>

            <section id="drobne-upravy">
              <h2>Drobné úpravy bez souhlasu pronajímatele</h2>
              <p>Mezi úpravy, které lze v naprosté většině nájmů provést bez zvláštního souhlasu, patří:</p>
              <ul>
                <li><strong>Přemalování zdí</strong> – běžnou barvou, bez zásahu do podkladu. Je ale rozumné očekávat, že byt na konci nájmu vrátíte do neutrálního nebo původního odstínu, pokud smlouva nestanoví jinak.</li>
                <li><strong>Výměna svítidel</strong> – pokud nezasahujete do elektroinstalace ve zdi, jen měníte stínidlo nebo svítidlo na stávající přípojce.</li>
                <li><strong>Věšení obrazů a poliček</strong> – drobné otvory po hřebíčcích nebo hmoždinkách se obecně považují za běžné opotřebení.</li>
                <li><strong>Drobné dekorativní úpravy</strong> – výměna klik, stínidel, koupelnových doplňků, pokud je lze snadno vrátit zpět.</li>
              </ul>
              <p>I u drobných úprav platí jedno pravidlo – pokud něco demontujete (například starý lustr), původní vybavení uschovejte. Při skončení nájmu ho budete pravděpodobně muset vrátit zpět.</p>
            </section>

            <section id="souhlas">
              <h2>Úpravy vyžadující písemný souhlas pronajímatele</h2>
              <p>U následujících úprav byste se bez písemného souhlasu pronajímatele neměli pohnout ani o krok – jde o zásahy, které mění byt podstatně a jsou obtížně vratné:</p>
              <h3>Bourání a stavění příček</h3>
              <p>Jakákoli změna dispozice bytu – zbourání nebo postavení nové příčky – je podstatná změna. Bez souhlasu riskujete, že budete muset byt na vlastní náklady uvést do původního stavu, a navíc se vystavujete riziku porušení nájemní smlouvy.</p>
              <h3>Výměna podlahy</h3>
              <p>Nová podlaha (dlažba, plovoucí podlaha, parkety) je zásah do vybavení bytu. I když starou podlahu nemáte rádi, bez písemného souhlasu se výměna nedoporučuje.</p>
              <h3>Zásahy do elektroinstalace nebo rozvodů vody</h3>
              <p>Přidání nové zásuvky, přesunutí vedení nebo úprava rozvodů vody jsou rizikové zásahy, které navíc obvykle musí provést odborník s příslušnou kvalifikací. Neautorizovaný zásah může způsobit škodu, za kterou ponese odpovědnost nájemce.</p>
              <div className="article-tip"><strong>⚠️ Nikdy nezasahujte do nosných konstrukcí bez souhlasu.</strong> Odstranění nebo narušení nosné zdi či sloupu může ohrozit statiku celého domu a jde o zásah, který bez projektové dokumentace a souhlasu nepřipadá v úvahu.</div>
            </section>

            <section id="kdo-plati">
              <h2>Kdo platí za vylepšení bytu</h2>
              <p>Pokud nájemce investuje do bytu se souhlasem pronajímatele – například novou kuchyňskou linkou nebo lepší podlahou – je dobré si dopředu písemně domluvit, jak se taková investice vypořádá při skončení nájmu.</p>
              <ul>
                <li><strong>Proplacení:</strong> pronajímatel nájemci uhradí část nebo celou částku investice po skončení nájmu.</li>
                <li><strong>Započtení na nájemném:</strong> investice se rozloží do snížených splátek nájmu po dohodnutou dobu.</li>
                <li><strong>Ponechání bez náhrady:</strong> úprava zůstane v bytě a nájemce za ni nedostane žádnou kompenzaci – ale alespoň to má jasně domluvené předem.</li>
              </ul>
              <p>Bez písemné dohody může být nárok na náhradu sporný a vymáhání obtížné – nemáte čím prokázat, co bylo dohodnuto a za jakých podmínek.</p>
            </section>

            <section id="konec-najmu">
              <h2>Co se stane při odchodu z bytu</h2>
              <p>Pokud nájemní smlouva nestanoví jinak, je obvyklé byt při skončení nájmu vrátit do stavu, v jakém jste ho převzali, s přihlédnutím k běžnému opotřebení. To znamená, že neschválené úpravy budete muset odstranit nebo vrátit zpět na vlastní náklady.</p>
              <h3>Fotodokumentace je vaše pojistka</h3>
              <p>Vyfoťte byt důkladně při nastěhování – stěny, podlahy, vybavení, případné stávající nedostatky. Stejně důkladně byt vyfoťte i před vystěhováním. V případě sporu o stav bytu jsou fotografie s časovým razítkem nejsilnějším důkazem, který máte k dispozici.</p>
            </section>

            <section id="doporuceni">
              <h2>Praktická doporučení</h2>
              <ul>
                <li><strong>Vše domlouvejte písemně</strong> – stačí i e-mail s popisem úpravy a souhlasem pronajímatele. Ústní dohoda se v případě sporu těžko prokazuje.</li>
                <li><strong>Uschovejte účtenky</strong> za materiál i odvedenou práci – budou potřeba, pokud budete chtít prokázat rozsah a cenu úprav.</li>
                <li><strong>Nikdy nezasahujte do nosných konstrukcí</strong> bez písemného souhlasu a odborného posouzení.</li>
                <li><strong>Komunikujte včas</strong> – lepší je zeptat se předem, než řešit spor po faktu.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud plánujete větší úpravu, popište pronajímateli i to, co se stane po skončení nájmu – zda úpravu odstraníte, ponecháte, nebo zda požadujete náhradu. Konkrétní dohoda předchází většině pozdějších sporů.</div>
            </section>

            <section id="spory">
              <h2>Časté spory mezi nájemci a pronajímateli</h2>
              <ul>
                <li><strong>Malování v jiné barvě než původní:</strong> sytá nebo netradiční barva (tmavě modrá, černá zeď) bývá problém při předávání bytu – pronajímatel může chtít přemalování zpět na neutrální odstín na náklady nájemce.</li>
                <li><strong>Vrtání do obkladů:</strong> poškozené nebo prasklé obklady v koupelně či kuchyni po neopatrném vrtání jsou jedním z nejčastějších důvodů srážky z kauce.</li>
                <li><strong>Výměna kuchyňské linky:</strong> i když je stará linka v nevyhovujícím stavu, výměna bez souhlasu může vést ke sporu o to, komu nová linka patří a co s ní bude po skončení nájmu.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Můžu v nájemním bytě přemalovat zeď bez souhlasu pronajímatele?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Přemalování zdí běžnou barvou se obecně považuje za drobnou úpravu, kterou nájemce může provést bez výslovného souhlasu. Rozumné je ale na konci nájmu zeď vrátit do původního nebo neutrálního odstínu, pokud smlouva neříká jinak – sytá nebo netradiční barva bývá zdrojem sporů při předávání.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Potřebuju souhlas pronajímatele na výměnu podlahy?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ano. Výměna podlahy je zásah do vybavení bytu a obvykle se považuje za podstatnou změnu, která vyžaduje písemný souhlas pronajímatele. Bez něj riskujete, že budete muset na konci nájmu uvést podlahu do původního stavu na vlastní náklady.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Kdo platí za vylepšení bytu, která udělá nájemce?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Pokud nájemce investuje do bytu se souhlasem pronajímatele, je vhodné si písemně domluvit, jak se vylepšení vypořádá při skončení nájmu – zda bude nájemci proplaceno, započteno na nájemném, nebo zda úpravu nechá v bytě bez náhrady. Bez takové dohody může být nárok na náhradu sporný.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Musím byt po skončení nájmu uvést do původního stavu?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Pokud nájemní smlouva nestanoví jinak, je obvyklé, že nájemce vrátí byt do stavu, v jakém ho převzal, s ohledem na běžné opotřebení. Proto je dobré mít fotodokumentaci stavu bytu při nastěhování i vystěhování pro případ sporu.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Mohu si v pronajatém bytě vyměnit kuchyňskou linku?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Výměna kuchyňské linky je zásah do vybavení bytu a patří mezi nejčastější zdroje sporů mezi nájemcem a pronajímatelem. I když je linka stará, je rozumné výměnu předem písemně odsouhlasit a domluvit, co se s novou linkou stane po skončení nájmu.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Smím sám zasahovat do elektroinstalace nebo rozvodů vody?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Zásahy do elektroinstalace a rozvodů vody jsou rizikové z hlediska bezpečnosti i právní odpovědnosti a téměř vždy vyžadují písemný souhlas pronajímatele a provedení odborníkem. Neautorizovaný zásah může způsobit škodu, kterou bude muset nájemce uhradit.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/rekonstrukce-bytu-v-najmu-co-je-mozne" title="Rekonstrukce pronajatého bytu – co můžete a co ne (2026)" />

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
                <li><a href="#smlouva">Nájemní smlouva</a></li>
                <li><a href="#drobne-upravy">Drobné úpravy</a></li>
                <li><a href="#souhlas">Úpravy se souhlasem</a></li>
                <li><a href="#kdo-plati">Kdo platí za vylepšení</a></li>
                <li><a href="#konec-najmu">Odchod z bytu</a></li>
                <li><a href="#doporuceni">Doporučení</a></li>
                <li><a href="#spory">Časté spory</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/stehovani" className="sidebar-cat-link">🏗️ Stěhování & rekonstrukce<span>20 článků →</span></Link>
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
