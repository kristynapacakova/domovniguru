import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak připravit balkon na zimu – kompletní checklist 2026",
  description: "Rostliny, nábytek, odtok, dlažba i zábradlí – kompletní postup, jak balkon připravit na mráz a sníh bez poškození a škod.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-pripravit-balkon-na-zimu" },
  openGraph: {
    title: "Jak připravit balkon na zimu – kompletní checklist 2026",
    description: "Rostliny, nábytek, odtok, dlažba i zábradlí – kompletní postup, jak balkon připravit na mráz a sníh bez poškození a škod.",
    url: "https://www.domovniguru.cz/blog/jak-pripravit-balkon-na-zimu",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "article",
    publishedTime: "2026-06-17T08:00:00Z",
    modifiedTime: "2026-06-17T08:00:00Z",
    authors: ["DomovniGuru"],
    images: [{ url: "/api/og?title=Jak%20p%C5%99ipravit%20balkon%20na%20zimu%20%E2%80%93%20kompletn%C3%AD%20checklist%202026&cat=blog", width: 1200, height: 630, alt: "Jak připravit balkon na zimu – kompletní checklist 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jak připravit balkon na zimu – checklist 2026",
    description: "Rostliny, nábytek, odtok, dlažba i zábradlí – postup krok za krokem.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.domovniguru.cz/blog/jak-pripravit-balkon-na-zimu#article",
      "headline": "Jak připravit balkon na zimu – kompletní checklist 2026",
      "description": "Rostliny, nábytek, odtok, dlažba i zábradlí – kompletní postup, jak balkon připravit na mráz a sníh bez poškození a škod.",
      "datePublished": "2026-06-17T08:00:00Z",
      "dateModified": "2026-06-17T08:00:00Z",
      "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.domovniguru.cz/blog/jak-pripravit-balkon-na-zimu" },
      "inLanguage": "cs",
      "keywords": ["jak připravit balkon na zimu", "balkon na zimu", "ochrana balkonu před mrazem", "odtok na balkoně ucpaný", "zazimování rostlin na balkoně"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.domovniguru.cz/blog/jak-pripravit-balkon-na-zimu#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" },
        { "@type": "ListItem", "position": 3, "name": "Sezónní údržba", "item": "https://www.domovniguru.cz/blog/kategorie/sezonni-udrzba" },
        { "@type": "ListItem", "position": 4, "name": "Jak připravit balkon na zimu", "item": "https://www.domovniguru.cz/blog/jak-pripravit-balkon-na-zimu" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.domovniguru.cz/blog/jak-pripravit-balkon-na-zimu#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Kdy je nejlepší čas připravit balkon na zimu?", "acceptedAnswer": { "@type": "Answer", "text": "Ideální je začít v polovině až konci října, než přijdou první noční mrazíky. Citlivé rostliny stěhuj do bytu už při poklesu teplot k 5 °C, ostatní úkoly stačí zvládnout do první poloviny listopadu." } },
        { "@type": "Question", "name": "Musím zalévat rostliny na balkoně i v zimě?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, ale výrazně méně. Mrazuvzdorné dřeviny a trvalky v nádobách zalévej jen v bezmrazých dnech, jednou za 2–3 týdny, aby kořenový bal úplně nevyschl. Za mrazu se nezalévá vůbec." } },
        { "@type": "Question", "name": "Jak poznám, že je odtokový otvor na balkoně ucpaný?", "acceptedAnswer": { "@type": "Answer", "text": "Po dešti se na dlažbě tvoří louže, které dlouho nezmizí, nebo voda stojí přímo u odtoku a neodtéká. V takovém případě hrozí, že voda v mrazu zmrzne a poškodí dlažbu i hydroizolaci." } },
        { "@type": "Question", "name": "Mohou mrazy poškodit dlažbu na balkoně?", "acceptedAnswer": { "@type": "Answer", "text": "Ano. Voda, která vnikne do drobných spár a prasklin, při zmrznutí zvýší objem a dlažbu nadzvedne nebo praskne. Proto je potřeba spáry a trhliny ošetřit těsnicí hmotou ještě před prvními mrazy." } },
        { "@type": "Question", "name": "Mám na zimu sklápět nebo demontovat markýzu?", "acceptedAnswer": { "@type": "Answer", "text": "Markýzu vždy sklop, aby na ní nedrželo sníh a led, které mohou poškodit látku i mechanismus. Pokud má balkon silný vítr nebo je markýza starší, je lepší ji na zimu demontovat úplně." } },
        { "@type": "Question", "name": "Co se stane, když nechám vodu v samozavlažovací nádobě přes zimu?", "acceptedAnswer": { "@type": "Answer", "text": "Voda v mrazu zvětší objem a plastovou nádobu roztrhne nebo prasklý zásobník už příští sezónu nepojme vodu správně. Proto nádoby na podzim vždy vyprázdni a uskladni v suchu." } },
      ],
    },
    {
      "@type": "HowTo",
      "@id": "https://www.domovniguru.cz/blog/jak-pripravit-balkon-na-zimu#howto",
      "name": "Jak připravit balkon na zimu – kompletní checklist 2026",
      "description": "Rostliny, nábytek, odtok, dlažba i zábradlí – kompletní postup, jak balkon připravit na mráz a sníh bez poškození a škod.",
      "step": [
        { "@type": "HowToStep", "name": "Přesun a ochrana rostlin", "text": "Mrazuvzdorné rostliny přesuň k zateplené zdi a zabal netkanou textilií, citlivé druhy přenes do bytu nebo sklepa a zalévej střídměji." },
        { "@type": "HowToStep", "name": "Vyklizení zahradního nábytku", "text": "Kovový a dřevěný nábytek na zimu schovej nebo zakryj nepromokavou plachtou, textilní polštáře a sedáky vždy ulož dovnitř." },
        { "@type": "HowToStep", "name": "Kontrola odtokového otvoru", "text": "Vyčisti odtokový otvor od listí a nečistot – ucpaný odtok způsobí zamrzlou vodu na dlažbě a poškození hydroizolace." },
        { "@type": "HowToStep", "name": "Ochrana dlažby a hydroizolace", "text": "Před prvními mrazy zkontroluj spáry a trhliny v dlažbě, drobné praskliny oprav těsnicí hmotou." },
        { "@type": "HowToStep", "name": "Kontrola zábradlí", "text": "Zkontroluj uvolněné šrouby a korozi na zábradlí – je to důležité i z hlediska bezpečnosti při zimním úklidu snehu." },
        { "@type": "HowToStep", "name": "Vyprázdnění truhlíků a nádob", "text": "Závěsné truhlíky a samozavlažovací nádoby vyprázdni od vody, aby je mráz neroztrhl, a ulož je do suchu." },
      ],
    },
  ],
};

const RELATED = [
  { title: "Jak připravit dům na zimu", href: "/blog/priprava-domu-na-zimu", read: "6 min" },
  { title: "Jak prezimovat zahradní rostliny", href: "/blog/prezimovat-zahradni-rostliny", read: "5 min" },
  { title: "Terasa na balkoně – inspirace a tipy", href: "/blog/terasa-na-balkone", read: "4 min" },
  { title: "Jak utěsnit okna na zimu", href: "/blog/jak-utesnit-okna-na-zimu", read: "5 min" },
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
              <span>Jak připravit balkon na zimu</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">🍂 Sezónní údržba</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak připravit balkon na zimu – kompletní checklist 2026</h1>
              <p className="article-lead">Mráz a sníh dokážou na balkoně napáchat víc škody, než byste čekali – od rozpraskané dlažby po roztrhané plastové nádoby. S touto checklistou zvládneš zazimovat balkon během jednoho odpoledne a na jaře tě nečeká žádné nepříjemné překvapení.</p>
              <div className="article-meta-row">
                <span>Aktualizováno: 17. června 2026</span><span>·</span><span>DomovniGuru</span>
              </div>
              <ShareButtons url="https://www.domovniguru.cz/blog/jak-pripravit-balkon-na-zimu" title="Jak připravit balkon na zimu – kompletní checklist 2026" />
            </header>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#rostliny">Přesun a ochrana rostlin</a></li>
                <li><a href="#nabytek">Zahradní nábytek a doplňky</a></li>
                <li><a href="#odtok">Kontrola a vyčištění odtoku</a></li>
                <li><a href="#dlazba">Ochrana dlažby a hydroizolace</a></li>
                <li><a href="#zabradli">Bezpečnost u zábradlí</a></li>
                <li><a href="#truhliky">Truhlíky a samozavlažovací nádoby</a></li>
                <li><a href="#markyza">Markýza a slunečník</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="rostliny">
              <h2>Přesun a ochrana rostlin</h2>
              <p>Rostliny jsou na balkoně nejcitlivější na první mrazy, protože v nádobách nemají takovou ochranu kořenů jako v zahradní půdě. Mráz proniká do nádoby ze všech stran a kořenový bal může promrznout i u druhů, které by v zemi mráz bez problémů přežily.</p>
              <h3>Mrazuvzdorné dřeviny a trvalky</h3>
              <p>Odolnější rostliny jako muškáty ve velkých nádobách, okrasné trávy nebo některé jehličnany přesuň k zateplené zdi domu – nejlépe na jižní nebo východní stranu, kde je o pár stupňů tepleji a méně fouká. Nádobu pak zabal netkanou textilií nebo jutou, případně ji postav na dřevěnou paletu, aby chlad nešel přímo z dlažby.</p>
              <h3>Citlivé druhy patří do bytu</h3>
              <p>Středomořské byliny, citrusy v nádobách nebo méně odolné okrasné rostliny mráz nepřežijí venku. Přenes je do bytu, na zasklenou lodžii nebo do nevytápěného, ale mrazu chráněného sklepa či garáže. Důležité je nedávat je hned k radiátoru – náhlá změna teploty rostlinu stresuje stejně jako mráz.</p>
              <h3>Méně vody, méně hnojení</h3>
              <p>V zimě rostliny rostou minimálně nebo vůbec, takže potřebují podstatně méně vody. Zalévej jen tehdy, když je substrát na povrchu suchý, a vždy v bezmrazém dni – zalévání za mrazu kořenům jen uškodí. Hnojení od podzimu úplně vynech, obnovíš ho až na jaře s nástupem nového růstu.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud rostlinu přenášíš do nevytápěné místnosti, dej pod nádobu polystyrenovou nebo dřevěnou podložku – izoluje kořeny od chladné podlahy a zabrání zamrznutí substrátu zespodu.</div>
            </section>

            <section id="nabytek">
              <h2>Vyklizení a uložení zahradního nábytku a doplňků</h2>
              <p>Nábytek a doplňky na balkoně trpí v zimě nejen mrazem, ale především opakovaným zamrzáním a rozmrzáním vlhkosti, které materiál postupně ničí.</p>
              <h3>Kovový a dřevěný nábytek</h3>
              <p>Pokud máš možnost, kovové a dřevěné kousky raději na zimu uskladni v garáži, sklepě nebo komoře – prodloužíš tím jejich životnost o roky. Když se nábytek nevejde nikam jinam, zakryj ho kvalitní nepromokavou plachtou, ideálně s úpravou proti UV záření a se zmenšenou stranou u nohou, aby pod plachtou nestála voda.</p>
              <h3>Textil patří vždy dovnitř</h3>
              <p>Polštáře, sedáky a textilní doplňky nikdy nenechávej venku přes zimu, ani pod plachtou. Vlhkost se do textilu dostane prakticky vždy a v kombinaci s nízkými teplotami vzniká plíseň, kterou už pak nejde odstranit. Polštáře nech před uskladněním dobře vyschnout a ulož je v bytě nebo suché komoře.</p>
              <h3>Drobné doplňky a dekorace</h3>
              <p>Skleněné a keramické dekorace, svíčky ve sklenicích nebo venkovní koberečky rovněž přenes do tepla. Keramika a sklo s vodou nebo zbytkovou vlhkostí mohou v mrazu praskat.</p>
            </section>

            <section id="odtok">
              <h2>Kontrola a vyčištění odtokového otvoru na balkoně</h2>
              <p>Odtokový otvor je jedním z nejdůležitějších, ale často přehlížených míst na balkoně. Jeho funkce je naprosto zásadní právě v zimě.</p>
              <h3>Proč je čistý odtok klíčový</h3>
              <p>Pokud je odtok ucpaný spadaným listím, prachem nebo nečistotami, voda z dešťů a tajícího sněhu se nemá kam vsáknout a hromadí se na dlažbě. V noci, kdy teplota klesne pod nulu, tato voda zmrzne a led poškodí jak povrch dlažby, tak spodní hydroizolační vrstvu balkonu.</p>
              <h3>Jak odtok vyčistit</h3>
              <p>Odstraň mřížku nebo kryt odtoku a rukou nebo kartáčem vyber všechny nečistoty, které se v něm nahromadily za podzim. Pokud je odtok hluboko ucpaný, pomůže tenký drát nebo proud vody z hadice. Zkontroluj zároveň, že je odtokový spád dlažby správný a voda k otvoru skutečně stéká.</p>
              <h3>Pravidelná kontrola během zimy</h3>
              <p>Po každém silnějším spadu listí nebo sněhu se vyplatí odtok znovu zkontrolovat – stačí pár minut, ale ušetří to případnou opravu hydroizolace, která bývá nákladná a často zasahuje i do bytu pod balkonem.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud máš na balkoně bytový dům se společnou hydroizolací, ucpaný odtok může způsobit zatékání i k sousedům pod tebou. Vyčištění odtoku tak chrání nejen tvůj balkon.</div>
            </section>

            <section id="dlazba">
              <h2>Ochrana dlažby a hydroizolace</h2>
              <p>Voda, která se dostane do drobných trhlin a spár, je při zmrznutí jedním z nejčastějších viníků poškozené dlažby na balkonech.</p>
              <h3>Kontrola spár a trhlin před mrazy</h3>
              <p>Před prvními mrazy prohlédni celou plochu dlažby, zejména spáry mezi dlaždicemi a místa u zdi a u zábradlí, kde se trhliny tvoří nejčastěji. Voda, která vnikne do těchto míst, při zmrznutí zvětší svůj objem a dlaždice nadzvedne, posune nebo přímo rozlomí.</p>
              <h3>Jak opravit drobné praskliny</h3>
              <p>Menší praskliny a poškozené spáry oprav vhodnou těsnicí hmotou určenou pro venkovní použití a balkonové konstrukce. Trhlinu nejdřív vyčisti od prachu a nečistot, případně ji ošetři penetračním nátěrem, a teprve potom vypl těsnicí hmotou. Nechej zaschnout podle pokynů výrobce, ideálně několik dní před prvním mrazem.</p>
              <h3>Kdy je nutný odborný zásah</h3>
              <p>Pokud objevíš rozsáhlejší praskliny, uvolněné dlaždice na větší ploše nebo viditelné stopy zatékání pod dlažbu, jde už o problém s hydroizolací samotnou. V takovém případě je lepší přivolat odborníka ještě před zimou – oprava po sezóně plné mrazových cyklů bývá výrazně dražší.</p>
            </section>

            <section id="zabradli">
              <h2>Bezpečnost u zábradlí</h2>
              <p>Zábradlí na balkoně bereme často jako samozřejmost, ale právě v zimě je jeho stav obzvlášť důležitý.</p>
              <h3>Co kontrolovat</h3>
              <ul>
                <li><strong>Uvolněné šrouby a kotvy</strong> – zkontroluj všechny spoje zábradlí, zejména v místě uchycení ke zdi nebo k podlaze</li>
                <li><strong>Korozi</strong> – u kovových zábradlí věnuj pozornost místům, kde se odlupuje nátěr a objevuje rez, protože tam konstrukce slábne nejrychleji</li>
                <li><strong>Stabilitu výplně</strong> – zatřes skleněnými nebo dřevěnými výplněmi, jestli nejsou uvolněné z rámu</li>
              </ul>
              <h3>Proč na tom v zimě záleží ještě víc</h3>
              <p>V zimě se o zábradlí opíráme častěji než jinde – při odklízení snehu z balkonu, při házení sněhu přes okraj nebo jednoduše při horší viditelnosti a namrzlé dlažbě, kdy hledáme oporu. Uvolněné nebo zkorodované zábradlí v tu chvíli představuje skutečné bezpečnostní riziko. Drobné uvolnění oprav zpevněním šroubů, u většího poškození je třeba zábradlí nechat posoudit odborníkem.</p>
            </section>

            <section id="truhliky">
              <h2>Závěsné truhlíky a samozavlažovací nádoby</h2>
              <p>Plastové nádoby na balkoně patří mezi nejčastější oběti mrazu – a přitom jim lze poškození snadno předejít.</p>
              <h3>Vyprázdnění vody je nutnost</h3>
              <p>Voda, která zůstane v zásobníku samozavlažovací nádoby nebo na dně závěsného truhlíku, při mrazu zmrzne a zvětší svůj objem. Plastová stěna nádoby tomu tlaku nevydrží a praskne – často nenápadně, takže poškození zjistíš až na jaře, kdy nádoba neudrží vodu. Proto na podzim všechny zásobníky a truhlíky důkladně vyprázdni.</p>
              <h3>Uskladnění přes zimu</h3>
              <p>Prázdné truhlíky a nádoby ulož do sucha – do sklepa, komory nebo garáže. Pokud na balkoně musí zůstat, alespoň je obrať dnem nahoru, aby se do nich nedostala dešťová ani sněhová voda.</p>
            </section>

            <section id="markyza">
              <h2>Markýza a slunečník</h2>
              <p>Tyto doplňky bývají na zimu nejčastěji opomíjené, přitom je sníh a led umí poškodit velmi rychle.</p>
              <h3>Sklopení markýzy</h3>
              <p>Markýzu na zimu vždy sklop. Rozložená markýza by na sobě držela sníh a led, jejichž váha může poškodit látku, ohnout výsuvné rameno nebo přetížit mechanismus. Před sklopením markýzu očisti a nech ji dobře oschnout, aby se pod ní nevytvořila plíseň.</p>
              <h3>Kontrola mechanismu</h3>
              <p>Před zazimováním zkontroluj, jestli se mechanismus hladce pohybuje a není na něm viditelná koroze nebo opotřebení. Případné kovové pohyblivé části ošetři vhodným mazivem – usnadní to rozkládání na jaře a prodlouží životnost markýzy.</p>
              <h3>Slunečník demontovat</h3>
              <p>Slunečník na zimu raději úplně demontuj a ulož do suchého prostoru. Pokud to není možné, alespoň ho sklop a pevně zajisti, aby ho nepoškodil silný vítr nebo náledí na konstrukci.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Kdy je nejlepší čas připravit balkon na zimu?", a: "Ideální je začít v polovině až konci října, než přijdou první noční mrazíky. Citlivé rostliny stěhuj do bytu už při poklesu teplot k 5 °C, ostatní úkoly stačí zvládnout do první poloviny listopadu." },
                  { q: "Musím zalévat rostliny na balkoně i v zimě?", a: "Ano, ale výrazně méně. Mrazuvzdorné dřeviny a trvalky v nádobách zalévej jen v bezmrazých dnech, jednou za 2–3 týdny, aby kořenový bal úplně nevyschl. Za mrazu se nezalévá vůbec." },
                  { q: "Jak poznám, že je odtokový otvor na balkoně ucpaný?", a: "Po dešti se na dlažbě tvoří louže, které dlouho nezmizí, nebo voda stojí přímo u odtoku a neodtéká. V takovém případě hrozí, že voda v mrazu zmrzne a poškodí dlažbu i hydroizolaci." },
                  { q: "Mohou mrazy poškodit dlažbu na balkoně?", a: "Ano. Voda, která vnikne do drobných spár a prasklin, při zmrznutí zvýší objem a dlažbu nadzvedne nebo praskne. Proto je potřeba spáry a trhliny ošetřit těsnicí hmotou ještě před prvními mrazy." },
                  { q: "Mám na zimu sklápět nebo demontovat markýzu?", a: "Markýzu vždy sklop, aby na ní nedrželo sníh a led, které mohou poškodit látku i mechanismus. Pokud má balkon silný vítr nebo je markýza starší, je lepší ji na zimu demontovat úplně." },
                  { q: "Co se stane, když nechám vodu v samozavlažovací nádobě přes zimu?", a: "Voda v mrazu zvětší objem a plastovou nádobu roztrhne nebo prasklý zásobník už příští sezónu nepojme vodu správně. Proto nádoby na podzim vždy vyprázdni a uskladni v suchu." },
                ].map(({ q, a }) => (
                  <details key={q} className="faq-item">
                    <summary className="faq-summary">{q}<span className="faq-icon">▾</span></summary>
                    <div className="faq-body">{a}</div>
                  </details>
                ))}
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/jak-pripravit-balkon-na-zimu" title="Jak připravit balkon na zimu – kompletní checklist 2026" />

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
                <li><a href="#rostliny">Přesun a ochrana rostlin</a></li>
                <li><a href="#nabytek">Zahradní nábytek</a></li>
                <li><a href="#odtok">Kontrola odtoku</a></li>
                <li><a href="#dlazba">Dlažba a hydroizolace</a></li>
                <li><a href="#zabradli">Bezpečnost zábradlí</a></li>
                <li><a href="#truhliky">Truhlíky a nádoby</a></li>
                <li><a href="#markyza">Markýza a slunečník</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/sezonni-udrzba" className="sidebar-cat-link">🍂 Sezónní údržba<span>Více článků →</span></Link>
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
