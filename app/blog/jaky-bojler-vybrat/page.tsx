import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jaký bojler vybrat – elektrický, plynový nebo zásobníkový?",
  description: "Srovnání typů bojlerů, výpočet správné velikosti a reálné roční náklady na ohřev vody. Jak vybrat bojler, který se vyplatí.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jaky-bojler-vybrat" },
  openGraph: { title: "Jaký bojler vybrat – elektrický, plynový nebo zásobníkový?", description: "Typy bojlerů, správná velikost podle počtu osob a srovnání ročních nákladů na ohřev vody.", url: "https://www.domovniguru.cz/blog/jaky-bojler-vybrat", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-07T08:00:00Z", modifiedTime: "2026-06-07T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%C3%BD%20bojler%20vybrat%20%E2%80%93%20elektrick%C3%BD%2C%20plynov%C3%BD%20nebo%20z%C3%A1sobn%C3%ADkov%C3%BD%3F&cat=blog", width: 1200, height: 630, alt: "Jaký bojler vybrat – elektrický, plynový nebo zásobníkový?" }] },
  twitter: { card: "summary_large_image", title: "Jaký bojler vybrat – elektrický, plynový nebo zásobníkový?", description: "Typy bojlerů, výpočet velikosti a srovnání ročních nákladů na ohřev vody." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/jaky-bojler-vybrat#article", "headline": "Jaký bojler vybrat – elektrický, plynový nebo zásobníkový?", "datePublished": "2026-06-07T08:00:00Z", "dateModified": "2026-06-07T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["jaký bojler vybrat", "elektrický bojler", "plynový ohřívač vody", "zásobníkový ohřívač", "velikost bojleru"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Elektrika & osvětlení", "item": "https://www.domovniguru.cz/blog/kategorie/elektrika" }, { "@type": "ListItem", "position": 4, "name": "Jaký bojler vybrat", "item": "https://www.domovniguru.cz/blog/jaky-bojler-vybrat" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jak velký bojler potřebuji pro 4člennou domácnost?", "acceptedAnswer": { "@type": "Answer", "text": "Pro domácnost se 4 osobami se obvykle doporučuje zásobník o objemu 150–200 litrů, podle toho, zda preferujete sprchování nebo koupání ve vaně a zda máte víc koupelen." } }, { "@type": "Question", "name": "Co je levnější – elektrický nebo plynový ohřev vody?", "acceptedAnswer": { "@type": "Answer", "text": "Plynový ohřev vody bývá v přepočtu na kWh levnější (cena plynu je nižší než elektřiny), ale pořizovací a instalační náklady jsou vyšší kvůli odvodu spalin a revizím. Elektrický bojler je levnější na pořízení, ale dražší na provoz." } }, { "@type": "Question", "name": "Jak často je potřeba bojler kontrolovat a čistit?", "acceptedAnswer": { "@type": "Answer", "text": "Elektrický bojler je vhodné nechat zkontrolovat a odvápnit jednou za 2–3 roky, plynový ohřívač vyžaduje pravidelnou roční revizi spalinové cesty. Anodu v zásobníkovém ohřívači je potřeba kontrolovat přibližně jednou za 2 roky." } }, { "@type": "Question", "name": "Vyplatí se průtokový ohřívač do bytu?", "acceptedAnswer": { "@type": "Answer", "text": "Průtokový ohřívač se hodí tam, kde je málo místa nebo nepravidelná spotřeba teplé vody – například do garsonky nebo na chalupu. Pro rodinný dům s vanou a více odběrnými místy je vhodnější zásobníkový ohřívač s dostatečnou kapacitou." } }] }] };

const RELATED = [
  { title: "Jak snížit účet za elektřinu doma", href: "/blog/snizit-ucet-za-elektrinu", read: "5 min" },
  { title: "Jak číst elektroměr a hlídat spotřebu", href: "/blog/jak-cist-elektromer", read: "4 min" },
  { title: "Jak ušetřit na vytápění bez výměny kotle", href: "/blog/usetrit-na-vytapeni", read: "5 min" },
  { title: "Tepelné čerpadlo: Kompletní průvodce výběrem, úsporami a instalací", href: "/blog/tepelne-cerpadlo-pruvodce", read: "11 min" },
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
              <span>Jaký bojler vybrat</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">💡 Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jaký bojler vybrat – elektrický, plynový nebo zásobníkový?</h1>
              <p className="article-lead">Starý bojler dosloužil a potřebuješ nový? Na trhu je elektrický, plynový, zásobníkový i průtokový ohřev vody – a každý se hodí na něco jiného. V článku najdeš srovnání typů, návod na výpočet správné velikosti i reálné roční náklady na provoz.</p>
              <div className="article-meta-row"><span>Aktualizováno: 7. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#typy-bojleru">Typy bojlerů a jejich srovnání</a></li>
                <li><a href="#velikost">Jak vybrat správnou velikost</a></li>
                <li><a href="#naklady">Provozní náklady – elektřina vs. plyn</a></li>
                <li><a href="#ucinnost">Energetická účinnost a úsporný provoz</a></li>
                <li><a href="#instalace">Instalace a údržba</a></li>
                <li><a href="#chyby">Časté chyby při výběru bojleru</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="typy-bojleru">
              <h2>Typy bojlerů a jejich srovnání</h2>
              <p>Slovo „bojler" lidé běžně používají pro jakýkoliv ohřívač vody, ale ve skutečnosti existuje několik zásadně odlišných typů. Každý má jiné nároky na instalaci, jiné provozní náklady i jinou vhodnost podle typu bydlení.</p>
              <h3>Elektrický bojler (zásobníkový)</h3>
              <p>Nejrozšířenější řešení v bytech a menších domácnostech. Ohřívá vodu pomocí topné spirály a uchovává ji v izolované nádrži o objemu 80–200 litrů. Výhodou je jednoduchá instalace – stačí elektrická přípojka a přívod vody, není potřeba komín ani odvod spalin.</p>
              <h3>Plynový ohřívač vody (průtokový i zásobníkový)</h3>
              <p>Ohřívá vodu spalováním zemního plynu nebo propanu. Provoz vychází levněji než elektřina, ale instalace je náročnější – je potřeba připojení na plyn, odvod spalin a pravidelné revize. Hodí se tam, kde už dům má plynovou přípojku, typicky v kombinaci s plynovým kotlem.</p>
              <h3>Zásobníkový (akumulační) ohřívač</h3>
              <p>Princip akumulace tepla v izolované nádrži funguje jak u elektrických, tak u plynových ohřívačů – voda se ohřeje předem a uchová na pozdější použití. Výhodou je, že máš k dispozici velké množství teplé vody najednou, např. na napuštění vany. Nevýhodou jsou tepelné ztráty při delším skladování.</p>
              <h3>Průtokový ohřívač</h3>
              <p>Ohřívá vodu „za chodu" – bez zásobníku, přímo v okamžiku odběru. Výhodou je, že nikdy nedojde teplá voda a ohřívač zabírá minimum místa. Nevýhodou je vysoký okamžitý příkon (u elektrických modelů klidně 18–27 kW) a obvykle nutnost posílení elektrické přípojky.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ bojleru</th><th>Pořizovací cena</th><th>Provozní náklady</th><th>Náročnost instalace</th><th>Vhodnost</th></tr></thead>
                  <tbody>
                    <tr><td>Elektrický zásobníkový</td><td>3 000–12 000 Kč</td><td>Vyšší (cena elektřiny)</td><td>Nízká – jen el. přípojka</td><td>Byty, chaty, domácnosti bez plynu</td></tr>
                    <tr><td>Plynový průtokový</td><td>6 000–18 000 Kč</td><td>Nižší (cena plynu)</td><td>Vyšší – plyn, komín, revize</td><td>Domy s plynovou přípojkou</td></tr>
                    <tr><td>Plynový zásobníkový</td><td>15 000–35 000 Kč</td><td>Nižší až střední</td><td>Vyšší – plyn, komín, revize</td><td>Větší domácnosti s plynem</td></tr>
                    <tr><td>Průtokový elektrický</td><td>1 500–6 000 Kč</td><td>Střední až vyšší</td><td>Střední – silná přípojka</td><td>Garsonky, chalupy, doplňkový zdroj</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud dům nemá plynovou přípojku a její zavedení by bylo nákladné, vyplatí se zůstat u elektrického zásobníkového ohřívače – ušetříš na instalaci i revizích, i když provoz bude o něco dražší.</div>
            </section>

            <section id="velikost">
              <h2>Jak vybrat správnou velikost</h2>
              <p>Velikost (objem) bojleru je úplně klíčová – malý bojler znamená studené sprchy ke konci dne, zbytečně velký zase plýtvá energií na ohřev a udržování teploty vody, kterou ani nevyužiješ. Objem se odvíjí hlavně od počtu osob v domácnosti a od toho, jestli preferujete sprchování, nebo koupání ve vaně.</p>
              <p>Orientačně se počítá s 35–50 litry teplé vody na osobu a den při sprchování, a s 80–120 litry, pokud se v domácnosti běžně koupe ve vaně. Než si bojler koupíš, rozhodně si ideální velikost spočítej pomocí naší <Link href="/kalkulacky/velikost-bojleru" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačky velikosti bojleru</Link> – zadáš počet osob, návyky domácnosti a kalkulačka ti doporučí konkrétní objem v litrech.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Počet osob</th><th>Jen sprchování</th><th>Sprchování + občasná vana</th><th>Pravidelné koupání ve vaně</th></tr></thead>
                  <tbody>
                    <tr><td>1 osoba</td><td>50–80 l</td><td>80–100 l</td><td>100–120 l</td></tr>
                    <tr><td>2 osoby</td><td>80–100 l</td><td>100–120 l</td><td>120–150 l</td></tr>
                    <tr><td>3–4 osoby</td><td>120–150 l</td><td>150–160 l</td><td>160–200 l</td></tr>
                    <tr><td>5 a více osob</td><td>160–200 l</td><td>200 l</td><td>200–300 l (případně dva ohřívače)</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Důležité je také zvážit, kolik odběrných míst (koupelny, kuchyň) bude bojler zásobovat současně, a zda v domácnosti bývají špičky – například ráno, kdy se sprchuje více lidí krátce po sobě. V takovém případě je lepší zvolit objem na vyšší hranici doporučeného rozmezí, případně bojler s rychlejším dohřevem.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Při výběru mezi dvěma sousedními velikostmi (např. 120 l vs. 150 l) je obvykle lepší sáhnout po té větší – rozdíl v ceně i provozních nákladech je malý, ale komfort domácnosti citelně vyšší.</div>
            </section>

            <section id="naklady">
              <h2>Provozní náklady – elektřina vs. plyn</h2>
              <p>Roční náklady na ohřev vody jsou druhým nejdůležitějším kritériem hned po velikosti. Záleží na ceně energie, na účinnosti ohřívače a na tom, kolik teplé vody domácnost skutečně spotřebuje. Pro orientaci uvádíme modelový příklad čtyřčlenné domácnosti se spotřebou přibližně 200 litrů teplé vody denně.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th></th><th>Elektrický bojler</th><th>Plynový ohřívač</th><th>Tepelné čerpadlo (TUV)</th></tr></thead>
                  <tbody>
                    <tr><td>Roční spotřeba energie na ohřev</td><td>~2 400 kWh elektřiny</td><td>~3 200 kWh (plyn)</td><td>~800 kWh elektřiny</td></tr>
                    <tr><td>Orientační cena energie</td><td>4,80 Kč/kWh</td><td>2,80 Kč/kWh</td><td>4,80 Kč/kWh</td></tr>
                    <tr><td>Roční náklady na ohřev</td><td>~11 500 Kč</td><td>~9 000 Kč</td><td><strong>~3 800 Kč</strong></td></tr>
                    <tr><td>Náklady / 10 let provozu</td><td>~115 000 Kč</td><td>~90 000 Kč</td><td><strong>~38 000 Kč</strong></td></tr>
                  </tbody>
                </table>
              </div>
              <p>Z tabulky je vidět, že plynový ohřev vychází na roční spotřebě levněji než elektrický, ovšem rozdíl není tak dramatický, jak by se dalo čekat – elektřina sice stojí víc za kWh, ale moderní elektrické bojlery mají velmi vysokou účinnost ohřevu (blízko 100 %), zatímco u plynu část energie odchází komínem. Pokud ti jde primárně o nejnižší provozní náklady, vyplatí se zvážit i ohřev pomocí tepelného čerpadla vzduch–voda určeného pro přípravu teplé vody (tzv. TUV) – v dlouhodobém horizontu výrazně sníží roční účet.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud máš doma dvoutarifní sazbu za elektřinu (D25d, D26d apod.), nech bojler ohřívat vodu především v levném nočním pásmu. Akumulační nádrž ti teplo udrží i přes den a ušetříš tak i bez výměny technologie.</div>
            </section>

            <section id="ucinnost">
              <h2>Energetická účinnost a úsporný provoz</h2>
              <h3>Časování ohřevu</h3>
              <p>U akumulačních ohřívačů má smysl nastavit ohřev tak, aby probíhal v době, kdy je elektřina nejlevnější – typicky v noci u dvoutarifních sazeb. Voda se přes den udrží teplá díky kvalitní izolaci nádrže, takže nemusíš ohřívat znovu během dne.</p>
              <h3>Izolace nádrže</h3>
              <p>Tepelné ztráty zásobníkového ohřívače rostou s tím, jak dlouho se voda v nádrži udržuje teplá. Kvalitní polyuretanová izolace o tloušťce alespoň 4–5 cm dokáže snížit tepelné ztráty o desítky procent oproti levným modelům s tenkou izolací. Při výběru se podívej na energetický štítek – ohřívače se značí třídami A až G podobně jako jiné spotřebiče.</p>
              <h3>Termostat a teplota ohřevu</h3>
              <p>Optimální nastavení termostatu je 55–60 °C. Vyšší teplota znamená vyšší tepelné ztráty a rychlejší tvorbu vodního kamene, nižší teplota zase riziko množení bakterií (např. legionely) v nádrži. Většina moderních ohřívačů má i funkci pravidelného „protierozního" zahřátí na vyšší teplotu, která toto riziko eliminuje.</p>
              <ul>
                <li><strong>Naplánuj ohřev na levné tarify</strong> – využij noční proud nebo přebytky ze solárních panelů</li>
                <li><strong>Nepřetápěj zbytečně</strong> – 55–60 °C stačí na běžný provoz domácnosti</li>
                <li><strong>Vybírej ohřívače s vysokou energetickou třídou</strong> – rozdíl se projeví v dlouhodobých nákladech</li>
                <li><strong>Pravidelně odvápňuj</strong> – vodní kámen na topné spirále zhoršuje účinnost a prodlužuje dobu ohřevu</li>
              </ul>
            </section>

            <section id="instalace">
              <h2>Instalace a údržba</h2>
              <p>Instalace elektrického bojleru je poměrně nenáročná – v bytě obvykle stačí vyhrazený jistič, přívod studené vody a odpad. U plynových ohřívačů je potřeba počítat s napojením na rozvod plynu, odvodem spalin (komín nebo turbo systém) a povinnou roční revizí spalinové cesty odborníkem.</p>
              <p>Životnost elektrického zásobníkového ohřívače se pohybuje kolem 10–15 let, u kvalitních modelů i déle. Plynové ohřívače mívají podobnou nebo o něco kratší životnost, záleží hlavně na kvalitě vody a pravidelnosti servisu.</p>
              <ul>
                <li><strong>Anoda</strong> – v zásobníkových ohřívačích chrání nádrž před korozí, kontroluj a vyměňuj přibližně jednou za 2 roky</li>
                <li><strong>Odvápnění</strong> – zejména v oblastech s tvrdou vodou je vhodné nechat ohřívač profesionálně odvápnit jednou za 2–3 roky</li>
                <li><strong>Pojistný ventil</strong> – pravidelně kontroluj funkčnost, zabraňuje přetlaku v nádrži</li>
                <li><strong>Revize plynového zařízení</strong> – ze zákona povinná jednou ročně u plynových spotřebičů s odvodem spalin</li>
                <li><strong>Umístění</strong> – elektrický bojler umísťuj co nejblíže k odběrným místům, omezíš tím tepelné ztráty v rozvodech</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Než starý bojler vyměníš, zvaž, jestli nemá smysl přejít na výkonnější jistič nebo jiný tarif – nový úspornější ohřívač může vyžadovat jiné podmínky připojení, než na jaké je nastavený stávající rozvaděč.</div>
            </section>

            <section id="chyby">
              <h2>Časté chyby při výběru bojleru</h2>
              <h3>Podcenění velikosti</h3>
              <p>Nejčastější chybou je koupě menšího bojleru, než domácnost skutečně potřebuje – často proto, že se počítá jen s aktuálním počtem členů domácnosti, a ne s výhledem na další roky (děti, hosté, změna návyků). Výsledkem jsou studené sprchy ve špičce a frustrace z nedostatečného komfortu.</p>
              <h3>Výběr jen podle pořizovací ceny</h3>
              <p>Levný bojler s nízkou energetickou třídou a tenkou izolací sice ušetří při nákupu pár stovek korun, ale za 10 let provozu může stát o tisíce korun víc na energiích než kvalitnější model s lepší izolací a vyšší účinností.</p>
              <h3>Ignorování typu sazby za elektřinu</h3>
              <p>Pokud máš doma dvoutarifní sazbu, ale bojler nenastavíš na ohřev v levném pásmu, fakticky o tuto výhodu přicházíš. Stojí za to si nastavení po instalaci zkontrolovat, případně nechat upravit elektrikářem.</p>
              <h3>Podcenění instalace a revizí u plynu</h3>
              <p>Plynový ohřívač sice může vyjít na provozu levněji, ale lidé často zapomínají počítat s náklady na pravidelné revize, servis a případné úpravy spalinové cesty – ty se promítnou do celkových nákladů na vlastnictví.</p>
              <h3>Špatné umístění</h3>
              <p>Bojler umístěný daleko od koupelny nebo kuchyně znamená delší čekání na teplou vodu a větší tepelné ztráty v rozvodech. Pokud je to možné, zvol umístění co nejblíže k hlavnímu odběrnému místu.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jak velký bojler potřebuji pro 4člennou domácnost?", a: "Pro domácnost se 4 osobami se obvykle doporučuje zásobník o objemu 150–200 litrů, podle toho, zda preferujete sprchování nebo koupání ve vaně a zda máte víc koupelen." },
                  { q: "Co je levnější – elektrický nebo plynový ohřev vody?", a: "Plynový ohřev vody bývá v přepočtu na kWh levnější (cena plynu je nižší než elektřiny), ale pořizovací a instalační náklady jsou vyšší kvůli odvodu spalin a revizím. Elektrický bojler je levnější na pořízení, ale dražší na provoz." },
                  { q: "Jak často je potřeba bojler kontrolovat a čistit?", a: "Elektrický bojler je vhodné nechat zkontrolovat a odvápnit jednou za 2–3 roky, plynový ohřívač vyžaduje pravidelnou roční revizi spalinové cesty. Anodu v zásobníkovém ohřívači je potřeba kontrolovat přibližně jednou za 2 roky." },
                  { q: "Vyplatí se průtokový ohřívač do bytu?", a: "Průtokový ohřívač se hodí tam, kde je málo místa nebo nepravidelná spotřeba teplé vody – například do garsonky nebo na chalupu. Pro rodinný dům s vanou a více odběrnými místy je vhodnější zásobníkový ohřívač s dostatečnou kapacitou." },
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
                <li><a href="#typy-bojleru">Typy bojlerů</a></li>
                <li><a href="#velikost">Jaká velikost</a></li>
                <li><a href="#naklady">Provozní náklady</a></li>
                <li><a href="#ucinnost">Úsporný provoz</a></li>
                <li><a href="#instalace">Instalace a údržba</a></li>
                <li><a href="#chyby">Časté chyby</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/elektrika" className="sidebar-cat-link">💡 Elektrika & osvětlení<span>21 článků →</span></Link>
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
