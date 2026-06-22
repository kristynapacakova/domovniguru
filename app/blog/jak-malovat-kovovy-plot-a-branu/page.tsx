import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak natřít kovový plot a bránu, aby nerezavěly",
  description: "Postup přípravy, odstranění rezu, základní nátěr a finální barva na kovový plot a bránu – jak dosáhnout trvanlivého výsledku.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-malovat-kovovy-plot-a-branu" },
  openGraph: { title: "Jak natřít kovový plot a bránu, aby nerezavěly", description: "Postup přípravy, odstranění rezu, základní nátěr a finální barva na kovový plot a bránu – jak dosáhnout trvanlivého výsledku.", url: "https://www.domovniguru.cz/blog/jak-malovat-kovovy-plot-a-branu", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-12T08:00:00Z", modifiedTime: "2026-06-12T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20natřít%20kovový%20plot%20a%20bránu%2C%20aby%20nerezavěly&cat=blog", width: 1200, height: 630, alt: "Jak natřít kovový plot a bránu, aby nerezavěly" }] },
  twitter: { card: "summary_large_image", title: "Jak natřít kovový plot a bránu, aby nerezavěly", description: "Postup přípravy, odstranění rezu, základní nátěr a finální barva na kovový plot a bránu – jak dosáhnout trvanlivého výsledku." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/jak-malovat-kovovy-plot-a-branu#article", "headline": "Jak natřít kovový plot a bránu, aby nerezavěly", "datePublished": "2026-06-12T08:00:00Z", "dateModified": "2026-06-12T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["kovový plot nátěr", "nátěr brány", "odstranění rezu", "rust nátěr", "antikorozní nátěr"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Malování & barvy", "item": "https://www.domovniguru.cz/blog/kategorie/malovani" }, { "@type": "ListItem", "position": 4, "name": "Jak natřít kovový plot a bránu, aby nerezavěly", "item": "https://www.domovniguru.cz/blog/jak-malovat-kovovy-plot-a-branu" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jak dlouho vydrží nátěr kovového plotu?", "acceptedAnswer": { "@type": "Answer", "text": "Při kvalitní přípravě povrchu a použití základní a vrchní barvy vydrží nátěr kovového plotu obvykle 5–8 let, než bude potřeba lokální obnova." } }, { "@type": "Question", "name": "Musím odstranit veškerou rez před natíráním?", "acceptedAnswer": { "@type": "Answer", "text": "Ideálně ano, ale pokud rez nelze zcela odstranit, lze použít speciální nátěry typu RUST, které rez chemicky zastaví a vytvoří podklad pro další vrstvy." } }, { "@type": "Question", "name": "Jaká barva je nejlepší na kovový plot?", "acceptedAnswer": { "@type": "Answer", "text": "Nejosvědčenější je kombinace antikorozní základní barvy (například syntetické nebo epoxidové) a syntetické nebo akrylátové vrchní barvy odolné UV záření a povětrnosti." } }, { "@type": "Question", "name": "Za jakého počasí se má kovový plot natírat?", "acceptedAnswer": { "@type": "Answer", "text": "Ideální je suché a bezvětrné počasí s teplotou 10–25 °C, bez přímého slunce na povrch a bez očekávaného deště nejméně 24 hodin po nátěru." } }, { "@type": "Question", "name": "Jak často kontrolovat stav nátěru plotu?", "acceptedAnswer": { "@type": "Answer", "text": "Doporučuje se vizuální kontrola jednou až dvakrát ročně, zejména na spárách, svárech a místech kontaktu se zemí, kde rez vzniká nejdříve." } }] }] };

const RELATED = [
  { title: "Jak natřít venkovní dřevo – kompletní průvodce", href: "/blog/natrit-venkovni-drevo", read: "5 min" },
  { title: "Obnova fasády nátěrem – kdy a jak na to", href: "/blog/obnova-fasady-naterem", read: "6 min" },
  { title: "Fasádní barva – jak vybrat tu správnou", href: "/blog/fasadni-barva-vyber", read: "5 min" },
  { title: "Zahradní plot ze dřeva – typy a údržba", href: "/blog/zahradni-plot-ze-dreva", read: "4 min" },
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
              <span>Jak natřít kovový plot a bránu, aby nerezavěly</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování & barvy</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak natřít kovový plot a bránu, aby nerezavěly</h1>
              <p className="article-lead">Kovový plot a brána jsou vystaveny dešti, slunci i mrazu celý rok. Bez správné ochrany se na nich během pár sezón objeví rez, která postupně narušuje materiál i vzhled. Tento návod ti ukáže, jak povrch připravit, jakou barvu vybrat a jak nátěr provést tak, aby vydržel co nejdéle.</p>
              <div className="article-meta-row"><span>Aktualizováno: 12. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#proc-rezavi">Proč kovový plot a brána rezavějí</a></li>
                <li><a href="#priprava">Příprava povrchu a odstranění rezu</a></li>
                <li><a href="#vyber-barvy">Výběr barvy</a></li>
                <li><a href="#postup">Postup nanášení a podmínky</a></li>
                <li><a href="#udrzba">Údržba a kontrola v dalších letech</a></li>
                <li><a href="#chyby">Časté chyby</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="proc-rezavi">
              <h2>Proč kovový plot a brána rezavějí</h2>
              <p>Rez (oxid železa) vzniká, když se na povrchu kovu setká vlhkost s kyslíkem. U plotů a bran je tento proces o to rychlejší, protože jsou neustále vystaveny dešti, ranní rose, sněhu a kolísání teplot. Pokud je navíc povrch poškrábaný nebo má poškozený ochranný nátěr, voda se dostává přímo k holému kovu a koroze postupuje rychleji než na chráněných místech.</p>
              <p>Nejvíce náchylná jsou místa, kde se hromadí vlhkost a nečistoty – spodní příčky plotu u země, sváry, šrouby a spoje, nebo místa, kde se barva odštípla nárazem (například při kosení trávy nebo manipulaci s brankou). Jednou vzniklá rez se navíc šíří i pod stávající nátěr, takže problém často není vidět, dokud se barva nezačne odlupovat ve větších plochách.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pravidelná kontrola plotu jednou za rok ti pomůže odhalit drobná poškození nátěru včas – oprava malé plošky je vždy snazší a levnější než řešení rozsáhlé koroze.</div>
            </section>

            <section id="priprava">
              <h2>Příprava povrchu a odstranění rezu</h2>
              <p>Kvalita přípravy povrchu rozhoduje o tom, jak dlouho nový nátěr vydrží. I ta nejlepší barva na poškozeném podkladu odpadne během jedné nebo dvou sezón.</p>
              <h3>Mechanické očištění</h3>
              <ul>
                <li><strong>Odstranění starého nátěru:</strong> Uvolněnou a popraskanou barvu seškrábej špachtlí nebo drátěným kartáčem.</li>
                <li><strong>Broušení:</strong> Brusným papírem (zrnitost 80–120) nebo bruskou s drátěným kotoučem zbroušíš povrchovou rez a vyhladíš okraje starého nátěru.</li>
                <li><strong>Odmaštění:</strong> Před nanesením barvy povrch otři ředidlem nebo technickým benzínem, aby se odstranil prach, mastnota a zbytky brusiva.</li>
              </ul>
              <h3>Chemické odrezovače</h3>
              <p>Na hůře přístupná místa (ozdobné prvky, spoje, svary) je vhodné použít chemický odrezovač na bázi kyseliny fosforečné. Nanese se štětcem, ponechá se působit podle návodu (obvykle 15–30 minut) a poté se opláchne vodou. Odrezovač navíc na povrchu vytvoří tenkou ochrannou vrstvu fosfátu, která zlepší přídržnost následného nátěru.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> U silně zkorodovaných míst kombinuj obě metody – nejprve mechanicky odstraň volnou rez a šupiny, poté chemickým odrezovačem ošetři zbylou jemnou korozi v pórech kovu.</div>
            </section>

            <section id="vyber-barvy">
              <h2>Výběr barvy</h2>
              <p>Na trhu existují dva základní přístupy k natírání kovových plotů – klasický systém základ + vrchní barva, nebo přímé nátěry na rez.</p>
              <h3>Syntetický systém (základ + email)</h3>
              <p>Osvědčená kombinace je antikorozní základní barva (syntetická nebo epoxidová), na kterou se po zaschnutí nanese syntetický nebo akrylátový vrchní email. Tento postup zajišťuje nejlepší dlouhodobou ochranu, ale vyžaduje dvě i tři vrstvy a delší čas na zaschnutí mezi nimi.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ nátěru</th><th>Výhody</th><th>Nevýhody</th></tr></thead>
                  <tbody>
                    <tr><td>Základ + syntetický email</td><td>Vysoká odolnost, dlouhá životnost</td><td>Více vrstev, delší zasychání</td></tr>
                    <tr><td>Nátěr přímo na rez (RUST)</td><td>Méně kroků, lze nanést na zbytkovou rez</td><td>Často nutné dotírání vrchní barvou pro vzhled</td></tr>
                    <tr><td>Akrylátová vodou ředitelná barva</td><td>Snadná aplikace, ekologičtější</td><td>Nižší odolnost při zanedbané přípravě</td></tr>
                  </tbody>
                </table>
              </div>
              <h3>Nátěry přímo na rez</h3>
              <p>Speciální nátěry typu RUST jsou určené pro povrchy, kde nelze rez zcela odstranit. Obsahují látky, které chemicky stabilizují zbytkovou korozi a vytvoří pevný podklad. Hodí se zejména na rozměrné brány a ploty, kde je důkladné obroušení každého milimetru časově náročné. Při výpočtu množství barvy na celý plot ti pomůže <Link href="/kalkulacky/kolik-barvy" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačka spotřeby barvy</Link>, podle které snadno zjistíš, kolik nátěrové hmoty bude potřeba.</p>
            </section>

            <section id="postup">
              <h2>Postup nanášení a podmínky</h2>
              <p>Samotné natírání se zdá jednoduché, ale výsledná kvalita a životnost nátěru závisí na dodržení podmínek a postupu nanášení jednotlivých vrstev.</p>
              <h3>Ideální podmínky</h3>
              <ul>
                <li><strong>Teplota:</strong> 10–25 °C, mimo přímé sluneční záření na povrch</li>
                <li><strong>Vlhkost:</strong> Suchý povrch a bez srážek alespoň 24 hodin před i po nátěru</li>
                <li><strong>Vítr:</strong> Mírné počasí bez silného větru, který by na povrch nanášel prach a nečistoty</li>
              </ul>
              <h3>Pořadí vrstev</h3>
              <ol>
                <li>Po důkladném vyschnutí povrchu nanes antikorozní základní barvu – nejlépe štětcem, aby barva zatekla i do drobných nerovností a spojů.</li>
                <li>Základní vrstvu nech zaschnout podle pokynů výrobce (obvykle 4–24 hodin).</li>
                <li>Naneste první vrstvu vrchní barvy a po zaschnutí případně i druhou vrstvu pro lepší krytí a odolnost.</li>
                <li>U rozsáhlých ploch (např. dlouhý plot z pletiva) lze druhou a třetí vrstvu nanášet i nástřikem – výrazně to urychlí práci, ale je třeba dobře zakrytí okolí.</li>
              </ol>
              <p>Při natírání nezapomeň ošetřit i méně viditelná místa – spodní hrany, vnitřní strany trubek a kování u branky, kde se voda zdržuje nejdéle a koroze tam vzniká nejrychleji.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Než se rozhodneš pro odstín, ověř si v praxi reálnou spotřebu barvy. Pomocí <Link href="/kalkulacky/kolik-barvy" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačky kolik barvy</Link> spočítáš potřebné množství podle rozměrů plotu a počtu vrstev, a předejdeš tak nedostatku barvy uprostřed práce.</div>
            </section>

            <section id="udrzba">
              <h2>Údržba a kontrola v dalších letech</h2>
              <p>Nově natřený plot vypadá skvěle, ale pro dlouhou životnost je důležitá i následná péče. Jednou až dvakrát ročně, ideálně na jaře a na podzim, prohlédni plot a bránu a zaměř se na místa, kde dochází k mechanickému poškození – branka, zámky, závěsy a spodní příčky u země.</p>
              <ul>
                <li><strong>Drobné odřeniny a škrábance:</strong> Okamžitě přebrus a přetři, aby se rez nerozšířila pod okolní nátěr.</li>
                <li><strong>Mytí povrchu:</strong> Pravidelné omytí vodou odstraní prach a usazeniny, které urychlují stárnutí nátěru.</li>
                <li><strong>Lokální obnova:</strong> I při dobré péči je vhodné po 5–8 letech provést celkovou obnovu nátěru, zejména na nejvíce exponovaných plochách.</li>
              </ul>
              <p>Pokud plánuješ obnovu i dalších částí exteriéru, mrkni také na článek o <Link href="/blog/obnova-fasady-naterem" style={{ color: "#2a6496", textDecoration: "underline" }}>obnově fasády nátěrem</Link>, kde najdeš podobné principy přípravy a aplikace.</p>
            </section>

            <section id="chyby">
              <h2>Časté chyby</h2>
              <ul>
                <li><strong>Natírání na vlhký nebo zaprášený povrch:</strong> Barva nedrží a brzy se odlupuje i s vrstvami pod ní.</li>
                <li><strong>Vynechání základní barvy:</strong> Vrchní email bez antikorozního základu neposkytuje dostatečnou ochranu proti vlhkosti.</li>
                <li><strong>Natírání za přímého slunce nebo vysoké teploty:</strong> Barva zasychá příliš rychle, vznikají neestetické šmouhy a snižuje se přídržnost.</li>
                <li><strong>Příliš tlusté vrstvy:</strong> Tlustá vrstva nátěru déle zasychá, může popraskat a méně dobře přilne k podkladu.</li>
                <li><strong>Ignorování drobné rezu:</strong> I malá skvrna rezu se pod novým nátěrem časem rozšíří a poškodí okolní plochu.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jak dlouho vydrží nátěr kovového plotu?", a: "Při kvalitní přípravě povrchu a použití základní a vrchní barvy vydrží nátěr kovového plotu obvykle 5–8 let, než bude potřeba lokální obnova." },
                  { q: "Musím odstranit veškerou rez před natíráním?", a: "Ideálně ano, ale pokud rez nelze zcela odstranit, lze použít speciální nátěry typu RUST, které rez chemicky zastaví a vytvoří podklad pro další vrstvy." },
                  { q: "Jaká barva je nejlepší na kovový plot?", a: "Nejosvědčenější je kombinace antikorozní základní barvy (syntetické nebo epoxidové) a syntetické nebo akrylátové vrchní barvy odolné UV záření a povětrnosti." },
                  { q: "Za jakého počasí se má kovový plot natírat?", a: "Ideální je suché a bezvětrné počasí s teplotou 10–25 °C, bez přímého slunce na povrch a bez očekávaného deště nejméně 24 hodin po nátěru." },
                  { q: "Jak často kontrolovat stav nátěru plotu?", a: "Doporučuje se vizuální kontrola jednou až dvakrát ročně, zejména na spárách, svárech a místech kontaktu se zemí, kde rez vzniká nejdříve." },
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
                <li><a href="#proc-rezavi">Proč plot rezaví</a></li>
                <li><a href="#priprava">Příprava povrchu</a></li>
                <li><a href="#vyber-barvy">Výběr barvy</a></li>
                <li><a href="#postup">Postup a podmínky</a></li>
                <li><a href="#udrzba">Údržba</a></li>
                <li><a href="#chyby">Časté chyby</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/malovani" className="sidebar-cat-link">🎨 Malování & barvy<span>20 článků →</span></Link>
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
