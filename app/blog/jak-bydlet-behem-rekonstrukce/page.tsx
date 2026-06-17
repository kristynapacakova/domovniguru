import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak přežít bydlení během rekonstrukce bytu – průvodce 2026",
  description: "Kdy zůstat bydlet a kdy se odstěhovat, jak si zařídit provizorní zázemí, ochránit věci před prachem a vyřešit vaření i hygienu bez kuchyně a koupelny.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-bydlet-behem-rekonstrukce" },
  openGraph: {
    title: "Jak přežít bydlení během rekonstrukce bytu – průvodce 2026",
    description: "Kdy zůstat bydlet a kdy se odstěhovat, jak si zařídit provizorní zázemí a zvládnout vaření i hygienu bez kuchyně a koupelny.",
    url: "https://www.domovniguru.cz/blog/jak-bydlet-behem-rekonstrukce",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "article",
    publishedTime: "2026-06-17T08:00:00Z",
    modifiedTime: "2026-06-17T08:00:00Z",
    authors: ["DomovniGuru"],
    images: [{ url: "/api/og?title=Jak%20p%C5%99e%C5%BE%C3%ADt%20bydlen%C3%AD%20b%C4%9Bhem%20rekonstrukce%20bytu%20%E2%80%93%20pr%C5%AFvodce%202026&cat=blog", width: 1200, height: 630, alt: "Jak přežít bydlení během rekonstrukce bytu – průvodce 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jak přežít bydlení během rekonstrukce bytu – průvodce 2026",
    description: "Kdy zůstat bydlet, jak si zařídit provizorní zázemí a zvládnout vaření i hygienu bez kuchyně a koupelny.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.domovniguru.cz/blog/jak-bydlet-behem-rekonstrukce#article",
      "headline": "Jak přežít bydlení během rekonstrukce bytu – průvodce 2026",
      "description": "Kdy zůstat bydlet a kdy se odstěhovat, jak si zařídit provizorní zázemí, ochránit věci před prachem a vyřešit vaření i hygienu bez kuchyně a koupelny.",
      "datePublished": "2026-06-17T08:00:00Z",
      "dateModified": "2026-06-17T08:00:00Z",
      "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.domovniguru.cz/blog/jak-bydlet-behem-rekonstrukce" },
      "inLanguage": "cs",
      "keywords": ["bydlení během rekonstrukce", "rekonstrukce bytu za chodu", "jak přežít rekonstrukci", "ochrana před prachem při rekonstrukci", "vaření bez kuchyně při rekonstrukci"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.domovniguru.cz/blog/jak-bydlet-behem-rekonstrukce#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" },
        { "@type": "ListItem", "position": 3, "name": "Stěhování & rekonstrukce", "item": "https://www.domovniguru.cz/blog/kategorie/stehovani" },
        { "@type": "ListItem", "position": 4, "name": "Jak přežít bydlení během rekonstrukce", "item": "https://www.domovniguru.cz/blog/jak-bydlet-behem-rekonstrukce" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.domovniguru.cz/blog/jak-bydlet-behem-rekonstrukce#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Mám se během rekonstrukce odstěhovat, nebo zůstat v bytě?", "acceptedAnswer": { "@type": "Answer", "text": "Záleží na rozsahu prací. Pokud rekonstruujete jedinou koupelnu nebo kuchyni a nemáte náhradní funkční variantu (druhou koupelnu, alespoň provizorní vaření), je lepší se na tu dobu odstěhovat k rodině nebo do krátkodobého pronájmu. Při malování nebo výměně podlahy v jedné místnosti zůstat v bytě obvykle zvládnete." } },
        { "@type": "Question", "name": "Jak se chránit před prachem při rekonstrukci, když v bytě bydlím?", "acceptedAnswer": { "@type": "Answer", "text": "Přelepte dveře a větrací otvory do rekonstruovaných prostor fólií a malířskou páskou, vypněte na tu dobu rekuperaci nebo ventilátory, které by prach roztahovaly po bytě, a citlivé věci jako elektroniku a textil přesuňte do uzavřených skříní nebo jiné místnosti." } },
        { "@type": "Question", "name": "Jak vařit, když mám rekonstrukci kuchyně?", "acceptedAnswer": { "@type": "Answer", "text": "Zařiďte si provizorní vaření s mikrovlnkou, jedním vařičem a rychlovarnou konvicí v jiné místnosti. Sestavte si jednoduchý jídelní lístek na pár týdnů – polévky, jednohubky, jídla z trouby nebo z jednoho hrnce. Pomůže i sada kempinkového nádobí, kterou pak nemusíte mít v kuchyni." } },
        { "@type": "Question", "name": "Jak se umyju, když nemám funkční koupelnu?", "acceptedAnswer": { "@type": "Answer", "text": "Domluvte se s rodinou nebo přáteli v okolí na pravidelném sprchování, nebo si pořiďte krátkodobou permanentku do fitness centra či wellness se sprchami. Pro nejnutnější potřebu může pomoct chemické nebo suché WC, ale jde čistě o krajní řešení na pár dní." } },
        { "@type": "Question", "name": "Jak se domluvit s řemeslníky na harmonogramu prací?", "acceptedAnswer": { "@type": "Answer", "text": "Na začátku si s řemeslníky ujasněte, ve kterých dnech a hodinách bude přístup do bytu omezený, a požádejte o postupné dokončování po jednotlivých místnostech. Usnadní vám to plánovat běžný chod domácnosti a víte přesně, kdy budete bez vody nebo elektřiny." } },
        { "@type": "Question", "name": "Jak ochránit děti a domácí mazlíčky během rekonstrukce?", "acceptedAnswer": { "@type": "Answer", "text": "Rekonstruovanou část bytu důsledně oddělte – uzamykatelnými dveřmi nebo alespoň zábranou – ať se děti a zvířata nedostanou k nářadí, prachu nebo otevřené elektroinstalaci. Při hlučnějších nebo prašnějších pracích je lepší na pár hodin odejít z bytu úplně." } },
      ],
    },
    {
      "@type": "HowTo",
      "@id": "https://www.domovniguru.cz/blog/jak-bydlet-behem-rekonstrukce#howto",
      "name": "Jak přežít bydlení během rekonstrukce bytu",
      "description": "Kdy zůstat bydlet a kdy se odstěhovat, jak si zařídit provizorní zázemí, ochránit věci před prachem a vyřešit vaření i hygienu bez kuchyně a koupelny.",
      "step": [
        { "@type": "HowToStep", "name": "Posuďte rozsah rekonstrukce", "text": "Rekonstrukce koupelny nebo kuchyně bez náhradní funkční varianty znamená výrazné omezení – zvažte dočasné odstěhování. Malování nebo výměna podlahy v jedné místnosti je obvykle zvládnutelná i s bydlením v bytě." },
        { "@type": "HowToStep", "name": "Zařiďte si provizorní zázemí", "text": "Vyberte jednu klidnou místnost, kam se po dobu prací přesunete s nejnutnějším – matrace, oblečení, základní kuchyňské potřeby a nabíječky." },
        { "@type": "HowToStep", "name": "Ochraňte byt před prachem", "text": "Přelepte dveře a větrací otvory fólií a malířskou páskou, citlivé věci jako elektroniku a textil přesuňte do uzavřených prostor nebo úplně z bytu." },
        { "@type": "HowToStep", "name": "Vyřešte vaření bez kuchyně", "text": "Zařiďte si provizorní vaření s mikrovlnkou a vařičem, naplánujte jednoduchý jídelní lístek a využijte kempinkové nádobí." },
        { "@type": "HowToStep", "name": "Vyřešte hygienu bez koupelny", "text": "Domluvte se s rodinou nebo přáteli na sprchování, zvažte permanentku do fitness centra s wellness, suché WC použijte jen jako krajní řešení." },
        { "@type": "HowToStep", "name": "Domluvte harmonogram s řemeslníky", "text": "Ujasněte si dny a hodiny s omezeným přístupem do bytu a požádejte o postupné dokončování po jednotlivých místnostech." },
      ],
    },
  ],
};

const RELATED = [
  { title: "Jak naplánovat rekonstrukci bytu krok za krokem", href: "/blog/planovani-rekonstrukce-bytu", read: "6 min" },
  { title: "Jak se zbavit zápachu po rekonstrukci", href: "/blog/zbavit-byt-zapachu-po-rekonstrukci", read: "4 min" },
  { title: "Stěhovací checklist – na co nezapomenout", href: "/blog/stehovani-checklist", read: "5 min" },
  { title: "Jak odhalit skryté vady bytu před koupí", href: "/blog/odhalit-skryte-vady-bytu", read: "6 min" },
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
              <span>Jak přežít bydlení během rekonstrukce</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏗️ Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 7 min čtení</span>
              </div>
              <h1 className="article-h1">Jak přežít bydlení během rekonstrukce bytu</h1>
              <p className="article-lead">Rekonstrukce za chodu je fyzicky i psychicky náročná, ale s trochou plánování ji zvládnete bez zbytečného stresu. Tady je praktický návod, jak si zařídit provizorní zázemí, ochránit věci před prachem a přežít týdny bez kuchyně nebo koupelny.</p>
              <div className="article-meta-row">
                <span>Aktualizováno: 17. června 2026</span><span>·</span><span>DomovniGuru</span>
              </div>
              <ShareButtons url="https://www.domovniguru.cz/blog/jak-bydlet-behem-rekonstrukce" title="Jak přežít bydlení během rekonstrukce bytu" />
            </header>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#zustat-nebo-odstehovat">Zůstat bydlet, nebo se odstěhovat?</a></li>
                <li><a href="#provizorni-zazemi">Provizorní zázemí v bytě</a></li>
                <li><a href="#ochrana-pred-prachem">Ochrana před prachem</a></li>
                <li><a href="#vareni-bez-kuchyne">Vaření bez kuchyně</a></li>
                <li><a href="#hygiena-bez-koupelny">Hygiena bez koupelny</a></li>
                <li><a href="#komunikace-s-remeslniky">Komunikace s řemeslníky</a></li>
                <li><a href="#psychicka-stranka">Psychická stránka rekonstrukce</a></li>
                <li><a href="#bezpecnost-deti-a-zvirat">Bezpečnost dětí a domácích mazlíčků</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="zustat-nebo-odstehovat">
              <h2>Zůstat bydlet, nebo se odstěhovat?</h2>
              <p>První otázka, kterou je potřeba si zodpovědět ještě před začátkem prací, je, jestli v bytě po dobu rekonstrukce vůbec zůstat. Odpověď závisí hlavně na tom, co se rekonstruuje a jestli máte náhradní funkční variantu.</p>
              <h3>Kdy je odstěhování téměř nutné</h3>
              <p>Rekonstrukce <strong>koupelny nebo kuchyně</strong> bez náhradní funkční verze znamená, že několik týdnů nebudete mít kde se umyt nebo uvařit. Pokud máte jen jednu koupelnu a ta jde celá pod kladivo, nebo bouráte jedinou kuchyň v bytě, dlouhodobé bydlení v takových podmínkách je vyčerpávající a často i nepraktické. V takovém případě se vyplatí na dobu prací bydlet u rodiny, přátel, nebo si zařídit krátkodobý pronájem.</p>
              <h3>Kdy zůstat v bytě dává smysl</h3>
              <p>Pokud se řeší <strong>malování, výměna podlahy nebo úprava jedné místnosti</strong>, zatímco zbytek bytu funguje normálně, zůstat doma je obvykle zvládnutelné. Stačí si tu místnost na čas prací uzavřít a přesunout potřebné věci jinam.</p>
              <h3>Co zvážit při rozhodování</h3>
              <ul>
                <li>Kolik koupelen a kuchyní v bytě máte – jedna versus víc</li>
                <li>Délku prací – víkendová akce se zvládne jinak než šestitýdenní rekonstrukce</li>
                <li>Jestli máte v okolí rodinu nebo přátele, kde můžete dočasně přespávat nebo se sprchovat</li>
                <li>Rozpočet – krátkodobý pronájem nebo hotel stojí peníze, které je třeba započítat do <Link href="/blog/odhadnout-cenu-rekonstrukce">celkové ceny rekonstrukce</Link></li>
              </ul>
            </section>

            <section id="provizorni-zazemi">
              <h2>Provizorní zázemí v bytě</h2>
              <p>Pokud se rozhodnete v bytě zůstat, vyplatí se hned na začátku vyčlenit jednu klidnou místnost jako "základní tábor" – prostor, kam se po dobu prací stáhnete s nejnutnějším.</p>
              <h3>Co do provizorního zázemí patří</h3>
              <ul>
                <li><strong>Matrace nebo rozkládací postel</strong> – i v ložnici, kde normálně nespíte</li>
                <li><strong>Pár kusů oblečení na běžné dny</strong>, zbytek uložte v krabicích mimo prach</li>
                <li><strong>Základní kuchyňské potřeby</strong> – pár talířů, hrnky, příbory, otvírák</li>
                <li><strong>Nabíječky, notebook, doklady</strong> – věci, které potřebujete denně po ruce</li>
                <li><strong>Lékárnička a hygienické potřeby</strong> na minimum</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Zázemí si zařiďte v místnosti nejdál od rekonstruovaného prostoru a s funkčními dveřmi, které lze zavřít – ušetří vás to od většiny prachu a hluku.</div>
            </section>

            <section id="ochrana-pred-prachem">
              <h2>Ochrana před prachem</h2>
              <p>Stavební prach se dostane všude, kde mu dáte příležitost. Většině se ale dá předejít jednoduchou bariérou mezi rekonstruovaným a obývaným prostorem.</p>
              <h3>Zatěsnění dveří a otvorů</h3>
              <p>Dveře do rekonstruovaných místností přelepte po okrajích fólií a malířskou páskou – stejně jako klíčové dírky a štěrbiny pod dveřmi. Pokud máte v bytě <strong>větrací otvory nebo rekuperaci</strong>, dočasně je přelepte nebo vypněte, jinak prach roztáhnou po celém bytě.</p>
              <h3>Přesun citlivých věcí</h3>
              <p>Elektroniku, textil, ložní prádlo a oblečení přesuňte do uzavřených skříní, šuplíků nebo do jiné místnosti, kterou jde dobře oddělit. Prach se snadno dostane do počítačů a spotřebičů a dlouhodobě jim škodí.</p>
              <ul>
                <li>Televizory a počítače zakryjte fólií, pokud je nelze přesunout</li>
                <li>Šatní skříně a knihovny zavřete nebo přelepte páskou</li>
                <li>Koberce a textilní sedačky zakryjte plachtou</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Po každém dni prací byt krátce vyvětrejte a navlhčeným hadrem setřete prach z povrchů – nenechte ho usazovat se den za dnem, hůř se pak odstraňuje.</div>
            </section>

            <section id="vareni-bez-kuchyne">
              <h2>Vaření bez kuchyně</h2>
              <p>Rekonstrukce kuchyně neznamená, že musíte týdny jíst jen z restaurací. S trochou přípravy se dá vařit i z jiné místnosti.</p>
              <h3>Provizorní vybavení</h3>
              <ul>
                <li><strong>Mikrovlnka</strong> – základ pro ohřívání a jednoduché vaření</li>
                <li><strong>Jednoduchý vařič</strong> (elektrický nebo indukční) na jeden až dva hořáky</li>
                <li><strong>Rychlovarná konvice</strong> na čaj, kávu i instantní jídla</li>
                <li><strong>Kempinkové nádobí</strong> – lehké, skladné, nemusí se po něm dlouho uklízet</li>
              </ul>
              <h3>Jednoduchý jídelní lístek</h3>
              <p>Naplánujte si na dobu rekonstrukce pár jednoduchých jídel, která zvládnete s minimem vybavení – polévky z konzervy nebo sáčku, jednohubky, saláty, jídla z jednoho hrnce na vařiči. Omezíte tím nákupy i mytí nádobí.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Provizorní kuchyňku si zařiďte co nejblíže umyvadlu nebo alespoň zdroji vody – ušetří vám to chození s nádobím po bytě.</div>
            </section>

            <section id="hygiena-bez-koupelny">
              <h2>Hygiena bez koupelny</h2>
              <p>Bez koupelny je nejtěžší vyřešit běžnou hygienu, ale existuje víc variant než spát u rodiny každý den.</p>
              <h3>Domluva s rodinou nebo přáteli</h3>
              <p>Pokud máte v okolí rodinu nebo přátele, domluvte se na pravidelném sprchování – třeba pár dní v týdnu u jednoho, pár dní u druhého. Pomáhá to rozložit zátěž a nezatěžovat jednu domácnost.</p>
              <h3>Fitness centrum nebo wellness</h3>
              <p>Krátkodobá permanentka do posilovny nebo plaveckého bazénu se sprchami je často levnější variantou, než se zdá, a navíc funguje jako pravidelný program, který vás na čas vytáhne z prašného bytu.</p>
              <h3>Suché nebo chemické WC jako krajní řešení</h3>
              <p>Pokud řešíte jen výpadek toalety na pár dní, chemické nebo suché WC je dočasné řešení – ne pohodlné, ale funkční. Pro delší období je lepší kombinovat s návštěvami u rodiny nebo přátel.</p>
            </section>

            <section id="komunikace-s-remeslniky">
              <h2>Komunikace s řemeslníky o harmonogramu</h2>
              <p>Hodně stresu při rekonstrukci za chodu vzniká z nejistoty – kdy bude voda, kdy elektřina, kdy budete moct do koupelny. Tomu se dá z velké části předejít jasnou domluvou na začátku.</p>
              <h3>Co si domluvit předem</h3>
              <ul>
                <li>Které dny a hodiny bude přístup do bytu omezený</li>
                <li>Kdy přesně bude vypnutá voda nebo elektřina a na jak dlouho</li>
                <li>Jestli je možné dokončovat práce postupně po místnostech, ne všechno najednou</li>
                <li>Kde budou řemeslníci skladovat materiál a nářadí, aby nezabírali celý byt</li>
              </ul>
              <p>Pokud teprve vybíráte firmu, ověřte si dopředu i to, jak <Link href="/blog/najit-proveri-remeslnika">prověřit řemeslníka</Link> – spolehlivá komunikace o harmonogramu je často lepším signálem kvality než cena.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Požádejte o jednoduchý písemný harmonogram po týdnech – i orientační. Usnadní vám plánovat provizorní bydlení i běžný chod domácnosti.</div>
            </section>

            <section id="psychicka-stranka">
              <h2>Psychická stránka rekonstrukce</h2>
              <p>Bydlet v prachu, hluku a nepořádku týdny v řadě je psychicky náročné, i když všechno jde podle plánu. Stres se kumuluje a často ho podceníte, dokud nejste vyčerpaní.</p>
              <h3>Jak si odlehčit</h3>
              <ul>
                <li>Pokud máte možnost, plánujte si <strong>oddechové víkendy mimo byt</strong> – u rodiny, na chatě, kdekoliv, kde je klid</li>
                <li>Nesnažte se zvládat rekonstrukci a běžný pracovní nebo rodinný režim na sto procent najednou – počítejte s tím, že budete víc unavení</li>
                <li>Mluvte s partnerem nebo rodinou o tom, jak rekonstrukci zvládáte – sdílená frustrace je lehčí než tichá</li>
                <li>Mějte na paměti, že jde o dočasný stav s konkrétním koncem, ne novou normu</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Naplánujte si jeden malý rituál, který zůstane stejný i během rekonstrukce – ranní káva, večerní procházka. Pomáhá to udržet pocit normálnosti.</div>
            </section>

            <section id="bezpecnost-deti-a-zvirat">
              <h2>Bezpečnost dětí a domácích mazlíčků</h2>
              <p>Stavba v bytě znamená nářadí, prach, otevřenou elektroinstalaci a často i ostré hrany – rizika, na která děti a zvířata běžně nejsou zvyklé.</p>
              <h3>Jak rekonstruovaný prostor oddělit</h3>
              <ul>
                <li>Dveře do rekonstruované části uzamykejte, nebo alespoň zajistěte zábranou</li>
                <li>Nářadí a chemikálie nikdy nenechávejte volně přístupné, ani na krátkou dobu</li>
                <li>Otevřenou elektroinstalaci a vypnuté jističe vždy zkontrolujte před tím, než necháte děti nebo zvíře v bytě bez dozoru</li>
                <li>Při hlučnějších nebo prašnějších pracích (bourání, broušení) zvažte, jestli na pár hodin neodejít z bytu úplně</li>
              </ul>
              <p>Pokud řešíte rekonstrukci s malými dětmi dlouhodobě, může se vyplatit i dočasné <Link href="/blog/stehovani-s-detmi-tipy">přizpůsobení režimu stěhování a bydlení dětem</Link> – byť jde o jiný kontext, principy oddělení rizik jsou podobné.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Mám se během rekonstrukce odstěhovat, nebo zůstat v bytě?", a: "Záleží na rozsahu prací. Pokud rekonstruujete jedinou koupelnu nebo kuchyni a nemáte náhradní funkční variantu, je lepší se na tu dobu odstěhovat k rodině nebo do krátkodobého pronájmu. Při malování nebo výměně podlahy v jedné místnosti zůstat v bytě obvykle zvládnete." },
                  { q: "Jak se chránit před prachem při rekonstrukci, když v bytě bydlím?", a: "Přelepte dveře a větrací otvory do rekonstruovaných prostor fólií a malířskou páskou, vypněte na tu dobu rekuperaci nebo ventilátory, které by prach roztahovaly po bytě, a citlivé věci jako elektroniku a textil přesuňte do uzavřených skříní nebo jiné místnosti." },
                  { q: "Jak vařit, když mám rekonstrukci kuchyně?", a: "Zařiďte si provizorní vaření s mikrovlnkou, jedním vařičem a rychlovarnou konvicí v jiné místnosti. Sestavte si jednoduchý jídelní lístek na pár týdnů – polévky, jednohubky, jídla z trouby nebo z jednoho hrnce. Pomůže i sada kempinkového nádobí." },
                  { q: "Jak se umyju, když nemám funkční koupelnu?", a: "Domluvte se s rodinou nebo přáteli v okolí na pravidelném sprchování, nebo si pořiďte krátkodobou permanentku do fitness centra či wellness se sprchami. Pro nejnutnější potřebu může pomoct chemické nebo suché WC, ale jde jen o krajní řešení na pár dní." },
                  { q: "Jak se domluvit s řemeslníky na harmonogramu prací?", a: "Na začátku si s řemeslníky ujasněte, ve kterých dnech a hodinách bude přístup do bytu omezený, a požádejte o postupné dokončování po jednotlivých místnostech. Usnadní vám to plánovat běžný chod domácnosti a víte přesně, kdy budete bez vody nebo elektřiny." },
                  { q: "Jak ochránit děti a domácí mazlíčky během rekonstrukce?", a: "Rekonstruovanou část bytu důsledně oddělte – uzamykatelnými dveřmi nebo alespoň zábranou – ať se děti a zvířata nedostanou k nářadí, prachu nebo otevřené elektroinstalaci. Při hlučnějších nebo prašnějších pracích je lepší na pár hodin odejít z bytu úplně." },
                ].map(({ q, a }) => (
                  <details key={q} className="faq-item">
                    <summary className="faq-summary">{q}<span className="faq-icon">▾</span></summary>
                    <div className="faq-body">{a}</div>
                  </details>
                ))}
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/jak-bydlet-behem-rekonstrukce" title="Jak přežít bydlení během rekonstrukce bytu" />

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
                <li><a href="#zustat-nebo-odstehovat">Zůstat, nebo se odstěhovat?</a></li>
                <li><a href="#provizorni-zazemi">Provizorní zázemí</a></li>
                <li><a href="#ochrana-pred-prachem">Ochrana před prachem</a></li>
                <li><a href="#vareni-bez-kuchyne">Vaření bez kuchyně</a></li>
                <li><a href="#hygiena-bez-koupelny">Hygiena bez koupelny</a></li>
                <li><a href="#komunikace-s-remeslniky">Komunikace s řemeslníky</a></li>
                <li><a href="#psychicka-stranka">Psychická stránka</a></li>
                <li><a href="#bezpecnost-deti-a-zvirat">Bezpečnost dětí a zvířat</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/stehovani" className="sidebar-cat-link">🏗️ Stěhování & rekonstrukce<span>Více článků →</span></Link>
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
        .article-tip{background:#fffbeb;border-left:3px solid #f59e0b;border-radius:0 8px 8px 0;padding:14px 18px;font-size:14px;line-height:1.6;color:#78716c;margin:20px 0}
        .faq-list{display:flex;flex-direction:column;gap:8px}
        .faq-item{border:1px solid var(--border);border-radius:10px;overflow:hidden;background:#fff}
        .faq-summary{font-size:15px;font-weight:600;padding:16px 20px;cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center;transition:background 120ms}
        .faq-summary:hover{background:var(--surface)}
        .faq-icon{font-size:14px;font-weight:300;flex-shrink:0;margin-left:12px;transition:transform 150ms}
        details[open] .faq-icon{transform:rotate(180deg)}
        .faq-body{font-size:14px;line-height:1.65;color:var(--muted);font-weight:300;padding:0 20px 16px}
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
        @media(max-width:600px){.article-layout{padding:32px 0 60px}}
      `}</style>
    </>
  );
}
