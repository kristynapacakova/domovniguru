import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak se zbavit starého nábytku – prodat, darovat nebo odvézt 2026",
  description: "Jak se zbavit starého nábytku rychle a bez stresu. Prodej online, darovací portály, sběrné dvory nebo kontejner – průvodce všemi možnostmi včetně cen.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/zbavit-se-stareho-nabytku" },
  openGraph: { title: "Jak se zbavit starého nábytku 2026", description: "Prodat, darovat nebo odvézt – jak se zbavit starého nábytku rychle a bez stresu.", url: "https://www.domovniguru.cz/blog/zbavit-se-stareho-nabytku", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-22T08:00:00Z", modifiedTime: "2026-04-22T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak se zbavit starého nábytku 2026", description: "Prodat, darovat nebo odvézt – všechny možnosti jak se zbavit starého nábytku." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/zbavit-se-stareho-nabytku#article",
    "headline": "Jak se zbavit starého nábytku – prodat, darovat nebo odvézt 2026",
    "datePublished": "2026-04-22T08:00:00Z",
    "dateModified": "2026-04-22T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak se zbavit starého nábytku", "prodat starý nábytek", "darovat nábytek", "odvoz starého nábytku", "sběrný dvůr nábytek", "bazaar nábytek"]
  }]
};

const RELATED = [
  { title: "Jak vybrat stěhovací firmu", href: "/blog/vybrat-stehovaci-firmu", read: "5 min" },
  { title: "Jak správně zabalit věci při stěhování", href: "/blog/spravne-zabalit-veci", read: "4 min" },
  { title: "Jak přestěhovat velké spotřebiče", href: "/blog/prestehovat-velke-spotrebice", read: "5 min" },
  { title: "Jak naplánovat rekonstrukci bytu", href: "/blog/planovani-rekonstrukce-bytu", read: "8 min" },
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
              <span>Zbavit se starého nábytku</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏠 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak se zbavit starého nábytku – prodat, darovat nebo odvézt</h1>
              <p className="article-lead">Stará pohovka nebo skříň blokují místo a brání stěhování. Tady jsou všechny možnosti jak se jich zbavit — od prodeje za pár tisíc po bezplatný odvoz do 24 hodin.</p>
              <div className="article-meta-row"><span>Aktualizováno: 22. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/zbavit-se-stareho-nabytku" title="Jak se zbavit starého nábytku – prodat, darovat nebo odvézt 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 175" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="175" fill="#f8f6f2"/>
                {[
                  { x:20, icon:"💰", name:"Prodat online", where:"Bazoš, Facebook\nMarketplace", price:"100–5 000 Kč", speed:"1–14 dní", color:"#5a9e6f" },
                  { x:185, icon:"🤝", name:"Darovat", where:"Dobré místo,\nsousedé, kamarádi", price:"Zdarma", speed:"1–3 dny", color:"#4a90d9" },
                  { x:350, icon:"♻️", name:"Sběrný dvůr", where:"Komunální\nsběrný dvůr", price:"Zdarma", speed:"Hned", color:"#9b6fd4" },
                  { x:515, icon:"🚛", name:"Odvozová firma", where:"Odvoz starého\nnábytku", price:"500–3 000 Kč", speed:"1–3 dny", color:"#f59e0b" },
                  { x:620, icon:"🗑️", name:"Kontejner", where:"Pronájem\nkontejneru", price:"2 000–6 000 Kč", speed:"Hned", color:"#e07040" },
                ].map(({x, icon, name, where, price, speed, color}) => (
                  <g key={x} transform={`translate(${x}, 12)`}>
                    <rect x="0" y="0" width="148" height="148" rx="8" fill="#fff" stroke={color} strokeWidth="1.2"/>
                    <text x="74" y="36" textAnchor="middle" fontSize="22">{icon}</text>
                    <text x="74" y="56" textAnchor="middle" fontSize="10" fill={color} fontWeight="700">{name}</text>
                    <line x1="10" y1="63" x2="138" y2="63" stroke={color} strokeWidth="0.5" opacity="0.4"/>
                    {where.split('\n').map((line, i) => (
                      <text key={i} x="74" y={77+i*13} textAnchor="middle" fontSize="8" fill="#4a4a40">{line}</text>
                    ))}
                    <text x="74" y="110" textAnchor="middle" fontSize="9" fill={color} fontWeight="700">{price}</text>
                    <text x="74" y="125" textAnchor="middle" fontSize="8" fill="#8a8078">⏱ {speed}</text>
                  </g>
                ))}
                <rect y="158" width="760" height="17" fill="#f0ece8" opacity="0.5"/>
                <text x="380" y="170" textAnchor="middle" fontSize="8" fill="#8a7050" fontWeight="600" letterSpacing="0.06em">💡 STAV ROZHODUJE: DOBRÝ STAV → PRODEJ · HORŠÍ → DAROVAT · ŠPATNÝ → SBĚRNÝ DVŮR</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#prodat">Prodat online – jak na to</a></li>
                <li><a href="#darovat">Darovat – kde a jak</a></li>
                <li><a href="#sberny">Sběrný dvůr</a></li>
                <li><a href="#odvoz">Odvozová firma</a></li>
                <li><a href="#co-kdy">Co kdy použít – shrnutí</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="prodat">
              <h2>Prodat online – jak na to</h2>
              <p>Dobrý nábytek v použitelném stavu se prodá rychle. Klíč je správná fotka a realistická cena.</p>
              <ul>
                <li><strong>Kde inzerovat:</strong> Bazoš.cz (největší databáze kupujících v ČR), Facebook Marketplace (rychlé místní prodeje), Fler.cz (pro designové nebo vintage kusy).</li>
                <li><strong>Fotky rozhodují:</strong> Foť na denním světle, pozadí uklizené. Víc fotek = víc zájemců. Vyfotografuj případné poškození — předejdeš reklamacím a ztrátě času.</li>
                <li><strong>Cena:</strong> Použitý nábytek se prodává za 20–40 % původní ceny. Výjimka: designové kousky, masivní dřevo nebo vintage. Nastav cenu mírně výš než chceš — zájemci smlouvají.</li>
                <li><strong>Popis:</strong> Uveď rozměry, stav, zda je možnost dovozu. "Možnost dovozu za doplatek" výrazně zvyšuje zájem.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud se nábytek neprodá do 2 týdnů, sniž cenu o 20–30 %. Rychlý prodej je lepší než měsíce čekání s nábytkem v cestě.</div>
            </section>

            <section id="darovat">
              <h2>Darovat – kde a jak</h2>
              <ul>
                <li><strong>Dobré místo (dobremisto.cz):</strong> Největší darovací portál v ČR. Přidáš inzerát zdarma, zájemci si přijdou pro věc sami. Ideální pro funkční nábytek v horším stavu.</li>
                <li><strong>Facebook skupiny "Dám zdarma":</strong> Místní skupiny kde nabídneš nábytek sousedům. Obvykle zmizí do 24–48 hodin.</li>
                <li><strong>Charity a sociální obchody:</strong> Armáda spásy, Naděje a podobné organizace přebírají nábytek v dobrém stavu. Obvykle si ho sami odvezou. Zavolej předem — ne každá pobočka bere velký nábytek.</li>
                <li><strong>Sousedé a rodina:</strong> Nejrychlejší a nejjednodušší — zeptej se v sousedství nebo pošli zprávu rodině.</li>
              </ul>
            </section>

            <section id="sberny">
              <h2>Sběrný dvůr – zdarma a ihned</h2>
              <p>Každá obec provozuje sběrný dvůr kde lze zdarma odevzdat starý nábytek. Je to nejrychlejší a nejlevnější způsob jak se zbavit nábytku který nikdo nechce.</p>
              <ul>
                <li><strong>Jak to funguje:</strong> Přijdeš s nábytkem, obsluha ti pomůže vyložit (někde). Zdarma pro obyvatele obce. Příjem velkého nábytku je obvykle v pracovní době.</li>
                <li><strong>Podmínky:</strong> Musíš mít doklad o trvalém bydlišti v dané obci nebo platit poplatek (50–200 Kč). Velké kusy (matrace, gauč) jsou zpravidla přijímány vždy.</li>
                <li><strong>Kde najít:</strong> Webové stránky města nebo obce — "sběrný dvůr" + název města. Nebo zavolej na místní technické služby.</li>
              </ul>
            </section>

            <section id="odvoz">
              <h2>Odvozová firma – pohodlné ale placené</h2>
              <p>Pokud nemáš auto, nemůžeš rozložit nábytek nebo prostě nechceš ztrácet čas, zavolej odvozovou firmu. Za 500–3 000 Kč přijdou, odnesou a odvezou.</p>
              <ul>
                <li><strong>Kde hledat:</strong> "Odvoz starého nábytku + název města" na Google. Nebo Bazoš — spousta místních firem nabízí odvoz za rozumnou cenu.</li>
                <li><strong>Cena:</strong> 500–1 500 Kč za jeden kus velkého nábytku. Pro celý byt starého nábytku 2 000–6 000 Kč.</li>
                <li><strong>Tip:</strong> Některé firmy odvezou zdarma pokud je nábytek v použitelném stavu a oni ho dál prodají nebo darují. Zeptej se.</li>
              </ul>
            </section>

            <section id="co-kdy">
              <h2>Co kdy použít – shrnutí</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Stav nábytku</th><th>Nejlepší možnost</th><th>Alternativa</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Výborný stav</strong></td><td>Prodat online (Bazoš, Marketplace)</td><td>Darovat na Dobrém místě</td></tr>
                    <tr><td><strong>Dobrý stav</strong></td><td>Darovat nebo prodat levněji</td><td>Charity, sousedé</td></tr>
                    <tr><td><strong>Horší stav (funkční)</strong></td><td>Darovat zdarma (Facebook skupiny)</td><td>Sběrný dvůr</td></tr>
                    <tr><td><strong>Špatný stav</strong></td><td>Sběrný dvůr</td><td>Kontejner nebo odvoz</td></tr>
                    <tr><td><strong>Žádné auto / čas</strong></td><td>Odvozová firma</td><td>Kontejner na dvorek</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Mohu starou pohovku vyhodit do kontejneru?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Do běžného komunálního kontejneru (popelnice) ne — velký nábytek tam nepatří a hrozí pokuta. Možnosti: sběrný dvůr (zdarma), pronájem velkoobjemového kontejneru, nebo přistavení kontejneru od technických služeb obce. Mnoho obcí nabízí 1–2× ročně přistavení kontejneru na velké odpady zdarma pro občany.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Kolik dostanu za starou pohovku na Bazoši?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Záleží na stavu, značce a lokalitě. Průměrná pohovka v dobrém stavu: 500–3 000 Kč. Designová nebo značková pohovka: 3 000–15 000 Kč. Pohovka v horším stavu: 0–500 Kč nebo darovat. Fotky a popis jsou klíčové — pohovka s dobrými fotkami se prodá za 2× více než stejná pohovka s tmavou rozmazanou fotkou.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Charity si samy odvezou nábytek?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Závisí na charitě a lokalitě. Armáda spásy a některé pobočky Naděje mají odvoz — ale kapacita je omezená a čekací doba může být 1–4 týdny. Zavolej předem a domluvte se. Podmínka je vždy dobrý stav nábytku — poškozený nebo opotřebovaný nábytek charity neberou.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/zbavit-se-stareho-nabytku" title="Jak se zbavit starého nábytku – prodat, darovat nebo odvézt 2026" />

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
                <li><a href="#prodat">Prodat online</a></li>
                <li><a href="#darovat">Darovat</a></li>
                <li><a href="#sberny">Sběrný dvůr</a></li>
                <li><a href="#odvoz">Odvozová firma</a></li>
                <li><a href="#co-kdy">Co kdy použít</a></li>
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
