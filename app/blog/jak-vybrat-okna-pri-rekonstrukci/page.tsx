import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak vybrat nová okna při rekonstrukci bytu nebo domu",
  description: "Materiál rámů, počet komor, izolační trojskla a montáž – na co se zaměřit při výměně oken.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-vybrat-okna-pri-rekonstrukci" },
  openGraph: { title: "Jak vybrat nová okna při rekonstrukci bytu nebo domu", description: "Materiál rámů, počet komor, izolační trojskla a montáž – kompletní průvodce výběrem oken.", url: "https://www.domovniguru.cz/blog/jak-vybrat-okna-pri-rekonstrukci", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-12T08:00:00Z", modifiedTime: "2026-06-12T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20vybrat%20nov%C3%A1%20okna%20p%C5%99i%20rekonstrukci%20bytu%20nebo%20domu&cat=blog", width: 1200, height: 630, alt: "Jak vybrat nová okna při rekonstrukci bytu nebo domu" }] },
  twitter: { card: "summary_large_image", title: "Jak vybrat nová okna při rekonstrukci bytu nebo domu", description: "Materiál rámů, počet komor, izolační trojskla a montáž – na co se zaměřit." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/jak-vybrat-okna-pri-rekonstrukci#article", "headline": "Jak vybrat nová okna při rekonstrukci bytu nebo domu", "datePublished": "2026-06-12T08:00:00Z", "dateModified": "2026-06-12T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["výměna oken", "plastová okna", "dřevěná okna", "dřevohliníková okna", "izolační trojskla", "dotace na okna"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Stěhování & rekonstrukce", "item": "https://www.domovniguru.cz/blog/kategorie/stehovani" }, { "@type": "ListItem", "position": 4, "name": "Jak vybrat nová okna při rekonstrukci", "item": "https://www.domovniguru.cz/blog/jak-vybrat-okna-pri-rekonstrukci" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jaký materiál okenních rámů je nejlepší?", "acceptedAnswer": { "@type": "Answer", "text": "Záleží na rozpočtu a typu budovy. Plast je nejlevnější a bezúdržbový, dřevo má nejlepší vzhled a tepelné vlastnosti, dřevohliník kombinuje obojí za vyšší cenu a hliník se hodí spíš na velké prosklené plochy." } }, { "@type": "Question", "name": "Kolik komor by měl mít okenní rám?", "acceptedAnswer": { "@type": "Answer", "text": "Pro běžnou rekonstrukci se doporučuje minimálně 5 komor u plastových oken, ideálně 6–7 komor s hloubkou rámu 70–88 mm. Více komor znamená lepší tepelnou izolaci rámu." } }, { "@type": "Question", "name": "Vyplatí se trojskla, nebo stačí dvojskla?", "acceptedAnswer": { "@type": "Answer", "text": "U novostaveb a kompletních rekonstrukcí se dnes téměř vždy volí trojskla s hodnotou Uw kolem 0,7–0,9 W/m²K. Dvojskla mají smysl jen u méně zateplených staveb nebo z cenových důvodů u méně využívaných prostor." } }, { "@type": "Question", "name": "Jak moc ovlivní montáž kvalitu okna?", "acceptedAnswer": { "@type": "Answer", "text": "Velmi výrazně. I nejkvalitnější okno bude tepelně netěsné a poškodí se vlhkostí, pokud montáž neřeší správné kotvení, parotěsnou pásku zevnitř a paropropustnou zvenku. Špatná montáž může znehodnotit i 30 % izolačních vlastností okna." } }, { "@type": "Question", "name": "Na jakou dotaci mám nárok při výměně oken?", "acceptedAnswer": { "@type": "Answer", "text": "V programu Nová zelená úsporám lze získat dotaci na výměnu oken a dveří v rámci komplexního i dílčího zateplení, typicky v řádu stovek korun za m² podle splněných parametrů. Podmínkou je dosažení požadovaného součinitele prostupu tepla a realizace odbornou firmou." } }] }] };

const RELATED = [
  { title: "Jak utěsnit okna na zimu – co skutečně funguje", href: "/blog/jak-utesnit-okna-na-zimu", read: "4 min" },
  { title: "Jak zateplovat dům – fasáda, střecha, podlaha a návratnost", href: "/blog/jak-zateplit-dum", read: "6 min" },
  { title: "Jak naplánovat rekonstrukci bytu – rozpočet a pořadí prací", href: "/blog/planovani-rekonstrukce-bytu", read: "6 min" },
  { title: "Zateplení domu: kolik stojí a za jak dlouho se vrátí", href: "/blog/navratnost-zatepleni-domu", read: "5 min" },
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
              <span>Jak vybrat nová okna při rekonstrukci</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏠 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 7 min čtení</span>
              </div>
              <h1 className="article-h1">Jak vybrat nová okna při rekonstrukci bytu nebo domu</h1>
              <p className="article-lead">Výměna oken je jedna z investic, která se ti vrátí na nižších účtech za energie i na pohodě v interiéru – pokud ji uděláš správně. Rozdíly mezi materiály, počty komor a typy zasklení jsou obrovské a chyby v montáži dokážou pokazit i to nejlepší okno. Tady je přehled, na co se zaměřit.</p>
              <div className="article-meta-row"><span>Aktualizováno: 12. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#material">Materiál rámu – plast, dřevo, dřevohliník, hliník</a></li>
                <li><a href="#komory">Počet komor a tepelná izolace rámu</a></li>
                <li><a href="#zasklen">Dvojskla vs. trojskla a hodnota Uw</a></li>
                <li><a href="#kovani">Kování a typy otevírání</a></li>
                <li><a href="#barvy">Barvy a povrchové úpravy</a></li>
                <li><a href="#montaz">Správná montáž oken</a></li>
                <li><a href="#cena">Náklady a dotace na výměnu oken</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="material">
              <h2>Materiál rámu – plast, dřevo, dřevohliník, hliník</h2>
              <p>Materiál rámu je první a nejdůležitější rozhodnutí. Ovlivňuje cenu, vzhled, údržbu i tepelné vlastnosti okna na desítky let dopředu.</p>
              <h3>Plastová okna</h3>
              <p>Nejrozšířenější varianta u rekonstrukcí bytů i domů. Plast (PVC) je levný, bezúdržbový, dobře izoluje a vydrží 30–40 let bez nutnosti renovace povrchu. Nevýhodou je menší pevnost profilu u velkých rozměrů a omezenější barevné a designové možnosti – i když dnes existují i dekory imitující dřevo.</p>
              <h3>Dřevěná okna</h3>
              <p>Dřevo má nejlepší přirozené tepelně-izolační vlastnosti a klasický, teplý vzhled, který se hodí do starších domů a památkově chráněných objektů. Nevýhodou je vyšší cena a nutnost pravidelné údržby – nátěr je potřeba obnovovat zhruba každých 5–8 let, jinak hrozí poškození vlhkostí.</p>
              <h3>Dřevohliníková okna</h3>
              <p>Kombinace dřevěného rámu zevnitř a hliníkového opláštění zvenku. Dostaneš tak teplý vzhled interiéru i bezúdržbovou odolnou venkovní vrstvu, která snese počasí bez nátěrů. Cena je ale výrazně vyšší než u plastu i samotného dřeva – počítej s prémiovou kategorií.</p>
              <h3>Hliníková okna</h3>
              <p>Hliník je extrémně pevný a štíhlý, takže se hodí pro velké prosklené plochy, posuvné systémy nebo moderní architektonické řešení. Sám o sobě má horší tepelné vlastnosti, ale kvalitní profily s přerušeným tepelným mostem (tzv. termoizolační přerušení) je dorovnají na úroveň plastu. Do běžné bytové rekonstrukce se používá spíš výjimečně, často kvůli ceně.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pro klasický byt nebo rodinný dům je nejčastější volbou kvalitní plast – poměr cena/výkon je nejlepší. Dřevo a dřevohliník volí lidé, kterým záleží na vzhledu a mají na to rozpočet.</div>
            </section>

            <section id="komory">
              <h2>Počet komor a tepelná izolace rámu</h2>
              <p>Plastová okna se skládají z komor – dutin uvnitř profilu, které slouží jako tepelná izolace a zvyšují pevnost rámu. Obecně platí: více komor a hlubší profil znamená lepší izolaci, ale i vyšší cenu.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Hloubka profilu</th><th>Počet komor</th><th>Vhodnost</th></tr></thead>
                  <tbody>
                    <tr><td>58–60 mm</td><td>3–4 komory</td><td>Základní úroveň, dnes spíš na ústupu</td></tr>
                    <tr><td>70–76 mm</td><td>5–6 komor</td><td>Standard pro běžnou rekonstrukci</td></tr>
                    <tr><td>76–88 mm</td><td>6–7 komor</td><td>Vyšší izolace, vhodné pro nízkoenergetické domy</td></tr>
                    <tr><td>88 mm a více</td><td>7–8 komor</td><td>Pasivní standard</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Kromě počtu komor se sleduje i materiál výztuhy uvnitř rámu (ocelová nebo kompozitní) a typ distančního rámečku mezi skly – nejlepší jsou tzv. „teplé" rámečky z plastu nebo nerezi, které omezují kondenzaci na okrajích skel. Pro celkovou tepelnou bilanci budovy se vyplatí zvážit i <Link href="/blog/jak-zateplit-dum" style={{ color: "#2a6496", textDecoration: "underline" }}>zateplení domu</Link> jako celku – okna a fasáda na sebe navazují a samotná výměna oken bez řešení tepelných mostů kolem rámů nemusí přinést očekávanou úsporu.</p>
            </section>

            <section id="zasklen">
              <h2>Dvojskla vs. trojskla a hodnota Uw</h2>
              <p>Klíčovým parametrem celého okna je hodnota <strong>Uw</strong> (součinitel prostupu tepla okna) – udává, kolik tepla unikne přes 1 m² okna při rozdílu teplot 1 °C. Čím nižší číslo, tím lépe okno izoluje.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ zasklení</th><th>Orientační Uw</th><th>Použití</th></tr></thead>
                  <tbody>
                    <tr><td>Dvojskla</td><td>1,1–1,4 W/m²K</td><td>Starší stavby, méně náročné prostory, nižší cena</td></tr>
                    <tr><td>Trojskla (standard)</td><td>0,7–0,9 W/m²K</td><td>Běžná rekonstrukce, novostavby</td></tr>
                    <tr><td>Trojskla (pasivní)</td><td>0,6 W/m²K a méně</td><td>Pasivní a nízkoenergetické domy</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Dnes se u kompletních výměn téměř vždy volí trojskla – cenový rozdíl oproti dvojsklům je při výměně celého okna relativně malý, zatímco úspora na vytápění je dlouhodobě výrazná. Dvojskla mají smysl spíš u dílčích výměn nebo u prostorů, kde tepelné ztráty tolik nevadí (např. nevytápěná chodba, sklad).</p>
              <p>Dobré okno potřebuje i kvalitní zasklívací lišty a meziskelní distanční rámeček – ty totiž ovlivňují, jak rychle se okno na okrajích orosuje a jak rychle stárne tmel mezi skly.</p>
            </section>

            <section id="kovani">
              <h2>Kování a typy otevírání</h2>
              <p>Kvalita kování rozhoduje o tom, jak dlouho okno bude bezproblémově fungovat – levné kování se časem uvolňuje, okno netěsní a křídlo začne „padat".</p>
              <ul>
                <li><strong>Otevíravé (otočné)</strong> – klasické otevírání do strany, vhodné pro pravidelné větrání a snadné čištění z interiéru</li>
                <li><strong>Sklopné</strong> – křídlo se sklopí v horní části, ideální pro mikroventilaci bez rizika vloupání nebo průvanu</li>
                <li><strong>Otevíravo-sklopné (OS)</strong> – kombinace obou režimů, dnes naprostý standard u většiny oken</li>
                <li><strong>Fixní (neotevíravé)</strong> – pevné zasklení bez křídla, levnější a s nejlepší tepelnou izolací, ale bez možnosti větrání – hodí se na velká okna doplněná jedním otevíravým křídlem vedle</li>
              </ul>
              <p>U kování se vyplatí připlatit za mikroventilaci (štěrbinové větrání v zavřené poloze) a bezpečnostní kování s více uzavíracími body – zvyšuje to odolnost proti vloupání a zároveň lépe dotahuje křídlo k rámu, což zlepšuje těsnost.</p>
            </section>

            <section id="barvy">
              <h2>Barvy a povrchové úpravy</h2>
              <p>Bílý plast je nejlevnější varianta, ale dnes má smysl uvažovat i o jiných řešeních – zvlášť pokud chceš okna sladit s fasádou nebo interiérem.</p>
              <ul>
                <li><strong>Fólie (laminace)</strong> – plastový profil je oboustranně nebo jednostranně polepen fólií v barvě nebo dřevodekoru. Levnější varianta než celobarevné profily, ale fólie může časem na sluneční straně blednout</li>
                <li><strong>Dřevodekor</strong> – velmi populární kombinace bezúdržbovosti plastu s vizuálem dřeva (např. zlatý dub, ořech, antracit se strukturou dřeva)</li>
                <li><strong>Celobarevné profily (masa)</strong> – barva je v celé hmotě profilu, odolnější vůči poškrábání a UV záření než fólie, ale dražší</li>
                <li><strong>Bicolor</strong> – jiná barva zevnitř a zvenku, oblíbené třeba bílý interiér a antracitový nebo dřevodekorový exteriér</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Tmavé barvy (antracit, černá) se více zahřívají na slunci, což může profil více zatěžovat – u kvalitních výrobců je to ošetřeno speciálními recepturami plastu, u levných oken se ale může projevit deformací.</div>
            </section>

            <section id="montaz">
              <h2>Správná montáž oken</h2>
              <p>I sebelepší okno nebude fungovat, pokud bude špatně namontované. Montáž je často podceňovaná část a chyby se projeví až po čase – plísní na rámu, průvanem nebo praskáním omítky kolem okna.</p>
              <h3>Kotvení</h3>
              <p>Okno musí být ukotveno tak, aby se neprohýbalo a zároveň mohlo mírně dýchat s teplotními změnami. Používají se kotevní šrouby, kotvy nebo rámové hmoždinky podle typu stěny a umístění okna v konstrukci (do líce zdi, do izolace nebo předsazená montáž).</p>
              <h3>Parotěsná a paropropustná páska</h3>
              <p>Klíčová zásada správné montáže: <strong>zevnitř těsně, zvenku difuzně otevřeně</strong>. To znamená:</p>
              <ul>
                <li><strong>Parotěsná páska (vnitřní strana)</strong> – brání vlhkosti z interiéru pronikat do spáry kolem rámu, kde by mohla kondenzovat a způsobit plíseň</li>
                <li><strong>Paropropustná páska (vnější strana)</strong> – chrání spáru před deštěm a větrem, ale umožňuje odvod případné vlhkosti směrem ven</li>
              </ul>
              <p>Pokud se tyto pásky zamění nebo vynechají, vlhkost se v konstrukci hromadí a během několika let se objeví plíseň a degradace izolační pěny.</p>
              <h3>Montážní pěna a těsnění</h3>
              <p>Spára mezi rámem a zdivem se vyplňuje montážní pěnou, která musí být rovnoměrně rozložená bez mezer. Příliš velká spára (nad 3 cm) se hůř vyplňuje a izoluje, příliš malá neumožní pěně správně dotěsnit.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Při výběru dodavatele se vždy ptej, jak řeší parotěsnost a paropropustnost spáry – pokud odpoví jen „zapěníme to", je to varovný signál.</div>
            </section>

            <section id="cena">
              <h2>Náklady a dotace na výměnu oken</h2>
              <p>Cena okna se skládá z více faktorů a rozdíly mezi nabídkami bývají velké i u zdánlivě podobných parametrů.</p>
              <h3>Co ovlivňuje cenu</h3>
              <ul>
                <li><strong>Materiál rámu</strong> – plast nejlevnější, dřevohliník nejdražší</li>
                <li><strong>Velikost a tvar okna</strong> – atypické rozměry a tvary (oblouky, trojúhelníky) zvyšují cenu</li>
                <li><strong>Typ zasklení</strong> – trojskla jsou dražší než dvojskla, bezpečnostní skla připlácejí ještě víc</li>
                <li><strong>Kování a doplňky</strong> – mikroventilace, bezpečnostní kování, klika s uzamykáním</li>
                <li><strong>Montáž</strong> – cena za montáž a demontáž starého okna, likvidace suti, vnitřní a venkovní začištění (parapety, omítky)</li>
                <li><strong>Počet kusů</strong> – při výměně všech oken najednou bývá cena za kus nižší než při jednotlivých objednávkách</li>
              </ul>
              <p>Orientačně se ceny plastových oken s trojsklem pohybují v rozsahu, který se liší podle dodavatele a regionu – proto je vždy lepší poptat alespoň 3 nabídky se stejnou specifikací. Při hodnocení nabídek si vždy nech rozepsat, co je a co není v ceně (montáž, parapety, odvoz a likvidace starých oken).</p>
              <h3>Dotace Nová zelená úsporám</h3>
              <p>V rámci programu <strong>Nová zelená úsporám</strong> lze čerpat dotaci na výměnu oken a venkovních dveří, ať jako součást komplexního zateplení, nebo jako dílčí opatření. Podmínkou je splnění požadovaných tepelně-technických parametrů (hodnota Uw) a realizace odbornou firmou s potřebnými certifikáty. Výši dotace ovlivňuje plocha vyměněných výplní a celkový rozsah zateplení – pokud řešíš okna společně s <Link href="/blog/jak-zateplit-dum" style={{ color: "#2a6496", textDecoration: "underline" }}>zateplením domu</Link>, dotace bývá výhodnější než při samostatné výměně oken. Před podáním žádosti je vhodné si nechat zpracovat odborný posudek, který stanoví, jaká opatření a v jakém rozsahu se vyplatí – orientační představu o úsporách a návratnosti zateplení si můžeš udělat i pomocí naší <Link href="/kalkulacky/uspora-zatepleni" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačky úspor ze zateplení</Link>.</p>
              <h3>Na co se ptát dodavatele</h3>
              <ul>
                <li>Jaký je přesný profil, hloubka a počet komor, včetně technického listu výrobce</li>
                <li>Jaká je hodnota Uw celého okna (ne jen samotného skla – Ug)</li>
                <li>Kdo provádí montáž – vlastní montážníci, nebo subdodavatel</li>
                <li>Jak řeší parotěsné a paropropustné pásky a kotvení do dané konstrukce</li>
                <li>Co je součástí ceny – demontáž, odvoz suti, vnitřní a venkovní začištění, parapety</li>
                <li>Jaká je záruka na okna a samostatně na montáž</li>
                <li>Referenční zákazníci nebo realizace v okolí, které je možné vidět osobně</li>
              </ul>
              <p>Výběr dodavatele oken je jen jedna část širší rekonstrukce – pokud plánuješ víc úprav najednou, vyplatí se mít celkový přehled o pořadí prací a rozpočtu.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jaký materiál okenních rámů je nejlepší?", a: "Záleží na rozpočtu a typu budovy. Plast je nejlevnější a bezúdržbový, dřevo má nejlepší vzhled a tepelné vlastnosti, dřevohliník kombinuje obojí za vyšší cenu a hliník se hodí spíš na velké prosklené plochy." },
                  { q: "Kolik komor by měl mít okenní rám?", a: "Pro běžnou rekonstrukci se doporučuje minimálně 5 komor u plastových oken, ideálně 6–7 komor s hloubkou rámu 70–88 mm. Více komor znamená lepší tepelnou izolaci rámu." },
                  { q: "Vyplatí se trojskla, nebo stačí dvojskla?", a: "U novostaveb a kompletních rekonstrukcí se dnes téměř vždy volí trojskla s hodnotou Uw kolem 0,7–0,9 W/m²K. Dvojskla mají smysl jen u méně zateplených staveb nebo z cenových důvodů u méně využívaných prostor." },
                  { q: "Jak moc ovlivní montáž kvalitu okna?", a: "Velmi výrazně. I nejkvalitnější okno bude tepelně netěsné a poškodí se vlhkostí, pokud montáž neřeší správné kotvení, parotěsnou pásku zevnitř a paropropustnou zvenku. Špatná montáž může znehodnotit i 30 % izolačních vlastností okna." },
                  { q: "Na jakou dotaci mám nárok při výměně oken?", a: "V programu Nová zelená úsporám lze získat dotaci na výměnu oken a dveří v rámci komplexního i dílčího zateplení, typicky v řádu stovek korun za m² podle splněných parametrů. Podmínkou je dosažení požadovaného součinitele prostupu tepla a realizace odbornou firmou." },
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
                <li><a href="#material">Materiál rámu</a></li>
                <li><a href="#komory">Počet komor a izolace</a></li>
                <li><a href="#zasklen">Dvojskla vs. trojskla</a></li>
                <li><a href="#kovani">Kování a otevírání</a></li>
                <li><a href="#barvy">Barvy a povrchy</a></li>
                <li><a href="#montaz">Správná montáž</a></li>
                <li><a href="#cena">Cena a dotace</a></li>
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
