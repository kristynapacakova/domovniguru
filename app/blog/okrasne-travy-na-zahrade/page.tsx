import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Okrasné trávy na zahradě: výběr a péče",
  description: "Proč pěstovat okrasné trávy, jaké druhy vybrat, jak je kombinovat s trvalkami, kdy a jak je řezat, dělit trsy a chránit citlivější druhy přes zimu.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/okrasne-travy-na-zahrade" },
  openGraph: { title: "Okrasné trávy na zahradě: výběr a péče", description: "Proč pěstovat okrasné trávy, jaké druhy vybrat, jak je kombinovat s trvalkami, kdy a jak je řezat, dělit trsy a chránit citlivější druhy přes zimu.", url: "https://www.domovniguru.cz/blog/okrasne-travy-na-zahrade", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-25T08:00:00Z", modifiedTime: "2026-06-25T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Okrasn%C3%A9%20tr%C3%A1vy%20na%20zahrad%C4%9B%3A%20v%C3%BDb%C4%9Br%20a%20p%C3%A9%C4%8De&cat=blog", width: 1200, height: 630, alt: "Okrasné trávy na zahradě: výběr a péče" }] },
  twitter: { card: "summary_large_image", title: "Okrasné trávy na zahradě: výběr a péče", description: "Proč pěstovat okrasné trávy, jaké druhy vybrat, jak je kombinovat s trvalkami, kdy a jak je řezat, dělit trsy a chránit citlivější druhy přes zimu." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/okrasne-travy-na-zahrade#article", "headline": "Okrasné trávy na zahradě: výběr a péče", "datePublished": "2026-06-25T08:00:00Z", "dateModified": "2026-06-25T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["okrasné trávy", "ozdobnice", "kostřava", "třtina", "pampová tráva", "péče o okrasné trávy", "dělení trsů"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Zahrada & terasa", "item": "https://www.domovniguru.cz/blog/kategorie/zahrada" }, { "@type": "ListItem", "position": 4, "name": "Okrasné trávy na zahradě", "item": "https://www.domovniguru.cz/blog/okrasne-travy-na-zahrade" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Kdy se řežou okrasné trávy?", "acceptedAnswer": { "@type": "Answer", "text": "Většina okrasných trav se neřeže na podzim, ale až na konci zimy nebo na začátku března, krátce před nástupem nového růstu. Suché stébla přes zimu chrání korunu trsu před mrazem a navíc vypadají efektně i v zasněžené zahradě." } }, { "@type": "Question", "name": "Jak často je potřeba dělit trsy okrasných trav?", "acceptedAnswer": { "@type": "Answer", "text": "Většina trsnatých okrasných trav se dělí jednou za 3–5 let, když začne střed trsu odumírat nebo trs příliš zhoustne a kvete méně. Dělení se provádí na začátku jara, jakmile je vidět nový růst, vykopáním celého trsu a rozdělením na menší části." } }, { "@type": "Question", "name": "Které okrasné trávy potřebují přes zimu zazimovat?", "acceptedAnswer": { "@type": "Answer", "text": "Citlivější druhy jako pampová tráva (Cortaderia) nebo některé teplomilnější ozdobnice potřebují v chladnějších oblastech ochranu – stažení listů do svazku, mulčování báze a případně přikrytí netkanou textilií. Mrazuvzdorné druhy jako kostřava nebo třtina zimu v ČR zvládají bez ochrany." } }] }] };

const RELATED = [
  { title: "Pěstování květin na řez", href: "/blog/pestovani-kvetin-na-rez", read: "5 min" },
  { title: "Jak vybudovat skalku na zahradě krok za krokem", href: "/blog/jak-vybudovat-skalku", read: "6 min" },
  { title: "Ochrana rostlin před zimou – co zakrýt", href: "/blog/ochrana-rostlin-pred-zimou", read: "6 min" },
  { title: "Jaké rostliny vysadit do stínu na zahradě", href: "/blog/rostliny-do-stinu-na-zahrade", read: "5 min" },
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
              <span>Okrasné trávy na zahradě</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 4 min čtení</span>
              </div>
              <h1 className="article-h1">Okrasné trávy na zahradě: výběr a péče</h1>
              <p className="article-lead">Okrasné trávy přinesou do zahrady pohyb, zvuk a celoroční strukturu, aniž by vyžadovaly náročnou péči. Vyber si pár odolných druhů, zkombinuj je s trvalkami a udělej si jen jednou ročně pořádný řez. Tady je přehled, co stojí za výběr a jak se o trávy starat.</p>
              <div className="article-meta-row"><span>Aktualizováno: 25. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#proc">Proč okrasné trávy</a></li>
                <li><a href="#druhy">Oblíbené druhy</a></li>
                <li><a href="#vysadba">Výsadba a kombinace s trvalkami</a></li>
                <li><a href="#rez">Řez na konci zimy</a></li>
                <li><a href="#deleni">Dělení trsů</a></li>
                <li><a href="#zazimovani">Mrazuvzdornost a zazimování</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="proc">
              <h2>Proč okrasné trávy na zahradu</h2>
              <p>Okrasné trávy jsou mezi zahradními rostlinami výjimečné v tom, kolik nabízejí za relativně málo péče. Na rozdíl od většiny trvalek, které po odkvětu „zmizí" do zeleně, trávy si zachovávají vizuální zajímavost po většinu roku.</p>
              <ul>
                <li><strong>Nízká náročnost</strong> – jednou zapěstovaný trs zvládá sucho i chudší půdu, většina druhů nepotřebuje hnojení ani časté zalévání</li>
                <li><strong>Celoroční efekt</strong> – od jarního rašení přes letní květenství až po podzimní zbarvení a zimní suchou siluetu pokrytou jinovatkou nebo sněhem</li>
                <li><strong>Pohyb a zvuk</strong> – stébla a klasy se vlní ve větru a tiše šustí, přinášejí do zahrady dynamiku, kterou statické keře a květiny nemají</li>
                <li><strong>Minimální problémy s nemocemi a škůdci</strong> – ve srovnání s mnoha okrasnými keři a trvalkami jsou trávy málokdy napadány</li>
                <li><strong>Snadná kombinovatelnost</strong> – výborně doplňují trvalkové záhony, slouží jako kulisa i jako solitéra</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud chceš efekt podsvícení nízkým večerním sluncem, vysaď vyšší trávy (ozdobnice, třtina) na západní nebo jihozápadní straně záhonu – klasy a stébla se rozsvítí proti světlu.</div>
            </section>

            <section id="druhy">
              <h2>Oblíbené druhy okrasných trav</h2>
              <ul>
                <li><strong>Kostřava (Festuca)</strong> – nízká, trsnatá tráva s modrošedými nebo zelenými stébly, ideální do popředí záhonu nebo na okraj cest, výška 20–40 cm, plně mrazuvzdorná</li>
                <li><strong>Ozdobnice (Miscanthus)</strong> – vysoká, statná tráva s nádhernými klasy na podzim, výška 100–200 cm podle odrůdy, vhodná jako solitéra nebo kulisa záhonu</li>
                <li><strong>Třtina (Calamagrostis)</strong> – vzpřímená, úzká silueta s dlouhými klasy, dobře snáší i vlhčí půdu, výška 100–150 cm, výborná do moderních minimalistických zahrad</li>
                <li><strong>Pampová tráva (Cortaderia)</strong> – velký, efektní trs s dlouhými stříbřitými klasy, výška až 200–250 cm, citlivější na mráz a potřebuje v chladnějších oblastech zazimování</li>
                <li><strong>Smetlice (Deschampsia)</strong> – vzdušná, jemná tráva s drobnými klásky, vhodná i do polostínu, výška 60–90 cm</li>
                <li><strong>Proso (Panicum)</strong> – odolná tráva s krásným podzimním zbarvením do oranžové a červené, výška 80–120 cm</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Při výběru druhu vždy zkontroluj konečnou výšku a šířku v dospělosti, ne velikost v kontejneru při koupi – ozdobnice a pampová tráva časem zaberou výrazně víc místa, než se na první pohled zdá.</div>
            </section>

            <section id="vysadba">
              <h2>Výsadba a kombinace s trvalkami</h2>
              <p>Trávy se nejlépe vysazují na jaře, kdy mají celou sezónu na zakořenění před první zimou. Výsadba na podzim je riziková zejména u citlivějších druhů, protože trs nemusí stihnout dostatečně zesílit.</p>
              <ul>
                <li><strong>Stanoviště</strong> – většina druhů preferuje plné slunce, jen pár (smetlice, některé kostřavy) zvládá i polostín</li>
                <li><strong>Půda</strong> – propustná, ne příliš úrodná; přemíra živin u některých druhů vede k bujnému, ale nestabilnímu růstu a polehávání</li>
                <li><strong>Rozestupy</strong> – respektuj dospělou velikost trsu, hustá výsadba vede k brzkému zahuštění a nutnosti dělení</li>
              </ul>
              <h3>Kombinace s trvalkami</h3>
              <p>Trávy fungují jako přirozená kulisa nebo přechodový element mezi barevnými trvalkami. Vysoké druhy (ozdobnice, třtina) se hodí do zadního plánu záhonu nebo jako přerušovač pohledu, nízké druhy (kostřava) do popředí jako lem.</p>
              <ul>
                <li>Kombinace s echinaceou, rozchodníkem nebo třapatkou vytváří přírodní, „prérijní" styl záhonu</li>
                <li>Vertikální silueta trav dobře kontrastuje s kulatými tvary květů hvězdnice nebo jiřinky</li>
                <li>Trávy s jemnou strukturou (smetlice, proso) zjemňují kompozici a propojují jednotlivé skupiny rostlin</li>
              </ul>
              <p>Pokud zahradu řešíš celkově se zaměřením na sucho a nenáročné rostliny, podívej se i na náš článek o <Link href="/blog/jak-vybudovat-skalku" style={{ color: "#2a6496", textDecoration: "underline" }}>stavbě skalky</Link>, kam se nízké okrasné trávy hodí výborně.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Vysazuj trávy ve skupinách lichých čísel (3, 5) téhož druhu pro přirozenější, méně „rozházený" vzhled než jednotlivé osamocené trsy.</div>
            </section>

            <section id="rez">
              <h2>Řez na konci zimy</h2>
              <p>Na rozdíl od mnoha trvalek se okrasné trávy na podzim neřežou. Suché stébla a klasy přes zimu chrání korunu trsu před mrazem, zadržují sníh a vypadají efektně i v zimní zahradě.</p>
              <ul>
                <li><strong>Termín</strong> – konec února až začátek března, krátce před nástupem nového růstu, ale ještě dokud je trs v klidu</li>
                <li><strong>Výška řezu</strong> – trsnaté trávy se řežou na 10–15 cm nad zemí, příliš nízký řez může poškodit spodní pupeny</li>
                <li><strong>Nástroj</strong> – u velkých trsů (ozdobnice, pampová tráva) se hodí nůžky na keře nebo dokonce motorové nůžky, u menších druhů stačí zahradnické nůžky</li>
                <li><strong>Svázání před řezem</strong> – u vysokých druhů pomáhá svázat stébla do svazku provázkem před řezem, usnadní to manipulaci a odstranění odpadu najednou</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud trávu řežeš příliš pozdě, kdy už raší nové výhonky u báze, řež opatrně nad novým růstem nebo do něj zasahuj jen minimálně – poškození čerstvých výhonů zpomalí celkový start sezóny.</div>
            </section>

            <section id="deleni">
              <h2>Dělení trsů</h2>
              <p>Trsnaté okrasné trávy postupně houstnou a po několika letech jim začne odumírat střed trsu (efekt „prstence") nebo prostě zaberou víc místa, než je žádoucí. Dělení trs zmladí a zároveň poskytne nové rostliny na další místa zahrady.</p>
              <ul>
                <li><strong>Interval</strong> – většina druhů se dělí jednou za 3–5 let, podle rychlosti růstu a stavu trsu</li>
                <li><strong>Termín</strong> – brzy na jaře, jakmile je vidět nový růst, ale rostlina ještě nemá plně vyvinuté listy</li>
                <li><strong>Postup</strong> – celý trs se vykope vidlemi, poté se rozdělí ostrou lopatou, nožem nebo sekerou na menší části, každá s vlastním kořenovým systémem a alespoň pár výhonky</li>
                <li><strong>Výsadba dělů</strong> – rozdělené části se vysazují stejně jako nové rostliny, do upravené a zavlažené půdy</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Velké a staré trsy ozdobnice nebo pampové trávy mohou být extrémně husté a tuhé – při dělení se vyplatí ostrá lopata, sekera nebo dokonce motorová pila na nejodolnější kořenové baly.</div>
            </section>

            <section id="zazimovani">
              <h2>Mrazuvzdornost a zazimování citlivějších druhů</h2>
              <p>Mrazuvzdornost se mezi druhy okrasných trav výrazně liší. Než trávu vysadíš, ověř si, jak je daná odrůda odolná v podmínkách tvé zahrady.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Druh</th><th>Mrazuvzdornost</th><th>Potřeba zazimování</th></tr></thead>
                  <tbody>
                    <tr><td>Kostřava</td><td>Vysoká</td><td>Ne</td></tr>
                    <tr><td>Třtina</td><td>Vysoká</td><td>Ne</td></tr>
                    <tr><td>Ozdobnice</td><td>Střední až vysoká (dle odrůdy)</td><td>Mulčování báze doporučeno</td></tr>
                    <tr><td>Proso</td><td>Vysoká</td><td>Ne</td></tr>
                    <tr><td>Pampová tráva</td><td>Nízká až střední</td><td>Ano, ve většině ČR</td></tr>
                  </tbody>
                </table>
              </div>
              <p>U citlivějších druhů jako pampová tráva pomáhá před prvními mrazy svázat listy do svazku nad korunou trsu – chrání to centrální pupeny před vlhkem a mrazem zároveň. Báze trsu se navíc dá přikrýt vrstvou mulče, slámy nebo listí. V opravdu chladných oblastech se vyplatí přidat i netkanou textilii.</p>
              <p>Obecné principy ochrany citlivějších trvalek a keřů před mrazem najdeš v článku <Link href="/blog/ochrana-rostlin-pred-zimou" style={{ color: "#2a6496", textDecoration: "underline" }}>ochrana rostlin před zimou</Link>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Nikdy nesřezávej citlivé druhy na podzim před zimou – ponechaná suchá stébla jsou přirozená izolace, která chrání korunu trsu. Řez patří až na konec zimy.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Kdy se řežou okrasné trávy?", a: "Většina okrasných trav se neřeže na podzim, ale až na konci zimy nebo na začátku března, krátce před nástupem nového růstu. Suché stébla přes zimu chrání korunu trsu před mrazem a navíc vypadají efektně i v zasněžené zahradě." },
                  { q: "Jak často je potřeba dělit trsy okrasných trav?", a: "Většina trsnatých okrasných trav se dělí jednou za 3–5 let, když začne střed trsu odumírat nebo trs příliš zhoustne a kvete méně. Dělení se provádí na začátku jara, jakmile je vidět nový růst, vykopáním celého trsu a rozdělením na menší části." },
                  { q: "Které okrasné trávy potřebují přes zimu zazimovat?", a: "Citlivější druhy jako pampová tráva (Cortaderia) nebo některé teplomilnější ozdobnice potřebují v chladnějších oblastech ochranu – stažení listů do svazku, mulčování báze a případně přikrytí netkanou textilií. Mrazuvzdorné druhy jako kostřava nebo třtina zimu v ČR zvládají bez ochrany." },
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
                <li><a href="#proc">Proč okrasné trávy</a></li>
                <li><a href="#druhy">Oblíbené druhy</a></li>
                <li><a href="#vysadba">Výsadba a kombinace</a></li>
                <li><a href="#rez">Řez na konci zimy</a></li>
                <li><a href="#deleni">Dělení trsů</a></li>
                <li><a href="#zazimovani">Mrazuvzdornost</a></li>
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
