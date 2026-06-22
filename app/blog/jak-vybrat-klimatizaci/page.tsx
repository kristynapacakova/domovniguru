import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Klimatizace – jak vybrat výkon, typ a dodavatele | DomovniGuru",
  description: "Jak vybrat klimatizaci v roce 2026? Srovnání typů (split, mobilní, multi-split), výpočet výkonu podle plochy, COP/SEER, náklady na instalaci a tipy na dodavatele.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-vybrat-klimatizaci" },
  openGraph: { title: "Klimatizace – jak vybrat výkon, typ a dodavatele", description: "Srovnání typů klimatizací, výpočet výkonu podle plochy, COP/SEER a provozní náklady. Praktický průvodce pro rok 2026.", url: "https://www.domovniguru.cz/blog/jak-vybrat-klimatizaci", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-09T08:00:00Z", modifiedTime: "2026-06-09T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Klimatizace%20%E2%80%93%20jak%20vybrat%20v%C3%BDkon%2C%20typ%20a%20dodavatele&cat=blog", width: 1200, height: 630, alt: "Klimatizace – jak vybrat výkon, typ a dodavatele" }] },
  twitter: { card: "summary_large_image", title: "Klimatizace – jak vybrat výkon, typ a dodavatele", description: "Srovnání typů klimatizací, výpočet výkonu podle plochy, COP/SEER a provozní náklady. Praktický průvodce 2026." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/jak-vybrat-klimatizaci#article", "headline": "Klimatizace – jak vybrat výkon, typ a dodavatele", "datePublished": "2026-06-09T08:00:00Z", "dateModified": "2026-06-09T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["klimatizace", "jak vybrat klimatizaci", "split klimatizace", "COP SEER", "výkon klimatizace", "instalace klimatizace"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Elektrika & osvětlení", "item": "https://www.domovniguru.cz/blog/kategorie/elektrika" }, { "@type": "ListItem", "position": 4, "name": "Klimatizace – jak vybrat výkon, typ a dodavatele", "item": "https://www.domovniguru.cz/blog/jak-vybrat-klimatizaci" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jaký výkon klimatizace potřebuji na 20 m²?", "acceptedAnswer": { "@type": "Answer", "text": "Na místnost 20 m² s běžnou výškou stropu (2,5 m) a průměrným osluněním postačí klimatizace s výkonem 2–2,5 kW (7 000–9 000 BTU). Při jižní orientaci nebo vysokém stropu počítejte s 2,5–3 kW." } }, { "@type": "Question", "name": "Smím si klimatizaci nainstalovat sám?", "acceptedAnswer": { "@type": "Answer", "text": "Elektrické zapojení a práci s chladivem (F-plyny) smí provádět pouze certifikovaný technik s oprávněním od Ministerstva životního prostředí. Samotnou montáž konzol a průchodů zdí si může majitel udělat sám, ale napájení a plnění chladivem vyžaduje odborníka." } }, { "@type": "Question", "name": "Co je COP a SEER u klimatizace?", "acceptedAnswer": { "@type": "Answer", "text": "COP (Coefficient of Performance) udává topný výkon při vytápění – COP 4 znamená, že za 1 kWh elektřiny získáte 4 kWh tepla. SEER (Seasonal Energy Efficiency Ratio) je sezónní ukazatel efektivity chlazení. Čím vyšší čísla, tím nižší provozní náklady." } }, { "@type": "Question", "name": "Může klimatizace v zimě topit?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, moderní invertorové klimatizace (tzv. tepelná čerpadla vzduch–vzduch) dokáží efektivně topit až do venkovních teplot –15 °C až –25 °C. COP při 7 °C venku bývá 3–4, při –15 °C klesá na 1,5–2,5. Jde o levnější vytápění než přímotopy nebo plynový kotel." } }] }] };

const RELATED = [
  { title: "Jak snížit účet za elektřinu – 15 ověřených tipů", href: "/blog/snizit-ucet-za-elektrinu", read: "5 min" },
  { title: "LED vs. žárovky – co se skutečně vyplatí?", href: "/blog/led-vs-zarovky", read: "4 min" },
  { title: "Jak vybrat dodavatele elektřiny – průvodce 2026", href: "/blog/jak-vybrat-dodavatele-elektriny", read: "6 min" },
  { title: "Chytrý termostat – kolik ušetříš na vytápění?", href: "/blog/chytry-termostat-uspora-vytapeni", read: "5 min" },
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
              <Link href="/blog/kategorie/elektrika">Elektrika & osvětlení</Link><span className="breadcrumb-sep">/</span>
              <span>Klimatizace – jak vybrat výkon, typ a dodavatele</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">💡 Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 7 min čtení</span>
              </div>
              <h1 className="article-h1">Klimatizace – jak vybrat výkon, typ a dodavatele</h1>
              <p className="article-lead">Klimatizace už není luxus. V létě 2025 překročily teploty v Česku 38 °C a zájem o klimatizace raketově vzrostl. Jak ale vybrat správný typ, výkon a dodavatele? Tenhle průvodce ti poradí od základů až po podpis smlouvy s montérem.</p>
              <div className="article-meta-row"><span>Publikováno: 9. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#typy">Typy klimatizací</a></li>
                <li><a href="#vykon">Jak vybrat výkon – BTU a kW podle plochy</a></li>
                <li><a href="#naklady">Provozní náklady a COP/SEER</a></li>
                <li><a href="#instalace">Instalace</a></li>
                <li><a href="#dodavatel">Jak vybrat dodavatele</a></li>
                <li><a href="#topeni">Klimatizace jako tepelné čerpadlo</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="typy">
              <h2>Typy klimatizací</h2>
              <p>Na trhu existují tři základní typy klimatizací pro domácnosti a byty. Každý má jiné přednosti i omezení – a výběr závisí na tom, zda jde o byt nebo dům, zda máte souhlas SVJ a jak velkou místnost chcete chladit.</p>
              <h3>Split (nástěnná nebo kazetová)</h3>
              <p>Nejrozšířenější typ v ČR. Skládá se z vnitřní jednotky (montuje se na stěnu nebo do stropu) a venkovní jednotky (kompresor). Propojují je měděné potrubí a elektrokabel. Výkon 2–7 kW, tichý provoz, dlouhá životnost.</p>
              <h3>Mobilní klimatizace</h3>
              <p>Samostatné zařízení na kolečkách. Nepotřebuje montáž, ale je hlučnější a méně efektivní než split. Horký vzduch odvádí hadicí přes okno nebo zeď. Vhodná jako dočasné řešení nebo pokud SVJ nedovoluje venkovní jednotku.</p>
              <h3>Multi-split</h3>
              <p>Jedna venkovní jednotka napájí více vnitřních – ideální pro klimatizaci celého bytu nebo domu. Dražší na pořízení, ale levnější než instalace více samostatných splitů (jedna průchodka zdí, jedna venkovní jednotka).</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ</th><th>Výkon (kW)</th><th>Cena pořízení</th><th>Montáž</th><th>Vhodnost</th></tr></thead>
                  <tbody>
                    <tr><td>Split nástěnná</td><td>2–7 kW</td><td>15 000–40 000 Kč</td><td>8 000–15 000 Kč</td><td>Byt, jeden pokoj nebo místnost</td></tr>
                    <tr><td>Kazetová split</td><td>3–8 kW</td><td>20 000–60 000 Kč</td><td>15 000–25 000 Kč</td><td>Kanceláře, otevřené prostory</td></tr>
                    <tr><td>Mobilní</td><td>1,5–3,5 kW</td><td>8 000–18 000 Kč</td><td>0 Kč (bez montáže)</td><td>Pronajatý byt, dočasné řešení</td></tr>
                    <tr><td>Multi-split (2+1)</td><td>2×2,5 kW</td><td>35 000–70 000 Kč</td><td>20 000–35 000 Kč</td><td>Byt 3+1, celý dům</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud bydlíte v bytovém domě, vždy si předem ověřte, zda SVJ dovoluje instalaci venkovní jednotky na fasádu. Část SVJ to zakazuje nebo vyžaduje souhlas. Bez povolení hrozí pokuta a nucená demontáž.</div>
            </section>

            <section id="vykon">
              <h2>Jak vybrat výkon – BTU a kW podle plochy místnosti</h2>
              <p>Výkon klimatizace se udává v kW nebo BTU (British Thermal Unit). Přepočet: 1 kW ≈ 3 412 BTU. Pro orientační výpočet platí pravidlo <strong>80–100 W na m²</strong> pro standardní místnost (výška stropu 2,5 m, průměrné oslunění).</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Plocha místnosti</th><th>Doporučený výkon</th><th>BTU</th><th>Příklad použití</th></tr></thead>
                  <tbody>
                    <tr><td>do 15 m²</td><td>1,5–2 kW</td><td>5 000–7 000 BTU</td><td>Ložnice, dětský pokoj</td></tr>
                    <tr><td>15–25 m²</td><td>2–2,5 kW</td><td>7 000–9 000 BTU</td><td>Obývací pokoj, kuchyně</td></tr>
                    <tr><td>25–35 m²</td><td>2,5–3,5 kW</td><td>9 000–12 000 BTU</td><td>Větší obývací pokoj</td></tr>
                    <tr><td>35–50 m²</td><td>3,5–5 kW</td><td>12 000–17 000 BTU</td><td>Otevřený prostor kuchyně + obývák</td></tr>
                    <tr><td>50–70 m²</td><td>5–7 kW</td><td>17 000–24 000 BTU</td><td>Velký obývák, kancelář</td></tr>
                  </tbody>
                </table>
              </div>
              <h3>Faktory, které zvyšují potřebný výkon</h3>
              <ul>
                <li><strong>Jižní nebo západní orientace okna</strong> – přidejte 10–20 % výkonu</li>
                <li><strong>Velká prosklená plocha (okna, zimní zahrada)</strong> – přidejte 15–25 %</li>
                <li><strong>Vysoký strop (nad 2,7 m)</strong> – přidejte 10 % za každých 25 cm nad standardem</li>
                <li><strong>Špatná tepelná izolace (starší domy)</strong> – přidejte 20–30 %</li>
                <li><strong>Podkroví</strong> – může vyžadovat až dvojnásobný výkon oproti přízemí</li>
              </ul>
              <div className="article-tip"><strong>💡 Pozor na předimenzování:</strong> Příliš výkonná klimatizace se zapíná a vypíná příliš často (krátké cykly), hůře odvlhčuje vzduch a zkracuje svou životnost. Lepší je vybrat přiměřený výkon než silnější „pro jistotu".</div>
            </section>

            <section id="naklady">
              <h2>Provozní náklady a COP/SEER</h2>
              <p>Efektivita klimatizace se měří dvěma ukazateli: <strong>SEER</strong> (sezónní efektivita chlazení) a <strong>COP</strong> (topný výkon při vytápění). Čím vyšší hodnota, tím méně elektřiny spotřebujete na stejný výkon chlazení nebo topení. Roční náklady na provoz snadno spočítáš v naší <Link href="/kalkulacky/spotreba-elektriciny" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačce spotřeby elektřiny</Link>.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Třída efektivity</th><th>SEER (chlazení)</th><th>Roční spotřeba (2,5 kW, 800 h)</th><th>Roční náklady (6 Kč/kWh)</th></tr></thead>
                  <tbody>
                    <tr><td>A+++ (nejlepší)</td><td>8,5 a více</td><td>235 kWh</td><td>~1 410 Kč</td></tr>
                    <tr><td>A++</td><td>6,1–8,5</td><td>310 kWh</td><td>~1 860 Kč</td></tr>
                    <tr><td>A+</td><td>5,6–6,1</td><td>357 kWh</td><td>~2 140 Kč</td></tr>
                    <tr><td>A</td><td>5,1–5,6</td><td>392 kWh</td><td>~2 350 Kč</td></tr>
                    <tr><td>B (starší modely)</td><td>3,8–5,1</td><td>525 kWh</td><td>~3 150 Kč</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Rozdíl mezi třídou A+++ a B je přibližně <strong>1 700 Kč ročně</strong> na jedné klimatizaci. Za 10 let ušetříte 17 000 Kč – cena, která pokryje rozdíl v pořizovací ceně mezi základním a prémiovým modelem.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Invertorové klimatizace (proměnlivé otáčky kompresoru) jsou výrazně efektivnější než on/off modely. V roce 2026 jsou prakticky všechny nové klimatizace invertorové – přesto si to při výběru ověřte.</div>
            </section>

            <section id="instalace">
              <h2>Instalace – kdo smí montovat a kde umístit jednotky</h2>
              <h3>Certifikace pro práci s F-plyny</h3>
              <p>Chladivo v klimatizacích (nejčastěji R32 nebo R410A) jsou fluorované skleníkové plyny (tzv. F-plyny). Podle nařízení EU č. 517/2014 smí s nimi pracovat pouze <strong>certifikovaní technici s osvědčením od Ministerstva životního prostředí ČR</strong>. Bez tohoto certifikátu je instalace nebo doplnění chladiva nelegální a pojišťovna může odmítnout pojistné plnění při škodě.</p>
              <div className="article-tip"><strong>⚠️ Důležité:</strong> Vždy si před montáží vyžádejte kopii certifikátu technika. Legitimní firmy jej poskytnou bez problémů.</div>
              <h3>Kde umístit vnitřní jednotku</h3>
              <ul>
                <li>Na stěnu ve výšce 2–2,5 m nad podlahou (studený vzduch přirozeně klesá dolů)</li>
                <li>Tak, aby vzduch proudil po celé místnosti – ne přímo nad postel nebo pracovní stůl</li>
                <li>Minimálně 15 cm od stropu a 20 cm od rohu místnosti</li>
                <li>S přístupem pro čištění filtrů (každé 2–4 týdny v sezóně)</li>
              </ul>
              <h3>Kde umístit venkovní jednotku</h3>
              <ul>
                <li>Na fasádu, terasu nebo střechu – s dostatečným prouděním vzduchu kolem</li>
                <li>Ve stínu nebo na severní straně (přehřívání snižuje výkon a životnost)</li>
                <li>Délka potrubí mezi jednotkami: standardně do 5–10 m, maximum obvykle 15–20 m (delší trasy zdražují a snižují výkon)</li>
                <li>Mimo dosah dešťové vody a sněhu – nebo s ochrannou stříškou</li>
              </ul>
            </section>

            <section id="dodavatel">
              <h2>Jak vybrat dodavatele klimatizace</h2>
              <p>Kvalita montáže rozhoduje stejně jako kvalita zařízení. Špatně nainstalovaná klimatizace spotřebovává více energie, rychleji se kazí a může způsobit škody na stropě nebo fasádě.</p>
              <h3>Na co se ptát dodavatele</h3>
              <ul>
                <li>Má certifikát pro práci s F-plyny? (zákonná podmínka)</li>
                <li>Jaká je záruka na zařízení a na práci? (standard: 2 roky na práci, 3–5 let na zařízení)</li>
                <li>Zahrnuje cena montáže průchodku zdí, elektropřípojku a plnění chladivem?</li>
                <li>Provádí firma také servis a čištění? Za kolik?</li>
                <li>Jak dlouhá je dodací lhůta? (v sezóně červen–srpen bývají fronty 4–8 týdnů)</li>
              </ul>
              <h3>Osvědčené značky klimatizací v ČR (2026)</h3>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Značka</th><th>Původ</th><th>Cenová třída</th><th>Poznámka</th></tr></thead>
                  <tbody>
                    <tr><td>Daikin</td><td>Japonsko</td><td>Prémiová (25 000–55 000 Kč)</td><td>Nejlepší SEER, tichý provoz, rozsáhlá servisní síť v ČR</td></tr>
                    <tr><td>Mitsubishi Electric</td><td>Japonsko</td><td>Prémiová (22 000–50 000 Kč)</td><td>Výborná spolehlivost, velmi tichá vnitřní jednotka</td></tr>
                    <tr><td>Panasonic</td><td>Japonsko</td><td>Střední–prémiová (18 000–45 000 Kč)</td><td>Dobrý poměr cena/výkon, Wi-Fi ovládání v základu</td></tr>
                    <tr><td>LG</td><td>Jižní Korea</td><td>Střední (15 000–38 000 Kč)</td><td>Solidní výkon, dostupné náhradní díly</td></tr>
                    <tr><td>Samsung</td><td>Jižní Korea</td><td>Střední (14 000–35 000 Kč)</td><td>Moderní design, chytrá domácnost SmartThings</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Vždy si vyžádejte alespoň 3 nabídky od různých firem. Ceny za stejnou jednotku se mohou lišit o 30–50 % – zejména v montážních nákladech. Nechejte si vše sepsat písemně včetně specifikace chladiva a délky potrubí.</div>
            </section>

            <section id="topeni">
              <h2>Klimatizace jako tepelné čerpadlo (topení v zimě)</h2>
              <p>Moderní invertorové klimatizace nejsou jen pro léto. V režimu vytápění fungují jako <strong>tepelné čerpadlo vzduch–vzduch</strong> a dokáží efektivně topit i při záporných teplotách venku.</p>
              <h3>Jak efektivní je zimní topení?</h3>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Venkovní teplota</th><th>Topný výkon (COP)</th><th>Náklady vs. přímotop</th><th>Náklady vs. plyn (6 Kč/kWh el.)</th></tr></thead>
                  <tbody>
                    <tr><td>+7 °C</td><td>COP 3,5–4,5</td><td>3–4× levnější</td><td>Srovnatelné nebo levnější</td></tr>
                    <tr><td>0 °C</td><td>COP 2,5–3,5</td><td>2,5–3× levnější</td><td>Mírně dražší než plyn</td></tr>
                    <tr><td>–10 °C</td><td>COP 2,0–2,8</td><td>2–2,5× levnější</td><td>Srovnatelné s plynem</td></tr>
                    <tr><td>–20 °C</td><td>COP 1,5–2,0</td><td>1,5–2× levnější</td><td>Mírně dražší než plyn</td></tr>
                    <tr><td>pod –25 °C</td><td>COP pod 1,5</td><td>Nevýhodné</td><td>Dražší než plyn</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Většina prémiových split klimatizací (Daikin, Mitsubishi) dnes zvládá topit až do <strong>–20 °C až –25 °C</strong> venkovní teploty. V českém klimatu (zimy průměrně –2 °C až –8 °C) jde o velmi výhodné doplňkové nebo dokonce hlavní vytápění.</p>
              <h3>Výhody klimatizace jako topení</h3>
              <ul>
                <li>Rychlé ohřátí místnosti (zejména invertorové modely)</li>
                <li>Odvlhčování vzduchu – příjemnější mikroklima oproti přímotopům</li>
                <li>Nízké provozní náklady ve srovnání s elektrickým přímotopem</li>
                <li>Žádné emise NOx a CO₂ přímo v místnosti (na rozdíl od plynového topení)</li>
                <li>Jedno zařízení = chlazení v létě + topení v zimě</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Klimatizace jako hlavní zdroj tepla je nejvýhodnější v dobře izolovaných domech (nízkoenergetické a pasivní domy). Ve starším domě se špatnou izolací se klimatizaci nevyhnete přetěžování – nejprve se vyplatí zateplit.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jaký výkon klimatizace potřebuji na 20 m²?", a: "Na místnost 20 m² s běžnou výškou stropu (2,5 m) a průměrným osluněním postačí klimatizace s výkonem 2–2,5 kW (7 000–9 000 BTU). Při jižní orientaci nebo vysokém stropu počítejte s 2,5–3 kW." },
                  { q: "Smím si klimatizaci nainstalovat sám?", a: "Elektrické zapojení a práci s chladivem (F-plyny) smí provádět pouze certifikovaný technik s oprávněním od Ministerstva životního prostředí. Samotnou montáž konzol a průchodů zdí si může majitel udělat sám, ale napájení a plnění chladivem vyžaduje odborníka." },
                  { q: "Co je COP a SEER u klimatizace?", a: "COP (Coefficient of Performance) udává topný výkon při vytápění – COP 4 znamená, že za 1 kWh elektřiny získáte 4 kWh tepla. SEER (Seasonal Energy Efficiency Ratio) je sezónní ukazatel efektivity chlazení. Čím vyšší čísla, tím nižší provozní náklady." },
                  { q: "Může klimatizace v zimě topit?", a: "Ano, moderní invertorové klimatizace (tzv. tepelná čerpadla vzduch–vzduch) dokáží efektivně topit až do venkovních teplot –15 °C až –25 °C. COP při 7 °C venku bývá 3–4, při –15 °C klesá na 1,5–2,5. Jde o levnější vytápění než přímotopy nebo plynový kotel." },
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
                    <div className="card-eyebrow-row"><span>Elektrika & osvětlení</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#typy">Typy klimatizací</a></li>
                <li><a href="#vykon">Výkon – BTU a kW</a></li>
                <li><a href="#naklady">Provozní náklady</a></li>
                <li><a href="#instalace">Instalace</a></li>
                <li><a href="#dodavatel">Jak vybrat dodavatele</a></li>
                <li><a href="#topeni">Vytápění v zimě</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/elektrika" className="sidebar-cat-link">💡 Elektrika & osvětlení<span>20 článků →</span></Link>
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
