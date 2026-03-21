import type { Metadata } from "next";
import Link from "next/link";
import PaintCalculator from "@/app/components/PaintCalculator";
<PaintCalculator />
export const metadata: Metadata = {
  title: "Jak malovat rohy a lišty bez přetahování – čistý výsledek 2025",
  description: "Technika štětcem, malířská páska a správný postup. Rohy a lišty bez šmouh jako od profesionála.",
  alternates: { canonical: "https://domovniguru.cz/blog/jak-malovat-rohy-a-listy" },
  openGraph: { title: "Jak malovat rohy a lišty bez přetahování", description: "Technika štětcem, malířská páska a správný postup.", url: "https://domovniguru.cz/blog/jak-malovat-rohy-a-listy", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2025-02-18T08:00:00Z", modifiedTime: "2025-03-01T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak malovat rohy a lišty bez přetahování", description: "Technika štětcem, malířská páska a správný postup." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://domovniguru.cz/blog/jak-malovat-rohy-a-listy#article", "headline": "Jak malovat rohy a lišty bez přetahování", "datePublished": "2025-02-18T08:00:00Z", "dateModified": "2025-03-01T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "inLanguage": "cs", "keywords": ["jak malovat rohy", "malovat lišty", "malířská páska postup", "čisté rohy při malování"] }] };

const RELATED = [
  { title: "Jak malovat zeď – průvodce pro začátečníky", href: "/blog/jak-malovat-zed", read: "5 min" },
  { title: "Jak malovat přes tmavou barvu na světlo", href: "/blog/malovat-pres-tmavou-barvu", read: "3 min" },
  { title: "Kolik barvy potřebuji? Kalkulačka + vzorec", href: "/blog/kolik-barvy-potrebuji", read: "3 min" },
  { title: "Penetrace před malováním – kdy je nutná?", href: "/blog/penetrace-pred-malovanim", read: "4 min" },
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
              <span>Malovat rohy a lišty</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování & barvy</Link>
                <span className="article-read-time">⏱ 3 min čtení</span>
              </div>
              <h1 className="article-h1">Jak malovat rohy a lišty bez přetahování</h1>
              <p className="article-lead">Rohy a lišty jsou místa kde se pozná zkušený malíř od začátečníka. S malířskou páskou a správnou technikou ale čistý výsledek zvládne každý.</p>
              <div className="article-meta-row"><span>Aktualizováno: 1. března 2025</span><span>·</span><span>DomovniGuru</span></div>
            </header>

            {/* HERO ILLUSTRATION */}
            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="180" fill="#fdf8f2"/>

                {/* === 1. ROH ŠPATNĚ — přetažená barva === */}
                <g transform="translate(30, 20)">
                  {/* Zeď vlevo — béžová */}
                  <rect x="0" y="0" width="80" height="140" rx="0" fill="#f0ece6"/>
                  {/* Zeď vpravo — bílá */}
                  <rect x="80" y="0" width="80" height="140" rx="0" fill="#fafaf8"/>
                  {/* Roh — přeteklá barva */}
                  <path d="M72 0 L88 0 L88 140 L72 140 Z" fill="#e07a5f" opacity="0.35"/>
                  <path d="M76 0 L84 0 L84 140 L76 140 Z" fill="#e07a5f" opacity="0.25"/>
                  {/* Rámeček */}
                  <rect x="0" y="0" width="160" height="140" fill="none" stroke="#e0d8cc" strokeWidth="1.5" rx="4"/>
                  {/* Křížek — špatně */}
                  <circle cx="138" cy="18" r="10" fill="#e07a5f" opacity="0.2"/>
                  <path d="M132 12 L144 24 M144 12 L132 24" stroke="#e07a5f" strokeWidth="2" strokeLinecap="round"/>
                </g>

                {/* === 2. MALÍŘSKÁ PÁSKA === */}
                <g transform="translate(250, 20)">
                  <rect x="0" y="0" width="160" height="140" fill="none" stroke="#e0d8cc" strokeWidth="1.5" rx="4"/>
                  <rect x="0" y="0" width="80" height="140" fill="#f0ece6"/>
                  <rect x="80" y="0" width="80" height="140" fill="#fafaf8"/>
                  {/* Malířská páska — žlutá */}
                  <rect x="74" y="0" width="12" height="140" fill="#f4c842" opacity="0.7"/>
                  <rect x="74" y="0" width="12" height="140" fill="none" stroke="#e4b832" strokeWidth="1" opacity="0.5"/>
                  {/* Textura pásky */}
                  {[10,25,40,55,70,85,100,115,130].map((y,i)=>(
                    <line key={i} x1="74" y1={y} x2="86" y2={y} stroke="#e4b832" strokeWidth="0.5" opacity="0.4"/>
                  ))}
                  {/* Štětec */}
                  <g transform="translate(95, 30)">
                    <rect x="8" y="0" width="14" height="40" rx="2" fill="#c8a97a"/>
                    <path d="M8 38 L4 55 L22 55 L18 38 Z" fill="#1a1814" opacity="0.7"/>
                    <path d="M6 52 L4 60 L22 60 L20 52 Z" fill="#3a4a6a" opacity="0.5"/>
                  </g>
                </g>

                {/* === 3. VÝSLEDEK — čistý roh === */}
                <g transform="translate(470, 20)">
                  <rect x="0" y="0" width="80" height="140" fill="#f0ece6"/>
                  <rect x="80" y="0" width="80" height="140" fill="#fafaf8"/>
                  {/* Čistá linie rohu */}
                  <line x1="80" y1="0" x2="80" y2="140" stroke="#d4c8b8" strokeWidth="2"/>
                  {/* Rámeček */}
                  <rect x="0" y="0" width="160" height="140" fill="none" stroke="#e0d8cc" strokeWidth="1.5" rx="4"/>
                  {/* Fajfka */}
                  <circle cx="138" cy="18" r="10" fill="#5a9e6f" opacity="0.15"/>
                  <path d="M132 18 L136 22 L144 13" stroke="#5a9e6f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </g>

                {/* Šipky */}
                <path d="M198 90 L243 90" stroke="#c8b89a" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M239 85 L245 90 L239 95" stroke="#c8b89a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M418 90 L463 90" stroke="#c8b89a" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M459 85 L465 90 L459 95" stroke="#c8b89a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
              <div style={{display:"flex",justifyContent:"space-around",padding:"8px 30px 12px",fontSize:"9px",letterSpacing:"0.1em",color:"#c8b89a",textTransform:"uppercase"}}>
                <span style={{width:"160px",textAlign:"center"}}>Přetažená barva</span>
                <span style={{width:"160px",textAlign:"center"}}>Malířská páska</span>
                <span style={{width:"160px",textAlign:"center"}}>Čistý výsledek</span>
              </div>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#malovani-paska">Postup s malířskou páskou</a></li>
                <li><a href="#technika-stetcem">Technika bez pásky – jen štětcem</a></li>
                <li><a href="#listy">Jak malovat lišty a rámy</a></li>
                <li><a href="#poradi">Správné pořadí prací</a></li>
                <li><a href="#chyby">Nejčastější chyby</a></li>
              </ol>
            </nav>

            <section id="malovani-paska">
              <h2>Postup s malířskou páskou</h2>
              <p>Malířská páska je nejspolehlivější způsob jak docílit čistých přechodů. Správná aplikace pásky je ale důležitá — špatně nalepená páska způsobí podtečení barvy a výsledek bude horší než bez pásky.</p>
              <ul>
                <li><strong>Krok 1 – Nanes pásku:</strong> Lep pásku přesně podél hrany — okraj pásky musí být na místě kde chceš mít čistou linii. Přitlač okraj pásky prstem nebo špachtlí aby dobře přilnul.</li>
                <li><strong>Krok 2 – Zamaluj okraj pásky:</strong> Tenkým štětcem přejeď přes okraj pásky barvou která je pod ní (původní barva). Tím utěsníš pásku a zabrání se podtečení.</li>
                <li><strong>Krok 3 – Nanes novou barvu:</strong> Maluj od pásky směrem ven — nikdy nepřijíždíme štětcem směrem k pásce, ale od ní.</li>
                <li><strong>Krok 4 – Sundej pásku:</strong> Sundávej pásku ještě za mokra nebo těsně po zaschnutí — ne po úplném vytvrdnutí barvy. Tahem pod úhlem 45° pomalu a plynule.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Levná malířská páska podtéká. Investuj do kvalitní pásky (3M, Tesa) — rozdíl je znát. Modrá páska je lepší než žlutá na hladké povrchy.</div>
            </section>

            <section id="technika-stetcem">
              <h2>Technika bez pásky – jen štětcem</h2>
              <p>Zkušení malíři pásku vůbec nepoužívají — malují rohy přímo štětcem technikou zvanou <strong>cutting in</strong>. Vyžaduje praxi, ale je rychlejší a výsledek může být stejně čistý.</p>
              <ul>
                <li>Použij kvalitní šikmý štětec (angled brush) šíře 5–6 cm</li>
                <li>Naber malé množství barvy — štětec nesmí být přeplněný</li>
                <li>Prvním tahem vytvoř linii 2–3 cm od rohu</li>
                <li>Druhým tahem vyplň mezeru a dojeď přesně do rohu</li>
                <li>Štětec drž pod úhlem 45° a tahy veď plynule jedním směrem</li>
              </ul>
              <p>Na procvičení namaluj nejdřív méně viditelné rohy (za nábytkem, v koutech). Technika přichází s praxí — první roh nebude dokonalý, desátý bude.</p>
            </section>

            <section id="listy">
              <h2>Jak malovat lišty a rámy</h2>
              <p>Podlahové a stropní lišty se malují před finálním nátěrem zdí — nebo vůbec, pokud jsou z PVC nebo hliníku. Dřevěné lišty a okenní rámy vyžadují speciální přípravu.</p>
              <ul>
                <li><strong>Dřevěné lišty:</strong> přebrousit jemným papírem (P150), odmastit lihem, nátěr speciální barvou na dřevo nebo email</li>
                <li><strong>PVC lišty:</strong> stačí odmastit a použít barvu s dobrým přilnavostí na plasty, nebo nátěr přeskočit</li>
                <li><strong>Okenní rámy:</strong> malovat za suchého počasí, páska na sklo, tahy rovnoběžně s rámem</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Při malování lišt dej pod ně list papíru nebo karton místo pásky na podlahu — je to rychlejší a papír se dá posouvat podél lišty.</div>
            </section>

            <section id="poradi">
              <h2>Správné pořadí prací</h2>
              <p>Pořadí malování místnosti má velký vliv na výsledek — špatné pořadí znamená přemalování.</p>
              <ul>
                <li><strong>1. Strop</strong> — maluj první, kapky na zdi nevadí</li>
                <li><strong>2. Rohy strop–zeď</strong> — cutting in nebo páska</li>
                <li><strong>3. Zdi válečkem</strong> — velké plochy</li>
                <li><strong>4. Rohy zeď–zeď a zeď–podlaha</strong> — cutting in nebo páska</li>
                <li><strong>5. Lišty a rámy</strong> — jako poslední, zakryj hotové zdi páskou</li>
              </ul>
            </section>

            <section id="chyby">
              <h2>Nejčastější chyby</h2>
              <ul>
                <li><strong>Sundání pásky po vytvrdnutí</strong> — barva se trhá a okraj je nerovný. Vždy sundávej za mokra nebo těsně po zaschnutí.</li>
                <li><strong>Příliš mnoho barvy na štětci</strong> — barva podtéká pod pásku nebo stéká po rohu</li>
                <li><strong>Levná páska</strong> — podtéká a nelpí rovnoměrně. Vyplatí se investovat do kvalitní.</li>
                <li><strong>Malování rohů jako poslední</strong> — váleček zanechá kapky na lištách; rohy maluj před plochami zdí</li>
                <li><strong>Přeskočení broušení lišt</strong> — barva na hladkém dřevu bez přebroušení špatně přilne a rychle se loupe</li>
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
                <li><a href="#malovani-paska">Postup s páskou</a></li>
                <li><a href="#technika-stetcem">Technika štětcem</a></li>
                <li><a href="#listy">Lišty a rámy</a></li>
                <li><a href="#poradi">Pořadí prací</a></li>
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
