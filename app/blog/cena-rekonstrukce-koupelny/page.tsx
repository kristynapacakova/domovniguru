import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Kolik stojí rekonstrukce koupelny – ceny 2026",
  description: "Průměrné ceny rekonstrukce koupelny v roce 2026. Materiál, práce, sanitární vybavení – co ovlivňuje cenu a jak ušetřit bez kompromisů na kvalitě.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/cena-rekonstrukce-koupelny" },
  openGraph: { title: "Kolik stojí rekonstrukce koupelny 2026", description: "Průměrné ceny rekonstrukce koupelny – materiál, práce a sanitární vybavení.", url: "https://www.domovniguru.cz/blog/cena-rekonstrukce-koupelny", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-15T08:00:00Z", modifiedTime: "2026-04-15T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Kolik stojí rekonstrukce koupelny 2026", description: "Průměrné ceny rekonstrukce koupelny – materiál, práce a vybavení." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/cena-rekonstrukce-koupelny#article",
    "headline": "Kolik stojí rekonstrukce koupelny – ceny 2026",
    "datePublished": "2026-04-15T08:00:00Z",
    "dateModified": "2026-04-15T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["kolik stojí rekonstrukce koupelny", "cena rekonstrukce koupelny 2026", "rekonstrukce koupelny cena práce", "obklady koupelna cena", "sanitární vybavení cena"]
  }]
};

const RELATED = [
  { title: "Jak naplánovat rekonstrukci bytu", href: "/blog/planovani-rekonstrukce-bytu", read: "8 min" },
  { title: "Jak odhadnout cenu rekonstrukce předem", href: "/blog/odhadnout-cenu-rekonstrukce", read: "5 min" },
  { title: "Jak se zbavit vlhkosti v bytě", href: "/blog/zbavit-se-vlhkosti-v-byte", read: "7 min" },
  { title: "Jak se zbavit plísně v bytě jednou provždy", href: "/blog/jak-odstranit-plisen-na-zdi", read: "10 min" },
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
              <Link href="/blog/kategorie/stehovani">Stěhování & rekonstrukce</Link><span className="breadcrumb-sep">/</span>
              <span>Cena rekonstrukce koupelny</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏠 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Kolik stojí rekonstrukce koupelny – ceny 2026</h1>
              <p className="article-lead">Rekonstrukce koupelny je jedna z nejdražších investic do bytu — a zároveň jedna z nejvíce se vracejících. Tady jsou realistické ceny pro rok 2026 a kde lze ušetřit bez kompromisů na kvalitě.</p>
              <div className="article-meta-row"><span>Aktualizováno: 15. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/cena-rekonstrukce-koupelny" title="Kolik stojí rekonstrukce koupelny – ceny 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="200" fill="#f8f6f2"/>
                <text x="380" y="22" textAnchor="middle" fontSize="10" fill="#6a6050" fontWeight="700" letterSpacing="0.04em">ORIENTAČNÍ CENY REKONSTRUKCE KOUPELNY 6 m² (2026)</text>

                {/* Sloupcový graf */}
                {[
                  { label:"Bourání\na odvoz", value:15, color:"#e07a5f", price:"15 000" },
                  { label:"Instalace\nvoda/odpady", value:25, color:"#f59e0b", price:"25 000" },
                  { label:"Obklady\na dlažba", value:30, color:"#4a90d9", price:"30 000" },
                  { label:"Sanitární\nvybavení", value:35, color:"#9b6fd4", price:"35 000" },
                  { label:"Elektro\na osvětlení", value:10, color:"#5a9e6f", price:"10 000" },
                  { label:"Malování\na dokončení", value:8, color:"#8B6340", price:"8 000" },
                ].map(({label, value, color, price}, i) => {
                  const x = 40 + i * 115;
                  const barH = value * 3;
                  const y = 155 - barH;
                  return (
                    <g key={i}>
                      <rect x={x} y={y} width="80" height={barH} rx="4" fill={color} opacity="0.8"/>
                      <text x={x+40} y={y-6} textAnchor="middle" fontSize="9" fill={color} fontWeight="700">{price} Kč</text>
                      {label.split('\n').map((line, li) => (
                        <text key={li} x={x+40} y={165+li*13} textAnchor="middle" fontSize="8" fill="#6a6050">{line}</text>
                      ))}
                    </g>
                  );
                })}

                {/* Celkem */}
                <line x1="30" y1="158" x2="730" y2="158" stroke="#e0d8d0" strokeWidth="0.8"/>
                <rect x="270" y="170" width="220" height="22" rx="6" fill="#5a9e6f" opacity="0.12" stroke="#5a9e6f" strokeWidth="1"/>
                <text x="380" y="185" textAnchor="middle" fontSize="10" fill="#3a7e4f" fontWeight="700">CELKEM: ~123 000 Kč (průměr)</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#celkove">Celkové náklady – tři scénáře</a></li>
                <li><a href="#prace">Ceny práce podle profese</a></li>
                <li><a href="#material">Ceny materiálu</a></li>
                <li><a href="#sanitarka">Sanitární vybavení</a></li>
                <li><a href="#usporit">Kde ušetřit</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="celkove">
              <h2>Celkové náklady – tři scénáře</h2>
              <p>Cena rekonstrukce koupelny závisí především na velikosti, kvalitě materiálů a rozsahu prací. Pro koupelnu 6–8 m² počítej s těmito rozsahy:</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Scénář</th><th>Celková cena (6–8 m²)</th><th>Co zahrnuje</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Ekonomická rekonstrukce</strong></td><td>80 000–120 000 Kč</td><td>Standardní obklady, základní sanitární vybavení, bez přesunu rozvodů</td></tr>
                    <tr><td><strong>Střední standard</strong></td><td>120 000–200 000 Kč</td><td>Kvalitnější obklady, nová sanitární keramika, nové rozvody</td></tr>
                    <tr><td><strong>Prémiová rekonstrukce</strong></td><td>200 000–400 000+ Kč</td><td>Designové obklady, prémiová sanitárka, podlahové topení, walk-in sprcha</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Pozor na Prahu:</strong> Ceny práce v Praze a velkých městech jsou o 20–40 % vyšší než v regionech. Materiál je cenově srovnatelný všude.</div>
            </section>

            <section id="prace">
              <h2>Ceny práce podle profese</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Profese / práce</th><th>Hodinová sazba</th><th>Typická cena za koupelnu 6 m²</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Bourání a demolice</strong></td><td>300–500 Kč/hod</td><td>5 000–15 000 Kč</td></tr>
                    <tr><td><strong>Instalatér (rozvody)</strong></td><td>600–1 200 Kč/hod</td><td>15 000–35 000 Kč</td></tr>
                    <tr><td><strong>Obkladač</strong></td><td>400–700 Kč/m²</td><td>15 000–30 000 Kč (práce)</td></tr>
                    <tr><td><strong>Elektrikář</strong></td><td>600–1 000 Kč/hod</td><td>5 000–15 000 Kč</td></tr>
                    <tr><td><strong>Malíř / štukátor</strong></td><td>150–300 Kč/m²</td><td>2 000–6 000 Kč</td></tr>
                    <tr><td><strong>Odvoz suti (kontejner)</strong></td><td>—</td><td>3 000–6 000 Kč</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="material">
              <h2>Ceny materiálu</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Materiál</th><th>Ekonomická volba</th><th>Střední standard</th><th>Prémiová volba</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Obklady (m²)</strong></td><td>200–500 Kč</td><td>500–1 500 Kč</td><td>1 500–5 000+ Kč</td></tr>
                    <tr><td><strong>Dlažba (m²)</strong></td><td>200–600 Kč</td><td>600–1 500 Kč</td><td>1 500–4 000+ Kč</td></tr>
                    <tr><td><strong>Lepidlo a spárovačka</strong></td><td>—</td><td>150–300 Kč/m²</td><td>—</td></tr>
                    <tr><td><strong>Hydroizolace</strong></td><td>—</td><td>200–500 Kč/m²</td><td>—</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="sanitarka">
              <h2>Sanitární vybavení – co a za kolik</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Vybavení</th><th>Ekonomická volba</th><th>Střední standard</th><th>Prémiová volba</th></tr></thead>
                  <tbody>
                    <tr><td><strong>WC kombi</strong></td><td>2 000–4 000 Kč</td><td>4 000–10 000 Kč</td><td>10 000–30 000 Kč</td></tr>
                    <tr><td><strong>Sprchový kout</strong></td><td>5 000–10 000 Kč</td><td>10 000–25 000 Kč</td><td>25 000–80 000+ Kč</td></tr>
                    <tr><td><strong>Vana</strong></td><td>3 000–8 000 Kč</td><td>8 000–20 000 Kč</td><td>20 000–60 000+ Kč</td></tr>
                    <tr><td><strong>Umyvadlo</strong></td><td>1 500–3 000 Kč</td><td>3 000–8 000 Kč</td><td>8 000–25 000+ Kč</td></tr>
                    <tr><td><strong>Baterie (sada)</strong></td><td>2 000–5 000 Kč</td><td>5 000–15 000 Kč</td><td>15 000–50 000+ Kč</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="usporit">
              <h2>Kde ušetřit bez kompromisů na kvalitě</h2>
              <ul>
                <li><strong>Zachovej rozmístění rozvodů:</strong> Přesunutí WC nebo sprchy na jiné místo zdražuje instalatérské práce o 20 000–50 000 Kč. Pokud to není nutné, zachovej stávající rozmístění.</li>
                <li><strong>Obklady z výprodeje nebo přebytků:</strong> Stavební prodejny mají výprodejní sklady s plně funkčními obklady za zlomek ceny. Nutné koupit najednou (nestejné šarže se liší odstínem).</li>
                <li><strong>Standardní sanitárka dobré značky:</strong> Roca, Jika, Laufen střední řady jsou kvalitní a trvanlivé za výrazně nižší cenu než prémiové značky.</li>
                <li><strong>Čtvercové obklady bez vzoru:</strong> Obklady s výrazným vzorem nebo formátem vyžadují více práce při kladení (sladění vzoru) — vyšší cena práce.</li>
                <li><strong>Část prací svépomocí:</strong> Bourání, malování a finální úklid zvládneš sám — ušetříš 10 000–30 000 Kč na práci.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Jak dlouho trvá rekonstrukce koupelny?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Standardní rekonstrukce koupelny 6–8 m² trvá 3–6 týdnů. Závisí na rozsahu prací, dostupnosti řemeslníků a složitosti instalací. Počítej s tím že bude koupelna 3–5 týdnů nedostupná — zajisti si přístup k jiné koupelně.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Vyplatí se rekonstrukce koupelny při prodeji bytu?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ano — nová koupelna zvyšuje hodnotu bytu a urychluje prodej. Ekonomická rekonstrukce (100 000–150 000 Kč) se při prodeji vrátí v ceně o 150 000–250 000 Kč. Prémiová rekonstrukce se nemusí plně vrátit — záleží na lokalitě a trhu.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Potřebuji hydroizolaci pod obklady?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ano — hydroizolace pod obklady je nutná v mokrých zónách (sprchový kout, vana, oblast kolem umyvadla). Bez hydroizolace voda pronikne pod obklady a způsobí vlhkost, plíseň a případně poškození stropů sousedů. Cena hydroizolace je 200–500 Kč/m² — vyplatí se vždy.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/cena-rekonstrukce-koupelny" title="Kolik stojí rekonstrukce koupelny – ceny 2026" />

            <section className="related-section">
              <h2>Související články</h2>
              <div className="related-grid">
                {RELATED.map((r) => (
                  <Link key={r.href} href={r.href} className="card">
                    <div className="card-eyebrow-row"><span>Stěhování & rekonstrukce</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#celkove">Celkové náklady</a></li>
                <li><a href="#prace">Ceny práce</a></li>
                <li><a href="#material">Ceny materiálu</a></li>
                <li><a href="#sanitarka">Sanitární vybavení</a></li>
                <li><a href="#usporit">Kde ušetřit</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/stehovani" className="sidebar-cat-link">🏠 Stěhování & rekonstrukce<span>20 článků →</span></Link>
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
        .article-table-wrap{overflow-x:auto;margin:16px 0 24px}
        .article-table{width:100%;border-collapse:collapse;font-size:14px;line-height:1.5}
        .article-table th{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);padding:10px 14px;text-align:left;border-bottom:2px solid var(--border);background:var(--surface)}
        .article-table td{padding:10px 14px;border-bottom:1px solid var(--border);vertical-align:top;color:#2a2a28;font-weight:300}
        .article-table tr:last-child td{border-bottom:none}
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
