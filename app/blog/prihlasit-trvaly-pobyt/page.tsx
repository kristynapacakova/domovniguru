import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak přihlásit trvalý pobyt na nové adrese – postup 2026",
  description: "Jak přihlásit trvalý pobyt na nové adrese krok za krokem. Které doklady přinést, na jaký úřad jít, lhůty a co se změní po přihlášení trvalého pobytu.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/prihlasit-trvaly-pobyt" },
  openGraph: { title: "Jak přihlásit trvalý pobyt 2026", description: "Postup přihlášení trvalého pobytu – doklady, úřad, lhůty a co se změní.", url: "https://www.domovniguru.cz/blog/prihlasit-trvaly-pobyt", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-05-01T08:00:00Z", modifiedTime: "2026-05-01T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20p%C5%99ihl%C3%A1sit%20trval%C3%BD%20pobyt%20na%20nov%C3%A9%20adrese%20%E2%80%93%20postup%202026", width: 1200, height: 630, alt: "Jak přihlásit trvalý pobyt na nové adrese – postup 2026" }] },
  twitter: { card: "summary_large_image", title: "Jak přihlásit trvalý pobyt 2026", description: "Doklady, úřad a lhůty – jak přihlásit trvalý pobyt krok za krokem." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/prihlasit-trvaly-pobyt#article",
    "headline": "Jak přihlásit trvalý pobyt na nové adrese – postup 2026",
    "datePublished": "2026-05-01T08:00:00Z",
    "dateModified": "2026-05-01T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["přihlásit trvalý pobyt", "změna trvalého pobytu", "přihlášení k trvalému pobytu", "ohlašovna trvalý pobyt", "doklady trvalý pobyt"]
  }]
};

const RELATED = [
  { title: "Stěhovací checklist", href: "/blog/stehovani-checklist", read: "6 min" },
  { title: "Co zkontrolovat při přebírání nového bytu", href: "/blog/prebrani-bytu-checklist", read: "4 min" },
  { title: "Jak vybrat stěhovací firmu", href: "/blog/vybrat-stehovaci-firmu", read: "5 min" },
  { title: "Jak odhalit skryté vady bytu", href: "/blog/odhalit-skryte-vady-bytu", read: "6 min" },
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
              <span>Přihlášení trvalého pobytu</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏠 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 4 min čtení</span>
              </div>
              <h1 className="article-h1">Jak přihlásit trvalý pobyt na nové adrese – postup</h1>
              <p className="article-lead">Přihlášení trvalého pobytu je jedna z prvních věcí po stěhování. Trvá to 15 minut na úřadě a potřebuješ jen pár dokladů. Tady je přesný postup.</p>
              <div className="article-meta-row"><span>Aktualizováno: 1. května 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/prihlasit-trvaly-pobyt" title="Jak přihlásit trvalý pobyt na nové adrese – postup 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 155" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="155" fill="#f8f6f2"/>
                <text x="380" y="22" textAnchor="middle" fontSize="10" fill="#6a6050" fontWeight="700" letterSpacing="0.04em">CO PŘINÉST NA OHLAŠOVNU – CHECKLIST</text>
                {[
                  { x:20, icon:"🪪", item:"Občanský průkaz", note:"Platný OP nebo pas", req:"Povinné", color:"#4a90d9" },
                  { x:190, icon:"🏠", item:"Doklad o právu\nk nemovitosti", note:"Výpis z KN nebo\nnájemní smlouva", req:"Povinné", color:"#5a9e6f" },
                  { x:360, icon:"✍️", item:"Souhlas vlastníka", note:"Pokud nejsi vlastník\npodpis před úředníkem", req:"Pokud nájemník", color:"#f59e0b" },
                  { x:530, icon:"📄", item:"Přihlašovací\nlístek", note:"Vyplníš na místě\nnebo stáhni online", req:"Vyplníš na místě", color:"#9b6fd4" },
                  { x:660, icon:"💶", item:"Správní poplatek", note:"Přihlášení je\nZDARMA", req:"0 Kč", color:"#5a9e6f" },
                ].map(({x, icon, item, note, req, color}) => (
                  <g key={x} transform={`translate(${x}, 28)`}>
                    <rect x="0" y="0" width="120" height="110" rx="8" fill="#fff" stroke={color} strokeWidth="1.2"/>
                    <text x="60" y="26" textAnchor="middle" fontSize="20">{icon}</text>
                    {item.split('\n').map((t,i) => <text key={i} x="60" y={44+i*13} textAnchor="middle" fontSize="9" fill={color} fontWeight="700">{t}</text>)}
                    <line x1="8" y1="70" x2="112" y2="70" stroke={color} strokeWidth="0.5" opacity="0.4"/>
                    {note.split('\n').map((n,i) => <text key={i} x="60" y={83+i*11} textAnchor="middle" fontSize="7.5" fill="#4a4a40">{n}</text>)}
                    <rect x="6" y="98" width="108" height="10" rx="3" fill={color} opacity="0.12"/>
                    <text x="60" y="106" textAnchor="middle" fontSize="7" fill={color} fontWeight="600">{req}</text>
                  </g>
                ))}
                <rect y="138" width="760" height="17" fill="#f0ece8" opacity="0.5"/>
                <text x="380" y="150" textAnchor="middle" fontSize="8" fill="#8a7050" fontWeight="600" letterSpacing="0.06em">🏛️ OHLAŠOVNA = OBECNÍ ÚŘAD NEBO ÚŘAD MĚSTSKÉ ČÁSTI · PŘIHLÁŠENÍ JE ZDARMA · DO 15 MINUT</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#kde">Kde přihlásit trvalý pobyt</a></li>
                <li><a href="#doklady">Jaké doklady přinést</a></li>
                <li><a href="#postup">Postup krok za krokem</a></li>
                <li><a href="#co-zmenit">Co změnit po přihlášení</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="kde">
              <h2>Kde přihlásit trvalý pobyt</h2>
              <ul>
                <li><strong>Ohlašovna:</strong> Trvalý pobyt se přihlašuje na ohlašovně — to je obecní úřad nebo úřad městské části v místě nové adresy. V Praze jde o příslušný úřad městské části (Praha 1, Praha 2 atd.).</li>
                <li><strong>Online přes datovou schránku:</strong> Pokud máš datovou schránku, lze přihlášení provést elektronicky bez návštěvy úřadu. Podání musí být podepsáno uznávaným elektronickým podpisem.</li>
                <li><strong>Úřední hodiny:</strong> Ověř si úřední hodiny předem na webu příslušného úřadu — liší se dle obce. Většina úřadů přijímá v pondělí a ve středu.</li>
              </ul>
            </section>

            <section id="doklady">
              <h2>Jaké doklady přinést</h2>
              <ul>
                <li><strong>Platný občanský průkaz nebo cestovní pas.</strong></li>
                <li><strong>Doklad o právu k nemovitosti:</strong> Pokud jsi vlastník — výpis z katastru nemovitostí nebo kupní smlouva s vyznačením vkladu do KN. Pokud jsi nájemník — nájemní smlouva. Pokud bydlíš u příbuzných — písemný souhlas vlastníka (podpis ověřený nebo před úředníkem).</li>
                <li><strong>Přihlašovací lístek:</strong> Formulář "Přihlašovací lístek k trvalému pobytu" — vyplníš přímo na místě nebo stáhni z webu úřadu předem.</li>
                <li><strong>Správní poplatek:</strong> Přihlášení trvalého pobytu je zdarma (0 Kč). Platí se pouze za výpis z evidence obyvatel (50 Kč) pokud ho chceš.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud jsi nájemník a pronajímatel nemůže přijít osobně, jeho podpis na souhlasu musí být úředně ověřen (Czech POINT, notář) nebo ho podepíše před úředníkem na ohlašovně.</div>
            </section>

            <section id="postup">
              <h2>Postup krok za krokem</h2>
              <ul>
                <li><strong>Krok 1:</strong> Zjisti adresu příslušné ohlašovny (obecní úřad nebo úřad MČ v místě nového bydliště).</li>
                <li><strong>Krok 2:</strong> Připrav doklady — OP, doklad o nemovitosti, případně souhlas vlastníka.</li>
                <li><strong>Krok 3:</strong> Přijď na ohlašovnu v úřední hodiny. Na místě vyplníš přihlašovací lístek.</li>
                <li><strong>Krok 4:</strong> Úředník zpracuje přihlášení — trvá to 5–15 minut. Dostaneš potvrzení o přihlášení.</li>
                <li><strong>Krok 5:</strong> Požádej o výměnu občanského průkazu s novou adresou — to se provádí zvlášť na matrice nebo na Czech POINTu. Výměna OP: do 15 pracovních dní, poplatek 0 Kč (do 60 dní od přihlášení).</li>
              </ul>
            </section>

            <section id="co-zmenit">
              <h2>Co změnit po přihlášení trvalého pobytu</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Co změnit</th><th>Kde</th><th>Lhůta</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Občanský průkaz</strong></td><td>Matrika / Czech POINT</td><td>Do 15 prac. dní (doporučeno)</td></tr>
                    <tr><td><strong>Řidičský průkaz</strong></td><td>Obecní úřad / autoškola</td><td>Bez lhůty (doporučeno brzy)</td></tr>
                    <tr><td><strong>Zaměstnavatel</strong></td><td>Mzdová účetní</td><td>Co nejdříve</td></tr>
                    <tr><td><strong>Banka</strong></td><td>Pobočka nebo online</td><td>Co nejdříve</td></tr>
                    <tr><td><strong>Pojišťovna</strong></td><td>Online nebo pobočka</td><td>Do 30 dní</td></tr>
                    <tr><td><strong>Zdravotní pojišťovna</strong></td><td>Online nebo pobočka</td><td>Do 30 dní</td></tr>
                    <tr><td><strong>Finanční úřad</strong></td><td>Online (daňový portál)</td><td>Do 15 dní</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Do kdy musím přihlásit trvalý pobyt?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Zákon nestanovuje přesnou lhůtu pro přihlášení trvalého pobytu v rámci ČR. Přihlásit se můžeš kdykoli. Doporučujeme to udělat co nejdříve — zejména kvůli doručování pošty, správě daní a přístupu k místním službám. Zaměstnavatel a finanční úřad by o změně měly vědět do 15 dní.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Může pronajímatel odmítnout souhlas s přihlášením?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Pronajímatel má právo odmítnout souhlas s přihlášením trvalého pobytu — není to zákonná povinnost pronajímatele. V praxi to záleží na dohodě při uzavírání nájemní smlouvy. Pokud souhlas odmítne, nemůžeš se přihlásit na dané adrese. Přihlášení trvalého pobytu bez souhlasu vlastníka není možné.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Co se stane se starým trvalým pobytem?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Přihlášením na nové adrese automaticky zaniká trvalý pobyt na staré adrese — nemusíš se odhlašovat. Evidence obyvatel si změnu zpracuje sama. Starý trvalý pobyt přestane platit v okamžiku přihlášení na nové adrese.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/prihlasit-trvaly-pobyt" title="Jak přihlásit trvalý pobyt na nové adrese – postup 2026" />

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
                <li><a href="#kde">Kde přihlásit</a></li>
                <li><a href="#doklady">Jaké doklady</a></li>
                <li><a href="#postup">Postup krok za krokem</a></li>
                <li><a href="#co-zmenit">Co změnit po přihlášení</a></li>
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
        .article-table-wrap{overflow-x:auto;margin:16px 0 24px}.article-table{width:100%;border-collapse:collapse;font-size:14px;line-height:1.5}
        .article-table th{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);padding:10px 14px;text-align:left;border-bottom:2px solid var(--border);background:var(--surface)}
        .article-table td{padding:10px 14px;border-bottom:1px solid var(--border);vertical-align:top;color:#2a2a28;font-weight:300}.article-table tr:last-child td{border-bottom:none}
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
