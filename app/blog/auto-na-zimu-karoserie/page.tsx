import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Auto na zimu – jak připravit karoserii a chránit před rzí 2026",
  description: "Jak připravit auto na zimu – ošetření karoserie, ochrana podvozku a prahu před solí a rzí. Co udělat na podzim aby auto přežilo zimu bez problémů.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/auto-na-zimu-karoserie" },
  openGraph: { title: "Auto na zimu – karoserie a ochrana před rzí 2026", description: "Ošetření karoserie, podvozku a prahů před zimou – jak chránit auto před solí.", url: "https://www.domovniguru.cz/blog/auto-na-zimu-karoserie", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-22T08:00:00Z", modifiedTime: "2026-04-22T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Auto%20na%20zimu%20%E2%80%93%20jak%20p%C5%99ipravit%20karoserii%20a%20chr%C3%A1nit%20p%C5%99ed%20rz%C3%AD%202026&cat=blog", width: 1200, height: 630, alt: "Auto na zimu – jak připravit karoserii a chránit před rzí 2026" }] },
  twitter: { card: "summary_large_image", title: "Auto na zimu – karoserie a ochrana před rzí 2026", description: "Jak chránit karoserii a podvozek před zimní solí a rzí." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/auto-na-zimu-karoserie#article",
    "headline": "Auto na zimu – jak připravit karoserii a chránit před rzí 2026",
    "datePublished": "2026-04-22T08:00:00Z",
    "dateModified": "2026-06-04T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["auto na zimu karoserie", "ochrana karoserie před rzí", "ošetření podvozku zima", "vosk na auto podzim", "zimní příprava auta", "ochrana prahů auta"]
  }, {
    "@type": "FAQPage",
    "@id": "https://www.domovniguru.cz/blog/auto-na-zimu-karoserie#faq",
    "mainEntity": [
      { "@type": "Question", "name": "Kdy nejlépe připravit auto na zimu?", "acceptedAnswer": { "@type": "Answer", "text": "Říjen je ideální — před prvním sněhem a posypem. Vosk a dutinová ochrana potřebují suchý a teplý den (min. 10 °C) pro správné zatvrdnutí. Nenechávej to na první mráz — pak je pozdě a auto jezdí celou zimu nechráněné." } },
      { "@type": "Question", "name": "Je lepší mýt auto v zimě nebo nenechat sůl na karoserii?", "acceptedAnswer": { "@type": "Answer", "text": "Mýt — a to co nejčastěji. Sůl na karoserii urychluje korozi, zejména v místech kde se voda drží (prahy, podvozek). Mýt auto každé 2–3 týdny v zimě je ideální. Oblíbená myšlenka \"počkám na konec zimy\" způsobuje, že sůl pracuje celou sezónu bez přerušení." } },
      { "@type": "Question", "name": "Kolik stojí ochrana podvozku a dutinová konzervace v servisu?", "acceptedAnswer": { "@type": "Answer", "text": "Dutinová konzervace: 500–1 500 Kč (závisí na velikosti auta). Podvozková ochrana: 500–2 000 Kč. Kompletní zimní konzervace (dutiny + podvozek + mytí): 1 500–4 000 Kč. DIY produkty (Dinitrol, Tectyl) vyjdou na 300–800 Kč za materiál — aplikace zvládneš sám po mytí auta." } }
    ]
  }, {
    "@type": "HowTo",
    "@id": "https://www.domovniguru.cz/blog/auto-na-zimu-karoserie#howto",
    "name": "Auto na zimu – jak připravit karoserii a chránit před rzí 2026",
    "description": "Jak připravit auto na zimu – ošetření karoserie, ochrana podvozku a prahu před solí a rzí. Co udělat na podzim aby auto přežilo zimu bez problémů.",
    "step": [
      { "@type": "HowToStep", "name": "Důkladné mytí před zimou", "text": "Mytí auta před zimou není jen estetika — je to ochrana. Letní nečistoty (živice, hmyz, průmyslové saze) narušují lak a pod solí z posypů způsobují zrychlenou korozi." },
      { "@type": "HowToStep", "name": "Oprava škrábanců a poškození", "text": "Každý neošetřený škrábanec nebo odloupnutý lak je brána pro korozi. Sůl proniká pod lak a rez se šíří pod povrchem — viditelná je až když je škoda velká." },
      { "@type": "HowToStep", "name": "Vosk, keramika nebo teflon", "text": "Pro zimní přípravu stačí kvalitní syntetický vosk nebo DIY keramický coating. Nanes na čisté a suché auto, nechej zatuhnout dle návodu a přeleštit." },
      { "@type": "HowToStep", "name": "Podvozek a prahy – nejrizikovější místa", "text": "Podvozek a prahy – nejrizikovější místa" },
      { "@type": "HowToStep", "name": "Technická příprava auta na zimu", "text": "Technická příprava auta na zimu" }
    ]
  }]
};

const RELATED = [
  { title: "Příprava domu na zimu", href: "/blog/priprava-domu-na-zimu", read: "10 min" },
  { title: "Zimní pneumatiky – kdy přezout", href: "/blog/zimni-pneumatiky-kdy", read: "4 min" },
  { title: "Jak ošetřit zahradní nábytek", href: "/blog/osetrit-zahradni-nabytek", read: "4 min" },
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
              <span>Auto na zimu – karoserie</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">🍂 Sezónní údržba</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Auto na zimu – jak připravit karoserii a chránit před rzí</h1>
              <p className="article-lead">Sůl na silnicích je největší nepřítel karoserie. Každá zima bez přípravy zkracuje život auta o rok. Tady je co udělat na podzim aby auto přežilo zimu bez koroze.</p>
              <div className="article-meta-row"><span>Aktualizováno: 4. června 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/auto-na-zimu-karoserie" title="Auto na zimu – jak připravit karoserii a chránit před rzí 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 175" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="175" fill="#f0f4f8"/>
                <text x="380" y="22" textAnchor="middle" fontSize="10" fill="#4a6080" fontWeight="700" letterSpacing="0.04em">PODZIMNÍ PŘÍPRAVA KAROSERIE – CHECKLIST</text>

                {[
                  { x:20, step:"1", title:"Důkladné umytí", desc:"Vysokotlaká myčka\npodvozek + prahy\nsůl z léta pryč", color:"#4a90d9", icon:"🚿" },
                  { x:162, step:"2", title:"Oprava škrábanců", desc:"Dotterovat a přeleštit\npoškrábané laky\npřed zimou!", color:"#f59e0b", icon:"🔧" },
                  { x:304, step:"3", title:"Vosk nebo keramika", desc:"Ochranná vrstva\nna celou karoserii\nodpuzuje sůl", color:"#5a9e6f", icon:"✨" },
                  { x:446, step:"4", title:"Podvozek a prahy", desc:"Anti-korozní sprej\ndo dutin a prahů\nnejnáchylnější místa", color:"#9b6fd4", icon:"🛡️" },
                  { x:588, step:"5", title:"Gumová těsnění", desc:"Silikonový sprej\nna těsnění dveří\nzabrání mrznutí", color:"#e07040", icon:"🪟" },
                ].map(({x, step, title, desc, color, icon}) => (
                  <g key={step} transform={`translate(${x}, 30)`}>
                    <rect x="0" y="0" width="130" height="128" rx="8" fill="#fff" stroke={color} strokeWidth="1.2"/>
                    <circle cx="65" cy="22" r="18" fill={color} opacity="0.15"/>
                    <text x="65" y="27" textAnchor="middle" fontSize="11" fill={color} fontWeight="700">{step}</text>
                    <text x="65" y="52" textAnchor="middle" fontSize="18">{icon}</text>
                    <text x="65" y="72" textAnchor="middle" fontSize="9" fill={color} fontWeight="700">{title}</text>
                    {desc.split('\n').map((line, i) => (
                      <text key={i} x="65" y={86+i*12} textAnchor="middle" fontSize="8" fill="#4a4a40">{line}</text>
                    ))}
                  </g>
                ))}

                <rect y="158" width="760" height="17" fill="#e0eaf4" opacity="0.5"/>
                <text x="380" y="170" textAnchor="middle" fontSize="8" fill="#3a6a8a" fontWeight="600" letterSpacing="0.06em">🚗 NEJLEPŠÍ ČAS: ŘÍJEN–LISTOPAD PŘED PRVNÍM SNĚHEM · OPAKUJ NA JAŘE PO ZIMĚ</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#mytí">Důkladné mytí před zimou</a></li>
                <li><a href="#skrabance">Oprava škrábanců a poškození</a></li>
                <li><a href="#vosk">Vosk, keramika nebo teflon</a></li>
                <li><a href="#podvozek">Podvozek a prahy – nejrizikovější místa</a></li>
                <li><a href="#technika">Technická příprava auta na zimu</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="mytí">
              <h2>Důkladné mytí před zimou</h2>
              <p>Mytí auta před zimou není jen estetika — je to ochrana. Letní nečistoty (živice, hmyz, průmyslové saze) narušují lak a pod solí z posypů způsobují zrychlenou korozi.</p>
              <ul>
                <li><strong>Vysokotlaká myčka:</strong> Důkladně umyj celé auto včetně podvozku a prahů. Letní nánosy je třeba odstranit před nanesením ochranných přípravků.</li>
                <li><strong>Podvozek:</strong> Voda s vysokým tlakem do všech skrytých míst pod vozem — zde se usazuje sůl a způsobuje korozi zdola. Mnoho mycích linek nabízí mytí podvozku za příplatek.</li>
                <li><strong>Prahy a dutiny:</strong> Prahy dveří a dutiny karoserie jsou nejnáchylnějšími místy. Dutinový sprej po mytí je nejdůležitější ochrana.</li>
                <li><strong>Ruční mytí vs. automyčka:</strong> Automatická kartáčová myčka může jemně poškrábat lak. Pro zimní přípravu je lepší bezkontaktní myčka nebo ruční mytí.</li>
              </ul>
            </section>

            <section id="skrabance">
              <h2>Oprava škrábanců a poškození</h2>
              <p>Každý neošetřený škrábanec nebo odloupnutý lak je brána pro korozi. Sůl proniká pod lak a rez se šíří pod povrchem — viditelná je až když je škoda velká.</p>
              <ul>
                <li><strong>Malé škrábance (jen lak):</strong> Dotterovat — přikryj tužkovou dotterací (touch-up tužka v barvě auta) nebo transparentním lakem. Cena 100–300 Kč.</li>
                <li><strong>Škrábance na kov:</strong> Odrezit, napenetrovat, přestříkat základovým lakem a překrýt krycím lakem. Odborné auto-body studio: 500–3 000 Kč za škrábanec.</li>
                <li><strong>Odloupnutý lak na spodku dveří:</strong> Nejčastější problém — kamenem odloupnutý lak u okraje dveří. Opravit ihned před zimou, jinak rez za zimu projde celou hranou dveří.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Touch-up tužky v přesné barvě auta (kód barvy je na štítku v dveřním sloupku nebo pod kapotou) koupíš za 150–400 Kč. Stačí na malé škrábance a je to nejrychlejší prevence koroze.</div>
            </section>

            <section id="vosk">
              <h2>Vosk, keramika nebo teflon</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Ochrana</th><th>Trvanlivost</th><th>Cena (DIY)</th><th>Ochrana</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Karnaubský vosk</strong></td><td>3–6 měsíců</td><td>200–600 Kč</td><td>Dobrá, odpuzuje vodu</td></tr>
                    <tr><td><strong>Syntetický vosk (Polymer)</strong></td><td>6–12 měsíců</td><td>300–800 Kč</td><td>Lepší než přírodní vosk</td></tr>
                    <tr><td><strong>Keramický coating (DIY)</strong></td><td>1–3 roky</td><td>500–2 000 Kč</td><td>Nejlepší, tvrdá vrstva</td></tr>
                    <tr><td><strong>Keramický coating (profi)</strong></td><td>3–7 let</td><td>5 000–20 000 Kč</td><td>Nejlepší dostupná ochrana</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Pro zimní přípravu stačí kvalitní syntetický vosk nebo DIY keramický coating. Nanes na čisté a suché auto, nechej zatuhnout dle návodu a přeleštit.</p>
            </section>

            <section id="podvozek">
              <h2>Podvozek a prahy – nejrizikovější místa</h2>
              <ul>
                <li><strong>Dutinový vosk:</strong> Speciální sprej který vnikne do dutin karoserie (prahy, nosníky, podběhy) a vytvoří ochranný film. Nanese se po mytí, ideálně 1× ročně. Značky: Dinitrol, Tectyl, Bilt-Hamber. Cena 300–800 Kč za sadu.</li>
                <li><strong>Podvozková ochrana:</strong> Černá gumová nebo bitumenová hmota nastříkaná na spodek vozu. Chrání před kameny a solí. Lze aplikovat sám sprejem nebo nechat udělat v servisu (500–2 000 Kč).</li>
                <li><strong>Prahy dveří:</strong> Nejčastější místo výskytu rzi. Zkontroluj prahy zevnitř a zvenku — při prvních známkách rzi okamžitá oprava zabrání šíření.</li>
              </ul>
            </section>

            <section id="technika">
              <h2>Technická příprava auta na zimu</h2>
              <ul>
                <li><strong>Kapalina do ostřikovačů:</strong> Vyměň letní za zimní se snížením mrazu min. do -25 °C. Letní kapalina v zimě zamrzne a praskne zásobník nebo pumpu.</li>
                <li><strong>Baterie:</strong> Zkontroluj stav baterie — chladné počasí snižuje kapacitu. Baterie starší 4–5 let je vhodné otestovat v autoservisu.</li>
                <li><strong>Těsnění dveří a oken:</strong> Nanes silikonový sprej nebo vazelínu na gumová těsnění dveří — zabrání přimrznutí a prodlouží životnost gumy.</li>
                <li><strong>Zimní pneumatiky:</strong> Přezout při teplotách pod +7 °C. Viz <Link href="/blog/zimni-pneumatiky-kdy" style={{color:"#5a9e6f",fontWeight:600}}>Zimní pneumatiky – kdy přezout →</Link></li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Kdy nejlépe připravit auto na zimu?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Říjen je ideální — před prvním sněhem a posypem. Vosk a dutinová ochrana potřebují suchý a teplý den (min. 10 °C) pro správné zatvrdnutí. Nenechávej to na první mráz — pak je pozdě a auto jezdí celou zimu nechráněné.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Je lepší mýt auto v zimě nebo nenechat sůl na karoserii?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Mýt — a to co nejčastěji. Sůl na karoserii urychluje korozi, zejména v místech kde se voda drží (prahy, podvozek). Mýt auto každé 2–3 týdny v zimě je ideální. Oblíbená myšlenka "počkám na konec zimy" způsobuje, že sůl pracuje celou sezónu bez přerušení.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Kolik stojí ochrana podvozku a dutinová konzervace v servisu?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Dutinová konzervace: 500–1 500 Kč (závisí na velikosti auta). Podvozková ochrana: 500–2 000 Kč. Kompletní zimní konzervace (dutiny + podvozek + mytí): 1 500–4 000 Kč. DIY produkty (Dinitrol, Tectyl) vyjdou na 300–800 Kč za materiál — aplikace zvládneš sám po mytí auta.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/auto-na-zimu-karoserie" title="Auto na zimu – jak připravit karoserii a chránit před rzí 2026" />

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
                <li><a href="#mytí">Důkladné mytí</a></li>
                <li><a href="#skrabance">Oprava škrábanců</a></li>
                <li><a href="#vosk">Vosk a keramika</a></li>
                <li><a href="#podvozek">Podvozek a prahy</a></li>
                <li><a href="#technika">Technická příprava</a></li>
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
        .article-table-wrap{overflow-x:auto;margin:16px 0 24px}.article-table{width:100%;border-collapse:collapse;font-size:14px;line-height:1.5}
        .article-table th{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);padding:10px 14px;text-align:left;border-bottom:2px solid var(--border);background:var(--surface)}
        .article-table td{padding:10px 14px;border-bottom:1px solid var(--border);vertical-align:top;color:#2a2a28;font-weight:300}.article-table tr:last-child td{border-bottom:none}
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
