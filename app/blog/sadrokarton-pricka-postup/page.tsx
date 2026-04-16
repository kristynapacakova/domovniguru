import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak postavit příčku ze sádrokartonu – profily, desky, spárování 2026",
  description: "Sádrokartonová příčka krok za krokem. Jak vyměřit, postavit ocelové profily, přišroubovat desky a přetmelit spáry. Postup pro laiky bez speciálního nářadí.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/sadrkarton-pricka-postup" },
  openGraph: { title: "Jak postavit příčku ze sádrokartonu 2026", description: "Sádrokartonová příčka krok za krokem – profily, desky, spárování.", url: "https://www.domovniguru.cz/blog/sadrkarton-pricka-postup", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-15T08:00:00Z", modifiedTime: "2026-04-15T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak postavit příčku ze sádrokartonu 2026", description: "Sádrokartonová příčka krok za krokem – profily, desky, spárování." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/sadrkarton-pricka-postup#article",
    "headline": "Jak postavit příčku ze sádrokartonu – profily, desky, spárování 2026",
    "datePublished": "2026-04-15T08:00:00Z",
    "dateModified": "2026-04-15T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak postavit příčku ze sádrokartonu", "sádrokarton příčka postup", "ocelové profily příčka", "sádrokartonová stěna", "spárování sádrokarton", "SDK příčka DIY"]
  }]
};

const RELATED = [
  { title: "Jak naplánovat rekonstrukci bytu", href: "/blog/planovani-rekonstrukce-bytu", read: "8 min" },
  { title: "Jak malovat zeď – kompletní průvodce", href: "/blog/jak-malovat-zed", read: "5 min" },
  { title: "Jak opravit škrábance a díry ve zdi", href: "/blog/opravit-skrabance-diry-ve-zdi", read: "5 min" },
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
              <span>Sádrokartonová příčka</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏠 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 8 min čtení</span>
              </div>
              <h1 className="article-h1">Jak postavit příčku ze sádrokartonu – profily, desky, spárování</h1>
              <p className="article-lead">Sádrokartonová příčka je nejrychlejší způsob jak rozdělit místnost nebo vytvořit novou stěnu. Zvládneš ji sám za víkend — bez zedníků a bez lití betonu.</p>
              <div className="article-meta-row"><span>Aktualizováno: 15. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/sadrkarton-pricka-postup" title="Jak postavit příčku ze sádrokartonu – profily, desky, spárování 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="200" fill="#f8f6f2"/>
                <defs>
                  <linearGradient id="sdkPanel" x1="0" y1="0" x2="1" y2="0" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#e8e4de"/><stop offset="100%" stopColor="#d8d4ce"/>
                  </linearGradient>
                </defs>

                {/* Průřez příčkou */}
                <g transform="translate(30,20)">
                  <rect x="0" y="0" width="220" height="160" rx="8" fill="#fff" stroke="#d8d0c8" strokeWidth="1.2"/>
                  <text x="110" y="18" textAnchor="middle" fontSize="9" fill="#6a6050" fontWeight="700">PRŮŘEZ PŘÍČKOU</text>

                  {/* SDK deska levá */}
                  <rect x="15" y="25" width="20" height="120" rx="2" fill="url(#sdkPanel)" stroke="#c0b8b0" strokeWidth="1"/>
                  <text x="25" y="145" textAnchor="middle" fontSize="6.5" fill="#8a7060">SDK</text>

                  {/* Profil UW/CW */}
                  <rect x="35" y="25" width="10" height="120" rx="1" fill="#909090" stroke="#707070" strokeWidth="0.8"/>
                  <rect x="35" y="25" width="10" height="4" fill="#707070"/>
                  <rect x="35" y="141" width="10" height="4" fill="#707070"/>

                  {/* Minerální vata */}
                  <rect x="45" y="25" width="70" height="120" rx="2" fill="#f0e8c8" stroke="#d0c8a0" strokeWidth="0.8"/>
                  {[35,50,65,80,95,110,125].map(y => (
                    <path key={y} d={`M45 ${y} Q60 ${y-5} 80 ${y} Q100 ${y+5} 115 ${y}`} stroke="#c0b080" strokeWidth="0.8" fill="none" opacity="0.5"/>
                  ))}
                  <text x="80" y="90" textAnchor="middle" fontSize="7" fill="#a09060">minerální</text>
                  <text x="80" y="100" textAnchor="middle" fontSize="7" fill="#a09060">vata</text>

                  {/* Profil vpravo */}
                  <rect x="115" y="25" width="10" height="120" rx="1" fill="#909090" stroke="#707070" strokeWidth="0.8"/>

                  {/* SDK deska pravá */}
                  <rect x="125" y="25" width="20" height="120" rx="2" fill="url(#sdkPanel)" stroke="#c0b8b0" strokeWidth="1"/>

                  {/* Popisky */}
                  <text x="45" y="157" fontSize="6.5" fill="#909090">CW profil</text>
                  <text x="125" y="157" fontSize="6.5" fill="#8a7060">SDK</text>
                </g>

                {/* Postup */}
                <g transform="translate(268,15)">
                  <rect x="0" y="0" width="470" height="170" rx="8" fill="#fff" stroke="#e0d8d0" strokeWidth="1"/>
                  <text x="235" y="18" textAnchor="middle" fontSize="9" fill="#6a6050" fontWeight="700">POSTUP STAVBY PŘÍČKY</text>

                  {[
                    { n:"1", text:"Vyznačení na podlahu, zeď a strop", sub:"šňůra + vodováha + fix", color:"#4a90d9" },
                    { n:"2", text:"Montáž UW profilů (podlaha, strop)", sub:"hmoždinky + šrouby, rozteč 60 cm", color:"#f59e0b" },
                    { n:"3", text:"Montáž CW svislých profilů", sub:"rozteč 62,5 cm (pro 125 cm desky)", color:"#9b6fd4" },
                    { n:"4", text:"Přišroubovat první stranu SDK desek", sub:"rychlošrouby 3,5×25 mm, rozteč 25 cm", color:"#5a9e6f" },
                    { n:"5", text:"Vložit minerální vatu + rozvody", sub:"elektro, případně voda", color:"#e07040" },
                    { n:"6", text:"Přišroubovat druhou stranu desek", sub:"spáry musí být na různých místech", color:"#5a9e6f" },
                    { n:"7", text:"Tmelení spár + bandáž + přebrousit", sub:"2 vrstvy tmelu, jemný papír 120", color:"#8B6340" },
                  ].map(({n, text, sub, color}, i) => {
                    const col = i < 4 ? 0 : 1;
                    const row = i < 4 ? i : i - 4;
                    return (
                      <g key={i} transform={`translate(${col*232+10}, ${26+row*35})`}>
                        <circle cx="12" cy="14" r="11" fill={color} opacity="0.15"/>
                        <text x="12" y="18" textAnchor="middle" fontSize="9" fill={color} fontWeight="700">{n}</text>
                        <text x="28" y="12" fontSize="9" fill="#2a2a28" fontWeight="600">{text}</text>
                        <text x="28" y="24" fontSize="7.5" fill="#8a8078">{sub}</text>
                      </g>
                    );
                  })}
                </g>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#material">Materiál a nářadí</a></li>
                <li><a href="#profily">Montáž profilů</a></li>
                <li><a href="#desky">Pokládka desek</a></li>
                <li><a href="#izolace">Izolace a rozvody</a></li>
                <li><a href="#tmeleni">Tmelení a finalizace</a></li>
                <li><a href="#typy">Typy sádrokartonových desek</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="material">
              <h2>Materiál a nářadí – co potřebuješ</h2>
              <h3>Materiál (pro příčku 3×2,5 m = 7,5 m²)</h3>
              <ul>
                <li><strong>SDK desky:</strong> 2× 7,5 m² = 15 m² desek (+ 10 % rezerva). Standardní deska 12,5 mm nebo 15 mm pro lepší zvukovou izolaci.</li>
                <li><strong>UW profil (podlahový/stropní):</strong> Délka příčky × 2 = 6 m + rezerva. Šířka 75 mm pro standardní příčku.</li>
                <li><strong>CW profil (svislý):</strong> Výška místnosti × počet profilů. Rozteč 62,5 cm pro desky šířky 125 cm.</li>
                <li><strong>Minerální vata:</strong> Plocha příčky. Tloušťka 50–75 mm pro zvukovou izolaci.</li>
                <li><strong>Rychlošrouby:</strong> 3,5×25 mm pro SDK na profily, 3,5×35 mm pro silnější desky.</li>
                <li><strong>Tmel a bandážová páska:</strong> 1 kg tmelu na 5 m² spár. Papírová nebo sklotextilní bandáž.</li>
              </ul>
              <h3>Nářadí</h3>
              <ul>
                <li>Vrtačka s příklepem, šroubovák (ideálně akumulátorový)</li>
                <li>Nůž na sádrokarton (speciální lámací)</li>
                <li>Vodováha (min. 1 m), olovnice, šňůra na vyznačení</li>
                <li>Špachtle na tmelení, brusný papír</li>
              </ul>
            </section>

            <section id="profily">
              <h2>Montáž profilů – základ příčky</h2>
              <ul>
                <li><strong>Krok 1 — Vyznačení:</strong> Na podlahu vyznač přímou čáru kde bude příčka. Pomocí olovnice přenes čáru na strop. Na boční stěny vyznač svislou čáru. Zkontroluj pravé úhly.</li>
                <li><strong>Krok 2 — UW profily (podlaha a strop):</strong> Přilep akustickou pásku na spodní stranu profilu (tlumí zvuk). Přišroubuj UW profil na podlahu pomocí hmoždinek nebo vrutů (rozteč 60 cm).</li>
                <li><strong>Krok 3 — Svislé CW profily:</strong> Do UW profilů vsaď svislé CW profily. Rozteč musí být 62,5 cm pro desky šířky 125 cm — tak aby okraje desek vždy padly na střed profilu. Profily nesešroubovávej — musí se volně pohybovat (teplotní roztažnost).</li>
                <li><strong>Krok 4 — Rohové profily:</strong> V rozích místnosti nebo u stěn použij speciální rohový UA profil přišroubovaný do zdi.</li>
              </ul>
            </section>

            <section id="desky">
              <h2>Pokládka sádrokartonových desek</h2>
              <ul>
                <li><strong>Řezání desek:</strong> Naznač čáru, prořízni papír nožem, přelom přes hranu a přeřízni zadní papír. Hranu uhladit hoblíkem na SDK.</li>
                <li><strong>Šroubování:</strong> Rychlošrouby ve vzdálenosti 25 cm podél profilů. Šrouby zapusť 1 mm pod povrch desky — ne hlouběji (praskne sádra). Šrouby na krajích desek min. 10 mm od hrany.</li>
                <li><strong>Spáry desek:</strong> Svislé spáry musí být na CW profilech. Vodorovné spáry na levé a pravé straně příčky nesmí být ve stejné výšce — posuň o minimálně 40 cm.</li>
                <li><strong>Mezera u podlahy:</strong> Nechej 10 mm mezeru mezi deskou a podlahou — zabrání nasávání vlhkosti. Zakryje se lištou.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> První stranu příčky opláštěj celou, pak vlož izolaci a teprve pak opláštěj druhou stranu. Nestav příčku symetricky (nejprve polovina z každé strany) — hůře se dosahuje na spáry a izolaci.</div>
            </section>

            <section id="izolace">
              <h2>Izolace a rozvody uvnitř příčky</h2>
              <ul>
                <li><strong>Minerální vata:</strong> Vlož pásy minerální vaty mezi profily — zaplní celý prostor. Minerální vata výrazně zlepší zvukovou izolaci příčky. Bez ní příčka přenáší zvuk jako buben.</li>
                <li><strong>Elektrické rozvody:</strong> Kabely veď v chráničce (flexi trubka) uvnitř příčky před zavřením druhé strany. Výstupní otvory pro zásuvky vyřízni speciální korunkou ještě na ploché desce.</li>
                <li><strong>Dveřní otvor:</strong> Pro dveřní otvor použij zesílený UA profil po stranách a vodorovný profil nahoře. Šíři otvoru navrhni o 3–5 cm větší než zárubně.</li>
              </ul>
            </section>

            <section id="tmeleni">
              <h2>Tmelení spár a finalizace</h2>
              <p>Tmelení spár je nejzdlouhavější část — ale i nejdůležitější pro výsledný vzhled. Špatně přetmelená příčka bude mít viditelné nerovnosti pod barvou.</p>
              <ul>
                <li><strong>Krok 1 — První vrstva tmelu:</strong> Nanes tmel do spáry, přilož bandážovou pásku a zahlaď tmelem. Tmel musí proniknout přes pásku.</li>
                <li><strong>Krok 2 — Druhá vrstva:</strong> Po zaschnutí (4–6 hodin) nanes širší vrstvu tmelu (10–15 cm) přes pásku. Zahlaď co nejrovněji.</li>
                <li><strong>Krok 3 — Broušení:</strong> Po zaschnutí (24 hodin) přebrousit jemným papírem (120). Přechod musí být zcela plynulý — bez hmatatelné hrany.</li>
                <li><strong>Krok 4 — Penetrace a malování:</strong> Penetrovat celou příčku (SDK je savý), pak malovat standardní barvou.</li>
              </ul>
            </section>

            <section id="typy">
              <h2>Typy sádrokartonových desek</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ desky</th><th>Barva papíru</th><th>Vhodné pro</th><th>Cena (m²)</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Standardní (RB)</strong></td><td>Bílá</td><td>Příčky, podhledy v suchých prostorách</td><td>80–120 Kč</td></tr>
                    <tr><td><strong>Impregnovaná (RBI/H2)</strong></td><td>Zelená</td><td>Koupelna, kuchyň — odolná vlhkosti</td><td>120–180 Kč</td></tr>
                    <tr><td><strong>Protipožární (RF)</strong></td><td>Červená/růžová</td><td>Průchodky, technické místnosti</td><td>130–200 Kč</td></tr>
                    <tr><td><strong>Akustická</strong></td><td>Bílá</td><td>Zvuková izolace mezi místnostmi</td><td>150–250 Kč</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Jak moc izoluje sádrokartonová příčka zvuk?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Standardní jednoduchá příčka (SDK + profily, bez izolace) má Rw kolem 35–38 dB — to nestačí pro oddělení ložnice od obývacího pokoje. S minerální vatou uvnitř se dostaneš na 42–48 dB, což je výrazně lepší. Pro maximální zvukovou izolaci použij dvojité opláštění (2 desky na každé straně) a akustické desky — Rw až 55 dB.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Mohu zavěsit těžké předměty na sádrokartonovou příčku?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Na sádrokarton bez kotvení do profilu lze zavěsit max. 15–20 kg (obrázky, lehké police). Pro těžší předměty (TV, police s knihami) musíš trefně kotvit přímo do ocelového CW profilu nebo použít speciální sádrokartonové hmoždinky (molly) — únosnost až 30–50 kg. Při stavbě příčky je vhodné plánovat kde bude těžká police a přidat extra profil.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Kolik stojí sádrokartonová příčka?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Materiál na příčku 3×2,5 m (7,5 m²) stojí 2 000–5 000 Kč (desky, profily, tmel, vata). Profesionální montáž přidá 150–300 Kč/m², tedy 1 100–2 250 Kč práce. Celkem 3 000–7 000 Kč za příčku. Svépomocí ušetříš práci — za víkend zvládneš příčku sám.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/sadrkarton-pricka-postup" title="Jak postavit příčku ze sádrokartonu – profily, desky, spárování 2026" />

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
                <li><a href="#material">Materiál a nářadí</a></li>
                <li><a href="#profily">Montáž profilů</a></li>
                <li><a href="#desky">Pokládka desek</a></li>
                <li><a href="#izolace">Izolace a rozvody</a></li>
                <li><a href="#tmeleni">Tmelení a finalizace</a></li>
                <li><a href="#typy">Typy desek</a></li>
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
