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
              <svg viewBox="0 0 760 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="220" fill="#f0f4f8"/>
                {/* Sněhové vločky */}
                {[80, 230, 380, 530, 680].map((x, i) => (
                  <g key={i} transform={`translate(${x}, ${16 + (i%2)*12})`} opacity="0.25">
                    <line x1="0" y1="-7" x2="0" y2="7" stroke="#a0b8d0" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="-7" y1="0" x2="7" y2="0" stroke="#a0b8d0" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="-5" y1="-5" x2="5" y2="5" stroke="#a0b8d0" strokeWidth="1" strokeLinecap="round"/>
                    <line x1="5" y1="-5" x2="-5" y2="5" stroke="#a0b8d0" strokeWidth="1" strokeLinecap="round"/>
                  </g>
                ))}
                <line x1="190" y1="20" x2="190" y2="190" stroke="#c8b89a" strokeWidth="0.5" opacity="0.3"/>
                <line x1="380" y1="20" x2="380" y2="190" stroke="#c8b89a" strokeWidth="0.5" opacity="0.3"/>
                <line x1="570" y1="20" x2="570" y2="190" stroke="#c8b89a" strokeWidth="0.5" opacity="0.3"/>
                {/* 1. ZAKRYTÍ */}
                <g transform="translate(35, 25)">
                  <path d="M16 148 L60 42 L104 148 Z" fill="#c8a97a" opacity="0.28"/>
                  <path d="M16 148 L60 42 L104 148 Z" fill="none" stroke="#c8a97a" strokeWidth="2" opacity="0.7"/>
                  <line x1="22" y1="128" x2="98" y2="128" stroke="#c8a97a" strokeWidth="0.8" opacity="0.5"/>
                  <line x1="28" y1="108" x2="92" y2="108" stroke="#c8a97a" strokeWidth="0.8" opacity="0.5"/>
                  <line x1="34" y1="88" x2="86" y2="88" stroke="#c8a97a" strokeWidth="0.8" opacity="0.5"/>
                  <line x1="40" y1="68" x2="80" y2="68" stroke="#c8a97a" strokeWidth="0.8" opacity="0.5"/>
                  <path d="M22 144 Q60 138 98 144" stroke="#9a7a5a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  <ellipse cx="60" cy="43" rx="14" ry="4" fill="white" opacity="0.9"/>
                </g>
                <text x="95" y="208" fontFamily="var(--font-sans,sans-serif)" fontSize="9" fill="#a0a898" textAnchor="middle" letterSpacing="0.1em">ZAKRYTÍ</text>
                {/* 2. DOVNITŘ */}
                <g transform="translate(215, 30)">
                  <rect x="5" y="0" width="130" height="140" rx="6" fill="none" stroke="#c8b89a" strokeWidth="2"/>
                  <rect x="10" y="5" width="120" height="130" rx="3" fill="#deeaf5" opacity="0.35"/>
                  <line x1="70" y1="5" x2="70" y2="135" stroke="#c8b89a" strokeWidth="1.5" opacity="0.5"/>
                  <line x1="10" y1="70" x2="135" y2="70" stroke="#c8b89a" strokeWidth="1.5" opacity="0.5"/>
                  <rect x="0" y="135" width="140" height="8" rx="3" fill="#c8b89a" opacity="0.4"/>
                  <rect x="44" y="100" width="52" height="32" rx="4" fill="#c8a97a" opacity="0.55"/>
                  <rect x="40" y="96" width="60" height="8" rx="3" fill="#b89870" opacity="0.65"/>
                  <line x1="70" y1="96" x2="70" y2="52" stroke="#3a5c2e" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M70 76 Q52 64 46 46" stroke="#3a5c2e" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  <path d="M70 66 Q88 54 94 36" stroke="#3a5c2e" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  <circle cx="44" cy="40" r="12" fill="#4a7c3f" opacity="0.85"/>
                  <circle cx="96" cy="30" r="11" fill="#4a7c3f" opacity="0.85"/>
                  <circle cx="70" cy="42" r="10" fill="#5a8c4f" opacity="0.7"/>
                </g>
                <text x="285" y="208" fontFamily="var(--font-sans,sans-serif)" fontSize="9" fill="#a0a898" textAnchor="middle" letterSpacing="0.1em">DOVNITŘ</text>
                {/* 3. MULČOVÁNÍ */}
                <g transform="translate(400, 22)">
                  <line x1="80" y1="152" x2="80" y2="58" stroke="#5a3e28" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="80" y1="110" x2="50" y2="78" stroke="#5a3e28" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="80" y1="94" x2="110" y2="64" stroke="#5a3e28" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="80" y1="78" x2="60" y2="52" stroke="#5a3e28" strokeWidth="1.5" strokeLinecap="round"/>
                  <ellipse cx="46" cy="72" rx="13" ry="8" fill="#b89870" opacity="0.55" transform="rotate(-30 46 72)"/>
                  <ellipse cx="114" cy="58" rx="12" ry="7" fill="#b89870" opacity="0.55" transform="rotate(25 114 58)"/>
                  <ellipse cx="56" cy="46" rx="10" ry="6" fill="#b89870" opacity="0.5" transform="rotate(-15 56 46)"/>
                  <ellipse cx="80" cy="152" rx="64" ry="13" fill="#8B6914" opacity="0.2"/>
                  <ellipse cx="80" cy="152" rx="64" ry="13" fill="none" stroke="#8B6914" strokeWidth="1.5" opacity="0.35"/>
                  {[28,42,56,68,82,96,110,122].map((x, i) => (
                    <rect key={i} x={x} y={148+(i%3)*3} width={8+(i%2)*3} height="5" rx="2" fill="#8B6914" opacity="0.4" transform={`rotate(${i*20} ${x+4} 151)`}/>
                  ))}
                </g>
                <text x="475" y="208" fontFamily="var(--font-sans,sans-serif)" fontSize="9" fill="#a0a898" textAnchor="middle" letterSpacing="0.1em">MULČOVÁNÍ</text>
                {/* 4. IZOLACE */}
                <g transform="translate(590, 22)">
                  <path d="M18 152 Q16 162 30 167 L122 167 Q136 162 134 152 L122 60 L30 60 Z" fill="#a0b8d0" opacity="0.12"/>
                  <path d="M18 152 Q16 162 30 167 L122 167 Q136 162 134 152 L122 60 L30 60 Z" fill="none" stroke="#c8b89a" strokeWidth="2"/>
                  <rect x="26" y="54" width="100" height="12" rx="4" fill="none" stroke="#c8b89a" strokeWidth="2"/>
                  {[38,56,74,92,110,46,64,82,100,42,60,78,96].map((x, i) => (
                    <circle key={i} cx={x} cy={78+(i%5)*15} r="6" fill="none" stroke="#a0b8d0" strokeWidth="1" opacity="0.45"/>
                  ))}
                  <line x1="76" y1="54" x2="76" y2="8" stroke="#3a5c2e" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M76 34 Q58 24 52 6" stroke="#3a5c2e" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  <path d="M76 26 Q94 16 100 0" stroke="#3a5c2e" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  <circle cx="50" cy="2" r="12" fill="#4a7c3f" opacity="0.85"/>
                  <circle cx="102" cy="-4" r="11" fill="#4a7c3f" opacity="0.85"/>
                  <circle cx="76" cy="4" r="10" fill="#5a8c4f" opacity="0.7"/>
                  <rect x="30" y="167" width="20" height="10" rx="3" fill="#c8a97a" opacity="0.7"/>
                  <rect x="102" y="167" width="20" height="10" rx="3" fill="#c8a97a" opacity="0.7"/>
                </g>
                <text x="665" y="208" fontFamily="var(--font-sans,sans-serif)" fontSize="9" fill="#a0a898" textAnchor="middle" letterSpacing="0.1em">IZOLACE</text>
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
