import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak naplánovat rekonstrukci bytu – rozpočet a pořadí prací 2026",
  description: "Jak naplánovat rekonstrukci bytu od A do Z. Správné pořadí prací, realistický rozpočet, výběr řemeslníků a časový harmonogram. Bez nepříjemných překvapení.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/planovani-rekonstrukce-bytu" },
  openGraph: { title: "Jak naplánovat rekonstrukci bytu 2026", description: "Správné pořadí prací, realistický rozpočet a výběr řemeslníků – bez překvapení.", url: "https://www.domovniguru.cz/blog/planovani-rekonstrukce-bytu", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-15T08:00:00Z", modifiedTime: "2026-04-15T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak naplánovat rekonstrukci bytu 2026", description: "Správné pořadí prací, realistický rozpočet a výběr řemeslníků." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/planovani-rekonstrukce-bytu#article",
    "headline": "Jak naplánovat rekonstrukci bytu – rozpočet a pořadí prací 2026",
    "datePublished": "2026-04-15T08:00:00Z",
    "dateModified": "2026-04-15T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak naplánovat rekonstrukci bytu", "pořadí prací rekonstrukce", "rozpočet rekonstrukce bytu", "rekonstrukce bytu postup", "výběr řemeslníků rekonstrukce"]
  }]
};

const RELATED = [
  { title: "Jak odhadnout cenu rekonstrukce předem", href: "/blog/odhadnout-cenu-rekonstrukce", read: "5 min" },
  { title: "Kolik stojí rekonstrukce koupelny", href: "/blog/cena-rekonstrukce-koupelny", read: "5 min" },
  { title: "Jak najít a prověřit řemeslníka", href: "/blog/najit-proveri-remeslnika", read: "5 min" },
  { title: "Jak zateplit byt bez rekonstrukce", href: "/blog/zateplit-byt-bez-rekonstrukce", read: "6 min" },
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
              <span>Plánování rekonstrukce</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏠 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 8 min čtení</span>
              </div>
              <h1 className="article-h1">Jak naplánovat rekonstrukci bytu – rozpočet a pořadí prací</h1>
              <p className="article-lead">Rekonstrukce bez plánu skončí přetažením rozpočtu, špatným pořadím prací a stresem. S dobrým plánem zvládneš i kompletní rekonstrukci bez nepříjemných překvapení. Tady je jak na to.</p>
              <div className="article-meta-row"><span>Aktualizováno: 15. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/planovani-rekonstrukce-bytu" title="Jak naplánovat rekonstrukci bytu – rozpočet a pořadí prací 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 205" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="205" fill="#f8f6f2"/>

                {/* Časová osa rekonstrukce */}
                <text x="380" y="22" textAnchor="middle" fontSize="10" fill="#6a6050" fontWeight="700" letterSpacing="0.04em">SPRÁVNÉ POŘADÍ PRACÍ PŘI REKONSTRUKCI BYTU</text>

                {/* Osa */}
                <line x1="30" y1="80" x2="730" y2="80" stroke="#d0c8c0" strokeWidth="2"/>

                {[
                  { x:30, n:"1", label:"Projekt\na povolení", color:"#9b6fd4", sub:"2–4 týdny" },
                  { x:145, n:"2", label:"Demolice\na bourání", color:"#e07a5f", sub:"3–7 dní" },
                  { x:260, n:"3", label:"Rozvody\n(elektro, voda)", color:"#f59e0b", sub:"1–2 týdny" },
                  { x:375, n:"4", label:"Zednické\npráce", color:"#4a90d9", sub:"2–4 týdny" },
                  { x:490, n:"5", label:"Podlahy\na obklady", color:"#5a9e6f", sub:"1–3 týdny" },
                  { x:605, n:"6", label:"Malování\na dokončení", color:"#8B6340", sub:"1–2 týdny" },
                  { x:720, n:"7", label:"Nábytek\na vybavení", color:"#3a7e4f", sub:"1–2 týdny" },
                ].map(({x, n, label, color, sub}) => (
                  <g key={n}>
                    <circle cx={x} cy="80" r="16" fill={color} opacity="0.9"/>
                    <text x={x} y="85" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="700">{n}</text>
                    {label.split('\n').map((line, i) => (
                      <text key={i} x={x} y={110+i*13} textAnchor="middle" fontSize="8" fill="#4a4a40" fontWeight="500">{line}</text>
                    ))}
                    <text x={x} y="145" textAnchor="middle" fontSize="7.5" fill={color}>{sub}</text>
                  </g>
                ))}

                {/* Šipky */}
                {[85,200,315,430,545,660].map((x,i) => (
                  <path key={i} d={`M${x} 80 L${x+20} 80`} stroke="#c8c0b8" strokeWidth="1.5" strokeLinecap="round"/>
                ))}

                {/* Rozpočet box */}
                <rect x="30" y="158" width="700" height="35" rx="8" fill="#fff" stroke="#e0d8d0" strokeWidth="1"/>
                <text x="380" y="171" textAnchor="middle" fontSize="8.5" fill="#6a6050" fontWeight="700">💰 REZERVA NA NEČEKANÉ VÝDAJE</text>
                <text x="380" y="185" textAnchor="middle" fontSize="8" fill="#e07040">Vždy počítej s 15–20 % navíc oproti původnímu odhadu — každá rekonstrukce přinese překvapení</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#rozsah">Určení rozsahu rekonstrukce</a></li>
                <li><a href="#rozpocet">Sestavení realistického rozpočtu</a></li>
                <li><a href="#poradi">Správné pořadí prací</a></li>
                <li><a href="#remeslnici">Výběr řemeslníků</a></li>
                <li><a href="#harmonogram">Časový harmonogram</a></li>
                <li><a href="#chyby">Nejčastější chyby</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="rozsah">
              <h2>Určení rozsahu rekonstrukce</h2>
              <p>Před jakýmkoli počítáním peněz nebo voláním řemeslníků musíš přesně vědět co chceš udělat. Nejasný rozsah je nejčastější příčina překročení rozpočtu.</p>
              <ul>
                <li><strong>Projdi byt místnost po místnosti:</strong> Zapiš co je potřeba opravit, co vyměnit a co úplně předělat. Fotodokumentace je základ — foť každý detail.</li>
                <li><strong>Rozhodni co je nutné vs. žádoucí:</strong> Prasklé trubky = nutné. Nová kuchyňská linka = žádoucí. V první fázi řeš nutné, pak žádoucí pokud zbyde rozpočet.</li>
                <li><strong>Zjisti stav rozvodů:</strong> Elektroinstalace, vodovod a kanalizace — jejich stav zásadně ovlivňuje cenu. Starý byt může mít hliníkové vodiče nebo olověné trubky — jejich výměna je drahá ale nutná.</li>
                <li><strong>Zjisti co potřebuje povolení:</strong> Bouraní nosných zdí, přesunutí rozvodů nebo změna dispozice bytové jednotky může vyžadovat stavební povolení. Ověř na stavebním úřadě.</li>
              </ul>
            </section>

            <section id="rozpocet">
              <h2>Sestavení realistického rozpočtu</h2>
              <p>Podhodnocený rozpočet je nejčastější příčina nedokončených rekonstrukcí. Raději plánuj více a buď příjemně překvapený, než naopak.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Práce</th><th>Orientační cena (m² nebo kus)</th><th>Poznámka</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Demolice a bourání</strong></td><td>200–500 Kč/m²</td><td>+ odvoz suti (kontejner 3 000–6 000 Kč)</td></tr>
                    <tr><td><strong>Nová elektroinstalace</strong></td><td>800–1 500 Kč/m²</td><td>Závisí na počtu okruhů</td></tr>
                    <tr><td><strong>Nový vodovod + odpad</strong></td><td>1 000–2 500 Kč/m²</td><td>Koupelna nebo kuchyně</td></tr>
                    <tr><td><strong>Omítky a stěrky</strong></td><td>300–600 Kč/m²</td><td>Strojní omítka levnější</td></tr>
                    <tr><td><strong>Pokládka dlažby</strong></td><td>400–800 Kč/m²</td><td>Bez materiálu</td></tr>
                    <tr><td><strong>Plovoucí podlaha</strong></td><td>150–400 Kč/m²</td><td>Bez materiálu</td></tr>
                    <tr><td><strong>Malování</strong></td><td>100–250 Kč/m²</td><td>Bez materiálu</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Zlaté pravidlo:</strong> K celkovému odhadu přidej vždy <strong>15–20 % rezervu</strong> na nečekané výdaje. Každá rekonstrukce přinese překvapení — skrytá vlhkost, starší vedení než se čekalo, nebo změna názoru v průběhu prací.</div>
            </section>

            <section id="poradi">
              <h2>Správné pořadí prací</h2>
              <p>Pořadí prací není náhodné — špatné pořadí znamená že musíš hotovou práci rozbít nebo překopat.</p>
              <ul>
                <li><strong>1. Projekt a povolení:</strong> Pokud je potřeba stavební povolení, zařiď ho jako první — může trvat měsíce. Bez povolení nezačínej.</li>
                <li><strong>2. Demolice a bourání:</strong> Vybourání starých rozvodů, obkladů, podlah a nepotřebných příček. Odvoz suti.</li>
                <li><strong>3. Hrubé rozvody (elektro, voda, topení):</strong> Nové rozvody se vedou před omítkami a obklady — ne naopak. Elektrikář, instalatér.</li>
                <li><strong>4. Zednické práce:</strong> Nové příčky, omítky, potěry. Po dokončení musí zaschnout — min. 2–4 týdny před pokládkou podlah.</li>
                <li><strong>5. Podlahy a obklady:</strong> Dlažba, plovoucí podlaha. Po zaschnutí potěru.</li>
                <li><strong>6. Dokončovací práce:</strong> Malování, sádrokarton, lišty, dveře, osvětlení. Maluje se jako poslední.</li>
                <li><strong>7. Nábytek a vybavení:</strong> Kuchyňská linka, sanitární vybavení, nábytek — až po dokončení všech stavebních prací.</li>
              </ul>
              <div className="article-tip"><strong>⚠️ Nikdy nemaluj před pokládkou podlahy!</strong> Nejčastější chyba — barva se zamaže při pokládce. Správné pořadí: podlaha → lišty → malování.</div>
            </section>

            <section id="remeslnici">
              <h2>Výběr řemeslníků</h2>
              <ul>
                <li><strong>Vyžádej min. 3 nabídky:</strong> Pro každou profesi (elektrikář, instalatér, obkladač, malíř) vyžádej aspoň 3 nezávislé nabídky. Rozdíl cen může být 50–100 %.</li>
                <li><strong>Ověř reference:</strong> Požádej o kontakty na předchozí zákazníky a zavolej jim. Online recenze jsou doplněk, ne náhrada za osobní reference.</li>
                <li><strong>Smlouva o dílo:</strong> Pro každou větší práci (nad 10 000 Kč) trvej na písemné smlouvě s přesným rozsahem prací, termínem dokončení a způsobem platby.</li>
                <li><strong>Platební podmínky:</strong> Standardní záloha 20–30 %, zbytek po dokončení prací a předání. Nikdy neplať 100 % předem.</li>
                <li><strong>Koordinace prací:</strong> Zajisti aby řemeslníci navazovali plynule — zbytečné čekání prodražuje pronájem náhradního bydlení.</li>
              </ul>
            </section>

            <section id="harmonogram">
              <h2>Časový harmonogram</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Rozsah rekonstrukce</th><th>Orientační doba</th><th>Poznámka</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Koupelna (6–10 m²)</strong></td><td>3–6 týdnů</td><td>Závisí na složitosti instalací</td></tr>
                    <tr><td><strong>Kuchyně</strong></td><td>2–4 týdny</td><td>+ čekání na linku (4–8 týdnů)</td></tr>
                    <tr><td><strong>Jeden pokoj</strong></td><td>1–3 týdny</td><td>Malování, podlaha, lišty</td></tr>
                    <tr><td><strong>Celý byt (50–70 m²)</strong></td><td>2–4 měsíce</td><td>Kompletní rekonstrukce</td></tr>
                    <tr><td><strong>Celý byt + rozvody</strong></td><td>3–6 měsíců</td><td>Nová elektrika, vodovod</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Přidej k harmonogramu 20–30 % časovou rezervu — řemeslníci nestíhají, materiál se opozdí, nebo najdeš nečekaný problém. Rekonstrukce jsou téměř vždy delší než plánováno.</div>
            </section>

            <section id="chyby">
              <h2>Nejčastější chyby při plánování rekonstrukce</h2>
              <ul>
                <li><strong>Podhodnocení rozpočtu:</strong> Nejčastější chyba. Vždy počítej s 15–20 % rezervou navíc.</li>
                <li><strong>Špatné pořadí prací:</strong> Malování před podlahou, rozvody po omítkách — nutné přepracování zdraží vše.</li>
                <li><strong>Výběr nejlevnějšího řemeslníka:</strong> Nejnižší cena často znamená nejnižší kvalitu nebo skryté vícepráce. Hledej nejlepší poměr cena/reference.</li>
                <li><strong>Žádná písemná smlouva:</strong> Ústní dohoda nestačí — spory o rozsah prací, termíny a platby jsou bez smlouvy nevyřešitelné.</li>
                <li><strong>Rekonstrukce za bydlení v bytě:</strong> Pokud je to možné, přestěhuj se dočasně jinam — práce probíhají rychleji, řemeslníci mají volný přístup a ty nemáš stres.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Kde začít při plánování rekonstrukce?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Začni průzkumem bytu a seznamem co chceš změnit. Pak zjisti stav rozvodů (elektro, voda) — jejich stav zásadně ovlivňuje cenu. Teprve pak kontaktuj řemeslníky pro první orientační nabídky. Nepodepisuj nic a nikomu neplať předem dokud nemáš celkový přehled o rozsahu a ceně.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Kolik stojí kompletní rekonstrukce bytu?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Kompletní rekonstrukce bytu 50–70 m² (bez nábytku) stojí orientačně 500 000–1 200 000 Kč v závislosti na rozsahu, kvalitě materiálů a lokalitě. Praha je zpravidla o 20–40 % dražší než regiony. Podrobněji v článku Kolik stojí rekonstrukce koupelny — tamní ceny jsou dobrým ukazatelem pro ostatní práce.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Potřebuji stavební povolení na rekonstrukci bytu?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Běžná rekonstrukce (malování, podlahy, koupelna, kuchyň) nevyžaduje stavební povolení. Povolení nebo ohlášení je potřeba pokud bouráš nosné zdi, měníš dispozici bytu nebo přesouváš rozvody způsobem který ovlivňuje společné části domu. Vždy ověř na stavebním úřadě nebo u správce budovy.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/planovani-rekonstrukce-bytu" title="Jak naplánovat rekonstrukci bytu – rozpočet a pořadí prací 2026" />

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
                <li><a href="#rozsah">Rozsah rekonstrukce</a></li>
                <li><a href="#rozpocet">Realistický rozpočet</a></li>
                <li><a href="#poradi">Pořadí prací</a></li>
                <li><a href="#remeslnici">Výběr řemeslníků</a></li>
                <li><a href="#harmonogram">Časový harmonogram</a></li>
                <li><a href="#chyby">Nejčastější chyby</a></li>
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
