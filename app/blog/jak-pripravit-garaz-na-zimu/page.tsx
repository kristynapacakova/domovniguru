import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak připravit garáž na zimu – kompletní checklist 2026",
  description: "Vrata, těsnění, vlhkost, nářadí, auto i elektřina – kompletní checklist přípravy garáže na zimu. Co zkontrolovat než přijdou mrazy.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-pripravit-garaz-na-zimu" },
  openGraph: { title: "Jak připravit garáž na zimu – kompletní checklist 2026", description: "Vrata, těsnění, vlhkost, nářadí, auto i elektřina – co zkontrolovat před zimou.", url: "https://www.domovniguru.cz/blog/jak-pripravit-garaz-na-zimu", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-17T08:00:00Z", modifiedTime: "2026-06-17T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20p%C5%99ipravit%20gar%C3%A1%C5%BE%20na%20zimu%20%E2%80%93%20kompletn%C3%AD%20checklist%202026&cat=blog", width: 1200, height: 630, alt: "Jak připravit garáž na zimu – kompletní checklist 2026" }] },
  twitter: { card: "summary_large_image", title: "Jak připravit garáž na zimu – kompletní checklist 2026", description: "Vrata, těsnění, vlhkost, nářadí, auto i elektřina – co zkontrolovat před zimou." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/jak-pripravit-garaz-na-zimu#article",
    "headline": "Jak připravit garáž na zimu – kompletní checklist 2026",
    "description": "Vrata, těsnění, vlhkost, nářadí, auto i elektřina – kompletní checklist přípravy garáže na zimu. Co zkontrolovat než přijdou mrazy.",
    "datePublished": "2026-06-17T08:00:00Z",
    "dateModified": "2026-06-17T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.domovniguru.cz/blog/jak-pripravit-garaz-na-zimu" },
    "inLanguage": "cs",
    "keywords": ["jak připravit garáž na zimu", "zazimování garáže", "promazání garážových vrat", "vlhkost v garáži", "zazimování nářadí", "checklist garáž zima"]
  }, {
    "@type": "FAQPage",
    "@id": "https://www.domovniguru.cz/blog/jak-pripravit-garaz-na-zimu#faq",
    "mainEntity": [
      { "@type": "Question", "name": "Jak často mazat garážová vrata?", "acceptedAnswer": { "@type": "Answer", "text": "Pojezdové kolejnice, panty a pružiny promazávej silikonovým sprejem alespoň jednou před zimou a jednou v polovině sezóny. Mráz a vlhko urychlují korozi a vysychání maziva, takže se mechanismus může v lednu zadřít." } },
      { "@type": "Question", "name": "Jak se zbavit vlhkosti v garáži bez vytápění?", "acceptedAnswer": { "@type": "Answer", "text": "Garáž bez vytápění je náchylná na vlhkost a plíseň. Větrej v suchých mrazivých dnech, kdy je venkovní vzduch sušší než ten v garáži. Do menšího prostoru postačí silikagelové sáčky, do většího je lepší elektrický odvlhčovač." } },
      { "@type": "Question", "name": "Jakou chemii a nářadí musím z garáže přes zimu přesunout?", "acceptedAnswer": { "@type": "Answer", "text": "Mrazu citlivé tekutiny – barvy, lepidla, některé chemikálie a spreje – přesuň do tepla, jinak zmrznou nebo se rozloží. Baterie elektrického nářadí skladuj při pokojové teplotě, protože mráz zkracuje jejich životnost a kapacitu." } },
      { "@type": "Question", "name": "Co dělat, když v garáži parkuje auto a hrozí led u vjezdu?", "acceptedAnswer": { "@type": "Answer", "text": "Pokud garáž slouží jako úkryt auta, uvolni v ní místo pro snadný a bezpečný vjezd a zkontroluj, že okapový systém u vjezdu svádí vodu mimo cestu před garáží – stojící voda tam v mrazu vytváří nebezpečnou ledovou plochu." } },
      { "@type": "Question", "name": "Jak utěsnit garážová vrata proti chladu?", "acceptedAnswer": { "@type": "Answer", "text": "Zkontroluj gumové těsnění po celém obvodu vrat i u prahu – prasklé nebo zatvrdlé těsnění vyměň. Kvalitní těsnění zabrání vnikání chladu, vlhkosti a drobného hlodavého hmyzu i listí dovnitř garáže." } },
      { "@type": "Question", "name": "Je potřeba před zimou kontrolovat elektroinstalaci v garáži?", "acceptedAnswer": { "@type": "Answer", "text": "Ano. Zkontroluj prodlužovací kabely a zásuvky na vlhkost a opotřebení, zejména pokud v garáži přes zimu necháváš zapojené nářadí nebo nabíječku elektromobilu – vlhko a mráz zvyšují riziko zkratu." } },
    ]
  }, {
    "@type": "HowTo",
    "@id": "https://www.domovniguru.cz/blog/jak-pripravit-garaz-na-zimu#howto",
    "name": "Jak připravit garáž na zimu – kompletní checklist 2026",
    "description": "Vrata, těsnění, vlhkost, nářadí, auto i elektřina – kompletní checklist přípravy garáže na zimu. Co zkontrolovat než přijdou mrazy.",
    "step": [
      { "@type": "HowToStep", "name": "Kontrola a promazání vrat", "text": "Pojezdové kolejnice, panty a pružiny zkontroluj a promaž silikonovým sprejem – mráz a vlhko urychlují korozi a zadření mechanismu." },
      { "@type": "HowToStep", "name": "Utěsnění vrat a oken", "text": "Zkontroluj gumové těsnění proti vnikání chladu a vlhkosti, nezapomeň na těsnění u prahu." },
      { "@type": "HowToStep", "name": "Odvlhčení prostoru", "text": "Garáž bez vytápění je náchylná na vlhkost a plíseň – větrej v suchých dnech a použij odvlhčovač nebo silikagelové sáčky." },
      { "@type": "HowToStep", "name": "Zazimování nářadí a chemie", "text": "Mrazu citlivé tekutiny přesuň do tepla, baterie nářadí skladuj při pokojové teplotě." },
      { "@type": "HowToStep", "name": "Příprava na zimní auto", "text": "Uvolni místo pro auto a zkontroluj, že okapový systém svádí vodu mimo vjezd – jinak hrozí led." },
      { "@type": "HowToStep", "name": "Protipožární, bezpečnostní a elektro kontrola", "text": "Zkontroluj hasicí přístroj, uložení hořlavin a stav prodlužovacích kabelů a zásuvek." }
    ]
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://www.domovniguru.cz/blog/jak-pripravit-garaz-na-zimu#breadcrumb",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" },
      { "@type": "ListItem", "position": 3, "name": "Sezónní údržba", "item": "https://www.domovniguru.cz/blog/kategorie/sezonni-udrzba" },
      { "@type": "ListItem", "position": 4, "name": "Jak připravit garáž na zimu – kompletní checklist 2026", "item": "https://www.domovniguru.cz/blog/jak-pripravit-garaz-na-zimu" }
    ]
  }
  ]
};

const RELATED = [
  { title: "Příprava domu na zimu – kompletní checklist", href: "/blog/priprava-domu-na-zimu", read: "10 min" },
  { title: "Jak připravit auto na zimu – karoserie a lak", href: "/blog/auto-na-zimu-karoserie", read: "6 min" },
  { title: "Jak zazimovat zahradní techniku", href: "/blog/zazimovani-zahradni-techniky", read: "5 min" },
  { title: "Jak se zbavit vlhkosti v bytě", href: "/blog/zbavit-se-vlhkosti-v-byte", read: "7 min" },
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
              <span>Jak připravit garáž na zimu</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">🍂 Sezónní údržba</Link>
                <span className="article-read-time">⏱ 8 min čtení</span>
              </div>
              <h1 className="article-h1">Jak připravit garáž na zimu – kompletní checklist</h1>
              <p className="article-lead">Zaseknutá vrata, plíseň na zdech, zmrzlá barva nebo zkorodované kolejnice – garáž bývá při zazimování domu opomíjená, přitom mráz a vlhko jí dají zabrat nejvíc. Projdi si checklist a vyhni se zbytečným škodám.</p>
              <div className="article-meta-row"><span>Aktualizováno: 17. června 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/jak-pripravit-garaz-na-zimu" title="Jak připravit garáž na zimu – kompletní checklist 2026" />
            </header>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#vrata">Kontrola a promazání vrat</a></li>
                <li><a href="#tesneni">Utěsnění vrat a oken</a></li>
                <li><a href="#vlhkost">Odvlhčení prostoru</a></li>
                <li><a href="#naradi">Zazimování nářadí a chemie</a></li>
                <li><a href="#auto">Příprava na zimní auto</a></li>
                <li><a href="#bezpecnost">Protipožární a bezpečnostní kontrola</a></li>
                <li><a href="#elektro">Elektroinstalace</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="vrata">
              <h2>Kontrola a promazání vrat</h2>
              <p>Garážová vrata jsou nejvíc namáhaná část garáže – a v zimě to platí dvojnásob. Mráz a vlhko urychlují korozi kovových částí a vysychání maziva, takže se mechanismus, který v létě jel hladce, může v lednu zadřít nebo začít vrzat.</p>
              <h3>Pojezdové kolejnice</h3>
              <p>Zkontroluj kolejnice po celé délce – nesmí na nich být rez, ohnutá místa ani nahromaděná nečistota. Otři je hadrem a poté naneste tenkou vrstvu silikonového spreje. Vyhni se hustým mazacím tukům, které v mrazu tuhnou a brzdí pohyb.</p>
              <h3>Panty a kladky</h3>
              <p>U sekčních i výklopných vrat promaž všechny panty, kladky a ložiska. Pokud vrata vrzají už teď, v zimě to bude horší – vlhkost se do spár dostává snáz a koroze postupuje rychleji.</p>
              <h3>Pružiny</h3>
              <p>Torzní i tažné pružiny jsou pod velkým napětím a koroze je dělá náchylnější k prasknutí. Vizuálně zkontroluj, že nejsou popraskané nebo viditelně zkorodované, a postříkej je silikonovým sprejem. Pokud si nejsi jistý stavem pružin, raději přivolej servis – jejich výměna je bezpečnostně riziková práce.</p>
              <h3>Funkční zkouška</h3>
              <p>Po promazání nech vrata projet celým zdvihem nahoru a dolů a poslouchej, jestli se mechanismus nezasekává nebo nevrže na novém místě. Drobné vrznutí po promazání je v pořádku, opakované zadrhávání ne – v tom případě zkontroluj, zda kolejnice nejsou v některém místě ohnuté nebo nepřipevněné.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Silikonový sprej je lepší volba než olej na bázi minerálních tuků – nepřitahuje prach a nezhoustne při nízkých teplotách.</div>
            </section>

            <section id="tesneni">
              <h2>Utěsnění vrat a oken</h2>
              <p>Netěsnící garáž je jako netěsnící dům v menším – chlad, vlhkost a prach pronikají dovnitř a urychlují poškození všeho, co v garáži skladuješ.</p>
              <h3>Gumové těsnění vrat</h3>
              <p>Projdi celý obvod vrat a zkontroluj stav gumového těsnění. Praskliny, ztvrdlá nebo zborcená místa už nefungují a je potřeba je vyměnit – těsnicí lišty se prodávají v metráži a montují se snadno i bez odborníka.</p>
              <h3>Práh vrat</h3>
              <p>Práh je nejvíc namáhané místo – propustí dovnitř déšť, roztátý sníh i studený vzduch. Pokud práh netěsní, doplň gumovou nebo kartáčovou lištu, případně práhový profil, který vodu odvede mimo garáž.</p>
              <h3>Okna v garáži</h3>
              <p>Pokud má garáž okna, zkontroluj těsnění stejně jako u oken v domě – stlač gumu prstem, měla by být pružná. Tvrdé nebo popraskané těsnění vyměň, jinak studený vzduch a vlhkost budou pronikat dovnitř celou zimu.</p>
              <h3>Spodní lišty a boční zárubně</h3>
              <p>Kromě prahu nezapomeň ani na boční zárubně vrat, kde se gumové těsnění opotřebovává tlakem při zavírání. Pokud cítíš průvan i se zavřenými vraty, projdi obvod ručně a najdi konkrétní mezeru – často stačí dotáhnout úchyt nebo doplnit jednu chybějící lištu, ne měnit těsnění celé.</p>
            </section>

            <section id="vlhkost">
              <h2>Odvlhčení prostoru</h2>
              <p>Garáž bez vytápění je náchylná na vlhkost a plíseň – v zimě se rozdíl teplot uvnitř a venku zvyšuje a na chladných stěnách i karoserii auta kondenzuje voda.</p>
              <h3>Větrání ve správný čas</h3>
              <p>Větrej v suchých mrazivých dnech, kdy je venkovní vzduch sušší než ten v garáži – krátké a intenzivní vyvětrání odvede vlhký vzduch ven rychleji než dlouhé pootevření dveří.</p>
              <h3>Odvlhčovač do větší garáže</h3>
              <p>Pro garáž, kde parkuje auto nebo je v ní více vlhkosti, je praktickým řešením elektrický odvlhčovač vzduchu. Funguje samostatně a udrží vlhkost v rozumných mezích i bez tvého zásahu.</p>
              <h3>Silikagelové sáčky do menšího prostoru</h3>
              <p>Do menší garáže nebo skladovacího koutu postačí silikagelové sáčky nebo nádoby s pohlcovačem vlhkosti – levné řešení, které je potřeba pravidelně vyměňovat nebo regenerovat.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pravidelně kontroluj rohy garáže a místa za uloženými věcmi – tam se plíseň objevuje nejdřív, protože tam vzduch nejméně proudí.</div>
            </section>

            <section id="naradi">
              <h2>Zazimování nářadí a chemie</h2>
              <p>Ne všechno, co v garáži skladuješ, mráz snese. Před zimou je dobré udělat inventuru a citlivé věci přesunout do tepla.</p>
              <h3>Tekutiny citlivé na mráz</h3>
              <p>Barvy, lepidla a některé chemikálie a spreje mráz nesnášejí – zmrznou, oddělí se nebo ztratí funkčnost. Přesuň je do vytápěné části domu, sklepa s vyšší teplotou nebo do menší vyhrazené skříně, kterou lze přitápět.</p>
              <h3>Baterie elektrického nářadí</h3>
              <p>Akumulátory pro vrtačky, pily a další nářadí skladuj při pokojové teplotě. Mráz zkracuje jejich životnost a kapacitu, a opakované vystavení nízkým teplotám může baterii trvale poškodit.</p>
              <h3>Ostatní nářadí</h3>
              <p>Ruční nářadí mráz nevadí, ale vlhkost ano – koroze na čepelích a kovových částech postupuje rychleji ve vlhkém prostředí. Otři nářadí suchým hadrem a kovové části lehce ošetři olejem nebo antikorozním sprejem.</p>
              <h3>Organizace skladování</h3>
              <p>Citlivé věci skladuj výš nad zemí, ideálně na polici nebo v uzavřeném boxu – při tání sněhu z bot nebo auta se na podlaze garáže často objevuje voda, která může poškodit krabice a obsah uložený přímo na betonu.</p>
            </section>

            <section id="auto">
              <h2>Příprava na zimní auto</h2>
              <p>Pokud garáž slouží i jako úkryt auta přes zimu, je potřeba na to prostor přizpůsobit.</p>
              <h3>Uvolnění místa</h3>
              <p>Zimní auto potřebuje bezpečný a snadný vjezd i výjezd, zvlášť za snížené viditelnosti nebo na sněhu. Uvolni místo od sezónních věcí, zahradní techniky nebo nepořádku, který se nahromadil přes léto.</p>
              <h3>Okapový systém u vjezdu</h3>
              <p>Zkontroluj, že okapový systém svádí vodu mimo vjezd do garáže – stojící voda tam v mrazu vytváří nebezpečnou ledovou plochu, na které lze snadno upadnout nebo dostat smyk při zajíždění do garáže.</p>
              <div className="article-tip"><strong>⚠️ Pozor:</strong> Pokud voda u vjezdu opakovaně stojí i mimo zimu, jde o systémový problém se spádováním nebo okapy – v zimě se projeví nejvýrazněji formou ledu.</div>
            </section>

            <section id="bezpecnost">
              <h2>Protipožární a bezpečnostní kontrola</h2>
              <p>Garáž bývá místem, kde se hromadí hořlavé látky, a v zimě se v ní navíc často topí přenosnými ohřívači nebo se v ní více pohybujeme – kontrola bezpečnostních prvků se proto vyplatí.</p>
              <h3>Hasicí přístroj</h3>
              <p>Zkontroluj, že je hasicí přístroj v garáži přítomný, není prošlá jeho revize a je snadno dostupný – ne zavalený krabicemi nebo nářadím.</p>
              <h3>Uložení hořlavin</h3>
              <p>Hořlavé látky – benzín, ředidla, plynové lahve – ukládej oddělené od zdrojů tepla a pokud možno uzamčené, mimo dosah dětí. V zimě, kdy se v garáži často svítí a topí, je riziko vyšší.</p>
            </section>

            <section id="elektro">
              <h2>Elektroinstalace</h2>
              <p>Vlhkost v garáži je rizikem i pro elektrické rozvody, zvlášť pokud v garáži přes zimu necháváš zapojené nářadí nebo nabíječku elektromobilu.</p>
              <h3>Prodlužovací kabely a zásuvky</h3>
              <p>Zkontroluj prodlužovací kabely a zásuvky na vlhkost, opotřebení izolace nebo poškozené konektory. Poškozený kabel ve vlhkém prostředí výrazně zvyšuje riziko zkratu.</p>
              <h3>Nabíječka elektromobilu</h3>
              <p>Pokud v garáži nabíjíš elektromobil, ověř, že je nabíjecí stanice i přívodní kabeláž určena pro venkovní nebo vlhké prostředí (odpovídající krytí IP) a že není vystavena přímému stříkání vody nebo sněhu.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Jak často mazat garážová vrata?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Pojezdové kolejnice, panty a pružiny promazávej silikonovým sprejem alespoň jednou před zimou a jednou v polovině sezóny. Mráz a vlhko urychlují korozi a vysychání maziva, takže se mechanismus může v lednu zadřít.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak se zbavit vlhkosti v garáži bez vytápění?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Garáž bez vytápění je náchylná na vlhkost a plíseň. Větrej v suchých mrazivých dnech, kdy je venkovní vzduch sušší než ten v garáži. Do menšího prostoru postačí silikagelové sáčky, do většího je lepší elektrický odvlhčovač.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jakou chemii a nářadí musím z garáže přes zimu přesunout?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Mrazu citlivé tekutiny – barvy, lepidla, některé chemikálie a spreje – přesuň do tepla, jinak zmrznou nebo se rozloží. Baterie elektrického nářadí skladuj při pokojové teplotě, protože mráz zkracuje jejich životnost a kapacitu.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Co dělat, když v garáži parkuje auto a hrozí led u vjezdu?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Pokud garáž slouží jako úkryt auta, uvolni v ní místo pro snadný a bezpečný vjezd a zkontroluj, že okapový systém u vjezdu svádí vodu mimo cestu před garáží – stojící voda tam v mrazu vytváří nebezpečnou ledovou plochu.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak utěsnit garážová vrata proti chladu?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Zkontroluj gumové těsnění po celém obvodu vrat i u prahu – prasklé nebo zatvrdlé těsnění vyměň. Kvalitní těsnění zabrání vnikání chladu, vlhkosti a drobného hlodavého hmyzu i listí dovnitř garáže.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Je potřeba před zimou kontrolovat elektroinstalaci v garáži?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ano. Zkontroluj prodlužovací kabely a zásuvky na vlhkost a opotřebení, zejména pokud v garáži přes zimu necháváš zapojené nářadí nebo nabíječku elektromobilu – vlhko a mráz zvyšují riziko zkratu.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/jak-pripravit-garaz-na-zimu" title="Jak připravit garáž na zimu – kompletní checklist 2026" />

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
                <li><a href="#vrata">Kontrola a promazání vrat</a></li>
                <li><a href="#tesneni">Utěsnění vrat a oken</a></li>
                <li><a href="#vlhkost">Odvlhčení prostoru</a></li>
                <li><a href="#naradi">Zazimování nářadí a chemie</a></li>
                <li><a href="#auto">Příprava na zimní auto</a></li>
                <li><a href="#bezpecnost">Bezpečnostní kontrola</a></li>
                <li><a href="#elektro">Elektroinstalace</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/sezonni-udrzba" className="sidebar-cat-link">🍂 Sezónní údržba<span>20 článků →</span></Link>
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
