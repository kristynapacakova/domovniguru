import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak zavlažovat zahradu – ruční i automatická závlaha 2026",
  description: "Jak správně zavlažovat zahradu, trávník a záhony. Ruční zalévání nebo automatická závlaha? Kdy a kolik zalévat – praktický průvodce bez zbytečného plýtvání vodou.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/zavlaha-zahrada-postup" },
  openGraph: { title: "Jak zavlažovat zahradu – ruční i automatická závlaha 2026", description: "Kdy, kolik a jak zavlažovat zahradu. Ruční nebo automatická závlaha – co se vyplatí.", url: "https://www.domovniguru.cz/blog/zavlaha-zahrada-postup", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-22T08:00:00Z", modifiedTime: "2026-04-22T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak zavlažovat zahradu 2026", description: "Kdy, kolik a jak zavlažovat zahradu – ruční nebo automatická závlaha." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/zavlaha-zahrada-postup#article",
    "headline": "Jak zavlažovat zahradu – ruční i automatická závlaha 2026",
    "datePublished": "2026-04-22T08:00:00Z",
    "dateModified": "2026-04-22T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak zavlažovat zahradu", "automatická závlaha zahrada", "zavlažování trávníku", "kapková závlaha", "kdy zalévat zahradu", "závlaha postup"]
  }]
};

const RELATED = [
  { title: "Jak správně zalévat zahradu", href: "/blog/jak-spravne-zalevat", read: "5 min" },
  { title: "Jak připravit zahradu na jaro", href: "/blog/jarni-zahrada", read: "7 min" },
  { title: "Jak hnojit zahradu", href: "/blog/jak-hnojit-zahradu", read: "6 min" },
  { title: "Jak postavit vyvýšený záhon", href: "/blog/vyvyseny-zahon-postup", read: "6 min" },
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
              <span>Závlaha zahrady</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak zavlažovat zahradu – ruční i automatická závlaha</h1>
              <p className="article-lead">Špatné zalévání zabije rostliny stejně spolehlivě jako sucho. Příliš mnoho vody = hniloba kořenů, příliš málo = stres a slabý růst. Tady je jak zalévat správně — a jestli se automatická závlaha vyplatí.</p>
              <div className="article-meta-row"><span>Aktualizováno: 22. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/zavlaha-zahrada-postup" title="Jak zavlažovat zahradu – ruční i automatická závlaha 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 190" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="190" fill="#f0f8ec"/>

                {/* Typy závlah */}
                {[
                  { x:20, icon:"🪣", name:"Ruční zalévání", pros:"Levné, přesné", cons:"Časově náročné", best:"Záhony, nádoby", color:"#4a90d9" },
                  { x:210, icon:"💦", name:"Postřikovač", pros:"Velké plochy rychle", cons:"Plýtvání vodou", best:"Trávník", color:"#5a9e6f" },
                  { x:400, icon:"💧", name:"Kapková závlaha", pros:"Úspora 50 % vody", cons:"Instalace", best:"Záhony, stromy", color:"#f59e0b" },
                  { x:590, icon:"🤖", name:"Automatická závlaha", pros:"Bez práce, časovač", cons:"Cena 5–30 tis. Kč", best:"Velké zahrady", color:"#9b6fd4" },
                ].map(({x, icon, name, pros, cons, best, color}) => (
                  <g key={x} transform={`translate(${x}, 15)`}>
                    <rect x="0" y="0" width="165" height="160" rx="8" fill="#fff" stroke={color} strokeWidth="1.2"/>
                    <text x="82" y="38" textAnchor="middle" fontSize="24">{icon}</text>
                    <text x="82" y="58" textAnchor="middle" fontSize="10" fill={color} fontWeight="700">{name}</text>
                    <line x1="12" y1="65" x2="153" y2="65" stroke={color} strokeWidth="0.5" opacity="0.4"/>
                    <text x="12" y="80" fontSize="8.5" fill="#3a7e4f">✓ {pros}</text>
                    <text x="12" y="95" fontSize="8.5" fill="#e07040">✗ {cons}</text>
                    <rect x="8" y="115" width="149" height="32" rx="5" fill={color} opacity="0.08"/>
                    <text x="82" y="128" textAnchor="middle" fontSize="7.5" fill={color} fontWeight="600">Nejlepší pro:</text>
                    <text x="82" y="140" textAnchor="middle" fontSize="8" fill={color}>{best}</text>
                  </g>
                ))}

                <rect y="173" width="760" height="17" fill="#d8f0d0" opacity="0.5"/>
                <text x="380" y="185" textAnchor="middle" fontSize="8" fill="#3a7e4f" fontWeight="600" letterSpacing="0.06em">💧 ZLATÉ PRAVIDLO: MÉNĚ ČASTĚJI NESTAČÍ · ZALÉVEJ MÉNĚ ČASTO ALE DŮKLADNĚ</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#kdy">Kdy a jak často zalévat</a></li>
                <li><a href="#travnik">Zavlažování trávníku</a></li>
                <li><a href="#zahony">Závlaha záhonů a zeleniny</a></li>
                <li><a href="#kapkova">Kapková závlaha – instalace</a></li>
                <li><a href="#automaticka">Automatická závlaha – vyplatí se?</a></li>
                <li><a href="#chyby">Nejčastější chyby při zalévání</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="kdy">
              <h2>Kdy a jak často zalévat</h2>
              <p>Načasování zalévání je stejně důležité jako množství vody. Špatný čas může způsobit spálení listů nebo plísňové nemoci.</p>
              <ul>
                <li><strong>Nejlepší čas: ráno (6–9 hodin).</strong> Voda se vstřebá před poledním teplem, listy stihnou oschnout před nocí (méně plísní). Nejefektivnější využití vody.</li>
                <li><strong>Přijatelné: večer (po 18 hodin).</strong> Voda se neodpaří, ale mokré listy přes noc podporují plísňové nemoci. Vyhni se zalévání na listy — zaléváš pouze ke kořenům.</li>
                <li><strong>Vyvarovat se: v poledne.</strong> Až 40 % vody se okamžitě odpaří. Studená voda na rozpálenou půdu může způsobit teplotní šok kořenů.</li>
                <li><strong>Test půdy před zalíváním:</strong> Zastrč prst 5 cm do půdy. Pokud je vlhká — nézalívej. Pokud suchá — zaléváme. Nebo použij vlhkoměr půdy (200–500 Kč).</li>
              </ul>
              <div className="article-tip"><strong>💡 Zlaté pravidlo:</strong> Zaléváš méně často ale důkladně — voda musí proniknout 15–20 cm hluboko ke kořenům. Každodenní mělká zálivka způsobuje povrchové kořenění a slabé rostliny.</div>
            </section>

            <section id="travnik">
              <h2>Zavlažování trávníku</h2>
              <ul>
                <li><strong>Frekvence:</strong> 1–2× týdně, ne každý den. Každodenní zalévání trochu = plytké kořeny = trávník špatně snáší sucho.</li>
                <li><strong>Množství:</strong> 20–30 litrů na m² při každé zálivce. Postřikovač nechej na místě 30–45 minut.</li>
                <li><strong>Test hloubky promočení:</strong> Po zalití zastrč tyč nebo šroubovák do trávníku — měl by jít snadno 15 cm hluboko. Pokud ne, zaléváš málo nebo mělce.</li>
                <li><strong>Postřikovač vs. závlaha:</strong> Postřikovač je nejrychlejší pro velké plochy. Pro úsporu vody a menší plísňové riziko je lepší kapková závlaha vedle trávníku.</li>
                <li><strong>Symptomy nedostatku vody:</strong> Trávník ztrácí pružnost (šlápnutí zanechá stopu), listí se stáčí, barva přechází do šedavě zelené.</li>
              </ul>
            </section>

            <section id="zahony">
              <h2>Závlaha záhonů a zeleniny</h2>
              <ul>
                <li><strong>Zelenina (rajčata, okurky, papriky):</strong> 2–3× týdně, důkladně. Rajčata nesnáší nestejnoměrné zalévání — způsobuje praskání plodů. Zalévej vždy ke kořenům, ne na listy.</li>
                <li><strong>Listová zelenina (salát, špenát):</strong> Každý druhý den, mělčeji (kořeny sahají jen 10–15 cm). V horkém létě denně.</li>
                <li><strong>Stromy a keře:</strong> 1× týdně vydatně — voda musí proniknout 30–40 cm. Mladé stromy (do 3 let) potřebují více péče než zapěstované.</li>
                <li><strong>Mulčování:</strong> Vrstva mulče (kůra, sláma, tráva) 5–10 cm kolem rostlin sníží odpařování o 50–70 % a výrazně sníží frekvenci zalévání.</li>
              </ul>
            </section>

            <section id="kapkova">
              <h2>Kapková závlaha – instalace a výhody</h2>
              <p>Kapková závlaha přivádí vodu přímo ke kořenům každé rostliny. Oproti postřikovači ušetří 40–60 % vody a výrazně snižuje výskyt plísňových chorob.</p>
              <ul>
                <li><strong>Co potřebuješ:</strong> Hlavní hadice (16 mm), kapkovače nebo mikro-postřikovače, kolíky na uchycení, redukce na vodovodní kohout. Sada pro záhon 10 m² stojí 500–1 500 Kč.</li>
                <li><strong>Instalace:</strong> Hlavní hadici veď podél záhonu, z ní odboč drobnými hadicemi ke každé rostlině. Kapkovač umísti 10–15 cm od kmínku. Bez lepení — vše se propichuje nebo spojuje konektory.</li>
                <li><strong>S časovačem:</strong> Přidej mechanický nebo digitální časovač na kohout (200–800 Kč) — závlaha se spustí automaticky bez tebe.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Kapková závlaha s časovačem je nejlepší investice pro zahrádkáře kteří jezdí na dovolenou — záhon přežije bez tebe i 2–3 týdny.</div>
            </section>

            <section id="automaticka">
              <h2>Automatická závlaha – vyplatí se?</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ</th><th>Cena (materiál)</th><th>Instalace</th><th>Vhodné pro</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Kapkovka s časovačem (DIY)</strong></td><td>1 000–3 000 Kč</td><td>Sam, 2–4 hodiny</td><td>Záhony, balkony</td></tr>
                    <tr><td><strong>Povrchová automatická závlaha</strong></td><td>5 000–15 000 Kč</td><td>Částečně sám</td><td>Zahrada do 200 m²</td></tr>
                    <tr><td><strong>Podzemní závlaha (profesionální)</strong></td><td>15 000–50 000 Kč</td><td>Zahradní firma</td><td>Velké zahrady, trávník</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Automatická závlaha se vyplatí pokud trávíš hodně času zalíváním, cestuješ nebo máš zahradu nad 100 m². Návratnost je 3–7 let v úspoře vody a práce.</p>
            </section>

            <section id="chyby">
              <h2>Nejčastější chyby při zalévání</h2>
              <ul>
                <li><strong>Zalévání na listy v poledne:</strong> Vodní kapky fungují jako čočky a spalují listy. Zaléváš vždy ke kořenům a ideálně ráno.</li>
                <li><strong>Každodenní mělká zálivka:</strong> Rostliny si zvyknou na povrchovou vlhkost a nevyvinou hluboké kořeny. Pak první sucho způsobí stres.</li>
                <li><strong>Zalévání studenou vodou z kohoutku v horku:</strong> Teplotní rozdíl může šokovat kořeny. Nechej vodu v konvi zahřát na vzduch nebo použij načerpanou dešťovou vodu.</li>
                <li><strong>Zalévání bez ohledu na déšť:</strong> Po dešti nepotřebuješ zalévat — zkontroluj půdu. Automatická závlaha bez čidla deště plýtvá vodou.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Kolik litrů vody potřebuje zahrada denně?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Záleží na typu rostlin a počasí. Trávník: 20–30 l/m² za týden. Zelenina: 10–20 l/m² za týden. Stromy: 30–50 l za zálivku. V horkém létě (nad 30 °C) potřeba stoupá o 50 %. Nejspolehlivější je test půdy prstem nebo vlhkoměrem.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Je lepší dešťová nebo vodovodní voda?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Dešťová voda je pro rostliny lepší — má přirozené pH, neobsahuje chlor a je teplejší než vodovodní voda. Pokud máš možnost sbírat dešťovku do sudu, rozhodně to doporučujeme. Sníží i spotřebu vody a účet za vodné.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak poznat že zahradu zaléváme příliš?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Příznaky přezalití: žloutnoucí listy (i přes dostatek světla), hniloba kořenů, plesnivá půda, opadávání listů. Půda by mezi zálivkami měla mírně oschnout — stále vlhká půda bez přestávky signalizuje přezalití.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/zavlaha-zahrada-postup" title="Jak zavlažovat zahradu – ruční i automatická závlaha 2026" />

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
                <li><a href="#kdy">Kdy a jak často zalévat</a></li>
                <li><a href="#travnik">Trávník</a></li>
                <li><a href="#zahony">Záhony a zelenina</a></li>
                <li><a href="#kapkova">Kapková závlaha</a></li>
                <li><a href="#automaticka">Automatická závlaha</a></li>
                <li><a href="#chyby">Nejčastější chyby</a></li>
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
