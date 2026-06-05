import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak pěstovat papriky – od výsevu po sklizeň 2026",
  description: "Jak pěstovat papriky doma i na záhoně. Kdy vysévat, jak přepěstovat sazenice, správná zálivka a hnojení. Průvodce pro začátečníky i zkušené zahradníky.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-pestovat-papriky" },
  openGraph: { title: "Jak pěstovat papriky 2026", description: "Od výsevu po sklizeň – jak pěstovat papriky doma i na záhoně.", url: "https://www.domovniguru.cz/blog/jak-pestovat-papriky", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-05-01T08:00:00Z", modifiedTime: "2026-05-01T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20p%C4%9Bstovat%20papriky%20%E2%80%93%20od%20v%C3%BDsevu%20po%20sklize%C5%88%202026&cat=blog", width: 1200, height: 630, alt: "Jak pěstovat papriky – od výsevu po sklizeň 2026" }] },
  twitter: { card: "summary_large_image", title: "Jak pěstovat papriky 2026", description: "Od výsevu po sklizeň – pěstování paprik krok za krokem." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/jak-pestovat-papriky#article",
    "headline": "Jak pěstovat papriky – od výsevu po sklizeň 2026",
    "datePublished": "2026-05-01T08:00:00Z",
    "dateModified": "2026-06-04T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak pěstovat papriky", "papriky výsev", "pěstování paprik záhon", "papriky balkon", "kdy sázet papriky", "péče o papriky"]
  }, {
    "@type": "FAQPage",
    "@id": "https://www.domovniguru.cz/blog/jak-pestovat-papriky#faq",
    "mainEntity": [
      { "@type": "Question", "name": "Proč papriky kvetou ale plody neopadávají?", "acceptedAnswer": { "@type": "Answer", "text": "Nejčastější příčina: příliš vysoké teploty nad 35 °C (pyly nejsou životaschopné), nedostatek opylovačů, příliš nízká vlhkost vzduchu, nebo přehnojení dusíkem. Řešení: přemísti do polostínu při horku, jemně otřes rostlinu pro samoopylení, zalévej pravidelně." } },
      { "@type": "Question", "name": "Mohu pěstovat papriky na severním balkoně?", "acceptedAnswer": { "@type": "Answer", "text": "Severní balkon bohužel nestačí — papriky potřebují min. 6 hodin přímého slunce denně. Na severním balkoně budou rostliny živořit a plody budou minimální. Pro stinné místo jsou vhodnější salát, špenát nebo bylinky jako petržel a pažitka." } },
      { "@type": "Question", "name": "Jaký je rozdíl mezi paprikou a chilli?", "acceptedAnswer": { "@type": "Answer", "text": "Obě jsou botanicky Capsicum annuum (nebo jiné druhy Capsicum). Paprika (sladká) obsahuje málo nebo žádný kapsaicin. Chilli obsahuje kapsaicin který způsobuje pálivost. Pěstování je identické — chilli jsou obvykle odolnější a méně náročné než velké sladké papriky." } }
    ]
  }, {
    "@type": "HowTo",
    "@id": "https://www.domovniguru.cz/blog/jak-pestovat-papriky#howto",
    "name": "Jak pěstovat papriky – od výsevu po sklizeň 2026",
    "description": "Jak pěstovat papriky doma i na záhoně. Kdy vysévat, jak přepěstovat sazenice, správná zálivka a hnojení. Průvodce pro začátečníky i zkušené zahradníky.",
    "step": [
      { "@type": "HowToStep", "name": "Výsev a předpěstování", "text": "Papriky mají dlouhou vegetační dobu (90–130 dní) — musí se předpěstovat doma od února aby stihly dozrát v české letní sezóně." },
      { "@type": "HowToStep", "name": "Výsadba do záhonu nebo truhlíku", "text": "Výsadba do záhonu nebo truhlíku" },
      { "@type": "HowToStep", "name": "Péče – zálivka, hnojení, opora", "text": "Péče – zálivka, hnojení, opora" },
      { "@type": "HowToStep", "name": "Sklizeň a přezimování", "text": "Sklizeň a přezimování" }
    ]
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://www.domovniguru.cz/blog/jak-pestovat-papriky#breadcrumb",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" },
      { "@type": "ListItem", "position": 3, "name": "Zahrada & terasa", "item": "https://www.domovniguru.cz/blog/kategorie/zahrada" },
      { "@type": "ListItem", "position": 4, "name": "Jak pěstovat papriky – od výsevu po sklizeň 2026", "item": "https://www.domovniguru.cz/blog/jak-pestovat-papriky" }
    ]
  }
  ]
};

const RELATED = [
  { title: "Jak pěstovat rajčata", href: "/blog/jak-pestovat-rajcata", read: "6 min" },
  { title: "Jak pěstovat jahody", href: "/blog/jak-pestovat-jahody", read: "6 min" },
  { title: "Jak hnojit zahradu", href: "/blog/jak-hnojit-zahradu", read: "5 min" },
  { title: "Jak správně zalévat", href: "/blog/jak-spravne-zalevat", read: "4 min" },
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
              <span>Jak pěstovat papriky</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak pěstovat papriky – od výsevu po sklizeň</h1>
              <p className="article-lead">Papriky jsou teplo milující zelenina která v Česku vyžaduje trochu péče — ale odměnou jsou plody které jsou nesrovnatelně lepší než z obchodu. Záhon i velký truhlík na balkoně postačí.</p>
              <div className="article-meta-row"><span>Aktualizováno: 4. června 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/jak-pestovat-papriky" title="Jak pěstovat papriky – od výsevu po sklizeň 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 170" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="170" fill="#f8f4f0"/>
                <text x="380" y="22" textAnchor="middle" fontSize="10" fill="#8a5030" fontWeight="700" letterSpacing="0.04em">HARMONOGRAM PĚSTOVÁNÍ PAPRIK</text>
                {[
                  { x:20, period:"Únor–březen", icon:"🌱", title:"Výsev", desc:"Semínka do pěstebního\nsubstrátu, 25–28 °C\nKlíčení 10–21 dní", color:"#5a9e6f" },
                  { x:190, period:"Duben", icon:"🪴", title:"Pikýrování", desc:"Sazenice přesadit\ndo větších nádob\nJasné světlo", color:"#4a90d9" },
                  { x:360, period:"Konec května", icon:"☀️", title:"Výsadba ven", desc:"Po ledových mužích\ndo záhonu nebo\nvelkého truhlíku", color:"#f59e0b" },
                  { x:530, period:"Červen–září", icon:"🌶️", title:"Sklizeň", desc:"Zelené za 70–80 dní\nČervené za 100–120\nSklízet průběžně", color:"#e07040" },
                  { x:660, period:"Říjen", icon:"❄️", title:"Přezimování", desc:"Přestěhovat dovnitř\npro příští rok\nnebo uložit semena", color:"#9b6fd4" },
                ].map(({x, period, icon, title, desc, color}) => (
                  <g key={x} transform={`translate(${x}, 28)`}>
                    <rect x="0" y="0" width="120" height="130" rx="8" fill="#fff" stroke={color} strokeWidth="1.2"/>
                    <text x="60" y="18" textAnchor="middle" fontSize="8" fill={color} fontWeight="600">{period}</text>
                    <text x="60" y="38" textAnchor="middle" fontSize="20">{icon}</text>
                    <text x="60" y="58" textAnchor="middle" fontSize="10" fill={color} fontWeight="700">{title}</text>
                    <line x1="8" y1="64" x2="112" y2="64" stroke={color} strokeWidth="0.5" opacity="0.4"/>
                    {desc.split('\n').map((d,i) => <text key={i} x="60" y={78+i*14} textAnchor="middle" fontSize="8" fill="#2a2a28">{d}</text>)}
                  </g>
                ))}
                <rect y="153" width="760" height="17" fill="#f0e8d8" opacity="0.5"/>
                <text x="380" y="165" textAnchor="middle" fontSize="8" fill="#8a7050" fontWeight="600" letterSpacing="0.06em">🌶️ VÝSEV V ÚNORU = ZÁKLAD ÚSPĚCHU · MIN. 20 °C · PO LEDOVÝCH MUŽÍCH VEN</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#vysev">Výsev a předpěstování</a></li>
                <li><a href="#vysadba">Výsadba do záhonu nebo truhlíku</a></li>
                <li><a href="#pece">Péče – zálivka, hnojení, opora</a></li>
                <li><a href="#sklizen">Sklizeň a přezimování</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="vysev">
              <h2>Výsev a předpěstování</h2>
              <p>Papriky mají dlouhou vegetační dobu (90–130 dní) — musí se předpěstovat doma od února aby stihly dozrát v české letní sezóně.</p>
              <ul>
                <li><strong>Kdy vysévat:</strong> Únor až polovina března. Pozdější výsev = menší sklizeň nebo nedozrálé plody.</li>
                <li><strong>Substrát a teplota:</strong> Pěstební substrát nebo rašelina s pískem. Teplota klíčení: 25–28 °C (teplé místo u topení nebo speciální pěstební podložka). Klíčení: 10–21 dní.</li>
                <li><strong>Světlo:</strong> Po vzejití potřebují papriky co nejvíce světla — na nejvíce osluněný parapet. Při nedostatku světla se sazenice vytahují a jsou slabé. LED pěstební lampa výrazně pomáhá.</li>
                <li><strong>Pikýrování:</strong> Když mají sazenice 2–3 pravé listy, přesaď je do jednotlivých květináčků (min. 9 cm průměr). Jemně, kořeny nepotrhat.</li>
                <li><strong>Otužování:</strong> 2 týdny před výsadbou ven, nech sazenice pár hodin denně venku (ve stínu) — postupně přivykají venkovním podmínkám.</li>
              </ul>
            </section>

            <section id="vysadba">
              <h2>Výsadba do záhonu nebo truhlíku</h2>
              <ul>
                <li><strong>Kdy sázet ven:</strong> Po "ledových mužích" (polovina května) kdy nehrozí mráz. Papriky jsou extrémně citlivé na mráz — i lehký přízemní mráz je zničí.</li>
                <li><strong>Záhon:</strong> Plné slunce, chráněné místo od větru. Vzdálenost sazenic: 40–50 cm. Obohať půdu kompostem. Ideální pH 6,0–6,8.</li>
                <li><strong>Truhlík nebo nádoba:</strong> Min. 20–25 litrů na rostlinu. Papriky mají velký kořenový systém. Dobré odvodnění — díry ve dně. Nádoby se rychle přehřívají — v největším horku stínit.</li>
                <li><strong>Opora:</strong> Hned při výsadbě zapíchni bambusovou tyč — papriky nesou těžké plody a při větru se lámou.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Sázej papriky poblíž rajčat nebo bazalky — vzájemně si prospívají. Vyhnout se pěstování vedle fenyklu a kopru.</div>
            </section>

            <section id="pece">
              <h2>Péče – zálivka, hnojení, opora</h2>
              <ul>
                <li><strong>Zálivka:</strong> Pravidelně a rovnoměrně — papriky nesnáší sucho ani přemokření. Zalévej ráno u kořenů, ne na listy. V horkém létě každý den nebo ob den.</li>
                <li><strong>Hnojení:</strong> Každé 2 týdny tekutým hnojivem pro rajčata a papriky (bohatým na draslík a fosfor) — kolik hnojiva přesně potřebuješ zjistíš v naší <Link href="/kalkulacky/kolik-hnojiva" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačce hnojiva</Link>. Přehnojení dusíkem = velké listy, málo plodů.</li>
                <li><strong>Odlomení první pupeny:</strong> První 2–3 pupeny odlomit — rostlina nejdřív zapustí silné kořeny a pak teprve plodí bohatě. Tento krok výrazně zvýší celkovou sklizeň.</li>
                <li><strong>Teplota:</strong> Papriky přestanou nasazovat plody při teplotách nad 35 °C nebo pod 15 °C. V horkém létě zavlažuj a stínuj — obnoví se při poklesu teplot.</li>
              </ul>
            </section>

            <section id="sklizen">
              <h2>Sklizeň a přezimování</h2>
              <ul>
                <li><strong>Zelené papriky:</strong> Sklízet za 70–80 dní po výsadbě. Zelená paprika = nezralá, ale chutná. Sklizní zelených uvolníš rostlině energii pro další plody.</li>
                <li><strong>Červené, žluté, oranžové:</strong> Za 100–130 dní — plně dozrálé papriky. Sladší a výživnější než zelené. Nechej na rostlině dokud nezbarví.</li>
                <li><strong>Přezimování:</strong> Papriky jsou trvalky v teplém klimatu. V ČR přestěhuj zdravé rostliny před mrazem dovnitř (min. 15 °C). Ořízni na 1/3, méně zalévej. Na jaře opět ven — starší rostliny plodí dříve.</li>
                <li><strong>Semena:</strong> Z plně zralé papriky odeber semena, usuš na papíru 2 týdny a uchovej v suchu pro příští rok.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Proč papriky kvetou ale plody neopadávají?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Nejčastější příčina: příliš vysoké teploty nad 35 °C (pyly nejsou životaschopné), nedostatek opylovačů (včel), příliš nízká vlhkost vzduchu, nebo přehnojení dusíkem. Řešení: přemísti do polostínu při horku, jemně otřes rostlinu pro samoopylení, zalévej pravidelně.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Mohu pěstovat papriky na severním balkoně?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Severní balkon bohužel nestačí — papriky potřebují min. 6 hodin přímého slunce denně. Na severním balkoně budou rostliny živořit a plody budou minimální. Pro stinné místo jsou vhodnější salát, špenát nebo bylinky jako petržel a pažitka.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jaký je rozdíl mezi paprikou a chilli?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Obě jsou botanicky Capsicum annuum (nebo jiné druhy Capsicum). Paprika (sladká) obsahuje málo nebo žádný kapsaicin. Chilli obsahuje kapsaicin který způsobuje pálivost. Pěstování je identické — chilli jsou obvykle odolnější a méně náročné než velké sladké papriky.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/jak-pestovat-papriky" title="Jak pěstovat papriky – od výsevu po sklizeň 2026" />

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
                <li><a href="#vysev">Výsev a předpěstování</a></li>
                <li><a href="#vysadba">Výsadba ven</a></li>
                <li><a href="#pece">Péče</a></li>
                <li><a href="#sklizen">Sklizeň a přezimování</a></li>
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
