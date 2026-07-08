import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Barva na beton a venkovní povrchy",
  description: "Proč beton potřebuje speciální barvy, jaké typy nátěrů vybrat pro podlahy, fasády a terasy, jak připravit povrch a jak dlouho nátěr vydrží.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/barva-na-beton-a-venkovni-povrchy" },
  openGraph: { title: "Barva na beton a venkovní povrchy", description: "Proč beton potřebuje speciální barvy, jaké typy nátěrů vybrat pro podlahy, fasády a terasy, jak připravit povrch a jak dlouho nátěr vydrží.", url: "https://www.domovniguru.cz/blog/barva-na-beton-a-venkovni-povrchy", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-07-08T08:00:00Z", modifiedTime: "2026-07-08T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Barva%20na%20beton%20a%20vn%C4%9Bj%C5%A1%C3%AD%20povrchy&cat=blog", width: 1200, height: 630, alt: "Barva na beton a venkovní povrchy" }] },
  twitter: { card: "summary_large_image", title: "Barva na beton a venkovní povrchy", description: "Proč beton potřebuje speciální barvy, jaké typy nátěrů vybrat pro podlahy, fasády a terasy, jak připravit povrch a jak dlouho nátěr vydrží." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/barva-na-beton-a-venkovni-povrchy#article", "headline": "Barva na beton a venkovní povrchy", "datePublished": "2026-07-08T08:00:00Z", "dateModified": "2026-07-08T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["barva na beton", "nátěr betonu", "epoxidová barva na podlahu", "fasádní barva", "barva na terasu", "polyuretanový nátěr"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Malování & barvy", "item": "https://www.domovniguru.cz/blog/kategorie/malovani" }, { "@type": "ListItem", "position": 4, "name": "Barva na beton a venkovní povrchy", "item": "https://www.domovniguru.cz/blog/barva-na-beton-a-venkovni-povrchy" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jaká barva je nejlepší na betonovou garáž nebo sklep?", "acceptedAnswer": { "@type": "Answer", "text": "Na betonovou podlahu garáže nebo sklepa je nejlepší epoxidová barva na beton (dvousložkový epoxid). Je mimořádně odolná vůči chemikáliím (olej, benzin, posypová sůl), mechanickému namáhání a vodě. Alternativou je polyuretanový nátěr, který je pružnější a lépe odolává venkovním teplotním výkyvům. Obě řešení vyžadují řádnou přípravu povrchu – broušení a penetraci." } }, { "@type": "Question", "name": "Musím beton před natíráním penetrovat?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, penetrace je u betonu téměř vždy nutná. Beton je vysoce savý materiál a bez penetrace barva nerovnoměrně vsákne, výsledný povrch bude nerovnoměrný a odolnost nátěru výrazně nižší. Pro beton se používá speciální hloubková penetrace na beton (epoxidová nebo akrylátová) – ne universální malířská penetra pro omítky." } }, { "@type": "Question", "name": "Jak dlouho vydrží nátěr na betonové terase?", "acceptedAnswer": { "@type": "Answer", "text": "Kvalitní akrylátový nebo polyuretanový nátěr na betonové terase vydrží při správné přípravě a aplikaci 5–10 let. Epoxidové nátěry jsou odolnější vůči chemikáliím, ale na venkovní povrchy vystavené UV záření se nedoporučují – UV světlo je degraduje a nátěr žloutne a křídovatí. Pro terasy na slunci volte polyuretanové nebo akrylátové UV stabilní nátěry." } }, { "@type": "Question", "name": "Lze na beton přidat protiskluzové přísady?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, do většiny nátěrů na beton lze přimíchat protiskluzové přísady – nejčastěji křemičitý písek (křemenná drť) s jemností 0,1–0,5 mm. Přísada se přimíchá do barvy před aplikací nebo se posype na čerstvě nanesený nátěr a zatlačí válcem. Protiskluzová povrchy jsou doporučena zejména na venkovní terasy, schodiště a podlahy v mokrých prostorách." } }, { "@type": "Question", "name": "Jak dlouho musím čekat po natření betonu, než mohu chodit nebo parkovat?", "acceptedAnswer": { "@type": "Answer", "text": "Pro pěší provoz je epoxidový nebo polyuretanový nátěr obvykle schůdný po 24 hodinách od nanesení poslední vrstvy. Provoz lehkých vozidel je možný nejdříve za 48–72 hodin. Plné vytvrzení a maximální odolnost (včetně chemikálií) je dosažena po 7 dnech. Tyto doby platí při teplotě 20 °C – za nižších teplot schnutí výrazně zpomaluje." } }] }] };

const RELATED = [
  { title: "Malování betonové podlahy v garáži", href: "/blog/malovani-betonove-podlahy-garaz", read: "5 min" },
  { title: "Obnova fasády nátěrem: postup a tipy", href: "/blog/obnova-fasady-naterem", read: "6 min" },
  { title: "Nátěr venkovního dřeva: příprava a výběr barvy", href: "/blog/natrit-venkovni-drevo", read: "5 min" },
  { title: "Jak vybrat malíře nebo malířskou firmu", href: "/blog/jak-vybrat-malire-a-firmu", read: "5 min" },
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
              <Link href="/blog/kategorie/malovani">Malování &amp; barvy</Link><span className="breadcrumb-sep">/</span>
              <span>Barva na beton a venkovní povrchy</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování &amp; barvy</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Barva na beton a venkovní povrchy</h1>
              <p className="article-lead">Beton je skvělý stavební materiál, ale bez povrchové ochrany praská, nasává vlhkost a prší do něj prach a oleje. Správně zvolená barva nebo nátěr ho ochrání na desetiletí – ale musíte vybrat ten správný typ pro konkrétní použití a řádně připravit povrch.</p>
              <div className="article-meta-row"><span>Aktualizováno: 8. července 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#proc-specialni">Proč beton vyžaduje speciální barvy</a></li>
                <li><a href="#typy-nateru">Typy nátěrů na beton</a></li>
                <li><a href="#priprava">Příprava povrchu</a></li>
                <li><a href="#aplikace">Aplikace a ošetřovací doby</a></li>
                <li><a href="#provoz-odolnost">Provoz a odolnost</a></li>
                <li><a href="#barevne-moznosti">Barevné možnosti a protiskluzové přísady</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="proc-specialni">
              <h2>Proč beton vyžaduje speciální barvy</h2>
              <p>Beton se od omítky nebo dřeva liší v několika klíčových vlastnostech, které určují, jaký nátěr na něj lze použít a co od něj očekávat:</p>
              <h3>Pórovitost a savost</h3>
              <p>Beton je vysoce pórovitý materiál. Vlhkost, oleje a chemické látky do něj snadno pronikají kapilárním tahem. Standardní malířská barva nebo latexový nátěr na takový povrch přilne špatně – nepronikne dostatečně hluboko a po čase se odloupe. Speciální nátěry na beton mají chemické složení přizpůsobené vysoké savosti a pH betonu (čerstvý beton je silně alkalický).</p>
              <h3>Vlhkost a mráz</h3>
              <p>Venkovní betonové povrchy jsou vystaveny dešti, sněhu a mrznutí. Voda, která se vsákne do betonu a zmrzne, expanduje a způsobuje mikrotrhliny a odlupování – fenomén zvaný mrazové popraskání. Ochranný nátěr, který nepropustí vodu nebo ji alespoň zpomalí, výrazně prodlouží životnost betonu.</p>
              <h3>Chemická zátěž</h3>
              <p>Betonové podlahy v garážích, dílnách nebo průmyslových prostorách jsou vystaveny olejům, benzinu, posypovým solím a chemikáliím. Tyto látky degradují běžné nátěry a proniká do betonu. Epoxidové a polyuretanové nátěry jsou chemicky odolné a vytvářejí vrstvu, která tyto vlivy blokuje.</p>
              <h3>UV záření na fasádách</h3>
              <p>Fasádní betonové povrchy musí odolat UV záření, dešti, teplotním rozdílům mezi dnem a nocí i sezónním výkyvům. Nátěry musí být paropropustné (aby se nevytvářely bubliny od vlhkosti zevnitř) a zároveň vodoodpudivé z vnějšku.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Nový beton je nutné nechat dostatečně vyzrát před natíráním – zpravidla minimálně 28 dní. Čerstvý beton obsahuje volné vápno a vysokou vlhkost, které nátěr zdola narušují. Vždy sledujte doporučení výrobce nátěru.</div>
            </section>

            <section id="typy-nateru">
              <h2>Typy nátěrů na beton a venkovní povrchy</h2>
              <p>Existuje několik základních kategorií nátěrů na beton, každá s jinými vlastnostmi a určením. Výběr závisí na tom, kde beton je a jaké zátěži je vystaven.</p>
              <h3>Epoxidové nátěry – pro garáže a průmyslové podlahy</h3>
              <p>Epoxidové barvy jsou dvousložkové (pryskyřice + tužidlo, mícháte před aplikací) a vytváří extrémně tvrdý, chemicky odolný povrch. Výhody:</p>
              <ul>
                <li>Odolnost vůči olejům, benzinu, chemikáliím a mechanickému opotřebení</li>
                <li>Snadná údržba – povrch se snadno čistí</li>
                <li>Vynikající přilnavost k betonu při správné přípravě povrchu</li>
                <li>Dostupné v různých barvách a povrchových strukturách</li>
              </ul>
              <p>Nevýhody: epoxid degraduje na přímém slunečním světle – žloutne a křídovatí. Na venkovní povrchy vystavené UV záření se proto epoxid nedoporučuje. Použijte ho na vnitřní garáže, sklepy, dílny a průmyslové prostory.</p>
              <h3>Polyuretanové nátěry – pro terasy a venkovní povrchy</h3>
              <p>Polyuretanové nátěry jsou pružné, UV stabilní a odolné vůči povětrnostním vlivům. Jsou ideální volbou pro:</p>
              <ul>
                <li>Betonové terasy a balkony</li>
                <li>Venkovní schodiště</li>
                <li>Venkovní garáže a parkovací plochy</li>
                <li>Výrobní haly a prostory s přirozeným osvětlením</li>
              </ul>
              <p>Polyuretanové nátěry existují jako jednosložkové (vlhkostí vytvrzované) nebo dvousložkové. Dvousložkové jsou odolnější a výkonnostně lepší. Jejich cena je vyšší než epoxidů, ale delší životnost a UV stabilita to kompenzují.</p>
              <h3>Akrylátové fasádní barvy – pro betonové fasády</h3>
              <p>Pro betonové fasády a obvodové stěny se používají akrylátové fasádní barvy. Klíčové vlastnosti:</p>
              <ul>
                <li><strong>Paropropustnost</strong> – fasádní barva musí „dýchat", aby vlhkost z konstrukce mohla unikat ven, jinak se tvoří bubliny a odlupování</li>
                <li><strong>Vodoodpudivost</strong> – barva zároveň brání srážkové vodě v průniku zevnitř</li>
                <li><strong>UV stabilita</strong> – pigmenty odolné slunci bez blednutí po dobu 5–10+ let</li>
                <li><strong>Mikrobiální odolnost</strong> – přídavek biocidů zabraňuje růstu řas a plísní na fasádě</li>
              </ul>
              <h3>Srovnání typů nátěrů</h3>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ nátěru</th><th>Nejlepší použití</th><th>UV odolnost</th><th>Chem. odolnost</th><th>Životnost</th></tr></thead>
                  <tbody>
                    <tr><td>Epoxidový</td><td>Garáže, sklepy, dílny</td><td>Nízká (žloutne)</td><td>Velmi vysoká</td><td>10–20 let interiér</td></tr>
                    <tr><td>Polyuretanový</td><td>Terasy, venkovní podlahy</td><td>Vysoká</td><td>Vysoká</td><td>5–15 let</td></tr>
                    <tr><td>Akrylátový fasádní</td><td>Fasády, obvodové stěny</td><td>Vysoká</td><td>Střední</td><td>5–10 let</td></tr>
                    <tr><td>Penetrační impregnace</td><td>Ochrana betonu bez barevné změny</td><td>Vysoká</td><td>Střední</td><td>5–10 let</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="priprava">
              <h2>Příprava povrchu betonu</h2>
              <p>Příprava povrchu je u betonu kriticky důležitá – možná ještě více než u jiných materiálů. Jakákoliv nečistota, mastnota nebo nekompaktní vrstva povrchu povede k selhání nátěru, bez ohledu na kvalitu barvy.</p>
              <h3>Broušení a frézování</h3>
              <p>Nové betonové podlahy mají svrchní cementové mléko (tzv. laitance) – tenkou, kompaktní, ale slabě přilnavou vrstvu. Tuto vrstvu je nutné odstranit před jakýmkoliv nátěrem:</p>
              <ul>
                <li><strong>Diamantové broušení</strong> – nejúčinnější metoda; průmyslová bruska s diamantovými segmenty odstraní laitanci i znečistění; výsledkem je otevřená, drsná a savá struktura betonu připravená pro nátěr</li>
                <li><strong>Kyselinové moření (leptání)</strong> – kyselina chlorovodíková nebo fosfátová reaguje s povrchem betonu a vytvoří strukturu; méně rovnoměrné než broušení a vyžaduje důkladné neutralizování a oplachy</li>
                <li><strong>Drátěný kartáč nebo brusný papír</strong> – pro malé plochy nebo opravy; pro větší plochy nedostačující</li>
              </ul>
              <h3>Odmašťování</h3>
              <p>Olejové skvrny v garáži, otlaky od maziv nebo jakákoliv mastnota musí být odstraněna před natíráním. Použijte průmyslový odmašťovač (alkalický čistič nebo speciální odstraňovač olejů). Po odmašťování důkladně opláchněte vodou a nechte vyschnout.</p>
              <h3>Oprava trhlin a poškozených míst</h3>
              <ul>
                <li><strong>Malé trhliny</strong> – vyplňte epoxidovým nebo polyuretanovým tmelem na beton; nátěr přes neošetřené trhliny selže</li>
                <li><strong>Výmoly a díry</strong> – vyplňte rychlovazným betonem nebo speciální opravnou hmotou; povrch zarovnejte na rovinu</li>
                <li><strong>Vlhké nebo mokré místo</strong> – nejprve odstraňte příčinu vlhkosti; nátěr na vlhký beton nepřilne a za krátkou dobu se odloupe</li>
              </ul>
              <h3>Penetrace pro beton</h3>
              <p>Po přípravě povrchu naneste penetraci určenou specificky pro beton. Pro epoxidové nátěry se používá epoxidová penetrace, pro polyuretanové nátěry polyuretanová nebo akrylátová penetrace. Universální malířské penetrace pro omítky nejsou pro beton vhodné – mají jiné chemické složení a nedostatečně proniknou do struktury.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Před aplikací nátěru udělejte test vlhkosti betonu: přilepte čtvercový kus plastové fólie (50×50 cm) na betonový povrch lepicí páskou ze všech stran a nechte 24 hodin. Pokud se pod fólií srazí vlhkost, beton je příliš mokrý pro natírání. Dejte mu více času na vyschnutí nebo zjistěte příčinu vlhkosti.</div>
            </section>

            <section id="aplikace">
              <h2>Aplikace a ošetřovací doby</h2>
              <p>Aplikace nátěrů na beton má specifická pravidla, která se liší od standardního malování stěn. Dodržení těchto podmínek rozhoduje o výsledné životnosti a kvalitě nátěru.</p>
              <h3>Podmínky aplikace</h3>
              <ul>
                <li><strong>Teplota</strong> – většina nátěrů na beton vyžaduje teplotu povrchu i vzduchu 5–30 °C; pod 5 °C schnutí výrazně zpomaluje nebo se zastaví; přímé slunce a povrch nad 35 °C způsobí příliš rychlé schnutí a problematické přilnutí</li>
                <li><strong>Vlhkost vzduchu</strong> – relativní vlhkost by neměla překročit 80 %; za vlhkého počasí nebo bezprostředně po dešti nenanášejte</li>
                <li><strong>Vítr</strong> – silný vítr způsobuje nerovnoměrné schnutí a zaváti nečistoty do čerstvého nátěru; malování za klidného počasí je výrazně lepší</li>
              </ul>
              <h3>Postup aplikace</h3>
              <ol>
                <li>Naneste penetraci válcem nebo štětcem a nechte dle doporučení výrobce vyschnout (obvykle 4–24 hodin)</li>
                <li>Naneste první vrstvu nátěru – válcem s krátkým vlasem (5–8 mm) pro rovnoměrné pokrytí; rohy a spoje ošetřete štětcem</li>
                <li>Počkejte na přísušek první vrstvy (obvykle 4–8 hodin, záleží na produktu a podmínkách)</li>
                <li>Naneste druhou vrstvu kolmo na směr první – technika kříže zajistí rovnoměrnější pokrytí</li>
                <li>Pokud aplikujete protiskluzové přísady, posypte je na poslední vrstvu ihned po nanesení a lehce zatlačte prázdným válcem</li>
              </ol>
              <h3>Dvousložkové nátěry – míchání</h3>
              <p>Epoxidové a dvousložkové polyuretanové nátěry musíte smíchat přesně v poměru uvedeném výrobcem (obvykle A:B = 2:1 nebo 3:1 hmotnostně). Míchejte pomalu elektrickou míchačkou (ne příliš rychle, aby nevznikaly vzduchové bubliny) po dobu 3–5 minut. Smíchaný nátěr má omezenou dobu zpracovatelnosti (pot life) – obvykle 30–60 minut při 20 °C. Namíchejte jen tolik, kolik spotřebujete za tu dobu.</p>
            </section>

            <section id="provoz-odolnost">
              <h2>Provoz a odolnost nátěru</h2>
              <p>Doba schnutí nátěrů na beton je výrazně delší než u standardních maleb a je nutné ji respektovat.</p>
              <h3>Doby schnutí</h3>
              <ul>
                <li><strong>Přísušek / na dotek suché</strong> – zpravidla 4–8 hodin</li>
                <li><strong>Lehký pěší provoz</strong> – obvykle po 24 hodinách od poslední vrstvy</li>
                <li><strong>Normální pěší provoz a lehké předměty</strong> – po 48–72 hodinách</li>
                <li><strong>Lehká vozidla</strong> – po 72–96 hodinách</li>
                <li><strong>Plné vytvrzení a maximální odolnost</strong> – 7 dní; do té doby se vyhněte ostrým chemikáliím</li>
              </ul>
              <h3>Co ovlivňuje životnost nátěru</h3>
              <ul>
                <li><strong>Kvalita přípravy povrchu</strong> – nejdůležitější faktor; na špatně připraveném betonu nevydrží žádný nátěr</li>
                <li><strong>Tloušťka suchého filmu</strong> – tenký nátěr se rychleji opotřebuje; dodržujte doporučení výrobce o spotřebě na m²</li>
                <li><strong>Provozní zátěž</strong> – garáž s každodenním parkováním vyžaduje silnější nátěr než sklad s občasným provozem</li>
                <li><strong>Údržba</strong> – pravidelné čištění prodlužuje životnost; agresivní čisticí prostředky nátěr degradují</li>
              </ul>
              <h3>Obnova a renovace starého nátěru</h3>
              <p>Pokud je stávající nátěr pouze opotřebený, ale drží pevně, je možné jej přebrousit a nanést novou vrstvu bez odstraňování. Pokud se nátěr odlupuje nebo přilnavost je špatná, je nutné jej celý odstranit (broušením nebo tryskáním) a začít na čistém betonu od znovu. Pokud potřebujete zvážit, zda tuto práci svěřit odborníkovi, přečtěte si náš článek <Link href="/blog/jak-vybrat-malire-a-firmu" style={{ color: "#2a6496", textDecoration: "underline" }}>jak vybrat malíře nebo malířskou firmu</Link>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Na garážové podlaze v prvních 7 dnech po natírání neparkujte. Hmotnost auta a teplo pneumatik mohou zanechat otisky v ještě nevytvrzeném epoxidu.</div>
            </section>

            <section id="barevne-moznosti">
              <h2>Barevné možnosti a protiskluzové přísady</h2>
              <p>Nátěry na beton dnes nabízejí pestrý výběr barev a povrchových struktur, takže funkčnost nemusí být na úkor estetiky.</p>
              <h3>Barevný výběr</h3>
              <p>Standardní paleta nátěrů na beton zahrnuje šedé tóny (nejoblíbenější pro garáže), zemité a písečné odstíny, tmavě zelená a modrá (oblíbená pro průmyslové prostory) a bílá nebo světle šedá (pro sklady a čisté prostory). Výrobci jako Sika, Mapei, Rust-Oleum nebo Primalex nabízejí tónování do stovek barev z RAL nebo NCS vzorníků.</p>
              <p>Pro fasády betonových budov jsou barevné možnosti ještě širší – prakticky celé spektrum, s doporučením volit světlejší tóny (nižší absorpce tepla) pro zdi vystavené přímému slunci.</p>
              <h3>Efektové a dekorativní povrchy</h3>
              <ul>
                <li><strong>Flake / chip systémy</strong> – barevné floky, které se posypají na čerstvý nátěr a zapečetí průhledným topcoatem; dekorativní a zároveň protiskluzový efekt</li>
                <li><strong>Metalické efekty</strong> – pigmenty s kovovým leskem pro reprezentativní prostory nebo showroomy</li>
                <li><strong>Strukturovaný povrch</strong> – hrubší struktura přidaná do nátěru pro rustikální vzhled venkovních ploch</li>
              </ul>
              <h3>Protiskluzové přísady</h3>
              <p>Na mokré betonové plochy (terasy, vnější schodiště, průmyslové podlahy) je protiskluzová úprava zásadní z bezpečnostních důvodů.</p>
              <ul>
                <li><strong>Křemičitý písek</strong> – nejlevnější a nejrozšířenější přísada; přidává se do nátěru v množství 100–300 g/kg barvy nebo posypuje na čerstvě nanesený nátěr</li>
                <li><strong>Korund (oxid hlinitý)</strong> – tvrdší než písek, odolnější; vhodný pro průmyslové provozy s vyšším opotřebením</li>
                <li><strong>Gumové granule</strong> – pružná protiskluzová vrstva; vhodná pro dětská hřiště a sportovní povrchy</li>
              </ul>
              <p>Stupeň protiskluzovosti se hodnotí součinitelem tření (R-hodnota pro průmyslové podlahy nebo PTV pro veřejné prostory). Pro terasy a domácí použití postačí základní přísada křemičitého písku. Venkovní schodiště by mělo mít vyšší hrubost než rovná plocha.</p>
              <p>Potřebujete poradit se specifickým projektem – nátěrem garáže, fasády nebo terasy? Inspirujte se v článku o <Link href="/blog/malovani-betonove-podlahy-garaz" style={{ color: "#2a6496", textDecoration: "underline" }}>malování betonové podlahy v garáži</Link> nebo o <Link href="/blog/obnova-fasady-naterem" style={{ color: "#2a6496", textDecoration: "underline" }}>obnově fasády nátěrem</Link>.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jaká barva je nejlepší na betonovou garáž nebo sklep?", a: "Na betonovou podlahu garáže nebo sklepa je nejlepší epoxidová barva na beton (dvousložkový epoxid). Je mimořádně odolná vůči chemikáliím (olej, benzin, posypová sůl), mechanickému namáhání a vodě. Alternativou je polyuretanový nátěr, který je pružnější a lépe odolává venkovním teplotním výkyvům. Obě řešení vyžadují řádnou přípravu povrchu – broušení a penetraci." },
                  { q: "Musím beton před natíráním penetrovat?", a: "Ano, penetrace je u betonu téměř vždy nutná. Beton je vysoce savý materiál a bez penetrace barva nerovnoměrně vsákne, výsledný povrch bude nerovnoměrný a odolnost nátěru výrazně nižší. Pro beton se používá speciální hloubková penetrace na beton (epoxidová nebo akrylátová) – ne universální malířská penetrace pro omítky." },
                  { q: "Jak dlouho vydrží nátěr na betonové terase?", a: "Kvalitní akrylátový nebo polyuretanový nátěr na betonové terase vydrží při správné přípravě a aplikaci 5–10 let. Epoxidové nátěry jsou odolnější vůči chemikáliím, ale na venkovní povrchy vystavené UV záření se nedoporučují – UV světlo je degraduje a nátěr žloutne a křídovatí. Pro terasy na slunci volte polyuretanové nebo akrylátové UV stabilní nátěry." },
                  { q: "Lze na beton přidat protiskluzové přísady?", a: "Ano, do většiny nátěrů na beton lze přimíchat protiskluzové přísady – nejčastěji křemičitý písek (křemenná drť) s jemností 0,1–0,5 mm. Přísada se přimíchá do barvy před aplikací nebo se posype na čerstvě nanesený nátěr a zatlačí válcem. Protiskluzová povrchy jsou doporučena zejména na venkovní terasy, schodiště a podlahy v mokrých prostorách." },
                  { q: "Jak dlouho musím čekat po natření betonu, než mohu chodit nebo parkovat?", a: "Pro pěší provoz je epoxidový nebo polyuretanový nátěr obvykle schůdný po 24 hodinách od nanesení poslední vrstvy. Provoz lehkých vozidel je možný nejdříve za 48–72 hodin. Plné vytvrzení a maximální odolnost (včetně chemikálií) je dosažena po 7 dnech. Tyto doby platí při teplotě 20 °C – za nižších teplot schnutí výrazně zpomaluje." },
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
                    <div className="card-eyebrow-row"><span>Malování &amp; barvy</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#proc-specialni">Proč speciální barvy</a></li>
                <li><a href="#typy-nateru">Typy nátěrů</a></li>
                <li><a href="#priprava">Příprava povrchu</a></li>
                <li><a href="#aplikace">Aplikace a ošetřovací doby</a></li>
                <li><a href="#provoz-odolnost">Provoz a odolnost</a></li>
                <li><a href="#barevne-moznosti">Barvy a protiskluz</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/malovani" className="sidebar-cat-link">🎨 Malování &amp; barvy<span>34 článků →</span></Link>
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
