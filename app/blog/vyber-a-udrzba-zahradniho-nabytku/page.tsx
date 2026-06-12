import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak vybrat a udržovat zahradní nábytek, aby vydržel roky",
  description: "Dřevo, ratan, kov nebo plast – srovnání materiálů zahradního nábytku a jak o něj pečovat během sezóny i v zimě.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/vyber-a-udrzba-zahradniho-nabytku" },
  openGraph: { title: "Jak vybrat a udržovat zahradní nábytek, aby vydržel roky", description: "Srovnání materiálů zahradního nábytku – dřevo, ratan, hliník, ocel i plast – a jak o něj pečovat.", url: "https://www.domovniguru.cz/blog/vyber-a-udrzba-zahradniho-nabytku", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-12T08:00:00Z", modifiedTime: "2026-06-12T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20vybrat%20a%20udr%C5%BEovat%20zahradn%C3%AD%20n%C3%A1bytek%2C%20aby%20vydr%C5%BEel%20roky&cat=blog", width: 1200, height: 630, alt: "Jak vybrat a udržovat zahradní nábytek, aby vydržel roky" }] },
  twitter: { card: "summary_large_image", title: "Jak vybrat a udržovat zahradní nábytek, aby vydržel roky", description: "Srovnání materiálů zahradního nábytku a jak o něj pečovat během sezóny i v zimě." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/vyber-a-udrzba-zahradniho-nabytku#article", "headline": "Jak vybrat a udržovat zahradní nábytek, aby vydržel roky", "datePublished": "2026-06-12T08:00:00Z", "dateModified": "2026-06-12T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["zahradní nábytek", "výběr zahradního nábytku", "ratanový nábytek", "hliníkový zahradní nábytek", "zahradní nábytek z dřeva"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Zahrada & terasa", "item": "https://www.domovniguru.cz/blog/kategorie/zahrada" }, { "@type": "ListItem", "position": 4, "name": "Výběr a údržba zahradního nábytku", "item": "https://www.domovniguru.cz/blog/vyber-a-udrzba-zahradniho-nabytku" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jaký materiál zahradního nábytku je nejlepší?", "acceptedAnswer": { "@type": "Answer", "text": "Neexistuje univerzálně nejlepší materiál – záleží na umístění a péči, kterou jste ochotni mu věnovat. Hliník je nejpraktičtější (lehký, nekoroduje, minimální údržba), masivní dřevo nejhezčí ale nejnáročnější, umělý ratan dobrý kompromis mezi vzhledem a péčí a plast nejlevnější volba na sezónní použití." } }, { "@type": "Question", "name": "Vydrží zahradní nábytek přes zimu venku?", "acceptedAnswer": { "@type": "Answer", "text": "Hliníkový a ocelový nábytek s kvalitní povrchovou úpravou venku přes zimu vydrží bez problémů, pokud má krycí plachtu. Dřevo, umělý ratan a polstrování je lepší uklidit do garáže, sklepa nebo zahradního domku, protože mráz a vlhko jim škodí nejvíc." } }, { "@type": "Question", "name": "Jaký je rozdíl mezi přírodním a umělým ratanem?", "acceptedAnswer": { "@type": "Answer", "text": "Přírodní ratan je rostlinné vlákno, které vypadá hezky, ale špatně snáší déšť a UV záření, proto se hodí jen na krytou terasu nebo do interiéru. Umělý ratan (technoratan, polyratan) je pletivo z polyetylenu na hliníkové kostře, odolává dešti i slunci a je vhodný do venkovních podmínek celoročně." } }, { "@type": "Question", "name": "Jak vybrat polstrování, které vydrží venku?", "acceptedAnswer": { "@type": "Answer", "text": "Hledejte látky označené jako outdoor nebo venkovní textilie, ideálně z akrylových vláken s UV stabilizací a vodoodpudivou úpravou. Výplň by měla být z rychle vysychající pěny s odvodňovacími otvory, aby polštáře po dešti nezůstaly promáčené." } }, { "@type": "Question", "name": "Jak často je potřeba ošetřovat zahradní nábytek?", "acceptedAnswer": { "@type": "Answer", "text": "Dřevo potřebuje ošetření impregnací nebo olejem jednou až dvakrát za rok, nejlépe na jaře a na podzim. Kov stačí kontrolovat na poškození laku jednou za sezónu a opravit drobné škrábance. Plast a umělý ratan vyžadují jen běžné umytí, ideálně dvakrát až třikrát za sezónu." } }] }] };

const RELATED = [
  { title: "Jak ošetřit zahradní nábytek – dřevo, kov, plast a ratan", href: "/blog/osetrit-zahradni-nabytek", read: "5 min" },
  { title: "Jak zařídit terasu na balkóně", href: "/blog/terasa-na-balkone", read: "5 min" },
  { title: "Jak vybrat zahradní gril – plynový nebo uhlíkový", href: "/blog/vybrat-zahradni-gril", read: "5 min" },
  { title: "Jak ošetřit dřevěnou terasu před zimou", href: "/blog/drevo-terasa-zima", read: "4 min" },
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
              <span>Výběr a údržba zahradního nábytku</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak vybrat a udržovat zahradní nábytek, aby vydržel roky</h1>
              <p className="article-lead">Stůl a židle na terasu vydrží pět let, nebo patnáct – rozdíl většinou nedělá cena, ale materiál a to, jak dobře sedí k vašim podmínkám. Než koupíte další set, který za dva roky skončí na skládce, podívejte se, čím se jednotlivé materiály liší a na co si dát pozor.</p>
              <div className="article-meta-row"><span>Aktualizováno: 12. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#materialy">Srovnání materiálů</a></li>
                <li><a href="#jak-vybrat">Jak vybrat podle umístění</a></li>
                <li><a href="#polstrovani">Polstrování a textilie</a></li>
                <li><a href="#skladaci">Skládací vs. pevný nábytek</a></li>
                <li><a href="#udrzba">Údržba podle materiálu</a></li>
                <li><a href="#styly">Trendy a styly</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="materialy">
              <h2>Srovnání materiálů zahradního nábytku</h2>
              <p>Každý materiál má svoje silné a slabé stránky. Než se rozhodnete, zvažte nejen vzhled, ale i to, kolik času jste ochotni investovat do péče a kde nábytek bude celý rok stát.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Materiál</th><th>Výhody</th><th>Nevýhody</th><th>Orientační cena</th></tr></thead>
                  <tbody>
                    <tr><td>Masivní dřevo</td><td>Přirozený vzhled, teplý dotek, robustnost</td><td>Náročná údržba, citlivé na vlhko</td><td>4 000–25 000 Kč (set)</td></tr>
                    <tr><td>Umělý ratan / technoratan</td><td>Odolný vůči UV a dešti, nízká údržba, moderní vzhled</td><td>Při poškození pletiva náročná oprava</td><td>5 000–20 000 Kč (set)</td></tr>
                    <tr><td>Hliník</td><td>Lehký, nekoroduje, celoročně venku</td><td>V létě se zahřívá, méně tlumí hluk</td><td>3 000–15 000 Kč (set)</td></tr>
                    <tr><td>Ocel s práškovým lakem</td><td>Velmi stabilní, masivní vzhled</td><td>Těžký, při poškrábání hrozí koroze</td><td>3 500–18 000 Kč (set)</td></tr>
                    <tr><td>Plast / recyklovaný plast</td><td>Nejlevnější, lehký, bezúdržbový</td><td>Křehne na slunci, méně reprezentativní</td><td>800–6 000 Kč (set)</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Masivní dřevo (nejčastěji akát, teak nebo eukalyptus) má nejdelší tradici a vypadá nejpřirozeněji, ale bez pravidelné péče šedne a praská. Umělý ratan a hliník jsou dnes nejpopulárnější kombinace pro moderní terasy – kombinují nízkou hmotnost s minimální údržbou. Ocel je naopak volbou pro ty, kteří chtějí masivnější, „neutečitelný" nábytek, který nehoupe ani ve větru. Plast má smysl tam, kde řešíte hlavně rozpočet nebo sezónní vybavení, které se přes zimu schová.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Teak a akát patří mezi nejodolnější dřeviny díky vysokému obsahu přírodních olejů – snesou i menší zanedbání lépe než smrk nebo borovice, které se musí ošetřovat pravidelněji.</div>
            </section>

            <section id="jak-vybrat">
              <h2>Jak vybrat podle umístění</h2>
              <h3>Krytá terasa vs. otevřená zahrada</h3>
              <p>Pokud má nábytek stát pod pergolou, markýzou nebo střechou terasy, máte volnější ruce – ochrana před deštěm a přímým sluncem výrazně prodlužuje životnost prakticky jakéhokoliv materiálu. Na krytém místě si můžete dovolit i přírodní ratan nebo dřevo s méně častou impregnací.</p>
              <p>Na otevřené zahradě, kde nábytek čelí dešti, slunci i mrazu bez ochrany, se vyplatí sázet na materiály s nejnižšími nároky na péči – umělý ratan, hliník nebo ocel s kvalitním práškovým lakem. Dřevo zde funguje, ale počítejte s ošetřením minimálně dvakrát ročně.</p>
              <h3>Slunná vs. stinná poloha</h3>
              <p>Na slunných terasách se nejvíc projevuje UV degradace – plast křehne a praská, barevné textilie blednou a přírodní ratan vysychá a štípe se. Tady je hliník nebo umělý ratan s UV stabilizací jasnou volbou. Ve stínu naopak hrozí spíš vlhkost a plíseň, takže je důležité zajistit cirkulaci vzduchu pod nábytkem (nožky, ne plný sokl) a u dřeva dbát na kvalitní impregnaci proti houbám a plísním.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud terasu během dne ofukuje vítr, zvolte těžší materiál (ocel, masivní dřevo) nebo nábytek s nižším těžištěm – lehké hliníkové židle se mohou na větru převrhávat.</div>
            </section>

            <section id="polstrovani">
              <h2>Polstrování a textilie</h2>
              <p>Polstrování často rozhoduje o pohodlí víc než samotná konstrukce, ale je to také nejcitlivější část celého setu. Při výběru se zaměřte na dvě věci: materiál potahu a typ výplně.</p>
              <ul>
                <li><strong>Outdoor textilie</strong> – látky vyrobené přímo pro venkovní použití (často akryl nebo polyester s UV a vodoodpudivou úpravou) snesou déšť i slunce bez ztráty barvy a bez plísně. Poznáte je podle značení „outdoor" nebo „venkovní textilie".</li>
                <li><strong>Běžné dekorační látky</strong> – levnější, ale na slunci rychle vyblednou a po dešti zůstávají vlhké výrazně déle, což podporuje plíseň.</li>
                <li><strong>Výplň polštářů</strong> – kvalitní venkovní pěna má perforaci nebo odvodňovací kanálky, takže voda po dešti rychle odteče a polštář nezůstává namočený celé dny.</li>
                <li><strong>Snímatelné potahy</strong> – velká výhoda, protože je můžete přes zimu vyprat a uklidit, zatímco výplň zůstává chráněná.</li>
              </ul>
              <p>Pokud polstrování necháváte venku celou sezónu, vyplatí se investovat i do ochranných krytů nebo alespoň skládacího boxu, kam polštáře přes noc nebo při dešti uložíte.</p>
            </section>

            <section id="skladaci">
              <h2>Skládací vs. pevný nábytek a úložný prostor přes zimu</h2>
              <p>Skládací (a stohovatelný) nábytek má jednu velkou výhodu – v zimě, nebo když ho zrovna nepotřebujete, zabere jen zlomek místa. Skládací židle z hliníku nebo plastu se srovnají na sebe do sloupce, skládací stoly se opřou o stěnu. To je ideální, pokud nemáte garáž ani zahradní domek a nábytek musíte přes zimu schovat do sklepa nebo na balkón.</p>
              <p>Pevný (nestohovatelný) nábytek bývá stabilnější, masivnější a často odolnější – ocelové nebo dřevěné sety s pevnou konstrukcí lépe snášejí každodenní používání a vydrží déle bez uvolňování spojů. Pokud máte kde nábytek přes zimu uskladnit nebo má zůstávat venku celoročně (hliník, ocel s lakem), pevná konstrukce je lepší volbou z hlediska životnosti.</p>
              <p>Při rozhodování si tedy odpovězte na jednu otázku: máte reálně kam nábytek na zimu uklidit? Pokud ne, skládací varianta nebo materiál odolný celoročnímu venkovnímu pobytu (hliník, umělý ratan s krycí plachtou) ušetří starosti i prostor.</p>
            </section>

            <section id="udrzba">
              <h2>Údržba podle materiálu – stručně</h2>
              <p>Výběr materiálu je jen polovina úspěchu – druhá polovina je pravidelná, byť minimální péče. Stručný přehled, jak na to:</p>
              <ul>
                <li><strong>Masivní dřevo</strong> – jednou až dvakrát ročně přebrousit a ošetřit olejem nebo lazurou, jinak šedne a popraská.</li>
                <li><strong>Umělý ratan</strong> – stačí umytí mýdlovou vodou, vyhněte se agresivním chemikáliím, které mohou poškodit pletivo.</li>
                <li><strong>Hliník</strong> – minimální péče, jen otřít prach a zkontrolovat, zda se nedrolí povrchová úprava u svárů.</li>
                <li><strong>Ocel s práškovým lakem</strong> – kontrolovat škrábance a hned je domalovat, jinak hrozí koroze.</li>
                <li><strong>Plast</strong> – umytí, případně ochrana voskem proti vysychání a praskání na slunci.</li>
              </ul>
              <p>Konkrétní postupy, doporučené přípravky a postup přípravy na zimu najdete v podrobném návodu na <Link href="/blog/osetrit-zahradni-nabytek" style={{ color: "#2a6496", textDecoration: "underline" }}>údržbu zahradního nábytku</Link>, kde rozebíráme každý materiál krok za krokem.</p>
            </section>

            <section id="styly">
              <h2>Trendy a styly zahradního nábytku</h2>
              <h3>Moderní styl</h3>
              <p>Čisté linie, kombinace hliníku a umělého ratanu, neutrální barvy (antracit, šedá, písková). Modulové sedací sestavy, které lze přeskupovat podle potřeby. Hodí se k novostavbám a terasám s minimalistickým designem.</p>
              <h3>Rustikální styl</h3>
              <p>Masivní dřevo (akát, smrk, recyklované palety), často v kombinaci s kovem. Hrubší povrchy, viditelné textury dřeva, teplé odstíny. Vhodný k zahradám u staveb s přírodním charakterem nebo dřevěným prvkům na terase.</p>
              <h3>Minimalistický styl</h3>
              <p>Jednoduché geometrické tvary, jedna nebo dvě barvy, málo doplňků. Často hliník nebo ocel v matných odstínech, doplněné jednobarevným polstrováním. Cílem je, aby nábytek nepřitahoval zbytečnou pozornost a působil vzdušně.</p>
              <p>Ať vybíráte jakýkoliv styl, vyplatí se zvolit nadčasové barvy a tvary – trendy se mění rychleji než životnost kvalitního nábytku, a neutrální set se snáz doplní novými doplňky než celý znovu obměňuje.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jaký materiál zahradního nábytku je nejlepší?", a: "Neexistuje univerzálně nejlepší materiál – záleží na umístění a péči, kterou jste ochotni mu věnovat. Hliník je nejpraktičtější (lehký, nekoroduje, minimální údržba), masivní dřevo nejhezčí ale nejnáročnější, umělý ratan dobrý kompromis mezi vzhledem a péčí a plast nejlevnější volba na sezónní použití." },
                  { q: "Vydrží zahradní nábytek přes zimu venku?", a: "Hliníkový a ocelový nábytek s kvalitní povrchovou úpravou venku přes zimu vydrží bez problémů, pokud má krycí plachtu. Dřevo, umělý ratan a polstrování je lepší uklidit do garáže, sklepa nebo zahradního domku, protože mráz a vlhko jim škodí nejvíc." },
                  { q: "Jaký je rozdíl mezi přírodním a umělým ratanem?", a: "Přírodní ratan je rostlinné vlákno, které vypadá hezky, ale špatně snáší déšť a UV záření, proto se hodí jen na krytou terasu nebo do interiéru. Umělý ratan (technoratan, polyratan) je pletivo z polyetylenu na hliníkové kostře, odolává dešti i slunci a je vhodný do venkovních podmínek celoročně." },
                  { q: "Jak vybrat polstrování, které vydrží venku?", a: "Hledejte látky označené jako outdoor nebo venkovní textilie, ideálně z akrylových vláken s UV stabilizací a vodoodpudivou úpravou. Výplň by měla být z rychle vysychající pěny s odvodňovacími otvory, aby polštáře po dešti nezůstaly promáčené." },
                  { q: "Jak často je potřeba ošetřovat zahradní nábytek?", a: "Dřevo potřebuje ošetření impregnací nebo olejem jednou až dvakrát za rok, nejlépe na jaře a na podzim. Kov stačí kontrolovat na poškození laku jednou za sezónu a opravit drobné škrábance. Plast a umělý ratan vyžadují jen běžné umytí, ideálně dvakrát až třikrát za sezónu." },
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
                <li><a href="#materialy">Srovnání materiálů</a></li>
                <li><a href="#jak-vybrat">Jak vybrat podle umístění</a></li>
                <li><a href="#polstrovani">Polstrování a textilie</a></li>
                <li><a href="#skladaci">Skládací vs. pevný nábytek</a></li>
                <li><a href="#udrzba">Údržba podle materiálu</a></li>
                <li><a href="#styly">Trendy a styly</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/zahrada" className="sidebar-cat-link">🌿 Zahrada & terasa<span>Více článků →</span></Link>
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
