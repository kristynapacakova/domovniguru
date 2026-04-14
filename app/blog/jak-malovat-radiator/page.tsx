import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak malovat radiátor – příprava, správná barva a postup 2026",
  description: "Žloutoucí nebo odlupující se barva na radiátoru? Jak připravit povrch, vybrat správnou barvu odolnou teplotě a nanést ji bez bublin a šmouh. Postup krok za krokem.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-malovat-radiator" },
  openGraph: { title: "Jak malovat radiátor – příprava, barva a postup 2026", description: "Žloutoucí radiátor? Jak připravit povrch, vybrat teplotně odolnou barvu a malovat bez šmouh.", url: "https://www.domovniguru.cz/blog/jak-malovat-radiator", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-13T08:00:00Z", modifiedTime: "2026-04-13T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak malovat radiátor 2026", description: "Žloutoucí radiátor? Správná barva a postup krok za krokem." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/jak-malovat-radiator#article",
    "headline": "Jak malovat radiátor – příprava, správná barva a postup 2026",
    "datePublished": "2026-04-13T08:00:00Z",
    "dateModified": "2026-04-13T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak malovat radiátor", "barva na radiátor", "žloutnutí radiátoru", "příprava radiátoru na malování", "teplotně odolná barva", "radiátor nátěr"]
  }]
};

const RELATED = [
  { title: "Jak malovat zeď – kompletní průvodce pro začátečníky", href: "/blog/jak-malovat-zed", read: "5 min" },
  { title: "Jak odvzdušnit radiátor – krok za krokem", href: "/blog/jak-odvzdusnit-radiatory", read: "5 min" },
  { title: "Jak malovat rohy a lišty bez přetahování", href: "/blog/jak-malovat-rohy-a-listy", read: "5 min" },
  { title: "Jak ušetřit na vytápění bez výměny kotle", href: "/blog/usetrit-na-vytapeni", read: "7 min" },
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
              <span>Malování radiátoru</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování & barvy</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak malovat radiátor – příprava, správná barva a postup</h1>
              <p className="article-lead">Žloutoucí nebo odlupující se barva na radiátoru kazí dojem celé místnosti. Přemalování zvládneš sám za odpoledne — ale jen pokud použiješ správnou barvu a správně připravíš povrch.</p>
              <div className="article-meta-row"><span>Aktualizováno: 13. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/jak-malovat-radiator" title="Jak malovat radiátor – příprava, správná barva a postup 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="200" fill="#fdf6f0"/>
                <defs>
                  <linearGradient id="radGradM" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#e8e0d8"/><stop offset="100%" stopColor="#d8d0c8"/>
                  </linearGradient>
                </defs>

                {/* ── PŘED (vlevo) ── */}
                <g transform="translate(20,20)">
                  <rect x="0" y="0" width="190" height="155" rx="6" fill="#f8f4ee" stroke="#e0d8d0" strokeWidth="1"/>
                  <rect x="15" y="8" width="120" height="16" rx="3" fill="#e07a5f" opacity="0.15"/>
                  <text x="75" y="20" textAnchor="middle" fontSize="8.5" fill="#c05030" fontWeight="700">❌ STARÝ RADIÁTOR</text>
                  <rect x="15" y="30" width="160" height="110" rx="6" fill="url(#radGradM)" stroke="#c8c0b8" strokeWidth="1.2"/>
                  {[22,46,70,94,118,142].map((x,i)=>(
                    <g key={i}>
                      <rect x={x} y="36" width="18" height="98" rx="3" fill="#d8cfc8" stroke="#c0b8b0" strokeWidth="0.7"/>
                      {/* Žloutnutí / odlupování */}
                      <ellipse cx={x+9} cy={50+i*8} rx={4+i%3*2} ry={3} fill="#d4a830" opacity="0.5"/>
                      <ellipse cx={x+9} cy={80} rx="3" ry="4" fill="#c8a020" opacity="0.4"/>
                    </g>
                  ))}
                  <text x="95" y="153" textAnchor="middle" fontSize="8" fill="#a08060">žloutnutí, odlupování</text>
                </g>

                {/* Šipka */}
                <g transform="translate(222,90)">
                  <path d="M0 10 L40 10" stroke="#c8b89a" strokeWidth="1.8" strokeLinecap="round"/>
                  <path d="M34 5 L42 10 L34 15" stroke="#c8b89a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <text x="20" y="5" textAnchor="middle" fontSize="7.5" fill="#a09080">přemalovat</text>
                </g>

                {/* ── POSTUP (střed) ── */}
                <g transform="translate(273,15)">
                  <rect x="0" y="0" width="215" height="165" rx="8" fill="#fff" stroke="#e0d8d0" strokeWidth="1"/>
                  <text x="107" y="18" textAnchor="middle" fontSize="9" fill="#6a6058" fontWeight="700" letterSpacing="0.06em">POSTUP</text>
                  {[
                    { n:"1", text:"Vypni topení, nech vychladnout", color:"#4a90d9" },
                    { n:"2", text:"Odmaštit — aceton nebo benzín", color:"#f59e0b" },
                    { n:"3", text:"Přebrousit — brusný papír 180", color:"#9b6fd4" },
                    { n:"4", text:"Vyfoukat prach (stlačený vzduch)", color:"#5a9e6f" },
                    { n:"5", text:"Nanést základní nátěr", color:"#e07a5f" },
                    { n:"6", text:"2 vrstvy barvy na radiátor", color:"#5a9e6f" },
                  ].map(({n, text, color}, i)=>(
                    <g key={i} transform={`translate(12, ${25+i*22})`}>
                      <circle cx="10" cy="9" r="9" fill={color} opacity="0.15"/>
                      <text x="10" y="13" textAnchor="middle" fontSize="9" fill={color} fontWeight="700">{n}</text>
                      <text x="26" y="13" fontSize="9" fill="#2a2a28" fontWeight="500">{text}</text>
                    </g>
                  ))}
                </g>

                {/* Šipka 2 */}
                <g transform="translate(500,90)">
                  <path d="M0 10 L40 10" stroke="#c8b89a" strokeWidth="1.8" strokeLinecap="round"/>
                  <path d="M34 5 L42 10 L34 15" stroke="#c8b89a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <text x="20" y="5" textAnchor="middle" fontSize="7.5" fill="#a09080">výsledek</text>
                </g>

                {/* ── PO (vpravo) ── */}
                <g transform="translate(550,20)">
                  <rect x="0" y="0" width="190" height="155" rx="6" fill="#f5fdf5" stroke="#c8ddc8" strokeWidth="1"/>
                  <rect x="15" y="8" width="120" height="16" rx="3" fill="#5a9e6f" opacity="0.12"/>
                  <text x="75" y="20" textAnchor="middle" fontSize="8.5" fill="#3a7e4f" fontWeight="700">✅ PO PŘEMALOVÁNÍ</text>
                  <rect x="15" y="30" width="160" height="110" rx="6" fill="#f8f4f0" stroke="#e8e0d8" strokeWidth="1.2"/>
                  {[22,46,70,94,118,142].map((x,i)=>(
                    <rect key={i} x={x} y="36" width="18" height="98" rx="3" fill="#f5f0ec" stroke="#e0d8d0" strokeWidth="0.7"/>
                  ))}
                  {/* Tepelné vlnky */}
                  {[40,80,120].map((x,i)=>(
                    <path key={i} d={`M${x+15} 70 Q${x+20} 60 ${x+25} 70 Q${x+30} 80 ${x+35} 70`} stroke="#e07040" strokeWidth="1.2" fill="none" opacity="0.3" strokeLinecap="round"/>
                  ))}
                  <text x="95" y="153" textAnchor="middle" fontSize="8" fill="#3a7e4f">čistý bílý povrch ✓</text>
                </g>
              </svg>
              <div style={{display:"flex",justifyContent:"space-around",padding:"8px 30px 12px",fontSize:"9px",letterSpacing:"0.1em",color:"#a09080",textTransform:"uppercase",background:"#fdf6f0"}}>
                <span>❌ Žloutnutí a odlupování</span>
                <span>🖌️ 6 kroků přípravy a nátěru</span>
                <span>✅ Čistý bílý radiátor</span>
              </div>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#kdy">Kdy radiátor přemalovat</a></li>
                <li><a href="#barva">Správná barva na radiátor</a></li>
                <li><a href="#priprava">Příprava povrchu</a></li>
                <li><a href="#postup">Postup malování</a></li>
                <li><a href="#nastroje">Nástroje – štětec nebo sprej?</a></li>
                <li><a href="#chyby">Nejčastější chyby</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="kdy">
              <h2>Kdy radiátor přemalovat</h2>
              <p>Ideální čas na přemalování radiátoru je <strong>jaro nebo léto</strong> — topení je vypnuto a radiátor studený. Malování na teplý nebo horký radiátor způsobuje bubliny a nerovnoměrné schnutí.</p>
              <ul>
                <li><strong>Žloutnutí bílé barvy:</strong> Nejčastější problém. Způsobeno UV zářením a teplem. Radiátor nevypadá špinavě — barva prostě zežloutla. Přemalování okamžitě zlepší vzhled místnosti.</li>
                <li><strong>Odlupování barvy:</strong> Způsobeno špatnou přípravou povrchu při předchozím nátěru nebo použitím nevhodné barvy (obyčejná latexová na radiátor žloutne a loupe). Nutná důkladnější příprava.</li>
                <li><strong>Mechanické poškození:</strong> Škrábance, promáčknutí nebo koroze. Před nátěrem opravit — kovárenský tmel na kov, přebrousit.</li>
                <li><strong>Změna barvy:</strong> Chceš radiátor v jiné barvě — antracit, černá nebo barevný akcent? Postup je stejný, jen vyber barvu s požadovaným odstínem.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Přemalování radiátoru je ideální kombinovat s jarním malováním zdi. Nejdřív přemaluj zeď, pak radiátor — tak nepotřebuješ zakrývat čerstvě namalovanou zeď.</div>
            </section>

            <section id="barva">
              <h2>Správná barva na radiátor – co koupit</h2>
              <p>Toto je nejdůležitější rozhodnutí. <strong>Běžná latexová nebo akrylátová barva na radiátor nepatří.</strong> Teplo způsobí že žloutne a loupe se během první topné sezóny.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ barvy</th><th>Teplotní odolnost</th><th>Cena</th><th>Vhodné pro</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Alkydová barva na radiátor</strong></td><td>do 130 °C</td><td>150–350 Kč/l</td><td>Standardní radiátory</td></tr>
                    <tr><td><strong>Akrylátová barva na kov a radiátor</strong></td><td>do 80–100 °C</td><td>200–400 Kč/l</td><td>Radiátory, trochu pomalejší schnutí</td></tr>
                    <tr><td><strong>Sprej na radiátor</strong></td><td>do 100–130 °C</td><td>100–200 Kč/ks</td><td>Malé plochy, profily, obtížná místa</td></tr>
                    <tr><td><strong>Barva na vysoké teploty</strong></td><td>do 600 °C</td><td>200–500 Kč/l</td><td>Kamna, krby — pro radiátory zbytečné</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Hledej barvy s označením <strong>„na radiátory"</strong>, <strong>„na topná tělesa"</strong> nebo <strong>„teplotně odolná do 130 °C"</strong>. Všechny větší značky (Primalex, HET, Balakryl, Dulux) mají speciální řadu na radiátory.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Bílá barva na radiátor bývá označena jako „radiátorová bílá" nebo „sněhobílá" — je formulována tak aby nežloutla při teplotě topení. Standardní bílá zeď-barva na radiátoru zežloutne do jedné sezóny.</div>
            </section>

            <section id="priprava">
              <h2>Příprava povrchu – klíč k trvanlivosti</h2>
              <p>Špatná příprava je příčina 90 % selhání nátěru radiátoru. Věnuj přípravě stejně času jako samotnému malování.</p>
              <ul>
                <li><strong>Krok 1 — Vypni topení a nechej vychladnout:</strong> Radiátor musí být studený — ideálně pokojová teplota. Malování na teplý radiátor způsobuje bubliny, nerovnoměrné schnutí a špatnou přilnavost.</li>
                <li><strong>Krok 2 — Odmastit povrch:</strong> Odmašťovač, aceton nebo technický benzín na hadřík. Přejdi celý povrch radiátoru — mastnota z rukou a prach zhoršují přilnavost barvy.</li>
                <li><strong>Krok 3 — Přebrousit starý nátěr:</strong> Brusný papír zrnitost 180–240. Cílem není odbrousit vše — jen zdrsni povrch aby nová barva lépe přilnula. Přebrousit i místa kde se barva loupe — obrousit hrany odlupků.</li>
                <li><strong>Krok 4 — Odstranit prach:</strong> Stlačený vzduch, vyfoukat ze všech profilů. Pak přejít vlhkým hadříkem a nechat zaschnout.</li>
                <li><strong>Krok 5 — Základní nátěr (pokud je potřeba):</strong> Pokud brousíš až na holý kov nebo je povrch silně poškozený, nanes nejdřív základní nátěr na kov (základ na rez). Nechej zaschnout dle návodu.</li>
              </ul>
            </section>

            <section id="postup">
              <h2>Postup malování radiátoru</h2>
              <p>Radiátor maluj vždy v tomto pořadí — od vnitřku ven, od shora dolů.</p>
              <ul>
                <li><strong>Zakrytí okolí:</strong> Zakryj podlahu novinami nebo fólií. Přelep malířskou páskou podlahovou lištu a zeď těsně kolem radiátoru (5–10 cm).</li>
                <li><strong>Pořadí malování:</strong> Nejdřív vnitřní plochy mezi články (speciálním radiátorovým štětcem nebo sprejem), pak přední a boční plochy. Nakonec trubky přívodu a odvodu.</li>
                <li><strong>První vrstva:</strong> Nanes tenkou vrstvu — radiátorová barva je hustší než zeď-barva. Tenčí vrstvy schnou rovnoměrněji a nedělají kapky.</li>
                <li><strong>Schnutí mezi vrstvami:</strong> Podle pokynů výrobce — obvykle 4–8 hodin. Nekrátit!</li>
                <li><strong>Druhá vrstva:</strong> Nanes kolmo na první vrstvu. Dvě tenké vrstvy jsou vždy lepší než jedna silná.</li>
                <li><strong>Kdy spustit topení:</strong> Počkej aspoň 24 hodin po poslední vrstvě. Ideálně 48 hodin. Příliš brzy spuštěné topení způsobí bubliny a popraskání.</li>
              </ul>
              <div className="article-tip"><strong>⚠️ Pozor:</strong> Při prvním spuštění topení po přemalování může barva mírně páchnout — je to normální. Vyvětrej místnost. Zápach zmizí po 1–2 dnech provozu topení.</div>
            </section>

            <section id="nastroje">
              <h2>Nástroje – štětec nebo sprej?</h2>
              <ul>
                <li><strong>Speciální radiátorový štětec:</strong> Úzký štětec (2–3 cm) s dlouhou rukojetí pro přístup mezi články. Nejlepší volba pro standardní článkový radiátor. Cena 50–150 Kč.</li>
                <li><strong>Sprej:</strong> Rychlý a rovnoměrný nátěr bez stop štětce. Ideální pro deskové (panelové) radiátory s rovnou plochou. Nevýhoda: nutnost důkladného zakrytí okolí — sprej létá daleko.</li>
                <li><strong>Malý váleček (mini roller):</strong> Pro ploché deskové radiátory. Zanechává mírnou texturu ale je rychlý na velké ploché části.</li>
                <li><strong>Kombinace:</strong> Sprej nebo úzký štětec na vnitřní plochy mezi články, štětec nebo mini váleček na přední plochy.</li>
              </ul>
            </section>

            <section id="chyby">
              <h2>Nejčastější chyby při malování radiátoru</h2>
              <ul>
                <li><strong>Použití obyčejné barvy na zeď:</strong> Zežloutne do první topné sezóny. Vždy kupuj barvu speciálně určenou na radiátory a topná tělesa.</li>
                <li><strong>Malování na teplý radiátor:</strong> Bubliny, špatné schnutí, nízká přilnavost. Radiátor musí být studený — vypni topení 2–3 hodiny předem.</li>
                <li><strong>Přeskočení odmašťování:</strong> Mastnota z rukou způsobuje špatnou přilnavost a skvrny. Vždy odmastit před broušením.</li>
                <li><strong>Silná vrstva barvy najednou:</strong> Způsobuje kapky, dlouhé schnutí a praskání. Dvě tenké vrstvy = vždy lepší výsledek.</li>
                <li><strong>Spuštění topení příliš brzy:</strong> Barva potřebuje aspoň 24–48 hodin před prvním ohřevem. Příliš rychlé ohřátí způsobí bubliny.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Proč radiátor žloutne?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Žloutnutí způsobuje kombinace tepla a UV záření. Levné nebo nevhodné barvy žloutnou rychleji. Barvy speciálně označené „na radiátory" obsahují pigmenty odolné žloutnutí při teplotách do 130 °C. Pokud radiátor žloutne každý rok, příčinou je použití nesprávné barvy.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Musím sundávat radiátor ze zdi?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ne, sundávání je zbytečné pro standardní přemalování. Speciální radiátorový štětec s dlouhou rukojetí dostane i na zadní část a do profilů. Sundávání má smysl jen při výměně nebo při malování zdi za radiátorem.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Mohu radiátor namalovat na jinou barvu než bílou?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ano, radiátory v antracitové, černé nebo jiné barvě jsou moderní trend. Radiátorové barvy jsou dostupné v mnoha odstínech nebo je lze namíchat. Tmavé barvy na radiátoru zároveň mírně zvyšují sálání tepla — tmavý povrch vyzařuje teplo efektivněji než bílý.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak dlouho vydrží nátěr radiátoru?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Kvalitní nátěr speciální radiátorovou barvou při správné přípravě povrchu vydrží 5–10 let bez výrazného žloutnutí nebo odlupování. Levná barva nebo špatná příprava zkracuje životnost na 1–3 roky.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/jak-malovat-radiator" title="Jak malovat radiátor – příprava, správná barva a postup 2026" />

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
                <li><a href="#kdy">Kdy přemalovat</a></li>
                <li><a href="#barva">Správná barva</a></li>
                <li><a href="#priprava">Příprava povrchu</a></li>
                <li><a href="#postup">Postup malování</a></li>
                <li><a href="#nastroje">Nástroje</a></li>
                <li><a href="#chyby">Nejčastější chyby</a></li>
                <li><a href="#faq">FAQ</a></li>
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
