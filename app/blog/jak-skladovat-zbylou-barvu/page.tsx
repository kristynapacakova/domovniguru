import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak správně skladovat a uchovat zbylou barvu 2026",
  description: "Zbylá barva nemusí zaschnout ani zplesnivět. Jak plechovku správně uzavřít, kde a jak dlouho barvu skladovat a jak poznat, že je už nepoužitelná.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-skladovat-zbylou-barvu" },
  openGraph: {
    title: "Jak správně skladovat a uchovat zbylou barvu 2026",
    description: "Jak plechovku správně uzavřít, kde barvu skladovat a jak dlouho vydrží použitelná.",
    url: "https://www.domovniguru.cz/blog/jak-skladovat-zbylou-barvu",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "article",
    publishedTime: "2026-06-17T08:00:00Z",
    modifiedTime: "2026-06-17T08:00:00Z",
    authors: ["DomovniGuru"],
    images: [{ url: "/api/og?title=Jak%20spr%C3%A1vn%C4%9B%20skladovat%20a%20uchovat%20zbylou%20barvu%202026&cat=blog", width: 1200, height: 630, alt: "Jak správně skladovat a uchovat zbylou barvu 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jak správně skladovat a uchovat zbylou barvu 2026",
    description: "Jak plechovku uzavřít, kde skladovat a jak dlouho barva vydrží použitelná.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.domovniguru.cz/blog/jak-skladovat-zbylou-barvu#article",
      "headline": "Jak správně skladovat a uchovat zbylou barvu",
      "description": "Zbylá barva nemusí zaschnout ani zplesnivět. Jak plechovku správně uzavřít, kde a jak dlouho barvu skladovat a jak poznat, že je už nepoužitelná.",
      "datePublished": "2026-06-17T08:00:00Z",
      "dateModified": "2026-06-17T08:00:00Z",
      "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.domovniguru.cz/blog/jak-skladovat-zbylou-barvu" },
      "inLanguage": "cs",
      "keywords": ["jak skladovat barvu", "uchování zbylé barvy", "jak uzavřít plechovku barvy", "jak dlouho vydrží barva", "skladování barvy doma", "zkažená barva"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.domovniguru.cz/blog/jak-skladovat-zbylou-barvu#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" },
        { "@type": "ListItem", "position": 3, "name": "Malování & barvy", "item": "https://www.domovniguru.cz/blog/kategorie/malovani" },
        { "@type": "ListItem", "position": 4, "name": "Jak správně skladovat a uchovat zbylou barvu", "item": "https://www.domovniguru.cz/blog/jak-skladovat-zbylou-barvu" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.domovniguru.cz/blog/jak-skladovat-zbylou-barvu#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Stačí barvu jen přiklopit víkem, nebo musím plechovku zatlouct?", "acceptedAnswer": { "@type": "Answer", "text": "Pouhé přiklopení nestačí. Mezi víkem a hrdlem zůstává mezera, kterou proudí vzduch dovnitř, barva vysychá a na povrchu se tvoří kožka. Víko je potřeba po obvodu lehce zatlouct gumovou paličkou, aby dosedlo a uzavřelo plechovku vzduchotěsně." } },
        { "@type": "Question", "name": "Jak dlouho vydrží neotevřená barva?", "acceptedAnswer": { "@type": "Answer", "text": "Vodou ředitelné barvy v neotevřené plechovce vydrží přibližně 2–5 let od výroby, pokud jsou skladované za stabilní teploty a mimo mráz. Po otevření klesá životnost na 1–2 roky při správném uzavření a skladování." } },
        { "@type": "Question", "name": "Kde je nejlepší barvu skladovat?", "acceptedAnswer": { "@type": "Answer", "text": "Ideální je suchá místnost se stabilní teplotou 10–25 °C, mimo přímé sluneční světlo a mimo riziko mrazu. Vlhký sklep s vlhkostí nad 70 % není vhodný — zvyšuje riziko koroze plechovky a plísně v barvě." } },
        { "@type": "Question", "name": "Jak poznám, že je barva zkažená?", "acceptedAnswer": { "@type": "Answer", "text": "Zkaženou barvu poznáte podle nepříjemného kyselého nebo zatuchlého zápachu, oddělování složek na povrchu, plísně nebo hrudek, které se nerozmíchají. Pokud barva po důkladném promíchání stále obsahuje hrudky nebo zapáchá, raději ji nepoužívejte." } },
        { "@type": "Question", "name": "Má smysl přelévat zbylou barvu do menší nádoby?", "acceptedAnswer": { "@type": "Answer", "text": "Ano. Pokud v plechovce zbyde jen malé množství, přelijte ho do menší vzduchotěsné nádoby, například skleněné sklenice se šroubovacím víkem. Menší vzduchový prostor nad barvou výrazně zpomalí vysychání a tvorbu kožky." } },
        { "@type": "Question", "name": "Musím zbylou barvu likvidovat jako nebezpečný odpad?", "acceptedAnswer": { "@type": "Answer", "text": "Pokud barvu necháte v tenké vrstvě zaschnout (například rozetřenou na kartonu), zaschlý zbytek lze vyhodit do běžného odpadu. Tekuté zbytky barvy ale patří do sběrného dvora, kde je odeberou jako nebezpečný odpad — do běžné popelnice nepatří." } },
      ],
    },
    {
      "@type": "HowTo",
      "@id": "https://www.domovniguru.cz/blog/jak-skladovat-zbylou-barvu#howto",
      "name": "Jak správně skladovat a uchovat zbylou barvu",
      "description": "Zbylá barva nemusí zaschnout ani zplesnivět. Jak plechovku správně uzavřít, kde a jak dlouho barvu skladovat a jak poznat, že je už nepoužitelná.",
      "step": [
        { "@type": "HowToStep", "name": "Očistěte okraj plechovky", "text": "Před uzavřením setřete z hrdla plechovky a z drážky pro víko zaschlou barvu hadrem nebo špachtlí. Zaschlé zbytky brání víku dosednout a vytvořit vzduchotěsný uzávěr." },
        { "@type": "HowToStep", "name": "Přiložte fólii přes hrdlo", "text": "Přes hrdlo plechovky přiložte kus potravinářské fólie a teprve na ni nasaďte víko. Fólie vyplní drobné nerovnosti a zlepší těsnost spoje mezi víkem a plechovkou." },
        { "@type": "HowToStep", "name": "Zatlučte víko gumovou paličkou", "text": "Víko nasaďte rovně a lehkými údery gumové paličky po celém obvodu ho rovnoměrně zatlučte. Vyhněte se silným údery na jedno místo — víko by se mohlo zkroutit a netěsnit." },
        { "@type": "HowToStep", "name": "Vyberte stabilní místo ke skladování", "text": "Plechovku uložte do suché místnosti s teplotou 10–25 °C, mimo přímé sluneční záření a mimo riziko mrazu. Vyhněte se vlhkým sklepům s vlhkostí nad 70 %." },
        { "@type": "HowToStep", "name": "Přelijte malé zbytky do menší nádoby", "text": "Pokud v plechovce zbyde jen málo barvy, přelijte ji do menší vzduchotěsné nádoby. Menší vzduchový prostor nad hladinou zpomalí vysychání a prodlouží použitelnost." },
        { "@type": "HowToStep", "name": "Označte plechovku datem a místností", "text": "Na víko nebo bok plechovky napište datum otevření a místnost, kde byla barva použita. Při budoucí opravě škrábanců nebo dolaďování odstínu ušetříte čas i peníze za zbytečné nové míchání." }
      ]
    }
  ],
};

const RELATED = [
  { title: "Jak malovat zeď – kompletní průvodce pro začátečníky", href: "/blog/jak-malovat-zed", read: "5 min" },
  { title: "Jak odstranit starou barvu", href: "/blog/jak-odstranit-starou-barvu", read: "6 min" },
  { title: "Míchání barev RAL a NCS – jak na to", href: "/blog/michani-barev-ral-ncs", read: "6 min" },
  { title: "Proč se barva loupe – příčiny a jak to opravit", href: "/blog/barva-se-loupe", read: "5 min" },
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
              <Link href="/blog/kategorie/malovani">Malování & barvy</Link><span className="breadcrumb-sep">/</span>
              <span>Jak skladovat zbylou barvu</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování & barvy</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak správně skladovat a uchovat zbylou barvu</h1>
              <p className="article-lead">Zbylá barva v plechovce nemusí za rok skončit jako vyschlá hmota nebo zplesnivělá tekutina. Stačí ji správně uzavřít, uložit na vhodné místo a vědět, jak dlouho je ještě bezpečné ji použít.</p>
              <div className="article-meta-row">
                <span>Aktualizováno: 17. června 2026</span><span>·</span><span>DomovniGuru</span>
              </div>
              <ShareButtons url="https://www.domovniguru.cz/blog/jak-skladovat-zbylou-barvu" title="Jak správně skladovat a uchovat zbylou barvu" />
            </header>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#proc-nezavirat-priklopenim">Proč nezavírat plechovku jen přiklopením</a></li>
                <li><a href="#spravne-uzavreni">Správný postup uzavření plechovky</a></li>
                <li><a href="#skladovaci-podminky">Skladovací podmínky</a></li>
                <li><a href="#jak-dlouho-vydrzi">Jak dlouho barva vydrží</a></li>
                <li><a href="#zkazena-barva">Jak poznat zkaženou barvu</a></li>
                <li><a href="#male-zbytky">Co dělat s malými zbytky a úplnými zbytky</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="proc-nezavirat-priklopenim">
              <h2>Proč nezavírat plechovku jen přiklopením víka</h2>
              <p>Nejčastější chyba při ukládání zbylé barvy je jednoduché nasazení víka bez jeho řádného upevnění. Víko sice plechovku zakryje, ale mezi ním a hrdlem zůstává mikroskopická mezera, kterou dovnitř proudí vzduch.</p>
              <h3>Co se stane se vzduchem v plechovce</h3>
              <p>Vzduch obsahuje kyslík, který reaguje s pojivy v barvě a postupně ji vysušuje. Na povrchu barvy se začne tvořit tuhá kožka — tenká, gumovitá vrstva, která vznikla částečným zaschnutím horní vrstvy. Pod kožkou bývá barva ještě v pořádku, ale pokud necháte plechovku špatně uzavřenou delší dobu, kožka prosychá hlouběji a barva se znehodnotí v celém objemu.</p>
              <h3>Důsledky neuzavřené plechovky</h3>
              <ul>
                <li>Rychlejší vysychání a zahušťování barvy</li>
                <li>Tvorba kožky, kterou je nutné před dalším použitím odstranit</li>
                <li>Vyšší riziko proniknutí vzdušné vlhkosti a následné plísně</li>
                <li>Změna konzistence — barva se po otevření hůře rozmíchá a nanáší</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud plánujete plechovku znovu otevřít už za pár dní, přiklopení víkem bez zatlučení může stačit. Pro skladování na týdny a měsíce dopředu je ale vzduchotěsné uzavření nutné.</div>
            </section>

            <section id="spravne-uzavreni">
              <h2>Správný postup uzavření plechovky</h2>
              <h3>1. Očistěte okraj a drážku pro víko</h3>
              <p>Před uzavřením setřete z hrdla plechovky a z drážky, do které víko zapadá, zaschlé zbytky barvy. K tomu poslouží hadr nebo úzká špachtle. Zaschlá barva v drážce brání víku dosednout přesně a vytvořit těsný spoj.</p>
              <h3>2. Přiložte fólii přes hrdlo</h3>
              <p>Přes celé hrdlo plechovky přiložte kus potravinářské fólie a teprve na ni nasaďte víko. Fólie vyrovná drobné nerovnosti a poškrábání plechu, které vznikají při opakovaném otevírání, a výrazně zlepší těsnost uzávěru.</p>
              <h3>3. Zatlučte víko gumovou paličkou</h3>
              <p>Víko nasaďte rovně na hrdlo a lehkými, rovnoměrnými údery gumové paličky ho postupně zatloukejte po celém obvodu — ne na jednom místě. Pokračujte v kruhu, dokud víko nedosedne celé a rovnoměrně. Násilné nebo jednostranné bušení může víko zkroutit, a tím naopak vytvořit netěsnost.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud po zatlučení zatlačíte na víko prstem a uslyšíte tiché „cvaknutí" nebo pocítíte odpor, je plechovka pravděpodobně dobře uzavřená. Vždy plechovku po uzavření otočte dnem nahoru a zkontrolujte, že nikde neprosakuje.</div>
            </section>

            <section id="skladovaci-podminky">
              <h2>Skladovací podmínky</h2>
              <h3>Teplota</h3>
              <p>Barvu skladujte při stabilní teplotě <strong>10–25 °C</strong>. Mráz poškozuje strukturu vodou ředitelných barev — voda v barvě zmrzne, naruší pojivo a po rozmrznutí barva často zhrudkovatí a je nepoužitelná. Příliš vysoká teplota a přímé sluneční záření naopak urychlují odpařování a chemické stárnutí barvy.</p>
              <h3>Vlhkost</h3>
              <p>Vyhněte se sklepům a kójím s vlhkostí vzduchu nad 70 %. Vysoká vlhkost podporuje korozi plechovky zevnitř i z venku a zvyšuje riziko, že se do barvy přes netěsnosti dostane plíseň. Pokud nemáte jinou možnost než sklep, zvolte nejvyšší a nejsušší místo a plechovku postavte na podložku, ne přímo na podlahu.</p>
              <h3>Umístění</h3>
              <ul>
                <li>Sklad, garáž nebo komora se stabilní teplotou — ideální volba</li>
                <li>Mimo dosah dětí a zvířat, mimo zdroje tepla (radiátory, kotle)</li>
                <li>Plechovku vždy postavte na rovný povrch, víkem nahoru</li>
                <li>Nikdy neskladujte barvu v neotopené garáži přes mrazivou zimu, pokud nejde o mrazuvzdornou specifikaci</li>
              </ul>
            </section>

            <section id="jak-dlouho-vydrzi">
              <h2>Jak dlouho barva vydrží</h2>
              <p>Životnost barvy závisí na tom, jestli byla plechovka otevřená a jak byla skladovaná.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Stav plechovky</th><th>Vodou ředitelné barvy</th><th>Podmínka</th></tr></thead>
                  <tbody>
                    <tr><td>Neotevřená</td><td>cca 2–5 let</td><td>Stabilní teplota, mimo mráz a slunce</td></tr>
                    <tr><td>Otevřená, správně uzavřená</td><td>1–2 roky</td><td>Vzduchotěsné víko, vhodné skladovací místo</td></tr>
                    <tr><td>Otevřená, jen přiklopená</td><td>týdny až měsíce</td><td>Riziko kožky a vysychání</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Tyto hodnoty jsou orientační — konkrétní výrobce uvádí na etiketě dobu trvanlivosti i doporučené podmínky skladování. Pokud si nejste jisti stářím barvy, vždy ji před použitím zkontrolujte podle příznaků popsaných v další sekci.</p>
            </section>

            <section id="zkazena-barva">
              <h2>Jak poznat zkaženou barvu</h2>
              <p>Před každým použitím starší barvy ji zkontrolujte. Několik signálů jasně ukazuje, že barva už není v pořádku:</p>
              <h3>Zápach</h3>
              <p>Čerstvá vodou ředitelná barva má jen slabý, neutrální zápach. Pokud po otevření ucítíte kyselý, zatuchlý nebo „shnilý" zápach, barva je pravděpodobně napadená bakteriemi a neměla by se dál používat.</p>
              <h3>Oddělování složek</h3>
              <p>Mírné oddělení pigmentu od pojiva po dlouhém stání je běžné a po důkladném promíchání se obvykle napraví. Pokud se ale po promíchání barva nespojí do jednotné hmoty nebo zůstává vodnatá a hrudkovitá, je to znak rozpadu emulze.</p>
              <h3>Plíseň na povrchu</h3>
              <p>Tmavé skvrny nebo plísňový povlak na hladině barvy znamenají, že do plechovky pronikla vlhkost nebo vzduch s plísňovými spórami. Takovou barvu nepoužívejte, ani po odstranění viditelné plísně.</p>
              <h3>Hrudky a nerozpustné kusy</h3>
              <p>Pokud barva po důkladném promíchání tyčinkou nebo vrtací míchadlem obsahuje pevné hrudky, které se nerozpustí, struktura barvy je narušená — typicky vlivem mrazu nebo stárnutí pojiva.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud má barva jen tenkou kožku na povrchu a pod ní je v pořádku, kožku opatrně odstraňte nožem nebo špachtlí po celém obvodu a zbytek důkladně promíchejte. Samotná kožka neznamená, že je zkažená celá plechovka.</div>
            </section>

            <section id="male-zbytky">
              <h2>Co dělat s malými zbytky a úplnými zbytky</h2>
              <h3>Přelití do menší nádoby</h3>
              <p>Pokud v plechovce zbyde jen málo barvy, má smysl ji přelít do menší vzduchotěsné nádoby, například do skleněné sklenice se šroubovacím víkem. Menší vzduchový prostor nad hladinou barvy znamená méně kyslíku, který by barvu vysoušel — barva tak vydrží použitelná podstatně déle než ve velké, poloprázdné plechovce.</p>
              <h3>Likvidace úplných zbytků</h3>
              <p>Pokud barvu už nepotřebujete a chcete se jí zbavit, nemusíte ji nutně odevzdávat jako nebezpečný odpad. Tenkou vrstvu barvy lze rozetřít na kartonu nebo starých novinách a nechat na vzduchu zaschnout — jakmile zatvrdne, zaschlou hmotu lze vyhodit do běžného směsného odpadu.</p>
              <p>Tekuté zbytky barvy ale do běžné popelnice nepatří. Odevzdejte je ve sběrném dvoře, kde je přijímají jako nebezpečný odpad a zajistí jejich správnou likvidaci. Stejně postupujte u zbytků ředidel a rozpouštědel.</p>
              <h3>Značení plechovky datem a místností</h3>
              <p>Na víko nebo bok plechovky si vždy napište datum otevření a místnost (nebo konkrétní stěnu), kde byla barva použita. Při budoucí opravě škrábanců, otvorů po hřebících nebo dolaďování odstínu tak okamžitě poznáte, kterou plechovku použít, a ušetříte čas i peníze za nové míchání podobného odstínu.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Stačí barvu jen přiklopit víkem, nebo musím plechovku zatlouct?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Pouhé přiklopení nestačí. Mezi víkem a hrdlem zůstává mezera, kterou proudí vzduch dovnitř, barva vysychá a na povrchu se tvoří kožka. Víko je potřeba po obvodu lehce zatlouct gumovou paličkou, aby dosedlo a uzavřelo plechovku vzduchotěsně.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak dlouho vydrží neotevřená barva?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Vodou ředitelné barvy v neotevřené plechovce vydrží přibližně 2–5 let od výroby, pokud jsou skladované za stabilní teploty a mimo mráz. Po otevření klesá životnost na 1–2 roky při správném uzavření a skladování.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Kde je nejlepší barvu skladovat?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ideální je suchá místnost se stabilní teplotou 10–25 °C, mimo přímé sluneční světlo a mimo riziko mrazu. Vlhký sklep s vlhkostí nad 70 % není vhodný — zvyšuje riziko koroze plechovky a plísně v barvě.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak poznám, že je barva zkažená?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Zkaženou barvu poznáte podle nepříjemného kyselého nebo zatuchlého zápachu, oddělování složek na povrchu, plísně nebo hrudek, které se nerozmíchají. Pokud barva po důkladném promíchání stále obsahuje hrudky nebo zapáchá, raději ji nepoužívejte.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Má smysl přelévat zbylou barvu do menší nádoby?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ano. Pokud v plechovce zbyde jen malé množství, přelijte ho do menší vzduchotěsné nádoby, například skleněné sklenice se šroubovacím víkem. Menší vzduchový prostor nad barvou výrazně zpomalí vysychání a tvorbu kožky.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Musím zbylou barvu likvidovat jako nebezpečný odpad?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Pokud barvu necháte v tenké vrstvě zaschnout (například rozetřenou na kartonu), zaschlý zbytek lze vyhodit do běžného odpadu. Tekuté zbytky barvy ale patří do sběrného dvora, kde je odeberou jako nebezpečný odpad — do běžné popelnice nepatří.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/jak-skladovat-zbylou-barvu" title="Jak správně skladovat a uchovat zbylou barvu" />

            <section className="related-section">
              <h2>Související články</h2>
              <div className="related-grid">
                {RELATED.map((r) => (
                  <Link key={r.href} href={r.href} className="card">
                    <div className="card-eyebrow-row"><span>Malování & barvy</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#proc-nezavirat-priklopenim">Proč nepřiklopit jen víkem</a></li>
                <li><a href="#spravne-uzavreni">Správné uzavření</a></li>
                <li><a href="#skladovaci-podminky">Skladovací podmínky</a></li>
                <li><a href="#jak-dlouho-vydrzi">Jak dlouho vydrží</a></li>
                <li><a href="#zkazena-barva">Zkažená barva</a></li>
                <li><a href="#male-zbytky">Malé a úplné zbytky</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/malovani" className="sidebar-cat-link">🎨 Malování & barvy<span>20 článků →</span></Link>
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
        @media(max-width:600px){.article-layout{padding:32px 0 60px}}
      `}</style>
    </>
  );
}
