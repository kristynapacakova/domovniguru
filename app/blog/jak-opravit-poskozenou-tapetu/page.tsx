import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak opravit poškozenou tapetu",
  description: "Odlepené okraje, díry, bubliny i skvrny na tapetě – postup oprav krok za krokem a kdy už je lepší tapetu vyměnit celou.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-opravit-poskozenou-tapetu" },
  openGraph: {
    title: "Jak opravit poškozenou tapetu",
    description: "Odlepené okraje, díry, bubliny i skvrny na tapetě – postup oprav krok za krokem a kdy už je lepší tapetu vyměnit celou.",
    url: "https://www.domovniguru.cz/blog/jak-opravit-poskozenou-tapetu",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "article",
    publishedTime: "2026-06-25T08:00:00Z",
    modifiedTime: "2026-06-25T08:00:00Z",
    authors: ["DomovniGuru"],
    images: [{ url: "/api/og?title=Jak%20opravit%20po%C5%A1kozenou%20tapetu&cat=blog", width: 1200, height: 630, alt: "Jak opravit poškozenou tapetu" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jak opravit poškozenou tapetu",
    description: "Odlepené okraje, díry, bubliny i skvrny na tapetě – postup oprav krok za krokem.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.domovniguru.cz/blog/jak-opravit-poskozenou-tapetu#article",
      "headline": "Jak opravit poškozenou tapetu",
      "description": "Odlepené okraje, díry, bubliny i skvrny na tapetě – postup oprav krok za krokem a kdy už je lepší tapetu vyměnit celou.",
      "datePublished": "2026-06-25T08:00:00Z",
      "dateModified": "2026-06-25T08:00:00Z",
      "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.domovniguru.cz/blog/jak-opravit-poskozenou-tapetu" },
      "inLanguage": "cs",
      "keywords": ["jak opravit tapetu", "odlepená tapeta", "bublina na tapetě", "díra v tapetě", "oprava tapety"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.domovniguru.cz/blog/jak-opravit-poskozenou-tapetu#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" },
        { "@type": "ListItem", "position": 3, "name": "Malování & barvy", "item": "https://www.domovniguru.cz/blog/kategorie/malovani" },
        { "@type": "ListItem", "position": 4, "name": "Jak opravit poškozenou tapetu", "item": "https://www.domovniguru.cz/blog/jak-opravit-poskozenou-tapetu" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.domovniguru.cz/blog/jak-opravit-poskozenou-tapetu#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Čím nalepit odlepený okraj tapety?", "acceptedAnswer": { "@type": "Answer", "text": "Použij běžné tapetové lepidlo, které naneseš tenkým štětcem na vnitřní stranu odlepeného okraje nebo přímo na zeď pod ním. Okraj pak přitiskni válečkem na švy a přebytečné lepidlo setři vlhkou houbičkou." } },
        { "@type": "Question", "name": "Jak opravit bublinu na tapetě?", "acceptedAnswer": { "@type": "Answer", "text": "Do bubliny vpravíš injekční stříkačkou malé množství tapetového lepidla, jemně bublinu prstem nebo válečkem přitiskneš ke zdi od okrajů ke středu a přebytečné lepidlo setřeš. Pokud je bublina velká, je lepší ji nejdřív lehce nařízat žiletkou ve směru vzoru." } },
        { "@type": "Question", "name": "Jak udělat neviditelnou záplatu na díru v tapetě?", "acceptedAnswer": { "@type": "Answer", "text": "Ze zbytku stejné tapety vyřízni kousek o trochu větší než díra, přilož ho na poškozené místo tak, aby přesně seděl vzor, a propíchni oba kusy najednou žiletkou podél nepravidelné linie. Vyjmi poškozený kousek, vlep záplatu a švy zatři tapetovým lepidlem." } },
        { "@type": "Question", "name": "Jak odstranit skvrnu z tapety bez výměny celé plochy?", "acceptedAnswer": { "@type": "Answer", "text": "U omyvatelných vinylových tapet zkus jemně otřít skvrnu vlhkou houbičkou s trochou saponátu. U papírových nebo textilních tapet je čištění riskantní – skvrny od vody, plísně nebo mastnoty se často musí řešit záplatou." } },
        { "@type": "Question", "name": "Kdy se už oprava tapety nevyplatí a je lepší ji vyměnit?", "acceptedAnswer": { "@type": "Answer", "text": "Pokud je poškození rozsáhlé, na více místech najednou, nebo se objevuje plíseň pod tapetou kvůli vlhkosti ve zdi, oprava jen maskuje problém. V takovém případě je lepší tapetu strhnout, vyřešit příčinu (vlhkost) a vylepit novou." } },
        { "@type": "Question", "name": "Jak předejít odlepování tapety v budoucnu?", "acceptedAnswer": { "@type": "Answer", "text": "Udržuj v místnosti stabilní vlhkost a teplotu, nevětrej naráz studeným vzduchem na vyhřátou zeď a při lepení nové tapety vždy zeď dobře penetruj a nešetři lepidlem na okrajích a švech." } },
      ],
    },
  ],
};

const RELATED = [
  { title: "Jak nalepit tapetu – kompletní návod krok za krokem", href: "/blog/jak-nalepit-tapetu", read: "6 min" },
  { title: "Jak odstranit skvrny a otisky ze zdi bez přemalování celé stěny", href: "/blog/odstranit-skvrny-ze-zdi", read: "5 min" },
  { title: "Jak opravit škrábance a díry ve zdi před malováním 2026", href: "/blog/opravit-skrabance-diry-ve-zdi", read: "5 min" },
  { title: "Malířská páska – jak ji správně použít, aby nepropustila barvu", href: "/blog/malirska-paska-jak-spravne-pouzivat", read: "5 min" },
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
              <span>Jak opravit poškozenou tapetu</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování & barvy</Link>
                <span className="article-read-time">⏱ 4 min čtení</span>
              </div>
              <h1 className="article-h1">Jak opravit poškozenou tapetu</h1>
              <p className="article-lead">Odlepený okraj, bublina po nepovedeném lepení nebo díra od rohu skříně – poškozená tapeta ještě nemusí znamenat strhávání celé stěny. Většinu drobných škod jde opravit za pár desítek korun a s troškou trpělivosti tak, že je výsledek téměř nepoznat.</p>
              <div className="article-meta-row"><span>Aktualizováno: 25. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#typy-poskozeni">Typy poškození tapety</a></li>
                <li><a href="#odlepene-okraje">Lepení odlepených okrajů a švů</a></li>
                <li><a href="#bubliny">Vyhlazení bublin</a></li>
                <li><a href="#diry">Záplatování děr a trhlin</a></li>
                <li><a href="#skvrny">Skvrny na tapetě</a></li>
                <li><a href="#kdy-vymenit">Kdy je lepší tapetu vyměnit celou</a></li>
                <li><a href="#prevence">Prevence do budoucna</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="typy-poskozeni">
              <h2>Typy poškození tapety</h2>
              <p>Než se pustíš do opravy, je dobré přesně určit, o jaký typ poškození jde – každý se řeší trochu jinak:</p>
              <ul>
                <li><strong>Odlepené okraje a švy</strong> – nejčastější problém, zpravidla způsobený nedostatkem lepidla při lepení nebo vlhkostí</li>
                <li><strong>Bubliny</strong> – vzduchové kapsy pod tapetou, často vznikají při lepení nebo po teplotních výkyvech</li>
                <li><strong>Díry a trhliny</strong> – mechanické poškození od nárazu, rohu nábytku, drápků zvířete</li>
                <li><strong>Skvrny</strong> – od vody, mastnoty, plísně nebo otisků rukou</li>
                <li><strong>Vyblednutí nebo ztráta barvy</strong> – dlouhodobé působení slunečního světla, na rozdíl od ostatních typů se neopravuje záplatou</li>
              </ul>
              <p>Pro úspěšnou opravu je vždy potřeba mít k dispozici kousek originální tapety – ideálně zbytek role po vylepení místnosti. Pokud zbytek nemáš, zkus odříznout kousek z nenápadného místa, třeba za skříní nebo nad dveřmi.</p>
            </section>

            <section id="odlepene-okraje">
              <h2>Lepení odlepených okrajů a švů</h2>
              <p>Odlepené okraje jsou nejjednodušší typ poškození na opravu a často je zvládneš během pár minut.</p>
              <h3>Postup</h3>
              <ul>
                <li>Jemně nadzdvihni odlepenou část tapety, abys měl přístup k zadní straně i ke zdi pod ní</li>
                <li>Tenkým štětcem nebo malým válečkem nanes tapetové lepidlo na vnitřní stranu tapety i na zeď</li>
                <li>Tapetu přitiskni zpět, postupuj od jednoho konce k druhému, aby se nevytvořily nové bubliny</li>
                <li>Přebytečné lepidlo, které vyteče na povrch, hned setři čistou vlhkou houbičkou</li>
                <li>Šev přejeď válečkem na švy nebo hřbetem ruky, aby přilnul rovnoměrně po celé délce</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud se odlepuje delší úsek u stropu nebo podlahy, lepidlo nanášej v malých úsecích po 20–30 cm a hned přitiskni – na velkou plochu lepidlo začne zasychat ještě před přitlačením tapety.</div>
            </section>

            <section id="bubliny">
              <h2>Vyhlazení bublin</h2>
              <p>Malé bubliny vznikají často už při samotném lepení tapety, větší se objeví později vlivem vlhkosti nebo teplotních změn ve zdi.</p>
              <h3>Malé bubliny – injekční stříkačka</h3>
              <p>Na menší bubliny je nejlepší metoda s injekční stříkačkou bez jehly (sežeň v lékárně nebo hobby marketu):</p>
              <ul>
                <li>Stříkačkou nasaj malé množství tapetového lepidla (případně zředěného vodou na tenčí konzistenci)</li>
                <li>Lehce propíchni bublinu na nenápadném místě, ideálně v souběhu s linií vzoru</li>
                <li>Vstříkni malé množství lepidla pod tapetu</li>
                <li>Prsty nebo válečkem na švy bublinu vyhlaď od okrajů směrem ke středu (k otvoru)</li>
                <li>Přebytečné lepidlo setři vlhkou houbičkou</li>
              </ul>
              <h3>Velké bubliny – nařízání</h3>
              <p>Pokud je bublina větší než pár centimetrů, čistě po obvodu by se nevyhladila. V takovém případě bublinu opatrně nařízni žiletkou křížem nebo ve směru vzoru, lepidlo vpravte pod oba okraje řezu a přitiskni je k sobě. Po zaschnutí by měl být řez téměř neviditelný, zvlášť pokud sleduje linii vzoru tapety.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Před nařezáváním zkus bublinu nejprve mírně prohřát fénem na nízký výkon – u některých tapet to pomůže lepidlu pod ní znovu zaktivovat a bublina zmizí bez nutnosti řezu.</div>
            </section>

            <section id="diry">
              <h2>Záplatování děr a trhlin</h2>
              <p>Díra po rohu skříně, kliky nebo drápcích domácího mazlíčka se dá opravit neviditelnou záplatou z odpovídajícího kousku stejné tapety.</p>
              <h3>Postup krok za krokem</h3>
              <ul>
                <li>Ze zbytku tapety vystřihni kus o několik centimetrů větší než poškozené místo na všech stranách</li>
                <li>Přilož záplatu na poškozenou plochu tak, aby vzor přesně navazoval na okolí</li>
                <li>Žiletkou nebo ostrým nožíkem propíchni oba kusy tapety najednou – záplatu i poškozenou vrstvu pod ní – v nepravidelné, "roztrhané" linii (ne v rovné čáře, ta by byla na zdi vidět)</li>
                <li>Vyjmi poškozený kousek tapety i okolního lepidla</li>
                <li>Naneseš lepidlo na zeď a na zadní stranu záplaty, vlož ji do otvoru a přitiskni</li>
                <li>Švy zatři lepidlem a setři přebytky vlhkou houbičkou</li>
              </ul>
              <p>Klíčem k neviditelné záplatě je přesné sesazení vzoru a řez v nepravidelném, nikoliv rovném tvaru – oko si rovnou linii všimne mnohem snadněji než nerovný okraj.</p>
              <h3>Trhliny bez chybějícího materiálu</h3>
              <p>Pokud je tapeta jen natrhnutá, ale žádný kus nechybí, postupuj podobně jako u odlepených okrajů – natrhnuté okraje lehce zalep tapetovým lepidlem a přitiskni k sobě, aby na sebe přesně navazovaly.</p>
            </section>

            <section id="skvrny">
              <h2>Skvrny na tapetě</h2>
              <p>Řešení skvrny závisí na typu tapety:</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ tapety</th><th>Možnost čištění</th><th>Doporučení</th></tr></thead>
                  <tbody>
                    <tr><td>Omyvatelná vinylová</td><td>✅ Ano, opatrně</td><td>Vlhká houbička s mírným saponátem, vždy zkus nejdřív nenápadné místo</td></tr>
                    <tr><td>Papírová</td><td>❌ Riskantní</td><td>Voda papír naruší a skvrna se může rozšířit – lepší je záplata</td></tr>
                    <tr><td>Textilní / vliesová s textilním povrchem</td><td>❌ Nedoporučuje se</td><td>Skvrny od vody nebo mastnoty zůstávají trvalé, řeš záplatou</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Skvrny od plísně signalizují problém s vlhkostí ve zdi, který je potřeba vyřešit dřív, než cokoliv opravuješ – jinak se plíseň objeví znovu i pod novou záplatou. Pokud řešíš zašlou nebo zašpiněnou stěnu bez tapety, podívej se na náš návod, jak <Link href="/blog/odstranit-skvrny-ze-zdi" style={{ color: "#2a6496", textDecoration: "underline" }}>odstranit skvrny ze zdi</Link>.</p>
            </section>

            <section id="kdy-vymenit">
              <h2>Kdy je lepší tapetu vyměnit celou</h2>
              <p>Drobné opravy mají smysl tam, kde je poškození ojedinělé a omezené na malou plochu. Celková výměna je lepší volba, pokud:</p>
              <ul>
                <li>Je poškození rozsáhlé nebo se opakuje na více místech po celé stěně</li>
                <li>Pod tapetou je plíseň způsobená dlouhodobou vlhkostí ve zdi</li>
                <li>Tapeta je celkově vyblednutá nebo zažloutlá a záplata by barevně nesedla</li>
                <li>Nemáš k dispozici žádný zbytek originální tapety pro záplatu a vzor se už neprodává</li>
                <li>Tapeta je stará desítky let a celkově ztrácí přilnavost ke zdi na více místech najednou</li>
              </ul>
              <p>Pokud se rozhodneš pro výměnu, projdi si náš podrobný návod, jak <Link href="/blog/jak-nalepit-tapetu" style={{ color: "#2a6496", textDecoration: "underline" }}>nalepit tapetu</Link> krok za krokem, včetně přípravy podkladu penetrací.</p>
            </section>

            <section id="prevence">
              <h2>Prevence do budoucna</h2>
              <ul>
                <li><strong>Stabilní vlhkost a teplota v místnosti</strong> – velké výkyvy způsobují odlepování a bubliny</li>
                <li><strong>Postupné větrání</strong> – nevětrej naráz studeným vzduchem na vyhřátou zeď s tapetou, raději krátce a častěji</li>
                <li><strong>Kvalitní lepidlo a dostatek lepidla na okrajích</strong> – při lepení nové tapety nešetři lepidlem právě u švů a u rohů, kde dochází k odlepování nejčastěji</li>
                <li><strong>Penetrace zdi před lepením</strong> – sjednotí savost podkladu a zlepší přilnavost na celé ploše</li>
                <li><strong>Ochrana rohů nábytkem</strong> – nábytkové rohové lišty nebo opatrnější přesouvání nábytku omezí mechanické poškození</li>
                <li><strong>Schovej si zbytek role</strong> – i malý kousek tapety navíc se může v budoucnu hodit přesně na záplatu</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Po vylepení nové tapety si poznač výrobce, vzor a kód role na zadní stranu vypínače nebo do telefonu – při budoucí opravě se ti bude hodit přesně dohledat stejnou tapetu.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Čím nalepit odlepený okraj tapety?", a: "Použij běžné tapetové lepidlo, které naneseš tenkým štětcem na vnitřní stranu odlepeného okraje nebo přímo na zeď pod ním. Okraj pak přitiskni válečkem na švy a přebytečné lepidlo setři vlhkou houbičkou." },
                  { q: "Jak opravit bublinu na tapetě?", a: "Do bubliny vpravíš injekční stříkačkou malé množství tapetového lepidla, jemně bublinu prstem nebo válečkem přitiskneš ke zdi od okrajů ke středu a přebytečné lepidlo setřeš. Pokud je bublina velká, je lepší ji nejdřív lehce nařízat žiletkou ve směru vzoru." },
                  { q: "Jak udělat neviditelnou záplatu na díru v tapetě?", a: "Ze zbytku stejné tapety vyřízni kousek o trochu větší než díra, přilož ho na poškozené místo tak, aby přesně seděl vzor, a propíchni oba kusy najednou žiletkou podél nepravidelné linie. Vyjmi poškozený kousek, vlep záplatu a švy zatři tapetovým lepidlem." },
                  { q: "Jak odstranit skvrnu z tapety bez výměny celé plochy?", a: "U omyvatelných vinylových tapet zkus jemně otřít skvrnu vlhkou houbičkou s trochou saponátu. U papírových nebo textilních tapet je čištění riskantní – skvrny od vody, plísně nebo mastnoty se často musí řešit záplatou." },
                  { q: "Kdy se už oprava tapety nevyplatí a je lepší ji vyměnit?", a: "Pokud je poškození rozsáhlé, na více místech najednou, nebo se objevuje plíseň pod tapetou kvůli vlhkosti ve zdi, oprava jen maskuje problém. V takovém případě je lepší tapetu strhnout, vyřešit příčinu (vlhkost) a vylepit novou." },
                  { q: "Jak předejít odlepování tapety v budoucnu?", a: "Udržuj v místnosti stabilní vlhkost a teplotu, nevětrej naráz studeným vzduchem na vyhřátou zeď a při lepení nové tapety vždy zeď dobře penetruj a nešetři lepidlem na okrajích a švech." },
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
                <li><a href="#typy-poskozeni">Typy poškození</a></li>
                <li><a href="#odlepene-okraje">Odlepené okraje</a></li>
                <li><a href="#bubliny">Bubliny</a></li>
                <li><a href="#diry">Díry a trhliny</a></li>
                <li><a href="#skvrny">Skvrny</a></li>
                <li><a href="#kdy-vymenit">Kdy vyměnit celou</a></li>
                <li><a href="#prevence">Prevence</a></li>
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
