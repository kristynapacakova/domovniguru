import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak sušit prádlo v bytě v zimě bez plísně",
  description: "Větrání, odvlhčování a správné rozmístění prádla, aby sušení v zimě nezpůsobilo plíseň a vlhkost v bytě.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/suseni-pradla-v-byte-bez-plisne" },
  openGraph: { title: "Jak sušit prádlo v bytě v zimě bez plísně", description: "Větrání, odvlhčování a správné rozmístění prádla, aby sušení v zimě nezpůsobilo plíseň a vlhkost v bytě.", url: "https://www.domovniguru.cz/blog/suseni-pradla-v-byte-bez-plisne", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-24T08:00:00Z", modifiedTime: "2026-06-24T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20su%C5%A1it%20pr%C3%A1dlo%20v%20byt%C4%9B%20v%20zim%C4%9B%20bez%20pl%C3%ADsn%C4%9B&cat=blog", width: 1200, height: 630, alt: "Jak sušit prádlo v bytě v zimě bez plísně" }] },
  twitter: { card: "summary_large_image", title: "Jak sušit prádlo v bytě v zimě bez plísně", description: "Větrání, odvlhčování a správné rozmístění prádla, aby sušení v zimě nezpůsobilo plíseň a vlhkost v bytě." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/suseni-pradla-v-byte-bez-plisne#article", "headline": "Jak sušit prádlo v bytě v zimě bez plísně", "datePublished": "2026-06-24T08:00:00Z", "dateModified": "2026-06-24T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["sušení prádla v zimě", "plíseň v bytě", "sušák na prádlo", "odvlhčovač vzduchu", "větrání při sušení prádla", "vlhkost v bytě v zimě"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Sezónní údržba", "item": "https://www.domovniguru.cz/blog/kategorie/sezonni-udrzba" }, { "@type": "ListItem", "position": 4, "name": "Sušení prádla v bytě bez plísně", "item": "https://www.domovniguru.cz/blog/suseni-pradla-v-byte-bez-plisne" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Proč je sušení prádla v bytě v zimě rizikové?", "acceptedAnswer": { "@type": "Answer", "text": "Mokré prádlo uvolňuje do vzduchu velké množství vodní páry (i několik litrů na jedno praní). V zimě se okna a stěny méně větrají a jsou chladnější, takže vlhkost na nich snadno kondenzuje a vytváří ideální podmínky pro růst plísně." } }, { "@type": "Question", "name": "Kam je nejlepší umístit sušák na prádlo v bytě?", "acceptedAnswer": { "@type": "Answer", "text": "Ideální je dobře větraná místnost s možností proudění vzduchu, například koupelna s funkčním odsáváním nebo prostor blízko okna. Vyhni se sušení v ložnici a v malých uzavřených prostorech bez větrání, kde se vlhkost nemá kam ztratit." } }, { "@type": "Question", "name": "Jak často mám větrat, když v bytě suším prádlo?", "acceptedAnswer": { "@type": "Answer", "text": "Při sušení prádla se vyplatí větrat intenzivněji než obvykle – krátké, ale důkladné vyvětrání (5–10 minut, dokořán) alespoň 2–3× denně v místnosti se sušákem pomáhá odvádět vlhký vzduch ven dřív, než zkondenzuje na stěnách." } }, { "@type": "Question", "name": "Pomáhá odvlhčovač vzduchu při sušení prádla v bytě?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, odvlhčovač umístěný v blízkosti sušáku výrazně zkrátí dobu sušení a zároveň udrží vlhkost vzduchu v bezpečném rozmezí, takže omezuje riziko kondenzace na oknech a stěnách. Je to dobrá alternativa, pokud nemůžeš dostatečně větrat." } }, { "@type": "Question", "name": "Jaká vlhkost vzduchu v bytě je bezpečná v zimě?", "acceptedAnswer": { "@type": "Answer", "text": "V zimě je vhodné udržovat relativní vlhkost vzduchu v rozmezí 40–55 %. Nad 60 % výrazně roste riziko kondenzace na chladných místech (okna, rohy, nadpraží) a následného růstu plísně." } }] }] };

const RELATED = [
  { title: "Jak se zbavit vlhkosti v bytě – příčiny, měření a řešení", href: "/blog/zbavit-se-vlhkosti-v-byte", read: "7 min" },
  { title: "Jak správně větrat byt – bez plísně a bez tepelných ztrát", href: "/blog/spravne-vetrat-byt", read: "6 min" },
  { title: "Jak pečovat o sušičku prádla, aby fungovala efektivně", href: "/blog/jak-pecovat-o-susicku-pradla", read: "5 min" },
  { title: "Jak udržovat rekuperaci a ventilaci, aby fungovala efektivně", href: "/blog/udrzba-rekuperace-a-ventilace", read: "6 min" },
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
              <span>Sušení prádla v bytě bez plísně</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">❄️ Sezónní údržba</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak sušit prádlo v bytě v zimě bez plísně</h1>
              <p className="article-lead">V zimě, kdy je sušení na balkoně nebo na zahradě nepraktické, končí mokré prádlo nejčastěji na sušáku přímo v bytě. Jedno praní ale do vzduchu uvolní i několik litrů vody, a pokud byt nemá dostatečné větrání, výsledkem bývá zamžená okna a po čase plíseň v rozích a u oken. Tady je přehled, jak prádlo v zimě sušit bezpečně.</p>
              <div className="article-meta-row"><span>Aktualizováno: 24. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#riziko">Proč je sušení prádla v zimě rizikové</a></li>
                <li><a href="#umisteni">Správné umístění sušáku</a></li>
                <li><a href="#vetrani">Krátké intenzivní větrání během sušení</a></li>
                <li><a href="#odvlhcovac">Použití odvlhčovače vzduchu</a></li>
                <li><a href="#ventilator">Odsávací ventilátor v koupelně</a></li>
                <li><a href="#vlhkost">Ideální vlhkost vzduchu v bytě</a></li>
                <li><a href="#plisen">Rané příznaky plísně a řešení</a></li>
                <li><a href="#alternativa">Alternativa – sušička prádla</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="riziko">
              <h2>Proč je sušení prádla v zimě rizikové</h2>
              <p>Jedna náplň pračky obsahuje po vymačkání i několik litrů vody, kterou prádlo postupně uvolňuje do vzduchu místnosti během sušení. V létě tato vlhkost snadno odejde otevřeným oknem, v zimě je ale větrání kratší a méně intenzivní a vzduch navíc bývá chladnější u oken a vnějších stěn.</p>
              <p>Výsledkem je, že se vodní pára v chladných místech kondenzuje na sklech, rámech oken a v rozích stěn. Pokud kondenzace přetrvává opakovaně, vytváří se ideální prostředí pro růst plísně, zejména v místech s horší cirkulací vzduchu (rohy za skříněmi, nadpraží, koutky u oken).</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud po sušení ráno najdeš zamžená okna nebo kapky vody na rámech, je to první signál, že vlhkost z prádla zůstává v bytě déle, než by měla – je čas upravit větrání nebo přidat odvlhčovač.</div>
            </section>

            <section id="umisteni">
              <h2>Správné umístění sušáku na prádlo</h2>
              <p>Místo, kde prádlo sušíš, výrazně ovlivňuje, jak rychle vlhkost z bytu zase zmizí.</p>
              <ul>
                <li><strong>Dobře větraná místnost</strong> – ideálně koupelna s funkčním odsáváním nebo místnost blízko okna, kterou lze často a snadno větrat</li>
                <li><strong>Proudění vzduchu kolem sušáku</strong> – sušák nestavěj přímo ke zdi nebo do rohu, prádlo potřebuje vzduch z více stran, aby vlhkost neproudila jen k jedné chladné ploše</li>
                <li><strong>Vyhni se ložnici</strong> – spaní v místnosti s vysokou vlhkostí zvyšuje riziko kondenzace na okně i zhoršuje kvalitu spánku</li>
                <li><strong>Rozestup mezi kusy prádla</strong> – prádlo nerozvěšuj na sebe, mezery zrychlí odpar a zkrátí celkovou dobu, kdy je vlhkost ve vzduchu</li>
                <li><strong>Vzdálenost od radiátoru</strong> – blízko topení prádlo usychá rychleji, ale uvolněná vlhkost se hromadí v menším objemu vzduchu, takže i tady je nutné větrat víc</li>
              </ul>
            </section>

            <section id="vetrani">
              <h2>Pravidelné krátké intenzivní větrání během sušení</h2>
              <p>Větrání je nejdůležitější a nejlevnější nástroj, jak vlhkost z prádla rychle odvést pryč. Klíčem je krátké, ale intenzivní větrání, ne dlouze pootevřené okno.</p>
              <ul>
                <li><strong>Dokořán na 5–10 minut</strong> – vyžene vlhký vzduch rychle a místnost se mezitím nestihne výrazně vychladit</li>
                <li><strong>Frekvence</strong> – při sušení prádla v místnosti větrej alespoň 2–3× denně, ideálně i víc, pokud je prádla na sušáku hodně</li>
                <li><strong>Křížové větrání</strong> – pokud máš možnost větrat oknem na obou stranách bytu najednou, vzduch se vymění rychleji a efektivněji</li>
                <li><strong>Mikroventilace u plastových oken</strong> nestačí na odvod velkého množství vlhkosti, pouze zpomaluje její hromadění – pro sušení prádla je potřeba plné otevření</li>
              </ul>
              <p>Více obecných zásad najdeš v článku, jak <Link href="/blog/spravne-vetrat-byt" style={{ color: "#2a6496", textDecoration: "underline" }}>správně větrat byt</Link> v každém ročním období.</p>
            </section>

            <section id="odvlhcovac">
              <h2>Použití odvlhčovače vzduchu</h2>
              <p>Pokud nemůžeš větrat tak často, jak by bylo potřeba (např. byt v hlučné nebo prašné lokalitě, alergie, malé děti), odvlhčovač vzduchu umístěný v blízkosti sušáku odvede vlhkost přímo do nádržky, aniž bys musel/a otevírat okna.</p>
              <ul>
                <li><strong>Kompresorový odvlhčovač</strong> – výkonnější a efektivnější ve studenějších místnostech, hlučnější</li>
                <li><strong>Peltierový (termoelektrický) odvlhčovač</strong> – tišší, ale méně výkonný, vhodný do menších prostor</li>
                <li><strong>Umístění</strong> – co nejblíže sušáku s prádlem, aby zachytával vlhkost přímo u zdroje</li>
                <li><strong>Vedlejší efekt</strong> – odvlhčovač zkracuje i samotnou dobu sušení prádla, protože vzduch kolem prádla má nižší vlhkost a odpar probíhá rychleji</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Voda z odvlhčovače se dá znovu využít například do žehličky nebo na zalévání rostlin (pokud neobsahuje chemické přípravky z předchozího provozu).</div>
            </section>

            <section id="ventilator">
              <h2>Odsávací ventilátor v koupelně nebo prádelně</h2>
              <p>Pokud prádlo sušíš v koupelně, funkční odsávací ventilátor je obvykle nejefektivnější způsob, jak vlhkost rychle dostat z bytu pryč, zvlášť pokud koupelna nemá okno.</p>
              <ul>
                <li><strong>Spuštění během sušení</strong> – nech ventilátor běžet, dokud prádlo výrazně neoschne, ne jen pár minut po vstupu do koupelny</li>
                <li><strong>Kontrola průchodnosti</strong> – zkontroluj, jestli mřížka odsávání není zanesená prachem, výrazně to snižuje výkon</li>
                <li><strong>Ventilátor s hygrostatem</strong> – modernější modely se spustí automaticky při zvýšené vlhkosti a vypnou se, jakmile vlhkost klesne</li>
              </ul>
            </section>

            <section id="vlhkost">
              <h2>Ideální vlhkost vzduchu v bytě</h2>
              <p>Optimální relativní vlhkost vzduchu v zimě je <strong>40–55 %</strong>. Pod touto hranicí je vzduch příliš suchý, což škodí dýchacím cestám a dřevěným prvkům v bytě, nad touto hranicí rychle roste riziko kondenzace a plísně, zejména na chladnějších místech jako okenní rámy nebo rohy obvodových zdí.</p>
              <p>Levný digitální vlhkoměr (hygrometr) ti rychle ukáže, jak moc sušení prádla v bytě vlhkost zvyšuje a jak rychle se vrací do normálu po vyvětrání. Podrobnější přehled příčin a řešení vlhkosti v bytě najdeš v článku, jak <Link href="/blog/zbavit-se-vlhkosti-v-byte" style={{ color: "#2a6496", textDecoration: "underline" }}>se zbavit vlhkosti v bytě</Link>.</p>
            </section>

            <section id="plisen">
              <h2>Rané příznaky plísně a jak je řešit</h2>
              <ul>
                <li><strong>Zamžená okna ráno</strong> – první a nejčastější signál nadměrné vlhkosti, řeš intenzivnějším větráním nebo odvlhčovačem</li>
                <li><strong>Vlhký nebo plesnivý zápach</strong> – často se objeví dřív, než je plíseň vidět, zejména ve skříních nebo za nábytkem u vnějších zdí</li>
                <li><strong>Drobné černé nebo zelenavé skvrny</strong> – typicky v rozích, na nadpraží oken nebo za těžkým nábytkem postaveným blízko zdi</li>
                <li><strong>Okamžité řešení</strong> – postižené místo otři roztokem s octem nebo speciálním přípravkem proti plísni, zdroj vlhkosti (např. sušení prádla bez větrání) ale musí zmizet, jinak se plíseň vrátí</li>
                <li><strong>Rozsáhlejší napadení</strong> – pokud se plíseň objevuje opakovaně na velké ploše, je vhodné přizvat odborníka a prověřit i stavební příčiny (tepelné mosty, špatná izolace)</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Posunutí nábytku alespoň 5–10 cm od vnější zdi umožní vzduchu proudit i za ním a výrazně snižuje riziko plísně v těchto skrytých místech.</div>
            </section>

            <section id="alternativa">
              <h2>Alternativa pro malé byty – sušička prádla</h2>
              <p>Pokud byt nemá dostatek prostoru na sušák ani možnost intenzivního větrání, sušička prádla problém vlhkosti z velké části řeší – vlhkost se zachytává přímo ve spotřebiči (kondenzační typ) nebo se odvádí hadicí ven (odvětrávací typ), takže se do vzduchu v bytě dostane jen zlomek toho, co při sušení na sušáku.</p>
              <p>Sušička má vyšší spotřebu energie, ale v malých nebo špatně větratelných bytech může být v zimě jednoznačně lepší volbou než riziko opakované plísně. Jak o sušičku správně pečovat, aby fungovala efektivně a dlouho, najdeš v článku o <Link href="/blog/jak-pecovat-o-susicku-pradla" style={{ color: "#2a6496", textDecoration: "underline" }}>péči o sušičku prádla</Link>.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Proč je sušení prádla v bytě v zimě rizikové?", a: "Mokré prádlo uvolňuje do vzduchu velké množství vodní páry (i několik litrů na jedno praní). V zimě se okna a stěny méně větrají a jsou chladnější, takže vlhkost na nich snadno kondenzuje a vytváří ideální podmínky pro růst plísně." },
                  { q: "Kam je nejlepší umístit sušák na prádlo v bytě?", a: "Ideální je dobře větraná místnost s možností proudění vzduchu, například koupelna s funkčním odsáváním nebo prostor blízko okna. Vyhni se sušení v ložnici a v malých uzavřených prostorech bez větrání, kde se vlhkost nemá kam ztratit." },
                  { q: "Jak často mám větrat, když v bytě suším prádlo?", a: "Při sušení prádla se vyplatí větrat intenzivněji než obvykle – krátké, ale důkladné vyvětrání (5–10 minut, dokořán) alespoň 2–3× denně v místnosti se sušákem pomáhá odvádět vlhký vzduch ven dřív, než zkondenzuje na stěnách." },
                  { q: "Pomáhá odvlhčovač vzduchu při sušení prádla v bytě?", a: "Ano, odvlhčovač umístěný v blízkosti sušáku výrazně zkrátí dobu sušení a zároveň udrží vlhkost vzduchu v bezpečném rozmezí, takže omezuje riziko kondenzace na oknech a stěnách. Je to dobrá alternativa, pokud nemůžeš dostatečně větrat." },
                  { q: "Jaká vlhkost vzduchu v bytě je bezpečná v zimě?", a: "V zimě je vhodné udržovat relativní vlhkost vzduchu v rozmezí 40–55 %. Nad 60 % výrazně roste riziko kondenzace na chladných místech (okna, rohy, nadpraží) a následného růstu plísně." },
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
                <li><a href="#riziko">Proč je sušení rizikové</a></li>
                <li><a href="#umisteni">Umístění sušáku</a></li>
                <li><a href="#vetrani">Intenzivní větrání</a></li>
                <li><a href="#odvlhcovac">Odvlhčovač vzduchu</a></li>
                <li><a href="#ventilator">Odsávací ventilátor</a></li>
                <li><a href="#vlhkost">Ideální vlhkost</a></li>
                <li><a href="#plisen">Příznaky plísně</a></li>
                <li><a href="#alternativa">Alternativa – sušička</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/sezonni-udrzba" className="sidebar-cat-link">❄️ Sezónní údržba<span>24 článků →</span></Link>
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
