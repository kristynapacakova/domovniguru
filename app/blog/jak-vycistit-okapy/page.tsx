import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak vyčistit okapy – postup, kdy čistit a jak předejít ucpání 2026",
  description: "Ucpané okapy způsobují zatékání do zdí a škody tisíce korun. Jak vyčistit okapy bezpečně sám, kdy to dělat a jak ucpání předejít jednou provždy.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-vycistit-okapy" },
  openGraph: { title: "Jak vyčistit okapy – postup a prevence 2026", description: "Ucpané okapy – jak je vyčistit bezpečně sám a jak ucpání předejít.", url: "https://www.domovniguru.cz/blog/jak-vycistit-okapy", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-22T08:00:00Z", modifiedTime: "2026-04-22T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak vyčistit okapy 2026", description: "Ucpané okapy – bezpečný postup čištění a jak jim předejít." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/jak-vycistit-okapy#article",
    "headline": "Jak vyčistit okapy – postup, kdy čistit a jak předejít ucpání 2026",
    "datePublished": "2026-04-22T08:00:00Z",
    "dateModified": "2026-04-22T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak vyčistit okapy", "čištění okapů", "ucpané okapy", "čistění okapního svodu", "ochrana okapů před listím", "okapy postup čištění"]
  }]
};

const RELATED = [
  { title: "Příprava domu na zimu – kompletní checklist", href: "/blog/priprava-domu-na-zimu", read: "10 min" },
  { title: "Jak se zbavit plísně na zdi", href: "/blog/jak-odstranit-plisen-na-zdi", read: "12 min" },
  { title: "Jak se zbavit vlhkosti v bytě", href: "/blog/zbavit-se-vlhkosti-v-byte", read: "7 min" },
  { title: "Jak zkontrolovat kotel před zimou", href: "/blog/zkontrolovat-kotel-pred-zimou", read: "6 min" },
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
              <Link href="/blog/kategorie/sezonni-udrzba">Sezónní údržba</Link><span className="breadcrumb-sep">/</span>
              <span>Čištění okapů</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">🍂 Sezónní údržba</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak vyčistit okapy – postup, kdy čistit a jak předejít ucpání</h1>
              <p className="article-lead">Ucpané okapy jsou tichý nepřítel domu — voda přetéká přes okraj, zatéká do zdí a způsobuje škody tisíce korun. Čištění okapů trvá hodinu a ušetří roky problémů.</p>
              <div className="article-meta-row"><span>Aktualizováno: 22. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/jak-vycistit-okapy" title="Jak vyčistit okapy – postup, kdy čistit a jak předejít ucpání 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 185" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="185" fill="#f0f4f8"/>

                {/* Problémy způsobené ucpanými okapy */}
                <text x="380" y="22" textAnchor="middle" fontSize="10" fill="#4a6080" fontWeight="700" letterSpacing="0.04em">CO ZPŮSOBUJÍ UCPANÉ OKAPY</text>

                {[
                  { x:20, icon:"💧", problem:"Zatékání do zdí", desc:"Voda přetéká přes okraj\nokapu a nasákne do fasády", cost:"10 000–50 000 Kč", color:"#4a90d9" },
                  { x:205, icon:"🧊", problem:"Ledové rampouchy", desc:"Zamrzlá voda v okapu\npraská plech a kolena", cost:"2 000–15 000 Kč", color:"#9b6fd4" },
                  { x:390, icon:"🌱", problem:"Plíseň a vlhkost", desc:"Trvalá vlhkost zdi vede\nk plísni v interiéru", cost:"5 000–30 000 Kč", color:"#5a9e6f" },
                  { x:575, icon:"🏠", problem:"Poškození základů", desc:"Voda u základů způsobuje\npodmáčení a trhliny", cost:"30 000–200 000 Kč", color:"#e07040" },
                ].map(({x, icon, problem, desc, cost, color}) => (
                  <g key={x} transform={`translate(${x}, 32)`}>
                    <rect x="0" y="0" width="168" height="138" rx="8" fill="#fff" stroke={color} strokeWidth="1.2"/>
                    <text x="84" y="32" textAnchor="middle" fontSize="22">{icon}</text>
                    <text x="84" y="52" textAnchor="middle" fontSize="9.5" fill={color} fontWeight="700">{problem}</text>
                    <line x1="10" y1="58" x2="158" y2="58" stroke={color} strokeWidth="0.5" opacity="0.4"/>
                    {desc.split('\n').map((line, i) => (
                      <text key={i} x="84" y={72+i*13} textAnchor="middle" fontSize="8" fill="#4a4a40">{line}</text>
                    ))}
                    <rect x="8" y="108" width="152" height="24" rx="4" fill={color} opacity="0.1"/>
                    <text x="84" y="118" textAnchor="middle" fontSize="7.5" fill={color} fontWeight="600">Škoda: {cost}</text>
                  </g>
                ))}

                <rect y="168" width="760" height="17" fill="#e0eaf4" opacity="0.5"/>
                <text x="380" y="180" textAnchor="middle" fontSize="8" fill="#3a6a8a" fontWeight="600" letterSpacing="0.06em">🍂 ČISTIT 2× ROČNĚ: NA JAŘE A NA PODZIM PO OPADU LISTÍ · PREVENCE = OCHRANNÁ MŘÍŽKA</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#kdy">Kdy čistit okapy</a></li>
                <li><a href="#jak">Jak čistit okapy – postup</a></li>
                <li><a href="#svody">Čištění okapních svodů</a></li>
                <li><a href="#kontrola">Co při čištění zkontrolovat</a></li>
                <li><a href="#prevence">Prevence ucpání</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="kdy">
              <h2>Kdy čistit okapy</h2>
              <ul>
                <li><strong>Na jaře (duben):</strong> Po zimě jsou okapy plné jehličí, větví, pisku a případného ledu. Jarní čištění připraví okapy na jarní deště.</li>
                <li><strong>Na podzim (říjen–listopad):</strong> Po opadu listí — nejdůležitější čištění roku. Listí v okapu přes zimu zahnívá, zadržuje vlhkost a ucpává svody.</li>
                <li><strong>Po bouřce nebo vichřici:</strong> Silný vítr nanosí větve a listí. Zkontroluj okapy po každé větší bouřce.</li>
                <li><strong>Signály ucpání:</strong> Voda přetéká přes okraj okapu při dešti, ze svodu neteče voda, nebo ze svodu teče voda i hodinu po dešti (voda se drží v ucpání).</li>
              </ul>
            </section>

            <section id="jak">
              <h2>Jak čistit okapy – postup</h2>
              <ul>
                <li><strong>Bezpečnost první:</strong> Použij stabilní žebřík s protiskluzovými patkami. Nikdy se neopírej o okap — není konstruován nést váhu člověka. Ideálně mít asistenta který drží žebřík.</li>
                <li><strong>Krok 1 — Odstranění hrubých nečistot:</strong> Rukou nebo zahradní lopatkou vyhrab listí, jehličí a nečistoty. Začni u svodu a postupuj směrem od svodu. Nečistoty dávej do vědra nebo na plachtu níže.</li>
                <li><strong>Krok 2 — Proplachnutí hadicí:</strong> Hadicí s proudem vody proplach okap od nejvzdálenějšího bodu směrem ke svodu. Silný proud vody vypláchne zbylé nečistoty a ověří průtočnost.</li>
                <li><strong>Krok 3 — Kontrola průtoku:</strong> Voda musí volně odtékat svodem. Pokud ne — svod je ucpaný (viz další sekce).</li>
                <li><strong>Krok 4 — Kontrola spádu:</strong> Okap musí mít spád min. 3–5 mm na metr délky směrem ke svodu. Stojatá voda v okapu = špatný spád nebo prohnutý okap.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pro jednopodlažní domy stačí žebřík. Pro domy s více patry nebo strmou střechou najmi profesionála — bezpečnost je důležitější než úspora pár stovek.</div>
            </section>

            <section id="svody">
              <h2>Čištění okapních svodů</h2>
              <p>Ucpaný svod je zákeřnější než ucpaný okap — ucpání je skryté a voda hledá cestu ven přes spoje nebo zatéká ke grundu.</p>
              <ul>
                <li><strong>Test průtoku:</strong> Nalijdruhů vědro vody do okapu u vstupu do svodu. Voda musí vytéci dole do 10 sekund. Pokud ne — svod je ucpaný.</li>
                <li><strong>Proplach hadicí:</strong> Vlož hadici do svodu shora a zapni silný proud vody. Tlak vody uvolní většinu ucpání.</li>
                <li><strong>Spirála na odpady:</strong> Pružná spirála (prodává se v hobbymarketech, 200–500 Kč) dosáhne hluboko do svodu a mechanicky uvolní tvrdé ucpání.</li>
                <li><strong>Tlakový čistič:</strong> Speciální nástavec na tlakový čistič pro čištění svodů — velmi účinné pro tvrdé usazeniny. Tlak max. 100 bar aby nepoškodil spoje.</li>
              </ul>
            </section>

            <section id="kontrola">
              <h2>Co při čištění zkontrolovat</h2>
              <ul>
                <li><strong>Spoje a těsnění:</strong> Zkontroluj zda spoje okapu netečou. Uvolněné spoje utěsni silikonem nebo speciálním okapním tmelem.</li>
                <li><strong>Háky a závěsy:</strong> Uvolněné nebo zrezivělé háky způsobují prohnutí okapu a stojatou vodu. Vyměň poškozené háky (2–5 Kč/ks).</li>
                <li><strong>Koroze a praskliny:</strong> Plech okapy mají životnost 15–25 let. Drobné koroze oprav okapním tmelem. Velké poškození = výměna sekce.</li>
                <li><strong>Spád okapu:</strong> Přilož vodováhu — okap musí mít viditelný spád ke svodu. Rovný nebo obrácený okap zadržuje vodu.</li>
              </ul>
            </section>

            <section id="prevence">
              <h2>Prevence ucpání – jak čistit méně často</h2>
              <ul>
                <li><strong>Ochranná mřížka (gutter guard):</strong> Plastová nebo kovová mřížka přes okap — listy sjedou přes mřížku dolů, malé nečistoty projdou a odtečou. Cena 50–200 Kč/m. Výrazně snižuje frekvenci čištění.</li>
                <li><strong>Foam insert:</strong> Pěnová vložka do okapu — voda proteče, listí a větve ne. Snadná instalace bez nářadí. Časem se zanesou jemnými nečistotami ale drží déle než bez ochrany.</li>
                <li><strong>Prořezání stromů nad střechou:</strong> Stromy přímo nad střechou jsou největší zdroj nečistot. Prořezání větví sníží nánosy listí o 50–80 %.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Jak poznám že jsou okapy ucpané?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Nejčastější signály: voda přetéká přes okraj okapu při dešti (ne jen ze svodu), ze svodu neteče voda nebo teče slabě, okapy jsou viditelně plné listí, ze spodní části svodu vytéká voda i při suchém počasí (kondenzace nebo ucpání). Ideálně zkontroluj okapy při každém vydatném dešti.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Mohu čistit okapy sám nebo potřebuji odborníka?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Přízemní a jednopodlažní domy zvládneš sám se stabilním žebříkem. Domy se dvěma a více patry nebo se strmou střechou jsou nebezpečné pro laika — najmi odbornou firmu. Cena profesionálního čištění: 500–2 000 Kč podle délky okapů a výšky domu. Jednou za 2–3 roky je to rozumná investice.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Kdy vyměnit okapy místo čistit?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Výměna okapů je nutná pokud: okap je prasklý nebo silně zkorodovaný (netěsní ani po opravě), okap se prohýbá a nejde vrátit do původního spádu, spoje konstantně zatékají i po opravě, nebo okapy jsou starší 25–30 let. Cena výměny okapů na rodinném domě: 15 000–50 000 Kč.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/jak-vycistit-okapy" title="Jak vyčistit okapy – postup, kdy čistit a jak předejít ucpání 2026" />

            <section className="related-section">
              <h2>Související články</h2>
              <div className="related-grid">
                {RELATED.map((r) => (
                  <Link key={r.href} href={r.href} className="card">
                    <div className="card-eyebrow-row"><span>Sezónní údržba</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#kdy">Kdy čistit</a></li>
                <li><a href="#jak">Postup čištění</a></li>
                <li><a href="#svody">Čištění svodů</a></li>
                <li><a href="#kontrola">Co zkontrolovat</a></li>
                <li><a href="#prevence">Prevence ucpání</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/sezonni-udrzba" className="sidebar-cat-link">🍂 Sezónní údržba<span>20 článků →</span></Link>
            </div>
          </aside>
        </div>
      </div>
      <style>{`
        .article-layout{display:grid;grid-template-columns:1fr 280px;gap:56px;padding:48px 0 80px;align-items:start}
        .article-header{margin-bottom:32px}
        .article-meta-top{display:flex;align-items:center;gap:12px;margin-bottom:16px}
        .article-cat-pill{display:inline-flex;align-items:center;height:24px;padding:0 12px;border-radius:999px;border:1px solid var(--border);background:var(--surface);font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);text-decoration:none;transition:background 120ms}
        .article-cat-pill:hover{background:#e8e7e2;color:var(--text)}
        .article-read-time{font-size:12px;color:var(--muted);font-weight:500}
        .article-h1{font-family:var(--font-serif);font-size:clamp(26px,3.5vw,40px);line-height:1.1;font-weight:400;letter-spacing:-.01em;margin-bottom:16px}
        .article-lead{font-size:18px;line-height:1.65;color:var(--muted);font-weight:300;margin-bottom:14px}
        .article-meta-row{display:flex;gap:8px;font-size:12px;color:var(--muted);font-weight:500}
        .hero-illustration{margin:28px 0 36px;border-radius:12px;overflow:hidden;border:1px solid var(--border)}
        .hero-svg{width:100%;height:auto;display:block}
        .toc{background:var(--surface);border-radius:10px;padding:20px 24px;margin-bottom:40px}
        .toc-label{font-size:11px;font-weight:700;letter-spacing:.10em;text-transform:uppercase;color:var(--muted);margin-bottom:12px}
        .toc-list{padding-left:18px;display:flex;flex-direction:column;gap:6px}
        .toc-list li a{font-size:14px;color:var(--muted);text-decoration:none;font-weight:400;transition:color 120ms}
        .toc-list li a:hover{color:var(--text)}
        .article-body section{margin-bottom:48px}
        .article-body h2{font-family:var(--font-serif);font-size:clamp(20px,2.5vw,26px);font-weight:400;line-height:1.2;margin-bottom:16px;border-top:1px solid var(--border);padding-top:24px;margin-top:8px}
        .article-body p{font-size:16px;line-height:1.75;color:#2a2a28;font-weight:300;margin-bottom:14px}
        .article-body ul{padding-left:22px;margin-bottom:16px;display:flex;flex-direction:column;gap:8px}
        .article-body li{font-size:15px;line-height:1.6;color:#2a2a28;font-weight:300}
        .article-body strong{font-weight:600;color:var(--text)}
        .article-tip{background:#fff8e8;border-left:3px solid #f59e0b;border-radius:0 8px 8px 0;padding:14px 18px;font-size:14px;line-height:1.6;color:#78716c;margin:20px 0}
        .faq-list{display:flex;flex-direction:column;gap:8px;margin-top:16px}
        .faq-item{border:1px solid var(--border);border-radius:10px;overflow:hidden}
        .faq-summary{display:flex;justify-content:space-between;align-items:center;padding:14px 18px;cursor:pointer;font-size:15px;font-weight:500;color:var(--text);background:var(--surface);list-style:none;gap:12px}
        .faq-summary:hover{background:#e8e7e2}
        .faq-icon{flex-shrink:0;color:var(--muted);transition:transform 200ms;font-size:14px}
        details[open] .faq-icon{transform:rotate(180deg)}
        .faq-body{padding:14px 18px;font-size:14px;line-height:1.7;color:#4a4a48;font-weight:300;border-top:1px solid var(--border);background:#fff}
        .related-section{margin-top:56px}
        .related-section h2{font-family:var(--font-serif);font-size:22px;font-weight:400;margin-bottom:20px;padding-top:24px;border-top:1px solid var(--border)}
        .related-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
        .article-sidebar{position:sticky;top:80px;display:flex;flex-direction:column;gap:16px}
        .sidebar-widget{background:#fff;border:1px solid var(--border);border-radius:12px;padding:20px}
        .sidebar-widget-title{font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-bottom:14px}
        .sidebar-toc{list-style:none;display:flex;flex-direction:column;gap:8px}
        .sidebar-toc li a{font-size:13px;color:var(--muted);text-decoration:none;font-weight:400;transition:color 120ms;line-height:1.4;display:block}
        .sidebar-toc li a:hover{color:var(--text)}
        .sidebar-cat-link{display:flex;justify-content:space-between;align-items:center;font-size:14px;font-weight:500;color:var(--text);text-decoration:none;padding:8px 0;border-bottom:1px solid var(--border);transition:color 120ms}
        .sidebar-cat-link:hover{color:var(--muted)}
        .sidebar-cat-link span{font-size:12px;color:var(--muted)}
        @media(max-width:960px){.article-layout{grid-template-columns:1fr;gap:0}.article-sidebar{position:static;margin-top:40px}.related-grid{grid-template-columns:1fr}}
      `}</style>
    </>
  );
}
