import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak pěstovat brambory na zahradě – kompletní návod",
  description: "Výběr odrůdy, předklíčení sadby, výsadba, hrobkování, zálivka, ochrana proti mandelince a plísni, sklizeň a skladování brambor přes zimu.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-pestovat-brambory" },
  openGraph: { title: "Jak pěstovat brambory na zahradě – kompletní návod", description: "Výběr odrůdy, předklíčení sadby, výsadba, hrobkování, zálivka, ochrana proti mandelince a plísni, sklizeň a skladování brambor přes zimu.", url: "https://www.domovniguru.cz/blog/jak-pestovat-brambory", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-25T08:00:00Z", modifiedTime: "2026-06-25T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20p%C4%9Bstovat%20brambory%20na%20zahrad%C4%9B%20%E2%80%93%20kompletn%C3%AD%20n%C3%A1vod&cat=blog", width: 1200, height: 630, alt: "Jak pěstovat brambory na zahradě – kompletní návod" }] },
  twitter: { card: "summary_large_image", title: "Jak pěstovat brambory na zahradě – kompletní návod", description: "Výběr odrůdy, předklíčení sadby, výsadba, hrobkování, zálivka, ochrana proti mandelince a plísni, sklizeň a skladování brambor přes zimu." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/jak-pestovat-brambory#article", "headline": "Jak pěstovat brambory na zahradě – kompletní návod", "datePublished": "2026-06-25T08:00:00Z", "dateModified": "2026-06-25T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["jak pěstovat brambory", "výsadba brambor", "předklíčení sadby brambor", "hrobkování brambor", "mandelinka bramborová", "plíseň brambor", "skladování brambor"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Zahrada & terasa", "item": "https://www.domovniguru.cz/blog/kategorie/zahrada" }, { "@type": "ListItem", "position": 4, "name": "Jak pěstovat brambory na zahradě", "item": "https://www.domovniguru.cz/blog/jak-pestovat-brambory" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Kdy je nejlepší doba na výsadbu brambor?", "acceptedAnswer": { "@type": "Answer", "text": "Brambory se vysazují, jakmile se půda v hloubce 10 cm prohřeje alespoň na 8 °C a nehrozí už silné mrazy – v ČR typicky polovina dubna až začátek května. Rané odrůdy je možné vysadit o pár dní dříve, pozdní odrůdy klidně i v první polovině května." } }, { "@type": "Question", "name": "Proč se sadba brambor předklíčí před výsadbou?", "acceptedAnswer": { "@type": "Answer", "text": "Předklíčení (chození na světlo) urychlí vzejití o 1–3 týdny, posílí rostlinu a umožní vyřadit slabé nebo nemocné brambory ještě před výsadbou. Sadba se 3–4 týdny před výsadbou rozloží na světlo do jedné vrstvy při teplotě 10–15 °C, dokud nenaklíčí krátké tmavozelené až fialové klíčky." } }, { "@type": "Question", "name": "Jak hluboko a jak daleko od sebe brambory sázet?", "acceptedAnswer": { "@type": "Answer", "text": "Sadbové brambory se sázejí do hloubky 8–10 cm, v řádcích vzdálených 60–75 cm od sebe, s rozestupem 30–40 cm mezi jednotlivými hlízami v řádku. Hlubší výsadba chrání před pozdními mrazy, ale prodlužuje dobu do vzejití." } }, { "@type": "Question", "name": "Co je hrobkování a proč je u brambor důležité?", "acceptedAnswer": { "@type": "Answer", "text": "Hrobkování (přihrnování) znamená nahrnutí zeminy k bázi rostlin do tvaru hrůbku, obvykle dvakrát během sezóny. Chrání mladé hlízy před zezelenáním na slunci, podporuje tvorbu dalších hlíz výše na stoncích a zlepšuje odtok přebytečné vody od rostlin." } }, { "@type": "Question", "name": "Jak poznám, že jsou brambory zralé na sklizeň?", "acceptedAnswer": { "@type": "Answer", "text": "Signálem zralosti je zaschnutí a zežloutnutí nati – u raných odrůd k tomu dochází přibližně 70–90 dní od výsadby, u pozdních odrůd až 120–140 dní. Před sklizní na uskladnění je vhodné nať odstranit 1–2 týdny předem, aby hlízy stihly zesílit slupku." } }] }] };

const RELATED = [
  { title: "Jak pěstovat rajčata – od výsevu po sklizeň", href: "/blog/jak-pestovat-rajcata", read: "7 min" },
  { title: "Jak pěstovat papriky – od výsevu po sklizeň", href: "/blog/jak-pestovat-papriky", read: "6 min" },
  { title: "Jak postavit vyvýšený záhon – dřevěný nebo z betonu", href: "/blog/vyvyseny-zahon-postup", read: "6 min" },
  { title: "Jak zavlažovat zahradu – ruční i automatická závlaha", href: "/blog/zavlaha-zahrada-postup", read: "6 min" },
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
              <span>Jak pěstovat brambory</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak pěstovat brambory na zahradě</h1>
              <p className="article-lead">Brambory patří k nejvděčnějším plodinám na zahradě – nevyžadují drahé vybavení ani složitou péči, ale pár věcí je potřeba udělat správně. Od výběru odrůdy přes předklíčení sadby až po hrobkování a skladování. Tady je kompletní postup, jak si vypěstovat vlastní brambory na celou zimu.</p>
              <div className="article-meta-row"><span>Aktualizováno: 25. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#odrudy">Výběr odrůdy – raná, polorraná, pozdní</a></li>
                <li><a href="#priprava">Příprava sadby a předklíčení</a></li>
                <li><a href="#vysadba">Termín a způsob výsadby</a></li>
                <li><a href="#hrobkovani">Hrobkování (přihrnování)</a></li>
                <li><a href="#zaliva-hnojeni">Zálivka a hnojení</a></li>
                <li><a href="#ochrana">Ochrana proti mandelince a plísni</a></li>
                <li><a href="#sklizen">Sklizeň a uskladnění přes zimu</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="odrudy">
              <h2>Výběr odrůdy – raná, polorraná, pozdní</h2>
              <p>Odrůdy brambor se dělí podle délky vegetační doby, tedy podle toho, jak dlouho potřebují od výsadby do sklizně. Volba ovlivňuje nejen to, kdy budeš sklízet, ale i to, jak dlouho se brambory dají skladovat.</p>
              <ul>
                <li><strong>Rané odrůdy</strong> – sklizeň 70–90 dní od výsadby, ideální na „nové brambory" už v červnu a červenci. Mají tenčí slupku a kratší výdrž při skladování (obvykle jen pár týdnů). Patří mezi ně například Adéla, Red Anna nebo Riviera.</li>
                <li><strong>Polorraná odrůdy</strong> – sklizeň přibližně po 90–110 dnech, kompromis mezi rychlostí a výnosem. Vhodné pro běžnou letní spotřebu i krátké skladování. Typickými zástupci jsou Marabel nebo Red Sonia.</li>
                <li><strong>Pozdní odrůdy</strong> – sklizeň po 120–140 dnech, nejvyšší výnos a nejlepší vlastnosti pro dlouhé skladování přes zimu. Slupka je silnější a hlízy lépe odolávají uskladnění až do dalšího jara. Mezi oblíbené patří Agria, Bionta nebo Rosara.</li>
              </ul>
              <p>Pro celoroční zásobu je nejpraktičtější kombinace – část záhonu osadit ranou odrůdou na letní konzumaci a část pozdní odrůdou určenou výhradně na zimní skladování. Vybírej také podle účelu: voskové (salátové) odrůdy se nerozvařují a hodí se na salát, moučné odrůdy jsou ideální na kaše a pečení.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Kupuj certifikovanou sadbu od prověřeného prodejce, ne brambory z vlastní sklizně opakovaně rok po roku. Sadba bez certifikace časem hromadí viry a houbové choroby, které snižují výnos.</div>
            </section>

            <section id="priprava">
              <h2>Příprava sadby a předklíčení</h2>
              <p>Předklíčení (odborně chození na světlo) je jeden z nejjednodušších kroků, který výrazně zlepší výsledek. Sadbové brambory se 3–4 týdny před plánovanou výsadbou rozloží do jedné vrstvy na světlé, chladnější místo – například na okno v nevytápěné chodbě, do skleníku nebo na verandu.</p>
              <ul>
                <li><strong>Teplota</strong> – ideálně 10–15 °C, při vyšší teplotě klíčky rostou příliš rychle a jsou dlouhé a křehké</li>
                <li><strong>Světlo</strong> – rozptýlené denní světlo, ne přímé slunce; na světle klíčky zezelenají a zesílí, ve tmě by byly dlouhé a bílé</li>
                <li><strong>Doba</strong> – 3–4 týdny do okamžiku výsadby, kdy by klíčky měly být 1–2 cm dlouhé</li>
                <li><strong>Kontrola</strong> – před výsadbou vyřaď hlízy s hnilobou, měkkými místy nebo bez náznaku klíčení</li>
              </ul>
              <p>Větší sadbové brambory (nad velikost vejce) je možné před výsadbou rozříznout na dva až tři díly, pokaždé s alespoň jedním silným klíčkem. Řezná plocha by měla 1–2 dny zaschnout, než hlízu zasadíš – omezí se tak riziko hniloby v půdě.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud nemáš dost světlého prostoru, alespoň brambory pár dní před výsadbou přesuň z tmavého sklepa na světlo. I krátké předklíčení pomůže rychlejšímu vzcházení.</div>
            </section>

            <section id="vysadba">
              <h2>Termín a způsob výsadby</h2>
              <p>Brambory se vysazují, jakmile se půda v hloubce kořenů prohřeje alespoň na 8 °C a riziko silných mrazů pomine – v podmínkách ČR to bývá polovina dubna až začátek května. Rané odrůdy lze vysadit o trochu dříve, pozdní klidně i o pár týdnů později.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Parametr</th><th>Doporučená hodnota</th></tr></thead>
                  <tbody>
                    <tr><td>Hloubka výsadby</td><td>8–10 cm</td></tr>
                    <tr><td>Rozestup mezi řádky</td><td>60–75 cm</td></tr>
                    <tr><td>Rozestup hlíz v řádku</td><td>30–40 cm</td></tr>
                    <tr><td>Teplota půdy při výsadbě</td><td>min. 8 °C</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Hlízy se sázejí klíčkem nahoru do připravených rýh nebo jednotlivých jamek. Půda by měla být předem prokypřená, bez velkých hrud a kamenů, ideálně s přidaným kompostem nebo dobře vyzrálým hnojem na podzim předchozího roku. Čerstvý hnůj přímo při výsadbě se nedoporučuje – podporuje strupovitost hlíz.</p>
              <p>Brambory mají rády slunné stanoviště a propustnou, lehce kyselou až neutrální půdu. Pokud má zahrada problém s těžkou jílovitou půdou nebo se na ní voda dlouho drží, zvaž výsadbu do vyvýšeného záhonu – víc v článku o tom, <Link href="/blog/vyvyseny-zahon-postup" style={{ color: "#2a6496", textDecoration: "underline" }}>jak postavit vyvýšený záhon</Link>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pozdní mráz po vzejití natě dokáže poškodit nebo zničit první listy. Pokud hrozí ranní mráz, přihrň k mladým rostlinám zeminu nebo je přes noc přikryj netkanou textilií.</div>
            </section>

            <section id="hrobkovani">
              <h2>Hrobkování (přihrnování)</h2>
              <p>Hrobkování, lidově přihrnování, je nahrnutí zeminy k bázi rostlin do podoby hrůbku vysokého 15–20 cm. Provádí se obvykle dvakrát za sezónu – poprvé, když rostliny dosáhnou výšky asi 15–20 cm, podruhé o 2–3 týdny později.</p>
              <ul>
                <li><strong>Ochrana hlíz před zezelenáním</strong> – hlízy vystavené slunečnímu světlu zezelenají a tvoří solanin, jedovatou látku; hrobek je udržuje ve tmě pod povrchem</li>
                <li><strong>Vyšší výnos</strong> – přihrnutá zemina podporuje tvorbu dalších hlíz na nově zakopaných částech stonku</li>
                <li><strong>Lepší odtok vody</strong> – hrůbek funguje jako mírný svah, který odvádí přebytečnou dešťovou vodu od báze rostlin</li>
                <li><strong>Potlačení plevele</strong> – přihrnutá zemina zároveň zasype drobný plevel mezi řádky</li>
              </ul>
              <p>Hrobkování se provádí motyčkou nebo speciální radlicí na kultivátoru, vždy za sucha nebo mírně vlhké půdy – v podmáčené půdě se zemina lepí a hrůbek špatně drží tvar.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud nechceš hrobkovat ručně, lze brambory pěstovat i pod silnou vrstvou mulče (sláma, posečená trá­va) – mulč nahrazuje zeminu a usnadňuje i sklizeň, hlízy se prostě vyhrabou z mulče rukou.</div>
            </section>

            <section id="zaliva-hnojeni">
              <h2>Zálivka a hnojení</h2>
              <h3>Zálivka</h3>
              <p>Brambory nejvíce potřebují vodu ve fázi tvorby hlíz, tedy zhruba od počátku kvetení dál. V tomto období je vhodné zalévat pravidelně tak, aby půda byla rovnoměrně vlhká do hloubky 20–30 cm, ale ne podmáčená. Nepravidelná zálivka (období sucha střídané přemokřením) vede k praskání hlíz a deformacím.</p>
              <p>V počáteční fázi růstu, než rostliny vykvetou, naopak přílišná zálivka prospívá víc listové ploše než hlízám – stačí udržovat půdu jen mírně vlhkou. Pro automatizaci zálivky během sezóny se vyplatí mrknout na kapénkovou nebo postřikovou závlahu, viz článek o tom, <Link href="/blog/zavlaha-zahrada-postup" style={{ color: "#2a6496", textDecoration: "underline" }}>jak zavlažovat zahradu</Link>.</p>
              <h3>Hnojení</h3>
              <p>Brambory jsou náročné na živiny, zejména draslík, který podporuje tvorbu a kvalitu hlíz. Při přípravě záhonu na podzim se vyplatí zapracovat zralý kompost nebo vyzrálý hnůj. Během vegetace je možné přihnojit:</p>
              <ul>
                <li><strong>Před výsadbou</strong> – hnojivo s vyváženým obsahem draslíku a fosforu, méně dusíku (přemíra dusíku podporuje nať na úkor hlíz)</li>
                <li><strong>Při prvním hrobkování</strong> – přihnojení draslíkatým hnojivem podpoří nasazení hlíz</li>
                <li><strong>Organické varianty</strong> – kompost, dřevní popel (zdroj draslíku) nebo kopřivový kvas</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Přemíra dusíku v půdě (např. z čerstvého hnoje) způsobí bujný růst natě, ale slabší a méně hlíz. U brambor platí, že méně dusíku a víc draslíku přináší lepší úrodu.</div>
            </section>

            <section id="ochrana">
              <h2>Ochrana proti mandelince a plísni bramboru</h2>
              <h3>Mandelinka bramborová</h3>
              <p>Mandelinka bramborová je nejznámější škůdce brambor – žluto-černě pruhovaný brouk a jeho oranžové larvy dokážou ohlodat nať do několika dní. Kontroluj rostliny pravidelně od konce května.</p>
              <ul>
                <li><strong>Mechanický sběr</strong> – brouky, larvy i nakladená vajíčka (žlutooranžové skupinky na spodní straně listů) je možné ručně sbírat a likvidovat, zvlášť na malé zahradě je to účinné</li>
                <li><strong>Biologické přípravky</strong> – postřiky na bázi Bacillus thuringiensis působí cíleně na larvy a jsou šetrné k užitečnému hmyzu</li>
                <li><strong>Chemická ochrana</strong> – při silném přemnožení lze použít registrovaný insekticid, vždy podle návodu a s ohledem na ochrannou lhůtu před sklizní</li>
                <li><strong>Střídání plodin</strong> – brambory nesázej několik let po sobě na stejné místo, omezíš tím přezimující populaci mandelinky v půdě</li>
              </ul>
              <h3>Plíseň bramboru</h3>
              <p>Plíseň bramboru (Phytophthora infestans) je houbová choroba, která se rychle šíří za vlhkého a teplého počasí, zejména v období dešťů v červenci. Projevuje se hnědými skvrnami na listech, které postupně zasychají, a může napadnout i hlízy ve sklizni.</p>
              <ul>
                <li><strong>Prevence</strong> – dostatečné rozestupy mezi rostlinami pro proudění vzduchu, zálivka u země (ne na nať), vyhýbat se zálivce navečer</li>
                <li><strong>Preventivní postřiky</strong> – měďnaté přípravky aplikované preventivně před deštivým počasím</li>
                <li><strong>Při výskytu</strong> – napadenou nať co nejdřív odstranit a zlikvidovat (ne kompostovat), aby se infekce nešířila do hlíz</li>
                <li><strong>Odolné odrůdy</strong> – některé novější odrůdy mají vyšší přirozenou odolnost vůči plísni, vyplatí se na ně přejít v lokalitách s vlhčím klimatem</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud nať napadne plíseň těsně před sklizní, nať odřízni a spal nebo zlikviduj mimo kompost a hlízy sklízej až po 1–2 týdnech – omezíš přenos spor na hlízy při sklizni.</div>
            </section>

            <section id="sklizen">
              <h2>Sklizeň a uskladnění přes zimu</h2>
              <p>Signálem zralosti je zaschnutí a zežloutnutí natě. U raných odrůd nastává přibližně 70–90 dní od výsadby, u pozdních odrůd určených na zimní zásobu až 120–140 dní.</p>
              <ul>
                <li><strong>Před sklizní na skladování</strong> – nať odstraň 1–2 týdny předem; hlízy tak stihnou dotvořit a zesílit slupku, což prodlouží výdrž při skladování</li>
                <li><strong>Vhodné počasí</strong> – sklízej za suchého počasí, mokré hlízy se hůř skladují a rychleji hnijí</li>
                <li><strong>Opatrné vykopání</strong> – vidlemi nebo motyčkou opatrně, aby se hlízy nepoškrábaly; poškozené hlízy spotřebuj jako první, ke skladování se nehodí</li>
                <li><strong>Zaschnutí na vzduchu</strong> – po vykopání ponech hlízy pár hodin na vzduchu (ve stínu, ne na přímém slunci) ať oschne zbylá zemina a slupka zatvrdne</li>
              </ul>
              <h3>Skladování přes zimu</h3>
              <p>Ideální podmínky pro dlouhodobé skladování brambor jsou tma, chlad a stálá vlhkost vzduchu:</p>
              <ul>
                <li><strong>Teplota</strong> – 4–8 °C, ve sklepě nebo nevytápěné komoře</li>
                <li><strong>Tma</strong> – světlo způsobuje zezelenání a tvorbu solaninu, hlízy musí být uložené ve tmě (bedny, papírové pytle, ne průhledné sáčky)</li>
                <li><strong>Vzdušnost</strong> – bedny s mezerami nebo pytle z juty umožní proudění vzduchu a zabrání hnilobě</li>
                <li><strong>Kontrola</strong> – jednou za měsíc zkontroluj a vyřaď hlízy, které začínají hnít, aby nenakazily ostatní</li>
              </ul>
              <p>Pokud řešíš skladovací prostor i pro další úrodu ze zahrady, může se hodit i samostatný <Link href="/blog/jak-postavit-zahradni-domek-na-naradi" style={{ color: "#2a6496", textDecoration: "underline" }}>zahradní domek na nářadí a úrodu</Link>, kde brambory přečkají zimu mimo obytné prostory.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Brambory nikdy neskladuj společně s jablky nebo jinými druhy ovoce – ethylen uvolňovaný ovocem urychluje klíčení a stárnutí hlíz.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Kdy je nejlepší doba na výsadbu brambor?", a: "Brambory se vysazují, jakmile se půda v hloubce 10 cm prohřeje alespoň na 8 °C a nehrozí už silné mrazy – v ČR typicky polovina dubna až začátek května. Rané odrůdy je možné vysadit o pár dní dříve, pozdní odrůdy klidně i v první polovině května." },
                  { q: "Proč se sadba brambor předklíčí před výsadbou?", a: "Předklíčení (chození na světlo) urychlí vzejití o 1–3 týdny, posílí rostlinu a umožní vyřadit slabé nebo nemocné brambory ještě před výsadbou. Sadba se 3–4 týdny před výsadbou rozloží na světlo do jedné vrstvy při teplotě 10–15 °C, dokud nenaklíčí krátké tmavozelené až fialové klíčky." },
                  { q: "Jak hluboko a jak daleko od sebe brambory sázet?", a: "Sadbové brambory se sázejí do hloubky 8–10 cm, v řádcích vzdálených 60–75 cm od sebe, s rozestupem 30–40 cm mezi jednotlivými hlízami v řádku. Hlubší výsadba chrání před pozdními mrazy, ale prodlužuje dobu do vzejití." },
                  { q: "Co je hrobkování a proč je u brambor důležité?", a: "Hrobkování (přihrnování) znamená nahrnutí zeminy k bázi rostlin do tvaru hrůbku, obvykle dvakrát během sezóny. Chrání mladé hlízy před zezelenáním na slunci, podporuje tvorbu dalších hlíz výše na stoncích a zlepšuje odtok přebytečné vody od rostlin." },
                  { q: "Jak poznám, že jsou brambory zralé na sklizeň?", a: "Signálem zralosti je zaschnutí a zežloutnutí nati – u raných odrůd k tomu dochází přibližně 70–90 dní od výsadby, u pozdních odrůd až 120–140 dní. Před sklizní na uskladnění je vhodné nať odstranit 1–2 týdny předem, aby hlízy stihly zesílit slupku." },
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
                <li><a href="#odrudy">Výběr odrůdy</a></li>
                <li><a href="#priprava">Příprava sadby</a></li>
                <li><a href="#vysadba">Termín a způsob výsadby</a></li>
                <li><a href="#hrobkovani">Hrobkování</a></li>
                <li><a href="#zaliva-hnojeni">Zálivka a hnojení</a></li>
                <li><a href="#ochrana">Ochrana proti škůdcům</a></li>
                <li><a href="#sklizen">Sklizeň a skladování</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/zahrada" className="sidebar-cat-link">🌿 Zahrada & terasa<span>36 článků →</span></Link>
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
