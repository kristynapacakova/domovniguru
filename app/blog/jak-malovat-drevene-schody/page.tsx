import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak malovat dřevěné schody a zábradlí, aby barva vydržela",
  description: "Výběr barvy odolné proti otěru, příprava povrchu i postup nátěru po jednotlivých schodech – návod, jak natřít dřevěné schodiště a zábradlí na roky dopředu.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-malovat-drevene-schody" },
  openGraph: {
    title: "Jak malovat dřevěné schody a zábradlí, aby barva vydržela",
    description: "Výběr barvy odolné proti otěru, příprava povrchu i postup nátěru po jednotlivých schodech – návod, jak natřít dřevěné schodiště a zábradlí na roky dopředu.",
    url: "https://www.domovniguru.cz/blog/jak-malovat-drevene-schody",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "article",
    publishedTime: "2026-06-22T08:00:00Z",
    modifiedTime: "2026-06-22T08:00:00Z",
    authors: ["DomovniGuru"],
    images: [{ url: "/api/og?title=Jak%20malovat%20d%C5%99ev%C4%9Bn%C3%A9%20schody%20a%20z%C3%A1bradl%C3%AD%2C%20aby%20barva%20vydr%C5%BEela&cat=blog", width: 1200, height: 630, alt: "Jak malovat dřevěné schody a zábradlí, aby barva vydržela" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jak malovat dřevěné schody a zábradlí",
    description: "Výběr barvy, příprava povrchu a postup nátěru po jednotlivých schodech.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.domovniguru.cz/blog/jak-malovat-drevene-schody#article",
      "headline": "Jak malovat dřevěné schody a zábradlí, aby barva vydržela",
      "description": "Výběr barvy odolné proti otěru, příprava povrchu i postup nátěru po jednotlivých schodech – návod, jak natřít dřevěné schodiště a zábradlí na roky dopředu.",
      "datePublished": "2026-06-22T08:00:00Z",
      "dateModified": "2026-06-22T08:00:00Z",
      "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.domovniguru.cz/blog/jak-malovat-drevene-schody" },
      "inLanguage": "cs",
      "keywords": ["jak malovat dřevěné schody", "nátěr schodiště", "barva na schody odolná proti otěru", "malování zábradlí", "lak na schody"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.domovniguru.cz/blog/jak-malovat-drevene-schody#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" },
        { "@type": "ListItem", "position": 3, "name": "Malování & barvy", "item": "https://www.domovniguru.cz/blog/kategorie/malovani" },
        { "@type": "ListItem", "position": 4, "name": "Jak malovat dřevěné schody a zábradlí, aby barva vydržela", "item": "https://www.domovniguru.cz/blog/jak-malovat-drevene-schody" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.domovniguru.cz/blog/jak-malovat-drevene-schody#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Jakou barvu použít na dřevěné schody, aby vydržela?", "acceptedAnswer": { "@type": "Answer", "text": "Nejlepší volbou je speciální podlahová nebo schodišťová barva na dřevo, případně dvousložkový polyuretanový lak. Klasická nábytková nebo nátěrová barva na dřevo otěr od chodidel dlouho nevydrží a začne se odírat už po pár měsících." } },
        { "@type": "Question", "name": "Musím staré schody před natřením brousit?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, broušení je nezbytné. Odstraní starý lesklý nátěr, zdrsní povrch pro lepší přídržnost nové barvy a odhalí praskliny nebo poškozená místa, která je potřeba před nátěrem opravit tmelem na dřevo." } },
        { "@type": "Question", "name": "Jak natřu schody, když je potřebuji během sušení používat?", "acceptedAnswer": { "@type": "Answer", "text": "Schodiště se natírá po jednotlivých schodech nebo přes jeden – nejprve liché, po zaschnutí sudé schody, případně se používá druhá trasa (např. zadní vchod) po dobu sušení. Vždy je nutné dodržet technologickou přestávku podle výrobce." } },
        { "@type": "Question", "name": "Kolik vrstev barvy je potřeba na schody?", "acceptedAnswer": { "@type": "Answer", "text": "Standardně se doporučují dvě až tři vrstvy – jedna penetrační nebo základní a jedna až dvě vrchní krycí. Více vrstev zvyšuje odolnost proti otěru a prodlužuje životnost nátěru." } },
        { "@type": "Question", "name": "Jak dlouho musí nátěr na schodech zrát, než po něm můžu plně chodit?", "acceptedAnswer": { "@type": "Answer", "text": "Na dotyk je nátěr suchý obvykle za 24 hodin, ale plnou mechanickou odolnost a tvrdost získá až po 5–7 dnech, u dvousložkových laků i déle. První týden je vhodné chodit po schodech jen v ponožkách nebo měkké domácí obuvi." } },
        { "@type": "Question", "name": "Jak udržet natřené schody dlouho v dobrém stavu?", "acceptedAnswer": { "@type": "Answer", "text": "Pod boty u vstupu položte rohožku, schody pravidelně vytírejte jen vlhkým hadrem bez agresivních chemických přípravků a jednou za pár let obnovte vrchní vrstvu laku v nejvíce zatížených místech, než se prodře až na dřevo." } },
      ],
    },
    {
      "@type": "HowTo",
      "@id": "https://www.domovniguru.cz/blog/jak-malovat-drevene-schody#howto",
      "name": "Jak malovat dřevěné schody a zábradlí, aby barva vydržela",
      "description": "Výběr barvy odolné proti otěru, příprava povrchu i postup nátěru po jednotlivých schodech – návod, jak natřít dřevěné schodiště a zábradlí na roky dopředu.",
      "step": [
        { "@type": "HowToStep", "name": "Výběr vhodné barvy nebo laku", "text": "Zvol speciální podlahovou nebo schodišťovou barvu na dřevo odolnou proti otěru, případně dvousložkový polyuretanový lak." },
        { "@type": "HowToStep", "name": "Příprava povrchu", "text": "Odstraň starý nátěr nebo ho zdrsni broušením, povrch odmastni a opravy prasklin a děr ošetři tmelem na dřevo." },
        { "@type": "HowToStep", "name": "Penetrace a základní nátěr", "text": "Naneste penetrační nebo základní nátěr, který zajistí přídržnost vrchní barvy a sníží savost dřeva." },
        { "@type": "HowToStep", "name": "Nátěr po jednotlivých schodech", "text": "Natírejte schody přes jeden nebo po sekcích, aby zůstal zachován průchod, a dodržujte technologické přestávky mezi vrstvami." },
        { "@type": "HowToStep", "name": "Nátěr zábradlí a sloupků", "text": "Zábradlí a sloupky natírejte samostatně tenkým štětcem, dbejte na zatažení barvy do spojů a vyhněte se kapkám." },
        { "@type": "HowToStep", "name": "Dosušení a údržba", "text": "Před plným zatížením schodiště nechte nátěr dostatečně vyzrát a poté schody chraňte rohožkou a pravidelnou jemnou údržbou." },
      ],
    },
  ],
};

const RELATED = [
  { title: "Jak malovat zeď – kompletní postup", href: "/blog/jak-malovat-zed", read: "5 min" },
  { title: "Jak odstranit starou barvu", href: "/blog/jak-odstranit-starou-barvu", read: "5 min" },
  { title: "Penetrace před malováním – proč na ní nešetřit", href: "/blog/penetrace-pred-malovanim", read: "4 min" },
  { title: "Jak malovat radiátor, aby barva nežloutla", href: "/blog/jak-malovat-radiator", read: "4 min" },
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
              <span>Jak malovat dřevěné schody a zábradlí, aby barva vydržela</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování & barvy</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak malovat dřevěné schody a zábradlí, aby barva vydržela</h1>
              <p className="article-lead">Schody patří k nejvíc namáhaným plochám v domě – chodí se po nich denně, často v botách, a obyčejná barva na dřevo se tu otře během pár měsíců. S vhodným materiálem a správným postupem nátěru ale vydrží schodiště v dobrém stavu klidně několik let.</p>
              <div className="article-meta-row">
                <span>Aktualizováno: 22. června 2026</span><span>·</span><span>DomovniGuru</span>
              </div>
              <ShareButtons url="https://www.domovniguru.cz/blog/jak-malovat-drevene-schody" title="Jak malovat dřevěné schody a zábradlí, aby barva vydržela" />
            </header>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#vyber-barvy">Výběr vhodné barvy nebo laku</a></li>
                <li><a href="#priprava">Příprava povrchu</a></li>
                <li><a href="#zaklad">Penetrace a základní nátěr</a></li>
                <li><a href="#postup">Postup nátěru po jednotlivých schodech</a></li>
                <li><a href="#zabradli">Nátěr zábradlí a sloupků</a></li>
                <li><a href="#udrzba">Sušení a údržba</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="vyber-barvy">
              <h2>Výběr vhodné barvy nebo laku na schody</h2>
              <p>Hlavní rozdíl mezi nátěrem schodů a běžným nátěrem dřevěného nábytku je v míře mechanického zatížení. Schody snášejí denní otěr od chodidel, ostré hrany podrážek i drobné nečistoty, které fungují jako brusný papír.</p>
              <h3>Podlahové a schodišťové barvy</h3>
              <p>Pro nátěr schodiště existují speciální podlahové nebo přímo schodišťové barvy na dřevo, které obsahují tvrdší pojivo a jsou navržené přesně na tento typ zátěže. Na rozdíl od běžné nátěrové barvy na dřevo nebo nábytkové barvy mají výrazně vyšší odolnost proti otěru a otlukům.</p>
              <h3>Dvousložkové polyuretanové laky</h3>
              <p>Nejodolnější variantou je dvousložkový polyuretanový lak, který po vytvrzení vytváří velmi tvrdý a chemicky odolný povrch. Hodí se zejména pro velmi exponovaná schodiště, jako jsou vstupy do domu nebo schody v provozech s vyšším pohybem osob. Nevýhodou je náročnější aplikace a nutnost přesně mísit obě složky.</p>
              <h3>Lesk a barevný odstín</h3>
              <p>Polomatné a satinové povrchy lépe skrývají drobné škrábance než vysoký lesk, který každou nerovnost a otěr naopak zvýrazní. Pokud chcete zachovat kresbu dřeva, zvolte lazurovací lak, pro jednotný vzhled spíše krycí barvu.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Na samotné schodnice (vodorovnou nášlapnou plochu) zvolte odolnější materiál než na svislé čelní plochy schodů – nášlapná plocha je vystavena mnohem většímu otěru.</div>
            </section>

            <section id="priprava">
              <h2>Příprava povrchu před nátěrem</h2>
              <p>Kvalita přípravy rozhoduje o tom, jak dlouho nátěr na schodech vydrží, ještě víc než samotná kvalita barvy.</p>
              <h3>Odstranění starého nátěru</h3>
              <p>Pokud je starý nátěr popraskaný, odlupuje se nebo je výrazně poškozený, je potřeba ho z větší části odstranit – brusným strojem, horkovzdušnou pistolí nebo chemickým odlakovačem. Pevný a dobře přilnavý starý nátěr stačí jen zdrsnit.</p>
              <h3>Broušení a odmaštění</h3>
              <p>Celý povrch obruste brusným papírem střední hrubosti, abyste vytvořili dostatečnou drsnost pro přídržnost nové barvy. Po broušení povrch zbavte prachu a odmastěte vhodným ředidlem nebo přípravkem na odmaštění dřeva – mastnota a otisky rukou jsou jednou z nejčastějších příčin, proč barva na schodech brzy odprýská.</p>
              <h3>Opravy a tmelení</h3>
              <p>Praskliny, díry po hřebících nebo vypadané kusy dřeva vyplňte tmelem na dřevo určeným pro venkovní nebo zátěžové použití. Po zaschnutí tmel přebruste do roviny s okolním povrchem, jinak bude nerovnost vidět i po nátěru.</p>
            </section>

            <section id="zaklad">
              <h2>Penetrace a základní nátěr</h2>
              <p>Základní nátěr není zbytečný krok navíc, ale klíčová vrstva, na které stojí přídržnost a životnost celého nátěrového systému.</p>
              <h3>Proč penetraci nevynechat</h3>
              <p>Penetrační nátěr snižuje savost dřeva, takže vrchní barva nezasychá nerovnoměrně a netvoří skvrny. Zároveň vytváří podklad, ke kterému se vrchní vrstvy lépe vážou, což výrazně prodlužuje životnost celého nátěru.</p>
              <h3>Volba podle typu dřeva</h3>
              <p>U měkkých dřevin, jako je smrk nebo borovice, je penetrace ještě důležitější, protože nerovnoměrná savost je u nich výraznější. U tvrdých dřevin, jako je dub nebo buk, lze v některých případech penetraci nahradit prvním ředěným nátěrem vrchní barvy.</p>
            </section>

            <section id="postup">
              <h2>Postup nátěru po jednotlivých schodech</h2>
              <p>Schodiště je často jediný přístup do patra, a tak je potřeba nátěr naplánovat tak, aby šlo schody během sušení stále bezpečně používat.</p>
              <h3>Nátěr přes jeden schod</h3>
              <p>Osvědčeným postupem je natřít nejprve liché schody a sudé přeskočit, takže po lichých schodech lze stále chodit pomocí sudých. Po důkladném zaschnutí natřete zbylé sudé schody stejným způsobem.</p>
              <h3>Práce po sekcích u širokého schodiště</h3>
              <p>U širších schodišť lze místo přeskakování schodů natřít jen polovinu šířky každého schodu a po zaschnutí druhou polovinu, případně využít druhý přístup do patra, pokud je k dispozici.</p>
              <h3>Směr a technika nanášení</h3>
              <p>Barvu naneste ve směru struktury dřeva, tahy táhněte rovnoměrně od jedné strany schodu k druhé a vyhněte se přetahování štětce zpět do již zasychající barvy, aby nevznikaly pruhy a stopy po štětci.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Než začnete natírat, naplánujte si trasu od nejvzdálenějšího schodu směrem ke dveřím nebo východu, abyste se z natřené plochy nemuseli vracet přes čerstvou barvu.</div>
            </section>

            <section id="zabradli">
              <h2>Nátěr zábradlí a sloupků</h2>
              <p>Zábradlí má jiný tvar i míru zatížení než schody, proto se mu při nátěru vyplatí věnovat samostatnou pozornost.</p>
              <h3>Příprava zábradlí</h3>
              <ul>
                <li><strong>Sloupky a madlo</strong> – obruste a odmastěte stejně jako schody, věnujte pozornost spojům a zaoblením, kde se barva snadno hromadí</li>
                <li><strong>Výplně a tyčky</strong> – u soustružených nebo tvarovaných částí použijte tenký štětec, který se vejde i do úzkých zákoutí</li>
                <li><strong>Madlo</strong> – jako nejvíc ohmatávanou část natřete odolnějším lakem s hladkým povrchem, aby na něm barva dlouho nedřela ruce</li>
              </ul>
              <h3>Pořadí nátěru</h3>
              <p>Zábradlí natírejte shora dolů – nejprve madlo, pak sloupky a tyčky, a teprve nakonec přilehlé schody, aby případné odkapy barvy nezašpinily už hotový nátěr na schodech.</p>
            </section>

            <section id="udrzba">
              <h2>Sušení, vytvrzení a dlouhodobá údržba</h2>
              <p>I po zaschnutí na dotyk potřebuje nátěr čas, aby dosáhl plné tvrdosti a odolnosti proti otěru.</p>
              <h3>Doba zrání nátěru</h3>
              <p>Na dotyk je povrch suchý zpravidla do 24 hodin, ale plnou mechanickou pevnost získává nátěr až po 5 až 7 dnech, u dvousložkových laků i déle. První týden je vhodné po schodech chodit v ponožkách nebo měkké domácí obuvi a vyhnout se posunování těžkých předmětů.</p>
              <h3>Jak nátěr dlouho udržet</h3>
              <p>Pod nejvíce zatěžovaný vstup položte rohožku, která zachytí písek a drobné kamínky z bot – ty nátěr poškrábají nejvíc. Schody čistěte jen vlhkým hadrem bez agresivních saponátů, které mohou narušit ochrannou vrstvu laku.</p>
              <h3>Obnova nátěru v exponovaných místech</h3>
              <p>I kvalitní nátěr se po letech v nejvíc chozených místech – uprostřed schodu – ztenčí. Stačí tato místa včas přebrousit a natřít novou vrstvou laku, než se opotřebení prodře až na dřevo a oprava by byla náročnější.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jakou barvu použít na dřevěné schody, aby vydržela?", a: "Nejlepší volbou je speciální podlahová nebo schodišťová barva na dřevo, případně dvousložkový polyuretanový lak. Klasická nábytková nebo nátěrová barva na dřevo otěr od chodidel dlouho nevydrží a začne se odírat už po pár měsících." },
                  { q: "Musím staré schody před natřením brousit?", a: "Ano, broušení je nezbytné. Odstraní starý lesklý nátěr, zdrsní povrch pro lepší přídržnost nové barvy a odhalí praskliny nebo poškozená místa, která je potřeba před nátěrem opravit tmelem na dřevo." },
                  { q: "Jak natřu schody, když je potřebuji během sušení používat?", a: "Schodiště se natírá po jednotlivých schodech nebo přes jeden – nejprve liché, po zaschnutí sudé schody, případně se používá druhá trasa (např. zadní vchod) po dobu sušení. Vždy je nutné dodržet technologickou přestávku podle výrobce." },
                  { q: "Kolik vrstev barvy je potřeba na schody?", a: "Standardně se doporučují dvě až tři vrstvy – jedna penetrační nebo základní a jedna až dvě vrchní krycí. Více vrstev zvyšuje odolnost proti otěru a prodlužuje životnost nátěru." },
                  { q: "Jak dlouho musí nátěr na schodech zrát, než po něm můžu plně chodit?", a: "Na dotyk je nátěr suchý obvykle za 24 hodin, ale plnou mechanickou odolnost a tvrdost získá až po 5–7 dnech, u dvousložkových laků i déle. První týden je vhodné chodit po schodech jen v ponožkách nebo měkké domácí obuvi." },
                  { q: "Jak udržet natřené schody dlouho v dobrém stavu?", a: "Pod boty u vstupu položte rohožku, schody pravidelně vytírejte jen vlhkým hadrem bez agresivních chemických přípravků a jednou za pár let obnovte vrchní vrstvu laku v nejvíce zatížených místech, než se prodře až na dřevo." },
                ].map(({ q, a }) => (
                  <details key={q} className="faq-item">
                    <summary className="faq-summary">{q}<span className="faq-icon">▾</span></summary>
                    <div className="faq-body">{a}</div>
                  </details>
                ))}
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/jak-malovat-drevene-schody" title="Jak malovat dřevěné schody a zábradlí, aby barva vydržela" />

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
                <li><a href="#vyber-barvy">Výběr barvy nebo laku</a></li>
                <li><a href="#priprava">Příprava povrchu</a></li>
                <li><a href="#zaklad">Penetrace a základní nátěr</a></li>
                <li><a href="#postup">Nátěr po jednotlivých schodech</a></li>
                <li><a href="#zabradli">Nátěr zábradlí</a></li>
                <li><a href="#udrzba">Sušení a údržba</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/malovani" className="sidebar-cat-link">🎨 Malování & barvy<span>Více článků →</span></Link>
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
