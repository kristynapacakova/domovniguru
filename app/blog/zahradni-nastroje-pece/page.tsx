import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Zahradní nástroje – jak o ně pečovat, aby vydržely 2025",
  description: "Dobré zahradní nástroje vydrží desítky let – ale jen pokud o ně pečuješ. Čištění, broušení, mazání a skladování krok za krokem.",
  alternates: { canonical: "https://domovniguru.cz/blog/zahradni-nastroje-pece" },
  openGraph: { title: "Zahradní nástroje – jak o ně pečovat", description: "Čištění, broušení, mazání a skladování. Nástroje které vydrží desítky let.", url: "https://domovniguru.cz/blog/zahradni-nastroje-pece", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2025-03-15T08:00:00Z", modifiedTime: "2025-03-01T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Zahradní nástroje – jak o ně pečovat", description: "Čištění, broušení, mazání a skladování." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://domovniguru.cz/blog/zahradni-nastroje-pece#article", "headline": "Zahradní nástroje – jak o ně pečovat, aby vydržely", "datePublished": "2025-03-15T08:00:00Z", "dateModified": "2025-03-01T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "inLanguage": "cs", "keywords": ["péče o zahradní nástroje", "broušení nářadí", "čištění zahradního nářadí", "údržba lopaty", "mazání nářadí"] }] };

const RELATED = [
  { title: "Jak správně zalévat rostliny", href: "/blog/jak-spravne-zalevat", read: "5 min" },
  { title: "Jak stříhat keře – průvodce pro každého", href: "/blog/jak-strihat-kere", read: "4 min" },
  { title: "Jak pěstovat rajčata – od výsevu po sklizeň", href: "/blog/jak-pestovat-rajcata", read: "7 min" },
  { title: "Ochrana rostlin před zimou – co, kdy a jak", href: "/blog/ochrana-rostlin-pred-zimou", read: "5 min" },
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
              <span>Zahradní nástroje – péče</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 4 min čtení</span>
              </div>
              <h1 className="article-h1">Zahradní nástroje – jak o ně pečovat, aby vydržely</h1>
              <p className="article-lead">Kvalitní lopata nebo nůžky vydrží celý život – pokud je po každém použití očistíš, občas nabrousíš a před zimou promaštíš. Většina nářadí nerezaví stářím, ale zanedbáním.</p>
              <div className="article-meta-row"><span>Aktualizováno: 1. března 2025</span><span>·</span><span>DomovniGuru</span></div>
            </header>

            {/* HERO ILLUSTRATION */}
            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="200" fill="#faf6f0"/>
                <line x1="0" y1="172" x2="760" y2="172" stroke="#c8b89a" strokeWidth="1" opacity="0.4"/>

                {/* === LOPATA === */}
                <g transform="translate(80, 20) rotate(12)">
                  {/* Násada */}
                  <rect x="18" y="0" width="8" height="130" rx="4" fill="#c8a97a"/>
                  {/* Lopatka */}
                  <path d="M4 126 Q22 148 22 160 Q22 172 22 172 Q22 172 22 160 Q22 148 40 126 Z" fill="#8a8a8a"/>
                  <path d="M4 126 L40 126 L40 148 Q22 162 4 148 Z" fill="#9a9a9a"/>
                  {/* Kovová objímka */}
                  <rect x="12" y="122" width="20" height="8" rx="2" fill="#6a6a6a"/>
                </g>

                {/* === HRÁBĚ === */}
                <g transform="translate(180, 15) rotate(-8)">
                  <rect x="16" y="0" width="7" height="140" rx="3.5" fill="#c8a97a"/>
                  <rect x="12" y="120" width="15" height="5" rx="2" fill="#6a6a6a"/>
                  {/* Zuby */}
                  <rect x="0" y="125" width="5" height="22" rx="2.5" fill="#8a8a8a"/>
                  <rect x="8" y="125" width="5" height="26" rx="2.5" fill="#8a8a8a"/>
                  <rect x="16" y="125" width="5" height="24" rx="2.5" fill="#8a8a8a"/>
                  <rect x="24" y="125" width="5" height="26" rx="2.5" fill="#8a8a8a"/>
                  <rect x="32" y="125" width="5" height="22" rx="2.5" fill="#8a8a8a"/>
                  <rect x="-2" y="123" width="42" height="6" rx="3" fill="#7a7a7a"/>
                </g>

                {/* === MOTYKA === */}
                <g transform="translate(278, 18) rotate(6)">
                  <rect x="16" y="0" width="7" height="135" rx="3.5" fill="#c8a97a"/>
                  <rect x="10" y="128" width="18" height="6" rx="2" fill="#6a6a6a"/>
                  <path d="M0 118 Q19 130 38 118 L34 148 Q19 155 4 148 Z" fill="#8a8a8a"/>
                </g>

                {/* === CENTER: nůžky na větve + péče === */}
                {/* Nůžky — velké, centrální */}
                <g transform="translate(340, 30)">
                  {/* Čepele */}
                  <path d="M40 0 Q10 40 0 80 Q20 72 40 80 Q60 72 80 80 Q70 40 40 0Z" fill="#9a9a9a"/>
                  <path d="M40 0 Q30 40 20 80 Q30 76 40 80 Q50 76 60 80 Q50 40 40 0Z" fill="#b0b0b0"/>
                  {/* Šroub středu */}
                  <circle cx="40" cy="78" r="8" fill="#6a6a6a"/>
                  <circle cx="40" cy="78" r="4" fill="#5a5a5a"/>
                  {/* Rukojeti */}
                  <ellipse cx="20" cy="108" rx="18" ry="32" fill="none" stroke="#c8a97a" strokeWidth="3"/>
                  <ellipse cx="60" cy="108" rx="18" ry="32" fill="none" stroke="#c8a97a" strokeWidth="3"/>
                </g>

                {/* === OLEJ / MAZÁNÍ — lahvička === */}
                <g transform="translate(470, 80)">
                  <rect x="0" y="20" width="32" height="50" rx="5" fill="none" stroke="#c8b89a" strokeWidth="1.8"/>
                  <rect x="8" y="12" width="16" height="12" rx="3" fill="none" stroke="#c8b89a" strokeWidth="1.8"/>
                  <rect x="12" y="6" width="8" height="8" rx="2" fill="none" stroke="#c8b89a" strokeWidth="1.5"/>
                  {/* Kapka oleje */}
                  <path d="M16 58 Q16 50 20 46 Q24 50 24 58 Q24 64 20 64 Q16 64 16 58Z" fill="#c8b89a" opacity="0.5"/>
                  <text x="4" y="38" fontFamily="sans-serif" fontSize="7" fill="#c8b89a" letterSpacing="0.05em">OIL</text>
                </g>

                {/* === BROUSEK === */}
                <g transform="translate(536, 90)">
                  <rect x="0" y="0" width="64" height="22" rx="6" fill="none" stroke="#c8b89a" strokeWidth="1.8"/>
                  <rect x="6" y="5" width="52" height="12" rx="3" fill="#c8b89a" opacity="0.15"/>
                  {/* Textura brousku */}
                  <line x1="14" y1="4" x2="14" y2="18" stroke="#c8b89a" strokeWidth="0.8" opacity="0.4"/>
                  <line x1="22" y1="4" x2="22" y2="18" stroke="#c8b89a" strokeWidth="0.8" opacity="0.4"/>
                  <line x1="30" y1="4" x2="30" y2="18" stroke="#c8b89a" strokeWidth="0.8" opacity="0.4"/>
                  <line x1="38" y1="4" x2="38" y2="18" stroke="#c8b89a" strokeWidth="0.8" opacity="0.4"/>
                  <line x1="46" y1="4" x2="46" y2="18" stroke="#c8b89a" strokeWidth="0.8" opacity="0.4"/>
                  <line x1="54" y1="4" x2="54" y2="18" stroke="#c8b89a" strokeWidth="0.8" opacity="0.4"/>
                </g>

                {/* === LOPATKA RUČNÍ === */}
                <g transform="translate(630, 40) rotate(-15)">
                  <rect x="12" y="0" width="6" height="70" rx="3" fill="#c8a97a"/>
                  <path d="M2 66 Q15 76 15 86 Q15 96 15 96 Q15 96 15 86 Q15 76 28 66 Z" fill="#8a8a8a"/>
                  <path d="M2 66 L28 66 L26 82 Q15 90 4 82 Z" fill="#9a9a9a"/>
                  <rect x="8" y="62" width="14" height="6" rx="2" fill="#6a6a6a"/>
                </g>

                {/* === RUKAVICE === */}
                <g transform="translate(680, 60)">
                  {/* Palec */}
                  <path d="M8 40 Q0 32 2 20 Q6 12 14 16 Q16 24 14 34Z" fill="#c8a97a" opacity="0.7"/>
                  {/* Dlaň */}
                  <rect x="10" y="22" width="36" height="52" rx="10" fill="#c8a97a" opacity="0.7"/>
                  {/* Prsty */}
                  <rect x="12" y="10" width="10" height="20" rx="5" fill="#c8a97a" opacity="0.7"/>
                  <rect x="24" y="6" width="10" height="22" rx="5" fill="#c8a97a" opacity="0.7"/>
                  <rect x="36" y="10" width="9" height="20" rx="5" fill="#c8a97a" opacity="0.7"/>
                  {/* Manžeta */}
                  <rect x="10" y="66" width="36" height="10" rx="3" fill="#b89860" opacity="0.5"/>
                </g>

                {/* Labels */}
                <text x="100" y="192" fontFamily="var(--font-sans,sans-serif)" fontSize="9" fill="#c8b89a" textAnchor="middle" letterSpacing="0.08em">NÁŘADÍ</text>
                <text x="375" y="192" fontFamily="var(--font-sans,sans-serif)" fontSize="9" fill="#c8b89a" textAnchor="middle" letterSpacing="0.08em">BROUŠENÍ</text>
                <text x="580" y="192" fontFamily="var(--font-sans,sans-serif)" fontSize="9" fill="#c8b89a" textAnchor="middle" letterSpacing="0.08em">MAZÁNÍ</text>

              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#proc-pecovat">Proč se to vyplatí</a></li>
                <li><a href="#cisteni">Čištění po každém použití</a></li>
                <li><a href="#bruseni">Broušení – kdy a jak</a></li>
                <li><a href="#mazani">Mazání a ochrana kovu</a></li>
                <li><a href="#nasady">Péče o dřevěné násady</a></li>
                <li><a href="#skladovani">Skladování přes zimu</a></li>
              </ol>
            </nav>

            <section id="proc-pecovat">
              <h2>Proč se péče o nářadí vyplatí</h2>
              <p>Kvalitní zahradní nástroje nekupuješ každý rok. Kovářská lopata nebo profesionální zahradní nůžky stojí 500–2 000 Kč a při dobré péči vydrží 20–30 let. Při zanedbání zreziví a otupí za dvě sezóny.</p>
              <p>Tupé a rezavé nářadí je navíc nebezpečné – klouže, vyžaduje větší sílu a zvyšuje riziko úrazu. Ostré nůžky dělají čistý řez který se lépe hojí, tupé listy drtí a trhají – a to je vstupní brána pro choroby rostliny.</p>
            </section>

            <section id="cisteni">
              <h2>Čištění po každém použití</h2>
              <p>Největší chyba je odložit nářadí s blátem. Vlhkost + hlína = koroze. Stačí 2 minuty po každém použití:</p>
              <ul>
                <li>Setři hrubé nečistoty o trávu nebo hadřík hned na zahradě</li>
                <li>Důkladně očisti kovové části kartáčem nebo šponií s vodou</li>
                <li>Osušte – nikdy nedávej vlhké nářadí do kůlny</li>
                <li>Pokud jsi pracoval s nemocnými rostlinami, dezinfikuj čepele lihem nebo roztokem Savola</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Vědro s pískem namočeným v oleji u vchodu do kůlny – po každém použití zabodni nářadí párkrát dovnitř. Písek očistí, olej ochrání. Stará zahradnická finta.</div>
            </section>

            <section id="bruseni">
              <h2>Broušení – kdy a jak</h2>
              <p>Brousíš tehdy, když nářadí přestane krájet ale začne trhat nebo klouzat. U nůžek to poznáš okamžitě, u lopaty nebo motyky méně – zkus přejet prstem (opatrně!) po ostří. Pokud cítíš hrany a nerovnosti, je čas brousit.</p>
              <h3>Co brousit čím</h3>
              <ul>
                <li><strong>Zahradní nůžky a sekátory:</strong> diamantový pilník nebo jemný brousek, pouze na ostří stranu (vnitřní plochá strana se nebrousí)</li>
                <li><strong>Lopata, motyka, hrábě:</strong> plochý pilník nebo úhlová bruska, brousíš na původní úhel ostří (obvykle 45°)</li>
                <li><strong>Nůž na roubování:</strong> brousek na kuchyňské nože</li>
              </ul>
              <p>Po nabroušení otři kovové piliny vlhkým hadříkem a nanes tenkou vrstvu oleje.</p>
              <div className="article-tip"><strong>💡 Jak poznat správný úhel:</strong> Podívej se na původní seříznutí kovu – to je tvůj vodítko. Broušeš vždy paralelně s tímto úhlem, ne napříč.</div>
            </section>

            <section id="mazani">
              <h2>Mazání a ochrana kovu</h2>
              <p>Každý kov v zahradě potřebuje ochranu před vlhkostí. Stačí tenká vrstva – přemaz dělá víc škody než dobra, přitahuje prach a špiní ruce.</p>
              <ul>
                <li><strong>Strojní olej nebo WD-40</strong> – na klouby nůžek a sekátorů, aplikuj kapku po každém čištění</li>
                <li><strong>Lněný olej nebo řepkový olej</strong> – na lopaty, motyky, hrábě před zimním uskladněním</li>
                <li><strong>Vazelína</strong> – na části kde se kov otírá o kov (pružiny, osy)</li>
              </ul>
              <p>Pozor na silikonový sprej – na nářadí které přichází do styku s půdou ho nepoužívej. Silikon kontaminuje půdu a zhoršuje její strukturu.</p>
            </section>

            <section id="nasady">
              <h2>Péče o dřevěné násady</h2>
              <p>Dřevěné násady jsou slabým místem každého nářadí. Suché dřevo praská, mokré bobtnáme a pouštíme kovovou hlavici. Jednou ročně (ideálně na podzim) obruste násadu jemným smirkem a natři lněným olejem – nechej vsáknout přes noc, přebytek setři.</p>
              <p>Popraskané nebo uvolněné násady vyměň okamžitě – uvolněná kovová hlavice ve švihu je vážné riziko. Náhradní násady koupíš v každém zahradnictví za 80–200 Kč.</p>
            </section>

            <section id="skladovani">
              <h2>Skladování přes zimu</h2>
              <p>Podzimní příprava nářadí na zimu ti ušetří hodiny práce na jaře:</p>
              <ul>
                <li>Důkladně vyčisti a osuš veškeré nářadí</li>
                <li>Nabrousíš teď = na jaře hned pracuješ, nezdržuješ se</li>
                <li>Nanes ochranný olej na všechny kovové části</li>
                <li>Dřevěné násady obruste a naolejuj lněným olejem</li>
                <li>Zahradní nůžky a sekátory demontuj, vyčisti klouby, nanes vazelínu</li>
                <li>Skládej do sucha – nikdy na zemi, ideálně zavěšené nebo v stojanu</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Silikagel do uzavřeného kufříku s malým nářadím (nůžky, nože) pohltí vlhkost a zabrání korozi i při skladování v nevytápěné kůlně.</div>
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
                <li><a href="#proc-pecovat">Proč se to vyplatí</a></li>
                <li><a href="#cisteni">Čištění</a></li>
                <li><a href="#bruseni">Broušení</a></li>
                <li><a href="#mazani">Mazání</a></li>
                <li><a href="#nasady">Dřevěné násady</a></li>
                <li><a href="#skladovani">Skladování přes zimu</a></li>
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
