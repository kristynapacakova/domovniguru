import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Podzimní výsadba cibulovin – tulipány, narcisy, krokusy",
  description: "Kdy a jak na podzim sázet cibuloviny, aby na jaře vykvetly – hloubka výsadby, kombinace druhů a péče.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/podzimni-vysadba-cibulovin" },
  openGraph: { title: "Podzimní výsadba cibulovin – tulipány, narcisy, krokusy", description: "Kdy a jak na podzim sázet cibuloviny, aby na jaře vykvetly – hloubka výsadby, kombinace druhů a péče.", url: "https://www.domovniguru.cz/blog/podzimni-vysadba-cibulovin", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-12T08:00:00Z", modifiedTime: "2026-06-12T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Podzimn%C3%AD%20v%C3%BDsadba%20cibulovin%20%E2%80%93%20tulip%C3%A1ny%2C%20narcisy%2C%20krokusy&cat=blog", width: 1200, height: 630, alt: "Podzimní výsadba cibulovin – tulipány, narcisy, krokusy" }] },
  twitter: { card: "summary_large_image", title: "Podzimní výsadba cibulovin – tulipány, narcisy, krokusy", description: "Kdy a jak na podzim sázet cibuloviny, aby na jaře vykvetly – hloubka výsadby, kombinace druhů a péče." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/podzimni-vysadba-cibulovin#article", "headline": "Podzimní výsadba cibulovin – tulipány, narcisy, krokusy", "datePublished": "2026-06-12T08:00:00Z", "dateModified": "2026-06-12T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["podzimní výsadba cibulovin", "kdy sázet tulipány", "výsadba narcisů", "krokusy podzim", "hyacinty výsadba", "cibuloviny do zahrady"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Zahrada & terasa", "item": "https://www.domovniguru.cz/blog/kategorie/zahrada" }, { "@type": "ListItem", "position": 4, "name": "Podzimní výsadba cibulovin", "item": "https://www.domovniguru.cz/blog/podzimni-vysadba-cibulovin" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Kdy je nejlepší doba na výsadbu cibulovin na podzim?", "acceptedAnswer": { "@type": "Answer", "text": "Ideální je období od poloviny září do konce listopadu, kdy se teplota půdy ustálí mezi 7–13 °C. V Česku to bývá nejčastěji říjen. Cibuloviny potřebují vytvořit kořenový systém ještě před prvními silnými mrazy." } }, { "@type": "Question", "name": "Jak hluboko se sází cibuloviny?", "acceptedAnswer": { "@type": "Answer", "text": "Obecné pravidlo je hloubka rovnající se 2–3násobku výšky cibule. Tulipány a narcisy se sázejí do 12–15 cm, krokusy a hyacinty stačí 8–10 cm. Drobné cibulky jako šafrán nebo modřenec do 5–8 cm." } }, { "@type": "Question", "name": "Můžu sázet cibuloviny, pokud už mrzne?", "acceptedAnswer": { "@type": "Answer", "text": "Pokud je půda zmrzlá, výsadba není možná – cibule by se poškodily a nezakořenily. Pokud tě zima zaskočí, ulož cibule na chladné a temné místo (sklep, garáž) a zasaď je hned, jak půda zase rozmrzne, případně počkej na jaro a vysaď je do nádob." } }, { "@type": "Question", "name": "Jak ochránit cibuloviny před hlodavci?", "acceptedAnswer": { "@type": "Answer", "text": "Nejúčinnější je výsadba do drátěných košíků nebo klecí z pletiva, které propustí kořeny, ale zabrání hrabání. Pomůže i posyp půdy kolem cibulí ostrým štěrkem nebo drceným kamenem a výsadba narcisů (jsou jedovaté a hlodavci je nežerou) mezi atraktivnější druhy." } }, { "@type": "Question", "name": "Je potřeba cibuloviny při výsadbě hnojit?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, vyplatí se přidat do jamky pomalu rozpustné hnojivo s vyšším obsahem fosforu a draslíku, které podpoří tvorbu kořenů. Dusík naopak v tomto období není potřeba ve velkém množství. Správné dávkování ti pomůže spočítat naše kalkulačka hnojiva." } }] }] };

const RELATED = [
  { title: "Jak navrhnout zahradu – kompletní průvodce", href: "/blog/jak-navrhnout-zahradu", read: "6 min" },
  { title: "Jak hnojit zahradu – kdy a čím", href: "/blog/jak-hnojit-zahradu", read: "5 min" },
  { title: "Ochrana rostlin před zimou", href: "/blog/ochrana-rostlin-pred-zimou", read: "5 min" },
  { title: "Jak připravit zahradu na jaro", href: "/blog/jarni-zahrada", read: "6 min" },
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
              <span>Podzimní výsadba cibulovin</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Podzimní výsadba cibulovin – tulipány, narcisy, krokusy</h1>
              <p className="article-lead">Krásná jarní zahrada plná tulipánů, narcisů a krokusů se připravuje už na podzim. Stačí pár hodin práce v říjnu a v dubnu se odměníte pestrobarevným kvetoucím záhonem. Ukážeme vám, kdy, jak hluboko a jaké druhy společně vysadit.</p>
              <div className="article-meta-row"><span>Aktualizováno: 12. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#proc-podzim">Proč sázet cibuloviny na podzim</a></li>
                <li><a href="#termin">Ideální termín a teploty pro výsadbu</a></li>
                <li><a href="#hloubka">Hloubka a rozestupy podle druhu</a></li>
                <li><a href="#priprava-pudy">Příprava půdy a hnojení</a></li>
                <li><a href="#kombinace">Kombinace druhů pro postupné kvetení</a></li>
                <li><a href="#ochrana">Ochrana před hlodavci a mrazem</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="proc-podzim">
              <h2>Proč sázet cibuloviny na podzim</h2>
              <p>Většina jarně kvetoucích cibulovin – tulipány, narcisy, krokusy, hyacinty nebo modřenec – potřebuje k vykvetení období chladu. Tomuto procesu se říká jarovizace a probíhá přirozeně, pokud cibule přezimují v půdě. Bez dostatečně dlouhého chladného období by rostliny na jaře nevytvořily květy, nebo by kvetly velmi slabě.</p>
              <p>Podzimní výsadba navíc dává cibulovinám čas zakořenit ještě před příchodem tuhých mrazů. Kořeny se vyvíjejí i při nízkých teplotách půdy, takže rostlina vstupuje do jara s pevným základem a může okamžitě využít první teplé dny k růstu listů a tvorbě květu.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Cibuloviny koupené na jaře v květináčích už prošly uměle navozenou jarovizací ve sklenících – proto kvetou i bez podzimní výsadby. Levnější a osvědčenější cestou k bohaté jarní zahradě je ale klasická podzimní výsadba suchých cibulí.</div>
            </section>

            <section id="termin">
              <h2>Ideální termín a teploty pro výsadbu</h2>
              <p>Optimální okno pro výsadbu většiny cibulovin v Česku je <strong>od poloviny září do konce listopadu</strong>, přičemž nejlepší výsledky bývají v říjnu. Klíčová je teplota půdy – ideálně se pohybuje mezi <strong>7 a 13 °C</strong> v hloubce přibližně 10–15 cm. Při vyšších teplotách hrozí, že cibule příliš brzy vyraší nadzemní část, která pak může být zničena prvními mrazy.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Druh</th><th>Doporučený termín výsadby</th><th>Doba do kvetení</th></tr></thead>
                  <tbody>
                    <tr><td>Krokusy, šafrán</td><td>polovina září – polovina října</td><td>4–5 měsíců</td></tr>
                    <tr><td>Narcisy</td><td>polovina září – polovina října</td><td>5–6 měsíců</td></tr>
                    <tr><td>Hyacinty</td><td>říjen</td><td>4–5 měsíců</td></tr>
                    <tr><td>Tulipány</td><td>říjen – polovina listopadu</td><td>5–6 měsíců</td></tr>
                    <tr><td>Modřenec, ladoňka</td><td>září – listopad</td><td>5 měsíců</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Tulipány je vhodné vysazovat až jako poslední, klidně i v listopadu při mírnějším počasí – pozdější výsadba snižuje riziko napadení houbovou chorobou Fusarium, která se šíří v teplejší půdě. Pokud vás zima zaskočí dřív a půda už zmrzla, neriskujte poškození cibulí a uložte je do sklepa nebo garáže na výsadbu hned po rozmrznutí, případně do mís a beden na jaro.</p>
            </section>

            <section id="hloubka">
              <h2>Hloubka a rozestupy podle druhu</h2>
              <p>Základní pravidlo pro hloubku výsadby je jednoduché: cibule se sází do hloubky odpovídající <strong>2–3násobku její výšky</strong>. Příliš mělká výsadba znamená riziko vymrznutí nebo vyhrabání zvířaty, příliš hluboká výsadba zase oddaluje vzejití a kvetení.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Druh cibuloviny</th><th>Hloubka výsadby</th><th>Rozestup mezi cibulemi</th></tr></thead>
                  <tbody>
                    <tr><td>Tulipány</td><td>12–15 cm</td><td>10–15 cm</td></tr>
                    <tr><td>Narcisy</td><td>12–15 cm</td><td>12–15 cm</td></tr>
                    <tr><td>Hyacinty</td><td>10–12 cm</td><td>12–15 cm</td></tr>
                    <tr><td>Krokusy</td><td>7–10 cm</td><td>5–8 cm</td></tr>
                    <tr><td>Modřenec, ladoňka</td><td>5–8 cm</td><td>5–8 cm</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Cibuli vždy sázejte se špičkou nahoru – pokud směr nelze rozpoznat (např. u některých drobnějších druhů), cibule si poradí i otočená naopak, jen jí to vzejití trochu zpomalí. Po vsazení cibuli lehce přitlačte ke dnu jamky, aby měla kontakt s půdou, a jamku zahrnte zeminou.</p>
              <h3>Výsadba ve skupinách</h3>
              <p>Pro přirozený a sytý dojem sázejte cibuloviny ve volných skupinách po 7–15 kusech, nikoliv do rovných řad. Velké druhy jako tulipány a narcisy vynikají v hloučcích uprostřed záhonu, drobné cibuloviny (krokusy, modřenec) se hodí i do trávníku nebo k okrajům cest.</p>
            </section>

            <section id="priprava-pudy">
              <h2>Příprava půdy a hnojení</h2>
              <p>Cibuloviny mají rády <strong>propustnou, dobře odvodněnou půdu</strong>. Ve těžké jílovité půdě hrozí, že cibule v zimě uhnijí. Před výsadbou proto záhon prokypřete do hloubky alespoň 20–25 cm a u těžších půd přimíchejte hrubý písek nebo drobný štěrk, který zlepší drenáž.</p>
              <p>Do jamky se vyplatí přidat malou dávku pomalu rozpustného hnojiva s vyšším obsahem fosforu a draslíku (např. kostní moučku nebo speciální hnojivo na cibuloviny) – tyto živiny podporují tvorbu kořenů a kvalitních pupenů na příští sezónu. Dusíkatá hnojiva naopak na podzim nepřidávejte, podporují růst listů na úkor odolnosti vůči mrazu. Pokud si nejste jistí správným množstvím, pomůže vám <Link href="/kalkulacky/kolik-hnojiva" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačka na výpočet dávky hnojiva</Link>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Do jamky nikdy nedávejte čerstvý kompost nebo hnůj v přímém kontaktu s cibulí – mohl by ji spálit nebo způsobit hnilobu. Organickou hmotu zapracujte do půdy už několik týdnů před výsadbou.</div>
            </section>

            <section id="kombinace">
              <h2>Kombinace druhů pro postupné kvetení na jaře</h2>
              <p>Aby záhon kvetl co nejdéle, kombinujte druhy a kultivary s různou dobou kvetení. Díky tomu vám zahrada nabídne barvy od konce zimy až do pozdního jara.</p>
              <ul>
                <li><strong>Únor–březen:</strong> krokusy, sněženky, ladoňka sibiřská – první předzvěst jara, často kvetou ještě se zbytky sněhu.</li>
                <li><strong>Březen–duben:</strong> raně kvetoucí narcisy a hyacinty, modřenec.</li>
                <li><strong>Duben:</strong> klasické narcisy a raně kvetoucí tulipány (Triumph, Darwin hybrid).</li>
                <li><strong>Duben–květen:</strong> pozdně kvetoucí tulipány (papouščí, plnokvěté, liliokvěté), okrasné česneky (Allium).</li>
              </ul>
              <p>Při výsadbě je dobré rozmístit cibule jednotlivých termínů do stejné oblasti záhonu – jakmile dokvete jeden druh, ihned na jeho místě naskočí další. Listy odkvetlých cibulovin navíc zakryjete rostoucími trvalkami, které se rozrůstají právě v tomto období.</p>
            </section>

            <section id="ochrana">
              <h2>Ochrana před hlodavci a mrazem</h2>
              <h3>Ochrana před hlodavci</h3>
              <p>Hraboši, myši a veverky mají v oblibě zejména tulipány a krokusy – naopak narcisy, modřenec a cibuloviny obsahující jedovaté alkaloidy hlodavci nechávají na pokoji. Pokud máte se škůdci opakovaně problémy, vysazujte cibule do drátěných košů nebo klecí z pletiva s oky menšími než 2 cm, které propustí kořeny, ale zabrání prokousání. Pomáhá také vysypat dno jamky a okolí cibule vrstvou ostrého štěrku nebo drceného kamene.</p>
              <h3>Ochrana před mrazem</h3>
              <p>V mírném klimatu ČR cibuloviny vysazené v doporučené hloubce zimu bez problémů přežijí. V exponovaných lokalitách nebo při velmi nízkých teplotách bez sněhové pokrývky se vyplatí záhon po výsadbě přikrýt vrstvou mulče – listí, slámy nebo kůry – o tloušťce 5–8 cm. Mulč navíc zabrání prudkým výkyvům teploty půdy, které mohou způsobit předčasné vyrašení.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Mulč na jaře včas odkryjte, jakmile se objeví první výhonky – příliš dlouho ponechaná silná vrstva může rašící rostliny zadržovat a oslabovat.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Kdy je nejlepší doba na výsadbu cibulovin na podzim?", a: "Ideální je období od poloviny září do konce listopadu, kdy se teplota půdy ustálí mezi 7–13 °C. V Česku to bývá nejčastěji říjen. Cibuloviny potřebují vytvořit kořenový systém ještě před prvními silnými mrazy." },
                  { q: "Jak hluboko se sází cibuloviny?", a: "Obecné pravidlo je hloubka rovnající se 2–3násobku výšky cibule. Tulipány a narcisy se sázejí do 12–15 cm, krokusy a hyacinty stačí 8–10 cm. Drobné cibulky jako šafrán nebo modřenec do 5–8 cm." },
                  { q: "Můžu sázet cibuloviny, pokud už mrzne?", a: "Pokud je půda zmrzlá, výsadba není možná – cibule by se poškodily a nezakořenily. Pokud tě zima zaskočí, ulož cibule na chladné a temné místo (sklep, garáž) a zasaď je hned, jak půda zase rozmrzne, případně počkej na jaro a vysaď je do nádob." },
                  { q: "Jak ochránit cibuloviny před hlodavci?", a: "Nejúčinnější je výsadba do drátěných košíků nebo klecí z pletiva, které propustí kořeny, ale zabrání hrabání. Pomůže i posyp půdy kolem cibulí ostrým štěrkem nebo drceným kamenem a výsadba narcisů (jsou jedovaté a hlodavci je nežerou) mezi atraktivnější druhy." },
                  { q: "Je potřeba cibuloviny při výsadbě hnojit?", a: "Ano, vyplatí se přidat do jamky pomalu rozpustné hnojivo s vyšším obsahem fosforu a draslíku, které podpoří tvorbu kořenů. Dusík naopak v tomto období není potřeba ve velkém množství. Správné dávkování ti pomůže spočítat naše kalkulačka hnojiva." },
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
                <li><a href="#proc-podzim">Proč sázet na podzim</a></li>
                <li><a href="#termin">Ideální termín</a></li>
                <li><a href="#hloubka">Hloubka a rozestupy</a></li>
                <li><a href="#priprava-pudy">Příprava půdy</a></li>
                <li><a href="#kombinace">Kombinace druhů</a></li>
                <li><a href="#ochrana">Ochrana před hlodavci</a></li>
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
