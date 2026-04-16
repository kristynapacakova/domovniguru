import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak postavit vyvýšený záhon – dřevěný nebo z betonu 2026",
  description: "Vyvýšený záhon ze dřeva nebo z betonu za víkend svépomocí. Správné rozměry, výplň substrátu, umístění a první výsev. Postup krok za krokem pro každého.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/vyvyseny-zahon-postup" },
  openGraph: { title: "Jak postavit vyvýšený záhon 2026", description: "Dřevěný nebo betonový vyvýšený záhon – rozměry, výplň a výsev krok za krokem.", url: "https://www.domovniguru.cz/blog/vyvyseny-zahon-postup", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-16T08:00:00Z", modifiedTime: "2026-04-16T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak postavit vyvýšený záhon 2026", description: "Dřevěný nebo betonový vyvýšený záhon – rozměry, výplň a výsev." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/vyvyseny-zahon-postup#article",
    "headline": "Jak postavit vyvýšený záhon – dřevěný nebo z betonu 2026",
    "datePublished": "2026-04-16T08:00:00Z",
    "dateModified": "2026-04-16T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak postavit vyvýšený záhon", "vyvýšený záhon dřevěný", "vyvýšený záhon postup", "substrát vyvýšený záhon", "vyvýšený záhon rozměry"]
  }]
};

const RELATED = [
  { title: "Jak připravit zahradu na jaro", href: "/blog/jarni-zahrada", read: "7 min" },
  { title: "Jak hnojit zahradu – organicky i minerálně", href: "/blog/jak-hnojit-zahradu", read: "6 min" },
  { title: "Jak správně zalévat zahradu", href: "/blog/jak-spravne-zalevat", read: "5 min" },
  { title: "Bylinkový záhon na parapetu nebo balkoně", href: "/blog/bylinkova-zahradka", read: "4 min" },
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
              <span>Vyvýšený záhon</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak postavit vyvýšený záhon – dřevěný nebo z betonu</h1>
              <p className="article-lead">Vyvýšený záhon je nejlepší investice do zahrady — rychleji prohřátá půda, žádné klečení, snazší údržba a 2–3× vyšší výnosy než v záhoně na zemi. Za víkend máš hotovo.</p>
              <div className="article-meta-row"><span>Aktualizováno: 16. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/vyvyseny-zahon-postup" title="Jak postavit vyvýšený záhon – dřevěný nebo z betonu 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 195" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="195" fill="#f0f8ec"/>
                <defs>
                  <linearGradient id="zem1" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox"><stop offset="0%" stopColor="#8B6340"/><stop offset="100%" stopColor="#6b4820"/></linearGradient>
                  <linearGradient id="kompost1" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox"><stop offset="0%" stopColor="#5a9e6f"/><stop offset="100%" stopColor="#3a7e4f"/></linearGradient>
                </defs>

                {/* Průřez vyvýšeného záhonu */}
                <g transform="translate(20,15)">
                  <rect x="0" y="0" width="220" height="168" rx="8" fill="#fdf8f0" stroke="#d8c8a0" strokeWidth="1.2"/>
                  <text x="110" y="18" textAnchor="middle" fontSize="9" fill="#6a6050" fontWeight="700">PRŮŘEZ ZÁHONU</text>

                  {/* Dřevěné stěny */}
                  <rect x="10" y="22" width="16" height="115" rx="2" fill="#c8904a" stroke="#a07030" strokeWidth="1"/>
                  <rect x="194" y="22" width="16" height="115" rx="2" fill="#c8904a" stroke="#a07030" strokeWidth="1"/>

                  {/* Vrstvy výplně */}
                  {/* Drén/větve */}
                  <rect x="26" y="112" width="168" height="25" fill="#d4b870" opacity="0.6"/>
                  <text x="110" y="127" textAnchor="middle" fontSize="7.5" fill="#6a5030">větvě + dřevo (drenáž)</text>

                  {/* Kompost + hnůj */}
                  <rect x="26" y="82" width="168" height="30" fill="url(#kompost1)" opacity="0.7"/>
                  <text x="110" y="100" textAnchor="middle" fontSize="7.5" fill="#f0ffe8">kompost + hnůj</text>

                  {/* Substrát */}
                  <rect x="26" y="35" width="168" height="47" fill="url(#zem1)" opacity="0.8"/>
                  <text x="110" y="55" textAnchor="middle" fontSize="7.5" fill="#f5e8d0">zahradní substrát</text>
                  <text x="110" y="68" textAnchor="middle" fontSize="7.5" fill="#f5e8d0">+ kompost (50:50)</text>

                  {/* Geotextilie */}
                  <rect x="26" y="32" width="168" height="3" fill="#8080c0" opacity="0.6"/>

                  {/* Šipka výška */}
                  <line x1="5" y1="22" x2="5" y2="137" stroke="#e07040" strokeWidth="1.5" strokeLinecap="round"/>
                  <text x="3" y="85" fontSize="7" fill="#e07040" transform="rotate(-90,3,85)">60–80 cm</text>

                  <text x="110" y="152" textAnchor="middle" fontSize="7.5" fill="#8a7050">Geotextilie na dno</text>
                  <text x="110" y="163" textAnchor="middle" fontSize="7.5" fill="#8a7050">šířka max. 120 cm (dosah rukou)</text>
                </g>

                {/* Typy záhonů */}
                <g transform="translate(258,15)">
                  <rect x="0" y="0" width="480" height="168" rx="8" fill="#fff" stroke="#e0d8d0" strokeWidth="1"/>
                  <text x="240" y="18" textAnchor="middle" fontSize="9" fill="#6a6050" fontWeight="700">SROVNÁNÍ TYPŮ VYVÝŠENÝCH ZÁHONŮ</text>

                  {[
                    { col:0, type:"Dřevěný záhon", icon:"🪵", pros:["Levný (500–3 000 Kč)","Přirozený vzhled","Snadná výroba DIY"], cons:["Vydrží 5–10 let","Nutné impregnovat"], color:"#c8904a" },
                    { col:1, type:"Betonový/zděný", icon:"🧱", pros:["Trvanlivý (30+ let)","Pevný, stabilní","Různé výšky"], cons:["Dražší (3 000–15 000 Kč)","Složitější stavba"], color:"#808090" },
                    { col:2, type:"Galvanizovaný kov", icon:"⬛", pros:["Moderní vzhled","Odolný","Přenosný"], cons:["Nejdražší","Ohřívá se v létě"], color:"#4a4a40" },
                  ].map(({col, type, icon, pros, cons, color}) => (
                    <g key={col} transform={`translate(${col*158+8}, 24)`}>
                      <rect x="0" y="0" width="148" height="135" rx="6" fill={color} opacity="0.06" stroke={color} strokeWidth="0.8" opacity="0.4"/>
                      <text x="74" y="22" textAnchor="middle" fontSize="14">{icon}</text>
                      <text x="74" y="40" textAnchor="middle" fontSize="9" fill={color} fontWeight="700">{type}</text>
                      {pros.map((p, i) => <text key={i} x="8" y={56+i*14} fontSize="8" fill="#3a7e4f">✓ {p}</text>)}
                      {cons.map((c, i) => <text key={i} x="8" y={100+i*14} fontSize="8" fill="#e07040">✗ {c}</text>)}
                    </g>
                  ))}
                </g>

                <rect y="178" width="760" height="17" fill="#e0f0d8" opacity="0.5"/>
                <text x="380" y="190" textAnchor="middle" fontSize="8" fill="#3a7e4f" fontWeight="600" letterSpacing="0.06em">🌱 ŠÍŘKA MAX. 120 CM · VÝŠKA 60–80 CM · ORIENTACE SEVER–JIH</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#vyhody">Výhody vyvýšeného záhonu</a></li>
                <li><a href="#rozmery">Správné rozměry</a></li>
                <li><a href="#drevo">Dřevěný záhon – stavba</a></li>
                <li><a href="#vyplň">Výplň a substrát</a></li>
                <li><a href="#umisteni">Umístění a orientace</a></li>
                <li><a href="#co-pestovat">Co pěstovat</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="vyhody">
              <h2>Proč vyvýšený záhon?</h2>
              <ul>
                <li><strong>Dřívější start sezóny:</strong> Vyvýšená půda se prohřeje 2–3 týdny dříve než záhon na zemi — dřívější výsev a sklizeň.</li>
                <li><strong>Lepší půda:</strong> Naplníš záhon ideálním substrátem — nezávisle na kvalitě původní půdy v zahradě.</li>
                <li><strong>Žádné klečení:</strong> Záhon ve výšce 60–80 cm umožňuje práci ve stoje nebo vsedě — ideální pro starší zahrádkáře.</li>
                <li><strong>Méně plevele:</strong> Vyvýšená půda bez semen plevele z okolní zahrady. Mulčování záhonu drží plevel pryč sezónu.</li>
                <li><strong>Lepší odvodnění:</strong> Přebytečná voda odtéká dolů — žádné podmáčení kořenů.</li>
              </ul>
            </section>

            <section id="rozmery">
              <h2>Správné rozměry vyvýšeného záhonu</h2>
              <ul>
                <li><strong>Šířka: max. 120 cm</strong> — musíš dosáhnout na střed záhonu z obou stran bez šlapání do substrátu. Pro záhon přístupný jen z jedné strany max. 60 cm.</li>
                <li><strong>Délka: libovolná</strong> — nejčastěji 2–4 m. Delší záhon je snadnější na výrobu ale těžší na zálivku.</li>
                <li><strong>Výška: 60–80 cm</strong> — pro pohodlnou práci vsedě nebo ve stoje. Pro menší děti nebo záhony v skleníku stačí 30–40 cm.</li>
                <li><strong>Orientace: sever–jih</strong> — rostliny dostávají rovnoměrné osvětlení z obou stran. Záhon by měl stát na slunném místě min. 6 hodin denně.</li>
              </ul>
            </section>

            <section id="drevo">
              <h2>Dřevěný záhon – stavba krok za krokem</h2>
              <p>Pro záhon 120×240 cm, výška 70 cm:</p>
              <ul>
                <li><strong>Materiál:</strong> Prkna tloušťky 4–5 cm, šířka 20–25 cm. Délky: 2× 240 cm a 4× 120 cm pro každou vrstvu. Počet vrstev = výška/šířka prkna. Modřín nebo impregnovaná borovice — bez chemické impregnace pro jedlé rostliny!</li>
                <li><strong>Krok 1 — Připrav místo:</strong> Vyrovnej zeminu, odstraň plevel. Nemusíš kopat — záhon stojí na zemině.</li>
                <li><strong>Krok 2 — Postav první vrstvu:</strong> Sešroubuj roh prvního rámu. Nezapomeň na rohy — dřevěný sloupek 5×5 cm na každém rohu drží stěny pohromadě.</li>
                <li><strong>Krok 3 — Přidávej vrstvy:</strong> Každou vrstvu prken přišroubuj ke sloupkům. Spoje střídej (jako zdivo) pro pevnost.</li>
                <li><strong>Krok 4 — Geotextilie:</strong> Na vnitřní stěny a dno přilož geotextilii — zabrání průniku plevele ze zeminy a prodlouží životnost dřeva.</li>
                <li><strong>Krok 5 — Naplň substrátem:</strong> Viz sekce výplň níže.</li>
              </ul>
            </section>

            <section id="vyplň">
              <h2>Výplň a substrát – klíč k úspěchu</h2>
              <p>Vrstvy záhonu plníš odspodu. Spodní vrstvy postupně hnijí a uvolňují teplo a živiny.</p>
              <ul>
                <li><strong>Vrstva 1 — Dno (10–15 cm):</strong> Hrubý materiál — větve, kulatina, kůra. Zajistí odvodnění a postupně hnijí jako "topení" záhonu.</li>
                <li><strong>Vrstva 2 — Střed (15–20 cm):</strong> Hrubý kompost, hnůj, listí, zelený odpad. Zdroj živin na roky.</li>
                <li><strong>Vrstva 3 — Vrchní (25–30 cm):</strong> Kvalitní zahradní substrát smíchaný s kompostem (50:50). Do tohoto seješ a sázíš.</li>
                <li><strong>Celkové množství:</strong> Záhon 120×240 cm, výška 70 cm = 200 litrů substrátu do vrchní vrstvy + hrubý materiál.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Po naplnění záhon vydatně zalij — substrát sedne o 10–15 cm. Doplň do výše 5 cm pod okraj. Záhon je připravený k setí za 2–3 dny.</div>
            </section>

            <section id="co-pestovat">
              <h2>Co pěstovat ve vyvýšeném záhonu</h2>
              <p>Vyvýšený záhon je ideální pro téměř veškerou zeleninu. Nejlépe se hodí:</p>
              <ul>
                <li><strong>Salátová zelenina:</strong> Salát, špenát, ředkev, jarní cibulka — rychlá sklizeň, ideální pro intenzivní pěstování.</li>
                <li><strong>Rajčata a papriky:</strong> Teplejší půda urychlí zrání. Nutné tyče nebo klece pro podporu.</li>
                <li><strong>Mrkev a kořenová zelenina:</strong> Hluboký volný substrát bez kamenů = rovné, krásné kořeny.</li>
                <li><strong>Bylinky:</strong> Bazalka, petržel, pažitka, koriandr — praktické mít záhon blízko kuchyně.</li>
                <li><strong>Jahody:</strong> Ideální ve vyvýšeném záhonu — přesahují přes okraj, nepřijdou do styku se zemí.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Jak dlouho vydrží dřevěný vyvýšený záhon?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Impregnovaná borovice vydrží 5–8 let, modřín 10–15 let, akát 20+ let bez impregnace. Pro záhon s jedlými rostlinami nepoužívej chemicky impegnované dřevo (kreosot, CCA) — volitelné jsou pouze přírodní oleje nebo lněný olej. Geotextilie na vnitřní straně záhonu prodlouží životnost dřeva o 2–3 roky.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Musím vyměňovat substrát každý rok?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ne — substrát vydrží 3–5 let. Každé jaro přidej 5–10 cm čerstvého kompostu navrch a přidej pomalu uvolňující hnojivo. Po 3–5 letech substrát prosej, vyjmi kořeny a doplň čerstvou zeminou. Spodní vrstvy (větve, kompost) průběžně hnijí — záhon se každý rok mírně snižuje, doplňuj substrátem.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Kolik stojí vybudování vyvýšeného záhonu?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Dřevěný záhon 120×240 cm: prkna 500–1 500 Kč, substrát (400 l) 800–2 000 Kč, kompost (200 l) vlastní nebo 500–1 000 Kč, geotextilie 150–300 Kč. Celkem 2 000–5 000 Kč. Hotový kovový nebo plastový záhon stojí 1 500–8 000 Kč bez substrátu.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/vyvyseny-zahon-postup" title="Jak postavit vyvýšený záhon – dřevěný nebo z betonu 2026" />

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
                <li><a href="#vyhody">Proč vyvýšený záhon</a></li>
                <li><a href="#rozmery">Správné rozměry</a></li>
                <li><a href="#drevo">Stavba dřevěného záhonu</a></li>
                <li><a href="#vyplň">Výplň a substrát</a></li>
                <li><a href="#co-pestovat">Co pěstovat</a></li>
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
