import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jarní revize domu: co zkontrolovat po zimě",
  description: "Strukturovaný checklist pro jarní prohlídku domu – střecha, okapy, fasáda, terasa, zahrada, rozvody, detektory. Co hledat a jak řešit nalezené závady.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jarni-revize-domu-checklist" },
  openGraph: { title: "Jarní revize domu: co zkontrolovat po zimě", description: "Strukturovaný checklist pro jarní prohlídku domu – střecha, okapy, fasáda, terasa, zahrada, rozvody, detektory. Co hledat a jak řešit nalezené závady.", url: "https://www.domovniguru.cz/blog/jarni-revize-domu-checklist", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-07-08T08:00:00Z", modifiedTime: "2026-07-08T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jarn%C3%AD%20revize%20domu%3A%20co%20zkontrolovat%20po%20zim%C4%9B&cat=blog", width: 1200, height: 630, alt: "Jarní revize domu: co zkontrolovat po zimě" }] },
  twitter: { card: "summary_large_image", title: "Jarní revize domu: co zkontrolovat po zimě", description: "Strukturovaný checklist pro jarní prohlídku domu – střecha, okapy, fasáda, terasa, zahrada, rozvody, detektory. Co hledat a jak řešit nalezené závady." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/jarni-revize-domu-checklist#article", "headline": "Jarní revize domu: co zkontrolovat po zimě", "datePublished": "2026-07-08T08:00:00Z", "dateModified": "2026-07-08T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["jarní revize domu", "jarní kontrola domu", "co zkontrolovat po zimě", "jarní údržba domu", "checklist jaro", "střecha po zimě", "okapy jaro"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Sezónní údržba", "item": "https://www.domovniguru.cz/blog/kategorie/sezonni-udrzba" }, { "@type": "ListItem", "position": 4, "name": "Jarní revize domu: co zkontrolovat po zimě", "item": "https://www.domovniguru.cz/blog/jarni-revize-domu-checklist" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Kdy je nejlepší čas na jarní prohlídku domu?", "acceptedAnswer": { "@type": "Answer", "text": "Ideální je začít, jakmile teploty přestají klesat pod nulu a sníh je dávno pryč – obvykle v březnu nebo dubnu. Pokud jde o střechu nebo okapy, prohlídku radši neprovádějte za mrazu nebo mokra, kdy je riziko pádu výrazně vyšší." } }, { "@type": "Question", "name": "Co dělat, když najdu praskliny ve fasádě?", "acceptedAnswer": { "@type": "Answer", "text": "Vlasové trhliny (do 0,3 mm) jsou zpravidla kosmetické a lze je opravit elastickým tmelem nebo penetrací s fasádní barvou. Širší nebo hluboké trhliny, zejména procházející přes více vrstev omítky, mohou signalizovat pohyb základů nebo nosné konstrukce – v takovém případě přizvěte statika." } }, { "@type": "Question", "name": "Musím každé jaro čistit okapy?", "acceptedAnswer": { "@type": "Answer", "text": "Doporučuje se čistit okapy minimálně jednou ročně, přičemž jaro je k tomu ideální čas – přes zimu se v nich nahromadí listí, jehličí, zbytky sněhu a větve. Pokud máte v blízkosti listnaté stromy, vyplatí se čistit dvakrát ročně – na podzim i na jaře." } }, { "@type": "Question", "name": "Jak zkontrolovat střechu bez výstupu na ni?", "acceptedAnswer": { "@type": "Answer", "text": "Střechu lze částečně prohlédnout dalekohledem ze zahradního odpočívadla nebo z okna vyššího podlaží. Sledujte posunuté nebo chybějící tašky, prasklý hřeben, zkorodované prvky nebo propadlá místa. Pro detailní prohlídku střechy a komínu ale doporučujeme přizvat kominářský nebo střechařský servis." } }, { "@type": "Question", "name": "Proč je důležité zkontrolovat detektor kouře a CO na jaře?", "acceptedAnswer": { "@type": "Answer", "text": "Na jaře se obnovuje provoz zahradních grilů, zahradních krbů a přenosných vařičů, které jsou častým zdrojem požárů nebo oxidu uhelnatého. Zároveň je vhodný čas vyměnit baterie v detektorech (doporučuje se jednou ročně) a ověřit funkčnost stisknutím testovacího tlačítka." } }] }] };

const RELATED = [
  { title: "Jak vyčistit okapy a svody", href: "/blog/jak-vycistit-okapy", read: "4 min" },
  { title: "Čištění a odvlhčení sklepa", href: "/blog/cisteni-a-odvlhceni-sklepa", read: "4 min" },
  { title: "Jarní ošetření terasy a balkonu", href: "/blog/jarni-osetreni-terasy-a-balkonu", read: "5 min" },
  { title: "Odlehčení střechy od sněhu", href: "/blog/odlehcit-strechu-od-snehu", read: "4 min" },
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
              <span>Jarní revize domu</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">❄️ Sezónní údržba</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jarní revize domu: co zkontrolovat po zimě</h1>
              <p className="article-lead">Zima je pro dům náročné období. Mráz, sníh, led a vlhkost zanechávají stopy, které nejsou vždy na první pohled vidět. Systematická jarní prohlídka vám pomůže odhalit závady dřív, než se malý problém změní v drahé bourání. Tady je kompletní checklist, co zkontrolovat a na co se při tom zaměřit.</p>
              <div className="article-meta-row"><span>Aktualizováno: 8. července 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#strecha">Střecha – tašky, hřeben, komín</a></li>
                <li><a href="#okapy">Okapy a svody</a></li>
                <li><a href="#fasada">Fasáda, sokl a okna</a></li>
                <li><a href="#terasa-balkon">Terasa a balkon</a></li>
                <li><a href="#zahrada">Zahrada a venkovní plochy</a></li>
                <li><a href="#vnitrni-rozvody">Vnitřní rozvody a technická místnost</a></li>
                <li><a href="#detektory">Detektory a hasicí přístroje</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="strecha">
              <h2>Střecha – tašky, hřeben, komín</h2>
              <p>Střecha je první linií obrany domu před povětrnostními vlivy a zároveň místo, kde zimní škody začínají. Sníh a led mohou posunout nebo prasknout tašky, led v okraji střechy (tzv. ledová přehrada) může nasáknout vodu pod krytinu a mráz popraskané spáry ještě zvětší.</p>
              <h3>Co prohlédnout</h3>
              <ul>
                <li><strong>Tašky a šablony</strong> – hledejte posunuté, zlomené nebo chybějící kusy; i jedna poškozená taška může způsobit průsak do podkroví</li>
                <li><strong>Hřeben a nároží</strong> – zkontrolujte, zda hřebenáče drží na místě a nejsou popraskané; hřebenáče jsou namáhány větrem a mrazem nejvíce</li>
                <li><strong>Střešní okna a prostupy</strong> – zkontrolujte těsnění kolem střešních oken, anténních prostupů a ventilačních prvků; gumová těsnění časem tvrdnou a praská</li>
                <li><strong>Komín</strong> – vizuálně zkontrolujte spáry mezi tvárnicemi (tzv. fugy), krycí desku a kovový límec (manžetu) v místě prostupů střechou; popraskané fugy jsou vstupem vlhkosti</li>
                <li><strong>Podbití a krokve (pokud je vidíte z půdy)</strong> – tmavé skvrny nebo vlhkost na podkladové fólii signalizují průsak</li>
              </ul>
              <h3>Jak řešit</h3>
              <p>Posunuté tašky může zkušený majitel narovnat sám, pokud má přístup ke střeše a dodržuje bezpečnostní opatření (lano, protiskluzové boty, ideálně jistící partner). Prasklé nebo chybějící tašky je lepší svěřit střechaři – potřebuje i materiál shodný s existující krytinou. Komín v horším stavu by měl zkontrolovat kominík, který zároveň posoudí stav průduchu a provede zákonnou revizi.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Střechu lze z velké části prohlédnout dalekohledem ze zahrady nebo z okna vyššího podlaží. Na střechu vylézejte jen za suchého, slunečného počasí a nikdy sami bez jistění.</div>
            </section>

            <section id="okapy">
              <h2>Okapy a svody</h2>
              <p>Správně fungující okapový systém odvádí dešťovou vodu od základů domu. Ucpané okapy přetékají, voda stéká po fasádě, nasákne do zdiva a v zimě znovu mrzne – tím se problémy kumulují. Jarní čištění okap je proto jednou z nejdůležitějších položek celého checklistu.</p>
              <h3>Co prohlédnout</h3>
              <ul>
                <li><strong>Čistota žlabů</strong> – listí, jehličí, semena a drobné větve se v žlabech hromadí přes celý rok; v jarním období bývají okapy nacpané nejvíce</li>
                <li><strong>Spoje a háky</strong> – zkontrolujte, zda jsou žlaby správně upevněny v hácích a nesesedaly; viditelným příznakem je prohnutý nebo nakloněný žlab</li>
                <li><strong>Svody a odpadní trouby</strong> – ucpané svody poznáte tak, že za deště přetékají nebo z nich voda pouze kape; zkuste je propíchnout zahradní hadicí</li>
                <li><strong>Koroze a praskliny</strong> – plechové okapy korodují, PVC mohou prasknout od mrazu; hledejte zrezivělá nebo vyteklá místa</li>
                <li><strong>Odvod u základů</strong> – voda ze svodu musí odtékat minimálně 1,5–2 m od základů; zkontrolujte, zda je splash block nebo drenáž na místě a funkční</li>
              </ul>
              <h3>Jak čistit a opravit</h3>
              <p>Žlaby čistěte rukou v rukavicích nebo plastovou stěrkou – kovové nástroje mohou poškodit povrch. Nečistoty vyhoďte do kompostéru nebo zahradního odpadu. Spoje těsněte speciálním trvale pružným tmelem na okapy (ne silikónem). Detailní postup čištění a opravy najdete v článku <Link href="/blog/jak-vycistit-okapy" style={{ color: "#2a6496", textDecoration: "underline" }}>jak vyčistit okapy a svody</Link>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Na žlaby instalujte ochranné sítě nebo mřížky – výrazně sníží frekvenci čištění, zejména pokud stojíte pod listnatými stromy.</div>
            </section>

            <section id="fasada">
              <h2>Fasáda, sokl a okna</h2>
              <p>Fasáda v zimě trpí teplotními šoky a vlhkostí. Voda se vsákne do mikropórů omítky, zamrzne, zvětší objem a popraskané trhliny rozšíří. Jaro je správný čas zachytit tyto škody dřív, než do nich znovu nateče voda.</p>
              <h3>Fasáda</h3>
              <ul>
                <li><strong>Vlasové trhliny</strong> – do 0,3 mm jsou obvykle kosmetické a opravují se elastickým fasádním tmelem nebo nátěrem; v celé ploše je ale zkontrolujte</li>
                <li><strong>Hlubší praskliny</strong> – šířka nad 0,5 mm nebo trhliny procházející přes více vrstev omítky mohou signalizovat pohyb základů nebo statické problémy; přizvěte statika</li>
                <li><strong>Odpadávající nebo vypouklá omítka</strong> – pokud při poklepu na omítku zní dutě, omítka se odděluje od zdiva; je nutná lokální oprava</li>
                <li><strong>Plísně a řasy na fasádě</strong> – zelené nebo černé povlaky indikují nasákavou nebo špatně větranou fasádu; ošetřete fungicidem a zvažte aplikaci biocidní impregnace</li>
              </ul>
              <h3>Sokl</h3>
              <p>Sokl (část fasády nad terénem) je zvlášť namáhán odstřikující vodou, solí z posypů a mechanickými nárazy. Zkontrolujte, zda je povrch celistvý, není zasolen a jestli hydroizolace soklu je stále funkční.</p>
              <h3>Okna a dveře</h3>
              <ul>
                <li><strong>Těsnění a kování</strong> – zkontrolujte gumová těsnění rámu; tvrdá, popraskaná těsnění propouštějí vzduch i vodu</li>
                <li><strong>Parapety</strong> – zkontrolujte spáry kolem vnějšího parapetu, kde se voda může hromadit</li>
                <li><strong>Odvodnění okenního rámu</strong> – plastová okna mají drenážní otvory v dolním rámu; zkontrolujte, zda nejsou ucpané</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Tmavá místa na fasádě pod okenními parapety jsou typickým příznakem ucpaného odvodnění rámu nebo netěsnícího spodního těsnění. Oprava je levná a rychlá, ale ignorovaná způsobí vlhké zdivo.</div>
            </section>

            <section id="terasa-balkon">
              <h2>Terasa a balkon</h2>
              <p>Terasy a balkony jsou vystaveny přímému dešti, mrazu a UV záření bez jakékoli ochrany. Hydroizolace a dlažba trpí teplotními cykly a je třeba zkontrolovat jejich stav před letní sezónou, kdy na nich trávíte nejvíce času.</p>
              <h3>Co prohlédnout</h3>
              <ul>
                <li><strong>Hydroizolace</strong> – hledejte praskliny nebo bubliny v hydroizolační vrstvě (pod dlažbou nejsou vidět, ale prozradí je vlhkost na stropě pod balkonem nebo terasou)</li>
                <li><strong>Dlažba a spáry</strong> – uvolněné dlaždice, praskné nebo chybějící spáry jsou vstupem vody pod povrch; spáry doplňte spárovací hmotou odolnou proti mrazu</li>
                <li><strong>Terasová prkna (WPC nebo dřevo)</strong> – zkontrolujte uchycení, zkroucení prken a stav rektifikačních podložek nebo podkladní konstrukce</li>
                <li><strong>Zábradlí</strong> – zatřeste zábradlím a zkontrolujte ukotvení sloupků; zkontrolujte korozní stav kovových prvků, zejména v místech uchycení do betonu</li>
                <li><strong>Odtoky</strong> – balkónový odtok nebo střešní odtok nesmí být ucpán; vylití kbelíku vody ukáže, zda odtok funguje a jak rychle</li>
              </ul>
              <p>Podrobný postup jarního ošetření terasy a balkonu – od broušení dřeva přes olejování až po nátěr zábradlí – najdete v samostatném článku <Link href="/blog/jarni-osetreni-terasy-a-balkonu" style={{ color: "#2a6496", textDecoration: "underline" }}>jarní ošetření terasy a balkonu</Link>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Jestliže pod balkonem vznikají tmavé mapy vlhkosti nebo skvrny od rzi, nenechávejte to na příští rok – vlhkost poškozuje výztuž betonu a opravy jsou pak řádově dražší.</div>
            </section>

            <section id="zahrada">
              <h2>Zahrada a venkovní plochy</h2>
              <p>Po zimě je zahrada většinou v neutěšeném stavu – polámané větve, zamrzlé a popraskané hrnce, vymlácené chodníčky. Jarní revize zahrady má smysl udělat systematicky, ideálně za prvního pěkného slunečného víkendu.</p>
              <h3>Závlahový systém</h3>
              <ul>
                <li><strong>Hadicové trasy</strong> – zkontrolujte celou trasu závlahových hadic, zda nejsou přeražené nebo popraskané mrazem</li>
                <li><strong>Postřikovače a kapkovače</strong> – vyčistěte filtry a trysky, zkontrolujte rozmístění a správné nastavení postřikovacího sektoru</li>
                <li><strong>Řídicí jednotka</strong> – ověřte programování a vyměňte baterie, pokud řídicí jednotka funguje na záložní napájení</li>
              </ul>
              <h3>Zahradní nábytek</h3>
              <ul>
                <li>Plastový nábytek – zkontrolujte křehkost po mrazu, vyblednutí a popraskání</li>
                <li>Dřevěný nábytek – zhodnoťte stav povrchové úpravy, případně přebruste a znovu naolejujte</li>
                <li>Kovový nábytek – hledejte místa rzi a ošetřete základem na rez a krycím nátěrem</li>
              </ul>
              <h3>Přezimované rostliny a záhony</h3>
              <ul>
                <li><strong>Mulč a přikrývky</strong> – odstraňte zimní mulč z trvalek a keřů, jakmile nehrozí přízemní mráz</li>
                <li><strong>Tvarování keřů</strong> – odstraňte polámaná nebo zaschlá prameny; ideální čas pro tvarovací řez je brzy na jaře před rašením</li>
                <li><strong>Chodníčky a obrubníky</strong> – kontrolujte, zda mráz nevytlačil obrubníky nebo zda se nepropadly části dlažby</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Závlahový systém spouštějte poprvé vždy za přítomnosti, abyste okamžitě odhalili případné trubky praskané mrazem nebo ucpané trysky.</div>
            </section>

            <section id="vnitrni-rozvody">
              <h2>Vnitřní rozvody a technická místnost</h2>
              <p>Na vnitřní techniku se při jarní revizi zapomíná, protože není vidět – ale právě tahle část domu ovlivňuje komfort, zdraví a náklady na provoz po celý rok.</p>
              <h3>Topení a kotel</h3>
              <ul>
                <li><strong>Odvzdušnění radiátorů</strong> – pokud topíte ještě na začátku jara a radiátory hřejí nerovnoměrně nebo bublají, odvzdušněte je klíčkem na odvzdušňovacím ventilu; více v článku <Link href="/blog/jak-odvzdusnit-radiatory" style={{ color: "#2a6496", textDecoration: "underline" }}>jak odvzdušnit radiátory</Link></li>
                <li><strong>Tlak v soustavě</strong> – zkontrolujte manometr na kotli (optimální tlak studené soustavy je obvykle 1–1,5 bar); nízký tlak signalizuje netěsnost nebo ztrátu vody</li>
                <li><strong>Filtr kotle</strong> – vyčistěte nebo vyměňte filtr (kalník) na zpátečce; ucpaný filtr snižuje výkon a životnost oběhového čerpadla</li>
                <li><strong>Servis kotle</strong> – zákonná povinnost i pojistná podmínka; plynový kotel by měl servisovat certifikovaný technik minimálně jednou ročně</li>
              </ul>
              <h3>Větrání a rekuperace</h3>
              <ul>
                <li><strong>Filtry vzduchotechniky</strong> – zkontrolujte a vyměňte filtry větrací jednotky; zanesené filtry zvyšují spotřebu energie a snižují kvalitu vzduchu</li>
                <li><strong>Klapky a žaluzie vzduchotechniky</strong> – zkontrolujte, zda jsou otevřeny a nejsou ucpány hnízdícím hmyzem nebo ptáky</li>
              </ul>
              <h3>Sklep a odvlhčení</h3>
              <p>Po zimním oteplování se ve sklepě typicky zvyšuje vlhkost – studené zdivo kondenzuje teplý jarní vzduch. Zkontrolujte vlhkost sklepa vlhkoměrem a případně spusťte odvlhčovač. Podrobný postup čištění a odvlhčení sklepa najdete v článku <Link href="/blog/cisteni-a-odvlhceni-sklepa" style={{ color: "#2a6496", textDecoration: "underline" }}>čištění a odvlhčení sklepa</Link>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Technická místnost je ideální místo pro malou tabuli nebo papírový checklist, kam si poznačíte datum posledního servisu kotle, výměny filtru a tlaku soustavy. V okamžiku poruchy oceníte, že tyto informace máte na dosah ruky.</div>
            </section>

            <section id="detektory">
              <h2>Detektory a hasicí přístroje</h2>
              <p>Detektory kouře a oxidu uhelnatého zachraňují životy – ale jen pokud fungují. Na jaře, kdy se rozjíždí grilování, zahradní práce s motorovými nástroji a první spouštění grilů a krbů, je přesně ten správný čas zkontrolovat bezpečnostní vybavení celého domu.</p>
              <h3>Detektor kouře</h3>
              <ul>
                <li><strong>Test funkčnosti</strong> – stiskněte testovací tlačítko; správně fungující detektor vydá hlasitý pípající zvuk</li>
                <li><strong>Výměna baterií</strong> – baterie vyměňujte jednou ročně, ideálně vždy ve stejné roční době (jaro je ideální připomínka)</li>
                <li><strong>Čistění</strong> – jemně vysajte mřížku detektoru od prachu; prach v komoře snižuje citlivost čidla</li>
                <li><strong>Umístění</strong> – zkontrolujte, zda detektory nejsou zakryté, přemístěné nebo odstraněné; každé podlaží vyžaduje minimálně jeden detektor</li>
                <li><strong>Stáří přístroje</strong> – průměrná životnost detektoru kouře je 8–10 let; na zadní straně je datum výroby</li>
              </ul>
              <h3>Detektor oxidu uhelnatého (CO)</h3>
              <ul>
                <li><strong>Povinnost</strong> – v domech s plynovým kotlem, krbem nebo jiným spotřebičem na spalování je detektor CO silně doporučen (v některých pojistných smlouvách i povinný)</li>
                <li><strong>Umístění</strong> – instalujte do místnosti se zdrojem spalování a do ložnic; CO je bez zápachu a první příznaky otravy (bolest hlavy) se projeví až po delší expozici</li>
                <li><strong>Test</strong> – postup testování je stejný jako u detektoru kouře</li>
              </ul>
              <h3>Hasicí přístroj</h3>
              <ul>
                <li><strong>Revize</strong> – hasicí přístroj musí mít platnou revizní nálepku; revize se provádí jednou za rok nebo dle návodu výrobce</li>
                <li><strong>Umístění</strong> – hasicí přístroj by měl být dostupný v kuchyni a v garáži; zkontrolujte, že k němu není přístup zablokován nábytkem nebo věcmi</li>
                <li><strong>Manometr</strong> – zelená poloha ručičky signalizuje dostatečný tlak; v červené zóně je přístroj potřeba doplnit nebo vyměnit</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Podrobný návod na kontrolu hasicích přístrojů a detektorů kouře najdete v článku <Link href="/blog/kontrola-hasicich-pristroju-a-detektoru-koure" style={{ color: "#2a6496", textDecoration: "underline" }}>kontrola hasicích přístrojů a detektorů kouře</Link>. Věnujte tomu 20 minut – vrátí se vám jako klid na celý rok.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Kdy je nejlepší čas na jarní prohlídku domu?", a: "Ideální je začít, jakmile teploty přestají klesat pod nulu a sníh je dávno pryč – obvykle v březnu nebo dubnu. Pokud jde o střechu nebo okapy, prohlídku radši neprovádějte za mrazu nebo mokra, kdy je riziko pádu výrazně vyšší." },
                  { q: "Co dělat, když najdu praskliny ve fasádě?", a: "Vlasové trhliny (do 0,3 mm) jsou zpravidla kosmetické a lze je opravit elastickým tmelem nebo penetrací s fasádní barvou. Širší nebo hluboké trhliny, zejména procházející přes více vrstev omítky, mohou signalizovat pohyb základů nebo nosné konstrukce – v takovém případě přizvěte statika." },
                  { q: "Musím každé jaro čistit okapy?", a: "Doporučuje se čistit okapy minimálně jednou ročně, přičemž jaro je k tomu ideální čas – přes zimu se v nich nahromadí listí, jehličí, zbytky sněhu a větve. Pokud máte v blízkosti listnaté stromy, vyplatí se čistit dvakrát ročně – na podzim i na jaře." },
                  { q: "Jak zkontrolovat střechu bez výstupu na ni?", a: "Střechu lze částečně prohlédnout dalekohledem ze zahradního odpočívadla nebo z okna vyššího podlaží. Sledujte posunuté nebo chybějící tašky, prasklý hřeben, zkorodované prvky nebo propadlá místa. Pro detailní prohlídku střechy a komínu ale doporučujeme přizvat kominářský nebo střechařský servis." },
                  { q: "Proč je důležité zkontrolovat detektor kouře a CO na jaře?", a: "Na jaře se obnovuje provoz zahradních grilů, zahradních krbů a přenosných vařičů, které jsou častým zdrojem požárů nebo oxidu uhelnatého. Zároveň je vhodný čas vyměnit baterie v detektorech (doporučuje se jednou ročně) a ověřit funkčnost stisknutím testovacího tlačítka." },
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
                <li><a href="#strecha">Střecha – tašky, hřeben, komín</a></li>
                <li><a href="#okapy">Okapy a svody</a></li>
                <li><a href="#fasada">Fasáda, sokl a okna</a></li>
                <li><a href="#terasa-balkon">Terasa a balkon</a></li>
                <li><a href="#zahrada">Zahrada a venkovní plochy</a></li>
                <li><a href="#vnitrni-rozvody">Vnitřní rozvody</a></li>
                <li><a href="#detektory">Detektory a hasicí přístroje</a></li>
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
