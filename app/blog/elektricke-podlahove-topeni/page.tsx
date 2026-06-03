import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Elektrické podlahové topení – typy a instalace",
  description: "Elektrické podlahové topení – topná rohož nebo kabel? Jak se instaluje, kolik stojí provoz a je to lepší než radiátory? Průvodce pro každého kdo to zvažuje.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/elektricke-podlahove-topeni" },
  openGraph: { title: "Elektrické podlahové topení 2026", description: "Topná rohož nebo kabel – instalace, provozní náklady a srovnání s radiátory.", url: "https://www.domovniguru.cz/blog/elektricke-podlahove-topeni", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-22T08:00:00Z", modifiedTime: "2026-04-22T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Elektrick%C3%A9%20podlahov%C3%A9%20topen%C3%AD%20%E2%80%93%20typy%20a%20instalace&cat=blog", width: 1200, height: 630, alt: "Elektrické podlahové topení – typy a instalace" }] },
  twitter: { card: "summary_large_image", title: "Elektrické podlahové topení 2026", description: "Topná rohož nebo kabel – instalace a provozní náklady podlahového topení." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/elektricke-podlahove-topeni#article",
    "headline": "Elektrické podlahové topení – typy a instalace",
    "datePublished": "2026-04-22T08:00:00Z",
    "dateModified": "2026-04-22T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["elektrické podlahové topení", "topná rohož", "podlahové topení koupelna", "provozní náklady podlahové topení", "instalace podlahového topení", "topný kabel"]
  }]
};

const RELATED = [
  { title: "Jak ušetřit na vytápění", href: "/blog/usetrit-na-vytapeni", read: "7 min" },
  { title: "Jak zkontrolovat kotel před zimou", href: "/blog/zkontrolovat-kotel-pred-zimou", read: "6 min" },
  { title: "Péče o podlahové topení", href: "/blog/pece-o-podlahove-topeni", read: "4 min" },
  { title: "Jak zateplit byt bez rekonstrukce", href: "/blog/zateplit-byt-bez-rekonstrukce", read: "6 min" },
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
              <Link href="/blog/kategorie/elektrika">Elektrika & osvětlení</Link><span className="breadcrumb-sep">/</span>
              <span>Elektrické podlahové topení</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">⚡ Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 7 min čtení</span>
              </div>
              <h1 className="article-h1">Elektrické podlahové topení – typy, instalace a provozní náklady</h1>
              <p className="article-lead">Teplá podlaha v koupelně je luxus který si dnes může dovolit skoro každý. Topná rohož do dlažby stojí 2 000–5 000 Kč a provoz vyjde na 200–600 Kč měsíčně. Tady je vše co potřebuješ vědět.</p>
              <div className="article-meta-row"><span>Aktualizováno: 22. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/elektricke-podlahove-topeni" title="Elektrické podlahové topení – typy a instalace" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 185" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="185" fill="#f4f0fc"/>
                {[
                  { x:20, name:"Topná rohož", icon:"🔲", pros:"Snadná instalace\nRovnoměrné pokrytí\nIdeal pod dlažbu", cons:"Pevná plocha\nNelze upravit", price:"800–2 000 Kč/m²", color:"#9b6fd4", best:"Koupelna, WC" },
                  { x:210, name:"Topný kabel", icon:"〰️", pros:"Flexibilní trasování\nLze vynechat plochy\nPod nábytek", cons:"Složitější instalace\nNávrh trasy", price:"500–1 500 Kč/m²", color:"#4a90d9", best:"Obývák, ložnice" },
                  { x:400, name:"Infračervená fólie", icon:"📋", pros:"Nejtenčí (0,3 mm)\nPod plovoucí podlahu\nNení třeba tmel", cons:"Nižší výkon\nDražší fólie", price:"600–1 800 Kč/m²", color:"#5a9e6f", best:"Plovoucí podlaha" },
                  { x:590, name:"Topná deska", icon:"🟦", pros:"Hotový produkt\nSnadná pokládka\nVšestranné", cons:"Vyšší podlaha\nTěžší", price:"1 500–3 500 Kč/m²", color:"#e07040", best:"Rychlá renovace" },
                ].map(({x, name, icon, pros, cons, price, color, best}) => (
                  <g key={x} transform={`translate(${x}, 15)`}>
                    <rect x="0" y="0" width="163" height="155" rx="8" fill="#fff" stroke={color} strokeWidth="1.2"/>
                    <text x="81" y="32" textAnchor="middle" fontSize="20">{icon}</text>
                    <text x="81" y="50" textAnchor="middle" fontSize="10" fill={color} fontWeight="700">{name}</text>
                    <line x1="10" y1="57" x2="153" y2="57" stroke={color} strokeWidth="0.5" opacity="0.4"/>
                    {pros.split('\n').map((l,i) => <text key={i} x="12" y={70+i*12} fontSize="8" fill="#3a7e4f">✓ {l}</text>)}
                    {cons.split('\n').map((l,i) => <text key={i} x="12" y={108+i*12} fontSize="8" fill="#e07040">✗ {l}</text>)}
                    <rect x="8" y="132" width="147" height="16" rx="4" fill={color} opacity="0.1"/>
                    <text x="81" y="143" textAnchor="middle" fontSize="7.5" fill={color} fontWeight="600">{price} · {best}</text>
                  </g>
                ))}
                <rect y="168" width="760" height="17" fill="#e8e0f4" opacity="0.5"/>
                <text x="380" y="180" textAnchor="middle" fontSize="8" fill="#6a4a8a" fontWeight="600" letterSpacing="0.06em">🔥 TOPNÁ ROHOŽ = NEJJEDNODUŠŠÍ PRO KOUPELNU · VŽDY ZMĚŘIT ODPOR PŘED ZABETONOVÁNÍM</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#typy">Typy elektrického podlahového topení</a></li>
                <li><a href="#instalace">Instalace topné rohože – postup</a></li>
                <li><a href="#naklady">Provozní náklady</a></li>
                <li><a href="#termostat">Termostat a ovládání</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="typy">
              <h2>Typy elektrického podlahového topení</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ</th><th>Tloušťka</th><th>Vhodné podlahy</th><th>Výkon (W/m²)</th><th>Cena (m²)</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Topná rohož</strong></td><td>3–5 mm</td><td>Dlažba, obklady</td><td>100–200 W</td><td>800–2 000 Kč</td></tr>
                    <tr><td><strong>Topný kabel (volný)</strong></td><td>5–10 mm (v tmelu)</td><td>Dlažba, anhydrit</td><td>100–200 W</td><td>500–1 500 Kč</td></tr>
                    <tr><td><strong>Infračervená fólie</strong></td><td>0,3–1 mm</td><td>Plovoucí podlaha, vinyl</td><td>60–120 W</td><td>600–1 800 Kč</td></tr>
                    <tr><td><strong>Topná deska</strong></td><td>20–30 mm</td><td>Vše</td><td>100–150 W</td><td>1 500–3 500 Kč</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="instalace">
              <h2>Instalace topné rohože – postup</h2>
              <p>Topná rohož pod dlažbu je nejčastější a nejjednodušší varianta elektrického podlahového topení. Zvládneš ji sám — ale zapojení do elektriky musí provést elektrikář.</p>
              <ul>
                <li><strong>Krok 1 — Změř plochu:</strong> Rohož pokrývá volnou plochu bez nábytku. Změř m² které chceš vytopit — tolik rohože objednáš.</li>
                <li><strong>Krok 2 — Připrav podklad:</strong> Podlaha musí být rovná, čistá a suchá. Případné nerovnosti vyrovnat samonivelační hmotou.</li>
                <li><strong>Krok 3 — Rozviň rohož:</strong> Rohož rozviň a naplánuj trasu. Síť rohoží lze stříhat (ne kabel!) pro přizpůsobení tvaru místnosti.</li>
                <li><strong>Krok 4 — Přilep rohož:</strong> Rohož přilep ke podlaze speciální páskou nebo tmelem. Kabel nesmí křížit jiný kabel — udržuj rozteč min. 5 cm.</li>
                <li><strong>Krok 5 — Změř odpor:</strong> Multimetrem změř odpor rohože — musí odpovídat hodnotě na štítku (±10 %). Toto je kritický krok před zabetonováním!</li>
                <li><strong>Krok 6 — Zalij tmelem:</strong> Rohož zalij flexibilním lepidlem na dlažbu (min. 10 mm nad kabelem). Nechej zaschnout 24–48 hodin.</li>
                <li><strong>Krok 7 — Polož dlažbu:</strong> Standardní pokládka dlažby přes zatuhlý tmel.</li>
                <li><strong>Krok 8 — Elektrikář:</strong> Zapojení do rozvaděče, instalaci termostatu a revizi musí provést elektrikář.</li>
              </ul>
              <div className="article-tip"><strong>⚠️ Kritické:</strong> Nikdy nezapínej topení před dokončením instalace a před zaschnutím tmelu — minimálně 28 dní. Předčasné zapnutí způsobí praskání dlažby.</div>
            </section>

            <section id="naklady">
              <h2>Provozní náklady – kolik to stojí</h2>
              <p>Elektrické podlahové topení je dražší na provoz než teplovodní systém, ale levnější na instalaci. Ideální jako doplňkové nebo komfortní topení, ne jako primární zdroj tepla pro celý byt.</p>
              <ul>
                <li><strong>Příklad — koupelna 6 m², 150 W/m²:</strong> Celkový výkon 900 W. Při 4 hodinách denně: 900 W × 4 h = 3,6 kWh/den. Při ceně 6 Kč/kWh = 21,6 Kč/den = 650 Kč/měsíc.</li>
                <li><strong>Termostat ušetří 40–60 %:</strong> Programovatelný termostat spouští topení jen když je potřeba — ráno před vstáváním a večer. Bez termostatu topení běží neustále.</li>
                <li><strong>Srovnání s radiátorem:</strong> Radiátor (teplovodní) má nižší provozní náklady ale vyšší investici. Elektrické podlahové topení je levnější na instalaci ale dražší na provoz.</li>
              </ul>
            </section>

            <section id="termostat">
              <h2>Termostat a ovládání</h2>
              <ul>
                <li><strong>Mechanický termostat:</strong> Nejlevnější (300–800 Kč). Nastavuješ ručně požadovanou teplotu. Bez programování.</li>
                <li><strong>Digitální programmovatelný:</strong> 800–2 000 Kč. Nastavíš různé teploty pro různé časy dne. Ušetří 40–60 % energie.</li>
                <li><strong>Chytrý termostat (WiFi):</strong> 1 500–3 500 Kč. Ovládání přes telefon, vzdálené spuštění, integrace s chytrou domácností.</li>
                <li><strong>Čidlo teploty:</strong> Termostat reguluje dle teploty podlahy nebo vzduchu. Podlahové čidlo zabraňuje přehřátí podlahy (max. 27–29 °C pro plovoucí podlahu).</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Lze elektrické podlahové topení nainstalovat pod plovoucí podlahu?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ano — ale jen infračervenou fólii nebo speciální topný kabel určený pro plovoucí podlahy. Teplota podlahy musí být max. 27 °C aby nedocházelo k roztahování laminátové nebo vinylové podlahy. Topná rohož v tmelu pod plovoucí podlahu nepatří.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Je elektrické podlahové topení bezpečné v koupelně?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ano — při správné instalaci je zcela bezpečné. Musí být zapojen proudový chránič (RCD) 30 mA, instalaci provede elektrikář, a rohož musí mít certifikaci pro mokré prostory. Topný kabel je zalitý v tmelu — není v přímém kontaktu s vodou.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Mohu zapnout topení hned po pokládce dlažby?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ne — čekej minimálně 28 dní od pokládky dlažby. Tmel a spárovací hmota potřebují zaschnout bez tepla. Předčasné zapnutí způsobí nerovnoměrné schnutí, praskání spár a odlepení dlažby. Výjimka: výrobce udává kratší dobu — dodržuj jeho pokyny.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/elektricke-podlahove-topeni" title="Elektrické podlahové topení – typy a instalace" />

            <section className="related-section">
              <h2>Související články</h2>
              <div className="related-grid">
                {RELATED.map((r) => (
                  <Link key={r.href} href={r.href} className="card">
                    <div className="card-eyebrow-row"><span>Elektrika & osvětlení</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#typy">Typy topení</a></li>
                <li><a href="#instalace">Instalace topné rohože</a></li>
                <li><a href="#naklady">Provozní náklady</a></li>
                <li><a href="#termostat">Termostat</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/elektrika" className="sidebar-cat-link">⚡ Elektrika & osvětlení<span>20 článků →</span></Link>
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
