import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Infrapanely na vytápění – jak fungují a kdy se vyplatí",
  description: "Princip infrapanelů, srovnání s konvekčním vytápěním, výpočet výkonu a reálné provozní náklady.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/infrapanely-na-vytapeni" },
  openGraph: { title: "Infrapanely na vytápění – jak fungují a kdy se vyplatí", description: "Princip infrapanelů, srovnání s konvekčním vytápěním, výpočet výkonu a reálné provozní náklady.", url: "https://www.domovniguru.cz/blog/infrapanely-na-vytapeni", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-24T08:00:00Z", modifiedTime: "2026-06-24T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Infrapanely%20na%20vyt%C3%A1p%C4%9Bn%C3%AD%20%E2%80%93%20jak%20funguj%C3%AD%20a%20kdy%20se%20vyplat%C3%AD&cat=blog", width: 1200, height: 630, alt: "Infrapanely na vytápění – jak fungují a kdy se vyplatí" }] },
  twitter: { card: "summary_large_image", title: "Infrapanely na vytápění – jak fungují a kdy se vyplatí", description: "Princip infrapanelů, srovnání s konvekčním vytápěním, výpočet výkonu a reálné provozní náklady." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/infrapanely-na-vytapeni#article", "headline": "Infrapanely na vytápění – jak fungují a kdy se vyplatí", "datePublished": "2026-06-24T08:00:00Z", "dateModified": "2026-06-24T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["infrapanely", "infrapanel na vytápění", "sálavé vytápění", "infra vytápění cena", "doplňkové elektrické vytápění", "infrapanel vs konvektor"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Elektrika & osvětlení", "item": "https://www.domovniguru.cz/blog/kategorie/elektrika" }, { "@type": "ListItem", "position": 4, "name": "Infrapanely na vytápění – jak fungují a kdy se vyplatí", "item": "https://www.domovniguru.cz/blog/infrapanely-na-vytapeni" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jak fungují infrapanely na vytápění?", "acceptedAnswer": { "@type": "Answer", "text": "Infrapanel vyzařuje infračervené záření, které ohřívá přímo povrchy v místnosti – stěny, podlahu, nábytek i lidi – podobně jako sluneční svit. Ohřáté povrchy pak teplo postupně předávají vzduchu. Na rozdíl od konvekčních topidel tedy infrapanel nečeká, až se ohřeje celý objem vzduchu, ale teplo je pociťované rychleji a rovnoměrněji." } }, { "@type": "Question", "name": "Vyplatí se infrapanely jako hlavní zdroj vytápění?", "acceptedAnswer": { "@type": "Answer", "text": "Jako hlavní a jediný zdroj vytápění celého domu se infrapanely obvykle nevyplatí kvůli vysoké ceně elektřiny ve srovnání s tepelným čerpadlem nebo plynem. Vhodné jsou hlavně jako doplňkové vytápění, v dobře zateplených bytech, v koupelnách, ateliérech nebo v místnostech používaných jen příležitostně." } }, { "@type": "Question", "name": "Jaký výkon infrapanelu potřebuji na místnost?", "acceptedAnswer": { "@type": "Answer", "text": "Orientační výpočet vychází z 60–100 W na m² podle úrovně zateplení a výšky stropu. Pro běžně zateplený pokoj 15 m² to znamená infrapanel o výkonu zhruba 900–1500 W, u špatně zateplených prostor je potřeba počítat s vyšší hodnotou nebo kombinací více panelů." } }, { "@type": "Question", "name": "Kolik stojí provoz infrapanelu?", "acceptedAnswer": { "@type": "Answer", "text": "Provozní náklady závisí na výkonu panelu, počtu hodin provozu a ceně elektřiny. Panel o výkonu 600 W běžící v průměru 4 hodiny denně při ceně elektřiny 6 Kč/kWh vyjde na přibližně 14–15 Kč za den, tedy zhruba 420–450 Kč měsíčně při celodenním vytápění jedné menší místnosti." } }, { "@type": "Question", "name": "Lze instalovat infrapanel na strop i na stěnu?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, infrapanely lze montovat na stěnu i na strop, případně volně postavit na stojan. Stropní montáž rovnoměrněji zahřívá celou místnost a šetří místo na stěnách, nástěnná montáž ve vhodné výšce (např. v koupelně) může lépe sálat teplo přímo na osoby v prostoru." } }] }] };

const RELATED = [
  { title: "Jak vybrat LED žárovku – parametry a úspory", href: "/blog/jak-vybrat-led-zarovku", read: "8 min" },
  { title: "Jak snížit účet za elektřinu doma – 12 tipů bez investic 2026", href: "/blog/snizit-ucet-za-elektrinu", read: "7 min" },
  { title: "Spotřebiče v pohotovostním režimu – kolik stojí standby 2026", href: "/blog/spotrebice-ve-standby-jak-usetrit", read: "6 min" },
  { title: "Jaký bojler vybrat – elektrický, plynový nebo zásobníkový?", href: "/blog/jaky-bojler-vybrat", read: "5 min" },
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
              <Link href="/blog/kategorie/elektrika">⚡ Elektrika & osvětlení</Link><span className="breadcrumb-sep">/</span>
              <span>Infrapanely na vytápění</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">⚡ Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Infrapanely na vytápění – jak fungují a kdy se vyplatí</h1>
              <p className="article-lead">Infrapanely se v poslední době objevují čím dál častěji – v koupelnách, ateliérech i jako doplněk k tepelnému čerpadlu. Slibují rychlý pocit tepla a snadnou instalaci bez kotle a rozvodů. Ale jsou skutečně levnější než klasické elektrické topení a hodí se jako hlavní vytápění domu? Tady je rozbor principu, výpočtu výkonu a reálných provozních nákladů.</p>
              <div className="article-meta-row"><span>Aktualizováno: 24. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#princip">Princip sálavého vytápění infrapanely</a></li>
                <li><a href="#kdy-se-vyplati">Kdy se infrapanely vyplatí</a></li>
                <li><a href="#srovnani">Srovnání s konvekčním topením a tepelným čerpadlem</a></li>
                <li><a href="#vypocet-vykonu">Jak vypočítat potřebný výkon</a></li>
                <li><a href="#instalace">Instalace na stěnu nebo strop</a></li>
                <li><a href="#naklady">Reálné provozní náklady</a></li>
                <li><a href="#vyhody-nevyhody">Výhody a nevýhody</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="princip">
              <h2>Princip sálavého vytápění infrapanely</h2>
              <p>Infrapanel je tenká deska, která svým povrchem vyzařuje dlouhovlnné infračervené záření – stejný princip, jakým hřeje slunce nebo kachlová kamna. Záření prochází vzduchem bez výrazné ztráty a ohřívá až povrchy, na které dopadne: stěny, podlahu, nábytek i samotné lidi v místnosti.</p>
              <p>Tím se infrapanel liší od konvekčního topení (přímotopy, konvektory, radiátory), které ohřívá primárně vzduch a teplo se v místnosti šíří prouděním. Sálavé teplo je pociťované rychleji, protože nemusí čekat na ohřátí celého objemu vzduchu, a méně vysušuje vzduch, protože nedochází k intenzivnímu proudění a víření prachu.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Sálavé teplo funguje podobně jako sluneční paprsky v zimě – i při nižší teplotě vzduchu se člověk u infrapanelu cítí tepleji, protože je ohříván přímo.</div>
            </section>

            <section id="kdy-se-vyplati">
              <h2>Kdy se infrapanely vyplatí</h2>
              <p>Infrapanely mají smysl především jako <strong>doplňkové vytápění</strong>, ne jako hlavní a jediný zdroj tepla pro celý dům.</p>
              <ul>
                <li><strong>Dobře zateplené prostory</strong> – v bytech a domech s kvalitní izolací jsou tepelné ztráty nízké, takže i nižší výkon infrapanelu stačí udržet komfortní teplotu</li>
                <li><strong>Koupelny</strong> – rychlý nástup sálavého tepla je ideální pro krátké, intenzivní vytápění během koupání nebo sprchování, kdy se nevyplatí zapínat ústřední topení s velkým předstihem</li>
                <li><strong>Příležitostně používané místnosti</strong> – ateliéry, pracovny, zimní zahrady nebo chaty, kde nemá smysl topit nepřetržitě</li>
                <li><strong>Doplnění studených koutů</strong> – rohové pokoje, prosklené stěny nebo prostory s nedostatečným výkonem stávajícího topení</li>
                <li><strong>Rekonstrukce bez možnosti rozvodů</strong> – v podkroví nebo přístavbě, kde by zavádění vodního topení bylo nákladné</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> V koupelně je vhodné kombinovat infrapanel s topným žebříkem na ručníky – infrapanel rychle prohřeje vzduch a povrchy, žebřík zajistí teplé osušky.</div>
            </section>

            <section id="srovnani">
              <h2>Srovnání s konvekčním topením a tepelným čerpadlem</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Vlastnost</th><th>Infrapanel</th><th>Konvekční elektrické topení</th><th>Tepelné čerpadlo</th></tr></thead>
                  <tbody>
                    <tr><td>Pořizovací cena</td><td>Nízká až střední</td><td>Nízká</td><td>Vysoká</td></tr>
                    <tr><td>Provozní náklady</td><td>Vysoké (cena elektřiny)</td><td>Vysoké (cena elektřiny)</td><td>Nízké (COP 3–4×)</td></tr>
                    <tr><td>Rychlost nástupu tepla</td><td>Rychlá, sálavá</td><td>Pomalejší, ohřev vzduchu</td><td>Pomalá, ale stabilní</td></tr>
                    <tr><td>Instalace</td><td>Velmi snadná</td><td>Snadná</td><td>Náročná, nutný projekt</td></tr>
                    <tr><td>Vhodnost jako hlavní zdroj</td><td>Spíše ne</td><td>Spíše ne</td><td>Ano</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Tepelné čerpadlo má díky vysokému COP (poměru vyrobeného tepla k spotřebované elektřině) výrazně nižší provozní náklady, ale vyžaduje vyšší investici a stavební úpravy. Infrapanel je naopak ideální tam, kde se nevyplatí budovat centrální systém vytápění jen pro jednu nebo dvě místnosti.</p>
            </section>

            <section id="vypocet-vykonu">
              <h2>Jak vypočítat potřebný výkon na m²</h2>
              <p>Orientační výpočet vychází z tepelné ztráty místnosti, kterou lze zjednodušeně odhadnout podle úrovně zateplení:</p>
              <ul>
                <li><strong>Novostavba, dobré zateplení:</strong> 60–70 W/m²</li>
                <li><strong>Běžný starší byt nebo dům, částečné zateplení:</strong> 80–100 W/m²</li>
                <li><strong>Špatně zateplený nebo vysoký prostor (stropy 3 m+):</strong> 100–130 W/m²</li>
              </ul>
              <p>Pro pokoj o ploše 15 m² s běžným zateplením tedy vychází potřebný výkon přibližně <strong>1200–1500 W</strong> – v praxi to může být jeden výkonnější panel nebo kombinace dvou menších rozmístěných po místnosti pro rovnoměrnější sálání.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Při výběru výkonu je lepší volit o trochu vyšší hodnotu a panel řídit termostatem – díky tomu nebude muset běžet na 100 % výkonu nepřetržitě a prodloužíš jeho životnost.</div>
            </section>

            <section id="instalace">
              <h2>Instalace na stěnu nebo strop</h2>
              <p>Infrapanely se montují na stěnu, na strop, nebo se používají volně stojící na stojanu.</p>
              <h3>Stropní montáž</h3>
              <p>Rovnoměrně zahřívá celou místnost shora dolů a nezabírá místo na stěnách – výhodné v menších pokojích nebo koupelnách s omezeným prostorem na stěnách. Sálání shora ale musí překonat větší vzdálenost k podlaze, takže efekt bývá o trochu mírnější.</p>
              <h3>Nástěnná montáž</h3>
              <p>Panel umístěný na stěně ve vhodné výšce (typicky 1,5–2 m) sálá teplo přímo na osoby v prostoru, což je výhodné například v koupelně u umyvadla nebo u pracovního stolu. Důležité je nesměrovat panel přímo na hořlavé materiály nebo nábytek z přírodního dřeva ve velmi krátké vzdálenosti.</p>
              <p>Instalace samotného panelu na stěnu nebo strop je jednoduchá – připojuje se běžně do zásuvky nebo se zapojuje napevno přes vlastní obvod. Pokud řešíš zapojení napevno, může se hodit i přehled, jak <Link href="/blog/instalovat-stmivac" style={{ color: "#2a6496", textDecoration: "underline" }}>nainstalovat stmívač</Link> nebo jiný ovládací prvek do okruhu.</p>
            </section>

            <section id="naklady">
              <h2>Reálné provozní náklady</h2>
              <p>Provozní náklady infrapanelu závisí na jeho výkonu, počtu hodin provozu denně a aktuální ceně elektřiny.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Výkon panelu</th><th>Provoz 4 h/den</th><th>Měsíční náklad (cena 6 Kč/kWh)</th></tr></thead>
                  <tbody>
                    <tr><td>300 W</td><td>1,2 kWh/den</td><td>~216 Kč</td></tr>
                    <tr><td>600 W</td><td>2,4 kWh/den</td><td>~432 Kč</td></tr>
                    <tr><td>900 W</td><td>3,6 kWh/den</td><td>~648 Kč</td></tr>
                    <tr><td>1200 W</td><td>4,8 kWh/den</td><td>~864 Kč</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Reálná spotřeba bývá nižší díky termostatu, který panel cyklicky vypíná po dosažení nastavené teploty. Pro snížení nákladů se vyplatí kombinovat infrapanel s programovatelným termostatem a topit jen v časech, kdy je místnost skutečně využívaná – více tipů na úspory najdeš v článku, jak <Link href="/blog/snizit-ucet-za-elektrinu" style={{ color: "#2a6496", textDecoration: "underline" }}>snížit účet za elektřinu</Link>.</p>
            </section>

            <section id="vyhody-nevyhody">
              <h2>Výhody a nevýhody infrapanelů</h2>
              <ul>
                <li><strong>Výhody:</strong> jednoduchá a rychlá instalace bez stavebních úprav, tichý provoz beze ventilátorů, rychlý pocit tepla, méně víření prachu, dlouhá životnost (desítky let) bez pravidelného servisu</li>
                <li><strong>Nevýhody:</strong> vysoké provozní náklady při použití jako hlavní vytápění, závislost na ceně elektřiny, omezený dosah sálání (nehodí se pro velké otevřené prostory bez kombinace více panelů), nutnost správného umístění, aby teplo necílilo zbytečně na nevyužívaná místa</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pro velký otevřený prostor (obývací pokoj s kuchyní) je lepší kombinovat více menších panelů rozmístěných po obvodu než jeden výkonný panel na jednom místě – teplo se rozloží rovnoměrněji.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jak fungují infrapanely na vytápění?", a: "Infrapanel vyzařuje infračervené záření, které ohřívá přímo povrchy v místnosti – stěny, podlahu, nábytek i lidi – podobně jako sluneční svit. Ohřáté povrchy pak teplo postupně předávají vzduchu. Na rozdíl od konvekčních topidel tedy infrapanel nečeká, až se ohřeje celý objem vzduchu, ale teplo je pociťované rychleji a rovnoměrněji." },
                  { q: "Vyplatí se infrapanely jako hlavní zdroj vytápění?", a: "Jako hlavní a jediný zdroj vytápění celého domu se infrapanely obvykle nevyplatí kvůli vysoké ceně elektřiny ve srovnání s tepelným čerpadlem nebo plynem. Vhodné jsou hlavně jako doplňkové vytápění, v dobře zateplených bytech, v koupelnách, ateliérech nebo v místnostech používaných jen příležitostně." },
                  { q: "Jaký výkon infrapanelu potřebuji na místnost?", a: "Orientační výpočet vychází z 60–100 W na m² podle úrovně zateplení a výšky stropu. Pro běžně zateplený pokoj 15 m² to znamená infrapanel o výkonu zhruba 900–1500 W, u špatně zateplených prostor je potřeba počítat s vyšší hodnotou nebo kombinací více panelů." },
                  { q: "Kolik stojí provoz infrapanelu?", a: "Provozní náklady závisí na výkonu panelu, počtu hodin provozu a ceně elektřiny. Panel o výkonu 600 W běžící v průměru 4 hodiny denně při ceně elektřiny 6 Kč/kWh vyjde na přibližně 14–15 Kč za den, tedy zhruba 420–450 Kč měsíčně při celodenním vytápění jedné menší místnosti." },
                  { q: "Lze instalovat infrapanel na strop i na stěnu?", a: "Ano, infrapanely lze montovat na stěnu i na strop, případně volně postavit na stojan. Stropní montáž rovnoměrněji zahřívá celou místnost a šetří místo na stěnách, nástěnná montáž ve vhodné výšce (např. v koupelně) může lépe sálat teplo přímo na osoby v prostoru." },
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
                <li><a href="#princip">Princip sálavého vytápění</a></li>
                <li><a href="#kdy-se-vyplati">Kdy se vyplatí</a></li>
                <li><a href="#srovnani">Srovnání s alternativami</a></li>
                <li><a href="#vypocet-vykonu">Výpočet výkonu</a></li>
                <li><a href="#instalace">Instalace</a></li>
                <li><a href="#naklady">Provozní náklady</a></li>
                <li><a href="#vyhody-nevyhody">Výhody a nevýhody</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/elektrika" className="sidebar-cat-link">⚡ Elektrika & osvětlení<span>25 článků →</span></Link>
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
