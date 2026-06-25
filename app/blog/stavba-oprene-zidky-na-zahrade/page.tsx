import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stavba opěrné zídky na zahradě – materiály a postup",
  description: "Kdy je opěrná zídka potřeba, výběr materiálu, základy a odvodnění, postup stavby krok za krokem, maximální výška bez statika a údržba.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/stavba-oprene-zidky-na-zahrade" },
  openGraph: { title: "Stavba opěrné zídky na zahradě – materiály a postup", description: "Kdy je opěrná zídka potřeba, výběr materiálu, základy a odvodnění, postup stavby krok za krokem, maximální výška bez statika a údržba.", url: "https://www.domovniguru.cz/blog/stavba-oprene-zidky-na-zahrade", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-25T08:00:00Z", modifiedTime: "2026-06-25T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Stavba%20op%C4%9Brn%C3%A9%20z%C3%ADdky%20na%20zahrad%C4%9B%20%E2%80%93%20materi%C3%A1ly%20a%20postup&cat=blog", width: 1200, height: 630, alt: "Stavba opěrné zídky na zahradě – materiály a postup" }] },
  twitter: { card: "summary_large_image", title: "Stavba opěrné zídky na zahradě – materiály a postup", description: "Kdy je opěrná zídka potřeba, výběr materiálu, základy a odvodnění, postup stavby krok za krokem, maximální výška bez statika a údržba." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/stavba-oprene-zidky-na-zahrade#article", "headline": "Stavba opěrné zídky na zahradě – materiály a postup", "datePublished": "2026-06-25T08:00:00Z", "dateModified": "2026-06-25T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["opěrná zídka", "stavba opěrné zídky", "gabion na zahradě", "odvodnění opěrné zídky", "betonové tvárnice zídka", "svažitý terén zahrada"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Zahrada & terasa", "item": "https://www.domovniguru.cz/blog/kategorie/zahrada" }, { "@type": "ListItem", "position": 4, "name": "Stavba opěrné zídky na zahradě", "item": "https://www.domovniguru.cz/blog/stavba-oprene-zidky-na-zahrade" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Kdy je na zahradě potřeba postavit opěrnou zídku?", "acceptedAnswer": { "@type": "Answer", "text": "Opěrná zídka se hodí především na svažitém terénu, kde je potřeba vytvořit rovnou plochu pro terasu, záhon nebo trávník, a tam, kde hrozí sesuv zeminy. Použije se i k zpevnění okraje vyvýšeného záhonu nebo k oddělení dvou výškových úrovní zahrady." } }, { "@type": "Question", "name": "Jak vysokou opěrnou zídku můžu postavit bez statika?", "acceptedAnswer": { "@type": "Answer", "text": "V praxi se jako bezpečná hranice pro stavbu bez statického posouzení a bez nutnosti stavebního povolení uvádí zídka do výšky přibližně 1 metr. Nad touto výškou výrazně narůstá tlak zeminy na konstrukci a je vhodné nechat návrh posoudit odborníkem, v některých případech i ohlásit stavebnímu úřadu." } }, { "@type": "Question", "name": "Proč je drenáž za opěrnou zídkou tak důležitá?", "acceptedAnswer": { "@type": "Answer", "text": "Bez drenáže se za zídkou hromadí dešťová voda, která zvyšuje tlak na konstrukci a v zimě při zamrznutí může zídku poškodit nebo posunout. Drenážní vrstva štěrku s odvodňovací trubkou odvádí vodu pryč a je jedním z nejdůležitějších, často podceňovaných kroků celé stavby." } }, { "@type": "Question", "name": "Jaký materiál na opěrnou zídku je nejjednodušší pro stavbu svépomocí?", "acceptedAnswer": { "@type": "Answer", "text": "Pro stavbu svépomocí jsou nejpřístupnější skládané betonové tvárnice určené přímo na opěrné zídky – nevyžadují maltu a stačí je vrstvit na sebe podle návodu výrobce. Gabiony (drátěné koše plněné kamenem) jsou také relativně snadné na montáž, ale vyžadují kvalitní vyplnění kamenem." } }] }] };

const RELATED = [
  { title: "Jak postavit vyvýšený záhon – dřevěný nebo z betonu", href: "/blog/vyvyseny-zahon-postup", read: "6 min" },
  { title: "Odvodnění zahrady – jak řešit přebytečnou dešťovou vodu", href: "/blog/odvodneni-zahrady-pri-destich", read: "7 min" },
  { title: "Jak vybudovat skalku na zahradě krok za krokem", href: "/blog/jak-vybudovat-skalku", read: "6 min" },
  { title: "Jak postavit zahradní domek na nářadí svépomocí", href: "/blog/jak-postavit-zahradni-domek-na-naradi", read: "7 min" },
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
              <span>Stavba opěrné zídky</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Stavba opěrné zídky na zahradě</h1>
              <p className="article-lead">Svažitý pozemek nemusí být problém – opěrná zídka z něj dokáže udělat využitelný prostor pro terasu, záhon nebo trávník. Klíčem k dlouhé životnosti je správný materiál, kvalitní základy a hlavně odvodnění, na které se nejčastěji zapomíná. Tady je kompletní postup od plánování po hotovou zídku.</p>
              <div className="article-meta-row"><span>Aktualizováno: 25. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#kdy">Kdy je opěrná zídka potřeba</a></li>
                <li><a href="#material">Výběr materiálu</a></li>
                <li><a href="#zaklady">Základy a odvodnění</a></li>
                <li><a href="#postup">Postup stavby krok za krokem</a></li>
                <li><a href="#vyska">Maximální výška bez statika a povolení</a></li>
                <li><a href="#udrzba">Údržba opěrné zídky</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="kdy">
              <h2>Kdy je na zahradě opěrná zídka potřeba</h2>
              <p>Opěrná zídka přichází ke slovu, kdykoli potřebuješ udržet rozdíl výšek mezi dvěma úrovněmi terénu, aniž by se zemina postupně sesouvala nebo erodovala.</p>
              <ul>
                <li><strong>Svažitý terén</strong> – nejčastější důvod; zídka vytvoří rovnou plošinu na pozemku, který by jinak byl pro terasu nebo záhon nevyužitelný</li>
                <li><strong>Zpevnění terasy</strong> – terasa umístěná na okraji svahu potřebuje oporu, jinak hrozí postupné sesouvání podkladu pod dlažbou</li>
                <li><strong>Vymezení vyvýšeného záhonu</strong> – nižší varianta opěrné zídky funguje stejně jako stěna vyvýšeného záhonu, viz článek <Link href="/blog/vyvyseny-zahon-postup" style={{ color: "#2a6496", textDecoration: "underline" }}>jak postavit vyvýšený záhon</Link></li>
                <li><strong>Ochrana proti erozi</strong> – na svahu, kde déšť postupně odplavuje ornici, zídka zastaví pohyb zeminy a zabrání jejímu hromadění na nesprávných místech</li>
                <li><strong>Estetické terasování</strong> – rozdělení velkého svahu do několika menších stupňů (teras) propojených zídkami usnadňuje pohyb po zahradě i údržbu</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Než začneš stavět, pozoruj, kam při dešti odtéká voda po svahu – opěrná zídka musí počítat s tím, že bude muset tuto vodu zvládnout odvést, jinak ji časem poškodí.</div>
            </section>

            <section id="material">
              <h2>Výběr materiálu na opěrnou zídku</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Materiál</th><th>Náročnost stavby</th><th>Vzhled</th><th>Orientační cena</th></tr></thead>
                  <tbody>
                    <tr><td>Přírodní kámen</td><td>Vysoká, vyžaduje zkušenost</td><td>Přírodní, rustikální</td><td>Vyšší</td></tr>
                    <tr><td>Betonové tvárnice</td><td>Nízká až střední, vhodné pro svépomoc</td><td>Moderní, jednotný vzhled</td><td>Střední</td></tr>
                    <tr><td>Gabion</td><td>Střední, montáž košů a plnění kamenem</td><td>Industriální, moderní</td><td>Střední</td></tr>
                    <tr><td>Dřevo (kulatina, hranoly)</td><td>Nízká až střední</td><td>Přírodní, teplý vzhled</td><td>Nižší až střední</td></tr>
                  </tbody>
                </table>
              </div>
              <h3>Přírodní kámen</h3>
              <p>Lomový kámen nebo opracované kamenné bloky dávají zídce nejpřirozenější vzhled a prakticky neomezenou životnost. Stavba je ale náročná na zkušenost – kameny se musí skládat tak, aby se vzájemně zpevňovaly (vazba), a u vyšších zídek se často kombinuje se zalitím betonem nebo maltou.</p>
              <h3>Betonové tvárnice na opěrné zdi</h3>
              <p>Speciální skládané tvárnice navržené přímo pro opěrné zídky jsou nejpřístupnější volbou pro stavbu svépomocí. Mají na spodní straně výstupky nebo zámky, díky kterým do sebe jednotlivé vrstvy zapadají bez nutnosti malty, a navíc mají často mírný sklon dozadu, který zlepšuje stabilitu proti tlaku zeminy.</p>
              <h3>Gabion</h3>
              <p>Gabion je drátěný koš naplněný kamenem – kombinuje pevnost klasické zídky s propustností pro vodu, což snižuje nároky na odvodnění (i když drenáž za gabionem se přesto doporučuje). Vzhledově se hodí do moderních i industriálních zahrad.</p>
              <h3>Dřevo</h3>
              <p>Dřevěné kulatiny nebo hranoly zaražené svisle nebo skládané horizontálně jsou levnou a rychlou variantou, vhodnou zejména pro nižší zídky do 60–80 cm. Nevýhodou je kratší životnost ve srovnání s kamenem nebo betonem – dřevo v přímém styku se zeminou postupně podléhá vlhkosti a hnilobě, i přes ochranné nátěry.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud chceš nejnižší náročnost stavby a zároveň solidní výsledek, sáhni po systému skládaných betonových tvárnic určených přímo pro opěrné zídky – výrobci k nim dodávají přesný návod včetně potřebné drenáže.</div>
            </section>

            <section id="zaklady">
              <h2>Základy a odvodnění – klíčový krok</h2>
              <p>Bez ohledu na zvolený materiál platí jedno univerzální pravidlo: kvalitní základ a funkční odvodnění rozhodují o tom, jestli zídka vydrží desítky let, nebo se za pár sezón posune a popraská.</p>
              <h3>Základy</h3>
              <ul>
                <li><strong>Hloubka výkopu</strong> – základový pás se hloubí pod úroveň nezámrzné hloubky, v ČR obvykle 60–80 cm, podle lokality a typu zídky</li>
                <li><strong>Zhutněný štěrkový podklad</strong> – vrstva drceného kamene (frakce 16–32 mm) zhutněná vibrační deskou tvoří stabilní a propustný základ</li>
                <li><strong>Vyrovnání první řady</strong> – první vrstva tvárnic nebo kamenů musí být dokonale vodorovná, jakákoli nerovnost se kumuluje směrem nahoru</li>
              </ul>
              <h3>Odvodnění – proč je klíčové</h3>
              <p>Zemina za zídkou při dešti nasává vodu jako houba. Pokud voda nemá kam odtékat, hromadí se a vytváří tlak na konstrukci – tzv. hydrostatický tlak. V zimě navíc zamrzlá voda zvětšuje svůj objem a může zídku doslova vytlačit nebo rozlomit.</p>
              <ul>
                <li><strong>Drenážní vrstva štěrku</strong> – za celou zídkou se ukládá vrstva hrubého štěrku tloušťky alespoň 20–30 cm, která umožní vodě volně protékat</li>
                <li><strong>Drenážní trubka (perforovaná)</strong> – uložená u základu zídky, sbírá vodu ze štěrkové vrstvy a odvádí ji mimo zídku, ideálně se spádem do vsakovací jámy nebo dešťové kanalizace</li>
                <li><strong>Geotextilie</strong> – odděluje štěrkovou drenáž od zeminy, zabraňuje zanesení drenáže jemnými částicemi půdy</li>
                <li><strong>Odvodňovací otvory</strong> – u nižších zídek z tvárnic nebo gabionu lze řešit i jednoduššími průchozími otvory ve spodní řadě</li>
              </ul>
              <p>Pro komplexní řešení odtoku vody na celé zahradě, nejen za zídkou, se vyplatí projít i článek <Link href="/blog/odvodneni-zahrady-pri-destich" style={{ color: "#2a6496", textDecoration: "underline" }}>odvodnění zahrady při deštích</Link>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Nikdy nešetři na drenáži, i kdyby to znamenalo menší zídku nebo levnější obkladový materiál. Oprava zborcené zídky kvůli nahromaděné vodě vyjde mnohem dráž než pořádná drenáž hned na začátku.</div>
            </section>

            <section id="postup">
              <h2>Postup stavby krok za krokem</h2>
              <ul>
                <li><strong>1. Vytyčení a návrh</strong> – urči přesnou linii a výšku zídky, zohledni spád terénu a kam povede odtok vody</li>
                <li><strong>2. Výkop základového pásu</strong> – do nezámrzné hloubky, šířka podle tloušťky zvoleného materiálu plus rezerva pro drenáž</li>
                <li><strong>3. Zhutnění podkladu</strong> – vrstva štěrku zhutněná vibrační deskou, vyrovnaná do roviny pomocí vodováhy nebo nivelačního přístroje</li>
                <li><strong>4. Položení první řady</strong> – nejdůležitější krok celé stavby, první vrstva musí být přesně vodorovná a stabilní</li>
                <li><strong>5. Instalace drenáže</strong> – geotextilie, drenážní trubka a štěrková vrstva za rostoucí zídkou, vrstva se postupně doplňuje s každou další řadou tvárnic nebo kamenů</li>
                <li><strong>6. Vrstvení dalších řad</strong> – podle systému (tvárnice se zámky, kámen s vazbou, gabion po patrech), kontrola vodorovnosti při každé vrstvě</li>
                <li><strong>7. Zásyp a zhutnění za zídkou</strong> – zemina za drenážní vrstvou se zasypává a zhutňuje po menších vrstvách, ne najednou</li>
                <li><strong>8. Dokončovací úprava povrchu</strong> – krycí desky na vrchní řadu, případná výsadba na terénu nad zídkou nebo v jejím okolí</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> U vyšších nebo delších zídek (nad 5–6 metrů) je vhodné rozdělit konstrukci dilatačními spárami po 4–5 metrech – zabrání to vzniku trhlin při sezónním pohybu zeminy.</div>
            </section>

            <section id="vyska">
              <h2>Maximální výška zídky bez statika a povolení</h2>
              <p>Čím vyšší zídka, tím větší tlak zeminy na konstrukci – a tlak roste neúměrně rychle s výškou, ne lineárně. Proto existuje praktická hranice, do které lze zídku navrhnout a postavit bez odborného statického posouzení.</p>
              <ul>
                <li><strong>Do cca 1 metru</strong> – obecně považováno za bezpečnou hranici pro stavbu svépomocí podle standardních návodů výrobců tvárnic, bez nutnosti statika</li>
                <li><strong>1–2 metry</strong> – doporučuje se konzultace s odborníkem nebo statikem, často i s ohledem na místní stavební předpisy a možnou ohlašovací povinnost</li>
                <li><strong>Nad 2 metry</strong> – vyžaduje odborný statický návrh, často i samostatné stavební povolení nebo ohlášení, podle konkrétní situace a místní vyhlášky</li>
              </ul>
              <p>Konkrétní pravidla pro ohlašování a povolování staveb se mohou lišit podle lokality a účelu zídky (např. v blízkosti hranice pozemku nebo veřejné komunikace), proto se vyplatí ověřit aktuální požadavky na místním stavebním úřadě ještě před zahájením stavby vyšší zídky.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud potřebuješ vyrovnat větší výškový rozdíl, často je bezpečnější a levnější řešení postavit dvě nižší terasované zídky s odstupem než jednu vysokou – snižuje to nároky na statiku i na odvodnění.</div>
            </section>

            <section id="udrzba">
              <h2>Údržba opěrné zídky</h2>
              <ul>
                <li><strong>Kontrola odtoku vody</strong> – po silných dešťových srážkách zkontroluj, jestli drenážní trubka skutečně odvádí vodu a není ucpaná listím nebo zeminou</li>
                <li><strong>Sledování trhlin a posunů</strong> – drobné praskliny nebo vychýlení jednotlivých prvků signalizují problém s tlakem zeminy nebo odvodněním, řeš je co nejdřív</li>
                <li><strong>Čištění povrchu</strong> – mech a řasy na kamenných nebo betonových zídkách lze odstranit tlakovou vodou nebo roztokem na bázi chlornanu</li>
                <li><strong>Kontrola dřevěných zídek</strong> – u dřevěných konstrukcí sleduj známky hniloby u báze, kde je dřevo v přímém styku s vlhkou zeminou</li>
                <li><strong>Vegetace v okolí</strong> – kořeny stromů a velkých keřů vysazených příliš blízko zídky mohou časem narušit konstrukci, vysazuj je s dostatečným odstupem</li>
              </ul>
              <p>Pravidelná, byť jen vizuální kontrola jednou nebo dvakrát ročně (ideálně po zimě a po období dešťů) odhalí problémy včas, než se z malé závady stane nákladná oprava celé konstrukce.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud plánuješ na zídku nebo k ní vysadit popínavé rostliny, vybírej druhy s mírným kořenovým systémem – agresivní dřeviny dokážou kořeny postupně rozrušit i pevnou betonovou nebo kamennou konstrukci.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Kdy je na zahradě potřeba postavit opěrnou zídku?", a: "Opěrná zídka se hodí především na svažitém terénu, kde je potřeba vytvořit rovnou plochu pro terasu, záhon nebo trávník, a tam, kde hrozí sesuv zeminy. Použije se i k zpevnění okraje vyvýšeného záhonu nebo k oddělení dvou výškových úrovní zahrady." },
                  { q: "Jak vysokou opěrnou zídku můžu postavit bez statika?", a: "V praxi se jako bezpečná hranice pro stavbu bez statického posouzení a bez nutnosti stavebního povolení uvádí zídka do výšky přibližně 1 metr. Nad touto výškou výrazně narůstá tlak zeminy na konstrukci a je vhodné nechat návrh posoudit odborníkem, v některých případech i ohlásit stavebnímu úřadu." },
                  { q: "Proč je drenáž za opěrnou zídkou tak důležitá?", a: "Bez drenáže se za zídkou hromadí dešťová voda, která zvyšuje tlak na konstrukci a v zimě při zamrznutí může zídku poškodit nebo posunout. Drenážní vrstva štěrku s odvodňovací trubkou odvádí vodu pryč a je jedním z nejdůležitějších, často podceňovaných kroků celé stavby." },
                  { q: "Jaký materiál na opěrnou zídku je nejjednodušší pro stavbu svépomocí?", a: "Pro stavbu svépomocí jsou nejpřístupnější skládané betonové tvárnice určené přímo na opěrné zídky – nevyžadují maltu a stačí je vrstvit na sebe podle návodu výrobce. Gabiony (drátěné koše plněné kamenem) jsou také relativně snadné na montáž, ale vyžadují kvalitní vyplnění kamenem." },
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
                <li><a href="#kdy">Kdy je zídka potřeba</a></li>
                <li><a href="#material">Výběr materiálu</a></li>
                <li><a href="#zaklady">Základy a odvodnění</a></li>
                <li><a href="#postup">Postup stavby</a></li>
                <li><a href="#vyska">Maximální výška</a></li>
                <li><a href="#udrzba">Údržba</a></li>
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
