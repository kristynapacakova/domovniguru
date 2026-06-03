import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak číst elektroměr – jednofázový i třífázový 2026",
  description: "Jak správně odečíst stav elektroměru a nahlásit ho dodavateli. Jednofázový i třífázový elektroměr, tarify NT/VT a jak zkontrolovat správnost vyúčtování.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-cist-elektromer" },
  openGraph: { title: "Jak číst elektroměr – jednofázový i třífázový 2026", description: "Jak odečíst elektroměr, co je NT a VT tarif a jak zkontrolovat vyúčtování.", url: "https://www.domovniguru.cz/blog/jak-cist-elektromer", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-22T08:00:00Z", modifiedTime: "2026-04-22T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "DomovniGuru" }] },
  twitter: { card: "summary_large_image", title: "Jak číst elektroměr 2026", description: "Odečet elektroměru, NT/VT tarif a kontrola vyúčtování krok za krokem." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/jak-cist-elektromer#article",
    "headline": "Jak číst elektroměr – jednofázový i třífázový 2026",
    "datePublished": "2026-04-22T08:00:00Z",
    "dateModified": "2026-04-22T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak číst elektroměr", "odečet elektroměru", "NT VT tarif elektřina", "třífázový elektroměr", "jak nahlásit stav elektroměru", "EAN číslo elektroměr"]
  }]
};

const RELATED = [
  { title: "Jak snížit účet za elektřinu", href: "/blog/snizit-ucet-za-elektrinu", read: "7 min" },
  { title: "Jak fungují pojistky a jističe", href: "/blog/jak-funguji-pojistky", read: "5 min" },
  { title: "Chytrá domácnost – jak začít", href: "/blog/chytra-domacnost-zaciname", read: "7 min" },
  { title: "Jak ušetřit na vytápění", href: "/blog/usetrit-na-vytapeni", read: "7 min" },
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
              <span>Jak číst elektroměr</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">⚡ Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak číst elektroměr – jednofázový i třífázový</h1>
              <p className="article-lead">Správný odečet elektroměru ti pomůže zkontrolovat vyúčtování od dodavatele a odhalit neobvyklou spotřebu. Je to jednoduché — stačí vědět co číslice znamenají.</p>
              <div className="article-meta-row"><span>Aktualizováno: 22. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/jak-cist-elektromer" title="Jak číst elektroměr – jednofázový i třífázový 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 175" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="175" fill="#f0f4f8"/>

                {/* Elektroměr diagram */}
                <rect x="20" y="15" width="340" height="145" rx="8" fill="#fff" stroke="#4a90d9" strokeWidth="1.2"/>
                <rect x="20" y="15" width="340" height="35" rx="8" fill="#4a90d9" opacity="0.15"/>
                <text x="190" y="37" textAnchor="middle" fontSize="11" fill="#4a90d9" fontWeight="700">JEDNOFÁZOVÝ ELEKTROMĚR</text>

                {/* Displej */}
                <rect x="50" y="60" width="280" height="50" rx="6" fill="#1a2a1a" stroke="#2a4a2a" strokeWidth="1"/>
                <text x="190" y="78" textAnchor="middle" fontSize="9" fill="#4a8a4a" letterSpacing="0.1em">TARIF 1</text>
                <text x="190" y="100" textAnchor="middle" fontSize="22" fill="#00ff00" fontFamily="monospace" letterSpacing="0.15em">01234</text>

                {[
                  { x:50, text:"EIC číslo (EAN)", desc:"Identifikace odběrného místa" },
                  { x:50, text:"Typ tarifu", desc:"T1 = jednosazbový, T2 = dvojsazbový" },
                  { x:50, text:"Stav čítače", desc:"kWh – to co nahlašuješ" },
                ].map(({text, desc}, i) => (
                  <g key={i} transform={`translate(50, ${122+i*12})`}>
                    <text x="0" y="0" fontSize="8.5" fill="#4a90d9" fontWeight="600">{text}:</text>
                    <text x="110" y="0" fontSize="8.5" fill="#4a4a40">{desc}</text>
                  </g>
                ))}

                {/* NT/VT diagram */}
                <rect x="400" y="15" width="340" height="145" rx="8" fill="#fff" stroke="#5a9e6f" strokeWidth="1.2"/>
                <rect x="400" y="15" width="340" height="35" rx="8" fill="#5a9e6f" opacity="0.15"/>
                <text x="570" y="37" textAnchor="middle" fontSize="11" fill="#5a9e6f" fontWeight="700">NT vs. VT TARIF</text>

                {[
                  { y:60, label:"VT (Vysoký tarif)", time:"6:00–22:00 hod", price:"Dražší sazba", color:"#e07040" },
                  { y:100, label:"NT (Nízký tarif)", time:"22:00–6:00 hod", price:"Levnější sazba", color:"#4a90d9" },
                ].map(({y, label, time, price, color}) => (
                  <g key={y} transform={`translate(415, ${y})`}>
                    <rect x="0" y="0" width="310" height="32" rx="5" fill={color} opacity="0.08" stroke={color} strokeWidth="0.5"/>
                    <text x="10" y="15" fontSize="10" fill={color} fontWeight="700">{label}</text>
                    <text x="10" y="27" fontSize="8" fill="#4a4a40">{time} · {price}</text>
                  </g>
                ))}
                <text x="570" y="148" textAnchor="middle" fontSize="8" fill="#3a7e4f">Spotřebiče přesuň do NT → ušetříš</text>
                <text x="570" y="160" textAnchor="middle" fontSize="7.5" fill="#8a8078">(pračka, myčka, bojler s časovačem)</text>

                <rect y="158" width="760" height="17" fill="#e0eaf4" opacity="0.5"/>
                <text x="380" y="170" textAnchor="middle" fontSize="8" fill="#3a6a8a" fontWeight="600" letterSpacing="0.06em">⚡ ODEČTI VŽDY VE STEJNÉM ČASE · NAHLÁSIT ONLINE NEBO PO TELEFONU · UCHOVEJ HISTORII</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#jecnofa">Jednofázový elektroměr</a></li>
                <li><a href="#trifa">Třífázový elektroměr</a></li>
                <li><a href="#nt-vt">Tariffy NT a VT</a></li>
                <li><a href="#jak-nahlasit">Jak nahlásit odečet</a></li>
                <li><a href="#kontrola">Jak zkontrolovat vyúčtování</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="jecnofa">
              <h2>Jednofázový elektroměr</h2>
              <p>Jednofázový elektroměr je nejběžnější v bytech. Má jeden nebo dva displeje (pro jednosazbový nebo dvousazbový tarif).</p>
              <ul>
                <li><strong>Jednosazbový (T1):</strong> Jeden displej s jedním číslem — to je celková spotřeba v kWh. Jednoduché — odečteš číslo a nahlásíš.</li>
                <li><strong>Dvousazbový (T2):</strong> Dva displeje — VT (vysoký tarif, dražší) a NT (nízký tarif, levnější). Displeje se střídají automaticky nebo mačkáš tlačítko pro přepnutí. Oba stavy nahlásíš dodavateli.</li>
                <li><strong>Jak odečíst:</strong> Přečti čísla na displeji. Pokud je elektroměr mechanický (válečky s čísly) — odepiš celé číslo bez desetinných míst. Digitální elektroměry zobrazují stav přímo.</li>
                <li><strong>Co je na elektroměru:</strong> EIC (EAN) číslo = identifikace odběrného místa (najdeš na faktuře). Typ tarifu. Číslo elektroměru. Stav spotřeby v kWh.</li>
              </ul>
            </section>

            <section id="trifa">
              <h2>Třífázový elektroměr</h2>
              <p>Třífázový elektroměr najdeš v domech, při vyšší spotřebě nebo u fotovoltaiky. Měří tři fáze elektřiny zvlášť nebo dohromady.</p>
              <ul>
                <li><strong>Odečet:</strong> Třífázový elektroměr zobrazuje celkovou spotřebu ze všech tří fází. Odečítáš stejně jako jednofázový — celkový stav nebo VT a NT zvlášť.</li>
                <li><strong>Výroba (FVE):</strong> Pokud máš fotovoltaiku, elektroměr měří i dodanou elektřinu do sítě (export). Na displeji se střídají hodnoty odběru a dodávky.</li>
                <li><strong>Chytré elektroměry:</strong> Moderní elektroměry (AMM, Smart metery) odesílají odečet automaticky — nemusíš sám hlásit. Zkontroluj u svého dodavatele jestli máš chytrý elektroměr.</li>
              </ul>
            </section>

            <section id="nt-vt">
              <h2>Tariffy NT a VT – jak fungují</h2>
              <ul>
                <li><strong>VT (Vysoký tarif):</strong> Dražší sazba platná většinou přes den (6:00–22:00). Přesné hodiny závisí na tvém tarifu a distributorovi.</li>
                <li><strong>NT (Nízký tarif):</strong> Levnější sazba platná v noci (22:00–6:00) a případně i přes den v určitých hodinách. Vhodné pro přesunutí spotřeby pračky, myčky nebo bojleru.</li>
                <li><strong>Kdy se vyplatí dvousazbový tarif:</strong> Pokud máš bojler na elektřinu, akumulační kamna nebo nabíješ auto v noci — NT ti ušetří 30–50 % nákladů na tuto spotřebu.</li>
                <li><strong>Jak zjistit kdy je NT:</strong> Na faktuře nebo v aplikaci dodavatele. Nebo zkontroluj displej elektroměru — zobrazuje aktuální tarif.</li>
              </ul>
            </section>

            <section id="jak-nahlasit">
              <h2>Jak nahlásit odečet elektroměru</h2>
              <ul>
                <li><strong>Online portál dodavatele:</strong> Nejjednodušší — přihlásíš se do zákaznické zóny (ČEZ, E.ON, innogy, Pražská energetika) a zadáš stav. Dostupné 24/7.</li>
                <li><strong>Mobilní aplikace:</strong> Většina dodavatelů má aplikaci kde zadáš odečet nebo vyfotíš elektroměr.</li>
                <li><strong>Telefon:</strong> Zákaznická linka dodavatele. Připrav si číslo odběrného místa (EIC/EAN) a stav elektroměru.</li>
                <li><strong>Kdy hlásit:</strong> Dodavatel ti pošle výzvu k odečtu (obvykle jednou ročně). Mimo tento termín hlásíš při stěhování, změně dodavatele nebo na žádost.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Fotografuj elektroměr vždy ve stejný den každého měsíce. Za rok získáš přehled o spotřebě a snadno ověříš správnost vyúčtování.</div>
            </section>

            <section id="kontrola">
              <h2>Jak zkontrolovat správnost vyúčtování</h2>
              <ul>
                <li><strong>Zjisti skutečnou spotřebu:</strong> Aktuální stav elektroměru − stav z minulého odečtu = spotřeba za období v kWh.</li>
                <li><strong>Porovnej s fakturou:</strong> Na faktuře je uveden počáteční a koncový stav + vypočtená spotřeba. Porovnej se svým výpočtem.</li>
                <li><strong>Zkontroluj sazbu:</strong> Na faktuře je cena za kWh v VT a NT tarifu. Vynásob spotřebu sazbou — výsledek musí odpovídat fakturované částce (bez DPH a distribučních poplatků).</li>
                <li><strong>Podezřele vysoká spotřeba:</strong> Srovnej s předchozím rokem. Výrazný nárůst bez změny návyků = možný problém (vadný spotřebič, krádež elektřiny, chyba elektroměru).</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Co je EAN (EIC) číslo a kde ho najdu?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">EAN (nebo EIC) je 18místné číslo které jednoznačně identifikuje tvé odběrné místo. Najdeš ho na faktuře za elektřinu, na štítku elektroměru, nebo v zákaznické zóně dodavatele. Začíná na 859182... (pro ČR). Je nutné pro nahlášení odečtu nebo změnu dodavatele.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak poznat jestli elektroměr správně měří?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Zapoj do zásuvky spotřebič se známým příkonem (žárovka 60 W = 0,06 kW). Sleduj elektroměr po hodinu — měl by přibýt 0,06 kWh. Kontrolní měřidlo (chytrá zásuvka s měřením spotřeby) ti dá přesnější výsledek. Podezření na chybné měření nahlásíš distributorovi — mají povinnost elektroměr přezkoumat.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Mohu si elektroměr vyměnit za chytrý?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Elektroměr je majetek distributora (ČEZ Distribuce, EG.D, PREdistribuce) a výměnu provádí oni. Chytré elektroměry (AMM) jsou postupně instalovány plošně — dle plánu by všichni odběratelé měli mít chytrý elektroměr do roku 2030. O instalaci můžeš požádat svého distributora.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/jak-cist-elektromer" title="Jak číst elektroměr – jednofázový i třífázový 2026" />

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
                <li><a href="#jecnofa">Jednofázový elektroměr</a></li>
                <li><a href="#trifa">Třífázový elektroměr</a></li>
                <li><a href="#nt-vt">NT a VT tarify</a></li>
                <li><a href="#jak-nahlasit">Jak nahlásit odečet</a></li>
                <li><a href="#kontrola">Kontrola vyúčtování</a></li>
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
