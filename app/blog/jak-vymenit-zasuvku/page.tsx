import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak vyměnit zásuvku sám – bezpečný postup krok za krokem 2026",
  description: "Výměna elektrické zásuvky svépomocí: vypnutí jističe, odpojení, zapojení nové zásuvky. Bezpečný postup pro laiky bez elektrikáře.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-vymenit-zasuvku" },
  openGraph: { title: "Jak vyměnit zásuvku sám 2026", description: "Výměna elektrické zásuvky svépomocí – bezpečný postup krok za krokem.", url: "https://www.domovniguru.cz/blog/jak-vymenit-zasuvku", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-15T08:00:00Z", modifiedTime: "2026-04-15T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak vyměnit zásuvku sám 2026", description: "Výměna elektrické zásuvky svépomocí – bezpečný postup krok za krokem." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/jak-vymenit-zasuvku#article",
    "headline": "Jak vyměnit zásuvku sám – bezpečný postup krok za krokem 2026",
    "datePublished": "2026-04-15T08:00:00Z",
    "dateModified": "2026-04-15T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak vyměnit zásuvku", "výměna elektrické zásuvky", "zásuvka nefunguje", "jak zapojit zásuvku", "výměna zásuvky bez elektrikáře", "zapojení L N PE"]
  }]
};

const RELATED = [
  { title: "Jak vyměnit vypínač světla", href: "/blog/jak-vymenit-vypinac", read: "4 min" },
  { title: "Co dělat když nejde proud v části bytu", href: "/blog/nejde-proud-cast-bytu", read: "5 min" },
  { title: "Jak nainstalovat stmívač světla", href: "/blog/instalovat-stmivac", read: "6 min" },
  { title: "Jak fungují pojistky a jak je vyměnit", href: "/blog/jak-funguji-pojistky", read: "5 min" },
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
              <span>Jak vyměnit zásuvku</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">⚡ Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak vyměnit zásuvku sám – bezpečný postup</h1>
              <p className="article-lead">Zásuvka přestala fungovat nebo chceš vyměnit starý hnědý plast za moderní bílý rámeček? Výměna zásuvky je jednoduchá práce která trvá 20 minut — ale musíš dodržet bezpečnostní postup. Tady je jak na to.</p>
              <div className="article-meta-row"><span>Aktualizováno: 15. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/jak-vymenit-zasuvku" title="Jak vyměnit zásuvku sám – bezpečný postup krok za krokem 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 195" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="195" fill="#f8f6f2"/>

                {/* Schéma zapojení zásuvky */}
                <g transform="translate(30,20)">
                  <rect x="0" y="0" width="200" height="155" rx="8" fill="#fff" stroke="#e0d8d0" strokeWidth="1.2"/>
                  <text x="100" y="18" textAnchor="middle" fontSize="9" fill="#6a6050" fontWeight="700">SCHÉMA ZAPOJENÍ</text>

                  {/* Zásuvka kresba */}
                  <rect x="55" y="25" width="90" height="90" rx="8" fill="#f0ece8" stroke="#c8c0b8" strokeWidth="1.5"/>
                  {/* Otvory zásuvky */}
                  <rect x="72" y="50" width="8" height="18" rx="3" fill="#2a2a30"/>
                  <rect x="100" y="50" width="8" height="18" rx="3" fill="#2a2a30"/>
                  <circle cx="100" cy="85" r="5" fill="#2a2a30"/>

                  {/* Vodiče */}
                  <line x1="76" y1="115" x2="76" y2="140" stroke="#e07040" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="104" y1="115" x2="104" y2="140" stroke="#4a90d9" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="100" y1="115" x2="100" y2="155" stroke="#5a9e6f" strokeWidth="3" strokeLinecap="round"/>

                  {/* Popisky */}
                  <text x="62" y="150" fontSize="8" fill="#e07040" fontWeight="700">L</text>
                  <text x="109" y="150" fontSize="8" fill="#4a90d9" fontWeight="700">N</text>
                  <text x="86" y="155" fontSize="7" fill="#5a9e6f" fontWeight="700">PE</text>

                  <text x="62" y="160" fontSize="7" fill="#e07040">fáze</text>
                  <text x="106" y="160" fontSize="7" fill="#4a90d9">nula</text>
                </g>

                {/* Postup */}
                <g transform="translate(248,15)">
                  <rect x="0" y="0" width="280" height="162" rx="8" fill="#fff" stroke="#e0d8d0" strokeWidth="1"/>
                  <text x="140" y="18" textAnchor="middle" fontSize="9" fill="#6a6050" fontWeight="700">POSTUP VÝMĚNY</text>
                  {[
                    { n:"1", text:"Vypni jistič v rozvaděči", color:"#e07a5f" },
                    { n:"2", text:"Ověř fázovou tužkou – není napětí", color:"#f59e0b" },
                    { n:"3", text:"Sundej rámeček a vyšroubuj zásuvku", color:"#4a90d9" },
                    { n:"4", text:"Nafotografuj zapojení vodičů", color:"#9b6fd4" },
                    { n:"5", text:"Odpoj vodiče ze starých svorek", color:"#5a9e6f" },
                    { n:"6", text:"Zapoj do nové zásuvky (L, N, PE)", color:"#5a9e6f" },
                    { n:"7", text:"Vlož do krabice, přišroubuj, otestuj", color:"#4a90d9" },
                  ].map(({n, text, color}, i) => (
                    <g key={i} transform={`translate(12, ${25+i*19})`}>
                      <circle cx="10" cy="8" r="8" fill={color} opacity="0.15"/>
                      <text x="10" y="12" textAnchor="middle" fontSize="8.5" fill={color} fontWeight="700">{n}</text>
                      <text x="25" y="12" fontSize="9" fill="#2a2a28" fontWeight="500">{text}</text>
                    </g>
                  ))}
                </g>

                {/* Barvy vodičů */}
                <g transform="translate(546,15)">
                  <rect x="0" y="0" width="194" height="162" rx="8" fill="#fef9f0" stroke="#fcd34d" strokeWidth="1.2"/>
                  <text x="97" y="18" textAnchor="middle" fontSize="9" fill="#d97706" fontWeight="700">⚠️ BARVY VODIČŮ</text>
                  {[
                    { color:"#e07040", label:"Hnědý / černý", desc:"L = fáze (ŽIVÝ!)" },
                    { color:"#4a90d9", label:"Modrý", desc:"N = nula" },
                    { color:"#5a9e6f", label:"Žlutozelený", desc:"PE = zemnění" },
                    { color:"#808080", label:"Starší instalace", desc:"barvy se liší!" },
                  ].map(({color, label, desc}, i) => (
                    <g key={i} transform={`translate(12, ${28+i*28})`}>
                      <rect x="0" y="0" width="16" height="16" rx="3" fill={color}/>
                      <text x="22" y="10" fontSize="9" fill="#2a2a28" fontWeight="600">{label}</text>
                      <text x="22" y="20" fontSize="8" fill="#8a8070">{desc}</text>
                    </g>
                  ))}
                  <rect x="8" y="142" width="178" height="14" rx="4" fill="#e07a5f" opacity="0.1"/>
                  <text x="97" y="152" textAnchor="middle" fontSize="8" fill="#c05030" fontWeight="600">Vždy ověřit fázovou tužkou!</text>
                </g>

                <rect y="178" width="760" height="17" fill="#fef9f0" opacity="0.5"/>
                <text x="380" y="190" textAnchor="middle" fontSize="8" fill="#92400e" fontWeight="600" letterSpacing="0.06em">⚡ VŽDY VYPNI JISTIČ · OVĚŘ FÁZOVOU TUŽKOU · NAFOTOGRAFUJ PŘED ODPOJENÍM</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#co-potrebujes">Co potřebuješ</a></li>
                <li><a href="#bezpecnost">Bezpečnost – nejdůležitější krok</a></li>
                <li><a href="#postup">Postup výměny krok za krokem</a></li>
                <li><a href="#zapojeni">Zapojení vodičů L, N, PE</a></li>
                <li><a href="#typy">Typy zásuvek – co koupit</a></li>
                <li><a href="#kdy-elektrikar">Kdy volat elektrikáře</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="co-potrebujes">
              <h2>Co potřebuješ na výměnu zásuvky</h2>
              <ul>
                <li><strong>Křížový a plochý šroubovák</strong> — pro demontáž rámečku a svorek</li>
                <li><strong>Fázová tužka</strong> (20–80 Kč) — nutnost pro ověření absence napětí</li>
                <li><strong>Nová zásuvka</strong> — stejný typ (jednonásobná, dvojnásobná, s uzemněním)</li>
                <li><strong>Telefon na focení</strong> — nafotografuj původní zapojení</li>
                <li><strong>Případně kleště a odizolovač</strong> — pokud je potřeba zkrátit vodiče</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Při nákupu nové zásuvky vezmi starou do obchodu nebo zjisti značku a sérii — většina výrobců (ABB, Schneider, Legrand, OEZ) má více sérií a rámeček musí sedět na stejnou krabici.</div>
            </section>

            <section id="bezpecnost">
              <h2>Bezpečnost – nejdůležitější krok</h2>
              <p>Práce na elektroinstalaci bez vypnutého jističe je smrtelně nebezpečná. <strong>Nikdy nepracuj pod napětím</strong> — ani na "chvilku" a ani pokud si myslíš že víš co děláš.</p>
              <ul>
                <li><strong>Krok 1 — Vypni jistič:</strong> V rozvaděči vypni jistič pro daný okruh. Nevíš který? Zapoj lampičku do zásuvky a vypínej jističe dokud nezhasne.</li>
                <li><strong>Krok 2 — Zajisti jistič:</strong> Přilep štítek nebo zablokuj jistič aby ho někdo jiný nezapnul.</li>
                <li><strong>Krok 3 — Ověř fázovou tužkou:</strong> Přilož fázovou tužku do obou otvorů zásuvky. Nesmí svítit — pak teprve začni pracovat.</li>
              </ul>
              <div className="article-tip"><strong>⚠️ Pozor:</strong> Fázová tužka svítí jen na fázový vodič (L). Nulový vodič (N) nezjistí — proto vždy vypni jistič, nespoléhej jen na tužku.</div>
            </section>

            <section id="postup">
              <h2>Postup výměny krok za krokem</h2>
              <ul>
                <li><strong>Krok 1 — Sundej rámeček:</strong> Většina rámečků se sundá rukou nebo lehkým zatlačením plochého šroubováku. Pak odšroubuj dva šrouby které drží zásuvku v krabici.</li>
                <li><strong>Krok 2 — Vytáhni zásuvku z krabice:</strong> Opatrně vytáhni zásuvku — vodiče jsou krátké, netahej silou.</li>
                <li><strong>Krok 3 — Nafotografuj zapojení:</strong> Než odpojíš jediný vodič, nafotografuj zapojení ze dvou stran. Tato fotka tě zachrání pokud zapomeneš.</li>
                <li><strong>Krok 4 — Odpoj vodiče:</strong> Uvolni svorky šroubovákem a vytiáhni vodiče. Pokud jsou příliš krátké nebo poškozené, zavolej elektrikáře.</li>
                <li><strong>Krok 5 — Zapoj novou zásuvku:</strong> Podle fotky zapojs vodiče do nové zásuvky. Svorky dotáhni — uvolněný kontakt je nebezpečný.</li>
                <li><strong>Krok 6 — Vlož do krabice a přišroubuj:</strong> Vlož zásuvku zpět, přišroubuj šrouby. Netlač silou — pokud nesedí, zkontroluj zda vodiče nepřekáží.</li>
                <li><strong>Krok 7 — Zapni jistič a otestuj:</strong> Zapni jistič a ověř funkci zásuvky — zastrč nabíječku nebo lampičku.</li>
              </ul>
            </section>

            <section id="zapojeni">
              <h2>Zapojení vodičů L, N, PE</h2>
              <p>Moderní zásuvka má tři svorky — fáze (L), nula (N) a zemnění (PE). Správné zapojení je klíčové pro bezpečnost.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Svorka</th><th>Barva vodiče</th><th>Funkce</th><th>Poznámka</th></tr></thead>
                  <tbody>
                    <tr><td><strong>L (fáze)</strong></td><td>Hnědý nebo černý</td><td>Živý vodič — napětí 230V</td><td>Fázová tužka svítí</td></tr>
                    <tr><td><strong>N (nula)</strong></td><td>Modrý</td><td>Zpětný vodič</td><td>Fázová tužka nesvítí</td></tr>
                    <tr><td><strong>PE (zemnění)</strong></td><td>Žlutozelený</td><td>Ochranné zemnění</td><td>Připojit do kolíku uprostřed</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>⚠️ Starší instalace:</strong> Domy starší 30+ let mohou mít jiné barevné označení vodičů nebo vůbec žádné zemnění (PE). Pokud narazíš na neznámé barvy nebo jen dva vodiče místo tří, zavolej elektrikáře.</div>
            </section>

            <section id="typy">
              <h2>Typy zásuvek – co koupit</h2>
              <ul>
                <li><strong>Standardní jednonásobná (typ E):</strong> Nejběžnější — kulatý kolík uprostřed pro zemnění. Cena 50–200 Kč.</li>
                <li><strong>Dvojnásobná:</strong> Dvě zásuvky v jednom rámečku. Cena 80–300 Kč. Pozor — potřebuješ dvojitou krabici nebo speciální rámeček.</li>
                <li><strong>S USB:</strong> Zásuvka s integrovanými USB porty. Cena 200–600 Kč. Praktická na nočním stolku nebo u pracovního stolu.</li>
                <li><strong>Venkovní (IP44/IP55):</strong> Odolná vůči stříkající vodě. Pro terasu, garáž nebo koupelnu. Cena 100–400 Kč.</li>
                <li><strong>Dětská pojistka:</strong> Otvory zásuvky jsou blokované — dítě nemůže zasunout předmět. Doporučeno do dětských pokojů.</li>
              </ul>
            </section>

            <section id="kdy-elektrikar">
              <h2>Kdy volat elektrikáře</h2>
              <ul>
                <li>Vodiče jsou příliš krátké — nelze bezpečně připojit ke svorce</li>
                <li>Izolace vodičů je poprasknutá nebo spálená</li>
                <li>V krabici je více vodičů než očekáváš</li>
                <li>Barvy vodičů neodpovídají standardu (starší instalace)</li>
                <li>Chceš přidat novou zásuvku tam kde žádná není — to vyžaduje vedení nového kabelu</li>
                <li>Zásuvka je v koupelně nebo v zóně u umyvadla (zóna 1 a 2 vyžadují speciální instalaci)</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Je výměna zásuvky legální bez elektrikáře?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Výměna zásuvky za stejný typ na stejném místě je považována za drobnou údržbu — zákonně ji může provést laik. Nová elektroinstalace (nové vedení, nové okruhy) musí být provedena elektrikářem a zrevidována. Po jakékoliv větší úpravě je nutná revize elektroinstalace.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Proč zásuvka nefunguje i když jistič nevypadl?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Možné příčiny: (1) Uvolněný vodič ve svorce zásuvky — dotáhni svorky. (2) Vadná zásuvka — mechanické opotřebení kontaktů. (3) Přerušený vodič za krabicí — nutný elektrikář. (4) Chránič (FI relé) místo jističe — zkontroluj rozvaděč.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Mohu vyměnit zásuvku bez zemnění za uzemněnou?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Pokud v krabici je žlutozelený vodič (PE), ano — zapojs ho do zemnicího kolíku nové zásuvky. Pokud PE vodič chybí (starší instalace bez zemnění), nelze bezpečně přidat zemnění bez nového vedení PE vodiče od rozvaděče — to je práce pro elektrikáře.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak zjistím který jistič ovládá danou zásuvku?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Zapoj lampičku nebo nabíječku do zásuvky a postupně vypínej jističe v rozvaděči dokud nezhasne. Pak přilep na jistič štítek s popisem. Pokud je rozvaděč nepopsaný, je ideální čas celý ho zmapovat — zaznameneš si co ovládá každý jistič.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/jak-vymenit-zasuvku" title="Jak vyměnit zásuvku sám – bezpečný postup krok za krokem 2026" />

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
                <li><a href="#co-potrebujes">Co potřebuješ</a></li>
                <li><a href="#bezpecnost">Bezpečnost</a></li>
                <li><a href="#postup">Postup výměny</a></li>
                <li><a href="#zapojeni">Zapojení L, N, PE</a></li>
                <li><a href="#typy">Typy zásuvek</a></li>
                <li><a href="#kdy-elektrikar">Kdy elektrikář</a></li>
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
        .article-body h3{font-family:var(--font-sans);font-size:16px;font-weight:600;margin-top:24px;margin-bottom:10px;color:var(--text)}
        .article-body p{font-size:16px;line-height:1.75;color:#2a2a28;font-weight:300;margin-bottom:14px}
        .article-body ul,.article-body ol{padding-left:22px;margin-bottom:16px;display:flex;flex-direction:column;gap:8px}
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
