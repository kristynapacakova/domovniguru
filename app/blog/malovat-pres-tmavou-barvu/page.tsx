import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak malovat přes tmavou barvu na světlo – bez šmouh 2025",
  description: "Tmavá zeď pod světlou barvou? Bez správného postupu budou šmouhy. Tady je jak to vyřešit napoprvé.",
  alternates: { canonical: "https://domovniguru.cz/blog/malovat-pres-tmavou-barvu" },
  openGraph: { title: "Jak malovat přes tmavou barvu na světlo", description: "Penetrace, základní nátěr nebo víc vrstev? Správný postup.", url: "https://domovniguru.cz/blog/malovat-pres-tmavou-barvu", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2025-02-15T08:00:00Z", modifiedTime: "2025-03-01T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak malovat přes tmavou barvu na světlo", description: "Penetrace, základní nátěr nebo víc vrstev?" },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://domovniguru.cz/blog/malovat-pres-tmavou-barvu#article", "headline": "Jak malovat přes tmavou barvu na světlo", "datePublished": "2025-02-15T08:00:00Z", "dateModified": "2025-03-01T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "inLanguage": "cs", "keywords": ["malovat přes tmavou barvu", "přemalovat tmavou zeď", "světlá barva přes tmavou", "zakrývací základní nátěr"] }] };

const RELATED = [
  { title: "Jak malovat zeď – průvodce pro začátečníky", href: "/blog/jak-malovat-zed", read: "5 min" },
  { title: "Penetrace před malováním – kdy je nutná?", href: "/blog/penetrace-pred-malovanim", read: "4 min" },
  { title: "Jak odstranit starou barvu ze zdi", href: "/blog/jak-odstranit-starou-barvu", read: "4 min" },
  { title: "Kolik barvy potřebuji? Kalkulačka + vzorec", href: "/blog/kolik-barvy-potrebuji", read: "3 min" },
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
              <Link href="/blog/kategorie/malovani">Malování & barvy</Link><span className="breadcrumb-sep">/</span>
              <span>Malovat přes tmavou barvu</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování & barvy</Link>
                <span className="article-read-time">⏱ 3 min čtení</span>
              </div>
              <h1 className="article-h1">Jak malovat přes tmavou barvu na světlo</h1>
              <p className="article-lead">Jedna vrstva bílé přes tmavě modrou zeď? Skončíš s nerovnoměrnou šedavou plochou. S správným postupem to ale zvládneš čistě a bez zbytečných vrstev.</p>
              <div className="article-meta-row"><span>Aktualizováno: 1. března 2025</span><span>·</span><span>DomovniGuru</span></div>
            </header>

            {/* HERO ILLUSTRATION */}
            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 210" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="210" fill="#fdf8f2"/>

                {/* === LEVÁ TŘETINA: tmavá zeď === */}
                <rect x="30" y="25" width="190" height="150" rx="6" fill="#3a4a6a"/>
                {/* Jemná cihlová textura */}
                {[50,75,100,125,150].map((y,i)=><line key={i} x1="30" y1={y} x2="220" y2={y} stroke="#2e3d58" strokeWidth="0.8"/>)}
                {[80,130,180].map((x,i)=><line key={i} x1={x} y1="25" x2={x} y2="175" stroke="#2e3d58" strokeWidth="0.8"/>)}
                {/* Kapky vlhkosti / šmouhy */}
                <path d="M70 40 Q72 60 70 80" stroke="#2a3a5a" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
                <path d="M150 50 Q152 70 150 95" stroke="#2a3a5a" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
                {/* Popisek */}
                <rect x="50" y="155" width="120" height="22" rx="4" fill="#2a3a5a" opacity="0.5"/>
                <text x="110" y="170" fontFamily="var(--font-sans,sans-serif)" fontSize="9" fill="#a0b4d0" textAnchor="middle" letterSpacing="0.06em">TMAVÁ ZEĎ</text>
                <text x="125" y="198" fontFamily="var(--font-sans,sans-serif)" fontSize="8" fill="#c8b89a" textAnchor="middle" letterSpacing="0.10em">PŘED</text>

                {/* === STŘED: základní nátěr === */}
                {/* Váleček — hezky nakreslený */}
                <g transform="translate(310, 20)">
                  {/* Tyč */}
                  <rect x="64" y="0" width="6" height="50" rx="3" fill="#c8a97a"/>
                  {/* Ohnutí */}
                  <path d="M67 48 Q67 68 47 68" stroke="#c8a97a" strokeWidth="5" fill="none" strokeLinecap="round"/>
                  {/* Váleček tělo */}
                  <rect x="10" y="60" width="74" height="28" rx="10" fill="#e8e0d4"/>
                  <rect x="10" y="60" width="74" height="28" rx="10" fill="none" stroke="#c8b89a" strokeWidth="1.5"/>
                  {/* Barva na válečku — šedý základ */}
                  <rect x="12" y="62" width="70" height="24" rx="9" fill="#9a9a9a" opacity="0.45"/>
                  {/* Zeď pod válečkem — přechod tmavá→šedá→bílá */}
                  <rect x="0" y="96" width="94" height="80" rx="4" fill="#3a4a6a"/>
                  <rect x="0" y="96" width="94" height="40" rx="0" fill="#8a8a8a" opacity="0.75"/>
                  <rect x="0" y="96" width="94" height="20" rx="0" fill="#c8c8c8" opacity="0.6"/>
                  <rect x="0" y="96" width="94" height="80" rx="4" fill="none" stroke="#c8b89a" strokeWidth="1.5"/>
                  {/* Popisek */}
                  <rect x="4" y="158" width="86" height="18" rx="4" fill="#c8b89a" opacity="0.2"/>
                  <text x="47" y="170" fontFamily="var(--font-sans,sans-serif)" fontSize="8" fill="#9a8a7a" textAnchor="middle" letterSpacing="0.06em">ZÁKLADNÍ NÁTĚR</text>
                </g>
                <text x="357" y="198" fontFamily="var(--font-sans,sans-serif)" fontSize="8" fill="#c8b89a" textAnchor="middle" letterSpacing="0.10em">PŘÍPRAVA</text>

                {/* === PRAVÁ TŘETINA: světlá čistá zeď === */}
                <rect x="540" y="25" width="190" height="150" rx="6" fill="#f5f0e8"/>
                <rect x="540" y="25" width="190" height="150" rx="6" fill="none" stroke="#e0d8cc" strokeWidth="1.5"/>
                {/* Jemná textura světlé zdi */}
                {[55,85,115,145].map((y,i)=><line key={i} x1="540" y1={y} x2="730" y2={y} stroke="#e8e0d4" strokeWidth="0.5" opacity="0.6"/>)}
                {/* Zelená fajfka */}
                <circle cx="635" cy="100" r="30" fill="none" stroke="#5a9e6f" strokeWidth="2" opacity="0.35"/>
                <path d="M620 100 L631 111 L651 86" stroke="#5a9e6f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                {/* Popisek */}
                <rect x="570" y="155" width="120" height="22" rx="4" fill="#5a9e6f" opacity="0.15"/>
                <text x="630" y="170" fontFamily="var(--font-sans,sans-serif)" fontSize="9" fill="#5a9e6f" textAnchor="middle" letterSpacing="0.06em">ČISTÝ VÝSLEDEK</text>
                <text x="635" y="198" fontFamily="var(--font-sans,sans-serif)" fontSize="8" fill="#c8b89a" textAnchor="middle" letterSpacing="0.10em">PO</text>

                {/* Šipky */}
                <path d="M224 100 L304 100" stroke="#c8b89a" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M299 95 L305 100 L299 105" stroke="#c8b89a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M410 100 L533 100" stroke="#c8b89a" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M528 95 L534 100 L528 105" stroke="#c8b89a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#proc-problem">Proč je to problém</a></li>
                <li><a href="#moznosti">Tři způsoby jak na to</a></li>
                <li><a href="#postup">Postup krok za krokem</a></li>
                <li><a href="#kolik-vrstev">Kolik vrstev potřebuješ</a></li>
                <li><a href="#chyby">Nejčastější chyby</a></li>
              </ol>
            </nav>

            <section id="proc-problem">
              <h2>Proč je to problém</h2>
              <p>Světlá barva je průsvitnější než tmavá — pigment nestačí zakrýt podklad pod ním. Výsledkem jsou šmouhy, nerovnoměrná kryvost a zeď která na světle vypadá šedavě nebo flekatě.</p>
              <p>Čím větší kontrast (tmavě modrá → bílá), tím víc vrstev budeš potřebovat bez přípravy. V praxi to může být i 4–5 vrstev — a každá dál zhoršuje texturu zdi.</p>
            </section>

            <section id="moznosti">
              <h2>Tři způsoby jak na to</h2>
              <h3>1. Základní zakrývací nátěr (nejlepší volba)</h3>
              <p>Speciální <strong>základní nátěr s vysokou kryvostí</strong> (tzv. primer nebo zakrývací základ) obsahuje více pigmentu než běžná barva. Jedna vrstva základu + jedna až dvě vrstvy finální barvy = čistý výsledek.</p>
              <h3>2. Více vrstev finální barvy</h3>
              <p>Bez základu budeš potřebovat 3–4 vrstvy kvalitní barvy. Funguje, ale je to pomalejší a dražší než základ. Každá vrstva musí být suchá (min. 4 hodiny) před nanášením další.</p>
              <h3>3. Sejmutí staré barvy</h3>
              <p>Nejradikálnější varianta — škrabka nebo teplovzdušná pistole. Doporučuje se jen pokud je stará barva silná, loupe se nebo je povrch jinak problematický. Více v článku <Link href="/blog/jak-odstranit-starou-barvu">jak odstranit starou barvu</Link>.</p>
              <div className="article-tip"><strong>💡 Doporučení:</strong> Základní nátěr je nejúspornější řešení. Jeden litr zakrývacího základu stojí 150–300 Kč a ušetří ti 2–3 vrstvy finální barvy.</div>
            </section>

            <section id="postup">
              <h2>Postup krok za krokem</h2>
              <ul>
                <li><strong>Krok 1 – Příprava povrchu:</strong> Zeď musí být suchá, čistá a bez odlupující se barvy. Odloupané části přebroušíme jemným brusným papírem (P120).</li>
                <li><strong>Krok 2 – Základní nátěr:</strong> Nanes vrstvu zakrývacího základu válečkem. Světle šedý základ funguje nejlépe jako přechod mezi tmavou a světlou barvou. Nech schnout dle návodu (obvykle 2–4 hodiny).</li>
                <li><strong>Krok 3 – První vrstva finální barvy:</strong> Po zaschnutí základu nanes první vrstvu cílové barvy. Nec schnout min. 4 hodiny.</li>
                <li><strong>Krok 4 – Druhá vrstva:</strong> Ve většině případů stačí dvě vrstvy finální barvy pro dokonalé zakrytí. Pokud tmavý podklad stále prosvítá, přidej třetí vrstvu.</li>
              </ul>
            </section>

            <section id="kolik-vrstev">
              <h2>Kolik vrstev potřebuješ</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Situace</th><th>Doporučený postup</th><th>Celkem vrstev</th></tr></thead>
                  <tbody>
                    <tr><td>Tmavá → světlá (se základem)</td><td>1× zakrývací základ + 2× finální barva</td><td>3 vrstvy</td></tr>
                    <tr><td>Tmavá → světlá (bez základu)</td><td>3–4× finální barva s vysokou kryvostí</td><td>3–4 vrstvy</td></tr>
                    <tr><td>Středně tmavá → bílá</td><td>1× základ + 1–2× finální barva</td><td>2–3 vrstvy</td></tr>
                    <tr><td>Sytá barva → jiná sytá barva</td><td>1–2× finální barva (základ není nutný)</td><td>1–2 vrstvy</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="chyby">
              <h2>Nejčastější chyby</h2>
              <ul>
                <li><strong>Nanášení příliš silné vrstvy</strong> — silná vrstva nezkryje víc, ale pomaleji schne a může tvořit kaluže a stékat</li>
                <li><strong>Malování před zaschnutím</strong> — každá vrstva musí být suchá, jinak se barvy mísí a výsledek je flekatý</li>
                <li><strong>Levná barva s nízkou kryvostí</strong> — úspora na barvě znamená víc vrstev; u tmavých podkladů se to nevyplatí</li>
                <li><strong>Přeskočení základu</strong> — na velmi tmavé podklady (černá, tmavě modrá) je základ prakticky nutností</li>
                <li><strong>Nanášení za studena nebo vlhka</strong> — barva potřebuje min. 10 °C a relativní vlhkost pod 80 %</li>
              </ul>
            </section>

            <section className="related-section">
              <h2>Související články</h2>
              <div className="related-grid">
                {RELATED.map((r) => (
                  <Link key={r.href} href={r.href} className="card">
                    <div className="card-eyebrow-row"><span>Malování & barvy</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#proc-problem">Proč je to problém</a></li>
                <li><a href="#moznosti">Tři způsoby</a></li>
                <li><a href="#postup">Postup</a></li>
                <li><a href="#kolik-vrstev">Kolik vrstev</a></li>
                <li><a href="#chyby">Nejčastější chyby</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/malovani" className="sidebar-cat-link">🎨 Malování & barvy<span>20 článků →</span></Link>
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
        .article-body h3{font-family:var(--font-sans);font-size:16px;font-weight:600;margin-top:24px;margin-bottom:10px;color:var(--text)}
        .article-body p{font-size:16px;line-height:1.75;color:#2a2a28;font-weight:300;margin-bottom:14px}
        .article-body ul,.article-body ol{padding-left:22px;margin-bottom:16px;display:flex;flex-direction:column;gap:8px}
        .article-body li{font-size:15px;line-height:1.6;color:#2a2a28;font-weight:300}
        .article-body strong{font-weight:600;color:var(--text)}
        .article-tip{background:#fffbeb;border-left:3px solid #f59e0b;border-radius:0 8px 8px 0;padding:14px 18px;font-size:14px;line-height:1.6;color:#78716c;margin:20px 0}
        .article-table-wrap{overflow-x:auto;margin:16px 0 24px}
        .article-table{width:100%;border-collapse:collapse;font-size:14px;line-height:1.5}
        .article-table th{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);padding:10px 14px;text-align:left;border-bottom:2px solid var(--border);background:var(--surface)}
        .article-table td{padding:10px 14px;border-bottom:1px solid var(--border);vertical-align:top;color:#2a2a28;font-weight:300}
        .article-table tr:last-child td{border-bottom:none}
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
