import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak opravit trávník – plíseň, mech a holá místa 2026",
  description: "Jak se zbavit mechu, plísně a holých míst v trávníku. Příčiny poškození, správný postup obnovy a prevence – krásný trávník bez chemie i s ní.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/opravit-travnik-ples-mech" },
  openGraph: { title: "Jak opravit trávník – plíseň, mech a holá místa 2026", description: "Mech, plíseň a holá místa v trávníku – jak je opravit a jak jim předejít.", url: "https://www.domovniguru.cz/blog/opravit-travnik-ples-mech", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-22T08:00:00Z", modifiedTime: "2026-04-22T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak opravit trávník – plíseň, mech a holá místa 2026", description: "Mech, plíseň a holá místa – jak opravit poškozený trávník." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/opravit-travnik-ples-mech#article",
    "headline": "Jak opravit trávník – plíseň, mech a holá místa 2026",
    "datePublished": "2026-04-22T08:00:00Z",
    "dateModified": "2026-04-22T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak opravit trávník", "mech v trávníku", "plíseň trávník", "holá místa trávník", "obnova trávníku", "odstranění mechu ze zahrady"]
  }]
};

const RELATED = [
  { title: "Jak zasít trávník od nuly", href: "/blog/zasit-travnik-od-nuly", read: "6 min" },
  { title: "Jak správně zalévat zahradu", href: "/blog/jak-spravne-zalevat", read: "5 min" },
  { title: "Jak hnojit zahradu", href: "/blog/jak-hnojit-zahradu", read: "6 min" },
  { title: "Jak připravit zahradu na jaro", href: "/blog/jarni-zahrada", read: "7 min" },
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
              <span>Oprava trávníku</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak opravit trávník – plíseň, mech a holá místa</h1>
              <p className="article-lead">Žlutá holá místa, zelený mech nebo šedivá plíseň — každý problém má jinou příčinu a jiné řešení. Správná diagnóza je základ. Tady je jak ji udělat a jak trávník obnovit.</p>
              <div className="article-meta-row"><span>Aktualizováno: 22. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/opravit-travnik-ples-mech" title="Jak opravit trávník – plíseň, mech a holá místa 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 185" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="185" fill="#f0f8ec"/>
                {[
                  { x:20, icon:"🟫", problem:"Holá místa", cause:"Suchá půda\nNemoc\nHmyz", fix:"Přesev + zálivka\nFungicid\nInsekticid", color:"#c8904a" },
                  { x:210, icon:"🟢", problem:"Mech", cause:"Kyselá půda\nVlhko a stín\nSlaboučká tráva", fix:"Vápnění pH\nVzdušení půdy\nHnojení N", color:"#5a9e6f" },
                  { x:400, icon:"⬜", problem:"Plíseň trávníku", cause:"Přemokřená půda\nVlhké noci\nZhutnělá půda", fix:"Provzdušnění\nFungicid\nZlepšit drenáž", color:"#9b6fd4" },
                  { x:590, icon:"🟡", problem:"Žluté skvrny", cause:"Nedostatek N\nPřílišné teplo\nMoč od psů", fix:"Dusíkaté hnojivo\nZálivka\nPřesev místa", color:"#f59e0b" },
                ].map(({x, icon, problem, cause, fix, color}) => (
                  <g key={x} transform={`translate(${x}, 15)`}>
                    <rect x="0" y="0" width="163" height="155" rx="8" fill="#fff" stroke={color} strokeWidth="1.2"/>
                    <text x="81" y="36" textAnchor="middle" fontSize="22">{icon}</text>
                    <text x="81" y="54" textAnchor="middle" fontSize="10" fill={color} fontWeight="700">{problem}</text>
                    <line x1="12" y1="60" x2="151" y2="60" stroke={color} strokeWidth="0.5" opacity="0.4"/>
                    <text x="12" y="74" fontSize="8" fill="#6a6050" fontWeight="600">Příčiny:</text>
                    {cause.split('\n').map((line, i) => (
                      <text key={i} x="12" y={86+i*12} fontSize="8" fill="#4a4a40">· {line}</text>
                    ))}
                    <text x="12" y="124" fontSize="8" fill="#3a7e4f" fontWeight="600">Řešení:</text>
                    {fix.split('\n').map((line, i) => (
                      <text key={i} x="12" y={136+i*12} fontSize="8" fill="#3a7e4f">✓ {line}</text>
                    ))}
                  </g>
                ))}
                <rect y="168" width="760" height="17" fill="#d8f0d0" opacity="0.5"/>
                <text x="380" y="180" textAnchor="middle" fontSize="8" fill="#3a7e4f" fontWeight="600" letterSpacing="0.06em">🌿 JARO = IDEÁLNÍ ČAS NA OBNOVU TRÁVNÍKU · DUBEN–KVĚTEN NEJLEPŠÍ TERMÍN</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#diagnoza">Diagnóza – co trápí tvůj trávník</a></li>
                <li><a href="#mech">Mech v trávníku – jak se zbavit</a></li>
                <li><a href="#plisen">Plíseň trávníku</a></li>
                <li><a href="#hola">Holá a žlutá místa</a></li>
                <li><a href="#jarni">Jarní obnova trávníku – postup</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="diagnoza">
              <h2>Diagnóza – co trápí tvůj trávník</h2>
              <p>Než sáhneš po herbicidu nebo fungicidu, zjisti co skutečně trávník trápí. Každý problém má jiné řešení a špatná diagnóza situaci zhorší.</p>
              <ul>
                <li><strong>Zelený polštář (mech):</strong> Mech roste tam kde tráva nemůže — kyselá půda, vlhko, stín nebo zhutnělá půda. Řešení není chemie ale změna podmínek.</li>
                <li><strong>Šedivé nebo bílé pavučiny (plíseň):</strong> Fusariová nebo sněhová plíseň — vzniká za vlhkých nocí a špatné drenáže. Nejčastěji na jaře po roztátí sněhu.</li>
                <li><strong>Žluté nebo hnědé skvrny:</strong> Nedostatek dusíku, přílišné teplo, psí moč nebo choroby trávy. Tvar a umístění skvrny napovídá příčinu.</li>
                <li><strong>Holá místa bez trávy:</strong> Zhutněná půda, krtci, larvy chrousta nebo silné sucho. Tráva nemůže vyrůst bez zásahu.</li>
              </ul>
            </section>

            <section id="mech">
              <h2>Mech v trávníku – jak se zbavit</h2>
              <p>Mech je symptom, ne příčina. Chemické odstranění mechu bez změny podmínek ho přivede zpět do 1–2 sezón.</p>
              <ul>
                <li><strong>Krok 1 — Vápnění:</strong> Mech miluje kyselou půdu (pH pod 5,5). Změř pH půdy testem (50–150 Kč v zahradnictví). Pokud je pod 6, proveď vápnění — 200–400 g/m² zahradního vápna. Opakuj každé 2–3 roky.</li>
                <li><strong>Krok 2 — Provzdušnění:</strong> Zhutnělou půdu provzdušni aerátorem (pronájem 500 Kč/den) nebo vidlemi. Provzdušnění zlepší drenáž a přístup kyslíku ke kořenům.</li>
                <li><strong>Krok 3 — Vyvertikutování:</strong> Vertikutátor vyčeše mech mechanicky. Nejlepší termín: duben nebo srpen. Po vertikutování nastane kritické hnojení a zálivka.</li>
                <li><strong>Krok 4 — Hnojení dusíkem:</strong> Silná hustá tráva je nejlepší ochrana před mechem. Dusíkaté hnojivo (NPK s vyšším N) na jaře podpoří hustý růst.</li>
                <li><strong>Chemická pomoc:</strong> Železitý síran (ferrous sulphate, 30–80 Kč/kg) mech zničí do 2 týdnů. Nanes, počkej až zčerná, vyvertikutuj. Bez změny podmínek se vrátí.</li>
              </ul>
            </section>

            <section id="plisen">
              <h2>Plíseň trávníku</h2>
              <p>Trávníkové plísně (Fusarium, Pythium, Red Thread) se projevují různě — šedivé pavučiny, červenohnědé skvrny nebo kroužky. Nejčastěji se objevují na jaře a na podzim za vlhkého počasí.</p>
              <ul>
                <li><strong>Sněhová plíseň (Fusarium):</strong> Šedivé kruhy nebo skvrny po roztátí sněhu. Řešení: nechej trávník vyschnout, provzdušni, mírně přeseji. Fungicid jen při opakovaném výskytu.</li>
                <li><strong>Red Thread (červené nitky):</strong> Červenohnědé skvrny s červenými nitkami. Příčina: nedostatek dusíku. Řešení: hnojení dusíkatým hnojivem.</li>
                <li><strong>Prevence:</strong> Zaléváš ráno (ne večer), trávník pravidelně vertikutuješ a hnojíš. Přemokřená zhutnělá půda je hlavní příčina plísní.</li>
              </ul>
            </section>

            <section id="hola">
              <h2>Holá a žlutá místa – oprava</h2>
              <ul>
                <li><strong>Po psí moči:</strong> Okamžitě zalij místo velkým množstvím vody (zředění). Po 2 týdnech přesej — psí moč má vysokou koncentraci dusíku která trávu spálí.</li>
                <li><strong>Po suchu:</strong> Zálivka a přesev v srpnu nebo na jaře. Vybrat odolnější směs trávy pro danou lokalitu.</li>
                <li><strong>Po krtcích nebo larvách:</strong> Krtiny uhladit, místo provzdušnit a přesít. Larvy chrousta ošetřit speciálním přípravkem (Entonem nebo podobným biologickým preparátem).</li>
                <li><strong>Postup přesevu holého místa:</strong> Nakypřit půdu 5 cm hluboko, vyrovnat, nanese travní semeno (dvojnásobná dávka oproti standardu), přikrýt tenknou vrstvou zeminy, zálivka 2× denně do vzejití (10–14 dní).</li>
              </ul>
            </section>

            <section id="jarni">
              <h2>Jarní obnova trávníku – postup</h2>
              <p>Duben je ideální čas na kompletní obnovu trávníku po zimě. Správné pořadí prací je důležité.</p>
              <ul>
                <li><strong>1. Vertikutace</strong> (duben, tráva suchá): Vyčeše plst, mech a odumřelou trávu. Hloubka 2–3 mm.</li>
                <li><strong>2. Vápnění</strong> (pokud je pH pod 6): 200–400 g/m² zahradního vápna.</li>
                <li><strong>3. Hnojení</strong>: Jarní trávníkové hnojivo s vyšším obsahem N (dusík pro zelený růst).</li>
                <li><strong>4. Přesev holých míst</strong>: Travní semeno na chybějící místa.</li>
                <li><strong>5. Zálivka</strong>: Vydatná zálivka po celé ploše.</li>
                <li><strong>6. První sečení</strong>: Až tráva doroste na 8–10 cm, sekat na 5–6 cm. Nikdy nekrácej více než 1/3 délky stébla.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Vertikutuj jen za sucha a za mírného počasí. Mokrý trávník po vertikutaci vypadá katastrofálně — to je normální. Za 2–3 týdny se krásně zazelenal.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Kdy je nejlepší čas na opravu trávníku?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Duben a srpen jsou ideální termíny. Duben: tráva začíná růst, podmínky pro klíčení semen jsou ideální. Srpen: stále teplá půda, ale bez letního sucha. Vyvaruj se jarní setby v červnu a červenci — sucho a vedro neumožní vzejití. Říjen je pozdní ale ještě možný termín.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak se zbavit mechu bez chemie?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Mechanicky — vertikutátorem nebo hraběmi vyhrábni mech, vápni půdu (pH nad 6,5), provzdušni aerátorem a hustě přeseji trávníkovou směsí. Hustá silná tráva mech vytlačí přirozeně. Bez změny podmínek (pH, drenáž, světlo) se mech vrátí s chemií i bez ní.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak rychle vyroste nový trávník po přesevu?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Travní semeno vyklíčí za 10–21 dní (závisí na teplotě a druhu trávy). Při teplotě půdy 15–20 °C klíčení nejrychlejší. Po vzejití tráva potřebuje dalších 4–6 týdnů než bude připravena na první sečení. Celkem 6–8 týdnů od setby do prvního sekání.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/opravit-travnik-ples-mech" title="Jak opravit trávník – plíseň, mech a holá místa 2026" />

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
                <li><a href="#diagnoza">Diagnóza problému</a></li>
                <li><a href="#mech">Mech</a></li>
                <li><a href="#plisen">Plíseň</a></li>
                <li><a href="#hola">Holá a žlutá místa</a></li>
                <li><a href="#jarni">Jarní obnova</a></li>
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
        .article-body p{font-size:16px;line-height:1.75;color:#2a2a28;font-weight:300;margin-bottom:14px}
        .article-body ul{padding-left:22px;margin-bottom:16px;display:flex;flex-direction:column;gap:8px}
        .article-body li{font-size:15px;line-height:1.6;color:#2a2a28;font-weight:300}
        .article-body strong{font-weight:600;color:var(--text)}
        .article-tip{background:#fff8e8;border-left:3px solid #f59e0b;border-radius:0 8px 8px 0;padding:14px 18px;font-size:14px;line-height:1.6;color:#78716c;margin:20px 0}
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
