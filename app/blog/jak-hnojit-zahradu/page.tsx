import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak hnojit zahradu – organicky i minerálně, kdy a čím 2026",
  description: "Jarní hnojení zahrady krok za krokem. Kdy hnojit trávník, záhony a stromy, jaké hnojivo vybrat a jak nepředávkovat. Praktický průvodce pro každého zahrádkáře.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-hnojit-zahradu" },
  openGraph: { title: "Jak hnojit zahradu – organicky i minerálně 2026", description: "Jarní hnojení zahrady – kdy, čím a jak. Trávník, záhony, stromy.", url: "https://www.domovniguru.cz/blog/jak-hnojit-zahradu", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-13T08:00:00Z", modifiedTime: "2026-04-13T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak hnojit zahradu 2026", description: "Jarní hnojení zahrady – kdy, čím a jak. Trávník, záhony, stromy." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/jak-hnojit-zahradu#article",
    "headline": "Jak hnojit zahradu – organicky i minerálně, kdy a čím 2026",
    "datePublished": "2026-04-13T08:00:00Z",
    "dateModified": "2026-04-13T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak hnojit zahradu", "jarní hnojení zahrady", "hnojení trávníku jaro", "organické hnojivo zahrada", "minerální hnojivo", "kdy hnojit zahradu", "NPK hnojivo"]
  }]
};

const RELATED = [
  { title: "Jak připravit zahradu na jaro", href: "/blog/jarni-zahrada", read: "6 min" },
  { title: "Jak kompostovat doma a na zahradě", href: "/blog/jak-kompostovat", read: "4 min" },
  { title: "Jak sekat trávník správně", href: "/blog/jak-sekat-travnik", read: "4 min" },
  { title: "Jak se zbavit plevele bez chemie", href: "/blog/zbavit-se-plevele-bez-chemie", read: "4 min" },
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
              <span>Jak hnojit zahradu</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak hnojit zahradu – organicky i minerálně</h1>
              <p className="article-lead">Jaro je nejdůležitější čas pro hnojení zahrady. Správné hnojivo ve správný čas nastartuje sezónu — špatné hnojivo spálí rostliny nebo zůstane nevyužité. Tady je vše co potřebuješ vědět.</p>
              <div className="article-meta-row"><span>Aktualizováno: 13. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/jak-hnojit-zahradu" title="Jak hnojit zahradu – organicky i minerálně, kdy a čím 2026" />
            </header>

            {/* HERO SVG */}
            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="200" fill="#f0f8f0"/>
                <defs>
                  <linearGradient id="zemina" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#8B6340"/><stop offset="100%" stopColor="#6b4820"/>
                  </linearGradient>
                </defs>

                {/* N — dusík (zelená) */}
                <g transform="translate(40,20)">
                  <circle cx="70" cy="70" r="60" fill="#5a9e6f" opacity="0.12" stroke="#5a9e6f" strokeWidth="1.5"/>
                  <text x="70" y="45" textAnchor="middle" fontSize="32" fill="#3a7e4f" fontWeight="300">N</text>
                  <text x="70" y="65" textAnchor="middle" fontSize="10" fill="#3a7e4f" fontWeight="700">DUSÍK</text>
                  <text x="70" y="82" textAnchor="middle" fontSize="8" fill="#5a9e6f">listová hmota</text>
                  <text x="70" y="94" textAnchor="middle" fontSize="8" fill="#5a9e6f">zelená barva</text>
                  {/* Rostlina */}
                  <path d="M55 130 Q70 100 85 130" stroke="#5a9e6f" strokeWidth="2" fill="none"/>
                  <path d="M70 115 Q60 105 55 110" stroke="#5a9e6f" strokeWidth="1.5" fill="none"/>
                  <path d="M70 115 Q80 105 85 110" stroke="#5a9e6f" strokeWidth="1.5" fill="none"/>
                  <line x1="70" y1="130" x2="70" y2="145" stroke="#8B6340" strokeWidth="1.5"/>
                </g>

                {/* P — fosfor (oranžová) */}
                <g transform="translate(220,20)">
                  <circle cx="70" cy="70" r="60" fill="#e07040" opacity="0.1" stroke="#e07040" strokeWidth="1.5"/>
                  <text x="70" y="45" textAnchor="middle" fontSize="32" fill="#c05020" fontWeight="300">P</text>
                  <text x="70" y="65" textAnchor="middle" fontSize="10" fill="#c05020" fontWeight="700">FOSFOR</text>
                  <text x="70" y="82" textAnchor="middle" fontSize="8" fill="#e07040">kořeny a kvetení</text>
                  <text x="70" y="94" textAnchor="middle" fontSize="8" fill="#e07040">plodnost</text>
                  {/* Kořen */}
                  <path d="M70 115 Q55 125 50 140" stroke="#c05020" strokeWidth="1.5" fill="none"/>
                  <path d="M70 115 Q70 128 70 145" stroke="#c05020" strokeWidth="1.5" fill="none"/>
                  <path d="M70 115 Q85 125 90 140" stroke="#c05020" strokeWidth="1.5" fill="none"/>
                </g>

                {/* K — draslík (modrá) */}
                <g transform="translate(400,20)">
                  <circle cx="70" cy="70" r="60" fill="#4a90d9" opacity="0.1" stroke="#4a90d9" strokeWidth="1.5"/>
                  <text x="70" y="45" textAnchor="middle" fontSize="32" fill="#2a70b9" fontWeight="300">K</text>
                  <text x="70" y="65" textAnchor="middle" fontSize="10" fill="#2a70b9" fontWeight="700">DRASLÍK</text>
                  <text x="70" y="82" textAnchor="middle" fontSize="8" fill="#4a90d9">odolnost chorob</text>
                  <text x="70" y="94" textAnchor="middle" fontSize="8" fill="#4a90d9">kvalita plodů</text>
                  {/* Plod */}
                  <circle cx="70" cy="130" r="12" fill="#e07040" opacity="0.6"/>
                  <line x1="70" y1="118" x2="70" y2="112" stroke="#5a9e6f" strokeWidth="1.5"/>
                </g>

                {/* Šipka + NPK */}
                <g transform="translate(555,60)">
                  <rect x="0" y="0" width="175" height="80" rx="10" fill="#fff" stroke="#e0d8c8" strokeWidth="1.2"/>
                  <text x="87" y="22" textAnchor="middle" fontSize="11" fill="#6a6050" fontWeight="700">NPK hnojivo</text>
                  <text x="87" y="40" textAnchor="middle" fontSize="9" fill="#4a4a40">čísla na obalu = obsah %</text>
                  <text x="87" y="56" textAnchor="middle" fontSize="9.5" fill="#3a7e4f" fontWeight="600">15-5-20 = N15 P5 K20</text>
                  <text x="87" y="72" textAnchor="middle" fontSize="8" fill="#888880">vyšší N = trávník a listová zelenina</text>
                </g>

                {/* Půda dole */}
                <rect x="0" y="175" width="760" height="25" fill="url(#zemina)" opacity="0.4"/>
                <text x="380" y="191" textAnchor="middle" fontSize="8" fill="#f5e8d0" fontWeight="600" letterSpacing="0.1em">🌱 ZDRAVÁ PŮDA = ZDRAVÁ ZAHRADA · HNOJÍME 2× ROČNĚ: JARO A PODZIM</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#proc">Proč a kdy hnojit</a></li>
                <li><a href="#typy">Typy hnojiv – organická vs. minerální</a></li>
                <li><a href="#travnik">Hnojení trávníku</a></li>
                <li><a href="#zahony">Hnojení záhonů a zeleniny</a></li>
                <li><a href="#stromy">Hnojení stromů a keřů</a></li>
                <li><a href="#chyby">Nejčastější chyby</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="proc">
              <h2>Proč a kdy hnojit zahradu</h2>
              <p>Rostliny potřebují živiny stejně jako lidé jídlo. Zahrada která se roky nehnojí vyčerpá půdní zásoby a výsledky jsou vidět — bledé listy, slabý růst, málo plodů. Hnojení doplňuje to co rostliny odeberou.</p>
              <p>Nejdůležitější živiny jsou tři: <strong>dusík (N)</strong> — podpora listové hmoty a zelené barvy, <strong>fosfor (P)</strong> — tvorba kořenů a kvetení, <strong>draslík (K)</strong> — odolnost vůči chorobám a kvalita plodů. Většina hnojiv obsahuje všechny tři v různém poměru — tzv. NPK hnojiva.</p>
              <ul>
                <li><strong>Jaro (duben–květen):</strong> Hlavní hnojení sezóny. Rostliny nastartují růst a potřebují dusík. Ideální pro trávník, záhony i stromy.</li>
                <li><strong>Léto (červen–červenec):</strong> Přihnojování rychle rostoucích plodin — zelenina, letničky. Nehnojit v suchu — hnojivo spálí kořeny.</li>
                <li><strong>Podzim (září–říjen):</strong> Příprava na zimu — hnojivo s nižším dusíkem a vyšším draslíkem. Posiluje odolnost proti mrazu.</li>
                <li><strong>Zima:</strong> Nehnojit — rostliny dormantní, hnojivo se vymyje do spodních vod.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Před jarním hnojením proveď test pH půdy (testovací souprava 50–150 Kč). Většina plodin preferuje pH 6–7. Kyselá půda (pod 6) špatně využívá živiny i při správném hnojení — přidej vápno.</div>
            </section>

            <section id="typy">
              <h2>Typy hnojiv – organická vs. minerální</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ hnojiva</th><th>Příklady</th><th>Výhody</th><th>Nevýhody</th><th>Vhodné pro</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Organická</strong></td><td>Kompost, hnůj, kostní moučka, rybí moučka</td><td>Zlepšuje strukturu půdy, dlouhodobé působení, bezpečné</td><td>Pomalé uvolňování, nižší obsah živin</td><td>Záhony, základ každoroční péče</td></tr>
                    <tr><td><strong>Minerální granulovaná</strong></td><td>NPK 15-5-20, Cererit, Agrovita</td><td>Přesné dávkování, rychlý efekt</td><td>Při přehnojení spálí rostliny, vymývá se</td><td>Trávník, zelenina, ovocné stromy</td></tr>
                    <tr><td><strong>Kapalná</strong></td><td>Tekutá hnojiva, zálivky</td><td>Okamžitý efekt, listy i kořeny</td><td>Krátkodobé, nutné opakování</td><td>Přihnojování v sezóně, hrnkové rostliny</td></tr>
                    <tr><td><strong>Pomalu uvolňující</strong></td><td>Osmocote, Basacote</td><td>Hnojí 3–6 měsíců, jedno aplikování</td><td>Vyšší cena</td><td>Trvalky, keře, nádobové rostliny</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Nejlepší přístup je kombinace — na podzim zapracuj kompost nebo hnůj pro zlepšení půdy, na jaře přidej minerální hnojivo pro rychlý start sezóny.</div>
            </section>

            <section id="travnik">
              <h2>Hnojení trávníku – jarní start sezóny</h2>
              <p>Trávník je největší a nejviditelnější část zahrady. Správné jarní hnojení je základ husté zelené plochy bez plevele a mechu.</p>
              <ul>
                <li><strong>Kdy:</strong> Duben–květen, když tráva aktivně roste a teplota půdy je nad 8 °C. Příliš brzy hnojivo nevyužijí, příliš pozdě zbytečně podporuje plevel.</li>
                <li><strong>Čím:</strong> Jarní trávníkové hnojivo s vyšším obsahem dusíku (N) — typicky NPK 20-5-10 nebo speciální „spring fertilizer". Dusík zajistí sytě zelenou barvu a hustý růst.</li>
                <li><strong>Kolik:</strong> Dle návodu výrobce — typicky 30–50 g/m². Více není lépe — předávkování dusíkem způsobí spálení trávníku.</li>
                <li><strong>Jak:</strong> Rozhoď granule rovnoměrně ručně nebo rozmetadlem. Bezprostředně po aplikaci zalij nebo počkej na déšť — hnojivo se musí rozpustit a dostat do půdy.</li>
                <li><strong>Podzimní hnojení:</strong> Září/říjen — hnojivo s nižším N a vyšším K (draslíkem) pro posílení odolnosti. Speciální „autumn fertilizer".</li>
              </ul>
              <div className="article-tip"><strong>⚠️ Pozor:</strong> Nehnojit trávník v suchu — granule leží na suchém povrchu a při prvním dešti mohou způsobit lokální přehnojení a spálení. Hnojit po dešti nebo před předpovídaným deštěm.</div>
            </section>

            <section id="zahony">
              <h2>Hnojení záhonů a zeleniny</h2>
              <p>Zeleninové záhony jsou nejvíce náročné na živiny — zelenina roste rychle a plody odebírají hodně fosforu a draslíku.</p>
              <ul>
                <li><strong>Příprava záhonu na jaře:</strong> Zapracuj 3–5 cm kompostu nebo zralého hnoje do půdy při přípravě záhonu. To je základ — minerální hnojivo pak doplňuje.</li>
                <li><strong>Před výsevem/výsadbou:</strong> Přidej vyvážené NPK hnojivo (např. 8-8-8 nebo podobné) v dávce dle návodu. Zapracuj do půdy, nechej 1–2 týdny před výsadbou.</li>
                <li><strong>Přihnojování v průběhu sezóny:</strong> Rychle rostoucí zelenina (salát, špenát, ředkev) přihnoj dusíkatým hnojivem každé 3–4 týdny. Plodová zelenina (rajčata, okurky) potřebuje více fosforu a draslíku.</li>
                <li><strong>Rajčata a paprika:</strong> Speciálně citlivé na nedostatek vápníku — přidej vápenné hnojivo nebo dolomitický vápenec pro prevenci hnědnutí plodů.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Kompost je nejlepší hnojivo na záhony — zlepšuje strukturu půdy, zadržuje vodu a uvolňuje živiny postupně celou sezónu. Cíl: přidávat 5–10 cm kompostu ročně na každý záhon.</div>
            </section>

            <section id="stromy">
              <h2>Hnojení stromů, keřů a trvalek</h2>
              <ul>
                <li><strong>Ovocné stromy:</strong> Hnojit jednou ročně na jaře (duben) — vyvážené NPK hnojivo rozhodit pod celou korunou stromu (ne jen u kmene). Mladé stromy (do 3 let) hnojit méně — příliš rychlý růst oslabuje strukturu.</li>
                <li><strong>Okrasné keře a růže:</strong> Jarní hnojení NPK při rašení, druhé hnojení v červnu–červenci. Speciální růžová hnojiva jsou vyvážena pro kvetoucí rostliny.</li>
                <li><strong>Trvalky:</strong> Kompost nebo pomalu uvolňující hnojivo jednou ročně na jaře. Trvalky jsou méně náročné než zelenina.</li>
                <li><strong>Jehličnany:</strong> Speciální hnojivo pro jehličnany s nižším pH nebo síran hořečnatý pro prevenci žloutnutí jehlic.</li>
              </ul>
            </section>

            <section id="chyby">
              <h2>Nejčastější chyby při hnojení zahrady</h2>
              <ul>
                <li><strong>Příliš mnoho hnojiva:</strong> „Víc je víc" neplatí. Přehnojení spálí kořeny, způsobí přebytek dusičnanů a poškodí půdní mikroorganismy.</li>
                <li><strong>Hnojení v suchu:</strong> Granule na suchém povrchu při prvním silném dešti způsobí lokální přehnojení. Vždy hnojit při vlhké půdě nebo před deštěm.</li>
                <li><strong>Hnojení v zimě:</strong> Dormantní rostliny živiny nevyužijí — hnojivo se vymyje do spodních vod.</li>
                <li><strong>Ignorování pH půdy:</strong> Při kyselé nebo zásadité půdě rostliny živiny z hnojiva nevstřebají. Vždy zkontroluj pH před hnojením.</li>
                <li><strong>Hnojení na list za slunce:</strong> Kapalná hnojiva na listech při přímém slunci způsobují spálení. Aplikuj ráno nebo večer.</li>
                <li><strong>Nekompostování:</strong> Nejlevnější a nejlepší hnojivo si vyrábíš sám z kuchyňského odpadu a zahradního materiálu. Viz <Link href="/blog/jak-kompostovat" style={{color:"#5a9e6f",fontWeight:600}}>Jak kompostovat →</Link></li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Co znamenají čísla na hnojivu (15-5-20)?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Tři čísla označují procentuální obsah dusíku (N), fosforu (P) a draslíku (K). NPK 15-5-20 obsahuje 15 % dusíku, 5 % fosforu a 20 % draslíku. Vyšší první číslo = více dusíku = vhodné pro trávník a listovou zeleninu. Vyšší třetí číslo = více draslíku = vhodné pro plodovou zeleninu a podzimní hnojení.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Je lepší organické nebo minerální hnojivo?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Oba typy mají své místo. Organická hnojiva (kompost, hnůj) zlepšují strukturu půdy a podporují půdní život — jsou základem zdravé zahrady. Minerální hnojiva dodávají přesné množství živin rychle. Ideální je kombinace: organické jako základ, minerální pro doplnění v sezóně.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Kdy je nejlepší čas pro jarní hnojení?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Duben je ideální měsíc pro jarní hnojení v ČR. Teplota půdy by měla být nad 8 °C — při nižší teplotě kořeny živiny špatně vstřebávají. Trávník hnojíme při aktivním růstu, záhony při přípravě půdy, stromy při rašení.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Mohu použít hnojivo z obchodu na organickou zahradu?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Pro certifikovanou bio zahradu jsou povolena pouze organická hnojiva a speciálně certifikované minerální přípravky. Pro běžnou domácí zahradu bez certifikace není omezení — můžeš kombinovat organické i minerální podle potřeby.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/jak-hnojit-zahradu" title="Jak hnojit zahradu – organicky i minerálně, kdy a čím 2026" />

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
                <li><a href="#proc">Proč a kdy hnojit</a></li>
                <li><a href="#typy">Typy hnojiv</a></li>
                <li><a href="#travnik">Trávník</a></li>
                <li><a href="#zahony">Záhony a zelenina</a></li>
                <li><a href="#stromy">Stromy a keře</a></li>
                <li><a href="#chyby">Nejčastější chyby</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/zahrada" className="sidebar-cat-link">🌿 Zahrada & terasa<span>20 článků →</span></Link>
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
