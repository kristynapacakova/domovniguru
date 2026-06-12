import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak pečovat o myčku nádobí, aby vydržela a myla dokonale",
  description: "Čištění filtru, odstraňování vodního kamene, ramínka a těsnění – pravidelná údržba myčky krok za krokem.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-udrzovat-mycku-nadobi" },
  openGraph: { title: "Jak pečovat o myčku nádobí, aby vydržela a myla dokonale", description: "Čištění filtru, odstraňování vodního kamene, ramínka a těsnění – pravidelná údržba myčky krok za krokem.", url: "https://www.domovniguru.cz/blog/jak-udrzovat-mycku-nadobi", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-12T08:00:00Z", modifiedTime: "2026-06-12T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20pe%C4%8Dovat%20o%20my%C4%8Dku%20n%C3%A1dob%C3%AD%2C%20aby%20vydr%C5%BEela%20a%20myla%20dokonale&cat=blog", width: 1200, height: 630, alt: "Jak pečovat o myčku nádobí, aby vydržela a myla dokonale" }] },
  twitter: { card: "summary_large_image", title: "Jak pečovat o myčku nádobí, aby vydržela a myla dokonale", description: "Čištění filtru, odstraňování vodního kamene, ramínka a těsnění – pravidelná údržba myčky krok za krokem." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/jak-udrzovat-mycku-nadobi#article", "headline": "Jak pečovat o myčku nádobí, aby vydržela a myla dokonale", "datePublished": "2026-06-12T08:00:00Z", "dateModified": "2026-06-12T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["údržba myčky nádobí", "čištění filtru myčky", "vodní kámen v myčce", "myčka zápach", "ramínka myčky"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Sezónní údržba", "item": "https://www.domovniguru.cz/blog/kategorie/sezonni-udrzba" }, { "@type": "ListItem", "position": 4, "name": "Jak pečovat o myčku nádobí", "item": "https://www.domovniguru.cz/blog/jak-udrzovat-mycku-nadobi" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jak často čistit filtr myčky?", "acceptedAnswer": { "@type": "Answer", "text": "Hrubý filtr a sítko vyndejte a opláchněte alespoň jednou týdně, při intenzivním používání i častěji. Zanesený filtr je nejčastější příčinou špatného mytí a zápachu z myčky." } }, { "@type": "Question", "name": "Jak často odvápňovat myčku?", "acceptedAnswer": { "@type": "Answer", "text": "Odvápňovač nebo cyklus s octem doporučujeme jednou za 1–2 měsíce, v oblastech s velmi tvrdou vodou raději jednou měsíčně. Pomáhá to udržet ohřev i ramínka bez usazenin." } }, { "@type": "Question", "name": "Proč myčka páchne, i když je čistá?", "acceptedAnswer": { "@type": "Answer", "text": "Zápach obvykle způsobují zbytky jídla ve filtru, v těsnění dveří nebo v odpadní hadičce. Pomůže důkladné vyčištění filtru, otření těsnění a prázdný cyklus s odmašťovačem nebo octem na 60–70 °C." } }, { "@type": "Question", "name": "Kolik soli a leštidla dávkovat do myčky?", "acceptedAnswer": { "@type": "Answer", "text": "Množství závisí na tvrdosti vody – nastavte ji v menu myčky podle údajů od vodárny. Sůl doplňujte, jen když svítí kontrolka, leštidlo podle dávkovače obvykle stačí doplnit jednou za 2–4 týdny." } }, { "@type": "Question", "name": "Kdy už je problém na servis a ne na vlastní čištění?", "acceptedAnswer": { "@type": "Answer", "text": "Pokud po důkladném vyčištění filtru, ramínek a těsnění myčka stále netopí vodu, hlasitě bouchá, vypíná se uprostřed cyklu nebo vytéká voda na podlahu, jde už o poruchu čerpadla, topného tělesa nebo elektroniky a je čas zavolat servis." } }] }] };

const RELATED = [
  { title: "Jak správně větrat byt – bez plísně a bez tepelných ztrát", href: "/blog/spravne-vetrat-byt", read: "6 min" },
  { title: "Jak se zbavit vlhkosti v bytě – příčiny, měření a řešení", href: "/blog/zbavit-se-vlhkosti-v-byte", read: "7 min" },
  { title: "Jak vyčistit filtr klimatizace", href: "/blog/cistit-filtr-klimatizace", read: "4 min" },
  { title: "Kalkulačka spotřeby vody", href: "/kalkulacky/spotreba-vody", read: "2 min" },
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
              <span>Jak pečovat o myčku nádobí</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">🧽 Sezónní údržba</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak pečovat o myčku nádobí, aby vydržela a myla dokonale</h1>
              <p className="article-lead">Myčka, která dřív myla bez problémů, najednou nechává na nádobí mastné fleky, zapáchá nebo hlučí víc než dřív? Většinou za tím nestojí porucha, ale zanedbaná údržba. Pár minut týdně a jedno hloubkové čištění měsíčně dokáže prodloužit životnost myčky o roky.</p>
              <div className="article-meta-row"><span>Aktualizováno: 12. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#filtr">Čištění filtru a sítka</a></li>
                <li><a href="#vodni-kamen">Vodní kámen a tuk – odvápňování</a></li>
                <li><a href="#raminka">Čištění ostřikovacích ramínek</a></li>
                <li><a href="#tesneni">Těsnění dveří a přívod vody</a></li>
                <li><a href="#davkovani">Sůl, leštidlo a tablety podle tvrdosti vody</a></li>
                <li><a href="#zapach-poruchy">Zápach, hloubkové čištění a kdy volat servis</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="filtr">
              <h2>Čištění filtru a sítka</h2>
              <p>Filtr na dně myčky zachytává zbytky jídla, kosti, slupky a další nečistoty, které by jinak ucpávaly oběhové čerpadlo a trysky ramínek. Je to součást, na kterou se nejčastěji zapomíná – a právě proto je nejčastější příčinou špatně umytého nádobí.</p>
              <h3>Jak na to</h3>
              <ul>
                <li>Vyndejte hrubý filtr (košík se síťkou) a jemné sítko pod ním – obvykle se vyšroubují nebo vytáhnou jednoduchým otočením proti směru hodinových ručiček.</li>
                <li>Opláchněte je pod tekoucí vodou a zbytky jídla setřete kartáčkem nebo starým zubním kartáčkem.</li>
                <li>Pokud je filtr extrémně mastný, namočte ho na 10–15 minut do horké vody s trochou saponátu.</li>
                <li>Před vrácením zpět zkontrolujte, že je sítko správně usazené – jinak se nečistoty dostanou přímo do čerpadla.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Čištění filtru zvládnete za 5 minut a mělo by se opakovat každý týden. Pokud myčku používáte denně nebo myjete hodně mastné nádobí, vyplatí se kontrola i dvakrát týdně.</div>
            </section>

            <section id="vodni-kamen">
              <h2>Vodní kámen a tuk – odvápňování</h2>
              <p>Tvrdá voda zanechává na topném tělese, stěnách a hadicích usazeniny vodního kamene, které snižují účinnost ohřevu a prodlužují cyklus. K tomu se postupně přidává mastný film, který dělá myčku „matnou" a nádobí lepkavé i po umytí.</p>
              <h3>Odvápňovač nebo ocet</h3>
              <p>Jednou za 1–2 měsíce spusťte prázdnou myčku (bez nádobí) na nejteplejší program s odvápňovačem do myček, nebo nalijte do dolního koše hrnek bílého octa a spusťte cyklus na 60–70 °C. Ocet rozpustí usazeniny vodního kamene i tukové filmy na stěnách a hadicích.</p>
              <h3>Citronová kyselina jako levnější varianta</h3>
              <p>Místo octa lze použít i kyselinu citronovou (sáček rozpuštěný v dolním koši) – funguje podobně a nezanechává pach. Po cyklu doporučujeme protřít gumové těsnění a vnitřní stěny utěrkou, aby se odstranily případné zbytky uvolněných usazenin.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> V oblastech s velmi tvrdou vodou (Praha, Brno a okolí mívají vyšší tvrdost) zkraťte interval odvápňování na jednou měsíčně. Pomalejší ohřev vody nebo delší cykly bývají první signál, že je čas na odvápnění.</div>
            </section>

            <section id="raminka">
              <h2>Čištění ostřikovacích ramínek</h2>
              <p>Ramínka rozstřikují vodu pod tlakem přes drobné trysky. Pokud se některá tryska ucpe zbytkem jídla, vodního kamene nebo úlomkem skla, voda se nedostane na celý prostor myčky – výsledkem jsou nedomyté talíře na jedné straně koše.</p>
              <h3>Postup čištění</h3>
              <ul>
                <li>Vyjměte ramínka – většinou jde o vytažení nahoru nebo povolení středového šroubu/krytky.</li>
                <li>Opláchněte je pod tekoucí vodou a otočte proti světlu, abyste viděli, které trysky jsou ucpané.</li>
                <li>Ucpané otvory propláchněte tenkým drátkem (např. zubní párátko nebo rovná část kancelářské sponky) – nepoužívejte kov, který by mohl trysku poškrábat a zvětšit ji.</li>
                <li>Zkontrolujte, že se ramínka po zasazení volně otáčejí. Pokud drhnou, zkontrolujte ložiska na koncích – často v nich uvízne kousek skla nebo kost.</li>
              </ul>
              <p>Ramínka stačí důkladně zkontrolovat při každém měsíčním hloubkovém čištění, ideálně ve stejný den jako odvápňování.</p>
            </section>

            <section id="tesneni">
              <h2>Těsnění dveří a přívod vody</h2>
              <h3>Gumové těsnění</h3>
              <p>Po obvodu dveří myčky je gumové těsnění, které zabraňuje úniku vody. V jeho záhybech se usazují zbytky jídla, mastnota a vlhkost – ideální prostředí pro plísně a nepříjemný zápach. Jednou týdně přetřete těsnění hadříkem namočeným v roztoku vody a octu nebo jedlé sody. Věnujte pozornost spodní hraně dveří, kam stéká voda a zbytky z koše.</p>
              <h3>Filtr přívodu vody</h3>
              <p>Méně známá součást je síťový filtr na přívodní hadici, kam vstupuje voda z vodovodního řadu. Zachycuje drobné částečky rezu a usazenin z potrubí. Pokud myčka nabírá vodu pomaleji než dřív nebo hlásí chybu s nedostatkem vody, zkontrolujte tento filtr – obvykle se nachází na konci přívodní hadice u uzávěru vody. Vyčistěte ho jednou za půl roku, zvlášť po jakékoli opravě vodovodního potrubí v domě, kdy se do systému mohou dostat nečistoty.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Po dokončení mytí ponechejte dveře myčky na pár centimetrů pootevřené. Vlhko se rychleji odvětrá a omezíte tak růst plísně na těsnění i nepříjemný zápach.</div>
            </section>

            <section id="davkovani">
              <h2>Sůl, leštidlo a tablety podle tvrdosti vody</h2>
              <p>Správné dávkování regenerační soli a leštidla má přímý vliv na to, jak myčka myje a jak dlouho vydrží bez vodního kamene. Většina moderních myček má v menu nastavení tvrdosti vody – údaj o tvrdosti vody ve vaší lokalitě zjistíte na webu místní vodárny nebo z dodaného protokolu o kvalitě vody.</p>
              <ul>
                <li><strong>Sůl</strong> – doplňujte, jen když se rozsvítí kontrolka na panelu nebo indikátor v zásobníku. Sůl se sype přímo do zásobníku ve dně myčky, nikdy ne do dávkovače na tablety.</li>
                <li><strong>Leštidlo</strong> – zásobník stačí kontrolovat jednou za 2–4 týdny. Při nízké hladině se na skle a příborech objevují skvrny a šmouhy.</li>
                <li><strong>Tablety „vše v jednom"</strong> – obsahují sůl i leštidlo, takže u nich dávkování řešit nemusíte. Pokud ale máte velmi tvrdou vodu, i s těmito tabletami se vyplatí přidávat samostatnou sůl – jinak se vodní kámen časem usadí i tak.</li>
              </ul>
              <p>Pokud řešíte i celkovou spotřebu vody v domácnosti, mrkněte na naši <Link href="/kalkulacky/spotreba-vody" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačku spotřeby vody</Link> – myčka s úsporným programem dokáže ušetřit i desítky litrů denně oproti mytí v ruce.</p>
            </section>

            <section id="zapach-poruchy">
              <h2>Zápach, hloubkové čištění a kdy volat servis</h2>
              <h3>Co dělat při zápachu z myčky</h3>
              <p>Nejčastější příčinou zápachu jsou zbytky jídla ve filtru, v záhybech těsnění nebo v odpadní hadičce. Postup je jednoduchý: vyčistěte filtr a sítko, otřete těsnění a spusťte prázdný cyklus na nejvyšší teplotu s odvápňovačem nebo octem. Pokud zápach přetrvává, zkontrolujte odpadní hadičku za myčkou – může být zalomená nebo částečně ucpaná, takže se v ní hromadí stojatá voda.</p>
              <h3>Jak často provádět hloubkové čištění</h3>
              <p>Doporučený rytmus pro běžnou domácnost vypadá takto:</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Co čistit</th><th>Jak často</th></tr></thead>
                  <tbody>
                    <tr><td>Filtr a sítko</td><td>Týdně</td></tr>
                    <tr><td>Těsnění dveří</td><td>Týdně</td></tr>
                    <tr><td>Odvápnění (ocet / odvápňovač)</td><td>Měsíčně (tvrdá voda) až jednou za 2 měsíce</td></tr>
                    <tr><td>Ramínka a trysky</td><td>Měsíčně</td></tr>
                    <tr><td>Filtr přívodu vody</td><td>1× za půl roku</td></tr>
                    <tr><td>Vnější panel a madlo</td><td>Dle potřeby</td></tr>
                  </tbody>
                </table>
              </div>
              <h3>Časté poruchy a kdy volat servis</h3>
              <p>Některé příznaky se podobají zanesení, ale ve skutečnosti jde o poruchu, kterou vlastní údržbou nevyřešíte:</p>
              <ul>
                <li><strong>Myčka nehřeje vodu</strong> i po odvápnění – pravděpodobně problém s topným tělesem nebo termostatem.</li>
                <li><strong>Hlasité bouchání nebo vrzání</strong> i po vyčištění a kontrole ramínek – často vadné ložisko oběhového čerpadla.</li>
                <li><strong>Voda zůstává na dně po skončení cyklu</strong> i s čistým filtrem – zkontrolujte vypouštěcí hadici a sifon, pokud problém přetrvá, jde o vypouštěcí čerpadlo.</li>
                <li><strong>Myčka se uprostřed cyklu vypíná nebo hází chybové kódy</strong> – obvykle elektronika nebo senzor, na to je potřeba servisní technik.</li>
                <li><strong>Únik vody na podlahu</strong> – ihned myčku odpojte a vypněte přívod vody, jde o bezpečnostní riziko, které vyžaduje servis.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Před voláním servisu zkuste myčku resetovat (vypnout na 1–2 minuty od sítě) a spustit krátký program nanovo. Drobné softwarové „zaseknutí" se tím často vyřeší a ušetříte si návštěvu technika.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jak často čistit filtr myčky?", a: "Hrubý filtr a sítko vyndejte a opláchněte alespoň jednou týdně, při intenzivním používání i častěji. Zanesený filtr je nejčastější příčinou špatného mytí a zápachu z myčky." },
                  { q: "Jak často odvápňovat myčku?", a: "Odvápňovač nebo cyklus s octem doporučujeme jednou za 1–2 měsíce, v oblastech s velmi tvrdou vodou raději jednou měsíčně. Pomáhá to udržet ohřev i ramínka bez usazenin." },
                  { q: "Proč myčka páchne, i když je čistá?", a: "Zápach obvykle způsobují zbytky jídla ve filtru, v těsnění dveří nebo v odpadní hadičce. Pomůže důkladné vyčištění filtru, otření těsnění a prázdný cyklus s odmašťovačem nebo octem na 60–70 °C." },
                  { q: "Kolik soli a leštidla dávkovat do myčky?", a: "Množství závisí na tvrdosti vody – nastavte ji v menu myčky podle údajů od vodárny. Sůl doplňujte, jen když svítí kontrolka, leštidlo podle dávkovače obvykle stačí doplnit jednou za 2–4 týdny." },
                  { q: "Kdy už je problém na servis a ne na vlastní čištění?", a: "Pokud po důkladném vyčištění filtru, ramínek a těsnění myčka stále netopí vodu, hlasitě bouchá, vypíná se uprostřed cyklu nebo vytéká voda na podlahu, jde už o poruchu čerpadla, topného tělesa nebo elektroniky a je čas zavolat servis." },
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
                <li><a href="#filtr">Čištění filtru a sítka</a></li>
                <li><a href="#vodni-kamen">Vodní kámen a tuk</a></li>
                <li><a href="#raminka">Ostřikovací ramínka</a></li>
                <li><a href="#tesneni">Těsnění a přívod vody</a></li>
                <li><a href="#davkovani">Sůl, leštidlo, tablety</a></li>
                <li><a href="#zapach-poruchy">Zápach a poruchy</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/sezonni-udrzba" className="sidebar-cat-link">🧽 Sezónní údržba<span>Více článků →</span></Link>
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
