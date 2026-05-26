import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak stříhat ovocné stromy – kdy a jak správně řezat 2026",
  description: "Jak správně stříhat ovocné stromy – jabloň, hrušeň, švestku a třešeň. Kdy řezat, jaké nástroje použít a jak se vyhnout nejčastějším chybám při řezu.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-strihat-ovocne-stromy" },
  openGraph: { title: "Jak stříhat ovocné stromy 2026", description: "Kdy a jak řezat jabloně, hrušně a švestky – správný postup bez chyb.", url: "https://www.domovniguru.cz/blog/jak-strihat-ovocne-stromy", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-05-01T08:00:00Z", modifiedTime: "2026-05-01T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak stříhat ovocné stromy 2026", description: "Kdy a jak správně řezat ovocné stromy – průvodce pro zahrádkáře." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/jak-strihat-ovocne-stromy#article",
    "headline": "Jak stříhat ovocné stromy – kdy a jak správně řezat 2026",
    "datePublished": "2026-05-01T08:00:00Z",
    "dateModified": "2026-05-01T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak stříhat ovocné stromy", "řez jabloně", "řez hrušně", "kdy stříhat ovocné stromy", "zimní řez ovocných stromů", "tvarování ovocného stromu"]
  }]
};

const RELATED = [
  { title: "Jak stříhat keře", href: "/blog/jak-strihat-kere", read: "5 min" },
  { title: "Jak připravit zahradu na jaro", href: "/blog/jarni-zahrada", read: "7 min" },
  { title: "Jak hnojit zahradu", href: "/blog/jak-hnojit-zahradu", read: "5 min" },
  { title: "Jak se zbavit plevele bez chemie", href: "/blog/zbavit-se-plevele-bez-chemie", read: "4 min" },
];

const TREES = [
  { tree:"Jabloň\nHrušeň", when:"Únor–březen\n(klid vegetace)", summer:"Červenec–srpen\n(letní řez)", tip:"Zkrátit přírůstky\nz loňska o 1/3", color:"#5a9e6f" },
  { tree:"Švestka\nSlíva", when:"Po sklizni\nSrpen–září", summer:"Vyhýbat se zimě\n(houba stříbrnice)", tip:"Nikdy v zimě!\nHrozí choroby", color:"#9b6fd4" },
  { tree:"Třešeň\nVišeň", when:"Po sklizni\nČerven–červenec", summer:"Jen nutné řezy\nv létě po sklizni", tip:"Velké rány\nošetři rankovým tmelem", color:"#e07040" },
  { tree:"Broskev\nMeruňka", when:"Jarní rozkvět\nnebo po sklizni", summer:"Každoroční řez\nnutný pro výnosy", tip:"Silněji než ostatní\nzmlazovat každý rok", color:"#f59e0b" },
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
              <span>Stříhání ovocných stromů</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak stříhat ovocné stromy – kdy a jak správně řezat</h1>
              <p className="article-lead">Pravidelný řez ovocných stromů je základ dobré sklizně. Nestříhaný strom zaroste, plodí méně a plody jsou menší. Přitom základní řez zvládne každý zahrádkář.</p>
              <div className="article-meta-row"><span>Aktualizováno: 1. května 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/jak-strihat-ovocne-stromy" title="Jak stříhat ovocné stromy – kdy a jak správně řezat 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 175" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="175" fill="#f0f8ec"/>
                <text x="380" y="22" textAnchor="middle" fontSize="10" fill="#3a7e4f" fontWeight="700" letterSpacing="0.04em">KDY ŘEZAT – PŘEHLED PODLE DRUHU</text>
                {TREES.map(({tree, when, summer, tip, color}, i) => (
                  <g key={i} transform={`translate(${20+i*185}, 28)`}>
                    <rect x="0" y="0" width="175" height="140" rx="8" fill="#fff" stroke={color} strokeWidth="1.5"/>
                    {tree.split('\n').map((t,j) => <text key={j} x="87" y={18+j*14} textAnchor="middle" fontSize="11" fill={color} fontWeight="700">{t}</text>)}
                    <line x1="10" y1="46" x2="165" y2="46" stroke={color} strokeWidth="0.5" opacity="0.4"/>
                    <text x="10" y="62" fontSize="8" fill="#3a7e4f" fontWeight="600">Hlavní řez:</text>
                    {when.split('\n').map((w,j) => <text key={j} x="10" y={74+j*12} fontSize="8" fill="#2a2a28">{w}</text>)}
                    <text x="10" y="102" fontSize="8" fill="#4a90d9" fontWeight="600">Letní řez:</text>
                    {summer.split('\n').map((s,j) => <text key={j} x="10" y={114+j*12} fontSize="8" fill="#2a2a28">{s}</text>)}
                    <rect x="8" y="126" width="159" height="10" rx="3" fill={color} opacity="0.1"/>
                    <text x="87" y="134" textAnchor="middle" fontSize="7.5" fill={color}>💡 {tip}</text>
                  </g>
                ))}
                <rect y="158" width="760" height="17" fill="#d8f0d0" opacity="0.5"/>
                <text x="380" y="170" textAnchor="middle" fontSize="8" fill="#3a7e4f" fontWeight="600" letterSpacing="0.06em">✂️ OSTRÉ NOŽE = ČISTÉ RÁNY · ŠVESTKY NIKDY V ZIMĚ · RÁNU NAD PUPENEM ŘEZAT</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#proc">Proč a jak často řezat</a></li>
                <li><a href="#nastroje">Nástroje pro řez</a></li>
                <li><a href="#postup">Postup řezu krok za krokem</a></li>
                <li><a href="#druhy">Řez podle druhu stromu</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="proc">
              <h2>Proč a jak často řezat ovocné stromy</h2>
              <ul>
                <li><strong>Prosvětlení koruny:</strong> Světlo musí pronikat do celé koruny — plody ve stínu jsou malé a bez chuti. Řez odstraní přebytečné větve a zajistí světlo pro plodné větvičky.</li>
                <li><strong>Obnova plodných větví:</strong> Ovocné stromy tvoří plody hlavně na dvouletých a tříletých výhoncích. Starší větve přestávají plodit — řez stimuluje nové přírůstky.</li>
                <li><strong>Zdraví stromu:</strong> Odstraněním nemocných, suchých nebo křížících se větví zabráníš šíření chorob a škůdců.</li>
                <li><strong>Jak často:</strong> Mladé stromy (1–5 let): každý rok, tvarování koruny. Dospělé stromy: každý rok udržovací řez nebo každé 2–3 roky omlazovací řez.</li>
              </ul>
            </section>

            <section id="nastroje">
              <h2>Nástroje pro řez</h2>
              <ul>
                <li><strong>Zahradní nůžky (sekátory):</strong> Na větve do 2 cm průměru. Musí být ostré — tupé nůžky drtí větvičky místo řezání. Před řezem vydezinfikovat (alkohol nebo dezinfekce).</li>
                <li><strong>Zahradní nůžky se dvěma čepelemi (lopatkové):</strong> Na silnější větve 2–4 cm. Méně poškozují tkáň než bypass.</li>
                <li><strong>Ruční pila:</strong> Na větve nad 4 cm. Speciální zahradní pila s hrubými zuby — stolní pila by mačkala kůru.</li>
                <li><strong>Ranový tmel:</strong> Na velké řezy (průměr nad 3 cm) nanes ranový tmel pro ochranu před infekcemi. Pro švestky a třešně je to nutnost.</li>
                <li><strong>Čistota nástrojů:</strong> Přenáší choroby z nemocného na zdravý strom. Dezinfikuj mezi řezy — zejména u chorých stromů.</li>
              </ul>
            </section>

            <section id="postup">
              <h2>Postup řezu krok za krokem</h2>
              <ul>
                <li><strong>Krok 1 — Odstraň suché a nemocné větve:</strong> Nejdřív odstraň vše mrtvé, nemocné nebo poškozené. Tyto větve poznat snadno — bez pupenů, hnědé dřevo.</li>
                <li><strong>Krok 2 — Odstraň kříženící se větve:</strong> Větve které se kříží nebo třou o sebe — jedna z nich musí pryč. Nech tu která roste do lepšího směru.</li>
                <li><strong>Krok 3 — Prosvětli korunu:</strong> Odstraň větve které rostou dovnitř koruny nebo přímo dolů. Cíl: světlo a vzduch procházejí celou korunou.</li>
                <li><strong>Krok 4 — Zkrátit roční přírůstky:</strong> Loňské přírůstky (světlé, bez kůry) zkrátit o 1/3 na vnější pupen. Stimuluje větvení a tvorbu krátkých plodných větvičtek.</li>
                <li><strong>Řez nad pupenem:</strong> Vždy řez 5 mm nad pupenem, šikmo (voda steče). Pupen musí směřovat ven z koruny.</li>
              </ul>
              <div className="article-tip"><strong>💡 Zlaté pravidlo:</strong> Lépe méně než více. Jeden rok nestříhej moc — strom musí mít dost listové plochy pro fotosyntézu. Radikální řez provádět postupně přes 2–3 roky.</div>
            </section>

            <section id="druhy">
              <h2>Řez podle druhu stromu</h2>
              <ul>
                <li><strong>Jabloň a hrušeň:</strong> Hlavní řez v únoru až březnu (klid vegetace, ale ne při silném mrazu). Letní řez v červenci — zkrátit silné přírůstky pro lepší prosvětlení. Tvoří plody na krátkých plodných větvičkách (plodonoše) — tyto nezkracovat!</li>
                <li><strong>Švestka a slíva:</strong> NIKDY nestříhat v zimě — hrozí houba stříbrnice která strom zabije. Řezat po sklizni (srpen–září) nebo na jaře při rašení. Menší řez, opatrně.</li>
                <li><strong>Třešeň a višeň:</strong> Řezat bezprostředně po sklizni (červen–červenec). Velké rány ošetřit rankovým tmelem. Třešně jsou citlivé na houby přes rány.</li>
                <li><strong>Broskev a meruňka:</strong> Silnější řez každý rok — broskve tvoří plody pouze na ročních výhoncích. Zkrátit loňské přírůstky na 3–4 pupeny. Bez ročního řezu stromy přestávají plodit.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Mohu ostříhat stromy které nikdo nestříhal 10 let?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ano, ale postupně — radikální řez najednou strom oslabí nebo zahubí. Omlazovací řez provádět přes 2–3 roky: první rok odstraň největší přebytečné větve, druhý rok prosvětli, třetí rok finální tvarování. Stromy reagují na silný řez tvorbou husté spleti vlků (silné svislé výhony) — tyto průběžně odstraňovat.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Co jsou vlci na stromech a co s nimi?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Vlci (vlkové výhony) jsou silné svislé výhony které vyrůstají po silném řezu nebo z kořenů. Nenesou plody, jen odebírají energii stromu. Odstraňovat co nejdříve (v létě vylomit, v zimě odříznout). Pokud je vlk v dobrém místě, lze ho tvarováním proměnit v plodnou větev — ohnutím do vodorovné polohy.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Stříhat stromky při mrazu nebo ne?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Při lehkém mrazu (do -5 °C) řez nevadí jabloni a hrušni. Při silnějším mrazu (pod -10 °C) řezy špatně hojí a strom je více náchylný na choroby — počkej na teplejší den. Švestky, třešně a meruňky nestříhat za mrazu nikdy — raději počkat na jaro nebo léto po sklizni.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/jak-strihat-ovocne-stromy" title="Jak stříhat ovocné stromy – kdy a jak správně řezat 2026" />

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
                <li><a href="#proc">Proč a jak často řezat</a></li>
                <li><a href="#nastroje">Nástroje</a></li>
                <li><a href="#postup">Postup řezu</a></li>
                <li><a href="#druhy">Řez dle druhu</a></li>
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
