import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mulčování záhonů: proč a jak mulčovat zahradu",
  description: "Co je mulčování, které materiály vybrat, jak správně nanášet mulč a kdy ho doplňovat. Praktické tipy pro zadržení vlhkosti, potlačení plevele a zlepšení půdy.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/mulcovani-zahrady" },
  openGraph: { title: "Mulčování záhonů: proč a jak mulčovat zahradu", description: "Co je mulčování, které materiály vybrat, jak správně nanášet mulč a kdy ho doplňovat. Praktické tipy pro zadržení vlhkosti, potlačení plevele a zlepšení půdy.", url: "https://www.domovniguru.cz/blog/mulcovani-zahrady", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-07-08T08:00:00Z", modifiedTime: "2026-07-08T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Mul%C4%8Dov%C3%A1n%C3%AD%20z%C3%A1hon%C5%AF%3A%20pro%C4%8D%20a%20jak%20mul%C4%8Dovat%20zahradu&cat=blog", width: 1200, height: 630, alt: "Mulčování záhonů: proč a jak mulčovat zahradu" }] },
  twitter: { card: "summary_large_image", title: "Mulčování záhonů: proč a jak mulčovat zahradu", description: "Co je mulčování, které materiály vybrat, jak správně nanášet mulč a kdy ho doplňovat. Praktické tipy pro zadržení vlhkosti, potlačení plevele a zlepšení půdy." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/mulcovani-zahrady#article", "headline": "Mulčování záhonů: proč a jak mulčovat zahradu", "datePublished": "2026-07-08T08:00:00Z", "dateModified": "2026-07-08T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["mulčování záhonu", "mulč zahrada", "dřevní štěpka zahrada", "kůra záhon", "potlačení plevele mulč", "zadržení vlhkosti zahrada", "organický mulč"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Zahrada & terasa", "item": "https://www.domovniguru.cz/blog/kategorie/zahrada" }, { "@type": "ListItem", "position": 4, "name": "Mulčování záhonů", "item": "https://www.domovniguru.cz/blog/mulcovani-zahrady" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Kolik centimetrů mulče je správná vrstva?", "acceptedAnswer": { "@type": "Answer", "text": "Doporučená tloušťka vrstvy organického mulče (dřevní štěpka, kůra) je 5–10 cm. Tenčí vrstva (pod 4 cm) nepotlačí plevel dostatečně, silnější vrstva (přes 15 cm) může způsobit zamokření půdy, hnilobu kořenů a tvorbu plísní. U anorganického mulče (štěrk, kameny) stačí 3–5 cm." } }, { "@type": "Question", "name": "Mulčovat na jaře nebo na podzim?", "acceptedAnswer": { "@type": "Answer", "text": "Ideálně oboje. Jarní mulčování (duben–květen) zabrání plevelům, zadrží vlhkost pro letní sezónu a zahřeje půdu. Podzimní mulčování (říjen–listopad) chrání kořeny trvalek a keřů před mrazem a obohacuje půdu rozkladem organiky přes zimu. Pokud mulčuješ jen jednou, zvolte jaro." } }, { "@type": "Question", "name": "Je dřevní štěpka nebo kůra lepší mulč?", "acceptedAnswer": { "@type": "Answer", "text": "Dřevní štěpka je levnější (nebo zdarma od arboristů), rychleji se rozkládá a zlepšuje strukturu půdy, ale váže dusík při rozkladu – v záhonech se zeleninou ji proto používej opatrně. Borková kůra (mulčovací kůra) se rozkládá pomaleji, vypadá esteticky a je vhodná do okrasných záhonů a pod dřeviny." } }, { "@type": "Question", "name": "Mohu mulčovat přes suchý záhon?", "acceptedAnswer": { "@type": "Answer", "text": "Ne – záhon je nutné před mulčováním důkladně zalít. Suchý záhon pokrytý mulčem zůstane suchý, protože mulč dešťovou vodu odvádí nebo zpomaluje průsak. Vlhkost, která mulčováním záhon zachováváš, musí v půdě nejprve být – nebo ji musíš přidat zálivkou." } }, { "@type": "Question", "name": "Proč se nesmí mulč nanášet těsně ke kmeni stromu?", "acceptedAnswer": { "@type": "Answer", "text": "Mulč těsně u kmene stromu zadržuje vlhkost a teplo přímo u kůry, což způsobuje hnilobu borky a vytváří podmínky pro plísně a škůdce. Vždy nechej volný kruh alespoň 10–15 cm kolem kmene, kde mulč chybí. Ke kmenům keřů platí stejné pravidlo." } }] }] };

const RELATED = [
  { title: "Jak správně kompostovat: tipy pro začátečníky", href: "/blog/jak-kompostovat", read: "5 min" },
  { title: "Jak hnojit zahradu: organické i minerální hnojivo", href: "/blog/jak-hnojit-zahradu", read: "5 min" },
  { title: "Zahrada pro opylovače: záhon pro včely a motýly", href: "/blog/zahrada-pro-opylovace", read: "5 min" },
  { title: "Pěstování mrkve a kořenové zeleniny", href: "/blog/jak-pestovat-mrkev-a-koreninovou-zeleninu", read: "5 min" },
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
              <span>Mulčování záhonů</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada &amp; terasa</Link>
                <span className="article-read-time">⏱ 4 min čtení</span>
              </div>
              <h1 className="article-h1">Mulčování záhonů: proč a jak mulčovat zahradu</h1>
              <p className="article-lead">Mulčování patří k nejjednodušším a zároveň nejefektivnějším záhradnickým technikám. Vrstva organiky nebo kamení na záhonu zadrží vlhkost, potlačí plevel, ochrání kořeny před mrazem a po rozkladu zlepší strukturu půdy. Stačí vědět, co kam dát a jak silnou vrstvu nanést.</p>
              <div className="article-meta-row"><span>Aktualizováno: 8. července 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#co-je-mulcovani">Co je mulčování a proč se vyplatí</a></li>
                <li><a href="#typy-materialu">Typy mulčovacích materiálů</a></li>
                <li><a href="#tloustka">Správná tloušťka vrstvy</a></li>
                <li><a href="#jak-nanaset">Jak mulč správně nanášet</a></li>
                <li><a href="#kdy-mulcovat">Kdy mulčovat</a></li>
                <li><a href="#chyby">Časté chyby při mulčování</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="co-je-mulcovani">
              <h2>Co je mulčování a proč se vyplatí</h2>
              <p>Mulčování je pokrytí povrchu záhonu nebo plochy kolem rostlin vrstvou materiálu (organického nebo anorganického). Slovo pochází z anglického „mulch" a technika se v zahradnictví používá tisíce let. Přesto ji mnoho zahrádkářů zanedbává nebo dělá špatně.</p>
              <h3>Čtyři klíčové výhody mulčování</h3>
              <ul>
                <li><strong>Zadržení vlhkosti:</strong> mulč zpomaluje výpar z půdy a snižuje potřebu zálivky o 30–50 %. V letních vedrech může být rozdíl v záhonu s mulčem a bez mulče dramatický – záhon bez mulče vyschne za 2–3 dny, mulčovaný záhon může vydržet bez zálivky až týden.</li>
                <li><strong>Potlačení plevele:</strong> vrstva 5–10 cm organiky nebo kamene nepropustí světlo na semena plevele, která tak neklíčí. Eliminace plevele ušetří hodiny práce za sezónu – zvláště v záhonech s trvalkami a keři, kde se nedá snadno plečkovat.</li>
                <li><strong>Regulace teploty půdy:</strong> v létě mulč půdu ochlazuje (zabraňuje přehřívání), v zimě chrání kořeny před mrazem. Teplotní výkyvy, které jsou pro kořeny stresující, se tím výrazně zmírní.</li>
                <li><strong>Zlepšení struktury půdy:</strong> organický mulč se postupně rozkládá a přidává humus do půdy, zlepšuje její strukturu, vodní kapacitu a mikrobiální aktivitu. Je to pasivní kompostování přímo na záhonu.</li>
              </ul>
              <p>Výsledek: zdravější rostliny, méně práce s pletím a zálivkou, lepší půda každým rokem. Mulčování se zkrátka vyplatí.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Chceš vidět rozdíl? Rozdel záhon na poloviny – jednu mulčuj dřevní štěpkou, druhou nech bez mulče. Po jedné sezóně bude rozdíl v plevelech, vlhkosti půdy i zdraví rostlin jasně viditelný.</div>
            </section>

            <section id="typy-materialu">
              <h2>Typy mulčovacích materiálů: organické vs. anorganické</h2>
              <p>Mulčovací materiály se dělí na organické (postupně se rozkládají a zlepšují půdu) a anorganické (nemění se, trvalé). Každý má své místo.</p>
              <h3>Organické mulče</h3>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Materiál</th><th>Vhodné pro</th><th>Výhody</th><th>Nevýhody</th></tr></thead>
                  <tbody>
                    <tr><td>Dřevní štěpka</td><td>Stromy, keře, okrasné záhony</td><td>Levná nebo zdarma, dlouhotrvající, skvěle zlepšuje půdu</td><td>Při rozkladu krátkodobě váže dusík; může přitáhnout houby</td></tr>
                    <tr><td>Mulčovací kůra (borka)</td><td>Okrasné záhony, keře, stromy</td><td>Estetická, pomalý rozklad, dobré potlačení plevele</td><td>Dražší, pomaleji obohacuje půdu</td></tr>
                    <tr><td>Sláma</td><td>Zelenina (jahody, rajčata, tykve)</td><td>Levná, zadrží vlhkost, izolace při mrazu</td><td>Může hostit myši; je třeba ji doplňovat každou sezónu</td></tr>
                    <tr><td>Listový kompost</td><td>Záhony se zeleninou, trvalky</td><td>Výborná výživa půdy, neutrální pH, nenápadný vzhled</td><td>Tenká vrstva nestačí na potlačení plevele; potřeba domácí produkce</td></tr>
                    <tr><td>Zkompotované tráva</td><td>Záhony se zeleninou</td><td>Zdarma, rychle se rozkládá</td><td>Čerstvá tráva může plísnit a hnisat; musí být suchá nebo lehce zavadlá</td></tr>
                    <tr><td>Jehličí</td><td>Pod borůvky, rododendrony, vřes</td><td>Okyseluje půdu (vhodné pro acidofilní druhy)</td><td>Nevhodné pro záhony s neutrálním pH; pomalý rozklad</td></tr>
                  </tbody>
                </table>
              </div>
              <h3>Anorganické mulče</h3>
              <ul>
                <li><strong>Drcený kámen, štěrk, říční oblázky</strong> – trvalé, bez rozkladu, výborné do okrasných záhonů a pod sukulenty; nepřidávají živiny, ale excelentně potlačují plevel a zadrží vlhkost</li>
                <li><strong>Lávový kámen (pemza)</strong> – lehký, porézní, estetický; oblíbený do záhonů s trvalkami</li>
                <li><strong>Textilní mulčovací netkaná tkanina</strong> – černá nebo hnědá tkanina pod ostatní mulč; výborná pro nové záhony jako základ pro potlačení plevele, ale po čase se zarůstá</li>
                <li><strong>Geotextilie</strong> – podobná textilní tkanině, odolnější; vhodná pod štěrk nebo kůru u cest a obrubníků</li>
              </ul>
              <p>Anorganický mulč se na rozdíl od organického nerozkládá, takže ho v záhonu nenajdeš za 5 let ve stejném stavu. Je ideální pod déle rostoucí keře a stromy, kde nechceš každý rok doplňovat.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Dřevní štěpku seženeš zdarma od arboristů a stromolezců, kteří potřebují odvézt materiál z prací na stromech. Stačí jim zavolat nebo napsat – rádi dodají přívěs štěpky za cenu dopravy nebo i zdarma.</div>
            </section>

            <section id="tloustka">
              <h2>Správná tloušťka vrstvy mulče</h2>
              <p>Tloušťka vrstvy je klíčová – příliš tenká vrstva nestačí na potlačení plevele, příliš silná může záhonu ublížit.</p>
              <ul>
                <li><strong>Organický mulč (štěpka, kůra, sláma):</strong> 5–10 cm je ideální rozsah. Při 5 cm potlačíš většinu plevelů a zadržíš vlhkost. Vrstva 8–10 cm je lepší pro záhony s vyšším tlakem plevele nebo pod stromy.</li>
                <li><strong>Listový kompost a tráva:</strong> 3–5 cm (tenčí vrstvy, protože se rychleji rozkládají)</li>
                <li><strong>Anorganický mulč (štěrk, kameny):</strong> 3–5 cm stačí; silnější vrstvy jsou zbytečné a jen přidávají hmotnost</li>
                <li><strong>Maximální vrstva:</strong> nepřekračuj 15 cm organiky – pod silnou vrstvou se tvoří anaerobní (bezkyslíkaté) podmínky, půda začne hnisat a kořeny mohou trpět.</li>
              </ul>
              <p>Vrstvu mulče je třeba každoročně doplňovat, protože organický mulč se rozloží a usadí. Po roce může vrstva 8 cm poklesnout na 4–5 cm. Na jaře doplň 3–5 cm nového materiálu navrch – nemusíš starý odstraňovat, jen přidej nový.</p>
            </section>

            <section id="jak-nanaset">
              <h2>Jak mulč správně nanášet</h2>
              <p>Technika nanášení je stejně důležitá jako výběr materiálu. Pár pravidel ti zabrání problémům.</p>
              <h3>Před mulčováním: záhon musí být vlhký</h3>
              <p>Toto je nejdůležitější pravidlo: záhon před mulčováním <strong>důkladně zalij</strong>. Mulč zabrání dešti a zálivce pronikat k půdě tak efektivně, že suchý záhon pokrytý mulčem zůstane suchý ještě dlouho. Vlhkost, které mulčováním zabraňuješ odpařit, musí v půdě nejprve být. Nejlépe mulčuj den po vydatném dešti nebo den po zálivce.</p>
              <h3>Odstraň plevel před mulčováním</h3>
              <p>Mulč plevele nezabije – pouze jim znemožní klíčit ze semen. Rostoucí plevel pod mulčem bude dál růst a probourá se přes vrstvu. Proto před mulčováním pečlivě vyplet celý záhon, ideálně i s kořeny (viz článek <Link href="/blog/zbavit-se-plevele-bez-chemie" style={{ color: "#2a6496", textDecoration: "underline" }}>jak se zbavit plevele bez chemie</Link>).</p>
              <h3>Volný prostor kolem kmenů a kořenových krčků</h3>
              <p>Nikdy nenanes mulč těsně ke kmeni stromu nebo keře. Mulč u kmene:</p>
              <ul>
                <li>Zadržuje vlhkost, která způsobuje hnilobu borky a kořenového krčku</li>
                <li>Vytváří ideální podmínky pro myši a hraboše, kteří kůru stromu ohryzávají</li>
                <li>V zimě tvoří teplé útočiště pro škůdce</li>
              </ul>
              <p>Vždy nechej volný kruh 10–15 cm kolem každého kmene, kde je půda holá nebo pokryta jen tenkým štěrkem. Stejné pravidlo platí pro kořenové krčky trvalek a keřů.</p>
              <h3>Roztáhni mulč rovnoměrně</h3>
              <p>Nanášej mulč hráběmi nebo rukama, rovnoměrně na celou plochu záhonu. Hrby a jámy jsou nežádoucí – v jamkách se mulč hromadí a plísní, na hrbech je vrstva příliš tenká. U záhonů se zeleninou nech drobný prostor kolem samotných rostlin, aby mulč nedoléhal na lodyhy (hrozí hniloba).</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Při mulčování záhonu se zeleninou (rajčata, papriky, okurky) je sláma nebo listový kompost lepší volbou než kůra – nevypadá cize vedle jedlých rostlin a nezváže dusík tak výrazně jako dřevní štěpka.</div>
            </section>

            <section id="kdy-mulcovat">
              <h2>Kdy mulčovat: jaro a podzim</h2>
              <h3>Jarní mulčování (duben–květen)</h3>
              <p>Jarní mulčování je nejdůležitější a pro většinu záhonů povinné. Nejlepší čas je, když půda <strong>prohřeje na alespoň 10 °C</strong> – mulčování příliš studené půdy brzdí zahřívání a zpomaluje start vegetace. Záhon nejdříve prolečkuj a odplev, pak zalij a nanesi mulč.</p>
              <p>Jarní mulčování zabrání klíčení letních plevelů, zadrží vlhkost pro suchý červen a červenec, ochrání půdu před erozí při jarních lijácích.</p>
              <h3>Podzimní mulčování (říjen–listopad)</h3>
              <p>Podzimní mulčování slouží především jako <strong>zimní ochrana</strong> kořenů trvalek, keřů a citlivějších dřevin. Před sezónou mrazů nanesi vrstvu organiky 10–15 cm kolem trsů trvalek a keřů (u stromů stačí 5–8 cm na větší plochu). Mulč ochrání kořeny před promrznutím a při jarním tání pomůže regulovat rychlost oteplování půdy.</p>
              <p>Mulč nanášej <strong>až po prvních mrazech</strong> – příliš brzy nanesený mulč na podzim může udržovat teplo v půdě a zbrzdit dormanci rostlin, které se na zimu potřebují „zavřít".</p>
              <h3>Doplňování v průběhu sezóny</h3>
              <p>Organický mulč se v průběhu roku rozkládá. Zkontroluj tloušťku vrstvy v červenci a v případě potřeby doplň. Na záhonech se zeleninou, kde se každoročně přesazuje, mulč vyměňuj nebo doplňuj na začátku každé sezóny.</p>
            </section>

            <section id="chyby">
              <h2>Časté chyby při mulčování</h2>
              <p>I jednoduchá technika má svá úskalí. Tyto chyby vidím na zahradách nejčastěji:</p>
              <ul>
                <li><strong>Mulčování suchého záhonu</strong> – jeden z nejčastějších omylů; záhon je nutné před mulčováním důkladně nasytit vodou, jinak pod mulčem zůstane suchý.</li>
                <li><strong>Příliš silná vrstva (přes 15 cm)</strong> – způsobuje zamokření, hnilobu, anaerobní podmínky v půdě a plíseň. Záhon se začne nepříjemně páchnout a kořeny trpí.</li>
                <li><strong>Mulč těsně ke kmenům stromů a keřů</strong> – způsobuje hnilobu borky a kořenového krčku; vždy nechej volný kruh 10–15 cm.</li>
                <li><strong>Mulčování zapleveleného záhonu</strong> – plevel přežije a probourá se přes vrstvu; vždy nejdříve důkladně vyplet.</li>
                <li><strong>Použití čerstvé trávy bez zaschnutí</strong> – čerstvá tráva tvoří nepropustnou hliněnou vrstvu, která plísní a smrdí; trávu nejdříve nech den nebo dva zavadnout.</li>
                <li><strong>Použití jehličí do záhonů s zeleninou</strong> – jehličí výrazně okyseluje půdu, což zelenině (s výjimkou borůvek) nevyhovuje.</li>
                <li><strong>Zanedbání doplňování</strong> – organický mulč se za rok výrazně usadí a ztenčí; vrstvu je třeba každoročně doplňovat, jinak ztratí svůj účinek.</li>
              </ul>
              <p>Správné mulčování nestojí skoro nic (dřevní štěpku seženeš zdarma) a ušetří hodiny práce za sezónu. Stojí to za to ho dělat správně.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Mulčování je skvělá kombinace s kompostováním – pokud vlastní kompost nestačí, přidej ho jako tenkou spodní vrstvu přímo na záhon a přikryj dřevní štěpkou. Kompost obohatí půdu živinami, štěpka ho zadrží a zpomalí rozklad. Více o kompostování najdeš v článku <Link href="/blog/jak-kompostovat" style={{ color: "#2a6496", textDecoration: "underline" }}>jak správně kompostovat</Link>.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Kolik centimetrů mulče je správná vrstva?", a: "Doporučená tloušťka vrstvy organického mulče (dřevní štěpka, kůra) je 5–10 cm. Tenčí vrstva (pod 4 cm) nepotlačí plevel dostatečně, silnější vrstva (přes 15 cm) může způsobit zamokření půdy, hnilobu kořenů a tvorbu plísní. U anorganického mulče (štěrk, kameny) stačí 3–5 cm." },
                  { q: "Mulčovat na jaře nebo na podzim?", a: "Ideálně oboje. Jarní mulčování (duben–květen) zabrání plevelům, zadrží vlhkost pro letní sezónu a zahřeje půdu. Podzimní mulčování (říjen–listopad) chrání kořeny trvalek a keřů před mrazem a obohacuje půdu rozkladem organiky přes zimu. Pokud mulčuješ jen jednou, zvolte jaro." },
                  { q: "Je dřevní štěpka nebo kůra lepší mulč?", a: "Dřevní štěpka je levnější (nebo zdarma od arboristů), rychleji se rozkládá a zlepšuje strukturu půdy, ale váže dusík při rozkladu – v záhonech se zeleninou ji proto používej opatrně. Borková kůra (mulčovací kůra) se rozkládá pomaleji, vypadá esteticky a je vhodná do okrasných záhonů a pod dřeviny." },
                  { q: "Mohu mulčovat přes suchý záhon?", a: "Ne – záhon je nutné před mulčováním důkladně zalít. Suchý záhon pokrytý mulčem zůstane suchý, protože mulč dešťovou vodu odvádí nebo zpomaluje průsak. Vlhkost, která mulčováním záhon zachováváš, musí v půdě nejprve být – nebo ji musíš přidat zálivkou." },
                  { q: "Proč se nesmí mulč nanášet těsně ke kmeni stromu?", a: "Mulč těsně u kmene stromu zadržuje vlhkost a teplo přímo u kůry, což způsobuje hnilobu borky a vytváří podmínky pro plísně a škůdce. Vždy nechej volný kruh alespoň 10–15 cm kolem kmene, kde mulč chybí. Ke kmenům keřů platí stejné pravidlo." },
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
                <li><a href="#co-je-mulcovani">Co je mulčování</a></li>
                <li><a href="#typy-materialu">Typy materiálů</a></li>
                <li><a href="#tloustka">Správná tloušťka</a></li>
                <li><a href="#jak-nanaset">Jak nanášet mulč</a></li>
                <li><a href="#kdy-mulcovat">Kdy mulčovat</a></li>
                <li><a href="#chyby">Časté chyby</a></li>
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
