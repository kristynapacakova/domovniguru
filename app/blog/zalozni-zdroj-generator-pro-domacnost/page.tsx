import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak vybrat záložní zdroj nebo generátor pro výpadky proudu",
  description: "Elektrocentrála, powerstation nebo záložní baterie k fotovoltaice – srovnání řešení pro výpadky elektřiny v domácnosti.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/zalozni-zdroj-generator-pro-domacnost" },
  openGraph: { title: "Jak vybrat záložní zdroj nebo generátor pro výpadky proudu", description: "Elektrocentrála, powerstation nebo záložní baterie k fotovoltaice – srovnání řešení pro výpadky elektřiny.", url: "https://www.domovniguru.cz/blog/zalozni-zdroj-generator-pro-domacnost", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-12T08:00:00Z", modifiedTime: "2026-06-12T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20vybrat%20z%C3%A1lo%C5%BEn%C3%AD%20zdroj%20nebo%20gener%C3%A1tor%20pro%20v%C3%BDpadky%20proudu&cat=blog", width: 1200, height: 630, alt: "Jak vybrat záložní zdroj nebo generátor pro výpadky proudu" }] },
  twitter: { card: "summary_large_image", title: "Jak vybrat záložní zdroj nebo generátor pro výpadky proudu", description: "Elektrocentrála, powerstation nebo záložní baterie – srovnání řešení pro výpadky elektřiny." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/zalozni-zdroj-generator-pro-domacnost#article", "headline": "Jak vybrat záložní zdroj nebo generátor pro výpadky proudu", "datePublished": "2026-06-12T08:00:00Z", "dateModified": "2026-06-12T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["záložní zdroj", "elektrocentrála", "powerstation", "záložní baterie", "výpadek proudu"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Elektrika & osvětlení", "item": "https://www.domovniguru.cz/blog/kategorie/elektrika" }, { "@type": "ListItem", "position": 4, "name": "Záložní zdroj a generátor pro domácnost", "item": "https://www.domovniguru.cz/blog/zalozni-zdroj-generator-pro-domacnost" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jaký výkon záložního zdroje potřebuju pro domácnost?", "acceptedAnswer": { "@type": "Answer", "text": "Pro lednici, oběhové čerpadlo kotle, osvětlení a router stačí 1–2 kW. Pokud chcete zálohovat i elektrický bojler, sporák nebo klimatizaci, počítejte s výkonem 3 kW a více." } }, { "@type": "Question", "name": "Co je lepší – elektrocentrála nebo powerstation?", "acceptedAnswer": { "@type": "Answer", "text": "Elektrocentrála dodá vyšší výkon a dlouhý provoz, ale je hlučná a potřebuje palivo. Powerstation je tichá, bezúdržbová a vhodná do interiéru, ale má omezenou kapacitu a vyšší cenu na kWh." } }, { "@type": "Question", "name": "Můžu generátor připojit přímo do zásuvky v domě?", "acceptedAnswer": { "@type": "Answer", "text": "Ne, bez přepínače sítí (přepínacího přepojovače) hrozí zpětné napájení do distribuční sítě a riziko úrazu i poškození generátoru. Vždy je nutné instalovat certifikovaný přepínač, ideálně instalovaný elektrikářem." } }, { "@type": "Question", "name": "Kolik stojí domácí záložní baterie k fotovoltaice?", "acceptedAnswer": { "@type": "Answer", "text": "Baterie s kapacitou 5–10 kWh včetně řídicí elektroniky a instalace vyjde zpravidla na 150 000–300 000 Kč. Cena závisí na kapacitě, typu baterie (LiFePO4) a na tom, zda systém zvládne i ostrovní provoz při výpadku sítě." } }, { "@type": "Question", "name": "Je provoz benzínové elektrocentrály bezpečný v garáži?", "acceptedAnswer": { "@type": "Answer", "text": "Ne. Spalovací motor produkuje oxid uhelnatý (CO), který je bez zápachu a ve špatně větraném prostoru smrtelný. Generátor musí běžet venku, v dostatečné vzdálenosti od oken a dveří, nikdy v garáži, sklepě nebo na balkoně." } }] }] };

const RELATED = [
  { title: "Fotovoltaika s baterií – má smysl doma skladovat elektřinu?", href: "/blog/fotovoltaika-s-baterii", read: "7 min" },
  { title: "Jak snížit účet za elektřinu doma – 12 tipů bez investic 2026", href: "/blog/snizit-ucet-za-elektrinu", read: "6 min" },
  { title: "Proč vypadává jistič? Přetížení nebo zkrat", href: "/blog/proc-vypadava-jistic", read: "5 min" },
  { title: "Kalkulačka spotřeby elektřiny", href: "/kalkulacky/spotreba-elektriciny", read: "2 min" },
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
              <span>Záložní zdroj a generátor pro domácnost</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">💡 Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 7 min čtení</span>
              </div>
              <h1 className="article-h1">Jak vybrat záložní zdroj nebo generátor pro výpadky proudu</h1>
              <p className="article-lead">Výpadky elektřiny jsou v posledních letech častější a delší. Pro někoho je to jen pár hodin bez televize, pro jiného výpadek vytápění, internetu nebo zamrzlé jídlo v lednici. Tento článek vám pomůže vybrat řešení, které odpovídá vašim potřebám – od malé powerstation až po záložní baterii pro celý dům.</p>
              <div className="article-meta-row"><span>Aktualizováno: 12. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#kdy-se-vyplati">Kdy se vyplatí řešit záložní zdroj</a></li>
                <li><a href="#typy-reseni">Typy řešení – co si vybrat</a></li>
                <li><a href="#vypocet-vykonu">Jak vypočítat potřebný výkon</a></li>
                <li><a href="#bezpecnost">Bezpečnost provozu generátoru</a></li>
                <li><a href="#pripojeni">Legislativa a připojení k domovní síti</a></li>
                <li><a href="#naklady">Náklady a doba provozu</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="kdy-se-vyplati">
              <h2>Kdy se vyplatí řešit záložní zdroj</h2>
              <p>Ne každá domácnost potřebuje záložní napájení. Pokud výpadky proudu zažíváte jednou za pár let a trvají minuty, investice do generátoru nebo baterie se těžko zaplatí. Existují ale situace, kdy se záložní zdroj vyplatí téměř vždy.</p>
              <ul>
                <li><strong>Časté nebo dlouhé výpadky</strong> – pokud v lokalitě (typicky na venkově nebo v oblastech s nadzemním vedením) vypadává proud při každé silnější bouřce nebo kalamitě, a výpadky trvají hodiny až dny</li>
                <li><strong>Práce z domova</strong> – výpadek znamená nejen tmu, ale i ztrátu internetu a nemožnost pracovat. Pro home office je klíčové udržet v provozu router, notebook a případně i monitor</li>
                <li><strong>Vytápění závislé na elektřině</strong> – plynové i tepelné čerpadlo potřebuje ke svému chodu elektřinu pro oběhová čerpadla a řídicí elektroniku. Bez proudu nejede ani plynový kotel, přestože spaluje plyn</li>
                <li><strong>Citlivé spotřebiče a potraviny</strong> – lednice a mrazák při delším výpadku znamenají znehodnocení zásob, zdravotní technika (kyslíkové koncentrátory, dialyzační přístroje) vyžaduje nepřerušené napájení</li>
              </ul>
              <p>Pokud se najdete alespoň ve dvou z těchto bodů, vyplatí se začít plánovat. Otázka pak není „jestli", ale „jaké řešení".</p>
            </section>

            <section id="typy-reseni">
              <h2>Typy řešení – co si vybrat</h2>
              <h3>Benzínová nebo naftová elektrocentrála</h3>
              <p>Klasické řešení, které zvládne dodat poměrně vysoký výkon (2–10 kW) na dlouhou dobu, pokud máte dostatek paliva. Výhodou je nízká pořizovací cena vzhledem k výkonu a snadná dostupnost. Nevýhodou je hlučnost, nutnost provozu venku, emise a údržba (motorový olej, svíčky, palivo, které časem degraduje).</p>
              <p>Centrály se dělí na otevřené (levnější, hlučnější, ~70–95 dB) a invertorové (tišší, stabilnější napětí vhodné i pro elektroniku, dražší). Pro citlivé spotřebiče – počítače, televize, řídicí elektroniku kotle – je invertorová centrála jasnou volbou, protože dodává „čistý" sinusový proud.</p>
              <h3>Přenosná powerstation (LiFePO4 baterie)</h3>
              <p>Powerstation je v podstatě velká baterie s vestavěným střídačem a zásuvkami, kterou doma nabijete ze sítě nebo solárního panelu a v případě výpadku rozsvítíte a napájíte menší spotřebiče. Moderní modely používají baterie LiFePO4, které jsou bezpečnější a vydrží řádově tisíce nabíjecích cyklů.</p>
              <p>Výhody: nulová hlučnost, bez emisí, lze používat v interiéru, okamžitě „naskočí" bez startování. Nevýhody: omezená kapacita (typicky 1–3 kWh u běžných modelů), po vybití potřebuje nabíjení, u vyšších výkonů (3 kW a více) rychle roste cena.</p>
              <h3>Domácí záložní baterie napojená na fotovoltaiku nebo rozvod (UPS pro celý dům)</h3>
              <p>Pokud už máte nebo plánujete <Link href="/blog/fotovoltaika-s-baterii" style={{ color: "#2a6496", textDecoration: "underline" }}>baterii k fotovoltaice</Link>, řešíte záložní zdroj jako vedlejší efekt. Hybridní střídač s baterií a funkcí ostrovního provozu (backup mode) při výpadku sítě automaticky odpojí dům od distribuční sítě a napájí ho z baterie a panelů.</p>
              <p>Toto řešení je nejdražší, ale nejkomfortnější – přechod je plynulý (v řádu milisekund až sekund), bez nutnosti cokoliv ručně přepínat nebo startovat. Záleží ale na konfiguraci – ne každý hybridní střídač má ostrovní funkci a ne každá instalace ji má aktivovanou.</p>
            </section>

            <section id="vypocet-vykonu">
              <h2>Jak vypočítat potřebný výkon</h2>
              <p>Základní otázka zní: co konkrétně chcete při výpadku napájet? Sepište si seznam spotřebičů, které jsou pro vás při výpadku klíčové, a sečtěte jejich příkon. Orientační hodnoty:</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Spotřebič</th><th>Příkon (provozní)</th><th>Náběhový proud</th></tr></thead>
                  <tbody>
                    <tr><td>Lednice / mrazák</td><td>100–200 W</td><td>2–3× vyšší při startu kompresoru</td></tr>
                    <tr><td>Oběhové čerpadlo kotle</td><td>40–100 W</td><td>nízký</td></tr>
                    <tr><td>Osvětlení (LED)</td><td>50–150 W celkem</td><td>žádný</td></tr>
                    <tr><td>Router + síťové prvky</td><td>10–30 W</td><td>žádný</td></tr>
                    <tr><td>Notebook + monitor</td><td>60–120 W</td><td>žádný</td></tr>
                    <tr><td>Elektrický bojler</td><td>1500–2000 W</td><td>nízký</td></tr>
                    <tr><td>Klimatizace / tepelné čerpadlo</td><td>800–2500 W</td><td>2–3× vyšší při startu</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Pro běžnou „nouzovou" zálohu (lednice, kotel, osvětlení, internet, drobná elektronika) vychází potřeba kolem <strong>1–1,5 kW</strong> průběžného výkonu. Klíčové je ale počítat i s náběhovým (startovacím) proudem – lednice nebo kompresor tepelného čerpadla si při startu na zlomek sekundy vezme 2–3× vyšší výkon, než kolik spotřebovává v provozu. Generátor i powerstation musí tento špičkový odběr zvládnout, jinak se přetíží a vypne.</p>
              <p>Pro přesnější odhad celkové spotřeby domácnosti a jednotlivých spotřebičů využijte naši <Link href="/kalkulacky/spotreba-elektriciny" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačku spotřeby elektřiny</Link> – pomůže vám zjistit, jaký výkon a kapacitu skutečně potřebujete, než investujete do předimenzovaného (a zbytečně drahého) řešení.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Nezálohujte vše. Velké spotřebiče jako elektrický sporák, sušička nebo klimatizace mají vysoký příkon a při výpadku se bez nich obvykle dá pár hodin nebo i dní vydržet. Zaměřte se na to, co je skutečně nezbytné.</div>
            </section>

            <section id="bezpecnost">
              <h2>Bezpečnost provozu generátoru</h2>
              <h3>Oxid uhelnatý (CO)</h3>
              <p>Spalovací motor produkuje oxid uhelnatý – bezbarvý plyn bez zápachu, který je ve vyšších koncentracích smrtelný během minut. Generátor proto musí běžet <strong>výhradně venku</strong>, v dostatečné vzdálenosti od oken, dveří a větracích otvorů (alespoň 5–6 metrů), nikdy v garáži, sklepě, na balkoně nebo pod přístřeškem bez proudění vzduchu.</p>
              <h3>Umístění</h3>
              <p>Vyberte stabilní, suchý a vodorovný povrch. Generátor chraňte před deštěm (například přístřeškem, který ale nesmí omezovat odvod výfukových plynů), a umístěte ho mimo dosah dětí a domácích zvířat – horké části motoru a výfuk mohou způsobit popáleniny.</p>
              <h3>Hlučnost</h3>
              <p>Otevřené centrály dosahují 70–95 dB, což je srovnatelné s provozem sekačky na trávu. V obytné zóně to může být problém vůči sousedům, zejména v noci. Invertorové centrály jsou výrazně tišší (50–60 dB), ale ani ty nejsou bezhlučné. Pokud plánujete dlouhodobý provoz při rozsáhlém výpadku, počítejte s tím, že vás generátor „neschová" – sousedé budou vědět, že máte funkční záložní zdroj.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Palivo (benzin i nafta) skladujte v menším množství, v certifikovaných nádobách, mimo obytné prostory. Benzin navíc časem degraduje – pokud generátor používáte jen výjimečně, doplňte do paliva stabilizátor nebo palivo pravidelně obměňujte.</div>
            </section>

            <section id="pripojeni">
              <h2>Legislativa a připojení k domovní síti</h2>
              <p>Nejčastější a nejnebezpečnější chyba je připojit generátor přímo do zásuvky v domě prodlužovacím kabelem. Pokud v tu chvíli dojde k obnovení dodávky elektřiny ze sítě, dochází k souběhu dvou zdrojů – hrozí zpětné napájení do distribuční sítě (riziko úrazu pro pracovníky distributora), poškození generátoru i spotřebičů a v některých případech požár.</p>
              <p>Řešením je <strong>přepínač sítí</strong> (přepínací přepojovač, anglicky transfer switch) – zařízení, které mechanicky nebo automaticky zajistí, že do domovního rozvodu je v daný okamžik připojen pouze jeden zdroj, buď distribuční síť, nebo generátor/baterie. Instalaci přepínače by měl provést elektrikář s odpovídající kvalifikací, ideálně včetně revize.</p>
              <p>U fotovoltaiky s baterií a ostrovním provozem řeší podobnou funkci hybridní střídač automaticky – galvanicky odpojí dům od sítě a přepne na záložní zdroj. I tak je vhodné mít instalaci provedenou a revidovanou odbornou firmou, a to i s ohledem na podmínky distributora a případné dotační programy.</p>
            </section>

            <section id="naklady">
              <h2>Náklady a doba provozu</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Řešení</th><th>Orientační cena</th><th>Doba provozu</th><th>Vhodné pro</th></tr></thead>
                  <tbody>
                    <tr><td>Otevřená benzínová centrála (2–3 kW)</td><td>6 000–15 000 Kč</td><td>dle paliva, doplňování za chodu</td><td>nárazové výpadky, chata, stavba</td></tr>
                    <tr><td>Invertorová centrála (2–3 kW)</td><td>15 000–35 000 Kč</td><td>dle paliva</td><td>citlivá elektronika, tišší provoz</td></tr>
                    <tr><td>Powerstation (1–2 kWh)</td><td>15 000–40 000 Kč</td><td>2–6 hodin dle zátěže</td><td>krátké výpadky, byt, home office</td></tr>
                    <tr><td>Powerstation (3–5 kWh) + solární panel</td><td>40 000–90 000 Kč</td><td>desítky hodin s dosvitem</td><td>delší výpadky, dobíjení ze slunce</td></tr>
                    <tr><td>Domácí baterie s ostrovním provozem (5–10 kWh)</td><td>150 000–300 000 Kč</td><td>dle spotřeby a slunečního svitu, prakticky neomezeně</td><td>celý dům, tepelné čerpadlo, automatický přechod</td></tr>
                  </tbody>
                </table>
              </div>
              <p>U elektrocentrál je třeba k pořizovací ceně přičíst náklady na palivo a údržbu – při delším provozu (desítky hodin) se náklady na palivo mohou vyšplhat na stovky korun denně. U powerstation a domácí baterie jsou provozní náklady minimální, ale je nutné je pravidelně dobíjet (ideálně ze sítě nebo solárních panelů, pokud je výpadek delší).</p>
              <p>Při výběru zvažte i to, jak často skutečně výpadek nastává. Pro domácnost, kde k výpadku dochází jednou za rok na pár hodin, je předimenzovaná domácí baterie zbytečným luxusem. Naopak pro chalupu bez stabilní sítě nebo dům s tepelným čerpadlem v lokalitě s opakovanými výpadky se investice do baterie s ostrovním provozem může vyplatit i bez ohledu na fotovoltaiku samotnou.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jaký výkon záložního zdroje potřebuju pro domácnost?", a: "Pro lednici, oběhové čerpadlo kotle, osvětlení a router stačí 1–2 kW. Pokud chcete zálohovat i elektrický bojler, sporák nebo klimatizaci, počítejte s výkonem 3 kW a více." },
                  { q: "Co je lepší – elektrocentrála nebo powerstation?", a: "Elektrocentrála dodá vyšší výkon a dlouhý provoz, ale je hlučná a potřebuje palivo. Powerstation je tichá, bezúdržbová a vhodná do interiéru, ale má omezenou kapacitu a vyšší cenu na kWh." },
                  { q: "Můžu generátor připojit přímo do zásuvky v domě?", a: "Ne, bez přepínače sítí (přepínacího přepojovače) hrozí zpětné napájení do distribuční sítě a riziko úrazu i poškození generátoru. Vždy je nutné instalovat certifikovaný přepínač, ideálně instalovaný elektrikářem." },
                  { q: "Kolik stojí domácí záložní baterie k fotovoltaice?", a: "Baterie s kapacitou 5–10 kWh včetně řídicí elektroniky a instalace vyjde zpravidla na 150 000–300 000 Kč. Cena závisí na kapacitě, typu baterie (LiFePO4) a na tom, zda systém zvládne i ostrovní provoz při výpadku sítě." },
                  { q: "Je provoz benzínové elektrocentrály bezpečný v garáži?", a: "Ne. Spalovací motor produkuje oxid uhelnatý (CO), který je bez zápachu a ve špatně větraném prostoru smrtelný. Generátor musí běžet venku, v dostatečné vzdálenosti od oken a dveří, nikdy v garáži, sklepě nebo na balkoně." },
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
                <li><a href="#kdy-se-vyplati">Kdy se vyplatí</a></li>
                <li><a href="#typy-reseni">Typy řešení</a></li>
                <li><a href="#vypocet-vykonu">Výpočet výkonu</a></li>
                <li><a href="#bezpecnost">Bezpečnost</a></li>
                <li><a href="#pripojeni">Legislativa a připojení</a></li>
                <li><a href="#naklady">Náklady a provoz</a></li>
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
