import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Čištění a odvlhčení sklepa: postup krok za krokem",
  description: "Proč se sklep po zimě vlhčí, jak ho bezpečně vyčistit od plísní, jak správně větrat a vybrat odvlhčovač. Praktický návod pro svépomocné odvlhčení sklepa.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/cisteni-a-odvlhceni-sklepa" },
  openGraph: { title: "Čištění a odvlhčení sklepa: postup krok za krokem", description: "Proč se sklep po zimě vlhčí, jak ho bezpečně vyčistit od plísní, jak správně větrat a vybrat odvlhčovač. Praktický návod pro svépomocné odvlhčení sklepa.", url: "https://www.domovniguru.cz/blog/cisteni-a-odvlhceni-sklepa", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-07-08T08:00:00Z", modifiedTime: "2026-07-08T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=%C4%8Ci%C5%A1t%C4%9Bn%C3%AD%20a%20odvlh%C4%8Den%C3%AD%20sklepa&cat=blog", width: 1200, height: 630, alt: "Čištění a odvlhčení sklepa" }] },
  twitter: { card: "summary_large_image", title: "Čištění a odvlhčení sklepa: postup krok za krokem", description: "Proč se sklep po zimě vlhčí, jak ho bezpečně vyčistit od plísní, jak správně větrat a vybrat odvlhčovač. Praktický návod pro svépomocné odvlhčení sklepa." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/cisteni-a-odvlhceni-sklepa#article", "headline": "Čištění a odvlhčení sklepa: postup krok za krokem", "datePublished": "2026-07-08T08:00:00Z", "dateModified": "2026-07-08T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["odvlhčení sklepa", "čištění sklepa", "vlhkost ve sklepě", "plíseň ve sklepě", "odvlhčovač výběr", "větrání sklepa", "kondenzace sklep"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Sezónní údržba", "item": "https://www.domovniguru.cz/blog/kategorie/sezonni-udrzba" }, { "@type": "ListItem", "position": 4, "name": "Čištění a odvlhčení sklepa", "item": "https://www.domovniguru.cz/blog/cisteni-a-odvlhceni-sklepa" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Proč sklep vlhne nejvíc na jaře?", "acceptedAnswer": { "@type": "Answer", "text": "Příčinou je kondenzace. Sklep je přes zimu prochladlý – zdi mají nízkou teplotu. Jakmile na jaře venkovní vzduch oteplí a stane se vlhčím, proudí dovnitř a na chladném povrchu zdí okamžitě kondenzuje. Čím větší teplotní rozdíl, tím více kondenzátu. Proto není dobré na jaře větrací průduchy otevírat hned při prvním oteplení." } }, { "@type": "Question", "name": "Jaký odvlhčovač do sklepa vybrat – kondenzační nebo adsorpční?", "acceptedAnswer": { "@type": "Answer", "text": "Kondenzační odvlhčovače jsou výkonnější a hospodárnější při teplotách nad 15 °C. Adsorpční odvlhčovače (s molekulárním sítem nebo silikagelem) fungují dobře i při nízkých teplotách (5–15 °C), ale mají obecně nižší výkon a vyšší spotřebu. Pro sklep se standardní teplotou přes 15 °C volte kondenzační odvlhčovač s výkonem alespoň 10–20 l/den." } }, { "@type": "Question", "name": "Je bezpečné čistit plíseň ve sklepě bez respirátoru?", "acceptedAnswer": { "@type": "Answer", "text": "Ne. Spory plísní uvolněné při čištění jsou zdraví nebezpečné – mohou vyvolat alergické reakce, záněty dýchacích cest nebo zhoršit astma. Vždy používejte respirátor třídy FFP2 nebo FFP3, ochranné brýle a jednorázové gumové nebo nitrilové rukavice. V místnosti s rozsáhlou plísní doporučujeme i ochranný oblek." } }, { "@type": "Question", "name": "Kdy mám raději zavolat odborníka než řešit vlhkost ve sklepě sám?", "acceptedAnswer": { "@type": "Answer", "text": "Odborníka přizvěte, pokud se vlhkost opakuje i po řádném odvětrání a odvlhčení, pokud jsou na zdech vidět výkvěty solí (bílé mapy), pokud vlhkost vzlíná ze spodní části zdiva (vzlínající vlhkost ze základů), nebo pokud je plocha plísně větší než 0,5 m². Tyto situace vyžadují injektáž zdiva, sanační omítky nebo drenáž a jsou mimo svépomoc." } }, { "@type": "Question", "name": "Jak uložit věci ve sklepě, aby je vlhkost nepoškodila?", "acceptedAnswer": { "@type": "Answer", "text": "Veškerý nábytek, kartóny a textil ukládejte na dřevěné nebo plastové palety minimálně 10 cm nad zemí. Citlivé věci (oblečení, dokumenty, elektroniku) balte do pevných PE folií nebo do vzduchotěsných plastových kontejnerů s víkem. Kovové předměty ošetřete antikorozním sprejem. Kartonové krabice nahraďte plastovými boxy – karton je pro vlhkost a plíseň živnou půdou." } }] }] };

const RELATED = [
  { title: "Jarní revize domu: co zkontrolovat po zimě", href: "/blog/jarni-revize-domu-checklist", read: "5 min" },
  { title: "Jak se zbavit vlhkosti v bytě", href: "/blog/zbavit-se-vlhkosti-v-byte", read: "5 min" },
  { title: "Jak správně větrat byt", href: "/blog/spravne-vetrat-byt", read: "4 min" },
  { title: "Péče o septik a žumpu", href: "/blog/pece-o-septik-zumpu", read: "5 min" },
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
              <span>Čištění a odvlhčení sklepa</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">❄️ Sezónní údržba</Link>
                <span className="article-read-time">⏱ 4 min čtení</span>
              </div>
              <h1 className="article-h1">Čištění a odvlhčení sklepa: postup krok za krokem</h1>
              <p className="article-lead">Sklep je část domu, na kterou se snadno zapomíná – dokud nezačne zapáchat nebo se neobjeví plíseň na uložených věcech. Jarní vlhnutí sklepa je přirozené, ale bez správné reakce se problém každým rokem zhoršuje. Tady je přehled, proč sklep vlhne, jak ho bezpečně vyčistit a jak vlhkost udržet pod kontrolou dlouhodobě.</p>
              <div className="article-meta-row"><span>Aktualizováno: 8. července 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#proc-vlhne">Proč se sklep po zimě vlhčí</a></li>
                <li><a href="#postup-cisteni">Postup čištění – bezpečnost na prvním místě</a></li>
                <li><a href="#vetrani">Větrání: kdy a jak</a></li>
                <li><a href="#odvlhcovac">Výběr odvlhčovače</a></li>
                <li><a href="#ulozeni">Správné uskladnění věcí</a></li>
                <li><a href="#kdy-odbornik">Kdy zavolat odborníka</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="proc-vlhne">
              <h2>Proč se sklep po zimě vlhčí</h2>
              <p>Vlhkost ve sklepě má zpravidla dvě hlavní příčiny – kondenzaci a průsaky. Obě se projevují podobně (mokré zdi, kapky, plíseň), ale mají různá řešení. Správná diagnóza šetří čas i peníze.</p>
              <h3>Kondenzace (nejčastější příčina na jaře)</h3>
              <p>Sklep je přes zimu vychladlý – zdi, podlaha i vzduch mají nízkou teplotu. Když na jaře venkovní teplota stoupne a vzduch se stane vlhčím a teplejším, dochází při ventilaci ke kondenzaci: teplý vlhký vzduch narazí na studené plochy a voda se srazí na jejich povrchu. Výsledkem jsou vlhké zdi, potící se podlaha a kapky na stropě. Kondenzace je přirozená fyzikální jev a sama o sobě neznamená poruchu zdiva.</p>
              <h3>Průsak vody ze zeminy nebo základů</h3>
              <p>Průsak se projevuje odlišně než kondenzace – vlhkost se typicky soustředí na konkrétní místě (rohu, spáře u podlahy, okolo vstupu trubek), nikoli rovnoměrně po celé ploše. Dalším příznakem jsou bílé výkvěty solí (eflorescence) na povrchu zdiva – soli jsou vytáhnuty prosakující vodou z hloubky zdiva. Průsak je stavební problém, který vyžaduje odborné řešení (viz sekce Kdy zavolat odborníka).</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Jednoduchou zkouškou rozlišíte kondenzaci od průsaku: přiložte na vlhkou plochu zdi kus fólie a přelepte okraje lepicí páskou. Nechte 24–48 hodin. Pokud se vlhkost objeví na povrchu fólie (straně ke vzduchu), jde o kondenzaci. Pokud se vlhkost hromadí pod fólií (u zdi), je zdrojem průsak ze zdiva.</div>
            </section>

            <section id="postup-cisteni">
              <h2>Postup čištění – bezpečnost na prvním místě</h2>
              <p>Plíseň ve sklepě není jen estetický problém. Spory plísní uvolněné při čištění jsou zdravotně nebezpečné, zejména pro lidi s alergiemi, astmatem nebo oslabenou imunitou. Bezpečnostní vybavení není volitelné.</p>
              <h3>Co potřebujete</h3>
              <ul>
                <li><strong>Respirátor FFP2 nebo FFP3</strong> – chrání před vdechnutím spor; obyčejná papírová maska nestačí</li>
                <li><strong>Ochranné brýle</strong> – uzavřený typ, nikoli průhledné pracovní brýle s otvory</li>
                <li><strong>Nitrilové nebo gumové rukavice</strong> – jednorázové, sahající minimálně ke zgleji</li>
                <li><strong>Staré oblečení nebo jednorázový oblek</strong> – po práci vše vyhodit nebo okamžitě vyprat</li>
                <li><strong>Tuhý kartáč s plastovými vlákny</strong> – ocelový kartáč může poškodit omítku</li>
                <li><strong>Fungicid nebo přípravek na bázi chloru</strong> – k dostání v hobby marketech; vybírejte přípravky určené na plíseň v interiéru</li>
              </ul>
              <h3>Postup krok za krokem</h3>
              <ol>
                <li><strong>Vyneste veškerý obsah sklepa ven</strong> – ideálně na slunce; nechte věci vyschnout a zkontrolujte je; poškozené (plísní nebo vlhkostí) rovnou vyhoďte</li>
                <li><strong>Vyvětrejte sklep</strong> – otevřete dveře a průduchy, nechte proudit vzduch alespoň 30 minut před zahájením čištění</li>
                <li><strong>Suchý odstraňovač povrchové plísně</strong> – tuhým kartáčem setřete suchý povrch plísně do pytle na odpad (ne do kompostu); pytel okamžitě zavažte a vyhoďte</li>
                <li><strong>Aplikace fungicidu nebo chlorového přípravku</strong> – nastříkejte nebo naneste houbičkou na postižená místa; nechte působit dle návodu výrobce (obvykle 15–30 minut); pak setřete navlhčeným hadrem</li>
                <li><strong>Vyčistěte podlahu</strong> – zameťte a vytřete, případně použijte dezinfekci na podlahu</li>
                <li><strong>Nechte vyschnout</strong> – nezasklívejte a nevkládejte věci zpět, dokud povrchy nejsou suché (obvykle 24–48 hodin)</li>
              </ol>
              <div className="article-tip"><strong>⚠️ Pozor:</strong> Chlorové přípravky (bělicí prostředky) nikdy nemíchejte s čisticími prostředky na bázi amoniaku nebo kyselin – vznikají jedovaté plyny. Vždy používejte jeden přípravek, dobře vyvětrejte a dodržujte návod na etiketě.</div>
            </section>

            <section id="vetrani">
              <h2>Větrání: kdy a jak</h2>
              <p>Správné větrání sklepa je protichůdná záležitost. Lidé intuitivně větrají, jakmile přijde jaro a venku je teplo – jenže právě to způsobuje největší kondenzaci. Logika je obrácená: sklep větrávejte tehdy, kdy rosný bod venkovního vzduchu je nižší než teplota zdí ve sklepě.</p>
              <h3>Kdy větrat</h3>
              <ul>
                <li><strong>Za suchého, slunečného počasí</strong> s nízkou relativní vlhkostí venku (pod 60 %)</li>
                <li><strong>Raně ráno v létě</strong> – vzduch je stále chladnější a sušší než přes den</li>
                <li><strong>Na podzim za suchých, mrazivých dnů</strong> – suchý mrazivý vzduch odvede vlhkost ze zdí lépe než teplý</li>
              </ul>
              <h3>Kdy nevětrat</h3>
              <ul>
                <li><strong>Po dešti a za mlhavého počasí</strong> – vzduch je nasycen vlhkostí, která se ihned srazí na zdech</li>
                <li><strong>Na jaře při prvním oteplení</strong> – přesně toto je doba největší kondenzace; vyčkejte, až se sklep přirozeně oteplí alespoň na 12–15 °C</li>
                <li><strong>Za tropických veder s vysokou vlhkostí</strong> – vzduch s teplotou 30 °C a vlhkostí 80 % má obrovský kondenzační potenciál v chladném sklepě</li>
              </ul>
              <p>Pokud chcete mít větrání sklepa pod kontrolou bez přemýšlení, pořiďte hygrostat s vestavěnou sondou pro venkovní a vnitřní prostředí – automaticky spouští větrací ventilátor jen tehdy, kdy větrání skutečně pomůže. Podrobněji o větrání bytu jako celku se dozvíte v článku <Link href="/blog/spravne-vetrat-byt" style={{ color: "#2a6496", textDecoration: "underline" }}>jak správně větrat byt</Link>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Jednoduchý přístrojový vlhkoměr (hygrometr) za pár desítek korun do sklepa je investice, která se vrátí. Uvidíte aktuální vlhkost a budete vědět, kdy je větrání potřeba a kdy ne.</div>
            </section>

            <section id="odvlhcovac">
              <h2>Výběr odvlhčovače</h2>
              <p>Pokud větrání nestačí nebo podmínky pro větrání nejsou ideální, odvlhčovač je nejspolehlivější řešení. Správná volba závisí na velikosti sklepa, jeho teplotě a míře vlhkosti.</p>
              <h3>Výkon: kolik litrů za den potřebujete</h3>
              <p>Základní pravidlo říká, že potřebujete přibližně 1–1,5 l výkonu na každých 10 m³ sklepa. Pro sklep o rozměrech 5×4 m s výškou 2,2 m (= cca 44 m³) to znamená odvlhčovač s výkonem alespoň 5–7 l/den, u vlhkého sklepa spíše 10 l/den a více.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ odvlhčovače</th><th>Ideální teplota</th><th>Výkon</th><th>Spotřeba energie</th></tr></thead>
                  <tbody>
                    <tr><td>Kondenzační</td><td>nad 15 °C</td><td>10–50 l/den</td><td>Nižší (0,2–0,5 kWh/l)</td></tr>
                    <tr><td>Adsorpční (zeolitový)</td><td>5–15 °C</td><td>2–10 l/den</td><td>Vyšší (0,5–1 kWh/l)</td></tr>
                    <tr><td>Pasivní (silica gel)</td><td>Libovolná</td><td>0,1–0,5 l/den</td><td>Žádná (nutná regenerace)</td></tr>
                  </tbody>
                </table>
              </div>
              <h3>Kondenzační odvlhčovač – nejčastější volba</h3>
              <p>Kondenzační odvlhčovač funguje jako obrácená klimatizace: nasaje vlhký vzduch, ochladí ho pod rosný bod, voda se srazí a teče do nádoby nebo odpadní trubky. Při teplotách nad 15 °C je to nejúčinnější a nejekonomičtější řešení pro sklep. Hledejte model s automatickým odtokem do kanalizace nebo s dostatečně velkou nádobou (10+ litrů), abyste nenaplňovali zásobník každý den.</p>
              <h3>Adsorpční odvlhčovač</h3>
              <p>Adsorpční odvlhčovač používá absorbující materiál (zeolit nebo silikagel), který vlhkost zachytí a poté ji ohřevem uvolní do výfukového proudu vzduchu. Je účinný i za nižších teplot (5–15 °C), kde kondenzační typ ztrácí výkon. Nevýhodou je vyšší spotřeba energie a nižší celkový výkon.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Odvlhčovač nikdy nestavte přímo ke zdi – potřebuje volný prostor kolem nasávacích mřížek. Ideální je středem místnosti nebo alespoň 30 cm od zdí. Nezapomeňte na pravidelné čištění filtru – ucpaný filtr snižuje výkon a zkracuje životnost přístroje.</div>
            </section>

            <section id="ulozeni">
              <h2>Správné uskladnění věcí ve sklepě</h2>
              <p>I dobře odvlhčený sklep může způsobit problémy, pokud jsou v něm věci uloženy špatně. Vlhkost ve vzduchu, odražená od podlahy, poškodí vše, co leží přímo na zemi nebo je stlačeno ke zdi.</p>
              <h3>Základní pravidla uskladnění</h3>
              <ul>
                <li><strong>Vše nad zem</strong> – dřevěné palety nebo plastové rošty pod všechny předměty; minimum 10 cm nad podlahou</li>
                <li><strong>Vzdálenost od zdí</strong> – nejméně 5–10 cm mezi předměty a zdí pro cirkulaci vzduchu</li>
                <li><strong>Plastové boxy místo kartonů</strong> – karton absorbuje vlhkost, nabobtná a je ideálním substrátem pro plíseň; plastové boxy s víkem jsou vlhkosti odolné</li>
                <li><strong>Textil a oblečení</strong> – ukládejte do vzduchotěsných plastových pytlů nebo vakuových sáčků; naftalín nebo silikagel přidejte jako prevenci</li>
                <li><strong>Potraviny</strong> – sklenice, zavařeniny a brambory neskladujte přímo na betonu; brambory na kovových regálech nebo v bedýnkách</li>
                <li><strong>Elektronika a dokumenty</strong> – tyto věci do vlhkého sklepa nepatří vůbec; pokud nemáte jinou možnost, zabalte je do PE fólie s sáčkem silikagelu</li>
              </ul>
              <h3>Regály do sklepa</h3>
              <p>Kovové regály jsou pro sklep nejpraktičtější – jsou odolné, lehce čistitelné a nedávají plísni živnou půdu. Dřevěné regály absorbují vlhkost a mohou samy plesnivět; pokud je chcete, ošetřete je lazurou nebo impregnací. Regály vždy kotvete ke zdi nebo propojujte, aby se nemohly převrátit.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pověste do sklepa malý teplotní a vlhkostní logger (hygroteploměr s pamětí) za cca 200–400 Kč. Zobrazí vám maximum a minimum vlhkosti za posledních 24 hodin a snadno tak odhalíte, kdy vlhkost stoupá a zda odvlhčovač stačí.</div>
            </section>

            <section id="kdy-odbornik">
              <h2>Kdy zavolat odborníka</h2>
              <p>Svépomocné odvlhčení a vyčištění sklepa zvládne většina majitelů domů. Existují ale situace, kdy je nezbytné přizvat specialistu – a čím dříve, tím lépe, protože odkládání stavební problémy pouze zhoršuje a prodražuje.</p>
              <h3>Signály, že problém je za svépomocí</h3>
              <ul>
                <li><strong>Vzlínající vlhkost ze základů</strong> – typickým příznakem jsou mokré zdi v dolní části, sůl vytahovaná na povrch (bílé mapy) a mokrá podlaha i přes dobré větrání; řeší se injektáží zdiva nebo vodorovnou hydroizolací</li>
                <li><strong>Průsak podzemní vody</strong> – pokud po deštích voda přímo vytéká spárami nebo z podlahy, je nutná venkovní drenáž nebo sanace z interiéru sanačními systémy</li>
                <li><strong>Rozsáhlá plíseň</strong> – plocha plísně nad 0,5 m² nebo plíseň pronikající do struktury zdiva a omítky; svépomocné čištění nestačí a spóry se rychle šíří zpět</li>
                <li><strong>Opakující se problém</strong> – pokud se plíseň nebo vlhkost vrací i přes řádné odvlhčení, větrání a čištění, je zdrojem strukturální problém, který samotný odvlhčovač nevyřeší</li>
                <li><strong>Degradace betonu nebo výztuže</strong> – viditelné trhliny v podlaze, rezivějící výztuž nebo drolení betonu je stavební problém vyžadující sanaci</li>
              </ul>
              <p>Obecné principy boje s vlhkostí v interiéru a jak odlišit různé typy vlhkosti rozebíráme v podrobném článku <Link href="/blog/zbavit-se-vlhkosti-v-byte" style={{ color: "#2a6496", textDecoration: "underline" }}>jak se zbavit vlhkosti v bytě</Link>. Jarní revizi domu jako celku – včetně sklepa, střechy a fasády – shrnuje náš <Link href="/blog/jarni-revize-domu-checklist" style={{ color: "#2a6496", textDecoration: "underline" }}>jarní checklist prohlídky domu</Link>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Při hledání odborníka hledejte firmy specializované na sanaci vlhkého zdiva (ne jen malíře nebo obkladače). Správná diagnóza příčiny vlhkosti je klíčová – špatná oprava pouze zamaskuje problém a ten se vrátí se zdvojenou intenzitou.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Proč sklep vlhne nejvíc na jaře?", a: "Příčinou je kondenzace. Sklep je přes zimu prochladlý – zdi mají nízkou teplotu. Jakmile na jaře venkovní vzduch oteplí a stane se vlhčím, proudí dovnitř a na chladném povrchu zdí okamžitě kondenzuje. Čím větší teplotní rozdíl, tím více kondenzátu. Proto není dobré na jaře větrací průduchy otevírat hned při prvním oteplení." },
                  { q: "Jaký odvlhčovač do sklepa vybrat – kondenzační nebo adsorpční?", a: "Kondenzační odvlhčovače jsou výkonnější a hospodárnější při teplotách nad 15 °C. Adsorpční odvlhčovače (s molekulárním sítem nebo silikagelem) fungují dobře i při nízkých teplotách (5–15 °C), ale mají obecně nižší výkon a vyšší spotřebu. Pro sklep se standardní teplotou přes 15 °C volte kondenzační odvlhčovač s výkonem alespoň 10–20 l/den." },
                  { q: "Je bezpečné čistit plíseň ve sklepě bez respirátoru?", a: "Ne. Spory plísní uvolněné při čištění jsou zdraví nebezpečné – mohou vyvolat alergické reakce, záněty dýchacích cest nebo zhoršit astma. Vždy používejte respirátor třídy FFP2 nebo FFP3, ochranné brýle a jednorázové gumové nebo nitrilové rukavice. V místnosti s rozsáhlou plísní doporučujeme i ochranný oblek." },
                  { q: "Kdy mám raději zavolat odborníka než řešit vlhkost ve sklepě sám?", a: "Odborníka přizvěte, pokud se vlhkost opakuje i po řádném odvětrání a odvlhčení, pokud jsou na zdech vidět výkvěty solí (bílé mapy), pokud vlhkost vzlíná ze spodní části zdiva (vzlínající vlhkost ze základů), nebo pokud je plocha plísně větší než 0,5 m². Tyto situace vyžadují injektáž zdiva, sanační omítky nebo drenáž a jsou mimo svépomoc." },
                  { q: "Jak uložit věci ve sklepě, aby je vlhkost nepoškodila?", a: "Veškerý nábytek, kartóny a textil ukládejte na dřevěné nebo plastové palety minimálně 10 cm nad zemí. Citlivé věci (oblečení, dokumenty, elektroniku) balte do pevných PE folií nebo do vzduchotěsných plastových kontejnerů s víkem. Kovové předměty ošetřete antikorozním sprejem. Kartonové krabice nahraďte plastovými boxy – karton je pro vlhkost a plíseň živnou půdou." },
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
                <li><a href="#proc-vlhne">Proč se sklep vlhčí</a></li>
                <li><a href="#postup-cisteni">Postup čištění</a></li>
                <li><a href="#vetrani">Větrání: kdy a jak</a></li>
                <li><a href="#odvlhcovac">Výběr odvlhčovače</a></li>
                <li><a href="#ulozeni">Správné uskladnění</a></li>
                <li><a href="#kdy-odbornik">Kdy zavolat odborníka</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/sezonni-udrzba" className="sidebar-cat-link">❄️ Sezónní údržba<span>32 článků →</span></Link>
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
