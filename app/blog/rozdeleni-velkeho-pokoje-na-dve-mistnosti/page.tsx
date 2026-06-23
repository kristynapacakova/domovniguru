import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak rozdělit velký pokoj na dvě menší místnosti",
  description: "Sádrokartonová příčka, posuvné dveře nebo polo-příčka s regálem – možnosti, povolení, světlo, větrání a elektrika při rozdělení pokoje na dvě místnosti.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/rozdeleni-velkeho-pokoje-na-dve-mistnosti" },
  openGraph: {
    title: "Jak rozdělit velký pokoj na dvě menší místnosti",
    description: "Sádrokartonová příčka, posuvné dveře nebo polo-příčka s regálem – možnosti, povolení, světlo, větrání a elektrika při rozdělení pokoje na dvě místnosti.",
    url: "https://www.domovniguru.cz/blog/rozdeleni-velkeho-pokoje-na-dve-mistnosti",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "article",
    publishedTime: "2026-06-22T08:00:00Z",
    modifiedTime: "2026-06-22T08:00:00Z",
    authors: ["DomovniGuru"],
    images: [{ url: "/api/og?title=Jak%20rozd%C4%9Blit%20velk%C3%BD%20pokoj%20na%20dv%C4%9B%20men%C5%A1%C3%AD%20m%C3%ADstnosti&cat=blog", width: 1200, height: 630, alt: "Jak rozdělit velký pokoj na dvě menší místnosti" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jak rozdělit velký pokoj na dvě menší místnosti",
    description: "Příčka, posuvné dveře, regál nebo závěs – co zvolit a na co myslet.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.domovniguru.cz/blog/rozdeleni-velkeho-pokoje-na-dve-mistnosti#article",
      "headline": "Jak rozdělit velký pokoj na dvě menší místnosti",
      "description": "Sádrokartonová příčka, posuvné dveře nebo polo-příčka s regálem – možnosti, povolení, světlo, větrání a elektrika při rozdělení pokoje na dvě místnosti.",
      "datePublished": "2026-06-22T08:00:00Z",
      "dateModified": "2026-06-22T08:00:00Z",
      "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.domovniguru.cz/blog/rozdeleni-velkeho-pokoje-na-dve-mistnosti" },
      "inLanguage": "cs",
      "keywords": ["rozdělení pokoje na dvě místnosti", "sádrokartonová příčka", "dětský pokoj pro dvě děti", "stavební povolení příčka", "posuvné dveře místo příčky"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.domovniguru.cz/blog/rozdeleni-velkeho-pokoje-na-dve-mistnosti#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" },
        { "@type": "ListItem", "position": 3, "name": "Stěhování & rekonstrukce", "item": "https://www.domovniguru.cz/blog/kategorie/stehovani" },
        { "@type": "ListItem", "position": 4, "name": "Jak rozdělit velký pokoj na dvě menší místnosti", "item": "https://www.domovniguru.cz/blog/rozdeleni-velkeho-pokoje-na-dve-mistnosti" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.domovniguru.cz/blog/rozdeleni-velkeho-pokoje-na-dve-mistnosti#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Potřebuji stavební povolení na příčku v bytě?", "acceptedAnswer": { "@type": "Answer", "text": "Nenosná příčka uvnitř bytu obvykle podléhá jen ohlášení stavebnímu úřadu, ne plnému stavebnímu povolení, ale vždy je nutné mít souhlas vlastníka nebo společenství vlastníků jednotek. Pokud by zásah mířil do nosné konstrukce, vždy je potřeba posouzení statika a stavební povolení." } },
        { "@type": "Question", "name": "Musí mít nová menší místnost vlastní okno?", "acceptedAnswer": { "@type": "Answer", "text": "Obytná místnost by měla mít přímé denní osvětlení a větrání, ideálně vlastním oknem. Pokud okno nelze zajistit, místnost se může klasifikovat jako nebytový prostor, což je důležité zejména u úřední evidence a pojištění." } },
        { "@type": "Question", "name": "Je lepší sádrokartonová příčka, nebo posuvné dveře?", "acceptedAnswer": { "@type": "Answer", "text": "Sádrokartonová příčka poskytuje trvalé oddělení s lepší zvukovou izolací a soukromím, posuvné dveře nebo stěna nabízí flexibilitu a možnost prostor znovu propojit. Volba závisí na tom, jak dlouhodobé a definitivní má rozdělení být." } },
        { "@type": "Question", "name": "Jak vyřešit elektriku a topení v nové místnosti?", "acceptedAnswer": { "@type": "Answer", "text": "Před stavbou příčky je nutné navrhnout rozvod elektřiny tak, aby měla každá místnost vlastní zásuvky a světelný okruh, ideálně s vlastním jištěním. Topné těleso je potřeba přesunout nebo doplnit, aby byla vytápěna obě nově vzniklá místnost rovnoměrně." } },
        { "@type": "Question", "name": "Kdy se rozdělení pokoje vyplatí nejvíc?", "acceptedAnswer": { "@type": "Answer", "text": "Typicky tehdy, když dvě děti potřebují vlastní pokoj se soukromím, nebo když je potřeba oddělit ložnici od domácí pracovny pro home office. Vyplatí se hlavně u větších pokojů nad 18–20 m², kde po rozdělení zůstanou obě místnosti ještě funkční." } },
        { "@type": "Question", "name": "Jak velká musí být místnost po rozdělení?", "acceptedAnswer": { "@type": "Answer", "text": "Obytná místnost by měla mít alespoň 8 m², aby v ní šlo rozumně umístit postel, stůl nebo skříň a zachovat pohodlný pohyb. Pro dětský pokoj nebo pracovnu je praktické minimum kolem 9–10 m²." } },
      ],
    },
    {
      "@type": "HowTo",
      "@id": "https://www.domovniguru.cz/blog/rozdeleni-velkeho-pokoje-na-dve-mistnosti#howto",
      "name": "Jak rozdělit velký pokoj na dvě menší místnosti",
      "description": "Sádrokartonová příčka, posuvné dveře nebo polo-příčka s regálem – možnosti, povolení, světlo, větrání a elektrika při rozdělení pokoje na dvě místnosti.",
      "step": [
        { "@type": "HowToStep", "name": "Posouzení důvodu a rozměrů", "text": "Zvaž, zda je rozdělení potřebné a zda po rozdělení zůstanou obě místnosti dostatečně velké a funkční." },
        { "@type": "HowToStep", "name": "Výběr typu rozdělení", "text": "Vyber mezi sádrokartonovou příčkou, posuvnými dveřmi, polo-příčkou s regálem nebo závěsem podle potřebné míry soukromí a flexibility." },
        { "@type": "HowToStep", "name": "Vyřízení povolení", "text": "Zjisti u stavebního úřadu a u vlastníka nebo SVJ, zda je potřeba ohlášení stavby, a nech posoudit konstrukci statikem, pokud je to nutné." },
        { "@type": "HowToStep", "name": "Zajištění světla a větrání", "text": "Naplánuj, jak bude nová místnost bez vlastního okna přímo větraná a osvětlená, případně použij světlovod nebo příčku se skleněnou výplní." },
        { "@type": "HowToStep", "name": "Úprava elektriky a topení", "text": "Navrhni samostatné elektrické okruhy a zásuvky pro obě místnosti a zajisti vytápění v nově vzniklém prostoru." },
        { "@type": "HowToStep", "name": "Realizace stavby", "text": "Postav příčku nebo namontuj posuvný systém, dokonči povrchové úpravy a zkontroluj funkčnost všech rozvodů." },
      ],
    },
  ],
};

const RELATED = [
  { title: "Plánování rekonstrukce bytu krok za krokem", href: "/blog/planovani-rekonstrukce-bytu", read: "7 min" },
  { title: "Úložné prostory v malém bytě", href: "/blog/uloziste-v-malem-byte", read: "6 min" },
  { title: "Jak bydlet během rekonstrukce", href: "/blog/jak-bydlet-behem-rekonstrukce", read: "6 min" },
  { title: "Rekonstrukce bytu v nájmu – co je možné", href: "/blog/rekonstrukce-bytu-v-najmu-co-je-mozne", read: "6 min" },
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
              <span>Jak rozdělit velký pokoj na dvě menší místnosti</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏠 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 7 min čtení</span>
              </div>
              <h1 className="article-h1">Jak rozdělit velký pokoj na dvě menší místnosti</h1>
              <p className="article-lead">Velký pokoj, ve kterém spí dvě děti nebo se musí střídat ložnice a pracovna, dříve nebo později začne chybět – soukromí, klid i prostor pro vlastní věci. Rozdělení pokoje na dvě menší místnosti je řešení, které se obejde bez stěhování, ale je potřeba ho promyslet od povolení až po elektriku a topení.</p>
              <div className="article-meta-row">
                <span>Aktualizováno: 22. června 2026</span><span>·</span><span>DomovniGuru</span>
              </div>
              <ShareButtons url="https://www.domovniguru.cz/blog/rozdeleni-velkeho-pokoje-na-dve-mistnosti" title="Jak rozdělit velký pokoj na dvě menší místnosti" />
            </header>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#kdy">Kdy se rozdělení vyplatí</a></li>
                <li><a href="#moznosti">Možnosti rozdělení prostoru</a></li>
                <li><a href="#povoleni">Povolení a souhlas SVJ</a></li>
                <li><a href="#svetlo">Světlo a větrání</a></li>
                <li><a href="#elektrika">Elektrika a topení</a></li>
                <li><a href="#realizace">Realizace a dokončení</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="kdy">
              <h2>Kdy se rozdělení pokoje vyplatí</h2>
              <p>Rozdělení jedné velké místnosti na dvě menší dává smysl v situacích, kdy potřeba soukromí převáží nad výhodou velkorysého prostoru.</p>
              <h3>Dětský pokoj pro dvě děti</h3>
              <p>Typickým případem je situace, kdy spolu v jednom pokoji vyrůstají dvě děti různého věku nebo pohlaví a potřebují vlastní prostor pro spánek, učení i hraní. Rozdělením vznikne pro každé dítě menší, ale soukromý pokoj, což bývá s přibývajícím věkem dětí stále důležitější.</p>
              <h3>Oddělení ložnice a pracovny</h3>
              <p>S rozšířením práce z domova se čím dál častěji řeší i oddělení klidové zóny ložnice od pracovního koutu. Hluk z videohovorů nebo světlo z monitoru pozdě večer rušení partnera vyřeší jen skutečně oddělená místnost, ne jen rohová pracovní deska v ložnici.</p>
              <h3>Minimální velikost pro funkční rozdělení</h3>
              <p>Rozdělení má smysl především u pokojů nad 18–20 m², kde po vyčlenění příčky a nábytku zůstanou obě nové místnosti ještě rozumně využitelné, ideálně alespoň 8–9 m² každá. U menších pokojů hrozí, že obě výsledné místnosti budou nepohodlně stísněné.</p>
            </section>

            <section id="moznosti">
              <h2>Možnosti rozdělení prostoru</h2>
              <p>Existuje několik způsobů, jak velký pokoj rozdělit, a každý má jiné nároky na náklady, trvalost i míru soukromí.</p>
              <h3>Sádrokartonová příčka</h3>
              <p>Klasická sádrokartonová příčka na ocelovém roštu poskytuje nejlepší zvukovou izolaci a skutečné oddělení obou prostor. Je to nejtrvalejší, ale i nejnákladnější a stavebně nejnáročnější řešení, které vyžaduje úpravu podlahy, stropu a často i elektriky.</p>
              <h3>Posuvné dveře nebo stěna</h3>
              <p>Posuvný systém umožňuje prostory podle potřeby oddělit i znovu propojit, což je výhodné tam, kde se má místnost využívat různě v různých časech dne. Zvuková izolace bývá o něco slabší než u plné příčky, ale moderní akustické posuvné stěny tento rozdíl výrazně omezují.</p>
              <h3>Polo-příčka s regálem</h3>
              <p>Nižší příčka kombinovaná s regálem nebo skříní zachová alespoň částečné propojení místností světlem a vzduchem, zatímco vizuálně i zvukově prostor rozdělí. Tato varianta je oblíbená u dětských pokojů, kde rodiče chtějí mít stále přehled o obou částech.</p>
              <h3>Závěs jako nejjednodušší řešení</h3>
              <p>Těžký závěs na celou šíři pokoje je nejlevnější a nejrychlejší způsob rozdělení, ale poskytuje minimum zvukové izolace a žádné skutečné soukromí. Hodí se spíš jako dočasné řešení, než jako trvalá náhrada příčky.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud si nejsi jistý, zda rozdělení bude fungovat dlouhodobě, vyzkoušej nejprve levnější a vratné řešení, jako je polo-příčka s regálem nebo posuvná stěna. Sádrokartonovou příčku lze postavit později, až budeš mít jistotu.</div>
            </section>

            <section id="povoleni">
              <h2>Povolení a souhlas SVJ</h2>
              <p>Stavební úpravy v bytě, byť jen drobná příčka, vyžadují vždy ověření, co je potřeba před samotnou realizací zařídit.</p>
              <h3>Ohlášení stavby</h3>
              <p>Nenosná příčka uvnitř bytu obvykle podléhá ohlášení stavebnímu úřadu, ne plnému stavebnímu řízení, ale je potřeba si to ověřit podle konkrétní obce a charakteru úpravy. Pokud bys zasahoval do nosné konstrukce nebo měnil dispozici výrazně, jde už o stavbu vyžadující stavební povolení a posouzení statika.</p>
              <h3>Souhlas vlastníka nebo SVJ</h3>
              <p>I drobná příčka v bytě v osobním vlastnictví vyžaduje souhlas společenství vlastníků jednotek, protože může ovlivnit zatížení stropu nebo požární bezpečnost domu. V nájemním bytě je nutný písemný souhlas pronajímatele ještě před zahájením prací.</p>
              <h3>Dokumentace pro budoucí prodej</h3>
              <p>I když je příčka jen formalita z hlediska povolení, vyplatí se mít k ní uchovanou dokumentaci a souhlasy. Při budoucím prodeji nebo pojistné události může nesouhlas s úřední evidencí bytu způsobit komplikace.</p>
            </section>

            <section id="svetlo">
              <h2>Světlo a větrání nové místnosti</h2>
              <p>Jedna z nově vzniklých místností obvykle přijde o přístup k oknu, a to je potřeba řešit už při plánování, ne až po dokončení stavby.</p>
              <h3>Obytná místnost a přímé osvětlení</h3>
              <p>Pro klasifikaci obytné místnosti je obvykle vyžadováno přímé denní světlo a možnost přirozeného větrání. Pokud novou místnost nelze takto vybavit, může se z úředního hlediska počítat jako nebytový prostor, což má dopad na evidenci bytu i případné pojištění.</p>
              <h3>Možná řešení bez vlastního okna</h3>
              <p>Pokud okno nelze zajistit, pomůže prosklená výplň v horní části příčky, která propustí alespoň část denního světla z vedlejší místnosti. Další možností je světlovod vedený stropem k venkovnímu světlu nebo kvalitní mechanické větrání s rekuperací tam, kde přirozené větrání chybí.</p>
              <h3>Umělé osvětlení jako doplněk</h3>
              <p>I s vyřešeným přirozeným světlem je vhodné v nové místnosti počítat s kvalitnějším umělým osvětlením než v běžném pokoji s oknem, protože denní světlo zde bude vždy slabší.</p>
            </section>

            <section id="elektrika">
              <h2>Elektrika a topení v nové místnosti</h2>
              <p>Rozdělení pokoje znamená, že obě nové místnosti potřebují vlastní funkční zázemí, ne jen to, co zbylo z původního rozvodu.</p>
              <h3>Samostatné elektrické okruhy</h3>
              <p>Před stavbou příčky je nutné navrhnout rozvod elektřiny tak, aby měla každá místnost dostatek zásuvek a vlastní světelný okruh, ideálně se samostatným jištěním. Vedení kabelů je snazší realizovat před uzavřením příčky, ne dodatečně po jejím dokončení.</p>
              <h3>Vytápění obou prostor</h3>
              <p>Pokud byl v původním pokoji jen jeden radiátor, je po rozdělení potřeba zajistit vytápění i pro druhou místnost – buď přesunutím stávajícího tělesa, instalací nového radiátoru, nebo elektrickým podlahovým vytápěním u menších ploch.</p>
              <h3>Plánování s předstihem</h3>
              <p>Všechny rozvody je vždy levnější a jednodušší řešit před uzavřením příčky sádrokartonem, protože dodatečné bourání hotové konstrukce znamená vícenáklady i čas navíc.</p>
            </section>

            <section id="realizace">
              <h2>Realizace a dokončení</h2>
              <p>Po vyřešení povolení, světla, větrání a rozvodů přichází samotná stavba, která by měla probíhat v logickém sledu kroků.</p>
              <h3>Stavba příčky nebo montáž systému</h3>
              <p>U sádrokartonové příčky nejprve vznikne ocelový rošt, do kterého se vedou elektrické rozvody, a teprve potom se rošt opláští deskami z obou stran. U posuvného systému jde především o přesnou montáž vodicí lišty a stability celé konstrukce.</p>
              <h3>Povrchové úpravy</h3>
              <p>Po dokončení konstrukce následuje tmelení spojů, broušení a malování nebo tapetování, aby nová příčka vizuálně odpovídala zbytku místnosti. Pokud místnosti dostanou různou barvu, je to dobrá příležitost k vizuálnímu odlišení obou nových prostor.</p>
              <h3>Kontrola funkčnosti</h3>
              <p>Před plným zabydlením ověř funkčnost všech zásuvek, světelných okruhů a vytápění v obou místnostech, ideálně ještě před montáží nábytku, kdy je snazší cokoliv dodatečně upravit.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Potřebuji stavební povolení na příčku v bytě?", a: "Nenosná příčka uvnitř bytu obvykle podléhá jen ohlášení stavebnímu úřadu, ne plnému stavebnímu povolení, ale vždy je nutné mít souhlas vlastníka nebo společenství vlastníků jednotek. Pokud by zásah mířil do nosné konstrukce, vždy je potřeba posouzení statika a stavební povolení." },
                  { q: "Musí mít nová menší místnost vlastní okno?", a: "Obytná místnost by měla mít přímé denní osvětlení a větrání, ideálně vlastním oknem. Pokud okno nelze zajistit, místnost se může klasifikovat jako nebytový prostor, což je důležité zejména u úřední evidence a pojištění." },
                  { q: "Je lepší sádrokartonová příčka, nebo posuvné dveře?", a: "Sádrokartonová příčka poskytuje trvalé oddělení s lepší zvukovou izolací a soukromím, posuvné dveře nebo stěna nabízí flexibilitu a možnost prostor znovu propojit. Volba závisí na tom, jak dlouhodobé a definitivní má rozdělení být." },
                  { q: "Jak vyřešit elektriku a topení v nové místnosti?", a: "Před stavbou příčky je nutné navrhnout rozvod elektřiny tak, aby měla každá místnost vlastní zásuvky a světelný okruh, ideálně s vlastním jištěním. Topné těleso je potřeba přesunout nebo doplnit, aby byla vytápěna obě nově vzniklá místnost rovnoměrně." },
                  { q: "Kdy se rozdělení pokoje vyplatí nejvíc?", a: "Typicky tehdy, když dvě děti potřebují vlastní pokoj se soukromím, nebo když je potřeba oddělit ložnici od domácí pracovny pro home office. Vyplatí se hlavně u větších pokojů nad 18–20 m², kde po rozdělení zůstanou obě místnosti ještě funkční." },
                  { q: "Jak velká musí být místnost po rozdělení?", a: "Obytná místnost by měla mít alespoň 8 m², aby v ní šlo rozumně umístit postel, stůl nebo skříň a zachovat pohodlný pohyb. Pro dětský pokoj nebo pracovnu je praktické minimum kolem 9–10 m²." },
                ].map(({ q, a }) => (
                  <details key={q} className="faq-item">
                    <summary className="faq-summary">{q}<span className="faq-icon">▾</span></summary>
                    <div className="faq-body">{a}</div>
                  </details>
                ))}
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/rozdeleni-velkeho-pokoje-na-dve-mistnosti" title="Jak rozdělit velký pokoj na dvě menší místnosti" />

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
                <li><a href="#kdy">Kdy se rozdělení vyplatí</a></li>
                <li><a href="#moznosti">Možnosti rozdělení</a></li>
                <li><a href="#povoleni">Povolení a SVJ</a></li>
                <li><a href="#svetlo">Světlo a větrání</a></li>
                <li><a href="#elektrika">Elektrika a topení</a></li>
                <li><a href="#realizace">Realizace</a></li>
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
