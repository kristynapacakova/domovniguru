import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Klimatizace v bytě: instalace, provoz a úspora energie",
  description: "Co obnáší instalace split klimatizace, jak ji správně provozovat a jak snížit spotřebu elektřiny při chlazení.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/klimatizace-instalace-a-provoz" },
  openGraph: { title: "Klimatizace v bytě: instalace, provoz a úspora energie", description: "Instalace split klimatizace, požadavky na elektřinu, údržba a jak ušetřit při chlazení i topení.", url: "https://www.domovniguru.cz/blog/klimatizace-instalace-a-provoz", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-11T08:00:00Z", modifiedTime: "2026-06-11T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Klimatizace%20v%20byt%C4%9B%3A%20instalace%2C%20provoz%20a%20%C3%BAspora%20energie&cat=blog", width: 1200, height: 630, alt: "Klimatizace v bytě: instalace, provoz a úspora energie" }] },
  twitter: { card: "summary_large_image", title: "Klimatizace v bytě: instalace, provoz a úspora energie", description: "Instalace split klimatizace, požadavky na elektřinu, údržba a jak ušetřit při chlazení i topení." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/klimatizace-instalace-a-provoz#article", "headline": "Klimatizace v bytě: instalace, provoz a úspora energie", "datePublished": "2026-06-11T08:00:00Z", "dateModified": "2026-06-11T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["instalace klimatizace", "split klimatizace", "provoz klimatizace", "spotřeba klimatizace", "tepelné čerpadlo vzduch-vzduch"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Elektrika & osvětlení", "item": "https://www.domovniguru.cz/blog/kategorie/elektrika" }, { "@type": "ListItem", "position": 4, "name": "Klimatizace v bytě: instalace, provoz a úspora energie", "item": "https://www.domovniguru.cz/blog/klimatizace-instalace-a-provoz" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Může si split klimatizaci namontovat majitel sám?", "acceptedAnswer": { "@type": "Answer", "text": "Zavěšení jednotek a rozvody elektřiny zvládne šikovný kutil, ale zapojení a naplnění chladivového okruhu (propojovací potrubí, vakuování, tlaková zkouška) smí podle zákona o fluorovaných skleníkových plynech provádět jen firma s certifikací F-plyny. Bez tohoto zásahu klimatizace nebude chladit a navíc hrozí únik chladiva." } }, { "@type": "Question", "name": "Jaké jištění potřebuje klimatizace?", "acceptedAnswer": { "@type": "Answer", "text": "Menší nástěnné jednotky (do cca 3,5 kW) se obvykle připojují na samostatný okruh s jističem 16 A a chráničem (proudovým chráničem) 30 mA. U výkonnějších multisplit systémů je potřeba samostatný kabel od rozvaděče dimenzovaný podle příkonu venkovní jednotky – řešení vždy nechte navrhnout elektrikářem." } }, { "@type": "Question", "name": "Kolik stojí instalace split klimatizace?", "acceptedAnswer": { "@type": "Answer", "text": "Montáž jedné nástěnné jednotky (potrubí do 3 m, jádrový vrt, elektrické připojení) vyjde zhruba na 6 000–12 000 Kč. Při delším potrubí, obtížném umístění venkovní jednotky nebo nutnosti nové elektroinstalace se cena může vyšplhat na 15 000–20 000 Kč i více." } }, { "@type": "Question", "name": "Jaká je optimální teplota pro úsporný provoz klimatizace?", "acceptedAnswer": { "@type": "Answer", "text": "Doporučuje se nastavit rozdíl mezi venkovní a vnitřní teplotou maximálně 5–8 °C, typicky tedy 24–26 °C v létě. Každý stupeň navíc směrem dolů zvyšuje spotřebu o přibližně 6–8 %." } }, { "@type": "Question", "name": "Dá se klimatizace používat i v zimě na topení?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, většina dnešních split klimatizací funguje jako tepelné čerpadlo vzduch-vzduch a umí i topit. Efektivně fungují zhruba do venkovních teplot kolem -5 až -10 °C podle modelu, při nižších teplotách výkon i účinnost klesají." } }] }] };

const RELATED = [
  { title: "Jak vybrat klimatizaci do bytu", href: "/blog/jak-vybrat-klimatizaci", read: "6 min" },
  { title: "Jak a jak často čistit filtr klimatizace", href: "/blog/cistit-filtr-klimatizace", read: "4 min" },
  { title: "Kalkulačka výkonu klimatizace", href: "/kalkulacky/vykon-klimatizace", read: "2 min" },
  { title: "Kalkulačka spotřeby elektřiny", href: "/kalkulacky/spotreba-elektriciny", read: "3 min" },
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
              <span>Klimatizace: instalace a provoz</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">💡 Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 7 min čtení</span>
              </div>
              <h1 className="article-h1">Klimatizace v bytě: instalace, provoz a úspora energie</h1>
              <p className="article-lead">Klimatizaci jste vybrali, teď přichází to důležitější – jak ji nainstalovat, aby fungovala spolehlivě a bezpečně, a jak ji provozovat tak, aby vás nezruinovala na elektřině. V tomto článku si projdeme celý proces od montáže až po roční náklady na provoz.</p>
              <div className="article-meta-row"><span>Aktualizováno: 11. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#typy-instalace">Mobilní vs. split – jaký je rozdíl v instalaci</a></li>
                <li><a href="#kdo-instaluje">Kdo smí klimatizaci instalovat</a></li>
                <li><a href="#umisteni">Umístění venkovní a vnitřní jednotky</a></li>
                <li><a href="#elektrina">Elektrická přípojka a jištění</a></li>
                <li><a href="#naklady">Náklady na instalaci</a></li>
                <li><a href="#provoz">Optimální provoz a úspora energie</a></li>
                <li><a href="#udrzba">Údržba, čištění filtrů a odvod kondenzátu</a></li>
                <li><a href="#zima">Provoz v zimě – topení tepelným čerpadlem</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="typy-instalace">
              <h2>Mobilní vs. split – jaký je rozdíl v instalaci</h2>
              <p>Než se pustíte do instalace, je dobré si ujasnit, o jaký typ klimatizace vlastně jde – protože nároky na montáž se zásadně liší.</p>
              <h3>Mobilní klimatizace</h3>
              <p>Mobilní jednotka je hotová k použití hned po vybalení. Stačí ji postavit na podlahu, vyvést odvodní hadici oknem nebo zdí ven a zapojit do běžné zásuvky 230 V. Žádná instalatérská ani elektrikářská práce není potřeba. Nevýhodou je nižší účinnost, hlučnost a fakt, že odvodní hadice v otevřeném okně vpouští do místnosti teplý vzduch zvenku – chlazení je tak méně efektní.</p>
              <h3>Split klimatizace</h3>
              <p>Split systém se skládá z vnitřní jednotky (nástěnná, do podhledu nebo parapetní) a venkovní kondenzační jednotky, propojených chladivovým potrubím a kabeláží. Tady už jde o skutečný zásah do bytu nebo domu – jádrový vrt do zdi, montáž konzol, vedení potrubí, elektrické připojení a hlavně práce s chladivem. Pokud váháte, jaký výkon split jednotky vlastně potřebujete, vyplatí se předem použít <Link href="/kalkulacky/vykon-klimatizace" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačku výkonu klimatizace</Link> – špatně dimenzovaná jednotka totiž zbytečně zvyšuje spotřebu i opotřebení. Podrobněji jsme výběr probrali v článku <Link href="/blog/jak-vybrat-klimatizaci" style={{ color: "#2a6496", textDecoration: "underline" }}>jak vybrat klimatizaci</Link>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud potřebujete chladit jen příležitostně nebo v pronájmu, kde nemůžete vrtat do fasády, je mobilní klimatizace rozumný kompromis. Pro trvalé bydlení a pravidelné chlazení se split jednotce z hlediska provozních nákladů i komfortu prakticky nevyrovná.</div>
            </section>

            <section id="kdo-instaluje">
              <h2>Kdo smí klimatizaci instalovat</h2>
              <p>U split klimatizace je potřeba rozlišovat dvě části instalace – tu, kterou může zvládnout šikovný kutil, a tu, která musí ze zákona patřit certifikované firmě.</p>
              <ul>
                <li><strong>Mechanická montáž</strong> – zavěšení vnitřní a venkovní jednotky, vrtání, vedení kabeláže – tohle teoreticky zvládne i zkušený domácí kutil, i když i tady je lepší nechat to na odborníky kvůli garanci a správnému sklonu kondenzátní hadičky.</li>
                <li><strong>Práce s chladivovým okruhem</strong> – propojení potrubí, vyvakuování systému, doplnění chladiva a spuštění – tohle smí podle zákona o ochraně ovzduší a nařízení o fluorovaných skleníkových plynech (F-plynech) provádět <strong>pouze firma s platnou certifikací F-plyny</strong>. Bez tohoto kroku klimatizace nebude vůbec chladit, a neodbornou manipulací navíc hrozí únik chladiva, které poškozuje životní prostředí.</li>
                <li><strong>Elektrické zapojení</strong> – připojení na samostatný okruh, instalace jističe a chrániče by mělo provádět osoba s elektrotechnickou kvalifikací (vyhláška 50/1978 Sb.), zejména pokud se zasahuje do rozvaděče.</li>
              </ul>
              <p>V praxi proto téměř vždy montáž split klimatizace objednáváte jako celek u jedné firmy, která má všechna potřebná oprávnění. Šetřit na této části se nevyplácí – chybně provedená instalace je nejčastější příčinou reklamací a poruch v prvních letech provozu.</p>
            </section>

            <section id="umisteni">
              <h2>Umístění venkovní a vnitřní jednotky</h2>
              <h3>Vnitřní jednotka</h3>
              <p>Nástěnná jednotka by měla být umístěna co nejvýše, ideálně 15–20 cm pod stropem, mimo přímý dosah slunce a mimo místa, kam proudí vzduch přímo na sedící nebo ležící osoby (postel, gauč, pracovní stůl). Důležité je také to, aby vzduch mohl volně cirkulovat – jednotka nesmí být zakrytá závěsem, nábytkem ani policí.</p>
              <h3>Venkovní jednotka</h3>
              <p>Venkovní (kompresorová) jednotka potřebuje dostatek prostoru pro proudění vzduchu kolem výměníku – minimálně 15–30 cm od zdi a překážek podle doporučení výrobce. Měla by být umístěna tak, aby:</p>
              <ul>
                <li>nebyla vystavena přímému celodennímu slunci (zhoršuje to účinnost chlazení v létě),</li>
                <li>nerušila hlukem sousedy ani vlastní okna do ložnice,</li>
                <li>byla přístupná pro servis a čištění,</li>
                <li>kondenzát z odvodu měl kam odtékat, aniž by v zimě namrzal na chodníku.</li>
              </ul>
              <p>Délka propojovacího potrubí mezi vnitřní a venkovní jednotkou by měla být co nejkratší – obvykle do 3–5 metrů. Delší trasy zvyšují cenu instalace, mírně snižují účinnost a u některých modelů vyžadují dodatečné dopouštění chladiva.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud bydlíte v bytovém domě, umístění venkovní jednotky na fasádu zpravidla podléhá souhlasu SVJ nebo družstva. Vyřešte to ještě před objednáním montáže, ať se vyhnete komplikacím.</div>
            </section>

            <section id="elektrina">
              <h2>Elektrická přípojka a jištění</h2>
              <p>Klimatizace patří mezi spotřebiče s vyšším náběhovým proudem (zejména při startu kompresoru), proto se vždy doporučuje samostatný elektrický okruh vedený přímo z rozvaděče, nikoliv napojení přes prodlužovací kabel nebo sdílenou zásuvku s jinými spotřebiči.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ jednotky</th><th>Orientační příkon</th><th>Doporučené jištění</th><th>Proudový chránič</th></tr></thead>
                  <tbody>
                    <tr><td>Malá nástěnná (do 2,5 kW chlazení)</td><td>0,6–0,9 kW</td><td>jistič 16 A</td><td>30 mA</td></tr>
                    <tr><td>Střední nástěnná (3,5 kW chlazení)</td><td>1–1,3 kW</td><td>jistič 16 A</td><td>30 mA</td></tr>
                    <tr><td>Multisplit (2–3 vnitřní jednotky)</td><td>2–3,5 kW</td><td>jistič 16–20 A, samostatný kabel</td><td>30 mA</td></tr>
                    <tr><td>Velká / kazetová jednotka</td><td>nad 3,5 kW</td><td>dle projektu elektrikáře</td><td>30 mA</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Konečné jištění a průřez kabelu vždy stanoví elektrikář podle konkrétního modelu – v dokumentaci klimatizace najdete maximální jmenovitý proud (MCA) a doporučené jištění (MFA), kterým se musí instalace řídit. Pokud bydlíte ve starším domě s hliníkovými rozvody nebo nedostatečnou rezervou v rozvaděči, počítejte s tím, že instalace klimatizace si může vyžádat i částečnou úpravu elektroinstalace.</p>
            </section>

            <section id="naklady">
              <h2>Náklady na instalaci</h2>
              <p>Cena montáže split klimatizace se odvíjí hlavně od složitosti zásahu – délky potrubí, typu zdi (jádrový vrt přes panel je dražší než přes sádrokarton), dostupnosti místa pro venkovní jednotku a stavu elektroinstalace.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Položka</th><th>Orientační cena</th></tr></thead>
                  <tbody>
                    <tr><td>Standardní montáž (potrubí do 3 m, jádrový vrt, el. připojení)</td><td>6 000–12 000 Kč</td></tr>
                    <tr><td>Delší potrubní trasa (5–10 m) nebo náročnější přístup</td><td>+ 1 000–3 000 Kč</td></tr>
                    <tr><td>Nový samostatný elektrický okruh z rozvaděče</td><td>+ 2 000–5 000 Kč</td></tr>
                    <tr><td>Doplnění chladiva nad rámec základní náplně</td><td>+ 500–1 500 Kč</td></tr>
                    <tr><td>Multisplit (2 vnitřní jednotky)</td><td>15 000–25 000 Kč montáž</td></tr>
                  </tbody>
                </table>
              </div>
              <p>K ceně montáže je samozřejmě potřeba připočítat samotnou jednotku – kvalitní nástěnný split pro byt vyjde řádově na 15 000–35 000 Kč podle výkonu a značky. Celkově tak za pořízení a instalaci jedné klimatizace do bytu počítejte zhruba s 25 000–45 000 Kč.</p>
            </section>

            <section id="provoz">
              <h2>Optimální provoz a úspora energie</h2>
              <p>Jak klimatizaci nastavit, ale hlavně provozovat, má na spotřebu elektřiny minimálně stejný vliv jako samotný výkon jednotky. Pár zásad, které se vyplatí dodržovat:</p>
              <h3>Nepřehánějte rozdíl teplot</h3>
              <p>Doporučuje se udržovat rozdíl mezi venkovní a vnitřní teplotou maximálně 5–8 °C. Pokud je venku 32 °C, nastavení na 22 °C nejen že nebude o moc příjemnější, ale spotřeba elektřiny prudce naroste – každý stupeň navíc směrem dolů znamená přibližně o 6–8 % vyšší spotřebu. Rozumný kompromis mezi komfortem a úsporou je 24–26 °C.</p>
              <h3>Využívejte režim Eco a časovač</h3>
              <p>Většina moderních klimatizací má eco režim, který mírně omezuje výkon kompresoru a zabraňuje zbytečným výkyvům teploty. Časovač vám zase umožní zapnout chlazení až těsně před příchodem domů, místo aby jednotka běžela celý den naprázdno.</p>
              <h3>Zatemnění a izolace dělají velký rozdíl</h3>
              <p>Stažené žaluzie nebo rolety na slunné straně bytu dokážou snížit tepelnou zátěž místnosti o desítky procent ještě dříve, než klimatizace vůbec naskočí. Stejně tak utěsněná okna a dveře zabrání úniku vychlazeného vzduchu ven.</p>
              <h3>Kolik klimatizace skutečně spotřebuje</h3>
              <p>Reálná spotřeba závisí na výkonu jednotky, energetické třídě (SEER) a počtu provozních hodin. Nástěnná jednotka 2,5 kW s dobrým SEER při průměrném letním provozu spotřebuje řádově 0,5–0,9 kWh za hodinu chodu. Pokud chcete mít přehled, kolik vás chlazení bytu reálně stojí, vyplatí se propočítat to v <Link href="/kalkulacky/spotreba-elektriciny" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačce spotřeby elektřiny</Link>, kde si snadno zadáte příkon jednotky a počet hodin provozu.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Klimatizaci nevypínejte úplně a nezapínejte ji znovu na plný výkon při návratu domů – opakované rozjíždění kompresoru z vyšší teploty spotřebuje více energie, než kdyby jednotka mírně udržovala teplotu po celý den.</div>
            </section>

            <section id="udrzba">
              <h2>Údržba, čištění filtrů a odvod kondenzátu</h2>
              <h3>Čištění filtrů</h3>
              <p>Zanesené filtry jsou nejčastější příčinou snížené účinnosti a vyšší spotřeby klimatizace – ucpaný filtr nutí ventilátor i kompresor pracovat výrazně víc, aby dosáhly stejného výsledku. Vstupní filtry vnitřní jednotky byste měli čistit přibližně jednou za 2–4 týdny během sezóny chlazení. Podrobný postup, jak filtry vyjmout a vyčistit, najdete v článku <Link href="/blog/cistit-filtr-klimatizace" style={{ color: "#2a6496", textDecoration: "underline" }}>jak čistit filtr klimatizace</Link>.</p>
              <h3>Odvod kondenzátu</h3>
              <p>Při chlazení vzniká ve vnitřní jednotce kondenzát, který odtéká hadičkou ven nebo do odpadu. Pokud je hadička ucpaná (prachem, řasami) nebo má špatný spád, voda se může vracet zpět do jednotky a odkapávat na zeď nebo podlahu. Jednou za rok je dobré odvodní hadičku zkontrolovat a propláchnout, ideálně při servisní prohlídce.</p>
              <h3>Servisní prohlídka</h3>
              <p>Kromě čištění filtrů svépomocí se doporučuje jednou za 1–2 roky nechat udělat odbornou servisní prohlídku, při které se zkontroluje tlak chladiva, vyčistí se výměníky vnitřní i venkovní jednotky a zkontroluje se elektrické zapojení. U starších jednotek to často znamená rozdíl mezi chlazením, které funguje spolehlivě dalších pět let, a tím, které začne ztrácet výkon.</p>
            </section>

            <section id="zima">
              <h2>Provoz v zimě – topení tepelným čerpadlem</h2>
              <p>Drtivá většina dnešních split klimatizací je tzv. invertorová tepelná čerpadla vzduch-vzduch – tedy zařízení, které dokáže chladivový okruh obrátit a v zimě fungovat jako zdroj tepla. Z 1 kWh elektřiny tak dokážou vyrobit i 2–4 kWh tepla (v závislosti na venkovní teplotě a koeficientu COP), což je výrazně efektivnější než přímotopy.</p>
              <p>Reálné limity provozu v zimě:</p>
              <ul>
                <li><strong>Do cca 0 °C</strong> – klimatizace topí s vysokou účinností, COP se pohybuje kolem 3–4.</li>
                <li><strong>-5 až -10 °C</strong> – účinnost klesá, jednotka se častěji odmrazuje, výkon se snižuje.</li>
                <li><strong>Pod -10 až -15 °C</strong> (podle modelu) – většina jednotek pro běžné byty už topení automaticky vypíná nebo má výrazně omezený výkon.</li>
              </ul>
              <p>Pro byt v paneláku nebo dobře zateplený dům může klimatizace fungovat jako velmi efektivní doplňkový (nebo i hlavní) zdroj tepla pro přechodné období – jaro, podzim a mírné zimní dny. V mrazivých dnech je ale potřeba mít záložní zdroj topení (ústřední topení, elektrické topidlo), protože účinnost i výkon tepelného čerpadla vzduch-vzduch při nízkých teplotách výrazně klesají.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pravidelné odmrazování venkovní jednotky v zimě je normální součást provozu. Pokud ale jednotka namrzá nadměrně nebo netopí ani při mírném mrazu, může jít o nedostatek chladiva nebo poruchu – řešení patří do rukou servisní firmy.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Může si split klimatizaci namontovat majitel sám?", a: "Zavěšení jednotek a rozvody elektřiny zvládne šikovný kutil, ale zapojení a naplnění chladivového okruhu (propojovací potrubí, vakuování, tlaková zkouška) smí podle zákona o fluorovaných skleníkových plynech provádět jen firma s certifikací F-plyny. Bez tohoto zásahu klimatizace nebude chladit a navíc hrozí únik chladiva." },
                  { q: "Jaké jištění potřebuje klimatizace?", a: "Menší nástěnné jednotky (do cca 3,5 kW) se obvykle připojují na samostatný okruh s jističem 16 A a chráničem (proudovým chráničem) 30 mA. U výkonnějších multisplit systémů je potřeba samostatný kabel od rozvaděče dimenzovaný podle příkonu venkovní jednotky – řešení vždy nechte navrhnout elektrikářem." },
                  { q: "Kolik stojí instalace split klimatizace?", a: "Montáž jedné nástěnné jednotky (potrubí do 3 m, jádrový vrt, elektrické připojení) vyjde zhruba na 6 000–12 000 Kč. Při delším potrubí, obtížném umístění venkovní jednotky nebo nutnosti nové elektroinstalace se cena může vyšplhat na 15 000–20 000 Kč i více." },
                  { q: "Jaká je optimální teplota pro úsporný provoz klimatizace?", a: "Doporučuje se nastavit rozdíl mezi venkovní a vnitřní teplotou maximálně 5–8 °C, typicky tedy 24–26 °C v létě. Každý stupeň navíc směrem dolů zvyšuje spotřebu o přibližně 6–8 %." },
                  { q: "Dá se klimatizace používat i v zimě na topení?", a: "Ano, většina dnešních split klimatizací funguje jako tepelné čerpadlo vzduch-vzduch a umí i topit. Efektivně fungují zhruba do venkovních teplot kolem -5 až -10 °C podle modelu, při nižších teplotách výkon i účinnost klesají." },
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
                <li><a href="#typy-instalace">Mobilní vs. split</a></li>
                <li><a href="#kdo-instaluje">Kdo smí instalovat</a></li>
                <li><a href="#umisteni">Umístění jednotek</a></li>
                <li><a href="#elektrina">Elektřina a jištění</a></li>
                <li><a href="#naklady">Náklady na instalaci</a></li>
                <li><a href="#provoz">Optimální provoz</a></li>
                <li><a href="#udrzba">Údržba a filtry</a></li>
                <li><a href="#zima">Provoz v zimě</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/elektrika" className="sidebar-cat-link">💡 Elektrika & osvětlení<span>20 článků →</span></Link>
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
