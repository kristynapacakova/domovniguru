import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak se zbavit zápachu po rekonstrukci – rychle a natrvalo 2026",
  description: "Jak odstranit zápach barvy, lepidla, tmelu a laku po rekonstrukci bytu. Efektivní větrání, neutralizátory pachů a jak dlouho zápach vydrží.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/zbavit-byt-zapachu-po-rekonstrukci" },
  openGraph: { title: "Jak se zbavit zápachu po rekonstrukci 2026", description: "Zápach barvy, laku a lepidla – jak rychle a natrvalo vyvětrat byt po rekonstrukci.", url: "https://www.domovniguru.cz/blog/zbavit-byt-zapachu-po-rekonstrukci", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-05-01T08:00:00Z", modifiedTime: "2026-05-01T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20se%20zbavit%20z%C3%A1pachu%20po%20rekonstrukci%20%E2%80%93%20rychle%20a%20natrvalo%202026", width: 1200, height: 630, alt: "Jak se zbavit zápachu po rekonstrukci – rychle a natrvalo 2026" }] },
  twitter: { card: "summary_large_image", title: "Jak se zbavit zápachu po rekonstrukci 2026", description: "Větrání, neutralizátory a jak dlouho zápach po rekonstrukci vydrží." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/zbavit-byt-zapachu-po-rekonstrukci#article",
    "headline": "Jak se zbavit zápachu po rekonstrukci – rychle a natrvalo 2026",
    "datePublished": "2026-05-01T08:00:00Z",
    "dateModified": "2026-05-01T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["zápach po rekonstrukci", "jak odstranit zápach barvy", "větrání po malování", "zápach laku podlaha", "jak se zbavit zápachu po rekonstrukci"]
  }]
};

const RELATED = [
  { title: "Jak správně větrat byt", href: "/blog/spravne-vetrat-byt", read: "4 min" },
  { title: "Jak se zbavit vlhkosti v bytě", href: "/blog/zbavit-se-vlhkosti-v-byte", read: "7 min" },
  { title: "Jak malovat zeď – kompletní průvodce", href: "/blog/jak-malovat-zed", read: "5 min" },
  { title: "Jak odhalit skryté vady bytu", href: "/blog/odhalit-skryte-vady-bytu", read: "6 min" },
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
              <span>Zápach po rekonstrukci</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏠 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 4 min čtení</span>
              </div>
              <h1 className="article-h1">Jak se zbavit zápachu po rekonstrukci – rychle a natrvalo</h1>
              <p className="article-lead">Čerstvá barva, lak na podlahu nebo lepidlo na dlaždice — každý z nich vydává těkavé látky (VOC) které mohou přetrvávat dny až týdny. Správné větrání a pár triků věc výrazně urychlí.</p>
              <div className="article-meta-row"><span>Aktualizováno: 1. května 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/zbavit-byt-zapachu-po-rekonstrukci" title="Jak se zbavit zápachu po rekonstrukci – rychle a natrvalo 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="160" fill="#f4f8fc"/>
                <text x="380" y="22" textAnchor="middle" fontSize="10" fill="#4a6080" fontWeight="700" letterSpacing="0.04em">HOW LONG DOES THE SMELL LAST – A GUIDE</text>
                <text x="380" y="22" textAnchor="middle" fontSize="10" fill="#4a6080" fontWeight="700" letterSpacing="0.04em">JAK DLOUHO ZÁPACH VYDRŽÍ – PŘEHLED</text>
                {[
                  { x:20, material:"Akrylátová barva", time:"1–3 dny", tip:"Větrání urychlí", color:"#5a9e6f" },
                  { x:170, material:"Olejová barva / lak", time:"1–2 týdny", tip:"Aktivní uhlí pomáhá", color:"#f59e0b" },
                  { x:320, material:"Lak na podlahu (PU)", time:"3–7 dní", tip:"Intenzivní větrání", color:"#4a90d9" },
                  { x:470, material:"Epoxidové lepidlo", time:"2–5 dní", tip:"Otevřená okna 24h", color:"#9b6fd4" },
                  { x:620, material:"PU pěna / silikon", time:"1–3 dny", tip:"Po vytvrdnutí mizí", color:"#e07040" },
                ].map(({x, material, time, tip, color}) => (
                  <g key={x} transform={`translate(${x}, 30)`}>
                    <rect x="0" y="0" width="130" height="110" rx="8" fill="#fff" stroke={color} strokeWidth="1.2"/>
                    <rect x="0" y="0" width="130" height="5" rx="4" fill={color} opacity="0.6"/>
                    <text x="65" y="24" textAnchor="middle" fontSize="9" fill="#2a2a28" fontWeight="600">{material}</text>
                    <line x1="10" y1="30" x2="120" y2="30" stroke={color} strokeWidth="0.5" opacity="0.4"/>
                    <text x="65" y="52" textAnchor="middle" fontSize="18" fill={color} fontWeight="700">{time.split('–')[0]}</text>
                    <text x="65" y="66" textAnchor="middle" fontSize="9" fill={color}>–{time.split('–')[1]}</text>
                    <rect x="8" y="78" width="114" height="24" rx="4" fill={color} opacity="0.08"/>
                    <text x="65" y="93" textAnchor="middle" fontSize="8" fill={color}>💡 {tip}</text>
                  </g>
                ))}
                <rect y="143" width="760" height="17" fill="#e0eaf4" opacity="0.5"/>
                <text x="380" y="155" textAnchor="middle" fontSize="8" fill="#3a6a8a" fontWeight="600" letterSpacing="0.06em">🌬️ PRŮVAN = NEJÚČINNĚJŠÍ VĚTRÁNÍ · AKTIVNÍ UHLÍ ABSORBUJE VOC · ROSTLINY POMÁHAJÍ</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#proc">Proč zápach vzniká</a></li>
                <li><a href="#vetrani">Jak správně větrat</a></li>
                <li><a href="#neutralizace">Neutralizátory a absorbéry zápachu</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="proc">
              <h2>Proč zápach vzniká a jak dlouho vydrží</h2>
              <p>Stavební materiály obsahují těkavé organické sloučeniny (VOC — Volatile Organic Compounds) které se uvolňují při schnutí. Intenzita a délka závisí na typu materiálu, teplotě a větrání.</p>
              <ul>
                <li><strong>Akrylátové barvy (vodou ředitelné):</strong> Nejméně agresivní. Intenzivní zápach 24–48 hodin, pak rychle mizí. Při dobrém větrání byt obyvatelný za 1–2 dny.</li>
                <li><strong>Olejové barvy a laky:</strong> Obsahují organická rozpouštědla. Zápach intenzivní 3–7 dní, slabý zápach může přetrvávat 2–3 týdny.</li>
                <li><strong>Lak na podlahu (PU nebo olejový):</strong> Silný zápach 2–5 dní. V místnosti nelze spát min. 24–48 hodin po aplikaci poslední vrstvy.</li>
                <li><strong>Lepidlo na dlaždice nebo vinyl:</strong> Závisí na typu — disperzní lepidla 1–3 dny, reaktivní (epoxidová) 3–7 dní.</li>
              </ul>
              <div className="article-tip"><strong>⚠️ Zdravotní riziko:</strong> VOC z laků a olejových barev mohou způsobit bolest hlavy, nevolnost a podráždění dýchacích cest. Při intenzivním zápachu byt neopouštěj bez větrání — vstupuj jen na krátkou dobu.</div>
            </section>

            <section id="vetrani">
              <h2>Jak správně větrat po rekonstrukci</h2>
              <ul>
                <li><strong>Průvan je nejúčinnější:</strong> Otevři okna na protilehlých stranách bytu (nebo okno + dveře na chodbu). Průvan unese VOC rychleji než jen otevřené jedno okno.</li>
                <li><strong>Ventilátor do okna:</strong> Postav ventilátor do okna tak aby foukal ven z bytu (výfuk). Nasává vzduch z bytu a vyhání ho ven. Účinnější než průvan při bezvětří.</li>
                <li><strong>Teplota urychluje odpaření:</strong> Teplo urychluje vypařování VOC. Vytop byt na 22–25 °C a intenzivně větrání — kombinace tepla a proudění vzduchu zkrátí dobu zápachu na polovinu.</li>
                <li><strong>Větrání v noci:</strong> V létě větrání v noci kdy je chladněji — nižší teplota snižuje odpařování VOC ale čerstvý vzduch pomáhá. Kompromis záleží na ročním období.</li>
                <li><strong>Nekombinovat s vlhkostí:</strong> Zavři dveře koupelny při větrání — vlhký vzduch zpomaluje schnutí materiálů a prodlužuje zápach.</li>
              </ul>
            </section>

            <section id="neutralizace">
              <h2>Neutralizátory a absorbéry zápachu</h2>
              <ul>
                <li><strong>Aktivní uhlí:</strong> Nejúčinnější absorbér VOC. Misky s aktivním uhlím (nebo aktivní uhlí v pytlíčcích) rozmísti po místnosti. Účinnost: výborná. Cena: 50–200 Kč. Vyměňovat každých 2–4 týdny.</li>
                <li><strong>Jedlá soda (bikarbonát):</strong> Absorbuje zápachy. Misky s jedlou sodou v místnosti. Méně účinná než aktivní uhlí ale levná a dostupná. Měnit každý týden.</li>
                <li><strong>Ocet:</strong> Misky s bílým octem absorbují zápach z barev. Po 24 hodinách vyměnit. Pozor — ocet sám o sobě intenzivně voní, ale zápach barvy absorbuje a pak mizí i on.</li>
                <li><strong>Pokojové rostliny:</strong> Chlorofytum, pothos, sansevieria nebo ficus filtrují VOC ze vzduchu. Dlouhodobé řešení — efekt se projeví po týdnech. Dobrý doplněk k větrání.</li>
                <li><strong>Čeho se vyhnout:</strong> Vonné svíčky nebo osvěžovače vzduchu zápach nezastraňují — jen ho maskují. Po vyvanění osvěžovače je zápach barvy zpět.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Jak dlouho musím čekat po malování než se nastěhovat?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Akrylátová barva: 24–48 hodin intenzivního větrání, pak bezpečné. Olejová barva nebo lak: 3–7 dní větrání. Citlivé skupiny (děti, těhotné, alergici): počkat déle nebo zvolit barvy s označením "Nízké VOC" nebo "VOC-free" — tyto barvy jsou výrazně méně problematické.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Je zápach po rekonstrukci zdraví nebezpečný?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Krátkodobá expozice VOC z běžných stavebních materiálů způsobuje bolest hlavy, nevolnost a podráždění sliznic. Není to akutně nebezpečné pro zdravé dospělé při krátkém pobytu. Problematické je spání v místnosti s intenzivním zápachem — zejména pro děti, těhotné nebo osoby s dýchacími potížemi. Dodržuj doporučené doby větrání od výrobce materiálu.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Proč zápach přetrvává i po týdnech větrání?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Možné příčiny: olejová barva nebo lak s vysokým obsahem VOC (dlouhá doba odpaření), špatné větrání (větrání jen jedním oknem bez průvanu), nízká teplota v bytě (chlad zpomaluje odpařování). Řešení: kombinace průvanu + tepla + aktivního uhlí. Pokud zápach přetrvává déle než 4 týdny u akrylátových barev, může jít o problém s podkladem nebo vlhkostí.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/zbavit-byt-zapachu-po-rekonstrukci" title="Jak se zbavit zápachu po rekonstrukci – rychle a natrvalo 2026" />

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
                <li><a href="#proc">Proč zápach vzniká</a></li>
                <li><a href="#vetrani">Jak správně větrat</a></li>
                <li><a href="#neutralizace">Neutralizátory zápachu</a></li>
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
