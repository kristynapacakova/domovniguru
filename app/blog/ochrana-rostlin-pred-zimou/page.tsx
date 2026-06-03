import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Ochrana rostlin před zimou – co zakrýt",
  description: "Jak ochránit zahradní rostliny před zimou. Co zakrýt jutou nebo mulčem, co přestěhovat do skleníku a co přezimuje samo. Průvodce pro zahradu i balkon.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/ochrana-rostlin-pred-zimou" },
  openGraph: { title: "Ochrana rostlin před zimou 2026", description: "Co zakrýt, přestěhovat nebo nechat – jak ochránit rostliny před mrazem.", url: "https://www.domovniguru.cz/blog/ochrana-rostlin-pred-zimou", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-05-01T08:00:00Z", modifiedTime: "2026-05-01T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Ochrana%20rostlin%20p%C5%99ed%20zimou%20%E2%80%93%20co%20zakr%C3%BDt", width: 1200, height: 630, alt: "Ochrana rostlin před zimou – co zakrýt" }] },
  twitter: { card: "summary_large_image", title: "Ochrana rostlin před zimou 2026", description: "Co zakrýt, přestěhovat nebo nechat – průvodce přezimováním rostlin." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/ochrana-rostlin-pred-zimou#article",
    "headline": "Ochrana rostlin před zimou – co zakrýt",
    "datePublished": "2026-05-01T08:00:00Z",
    "dateModified": "2026-05-01T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["ochrana rostlin před zimou", "přezimování rostlin", "jak zakrýt rostliny před mrazem", "mulčování záhonů zima", "přezimování balkónových rostlin"]
  }]
};

const PLANT_GROUPS = [
  { group:"🌳 Odolné trvalky\na keře", examples:"Růže, hortenzie,\nlady, okrasné trávy", action:"Ostřihnout na jaře\nVolitelně mulč\nkolem kořenů", color:"#5a9e6f" },
  { group:"🌹 Citlivé trvalky\na keře", examples:"Levandule, fíkovník,\nbambusové odr.", action:"Zakrýt jutou nebo\nagrotextilií přes\nkmen a kořeny", color:"#f59e0b" },
  { group:"🌺 Balkónové\na cibuloviny", examples:"Pelargónie, begónie,\ndálie, gladioly", action:"Přestěhovat dovnitř\ndo 5 °C a světla\nskleník / sklep", color:"#9b6fd4" },
  { group:"🌵 Subtropické\nnádobové", examples:"Oleander, palma,\nagáve, citrusy", action:"Přestěhovat do chladu\n5–10 °C, min. světlo\nzimoviště", color:"#e07040" },
  { group:"🌿 Jednoletky", examples:"Petúnie, muškáty,\nzinnie, slunečnice", action:"Nechat odumřít\nnebo vytáhnout\nnové semena sbírat", color:"#4a90d9" },
];

const RELATED = [
  { title: "Jak přezimovat zahradní rostliny", href: "/blog/prezimovat-zahradni-rostliny", read: "5 min" },
  { title: "Jak připravit zahradu na jaro", href: "/blog/jarni-zahrada", read: "7 min" },
  { title: "Jak ošetřit zahradní nábytek", href: "/blog/osetrit-zahradni-nabytek", read: "5 min" },
  { title: "Příprava domu na zimu", href: "/blog/priprava-domu-na-zimu", read: "10 min" },
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
              <span>Ochrana rostlin před zimou</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Ochrana rostlin před zimou – co zakrýt, přestěhovat a nechat</h1>
              <p className="article-lead">Ne každá rostlina potřebuje zimní ochranu — ale ta správná ve správný čas zachrání i rostliny za tisíce korun. Tady je přehledný návod co s čím udělat.</p>
              <div className="article-meta-row"><span>Aktualizováno: 1. května 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/ochrana-rostlin-pred-zimou" title="Ochrana rostlin před zimou – co zakrýt" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 185" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="185" fill="#f0f8ec"/>
                <text x="380" y="22" textAnchor="middle" fontSize="10" fill="#3a7e4f" fontWeight="700" letterSpacing="0.04em">CO UDĚLAT S ROSTLINAMI PŘED ZIMOU</text>
                {PLANT_GROUPS.map(({group, examples, action, color}, i) => (
                  <g key={i} transform={`translate(${20+i*148}, 28)`}>
                    <rect x="0" y="0" width="138" height="150" rx="8" fill="#fff" stroke={color} strokeWidth="1.2"/>
                    <rect x="0" y="0" width="138" height="5" rx="4" fill={color} opacity="0.5"/>
                    {group.split('\n').map((g,j) => <text key={j} x="69" y={20+j*13} textAnchor="middle" fontSize="9" fill={color} fontWeight="700">{g}</text>)}
                    <line x1="8" y1="46" x2="130" y2="46" stroke={color} strokeWidth="0.5" opacity="0.4"/>
                    {examples.split('\n').map((e,j) => <text key={j} x="69" y={60+j*13} textAnchor="middle" fontSize="8" fill="#4a4a40">{e}</text>)}
                    <rect x="6" y="92" width="126" height="52" rx="5" fill={color} opacity="0.08"/>
                    <text x="69" y="106" textAnchor="middle" fontSize="7.5" fill={color} fontWeight="700">Co udělat:</text>
                    {action.split('\n').map((a,j) => <text key={j} x="69" y={118+j*12} textAnchor="middle" fontSize="8" fill={color}>{a}</text>)}
                  </g>
                ))}
                <rect y="168" width="760" height="17" fill="#d8f0d0" opacity="0.5"/>
                <text x="380" y="180" textAnchor="middle" fontSize="8" fill="#3a7e4f" fontWeight="600" letterSpacing="0.06em">🍂 ŘÍJEN = IDEÁLNÍ ČAS NA PŘEZIMOVÁNÍ · PŘED PRVNÍM SILNÝM MRAZEM · MULČOVAT KOŘENY</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#kdy">Kdy začít s přípravou na zimu</a></li>
                <li><a href="#zakryt">Co zakrýt a jak</a></li>
                <li><a href="#prestehovat">Co přestěhovat dovnitř</a></li>
                <li><a href="#mulc">Mulčování záhonů</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="kdy">
              <h2>Kdy začít s přípravou na zimu</h2>
              <ul>
                <li><strong>Říjen – hlavní sezóna přezimování:</strong> Většinu příprav prováděj v říjnu. Teploty jsou stále kladné, půda nesmrzlá a rostliny mají čas se aklimatizovat.</li>
                <li><strong>Před prvním silným mrazem (pod −5 °C):</strong> Citlivé rostliny musí být chráněny nebo přestěhovány dříve. První mrazy v ČR: typicky říjen až listopad.</li>
                <li><strong>Signál od rostlin:</strong> Listy začínají odpadat, stonky žloutnou — rostlina vstupuje do dormance a je čas na ochranu.</li>
                <li><strong>Pozor na pozdní přesun:</strong> Balkónové rostliny přestěhuj do zimoviště dříve než přijde mráz — poškozené mrazem se z přesunu nevzpamatují.</li>
              </ul>
            </section>

            <section id="zakryt">
              <h2>Co zakrýt a jak</h2>
              <ul>
                <li><strong>Juta a agrotextilie:</strong> Prodyšné materiály vhodné pro ochranu keřů (hortenzie, levandule, středomořské rostliny). Ovinut kolem rostliny nebo přes rám. Nepou žívej neprodyšné materiály (fólie) — způsobí hnilobu.</li>
                <li><strong>Chvojí:</strong> Chvojoví větve z jehličnanů chrání nižší trvalky před mrazem i sluncem. Přikryj záhon vrstvou 10–15 cm. Přirozené a biologicky se rozkládající.</li>
                <li><strong>Rohože a pytloviny:</strong> Pro kmeny citlivých stromů (fíkovník, magnólie) — ovinut kolem kmene a hlavních větví.</li>
                <li><strong>Co zakrývat:</strong> Hortenzie (pupeny jsou citlivé), levandule (prořezat a zakrýt), fíkovník (kmen a větve), mladé stromky (první 2–3 roky), růže (hromada hlíny kolem paty + větve svázat).</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Zakrývej v suchý den. Mokré rostliny zakryté jutou = ideální podmínky pro plíseň. Nechej trochu vzduch — úplné utěsnění škodí.</div>
            </section>

            <section id="prestehovat">
              <h2>Co přestěhovat dovnitř</h2>
              <ul>
                <li><strong>Pelargónie (muškáty):</strong> Přestřihnout na 1/3, přestěhovat do světlé místnosti (5–10 °C). Na jaře zpět ven po "ledových mužích" (polovina května).</li>
                <li><strong>Oleander, palma, citrusy:</strong> Zimoviště — chladná místnost 5–10 °C s přirozeným světlem. Méně zalévat, nohnojit. Pozor na mšice v zimovišti.</li>
                <li><strong>Dálie a begónie:</strong> Vytáhnout hlízy ze země před mrazem, nechat oschnout, uložit v suchém a mrazuvzdorném prostoru (sklep, garáž). Znovu zasadit na jaře.</li>
                <li><strong>Bylinkové zahrádky:</strong> Bazalka — jednoroční, nechej odumřít nebo přestěhuj dovnitř jako pokojovou rostlinu. Rozmarýn, tymián — otužilé, přežijí venku s lehkým zakrytím.</li>
              </ul>
            </section>

            <section id="mulc">
              <h2>Mulčování záhonů – jednoduchá ochrana</h2>
              <ul>
                <li><strong>Co je mulč:</strong> Vrstva organického materiálu (kůra, listí, kompost, sláma) pokrývající půdu kolem rostlin. Chrání kořeny před mrazem, zadrží vlhkost a potlačuje plevel.</li>
                <li><strong>Tloušťka mulče:</strong> Min. 5–10 cm pro zimní ochranu. Kolem citlivějších rostlin 15–20 cm.</li>
                <li><strong>Co použít:</strong> Kůra stromu (nejdostupnější, 150–300 Kč/pytel), listí ze zahrady (zdarma, zkompostuje se), sláma (lehká, levná), kompost (výživa + ochrana).</li>
                <li><strong>Kdy mulčovat:</strong> Po prvních mrazech, ale před silnými mrazy. Mulčování příliš brzy zabrání půdě vychladnout a může způsobit hnilobu.</li>
                <li><strong>Na jaře:</strong> Část mulče pohrábej stranou aby se půda ohřála — hrábě ho zpět jako hnojivo do záhonu.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Přežijí hortenzie českou zimu bez ochrany?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Záleží na druhu. Hortenzie velkolistá (Hydrangea macrophylla) — citlivá, pupeny mohou odmrznout i při mírné zimě. Zakrýt jutou nebo agrotextilií přes zimu. Hortenzie stromková (H. arborescens) a lat' natá (H. paniculata) — otužilé, přezimují bez ochrany. Klíč je chránit pupeny, ne celou rostlinu.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Musím záhony na zimu přikrýt nebo je to zbytečné?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Přikrytí mulčem záhonů s trvalkami je vždy přínosné — chrání kořeny před střídáním teplot (zamrznutí a rozmrznutí poškozuje kořeny více než konstantní mráz). U dobře zavedených odolných trvalek (kopretina, bergenie, rozchodník) přikrytí není nutné. U citlivějších (hosta, echinacea, třapatka) doporučujeme vrstvu chvojí nebo listí.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Kdy vyndat přezimující rostliny ven na jaře?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Po "ledových mužích" (12.–15. května) kdy přestane hrozit pozdní mráz. Pro otužilé druhy (oleander, levandule) lze začít koncem dubna při stabilním počasí. Rostliny přesunuté ze zimoviště aklimatizuj postupně — nejdřív do polostínu a chráněného místa, pak na plné slunce. Náhlý přesun ze tmy na přímé slunce způsobí spálení listů.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/ochrana-rostlin-pred-zimou" title="Ochrana rostlin před zimou – co zakrýt" />

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
                <li><a href="#kdy">Kdy začít</a></li>
                <li><a href="#zakryt">Co zakrýt a jak</a></li>
                <li><a href="#prestehovat">Co přestěhovat</a></li>
                <li><a href="#mulc">Mulčování záhonů</a></li>
                <li><a href="#faq">FAQ</a></li>
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
        .article-layout{display:grid;grid-template-columns:1fr 280px;gap:56px;padding:48px 0 80px;align-items:start}
        .article-header{margin-bottom:32px}.article-meta-top{display:flex;align-items:center;gap:12px;margin-bottom:16px}
        .article-cat-pill{display:inline-flex;align-items:center;height:24px;padding:0 12px;border-radius:999px;border:1px solid var(--border);background:var(--surface);font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);text-decoration:none;transition:background 120ms}
        .article-cat-pill:hover{background:#e8e7e2;color:var(--text)}.article-read-time{font-size:12px;color:var(--muted);font-weight:500}
        .article-h1{font-family:var(--font-serif);font-size:clamp(26px,3.5vw,40px);line-height:1.1;font-weight:400;letter-spacing:-.01em;margin-bottom:16px}
        .article-lead{font-size:18px;line-height:1.65;color:var(--muted);font-weight:300;margin-bottom:14px}
        .article-meta-row{display:flex;gap:8px;font-size:12px;color:var(--muted);font-weight:500}
        .hero-illustration{margin:28px 0 36px;border-radius:12px;overflow:hidden;border:1px solid var(--border)}.hero-svg{width:100%;height:auto;display:block}
        .toc{background:var(--surface);border-radius:10px;padding:20px 24px;margin-bottom:40px}.toc-label{font-size:11px;font-weight:700;letter-spacing:.10em;text-transform:uppercase;color:var(--muted);margin-bottom:12px}
        .toc-list{padding-left:18px;display:flex;flex-direction:column;gap:6px}.toc-list li a{font-size:14px;color:var(--muted);text-decoration:none;font-weight:400;transition:color 120ms}.toc-list li a:hover{color:var(--text)}
        .article-body section{margin-bottom:48px}.article-body h2{font-family:var(--font-serif);font-size:clamp(20px,2.5vw,26px);font-weight:400;line-height:1.2;margin-bottom:16px;border-top:1px solid var(--border);padding-top:24px;margin-top:8px}
        .article-body p{font-size:16px;line-height:1.75;color:#2a2a28;font-weight:300;margin-bottom:14px}.article-body ul{padding-left:22px;margin-bottom:16px;display:flex;flex-direction:column;gap:8px}
        .article-body li{font-size:15px;line-height:1.6;color:#2a2a28;font-weight:300}.article-body strong{font-weight:600;color:var(--text)}
        .article-tip{background:#fff8e8;border-left:3px solid #f59e0b;border-radius:0 8px 8px 0;padding:14px 18px;font-size:14px;line-height:1.6;color:#78716c;margin:20px 0}
        .faq-list{display:flex;flex-direction:column;gap:8px;margin-top:16px}.faq-item{border:1px solid var(--border);border-radius:10px;overflow:hidden}
        .faq-summary{display:flex;justify-content:space-between;align-items:center;padding:14px 18px;cursor:pointer;font-size:15px;font-weight:500;color:var(--text);background:var(--surface);list-style:none;gap:12px}
        .faq-summary:hover{background:#e8e7e2}.faq-icon{flex-shrink:0;color:var(--muted);transition:transform 200ms;font-size:14px}
        details[open] .faq-icon{transform:rotate(180deg)}.faq-body{padding:14px 18px;font-size:14px;line-height:1.7;color:#4a4a48;font-weight:300;border-top:1px solid var(--border);background:#fff}
        .related-section{margin-top:56px}.related-section h2{font-family:var(--font-serif);font-size:22px;font-weight:400;margin-bottom:20px;padding-top:24px;border-top:1px solid var(--border)}
        .related-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}.article-sidebar{position:sticky;top:80px;display:flex;flex-direction:column;gap:16px}
        .sidebar-widget{background:#fff;border:1px solid var(--border);border-radius:12px;padding:20px}.sidebar-widget-title{font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-bottom:14px}
        .sidebar-toc{list-style:none;display:flex;flex-direction:column;gap:8px}.sidebar-toc li a{font-size:13px;color:var(--muted);text-decoration:none;font-weight:400;transition:color 120ms;line-height:1.4;display:block}.sidebar-toc li a:hover{color:var(--text)}
        .sidebar-cat-link{display:flex;justify-content:space-between;align-items:center;font-size:14px;font-weight:500;color:var(--text);text-decoration:none;padding:8px 0;border-bottom:1px solid var(--border);transition:color 120ms}.sidebar-cat-link:hover{color:var(--muted)}.sidebar-cat-link span{font-size:12px;color:var(--muted)}
        @media(max-width:960px){.article-layout{grid-template-columns:1fr;gap:0}.article-sidebar{position:static;margin-top:40px}.related-grid{grid-template-columns:1fr}}
      `}</style>
    </>
  );
}
