import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak se zbavit krtků na zahradě – co funguje a co ne 2026",
  description: "Jak se zbavit krtků na zahradě bez chemie a bez krutosti. Ultrazvuk, pachové odpuzovače, lapače nebo plašiče – co skutečně funguje a co je zbytečné.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/zbavit-se-krtku" },
  openGraph: { title: "Jak se zbavit krtků na zahradě 2026", description: "Ultrazvuk, pachové odpuzovače nebo lapače – co na krtky skutečně funguje.", url: "https://www.domovniguru.cz/blog/zbavit-se-krtku", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-05-01T08:00:00Z", modifiedTime: "2026-05-01T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20se%20zbavit%20krtk%C5%AF%20na%20zahrad%C4%9B%20%E2%80%93%20co%20funguje%20a%20co%20ne%202026", width: 1200, height: 630, alt: "Jak se zbavit krtků na zahradě – co funguje a co ne 2026" }] },
  twitter: { card: "summary_large_image", title: "Jak se zbavit krtků 2026", description: "Co na krtky skutečně funguje – přehled metod od nejlepší po nejhorší." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/zbavit-se-krtku#article",
    "headline": "Jak se zbavit krtků na zahradě – co funguje a co ne 2026",
    "datePublished": "2026-05-01T08:00:00Z",
    "dateModified": "2026-05-01T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak se zbavit krtků", "krtci zahrada", "odpuzovač krtků", "ultrazvuk krtci", "krtiny zahrada řešení"]
  }]
};

const RELATED = [
  { title: "Jak se zbavit plevele bez chemie", href: "/blog/zbavit-se-plevele-bez-chemie", read: "4 min" },
  { title: "Jak se zbavit hmyzu bez chemie", href: "/blog/zbavit-se-hmyzu-bez-chemie", read: "4 min" },
  { title: "Jak opravit trávník – mech a holá místa", href: "/blog/opravit-travnik-ples-mech", read: "6 min" },
  { title: "Jak připravit zahradu na jaro", href: "/blog/jarni-zahrada", read: "7 min" },
];

const METHODS = [
  { name:"Ultrazvukové kolíky", effect:"⭐⭐⭐", price:"200–600 Kč/ks", pros:"Bez chemie, bez krutosti", cons:"Účinnost sporná, krtek si zvykne", color:"#4a90d9" },
  { name:"Pachové odpuzovače", effect:"⭐⭐", price:"50–200 Kč", pros:"Levné, přírodní", cons:"Krátká účinnost, déšť smaže", color:"#5a9e6f" },
  { name:"Vibrace (větrníky)", effect:"⭐⭐⭐", price:"100–400 Kč", pros:"Fungující princip", cons:"Krtek si může zvyknout", color:"#9b6fd4" },
  { name:"Lapač krtků", effect:"⭐⭐⭐⭐⭐", price:"200–800 Kč", pros:"Nejúčinnější metoda", cons:"Nutná správná instalace", color:"#e07040" },
  { name:"Ochranná síť", effect:"⭐⭐⭐⭐", price:"50–150 Kč/m²", pros:"Trvalá ochrana záhonů", cons:"Nárazová instalace, práce", color:"#f59e0b" },
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
              <span>Zbavit se krtků</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak se zbavit krtků na zahradě – co funguje a co ne</h1>
              <p className="article-lead">Krtek za den přelopatí 20 kg hlíny a zničí záhon který jsi pěstoval celé jaro. Existují humánní i méně humánní metody — tady je přehled co skutečně funguje.</p>
              <div className="article-meta-row"><span>Aktualizováno: 1. května 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/zbavit-se-krtku" title="Jak se zbavit krtků na zahradě – co funguje a co ne 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 185" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="185" fill="#f0f8ec"/>
                <text x="380" y="22" textAnchor="middle" fontSize="10" fill="#3a7e4f" fontWeight="700" letterSpacing="0.04em">SROVNÁNÍ METOD PROTI KRTKŮM</text>
                {METHODS.map(({name, effect, price, pros, cons, color}, i) => (
                  <g key={i} transform={`translate(${20+i*148}, 28)`}>
                    <rect x="0" y="0" width="138" height="148" rx="8" fill="#fff" stroke={color} strokeWidth="1.2"/>
                    <rect x="0" y="0" width="138" height="5" rx="4" fill={color} opacity="0.5"/>
                    <text x="69" y="22" textAnchor="middle" fontSize="9" fill={color} fontWeight="700">{name}</text>
                    <text x="69" y="36" textAnchor="middle" fontSize="11">{effect}</text>
                    <text x="69" y="50" textAnchor="middle" fontSize="8" fill="#6a6050">{price}</text>
                    <line x1="8" y1="56" x2="130" y2="56" stroke={color} strokeWidth="0.5" opacity="0.4"/>
                    <text x="8" y="70" fontSize="8" fill="#3a7e4f">✓ {pros}</text>
                    {cons.split(',').map((c,j) => <text key={j} x="8" y={85+j*12} fontSize="7.5" fill="#e07040">✗ {c.trim()}</text>)}
                  </g>
                ))}
                <rect y="168" width="760" height="17" fill="#d8f0d0" opacity="0.5"/>
                <text x="380" y="180" textAnchor="middle" fontSize="8" fill="#3a7e4f" fontWeight="600" letterSpacing="0.06em">🐀 KOMBINACE METOD FUNGUJE LÉPE NEŽ JEDNA · LAPAČ = NEJJISTĚJŠÍ VÝSLEDEK</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#proc">Proč krtci přicházejí</a></li>
                <li><a href="#odpuzovace">Odpuzovače a plašiče</a></li>
                <li><a href="#lapac">Lapač krtků – nejúčinnější metoda</a></li>
                <li><a href="#ochrana">Ochrana záhonů sítí</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="proc">
              <h2>Proč krtci přicházejí na zahradu</h2>
              <p>Krtek nepřichází kvůli tvé zahradě — přichází kvůli dešťovkám a hmyzu v půdě. Čím zdravější a humusnatější půda, tím víc potravy a tím víc krtků. Je to paradox: dobrá zahrada přitahuje krtky.</p>
              <ul>
                <li><strong>Aktivita jaro a podzim:</strong> Nejvíce krtků uvidíš na jaře (páření) a na podzim (příprava na zimu). V létě jsou méně aktivní.</li>
                <li><strong>Jeden krtek = velký problém:</strong> Jeden krtek má teritorium 2 000–7 000 m² a buduje tunelový systém stovky metrů dlouhý. Krtiny jsou jen vedlejší produkty kopání.</li>
                <li><strong>Chráněný živočich:</strong> Krtek je v ČR chráněný zákonem — usmrcení bez povolení je přestupek. Lapací klec s živochytem a přemístěním je legální alternativa.</li>
              </ul>
            </section>

            <section id="odpuzovace">
              <h2>Odpuzovače a plašiče – co funguje</h2>
              <ul>
                <li><strong>Ultrazvukové kolíky:</strong> Vysílají vibrace do půdy. Krtek je citlivý na vibrace a může oblast opustit. Účinnost: střední. Problém: krtek si po čase zvykne. Kombinuj více kolíků a měň jejich polohu. Cena 200–600 Kč/ks.</li>
                <li><strong>Větrníky a tyče s lahvemi:</strong> Mechanické vibrace přenášené do půdy. Levné řešení, princip funguje. Nevýhoda: za bezvětří nefungují. Cena 100–400 Kč.</li>
                <li><strong>Pachové odpuzovače:</strong> Kafr, psinec (psí nebo kočičí trus), skořice nebo speciální granule. Vkládají se do tunelů. Krtek je čichově citlivý. Účinnost: krátkodobá — déšť a čas efekt smazají. Obnovovat každé 2 týdny.</li>
                <li><strong>Cesmína, vlašský ořech, česnek:</strong> Rostliny jejichž vůni krtek nemá rád. Sázení kolem záhonů jako prevence. Účinnost: omezená ale přírodní.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Žádná jednotlivá metoda není 100% spolehlivá. Kombinuj ultrazvukový kolík + pachový odpuzovač v tunelech + větrníky na obvodu zahrady — trojkombinace má výrazně lepší účinek.</div>
            </section>

            <section id="lapac">
              <h2>Lapač krtků – nejúčinnější metoda</h2>
              <p>Lapač krtků (živý i smrtící) je nejspolehlivější metoda. Správná instalace je klíčová — špatně umístěný lapač nefunguje.</p>
              <ul>
                <li><strong>Živý lapač (humánní):</strong> Válec zasazený do aktivního tunelu. Krtek vejde dovnitř ale nemůže ven. Denně kontroluj a krtka přemísti min. 5 km daleko (jinak se vrátí). Cena 300–800 Kč.</li>
                <li><strong>Jak najít aktivní tunel:</strong> Propíchni krtinu holí nebo rukou. Aktivní tunel krtek do 24 hodin opraví. Neaktivní tunel neopraví. Lapač instaluj do aktivního tunelu.</li>
                <li><strong>Instalace lapače:</strong> Odkryj tunel, zasaď lapač těsně do průřezu tunelu (krtek musí projít skrz). Zakryj otvor od světla — krtek se světla vyhýbá. Označ polohu.</li>
                <li><strong>Kdy kontrolovat:</strong> Každých 12–24 hodin. Lapač s krtkem nenechávej déle — v létě krtek v lapači uhyne.</li>
              </ul>
            </section>

            <section id="ochrana">
              <h2>Ochrana záhonů sítí – trvalé řešení</h2>
              <ul>
                <li><strong>Krtí síť (geotextilie s malými oky):</strong> Plastová nebo kovová síť s oky max. 10×10 mm zakopaná 30–50 cm hluboko pod záhonem. Krtek si neprokope cestu skrz. Trvalá ochrana.</li>
                <li><strong>Vyvýšený záhon:</strong> Záhon s dnem ze sítě je nejlepší ochrana. Viz <Link href="/blog/vyvyseny-zahon-postup" style={{color:"#5a9e6f",fontWeight:600}}>Jak postavit vyvýšený záhon →</Link></li>
                <li><strong>Cena:</strong> Plastová síť 50–80 Kč/m², kovová 100–150 Kč/m². Pro záhon 2×3 m = 300–450 Kč.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Je krtek chráněný zákonem?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ano — krtek obecný (Talpa europaea) je chráněný zákonem č. 114/1992 Sb. Záměrné usmrcení bez výjimky je přestupek. Legální jsou: odpuzovače, lapací klece s přemístěním, ochranné sítě. Při opakovaném výskytu lze požádat Agenturu ochrany přírody o výjimku pro odlov.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Pomáhá zasypat krtiny hlínou?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Zasypání krtiny krtovi vůbec nevadí — tunel má zpravidla desítky metrů a krtina je jen odpadní hlína. Zasypáváním krtince zbývá jen urovnat trávník — nedojde k vyplašení krtka. Hlínu z krtiny použij jako kvalitní substrát do záhonu nebo kompostu.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Pomáhají kočky nebo psi na krtky?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Kočky a psi krtky loví — zejména kočky jsou přirození predátoři. Jejich přítomnost na zahradě krtka odradí (pach). Kočka skutečně loví a přináší ulovené krtky. Je to přirozené řešení ale nelze ho spolehlivě "nařídit". Pachové stopy mazlíčků (trus) jako odpuzovač fungují krátkodobě.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/zbavit-se-krtku" title="Jak se zbavit krtků na zahradě – co funguje a co ne 2026" />

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
                <li><a href="#proc">Proč krtci přicházejí</a></li>
                <li><a href="#odpuzovace">Odpuzovače a plašiče</a></li>
                <li><a href="#lapac">Lapač krtků</a></li>
                <li><a href="#ochrana">Ochrana sítí</a></li>
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
