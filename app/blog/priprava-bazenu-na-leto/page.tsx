import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak připravit zahradní bazén na letní sezónu",
  description: "Spuštění bazénu po zimě, čištění, chemie a filtrace – kompletní postup od odkrytí po první koupání.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/priprava-bazenu-na-leto" },
  openGraph: { title: "Jak připravit zahradní bazén na letní sezónu", description: "Spuštění bazénu po zimě, čištění, chemie a filtrace – kompletní postup od odkrytí po první koupání.", url: "https://www.domovniguru.cz/blog/priprava-bazenu-na-leto", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-12T08:00:00Z", modifiedTime: "2026-06-12T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20p%C5%99ipravit%20zahradn%C3%AD%20baz%C3%A9n%20na%20letn%C3%AD%20sez%C3%B3nu&cat=blog", width: 1200, height: 630, alt: "Jak připravit zahradní bazén na letní sezónu" }] },
  twitter: { card: "summary_large_image", title: "Jak připravit zahradní bazén na letní sezónu", description: "Spuštění bazénu po zimě, čištění, chemie a filtrace – kompletní postup." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/priprava-bazenu-na-leto#article", "headline": "Jak připravit zahradní bazén na letní sezónu", "datePublished": "2026-06-12T08:00:00Z", "dateModified": "2026-06-12T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["příprava bazénu na léto", "spuštění bazénu po zimě", "chemie bazénové vody", "filtrace bazénu", "letní údržba bazénu"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Sezónní údržba", "item": "https://www.domovniguru.cz/blog/kategorie/sezonni-udrzba" }, { "@type": "ListItem", "position": 4, "name": "Příprava bazénu na léto", "item": "https://www.domovniguru.cz/blog/priprava-bazenu-na-leto" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Kdy je nejlepší čas spustit zahradní bazén?", "acceptedAnswer": { "@type": "Answer", "text": "Ideální je polovina až konec dubna, kdy už nehrozí silné mrazy a teplota vzduchu se pohybuje nad 10–12 °C. Pokud spustíš bazén dříve, voda se hůř ohřívá a chemie se rychleji rozpadá při kolísání teplot." } }, { "@type": "Question", "name": "Musím po zimě vypustit celý bazén?", "acceptedAnswer": { "@type": "Answer", "text": "Ne, pokud byla voda přes zimu ošetřena zimní chemií a bazén byl zakrytý. Stačí vodu vyčistit, doplnit a upravit chemii. Úplné vypuštění se doporučuje jen jednou za 3–5 let nebo při viditelném poškození fólie či výrazném znečištění." } }, { "@type": "Question", "name": "Jak dlouho trvá, než je voda v bazénu čistá a vyvážená?", "acceptedAnswer": { "@type": "Answer", "text": "Po napuštění a šokovém dávkování chlóru je voda vizuálně čistá obvykle do 2–3 dnů nepřetržité filtrace. Plně vyvážené pH a dezinfekce se ale stabilizují až za 5–7 dní, proto se s koupáním obvykle čeká alespoň 24–48 hodin po šokové dávce." } }, { "@type": "Question", "name": "Jak často musím v létě kontrolovat chemii vody?", "acceptedAnswer": { "@type": "Answer", "text": "Při běžném provozu kontroluj pH a obsah chlóru 2× týdně, v horkých dnech a po větším počtu koupajících raději obden. Po dešti nebo bouřce zkontroluj vodu vždy, déšť snižuje pH i koncentraci dezinfekce." } }, { "@type": "Question", "name": "Kolik vody bazén při sezónním provozu spotřebuje?", "acceptedAnswer": { "@type": "Answer", "text": "Kromě prvotního napuštění bazén v létě ztrácí vodu odparem a zpětným proplachem filtrace – obvykle 1–3 cm hladiny týdně. Za sezónu to může být i několik kubíků, proto se vyplatí dopředu spočítat orientační spotřebu." } }] }] };

const RELATED = [
  { title: "Příprava domu na léto – co zkontrolovat na jaře", href: "/blog/dum-priprava-na-leto", read: "6 min" },
  { title: "Jak přezimovat zahradní vodovodní přípojku", href: "/blog/prezimovat-zahradni-vodu", read: "4 min" },
  { title: "Jak navrhnout zálivku zahrady – postup", href: "/blog/zavlaha-zahrada-postup", read: "5 min" },
  { title: "Jarní zahrada – co nezapomenout udělat", href: "/blog/jarni-zahrada", read: "5 min" },
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
              <span>Příprava bazénu na léto</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">🏖️ Sezónní údržba</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak připravit zahradní bazén na letní sezónu</h1>
              <p className="article-lead">Po zimě pod krytem na tebe čeká voda, kterou bys do ní raději neskákal. Než se ale pustíš do prvního koupání, je potřeba projít pár kroků – kontrolu, čištění, napuštění, filtraci a chemii. Když to uděláš správně hned na začátku, ušetříš si starosti na celé léto.</p>
              <div className="article-meta-row"><span>Aktualizováno: 12. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#kontrola">Kontrola stavu bazénu po zimě</a></li>
                <li><a href="#cisteni">Čištění bazénu a vody před spuštěním</a></li>
                <li><a href="#napousteni">Napuštění a doplnění vody</a></li>
                <li><a href="#filtrace">Spuštění filtrace a čerpadla</a></li>
                <li><a href="#chemie">Úprava chemie vody</a></li>
                <li><a href="#provoz">Zastřešení, ohřev a letní údržba</a></li>
                <li><a href="#bezpecnost">Bezpečnostní opatření</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="kontrola">
              <h2>Kontrola stavu bazénu po zimě</h2>
              <p>Než cokoliv napustíš nebo zapneš, projdi bazén zrakem i rukou. Po zimě se totiž nejčastěji projeví škody, které vznikly už dávno – jen je teď vidíš poprvé.</p>
              <h3>Fólie a konstrukce</h3>
              <p>Zkontroluj fólii nebo skořepinu po celé ploše – stěny, dno i přechody u schodů a skimmeru. Hledej praskliny, vybledlá místa, oddělené švy nebo vyboulení. U nadzemních bazénů zkontroluj i rám a nosné prvky, jestli je nezdeformoval led nebo tlak sněhu. U zapuštěných bazénů se zaměř na obrubu a dlažbu kolem – mráz často uvolní spáry nebo posune dlaždice.</p>
              <h3>Příslušenství</h3>
              <p>Projdi i drobnosti, na které se snadno zapomíná: žebřík, skimmer, trysky, osvětlení, zazimovací zátky a hadice. Pokud jsi přes zimu používal zazimovací plováky proti tlaku ledu, vyndej je teď a ulož na suché místo. Zkontroluj také těsnost všech spojů na potrubí – po zimě se mohou objevit drobné netěsnosti, které se lépe odhalí ještě před napuštěním plné vody.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud najdeš poškození fólie, neřeš ho až za pár týdnů. Menší trhliny se dají opravit záplatou ještě před napuštěním, kdy je k poškozenému místu snadný přístup.</div>
            </section>

            <section id="cisteni">
              <h2>Čištění bazénu a vody před spuštěním</h2>
              <p>Voda, která v bazénu přečkala zimu, bývá zelená, plná listí a sedimentu. Pokud je v rozumném stavu (nezapáchá, nemá silnou vrstvu řas), nemusíš ji vždy úplně vypouštět – ale i tak ji čeká pořádný úklid.</p>
              <h3>Odkrytí a hrubý úklid</h3>
              <p>Po sejmutí zimní plachty nebo krytu nejdřív odstraň hrubé nečistoty – listí, větvičky, případně mrtvý hmyz – pomocí síťky na dlouhé tyči. Plachtu samotnou pořádně omyj a usuš, než ji uložíš, jinak na ní přes léto vznikne plíseň.</p>
              <h3>Stěny a dno</h3>
              <p>Kartáčem na bazény vyčisti stěny a dno od řas a usazenin. U skořepinových a fóliových bazénů používej kartáče s měkčími štětinami, ať fólii neporušíš. Pokud je voda hodně znečištěná a má tloušťku zeleného povlaku, je často efektivnější vodu vypustit, dno a stěny umyt vysokotlakem nebo speciálním přípravkem proti řasám a teprve potom napustit čerstvou vodu.</p>
              <h3>Vypustit, nebo nevypustit?</h3>
              <p>Úplné vypuštění celého bazénu se obecně nedoporučuje dělat každý rok – u zapuštěných bazénů hrozí při prázdné konstrukci tlak okolní zeminy na stěny a u fóliových bazénů zase vysychání a smrštění fólie. Vypouštění má smysl jednou za 3–5 let, při výrazném poškození vody nebo když chceš provést větší opravu.</p>
            </section>

            <section id="napousteni">
              <h2>Napuštění a doplnění vody</h2>
              <p>Pokud jsi vodu přes zimu nechal v bazénu, po vyčištění ji jen doplníš na provozní hladinu – obvykle do poloviny skimmeru. Pokud jsi bazén vypustil, napouštění zabere podle objemu klidně i několik dní.</p>
              <p>Než napustíš velký objem vody, je dobré si dopředu spočítat, kolik vody to bude a kolik tě to bude stát – k tomu poslouží <Link href="/kalkulacky/spotreba-vody" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačku spotřeby vody</Link>, kde zadáš rozměry bazénu a uvidíš orientační objem i náklady na vodu.</p>
              <h3>Na co dát pozor při napouštění</h3>
              <ul>
                <li><strong>Tlak hadice</strong> – napouštěj pomalu, silný proud může poškodit fólii nebo rozvířit usazeniny na dně</li>
                <li><strong>Rovnoměrné plnění</strong> – u nadzemních bazénů sleduj, aby se voda rozlévala rovnoměrně a fólie se neposunula</li>
                <li><strong>Kvalita vody</strong> – studniční voda může obsahovat železo nebo mangan, který způsobí zabarvení; pokud máš pochybnosti, necháš vodu raději rozborem ověřit</li>
              </ul>
            </section>

            <section id="filtrace">
              <h2>Spuštění filtrace a čerpadla</h2>
              <p>Filtrace je srdce bazénu – bez ní se voda i s perfektní chemií rychle zkazí. Po zimní pauze ji ale nezapínej naplno hned na první pokus, raději ji nejprve zkontroluj.</p>
              <h3>Kontrola před spuštěním</h3>
              <ul>
                <li>Zkontroluj, že jsou všechny zazimovací zátky a uzávěry odstraněné a ventily nastavené do správné polohy pro filtraci</li>
                <li>Otevři víko filtrační nádoby a zkontroluj stav filtrační náplně – písek, skleněné perle nebo kartušový vložku. Písková náplň se obvykle mění jednou za 3–5 let</li>
                <li>Promaž a zkontroluj těsnění víka čerpadla a filtru, přes zimu mohou vyschnout a propouštět vzduch</li>
              </ul>
              <h3>První spuštění</h3>
              <p>Před zapnutím čerpadla zkontroluj, že je nasávací koš čistý a čerpadlo je zalité vodou (suchý chod čerpadlo poškodí). Po zapnutí proveď zpětný proplach (backwash), pokud máš pískovou filtraci – odplaví se tím nečistoty usazené přes zimu. Poté nech filtraci běžet nepřetržitě 24–48 hodin, dokud se voda nevyčistí a nezprůzorní.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> V první sezónní fázi nech filtraci běžet déle, než je tvůj běžný letní režim. Pomůže to rychleji stabilizovat čistotu vody i chemii.</div>
            </section>

            <section id="chemie">
              <h2>Úprava chemie vody</h2>
              <p>Až je voda mechanicky čistá a filtrace běží, přichází na řadu chemie. Pořadí je důležité – nejdřív pH, pak dezinfekce.</p>
              <h3>pH jako základ</h3>
              <p>Cílová hodnota pH je 7,0–7,4. Pokud je pH mimo rozsah, chlór ani jiná dezinfekce nepracuje efektivně – buď se rychle rozpadá, nebo dráždí pokožku a oči. Změř pH testerem nebo proužky a podle výsledku přidej přípravek na zvýšení (pH plus) nebo snížení (pH minus) hodnoty. Po úpravě nech vodu cirkulovat alespoň pár hodin a změř znovu.</p>
              <h3>Chlór, nebo alternativy</h3>
              <p>Nejběžnější dezinfekce je chlór – v granulích, tabletách nebo tekutý. Alternativou jsou bezchlorové přípravky na bázi aktivního kyslíku, případně solná elektrolýza, která chlór vyrábí přímo z rozpuštěné soli. Solinka je investičně dražší, ale provoz je pak jednodušší a šetrnější k pokožce.</p>
              <h3>Šokové dávkování</h3>
              <p>Na začátku sezóny se voda obvykle „šokuje" – jednorázově se přidá výrazně vyšší dávka chlóru, než je běžná provozní hladina. Cílem je zlikvidovat veškeré řasy, bakterie a organické zbytky, které se ve vodě usadily přes zimu. Po šokové dávce nech filtraci běžet nepřetržitě a s koupáním počkej, dokud koncentrace chlóru neklesne na běžnou provozní úroveň (obvykle 24–48 hodin).</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Šokuj vodu večer nebo za zamračeného počasí – sluneční UV záření chlór rychle rozkládá a část dávky by tak přišla vniveč.</div>
            </section>

            <section id="provoz">
              <h2>Zastřešení, ohřev a letní údržba</h2>
              <h3>Zastřešení bazénu</h3>
              <p>Pokud máš bazén zastřešený, na začátku sezóny zkontroluj pojezdové dráhy, kolečka a těsnění zastřešení – přes zimu se do nich může dostat nečistota nebo led, který kolečka poškodí. Promaž pohyblivé části a vyzkoušej, že se zastřešení hladce otevírá a zavírá.</p>
              <h3>Ohřev vody</h3>
              <p>Solární kolektory, tepelné čerpadlo nebo elektrický ohřívač zkontroluj a zprovozni ještě před první vlnou veder – ohřev vody trvá dny, ne hodiny. U solárních systémů zkontroluj, že je propojení s filtrací funkční a ventily správně přepnuté na ohřevný okruh.</p>
              <h3>Pravidelná letní rutina</h3>
              <ul>
                <li>Síťkování hladiny od listí a hmyzu – ideálně každý den nebo obden</li>
                <li>Kontrola pH a chlóru – 2× týdně, po dešti nebo bouřce navíc</li>
                <li>Čištění stěn a dna kartáčem nebo bazénovým robotem – 1× týdně</li>
                <li>Zpětný proplach filtrace podle tlaku na manometru – obvykle při nárůstu o 0,2–0,3 bar nad výchozí hodnotu</li>
                <li>Doplňování vody odpařené odparem a proplachem</li>
              </ul>
            </section>

            <section id="bezpecnost">
              <h2>Bezpečnostní opatření kolem bazénu</h2>
              <p>S příchodem teplého počasí se kolem bazénu zase začne pohybovat víc lidí, často i dětí, proto stojí za to projít i bezpečnost.</p>
              <ul>
                <li><strong>Ohrazení nebo kryt</strong> – zejména u bazénů, kde se pohybují malé děti, je vhodné mít zábranu nebo bezpečnostní kryt zabraňující neúmyslnému pádu do vody</li>
                <li><strong>Protiskluzová úprava</strong> – zkontroluj schody, žebřík a obrubu, mokrý povrch je velmi klouzavý</li>
                <li><strong>Elektrická bezpečnost</strong> – čerpadla, osvětlení a další elektrická zařízení u bazénu musí být napojená přes proudový chránič a zapojení by mělo provést jen kvalifikovaný elektrikář</li>
                <li><strong>Záchranné pomůcky</strong> – plovák nebo záchranný kruh v dosahu se vyplatí mít po ruce i u malého zahradního bazénu</li>
                <li><strong>Skladování chemie</strong> – bazénovou chemii ukládej mimo dosah dětí, v originálních obalech a oddělené podle typu (chlór a kyseliny nikdy společně)</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Kdy je nejlepší čas spustit zahradní bazén?", a: "Ideální je polovina až konec dubna, kdy už nehrozí silné mrazy a teplota vzduchu se pohybuje nad 10–12 °C. Pokud spustíš bazén dříve, voda se hůř ohřívá a chemie se rychleji rozpadá při kolísání teplot." },
                  { q: "Musím po zimě vypustit celý bazén?", a: "Ne, pokud byla voda přes zimu ošetřena zimní chemií a bazén byl zakrytý. Stačí vodu vyčistit, doplnit a upravit chemii. Úplné vypuštění se doporučuje jen jednou za 3–5 let nebo při viditelném poškození fólie či výrazném znečištění." },
                  { q: "Jak dlouho trvá, než je voda v bazénu čistá a vyvážená?", a: "Po napuštění a šokovém dávkování chlóru je voda vizuálně čistá obvykle do 2–3 dnů nepřetržité filtrace. Plně vyvážené pH a dezinfekce se ale stabilizují až za 5–7 dní, proto se s koupáním obvykle čeká alespoň 24–48 hodin po šokové dávce." },
                  { q: "Jak často musím v létě kontrolovat chemii vody?", a: "Při běžném provozu kontroluj pH a obsah chlóru 2× týdně, v horkých dnech a po větším počtu koupajících raději obden. Po dešti nebo bouřce zkontroluj vodu vždy, déšť snižuje pH i koncentraci dezinfekce." },
                  { q: "Kolik vody bazén při sezónním provozu spotřebuje?", a: "Kromě prvotního napuštění bazén v létě ztrácí vodu odparem a zpětným proplachem filtrace – obvykle 1–3 cm hladiny týdně. Za sezónu to může být i několik kubíků, proto se vyplatí dopředu spočítat orientační spotřebu." },
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
                <li><a href="#kontrola">Kontrola po zimě</a></li>
                <li><a href="#cisteni">Čištění bazénu</a></li>
                <li><a href="#napousteni">Napuštění vody</a></li>
                <li><a href="#filtrace">Filtrace a čerpadlo</a></li>
                <li><a href="#chemie">Chemie vody</a></li>
                <li><a href="#provoz">Zastřešení a ohřev</a></li>
                <li><a href="#bezpecnost">Bezpečnost</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/sezonni-udrzba" className="sidebar-cat-link">🏖️ Sezónní údržba<span>20 článků →</span></Link>
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
