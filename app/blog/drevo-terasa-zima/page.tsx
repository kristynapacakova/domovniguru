import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak ošetřit dřevěnou terasu před zimou – krok za krokem 2025",
  description: "Dřevěná terasa bez ošetření nevydrží ani pár zim. Postup čištění, opravy a nátěru olejem nebo lazurou. Hotovo za půl dne.",
  alternates: { canonical: "https://domovniguru.cz/blog/drevo-terasa-zima" },
  openGraph: { title: "Jak ošetřit dřevěnou terasu před zimou", description: "Čištění, oprava a nátěr dřevěné terasy před zimou. Hotovo za půl dne.", url: "https://domovniguru.cz/blog/drevo-terasa-zima", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2025-09-10T08:00:00Z", modifiedTime: "2025-03-01T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak ošetřit dřevěnou terasu před zimou", description: "Čištění, oprava a nátěr. Hotovo za půl dne." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://domovniguru.cz/blog/drevo-terasa-zima#article", "headline": "Jak ošetřit dřevěnou terasu před zimou", "datePublished": "2025-09-10T08:00:00Z", "dateModified": "2025-03-01T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "inLanguage": "cs", "keywords": ["ošetřit dřevěnou terasu", "terasa před zimou", "terasový olej", "lazura na terasu", "dřevo exteriér ochrana"] }] };

const RELATED = [
  { title: "Jak připravit zahradu na jaro – kompletní checklist", href: "/blog/jarni-zahrada", read: "6 min" },
  { title: "Jak připravit dům na zimu – kompletní checklist", href: "/blog/jak-pripravit-dum-na-zimu", read: "5 min" },
  { title: "Jak utěsnit okna na zimu", href: "/blog/jak-utesnit-okna-na-zimu", read: "4 min" },
  { title: "Stěhování bez stresu – kompletní checklist", href: "/blog/stehovani-checklist", read: "5 min" },
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
              <span>Jak ošetřit dřevěnou terasu před zimou</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 4 min čtení</span>
              </div>
              <h1 className="article-h1">Jak ošetřit dřevěnou terasu před zimou – krok za krokem</h1>
              <p className="article-lead">Dřevo bez ochrany absorbuje vodu, mrzne, praská a šedne. Terasa, která nevydrží ani pět zim, přitom stačí jednou ročně ošetřit olejem nebo lazurou. Tenhle článek ti ukáže jak.</p>
              <div className="article-meta-row"><span>Aktualizováno: 1. března 2025</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#proc">Proč terasu ošetřovat</a></li>
                <li><a href="#kdy">Kdy ošetřit – načasování</a></li>
                <li><a href="#cisteni">Čištění terasy</a></li>
                <li><a href="#oprava">Oprava poškozených míst</a></li>
                <li><a href="#olej-lazura">Olej nebo lazura?</a></li>
                <li><a href="#postup-nater">Postup nanášení</a></li>
                <li><a href="#udrzba">Dlouhodobá údržba</a></li>
              </ol>
            </nav>

            <section id="proc">
              <h2>Proč terasu ošetřovat – co se stane bez ochrany</h2>
              <p>Dřevo v exteriéru je vystaveno dešti, UV záření, mrazu a biologickým škůdcům (plísně, řasy, hmyz). Bez ochrany dřevo:</p>
              <ul>
                <li><strong>Šedne</strong> – UV záření rozkládá lignin a dřevo ztrácí barvu do 2–3 měsíců</li>
                <li><strong>Praská</strong> – střídání vlhkosti a sucha způsobuje rozpínání a smršťování</li>
                <li><strong>Plísní</strong> – vlhké dřevo je ideální prostředí pro plísně a řasy</li>
                <li><strong>Hniloba</strong> – bez ochrany vydrží terasa z běžného dřeva 5–10 let místo 25–30 let</li>
              </ul>
              <p>Roční ošetření olejem trvá půl dne a prodlouží životnost terasy o desítky let. Investice 500–1 500 Kč ročně vs. výměna celé terasy za 50 000–150 000 Kč.</p>
            </section>

            <section id="kdy">
              <h2>Kdy ošetřit – ideální načasování</h2>
              <p>Dřevo ošetřuj na podzim (září–říjen) před zimou, nebo na jaře (duben–květen) po zimě. Podzim je lepší – chrání dřevo přes nejnáročnější období.</p>
              <p>Podmínky pro nanášení:</p>
              <ul>
                <li>Teplota 10–25 °C</li>
                <li>Dřevo musí být suché – alespoň 48 hodin bez deště</li>
                <li>Bez přímého slunce při nanášení (olej schne příliš rychle)</li>
                <li>Předpověď počasí: alespoň 24 hodin bez deště po nanášení</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud terasa zešedla, ještě to neznamená, že je poškozená. Šednutí je jen povrchové – po vyčištění a ošetření se barva obnoví.</div>
            </section>

            <section id="cisteni">
              <h2>Čištění terasy – základ úspěchu</h2>
              <p>Čištění je nejdůležitější krok. Olej nebo lazura na špatně vyčištěné dřevo netěsní, nepronikne hluboko a vydrží jen zlomek doby.</p>
              <h3>Co potřebuješ</h3>
              <ul>
                <li>Kartáč na dřevo nebo stroj na čištění teras</li>
                <li>Čistič na dřevo/terasy (nebo ředěná bělící soda)</li>
                <li>Tlaková myčka (volitelně, ale výrazně urychlí práci)</li>
                <li>Gumové rukavice</li>
              </ul>
              <h3>Postup čištění</h3>
              <ul>
                <li><strong>Krok 1:</strong> Smeť nečistoty, listí a prach</li>
                <li><strong>Krok 2:</strong> Nanes čistič na dřevo dle návodu a nechej působit 15–30 minut</li>
                <li><strong>Krok 3:</strong> Drhni kartáčem ve směru vlákna – nikdy napříč</li>
                <li><strong>Krok 4:</strong> Opláchni tlakovou vodou nebo hadicí</li>
                <li><strong>Krok 5:</strong> Nechej zcela vyschnout – minimálně 48 hodin, ideálně 72 hodin</li>
              </ul>
              <div className="article-tip"><strong>💡 Test suchosti:</strong> Kapka vody na dřevě se musí vstřebat do 30 sekund. Pokud leží na povrchu, dřevo ještě není dost suché.</div>
            </section>

            <section id="oprava">
              <h2>Oprava poškozených míst</h2>
              <p>Před ošetřením oprav praskliny, vypadlé suky a zdrsněné povrchy:</p>
              <ul>
                <li><strong>Praskliny:</strong> Vyplň tmelem na dřevo nebo epoxidovou pryskyřicí, nechej vyschnout a přebrousí</li>
                <li><strong>Zdrsněný povrch:</strong> Přebrousí brusným papírem (zrnitost 80–120) ve směru vlákna</li>
                <li><strong>Hnilobné místo:</strong> Odstraň poškozené dřevo, ošetři přípravkem na dřevo a vyplň</li>
                <li><strong>Vypadlý suk:</strong> Vyplň pryskyřicí nebo tmelem</li>
              </ul>
              <p>Po opravě znovu lehce přebrousí celý povrch jemným brusným papírem (zrnitost 150–180) a setři prach.</p>
            </section>

            <section id="olej-lazura">
              <h2>Olej nebo lazura – co vybrat</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Vlastnost</th><th>Terasový olej</th><th>Lazura</th></tr></thead>
                  <tbody>
                    <tr><td>Pronikání do dřeva</td><td>✅ Hluboko</td><td>Povrchový film</td></tr>
                    <tr><td>Vzhled</td><td>Přirozený, zvýrazní kresbu</td><td>Barevný nátěr</td></tr>
                    <tr><td>Obnova</td><td>Snadná – stačí přetřít</td><td>Náročnější – oloupání starší vrstvy</td></tr>
                    <tr><td>Životnost nátěru</td><td>1–2 roky</td><td>2–4 roky</td></tr>
                    <tr><td>Cena (1 l)</td><td>250–600 Kč</td><td>200–500 Kč</td></tr>
                    <tr><td>Vhodné pro</td><td>Teak, bangkirai, dub</td><td>Borovice, smrk, modřín</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Pro exotická dřeva (teak, bangkirai) se doporučuje terasový olej – lazura na nich špatně drží. Pro měkká dřeva (borovice, modřín) fungují dobře obě možnosti.</p>
            </section>

            <section id="postup-nater">
              <h2>Postup nanášení oleje nebo lazury</h2>
              <h3>Co potřebuješ</h3>
              <ul>
                <li>Terasový olej nebo lazura</li>
                <li>Štětec na dřevo nebo váleček (pro velké plochy)</li>
                <li>Hadříky nebo malířská páska pro zakrytí okolí</li>
                <li>Gumové rukavice</li>
              </ul>
              <h3>Postup</h3>
              <ul>
                <li><strong>Krok 1:</strong> Promíchej olej/lazuru důkladně, ale nešlehej vzduch</li>
                <li><strong>Krok 2:</strong> Zakryj okolí (zdi, skleněné zábradlí) malířskou páskou nebo fólií</li>
                <li><strong>Krok 3:</strong> Nanes první vrstvu štětcem ve směru vlákna – thin coat (tenká vrstva)</li>
                <li><strong>Krok 4:</strong> Do 15 minut setři přebytečný olej hadříkem – olej nesmí ležet na povrchu</li>
                <li><strong>Krok 5:</strong> Nechej schnout dle pokynů výrobce (obvykle 24 hodin)</li>
                <li><strong>Krok 6:</strong> Nanes druhou vrstvu stejným postupem</li>
              </ul>
              <div className="article-tip"><strong>⚠️ Důležité:</strong> Hadříky napuštěné olejem jsou samovznítitelné. Po práci je rozlož na plocho venku a nechej vyschnout – nikdy neskladuj zmačkané v nádobě.</div>
            </section>

            <section id="udrzba">
              <h2>Dlouhodobá údržba terasy</h2>
              <p>Ošetřenou terasu udržuj jednoduše: v průběhu sezony setírej nečistoty (listí, prach), okamžitě odstraňuj stojící vodu po dešti a jednou ročně na podzim zopakuj ošetření. Pokud terasa šedne nebo přestává odpuzovat vodu, je čas na další vrstvu.</p>
              <p>Terasa ošetřovaná každý rok vydrží 25–30 let. Terasa bez péče se mění na ohrožený materiál za 5–10 let.</p>
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
                <li><a href="#proc">Proč ošetřovat</a></li>
                <li><a href="#kdy">Kdy ošetřit</a></li>
                <li><a href="#cisteni">Čištění</a></li>
                <li><a href="#oprava">Oprava poškozených míst</a></li>
                <li><a href="#olej-lazura">Olej nebo lazura</a></li>
                <li><a href="#postup-nater">Postup nanášení</a></li>
                <li><a href="#udrzba">Dlouhodobá údržba</a></li>
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
