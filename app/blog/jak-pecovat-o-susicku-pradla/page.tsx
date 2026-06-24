import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak pečovat o sušičku prádla, aby fungovala efektivně",
  description: "Čištění filtru, kondenzátoru a odvodu vzduchu – pravidelná údržba sušičky prádla krok za krokem.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-pecovat-o-susicku-pradla" },
  openGraph: { title: "Jak pečovat o sušičku prádla, aby fungovala efektivně", description: "Čištění filtru, kondenzátoru a odvodu vzduchu – pravidelná údržba sušičky prádla krok za krokem.", url: "https://www.domovniguru.cz/blog/jak-pecovat-o-susicku-pradla", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-24T08:00:00Z", modifiedTime: "2026-06-24T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20pe%C4%8Dovat%20o%20su%C5%A1i%C4%8Dku%20pr%C3%A1dla%2C%20aby%20fungovala%20efektivn%C4%9B&cat=blog", width: 1200, height: 630, alt: "Jak pečovat o sušičku prádla, aby fungovala efektivně" }] },
  twitter: { card: "summary_large_image", title: "Jak pečovat o sušičku prádla, aby fungovala efektivně", description: "Čištění filtru, kondenzátoru a odvodu vzduchu – pravidelná údržba sušičky prádla krok za krokem." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/jak-pecovat-o-susicku-pradla#article", "headline": "Jak pečovat o sušičku prádla, aby fungovala efektivně", "datePublished": "2026-06-24T08:00:00Z", "dateModified": "2026-06-24T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["údržba sušičky prádla", "čištění filtru sušičky", "kondenzační sušička", "odvětrávací sušička", "péče o sušičku", "úspora energie sušička"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Sezónní údržba", "item": "https://www.domovniguru.cz/blog/kategorie/sezonni-udrzba" }, { "@type": "ListItem", "position": 4, "name": "Péče o sušičku prádla", "item": "https://www.domovniguru.cz/blog/jak-pecovat-o-susicku-pradla" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jak často mám čistit chuňkový filtr sušičky?", "acceptedAnswer": { "@type": "Answer", "text": "Chuňkový filtr je potřeba vyčistit po každém sušicím cyklu. Stačí setřít zachycené vlákno rukou nebo kartáčkem – zanesený filtr výrazně prodlužuje sušení a zvyšuje spotřebu energie." } }, { "@type": "Question", "name": "Jaký je rozdíl mezi kondenzační a odvětrávací sušičkou v údržbě?", "acceptedAnswer": { "@type": "Answer", "text": "Odvětrávací sušička potřebuje pravidelnou kontrolu a čištění odvodní hadice, kterou vlhký vzduch odvádí ven z bytu. Kondenzační sušička naopak vyžaduje pravidelné čištění kondenzátoru (výměníku) a vyprazdňování nebo odvápňování nádržky na kondenzát." } }, { "@type": "Question", "name": "Jak často je potřeba čistit kondenzátor u kondenzační sušičky?", "acceptedAnswer": { "@type": "Answer", "text": "Kondenzátor se obvykle doporučuje čistit jednou za 1–3 měsíce podle frekvence používání. Zanesený kondenzátor prachem a vláknem snižuje účinnost kondenzace, prodlužuje sušení a zvyšuje spotřebu elektřiny." } }, { "@type": "Question", "name": "Jak poznám, že sušička potřebuje servis?", "acceptedAnswer": { "@type": "Answer", "text": "Signálem je výrazně delší doba sušení než dříve, prádlo zůstává vlhké i po standardním cyklu, sušička se nadměrně zahřívá nebo je hlučnější než obvykle, případně cítíš zápach spáleniny. V takovém případě zkontroluj filtr, kondenzátor a odvod vzduchu, případně přivolej servis." } }, { "@type": "Question", "name": "Vyplatí se odvlhčovat prádlo sušičkou, nebo je lepší věšet ho?", "acceptedAnswer": { "@type": "Answer", "text": "Sušička je rychlejší a v zimě eliminuje riziko vlhkosti a plísně v bytě, ale má vyšší spotřebu energie než přirozené sušení. Tepelná čerpadlová sušička spotřebuje výrazně méně energie než kondenzační s elektrickým ohřevem a je dobrým kompromisem mezi rychlostí a úsporou." } }] }] };

const RELATED = [
  { title: "Jak vyčistit pračku – zbavte se zápachu a vodního kamene", href: "/blog/jak-vycistit-pracku", read: "7 min" },
  { title: "Jak sušit prádlo v bytě v zimě bez plísně", href: "/blog/suseni-pradla-v-byte-bez-plisne", read: "5 min" },
  { title: "Jak se zbavit vlhkosti v bytě – příčiny, měření a řešení", href: "/blog/zbavit-se-vlhkosti-v-byte", read: "7 min" },
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
              <span>Péče o sušičku prádla</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">❄️ Sezónní údržba</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak pečovat o sušičku prádla, aby fungovala efektivně</h1>
              <p className="article-lead">Sušička prádla je jeden z mála spotřebičů, který se zanáší prakticky při každém použití – textilní vlákno se hromadí ve filtru, v kondenzátoru i v odvodní hadici. Bez pravidelné péče se prodlužuje doba sušení, roste spotřeba energie a v krajním případě hrozí i přehřátí spotřebiče. Tady je přehled, co dělat po každém cyklu a co řešit jednou za čas.</p>
              <div className="article-meta-row"><span>Aktualizováno: 24. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#filtr">Čištění chuňkového filtru po každém cyklu</a></li>
                <li><a href="#typy">Kondenzační vs. odvětrávací sušička</a></li>
                <li><a href="#kondenzator">Čištění kondenzátoru a výměníku</a></li>
                <li><a href="#hadice">Kontrola a čištění odvodní hadice</a></li>
                <li><a href="#kondenzat">Odvápňování nádržky na kondenzát</a></li>
                <li><a href="#servis">Příznaky, že je potřeba servis</a></li>
                <li><a href="#energie">Energetická náročnost a úspora</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="filtr">
              <h2>Čištění chuňkového filtru po každém cyklu</h2>
              <p>Chuňkový filtr zachytává textilní vlákno uvolněné z prádla při sušení a je první a nejdůležitější bod údržby u všech typů sušiček. Pokud se nečistí, vlákno postupně omezuje proudění vzduchu skrz buben a celý systém musí pracovat výrazně déle a s vyšší spotřebou.</p>
              <ul>
                <li><strong>Frekvence</strong> – po každém sušicím cyklu, bez výjimky</li>
                <li><strong>Postup</strong> – vyjmi filtr, setři zachycené vlákno rukou nebo měkkým kartáčkem do koše</li>
                <li><strong>Mokré čištění</strong> – jednou za měsíc filtr opláchni vlažnou vodou, aby se odstranily i mastné usazeniny z aviváže, které jemná vlákna nezachytí</li>
                <li><strong>Kontrola poškození</strong> – sleduj, jestli síťka filtru není protrhaná, protrhaný filtr propustí vlákno hlouběji do spotřebiče</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Vyndávej filtr ihned po skončení cyklu, dokud je vlákno ještě teplé a snadno se odlepuje – po vychladnutí přilne pevněji k síťce.</div>
            </section>

            <section id="typy">
              <h2>Kondenzační vs. odvětrávací sušička – rozdíl v údržbě</h2>
              <p>Typ sušičky určuje, kterou další část spotřebiče je potřeba kontrolovat. Oba typy mají filtr, ale liší se v tom, jak nakládají s vlhkým vzduchem vzniklým při sušení.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ sušičky</th><th>Jak odvádí vlhkost</th><th>Klíčová údržba</th></tr></thead>
                  <tbody>
                    <tr><td>Odvětrávací</td><td>Vlhký vzduch vyfukuje hadicí ven z bytu nebo okna</td><td>Kontrola a čištění odvodní hadice, ústí ven</td></tr>
                    <tr><td>Kondenzační</td><td>Vlhkost zkondenzuje na výměníku a stéká do nádržky nebo odpadu</td><td>Čištění kondenzátoru, vyprazdňování/odvápňování nádržky</td></tr>
                    <tr><td>Tepelné čerpadlo</td><td>Stejný princip jako kondenzační, ale s nižší spotřebou energie</td><td>Čištění výměníku tepelného čerpadla, filtr i nádržka</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Odvětrávací sušičky jsou jednodušší konstrukčně, ale potřebují pevné umístění s odvodem ven. Kondenzační a tepelně-čerpadlové sušičky lze postavit kamkoli v bytě, protože vlhkost se zachycuje uvnitř spotřebiče.</p>
            </section>

            <section id="kondenzator">
              <h2>Čištění kondenzátoru a výměníku</h2>
              <p>U kondenzačních sušiček je kondenzátor (výměník) druhým nejdůležitějším místem, kde se hromadí jemné vlákno, které filtr nezachytí. Zanesený výměník brání efektivní kondenzaci vlhkosti a sušička pak potřebuje na stejnou náplň prádla výrazně více času a energie.</p>
              <ul>
                <li><strong>Frekvence</strong> – jednou za 1–3 měsíce podle intenzity používání, u domácností s častým praním i častěji</li>
                <li><strong>Postup</strong> – kondenzátor se obvykle vytahuje ze spodní nebo zadní části spotřebiče (podle návodu), opláchne se proudem vody a osuší před vrácením zpět</li>
                <li><strong>Indikátor v displeji</strong> – moderní sušičky mají často kontrolku upozorňující na nutnost vyčistit kondenzátor, neignoruj ji</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Než kondenzátor vrátíš zpět, zkontroluj i gumové těsnění kolem něj – poškozené těsnění způsobuje únik vlhkého vzduchu do spotřebiče a zápach plísně.</div>
            </section>

            <section id="hadice">
              <h2>Kontrola a čištění odvodní hadice u odvětrávacích sušiček</h2>
              <p>Odvodní hadice odvádí horký vlhký vzduch (a drobné zbytky vlákna, které filtr nezachytí) ven z bytu. Pokud se v hadici hromadí vlákno nebo je hadice příliš dlouhá, zalomená nebo má příliš mnoho ohybů, proudění vzduchu se omezuje a sušička přehřívá.</p>
              <ul>
                <li><strong>Kontrola průchodnosti</strong> – jednou za sezónu odpoj hadici a propláchni nebo profoukni, zejména pokud vede přes delší úsek nebo více ohybů</li>
                <li><strong>Ústí ven</strong> – kontroluj mřížku nebo ventil v místě, kde hadice ústí ven, nesmí být ucpaná prachem, listím nebo hmyzím hnízdem</li>
                <li><strong>Délka a vedení hadice</strong> – co nejkratší a nejpřímější trasa, zbytečné ohyby snižují účinnost a zvyšují riziko zanesení</li>
              </ul>
            </section>

            <section id="kondenzat">
              <h2>Vyprazdňování a odvápňování nádržky na kondenzát</h2>
              <p>Pokud kondenzační sušička nemá přímé napojení na odpad, kondenzovaná voda se sbírá do odnímatelné nádržky. Tu je potřeba vyprazdňovat po každém cyklu nebo dvou, jinak sušička přestane fungovat nebo se automaticky vypne s upozorněním na plnou nádržku.</p>
              <ul>
                <li><strong>Vyprazdňování</strong> – po každém cyklu, případně podle indikátoru na displeji</li>
                <li><strong>Odvápňování</strong> – v oblastech s tvrdou vodou se ve výměníku i nádržce postupně usazuje vodní kámen, odvápnění roztokem na odvápnění (podobně jako u pračky) jednou za 2–3 měsíce udrží systém v dobrém stavu</li>
                <li><strong>Zápach z nádržky</strong> – pokud nádržka začne zapáchat, je vhodné ji vymyt teplou vodou se saponátem, případně roztokem s octem</li>
              </ul>
            </section>

            <section id="servis">
              <h2>Příznaky, že sušička potřebuje servis</h2>
              <ul>
                <li>Doba sušení se postupně prodlužuje, i když je filtr i kondenzátor vyčištěný</li>
                <li>Prádlo je po skončení standardního programu stále vlhké</li>
                <li>Spotřebič je hlučnější nebo víc vibruje než dříve</li>
                <li>Z přístroje je cítit spálenina nebo neobvyklý zápach</li>
                <li>Buben se zahřívá nadměrně nebo se sušička sama vypíná uprostřed cyklu</li>
              </ul>
              <p>Než zavoláš servis, zkontroluj filtr, kondenzátor i odvod vzduchu – velká část těchto příznaků zmizí po důkladném vyčištění. Pokud problém přetrvává, jde nejčastěji o opotřebený ventilátor, senzor vlhkosti nebo ohřevné těleso, což už vyžaduje odborný zásah.</p>
            </section>

            <section id="energie">
              <h2>Energetická náročnost a tipy na úsporu</h2>
              <p>Sušička patří mezi energeticky náročnější spotřebiče v domácnosti, ale spotřeba se dá výrazně ovlivnit správným používáním a údržbou.</p>
              <ul>
                <li><strong>Vyždímej prádlo na vyšší otáčky v pračce</strong> – méně vlhkosti v prádle znamená kratší a levnější sušení</li>
                <li><strong>Nepřeplňuj buben</strong> – příliš plný buben se suší nerovnoměrně a déle</li>
                <li><strong>Pravidelně čisti filtr a kondenzátor</strong> – zanesený spotřebič spotřebuje na stejnou náplň až o desítky procent více energie</li>
                <li><strong>Tepelně-čerpadlová sušička</strong> – vyšší pořizovací cena, ale výrazně nižší spotřeba energie v energetickém štítku oproti kondenzační s elektrickým ohřevem</li>
                <li><strong>Sušení v levnějším tarifu</strong> – pokud máš dvoutarifní sazbu, naplánuj sušení na levnější pásmo</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pravidelná údržba se vyplatí i finančně – zanesená sušička může spotřebovat klidně o 20–30 % více energie na stejné množství prádla.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jak často mám čistit chuňkový filtr sušičky?", a: "Chuňkový filtr je potřeba vyčistit po každém sušicím cyklu. Stačí setřít zachycené vlákno rukou nebo kartáčkem – zanesený filtr výrazně prodlužuje sušení a zvyšuje spotřebu energie." },
                  { q: "Jaký je rozdíl mezi kondenzační a odvětrávací sušičkou v údržbě?", a: "Odvětrávací sušička potřebuje pravidelnou kontrolu a čištění odvodní hadice, kterou vlhký vzduch odvádí ven z bytu. Kondenzační sušička naopak vyžaduje pravidelné čištění kondenzátoru (výměníku) a vyprazdňování nebo odvápňování nádržky na kondenzát." },
                  { q: "Jak často je potřeba čistit kondenzátor u kondenzační sušičky?", a: "Kondenzátor se obvykle doporučuje čistit jednou za 1–3 měsíce podle frekvence používání. Zanesený kondenzátor prachem a vláknem snižuje účinnost kondenzace, prodlužuje sušení a zvyšuje spotřebu elektřiny." },
                  { q: "Jak poznám, že sušička potřebuje servis?", a: "Signálem je výrazně delší doba sušení než dříve, prádlo zůstává vlhké i po standardním cyklu, sušička se nadměrně zahřívá nebo je hlučnější než obvykle, případně cítíš zápach spáleniny. V takovém případě zkontroluj filtr, kondenzátor a odvod vzduchu, případně přivolej servis." },
                  { q: "Vyplatí se odvlhčovat prádlo sušičkou, nebo je lepší věšet ho?", a: "Sušička je rychlejší a v zimě eliminuje riziko vlhkosti a plísně v bytě, ale má vyšší spotřebu energie než přirozené sušení. Tepelná čerpadlová sušička spotřebuje výrazně méně energie než kondenzační s elektrickým ohřevem a je dobrým kompromisem mezi rychlostí a úsporou." },
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
                <li><a href="#filtr">Čištění filtru</a></li>
                <li><a href="#typy">Kondenzační vs. odvětrávací</a></li>
                <li><a href="#kondenzator">Čištění kondenzátoru</a></li>
                <li><a href="#hadice">Odvodní hadice</a></li>
                <li><a href="#kondenzat">Nádržka na kondenzát</a></li>
                <li><a href="#servis">Kdy na servis</a></li>
                <li><a href="#energie">Energetická náročnost</a></li>
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
