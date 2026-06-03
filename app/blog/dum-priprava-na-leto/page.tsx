import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Příprava domu na léto – co zkontrolovat na jaře 2026",
  description: "Co zkontrolovat a udělat na jaře aby byl dům připravený na léto. Klimatizace, zahrada, fasáda, střecha, okna – kompletní jarní checklist pro dům i byt.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/dum-priprava-na-leto" },
  openGraph: { title: "Příprava domu na léto 2026", description: "Jarní checklist – co zkontrolovat aby byl dům připravený na léto.", url: "https://www.domovniguru.cz/blog/dum-priprava-na-leto", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-22T08:00:00Z", modifiedTime: "2026-04-22T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "DomovniGuru" }] },
  twitter: { card: "summary_large_image", title: "Příprava domu na léto 2026", description: "Jarní checklist pro dům – klimatizace, zahrada, střecha a fasáda." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/dum-priprava-na-leto#article",
    "headline": "Příprava domu na léto – co zkontrolovat na jaře 2026",
    "datePublished": "2026-04-22T08:00:00Z",
    "dateModified": "2026-04-22T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["příprava domu na léto", "jarní checklist dům", "co zkontrolovat na jaře dům", "jarní údržba domu", "příprava domu jaro"]
  }]
};

const RELATED = [
  { title: "Příprava domu na zimu", href: "/blog/priprava-domu-na-zimu", read: "10 min" },
  { title: "Jak vyčistit okapy", href: "/blog/jak-vycistit-okapy", read: "5 min" },
  { title: "Jak připravit zahradu na jaro", href: "/blog/jarni-zahrada", read: "7 min" },
  { title: "Jak čistit filtr klimatizace", href: "/blog/cistit-filtr-klimatizace", read: "4 min" },
];

const CHECKLIST = [
  { area:"🏠 Střecha a okapy", items:["Zkontroluj střechu po zimě – zlomené nebo chybějící tašky", "Vyčisti okapy a svody od listí a nečistot", "Zkontroluj hromosvod a anténu"] },
  { area:"🪟 Okna a dveře", items:["Umyj okna zevnitř i zvenku", "Zkontroluj a doplň silikonové těsnění u okenních rámů", "Promaž dveřní a okenní závěsy a kování"] },
  { area:"❄️ Klimatizace", items:["Vyčisti nebo vyměň filtr klimatizace", "Zkontroluj jestli klimatizace správně chladí", "Vyčisti kondenzační jednotku venku od listí a nečistot"] },
  { area:"🌿 Zahrada a terasa", items:["Ošetři zahradní nábytek olejem nebo lazurou", "Zkontroluj závlahu a hadice", "Nastav hnojení a mulčování záhonů"] },
  { area:"🔧 Technické kontroly", items:["Zkontroluj stav fasády – praskliny a loupání", "Zkontroluj komín před letní kontrolou kominíka", "Zkontroluj stav terasy a dřevěných prvků"] },
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
              <Link href="/blog/kategorie/sezonni-udrzba">Sezónní údržba</Link><span className="breadcrumb-sep">/</span>
              <span>Příprava domu na léto</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">🍂 Sezónní údržba</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Příprava domu na léto – co zkontrolovat na jaře</h1>
              <p className="article-lead">Jaro je ideální čas na revizi domu po zimě a přípravu na letní provoz. Pár hodin dnes ušetří tisíce korun na opravách v létě nebo podzim.</p>
              <div className="article-meta-row"><span>Aktualizováno: 22. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/dum-priprava-na-leto" title="Příprava domu na léto – co zkontrolovat na jaře 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 175" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="175" fill="#f0f8ec"/>
                <text x="380" y="22" textAnchor="middle" fontSize="10" fill="#3a7e4f" fontWeight="700" letterSpacing="0.04em">JARNÍ CHECKLIST DOMU – DUBEN / KVĚTEN</text>

                {[
                  { x:20, month:"DUBEN", color:"#4a90d9", items:["✓ Vyčistit okapy","✓ Zkontrolovat střechu","✓ Umýt okna","✓ Spustit závlahu","✓ Ošetřit nábytek"] },
                  { x:255, month:"KVĚTEN", color:"#5a9e6f", items:["✓ Vyčistit filtr klimatizace","✓ Zkontrolovat fasádu","✓ Hnojit zahradu","✓ Promazat závěsy","✓ Zkontrolovat terasu"] },
                  { x:490, month:"ČERVEN", color:"#f59e0b", items:["✓ Nastavit závlahu na léto","✓ Revize komína","✓ Mulčovat záhony","✓ Spustit klimatizaci","✓ Zkontrolovat markýzy"] },
                ].map(({x, month, color, items}) => (
                  <g key={x} transform={`translate(${x}, 28)`}>
                    <rect x="0" y="0" width="215" height="130" rx="8" fill="#fff" stroke={color} strokeWidth="1.2"/>
                    <rect x="0" y="0" width="215" height="30" rx="8" fill={color} opacity="0.15"/>
                    <text x="107" y="20" textAnchor="middle" fontSize="11" fill={color} fontWeight="700">{month}</text>
                    {items.map((item, i) => <text key={i} x="14" y={44+i*17} fontSize="9" fill="#2a2a28">{item}</text>)}
                  </g>
                ))}

                <rect y="158" width="760" height="17" fill="#d8f0d0" opacity="0.5"/>
                <text x="380" y="170" textAnchor="middle" fontSize="8" fill="#3a7e4f" fontWeight="600" letterSpacing="0.06em">🌸 JARO = NEJLEPŠÍ ČAS NA OPRAVY · LEVNĚJŠÍ ŘEMESLNÍCI · SUCHÝ A TEPLÝ DEN IDEÁLNÍ</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#strecha">Střecha a okapy</a></li>
                <li><a href="#okna">Okna, dveře a těsnění</a></li>
                <li><a href="#klima">Klimatizace</a></li>
                <li><a href="#zahrada">Zahrada a terasa</a></li>
                <li><a href="#technika">Technické kontroly</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="strecha">
              <h2>Střecha a okapy – priorita číslo jedna</h2>
              <p>Zima je nejnáročnější pro střechu — mráz, sníh a led způsobují posuny tašek, popraskání tmelu a uvolnění okapů. Jarní kontrola odhalí problémy dříve než přijdou letní bouřky.</p>
              <ul>
                <li><strong>Vizuální kontrola střechy:</strong> Z bezpečné vzdálenosti (dalekohledy nebo z okna vyššího podlaží) zkontroluj jestli nejsou tašky zlomené, posunuté nebo chybí. Nebo požádej kominíka při jarní kontrole komína.</li>
                <li><strong>Okapy a svody:</strong> Vyčisti listí a nečistoty z okapů (viz <Link href="/blog/jak-vycistit-okapy" style={{color:"#5a9e6f",fontWeight:600}}>Jak vyčistit okapy →</Link>). Zkontroluj jestli okapy nevisí nebo nejsou utlačeny zimou.</li>
                <li><strong>Hromosvod:</strong> Vizuálně zkontroluj jestli hromosvod není přerušen nebo uvolněn od zdi. Každé 5 let revize odborníkem.</li>
              </ul>
            </section>

            <section id="okna">
              <h2>Okna, dveře a těsnění</h2>
              <ul>
                <li><strong>Umytí oken:</strong> Jarní mytí oken po zimním smogu — čistá okna propouštějí více světla. Pro vyšší poschodí profesionální mytí oken 50–150 Kč/okno.</li>
                <li><strong>Těsnění oken:</strong> Zkontroluj silikonové těsnění kolem rámů — prasknuté nebo odpadlé těsnění způsobuje průvan a průnik vlhkosti. Starý silikon seřízni, povrch odmastit, nanést nový silikon.</li>
                <li><strong>Kování a závěsy:</strong> Promaž pohyblivé části oken a dveří WD-40 nebo speciálním mazivem. Tuhost nebo drhnoucí kování = brzy porucha.</li>
                <li><strong>Venkovní žaluzie a markýzy:</strong> Zkontroluj a vyčisti žaluzie po zimě. Zkontroluj mechanismus markýz.</li>
              </ul>
            </section>

            <section id="klima">
              <h2>Klimatizace – připrav ji před létem</h2>
              <ul>
                <li><strong>Vyčisti nebo vyměň filtr:</strong> Zanesený filtr sníží výkon klimatizace o 15–25 % a zvýší spotřebu elektřiny. Vyčistit před každou sezónou. Viz <Link href="/blog/cistit-filtr-klimatizace" style={{color:"#5a9e6f",fontWeight:600}}>Jak čistit filtr klimatizace →</Link></li>
                <li><strong>Otestuj funkci:</strong> Zapni klimatizaci a ověř jestli správně chladí. Pokud nechladí nebo vydává podivné zvuky — servis před létem je levnější než servis v nejvyšší sezóně (červenec/srpen).</li>
                <li><strong>Venkovní jednotka:</strong> Vyčisti venkovní jednotku od listí a nečistot. Ořež vegetaci kolem jednotky — min. 30 cm volného prostoru ze všech stran.</li>
              </ul>
            </section>

            <section id="zahrada">
              <h2>Zahrada a terasa – jarní start</h2>
              <ul>
                <li><strong>Zahradní nábytek:</strong> Vynes ze skladu, vyčisti a ošetři. Dřevěný nábytek naolejovat nebo nalazurovat před sezónou.</li>
                <li><strong>Závlaha:</strong> Zkontroluj hadice a závlahu po zimě — mráz může způsobit praskliny. Spusť a zkontroluj každý postřikovač.</li>
                <li><strong>Terasa a dřevěné prvky:</strong> Vyčisti tlakovou vodou a přebrousit hrany. Naolejovat nebo přelazurovat před sezónou.</li>
                <li><strong>Zahrada:</strong> Vyčistit záhony od zimního listí, přihnojit, mulčovat. Viz <Link href="/blog/jarni-zahrada" style={{color:"#5a9e6f",fontWeight:600}}>Jak připravit zahradu na jaro →</Link></li>
              </ul>
            </section>

            <section id="technika">
              <h2>Technické kontroly</h2>
              <ul>
                <li><strong>Fasáda:</strong> Zkontroluj jestli zimní mráz nezpůsobil praskliny nebo odlupování nátěru. Malé praskliny opravit tmelem. Větší praskliny nebo odpadávající omítka — konzultovat se statikem.</li>
                <li><strong>Komín:</strong> Naplánuj jarní čištění komína kominíkem — po topné sezóně je komín naplněný sazemi. Kominík v dubnu/květnu má volnější termíny než v říjnu.</li>
                <li><strong>Drenáž a kanalizace:</strong> Zkontroluj jestli jsou přípojky kanalizace a drenáže volné. Letní bouřky testují každou slabinu.</li>
                <li><strong>Sklep a podkroví:</strong> Zkontroluj jestli se za zimu neobjevila vlhkost nebo plíseň. Zvetrání a vysušení podkroví na jaře zabrání problémům v létě.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Jaro je nejlepší čas na opravy fasády, malování venkovních prvků a rekonstrukce — řemeslníci jsou méně vytížení než v létě a podmínky pro práci jsou ideální.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Kdy nejlépe udělat jarní prohlídku domu?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Duben a první polovina května jsou ideální. Počasí je stabilní, řemeslníci méně vytížení a před hlavní sezónou máš čas opravit problémy. Nezačínej v únoru nebo březnu — mráz stále hrozí a barvy a silikony neschnou správně pod 10 °C.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Co udělat s domem před dovolenou v létě?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Uzavři přívod vody (nebo alespoň k pračce a myčce). Vypni bojler nebo nastavit na minimum. Uzavři okna a zatemni žaluzie (zabrání přehřívání). Nastav závlahu zahrady na timer. Požádej souseda o kontrolu. Vytáhni zástrčky nepotřebných spotřebičů. Nezapomeň na klimatizaci — vypni nebo nastav na ekonomický mód.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak ochránit dům před letními bouřkami?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Vyčistit okapy a svody pro volný odtok vody. Zkontrolovat střechu a opravit uvolněné tašky. Prořezat stromy u domu (větev na střeše při bouřce = tisíce korun škody). Zkontrolovat hromosvod. Pojistit si dům pro případ přírodní katastrofy pokud ještě nemáš.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/dum-priprava-na-leto" title="Příprava domu na léto – co zkontrolovat na jaře 2026" />

            <section className="related-section">
              <h2>Související články</h2>
              <div className="related-grid">
                {RELATED.map((r) => (
                  <Link key={r.href} href={r.href} className="card">
                    <div className="card-eyebrow-row"><span>Sezónní údržba</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#strecha">Střecha a okapy</a></li>
                <li><a href="#okna">Okna a dveře</a></li>
                <li><a href="#klima">Klimatizace</a></li>
                <li><a href="#zahrada">Zahrada a terasa</a></li>
                <li><a href="#technika">Technické kontroly</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/sezonni-udrzba" className="sidebar-cat-link">🍂 Sezónní údržba<span>20 článků →</span></Link>
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
