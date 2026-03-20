import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak připravit zahradu na jaro – kompletní checklist 2025",
  description: "Praktický průvodce jarní přípravou zahrady krok za krokem. Trávník, keře, stromy, záhony, terasa – vše co potřebuješ udělat v březnu a dubnu.",
  alternates: { canonical: "https://domovniguru.cz/blog/jarni-zahrada" },
  openGraph: { title: "Jak připravit zahradu na jaro – kompletní checklist 2025", description: "Trávník, keře, stromy, záhony, terasa – vše co potřebuješ udělat v březnu a dubnu.", url: "https://domovniguru.cz/blog/jarni-zahrada", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2025-03-01T08:00:00Z", modifiedTime: "2025-03-01T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak připravit zahradu na jaro – kompletní checklist 2025", description: "Trávník, keře, stromy, záhony, terasa – vše co potřebuješ udělat v březnu a dubnu." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://domovniguru.cz/blog/jarni-zahrada#article", "headline": "Jak připravit zahradu na jaro – kompletní checklist 2025", "datePublished": "2025-03-01T08:00:00Z", "dateModified": "2025-03-01T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "inLanguage": "cs", "keywords": ["jak připravit zahradu na jaro", "jarní zahrada checklist", "vertikutace trávníku", "prořez ovocných stromů jaro"] }] };

const RELATED = [
  { title: "Jak ošetřit dřevěnou terasu před zimou", href: "/blog/drevo-terasa-zima", read: "4 min" },
  { title: "Jak připravit dům na zimu – checklist", href: "/blog/jak-pripravit-dum-na-zimu", read: "5 min" },
  { title: "Jak se zbavit plísně na zdi natrvalo", href: "/blog/jak-odstranit-plisen-na-zdi", read: "5 min" },
  { title: "Stěhování do nového – kompletní checklist", href: "/blog/stehovani-checklist", read: "5 min" },
];

export default function ArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="wrap">
        <div className="article-layout">
          <article className="article-body">

            {/* BREADCRUMB */}
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Domů</Link><span className="breadcrumb-sep">/</span>
              <Link href="/blog">Blog</Link><span className="breadcrumb-sep">/</span>
              <Link href="/blog/kategorie/zahrada">Zahrada & terasa</Link><span className="breadcrumb-sep">/</span>
              <span>Jarní příprava zahrady</span>
            </nav>

            {/* HEADER */}
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak připravit zahradu na jaro – kompletní checklist</h1>
              <p className="article-lead">Zahrada, která na jaře vypadá skvěle, se nepřipravuje v dubnu – připravuje se v březnu. Tenhle checklist tě provede vším, co je potřeba udělat, v pořadí, v jakém to má smysl.</p>
              <div className="article-meta-row"><span>Aktualizováno: 1. března 2025</span><span>·</span><span>DomovniGuru</span></div>
            </header>

            {/* HERO ILLUSTRATION */}
            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="200" fill="#f4f9f0"/>

                {/* Obloha */}
                <rect width="760" height="200" fill="url(#sky)"/>
                <defs>
                  <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#daeef5"/>
                    <stop offset="60%" stopColor="#eef7f0"/>
                    <stop offset="100%" stopColor="#c8e6a0"/>
                  </linearGradient>
                  <linearGradient id="grass" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#7ec850"/>
                    <stop offset="100%" stopColor="#5aaa30"/>
                  </linearGradient>
                </defs>

                {/* Trávník */}
                <ellipse cx="380" cy="195" rx="420" ry="60" fill="url(#grass)" opacity="0.5"/>
                <rect x="0" y="160" width="760" height="40" fill="#7ec850" opacity="0.4"/>

                {/* Strom vlevo */}
                <rect x="80" y="100" width="12" height="80" fill="#8B6340"/>
                <ellipse cx="86" cy="85" rx="38" ry="45" fill="#4a9e40" opacity="0.85"/>
                <ellipse cx="86" cy="78" rx="28" ry="35" fill="#5dbf45" opacity="0.7"/>
                {/* Květ na stromě */}
                {[[70,65],[95,58],[80,50],[102,72],[62,78]].map(([x,y],i)=>(
                  <ellipse key={i} cx={x} cy={y} rx="5" ry="5" fill="#ffb7c5" opacity="0.9"/>
                ))}

                {/* Strom vpravo */}
                <rect x="668" y="105" width="12" height="75" fill="#8B6340"/>
                <ellipse cx="674" cy="90" rx="34" ry="40" fill="#4a9e40" opacity="0.85"/>
                <ellipse cx="674" cy="83" rx="24" ry="30" fill="#5dbf45" opacity="0.7"/>
                {[[660,70],[680,65],[670,58],[688,75],[655,80]].map(([x,y],i)=>(
                  <ellipse key={i} cx={x} cy={y} rx="4" ry="4" fill="#ffb7c5" opacity="0.9"/>
                ))}

                {/* Záhon */}
                <ellipse cx="260" cy="170" rx="90" ry="20" fill="#7B4F2E" opacity="0.6"/>
                <ellipse cx="260" cy="165" rx="85" ry="15" fill="#8B5E3C" opacity="0.5"/>
                {/* Rostlinky v záhoně */}
                {[[220,155],[240,148],[260,152],[280,146],[300,154]].map(([x,y],i)=>(
                  <g key={i}>
                    <rect x={x-1} y={y} width="2" height="14" fill="#3a8a30"/>
                    <ellipse cx={x} cy={y} rx="6" ry="7" fill="#5cb840" opacity="0.9"/>
                  </g>
                ))}

                {/* Nářadí — hrábě */}
                <g transform="translate(390, 105) rotate(-15)">
                  <rect x="-2" y="0" width="4" height="75" fill="#8B6340"/>
                  <rect x="-14" y="0" width="28" height="6" rx="2" fill="#5a4020"/>
                  {[-12,-6,0,6,12].map((x,i)=>(
                    <rect key={i} x={x-1} y="6" width="2" height="12" rx="1" fill="#5a4020"/>
                  ))}
                </g>

                {/* Konev */}
                <g transform="translate(460, 125)">
                  <ellipse cx="20" cy="38" rx="20" ry="8" fill="#9ab0c0" opacity="0.5"/>
                  <rect x="4" y="10" width="32" height="30" rx="4" fill="#b8ccd8"/>
                  <path d="M36 20 Q55 18 52 32 Q48 40 36 38" stroke="#b8ccd8" strokeWidth="4" fill="none" strokeLinecap="round"/>
                  <rect x="12" y="4" width="16" height="8" rx="3" fill="#9ab0c0"/>
                  {/* Voda */}
                  {[0,4,8].map((x,i)=>(
                    <line key={i} x1={50+x} y1="34" x2={48+x} y2="50" stroke="#7ab8d8" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
                  ))}
                </g>

                {/* Slunce */}
                <circle cx="680" cy="35" r="22" fill="#f9d84a" opacity="0.85"/>
                {[0,45,90,135,180,225,270,315].map((deg,i)=>(
                  <line
                    key={i}
                    x1={680 + Math.cos(deg*Math.PI/180)*26}
                    y1={35 + Math.sin(deg*Math.PI/180)*26}
                    x2={680 + Math.cos(deg*Math.PI/180)*34}
                    y2={35 + Math.sin(deg*Math.PI/180)*34}
                    stroke="#f9d84a" strokeWidth="2.5" strokeLinecap="round" opacity="0.7"
                  />
                ))}

                {/* Ptáček */}
                <path d="M320 55 Q325 50 330 55" stroke="#5a7a9a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                <path d="M335 52 Q340 47 345 52" stroke="#5a7a9a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              </svg>
              <div style={{display:"flex",justifyContent:"space-around",padding:"8px 30px 12px",fontSize:"9px",letterSpacing:"0.1em",color:"#7a9a6a",textTransform:"uppercase",background:"#f4f9f0"}}>
                <span>🌳 Stromy a keře</span>
                <span>🌱 Záhony</span>
                <span>🪣 Nářadí připraveno</span>
                <span>☀️ Sezóna začíná</span>
              </div>
            </div>

            {/* TOC */}
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#kdy-zacit">Kdy začít – teplotní signály</a></li>
                <li><a href="#travnik">Trávník – jak ho probrat po zimě</a></li>
                <li><a href="#kere-stromy">Keře a ovocné stromy</a></li>
                <li><a href="#zahony">Záhony – příprava půdy</a></li>
                <li><a href="#nastroje">Nástroje a závlaha</a></li>
                <li><a href="#terasa">Terasa a zahradní nábytek</a></li>
                <li><a href="#checklist">Kompletní checklist</a></li>
              </ol>
            </nav>

            {/* SECTION 1 */}
            <section id="kdy-zacit">
              <h2>Kdy začít – neřiď se datem, ale teplotou</h2>
              <p>Největší chyba, kterou zahradníci dělají, je spěch. Správný čas pro zahájení jarních prací neurčuje kalendář, ale <strong>teplota</strong>. V Česku to bývá konec února až polovina března podle regionu.</p>
              <ul>
                <li><strong>Noční teploty nad 0 °C</strong> – pak můžeš začít s prořezem a čištěním</li>
                <li><strong>Denní teploty stabilně nad 5 °C</strong> – hnojení trávníku a záhonů</li>
                <li><strong>Půda nad 8 °C</strong> – teprve pak setí a výsadba citlivých rostlin</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Investuj 200–300 Kč do půdního teploměru. Zapíchni ho 10 cm hluboko – semena vysazená do studené půdy <strong>hnijí místo klíčení</strong>.</div>
            </section>

            {/* SECTION 2 */}
            <section id="travnik">
              <h2>Trávník – jak ho probrat po zimě</h2>
              <p>Trávník je nejviditelnější část zahrady a po zimě vyžaduje největší péči. Postupuj vždy v tomto pořadí: nejdříve <strong>vertikutace</strong>, pak <strong>dosévání</strong>, na závěr <strong>hnojení</strong>.</p>
              <ul>
                <li><strong>Vertikutace:</strong> Odstraní zfilcovanou vrstvu starého trávníku a mechu, která blokuje vzduch a vodu. Dělá se když je trávník min. 5 cm vysoký a půda není mokrá. Po vertikutaci trávník vypadá hrozně – za 2–3 týdny se krásně zazelená.</li>
                <li><strong>Dosévání holých míst:</strong> Smíchej semeno se substrátem (1:3), rozhoď a přitlač. Udržuj vlhké 2–3 týdny.</li>
                <li><strong>Jarní hnojení:</strong> Trávník potřebuje dusíkaté hnojivo (vysoký obsah N), cca 20–30 g/m². Hnoj na lehce vlhkou půdu za suchého dne – nikdy na promočený nebo suchý trávník.</li>
              </ul>
            </section>

            {/* SECTION 3 */}
            <section id="kere-stromy">
              <h2>Keře a ovocné stromy</h2>
              <p>Prořez ovocných stromů patří do <strong>konce zimy – ideálně únor až začátek března</strong>, před rašením pupenů. Cíl je vzdušná koruna ve tvaru poháru do které proniká světlo.</p>
              <ul>
                <li><strong>Ovocné stromy:</strong> Odstraň suché, nemocné a do středu koruny směřující větve. Rány nad 2 cm ošetři zahradním balzámem.</li>
                <li><strong>Růže:</strong> Prořezávej když pupeny začínají rašit (březen). Prořezej na 3–5 očka od země, šikmo nad pupenem.</li>
                <li><strong>Okrasné keře:</strong> Keře kvetoucí na letošních výhonech (levandule, tavolník) prořezej na jaře. Keře kvetoucí na loňských výhonech (forsythie, zlatice) až po odkvětu.</li>
                <li><strong>Ochrana před škůdci:</strong> Postříkej stromy a keře olejovou emulzí nebo sírou proti přezimujícím škůdcům.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Dezinfikuj nůžky lihem mezi každým stromem – přenášení chorob znečištěnými nástroji je jednou z nejčastějších příčin odumírání ovocných stromů.</div>
            </section>

            {/* SECTION 4 */}
            <section id="zahony">
              <h2>Záhony – příprava půdy na sezónu</h2>
              <p>Kvalitní příprava záhonu na začátku sezóny ti ušetří hodiny práce v létě.</p>
              <ul>
                <li><strong>Čištění:</strong> Odstraň zbytky loňských rostlin a suché listy. Nemocné části dej do odpadu, ne do kompostu.</li>
                <li><strong>Provzdušnění:</strong> Záhon překopej vidlemi – ne lopatou. Vidlemi nenarušíš strukturu půdy ani žížaly.</li>
                <li><strong>Kompost:</strong> Přidej 4–6 cm vyzrálého kompostu a zapracuj do horní vrstvy. Nikdy nepoužívej čerstvý hnůj – spálíš kořeny.</li>
                <li><strong>Mulčování:</strong> Nanes 5–8 cm mulče (kůra, štěpka). Zabrání plevelům, udrží vlhkost a postupně živí půdu.</li>
              </ul>
            </section>

            {/* SECTION 5 */}
            <section id="nastroje">
              <h2>Nástroje a závlahový systém</h2>
              <p>Věnuj hodinu na začátku sezóny kontrole nástrojů a ušetříš si frustraci celé léto.</p>
              <ul>
                <li>Naolejuj kovové části lopat, rýčů a vidlí</li>
                <li>Naostruj zahradní nůžky a sekáče – tupý nástroj drtí místo řeže</li>
                <li>Zkontroluj hadice a spojky na praskliny a těsnost</li>
                <li>Seřiď sekačku – svíčka, vzduchový filtr, nabroušení nože</li>
                <li>Spusť automatickou závlahu a projdi všechny zóny</li>
              </ul>
            </section>

            {/* SECTION 6 */}
            <section id="terasa">
              <h2>Terasa a zahradní nábytek</h2>
              <p>Dřevo po zimě vyžaduje péči. Umyj terasu, nechej <strong>min. 48 hodin vyschnout</strong> a nanes terasový olej nebo lazuru. Přeskočit tenhle krok = praskliny a šedivění dřeva.</p>
              <ul>
                <li><strong>Plastový nábytek:</strong> stačí umýt mýdlovou vodou</li>
                <li><strong>Dřevěný nábytek:</strong> ošetři terasovým olejem stejně jako terasu</li>
                <li><strong>Kovový nábytek:</strong> zrezlá místa přebrousí smirkem a ošetři antirezovým základem</li>
                <li><strong>Osvětlení terasy:</strong> zkontroluj těsnění svítidel a stav kabelů – poškozená izolace je bezpečnostní riziko</li>
              </ul>
            </section>

            {/* SECTION 7 — CHECKLIST */}
            <section id="checklist">
              <h2>Kompletní jarní checklist</h2>

              <h3>✅ Únor / začátek března</h3>
              <ul>
                <li>Prořez ovocných stromů (před rašením pupenů)</li>
                <li>Postřik stromů a keřů proti přezimujícím škůdcům</li>
                <li>Hnojení trávníku jarním dusíkatým hnojivem</li>
                <li>Kontrola a nabroušení zahradních nástrojů</li>
              </ul>

              <h3>✅ Březen</h3>
              <ul>
                <li>Vertikutace trávníku (při výšce min. 5 cm)</li>
                <li>Dosévání holých míst v trávníku</li>
                <li>Čištění záhonů od loňských zbytků</li>
                <li>Přidání kompostu do záhonů</li>
                <li>Prořez růží (při rašení pupenů)</li>
                <li>Kontrola a spuštění závlahového systému</li>
                <li>Umytí a ošetření dřevěné terasy</li>
              </ul>

              <h3>✅ Duben</h3>
              <ul>
                <li>Mulčování záhonů (5–8 cm vrstva kůry nebo štěpky)</li>
                <li>Setí raných zelenin a cibulovin</li>
                <li>Vyndání a ošetření zahradního nábytku</li>
                <li>Prořez keřů kvetoucích na letošních výhonech</li>
                <li>První sekání trávníku (při výšce 8–10 cm)</li>
              </ul>
            </section>

            {/* RELATED */}
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

          {/* SIDEBAR */}
          <aside className="article-sidebar">
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Obsah</div>
              <nav><ul className="sidebar-toc">
                <li><a href="#kdy-zacit">Kdy začít</a></li>
                <li><a href="#travnik">Trávník</a></li>
                <li><a href="#kere-stromy">Keře a stromy</a></li>
                <li><a href="#zahony">Záhony</a></li>
                <li><a href="#nastroje">Nástroje a závlaha</a></li>
                <li><a href="#terasa">Terasa a nábytek</a></li>
                <li><a href="#checklist">Kompletní checklist</a></li>
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
        .article-tip{background:#f0faf0;border-left:3px solid #5a9e6f;border-radius:0 8px 8px 0;padding:14px 18px;font-size:14px;line-height:1.6;color:#78716c;margin:20px 0}
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
