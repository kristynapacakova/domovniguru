import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Automatické zavlažování zahrady – instalace, nastavení a cena",
  description: "Kompletní průvodce automatickým zavlažováním zahrady: typy systémů, plánování zón, instalace krok za krokem a ceny pro rok 2026.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/automaticke-zavlazovani-zahrady" },
  openGraph: { title: "Automatické zavlažování zahrady – instalace, nastavení a cena", description: "Kapkové, postřikovací nebo podzemní? Průvodce výběrem, instalací a cenami automatického zavlažování 2026.", url: "https://www.domovniguru.cz/blog/automaticke-zavlazovani-zahrady", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-09T08:00:00Z", modifiedTime: "2026-06-09T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Automatick%C3%A9%20zavla%C5%BEov%C3%A1n%C3%AD%20zahrady%20%E2%80%93%20instalace%2C%20nastaven%C3%AD%20a%20cena&cat=blog", width: 1200, height: 630, alt: "Automatické zavlažování zahrady – instalace, nastavení a cena" }] },
  twitter: { card: "summary_large_image", title: "Automatické zavlažování zahrady – instalace a cena", description: "Kapkové, postřikovací nebo podzemní? Průvodce výběrem, instalací a cenami 2026." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.domovniguru.cz/blog/automaticke-zavlazovani-zahrady#article",
      "headline": "Automatické zavlažování zahrady – instalace, nastavení a cena",
      "datePublished": "2026-06-09T08:00:00Z",
      "dateModified": "2026-06-09T08:00:00Z",
      "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "inLanguage": "cs",
      "keywords": ["automatické zavlažování zahrady", "kapkové zavlažování", "postřikovač zahrady", "zavlažovací systém", "instalace zavlažování", "cena zavlažování"]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" },
        { "@type": "ListItem", "position": 3, "name": "Zahrada & terasa", "item": "https://www.domovniguru.cz/blog/kategorie/zahrada" },
        { "@type": "ListItem", "position": 4, "name": "Automatické zavlažování zahrady", "item": "https://www.domovniguru.cz/blog/automaticke-zavlazovani-zahrady" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Kolik stojí automatické zavlažování zahrady?", "acceptedAnswer": { "@type": "Answer", "text": "Jednoduchý kapkový systém svépomocí vyjde na 2 000–6 000 Kč. Středně velký systém pro zahradu 200–400 m² stojí 15 000–35 000 Kč včetně práce. Profesionální instalace pro celou zahradu přijde na 40 000–100 000 Kč a více." } },
        { "@type": "Question", "name": "Jak dlouho trvá instalace zavlažovacího systému?", "acceptedAnswer": { "@type": "Answer", "text": "Kapkový systém svépomocí zvládneš za víkend. Profesionální podzemní systém s výkopem trvá odborné firmě 2–5 dní podle velikosti zahrady." } },
        { "@type": "Question", "name": "Vyplatí se automatické zavlažování?", "acceptedAnswer": { "@type": "Answer", "text": "Automatické zavlažování šetří 30–50 % vody oproti ručnímu zalévání. Zároveň ušetříš čas a rostliny jsou zdravější díky pravidelnému a rovnoměrnému zavlažování." } },
        { "@type": "Question", "name": "Co dělat se zavlažováním před zimou?", "acceptedAnswer": { "@type": "Answer", "text": "Systém je nutné před mrazem odvodnit – vypustit vodu z potrubí, ideálně profouknutím kompresorem. Řídicí jednotku a elektromagnetické ventily přemísti do mrazu odolného prostoru nebo chraň izolací." } }
      ]
    }
  ]
};

const RELATED = [
  { title: "Jak zavlažovat zahradu – ruční i automatická závlaha 2026", href: "/blog/zavlaha-zahrada-postup", read: "6 min" },
  { title: "Jak připravit zahradu na jaro – co udělat v dubnu 2026", href: "/blog/jarni-zahrada", read: "7 min" },
  { title: "Jak správně sekat trávník – hustý pažit bez plevele", href: "/blog/jak-sekat-travnik", read: "8 min" },
  { title: "Jak zasít trávník od nuly – příprava půdy, setí, péče 2026", href: "/blog/zasit-travnik-od-nuly", read: "7 min" },
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
              <span>Automatické zavlažování zahrady</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Automatické zavlažování zahrady – instalace, nastavení a cena</h1>
              <p className="article-lead">Automatické zavlažování šetří čas i vodu – ale jen tehdy, když je správně navržené a nainstalované. Průvodce ti ukáže, jak vybrat správný systém, naplánovat zóny, zvládnout instalaci svépomocí a kolik celé řešení bude stát.</p>
              <div className="article-meta-row"><span>Publikováno: 9. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#typy-systemu">Typy zavlažovacích systémů</a></li>
                <li><a href="#planovani">Jak naplánovat systém</a></li>
                <li><a href="#komponenty">Komponenty systému</a></li>
                <li><a href="#instalace">Instalace krok za krokem</a></li>
                <li><a href="#ceny">Ceny a rozpočet</a></li>
                <li><a href="#nastaveni">Nastavení a řízení</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="typy-systemu">
              <h2>Typy zavlažovacích systémů</h2>
              <p>Každá zahrada je jiná – a každý systém zavlažování se hodí na něco jiného. Čtyři základní typy se liší způsobem dodávky vody, cenou a vhodností pro různé plochy.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead>
                    <tr>
                      <th>Typ systému</th>
                      <th>Vhodné pro</th>
                      <th>Cena (svépomocí)</th>
                      <th>Efektivita vody</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Kapkové zavlažování</strong></td>
                      <td>Záhony, zelenina, keře, záhony s rostlinami</td>
                      <td>500–2 000 Kč / zóna</td>
                      <td>Velmi vysoká (90–95 %)</td>
                    </tr>
                    <tr>
                      <td><strong>Postřikovací zavlažování</strong></td>
                      <td>Trávník, větší travnaté plochy</td>
                      <td>3 000–8 000 Kč / zóna</td>
                      <td>Střední (60–75 %)</td>
                    </tr>
                    <tr>
                      <td><strong>Mikropostřikovací</strong></td>
                      <td>Záhony, nízké keře, skleníky</td>
                      <td>1 500–4 000 Kč / zóna</td>
                      <td>Vysoká (80–90 %)</td>
                    </tr>
                    <tr>
                      <td><strong>Podzemní (pop-up)</strong></td>
                      <td>Trávník, reprezentativní plochy</td>
                      <td>8 000–20 000 Kč / zóna</td>
                      <td>Střední–vysoká (70–85 %)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Pro zahradu s trávníkem i záhony kombinuj oba systémy – podzemní pop-up postřikovače na trávník a kapkové hadice na záhony. Každý typ potřebuje jinou frekvenci i množství vody.</div>
            </section>

            <section id="planovani">
              <h2>Jak naplánovat systém</h2>
              <p>Dobré plánování je základ. Špatně navržený systém bude buď nedostatečně zavlažovat, nebo plýtvat vodou a přetěžovat vodovodní přípojku.</p>
              <h3>Zóny zavlažování</h3>
              <p>Zahradu rozděl do zón podle typu povrchu a druhu rostlin. Trávník tvoří jednu zónu, záhony se zeleninou druhou, okrasné záhony třetí. Každá zóna se spouští samostatně přes vlastní elektromagnetický ventil.</p>
              <h3>Tlak vody a průtok</h3>
              <p>Změř si tlak vody v přípojce (běžný domovní tlak je 2,5–4 bar) a průtok v litrech za minutu. Tyto hodnoty určují, kolik postřikovačů nebo kapkovačů může běžet současně v jedné zóně. Přetížení zóny vede k nedostatečnému tlaku a nerovnoměrnému zavlažování.</p>
              <h3>Výpočet spotřeby vody</h3>
              <p>Trávník potřebuje přibližně 20–25 l/m² týdně, záhony se zeleninou 15–20 l/m² a okrasné záhony 10–15 l/m². Potřebné množství vody pro svou zahradu spočítáš v naší <Link href="/kalkulacky/kolik-zavlahy" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačce spotřeby vody na zavlažování</Link>.</p>
              <h3>Praktické tipy pro plánování</h3>
              <ul>
                <li>Nakresli si plán zahrady na papír s rozměry a vyznač jednotlivé zóny</li>
                <li>Rozstikovací poloměr postřikovačů se musí překrývat o 30–40 %, aby nezůstala suchá místa</li>
                <li>Přívod vody umísti co nejblíže k řídicí jednotce – minimalizuješ délku rozvodů</li>
                <li>Počítej s jedním ventilem na jednu zónu a rezervuj místo pro hlavní uzávěr a zpětný ventil</li>
              </ul>
            </section>

            <section id="komponenty">
              <h2>Komponenty systému</h2>
              <p>Automatický zavlažovací systém se skládá z několika klíčových komponent. Každá hraje svou roli a šetření na levných dílech se obvykle prodraží.</p>
              <h3>Řídicí jednotka (timer)</h3>
              <p>Mozek celého systému. Nastavíš čas, frekvenci a délku zavlažování pro každou zónu. Základní modely (300–800 Kč) mají jednoduché časové programy; chytré jednotky s WiFi (1 500–4 000 Kč) umožňují ovládání přes aplikaci a napojení na předpověď počasí.</p>
              <h3>Elektromagnetické ventily</h3>
              <p>Každá zóna potřebuje jeden ventil (300–800 Kč/kus). Ventil otevírá nebo uzavírá přívod vody do dané zóny na pokyn řídicí jednotky. Instalují se do plastových šachet zapuštěných do země.</p>
              <h3>Postřikovače a tryskovače</h3>
              <p>Pop-up postřikovače (50–300 Kč/kus) jsou určeny pro trávník – vysunou se při provozu a po zavlažování se zatáhnou. Tryskovače mají pevný dosah, rotační postřikovače pokrývají větší plochu (4–12 m).</p>
              <h3>Kapkové hadice a kapkovače</h3>
              <p>Pro záhony a keře. Kapková hadice s integrovanými kapkovači (15–30 Kč/m) se položí podél rostlin. Bodové kapkovače (5–20 Kč/kus) se připojují k tenké PE hadici a umístí přímo k jednotlivým rostlinám.</p>
              <h3>Čidlo deště</h3>
              <p>Nezbytná součást každého systému (500–1 500 Kč). Automaticky pozastaví zavlažování při dešti. Bez něj systém zalévá i za deště – plýtvá vodou a poškozuje rostliny přemokřením.</p>
            </section>

            <section id="instalace">
              <h2>Instalace krok za krokem</h2>
              <h3>1. Příprava výkopu</h3>
              <p>Výkop pro hlavní potrubí bývá 30–40 cm hluboký (pod hloubkou promrzání). Postřikovací větve mohou být mělčí (15–20 cm). Výkop veď mimo místa s hustým kořenovým systémem stromů. Na trávník je ideální použít vibracní radlici (půjčovna: 500–800 Kč/den), která potrubí zapraví bez rozkopání celého trávníku.</p>
              <h3>2. Pokládka potrubí</h3>
              <p>Hlavní rozvod tvoří PE potrubí průměru 25–32 mm. Na jednotlivé zóny odchází větve 16–20 mm. Spoje zajišťuj originálními kompresními tvarovkami – lepené spoje v zemi jsou časovaná bomba. Postřikovače napoj ohebnou hadicí (25–30 cm), aby bylo možné je po osazení nastavit do správné výšky.</p>
              <h3>3. Osazení postřikovačů a kapkovačů</h3>
              <p>Pop-up postřikovač osaď tak, aby jeho horní okraj byl v úrovni terénu. Trysku nastav na požadovaný sektor a dosah. Kapkové hadice zajisti kolíky každých 30–50 cm a překryj mulčem – prodloužíš tím životnost a omezíš odpařování.</p>
              <h3>4. Zapojení řídicí jednotky a ventilů</h3>
              <p>Řídicí jednotka se napájí ze zásuvky 230 V. K ventilům vede nízkonapěťový signální kabel (typicky 24 V AC). Kabel veď v chráničce souběžně s hlavním potrubím. Ventilové šachty umísti na přístupných místech pro případ opravy.</p>
              <h3>5. Napouštění, odvzdušnění a test</h3>
              <p>Před zasypáním výkopu naplň systém vodou a zkontroluj těsnost všech spojů. Jednotlivé zóny postupně spusť manuálně a nastav dosah a sektor postřikovačů. Teprve po úspěšném testu výkop zasypej a zatrávni.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Vždy instaluj zpětný ventil na přívodu vody do systému. Zabrání zpětnému nasátí vody ze zavlažování do domovního vodovodu – je to požadavek normy i zdravého rozumu.</div>
            </section>

            <section id="ceny">
              <h2>Ceny a rozpočet</h2>
              <p>Cena závisí na ploše zahrady, počtu zón, typu systému a na tom, zda instalaci zvládneš sám nebo zavoláš firmu.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead>
                    <tr>
                      <th>Varianta</th>
                      <th>Plocha / popis</th>
                      <th>Cena celkem</th>
                      <th>Cena za m²</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Jednoduché kapkové (svépomocí)</strong></td>
                      <td>Záhony a truhlíky, 1–2 zóny</td>
                      <td>2 000–6 000 Kč</td>
                      <td>20–60 Kč/m²</td>
                    </tr>
                    <tr>
                      <td><strong>Středně velký systém</strong></td>
                      <td>Zahrada 200–400 m², 3–6 zón, odborná montáž</td>
                      <td>15 000–35 000 Kč</td>
                      <td>50–120 Kč/m²</td>
                    </tr>
                    <tr>
                      <td><strong>Profesionální instalace</strong></td>
                      <td>Celá zahrada 500–1 000 m², 6–12 zón, pop-up + kapkové</td>
                      <td>45 000–100 000 Kč</td>
                      <td>80–180 Kč/m²</td>
                    </tr>
                    <tr>
                      <td><strong>Chytrý systém s WiFi</strong></td>
                      <td>Jako výše + chytrá řídicí jednotka, čidla vlhkosti</td>
                      <td>+ 5 000–15 000 Kč</td>
                      <td>navýšení</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Požádej o nabídky minimálně tři firmy. Ceny se mohou lišit i o 40 %. Ověř, zda firma nabízí záruku na práci (standardně 24 měsíců) a roční servis (odvzdušnění na zimu, zprovoznění na jaře).</div>
            </section>

            <section id="nastaveni">
              <h2>Nastavení a řízení</h2>
              <h3>Chytré zavlažování s WiFi a aplikací</h3>
              <p>Chytré řídicí jednotky (Gardena Smart, Rain Bird, Hunter Hydrawise) se napojují na WiFi a ovládají se přes mobil odkudkoliv. Prémiová funkce je napojení na předpověď počasí – systém sám odloží zavlažování, pokud se čeká déšť. Čidlo půdní vlhkosti (500–1 500 Kč) pak zajistí, že systém nezalévá přemokřenou půdu.</p>
              <h3>Optimální nastavení časů</h3>
              <p>Zavlažuj brzy ráno (5:00–8:00), kdy je nejmenší odpařování a rostliny mají vodu dostupnou přes celý horký den. Vyhni se zavlažování v poledne (vysoké ztráty odparem) a večer (riziko plísní na listech).</p>
              <h3>Přezimování systému</h3>
              <p>Před prvními mrazíky (říjen–listopad) je nutné systém odvodnit. Uzavři hlavní přívod vody, otevři vypouštěcí ventily a ideálně prožeň systém kompresorem (0,5–1 bar). Řídicí jednotku a ventily chraň před mrazem nebo přemísti do garáže.</p>
              <h3>Jarní zprovoznění a údržba</h3>
              <p>Na jaře systém postupně napusť, zkontroluj těsnost spojů a seřiď postřikovače. Vyměň opotřebované těsnění ventilů a trysky postřikovačů (životnost 5–8 let). Filtr na přívodu vody čisti každé 2 roky.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Kolik stojí automatické zavlažování zahrady?", a: "Jednoduchý kapkový systém svépomocí vyjde na 2 000–6 000 Kč. Středně velký systém pro zahradu 200–400 m² stojí 15 000–35 000 Kč včetně práce. Profesionální instalace pro celou zahradu přijde na 40 000–100 000 Kč a více." },
                  { q: "Jak dlouho trvá instalace zavlažovacího systému?", a: "Kapkový systém svépomocí zvládneš za víkend. Profesionální podzemní systém s výkopem trvá odborné firmě 2–5 dní podle velikosti zahrady." },
                  { q: "Vyplatí se automatické zavlažování?", a: "Automatické zavlažování šetří 30–50 % vody oproti ručnímu zalévání. Zároveň ušetříš čas a rostliny jsou zdravější díky pravidelnému a rovnoměrnému zavlažování." },
                  { q: "Co dělat se zavlažováním před zimou?", a: "Systém je nutné před mrazem odvodnit – vypustit vodu z potrubí, ideálně profouknutím kompresorem. Řídicí jednotku a elektromagnetické ventily přemísti do mrazu odolného prostoru nebo chraň izolací." },
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
                <li><a href="#typy-systemu">Typy systémů</a></li>
                <li><a href="#planovani">Jak naplánovat</a></li>
                <li><a href="#komponenty">Komponenty</a></li>
                <li><a href="#instalace">Instalace</a></li>
                <li><a href="#ceny">Ceny a rozpočet</a></li>
                <li><a href="#nastaveni">Nastavení a řízení</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/zahrada" className="sidebar-cat-link">🌿 Zahrada & terasa<span>články →</span></Link>
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
