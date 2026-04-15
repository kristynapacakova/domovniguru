import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak postavit pergolu na terasu – dřevěná nebo hliníková 2026",
  description: "Stavba pergoly krok za krokem – od výběru materiálu a kotvení sloupů po střešní latě a impregnaci. Dřevěná nebo hliníková pergola za víkend.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/pergola-postup-stavba" },
  openGraph: { title: "Jak postavit pergolu na terasu 2026", description: "Dřevěná nebo hliníková pergola – výběr, kotvení sloupů a stavba krok za krokem.", url: "https://www.domovniguru.cz/blog/pergola-postup-stavba", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-15T08:00:00Z", modifiedTime: "2026-04-15T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak postavit pergolu na terasu 2026", description: "Dřevěná nebo hliníková pergola – výběr, kotvení a stavba." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/pergola-postup-stavba#article",
    "headline": "Jak postavit pergolu na terasu – dřevěná nebo hliníková 2026",
    "datePublished": "2026-04-15T08:00:00Z",
    "dateModified": "2026-04-15T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak postavit pergolu", "pergola na terasu", "dřevěná pergola stavba", "kotvení sloupů pergoly", "hliníková pergola", "pergola postup"]
  }]
};

const RELATED = [
  { title: "Jak připravit zahradu na jaro", href: "/blog/jarni-zahrada", read: "7 min" },
  { title: "Jak ošetřit dřevěnou terasu", href: "/blog/drevo-terasa-zima", read: "5 min" },
  { title: "Jak pokládat betonové dlaždice na terasu", href: "/blog/pokladat-betonove-dlazdice", read: "8 min" },
  { title: "Jak zařídit terasu na balkoně", href: "/blog/terasa-na-balkone", read: "5 min" },
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
              <Link href="/blog/kategorie/zahrada">Zahrada & terasa</Link><span className="breadcrumb-sep">/</span>
              <span>Stavba pergoly</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 9 min čtení</span>
              </div>
              <h1 className="article-h1">Jak postavit pergolu na terasu – dřevěná nebo hliníková</h1>
              <p className="article-lead">Pergola proměňuje holou terasu v příjemný venkovní pokoj. Dřevěná pergola za víkend svépomocí nebo hliníková systémová za odpoledne — tady je jak na to od základů až po střešní latě.</p>
              <div className="article-meta-row"><span>Aktualizováno: 15. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/pergola-postup-stavba" title="Jak postavit pergolu na terasu – dřevěná nebo hliníková 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 210" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="210" fill="#f4f8f0"/>
                <defs>
                  <linearGradient id="drevoP" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#c8904a"/><stop offset="100%" stopColor="#a07030"/>
                  </linearGradient>
                </defs>

                {/* DŘEVĚNÁ PERGOLA (vlevo) */}
                <g transform="translate(30,20)">
                  <rect x="0" y="0" width="310" height="175" rx="8" fill="#fdf8f0" stroke="#d8c8a0" strokeWidth="1.2"/>
                  <text x="155" y="18" textAnchor="middle" fontSize="9" fill="#8a7050" fontWeight="700">🪵 DŘEVĚNÁ PERGOLA</text>

                  {/* Sloupy */}
                  <rect x="30" y="28" width="14" height="120" rx="3" fill="url(#drevoP)"/>
                  <rect x="145" y="28" width="14" height="120" rx="3" fill="url(#drevoP)"/>
                  <rect x="260" y="28" width="14" height="120" rx="3" fill="url(#drevoP)"/>

                  {/* Hlavní nosník */}
                  <rect x="20" y="25" width="268" height="14" rx="3" fill="url(#drevoP)"/>

                  {/* Střešní latě */}
                  {[30, 50, 70, 90, 110, 130, 150, 170, 190, 210, 230, 250].map((x,i) => (
                    <rect key={i} x={x} y="20" width="8" height="155" rx="2" fill="#c8904a" opacity="0.7"/>
                  ))}

                  {/* Kotvy */}
                  <rect x="25" y="142" width="24" height="8" rx="2" fill="#808080"/>
                  <rect x="140" y="142" width="24" height="8" rx="2" fill="#808080"/>
                  <rect x="255" y="142" width="24" height="8" rx="2" fill="#808080"/>

                  {/* Dlažba */}
                  <rect x="10" y="150" width="288" height="15" rx="2" fill="#c0b8a8"/>

                  {/* Popisky */}
                  <text x="155" y="168" textAnchor="middle" fontSize="8" fill="#8a7050" fontWeight="600">smrk / borovice / modřín</text>
                  <text x="155" y="178" textAnchor="middle" fontSize="8" fill="#a09070">cena: 8 000–25 000 Kč</text>
                </g>

                {/* HLINÍKOVÁ PERGOLA (vpravo) */}
                <g transform="translate(358,20)">
                  <rect x="0" y="0" width="370" height="175" rx="8" fill="#f0f4f8" stroke="#b0c8d8" strokeWidth="1.2"/>
                  <text x="185" y="18" textAnchor="middle" fontSize="9" fill="#3a6a8a" fontWeight="700">🔩 HLINÍKOVÁ SYSTÉMOVÁ</text>

                  {/* Profily */}
                  <rect x="30" y="28" width="16" height="120" rx="3" fill="#909090"/>
                  <rect x="310" y="28" width="16" height="120" rx="3" fill="#909090"/>

                  {/* Hlavní profil */}
                  <rect x="20" y="25" width="316" height="16" rx="3" fill="#808080"/>

                  {/* Střešní lamely — lamelová střecha */}
                  {[30,50,70,90,110,130,150,170,190,210,230,250,270,290,310].map((x,i) => (
                    <rect key={i} x={x} y="18" width="14" height="155" rx="2" fill="#a0a8b0" opacity="0.8"/>
                  ))}

                  {/* Kotvy šrouby */}
                  <circle cx="38" cy="148" r="5" fill="#606060"/>
                  <circle cx="318" cy="148" r="5" fill="#606060"/>

                  {/* Dlažba */}
                  <rect x="10" y="150" width="336" height="15" rx="2" fill="#c0b8a8"/>

                  {/* Popisky */}
                  <text x="185" y="168" textAnchor="middle" fontSize="8" fill="#3a6a8a" fontWeight="600">eloxovaný hliník, lamelová střecha</text>
                  <text x="185" y="178" textAnchor="middle" fontSize="8" fill="#607080">cena: 20 000–80 000 Kč</text>
                </g>

                <rect y="192" width="760" height="18" fill="#e8f0e0" opacity="0.5"/>
                <text x="380" y="204" textAnchor="middle" fontSize="8" fill="#3a7e4f" fontWeight="600" letterSpacing="0.06em">🌿 JARO = IDEÁLNÍ ČAS NA STAVBU · DŘEVO LEVNĚJŠÍ · HLINÍK TRVANLIVĚJŠÍ</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#drevo-vs-hlinik">Dřevo vs. hliník – co vybrat</a></li>
                <li><a href="#planovani">Plánování a povolení</a></li>
                <li><a href="#material">Materiál a rozměry</a></li>
                <li><a href="#kotveni">Kotvení sloupů</a></li>
                <li><a href="#stavba">Stavba krok za krokem</a></li>
                <li><a href="#strecha">Střecha pergoly – varianty</a></li>
                <li><a href="#udrzba">Údržba dřevěné pergoly</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="drevo-vs-hlinik">
              <h2>Dřevo vs. hliník – co vybrat</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Vlastnost</th><th>Dřevěná pergola</th><th>Hliníková pergola</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Cena</strong></td><td>8 000–25 000 Kč (DIY)</td><td>20 000–80 000 Kč</td></tr>
                    <tr><td><strong>Životnost</strong></td><td>15–30 let (s údržbou)</td><td>30–50+ let (bez údržby)</td></tr>
                    <tr><td><strong>Údržba</strong></td><td>Natírat každé 2–3 roky</td><td>Žádná</td></tr>
                    <tr><td><strong>Vzhled</strong></td><td>Přirozený, teplý</td><td>Moderní, čistý</td></tr>
                    <tr><td><strong>Stavba DIY</strong></td><td>✅ Zvládne laik</td><td>⭐⭐ Systémová snadná, vlastní složitější</td></tr>
                    <tr><td><strong>Lamelová střecha</strong></td><td>❌ Nedostupné</td><td>✅ Otočné lamely, odtok vody</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Doporučení:</strong> Pro první pergolu a nižší rozpočet doporučujeme dřevo — modřín nebo akát jsou nejodolnější, impregnovaná borovice je levnější alternativa. Hliník vyber pokud chceš nulovou údržbu a moderní design.</div>
            </section>

            <section id="planovani">
              <h2>Plánování a povolení</h2>
              <p>Pergola do určité velikosti nevyžaduje stavební povolení — ale pravidla se liší podle obce a blízkosti hranic pozemku.</p>
              <ul>
                <li><strong>Bez povolení (zpravidla):</strong> Pergola do 25 m² zastavěné plochy, výška do 5 m, vzdálenost od hranice pozemku min. 2 m. Vždy ověř u místního stavebního úřadu.</li>
                <li><strong>S ohlášením:</strong> Pergola s nepropustnou střechou (plachta, polykarbonát) může být považována za stavbu vyžadující ohlášení.</li>
                <li><strong>Umístění:</strong> Pergola orientovaná na jih nebo jihozápad poskytuje stín odpoledne. Zvaž odkud fouká převládající vítr — pergola bude stínit ale ne chránit před deštěm pokud nemá boční stěny.</li>
              </ul>
            </section>

            <section id="material">
              <h2>Materiál a rozměry – co nakoupit</h2>
              <p>Pro standardní pergolu 4×3 m (12 m²) s dřevěnou konstrukcí potřebuješ:</p>
              <ul>
                <li><strong>Sloupy 4 ks:</strong> Profil 12×12 cm nebo 10×10 cm, délka 2,8–3,2 m. Modřín nebo impregnovaná borovice.</li>
                <li><strong>Hlavní nosníky 2 ks:</strong> Profil 10×16 cm, délka 4 m (přes šířku pergoly).</li>
                <li><strong>Příčné latě 8–10 ks:</strong> Profil 5×10 cm, délka 3 m.</li>
                <li><strong>Střešní latě 12–15 ks:</strong> Profil 4×6 cm nebo 5×5 cm, délka 4 m. Rozteč 20–30 cm.</li>
                <li><strong>Kotvy sloupů 4 ks:</strong> Ocelové patky na zabetonování nebo přišroubování do dlažby.</li>
                <li><strong>Spojovací materiál:</strong> Šrouby, svorníky, úhelníky — pozinkované nebo nerezové pro venkovní použití.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Vždy kupuj dřevo s 10–15 % rezervou na odpad a chyby v řezání. Dřevo měř dvakrát, řež jednou.</div>
            </section>

            <section id="kotveni">
              <h2>Kotvení sloupů – nejdůležitější krok</h2>
              <p>Špatně kotvené sloupy jsou nejčastější příčina nestability pergoly. Existují dva způsoby kotvení.</p>
              <h3>Kotvení do betonu (nejpevnější)</h3>
              <ul>
                <li>Vykopej jámu 40×40×60 cm pro každý sloup</li>
                <li>Vlož betonovou paatku nebo ocelový trn, vyrovnej do olovnice</li>
                <li>Zaplň betonem (B20), nechej tuhnout 48–72 hodin</li>
                <li>Sloup nasaď na patku a přišroubuj — nikdy nevsazuj dřevo přímo do betonu (hnilo by)</li>
              </ul>
              <h3>Kotvení do dlažby (pro existující terasu)</h3>
              <ul>
                <li>Ocelové patky přišroubované do dlažby pomocnými kotvami (chemická kotva nebo rozpínací šroub)</li>
                <li>Jednodušší montáž ale méně pevné než betonování</li>
                <li>Vhodné pro pergoly do 3×3 m nebo v místech bez silného větru</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Před kotvením přilož celou konstrukci "na sucho" na zem a zkontroluj rozměry. Je lepší zjistit chybu na zemi než ve výšce 2,5 m.</div>
            </section>

            <section id="stavba">
              <h2>Stavba dřevěné pergoly krok za krokem</h2>
              <ul>
                <li><strong>Krok 1 — Vytyčení a kotvení patek:</strong> Vytyč rohy pergoly pomocí šňůry a úhelníku (Pythagorova trojice 3-4-5 pro pravý úhel). Vykopej nebo vyvrtej místa pro patky.</li>
                <li><strong>Krok 2 — Betonování patek:</strong> Vlož ocelové patky, vyrovnej do olovnice ve dvou směrech. Zaplň betonem. Počkej min. 48 hodin.</li>
                <li><strong>Krok 3 — Osazení sloupů:</strong> Sloupy přišroubuj k patkám. Zkontroluj svislost ve dvou směrech vodováhou. Dočasně podepři šikmými vzpěrami.</li>
                <li><strong>Krok 4 — Hlavní nosníky:</strong> Na sloupy osazení hlavní nosníky (přes šířku pergoly). Spoj svorníky nebo speciálními úhelníky. Zkontroluj vodorovnost.</li>
                <li><strong>Krok 5 — Příčné nosníky:</strong> Na hlavní nosníky přidej příčné nosníky (přes délku pergoly). Rozteč 80–120 cm.</li>
                <li><strong>Krok 6 — Střešní latě:</strong> Na příčné nosníky přibij střešní latě s roztečí 20–30 cm. Latě přesahují nosníky o 20–30 cm na každou stranu.</li>
                <li><strong>Krok 7 — Impregnace a ošetření:</strong> Celou konstrukci ošetři terasovým olejem nebo lazurou. Viz <Link href="/blog/drevo-terasa-zima" style={{color:"#5a9e6f",fontWeight:600}}>Jak ošetřit dřevo →</Link></li>
              </ul>
            </section>

            <section id="strecha">
              <h2>Střecha pergoly – varianty</h2>
              <ul>
                <li><strong>Otevřená mřížka (klasická pergola):</strong> Střešní latě bez krytiny — propouští světlo a déšť. Ideální pro popínavé rostliny (vistárie, réva).</li>
                <li><strong>Stínící plachta (shade sail):</strong> Vodoodpudivá tkanina zavěšená pod latěmi. Snadná montáž, výměna za pár minut. Cena 1 000–5 000 Kč.</li>
                <li><strong>Polykarbonátové panely:</strong> Průsvitné plastové panely — propouštějí světlo ale chrání před deštěm. Cena 500–1 500 Kč/m².</li>
                <li><strong>Otočné hliníkové lamely:</strong> Pouze u hliníkových systémových pergol. Otočením lamel reguluješ stínění a větrání. Cena je zahrnuta v ceně hliníkové pergoly.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud chceš pěstovat popínavé rostliny, nechej pergolu otevřenou minimálně první rok — rostliny potřebují čas na zarůstání a pak pergolu zastíní přirozeně lépe než jakákoli krytina.</div>
            </section>

            <section id="udrzba">
              <h2>Údržba dřevěné pergoly</h2>
              <ul>
                <li><strong>Každý rok (jaro):</strong> Vizuální kontrola — praskliny, hniloba, uvolněné spoje. Dotáhni šrouby.</li>
                <li><strong>Každé 2–3 roky:</strong> Přeošetření olejem nebo lazurou. Přebrousit 120→160 zrno, nanést 2 vrstvy.</li>
                <li><strong>Kritická místa:</strong> Spodní části sloupů u patek, řezné plochy dřeva, spoje kde se hromadí voda.</li>
                <li><strong>Hniloba:</strong> Lokální hniloba na povrchu — vyškrábat, ošetřit fungicidem, zapravit tmelem a přemalovat. Hluboká hniloba — vyměnit prvek.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Potřebuji stavební povolení na pergolu?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Pergola do 25 m² a výšky do 5 m zpravidla nevyžaduje stavební povolení, ale musí splnit odstupové vzdálenosti od hranice pozemku (min. 2 m). Pravidla se liší podle obce — vždy ověř u místního stavebního úřadu před stavbou. Pergola s nepropustnou střechou může vyžadovat ohlášení.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak dlouho trvá stavba pergoly?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Dřevěná pergola 4×3 m: příprava a kotvení patek den 1, betonování a schnutí 2 dny, montáž konstrukce den 4–5. Celkem 4–5 dní při práci 2 osob (1 člověk nestačí — nutná pomoc). Hliníková systémová pergola: 1 den montáže pro zkušeného montéra, 2 dny pro laika.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jaké dřevo je nejlepší na pergolu?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Nejodolnější je akát (bez nutnosti impregnace, vydrží 30+ let) a modřín (přirozená odolnost, krásná kresba). Levnější alternativa je impregnovaná borovice (zelená nebo hnědá impregnace) — vydrží 15–20 let s pravidelnou údržbou. Smrk bez impregnace pro venkovní použití není vhodný.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Mohu postavit pergolu u zdi domu?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ano — pergola přistavená ke zdi domu ("lean-to" design) potřebuje jen 2 volné sloupy místo 4. Ke zdi domu se připevní tzv. ledger board (vodorovná deska) do které se zapustí příčné nosníky. Pozor na odvodnění — voda nesmí stékat do zdi domu.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/pergola-postup-stavba" title="Jak postavit pergolu na terasu – dřevěná nebo hliníková 2026" />

            <section className="related-section">
              <h2>Související články</h2>
              <div className="related-grid">
                {RELATED.map((r) => (
                  <Link key={r.href} href={r.href} className="card">
                    <div className="card-eyebrow-row"><span>Zahrada & terasa</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#drevo-vs-hlinik">Dřevo vs. hliník</a></li>
                <li><a href="#planovani">Plánování a povolení</a></li>
                <li><a href="#material">Materiál a rozměry</a></li>
                <li><a href="#kotveni">Kotvení sloupů</a></li>
                <li><a href="#stavba">Stavba krok za krokem</a></li>
                <li><a href="#strecha">Střecha pergoly</a></li>
                <li><a href="#udrzba">Údržba</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/zahrada" className="sidebar-cat-link">🌿 Zahrada & terasa<span>20 článků →</span></Link>
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
