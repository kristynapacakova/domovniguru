import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Příprava domu na zimu – kompletní checklist 2026",
  description: "Kotel, okna, okapy, voda, zahrada – kompletní checklist přípravy domu na zimu. Co zkontrolovat v říjnu a listopadu aby zima nezaskočila.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/priprava-domu-na-zimu" },
  openGraph: { title: "Příprava domu na zimu – kompletní checklist 2026", description: "Kotel, okna, okapy, voda, zahrada – co zkontrolovat před zimou.", url: "https://www.domovniguru.cz/blog/priprava-domu-na-zimu", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-13T08:00:00Z", modifiedTime: "2026-04-13T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Příprava domu na zimu – kompletní checklist 2026", description: "Kotel, okna, okapy, voda, zahrada – co zkontrolovat před zimou." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/priprava-domu-na-zimu#article",
    "headline": "Příprava domu na zimu – kompletní checklist 2026",
    "datePublished": "2026-04-13T08:00:00Z",
    "dateModified": "2026-04-13T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["příprava domu na zimu", "zazimování domu", "checklist příprava na zimu", "kotel před zimou", "okna těsnění zima", "okapy čištění podzim", "zahrada zazimování"]
  }]
};

const RELATED = [
  { title: "Jak zkontrolovat kotel před topnou sezónou", href: "/blog/zkontrolovat-kotel-pred-zimou", read: "6 min" },
  { title: "Jak odvzdušnit radiátor – krok za krokem", href: "/blog/jak-odvzdusnit-radiatory", read: "5 min" },
  { title: "Jak správně větrat byt", href: "/blog/spravne-vetrat-byt", read: "6 min" },
  { title: "Jak se zbavit vlhkosti v bytě", href: "/blog/zbavit-se-vlhkosti-v-byte", read: "7 min" },
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
              <span>Příprava domu na zimu</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">❄️ Sezónní údržba</Link>
                <span className="article-read-time">⏱ 10 min čtení</span>
              </div>
              <h1 className="article-h1">Příprava domu na zimu – kompletní checklist</h1>
              <p className="article-lead">Prasknutá trubka, kotel který nespustí, ucpané okapy nebo promrzlá zahradní přípojka — to vše jsou problémy které lze předejít hodinou práce v říjnu. Tady je vše co musíš udělat.</p>
              <div className="article-meta-row"><span>Aktualizováno: 13. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/priprava-domu-na-zimu" title="Příprava domu na zimu – kompletní checklist 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 210" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="210" fill="#f0f4f8"/>

                {/* Dům */}
                <g transform="translate(280,15)">
                  <polygon points="0,70 100,70 50,10" fill="#8B5E3C"/>
                  <rect x="8" y="70" width="84" height="110" fill="#f5f0e8" stroke="#e0d8d0" strokeWidth="1.2"/>
                  {/* Okno */}
                  <rect x="18" y="82" width="28" height="28" rx="2" fill="#a8d8f0" stroke="#80b8d8" strokeWidth="1"/>
                  <line x1="32" y1="82" x2="32" y2="110" stroke="#80b8d8" strokeWidth="0.8"/>
                  <line x1="18" y1="96" x2="46" y2="96" stroke="#80b8d8" strokeWidth="0.8"/>
                  {/* Dveře */}
                  <rect x="58" y="120" width="24" height="60" rx="2" fill="#8B6340" stroke="#6b4320" strokeWidth="1"/>
                  <circle cx="76" cy="148" r="2" fill="#c8a870"/>
                  {/* Komín */}
                  <rect x="65" y="18" width="14" height="26" fill="#7a5030"/>
                  {/* Sníh na střeše */}
                  <path d="M0 70 Q25 60 50 65 Q75 58 100 70" fill="#e8f0f8" opacity="0.7"/>
                  {/* Sněhové vločky */}
                  {[[20,40],[60,25],[90,45],[140,30],[160,50]].map(([x,y],i)=>(
                    <text key={i} x={x-100} y={y} fontSize="10" fill="#a8c8e8" opacity="0.6">❄</text>
                  ))}
                </g>

                {/* Kategorie kolem domu */}
                {[
                  { x: 30, y: 50, icon: "🔥", label: "Topení", sub: "kotel, radiátory", color: "#e07040" },
                  { x: 30, y: 110, icon: "🪟", label: "Okna", sub: "těsnění, kování", color: "#4a90d9" },
                  { x: 30, y: 165, icon: "💧", label: "Voda", sub: "přípojky, trubky", color: "#4a90d9" },
                  { x: 540, y: 50, icon: "🍂", label: "Okapy", sub: "čištění listí", color: "#f59e0b" },
                  { x: 540, y: 110, icon: "🌿", label: "Zahrada", sub: "zazimování", color: "#5a9e6f" },
                  { x: 540, y: 165, icon: "🏠", label: "Střecha", sub: "kontrola krytiny", color: "#9b6fd4" },
                ].map(({x, y, icon, label, sub, color}) => (
                  <g key={label}>
                    <rect x={x} y={y-18} width="130" height="38" rx="6" fill="#fff" stroke={color} strokeWidth="0.8" opacity="0.9"/>
                    <text x={x+10} y={y+2} fontSize="14">{icon}</text>
                    <text x={x+30} y={y} fontSize="9" fill={color} fontWeight="700">{label}</text>
                    <text x={x+30} y={y+12} fontSize="7.5" fill="#888880">{sub}</text>
                  </g>
                ))}

                {/* Spojovací čáry */}
                {[
                  [160,69,280,85], [160,129,288,120], [160,184,288,155],
                  [540,69,380,85], [540,129,380,120], [540,184,380,155],
                ].map(([x1,y1,x2,y2],i)=>(
                  <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#c8c0b8" strokeWidth="0.8" strokeDasharray="4,3"/>
                ))}

                {/* Dolní lišta */}
                <rect y="190" width="760" height="20" fill="#e8f0f8" opacity="0.5"/>
                <text x="380" y="203" textAnchor="middle" fontSize="8" fill="#5a7a9a" fontWeight="600" letterSpacing="0.04em">🏠 6 OBLASTÍ · 30+ BODŮ K OVĚŘENÍ · IDEÁLNĚ V ŘÍJNU</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#topeni">Topení a kotel</a></li>
                <li><a href="#okna">Okna a dveře</a></li>
                <li><a href="#voda">Vodovod a trubky</a></li>
                <li><a href="#okapy">Okapy a střecha</a></li>
                <li><a href="#zahrada">Zahrada a terasa</a></li>
                <li><a href="#ostatni">Ostatní – elektřina, sníh, nouzová výbava</a></li>
                <li><a href="#kdy">Kdy co udělat – časový plán</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="topeni">
              <h2>Topení a kotel – priorita číslo jedna</h2>
              <p>Výpadek topení v zimě je nejhorší scénář — a zároveň nejpředvídatelnější. Kotel který celé léto stál potřebuje pozornost před první zimní zátěží.</p>
              <ul>
                <li><strong>☐ Zkontroluj tlak v soustavě</strong> — manometr na kotli, správný tlak za studena 1,5–2,0 bar. Doplň vodu pokud je pod 1 bar.</li>
                <li><strong>☐ Odvzdušni všechny radiátory</strong> — studené nahoře = vzduch v soustavě = plýtvání energií. Viz <Link href="/blog/jak-odvzdusnit-radiatory" style={{color:"#5a9e6f",fontWeight:600}}>Jak odvzdušnit radiátor →</Link></li>
                <li><strong>☐ Spusť kotel a zkontroluj funkci</strong> — nestartuje? Zkontroluj plyn, termostat, chybové kódy.</li>
                <li><strong>☐ Přepni termostat na zimní režim</strong> — programovatelný termostat nastav na topnou sezónu.</li>
                <li><strong>☐ Objednej servis kotle</strong> — ideálně v září, před špičkou sezóny. Viz <Link href="/blog/zkontrolovat-kotel-pred-zimou" style={{color:"#5a9e6f",fontWeight:600}}>Jak zkontrolovat kotel →</Link></li>
                <li><strong>☐ Zkontroluj termostatické hlavice</strong> — otočí hlavice na každém radiátoru — nejsou zaseklé?</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Servisní technici jsou nejvíce vytížení v listopadu. Zavolej v září — dostaneš lepší termín a technik se nespěchá.</div>
            </section>

            <section id="okna">
              <h2>Okna a dveře – těsnění a kování</h2>
              <p>Netěsná okna způsobují průvan, tepelné ztráty a kondenzaci. Přezimová příprava oken trvá hodinu a ušetří stovky na vytápění.</p>
              <ul>
                <li><strong>☐ Přepni okna na zimní přítlak</strong> — plastová okna mají letní a zimní nastavení kování. Otočení excentrického čepu na kování zvýší přítlak. Zdarma, trvá 2 minuty na okno.</li>
                <li><strong>☐ Zkontroluj těsnění v rámu</strong> — stlač těsnění prstem — poddajné a pružné? Tvrdé nebo popraskané těsnění nevytěsní. Výměna 100–300 Kč za okno.</li>
                <li><strong>☐ Doplň samolepicí těsnicí pásku</strong> — na rámy kde těsnění schází nebo nedotěsňuje. Pěnová nebo silikonová, 50–150 Kč za okno.</li>
                <li><strong>☐ Zkontroluj těsnění venkovního parapetu</strong> — praskliny v silikonu jsou vstupní bod pro vodu. Přestřikni nové silikonové těsnění.</li>
                <li><strong>☐ Promaž kování</strong> — závěsy a uzávěry oken namaž technickým sprejem (WD-40). Zamrzlé nebo zkorodované kování v zimě přestane fungovat.</li>
              </ul>
            </section>

            <section id="voda">
              <h2>Vodovod a trubky – prevence prasknutí</h2>
              <p>Prasknutá trubka od mrazu je jedna z nejdražších zimních havárií. Preventivní opatření trvají hodinu.</p>
              <ul>
                <li><strong>☐ Uzavři a vyfoukni zahradní přípojku</strong> — uzávěr zahradní vody v domě zavřít, venkovní kohoutek otevřít a nechat vytéct zbytkovou vodu. Hadici sundat a uskladnit.</li>
                <li><strong>☐ Zkontroluj izolaci trubek ve studených prostorech</strong> — trubky v nevytápěném sklepě, garáži nebo podkroví mohou zamrznout. Izoluj pěnovou trubkovou izolací (10–30 Kč/m).</li>
                <li><strong>☐ Zjisti kde je hlavní uzávěr vody</strong> — v případě havárie musí každý člen domácnosti vědět kde je a jak ho zavřít.</li>
                <li><strong>☐ Zkontroluj bojler a zásobník TUV</strong> — nastavení teploty (55–60 °C), kontrola pojistného ventilu.</li>
                <li><strong>☐ Přezimuj bazén nebo vodní prvky</strong> — bazén, fontána nebo zahradní jezírko musí být zazimovány dle návodu výrobce.</li>
              </ul>
              <div className="article-tip"><strong>⚠️ Pozor:</strong> Voda zamrzne při 0 °C, ale trubky praská při opakovaném cyklování teplot kolem nuly — ne nutně při silných mrazech. Rizikové jsou noční mrazy střídané denním táním na podzim.</div>
            </section>

            <section id="okapy">
              <h2>Okapy a střecha – čištění a kontrola</h2>
              <p>Ucpané okapy způsobují přetékání vody ke základům, tvorbu ledu a poškození fasády. Čistit na podzim po opadu listí — říjen/listopad.</p>
              <ul>
                <li><strong>☐ Vyčisti okapy od listí a nečistot</strong> — rukama nebo speciálním kartáčem. Zvlášť důkladně u svodů. Ucpaný svod způsobuje přetékání a tvorbu ledových rampouchů.</li>
                <li><strong>☐ Proplachni okapy vodou</strong> — hadice z kohoutu, zkontroluj průtok celou délkou okapu a svodem.</li>
                <li><strong>☐ Vizuálně zkontroluj střechu</strong> — z bezpečné vzdálenosti nebo ze žebříku pokud je bezpečný přístup. Chybějící nebo posunuté tašky, poškozený hřeben, narušené lemování komínu.</li>
                <li><strong>☐ Zkontroluj pojistnou střešní folii a izolaci podkroví</strong> — pokud máš přístup do podkroví, zkontroluj zda není viditelné zatékání.</li>
              </ul>
            </section>

            <section id="zahrada">
              <h2>Zahrada a terasa – zazimování</h2>
              <p>Jaro je příjemnější pokud jsi na podzim udělal správnou přípravu. Zahradní práce v říjnu jsou investicí do jara.</p>
              <ul>
                <li><strong>☐ Uschuj zahradní nábytek</strong> — plastový nebo ratanový nábytek do garáže nebo pod ochranné plachty. Dřevěný nábytek ošetři impregnačním olejem.</li>
                <li><strong>☐ Zazimuj nádobové rostliny</strong> — citrusy, oleandry a jiné neodolné rostliny přestěhuj do světlého prostoru nad 5 °C.</li>
                <li><strong>☐ Zastřihni trvalky a odkliď listí</strong> — zbytky rostlin mohou přezimovat, ale mokré listí na trávníku způsobuje hnití a plíseň.</li>
                <li><strong>☐ Vyčisti a uskladni zahradní nástroje</strong> — očisti, obrousí rzi, namaž pohyblivé části. Vlhké nástroje v zimě rezaví rychle.</li>
                <li><strong>☐ Vypusť a ulož zahradní hadice</strong> — voda v hadici zamrzne a hadu popraskají. Sroluj a uskladni v suchu.</li>
                <li><strong>☐ Přikryj záhony mulčem</strong> — kůra, kompost nebo sláma chrání půdu před promrznutím a cibuloviny před vymrznutím.</li>
              </ul>
            </section>

            <section id="ostatni">
              <h2>Ostatní – elektřina, nouzová výbava a sníh</h2>
              <ul>
                <li><strong>☐ Zkontroluj detektor CO a kouře</strong> — vyměň baterie, otestuj funkci. Detektor CO je povinný tam kde je plynový kotel nebo krb.</li>
                <li><strong>☐ Připrav zimní výbavu</strong> — lopata na sníh, posypová sůl nebo písek, škrabka na auto. Mít je předem je levnější než nakupovat v prvním sněžení.</li>
                <li><strong>☐ Zkontroluj pojistky a elektroinstalaci</strong> — vizuální kontrola rozvaděče, volné a opálené kabely jsou bezpečnostní riziko zvláště při přetížení topením.</li>
                <li><strong>☐ Připrav nouzový plán</strong> — co dělat při výpadku proudu, vytopení nebo výpadku topení. Znáš číslo na havarijní službu svého dodavatele plynu a elektřiny?</li>
                <li><strong>☐ Zkontroluj zásobu paliva</strong> — pelety, dřevo, propan-butan. Zásoby na celou zimu jsou levnější než nákupy za špičkové ceny v mrazech.</li>
              </ul>
            </section>

            <section id="kdy">
              <h2>Kdy co udělat – časový plán</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Měsíc</th><th>Co udělat</th><th>Priorita</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Září</strong></td><td>Objednat servis kotle, zkontrolovat střechu, ošetřit dřevěný nábytek</td><td>🟡 Vysoká</td></tr>
                    <tr><td><strong>Říjen</strong></td><td>Vyčistit okapy, zazimovat zahradu, přepnout okna na zimní nastavení, odvzdušnit radiátory</td><td>🔴 Kritická</td></tr>
                    <tr><td><strong>Listopad</strong></td><td>Uzavřít zahradní přípojku, uschovat zahradní vybavení, zkontrolovat zásoby paliva</td><td>🔴 Kritická</td></tr>
                    <tr><td><strong>Průběžně</strong></td><td>Sledovat tlak v kotli, větrat byt, kontrolovat vlhkost</td><td>🟡 Pravidelně</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Vytiskni si tento checklist a projdi ho doma položku po položce. Zabrání to tomu aby něco podstatného uniklo. Celý proces včetně zahradních prací zabere 4–6 hodin za jeden víkend.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Co je nejdůležitější udělat před zimou?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Top 3 priority: (1) Zkontrolovat kotel a odvzdušnit radiátory — výpadek topení v zimě je nejhorší scénář. (2) Uzavřít zahradní přípojku vody — prasknutá trubka od mrazu je drahá havárie. (3) Vyčistit okapy — ucpané okapy způsobují zatékání a tvorbu ledových rampouchů.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Kdy nejpozději musím zazimovat dům?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Zahradní přípojka vody musí být uzavřena před prvními mrazy — v ČR typicky říjen nebo začátek listopadu. Kotel zkontroluj v září nebo říjnu. Okapy vyčisti po opadu listí — říjen/listopad. Čím dříve, tím lépe — v listopadu jsou technici a dodavatelé nejvíce vytížení.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak zazimovat dům pokud budu pryč celou zimu?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Pokud dům bude prázdný: uzavři hlavní přívod vody a vyfoukni celý vodovod, nastav topení na protimrazový režim (min. 5–7 °C), požádej souseda nebo správce o pravidelnou kontrolu, vypni spotřebiče v zásuvkách. Nevypínaj topení úplně — náklady na vysoušení domu po promrznutí jsou obrovské.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Kolik stojí příprava domu na zimu?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Základní příprava bez servisního technika vychází na 500–2 000 Kč (těsnicí pásky, mazivo, posypová sůl, mulč). Se servisem kotle přidej 1 500–3 000 Kč. Celkem tedy 2 000–5 000 Kč — zlomek toho co stojí havarijní oprava v zimě.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/priprava-domu-na-zimu" title="Příprava domu na zimu – kompletní checklist 2026" />

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
                <li><a href="#topeni">Topení a kotel</a></li>
                <li><a href="#okna">Okna a dveře</a></li>
                <li><a href="#voda">Vodovod a trubky</a></li>
                <li><a href="#okapy">Okapy a střecha</a></li>
                <li><a href="#zahrada">Zahrada a terasa</a></li>
                <li><a href="#ostatni">Elektřina a výbava</a></li>
                <li><a href="#kdy">Časový plán</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/sezonni-udrzba" className="sidebar-cat-link">❄️ Sezónní údržba<span>20 článků →</span></Link>
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
