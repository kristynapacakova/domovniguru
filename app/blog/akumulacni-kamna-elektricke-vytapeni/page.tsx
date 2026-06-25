import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Akumulační kamna: vytápění levným nočním proudem",
  description: "Princip akumulačních kamen, dvoutarifní sazba, výhody a nevýhody oproti přímotopům, výběr velikosti, provozní náklady, instalace a revize.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/akumulacni-kamna-elektricke-vytapeni" },
  openGraph: { title: "Akumulační kamna: vytápění levným nočním proudem", description: "Princip akumulačních kamen, dvoutarifní sazba, výhody a nevýhody oproti přímotopům, výběr velikosti, provozní náklady, instalace a revize.", url: "https://www.domovniguru.cz/blog/akumulacni-kamna-elektricke-vytapeni", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-25T08:00:00Z", modifiedTime: "2026-06-25T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Akumula%C4%8Dn%C3%AD%20kamna%3A%20vyt%C3%A1p%C4%9Bn%C3%AD%20levn%C3%BDm%20no%C4%8Dn%C3%ADm%20proudem&cat=blog", width: 1200, height: 630, alt: "Akumulační kamna: vytápění levným nočním proudem" }] },
  twitter: { card: "summary_large_image", title: "Akumulační kamna: vytápění levným nočním proudem", description: "Princip akumulačních kamen, dvoutarifní sazba, výhody a nevýhody oproti přímotopům, výběr velikosti, provozní náklady, instalace a revize." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/akumulacni-kamna-elektricke-vytapeni#article", "headline": "Akumulační kamna: vytápění levným nočním proudem", "datePublished": "2026-06-25T08:00:00Z", "dateModified": "2026-06-25T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["akumulační kamna", "elektrické vytápění", "dvoutarifní sazba", "noční proud", "akumulační pec", "vytápění bytu elektřinou"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Elektrika & osvětlení", "item": "https://www.domovniguru.cz/blog/kategorie/elektrika" }, { "@type": "ListItem", "position": 4, "name": "Akumulační kamna", "item": "https://www.domovniguru.cz/blog/akumulacni-kamna-elektricke-vytapeni" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jak akumulační kamna vlastně fungují?", "acceptedAnswer": { "@type": "Answer", "text": "Akumulační kamna obsahují topné těleso a hmotu s vysokou tepelnou kapacitou (šamotové cihly nebo speciální keramika). V noci, kdy je levnější elektřina v rámci dvoutarifní sazby, se tato hmota zahřeje na vysokou teplotu. Přes den pak kamna teplo postupně vyzařují do místnosti, i když už se nedobíjí." } }, { "@type": "Question", "name": "Potřebuju kvůli akumulačním kamnům dvoutarifní sazbu?", "acceptedAnswer": { "@type": "Answer", "text": "Pro skutečnou úsporu ano. Akumulační kamna se vyplácí nabíjet v levném nočním tarifu (typicky sazba D25d, D26d nebo D27d podle distributora), který je výrazně levnější než denní sazba. Bez dvoutarifní sazby a odděleného měření topného okruhu kamna ztrácí svou hlavní ekonomickou výhodu." } }, { "@type": "Question", "name": "Jak velká akumulační kamna potřebuji do pokoje?", "acceptedAnswer": { "@type": "Answer", "text": "Orientačně se počítá s výkonem přibližně 60–100 W na m² podlahové plochy u běžně zateplené místnosti, méně u dobře zateplených novostaveb a více u starších, hůře izolovaných domů. Pro pokoj o 20 m² to znamená kamna s výkonem zhruba 1,2–2 kW, přesný výpočet ale závisí na výšce stropu, izolaci a orientaci oken." } }, { "@type": "Question", "name": "Je akumulační vytápění levnější než tepelné čerpadlo?", "acceptedAnswer": { "@type": "Answer", "text": "Tepelné čerpadlo má obvykle nižší provozní náklady na vyrobenou jednotku tepla, protože z jedné kWh elektřiny vyrobí více tepla (vyšší COP). Akumulační kamna ale mají výrazně nižší pořizovací cenu a jednodušší instalaci bez nutnosti venkovní jednotky, vrtu nebo velkých stavebních úprav, takže se vyplatí zejména tam, kde investice do tepelného čerpadla nedává smysl." } }, { "@type": "Question", "name": "Musí se akumulační kamna revidovat?", "acceptedAnswer": { "@type": "Answer", "text": "Akumulační kamna jsou elektrický spotřebič připojený na samostatný silový okruh, proto se na ně vztahují stejná pravidla jako na ostatní elektroinstalaci – při novém zapojení nebo po úpravách je vhodná revize elektroinstalace, a pravidelná revize spotřebiče podle doporučení výrobce a interních předpisů, pokud je objekt pronajímán nebo provozován komerčně." } }] }] };

const RELATED = [
  { title: "Elektrické podlahové topení", href: "/blog/elektricke-podlahove-topeni", read: "5 min" },
  { title: "Infrapanely na vytápění", href: "/blog/infrapanely-na-vytapeni", read: "5 min" },
  { title: "Jak vybrat dodavatele elektřiny", href: "/blog/jak-vybrat-dodavatele-elektriny", read: "6 min" },
  { title: "Jak snížit účet za elektřinu", href: "/blog/snizit-ucet-za-elektrinu", read: "5 min" },
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
              <span>Akumulační kamna</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">⚡ Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Akumulační kamna: vytápění levným nočním proudem</h1>
              <p className="article-lead">Akumulační kamna jsou starý známý princip, který se i dnes vyplácí tam, kde není zaveden plyn a investice do tepelného čerpadla nedává smysl. Klíčem je levná noční elektřina, kterou kamna v noci „naskladní" jako teplo a přes den ho postupně vyzařují do místnosti. Ukážeme, pro koho se to hodí, jak vybrat správnou velikost a co obnáší provoz a instalace.</p>
              <div className="article-meta-row"><span>Aktualizováno: 25. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#princip">Princip akumulačních kamen</a></li>
                <li><a href="#pro-koho">Pro koho se to hodí</a></li>
                <li><a href="#vyhody-nevyhody">Výhody a nevýhody</a></li>
                <li><a href="#velikost">Výběr velikosti a výkonu</a></li>
                <li><a href="#moderni">Moderní digitálně řízená kamna</a></li>
                <li><a href="#naklady">Provozní náklady</a></li>
                <li><a href="#instalace">Instalace a revize</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="princip">
              <h2>Princip akumulačních kamen</h2>
              <p>Akumulační kamna kombinují topné těleso s hmotou o vysoké tepelné kapacitě – nejčastěji šamotovými cihlami nebo speciální keramikou. Celý princip stojí na rozdílu cen elektřiny mezi denní a noční sazbou u dvoutarifních tarifů.</p>
              <ul>
                <li><strong>Nabíjení v noci</strong> – v levné noční sazbě (obvykle mezi 22:00 a 6:00, přesný rozvrh stanovuje distributor) se topné těleso uvnitř kamen zahřeje a teplo se ukládá do akumulační hmoty, která může dosahovat teploty kolem 600–700 °C.</li>
                <li><strong>Vyzařování ve dne</strong> – přes den, kdy už elektřina jede v dražší denní sazbě, kamna teplo postupně vydávají do místnosti přirozenou konvekcí a sáláním, aniž by spotřebovávala další elektřinu (u jednoduchých modelů), nebo jen s minimálním dobíjením u modelů s dobíjecí funkcí přes den.</li>
                <li><strong>Regulace výdeje tepla</strong> – starší kamna mají jen mechanickou klapku, moderní digitální modely regulují výdej tepla elektronicky podle teploty v místnosti a předpovídaného průběhu dne.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Akumulační kamna se občas pletou s přímotopy. Rozdíl je zásadní – přímotop hřeje jen v okamžiku, kdy je zapnutý a spotřebovává proud, akumulační kamna naopak teplo „uskladní" v noci a vydávají ho i bez dalšího odběru elektřiny.</div>
            </section>

            <section id="pro-koho">
              <h2>Pro koho se akumulační vytápění hodí</h2>
              <ul>
                <li><strong>Byty a domy bez plynové přípojky</strong> – tam, kde zavedení plynu není možné nebo se ekonomicky nevyplatí, jsou akumulační kamna jednou z nejdostupnějších alternativ.</li>
                <li><strong>Domácnosti s dvoutarifní sazbou</strong> – pokud už máš nebo plánuješ sazbu s odděleným nočním tarifem (např. pro bojler nebo jiný spotřebič), dává smysl na ni napojit i topný okruh.</li>
                <li><strong>Rekonstrukce bez velkých stavebních zásahů</strong> – na rozdíl od tepelného čerpadla nebo podlahového topení nevyžadují kamna bourání podlah ani venkovní jednotku, jen elektrickou přípojku.</li>
                <li><strong>Doplňkové vytápění vedlejších prostor</strong> – chata, dílna nebo přístavba, kam se nevyplatí táhnout centrální topení.</li>
                <li><strong>Nájemní bydlení</strong> – pokud nelze zasahovat do topného systému domu, samostatně stojící akumulační kamna jsou řešení, které se dá v případě stěhování odpojit a odvézt.</li>
              </ul>
              <p>Naopak se nehodí tam, kde chceš rychlou a přesnou regulaci teploty podle aktuální potřeby (např. krátké přitápění při příchodu domů) – na to jsou vhodnější přímotopy nebo <Link href="/blog/infrapanely-na-vytapeni" style={{ color: "#2a6496", textDecoration: "underline" }}>infrapanely</Link>, které reagují okamžitě.</p>
            </section>

            <section id="vyhody-nevyhody">
              <h2>Výhody a nevýhody oproti přímotopům a tepelnému čerpadlu</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Systém</th><th>Pořizovací cena</th><th>Provozní náklady</th><th>Regulace</th></tr></thead>
                  <tbody>
                    <tr><td>Akumulační kamna</td><td>Střední</td><td>Nízké až střední (díky nočnímu tarifu)</td><td>Pomalejší, teplo „doznívá" celý den</td></tr>
                    <tr><td>Přímotopy / infrapanely</td><td>Nízká</td><td>Vysoké (denní sazba, přímý odběr)</td><td>Rychlá, okamžitá reakce</td></tr>
                    <tr><td>Tepelné čerpadlo</td><td>Vysoká</td><td>Nejnižší na jednotku tepla (vysoký COP)</td><td>Přesná, plně automatická</td></tr>
                  </tbody>
                </table>
              </div>
              <h3>Výhody akumulačních kamen</h3>
              <ul>
                <li>Využití levné noční elektřiny bez nutnosti složité regulace nebo baterie</li>
                <li>Jednoduchá instalace bez stavebních úprav, vrtů nebo venkovní jednotky</li>
                <li>Žádné riziko zamrznutí systému jako u vodovodního topení</li>
                <li>Dlouhá životnost akumulační hmoty, minimální nutnost servisu</li>
              </ul>
              <h3>Nevýhody akumulačních kamen</h3>
              <ul>
                <li>Pomalejší a méně přesná regulace – těžko zareaguje na náhlou potřebu více tepla uprostřed dne</li>
                <li>Teplo se vydává postupně podle nastavení z předchozí noci, ne přesně podle aktuální potřeby</li>
                <li>Vyšší pořizovací cena než jednoduchý přímotop</li>
                <li>Provozní náklady jsou vyšší než u tepelného čerpadla, i když nižší než u přímotopů</li>
                <li>Velká a těžká kamna (desítky kilogramů), náročnější na manipulaci a umístění</li>
              </ul>
            </section>

            <section id="velikost">
              <h2>Výběr velikosti a výkonu podle místnosti</h2>
              <p>Podcenění výkonu kamen je nejčastější chybou při výběru – poddimenzovaná kamna se vybijí dřív, než uplyne den, a místnost přes večer vychladne.</p>
              <ul>
                <li><strong>Orientační výpočet</strong> – počítej zhruba s 60–100 W na m² podlahové plochy u běžně zateplené místnosti se standardní výškou stropu (do 2,7 m). U starších, hůře izolovaných domů volí spíš horní hranici, u nových zateplených staveb stačí dolní hranice rozsahu.</li>
                <li><strong>Výška stropu a orientace</strong> – vyšší stropy a okna orientovaná na severní stranu zvyšují potřebný výkon, naopak slunná jižní okna ho snižují.</li>
                <li><strong>Počet kamen v místnosti</strong> – u větších prostorů (obývací pokoj s kuchyní) se často osazují dvě menší kamna místo jednoho obrovského kusu, rovnoměrněji rozloží teplo po prostoru.</li>
                <li><strong>Konzultace s prodejcem nebo projektantem</strong> – přesný výpočet tepelné ztráty místnosti (podle ČSN) je vždy přesnější než orientační vzorec, hlavně u netypických prostor.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Lepší je mírně přerovnit (zvolit o trochu vyšší výkon), než kamna poddimenzovat – moderní digitální modely si umí samy regulovat výdej tepla a nadbytečnou kapacitu jednoduše nevyužijí naplno, zatímco poddimenzovaná kamna místnost prostě nevytopí.</div>
            </section>

            <section id="moderni">
              <h2>Moderní digitálně řízená akumulační kamna</h2>
              <p>Současná generace akumulačních kamen se výrazně liší od starších „hloupých" modelů s mechanickou klapkou.</p>
              <ul>
                <li><strong>Elektronická regulace nabíjení</strong> – kamna si podle předpovědi počasí a naměřené vnitřní teploty sama spočítají, kolik tepla je potřeba na příští den, a podle toho se v noci nabijí jen na potřebnou míru, ne nutně na maximum.</li>
                <li><strong>Dobíjení i přes den</strong> – některé modely umí v menší míře dobíjet i mimo noční tarif, pokud hrozí, že akumulovaná energie nevydrží do dalšího nabíjecího cyklu.</li>
                <li><strong>Týdenní program a dálkové ovládání</strong> – appka nebo termostat umožní nastavit odlišný režim na pracovní dny a víkend, případně kamna vypnout na dálku při odjezdu.</li>
                <li><strong>Tišší a rovnoměrnější výdej tepla</strong> – ventilátor s plynulou regulací otáček místo prostého zapnuto/vypnuto u starších modelů.</li>
              </ul>
              <p>Cenový rozdíl mezi jednoduchými a digitálně řízenými kamny se postupem let vrací zpět díky lepšímu využití nočního tarifu a menšímu plýtvání teplem, které by jinak unikalo i v době, kdy ho nikdo nepotřebuje.</p>
            </section>

            <section id="naklady">
              <h2>Provozní náklady</h2>
              <p>Provozní náklady závisí především na třech faktorech: tepelné ztrátě objektu, cenovém rozdílu mezi denní a noční sazbou u tvého distributora a na tom, jak efektivně kamna teplo využijí (digitální regulace vs. starší mechanická).</p>
              <p>Orientační odhad: rodinný dům se spotřebou kolem 15–20 MWh tepla za topnou sezónu, vytápěný akumulačními kamny v dvoutarifní sazbě, se podle aktuálních cen elektřiny u distributora pohybuje v provozních náladech zhruba ve středním pásmu mezi přímotopy (nejdražší varianta) a tepelným čerpadlem (nejlevnější varianta na jednotku tepla). Přesné číslo se ale rok od roku liší podle vývoje cen elektřiny – pro aktuální srovnání tarifů a dodavatelů se podívej na náš článek <Link href="/blog/jak-vybrat-dodavatele-elektriny" style={{ color: "#2a6496", textDecoration: "underline" }}>jak vybrat dodavatele elektřiny</Link>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pravidelně kontroluj, jestli tvůj distributor nezměnil časové rozpětí nočního tarifu – pokud se posune nebo zkrátí, může to ovlivnit, jak efektivně se kamna stihnou nabít. Více tipů na úsporu najdeš v článku, jak <Link href="/blog/snizit-ucet-za-elektrinu" style={{ color: "#2a6496", textDecoration: "underline" }}>snížit účet za elektřinu</Link>.</div>
            </section>

            <section id="instalace">
              <h2>Instalace a revize</h2>
              <p>Akumulační kamna se připojují na samostatný silový okruh s vlastním jističem, odděleně od běžných zásuvkových okruhů – výkon jednotlivých kamen bývá v řádu 1–3 kW na kus a při více kusech v domě se celkový příkon rychle sčítá.</p>
              <ul>
                <li><strong>Samostatný okruh a jistič</strong> – dimenzování kabelu a jističe musí odpovídat výkonu kamen, proto instalaci nového okruhu pro akumulační vytápění nechej vždy na elektrikáři.</li>
                <li><strong>Napojení na dvoutarifní sazbu</strong> – topný okruh se obvykle spíná přes hodinový spínač (HDO) ovládaný distributorem, který přepojuje mezi tarify – to bývá řešeno už při zřízení dvoutarifní sazby.</li>
                <li><strong>Umístění kamen</strong> – volný prostor okolo kamen (ze stran i odshora) podle návodu výrobce, kvůli proudění vzduchu a bezpečné vzdálenosti od hořlavých materiálů a nábytku.</li>
                <li><strong>Revize</strong> – po instalaci nového okruhu je nutná revize elektroinstalace, viz náš článek <Link href="/blog/revize-elektroinstalace-kdy-a-proc" style={{ color: "#2a6496", textDecoration: "underline" }}>revize elektroinstalace – kdy a proč</Link>. U starších kamen se zkontroluje i stav topného tělesa a izolace při pravidelném servisu.</li>
              </ul>
              <div className="article-tip"><strong>⚠️ Bezpečnost:</strong> Práci na novém silovém okruhu, zapojení jističe a napojení na hodinový spínač vždy přenech elektrikáři – jde o okruh s vyšším proudovým zatížením, kde chyba v dimenzování kabelu může způsobit přehřátí a požár. Před jakýmkoli zásahem do rozvaděče nezapomeň vypnout příslušný jistič a v případě nejistoty se na cokoli zeptej odborníka.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jak akumulační kamna vlastně fungují?", a: "Akumulační kamna obsahují topné těleso a hmotu s vysokou tepelnou kapacitou (šamotové cihly nebo speciální keramika). V noci, kdy je levnější elektřina v rámci dvoutarifní sazby, se tato hmota zahřeje na vysokou teplotu. Přes den pak kamna teplo postupně vyzařují do místnosti, i když už se nedobíjí." },
                  { q: "Potřebuju kvůli akumulačním kamnům dvoutarifní sazbu?", a: "Pro skutečnou úsporu ano. Akumulační kamna se vyplácí nabíjet v levném nočním tarifu, který je výrazně levnější než denní sazba. Bez dvoutarifní sazby a odděleného měření topného okruhu kamna ztrácí svou hlavní ekonomickou výhodu." },
                  { q: "Jak velká akumulační kamna potřebuji do pokoje?", a: "Orientačně se počítá s výkonem přibližně 60–100 W na m² podlahové plochy u běžně zateplené místnosti, méně u dobře zateplených novostaveb a více u starších, hůře izolovaných domů. Pro pokoj o 20 m² to znamená kamna s výkonem zhruba 1,2–2 kW." },
                  { q: "Je akumulační vytápění levnější než tepelné čerpadlo?", a: "Tepelné čerpadlo má obvykle nižší provozní náklady na vyrobenou jednotku tepla díky vyššímu COP. Akumulační kamna ale mají výrazně nižší pořizovací cenu a jednodušší instalaci bez venkovní jednotky, vrtu nebo velkých stavebních úprav." },
                  { q: "Musí se akumulační kamna revidovat?", a: "Akumulační kamna jsou elektrický spotřebič připojený na samostatný silový okruh, proto se na ně vztahují stejná pravidla jako na ostatní elektroinstalaci – při novém zapojení je vhodná revize elektroinstalace a pravidelná kontrola podle doporučení výrobce." },
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
                <li><a href="#princip">Princip kamen</a></li>
                <li><a href="#pro-koho">Pro koho se hodí</a></li>
                <li><a href="#vyhody-nevyhody">Výhody a nevýhody</a></li>
                <li><a href="#velikost">Výběr velikosti</a></li>
                <li><a href="#moderni">Digitální kamna</a></li>
                <li><a href="#naklady">Provozní náklady</a></li>
                <li><a href="#instalace">Instalace a revize</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/elektrika" className="sidebar-cat-link">⚡ Elektrika & osvětlení<span>29 článků →</span></Link>
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
