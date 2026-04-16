import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak renovovat parketovou podlahu – broušení, tmelení, lak 2026",
  description: "Stará parketová podlaha vypadá jako nová – broušení, tmelení spár, lakování nebo voskování krok za krokem. Kdy renovovat sám a kdy povolat profesionála.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/renovovat-parkety" },
  openGraph: { title: "Jak renovovat parketovou podlahu 2026", description: "Broušení, tmelení, lak nebo vosk – parketová podlaha jako nová krok za krokem.", url: "https://www.domovniguru.cz/blog/renovovat-parkety", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-16T08:00:00Z", modifiedTime: "2026-04-16T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak renovovat parketovou podlahu 2026", description: "Broušení, tmelení, lak nebo vosk – parketová podlaha jako nová." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/renovovat-parkety#article",
    "headline": "Jak renovovat parketovou podlahu – broušení, tmelení, lak 2026",
    "datePublished": "2026-04-16T08:00:00Z",
    "dateModified": "2026-04-16T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak renovovat parkety", "broušení parket", "lak na parkety", "tmelení parket", "renovace parketové podlahy", "parkety jako nové"]
  }]
};

const RELATED = [
  { title: "Jak pokládat vinylovou podlahu", href: "/blog/kladeni-vinyl-podlahy", read: "6 min" },
  { title: "Jak naplánovat rekonstrukci bytu", href: "/blog/planovani-rekonstrukce-bytu", read: "8 min" },
  { title: "Jak ošetřit dřevěnou terasu", href: "/blog/drevo-terasa-zima", read: "5 min" },
  { title: "Kolik stojí rekonstrukce koupelny", href: "/blog/cena-rekonstrukce-koupelny", read: "6 min" },
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
              <span>Renovace parket</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏠 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 7 min čtení</span>
              </div>
              <h1 className="article-h1">Jak renovovat parketovou podlahu – broušení, tmelení, lak</h1>
              <p className="article-lead">Parketová podlaha vypadá zničeně, ale pod vrstvou šrámů a starého laku je krásné dřevo. Renovace parket prodlouží jejich životnost o dalších 20–30 let — a výsledek předčí novou vinyl podlahu.</p>
              <div className="article-meta-row"><span>Aktualizováno: 16. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/renovovat-parkety" title="Jak renovovat parketovou podlahu – broušení, tmelení, lak 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 195" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="195" fill="#f8f4ee"/>
                <defs>
                  <linearGradient id="parketaStara" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#a08060"/><stop offset="100%" stopColor="#806040"/>
                  </linearGradient>
                  <linearGradient id="parketaNova" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#d4a870"/><stop offset="100%" stopColor="#b08850"/>
                  </linearGradient>
                </defs>

                {/* PŘED */}
                <g transform="translate(20,20)">
                  <rect x="0" y="0" width="200" height="148" rx="8" fill="#f0ebe4" stroke="#d0c8c0" strokeWidth="1.2"/>
                  <text x="100" y="18" textAnchor="middle" fontSize="9" fill="#e07040" fontWeight="700">❌ PŘED RENOVACÍ</text>
                  {[0,1,2,3].map(row => [0,1,2].map(col => (
                    <g key={`${row}-${col}`}>
                      <rect x={15+col*58} y={25+row*28} width="54" height="24" rx="2" fill="url(#parketaStara)" stroke="#907050" strokeWidth="0.8"/>
                      {/* Šrám */}
                      {col===1 && row===1 && <line x1={38+col*58} y1={30+row*28} x2={50+col*58} y2={44+row*28} stroke="#604030" strokeWidth="1.5"/>}
                      {col===0 && row===2 && <line x1={22+col*58} y1={32+row*28} x2={60+col*58} y2={38+row*28} stroke="#604030" strokeWidth="1"/>}
                    </g>
                  )))}
                  <text x="100" y="142" textAnchor="middle" fontSize="8" fill="#a08060">šrámy, matný lak, spáry</text>
                </g>

                {/* Postup */}
                <g transform="translate(238,15)">
                  <rect x="0" y="0" width="295" height="163" rx="8" fill="#fff" stroke="#e0d8d0" strokeWidth="1"/>
                  <text x="147" y="18" textAnchor="middle" fontSize="9" fill="#6a6050" fontWeight="700">POSTUP RENOVACE</text>
                  {[
                    { n:"1", text:"Hrubé broušení (zrno 40–60)", color:"#e07040" },
                    { n:"2", text:"Střední broušení (zrno 80)", color:"#f59e0b" },
                    { n:"3", text:"Tmelení spár barevným tmelem", color:"#9b6fd4" },
                    { n:"4", text:"Jemné broušení (zrno 120–150)", color:"#4a90d9" },
                    { n:"5", text:"Vysát prach, odmastit povrch", color:"#5a9e6f" },
                    { n:"6", text:"1. vrstva laku nebo oleje", color:"#8B6340" },
                    { n:"7", text:"Přebrousit (zrno 180) + 2. vrstva", color:"#8B6340" },
                  ].map(({n, text, color}, i) => (
                    <g key={i} transform={`translate(12, ${25+i*19})`}>
                      <circle cx="10" cy="8" r="8" fill={color} opacity="0.15"/>
                      <text x="10" y="12" textAnchor="middle" fontSize="8.5" fill={color} fontWeight="700">{n}</text>
                      <text x="25" y="12" fontSize="9" fill="#2a2a28" fontWeight="500">{text}</text>
                    </g>
                  ))}
                </g>

                {/* PO */}
                <g transform="translate(551,20)">
                  <rect x="0" y="0" width="190" height="148" rx="8" fill="#fdf8f0" stroke="#d4b880" strokeWidth="1.2"/>
                  <text x="95" y="18" textAnchor="middle" fontSize="9" fill="#3a7e4f" fontWeight="700">✅ PO RENOVACI</text>
                  {[0,1,2,3].map(row => [0,1,2].map(col => (
                    <rect key={`${row}-${col}`} x={12+col*56} y={25+row*28} width="52" height="24" rx="2" fill="url(#parketaNova)" stroke="#a08050" strokeWidth="0.8"/>
                  )))}
                  <text x="95" y="142" textAnchor="middle" fontSize="8" fill="#3a7e4f">přirozená barva, lesklý lak ✓</text>
                </g>

                <rect y="178" width="760" height="17" fill="#e8e0d4" opacity="0.5"/>
                <text x="380" y="190" textAnchor="middle" fontSize="8" fill="#8a7050" fontWeight="600" letterSpacing="0.06em">🪵 RENOVACE PARKET = LEVNĚJŠÍ NEŽ NOVÁ PODLAHA · VÝSLEDEK NA 20–30 LET</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#kdy">Kdy renovovat vs. vyměnit</a></li>
                <li><a href="#nastroje">Nářadí – bruska a přípravy</a></li>
                <li><a href="#brouseni">Broušení krok za krokem</a></li>
                <li><a href="#tmeleni">Tmelení spár</a></li>
                <li><a href="#povrch">Lak, olej nebo vosk?</a></li>
                <li><a href="#chyby">Nejčastější chyby</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="kdy">
              <h2>Kdy renovovat a kdy raději vyměnit</h2>
              <p>Ne každé parkety se vyplatí renovovat. Před rozhodnutím zkontroluj jejich stav.</p>
              <ul>
                <li><strong>Renovace se vyplatí pokud:</strong> Parkety jsou pevné a nevrží, dřevo je zdravé (bez hniloby), tloušťka prkna nad 10 mm (prostor pro broušení), povrchové šrámy a matný lak.</li>
                <li><strong>Raději vyměnit pokud:</strong> Parkety vrží a pohybují se, dřevo je poškozené hnilobou nebo houbou, tloušťka prkna pod 8 mm (nezbude materiál po broušení), poškozeno více než 30 % plochy.</li>
                <li><strong>Jak zjistit tloušťku:</strong> V rohu místnosti odstraň lištu a zjisti tloušťku prkna. Standardní parkety (mozaikové) mají 8–10 mm, palubky 15–22 mm — palubky lze brousit opakovaně.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Renovace parket vyjde na 200–600 Kč/m² (práce + materiál). Nová vinyl podlaha stojí 400–1 200 Kč/m². Pokud jsou parkety v dobrém stavu, renovace je výrazně levnější a výsledek je esteticky hodnotnější.</div>
            </section>

            <section id="nastroje">
              <h2>Nářadí – bruska a přípravy</h2>
              <ul>
                <li><strong>Bubnová bruska (pásová):</strong> Pro velké plochy — rychlá a efektivní. Pronájem 500–800 Kč/den. Pozor — velmi agresivní, nezkušení uživatelé mohou způsobit vlny v podlaze.</li>
                <li><strong>Orbitální bruska:</strong> Šetrnější, vhodná pro méně zkušené. Pomalejší ale bezpečnější. Pronájem 300–500 Kč/den.</li>
                <li><strong>Rohová bruska:</strong> Na rohy a těžko dostupná místa. Pronájem 200–400 Kč/den nebo kombinace s ruční bruskou.</li>
                <li><strong>Vysavač na prach:</strong> Broušení generuje obrovské množství jemného dřevěného prachu. Ideálně průmyslový vysavač připojený přímo na brusku.</li>
              </ul>
              <div className="article-tip"><strong>⚠️ Příprava místnosti:</strong> Vynos veškerý nábytek, ucpi dveře lepicí páskou (prach jde všude), odpoj a zabal svítidla. Dřevěný prach je hořlavý — bez otevřeného ohně a elektrických jisker.</div>
            </section>

            <section id="brouseni">
              <h2>Broušení krok za krokem</h2>
              <ul>
                <li><strong>Krok 1 — Hrubé broušení (zrno 40–60):</strong> Odstraní starý lak, vosk a hrubé škrábance. Pohyb vždy ve směru vlákna dřeva — nikdy napříč. Překrývej pásy o 5–10 cm.</li>
                <li><strong>Krok 2 — Střední broušení (zrno 80):</strong> Vyhlazení povrchu po hrubém broušení. Odstraní stopy po hrubém papíru.</li>
                <li><strong>Krok 3 — Rohy a okraje:</strong> Rohovou bruskou nebo ručně přebrousit místa kde velká bruska nedosáhla. Stejné pořadí zrnitostí.</li>
                <li><strong>Krok 4 — Vysát prach:</strong> Po každé fázi broušení důkladně vysát. Prach pod dalším broušením způsobí nerovnosti.</li>
                <li><strong>Krok 5 — Jemné broušení (zrno 120–150):</strong> Finální vyhlazení před lakováním. Pohyb lehký, téměř bez přítlaku.</li>
              </ul>
            </section>

            <section id="tmeleni">
              <h2>Tmelení spár mezi parketami</h2>
              <p>Po hrubém broušení jsou spáry mezi lamelami čisté a připravené na tmelení. Tmelení je volitelný ale doporučený krok pro esteticky čistý výsledek.</p>
              <ul>
                <li><strong>Barevný tmel na dřevo:</strong> Kup tmel v barvě odpovídající dřevu. Po zaschnutí přebrousit na rovinu s povrchem parket.</li>
                <li><strong>Pasta z pilin:</strong> Profesionální metoda — smíchej piliny z broušení s lakem nebo lepidlem, naplň spáry. Perfektně sedí barevně.</li>
                <li><strong>Nezatmeluj příliš velké spáry:</strong> Spáry nad 3–4 mm se po vysychání tmele smrštění a praskají. Velké spáry nech nebo oprav výměnou lamely.</li>
              </ul>
            </section>

            <section id="povrch">
              <h2>Lak, olej nebo vosk – co vybrat</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Povrchová úprava</th><th>Trvanlivost</th><th>Údržba</th><th>Vzhled</th><th>Cena (m²)</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Lak (polyuretanový)</strong></td><td>5–10 let</td><td>Snadná — mokrý mop</td><td>Lesklý nebo matný film</td><td>80–200 Kč</td></tr>
                    <tr><td><strong>Olej</strong></td><td>2–5 let</td><td>Ošetřit olejem 1–2× ročně</td><td>Přirozený, teplý</td><td>100–300 Kč</td></tr>
                    <tr><td><strong>Vosk</strong></td><td>1–2 roky</td><td>Přeleštit 2–4× ročně</td><td>Tradiční, matný lesk</td><td>60–150 Kč</td></tr>
                    <tr><td><strong>Tvrdý voskový olej</strong></td><td>3–7 let</td><td>Střední</td><td>Přirozený + ochrana</td><td>150–350 Kč</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Doporučení:</strong> Pro domácnost s dětmi nebo domácími zvířaty volte <strong>polyuretanový lak</strong> — nejodolnější a nejsnáze se udržuje. Pro autentický historický vzhled starého bytu volte <strong>olej nebo tvrdý voskový olej</strong> — přirozený vzhled a snadná lokální oprava.</div>
            </section>

            <section id="chyby">
              <h2>Nejčastější chyby při renovaci parket</h2>
              <ul>
                <li><strong>Broušení napříč vláknem:</strong> Zanechává viditelné rýhy které lak zvýrazní. Vždy brousit ve směru vlákna.</li>
                <li><strong>Přeskočení zrnitostí:</strong> Z hrubého 40 rovnou na 120 zanechá stopy po hrubém papíru pod lakem. Vždy postupovat postupně.</li>
                <li><strong>Lakování bez vyčištění prachu:</strong> Prach pod lakem způsobí hrbolatý povrch. Před lakováním vysát a přejít vlhkým hadrem.</li>
                <li><strong>Příliš silná vrstva laku:</strong> Silná vrstva se loupe a praskává. Nanášej tenké vrstvy — 2–3 vrstvy jsou lepší než jedna silná.</li>
                <li><strong>Lakování za chladu:</strong> Lak pod 15 °C špatně schne a může zbělat. Ideální teplota 18–22 °C.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Kolikrát lze parkety přebrousit?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Mozaikové parkety (8–10 mm) lze přebrousit 1–2×, palubky (15–22 mm) 3–5×. Každé broušení odebere 1–2 mm materiálu. Pokud jsou viditelné drážky na spodní straně lamely, brousit nelze — dřevo by prasklo.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak dlouho nelze chodit po renovovaných parketech?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Po polyuretanovém laku: 24 hodin pro opatrnou chůzi, 3–5 dní před přesunem nábytku, 2 týdny pro plné vytvrzení (odolnost vůči škrábancům). Po oleji: 24–48 hodin. Vždy sleduj pokyny výrobce — závisí na teplotě a vlhkosti.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Mohu renovovat parkety sám nebo potřebuji profesionála?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Renovaci parket zvládne šikovný laik pokud má trpělivost a dodržuje postup. Největší riziko je bubnová bruska — příliš rychlá jízda nebo zastavení způsobí prohlubně v podlaze. Pro začátečníky doporučujeme orbitální brusku — pomalejší ale bezpečnější. Profesionál se vyplatí pro velké plochy nebo historické parkety s geometrickým vzorem.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/renovovat-parkety" title="Jak renovovat parketovou podlahu – broušení, tmelení, lak 2026" />

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
                <li><a href="#kdy">Renovovat vs. vyměnit</a></li>
                <li><a href="#nastroje">Nářadí</a></li>
                <li><a href="#brouseni">Broušení</a></li>
                <li><a href="#tmeleni">Tmelení spár</a></li>
                <li><a href="#povrch">Lak, olej nebo vosk</a></li>
                <li><a href="#chyby">Nejčastější chyby</a></li>
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
        .article-body h3{font-family:var(--font-sans);font-size:16px;font-weight:600;margin-top:24px;margin-bottom:10px;color:var(--text)}
        .article-body p{font-size:16px;line-height:1.75;color:#2a2a28;font-weight:300;margin-bottom:14px}
        .article-body ul,.article-body ol{padding-left:22px;margin-bottom:16px;display:flex;flex-direction:column;gap:8px}
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
