import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak odhadnout cenu rekonstrukce předem – kalkulace 2026",
  description: "Jak realisticky odhadnout cenu rekonstrukce bytu nebo domu. Orientační ceny prací, materiálu a co vždy zdraží. Bez překvapení a vícenákladů.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/odhadnout-cenu-rekonstrukce" },
  openGraph: { title: "Jak odhadnout cenu rekonstrukce předem 2026", description: "Orientační ceny prací a materiálu – jak sestavit realistický rozpočet rekonstrukce.", url: "https://www.domovniguru.cz/blog/odhadnout-cenu-rekonstrukce", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-22T08:00:00Z", modifiedTime: "2026-04-22T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak odhadnout cenu rekonstrukce předem 2026", description: "Orientační ceny prací a materiálu – realistický rozpočet rekonstrukce." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/odhadnout-cenu-rekonstrukce#article",
    "headline": "Jak odhadnout cenu rekonstrukce předem – kalkulace 2026",
    "datePublished": "2026-04-22T08:00:00Z",
    "dateModified": "2026-04-22T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak odhadnout cenu rekonstrukce", "cena rekonstrukce bytu", "rozpočet rekonstrukce", "orientační ceny řemeslníků", "vícenáklady rekonstrukce", "kalkulace rekonstrukce"]
  }]
};

const RELATED = [
  { title: "Jak naplánovat rekonstrukci bytu", href: "/blog/planovani-rekonstrukce-bytu", read: "8 min" },
  { title: "Kolik stojí rekonstrukce koupelny", href: "/blog/cena-rekonstrukce-koupelny", read: "6 min" },
  { title: "Jak najít a prověřit řemeslníka", href: "/blog/najit-proveri-remeslnika", read: "5 min" },
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
              <Link href="/blog/kategorie/stehovani">Stěhování & rekonstrukce</Link><span className="breadcrumb-sep">/</span>
              <span>Odhad ceny rekonstrukce</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏠 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak odhadnout cenu rekonstrukce předem</h1>
              <p className="article-lead">Většina rekonstrukcí přijde o 20–40 % dražší než původní odhad. Není to smůla — je to špatné plánování. Tady je jak sestavit realistický rozpočet který tě nepřekvapí.</p>
              <div className="article-meta-row"><span>Aktualizováno: 22. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/odhadnout-cenu-rekonstrukce" title="Jak odhadnout cenu rekonstrukce předem – kalkulace 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 190" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="190" fill="#f8f6f2"/>

                {/* Složky ceny */}
                <text x="380" y="22" textAnchor="middle" fontSize="10" fill="#6a6050" fontWeight="700" letterSpacing="0.04em">Z ČEHO SE SKLÁDÁ CENA REKONSTRUKCE</text>

                {[
                  { x:20, label:"Práce řemeslníků", pct:"40–50 %", icon:"👷", color:"#e07040", note:"největší položka" },
                  { x:175, label:"Materiál", pct:"25–35 %", icon:"🧱", color:"#4a90d9", note:"závisí na kvalitě" },
                  { x:330, label:"Sanitárka & vybavení", pct:"10–20 %", icon:"🚿", color:"#9b6fd4", note:"koupelna, kuchyň" },
                  { x:485, label:"Doprava & odvoz", pct:"3–5 %", icon:"🚛", color:"#5a9e6f", note:"kontejner, dovoz" },
                  { x:615, label:"Rezerva na nečekané", pct:"15–20 %", icon:"🛡️", color:"#f59e0b", note:"VŽDY přidat!" },
                ].map(({x, label, pct, icon, color, note}) => (
                  <g key={x} transform={`translate(${x}, 32)`}>
                    <rect x="0" y="0" width="128" height="140" rx="8" fill="#fff" stroke={color} strokeWidth="1.2"/>
                    <text x="64" y="34" textAnchor="middle" fontSize="24">{icon}</text>
                    <text x="64" y="58" textAnchor="middle" fontSize="18" fill={color} fontWeight="700">{pct}</text>
                    <line x1="10" y1="66" x2="118" y2="66" stroke={color} strokeWidth="0.5" opacity="0.4"/>
                    <text x="64" y="82" textAnchor="middle" fontSize="8.5" fill="#2a2a28" fontWeight="600">{label}</text>
                    <rect x="8" y="105" width="112" height="24" rx="4" fill={color} opacity="0.1"/>
                    <text x="64" y="120" textAnchor="middle" fontSize="8" fill={color}>{note}</text>
                  </g>
                ))}

                <rect y="172" width="760" height="18" fill="#f0ece8" opacity="0.5"/>
                <text x="380" y="184" textAnchor="middle" fontSize="8" fill="#8a7050" fontWeight="600" letterSpacing="0.06em">💡 ZLATÉ PRAVIDLO: ODHADNI NÁKLADY A PŘIDEJ 20 % REZERVU · VŽDY</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#postup">Jak sestavit odhad krok za krokem</a></li>
                <li><a href="#ceny-prace">Orientační ceny práce</a></li>
                <li><a href="#ceny-material">Orientační ceny materiálu</a></li>
                <li><a href="#co-zdrazuje">Co vždy zdraží rozpočet</a></li>
                <li><a href="#rezerva">Proč vždy přidat 20 % rezervu</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="postup">
              <h2>Jak sestavit odhad krok za krokem</h2>
              <p>Realistický odhad ceny rekonstrukce nelze sestavit za hodinu. Potřebuješ projít byt místnost po místnosti a pro každou práci zjistit tři věci: co se bude dělat, kolik m² nebo kusů a jaká je orientační cena za jednotku.</p>
              <ul>
                <li><strong>Krok 1 — Soupis prací:</strong> Projdi každou místnost a zapiš co chceš změnit. Buď konkrétní — ne "opravit koupelnu" ale "vybourat staré obklady 12 m², položit nové obklady 12 m², vyměnit WC, umyvadlo, baterie".</li>
                <li><strong>Krok 2 — Změř plochy:</strong> Každá práce se počítá v m² nebo kusech. Změř podlahy, stěny, strop. Zapiš každou místnost zvlášť.</li>
                <li><strong>Krok 3 — Zjisti orientační ceny:</strong> Pro každou práci zjisti orientační cenu práce (bez materiálu) a odděleně cenu materiálu. Viz tabulky níže.</li>
                <li><strong>Krok 4 — Vyžádej si nabídky:</strong> Kontaktuj min. 3 řemeslníky pro každou profesi. Orientační ceny jsou průměry — reálné nabídky mohou být o 30–50 % jiné.</li>
                <li><strong>Krok 5 — Přidej rezervu:</strong> K celkovému součtu přidej min. 20 % rezervu na nečekané výdaje.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Vytvoř si tabulku v Excelu nebo Google Sheets — sloupce: Práce, m², Cena práce/m², Cena materiálu/m², Celkem. Na konci součet + 20 % rezerva. Při jednání s řemeslníky máš přehled co a za kolik.</div>
            </section>

            <section id="ceny-prace">
              <h2>Orientační ceny práce 2026</h2>
              <p>Ceny jsou bez materiálu a platí pro průměr ČR. Praha a velká města jsou o 20–40 % dražší.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Práce</th><th>Jednotka</th><th>Cena práce</th><th>Poznámka</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Demolice a bourání</strong></td><td>m²</td><td>200–500 Kč</td><td>+ odvoz suti (kontejner 3–6 tis. Kč)</td></tr>
                    <tr><td><strong>Omítání strojní</strong></td><td>m²</td><td>200–350 Kč</td><td>Ruční omítání 350–600 Kč/m²</td></tr>
                    <tr><td><strong>Malování (2 vrstvy)</strong></td><td>m²</td><td>80–180 Kč</td><td>Bez penetrace a materiálu</td></tr>
                    <tr><td><strong>Pokládka dlažby</strong></td><td>m²</td><td>350–700 Kč</td><td>Složitější vzory dražší</td></tr>
                    <tr><td><strong>Pokládka plovoucí podlahy</strong></td><td>m²</td><td>120–300 Kč</td><td>Vinyl/laminát</td></tr>
                    <tr><td><strong>Elektroinstalace (nová)</strong></td><td>m²</td><td>700–1 500 Kč</td><td>Závisí na počtu okruhů</td></tr>
                    <tr><td><strong>Instalace voda/odpady</strong></td><td>m²</td><td>800–2 000 Kč</td><td>Koupelna nebo kuchyň</td></tr>
                    <tr><td><strong>Sádrokartonová příčka</strong></td><td>m²</td><td>400–700 Kč</td><td>Bez materiálu</td></tr>
                    <tr><td><strong>Obkládání koupelny</strong></td><td>m²</td><td>400–750 Kč</td><td>Práce bez obkladů</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="ceny-material">
              <h2>Orientační ceny materiálu 2026</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Materiál</th><th>Jednotka</th><th>Ekonomická</th><th>Střední</th><th>Prémiová</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Malířská barva</strong></td><td>m²</td><td>30–60 Kč</td><td>60–120 Kč</td><td>120–250 Kč</td></tr>
                    <tr><td><strong>Dlažba/obklady</strong></td><td>m²</td><td>200–500 Kč</td><td>500–1 500 Kč</td><td>1 500–5 000 Kč</td></tr>
                    <tr><td><strong>Vinyl podlaha</strong></td><td>m²</td><td>300–500 Kč</td><td>500–900 Kč</td><td>900–1 500 Kč</td></tr>
                    <tr><td><strong>Laminát</strong></td><td>m²</td><td>200–400 Kč</td><td>400–700 Kč</td><td>700–1 200 Kč</td></tr>
                    <tr><td><strong>Sádrokarton (desky)</strong></td><td>m²</td><td>80–120 Kč</td><td>120–180 Kč</td><td>180–250 Kč</td></tr>
                    <tr><td><strong>Zateplení fasády (EPS)</strong></td><td>m²</td><td>300–500 Kč</td><td>500–800 Kč</td><td>800–1 500 Kč</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="co-zdrazuje">
              <h2>Co vždy zdraží rozpočet</h2>
              <ul>
                <li><strong>Skryté závady:</strong> Pod obklady nebo podlahou se může skrývat vlhkost, plíseň, stará elektrika nebo poškozené rozvody. Nejčastěji v bytech starších 30 let.</li>
                <li><strong>Přesun rozvodů:</strong> Přesunutí WC, umyvadla nebo kuchyňského dřezu na jiné místo zdraží instalatérské práce o 15 000–50 000 Kč.</li>
                <li><strong>Stavební povolení:</strong> Pokud bourání nebo přestavba vyžaduje povolení, přidej 3–6 měsíců čekání a poplatky.</li>
                <li><strong>Vícepráce řemeslníků:</strong> Každá změna zadání během rekonstrukce = vícepráce = zdražení. Rozmysli si vše dopředu.</li>
                <li><strong>Čekání na materiál:</strong> Oblíbené obklady nebo kuchyňská linka mohou mít dodací lhůtu 6–12 týdnů — prodlouží celou rekonstrukci.</li>
                <li><strong>Náhradní bydlení:</strong> Pokud nemůžeš bydlet v bytě během rekonstrukce — přidej cenu pronájmu na celou dobu.</li>
              </ul>
              <div className="article-tip"><strong>⚠️ Nejdražší překvapení:</strong> Stará hliníková elektroinstalace nebo olověné trubky. Jejich výměna přijde na 80 000–200 000 Kč ale je bezpečnostně nutná. Před koupí bytu vždy zkontroluj stav rozvodů.</div>
            </section>

            <section id="rezerva">
              <h2>Proč vždy přidat 20 % rezervu</h2>
              <p>Statisticky více než 80 % rekonstrukcí přesáhne původní rozpočet. Průměrné překročení je 25–35 %. Nejčastější důvody:</p>
              <ul>
                <li>Skryté závady zjištěné až při bourání</li>
                <li>Zdražení materiálu mezi objednávkou a dodávkou</li>
                <li>Vícepráce kvůli změně původního záměru</li>
                <li>Prodloužení doby rekonstrukce = vyšší náklady na řemeslníky</li>
              </ul>
              <p>Rezerva 20 % není jen opatrnost — je to realistické plánování. Pokud ji nepotřebuješ, máš příjemné překvapení. Pokud ji potřebuješ (a pravděpodobně budeš), máš klid.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Jak rychle dostanu nabídky od řemeslníků?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Kvalitní řemeslníci jsou vytížení — čekej 1–3 týdny na první schůzku a dalších 1–2 týdny na písemnou nabídku. Proto poptávej alespoň 2–3 měsíce před plánovaným začátkem rekonstrukce. Na jaro a léto jsou řemeslníci obsazeni nejdříve.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Proč se ceny řemeslníků tak liší?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Rozdíl 50–100 % mezi nejlevnější a nejdražší nabídkou je normální. Levnější nabídka může znamenat méně zkušeného řemeslníka, nekvalitní materiál zahrnutý v ceně, nebo skryté vícepráce. Nejlevnější nabídka není vždy nejlevnější výsledek — ověř reference a co přesně cena zahrnuje.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Mám platit za vypracování rozpočtu?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Standardně řemeslníci nabídku vypracují zdarma v rámci obchodního jednání. Pokud někdo požaduje platbu za nabídku, je to neobvyklé — ale může jít o architekta nebo projektanta pro složitější zakázky kde je příprava nabídky skutečně pracná. V takovém případě se cena nabídky obvykle odečte od ceny zakázky.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/odhadnout-cenu-rekonstrukce" title="Jak odhadnout cenu rekonstrukce předem – kalkulace 2026" />

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
                <li><a href="#postup">Jak sestavit odhad</a></li>
                <li><a href="#ceny-prace">Ceny práce</a></li>
                <li><a href="#ceny-material">Ceny materiálu</a></li>
                <li><a href="#co-zdrazuje">Co vždy zdraží</a></li>
                <li><a href="#rezerva">Proč 20 % rezerva</a></li>
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
