import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak vybrat stěhovací firmu – na co si dát pozor 2026",
  description: "Jak vybrat spolehlivou stěhovací firmu. Na co se ptát, jak porovnat nabídky, co musí smlouva obsahovat a jak se vyhnout podvodníkům. Průvodce pro bezpečné stěhování.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/vybrat-stehovaci-firmu" },
  openGraph: { title: "Jak vybrat stěhovací firmu – na co si dát pozor 2026", description: "Spolehlivá stěhovací firma – jak ji najít, co zjistit a jak se vyhnout podvodníkům.", url: "https://www.domovniguru.cz/blog/vybrat-stehovaci-firmu", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-22T08:00:00Z", modifiedTime: "2026-04-22T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak vybrat stěhovací firmu 2026", description: "Spolehlivá stěhovací firma – jak ji najít a čemu se vyhnout." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/vybrat-stehovaci-firmu#article",
    "headline": "Jak vybrat stěhovací firmu – na co si dát pozor 2026",
    "datePublished": "2026-04-22T08:00:00Z",
    "dateModified": "2026-04-22T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak vybrat stěhovací firmu", "stěhovací firma doporučení", "cena stěhování", "stěhování pojištění", "spolehlivá stěhovací firma", "stěhování smlouva"]
  }]
};

const RELATED = [
  { title: "Jak správně zabalit věci při stěhování", href: "/blog/spravne-zabalit-veci", read: "4 min" },
  { title: "Jak přestěhovat velké spotřebiče", href: "/blog/prestehovat-velke-spotrebice", read: "5 min" },
  { title: "Jak se zbavit starého nábytku", href: "/blog/zbavit-se-stareho-nabytku", read: "4 min" },
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
              <span>Výběr stěhovací firmy</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏠 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak vybrat stěhovací firmu – na co si dát pozor</h1>
              <p className="article-lead">Špatná stěhovací firma dokáže zničit stěhování — poškozený nábytek, zmizené věci, nebo firma která zdvojnásobí cenu na místě. Tady je jak spolehlivou firmu najít a podvodníkům se vyhnout.</p>
              <div className="article-meta-row"><span>Aktualizováno: 22. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/vybrat-stehovaci-firmu" title="Jak vybrat stěhovací firmu – na co si dát pozor 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 185" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="185" fill="#f4f8fc"/>
                <text x="380" y="22" textAnchor="middle" fontSize="10" fill="#4a6080" fontWeight="700" letterSpacing="0.04em">NA CO SE PTÁT PŘI VÝBĚRU STĚHOVACÍ FIRMY</text>

                {[
                  { x:20, icon:"📋", q:"IČO a živnostenský list?", ok:"✅ Ověřitelné v OR", nok:"❌ Jen tel. číslo", color:"#4a90d9" },
                  { x:210, icon:"🛡️", q:"Pojištění přepravy?", ok:"✅ Záruky za škody", nok:"❌ Žádné pojištění", color:"#5a9e6f" },
                  { x:400, icon:"💰", q:"Pevná cena nebo hodinová?", ok:"✅ Pevná cena předem", nok:"❌ Jen hodinová sazba", color:"#f59e0b" },
                  { x:590, icon:"📄", q:"Písemná smlouva?", ok:"✅ Vše sepsáno", nok:"❌ Jen ústní dohoda", color:"#9b6fd4" },
                ].map(({x, icon, q, ok, nok, color}) => (
                  <g key={x} transform={`translate(${x}, 32)`}>
                    <rect x="0" y="0" width="155" height="138" rx="8" fill="#fff" stroke={color} strokeWidth="1.2"/>
                    <text x="77" y="34" textAnchor="middle" fontSize="22">{icon}</text>
                    <text x="77" y="54" textAnchor="middle" fontSize="9" fill={color} fontWeight="700">{q}</text>
                    <line x1="10" y1="62" x2="145" y2="62" stroke={color} strokeWidth="0.5" opacity="0.4"/>
                    <rect x="8" y="70" width="139" height="24" rx="4" fill="#f0fdf4"/>
                    <text x="77" y="85" textAnchor="middle" fontSize="8.5" fill="#3a7e4f" fontWeight="600">{ok}</text>
                    <rect x="8" y="100" width="139" height="24" rx="4" fill="#fff5f5"/>
                    <text x="77" y="115" textAnchor="middle" fontSize="8.5" fill="#e07a5f" fontWeight="600">{nok}</text>
                  </g>
                ))}

                <rect y="168" width="760" height="17" fill="#e0eaf4" opacity="0.5"/>
                <text x="380" y="180" textAnchor="middle" fontSize="8" fill="#3a6a8a" fontWeight="600" letterSpacing="0.06em">🚚 VŽDY MIN. 3 NABÍDKY · OVĚŘ IČO · TRVEJ NA SMLOUVĚ · ZÁLOHA MAX. 30 %</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#kde-hledat">Kde hledat stěhovací firmu</a></li>
                <li><a href="#overit">Jak firmu ověřit</a></li>
                <li><a href="#nabidka">Co musí obsahovat nabídka</a></li>
                <li><a href="#smlouva">Smlouva o stěhování</a></li>
                <li><a href="#cena">Orientační ceny stěhování</a></li>
                <li><a href="#varovani">Varovné signály podvodné firmy</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="kde-hledat">
              <h2>Kde hledat stěhovací firmu</h2>
              <ul>
                <li><strong>Doporučení od přátel nebo rodiny:</strong> Nejspolehlivější zdroj. Osobní zkušenost je lepší než jakákoli recenze online.</li>
                <li><strong>Google recenze:</strong> Hledej firmy s min. 20+ recenzemi a hodnocením 4,5+. Přečti negativní recenze — jak firma reaguje na problémy říká hodně.</li>
                <li><strong>Firmy.cz, Yelp, Heureka:</strong> Porovnávací portály s recenzemi. Ověř zda recenze vypadají autenticky.</li>
                <li><strong>Facebook skupiny stěhování:</strong> Místní skupiny "Stěhování Praha/Brno/..." mají doporučení od skutečných lidí.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Kontaktuj min. 3 firmy a vyžádej si nabídky. Rozdíl cen může být 50–100 % — a nejlevnější nemusí být nejlepší.</div>
            </section>

            <section id="overit">
              <h2>Jak firmu ověřit</h2>
              <ul>
                <li><strong>IČO v obchodním rejstříku:</strong> Ověř IČO na justice.cz — firma musí být zapsána a aktivní. Fyzické osoby ověř na živnostenském rejstříku (rzp.cz).</li>
                <li><strong>Pojištění odpovědnosti za škody:</strong> Zeptej se přímo: "Máte pojištění přepravy věcí a jaká je výše krytí?" Seriózní firma odpovídá konkrétně.</li>
                <li><strong>Fyzická adresa:</strong> Firma by měla mít reálnou provozovnu, ne jen mobilní číslo a e-mail.</li>
                <li><strong>Reference:</strong> Požádej o kontakt na předchozí zákazníky. Firma která nemůže poskytnout reference, je varovný signál.</li>
              </ul>
            </section>

            <section id="nabidka">
              <h2>Co musí obsahovat nabídka</h2>
              <ul>
                <li><strong>Pevná cena nebo jasná hodinová sazba</strong> (s odhadem celkové doby)</li>
                <li><strong>Co je zahrnuto</strong> — demontáž nábytku, balení, etáž bez výtahu, vzdálenost</li>
                <li><strong>Co není zahrnuto</strong> — balící materiál, likvidace starého nábytku, stěhování do suterénu</li>
                <li><strong>Počet stěhovníků a vozidel</strong></li>
                <li><strong>Datum a čas stěhování</strong></li>
                <li><strong>Podmínky zrušení nebo přesunutí termínu</strong></li>
              </ul>
              <div className="article-tip"><strong>⚠️ Pozor na hodinové sazby:</strong> Firma s hodinovou sazbou bez odhadu celkové doby může zdražovat záměrným pomalým tempem. Preferuj pevnou cenu nebo firmu která dá realistický odhad hodin.</div>
            </section>

            <section id="smlouva">
              <h2>Smlouva o stěhování</h2>
              <p>Bez písemné smlouvy nemáš při poškození věcí žádnou ochranu. Trvej na smlouvě i při menším stěhování.</p>
              <ul>
                <li><strong>Co musí smlouva obsahovat:</strong> Identifikace obou stran (IČO firmy), datum a adresa stěhování, soupis přepravovaných věcí (nebo odkaz na předací protokol), cena a způsob platby, podmínky náhrady škody při poškození.</li>
                <li><strong>Předávací protokol:</strong> Před stěhováním zaznamenej stav každého kusu nábytku (fotografie). Po stěhování zkontroluj poškození a zapiš do předávacího protokolu.</li>
                <li><strong>Záloha:</strong> Standardně 20–30 % předem, zbytek po dokončení. Nikdy neplať 100 % předem.</li>
              </ul>
            </section>

            <section id="cena">
              <h2>Orientační ceny stěhování 2026</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Rozsah stěhování</th><th>Orientační cena</th><th>Poznámka</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Garsonka / 1+kk</strong></td><td>3 000–6 000 Kč</td><td>V rámci města</td></tr>
                    <tr><td><strong>2+kk / 2+1</strong></td><td>5 000–10 000 Kč</td><td>V rámci města</td></tr>
                    <tr><td><strong>3+1 / 4+kk</strong></td><td>8 000–18 000 Kč</td><td>V rámci města</td></tr>
                    <tr><td><strong>Stěhování mezi městy</strong></td><td>+50–100 % k ceně</td><td>Praha–Brno apod.</td></tr>
                    <tr><td><strong>Kancelář (malá)</strong></td><td>5 000–15 000 Kč</td><td>Závisí na počtu stanic</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="varovani">
              <h2>Varovné signály podvodné firmy</h2>
              <ul>
                <li><strong>Neexistující IČO nebo firma nezapsaná v rejstříku</strong></li>
                <li><strong>Odmítání písemné smlouvy nebo předávacího protokolu</strong></li>
                <li><strong>Požadavek 100 % zálohy předem</strong></li>
                <li><strong>Cena výrazně nižší než konkurence</strong> — vždy je důvod (skryté poplatky, pomalé tempo, žádné pojištění)</li>
                <li><strong>Kontakt jen přes mobil bez firemního e-mailu nebo adresy</strong></li>
                <li><strong>Zdražování na místě</strong> — "zapomněli" zmínit příplatek za etáž, vzdálenost, balení</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Jak dlouho dopředu objednat stěhovací firmu?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Minimálně 2–4 týdny předem, pro stěhování v sezóně (jaro, léto) nebo koncem měsíce (kdy se stěhuje nejvíc) ideálně 4–8 týdnů. Konec měsíce je nejnáročnější — firmy jsou plně vytíženy a ceny bývají vyšší.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Mám si věci balit sám nebo platit firmě?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Balení firmou je pohodlnější ale výrazně dražší (přidá 30–50 % k ceně). Firmy také profesionálně balí křehké věci a nesou odpovědnost za poškození. Pokud balíš sám, firma obvykle neodpovídá za obsah kartonů. Kompromis: balit si méně křehké věci sám, křehké nechej na firmu.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Co dělat když firma poškodí nábytek?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Okamžitě zaznamenej poškození do předávacího protokolu — to je základ pro reklamaci. Fotografuj. Sepíš reklamaci písemně s popisem a fotografiemi do 3 dnů. Pokud firma odmítá náhradu, obrátíš se na Českou obchodní inspekci nebo soud. Proto je pojištění a předávací protokol tak důležité.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/vybrat-stehovaci-firmu" title="Jak vybrat stěhovací firmu – na co si dát pozor 2026" />

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
                <li><a href="#kde-hledat">Kde hledat firmu</a></li>
                <li><a href="#overit">Jak firmu ověřit</a></li>
                <li><a href="#nabidka">Co musí nabídka obsahovat</a></li>
                <li><a href="#smlouva">Smlouva</a></li>
                <li><a href="#cena">Orientační ceny</a></li>
                <li><a href="#varovani">Varovné signály</a></li>
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
