import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak vybrat nové schodiště při rekonstrukci domu",
  description: "Materiály, typy konstrukce a bezpečnostní normy – na co se zaměřit při výběru nového schodiště.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/vyber-schodiste-pri-rekonstrukci" },
  openGraph: { title: "Jak vybrat nové schodiště při rekonstrukci domu", description: "Materiály, typy konstrukce a bezpečnostní normy – na co se zaměřit při výběru nového schodiště.", url: "https://www.domovniguru.cz/blog/vyber-schodiste-pri-rekonstrukci", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-24T08:00:00Z", modifiedTime: "2026-06-24T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20vybrat%20nov%C3%A9%20schodi%C5%A1t%C4%9B%20p%C5%99i%20rekonstrukci%20domu&cat=blog", width: 1200, height: 630, alt: "Jak vybrat nové schodiště při rekonstrukci domu" }] },
  twitter: { card: "summary_large_image", title: "Jak vybrat nové schodiště při rekonstrukci domu", description: "Materiály, typy konstrukce a bezpečnostní normy – na co se zaměřit při výběru nového schodiště." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/vyber-schodiste-pri-rekonstrukci#article", "headline": "Jak vybrat nové schodiště při rekonstrukci domu", "datePublished": "2026-06-24T08:00:00Z", "dateModified": "2026-06-24T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["výběr schodiště", "rekonstrukce schodiště", "typy schodišť", "materiály schodiště", "bezpečnost schodiště", "obložení betonového schodiště"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Stěhování & rekonstrukce", "item": "https://www.domovniguru.cz/blog/kategorie/stehovani" }, { "@type": "ListItem", "position": 4, "name": "Jak vybrat nové schodiště při rekonstrukci domu", "item": "https://www.domovniguru.cz/blog/vyber-schodiste-pri-rekonstrukci" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jaký typ schodiště zabere nejméně místa?", "acceptedAnswer": { "@type": "Answer", "text": "Nejméně prostoru zabere vřetenové (točité) schodiště, protože stoupá kolem centrálního sloupu na velmi malé půdorysné ploše. Nevýhodou je menší pohodlí při přenášení větších věcí a vyšší nároky na přesnost výroby. Pokud máš víc místa, dvouramenné schodiště se zalomením o 180° je pohodlnější na chození i na stěhování nábytku." } }, { "@type": "Question", "name": "Můžu staré betonové schodiště jen obložit dřevem?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, obložení betonového schodiště dřevěnými nebo dřevoplastovými obkladovými stupnicemi je jedna z nejlevnějších a nejrychlejších cest k novému vzhledu. Podmínkou je, že beton je rovný, suchý a bez prasklin – případné nerovnosti se musí vyrovnat samonivelační stěrkou nebo lepicí hmotou před montáží obkladů." } }, { "@type": "Question", "name": "Jaká je normou daná maximální výška schodišťového stupně?", "acceptedAnswer": { "@type": "Answer", "text": "Česká norma ČSN 73 4130 doporučuje pro schodiště v bytových domech výšku stupně 160–190 mm, v rodinných domech do 175 mm, ideálně okolo 170 mm. Důležitý je i vztah mezi výškou a šířkou stupně podle vzorce 2h + b = 600–660 mm, který zajišťuje přirozený krok." } }, { "@type": "Question", "name": "Je nutné mít zábradlí na obou stranách schodiště?", "acceptedAnswer": { "@type": "Answer", "text": "Zábradlí je ze zákona povinné na volné straně schodiště, pokud je výška zábradelní hrany nad podlahou víc než 0,5 m, a v bytových domech se zpravidla žádá na obou stranách u širších schodišť. U schodišť v domácnosti s dětmi se doporučuje zábradlí na obě strany a svislé mezery v zábradlí maximálně 120 mm, aby jimi neprostrčily hlavu." } }, { "@type": "Question", "name": "Kolik stojí nové schodiště do rodinného domu?", "acceptedAnswer": { "@type": "Answer", "text": "Jednoduché ocelové schodiště s dřevěnými stupni vyjde orientačně na 40 000–90 000 Kč, masivní dřevěné přímé nebo zalomené schodiště na 80 000–180 000 Kč a designové kombinované nebo betonové schodiště s obkladem se zábradlím ze skla či nerezu se může dostat na 150 000–300 000 Kč i víc, podle velikosti a detailů zpracování." } }] }] };

const RELATED = [
  { title: "Plánování rekonstrukce bytu – kompletní průvodce", href: "/blog/planovani-rekonstrukce-bytu", read: "7 min" },
  { title: "Sádrokartonová příčka – postup montáže krok za krokem", href: "/blog/sadrokarton-pricka-postup", read: "6 min" },
  { title: "Rozdělení velkého pokoje na dvě místnosti", href: "/blog/rozdeleni-velkeho-pokoje-na-dve-mistnosti", read: "6 min" },
  { title: "Hypotéka na rekonstrukci – jak ji získat a na co si dát pozor", href: "/blog/hypoteka-na-rekonstrukci", read: "6 min" },
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
              <span>Jak vybrat nové schodiště při rekonstrukci domu</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏠 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak vybrat nové schodiště při rekonstrukci domu</h1>
              <p className="article-lead">Schodiště je jeden z mála prvků domu, který používáš desítky let, vidíš ho každý den a změna se těžko vrací zpátky. Při rekonstrukci se vyplatí věnovat výběru konstrukce, materiálu a bezpečnostních parametrů víc času, než se na první pohled zdá – rozhoduje totiž nejen o vzhledu, ale i o tom, kolik místa schodiště zabere a jak bezpečně se po něm bude chodit dětem i seniorům.</p>
              <div className="article-meta-row"><span>Aktualizováno: 24. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#typy-konstrukce">Typy konstrukce schodiště</a></li>
                <li><a href="#materialy">Materiály a jejich vlastnosti</a></li>
                <li><a href="#normy">Normy pro výšku stupně a šířku schodiště</a></li>
                <li><a href="#zabradli">Zábradlí a bezpečnost pro děti</a></li>
                <li><a href="#oblozeni">Obložení starého betonového schodiště</a></li>
                <li><a href="#prostor">Prostorové nároky jednotlivých typů</a></li>
                <li><a href="#ceny">Orientační ceny podle materiálu a velikosti</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="typy-konstrukce">
              <h2>Typy konstrukce schodiště</h2>
              <p>Než začneš řešit materiál nebo vzhled, je potřeba si ujasnit, jaký typ konstrukce do daného prostoru vůbec půjde umístit. Volba typu ovlivňuje nejen estetiku, ale především bezpečnost a pohodlí při běžném používání.</p>
              <ul>
                <li><strong>Přímé schodiště</strong> – nejjednodušší a nejlevnější varianta, jeden přímý úsek bez zalomení. Vyžaduje nejvíc půdorysného prostoru, ale je nejpohodlnější na chození a stěhování věcí.</li>
                <li><strong>Zalomené (čtvrtkruhové) schodiště</strong> – se zalomením o 90°, obvykle s mezipodestou nebo vykrojenými stupni v rohu. Šetří prostor oproti přímému, zachovává dobrou chodivost.</li>
                <li><strong>Dvouramenné schodiště</strong> – zalomení o 180° s mezipodestou uprostřed. Ideální pro vyšší podlaží, protože rozděluje výstup na dvě kratší rampy s odpočinkem.</li>
                <li><strong>Vřetenové (točité) schodiště</strong> – stoupá po kruhové dráze kolem centrálního sloupu. Zabírá nejméně místa, ale chůze je méně pohodlná a stěhování větších předmětů obtížné.</li>
              </ul>
              <p>Volba typu se odvíjí hlavně od dostupného prostoru a od toho, kdo bude schodiště používat. V domě s malými dětmi nebo staršími lidmi se vyplatí dát přednost pohodlnější chodivosti i za cenu většího půdorysu.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud rekonstruujete celé patro a měníte i dispozici, promyslete umístění schodiště společně s plánem ostatních místností – podívejte se na náš článek o <Link href="/blog/planovani-rekonstrukce-bytu" style={{ color: "#2a6496", textDecoration: "underline" }}>plánování rekonstrukce bytu</Link>, princip postupu platí i pro domy.</div>
            </section>

            <section id="materialy">
              <h2>Materiály a jejich vlastnosti</h2>
              <h3>Dřevo</h3>
              <p>Klasická volba s teplým vzhledem a dobrou tepelnou izolací povrchu – v zimě je dřevěný stupeň příjemnější na holou nohu než kov nebo beton. Nevýhodou je citlivost na vlhkost a postupné opotřebení povrchu, které je ale možné renovovat broušením a novým lakem nebo olejem.</p>
              <h3>Ocel</h3>
              <p>Ocelová konstrukce (schodnice, nosné prvky) umožňuje subtilní, vzdušný design a velkou nosnost na malém průřezu materiálu. Často se kombinuje s dřevěnými nebo skleněnými stupni. Vyžaduje přesnou výrobu na zakázku, proto je dražší na pořízení, ale velmi trvanlivá.</p>
              <h3>Beton</h3>
              <p>Monolitické betonové schodiště se odlévá přímo na stavbě nebo se montuje z prefabrikovaných dílů. Je extrémně odolné a tiché, ale syrový beton bez povrchové úpravy působí chladně – proto se téměř vždy obkládá dřevem, dlažbou nebo kobercem.</p>
              <h3>Kombinace materiálů</h3>
              <p>Většina moderních schodišť kombinuje nosnou ocelovou nebo betonovou konstrukci s dřevěnými stupni a skleněným nebo nerezovým zábradlím. Tato kombinace spojuje výhody pevnosti, tepelné příjemnosti a moderního vzhledu.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud řešíte zároveň podlahy v okolí schodiště, sladěte odstín dřevěných stupňů s podlahovou krytinou – velký barevný rozdíl mezi schody a podlahou dělá interiér nesourodým.</div>
            </section>

            <section id="normy">
              <h2>Normy pro výšku stupně a šířku schodiště</h2>
              <p>Pohodlí a bezpečnost chůze po schodišti určuje hlavně poměr výšky a šířky (hloubky) stupně. Česká norma ČSN 73 4130 stanovuje doporučené i maximální hodnoty:</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Parametr</th><th>Doporučená hodnota</th><th>Maximum / minimum</th></tr></thead>
                  <tbody>
                    <tr><td>Výška stupně (h)</td><td>165–175 mm</td><td>max. 190 mm (175 mm v RD)</td></tr>
                    <tr><td>Šířka stupně (b)</td><td>280–300 mm</td><td>min. 250 mm</td></tr>
                    <tr><td>Sklon schodišťového ramene</td><td>25–35°</td><td>max. 41° u vedlejších schodišť</td></tr>
                    <tr><td>Šířka ramene (hlavní schodiště)</td><td>900–1100 mm</td><td>min. 900 mm</td></tr>
                    <tr><td>Podchodná výška</td><td>—</td><td>min. 2 100 mm</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Klíčový je takzvaný „krokový vzorec" <strong>2h + b = 600–660 mm</strong>, který vychází z přirozené délky lidského kroku. Pokud schodiště tomuto vztahu neodpovídá, chůze po něm je nepříjemná nebo dokonce nebezpečná, i když jednotlivé rozměry vyhovují normě samy o sobě.</p>
            </section>

            <section id="zabradli">
              <h2>Zábradlí a bezpečnost pro děti</h2>
              <p>Zábradlí je povinné na každé volné straně schodiště, kde je zábradelní hrana výš než 0,5 m nad podlahou. U schodišť v rodinných domech s malými dětmi je vhodné zábradlí na obě strany, i tam, kde to norma přímo nevyžaduje.</p>
              <ul>
                <li><strong>Výška zábradlí</strong> – minimálně 900 mm, u schodišť s rizikem pádu z velké výšky (např. galerie nad schodištěm) až 1 000 mm</li>
                <li><strong>Mezery ve výplni zábradlí</strong> – maximálně 120 mm, aby jimi malé dítě neprostrčilo hlavu</li>
                <li><strong>Svislé tyčky vs. sklo</strong> – svislé tyčky jsou levnější, skleněná výplň lépe propouští světlo a je bezpečnější pro domácí mazlíčky i děti, které by se mohly snažit prolézat mezerami</li>
                <li><strong>Zábrana u schodiště pro batolata</strong> – pokud máte malé děti, dveřní zábrana na vrcholu i u patky schodiště je nutností, dokud dítě neumí samo bezpečně chodit po schodech</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Protiskluzové lišty nebo pásky na hranách stupňů jsou levné opatření, které výrazně snižuje riziko uklouznutí – vyplatí se nejen u dřevěných, ale i u dlaždičkových nebo kamenných stupňů.</div>
            </section>

            <section id="oblozeni">
              <h2>Obložení starého betonového schodiště dřevem</h2>
              <p>Pokud máte v domě funkční, ale vzhledově opotřebované betonové schodiště, nemusíte ho bourat. Obkladové sady (stupnice a podstupnice z dřeva nebo dřevoplastu) se lepí přímo na vyrovnaný povrch betonu a během jednoho až dvou dnů dají schodišti zcela nový vzhled.</p>
              <p>Postup zahrunje kontrolu rovinnosti betonu, případné vyrovnání samonivelační stěrkou nebo lepicí hmotou, naříznutí a osazení obkladových prvků a nakonec olištování okrajů. Tato úprava je výrazně levnější než stavba nového schodiště a hodí se i jako mezikrok před kompletní rekonstrukcí, pokud chcete bydlet v domě během stavebních prací.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Před obložením zkontrolujte, jestli beton nemá trhliny způsobené sedáním stavby – pokud ano, je potřeba je nejdřív sanovat, jinak by se mohly objevit i na novém obkladu.</div>
            </section>

            <section id="prostor">
              <h2>Prostorové nároky jednotlivých typů</h2>
              <p>Rozhodnutí mezi typy konstrukce se v praxi často zúží na to, kolik místa máte k dispozici. Orientační půdorysné nároky pro výšku podlaží 2 800 mm:</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ schodiště</th><th>Orientační půdorys</th><th>Pohodlí chůze</th></tr></thead>
                  <tbody>
                    <tr><td>Přímé</td><td>cca 1 × 4,5–5 m</td><td>Nejvyšší</td></tr>
                    <tr><td>Zalomené (90°)</td><td>cca 2,5 × 2,5–3 m</td><td>Vysoké</td></tr>
                    <tr><td>Dvouramenné (180°)</td><td>cca 2,5 × 2,5 m</td><td>Vysoké, s odpočinkem na podestě</td></tr>
                    <tr><td>Vřetenové</td><td>průměr cca 1,8–2,2 m</td><td>Nižší, úzké stupně u středu</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Pokud řešíte malý dům nebo byt s podkrovím, vřetenové schodiště bývá jediná reálná možnost, jak se vejít na malou plochu. Naopak v rodinném domě s dostatkem místa je dvouramenné schodiště s podestou nejlepším kompromisem mezi úsporou prostoru a pohodlím.</p>
            </section>

            <section id="ceny">
              <h2>Orientační ceny podle materiálu a velikosti</h2>
              <ul>
                <li><strong>Ocelové schodiště s dřevěnými stupni</strong> – 40 000–90 000 Kč</li>
                <li><strong>Masivní dřevěné přímé nebo zalomené schodiště</strong> – 80 000–180 000 Kč</li>
                <li><strong>Designové kombinované schodiště (ocel/beton + dřevo/sklo)</strong> – 150 000–300 000 Kč a víc</li>
                <li><strong>Obložení stávajícího betonového schodiště</strong> – 15 000–40 000 Kč podle počtu stupňů a materiálu obkladu</li>
                <li><strong>Vřetenové kovové schodiště (např. do podkroví)</strong> – 30 000–70 000 Kč</li>
              </ul>
              <p>Cena se výrazně liší podle počtu stupňů, šířky schodiště, typu zábradlí a toho, jestli je konstrukce sériová nebo vyráběná na zakázku. Pokud rekonstrukci financujete úvěrem, schodiště se obvykle zahrnuje do celkového rozpočtu stejně jako ostatní stavební práce – víc o financování najdete v článku o <Link href="/blog/hypoteka-na-rekonstrukci" style={{ color: "#2a6496", textDecoration: "underline" }}>hypotéce na rekonstrukci</Link>.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jaký typ schodiště zabere nejméně místa?", a: "Nejméně prostoru zabere vřetenové (točité) schodiště, protože stoupá kolem centrálního sloupu na velmi malé půdorysné ploše. Nevýhodou je menší pohodlí při přenášení větších věcí a vyšší nároky na přesnost výroby. Pokud máš víc místa, dvouramenné schodiště se zalomením o 180° je pohodlnější na chození i na stěhování nábytku." },
                  { q: "Můžu staré betonové schodiště jen obložit dřevem?", a: "Ano, obložení betonového schodiště dřevěnými nebo dřevoplastovými obkladovými stupnicemi je jedna z nejlevnějších a nejrychlejších cest k novému vzhledu. Podmínkou je, že beton je rovný, suchý a bez prasklin – případné nerovnosti se musí vyrovnat samonivelační stěrkou nebo lepicí hmotou před montáží obkladů." },
                  { q: "Jaká je normou daná maximální výška schodišťového stupně?", a: "Česká norma ČSN 73 4130 doporučuje pro schodiště v bytových domech výšku stupně 160–190 mm, v rodinných domech do 175 mm, ideálně okolo 170 mm. Důležitý je i vztah mezi výškou a šířkou stupně podle vzorce 2h + b = 600–660 mm, který zajišťuje přirozený krok." },
                  { q: "Je nutné mít zábradlí na obou stranách schodiště?", a: "Zábradlí je ze zákona povinné na volné straně schodiště, pokud je výška zábradelní hrany nad podlahou víc než 0,5 m, a v bytových domech se zpravidla žádá na obou stranách u širších schodišť. U schodišť v domácnosti s dětmi se doporučuje zábradlí na obě strany a svislé mezery v zábradlí maximálně 120 mm, aby jimi neprostrčily hlavu." },
                  { q: "Kolik stojí nové schodiště do rodinného domu?", a: "Jednoduché ocelové schodiště s dřevěnými stupni vyjde orientačně na 40 000–90 000 Kč, masivní dřevěné přímé nebo zalomené schodiště na 80 000–180 000 Kč a designové kombinované nebo betonové schodiště s obkladem se zábradlím ze skla či nerezu se může dostat na 150 000–300 000 Kč i víc, podle velikosti a detailů zpracování." },
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
                <li><a href="#typy-konstrukce">Typy konstrukce</a></li>
                <li><a href="#materialy">Materiály</a></li>
                <li><a href="#normy">Normy pro stupně a šířku</a></li>
                <li><a href="#zabradli">Zábradlí a bezpečnost</a></li>
                <li><a href="#oblozeni">Obložení betonu dřevem</a></li>
                <li><a href="#prostor">Prostorové nároky</a></li>
                <li><a href="#ceny">Orientační ceny</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/stehovani" className="sidebar-cat-link">🏠 Stěhování & rekonstrukce<span>25 článků →</span></Link>
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
