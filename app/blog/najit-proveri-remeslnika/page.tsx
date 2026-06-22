import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak najít a prověřit řemeslníka – na co si dát pozor 2026",
  description: "Jak najít spolehlivého řemeslníka a prověřit ho před zakázkou. Na co se ptát, jak porovnat nabídky a varovné signály podvodníků. Průvodce pro každého.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/najit-proveri-remeslnika" },
  openGraph: { title: "Jak najít a prověřit řemeslníka 2026", description: "Spolehlivý řemeslník – kde ho hledat, jak prověřit a čemu se vyhnout.", url: "https://www.domovniguru.cz/blog/najit-proveri-remeslnika", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-22T08:00:00Z", modifiedTime: "2026-04-22T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20naj%C3%ADt%20a%20prov%C4%9B%C5%99it%20%C5%99emesln%C3%ADka%20%E2%80%93%20na%20co%20si%20d%C3%A1t%20pozor%202026&cat=blog", width: 1200, height: 630, alt: "Jak najít a prověřit řemeslníka – na co si dát pozor 2026" }] },
  twitter: { card: "summary_large_image", title: "Jak najít a prověřit řemeslníka 2026", description: "Kde hledat a jak prověřit řemeslníka – varovné signály podvodníků." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/najit-proveri-remeslnika#article",
    "headline": "Jak najít a prověřit řemeslníka – na co si dát pozor 2026",
    "datePublished": "2026-04-22T08:00:00Z",
    "dateModified": "2026-06-04T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak najít řemeslníka", "prověřit řemeslníka", "spolehlivý řemeslník", "varovné signály podvodný řemeslník", "jak vybrat řemeslníka rekonstrukce"]
  }, {
    "@type": "FAQPage",
    "@id": "https://www.domovniguru.cz/blog/najit-proveri-remeslnika#faq",
    "mainEntity": [
      { "@type": "Question", "name": "Jak dlouho dopředu objednat řemeslníka?", "acceptedAnswer": { "@type": "Answer", "text": "Kvalitní řemeslníci jsou vytížení — počítej s 4–8 týdny čekání na první schůzku a dalšími 2–4 týdny na vypracování nabídky. Pro jarní a letní sezónu (duben–září) poptávej v únoru nebo březnu. Řemeslník dostupný okamžitě může být signálem nízkého zájmu o jeho práce." } },
      { "@type": "Question", "name": "Co dělat když řemeslník odvede nekvalitní práci?", "acceptedAnswer": { "@type": "Answer", "text": "Reklamuj písemně s fotografiemi a popisem vad. Zákonná záruční lhůta je 2 roky na stavební práce. Firma musí vady opravit nebo poskytnout slevu z ceny. Odmítá-li — obrátit se na Českou obchodní inspekci nebo soud. Proto je smlouva a předávací protokol tak důležitý — bez nich je reklamace složitá." } },
      { "@type": "Question", "name": "Je lepší vybírat řemeslníka podle ceny nebo referencí?", "acceptedAnswer": { "@type": "Answer", "text": "Reference jsou vždy důležitější. Nejlevnější nabídka skoro nikdy neznamená nejlepší výsledek — levný řemeslník používá levnější materiál, spěchá nebo přidá vícepráce které navýší cenu. Výzkumy ukazují že zákazníci kteří si vybrali nejlevnější nabídku zaplatili průměrně o 40 % více kvůli opravám a vícepracím." } }
    ]
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://www.domovniguru.cz/blog/najit-proveri-remeslnika#breadcrumb",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" },
      { "@type": "ListItem", "position": 3, "name": "Stěhování & rekonstrukce", "item": "https://www.domovniguru.cz/blog/kategorie/stehovani" },
      { "@type": "ListItem", "position": 4, "name": "Jak najít a prověřit řemeslníka – na co si dát pozor 2026", "item": "https://www.domovniguru.cz/blog/najit-proveri-remeslnika" }
    ]
  }
  ]
};

const RELATED = [
  { title: "Jak odhadnout cenu rekonstrukce", href: "/blog/odhadnout-cenu-rekonstrukce", read: "6 min" },
  { title: "Jak naplánovat rekonstrukci bytu", href: "/blog/planovani-rekonstrukce-bytu", read: "8 min" },
  { title: "Jak vybrat stěhovací firmu", href: "/blog/vybrat-stehovaci-firmu", read: "5 min" },
  { title: "Kolik stojí rekonstrukce koupelny", href: "/blog/cena-rekonstrukce-koupelny", read: "6 min" },
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
              <span>Jak najít řemeslníka</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏠 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak najít a prověřit řemeslníka – na co si dát pozor</h1>
              <p className="article-lead">Špatný řemeslník dokáže proměnit rekonstrukci v noční můru. Nekvalitní práce, nedodržené termíny, mizení po záloze. Tady je jak spolehlivého řemeslníka najít a podvodníkům se vyhnout.</p>
              <div className="article-meta-row"><span>Aktualizováno: 4. června 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/najit-proveri-remeslnika" title="Jak najít a prověřit řemeslníka – na co si dát pozor 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 175" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="175" fill="#f8f6f2"/>
                <text x="380" y="22" textAnchor="middle" fontSize="10" fill="#6a6050" fontWeight="700" letterSpacing="0.04em">KDE HLEDAT ŘEMESLNÍKA – OD NEJLEPŠÍHO PO NEJRIZIKOVĚJŠÍ</text>
                {[
                  { x:20, rank:"1", source:"Doporučení\npřátel / rodiny", risk:"Nejnižší", trust:"⭐⭐⭐⭐⭐", color:"#5a9e6f" },
                  { x:168, rank:"2", source:"Google recenze\n(4,5+ / 20+ hodnocení)", risk:"Nízké", trust:"⭐⭐⭐⭐", color:"#4a90d9" },
                  { x:316, rank:"3", source:"Portály\n(Remesla.cz, Poptávka)", risk:"Střední", trust:"⭐⭐⭐", color:"#f59e0b" },
                  { x:464, rank:"4", source:"Facebook skupiny\nlokalita", risk:"Střední", trust:"⭐⭐⭐", color:"#9b6fd4" },
                  { x:612, rank:"5", source:"Letáky v poštovní\nschránce", risk:"Nejvyšší", trust:"⭐", color:"#e07040" },
                ].map(({x, rank, source, risk, trust, color}) => (
                  <g key={x} transform={`translate(${x}, 28)`}>
                    <rect x="0" y="0" width="130" height="130" rx="8" fill="#fff" stroke={color} strokeWidth="1.5"/>
                    <circle cx="65" cy="20" r="16" fill={color} opacity="0.15"/>
                    <text x="65" y="25" textAnchor="middle" fontSize="11" fill={color} fontWeight="700">{rank}</text>
                    {source.split('\n').map((s,i) => <text key={i} x="65" y={48+i*14} textAnchor="middle" fontSize="9" fill="#2a2a28" fontWeight="600">{s}</text>)}
                    <line x1="8" y1="80" x2="122" y2="80" stroke={color} strokeWidth="0.5" opacity="0.4"/>
                    <text x="65" y="96" textAnchor="middle" fontSize="12">{trust}</text>
                    <rect x="8" y="108" width="114" height="16" rx="4" fill={color} opacity="0.1"/>
                    <text x="65" y="119" textAnchor="middle" fontSize="8" fill={color}>Riziko: {risk}</text>
                  </g>
                ))}
                <rect y="158" width="760" height="17" fill="#f0ece8" opacity="0.5"/>
                <text x="380" y="170" textAnchor="middle" fontSize="8" fill="#8a7050" fontWeight="600" letterSpacing="0.06em">🔧 VŽDY MIN. 3 NABÍDKY · OVĚŘ IČO · POŽADUJ SMLOUVU · ZÁLOHA MAX. 30 %</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#kde-hledat">Kde hledat řemeslníka</a></li>
                <li><a href="#overit">Jak řemeslníka prověřit</a></li>
                <li><a href="#nabidka">Co musí nabídka obsahovat</a></li>
                <li><a href="#smlouva">Smlouva o dílo</a></li>
                <li><a href="#varovani">Varovné signály</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="kde-hledat">
              <h2>Kde hledat řemeslníka</h2>
              <ul>
                <li><strong>Doporučení od přátel nebo rodiny:</strong> Nejspolehlivější zdroj — osobní zkušenost nelže. Ptej se konkrétně: "Byl jsi spokojený s kvalitou? Dodržel termíny? Kolik to stálo nakonec oproti nabídce?"</li>
                <li><strong>Google recenze:</strong> Hledej firmy s min. 20 recenzemi a hodnocením 4,5+. Přečti negativní recenze — jak firma reaguje na problémy je důležité.</li>
                <li><strong>Portály řemeslníků:</strong> Remesla.cz, Poptávka.cz, Stavebniny.cz — registrovaní řemeslníci s hodnoceními. Přečti reference a vyžádej si kontakty na předchozí zákazníky.</li>
                <li><strong>Sousedé a místní skupiny:</strong> Facebook skupiny "Rekonstrukce Praha/Brno..." nebo sousedé z vchodu — rychlé místní doporučení.</li>
                <li><strong>Vyhnout se:</strong> Nesolicited letáky nebo telefonáty od neznámých firem ("nabízíme levné zateplení / výměnu oken"). Klasický postup podvodníků.</li>
              </ul>
            </section>

            <section id="overit">
              <h2>Jak řemeslníka prověřit</h2>
              <ul>
                <li><strong>IČO v obchodním rejstříku:</strong> Ověř na justice.cz (s.r.o., a.s.) nebo rzp.cz (OSVČ). Firma musí existovat a být aktivní. Dlužník v insolvenci = nespolehlivý.</li>
                <li><strong>Živnostenské oprávnění:</strong> Na rzp.cz ověř jestli má řemeslník platné živnostenské oprávnění pro daný obor (elektrikář, instalatér, stavební firma).</li>
                <li><strong>Reference a fotografie prací:</strong> Požádej o fotografie realizovaných zakázek. Seriózní řemeslník má portfolio. Ještě lépe — kontakt na předchozího zákazníka.</li>
                <li><strong>Pojištění odpovědnosti:</strong> Řemeslník by měl mít pojištění odpovědnosti za škody. Zeptej se přímo: "Máte pojištění a jaká je výše krytí?"</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Kontaktuj min. 3 řemeslníky a porovnej nabídky. Rozdíl cen 50–100 % je normální. Nejlevnější nabídka skoro nikdy neznamená nejlepší výsledek.</div>
            </section>

            <section id="nabidka">
              <h2>Co musí nabídka obsahovat</h2>
              <ul>
                <li><strong>Přesný popis prací:</strong> Ne "rekonstrukce koupelny" ale "bourání starých obkladů, pokládka nových obkladů 15 m², instalace WC, umyvadla a sprchového koutu, veškeré zednické práce".</li>
                <li><strong>Cena materiálu zvlášť od práce:</strong> Musíš vědět kolik platíš za práci a kolik za materiál. Umožňuje to srovnání nabídek.</li>
                <li><strong>Termín zahájení a dokončení:</strong> Konkrétní data, ne "zhruba za měsíc".</li>
                <li><strong>Co není zahrnuto:</strong> Vícepráce, odvoz odpadu, malování po dokončení — co přesně cena nezahrnuje. Orientační náklady na malování zjistíš přes <Link href="/kalkulacky/cena-malovani" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačku ceny malování</Link>.</li>
                <li><strong>Záruční podmínky:</strong> Zákonná záruční lhůta je 2 roky na stavební práce. Seriózní řemeslník ji v nabídce uvede.</li>
              </ul>
            </section>

            <section id="smlouva">
              <h2>Smlouva o dílo – základ ochrany</h2>
              <p>Bez písemné smlouvy nemáš při špatné práci nebo nedodržení termínů téměř žádnou ochranu. Trvej na smlouvě u každé zakázky nad 5 000 Kč.</p>
              <ul>
                <li><strong>Co smlouva musí obsahovat:</strong> Identifikace obou stran (IČO), přesný popis prací, cena a způsob platby, termíny, záruční podmínky, sankce za nedodržení termínu.</li>
                <li><strong>Záloha max. 30 %:</strong> Standardní záloha je 20–30 % ceny před zahájením prací. Požadavek 100 % zálohy předem = varovný signál.</li>
                <li><strong>Platba po etapách:</strong> U větších zakázek platit po etapách — po dokončení každé fáze, ne celou částku předem.</li>
                <li><strong>Předávací protokol:</strong> Po dokončení prací podepsat předávací protokol. Zaznamenat případné nedodělky a termín jejich opravy.</li>
              </ul>
            </section>

            <section id="varovani">
              <h2>Varovné signály podvodného řemeslníka</h2>
              <ul>
                <li><strong>Odmítá písemnou smlouvu:</strong> "Dáme si to na ruku, já jsem poctivý" — klasický začátek problémů.</li>
                <li><strong>Požaduje 100 % zálohu předem:</strong> Zaplatíš a řemeslník zmizí nebo nedokončí práci.</li>
                <li><strong>Cena výrazně nižší než konkurence:</strong> Za výrazně nižší cenou jsou skryté vícepráce, nekvalitní materiál nebo nedokončená práce.</li>
                <li><strong>Tlak na rychlé rozhodnutí:</strong> "Jen dnes mám volný termín" nebo "Jinak zdražím" — manipulace k unáhlenému rozhodnutí.</li>
                <li><strong>Neexistující IČO nebo firma:</strong> Kontakt jen přes mobil, žádná adresa, žádné IČO.</li>
                <li><strong>Platba jen v hotovosti bez dokladu:</strong> Žádný daňový doklad = žádný důkaz platby = žádná reklamace.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Jak dlouho dopředu objednat řemeslníka?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Kvalitní řemeslníci jsou vytížení — počítej s 4–8 týdny čekání na první schůzku a dalšími 2–4 týdny na vypracování nabídky. Pro jarní a letní sezónu (duben–září) poptávej v únoru nebo březnu. Řemeslník dostupný okamžitě může být signálem nízkého zájmu o jeho práce.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Co dělat když řemeslník odvede nekvalitní práci?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Reklamuj písemně s fotografiemi a popisem vad. Zákonná záruční lhůta je 2 roky na stavební práce. Firma musí vady opravit nebo poskytnout slevu z ceny. Odmítá-li — obrátit se na Českou obchodní inspekci nebo soud. Proto je smlouva a předávací protokol tak důležitý — bez nich je reklamace složitá.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Je lepší vybírat řemeslníka podle ceny nebo referencí?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Reference jsou vždy důležitější. Nejlevnější nabídka skoro nikdy neznamená nejlepší výsledek — levný řemeslník používá levnější materiál, spěchá nebo přidá vícepráce které navýší cenu. Výzkumy ukazují že zákazníci kteří si vybrali nejlevnější nabídku zaplatili průměrně o 40 % více kvůli opravám a vícepracím.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/najit-proveri-remeslnika" title="Jak najít a prověřit řemeslníka – na co si dát pozor 2026" />

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
                <li><a href="#kde-hledat">Kde hledat</a></li>
                <li><a href="#overit">Jak prověřit</a></li>
                <li><a href="#nabidka">Co musí nabídka obsahovat</a></li>
                <li><a href="#smlouva">Smlouva o dílo</a></li>
                <li><a href="#varovani">Varovné signály</a></li>
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
