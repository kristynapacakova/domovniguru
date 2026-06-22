import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Markýzy, rolety a žaluzie – jak vybrat stínění oken na léto",
  description: "Srovnání venkovních a vnitřních stínicích technik – markýzy, venkovní žaluzie, rolety a fólie – jak vybrat podle orientace oken.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/letni-stinici-technika-oken" },
  openGraph: { title: "Markýzy, rolety a žaluzie – jak vybrat stínění oken na léto", description: "Srovnání venkovních a vnitřních stínicích technik – markýzy, venkovní žaluzie, rolety a fólie – jak vybrat podle orientace oken.", url: "https://www.domovniguru.cz/blog/letni-stinici-technika-oken", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-15T08:00:00Z", modifiedTime: "2026-06-15T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Mark%C3%BDzy%2C%20rolety%20a%20%C5%BEaluzie%20%E2%80%93%20jak%20vybrat%20st%C3%ADn%C4%9Bn%C3%AD%20oken%20na%20l%C3%A9to&cat=blog", width: 1200, height: 630, alt: "Markýzy, rolety a žaluzie – jak vybrat stínění oken na léto" }] },
  twitter: { card: "summary_large_image", title: "Markýzy, rolety a žaluzie – jak vybrat stínění oken na léto", description: "Srovnání venkovních a vnitřních stínicích technik – markýzy, venkovní žaluzie, rolety a fólie – jak vybrat podle orientace oken." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/letni-stinici-technika-oken#article", "headline": "Markýzy, rolety a žaluzie – jak vybrat stínění oken na léto", "datePublished": "2026-06-15T08:00:00Z", "dateModified": "2026-06-15T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["stínění oken", "markýza", "venkovní žaluzie", "screen", "rolety", "fólie na okna", "letní stínění"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Sezónní údržba", "item": "https://www.domovniguru.cz/blog/kategorie/sezonni-udrzba" }, { "@type": "ListItem", "position": 4, "name": "Letní stínicí technika oken", "item": "https://www.domovniguru.cz/blog/letni-stinici-technika-oken" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jaké stínění je nejúčinnější proti přehřívání interiéru?", "acceptedAnswer": { "@type": "Answer", "text": "Nejúčinnější je vždy venkovní stínění – markýza, venkovní žaluzie nebo screen. Zastaví totiž sluneční záření ještě před tím, než dopadne na sklo, a dokáže snížit tepelný zisk okny až o 80–90 %. Vnitřní rolety a fólie pomáhají méně, protože sklo se stejně ohřeje a teplo se vyzařuje do místnosti." } }, { "@type": "Question", "name": "Vyplatí se markýza i na okna orientovaná na sever?", "acceptedAnswer": { "@type": "Answer", "text": "Na severní okna dopadá minimum přímého slunce, takže markýza zde nemá velký smysl. Investici se vyplatí směrovat na jih, jihozápad a západ, kde slunce svítí nejintenzivněji a nejdéle, zejména v odpoledních hodinách." } }, { "@type": "Question", "name": "Kolik se ušetří na klimatizaci díky venkovnímu stínění?", "acceptedAnswer": { "@type": "Answer", "text": "Při kvalitním venkovním stínění oken na jižní a západní straně lze snížit potřebu chlazení o 20–40 %, podle orientace domu a velikosti zasklených ploch. U domů s velkými okny nebo zimní zahradou je rozdíl ve spotřebě klimatizace často velmi výrazný." } }, { "@type": "Question", "name": "Je lepší markýza, nebo venkovní žaluzie?", "acceptedAnswer": { "@type": "Answer", "text": "Markýza je vhodná spíše pro stínění terasy a prosluněných ploch, kde chcete zachovat výhled a větrání. Venkovní žaluzie a screeny poskytují lepší tepelnou izolaci celého okna, jsou odolnější vůči větru a lépe se hodí pro maximální omezení slunečního záření na fasádě." } }, { "@type": "Question", "name": "Stačí na letní stínění jen vnitřní rolety nebo fólie?", "acceptedAnswer": { "@type": "Answer", "text": "Vnitřní rolety a fólie pomohou omezit oslnění a částečně sníží propustnost tepla, ale samotné sklo se přesto ohřívá a teplo se z něj šíří do interiéru. Pro skutečně efektivní ochranu proti přehřívání je vhodnější kombinovat je s venkovním stíněním nebo reflexní fólií s vyšší odrazivostí." } }] }] };

const RELATED = [
  { title: "Jak vybrat klimatizaci do bytu i domu", href: "/blog/jak-vybrat-klimatizaci", read: "6 min" },
  { title: "Příprava domu na léto – kompletní checklist", href: "/blog/dum-priprava-na-leto", read: "5 min" },
  { title: "Chytrá domácnost – jak začít", href: "/blog/chytra-domacnost-zaciname", read: "5 min" },
  { title: "Terasa na balkoně – inspirace a tipy", href: "/blog/terasa-na-balkone", read: "4 min" },
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
              <span>Letní stínicí technika oken</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">❄️ Sezónní údržba</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Markýzy, rolety a žaluzie – jak vybrat stínění oken na léto</h1>
              <p className="article-lead">Bez kvalitního stínění se z bytu nebo domu stane v létě skleník – a klimatizace pak jen marně dohání to, co dovnitř nasvítí slunce. Markýzy, venkovní žaluzie, screeny, rolety i fólie mají každá svoje místo. Ukážeme, co se hodí na která okna a jak na tom skutečně ušetříte.</p>
              <div className="article-meta-row"><span>Aktualizováno: 15. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#proc-stinit">Proč stínit okna v létě</a></li>
                <li><a href="#markyzy">Markýzy – výhody a typy</a></li>
                <li><a href="#venkovni-zaluzie">Venkovní žaluzie a screeny</a></li>
                <li><a href="#rolety-folie">Rolety a fólie na sklo</a></li>
                <li><a href="#automatizace">Automatizace a chytré ovládání</a></li>
                <li><a href="#srovnani">Srovnání – co se kam hodí</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="proc-stinit">
              <h2>Proč stínit okna v létě</h2>
              <p>Okna jsou nejslabším článkem tepelné pohody domu. Zatímco stěna s izolací propustí jen zlomek slunečního záření, prosklená plocha bez stínění funguje jako skleník – sluneční paprsky procházejí sklem téměř beze ztrát a ohřívají vše uvnitř. Výsledkem je, že i dobře zateplený dům se v létě může v odpoledních hodinách přehřívat na nepříjemné teploty.</p>
              <p>Kvalitní venkovní stínění dokáže zachytit sluneční záření ještě před tabulí skla a snížit tepelný zisk okny o desítky procent. To se přímo promítá do nižší potřeby chlazení – pokud doma používáte klimatizaci, vhodné stínění zásadně sníží její pracovní zátěž i spotřebu. Kolik energie klimatizace skutečně potřebuje a jak velký výkon zvolit, si můžete spočítat v naší <Link href="/kalkulacky/vykon-klimatizace" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačce výkonu klimatizace</Link>.</p>
              <p>Stínění ale není jen o teplotě vzduchu. Chrání také interiér – nábytek, podlahové krytiny, textilie i obrazy – před UV zářením, které způsobuje vyblednutí barev a degradaci materiálů. A v neposlední řadě omezuje oslnění, takže se lépe pracuje u počítače nebo sleduje televize i v poledním slunci.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Největší přínos má stínění na jižních a zejména západních oknech – nízko stojící odpolední slunce dopadá téměř kolmo na fasádu a do interiéru proniká nejvíc tepla.</div>
            </section>

            <section id="markyzy">
              <h2>Markýzy – výhody a typy</h2>
              <p>Markýza je výsuvná stínicí konstrukce kotvená na fasádě nad oknem, terasou nebo balkonem. Hlavní výhodou je, že zastíní celou plochu okna i přilehlý venkovní prostor, zatímco zachovává možnost otevřít okna a větrat. Markýza navíc vytváří stín i na terase nebo balkoně, takže slouží jako stínění okna i venkovního posezení v jednom.</p>
              <h3>Kazetové markýzy</h3>
              <p>Mechanismus i látka jsou při zatažení zcela ukryté v hliníkové kazetě, která chrání textil před deštěm, prachem i UV zářením. Jsou odolnější a vydrží déle, ale jsou dražší než varianty bez kazety.</p>
              <h3>Markýzy bez kazety (volné)</h3>
              <p>Levnější varianta, kde je látka při zatažení viditelná a vystavená počasí. Vhodné spíše pro sezónní použití nebo prostory chráněné před deštěm, například pod přesahem střechy.</p>
              <h3>Kloubové (lokte) vs. výsuvné markýzy</h3>
              <p>Klasické kloubové markýzy se vysouvají do strany pomocí kloubových ramen a hodí se nad okna, francouzské dveře i terasy. Existují také vertikální markýzy, které se spouštějí svisle dolů a slouží jako stínění proti nízkému bočnímu slunci, typicky na balkonech a lodžiích.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Při výběru látky volte materiály s dobrou odrazivostí (světlejší odstíny) – tmavé látky se sice méně prosvěcují, ale samy se více zahřívají a teplo částečně vyzařují i směrem k oknu.</div>
            </section>

            <section id="venkovni-zaluzie">
              <h2>Venkovní žaluzie a screeny</h2>
              <p>Venkovní žaluzie (často označované jako exteriérové žaluzie) jsou tvořeny hliníkovými lamelami, které lze natáčet a regulovat tak množství propuštěného světla i vzduchu. Jsou pevně instalované na fasádě nebo do předokenní krabice a poskytují velmi účinnou ochranu – na rozdíl od markýzy zakrývají celé okno rovnoměrně po celé výšce.</p>
              <p>Hlavní výhody venkovních žaluzií:</p>
              <ul>
                <li><strong>Vysoká účinnost stínění</strong> – zachytí sluneční záření před sklem, omezí tepelný zisk i v zimě pomáhají udržet teplo uvnitř</li>
                <li><strong>Regulace světla</strong> – natočením lamel lze propustit difúzní světlo, aniž by interiér zůstal úplně potemnělý</li>
                <li><strong>Bezpečnostní funkce</strong> – spuštěné žaluzie ztěžují pohled i přístup zvenčí, fungují tedy částečně i jako prvek zabezpečení</li>
                <li><strong>Odolnost vůči počasí</strong> – hliníkové lamely snesou vítr, déšť i přímé slunce bez degradace</li>
              </ul>
              <h3>Screeny (roletové markýzy)</h3>
              <p>Screen je svisle spouštěná textilie z technické tkaniny, vedená v bočních vodicích lištách. Na rozdíl od žaluzií tvoří souvislou plochu, často s mírnou propustností, která umožňuje difúzní výhled i při zatažení. Screeny se hodí zejména na velkoformátová okna a posuvné stěny, kde klasické žaluzie nebo okenice nejsou praktické.</p>
              <p>Oproti markýze mají screeny i venkovní žaluzie tu výhodu, že kryjí okno rovnoměrně shora dolů a lépe odolávají silnějšímu větru, protože jsou vedeny v lištách. Nevýhodou je vyšší pořizovací cena a nutnost zásahu do fasády při montáži.</p>
            </section>

            <section id="rolety-folie">
              <h2>Rolety a fólie na sklo</h2>
              <h3>Vnitřní rolety a žaluzie</h3>
              <p>Textilní rolety, látkové žaluzie nebo plisé jsou nejdostupnější a nejjednodušší formou stínění. Instalují se na vnitřní straně okna, takže montáž je rychlá a nevyžaduje zásah do fasády. Omezují oslnění a do jisté míry i propustnost tepla – zejména rolety s reflexní (hliníkovou) zadní stranou, které odrážejí část záření zpět směrem k oknu.</p>
              <p>Jejich limitem je, že sklo samotné se ohřívá na vnější straně okna a zachycené teplo se vyzařuje do prostoru mezi roletou a sklem, odkud postupně proniká do interiéru. Proti přímému letnímu slunci jsou tedy citelně méně účinné než jakékoliv venkovní stínění.</p>
              <h3>Reflexní a tepelně izolační fólie</h3>
              <p>Samolepicí fólie na sklo s reflexní nebo metalizovanou vrstvou dokážou odrazit část slunečního záření ještě před tím, než propustí teplo do interiéru. Existují v různých úrovních propustnosti světla – od téměř neviditelných fólií se slabým efektem až po výrazně tónované varianty, které citelně ztmaví okno.</p>
              <p>Fólie jsou levnou a rychlou volbou zejména pro byty, kde nelze instalovat venkovní stínění (například v nájmu nebo na panelových domech s pravidly pro fasádu). Nevýhodou je trvalé ztmavení okna po celý rok, včetně zimních měsíců, kdy je naopak vítané sluneční teplo.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud bydlíte v bytě a nemůžete měnit fasádu, kombinujte kvalitní reflexní fólii s vnitřní roletou s hliníkovým podkladem – dohromady omezí prohřívání i oslnění výrazně lépe než kterékoliv řešení samotné.</div>
            </section>

            <section id="automatizace">
              <h2>Automatizace a chytré ovládání stínění</h2>
              <p>Moderní markýzy, venkovní žaluzie i screeny lze doplnit motorovým pohonem a připojit do systému chytré domácnosti. Automatizace přináší dvě hlavní výhody – pohodlí a skutečně optimální využití stínění bez nutnosti na něj pamatovat.</p>
              <ul>
                <li><strong>Sluneční a větrné senzory</strong> – markýza se automaticky vysune při silném slunci a zatáhne při nárazovém větru, který by mohl konstrukci poškodit</li>
                <li><strong>Časové scény</strong> – žaluzie se ráno zvednou a večer spustí podle nastaveného harmonogramu nebo podle východu/západu slunce</li>
                <li><strong>Propojení s teplotními čidly</strong> – stínění se aktivuje až ve chvíli, kdy teplota v místnosti nebo na fasádě překročí zadanou hranici, čímž doplňuje a odlehčuje klimatizaci</li>
                <li><strong>Vzdálené ovládání</strong> – přes mobilní aplikaci lze stínění upravit i během dne, například pokud se počasí nečekaně změní</li>
              </ul>
              <p>Z hlediska úspory energie je automatizace užitečná zejména v kombinaci s klimatizací – pokud se okna zastíní dřív, než se interiér stihne prohřát, klimatizace nemusí dohánět vysoký tepelný zisk a běží efektivněji. Při návrhu chlazení i stínění je dobré počítat s reálnou tepelnou zátěží místností, kterou opět pomůže odhadnout naše <Link href="/kalkulacky/vykon-klimatizace" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačka výkonu klimatizace</Link>.</p>
            </section>

            <section id="srovnani">
              <h2>Srovnání – co se kam hodí</h2>
              <p>Každý typ stínění má svoje ideální použití podle orientace oken, typu budovy a rozpočtu. Následující tabulka shrnuje hlavní rozdíly a orientační úspory na chlazení.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ stínění</th><th>Vhodné použití</th><th>Přibližná úspora na chlazení</th></tr></thead>
                  <tbody>
                    <tr><td>Markýza</td><td>Jižní a západní okna, terasy, balkony – stínění okna i venkovního posezení</td><td>15–30 %</td></tr>
                    <tr><td>Venkovní žaluzie</td><td>Všechny exponované fasády, kombinace stínění a zabezpečení</td><td>25–40 %</td></tr>
                    <tr><td>Screen</td><td>Velkoformátová okna, posuvné stěny, moderní fasády</td><td>20–35 %</td></tr>
                    <tr><td>Vnitřní rolety / žaluzie</td><td>Doplňkové stínění, oslnění, byty bez možnosti zásahu do fasády</td><td>5–15 %</td></tr>
                    <tr><td>Reflexní fólie na sklo</td><td>Byty v nájmu, panelové domy, rychlé a levné řešení</td><td>10–20 %</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Pro maximální efekt se nejlépe osvědčuje kombinace – například venkovní žaluzie na nejvíce exponovaných oknech doplněná vnitřní roletou pro regulaci oslnění. U oken orientovaných na sever je investice do stínění obvykle zbytečná, protože na ně přímé slunce dopadá jen minimálně.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jaké stínění je nejúčinnější proti přehřívání interiéru?", a: "Nejúčinnější je vždy venkovní stínění – markýza, venkovní žaluzie nebo screen. Zastaví totiž sluneční záření ještě před tím, než dopadne na sklo, a dokáže snížit tepelný zisk okny až o 80–90 %. Vnitřní rolety a fólie pomáhají méně, protože sklo se stejně ohřeje a teplo se vyzařuje do místnosti." },
                  { q: "Vyplatí se markýza i na okna orientovaná na sever?", a: "Na severní okna dopadá minimum přímého slunce, takže markýza zde nemá velký smysl. Investici se vyplatí směrovat na jih, jihozápad a západ, kde slunce svítí nejintenzivněji a nejdéle, zejména v odpoledních hodinách." },
                  { q: "Kolik se ušetří na klimatizaci díky venkovnímu stínění?", a: "Při kvalitním venkovním stínění oken na jižní a západní straně lze snížit potřebu chlazení o 20–40 %, podle orientace domu a velikosti zasklených ploch. U domů s velkými okny nebo zimní zahradou je rozdíl ve spotřebě klimatizace často velmi výrazný." },
                  { q: "Je lepší markýza, nebo venkovní žaluzie?", a: "Markýza je vhodná spíše pro stínění terasy a prosluněných ploch, kde chcete zachovat výhled a větrání. Venkovní žaluzie a screeny poskytují lepší tepelnou izolaci celého okna, jsou odolnější vůči větru a lépe se hodí pro maximální omezení slunečního záření na fasádě." },
                  { q: "Stačí na letní stínění jen vnitřní rolety nebo fólie?", a: "Vnitřní rolety a fólie pomohou omezit oslnění a částečně sníží propustnost tepla, ale samotné sklo se přesto ohřívá a teplo se z něj šíří do interiéru. Pro skutečně efektivní ochranu proti přehřívání je vhodnější kombinovat je s venkovním stíněním nebo reflexní fólií s vyšší odrazivostí." },
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
                <li><a href="#proc-stinit">Proč stínit okna v létě</a></li>
                <li><a href="#markyzy">Markýzy</a></li>
                <li><a href="#venkovni-zaluzie">Venkovní žaluzie a screeny</a></li>
                <li><a href="#rolety-folie">Rolety a fólie</a></li>
                <li><a href="#automatizace">Automatizace</a></li>
                <li><a href="#srovnani">Srovnání</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/sezonni-udrzba" className="sidebar-cat-link">❄️ Sezónní údržba<span>Více článků →</span></Link>
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
