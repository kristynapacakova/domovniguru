import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak navrhnout zahradu od nuly – plán, zóny a výběr rostlin",
  description: "Praktický průvodce návrhem zahrady: měření a analýza pozemku, zónování, výběr stylu, rostlin a trávníku. Rozpočet a etapizace svépomocí i s firmou.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-navrhnout-zahradu" },
  openGraph: { title: "Jak navrhnout zahradu od nuly – plán, zóny a výběr rostlin", description: "Praktický průvodce návrhem zahrady: analýza pozemku, zónování, výběr stylu, rostlin a trávníku.", url: "https://www.domovniguru.cz/blog/jak-navrhnout-zahradu", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-09T08:00:00Z", modifiedTime: "2026-06-09T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20navrhnout%20zahradu%20od%20nuly%20%E2%80%93%20pl%C3%A1n%2C%20z%C3%B3ny%20a%20v%C3%BDb%C4%9Br%20rostlin&cat=blog", width: 1200, height: 630, alt: "Jak navrhnout zahradu od nuly – plán, zóny a výběr rostlin" }] },
  twitter: { card: "summary_large_image", title: "Jak navrhnout zahradu od nuly – plán, zóny a výběr rostlin", description: "Praktický průvodce návrhem zahrady: analýza pozemku, zónování, výběr stylu, rostlin a trávníku." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/jak-navrhnout-zahradu#article", "headline": "Jak navrhnout zahradu od nuly – plán, zóny a výběr rostlin", "datePublished": "2026-06-09T08:00:00Z", "dateModified": "2026-06-09T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["návrh zahrady", "jak navrhnout zahradu", "zahradní zóny", "výběr rostlin", "zahradní styl", "plán zahrady"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Zahrada & terasa", "item": "https://www.domovniguru.cz/blog/kategorie/zahrada" }, { "@type": "ListItem", "position": 4, "name": "Jak navrhnout zahradu od nuly", "item": "https://www.domovniguru.cz/blog/jak-navrhnout-zahradu" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Kolik stojí návrh zahrady od zahradního architekta?", "acceptedAnswer": { "@type": "Answer", "text": "Základní projekt zahrady u architekta stojí 5 000–20 000 Kč podle velikosti pozemku a rozsahu návrhu. Za celkový projekt se situačním plánem, výběrem rostlin a výkresem terasy zaplatíš 15 000–40 000 Kč. Svépomocné plánování nic nestojí." } }, { "@type": "Question", "name": "Kdy je nejlepší čas začít se zahradou?", "acceptedAnswer": { "@type": "Answer", "text": "Plánování začni kdykoli, ideálně v zimě. Realizaci rozděl na etapy: přípravu půdy a terénní úpravy na podzim nebo brzy na jaře, výsev trávníku na jaro (duben–květen) nebo podzim (srpen–září), výsadbu dřevin na podzim." } }, { "@type": "Question", "name": "Jak zjistit typ půdy na zahradě?", "acceptedAnswer": { "@type": "Answer", "text": "Jednoduchý test: vezmi hrst vlhké půdy a pokus se z ní vymodelovat váleček. Hlinitopísčitá půda se rozpadá – ideální základ. Jílovitá půda drží tvar dobře, ale je těžká – přidej písek a kompost. Písčitá půda se vůbec neslepí – přidej kompost pro lepší zadržení vody." } }, { "@type": "Question", "name": "Kolik rostlin potřebuji na záhon?", "acceptedAnswer": { "@type": "Answer", "text": "Záleží na druhu: trvalky se obvykle sázejí po 3–5 kusech v hloučcích, keře po 1–3 kusech na m². Jako orientace: na 1 m² záhonu počítej 3–6 rostlin trvalek, nebo 1–2 keře. Hustota závisí i na konečném vzrůstu daného druhu." } }] }] };

const RELATED = [
  { title: "Jak připravit zahradu na jaro – kompletní checklist", href: "/blog/jarni-zahrada", read: "7 min" },
  { title: "Jak zasít trávník od nuly – příprava půdy, setí, péče", href: "/blog/zasit-travnik-od-nuly", read: "7 min" },
  { title: "Jak správně sekat trávník: Průvodce pro hustý a zelený pažit bez plevele", href: "/blog/jak-sekat-travnik", read: "8 min" },
  { title: "Bylinková zahradka – jak pěstovat bylinky doma i venku", href: "/blog/bylinkova-zahradka", read: "6 min" },
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
              <span>Jak navrhnout zahradu od nuly</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 7 min čtení</span>
              </div>
              <h1 className="article-h1">Jak navrhnout zahradu od nuly – plán, zóny a výběr rostlin</h1>
              <p className="article-lead">Nová zahrada vypadá na první pohled jako prázdné místo plné možností. Ale bez plánu se snadno stane chaosem záhonů bez ladu a skladu. Tenhle průvodce tě provede od prvního měření přes zónování až po výběr rostlin a realistický rozpočet.</p>
              <div className="article-meta-row"><span>Publikováno: 9. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#analyza">Analýza pozemku</a></li>
                <li><a href="#zony">Zónování zahrady</a></li>
                <li><a href="#styl">Výběr stylu</a></li>
                <li><a href="#rostliny">Výběr rostlin</a></li>
                <li><a href="#travnik">Trávník vs. alternativy</a></li>
                <li><a href="#rozpocet">Plán etap a rozpočet</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="analyza">
              <h2>Jak začít: měření, slunné/stinné zóny, typ půdy, přípojka vody</h2>
              <p>Dřív než sáhneš po tužce a papíru, stráv v zahradě celý den – ideálně v různých ročních obdobích. Sleduj, kam dopadá slunce ráno, odpoledne a večer. Zaznamenej, kde stojí voda po dešti a kde je půda vždy suchá. Teprve pak začni kreslit.</p>
              <h3>Co změřit a zaznamenat</h3>
              <ul>
                <li><strong>Rozměry pozemku</strong> – změř délky a šířky, zaznamenej všechny nepravidelnosti a výškovné rozdíly</li>
                <li><strong>Světové strany</strong> – zjisti, kde je sever/jih (aplikace v telefonu postačí), a nakresli si stíny staveb a stromů</li>
                <li><strong>Slunné a stinné zóny</strong> – místa s více než 6 hodinami přímého slunce jsou „plné slunce", 3–6 hod. je „polostín", méně je „stín"</li>
                <li><strong>Přípojka vody</strong> – zjisti, kde jsou vyvedeny vodovodní přípojky a jak daleko sahá hadice; plánuj záhony co nejblíže</li>
                <li><strong>Typ půdy</strong> – proveď jednoduchý test (viz níže) a dle výsledku plánuj úpravy</li>
              </ul>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ půdy</th><th>Vlastnosti</th><th>Co přidat</th><th>Vhodné pro</th></tr></thead>
                  <tbody>
                    <tr><td>Hlinitopísčitá</td><td>Dobře propustná, vzdušná</td><td>Kompost pro živiny</td><td>Většina zeleniny a trvalek</td></tr>
                    <tr><td>Jílovitá</td><td>Drží vodu, těžká</td><td>Písek + kompost</td><td>Rybíz, švestky, lípa</td></tr>
                    <tr><td>Písčitá</td><td>Rychle vysychá</td><td>Kompost, mulč</td><td>Levandule, šalvěj, rozmarýn</td></tr>
                    <tr><td>Kyselá (pH &lt; 6)</td><td>Vhodná pro vřesy</td><td>Vápnění</td><td>Borůvky, rododendron</td></tr>
                    <tr><td>Zásaditá (pH &gt; 7)</td><td>Chybí železo</td><td>Síra, rašelina</td><td>Šeříky, tavolníky</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Zahradní centrum nebo zemědělská labolatoř ti za 200–400 Kč provede rozbor půdy – zjistíš pH, obsah živin i humusu. Ušetříš tím roky pokusů metodou pokus–omyl.</div>
            </section>

            <section id="zony">
              <h2>Zónování zahrady: kde co patří</h2>
              <p>Zahrada funguje nejlépe, když každá část má svůj účel a logicky navazuje na okolí domu. Zónování ti pomůže rozdělit plochu tak, aby byl provoz praktický – zelenina blízko kuchyně, dětský koutek vidět z okna, odpočinková terasa chráněná před větrem.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Zóna</th><th>Doporučené umístění</th><th>Minimální plocha</th><th>Poznámky</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Trávník</strong></td><td>Střed, propojení zón</td><td>20–30 m²</td><td>Plné slunce nebo lehký polostín</td></tr>
                    <tr><td><strong>Záhony okrasné</strong></td><td>Podél plotu, u domu</td><td>5–15 m²</td><td>Viditelná místa, polostín ok</td></tr>
                    <tr><td><strong>Zelenina</strong></td><td>Slunné místo, blízko kuchyně</td><td>10–20 m²</td><td>Min. 6 hod. slunce, blízko vody</td></tr>
                    <tr><td><strong>Terasa / zpevněná plocha</strong></td><td>U domu, jih nebo západ</td><td>15–25 m²</td><td>Chráněno před větrem ze severu</td></tr>
                    <tr><td><strong>Altán / posezení</strong></td><td>Konec zahrady, klidná zóna</td><td>6–15 m²</td><td>Stín odpoledne výhodou</td></tr>
                    <tr><td><strong>Ohniště / gril</strong></td><td>Bezpečná vzdálenost od staveb</td><td>3–6 m²</td><td>Min. 3 m od plotu a staveb</td></tr>
                    <tr><td><strong>Kompost / zázemí</strong></td><td>Diskrétní koutek, stín ok</td><td>2–4 m²</td><td>Za keřem nebo plotem</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Při zónování mysli na <strong>průchodnost</strong> – každá zóna by měla být přístupná bez přecházení přes jinou. Mezi trávníkem a záhony naplánuj obrubníky nebo pás štěrku, který zamezí zarůstání.</p>
            </section>

            <section id="styl">
              <h2>Výběr stylu zahrady</h2>
              <p>Styl zahrady by měl ladit s domem a odpovídat tvé ochotě k údržbě. Anglická zahrada vypadá krásně na fotkách, ale vyžaduje soustavnou péči. Minimalistická zahrada je nenáročná, ale drahá na pořízení.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Styl</th><th>Charakteristika</th><th>Náročnost údržby</th><th>Cena realizace</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Přírodní / divoká</strong></td><td>Volně rostoucí trvalky, louky, hmyzí hotely</td><td>Nízká</td><td>Nízká (200–400 Kč/m²)</td></tr>
                    <tr><td><strong>Anglická</strong></td><td>Bohaté záhony, výrazné barvy, trávník</td><td>Vysoká</td><td>Střední (400–700 Kč/m²)</td></tr>
                    <tr><td><strong>Japonská</strong></td><td>Kámen, voda, bambus, asymetrie</td><td>Střední</td><td>Vysoká (700–1 500 Kč/m²)</td></tr>
                    <tr><td><strong>Minimalistická</strong></td><td>Čisté linie, omezená paleta rostlin</td><td>Nízká</td><td>Vysoká (800–2 000 Kč/m²)</td></tr>
                    <tr><td><strong>Venkovská / cottage</strong></td><td>Mix zeleniny, bylin a květin, romantika</td><td>Střední–vysoká</td><td>Nízká–střední (300–600 Kč/m²)</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Nemusíš volit jen jeden styl. Kombinace funguje skvěle – například přední zahrada minimalistická (nízká údržba, dobrý první dojem) a zadní zahrada venkovská s bylinkami a zeleninou.</div>
            </section>

            <section id="rostliny">
              <h2>Výběr rostlin: stálezelené vs. opadavé, sezóna kvetení, podmínky</h2>
              <p>Při výběru rostlin mysli na <strong>čtyři otázky</strong>: Kolik má místo slunce? Jaká je tam půda? Jak moc chci prořezávat? A chci, aby záhon vypadal hezky i v zimě?</p>
              <h3>Stálezelené vs. opadavé</h3>
              <p>Stálezelené dřeviny (tisy, buxusy, vavříny) drží strukturu zahrady po celý rok – jsou páteří záhonu. Opadavé dřeviny a trvalky naopak nabízejí sezónní proměny barev, ale v zimě záhon vypadá prázně. Ideální kombinace je <strong>30 % stálezeleného + 70 % opadavého</strong>.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Podmínky</th><th>Vhodné rostliny</th><th>Sezóna kvetení</th><th>Poznámky</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Plné slunce</strong></td><td>Levandule, šalvěj, třapatka, denivka, rudbeckie</td><td>VI–IX</td><td>Suchomilné, nenáročné</td></tr>
                    <tr><td><strong>Polostín</strong></td><td>Astilbe, hosta, kakost, bergénie, kapradiny</td><td>V–VIII</td><td>Vlhčí půda výhodou</td></tr>
                    <tr><td><strong>Plný stín</strong></td><td>Hosta, kapradiny, brečtan, trávy (ostřice)</td><td>V–VI</td><td>Omezené kvetení</td></tr>
                    <tr><td><strong>Suchá půda</strong></td><td>Rozchodník (sedum), netřesk, pelyněk, thymián</td><td>VI–VIII</td><td>Nenáročné, vhodné do skalek</td></tr>
                    <tr><td><strong>Vlhká půda</strong></td><td>Kosatec (iris), primula, krtičník, svízel</td><td>IV–VI</td><td>Blízkost vody nebo nížina</td></tr>
                  </tbody>
                </table>
              </div>
              <h3>Jak zajistit kvetení po celou sezónu</h3>
              <p>Plánuj záhon tak, aby vždy něco kvetlo: jarní cibuloviny (tulipány, narcisy) doplní jarní trvalky (bergénie, kakost), ty vystřídá letní vlna (denivky, třapatky), po níž přijdou podzimní hvězdnice a vřesy. Takový záhon vypadá dobře od března do listopadu.</p>
            </section>

            <section id="travnik">
              <h2>Trávník vs. alternativy</h2>
              <p>Trávník je krásný, ale náročný. Musíš ho sekat každých 7–10 dní od dubna do října, hnojit, zalévat a řešit mech. Pokud nemáš čas nebo záhon je ve stínu, zvaž alternativy. Správné množství trávníkového osiva pro výsev spočítáš v naší <Link href="/kalkulacky/kolik-osiva" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačce množství osiva</Link>.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Povrch</th><th>Cena pořízení / m²</th><th>Údržba</th><th>Výdrž</th><th>Vhodné pro</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Trávník ze semen</strong></td><td>20–50 Kč</td><td>Vysoká (sečení, hnojení)</td><td>Trvalý při péči</td><td>Slunná místa, rodiny s dětmi</td></tr>
                    <tr><td><strong>Travní koberce (role)</strong></td><td>150–300 Kč</td><td>Vysoká (stejně jako výsev)</td><td>Trvalý při péči</td><td>Rychlý výsledek</td></tr>
                    <tr><td><strong>Kůrový mulč</strong></td><td>80–150 Kč</td><td>Nízká (doplňování á 2–3 roky)</td><td>Doplňovat každé 2–3 roky</td><td>Pod keři, stinné plochy</td></tr>
                    <tr><td><strong>Kačírek / štěrk</strong></td><td>200–500 Kč</td><td>Velmi nízká (plevely)</td><td>Trvalý</td><td>Minimalistické zahrady, sucho</td></tr>
                    <tr><td><strong>Živé koberečky</strong></td><td>100–250 Kč</td><td>Nízká</td><td>Trvalý</td><td>Stín, svah, pod stromy</td></tr>
                    <tr><td><strong>Terasa / dlažba</strong></td><td>500–1 500 Kč</td><td>Minimální (zametání)</td><td>10–30 let</td><td>Posezení, příjezdové plochy</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Živé koberečky (plazivý dřišťál, skalník, mateřídouška, rozchodník) jsou skvělá alternativa trávníku ve stínu nebo pod stromy, kde tráva špatně roste. Porostou samy a nepotřebuješ je sekat.</div>
            </section>

            <section id="rozpocet">
              <h2>Plán etap a rozpočet</h2>
              <p>Celou zahradu najednou nerealizuj – ať finančně ani fyzicky. Rozděl realizaci do 2–4 etap podle priorit. Začni tím, co nevratně ovlivní zbytek: terénní úpravy, přívody vody, zpevněné plochy a základní stromy.</p>
              <h3>Doporučené pořadí etap</h3>
              <ol>
                <li><strong>Etapa 1 (rok 1, jaro–podzim):</strong> Terénní úpravy, přívody vody, terasa nebo zpevněné plochy, stromy a větší keře</li>
                <li><strong>Etapa 2 (rok 1–2):</strong> Trávník nebo jeho alternativa, záhony s trvalkami a keři, oplocení záhonů</li>
                <li><strong>Etapa 3 (rok 2–3):</strong> Doplnění rostlin, zeleninový záhon, dekorace, osvětlení</li>
                <li><strong>Etapa 4 (průběžně):</strong> Záhradní domek, závlaha, altán, drobné opravy</li>
              </ol>
              <h3>Orientační ceny</h3>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Práce / materiál</th><th>Svépomocí</th><th>S firmou</th><th>Poznámka</th></tr></thead>
                  <tbody>
                    <tr><td>Záhon s trvalkami (m²)</td><td>200–400 Kč</td><td>600–1 200 Kč</td><td>Včetně rostlin a substrátu</td></tr>
                    <tr><td>Výsev trávníku (m²)</td><td>20–60 Kč</td><td>150–300 Kč</td><td>Osivo + příprava půdy</td></tr>
                    <tr><td>Travní koberce (m²)</td><td>150–300 Kč</td><td>350–600 Kč</td><td>Role + pokládka</td></tr>
                    <tr><td>Betonová dlažba – terasa (m²)</td><td>400–700 Kč</td><td>900–1 800 Kč</td><td>Materiál + podklad</td></tr>
                    <tr><td>Dřevěná terasa (m²)</td><td>600–1 000 Kč</td><td>1 200–2 500 Kč</td><td>Kompozit nebo masiv</td></tr>
                    <tr><td>Zahradní projekt (celý)</td><td>0 Kč</td><td>5 000–40 000 Kč</td><td>Dle rozsahu</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Největší úsporu při svépomoci uděláš na pracovní síle – materiál většinou vychází podobně. Firma se vyplatí na terénní úpravy s technikou a pokládku terasy, kde je přesnost důležitá. Výsadba rostlin je naopak ideální práce pro svépomoc.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Kolik stojí návrh zahrady od zahradního architekta?", a: "Základní projekt zahrady u architekta stojí 5 000–20 000 Kč podle velikosti pozemku a rozsahu návrhu. Za celkový projekt se situačním plánem, výběrem rostlin a výkresem terasy zaplatíš 15 000–40 000 Kč. Svépomocné plánování nic nestojí." },
                  { q: "Kdy je nejlepší čas začít se zahradou?", a: "Plánování začni kdykoli, ideálně v zimě. Realizaci rozděl na etapy: přípravu půdy a terénní úpravy na podzim nebo brzy na jaře, výsev trávníku na jaro (duben–květen) nebo podzim (srpen–září), výsadbu dřevin na podzim." },
                  { q: "Jak zjistit typ půdy na zahradě?", a: "Jednoduchý test: vezmi hrst vlhké půdy a pokus se z ní vymodelovat váleček. Hlinitopísčitá půda se rozpadá – ideální základ. Jílovitá půda drží tvar dobře, ale je těžká – přidej písek a kompost. Písčitá půda se vůbec neslepí – přidej kompost pro lepší zadržení vody." },
                  { q: "Kolik rostlin potřebuji na záhon?", a: "Záleží na druhu: trvalky se obvykle sázejí po 3–5 kusech v hloučcích, keře po 1–3 kusech na m². Jako orientace: na 1 m² záhonu počítej 3–6 rostlin trvalek, nebo 1–2 keře. Hustota závisí i na konečném vzrůstu daného druhu." },
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
                <li><a href="#analyza">Analýza pozemku</a></li>
                <li><a href="#zony">Zónování zahrady</a></li>
                <li><a href="#styl">Výběr stylu</a></li>
                <li><a href="#rostliny">Výběr rostlin</a></li>
                <li><a href="#travnik">Trávník vs. alternativy</a></li>
                <li><a href="#rozpocet">Plán etap a rozpočet</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/zahrada" className="sidebar-cat-link">🌿 Zahrada & terasa<span>články →</span></Link>
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
