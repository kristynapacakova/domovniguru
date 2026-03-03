import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak sekat trávník správně – výška, frekvence, sezóna 2025",
  description: "Správná výška sekání, jak často sekat, co dělat s posekanou trávou. Vše co potřebuješ vědět o sečení trávníku.",
  alternates: { canonical: "https://domovniguru.cz/blog/jak-sekat-travnik" },
  openGraph: { title: "Jak sekat trávník správně", description: "Výška sekání, frekvence, sezóna – kompletní průvodce.", url: "https://domovniguru.cz/blog/jak-sekat-travnik", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2025-02-10T08:00:00Z", modifiedTime: "2025-03-01T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak sekat trávník správně", description: "Výška, frekvence, tipy pro zdravý trávník." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", "@id": "https://domovniguru.cz/blog/jak-sekat-travnik#article", "headline": "Jak sekat trávník správně", "datePublished": "2025-02-10T08:00:00Z", "dateModified": "2025-03-01T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "inLanguage": "cs" },
    { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Zahrada & terasa", "item": "https://domovniguru.cz/blog/kategorie/zahrada" }, { "@type": "ListItem", "position": 4, "name": "Jak sekat trávník", "item": "https://domovniguru.cz/blog/jak-sekat-travnik" }] },
    { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Na jakou výšku sekat trávník?", "acceptedAnswer": { "@type": "Answer", "text": "Ideální výška je 4–6 cm pro běžný okrasný trávník. V létě při suchu nechej 6–8 cm – vyšší tráva lépe snáší vedro. Nikdy nesekej víc než třetinu délky stébla najednou." } }, { "@type": "Question", "name": "Jak často sekat trávník?", "acceptedAnswer": { "@type": "Answer", "text": "Na jaře a na podzim každých 7–10 dní. V létě při suchu stačí jednou za 2–3 týdny nebo nesekej vůbec. V létě trávník pomaleji roste a stres ze sekání by ho poškodil." } }] },
  ],
};

const RELATED = [
  { title: "Jak připravit zahradu na jaro", href: "/blog/jarni-zahrada", read: "6 min" },
  { title: "Jak se zbavit plevele bez chemie", href: "/blog/zbavit-se-plevele-bez-chemie", read: "4 min" },
  { title: "Jak kompostovat doma a na zahradě", href: "/blog/jak-kompostovat", read: "4 min" },
  { title: "Jak postavit vyvýšený záhon", href: "/blog/vyvseny-zahon-postup", read: "6 min" },
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
              <span>Jak sekat trávník</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 4 min čtení</span>
              </div>
              <h1 className="article-h1">Jak sekat trávník správně – výška, frekvence, sezóna</h1>
              <p className="article-lead">
                Trávník se sekáním buď posílí, nebo zničí – záleží na výšce a načasování. Většina lidí seká příliš nízko a příliš často v létě. Tenhle článek ti ukáže, jak na to správně.
              </p>
              <div className="article-meta-row">
                <span>Aktualizováno: 1. března 2025</span><span>·</span><span>DomovniGuru</span>
              </div>
            </header>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#vyska">Správná výška sekání</a></li>
                <li><a href="#frekvence">Jak často sekat</a></li>
                <li><a href="#sezona">Sekání podle sezóny</a></li>
                <li><a href="#posekana-trava">Co dělat s posekanou trávou</a></li>
                <li><a href="#chyby">Nejčastější chyby</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="vyska">
              <h2>Správná výška sekání</h2>
              <p>Výška sekání je nejdůležitější parametr. Pravidlo jedné třetiny: <strong>nikdy nesekej více než třetinu délky stébla najednou.</strong></p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ trávníku</th><th>Doporučená výška</th><th>Minimum</th></tr></thead>
                  <tbody>
                    <tr><td>Okrasný trávník</td><td>3–4 cm</td><td>2,5 cm</td></tr>
                    <tr><td>Rekreační / rodinný</td><td>4–6 cm</td><td>3 cm</td></tr>
                    <tr><td>Stinné místo</td><td>6–8 cm</td><td>5 cm</td></tr>
                    <tr><td>Léto / sucho</td><td>6–8 cm</td><td>5 cm</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip">
                <strong>💡 Proč ne příliš nízko?</strong> Příliš krátké stéblo nemá dost listové plochy pro fotosyntézu. Trávník slábne, žloutne, a otevírá prostor pro mech a plevel.
              </div>
            </section>

            <section id="frekvence">
              <h2>Jak často sekat trávník</h2>
              <p>Frekvence sekání závisí na ročním období a tempu růstu – ne na kalendáři.</p>
              <ul>
                <li><strong>Jaro (březen–květen):</strong> každých 7–10 dní, tráva roste nejrychleji</li>
                <li><strong>Léto (červen–srpen):</strong> každých 10–14 dní, při suchu klidně přeruš sekání úplně</li>
                <li><strong>Podzim (září–říjen):</strong> každých 10–14 dní, zpomalující růst</li>
                <li><strong>Zima:</strong> nesekej vůbec, tráva neroste</li>
              </ul>
              <div className="article-tip">
                <strong>💡 Tip:</strong> Raději sečeš trochu dříve a odstraníš méně, než čekáš příliš dlouho a musíš sekat o třetinu. Stres z radikálního zkrácení trávník oslabí.
              </div>
            </section>

            <section id="sezona">
              <h2>Sekání podle sezóny</h2>

              <h3>První sekání na jaře</h3>
              <p>
                Nesekej při prvním teplém dni v březnu – počkej až tráva dosáhne 8–10 cm. První sekání nastav sekačku na vyšší polohu (6–7 cm). Mokrá jarní tráva se snadno trhá místo řezu.
              </p>

              <h3>Letní sucho</h3>
              <p>
                Při teplotách nad 30 °C a bez deště přestaň sekat úplně. Suchý trávník je ve stresu – sekání by ho dále poškodilo. Nech ho mírně zežloutnout – po dešti se sám vzpamatuje.
              </p>

              <h3>Poslední sekání na podzim</h3>
              <p>
                Poslední sečení proveď v říjnu nebo začátkem listopadu, když teploty klesnou pod 10 °C a tráva přestane aktivně růst. Nastav sekačku na 4–5 cm – příliš dlouhá tráva pod sněhem plesnivěje, příliš krátká trpí mrazem.
              </p>
            </section>

            <section id="posekana-trava">
              <h2>Co dělat s posekanou trávou</h2>

              <h3>Mulčovací sekačka – nejlepší řešení</h3>
              <p>
                Mulčovací sekačka nasekané stébla nadrobno a vrátí je zpátky do trávníku. Rozkládají se a přirozeně hnojí – ušetříš za hnojivo a odvoz trávy. Doporučuji, pokud sekaješ pravidelně a ne příliš velké množství najednou.
              </p>

              <h3>Kompost</h3>
              <p>
                Posekaná tráva je výborná surovina do kompostu – bohatá na dusík. Přidávej ji ve vrstvách a prokládej suchým materiálem (listí, karton), aby kompost nezapáchal a nevyhnil.
              </p>

              <h3>Mulč do záhonu</h3>
              <p>
                Čerstvě posekanou trávu nechej nejdřív den uschnout a pak ji použij jako mulč v záhonech. Vrstva 5–8 cm potlačí plevel a udrží vlhkost.
              </p>
            </section>

            <section id="chyby">
              <h2>Nejčastější chyby při sekání</h2>
              <ul>
                <li><strong>Sekání mokré trávy</strong> – stébla se trhají místo čistého řezu, trávník vypadá roztřepený a lépe napadá chorobami</li>
                <li><strong>Tupý nůž sekačky</strong> – tupý nůž trhá stébla, otevírá je houbovým onemocněním. Nabrousit nebo vyměnit jednou za sezónu.</li>
                <li><strong>Sekání v největším horku</strong> – sečeš ráno nebo večer, ne v poledne. Stres z vedra + sekání = žlutý trávník.</li>
                <li><strong>Pokaždé stejný směr</strong> – střídej směr sekání každé sečení. Tráva roste rovněji, sekačka nevytváří koleje.</li>
                <li><strong>Přeskočení podzimního hnojení</strong> – podzimní hnojivo s draslíkem připraví trávník na zimu. Bez něj je náchylnější k mrazu a plísním.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Na jakou výšku sekat trávník?", a: "Ideální výška je 4–6 cm pro běžný okrasný trávník. V létě při suchu nechej 6–8 cm. Nikdy nesekej víc než třetinu délky stébla najednou." },
                  { q: "Jak často sekat trávník?", a: "Na jaře a na podzim každých 7–10 dní. V létě při suchu stačí jednou za 2–3 týdny nebo nesekej vůbec – trávník je ve stresu z tepla." },
                  { q: "Kdy začít sekat na jaře?", a: "Počkej až tráva dosáhne 8–10 cm a půda není promrzlá ani přemočená. Obvykle konec března až duben podle počasí." },
                  { q: "Je mulčování lepší než sběr trávy?", a: "Pro zdravý trávník ano – nadrobno nasekané stébla se rychle rozkládají a hnojí. Funguje jen při pravidelném sekání, kdy odstraňuješ malé množství najednou." },
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
                <li><a href="#vyska">Výška sekání</a></li>
                <li><a href="#frekvence">Jak často sekat</a></li>
                <li><a href="#sezona">Sekání dle sezóny</a></li>
                <li><a href="#posekana-trava">Posečená tráva</a></li>
                <li><a href="#chyby">Nejčastější chyby</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget sidebar-cta">
              <div style={{ fontSize: 32, marginBottom: 10 }}>🌿</div>
              <div className="sidebar-cta-title">Příprava zahrady na jaro</div>
              <p className="sidebar-cta-desc">Co udělat v březnu a dubnu pro zdravou zahradu celou sezónu.</p>
              <Link href="/blog/jarni-zahrada" className="btn btn-black" style={{ width: "100%", justifyContent: "center", marginTop: 14 }}>Číst článek →</Link>
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
        .sidebar-cta { background: var(--surface); border-color: transparent; }
        .sidebar-cta-title { font-family: var(--font-serif); font-size: 17px; font-weight: 400; margin-bottom: 6px; }
        .sidebar-cta-desc { font-size: 13px; color: var(--muted); font-weight: 300; line-height: 1.5; }
        .sidebar-cat-link { display: flex; justify-content: space-between; align-items: center; font-size: 14px; font-weight: 500; color: var(--text); text-decoration: none; padding: 8px 0; border-bottom: 1px solid var(--border); transition: color 120ms; }
        .sidebar-cat-link:hover { color: var(--muted); }
        .sidebar-cat-link span { font-size: 12px; color: var(--muted); }
        @media (max-width: 960px) { .article-layout { grid-template-columns: 1fr; gap: 0; } .article-sidebar { position: static; margin-top: 40px; } .related-grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}
