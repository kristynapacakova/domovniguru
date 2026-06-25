import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plánování pracovny a home office – jak na to 2026",
  description: "Jak vybrat místnost na home office, zařídit ergonomii, úložný prostor, akustiku a osvětlení, a kdy pracovnu řešit už při rekonstrukci.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/planovani-pracovny-home-office" },
  openGraph: { title: "Plánování pracovny a home office – jak na to 2026", description: "Jak vybrat místnost na home office, zařídit ergonomii, úložný prostor, akustiku a osvětlení, a kdy pracovnu řešit už při rekonstrukci.", url: "https://www.domovniguru.cz/blog/planovani-pracovny-home-office", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-25T08:00:00Z", modifiedTime: "2026-06-25T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Pl%C3%A1nov%C3%A1n%C3%AD%20pracovny%20a%20home%20office%20%E2%80%93%20jak%20na%20to%202026&cat=blog", width: 1200, height: 630, alt: "Plánování pracovny a home office – jak na to 2026" }] },
  twitter: { card: "summary_large_image", title: "Plánování pracovny a home office – jak na to 2026", description: "Jak vybrat místnost na home office, zařídit ergonomii, úložný prostor, akustiku a osvětlení, a kdy pracovnu řešit už při rekonstrukci." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [
  { "@type": "Article", "@id": "https://www.domovniguru.cz/blog/planovani-pracovny-home-office#article", "headline": "Plánování pracovny a home office – jak na to 2026", "datePublished": "2026-06-25T08:00:00Z", "dateModified": "2026-06-25T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["pracovna doma", "home office", "ergonomie pracovního stolu", "akustika v bytě", "osvětlení pracovny", "vestavěná pracovna"] },
  { "@type": "BreadcrumbList", "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" },
    { "@type": "ListItem", "position": 3, "name": "Stěhování & rekonstrukce", "item": "https://www.domovniguru.cz/blog/kategorie/stehovani" },
    { "@type": "ListItem", "position": 4, "name": "Plánování pracovny a home office", "item": "https://www.domovniguru.cz/blog/planovani-pracovny-home-office" }
  ] },
  { "@type": "FAQPage", "mainEntity": [
    { "@type": "Question", "name": "Jak velký prostor potřebuju na pracovnu doma?", "acceptedAnswer": { "@type": "Answer", "text": "Minimální funkční koutek vyjde s plochou kolem 1,2 × 1,5 m – stůl, židle a prostor na odsunutí židle. Pokud chceš k tomu i úložné police nebo druhý monitor, počítej raději s 2 × 2 m. I menší niku nebo neproduktivní rohovou plochu lze proměnit ve funkční pracovní koutek." } },
    { "@type": "Question", "name": "Jaká je ideální výška stolu a monitoru pro práci na počítači?", "acceptedAnswer": { "@type": "Answer", "text": "Standardní výška stolu je 72–75 cm, u nastavitelných stolů se výška ladí podle výšky postavy tak, aby předloktí v sedu svíralo s pažemi pravý úhel. Horní okraj monitoru by měl být zhruba ve výšce očí nebo lehce pod ní, obrazovka ve vzdálenosti 50–70 cm od očí." } },
    { "@type": "Question", "name": "Jak oddělit pracovnu od ložnice nebo obýváku akusticky?", "acceptedAnswer": { "@type": "Answer", "text": "Pomáhá kombinace měkkých povrchů (koberec, závěsy, čalouněný nábytek), knihovna nebo skříň jako hmotná přepážka, a u sádrokartonových příček minerální izolace v dutině. U menších bytů funguje i jednoduchý paraván nebo posuvná stěna, která pracovní koutek opticky i zvukově odcloní." } },
    { "@type": "Question", "name": "Vyplatí se řešit pracovnu už při rekonstrukci, nebo stačí dodatečně?", "acceptedAnswer": { "@type": "Answer", "text": "Pokud plánuješ rekonstrukci, vyplatí se do projektu zahrnout aspoň elektrické rozvody (víc zásuvek, datový kabel, případně samostatný okruh) a uvažovat o pracovně už při dispozičním řešení. Dodatečně lze doplnit nábytek a osvětlení, ale rozvody pod omítkou se přidávají hůř a dráž." } },
    { "@type": "Question", "name": "Jaké osvětlení je nejlepší pro práci na počítači?", "acceptedAnswer": { "@type": "Answer", "text": "Nejlepší je kombinace přirozeného denního světla ze strany (ne čelně proti obrazovce ani za zády), neutrálně bílého stropního nebo nástěnného světla 4000 K a stolní lampy s plynulým stmíváním, která doplní světlo bez ostrých stínů a odlesků na monitoru." } },
  ] }
] };

const RELATED = [
  { title: "Jak vyřešit úložné prostory v malém bytě", href: "/blog/uloziste-v-malem-byte", read: "6 min" },
  { title: "Jak naplánovat osvětlení v celém bytě při rekonstrukci", href: "/blog/planovani-osvetleni-bytu", read: "7 min" },
  { title: "Jak vyřešit zvukovou izolaci mezi patry a sousedy", href: "/blog/zvukova-izolace-mezi-patry", read: "6 min" },
  { title: "Jak naplánovat rekonstrukci bytu – rozpočet a pořadí prací", href: "/blog/planovani-rekonstrukce-bytu", read: "8 min" },
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
              <span>Plánování pracovny a home office</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">📦 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Plánování pracovny a home office</h1>
              <p className="article-lead">Home office se z dočasného řešení stal trvalou součástí bydlení. Jenže pracovní koutek narychlo poskládaný na rohu jídelního stolu po pár měsících bolí na zádech, krku i v hlavě. Tady je přehled, jak pracovnu naplánovat tak, aby fungovala roky – od výběru místnosti přes ergonomii až po osvětlení a akustiku.</p>
              <div className="article-meta-row"><span>Aktualizováno: 25. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#vyber-mistnosti">Výběr vhodné místnosti nebo koutu</a></li>
                <li><a href="#ergonomie">Ergonomie – stůl, židle, monitor</a></li>
                <li><a href="#uloziste">Úložný prostor a kabelmanagement</a></li>
                <li><a href="#akustika">Akustika a oddělení od zbytku bytu</a></li>
                <li><a href="#osvetleni">Osvětlení pro práci na počítači</a></li>
                <li><a href="#rekonstrukce-vs-dodatecne">Rekonstrukce vs. dodatečné řešení</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="vyber-mistnosti">
              <h2>Výběr vhodné místnosti nebo koutu</h2>
              <p>Ne každý byt má volnou místnost na samostatnou pracovnu, a ani to není vždy nutné. Důležitější než metry čtvereční je kvalita místa – kam dopadá světlo, jak je to tam hlučné a jak snadno se po práci „odpojíš".</p>
              <h3>Světlo jako první kritérium</h3>
              <p>Ideální je místo u okna, ale stůl by neměl stát čelem ani přímo zády k oknu – v prvním případě tě osvětlení slepí a vytvoří odlesky na monitoru, ve druhém budeš mít siluetu v protisvětle na videohovorech. Nejlepší je postavit stůl bokem k oknu, takže světlo dopadá ze strany.</p>
              <h3>Klid a soustředění</h3>
              <p>Pokud máš na výběr z více pokojů, vyhni se místu hned u vstupních dveří, kuchyně nebo herního koutu dětí – odtud přichází nejvíc rušivých zvuků a pohybu. Naopak rohy bytu, niky nebo bývalé spíže/komory bývají překvapivě dobrá volba, protože jsou přirozeně odděleny od hlavního provozu domácnosti.</p>
              <h3>Oddělení od ložnice</h3>
              <p>Práce v ložnici je psychologicky problematická – mozek si časem propojí postel s notebookem a obrazovkami, což zhoršuje usínání. Pokud se pracovně v ložnici nevyhneš, snaž se aspoň opticky oddělit pracovní koutek paravánem, knihovnou nebo závěsem a po práci stůl „zavřít" – zaklopit notebook, schovat papíry, aby místnost znovu působila jako ložnice, ne kancelář.</p>
              <h3>Typické varianty umístění</h3>
              <ul>
                <li><strong>Samostatná místnost</strong> – ideální, pokud byt dovoluje obětovat celý pokoj jen pracovně</li>
                <li><strong>Nika nebo výklenek v obýváku</strong> – funguje dobře se zástěnou nebo regálem jako opticko-akustickou clonou</li>
                <li><strong>Koutek v ložnici</strong> – nutná nouzovka, pokud opravdu nejde jinak, řešit oddělením a večerním „uzavřením" stolu</li>
                <li><strong>Bývalá komora nebo spíž</strong> – malá, ale klidná a uzavíratelná, často s dveřmi, takže lze pracovnu zcela schovat</li>
                <li><strong>Chodba nebo předsíň</strong> – řešení do nouze, vhodné jen pro krátké úkoly, ne pro celodenní práci kvůli provozu a chladu od vstupních dveří</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud si vybíráš mezi víc možnostmi, vyzkoušej si práci na přenosném stole na daném místě aspoň jeden celý pracovní den – teprve v reálném provozu domácnosti se ukáže, jak je místo hlučné nebo rušené.</div>
            </section>

            <section id="ergonomie">
              <h2>Ergonomie – stůl, židle, monitor</h2>
              <p>Bolesti zad, krku a zápěstí po měsících práce z domova nejčastěji nepramení z přepracování, ale ze špatně nastavené ergonomie. Pár centimetrů ve výšce stolu nebo monitoru dělá za rok obrovský rozdíl.</p>
              <h3>Pracovní stůl</h3>
              <p>Standardní výška desky je 72–75 cm, ale ideální je výška odvozená od tvé postavy – v sedu by předloktí mělo svírat s pažemi přibližně 90°, lokty volně po stranách těla. Pokud řešíš pracovnu pro víc lidí v domácnosti nebo se měníš v profilu uživatelů, vyplatí se elektricky výškově nastavitelný stůl – umožní i střídání sedu a stoje.</p>
              <p>Hloubka desky by měla dovolit umístit monitor ve vzdálenosti 50–70 cm od očí a zároveň nechat prostor na klávesnici a myš tak, aby zápěstí nebyla zalomená.</p>
              <h3>Pracovní židle</h3>
              <ul>
                <li><strong>Nastavitelná výška sedáku</strong> – chodidla musí celou plochou stát na podlaze, kolena v pravém úhlu</li>
                <li><strong>Opora dolní části zad</strong> – bederní podpora kopírující přirozenou křivku páteře</li>
                <li><strong>Nastavitelné opěrky rukou</strong> – předloktí by mělo na opěrkách spočívat bez nutnosti zvedat ramena</li>
                <li><strong>Dostatečná šíře sedáku</strong> – mezi tělem a okrajem sedáku by měl být prostor na 2–3 prsty</li>
              </ul>
              <h3>Monitor a klávesnice</h3>
              <p>Horní okraj monitoru by měl být zhruba ve výšce očí nebo lehce pod ní – při práci na notebooku to často znamená dokoupit podstavec nebo externí monitor, protože vestavěná obrazovka notebooku nutí krk klesat dolů. Externí klávesnice a myš jsou prakticky povinná výbava, pokud pracuješ na notebooku víc než pár hodin denně.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Jednoduché pravidlo „90-90-90" – kotníky, kolena i lokty by měly v sedu svírat zhruba pravý úhel. Pokud něco z toho neplatí, uprav výšku stolu, židle nebo podstavec monitoru.</div>
            </section>

            <section id="uloziste">
              <h2>Úložný prostor a kabelmanagement</h2>
              <p>Pracovní stůl plný kabelů, papírů a nabíječek snižuje produktivitu i chuť si k němu sednout. Promyšlené úložiště a skryté vedení kabelů patří k nejpodceňovanějším detailům domácí pracovny.</p>
              <h3>Co potřebuješ uložit</h3>
              <ul>
                <li>Dokumenty a složky – ideálně v zásuvkách nebo na polici v dosahu ruky bez nutnosti vstávat</li>
                <li>Drobná elektronika – nabíječky, kabely, externí disky, sluchátka</li>
                <li>Kancelářské potřeby – psací potřeby, sponky, poznámkové bloky</li>
                <li>Tiskárna a periferie – pokud nejsou přímo na stole, počítej s policí nebo nízkou skříňkou v dosahu</li>
              </ul>
              <h3>Kabelmanagement</h3>
              <p>Svazek kabelů popsaný a stažený kabelovými organizéry nebo trubicí pod stolem výrazně zklidní vzhled i úklid. Osvědčené pomůcky:</p>
              <ul>
                <li><strong>Kabelový žlab nebo trubice</strong> připevněná pod desku stolu – schová napájecí kabely a prodlužky</li>
                <li><strong>Zásuvková lišta s USB porty</strong> přímo na desce nebo přilepená pod stůl</li>
                <li><strong>Otvor v desce stolu</strong> (průchodka) pro vedení kabelů k monitoru a periferiím shora dolů</li>
                <li><strong>Bezdrátové nabíjení a periferie</strong> – omezí počet kabelů na minimum</li>
              </ul>
              <p>Pokud řešíš úložiště v menším bytě obecně, inspiraci najdeš v článku, jak <Link href="/blog/uloziste-v-malem-byte" style={{ color: "#2a6496", textDecoration: "underline" }}>vyřešit úložné prostory v malém bytě</Link> – řada principů (vertikální úložiště, multifunkční nábytek) platí i pro pracovnu.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud pracovna sousedí s obytným prostorem, zvaž stůl se zásuvkami nebo skříňku se dveřmi, kterou na konci dne jednoduše zavřeš – chaos na stole tak zmizí z dohledu během pár vteřin.</div>
            </section>

            <section id="akustika">
              <h2>Akustika a zvukové oddělení od zbytku bytu</h2>
              <p>Telefonáty, videohovory a soustředěná práce vyžadují jiné akustické prostředí než zbytek domácnosti. Pokud pracovna sousedí s obývákem, kuchyní nebo dětským pokojem, zvuk se přenáší oběma směry a rušíte se navzájem.</p>
              <h3>Měkké povrchy tlumí odrazy</h3>
              <ul>
                <li><strong>Koberec nebo kobereček</strong> pod stolem a židlí – tlumí odraz zvuku od podlahy a omezuje hluk od posunované židle</li>
                <li><strong>Závěsy nebo látkové rolety</strong> na oknech – tlumí odraz od skla</li>
                <li><strong>Čalouněný nebo textilní nábytek</strong> v okolí – polstrovaná židle, sedák, textilní nástěnka</li>
                <li><strong>Knihovna s knihami</strong> na stěně sousedící s hlučnějším prostorem – funguje jako jednoduchá akustická i hmotná bariéra</li>
              </ul>
              <h3>Stavební oddělení</h3>
              <p>Pokud plánuješ pracovnu oddělit novou příčkou, minerální izolace v dutině sádrokartonové konstrukce výrazně omezí přenos zvuku do sousedních prostor – postup najdeš v článku o tom, jak <Link href="/blog/sadrokarton-pricka-postup" style={{ color: "#2a6496", textDecoration: "underline" }}>postavit příčku ze sádrokartonu</Link>. Obecnější přehled, jak řešit přenos hluku mezi prostory v bytě, nabízí článek o <Link href="/blog/zvukova-izolace-mezi-patry" style={{ color: "#2a6496", textDecoration: "underline" }}>zvukové izolaci mezi patry a sousedy</Link>.</p>
              <h3>Levné a rychlé úpravy</h3>
              <p>Pokud stavební úpravy nepřipadají v úvahu, pomůže i jednoduchý paraván, závěsová stěna na liště od stropu, nebo akustické panely na stěnu za zády – dnes dostupné i v dekorativním provedení, které funguje zároveň jako obraz.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Na videohovory hodně pomáhá i obyčejný polštář nebo deka položená za monitorem na stole – odrazy zvuku z tvrdé desky stolu jsou na mikrofonu slyšet víc, než by se zdálo.</div>
            </section>

            <section id="osvetleni">
              <h2>Osvětlení pro práci na počítači</h2>
              <p>Únava očí po celodenní práci na počítači často nesouvisí jen s obrazovkou, ale se špatně nastaveným osvětlením v místnosti. Cílem je rovnoměrné světlo bez ostrých kontrastů a odlesků na displeji.</p>
              <h3>Denní světlo</h3>
              <p>Nejkvalitnější je rozptýlené denní světlo dopadající ze strany. Přímé sluneční světlo padající na monitor čelně způsobuje odlesky, žaluzie nebo látková roleta pomůžou regulovat intenzitu v průběhu dne.</p>
              <h3>Hlavní (stropní nebo nástěnné) osvětlení</h3>
              <p>Pro práci je vhodná neutrálně bílá teplota světla okolo <strong>4000 K</strong> – teplejší 2700–3000 K působí příjemně, ale večer spíš unavuje a snižuje koncentraci, chladnější nad 5000 K může působit až rušivě v malém bytovém prostoru. Důležitý je i index podání barev (CRI) nad 80, ideálně 90+, zvlášť pokud pracuješ s grafikou nebo barvami.</p>
              <h3>Stolní lampa</h3>
              <p>Doplňkové stolní světlo by mělo dosvětlovat plochu stolu bez vrhání stínu na klávesnici (u praváků světlo z levé strany, u leváků naopak). Stmívatelná lampa s nastavitelnou teplotou světla je flexibilnější než lampa s jedním fixním nastavením.</p>
              <p>Komplexní přístup k osvětlení celého bytu, včetně řešení pro pracovní koutky, najdeš v článku o tom, jak <Link href="/blog/planovani-osvetleni-bytu" style={{ color: "#2a6496", textDecoration: "underline" }}>naplánovat osvětlení v celém bytě při rekonstrukci</Link>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pravidlo 20-20-20 pro odpočinek očí – každých 20 minut se na 20 sekund podívej na něco vzdáleného aspoň 20 stop (cca 6 metrů). Funguje skvěle v kombinaci s pracovním koutkem u okna.</div>
            </section>

            <section id="rekonstrukce-vs-dodatecne">
              <h2>Kdy zařadit pracovnu do rekonstrukce a kdy řešit dodatečně</h2>
              <p>Pokud byt teprve rekonstruuješ, vyplatí se pracovnu zahrnout do plánu už v fázi dispozičního řešení a rozvodů – řada věcí se po dokončení podlah a omítek dodělává hůř a dráž.</p>
              <h3>Co řešit už při rekonstrukci</h3>
              <ul>
                <li><strong>Elektrické rozvody</strong> – dostatek zásuvek u plánovaného místa stolu (počítač, monitor, lampa, nabíječky), ideálně i samostatný okruh pro citlivější elektroniku</li>
                <li><strong>Datové rozvody</strong> – kabel LAN do zdi je spolehlivější než Wi-Fi, zvlášť ve starších domech s tlustými zdmi</li>
                <li><strong>Dispozice a příčky</strong> – pokud plánuješ pracovnu oddělit novou příčkou nebo nikou, je to nejlevnější fáze na úpravu rozvodů a izolace</li>
                <li><strong>Podlahová krytina</strong> – tvrdší krytina (vinyl, laminát) usnadní pojezd kancelářské židle oproti měkkému koberci, který se prokolečkuje</li>
                <li><strong>Osvětlení ve stropě</strong> – předpřipravené body pro stropní svítidlo nebo bodovky přesně nad plochou stolu</li>
              </ul>
              <h3>Co lze doplnit kdykoliv dodatečně</h3>
              <ul>
                <li>Nábytek – stůl, židle, regály, organizéry</li>
                <li>Stolní a doplňkové osvětlení</li>
                <li>Akustické úpravy textilem, koberci, panely</li>
                <li>Kabelové lišty a powerbanky se zásuvkami napojené na stávající obvod</li>
              </ul>
              <p>Celkový přehled, jak si naplánovat rekonstrukci bytu krok za krokem včetně rozpočtu a pořadí prací, najdeš v článku <Link href="/blog/planovani-rekonstrukce-bytu" style={{ color: "#2a6496", textDecoration: "underline" }}>jak naplánovat rekonstrukci bytu</Link>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> I když pracovnu řešíš až dodatečně bez stavebních úprav, vyplatí se aspoň přidat zásuvkovou lištu s jistícím prvkem (přepěťová ochrana) – ochrání drahou elektroniku a sníží počet kabelů táhnoucích se přes podlahu.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jak velký prostor potřebuju na pracovnu doma?", a: "Minimální funkční koutek vyjde s plochou kolem 1,2 × 1,5 m – stůl, židle a prostor na odsunutí židle. Pokud chceš k tomu i úložné police nebo druhý monitor, počítej raději s 2 × 2 m. I menší niku nebo neproduktivní rohovou plochu lze proměnit ve funkční pracovní koutek." },
                  { q: "Jaká je ideální výška stolu a monitoru pro práci na počítači?", a: "Standardní výška stolu je 72–75 cm, u nastavitelných stolů se výška ladí podle výšky postavy tak, aby předloktí v sedu svíralo s pažemi pravý úhel. Horní okraj monitoru by měl být zhruba ve výšce očí nebo lehce pod ní, obrazovka ve vzdálenosti 50–70 cm od očí." },
                  { q: "Jak oddělit pracovnu od ložnice nebo obýváku akusticky?", a: "Pomáhá kombinace měkkých povrchů (koberec, závěsy, čalouněný nábytek), knihovna nebo skříň jako hmotná přepážka, a u sádrokartonových příček minerální izolace v dutině. U menších bytů funguje i jednoduchý paraván nebo posuvná stěna, která pracovní koutek opticky i zvukově odcloní." },
                  { q: "Vyplatí se řešit pracovnu už při rekonstrukci, nebo stačí dodatečně?", a: "Pokud plánuješ rekonstrukci, vyplatí se do projektu zahrnout aspoň elektrické rozvody (víc zásuvek, datový kabel, případně samostatný okruh) a uvažovat o pracovně už při dispozičním řešení. Dodatečně lze doplnit nábytek a osvětlení, ale rozvody pod omítkou se přidávají hůř a dráž." },
                  { q: "Jaké osvětlení je nejlepší pro práci na počítači?", a: "Nejlepší je kombinace přirozeného denního světla ze strany (ne čelně proti obrazovce ani za zády), neutrálně bílého stropního nebo nástěnného světla 4000 K a stolní lampy s plynulým stmíváním, která doplní světlo bez ostrých stínů a odlesků na monitoru." },
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
                <li><a href="#vyber-mistnosti">Výběr místnosti</a></li>
                <li><a href="#ergonomie">Ergonomie</a></li>
                <li><a href="#uloziste">Úložiště a kabely</a></li>
                <li><a href="#akustika">Akustika</a></li>
                <li><a href="#osvetleni">Osvětlení</a></li>
                <li><a href="#rekonstrukce-vs-dodatecne">Rekonstrukce vs. dodatečně</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/stehovani" className="sidebar-cat-link">📦 Stěhování & rekonstrukce<span>29 článků →</span></Link>
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
