import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Zahrada pro opylovače: záhon pro včely a motýly",
  description: "Jak vytvořit záhon, který přitáhne včely, čmeláky a motýly. Které rostliny vybrat, jak plánovat průběžné kvetení od jara do podzimu a co naopak nedělat.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/zahrada-pro-opylovace" },
  openGraph: { title: "Zahrada pro opylovače: záhon pro včely a motýly", description: "Jak vytvořit záhon, který přitáhne včely, čmeláky a motýly. Které rostliny vybrat, jak plánovat průběžné kvetení od jara do podzimu a co naopak nedělat.", url: "https://www.domovniguru.cz/blog/zahrada-pro-opylovace", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-07-08T08:00:00Z", modifiedTime: "2026-07-08T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Zahrada%20pro%20opylova%C4%8De%3A%20z%C3%A1hon%20pro%20v%C4%8Dely%20a%20mot%C3%BDly&cat=blog", width: 1200, height: 630, alt: "Zahrada pro opylovače: záhon pro včely a motýly" }] },
  twitter: { card: "summary_large_image", title: "Zahrada pro opylovače: záhon pro včely a motýly", description: "Jak vytvořit záhon, který přitáhne včely, čmeláky a motýly. Které rostliny vybrat, jak plánovat průběžné kvetení od jara do podzimu a co naopak nedělat." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/zahrada-pro-opylovace#article", "headline": "Zahrada pro opylovače: záhon pro včely a motýly", "datePublished": "2026-07-08T08:00:00Z", "dateModified": "2026-07-08T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["zahrada pro opylovače", "včely na zahradě", "motýlí záhon", "rostliny pro opylovače", "hmyzí hotel", "levandule zahrada", "ekologická zahrada"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Zahrada & terasa", "item": "https://www.domovniguru.cz/blog/kategorie/zahrada" }, { "@type": "ListItem", "position": 4, "name": "Zahrada pro opylovače", "item": "https://www.domovniguru.cz/blog/zahrada-pro-opylovace" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Která rostlina je nejlepší pro včely?", "acceptedAnswer": { "@type": "Answer", "text": "Mezi nejlepší rostliny pro včely patří levandule, yzop, máta, meduňka, šalvěj, chrpa, sléz, fazole tyčková a ovocné stromy (třešeň, jabloň, švestka). Klíčem je výběr prostých, jednoduchých květů – plnokvěté kultivary mají nektárium zakrslé nebo zcela chybějící." } }, { "@type": "Question", "name": "Proč ubývá včel a čmeláků?", "acceptedAnswer": { "@type": "Answer", "text": "Hlavními příčinami úbytku opylovačů jsou ztráta habitatu (zánik luk, alejí a mezí), používání pesticidů (zejména neonikotinoidů), choroby (roztoč Varroa u včel) a klimatické změny. Každá zahrada s pestrými kvetoucími rostlinami a bez chemie tuto situaci částečně pomáhá zlepšit." } }, { "@type": "Question", "name": "Jsou plnokvěté kultivary nebezpečné pro opylovače?", "acceptedAnswer": { "@type": "Answer", "text": "Plnokvěté kultivary (např. plnokvěté růže, plnokvěté begónie) nejsou přímo nebezpečné, ale jsou pro opylovače prakticky bezcenné – jejich přeplněné okvětní lístky zakrývají nebo zcela nahrazují tyčinky a pestíky, takže nektar a pyl nejsou přístupné. Nahraď je prostými jednokvětými odrůdami." } }, { "@type": "Question", "name": "Co je hmyzí hotel a jak ho postavit?", "acceptedAnswer": { "@type": "Answer", "text": "Hmyzí hotel je struktura z přírodních materiálů, kde solitérní včely, čmeláci a jiný hmyz mohou hnízdovat a přezimovat. Stavíš ho z dutých stonků (bambus, černý bez), vyvrtaných špalků, suchého listí a šišek. Umísti ho na slunném, klidném místě ve výšce 1–1,5 m a zajisti, aby byl suchý – vlhkost je největším nepřítelem." } }, { "@type": "Question", "name": "Které invazivní druhy nesmím pěstovat v zahradě pro opylovače?", "acceptedAnswer": { "@type": "Answer", "text": "Na zahradě se vyvaruj zlatobýlu kanadského (Solidago canadensis), křídlatky japonské (Reynoutria japonica), netýkavky žláznaté (Impatiens glandulifera) a bolševníku velkolepého (Heracleum mantegazzianum). Tyto druhy jsou zákonem regulovány nebo zcela zakázány a vytlačují původní vegetaci, na které závisí specializovaní opylovači." } }] }] };

const RELATED = [
  { title: "Bylinková zahrádka: jak pěstovat bylinky na záhonu i v nádobě", href: "/blog/bylinkova-zahradka", read: "5 min" },
  { title: "Jak se zbavit plevele bez chemie", href: "/blog/zbavit-se-plevele-bez-chemie", read: "4 min" },
  { title: "Mulčování záhonů: proč a jak mulčovat zahradu", href: "/blog/mulcovani-zahrady", read: "4 min" },
  { title: "Jarní zahrada: co zasadit a kdy začít", href: "/blog/jarni-zahrada", read: "5 min" },
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
              <Link href="/blog/kategorie/zahrada">Zahrada &amp; terasa</Link><span className="breadcrumb-sep">/</span>
              <span>Zahrada pro opylovače</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada &amp; terasa</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Zahrada pro opylovače: záhon pro včely a motýly</h1>
              <p className="article-lead">Opylovačů ubývá – ale každá zahrada, i ta malá, může situaci zlepšit. Stačí vybrat správné rostliny, naplánovat záhon tak, aby kvetl od března do října, omezit chemii a přidat pár přírodních prvků. Tenhle článek ti ukáže, jak na to krok za krokem.</p>
              <div className="article-meta-row"><span>Aktualizováno: 8. července 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#proc-opylovaci">Proč na opylovačích záleží</a></li>
                <li><a href="#rostliny">Které rostliny přitahují včely a motýly</a></li>
                <li><a href="#planovani">Jak plánovat záhon pro průběžné kvetení</a></li>
                <li><a href="#plnokvete">Plnokvěté kultivary – velká past</a></li>
                <li><a href="#snizit-chemii">Jak snížit chemii na zahradě</a></li>
                <li><a href="#hmyzi-hotel">Hmyzí hotely a zálivkové místo</a></li>
                <li><a href="#co-nepestovat">Co nepěstovat: invazivní druhy</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="proc-opylovaci">
              <h2>Proč na opylovačích záleží</h2>
              <p>Opylovači – včely, čmeláci, motýli, pestřenky a mnoho dalších druhů hmyzu – zajišťují opylení přibližně <strong>třetiny veškeré potravy, kterou lidé konzumují</strong>. Bez nich by přestala plodit většina ovocných stromů, zeleniny a polních plodin. Přestože si to málo lidí uvědomuje, úbytek opylovačů je jeden z největších ekologických problémů současnosti.</p>
              <p>V posledních desetiletích ubylo v Evropě více než 75 % létajícího hmyzu (podle německé dlouhodobé studie z roku 2017). Příčiny jsou kombinací faktorů: intenzivní zemědělství s pesticidy, ztráta přirozených habitatů (luční lemy, aleje, meze), změna klimatu a choroby jako roztoč Varroa u medonosných včel.</p>
              <p>Co může zahradník udělat? Rozhodně ne nic malého. Odhaduje se, že zahrady v Česku a Německu dohromady tvoří větší plochu než všechny přírodní rezervace. Každá zahrada s pestrými kvetoucími rostlinami a bez postřiků je miniaturní přírodní rezervací.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Chceš vědět, kolik opylovačů máš na zahradě? Zkus „bee count" – v teplém slunečném dni sedni k záhonu a 15 minut počítej navštěvující hmyz na 1 m². Výsledek tě možná překvapí – nebo přiměje k akci.</div>
            </section>

            <section id="rostliny">
              <h2>Které rostliny přitahují včely a motýly</h2>
              <p>Opylovači preferují rostliny s jednoduchými, přístupnými květy a s dostatkem nektaru a pylu. Čím pestřejší sortiment, tím více druhů hmyzu přilákáš – různé druhy včel a čmeláků mají různě dlouhé sosáky a preferují různé tvary květů.</p>
              <h3>Byliny a aromatické rostliny</h3>
              <p>Tato skupina je pro zahradníka skvělá hned dvakrát: slouží do kuchyně i pro opylovače.</p>
              <ul>
                <li><strong>Levandule (Lavandula angustifolia)</strong> – absolutní šampion pro včely, kvete červen–srpen, nenáročná na péči, miluje slunné suché místo</li>
                <li><strong>Máta (Mentha)</strong> – velmi oblíbená u čmeláků i motýlů, kvete od července, rychle se rozrůstá (výhodné ji pěstovat v nádobě)</li>
                <li><strong>Yzop (Hyssopus officinalis)</strong> – polokeř s modrými kvítky, kvete od července do září, extrémně atraktivní pro čmeláky a pestřenky</li>
                <li><strong>Meduňka (Melissa officinalis)</strong> – nenápadné bílé kvítky, ale nesmírně bohaté nektarem; včely na ni doslova létají</li>
                <li><strong>Šalvěj (Salvia officinalis a S. pratensis)</strong> – modrофialové kvítky se speciálním tvarem, který je vhodný pro čmeláky s delším sosákem</li>
                <li><strong>Fenykl (Foeniculum vulgare)</strong> – žluté okoličnaté květy, oblíbené u pestřenek, motýlů (zejména otakárek) a solitérních včel</li>
                <li><strong>Dobromysl/Oregano (Origanum vulgare)</strong> – skromná, ale pro hmyz velmi cenná rostlina; kvete od července</li>
              </ul>
              <h3>Trvalky a divoké druhy</h3>
              <ul>
                <li><strong>Chrpa (Centaurea cyanus)</strong> – jedna z nejcennějších rostlin pro opylovače v Čechách, bohužel z polí téměř vymizela; v zahradě snadno z přísevů</li>
                <li><strong>Sléz (Malva sylvestris)</strong> – vysoký, přirozený, kvete od června; oblíbený u čmeláků i solitérních včel</li>
                <li><strong>Kokoška pastuší tobolka (Capsella bursa-pastoris)</strong> a planá hořčice – bylinné plevele, které při kontrolovaném výskytu nabídnou dřívější kvetení</li>
                <li><strong>Koniklec (Pulsatilla vulgaris)</strong> – kvete velmi brzy (březen–duben), jeden z prvních zdrojů pylu pro čmeláky vylézající z přezimování</li>
                <li><strong>Jetel červený a bílý (Trifolium)</strong> – nechej část trávníku nesekat, kde jetel kvete; je to zlatý důl nektaru</li>
                <li><strong>Pampeliška (Taraxacum)</strong> – nedoceněná; kvete brzy na jaře, kdy jiných zdrojů nektaru skoro není</li>
                <li><strong>Berbel/kotvičník (Berberis)</strong> – keř s výraznými žlutými kvítky, oblíbený u včel</li>
              </ul>
              <h3>Letničky a dvouletky</h3>
              <ul>
                <li><strong>Slunečnice (Helianthus annuus)</strong> – jednoduchá žlutá (ne plnokvětá!), obrovský zdroj pylu; oblíbená u solitérních i medonosných včel</li>
                <li><strong>Phacelia (Phacelia tanacetifolia)</strong> – modrá letní letnička, jedna z nejatraktivnějších pro všechny opylovače; rychle klíčí z přímého výsevu</li>
                <li><strong>Topolovka (Alcea rosea)</strong> – dvouletka, vysoká, kvete od července; oblíbená u čmeláků s dlouhým sosákem</li>
                <li><strong>Ostrožka (Consolida regalis)</strong> – letnička s modrými nebo fialovými kvítky, oblíbená u čmeláků</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Phacelia je tzv. „zeleným hnojením" – po odkvětu ji prostě zakopej do záhonu. Zlepší půdu, nasype spoustu nektaru a semen pro ptáky. Je to téměř dokonalá zahradní rostlina.</div>
            </section>

            <section id="planovani">
              <h2>Jak plánovat záhon pro průběžné kvetení od jara do podzimu</h2>
              <p>Cílem je zajistit <strong>nepřetržitý zdroj nektaru a pylu</strong> od prvního tání (únor–březen) až do pozdního podzimu (říjen–listopad). Opylovači jsou aktivní po celé toto období a potřebují kontinuální zásobování.</p>
              <h3>Jarní kvetení (únor–duben)</h3>
              <p>V tomto období jsou přírodní zdroje nektaru vzácné, a přesto čmeláčí královny a přezimované motýli (babočka, batolec) potřebují potravu. Vyber:</p>
              <ul>
                <li>Koniklec, sněženky, bledule (Leucojum)</li>
                <li>Vrba jíva (Salix caprea) – nejcennější jarní strom pro včely</li>
                <li>Bez černý (Sambucus nigra) – kvete v červnu, ale brzy začíná pučet</li>
                <li>Třešeň, jabloň, meruňka – ovocné stromy jsou v březnu–dubnu výborný zdroj nektaru</li>
              </ul>
              <h3>Letní kvetení (červen–srpen)</h3>
              <p>Toto je hlavní sezóna – nejvíce opylovačů, nejvíce potřeby nektaru. Zahrň levanduli, yzop, mátu, chrpu, slunečnici, phacelii, topolovku, sléz a různé bylinky. Kombinuj různé výšky (nízké koberce, střední trvalky, vyšší letničky) pro vizuální efekt i pro různé skupiny hmyzu.</p>
              <h3>Podzimní kvetení (září–říjen)</h3>
              <p>V podzimu zdroje rapidně ubývají, ale opylovači jsou stále aktivní a sbírají zásoby na zimu. Vynikající podzimní rostliny:</p>
              <ul>
                <li><strong>Poskonec (Eupatorium)</strong> – vysoká trvalka, kvetoucí od srpna do října, oblíbená u motýlů</li>
                <li><strong>Rudbekia (Rudbeckia)</strong> – jasně žlutá, kvete do října, skvělá pro pestřenky a solitérní včely</li>
                <li><strong>Hvězdnice (Aster/Symphyotrichum)</strong> – fialové nebo růžové hvězdičky v září–říjnu; nevynechej druhy jako Aster amellus nebo novoanglické hvězdnice</li>
                <li><strong>Horthenzie pnoucí (Hydrangea petiolaris)</strong> – pozdní kvetení, oblíbená u pestřenek</li>
                <li><strong>Helenium (Helenium autumnale)</strong> – bohatý zdroj pylu v září</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Nakresli si na papír jednoduchý harmonogram kvetení: sloupce = měsíce (II–X), řádky = tvé rostliny. Vyplň, kdy každá kvete. Uvidíš přehledně, jestli nemáš „díry" v kvetení a kde doplnit záhon.</div>
            </section>

            <section id="plnokvete">
              <h2>Plnokvěté kultivary – velká past pro zahradníky</h2>
              <p>Zahradnické obchody nabízejí spoustu atraktivních plnokvětých (anglicky „double flower") odrůd, které vypadají skvěle – nápěchované okvětní lístky, obrovské trsnaté květy. Pro opylovače jsou však téměř bezcenné nebo úplně bezcenné.</p>
              <p><strong>Proč?</strong> U plnokvětých kultivarů jsou tyčinky a pestíky (= zdroje pylu a nektaru) přeměněny na další okvětní lístky. Hmyz se do takového květu nemůže dostat, případně tam nenajde nic k jídlu. Typické příklady problematických kultivarů:</p>
              <ul>
                <li>Plnokvěté slunečnice (varianty „Teddy bear")</li>
                <li>Plnokvěté begónie a muškáty (pelargónie)</li>
                <li>Plnokvěté zimní akonity a sasanky</li>
                <li>Plnokvěté chrpy (kultivar „Ball Blue", „Black Ball" je ok, ale „Blue Boy" plnokvěté jsou problematické)</li>
                <li>Zahradní pivoňky – jejich těžké plnokvěté květy jsou jen minimálně přístupné</li>
              </ul>
              <p>To neznamená, že je vůbec nesmíš mít – jen neřaď je do záhonu pro opylovače jako hlavní prvek. Kombinuj je s prostými, jednoduchými odrůdami ve stejném záhonu.</p>
            </section>

            <section id="snizit-chemii">
              <h2>Jak snížit chemii na zahradě</h2>
              <p>Pesticidy – zejména insekticidy a herbicidy – jsou pro opylovače smrtelně nebezpečné. Nejproblematičtější jsou <strong>neonikotinoidy</strong> (imidakloprid, thiamethoxam, klothianidin), které jsou v EU od roku 2018 zakázány pro venkovní použití na polích, ale v zahradnických přípravcích se stále mohou vyskytovat. Před nákupem si přečti složení.</p>
              <h3>Alternativy ke chemii</h3>
              <ul>
                <li><strong>Fyzická ochrana</strong> – síťoviny, zábrany (nejlepší u kořenové zeleniny, viz článek <Link href="/blog/jak-pestovat-mrkev-a-koreninovou-zeleninu" style={{ color: "#2a6496", textDecoration: "underline" }}>pěstování mrkve</Link>)</li>
                <li><strong>Přírodní postřiky</strong> – ředěný rostlinný výluh z kopřiv nebo přesličky posiluje rostliny a odpuzuje mšice</li>
                <li><strong>Biologická ochrana</strong> – mariška (Coccinellidae), zlatoočka (Chrysopa) a střevlíci jsou přirození predátoři mšic; jejich přítomnost podporuje absence chemie</li>
                <li><strong>Mýdlový postřik</strong> – na mšice funguje ředěný roztok přírodního mýdla (ne syntetický saponát); aplikuj výhradně večer, kdy nejsou opylovači aktivní</li>
                <li><strong>Rotace plodin a smíšená výsadba</strong> – různorodý záhon s bylinami (bazalka, kopr) odradí mnoho škůdců přirozenou cestou</li>
              </ul>
              <p>Pokud přece jen musíš použít chemii, aplikuj ji <strong>výhradně večer</strong>, kdy jsou opylovači neaktivní, a nikdy na kvetoucí rostliny. Dbej na dobu karenci.</p>
            </section>

            <section id="hmyzi-hotel">
              <h2>Hmyzí hotely a zálivkové místo pro hmyz</h2>
              <h3>Hmyzí hotel</h3>
              <p>Hmyzí hotel poskytuje hnízdiště pro solitérní včely (čalounici, pískorypku, ploskorohce) a jiný užitečný hmyz. Na rozdíl od medonosných včel, které žijí v koloniích, solitérní druhy potřebují malé dutiny pro jednotlivá vajíčka.</p>
              <p>Jak ho sestavit nebo koupit:</p>
              <ul>
                <li><strong>Dutiny pro včely:</strong> bambusové stonky nebo vyvrtané špalky tvrdého dřeva (dub, buk) s otvory průměru 3–10 mm, hloubka min. 8–10 cm; otvory musí být hladce vyříznuty, bez třísek</li>
                <li><strong>Suchý materiál pro přezimování:</strong> suchá šiška, suchý mech, suché listí (pro kukly motýlů a broučky)</li>
                <li><strong>Umístění:</strong> slunné místo (jihozápad), chráněné před deštěm a větrem, ve výšce 1–1,5 m nad zemí</li>
                <li><strong>Orientace otvorů:</strong> vždy vodorovně nebo mírně nakloněné dolů, nikdy svisle – voda by zatékala dovnitř</li>
              </ul>
              <p>Hmyzí hotel je efektivní jen pokud jsou v blízkosti (do 300 m) kvetoucí rostliny pro sběr potravy. Solitérní včely mají malý akční rádius.</p>
              <h3>Zálivkové místo pro hmyz</h3>
              <p>Opylovači potřebují vodu – zejména v letních vedrech. Vytvoř jednoduché zálivkové místo:</p>
              <ul>
                <li>Mělká mísa nebo talíř naplněný kamínky a vodou (kamínky slouží jako přistávací plocha, hmyz se neutopí)</li>
                <li>Vodu doplňuj každý den nebo obden, čistá voda je klíčová</li>
                <li>Umísti ho do stínu nebo polostínu, aby se voda nepřehřívala a neodpařovala příliš rychle</li>
                <li>Větší zahradníci mohou vytvořit malou mokřadní plochu nebo mělký zahradní jezírek – ten přitahuje i vodní hmyz (vážky, vodomilky) a žáby, které loví škůdce</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Nech uschnout část stonků trvalek na místě přes zimu – dutý stonek šalvěje nebo konopice je přirozené zimní hnízdiště solitérní včely. Stonky odstraňuj až v dubnu, kdy se larvy probudí a vyletí.</div>
            </section>

            <section id="co-nepestovat">
              <h2>Co nepěstovat: invazivní druhy v zahradě</h2>
              <p>Zahrada pro opylovače by neměla být zdrojem problémů pro okolní přírodu. Některé okrasné rostliny jsou v Česku nebo EU označeny jako invazivní – vytlačují původní druhy a specialisté opylovači pak ztrácejí přirozený habitat.</p>
              <h3>Zákonem regulované nebo zcela zakázané druhy</h3>
              <ul>
                <li><strong>Křídlatka japonská a sachalinská (Reynoutria japonica, R. sachalinensis)</strong> – roste extrémně agresivně, zcela vytlačí okolní vegetaci; v ČR se nesmí šířit do volné přírody</li>
                <li><strong>Bolševník velkolepý (Heracleum mantegazzianum)</strong> – nebezpečný i pro lidi (popáleniny od šťávy), zákonem povinná likvidace</li>
                <li><strong>Zlatobýl kanadský (Solidago canadensis)</strong> – populární okrasná trvalka, ale vytlačuje původní byliny na loukách; pokud ho pěstuješ, pravidelně odstraňuj výhonky za plot</li>
                <li><strong>Netýkavka žláznatá (Impatiens glandulifera)</strong> – rychle se šíří podél vodotečí; přitahuje sice včely, ale je na unijním seznamu invazivních druhů</li>
              </ul>
              <h3>Druhy, které je vhodné omezit</h3>
              <ul>
                <li><strong>Akát (Robinia pseudoacacia)</strong> – výborný pro včely, ale v přírodě vytlačuje původní vegetaci suchých stanovišť; na zahradě ok, ale neosazuj jím mezní plochy u lesů</li>
                <li><strong>Mahónie cesmínolistá (Mahonia aquifolium)</strong> – oblíbená zimozelenost, ale se šíří do lesů; alternativou jsou dříny nebo hloh</li>
                <li><strong>Svída bílá (Cornus alba) a svidina</strong> – naopak jsou v pořádku; jsou planě rostoucí v Čechách</li>
              </ul>
              <p>Alternativně volíš původní české druhy (sléz, chrpa, hvozdík, jetel, trnka, hloh, bez černý, kalina), které jsou pro specializované opylovače cenné – na tyto druhy jsou navázáni housenky vzácných motýlů i larvičky solitérních včel.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Chceš vysadit keř atraktivní pro opylovače? Trnka (Prunus spinosa) je jedna z nejlepších voleb: brzy kvete (únor–březen), nabídne husté hnízdiště ptákům a plody slouží jako potrava. Podobně výborný je hloh (Crataegus).</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Která rostlina je nejlepší pro včely?", a: "Mezi nejlepší rostliny pro včely patří levandule, yzop, máta, meduňka, šalvěj, chrpa, sléz, fazole tyčková a ovocné stromy (třešeň, jabloň, švestka). Klíčem je výběr prostých, jednoduchých květů – plnokvěté kultivary mají nektárium zakrslé nebo zcela chybějící." },
                  { q: "Proč ubývá včel a čmeláků?", a: "Hlavními příčinami úbytku opylovačů jsou ztráta habitatu (zánik luk, alejí a mezí), používání pesticidů (zejména neonikotinoidů), choroby (roztoč Varroa u včel) a klimatické změny. Každá zahrada s pestrými kvetoucími rostlinami a bez chemie tuto situaci částečně pomáhá zlepšit." },
                  { q: "Jsou plnokvěté kultivary nebezpečné pro opylovače?", a: "Plnokvěté kultivary (např. plnokvěté růže, plnokvěté begónie) nejsou přímo nebezpečné, ale jsou pro opylovače prakticky bezcenné – jejich přeplněné okvětní lístky zakrývají nebo zcela nahrazují tyčinky a pestíky, takže nektar a pyl nejsou přístupné. Nahraď je prostými jednokvětými odrůdami." },
                  { q: "Co je hmyzí hotel a jak ho postavit?", a: "Hmyzí hotel je struktura z přírodních materiálů, kde solitérní včely, čmeláci a jiný hmyz mohou hnízdovat a přezimovat. Stavíš ho z dutých stonků (bambus, černý bez), vyvrtaných špalků, suchého listí a šišek. Umísti ho na slunném, klidném místě ve výšce 1–1,5 m a zajisti, aby byl suchý – vlhkost je největším nepřítelem." },
                  { q: "Které invazivní druhy nesmím pěstovat v zahradě pro opylovače?", a: "Na zahradě se vyvaruj zlatobýlu kanadského (Solidago canadensis), křídlatky japonské (Reynoutria japonica), netýkavky žláznaté (Impatiens glandulifera) a bolševníku velkolepého (Heracleum mantegazzianum). Tyto druhy jsou zákonem regulovány nebo zcela zakázány a vytlačují původní vegetaci, na které závisí specializovaní opylovači." },
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
                    <div className="card-eyebrow-row"><span>Zahrada &amp; terasa</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#proc-opylovaci">Proč na opylovačích záleží</a></li>
                <li><a href="#rostliny">Rostliny pro včely a motýly</a></li>
                <li><a href="#planovani">Plánování záhonu</a></li>
                <li><a href="#plnokvete">Plnokvěté kultivary</a></li>
                <li><a href="#snizit-chemii">Snížit chemii</a></li>
                <li><a href="#hmyzi-hotel">Hmyzí hotel a zálivka</a></li>
                <li><a href="#co-nepestovat">Co nepěstovat</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/zahrada" className="sidebar-cat-link">🌿 Zahrada &amp; terasa<span>40 článků →</span></Link>
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
