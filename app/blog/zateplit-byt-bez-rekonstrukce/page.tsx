import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak zateplit byt bez rekonstrukce – levná řešení 2026",
  description: "Těsnění oken, těžké závěsy, reflexní fólie za radiátor a prahové lišty. Jak zateplit starý byt bez bourání a bez velkých investic – úspora až 20 % na vytápění.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/zateplit-byt-bez-rekonstrukce" },
  openGraph: { title: "Jak zateplit byt bez rekonstrukce 2026", description: "Těsnění oken, závěsy, reflexní fólie – jak zateplit byt levně bez bourání.", url: "https://www.domovniguru.cz/blog/zateplit-byt-bez-rekonstrukce", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-15T08:00:00Z", modifiedTime: "2026-04-15T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak zateplit byt bez rekonstrukce 2026", description: "Těsnění oken, závěsy, reflexní fólie – jak zateplit byt levně bez bourání." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/zateplit-byt-bez-rekonstrukce#article",
    "headline": "Jak zateplit byt bez rekonstrukce – levná řešení 2026",
    "datePublished": "2026-04-15T08:00:00Z",
    "dateModified": "2026-04-15T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak zateplit byt bez rekonstrukce", "zateplení bytu levně", "těsnění oken", "tepelné ztráty byt", "jak ušetřit na topení byt", "reflexní fólie radiátor"]
  }]
};

const RELATED = [
  { title: "Jak ušetřit na vytápění bez výměny kotle", href: "/blog/usetrit-na-vytapeni", read: "7 min" },
  { title: "Jak správně větrat byt", href: "/blog/spravne-vetrat-byt", read: "6 min" },
  { title: "Příprava domu na zimu – kompletní checklist", href: "/blog/priprava-domu-na-zimu", read: "10 min" },
  { title: "Jak snížit účet za elektřinu doma", href: "/blog/snizit-ucet-za-elektrinu", read: "7 min" },
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
              <span>Zateplení bez rekonstrukce</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏠 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak zateplit byt bez rekonstrukce – levná řešení</h1>
              <p className="article-lead">Nechceš bourat ani utrácet desítky tisíc za zateplení? Existují levná opatření která sníží tepelné ztráty o 15–25 % — bez řemeslníků, bez povolení a většinou za víkend.</p>
              <div className="article-meta-row"><span>Aktualizováno: 15. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/zateplit-byt-bez-rekonstrukce" title="Jak zateplit byt bez rekonstrukce – levná řešení 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 195" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="195" fill="#f0f4f8"/>

                {/* Tepelné ztráty bytu */}
                <g transform="translate(20,15)">
                  <rect x="0" y="0" width="220" height="165" rx="8" fill="#fff" stroke="#d0d8e8" strokeWidth="1.2"/>
                  <text x="110" y="18" textAnchor="middle" fontSize="9" fill="#4a6a8a" fontWeight="700">KDE UNIKÁ TEPLO</text>

                  {/* Dům silueta */}
                  <polygon points="110,30 60,65 160,65" fill="#c8d8e8" stroke="#a8b8c8" strokeWidth="1"/>
                  <rect x="65" y="65" width="90" height="70" fill="#d8e8f0" stroke="#a8b8c8" strokeWidth="1"/>

                  {/* Šipky úniku tepla */}
                  {[
                    { x:110, y:25, label:"Střecha 25%", dir:"up" },
                    { x:155, y:80, label:"Okna 20%", dir:"right" },
                    { x:110, y:140, label:"Podlaha 10%", dir:"down" },
                    { x:65, y:80, label:"Stěny 30%", dir:"left" },
                  ].map(({x,y,label,dir}) => {
                    const arrows: Record<string, {dx:number,dy:number,tx:number,ty:number}> = {
                      up:{dx:0,dy:-25,tx:0,ty:-35},
                      right:{dx:25,dy:0,tx:35,ty:0},
                      down:{dx:0,dy:25,tx:0,ty:38},
                      left:{dx:-25,dy:0,tx:-38,ty:0},
                    };
                    const a = arrows[dir];
                    return (
                      <g key={dir}>
                        <line x1={x} y1={y} x2={x+a.dx} y2={y+a.dy} stroke="#e07040" strokeWidth="2" strokeLinecap="round"/>
                        <text x={x+a.tx} y={y+a.ty+4} textAnchor="middle" fontSize="7" fill="#e07040" fontWeight="600">{label}</text>
                      </g>
                    );
                  })}
                  <text x="110" y="158" textAnchor="middle" fontSize="7.5" fill="#6a8a9a">průvany dveřmi 15 %</text>
                </g>

                {/* Levná opatření */}
                <g transform="translate(258,15)">
                  <rect x="0" y="0" width="480" height="165" rx="8" fill="#fff" stroke="#d0d8e8" strokeWidth="1"/>
                  <text x="240" y="18" textAnchor="middle" fontSize="9" fill="#3a7e4f" fontWeight="700">LEVNÁ OPATŘENÍ BEZ REKONSTRUKCE</text>

                  {[
                    { icon:"🪟", text:"Těsnění oken", price:"50–300 Kč/okno", save:"10–15 %" },
                    { icon:"🪣", text:"Prahová lišta u dveří", price:"100–400 Kč", save:"5–8 %" },
                    { icon:"🪞", text:"Reflexní fólie za radiátor", price:"100–300 Kč", save:"3–7 %" },
                    { icon:"🪟", text:"Těžké závěsy přes noc", price:"500–2000 Kč", save:"10–15 %" },
                    { icon:"🧱", text:"Zateplovací tapeta", price:"200–500 Kč/m²", save:"3–5 %" },
                    { icon:"🔌", text:"Ucpání průchodů trubek", price:"50–200 Kč", save:"2–5 %" },
                  ].map(({icon, text, price, save}, i) => {
                    const col = i < 3 ? 0 : 1;
                    const row = i % 3;
                    return (
                      <g key={i} transform={`translate(${col*238+12}, ${26+row*42})`}>
                        <rect x="0" y="0" width="225" height="36" rx="5" fill="#f0f8f4" stroke="#c8e0d0" strokeWidth="0.8"/>
                        <text x="10" y="22" fontSize="14">{icon}</text>
                        <text x="32" y="16" fontSize="9" fill="#2a3a2a" fontWeight="600">{text}</text>
                        <text x="32" y="27" fontSize="8" fill="#6a8a7a">{price}</text>
                        <text x="190" y="22" textAnchor="middle" fontSize="9" fill="#3a7e4f" fontWeight="700">{save}</text>
                      </g>
                    );
                  })}
                </g>

                <rect y="177" width="760" height="18" fill="#e0f0e8" opacity="0.5"/>
                <text x="380" y="189" textAnchor="middle" fontSize="8" fill="#3a7e4f" fontWeight="600" letterSpacing="0.06em">💡 KOMBINACE VŠECH OPATŘENÍ = ÚSPORA 20–25 % NA VYTÁPĚNÍ BEZ REKONSTRUKCE</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#okna">Těsnění oken – největší přínos</a></li>
                <li><a href="#dvere">Dveře a průvany</a></li>
                <li><a href="#radiator">Reflexní fólie za radiátor</a></li>
                <li><a href="#zavesy">Závěsy a rolety</a></li>
                <li><a href="#dalsi">Další levná opatření</a></li>
                <li><a href="#poradi">V jakém pořadí začít</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="okna">
              <h2>Těsnění oken – největší přínos za nejméně peněz</h2>
              <p>Okna jsou největší slabina každého bytu — přes stará nebo špatně utěsněná okna uniká až 20 % tepla. Těsnění je nejlevnější a nejrychlejší opatření.</p>
              <ul>
                <li><strong>Přepnutí na zimní nastavení kování:</strong> Plastová okna mají letní a zimní přítlak. Otočení excentrického čepu na kování zvýší přítlak rámu — okno lépe těsní. Zdarma, trvá 2 minuty na okno. Viz <Link href="/blog/priprava-domu-na-zimu" style={{color:"#5a9e6f",fontWeight:600}}>Příprava domu na zimu →</Link></li>
                <li><strong>Samolepicí těsnicí páska:</strong> Pěnová nebo silikonová páska na rámy oken a dveří. Cena 50–150 Kč za okno. Vydrží 3–5 let. Nejlevnější řešení pro netěsnící okna.</li>
                <li><strong>Výměna těsnění v rámu:</strong> Pokud je gumové těsnění v rámu okna tvrdé nebo popraskané, vyměň ho. Nové těsnění stojí 100–300 Kč a montáž zvládneš sám.</li>
                <li><strong>Transparentní zateplovací fólie:</strong> Tenká průhledná fólie nalepená na rámeček okna zevnitř — vytváří vzduchovou mezeru. Levná alternativa k výměně oken. Cena 200–500 Kč na okno, montáž 30 minut.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Kde jsou netěsnosti poznáš svíčkou nebo vlhkou rukou — v chladném dni projdi okna a sleduj pohyb plamene. Každý průvan je místo kam dát těsnicí pásku.</div>
            </section>

            <section id="dvere">
              <h2>Dveře a průvany – podceňovaný zdroj ztrát</h2>
              <p>Vstupní dveře a dveře do chodby jsou dalším velkým zdrojem průvanu. Teplý vzduch uniká pod dveřmi a chladný proudí ze schodiště nebo chodby.</p>
              <ul>
                <li><strong>Prahová lišta s těsněním:</strong> Kartáčová nebo gumová lišta přibytá na spodní hranu dveří eliminuje průvan pod dveřmi. Cena 100–400 Kč, montáž 15 minut a šroubovák.</li>
                <li><strong>Těsnicí páska na rám dveří:</strong> Stejný princip jako u oken — pěnová nebo silikonová páska na rám dveří kde dveře dosedají.</li>
                <li><strong>Dveřní roleta nebo závěs:</strong> Těžká látková roleta nebo závěs před vstupními dveřmi nebo dveřmi na nevytápěnou chodbu výrazně snižuje tepelné ztráty.</li>
                <li><strong>Záklopka klíčové dírky:</strong> Překvapivě velký zdroj průvanu — krytka stojí 20 Kč.</li>
              </ul>
            </section>

            <section id="radiator">
              <h2>Reflexní fólie za radiátor – okamžitý efekt</h2>
              <p>Radiátor umístěný pod oknem nebo u vnější zdi vyzařuje část tepla přímo do zdi místo do místnosti. Reflexní fólie za radiátorem toto teplo odrazí zpět do místnosti.</p>
              <ul>
                <li><strong>Co koupit:</strong> Reflexní hliníková fólie speciálně určená za radiátory. Cena 100–300 Kč za sadu. Dostupná v hobbymarketech nebo online.</li>
                <li><strong>Montáž:</strong> Přistřihni na velikost radiátoru a vlož mezi radiátor a zeď. Lesklá strana musí být obrácena k radiátoru. Nelepí se — drží klíny nebo samolepkou.</li>
                <li><strong>Úspora:</strong> 3–7 % na daném radiátoru. Největší přínos u radiátorů na vnějších (chladných) stěnách.</li>
              </ul>
            </section>

            <section id="zavesy">
              <h2>Závěsy a rolety – noční izolace</h2>
              <p>Okna jsou nejslabší místo v izolaci bytu — i trojsklo ztrácí v noci mnohem více tepla než izolovaná stěna. Těžké závěsy jsou překvapivě účinná izolace.</p>
              <ul>
                <li><strong>Těžké termozávěsy:</strong> Speciální závěsy s tepelně izolační vrstvou — snižují tepelné ztráty okny o 10–15 %. Cena 500–2 000 Kč za pár. Zatahuj přes noc a v chladných dnech.</li>
                <li><strong>Japonské rolety:</strong> Blackout rolety s tepelnou vrstvou. Dobré řešení pro střešní okna nebo ložnice.</li>
                <li><strong>Venkovní rolety:</strong> Nejúčinnější řešení — 3× efektivnější než vnitřní závěsy. Ale vyžadují montáž zvenku — složitější instalace.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Závěsy musí sahat až na podlahu a překrývat rám okna po stranách — jen tak vytvoří vzduchovou kapsu která izoluje. Závěsy které visí jen v úrovni okna nemají izolační efekt.</div>
            </section>

            <section id="dalsi">
              <h2>Další levná opatření bez rekonstrukce</h2>
              <ul>
                <li><strong>Koberce na chladné podlahy:</strong> Koberec na keramické dlažbě nebo nevytápěné podlaze snižuje pocit chladu a umožní snížit teplotu o 1–2 °C bez ztráty komfortu. Cena 500–3 000 Kč.</li>
                <li><strong>Ucpání průchodů trubek:</strong> Kde trubky nebo kabely prostupují zdí jsou mezery — utěsni je montážní pěnou nebo silikonem. Cena 50–200 Kč.</li>
                <li><strong>Zateplovací tapeta:</strong> Speciální tapeta s pěnovou vrstvou na vnitřní stranu studených stěn. Přínos je omezený (2–5 %) ale pomáhá u vlhkých studených stěn.</li>
                <li><strong>Odsunutí nábytku od vnějších stěn:</strong> Nábytek přisunutý ke studené vnější zdi způsobuje kondenzaci a zhoršuje cirkulaci vzduchu. Minimum 5 cm mezera — zdarma.</li>
                <li><strong>Termostatické hlavice na radiátory:</strong> Levná (200–600 Kč/ks) a okamžitá úspora 10–15 % na daném radiátoru. Viz <Link href="/blog/usetrit-na-vytapeni" style={{color:"#5a9e6f",fontWeight:600}}>Jak ušetřit na vytápění →</Link></li>
              </ul>
            </section>

            <section id="poradi">
              <h2>V jakém pořadí začít – od nejlevnějšího</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Opatření</th><th>Cena</th><th>Úspora</th><th>Obtížnost</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Zimní nastavení kování oken</strong></td><td>0 Kč</td><td>5–10 %</td><td>⭐ Triviální</td></tr>
                    <tr><td><strong>Krytka klíčové dírky</strong></td><td>20 Kč</td><td>1–2 %</td><td>⭐ Triviální</td></tr>
                    <tr><td><strong>Těsnicí páska oken a dveří</strong></td><td>100–500 Kč</td><td>5–10 %</td><td>⭐ Velmi snadné</td></tr>
                    <tr><td><strong>Prahová lišta u dveří</strong></td><td>100–400 Kč</td><td>3–6 %</td><td>⭐ Velmi snadné</td></tr>
                    <tr><td><strong>Reflexní fólie za radiátory</strong></td><td>200–500 Kč</td><td>3–7 %</td><td>⭐ Velmi snadné</td></tr>
                    <tr><td><strong>Termozávěsy</strong></td><td>500–2 000 Kč</td><td>8–15 %</td><td>⭐⭐ Snadné</td></tr>
                    <tr><td><strong>Termostatické hlavice</strong></td><td>800–2 400 Kč</td><td>10–15 %</td><td>⭐⭐ Snadné</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Kolik ušetřím na vytápění bez rekonstrukce?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Kombinací těsnění oken, prahové lišty, reflexní fólie a termostatických hlavic lze reálně ušetřit 15–25 % nákladů na vytápění. Při průměrném účtu 30 000 Kč/rok jde o 4 500–7 500 Kč ročně. Nejlevnější opatření (zimní nastavení kování, těsnicí páska) se vrátí za první topnou sezónu.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Pomáhá zateplovací fólie na okna?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ano, transparentní zateplovací fólie na rámeček okna zevnitř vytváří vzduchovou mezeru a snižuje tepelné ztráty oknem o 30–50 %. Pro starší jednoskla je to výrazný přínos. Pro moderní trojskla je přínos menší. Cena 200–500 Kč na okno a montáž 30 minut — dobrý poměr cena/výkon.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Mohu zateplit byt v pronájmu?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Všechna opatření v tomto článku jsou reverzibilní — těsnicí pásku lze odlepit, reflexní fólii vyjmout, závěsy sundat. Žádné z těchto opatření nevyžaduje souhlas pronajímatele. Pokud chceš udělat trvalejší úpravy (výměna oken, zateplení stěn), potřebuješ souhlas majitele.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/zateplit-byt-bez-rekonstrukce" title="Jak zateplit byt bez rekonstrukce – levná řešení 2026" />

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
                <li><a href="#okna">Těsnění oken</a></li>
                <li><a href="#dvere">Dveře a průvany</a></li>
                <li><a href="#radiator">Reflexní fólie</a></li>
                <li><a href="#zavesy">Závěsy a rolety</a></li>
                <li><a href="#dalsi">Další opatření</a></li>
                <li><a href="#poradi">Pořadí – od nejlevnějšího</a></li>
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
