import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak pěstovat vinnou révu na zahradě – výsadba, řez a treláž",
  description: "Výběr odrůdy podle klimatu ČR, výsadba, stavba treláže či pergoly, zimní a letní řez, hnojení i ochrana proti plísním a mrazu.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/pestovani-revy-na-zahrade" },
  openGraph: {
    title: "Jak pěstovat vinnou révu na zahradě – výsadba, řez a treláž",
    description: "Výběr odrůdy podle klimatu ČR, výsadba, stavba treláže či pergoly, zimní a letní řez, hnojení i ochrana proti plísním a mrazu.",
    url: "https://www.domovniguru.cz/blog/pestovani-revy-na-zahrade",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "article",
    publishedTime: "2026-06-22T08:00:00Z",
    modifiedTime: "2026-06-22T08:00:00Z",
    authors: ["DomovniGuru"],
    images: [{ url: "/api/og?title=Jak%20p%C4%9Bstovat%20vinnou%20r%C3%A9vu%20na%20zahrad%C4%9B%20%E2%80%93%20v%C3%BDsadba%2C%20%C5%99ez%20a%20trel%C3%A1%C5%BE&cat=blog", width: 1200, height: 630, alt: "Jak pěstovat vinnou révu na zahradě – výsadba, řez a treláž" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jak pěstovat vinnou révu na zahradě",
    description: "Výsadba, treláž, řez i ochrana révy proti plísním a mrazu – kompletní postup.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.domovniguru.cz/blog/pestovani-revy-na-zahrade#article",
      "headline": "Jak pěstovat vinnou révu na zahradě – výsadba, řez a treláž",
      "description": "Výběr odrůdy podle klimatu ČR, výsadba, stavba treláže či pergoly, zimní a letní řez, hnojení i ochrana proti plísním a mrazu.",
      "datePublished": "2026-06-22T08:00:00Z",
      "dateModified": "2026-06-22T08:00:00Z",
      "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.domovniguru.cz/blog/pestovani-revy-na-zahrade" },
      "inLanguage": "cs",
      "keywords": ["pěstování vinné révy", "výsadba révy na zahradě", "řez vinné révy", "treláž pro révu", "ochrana révy proti plísním"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.domovniguru.cz/blog/pestovani-revy-na-zahrade#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" },
        { "@type": "ListItem", "position": 3, "name": "Zahrada & terasa", "item": "https://www.domovniguru.cz/blog/kategorie/zahrada" },
        { "@type": "ListItem", "position": 4, "name": "Jak pěstovat vinnou révu na zahradě", "item": "https://www.domovniguru.cz/blog/pestovani-revy-na-zahrade" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.domovniguru.cz/blog/pestovani-revy-na-zahrade#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Kdy je nejlepší doba na výsadbu vinné révy?", "acceptedAnswer": { "@type": "Answer", "text": "Nejvhodnější je brzké jaro po odeznění mrazů, kdy si rostlina stihne vytvořit kořeny ještě před letním vedrem. Podzimní výsadba je možná u starších, zakořeněných sazenic, ale na nechráněných místech hrozí poškození mrazem v první zimě." } },
        { "@type": "Question", "name": "Jakou odrůdu révy vybrat pro chladnější oblasti ČR?", "acceptedAnswer": { "@type": "Answer", "text": "Pro chladnější a vyšší polohy se hodí odolné moderní odrůdy jako Solaris, Hibernal nebo Rondo, které snášejí kratší vegetační období a nižší teploty. V teplejších vinařských oblastech lze pěstovat i náročnější klasické odrůdy." } },
        { "@type": "Question", "name": "Jak vysoko by měla být treláž pro révu?", "acceptedAnswer": { "@type": "Answer", "text": "Standardní treláž má první vodič ve výšce 40–60 cm od země a další 2–3 vodiče nad sebou s rozestupem 30–40 cm až do výšky přibližně 180–200 cm. Pro pergolu je výška obvykle 220–250 cm." } },
        { "@type": "Question", "name": "Kdy se réva řeže?", "acceptedAnswer": { "@type": "Answer", "text": "Hlavní zimní řez se provádí od konce ledna do konce března, vždy mimo mrazivé dny, kdy je dřevo zmrzlé a křehké. Letní řez probíhá v průběhu vegetace a zahrnuje vylamování zálistků a zkracování přerostlých výhonů." } },
        { "@type": "Question", "name": "Jak chránit révu proti plísním?", "acceptedAnswer": { "@type": "Answer", "text": "Klíčová je prevence – dostatečný odstup keřů, pravidelné odlistění spodní části pro proudění vzduchu a preventivní postřiky měďnatými přípravky před květem a po dešti. Odolnější moderní odrůdy potřebují méně zásahů než klasické." } },
        { "@type": "Question", "name": "Za jak dlouho réva poprvé plodí?", "acceptedAnswer": { "@type": "Answer", "text": "První malou sklizeň lze čekat ve třetím roce po výsadbě, plnou plodnost ale réva dosahuje obvykle až v pátém až šestém roce, kdy má dostatečně vyvinutý kořenový systém a kosterní dřevo." } },
      ],
    },
    {
      "@type": "HowTo",
      "@id": "https://www.domovniguru.cz/blog/pestovani-revy-na-zahrade#howto",
      "name": "Jak pěstovat vinnou révu na zahradě",
      "description": "Výběr odrůdy podle klimatu ČR, výsadba, stavba treláže či pergoly, zimní a letní řez, hnojení i ochrana proti plísním a mrazu.",
      "step": [
        { "@type": "HowToStep", "name": "Výběr odrůdy podle klimatu", "text": "Zvol odrůdu odpovídající nadmořské výšce a klimatu lokality – odolnější novošlechtění pro chladnější oblasti, klasické odrůdy pro teplejší vinařské regiony." },
        { "@type": "HowToStep", "name": "Výsadba na slunné stanoviště", "text": "Vysaď sazenici brzy na jaře na slunné, závětrné místo s dobře propustnou půdou a dostatečným odstupem od stěn a dalších rostlin." },
        { "@type": "HowToStep", "name": "Stavba treláže nebo pergoly", "text": "Postav pevnou konstrukci s vodorovnými vodiči nebo pergolu, která unese váhu vyzrálé révy i s plody." },
        { "@type": "HowToStep", "name": "Zimní a letní řez", "text": "Prováděj hlavní řez na konci zimy pro tvorbu plodných výhonů a v létě odstraňuj zálistky a přerostlé výhony pro lepší provzdušnění." },
        { "@type": "HowToStep", "name": "Hnojení a zálivka", "text": "Hnoj postupně podle fenologické fáze a zalévej zejména v prvních letech po výsadbě, dokud nemá réva hluboký kořenový systém." },
        { "@type": "HowToStep", "name": "Ochrana proti plísním a mrazu", "text": "Preventivně ošetřuj proti houbovým chorobám a v chladnějších oblastech chraň mladé výhony a kmínek před prvními podzimními mrazy." },
      ],
    },
  ],
};

const RELATED = [
  { title: "Jak navrhnout zahradu od základu", href: "/blog/jak-navrhnout-zahradu", read: "7 min" },
  { title: "Jak pěstovat rajčata na zahradě", href: "/blog/jak-pestovat-rajcata", read: "6 min" },
  { title: "Zahradní plot ze dřeva – stavba a údržba", href: "/blog/zahradni-plot-ze-dreva", read: "6 min" },
  { title: "Automatické zavlažování zahrady", href: "/blog/automaticke-zavlazovani-zahrady", read: "6 min" },
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
              <Link href="/blog/kategorie/zahrada">Zahrada & terasa</Link><span className="breadcrumb-sep">/</span>
              <span>Jak pěstovat vinnou révu na zahradě</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 7 min čtení</span>
              </div>
              <h1 className="article-h1">Jak pěstovat vinnou révu na zahradě – výsadba, řez a treláž</h1>
              <p className="article-lead">Vinná réva není jen pro vinařské oblasti jižní Moravy – při výběru správné odrůdy a troše péče se jí daří i na běžné zahradě v chladnějších částech republiky. Ukážeme ti, jak révu vysadit, postavit pro ni vhodnou opěrnou konstrukci a udržet ji zdravou po celý rok.</p>
              <div className="article-meta-row">
                <span>Aktualizováno: 22. června 2026</span><span>·</span><span>DomovniGuru</span>
              </div>
              <ShareButtons url="https://www.domovniguru.cz/blog/pestovani-revy-na-zahrade" title="Jak pěstovat vinnou révu na zahradě – výsadba, řez a treláž" />
            </header>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#odrudy">Výběr odrůdy podle klimatu</a></li>
                <li><a href="#vysadba">Výsadba révy</a></li>
                <li><a href="#trelaz">Treláž a pergola</a></li>
                <li><a href="#rez">Zimní a letní řez</a></li>
                <li><a href="#hnojeni">Hnojení a péče během sezóny</a></li>
                <li><a href="#ochrana">Ochrana proti plísním a mrazu</a></li>
                <li><a href="#sklizen">Kdy čekat první sklizeň</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="odrudy">
              <h2>Výběr odrůdy podle klimatu ČR</h2>
              <p>Úspěch pěstování révy začíná správnou volbou odrůdy, protože ne každá zvládne klimatické podmínky mimo tradiční vinařské oblasti.</p>
              <h3>Odolné odrůdy pro chladnější polohy</h3>
              <p>V Čechách a vyšších polohách Moravy se osvědčují moderní křížené odrůdy jako Solaris, Hibernal nebo Rondo. Mají kratší vegetační dobu, vyzrávají i v chladnějším a kratším létě a jsou odolnější vůči houbovým chorobám než klasické vinařské odrůdy.</p>
              <h3>Klasické odrůdy pro teplé oblasti</h3>
              <p>Pokud zahrada leží v teplejší nížinné oblasti s dlouhým slunečným létem, lze zkusit i náročnější klasické odrůdy jako Ryzlink rýnský nebo Svatovavřinecké. Tyto odrůdy potřebují víc tepla a péče, ale odmění se kvalitnější sklizní.</p>
              <h3>Stolní vs. moštové odrůdy</h3>
              <p>Pro přímou spotřebu hroznů ze zahrady zvol stolní odrůdy s velkými, sladkými bobulemi a tenčí slupkou, jako je Vanessa nebo Karneol. Moštové odrůdy mívají menší bobule s vyšším obsahem cukru určené primárně na zpracování.</p>
            </section>

            <section id="vysadba">
              <h2>Výsadba révy</h2>
              <p>Správně zvolené stanoviště a termín výsadby ovlivní, jak rychle se réva ujme a začne plodit.</p>
              <h3>Termín výsadby</h3>
              <p>Nejlepší je vysadit révu brzy na jaře, jakmile pomine riziko silných mrazů, obvykle v průběhu dubna. Rostlina tak má před sebou celou vegetační sezónu na zakořenění. Podzimní výsadba je vhodná jen pro starší, dobře zakořeněné sazenice a v mírnějších oblastech.</p>
              <h3>Výběr stanoviště</h3>
              <p>Réva potřebuje co nejvíce slunce – ideálně jižní nebo jihozápadní stranu zahrady, chráněnou před silným severním a východním větrem. Půda by měla být dobře propustná, mírně vápenatá a bez stagnující vody, ve které kořeny snadno hnijí.</p>
              <h3>Postup výsadby</h3>
              <p>Vykopej jámu o rozměrech přibližně 40×40×40 cm, na dno přidej kompost smíchaný se zeminou a sazenici zasaď tak, aby roubovací místo zůstalo nad úrovní půdy. Po výsadbě důkladně zalij a kolem kmínku znač opatrně udusej zeminu.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Mezi jednotlivými keři révy dodržuj odstup alespoň 1,2–1,5 m, aby měl každý keř dost prostoru pro kořeny i pro proudění vzduchu mezi listy.</div>
            </section>

            <section id="trelaz">
              <h2>Stavba treláže nebo pergoly pro révu</h2>
              <p>Réva je pnoucí rostlina a bez opěrné konstrukce by se rozlézala po zemi, kde plody hnijí a listy podléhají chorobám snáz.</p>
              <h3>Klasická treláž s vodiči</h3>
              <p>Nejběžnější řešení je treláž ze dřevěných nebo betonových sloupků s napnutými drátěnými vodiči. První vodič veď ve výšce 40–60 cm nad zemí, další 2–3 vodiče nad sebou s odstupem 30–40 cm, až do celkové výšky kolem 180–200 cm. Sloupky zakotvi minimálně 50–60 cm do země pro stabilitu.</p>
              <h3>Pergola pro okrasné i užitkové pnutí</h3>
              <p>Pokud chceš révu zároveň využít jako stínící prvek nad terasou, vhodnější je pergola s vodorovnou konstrukcí ve výšce 220–250 cm. Réva se na ní rozprostře do plochy a vytvoří přirozený stín, sklizeň hroznů je ale o něco náročnější díky výšce.</p>
              <h3>Vedení výhonků na konstrukci</h3>
              <p>Hlavní kmínek vyveď svisle k první vodorovné úrovni a plodné výhony pak směruj horizontálně podél vodičů. Pravidelně je přivazuj měkkým vázacím materiálem, aby je vítr neodlomil, jakmile na nich budou těžké hrozny.</p>
            </section>

            <section id="rez">
              <h2>Zimní a letní řez</h2>
              <p>Řez je nejdůležitější pravidelnou činností při pěstování révy a přímo ovlivňuje množství i kvalitu sklizně.</p>
              <h3>Zimní řez</h3>
              <p>Hlavní řez probíhá na konci zimy, od konce ledna do konce března, kdy je réva v klidu, ale teploty už nejsou extrémně nízké, protože zmrzlé dřevo se snadno tříští. Cílem je ponechat 2–4 zdravé, dobře vyzrálé výhony s několika očky a odstranit starší, vyčerpané dřevo.</p>
              <h3>Letní řez a vylamování zálistků</h3>
              <p>Během vegetace pravidelně vylamuj zálistky – druhotné výhonky vyrůstající z paždí listů, které zbytečně odčerpávají sílu rostliny. Přerostlé hlavní výhony zkrať nad poslední úrovní vodiče, aby se síla soustředila do tvorby a zrání hroznů.</p>
              <h3>Odlistění kolem hroznů</h3>
              <p>Několik týdnů před sklizní odstraň listy v bezprostředním okolí hroznů na straně přivrácené ke slunci. Zlepšíš tím provětrávání a urychlíš dozrávání, zároveň to snižuje riziko plísní na samotných bobulích.</p>
            </section>

            <section id="hnojeni">
              <h2>Hnojení a péče během sezóny</h2>
              <p>Réva nepotřebuje extrémně bohatou výživu, přehnojení dusíkem naopak vede k bujnému růstu listů na úkor plodů.</p>
              <h3>Hnojení podle fenologické fáze</h3>
              <ul>
                <li><strong>Brzy na jaře</strong> – menší dávka dusíkatého hnojiva pro nastartování růstu</li>
                <li><strong>Před květem</strong> – hnojivo s vyšším podílem draslíku a fosforu pro lepší nasazení plodů</li>
                <li><strong>Po odkvětu a během zrání</strong> – draselné hnojivo podporující sladkost a vyzrávání bobulí</li>
              </ul>
              <h3>Zálivka</h3>
              <p>V prvních dvou letech po výsadbě réva potřebuje pravidelnou zálivku, dokud nevytvoří hluboký kořenový systém. Vzrostlá réva už snáší krátkodobé sucho dobře, intenzivní zálivka je potřeba jen v dlouhotrvajícím horkém a suchém létě.</p>
            </section>

            <section id="ochrana">
              <h2>Ochrana proti plísním a mrazu</h2>
              <p>Dvě nejčastější hrozby pro révu na zahradě jsou houbové choroby v létě a pozdní mrazy na jaře nebo na podzim.</p>
              <h3>Prevence plísně</h3>
              <p>Padlí a plíseň révová se šíří nejrychleji ve vlhkém a nevětraném prostředí. Dostatečný odstup mezi keři, odlistění spodní části a pravidelný letní řez výrazně snižují riziko nákazy. Preventivní postřik měďnatým přípravkem před květem a po vydatném dešti je u méně odolných odrůd téměř nutností.</p>
              <h3>Ochrana proti mrazu</h3>
              <p>Mladé sazenice v prvních dvou zimách chraň navršením zeminy nebo slámy kolem kmínku do výšky 15–20 cm. U citlivějších odrůd v chladnějších oblastech pomáhá i jutová textilie omotaná kolem kosterních výhonů.</p>
              <h3>Pozdní jarní mrazíky</h3>
              <p>Pučící výhonky jsou na pozdní mrazík velmi citlivé. Pokud hrozí noční mráz po vyrašení, lze keře krátkodobě přikrýt netkanou textilií, případně u malého počtu keřů použít zahřívání mlhou nebo svíčkami, jak to dělají i drobní vinaři.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Réva vysazená u jižní zdi domu má díky akumulovanému teplu ze zdiva o pár stupňů teplejší mikroklima a je méně náchylná na pozdní mrazíky.</div>
            </section>

            <section id="sklizen">
              <h2>Kdy čekat první sklizeň</h2>
              <p>Trpělivost je u révy klíčová – první roky je důležitější budovat silnou rostlinu než sklízet velké množství hroznů.</p>
              <h3>První roky po výsadbě</h3>
              <p>V prvním a druhém roce by réva neměla plodit vůbec, případné první hrozny je lepší odstranit, aby se síla soustředila do růstu kořenů a kosterního dřeva. Malou, symbolickou sklizeň lze čekat ve třetím roce.</p>
              <h3>Plná plodnost</h3>
              <p>Plnou plodnost réva dosahuje typicky v pátém až šestém roce po výsadbě, kdy má vyvinutý kořenový systém i dostatek kosterních výhonů pro nesení plodů. Od té doby může zdravý keř plodit desítky let při pravidelném řezu a péči.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Kdy je nejlepší doba na výsadbu vinné révy?", a: "Nejvhodnější je brzké jaro po odeznění mrazů, kdy si rostlina stihne vytvořit kořeny ještě před letním vedrem. Podzimní výsadba je možná u starších, zakořeněných sazenic, ale na nechráněných místech hrozí poškození mrazem v první zimě." },
                  { q: "Jakou odrůdu révy vybrat pro chladnější oblasti ČR?", a: "Pro chladnější a vyšší polohy se hodí odolné moderní odrůdy jako Solaris, Hibernal nebo Rondo, které snášejí kratší vegetační období a nižší teploty. V teplejších vinařských oblastech lze pěstovat i náročnější klasické odrůdy." },
                  { q: "Jak vysoko by měla být treláž pro révu?", a: "Standardní treláž má první vodič ve výšce 40–60 cm od země a další 2–3 vodiče nad sebou s rozestupem 30–40 cm až do výšky přibližně 180–200 cm. Pro pergolu je výška obvykle 220–250 cm." },
                  { q: "Kdy se réva řeže?", a: "Hlavní zimní řez se provádí od konce ledna do konce března, vždy mimo mrazivé dny, kdy je dřevo zmrzlé a křehké. Letní řez probíhá v průběhu vegetace a zahrnuje vylamování zálistků a zkracování přerostlých výhonů." },
                  { q: "Jak chránit révu proti plísním?", a: "Klíčová je prevence – dostatečný odstup keřů, pravidelné odlistění spodní části pro proudění vzduchu a preventivní postřiky měďnatými přípravky před květem a po dešti. Odolnější moderní odrůdy potřebují méně zásahů než klasické." },
                  { q: "Za jak dlouho réva poprvé plodí?", a: "První malou sklizeň lze čekat ve třetím roce po výsadbě, plnou plodnost ale réva dosahuje obvykle až v pátém až šestém roce, kdy má dostatečně vyvinutý kořenový systém a kosterní dřevo." },
                ].map(({ q, a }) => (
                  <details key={q} className="faq-item">
                    <summary className="faq-summary">{q}<span className="faq-icon">▾</span></summary>
                    <div className="faq-body">{a}</div>
                  </details>
                ))}
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/pestovani-revy-na-zahrade" title="Jak pěstovat vinnou révu na zahradě – výsadba, řez a treláž" />

            <section className="related-section">
              <h2>Související články</h2>
              <div className="related-grid">
                {RELATED.map((r) => (
                  <Link key={r.href} href={r.href} className="card">
                    <div className="card-eyebrow-row"><span>Zahrada & terasa</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#odrudy">Výběr odrůdy</a></li>
                <li><a href="#vysadba">Výsadba révy</a></li>
                <li><a href="#trelaz">Treláž a pergola</a></li>
                <li><a href="#rez">Zimní a letní řez</a></li>
                <li><a href="#hnojeni">Hnojení a péče</a></li>
                <li><a href="#ochrana">Ochrana proti plísním</a></li>
                <li><a href="#sklizen">První sklizeň</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/zahrada" className="sidebar-cat-link">🌿 Zahrada & terasa<span>Více článků →</span></Link>
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
