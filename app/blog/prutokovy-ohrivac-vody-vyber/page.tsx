import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Průtokový ohřívač vody: jak vybrat",
  description: "Princip průtokového ohřevu vody, elektrické vs. plynové ohřívače, výpočet potřebného výkonu v kW, instalace a bezpečnost při výběru.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/prutokovy-ohrivac-vody-vyber" },
  openGraph: { title: "Průtokový ohřívač vody: jak vybrat", description: "Princip průtokového ohřevu vody, elektrické vs. plynové ohřívače, výpočet potřebného výkonu v kW, instalace a bezpečnost při výběru.", url: "https://www.domovniguru.cz/blog/prutokovy-ohrivac-vody-vyber", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-25T08:00:00Z", modifiedTime: "2026-06-25T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Pr%C5%AFtokov%C3%BD%20oh%C5%99%C3%ADva%C4%8D%20vody%3A%20jak%20vybrat&cat=blog", width: 1200, height: 630, alt: "Průtokový ohřívač vody: jak vybrat" }] },
  twitter: { card: "summary_large_image", title: "Průtokový ohřívač vody: jak vybrat", description: "Princip průtokového ohřevu vody, elektrické vs. plynové ohřívače, výpočet potřebného výkonu v kW, instalace a bezpečnost při výběru." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/prutokovy-ohrivac-vody-vyber#article", "headline": "Průtokový ohřívač vody: jak vybrat", "datePublished": "2026-06-25T08:00:00Z", "dateModified": "2026-06-25T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["průtokový ohřívač vody", "ohřev vody bez bojleru", "elektrický průtokový ohřívač", "průtokový ohřívač pod dřez", "celodomovní průtokový ohřívač"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Elektrika & osvětlení", "item": "https://www.domovniguru.cz/blog/kategorie/elektrika" }, { "@type": "ListItem", "position": 4, "name": "Průtokový ohřívač vody", "item": "https://www.domovniguru.cz/blog/prutokovy-ohrivac-vody-vyber" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jaký je rozdíl mezi průtokovým ohřívačem a bojlerem?", "acceptedAnswer": { "@type": "Answer", "text": "Bojler (zásobníkový ohřívač) udržuje zásobu už nahřáté vody v nádrži a tu během odběru postupně doplňuje a dohřívá. Průtokový ohřívač naopak nemá žádnou zásobu – ohřívá vodu přesně v okamžiku, kdy jí protéká skrz těleso ohřívače, takže nikdy nedojde teplá voda, ale výkon musí stačit na okamžitou potřebu." } }, { "@type": "Question", "name": "Jaký výkon potřebuje průtokový ohřívač pro celou domácnost?", "acceptedAnswer": { "@type": "Answer", "text": "Pro pokrytí sprchy a kuchyně najednou se obvykle používají celodomovní elektrické ohřívače o výkonu 18–27 kW, případně plynové průtokové ohřívače (kombinované kotle), které takový výkon zvládnou bez extrémních nároků na elektroinstalaci. Malý ohřívač pod dřez s výkonem 3,5–5,5 kW stačí jen na jedno odběrné místo s nízkým průtokem." } }, { "@type": "Question", "name": "Zvládne běžná elektroinstalace v bytě napájet výkonný průtokový ohřívač?", "acceptedAnswer": { "@type": "Answer", "text": "Velký celodomovní elektrický ohřívač o výkonu 18 kW a více vyžaduje třífázové napájení a samostatný silový okruh s odpovídajícím jističem, který běžná bytová elektroinstalace často nemá bez úpravy. Před nákupem výkonného ohřívače je nutné nechat elektrikáře posoudit, zda hlavní jistič bytu/domu a přívodní kabel takové zatížení vůbec unesou." } }, { "@type": "Question", "name": "Je elektrický nebo plynový průtokový ohřívač lepší?", "acceptedAnswer": { "@type": "Answer", "text": "Elektrický ohřívač nepotřebuje plynovou přípojku ani komín a má jednodušší instalaci, ale klade vysoké nároky na elektroinstalaci u výkonnějších modelů. Plynový průtokový ohřívač zvládne vysoký výkon bez extrémního proudového odběru, ale vyžaduje plynovou přípojku, odvod spalin a pravidelné servisní revize plynového zařízení." } }, { "@type": "Question", "name": "Musí se průtokový ohřívač revidovat?", "acceptedAnswer": { "@type": "Answer", "text": "Elektrický průtokový ohřívač jako součást elektroinstalace podléhá revizi elektroinstalace po zapojení nového okruhu, zejména u výkonnějších modelů na samostatném jištění. Plynový průtokový ohřívač navíc vyžaduje revizi plynového zařízení a kontrolu odtahu spalin podle platných předpisů." } }] }] };

const RELATED = [
  { title: "Jaký bojler vybrat", href: "/blog/jaky-bojler-vybrat", read: "6 min" },
  { title: "Jak funguje proudový chránič", href: "/blog/jak-funguje-proudovy-chranic", read: "4 min" },
  { title: "Jak fungují pojistky", href: "/blog/jak-funguji-pojistky", read: "5 min" },
  { title: "Revize elektroinstalace – kdy a proč", href: "/blog/revize-elektroinstalace-kdy-a-proc", read: "5 min" },
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
              <span>Průtokový ohřívač vody</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">⚡ Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Průtokový ohřívač vody: jak vybrat</h1>
              <p className="article-lead">Průtokový ohřívač ohřeje vodu přesně v momentě, kdy ji potřebuješ, bez zásobníku a bez ztrát teplem během nečinnosti. Hodí se pod dřez, do koupelny i jako náhrada celého bojleru – ale výběr správného výkonu a typu je klíčový, jinak skončíš se slabým proudem vlažné vody nebo s elektroinstalací, která na výkonný model nestačí.</p>
              <div className="article-meta-row"><span>Aktualizováno: 25. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#princip">Princip průtokového ohřevu vs. bojler</a></li>
                <li><a href="#typy">Typy průtokových ohřívačů</a></li>
                <li><a href="#vyhody-nevyhody">Výhody a nevýhody</a></li>
                <li><a href="#vykon">Jak vybrat výkon</a></li>
                <li><a href="#instalace">Instalace a bezpečnost</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="princip">
              <h2>Princip průtokového ohřevu vs. bojler se zásobníkem</h2>
              <p>Zásadní rozdíl mezi průtokovým ohřívačem a klasickým bojlerem je v tom, jestli se voda ohřívá předem do zásoby, nebo až v okamžiku spotřeby.</p>
              <ul>
                <li><strong>Bojler (zásobníkový ohřívač)</strong> – udržuje v izolované nádrži určitý objem už nahřáté vody (typicky 80–200 litrů v domácnosti). Jakmile voda odtéká, nádrž ji postupně doplňuje a dohřívá. Nevýhodou je tepelná ztráta i v době, kdy se voda nepoužívá, a omezená kapacita – při delším odběru může teplá voda dojít.</li>
                <li><strong>Průtokový ohřívač</strong> – nemá žádnou zásobu vody. Topné těleso (elektrické nebo plynový hořák) ohřívá vodu přímo za letu, jak protéká skrz těleso ohřívače. Teplá voda nikdy „nedojde", ale výstupní teplota a průtok závisí na výkonu ohřívače a vstupní teplotě vody.</li>
              </ul>
              <p>Pro detailní srovnání s klasickým zásobníkovým řešením se podívej na náš článek <Link href="/blog/jaky-bojler-vybrat" style={{ color: "#2a6496", textDecoration: "underline" }}>jaký bojler vybrat</Link>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud bydlíš sám nebo ve dvou a využíváš teplou vodu nárazově (ranní sprcha, umytí nádobí), průtokový ohřívač často vyjde výhodněji než bojler, který musí celý den udržovat zásobu teplé vody na pohotovosti.</div>
            </section>

            <section id="typy">
              <h2>Typy průtokových ohřívačů</h2>
              <h3>Malé elektrické ohřívače pod dřez nebo sprchu</h3>
              <p>Kompaktní jednotky s výkonem 3,5–5,5 kW (běžné jednofázové připojení na 230 V), určené pro jedno odběrné místo – umyvadlo, dřez nebo i sprchu s nižším průtokem. Hodí se pro chaty, garsonky, kuchyňské koutky nebo jako doplněk tam, kde je teplá voda jen na jednom místě daleko od hlavního zdroje.</p>
              <h3>Výkonné celodomovní elektrické ohřívače</h3>
              <p>Větší jednotky s výkonem zhruba 18–27 kW, zapojené na třífázové napájení (400 V), schopné zásobovat víc odběrných míst nebo i celou domácnost. Vyžadují odpovídající elektroinstalaci a samostatný silový okruh s vyšším jištěním.</p>
              <h3>Plynové průtokové ohřívače</h3>
              <p>Plynový průtokový ohřev funguje na stejném principu, jen místo elektrického tělesa ohřívá vodu plynový hořák. Zvládne vysoký výkon (desítky kW) bez extrémních nároků na elektroinstalaci, ale vyžaduje plynovou přípojku, odvod spalin a pravidelnou servisní kontrolu plynového zařízení. Často je součástí kombinovaného plynového kotle, který zajišťuje jak vytápění, tak teplou vodu.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud doma už máš plynovou přípojku pro vytápění, kombinovaný plynový kotel s průtokovým ohřevem teplé vody bývá praktičtější a levnější na provoz než instalace samostatného výkonného elektrického ohřívače.</div>
            </section>

            <section id="vyhody-nevyhody">
              <h2>Výhody a nevýhody</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Aspekt</th><th>Průtokový ohřívač</th><th>Bojler</th></tr></thead>
                  <tbody>
                    <tr><td>Místo</td><td>Malý, často velikost krabice od bot</td><td>Velký zásobník, potřebuje prostor</td></tr>
                    <tr><td>Ztráty teplem</td><td>Žádné, ohřev jen za letu</td><td>Stálá ztráta při udržování zásoby</td></tr>
                    <tr><td>Dojde teplá voda?</td><td>Nikdy, jen klesá teplota/průtok při přetížení</td><td>Ano, po vyčerpání zásobníku</td></tr>
                    <tr><td>Proudový odběr</td><td>Vysoký, špičkový při zapnutí</td><td>Nižší, rozložený v čase</td></tr>
                    <tr><td>Nároky na elektroinstalaci</td><td>Vyšší u výkonných modelů</td><td>Nižší, běžný okruh často stačí</td></tr>
                  </tbody>
                </table>
              </div>
              <h3>Výhody</h3>
              <ul>
                <li>Úspora místa – žádný velký zásobník, hodí se i do malých prostor</li>
                <li>Žádná ztráta teplem při nečinnosti, voda se neohřívá „naprázdno"</li>
                <li>Teoreticky neomezené množství teplé vody, dokud stačí výkon</li>
                <li>U menších modelů jednoduchá a levná instalace</li>
              </ul>
              <h3>Nevýhody</h3>
              <ul>
                <li>Vysoký proudový odběr, zejména u výkonných celodomovních modelů</li>
                <li>Nutnost dostatečně dimenzované elektroinstalace, často včetně nového okruhu</li>
                <li>Při nízkém vstupním tlaku nebo nízké teplotě vstupní vody (zima) může klesat výstupní teplota nebo průtok</li>
                <li>Více odběrných míst najednou (např. dvě sprchy) může vyžadovat výrazně vyšší výkon než jedno místo</li>
              </ul>
            </section>

            <section id="vykon">
              <h2>Na co si dát pozor při výběru výkonu</h2>
              <p>Potřebný výkon ohřívače v kW závisí na požadovaném průtoku teplé vody a na tom, o kolik stupňů je potřeba vodu ohřát (rozdíl mezi vstupní a výstupní teplotou).</p>
              <ul>
                <li><strong>Orientační vzorec</strong> – přibližně platí, že na ohřátí 1 litru vody za minutu o 25 °C (např. z 10 °C na 35 °C, běžné pro sprchu) je potřeba zhruba 1,7–1,8 kW výkonu. Pro vyšší rozdíl teplot (např. na 40 °C v zimě, kdy je vstupní voda chladnější) je potřeba výkonu o trochu víc.</li>
                <li><strong>Jedno odběrné místo s nízkým průtokem</strong> (umyvadlo, dřez) – stačí malý ohřívač s výkonem 3,5–5,5 kW.</li>
                <li><strong>Sprcha s komfortním průtokem</strong> – obvykle potřebuje minimálně 18 kW, aby teplota neklesla při běžném průtoku sprchové hlavice.</li>
                <li><strong>Více odběrných míst najednou</strong> (sprcha + kuchyň) – vyžaduje násobně vyšší výkon, často 21–27 kW u celodomovních modelů.</li>
                <li><strong>Vstupní teplota vody</strong> – v zimě je voda z vodovodního řadu chladnější než v létě, což zvyšuje nutný výkon pro dosažení stejné výstupní teploty. Při výpočtu počítej s horší (zimní) variantou.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Než ohřívač koupíš, ověř si u elektrikáře nebo v technické dokumentaci domu, jaký je hlavní jistič bytu/domu a kolik proudu má přívodní kabel reálně k dispozici. Výkonný 24kW ohřívač totiž může na špičkový odběr potřebovat víc, než kolik unese stávající přípojka.</div>
            </section>

            <section id="instalace">
              <h2>Instalace a bezpečnost</h2>
              <p>Průtokové ohřívače pracují s vysokým proudovým zatížením soustředěným do krátkého okamžiku zapnutí, což klade specifické nároky na elektroinstalaci a bezpečnost.</p>
              <ul>
                <li><strong>Samostatný okruh a jistič</strong> – výkonnější ohřívače (od cca 8–9 kW výše) vyžadují vlastní silový okruh s odpovídajícím jističem, dimenzovaným přesně podle výkonu modelu. Toto zapojení je vždy práce pro elektrikáře, nikdy ne pro laika.</li>
                <li><strong>Třífázové napájení u výkonných modelů</strong> – celodomovní ohřívače nad 18 kW obvykle potřebují třífázové připojení (400 V), což může vyžadovat úpravu stávající elektroinstalace, pokud byt nebo dům dosud jen jednofázové připojení má.</li>
                <li><strong>Proudový chránič (FI)</strong> – jako u všech spotřebičů v koupelně nebo s vodou musí být okruh chráněn proudovým chráničem, který odpojí napájení při poruchovém proudu. Víc o principu v článku, jak <Link href="/blog/jak-funguje-proudovy-chranic" style={{ color: "#2a6496", textDecoration: "underline" }}>funguje proudový chránič</Link>.</li>
                <li><strong>Revize po instalaci</strong> – po zapojení nového silového okruhu pro průtokový ohřívač je nutná revize elektroinstalace, viz <Link href="/blog/revize-elektroinstalace-kdy-a-proc" style={{ color: "#2a6496", textDecoration: "underline" }}>revize elektroinstalace – kdy a proč</Link>.</li>
                <li><strong>Vodovodní přípojka</strong> – kromě elektrické části je potřeba i odpovídající vodovodní instalace s dostatečným tlakem vody, jinak ohřívač nemusí dosáhnout deklarovaného výkonu.</li>
              </ul>
              <div className="article-tip"><strong>⚠️ Bezpečnost:</strong> Instalaci výkonného průtokového ohřívače, zapojení nového okruhu a jističe nedělej sám – jde o spotřebič s vysokým proudovým odběrem v blízkosti vody, kde chyba v zapojení nebo poddimenzovaný kabel může způsobit přehřátí, požár nebo úraz elektrickým proudem. Před jakoukoli manipulací s elektroinstalací vždy vypni příslušný jistič v rozvaděči a v případě nejistoty přizvi kvalifikovaného elektrikáře.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jaký je rozdíl mezi průtokovým ohřívačem a bojlerem?", a: "Bojler udržuje zásobu už nahřáté vody v nádrži a tu během odběru postupně doplňuje a dohřívá. Průtokový ohřívač naopak nemá žádnou zásobu – ohřívá vodu přesně v okamžiku, kdy jí protéká skrz těleso ohřívače, takže nikdy nedojde teplá voda, ale výkon musí stačit na okamžitou potřebu." },
                  { q: "Jaký výkon potřebuje průtokový ohřívač pro celou domácnost?", a: "Pro pokrytí sprchy a kuchyně najednou se obvykle používají celodomovní elektrické ohřívače o výkonu 18–27 kW, případně plynové průtokové ohřívače. Malý ohřívač pod dřez s výkonem 3,5–5,5 kW stačí jen na jedno odběrné místo s nízkým průtokem." },
                  { q: "Zvládne běžná elektroinstalace v bytě napájet výkonný průtokový ohřívač?", a: "Velký celodomovní elektrický ohřívač o výkonu 18 kW a více vyžaduje třífázové napájení a samostatný silový okruh s odpovídajícím jističem, který běžná bytová elektroinstalace často nemá bez úpravy. Před nákupem nechej elektrikáře posoudit, zda hlavní jistič a přívodní kabel takové zatížení unesou." },
                  { q: "Je elektrický nebo plynový průtokový ohřívač lepší?", a: "Elektrický ohřívač nepotřebuje plynovou přípojku ani komín a má jednodušší instalaci, ale klade vysoké nároky na elektroinstalaci u výkonnějších modelů. Plynový ohřívač zvládne vysoký výkon bez extrémního proudového odběru, ale vyžaduje plynovou přípojku, odvod spalin a pravidelné servisní revize." },
                  { q: "Musí se průtokový ohřívač revidovat?", a: "Elektrický průtokový ohřívač podléhá revizi elektroinstalace po zapojení nového okruhu, zejména u výkonnějších modelů na samostatném jištění. Plynový průtokový ohřívač navíc vyžaduje revizi plynového zařízení a kontrolu odtahu spalin." },
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
                <li><a href="#princip">Princip vs. bojler</a></li>
                <li><a href="#typy">Typy ohřívačů</a></li>
                <li><a href="#vyhody-nevyhody">Výhody a nevýhody</a></li>
                <li><a href="#vykon">Výběr výkonu</a></li>
                <li><a href="#instalace">Instalace a bezpečnost</a></li>
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
