import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak vybrat vestavné spotřebiče do nové kuchyně",
  description: "Trouba, varná deska, myčka i lednice – na co se zaměřit při výběru vestavných spotřebičů a jejich rozměrů.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/vyber-vestavnych-spotrebicu-do-kuchyne" },
  openGraph: { title: "Jak vybrat vestavné spotřebiče do nové kuchyně", description: "Trouba, varná deska, myčka i lednice – na co se zaměřit při výběru vestavných spotřebičů a jejich rozměrů.", url: "https://www.domovniguru.cz/blog/vyber-vestavnych-spotrebicu-do-kuchyne", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-24T08:00:00Z", modifiedTime: "2026-06-24T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20vybrat%20vestavn%C3%A9%20spot%C5%99eba%C4%8De%20do%20nov%C3%A9%20kuchyn%C4%9B&cat=blog", width: 1200, height: 630, alt: "Jak vybrat vestavné spotřebiče do nové kuchyně" }] },
  twitter: { card: "summary_large_image", title: "Jak vybrat vestavné spotřebiče do nové kuchyně", description: "Trouba, varná deska, myčka i lednice – na co se zaměřit při výběru vestavných spotřebičů a jejich rozměrů." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/vyber-vestavnych-spotrebicu-do-kuchyne#article", "headline": "Jak vybrat vestavné spotřebiče do nové kuchyně", "datePublished": "2026-06-24T08:00:00Z", "dateModified": "2026-06-24T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["vestavné spotřebiče", "výběr trouby", "varná deska", "vestavná myčka", "vestavná lednice", "kuchyňské spotřebiče rozměry"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Stěhování & rekonstrukce", "item": "https://www.domovniguru.cz/blog/kategorie/stehovani" }, { "@type": "ListItem", "position": 4, "name": "Jak vybrat vestavné spotřebiče do nové kuchyně", "item": "https://www.domovniguru.cz/blog/vyber-vestavnych-spotrebicu-do-kuchyne" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Mám nejdřív vybrat spotřebiče, nebo navrhnout kuchyňskou linku?", "acceptedAnswer": { "@type": "Answer", "text": "Ideální pořadí je vybrat alespoň základní typy a rozměry spotřebičů (trouba, varná deska, myčka, lednice) ještě před finálním návrhem linky, protože jejich rozměry a požadavky na připojení ovlivňují rozměry skříněk a umístění zásuvek či odvětrání. Drobné detaily jako barva nebo konkrétní model lze doladit i později." } }, { "@type": "Question", "name": "Jaký je standardní rozměr vestavné trouby a varné desky?", "acceptedAnswer": { "@type": "Answer", "text": "Standardní vestavná trouba má šířku 60 cm a výšku kolem 60 cm, vejde se do skříňky se stejnou vnitřní šířkou. Varné desky se vyrábí nejčastěji v šířce 60 cm, u indukčních desek s více zónami i 70–90 cm. Před nákupem je nutné znát přesný výřez v pracovní desce podle technického listu konkrétního modelu." } }, { "@type": "Question", "name": "Jaký typ varné desky je nejlepší – indukce, sklokeramika nebo plyn?", "acceptedAnswer": { "@type": "Answer", "text": "Indukční deska je nejrychlejší, nejbezpečnější (zůstává chladná mimo dotek s nádobím) a energeticky nejúčinnější, ale vyžaduje nádobí s feromagnetickým dnem. Sklokeramika je levnější, ale ohřívá se i chladne pomaleji a je méně energeticky efektivní. Plynová deska má okamžitou regulaci výkonu a funguje i bez elektřiny, ale hůř se čistí a vyžaduje přívod plynu." } }, { "@type": "Question", "name": "Jak velkou myčku zvolit do menší kuchyně?", "acceptedAnswer": { "@type": "Answer", "text": "Standardní myčka má šířku 60 cm a kapacitu kolem 12–14 sad nádobí, do menší kuchyně nebo pro jednu až dvě osoby se hodí úzká 45cm myčka s kapacitou 9–10 sad. Vždy je potřeba zkontrolovat i hloubku skříňky a dostupnost přívodu vody a odpadu v daném místě linky." } }, { "@type": "Question", "name": "Potřebuje vestavná lednice speciální větrání?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, vestavné chladničky a mrazničky potřebují větrací mřížku nebo štěrbinu v soklu skříňky a často i komínek pro odvod teplého vzduchu od kompresoru nahoru za skříňkou. Bez dostatečného větrání spotřebič zbytečně spotřebovává víc energie a má kratší životnost, proto je nutné dodržet rozměry podle montážního návodu výrobce." } }] }] };

const RELATED = [
  { title: "Plánování kuchyně krok za krokem", href: "/blog/planovani-kuchyne-krok-za-krokem", read: "7 min" },
  { title: "Výběr kuchyňské pracovní desky", href: "/blog/vyber-kuchynske-pracovni-desky", read: "5 min" },
  { title: "Úložiště v malém bytě – chytré řešení nedostatku místa", href: "/blog/uloziste-v-malem-byte", read: "6 min" },
  { title: "Plánování osvětlení bytu", href: "/blog/planovani-osvetleni-bytu", read: "6 min" },
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
              <Link href="/blog/kategorie/stehovani">Stěhování & rekonstrukce</Link><span className="breadcrumb-sep">/</span>
              <span>Jak vybrat vestavné spotřebiče do nové kuchyně</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏠 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak vybrat vestavné spotřebiče do nové kuchyně</h1>
              <p className="article-lead">Spotřebiče rozhodují o tom, jak se v kuchyni bude vařit, ale ovlivňují i to, jak má vypadat samotná linka – rozměry trouby, varné desky nebo myčky musí sedět do skříněk už v projektu, ne až po jejich výrobě. Tady je přehled, na co se zaměřit u každého typu spotřebiče a v jakém pořadí je rozumné je vybírat.</p>
              <div className="article-meta-row"><span>Aktualizováno: 24. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#rozmery">Standardní rozměry a dopad na návrh linky</a></li>
                <li><a href="#trouba">Výběr trouby</a></li>
                <li><a href="#varna-deska">Varná deska – indukce, sklokeramika, plyn</a></li>
                <li><a href="#mycka">Vestavná myčka</a></li>
                <li><a href="#lednice">Vestavná lednice a mraznička</a></li>
                <li><a href="#poradi">Pořadí výběru spotřebičů vs. návrh kuchyně</a></li>
                <li><a href="#energie">Energetické třídy a provozní náklady</a></li>
                <li><a href="#znacky">Značky a servis</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="rozmery">
              <h2>Standardní rozměry vestavných spotřebičů a jejich dopad na návrh linky</h2>
              <p>Vestavné spotřebiče se vyrábí v normovaných šířkách, které odpovídají standardním rozměrům kuchyňských skříněk. Pokud návrh linky vznikne dřív, než znáš konkrétní modely spotřebičů, riskuješ, že se výřezy nebo skříňky nebudou shodovat s tím, co sis nakonec vybral.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Spotřebič</th><th>Standardní šířka</th><th>Poznámka</th></tr></thead>
                  <tbody>
                    <tr><td>Trouba</td><td>60 cm</td><td>Vejde do skříňky se stejnou vnitřní šířkou, výška výřezu cca 60 cm</td></tr>
                    <tr><td>Varná deska</td><td>60 cm (i 70–90 cm)</td><td>Šíře varianty u indukčních desek s víc zónami</td></tr>
                    <tr><td>Myčka</td><td>45 nebo 60 cm</td><td>Úzká 45 cm pro malé kuchyně, standard 60 cm</td></tr>
                    <tr><td>Lednice/mraznička</td><td>54–60 cm</td><td>Nutné větrání v soklu a komínek za skříňkou</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Pokud teprve plánuješ celou kuchyni, je rozumné vybrat alespoň typy a orientační rozměry spotřebičů ještě před finálním rozkreslením linky – víc se o postupu dozvíš v článku o <Link href="/blog/planovani-kuchyne-krok-za-krokem" style={{ color: "#2a6496", textDecoration: "underline" }}>plánování kuchyně krok za krokem</Link>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Vždy si vyžádej přesný technický list konkrétního modelu spotřebiče (ne jen obecný rozměr kategorie) – výrobci se v detailech výřezů a odstupů liší a chyba v řádu milimetrů může znamenat nutnost úpravy skříňky.</div>
            </section>

            <section id="trouba">
              <h2>Výběr trouby</h2>
              <p>Trouby se dělí podle způsobu ohřevu a funkcí na klasické, parní a kombinované (parní + horkovzdušné).</p>
              <ul>
                <li><strong>Klasická horkovzdušná trouba</strong> – nejlevnější a nejuniverzálnější varianta, vhodná pro běžné pečení a gril</li>
                <li><strong>Parní trouba</strong> – vaří v páře, šetří víc vitaminů a chutí u zeleniny a ryb, ale neumí klasicky upečené pokrmy se zlatou křupavou krustou</li>
                <li><strong>Kombinovaná trouba (pára + horký vzduch)</strong> – kombinuje výhody obou, dražší, ale nejuniverzálnější volba pro domácnosti, které vaří víc zdravě i klasicky</li>
              </ul>
              <p>Důležité je i umístění – vestavná trouba ve výšce očí (kolem 90 cm nad zemí) je pohodlnější na vykládání těžkých plechů než trouba pod varnou deskou, ale vyžaduje samostatnou vysokou skříň.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud vaříš často pro víc lidí, zvaž trouby s větším vnitřním objemem (70+ litrů) nebo s funkcí horkovzdušného ventilátoru na více úrovních pečení najednou.</div>
            </section>

            <section id="varna-deska">
              <h2>Varná deska – indukce, sklokeramika, plyn</h2>
              <p>Typ varné desky ovlivňuje nejen rychlost vaření, ale i to, jaké nádobí budeš potřebovat a kolik energie spotřeba stojí v provozu.</p>
              <h3>Indukční deska</h3>
              <p>Nejrychlejší ohřev, vysoká energetická účinnost a bezpečnost – povrch kolem nádoby zůstává chladný. Vyžaduje nádobí s feromagnetickým dnem (přitahuje magnet), což může znamenat nutnost obměnit část kuchyňského vybavení.</p>
              <h3>Sklokeramická deska</h3>
              <p>Levnější varianta, funguje s běžným nádobím, ale ohřívá a chladne pomaleji a má vyšší spotřebu energie na stejný výkon než indukce.</p>
              <h3>Plynová deska</h3>
              <p>Okamžitá regulace výkonu plamenem a funkčnost i bez elektřiny (výhoda při výpadku proudu), ale náročnější čištění a nutnost přívodu plynu, který v novostavbách často chybí.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud váháš mezi indukcí a sklokeramikou, zvaž, jak často vaříš a kolik lidí vaří – u intenzivního denního vaření se vyšší pořizovací cena indukce vrátí na nižších nákladech na elektřinu i kratším času u plotny.</div>
            </section>

            <section id="mycka">
              <h2>Vestavná myčka a její šířka</h2>
              <p>Standardní vestavná myčka má šířku 60 cm a kapacitu zpravidla 12–14 jídelních sad, což stačí pro běžnou rodinu. Do menších kuchyní, jednočlenných nebo dvoučlenných domácností se hodí úzká myčka o šířce 45 cm s kapacitou 9–10 sad.</p>
              <p>Před výběrem je nutné ověřit nejen šířku, ale i hloubku skříňky a dostupnost přívodu vody a odpadu v místě, kam má myčka přijít – přesouvání rozvodů vody dodatečně zvyšuje náklady na instalaci.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud máš v kuchyni málo místa pro úložné prostory, zvaž, jestli ti úzká 45cm myčka nedá prostor pro širší skříňku se zásuvkami vedle ní – řešení úložného prostoru v malých kuchyních rozebíráme v článku o <Link href="/blog/uloziste-v-malem-byte" style={{ color: "#2a6496", textDecoration: "underline" }}>úložišti v malém bytě</Link>.</div>
            </section>

            <section id="lednice">
              <h2>Vestavná lednice/mraznička a větrání</h2>
              <p>Vestavné chladničky a mrazničky jsou zabudované do vysoké skříně a zakryté dvířky kuchyňské linky, díky čemuž jsou prakticky neviditelné. Vyžadují ale dostatečné větrání – mřížku nebo štěrbinu v soklu skříňky a často i komínek pro odvod teplého vzduchu od kompresoru za skříňkou nahoru.</p>
              <p>Bez správného větrání spotřebič spotřebovává víc energie, hlučí víc a má kratší životnost. Rozměry větracích otvorů a komínku se liší podle výrobce, proto je nutné postupovat přesně podle montážního návodu k danému modelu, ne podle obecného odhadu.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Vestavná lednice s mrazákem nahoře nebo dole ovlivňuje i to, jak vysokou skříň budeš potřebovat – kombinovaná lednice s mrazákem dole bývá vyšší a hlubší než samostatná vestavná chladnička.</div>
            </section>

            <section id="poradi">
              <h2>Pořadí výběru spotřebičů vs. návrh kuchyně</h2>
              <p>Doporučené pořadí je vybrat alespoň typ a orientační rozměry klíčových spotřebičů (trouba, varná deska, myčka, lednice) ještě před finálním rozkreslením kuchyňské linky. Rozměry spotřebičů totiž přímo ovlivňují šířky skříněk, umístění zásuvek elektřiny a vody i potřebu větracích otvorů.</p>
              <p>Konkrétní barvu, design panelu nebo přesný model v rámci stejné kategorie je možné doladit i později, protože rozměrově se modely stejné kategorie u většiny výrobců shodují. Pokud zatím neřešíš jen spotřebiče, ale celou kuchyni od základu, mrkni i na výběr <Link href="/blog/vyber-kuchynske-pracovni-desky" style={{ color: "#2a6496", textDecoration: "underline" }}>kuchyňské pracovní desky</Link>, která se vždy upravuje podle finálních rozměrů varné desky.</p>
            </section>

            <section id="energie">
              <h2>Energetické třídy a provozní náklady</h2>
              <p>Od roku 2021 platí nová stupnice energetických štítků (A až G) bez plusek, takže staré štítky A+++ už nejsou přímo srovnatelné s novými. Při srovnávání spotřebičů se dívej na aktuální štítek, ne na starší označení.</p>
              <ul>
                <li><strong>Trouba</strong> – třída A je u nových modelů standard, rozdíly ve spotřebě jsou mezi modely poměrně malé</li>
                <li><strong>Varná deska</strong> – indukce má nejnižší spotřebu energie na stejný výkon vaření oproti sklokeramice</li>
                <li><strong>Myčka</strong> – energeticky úsporné programy (eco) šetří energii i vodu, ale trvají déle</li>
                <li><strong>Lednice/mraznička</strong> – běží nepřetržitě, proto se vyšší energetická třída u tohoto spotřebiče vyplatí nejvíc, dlouhodobě ušetří nejvíc na účtech za elektřinu</li>
              </ul>
            </section>

            <section id="znacky">
              <h2>Značky a servis</h2>
              <p>Při výběru spotřebičů se vyplatí myslet i na dostupnost servisu a náhradních dílů v místě bydliště – levný spotřebič od méně známé značky může v případě poruchy znamenat dlouhé čekání na díl nebo nutnost objednat servis ze zahraničí. Zavedené značky s servisní sítí v Česku obvykle nabízí rychlejší opravy, i když je pořizovací cena o něco vyšší.</p>
              <p>Vyplatí se také zkontrolovat délku záruky a to, jestli ji lze prodloužit – u spotřebičů, které běží nepřetržitě (lednice) nebo se používají denně (trouba, varná deska), je delší záruka rozumná investice.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Mám nejdřív vybrat spotřebiče, nebo navrhnout kuchyňskou linku?", a: "Ideální pořadí je vybrat alespoň základní typy a rozměry spotřebičů (trouba, varná deska, myčka, lednice) ještě před finálním návrhem linky, protože jejich rozměry a požadavky na připojení ovlivňují rozměry skříněk a umístění zásuvek či odvětrání. Drobné detaily jako barva nebo konkrétní model lze doladit i později." },
                  { q: "Jaký je standardní rozměr vestavné trouby a varné desky?", a: "Standardní vestavná trouba má šířku 60 cm a výšku kolem 60 cm, vejde se do skříňky se stejnou vnitřní šířkou. Varné desky se vyrábí nejčastěji v šířce 60 cm, u indukčních desek s více zónami i 70–90 cm. Před nákupem je nutné znát přesný výřez v pracovní desce podle technického listu konkrétního modelu." },
                  { q: "Jaký typ varné desky je nejlepší – indukce, sklokeramika nebo plyn?", a: "Indukční deska je nejrychlejší, nejbezpečnější (zůstává chladná mimo dotek s nádobím) a energeticky nejúčinnější, ale vyžaduje nádobí s feromagnetickým dnem. Sklokeramika je levnější, ale ohřívá se i chladne pomaleji a je méně energeticky efektivní. Plynová deska má okamžitou regulaci výkonu a funguje i bez elektřiny, ale hůř se čistí a vyžaduje přívod plynu." },
                  { q: "Jak velkou myčku zvolit do menší kuchyně?", a: "Standardní myčka má šířku 60 cm a kapacitu kolem 12–14 sad nádobí, do menší kuchyně nebo pro jednu až dvě osoby se hodí úzká 45cm myčka s kapacitou 9–10 sad. Vždy je potřeba zkontrolovat i hloubku skříňky a dostupnost přívodu vody a odpadu v daném místě linky." },
                  { q: "Potřebuje vestavná lednice speciální větrání?", a: "Ano, vestavné chladničky a mrazničky potřebují větrací mřížku nebo štěrbinu v soklu skříňky a často i komínek pro odvod teplého vzduchu od kompresoru nahoru za skříňkou. Bez dostatečného větrání spotřebič zbytečně spotřebovává víc energie a má kratší životnost, proto je nutné dodržet rozměry podle montážního návodu výrobce." },
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
                    <div className="card-eyebrow-row"><span>Stěhování & rekonstrukce</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#rozmery">Standardní rozměry</a></li>
                <li><a href="#trouba">Výběr trouby</a></li>
                <li><a href="#varna-deska">Varná deska</a></li>
                <li><a href="#mycka">Vestavná myčka</a></li>
                <li><a href="#lednice">Vestavná lednice</a></li>
                <li><a href="#poradi">Pořadí výběru</a></li>
                <li><a href="#energie">Energetické třídy</a></li>
                <li><a href="#znacky">Značky a servis</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/stehovani" className="sidebar-cat-link">🏠 Stěhování & rekonstrukce<span>25 článků →</span></Link>
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
