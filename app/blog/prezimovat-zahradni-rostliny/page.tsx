import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak přezimovat zahradní rostliny – co, kdy a jak 2025",
  description: "Co zakrýt, co přestěhovat a co nechat být. Kompletní průvodce přezimováním zahradních rostlin krok za krokem.",
  alternates: { canonical: "https://domovniguru.cz/blog/prezimovat-zahradni-rostliny" },
  openGraph: { title: "Jak přezimovat zahradní rostliny", description: "Co zakrýt, co přestěhovat a co nechat být. Kompletní průvodce.", url: "https://domovniguru.cz/blog/prezimovat-zahradni-rostliny", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2025-03-25T08:00:00Z", modifiedTime: "2025-03-01T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak přezimovat zahradní rostliny", description: "Co zakrýt, co přestěhovat a co nechat být." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://domovniguru.cz/blog/prezimovat-zahradni-rostliny#article", "headline": "Jak přezimovat zahradní rostliny – co, kdy a jak", "datePublished": "2025-03-25T08:00:00Z", "dateModified": "2025-03-01T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "inLanguage": "cs", "keywords": ["prezimovat zahradní rostliny", "přezimování rostlin", "ochrana rostlin před mrazem", "zimní zakrytí keřů", "rostliny na zimu"] }] };

const RELATED = [
  { title: "Jak stříhat keře – průvodce pro každého", href: "/blog/jak-strihat-kere", read: "4 min" },
  { title: "Jak správně zalévat rostliny", href: "/blog/jak-spravne-zalevat", read: "5 min" },
  { title: "Zahradní nástroje – jak o ně pečovat", href: "/blog/zahradni-nastroje-pece", read: "4 min" },
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
              <span>Přezimování rostlin</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak přezimovat zahradní rostliny – co, kdy a jak</h1>
              <p className="article-lead">Spousta rostlin přežije zimu bez pomoci. Ale ty které pomoc potřebují, o ní dají vědět jen jednou – tím že na jaře nevyraší. Tady je přehled co udělat a kdy.</p>
              <div className="article-meta-row"><span>Aktualizováno: 1. března 2025</span><span>·</span><span>DomovniGuru</span></div>
            </header>

            {/* HERO ILLUSTRATION */}
            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="200" fill="#f0f4f8"/>
                <line x1="0" y1="172" x2="760" y2="172" stroke="#c8b89a" strokeWidth="1" opacity="0.4"/>

                {/* === SNĚHOVÉ VLOČKY === */}
                {[60, 160, 280, 420, 560, 680, 730].map((x, i) => (
                  <g key={i} transform={`translate(${x}, ${10 + (i % 3) * 14})`} opacity="0.3">
                    <line x1="0" y1="-6" x2="0" y2="6" stroke="#a0b8d0" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="-6" y1="0" x2="6" y2="0" stroke="#a0b8d0" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="-4" y1="-4" x2="4" y2="4" stroke="#a0b8d0" strokeWidth="1" strokeLinecap="round"/>
                    <line x1="4" y1="-4" x2="-4" y2="4" stroke="#a0b8d0" strokeWidth="1" strokeLinecap="round"/>
                  </g>
                ))}

                {/* === LEFT: rostlina zakrytá jutou === */}
                <g transform="translate(60, 20)">
                  {/* Kůl */}
                  <line x1="40" y1="152" x2="40" y2="50" stroke="#c8a97a" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 2" opacity="0.6"/>
                  <line x1="80" y1="152" x2="80" y2="50" stroke="#c8a97a" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 2" opacity="0.6"/>
                  {/* Juta — kužel */}
                  <path d="M10 152 L40 50 L80 50 L110 152 Z" fill="#c8a97a" opacity="0.35"/>
                  <path d="M10 152 L40 50 L80 50 L110 152 Z" fill="none" stroke="#c8a97a" strokeWidth="1.5" opacity="0.6"/>
                  {/* Horizontální pruhy — textura juty */}
                  <line x1="16" y1="130" x2="104" y2="130" stroke="#c8a97a" strokeWidth="0.8" opacity="0.4"/>
                  <line x1="22" y1="108" x2="98" y2="108" stroke="#c8a97a" strokeWidth="0.8" opacity="0.4"/>
                  <line x1="28" y1="86" x2="92" y2="86" stroke="#c8a97a" strokeWidth="0.8" opacity="0.4"/>
                  <line x1="34" y1="64" x2="86" y2="64" stroke="#c8a97a" strokeWidth="0.8" opacity="0.4"/>
                  {/* Provázek — uvázání dole */}
                  <path d="M18 148 Q60 142 102 148" stroke="#9a7a5a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  {/* Sníh na vrchu */}
                  <ellipse cx="60" cy="50" rx="18" ry="5" fill="white" opacity="0.8"/>
                </g>
                <text x="120" y="192" fontFamily="var(--font-sans,sans-serif)" fontSize="9" fill="#c8b89a" textAnchor="middle" letterSpacing="0.08em">ZAKRYTÍ</text>

                {/* === CENTER-LEFT: nádoba přesazená dovnitř === */}
                <g transform="translate(240, 60)">
                  {/* Okno — rám */}
                  <rect x="0" y="0" width="100" height="90" rx="4" fill="none" stroke="#c8b89a" strokeWidth="2"/>
                  <rect x="4" y="4" width="92" height="82" rx="2" fill="#e8f0f8" opacity="0.4"/>
                  {/* Kříž okna */}
                  <line x1="50" y1="4" x2="50" y2="86" stroke="#c8b89a" strokeWidth="1.5" opacity="0.6"/>
                  <line x1="4" y1="45" x2="96" y2="45" stroke="#c8b89a" strokeWidth="1.5" opacity="0.6"/>
                  {/* Květináč na parapetu */}
                  <rect x="30" y="60" width="40" height="22" rx="3" fill="#c8a97a" opacity="0.5"/>
                  <rect x="26" y="58" width="48" height="6" rx="2" fill="#b89870" opacity="0.6"/>
                  {/* Rostlina v nádobě */}
                  <line x1="50" y1="58" x2="50" y2="32" stroke="#3a5c2e" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M50 48 Q38 40 34 28" stroke="#3a5c2e" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  <path d="M50 42 Q62 34 66 22" stroke="#3a5c2e" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  <circle cx="34" cy="24" r="8" fill="#4a7c3f" opacity="0.8"/>
                  <circle cx="66" cy="18" r="7" fill="#4a7c3f" opacity="0.8"/>
                  <circle cx="50" cy="28" r="7" fill="#5a8c4f" opacity="0.7"/>
                </g>
                <text x="290" y="192" fontFamily="var(--font-sans,sans-serif)" fontSize="9" fill="#c8b89a" textAnchor="middle" letterSpacing="0.08em">DOVNITŘ</text>

                {/* === CENTER-RIGHT: mulčování === */}
                <g transform="translate(410, 80)">
                  {/* Stonek */}
                  <line x1="60" y1="92" x2="60" y2="20" stroke="#5a3e28" strokeWidth="2.5" strokeLinecap="round"/>
                  <line x1="60" y1="60" x2="36" y2="36" stroke="#5a3e28" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="60" y1="50" x2="84" y2="28" stroke="#5a3e28" strokeWidth="1.5" strokeLinecap="round"/>
                  {/* Uschlé listy — zimní */}
                  <ellipse cx="32" cy="32" rx="10" ry="6" fill="#9a7a5a" opacity="0.6" transform="rotate(-30 32 32)"/>
                  <ellipse cx="88" cy="24" rx="9" ry="5" fill="#9a7a5a" opacity="0.6" transform="rotate(20 88 24)"/>
                  <ellipse cx="60" cy="14" rx="8" ry="5" fill="#9a7a5a" opacity="0.5"/>
                  {/* Mulč — vrstva */}
                  <ellipse cx="60" cy="92" rx="52" ry="10" fill="#8B6914" opacity="0.25"/>
                  <ellipse cx="60" cy="92" rx="52" ry="10" fill="none" stroke="#8B6914" strokeWidth="1" opacity="0.4"/>
                  {/* Mulč textura — kousky */}
                  {[20,32,44,54,66,76,88,100].map((x, i) => (
                    <rect key={i} x={x} y={86 + (i%3)*3} width={6+(i%3)*2} height="4" rx="1" fill="#8B6914" opacity="0.35" transform={`rotate(${i*15} ${x+3} 88)`}/>
                  ))}
                  {/* Popisek mulče */}
                  <text x="60" y="110" fontFamily="var(--font-sans,sans-serif)" fontSize="7" fill="#9a8a7a" textAnchor="middle" letterSpacing="0.06em">MULČ</text>
                </g>
                <text x="470" y="192" fontFamily="var(--font-sans,sans-serif)" fontSize="9" fill="#c8b89a" textAnchor="middle" letterSpacing="0.08em">MULČOVÁNÍ</text>

                {/* === RIGHT: nádoba s nohama (izolace) === */}
                <g transform="translate(570, 40)">
                  {/* Nádoba */}
                  <path d="M20 130 Q18 140 30 145 L90 145 Q102 140 100 130 L90 60 L30 60 Z" fill="none" stroke="#c8b89a" strokeWidth="2"/>
                  <rect x="30" y="55" width="60" height="10" rx="3" fill="none" stroke="#c8b89a" strokeWidth="1.5"/>
                  {/* Bublinkový obal — izolace */}
                  <path d="M20 130 Q18 140 30 145 L90 145 Q102 140 100 130 L90 60 L30 60 Z" fill="#a0b8d0" opacity="0.12"/>
                  {/* Bublinky */}
                  {[35,50,65,80,95,40,55,70,85,45,60,75,90].map((x, i) => (
                    <circle key={i} cx={x} cy={75 + (i%5)*12} r="4" fill="none" stroke="#a0b8d0" strokeWidth="1" opacity="0.5"/>
                  ))}
                  {/* Rostlina */}
                  <line x1="60" y1="55" x2="60" y2="10" stroke="#3a5c2e" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M60 35 Q46 26 42 12" stroke="#3a5c2e" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  <path d="M60 28 Q74 20 78 6" stroke="#3a5c2e" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  <circle cx="42" cy="8" r="9" fill="#4a7c3f" opacity="0.85"/>
                  <circle cx="78" cy="2" r="8" fill="#4a7c3f" opacity="0.85"/>
                  {/* Nohy — dřevěné podložky */}
                  <rect x="28" y="145" width="14" height="8" rx="2" fill="#c8a97a" opacity="0.7"/>
                  <rect x="78" y="145" width="14" height="8" rx="2" fill="#c8a97a" opacity="0.7"/>
                </g>
                <text x="630" y="192" fontFamily="var(--font-sans,sans-serif)" fontSize="9" fill="#c8b89a" textAnchor="middle" letterSpacing="0.08em">IZOLACE</text>

              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#kdy-zacit">Kdy začít s přípravou</a></li>
                <li><a href="#co-zakryt">Co zakrýt a čím</a></li>
                <li><a href="#co-dovnitr">Co přestěhovat dovnitř</a></li>
                <li><a href="#mulcovani">Mulčování kořenů</a></li>
                <li><a href="#nadoby">Nádoby a truhlíky</a></li>
                <li><a href="#na-jare">Co udělat na jaře</a></li>
              </ol>
            </nav>

            <section id="kdy-zacit">
              <h2>Kdy začít s přípravou</h2>
              <p>Příprava na zimu není jednorázová akce — je to postupný proces od října do prosince. Obecné pravidlo: rostliny připravuj <strong>před prvním mrazem</strong>, ne po něm. Sleduj předpověď počasí a při výhledu na trvalé noční teploty pod 0 °C jednej.</p>
              <ul>
                <li><strong>Říjen:</strong> přesun citlivých nádob dovnitř, mulčování záhonů</li>
                <li><strong>Listopad:</strong> zakrývání keřů a trvalek, ochrana kmenů ovocných stromů</li>
                <li><strong>Prosinec:</strong> kontrola zakrytí, přidání dalšího mulče při silných mrazech</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Zakrývej vždy za suchého počasí. Rostlina mokrá pod jutou nebo netkanovinovým zábalem je náchylnější k plísním než rostlina bez ochrany.</div>
            </section>

            <section id="co-zakryt">
              <h2>Co zakrýt a čím</h2>
              <p>Ne všechny rostliny zakrýváš stejně. Záleží na tom jak jsou mrazuvzdorné a co konkrétně potřebuješ chránit — pupeny, kořeny nebo celou nadzemní část.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Rostlina</th><th>Co chránit</th><th>Materiál</th></tr></thead>
                  <tbody>
                    <tr><td>Růže (čajohybridní)</td><td>Kořenový krček, pupeny</td><td>Hlína nebo kompost k patě, juta nebo chvojí</td></tr>
                    <tr><td>Hortenzie velkolisté</td><td>Celá nadzemní část</td><td>Netkanoviny, juta, chvojí</td></tr>
                    <tr><td>Vřesy a vřesovce</td><td>Ochrana před vysycháním</td><td>Chvojí, lehká netkanoviny</td></tr>
                    <tr><td>Levandule</td><td>Kořenový krček</td><td>Písko-štěrkový mulč, nesmí stát ve vodě</td></tr>
                    <tr><td>Bambus</td><td>Listy a výhony</td><td>Netkanoviny nebo jutový vak</td></tr>
                    <tr><td>Ovocné stromy (mladé)</td><td>Kmen</td><td>Jutový pás nebo bílý nátěr kmene</td></tr>
                  </tbody>
                </table>
              </div>
              <h3>Materiály na zakrývání</h3>
              <ul>
                <li><strong>Netkanoviny (agrotextilie)</strong> – nejlepší pro jemné rostliny, propouští vzduch a vlhkost, nepropouští mráz</li>
                <li><strong>Juta</strong> – přírodní, prodyšná, ideální pro keře a stromy</li>
                <li><strong>Chvojí (smrkové nebo jedlové větve)</strong> – chrání před mrazem i vysycháním větrem, zdarma z lesa</li>
                <li><strong>Fólie</strong> – pouze jako dočasná ochrana při náhlém mrazu, ne na celou zimu (hrozí přehřátí)</li>
              </ul>
            </section>

            <section id="co-dovnitr">
              <h2>Co přestěhovat dovnitř</h2>
              <p>Tropické a subtropické rostliny nesnesou mráz vůbec — musí přezimovat v interiéru. Klíčové je přestěhovat je <strong>dřív než vytopíš</strong> — přechod z venkovní teploty do vytopeného bytu je stres. Ideální je nejdřív přenést do chladnější místnosti (chodba, sklep, garáž) a postupně přivykat teplu.</p>
              <ul>
                <li><strong>Citrusy</strong> – světlé, chladné místo (8–12 °C), minimální zálivka</li>
                <li><strong>Oleander</strong> – sklep nebo garáž, teplota 5–10 °C, téměř bez zálivky</li>
                <li><strong>Fuchsie</strong> – chladné světlé místo, mírná zálivka</li>
                <li><strong>Pelargónie</strong> – světlý parapet, teplota nad 5 °C</li>
                <li><strong>Banánovník</strong> – teplý interiér nebo skleník</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Před přenesením dovnitř vždy zkontroluj listí a substrát na škůdce — mšice, svilušky nebo červci se v teple bytu rozmnožují raketově. Ošetři preventivně systémovým insekticidem.</div>
            </section>

            <section id="mulcovani">
              <h2>Mulčování kořenů</h2>
              <p>Mulč je nejjednodušší a nejúčinnější ochrana kořenů před mrazem. Vrstva organického materiálu 10–15 cm kolem paty rostliny izoluje půdu, zabraňuje hlubokému promrznutí a zároveň zadržuje vlhkost.</p>
              <h3>Co použít jako mulč</h3>
              <ul>
                <li><strong>Kůra (borka)</strong> – nejběžnější, dekorativní, pomalý rozklad</li>
                <li><strong>Listí</strong> – zdarma, výborné pro záhony a pod keři</li>
                <li><strong>Sláma</strong> – lehká, levná, ideální pro jahody a nízké trvalky</li>
                <li><strong>Kompost</strong> – mulčuje i hnojí zároveň</li>
              </ul>
              <p>Mulč nanáš vždy na <strong>vlhkou půdu</strong> — nikdy na zmrzlou nebo suchou. Nechej mezeru u samotného kmene nebo stonku (2–3 cm) aby nedocházelo k hnilobě.</p>
            </section>

            <section id="nadoby">
              <h2>Nádoby a truhlíky</h2>
              <p>Rostliny v nádobách jsou náchylnější na mráz než rostliny v zemi — kořeny jsou ze všech stran obklopené vzduchem a substrát promrzá rychleji než zahradní půda. Navíc keramické a terakotové nádoby při opakovaném zmrznutí praskají.</p>
              <h3>Co s nádobami udělat</h3>
              <ul>
                <li>Nádoby s citlivými rostlinami přenes dovnitř</li>
                <li>Odolnější rostliny nech venku ale nádobu obal jutou nebo bublinkovým obalem</li>
                <li>Postav nádoby na dřevěné podložky nebo nožičky — zabrání promrzání zdola a stagnaci vody</li>
                <li>Keramické nádoby které necháváš venku musí být označeny jako mrazuvzdorné — jinak je přenes do sucha</li>
                <li>Zálivku omez na minimum, substrát nesmí být mokrý při mrazu</li>
              </ul>
            </section>

            <section id="na-jare">
              <h2>Co udělat na jaře</h2>
              <p>Stejně důležité jako zakrytí je včasné odkrytí. Rostliny pod netkanovinou nebo jutou se na jaře přehřívají a vyrašení pod zábalem může způsobit plísně.</p>
              <ul>
                <li>Odkrývej postupně — nejdřív za oblačného dne, ne do přímého slunce</li>
                <li>Pokud předpověď hlásí pozdní mraz, zakryj znovu</li>
                <li>Mulč nech na místě — do léta se rozloží a obohatí půdu</li>
                <li>Rostliny z interiéru přesouvej ven postupně — nejdřív do stínu, pak na slunce</li>
                <li>Po zimě přihnojuj — rostliny jsou oslabené a potřebují nastartovat</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Nevyhazuj větve které vypadají suché a mrtvé — počkej do května. Mnoho rostlin raší pozdě a to co vypadá jako mrtvé dřevo může být naprosto zdravé. Škrábni nehtm kůru — pokud je pod ní zeleno, větev žije.</div>
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
                <li><a href="#kdy-zacit">Kdy začít</a></li>
                <li><a href="#co-zakryt">Co zakrýt</a></li>
                <li><a href="#co-dovnitr">Co přestěhovat</a></li>
                <li><a href="#mulcovani">Mulčování</a></li>
                <li><a href="#nadoby">Nádoby a truhlíky</a></li>
                <li><a href="#na-jare">Co udělat na jaře</a></li>
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
