import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Proč blikají světla v bytě a jak to vyřešit",
  description: "Nejčastější příčiny blikání žárovek a LED svítidel – od stmívače po uvolněný vodič – a jak problém odstranit.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/blikani-svetel-pricina-a-reseni" },
  openGraph: { title: "Proč blikají světla v bytě a jak to vyřešit", description: "Nejčastější příčiny blikání žárovek a LED svítidel – od stmívače po uvolněný vodič – a jak problém odstranit.", url: "https://www.domovniguru.cz/blog/blikani-svetel-pricina-a-reseni", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-24T08:00:00Z", modifiedTime: "2026-06-24T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Pro%C4%8D%20blikaj%C3%AD%20sv%C4%9Btla%20v%20byt%C4%9B%20a%20jak%20to%20vy%C5%99e%C5%A1it&cat=blog", width: 1200, height: 630, alt: "Proč blikají světla v bytě a jak to vyřešit" }] },
  twitter: { card: "summary_large_image", title: "Proč blikají světla v bytě a jak to vyřešit", description: "Nejčastější příčiny blikání žárovek a LED svítidel – od stmívače po uvolněný vodič – a jak problém odstranit." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/blikani-svetel-pricina-a-reseni#article", "headline": "Proč blikají světla v bytě a jak to vyřešit", "datePublished": "2026-06-24T08:00:00Z", "dateModified": "2026-06-24T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["blikání světel", "blikající LED žárovka", "stmívač problémy", "blikání žárovky příčina", "uvolněný vodič", "kdy zavolat elektrikáře"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Elektrika & osvětlení", "item": "https://www.domovniguru.cz/blog/kategorie/elektrika" }, { "@type": "ListItem", "position": 4, "name": "Proč blikají světla v bytě a jak to vyřešit", "item": "https://www.domovniguru.cz/blog/blikani-svetel-pricina-a-reseni" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Proč mi blikají LED žárovky se stmívačem?", "acceptedAnswer": { "@type": "Answer", "text": "Nejčastější příčinou je nekompatibilita mezi starším stmívačem (určeným pro klasické nebo halogenové žárovky) a LED zdrojem, který má jiné elektrické nároky. Řešením je výměna za stmívač s označením vhodným pro LED zátěž, případně LED žárovky přímo certifikované pro stmívání." } }, { "@type": "Question", "name": "Může blikání světla signalizovat nebezpečí?", "acceptedAnswer": { "@type": "Answer", "text": "Ano. Pokud blikání doprovází jiskření, praskání, zápach spáleniny nebo zahřívání vypínače či zásuvky, jde o bezpečnostní riziko způsobené uvolněným nebo poškozeným kontaktem. V takovém případě je nutné okamžitě vypnout příslušný okruh a zavolat elektrikáře." } }, { "@type": "Question", "name": "Jak poznám, jestli je problém v žárovce, nebo v elektroinstalaci?", "acceptedAnswer": { "@type": "Answer", "text": "Nejjednodušší test je vyměnit žárovku za jinou, ověřeně funkční, případně ji zkusit v jiném svítidle. Pokud blikání přetrvá i s novou žárovkou na jiném místě, problém je nejspíš ve vypínači, vodiči nebo v napájecí síti, ne v žárovce samotné." } }, { "@type": "Question", "name": "Co je kolísání napětí v síti a jak ho poznám?", "acceptedAnswer": { "@type": "Answer", "text": "Kolísání napětí se projevuje krátkým zeslábnutím nebo zesílením svitu více světel současně, obvykle při zapnutí výkonného spotřebiče (pračka, sporák, klimatizace). Pokud problém postihuje více svítidel najednou a souvisí se zapnutím spotřebiče, jde nejspíš o kolísání napětí nebo přetížený okruh, ne o vadnou žárovku." } }, { "@type": "Question", "name": "Kdy je čas zavolat elektrikáře pro blikající světlo?", "acceptedAnswer": { "@type": "Answer", "text": "Elektrikáře je nutné zavolat okamžitě při jiskření, zápachu spáleniny nebo zahřívání vypínače či zásuvky. Bez akutních příznaků je vhodné zavolat elektrikáře i tehdy, když blikání přetrvává po výměně žárovky a vypínače a postihuje více svítidel na stejném okruhu." } }] }] };

const RELATED = [
  { title: "Jak vybrat LED žárovku – parametry a úspory", href: "/blog/jak-vybrat-led-zarovku", read: "8 min" },
  { title: "Jak nainstalovat stmívač světla – zapojení krok za krokem 2026", href: "/blog/instalovat-stmivac", read: "6 min" },
  { title: "Proč vypadává jistič? Přetížení nebo zkrat", href: "/blog/proc-vypadava-jistic", read: "4 min" },
  { title: "Jak otestovat zásuvku – fázová tužka a multimetr", href: "/blog/otestovat-zasuvku", read: "4 min" },
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
              <span>Blikání světel</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">⚡ Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Proč blikají světla v bytě a jak to vyřešit</h1>
              <p className="article-lead">Blikající žárovka může být drobná kosmetická vada, ale stejně dobře může signalizovat skutečné riziko v elektroinstalaci. Než blikání odbydeš jako nepříjemnou náhodu, stojí za to projít si nejčastější příčiny – od nekompatibilního stmívače přes uvolněný vodič až po přetížený okruh – a poznat, kdy stačí výměna žárovky a kdy je čas zavolat elektrikáře.</p>
              <div className="article-meta-row"><span>Aktualizováno: 24. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#stmivac">Nekompatibilní stmívač s LED žárovkou</a></li>
                <li><a href="#vodic">Uvolněný nebo vadný vodič a kontakt</a></li>
                <li><a href="#vypinac">Problém ve vypínači</a></li>
                <li><a href="#pretizeny-okruh">Přetížený okruh</a></li>
                <li><a href="#kolisani-napeti">Kolísání napětí v síti</a></li>
                <li><a href="#driver">Vadný driver LED žárovky</a></li>
                <li><a href="#kosmeticke-vs-bezpecnostni">Kosmetická vada, nebo bezpečnostní riziko</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="stmivac">
              <h2>Nekompatibilní stmívač s LED žárovkou</h2>
              <p>Nejčastější příčina blikání v moderních domácnostech. Starší stmívače byly navržené pro klasické wolframové nebo halogenové žárovky s odporovou zátěží. LED žárovky mají úplně jiné elektrické chování (nízký a nelineární odběr proudu), a pokud stmívač nedokáže udržet stabilní řízený proud při nízkém zatížení, výsledkem je blikání, cukání nebo bzučení.</p>
              <ul>
                <li><strong>Řešení 1 – výměna stmívače</strong> – stmívač s označením „vhodný pro LED" nebo univerzální stmívač s nízkým minimálním zatížením (často od 3–5 W)</li>
                <li><strong>Řešení 2 – jiné LED žárovky</strong> – některé LED žárovky jsou přímo certifikované jako stmívatelné (dimmable), zatímco jiné stmívání vůbec nepodporují</li>
                <li><strong>Příliš nízké zatížení</strong> – pokud máš na jednom stmívači jen jednu slabou LED žárovku (např. 5 W), může to být pod minimální hranicí stmívače – řešením je přidat zátěž nebo použít stmívač určený přímo pro nízké výkony</li>
              </ul>
              <p>Podrobný návod na správné zapojení a výběr stmívače najdeš v článku, jak <Link href="/blog/instalovat-stmivac" style={{ color: "#2a6496", textDecoration: "underline" }}>nainstalovat stmívač světla</Link>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Než kupuješ nový stmívač, zkontroluj na obalu LED žárovky, zda je oznacena jako „dimmable" – stmívání nepodporujících žárovek bliká i s nejlepším stmívačem na trhu.</div>
            </section>

            <section id="vodic">
              <h2>Uvolněný nebo vadný vodič a kontakt</h2>
              <p>Pokud blikání nesouvisí se stmívačem, dalším velmi častým viníkem je špatný mechanický kontakt – ve svorkovnici svítidla, v krabici pod omítkou nebo přímo v patici žárovky. Uvolněný spoj vytváří přerušovaný kontakt, který se projevuje právě blikáním, často v závislosti na vibracích (zavření dveří, chůze po podlaze).</p>
              <ul>
                <li><strong>Patice žárovky</strong> – zkontroluj, že je žárovka pevně zašroubovaná; u starších objímek se kontakt někdy ohne nebo zkorodu­je</li>
                <li><strong>Svorkovnice svítidla</strong> – po letech provozu se šroubky svorek mohou uvolnit teplotními cykly</li>
                <li><strong>Spojovací krabice ve zdi</strong> – tady už jde o zásah, který by měl provést elektrikář, protože je nutné rozebrat krabici a zkontrolovat spoje</li>
              </ul>
              <div className="article-tip"><strong>⚠️ Upozornění:</strong> Uvolněný kontakt může způsobit lokální přehřátí a v krajním případě požár. Pokud při blikání cítíš zápach spáleniny nebo vidíš zčernalá místa u svorek, okruh okamžitě vypni a zavolej elektrikáře.</div>
            </section>

            <section id="vypinac">
              <h2>Problém ve vypínači</h2>
              <p>Starší nebo opotřebovaný vypínač může mít opálené nebo zkorodované kontakty, které nedrží stabilní spojení. Projevuje se to blikáním právě při určité poloze páčky vypínače, nebo i bez dotyku, pokud je kontakt na hraně.</p>
              <p>Pokud blikání zmizí, když vypínačem trochu „dorazíš" do krajní polohy, je velmi pravděpodobné, že je problém přímo v něm. Výměna běžného vypínače je relativně jednoduchý zákrok, pokud máš základní zkušenost s elektroinstalací a víš, jak bezpečně vypnout okruh – jinak je lepší přenechat výměnu elektrikáři.</p>
            </section>

            <section id="pretizeny-okruh">
              <h2>Přetížený okruh</h2>
              <p>Pokud bliká více světel na stejném okruhu najednou, zejména při zapnutí výkonného spotřebiče (sušička, mikrovlnka, fén), je pravděpodobnou příčinou přetížený okruh. Velký proudový odběr způsobí krátký pokles napětí, který se na světlech projeví viditelným zakolísáním.</p>
              <p>Opakované přetížení může v krajním případě vést k vypadávání jističe – pokud se to děje i u tebe, podívej se na článek, <Link href="/blog/proc-vypadava-jistic" style={{ color: "#2a6496", textDecoration: "underline" }}>proč vypadává jistič</Link>, kde najdeš podrobnější rozbor přetížení a zkratu.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud víš, že na jednom okruhu běží více výkonných spotřebičů najednou, zkus je rozdělit na různé časy používání – ušetříš jističe i nervy.</div>
            </section>

            <section id="kolisani-napeti">
              <h2>Kolísání napětí v síti</h2>
              <p>Někdy příčina není v domácí instalaci, ale v samotné distribuční síti – krátké výkyvy napětí způsobené například startem velkého motoru u sousedů, kolísáním zátěže v síti nebo špatným spojem na hlavním přívodu do domu. Tento typ blikání obvykle postihuje všechna světla v bytě nebo domě najednou a nesouvisí s konkrétním vypínačem nebo žárovkou.</p>
              <p>Pokud máš podezření na kolísání napětí z distribuční sítě, je vhodné to nahlásit distributorovi elektřiny – mohou prověřit kvalitu napětí v dané lokalitě.</p>
            </section>

            <section id="driver">
              <h2>Vadný driver LED žárovky</h2>
              <p>Každá LED žárovka obsahuje malý elektronický driver, který upravuje vstupní napětí ze sítě na hodnotu vhodnou pro LED čip. Pokud je driver vadný nebo levné výroby, žárovka může blikat nezávisle na stmívači, vypínači i kvalitě sítě – jde čistě o vnitřní poruchu žárovky.</p>
              <p>Test je jednoduchý: vyměň žárovku za jinou ověřeně funkční. Pokud blikání zmizí, byla vadná žárovka. Levné LED žárovky bez kvalitního driveru bývají náchylnější k blikání i kratší životnosti – vyplatí se investovat do kvalitnější značky. Více parametrů na co se zaměřit při výběru najdeš v článku, jak <Link href="/blog/jak-vybrat-led-zarovku" style={{ color: "#2a6496", textDecoration: "underline" }}>vybrat LED žárovku</Link>.</p>
            </section>

            <section id="kosmeticke-vs-bezpecnostni">
              <h2>Kdy je blikání jen kosmetická vada a kdy bezpečnostní riziko</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Příznak</th><th>Pravděpodobná závažnost</th></tr></thead>
                  <tbody>
                    <tr><td>Mírné, pravidelné blikání jen u stmívače</td><td>Kosmetická vada – nekompatibilita stmívače a LED</td></tr>
                    <tr><td>Blikání jen jedné žárovky, mizí po výměně</td><td>Kosmetická vada – vadný driver žárovky</td></tr>
                    <tr><td>Blikání při dotyku vypínače nebo svítidla</td><td>Možný uvolněný kontakt – vyžaduje kontrolu</td></tr>
                    <tr><td>Zápach spáleniny, jiskření, teplý vypínač/zásuvka</td><td>Bezpečnostní riziko – okamžitě vypnout a zavolat elektrikáře</td></tr>
                    <tr><td>Blikání více světel současně se zapnutím spotřebiče</td><td>Možné přetížení okruhu – kontrola jištění</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>⚠️ Bezpečnost:</strong> Jiskření, praskání nebo zápach spáleniny u vypínače, zásuvky nebo svítidla nejsou nikdy „jen kosmetická vada". Okruh okamžitě vypni v rozvaděči a kontaktuj elektrikáře – jde o jasný signál rizika požáru.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Proč mi blikají LED žárovky se stmívačem?", a: "Nejčastější příčinou je nekompatibilita mezi starším stmívačem (určeným pro klasické nebo halogenové žárovky) a LED zdrojem, který má jiné elektrické nároky. Řešením je výměna za stmívač s označením vhodným pro LED zátěž, případně LED žárovky přímo certifikované pro stmívání." },
                  { q: "Může blikání světla signalizovat nebezpečí?", a: "Ano. Pokud blikání doprovází jiskření, praskání, zápach spáleniny nebo zahřívání vypínače či zásuvky, jde o bezpečnostní riziko způsobené uvolněným nebo poškozeným kontaktem. V takovém případě je nutné okamžitě vypnout příslušný okruh a zavolat elektrikáře." },
                  { q: "Jak poznám, jestli je problém v žárovce, nebo v elektroinstalaci?", a: "Nejjednodušší test je vyměnit žárovku za jinou, ověřeně funkční, případně ji zkusit v jiném svítidle. Pokud blikání přetrvá i s novou žárovkou na jiném místě, problém je nejspíš ve vypínači, vodiči nebo v napájecí síti, ne v žárovce samotné." },
                  { q: "Co je kolísání napětí v síti a jak ho poznám?", a: "Kolísání napětí se projevuje krátkým zeslábnutím nebo zesílením svitu více světel současně, obvykle při zapnutí výkonného spotřebiče (pračka, sporák, klimatizace). Pokud problém postihuje více svítidel najednou a souvisí se zapnutím spotřebiče, jde nejspíš o kolísání napětí nebo přetížený okruh, ne o vadnou žárovku." },
                  { q: "Kdy je čas zavolat elektrikáře pro blikající světlo?", a: "Elektrikáře je nutné zavolat okamžitě při jiskření, zápachu spáleniny nebo zahřívání vypínače či zásuvky. Bez akutních příznaků je vhodné zavolat elektrikáře i tehdy, když blikání přetrvává po výměně žárovky a vypínače a postihuje více svítidel na stejném okruhu." },
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
                <li><a href="#stmivac">Nekompatibilní stmívač</a></li>
                <li><a href="#vodic">Uvolněný vodič</a></li>
                <li><a href="#vypinac">Problém ve vypínači</a></li>
                <li><a href="#pretizeny-okruh">Přetížený okruh</a></li>
                <li><a href="#kolisani-napeti">Kolísání napětí</a></li>
                <li><a href="#driver">Vadný driver žárovky</a></li>
                <li><a href="#kosmeticke-vs-bezpecnostni">Kdy je to riziko</a></li>
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
