import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak vyčistit komín – kdy a jak na to, revize 2026",
  description: "Jak a kdy vyčistit komín. Zákonná povinnost, jak poznat ucpaný komín, co dělat sám a kdy zavolat kominíka. Bezpečnost a prevence požáru.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/vycistit-komin" },
  openGraph: { title: "Jak vyčistit komín 2026", description: "Zákonná povinnost čištění komína, jak poznat ucpání a kdy volat kominíka.", url: "https://www.domovniguru.cz/blog/vycistit-komin", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-22T08:00:00Z", modifiedTime: "2026-04-22T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20vy%C4%8Distit%20kom%C3%ADn%20%E2%80%93%20kdy%20a%20jak%20na%20to%2C%20revize%202026&cat=blog", width: 1200, height: 630, alt: "Jak vyčistit komín – kdy a jak na to, revize 2026" }] },
  twitter: { card: "summary_large_image", title: "Jak vyčistit komín 2026", description: "Zákon, čištění a kdy volat kominíka – vše o údržbě komína." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/vycistit-komin#article",
    "headline": "Jak vyčistit komín – kdy a jak na to, revize 2026",
    "datePublished": "2026-04-22T08:00:00Z",
    "dateModified": "2026-06-04T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak vyčistit komín", "čištění komína", "kominík revize", "ucpaný komín příznaky", "zákon čištění komína", "požár komína prevence"]
  }, {
    "@type": "FAQPage",
    "@id": "https://www.domovniguru.cz/blog/vycistit-komin#faq",
    "mainEntity": [
      { "@type": "Question", "name": "Kolik stojí čištění komína kominíkem?", "acceptedAnswer": { "@type": "Answer", "text": "Čištění komína kominíkem: 500–1 500 Kč za běžný domácí komín. Revize komína: 1 000–2 500 Kč. Zanedbaný komín s nálety dehtu: 2 000–5 000 Kč + doprovodné práce. Ceny závisí na délce komína, přístupnosti a lokalitě." } },
      { "@type": "Question", "name": "Kdy je nejlepší čas na čištění komína?", "acceptedAnswer": { "@type": "Answer", "text": "Jaro (duben–květen) po topné sezóně — komín je naplněný sazemi ze zimy a čistí se nejlépe. A podzim (září–říjen) před topnou sezónou — aby byl komín čistý pro zimu. Kominíci jsou nejméně vytížení na jaře — snáze seženeš termín." } },
      { "@type": "Question", "name": "Musím čistit komín i když tolik netopím?", "acceptedAnswer": { "@type": "Answer", "text": "Zákon stanovuje lhůty bez ohledu na intenzitu topení. Málotopení je navíc nebezpečnější než pravidelné topení — kondenzace při nízké teplotě spalin způsobuje nánosy dehtu rychleji. Studené spaliny = více kondenzace = více dehtu = větší požární riziko." } }
    ]
  }, {
    "@type": "HowTo",
    "@id": "https://www.domovniguru.cz/blog/vycistit-komin#howto",
    "name": "Jak vyčistit komín – kdy a jak na to, revize 2026",
    "description": "Jak a kdy vyčistit komín. Zákonná povinnost, jak poznat ucpaný komín, co dělat sám a kdy zavolat kominíka. Bezpečnost a prevence požáru.",
    "step": [
      { "@type": "HowToStep", "name": "Zákonná povinnost čištění komínů", "text": "Čištění komínů upravuje vyhláška č. 34/2016 Sb. Nedodržení je přestupek s pokutou až 25 000 Kč. Navíc pojišťovna může odmítnout pojistné plnění při požáru způsobeném nečistěným komínem." },
      { "@type": "HowToStep", "name": "Jak poznat ucpaný nebo zanedbaný komín", "text": "Jak poznat ucpaný nebo zanedbaný komín" },
      { "@type": "HowToStep", "name": "Čištění komína – sám nebo kominík", "text": "Čištění menšího komína (průřez do 150 mm, délka do 5 m) zvládneš sám. Větší komíny, komíny s ohyby nebo zanedbaný komín s nálety dehtu vyžadují kominíka." },
      { "@type": "HowToStep", "name": "Požár sazí – co dělat", "text": "Požár sazí – co dělat" }
    ]
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://www.domovniguru.cz/blog/vycistit-komin#breadcrumb",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" },
      { "@type": "ListItem", "position": 3, "name": "Sezónní údržba", "item": "https://www.domovniguru.cz/blog/kategorie/sezonni-udrzba" },
      { "@type": "ListItem", "position": 4, "name": "Jak vyčistit komín – kdy a jak na to, revize 2026", "item": "https://www.domovniguru.cz/blog/vycistit-komin" }
    ]
  }
  ]
};

const RELATED = [
  { title: "Příprava domu na zimu", href: "/blog/priprava-domu-na-zimu", read: "10 min" },
  { title: "Jak zkontrolovat kotel před zimou", href: "/blog/zkontrolovat-kotel-pred-zimou", read: "6 min" },
  { title: "Jak ušetřit na vytápění", href: "/blog/usetrit-na-vytapeni", read: "7 min" },
  { title: "Jak se zbavit vlhkosti v bytě", href: "/blog/zbavit-se-vlhkosti-v-byte", read: "7 min" },
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
              <span>Čištění komína</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">🍂 Sezónní údržba</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak vyčistit komín – kdy a jak na to, revize</h1>
              <p className="article-lead">Nečistěný komín je nejčastější příčina požárů rodinných domů. Zákon stanovuje povinné lhůty čištění — a nejsou to rady, ale povinnosti s pokutou.</p>
              <div className="article-meta-row"><span>Aktualizováno: 4. června 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/vycistit-komin" title="Jak vyčistit komín – kdy a jak na to, revize 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 175" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="175" fill="#f8f4f0"/>
                <text x="380" y="22" textAnchor="middle" fontSize="10" fill="#6a4030" fontWeight="700" letterSpacing="0.04em">ZÁKONNÉ LHŮTY ČIŠTĚNÍ KOMÍNŮ (ČR)</text>
                {[
                  { x:20, type:"Tuhá paliva\n(dřevo, uhlí)", freq:"3× ročně", icon:"🪵", color:"#c8904a", note:"Krby, krbová kamna,\nkotle na pevná paliva" },
                  { x:210, type:"Kapalná paliva\n(nafta, olej)", freq:"2× ročně", icon:"💧", color:"#4a90d9", note:"Kotle na topný olej,\nnaftu" },
                  { x:400, type:"Plynná paliva\n(zemní plyn)", freq:"1× ročně", icon:"🔥", color:"#5a9e6f", note:"Plynové kotle,\nkrby na plyn" },
                  { x:590, type:"Revize komína", freq:"1× za 3 roky", icon:"📋", color:"#9b6fd4", note:"Technická prohlídka\nkominíkem (nutná)" },
                ].map(({x, type, freq, icon, color, note}) => (
                  <g key={x} transform={`translate(${x}, 28)`}>
                    <rect x="0" y="0" width="163" height="130" rx="8" fill="#fff" stroke={color} strokeWidth="1.5"/>
                    <text x="81" y="28" textAnchor="middle" fontSize="22">{icon}</text>
                    {type.split('\n').map((t, i) => <text key={i} x="81" y={46+i*13} textAnchor="middle" fontSize="9.5" fill={color} fontWeight="700">{t}</text>)}
                    <line x1="10" y1="72" x2="153" y2="72" stroke={color} strokeWidth="0.5" opacity="0.4"/>
                    <text x="81" y="90" textAnchor="middle" fontSize="16" fill={color} fontWeight="700">{freq}</text>
                    {note.split('\n').map((n, i) => <text key={i} x="81" y={108+i*12} textAnchor="middle" fontSize="8" fill="#6a6050">{n}</text>)}
                  </g>
                ))}
                <rect y="158" width="760" height="17" fill="#f0e8e0" opacity="0.5"/>
                <text x="380" y="170" textAnchor="middle" fontSize="8" fill="#8a6030" fontWeight="600" letterSpacing="0.06em">🔥 NEČISTĚNÝ KOMÍN = POŽÁR SAZÍ = POKUTA AŽ 25 000 Kč · PRAVIDELNÉ ČIŠTĚNÍ JE POVINNOST</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#zakon">Zákonná povinnost</a></li>
                <li><a href="#priznaky">Jak poznat ucpaný komín</a></li>
                <li><a href="#cisteni">Čištění komína sám vs. kominík</a></li>
                <li><a href="#pozar">Požár sazí – co dělat</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="zakon">
              <h2>Zákonná povinnost čištění komínů</h2>
              <p>Čištění komínů upravuje vyhláška č. 34/2016 Sb. Nedodržení je přestupek s pokutou až 25 000 Kč. Navíc pojišťovna může odmítnout pojistné plnění při požáru způsobeném nečistěným komínem.</p>
              <ul>
                <li><strong>Tuhá paliva (dřevo, uhlí, brikety):</strong> Čistit 3× ročně, z toho 1× kominíkem. Revize 1× za 3 roky.</li>
                <li><strong>Kapalná paliva (topný olej, nafta):</strong> Čistit 2× ročně, revize 1× za 3 roky.</li>
                <li><strong>Plynná paliva (zemní plyn, propan-butan):</strong> Čistit 1× ročně, revize 1× za 3 roky.</li>
                <li><strong>Kdo může čistit:</strong> Vlastník nemovitosti smí čistit komín s průřezem do 150 mm sám. Větší průřezy a revize musí provést certifikovaný kominík.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Schovej si zprávu od kominíka — pojišťovna ji může vyžádat při pojistné události. Bez dokladu o čištění může odmítnout plnění.</div>
            </section>

            <section id="priznaky">
              <h2>Jak poznat ucpaný nebo zanedbaný komín</h2>
              <ul>
                <li><strong>Slabý tah komína:</strong> Kouř se neodvádí dobře, oheň obtížně hoří, vrací se zpět do místnosti. Nejčastější příznak ucpání nebo zanesení sazemi.</li>
                <li><strong>Zápach v místnosti:</strong> Pach kouře nebo spáleniny i když topidlo nehoří. Signál zpětného tahu nebo ucpání.</li>
                <li><strong>Viditelné saze nebo dehet:</strong> Černé usazeniny kolem komínové vložky nebo na komínovém průduchu. Dehet (lepkavé černé usazeniny) je obzvlášť nebezpečný — snadno se vzní.</li>
                <li><strong>Vlhkost nebo výkvěty solí:</strong> Bílé nebo hnědé skvrny na vnějším plášti komína signalizují kondenzaci nebo zatékání.</li>
                <li><strong>Praskání nebo praskavé zvuky:</strong> Při topení v zimě — může signalizovat trhliny v komínovém tělese.</li>
              </ul>
            </section>

            <section id="cisteni">
              <h2>Čištění komína – sám nebo kominík</h2>
              <p>Čištění menšího komína (průřez do 150 mm, délka do 5 m) zvládneš sám. Větší komíny, komíny s ohyby nebo zanedbaný komín s nálety dehtu vyžadují kominíka.</p>
              <ul>
                <li><strong>Jak čistit sám (malý komín):</strong> Komínový kartáč správné velikosti průřezu + prodlužovací tyče. Shora kartáčem pohyby nahoru-dolů. Saze zachytit dole pytlem nebo kbelíkem. Nikdy nepoužívej vodu — dehet ztvrdne.</li>
                <li><strong>Chemické čisticí přípravky:</strong> Sůl nebo speciální přípravky přidávané do ohně — uvolňují saze. Doplněk k mechanickému čištění, ne náhrada.</li>
                <li><strong>Kominík:</strong> Certifikovaný kominík čistí komín speciálním vybavením, provede kontrolu trhlin a vystaví zprávu (nutná pro pojišťovnu a pro zákon). Cena 500–2 000 Kč dle délky komína.</li>
              </ul>
              <div className="article-tip"><strong>⚠️ Dehet v komíně:</strong> Pokud vidíš v komíně lepkavé černé usazeniny (dehet), nečisti sám. Dehet se při špatném čištění může vznítit. Zavolej kominíka.</div>
            </section>

            <section id="pozar">
              <h2>Požár sazí – co dělat</h2>
              <ul>
                <li><strong>Příznaky požáru sazí:</strong> Silný hluk v komíně (hučení, praskání), hustý tmavý dým z komína, intenzivní teplo na vnějším plášti komína, červená záře v komíně.</li>
                <li><strong>Co dělat okamžitě:</strong> Zavolej 150 (hasiče). Uzavři přívod vzduchu do topidla. Evakuuj dům. Nelijí vodu do komína — způsobí výbuch páry a roztrhnutí komína.</li>
                <li><strong>Po požáru:</strong> Neopouštěj dům — kontroluj okolí komína 24 hodin. Komín zkontroluje hasič a kominík. Bez revize kominíka netopit — komín může být poškozen.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Kolik stojí čištění komína kominíkem?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Čištění komína kominíkem: 500–1 500 Kč za běžný domácí komín. Revize komína: 1 000–2 500 Kč. Zanedbaný komín s nálety dehtu: 2 000–5 000 Kč + doprovodné práce. Ceny závisí na délce komína, přístupnosti a lokalitě.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Kdy je nejlepší čas na čištění komína?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Jaro (duben–květen) po topné sezóně — komín je naplněný sazemi ze zimy a čistí se nejlépe. A podzim (září–říjen) před topnou sezónou — aby byl komín čistý pro zimu. Kominíci jsou nejméně vytížení na jaře — snáze seženeš termín.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Musím čistit komín i když tolik netopím?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Zákon stanovuje lhůty bez ohledu na intenzitu topení. Málotopení je navíc nebezpečnější než pravidelné topení — kondenzace při nízké teplotě spalin způsobuje nánosy dehtu rychleji. Studené spaliny = více kondenzace = více dehtu = větší požární riziko.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/vycistit-komin" title="Jak vyčistit komín – kdy a jak na to, revize 2026" />

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
                <li><a href="#zakon">Zákonná povinnost</a></li>
                <li><a href="#priznaky">Jak poznat ucpání</a></li>
                <li><a href="#cisteni">Čištění – sám vs. kominík</a></li>
                <li><a href="#pozar">Požár sazí</a></li>
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
