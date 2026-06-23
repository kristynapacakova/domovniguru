import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Elektrický sporák a varná deska – indukce, sklokeramika nebo klasika?",
  description: "Srovnání indukční, sklokeramické a klasické varné desky – rychlost vaření, spotřeba energie, bezpečnost, nádobí i nároky na elektroinstalaci.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/vyber-elektrickeho-sporaku-a-varne-desky" },
  openGraph: {
    title: "Elektrický sporák a varná deska – indukce, sklokeramika nebo klasika?",
    description: "Srovnání indukční, sklokeramické a klasické varné desky – rychlost vaření, spotřeba energie, bezpečnost, nádobí i nároky na elektroinstalaci.",
    url: "https://www.domovniguru.cz/blog/vyber-elektrickeho-sporaku-a-varne-desky",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "article",
    publishedTime: "2026-06-22T08:00:00Z",
    modifiedTime: "2026-06-22T08:00:00Z",
    authors: ["DomovniGuru"],
    images: [{ url: "/api/og?title=Elektrick%C3%BD%20spor%C3%A1k%20a%20varn%C3%A1%20deska%20%E2%80%93%20indukce%2C%20skloker%C3%A1mika%20nebo%20klasika%3F&cat=blog", width: 1200, height: 630, alt: "Elektrický sporák a varná deska – indukce, sklokeramika nebo klasika?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indukce, sklokeramika nebo klasika?",
    description: "Srovnání varných desek – rychlost, spotřeba, bezpečnost a nároky na elektroinstalaci.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.domovniguru.cz/blog/vyber-elektrickeho-sporaku-a-varne-desky#article",
      "headline": "Elektrický sporák a varná deska – indukce, sklokeramika nebo klasika?",
      "description": "Srovnání indukční, sklokeramické a klasické varné desky – rychlost vaření, spotřeba energie, bezpečnost, nádobí i nároky na elektroinstalaci.",
      "datePublished": "2026-06-22T08:00:00Z",
      "dateModified": "2026-06-22T08:00:00Z",
      "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.domovniguru.cz/blog/vyber-elektrickeho-sporaku-a-varne-desky" },
      "inLanguage": "cs",
      "keywords": ["indukční varná deska", "sklokeramická deska", "elektrický sporák", "jaká varná deska je nejlepší", "samostatný okruh varná deska"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.domovniguru.cz/blog/vyber-elektrickeho-sporaku-a-varne-desky#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" },
        { "@type": "ListItem", "position": 3, "name": "Elektrika & osvětlení", "item": "https://www.domovniguru.cz/blog/kategorie/elektrika" },
        { "@type": "ListItem", "position": 4, "name": "Elektrický sporák a varná deska", "item": "https://www.domovniguru.cz/blog/vyber-elektrickeho-sporaku-a-varne-desky" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.domovniguru.cz/blog/vyber-elektrickeho-sporaku-a-varne-desky#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Je indukční vaření opravdu rychlejší než sklokeramika?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, indukce ohřívá přímo dno nádoby pomocí magnetického pole, takže voda se přivede k varu výrazně rychleji než na sklokeramice, kde se nejprve musí zahřát samotná deska a teplo se pak přenáší dál do nádoby." } },
        { "@type": "Question", "name": "Potřebuji na indukci speciální nádobí?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, nádobí musí mít feromagnetické dno, tedy dno, na které přitáhne magnet. Nerezové nebo litinové nádobí s feromagnetickým dnem funguje bez problémů, hliníkové, skleněné nebo měděné nádobí bez speciální úpravy dna na indukci nefunguje." } },
        { "@type": "Question", "name": "Je nutný samostatný elektrický okruh pro varnou desku?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, elektrická varná deska i sporák patří mezi spotřebiče s vysokým příkonem a musí mít vlastní silový okruh s odpovídajícím jističem, dimenzovaný podle příkonu konkrétního modelu. Připojení na běžný zásuvkový okruh kuchyně není bezpečné ani technicky možné u většiny modelů." } },
        { "@type": "Question", "name": "Která varná deska je energeticky nejúspornější?", "acceptedAnswer": { "@type": "Answer", "text": "Indukční varná deska je nejúspornější, protože ohřívá přímo nádobu a minimalizuje ztráty teplem do okolí. Sklokeramika je o něco méně účinná díky ztrátám při přenosu tepla přes desku, klasické litinové plotýnky mají z porovnávaných typů nejvyšší spotřebu a nejpomalejší reakci na změnu teploty." } },
        { "@type": "Question", "name": "Je indukce bezpečnější než sklokeramika?", "acceptedAnswer": { "@type": "Answer", "text": "Indukční deska se zahřívá jen v místě, kde stojí nádobí s feromagnetickým dnem, samotný povrch desky kolem nádoby zůstává chladný nebo jen mírně teplý. To snižuje riziko popálení, zejména v domácnostech s dětmi, ve srovnání se sklokeramikou, kde zůstává horká celá plotna i dlouho po vypnutí." } },
        { "@type": "Question", "name": "Jak se udržuje sklokeramická a indukční deska?", "acceptedAnswer": { "@type": "Answer", "text": "Obě desky se čistí podobně – speciálním čisticím prostředkem na sklokeramiku a škrabkou na zaschlé zbytky jídla. Indukční deska se díky nižší teplotě povrchu obvykle zanáší méně, protože se na ní jídlo nepřipaluje tak silně jako na rozpálené sklokeramice." } },
      ],
    },
    {
      "@type": "HowTo",
      "@id": "https://www.domovniguru.cz/blog/vyber-elektrickeho-sporaku-a-varne-desky#howto",
      "name": "Elektrický sporák a varná deska – indukce, sklokeramika nebo klasika?",
      "description": "Srovnání indukční, sklokeramické a klasické varné desky – rychlost vaření, spotřeba energie, bezpečnost, nádobí i nároky na elektroinstalaci.",
      "step": [
        { "@type": "HowToStep", "name": "Porovnání rychlosti vaření", "text": "Zvaž, jak rychle potřebuješ přivést pokrmy k varu – indukce je nejrychlejší, sklokeramika střední, klasické plotýnky nejpomalejší." },
        { "@type": "HowToStep", "name": "Posouzení spotřeby energie", "text": "Vezmi v úvahu energetickou účinnost jednotlivých typů – indukce má nejnižší ztráty, klasické litinové plotýnky nejvyšší." },
        { "@type": "HowToStep", "name": "Kontrola vhodnosti nádobí", "text": "U indukce ověř, že máš nebo jsi ochoten koupit nádobí s feromagnetickým dnem, jinak deska nebude funkční." },
        { "@type": "HowToStep", "name": "Zhodnocení bezpečnostních potřeb", "text": "V domácnosti s dětmi nebo seniory zvaž indukci s nižší teplotou povrchu desky mimo místo vaření." },
        { "@type": "HowToStep", "name": "Prověření elektroinstalace", "text": "Nech elektrikáře ověřit, že kuchyně má samostatný silový okruh s dostatečně dimenzovaným jističem pro zvolenou desku nebo sporák." },
        { "@type": "HowToStep", "name": "Výběr konkrétního modelu", "text": "Podle zjištěných parametrů vyber konkrétní model s odpovídajícím výkonem, počtem varných zón a funkcemi údržby." },
      ],
    },
  ],
};

const RELATED = [
  { title: "Jak vyměnit zásuvku", href: "/blog/jak-vymenit-zasuvku", read: "5 min" },
  { title: "Proč vypadává jistič", href: "/blog/proc-vypadava-jistic", read: "5 min" },
  { title: "Jak funguje proudový chránič (RCD)", href: "/blog/jak-funguje-proudovy-chranic", read: "5 min" },
  { title: "USB zásuvky a nabíjecí stanice", href: "/blog/usb-zasuvky-a-nabijeci-stanice", read: "4 min" },
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
              <span>Elektrický sporák a varná deska</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">⚡ Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Elektrický sporák a varná deska – indukce, sklokeramika nebo klasika?</h1>
              <p className="article-lead">Výběr varné desky ovlivní nejen to, jak rychle uvaříš večeři, ale i spotřebu elektřiny, bezpečnost domácnosti a požadavky na elektroinstalaci. Porovnali jsme indukci, sklokeramiku a klasické litinové plotýnky, abys vybral typ, který bude sedět tvé kuchyni i rozpočtu.</p>
              <div className="article-meta-row">
                <span>Aktualizováno: 22. června 2026</span><span>·</span><span>DomovniGuru</span>
              </div>
              <ShareButtons url="https://www.domovniguru.cz/blog/vyber-elektrickeho-sporaku-a-varne-desky" title="Elektrický sporák a varná deska – indukce, sklokeramika nebo klasika?" />
            </header>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#typy">Tři typy varných desek</a></li>
                <li><a href="#rychlost">Rychlost vaření</a></li>
                <li><a href="#spotreba">Spotřeba energie</a></li>
                <li><a href="#bezpecnost">Bezpečnost a riziko popálení</a></li>
                <li><a href="#nadobi">Nároky na nádobí</a></li>
                <li><a href="#elektroinstalace">Nároky na elektroinstalaci</a></li>
                <li><a href="#udrzba">Údržba povrchu</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="typy">
              <h2>Tři typy varných desek</h2>
              <p>Na trhu se dnes setkáš hlavně se třemi typy elektrického vaření – klasickými litinovými plotýnkami, sklokeramickou deskou a indukční deskou. Každý typ má jiný princip ohřevu a jiné nároky na domácnost.</p>
              <h3>Klasické litinové plotýnky</h3>
              <p>Nejstarší a nejlevnější varianta, kde se odporový drát v plotýnce zahřívá a teplo se přenáší přímo na dno nádoby přes litinový povrch. Reakce na změnu teploty je pomalá, plotýnka zůstává horká i řadu minut po vypnutí.</p>
              <h3>Sklokeramická deska</h3>
              <p>Pod hladkým skleněným povrchem jsou skryté odporové nebo halogenové ohřevné články. Sklokeramika reaguje na změnu teploty rychleji než litinové plotýnky a má elegantní vzhled, který se snadno udržuje.</p>
              <h3>Indukční deska</h3>
              <p>Indukce vytváří elektromagnetické pole, které vyvolává vířivé proudy přímo v feromagnetickém dně nádoby – teplo tak vzniká přímo v hrnci nebo pánvi, nikoliv v desce. Díky tomu je indukce nejrychlejší a energeticky nejúčinnější z porovnávaných typů.</p>
            </section>

            <section id="rychlost">
              <h2>Rychlost vaření</h2>
              <p>Rychlost ohřevu je jeden z hlavních důvodů, proč lidé od klasických plotýnek přecházejí k modernějším řešením.</p>
              <h3>Indukce vede</h3>
              <p>Protože se teplo generuje přímo v nádobě, indukce dokáže přivést vodu k varu i o desítky procent rychleji než sklokeramika. Změna výkonu je téměř okamžitá, což usnadňuje přesné vaření – třeba zchlazení omáčky bez rizika přepálení.</p>
              <h3>Sklokeramika uprostřed</h3>
              <p>Sklokeramická deska potřebuje čas na zahřátí samotného povrchu, než se teplo přenese do nádoby, ale stále je rychlejší a vyrovnanější než litinové plotýnky.</p>
              <h3>Klasické plotýnky nejpomalejší</h3>
              <p>Litinové plotýnky mají velkou tepelnou kapacitu, takže se zahřívají i chladnou pomalu – výhodou je naopak rovnoměrné udržení teploty u dlouhého dušení.</p>
            </section>

            <section id="spotreba">
              <h2>Spotřeba energie</h2>
              <p>Účinnost přenosu tepla z desky do nádoby přímo ovlivňuje, kolik elektřiny vaření spotřebuje.</p>
              <h3>Indukce šetří nejvíc</h3>
              <p>Díky přímému ohřevu nádoby má indukce nejnižší ztráty teplem do okolí, účinnost přenosu energie se uvádí kolem 90 % a víc. To se odrazí i na vyúčtování elektřiny, zejména u domácností, které vaří často.</p>
              <h3>Sklokeramika se ztrátami</h3>
              <p>Část tepla se ztrácí při přenosu přes skleněný povrch desky do nádoby a do okolního vzduchu, účinnost je tak o něco nižší než u indukce.</p>
              <h3>Klasické plotýnky nejméně účinné</h3>
              <p>Litinové plotýnky mají z porovnávaných typů nejvyšší spotřebu vzhledem k vařenému množství jídla, protože velkou část tepla vyzařují do okolí i po vypnutí, kdy ještě dlouho chladnou.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Při vaření na indukci používej nádobí o stejném nebo o trochu menším průměru, než má varná zóna – předejdeš tím únikům tepla do okolí desky a urychlíš vaření.</div>
            </section>

            <section id="bezpecnost">
              <h2>Bezpečnost a riziko popálení</h2>
              <p>Bezpečnost při vaření je důležitá zejména v domácnostech s malými dětmi nebo se staršími členy rodiny.</p>
              <h3>Indukce je nejbezpečnější</h3>
              <p>Protože se zahřívá jen plocha pod nádobou s feromagnetickým dnem, zbytek desky zůstává chladný nebo jen mírně teplý od přeneseného tepla z nádoby. Riziko náhodného popálení při dotyku desky je tak výrazně nižší.</p>
              <h3>Sklokeramika a klasické plotýnky zůstávají horké</h3>
              <p>Po vaření na sklokeramice i na litinových plotýnkách zůstává celá varná zóna horká ještě řadu minut, u litinových plotýnek i déle. Většina moderních sklokeramických desek má alespoň indikátor zbytkového tepla, který na riziko upozorní.</p>
              <h3>Bezpečnostní funkce u indukce</h3>
              <p>Indukční desky často nabízejí i funkci automatického vypnutí, pokud na varné zóně není přítomné vhodné nádobí, nebo detekci přehřátí prázdné nádoby – další plus pro domácnosti s dětmi.</p>
            </section>

            <section id="nadobi">
              <h2>Nároky na nádobí</h2>
              <p>Výběr varné desky ovlivňuje i to, jaké nádobí v kuchyni můžeš dál používat.</p>
              <h3>Indukce vyžaduje feromagnetické dno</h3>
              <p>Nádobí musí mít dno, na které přitáhne magnet – nerezové nebo litinové nádobí s odpovídající úpravou funguje bez problémů. Hliníkové, skleněné nebo měděné nádobí bez speciální vrstvy na indukci nefunguje vůbec.</p>
              <h3>Sklokeramika a klasické plotýnky jsou univerzálnější</h3>
              <p>Na sklokeramice a litinových plotýnkách lze použít téměř jakékoliv nádobí s rovným dnem, bez ohledu na materiál. U sklokeramiky je ale potřeba dávat pozor na nádobí s drsným nebo poškozeným dnem, které může povrch poškrábat.</p>
              <ul>
                <li><strong>Přechod na indukci</strong> – ověř magnetem, jestli stávající nádobí na indukci funguje, případně dokup pár základních kusů</li>
                <li><strong>Sklokeramika</strong> – preferuj nádobí s hladkým a rovným dnem bez ostrých hran</li>
                <li><strong>Klasické plotýnky</strong> – funguje téměř jakékoliv běžné nádobí</li>
              </ul>
            </section>

            <section id="elektroinstalace">
              <h2>Nároky na elektroinstalaci</h2>
              <p>Elektrický sporák i samostatná varná deska patří mezi nejvýkonnější spotřebiče v domácnosti a mají specifické požadavky na elektroinstalaci.</p>
              <h3>Samostatný silový okruh</h3>
              <p>Varná deska nebo sporák musí mít vlastní okruh přivedený přímo z rozváděče, s jističem dimenzovaným podle příkonu konkrétního modelu – běžně se používají jističe 16 až 32 A podle výkonu desky a počtu fází. Připojení přes běžnou zásuvku kuchyňské linky není u většiny modelů možné ani bezpečné.</p>
              <h3>Jednofázové vs. třífázové připojení</h3>
              <p>Menší varné desky a kombinované sporáky s nižším příkonem se obvykle připojují na jednu fázi, výkonnější vestavné desky se čtyřmi a více zónami často vyžadují třífázové připojení. Typ připojení a průřez kabelu musí odpovídat příkonu spotřebiče.</p>
              <h3>Kdy je nutná revize</h3>
              <p>Pokud měníš starý sporák za vestavnou desku a troubu zapojené samostatně, nebo pokud nový spotřebič vyžaduje vyšší výkon než ten původní, jde o zásah do elektroinstalace, který musí provést elektrikář a po dokončení potvrdit revizní technik. Nikdy se nepokoušej sám měnit kabeláž za rozváděčem nebo přidávat vlastní jistič – riziko požáru kvůli poddimenzovanému vedení je vysoké.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Před vypnutím starého sporáku z důvodu výměny vždy nejprve vypni příslušný jistič v rozváděči a ověř bezproudí zkušební zkoušečkou napětí, až poté odpojuj svorky – nikdy nepracuj na zapojeném spotřebiči pod napětím.</div>
            </section>

            <section id="udrzba">
              <h2>Údržba povrchu</h2>
              <p>Každodenní péče o varnou desku ovlivňuje, jak dlouho vydrží vypadat a fungovat jako nová.</p>
              <h3>Sklokeramika a indukce</h3>
              <p>Obě desky se čistí speciálním čisticím prostředkem na sklokeramiku a škrabkou na zaschlé zbytky jídla. Díky nižší provozní teplotě se na indukční desce jídlo připaluje méně často, takže bývá údržba o něco jednodušší.</p>
              <h3>Klasické plotýnky</h3>
              <p>Litinové plotýnky se čistí jednodušeji díky odolnému povrchu, ale připálené zbytky jídla na nich často drží silněji a vyžadují více mechanického čištění. Některé modely mají snímatelné plotýnky, což usnadňuje hloubkové čištění.</p>
              <h3>Životnost povrchu</h3>
              <p>Sklokeramický i indukční povrch je náchylný na poškrábání těžkým nebo drsným nádobím a na praskliny při dopadu těžkého předmětu. Litinové plotýnky jsou v tomto ohledu odolnější, ale postupem let mohou korodovat.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Je indukční vaření opravdu rychlejší než sklokeramika?", a: "Ano, indukce ohřívá přímo dno nádoby pomocí magnetického pole, takže voda se přivede k varu výrazně rychleji než na sklokeramice, kde se nejprve musí zahřát samotná deska a teplo se pak přenáší dál do nádoby." },
                  { q: "Potřebuji na indukci speciální nádobí?", a: "Ano, nádobí musí mít feromagnetické dno, tedy dno, na které přitáhne magnet. Nerezové nebo litinové nádobí s feromagnetickým dnem funguje bez problémů, hliníkové, skleněné nebo měděné nádobí bez speciální úpravy dna na indukci nefunguje." },
                  { q: "Je nutný samostatný elektrický okruh pro varnou desku?", a: "Ano, elektrická varná deska i sporák patří mezi spotřebiče s vysokým příkonem a musí mít vlastní silový okruh s odpovídajícím jističem, dimenzovaný podle příkonu konkrétního modelu. Připojení na běžný zásuvkový okruh kuchyně není bezpečné ani technicky možné u většiny modelů." },
                  { q: "Která varná deska je energeticky nejúspornější?", a: "Indukční varná deska je nejúspornější, protože ohřívá přímo nádobu a minimalizuje ztráty teplem do okolí. Sklokeramika je o něco méně účinná díky ztrátám při přenosu tepla přes desku, klasické litinové plotýnky mají z porovnávaných typů nejvyšší spotřebu a nejpomalejší reakci na změnu teploty." },
                  { q: "Je indukce bezpečnější než sklokeramika?", a: "Indukční deska se zahřívá jen v místě, kde stojí nádobí s feromagnetickým dnem, samotný povrch desky kolem nádoby zůstává chladný nebo jen mírně teplý. To snižuje riziko popálení, zejména v domácnostech s dětmi, ve srovnání se sklokeramikou, kde zůstává horká celá plotna i dlouho po vypnutí." },
                  { q: "Jak se udržuje sklokeramická a indukční deska?", a: "Obě desky se čistí podobně – speciálním čisticím prostředkem na sklokeramiku a škrabkou na zaschlé zbytky jídla. Indukční deska se díky nižší teplotě povrchu obvykle zanáší méně, protože se na ní jídlo nepřipaluje tak silně jako na rozpálené sklokeramice." },
                ].map(({ q, a }) => (
                  <details key={q} className="faq-item">
                    <summary className="faq-summary">{q}<span className="faq-icon">▾</span></summary>
                    <div className="faq-body">{a}</div>
                  </details>
                ))}
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/vyber-elektrickeho-sporaku-a-varne-desky" title="Elektrický sporák a varná deska – indukce, sklokeramika nebo klasika?" />

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
                <li><a href="#typy">Tři typy varných desek</a></li>
                <li><a href="#rychlost">Rychlost vaření</a></li>
                <li><a href="#spotreba">Spotřeba energie</a></li>
                <li><a href="#bezpecnost">Bezpečnost</a></li>
                <li><a href="#nadobi">Nároky na nádobí</a></li>
                <li><a href="#elektroinstalace">Elektroinstalace</a></li>
                <li><a href="#udrzba">Údržba povrchu</a></li>
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
