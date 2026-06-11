import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hypotéka na rekonstrukci: jak spočítat splátky a vybrat úvěr",
  description: "Jak funguje úvěr na rekonstrukci, na co si dát pozor u úrokové sazby a fixace a jak si spočítat měsíční splátku.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/hypoteka-na-rekonstrukci" },
  openGraph: { title: "Hypotéka na rekonstrukci: jak spočítat splátky a vybrat úvěr", description: "Účelový úvěr, navýšení hypotéky nebo stavební spoření? Jak vybrat financování rekonstrukce a spočítat splátku.", url: "https://www.domovniguru.cz/blog/hypoteka-na-rekonstrukci", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-11T08:00:00Z", modifiedTime: "2026-06-11T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Hypot%C3%A9ka%20na%20rekonstrukci%3A%20jak%20spo%C4%8D%C3%ADtat%20spl%C3%A1tky%20a%20vybrat%20%C3%BAv%C4%9Br&cat=blog", width: 1200, height: 630, alt: "Hypotéka na rekonstrukci: jak spočítat splátky a vybrat úvěr" }] },
  twitter: { card: "summary_large_image", title: "Hypotéka na rekonstrukci: jak spočítat splátky a vybrat úvěr", description: "Jak funguje úvěr na rekonstrukci, fixace sazby a výpočet měsíční splátky." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/hypoteka-na-rekonstrukci#article", "headline": "Hypotéka na rekonstrukci: jak spočítat splátky a vybrat úvěr", "datePublished": "2026-06-11T08:00:00Z", "dateModified": "2026-06-11T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["hypotéka na rekonstrukci", "úvěr na rekonstrukci", "navýšení hypotéky", "fixace úrokové sazby", "splátka úvěru"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Stěhování & rekonstrukce", "item": "https://www.domovniguru.cz/blog/kategorie/stehovani" }, { "@type": "ListItem", "position": 4, "name": "Hypotéka na rekonstrukci", "item": "https://www.domovniguru.cz/blog/hypoteka-na-rekonstrukci" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Je lepší navýšit hypotéku, nebo si vzít nový úvěr na rekonstrukci?", "acceptedAnswer": { "@type": "Answer", "text": "Navýšení stávající hypotéky bývá levnější, pokud máte aktuální sazbu nižší nebo srovnatelnou s nabídkami na úvěr na rekonstrukci a banka navýšení umožní mimo refixaci. Pokud byste si navýšením zhoršili sazbu na celou jistinu, může se vyplatit oddělený účelový úvěr na rekonstrukci nebo úvěr ze stavebního spoření." } }, { "@type": "Question", "name": "Jaké dokumenty banka požaduje k úvěru na rekonstrukci?", "acceptedAnswer": { "@type": "Answer", "text": "Obvykle rozpočet nebo položkový soupis prací, u větších zásahů projektovou dokumentaci a stavební povolení nebo ohlášení, dále výpis z katastru nemovitostí, doklady o příjmech a po dokončení faktury nebo smlouvy s dodavateli pro doložení čerpání." } }, { "@type": "Question", "name": "Co je fixace úrokové sazby a proč je důležitá?", "acceptedAnswer": { "@type": "Answer", "text": "Fixace je období, po které banka garantuje neměnnou úrokovou sazbu, typicky 1, 3, 5 nebo 10 let. Po jejím skončení banka nabídne novou sazbu podle aktuální situace na trhu (refixace), kterou lze přijmout, nebo s úvěrem přejít k jiné bance." } }, { "@type": "Question", "name": "Lze čerpat úvěr na rekonstrukci postupně?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, u větších rekonstrukcí banky obvykle nabízejí čerpání po etapách na základě faktur nebo dokladů o provedených pracích. Do doby vyčerpání celé částky se často platí jen úroky z vyčerpané části, plná splátka začíná až po dočerpání úvěru." } }, { "@type": "Question", "name": "Vyplatí se rekonstrukci financovat z vlastních úspor místo úvěru?", "acceptedAnswer": { "@type": "Answer", "text": "Záleží na výši rezervy, kterou si chcete ponechat, a na rozdílu mezi úrokem z úvěru a výnosem, který by úspory jinak generovaly. Pokud by čerpání úspor vyčerpalo celou finanční rezervu, bývá rozumnější část nákladů pokrýt úvěrem a rezervu si ponechat pro nečekané výdaje." } }] }] };

const RELATED = [
  { title: "Kalkulačka splácení hypotéky", href: "/kalkulacky/splaceni-hypoteky", read: "2 min" },
  { title: "Jak odhadnout cenu rekonstrukce", href: "/blog/odhadnout-cenu-rekonstrukce", read: "6 min" },
  { title: "Plánování rekonstrukce bytu krok za krokem", href: "/blog/planovani-rekonstrukce-bytu", read: "7 min" },
  { title: "Kolik stojí rekonstrukce koupelny – ceny 2026", href: "/blog/cena-rekonstrukce-koupelny", read: "6 min" },
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
              <Link href="/blog/kategorie/stehovani">Stěhování & rekonstrukce</Link><span className="breadcrumb-sep">/</span>
              <span>Hypotéka na rekonstrukci</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏠 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 7 min čtení</span>
              </div>
              <h1 className="article-h1">Hypotéka na rekonstrukci: jak spočítat splátky a vybrat úvěr</h1>
              <p className="article-lead">Rekonstrukce stojí statisíce a málokdo má celou částku na účtu. Tenhle článek vysvětluje, jaké možnosti financování existují, čím se liší a jak si dopředu spočítat, kolik vás bude úvěr měsíčně stát.</p>
              <div className="article-meta-row"><span>Aktualizováno: 11. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#moznosti">Jaké jsou možnosti financování rekonstrukce</a></li>
                <li><a href="#navyseni-vs-novy">Navýšení hypotéky, nebo nový úvěr?</a></li>
                <li><a href="#splatka">Co ovlivňuje výši splátky</a></li>
                <li><a href="#fixace">Fixace úrokové sazby a refixace</a></li>
                <li><a href="#dokumenty">Jaké dokumenty banka požaduje</a></li>
                <li><a href="#cerpani">Čerpání úvěru na etapy a daňové aspekty</a></li>
                <li><a href="#vlastni-zdroje">Vlastní úspory vs. úvěr</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="moznosti">
              <h2>Jaké jsou možnosti financování rekonstrukce</h2>
              <p>Na rekonstrukci bytu nebo domu se dá použít několik typů úvěrů a každý má jiné podmínky, sazby i administrativu. Nejčastější varianty jsou:</p>
              <ul>
                <li><strong>Účelová hypotéka na rekonstrukci</strong> – úvěr zajištěný nemovitostí, určený přímo na stavební úpravy. Má nejnižší úrokové sazby ze všech možností, ale vyžaduje zástavu nemovitosti, ocenění a více papírování.</li>
                <li><strong>Navýšení stávající hypotéky</strong> – pokud už hypotéku splácíte, banka vám může poskytnout dodatečné prostředky v rámci stejného úvěru, často při refixaci nebo formou samostatného navýšení.</li>
                <li><strong>Úvěr ze stavebního spoření</strong> – účelový úvěr od stavební spořitelny, dostupný i bez zástavy nemovitosti do určité výše, s pevnou sazbou po celou dobu splácení.</li>
                <li><strong>Spotřebitelský (neúčelový) úvěr</strong> – nejrychlejší na vyřízení, bez nutnosti dokládat účel ani zástavy, ale s výrazně vyšší úrokovou sazbou. Vhodný spíše na menší částky nebo doplnění financování.</li>
              </ul>
              <p>Před výběrem se vyplatí orientačně si spočítat, kolik celá rekonstrukce bude stát – tomu se podrobně věnuje článek <Link href="/blog/odhadnout-cenu-rekonstrukce" style={{ color: "#2a6496", textDecoration: "underline" }}>jak odhadnout cenu rekonstrukce</Link>. Teprve s reálným rozpočtem v ruce má smysl srovnávat konkrétní úvěrové produkty.</p>
            </section>

            <section id="navyseni-vs-novy">
              <h2>Navýšení hypotéky, nebo nový úvěr?</h2>
              <p>Pokud už hypotéku splácíte, první otázka zní, jestli je výhodnější ji navýšit, nebo si vzít samostatný úvěr na rekonstrukci.</p>
              <h3>Kdy se vyplatí navýšení stávající hypotéky</h3>
              <ul>
                <li>Vaše současná sazba je nízká a banka vám umožní navýšit úvěr za stejnou nebo podobnou sazbu.</li>
                <li>Blíží se konec fixace – navýšení v okamžiku refixace bývá administrativně jednodušší a banky ho často umožňují bez nového ocenění nemovitosti.</li>
                <li>Chcete mít celý dluh u jedné banky, jednu splátku a jeden přehled.</li>
              </ul>
              <h3>Kdy se vyplatí samostatný úvěr</h3>
              <ul>
                <li>Navýšením byste si zhoršili sazbu na celou zbývající jistinu, nejen na nově půjčenou částku.</li>
                <li>Jste uprostřed fixace a banka by za předčasné navýšení účtovala sankce nebo by vyžadovala kompletní nové schvalování.</li>
                <li>Potřebujete peníze rychle a menší úvěr ze stavebního spoření nebo spotřebitelský úvěr vyřídíte bez zástavy a ocenění nemovitosti.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Než se rozhodnete, požádejte svou banku o nezávaznou nabídku na navýšení a zároveň se poptejte u jedné nebo dvou dalších bank na samostatný úvěr na rekonstrukci. Rozdíl v sazbě o 0,3–0,5 procentního bodu se u vyšších částek a delší splatnosti projeví v desítkách tisíc korun na úrocích.</div>
            </section>

            <section id="splatka">
              <h2>Co ovlivňuje výši splátky</h2>
              <p>Měsíční splátka úvěru závisí v zásadě na třech proměnných: výši úvěru, úrokové sazbě a době splatnosti. Platí, že čím delší splatnost, tím nižší měsíční splátka, ale tím vyšší celkové zaplacené úroky za celou dobu trvání úvěru.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Výše úvěru</th><th>Sazba</th><th>Splatnost</th><th>Orientační splátka</th></tr></thead>
                  <tbody>
                    <tr><td>500 000 Kč</td><td>5,0 %</td><td>10 let</td><td>~5 300 Kč/měs.</td></tr>
                    <tr><td>500 000 Kč</td><td>5,0 %</td><td>20 let</td><td>~3 300 Kč/měs.</td></tr>
                    <tr><td>800 000 Kč</td><td>5,0 %</td><td>15 let</td><td>~6 300 Kč/měs.</td></tr>
                    <tr><td>800 000 Kč</td><td>5,5 %</td><td>15 let</td><td>~6 540 Kč/měs.</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Čísla v tabulce jsou orientační a slouží jen k představě, jak se jednotlivé parametry promítají do splátky. Pro vlastní výpočet s konkrétní výší úvěru, sazbou a splatností použijte <Link href="/kalkulacky/splaceni-hypoteky" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačku hypotéky</Link> – ukáže vám měsíční splátku i celkovou částku, kterou bance za dobu splácení zaplatíte.</p>
              <p>U rekonstrukcí je častou chybou volit splatnost stejně dlouhou, jako má zbytek hypotéky na bydlení – tedy třeba 20 let na kuchyňskou linku nebo koupelnu, která má fyzickou životnost 15–20 let. Zvažte, jestli pro menší částky nedává smysl kratší splatnost, i za cenu vyšší měsíční splátky.</p>
            </section>

            <section id="fixace">
              <h2>Fixace úrokové sazby a refixace</h2>
              <p>Fixace je doba, po kterou má úvěr garantovanou neměnnou úrokovou sazbu – typicky 1, 3, 5, 7 nebo 10 let. Po jejím vypršení banka pošle nabídku nové sazby (refixace), která odpovídá aktuální situaci na trhu. Tu lze přijmout, vyjednat o ní, nebo s úvěrem přejít k jiné bance (refinancování).</p>
              <h3>Krátká vs. dlouhá fixace</h3>
              <ul>
                <li><strong>Krátká fixace (1–3 roky)</strong> – obvykle nižší sazba v okamžiku sjednání, ale vyšší nejistota, jak se sazba změní při refixaci.</li>
                <li><strong>Dlouhá fixace (7–10 let)</strong> – jistota stejné splátky na delší období, vhodná pro ty, kdo chtějí mít jasno v rozpočtu domácnosti, často za mírně vyšší vstupní sazbu.</li>
              </ul>
              <p>Pokud financujete rekonstrukci navýšením stávající hypotéky, dává smysl sladit fixaci nového navýšení s fixací zbytku úvěru – jinak budete řešit dvě různá data refixace a dvě různá jednání s bankou.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Tři až šest měsíců před koncem fixace si vždy zkontrolujte, jakou sazbu vám banka nabízí na refixaci, a porovnejte ji s nabídkami konkurence. Banky často dávají lepší sazbu novým klientům než stávajícím, takže se vyplatí o refixaci aktivně vyjednávat.</div>
            </section>

            <section id="dokumenty">
              <h2>Jaké dokumenty banka požaduje při rekonstrukci</h2>
              <p>U účelového úvěru na rekonstrukci banka chce mít jistotu, že peníze skutečně půjdou na deklarovaný účel. Standardně proto požaduje:</p>
              <ul>
                <li><strong>Rozpočet nebo položkový soupis prací</strong> – přehled, co se bude dělat a za kolik, ideálně od dodavatele nebo zhotovitele.</li>
                <li><strong>Projektovou dokumentaci</strong> – u větších zásahů do dispozice, nosných konstrukcí nebo instalací.</li>
                <li><strong>Stavební povolení nebo ohlášení stavby</strong> – pokud rekonstrukce takové povolení podle stavebního zákona vyžaduje.</li>
                <li><strong>Výpis z katastru nemovitostí</strong> a doklady prokazující vlastnictví nebo spoluvlastnictví nemovitosti.</li>
                <li><strong>Doklady o příjmech</strong> pro posouzení bonity – výplatní pásky, daňové přiznání u OSVČ, případně výpisy z účtu.</li>
                <li><strong>Faktury nebo smlouvy s dodavateli</strong> – po dokončení prací nebo jednotlivých etap pro doložení skutečného čerpání.</li>
              </ul>
              <p>U menších rekonstrukcí financovaných spotřebitelským úvěrem nebo nižší částkou ze stavebního spoření bývají požadavky mírnější – často stačí čestné prohlášení o účelu nebo žádné dokládání účelu vůbec, pokud jde o neúčelový úvěr. S přípravou podkladů a celkovým plánem prací pomůže i článek o <Link href="/blog/planovani-rekonstrukce-bytu" style={{ color: "#2a6496", textDecoration: "underline" }}>plánování rekonstrukce bytu</Link>.</p>
            </section>

            <section id="cerpani">
              <h2>Čerpání úvěru na etapy a daňové aspekty</h2>
              <h3>Postupné čerpání</h3>
              <p>U větších rekonstrukcí banky obvykle neposílají celou částku najednou, ale umožňují čerpání po etapách – typicky proti fakturám nebo dokladům o dokončených pracích (hrubá stavba, rozvody, dokončovací práce apod.). Do doby, než je úvěr plně vyčerpán, se často platí jen úroky z vyčerpané části, takže měsíční náklady postupně rostou až do okamžiku, kdy začíná splácení plné splátky jistiny i úroků.</p>
              <p>Tento mechanismus má výhodu v tom, že neplatíte úroky z peněz, které ještě fyzicky nepotřebujete – ale je třeba s ním počítat při plánování cash flow domácnosti během rekonstrukce.</p>
              <h3>Daňové aspekty</h3>
              <p>U hypotečních úvěrů na bydlení (včetně účelových úvěrů na rekonstrukci nemovitosti k vlastnímu bydlení) je za určitých podmínek možné uplatnit odpočet zaplacených úroků od základu daně z příjmů. Pravidla a roční limity se v čase mění a liší se podle data uzavření smlouvy, takže konkrétní nárok a maximální odečitatelnou částku je vždy potřeba ověřit s daňovým poradcem nebo přímo podle aktuálního znění zákona o daních z příjmů.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Uschovávejte si všechny faktury a doklady o úhradě prací spojených s rekonstrukcí – budete je potřebovat jak pro čerpání úvěru po etapách, tak případně pro doložení výdajů při uplatnění daňových odpočtů.</div>
            </section>

            <section id="vlastni-zdroje">
              <h2>Vlastní úspory vs. úvěr</h2>
              <p>Ne každá rekonstrukce musí být financovaná úvěrem. Pokud máte dostatečnou finanční rezervu, nabízí se otázka, jestli rekonstrukci nezaplatit z vlastních úspor a vyhnout se tak úrokům úplně.</p>
              <ul>
                <li><strong>Argument pro úspory:</strong> žádné úroky, žádné papírování, žádný dopad na bonitu pro budoucí úvěry.</li>
                <li><strong>Argument pro úvěr:</strong> zachování finanční rezervy pro nečekané výdaje (porucha auta, ztráta příjmu, vícenáklady při rekonstrukci, které jsou prakticky pravidlem), a možnost rozložit náklad do měsíčních splátek, které jsou srovnatelné s tím, co byste si stejně museli odkládat.</li>
              </ul>
              <p>Velmi častá a rozumná varianta je kombinace obojího: část rekonstrukce zaplatit z úspor (např. nepředvídatelné vícepráce, drobné dokončovací práce) a větší, předem plánovanou část (okna, podlahy, koupelna, elektroinstalace) financovat úvěrem s rozumnou splátkou. Tím se vyhnete situaci, kdy vyčerpáte celou rezervu a na první nečekaný výdaj po rekonstrukci už nemáte z čeho sáhnout.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Než se rozhodnete, vyzkoušejte si v <Link href="/kalkulacky/splaceni-hypoteky" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačce splácení hypotéky</Link> různé kombinace výše úvěru a splatnosti. Často zjistíte, že rozdíl mezi „zaplatit vše z úspor" a „část financovat malým úvěrem" je v měsíčním rozpočtu menší, než byste čekali.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <p>Tento článek je obecný informativní přehled a nejde o finanční poradenství ani konkrétní doporučení k uzavření úvěru. Konkrétní podmínky, sazby a vhodnost jednotlivých produktů vždy probírejte s bankou nebo nezávislým finančním poradcem.</p>
              <div className="faq-list">
                {[
                  { q: "Je lepší navýšit hypotéku, nebo si vzít nový úvěr na rekonstrukci?", a: "Navýšení stávající hypotéky bývá levnější, pokud máte aktuální sazbu nízkou nebo srovnatelnou s nabídkami na úvěr na rekonstrukci a banka navýšení umožní mimo refixaci. Pokud byste si navýšením zhoršili sazbu na celou jistinu, může se vyplatit oddělený účelový úvěr na rekonstrukci nebo úvěr ze stavebního spoření." },
                  { q: "Jaké dokumenty banka požaduje k úvěru na rekonstrukci?", a: "Obvykle rozpočet nebo položkový soupis prací, u větších zásahů projektovou dokumentaci a stavební povolení nebo ohlášení, dále výpis z katastru nemovitostí, doklady o příjmech a po dokončení faktury nebo smlouvy s dodavateli pro doložení čerpání." },
                  { q: "Co je fixace úrokové sazby a proč je důležitá?", a: "Fixace je období, po které banka garantuje neměnnou úrokovou sazbu, typicky 1, 3, 5 nebo 10 let. Po jejím skončení banka nabídne novou sazbu podle aktuální situace na trhu (refixace), kterou lze přijmout, nebo s úvěrem přejít k jiné bance." },
                  { q: "Lze čerpat úvěr na rekonstrukci postupně?", a: "Ano, u větších rekonstrukcí banky obvykle nabízejí čerpání po etapách na základě faktur nebo dokladů o provedených pracích. Do doby vyčerpání celé částky se často platí jen úroky z vyčerpané části, plná splátka začíná až po dočerpání úvěru." },
                  { q: "Vyplatí se rekonstrukci financovat z vlastních úspor místo úvěru?", a: "Záleží na výši rezervy, kterou si chcete ponechat, a na rozdílu mezi úrokem z úvěru a tím, k čemu by úspory jinak sloužily. Pokud by čerpání úspor vyčerpalo celou finanční rezervu, bývá rozumnější část nákladů pokrýt úvěrem a rezervu si ponechat pro nečekané výdaje." },
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
                    <div className="card-eyebrow-row"><span>Stěhování & rekonstrukce</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#moznosti">Možnosti financování</a></li>
                <li><a href="#navyseni-vs-novy">Navýšení, nebo nový úvěr?</a></li>
                <li><a href="#splatka">Co ovlivňuje splátku</a></li>
                <li><a href="#fixace">Fixace a refixace</a></li>
                <li><a href="#dokumenty">Požadované dokumenty</a></li>
                <li><a href="#cerpani">Čerpání a daně</a></li>
                <li><a href="#vlastni-zdroje">Úspory vs. úvěr</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/stehovani" className="sidebar-cat-link">🏠 Stěhování & rekonstrukce<span>20 článků →</span></Link>
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
