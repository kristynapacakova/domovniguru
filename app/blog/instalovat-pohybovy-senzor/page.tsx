import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak nainstalovat pohybový senzor krok za krokem",
  description: "Jak nainstalovat pohybový senzor na světlo nebo alarm. PIR detektor, nastavení citlivosti a dosahu, zapojení – postup pro začátečníky bez elektrikáře.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/instalovat-pohybovy-senzor" },
  openGraph: { title: "Jak nainstalovat pohybový senzor 2026", description: "PIR detektor na světlo – zapojení, nastavení dosahu a citlivosti krok za krokem.", url: "https://www.domovniguru.cz/blog/instalovat-pohybovy-senzor", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-22T08:00:00Z", modifiedTime: "2026-04-22T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20nainstalovat%20pohybov%C3%BD%20senzor%20krok%20za%20krokem&cat=blog", width: 1200, height: 630, alt: "Jak nainstalovat pohybový senzor krok za krokem" }] },
  twitter: { card: "summary_large_image", title: "Jak nainstalovat pohybový senzor 2026", description: "PIR detektor – zapojení a nastavení krok za krokem bez elektrikáře." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/instalovat-pohybovy-senzor#article",
    "headline": "Jak nainstalovat pohybový senzor krok za krokem",
    "datePublished": "2026-04-22T08:00:00Z",
    "dateModified": "2026-06-04T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak nainstalovat pohybový senzor", "PIR detektor světlo", "pohybový sensor zapojení", "nastavení pohybového senzoru", "pohybový senzor chodba", "motion detector instalace"]
  }, {
    "@type": "FAQPage",
    "@id": "https://www.domovniguru.cz/blog/instalovat-pohybovy-senzor#faq",
    "mainEntity": [
      { "@type": "Question", "name": "Mohu přidat pohybový senzor k existujícímu svítidlu?", "acceptedAnswer": { "@type": "Answer", "text": "Ano — existující svítidlo lze doplnit externím PIR senzorem zapojeným do série. Nebo lze koupit svítidlo s integrovaným senzorem (jednodušší instalace). Externí senzor je flexibilnější — lze ho nasměrovat nezávisle na svítidle." } },
      { "@type": "Question", "name": "Funguje PIR senzor přes sklo?", "acceptedAnswer": { "@type": "Answer", "text": "Ne — infračervené záření sklo nepropouští. PIR senzor za oknem nedetekuje pohyb venku. Pro venkovní detekci nainstaluj senzor přímo venku s krytím IP65. Mikrovlnný senzor sklem projde — ale je dražší a má více falešných poplachů." } },
      { "@type": "Question", "name": "Kolik ušetří pohybový senzor na elektřině?", "acceptedAnswer": { "@type": "Answer", "text": "Na chodbě kde svítíte průměrně 4 hodiny denně: senzor zkrátí svícení na 30–60 minut denně (jen při průchodu). Úspora: 75–85 % elektrické energie na daném svítidle. Pro LED svítidlo 10 W = úspora ~50 Kč ročně. Senzor se vrátí za 3–8 let — ale hlavní přínos je pohodlí a bezpečnost." } }
    ]
  }, {
    "@type": "HowTo",
    "@id": "https://www.domovniguru.cz/blog/instalovat-pohybovy-senzor#howto",
    "name": "Jak nainstalovat pohybový senzor krok za krokem",
    "description": "Jak nainstalovat pohybový senzor na světlo nebo alarm. PIR detektor, nastavení citlivosti a dosahu, zapojení – postup pro začátečníky bez elektrikáře.",
    "step": [
      { "@type": "HowToStep", "name": "Typy pohybových senzorů", "text": "Typy pohybových senzorů" },
      { "@type": "HowToStep", "name": "Kde umístit pohybový senzor", "text": "Kde umístit pohybový senzor" },
      { "@type": "HowToStep", "name": "Zapojení PIR senzoru – krok za krokem", "text": "PIR senzor se zapojuje do série mezi napájení a světlo. Senzor má zpravidla tři svorky: L (fáze), N (nula) a OUT nebo LOAD (výstup ke světlu)." },
      { "@type": "HowToStep", "name": "Nastavení citlivosti a dosahu", "text": "Většina PIR senzorů má tři nastavovací prvky — otočné potenciometry nebo přepínače." },
      { "@type": "HowToStep", "name": "Řešení problémů", "text": "Řešení problémů" }
    ]
  }]
};

const RELATED = [
  { title: "Jak nainstalovat stmívač světla", href: "/blog/instalovat-stmivac", read: "6 min" },
  { title: "Venkovní osvětlení zahrady", href: "/blog/venkovni-osvetleni-zahrady", read: "6 min" },
  { title: "Chytrá domácnost – jak začít", href: "/blog/chytra-domacnost-zaciname", read: "7 min" },
  { title: "Jak vybrat svítidla do místnosti", href: "/blog/vybrat-svitidla-do-mistnosti", read: "6 min" },
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
              <span>Pohybový senzor</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">⚡ Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak nainstalovat pohybový senzor – PIR detektor krok za krokem</h1>
              <p className="article-lead">Pohybový senzor na chodbě nebo před domem ušetří elektřinu a zvýší bezpečnost. Instalace trvá 30 minut a nevyžaduje elektrikáře — stačí správně zapojit tři vodiče.</p>
              <div className="article-meta-row"><span>Aktualizováno: 4. června 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/instalovat-pohybovy-senzor" title="Jak nainstalovat pohybový senzor krok za krokem" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 175" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="175" fill="#f0f4f8"/>
                <text x="380" y="22" textAnchor="middle" fontSize="10" fill="#4a6080" fontWeight="700" letterSpacing="0.04em">TYPY POHYBOVÝCH SENZORŮ A JEJICH POUŽITÍ</text>

                {[
                  { x:20, icon:"👁️", name:"PIR (pasivní IR)", desc:"Detekuje teplo těla\nNejčastější typ\n6–12 m dosah", use:"Chodba, vstup, garáž", color:"#4a90d9" },
                  { x:205, icon:"📡", name:"Mikrovlnný", desc:"Detekuje pohyb zdí\nPros přes překážky\n10–20 m dosah", use:"Velké prostory,\nsklady", color:"#9b6fd4" },
                  { x:390, icon:"🔊", name:"Ultrazvukový", desc:"Detekuje pohyb zvukem\nCitlivější než PIR\nKrátký dosah", use:"Malé místnosti,\ninterior", color:"#5a9e6f" },
                  { x:575, icon:"📸", name:"Kamerový (AI)", desc:"Detekuje osobu kamerou\nNejchytřejší, nejdražší\nWiFi připojení", use:"Vstup, venkovní\nbezpečnost", color:"#e07040" },
                ].map(({x, icon, name, desc, use, color}) => (
                  <g key={x} transform={`translate(${x}, 30)`}>
                    <rect x="0" y="0" width="170" height="132" rx="8" fill="#fff" stroke={color} strokeWidth="1.2"/>
                    <text x="85" y="30" textAnchor="middle" fontSize="20">{icon}</text>
                    <text x="85" y="50" textAnchor="middle" fontSize="10" fill={color} fontWeight="700">{name}</text>
                    <line x1="10" y1="57" x2="160" y2="57" stroke={color} strokeWidth="0.5" opacity="0.4"/>
                    {desc.split('\n').map((line, i) => <text key={i} x="85" y={70+i*12} textAnchor="middle" fontSize="8" fill="#4a4a40">{line}</text>)}
                    <rect x="8" y="106" width="154" height="20" rx="4" fill={color} opacity="0.1"/>
                    <text x="85" y="118" textAnchor="middle" fontSize="7.5" fill={color}>{use}</text>
                  </g>
                ))}

                <rect y="158" width="760" height="17" fill="#e0eaf4" opacity="0.5"/>
                <text x="380" y="170" textAnchor="middle" fontSize="8" fill="#3a6a8a" fontWeight="600" letterSpacing="0.06em">⚡ PIR = NEJČASTĚJŠÍ VOLBA · VŽDY VYPNI JISTIČ PŘED ZAPOJENÍM · 3 VODIČE: L, N, SVĚTLO</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#typy">Typy pohybových senzorů</a></li>
                <li><a href="#kde">Kde umístit senzor</a></li>
                <li><a href="#zapojeni">Zapojení PIR senzoru</a></li>
                <li><a href="#nastaveni">Nastavení citlivosti a dosahu</a></li>
                <li><a href="#problemy">Řešení problémů</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="typy">
              <h2>Typy pohybových senzorů</h2>
              <ul>
                <li><strong>PIR (Pasivní infračervený):</strong> Nejběžnější a nejlevnější. Detekuje změnu tepelného záření — tedy pohybující se osoby nebo zvířata. Dosah 6–12 m, úhel 90–180°. Cena 150–500 Kč.</li>
                <li><strong>Mikrovlnný (radar):</strong> Vysílá mikrovlny a měří odraz. Detekuje i přes skleněné příčky. Větší dosah ale více falešných poplachů. Cena 300–1 000 Kč.</li>
                <li><strong>Duální (PIR + mikrovlnný):</strong> Spustí se jen když oba senzory detekují pohyb zároveň — méně falešných poplachů. Vhodný do venkovních prostor. Cena 400–1 200 Kč.</li>
              </ul>
              <div className="article-tip"><strong>💡 Pro většinu použití</strong> (chodba, garáž, vstup) stačí klasický PIR senzor za 200–400 Kč.</div>
            </section>

            <section id="kde">
              <h2>Kde umístit pohybový senzor</h2>
              <ul>
                <li><strong>Výška montáže:</strong> 2–2,5 m od podlahy pro PIR. Příliš nízko = detekuje i malá zvířata. Příliš vysoko = zmenší se efektivní zona.</li>
                <li><strong>Nasměrování:</strong> Senzor nejlépe funguje když osoby procházejí přes jeho zorné pole (zkříží paprsky) spíše než přímo na něj jdou. Namontuj kolmo k hlavnímu směru pohybu.</li>
                <li><strong>Vyhnout se:</strong> Přímému slunečnímu záření, tepelným zdrojům (radiátor, trouba), průvanům od oken nebo klimatizace — způsobují falešné poplachy.</li>
                <li><strong>Venkovní montáž:</strong> Vždy senzor s krytím min. IP44 (ideálně IP65). Namontuj pod přístřešek nebo stříšku — déšť na PIR čočce způsobuje falešné poplachy.</li>
              </ul>
            </section>

            <section id="zapojeni">
              <h2>Zapojení PIR senzoru – krok za krokem</h2>
              <p>PIR senzor se zapojuje do série mezi napájení a světlo. Senzor má zpravidla tři svorky: L (fáze), N (nula) a OUT nebo LOAD (výstup ke světlu).</p>
              <ul>
                <li><strong>Krok 1 — Vypni jistič:</strong> Vždy nejdřív vypni jistič pro daný okruh. Ověř fázovou tužkou že napětí zmizelo.</li>
                <li><strong>Krok 2 — Identifikuj vodiče:</strong> L = hnědý (fáze), N = modrý (nula), PE = zeleno-žlutý (zemnění). Svítidlo má zpravidla stejné barvy.</li>
                <li><strong>Krok 3 — Zapoj senzor:</strong> L ze sítě → svorka L senzoru. N ze sítě → svorka N senzoru. Výstup senzoru (OUT/LOAD) → L svítidla. N svítidla → N ze sítě přímo.</li>
                <li><strong>Krok 4 — Montáž na zeď:</strong> Přišroubuj senzor na zeď nebo fasádu. Nasměruj čočku správným směrem.</li>
                <li><strong>Krok 5 — Test:</strong> Zapni jistič, nastav citlivost na maximum, projdi před senzorem. Světlo musí reagovat.</li>
              </ul>
              <div className="article-tip"><strong>⚠️ Bezpečnost:</strong> Vždy vypni jistič a ověř fázovou tužkou. Práce pod napětím je smrtelně nebezpečná.</div>
            </section>

            <section id="nastaveni">
              <h2>Nastavení citlivosti a dosahu</h2>
              <p>Většina PIR senzorů má tři nastavovací prvky — otočné potenciometry nebo přepínače.</p>
              <ul>
                <li><strong>LUX (světelná citlivost):</strong> Nastavuje při jakém osvětlení senzor reaguje. MAX = reaguje vždy (i za dne). MIN = reaguje jen v tmě. Pro automatické noční svícení nastav na střední hodnotu.</li>
                <li><strong>TIME (čas svícení):</strong> Jak dlouho svítí po detekci pohybu. Rozsah obvykle 10 sekund až 7 minut. Pro chodbu stačí 1–2 minuty.</li>
                <li><strong>SENS (citlivost detekce):</strong> Jak malý pohyb spustí senzor. MAX = reaguje na malé pohyby (větve ve větru, zvířata). MIN = reaguje jen na velké pohyby. Pro vstup nastav střední hodnotu.</li>
              </ul>
            </section>

            <section id="problemy">
              <h2>Řešení problémů</h2>
              <ul>
                <li><strong>Senzor nereaguje:</strong> Zkontroluj zapojení, jistič, nastavení LUX (možná nastaven na denní svícení zakázáno), vzdálenost od senzoru (příliš daleko nebo mimo zorné pole).</li>
                <li><strong>Falešné poplachy:</strong> Přemísti senzor dál od tepelných zdrojů a průvanů. Sniž citlivost (SENS). Venkovní senzory namontuj pod přístřešek.</li>
                <li><strong>Světlo nehasne:</strong> Prodlužuje se TIME při dalším pohybu. Pokud svítí trvale — zkontroluj zapojení, možná zkrat v senzoru.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Mohu přidat pohybový senzor k existujícímu svítidlu?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ano — existující svítidlo lze doplnit externím PIR senzorem zapojeným do série. Nebo lze koupit svítidlo s integrovaným senzorem (jednodušší instalace). Externí senzor je flexibilnější — lze ho nasměrovat nezávisle na svítidle.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Funguje PIR senzor přes sklo?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ne — infračervené záření sklo nepropouští. PIR senzor za oknem nedetekuje pohyb venku. Pro venkovní detekci nainstaluj senzor přímo venku s krytím IP65. Mikrovlnný senzor sklem projde — ale je dražší a má více falešných poplachů.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Kolik ušetří pohybový senzor na elektřině?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Na chodbě kde svítíte průměrně 4 hodiny denně: senzor zkrátí svícení na 30–60 minut denně (jen při průchodu). Úspora: 75–85 % elektrické energie na daném svítidle. Pro LED svítidlo 10 W = úspora ~50 Kč ročně. Senzor se vrátí za 3–8 let — ale hlavní přínos je pohodlí a bezpečnost.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/instalovat-pohybovy-senzor" title="Jak nainstalovat pohybový senzor krok za krokem" />

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
                <li><a href="#typy">Typy senzorů</a></li>
                <li><a href="#kde">Kde umístit</a></li>
                <li><a href="#zapojeni">Zapojení</a></li>
                <li><a href="#nastaveni">Nastavení</a></li>
                <li><a href="#problemy">Řešení problémů</a></li>
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
