import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Venkovní osvětlení zahrady – typy, instalace, solární nebo kabel 2026",
  description: "Jak osvětlit zahradu, terasu nebo příjezdovou cestu. Solární nebo kabelové osvětlení? Typy svítidel, instalace a jak vytvořit krásnou večerní atmosféru.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/venkovni-osvetleni-zahrady" },
  openGraph: { title: "Venkovní osvětlení zahrady 2026", description: "Solární nebo kabelové? Typy svítidel a jak osvětlit zahradu krásně a bezpečně.", url: "https://www.domovniguru.cz/blog/venkovni-osvetleni-zahrady", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-22T08:00:00Z", modifiedTime: "2026-04-22T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Venkovní osvětlení zahrady 2026", description: "Solární nebo kabelové – typy svítidel a instalace venkovního osvětlení." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/venkovni-osvetleni-zahrady#article",
    "headline": "Venkovní osvětlení zahrady – typy, instalace, solární nebo kabel 2026",
    "datePublished": "2026-04-22T08:00:00Z",
    "dateModified": "2026-04-22T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["venkovní osvětlení zahrady", "solární osvětlení zahrada", "zahradní svítidla", "osvětlení terasy", "kabelové osvětlení zahrada", "IP65 zahradní svítidla"]
  }]
};

const RELATED = [
  { title: "Jak vybrat svítidla do místnosti", href: "/blog/vybrat-svitidla-do-mistnosti", read: "6 min" },
  { title: "Chytrá domácnost – jak začít", href: "/blog/chytra-domacnost-zacinamy", read: "7 min" },
  { title: "Jak postavit pergolu na terasu", href: "/blog/pergola-postup-stavba", read: "9 min" },
  { title: "Jak připravit zahradu na jaro", href: "/blog/jarni-zahrada", read: "7 min" },
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
              <span>Venkovní osvětlení zahrady</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">⚡ Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Venkovní osvětlení zahrady – solární nebo kabelové?</h1>
              <p className="article-lead">Správné osvětlení zahrady prodlouží čas strávený venku, zvýší bezpečnost a dodá večerní atmosféru. Solární nebo kabelové? Tady je jak vybrat a jak nainstalovat.</p>
              <div className="article-meta-row"><span>Aktualizováno: 22. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/venkovni-osvetleni-zahrady" title="Venkovní osvětlení zahrady – typy, instalace, solární nebo kabel 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 185" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="185" fill="#1a1a2e"/>
                {/* Hvězdy */}
                {[[50,20],[120,35],[200,15],[300,25],[450,10],[550,30],[650,18],[720,40]].map(([x,y],i) => (
                  <circle key={i} cx={x} cy={y} r="1.5" fill="#fff" opacity={0.4+i*0.07}/>
                ))}
                {/* Travník */}
                <rect x="0" y="130" width="760" height="55" fill="#1a3a1a"/>
                {/* Solární světlo */}
                <g transform="translate(80,70)">
                  <rect x="-3" y="0" width="6" height="60" fill="#808080"/>
                  <rect x="-12" y="-8" width="24" height="12" rx="3" fill="#2a2a60" stroke="#4a4aaa" strokeWidth="1"/>
                  <ellipse cx="0" cy="0" rx="14" ry="6" fill="#f59e0b" opacity="0.9"/>
                  <circle cx="0" cy="0" r="8" fill="#ffd700" opacity="0.6"/>
                  {[0,60,120,180,240,300].map((angle, i) => (
                    <line key={i} x1={0} y1={0} x2={Math.cos(angle*Math.PI/180)*18} y2={Math.sin(angle*Math.PI/180)*18} stroke="#ffd700" strokeWidth="0.8" opacity="0.3"/>
                  ))}
                  <text x="0" y="75" textAnchor="middle" fontSize="7" fill="#f59e0b">Solární</text>
                </g>
                {/* Kabelové světlo v zemi */}
                <g transform="translate(250,110)">
                  <rect x="-15" y="-8" width="30" height="8" rx="4" fill="#c0c0c0"/>
                  <ellipse cx="0" cy="-4" rx="12" ry="4" fill="#fff" opacity="0.8"/>
                  {[0,45,90,135,180,225,270,315].map((angle, i) => (
                    <line key={i} x1={0} y1={-25} x2={Math.cos(angle*Math.PI/180)*22} y2={-25+Math.sin(angle*Math.PI/180)*22} stroke="#fff" strokeWidth="0.6" opacity="0.2"/>
                  ))}
                  <text x="0" y="14" textAnchor="middle" fontSize="7" fill="#aaa">Zemní</text>
                </g>
                {/* Fasádní světlo */}
                <g transform="translate(450,55)">
                  <rect x="600" y="20" width="80" height="120" fill="#2a2a2a" opacity="0" />
                  <rect x="-8" y="-15" width="16" height="40" rx="3" fill="#505050"/>
                  <path d="M-12 25 L12 25 L8 50 L-8 50 Z" fill="#f59e0b" opacity="0.6"/>
                  <text x="0" y="65" textAnchor="middle" fontSize="7" fill="#f59e0b">Fasádní</text>
                </g>
                {/* Girlanda */}
                <path d="M550 60 Q600 80 650 60 Q700 40 750 60" stroke="#ffd700" strokeWidth="1.5" fill="none" opacity="0.6"/>
                {[550,600,650,700,750].map((x,i) => (
                  <circle key={i} cx={x} cy={i%2===0?60:80} r="4" fill="#ffd700" opacity="0.8"/>
                ))}
                <text x="650" y="105" textAnchor="middle" fontSize="7" fill="#ffd700">Girlanda</text>

                <rect y="168" width="760" height="17" fill="#0a0a20" opacity="0.8"/>
                <text x="380" y="180" textAnchor="middle" fontSize="8" fill="#f59e0b" fontWeight="600" letterSpacing="0.06em">🌙 SOLÁRNÍ = BEZ KABELŮ · KABELOVÉ = SPOLEHLIVÉ · KOMBINUJ OBA TYPY</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#solar-vs-kabel">Solární vs. kabelové osvětlení</a></li>
                <li><a href="#typy">Typy zahradních svítidel</a></li>
                <li><a href="#ip">Co znamená IP krytí</a></li>
                <li><a href="#instalace">Instalace kabelového osvětlení</a></li>
                <li><a href="#atmosfera">Jak vytvořit večerní atmosféru</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="solar-vs-kabel">
              <h2>Solární vs. kabelové osvětlení – co vybrat</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Vlastnost</th><th>Solární osvětlení</th><th>Kabelové osvětlení</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Instalace</strong></td><td>Zapichnout, hotovo</td><td>Kabel v zemi nebo na fasádě</td></tr>
                    <tr><td><strong>Provozní náklady</strong></td><td>Zdarma (sluneční energie)</td><td>Drobné (LED = cca 10–50 Kč/rok)</td></tr>
                    <tr><td><strong>Spolehlivost</strong></td><td>Závisí na počasí a slunci</td><td>Svítí vždy, nezávisle na počasí</td></tr>
                    <tr><td><strong>Jas</strong></td><td>Nižší až střední</td><td>Vysoký, nastavitelný</td></tr>
                    <tr><td><strong>Cena</strong></td><td>100–800 Kč/ks</td><td>200–2 000 Kč/ks + kabel</td></tr>
                    <tr><td><strong>Vhodné pro</strong></td><td>Dekorace, cesty, záhony</td><td>Bezpečnostní, terasa, vstup</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Doporučení:</strong> Kombinuj oba typy. Solární na dekoraci a cesty v zahradě, kabelové na vstup, terasu a bezpečnostní osvětlení. Nejlepší výsledek za nejnižší cenu.</div>
            </section>

            <section id="typy">
              <h2>Typy zahradních svítidel</h2>
              <ul>
                <li><strong>Zemní svítidla (path lights):</strong> Zapichují se do země podél cesty nebo záhonu. Osvětlují cestu a zvýrazňují rostliny. Solární verze nejjednodušší na instalaci. Cena 100–500 Kč/ks.</li>
                <li><strong>Fasádní svítidla (apliky):</strong> Montují se na zeď domu, garáže nebo plotu. Bezpečnostní osvětlení vstupu nebo garáže. S pohybovým senzorem — svítí jen při pohybu. Cena 300–2 000 Kč/ks.</li>
                <li><strong>Sloupková svítidla:</strong> Volně stojící lampy na kůlu 60–120 cm. Pro příjezdovou cestu nebo terasu. Vždy kabelové napájení. Cena 500–3 000 Kč/ks.</li>
                <li><strong>Reflektory (spoty):</strong> Nasměrovatelné světlo na stromy, sochy nebo fasádu. Vytváří dramatický efekt. Cena 200–1 500 Kč/ks.</li>
                <li><strong>Girlandy a světelné řetězy:</strong> Dekorativní osvětlení terasy, pergoly nebo stromů. Teplá atmosféra. Cena 200–1 000 Kč za sadu.</li>
                <li><strong>LED pásky venkovní (IP65+):</strong> Pod schody, pod lavičkami nebo podél cesty. Cena 200–600 Kč/m.</li>
              </ul>
            </section>

            <section id="ip">
              <h2>Co znamená IP krytí pro venkovní svítidla</h2>
              <p>Venkovní svítidla musí být odolná vůči vlhkosti a prachu. IP krytí určuje jejich odolnost — první číslice = prach, druhá = voda.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>IP krytí</th><th>Odolnost</th><th>Vhodné pro</th></tr></thead>
                  <tbody>
                    <tr><td><strong>IP44</strong></td><td>Stříkající voda ze všech stran</td><td>Chráněná terasa, pod přístřeškem</td></tr>
                    <tr><td><strong>IP54</strong></td><td>Prach + stříkající voda</td><td>Fasáda domu, vstup</td></tr>
                    <tr><td><strong>IP65</strong></td><td>Prach + proudící voda (déšť)</td><td>Zahrada, volně stojící svítidla</td></tr>
                    <tr><td><strong>IP67</strong></td><td>Dočasné ponoření do vody</td><td>Zemní svítidla, rybník</td></tr>
                    <tr><td><strong>IP68</strong></td><td>Trvalé ponoření</td><td>Podvodní osvětlení jezírka</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Pravidlo:</strong> Pro venkovní instalaci min. IP44 pod přístřeškem, IP65 na volném prostranství a zahradní cesty. Nikdy neinstaluj interiérová svítidla venku — shořela by nebo způsobila úraz.</div>
            </section>

            <section id="instalace">
              <h2>Instalace kabelového osvětlení</h2>
              <ul>
                <li><strong>Kabel v zemi:</strong> Venkovní kabel (CYKY nebo CYKY-J) musí být uložen v chráničce (flexi nebo tuhé trubce) min. 35–60 cm hluboko. Bez chráničky kabel rychle poškodí mráz, hlodavci nebo nářadí.</li>
                <li><strong>Kabel po fasádě:</strong> Venkovní kabel v kabelové liště nebo v omítce. Jednodušší než výkop, ale méně estetické.</li>
                <li><strong>Napájení:</strong> Venkovní zásuvka s krytím IP44+ nebo kabel z interiéru přes zeď. Všechny venkovní okruhy musí být jištěny proudovým chráničem (RCD, 30 mA).</li>
                <li><strong>Nízkonapěťové systémy (12 V nebo 24 V):</strong> Bezpečnější pro DIY — transformátor umístíš v suchu uvnitř nebo v krytu, kabel v zemi nemusí být v chráničce. Vhodné pro zahradní cesty a záhony.</li>
              </ul>
              <div className="article-tip"><strong>⚠️ Bezpečnost:</strong> Zapojení venkovního okruhu 230 V do rozvaděče musí provést elektrikář. Samotné svítidlo připojit na existující venkovní zásuvku zvládneš sám.</div>
            </section>

            <section id="atmosfera">
              <h2>Jak vytvořit večerní atmosféru na zahradě</h2>
              <ul>
                <li><strong>Vrstvení světla:</strong> Stejně jako v interiéru — kombinuj zemní osvětlení cest, reflektory na stromy a dekorativní girlandy na terasu.</li>
                <li><strong>Teplá bílá (2 700 K):</strong> Pro zahradu vždy teplá bílá — studená bílá působí průmyslově a odrazuje hmyz méně efektivně než teplá.</li>
                <li><strong>Pohybový senzor na vstup:</strong> Fasádní svítidlo s pohybovým senzorem svítí jen při příchodu — úspora energie a praktičnost.</li>
                <li><strong>Stmívač nebo timer:</strong> Nastavitelný jas a automatické vypnutí o půlnoci. Chytré venkovní zásuvky umožňují ovládání přes telefon.</li>
                <li><strong>Méně je více:</strong> Přesvětlená zahrada ztrácí atmosféru. Pár dobře umístěných svítidel udělá víc než desítky levných solárních lampičk</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Jak hluboko musí být kabel v zemi?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Kabel 230 V v zemi musí být uložen min. 35 cm hluboko (pod trávníkem) nebo 60 cm pod pojezdovými plochami. Vždy v chráničce. Kabel 12 V nebo 24 V z nízkonapěťového transformátoru nemá předepsanou minimální hloubku — stačí několik centimetrů.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jsou solární světla dostatečně jasná?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Pro dekoraci a osvětlení cest ano. Pro bezpečnostní osvětlení vstupu nebo osvětlení pracovní plochy (gril, stůl) jsou slabší. Moderní solární světla s baterií dosahují 200–800 lm — srovnatelné s kabelovými pro dekorativní účely. Výkon závisí na množství slunečního světla — v zimě svítí kratší dobu.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Potřebuji elektrikáře na venkovní osvětlení?<span className="faq-invoke">▾</span></summary>
                  <div className="faq-body">Pro připojení svítidla na existující venkovní zásuvku elektrikáře nepotřebuješ. Pro vedení nového kabelu z rozvaděče nebo instalaci nové venkovní zásuvky elektrikáře potřebuješ. Nízkonapěťové systémy (12 V) s transformátorem zvládneš sám bez elektrikáře.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/venkovni-osvetleni-zahrady" title="Venkovní osvětlení zahrady – typy, instalace, solární nebo kabel 2026" />

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
                <li><a href="#solar-vs-kabel">Solární vs. kabelové</a></li>
                <li><a href="#typy">Typy svítidel</a></li>
                <li><a href="#ip">IP krytí</a></li>
                <li><a href="#instalace">Instalace</a></li>
                <li><a href="#atmosfera">Večerní atmosféra</a></li>
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
