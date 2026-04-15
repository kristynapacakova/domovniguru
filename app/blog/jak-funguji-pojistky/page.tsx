import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak fungují pojistky a jističe – výměna a bezpečnost 2026",
  description: "Starý bytový rozvaděč s pojistkami nebo moderní jističe? Jak fungují, jak je bezpečně vyměnit a kdy je čas přejít na moderní rozvaděč. Průvodce pro laiky.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-funguji-pojistky" },
  openGraph: { title: "Jak fungují pojistky a jističe 2026", description: "Starý rozvaděč s pojistkami – jak fungují, jak je vyměnit a kdy volat elektrikáře.", url: "https://www.domovniguru.cz/blog/jak-funguji-pojistky", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-15T08:00:00Z", modifiedTime: "2026-04-15T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak fungují pojistky a jističe 2026", description: "Starý rozvaděč s pojistkami – jak fungují, jak je vyměnit." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/jak-funguji-pojistky#article",
    "headline": "Jak fungují pojistky a jističe – výměna a bezpečnost 2026",
    "datePublished": "2026-04-15T08:00:00Z",
    "dateModified": "2026-04-15T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak fungují pojistky", "výměna pojistky", "pojistky vs jističe", "starý rozvaděč pojistky", "bytový rozvaděč", "jak vyměnit pojistku"]
  }]
};

const RELATED = [
  { title: "Co dělat když nejde proud v části bytu", href: "/blog/nejde-proud-cast-bytu", read: "5 min" },
  { title: "Proč mi vypadává jistič?", href: "/blog/proc-vypadava-jistic", read: "4 min" },
  { title: "Jak vyměnit zásuvku sám", href: "/blog/jak-vymenit-zasuvku", read: "6 min" },
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
              <Link href="/blog/kategorie/elektrika">Elektrika & osvětlení</Link><span className="breadcrumb-sep">/</span>
              <span>Jak fungují pojistky</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">⚡ Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak fungují pojistky a jističe – výměna a bezpečnost</h1>
              <p className="article-lead">Máš v bytě starý rozvaděč s pojistkami místo jističů? Nebo nevíš jaký je rozdíl? Pojistky chrání elektroinstalaci před přetížením — ale jejich čas pomalu míjí. Tady je vše co potřebuješ vědět.</p>
              <div className="article-meta-row"><span>Aktualizováno: 15. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/jak-funguji-pojistky" title="Jak fungují pojistky a jističe – výměna a bezpečnost 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="200" fill="#f4f4f0"/>

                {/* POJISTKA (vlevo) */}
                <g transform="translate(30,20)">
                  <rect x="0" y="0" width="200" height="160" rx="8" fill="#f8f4ee" stroke="#d8d0c8" strokeWidth="1.2"/>
                  <text x="100" y="18" textAnchor="middle" fontSize="9" fill="#8a7050" fontWeight="700">TAVNÁ POJISTKA (starší)</text>

                  {/* Pojistka kresba */}
                  <rect x="60" y="28" width="80" height="30" rx="4" fill="#c8b890" stroke="#a89870" strokeWidth="1.2"/>
                  <rect x="75" y="35" width="50" height="16" rx="2" fill="#e8d8a0" stroke="#c8b880" strokeWidth="0.8"/>
                  {/* Tavný drát */}
                  <line x1="78" y1="43" x2="122" y2="43" stroke="#c8a030" strokeWidth="1.5"/>
                  <text x="100" y="72" textAnchor="middle" fontSize="8" fill="#8a7050">tavný drát</text>

                  {/* Přepálená pojistka */}
                  <rect x="60" y="85" width="80" height="30" rx="4" fill="#c8b890" stroke="#a89870" strokeWidth="1.2"/>
                  <rect x="75" y="92" width="50" height="16" rx="2" fill="#e8d8a0" stroke="#c8b880" strokeWidth="0.8"/>
                  {/* Přepálený drát */}
                  <line x1="78" y1="100" x2="92" y2="100" stroke="#c8a030" strokeWidth="1.5"/>
                  <line x1="108" y1="100" x2="122" y2="100" stroke="#c8a030" strokeWidth="1.5"/>
                  <text x="100" y="130" textAnchor="middle" fontSize="8" fill="#e07040">přepálený drát = výpadek</text>
                  <text x="100" y="142" textAnchor="middle" fontSize="8" fill="#e07040">nutná výměna pojistky</text>
                  <text x="100" y="154" textAnchor="middle" fontSize="7.5" fill="#8a7050">❌ nelze resetovat</text>
                </g>

                {/* Šipka porovnání */}
                <g transform="translate(242,88)">
                  <text x="38" y="12" textAnchor="middle" fontSize="8" fill="#9a9080">vs.</text>
                </g>

                {/* JISTIČ (střed) */}
                <g transform="translate(295,20)">
                  <rect x="0" y="0" width="200" height="160" rx="8" fill="#f0f8f0" stroke="#b8d8b8" strokeWidth="1.2"/>
                  <text x="100" y="18" textAnchor="middle" fontSize="9" fill="#3a7e4f" fontWeight="700">JISTIČ (moderní)</text>

                  {/* Jistič kresba */}
                  <rect x="65" y="28" width="70" height="110" rx="5" fill="#2a3a4a" stroke="#1a2a3a" strokeWidth="1.2"/>
                  {/* Páčka */}
                  <rect x="80" y="38" width="40" height="20" rx="3" fill="#4ade80" stroke="#2ab860" strokeWidth="1"/>
                  <text x="100" y="52" textAnchor="middle" fontSize="9" fill="#fff" fontWeight="700">ON</text>

                  {/* Ampéry */}
                  <rect x="72" y="65" width="56" height="20" rx="2" fill="#1a2a3a"/>
                  <text x="100" y="79" textAnchor="middle" fontSize="12" fill="#fbbf24" fontWeight="700" fontFamily="monospace">16A</text>

                  {/* Testovací tlačítko */}
                  <circle cx="100" cy="108" r="10" fill="#e07040" stroke="#c05030" strokeWidth="1"/>
                  <text x="100" y="112" textAnchor="middle" fontSize="7" fill="#fff" fontWeight="700">TEST</text>

                  <text x="100" y="152" textAnchor="middle" fontSize="8" fill="#3a7e4f">✅ resetovatelný</text>
                  <text x="100" y="163" textAnchor="middle" fontSize="7.5" fill="#3a7e4f">páčka zpět = obnovení</text>
                </g>

                {/* Srovnání vpravo */}
                <g transform="translate(513,20)">
                  <rect x="0" y="0" width="217" height="160" rx="8" fill="#fff" stroke="#e0d8d0" strokeWidth="1"/>
                  <text x="108" y="18" textAnchor="middle" fontSize="9" fill="#6a6050" fontWeight="700">SROVNÁNÍ</text>
                  {[
                    { label:"Ochrana", pojistka:"Tavný drát", jistic:"Elektromagnetická" },
                    { label:"Po výpadku", pojistka:"Koupit novou", jistic:"Resetovat páčku" },
                    { label:"Cena výpadku", pojistka:"10–30 Kč/ks", jistic:"0 Kč" },
                    { label:"Chránič (FI)", pojistka:"Není", jistic:"Součástí rozvaděče" },
                    { label:"Bezpečnost", pojistka:"⭐⭐", jistic:"⭐⭐⭐⭐⭐" },
                  ].map(({label, pojistka, jistic}, i) => (
                    <g key={i} transform={`translate(8, ${24+i*25})`}>
                      <text x="0" y="12" fontSize="8.5" fill="#6a6050" fontWeight="700">{label}</text>
                      <text x="0" y="22" fontSize="8" fill="#e07040">● {pojistka}</text>
                      <text x="110" y="22" fontSize="8" fill="#3a7e4f">● {jistic}</text>
                    </g>
                  ))}
                </g>

                <rect y="182" width="760" height="18" fill="#e8f0e8" opacity="0.5"/>
                <text x="380" y="194" textAnchor="middle" fontSize="8" fill="#3a7e4f" fontWeight="600" letterSpacing="0.06em">💡 STARÝ ROZVADĚČ S POJISTKAMI → DOPORUČUJEME VÝMĚNU ZA MODERNÍ JISTIČE</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#jak-funguji">Jak pojistky fungují</a></li>
                <li><a href="#pojistka-vs-jistic">Pojistka vs. jistič – rozdíly</a></li>
                <li><a href="#vymena">Jak vyměnit přepálenou pojistku</a></li>
                <li><a href="#hodnoty">Hodnoty pojistek – co kam patří</a></li>
                <li><a href="#moderni">Kdy přejít na moderní rozvaděč</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="jak-funguji">
              <h2>Jak pojistky fungují</h2>
              <p>Tavná pojistka je jednoduchý ochranný prvek — uvnitř je tenký drát z kovu s nízkou teplotou tání. Při přetížení obvodem proteče větší proud než je pojistka dimenzována, drát se zahřeje, přetaví a přeruší obvod. Tím ochrání vedení a spotřebiče před poškozením nebo požárem.</p>
              <p>Nevýhoda je zřejmá — <strong>po každém výpadku musíš koupit novou pojistku</strong>. Nelze ji resetovat jako jistič. Navíc pojistka nechrání před úrazem elektrickým proudem (to dělá chránič/FI relé který v starých instalacích s pojistkami většinou chybí).</p>
              <ul>
                <li><strong>Jak poznáš přepálenou pojistku:</strong> Průhledné pojistky mají viditelný přepálený drát. Neprůhledné poznáš tak že jsou načernalé nebo mají spálený zápach.</li>
                <li><strong>Typy pojistek v domácnostech:</strong> Nejčastější jsou válcové pojistky (typ D) a nožové pojistky (typ NH) pro větší proudy. Domácnosti mají zpravidla typ D o hodnotách 6A, 10A, 16A nebo 25A.</li>
              </ul>
            </section>

            <section id="pojistka-vs-jistic">
              <h2>Pojistka vs. jistič – hlavní rozdíly</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Vlastnost</th><th>Tavná pojistka</th><th>Jistič (MCB)</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Princip ochrany</strong></td><td>Tavný drát se přeruší</td><td>Elektromagnetická nebo tepelná spoušť</td></tr>
                    <tr><td><strong>Po výpadku</strong></td><td>Nutno koupit novou (10–30 Kč)</td><td>Stačí resetovat páčku — zdarma</td></tr>
                    <tr><td><strong>Rychlost reakce</strong></td><td>Pomalejší</td><td>Rychlejší — lepší ochrana</td></tr>
                    <tr><td><strong>Chránič (FI)</strong></td><td>Zpravidla není součástí</td><td>Moderní rozvaděče mají FI</td></tr>
                    <tr><td><strong>Bezpečnost</strong></td><td>Nižší — bez FI ochrany</td><td>Vyšší — s FI chrání i osoby</td></tr>
                    <tr><td><strong>Riziko nesprávné výměny</strong></td><td>Vysoké — drátěk nebo vyšší hodnota</td><td>Nízké — jistič nelze "přemostit"</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="vymena">
              <h2>Jak vyměnit přepálenou pojistku</h2>
              <div className="article-tip"><strong>⚠️ Bezpečnost:</strong> Před výměnou pojistky VŽDY vypni hlavní jistič nebo hlavní pojistku v rozvaděči. Nikdy nevyměňuj pojistku pod napětím — hrozí úraz elektrickým proudem nebo výbuch oblouku.</div>
              <ul>
                <li><strong>Krok 1 — Vypni hlavní přívod:</strong> Vypni hlavní pojistku nebo jistič v horní části rozvaděče, nebo zavolej správci budovy aby vypnul přívod.</li>
                <li><strong>Krok 2 — Identifikuj přepálenou pojistku:</strong> Průhledné pojistky — vidíš přepálený drát. Neprůhledné — jsou načernalé nebo nefungují.</li>
                <li><strong>Krok 3 — Zkontroluj hodnotu:</strong> Na každé pojistce je vyražená hodnota v ampérech (6A, 10A, 16A). Kupit přesně stejnou hodnotu — nikdy vyšší!</li>
                <li><strong>Krok 4 — Vyměň pojistku:</strong> Otočením nebo vytažením vyjmi starou pojistku, vlož novou stejné hodnoty.</li>
                <li><strong>Krok 5 — Zapni hlavní přívod a zkontroluj:</strong> Pokud pojistka okamžitě opět přepálí, je v obvodu zkrat nebo přetížení — hledej příčinu před další výměnou.</li>
              </ul>
              <div className="article-tip"><strong>⚠️ NIKDY nenahrazuj pojistku drátem nebo hřebíkem!</strong> Tato "oprava" zruší ochranu a způsobuje požáry. Je to nejčastější příčina elektrických požárů v domácnostech.</div>
            </section>

            <section id="hodnoty">
              <h2>Hodnoty pojistek – co kam patří</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Hodnota</th><th>Maximální příkon</th><th>Typické použití</th></tr></thead>
                  <tbody>
                    <tr><td><strong>6 A</strong></td><td>1 380 W</td><td>Osvětlení, slaboproud</td></tr>
                    <tr><td><strong>10 A</strong></td><td>2 300 W</td><td>Běžné zásuvkové obvody</td></tr>
                    <tr><td><strong>16 A</strong></td><td>3 680 W</td><td>Zásuvky, pračka, myčka</td></tr>
                    <tr><td><strong>25 A</strong></td><td>5 750 W</td><td>Sporák, elektrický kotel</td></tr>
                    <tr><td><strong>35 A</strong></td><td>8 050 W</td><td>Hlavní přívod bytu</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Vždy používej pojistku se <strong>stejnou nebo nižší hodnotou</strong> než originál. Vyšší hodnota nechrání vedení — drát se může přehřát a vznítit dříve než pojistka vypadne.</p>
            </section>

            <section id="moderni">
              <h2>Kdy přejít na moderní rozvaděč s jističi</h2>
              <p>Starý rozvaděč s pojistkami není nutně nebezpečný — ale moderní rozvaděč s jističi a chrániči nabízí výrazně lepší ochranu. Výměna stojí 5 000–15 000 Kč včetně práce elektrikáře a revize.</p>
              <ul>
                <li><strong>Výměna je naléhavá pokud:</strong> Pojistky přepalují opakovaně (přetížená instalace), rozvaděč je poškozený nebo korodovaný, v bytě nejsou žádné chrániče (FI relé), instalace je starší 40+ let.</li>
                <li><strong>Výměna se vyplatí pokud:</strong> Rekonstruuješ byt, přidáváš velké spotřebiče (klimatizace, tepelné čerpadlo), nebo chceš mít moderní a bezpečnou instalaci.</li>
                <li><strong>Přínos moderního rozvaděče:</strong> FI chránič ochrání před úrazem elektrickým proudem, jističe jsou resetovatelné zdarma, přehledné označení okruhů, možnost přidat nové okruhy.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Při rekonstrukci bytu vždy naplánuj výměnu rozvaděče jako první krok — před malováním, podlahami a kuchyní. Elektrikář potřebuje přístup ke stěnám a stropu pro vedení nových kabelů.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Mohu vyměnit pojistku sám nebo potřebuji elektrikáře?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Výměna přepálené pojistky za stejnou hodnotu je považována za drobnou údržbu — laik ji může provést pokud bezpečně vypne hlavní přívod. Výměna celého rozvaděče nebo přidání nových okruhů vyžaduje elektrikáře a revizi.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Co se stane když dám pojistku s vyšší hodnotou?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Pojistka s vyšší hodnotou nechrání vedení — kabel se může přehřát a vznítit dříve než pojistka reaguje. Toto je velmi nebezpečné a častá příčina elektrických požárů. Vždy používej pojistku se stejnou nebo nižší hodnotou.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak často se pojistky přepalují v normálním provozu?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Správně dimenzovaná pojistka by se neměla přepalovat vůbec — nebo jen výjimečně při zapnutí příliš mnoha spotřebičů najednou. Opakované přepalování signalizuje přetíženou instalaci (příliš mnoho spotřebičů na jednom obvodu) nebo zkrat ve vedení. Oba případy vyžadují řešení — ne jen výměnu pojistky.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Kde koupím pojistky?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Pojistky koupíš v elektroobchodech (ElektroWorld, Mall, specializované elektro prodejny) nebo v hobbymarketech (Hornbach, Bauhaus, OBI). Cena 10–30 Kč za kus. Při nákupu nes s sebou starou pojistku nebo si zapiš přesný typ a hodnotu v ampérech.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/jak-funguji-pojistky" title="Jak fungují pojistky a jističe – výměna a bezpečnost 2026" />

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
                <li><a href="#jak-funguji">Jak pojistky fungují</a></li>
                <li><a href="#pojistka-vs-jistic">Pojistka vs. jistič</a></li>
                <li><a href="#vymena">Výměna pojistky</a></li>
                <li><a href="#hodnoty">Hodnoty pojistek</a></li>
                <li><a href="#moderni">Kdy přejít na jističe</a></li>
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
