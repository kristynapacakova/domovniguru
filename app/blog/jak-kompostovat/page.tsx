import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak správně kompostovat 2026: Průvodce od založení po černé zlato na zahradě",
  description: "Poměr C:N, co patří a nepatří do kompostu, typy kompostérů a jak zrychlit zrání. Kompletní průvodce kompostováním pro zahradu i byt.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-kompostovat" },
  openGraph: { title: "Jak správně kompostovat 2026: Průvodce od založení po černé zlato", description: "Poměr C:N, co do kompostu patří, typy kompostérů. Praktický průvodce kompostováním.", url: "https://www.domovniguru.cz/blog/jak-kompostovat", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-03-01T08:00:00Z", modifiedTime: "2026-04-14T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak správně kompostovat 2026", description: "Poměr C:N, co patří do kompostu, typy kompostérů." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/jak-kompostovat#article", "headline": "Jak správně kompostovat 2026: Průvodce od založení po černé zlato na zahradě", "datePublished": "2026-03-01T08:00:00Z", "dateModified": "2026-04-14T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["jak kompostovat", "domaci kompostovani", "kuchynsky kompost", "pomer cn kompost", "kompostovac typy", "vermikompostovani"] }] };

const RELATED = [
  { title: "Jak připravit zahradu na jaro – kompletní checklist", href: "/blog/jarni-zahrada", read: "7 min" },
  { title: "Jak se zbavit plevele bez chemie", href: "/blog/zbavit-se-plevele-bez-chemie", read: "4 min" },
  { title: "Jak správně zalévat zahradu", href: "/blog/jak-spravne-zalevat", read: "5 min" },
  { title: "Jak hnojit zahradu – organicky i minerálně", href: "/blog/jak-hnojit-zahradu", read: "6 min" },
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
              <span>Jak kompostovat</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 9 min čtení</span>
              </div>
              <h1 className="article-h1">Jak správně kompostovat: Průvodce od založení po černé zlato na zahradě</h1>
              <p className="article-lead">Kompost je nejlepší a nejlevnější hnojivo které můžeš své zahradě dát. Ale špatně vedený kompost smrdí, nehnije a přitahuje škůdce. Tenhle průvodce ti ukáže jak to dělat správně — od prvního listí po zralý kompost za 3–6 měsíců.</p>
              <div className="article-meta-row"><span>Aktualizováno: 14. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/jak-kompostovat" title="Jak správně kompostovat 2026: Průvodce od založení po černé zlato na zahradě" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 210" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="210" fill="#f4f8f0"/>
                <defs>
                  <linearGradient id="kompBg" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox"><stop offset="0%" stopColor="#eef8e8"/><stop offset="100%" stopColor="#f4f8f0"/></linearGradient>
                  <linearGradient id="kompHneda" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox"><stop offset="0%" stopColor="#8B5E3C"/><stop offset="100%" stopColor="#6b4020"/></linearGradient>
                  <linearGradient id="kompZelena" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox"><stop offset="0%" stopColor="#5aaa30"/><stop offset="100%" stopColor="#3a8010"/></linearGradient>
                  <linearGradient id="kompZraly" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox"><stop offset="0%" stopColor="#4a2a10"/><stop offset="100%" stopColor="#2a1008"/></linearGradient>
                </defs>
                <rect width="760" height="210" fill="url(#kompBg)"/>
                <g transform="translate(160, 15)">
                  <rect x="0" y="0" width="200" height="175" rx="4" fill="none" stroke="#8B6340" strokeWidth="3"/>
                  {[0,18,36,54,72,90,108,126,144,162].map((y,i)=>(<rect key={i} x="0" y={y} width="200" height="6" rx="1" fill="#a07050" opacity="0.3"/>))}
                  {[20,45,70,95,120,145].map((y,i)=>(<rect key={i} x="3" y={y} width="8" height="12" rx="2" fill="#b8d0a0" opacity="0.5"/>))}
                  {[20,45,70,95,120,145].map((y,i)=>(<rect key={i} x="189" y={y} width="8" height="12" rx="2" fill="#b8d0a0" opacity="0.5"/>))}
                  <rect x="3" y="135" width="194" height="40" fill="url(#kompZraly)" opacity="0.9"/>
                  {[20,45,70,95,120,145,170].map((x,i)=>(<ellipse key={i} cx={x} cy={148+Math.sin(i)*4} rx={5+Math.cos(i)*2} ry="3" fill="#2a1008" opacity="0.3"/>))}
                  <text x="100" y="152" textAnchor="middle" fontSize="8" fill="#c8a870" fontWeight="600">Zralý kompost ✓</text>
                  <text x="100" y="162" textAnchor="middle" fontSize="7" fill="#a08050">za 3–6 měsíců</text>
                  <rect x="3" y="88" width="194" height="48" fill="url(#kompHneda)" opacity="0.7"/>
                  {[15,35,55,75,95,115,135,155,175].map((x,i)=>(<path key={i} d={`M${x} ${95+i%3*4} Q${x+8} ${88+i%2*6} ${x+15} ${98+i%3*3}`} stroke="#c8a060" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7"/>))}
                  <text x="100" y="110" textAnchor="middle" fontSize="8" fill="#f0d080" fontWeight="700">HNEDÁ vrstva (C)</text>
                  <text x="100" y="122" textAnchor="middle" fontSize="7" fill="#d4b060">sláma, listí, karton</text>
                  <rect x="3" y="42" width="194" height="47" fill="url(#kompZelena)" opacity="0.75"/>
                  {[20,50,80,110,140,170].map((x,i)=>(<path key={i} d={`M${x} 65 Q${x+5} 50 ${x+10} 65`} stroke="#80dd40" strokeWidth="2" fill="none" strokeLinecap="round"/>))}
                  <text x="100" y="58" textAnchor="middle" fontSize="8" fill="#c0f060" fontWeight="700">ZELENÁ vrstva (N)</text>
                  <text x="100" y="70" textAnchor="middle" fontSize="7" fill="#a0e040">tráva, kuchyňský odpad</text>
                  <rect x="3" y="3" width="194" height="40" fill="#8aaa50" opacity="0.4"/>
                  <text x="100" y="18" textAnchor="middle" fontSize="8" fill="#4a7a20" fontWeight="600">Čerstvý přídavek</text>
                  {[[40,100],[120,125],[80,145],[160,108]].map(([x,y],i)=>(<path key={i} d={`M${x} ${y} Q${x+8} ${y-5} ${x+5} ${y+8} Q${x-2} ${y+15} ${x+6} ${y+20}`} stroke="#d08060" strokeWidth="2" fill="none" strokeLinecap="round"/>))}
                </g>
                <g transform="translate(18, 30)">
                  <rect x="0" y="0" width="125" height="48" rx="8" fill="#e8f4e0" stroke="#90c070" strokeWidth="1"/>
                  <text x="62" y="16" textAnchor="middle" fontSize="11">💨</text>
                  <text x="62" y="30" textAnchor="middle" fontSize="8" fill="#3a6a20" fontWeight="700">Vzduch</text>
                  <text x="62" y="41" textAnchor="middle" fontSize="7" fill="#5a8a40">Promíchávat 1× týdně</text>
                  <rect x="0" y="58" width="125" height="48" rx="8" fill="#e0f0f8" stroke="#70a0c0" strokeWidth="1"/>
                  <text x="62" y="74" textAnchor="middle" fontSize="11">💧</text>
                  <text x="62" y="88" textAnchor="middle" fontSize="8" fill="#2a5a8a" fontWeight="700">Vlhkost</text>
                  <text x="62" y="99" textAnchor="middle" fontSize="7" fill="#4a7aaa">Jako vyždímaná houba</text>
                  <rect x="0" y="116" width="125" height="48" rx="8" fill="#fff8e0" stroke="#c0a040" strokeWidth="1"/>
                  <text x="62" y="132" textAnchor="middle" fontSize="11">⚖️</text>
                  <text x="62" y="146" textAnchor="middle" fontSize="8" fill="#8a6010" fontWeight="700">Poměr C:N</text>
                  <text x="62" y="157" textAnchor="middle" fontSize="7" fill="#a08020">3 hnědé : 1 zelená</text>
                </g>
                <g transform="translate(390, 30)">
                  <rect x="0" y="0" width="155" height="52" rx="8" fill="#d8f0c8" stroke="#70b050" strokeWidth="1"/>
                  <text x="78" y="16" textAnchor="middle" fontSize="9" fill="#2a6a10" fontWeight="700">🟢 ZELENÁ (N – dusík)</text>
                  <text x="78" y="29" textAnchor="middle" fontSize="7" fill="#3a8020">Tráva, zelenina, kávová sedlina</text>
                  <text x="78" y="40" textAnchor="middle" fontSize="7" fill="#3a8020">Ovocné slupky, čerstvé bylinky</text>
                  <rect x="0" y="62" width="155" height="52" rx="8" fill="#f0e0c8" stroke="#b08040" strokeWidth="1"/>
                  <text x="78" y="78" textAnchor="middle" fontSize="9" fill="#6a3a10" fontWeight="700">🟫 HNĚDÁ (C – uhlík)</text>
                  <text x="78" y="91" textAnchor="middle" fontSize="7" fill="#8a5020">Suchá tráva, listí, karton</text>
                  <text x="78" y="102" textAnchor="middle" fontSize="7" fill="#8a5020">Sláma, papír, větve (drcené)</text>
                  <rect x="0" y="124" width="155" height="48" rx="8" fill="#f8f0e8" stroke="#c0a080" strokeWidth="1"/>
                  <text x="78" y="140" textAnchor="middle" fontSize="11">🪱</text>
                  <text x="78" y="154" textAnchor="middle" fontSize="8" fill="#6a4020" fontWeight="700">Žížaly = urychlovač</text>
                  <text x="78" y="164" textAnchor="middle" fontSize="7" fill="#8a6040">Přirozeně přicházejí samy</text>
                </g>
                <rect y="190" width="760" height="20" fill="#d0e8c0" opacity="0.7"/>
                <text x="95" y="203" textAnchor="middle" fontSize="8" fill="#3a6a20" fontWeight="600" letterSpacing="0.04em">🟫 HNĚDÁ: UHLÍK (3 díly)</text>
                <text x="285" y="203" textAnchor="middle" fontSize="8" fill="#3a6a20" fontWeight="600" letterSpacing="0.04em">🟢 ZELENÁ: DUSÍK (1 díl)</text>
                <text x="475" y="203" textAnchor="middle" fontSize="8" fill="#3a6a20" fontWeight="600" letterSpacing="0.04em">💧 VLHKOST A VZDUCH</text>
                <text x="655" y="203" textAnchor="middle" fontSize="8" fill="#3a6a20" fontWeight="600" letterSpacing="0.04em">🪱 ŽÍŽALY = PŘIJDOU SAMY</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#jak-funguje">Jak kompostování funguje</a></li>
                <li><a href="#co-patri">Co patří a nepatří do kompostu</a></li>
                <li><a href="#pomer-cn">Poměr C:N – jak míchat správně</a></li>
                <li><a href="#typy">Typy kompostérů – srovnání</a></li>
                <li><a href="#zalozeni">Jak kompostér správně založit</a></li>
                <li><a href="#problemy">Problémy a jak je řešit</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="jak-funguje">
              <h2>Jak kompostování funguje – věda za hromadou</h2>
              <p>Kompostování je řízený rozklad organické hmoty mikroorganismy, žížalami a houbami za přítomnosti vzduchu a vlhkosti. Výsledkem je humus — nejbohatší půdní materiál s obsahem živin, mikroorganismů a organické hmoty.</p>
              <p>Proces probíhá ve dvou fázích. <strong>Horká fáze</strong> (první 2–4 týdny) — mikroorganismy rozkládají snadno dostupné látky, kompost se zahřeje na 50–70 °C. Tato teplota ničí semena plevele a patogeny. <strong>Studená fáze</strong> (zbývající měsíce) — pomalejší rozklad tvrdších materiálů, žížaly zpracovávají zbytky, humus zraje.</p>
              <ul>
                <li><strong>Mikroorganismy</strong> jsou hlavní pracovníci — potřebují vzduch (aerobní rozklad), vlhkost (50–60 % obsahu vody) a správný poměr uhlíku a dusíku.</li>
                <li><strong>Žížaly</strong> přicházejí samy jakmile je kompost dostatečně zralý — urychlují rozklad a jejich trus (vermikompost) je nejkvalitnější složkou hotového kompostu.</li>
                <li><strong>Bez vzduchu</strong> kompost negnijí aerobně ale anaerobně — vzniká zápach, tekutina a methangas. Pravidelné promíchávání je proto zásadní.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Správně vedený kompost vůbec nesmrdí — smrdí jen vlhká hromada bez přístupu vzduchu nebo s přebytkem dusíkatého materiálu. Pokud tvůj kompost páchne, čti sekci o problémech níže.</div>
            </section>

            <section id="co-patri">
              <h2>Co patří a nepatří do kompostu</h2>
              <p>Nesprávné materiály v kompostu způsobují zápach, přitahují škůdce a hlodavce, nebo brání správnému rozkladu.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Materiál</th><th>Patří?</th><th>Typ (C/N)</th><th>Poznámka</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Zbytky zeleniny a ovoce</strong></td><td>✅ Ano</td><td>Zelený (N)</td><td>Ideální základ. Malé kousky se rozkládají rychleji.</td></tr>
                    <tr><td><strong>Zkosená tráva</strong></td><td>✅ Ano (s mírou)</td><td>Zelený (N)</td><td>Nepřidávej silnou vrstvou — hnilobí. Míchat s hnědým.</td></tr>
                    <tr><td><strong>Suché listí</strong></td><td>✅ Ano</td><td>Hnědý (C)</td><td>Výborný uhlíkový materiál. Rozdrtit pro rychlejší rozklad.</td></tr>
                    <tr><td><strong>Karton a papír (nenatisknutý)</strong></td><td>✅ Ano</td><td>Hnědý (C)</td><td>Roztrhat na kousky, navlhčit. Potahovaný papír ne.</td></tr>
                    <tr><td><strong>Kávová sedlina a čajové sáčky</strong></td><td>✅ Ano</td><td>Zelený (N)</td><td>Výborný urychlovač. Sáčky jen přírodní (bez plastu).</td></tr>
                    <tr><td><strong>Vaječné skořápky</strong></td><td>✅ Ano</td><td>Neutrální</td><td>Dodávají vápník, zlepšují pH. Pomalu se rozkládají.</td></tr>
                    <tr><td><strong>Větve a dřevo</strong></td><td>✅ Ano (nadrcené)</td><td>Hnědý (C)</td><td>Větve nad 2 cm nadrť nebo naštípej — jinak se rozkládají roky.</td></tr>
                    <tr><td><strong>Maso, ryby, kosti</strong></td><td>❌ Ne</td><td>—</td><td>Přitahují hlodavce, páchnou. Do domácího kompostu nepatří.</td></tr>
                    <tr><td><strong>Mléčné výrobky</strong></td><td>❌ Ne</td><td>—</td><td>Stejné důvody jako maso — zápach a hlodavci.</td></tr>
                    <tr><td><strong>Plevel s dozrálými semeny</strong></td><td>❌ Ne</td><td>—</td><td>Semena přežijí kompostování a rozšíří se po zahradě.</td></tr>
                    <tr><td><strong>Nemocné rostliny</strong></td><td>❌ Ne</td><td>—</td><td>Patogeny mohou přežít a infikovat zahradu.</td></tr>
                    <tr><td><strong>Plasty, sklo, kovy</strong></td><td>❌ Ne</td><td>—</td><td>Nerozložitelné, kontaminují kompost.</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="pomer-cn">
              <h2>Poměr C:N – tajemství kompostu který nesmrdí</h2>
              <p>Poměr uhlíku (C) a dusíku (N) je nejdůležitější parametr správného kompostování. Ideální poměr je přibližně <strong>25–30 dílů uhlíku na 1 díl dusíku</strong>. V praxi stačí jednoduché pravidlo:</p>
              <ul>
                <li><strong>✅ Zlaté pravidlo: 3 díly hnědého na 1 díl zeleného (objemově).</strong> Hnědý = suché listí, sláma, karton, větve. Zelený = čerstvá tráva, kuchyňský odpad, zelenina.</li>
                <li><strong>✅ Příliš mnoho zeleného = smrad.</strong> Přebytek dusíku způsobuje anaerobní rozklad. Přidej hnědý materiál a promíchej.</li>
                <li><strong>✅ Příliš mnoho hnědého = pomalý rozklad.</strong> Přebytek uhlíku zpomaluje mikroorganismy. Přidej zelený materiál a zalij.</li>
                <li><strong>✅ Vlhkost jako vyždímaná houba</strong> — 50–60 %. Suchý = příliš hnědý. Tekoucí = příliš vlhký, přidej hnědý materiál.</li>
                <li><strong>✅ Vzduch 1× týdně</strong> — promíchej vidlemi. Bez vzduchu = anaerobní rozklad = smrad.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Nemáš dost hnědého materiálu? Roztrhaný karton od balíčků, novinový papír nebo suchá sláma jsou levná náhrada. Karton navíc nasává přebytečnou vlhkost.</div>
            </section>

            <section id="typy">
              <h2>Typy kompostérů – srovnání pro zahradu i byt</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ kompostéru</th><th>Cena</th><th>Vhodný pro</th><th>Výhody</th><th>Nevýhody</th><th>Doba zrání</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Plastový kompostér</strong></td><td>500–1 500 Kč</td><td>Zahrada</td><td>Levný, udržuje vlhkost</td><td>Špatná cirkulace vzduchu</td><td>4–8 měsíců</td></tr>
                    <tr><td><strong>Dřevěný (palety)</strong></td><td>0–800 Kč (DIY)</td><td>Větší zahrada</td><td>Přirozené větrání, velká kapacita</td><td>Dřevo se rozkládá</td><td>3–6 měsíců</td></tr>
                    <tr><td><strong>Dvoukomorový</strong></td><td>1 500–4 000 Kč</td><td>Rodiny</td><td>Kontinuální proces — jedna zraje, druhá se plní</td><td>Vyšší cena</td><td>2–4 měsíce</td></tr>
                    <tr><td><strong>Vermikompostér (červí)</strong></td><td>800–3 000 Kč</td><td>Byt, malá zahrada</td><td>Do bytu, bez zápachu, nejkvalitnější kompost</td><td>Menší kapacita, péče o červy</td><td>2–3 měsíce</td></tr>
                    <tr><td><strong>Bokashi (fermentace)</strong></td><td>500–1 500 Kč</td><td>Byt</td><td>Přijímá i maso a mléčné výrobky</td><td>Potřebuje bokashi prášek, výsledek zakopat</td><td>2–4 týdny</td></tr>
                    <tr><td><strong>Otevřená hromada</strong></td><td>Zdarma</td><td>Velká zahrada</td><td>Zdarma, neomezená velikost</td><td>Přitahuje zvířata</td><td>6–18 měsíců</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="zalozeni">
              <h2>Jak kompostér správně založit krok za krokem</h2>
              <ul>
                <li><strong>Krok 1 – Výběr místa:</strong> Polostín, přímo na zem (ne beton) — kontakt s půdou umožňuje příchod žížal.</li>
                <li><strong>Krok 2 – Drenážní vrstva:</strong> Spodní vrstva z hrubšího materiálu (větve, drtina, sláma, 10–15 cm) — zajišťuje odvodnění a vzduch.</li>
                <li><strong>Krok 3 – Střídej vrstvy:</strong> Vždy střídej hnědou a zelenou vrstvu. Nikdy nepřidávej silnou vrstvu jednoho materiálu.</li>
                <li><strong>Krok 4 – Urychlovač:</strong> Na každou novou vrstvu posyp hrst kompostovacího urychlovače nebo hotového kompostu — přidáš aktivní mikroorganismy.</li>
                <li><strong>Krok 5 – Vlhkost:</strong> Zkontroluj vlhkost stisknutím hrsti. Mělo by vykapat jen pár kapek — ne téct, ne být prašně suché.</li>
                <li><strong>Krok 6 – Promíchávání:</strong> Každých 7–14 dní promíchej vidlemi pro přístup vzduchu.</li>
                <li><strong>Krok 7 – Test zralosti:</strong> Zralý kompost je tmavý, drobivý, voní po zemi. Test: uzavři hrst do plastového sáčku na 3 dny — pokud nevznikne zápach, kompost je hotový.</li>
              </ul>
            </section>

            <section id="problemy">
              <h2>Problémy a jak je řešit</h2>
              <ul>
                <li><strong>Kompost smrdí jako amoniak:</strong> Příliš mnoho zeleného. Přidej hnědý materiál, promíchej.</li>
                <li><strong>Kompost smrdí jako hniloba:</strong> Nedostatek vzduchu. Hluboce promíchej, přidej drcené větve.</li>
                <li><strong>Kompost je suchý a nerozpadá se:</strong> Příliš mnoho uhlíku nebo sucho. Zalij a přidej zelený materiál.</li>
                <li><strong>Přitahuje mravence:</strong> Kompost je příliš suchý. Zalij a promíchej.</li>
                <li><strong>Přitahuje hlodavce:</strong> Někdo přidal maso nebo vařené jídlo. Odstraň závadný materiál, zabezpeč sítí na spodu.</li>
                <li><strong>Rozkládá se příliš pomalu:</strong> Materiál je příliš hrubý, sucho nebo chlad. Rozdrtit, přidat zelený aktivátor, zalít.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Proč kompost smrdí a jak to zastavit?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Zápach má vždy příčinu: (1) Amoniak — příliš mnoho zeleného. Přidej hnědý materiál v poměru 3:1 a promíchej. (2) Hniloba — nedostatek vzduchu. Hluboce promíchej, přidej drcené větve a zkontroluj vlhkost. Správně vedený kompost voní zeminou — ne hnilobou.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak zrychlit zrání kompostu?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Nejúčinnější způsoby: (1) Drobení materiálu — menší kousky mají větší povrch. (2) Časté promíchávání — každých 5–7 dní. (3) Přidej urychlovač — hrst zeminy nebo hotového kompostu. (4) Udržuj správnou vlhkost. (5) Kompost v horké fázi (50–70 °C) se rozkládá 3–4× rychleji.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Mohu do kompostu dávat citrusy a kávovou sedlinu?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Citrusy ano — s mírou. Velké množství může zpomalit rozklad a odradit žížaly. Kávová sedlina je výborná — obsahuje dusík, přitahuje žížaly a urychluje rozklad. Obojí přidávej v rozumném množství a míchej s dalšími materiály.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Mohu kompostovat v bytě?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ano — vermikompostér (červí) nebo bokashi. Vermikompostér přijímá kuchyňský odpad, funguje bez zápachu a produkuje vysoce kvalitní vermikompost. Bokashi fermentuje odpad včetně masa a mléčných výrobků — výsledek je předkompost který se zakope do půdy nebo přidá do venkovního kompostéru.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak poznám že je kompost hotový?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Zralý kompost je tmavě hnědý až černý, drobivý, voní příjemně po zemi a nejsou v něm viditelné nerozložené kousky. Test: uzavři hrst do plastového sáčku na 3 dny. Pokud nevznikne zápach, kompost je zralý a připravený k použití.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/jak-kompostovat" title="Jak správně kompostovat 2026: Průvodce od založení po černé zlato na zahradě" />

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
                <li><a href="#jak-funguje">Jak kompostování funguje</a></li>
                <li><a href="#co-patri">Co patří do kompostu</a></li>
                <li><a href="#pomer-cn">Poměr C:N</a></li>
                <li><a href="#typy">Typy kompostérů</a></li>
                <li><a href="#zalozeni">Jak správně založit</a></li>
                <li><a href="#problemy">Problémy a řešení</a></li>
                <li><a href="#faq">FAQ</a></li>
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
