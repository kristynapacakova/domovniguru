import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak pěstovat jahody – výsadba, péče a sklizeň 2026",
  description: "Jak pěstovat jahody na záhoně, v truhlíku nebo vyvýšeném záhonu. Kdy sázet, jak hnojit, jak se zbavit slimáků a kdy sklízet. Průvodce pro začátečníky.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-pestovat-jahody" },
  openGraph: { title: "Jak pěstovat jahody 2026", description: "Výsadba, péče a sklizeň jahod – záhon, truhlík i vyvýšený záhon.", url: "https://www.domovniguru.cz/blog/jak-pestovat-jahody", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-05-01T08:00:00Z", modifiedTime: "2026-05-01T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20p%C4%9Bstovat%20jahody%20%E2%80%93%20v%C3%BDsadba%2C%20p%C3%A9%C4%8De%20a%20sklize%C5%88%202026&cat=blog", width: 1200, height: 630, alt: "Jak pěstovat jahody – výsadba, péče a sklizeň 2026" }] },
  twitter: { card: "summary_large_image", title: "Jak pěstovat jahody 2026", description: "Výsadba, péče a sklizeň jahod krok za krokem." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/jak-pestovat-jahody#article",
    "headline": "Jak pěstovat jahody – výsadba, péče a sklizeň 2026",
    "datePublished": "2026-05-01T08:00:00Z",
    "dateModified": "2026-05-01T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak pěstovat jahody", "jahody výsadba", "péče o jahody", "jahody záhon", "jahody truhlík", "kdy sázet jahody"],
    "dateModified": "2026-06-04T08:00:00Z"
  }, {
    "@type": "FAQPage",
    "@id": "https://www.domovniguru.cz/blog/jak-pestovat-jahody#faq",
    "mainEntity": [
      { "@type": "Question", "name": "Jak dlouho vydrží jahodník na záhoně?", "acceptedAnswer": { "@type": "Answer", "text": "Jedna rostlina jahodníku plodí nejlépe 2.–4. rok. Po 4–5 letech výnosy klesají a plody jsou menší. Obnov záhon každé 3–4 roky — vysaď nové sazenice (ideálně z vlastních šlahounů) na nové místo. Staré rostliny vytrhni a zakompostuj." } },
      { "@type": "Question", "name": "Proč jsou moje jahody malé a bez chuti?", "acceptedAnswer": { "@type": "Answer", "text": "Nejčastější příčiny: nedostatek slunce (min. 6 hodin denně), přehnojení dusíkem (velké listy, malé plody), příliš husté sázení, stará přestárlá rostlina (po 4+ letech), nedostatek vody v době zrání, nebo sklizení příliš brzy. Jahody musí být plně červené a snadno se odtrhávat." } },
      { "@type": "Question", "name": "Jaké odrůdy jahod doporučuješ pro začátečníky?", "acceptedAnswer": { "@type": "Answer", "text": "Pro začátečníky: Senga Sengana (klasická česká odrůda, velmi odolná), Honeoye (raná, velké plody), Elsanta (výborná chuť). Pro balkon: přeběžné odrůdy (plodí celé léto) — Elan, Albion, Seascape. Přeběžné odrůdy mají menší plody ale déle plodí." } }
    ]
  }]
};

const RELATED = [
  { title: "Jak pěstovat rajčata", href: "/blog/jak-pestovat-rajcata", read: "6 min" },
  { title: "Jak pěstovat papriky", href: "/blog/jak-pestovat-papriky", read: "5 min" },
  { title: "Jak hnojit zahradu", href: "/blog/jak-hnojit-zahradu", read: "5 min" },
  { title: "Jak kompostovat", href: "/blog/jak-kompostovat", read: "4 min" },
];

const CALENDAR = [
  { month:"Březen–duben", icon:"🌱", action:"Výsadba sazenic\nz přezimování\nRozmnožování šlahounů", color:"#5a9e6f" },
  { month:"Květen–červen", icon:"🌸", action:"Kvetení\nMulčovat\nZalévat pravidelně", color:"#f59e0b" },
  { month:"Červen–červenec", icon:"🍓", action:"Sklizeň!\nSklízet každé 2–3 dny\nHnojit po sklizni", color:"#e07040" },
  { month:"Srpen–září", icon:"🌿", action:"Rozmnožování šlahounů\nOdstranit staré listy\nSázet nové sazenice", color:"#4a90d9" },
  { month:"Říjen–listopad", icon:"🍂", action:"Mulčovat kořeny\nPoslední zálivka\nPřipravit na zimu", color:"#9b6fd4" },
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
              <span>Jak pěstovat jahody</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak pěstovat jahody – výsadba, péče a sklizeň</h1>
              <p className="article-lead">Jahody jsou nejvděčnější ovoce pro zahradu i balkon — první plody přijdou už měsíc po výsadbě a jedna rostlina vydrží 3–4 roky. Tady je vše co potřebuješ vědět.</p>
              <div className="article-meta-row"><span>Aktualizováno: 4. června 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/jak-pestovat-jahody" title="Jak pěstovat jahody – výsadba, péče a sklizeň 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 175" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="175" fill="#f0f8ec"/>
                <text x="380" y="22" textAnchor="middle" fontSize="10" fill="#3a7e4f" fontWeight="700" letterSpacing="0.04em">ROČNÍ KALENDÁŘ PĚSTOVÁNÍ JAHOD</text>
                {CALENDAR.map(({month, icon, action, color}, i) => (
                  <g key={i} transform={`translate(${20+i*148}, 28)`}>
                    <rect x="0" y="0" width="138" height="138" rx="8" fill="#fff" stroke={color} strokeWidth="1.5"/>
                    <rect x="0" y="0" width="138" height="5" rx="4" fill={color} opacity="0.6"/>
                    <text x="69" y="26" textAnchor="middle" fontSize="20">{icon}</text>
                    <text x="69" y="44" textAnchor="middle" fontSize="8.5" fill={color} fontWeight="700">{month}</text>
                    <line x1="8" y1="50" x2="130" y2="50" stroke={color} strokeWidth="0.5" opacity="0.4"/>
                    {action.split('\n').map((a,j) => (
                      <text key={j} x="69" y={66+j*16} textAnchor="middle" fontSize="8" fill="#2a2a28">{a}</text>
                    ))}
                  </g>
                ))}
                <rect y="158" width="760" height="17" fill="#d8f0d0" opacity="0.5"/>
                <text x="380" y="170" textAnchor="middle" fontSize="8" fill="#3a7e4f" fontWeight="600" letterSpacing="0.06em">🍓 SLUNÍČKO + PRAVIDELNÁ ZÁLIVKA + MULČ = BOHATÁ SKLIZEŇ · SKLÍZET KAŽDÉ 2–3 DNY</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#kde">Kde jahody pěstovat</a></li>
                <li><a href="#vysadba">Výsadba krok za krokem</a></li>
                <li><a href="#pece">Péče – zálivka, hnojení, mulčování</a></li>
                <li><a href="#problemy">Škůdci a nemoci</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="kde">
              <h2>Kde jahody pěstovat</h2>
              <ul>
                <li><strong>Záhon (nejlepší výnosy):</strong> Plné slunce min. 6 hodin denně. Dobře odvodněná půda s pH 5,5–6,5. Vyhni se místům kde předtím rostly rajčata nebo brambory (společné nemoci).</li>
                <li><strong>Vyvýšený záhon:</strong> Ideální — dobrá drenáž, teplejší půda, snadnější sklizeň bez ohýbání. Plodiny dozrávají dříve o 1–2 týdny.</li>
                <li><strong>Truhlík nebo nádoba:</strong> Min. 20–25 cm hloubka. Speciální jahodníkové vázy nebo truhlíky s otvory po stranách. Nádoby potřebují více zálivky — schnou rychleji.</li>
                <li><strong>Balkon:</strong> Jahody zvládnou balkon pokud mají min. 4–5 hodin přímého slunce. Jižní nebo jihozápadní balkon je ideální.</li>
              </ul>
            </section>

            <section id="vysadba">
              <h2>Výsadba krok za krokem</h2>
              <ul>
                <li><strong>Kdy sázet:</strong> Jaro (duben–květen) nebo léto (srpen–září). Letní výsadba = silnější rostliny a větší sklizeň příští rok. Jarní výsadba = první jahody ještě tentýž rok (ale méně).</li>
                <li><strong>Příprava půdy:</strong> Zapracuj kompost nebo zralý hnůj do hloubky 20 cm. Jahody milují živnou, propustnou půdu. Těžká jílovitá půda způsobí hnilobu kořenů.</li>
                <li><strong>Vzdálenost sazenic:</strong> 25–30 cm od sebe v řadě, 40–50 cm mezi řadami. Příliš husté sázení = menší plody, více nemocí.</li>
                <li><strong>Hloubka sázení:</strong> Srdíčko (střed, odkud vyrůstají listy) musí být přesně na úrovni půdy — ani hluboko ani vysoko. Špatná hloubka = rostlina hyne.</li>
                <li><strong>Zalít po výsadbě:</strong> Důkladně zalít a po pár dnech zkontrolovat jestli rostliny dobře zakotvily.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> V prvním roce odštipuj všechny květy u nových sazenic — rostlina investuje energii do kořenů místo plodů. Druhý rok bude sklizeň výrazně bohatší.</div>
            </section>

            <section id="pece">
              <h2>Péče – zálivka, hnojení, mulčování</h2>
              <ul>
                <li><strong>Zálivka:</strong> Pravidelně a rovnoměrně — jahody nemají rády extrémní sucho ani přemokření. V létě 2–3× týdně. Zalévej pod listy (ne na listy) — mokré listy = plíseň. Kapková závlaha je ideální.</li>
                <li><strong>Mulčování:</strong> Vrstva slány, kůry nebo speciální jahodové rohože pod rostlinami. Chrání plody před kontaktem se zemí (hniloba), udržuje vlhkost a potlačuje plevel. Tradičně se používá sláma — odtud anglicky "strawberry".</li>
                <li><strong>Hnojení:</strong> Na jaře před kvetením: hnojivo s více dusíkem (podporuje listy). Po sklizni: hnojivo s více draslíkem a fosforem (pro příští rok). Přehnojování dusíkem = velké listy, málo plodů.</li>
                <li><strong>Šlahouny:</strong> Jahody tvoří šlahouny (výběžky) které zapouštějí nové rostliny. Pokud nechceš rozmnožovat, odštipni je — rostlina investuje energii do plodů. Pokud chceš nové sazenice, nechej je zakořenit a přesaď.</li>
              </ul>
            </section>

            <section id="problemy">
              <h2>Škůdci a nemoci</h2>
              <ul>
                <li><strong>Slimáci a hlemýždi:</strong> Největší nepřítel jahod. Pelety proti slimákům (biologické nebo chemické), miska s pivem, drcená vaječná skořápka kolem záhonu. Sbírej ručně večer.</li>
                <li><strong>Šedá plíseň (Botrytis):</strong> Šedý chmýřitý povlak na plodech. Způsobuje vlhko a husté sázení. Prevence: mulčování, zálivka pod listy, dobré provětrávání.</li>
                <li><strong>Verticilichium (vadnutí):</strong> Rostliny vadnou a hynou. Přesadit na nové místo — v postižené půdě nepěstovat jahody 4 roky.</li>
                <li><strong>Ptáci:</strong> Ochranná síť nad záhonem je nejspolehlivější řešení. Lesklé pruhy nebo CD disky jako plašiče fungují krátkodobě.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Jak dlouho vydrží jahodník na záhoně?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Jedna rostlina jahodníku plodí nejlépe 2.–4. rok. Po 4–5 letech výnosy klesají a plody jsou menší. Obnov záhon každé 3–4 roky — vysaď nové sazenice (ideálně z vlastních šlahounů) na nové místo. Staré rostliny vytrhni a zakompostuj.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Proč jsou moje jahody malé a bez chuti?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Nejčastější příčiny: nedostatek slunce (min. 6 hodin denně), přehnojení dusíkem (velké listy, malé plody), příliš husté sázení, stará přestárlá rostlina (po 4+ letech), nedostatek vody v době zrání, nebo sklizeni příliš brzy. Jahody musí být plně červené a snadno se odtrhávat — ne trhnout silou.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jaké odrůdy jahod doporučuješ pro začátečníky?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Pro začátečníky: Senga Sengana (klasická česká odrůda, velmi odolná), Honeoye (raná, velké plody), Elsanta (výborná chuť, oblíbená). Pro balkon: přeběžné odrůdy (plodí celé léto) — Elan, Albion, Seascape. Přeběžné odrůdy mají menší plody ale déle plodí.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/jak-pestovat-jahody" title="Jak pěstovat jahody – výsadba, péče a sklizeň 2026" />

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
                <li><a href="#kde">Kde pěstovat</a></li>
                <li><a href="#vysadba">Výsadba</a></li>
                <li><a href="#pece">Péče</a></li>
                <li><a href="#problemy">Škůdci a nemoci</a></li>
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
