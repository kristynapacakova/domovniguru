import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak ošetřit zahradní nábytek – dřevo, kov, plast a ratan 2026",
  description: "Jak ošetřit a připravit zahradní nábytek na sezónu i na zimu. Dřevo, kov, plast a ratan – správná péče aby nábytek vydržel roky.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/osetrit-zahradni-nabytek" },
  openGraph: { title: "Jak ošetřit zahradní nábytek 2026", description: "Dřevo, kov, plast, ratan – jak ošetřit zahradní nábytek na sezónu i zimu.", url: "https://www.domovniguru.cz/blog/osetrit-zahradni-nabytek", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-22T08:00:00Z", modifiedTime: "2026-04-22T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20o%C5%A1et%C5%99it%20zahradn%C3%AD%20n%C3%A1bytek%20%E2%80%93%20d%C5%99evo%2C%20kov%2C%20plast%20a%20ratan%202026&cat=blog", width: 1200, height: 630, alt: "Jak ošetřit zahradní nábytek – dřevo, kov, plast a ratan 2026" }] },
  twitter: { card: "summary_large_image", title: "Jak ošetřit zahradní nábytek 2026", description: "Péče o zahradní nábytek z dřeva, kovu, plastu a ratanu." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/osetrit-zahradni-nabytek#article",
    "headline": "Jak ošetřit zahradní nábytek – dřevo, kov, plast a ratan 2026",
    "datePublished": "2026-04-22T08:00:00Z",
    "dateModified": "2026-06-04T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak ošetřit zahradní nábytek", "péče o zahradní nábytek", "zahradní nábytek dřevo ošetření", "zahradní nábytek kov natřít", "přezimování zahradního nábytku"]
  }, {
    "@type": "FAQPage",
    "@id": "https://www.domovniguru.cz/blog/osetrit-zahradni-nabytek#faq",
    "mainEntity": [
      { "@type": "Question", "name": "Kdy je nejlepší čas na ošetření zahradního nábytku?", "acceptedAnswer": { "@type": "Answer", "text": "Jaro (duben–květen) je ideální — po zimě vyčistit a ošetřit před sezónou. Ošetřovat za suchého dne, teplota min. 10 °C. Podzim (září–říjen) je druhý termín — ošetřit před uložením na zimu. Nikdy neošetřuj mokré dřevo — přípravek nepenetuje správně." } },
      { "@type": "Question", "name": "Jak odstranit plíseň ze zahradního nábytku?", "acceptedAnswer": { "@type": "Answer", "text": "Plíseň na dřevě: roztok octu (1:1 s vodou) nebo speciální biocidní čistič dřeva. Kartáčem vyčistit, opláchnout, nechat vyschnout. Po vyschnutí ošetřit impregnací s biocidní přísadou. Na kovu a plastu: mýdlová voda nebo roztok chloru (1 díl chloru + 10 dílů vody) — pozor na barevné povrchy." } },
      { "@type": "Question", "name": "Lze přebarlit dřevěný zahradní nábytek?", "acceptedAnswer": { "@type": "Answer", "text": "Ano — ale záleží na stávajícím nátěru. Lazura přes lazuru funguje dobře (tmavší přes světlejší). Olejový nátěr přes lazuru — nutno přebrousit. Přebarlit ze světlé na tmavou je snazší než naopak. Před přebarvením vždy vyčistit, nechat vyschnout a lehce přebrousit pro lepší přilnavost." } }
    ]
  }, {
    "@type": "HowTo",
    "@id": "https://www.domovniguru.cz/blog/osetrit-zahradni-nabytek#howto",
    "name": "Jak ošetřit zahradní nábytek – dřevo, kov, plast a ratan 2026",
    "description": "Jak ošetřit a připravit zahradní nábytek na sezónu i na zimu. Dřevo, kov, plast a ratan – správná péče aby nábytek vydržel roky.",
    "step": [
      { "@type": "HowToStep", "name": "Dřevěný zahradní nábytek", "text": "Dřevo je nejkrásnější ale nejnáročnější na péči. Správné ošetření prodlouží životnost o desítky let." },
      { "@type": "HowToStep", "name": "Kovový zahradní nábytek", "text": "Kovový zahradní nábytek" },
      { "@type": "HowToStep", "name": "Plast a polyratan", "text": "Plast a polyratan" },
      { "@type": "HowToStep", "name": "Přírodní ratan a bambus", "text": "Přírodní ratan a bambus" },
      { "@type": "HowToStep", "name": "Přezimování zahradního nábytku", "text": "Přezimování zahradního nábytku" }
    ]
  }]
};

const RELATED = [
  { title: "Jak natřít venkovní dřevo", href: "/blog/natrit-venkovni-drevo", read: "6 min" },
  { title: "Jak ošetřit dřevěnou terasu", href: "/blog/drevo-terasa-zima", read: "5 min" },
  { title: "Jak postavit dřevěný zahradní plot", href: "/blog/zahradni-plot-ze-dreva", read: "7 min" },
  { title: "Jak připravit zahradu na jaro", href: "/blog/jarni-zahrada", read: "7 min" },
];

const MATERIALS = [
  { name:"Masivní dřevo\n(teak, akát)", icon:"🪵", care:"Terasový olej\nnebo lazura", freq:"1–2× ročně", storage:"Venku pod krytem\nnebo ve skladu", color:"#c8904a" },
  { name:"Impregnovaná\nborovice", icon:"🌲", care:"Impregnace\nnebo olej", freq:"1× ročně", storage:"Suchý sklad\nnebo kryt", color:"#5a9e6f" },
  { name:"Kov (hliník,\noccel)", icon:"⚙️", care:"Čištění + anti-\nkorózní nátěr", freq:"Dle opotřebení", storage:"Venku celý rok\n(chránit šrouby)", color:"#808090" },
  { name:"Plast a\npolyratan", icon:"🪑", care:"Mýdlová voda\nUV ochrana", freq:"2× ročně", storage:"Kryt nebo\nve skladu", color:"#4a90d9" },
  { name:"Přírodní ratan\na bambus", icon:"🎋", care:"Lněný olej\nnebo lak", freq:"1× ročně", storage:"VŽDY v interiéru\n(vlhkost ničí)", color:"#9b6fd4" },
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
              <span>Ošetření zahradního nábytku</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak ošetřit zahradní nábytek – dřevo, kov, plast a ratan</h1>
              <p className="article-lead">Zahradní nábytek bez péče vydrží 3–5 let. Ošetřovaný nábytek 15–20 let. Jednou za rok věnovat hodinu ošetření se tisíckrát vyplatí.</p>
              <div className="article-meta-row"><span>Aktualizováno: 4. června 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/osetrit-zahradni-nabytek" title="Jak ošetřit zahradní nábytek – dřevo, kov, plast a ratan 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 185" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="185" fill="#f0f8ec"/>
                <text x="380" y="20" textAnchor="middle" fontSize="10" fill="#3a7e4f" fontWeight="700" letterSpacing="0.04em">PÉČE O ZAHRADNÍ NÁBYTEK PODLE MATERIÁLU</text>
                {MATERIALS.map(({name, icon, care, freq, storage, color}, i) => (
                  <g key={i} transform={`translate(${20+i*148}, 28)`}>
                    <rect x="0" y="0" width="140" height="148" rx="8" fill="#fff" stroke={color} strokeWidth="1.2"/>
                    <text x="70" y="28" textAnchor="middle" fontSize="20">{icon}</text>
                    {name.split('\n').map((n,j) => <text key={j} x="70" y={44+j*13} textAnchor="middle" fontSize="9" fill={color} fontWeight="700">{n}</text>)}
                    <line x1="8" y1="70" x2="132" y2="70" stroke={color} strokeWidth="0.5" opacity="0.4"/>
                    <text x="8" y="83" fontSize="7.5" fill="#3a7e4f" fontWeight="600">Ošetření:</text>
                    {care.split('\n').map((c,j) => <text key={j} x="8" y={93+j*11} fontSize="7.5" fill="#4a4a40">{c}</text>)}
                    <text x="8" y="118" fontSize="7.5" fill="#3a7e4f" fontWeight="600">Frekvence: {freq}</text>
                    <rect x="6" y="126" width="128" height="16" rx="4" fill={color} opacity="0.1"/>
                    {storage.split('\n').map((s,j) => <text key={j} x="70" y={136+j*10} textAnchor="middle" fontSize="7" fill={color}>{s}</text>)}
                  </g>
                ))}
                <rect y="168" width="760" height="17" fill="#d8f0d0" opacity="0.5"/>
                <text x="380" y="180" textAnchor="middle" fontSize="8" fill="#3a7e4f" fontWeight="600" letterSpacing="0.06em">🌿 JARO = ČISTIT A OŠETŘIT · PODZIM = ULOŽIT DO SKLADU NEBO ZAKRÝT KRYTEM</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#drevo">Dřevěný zahradní nábytek</a></li>
                <li><a href="#kov">Kovový zahradní nábytek</a></li>
                <li><a href="#plast">Plast a polyratan</a></li>
                <li><a href="#ratan">Přírodní ratan a bambus</a></li>
                <li><a href="#zima">Přezimování zahradního nábytku</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="drevo">
              <h2>Dřevěný zahradní nábytek</h2>
              <p>Dřevo je nejkrásnější ale nejnáročnější na péči. Správné ošetření prodlouží životnost o desítky let.</p>
              <ul>
                <li><strong>Jarní ošetření:</strong> Vyčisti povrch tlakovou vodou nebo mýdlovou vodou a kartáčem. Nechej vyschnout 48 hodin. Přebrousit jemným papírem (120–150). Nanést terasový olej nebo lazuru ve směru dřevěného vlákna.</li>
                <li><strong>Teak a akát:</strong> Nejodolnější dřeva — vydají bez ošetření 5–10 let. Ale ošetřovaný olej zabrání šedivění a zachová krásnou barvu. Teak olej 1× ročně na jaře.</li>
                <li><strong>Borovice a smrk:</strong> Méně odolné — bez ošetření se rozpadnou za 3–5 let. Impregnace + lazura každý rok jsou nutností.</li>
                <li><strong>Šedivění dřeva:</strong> Šedivění způsobuje UV záření — je přirozené a nepoškozuje dřevo. Zabrání mu pravidelná lazura s UV filtrem. Šedivé dřevo obnoví čistič dřeva.</li>
              </ul>
            </section>

            <section id="kov">
              <h2>Kovový zahradní nábytek</h2>
              <ul>
                <li><strong>Hliník:</strong> Nejodolnější kov pro zahradu — nereziví a nevyžaduje téměř žádnou péči. Očistit mýdlovou vodou. Šrouby a spoje ročně promazat.</li>
                <li><strong>Ocel a železo:</strong> Reziví — musí být natřeno ochranným nátěrem. Každý rok zkontroluj jestli se lak neloupe. Místa se začínající rzí obrousit, ošetřit antikorozním přípravkem a přemalovat.</li>
                <li><strong>Pozinkovaná ocel:</strong> Odolnější než běžná ocel — zinkový povlak chrání. Při poškrábání zinkového povlaku může rezivet. Ošetřit antikorozním sprejem.</li>
                <li><strong>Čištění:</strong> Kovový nábytek čistit vlhkým hadrem nebo mýdlovou vodou. Nikdy drátěnkou — poškrábe povrchovou úpravu a způsobí korozi.</li>
              </ul>
            </section>

            <section id="plast">
              <h2>Plast a polyratan</h2>
              <ul>
                <li><strong>Čištění:</strong> Mýdlová voda + houba. Pro tvrdší nečistoty ocet nebo speciální čistič na plast. Tlakovou vodou (ne příliš silný proud — může poškrábat).</li>
                <li><strong>Yellowing (žloutnutí):</strong> Bílý plast žloutne UV zářením. Speciální přípravky (White Plastic Restorer) může pomoci u mírného žloutnutí. Silně žloutlý plast nejde obnovit.</li>
                <li><strong>UV ochrana:</strong> Sprej s UV ochranou na plast zpomalí žloutnutí a prodlouží životnost. Aplikovat 1× ročně na jaře.</li>
                <li><strong>Polyratan:</strong> Syntetický ratan odolnější než přírodní. Čistit mýdlovou vodou. Může zůstat venku celou zimu — ale kryt prodlouží životnost.</li>
              </ul>
            </section>

            <section id="ratan">
              <h2>Přírodní ratan a bambus</h2>
              <ul>
                <li><strong>Vždy do interiéru nebo pod střechu:</strong> Přírodní ratan a bambus nesnáší vlhkost a mráz — uložit do skladu nebo pod přístřešek.</li>
                <li><strong>Čištění:</strong> Vlhký hadřík nebo kartáček na odstraňování nečistot z propletek. Nikdy nenamáčej celý kus — způsobí bobtnání a deformaci.</li>
                <li><strong>Ošetření:</strong> Lněný olej nebo speciální lak na ratan zabrání vysychání a praskání. Aplikovat 1× ročně.</li>
                <li><strong>Oprava prasklého ratanu:</strong> Prasklé pásek ratanu připevnit speciálním rakovým lepidlem nebo vyměnit za nový.</li>
              </ul>
            </section>

            <section id="zima">
              <h2>Přezimování zahradního nábytku</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Materiál</th><th>Možnosti zimování</th><th>Doporučení</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Teak / akát</strong></td><td>Venku pod krytem nebo sklad</td><td>Kryt prodlouží životnost</td></tr>
                    <tr><td><strong>Borovice / smrk</strong></td><td>Suchý sklad nebo kryt</td><td>Vlhkost a mráz ničí nátěr</td></tr>
                    <tr><td><strong>Hliník</strong></td><td>Venku celou zimu</td><td>Velmi odolný, kryt volitelný</td></tr>
                    <tr><td><strong>Ocel / železo</strong></td><td>Suchý sklad nebo kryt</td><td>Vlhkost + mráz = rychlá koroze</td></tr>
                    <tr><td><strong>Plast / polyratan</strong></td><td>Venku nebo sklad</td><td>Kryt zabrání špíně a UV</td></tr>
                    <tr><td><strong>Přírodní ratan</strong></td><td>VŽDY v interiéru</td><td>Venku v zimě se zničí</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Zahradní kryty (plachty) z nepromokavého materiálu jsou nejjednodušší zimování. Cena 200–800 Kč za sadu krytu. Zabrání sněhu, dešti a listí — nábytek přežije zimu venku s minimální péčí.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Kdy je nejlepší čas na ošetření zahradního nábytku?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Jaro (duben–květen) je ideální — po zimě vyčistit a ošetřit před sezónou. Ošetřovat za suchého dne, teplota min. 10 °C. Podzim (září–říjen) je druhý termín — ošetřit před uložením na zimu. Nikdy neošetřuj mokré dřevo — přípravek nepenetuje správně.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak odstranit plíseň ze zahradního nábytku?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Plíseň na dřevě: roztok octu (1:1 s vodou) nebo speciální biocidní čistič dřeva. Kartáčem vyčistit, opláchnout, nechat vyschnout. Po vyschnutí ošetřit impregnací s biocidní přísadou. Na kovu a plastu: mýdlová voda nebo roztok chloru (1 díl chloru + 10 dílů vody) — pozor na barevné povrchy.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Lze přebarlit dřevěný zahradní nábytek?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ano — ale záleží na stávajícím nátěru. Lazura přes lazuru funguje dobře (tmavší přes světlejší). Olejový nátěr přes lazuru — nutno přebrousit. Přebarlit ze světlé na tmavou je snazší než naopak. Před přebarvením vždy vyčistit, nechat vyschnout a lehce přebrousit pro lepší přilnavost.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/osetrit-zahradni-nabytek" title="Jak ošetřit zahradní nábytek – dřevo, kov, plast a ratan 2026" />

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
                <li><a href="#drevo">Dřevo</a></li>
                <li><a href="#kov">Kov</a></li>
                <li><a href="#plast">Plast a polyratan</a></li>
                <li><a href="#ratan">Přírodní ratan</a></li>
                <li><a href="#zima">Přezimování</a></li>
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
