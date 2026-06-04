import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak otestovat zásuvku – fázová tužka a multimetr",
  description: "Jak zjistit jestli zásuvka funguje a správně zapojená. Fázová tužka, multimetr nebo zkoušečka zásuvek – co použít, jak postupovat a co výsledky znamenají.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/otestovat-zasuvku" },
  openGraph: { title: "Jak otestovat zásuvku 2026", description: "Fázová tužka, multimetr, zkoušečka – jak otestovat zásuvku krok za krokem.", url: "https://www.domovniguru.cz/blog/otestovat-zasuvku", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-22T08:00:00Z", modifiedTime: "2026-04-22T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20otestovat%20z%C3%A1suvku%20%E2%80%93%20f%C3%A1zov%C3%A1%20tu%C5%BEka%20a%20multimetr&cat=blog", width: 1200, height: 630, alt: "Jak otestovat zásuvku – fázová tužka a multimetr" }] },
  twitter: { card: "summary_large_image", title: "Jak otestovat zásuvku 2026", description: "Fázová tužka, multimetr, zkoušečka – jak otestovat zásuvku bezpečně." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/otestovat-zasuvku#article",
    "headline": "Jak otestovat zásuvku – fázová tužka a multimetr",
    "datePublished": "2026-04-22T08:00:00Z",
    "dateModified": "2026-06-04T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak otestovat zásuvku", "fázová tužka", "multimetr zásuvka", "zkoušečka zásuvek", "zásuvka nefunguje", "test elektrické zásuvky"]
  }, {
    "@type": "FAQPage",
    "@id": "https://www.domovniguru.cz/blog/otestovat-zasuvku#faq",
    "mainEntity": [
      { "@type": "Question", "name": "Mohu otestovat zásuvku sám nebo potřebuji elektrikáře?", "acceptedAnswer": { "@type": "Answer", "text": "Test fázovou tužkou nebo zkoušečkou zvládneš sám — jsou bezpečné pro laiky. Měření multimetrem je bezpečné pokud ho správně nastavíš a dodržíš bezpečnostní pravidla. Otevření zásuvky a jakákoli práce na instalaci vyžaduje elektrikáře nebo osobu s elektrotechnickou kvalifikací." } },
      { "@type": "Question", "name": "Proč zásuvka funguje chvíli a pak přestane?", "acceptedAnswer": { "@type": "Answer", "text": "Přerušovaný kontakt v zásuvce — uvolněný svorník nebo oxidovaný kontakt. Přetěžování okruhu — jistič se zahřeje a vybaví (tepelná ochrana). Všechny tyto příčiny vyžadují elektrikáře — přerušovaný kontakt způsobuje jiskření a je požárním rizikem." } },
      { "@type": "Question", "name": "Je nebezpečné používat zásuvku bez zemnění?", "acceptedAnswer": { "@type": "Answer", "text": "Ano — zemnění chrání před úrazem elektrickým proudem při poruše spotřebiče. Bez zemnění se napětí při poruše přenese na kovové části spotřebiče (lednička, pračka, trouba) a dotek způsobí úraz. Starší byty bez zemnění by měly mít alespoň proudový chránič (RCD) jako alternativní ochranu." } }
    ]
  }, {
    "@type": "HowTo",
    "@id": "https://www.domovniguru.cz/blog/otestovat-zasuvku#howto",
    "name": "Jak otestovat zásuvku – fázová tužka a multimetr",
    "description": "Jak zjistit jestli zásuvka funguje a správně zapojená. Fázová tužka, multimetr nebo zkoušečka zásuvek – co použít, jak postupovat a co výsledky znamenají.",
    "step": [
      { "@type": "HowToStep", "name": "Nejdřív zkontroluj toto – bez nářadí", "text": "Než vytáhneš měřicí přístroje, udělej tyto jednoduché kontroly:" },
      { "@type": "HowToStep", "name": "Fázová tužka – nejjednodušší test", "text": "Fázová tužka je nejbezpečnější a nejjednodušší nástroj. Detekuje přítomnost fáze (L) v zásuvce bez nutnosti přímého kontaktu holých vodičů." },
      { "@type": "HowToStep", "name": "Zkoušečka zásuvek – komplexní test", "text": "Zkoušečka zásuvek (tester) je malý přístroj který zasuneš přímo do zásuvky. LED indikátory ukážou stav všech tří vodičů — L, N a PE (zemnění)." },
      { "@type": "HowToStep", "name": "Multimetr – přesné měření napětí", "text": "Multimetr – přesné měření napětí" },
      { "@type": "HowToStep", "name": "Co výsledky znamenají", "text": "Co výsledky znamenají" }
    ]
  }]
};

const RELATED = [
  { title: "Jak vyměnit zásuvku sám", href: "/blog/jak-vymenit-zasuvku", read: "6 min" },
  { title: "Jak přidat zásuvku do místnosti", href: "/blog/pridat-zasuvku", read: "6 min" },
  { title: "Co dělat když nejde proud v části bytu", href: "/blog/nejde-proud-cast-bytu", read: "5 min" },
  { title: "Jak fungují pojistky a jističe", href: "/blog/jak-funguji-pojistky", read: "5 min" },
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
              <span>Test zásuvky</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">⚡ Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 4 min čtení</span>
              </div>
              <h1 className="article-h1">Jak otestovat zásuvku – fázová tužka, multimetr a zkoušečka</h1>
              <p className="article-lead">Nefungující zásuvka má několik možných příčin. Správný test prozradí jestli je problém v zásuvce, jističi nebo vedení — a jestli to zvládneš opravit sám.</p>
              <div className="article-meta-row"><span>Aktualizováno: 4. června 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/otestovat-zasuvku" title="Jak otestovat zásuvku – fázová tužka a multimetr" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 175" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="175" fill="#f4f8fc"/>
                {[
                  { x:20, icon:"🖊️", name:"Fázová tužka", price:"50–200 Kč", use:"Detekuje fázi (L)\nBezpečně, beze zkoušení\nSvítí = fáze přítomna", limit:"Nezmění napětí\nNezjistí PE (zemnění)", color:"#f59e0b" },
                  { x:210, icon:"🔌", name:"Zkoušečka zásuvek", price:"150–500 Kč", use:"Kontrola všech 3 vodičů\nIndikátory LED\nNejrychlejší test", limit:"Nezmění přesné\nnapětí nebo odpor", color:"#5a9e6f" },
                  { x:400, icon:"📊", name:"Multimetr", price:"300–2 000 Kč", use:"Přesné napětí (V)\nOdpor (Ω)\nUniverální přístroj", limit:"Vyžaduje znalosti\nPřímý kontakt s vedením", color:"#4a90d9" },
                  { x:590, name:"Kdy volat\nelektrikáře", icon:"🔧", price:"500–2 000 Kč", use:"Problém ve vedení\nOpakované výpadky\nZapálení nebo jiskření", limit:"Nikdy neotevírej\nrozvaděč sám", color:"#e07040" },
                ].map(({x, icon, name, price, use, limit, color}) => (
                  <g key={x} transform={`translate(${x}, 12)`}>
                    <rect x="0" y="0" width="163" height="150" rx="8" fill="#fff" stroke={color} strokeWidth="1.2"/>
                    <text x="81" y="30" textAnchor="middle" fontSize="20">{icon}</text>
                    <text x="81" y="48" textAnchor="middle" fontSize="10" fill={color} fontWeight="700">{name.split('\n')[0]}</text>
                    {name.split('\n')[1] && <text x="81" y="60" textAnchor="middle" fontSize="10" fill={color} fontWeight="700">{name.split('\n')[1]}</text>}
                    <text x="81" y="68" textAnchor="middle" fontSize="8" fill="#8a8078">{price}</text>
                    <line x1="10" y1="74" x2="153" y2="74" stroke={color} strokeWidth="0.5" opacity="0.4"/>
                    {use.split('\n').map((l,i) => <text key={i} x="12" y={86+i*12} fontSize="8" fill="#3a7e4f">✓ {l}</text>)}
                    {limit.split('\n').map((l,i) => <text key={i} x="12" y={124+i*12} fontSize="8" fill="#e07040">✗ {l}</text>)}
                  </g>
                ))}
                <rect y="158" width="760" height="17" fill="#e0eaf4" opacity="0.5"/>
                <text x="380" y="170" textAnchor="middle" fontSize="8" fill="#3a6a8a" fontWeight="600" letterSpacing="0.06em">⚡ ZAČNI FÁZOVOU TUŽKOU · PŘESNÉ NAPĚTÍ MULTIMETREM · JISKŘENÍ = ELEKTRIKÁŘ IHNED</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#pred-testem">Nejdřív zkontroluj toto</a></li>
                <li><a href="#tuzka">Fázová tužka</a></li>
                <li><a href="#zkousecka">Zkoušečka zásuvek</a></li>
                <li><a href="#multimetr">Multimetr</a></li>
                <li><a href="#diagnoza">Co výsledky znamenají</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="pred-testem">
              <h2>Nejdřív zkontroluj toto – bez nářadí</h2>
              <p>Než vytáhneš měřicí přístroje, udělej tyto jednoduché kontroly:</p>
              <ul>
                <li><strong>Zkontroluj jistič:</strong> Jdi k rozvaděči a zkontroluj jestli je příslušný jistič v poloze ZAP. Vybavený jistič překlop zpět do polohy ZAP.</li>
                <li><strong>Otestuj jiný spotřebič:</strong> Zasuň jiný spotřebič (lampa, telefon) do podezřelé zásuvky. Pokud ani ten nefunguje — problém je v zásuvce nebo vedení, ne ve spotřebiči.</li>
                <li><strong>Otestuj jiné zásuvky:</strong> Nefunguje více zásuvek najednou → pravděpodobně vybavený jistič. Nefunguje jen jedna → problém přímo v té zásuvce.</li>
              </ul>
              <div className="article-tip"><strong>💡 90 % případů</strong> nefunkční zásuvky je vybavený jistič nebo proudový chránič. Před jakýmkoli testem zkontroluj rozvaděč.</div>
            </section>

            <section id="tuzka">
              <h2>Fázová tužka – nejjednodušší test</h2>
              <p>Fázová tužka je nejbezpečnější a nejjednodušší nástroj. Detekuje přítomnost fáze (L) v zásuvce bez nutnosti přímého kontaktu holých vodičů.</p>
              <ul>
                <li><strong>Jak použít:</strong> Drž tužku za plastové tělo (ne za kovový hrot). Vlož hrot do levé díry zásuvky (fáze L). Pokud tužka svítí nebo pípá — fáze je přítomna.</li>
                <li><strong>Pravá díra (N — nula):</strong> Tužka svítit nemá. Pokud svítí — zásuvka je chybně zapojena (fáze a nula prohozeny) — to je bezpečnostní problém, okamžitě vypni jistič.</li>
                <li><strong>Co fázová tužka neukáže:</strong> Nezjistí napětí, odpor ani stav zemnění (PE). Pouze přítomnost nebo nepřítomnost fáze.</li>
              </ul>
            </section>

            <section id="zkousecka">
              <h2>Zkoušečka zásuvek – komplexní test</h2>
              <p>Zkoušečka zásuvek (tester) je malý přístroj který zasuneš přímo do zásuvky. LED indikátory ukážou stav všech tří vodičů — L, N a PE (zemnění).</p>
              <ul>
                <li><strong>Jak použít:</strong> Zasuň zkoušečku do zásuvky. LED diody se rozsvítí dle stavu zapojení. Každý výrobce má jiné schéma indikátorů — viz přiložený štítek na zkoušečce.</li>
                <li><strong>Správně zapojená zásuvka:</strong> Typicky svítí 2 ze 3 LED diod v předepsané kombinaci.</li>
                <li><strong>Chybějící zemnění (PE):</strong> Jedna LED nesvítí. Zásuvka bez zemnění je bezpečnostní riziko — zejména pro spotřebiče s kovovými částmi.</li>
                <li><strong>Prohozená fáze a nula:</strong> Specifická kombinace LED. Nutná oprava — chybné zapojení je nebezpečné.</li>
              </ul>
            </section>

            <section id="multimetr">
              <h2>Multimetr – přesné měření napětí</h2>
              <ul>
                <li><strong>Nastavení:</strong> Přepni multimetr na měření střídavého napětí (AC ~) — rozsah 250 V nebo AUTO.</li>
                <li><strong>Měření L-N:</strong> Červenou sondou do levé díry (L), černou do pravé díry (N). Správné napětí: 220–240 V. Nižší napětí může signalizovat přetížení okruhu.</li>
                <li><strong>Měření L-PE:</strong> Červenou sondou do levé díry (L), černou do středního otvoru (PE — zemnění). Správné napětí: 220–240 V. Nulové napětí = zemnění nefunguje.</li>
                <li><strong>Měření N-PE:</strong> Správné napětí: 0 V (nebo velmi malé). Pokud je zde napětí — problém v instalaci.</li>
              </ul>
              <div className="article-tip"><strong>⚠️ Bezpečnost:</strong> Při měření multimetrem nikdy se nedotýkej kovových částí sond. Drž sondy pouze za plastovými rukojetěmi. Nezapomeň přepnout multimetr na správný rozsah — jinak ho poškodíš nebo způsobíš zkrat.</div>
            </section>

            <section id="diagnoza">
              <h2>Co výsledky znamenají</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Výsledek testu</th><th>Příčina</th><th>Řešení</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Žádné napětí, fáze chybí</strong></td><td>Vybavený jistič nebo RCD</td><td>Překlop jistič v rozvaděči</td></tr>
                    <tr><td><strong>Fáze přítomna, zásuvka nefunguje</strong></td><td>Přerušení v zásuvce nebo vodiči</td><td>Vyměnit zásuvku, elektrikář</td></tr>
                    <tr><td><strong>Chybí PE (zemnění)</strong></td><td>Přerušení zemnicího vodiče</td><td>Elektrikář — bezpečnostní problém</td></tr>
                    <tr><td><strong>Prohozena L a N</strong></td><td>Špatné zapojení</td><td>Opravit zapojení (elektrikář)</td></tr>
                    <tr><td><strong>Napětí nižší než 210 V</strong></td><td>Přetížený okruh nebo vadný vodič</td><td>Elektrikář</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Mohu otestovat zásuvku sám nebo potřebuji elektrikáře?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Test fázovou tužkou nebo zkoušečkou zvládneš sám — jsou bezpečné pro laiky. Měření multimetrem je bezpečné pokud ho správně nastavíš a dodržíš bezpečnostní pravidla. Otevření zásuvky a jakákoli práce na instalaci vyžaduje elektrikáře nebo alespoň osobu s elektrotechnickou kvalifikací.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Proč zásuvka funguje chvíli a pak přestane?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Přerušovaný kontakt v zásuvce — uvolněný svorník nebo oxidovaný kontakt. Přetěžování okruhu — jistič se zahřeje a vybaví (tepelná ochrana). Vadný vodič s intermitentním přerušením. Všechny tyto příčiny vyžadují elektrikáře — přerušovaný kontakt způsobuje jiskření a je požárním rizikem.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Je nebezpečné používat zásuvku bez zemnění (bez PE)?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ano — zemnění chrání před úrazem elektrickým proudem při poruše spotřebiče. Bez zemnění se napětí při poruše přenese na kovové části spotřebiče (lednička, pračka, trouba) a dotek způsobí úraz. Starší byty bez zemnění by měly mít alespoň proudový chránič (RCD) jako alternativní ochranu.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/otestovat-zasuvku" title="Jak otestovat zásuvku – fázová tužka a multimetr" />

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
                <li><a href="#pred-testem">Nejdřív zkontroluj</a></li>
                <li><a href="#tuzka">Fázová tužka</a></li>
                <li><a href="#zkousecka">Zkoušečka</a></li>
                <li><a href="#multimetr">Multimetr</a></li>
                <li><a href="#diagnoza">Co výsledky znamenají</a></li>
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
