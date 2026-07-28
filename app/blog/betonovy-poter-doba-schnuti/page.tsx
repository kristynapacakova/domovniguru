import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Betonový potěr: jak dlouho schne a kdy pokládat podlahu",
  description: "Jak dlouho schne cementový a anhydritový potěr, jak měřit zbytkovou vlhkost metodou CM a kdy můžete pokládat dlažbu, vinyl, plovoucí i dřevěnou podlahu. Praktický návod.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/betonovy-poter-doba-schnuti" },
  openGraph: { title: "Betonový potěr: jak dlouho schne a kdy pokládat podlahu", description: "Jak dlouho schne cementový a anhydritový potěr, jak měřit zbytkovou vlhkost metodou CM a kdy můžete pokládat dlažbu, vinyl, plovoucí i dřevěnou podlahu. Praktický návod.", url: "https://www.domovniguru.cz/blog/betonovy-poter-doba-schnuti", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-07-21T08:00:00Z", modifiedTime: "2026-07-21T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Betonov%C3%BD%20pot%C4%9Br%3A%20jak%20dlouho%20schne%20a%20kdy%20pokl%C3%A1dat%20podlahu&cat=blog", width: 1200, height: 630, alt: "Betonový potěr: jak dlouho schne a kdy pokládat podlahu" }] },
  twitter: { card: "summary_large_image", title: "Betonový potěr: jak dlouho schne a kdy pokládat podlahu", description: "Jak dlouho schne cementový a anhydritový potěr, jak měřit zbytkovou vlhkost a kdy pokládat podlahu." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/betonovy-poter-doba-schnuti#article", "headline": "Betonový potěr: jak dlouho schne a kdy pokládat podlahu", "datePublished": "2026-07-21T08:00:00Z", "dateModified": "2026-07-21T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["doba schnutí potěru", "betonový potěr schnutí", "anhydritový potěr", "cementový potěr", "zbytková vlhkost potěru", "měření vlhkosti CM", "kdy pokládat podlahu", "schnutí betonu"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Stěhování & rekonstrukce", "item": "https://www.domovniguru.cz/blog/kategorie/stehovani" }, { "@type": "ListItem", "position": 4, "name": "Betonový potěr: jak dlouho schne", "item": "https://www.domovniguru.cz/blog/betonovy-poter-doba-schnuti" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jak dlouho schne betonový potěr před pokládkou podlahy?", "acceptedAnswer": { "@type": "Answer", "text": "Orientační pravidlo pro cementový potěr je přibližně 1 cm tloušťky za týden, ale jen do 4 cm. Silnější vrstvy schnou výrazně pomaleji – u 6cm potěru počítejte nikoli s 6, ale spíše s 10 a více týdny. Běžný 5cm cementový potěr proto schne zhruba 6–8 týdnů. Anhydritový (síranový) potěr schne za ideálních podmínek rychleji, ale i tak potřebuje týdny. Číslo z pravidla je jen odhad – před pokládkou vždy změřte zbytkovou vlhkost." } }, { "@type": "Question", "name": "Jak poznám, že je potěr suchý?", "acceptedAnswer": { "@type": "Answer", "text": "Vizuální dojem klame – potěr může být na povrchu suchý a světlý, ale uvnitř stále vlhký. Jediný spolehlivý způsob je změřit zbytkovou vlhkost. Profesionálním standardem je karbidová (CM) metoda, kdy se vzorek rozdrtí, smíchá s karbidem vápníku a z tlaku vzniklého plynu se odečte vlhkost v procentech. Orientačně napoví i fóliová zkouška: na potěr položte kus PE fólie, přelepte okraje a po 24 hodinách zkontrolujte, zda se pod ní srazila voda." } }, { "@type": "Question", "name": "Jaká je zbytková vlhkost potěru pro dlažbu, vinyl a dřevo?", "acceptedAnswer": { "@type": "Answer", "text": "Mezní hodnoty zbytkové vlhkosti měřené CM metodou se liší podle krytiny a typu potěru. U cementového potěru: keramická dlažba do 2 %, vinyl a PVC do 2 %, plovoucí laminát do 2 %, dřevo a parkety do 1,8 %. U podlahového topení jsou limity přísnější (cementový cca 1,8 %, u dřeva 1,5 %). Anhydritový potěr musí být sušší – běžně do 0,5 %, s podlahovým topením do 0,3 %. Vždy se řiďte pokyny výrobce krytiny." } }, { "@type": "Question", "name": "Dá se schnutí potěru urychlit?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, ale opatrně. Prvních 3–7 dní potěr naopak potřebuje vlhko, aby správně vyzrál (hydratoval) – v tomto období ho nevysoušejte. Až poté můžete schnutí podpořit mírným větráním, stavebním vysoušečem (kondenzačním odvlhčovačem) nebo šetrným temperováním podlahového topení podle náběhového protokolu výrobce. Nikdy nepoužívejte přímé horkovzdušné dělo na jedno místo – rychlé vysušení povrchu způsobí trhliny a zakřivení desky." } }, { "@type": "Question", "name": "Co se stane, když položím podlahu na nevyschlý potěr?", "acceptedAnswer": { "@type": "Answer", "text": "Uvězněná vlhkost nemá kam odejít a způsobí vážné škody. U dřeva a laminátu dochází k bobtnání, zvlnění a rozestupu spár. Pod paronepropustným vinylem nebo PVC se drží vlhkost a roste plíseň, lepidlo se uvolňuje. U lepené dlažby může docházet k odlupování a výkvětům solí ve spárách. Oprava znamená obvykle demontáž celé podlahy. Týden až dva čekání navíc je vždy levnější než předělávka." } }] }] };

const RELATED = [
  { title: "Jak pokládat vinylovou podlahu", href: "/blog/kladeni-vinyl-podlahy", read: "6 min" },
  { title: "Plovoucí podlaha vs. dlažba", href: "/blog/plovouci-podlaha-vs-dlazba", read: "6 min" },
  { title: "Kročejová a tepelná izolace podlahy", href: "/blog/krocejova-a-tepelna-izolace-podlahy", read: "6 min" },
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
              <span>Betonový potěr: jak dlouho schne</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏠 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Betonový potěr: jak dlouho schne</h1>
              <p className="article-lead">Nový potěr vypadá po pár dnech suchý a láká k rychlé pokládce podlahy. Jenže povrch klame – uvnitř drží vlhkost ještě týdny. Ukvapená pokládka je jednou z nejčastějších a nejdražších chyb rekonstrukce. Tady je přehled, jak dlouho potěr skutečně schne, jak to poznat a kdy je bezpečné pokládat dlažbu, vinyl i dřevo.</p>
              <div className="article-meta-row"><span>Aktualizováno: 21. července 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/betonovy-poter-doba-schnuti" title="Betonový potěr: jak dlouho schne a kdy pokládat podlahu" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 195" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="195" fill="#f4f0ec"/>
                {[
                  { x:20, name:"Cementový potěr", sub:"CT", icon:"🧱", desc:"1 cm / týden do 4 cm\npoté výrazně pomaleji\nrobustní, univerzální", color:"#8a7050" },
                  { x:215, name:"Anhydritový potěr", sub:"CA", icon:"💧", desc:"lité, rovné plochy\nrychlejší tvrdnutí\ncitlivý na vlhko", color:"#4a90d9" },
                  { x:410, name:"Zbytková vlhkost", sub:"metoda CM", icon:"📏", desc:"cement: pod 2 %\nanhydrit: pod 0,5 %\ntopení = přísnější", color:"#5a9e6f" },
                  { x:590, name:"Kdy pokládat", sub:"podle krytiny", icon:"✅", desc:"dlažba nejdřív\nvinyl s parozábranou\ndřevo až úplně suché", color:"#f59e0b" },
                ].map(({x, name, sub, icon, desc, color}) => (
                  <g key={x} transform={`translate(${x}, 15)`}>
                    <rect x="0" y="0" width="165" height="160" rx="8" fill="#fff" stroke={color} strokeWidth="1" opacity="0.9"/>
                    <rect x="0" y="0" width="165" height="5" rx="4" fill={color} opacity="0.4"/>
                    <text x="82" y="35" textAnchor="middle" fontSize="22">{icon}</text>
                    <text x="82" y="58" textAnchor="middle" fontSize="10" fill={color} fontWeight="700">{name}</text>
                    <text x="82" y="72" textAnchor="middle" fontSize="8" fill="#8a8078">{sub}</text>
                    <line x1="15" y1="80" x2="150" y2="80" stroke={color} strokeWidth="0.5" opacity="0.3"/>
                    {desc.split('\n').map((line, i) => (
                      <text key={i} x="82" y={96+i*16} textAnchor="middle" fontSize="8.5" fill="#4a4a40">{line}</text>
                    ))}
                  </g>
                ))}
                <rect y="178" width="760" height="17" fill="#e8e0d4" opacity="0.5"/>
                <text x="380" y="190" textAnchor="middle" fontSize="8" fill="#8a7050" fontWeight="600" letterSpacing="0.06em">🏠 PRAVIDLO: 1 CM ZA TÝDEN DO 4 CM · POTÉ VÝRAZNĚ POMALEJI · VŽDY MĚŘTE ZBYTKOVOU VLHKOST</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#typy">Cementový vs. anhydritový potěr</a></li>
                <li><a href="#jak-dlouho">Jak dlouho potěr schne</a></li>
                <li><a href="#mereni">Měření zbytkové vlhkosti (metoda CM)</a></li>
                <li><a href="#kdy-pokladat">Kdy pokládat kterou podlahu</a></li>
                <li><a href="#urychleni">Jak schnutí bezpečně urychlit</a></li>
                <li><a href="#rizika">Rizika ukvapené pokládky</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="typy">
              <h2>Cementový vs. anhydritový potěr</h2>
              <p>Doba schnutí i mezní vlhkost před pokládkou závisí především na tom, jaký potěr máte. V českých domácnostech se setkáte hlavně se dvěma druhy a každý se chová jinak.</p>
              <h3>Cementový potěr (CT)</h3>
              <p>Klasika – směs cementu, písku a vody. Je pevný, univerzální, snese vlhko i venkovní prostředí a je levnější. Nevýhodou je pomalejší schnutí a to, že se při tvrdnutí smršťuje, takže je náchylnější k trhlinám a je potřeba dilatací. Zbytkovou vlhkost snáší krytina relativně velkoryse (do cca 2 %).</p>
              <h3>Anhydritový potěr (CA, síranový)</h3>
              <p>Litá samonivelační směs na bázi síranu vápenatého. Vytváří velmi rovné plochy bez nutnosti hlazení, málo se smršťuje a hodí se pod podlahové topení, protože dobře vede teplo. Má ale dvě úskalí: nesnáší trvalou vlhkost (do koupelen a exteriéru nepatří) a před pokládkou musí být výrazně sušší – zbytková vlhkost jen do 0,5 %. Navíc se na povrchu tvoří slabá vrstvička (šlem), kterou je nutné před pokládkou přebrousit.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Nevíte, jaký potěr máte? Anhydrit bývá hladký, litý „na jedno lití" a světle šedý až nažloutlý; cementový potěr je hrubší, často stahovaný latí a tmavší. V pochybnostech se zeptejte firmy, která ho pokládala – typ potěru rozhoduje o tom, jakou vlhkost smíte tolerovat.</div>
            </section>

            <section id="jak-dlouho">
              <h2>Jak dlouho potěr schne</h2>
              <p>Nejrozšířenější orientační pravidlo zní: <strong>cementový potěr schne přibližně 1 cm tloušťky za týden, ale jen do 4 cm.</strong> Nad tuto hranici schnutí prudce zpomaluje, protože voda se z hloubky odpařuje mnohem obtížněji.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Tloušťka potěru</th><th>Orientační doba (cement)</th><th>Poznámka</th></tr></thead>
                  <tbody>
                    <tr><td>4 cm</td><td>cca 4 týdny</td><td>Pravidlo 1 cm/týden platí přímo</td></tr>
                    <tr><td>5 cm</td><td>cca 6–8 týdnů</td><td>Nad 4 cm už schne pomaleji</td></tr>
                    <tr><td>6 cm</td><td>cca 10+ týdnů</td><td>Neplatí 6 týdnů – výrazně déle</td></tr>
                    <tr><td>Anhydrit 4–5 cm</td><td>cca 4–6 týdnů</td><td>Za ideálních podmínek rychleji</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Čísla v tabulce platí za „laboratorních" podmínek: teplota kolem 20 °C, relativní vlhkost vzduchu do 65 %, mírné větrání. Chladná, vlhká nebo nevětraná místnost schnutí prodlouží klidně o polovinu. Naopak léto s otevřenými okny proces urychlí. Přesnou <strong>dobu schnutí spočítáte v naší <Link href="/kalkulacky/doba-schnuti-poteru" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačce doby schnutí potěru</Link></strong>, která zohlední tloušťku i typ směsi.</p>
              <div className="article-tip"><strong>⚠️ Pozor:</strong> Pravidlo 1 cm/týden je jen odhad, kdy má smysl začít měřit – ne povolení k pokládce. Rozhodující je vždy naměřená zbytková vlhkost, ne uplynulý počet týdnů z kalendáře.</div>
            </section>

            <section id="mereni">
              <h2>Měření zbytkové vlhkosti (metoda CM)</h2>
              <p>Jediný spolehlivý způsob, jak zjistit, zda je potěr připraven, je změřit zbytkovou vlhkost. Povrchová „suchost" na dotek nic nevypovídá o stavu uvnitř desky.</p>
              <h3>Karbidová (CM) metoda – profesionální standard</h3>
              <p>Podlahářské firmy používají takzvaný CM přístroj (karbidový vlhkoměr). Z hloubky potěru se odebere vzorek, rozdrtí, zváží a v tlakové nádobě smíchá s ampulí karbidu vápníku. Vlhkost reaguje na plyn (acetylen) a z naměřeného tlaku se odečte zbytková vlhkost v hmotnostních procentech (CM %). Metoda je destruktivní (udělá se malý otvor), ale je to hodnota, na kterou se odvolávají výrobci krytin i reklamační protokoly.</p>
              <h3>Orientační metody pro laika</h3>
              <ul>
                <li><strong>Fóliová zkouška:</strong> na potěr položte kus PE fólie cca 50×50 cm, okraje přelepte páskou a nechte 24 hodin. Pokud se pod fólií srazí kapky nebo potěr ztmavne, je stále vlhký. Suchá fólie neznamená jistotu, ale mokrá je jasný signál „ne".</li>
                <li><strong>Odporový/kapacitní vlhkoměr:</strong> levné příruční přístroje z hobbymarketu měří jen povrchovou vrstvu a jsou pouze orientační – pro rozhodnutí o pokládce nestačí.</li>
                <li><strong>Nechte změřit odborníka:</strong> u dražších krytin (parkety, velkoformátová dlažba, podlahové topení) se vyplatí zaplatit profesionální CM měření. Je to pojistka pro případnou reklamaci.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Mezní hodnoty se liší podle krytiny a typu potěru. Než začnete měřit, najděte si v technickém listu své podlahy konkrétní požadovanou hodnotu CM % – právě tu musíte podkročit, ne obecné „do 2 %".</div>
            </section>

            <section id="kdy-pokladat">
              <h2>Kdy pokládat kterou podlahu</h2>
              <p>Různé krytiny snesou různou vlhkost podkladu. Obecně platí: čím je krytina paronepropustnější a citlivější (dřevo, vinyl), tím sušší potěr potřebuje.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Krytina</th><th>Cementový potěr</th><th>Anhydritový potěr</th></tr></thead>
                  <tbody>
                    <tr><td>Keramická dlažba</td><td>do 2,0 %</td><td>do 0,5 %</td></tr>
                    <tr><td>Vinyl / PVC</td><td>do 2,0 %</td><td>do 0,5 %</td></tr>
                    <tr><td>Laminát (plovoucí)</td><td>do 2,0 %</td><td>do 0,5 %</td></tr>
                    <tr><td>Dřevo / parkety</td><td>do 1,8 %</td><td>do 0,3 %</td></tr>
                    <tr><td>S podlahovým topením</td><td>do 1,8 %</td><td>do 0,3 %</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Dlažba je nejtolerantnější – lepí se cementovým lepidlem, které samo obsahuje vodu, takže drobná vlhkost podkladu tolik nevadí. Naopak <strong>dřevo a parkety jsou nejnáročnější</strong> a vyžadují nejsušší podklad. Vinyl a PVC sice snesou vlhkost podobnou dlažbě, ale protože jsou paronepropustné, uzavřou zbývající vlhkost pod sebou – proto se na betonový potěr pod ně dává parozábrana (PE fólie 0,2 mm). Podrobný postup najdete v článku <Link href="/blog/kladeni-vinyl-podlahy" style={{ color: "#2a6496", textDecoration: "underline" }}>jak pokládat vinylovou podlahu</Link>. Jestli se vůbec rozhodnout pro plovoucí krytinu, nebo dlažbu, porovnává text <Link href="/blog/plovouci-podlaha-vs-dlazba" style={{ color: "#2a6496", textDecoration: "underline" }}>plovoucí podlaha vs. dlažba</Link>.</p>
            </section>

            <section id="urychleni">
              <h2>Jak schnutí bezpečně urychlit</h2>
              <p>Schnutí lze podpořit, ale jen ve správný čas a šetrně. Násilné vysoušení nadělá víc škody než užitku.</p>
              <ul>
                <li><strong>Prvních 3–7 dní neschněte</strong> – čerstvý potěr musí nejdřív vyzrát (hydratovat). V tomto období ho naopak chraňte před rychlým vysycháním, případně kropte nebo zakryjte fólií podle pokynů dodavatele. Předčasné vysušení povrchu způsobí trhliny.</li>
                <li><strong>Poté mírně větrejte</strong> – po vyzrání pomáhá pravidelné krátké intenzivní větrání, které odvádí vlhký vzduch. Trvalý průvan přes celý den ale může vrchní vrstvu vysušit nerovnoměrně.</li>
                <li><strong>Stavební vysoušeč (odvlhčovač)</strong> – kondenzační vysoušeč v uzavřené místnosti odčerpává vlhkost ze vzduchu a zrychlí schnutí. Kombinujte s mírným temperováním, ne s přímým foukáním na potěr.</li>
                <li><strong>Náběh podlahového topení</strong> – u potěru s topením existuje takzvaný funkční a náběhový (vysoušecí) protokol: teplota se zvyšuje postupně po několika stupních denně. Nikdy nespouštějte topení naplno hned – rychlé zahřátí vlhkého potěru vede k trhlinám.</li>
              </ul>
              <div className="article-tip"><strong>⚠️ Pozor:</strong> Horkovzdušné dělo mířené na jedno místo je nejčastější chyba. Povrch vyschne a smrští se rychleji než jádro, deska se zkroutí do „mističky" a popraská. Vysoušejte celý prostor rovnoměrně, ne bodově.</div>
            </section>

            <section id="rizika">
              <h2>Rizika ukvapené pokládky</h2>
              <p>Nejdražší chybou je položit podlahu na potěr, který ještě nedosáhl potřebné zbytkové vlhkosti. Uvězněná voda nemá kam odejít a projeví se – často až za několik měsíců, kdy je oprava nejbolestivější.</p>
              <ul>
                <li><strong>Bobtnání a vlnění dřeva a laminátu</strong> – nejcitlivější krytina nasaje vlhkost, rozestoupí se spáry, desky se zvednou a vrzají.</li>
                <li><strong>Plíseň pod vinylem a PVC</strong> – paronepropustná krytina drží vlhkost pod sebou, vzniká plíseň a nezdravé mikroklima; lepidlo se uvolňuje a podlaha „plave".</li>
                <li><strong>Výkvěty a odchlípnutí dlažby</strong> – vlhkost prostupuje spárami, tvoří bílé solné výkvěty, u lepené dlažby může docházet k dutinám a odskakování.</li>
                <li><strong>Poškození podlahového topení</strong> – rychlé natopení vlhkého potěru trhá desku i s uloženými trubkami.</li>
              </ul>
              <p>Ať už pokládáte cokoliv, správná skladba podlahy začíná už pod potěrem – u novostaveb a rekonstrukcí na to navazuje <Link href="/blog/krocejova-a-tepelna-izolace-podlahy" style={{ color: "#2a6496", textDecoration: "underline" }}>kročejová a tepelná izolace podlahy</Link>, která ovlivní i chování celé skladby.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Reklamace zvlněné podlahy skoro vždy padá na majitele nebo podlaháře, který nezměřil vlhkost. Nechte si po CM měření vystavit protokol s datem a hodnotou – je to jediný důkaz, že podklad byl v době pokládky v pořádku.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jak dlouho schne betonový potěr před pokládkou podlahy?", a: "Orientační pravidlo pro cementový potěr je přibližně 1 cm tloušťky za týden, ale jen do 4 cm. Silnější vrstvy schnou výrazně pomaleji – u 6cm potěru počítejte nikoli s 6, ale spíše s 10 a více týdny. Běžný 5cm cementový potěr proto schne zhruba 6–8 týdnů. Anhydritový (síranový) potěr schne za ideálních podmínek rychleji, ale i tak potřebuje týdny. Číslo z pravidla je jen odhad – před pokládkou vždy změřte zbytkovou vlhkost." },
                  { q: "Jak poznám, že je potěr suchý?", a: "Vizuální dojem klame – potěr může být na povrchu suchý a světlý, ale uvnitř stále vlhký. Jediný spolehlivý způsob je změřit zbytkovou vlhkost. Profesionálním standardem je karbidová (CM) metoda, kdy se vzorek rozdrtí, smíchá s karbidem vápníku a z tlaku vzniklého plynu se odečte vlhkost v procentech. Orientačně napoví i fóliová zkouška: na potěr položte kus PE fólie, přelepte okraje a po 24 hodinách zkontrolujte, zda se pod ní srazila voda." },
                  { q: "Jaká je zbytková vlhkost potěru pro dlažbu, vinyl a dřevo?", a: "Mezní hodnoty zbytkové vlhkosti měřené CM metodou se liší podle krytiny a typu potěru. U cementového potěru: keramická dlažba do 2 %, vinyl a PVC do 2 %, plovoucí laminát do 2 %, dřevo a parkety do 1,8 %. U podlahového topení jsou limity přísnější (cementový cca 1,8 %, u dřeva 1,5 %). Anhydritový potěr musí být sušší – běžně do 0,5 %, s podlahovým topením do 0,3 %. Vždy se řiďte pokyny výrobce krytiny." },
                  { q: "Dá se schnutí potěru urychlit?", a: "Ano, ale opatrně. Prvních 3–7 dní potěr naopak potřebuje vlhko, aby správně vyzrál (hydratoval) – v tomto období ho nevysoušejte. Až poté můžete schnutí podpořit mírným větráním, stavebním vysoušečem (kondenzačním odvlhčovačem) nebo šetrným temperováním podlahového topení podle náběhového protokolu výrobce. Nikdy nepoužívejte přímé horkovzdušné dělo na jedno místo – rychlé vysušení povrchu způsobí trhliny a zakřivení desky." },
                  { q: "Co se stane, když položím podlahu na nevyschlý potěr?", a: "Uvězněná vlhkost nemá kam odejít a způsobí vážné škody. U dřeva a laminátu dochází k bobtnání, zvlnění a rozestupu spár. Pod paronepropustným vinylem nebo PVC se drží vlhkost a roste plíseň, lepidlo se uvolňuje. U lepené dlažby může docházet k odlupování a výkvětům solí ve spárách. Oprava znamená obvykle demontáž celé podlahy. Týden až dva čekání navíc je vždy levnější než předělávka." },
                ].map(({ q, a }) => (
                  <details key={q} className="faq-item">
                    <summary className="faq-q">{q}</summary>
                    <p className="faq-a">{a}</p>
                  </details>
                ))}
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/betonovy-poter-doba-schnuti" title="Betonový potěr: jak dlouho schne a kdy pokládat podlahu" />

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
                <li><a href="#typy">Cement vs. anhydrit</a></li>
                <li><a href="#jak-dlouho">Jak dlouho schne</a></li>
                <li><a href="#mereni">Měření vlhkosti (CM)</a></li>
                <li><a href="#kdy-pokladat">Kdy pokládat podlahu</a></li>
                <li><a href="#urychleni">Jak urychlit schnutí</a></li>
                <li><a href="#rizika">Rizika ukvapení</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/stehovani" className="sidebar-cat-link">🏠 Stěhování & rekonstrukce<span>36 článků →</span></Link>
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
        .hero-illustration { margin: 28px 0 36px; border-radius: 12px; overflow: hidden; border: 1px solid var(--border); }
        .hero-svg { width: 100%; height: auto; display: block; }
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
