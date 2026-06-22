import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solární panely na dům – jak vybrat výkon, typ a dodavatele",
  description: "Praktický průvodce výběrem solárních panelů: jaký výkon (kWp) potřebuješ, kolik to stojí, jaká je návratnost a jak vybrat spolehlivého dodavatele.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-vybrat-solarni-panely" },
  openGraph: { title: "Solární panely na dům – jak vybrat výkon, typ a dodavatele", description: "Výkon, typ systému, cena, dotace a výběr dodavatele. Kompletní průvodce 2026.", url: "https://www.domovniguru.cz/blog/jak-vybrat-solarni-panely", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-10T08:00:00Z", modifiedTime: "2026-06-04T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Sol%C3%A1rn%C3%AD%20panely%20na%20d%C5%AFm%20%E2%80%93%20jak%20vybrat%20v%C3%BDkon%2C%20typ%20a%20dodavatele&cat=blog", width: 1200, height: 630, alt: "Solární panely na dům – jak vybrat výkon, typ a dodavatele" }] },
  twitter: { card: "summary_large_image", title: "Solární panely na dům – jak vybrat výkon, typ a dodavatele", description: "Výkon, typ systému, cena, dotace a výběr dodavatele. Kompletní průvodce 2026." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/jak-vybrat-solarni-panely#article", "headline": "Solární panely na dům – jak vybrat výkon, typ a dodavatele", "datePublished": "2026-04-10T08:00:00Z", "dateModified": "2026-06-04T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["solární panely", "fotovoltaika", "FVE na dům", "výkon solárních panelů", "návratnost fotovoltaiky", "dotace Nová zelená úsporám"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Elektrika & osvětlení", "item": "https://www.domovniguru.cz/blog/kategorie/elektrika" }, { "@type": "ListItem", "position": 4, "name": "Solární panely na dům", "item": "https://www.domovniguru.cz/blog/jak-vybrat-solarni-panely" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jaký výkon solárních panelů potřebuji pro běžný rodinný dům?", "acceptedAnswer": { "@type": "Answer", "text": "Pro domácnost se spotřebou 3 500–5 000 kWh ročně se obvykle hodí systém o výkonu 4–6 kWp. Přesný výkon záleží na orientaci a sklonu střechy, stínění a na tom, zda chceš pokrýt i ohřev vody nebo budoucí tepelné čerpadlo." } }, { "@type": "Question", "name": "Za jak dlouho se solární panely zaplatí?", "acceptedAnswer": { "@type": "Answer", "text": "Při dobrém využití vlastní výroby a s dotací z programu Nová zelená úsporám se běžná návratnost pohybuje mezi 7 a 11 lety. Bez dotace je to obvykle 10–14 let. Panely přitom mají životnost 25–30 let, takže zbytek je čistá úspora." } }, { "@type": "Question", "name": "Mám si pořídit i baterii k solárním panelům?", "acceptedAnswer": { "@type": "Answer", "text": "Baterie zvyšuje míru soběstačnosti až na 60–80 %, ale prodlužuje návratnost o pár let kvůli vyšší pořizovací ceně. Vyplatí se hlavně tam, kde je vysoká spotřeba večer a v noci, nebo kde řešíš zálohu při výpadcích proudu." } }, { "@type": "Question", "name": "Jak poznám spolehlivou firmu na instalaci FVE?", "acceptedAnswer": { "@type": "Answer", "text": "Spolehlivá firma má reference z posledních 1–2 let, certifikaci k vyhrazeným elektrickým zařízením, dá ti podrobnou nabídku s rozpisem komponent a nabídne min. 10 let záruky na panely a 5–10 let na měnič. Pozor na firmy, které tlačí na podpis smlouvy hned na místě." } }] }] };

const RELATED = [
  { title: "Jak snížit účet za elektřinu doma", href: "/blog/snizit-ucet-za-elektrinu", read: "5 min" },
  { title: "Tepelné čerpadlo: Kompletní průvodce výběrem, úsporami a instalací", href: "/blog/tepelne-cerpadlo-pruvodce", read: "11 min" },
  { title: "Jak číst elektroměr a hlídat spotřebu", href: "/blog/jak-cist-elektromer", read: "4 min" },
  { title: "Jak funguje chytrá domácnost – začínáme", href: "/blog/chytra-domacnost-zaciname", read: "6 min" },
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
              <Link href="/blog/kategorie/elektrika">Elektrika & osvětlení</Link><span className="breadcrumb-sep">/</span>
              <span>Solární panely na dům</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">💡 Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Solární panely na dům – jak vybrat výkon, typ a dodavatele</h1>
              <p className="article-lead">Fotovoltaika už dávno není exotika – má ji skoro každý třetí dům v okolí. Ale výběr správného systému není jen o tom „chci panely na střechu". Tenhle průvodce ti ukáže, jaký výkon doopravdy potřebuješ, kolik celá investice stojí, kdy se vyplatí baterie a jak nenaletět nepoctivému dodavateli.</p>
              <div className="article-meta-row"><span>Aktualizováno: 4. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#typy-systemu">Typy solárních systémů</a></li>
                <li><a href="#vykon">Jaký výkon (kWp) potřebuješ</a></li>
                <li><a href="#naklady-navratnost">Náklady a návratnost</a></li>
                <li><a href="#dodavatel">Jak vybrat dodavatele a instalační firmu</a></li>
                <li><a href="#komponenty">Typy panelů a komponent</a></li>
                <li><a href="#chyby">Časté chyby při výběru a instalaci</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="typy-systemu">
              <h2>Typy solárních systémů</h2>
              <p>Než začneš řešit konkrétní panely, je potřeba si ujasnit, jaký typ fotovoltaického systému (FVE) vlastně chceš. Liší se podle toho, jestli jsi připojený k distribuční síti, jestli chceš ukládat přebytky do baterie, a jak moc chceš být energeticky soběstačný.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ systému</th><th>Princip</th><th>Pro koho je vhodný</th><th>Orientační cena</th></tr></thead>
                  <tbody>
                    <tr><td>On-grid (síťový)</td><td>Vyrobenou energii spotřebováváš okamžitě, přebytky jdou do sítě</td><td>Domácnosti, které chtějí nejrychlejší návratnost</td><td>120 000–220 000 Kč</td></tr>
                    <tr><td>Hybridní (s baterií)</td><td>Přebytky se ukládají do baterie a využijí večer nebo v noci</td><td>Domácnosti s vysokou spotřebou odpoledne a večer</td><td>220 000–420 000 Kč</td></tr>
                    <tr><td>Off-grid (ostrovní)</td><td>Systém funguje zcela nezávisle na distribuční síti</td><td>Chaty a objekty bez možnosti připojení k síti</td><td>180 000–350 000 Kč</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Pro běžný rodinný dům připojený k síti dává v drtivé většině případů smysl <strong>on-grid nebo hybridní systém</strong>. Čistě ostrovní řešení se vyplatí jen tam, kde připojení k distribuční síti chybí nebo by bylo extrémně drahé.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud váháš mezi on-grid a hybridním systémem, zvaž, kdy doma nejvíc spotřebováváš elektřinu. Pokud jsi přes den v práci a vařit nebo nabíjet auto chodíš večer, baterie ti dá mnohem víc smysl než u domácnosti, kde je někdo doma celý den.</div>
            </section>

            <section id="vykon">
              <h2>Jaký výkon (kWp) potřebuješ</h2>
              <p>Výkon fotovoltaického systému se udává v kWp (kilowatt-peak) – jde o teoretický špičkový výkon panelů za ideálních podmínek. Skutečná roční výroba v českých podmínkách se pohybuje kolem <strong>950–1 100 kWh na 1 kWp instalovaného výkonu</strong>, v závislosti na orientaci, sklonu a stínění střechy.</p>
              <h3>Vztah ke spotřebě domácnosti</h3>
              <p>Základní pravidlo: systém by měl pokrýt co největší část tvé roční spotřeby, aniž by zbytečně velkou část vyráběné energie posílal do sítě za nevýhodný výkupní tarif. Orientační přehled:</p>
              <ul>
                <li><strong>Spotřeba 2 000–3 000 kWh/rok</strong> (menší byt, dům s plynovým topením) → systém 2–3 kWp</li>
                <li><strong>Spotřeba 3 500–5 000 kWh/rok</strong> (běžný rodinný dům) → systém 4–6 kWp</li>
                <li><strong>Spotřeba 6 000–9 000 kWh/rok</strong> (dům s elektrickým ohřevem vody, bazénem nebo klimatizací) → systém 6–9 kWp</li>
                <li><strong>Dům s tepelným čerpadlem nebo nabíjením elektromobilu</strong> → systém 8–12 kWp, často s baterií</li>
              </ul>
              <p>Než si necháš zpracovat nabídku, podívej se na svoje roční vyúčtování od dodavatele elektřiny a ověř si reálnou spotřebu – odhady „od oka" bývají často zkreslené. Orientační <Link href="/kalkulacky/solarni-panely" style={{ color: "#2a6496", textDecoration: "underline" }}>výkon a roční výnos si snadno spočítáš pomocí naší kalkulačky solárních panelů</Link>, kde stačí zadat plochu střechy, orientaci a roční spotřebu domácnosti.</p>
              <h3>Orientace a sklon střechy</h3>
              <p>Ideální je orientace na jih se sklonem 30–35°, kde dosáhneš téměř 100 % možné výroby. Reálně ale fungují i další varianty:</p>
              <ul>
                <li><strong>Jih (30–35°)</strong> – referenční hodnota, 100 % výtěžnosti</li>
                <li><strong>Jihovýchod / jihozápad</strong> – přibližně 90–95 % výtěžnosti, navíc rozloží výrobu do delší části dne</li>
                <li><strong>Východ / západ</strong> – kolem 75–85 % výtěžnosti, vhodné spíš pro doplňkové pole nebo když je jih obsazený</li>
                <li><strong>Sever nebo silně zastíněná plocha</strong> – obvykle se nevyplatí, výtěžnost klesá pod 60 %</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud máš plochou střechu nebo dvě sklony (východ–západ), nemusí to být problém. Moderní instalace na konstrukcích dokáže nasměrovat panely výhodně i na ploché střeše a kombinace východ–západ často vyrovná výkon během celého dne lépe, než by se zdálo.</div>
            </section>

            <section id="naklady-navratnost">
              <h2>Náklady a návratnost</h2>
              <p>Cena fotovoltaického systému se odvíjí hlavně od výkonu, typu panelů, zda chceš baterii a od složitosti montáže (typ střechy, vzdálenost od rozvaděče, revize). Orientační ceny pro on-grid i hybridní systémy v roce 2026:</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Velikost systému</th><th>Cena bez baterie</th><th>Cena s baterií</th><th>Roční úspora *</th><th>Návratnost s dotací</th></tr></thead>
                  <tbody>
                    <tr><td>3 kWp</td><td>110 000–150 000 Kč</td><td>230 000–280 000 Kč</td><td>9 000–13 000 Kč</td><td>8–11 let</td></tr>
                    <tr><td>5 kWp</td><td>160 000–210 000 Kč</td><td>290 000–360 000 Kč</td><td>15 000–21 000 Kč</td><td>7–10 let</td></tr>
                    <tr><td>8 kWp</td><td>220 000–290 000 Kč</td><td>370 000–470 000 Kč</td><td>22 000–32 000 Kč</td><td>7–9 let</td></tr>
                    <tr><td>10 kWp</td><td>260 000–340 000 Kč</td><td>420 000–540 000 Kč</td><td>27 000–38 000 Kč</td><td>7–9 let</td></tr>
                  </tbody>
                </table>
              </div>
              <p style={{ fontSize: 13, color: "#78716c" }}>* Při ceně elektřiny 5,5–6,5 Kč/kWh, vlastní spotřebě cca 35–45 % vyrobené energie a prodeji přebytků do sítě.</p>
              <h3>Dotace z programu Nová zelená úsporám</h3>
              <p>Většina domácností v Česku čerpá podporu z programu <strong>Nová zelená úsporám (NZÚ)</strong>, případně z navazujících krajských a obecních dotačních titulů. Orientačně lze získat:</p>
              <ul>
                <li><strong>Dotace na samotné fotovoltaické panely</strong> – obvykle 35–50 000 Kč na 1 kWp instalovaného výkonu, dle aktuálních podmínek programu</li>
                <li><strong>Příplatek za bateriové úložiště</strong> – řádově desítky tisíc korun navíc, dle kapacity baterie</li>
                <li><strong>Bonus za kombinaci s tepelným čerpadlem nebo zateplením</strong> – tzv. „chytrá kombinace" zvyšuje celkovou výši podpory</li>
              </ul>
              <p>Díky dotaci se reálná návratnost typicky zkrátí o 2–3 roky oproti investici bez podpory. Vyplatí se nechat si od dodavatele rovnou připravit i žádost o dotaci – seriózní firmy to mívají v ceně nebo jako placenou službu v řádu jednotek tisíc korun.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Než podepíšeš smlouvu, ověř si na webu Státního fondu životního prostředí aktuální výši dotace a podmínky (např. povinnou minimální životnost komponent nebo požadavky na revize). Podmínky programů se v čase mění a stará čísla z internetu už nemusí platit.</div>
            </section>

            <section id="dodavatel">
              <h2>Jak vybrat dodavatele a instalační firmu</h2>
              <p>Výběr firmy je často důležitější než výběr konkrétní značky panelů – kvalitní instalace a servis rozhodují o tom, jestli ti systém bude bez problémů sloužit dalších 25 let.</p>
              <h3>Na co se zeptat při poptávce</h3>
              <ul>
                <li><strong>Jak dlouho firma na trhu působí</strong> a kolik instalací ročně realizuje – u solární energetiky vznikla v posledních letech řada firem, které za pár let zase zmizely</li>
                <li><strong>Jaké certifikace a oprávnění má</strong> – zejména oprávnění k montáži vyhrazených elektrických zařízení a proškolení pro práci ve výškách</li>
                <li><strong>Zda nabídka obsahuje detailní rozpis komponent</strong> (konkrétní typ a výkon panelů, měniče, případně baterie) – ne jen „fotovoltaická elektrárna 5 kWp" za paušální cenu</li>
                <li><strong>Jaká je záruka</strong> – na panely by mělo být minimálně 10–12 let záruky na produkt a 25 let na výkon, na měnič 5–10 let</li>
                <li><strong>Kdo zajistí revizi a připojení k distribuční soustavě</strong> a zda je to součástí ceny</li>
                <li><strong>Jak rychle a kde poskytuje servis</strong> – pokud firma sídlí na druhém konci republiky, může být horší dostupnost v případě poruchy</li>
              </ul>
              <h3>Reference a důkazy</h3>
              <p>Požádej o reference z posledních 1–2 let, ideálně z tvého regionu – díky tomu si je můžeš i fyzicky ověřit. Vyhledej si firmu v rejstřících (obchodní rejstřík, insolvenční rejstřík) a podívej se na recenze na nezávislých portálech, ne jen na webu samotné firmy.</p>
              <div className="article-tip"><strong>⚠️ Pozor:</strong> Buď obezřetný u firem, které tlačí na okamžité podepsání smlouvy „jen dnes za zvýhodněnou cenu", nabízejí nereálně krátké návratnosti (pod 5 let) nebo žádají vysokou zálohu předem bez jasné smlouvy. Solidní firma ti dá čas nabídku v klidu porovnat s konkurencí.</div>
              <p>Vyplatí se poptat <strong>alespoň 3 nezávislé nabídky</strong> a porovnat je nejen podle ceny, ale i podle rozsahu prací, záruk a reálných referencí. Rozdíly v ceně za stejný výkon mohou činit desítky tisíc korun.</p>
            </section>

            <section id="komponenty">
              <h2>Typy panelů a komponent</h2>
              <h3>Monokrystalické vs. polykrystalické panely</h3>
              <p>Dnes se na trhu prakticky setkáš jen s monokrystalickými panely – polykrystalické se na nové instalace téměř nepoužívají, protože monokrystalické mají vyšší účinnost na stejné ploše a cenový rozdíl se v posledních letech výrazně srovnal.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Vlastnost</th><th>Monokrystalické</th><th>Polykrystalické</th></tr></thead>
                  <tbody>
                    <tr><td>Účinnost</td><td>20–23 %</td><td>15–17 %</td></tr>
                    <tr><td>Výkon na m²</td><td>Vyšší – méně panelů na stejný výkon</td><td>Nižší – potřeba větší plocha</td></tr>
                    <tr><td>Vzhled</td><td>Tmavě černý, jednotný</td><td>Modravý, viditelné krystaly</td></tr>
                    <tr><td>Chování za horka</td><td>Mírně lepší teplotní koeficient</td><td>Mírně horší</td></tr>
                    <tr><td>Dostupnost na trhu (2026)</td><td>Standard, široká nabídka</td><td>Téměř se nevyrábí</td></tr>
                  </tbody>
                </table>
              </div>
              <h3>Měniče (invertory)</h3>
              <p>Měnič přemění stejnosměrný proud z panelů na střídavý, který se používá v domácnosti. Základní volba je mezi:</p>
              <ul>
                <li><strong>Centrální (string) měnič</strong> – jeden měnič pro celý systém, levnější varianta, vhodná pro střechy bez stínění a s jednotnou orientací</li>
                <li><strong>Mikroměniče nebo optimizéry</strong> – každý panel (nebo malá skupina) má vlastní měnič či optimizér, dražší řešení, ale lépe si poradí se stíněním, různými orientacemi nebo nestejným stárnutím panelů</li>
              </ul>
              <h3>Bateriová úložiště</h3>
              <p>Baterie umožňuje uložit přebytky vyrobené přes den a využít je večer nebo v noci, kdy slunce nesvítí. Zvyšuje míru soběstačnosti domácnosti z typických 30–40 % (bez baterie) až na 60–80 % (s vhodně dimenzovanou baterií).</p>
              <ul>
                <li><strong>Lithium-ionové (LiFePO4)</strong> – dnes naprostý standard, dlouhá životnost (4 000–6 000 cyklů), bezpečné, ale dražší</li>
                <li><strong>Velikost baterie</strong> – pro běžnou domácnost obvykle vychází kapacita 5–15 kWh, podle večerní a noční spotřeby</li>
              </ul>
              <p>Baterii nemusíš nutně instalovat hned – mnoho systémů jde připravit „bateriově ready" a úložiště doplnit později, až klesne jeho cena nebo se změní tvoje potřeby (např. pořízení elektromobilu).</p>
            </section>

            <section id="chyby">
              <h2>Časté chyby při výběru a instalaci</h2>
              <h3>Předimenzovaný nebo poddimenzovaný systém</h3>
              <p>Příliš velký systém znamená, že velkou část výroby prodáváš do sítě za nevýhodný tarif a návratnost se prodlužuje. Příliš malý systém naopak nepokryje tvoji spotřebu a neušetříš tolik, kolik bys mohl. Klíčem je vycházet z reálné roční spotřeby, ne z odhadu nebo z toho, „co se vejde na střechu".</p>
              <h3>Podcenění stínění střechy</h3>
              <p>Komín, anténa, sousední budova nebo strom mohou výrazně snížit výnos celého řetězce panelů – zvlášť u levnějších centrálních měničů, kde stín na jednom panelu omezí výkon celé série. Před instalací si nech zpracovat analýzu stínění v průběhu celého roku, ne jen v okamžiku prohlídky.</p>
              <h3>Výběr jen podle nejnižší ceny</h3>
              <p>Nejlevnější nabídka často znamená horší komponenty, kratší záruku nebo úsporu na revizích a dokumentaci. Rozdíl v ceně mezi nejlevnější a kvalitní nabídkou bývá v řádu desítek tisíc korun – v přepočtu na 25 let životnosti je to zanedbatelná částka oproti riziku problémů s nekvalitní instalací.</p>
              <h3>Zanedbání papírování</h3>
              <p>Připojení k distribuční síti, revizní zprávy, žádost o dotaci a smlouva s distributorem o přetocích – to všechno je potřeba vyřídit správně a včas. Bez kompletní dokumentace se ti může stát, že systém sice fyzicky funguje, ale nemůžeš ho legálně provozovat nebo čerpat dotaci.</p>
              <h3>Žádný plán na údržbu</h3>
              <p>Solární panely sice nepotřebují téměř žádnou údržbu, ale měnič a baterie mají omezenou životnost a měly by procházet pravidelnou kontrolou. Domluv si s dodavatelem už při podpisu smlouvy, jak bude vypadat servis a co dělat v případě poruchy.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Sleduj výrobu pomocí monitorovací aplikace, kterou nabízí prakticky každý moderní měnič. Pomůže ti rychle odhalit, pokud výkon náhle klesne (např. kvůli závadě, znečištění panelů nebo stínění) – a včas zareagovat, než přijdeš o výnos za celé týdny.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jaký výkon solárních panelů potřebuji pro běžný rodinný dům?", a: "Pro domácnost se spotřebou 3 500–5 000 kWh ročně se obvykle hodí systém o výkonu 4–6 kWp. Přesný výkon záleží na orientaci a sklonu střechy, stínění a na tom, zda chceš pokrýt i ohřev vody nebo budoucí tepelné čerpadlo." },
                  { q: "Za jak dlouho se solární panely zaplatí?", a: "Při dobrém využití vlastní výroby a s dotací z programu Nová zelená úsporám se běžná návratnost pohybuje mezi 7 a 11 lety. Bez dotace je to obvykle 10–14 let. Panely přitom mají životnost 25–30 let, takže zbytek je čistá úspora." },
                  { q: "Mám si pořídit i baterii k solárním panelům?", a: "Baterie zvyšuje míru soběstačnosti až na 60–80 %, ale prodlužuje návratnost o pár let kvůli vyšší pořizovací ceně. Vyplatí se hlavně tam, kde je vysoká spotřeba večer a v noci, nebo kde řešíš zálohu při výpadcích proudu." },
                  { q: "Jak poznám spolehlivou firmu na instalaci FVE?", a: "Spolehlivá firma má reference z posledních 1–2 let, certifikaci k vyhrazeným elektrickým zařízením, dá ti podrobnou nabídku s rozpisem komponent a nabídne min. 10 let záruky na panely a 5–10 let na měnič. Pozor na firmy, které tlačí na podpis smlouvy hned na místě." },
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
                    <div className="card-eyebrow-row"><span>Elektrika & osvětlení</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#typy-systemu">Typy solárních systémů</a></li>
                <li><a href="#vykon">Jaký výkon potřebuješ</a></li>
                <li><a href="#naklady-navratnost">Náklady a návratnost</a></li>
                <li><a href="#dodavatel">Jak vybrat dodavatele</a></li>
                <li><a href="#komponenty">Typy panelů a komponent</a></li>
                <li><a href="#chyby">Časté chyby</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/elektrika" className="sidebar-cat-link">💡 Elektrika & osvětlení<span>21 článků →</span></Link>
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
