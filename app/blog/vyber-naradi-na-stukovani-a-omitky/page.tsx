import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Výběr nářadí na štukování a omítky",
  description: "Hladítka, fanky, štuková lžíce, míchadlo i hoblík – jaké nářadí potřebuješ na jemné štuky i hrubé omítky a jak ho vybrat a udržovat.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/vyber-naradi-na-stukovani-a-omitky" },
  openGraph: {
    title: "Výběr nářadí na štukování a omítky",
    description: "Hladítka, fanky, štuková lžíce, míchadlo i hoblík – jaké nářadí potřebuješ na jemné štuky i hrubé omítky a jak ho vybrat a udržovat.",
    url: "https://www.domovniguru.cz/blog/vyber-naradi-na-stukovani-a-omitky",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "article",
    publishedTime: "2026-06-25T08:00:00Z",
    modifiedTime: "2026-06-25T08:00:00Z",
    authors: ["DomovniGuru"],
    images: [{ url: "/api/og?title=V%C3%BDb%C4%9Br%20n%C3%A1%C5%99ad%C3%AD%20na%20%C5%A1tukov%C3%A1n%C3%AD%20a%20om%C3%ADtky&cat=blog", width: 1200, height: 630, alt: "Výběr nářadí na štukování a omítky" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Výběr nářadí na štukování a omítky",
    description: "Hladítka, fanky, štuková lžíce, míchadlo – jaké nářadí potřebuješ a jak ho vybrat.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.domovniguru.cz/blog/vyber-naradi-na-stukovani-a-omitky#article",
      "headline": "Výběr nářadí na štukování a omítky",
      "description": "Hladítka, fanky, štuková lžíce, míchadlo i hoblík – jaké nářadí potřebuješ na jemné štuky i hrubé omítky a jak ho vybrat a udržovat.",
      "datePublished": "2026-06-25T08:00:00Z",
      "dateModified": "2026-06-25T08:00:00Z",
      "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.domovniguru.cz/blog/vyber-naradi-na-stukovani-a-omitky" },
      "inLanguage": "cs",
      "keywords": ["nářadí na štukování", "hladítko na omítky", "fanka štuková lžíce", "míchání omítky vrtačkou", "výběr nářadí na omítky"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.domovniguru.cz/blog/vyber-naradi-na-stukovani-a-omitky#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" },
        { "@type": "ListItem", "position": 3, "name": "Malování & barvy", "item": "https://www.domovniguru.cz/blog/kategorie/malovani" },
        { "@type": "ListItem", "position": 4, "name": "Výběr nářadí na štukování a omítky", "item": "https://www.domovniguru.cz/blog/vyber-naradi-na-stukovani-a-omitky" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.domovniguru.cz/blog/vyber-naradi-na-stukovani-a-omitky#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Jaký je rozdíl mezi nerezovým a plastovým hladítkem?", "acceptedAnswer": { "@type": "Answer", "text": "Nerezové hladítko je tužší, lépe vyhlazuje jemné štuky a nezanechává otisky na povrchu, ale je dražší a náchylnější na poškrábání hrubými přísadami v omítce. Plastové hladítko je levnější, lehčí a vhodné na hrubší omítky, kde drobné nerovnosti nehrají roli." } },
        { "@type": "Question", "name": "Co je fanka a k čemu slouží?", "acceptedAnswer": { "@type": "Answer", "text": "Fanka je menší obdélníkové nebo trojúhelníkové hladítko, kterým se nabírá hmota z misky nebo hoblíku a nanáší na velké hladítko nebo přímo na stěnu. Používá se hlavně k dávkování a roztírání menšího množství hmoty, například při opravách a tmelení." } },
        { "@type": "Question", "name": "Jaké nářadí potřebuji na míchání štukové hmoty?", "acceptedAnswer": { "@type": "Answer", "text": "Na míchání se používá vrtačka nebo míchačka s nástavcem (míchadlem) ve tvaru spirály nebo košíku, a dostatečně velká nádoba (kbelík). Pro menší množství tmelu stačí i ruční míchání špachtlí, na hladítku nebo v misce." } },
        { "@type": "Question", "name": "Jak vyčistit nářadí po štukování?", "acceptedAnswer": { "@type": "Answer", "text": "Nářadí je nutné umýt ihned po práci, dokud je hmota ještě mokrá – stačí voda a houba nebo kartáč. Zaschlou sádrovou nebo omítkovou hmotu je potřeba mechanicky odstranit, což hladítka i další nářadí poškozuje a zkracuje jejich životnost." } },
        { "@type": "Question", "name": "Jaké hladítko zvolit na jemné štuky a jaké na hrubou omítku?", "acceptedAnswer": { "@type": "Answer", "text": "Na jemné štuky a finální vyhlazení se hodí nerezové hladítko s rovnou, tuhou hranou. Na hrubší omítky a fasádní směsi stačí plastové nebo dřevěné hladítko, případně houbové hladítko pro strukturované povrchy." } },
        { "@type": "Question", "name": "Stačí na začátek levná sada nářadí na štukování?", "acceptedAnswer": { "@type": "Answer", "text": "Pro jednorázovou opravu nebo malou plochu ano, levná sada s plastovým hladítkem, fankou a špachtlí postačí. Pro pravidelnou práci nebo větší plochy se vyplatí investovat do kvalitního nerezového hladítka, které lépe vyhlazuje a vydrží déle." } },
      ],
    },
  ],
};

const RELATED = [
  { title: "Jak opravit škrábance a díry ve zdi před malováním 2026", href: "/blog/opravit-skrabance-diry-ve-zdi", read: "5 min" },
  { title: "Malování nových sádrokartonových stěn – co nepodcenit", href: "/blog/jak-malovat-na-sadrokarton", read: "5 min" },
  { title: "Penetrace před malováním – kdy je nutná a kdy ji přeskočit?", href: "/blog/penetrace-pred-malovanim", read: "4 min" },
  { title: "Efektové barvy a techniky – mramorování, vintage, beton 2026", href: "/blog/efektove-barvy-techniky", read: "7 min" },
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
              <span>Výběr nářadí na štukování a omítky</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování & barvy</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Výběr nářadí na štukování a omítky</h1>
              <p className="article-lead">Výsledek štukování nebo omítání závisí na technice a zkušenosti, ale špatné nářadí ti práci znepříjemní i s nejlepším postupem. Tady je přehled základního nářadí, podle čeho ho vybírat podle typu práce a jak se o něj starat, aby vydrželo roky.</p>
              <div className="article-meta-row"><span>Aktualizováno: 25. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#zakladni-naradi">Základní nářadí na štukování</a></li>
                <li><a href="#hladitka">Hladítka – nerezová vs. plastová</a></li>
                <li><a href="#vyber-podle-prace">Výběr podle typu práce</a></li>
                <li><a href="#michani">Příprava a míchání hmoty</a></li>
                <li><a href="#udrzba">Údržba nářadí po práci</a></li>
                <li><a href="#sady">Doporučené sady pro začátečníky vs. profesionály</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="zakladni-naradi">
              <h2>Základní nářadí na štukování a omítky</h2>
              <p>Než se pustíš do práce, je dobré mít kompletní sadu základního nářadí – chybějící kus tě donutí přerušit práci uprostřed míchání hmoty, kdy už není čas na doplňování.</p>
              <ul>
                <li><strong>Velké hladítko</strong> (nerezové nebo plastové) – hlavní nástroj na nanášení a vyhlazování hmoty na velké ploše</li>
                <li><strong>Fanka</strong> – menší hladítko na dávkování a roztírání hmoty z misky nebo hoblíku</li>
                <li><strong>Štuková lžíce (rohová lžíce)</strong> – speciální tvarovaný nástroj na vnitřní a vnější rohy</li>
                <li><strong>Miska na maltu / hoblík</strong> – nádoba k nošení hmoty u sebe při práci, aby ses nemusel vracet ke kbelíku</li>
                <li><strong>Špachtle různých šířek</strong> – pro menší opravy, tmelení a detailní práci</li>
                <li><strong>Brusná mřížka nebo houba</strong> – na vyhlazení a doladění povrchu po zaschnutí</li>
                <li><strong>Vrtačka nebo míchačka s míchacím nástavcem</strong> – pro přípravu hmoty ve velkém objemu</li>
                <li><strong>Vodováha a lať</strong> – pro kontrolu rovinnosti na větších plochách</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> I při menší opravě se vyplatí mít dvě hladítka různé velikosti – velké na rozetření hmoty po ploše, menší (fanku) na přesné dávkování a práci v rozích nebo u okrajů.</div>
            </section>

            <section id="hladitka">
              <h2>Hladítka – nerezová vs. plastová</h2>
              <p>Hladítko je nejdůležitější nástroj celé práce a výběr materiálu výrazně ovlivní výsledný povrch.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ hladítka</th><th>Výhody</th><th>Nevýhody</th><th>Vhodné pro</th></tr></thead>
                  <tbody>
                    <tr><td>Nerezové</td><td>Tuhé, přesné, hladký povrch bez otisků</td><td>Vyšší cena, náchylnější na poškrábání hrubými zrny</td><td>Jemné štuky, finální vyhlazení, sádrové hmoty</td></tr>
                    <tr><td>Plastové</td><td>Levné, lehké, odolné proti poškrábání hrubou omítkou</td><td>Méně tuhé, méně přesné na úplně jemný povrch</td><td>Hrubší omítky, fasádní směsi, začátečníci</td></tr>
                    <tr><td>Dřevěné</td><td>Příjemný úchop, tradiční volba na hrubé omítky</td><td>Nasává vlhkost, vyžaduje péči a sušení</td><td>Hrubé a fasádní omítky, štukování zahradních prvků</td></tr>
                    <tr><td>Houbové</td><td>Vytváří strukturovaný povrch, snadné použití</td><td>Není určeno pro hladký, jemný štuk</td><td>Strukturované omítky, dekorativní povrchy</td></tr>
                  </tbody>
                </table>
              </div>
              <h3>Velikost hladítka</h3>
              <p>Pro vnitřní jemné štuky a opravy zdiva je praktická velikost přibližně 280×130 mm – dobře se s ní manipuluje i v menších prostorách. Na velké fasádní plochy se používají větší hladítka, klidně i 400×150 mm a více, která pokryjí plochu rychleji.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Hrany nerezového hladítka by měly být rovné a bez prohnutí – před nákupem hladítko přilož na rovnou plochu (pult, sklo) a podívej se, jestli nesvítí mezera mezi hranou a podkladem.</div>
            </section>

            <section id="vyber-podle-prace">
              <h2>Výběr podle typu práce</h2>
              <h3>Jemné štuky a finální vyrovnání stěn</h3>
              <p>Pro tenké vrstvy štukové hmoty (finální štuk před malováním) je nejlepší nerezové hladítko s rovnou, tuhou hranou. Umožní nanést tenkou, rovnoměrnou vrstvu a vyhladit povrch bez otisků a rýh. Pro rohy a koutky použij štukovou (rohovou) lžíci, která jediným tahem vytvoří přesný devadesátistupňový úhel.</p>
              <h3>Hrubé omítky a fasádní směsi</h3>
              <p>Na hrubší vápenné, cementové nebo fasádní omítky se hodí plastová nebo dřevěná hladítka – materiál je odolnější proti poškrábání hrubými zrny v omítkové směsi. Na strukturované povrchy (např. zatíraná omítka, "beránek") se používá houbové nebo plstěné hladítko, kterým se vytváří charakteristická textura.</p>
              <h3>Opravy a tmelení malých ploch</h3>
              <p>Na drobné opravy (díry po hřebících, škrábance, menší trhliny) stačí sada menších špachtlí různých šířek a malá fanka. Tyto opravy obvykle předcházejí i samotnému malování – více postupů najdeš v článku, jak <Link href="/blog/opravit-skrabance-diry-ve-zdi" style={{ color: "#2a6496", textDecoration: "underline" }}>opravit škrábance a díry ve zdi</Link> před malováním.</p>
              <h3>Sádrokarton</h3>
              <p>Při tmelení spojů a šroubů na sádrokartonu se nejvíc osvědčí kombinace užší špachtle (na zatření spojovací pásky) a širšího nerezového hladítka (na finální přetažení a vyhlazení). Podrobnosti najdeš v článku o <Link href="/blog/jak-malovat-na-sadrokarton" style={{ color: "#2a6496", textDecoration: "underline" }}>malování nových sádrokartonových stěn</Link>.</p>
            </section>

            <section id="michani">
              <h2>Příprava a míchání hmoty</h2>
              <p>Kvalita konečného povrchu závisí i na tom, jak dobře je hmota namíchaná – nedostatečně promíchaná nebo s nesprávnou konzistencí hmota se hůř roztírá a může mít horší přilnavost.</p>
              <h3>Vrtačka s míchacím nástavcem</h3>
              <p>Pro větší objemy (od přibližně 5 kg suché směsi výš) se vyplatí použít výkonnější vrtačku nebo přímo míchačku s nástavcem ve tvaru spirály nebo košíku. Míchadlo se ponoří do kbelíku se směsí a vodou a postupně, na nižších otáčkách, hmotu promíchá do hladké, jednotné konzistence bez bublin a shluků.</p>
              <h3>Postup míchání</h3>
              <ul>
                <li>Do kbelíku nalij doporučené množství vody (podle návodu na obalu suché směsi)</li>
                <li>Postupně přisypávej suchou směs za stálého míchání na nízkých otáčkách</li>
                <li>Po zapracování všeho prášku zvyš otáčky a promíchej do hladké konzistence bez kousků</li>
                <li>Nech hmotu chvíli "odstát" (podle typu materiálu, obvykle pár minut) a ještě jednou krátce promíchej</li>
              </ul>
              <h3>Ruční míchání malého množství</h3>
              <p>Pro malé opravy stačí míchat ručně špachtlí přímo v misce nebo na hladítku – u menšího množství tmelu je to rychlejší než čistit celou vrtačku a nástavec.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Vždy přisypávej suchý prášek do vody, ne naopak – hmota se tak lépe a rovnoměrněji rozpustí bez nutnosti rozbíjet ztvrdlé kousky usazené na dně.</div>
            </section>

            <section id="udrzba">
              <h2>Údržba nářadí po práci</h2>
              <p>Štuková a omítková hmota po zaschnutí tvrdne podobně jako beton – pokud nářadí pořádně neumyješ ihned po práci, zaschlé zbytky se odstraňují jen mechanicky a poškozují povrch nářadí.</p>
              <ul>
                <li><strong>Mytí ihned po skončení práce</strong> – dokud je hmota mokrá, stačí voda a houba nebo hadr</li>
                <li><strong>Nerezová hladítka</strong> – po umytí osuš, aby se na hraně nevytvořila koroze nebo skvrny od vodního kamene</li>
                <li><strong>Dřevěné nářadí</strong> – nenechávej dlouho ve vodě, dřevo by mohlo nabobtnat a deformovat se</li>
                <li><strong>Vrtačka a míchací nástavec</strong> – po vytažení z kbelíku otřít, dokud je hmota mokrá, zaschlá hmota na závitu nástavce komplikuje příští výměnu</li>
                <li><strong>Skladování</strong> – hladítka skladuj naležato nebo zavěšená, ne opřená o hranu, aby se hrana časem neprohnula</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud zapomeneš nářadí umyt a hmota zaschne, namoč ho na pár hodin do vody se trochou octa – zaschlá vrstva často povolí a dá se opatrně seškrábnout bez poškození povrchu.</div>
            </section>

            <section id="sady">
              <h2>Doporučené sady pro začátečníky vs. profesionály</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Úroveň</th><th>Doporučené nářadí</th><th>Poznámka</th></tr></thead>
                  <tbody>
                    <tr><td>Začátečník / jednorázová oprava</td><td>Plastové hladítko, fanka, sada špachtlí, miska na maltu</td><td>Postačí levnější sada, hlavní je správný postup a trpělivost</td></tr>
                    <tr><td>Pravidelné domácí práce</td><td>Nerezové hladítko, fanka, rohová lžíce, vrtačka s nástavcem</td><td>Investice do kvalitnějšího nářadí se vrátí na lepším výsledku i delší životnosti</td></tr>
                    <tr><td>Profesionální / rozsáhlejší práce</td><td>Více velikostí nerezových hladítek, profesionální míchačka, hladítka na strukturované povrchy</td><td>Specializované nářadí pro různé typy hmot a povrchů, vyšší výkon míchačky</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Pro běžnou domácí opravu nebo jednu menší místnost si vystačíš s levnější sadou nářadí – klíčový je hlavně správný postup, ne cena nářadí. Pokud ale plánuješ štukovat nebo omítat opakovaně (např. při rekonstrukci celého bytu), vyplatí se investovat do kvalitního nerezového hladítka a výkonnější vrtačky s nástavcem, které ti práci výrazně zrychlí a zlepší výsledek.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jaký je rozdíl mezi nerezovým a plastovým hladítkem?", a: "Nerezové hladítko je tužší, lépe vyhlazuje jemné štuky a nezanechává otisky na povrchu, ale je dražší a náchylnější na poškrábání hrubými přísadami v omítce. Plastové hladítko je levnější, lehčí a vhodné na hrubší omítky, kde drobné nerovnosti nehrají roli." },
                  { q: "Co je fanka a k čemu slouží?", a: "Fanka je menší obdélníkové nebo trojúhelníkové hladítko, kterým se nabírá hmota z misky nebo hoblíku a nanáší na velké hladítko nebo přímo na stěnu. Používá se hlavně k dávkování a roztírání menšího množství hmoty, například při opravách a tmelení." },
                  { q: "Jaké nářadí potřebuji na míchání štukové hmoty?", a: "Na míchání se používá vrtačka nebo míchačka s nástavcem (míchadlem) ve tvaru spirály nebo košíku, a dostatečně velká nádoba (kbelík). Pro menší množství tmelu stačí i ruční míchání špachtlí, na hladítku nebo v misce." },
                  { q: "Jak vyčistit nářadí po štukování?", a: "Nářadí je nutné umýt ihned po práci, dokud je hmota ještě mokrá – stačí voda a houba nebo kartáč. Zaschlou sádrovou nebo omítkovou hmotu je potřeba mechanicky odstranit, což hladítka i další nářadí poškozuje a zkracuje jejich životnost." },
                  { q: "Jaké hladítko zvolit na jemné štuky a jaké na hrubou omítku?", a: "Na jemné štuky a finální vyhlazení se hodí nerezové hladítko s rovnou, tuhou hranou. Na hrubší omítky a fasádní směsi stačí plastové nebo dřevěné hladítko, případně houbové hladítko pro strukturované povrchy." },
                  { q: "Stačí na začátek levná sada nářadí na štukování?", a: "Pro jednorázovou opravu nebo malou plochu ano, levná sada s plastovým hladítkem, fankou a špachtlí postačí. Pro pravidelnou práci nebo větší plochy se vyplatí investovat do kvalitního nerezového hladítka, které lépe vyhlazuje a vydrží déle." },
                ].map(({ q, a }) => (
                  <details key={q} className="faq-item">
                    <summary className="faq-q">{q}</summary>
                    <p className="faq-a">{a}</p>
                  </details>
                ))}
              </div>
            </section>

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
                <li><a href="#zakladni-naradi">Základní nářadí</a></li>
                <li><a href="#hladitka">Hladítka</a></li>
                <li><a href="#vyber-podle-prace">Výběr podle práce</a></li>
                <li><a href="#michani">Míchání hmoty</a></li>
                <li><a href="#udrzba">Údržba nářadí</a></li>
                <li><a href="#sady">Doporučené sady</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/malovani" className="sidebar-cat-link">🎨 Malování & barvy<span>30 článků →</span></Link>
            </div>
          </aside>
        </div>
      </div>
      <style>{`
        .article-layout { display: grid; grid-template-columns: 1fr 280px; gap: 56px; padding: 48px 0 80px; align-items: start; }
        .article-header { margin-bottom: 32px; }
        .article-meta-top { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
        .article-cat-pill { display: inline-flex; align-items: center; height: 24px; padding: 0 12px; border-radius: 999px; border: 1px solid var(--border); background: var(--surface); font-size: 11px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--muted); text-decoration: none; transition: background 120ms; }
        .article-cat-pill:hover { background: #e8e7e2; color: var(--text); }
        .article-read-time { font-size: 12px; color: var(--muted); font-weight: 500; }
        .article-h1 { font-family: var(--font-serif); font-size: clamp(26px, 3.5vw, 40px); line-height: 1.1; font-weight: 400; letter-spacing: -0.01em; margin-bottom: 16px; }
        .article-lead { font-size: 18px; line-height: 1.65; color: var(--muted); font-weight: 300; margin-bottom: 14px; }
        .article-meta-row { display: flex; gap: 8px; font-size: 12px; color: var(--muted); font-weight: 500; }
        .toc { background: var(--surface); border-radius: 10px; padding: 20px 24px; margin-bottom: 40px; }
        .toc-label { font-size: 11px; font-weight: 700; letter-spacing: 0.10em; text-transform: uppercase; color: var(--muted); margin-bottom: 12px; }
        .toc-list { padding-left: 18px; display: flex; flex-direction: column; gap: 6px; }
        .toc-list li a { font-size: 14px; color: var(--muted); text-decoration: none; font-weight: 400; transition: color 120ms; }
        .toc-list li a:hover { color: var(--text); }
        .article-body section { margin-bottom: 48px; }
        .article-body h2 { font-family: var(--font-serif); font-size: clamp(20px, 2.5vw, 26px); font-weight: 400; line-height: 1.2; margin-bottom: 16px; border-top: 1px solid var(--border); padding-top: 24px; margin-top: 8px; }
        .article-body h3 { font-family: var(--font-sans); font-size: 16px; font-weight: 600; margin-top: 24px; margin-bottom: 10px; color: var(--text); }
        .article-body p { font-size: 16px; line-height: 1.75; color: #2a2a28; font-weight: 300; margin-bottom: 14px; }
        .article-body ul, .article-body ol { padding-left: 22px; margin-bottom: 16px; display: flex; flex-direction: column; gap: 8px; }
        .article-body li { font-size: 15px; line-height: 1.6; color: #2a2a28; font-weight: 300; }
        .article-body strong { font-weight: 600; color: var(--text); }
        .article-tip { background: #fffbeb; border-left: 3px solid #f59e0b; border-radius: 0 8px 8px 0; padding: 14px 18px; font-size: 14px; line-height: 1.6; color: #78716c; margin: 20px 0; }
        .article-table-wrap { overflow-x: auto; margin: 16px 0 24px; }
        .article-table { width: 100%; border-collapse: collapse; font-size: 14px; line-height: 1.5; }
        .article-table th { font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); padding: 10px 14px; text-align: left; border-bottom: 2px solid var(--border); background: var(--surface); }
        .article-table td { padding: 10px 14px; border-bottom: 1px solid var(--border); vertical-align: top; color: #2a2a28; font-weight: 300; }
        .article-table tr:last-child td { border-bottom: none; }
        .faq-list { display: flex; flex-direction: column; gap: 8px; }
        .faq-item { border: 1px solid var(--border); border-radius: 10px; overflow: hidden; background: #fff; }
        .faq-q { font-size: 15px; font-weight: 600; padding: 16px 20px; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; transition: background 120ms; }
        .faq-q:hover { background: var(--surface); }
        .faq-q::after { content: "+"; font-size: 18px; font-weight: 300; flex-shrink: 0; margin-left: 12px; }
        details[open] .faq-q::after { content: "−"; }
        .faq-a { font-size: 14px; line-height: 1.65; color: var(--muted); font-weight: 300; padding: 0 20px 16px; }
        .related-section { margin-top: 56px; }
        .related-section h2 { font-family: var(--font-serif); font-size: 22px; font-weight: 400; margin-bottom: 20px; padding-top: 24px; border-top: 1px solid var(--border); }
        .related-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .article-sidebar { position: sticky; top: 80px; display: flex; flex-direction: column; gap: 16px; }
        .sidebar-widget { background: #fff; border: 1px solid var(--border); border-radius: 12px; padding: 20px; }
        .sidebar-widget-title { font-size: 10px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); margin-bottom: 14px; }
        .sidebar-toc { list-style: none; display: flex; flex-direction: column; gap: 8px; }
        .sidebar-toc li a { font-size: 13px; color: var(--muted); text-decoration: none; font-weight: 400; transition: color 120ms; line-height: 1.4; display: block; }
        .sidebar-toc li a:hover { color: var(--text); }
        .sidebar-cat-link { display: flex; justify-content: space-between; align-items: center; font-size: 14px; font-weight: 500; color: var(--text); text-decoration: none; padding: 8px 0; border-bottom: 1px solid var(--border); transition: color 120ms; }
        .sidebar-cat-link:hover { color: var(--muted); }
        .sidebar-cat-link span { font-size: 12px; color: var(--muted); }
        @media (max-width: 960px) { .article-layout { grid-template-columns: 1fr; gap: 0; } .article-sidebar { position: static; margin-top: 40px; } .related-grid { grid-template-columns: 1fr; } }
        @media (max-width: 600px) { .article-layout { padding: 32px 0 60px; } }
      `}</style>
    </>
  );
}
