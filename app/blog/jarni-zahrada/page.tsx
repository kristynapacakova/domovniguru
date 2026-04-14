import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak připravit zahradu na jaro – co udělat v dubnu 2026",
  description: "Kompletní jarní checklist pro zahradu. Co prořezat, přihnojit, zasít a zkontrolovat v březnu a dubnu. Zahrada připravená na sezónu za jeden víkend.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jarni-zahrada" },
  openGraph: { title: "Jak připravit zahradu na jaro 2026", description: "Kompletní jarní checklist – co prořezat, přihnojit, zasít a zkontrolovat v dubnu.", url: "https://www.domovniguru.cz/blog/jarni-zahrada", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-14T08:00:00Z", modifiedTime: "2026-04-14T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak připravit zahradu na jaro 2026", description: "Kompletní jarní checklist – co prořezat, přihnojit, zasít a zkontrolovat v dubnu." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/jarni-zahrada#article",
    "headline": "Jak připravit zahradu na jaro – co udělat v dubnu 2026",
    "datePublished": "2026-04-14T08:00:00Z",
    "dateModified": "2026-04-14T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak připravit zahradu na jaro", "jarní zahrada checklist", "zahrada duben", "jarní prořez", "hnojení jaro zahrada", "co dělat na zahradě v dubnu"]
  }]
};

const RELATED = [
  { title: "Jak hnojit zahradu – organicky i minerálně", href: "/blog/jak-hnojit-zahradu", read: "6 min" },
  { title: "Jak správně zalévat zahradu", href: "/blog/jak-spravne-zalevat", read: "4 min" },
  { title: "Jak se zbavit plevele bez chemie", href: "/blog/zbavit-se-plevele-bez-chemie", read: "4 min" },
  { title: "Jak ošetřit dřevěnou terasu před zimou", href: "/blog/drevo-terasa-zima", read: "4 min" },
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
              <span>Příprava zahrady na jaro</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 7 min čtení</span>
              </div>
              <h1 className="article-h1">Jak připravit zahradu na jaro – kompletní checklist</h1>
              <p className="article-lead">Duben je nejdůležitější měsíc zahradní sezóny. Co uděláš teď, sklízíš celé léto. Tady je kompletní checklist co prořezat, přihnojit, zasít a zkontrolovat — ideálně za jeden víkend.</p>
              <div className="article-meta-row"><span>Aktualizováno: 14. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/jarni-zahrada" title="Jak připravit zahradu na jaro – co udělat v dubnu 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 205" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="205" fill="#f0f8ec"/>

                {/* Časová osa — březen, duben, květen */}
                <line x1="40" y1="100" x2="720" y2="100" stroke="#c8d8c0" strokeWidth="2"/>
                {[
                  { x: 40, month: "ÚNOR", color: "#a0b8a0", items: ["Plánování", "Objednávka semen", "Kontrola nástrojů"] },
                  { x: 240, month: "BŘEZEN", color: "#5a9e6f", items: ["Prořez keřů", "Odvětrání záhonů", "První výsevy (skleník)"] },
                  { x: 460, month: "DUBEN ← teď", color: "#3a7e4f", items: ["Hnojení trávníku", "Výsadba sadby", "Čištění záhonů"] },
                  { x: 640, month: "KVĚTEN", color: "#5a9e6f", items: ["Výsev teplomilných", "Mulčování", "Závlaha nastavit"] },
                ].map(({x, month, color, items}) => (
                  <g key={month}>
                    <circle cx={x+40} cy="100" r="10" fill={color} opacity="0.9"/>
                    <text x={x+40} y="85" textAnchor="middle" fontSize="8.5" fill={color} fontWeight="700">{month}</text>
                    {items.map((item, i) => (
                      <text key={i} x={x+40} y={120+i*16} textAnchor="middle" fontSize="8" fill="#4a6a4a">{item}</text>
                    ))}
                  </g>
                ))}

                {/* Rostliny dekorace */}
                {[100, 340, 580].map((x, i) => (
                  <g key={i} transform={`translate(${x}, 155)`}>
                    <path d="M10 30 Q10 10 10 0" stroke="#5a9e6f" strokeWidth="2" fill="none"/>
                    <ellipse cx="10" cy="0" rx="8" ry="5" fill="#5a9e6f" opacity="0.6" transform="rotate(-30,10,0)"/>
                    <ellipse cx="10" cy="8" rx="8" ry="5" fill="#3a7e4f" opacity="0.5" transform="rotate(30,10,8)"/>
                  </g>
                ))}

                <rect y="185" width="760" height="20" fill="#d8f0c8" opacity="0.5"/>
                <text x="380" y="198" textAnchor="middle" fontSize="8" fill="#3a7e4f" fontWeight="600" letterSpacing="0.08em">🌱 DUBEN = NEJDŮLEŽITĚJŠÍ MĚSÍC ZAHRADNÍ SEZÓNY</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#travnik">Trávník – jarní obnova</a></li>
                <li><a href="#zahony">Záhony a záhradní půda</a></li>
                <li><a href="#prořez">Prořez keřů a stromů</a></li>
                <li><a href="#vysev">Výsev a výsadba</a></li>
                <li><a href="#nastroje">Zahradní nástroje a technika</a></li>
                <li><a href="#terasa">Terasa a zahradní nábytek</a></li>
                <li><a href="#checklist">Kompletní checklist</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="travnik">
              <h2>Trávník – jarní obnova po zimě</h2>
              <p>Trávník je po zimě oslabený — mráz, sníh a nedostatek světla ho vyčerpaly. Jarní péče v dubnu nastartuje hustý zelený koberec na celé léto.</p>
              <ul>
                <li><strong>☐ První sečení:</strong> Jakmile tráva dosáhne 8–10 cm, přijde první seč. Nastav sekačku na vyšší výšku (5–6 cm) — příliš krátký první střih oslabí trávník. Sečenou trávu kompostuj.</li>
                <li><strong>☐ Vertikutace:</strong> Speciální vertikutátor nebo vertikutační nástavec na sekačku provzdušní drn a odstraní mech a filc. Ideálně jednou ročně na jaře. Pronájem vertikutátoru 300–600 Kč/den.</li>
                <li><strong>☐ Přísev holých míst:</strong> Zimní výpady (mráz, mech, psí moč) přisej trávníkovým semenem. Přimáčkni semena pěchem nebo prochozením pro dobrý kontakt s půdou.</li>
                <li><strong>☐ Jarní hnojení:</strong> NPK hnojivo s vyšším dusíkem (jarní trávníkové hnojivo), dávka dle návodu. Více v článku <Link href="/blog/jak-hnojit-zahradu" style={{color:"#5a9e6f",fontWeight:600}}>Jak hnojit zahradu →</Link></li>
                <li><strong>☐ Vápnění (pokud je potřeba):</strong> Mech na trávníku = kyselá půda. Test pH a případné vápnění dolomitickým vápencem.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Nešlapej na trávník dokud půda není dostatečně suchá — podmáčená půda se zhutňuje a poškozuje kořeny. Počkej až povrch přestane být mazlavý.</div>
            </section>

            <section id="zahony">
              <h2>Záhony a zahradní půda</h2>
              <ul>
                <li><strong>☐ Odstraň zimní mulč:</strong> Pokud jsi na podzim záhony přikryl mulčem, odstraň ho — nebo ho lehce prokypři do půdy.</li>
                <li><strong>☐ Prokypři půdu:</strong> Vidlicemi nebo kultivátorem prokypři vrchní vrstvu 10–15 cm. Neorý hlouběji — narušíš strukturu půdy a semena plevelů z hloubky.</li>
                <li><strong>☐ Přidej kompost:</strong> 5–8 cm zralého kompostu zapracuj do záhonu. Základ každé zdravé zahrady. Viz <Link href="/blog/jak-kompostovat" style={{color:"#5a9e6f",fontWeight:600}}>Jak kompostovat →</Link></li>
                <li><strong>☐ Zkontroluj pH půdy:</strong> Testovací souprava 50–150 Kč. Většina zeleniny preferuje pH 6–7. Kyselá půda (pod 6) špatně využívá živiny.</li>
                <li><strong>☐ Odstraň zimní plevel:</strong> Dvouletý a vytrvalý plevel probouzí se dřív než zelenina. Odstraň ho dokud je malý — snáze se vytrhává.</li>
              </ul>
            </section>

            <section id="prořez">
              <h2>Prořez keřů a stromů</h2>
              <p>Jaro je ideální čas na prořez většiny keřů a ovocných stromů — před plným rašením nebo těsně při rašení. Po rašení prořez stresuje rostliny.</p>
              <ul>
                <li><strong>Ovocné stromy (jabloně, hrušně, švestky):</strong> Prořezat do konce března — ideálně při teplotách nad 0 °C. Odstraň křížící se větve, suché větve a výhony rostoucí dovnitř koruny.</li>
                <li><strong>Rybízy a angrešt:</strong> Duben je ideální — prořez před plným rašením. Odstraň nejstarší tmavé větve (3+ roky) — podpoříš tvorbu nových plodných výhonů.</li>
                <li><strong>Růže:</strong> Duben je správný čas — zkrátit na 20–30 cm, řez šikmo nad okem mířícím ven. Odstranit suché a poškozené výhony.</li>
                <li><strong>Okrasné keře (forsythie, šeříky):</strong> Forsythii prořezat ihned po odkvětu. Šeřík až po odkvětu — nikdy před.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Řezné plochy ošetři zahradním tmelem nebo přípravkem na rány stromů — zabrání vstupu chorob a škůdců. Zvláště důležité u švestek (monilióza) a jabloní.</div>
            </section>

            <section id="vysev">
              <h2>Výsev a výsadba – co kdy sít</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Plodina</th><th>Výsev / výsadba</th><th>Poznámka</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Mrkev, petržel, pastinák</strong></td><td>Duben (přímý výsev)</td><td>Snáší mírný mráz, sít brzy</td></tr>
                    <tr><td><strong>Hrách, bob</strong></td><td>Konec března – duben</td><td>Studená kultura, odolná</td></tr>
                    <tr><td><strong>Salát, špenát, ředkev</strong></td><td>Duben (přímý výsev)</td><td>Rychlý výsev, sklizeň za 4–6 týdnů</td></tr>
                    <tr><td><strong>Rajčata, papriky (sadba)</strong></td><td>Výsadba po 15. květnu</td><td>Teplomilné — počkej na bez mrazu</td></tr>
                    <tr><td><strong>Okurky, cukety (sadba)</strong></td><td>Výsadba po 15. květnu</td><td>Sít na semenáče nyní (duben)</td></tr>
                    <tr><td><strong>Jahody</strong></td><td>Duben (výsadba)</td><td>Jarní výsadba = plody příští rok</td></tr>
                    <tr><td><strong>Brambory</strong></td><td>Duben–květen</td><td>Půda min. 8 °C, hloubka 10 cm</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Před výsevem namočí semena hrachu a bobu na 12–24 hodin do vlažné vody — klíčení se urychlí o 3–5 dní.</div>
            </section>

            <section id="nastroje">
              <h2>Zahradní nástroje a technika</h2>
              <ul>
                <li><strong>☐ Nabrousit nůžky a nářadí:</strong> Tupé nůžky trhají větve místo řezání — rána se hůře hojí a je náchylnější k chorobám. Brousit pilníkem nebo brousící tyčí.</li>
                <li><strong>☐ Dezinfikovat nářadí:</strong> Přenášení chorob při prořezu je reálné riziko. Otírej řezné plochy nůžek lihem nebo 10% roztokem síranu měďnatého.</li>
                <li><strong>☐ Zkontrolovat sekačku:</strong> Naostřit nůž, zkontrolovat vzduchový filtr a olej. Sekačka která stála celou zimu může mít problém se startováním — zkontroluj palivo a zapalovací svíčku.</li>
                <li><strong>☐ Rozmotej zahradní hadice:</strong> Zkontroluj těsnost spojů a stav hadice. Zimní skladování může způsobit praskliny.</li>
              </ul>
            </section>

            <section id="terasa">
              <h2>Terasa a zahradní nábytek</h2>
              <ul>
                <li><strong>☐ Vynes zahradní nábytek:</strong> Plastový a ratanový nábytek otři vlhkým hadrem. Dřevěný nábytek ošetři teakovým nebo lněným olejem pro ochranu před UV zářením a vlhkostí.</li>
                <li><strong>☐ Zkontroluj terasu:</strong> Dřevěná prkna — prasknutá nebo uvolněná? Betonová dlažba — vymrzlé spáry nebo posunuté dlaždice? Jarní oprava je snazší než letní.</li>
                <li><strong>☐ Vyčisti dlažbu:</strong> Přezimovaří mech a řasy na dlažbě jsou kluzké a nevzhledné. Tlakový čistič nebo roztok jedlé sody a vody.</li>
                <li><strong>☐ Přesaď nádobové rostliny:</strong> Pokud nádobové rostliny přezimovaly uvnitř, přesaď je do čerstvého substrátu a postupně aklimatizuj venku — nejdřív na stín, pak slunce.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Dřevěnou terasu ošetři olejem nebo lazurou každé 1–2 roky. Zanedbaná terasa vyžaduje broušení a kompletní obnovu — mnohem více práce a peněz. Viz <Link href="/blog/drevo-terasa-zima" style={{color:"#5a9e6f",fontWeight:600}}>Jak ošetřit dřevěnou terasu →</Link></div>
            </section>

            <section id="checklist">
              <h2>Kompletní jarní checklist</h2>
              <h3>Trávník</h3>
              <ul>
                <li>☐ První sečení při výšce 8–10 cm</li>
                <li>☐ Vertikutace (provzdušnění drnu)</li>
                <li>☐ Přísev holých míst</li>
                <li>☐ Jarní hnojení NPK</li>
                <li>☐ Vápnění pokud je mech</li>
              </ul>
              <h3>Záhony</h3>
              <ul>
                <li>☐ Odstraň zimní mulč</li>
                <li>☐ Prokypři půdu</li>
                <li>☐ Přidej kompost</li>
                <li>☐ Zkontroluj pH</li>
                <li>☐ Výsev studených plodin (mrkev, hrách, salát)</li>
              </ul>
              <h3>Stromy a keře</h3>
              <ul>
                <li>☐ Prořez ovocných stromů</li>
                <li>☐ Prořez rybízů a angreštu</li>
                <li>☐ Prořez a hnojení růží</li>
                <li>☐ Ošetření ran zahradním tmelem</li>
              </ul>
              <h3>Terasa a nástroje</h3>
              <ul>
                <li>☐ Vynes a ošetři zahradní nábytek</li>
                <li>☐ Zkontroluj a vyčisti terasu</li>
                <li>☐ Nabrousit nářadí</li>
                <li>☐ Zkontrolovat sekačku</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Kdy začít zahradní práce na jaře?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Jakmile teplota půdy překročí 5–8 °C a noční mrazy ustoupí — v ČR typicky konec března až začátek dubna. Půda nesmí být podmáčená. Prořez keřů a stromů lze začít dříve (při teplotách nad 0 °C), výsev studených plodin od dubna.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Co je nejdůležitější udělat na zahradě v dubnu?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Top 3 priority: (1) Přihnojit trávník jarním hnojivem — spustí hustý zelený růst. (2) Prokypřit záhony a přidat kompost — základ celé sezóny. (3) Prořezat ovocné stromy a keře — před plným rašením je poslední šance.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Můžu sít rajčata a papriky v dubnu?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Sít na semenáče ano — do sadbovače nebo truhlíku uvnitř. Výsadba ven je možná až po 15. května kdy nehrozí mráz. Rajčata a papriky jsou teplomilné — jeden mraz je zničí. V dubnu je ideální čas sít je dovnitř a pěstovat sadbu.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak dlouho trvá příprava zahrady na jaro?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Průměrná zahrada (200–400 m²) vyžaduje jeden celý víkend — sobota prořez a záhony, neděle trávník a terasa. Větší zahrada nebo po zanedbání může trvat 2–3 víkendy. Pravidelná péče každý rok zkracuje čas potřebný na jarní přípravu.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/jarni-zahrada" title="Jak připravit zahradu na jaro – co udělat v dubnu 2026" />

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
                <li><a href="#travnik">Trávník</a></li>
                <li><a href="#zahony">Záhony a půda</a></li>
                <li><a href="#prořez">Prořez keřů</a></li>
                <li><a href="#vysev">Výsev a výsadba</a></li>
                <li><a href="#nastroje">Nástroje</a></li>
                <li><a href="#terasa">Terasa a nábytek</a></li>
                <li><a href="#checklist">Kompletní checklist</a></li>
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
