import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak vybrat zahradní gril – plynový nebo uhlíkový",
  description: "Jak vybrat správný zahradní gril. Plynový, uhlíkový, elektrický nebo pelletový – srovnání výhod a nevýhod, ceny a na co si dát pozor při výběru.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/vybrat-zahradni-gril" },
  openGraph: { title: "Jak vybrat zahradní gril 2026", description: "Plynový, uhlíkový nebo elektrický gril – srovnání a jak vybrat ten správný.", url: "https://www.domovniguru.cz/blog/vybrat-zahradni-gril", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-22T08:00:00Z", modifiedTime: "2026-04-22T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20vybrat%20zahradn%C3%AD%20gril%20%E2%80%93%20plynov%C3%BD%20nebo%20uhl%C3%ADkov%C3%BD&cat=blog", width: 1200, height: 630, alt: "Jak vybrat zahradní gril – plynový nebo uhlíkový" }] },
  twitter: { card: "summary_large_image", title: "Jak vybrat zahradní gril 2026", description: "Plynový, uhlíkový nebo elektrický – jak vybrat gril na zahradu." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/vybrat-zahradni-gril#article",
    "headline": "Jak vybrat zahradní gril – plynový nebo uhlíkový",
    "datePublished": "2026-04-22T08:00:00Z",
    "dateModified": "2026-06-04T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak vybrat zahradní gril", "plynový vs uhlíkový gril", "elektrický gril zahrada", "výběr grilu zahrada", "zahradní gril srovnání"]
  }, {
    "@type": "FAQPage",
    "@id": "https://www.domovniguru.cz/blog/vybrat-zahradni-gril#faq",
    "mainEntity": [
      { "@type": "Question", "name": "Mohu grilovat na balkoně?", "acceptedAnswer": { "@type": "Answer", "text": "Elektrický gril na balkoně je ve většině případů povolen — bez kouře a otevřeného ohně. Uhlíkový gril na balkoně je ve většině bytových domů zakázán a navíc nebezpečný (CO, požár). Plynový gril na balkoně — zkontroluj domovní řád. Vždy informuj sousedy a buď ohleduplný ke kouři." } },
      { "@type": "Question", "name": "Uhlíkový nebo plynový – co si vybrat?", "acceptedAnswer": { "@type": "Answer", "text": "Uhlíkový: lepší chuť, nižší cena, ale více práce s rozpalem a čistěním. Plynový: rychlý start, snadné čistění, přesná regulace, ale dražší a chuť o trochu horší. Pokud grilujete 1–2× měsíčně v létě a máte čas — uhlíkový. Pokud grilujete každý víkend nebo během týdne — plynový za jeho pohodlnost se vyplatí." } },
      { "@type": "Question", "name": "Jak bezpečně skladovat propanbutanovou lahev?", "acceptedAnswer": { "@type": "Answer", "text": "Vždy venku nebo v dobře větraném prostoru — nikdy ve skladu nebo garáži bez ventilace. Plyny jsou těžší než vzduch a hromadí se u podlahy. Lahev uchovej stojatě, mimo dosah tepla a slunce. Uzavři ventil lahve po každém grilování. Nikdy neskladuj lahev v uzavřeném automobilu." } }
    ]
  }]
};

const RELATED = [
  { title: "Jak připravit zahradu na jaro", href: "/blog/jarni-zahrada", read: "7 min" },
  { title: "Jak ošetřit zahradní nábytek", href: "/blog/osetrit-zahradni-nabytek", read: "5 min" },
  { title: "Jak postavit pergolu na terasu", href: "/blog/pergola-postup-stavba", read: "9 min" },
  { title: "Venkovní osvětlení zahrady", href: "/blog/venkovni-osvetleni-zahrady", read: "6 min" },
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
              <span>Výběr zahradního grilu</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak vybrat zahradní gril – plynový, uhlíkový nebo elektrický</h1>
              <p className="article-lead">Výběr grilu závisí na tom kde grilujete, jak často a co od grilování očekáváte. Každý typ má své kouzlo a své kompromisy — tady je přehled bez marketingového tlachání.</p>
              <div className="article-meta-row"><span>Aktualizováno: 4. června 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/vybrat-zahradni-gril" title="Jak vybrat zahradní gril – plynový nebo uhlíkový" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 185" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="185" fill="#fdf8f0"/>
                {[
                  { x:20, name:"Uhlíkový", icon:"🔥", pros:"Nejlepší chuť\nNízká pořizovací cena\nKlasický zážitek", cons:"Dlouhý rozpal\nČistění popela\nNevhodný na balkon", price:"500–15 000 Kč", color:"#c8904a", best:"Zahrada, tradiční grilování" },
                  { x:210, name:"Plynový", icon:"💨", pros:"Rychlý start (10 min)\nPřesná regulace\nSnadné čistění", cons:"Vyšší cena\nNutná lahev\nMéně kouřové chuti", price:"3 000–50 000 Kč", color:"#4a90d9", best:"Časté grilování, rodiny" },
                  { x:400, name:"Elektrický", icon:"⚡", pros:"Bez kouře\nVhodný na balkon\nNejjednodušší ovládání", cons:"Slabší výkon\nNutná zásuvka\nMéně chuti", price:"1 000–8 000 Kč", color:"#5a9e6f", best:"Balkon, město, začátečníci" },
                  { x:590, name:"Pelletový (smoker)", icon:"🌡️", pros:"Nejlepší kouřové aroma\nPřesná teplota\nVelká allround plocha", cons:"Nejdražší\nPomalé grilování\nNutné pelety", price:"8 000–80 000 Kč", color:"#9b6fd4", best:"Nadšenci, BBQ styl" },
                ].map(({x, name, icon, pros, cons, price, color, best}) => (
                  <g key={x} transform={`translate(${x}, 12)`}>
                    <rect x="0" y="0" width="163" height="160" rx="8" fill="#fff" stroke={color} strokeWidth="1.2"/>
                    <text x="81" y="30" textAnchor="middle" fontSize="20">{icon}</text>
                    <text x="81" y="48" textAnchor="middle" fontSize="11" fill={color} fontWeight="700">{name}</text>
                    <line x1="10" y1="54" x2="153" y2="54" stroke={color} strokeWidth="0.5" opacity="0.4"/>
                    {pros.split('\n').map((l,i) => <text key={i} x="12" y={67+i*12} fontSize="8" fill="#3a7e4f">✓ {l}</text>)}
                    {cons.split('\n').map((l,i) => <text key={i} x="12" y={103+i*12} fontSize="8" fill="#e07040">✗ {l}</text>)}
                    <rect x="6" y="132" width="151" height="12" rx="3" fill={color} opacity="0.1"/>
                    <text x="81" y="141" textAnchor="middle" fontSize="7.5" fill={color} fontWeight="600">{price}</text>
                    <text x="81" y="154" textAnchor="middle" fontSize="7" fill="#6a6050">{best}</text>
                  </g>
                ))}
                <rect y="168" width="760" height="17" fill="#f0e8d8" opacity="0.5"/>
                <text x="380" y="180" textAnchor="middle" fontSize="8" fill="#8a7050" fontWeight="600" letterSpacing="0.06em">🔥 ZAHRADA → UHLÍKOVÝ NEBO PLYNOVÝ · BALKON → ELEKTRICKÝ · NADŠENEC → PELLETOVÝ</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#typy">Typy grilů – srovnání</a></li>
                <li><a href="#velikost">Jakou velikost vybrat</a></li>
                <li><a href="#materialy">Materiály a kvalita provedení</a></li>
                <li><a href="#udrzba">Čistění a údržba</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="typy">
              <h2>Typy grilů – detailní srovnání</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Kritérium</th><th>Uhlíkový</th><th>Plynový</th><th>Elektrický</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Chuť jídla</strong></td><td>⭐⭐⭐⭐⭐ Nejlepší</td><td>⭐⭐⭐⭐ Dobrá</td><td>⭐⭐⭐ Střední</td></tr>
                    <tr><td><strong>Čas do grilu</strong></td><td>25–40 min (rozpal)</td><td>10–15 min</td><td>5–10 min</td></tr>
                    <tr><td><strong>Regulace teploty</strong></td><td>Obtížná</td><td>Přesná (otočení)</td><td>Přesná (termostat)</td></tr>
                    <tr><td><strong>Čistění</strong></td><td>Náročné (popel)</td><td>Snadné</td><td>Nejsnadnější</td></tr>
                    <tr><td><strong>Balkon / terasa</strong></td><td>❌ Nevhodný</td><td>⚠️ Opatrně</td><td>✅ Vhodný</td></tr>
                    <tr><td><strong>Pořizovací cena</strong></td><td>Nejnižší</td><td>Střední až vysoká</td><td>Nízká až střední</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="velikost">
              <h2>Jakou velikost grilu vybrat</h2>
              <ul>
                <li><strong>Plocha grilu:</strong> Počítej min. 400–600 cm² na osobu pro pohodlné grilování. Pro 4 osoby: min. 1 600 cm² (40×40 cm). Pro větší párty (8–10 osob): 3 000+ cm².</li>
                <li><strong>Malý (do 1 500 cm²):</strong> Pro 2–4 osoby, balkon, cestování. Kompaktní a skladný.</li>
                <li><strong>Střední (1 500–3 000 cm²):</strong> Pro rodinu 4–6 osob. Nejčastější volba pro zahradu.</li>
                <li><strong>Velký (nad 3 000 cm²):</strong> Pro větší skupiny, časté grilování, catering. Většinou plynový nebo pelletový.</li>
                <li><strong>Nepodceňuj vedlejší plochy:</strong> Odkládací police vedle grilu jsou velmi praktické — bez nich odkládáš maso a nářadí na zem.</li>
              </ul>
            </section>

            <section id="materialy">
              <h2>Materiály a kvalita provedení</h2>
              <ul>
                <li><strong>Rošt:</strong> Litinový rošt nejlépe drží teplotu a vytváří pěkné pruhy. Nerezový rošt je snadno čistitelný. Chromovaný rošt nejlevnější ale nejméně odolný.</li>
                <li><strong>Kryt grilu:</strong> Tlustostěnný kryt (ocel min. 1,5 mm) lépe drží teplotu. Weber a podobní výrobci mají typicky 1,5–2 mm. Levné grily mají 0,8–1 mm.</li>
                <li><strong>Plynový gril — hořáky:</strong> Nerezové hořáky vydrží 10–15 let. Litinové hořáky 5–10 let. Ocelové hořáky jen 2–5 let — u levných grilů.</li>
                <li><strong>Kolečka a stabilita:</strong> Gril musí být stabilní i na nerovném terénu. Uzamykatelná kolečka jsou důležitá pro bezpečnost.</li>
              </ul>
              <div className="article-tip"><strong>💡 Investuj do kvality:</strong> Levný gril za 1 000 Kč vydrží 2–3 sezóny. Kvalitní gril za 5 000–15 000 Kč vydrží 10–15 let. Dlouhodobě je kvalitnější gril levnější.</div>
            </section>

            <section id="udrzba">
              <h2>Čistění a údržba grilu</h2>
              <ul>
                <li><strong>Po každém grilování:</strong> Rošt vyčistit drátěným kartáčem za tepla (snazší odstraňování zbytků). Popelník u uhlíkového grilu vysypat po vychladnutí.</li>
                <li><strong>Každou sezónu:</strong> Hluboké čistění celého grilu — vnitřek, hořáky, rošty. Odmastit speciálním čističem.</li>
                <li><strong>Zimní uskladnění:</strong> Vyčistit, vysušit a přikrýt krytem. Plynový gril odpojit od lahve a uložit ventil dolů. Uhlíkový gril uskladnit v suchu.</li>
                <li><strong>Litinový rošt:</strong> Po mytí vždy vymazat tenkým filmem kuchyňského oleje — zabrání rezavění.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Mohu grilovat na balkoně?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Elektrický gril na balkoně je ve většině případů povolen — bez kouře a otevřeného ohně. Uhlíkový gril na balkoně je ve většině bytových domů zakázán a navíc nebezpečný (CO, požár). Plynový gril na balkoně — zkontroluj domovní řád. Vždy informuj sousedy a buď ohleduplný ke kouři.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Uhlíkový nebo plynový – co si vybrat?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Uhlíkový: lepší chuť, nižší cena, ale více práce s rozpalem a čistěním. Plynový: rychlý start, snadné čistění, přesná regulace, ale dražší a chuť o trochu horší. Pokud grilujete 1–2× měsíčně v létě a máte čas — uhlíkový. Pokud grilujete každý víkend nebo během týdne — plynový za jeho pohodlnost se vyplatí.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak bezpečně skladovat propanbutanovou lahev?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Vždy venku nebo v dobře větraném prostoru — nikdy ve skladu nebo garáži bez ventilace. Plyny jsou těžší než vzduch a hromadí se u podlahy. Lahev uchovej stojatě, mimo dosah tepla a slunce. Uzavři ventil lahve po každém grilování. Nikdy neskladuj lahev v uzavřeném automobilu.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/vybrat-zahradni-gril" title="Jak vybrat zahradní gril – plynový nebo uhlíkový" />

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
                <li><a href="#typy">Typy grilů</a></li>
                <li><a href="#velikost">Jakou velikost</a></li>
                <li><a href="#materialy">Materiály a kvalita</a></li>
                <li><a href="#udrzba">Čistění a údržba</a></li>
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
