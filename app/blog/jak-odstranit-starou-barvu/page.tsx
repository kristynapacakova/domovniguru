import type { Metadata } from "next";
import Link from "next/link";
import PaintCalculator from "@/app/components/PaintCalculator";
<PaintCalculator />
export const metadata: Metadata = {
  title: "Jak odstranit starou barvu ze zdi – škrabka, teplo nebo chemie 2025",
  description: "Škrabka, teplovzdušná pistole nebo chemický odstraňovač? Srovnání metod a postup krok za krokem.",
  alternates: { canonical: "https://domovniguru.cz/blog/jak-odstranit-starou-barvu" },
  openGraph: { title: "Jak odstranit starou barvu ze zdi", description: "Škrabka, teplo nebo chemie? Správná metoda pro každý případ.", url: "https://domovniguru.cz/blog/jak-odstranit-starou-barvu", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2025-02-05T08:00:00Z", modifiedTime: "2025-03-01T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak odstranit starou barvu ze zdi", description: "Škrabka, teplo nebo chemie?" },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://domovniguru.cz/blog/jak-odstranit-starou-barvu#article", "headline": "Jak odstranit starou barvu ze zdi", "datePublished": "2025-02-05T08:00:00Z", "dateModified": "2025-03-01T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "inLanguage": "cs", "keywords": ["jak odstranit starou barvu", "stará barva ze zdi", "teplovzdušná pistole barva", "chemický odstraňovač barvy"] }] };

const RELATED = [
  { title: "Jak malovat zeď – průvodce pro začátečníky", href: "/blog/jak-malovat-zed", read: "5 min" },
  { title: "Penetrace před malováním – kdy je nutná?", href: "/blog/penetrace-pred-malovanim", read: "4 min" },
  { title: "Jak malovat přes tmavou barvu na světlo", href: "/blog/malovat-pres-tmavou-barvu", read: "3 min" },
  { title: "Jak se zbavit plísně na zdi natrvalo", href: "/blog/jak-odstranit-plisen-na-zdi", read: "5 min" },
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
              <span>Odstranit starou barvu</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování & barvy</Link>
                <span className="article-read-time">⏱ 4 min čtení</span>
              </div>
              <h1 className="article-h1">Jak odstranit starou barvu ze zdi</h1>
              <p className="article-lead">Ne každou starou barvu musíš odstraňovat — ale když se loupe, praskla nebo je příliš silná, nová barva na ní dobře nepřilne. Tady je jak na to správnou metodou.</p>
              <div className="article-meta-row"><span>Aktualizováno: 1. března 2025</span><span>·</span><span>DomovniGuru</span></div>
            </header>

            {/* HERO ILLUSTRATION */}
            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="180" fill="#fdf8f2"/>

                {/* 1. ŠKRABKA */}
                <g transform="translate(40, 20)">
                  <rect x="0" y="0" width="160" height="130" rx="6" fill="#f0ece6" stroke="#e0d8cc" strokeWidth="1.5"/>
                  {/* Zeď s louplou barvou */}
                  <rect x="10" y="10" width="140" height="110" rx="3" fill="#e8e0d8"/>
                  {/* Kusy odlupující se barvy */}
                  <path d="M20 20 Q35 15 40 25 Q38 35 25 32 Z" fill="#c8a97a" opacity="0.6"/>
                  <path d="M60 40 Q80 32 85 45 Q82 58 65 54 Z" fill="#c8a97a" opacity="0.5"/>
                  <path d="M100 15 Q118 10 122 22 Q120 33 105 30 Z" fill="#c8a97a" opacity="0.55"/>
                  <path d="M30 70 Q50 62 55 75 Q52 88 35 84 Z" fill="#c8a97a" opacity="0.45"/>
                  {/* Škrabka */}
                  <g transform="translate(75, 55)">
                    <rect x="0" y="0" width="8" height="40" rx="2" fill="#c8a97a"/>
                    <rect x="-6" y="36" width="20" height="6" rx="1" fill="#5a3e28" opacity="0.8"/>
                  </g>
                </g>

                {/* 2. TEPLOVZDUŠNÁ PISTOLE */}
                <g transform="translate(300, 20)">
                  <rect x="0" y="0" width="160" height="130" rx="6" fill="#f5f0e8" stroke="#e0d8cc" strokeWidth="1.5"/>
                  {/* Zeď */}
                  <rect x="10" y="10" width="140" height="110" rx="3" fill="#ede8e0"/>
                  {/* Teplo — vlny */}
                  <path d="M50 80 Q55 68 60 80 Q65 92 70 80" stroke="#e07a3a" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6"/>
                  <path d="M62 75 Q67 63 72 75 Q77 87 82 75" stroke="#e07a3a" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5"/>
                  <path d="M74 78 Q79 66 84 78 Q89 90 94 78" stroke="#e07a3a" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.4"/>
                  {/* Pistole */}
                  <g transform="translate(88, 40)">
                    <rect x="0" y="0" width="30" height="16" rx="4" fill="#5a3e28" opacity="0.75"/>
                    <rect x="8" y="14" width="14" height="24" rx="3" fill="#5a3e28" opacity="0.65"/>
                    <rect x="26" y="4" width="12" height="8" rx="2" fill="#c8a97a" opacity="0.7"/>
                    {/* Vzduch z pistole */}
                    <path d="M38 7 L48 4 M38 8 L50 8 M38 9 L48 12" stroke="#e07a3a" strokeWidth="1.2" strokeLinecap="round" opacity="0.7"/>
                  </g>
                  {/* Barva se odlupuje od tepla */}
                  <path d="M55 90 Q65 82 70 92 Q68 102 58 99 Z" fill="#c8a97a" opacity="0.5"/>
                </g>

                {/* 3. CHEMICKÝ ODSTRAŇOVAČ */}
                <g transform="translate(560, 20)">
                  <rect x="0" y="0" width="160" height="130" rx="6" fill="#f8f4f0" stroke="#e0d8cc" strokeWidth="1.5"/>
                  {/* Zeď */}
                  <rect x="10" y="10" width="140" height="110" rx="3" fill="#ede8e0"/>
                  {/* Lahvička */}
                  <g transform="translate(28, 25)">
                    <rect x="0" y="18" width="32" height="52" rx="4" fill="none" stroke="#c8b89a" strokeWidth="1.8"/>
                    <rect x="8" y="10" width="16" height="12" rx="3" fill="none" stroke="#c8b89a" strokeWidth="1.8"/>
                    <rect x="10" y="4" width="12" height="8" rx="2" fill="none" stroke="#c8b89a" strokeWidth="1.5"/>
                    <rect x="4" y="26" width="24" height="22" rx="2" fill="#c8b89a" opacity="0.15"/>
                    <text x="16" y="37" fontFamily="sans-serif" fontSize="5" fill="#9a8a7a" textAnchor="middle">STRIP</text>
                    <text x="16" y="44" fontFamily="sans-serif" fontSize="5" fill="#9a8a7a" textAnchor="middle">GEL</text>
                  </g>
                  {/* Nanesený gel na zdi */}
                  <path d="M80 30 Q110 25 120 40 Q118 70 90 68 Q72 65 75 45 Z" fill="#9a9a5a" opacity="0.2"/>
                  <path d="M80 30 Q110 25 120 40 Q118 70 90 68 Q72 65 75 45 Z" fill="none" stroke="#9a9a5a" strokeWidth="1" strokeDasharray="3 2" opacity="0.4"/>
                  {/* Bubliny reakce */}
                  {[[88,48],[96,38],[104,55],[92,62],[110,44]].map(([cx,cy],i)=>(
                    <circle key={i} cx={cx} cy={cy} r="3" fill="none" stroke="#9a9a5a" strokeWidth="0.8" opacity="0.5"/>
                  ))}
                </g>

                {/* Popisky metod */}
                <text x="120" y="165" fontFamily="var(--font-sans,sans-serif)" fontSize="8" fill="#9a8a7a" textAnchor="middle" letterSpacing="0.04em">škrabka</text>
                <text x="380" y="165" fontFamily="var(--font-sans,sans-serif)" fontSize="8" fill="#9a8a7a" textAnchor="middle" letterSpacing="0.04em">teplovzdušná pistole</text>
                <text x="640" y="165" fontFamily="var(--font-sans,sans-serif)" fontSize="8" fill="#9a8a7a" textAnchor="middle" letterSpacing="0.04em">chemický odstraňovač</text>
              </svg>
              <div style={{display:"flex",justifyContent:"space-around",padding:"4px 40px 12px",fontSize:"9px",letterSpacing:"0.1em",color:"#c8b89a",textTransform:"uppercase"}}>
                <span style={{width:"160px",textAlign:"center"}}>Metoda 1</span>
                <span style={{width:"160px",textAlign:"center"}}>Metoda 2</span>
                <span style={{width:"160px",textAlign:"center"}}>Metoda 3</span>
              </div>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#kdy-odstranovat">Kdy barvu vůbec odstraňovat</a></li>
                <li><a href="#skrabka">Metoda 1 – Škrabka a brusný papír</a></li>
                <li><a href="#teplo">Metoda 2 – Teplovzdušná pistole</a></li>
                <li><a href="#chemie">Metoda 3 – Chemický odstraňovač</a></li>
                <li><a href="#srovnani">Srovnání metod</a></li>
                <li><a href="#po-odstraneni">Co dělat po odstranění</a></li>
              </ol>
            </nav>

            <section id="kdy-odstranovat">
              <h2>Kdy barvu vůbec odstraňovat</h2>
              <p>Starou barvu nemusíš odstraňovat vždy — v mnoha případech stačí přebrousit a přemalovat. Odstranění má smysl pokud:</p>
              <ul>
                <li>Barva se loupe nebo praskla ve větších plochách</li>
                <li>Je naneseno příliš mnoho vrstev (zeď "vypadá tučně", detaily jsou zahlazené)</li>
                <li>Povrch je nerovný a broušení nestačí</li>
                <li>Stará barva obsahuje olovo (domy před rokem 1978 — nechej odborníka)</li>
                <li>Chceš aplikovat dekorativní omítku nebo štuk</li>
              </ul>
              <div className="article-tip"><strong>💡 Test:</strong> Zatlač nehtem do barvy. Pokud se barva neprohne a nezačne praskat, je přilnavost dobrá a přemalování bez odstranění stačí.</div>
            </section>

            <section id="skrabka">
              <h2>Metoda 1 – Škrabka a brusný papír</h2>
              <p>Nejjednodušší metoda pro malé plochy a lokálně odlupující se barvu. Nevyžaduje žádné speciální vybavení.</p>
              <ul>
                <li><strong>Co potřebuješ:</strong> špachtle nebo škrabka na barvu, brusný papír P80 (hrubý) a P150 (jemný), ochranný respirátor a brýle</li>
                <li><strong>Postup:</strong> Seškrábni odlupující se části škrabkou. Přebrousit hrubým papírem, pak jemným pro vyhlazení přechodů.</li>
                <li><strong>Kdy funguje:</strong> Lokální opravy, tenké vrstvy barvy, malé plochy</li>
                <li><strong>Kdy nestačí:</strong> Silné vrstvy barvy, velké plochy, barva pevně přilnavá</li>
              </ul>
            </section>

            <section id="teplo">
              <h2>Metoda 2 – Teplovzdušná pistole</h2>
              <p>Teplo změkčí barvu která pak jde snadno seškrábat. Rychlejší než ruční škrabání na větších plochách, ale vyžaduje opatrnost — přehřátí poškodí omítku.</p>
              <ul>
                <li><strong>Co potřebuješ:</strong> teplovzdušná pistole (600–750 °C), kovová škrabka, respirátor, ochranné brýle</li>
                <li><strong>Postup:</strong> Pistoli drž 5–10 cm od povrchu a pohybuj plynule. Jakmile barva začne bublat, okamžitě škrábej. Nepřehřívej jedno místo.</li>
                <li><strong>Kdy funguje:</strong> Silnější vrstvy barvy na hladkých plochách, dřevo, kov</li>
                <li><strong>Kdy nestačí:</strong> Omítka (přehřátí způsobí praskání), sádrokarton, v blízkosti skla</li>
              </ul>
              <div className="article-tip"><strong>⚠️ Bezpečnost:</strong> Pracuj v dobře větraném prostoru — zahřátá barva uvolňuje výpary. U starých domů může barva obsahovat olovo — v takovém případě tepelnou metodu nepoužívej vůbec.</div>
            </section>

            <section id="chemie">
              <h2>Metoda 3 – Chemický odstraňovač</h2>
              <p>Chemický gel nebo pasta se nanese na povrch, nechá působit a barva se pak snadno seškrábe. Ideální pro složité tvary, lišty a místa kam se teplo nebo škrabka špatně dostává.</p>
              <ul>
                <li><strong>Co potřebuješ:</strong> odstraňovač barvy (gel nebo pasta), štětec nebo váleček, plastová škrabka, gumové rukavice, respirátor</li>
                <li><strong>Postup:</strong> Nanes silnou vrstvu gelu, přikryj fólií (zabrání vyschnutí) a nechej působit dle návodu (30 min až několik hodin). Seškrábni změklou barvu plastovou škrabkou. Povrch omyj vodou nebo ředidlem.</li>
                <li><strong>Kdy funguje:</strong> Tvarované plochy, lišty, rámy, práce bez tepla</li>
                <li><strong>Kdy nestačí:</strong> Velmi silné vrstvy — může být potřeba opakovat</li>
              </ul>
            </section>

            <section id="srovnani">
              <h2>Srovnání metod</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Metoda</th><th>Rychlost</th><th>Náročnost</th><th>Cena</th><th>Nejlepší pro</th></tr></thead>
                  <tbody>
                    <tr><td>Škrabka + brusný papír</td><td>Pomalá</td><td>Nízká</td><td>do 200 Kč</td><td>Malé plochy, opravy</td></tr>
                    <tr><td>Teplovzdušná pistole</td><td>Rychlá</td><td>Střední</td><td>500–1500 Kč</td><td>Větší plochy, dřevo</td></tr>
                    <tr><td>Chemický odstraňovač</td><td>Střední</td><td>Nízká</td><td>200–600 Kč</td><td>Lišty, rámy, tvarované plochy</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="po-odstraneni">
              <h2>Co dělat po odstranění</h2>
              <p>Po odstranění barvy je povrch surový a připravený — ale ještě není připravený k malování. Důležité kroky:</p>
              <ul>
                <li><strong>Přebrousit:</strong> Jemným brusným papírem (P150–P180) vyhladit nerovnosti a přechody</li>
                <li><strong>Vyčistit:</strong> Setřít prach a nečistoty vlhkým hadříkem, nechat vyschnout</li>
                <li><strong>Opravit díry a škrábance:</strong> Štuková hmota nebo tmel, po zaschnutí přebrousit</li>
                <li><strong>Penetrace:</strong> Na holou omítku nebo sádrokarton vždy nanést penetraci před malováním — bez ní barva špatně přilne a nerovnoměrně se vstřebává</li>
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
                <li><a href="#kdy-odstranovat">Kdy odstraňovat</a></li>
                <li><a href="#skrabka">Škrabka</a></li>
                <li><a href="#teplo">Teplovzdušná pistole</a></li>
                <li><a href="#chemie">Chemický odstraňovač</a></li>
                <li><a href="#srovnani">Srovnání metod</a></li>
                <li><a href="#po-odstraneni">Po odstranění</a></li>
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
