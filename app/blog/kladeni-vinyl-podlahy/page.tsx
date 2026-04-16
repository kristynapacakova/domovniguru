import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak pokládat vinylovou podlahu – krok za krokem 2026",
  description: "Pokládka vinylové podlahy za víkend svépomocí. Příprava podkladu, výběr správného vinylu, kladení desek a lišty. Postup pro začátečníky bez speciálního nářadí.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/kladeni-vinyl-podlahy" },
  openGraph: { title: "Jak pokládat vinylovou podlahu 2026", description: "Vinyl podlaha za víkend – příprava podkladu, kladení a lišty krok za krokem.", url: "https://www.domovniguru.cz/blog/kladeni-vinyl-podlahy", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-15T08:00:00Z", modifiedTime: "2026-04-15T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak pokládat vinylovou podlahu 2026", description: "Vinyl podlaha za víkend – příprava podkladu, kladení a lišty." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/kladeni-vinyl-podlahy#article",
    "headline": "Jak pokládat vinylovou podlahu – krok za krokem 2026",
    "datePublished": "2026-04-15T08:00:00Z",
    "dateModified": "2026-04-15T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak pokládat vinylovou podlahu", "vinyl podlaha pokládka", "LVT podlaha postup", "vinylové desky kladení", "příprava podkladu vinyl", "vinyl podlaha DIY"]
  }]
};

const RELATED = [
  { title: "Jak naplánovat rekonstrukci bytu", href: "/blog/planovani-rekonstrukce-bytu", read: "8 min" },
  { title: "Jak renovovat parketovou podlahu", href: "/blog/renovovat-parkety", read: "6 min" },
  { title: "Jak zateplit byt bez rekonstrukce", href: "/blog/zateplit-byt-bez-rekonstrukce", read: "6 min" },
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
              <span>Pokládka vinylové podlahy</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏠 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak pokládat vinylovou podlahu – krok za krokem</h1>
              <p className="article-lead">Vinylová podlaha je nejoblíbenější podlahová krytina posledních let — vodoodolná, teplá, tichá a snadno se pokládá. Místnost 20 m² zvládneš sám za jeden den.</p>
              <div className="article-meta-row"><span>Aktualizováno: 15. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/kladeni-vinyl-podlahy" title="Jak pokládat vinylovou podlahu – krok za krokem 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 195" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="195" fill="#f4f0ec"/>
                <defs>
                  <linearGradient id="vinylBoard" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#c8b890"/><stop offset="100%" stopColor="#b0a078"/>
                  </linearGradient>
                </defs>

                {/* Typy vinylu */}
                {[
                  { x:20, name:"Click vinyl", sub:"LVT / SPC", icon:"🔒", desc:"Spojení na klik\nbez lepení\nnejpopulárnější", color:"#5a9e6f" },
                  { x:215, name:"Lepený vinyl", sub:"LVT glue-down", icon:"🖐", desc:"Lepí se k podkladu\nvhodný pro kuchyň\npevnější spojení", color:"#4a90d9" },
                  { x:410, name:"Samolepící vinyl", sub:"peel & stick", icon:"⬛", desc:"Odlepí a přilep\nnejsnazší montáž\nméně trvanlivý", color:"#f59e0b" },
                  { x:590, name:"Vinylový pás", sub:"role", icon:"📜", desc:"Celistvý bez spár\nvhodný do koupelny\npro profíky", color:"#9b6fd4" },
                ].map(({x, name, sub, icon, desc, color}) => (
                  <g key={x} transform={`translate(${x}, 15)`}>
                    <rect x="0" y="0" width="165" height="160" rx="8" fill="#fff" stroke={color} strokeWidth="1" opacity="0.9"/>
                    <rect x="0" y="0" width="165" height="5" rx="4" fill={color} opacity="0.4"/>
                    <text x="82" y="35" textAnchor="middle" fontSize="22">{icon}</text>
                    <text x="82" y="58" textAnchor="middle" fontSize="10" fill={color} fontWeight="700">{name}</text>
                    <text x="82" y="72" textAnchor="middle" fontSize="8" fill="#8a8078">{sub}</text>
                    <line x1="15" y1="80" x2="150" y2="80" stroke={color} strokeWidth="0.5" opacity="0.3"/>
                    {desc.split('\n').map((line, i) => (
                      <text key={i} x="82" y={96+i*16} textAnchor="middle" fontSize="8.5" fill="#4a4a40">{line}</text>
                    ))}
                  </g>
                ))}

                <rect y="178" width="760" height="17" fill="#e8e0d4" opacity="0.5"/>
                <text x="380" y="190" textAnchor="middle" fontSize="8" fill="#8a7050" fontWeight="600" letterSpacing="0.06em">🏠 CLICK VINYL = NEJLEPŠÍ VOLBA PRO DIY · VODOODOLNÝ · TEPLÝ · SNADNO OPRAVITELNÝ</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#typy">Typy vinylových podlah</a></li>
                <li><a href="#vyber">Jak vybrat správný vinyl</a></li>
                <li><a href="#podklad">Příprava podkladu</a></li>
                <li><a href="#aklimatizace">Aklimatizace</a></li>
                <li><a href="#pokladka">Pokládka krok za krokem</a></li>
                <li><a href="#listy">Lišty a dokončení</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="typy">
              <h2>Typy vinylových podlah</h2>
              <p>Vinyl není jen jeden materiál — existuje několik typů které se liší způsobem pokládky, trvanlivostí a cenou.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ</th><th>Cena (m²)</th><th>Pokládka</th><th>Vhodné pro</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Click LVT (plovoucí)</strong></td><td>300–800 Kč</td><td>Na klik, bez lepení</td><td>Obývák, ložnice, chodba</td></tr>
                    <tr><td><strong>SPC (rigid core)</strong></td><td>400–1 000 Kč</td><td>Na klik, tužší jádro</td><td>Kuchyň, koupelna, velké plochy</td></tr>
                    <tr><td><strong>Lepený LVT</strong></td><td>250–600 Kč</td><td>Lepidlem k podkladu</td><td>Komerční prostory, kuchyň</td></tr>
                    <tr><td><strong>Samolepící dlaždice</strong></td><td>150–400 Kč</td><td>Odlep a přilep</td><td>Pronájem, dočasné řešení</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Doporučení:</strong> Pro DIY pokládku v domácnosti doporučujeme <strong>SPC click vinyl</strong> — tužší jádro je odolnější vůči nerovnostem podkladu a lépe snáší vlhkost. Vhodný do všech místností včetně koupelny.</div>
            </section>

            <section id="vyber">
              <h2>Jak vybrat správný vinyl</h2>
              <ul>
                <li><strong>Třída použití:</strong> 23 pro domácnost (střední zátěž), 31–33 pro vyšší zátěž (chodba, dětský pokoj). Neskupuj ušetřit na třídě — levnější se rychleji opotřebuje.</li>
                <li><strong>Tloušťka:</strong> Min. 5 mm pro plovoucí pokládku. Tenčí desky (2–3 mm) jsou vhodné jen pro lepení. Silnější desky (6–8 mm) lépe překryjí drobné nerovnosti a jsou tišší.</li>
                <li><strong>Podložka:</strong> Některé SPC vinyly mají integrovanou podložku (IXPE nebo korek) — není nutná separátní podložka. Bez integrované podložky kup tenkou (1–3 mm) akustickou podložku.</li>
                <li><strong>Vodoodolnost:</strong> Každý vinyl je odolný vůči povrchové vodě. Koupelna nebo kuchyň: zkontroluj certifikaci — ne všechny click vinyly jsou vhodné do trvale mokrých prostor.</li>
              </ul>
            </section>

            <section id="podklad">
              <h2>Příprava podkladu – klíčový krok</h2>
              <p>Vinyl překryje starou podlahu ale neodpustí velké nerovnosti. Maximální povolená nerovnost podkladu je <strong>3 mm na 2 m latě</strong>.</p>
              <ul>
                <li><strong>Vyčisti podklad:</strong> Odstraň veškeré zbytky lepidla, tmel, prach a mastnotu. Vinyl se nesmí pohybovat — čistý podklad je základ.</li>
                <li><strong>Zkontroluj nerovnosti:</strong> Přilož 2m latě nebo vodováhu. Nerovnosti větší než 3 mm vyrovnej samonivelační stěrkou (50–150 Kč/m²). Nechej zaschnout dle návodu (min. 24 hodin).</li>
                <li><strong>Stará dlažba:</strong> Vinyl lze pokládat přímo na stávající dlažbu pokud je pevná, rovná a bez uvolněných dlaždic. Výrazné spáry vyrovnej stěrkou.</li>
                <li><strong>Dřevěná podlaha:</strong> Parketová nebo palubková podlaha musí být pevná — žádné skřípy ani pohyb. Případně přilož podkladovou desku (OSB nebo překližka 6 mm).</li>
                <li><strong>Vlhkost:</strong> Vinyl nesnáší vlhkost pod sebou. Na betonový potěr použij parotěsnou fólii 0,2 mm. Čerstvý potěr nechej vyschnou min. 28 dní.</li>
              </ul>
            </section>

            <section id="aklimatizace">
              <h2>Aklimatizace – proč je důležitá</h2>
              <p>Vinyl je citlivý na teplotu — při pokládce za studena se po zahřátí místnosti roztáhne a podlaha se vyduje. Aklimatizace toto zabrání.</p>
              <ul>
                <li>Nechej balení vinylu ležet v místnosti kde bude pokládka min. <strong>48 hodin</strong></li>
                <li>Teplota místnosti při pokládce: <strong>15–25 °C</strong></li>
                <li>Vlhkost vzduchu: 45–70 %</li>
                <li>Balení neotvírej dokud není aklimatizováno — stačí ponechat v pokoji v uzavřených krabicích</li>
              </ul>
            </section>

            <section id="pokladka">
              <h2>Pokládka vinylové podlahy krok za krokem</h2>
              <ul>
                <li><strong>Krok 1 — Plánování směru:</strong> Desky se obvykle kladou rovnoběžně s delší stěnou místnosti nebo ve směru světla z okna. Naplánuj layout na papíře — cíl je mít krajní řadu min. 5 cm wide (nařezat na polovinu pokud by krajní řada byla příliš úzká).</li>
                <li><strong>Krok 2 — Podložka:</strong> Pokud vinyl nemá integrovanou podložku, rozlož akustickou podložku po celé ploše. Spoje lepte páskou, nepřekrývej.</li>
                <li><strong>Krok 3 — První řada:</strong> Začni u nejrovnější stěny. Nechej dilatační mezeru 8–10 mm u všech stěn (klínky z balení). První řadu kladou stranami drážky ke zdi.</li>
                <li><strong>Krok 4 — Klikování desek:</strong> Další desku přilož pod úhlem ~30°, zacvakni do předchozí desky a překlopit dolů. Správné zacvaknutí uslyšíš. Při obtížném zacvaknutí použij poklepávací klínek a gumové kladivo.</li>
                <li><strong>Krok 5 — Střídání spár:</strong> Každá nová řada musí začínat jinak — spáry nesmí být nad sebou. Minimální přesah spár 20 cm. Zkrácenou desku z konce řady použij jako začátek příští řady.</li>
                <li><strong>Krok 6 — Poslední řada:</strong> Poslední řadu změř a nařezej. Pokud je příliš úzká, přerozděl první a poslední řadu symetricky.</li>
                <li><strong>Krok 7 — Vyjmutí klínků:</strong> Po dokončení pokládky vyjmi všechny dilatační klínky od stěn. Mezera se zakryje lištou.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Vinyl nařezávej ostrým nožem podél pravítka — skór + přelom. Pro složitější tvary (rohy, sloupy) použij kartonovou šablonu. Elektrická pila způsobuje prach a je méně přesná.</div>
            </section>

            <section id="listy">
              <h2>Lišty a dokončení</h2>
              <ul>
                <li><strong>Soklová lišta:</strong> Zakryje dilatační mezeru u stěn. Lepí se na zeď — ne na podlahu (podlaha se musí volně pohybovat). Cena 50–200 Kč/m.</li>
                <li><strong>Přechodová lišta:</strong> Na přechod mezi různými podlahami (vinyl-dlažba, vinyl-koberec). Nutná pokud je výškový rozdíl nebo různé materiály.</li>
                <li><strong>Práh u dveří:</strong> Speciální práh zakryje přechod pod dveřmi. Vybírej výšku prahu odpovídající tloušťce vinylu.</li>
                <li><strong>Závěrečné čištění:</strong> Vinyl vyčisti vlhkým mopem. Nepoužívej agresivní čisticí prostředky ani abrazivní houby — poškodí povrchovou vrstvu.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Mohu pokládat vinyl přes starou dlažbu?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ano, pokud je dlažba pevná, rovná a bez uvolněných dlaždic. Výrazné spáry (nad 3 mm) vyrovnej samonivelační stěrkou. Výhoda: nemusíš bourat starou dlažbu. Nevýhoda: zvedne se úroveň podlahy o tloušťku vinylu (5–8 mm) — zkontroluj výšku dveří.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Je vinyl vhodný do koupelny?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ano — SPC vinyl s certifikací pro mokré prostory je výborná volba do koupelny. Je 100% vodoodolný na povrchu. Pozor: voda nesmí pronikat pod vinyl (skulinami u stěn nebo ve spárách) — proto u koupelnového vinylu použij silikonový tmel u stěn místo soklové lišty.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak opravit poškozené desky vinylu?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Click vinyl lze opravit výměnou poškozené desky — rozklíkovat od stěny až k poškozené desce, vyměnit a zase zakliknout. Je to pracné ale možné. Proto doporučujeme koupit 5–10 % navíc a uschovat jako zásobu pro případné opravy.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Lze pokládat vinyl na podlahové topení?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ano — vinyl je pro podlahové topení vhodný, ale zkontroluj certifikaci výrobce. Maximální teplota povrchu podlahy nesmí překročit 27–29 °C (závisí na výrobci). SPC vinyl je pro podlahové topení vhodnější než měkčí LVT — méně se deformuje při teplotních změnách.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/kladeni-vinyl-podlahy" title="Jak pokládat vinylovou podlahu – krok za krokem 2026" />

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
                <li><a href="#typy">Typy vinylu</a></li>
                <li><a href="#vyber">Jak vybrat</a></li>
                <li><a href="#podklad">Příprava podkladu</a></li>
                <li><a href="#aklimatizace">Aklimatizace</a></li>
                <li><a href="#pokladka">Pokládka krok za krokem</a></li>
                <li><a href="#listy">Lišty a dokončení</a></li>
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
