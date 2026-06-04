import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak přezimovat zahradní vodovodní přípojku – aby nezamrzla 2026",
  description: "Jak ochránit zahradní vodovodní přípojku, hadice a zahradní kohoutek před mrazem. Postup uzavření, vypuštění a přezimování závlahy na podzim.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/prezimovat-zahradni-vodu" },
  openGraph: { title: "Jak přezimovat zahradní vodu – aby nezamrzla 2026", description: "Uzavření, vypuštění a ochrana zahradní přípojky vody před mrazem.", url: "https://www.domovniguru.cz/blog/prezimovat-zahradni-vodu", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-05-01T08:00:00Z", modifiedTime: "2026-05-01T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20p%C5%99ezimovat%20zahradn%C3%AD%20vodovodn%C3%AD%20p%C5%99%C3%ADpojku%20%E2%80%93%20aby%20nezamrzla%202026&cat=blog", width: 1200, height: 630, alt: "Jak přezimovat zahradní vodovodní přípojku – aby nezamrzla 2026" }] },
  twitter: { card: "summary_large_image", title: "Jak přezimovat zahradní vodu 2026", description: "Ochrana zahradní přípojky před mrazem – postup krok za krokem." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/prezimovat-zahradni-vodu#article",
    "headline": "Jak přezimovat zahradní vodovodní přípojku – aby nezamrzla 2026",
    "datePublished": "2026-05-01T08:00:00Z",
    "dateModified": "2026-06-04T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["přezimovat zahradní vodu", "zahradní kohout mráz", "jak vypustit závlahu na zimu", "zamrznutí zahradní přípojky", "ochrana vody před mrazem zahrada"]
  }, {
    "@type": "FAQPage",
    "@id": "https://www.domovniguru.cz/blog/prezimovat-zahradni-vodu#faq",
    "mainEntity": [
      { "@type": "Question", "name": "Jak hluboko musí být zahradní přípojka aby nezamrzla?", "acceptedAnswer": { "@type": "Answer", "text": "V ČR je doporučená hloubka min. 100–120 cm pod povrchem pro trvalé potrubí. Pro sezónní zahradní přípojku (používanou jen v létě) stačí menší hloubka pokud je každý rok řádně přezimována — uzavřena, vypuštěna a odvzdušněna." } },
      { "@type": "Question", "name": "Musím přezimovat zahradní vodu každý rok?", "acceptedAnswer": { "@type": "Answer", "text": "Pokud je přípojka vedena v dostatečné hloubce (100+ cm) a není v exponovaném místě, v mírných zimách nemusí zamrznout. Ale přezimování (uzavření a vypuštění) je jednoduchá prevence která trvá 15 minut a může ušetřit tisíce korun opravy. Doporučujeme dělat ho každý rok." } },
      { "@type": "Question", "name": "Kdy mohu na jaře znovu spustit zahradní vodu?", "acceptedAnswer": { "@type": "Answer", "text": "Až nehrozí mráz — typicky polovina dubna nebo po \"ledových mužích\" (12.–15. května). Před spuštěním zkontroluj těsnost všech spojů — zimní pohyby půdy mohou uvolnit špatně zajištěné spoje. Spouštěj postupně a kontroluj jestli někde neteče." } }
    ]
  }, {
    "@type": "HowTo",
    "@id": "https://www.domovniguru.cz/blog/prezimovat-zahradni-vodu#howto",
    "name": "Jak přezimovat zahradní vodovodní přípojku – aby nezamrzla 2026",
    "description": "Jak ochránit zahradní vodovodní přípojku, hadice a zahradní kohoutek před mrazem. Postup uzavření, vypuštění a přezimování závlahy na podzim.",
    "step": [
      { "@type": "HowToStep", "name": "Postup přezimování krok za krokem", "text": "Postup přezimování krok za krokem" },
      { "@type": "HowToStep", "name": "Přezimování automatické závlahy", "text": "Přezimování automatické závlahy" },
      { "@type": "HowToStep", "name": "Co dělat když přípojka zamrzla", "text": "Co dělat když přípojka zamrzla" }
    ]
  }]
};

const RELATED = [
  { title: "Příprava domu na zimu", href: "/blog/priprava-domu-na-zimu", read: "10 min" },
  { title: "Jak zavlažovat zahradu", href: "/blog/zavlaha-zahrada-postup", read: "6 min" },
  { title: "Jak ošetřit zahradní nábytek", href: "/blog/osetrit-zahradni-nabytek", read: "5 min" },
  { title: "Jak zkontrolovat kotel před zimou", href: "/blog/zkontrolovat-kotel-pred-zimou", read: "6 min" },
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
              <span>Přezimování zahradní vody</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">🍂 Sezónní údržba</Link>
                <span className="article-read-time">⏱ 4 min čtení</span>
              </div>
              <h1 className="article-h1">Jak přezimovat zahradní vodovodní přípojku – aby nezamrzla</h1>
              <p className="article-lead">Zamrzlá zahradní přípojka praskne a oprava stojí tisíce korun. Přitom ochrana zabere 15 minut a nepotřebuješ žádné speciální nářadí.</p>
              <div className="article-meta-row"><span>Aktualizováno: 4. června 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/prezimovat-zahradni-vodu" title="Jak přezimovat zahradní vodovodní přípojku – aby nezamrzla 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 165" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="165" fill="#f0f4f8"/>
                <text x="380" y="22" textAnchor="middle" fontSize="10" fill="#4a6080" fontWeight="700" letterSpacing="0.04em">POSTUP PŘEZIMOVÁNÍ ZAHRADNÍ VODY</text>
                {[
                  { n:"1", x:20, icon:"🔒", title:"Uzavři ventil", desc:"Hlavní uzávěr\nzahradní přípojky\nvvnitř domu", color:"#e07040" },
                  { n:"2", x:170, icon:"💧", title:"Otevři kohoutek", desc:"Zahradní kohoutek\nnechej otevřený\npro odvzdušnění", color:"#4a90d9" },
                  { n:"3", x:320, icon:"🌬️", title:"Vypusť hadice", desc:"Všechny hadice\nvypustit a uložit\ndo sucha", color:"#5a9e6f" },
                  { n:"4", x:470, icon:"🧱", title:"Izoluj přípojku", desc:"Pip izolace\nnebo minerální vata\nkolem potrubí", color:"#9b6fd4" },
                  { n:"5", x:620, icon:"✅", title:"Uzavři kohoutek", desc:"Venkovní kohoutek\nuzavři aby\nnezamrzal zámek", color:"#f59e0b" },
                ].map(({n, x, icon, title, desc, color}) => (
                  <g key={n} transform={`translate(${x}, 28)`}>
                    <rect x="0" y="0" width="130" height="118" rx="8" fill="#fff" stroke={color} strokeWidth="1.2"/>
                    <circle cx="65" cy="18" r="14" fill={color} opacity="0.15"/>
                    <text x="65" y="23" textAnchor="middle" fontSize="10" fill={color} fontWeight="700">{n}</text>
                    <text x="65" y="44" textAnchor="middle" fontSize="18">{icon}</text>
                    <text x="65" y="62" textAnchor="middle" fontSize="9" fill={color} fontWeight="700">{title}</text>
                    {desc.split('\n').map((d,i) => <text key={i} x="65" y={76+i*12} textAnchor="middle" fontSize="8" fill="#4a4a40">{d}</text>)}
                  </g>
                ))}
                <rect y="148" width="760" height="17" fill="#e0eaf4" opacity="0.5"/>
                <text x="380" y="160" textAnchor="middle" fontSize="8" fill="#3a6a8a" fontWeight="600" letterSpacing="0.06em">❄️ UDĚLEJ TO PŘED PRVNÍM MRAZEM · ŘÍJEN = IDEÁLNÍ ČAS · ZAMRZNUTÍ = PRASKLÉ POTRUBÍ</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#kdy">Kdy přezimovat</a></li>
                <li><a href="#postup">Postup přezimování krok za krokem</a></li>
                <li><a href="#zavlaha">Přezimování automatické závlahy</a></li>
                <li><a href="#zamrza">Co dělat když přípojka zamrzla</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="kdy">
              <h2>Kdy přezimovat zahradní vodu</h2>
              <ul>
                <li><strong>Termín: říjen, nejpozději před prvním mrazem.</strong> V ČR bývají první mrazy v říjnu nebo listopadu. Nečekej na první mráz — příprava musí proběhnout dříve.</li>
                <li><strong>Teplotní hranice:</strong> Voda zamrzá při 0 °C. Ale potrubí v zemi zamrzá při opakovaných mrazech pod −5 °C, zejména pokud potrubí není dostatečně hluboko (min. 80–100 cm pod povrchem).</li>
                <li><strong>Mělké potrubí je nejrizikovější:</strong> Zahradní přípojky jsou často vedeny jen 30–50 cm pod zemí — to nestačí. Přezimování je u nich nutné.</li>
              </ul>
            </section>

            <section id="postup">
              <h2>Postup přezimování krok za krokem</h2>
              <ul>
                <li><strong>Krok 1 — Uzavři hlavní ventil:</strong> Najdi uzávěr zahradní přípojky uvnitř domu nebo v technické místnosti. Uzavři ho.</li>
                <li><strong>Krok 2 — Otevři zahradní kohoutek:</strong> Otevři venkovní kohoutek aby voda z potrubí mohla odtéct a vzduch mohl dovnitř. Nechej otevřený dokud neodteče veškerá voda.</li>
                <li><strong>Krok 3 — Odstraň a ulož hadice:</strong> Odpoj všechny zahradní hadice, přelij je, sroluj a ulož do sucha. Hadice s vodou při zamrznutí praskají.</li>
                <li><strong>Krok 4 — Izoluj exponované části potrubí:</strong> Pokud je část potrubí nad zemí nebo v nechráněném prostoru, obal minerální vatou nebo speciální trubkovou izolací.</li>
                <li><strong>Krok 5 — Závěrečná kontrola:</strong> Uzavři venkovní kohoutek. Zkontroluj jestli z potrubí netěká voda.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud má tvůj zahradní kohoutek odvodňovací funkci (kohoutek s odvodňovačem), po uzavření ventilu uvnitř automaticky odteče zbytek vody z přípojky. Tyto kohoutky jsou nejlepší volba pro zahrady.</div>
            </section>

            <section id="zavlaha">
              <h2>Přezimování automatické závlahy</h2>
              <ul>
                <li><strong>Uzavři přívod vody:</strong> Stejný princip — uzavřít hlavní ventil závlahy uvnitř domu.</li>
                <li><strong>Vyfoukání vzduchem:</strong> Profesionální postup — kompresorem vyfoukni vzduch celým systémem závlahy. Každou sekci 2–3× po 30 sekundách. Bez kompresoru voda v trubkách zamrzne a prasknou.</li>
                <li><strong>Zavři řídicí jednotku:</strong> Nastav řídicí jednotku zavlahy do "zimního režimu" nebo ji úplně odpoj.</li>
                <li><strong>Hlavy postřikovačů:</strong> Zasuchovací hlavy postřikovačů schovat pod zem — při sněžení je sníh nepoškodí.</li>
              </ul>
            </section>

            <section id="zamrza">
              <h2>Co dělat když přípojka zamrzla</h2>
              <ul>
                <li><strong>Nepoužívej přímý oheň:</strong> Plynový hořák nebo vařič na rozmrazení trubky může způsobit prasknutí nebo požár.</li>
                <li><strong>Teplá voda nebo teplovzdušná pistole:</strong> Pomalu zahřívej zamrzlé místo teplou vodou nebo teplovzdušnou pistolí na nízký výkon. Začni od kohoutku směrem k zamrzlému místu.</li>
                <li><strong>Topný kabel:</strong> Speciální topný kabel na potrubí rozmrazí i hlubší zamrznutí. Prodává se v hobbymarketech (400–1 200 Kč).</li>
                <li><strong>Pokud potrubí prasklo:</strong> Okamžitě uzavři hlavní vodu, zavolej instalatéra. Prasklé potrubí oprav co nejdříve — voda poškodí okolní stavební konstrukce.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Jak hluboko musí být zahradní přípojka aby nezamrzla?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">V ČR je doporučená hloubka min. 100–120 cm pod povrchem pro trvalé potrubí. Pro sezónní zahradní přípojku (používanou jen v létě) stačí menší hloubka pokud je každý rok řádně přezimována — uzavřena, vypuštěna a odvzdušněna.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Musím přezimovat zahradní vodu každý rok?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Pokud je přípojka vedena v dostatečné hloubce (100+ cm) a není v exponovaném místě, v mírných zimách nemusí zamrznout. Ale přezimování (uzavření a vypuštění) je jednoduchá prevence která trvá 15 minut a může ušetřit tisíce korun opravy. Doporučujeme dělat ho každý rok.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Kdy mohu na jaře znovu spustit zahradní vodu?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Až nehrozí mráz — typicky polovina dubna nebo po "ledových mužích" (12.–15. května). Před spuštěním zkontroluj těsnost všech spojů — zimní pohyby půdy mohou uvolnit špatně zajištěné spoje. Spouštěj postupně a kontroluj jestli někde neteče.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/prezimovat-zahradni-vodu" title="Jak přezimovat zahradní vodovodní přípojku – aby nezamrzla 2026" />

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
                <li><a href="#kdy">Kdy přezimovat</a></li>
                <li><a href="#postup">Postup krok za krokem</a></li>
                <li><a href="#zavlaha">Automatická závlaha</a></li>
                <li><a href="#zamrza">Když přípojka zamrzla</a></li>
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
