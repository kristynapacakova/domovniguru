import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ventilátor do koupelny a WC: výběr a montáž",
  description: "Jak vybrat správný ventilátor do koupelny nebo WC – výpočet výkonu, krytí IP44, typy senzorů, napojení na elektřinu a postup montáže.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/ventilator-do-koupelny-a-wc" },
  openGraph: { title: "Ventilátor do koupelny a WC: výběr a montáž", description: "Jak vybrat správný ventilátor do koupelny nebo WC – výpočet výkonu, krytí IP44, typy senzorů, napojení na elektřinu a postup montáže.", url: "https://www.domovniguru.cz/blog/ventilator-do-koupelny-a-wc", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-07-08T08:00:00Z", modifiedTime: "2026-07-08T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Ventil%C3%A1tor%20do%20koupelny%20a%20WC%3A%20v%C3%BDb%C4%9Br%20a%20mont%C3%A1%C5%BE&cat=blog", width: 1200, height: 630, alt: "Ventilátor do koupelny a WC: výběr a montáž" }] },
  twitter: { card: "summary_large_image", title: "Ventilátor do koupelny a WC: výběr a montáž", description: "Jak vybrat správný ventilátor do koupelny nebo WC – výpočet výkonu, krytí IP44, typy senzorů, napojení na elektřinu a postup montáže." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/ventilator-do-koupelny-a-wc#article", "headline": "Ventilátor do koupelny a WC: výběr a montáž", "datePublished": "2026-07-08T08:00:00Z", "dateModified": "2026-07-08T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["ventilátor do koupelny", "koupelnový ventilátor", "větrání koupelny", "IP44", "axiální ventilátor", "vlhkostní senzor", "montáž ventilátoru"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Elektrika & osvětlení", "item": "https://www.domovniguru.cz/blog/kategorie/elektrika" }, { "@type": "ListItem", "position": 4, "name": "Ventilátor do koupelny a WC", "item": "https://www.domovniguru.cz/blog/ventilator-do-koupelny-a-wc" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jaký výkon ventilátoru potřebuji do koupelny?", "acceptedAnswer": { "@type": "Answer", "text": "Základní pravidlo je 8–10násobná výměna vzduchu za hodinu. Objem místnosti (délka × šířka × výška) vynásobte 8–10 a dostanete minimální průtok v m³/h. Pro koupelnu 6 m² s výškou 2,5 m to vychází na cca 120–150 m³/h. Pro WC stačí menší výkony kolem 80–100 m³/h." } }, { "@type": "Question", "name": "Je nutné mít v koupelně ventilátor?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, česká norma ČSN EN 15665 a stavební zákon vyžadují větrání vlhkých místností bez přirozeného větrání oknem. Koupelna bez okna musí mít mechanické větrání zajišťující minimálně 50 m³/h pro sprchový kout nebo 90 m³/h pro vanu. Bez ventilace rychle vznikají plísně a poškozuje se omítka." } }, { "@type": "Question", "name": "Jaký je rozdíl mezi ventilátorem s vlhkostním senzorem a s časovačem?", "acceptedAnswer": { "@type": "Answer", "text": "Ventilátor s vlhkostním senzorem (hygrostat) se zapne automaticky, jakmile vlhkost vzduchu překročí nastavenou hodnotu (obvykle 70–80 %), a vypne se, až vzduch oschne. Ventilátor s časovačem (timer) běží nastavenou dobu po vypnutí světla – typicky 2–30 minut. Hygrostatický ventilátor je energeticky efektivnější, časovač je levnější." } }, { "@type": "Question", "name": "Mohu ventilátor do koupelny zapojit sám?", "acceptedAnswer": { "@type": "Answer", "text": "Výměnu starého ventilátoru za nový stejného typu na stávající kabeláž zvládne šikovný domácí kutil. Při jakékoli práci s elektřinou musíte vždy vypnout příslušný jistič a ověřit absenci napětí zkoušečkou. Pokud potřebujete přivést nové vedení nebo instalovat do vlhké zóny (0 nebo 1), práci by měl provést certifikovaný elektrikář." } }, { "@type": "Question", "name": "Co je zpětná klapka a proč je důležitá?", "acceptedAnswer": { "@type": "Answer", "text": "Zpětná klapka je mechanická klapka v tubusu ventilátoru, která se otevírá pouze při provozu. Zabraňuje zpětnému proudění studeného vzduchu, průvanu a zápachu z potrubí zpět do koupelny, když ventilátor neběží. Většina kvalitních ventilátorů ji má vestavěnou, u levnějších modelů si ji ověřte." } }] }] };

const RELATED = [
  { title: "Jak se zbavit vlhkosti v bytě", href: "/blog/zbavit-se-vlhkosti-v-byte", read: "5 min" },
  { title: "Jak správně větrat byt", href: "/blog/spravne-vetrat-byt", read: "4 min" },
  { title: "Údržba rekuperace a ventilace", href: "/blog/udrzba-rekuperace-a-ventilace", read: "5 min" },
  { title: "Stropní ventilátor: výběr a instalace", href: "/blog/stropni-ventilator-instalace", read: "5 min" },
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
              <span>Ventilátor do koupelny a WC</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">⚡ Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 4 min čtení</span>
              </div>
              <h1 className="article-h1">Ventilátor do koupelny a WC: výběr a montáž</h1>
              <p className="article-lead">Vlhkost v koupelně je největším nepřítelem omítek, spár a dřevěného nábytku – a tam, kde chybí přirozené větrání oknem, je mechanický ventilátor jedinou spolehlivou obranou. Jak vybrat správný výkon, co znamená IP44 a jak ventilátor zapojit bez chyb?</p>
              <div className="article-meta-row"><span>Aktualizováno: 8. července 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#proc-vetrat">Proč větrání koupelny nestačí improvizovat</a></li>
                <li><a href="#typy-ventilators">Typy ventilátorů a jejich funkce</a></li>
                <li><a href="#vypocet-vykonu">Výpočet potřebného výkonu</a></li>
                <li><a href="#ip-kryti">Krytí IP – co musí koupelnový ventilátor splňovat</a></li>
                <li><a href="#napojeni">Napojení na elektřinu</a></li>
                <li><a href="#montaz">Montáž krok za krokem</a></li>
                <li><a href="#zpetna-klapka">Zpětná klapka a čištění</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="proc-vetrat">
              <h2>Proč větrání koupelny nestačí improvizovat</h2>
              <p>Při sprchování nebo koupeli se do vzduchu uvolňují litry vody v podobě páry. Pokud tato vlhkost nemá kam odejít, kondenzuje na chladných površích – dlaždicích, zrcadle, stropě – a vytváří ideální podmínky pro růst plísní. Černé skvrny v spárách, odpadající malba nebo zapáchající vzduch jsou klasické příznaky nedostatečného větrání.</p>
              <p>Z hlediska stavebních předpisů platí v České republice povinnost mechanicky větrat vlhké místnosti bez přirozeného větrání oknem. Norma <strong>ČSN EN 15665</strong> stanovuje minimální výměnu vzduchu pro sprchový kout na 50 m³/h a pro vanu nebo koupelnu s vanou na 90 m³/h. U WC bez okna je minimum 25–50 m³/h. Nesplnění těchto požadavků může být problémem při kolaudaci nebo pojistné události způsobené vlhkostí.</p>
              <p>Větrání koupelny otevřením dveří na chodbu nestačí – vlhký vzduch se přesouvá dál do bytu a kondenzuje jinde. Jak obecně přistupovat k vlhkosti v domácnosti, shrnujeme v článku <Link href="/blog/zbavit-se-vlhkosti-v-byte" style={{ color: "#2a6496", textDecoration: "underline" }}>jak se zbavit vlhkosti v bytě</Link>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Kupte si levný hygrometr a umístěte ho do koupelny. Po sprše by relativní vlhkost měla klesnout pod 70 % do 30 minut od vypnutí vody – pokud ne, větrání nestačí.</div>
            </section>

            <section id="typy-ventilators">
              <h2>Typy ventilátorů a jejich funkce</h2>
              <h3>Axiální nástěnný ventilátor</h3>
              <p>Nejběžnější typ pro koupelny a WC. Montuje se přímo do zdi nebo stropu na větrací průduch. Ventilátor fouká vzduch axiálně – rovně skrz lopatky. Je kompaktní, relativně tichý a dostupný v průměrech 100, 120 a 150 mm. Pro domácí koupelny a WC je průměr 100 mm nejčastější volbou.</p>
              <h3>Potrubní (inline) ventilátor</h3>
              <p>Umístí se do potrubí mimo koupelnu – například na půdě nebo ve sníženém podhledu. Do koupelny vede jen mřížka. Výhodou je nižší hluk v místnosti, nevýhodou složitější instalace a vyšší cena. Vhodný pro silnější profily potrubí nebo tam, kde není místo pro nástěnnou mřížku.</p>
              <h3>Stropní ventilátor (centrifugální)</h3>
              <p>Centrifugální ventilátory mají vyšší účinnost při překonávání odporu dlouhého potrubí. Hodí se pro koupelny připojené na delší vzduchový kanál nebo sdílené šachty.</p>
              <h3>Funkce a ovládání</h3>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Funkce</th><th>Jak funguje</th><th>Pro koho</th></tr></thead>
                  <tbody>
                    <tr><td>Spínač světla</td><td>Zapíná se se světlem, vypíná se s ním</td><td>Nejjednodušší řešení, vhodné do WC</td></tr>
                    <tr><td>Časovač (timer)</td><td>Běží nastavený čas po vypnutí světla (2–30 min)</td><td>Koupelny, kde vzduch nestihne vyschnout při krátkém použití</td></tr>
                    <tr><td>Vlhkostní senzor (hygrostat)</td><td>Zapne se, jakmile vlhkost překročí nastavenou mez (~70–80 %)</td><td>Nejefektivnější provoz, ideální pro sprchové kouty</td></tr>
                    <tr><td>Pohybový senzor (PIR)</td><td>Zapne se při vstupu, doběhne po odchodu</td><td>WC, kde zapomínáte zhasínat</td></tr>
                    <tr><td>Kombinace hygro + timer</td><td>Zapne se na vlhkost, vyběhne timer po poklesu vlhkosti</td><td>Nejlepší výsledek pro koupelny</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Pro malé WC bez sprchy stačí jednoduchý ventilátor spínaný se světlem. Pro koupelnu se sprchou nebo vanou investujte do modelu s hygrostátem – ušetříte energii a vzduch se odvětrá přesně tehdy, kdy je to třeba.</div>
            </section>

            <section id="vypocet-vykonu">
              <h2>Výpočet potřebného výkonu ventilátoru</h2>
              <p>Výkon ventilátoru se udává v <strong>m³/h</strong> (metrů krychlových za hodinu). Základní výpočet je jednoduchý:</p>
              <ol>
                <li>Změřte objem místnosti: <strong>délka × šířka × výška stropu</strong> (v metrech)</li>
                <li>Výsledek vynásobte koeficientem <strong>8–10</strong> pro koupelnu se sprchou nebo vanou</li>
                <li>Pro WC bez sprchy stačí koeficient <strong>6–8</strong></li>
              </ol>
              <p><strong>Příklad:</strong> Koupelna 2,5 m × 2 m × 2,5 m = 12,5 m³ × 10 = <strong>125 m³/h</strong>. Nejbližší standardní výkon je 150 m³/h.</p>
              <p>Pokud je potrubí delší než 2–3 metry nebo má více kolen, počítejte s výkonem o 20–30 % vyšším – každý metr potrubí a každé koleno zvyšují tlakovou ztrátu, což snižuje skutečný průtok.</p>
              <h3>Orientační přehled podle místnosti</h3>
              <ul>
                <li><strong>WC (1–2 m²)</strong> – 80–100 m³/h, průměr potrubí 100 mm</li>
                <li><strong>Malá koupelna se sprchou (3–5 m²)</strong> – 100–150 m³/h, průměr 100–120 mm</li>
                <li><strong>Středně velká koupelna s vanou (5–8 m²)</strong> – 150–200 m³/h, průměr 120–150 mm</li>
                <li><strong>Velká koupelna nebo koupelna + WC (8+ m²)</strong> – 200–300 m³/h, průměr 150 mm nebo více ventilátorů</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Přeceňte výkon raději o trochu – tichý provoz na nižší otáčky je vždy lepší než přetížený ventilátor, který nestačí odvádět vzduch. Navíc výrobci uvádějí výkony měřené bez potrubí, reálný průtok bývá nižší.</div>
            </section>

            <section id="ip-kryti">
              <h2>Krytí IP – co musí koupelnový ventilátor splňovat</h2>
              <p>Koupelna je z hlediska elektrické bezpečnosti rozdělena do <strong>ochranných zón</strong> podle normy ČSN 33 2000-7-701. Každá zóna vyžaduje jiný stupeň ochrany elektrického zařízení:</p>
              <ul>
                <li><strong>Zóna 0</strong> – přímo ve vaně nebo sprchové vaničce. Zde smí být pouze zařízení do 12 V SELV. Ventilátor sem nepatří.</li>
                <li><strong>Zóna 1</strong> – do výšky 2,25 m nad okrajem vany nebo sprchy, do vzdálenosti 0,6 m od okraje. Vyžaduje minimálně <strong>IP45</strong>.</li>
                <li><strong>Zóna 2</strong> – do vzdálenosti 0,6 m od zóny 1 nebo do výšky 2,25 m v okolí vany. Vyžaduje minimálně <strong>IP44</strong>.</li>
                <li><strong>Mimo zóny</strong> – zbytek koupelny. Stačí <strong>IP20</strong>, ale doporučuje se IP44 pro celou koupelnu.</li>
              </ul>
              <p>Většina koupelnových ventilátorů je označena jako <strong>IP44</strong> nebo <strong>IP45</strong> – to znamená, že jsou chráněné proti vniknutí pevných těles větších než 1 mm (4) a stříkající vodě z libovolného směru (4) nebo tryskající vodě (5). Pro stropní montáž přímo nad sprchou hledejte <strong>IP45</strong>.</p>
              <div className="article-tip"><strong>⚠️ Bezpečnost:</strong> Nikdy neinstalujte do koupelny ventilátor bez příslušného IP krytí – voda a elektřina mohou způsobit smrtelný úraz. Vždy před jakoukoli prací na elektroinstalaci vypněte příslušný jistič v rozvaděči a ověřte absenci napětí zkoušečkou napětí.</div>
            </section>

            <section id="napojeni">
              <h2>Napojení ventilátoru na elektřinu</h2>
              <p>Způsob zapojení závisí na tom, jak chcete ventilátor ovládat. Existují tři základní varianty:</p>
              <h3>Varianta 1: Spínání se světlem</h3>
              <p>Nejjednodušší zapojení – ventilátor je napojen paralelně k žárovce nebo LED svítidlu. Zapne se se světlem a vypne při zhasnutí. Stačí dvouvodičové vedení L + N (fáze + nulový vodič). Tato varianta nevyžaduje žádné přídavné vedení, pokud kabeláž ke svítidlu prochází místem instalace ventilátoru.</p>
              <h3>Varianta 2: Samostatné spínání nebo s timerem</h3>
              <p>Ventilátor má vlastní přívod a vlastní spínač, případně integrovaný timer. Vyžaduje <strong>třívodičové vedení L + N + PE</strong> (fáze, nula, ochranný vodič). Tato varianta umožňuje spouštět ventilátor nezávisle na světle nebo mu nastavit doběh po vypnutí světla.</p>
              <h3>Varianta 3: Ovládání pomocí hygrostátu nebo PIR</h3>
              <p>Ventilátor s integrovaným senzorem se zapojuje na samostatné vedení. Hygrostát nebo PIR čidlo přebírá funkci spínání – nepotřebujete žádný manuální přepínač. Napájení L + N + PE stačí. Nastavení prahu vlhkosti nebo citlivosti PIR se dělá potenciometrem nebo DIP přepínači přímo na ventilátoru.</p>
              <div className="article-tip"><strong>⚠️ Bezpečnost:</strong> Před zahájením prací vždy vypněte jistič koupelnového okruhu nebo celého bytu. Zkoušečkou napětí (fázovka nebo multimetr) ověřte, že v krabičce opravdu není napětí – ani po vypnutí jističe. Při nejistotě nebo potřebě nového vedení přivolejte certifikovaného elektrikáře.</div>
              <h3>Propojení s ventilací bytového domu</h3>
              <p>V panelových domech a starších bytovkách ústí větrací průduchy do společné bytové šachty. Ventilátor musí mít <strong>zpětnou klapku</strong>, aby zápach ze sousedních bytů neproudil zpět k vám. Nový ventilátor nesmí být výkonově přetížený vůči průřezu šachty, jinak vytváří přetlak a narušuje větrání sousedů.</p>
            </section>

            <section id="montaz">
              <h2>Montáž ventilátoru krok za krokem</h2>
              <p>Před zahájením montáže si připravte: ventilátor, šroubovák, vrtačku s vrtáky do zdiva, sádrová nebo montážní hmota, hadičku nebo tuhé potrubí ke zdi/šachtě, těsnění nebo těsnicí pásku.</p>
              <h3>Montáž do stávajícího větrací otvoru</h3>
              <ol>
                <li><strong>Vypněte jistič</strong> a ověřte zkoušečkou absenci napětí v místě zapojení.</li>
                <li>Odstraňte stávající mřížku nebo starý ventilátor – obvykle drží na šroubcích nebo klipu.</li>
                <li>Zkontrolujte průměr otvoru – standardy jsou 100 mm, 120 mm a 150 mm. Pokud průměr nesedí, budete potřebovat redukci.</li>
                <li>Protáhněte napájecí kabel skrz otvor nebo kryt ventilátoru, jak popisuje návod výrobce.</li>
                <li>Připojte kabely: L (fáze – hnědý nebo černý) na svorku L, N (nula – modrý) na svorku N, PE (zemnění – zelenožlutý) na PE nebo symbol uzemnění. U starých instalací bez PE kontaktujte elektrikáře.</li>
                <li>Zasuňte tělo ventilátoru do otvoru a upevněte šroubky nebo montážní hmotou.</li>
                <li>Zapněte jistič a ověřte funkci zapnutím světla nebo stisknutím tlačítka.</li>
                <li>Nasaďte kryt nebo dekorativní rámeček.</li>
              </ol>
              <h3>Montáž nového otvoru do zdi</h3>
              <p>Pokud koupelna nemá žádný větrací průduch, je nutné vyvrtat nový otvor průbojníkem nebo korunkou do exteriéru nebo do větrací šachty. Průměr korunky musí odpovídat průměru tubusu ventilátoru. Otvor vede mírně ven (spád 1–2 % směrem ven), aby dešťová voda nestékala dovnitř. Zvenčí instalujte větrací mřížku s klapkami. Tento typ práce zpravidla přesahuje možnosti domácí svépomoci a doporučujeme přivolat odborníka.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Spáru mezi tubusem ventilátoru a zdivem utěsněte akrylátovým nebo silikonovým tmelem, který je odolný vlhkosti. Volná mezera způsobuje průvan a hučení při větru.</div>
            </section>

            <section id="zpetna-klapka">
              <h2>Zpětná klapka a pravidelné čištění</h2>
              <h3>Zpětná klapka</h3>
              <p>Zpětná klapka je jednoduché mechanické zařízení – plastová nebo kovová klapka, která se otevírá tlakem vzduchu při chodu ventilátoru a sama se zavírá, jakmile ventilátor stojí. Brání:</p>
              <ul>
                <li>Zpětnému proudění studeného vzduchu ze šachty nebo z venku</li>
                <li>Průnikuzduchů a zápachů ze sousedních bytů (u sdílených šachet)</li>
                <li>Průvanu a hukotu při větrném počasí</li>
              </ul>
              <p>Kvalitní ventilátory mají zpětnou klapku integrovanou. U starých modelů nebo mřížek bez klapky si ji dokupte jako příslušenství a namontujte do tubusu.</p>
              <h3>Čištění a údržba</h3>
              <p>Ventilátor v koupelně se zanáší prachem, chlupy a vlhkými nánosy. Zanesen ventilátor funguje hlučněji a s nižším výkonem.</p>
              <ul>
                <li><strong>Každé 3 měsíce:</strong> Sejměte přední kryt (většinou drží na klipu), oprašte lopatky měkkým kartáčem nebo hadříkem, zkontrolujte čistotu zpětné klapky.</li>
                <li><strong>Jednou za rok:</strong> Kompletně vyjměte ventilátor a vyčistěte ho i zevnitř, zkontrolujte potrubí na přítomnost usazenin.</li>
                <li><strong>Nikdy</strong> nečistěte mokrým hadrem s vodou přímo na zapojeném ventilátoru – vždy nejprve vypněte jistič.</li>
              </ul>
              <p>Pokud váš ventilátor začal hlučet nebo vibrovat, ač byl dosud tichý, zkontrolujte, zda nemá uvolněné lopatky nebo zachycené vlasy v oběžném kole. Podobné problémy řeší i větší ventilační systémy – viz <Link href="/blog/udrzba-rekuperace-a-ventilace" style={{ color: "#2a6496", textDecoration: "underline" }}>údržba rekuperace a ventilace</Link>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pořiďte si ventilátor se snadno odnímatelným krytem a lopatkami, které jdou vyjmout bez nástrojů. Usnadní to pravidelnou údržbu natolik, že ji budete skutečně dělat.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jaký výkon ventilátoru potřebuji do koupelny?", a: "Základní pravidlo je 8–10násobná výměna vzduchu za hodinu. Objem místnosti (délka × šířka × výška) vynásobte 8–10 a dostanete minimální průtok v m³/h. Pro koupelnu 6 m² s výškou 2,5 m to vychází na cca 120–150 m³/h. Pro WC stačí menší výkony kolem 80–100 m³/h." },
                  { q: "Je nutné mít v koupelně ventilátor?", a: "Ano, česká norma ČSN EN 15665 a stavební zákon vyžadují větrání vlhkých místností bez přirozeného větrání oknem. Koupelna bez okna musí mít mechanické větrání zajišťující minimálně 50 m³/h pro sprchový kout nebo 90 m³/h pro vanu. Bez ventilace rychle vznikají plísně a poškozuje se omítka." },
                  { q: "Jaký je rozdíl mezi ventilátorem s vlhkostním senzorem a s časovačem?", a: "Ventilátor s vlhkostním senzorem (hygrostat) se zapne automaticky, jakmile vlhkost vzduchu překročí nastavenou hodnotu (obvykle 70–80 %), a vypne se, až vzduch oschne. Ventilátor s časovačem (timer) běží nastavenou dobu po vypnutí světla – typicky 2–30 minut. Hygrostatický ventilátor je energeticky efektivnější, časovač je levnější." },
                  { q: "Mohu ventilátor do koupelny zapojit sám?", a: "Výměnu starého ventilátoru za nový stejného typu na stávající kabeláž zvládne šikovný domácí kutil. Při jakékoli práci s elektřinou musíte vždy vypnout příslušný jistič a ověřit absenci napětí zkoušečkou. Pokud potřebujete přivést nové vedení nebo instalovat do vlhké zóny (0 nebo 1), práci by měl provést certifikovaný elektrikář." },
                  { q: "Co je zpětná klapka a proč je důležitá?", a: "Zpětná klapka je mechanická klapka v tubusu ventilátoru, která se otevírá pouze při provozu. Zabraňuje zpětnému proudění studeného vzduchu, průvanu a zápachu z potrubí zpět do koupelny, když ventilátor neběží. Většina kvalitních ventilátorů ji má vestavěnou, u levnějších modelů si ji ověřte." },
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
                <li><a href="#proc-vetrat">Proč větrání nestačí improvizovat</a></li>
                <li><a href="#typy-ventilators">Typy ventilátorů</a></li>
                <li><a href="#vypocet-vykonu">Výpočet výkonu</a></li>
                <li><a href="#ip-kryti">Krytí IP</a></li>
                <li><a href="#napojeni">Napojení na elektřinu</a></li>
                <li><a href="#montaz">Montáž krok za krokem</a></li>
                <li><a href="#zpetna-klapka">Zpětná klapka a čištění</a></li>
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
