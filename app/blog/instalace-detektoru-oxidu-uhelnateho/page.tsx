import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Detektor oxidu uhelnatého (CO) doma – kde ho umístit a jak vybrat",
  description: "Proč je detektor CO důležitý u plynového kotle, karmy nebo krbu, kam ho umístit, jak často testovat baterii a senzor a jaký typ vybrat.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/instalace-detektoru-oxidu-uhelnateho" },
  openGraph: {
    title: "Detektor oxidu uhelnatého (CO) doma – kde ho umístit a jak vybrat",
    description: "Proč je detektor CO důležitý u plynového kotle, karmy nebo krbu, kam ho umístit, jak často testovat baterii a senzor a jaký typ vybrat.",
    url: "https://www.domovniguru.cz/blog/instalace-detektoru-oxidu-uhelnateho",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "article",
    publishedTime: "2026-06-22T08:00:00Z",
    modifiedTime: "2026-06-22T08:00:00Z",
    authors: ["DomovniGuru"],
    images: [{ url: "/api/og?title=Detektor%20oxidu%20uhelnat%C3%A9ho%20(CO)%20doma%20%E2%80%93%20kde%20ho%20um%C3%ADstit%20a%20jak%20vybrat&cat=blog", width: 1200, height: 630, alt: "Detektor oxidu uhelnatého (CO) doma – kde ho umístit a jak vybrat" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Detektor oxidu uhelnatého (CO) doma",
    description: "Kde ho umístit, jak vybrat a jak často testovat – kompletní průvodce.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.domovniguru.cz/blog/instalace-detektoru-oxidu-uhelnateho#article",
      "headline": "Detektor oxidu uhelnatého (CO) doma – kde ho umístit a jak vybrat",
      "description": "Proč je detektor CO důležitý u plynového kotle, karmy nebo krbu, kam ho umístit, jak často testovat baterii a senzor a jaký typ vybrat.",
      "datePublished": "2026-06-22T08:00:00Z",
      "dateModified": "2026-06-22T08:00:00Z",
      "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.domovniguru.cz/blog/instalace-detektoru-oxidu-uhelnateho" },
      "inLanguage": "cs",
      "keywords": ["detektor oxidu uhelnatého", "CO detektor doma", "kde umístit detektor CO", "otrava oxidem uhelnatým", "hlásič CO plynový kotel"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.domovniguru.cz/blog/instalace-detektoru-oxidu-uhelnateho#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" },
        { "@type": "ListItem", "position": 3, "name": "Elektrika & osvětlení", "item": "https://www.domovniguru.cz/blog/kategorie/elektrika" },
        { "@type": "ListItem", "position": 4, "name": "Detektor oxidu uhelnatého (CO) doma", "item": "https://www.domovniguru.cz/blog/instalace-detektoru-oxidu-uhelnateho" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.domovniguru.cz/blog/instalace-detektoru-oxidu-uhelnateho#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Je detektor CO ze zákona povinný?", "acceptedAnswer": { "@type": "Answer", "text": "V Česku není detektor CO v bytech a domech ze zákona povinný tak jako hlásič kouře, ale výrobci spotřebičů a hasiči ho důrazně doporučují všude, kde je plynový kotel, karma, krbová nebo kachlová kamna či garáž propojená s obytným prostorem." } },
        { "@type": "Question", "name": "Jaký je rozdíl mezi detektorem CO a detektorem kouře?", "acceptedAnswer": { "@type": "Answer", "text": "Detektor kouře reaguje na částice kouře a hlavně varuje před požárem, detektor CO měří koncentraci oxidu uhelnatého ve vzduchu – plynu, který je bez barvy a zápachu a vzniká při nedokonalém spalování. Jeden přístroj druhý nenahradí, je vhodné mít oba." } },
        { "@type": "Question", "name": "Kam přesně detektor CO umístit?", "acceptedAnswer": { "@type": "Answer", "text": "Nejvhodnější je umístění do ložnice nebo na chodbu poblíž ložnic, ve výšce dýchací zóny (přibližně 1,2–1,5 m od podlahy) nebo na strop, a dále do místnosti se spotřebičem, ale ne přímo nad něj ani příliš blízko, aby nedocházelo k falešným poplachům." } },
        { "@type": "Question", "name": "Jak často se testuje detektor CO a kdy se mění senzor?", "acceptedAnswer": { "@type": "Answer", "text": "Funkčnost stiskem testovacího tlačítka je dobré ověřit jednou měsíčně, baterii u bateriových modelů obvykle jednou ročně. Elektrochemický senzor má omezenou životnost, typicky 5–7 let, po které je nutné vyměnit celý detektor, i když navenek funguje." } },
        { "@type": "Question", "name": "Co dělat, když detektor CO spustí poplach?", "acceptedAnswer": { "@type": "Answer", "text": "Okamžitě otevři okna a dveře, vyveď všechny osoby a zvířata z bytu na čerstvý vzduch, vypni spotřebiče, pokud to lze bezpečně udělat u dveří, a nevracej se dovnitř. Při příznacích jako bolest hlavy nebo závratě volej 155, jinak kontaktuj revizního technika nebo servis spotřebiče." } },
        { "@type": "Question", "name": "Stačí bateriový detektor, nebo je lepší síťový se zálohou?", "acceptedAnswer": { "@type": "Answer", "text": "Bateriový detektor je jednodušší na instalaci a stačí pro většinu bytů. Síťový model se záložní baterií je výhodnější tam, kde chceš propojení více detektorů v domě nebo napojení na chytrou domácnost, a navíc odpadá starost s výměnou baterie." } },
      ],
    },
    {
      "@type": "HowTo",
      "@id": "https://www.domovniguru.cz/blog/instalace-detektoru-oxidu-uhelnateho#howto",
      "name": "Detektor oxidu uhelnatého (CO) doma – kde ho umístit a jak vybrat",
      "description": "Proč je detektor CO důležitý u plynového kotle, karmy nebo krbu, kam ho umístit, jak často testovat baterii a senzor a jaký typ vybrat.",
      "step": [
        { "@type": "HowToStep", "name": "Vyhodnocení rizika v domácnosti", "text": "Zjisti, které spotřebiče v domácnosti spalují palivo – plynový kotel, karma, krbová kamna, garáž – a podle toho urči počet potřebných detektorů." },
        { "@type": "HowToStep", "name": "Výběr typu detektoru", "text": "Zvol mezi bateriovým a síťovým modelem se zálohou, případně detektorem propojeným do chytré domácnosti s upozorněním do mobilu." },
        { "@type": "HowToStep", "name": "Umístění v ložnicích a u spotřebičů", "text": "Detektor umísti do ložnic nebo na chodbu před nimi a do místnosti se spotřebičem, ve výšce dýchací zóny nebo na strop, mimo přímý dosah páry a tepla." },
        { "@type": "HowToStep", "name": "Instalace a zapnutí", "text": "Detektor připevni podle návodu výrobce, u síťových modelů nech zapojení provést elektrikářem, a po instalaci provede počáteční test." },
        { "@type": "HowToStep", "name": "Pravidelné testování", "text": "Jednou měsíčně stiskni testovací tlačítko, jednou ročně vyměň baterii u bateriových modelů a sleduj datum expirace senzoru." },
        { "@type": "HowToStep", "name": "Výměna po skončení životnosti", "text": "Po 5–7 letech, nebo dle doporučení výrobce, detektor vyměň za nový bez ohledu na to, že stále signalizuje funkčnost." },
      ],
    },
  ],
};

const RELATED = [
  { title: "Jak funguje proudový chránič (RCD)", href: "/blog/jak-funguje-proudovy-chranic", read: "5 min" },
  { title: "Proč vypadává jistič", href: "/blog/proc-vypadava-jistic", read: "5 min" },
  { title: "Jak fungují pojistky", href: "/blog/jak-funguji-pojistky", read: "5 min" },
  { title: "Záložní zdroj a generátor pro domácnost", href: "/blog/zalozni-zdroj-generator-pro-domacnost", read: "6 min" },
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
              <Link href="/blog/kategorie/elektrika">Elektrika & osvětlení</Link><span className="breadcrumb-sep">/</span>
              <span>Detektor oxidu uhelnatého (CO) doma</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">⚡ Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Detektor oxidu uhelnatého (CO) doma – kde ho umístit a jak vybrat</h1>
              <p className="article-lead">Oxid uhelnatý nemá barvu ani zápach, a přesto patří mezi nejčastější příčiny smrtelných otrav v domácnostech s plynovým kotlem, karmou nebo krbem. Detektor CO za pár stovek korun je jediný způsob, jak únik plynu včas odhalit – ukážeme, kam ho umístit, jak vybrat a jak o něj pečovat.</p>
              <div className="article-meta-row">
                <span>Aktualizováno: 22. června 2026</span><span>·</span><span>DomovniGuru</span>
              </div>
              <ShareButtons url="https://www.domovniguru.cz/blog/instalace-detektoru-oxidu-uhelnateho" title="Detektor oxidu uhelnatého (CO) doma – kde ho umístit a jak vybrat" />
            </header>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#proc">Proč je CO detektor důležitý</a></li>
                <li><a href="#rozdil">Rozdíl mezi detektorem CO a kouře</a></li>
                <li><a href="#umisteni">Kam detektor umístit</a></li>
                <li><a href="#typy">Bateriový, síťový nebo chytrý detektor</a></li>
                <li><a href="#test">Testování a výměna baterie či senzoru</a></li>
                <li><a href="#poplach">Co dělat při spuštění poplachu</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="proc">
              <h2>Proč je CO detektor důležitý</h2>
              <p>Oxid uhelnatý (CO) vzniká při nedokonalém spalování paliva – plynu, dřeva, uhlí nebo benzínu. Vzniká nejčastěji u špatně seřízeného nebo nevyvětraného plynového kotle, karmy, krbových kamen, ale i u motoru auta běžícího v uzavřené garáži propojené s obytným prostorem. Protože je plyn bez barvy a bez zápachu, člověk si otravu často neuvědomí, dokud se neobjeví závažné příznaky.</p>
              <h3>Domácnosti s nejvyšším rizikem</h3>
              <p>Riziko je výrazně vyšší v bytech a domech s lokálním topením na plyn nebo tuhá paliva, s karmou v koupelně, s krbovými kamny bez vlastního přívodu vzduchu nebo s nedostatečně dimenzovaným komínem. Stejně tak ohrožené jsou byty nad garáží nebo s garáží přiléhající k obytné místnosti.</p>
              <h3>Příznaky otravy</h3>
              <p>Mírná otrava se projevuje bolestí hlavy, únavou, závratěmi a nevolností – příznaky, které lze snadno zaměnit za chřipku nebo únavu. Při vyšší koncentraci CO následuje zmatenost, ztráta vědomí a bez rychlého zásahu může otrava skončit smrtí. Detektor je v tomto ohledu jediný spolehlivý způsob včasného varování, protože lidské smysly plyn nezachytí.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud máš doma plynový kotel nebo karmu, nech jednou ročně provést servisní kontrolu a kontrolu odtahu spalin – funkční detektor CO je doplněk, nikoli náhrada za řádnou údržbu spotřebiče.</div>
            </section>

            <section id="rozdil">
              <h2>Rozdíl mezi detektorem CO a detektorem kouře</h2>
              <p>Detektor kouře a detektor CO řeší dvě různá rizika a jeden přístroj nenahrazuje druhý.</p>
              <h3>Detektor kouře</h3>
              <p>Hlásič kouře reaguje na částice ve vzduchu vznikající při hoření a varuje před požárem. Je vhodný do každé domácnosti bez ohledu na typ vytápění, protože riziko požáru hrozí i tam, kde se nepoužívá plyn ani tuhá paliva.</p>
              <h3>Detektor CO</h3>
              <p>Detektor oxidu uhelnatého měří přímo koncentraci CO ve vzduchu pomocí elektrochemického senzoru a spustí poplach dříve, než dojde k nebezpečné koncentraci pro zdraví. Je nezbytný zejména tam, kde se v domácnosti spaluje palivo.</p>
              <h3>Kombinovaná řešení</h3>
              <p>Na trhu existují i kombinované hlásiče kouře a CO v jednom těle. Jsou praktické do menších bytů, kde nechceš instalovat dva samostatné přístroje, ale v domech s více zdroji rizika je často lepší mít oddělené detektory rozmístěné podle konkrétních míst ohrožení.</p>
            </section>

            <section id="umisteni">
              <h2>Kam detektor CO umístit</h2>
              <p>Správné umístění rozhoduje o tom, jak rychle detektor zachytí únik plynu a stihne varovat obyvatele domu.</p>
              <h3>Ložnice a chodby</h3>
              <p>Protože k otravě CO často dochází ve spánku, je klíčové mít detektor v ložnici nebo na chodbě v bezprostřední blízkosti ložnic – pouze tak má šanci probudit spící osoby včas.</p>
              <h3>Místnost se spotřebičem</h3>
              <p>Druhý detektor patří do místnosti s plynovým kotlem, karmou nebo krbovými kamny. Neumísťuj ho ale přímo nad spotřebič ani příliš blízko – mohlo by docházet k falešným poplachům kvůli běžným spalinám při zapálení. Výrobci doporučují odstup alespoň 1–3 metry podle konkrétního modelu.</p>
              <h3>Výška a okolí</h3>
              <p>CO se ve vzduchu rozptyluje rovnoměrně, takže výška není tak kritická jako u detektoru kouře, ale doporučuje se umístění v dýchací zóně, zhruba 1,2–1,5 m nad podlahou, nebo na strop. Vyhni se rohům, místům za nábytkem, blízkosti oken a dveří s průvanem a vlhkým prostorům jako koupelna.</p>
              <h3>Vícepodlažní dům</h3>
              <p>V domě s více patry je vhodné mít alespoň jeden detektor na každém podlaží, zejména pokud se na něm nachází ložnice nebo spotřebič spalující palivo.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> U garáže propojené dveřmi s obytnou částí domu zvaž detektor i v prostoru chodby mezi garáží a obytnými místnostmi – výfukové plyny z nastartovaného auta jsou rovněž bohatým zdrojem CO.</div>
            </section>

            <section id="typy">
              <h2>Bateriový, síťový nebo chytrý detektor</h2>
              <p>Výběr typu detektoru závisí na velikosti domácnosti, počtu potřebných míst a tom, jestli chceš upozornění i mimo dům.</p>
              <h3>Bateriové detektory</h3>
              <p>Nejjednodušší na instalaci – stačí je připevnit na zeď nebo strop pomocí šroubů či oboustranné pásky. Vhodné do bytů a menších domácností. Nevýhodou je nutnost pravidelně kontrolovat a měnit baterii.</p>
              <h3>Síťové detektory se zálohou</h3>
              <p>Napájí se ze sítě 230 V, baterie slouží jen jako záloha při výpadku proudu. Instalaci síťového modelu přenecháme elektrikáři, protože jde o zásah do elektroinstalace. Výhodou je, že odpadá běžná starost s výměnou baterií a více detektorů lze propojit, aby spustily poplach společně.</p>
              <h3>Chytré detektory</h3>
              <p>Modely s Wi-Fi nebo Z-Wave/Zigbee modulem posílají upozornění do mobilní aplikace, takže se o úniku dozvíš i mimo domov. Hodí se zejména do chalup, pronajímaných bytů nebo domácností se staršími či méně mobilními obyvateli, kde rodina chce mít přehled na dálku.</p>
              <ul>
                <li><strong>Malý byt s jedním spotřebičem</strong> – stačí jeden kvalitní bateriový detektor v ložnici nebo na chodbě</li>
                <li><strong>Rodinný dům s kotlem a krbem</strong> – kombinace více propojených síťových detektorů</li>
                <li><strong>Chalupa nebo pronájem</strong> – chytrý detektor s upozorněním do telefonu</li>
              </ul>
            </section>

            <section id="test">
              <h2>Testování a výměna baterie či senzoru</h2>
              <p>I nejlepší detektor je k ničemu, pokud není funkční ve chvíli, kdy je potřeba.</p>
              <h3>Měsíční test</h3>
              <p>Jednou měsíčně stiskni testovací tlačítko na přístroji – ozve se zvukový signál potvrzující, že siréna i elektronika fungují. Tento test ale neprověřuje samotný senzor CO, pouze elektroniku a sirénu.</p>
              <h3>Výměna baterie</h3>
              <p>U bateriových modelů je vhodné měnit baterii jednou ročně bez ohledu na to, jestli přístroj signalizuje vybití – dobrým zvykem je spojit výměnu baterií u všech detektorů v domě s jedním pevným datem, například přechodem na zimní čas.</p>
              <h3>Životnost senzoru</h3>
              <p>Elektrochemický senzor CO má omezenou životnost, typicky 5 až 7 let podle výrobce, poté ztrácí přesnost i v případě, že je baterie nová a elektronika funguje. Datum exspirace senzoru bývá vyznačeno na zadní straně přístroje – po jeho uplynutí je nutné koupit nový detektor, oprava ani výměna senzoru samostatně obvykle není možná.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Datum výměny detektoru si poznač do kalendáře v mobilu hned při instalaci – snadno se na něj po letech zapomene, zatímco riziko zůstává stejné.</div>
            </section>

            <section id="poplach">
              <h2>Co dělat při spuštění poplachu</h2>
              <p>Reakce na poplach CO detektoru musí být rychlá, protože příznaky otravy se zhoršují postupně a často nenápadně.</p>
              <h3>Okamžité kroky</h3>
              <ul>
                <li>Otevři okna a dveře, aby se prostor provětral</li>
                <li>Vyveď všechny osoby a domácí zvířata z bytu nebo domu na čerstvý vzduch</li>
                <li>Pokud je to možné bez zdržení, vypni spotřebič spalující palivo cestou ven</li>
                <li>Nevracej se zpět dovnitř, dokud prostor nezkontroluje odborník nebo se neprovětrá</li>
              </ul>
              <h3>Kdy volat záchranku</h3>
              <p>Pokud se u kohokoliv objeví bolest hlavy, závratě, zmatenost nebo nevolnost, volej linku 155 a popiš podezření na otravu oxidem uhelnatým. Tyto příznaky se mohou rozvinout i poté, co je osoba už mimo budovu.</p>
              <h3>Po poplachu</h3>
              <p>Než spotřebič znovu použiješ, nech ho zkontrolovat servisním technikem nebo kominíkem – příčinou bývá ucpaný komín, špatný odtah spalin nebo poškozený výměník kotle. Detektor po poplachu nezakrývej ani nedeaktivuj, dokud nebude příčina jednoznačně vyřešena.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Je detektor CO ze zákona povinný?", a: "V Česku není detektor CO v bytech a domech ze zákona povinný tak jako hlásič kouře, ale výrobci spotřebičů a hasiči ho důrazně doporučují všude, kde je plynový kotel, karma, krbová nebo kachlová kamna či garáž propojená s obytným prostorem." },
                  { q: "Jaký je rozdíl mezi detektorem CO a detektorem kouře?", a: "Detektor kouře reaguje na částice kouře a hlavně varuje před požárem, detektor CO měří koncentraci oxidu uhelnatého ve vzduchu – plynu, který je bez barvy a zápachu a vzniká při nedokonalém spalování. Jeden přístroj druhý nenahradí, je vhodné mít oba." },
                  { q: "Kam přesně detektor CO umístit?", a: "Nejvhodnější je umístění do ložnice nebo na chodbu poblíž ložnic, ve výšce dýchací zóny (přibližně 1,2–1,5 m od podlahy) nebo na strop, a dále do místnosti se spotřebičem, ale ne přímo nad něj ani příliš blízko, aby nedocházelo k falešným poplachům." },
                  { q: "Jak často se testuje detektor CO a kdy se mění senzor?", a: "Funkčnost stiskem testovacího tlačítka je dobré ověřit jednou měsíčně, baterii u bateriových modelů obvykle jednou ročně. Elektrochemický senzor má omezenou životnost, typicky 5–7 let, po které je nutné vyměnit celý detektor, i když navenek funguje." },
                  { q: "Co dělat, když detektor CO spustí poplach?", a: "Okamžitě otevři okna a dveře, vyveď všechny osoby a zvířata z bytu na čerstvý vzduch, vypni spotřebiče, pokud to lze bezpečně udělat u dveří, a nevracej se dovnitř. Při příznacích jako bolest hlavy nebo závratě volej 155, jinak kontaktuj revizního technika nebo servis spotřebiče." },
                  { q: "Stačí bateriový detektor, nebo je lepší síťový se zálohou?", a: "Bateriový detektor je jednodušší na instalaci a stačí pro většinu bytů. Síťový model se záložní baterií je výhodnější tam, kde chceš propojení více detektorů v domě nebo napojení na chytrou domácnost, a navíc odpadá starost s výměnou baterie." },
                ].map(({ q, a }) => (
                  <details key={q} className="faq-item">
                    <summary className="faq-summary">{q}<span className="faq-icon">▾</span></summary>
                    <div className="faq-body">{a}</div>
                  </details>
                ))}
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/instalace-detektoru-oxidu-uhelnateho" title="Detektor oxidu uhelnatého (CO) doma – kde ho umístit a jak vybrat" />

            <section className="related-section">
              <h2>Související články</h2>
              <div className="related-grid">
                {RELATED.map((r) => (
                  <Link key={r.href} href={r.href} className="card">
                    <div className="card-eyebrow-row"><span>Elektrika & osvětlení</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#proc">Proč je CO detektor důležitý</a></li>
                <li><a href="#rozdil">Detektor CO vs. kouře</a></li>
                <li><a href="#umisteni">Kam detektor umístit</a></li>
                <li><a href="#typy">Bateriový, síťový, chytrý</a></li>
                <li><a href="#test">Testování a senzor</a></li>
                <li><a href="#poplach">Co dělat při poplachu</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/elektrika" className="sidebar-cat-link">⚡ Elektrika & osvětlení<span>Více článků →</span></Link>
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
