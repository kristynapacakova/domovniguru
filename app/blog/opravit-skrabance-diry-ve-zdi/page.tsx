import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak opravit škrábance a díry ve zdi před malováním 2026",
  description: "Tmel, sádra nebo sprej? Jak vyrovnat povrch zdi před malováním – od malých škrábanců po větší díry po hmoždinkách. Postup krok za krokem.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/opravit-skrabance-diry-ve-zdi" },
  openGraph: { title: "Jak opravit škrábance a díry ve zdi 2026", description: "Tmel, sádra nebo sprej – jak opravit povrch zdi před malováním krok za krokem.", url: "https://www.domovniguru.cz/blog/opravit-skrabance-diry-ve-zdi", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-15T08:00:00Z", modifiedTime: "2026-04-15T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak opravit škrábance a díry ve zdi 2026", description: "Tmel, sádra nebo sprej – jak opravit povrch zdi před malováním." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/opravit-skrabance-diry-ve-zdi#article",
    "headline": "Jak opravit škrábance a díry ve zdi před malováním 2026",
    "datePublished": "2026-04-15T08:00:00Z",
    "dateModified": "2026-04-15T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak opravit díry ve zdi", "tmel na zeď", "oprava škrábanců zeď", "díra po hmoždince", "vyrovnat zeď před malováním", "sádra na zeď oprava"]
  }]
};

const RELATED = [
  { title: "Jak malovat zeď – kompletní průvodce", href: "/blog/jak-malovat-zed", read: "5 min" },
  { title: "Jak vybrat barvu na zeď", href: "/blog/jak-vybrat-barvu-na-zed", read: "9 min" },
  { title: "Jak malovat rohy a lišty bez přetahování", href: "/blog/jak-malovat-rohy-a-listy", read: "5 min" },
  { title: "Jak se zbavit plísně na zdi natrvalo", href: "/blog/jak-odstranit-plisen-na-zdi", read: "10 min" },
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
              <Link href="/blog/kategorie/malovani">Malování & barvy</Link><span className="breadcrumb-sep">/</span>
              <span>Oprava škrábanců a děr</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování & barvy</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak opravit škrábance a díry ve zdi před malováním</h1>
              <p className="article-lead">Přemalování zdi bez opravy povrchu je plýtvání barvou — každý škrábanec a díra bude pod nátěrem vidět. Správná příprava povrchu trvá hodinu a zajistí profesionální výsledek.</p>
              <div className="article-meta-row"><span>Aktualizováno: 15. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/opravit-skrabance-diry-ve-zdi" title="Jak opravit škrábance a díry ve zdi před malováním 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 195" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="195" fill="#fdf8f4"/>

                {/* Typy poškození a řešení */}
                {[
                  { x:20, type:"Škrábanec", size:"< 2 mm", icon:"—", solution:"Akrylátový tmel", tool:"špachtle", color:"#5a9e6f", steps:"1 vrstva + přebrousit" },
                  { x:205, type:"Díra po hmoždince", size:"5–15 mm", icon:"●", solution:"Sádrový tmel", tool:"špachtle + vlhkost", color:"#4a90d9", steps:"2 vrstvy + přebrousit" },
                  { x:390, type:"Větší díra", size:"15–50 mm", icon:"◯", solution:"Sádra + výztuha", tool:"špachtle + síťka", color:"#f59e0b", steps:"základ + tmel + brousit" },
                  { x:575, type:"Velká díra", size:"> 50 mm", icon:"□", solution:"Sádrokarton", tool:"pilka + tmel", color:"#e07a5f", steps:"záplata + síťka + tmel" },
                ].map(({x, type, size, icon, solution, tool, color, steps}) => (
                  <g key={x} transform={`translate(${x}, 15)`}>
                    <rect x="0" y="0" width="170" height="160" rx="8" fill="#fff" stroke={color} strokeWidth="1" opacity="0.9"/>
                    <rect x="0" y="0" width="170" height="6" rx="4" fill={color} opacity="0.3"/>
                    <text x="85" y="25" textAnchor="middle" fontSize="10" fill={color} fontWeight="700">{type}</text>
                    <text x="85" y="40" textAnchor="middle" fontSize="8" fill="#8a8078">{size}</text>
                    <text x="85" y="68" textAnchor="middle" fontSize="22" fill={color} opacity="0.5">{icon}</text>
                    <line x1="15" y1="82" x2="155" y2="82" stroke={color} strokeWidth="0.5" opacity="0.3"/>
                    <text x="10" y="98" fontSize="8" fill="#6a6058" fontWeight="600">Řešení:</text>
                    <text x="10" y="110" fontSize="8.5" fill={color} fontWeight="600">{solution}</text>
                    <text x="10" y="125" fontSize="8" fill="#8a8078">Nástroj: {tool}</text>
                    <text x="10" y="140" fontSize="7.5" fill="#8a8078">{steps}</text>
                  </g>
                ))}

                <rect y="177" width="760" height="18" fill="#f0ece8" opacity="0.5"/>
                <text x="380" y="189" textAnchor="middle" fontSize="8" fill="#8a7050" fontWeight="600" letterSpacing="0.06em">🎨 PŘÍPRAVA POVRCHU = 50 % VÝSLEDKU MALOVÁNÍ · NESPĚCHAT · NECHAT ZASCHNOUT</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#materialy">Jaký tmel nebo sádru koupit</a></li>
                <li><a href="#skrabance">Škrábance a drobné vrypy</a></li>
                <li><a href="#hmozdinky">Díry po hmoždinkách a šroubech</a></li>
                <li><a href="#vetsi">Větší díry (15–50 mm)</a></li>
                <li><a href="#velke">Velké díry – záplata ze sádrokartonu</a></li>
                <li><a href="#brouseni">Broušení a finální příprava</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="materialy">
              <h2>Jaký tmel nebo sádru koupit</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Materiál</th><th>Vhodné pro</th><th>Schnutí</th><th>Cena</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Akrylátový tmel (Knauf Uniflott, Baumit)</strong></td><td>Škrábance, drobné vrypy, spáry</td><td>2–4 hod</td><td>80–150 Kč/kg</td></tr>
                    <tr><td><strong>Sádrový tmel (Rigips, Knauf)</strong></td><td>Díry po hmoždinkách, střední díry</td><td>30–60 min</td><td>50–100 Kč/kg</td></tr>
                    <tr><td><strong>Sprej na opravy (Reparex)</strong></td><td>Malé díry a škrábance – rychlé řešení</td><td>15–30 min</td><td>150–300 Kč/ks</td></tr>
                    <tr><td><strong>Stavební sádra (Gips)</strong></td><td>Větší díry, záplaty</td><td>15–30 min</td><td>30–60 Kč/kg</td></tr>
                    <tr><td><strong>Penetrační nátěr (Primalex, HET)</strong></td><td>Savé nebo nové omítky před tmelem</td><td>2–4 hod</td><td>80–200 Kč/l</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Na většinu běžných oprav v bytě stačí jeden kg akrylátového tmelu a jeden kg sádrového tmelu. Nekupuj velké balení — otevřený tmel vyschne do týdne.</div>
            </section>

            <section id="skrabance">
              <h2>Škrábance a drobné vrypy (do 2 mm)</h2>
              <p>Nejjednodušší oprava — akrylátový tmel nanesen špachtlí nebo prstem, přebroušen jemným papírem.</p>
              <ul>
                <li><strong>Krok 1 — Vyčisti povrch:</strong> Odstraň prach, mastnotu a uvolněné části omítky. Škrábanec musí být suchý a čistý.</li>
                <li><strong>Krok 2 — Nanes tmel:</strong> Malou špachtlí vtlač tmel do škrábance. Přejeď špachtlí diagonálně přes škrábanec pro rovný povrch. Mírně přesahuj — tmel po zaschnutí mírně schne.</li>
                <li><strong>Krok 3 — Nechej zaschnout:</strong> Minimálně 2–4 hodiny, ideálně přes noc. Tmelem nesmí hýbat.</li>
                <li><strong>Krok 4 — Přebrousit:</strong> Jemný brusný papír (zrno 120–180) přejdi přes opravenou plochu do roviny s okolní omítkou. Přebrousit i okolní plochu pro hladký přechod.</li>
                <li><strong>Krok 5 — Penetrace (volitelně):</strong> Na opravené místo nanes tenkou vrstvu penetrace před malováním — zabrání různé savosti povrchu.</li>
              </ul>
            </section>

            <section id="hmozdinky">
              <h2>Díry po hmoždinkách a šroubech (5–15 mm)</h2>
              <p>Nejčastější typ opravy — po přestěhování nábytku nebo sejmutí obrazů. Sádrový tmel je ideální — rychlé schnutí a pevný výsledek.</p>
              <ul>
                <li><strong>Krok 1 — Odstraň hmoždinku:</strong> Šroubovákem nebo kleštěmi vytáhni hmoždinku. Pokud nejde, zatluč ji dovnitř do zdi.</li>
                <li><strong>Krok 2 — Navlhči díru:</strong> Vlhkým štětcem nebo prstem navlhči vnitřek díry — sádrový tmel potřebuje vlhkost pro správné vytvrzení.</li>
                <li><strong>Krok 3 — Zaplň sádrovým tmelem:</strong> Naplň díru sádrovým tmelem — mírně přesahuj povrch. Na velké díry naplň ve dvou vrstvách s přestávkou na schnutí.</li>
                <li><strong>Krok 4 — Zahlaď povrch:</strong> Mokrou špachtlí nebo prstem zahlaď povrch do roviny se zdí. Rychle — sádrový tmel tuhne za 15–30 minut.</li>
                <li><strong>Krok 5 — Přebrousit po zaschnutí:</strong> Po úplném zaschnutí (min. 2 hodiny) přebrousit jemným papírem na rovinu.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Sprej Reparex je rychlá alternativa pro díry po hmoždinkách — namočíš špici do díry, zmáčkneš a tmel se sám roztáhne. Schne za 15–30 minut. Perfektní pro malé množství oprav.</div>
            </section>

            <section id="vetsi">
              <h2>Větší díry (15–50 mm) – síťka a tmel</h2>
              <p>Větší díry vyžadují výztuhu aby tmel při schnutí nepraskl a nedroble.</p>
              <ul>
                <li><strong>Krok 1 — Vyčisti díru:</strong> Odstraň uvolněné části, díru okartáčuj. Navlhči.</li>
                <li><strong>Krok 2 — Nanes základní vrstvu sádry:</strong> Vyplň díru hrubou vrstvou stavební sádry zhruba do 2/3 hloubky. Zahlaď hrubě.</li>
                <li><strong>Krok 3 — Vlož sklotextilní síťku:</strong> Zatím mokrou sádrovou vrstvou přitlač sklotextilní síťku (prodává se v rolích, cena 30–80 Kč). Síťka brání praskání.</li>
                <li><strong>Krok 4 — Druhá vrstva tmelu:</strong> Po zaschnutí základní vrstvy (30 min) nanes finální vrstvu akrylátového tmelu. Zahlaď do roviny se zdí.</li>
                <li><strong>Krok 5 — Brousit ve dvou fázích:</strong> Po zaschnutí hrubší papír (80), pak jemný (150). Přechod na okolní povrch musí být plynulý.</li>
              </ul>
            </section>

            <section id="velke">
              <h2>Velké díry (nad 50 mm) – záplata ze sádrokartonu</h2>
              <p>Velké díry nelze vyplnit tmelem — praskaly by. Nejlepší řešení je záplata ze sádrokartonu.</p>
              <ul>
                <li><strong>Krok 1 — Upraví díru na čtverec nebo obdélník:</strong> Pilkou nebo nožem upraví nepravidelnou díru na pravidelný tvar — snadnější záplata.</li>
                <li><strong>Krok 2 — Připrav záplatu:</strong> Ze sádrokartonu vystřihni záplatu o 4 cm větší než díra. Na záplatě vyřízni jen sádrokartonovou část (bez papíru) — papír zůstane jako límec.</li>
                <li><strong>Krok 3 — Nanés tmel do díry:</strong> Okolo díry nanes vrstvu tmelu, přilož záplatu a přitlač. Papírový límec se přilepí k zdi.</li>
                <li><strong>Krok 4 — Překlij síťkou a nanes tmel:</strong> Přes záplatu polož síťku a nanes vrstvu tmelu. Zahlaď.</li>
                <li><strong>Krok 5 — Brousit a penetrovat:</strong> Po zaschnutí brousit, penetrovat a malovat.</li>
              </ul>
            </section>

            <section id="brouseni">
              <h2>Broušení a finální příprava před malováním</h2>
              <p>Broušení je posledním a nejdůležitějším krokem před malováním. Neopravené nebo špatně přebroušené místo bude pod barvou viditelné jako vyvýšenina nebo prohlubeň.</p>
              <ul>
                <li><strong>Zrnitost papíru:</strong> Hrubší (60–80) na velké nerovnosti, jemný (120–180) na finální přebroušení. Nikdy neskončit hrubším než 150.</li>
                <li><strong>Technika broušení:</strong> Brus krouživými pohyby přes opravenou plochu i do okolí. Přejdi dlaní — ruka najde nerovnosti lépe než oči.</li>
                <li><strong>Penetrace opravených míst:</strong> Opravená místa jsou savější než okolní omítka — bez penetrace barva na těchto místech vypadá jinak. Nanes penetraci na všechna opravená místa.</li>
                <li><strong>Kontrola před malováním:</strong> Posvit bočním světlem (lampou pod úhlem) na opravenou plochu — nerovnosti jsou pak jasně viditelné. Oprav co ještě vyčnívá.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Musím penetrovat před tmelem?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Na savých nebo nových omítkách ano — penetrace sníží savost a tmel se nevytáhne do omítky příliš rychle. Na standardní malované stěně penetrace před tmelem není nutná. Po tmelu a broušení vždy penetruj opravená místa před malováním — zabrání rozdílné savosti povrchu.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak dlouho čekat před malováním po opravě?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Akrylátový tmel: min. 4 hodiny, ideálně 24 hodin. Sádrový tmel: min. 2 hodiny. Penetrace: 2–4 hodiny před malováním. Vždy zkontroluj zda je opravené místo úplně suché — vlhký tmel pod barvou způsobí praskání a odpadávání.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak opravit díru v sádrokartonu?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Pro malé díry (do 15 mm) funguje tmelový sprej nebo sádrový tmel se síťkou. Pro větší díry použij záplatu ze sádrokartonu popsanou v článku — postup je stejný jako u omítky. Sádrokarton je měkčí a snadněji se zpracovává než omítka.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/opravit-skrabance-diry-ve-zdi" title="Jak opravit škrábance a díry ve zdi před malováním 2026" />

            <section className="related-section">
              <h2>Související články</h2>
              <div className="related-grid">
                {RELATED.map((r) => (
                  <Link key={r.href} href={r.href} className="card">
                    <div className="card-eyebrow-row"><span>Malování & barvy</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#materialy">Jaký tmel koupit</a></li>
                <li><a href="#skrabance">Škrábance</a></li>
                <li><a href="#hmozdinky">Díry po hmoždinkách</a></li>
                <li><a href="#vetsi">Větší díry</a></li>
                <li><a href="#velke">Velké díry</a></li>
                <li><a href="#brouseni">Broušení a příprava</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/malovani" className="sidebar-cat-link">🎨 Malování & barvy<span>20 článků →</span></Link>
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
