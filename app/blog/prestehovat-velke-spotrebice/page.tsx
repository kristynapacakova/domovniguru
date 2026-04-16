import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak přestěhovat velké spotřebiče – lednička, pračka, myčka 2026",
  description: "Bezpečné stěhování ledničky, pračky a myčky. Jak vyprázdnit, odpojit, zabalit a transportovat velké spotřebiče bez poškození – postup krok za krokem.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/prestehovat-velke-spotrebice" },
  openGraph: { title: "Jak přestěhovat velké spotřebiče 2026", description: "Lednička, pračka, myčka – jak bezpečně odpojit, zabalit a přestěhovat.", url: "https://www.domovniguru.cz/blog/prestehovat-velke-spotrebice", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-16T08:00:00Z", modifiedTime: "2026-04-16T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak přestěhovat velké spotřebiče 2026", description: "Lednička, pračka, myčka – jak bezpečně odpojit a přestěhovat." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/prestehovat-velke-spotrebice#article",
    "headline": "Jak přestěhovat velké spotřebiče – lednička, pračka, myčka 2026",
    "datePublished": "2026-04-16T08:00:00Z",
    "dateModified": "2026-04-16T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak přestěhovat ledničku", "stěhování pračky", "přeprava velké spotřebiče", "jak odpojit pračku", "stěhování myčky", "přesun ledničky postup"]
  }]
};

const RELATED = [
  { title: "Stěhování bez stresu – kompletní checklist", href: "/blog/stehovani-checklist", read: "5 min" },
  { title: "Jak se zbavit starého nábytku", href: "/blog/zbavit-se-stareho-nabytku", read: "4 min" },
  { title: "Jak správně zabalit věci při stěhování", href: "/blog/spravne-zabalit-veci", read: "4 min" },
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
              <span>Stěhování spotřebičů</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏠 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak přestěhovat velké spotřebiče – lednička, pračka, myčka</h1>
              <p className="article-lead">Špatně přestěhovaná lednička nebo pračka může přijít draho — poškozený kompresor, voda v motoru nebo prasknutá hadice. Správná příprava před stěhováním trvá hodinu a ušetří tisíce.</p>
              <div className="article-meta-row"><span>Aktualizováno: 16. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/prestehovat-velke-spotrebice" title="Jak přestěhovat velké spotřebiče – lednička, pračka, myčka 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 185" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="185" fill="#f4f8fc"/>
                {[
                  { x:20, icon:"🧊", name:"LEDNIČKA", rules:["Vypnout 24h před stěhováním","Odmrazit a vysušit","Přepravovat SVISLE","Nechat stát 4h před zapnutím"], color:"#4a90d9" },
                  { x:210, icon:"🫧", name:"PRAČKA", rules:["Odčerpat zbylou vodu","Zajistit buben (transport.šrouby)","Odpojit přívod i odpad","Přepravovat svisle"], color:"#5a9e6f" },
                  { x:400, icon:"🍽️", name:"MYČKA", rules:["Vyprázdnit a vysušit","Odpojit přívod a odpad","Přepravovat svisle","Hadice uložit dovnitř"], color:"#9b6fd4" },
                  { x:590, icon:"🔥", name:"SPORÁK/TROUBA", rules:["Odpojit elektro nebo plyn","Plyn = jen plynař!","Chytit mřížky a plechy","Přepravovat opatrně"], color:"#e07040" },
                ].map(({x, icon, name, rules, color}) => (
                  <g key={x} transform={`translate(${x}, 12)`}>
                    <rect x="0" y="0" width="170" height="162" rx="8" fill="#fff" stroke={color} strokeWidth="1.2"/>
                    <text x="85" y="32" textAnchor="middle" fontSize="22">{icon}</text>
                    <text x="85" y="52" textAnchor="middle" fontSize="10" fill={color} fontWeight="700">{name}</text>
                    <line x1="15" y1="58" x2="155" y2="58" stroke={color} strokeWidth="0.5" opacity="0.4"/>
                    {rules.map((rule, i) => (
                      <g key={i} transform={`translate(12, ${66+i*22})`}>
                        <text x="0" y="10" fontSize="8.5" fill="#3a3a30">· {rule}</text>
                      </g>
                    ))}
                  </g>
                ))}
                <rect y="168" width="760" height="17" fill="#e8f0f8" opacity="0.5"/>
                <text x="380" y="180" textAnchor="middle" fontSize="8" fill="#3a6a8a" fontWeight="600" letterSpacing="0.06em">⚠️ LEDNIČKA SVISLE VŽDY · PRAČKA BEZ VODY · PLYN POUZE PLYNAŘ</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#lednicka">Lednička a mraznička</a></li>
                <li><a href="#pracka">Pračka</a></li>
                <li><a href="#mycka">Myčka nádobí</a></li>
                <li><a href="#sporak">Sporák a trouba</a></li>
                <li><a href="#transport">Přeprava a transport</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="lednicka">
              <h2>Lednička a mraznička – nejcitlivější spotřebič</h2>
              <p>Lednička je nejnáchylnější na nesprávné stěhování — poškozený kompresor nebo chladicí okruh je neopravitelný a znamená novou ledničku.</p>
              <ul>
                <li><strong>24 hodin před stěhováním:</strong> Vypni ledničku, vyjmi veškeré potraviny. Nechej rozmrznout — odmrazit mrazák je nutné pro vysušení.</li>
                <li><strong>Před nakládkou:</strong> Vysuš vnitřek hadrem, vyjmi a ulož skleněné police a zásobníky zvlášť (zabal do novinového papíru). Přilep dveře lepicí páskou aby se neotevíraly.</li>
                <li><strong>Přeprava VŽDY svisle:</strong> Lednička nesmí být přepravována na boku ani nakloněna — olej z kompresoru by zatekl do chladicích trubic. Pokud musela ležet, nechej stát vzpřímeně min. 4–6 hodin před zapnutím.</li>
                <li><strong>Po přestěhování:</strong> Počkej 4–6 hodin (ideálně přes noc) a teprve pak zapni. Olej se musí vrátit do kompresoru.</li>
              </ul>
              <div className="article-tip"><strong>⚠️ Kritické:</strong> Ledničku nikdy nepřepravuj na boku. Pokud to nelze jinak, nechej ji stát 24 hodin po dopravení před zapnutím.</div>
            </section>

            <section id="pracka">
              <h2>Pračka – transportní šrouby jsou klíčové</h2>
              <ul>
                <li><strong>Den před stěhováním:</strong> Spusť krátký program na vyprázdnění (nebo program vypouštění). Odpoj přívod vody (kohout za pračkou) a odpadní hadici — vypusť zbylou vodu do vědra.</li>
                <li><strong>Transportní šrouby (nejdůležitější!):</strong> Každá pračka má transportní šrouby které zablokují buben pro přepravu. Bez nich se buben volně pohybuje a poškodí ložiska. Šrouby jsou součástí dodávky pračky nebo je koupíš v servisu. Šrouby jsou zpravidla 3–4 červené nebo žluté šrouby vzadu.</li>
                <li><strong>Přeprava:</strong> Svisle, bez náklonu. Hadice ulož do bubnu nebo zabal zvlášť.</li>
                <li><strong>Po přestěhování:</strong> VYJMI transportní šrouby před prvním spuštěním — zapomenutí způsobí okamžité poškození ložisek.</li>
              </ul>
            </section>

            <section id="mycka">
              <h2>Myčka nádobí</h2>
              <ul>
                <li><strong>Před stěhováním:</strong> Vypusť veškerou vodu (spusť program nebo manuálně vyčerpej). Vysuš vnitřek, vyjmi koše a filtr.</li>
                <li><strong>Odpojení:</strong> Uzavři přívod vody, odpoj přívod i odpadní hadici. Hadice ulož do myčky aby se nepokroutily.</li>
                <li><strong>Přeprava:</strong> Svisle. Myčka je náchylnější na poškození při transportu na boku než pračka.</li>
              </ul>
            </section>

            <section id="sporak">
              <h2>Sporák, trouba a plynové spotřebiče</h2>
              <ul>
                <li><strong>Elektrický sporák:</strong> Odpoj ze zásuvky nebo požádej elektrikáře o odpojení od pevného přívodu. Vyjmi rošty a plechy, zabal je zvlášť.</li>
                <li><strong>Plynový sporák:</strong> Uzavři přívod plynu. Odpojení plynového spotřebiče musí provést certifikovaný plynař — nikdy sám. Nezapomeň na uzavírací ventil za sporákem.</li>
                <li><strong>Vestavná trouba:</strong> Vestavné spotřebiče jsou pevně zakotveny — jejich vyjmutí může být složité. Postup závisí na konkrétním modelu, viz návod výrobce.</li>
              </ul>
              <div className="article-tip"><strong>⚠️ Plyn = plynař!</strong> Odpojování plynových spotřebičů bez certifikace je nebezpečné a nelegální. Vždy kontaktuj certifikovaného plynaře.</div>
            </section>

            <section id="transport">
              <h2>Přeprava a transport – praktické tipy</h2>
              <ul>
                <li><strong>Vždy dvě osoby minimum:</strong> Velké spotřebiče jsou těžké (50–100 kg) a neohrabané. Jedna osoba nestačí a hrozí zranění nebo poškození spotřebiče.</li>
                <li><strong>Rudl (vozík na těžká břemena):</strong> Pronájem nebo koupě 500–1 500 Kč — nezbytný pro transport bez poškození zad a podlahy.</li>
                <li><strong>Ochrana podlahy:</strong> Při posunutí spotřebiče přes podlahu vlož pod rohy lepenku nebo přeložený karton — zabrání škrábání dlažby nebo vinylu.</li>
                <li><strong>Přepravní auto:</strong> Spotřebiče přepravuj svisle v uzavřeném voze. Překryvná deka nebo polystyrén zabrání poškrábání povrchu.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Mohu přepravovat ledničku na boku?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ideálně ne. Pokud to nelze jinak (nízký strop dodávky), přepravuj ji nakloněnou maximálně 45° na stranu kde je kompresor nahoře. Po přestěhování nechej stát svisle 24 hodin před zapnutím — olej se musí vrátit z chladicích trubic do kompresoru. Ležení na boku zkracuje životnost kompresoru.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Kde najdu transportní šrouby pro pračku?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Transportní šrouby jsou přiloženy v originálním balení pračky — zpravidla v sáčku spolu s návodem. Pokud jsi je ztratil, objednej je u výrobce nebo v autorizovaném servisu pračky (cena 100–300 Kč za sadu). Šrouby jsou specifické pro každý model — bez správného modelu pračky je nepůjde objednat.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Vyplatí se pořídit stěhování spotřebičů přes stěhování firmu?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Pro přesun přes více pater nebo vzdálenost nad 50 km ano — profesionální stěhovací firma má rudly, ochranné materiály a zkušenosti. Cena za přesun spotřebiče: 500–1 500 Kč za kus. Sám ušetříš peníze ale potřebuješ alespoň 2 silné pomocníky a vhodné vozidlo.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/prestehovat-velke-spotrebice" title="Jak přestěhovat velké spotřebiče – lednička, pračka, myčka 2026" />

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
                <li><a href="#lednicka">Lednička</a></li>
                <li><a href="#pracka">Pračka</a></li>
                <li><a href="#mycka">Myčka</a></li>
                <li><a href="#sporak">Sporák a plyn</a></li>
                <li><a href="#transport">Transport</a></li>
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
