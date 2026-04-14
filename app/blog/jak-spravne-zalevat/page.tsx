import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak správně zalévat zahradu – ráno nebo večer, kolik vody 2026",
  description: "Kdy a jak zalévat zahradu, záhony a trávník. Ráno nebo večer? Kapková závlaha vs. postřikovač. Jak nezalít příliš ani málo – praktický průvodce zálivkou.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-spravne-zalevat" },
  openGraph: { title: "Jak správně zalévat zahradu 2026", description: "Ráno nebo večer? Kapková závlaha vs. postřikovač. Jak nezalít příliš ani málo.", url: "https://www.domovniguru.cz/blog/jak-spravne-zalevat", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-14T08:00:00Z", modifiedTime: "2026-04-14T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak správně zalévat zahradu 2026", description: "Ráno nebo večer? Kapková závlaha vs. postřikovač. Průvodce zálivkou." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/jak-spravne-zalevat#article",
    "headline": "Jak správně zalévat zahradu – ráno nebo večer, kolik vody 2026",
    "datePublished": "2026-04-14T08:00:00Z",
    "dateModified": "2026-04-14T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak správně zalévat zahradu", "kdy zalévat zahradu", "zálivka ráno nebo večer", "kapková závlaha", "kolik vody na záhon", "zalévání zeleniny"]
  }]
};

const RELATED = [
  { title: "Jak připravit zahradu na jaro", href: "/blog/jarni-zahrada", read: "7 min" },
  { title: "Jak hnojit zahradu – organicky i minerálně", href: "/blog/jak-hnojit-zahradu", read: "6 min" },
  { title: "Jak se zbavit plevele bez chemie", href: "/blog/zbavit-se-plevele-bez-chemie", read: "4 min" },
  { title: "Jak kompostovat doma a na zahradě", href: "/blog/jak-kompostovat", read: "4 min" },
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
              <span>Jak správně zalévat</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak správně zalévat zahradu – ráno nebo večer, kolik vody</h1>
              <p className="article-lead">Příliš mnoho vody rostliny dusí, příliš málo je stresuje. Zálivka ve špatný čas podporuje plísně nebo plýtvá vodou výparem. Tady jsou pravidla která fungují pro každou zahradu.</p>
              <div className="article-meta-row"><span>Aktualizováno: 14. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/jak-spravne-zalevat" title="Jak správně zalévat zahradu – ráno nebo večer, kolik vody 2026" />
            </header>

            {/* HERO SVG */}
            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="200" fill="#f0f8fc"/>

                {/* RÁNO — nejlepší */}
                <g transform="translate(20,20)">
                  <rect x="0" y="0" width="210" height="155" rx="8" fill="#f0fdf4" stroke="#86efac" strokeWidth="1.2"/>
                  <text x="105" y="20" textAnchor="middle" fontSize="9" fill="#16a34a" fontWeight="700">✅ RÁNO (6–9 hod) — IDEÁLNÍ</text>
                  {/* Slunce vycházející */}
                  <circle cx="105" cy="65" r="20" fill="#fbbf24" opacity="0.8"/>
                  {[0,45,90,135,180,225,270,315].map((deg,i) => {
                    const r = Math.PI * deg / 180;
                    return <line key={i} x1={105+25*Math.cos(r)} y1={65+25*Math.sin(r)} x2={105+32*Math.cos(r)} y2={65+32*Math.sin(r)} stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"/>;
                  })}
                  {/* Kapky */}
                  {[60,85,110,135].map((x,i) => (
                    <ellipse key={i} cx={x} cy={100+i*2} rx="3" ry="5" fill="#60a5fa" opacity="0.7"/>
                  ))}
                  <text x="105" y="125" textAnchor="middle" fontSize="8.5" fill="#16a34a" fontWeight="600">Voda se vstřebá</text>
                  <text x="105" y="138" textAnchor="middle" fontSize="8" fill="#4ade80">listy schnou přes den</text>
                  <text x="105" y="150" textAnchor="middle" fontSize="8" fill="#4ade80">nízký výpar</text>
                </g>

                {/* POLEDNE — špatné */}
                <g transform="translate(250,20)">
                  <rect x="0" y="0" width="210" height="155" rx="8" fill="#fef9f0" stroke="#fcd34d" strokeWidth="1.2"/>
                  <text x="105" y="20" textAnchor="middle" fontSize="9" fill="#d97706" fontWeight="700">⚠️ POLEDNE — NEVHODNÉ</text>
                  <circle cx="105" cy="60" r="25" fill="#f59e0b" opacity="0.9"/>
                  {[0,45,90,135,180,225,270,315].map((deg,i) => {
                    const r = Math.PI * deg / 180;
                    return <line key={i} x1={105+30*Math.cos(r)} y1={60+30*Math.sin(r)} x2={105+40*Math.cos(r)} y2={60+40*Math.sin(r)} stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round"/>;
                  })}
                  {/* Výpar šipky */}
                  {[75,100,130].map((x,i) => (
                    <path key={i} d={`M${x} 100 Q${x+5} 90 ${x} 80`} stroke="#f59e0b" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  ))}
                  <text x="105" y="125" textAnchor="middle" fontSize="8.5" fill="#d97706" fontWeight="600">50 % vody se vypaří</text>
                  <text x="105" y="138" textAnchor="middle" fontSize="8" fill="#f59e0b">kapky = spálení listů</text>
                  <text x="105" y="150" textAnchor="middle" fontSize="8" fill="#f59e0b">neefektivní</text>
                </g>

                {/* VEČER — ok ale pozor */}
                <g transform="translate(480,20)">
                  <rect x="0" y="0" width="260" height="155" rx="8" fill="#f5f0ff" stroke="#c4b5fd" strokeWidth="1.2"/>
                  <text x="130" y="20" textAnchor="middle" fontSize="9" fill="#7c3aed" fontWeight="700">🌙 VEČER — PŘIJATELNÉ</text>
                  <circle cx="130" cy="62" r="18" fill="#818cf8" opacity="0.6"/>
                  <circle cx="148" cy="55" r="10" fill="#f0f8fc" opacity="0.9"/>
                  {/* Kapky + plíseň */}
                  {[90,115,140,165].map((x,i) => (
                    <ellipse key={i} cx={x} cy={100+i} rx="3" ry="5" fill="#60a5fa" opacity="0.6"/>
                  ))}
                  <text x="130" y="122" textAnchor="middle" fontSize="8.5" fill="#7c3aed" fontWeight="600">Voda se vstřebá</text>
                  <text x="130" y="135" textAnchor="middle" fontSize="8" fill="#a78bfa">ale listy zůstanou mokré</text>
                  <text x="130" y="148" textAnchor="middle" fontSize="8" fill="#a78bfa">riziko plísní přes noc</text>
                </g>

                <rect y="182" width="760" height="18" fill="#e0f2fe" opacity="0.5"/>
                <text x="380" y="194" textAnchor="middle" fontSize="8" fill="#0369a1" fontWeight="600" letterSpacing="0.08em">💧 PRAVIDLO: MÉNĚ ČASTEJI = ŠPATNĚ · VÍCE MÉNĚ ČASTO = SPRÁVNĚ · RÁNO = IDEÁLNÍ</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#kdy">Kdy zalévat – ráno, večer nebo přes den</a></li>
                <li><a href="#kolik">Kolik vody potřebují rostliny</a></li>
                <li><a href="#zelenina">Zalévání zeleniny</a></li>
                <li><a href="#travnik">Zalévání trávníku</a></li>
                <li><a href="#nadoby">Zalévání nádobových rostlin</a></li>
                <li><a href="#systemy">Závlahové systémy</a></li>
                <li><a href="#chyby">Nejčastější chyby</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="kdy">
              <h2>Kdy zalévat – ráno, večer nebo přes den</h2>
              <p><strong>Ráno mezi 6–9 hodinou je ideální čas</strong> pro zálivku. Voda se vstřebá do půdy a kořenů ještě než se zahřeje vzduch. Listy mají celý den na vyschnutí — riziko plísní je minimální. Výpar je nízký — voda jde tam kde má.</p>
              <p>Zálivka v poledne a odpoledne při plném slunci je nejhorší volba. Až 50 % vody se vypaří dříve než se dostane ke kořenům. Kapky vody na listech fungují jako čočky a způsobují spálení.</p>
              <p>Večerní zálivka je přijatelná — voda se nevypaří a kořeny ji dobře vstřebají. Problém je že listy zůstávají mokré přes noc, což podporuje plísňové choroby. Pro zeleninu náchylnou k plísním (rajčata, okurky) je večerní zálivka riziková.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Kapková závlaha nebo zálivka přímo k zemi (ne na listy) eliminuje riziko plísní i při večerní zálivce — voda jde přímo ke kořenům a listy zůstávají suché.</div>
            </section>

            <section id="kolik">
              <h2>Kolik vody potřebují rostliny</h2>
              <p>Základní pravidlo: <strong>zalévat méně často ale více</strong>. Mělká každodenní zálivka způsobuje povrchové kořenění — rostliny jsou pak náchylnější k suchu. Hluboká zálivka 2–3× týdně podporuje hluboké kořeny odolné vůči suchu.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ rostliny / plochy</th><th>Množství vody</th><th>Frekvence</th><th>Poznámka</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Trávník</strong></td><td>20–30 l/m²</td><td>1–2× týdně</td><td>Raději méně časteji, hlouběji</td></tr>
                    <tr><td><strong>Zelenina (záhon)</strong></td><td>10–15 l/m²</td><td>2–3× týdně</td><td>Závisí na teplotě a slunci</td></tr>
                    <tr><td><strong>Rajčata, okurky</strong></td><td>2–3 l/rostlinu</td><td>Denně při vedru</td><td>Pravidelnost klíčová</td></tr>
                    <tr><td><strong>Ovocné stromy</strong></td><td>30–50 l/strom</td><td>1× týdně</td><td>Hluboká zálivka ke kořenům</td></tr>
                    <tr><td><strong>Nádobové rostliny</strong></td><td>Do odtoku</td><td>Denně v létě</td><td>Zkontroluj vlhkost prstem</td></tr>
                    <tr><td><strong>Nově vysazené rostliny</strong></td><td>Hojně</td><td>Denně prvních 2–4 týdnů</td><td>Dokud se nezakoření</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Jednoduchý test vlhkosti půdy — zaboř prst 5 cm do půdy. Pokud je půda vlhká — nezalévej. Pokud suchá — čas na zálivku. Lepší než jakýkoli harmonogram.</div>
            </section>

            <section id="zelenina">
              <h2>Zalévání zeleniny – co potřebuje co</h2>
              <ul>
                <li><strong>Rajčata:</strong> Nejnáchylnější na nepravidelnou zálivku. Střídání sucha a přelití způsobuje praskání plodů a hnědnutí dna (nedostatek vápníku při nerovnoměrném příjmu vody). Zalévat pravidelně, přímo ke kořenům, ne na listy.</li>
                <li><strong>Okurky a cukety:</strong> Milují vodu ale nesnášejí mokré listy — plísně jsou největší problém. Kapková závlaha nebo zálivka u kořene ráno.</li>
                <li><strong>Kořenová zelenina (mrkev, petržel):</strong> Hluboká nepravidelná zálivka — podporuje růst kořenů do hloubky. Příliš časté mělké zálivky způsobují větvení kořenů.</li>
                <li><strong>Salát a špenát:</strong> Potřebují rovnoměrnou vlhkost. Sucho způsobí přechod do semene (bolting). Mulčování udržuje vlhkost a snižuje frekvenci zálivky.</li>
                <li><strong>Česnek a cibule:</strong> Méně vody než ostatní zelenina. V červnu před sklizní přestaň zalévat úplně — cibule musí dozrát v suchu.</li>
              </ul>
            </section>

            <section id="travnik">
              <h2>Zalévání trávníku</h2>
              <p>Trávník je nejodolnější část zahrady — zhnědnutý trávník v suchu nevypadá hezky, ale není mrtvý. Ozelená se při prvním dešti. Nepřelévej trávník ze strachu — přelití podporuje povrchové kořenění a plísně.</p>
              <ul>
                <li><strong>Jak poznat že trávník potřebuje vodu:</strong> Šlápnutí zanechá otisk — tráva se nevrací. Nebo trávník začíná šednout a stáčet listy.</li>
                <li><strong>Hloubka zálivky:</strong> Cíl je promočit půdu do hloubky 15–20 cm. Krátký déšť nebo krátká zálivka trávník jen "oblíbí" — voda se nevstřebá ke kořenům.</li>
                <li><strong>Postřikovač vs. hadice:</strong> Postřikovač je efektivnější — rovnoměrné pokrytí. Zálivka hadicí je nerovnoměrná a zdlouhavá pro větší plochy.</li>
                <li><strong>Nový trávník:</strong> Prvních 4–6 týdnů po výsevu zálivka denně — semena nesmí vyschnout. Pak postupně přejdi na hlubší méně časté zálivky.</li>
              </ul>
            </section>

            <section id="nadoby">
              <h2>Zalévání nádobových rostlin</h2>
              <p>Nádobové rostliny jsou nejnáchylnější na nesprávnou zálivku — nádoba nemá zásobník jako zahrada a přeschnout nebo přelít je snadné.</p>
              <ul>
                <li><strong>Test prstem:</strong> Zaboř prst 2–3 cm do substrátu. Vlhký = nezalévej. Suchý = čas na zálivku. Platí pro většinu rostlin.</li>
                <li><strong>Zalévej důkladně:</strong> Lij vodu dokud nezačne vytékat odtokovým otvorem. Mělká zálivka promočí jen vrchní vrstvu substrátu — kořeny v hloubce zůstanou suché.</li>
                <li><strong>Přebytečnou vodu vylit:</strong> Miska pod nádobou nesmí být trvale plná vody — kořeny by hnily. Vylit přebytek 30 minut po zálivce.</li>
                <li><strong>Letní vedro:</strong> V horkých dnech zálivka denně ráno. Velké nádoby drží vlhkost déle než malé — přizpůsob frekvenci velikosti nádoby.</li>
              </ul>
            </section>

            <section id="systemy">
              <h2>Závlahové systémy – kdy se vyplatí</h2>
              <ul>
                <li><strong>Kapková závlaha:</strong> Nejúčinnější systém — voda jde přímo ke kořenům, listy zůstávají suché. Ideální pro zeleninu a záhony. Sada pro záhon 10 m² stojí 500–1 500 Kč. Napojení na časovač = automatická zálivka.</li>
                <li><strong>Postřikovač s časovačem:</strong> Vhodný pro trávník. Nastavíš jednou, funguje sám. Nevhodný pro zeleninu — mokré listy = plísně.</li>
                <li><strong>Zálivkový časovač:</strong> Ventil na kohoutek s hodinami. Cena 300–800 Kč. Nastavíš čas a délku zálivky — zálivka proběhne i když jsi pryč.</li>
                <li><strong>Terracotta zálivkové hroty:</strong> Nalijí vodu pomalu přímo ke kořenům. Ideální pro nádobové rostliny při dovolené. Stojí 50–150 Kč/kus.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Mulčování záhonů (kůra, kompost, sláma, 5–8 cm vrstva) snižuje výpar půdy o 50–70 %. Mulčovaný záhon potřebuje zálivku 2× méně často než nemulčovaný. Nejjednodušší způsob jak ušetřit vodu a práci.</div>
            </section>

            <section id="chyby">
              <h2>Nejčastější chyby při zalévání</h2>
              <ul>
                <li><strong>Zálivka na listy v polední horko:</strong> Kapky jako čočky způsobují spálení. Vždy zalévat ke kořenům nebo ráno.</li>
                <li><strong>Každodenní mělká zálivka:</strong> Způsobuje povrchové kořenění. Rostliny jsou pak náchylnější k suchu. Raději hlouběji a méně časteji.</li>
                <li><strong>Zalévání podle harmonogramu místo potřeby:</strong> Zálivka v den deště nebo při studených teplotách kdy rostliny nepotřebují. Vždy zkontroluj vlhkost půdy.</li>
                <li><strong>Přelití nádobových rostlin:</strong> Nejčastější příčina úhynu pokojových rostlin. Žloutnutí a opadávání listů = přelití, ne sucho.</li>
                <li><strong>Studená voda z kohoutku přímo na rajčata:</strong> Teplotní šok způsobuje stres. Ideálně dešťová voda nebo voda která stála v sudu a ohřála se na sluníčku.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Je lepší zalévat ráno nebo večer?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ráno je jednoznačně lepší. Voda se vstřebá ke kořenům, listy schnou přes den (nižší riziko plísní) a výpar je nižší než v polední horko. Večerní zálivka je přijatelná ale listy zůstávají mokré přes noc — riziko plísní je vyšší zvláště u rajčat a okurek.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak poznám že zalévám příliš nebo málo?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Příliš málo: listy se svinují, žloutnou nebo vadnou i po zálivce, půda je suchá v hloubce. Příliš mnoho: listy žloutnou a opadávají, půda je trvale mokrá, kořeny zapáchají (hnijí). Test prstem v půdě je nejspolehlivější — vlhká = nezalévej, suchá = čas na zálivku.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak zalévat zahradu při dovolené?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Nejlepší řešení: zálivkový časovač na kohoutek (300–800 Kč) + kapková závlaha pro záhony. Pro nádoby: terracotta hroty nebo velké misky s vodou. Alternativa: požádej souseda nebo přítele. Zásadně nemulčuj záhony před odjezdem — mulč udrží vlhkost déle.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Proč mám na rajčatech hnědé dno plodů?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Hnědnutí dna rajčat (blossom end rot) způsobuje nedostatek vápníku při nerovnoměrném příjmu vody — střídání sucha a přelití. Řešení: pravidelná zálivka, mulčování pro udržení vlhkosti a případně postřik s vápenatou vodou na listy.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/jak-spravne-zalevat" title="Jak správně zalévat zahradu – ráno nebo večer, kolik vody 2026" />

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
                <li><a href="#kdy">Kdy zalévat</a></li>
                <li><a href="#kolik">Kolik vody</a></li>
                <li><a href="#zelenina">Zelenina</a></li>
                <li><a href="#travnik">Trávník</a></li>
                <li><a href="#nadoby">Nádobové rostliny</a></li>
                <li><a href="#systemy">Závlahové systémy</a></li>
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
