import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak stříhat keře – průvodce pro každého 2025",
  description: "Kdy, jak a čím stříhat okrasné i ovocné keře. Správný řez prodlouží život keře a zdvojnásobí kvetení.",
  alternates: { canonical: "https://domovniguru.cz/blog/jak-strihat-kere" },
  openGraph: { title: "Jak stříhat keře – průvodce pro každého", description: "Kdy, jak a čím stříhat okrasné i ovocné keře.", url: "https://domovniguru.cz/blog/jak-strihat-kere", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2025-03-20T08:00:00Z", modifiedTime: "2025-03-01T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak stříhat keře", description: "Kdy, jak a čím stříhat okrasné i ovocné keře." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://domovniguru.cz/blog/jak-strihat-kere#article", "headline": "Jak stříhat keře – průvodce pro každého", "datePublished": "2025-03-20T08:00:00Z", "dateModified": "2025-03-01T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "inLanguage": "cs", "keywords": ["jak stříhat keře", "řez keřů", "kdy stříhat keře", "stříhání živého plotu", "řez růží"] }] };

const RELATED = [
  { title: "Jak správně zalévat rostliny", href: "/blog/jak-spravne-zalevat", read: "5 min" },
  { title: "Zahradní nástroje – jak o ně pečovat", href: "/blog/zahradni-nastroje-pece", read: "4 min" },
  { title: "Ochrana rostlin před zimou", href: "/blog/prezimovat-zahradni-rostliny", read: "5 min" },
  { title: "Jak hnojit zahradu", href: "/blog/jak-hnojit-zahradu", read: "5 min" },
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
              <span>Jak stříhat keře</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 4 min čtení</span>
              </div>
              <h1 className="article-h1">Jak stříhat keře – průvodce pro každého</h1>
              <p className="article-lead">Správný řez keře nezničí – naopak ho omlazuje, podpoří kvetení a udrží tvar. Špatný řez ve špatnou dobu ale může zahubit i letitý keř. Tady je co potřebuješ vědět.</p>
              <div className="article-meta-row"><span>Aktualizováno: 1. března 2025</span><span>·</span><span>DomovniGuru</span></div>
            </header>

            {/* HERO ILLUSTRATION */}
            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="200" fill="#f5f2ee"/>
                <line x1="0" y1="172" x2="760" y2="172" stroke="#c8b89a" strokeWidth="1" opacity="0.4"/>

                {/* LEFT: neostříhaný keř — divoký, nepravidelný */}
                <g transform="translate(60, 20)">
                  {/* Větve */}
                  <line x1="60" y1="152" x2="60" y2="60" stroke="#5a3e28" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="60" y1="120" x2="20" y2="70" stroke="#5a3e28" strokeWidth="2.5" strokeLinecap="round"/>
                  <line x1="60" y1="100" x2="100" y2="50" stroke="#5a3e28" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="60" y1="140" x2="10" y2="110" stroke="#5a3e28" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="60" y1="130" x2="108" y2="100" stroke="#5a3e28" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="20" y1="70" x2="0" y2="44" stroke="#5a3e28" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="20" y1="70" x2="40" y2="40" stroke="#5a3e28" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="100" y1="50" x2="118" y2="24" stroke="#5a3e28" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="100" y1="50" x2="80" y2="20" stroke="#5a3e28" strokeWidth="1.5" strokeLinecap="round"/>
                  {/* Listí — nepravidelné shluky */}
                  <circle cx="10" cy="38" r="18" fill="#4a7c3f" opacity="0.85"/>
                  <circle cx="40" cy="30" r="14" fill="#3a6c2f" opacity="0.9"/>
                  <circle cx="0" cy="58" r="12" fill="#5a8c4f" opacity="0.7"/>
                  <circle cx="80" cy="14" r="16" fill="#4a7c3f" opacity="0.85"/>
                  <circle cx="118" cy="18" r="14" fill="#3a6c2f" opacity="0.9"/>
                  <circle cx="60" cy="50" r="16" fill="#5a8c4f" opacity="0.8"/>
                  <circle cx="108" cy="94" r="13" fill="#4a7c3f" opacity="0.75"/>
                  <circle cx="6" cy="104" r="12" fill="#3a6c2f" opacity="0.8"/>
                  {/* Divočina — šipky ukazující ven */}
                  <path d="M-8 20 L-18 10 M-8 20 L-14 22 M-8 20 L-6 14" stroke="#c0392b" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
                  <path d="M128 10 L138 2 M128 10 L134 14 M128 10 L130 4" stroke="#c0392b" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
                </g>

                {/* LABEL: Před */}
                <text x="120" y="192" fontFamily="var(--font-sans,sans-serif)" fontSize="9" fill="#c8b89a" textAnchor="middle" letterSpacing="0.1em">PŘED</text>

                {/* CENTER: nůžky v akci */}
                <g transform="translate(310, 50)">
                  {/* Rukojeť levá */}
                  <ellipse cx="16" cy="106" rx="14" ry="28" fill="none" stroke="#1a1814" strokeWidth="2.5"/>
                  {/* Rukojeť pravá */}
                  <ellipse cx="54" cy="106" rx="14" ry="28" fill="none" stroke="#1a1814" strokeWidth="2.5"/>
                  {/* Osa */}
                  <circle cx="35" cy="78" r="5" fill="#c8b89a"/>
                  <circle cx="35" cy="78" r="2.5" fill="#9a8a7a"/>
                  {/* Čepele */}
                  <path d="M16 78 Q28 40 60 10" stroke="#1a1814" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                  <path d="M54 78 Q42 40 10 10" stroke="#1a1814" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                  {/* Větev kterou střiháme */}
                  <line x1="5" y1="44" x2="65" y2="44" stroke="#5a3e28" strokeWidth="3" strokeLinecap="round"/>
                  {/* Odříznutý kousek */}
                  <line x1="65" y1="44" x2="90" y2="38" stroke="#5a3e28" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
                  {/* Čárkovaná linie řezu */}
                  <line x1="35" y1="32" x2="35" y2="56" stroke="#c0392b" strokeWidth="1" strokeDasharray="3 2" opacity="0.6"/>
                </g>

                {/* RIGHT: ostříhaný keř — pravidelný, hezký */}
                <g transform="translate(530, 30)">
                  {/* Větve — symetrické */}
                  <line x1="70" y1="142" x2="70" y2="80" stroke="#5a3e28" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="70" y1="120" x2="36" y2="86" stroke="#5a3e28" strokeWidth="2.5" strokeLinecap="round"/>
                  <line x1="70" y1="110" x2="104" y2="76" stroke="#5a3e28" strokeWidth="2.5" strokeLinecap="round"/>
                  <line x1="70" y1="130" x2="30" y2="114" stroke="#5a3e28" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="70" y1="130" x2="110" y2="114" stroke="#5a3e28" strokeWidth="2" strokeLinecap="round"/>
                  {/* Listí — pravidelná kopule */}
                  <ellipse cx="70" cy="72" rx="58" ry="48" fill="#4a7c3f" opacity="0.9"/>
                  <ellipse cx="70" cy="68" rx="52" ry="44" fill="#5a8c4f" opacity="0.7"/>
                  {/* Světlé detaily */}
                  <ellipse cx="50" cy="58" rx="16" ry="12" fill="#6a9c5f" opacity="0.5"/>
                  <ellipse cx="88" cy="62" rx="14" ry="10" fill="#6a9c5f" opacity="0.4"/>
                  {/* Kvítky */}
                  <circle cx="44" cy="46" r="5" fill="#f8b4c8" opacity="0.9"/>
                  <circle cx="70" cy="34" r="6" fill="#f8b4c8" opacity="0.9"/>
                  <circle cx="96" cy="48" r="5" fill="#f8b4c8" opacity="0.9"/>
                  <circle cx="58" cy="36" r="4" fill="#f4d4e4" opacity="0.8"/>
                  <circle cx="82" cy="38" r="4" fill="#f4d4e4" opacity="0.8"/>
                </g>

                {/* LABEL: Po */}
                <text x="600" y="192" fontFamily="var(--font-sans,sans-serif)" fontSize="9" fill="#c8b89a" textAnchor="middle" letterSpacing="0.1em">PO ŘEZU</text>

                {/* Šipka před → po */}
                <path d="M220 100 L290 100" stroke="#c8b89a" strokeWidth="1.2" strokeLinecap="round"/>
                <path d="M286 96 L291 100 L286 104" stroke="#c8b89a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M460 100 L520 100" stroke="#c8b89a" strokeWidth="1.2" strokeLinecap="round"/>
                <path d="M516 96 L521 100 L516 104" stroke="#c8b89a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>

              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#proc-strihat">Proč vůbec stříhat</a></li>
                <li><a href="#kdy-strihat">Kdy stříhat – načasování</a></li>
                <li><a href="#nastroje">Správné nástroje</a></li>
                <li><a href="#technika">Technika řezu</a></li>
                <li><a href="#typy">Různé keře, různý přístup</a></li>
                <li><a href="#chyby">Nejčastější chyby</a></li>
              </ol>
            </nav>

            <section id="proc-strihat">
              <h2>Proč vůbec stříhat</h2>
              <p>Keř bez řezu nevyhyne – ale po pár letech vypadá jako změť větví, kvete méně a je náchylnější k chorobám. Pravidelný řez dělá tři věci:</p>
              <ul>
                <li><strong>Omlazuje</strong> – odstraněním starých větví stimuluješ růst mladých, vitálních výhonů</li>
                <li><strong>Podporuje kvetení</strong> – většina keřů kvete na mladém dřevu; čím více ho je, tím více květů</li>
                <li><strong>Udržuje tvar a velikost</strong> – keř nezabere celý záhon a nezačne stínit okolním rostlinám</li>
              </ul>
              <div className="article-tip"><strong>💡 Zlaté pravidlo:</strong> Nikdy nestříhej více než třetinu keře najednou. Radikálnější řez keř silně stresuje a může ho oslabit na celou sezónu.</div>
            </section>

            <section id="kdy-strihat">
              <h2>Kdy stříhat – načasování je klíčové</h2>
              <p>Největší chyba je stříhat ve špatnou dobu. Pravidlo je jednoduché: <strong>stříhej po odkvětu</strong>. Ale to závisí na tom, kdy keř kvete.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ keře</th><th>Kdy kvete</th><th>Kdy stříhat</th></tr></thead>
                  <tbody>
                    <tr><td>Keře kvetoucí na jaře (forsythie, zlatice, šeřík)</td><td>Jaro (březen–květen)</td><td>Hned po odkvětu (červen)</td></tr>
                    <tr><td>Keře kvetoucí v létě (růže, hortenzie, komule)</td><td>Léto (červen–září)</td><td>Brzy na jaře (únor–březen)</td></tr>
                    <tr><td>Živý plot (habr, tis, buxus)</td><td>Nekvetoucí / bezvýznamné</td><td>2× ročně – jaro a konec léta</td></tr>
                    <tr><td>Ovocné keře (rybíz, angrešt)</td><td>Jaro</td><td>Po sklizni nebo brzy na jaře</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>⚠️ Pozor na šeřík:</strong> Šeřík tvoří pupeny na příští rok hned po odkvětu. Pokud ho ostříháš v srpnu nebo na podzim, přijdeš o veškeré kvetení příští sezóny.</div>
            </section>

            <section id="nastroje">
              <h2>Správné nástroje</h2>
              <p>Tupé nebo nevhodné nářadí dělá trhané řezy které se špatně hojí a jsou vstupní branou pro choroby. Základní výbava:</p>
              <ul>
                <li><strong>Zahradní nůžky (sekátor)</strong> – na větve do průměru 1,5 cm. Nejpoužívanější nástroj, investuj do kvalitních (Felco, Bahco, Fiskars).</li>
                <li><strong>Zahradnické nůžky na živý plot</strong> – na tvarování plotů a keřů, ruční nebo elektrické</li>
                <li><strong>Zahradní pilka nebo lopatkové nůžky</strong> – na silnější větve od 2 cm výše</li>
                <li><strong>Motorová pila nebo silné nůžky</strong> – na radikální omlazovací řez starých keřů</li>
              </ul>
              <p>Před použitím vždy vydesinfikuj čepele lihem nebo Savolem – zejména pokud jsi stříhal nemocné rostliny. Přenášení chorob přes nástroje je velmi časté.</p>
            </section>

            <section id="technika">
              <h2>Technika řezu</h2>
              <p>Jak řez provedeš je stejně důležité jako kdy ho provedeš. Špatný řez poškozuje větvičku a zpomaluje hojení.</p>
              <h3>Kde přesně řezat</h3>
              <ul>
                <li>Řež těsně nad pupenem nebo postranní větví – zanecháš pahýl maximálně 5 mm</li>
                <li>Řez veď šikmo (45°) tak aby voda stékala pryč od pupene, ne na něj</li>
                <li>Pupen by měl směřovat ven od středu keře – keř pak roste do šířky, ne dovnitř</li>
              </ul>
              <h3>Postup při tvarování keře</h3>
              <ul>
                <li><strong>Krok 1:</strong> Nejdřív odstraň suché, poškozené a nemocné větve – úplně až k zemi nebo ke zdravému místu</li>
                <li><strong>Krok 2:</strong> Odstraň větve které kříží jiné nebo rostou dovnitř keře</li>
                <li><strong>Krok 3:</strong> Zkrať příliš dlouhé výhony nad zdravým pupenem</li>
                <li><strong>Krok 4:</strong> Ustup, podívej se na tvar a dokončuj symetrii</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Začni vždy od spodu a postupuj nahoru. Snáz uhlídáš celkový tvar a nepřestříháš omylem větve které jsi chtěl nechat.</div>
            </section>

            <section id="typy">
              <h2>Různé keře, různý přístup</h2>
              <h3>Růže</h3>
              <p>Stříhají se na jaře (březen) těsně před rašením. Čajohybridní růže zkrať na 3–5 zdravých pupenů od země (výška asi 20–30 cm). Půdopokryvné a pnoucí růže stříhej méně agresivně – jen odstraň staré dřevo a zkrať výhony o třetinu.</p>
              <h3>Hortenzie</h3>
              <p>Závisí na druhu. Hortenzie velkolisté (Hydrangea macrophylla) kvetou na loňském dřevu – stříhej jen po odkvětu, ne na jaře. Hortenzie latnaté a stromkovité kvetou na letošním dřevu – stříhej agresivně na jaře.</p>
              <h3>Živý plot</h3>
              <p>Habr, tis, buxus a jiné plotové keře stříhej 2× ročně. První řez v květnu–červnu po prvním výrůstu, druhý v srpnu–září. Nikdy nestříhej za velkého horka nebo přímého slunce – čerstvé řezy se mohou spálit.</p>
              <h3>Ovocné keře (rybíz, angrešt)</h3>
              <p>Cílem je mít keř s 8–12 výhony různého stáří. Každý rok odstraň 2–3 nejstarší větve (tmavé, silné) úplně až k zemi a nechej dorůst mladé. Keř se tím průběžně omlazuje.</p>
            </section>

            <section id="chyby">
              <h2>Nejčastější chyby</h2>
              <ul>
                <li><strong>Stříhání ve špatnou dobu</strong> – nejčastější příčina slabého kvetení příští sezóny</li>
                <li><strong>Tupé nůžky</strong> – trhají místo řežou, rána se špatně hojí</li>
                <li><strong>Příliš radikální řez najednou</strong> – nikdy více než třetinu</li>
                <li><strong>Zanechání příliš dlouhého pahýlu</strong> – pahýl odumírá, hnijí a táhne choroby do keře</li>
                <li><strong>Řez rovně (ne šikmo)</strong> – voda se drží na ploché ráně a způsobuje hnilobu</li>
                <li><strong>Nedesinfikované nářadí</strong> – přenášíš choroby z keře na keř</li>
                <li><strong>Stříhání za horka nebo mrazu</strong> – keř je ve stresu, řezy se hůř hojí</li>
              </ul>
            </section>

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
                <li><a href="#proc-strihat">Proč vůbec stříhat</a></li>
                <li><a href="#kdy-strihat">Kdy stříhat</a></li>
                <li><a href="#nastroje">Nástroje</a></li>
                <li><a href="#technika">Technika řezu</a></li>
                <li><a href="#typy">Různé keře</a></li>
                <li><a href="#chyby">Nejčastější chyby</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/zahrada" className="sidebar-cat-link">🌿 Zahrada & terasa<span>22 článků →</span></Link>
            </div>
          </aside>
        </div>
      </div>
      <style>{`
        .article-layout { display: grid; grid-template-columns: 1fr 280px; gap: 56px; padding: 48px 0 80px; align-items: start; }
        .article-header { margin-bottom: 32px; }
        .article-meta-top { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
        .article-cat-pill { display: inline-flex; align-items: center; height: 24px; padding: 0 12px; border-radius: 999px; border: 1px solid var(--border); background: var(--surface); font-size: 11px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--muted); text-decoration: none; transition: background 120ms; }
        .article-cat-pill:hover { background: #e8e7e2; color: var(--text); }
        .article-read-time { font-size: 12px; color: var(--muted); font-weight: 500; }
        .article-h1 { font-family: var(--font-serif); font-size: clamp(26px, 3.5vw, 40px); line-height: 1.1; font-weight: 400; letter-spacing: -0.01em; margin-bottom: 16px; }
        .article-lead { font-size: 18px; line-height: 1.65; color: var(--muted); font-weight: 300; margin-bottom: 14px; }
        .article-meta-row { display: flex; gap: 8px; font-size: 12px; color: var(--muted); font-weight: 500; }
        .hero-illustration { margin: 28px 0 36px; border-radius: 12px; overflow: hidden; border: 1px solid var(--border); }
        .hero-svg { width: 100%; height: auto; display: block; }
        .toc { background: var(--surface); border-radius: 10px; padding: 20px 24px; margin-bottom: 40px; }
        .toc-label { font-size: 11px; font-weight: 700; letter-spacing: 0.10em; text-transform: uppercase; color: var(--muted); margin-bottom: 12px; }
        .toc-list { padding-left: 18px; display: flex; flex-direction: column; gap: 6px; }
        .toc-list li a { font-size: 14px; color: var(--muted); text-decoration: none; font-weight: 400; transition: color 120ms; }
        .toc-list li a:hover { color: var(--text); }
        .article-body section { margin-bottom: 48px; }
        .article-body h2 { font-family: var(--font-serif); font-size: clamp(20px, 2.5vw, 26px); font-weight: 400; line-height: 1.2; margin-bottom: 16px; border-top: 1px solid var(--border); padding-top: 24px; margin-top: 8px; }
        .article-body h3 { font-family: var(--font-sans); font-size: 16px; font-weight: 600; margin-top: 24px; margin-bottom: 10px; color: var(--text); }
        .article-body p { font-size: 16px; line-height: 1.75; color: #2a2a28; font-weight: 300; margin-bottom: 14px; }
        .article-body ul, .article-body ol { padding-left: 22px; margin-bottom: 16px; display: flex; flex-direction: column; gap: 8px; }
        .article-body li { font-size: 15px; line-height: 1.6; color: #2a2a28; font-weight: 300; }
        .article-body strong { font-weight: 600; color: var(--text); }
        .article-tip { background: #fffbeb; border-left: 3px solid #f59e0b; border-radius: 0 8px 8px 0; padding: 14px 18px; font-size: 14px; line-height: 1.6; color: #78716c; margin: 20px 0; }
        .article-table-wrap { overflow-x: auto; margin: 16px 0 24px; }
        .article-table { width: 100%; border-collapse: collapse; font-size: 14px; line-height: 1.5; }
        .article-table th { font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); padding: 10px 14px; text-align: left; border-bottom: 2px solid var(--border); background: var(--surface); }
        .article-table td { padding: 10px 14px; border-bottom: 1px solid var(--border); vertical-align: top; color: #2a2a28; font-weight: 300; }
        .article-table tr:last-child td { border-bottom: none; }
        .related-section { margin-top: 56px; }
        .related-section h2 { font-family: var(--font-serif); font-size: 22px; font-weight: 400; margin-bottom: 20px; padding-top: 24px; border-top: 1px solid var(--border); }
        .related-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .article-sidebar { position: sticky; top: 80px; display: flex; flex-direction: column; gap: 16px; }
        .sidebar-widget { background: #fff; border: 1px solid var(--border); border-radius: 12px; padding: 20px; }
        .sidebar-widget-title { font-size: 10px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); margin-bottom: 14px; }
        .sidebar-toc { list-style: none; display: flex; flex-direction: column; gap: 8px; }
        .sidebar-toc li a { font-size: 13px; color: var(--muted); text-decoration: none; font-weight: 400; transition: color 120ms; line-height: 1.4; display: block; }
        .sidebar-toc li a:hover { color: var(--text); }
        .sidebar-cat-link { display: flex; justify-content: space-between; align-items: center; font-size: 14px; font-weight: 500; color: var(--text); text-decoration: none; padding: 8px 0; border-bottom: 1px solid var(--border); transition: color 120ms; }
        .sidebar-cat-link:hover { color: var(--muted); }
        .sidebar-cat-link span { font-size: 12px; color: var(--muted); }
        @media (max-width: 960px) { .article-layout { grid-template-columns: 1fr; gap: 0; } .article-sidebar { position: static; margin-top: 40px; } .related-grid { grid-template-columns: 1fr; } }
        @media (max-width: 600px) { .article-layout { padding: 32px 0 60px; } }
      `}</style>
    </>
  );
}
