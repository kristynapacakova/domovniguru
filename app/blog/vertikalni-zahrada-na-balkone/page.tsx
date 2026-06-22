import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vertikální zahrada na balkoně – inspirace a postup",
  description: "Jak si vybudovat vertikální zahradu na balkoně – konstrukce, vhodné rostliny, zavlažování a údržba.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/vertikalni-zahrada-na-balkone" },
  openGraph: { title: "Vertikální zahrada na balkoně – inspirace a postup", description: "Jak si vybudovat vertikální zahradu na balkoně – konstrukce, vhodné rostliny, zavlažování a údržba.", url: "https://www.domovniguru.cz/blog/vertikalni-zahrada-na-balkone", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-12T08:00:00Z", modifiedTime: "2026-06-12T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Vertik%C3%A1ln%C3%AD%20zahrada%20na%20balkon%C4%9B%20%E2%80%93%20inspirace%20a%20postup&cat=blog", width: 1200, height: 630, alt: "Vertikální zahrada na balkoně – inspirace a postup" }] },
  twitter: { card: "summary_large_image", title: "Vertikální zahrada na balkoně – inspirace a postup", description: "Jak si vybudovat vertikální zahradu na balkoně – konstrukce, vhodné rostliny, zavlažování a údržba." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/vertikalni-zahrada-na-balkone#article", "headline": "Vertikální zahrada na balkoně – inspirace a postup", "datePublished": "2026-06-12T08:00:00Z", "dateModified": "2026-06-12T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["vertikální zahrada", "balkonová zahrada", "kapsáče na rostliny", "pěstování na balkoně", "zelená stěna"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Zahrada & terasa", "item": "https://www.domovniguru.cz/blog/kategorie/zahrada" }, { "@type": "ListItem", "position": 4, "name": "Vertikální zahrada na balkoně", "item": "https://www.domovniguru.cz/blog/vertikalni-zahrada-na-balkone" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jak velký balkon potřebuji pro vertikální zahradu?", "acceptedAnswer": { "@type": "Answer", "text": "Vertikální zahradu lze vybudovat i na velmi malém balkoně – stačí jedna stěna nebo zábradlí o šířce 1 metr. Většina systémů (kapsáče, palety, moduly) se montuje svisle, takže nezabírají podlahovou plochu." } }, { "@type": "Question", "name": "Jaké rostliny jsou nejvhodnější pro začátečníky?", "acceptedAnswer": { "@type": "Answer", "text": "Pro začátek jsou ideální bylinky (bazalka, pažitka, máta), jahody, listové saláty a popínavé květiny jako petúnie nebo lobelka. Snášejí menší kolísání vlhkosti a rychle ukáží, jestli jim podmínky vyhovují." } }, { "@type": "Question", "name": "Jak často musím vertikální zahradu zalévat?", "acceptedAnswer": { "@type": "Answer", "text": "V létě obvykle denně, protože svislé substrátové kapsy a malé nádoby vysychají rychleji než klasické záhony. Nejpohodlnější je kapénková automatická závlaha s časovačem, která zvládne i dvě zálivky denně." } }, { "@type": "Question", "name": "Unese zábradlí balkonu váhu vertikální zahrady?", "acceptedAnswer": { "@type": "Answer", "text": "Záleží na konstrukci a typu zábradlí. Lehké textilní kapsáče s nevlhkým substrátem zvládne i běžné zábradlí, ale u dřevěných palet nebo modulárních systémů plných mokré zeminy je nutné ověřit nosnost a raději konstrukci kotvit do zdi nebo podlahy." } }, { "@type": "Question", "name": "Jak vertikální zahradu připravit na zimu?", "acceptedAnswer": { "@type": "Answer", "text": "Letničky a bylinky na konci sezóny odstraňte a substrát vyměňte nebo proschněte. Dřevěné konstrukce ošetřete olejem proti vlhkosti, textilní kapsáče vyprejte a uložte do sucha. Trvalky a mrazuvzdorné druhy je vhodné přesunout blíž ke zdi domu, kde je chrání zbytkové teplo." } }] }] };

const RELATED = [
  { title: "Bylinky a zelenina na balkoně – co se vyplatí pěstovat", href: "/blog/bylinky-a-zelenina-na-balkone", read: "5 min" },
  { title: "Terasa na balkoně – jak ji zařídit a vybavit", href: "/blog/terasa-na-balkone", read: "5 min" },
  { title: "Automatické zavlažování zahrady – jak na to", href: "/blog/automaticke-zavlazovani-zahrady", read: "6 min" },
  { title: "Bylinková zahrádka – průvodce pro začátečníky", href: "/blog/bylinkova-zahradka", read: "4 min" },
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
              <span>Vertikální zahrada na balkoně</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Vertikální zahrada na balkoně – inspirace a postup</h1>
              <p className="article-lead">Malý balkon neznamená malou zahradu. Díky vertikálnímu pěstování dokážeš na ploše několika čtverečních metrů vypěstovat bylinky, zeleninu i pestrou květinovou výzdobu. Ukážeme ti, jaké konstrukce zvolit, jaké rostliny se hodí na tvou orientaci balkonu a jak vše udržet zdravé a krásné celou sezónu.</p>
              <div className="article-meta-row"><span>Aktualizováno: 12. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#vyhody">Výhody vertikální zahrady na balkoně</a></li>
                <li><a href="#konstrukce">Typy konstrukcí</a></li>
                <li><a href="#rostliny">Výběr rostlin podle světla a orientace</a></li>
                <li><a href="#substrat">Substrát a zavlažování</a></li>
                <li><a href="#udrzba">Údržba přes sezónu</a></li>
                <li><a href="#inspirace">Inspirace a kombinace pro malý balkon</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="vyhody">
              <h2>1. Výhody vertikální zahrady na balkoně</h2>
              <p>Vertikální zahrada využívá svislé plochy – zábradlí, stěny, dveře nebo speciální stojany – a uvolňuje tak podlahovou plochu balkonu pro sezení a relaxaci. Místo jednoho řádku truhlíků na zemi tak najednou získáš desítky pěstebních míst na ploše jediné stěny.</p>
              <ul>
                <li><strong>Maximální využití prostoru</strong> – ideální pro malé balkony a lodžie, kde je každý centimetr drahý</li>
                <li><strong>Lepší přístup ke světlu</strong> – rostliny ve vyšších patrech nejsou stíněné okolními truhlíky</li>
                <li><strong>Estetický efekt</strong> – zelená stěna působí jako přirozená dekorace a zároveň stíní a chladí</li>
                <li><strong>Snazší sklizeň</strong> – bylinky a zelenina jsou v dosahu ruky, bez nutnosti se ohýbat</li>
                <li><strong>Soukromí a izolace od hluku</strong> – hustší porost funguje jako přirozená clona od sousedů a ulice</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Před nákupem konstrukce si nejprve změř dostupnou výšku a šířku stěny nebo zábradlí – ušetříš si zklamání z příliš velkého nebo malého systému.</div>
            </section>

            <section id="konstrukce">
              <h2>2. Typy konstrukcí</h2>
              <h3>Textilní kapsáče</h3>
              <p>Závěsné kapsáče z geotextilie jsou nejlevnější a nejlehčí variantou. Visí na zábradlí nebo na stěně pomocí háčků a každá kapsa pojme jednu menší rostlinu – bylinky, jahody nebo letničky. Výhodou je nízká hmotnost i v plně osázeném stavu a snadné sundání na zimu.</p>
              <h3>Palety a dřevěné regály</h3>
              <p>Recyklovaná paleta postavená na bok nebo opatřená přihrádkami vytvoří rustikální vertikální záhon. Před použitím je nutné paletu ošetřit nátěrem vhodným pro venkovní použití a vystelit netkanou textilií, aby substrát nepropadával. Dřevěné konstrukce jsou těžší, proto je vhodné je opřít o zeď nebo pevně ukotvit.</p>
              <h3>Modulární systémy</h3>
              <p>Plastové nebo kovové moduly se skládají do sebe a vytvářejí věže nebo stěny s vlastním zásobníkem vody. Mnoho systémů má integrované samozavlažovací nádržky a propojené odtokové kanály, takže přebytečná voda stéká do nižších modulů. Jsou dražší, ale nabízejí největší flexibilitu a dlouhou životnost.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ konstrukce</th><th>Hmotnost</th><th>Cena</th><th>Vhodné pro</th></tr></thead>
                  <tbody>
                    <tr><td>Textilní kapsáče</td><td>Nízká</td><td>200–600 Kč</td><td>Bylinky, jahody, letničky</td></tr>
                    <tr><td>Palety a regály</td><td>Vysoká</td><td>0–1 500 Kč (DIY)</td><td>Zelenina, bylinky, sukulenty</td></tr>
                    <tr><td>Modulární systémy</td><td>Střední</td><td>1 000–5 000 Kč</td><td>Smíšené záhony, samozavlažování</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="rostliny">
              <h2>3. Výběr rostlin podle světla a orientace balkonu</h2>
              <p>Orientace balkonu zásadně ovlivňuje, jaké rostliny ve vertikální zahradě prospívají. Jižní a jihozápadní balkony jsou plné slunce a vysokých teplot, severní naopak nabízejí stín a stabilnější vlhkost.</p>
              <ul>
                <li><strong>Jižní a jihozápadní balkon (plné slunce)</strong> – rajčata cherry, paprika, bazalka, rozmarýn, levandule, petúnie</li>
                <li><strong>Východní a západní balkon (polostín)</strong> – pažitka, máta, jahody, listové saláty, begonie</li>
                <li><strong>Severní balkon (stín)</strong> – kapradiny, břečťan, netýkavky, violky, brukvovité saláty (rukola, špenát)</li>
              </ul>
              <p>Horní patra vertikální konstrukce jsou vystavena silnějšímu slunci a větru, proto sem patří rostliny snášející vyschnutí substrátu. Do spodních pater naopak umísti vlhkomilnější druhy, kam přirozeně stéká voda z horních kapes.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pro popínavé druhy (hrášek, fazole, popínavé okurky) zvol vyšší modulární systém s mřížkou – vertikální růst využiješ ještě efektivněji.</div>
            </section>

            <section id="substrat">
              <h2>4. Substrát a zavlažování</h2>
              <p>Vertikální pěstební nádoby mají malý objem substrátu, který v létě rychle vysychá, proto je kvalita substrátu i způsob zavlažování klíčový. Volte lehký, vododržný substrát s vyšším podílem perlitu nebo kokosového vlákna – udrží vlhkost déle než klasická zahradní zemina a zároveň zabrání zamokření kořenů.</p>
              <p>Ruční zalévání každé kapsy zvlášť je u větších vertikálních zahrad zdlouhavé a snadno se na některou rostlinu zapomene. Mnohem praktičtější je kapénková automatická závlaha s rozvodem do jednotlivých kapes nebo modulů – voda se dávkuje přesně a rovnoměrně podle nastaveného časového plánu. Pro odhad potřebné spotřeby a nastavení intervalů ti pomůže naše <Link href="/kalkulacky/kolik-zavlahy" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačka zavlažování</Link>.</p>
              <p>U modulárních systémů se samozavlažovací nádržkou stačí nádrž doplňovat jednou za několik dní, systém si vodu rozvádí sám díky kapilárnímu efektu. U textilních kapsáčů je vhodné na dno každé kapsy vložit vrstvu hydrogelu nebo keramzitu, který zadrží vlhkost navíc.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Než pořídíš automatickou závlahu pro celý balkon, vyzkoušej si pomocí <Link href="/kalkulacky/kolik-zavlahy" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačky zavlažování</Link>, kolik vody tvá vertikální zahrada v létě skutečně potřebuje – ušetříš na velikosti nádrže i čerpadla.</div>
            </section>

            <section id="udrzba">
              <h2>5. Údržba přes sezónu</h2>
              <h3>Jaro</h3>
              <p>Před výsadbou kontroluj konstrukci – zkorodované háčky, uvolněné šrouby nebo poškozenou textilii vyměň. Substrát z předchozí sezóny obnov nebo doplň o kompost a hnojivo s pomalým uvolňováním.</p>
              <h3>Léto</h3>
              <p>Hlavní starostí je zálivka – v horkých dnech může být potřeba zalévat i dvakrát denně. Pravidelně odstraňuj odkvetlé květy a sklízej bylinky a zeleninu, podpoříš tím další růst. U hustě osazených stěn hlídej cirkulaci vzduchu, aby se nepřemnožily houbové choroby.</p>
              <h3>Podzim</h3>
              <p>Postupně odstraňuj letničky a zeleninu, jejichž sezóna skončila. Trvalky a bylinky odolné mrazu (rozmarýn, levandule, šalvěj) přesuň na chráněnější místo blíž ke zdi.</p>
              <h3>Zima</h3>
              <p>Textilní kapsáče vyprej, vysuš a uskladni v suchu. Dřevěné konstrukce ošetři olejovým nátěrem, kovové a plastové moduly kontroluj na praskliny způsobené mrazem v zbytkové vodě – nádržky před zimou vždy vyprázdni.</p>
            </section>

            <section id="inspirace">
              <h2>6. Inspirace a kombinace pro malý balkon</h2>
              <ul>
                <li><strong>Kuchyňská bylinková stěna</strong> – kombinace bazalky, petrželky, tymiánu a máty v kapsáčích u kuchyňského okna, vše na dosah ruky při vaření</li>
                <li><strong>Jedlá zelená stěna</strong> – jahody, listové saláty a rajčata cherry v modulárním systému, kombinace okrasy a sklizně</li>
                <li><strong>Květinová clona</strong> – popínavé petúnie, lobelky a surfinie ve visících kapsách vytvoří barevnou stěnu a zároveň stíní proti slunci</li>
                <li><strong>Stínová zelená koutek</strong> – kapradiny, břečťan a violky na severní stěně, kde nic jiného neroste</li>
                <li><strong>Smíšená paletová záhrada</strong> – horní patra paprika a rajčata, střední patra bylinky, spodní patra jahody a saláty využívající stékající vlhkost</li>
              </ul>
              <p>Při kombinování rostlin dbej na podobné nároky na vodu a světlo u rostlin sdílejících jednu konstrukci – ušetříš si starosti s nerovnoměrným zavlažováním a předčasným úhynem citlivějších druhů.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jak velký balkon potřebuji pro vertikální zahradu?", a: "Vertikální zahradu lze vybudovat i na velmi malém balkoně – stačí jedna stěna nebo zábradlí o šířce 1 metr. Většina systémů (kapsáče, palety, moduly) se montuje svisle, takže nezabírají podlahovou plochu." },
                  { q: "Jaké rostliny jsou nejvhodnější pro začátečníky?", a: "Pro začátek jsou ideální bylinky (bazalka, pažitka, máta), jahody, listové saláty a popínavé květiny jako petúnie nebo lobelka. Snášejí menší kolísání vlhkosti a rychle ukáží, jestli jim podmínky vyhovují." },
                  { q: "Jak často musím vertikální zahradu zalévat?", a: "V létě obvykle denně, protože svislé substrátové kapsy a malé nádoby vysychají rychleji než klasické záhony. Nejpohodlnější je kapénková automatická závlaha s časovačem, která zvládne i dvě zálivky denně." },
                  { q: "Unese zábradlí balkonu váhu vertikální zahrady?", a: "Záleží na konstrukci a typu zábradlí. Lehké textilní kapsáče s nevlhkým substrátem zvládne i běžné zábradlí, ale u dřevěných palet nebo modulárních systémů plných mokré zeminy je nutné ověřit nosnost a raději konstrukci kotvit do zdi nebo podlahy." },
                  { q: "Jak vertikální zahradu připravit na zimu?", a: "Letničky a bylinky na konci sezóny odstraňte a substrát vyměňte nebo proschněte. Dřevěné konstrukce ošetřete olejem proti vlhkosti, textilní kapsáče vyprejte a uložte do sucha. Trvalky a mrazuvzdorné druhy je vhodné přesunout blíž ke zdi domu, kde je chrání zbytkové teplo." },
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
                <li><a href="#vyhody">Výhody vertikální zahrady</a></li>
                <li><a href="#konstrukce">Typy konstrukcí</a></li>
                <li><a href="#rostliny">Výběr rostlin</a></li>
                <li><a href="#substrat">Substrát a zavlažování</a></li>
                <li><a href="#udrzba">Údržba přes sezónu</a></li>
                <li><a href="#inspirace">Inspirace pro malý balkon</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/zahrada" className="sidebar-cat-link">🌿 Zahrada & terasa<span>20 článků →</span></Link>
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
