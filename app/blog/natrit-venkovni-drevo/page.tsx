import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak natřít venkovní dřevo – lazura, olej nebo lak 2026",
  description: "Lazura, olej nebo lak? Správná příprava povrchu a postup pro dlouhotrvající ochranu terasy, plotu nebo zahradního nábytku.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/natrit-venkovni-drevo" },
  openGraph: { title: "Jak natřít venkovní dřevo – lazura, olej nebo lak 2026", description: "Terasa, plot, zahradní nábytek – jak vybrat a nanést ochranu na venkovní dřevo.", url: "https://www.domovniguru.cz/blog/natrit-venkovni-drevo", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-22T08:00:00Z", modifiedTime: "2026-04-22T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20nat%C5%99%C3%ADt%20venkovn%C3%AD%20d%C5%99evo%20%E2%80%93%20lazura%2C%20olej%20nebo%20lak%202026&cat=blog", width: 1200, height: 630, alt: "Jak natřít venkovní dřevo – lazura, olej nebo lak 2026" }] },
  twitter: { card: "summary_large_image", title: "Jak natřít venkovní dřevo 2026", description: "Lazura, olej nebo lak – výběr a postup pro ochranu venkovního dřeva." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/natrit-venkovni-drevo#article",
    "headline": "Jak natřít venkovní dřevo – lazura, olej nebo lak 2026",
    "datePublished": "2026-04-22T08:00:00Z",
    "dateModified": "2026-06-04T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak natřít venkovní dřevo", "lazura na dřevo", "olej na terasu", "ochrana venkovního dřeva", "lak na venkovní dřevo", "impregnace dřeva"]
  }, {
    "@type": "FAQPage",
    "@id": "https://www.domovniguru.cz/blog/natrit-venkovni-drevo#faq",
    "mainEntity": [
      { "@type": "Question", "name": "Mohu natřít mokré dřevo?", "acceptedAnswer": { "@type": "Answer", "text": "Ne — vlhkost dřeva musí být pod 18–20 % (měřit vlhkoměrem dřeva). Mokré dřevo nepřijme přípravek správně a nátěr se brzy začne loupit nebo bublat. Po dešti čekej min. 48 hodin suchého počasí. Po tlakové vodě min. 72 hodin." } },
      { "@type": "Question", "name": "Proč se nátěr loupl i když jsem postupoval správně?", "acceptedAnswer": { "@type": "Answer", "text": "Nejčastější příčiny: dřevo bylo příliš vlhké při nanášení, povrch nebyl dostatečně vyčištěn od starého nátěru nebo řas, nanesena příliš silná vrstva, nebo přípravek nanesen za přímého slunce (barva schla příliš rychle na povrchu a uzavřela vlhkost uvnitř). Loupající nátěr obrousit a začít znovu." } },
      { "@type": "Question", "name": "Jaký je rozdíl mezi lazurou a mořidlem?", "acceptedAnswer": { "@type": "Answer", "text": "Lazura chrání i barví — obsahuje pigmenty, pojiva a UV filtry. Mořidlo pouze barví dřevo (jako barvivo) bez ochrany — po mořidle musíš nanést ochranu (lak, olej). Pro venkovní použití volte lazuru která kombinuje oboje, nebo mořidlo + lak dohromady." } }
    ]
  }, {
    "@type": "HowTo",
    "@id": "https://www.domovniguru.cz/blog/natrit-venkovni-drevo#howto",
    "name": "Jak natřít venkovní dřevo – lazura, olej nebo lak 2026",
    "description": "Lazura, olej nebo lak? Správná příprava povrchu a postup pro dlouhotrvající ochranu terasy, plotu nebo zahradního nábytku.",
    "step": [
      { "@type": "HowToStep", "name": "Jak vybrat správný přípravek", "text": "Jak vybrat správný přípravek" },
      { "@type": "HowToStep", "name": "Příprava povrchu – nejdůležitější krok", "text": "Příprava povrchu – nejdůležitější krok" },
      { "@type": "HowToStep", "name": "Nanášení krok za krokem", "text": "Nanášení krok za krokem" },
      { "@type": "HowToStep", "name": "Jak a kdy obnovit nátěr", "text": "Jak a kdy obnovit nátěr" }
    ]
  }]
};

const RELATED = [
  { title: "Jak ošetřit dřevěnou terasu před zimou", href: "/blog/drevo-terasa-zima", read: "5 min" },
  { title: "Jak postavit dřevěný zahradní plot", href: "/blog/zahradni-plot-ze-dreva", read: "7 min" },
  { title: "Jak postavit pergolu na terasu", href: "/blog/pergola-postup-stavba", read: "9 min" },
  { title: "Jak ošetřit zahradní nábytek", href: "/blog/osetrit-zahradni-nabytek", read: "4 min" },
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
              <span>Nátěr venkovního dřeva</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování & barvy</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak natřít venkovní dřevo – lazura, olej nebo lak</h1>
              <p className="article-lead">Nenatřené venkovní dřevo šediví, praská a hnije. Správná ochrana prodlouží životnost terasy, plotu nebo zahradního nábytku o 10–20 let. Výběr přípravku je přitom jednodušší než si myslíš.</p>
              <div className="article-meta-row"><span>Aktualizováno: 4. června 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/natrit-venkovni-drevo" title="Jak natřít venkovní dřevo – lazura, olej nebo lak 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 185" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="185" fill="#f8f4ee"/>
                {[
                  { x:20, name:"Lazura", icon:"🎨", pros:"Barví + chrání\nProniká do dřeva\nSnadná obnova", cons:"Méně odolná\nvůči šlápnutí", life:"3–5 let", color:"#c8904a", best:"Plot, zahradní\nnábytek, fasáda" },
                  { x:210, name:"Terasový olej", icon:"💧", pros:"Přirozený vzhled\nDřevo dýchá\nSnadná aplikace", cons:"Obnovovat\n1–2× ročně", life:"1–2 roky", color:"#a07030", best:"Terasa, palubky\ndřevěná prkna" },
                  { x:400, name:"Tvrdý voskový olej", icon:"🌟", pros:"Odolný + přírodní\nDlohotrvající\nRozetřít rukou", cons:"Dražší přípravek", life:"3–7 let", color:"#806020", best:"Terasa, nábytek\nvysoká zátěž" },
                  { x:590, name:"Venkovní lak", icon:"✨", pros:"Nejodolnější\nVoděodolný film\nLesklý povrch", cons:"Praská a loupe\nTěžká obnova", life:"5–10 let", color:"#4a4a40", best:"Okna, dveře\nkrytá místa" },
                ].map(({x, name, icon, pros, cons, life, color, best}) => (
                  <g key={x} transform={`translate(${x}, 12)`}>
                    <rect x="0" y="0" width="175" height="160" rx="8" fill="#fff" stroke={color} strokeWidth="1.2"/>
                    <rect x="0" y="0" width="175" height="5" rx="4" fill={color} opacity="0.5"/>
                    <text x="87" y="28" textAnchor="middle" fontSize="16">{icon}</text>
                    <text x="87" y="46" textAnchor="middle" fontSize="11" fill={color} fontWeight="700">{name}</text>
                    <line x1="10" y1="53" x2="165" y2="53" stroke={color} strokeWidth="0.5" opacity="0.4"/>
                    {pros.split('\n').map((line, i) => <text key={i} x="12" y={67+i*12} fontSize="8" fill="#3a7e4f">✓ {line}</text>)}
                    {cons.split('\n').map((line, i) => <text key={i} x="12" y={104+i*12} fontSize="8" fill="#e07040">✗ {line}</text>)}
                    <rect x="8" y="128" width="159" height="28" rx="5" fill={color} opacity="0.08"/>
                    <text x="87" y="140" textAnchor="middle" fontSize="8" fill={color} fontWeight="600">Trvanlivost: {life}</text>
                    <text x="87" y="151" textAnchor="middle" fontSize="7.5" fill="#6a6050">{best}</text>
                  </g>
                ))}
                <rect y="168" width="760" height="17" fill="#f0e8d8" opacity="0.5"/>
                <text x="380" y="180" textAnchor="middle" fontSize="8" fill="#8a7050" fontWeight="600" letterSpacing="0.06em">🪵 TERASA → OLEJ · PLOT → LAZURA · OKNA → LAK · VŽDY PŘIPRAVIT POVRCH PŘED NÁTĚREM</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#vyber">Jak vybrat správný přípravek</a></li>
                <li><a href="#priprava">Příprava povrchu</a></li>
                <li><a href="#postup">Nanášení krok za krokem</a></li>
                <li><a href="#udrzba">Jak a kdy obnovit nátěr</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="vyber">
              <h2>Jak vybrat správný přípravek</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Přípravek</th><th>Trvanlivost</th><th>Obnova</th><th>Nejlepší pro</th><th>Cena (l)</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Lazura (transparentní)</strong></td><td>3–5 let</td><td>Přetřít za sucha</td><td>Plot, nábytek, fasáda</td><td>200–600 Kč</td></tr>
                    <tr><td><strong>Terasový olej</strong></td><td>1–2 roky</td><td>Přetřít čistou plochu</td><td>Terasa, palubky</td><td>300–800 Kč</td></tr>
                    <tr><td><strong>Tvrdý voskový olej</strong></td><td>3–7 let</td><td>Přetřít čistou plochu</td><td>Terasa, nábytek</td><td>500–1 200 Kč</td></tr>
                    <tr><td><strong>Venkovní lak (PU)</strong></td><td>5–10 let</td><td>Obrousit + přetřít</td><td>Okna, dveře</td><td>400–900 Kč</td></tr>
                    <tr><td><strong>Impregnace (bezbarvá)</strong></td><td>2–5 let</td><td>Přetřít</td><td>Základ pod lazuru</td><td>150–400 Kč</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Doporučení:</strong> Pro terasu volte terasový olej nebo tvrdý voskový olej — lak na terase praská a loupe se od šlápání. Na plot a zahradní nábytek lazura. Na okna a dveře venkovní PU lak.</div>
            </section>

            <section id="priprava">
              <h2>Příprava povrchu – nejdůležitější krok</h2>
              <ul>
                <li><strong>Čištění:</strong> Odstraň nečistoty, řasy a staré odlupující se vrstvy. Tlakovou vodou nebo zahradní hadicí s kartáčem. Nechej dřevo úplně vyschnout — min. 48 hodin za sucha.</li>
                <li><strong>Broušení:</strong> Brusným papírem (80–120) přebrousit povrch ve směru vlákna. Otevřeš póry dřeva pro lepší proniknutí přípravku. Zaoblí případné ostré hrany.</li>
                <li><strong>Starý nátěr:</strong> Lazuru nebo olej lze přetřít novou vrstvou přes starý nátěr (pokud se neloupe). Lak musíš obrousit nebo zcela odstranit chemickým odstraňovačem.</li>
                <li><strong>Šedivé dřevo:</strong> Šedivou vrstvu (způsobenou UV zářením) odstraní čistič dřeva (oxalejselná kyselina nebo speciální přípravek). Nechej působit a opláchni. Dřevo se vrátí k původní barvě.</li>
              </ul>
            </section>

            <section id="postup">
              <h2>Nanášení krok za krokem</h2>
              <ul>
                <li><strong>Podmínky:</strong> Nenanosit za přímého slunce, deště nebo pod 8 °C. Ideální: oblačný den, 15–25 °C.</li>
                <li><strong>První vrstva:</strong> Nařeď dle návodu výrobce (první vrstva bývá řidší pro lepší proniknutí). Nanes štětcem nebo válečkem ve směru vlákna dřeva.</li>
                <li><strong>Schnutí:</strong> Nechej zaschnout dle návodu — typicky 4–24 hodin. Nešlápej na terasu ani nepřesouvej nábytek.</li>
                <li><strong>Druhá vrstva:</strong> Po zaschnutí lehce přebrousit jemným papírem (150–180), smetat prach a nanést druhou vrstvu bez ředění.</li>
                <li><strong>Řezné plochy:</strong> Vrchní zakončení prken a řezné plochy jsou nejnáchylnější — nanes extra vrstvu přípravku speciálně na tyto místa.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Podzim je ideální čas na nátěr — dřevo je suché po létě a nátěr ochrání přes vlhkou zimu. Jaro je druhý nejlepší termín.</div>
            </section>

            <section id="udrzba">
              <h2>Jak a kdy obnovit nátěr</h2>
              <ul>
                <li><strong>Lazura a olej:</strong> Každé 1–3 roky. Signál k obnově: dřevo přestává odpuzovat vodu (kapky se nevytvoří ale vsáknou). Přetři bez nutnosti broušení pokud se předchozí vrstva neloupe.</li>
                <li><strong>Tvrdý voskový olej:</strong> Každé 3–5 let. Před obnovou vyčisti speciálním čističem, nechej vyschnout, přetři novou vrstvou.</li>
                <li><strong>Lak:</strong> Každých 5–10 let nebo při prvních známkách loupání. Loupající lak obrousit, případně zcela odstranit chemicky, přetřít základním lakem a aplikovat nový nátěr.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Mohu natřít mokré dřevo?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ne — vlhkost dřeva musí být pod 18–20 % (měřit vlhkoměrem dřeva). Mokré dřevo nepřijme přípravek správně a nátěr se brzy začne loupit nebo bublat. Po dešti čekej min. 48 hodin suchého počasí. Po tlakové vodě min. 72 hodin.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Proč se nátěr loupl i když jsem postupoval správně?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Nejčastější příčiny: dřevo bylo příliš vlhké při nanášení, povrch nebyl dostatečně vyčištěn od starého nátěru nebo řas, nanesena příliš silná vrstva, nebo přípravek nanesen za přímého slunce (barva schla příliš rychle na povrchu a uzavřela vlhkost uvnitř). Loupající nátěr obrousit a začít znovu.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jaký je rozdíl mezi lazurou a mořidlem?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Lazura chrání i barví — obsahuje pigmenty, pojiva a UV filtry. Mořidlo pouze barví dřevo (jako barvivo) bez ochrany — po mořidle musíš nanést ochranu (lak, olej). Pro venkovní použití volte lazuru která kombinuje oboje, nebo mořidlo + lak dohromady.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/natrit-venkovni-drevo" title="Jak natřít venkovní dřevo – lazura, olej nebo lak 2026" />

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
                <li><a href="#vyber">Výběr přípravku</a></li>
                <li><a href="#priprava">Příprava povrchu</a></li>
                <li><a href="#postup">Nanášení</a></li>
                <li><a href="#udrzba">Obnova nátěru</a></li>
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
