import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak udržovat krb a kamna na dřevo během sezóny",
  description: "Čištění skla, komína a popelníku, výběr dřeva a bezpečnostní zásady provozu krbu nebo kamen na dřevo.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/udrzba-krbu-a-kamen-na-drevo" },
  openGraph: { title: "Jak udržovat krb a kamna na dřevo během sezóny", description: "Čištění skla, komína a popelníku, výběr dřeva a bezpečnostní zásady provozu krbu nebo kamen na dřevo.", url: "https://www.domovniguru.cz/blog/udrzba-krbu-a-kamen-na-drevo", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-24T08:00:00Z", modifiedTime: "2026-06-24T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20udr%C5%BEovat%20krb%20a%20kamna%20na%20d%C5%99evo%20b%C4%9Bhem%20sez%C3%B3ny&cat=blog", width: 1200, height: 630, alt: "Jak udržovat krb a kamna na dřevo během sezóny" }] },
  twitter: { card: "summary_large_image", title: "Jak udržovat krb a kamna na dřevo během sezóny", description: "Čištění skla, komína a popelníku, výběr dřeva a bezpečnostní zásady provozu krbu nebo kamen na dřevo." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/udrzba-krbu-a-kamen-na-drevo#article", "headline": "Jak udržovat krb a kamna na dřevo během sezóny", "datePublished": "2026-06-24T08:00:00Z", "dateModified": "2026-06-24T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["údržba krbu", "péče o kamna na dřevo", "čištění skla krbu", "kominík", "palivové dřevo", "bezpečnost krbu"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Sezónní údržba", "item": "https://www.domovniguru.cz/blog/kategorie/sezonni-udrzba" }, { "@type": "ListItem", "position": 4, "name": "Údržba krbu a kamen na dřevo", "item": "https://www.domovniguru.cz/blog/udrzba-krbu-a-kamen-na-drevo" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jak často mám čistit sklo krbových dveří?", "acceptedAnswer": { "@type": "Answer", "text": "Lehké zašednutí skla je normální po každém zatápění. Důkladnější čištění popelem nebo speciálním přípravkem na sklo krbů stačí jednou týdně až jednou za dva týdny při pravidelném provozu, ideálně vždy na vychladlém skle." } }, { "@type": "Question", "name": "Jak často je potřeba vymetat komín?", "acceptedAnswer": { "@type": "Answer", "text": "Podle vyhlášky o požární ochraně musí krb nebo kamna na dřevo do 50 kW procházet kontrolou a čištěním kominíkem nejméně jednou až třikrát ročně podle typu spotřebiče a intenzity provozu. Revize spalinové cesty se provádí jednou ročně." } }, { "@type": "Question", "name": "Jaké dřevo je nejlepší do krbu nebo kamen?", "acceptedAnswer": { "@type": "Answer", "text": "Nejvhodnější je tvrdé dřevo (dub, buk, habr) vysušené minimálně jeden až dva roky, s vlhkostí pod 20 %. Čerstvé nebo vlhké dřevo hoří hůř, produkuje více dehtu a sazí, které se usazují v komíně a zvyšují riziko požáru komína." } }, { "@type": "Question", "name": "Jakou minimální vzdálenost musí mít krb od hořlavých materiálů?", "acceptedAnswer": { "@type": "Answer", "text": "Bezpečná vzdálenost závisí na konkrétním spotřebiči a je uvedena v návodu výrobce, obvykle se ale pohybuje kolem 80–100 cm od hořlavých materiálů ve směru sálání a minimálně 20–30 cm do stran a k zadní stěně u nehořlavých konstrukcí s tepelnou izolací." } }, { "@type": "Question", "name": "Je nutné mít u krbu detektor kouře a oxidu uhelnatého?", "acceptedAnswer": { "@type": "Answer", "text": "Detektor kouře a zejména detektor oxidu uhelnatého (CO) jsou u spotřebičů na pevná paliva silně doporučené, v některých případech i vyžadované. CO je bez zápachu a barvy, takže jediný způsob, jak ho včas odhalit, je funkční detektor s čidlem umístěným v dosahu obytné místnosti." } }] }] };

const RELATED = [
  { title: "Příprava domu na zimu – kompletní checklist", href: "/blog/priprava-domu-na-zimu", read: "10 min" },
  { title: "Jak zkontrolovat kotel před topnou sezónou", href: "/blog/zkontrolovat-kotel-pred-zimou", read: "6 min" },
  { title: "Jak udržovat plynový kotel během celého roku", href: "/blog/udrzba-plynoveho-kotle", read: "6 min" },
  { title: "Jak se zbavit vlhkosti v bytě – příčiny, měření a řešení", href: "/blog/zbavit-se-vlhkosti-v-byte", read: "7 min" },
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
              <Link href="/blog/kategorie/sezonni-udrzba">Sezónní údržba</Link><span className="breadcrumb-sep">/</span>
              <span>Údržba krbu a kamen na dřevo</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">❄️ Sezónní údržba</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak udržovat krb a kamna na dřevo během sezóny</h1>
              <p className="article-lead">Krb nebo kamna na dřevo dávají domu atmosféru, kterou žádné jiné topidlo nenahradí. Aby ale fungovaly bezpečně a efektivně celou sezónu, potřebují pravidelnou péči – od výběru správného dřeva přes čištění skla a popelníku až po kontrolu komína odborníkem. Tady je přehled, co si můžeš udělat sám a co je potřeba nechat na kominíkovi.</p>
              <div className="article-meta-row"><span>Aktualizováno: 24. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#drevo">Výběr a sušení palivového dřeva</a></li>
                <li><a href="#sklo">Čištění skla krbových dveří</a></li>
                <li><a href="#popel">Vybírání popela a péče o popelník</a></li>
                <li><a href="#komin">Kdy nechat vyčistit komín</a></li>
                <li><a href="#bezpecnost">Bezpečné vzdálenosti a detektory</a></li>
                <li><a href="#servis">Sezónní servis – těsnění a šamot</a></li>
                <li><a href="#chyby">Časté chyby při zatápění</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="drevo">
              <h2>Výběr a sušení palivového dřeva</h2>
              <p>Kvalita dřeva rozhoduje o tom, jak krb nebo kamna hoří, kolik dehtu se usadí v komíně a jak efektivně se teplo dostane do místnosti. Vlhké dřevo hoří „studeně", kouří a vytváří kreozot – usazeninu, která je hlavní příčinou požárů komína.</p>
              <ul>
                <li><strong>Vlhkost dřeva</strong> – ideál je pod 20 %, ověříš jednoduchou vlhkoměrnou sondou na dřevo (pár set korun)</li>
                <li><strong>Doba sušení</strong> – tvrdé dřevo potřebuje minimálně 12–24 měsíců na vzduchu, jehličnany sušíte kratší dobu, ale hoří rychleji a více jiskří</li>
                <li><strong>Druh dřeva</strong> – dub, buk a habr dávají nejvíc tepla na objem a hoří dlouho a rovnoměrně; bříza a jasan jsou dobrá kombinace výhřevnosti a snadného zapalování</li>
                <li><strong>Skladování</strong> – dřevo skládej na proudícím vzduchu, mimo přímý kontakt se zemí (na paletách nebo regálu) a chráněné před deštěm shora, ale s otevřenými boky</li>
                <li><strong>Velikost polen</strong> – přizpůsob velikosti spalovací komory, příliš velká polena se nezapálí rovnoměrně</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Nikdy nepřikládej natřené, lakované nebo lepené dřevo (palety, dřevotřísku) – při hoření uvolňuje škodlivé látky a poškozuje vyzdívku i komín.</div>
            </section>

            <section id="sklo">
              <h2>Čištění skla krbových dveří</h2>
              <p>Zašednutí nebo zčernání skla je způsobeno usazeninami sazí a dehtu, které vznikají zejména při hoření vlhkého dřeva nebo při tlumeném hoření s nedostatkem vzduchu. Pravidelné čištění udrží sklo průhledné a zároveň ti ukáže, jak dřevo skutečně hoří.</p>
              <ul>
                <li><strong>Čištění popelem</strong> – vlhký hadřík namočený a otřený ve vlhkém popelu funguje jako jemné brusivo na zaschlé saze, vždy na vychladlém skle</li>
                <li><strong>Speciální přípravky na sklo krbů</strong> – dostupné v hobby marketech, fungují rychleji než popel a nezanechávají škrábance</li>
                <li><strong>Frekvence</strong> – lehké přetření po každém větším zatápění, důkladnější čištění jednou týdně až za dva týdny v sezóně</li>
                <li><strong>Co nepoužívat</strong> – abrazivní drátěnky, ocelovou vlnu nebo agresivní chemii, která může poškodit speciální žáruvzdorné sklo</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud se sklo zašpiňuje extrémně rychle i při suchém dřevu, zkontroluj přívod vzduchu do ohniště – ucpaná nebo zúžená klapka brání dokonalému spalování.</div>
            </section>

            <section id="popel">
              <h2>Vybírání popela a péče o popelník</h2>
              <p>Vrstva popela na dně topeniště do určité míry pomáhá izolovat žhavé uhlíky a udržovat teplotu, ale příliš vysoká vrstva omezuje přívod vzduchu zespodu a brání rovnoměrnému hoření.</p>
              <ul>
                <li><strong>Frekvence vybírání</strong> – popelník vyprazdňuj, jakmile je plný do dvou třetin, u běžného provozu obvykle jednou za 3–7 dní</li>
                <li><strong>Vychladnutí popela</strong> – popel může obsahovat žhavé uhlíky i 24–48 hodin po posledním zatápění, vždy ho skladuj v nehořlavé nádobě s víkem</li>
                <li><strong>Likvidace popela</strong> – vychladlý dřevní popel lze použít jako hnojivo na zahradu v malém množství, nikdy ho nedávej do plastového odpadu, dokud nevychladne úplně</li>
                <li><strong>Ochrana podlahy</strong> – nehořlavá podložka pod popelníkem zachytí jiskry a drobné odprýsknutí popela při vybírání</li>
              </ul>
            </section>

            <section id="komin">
              <h2>Kdy nechat vyčistit komín kominíkem</h2>
              <p>Čištění a kontrola komína odborníkem je ze zákona povinná a zároveň nejdůležitější bezpečnostní opatření celé sezóny – většina požárů komína vzniká z nahromaděného dehtu (kreozotu), který se vznítí při vysoké teplotě spalin.</p>
              <ul>
                <li><strong>Spotřebiče na pevná paliva do 50 kW</strong> – čištění spalinové cesty 1× ročně při celoročním provozu, 2–3× ročně při provozu jako hlavní zdroj vytápění</li>
                <li><strong>Revize spalinové cesty</strong> – jednou ročně odborně způsobilou osobou, nutná i při změně topidla nebo po požáru komína</li>
                <li><strong>Vlastní vizuální kontrola</strong> – mezi odbornými prohlídkami sleduj, jestli z komína při zatápění neuniká nadměrný kouř nebo zápach, který by mohl signalizovat ucpání</li>
                <li><strong>Doklad o kontrole</strong> – uschovej si revizní zprávu, pojišťovna ji může vyžadovat při pojistné události spojené s požárem</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Objednej kominíka na podzim, ještě před prvním vytápěním v sezóně – v hlavní sezóně mívají firmy několikatýdenní čekací lhůty.</div>
            </section>

            <section id="bezpecnost">
              <h2>Bezpečné vzdálenosti od hořlavých materiálů a detektory</h2>
              <p>Krb i kamna sálají velké množství tepla, které se šíří i do okolních konstrukcí. Minimální bezpečné vzdálenosti od hořlavých materiálů (dřevěný obklad, nábytek, závěsy) stanovuje výrobce v návodu a jsou závazné – nejde jen o doporučení.</p>
              <ul>
                <li><strong>Sálavá vzdálenost vpředu</strong> – obvykle 80–100 cm od dveří topeniště směrem do místnosti</li>
                <li><strong>Boční a zadní vzdálenosti</strong> – podle typu konstrukce a izolace tělesa, typicky 20–30 cm i více u nechráněných hořlavých stěn</li>
                <li><strong>Nehořlavá podložka pod kamna</strong> – chrání podlahu před žhavými uhlíky a jiskrami při přikládání</li>
                <li><strong>Detektor kouře</strong> – instaluj v místnosti s krbem i na chodbách vedoucích k ložnicím</li>
                <li><strong>Detektor oxidu uhelnatého (CO)</strong> – CO je bez barvy a zápachu, vzniká při nedokonalém spalování nebo zhoršeném tahu komína; detektor je proto téměř nutností</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Hasicí přístroj nebo alespoň hasicí deku mít v dosahu kuchyně i obytné místnosti s krbem se vždy vyplatí – riziko je malé, ale následky velké.</div>
            </section>

            <section id="servis">
              <h2>Sezónní servis – těsnění dveří a šamotové vyzdívky</h2>
              <p>Před začátkem topné sezóny stojí za to kamna nebo krb i mechanicky zkontrolovat, ne jen vyčistit. Opotřebené těsnění nebo poškozený šamot snižují účinnost spalování a zvyšují spotřebu dřeva.</p>
              <h3>Těsnění dveří</h3>
              <p>Provazové těsnění kolem skla a dveří topeniště se postupně stlačuje a ztrácí pružnost, což způsobuje únik falešného vzduchu a nekontrolované hoření. Test: zavři dveře na proužek papíru – pokud ho jde lehce vytáhnout, je čas na nové těsnění.</p>
              <h3>Šamotové vyzdívky</h3>
              <p>Šamotové cihly nebo desky uvnitř topeniště chrání plášť spotřebiče před vysokou teplotou. Praskliny do několika milimetrů jsou běžné a nejsou problém, ale větší trhliny nebo vypadávající kusy šamotu je nutné vyměnit – jinak hrozí přehřátí kovové konstrukce.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Roční servisní kontrola u autorizovaného technika (zejména u krbových vložek a teplovodních kamen) prodlouží životnost spotřebiče a často je podmínkou záruky.</div>
            </section>

            <section id="chyby">
              <h2>Časté chyby při zatápění</h2>
              <ul>
                <li><strong>Zatápění vlhkým dřevem</strong> – hlavní příčina kouření, zanášení skla i komína dehtem</li>
                <li><strong>Použití podpalovačů s benzínem nebo lihem</strong> – nebezpečné a nepředvídatelné, používej k tomu určené podpalovače nebo suché třísky</li>
                <li><strong>Tlumení hoření přiškrcením vzduchu na noc</strong> – u starších kamen vede k nedokonalému spalování a tvorbě kreozotu, moderní spotřebiče na to mají často speciální režim</li>
                <li><strong>Spalování odpadu, lakovaného dřeva nebo plastů</strong> – uvolňuje toxické látky a poškozuje vyzdívku i komín</li>
                <li><strong>Přetápění spotřebiče</strong> – přikládání nad doporučenou dávku přetěžuje materiál i komín a zvyšuje riziko požáru</li>
                <li><strong>Otevírání dveří topeniště za plného hoření</strong> – riziko vypadnutí žhavých uhlíků a popela do místnosti</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jak často mám čistit sklo krbových dveří?", a: "Lehké zašednutí skla je normální po každém zatápění. Důkladnější čištění popelem nebo speciálním přípravkem na sklo krbů stačí jednou týdně až jednou za dva týdny při pravidelném provozu, ideálně vždy na vychladlém skle." },
                  { q: "Jak často je potřeba vymetat komín?", a: "Podle vyhlášky o požární ochraně musí krb nebo kamna na dřevo do 50 kW procházet kontrolou a čištěním kominíkem nejméně jednou až třikrát ročně podle typu spotřebiče a intenzity provozu. Revize spalinové cesty se provádí jednou ročně." },
                  { q: "Jaké dřevo je nejlepší do krbu nebo kamen?", a: "Nejvhodnější je tvrdé dřevo (dub, buk, habr) vysušené minimálně jeden až dva roky, s vlhkostí pod 20 %. Čerstvé nebo vlhké dřevo hoří hůř, produkuje více dehtu a sazí, které se usazují v komíně a zvyšují riziko požáru komína." },
                  { q: "Jakou minimální vzdálenost musí mít krb od hořlavých materiálů?", a: "Bezpečná vzdálenost závisí na konkrétním spotřebiči a je uvedena v návodu výrobce, obvykle se ale pohybuje kolem 80–100 cm od hořlavých materiálů ve směru sálání a minimálně 20–30 cm do stran a k zadní stěně u nehořlavých konstrukcí s tepelnou izolací." },
                  { q: "Je nutné mít u krbu detektor kouře a oxidu uhelnatého?", a: "Detektor kouře a zejména detektor oxidu uhelnatého (CO) jsou u spotřebičů na pevná paliva silně doporučené, v některých případech i vyžadované. CO je bez zápachu a barvy, takže jediný způsob, jak ho včas odhalit, je funkční detektor s čidlem umístěným v dosahu obytné místnosti." },
                ].map(({ q, a }) => (
                  <details key={q} className="faq-item">
                    <summary className="faq-q">{q}</summary>
                    <p className="faq-a">{a}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="related-section">
              <h2>Související články</h2>
              <div className="related-grid">
                {RELATED.map((r) => (
                  <Link key={r.href} href={r.href} className="card">
                    <div className="card-eyebrow-row"><span>Sezónní údržba</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#drevo">Výběr a sušení dřeva</a></li>
                <li><a href="#sklo">Čištění skla</a></li>
                <li><a href="#popel">Popel a popelník</a></li>
                <li><a href="#komin">Kdy vyčistit komín</a></li>
                <li><a href="#bezpecnost">Bezpečné vzdálenosti</a></li>
                <li><a href="#servis">Sezónní servis</a></li>
                <li><a href="#chyby">Časté chyby</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/sezonni-udrzba" className="sidebar-cat-link">❄️ Sezónní údržba<span>24 článků →</span></Link>
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
        .faq-list { display: flex; flex-direction: column; gap: 8px; }
        .faq-item { border: 1px solid var(--border); border-radius: 10px; overflow: hidden; background: #fff; }
        .faq-q { font-size: 15px; font-weight: 600; padding: 16px 20px; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; transition: background 120ms; }
        .faq-q:hover { background: var(--surface); }
        .faq-q::after { content: "+"; font-size: 18px; font-weight: 300; flex-shrink: 0; margin-left: 12px; }
        details[open] .faq-q::after { content: "−"; }
        .faq-a { font-size: 14px; line-height: 1.65; color: var(--muted); font-weight: 300; padding: 0 20px 16px; }
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
