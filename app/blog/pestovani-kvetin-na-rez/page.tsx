import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pěstování květin na řez – výběr, záhon a sklizeň",
  description: "Jak si na zahradě vypěstovat vlastní řezané kytice. Výběr druhů, plánování záhonu, výsadba, sklizeň ve správný čas a prodloužení výdrže ve váze.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/pestovani-kvetin-na-rez" },
  openGraph: { title: "Pěstování květin na řez – výběr, záhon a sklizeň", description: "Jak si na zahradě vypěstovat vlastní řezané kytice. Výběr druhů, plánování záhonu, výsadba, sklizeň ve správný čas a prodloužení výdrže ve váze.", url: "https://www.domovniguru.cz/blog/pestovani-kvetin-na-rez", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-25T08:00:00Z", modifiedTime: "2026-06-25T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=P%C4%9Bstov%C3%A1n%C3%AD%20kv%C4%9Btin%20na%20%C5%99ez%20%E2%80%93%20v%C3%BDb%C4%9Br%2C%20z%C3%A1hon%20a%20sklize%C5%88&cat=blog", width: 1200, height: 630, alt: "Pěstování květin na řez – výběr, záhon a sklizeň" }] },
  twitter: { card: "summary_large_image", title: "Pěstování květin na řez – výběr, záhon a sklizeň", description: "Jak si na zahradě vypěstovat vlastní řezané kytice. Výběr druhů, plánování záhonu, výsadba, sklizeň ve správný čas a prodloužení výdrže ve váze." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/pestovani-kvetin-na-rez#article", "headline": "Pěstování květin na řez – výběr, záhon a sklizeň", "datePublished": "2026-06-25T08:00:00Z", "dateModified": "2026-06-25T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["pěstování květin na řez", "záhon na řez", "jiřinky", "gladioly", "zinnie", "řezané kytice ze zahrady"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Zahrada & terasa", "item": "https://www.domovniguru.cz/blog/kategorie/zahrada" }, { "@type": "ListItem", "position": 4, "name": "Pěstování květin na řez", "item": "https://www.domovniguru.cz/blog/pestovani-kvetin-na-rez" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jaké květiny jsou nejlepší na řez do vázy?", "acceptedAnswer": { "@type": "Answer", "text": "Mezi nejvděčnější druhy patří jiřinky, zinnie, slunečnice, kosmos, astry a gladioly. Všechny mají dlouhé, pevné stonky, vydrží ve váze přes týden a navíc čím víc se z nich řeže, tím víc nových květů nasazují." } }, { "@type": "Question", "name": "Kdy je nejlepší čas sklízet květiny na řez?", "acceptedAnswer": { "@type": "Answer", "text": "Nejvhodnější je brzy ráno, dokud jsou rostliny po noci plné vody a teplota je nízká. V tuto dobu mají stonky nejvíc nasáklou vodou a kytice po nařezání déle vydrží. Sklizeň v poledním slunečním žáru naopak kytici rychle zvadne." } }, { "@type": "Question", "name": "Jak prodloužit výdrž řezaných květin ve váze?", "acceptedAnswer": { "@type": "Answer", "text": "Stonky řež šikmo ostrým nožem nebo nůžkami, okamžitě po seříznutí ponoř do vody, odstraň listy, které by byly pod hladinou, a vodu ve váze měň každé 2–3 dny. Pomáhá i přidání trochy cukru a kapky bělidla nebo speciálního přípravku pro řezané květiny." } }, { "@type": "Question", "name": "Jak naplánovat záhon na řez, aby kytice vydržely celé léto?", "acceptedAnswer": { "@type": "Answer", "text": "Klíčem je postupná výsadba (succession planting) – stejný druh se vysazuje nebo vysévá v intervalu 2–3 týdnů, čímž se sklizeň rozloží na celé léto místo jedné krátké vlny. Kombinace raných druhů (slunečnice, zinnie) s pozdějšími (jiřinky, astry) prodlouží sezónu od června až do prvních mrazů." } }] }] };

const RELATED = [
  { title: "Jak připravit zahradu na jaro – kompletní checklist", href: "/blog/jarni-zahrada", read: "7 min" },
  { title: "Podzimní výsadba cibulovin – tulipány, narcisy, krokusy", href: "/blog/podzimni-vysadba-cibulovin", read: "5 min" },
  { title: "Okrasné trávy na zahradě: výběr a péče", href: "/blog/okrasne-travy-na-zahrade", read: "4 min" },
  { title: "Bylinková zahradka – jak pěstovat bylinky doma i venku", href: "/blog/bylinkova-zahradka", read: "6 min" },
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
              <span>Pěstování květin na řez</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Pěstování květin na řez</h1>
              <p className="article-lead">Vlastní řezané kytice ze zahrady jsou levnější, čerstvější a hlavně přizpůsobené přesně tomu, co máš rád. Stačí vybrat pár vděčných druhů, naplánovat malý záhon a sklízet ve správný čas. Tady je návod, jak na to – od výběru rostlin po prodloužení výdrže ve váze.</p>
              <div className="article-meta-row"><span>Aktualizováno: 25. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#vyber">Výběr vhodných druhů</a></li>
                <li><a href="#planovani">Plánování záhonu na řez</a></li>
                <li><a href="#vysadba">Výsadba a péče</a></li>
                <li><a href="#prodlouzeni">Prodloužení sklizně postupnou výsadbou</a></li>
                <li><a href="#sklizen">Sklizeň ve správný čas dne</a></li>
                <li><a href="#vydrz">Prodloužení výdrže ve váze</a></li>
                <li><a href="#kalendar">Sezónní kalendář</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="vyber">
              <h2>Výběr vhodných druhů pro řezané kytice</h2>
              <p>Ne každá zahradní květina se hodí do vázy – některé mají krátké nebo dutí stonky, jiné rychle vadnou. Pro spolehlivé kytice se vyplatí sázet osvědčené druhy, které mají dlouhé pevné stonky a dobrou výdrž po nařezání.</p>
              <ul>
                <li><strong>Jiřinky (dahlie)</strong> – jedny z nejvděčnějších, kvetou od července až do mrazů, čím víc se řežou, tím víc nasazují nových květů</li>
                <li><strong>Gladioly</strong> – vysoké klasy s mnoha květy postupně se otevírajícími, efektní do velkých váz, sázejí se postupně každé 2 týdny pro nepřetržitou sklizeň</li>
                <li><strong>Slunečnice</strong> – rychlé, výrazné, existují i odrůdy speciálně šlechtěné na řez bez pylu (nešpiní ubrus a textil)</li>
                <li><strong>Zinnie</strong> – jedny z nejsnazších na pěstování, čím víc se řežou, tím bohatěji větví a kvetou, odolné vůči suchu</li>
                <li><strong>Astry</strong> – kvetou na podzim, kdy už mnoho jiných květin dokvétá, dlouhá výdrž ve váze</li>
                <li><strong>Kosmos (krásenka)</strong> – lehké, vzdušné květy, výborné jako doplněk do kytic, samovýsevné a nenáročné</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Začni s 3–4 druhy, které kvetou v různých částech sezóny (např. slunečnice a zinnie v létě, jiřinky a astry na podzim) – rozložíš si tak sklizeň na měsíce místo jedné krátké vlny.</div>
            </section>

            <section id="planovani">
              <h2>Plánování záhonu na řez</h2>
              <p>Záhon určený výhradně na řez se plánuje jinak než okrasný záhon u domu – tady jde především o praktičnost a snadnou sklizeň, ne o estetiku z dálky.</p>
              <ul>
                <li><strong>Řádkové uspořádání</strong> – sázej do rovných řádků s rozestupem 30–40 cm mezi řádky, místo nepravidelných skupin; usnadní to chození mezi rostlinami a sklizeň bez pošlapání ostatních</li>
                <li><strong>Slunné stanoviště</strong> – většina květin na řez potřebuje alespoň 6 hodin přímého slunce denně pro dostatek květů a pevné stonky</li>
                <li><strong>Vyhrazené místo, ne ozdobný záhon</strong> – záhon na řez funguje nejlépe jako samostatná „pracovní" plocha, třeba za domem nebo v koutě zahrady, kde nevadí prořídnutí po sklizni</li>
                <li><strong>Opora pro vysoké druhy</strong> – jiřinky a gladioly potřebují kolíky nebo síť, jinak je vítr a tíha květů zalomí</li>
                <li><strong>Příprava půdy</strong> – stejně jako u zeleninového záhonu se vyplatí přidat kompost a zajistit dobrou propustnost; podívej se na obecný postup v článku <Link href="/blog/vyvyseny-zahon-postup" style={{ color: "#2a6496", textDecoration: "underline" }}>jak postavit vyvýšený záhon</Link>, pokud řešíš špatnou půdu</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Plánuj záhon ve tvaru, který umožní přístup ze všech stran – třeba jako úzký pás o šířce maximálně 120 cm, abys na rostliny uprostřed dosáhla bez nutnosti šlapat do záhonu.</div>
            </section>

            <section id="vysadba">
              <h2>Výsadba a péče</h2>
              <p>Většinu druhů na řez lze vysévat přímo na záhon od poloviny května, kdy už nehrozí mráz, nebo předpěstovat ze semen uvnitř o 4–6 týdnů dříve pro dřívější kvetení. Jiřinky a gladioly se vysazují jako hlízy/cibule až po posledních mrazech, obvykle v polovině května.</p>
              <ul>
                <li><strong>Zálivka</strong> – pravidelná, ale ne přemokřená; hluboká zálivka 1–2× týdně je lepší než denní povrchové zalévání</li>
                <li><strong>Mulčování</strong> – vrstva mulče mezi řádky omezí plevel a udrží vlhkost, méně práce s okopávkou</li>
                <li><strong>Odštipování vrcholů (pinching)</strong> – u jiřinek a zinnií odštipnutí vrcholu hlavního výhonu v rané fázi podpoří větvení a víc květů na rostlinu</li>
                <li><strong>Hnojení</strong> – vyvážené hnojivo s mírně vyšším obsahem fosforu a draslíku podporuje kvetení; přemíra dusíku naopak vede k bujným listům na úkor květů</li>
                <li><strong>Odstraňování odkvetlých květů</strong> – pravidelné odstřihávání starých květů (deadheading) udrží rostlinu v produkci nových</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> U jiřinek a gladiolů instaluj oporu (kolík nebo mřížku) hned při výsadbě, ne až když rostlina povyrostne – později už se kořenový bal poškodí.</div>
            </section>

            <section id="prodlouzeni">
              <h2>Prodloužení sklizně postupnou výsadbou</h2>
              <p>Postupná výsadba (succession planting) je klíčová technika pro nepřetržitou sklizeň po celé léto, místo jedné krátké vlny květů. Princip je jednoduchý – stejný druh se vysévá nebo vysazuje v menších dávkách s odstupem 2–3 týdnů.</p>
              <ul>
                <li><strong>Zinnie a slunečnice</strong> – vysévej po malých dávkách od poloviny května do konce června, sklizeň se tak rozloží na celé léto</li>
                <li><strong>Gladioly</strong> – sázej cibule po skupinách s odstupem 2 týdnů od poloviny dubna do konce května</li>
                <li><strong>Kosmos</strong> – samovýsevný a snadno se přesazuje, druhou vlnu lze vysít přímo do mezer po první sklizni</li>
              </ul>
              <p>Kombinace různě dlouho kvetoucích druhů – jednoletky pro rychlou letní sklizeň, jiřinky a astry pro podzim – zajistí květiny na řez od června prakticky až do prvních mrazů.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Vést si jednoduchý zápisník nebo poznámku v telefonu s daty výsevu pomůže udržet rytmus postupné výsadby – snadno se totiž zapomene, kdy byla poslední dávka zaseta.</div>
            </section>

            <section id="sklizen">
              <h2>Sklizeň ve správný čas dne</h2>
              <p>Čas sklizně ovlivňuje, jak dlouho kytice vydrží ve váze. Nejlepší je sklízet brzy ráno, dokud jsou rostliny po noci plné vody a teplota vzduchu je nízká.</p>
              <ul>
                <li><strong>Ranní sklizeň</strong> – stonky jsou nejvíc nasáklé vodou, kytice po nařezání vydrží déle</li>
                <li><strong>Vyhýbej se polednímu žáru</strong> – sklizeň za vysokých teplot a plného slunce vede k rychlému vadnutí ihned po nařezání</li>
                <li><strong>Fáze otevřenosti květu</strong> – u většiny druhů (zinnie, jiřinky) je nejlepší sklízet těsně před plným otevřením; u gladiolů a slunečnic naopak, dokud je spodní část květu otevřená a horní ještě v poupěti</li>
                <li><strong>Šikmý řez</strong> – stonek se řeže ostrým nožem nebo zahradnickými nůžkami pod úhlem, čistý šikmý řez zvětší plochu pro nasávání vody</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Vezmi si na sklizeň kbelík s vodou přímo na záhon a stonky vkládej do vody hned po nařezání – omezíš tak vstup vzduchu do cévních svazků stonku, který urychluje vadnutí.</div>
            </section>

            <section id="vydrz">
              <h2>Prodloužení výdrže ve váze</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Krok</th><th>Proč to pomáhá</th></tr></thead>
                  <tbody>
                    <tr><td>Šikmý řez stonku</td><td>Větší plocha pro nasávání vody, lepší přísun k květu</td></tr>
                    <tr><td>Okamžité vložení do vody</td><td>Zabrání vniknutí vzduchu do cévních svazků</td></tr>
                    <tr><td>Odstranění spodních listů</td><td>Listy pod hladinou hnijí a kazí vodu rychleji</td></tr>
                    <tr><td>Výměna vody každé 2–3 dny</td><td>Omezuje růst bakterií, které blokují stonek</td></tr>
                    <tr><td>Chladnější umístění vázy</td><td>Mimo přímé slunce a topení, kytice vydrží déle</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Přidání trochy cukru do vody dodá květu energii, kapka bělidla nebo speciální přípravek pro řezané květiny zase omezí množení bakterií. Konzervační sáčky přiložené k řezaným květinám z květinářství obsahují přesně tuto kombinaci a lze je použít i u vlastních kytic ze zahrady.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Jiřinky před vložením do vázy ponoř stonek na pár sekund do velmi horké vody (ne vařící) – pomůže to „zapečetit" konec stonku a kytice vydrží déle, protože jiřinky mají tendenci rychle nasávat vzduch.</div>
            </section>

            <section id="kalendar">
              <h2>Sezónní kalendář pěstování na řez</h2>
              <ul>
                <li><strong>Březen–duben</strong> – předpěstování zinnií, slunečnic a astrů ze semen uvnitř, plánování a příprava záhonu</li>
                <li><strong>Polovina května</strong> – výsadba jiřinek a první dávky gladiolů po posledních mrazech, přímý výsev zinnií a slunečnic na záhon</li>
                <li><strong>Červen</strong> – první sklizeň zinnií a kosmosu, postupné dosévání dalších dávek</li>
                <li><strong>Červenec–srpen</strong> – hlavní sklizňová sezóna, jiřinky začínají kvést, pravidelné odstraňování odkvetlých květů</li>
                <li><strong>Září–říjen</strong> – astry a pozdní jiřinky kvetou až do prvních mrazů, poslední sklizeň před zazimováním</li>
              </ul>
              <p>Citlivější druhy jako jiřinky a gladioly je potřeba před zimou vyzvednout a uskladnit – víc informací najdeš v článku o <Link href="/blog/ochrana-rostlin-pred-zimou" style={{ color: "#2a6496", textDecoration: "underline" }}>ochraně rostlin před zimou</Link>.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jaké květiny jsou nejlepší na řez do vázy?", a: "Mezi nejvděčnější druhy patří jiřinky, zinnie, slunečnice, kosmos, astry a gladioly. Všechny mají dlouhé, pevné stonky, vydrží ve váze přes týden a navíc čím víc se z nich řeže, tím víc nových květů nasazují." },
                  { q: "Kdy je nejlepší čas sklízet květiny na řez?", a: "Nejvhodnější je brzy ráno, dokud jsou rostliny po noci plné vody a teplota je nízká. V tuto dobu mají stonky nejvíc nasáklou vodou a kytice po nařezání déle vydrží. Sklizeň v poledním slunečním žáru naopak kytici rychle zvadne." },
                  { q: "Jak prodloužit výdrž řezaných květin ve váze?", a: "Stonky řež šikmo ostrým nožem nebo nůžkami, okamžitě po seříznutí ponoř do vody, odstraň listy, které by byly pod hladinou, a vodu ve váze měň každé 2–3 dny. Pomáhá i přidání trochy cukru a kapky bělidla nebo speciálního přípravku pro řezané květiny." },
                  { q: "Jak naplánovat záhon na řez, aby kytice vydržely celé léto?", a: "Klíčem je postupná výsadba (succession planting) – stejný druh se vysazuje nebo vysévá v intervalu 2–3 týdnů, čímž se sklizeň rozloží na celé léto místo jedné krátké vlny. Kombinace raných druhů (slunečnice, zinnie) s pozdějšími (jiřinky, astry) prodlouží sezónu od června až do prvních mrazů." },
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
                <li><a href="#vyber">Výběr vhodných druhů</a></li>
                <li><a href="#planovani">Plánování záhonu</a></li>
                <li><a href="#vysadba">Výsadba a péče</a></li>
                <li><a href="#prodlouzeni">Prodloužení sklizně</a></li>
                <li><a href="#sklizen">Sklizeň ve správný čas</a></li>
                <li><a href="#vydrz">Výdrž ve váze</a></li>
                <li><a href="#kalendar">Sezónní kalendář</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/zahrada" className="sidebar-cat-link">🌿 Zahrada & terasa<span>36 článků →</span></Link>
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
