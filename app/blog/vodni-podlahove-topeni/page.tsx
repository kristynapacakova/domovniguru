import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vodní podlahové topení – průvodce instalací, provozem a náklady",
  description: "Mokrý vs. suchý systém, reálné náklady na m² a provoz, vhodné zdroje tepla i časté chyby při seřízení. Kompletní průvodce vodním podlahovým topením.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/vodni-podlahove-topeni" },
  openGraph: { title: "Vodní podlahové topení – průvodce instalací, provozem a náklady", description: "Mokrý vs. suchý systém, náklady na m², provoz a vhodné zdroje tepla. Vše, co potřebuješ vědět před instalací.", url: "https://www.domovniguru.cz/blog/vodni-podlahove-topeni", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-07T08:00:00Z", modifiedTime: "2026-06-07T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Vodn%C3%AD%20podlahov%C3%A9%20topen%C3%AD%20%E2%80%93%20pr%C5%AFvodce%20instalac%C3%AD%2C%20provozem%20a%20n%C3%A1klady&cat=blog", width: 1200, height: 630, alt: "Vodní podlahové topení – průvodce instalací, provozem a náklady" }] },
  twitter: { card: "summary_large_image", title: "Vodní podlahové topení – průvodce instalací, provozem a náklady", description: "Mokrý vs. suchý systém, náklady na m², provoz a vhodné zdroje tepla." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/vodni-podlahove-topeni#article", "headline": "Vodní podlahové topení – průvodce instalací, provozem a náklady", "datePublished": "2026-06-07T08:00:00Z", "dateModified": "2026-06-07T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["vodní podlahové topení", "podlahové topení instalace", "podlahové topení cena", "mokrý systém podlahového topení", "náklady na podlahové topení"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Sezónní údržba", "item": "https://www.domovniguru.cz/blog/kategorie/sezonni-udrzba" }, { "@type": "ListItem", "position": 4, "name": "Vodní podlahové topení", "item": "https://www.domovniguru.cz/blog/vodni-podlahove-topeni" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Je vodní podlahové topení dražší než radiátory?", "acceptedAnswer": { "@type": "Answer", "text": "Pořizovací náklady jsou vyšší – počítej s 1 800–3 500 Kč/m² u mokrého systému včetně podlahy. Provozně je ale o 10–20 % levnější, protože pracuje s nižší teplotou vody a teplo rozvádí rovnoměrně po celé ploše." } }, { "@type": "Question", "name": "Lze vodní podlahové topení namontovat do staršího bytu?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, pomocí suchého (nízkoprofilového) systému, který se vejde do 15–35 mm bez výrazného navýšení podlahy. Mokrý systém vyžaduje 70–120 mm skladbu, což ve starší zástavbě často naráží na výšku stropů a nosnost stropní konstrukce." } }, { "@type": "Question", "name": "Jakou teplotu vody potřebuje podlahové topení?", "acceptedAnswer": { "@type": "Answer", "text": "Běžně stačí teplota přívodní vody 30–40 °C, zatímco radiátory potřebují 55–70 °C. Nízká teplota je důvod, proč se podlahové topení skvěle kombinuje s tepelným čerpadlem, které je při nižších teplotách výrazně účinnější." } }, { "@type": "Question", "name": "Jak často je potřeba podlahové topení odvzdušnit?", "acceptedAnswer": { "@type": "Answer", "text": "Na začátku topné sezóny jednou ročně a dále vždy po zásahu do otopné soustavy (např. doplnění vody nebo opravě). Bublání v rozdělovači nebo studené úseky podlahy jsou nejčastějším signálem, že je vzduch v systému." } }] }] };

const RELATED = [
  { title: "Tepelné čerpadlo – průvodce pro domácnosti", href: "/blog/tepelne-cerpadlo-pruvodce", read: "6 min" },
  { title: "Jak pečovat o podlahové topení", href: "/blog/pece-o-podlahove-topeni", read: "4 min" },
  { title: "Jak odvzdušnit radiátory", href: "/blog/jak-odvzdusnit-radiatory", read: "3 min" },
  { title: "Jak ušetřit na vytápění bez výměny kotle", href: "/blog/usetrit-na-vytapeni", read: "5 min" },
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
              <span>Vodní podlahové topení</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">🍂 Sezónní údržba</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Vodní podlahové topení – průvodce instalací, provozem a náklady</h1>
              <p className="article-lead">Příjemně teplá podlaha, žádné radiátory na zdech a nižší účty za topení – to slibuje vodní podlahové topení. Jak ale funguje, kolik stojí instalace a provoz a kdy se vyplatí ho zvolit místo klasických radiátorů? Tenhle průvodce ti dá konkrétní čísla i praktické tipy.</p>
              <div className="article-meta-row"><span>Aktualizováno: 7. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#jak-funguje">Jak funguje vodní podlahové topení</a></li>
                <li><a href="#instalace">Instalace – mokrý vs. suchý systém</a></li>
                <li><a href="#naklady">Náklady na pořízení a provoz</a></li>
                <li><a href="#zdroje-tepla">Vhodné zdroje tepla a optimální teplota</a></li>
                <li><a href="#vyhody-nevyhody">Výhody a nevýhody</a></li>
                <li><a href="#udrzba">Údržba a časté problémy</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="jak-funguje">
              <h2>Jak funguje vodní podlahové topení a v čem se liší od radiátorů</h2>
              <p>Vodní podlahové topení rozvádí teplou vodu sítí trubek (tzv. hadů) uložených v podlaze – obvykle v betonové mazanině nebo v tenké suché skladbě. Voda o teplotě zhruba 30–40 °C prochází okruhy, které jsou napojené na rozdělovač s regulací pro každou místnost zvlášť. Teplo se pak rovnoměrně šíří celou plochou podlahy a sálá do místnosti odspodu nahoru.</p>
              <p>Radiátory naproti tomu ohřívají vzduch lokálně – v místě, kde stojí. Vzduch stoupá ke stropu, ochlazuje se a klesá zpět dolů, takže v místnosti vzniká teplotní rozdíl mezi podlahou a stropem i 4–6 °C. Podlahové topení tento rozdíl výrazně snižuje, takže se v místnosti subjektivně cítíš tepleji i při nižší teplotě vzduchu o 1–2 °C – a to se pak promítá i do nákladů na vytápění.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Kritérium</th><th>Vodní podlahové topení</th><th>Radiátory</th></tr></thead>
                  <tbody>
                    <tr><td>Tepelný komfort</td><td>Rovnoměrné sálavé teplo, žádné studené kouty</td><td>Teplo soustředěné kolem radiátoru, vzduch proudí</td></tr>
                    <tr><td>Teplota přívodní vody</td><td>30–40 °C</td><td>55–70 °C</td></tr>
                    <tr><td>Provozní náklady</td><td>Nižší o 10–20 % díky nižší teplotě vody</td><td>Vyšší – vyšší teplota = vyšší ztráty a spotřeba</td></tr>
                    <tr><td>Místo na stěnách</td><td>Žádné radiátory, volný prostor pro nábytek</td><td>Radiátory zabírají místo pod okny</td></tr>
                    <tr><td>Vhodnost pro novostavbu</td><td>Ideální – nízkoenergetické domy, dobrá izolace</td><td>Univerzální, vhodné i do starších staveb</td></tr>
                    <tr><td>Vhodnost pro rekonstrukci</td><td>Možné, ale náročnější (viz suchý systém)</td><td>Snadná výměna za stávající rozvody</td></tr>
                    <tr><td>Setrvačnost systému</td><td>Pomalejší náběh i chladnutí (hodiny)</td><td>Rychlá reakce na změnu nastavení (desítky minut)</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Podlahové topení má vyšší tepelnou setrvačnost než radiátory – jednou nahřátá podlaha drží teplo i několik hodin po vypnutí. To je výhoda pro stabilní komfort, ale nevýhoda, pokud potřebuješ rychle zatopit po příchodu domů.</div>
            </section>

            <section id="instalace">
              <h2>Instalace – mokrý vs. suchý systém, do novostavby vs. rekonstrukce</h2>
              <p>Existují dva základní způsoby instalace, které se zásadně liší náročností, cenou i tím, kam se vůbec hodí.</p>
              <h3>Mokrý systém</h3>
              <p>Trubky se uloží na izolační desky a celá skladba se zalije betonovou mazaninou o tloušťce 5–7 cm. Výsledná skladba podlahy (izolace + potěr + nášlapná vrstva) tak naroste o 7–12 cm. Mazanina musí dozrát minimálně 3–4 týdny, než se může zatopit a než se na ni položí finální podlaha. Tento systém má vyšší tepelnou akumulaci, je levnější na materiál, ale vyžaduje stavební úpravy – proto se nejčastěji volí do novostaveb nebo při kompletní rekonstrukci, kdy se stejně mění skladba podlahy.</p>
              <h3>Suchý (nízkoprofilový) systém</h3>
              <p>Trubky se ukládají do předfrézovaných izolačních desek nebo mezi nosníky bez mokrého procesu. Celková tloušťka skladby je jen 1,5–3,5 cm, takže systém lze namontovat i tam, kde mokrý proces nepřipadá v úvahu – typicky při rekonstrukci bytu v panelovém domě, kde by zvýšení podlahy o 10 cm znamenalo problém s výškou dveří, schodů i zatížením stropu. Nevýhodou je vyšší cena materiálu a o něco nižší tepelná akumulace, díky které systém rychleji reaguje, ale i rychleji chladne.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th></th><th>Mokrý systém</th><th>Suchý systém</th></tr></thead>
                  <tbody>
                    <tr><td>Nárůst výšky podlahy</td><td>7–12 cm</td><td>1,5–3,5 cm</td></tr>
                    <tr><td>Doba realizace (vč. zrání)</td><td>4–6 týdnů</td><td>3–7 dní</td></tr>
                    <tr><td>Orientační cena materiálu a montáže</td><td>1 200–2 000 Kč/m²</td><td>2 200–3 800 Kč/m²</td></tr>
                    <tr><td>Vhodnost</td><td>Novostavby, hrubé stavby, kompletní rekonstrukce</td><td>Rekonstrukce bytů, místa s omezenou výškou</td></tr>
                    <tr><td>Tepelná akumulace</td><td>Vysoká – pomalejší náběh i chladnutí</td><td>Nižší – rychlejší reakce na regulaci</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Ať zvolíš jakýkoliv systém, vždy je nutná kvalitní tepelná izolace pod potěrem – jinak teplo zbytečně uniká do stropní konstrukce místo do místnosti. V novostavbě se navíc vyplatí naplánovat podlahové topení už v projektu, protože dodatečné úpravy skladby podlahy a výšky prahů jsou výrazně dražší než řešení od začátku.</p>
            </section>

            <section id="naklady">
              <h2>Náklady na pořízení a provoz</h2>
              <p>Celková cena instalace se skládá z materiálu (trubky, izolace, rozdělovač, regulace), montáže a u mokrého systému i z betonové mazaniny a nové podlahové krytiny. Reálné rozpětí pro byt nebo rodinný dům v Česku v roce 2026 vypadá takto:</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Položka</th><th>Mokrý systém</th><th>Suchý systém</th></tr></thead>
                  <tbody>
                    <tr><td>Materiál (trubky, izolace, rozdělovač)</td><td>450–700 Kč/m²</td><td>900–1 400 Kč/m²</td></tr>
                    <tr><td>Montáž a uvedení do provozu</td><td>350–550 Kč/m²</td><td>500–800 Kč/m²</td></tr>
                    <tr><td>Betonová mazanina / suchá skladba</td><td>400–700 Kč/m²</td><td>v ceně materiálu</td></tr>
                    <tr><td>Finální nášlapná vrstva</td><td>500–1 200 Kč/m²</td><td>500–1 200 Kč/m²</td></tr>
                    <tr><td><strong>Celkem orientačně</strong></td><td><strong>1 800–3 500 Kč/m²</strong></td><td><strong>2 700–4 500 Kč/m²</strong></td></tr>
                  </tbody>
                </table>
              </div>
              <p>Pro byt o ploše 70 m² tak vychází instalace mokrého systému zhruba na 130 000–245 000 Kč včetně nové podlahy, u suchého systému na 190 000–315 000 Kč. Přesnou kalkulaci podle plochy, typu místností a zvoleného zdroje tepla ti spočítá <Link href="/kalkulacky/podlahove-topeni" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačka podlahového topení</Link> – stačí zadat výměru a systém ti odhadne jak pořizovací, tak provozní náklady.</p>
              <h3>Provozní náklady ve srovnání s radiátory</h3>
              <p>Klíčový rozdíl je v teplotě vody, kterou systém potřebuje. Radiátory běžně pracují s vodou o teplotě 55–70 °C, zatímco podlahovému topení stačí 30–40 °C. Nižší teplota znamená menší tepelné ztráty na rozvodech a hlavně výrazně vyšší účinnost tepelného čerpadla – jeho topný faktor (COP) klesá s rostoucí teplotou výstupní vody, takže každý stupeň navíc tě stojí reálné peníze.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th></th><th>Radiátory (70 °C)</th><th>Podlahové topení (35 °C)</th></tr></thead>
                  <tbody>
                    <tr><td>Orientační roční náklady na vytápění (byt 70 m²)</td><td>28 000–34 000 Kč</td><td>23 000–29 000 Kč</td></tr>
                    <tr><td>Úspora oproti radiátorům</td><td>—</td><td>10–20 %</td></tr>
                    <tr><td>Subjektivní komfort při nižší teplotě vzduchu</td><td>Nižší – chladnější podlaha</td><td>Vyšší – teplo sálá odspodu</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Návratnost vyšší pořizovací investice do podlahového topení se obvykle pohybuje mezi 8–15 lety v závislosti na zvoleném zdroji tepla a kvalitě zateplení domu. U novostaveb s tepelným čerpadlem je návratnost nejrychlejší, protože se obě technologie vzájemně doplňují.</div>
            </section>

            <section id="zdroje-tepla">
              <h2>Vhodné zdroje tepla a optimální nastavení teploty</h2>
              <p>Protože podlahové topení pracuje s nízkou teplotou vody, hodí se k němu jiné zdroje tepla než ke klasickým radiátorům – a naopak, ne každý kotel je pro něj ideální volbou.</p>
              <h3>Tepelné čerpadlo</h3>
              <p>Nejlepší kombinace na trhu. Tepelné čerpadlo dosahuje nejvyšší účinnosti (topného faktoru) právě při nízkých výstupních teplotách kolem 35 °C, což je přesně rozsah, ve kterém podlahové topení pracuje. Spojení tepelného čerpadla s podlahovým topením proto patří mezi nejúspornější řešení vytápění rodinných domů i bytů v novostavbách.</p>
              <h3>Kondenzační kotel</h3>
              <p>Kondenzační plynový kotel dokáže pracovat i s nízkou teplotou zpátečky a využívat kondenzační teplo spalin – jeho účinnost roste právě tehdy, když systém pracuje s nižšími teplotami, tedy ideálně s podlahovým topením. Je to dobrá volba tam, kde už je plynová přípojka a tepelné čerpadlo není z různých důvodů možné.</p>
              <h3>Klasický (nekondenzační) kotel</h3>
              <p>Funguje, ale jeho výhody se s podlahovým topením nevyužijí naplno – pracuje efektivněji při vyšších teplotách, takže kombinace s nízkoteplotním systémem nepřináší očekávanou úsporu. Pokud máš starší kotel a uvažuješ o podlahovém topení, vyplatí se zvážit výměnu zdroje tepla současně s rekonstrukcí.</p>
              <h3>Optimální nastavení teploty</h3>
              <ul>
                <li><strong>Teplota přívodní vody:</strong> 30–40 °C podle typu místnosti a tepelných ztrát</li>
                <li><strong>Teplota povrchu podlahy:</strong> max. 27–29 °C v obytných místnostech, do 33 °C v koupelnách</li>
                <li><strong>Ekvitermní regulace:</strong> automaticky upravuje teplotu vody podle venkovní teploty – ušetří 5–10 % nákladů oproti ručnímu nastavení</li>
                <li><strong>Regulace po místnostech:</strong> termostatické hlavice na rozdělovači nebo prostorové termostaty umožní každé místnosti jinou cílovou teplotu</li>
              </ul>
            </section>

            <section id="vyhody-nevyhody">
              <h2>Výhody a nevýhody – kdy se vyplatí a kdy ne</h2>
              <h3>Výhody</h3>
              <ul>
                <li><strong>Rovnoměrné a příjemné teplo</strong> – sálavé teplo z podlahy působí komfortněji než proudění od radiátoru</li>
                <li><strong>Žádné radiátory na stěnách</strong> – volnější dispozice, snazší rozmístění nábytku</li>
                <li><strong>Nižší provozní náklady</strong> – díky nízké teplotě vody, zejména v kombinaci s tepelným čerpadlem</li>
                <li><strong>Méně víření prachu</strong> – vhodné pro alergiky, protože nedochází k intenzivnímu proudění vzduchu kolem topného tělesa</li>
                <li><strong>Vyšší hodnota nemovitosti</strong> – moderní vytápění je při prodeji nebo pronájmu konkurenční výhodou</li>
              </ul>
              <h3>Nevýhody</h3>
              <ul>
                <li><strong>Vyšší pořizovací náklady</strong> – zejména při dodatečné instalaci do stávající stavby</li>
                <li><strong>Pomalá reakce systému</strong> – nahřátí i vychladnutí podlahy trvá hodiny, nehodí se pro rychlé přitápění nárazově</li>
                <li><strong>Omezení v rozmístění nábytku</strong> – velké koberce nebo nábytek bez nožiček mohou bránit odvodu tepla z podlahy</li>
                <li><strong>Náročnější oprava poruchy</strong> – netěsnost trubky v podlaze znamená bourání a vyšší náklady na opravu než u radiátoru</li>
                <li><strong>Volba nášlapné vrstvy</strong> – ne každá podlahová krytina vodivost tepla zvládá stejně dobře (ideální jsou dlažba a kámen, méně vhodné silné koberce)</li>
              </ul>
              <p>Vodní podlahové topení se nejvíce vyplatí v dobře zateplených novostavbách s tepelným čerpadlem, kde využiješ jeho přednosti naplno. V rekonstrukci dává smysl tam, kde stejně měníš celou skladbu podlahy nebo kde ti záleží na komfortu a dlouhodobé úspoře víc než na rychlé návratnosti investice.</p>
            </section>

            <section id="udrzba">
              <h2>Údržba a časté problémy</h2>
              <h3>Odvzdušnění systému</h3>
              <p>Vzduch v okruzích je nejčastější příčinou nerovnoměrného vytápění – v místnosti je pak jeden okruh teplý a druhý studený, případně z rozdělovače slyšíš bublání. Odvzdušnění se provádí přes odvzdušňovací ventilky na rozdělovači, ideálně jednou ročně před začátkem topné sezóny a vždy po jakémkoliv zásahu do soustavy (doplnění vody, oprava, výměna čerpadla).</p>
              <h3>Seřízení průtoku po okruzích</h3>
              <p>Každý okruh by měl mít nastavený průtok podle délky trubky a velikosti vytápěné plochy – bez vyvážení bude jedna místnost přetopená a druhá nedostatečně vytopená. Vyvážení (tzv. hydraulické seřízení) provádí technik při uvedení systému do provozu, ale je dobré ho zkontrolovat i po několika letech provozu, zejména pokud jsi měnil zdroj tepla.</p>
              <h3>Regulace po místnostech</h3>
              <p>Termostatické hlavice na rozdělovači nebo bezdrátové prostorové termostaty umožní nastavit každé místnosti jinou cílovou teplotu – v ložnici nižší, v koupelně vyšší. Vyplatí se investovat do kvalitní regulace hned při instalaci, dodatečná úprava je složitější a dražší.</p>
              <h3>Kontrola tlaku a doplňování vody</h3>
              <p>Stejně jako u radiátorového topení je potřeba sledovat tlak v systému a v případě potřeby doplnit vodu (nejlépe upravenou, s nízkým obsahem minerálů, aby se předešlo usazeninám v trubkách). Pokles tlaku, který se opakuje, může signalizovat netěsnost – v takovém případě je na místě přivolat odborníka.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Veď si jednoduchý servisní deník – kdy jsi systém naposledy odvzdušnil, doplnil vodu nebo seřídil průtoky. Usnadní ti to plánování údržby i komunikaci s technikem, pokud někdy nastane problém.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Je vodní podlahové topení dražší než radiátory?", a: "Pořizovací náklady jsou vyšší – počítej s 1 800–3 500 Kč/m² u mokrého systému včetně podlahy. Provozně je ale o 10–20 % levnější, protože pracuje s nižší teplotou vody a teplo rozvádí rovnoměrně po celé ploše." },
                  { q: "Lze vodní podlahové topení namontovat do staršího bytu?", a: "Ano, pomocí suchého (nízkoprofilového) systému, který se vejde do 15–35 mm bez výrazného navýšení podlahy. Mokrý systém vyžaduje 70–120 mm skladbu, což ve starší zástavbě často naráží na výšku stropů a nosnost stropní konstrukce." },
                  { q: "Jakou teplotu vody potřebuje podlahové topení?", a: "Běžně stačí teplota přívodní vody 30–40 °C, zatímco radiátory potřebují 55–70 °C. Nízká teplota je důvod, proč se podlahové topení skvěle kombinuje s tepelným čerpadlem, které je při nižších teplotách výrazně účinnější." },
                  { q: "Jak často je potřeba podlahové topení odvzdušnit?", a: "Na začátku topné sezóny jednou ročně a dále vždy po zásahu do otopné soustavy (např. doplnění vody nebo opravě). Bublání v rozdělovači nebo studené úseky podlahy jsou nejčastějším signálem, že je vzduch v systému." },
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
                <li><a href="#jak-funguje">Jak funguje topení</a></li>
                <li><a href="#instalace">Instalace systémů</a></li>
                <li><a href="#naklady">Náklady na pořízení</a></li>
                <li><a href="#zdroje-tepla">Zdroje tepla a teplota</a></li>
                <li><a href="#vyhody-nevyhody">Výhody a nevýhody</a></li>
                <li><a href="#udrzba">Údržba a problémy</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/sezonni-udrzba" className="sidebar-cat-link">🍂 Sezónní údržba<span>24 článků →</span></Link>
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
