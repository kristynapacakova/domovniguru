import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak odhalit skryté vady bytu před koupí – checklist 2026",
  description: "Co zkontrolovat při prohlídce bytu před koupí. Vlhkost, elektrika, topení, hluk, právní vady – kompletní checklist kupce aby nezískal problémovou nemovitost.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/odhalit-skryte-vady-bytu" },
  openGraph: { title: "Jak odhalit skryté vady bytu před koupí 2026", description: "Checklist kupce – vlhkost, elektrika, topení, hluk a právní vady.", url: "https://www.domovniguru.cz/blog/odhalit-skryte-vady-bytu", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-05-01T08:00:00Z", modifiedTime: "2026-05-01T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20odhalit%20skryt%C3%A9%20vady%20bytu%20p%C5%99ed%20koup%C3%AD%20%E2%80%93%20checklist%202026&cat=blog", width: 1200, height: 630, alt: "Jak odhalit skryté vady bytu před koupí – checklist 2026" }] },
  twitter: { card: "summary_large_image", title: "Jak odhalit skryté vady bytu 2026", description: "Checklist kupce – co zkontrolovat před koupí bytu." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/odhalit-skryte-vady-bytu#article",
    "headline": "Jak odhalit skryté vady bytu před koupí – checklist 2026",
    "datePublished": "2026-05-01T08:00:00Z",
    "dateModified": "2026-06-04T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["skryté vady bytu", "checklist koupě bytu", "co zkontrolovat při koupi bytu", "prohlídka bytu před koupí", "vady nemovitosti"]
  }, {
    "@type": "FAQPage",
    "@id": "https://www.domovniguru.cz/blog/odhalit-skryte-vady-bytu#faq",
    "mainEntity": [
      { "@type": "Question", "name": "Co dělat když po koupi zjistím skrytou vadu?", "acceptedAnswer": { "@type": "Answer", "text": "Skrytou vadu o které prodávající věděl a zamlčel ji lze reklamovat do 5 let od koupě. Musíš prokázat že vada existovala v době prodeje a prodávající o ní věděl (nebo vědět měl). Ihned fotografuj, zdokumentuj a konzultuj s advokátem. Bez právní pomoci je vymáhání složité." } },
      { "@type": "Question", "name": "Mám si najít stavebního inspektora nebo realitního makléře?", "acceptedAnswer": { "@type": "Answer", "text": "Stavební inspektor a realitní makléř jsou dvě různé věci. Makléř zprostředkovává prodej — není jeho zájmem odrazovat od koupě. Stavební inspektor (soudní znalec nebo certifikovaný inspektor) posuzuje technický stav nezávisle. Pro větší investici (byt, dům) se stavební inspektor vyplatí vždy." } },
      { "@type": "Question", "name": "Kdy je nejlepší čas na prohlídku bytu?", "acceptedAnswer": { "@type": "Answer", "text": "Přes den za denního světla — umělé osvětlení skryje vlhkostní skvrny a nerovnosti. Ideálně po dešti — vlhkostní problémy jsou pak lépe viditelné. Naplánuj si dostatek času — min. 60–90 minut. Vyhni se uspěchaným prohlídkám s makléřem který tě pobízí k rychlému rozhodnutí." } }
    ]
  }]
};

const RELATED = [
  { title: "Co zkontrolovat při přebírání nového bytu", href: "/blog/prebrani-bytu-checklist", read: "4 min" },
  { title: "Jak odhadnout cenu rekonstrukce", href: "/blog/odhadnout-cenu-rekonstrukce", read: "6 min" },
  { title: "Jak naplánovat rekonstrukci bytu", href: "/blog/planovani-rekonstrukce-bytu", read: "8 min" },
  { title: "Jak se zbavit vlhkosti v bytě", href: "/blog/zbavit-se-vlhkosti-v-byte", read: "7 min" },
];

const AREAS = [
  { area:"💧 Vlhkost a plíseň", color:"#4a90d9", checks:["Tmavé skvrny v rozích a na stropě","Vydutá nebo bublinková malba","Zápach plísně nebo vlhka","Bílé výkvěty na zdech","Zkontroluj pod umyvadlem a za WC"] },
  { area:"⚡ Elektrika", color:"#f59e0b", checks:["Stáří elektroinstalace (hliník = riziko)","Počet jističů v rozvaděči","Přítomnost proudového chraniče (RCD)","Funkčnost každé zásuvky (fázová tužka)","Viditelné poškozené kabely"] },
  { area:"🌡️ Topení a voda", color:"#e07040", checks:["Otestuj každý radiátor","Zkontroluj stáří kotle (záruční list)","Tlak v rozvodech (tlakový manometr)","Teplota teplé vody (min. 55 °C)","Stav bojleru nebo zásobníku"] },
  { area:"🏗️ Konstrukce", color:"#5a9e6f", checks:["Trhliny ve zdech (šikmé = pohyb)","Stav podlah (prohnutí, vrzání)","Funkčnost oken a dveří","Stav balkonu nebo terasy","Zatékání u oken a střešních oken"] },
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
              <span>Skryté vady bytu</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏠 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak odhalit skryté vady bytu před koupí – checklist</h1>
              <p className="article-lead">Skrytá vada bytu může stát stovky tisíc korun na opravu. Prodávající ji nemusí přiznat dobrovolně — ale pokud víš co hledat, odhalíš ji při prohlídce sám.</p>
              <div className="article-meta-row"><span>Aktualizováno: 4. června 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/odhalit-skryte-vady-bytu" title="Jak odhalit skryté vady bytu před koupí – checklist 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 185" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="185" fill="#f8f6f2"/>
                <text x="380" y="22" textAnchor="middle" fontSize="10" fill="#6a6050" fontWeight="700" letterSpacing="0.04em">4 OBLASTI KDE HLEDAT SKRYTÉ VADY</text>
                {AREAS.map(({area, color, checks}, i) => (
                  <g key={i} transform={`translate(${20+i*185}, 28)`}>
                    <rect x="0" y="0" width="175" height="150" rx="8" fill="#fff" stroke={color} strokeWidth="1.2"/>
                    <rect x="0" y="0" width="175" height="32" rx="8" fill={color} opacity="0.12"/>
                    <text x="87" y="21" textAnchor="middle" fontSize="10" fill={color} fontWeight="700">{area}</text>
                    {checks.map((c, j) => (
                      <g key={j} transform={`translate(10, ${40+j*21})`}>
                        <rect x="0" y="-11" width="155" height="18" rx="4" fill={color} opacity="0.05"/>
                        <text x="6" y="2" fontSize="8" fill="#3a7e4f">☑</text>
                        <text x="18" y="2" fontSize="8" fill="#2a2a28">{c}</text>
                      </g>
                    ))}
                  </g>
                ))}
                <rect y="168" width="760" height="17" fill="#f0ece8" opacity="0.5"/>
                <text x="380" y="180" textAnchor="middle" fontSize="8" fill="#8a7050" fontWeight="600" letterSpacing="0.06em">🔍 PROHLÍDKU PLÁNUJ PŘES DEN · VEZ FÁZOVOU TUŽKU · NAJMI STAVEBNÍHO INSPEKTORA</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#vlhkost">Vlhkost a plíseň</a></li>
                <li><a href="#elektrika">Elektroinstalace</a></li>
                <li><a href="#topeni">Topení a voda</a></li>
                <li><a href="#konstrukce">Konstrukce a stavební stav</a></li>
                <li><a href="#pravni">Právní a administrativní vady</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="vlhkost">
              <h2>Vlhkost a plíseň – nejčastější skrytá vada</h2>
              <p>Vlhkost je nejčastější a nejdražší skrytá vada. Prodávající ji zakryjí čerstvou malbou nebo nábytkem — ale existují signály které nepřehlédneš.</p>
              <ul>
                <li><strong>Tmavé skvrny na stropě nebo v rozích:</strong> Hnědé nebo šedé skvrny = zatékání nebo kondenzace. Zkontroluj pod střechou a u oken.</li>
                <li><strong>Bublinková nebo vydutá malba:</strong> Barva se loupe nebo je vydutá — vlhkost za ní způsobuje odlupování. Jemně zmáčkni — pokud je dutá, pod ní je problém.</li>
                <li><strong>Zápach:</strong> Uzavři nos a dýchej pusou — pak nos. Zápach plísně nebo vlhka je nezaměnitelný. Prodávající mohou maskovat svíčkami nebo vůní.</li>
                <li><strong>Vlhkoměr:</strong> Kapesní vlhkoměr zdí (200–500 Kč) změří vlhkost stěn. Nad 75 % = problém. Nezapomeň zkontrolovat u podlahy a v rozích.</li>
              </ul>
            </section>

            <section id="elektrika">
              <h2>Elektroinstalace</h2>
              <ul>
                <li><strong>Hliníkové kabely:</strong> Byty z 60.–80. let mají hliníkovou instalaci. Hliník je křehčí, při přetížení se přehřívá a je požárním rizikem. Výměna stojí 80 000–200 000 Kč. Zeptej se nebo zavolej elektrikáře na prohlídku.</li>
                <li><strong>Fázová tužka:</strong> Testuj každou zásuvku. Nefungující zásuvky = problém v instalaci.</li>
                <li><strong>Rozvaděč:</strong> Zkontroluj věk rozvaděče (starý styl = stará instalace). Přítomnost proudového chraniče (RCD) je bezpečnostní nutnost. Chybí-li RCD, nutná výměna.</li>
                <li><strong>Dostatečný počet jističů:</strong> Moderní byt potřebuje oddělené okruhy pro kuchyň, koupelnu, topení. Starý byt může mít jen 2–3 jističe na celý byt.</li>
              </ul>
            </section>

            <section id="topeni">
              <h2>Topení a voda</h2>
              <ul>
                <li><strong>Každý radiátor otestuj:</strong> Zapni topení a zkontroluj jestli každý radiátor hřeje rovnoměrně. Studený horní okraj = nutné odvzdušnění. Studený radiátor = problém v soustavě.</li>
                <li><strong>Stáří kotle:</strong> Kotel starší 15–20 let je na konci životnosti. Výměna: 30 000–80 000 Kč. Zeptej se na záruční list a servisní protokoly.</li>
                <li><strong>Tlak vody:</strong> Otevři oba kohoutky (teplá i studená) na plno. Slabý tlak = problém v rozvodech nebo vodoměru.</li>
                <li><strong>Teplá voda:</strong> Teplota teplé vody musí být min. 55 °C (ochrana před legionellou). Pokud je vlažná — bojler nebo zásobník je poddimenzovaný nebo poruchový.</li>
              </ul>
            </section>

            <section id="konstrukce">
              <h2>Konstrukce a stavební stav</h2>
              <ul>
                <li><strong>Trhliny ve zdech:</strong> Vodorovné trhliny = smršťování (méně závažné). Šikmé trhliny pod 45° = pohyb základů nebo nosné konstrukce — nutný statik.</li>
                <li><strong>Podlahy:</strong> Přejdi po celé ploše — vrzání nebo prohnutí signalizuje poškozené nosníky nebo podmáčení. Plovoucí podlaha může skrývat poškozené dřevo pod ní.</li>
                <li><strong>Okna a dveře:</strong> Otevři a zavři každé okno a dveře. Tuhost nebo drhnoucí pohyb = deformace rámu nebo stavební pohyb.</li>
                <li><strong>Balkon nebo terasa:</strong> Zkontroluj trhliny, odlupující se povrch a odvodnění. Balkon s prasklou hydroizolací zatéká do bytu pod ním.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Najmi nezávislého stavebního inspektora (2 000–5 000 Kč) který byt prohlédne profesionálně. Za cenu která je zlomkem ceny nemovitosti získáš odborný posudek a silnější pozici při vyjednávání ceny.</div>
            </section>

            <section id="pravni">
              <h2>Právní a administrativní vady</h2>
              <ul>
                <li><strong>Výpis z katastru nemovitostí:</strong> Zkontroluj na katastr.cuzk.cz — kdo je skutečný vlastník, jestli jsou zástavy nebo věcná břemena.</li>
                <li><strong>Zástavní právo:</strong> Byt může být zastaven jako záruka hypotéky prodávajícího. Musí být splacen před převodem nebo převzat do nové hypotéky.</li>
                <li><strong>Nájemníci:</strong> Ptej se jestli je byt pronajat. Nájemník s platnou smlouvou může být v bytě i po koupi — prodávající ti to nemusí říct.</li>
                <li><strong>Dluhy na SVJ:</strong> Byt může mít dluh na příspěvcích do SVJ (společenství vlastníků). Dluh přechází na kupujícího. Vyžádej si potvrzení od správce o stavu plateb.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Co dělat když po koupi zjistím skrytou vadu?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Skrytou vadu o které prodávající věděl a zamlčel ji lze reklamovat do 5 let od koupě. Musíš prokázat že vada existovala v době prodeje a prodávající o ní věděl (nebo vědět měl). Ihned fotografuj, zdokumentuj a konzultuj s advokátem. Bez právní pomoci je vymáhání složité.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Mám si najít stavebního inspektora nebo realitního makléře?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Stavební inspektor a realitní makléř jsou dvě různé věci. Makléř zprostředkovává prodej — není jeho zájmem odrazovat od koupě. Stavební inspektor (soudní znalec nebo certifikovaný inspektor) posuzuje technický stav nezávisle. Pro větší investici (byt, dům) se stavební inspektor vyplatí vždy.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Kdy je nejlepší čas na prohlídku bytu?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Přes den za denního světla — umělé osvětlení skryje vlhkostní skvrny a nerovnosti. Ideálně po dešti — vlhkostní problémy jsou pak lépe viditelné. Naplánuj si dostatek času — min. 60–90 minut. Vyhni se uspěchaným prohlídkám s makléřem který tě pobízí k rychlému rozhodnutí.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/odhalit-skryte-vady-bytu" title="Jak odhalit skryté vady bytu před koupí – checklist 2026" />

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
                <li><a href="#vlhkost">Vlhkost a plíseň</a></li>
                <li><a href="#elektrika">Elektroinstalace</a></li>
                <li><a href="#topeni">Topení a voda</a></li>
                <li><a href="#konstrukce">Konstrukce</a></li>
                <li><a href="#pravni">Právní vady</a></li>
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
