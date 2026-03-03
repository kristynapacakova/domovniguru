import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak zařídit terasu na balkóně – podlaha, nábytek, rostliny 2025",
  description: "Balkon jako venkovní obývák: výběr podlahy, nábytek do malého prostoru, rostliny do nádob. Praktický průvodce pro každý balkon.",
  alternates: { canonical: "https://domovniguru.cz/blog/terasa-na-balkone" },
  openGraph: { title: "Jak zařídit terasu na balkóně", description: "Podlaha, nábytek, rostliny – balkon jako druhý obývák.", url: "https://domovniguru.cz/blog/terasa-na-balkone", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2025-02-12T08:00:00Z", modifiedTime: "2025-03-01T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Terasa na balkóně", description: "Jak zařídit balkon jako venkovní obývák." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", "@id": "https://domovniguru.cz/blog/terasa-na-balkone#article", "headline": "Jak zařídit terasu na balkóně", "datePublished": "2025-02-12T08:00:00Z", "dateModified": "2025-03-01T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "inLanguage": "cs" },
    { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Zahrada & terasa", "item": "https://domovniguru.cz/blog/kategorie/zahrada" }, { "@type": "ListItem", "position": 4, "name": "Terasa na balkóně", "item": "https://domovniguru.cz/blog/terasa-na-balkone" }] },
  ],
};

const RELATED = [
  { title: "Jak ošetřit dřevěnou terasu před zimou", href: "/blog/drevo-terasa-zima", read: "4 min" },
  { title: "Jak se zbavit plevele bez chemie", href: "/blog/zbavit-se-plevele-bez-chemie", read: "4 min" },
  { title: "Jak připravit zahradu na jaro", href: "/blog/jarni-zahrada", read: "6 min" },
  { title: "Jak kompostovat doma a na zahradě", href: "/blog/jak-kompostovat", read: "4 min" },
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
              <span>Terasa na balkóně</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak zařídit terasu na balkóně – podlaha, nábytek, rostliny</h1>
              <p className="article-lead">
                I malý balkon 4–6 m² může být plnohodnotný venkovní obývák. Stačí správně zvolit podlahu, nábytek a rostliny. Ukážeme ti, jak na to bez zbytečných výdajů.
              </p>
              <div className="article-meta-row">
                <span>Aktualizováno: 1. března 2025</span><span>·</span><span>DomovniGuru</span>
              </div>
            </header>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#podlaha">Podlaha na balkón</a></li>
                <li><a href="#nabytek">Nábytek pro malý balkon</a></li>
                <li><a href="#stineni">Stínění a soukromí</a></li>
                <li><a href="#rostliny">Rostliny do nádob</a></li>
                <li><a href="#osvetleni">Osvětlení balkónu</a></li>
                <li><a href="#tipy">Tipy pro malé balkony</a></li>
              </ol>
            </nav>

            <section id="podlaha">
              <h2>Podlaha na balkón</h2>
              <p>Správná podlaha promění holý betonový balkón k nepoznání. Máš tři hlavní možnosti:</p>

              <h3>Dřevěné dlaždice (deck tiles)</h3>
              <p>
                Nejpopulárnější varianta – plastové nebo dřevěné dlaždice 30×30 nebo 50×50 cm, které se skládají jako puzzle. Žádné lepení, žádné vrtání. Jednoduše rozložíš a odvezeš při stěhování.
                Cena: 300–800 Kč/m² podle materiálu.
              </p>
              <p>
                <strong>Dřevo (akácie, teak, bangkirai):</strong> přirozený vzhled, vydrží 10–20 let, potřebuje každoroční ošetření olejem.<br />
                <strong>Kompozit (WPC):</strong> dřevo + plast, nevyžaduje údržbu, nehnijí, trochu plastový vzhled.
              </p>

              <h3>Venkovní koberec</h3>
              <p>
                Rychlé a levné řešení (200–500 Kč/m²). Speciální venkovní koberce z polyproylenu nebo juty odolají vodě i UV záření. Ideální pro rychlou proměnu nebo pronajatý byt kde nechceš investovat.
              </p>

              <h3>Keramická dlažba</h3>
              <p>
                Trvalé řešení, ale vyžaduje pokládku do lepidla a souhlas majitele nebo SVJ. Mrazuvzdorná dlažba vydrží desítky let a vypadá skvěle.
              </p>

              <div className="article-tip">
                <strong>💡 Tip:</strong> Před pokládkou zkontroluj nosnost balkónu – dlaždice a zemina v nádobách mohou být překvapivě těžké. Pravidlem je max. 150–300 kg/m² u panelových domů. Zeptej se správce nebo statika.
              </div>
            </section>

            <section id="nabytek">
              <h2>Nábytek pro malý balkon</h2>
              <p>Malý balkon vyžaduje chytré plánování – méně je více.</p>

              <h3>Skládací nebo stohovatelný nábytek</h3>
              <p>
                Základ pro balkony do 6 m². Skládací židle a stůl zabere v uložení minimum místa. Skvělé značky: IKEA (TÄRNÖ, SALTHOLMEN), Tchibo nebo Lidl sezonní kolekce.
              </p>

              <h3>Lavice s úložným prostorem</h3>
              <p>
                Lavice s víkem je multifunkční – sezení + úložný box na polštáře, zahradní nářadí nebo gril. Šetří místo a uklidní balkón.
              </p>

              <h3>Závěsné křeslo</h3>
              <p>
                Závěsné křeslo (houpačka) upevněná do stropu nebo na vlastní stojan je výborná na malý balkón – nezabírá podlahovou plochu a vytváří útulný kout.
              </p>

              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Velikost balkónu</th><th>Doporučené řešení</th></tr></thead>
                  <tbody>
                    <tr><td>Do 3 m²</td><td>1× skládací stůl + 2× skládací židle nebo závěsné křeslo</td></tr>
                    <tr><td>3–6 m²</td><td>Bistro set (stolek + 2 židle) + 1× lehátko nebo lavice</td></tr>
                    <tr><td>6–10 m²</td><td>Jídelní set pro 4 osoby + lehátko + stojánek na rostliny</td></tr>
                    <tr><td>10+ m²</td><td>Kompletní venkovní obývák – sedačka, stolek, lehátka</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="stineni">
              <h2>Stínění a soukromí</h2>

              <h3>Sluneční plachta (shade sail)</h3>
              <p>Trojúhelníkové nebo čtvercové plachty napnuté nad balkónem. Levné (500–2000 Kč), efektivní, snadno se sundavají na zimu.</p>

              <h3>Markýza</h3>
              <p>Pevné nebo rolovací řešení – vyžaduje montáž do zdi nebo zábradlí. Nejkomfortnější varianta, ale dražší (3 000–20 000 Kč) a je potřeba souhlas SVJ/majitele.</p>

              <h3>Balkónová zástěna</h3>
              <p>
                Ratanová, bambusová nebo látková zástěna připevněná k zábradlí – přidá soukromí a stínění z boku. Cena 300–1 500 Kč, montáž bez vrtání.
              </p>

              <h3>Vysoké rostliny v nádobách</h3>
              <p>Bambus, okrasné trávy nebo popínavé rostliny (břečťan, loubinec) na mřížce vytvoří živou zelený stěnu – soukromí + dekorace v jednom.</p>
            </section>

            <section id="rostliny">
              <h2>Rostliny do nádob na balkón</h2>

              <h3>Letničky na slunný balkón</h3>
              <ul>
                <li><strong>Pelargónie</strong> – klasika, kvetou celé léto, nenáročné</li>
                <li><strong>Surfinie</strong> – převislé, skvělé do závěsných košů</li>
                <li><strong>Muškáty a begónie</strong> – barevné, tolerují horko</li>
              </ul>

              <h3>Rostliny pro stinný balkón</h3>
              <ul>
                <li><strong>Fuchsie</strong> – miluje polostín, krásně převislá</li>
                <li><strong>Impatiens (netýkavka)</strong> – bohaté kvetení i bez přímého slunce</li>
                <li><strong>Hosta</strong> – dekorativní listí, odolná</li>
              </ul>

              <h3>Zelenina a bylinky</h3>
              <p>
                Na slunném balkónu zvládneš vypěstovat: rajčata (cherry odrůdy), papriky, saláty, ředkvičky, jahody. Bylinky (bazalka, pažitka, petržel, tymián) fungují skoro kdekoliv.
              </p>

              <div className="article-tip">
                <strong>💡 Tip:</strong> Nádoby na balkóně vysychají 2–3× rychleji než záhon v zahradě. V horkých dnech zalévej každý den, ideálně ráno. Investuj do samozavlažovacích nádob – ušetří hodně starostí.
              </div>
            </section>

            <section id="osvetleni">
              <h2>Osvětlení balkónu</h2>
              <p>Správné osvětlení prodlouží využití balkónu do večerních hodin a vytvoří atmosféru.</p>
              <ul>
                <li><strong>Světelný řetěz (fairy lights)</strong> – nejjednodušší, napájení z prodlužováku nebo solární. Zavěs podél zábradlí nebo přes balkón.</li>
                <li><strong>Solární svítidla</strong> – žádné kabely, automatické rozsvícení za soumraku. Zapíchni do květináčů nebo přichyť k zábradlí.</li>
                <li><strong>Svíčky a svícny</strong> – útulná atmosféra, ale pamatuj na bezpečnost – větrné místo + hořlavý nábytek = riziko.</li>
                <li><strong>Venkovní stojací lampa</strong> – pro větší balkóny, potřebuješ zásuvku nebo prodlužovák.</li>
              </ul>
            </section>

            <section id="tipy">
              <h2>Tipy pro malé balkony</h2>
              <ul>
                <li><strong>Vertikální zahrada</strong> – místo širokých nádob na zemi pověs kapsy nebo police na zeď a zábradlí. Trojnásobíš plochu pro rostliny.</li>
                <li><strong>Zrcadlo na zeď</strong> – opticky balkón zdvojnásobí. Musí být venkovní (voděodolné).</li>
                <li><strong>Jednolitá barva podlahy a nábytku</strong> – méně vzorů = větší vizuální prostor.</li>
                <li><strong>Multifunkční kusy</strong> – stolek jako úložný box, lavice jako místo na sezení i odkládání.</li>
                <li><strong>Méně nádob, větší</strong> – jedna velká nádoba vypadá lépe než pět malých a drží vlhkost déle.</li>
              </ul>
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
                <li><a href="#podlaha">Podlaha</a></li>
                <li><a href="#nabytek">Nábytek</a></li>
                <li><a href="#stineni">Stínění</a></li>
                <li><a href="#rostliny">Rostliny</a></li>
                <li><a href="#osvetleni">Osvětlení</a></li>
                <li><a href="#tipy">Tipy pro malé balkony</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget sidebar-cta">
              <div style={{ fontSize: 32, marginBottom: 10 }}>🪵</div>
              <div className="sidebar-cta-title">Péče o dřevěnou terasu</div>
              <p className="sidebar-cta-desc">Jak ošetřit dřevo před zimou, aby vydrželo roky.</p>
              <Link href="/blog/drevo-terasa-zima" className="btn btn-black" style={{ width: "100%", justifyContent: "center", marginTop: 14 }}>Číst článek →</Link>
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
