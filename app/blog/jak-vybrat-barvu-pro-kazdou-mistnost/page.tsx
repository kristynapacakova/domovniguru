import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak vybrat barvu pro každou místnost v bytě",
  description: "Jaké barvy a odstíny se hodí do obýváku, ložnice, kuchyně, koupelny i dětského pokoje – praktický průvodce výběrem.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-vybrat-barvu-pro-kazdou-mistnost" },
  openGraph: { title: "Jak vybrat barvu pro každou místnost v bytě", description: "Jaké barvy a odstíny se hodí do obýváku, ložnice, kuchyně, koupelny i dětského pokoje – praktický průvodce výběrem.", url: "https://www.domovniguru.cz/blog/jak-vybrat-barvu-pro-kazdou-mistnost", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-11T08:00:00Z", modifiedTime: "2026-06-11T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20vybrat%20barvu%20pro%20ka%C5%BEdou%20m%C3%ADstnost%20v%20byt%C4%9B&cat=blog", width: 1200, height: 630, alt: "Jak vybrat barvu pro každou místnost v bytě" }] },
  twitter: { card: "summary_large_image", title: "Jak vybrat barvu pro každou místnost v bytě", description: "Jaké barvy a odstíny se hodí do obýváku, ložnice, kuchyně, koupelny i dětského pokoje – praktický průvodce výběrem." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/jak-vybrat-barvu-pro-kazdou-mistnost#article", "headline": "Jak vybrat barvu pro každou místnost v bytě", "datePublished": "2026-06-11T08:00:00Z", "dateModified": "2026-06-11T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["jak vybrat barvu na zeď", "barva do obýváku", "barva do ložnice", "barva do kuchyně", "barva do koupelny", "barvy podle místnosti"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Malování & barvy", "item": "https://www.domovniguru.cz/blog/kategorie/malovani" }, { "@type": "ListItem", "position": 4, "name": "Jak vybrat barvu pro každou místnost", "item": "https://www.domovniguru.cz/blog/jak-vybrat-barvu-pro-kazdou-mistnost" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jaká barva je nejlepší do obývacího pokoje?", "acceptedAnswer": { "@type": "Answer", "text": "Do obýváku se hodí teplé neutrální tóny jako béžová, písková, šedobéžová nebo jemná zelená či modrá. Volte spíše matnou nebo saténovou latexovou barvu, která působí útulně a snese drobné oprašování." } }, { "@type": "Question", "name": "Jakou barvu zvolit do malé místnosti bez oken?", "acceptedAnswer": { "@type": "Answer", "text": "Do tmavých a malých místností volte světlé, studenější odstíny – bílou, světle šedou nebo světle modrou s vyšší odrazivostí světla. Lesklejší povrch (saténový) navíc lépe odráží dostupné světlo a místnost opticky zvětší." } }, { "@type": "Question", "name": "Jaký typ barvy použít do koupelny a kuchyně?", "acceptedAnswer": { "@type": "Answer", "text": "Do vlhkých a zatížených prostor patří omyvatelné latexové nebo akrylátové barvy s vyšší odolností proti vlhkosti a plísním, ideálně s polomatným nebo saténovým leskem, které se snadno otřou." } }, { "@type": "Question", "name": "Hodí se sytá barva do ložnice?", "acceptedAnswer": { "@type": "Answer", "text": "Sytější barva může fungovat jako akcentová stěna za postelí, ale pro spánek se obecně doporučují tlumenější, zemité nebo studenější odstíny, které navozují klid – tmavě modrá, šalvějová zelená nebo teplá šedá." } }, { "@type": "Question", "name": "Kolik barvy budu na místnost potřebovat?", "acceptedAnswer": { "@type": "Answer", "text": "Spotřeba závisí na rozměrech místnosti, počtu nátěrů a vydatnosti barvy. Orientačně počítejte s 1 litrem barvy na 6–10 m² při jednom nátěru. Přesné množství spočítáte v naší kalkulačce na barvu." } }] }] };

const RELATED = [
  { title: "Kalkulačka: Kolik barvy potřebuji?", href: "/kalkulacky/kolik-barvy", read: "2 min" },
  { title: "Jak správně malovat zeď – krok za krokem", href: "/blog/jak-malovat-zed", read: "6 min" },
  { title: "Latexová vs. akrylátová barva – jaký je rozdíl?", href: "/blog/latexova-vs-akrylatova-barva", read: "5 min" },
  { title: "Jak vybrat barvu na zeď – kompletní průvodce", href: "/blog/jak-vybrat-barvu-na-zed", read: "5 min" },
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
              <span>Jak vybrat barvu pro každou místnost</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování & barvy</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak vybrat barvu pro každou místnost v bytě</h1>
              <p className="article-lead">Barva, která skvěle vypadá v obýváku, se nemusí vůbec hodit do koupelny – a naopak. Každá místnost má jiné světelné podmínky, jinou vlhkost a jiný účel, a podle toho by se měl řídit jak odstín, tak typ a kvalita barvy. V tomto průvodci projdeme místnost po místnosti a poradíme, na co se při výběru zaměřit.</p>
              <div className="article-meta-row"><span>Aktualizováno: 11. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#zaklady">Na čem výběr barvy závisí</a></li>
                <li><a href="#obyvak">Obývací pokoj</a></li>
                <li><a href="#loznice">Ložnice</a></li>
                <li><a href="#kuchyn">Kuchyně</a></li>
                <li><a href="#koupelna">Koupelna a vlhké prostory</a></li>
                <li><a href="#detsky-pokoj">Dětský pokoj</a></li>
                <li><a href="#chodba-pracovna">Chodba, předsíň a pracovna</a></li>
                <li><a href="#typy-barev">Jaký typ barvy zvolit</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="zaklady">
              <h2>Na čem výběr barvy závisí</h2>
              <p>Než začnete listovat vzorníky, vyplatí se zamyslet nad třemi věcmi: kolik světla místnost dostává, jak velká je a k čemu slouží. Tmavá místnost orientovaná na sever potřebuje jiný přístup než prosluněný pokoj na jih. Malý prostor opticky zvětšíte světlými barvami, zatímco velká místnost unese i sytější odstíny bez toho, aby působila stísněně.</p>
              <p>Důležitá je i sytost a odstín z hlediska psychologického působení. Teplé barvy (žlutá, oranžová, teracotta) působí energicky a útulně, studené odstíny (modrá, šedá, zelenkavá) naopak uklidňují a opticky prostor zvětšují. A nezapomínejte na praktickou stránku – v místnostech s vyšší vlhkostí nebo provozem (kuchyně, koupelna, chodba) je potřeba volit omyvatelné a odolnější typy barev.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Než natřete celou stěnu, vyzkoušejte vzorek barvy na ploše alespoň 1×1 m a sledujte ji v různou denní dobu – při umělém i denním světle vypadá odstín často velmi odlišně.</div>
            </section>

            <section id="obyvak">
              <h2>Obývací pokoj</h2>
              <p>Obývací pokoj je místnost, kde trávíte nejvíc času a kde se obvykle stýkáte s návštěvami – proto se vyplatí volit barvy, které působí útulně, ale zároveň nenudí. Osvědčují se teplé neutrální tóny: béžová, písková, světle šedá s teplým podtónem nebo jemná hnědá. Tyto odstíny dobře ladí s nábytkem a doplňky a nemusíte je při změně stylu hned přemalovávat.</p>
              <p>Pokud chcete do obýváku vnést více charakteru, zvažte jednu výraznější akcentovou stěnu – například za sedačkou nebo televizí. Hodí se tlumenější zelené, modré nebo terakotové odstíny, které prostor opticky neuzavřou, ale dodají mu hloubku.</p>
              <h3>Lesk a typ barvy</h3>
              <p>Pro stěny v obýváku je ideální matná nebo jemně saténová latexová barva. Matný povrch skrývá drobné nerovnosti omítky a nepůsobí lesklými odlesky, saténový lesk je zase o něco odolnější vůči otěru a snadněji se otírá od prachu a otisků.</p>
            </section>

            <section id="loznice">
              <h2>Ložnice</h2>
              <p>Ložnice by měla především podporovat klid a odpočinek, takže se zde příliš nehodí jasné, křiklavé barvy. Funguje tlumená modrá, šalvějová zelená, teplá šedá nebo jemná lila – odstíny, které opticky „ustoupí do pozadí" a nepůsobí rušivě před spaním.</p>
              <p>Sytější barvu si můžete dovolit na jedné stěně za postelí – takzvaná akcentová stěna dodá místnosti charakter, aniž by celý prostor opticky zmenšila. U zbylých stěn pak zůstaňte u světlejších odstínů ze stejné barevné rodiny, díky čemuž bude místnost vypadat sladěně.</p>
              <p>Pokud má ložnice málo přirozeného světla, vsaďte na světlé, jemně teplé tóny – bílou se smetanovým nádechem, světlou béžovou nebo pudrově růžovou. Naopak prosluněná ložnice na jih unese i chladnější a sytější odstíny, protože sluneční světlo barvu „rozjasní".</p>
              <h3>Doporučený typ barvy</h3>
              <p>V ložnici postačí klasická matná latexová barva – prostor není tolik namáhaný jako kuchyně nebo chodba a matný povrch zde nejlépe podtrhne klidnou atmosféru.</p>
            </section>

            <section id="kuchyn">
              <h2>Kuchyně</h2>
              <p>Kuchyně je provozní místnost, kde se barva setkává s mastnotou, vodní párou a častým otíráním – proto je tu typ barvy stejně důležitý jako odstín. U barev se osvědčují svěží, čisté tóny: bílá, světle šedá, máta, žlutá nebo teplá terakota, které dodají prostoru energii a opticky ho rozjasní.</p>
              <p>Pokud máte malou kuchyň, světlé barvy v kombinaci s lesklejšími kuchyňskými dvířky opticky prostor zvětší. U větších kuchyní s jídelním koutem se naopak hodí sytější odstín na jedné stěně, který prostor rozdělí na zónu vaření a zónu stolování.</p>
              <h3>Proč je tu důležitá omyvatelnost</h3>
              <p>Stěny v kuchyni, zejména v okolí sporáku a dřezu, by měly být natřeny <strong>omyvatelnou barvou</strong> – ideálně akrylátovou nebo speciální „kuchyňskou" latexovou barvou s polomatným či saténovým leskem. Taková barva odolá otření mastnoty a vlhkých skvrn, aniž by se na ní objevily lesklé fleky po čištění.</p>
            </section>

            <section id="koupelna">
              <h2>Koupelna a vlhké prostory</h2>
              <p>Koupelna patří mezi nejnáročnější místnosti z hlediska volby barvy – kombinuje se tu vysoká vlhkost, kolísání teplot a riziko plísní. Pokud koupelnu malujete (nikoli obkládáte celou plochu), je nutné použít speciální <Link href="/blog/barva-do-vlhkych-prostoru" style={{ color: "#2a6496", textDecoration: "underline" }}>barvu do vlhkých prostor</Link> s protiplísňovou přísadou a vyšší odolností proti kondenzaci.</p>
              <p>Co se odstínu týče, v koupelně fungují jak svěží studené barvy (světle modrá, mátová, šedá), které navozují pocit čistoty a svěžesti, tak teplejší tóny pro útulnější atmosféru – záleží na velikosti místnosti a množství světla. V malých koupelnách bez oken volte světlé odstíny, ideálně s vyšším leskem, který pomáhá odrážet umělé osvětlení.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> I tam, kde použijete obklady, se vyplatí natřít zbylé plochy (strop, výklenky, prostor nad obklady) omyvatelnou barvou odolnou vlhkosti – běžná interiérová barva by v koupelně časem začala plesnivět nebo se loupat.</div>
            </section>

            <section id="detsky-pokoj">
              <h2>Dětský pokoj</h2>
              <p>U dětského pokoje hraje roli nejen estetika, ale i praktičnost a zdravotní hlediska. Doporučuje se volit barvy bez zápachu a s certifikací pro dětské interiéry, ideálně s vyšší odolností proti otěru – děti totiž stěny běžně „testují" rukama, pastelkami i hračkami.</p>
              <p>Pokud jde o odstíny, vyhněte se příliš agresivním, sytým barvám na celé ploše – dlouhodobě mohou působit neklidně. Lépe fungují jemnější pastelové tóny v kombinaci s jednou výraznější, hravou stěnou (například s geometrickým vzorem nebo barevným pruhem), kterou lze v budoucnu snadno přemalovat, až dítě vyroste z aktuálního stylu.</p>
              <p>Více inspirace a konkrétní doporučení odstínů podle věku dítěte najdete v článku <Link href="/blog/barvy-do-detskeho-pokoje" style={{ color: "#2a6496", textDecoration: "underline" }}>barvy do dětského pokoje</Link>.</p>
              <h3>Doporučený typ barvy</h3>
              <p>Volte omyvatelnou latexovou barvu se saténovým nebo polomatným leskem – umožní otřít fixy, pastelky i drobné šmouhy bez poškození povrchu.</p>
            </section>

            <section id="chodba-pracovna">
              <h2>Chodba, předsíň a pracovna</h2>
              <h3>Chodba a předsíň</h3>
              <p>Chodba a předsíň jsou frekventované prostory, kde se stěny často otírají o tašky, kufry nebo kočárky. Proto se vyplatí sáhnout po odolnější, omyvatelné barvě se saténovým leskem. Pokud je chodba tmavá a bez oken, světlé barvy (bílá, světle šedá, krémová) spolu s dobrým osvětlením opticky prostor otevřou a zesvětlí.</p>
              <h3>Pracovna a domácí kancelář</h3>
              <p>V pracovně byste měli volit barvy, které podporují soustředění, ale zároveň nepůsobí stroze. Osvědčují se klidné zelené a modré tóny, případně neutrální šedá nebo béžová. Pokud máte v pracovně videohovory, zvažte i to, jak bude barva vypadat na kameře – příliš syté nebo studené tóny mohou na obrazovce působit nepřirozeně.</p>
            </section>

            <section id="typy-barev">
              <h2>Jaký typ barvy zvolit</h2>
              <p>Kromě odstínu je klíčové zvolit i správný typ barvy podle prostoru. Přehled nejběžnějších typů:</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ barvy</th><th>Vhodné použití</th><th>Vlastnosti</th></tr></thead>
                  <tbody>
                    <tr><td>Latexová matná</td><td>Obývák, ložnice, stropy</td><td>Skrývá nerovnosti, méně odolná vůči otěru</td></tr>
                    <tr><td>Latexová saténová / polomatná</td><td>Chodba, dětský pokoj, kuchyně</td><td>Odolnější, snáze omyvatelná, mírný lesk</td></tr>
                    <tr><td>Akrylátová omyvatelná</td><td>Kuchyně, koupelna, chodba</td><td>Vysoká odolnost proti vlhkosti a otěru</td></tr>
                    <tr><td>Speciální do vlhkých prostor</td><td>Koupelna, prádelna, sklep</td><td>Protiplísňová přísada, odolnost kondenzaci</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Rozdíl mezi latexovou a akrylátovou barvou podrobně rozebíráme v článku <Link href="/blog/latexova-vs-akrylatova-barva" style={{ color: "#2a6496", textDecoration: "underline" }}>latexová vs. akrylátová barva</Link>. Obecně platí, že akrylátové barvy jsou odolnější a omyvatelnější, ale zpravidla i dražší – proto se hodí spíše do exponovaných míst, zatímco v ložnici nebo obýváku si vystačíte s kvalitní latexovou barvou.</p>
              <p>Než barvu nakoupíte, spočítejte si potřebné množství podle rozměrů místnosti a počtu nátěrů – ušetříte tak za přebytečné plechovky i za dojíždění do obchodu pro dokup. Využít můžete naši <Link href="/kalkulacky/kolik-barvy" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačku na barvu</Link>, která spočítá orientovanou spotřebu na základě plochy stěn a vydatnosti zvoleného produktu.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Počítejte vždy s rezervou 5–10 % navíc na opravy, druhý nátěr nebo budoucí retuše – stejný odstín ze starší šarže totiž nemusí přesně sedět.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jaká barva je nejlepší do obývacího pokoje?", a: "Do obýváku se hodí teplé neutrální tóny jako béžová, písková, šedobéžová nebo jemná zelená či modrá. Volte spíše matnou nebo saténovou latexovou barvu, která působí útulně a snese drobné oprašování." },
                  { q: "Jakou barvu zvolit do malé místnosti bez oken?", a: "Do tmavých a malých místností volte světlé, studenější odstíny – bílou, světle šedou nebo světle modrou s vyšší odrazivostí světla. Lesklejší povrch (saténový) navíc lépe odráží dostupné světlo a místnost opticky zvětší." },
                  { q: "Jaký typ barvy použít do koupelny a kuchyně?", a: "Do vlhkých a zatížených prostor patří omyvatelné latexové nebo akrylátové barvy s vyšší odolností proti vlhkosti a plísním, ideálně s polomatným nebo saténovým leskem, které se snadno otřou." },
                  { q: "Hodí se sytá barva do ložnice?", a: "Sytější barva může fungovat jako akcentová stěna za postelí, ale pro spánek se obecně doporučují tlumenější, zemité nebo studenější odstíny, které navozují klid – tmavě modrá, šalvějová zelená nebo teplá šedá." },
                  { q: "Kolik barvy budu na místnost potřebovat?", a: "Spotřeba závisí na rozměrech místnosti, počtu nátěrů a vydatnosti barvy. Orientačně počítejte s 1 litrem barvy na 6–10 m² při jednom nátěru. Přesné množství spočítáte v naší kalkulačce na barvu." },
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
                <li><a href="#zaklady">Na čem výběr závisí</a></li>
                <li><a href="#obyvak">Obývací pokoj</a></li>
                <li><a href="#loznice">Ložnice</a></li>
                <li><a href="#kuchyn">Kuchyně</a></li>
                <li><a href="#koupelna">Koupelna</a></li>
                <li><a href="#detsky-pokoj">Dětský pokoj</a></li>
                <li><a href="#chodba-pracovna">Chodba a pracovna</a></li>
                <li><a href="#typy-barev">Typy barev</a></li>
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
