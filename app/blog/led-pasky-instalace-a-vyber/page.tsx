import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LED pásky: jak vybrat a nainstalovat",
  description: "Průvodce výběrem a instalací LED pásků – typy SMD a COB, napájecí zdroj 12V nebo 24V, hliníkové profily, RGB/RGBW ovladače a bezpečná montáž.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/led-pasky-instalace-a-vyber" },
  openGraph: { title: "LED pásky: jak vybrat a nainstalovat", description: "Průvodce výběrem a instalací LED pásků – typy SMD a COB, napájecí zdroj 12V nebo 24V, hliníkové profily, RGB/RGBW ovladače a bezpečná montáž.", url: "https://www.domovniguru.cz/blog/led-pasky-instalace-a-vyber", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-07-08T08:00:00Z", modifiedTime: "2026-07-08T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=LED%20p%C3%A1sky%3A%20jak%20vybrat%20a%20nainstalovat&cat=blog", width: 1200, height: 630, alt: "LED pásky: jak vybrat a nainstalovat" }] },
  twitter: { card: "summary_large_image", title: "LED pásky: jak vybrat a nainstalovat", description: "Průvodce výběrem a instalací LED pásků – typy SMD a COB, napájecí zdroj 12V nebo 24V, hliníkové profily, RGB/RGBW ovladače a bezpečná montáž." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/led-pasky-instalace-a-vyber#article", "headline": "LED pásky: jak vybrat a nainstalovat", "datePublished": "2026-07-08T08:00:00Z", "dateModified": "2026-07-08T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["LED pásky", "SMD pásek", "COB LED", "RGB pásek", "napájecí zdroj LED", "hliníkový profil", "instalace LED pásku"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Elektrika & osvětlení", "item": "https://www.domovniguru.cz/blog/kategorie/elektrika" }, { "@type": "ListItem", "position": 4, "name": "LED pásky: jak vybrat a nainstalovat", "item": "https://www.domovniguru.cz/blog/led-pasky-instalace-a-vyber" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jaký napájecí zdroj zvolit pro LED pásek?", "acceptedAnswer": { "@type": "Answer", "text": "Napájecí zdroj musí mít stejné napětí jako pásek (12 V nebo 24 V) a výkon alespoň o 20 % vyšší, než je součet příkonu všech metrů pásku. Příklad: 5 m pásku × 14 W/m = 70 W, volte zdroj alespoň 84 W. Reserva chrání zdroj před přehřátím a prodlužuje jeho životnost." } }, { "@type": "Question", "name": "Mohu LED pásek nalepit přímo na dřevo nebo sádrokarton?", "acceptedAnswer": { "@type": "Answer", "text": "Nedoporučuje se. LED pásek produkuje teplo, které se musí odvádět. Na hořlavém podkladu (dřevo, sádrokarton) může dojít k přehřátí a v krajním případě k požáru. Vždy použijte hliníkový profil nebo hliníkovou pásku pod LED pásek – hliník odvádí teplo a prodlužuje životnost diod." } }, { "@type": "Question", "name": "Jaký je rozdíl mezi SMD a COB LED páskem?", "acceptedAnswer": { "@type": "Answer", "text": "SMD pásky mají oddělené diody viditelné jako jednotlivé body světla. COB (Chip on Board) pásky mají diody umístěné velmi blízko sebe, takže světlo je rovnoměrné bez viditelných bodů. COB pásky jsou dražší, ale vhodné všude, kde vadí nerovnoměrné osvětlení – například v skříních, za zrcadlem nebo jako dekorativní světlo." } }, { "@type": "Question", "name": "Jak LED pásek správně zkrátit?", "acceptedAnswer": { "@type": "Answer", "text": "LED pásky lze stříhat pouze na vyznačených místech – každé 3, 5 nebo 10 cm jsou na pásku vytištěny nůžkové symboly nebo čáry. Střih jinde poškodí obvod a část pásku přestane svítit. Stříhejte ostrými nůžkami na střed označeného místa." } }, { "@type": "Question", "name": "Co je teplota světla a jakou zvolit pro domácnost?", "acceptedAnswer": { "@type": "Answer", "text": "Teplota světla se udává v Kelvinech (K). Nižší hodnoty (2700–3000 K) dávají teplé žluté světlo vhodné do obývacích pokojů a ložnic. Střední hodnoty (3500–4000 K) jsou neutrální bílé, vhodné do kuchyní a pracoven. Vyšší hodnoty (5000–6500 K) jsou chladné, studené bílé, vhodné pro osvětlení dílen a garáží." } }] }] };

const RELATED = [
  { title: "Jak vybrat LED žárovku", href: "/blog/jak-vybrat-led-zarovku", read: "4 min" },
  { title: "LED vs. žárovky – úspora a srovnání", href: "/blog/led-vs-zarovky", read: "4 min" },
  { title: "Jak vybrat svítidla do místnosti", href: "/blog/vybrat-svitidla-do-mistnosti", read: "5 min" },
  { title: "Plánování osvětlení bytu", href: "/blog/planovani-osvetleni-bytu", read: "6 min" },
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
              <span>LED pásky</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">⚡ Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">LED pásky: jak vybrat a nainstalovat</h1>
              <p className="article-lead">LED pásky jsou jedním z nejflexibilnějších způsobů osvětlení – schovají se do každé lišty, podsvítí kuchyňskou linku nebo vytvoří náladu za televizí. Jenže špatně vybraný nebo zapojený pásek svítí nerovnoměrně, přehřívá se nebo vydrží jen pár měsíců. Tady je vše, co potřebujete vědět.</p>
              <div className="article-meta-row"><span>Aktualizováno: 8. července 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#typy-pasku">Typy LED pásků</a></li>
                <li><a href="#parametry">Klíčové parametry při výběru</a></li>
                <li><a href="#teplota-svetla">Teplota světla a podání barev</a></li>
                <li><a href="#napajeci-zdroj">Napájecí zdroj: 12 V nebo 24 V?</a></li>
                <li><a href="#prislusenstvi">Příslušenství: profily, konektory, ovladače</a></li>
                <li><a href="#montaz">Montáž LED pásku krok za krokem</a></li>
                <li><a href="#bezpecnost">Bezpečnost a časté chyby</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="typy-pasku">
              <h2>Typy LED pásků</h2>
              <p>Na trhu existuje celá řada typů LED pásků lišících se technologií, výkonem a použitím. Správná volba závisí na tom, co od pásku očekáváte – funkční osvětlení, nebo dekorativní efekt.</p>
              <h3>SMD pásky</h3>
              <p>SMD (Surface Mounted Device) je nejrozšířenější technologie. Jednotlivé LED čipy jsou páskované na pásku, přičemž typ čipu určuje vlastnosti světla. Nejčastěji se setkáte s těmito označeními:</p>
              <ul>
                <li><strong>SMD 2835</strong> – kompaktní čip, vyšší účinnost, vhodný pro dekorativní i funkční osvětlení</li>
                <li><strong>SMD 5050</strong> – větší čip, vyšší svítivost, základ většiny RGB a RGBW pásků</li>
                <li><strong>SMD 5630 / 5730</strong> – velký čip s vysokým výkonem, vhodný tam, kde potřebujete intenzivní světlo</li>
              </ul>
              <h3>COB pásky</h3>
              <p>COB (Chip on Board) pásky mají desítky malých čipů umístěných velmi blízko sebe, takže vytváří souvislou světelnou čáru bez viditelných bodů. Jsou ideální pro dekorativní lišty, osvětlení zrcadel, schodišť nebo skleněných vitrin, kde by viditelné body svítidel vadily. Bývají dražší než SMD, ale výsledný efekt je výrazně elegantnější.</p>
              <h3>Jednobarevné vs. barevné pásky</h3>
              <ul>
                <li><strong>Jednobarevné (single color)</strong> – nejjednodušší, nejlevnější, nejúčinnější. Dostupné v různých teplotách bílé. Vhodné pro funkční osvětlení.</li>
                <li><strong>RGB</strong> – tři čipy (červená, zelená, modrá) v jednom pouzdře. Umožňuje míchání barev, ale bílá není čistá – vzniká mix RGB a bývá namodralá nebo nažloutlá.</li>
                <li><strong>RGBW</strong> – přidaný bílý čip umožňuje čistou bílou i plné spektrum barev. Ideální kompromis pro obývací pokoje nebo ložnice s chytrou domácností.</li>
                <li><strong>CCT (Dual White / Tunable White)</strong> – dva bílé čipy s různou teplotou světla (teplá + studená) umožňují plynule měnit teplotu světla. Oblíbené v kancelářích a ložnicích.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud nevíte, zda chcete barevný pásek nebo bílý, začněte jednobarevným CCT páskem s měnitelnou teplotou světla. Barevné RGB efekty po čase přestanou bavit, ale schopnost nastavit teplé nebo chladné světlo využijete každý den.</div>
            </section>

            <section id="parametry">
              <h2>Klíčové parametry při výběru LED pásku</h2>
              <h3>Hustota LED na metr</h3>
              <p>Čím více LED čipů je na metru, tím rovnoměrnější je světlo. Standartní pásky mají 30, 60, 120 nebo 240 LED/m. Pro dekorativní světlo stačí 60 LED/m, pro funkční osvětlení (podlinka, pracovní plocha) volte minimálně 120 LED/m nebo COB provedení.</p>
              <h3>Příkon v W/m</h3>
              <p>Příkon udává, kolik wattů pásek spotřebuje na metr délky. Typické hodnoty:</p>
              <ul>
                <li><strong>4–6 W/m</strong> – dekorativní podsvícení, noční světlo</li>
                <li><strong>9–12 W/m</strong> – doplňkové osvětlení, podlinka v kuchyni</li>
                <li><strong>14–20 W/m</strong> – hlavní nebo silné funkční osvětlení</li>
              </ul>
              <p>Příkon je také klíčový pro výpočet napájecího zdroje – viz část o napájecích zdrojích.</p>
              <h3>IP krytí</h3>
              <p>Pro interiérové použití v suchu stačí <strong>IP20</strong>. Do kuchyní nebo míst s opasnými vodními stříky volte <strong>IP44</strong> (chráněno proti stříkající vodě). Pro venkovní použití nebo do sprchového koutu potřebujete <strong>IP65</strong> (zalité silikonem) nebo <strong>IP67/IP68</strong> pro přímý kontakt s vodou. Vyšší IP krytí obvykle snižuje odvod tepla z pásku, proto ho nepoužívejte tam, kde není nutné.</p>
              <h3>CRI – podání barev</h3>
              <p>CRI (Color Rendering Index) říká, jak věrně pásek zobrazuje barvy předmětů. Hodnota 80+ je dostatečná pro většinu domácích aplikací. Pro koupelnu, šatnu nebo pracoviště, kde záleží na přesném vnímání barev, volte CRI 90+ nebo ideálně 95+.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Nejlevnější pásky z e-shopů mívají nepřesně udané parametry. Před koupí většího množství si pořiďte vzorek a otestujte rovnoměrnost světla, teplotu a CRI ve skutečném prostředí.</div>
            </section>

            <section id="teplota-svetla">
              <h2>Teplota světla a podání barev</h2>
              <p>Teplota světla se měří v Kelvinech (K) a zásadně ovlivňuje pocit z prostoru. Nejde jen o estetiku – špatná teplota světla způsobuje únavu očí a narušuje cirkadiánní rytmus.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Teplota světla</th><th>Charakter</th><th>Vhodné použití</th></tr></thead>
                  <tbody>
                    <tr><td>2700–3000 K</td><td>Teplá bílá, žlutá</td><td>Obývací pokoj, ložnice, restaurace</td></tr>
                    <tr><td>3500–4000 K</td><td>Neutrální bílá</td><td>Kuchyně, koupelna, pracovna</td></tr>
                    <tr><td>5000–6500 K</td><td>Chladná, denní bílá</td><td>Garáž, dílna, průmyslové prostory</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Pro zdravý spánek se doporučuje od večerních hodin používat teplé světlo (pod 3000 K) a vyvarovat se chladného modrého světla, které potlačuje produkci melatoninu. CCT pásky nebo RGBW s nastavitelnou teplotou světla to umožňují automaticky – například přes Home Assistant nebo app výrobce.</p>
              <p>Více o výběru osvětlení do jednotlivých místností se dočtete v článku <Link href="/blog/vybrat-svitidla-do-mistnosti" style={{ color: "#2a6496", textDecoration: "underline" }}>jak vybrat svítidla do místnosti</Link>.</p>
            </section>

            <section id="napajeci-zdroj">
              <h2>Napájecí zdroj: 12 V nebo 24 V?</h2>
              <p>LED pásky pracují na nízkém napětí – nejčastěji <strong>12 V nebo 24 V DC</strong>. Nikdy je nepřipojujte přímo na 230 V ze zásuvky. Napájecí zdroj (driver) převede síťové napětí 230 V AC na bezpečné nízké napětí DC.</p>
              <h3>12 V vs. 24 V – jaký rozdíl?</h3>
              <ul>
                <li><strong>12 V pásky</strong> – rozšířenější, dostupnější příslušenství. Při vyšším příkonu nebo delších délkách (nad 5 m) dochází k poklesu napětí na konci pásku a světlo je tam slabší (tzv. voltage drop). Řešením je napájet pásek z obou konců.</li>
                <li><strong>24 V pásky</strong> – menší úbytek napětí na délce, vhodné pro delší instalace (10+ m). Lze připojit na delší vzdálenost od zdroje. Příslušenství je méně dostupné, ale situace se zlepšuje.</li>
              </ul>
              <h3>Jak dimenzovat napájecí zdroj</h3>
              <p>Výpočet je jednoduchý:</p>
              <ol>
                <li>Zjistěte příkon pásku v W/m (z technického listu nebo obalu)</li>
                <li>Vynásobte délkou instalace v metrech → dostanete celkový příkon v W</li>
                <li>K výsledku přidejte <strong>minimálně 20 % rezervu</strong> → toto je minimální výkon zdroje</li>
              </ol>
              <p><strong>Příklad:</strong> Pásek 14 W/m, délka 4,5 m → 14 × 4,5 = 63 W → zdroj minimálně 75 W (nejlépe 100 W).</p>
              <p>Rezerva chrání zdroj před přehřátím při trvalém provozu a výrazně prodlužuje jeho životnost. Zdroj, který pracuje na 100 % výkonu, se přehřívá a může selhat nebo způsobit požár.</p>
              <h3>Typy zdrojů</h3>
              <ul>
                <li><strong>Spínané zdroje do lišty DIN</strong> – montují se do rozvaděče, vhodné pro pevné instalace</li>
                <li><strong>Zásuvkové adaptéry (plug-in)</strong> – jednoduché na instalaci, vhodné pro dekorativní pásky</li>
                <li><strong>Zdroje do sádrokartonového podhledu</strong> – tenké, skryjí se za SDK</li>
              </ul>
              <div className="article-tip"><strong>⚠️ Bezpečnost:</strong> Napájecí zdroj musí být certifikovaný (CE, TÜV nebo UL), přiměřeně dimenzovaný a umístěn na větraném místě. Zdroje bez certifikace mohou způsobit požár nebo úraz elektrickým proudem. Při práci s přívodem 230 V k napájecímu zdroji vždy vypněte jistič a ověřte absenci napětí zkoušečkou.</div>
            </section>

            <section id="prislusenstvi">
              <h2>Příslušenství: profily, konektory, ovladače</h2>
              <h3>Hliníkový profil a difuzor</h3>
              <p>Hliníkový profil je nejdůležitější příslušenství po napájecím zdroji. Plní dvě funkce: odvádí teplo od LED čipů (prodlužuje životnost) a dává instalaci profesionální vzhled. Difuzorový kryt (matný plexisklo) eliminuje viditelné body svítidel a rovnoměrně rozkládá světlo. Existují profily nástěnné, rohové, povrchové i vestavné (do drážky ve sádrokartonu nebo dřevu).</p>
              <p>Na hořlavé podklady (dřevo, OSB, sádrokarton) <strong>vždy montujte pásek přes hliníkový profil</strong> – bez odvodu tepla může pásek v extrémních případech způsobit požár, zejména při vyšším příkonu nebo v uzavřeném prostoru.</p>
              <h3>Konektory a propoje</h3>
              <p>Konektory umožňují spojovat pásky bez pájení. Existují svorkovnicové konektory pro přímé propojení pásku a konektory s kabelem pro vedení za rohem nebo na větší vzdálenost. Při výběru ověřte kompatibilitu s šířkou pásku (nejčastěji 8 mm, 10 mm nebo 12 mm) a počtem vodičů (2 pro jednobarevný, 4 pro RGB, 5 pro RGBW/CCT).</p>
              <h3>Ovladač a dimmer</h3>
              <p>Pro jednobarevné pásky stačí jednoduchý PWM dimmer, který umožňuje plynulé stmívání. Pro RGB nebo RGBW pásky potřebujete RGB/RGBW ovladač s dálkovým ovladačem nebo app. Pro chytrou domácnost:</p>
              <ul>
                <li><strong>WiFi ovladače</strong> – přímo kompatibilní s aplikací, bez brány, ale závislé na domácím WiFi</li>
                <li><strong>Zigbee ovladače</strong> – nižší latence, fungují bez internetu přes Zigbee hub (např. Sonoff Zigbee Bridge, ConBee), skvěle se integrují s <Link href="/blog/chytra-domacnost-zaciname" style={{ color: "#2a6496", textDecoration: "underline" }}>chytrou domácností</Link></li>
                <li><strong>WLED firmware</strong> – open-source řešení pro ESP8266/ESP32, ideální pro pokročilé uživatele a Home Assistant</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud plánujete LED pásky ve více místnostech nebo v celém bytě, zvažte chytré Zigbee ovladače a centrální ovládání přes Home Assistant. Získáte automatizaci (svítí jen když jste doma, mění barvu podle denní doby) a nepotřebujete internet pro základní funkce.</div>
            </section>

            <section id="montaz">
              <h2>Montáž LED pásku krok za krokem</h2>
              <h3>Příprava povrchu</h3>
              <p>Samolepicí podložka pásku nebo profilu drží nejlépe na čistém, odmašteném povrchu. Povrch umyjte izopropylalkoholem nebo odmašťovačem a nechte uschnout. Mastnota, prach nebo stará barva zásadně snižují přídržnost.</p>
              <h3>Montáž hliníkového profilu</h3>
              <ol>
                <li>Změřte délku instalace a profil nařízněte pilkou na kovy pod úhlem 45° pro rohy nebo kolmo pro rovné úseky</li>
                <li>Profil přichyťte šroubky nebo oboustrannou lepicí páskou (silnější páska drží lépe než tenká)</li>
                <li>Do profilu vložte LED pásek – odlepte ochrannou fólii z lepicí strany pásku a rovnoměrně ho přitlačte</li>
                <li>Nasaďte difuzorový kryt</li>
              </ol>
              <h3>Střih pásku</h3>
              <p>Pásek stříhejte <strong>pouze na vyznačených místech</strong> – každých 3, 5 nebo 10 cm jsou na pásku nůžkové symboly nebo tečkované čáry. Střih jinde přeruší obvod a část pásku přestane svítit. Používejte ostré nůžky a stříhejte na střed označeného místa.</p>
              <h3>Zapojení napájecího zdroje</h3>
              <ol>
                <li>Připojte výstupní konektor zdroje na vstup LED pásku – dodržte polaritu (+/−)</li>
                <li>Zdroj připojte k 230 V <strong>až po dokončení všech nízkonapěťových spojů</strong></li>
                <li>Před zapojením 230 V vypněte příslušný jistič a ověřte absenci napětí zkoušečkou</li>
                <li>Zapojte fázi (L – hnědý vodič) a nulu (N – modrý vodič) na svorky zdroje, PE (zelenožlutý) na uzemňovací svorku</li>
              </ol>
              <h3>Test před zakrytím</h3>
              <p>Před definitivní montází difuzoru a zakrytím instalace vždy zapněte a zkontrolujte rovnoměrnost světla, funkci stmívání nebo barevného ovladače. Oprava chyby po zakrytí sádrokartonem nebo obkladem je mnohonásobně náročnější.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Na délkách nad 5 m (12 V pásky) nebo 10 m (24 V pásky) napájejte pásek z obou konců paralelně ze stejného zdroje. Eliminujete tak viditelný pokles jasu na vzdáleném konci pásku.</div>
            </section>

            <section id="bezpecnost">
              <h2>Bezpečnost a nejčastější chyby</h2>
              <p>LED pásky jsou relativně bezpečné, protože pracují na nízkém napětí. Riziko vzniká hlavně při špatném dimenzování napájecího zdroje, montáži na hořlavé podklady nebo nekvalitním příslušenství.</p>
              <ul>
                <li><strong>Nepokládejte pásek bez profilu na dřevo nebo sádrokarton</strong> – riziko přehřátí, zejména u výkonných pásků (14+ W/m)</li>
                <li><strong>Nedimenzujte zdroj na 100 % výkonu</strong> – přetížený zdroj se přehřívá a je požárním rizikem</li>
                <li><strong>Nekupujte nekvalitní zdroje bez certifikace</strong> – mohou způsobit požár nebo zkrat</li>
                <li><strong>Neinstalujte pásek s IP20 do vlhkých prostor</strong> – vlhkost způsobí oxidaci kontaktů a zkrat</li>
                <li><strong>Nepřekrývejte pásek tepelně izolačním materiálem</strong> – teplo se musí odvádět, jinak LED rychle degradují</li>
                <li><strong>Při připojování 230 V vždy vypněte jistič a ověřte absenci napětí zkoušečkou</strong> – při pochybnostech přivolejte elektrikáře</li>
              </ul>
              <p>Chcete-li LED pásky propojit s dalšími zařízeními v chytré domácnosti nebo měřit jejich spotřebu, podívejte se na článek o <Link href="/blog/chytra-zasuvka-a-mereni-spotreby" style={{ color: "#2a6496", textDecoration: "underline" }}>chytrých zásuvkách a měření spotřeby</Link>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Hotovou instalaci nechte zapnutou 30 minut a zkontrolujte teplotu profilu – měl by být teplý (40–50 °C), nikoli horký. Pokud se pásek nebo profil výrazně přehřívá, je příkon příliš vysoký na dané podmínky nebo chybí odvod tepla.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jaký napájecí zdroj zvolit pro LED pásek?", a: "Napájecí zdroj musí mít stejné napětí jako pásek (12 V nebo 24 V) a výkon alespoň o 20 % vyšší, než je součet příkonu všech metrů pásku. Příklad: 5 m pásku × 14 W/m = 70 W, volte zdroj alespoň 84 W. Rezerva chrání zdroj před přehřátím a prodlužuje jeho životnost." },
                  { q: "Mohu LED pásek nalepit přímo na dřevo nebo sádrokarton?", a: "Nedoporučuje se. LED pásek produkuje teplo, které se musí odvádět. Na hořlavém podkladu (dřevo, sádrokarton) může dojít k přehřátí a v krajním případě k požáru. Vždy použijte hliníkový profil nebo hliníkovou pásku pod LED pásek – hliník odvádí teplo a prodlužuje životnost diod." },
                  { q: "Jaký je rozdíl mezi SMD a COB LED páskem?", a: "SMD pásky mají oddělené diody viditelné jako jednotlivé body světla. COB (Chip on Board) pásky mají diody umístěné velmi blízko sebe, takže světlo je rovnoměrné bez viditelných bodů. COB pásky jsou dražší, ale vhodné všude, kde vadí nerovnoměrné osvětlení – například v skříních, za zrcadlem nebo jako dekorativní světlo." },
                  { q: "Jak LED pásek správně zkrátit?", a: "LED pásky lze stříhat pouze na vyznačených místech – každé 3, 5 nebo 10 cm jsou na pásku vytištěny nůžkové symboly nebo čáry. Střih jinde poškodí obvod a část pásku přestane svítit. Stříhejte ostrými nůžkami na střed označeného místa." },
                  { q: "Co je teplota světla a jakou zvolit pro domácnost?", a: "Teplota světla se udává v Kelvinech (K). Nižší hodnoty (2700–3000 K) dávají teplé žluté světlo vhodné do obývacích pokojů a ložnic. Střední hodnoty (3500–4000 K) jsou neutrální bílé, vhodné do kuchyní a pracoven. Vyšší hodnoty (5000–6500 K) jsou chladné, studené bílé, vhodné pro osvětlení dílen a garáží." },
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
                <li><a href="#typy-pasku">Typy LED pásků</a></li>
                <li><a href="#parametry">Klíčové parametry</a></li>
                <li><a href="#teplota-svetla">Teplota světla</a></li>
                <li><a href="#napajeci-zdroj">Napájecí zdroj</a></li>
                <li><a href="#prislusenstvi">Příslušenství</a></li>
                <li><a href="#montaz">Montáž krok za krokem</a></li>
                <li><a href="#bezpecnost">Bezpečnost</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/elektrika" className="sidebar-cat-link">⚡ Elektrika & osvětlení<span>33 článků →</span></Link>
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
