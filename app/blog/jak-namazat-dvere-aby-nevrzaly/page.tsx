import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak namazat dveře aby nevrzaly – čím a jak na to 2026",
  description: "Jak odstranit vrzání dveří rychle a natrvalo. Čím namazat závěsy a pantové dveře, co způsobuje vrzání a kdy je čas na výměnu závěsů.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-namazat-dvere-aby-nevrzaly" },
  openGraph: { title: "Jak namazat dveře aby nevrzaly 2026", description: "Čím namazat vrzající dveře a jak to udělat rychle a natrvalo.", url: "https://www.domovniguru.cz/blog/jak-namazat-dvere-aby-nevrzaly", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-05-01T08:00:00Z", modifiedTime: "2026-05-01T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20namazat%20dve%C5%99e%20aby%20nevrzaly%20%E2%80%93%20%C4%8D%C3%ADm%20a%20jak%20na%20to%202026&cat=blog", width: 1200, height: 630, alt: "Jak namazat dveře aby nevrzaly – čím a jak na to 2026" }] },
  twitter: { card: "summary_large_image", title: "Jak namazat dveře aby nevrzaly 2026", description: "Čím namazat závěsy a jak se zbavit vrzání dveří." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/jak-namazat-dvere-aby-nevrzaly#article",
    "headline": "Jak namazat dveře aby nevrzaly – čím a jak na to 2026",
    "datePublished": "2026-05-01T08:00:00Z",
    "dateModified": "2026-05-01T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak namazat dveře", "vrzající dveře", "čím namazat závěsy dveří", "jak odstranit vrzání dveří", "WD-40 dveře závěsy"]
  }]
};

const RELATED = [
  { title: "Jak vyměnit staré dveře", href: "/blog/vymenit-stare-dvere", read: "7 min" },
  { title: "Jak opravit škrábance a díry ve zdi", href: "/blog/opravit-skrabance-diry-ve-zdi", read: "5 min" },
  { title: "Jak naplánovat rekonstrukci bytu", href: "/blog/planovani-rekonstrukce-bytu", read: "8 min" },
  { title: "Jak najít a prověřit řemeslníka", href: "/blog/najit-proveri-remeslnika", read: "5 min" },
];

const LUBRICANTS = [
  { name:"WD-40", best:"Rychlé řešení\nOdrezí a uvolní", limit:"Krátkodobé – 1–3 měsíce\nPak znovu vrže", color:"#f59e0b" },
  { name:"Silikonový sprej", best:"Nejlepší pro\nplastové a gumové\ndíly. Dlouhotrvající.", limit:"Méně vhodný\nna kovové závěsy\nbez gumových dílů", color:"#4a90d9" },
  { name:"Grafitový prášek", best:"Nejlepší pro\nkovové závěsy\nDlouhotrvající", limit:"Zanechá černé\nstopy – opatrně", color:"#4a4a40" },
  { name:"Vazelína", best:"Dostupná a levná\nDlohotrvající\nNe elektricky", limit:"Přitahuje prach\na nečistoty", color:"#9b6fd4" },
  { name:"Olivový olej\n(nouze)", best:"Máš doma ihned\nFunguje krátkodobě", limit:"Žlukne a zapáchá\npo čase", color:"#5a9e6f" },
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
              <span>Vrzající dveře</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏠 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 4 min čtení</span>
              </div>
              <h1 className="article-h1">Jak namazat dveře aby nevrzaly – čím a jak na to</h1>
              <p className="article-lead">Vrzající dveře jsou otravné ale snadná oprava — trvá 5 minut a přípravek za pár desítek korun máš doma nebo ho koupíš v každém hobbymarketu. Tady je co přesně použít.</p>
              <div className="article-meta-row"><span>Aktualizováno: 1. května 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/jak-namazat-dvere-aby-nevrzaly" title="Jak namazat dveře aby nevrzaly – čím a jak na to 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 175" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="175" fill="#f8f6f2"/>
                <text x="380" y="22" textAnchor="middle" fontSize="10" fill="#6a6050" fontWeight="700" letterSpacing="0.04em">ČÍM NAMAZAT ZÁVĚSY – SROVNÁNÍ MAZIV</text>
                {LUBRICANTS.map(({name, best, limit, color}, i) => (
                  <g key={i} transform={`translate(${20+i*148}, 28)`}>
                    <rect x="0" y="0" width="138" height="140" rx="8" fill="#fff" stroke={color} strokeWidth="1.5"/>
                    <rect x="0" y="0" width="138" height="5" rx="4" fill={color} opacity="0.6"/>
                    {name.split('\n').map((n,j) => <text key={j} x="69" y={20+j*14} textAnchor="middle" fontSize="10" fill={color} fontWeight="700">{n}</text>)}
                    <line x1="8" y1="36" x2="130" y2="36" stroke={color} strokeWidth="0.5" opacity="0.4"/>
                    {best.split('\n').map((b,j) => <text key={j} x="8" y={50+j*13} fontSize="8" fill="#3a7e4f">✓ {b}</text>)}
                    <line x1="8" y1="95" x2="130" y2="95" stroke="#e0dcd8" strokeWidth="0.5"/>
                    {limit.split('\n').map((l,j) => <text key={j} x="8" y={108+j*13} fontSize="8" fill="#e07040">✗ {l}</text>)}
                  </g>
                ))}
                <rect y="158" width="760" height="17" fill="#f0ece8" opacity="0.5"/>
                <text x="380" y="170" textAnchor="middle" fontSize="8" fill="#8a7050" fontWeight="600" letterSpacing="0.06em">🔧 GRAFITOVÝ PRÁŠEK = NEJLEPŠÍ PRO ZÁVĚSY · WD-40 = RYCHLÉ ALE KRÁTKODOBÉ</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#pricina">Co způsobuje vrzání</a></li>
                <li><a href="#cim">Čím namazat – přehled maziv</a></li>
                <li><a href="#postup">Postup mazání krok za krokem</a></li>
                <li><a href="#kdyz-nestaci">Když mazání nestačí</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="pricina">
              <h2>Co způsobuje vrzání dveří</h2>
              <ul>
                <li><strong>Suchý závěs (nejčastější):</strong> Čep závěsu a objímka jsou kovový kontakt bez mazání. Rez a nečistoty způsobují tření = vrzání. Řešení: mazivo.</li>
                <li><strong>Deformace dřeva:</strong> Dřevěné dveře bobtnají při vlhkosti. Dveře se pak třou o zárubeň. Řešení: přebrousit hranu nebo přestavit závěsy.</li>
                <li><strong>Uvolněné závěsy:</strong> Uvolněný šroub způsobuje mikroposun dveří. Při každém otevření skřípe kování. Řešení: dotáhnout šrouby závěsů.</li>
                <li><strong>Rez na závěsu:</strong> Starý rezavý závěs vrzá i po namazání. Řešení: vyměnit závěs.</li>
              </ul>
            </section>

            <section id="cim">
              <h2>Čím namazat závěsy – přehled maziv</h2>
              <ul>
                <li><strong>Grafitový prášek (nejlepší):</strong> Speciální suché mazivo pro kovové závěsy. Nevlhne, nepřitahuje prach, dlouhotrvající. Nanes na čep závěsu a otevři dveře několikrát pro rozetření. Cena 50–150 Kč.</li>
                <li><strong>Silikonový sprej:</strong> Výborný pro plastové díly, gumová těsnění a panty. Dlouhotrvající, nevlhne, nepřitahuje prach. Na čisté kovové závěsy také funguje. Cena 80–200 Kč.</li>
                <li><strong>WD-40:</strong> Nejznámější řešení — ale pozor, WD-40 je primárně odrezovač a rozpouštědlo, ne mazivo. Pomáhá krátkodobě (1–3 měsíce), pak je nutné opakovat. Na kovové závěsy funguje ale není trvalé řešení.</li>
                <li><strong>Vazelína:</strong> Dostupná, levná, dlouhotrvající. Nanést špachtlí na čep závěsu. Nevýhoda — přitahuje prach a nečistoty.</li>
              </ul>
            </section>

            <section id="postup">
              <h2>Postup mazání krok za krokem</h2>
              <ul>
                <li><strong>Krok 1 — Najdi zdroj vrzání:</strong> Pomalu otevírej a zavírej dveře a poslouchej odkud přesně vrzání pochází. Závěs nahoře? Dole? Nebo hrana dveří třoucí o zárubeň?</li>
                <li><strong>Krok 2 — Vyčisti závěs:</strong> Starý tuk, rez a prach odstraní WD-40 nebo líh. Nastříkej, nech chvíli působit, otři hadříkem.</li>
                <li><strong>Krok 3 — Nanes mazivo:</strong> Grafitový prášek nebo silikonový sprej nanes přímo na čep závěsu. Kapka stačí — méně je více.</li>
                <li><strong>Krok 4 — Rozetři pohybem:</strong> Otevři a zavři dveře 5–10× aby se mazivo rozetřelo po celém čepu. Přebytečné mazivo otři hadříkem.</li>
                <li><strong>Krok 5 — Zkontroluj šrouby:</strong> Při příležitosti dotáhni všechny šrouby závěsů šroubovákem — uvolněný šroub způsobuje vrzání i po namazání.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip bez nářadí:</strong> Mýdlo nebo svíčka (vosk) nanešené na čep závěsu fungují jako nouzové mazivo. Stačí potřít čep závěsu a dveře otevřít a zavřít. Krátkodobé ale okamžitě dostupné řešení.</div>
            </section>

            <section id="kdyz-nestaci">
              <h2>Když mazání nestačí</h2>
              <ul>
                <li><strong>Dřevěné dveře bobtnají:</strong> Pokud dveře nejdou zavřít nebo se třou o zárubeň — problém je v deformaci dřeva, ne v závěsech. Přebrousit hranu dveří nebo počkat až dřevo vyschne (otop v zimě). Pokud problém přetrvává — seřídit závěsy nebo zárubeň.</li>
                <li><strong>Uvolněné šrouby závěsů:</strong> Pokud šroub nejde dotáhnout (otáčí se naprázdno) — díra je rozšroubovaná. Zalij díru sekundovým lepidlem nebo dřevěnou špejlí + lepidlo, nechej zaschnout a zašroubuj znovu.</li>
                <li><strong>Rez na závěsu:</strong> Pokud závěs rezaví a vrzá i po namazání — vyměnit závěs. Nové závěsy jsou levné (50–200 Kč/ks) a výměna trvá 15 minut s šroubovákem.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Pomáhá WD-40 na vrzající dveře?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Krátkodobě ano — WD-40 uvolní rez, odstraní nečistoty a dveře přestanou vrzat. Ale WD-40 je primárně odrezovač a ředidlo, ne trvalé mazivo. Po 1–3 měsících vyprchá a vrzání se vrátí. Pro trvalé řešení použij silikonový sprej nebo grafitový prášek po prvním ošetření WD-40.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Vrzají mi nové dveře — proč?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Nové dveře mohou vrzat pokud jsou závěsy suchem nebo pokud nejsou správně seřízené (dveře se lehce třou o zárubeň). Moderní závěsy bývají nastavitelné (výška, hloubka, stranový posuv) — seřídit malým šroubem. Pokud nastavení nepomáhá, reklamuj montáž.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak namazat dveře bez sundávání závěsů?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Jednoduše — nanese mazivo přímo přes otevřené dveře na viditelný čep závěsu (trubičkový aplikátor WD-40 nebo silikonového spreje). Dveře otevři do 90° pro přístup k čepu. Nemusíš závěsy sundávat — mazivo pronikne kapilárně do mezery mezi čepem a objímkou pohybem dveří.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/jak-namazat-dvere-aby-nevrzaly" title="Jak namazat dveře aby nevrzaly – čím a jak na to 2026" />

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
                <li><a href="#pricina">Co způsobuje vrzání</a></li>
                <li><a href="#cim">Čím namazat</a></li>
                <li><a href="#postup">Postup mazání</a></li>
                <li><a href="#kdyz-nestaci">Když mazání nestačí</a></li>
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
