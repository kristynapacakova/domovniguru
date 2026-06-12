import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak připravit dům a zahradu na silné bouřky a vítr",
  description: "Kontrola střechy, oken a zahrady před bouřkovou sezónou – jak předejít škodám při silném větru a dešti.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/pripravit-dum-na-boure-a-vitr" },
  openGraph: { title: "Jak připravit dům a zahradu na silné bouřky a vítr", description: "Kontrola střechy, oken a zahrady před bouřkovou sezónou – jak předejít škodám při silném větru a dešti.", url: "https://www.domovniguru.cz/blog/pripravit-dum-na-boure-a-vitr", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-12T08:00:00Z", modifiedTime: "2026-06-12T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20p%C5%99ipravit%20d%C5%AFm%20a%20zahradu%20na%20siln%C3%A9%20bou%C5%99ky%20a%20v%C3%ADtr&cat=blog", width: 1200, height: 630, alt: "Jak připravit dům a zahradu na silné bouřky a vítr" }] },
  twitter: { card: "summary_large_image", title: "Jak připravit dům a zahradu na silné bouřky a vítr", description: "Kontrola střechy, oken a zahrady před bouřkovou sezónou – jak předejít škodám." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/pripravit-dum-na-boure-a-vitr#article", "headline": "Jak připravit dům a zahradu na silné bouřky a vítr", "datePublished": "2026-06-12T08:00:00Z", "dateModified": "2026-06-12T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["příprava na bouřku", "ochrana domu před větrem", "zabezpečení zahrady", "kontrola okapů", "pojištění domu"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Sezónní údržba", "item": "https://www.domovniguru.cz/blog/kategorie/sezonni-udrzba" }, { "@type": "ListItem", "position": 4, "name": "Jak připravit dům a zahradu na silné bouřky a vítr", "item": "https://www.domovniguru.cz/blog/pripravit-dum-na-boure-a-vitr" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jak poznám, že mi hrozí škoda na střeše při bouřce?", "acceptedAnswer": { "@type": "Answer", "text": "Varovné signály jsou uvolněné nebo posunuté tašky, praskliny v krytině, mech a nečistoty kolem komína, prohnuté nebo zkorodované okapy a stopy zatékání na stropech v podkroví. Pokud něco z toho vidíte, nechte to opravit ještě před bouřkovou sezónou." } }, { "@type": "Question", "name": "Jaké předměty na zahradě jsou při větru nejrizikovější?", "acceptedAnswer": { "@type": "Answer", "text": "Nejčastěji odlétávají lehké předměty s velkou plochou – lehátka, slunečníky, plastové nádoby, trampolíny, plachty a fólie na záhonech, dále také nezajištěné květináče, popelnice a dekorace. Vše, co lze zvednout jednou rukou nebo co má plachtu, je potřeba před bouřkou uklidit nebo ukotvit." } }, { "@type": "Question", "name": "Potřebuji přepěťovou ochranu, i když mám pojištěnou elektroniku?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, pojištění a přepěťová ochrana řeší různé věci. Pojištění vám proplatí škodu, ale přepěťová ochrana jí předchází – chrání elektroniku před zničením a šetří čas i nervy s vyřizováním pojistné události. Kombinace obou je nejlevnější forma jistoty." } }, { "@type": "Question", "name": "Jak často kontrolovat stromy v blízkosti domu?", "acceptedAnswer": { "@type": "Answer", "text": "Stačí jednou až dvakrát ročně – ideálně na jaře a na podzim, vždy před začátkem bouřkové sezóny. Po každé silnější bouřce je dobré stromy znovu prohlédnout, zda nevznikly nové praskliny nebo nakloněné větve, které by mohly spadnout při dalším větru." } }, { "@type": "Question", "name": "Pokrývá pojištění domácnosti škody způsobené vichřicí?", "acceptedAnswer": { "@type": "Answer", "text": "Většina pojištění nemovitosti a domácnosti zahrnuje živelní rizika včetně vichřice, ale podmínky se liší – některé smlouvy mají limit rychlosti větru (např. od 75 km/h), jiné vyžadují prokázání síly větru meteorologickými daty. Vždy si zkontrolujte konkrétní podmínky a limity plnění ve smlouvě." } }] }] };

const RELATED = [
  { title: "Jak vyčistit okapy – postup a prevence ucpání", href: "/blog/jak-vycistit-okapy", read: "5 min" },
  { title: "Jak bezpečně odlehčit střechu od sněhu", href: "/blog/odlehcit-strechu-od-snehu", read: "5 min" },
  { title: "Jak stříhat ovocné stromy – kdy a jak správně řezat", href: "/blog/jak-strihat-ovocne-stromy", read: "6 min" },
  { title: "Příprava domu na léto – co zkontrolovat na jaře", href: "/blog/dum-priprava-na-leto", read: "6 min" },
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
              <span>Příprava domu na bouřky a vítr</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">🍂 Sezónní údržba</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak připravit dům a zahradu na silné bouřky a vítr</h1>
              <p className="article-lead">Letní bouřky přicházejí často nečekaně a během pár minut umí napáchat škody za desítky tisíc korun – uvolněná taška, převrácený trampolína nebo spadlá větev na auto. Většině těchto škod se ale dá předejít pravidelnou kontrolou a přípravou ještě před začátkem bouřkové sezóny.</p>
              <div className="article-meta-row"><span>Aktualizováno: 12. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#okapy">Kontrola okapů a svodů</a></li>
                <li><a href="#strecha">Kontrola střešní krytiny a komínů</a></li>
                <li><a href="#okna-dvere">Zajištění oken a dveří</a></li>
                <li><a href="#zahrada">Zabezpečení zahradního nábytku a předmětů</a></li>
                <li><a href="#stromy">Kontrola a prořezání stromů</a></li>
                <li><a href="#elektronika">Ochrana elektroniky a přepěťová ochrana</a></li>
                <li><a href="#pred-bourkou">Co dělat bezprostředně před bouřkou</a></li>
                <li><a href="#pojisteni">Pojištění proti živelným škodám</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="okapy">
              <h2>Kontrola a údržba okapů a svodů</h2>
              <p>Ucpané okapy jsou při bouřce jedním z nejčastějších problémů. Velké množství srážek za krátkou dobu se nemá kam vsáknout a voda pak stéká po fasádě, zatéká do podhledu nebo se hromadí u základů domu. Než přijde bouřková sezóna, je dobré okapy projít a vyčistit od listí, větviček a usazenin.</p>
              <p>Zkontrolujte také, jestli jsou okapy a svody pevně uchycené – při silném větru se uvolněný okap snadno odtrhne a může poškodit fasádu nebo spadnout na terasu. Podrobný postup najdete v článku o <Link href="/blog/jak-vycistit-okapy" style={{ color: "#2a6496", textDecoration: "underline" }}>čištění okapů</Link>, kde je popsáno i to, jak často kontrolu opakovat a na co si dát pozor u plastových i kovových okapů.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud máte v okolí domu vzrostlé stromy, zkontrolujte okapy alespoň dvakrát ročně – na jaře a na podzim. Po bouřce s vydatným listím nebo větvičkami je dobré udělat kontrolu navíc.</div>
            </section>

            <section id="strecha">
              <h2>Kontrola střešní krytiny a komínů</h2>
              <p>Při silném větru létají vzduchem hlavně uvolněné tašky, plechy a další části střechy, které mohou ohrozit nejen samotný dům, ale i sousedy nebo kolemjdoucí. Před bouřkovou sezónou se vyplatí projít střechu – buď z žebříku, dalekohledem ze zahrady, nebo si objednat odbornou kontrolu, pokud je střecha vysoká nebo špatně přístupná.</p>
              <p>Na co se zaměřit:</p>
              <ul>
                <li><strong>Uvolněné nebo posunuté tašky</strong> – i jedna chybějící taška vytváří díru, kterou se při dešti dostane voda do konstrukce krovu</li>
                <li><strong>Praskliny v krytině</strong> – u betonových a pálených tašek hledejte trhliny, u plechové krytiny korozi a uvolněné spoje</li>
                <li><strong>Stav komínů</strong> – uvolněná omítka, poškozená krycí deska nebo prasklý komínový nástavec představují riziko, že se při větru utrhne kus a spadne na střechu nebo zahradu</li>
                <li><strong>Hřebenáče a okrajové prvky</strong> – ty jsou nejvíc namáhané větrem a často jako první povolí</li>
                <li><strong>Antény a satelity</strong> – ověřte, že jsou pevně ukotvené, jinak je vítr snadno ohne nebo strhne</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud bydlíte v podkroví, věnujte pozornost i vnitřní straně střechy – vlhké skvrny nebo zatuchlý zápach mohou signalizovat, že někde už zatéká, i když to ze zahrady není vidět.</div>
            </section>

            <section id="okna-dvere">
              <h2>Zajištění oken a dveří</h2>
              <p>Silný vítr dokáže poškodit okna a dveře hned dvěma způsoby – přímým náporem na sklo a rám, nebo nárazem létajících předmětů. Před bouřkovou sezónou zkontrolujte, že se všechna okna a balkonové dveře dají pořádně dovřít a zajistit, a že těsnění nejsou popraskaná či vypadávající.</p>
              <p>Pokud máte venkovní žaluzie nebo okenice, ověřte, že mechanismus funguje a že je lze v případě potřeby rychle stáhnout – chrání sklo před krupobitím a zároveň snižují tlak větru na okno. U starších žaluzií se vyplatí promazat vodicí lišty a zkontrolovat, že popruhy nejsou prodřené.</p>
              <ul>
                <li>Velká skleněná plocha bez okenic nebo žaluzií – zvažte alespoň zatažení těžších závěsů, které trochu ztlumí případné rozbití skla</li>
                <li>Sklepní okénka a světlíky – často se na ně zapomíná, ale při dešti se silným větrem se do nich snadno dostane voda</li>
                <li>Vstupní dveře a garážová vrata – u garážových vrat zkontrolujte stav kolejniček a zajištění, protože velká plocha vrat je při bočním větru hodně namáhaná</li>
              </ul>
            </section>

            <section id="zahrada">
              <h2>Zabezpečení zahradního nábytku a předmětů, které může vítr odnést</h2>
              <p>Při větru o síle bouřky se i poměrně těžké předměty mění v nebezpečné projektily. Zahradní nábytek, trampolíny, slunečníky nebo plachty na bazén dokážou letět desítky metrů a poškodit auto, okno nebo skleník – klidně i u sousedů.</p>
              <p>Co před bouřkou zkontrolovat a zajistit:</p>
              <ul>
                <li><strong>Lehký nábytek</strong> – lehátka, židle a stolky ze zahradního setu přemístěte do garáže, kůlny nebo je alespoň sklopte a opřete o zeď na chráněné straně domu</li>
                <li><strong>Slunečníky</strong> – sklopte a pokud možno demontujte, samotná noha s naplněným stojanem často nestačí udržet plachtu při silném nárazu</li>
                <li><strong>Trampolíny</strong> – pokud je nelze rozebrat, sundejte alespoň ochrannou síť a plachtu, případně trampolínu zakotvěte pomocí kotvicích sad do země</li>
                <li><strong>Květináče a dekorace</strong> – těžší kameninové květináče přesuňte k zemi a pod přístřešek, lehké plastové buď uklidněte, nebo naplňte vodou pro stabilitu</li>
                <li><strong>Popelnice a kontejnery</strong> – zajistěte víka nebo popelnice umístěte do zákrytu, jinak se snadno povalí a obsah se rozsype po okolí</li>
                <li><strong>Plachty a fólie na záhonech</strong> – pokud je nelze sundat, důkladně je přitěžte na všech rozích a po stranách</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Vyplatí se mít na zahradě jedno místo – garáž, kůlna nebo zastřešená terasa – kam je možné rychle přesunout drobné předměty, když se na obloze objeví bouřková mračna. Pokud víte, že předpověď hlásí silný vítr, raději uklidněte zahradu hned ráno, ne až za pár minut po prvním hromu.</div>
            </section>

            <section id="stromy">
              <h2>Kontrola a prořezání stromů a větví v blízkosti domu</h2>
              <p>Spadlý strom nebo velká větev patří k nejčastějším a zároveň nejnákladnějším škodám při bouřkách. Riziko roste se vzrostlými stromy, které mají suché nebo nalomené větve, jsou nakloněné, nebo mají poškozené kořeny po výkopových pracích v okolí.</p>
              <p>Před bouřkovou sezónou si stromy v okolí domu prohlédněte a všímejte si:</p>
              <ul>
                <li><strong>Suché nebo nalomené větve</strong> – ty je potřeba odstranit jako první, protože odpadnou i při menším poryvu</li>
                <li><strong>Větve nad střechou, terasou nebo příjezdovou cestou</strong> – zkraťte je tak, aby v případě pádu nedopadly na konstrukci nebo auto</li>
                <li><strong>Naklonění kmene</strong> – nový náklon nebo praskliny v zemi u kořenového balu mohou signalizovat, že strom ztrácí stabilitu</li>
                <li><strong>Hustá koruna</strong> – příliš hustá koruna chytá víc větru jako plachta, prořezáním se sníží odpor a riziko vyvrácení</li>
              </ul>
              <p>U menších okrasných keřů a stromků platí podobné zásady jako při běžné údržbě – odstraňte přerostlé a slabé výhony, které by se mohly zlomit. Pokud řešíte i péči o ovocné dřeviny, hodí se k tomu i samostatný postup pro <Link href="/blog/jak-strihat-ovocne-stromy" style={{ color: "#2a6496", textDecoration: "underline" }}>prořezávání ovocných stromů</Link>, kde najdete i informace o tom, kdy a jak silně řezat, aby strom zůstal stabilní.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> U velkých vzrostlých stromů, zejména pokud rostou blízko domu nebo elektrického vedení, je lepší prořezání svěřit arboristovi. Amatérský řez velkých větví ve výšce je riziko jak pro člověka, tak pro samotný strom.</div>
            </section>

            <section id="elektronika">
              <h2>Ochrana elektroniky před výpadky proudu a přepěťová ochrana</h2>
              <p>Bouřky jsou nejčastější příčinou krátkodobých výpadků proudu a přepěťových špiček v elektrické síti. Blesk, který udeří do vedení i několik kilometrů od domu, dokáže poslat do zásuvek napěťovou špičku, která za zlomek sekundy poškodí televizor, router, počítač nebo domácí spotřebiče s elektronikou.</p>
              <p>Základní ochranou jsou přepěťové ochrany – ať už v podobě prodlužovacích kabelů s vestavěnou ochranou, nebo přepěťových svodičů instalovaných přímo v rozvaděči. U citlivější elektroniky (počítače, NAS, herní konzole, chytrá domácnost) se vyplatí kombinace obou:</p>
              <ul>
                <li><strong>Centrální přepěťová ochrana v rozvaděči</strong> – zachytí největší špičky přicházející z vnější sítě, instalaci by měl provést elektrikář</li>
                <li><strong>Lokální přepěťové zásuvky a prodlužovačky</strong> – druhá úroveň ochrany přímo u zařízení, vyměňují se po několika letech nebo po zásahu velkou špičkou</li>
                <li><strong>Záložní zdroj (UPS)</strong> – u počítačů a síťových prvků navíc ochrání před ztrátou dat při výpadku proudu a umožní v klidu uložit rozdělanou práci</li>
              </ul>
              <p>Pokud očekáváte bouřku a nemáte centrální ochranu, je rozumné na dobu bouřky odpojit nejcitlivější a nejdražší zařízení ze zásuvky úplně – televizor, počítač, herní konzoli. Je to nejjednodušší a zadarmo dostupná ochrana, která funguje, i když selže všechno ostatní.</p>
            </section>

            <section id="pred-bourkou">
              <h2>Co dělat bezprostředně před bouřkou</h2>
              <p>Pokud předpověď počasí hlásí silnou bouřku nebo vichřici v řádu hodin, vyplatí se projít rychlý kontrolní seznam:</p>
              <ul>
                <li>Zavřít a zajistit všechna okna, světlíky a venkovní žaluzie</li>
                <li>Uklidit nebo zajistit veškerý lehký zahradní nábytek, slunečníky a dekorace</li>
                <li>Zaparkovat auto mimo dosah vzrostlých stromů, pokud je to možné</li>
                <li>Odpojit citlivou elektroniku, kterou nemáte chráněnou přepěťovou ochranou</li>
                <li>Zkontrolovat, že okapy a žlaby nejsou ucpané a voda může volně odtékat</li>
                <li>Mít po ruce nabité telefony, baterku a případně náhradní zdroj energie pro případ delšího výpadku proudu</li>
                <li>Pokud máte domácí zvířata venku, zajistit jim přístup do bezpečného a suchého místa</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Sledujte výstrahy Českého hydrometeorologického ústavu (ČHMÚ) – u vyšších stupňů výstrahy na vítr nebo bouřky se vyplatí brát přípravu vážně i v případě, že obloha zatím vypadá klidně.</div>
            </section>

            <section id="pojisteni">
              <h2>Pojištění domu proti živelným škodám – na co se zaměřit</h2>
              <p>I při sebelepší přípravě se některým škodám nedá úplně zabránit, proto je vhodné mít aktuální a dostatečné pojištění nemovitosti a domácnosti. Před bouřkovou sezónou je dobré smlouvu znovu projít a ověřit pár klíčových bodů:</p>
              <ul>
                <li><strong>Pojistná částka odpovídá hodnotě nemovitosti</strong> – pokud jste v posledních letech dům zrekonstruovali nebo zvětšili, je potřeba pojistnou částku navýšit, jinak hrozí krácení plnění</li>
                <li><strong>Krytí živelních rizik včetně vichřice a krupobití</strong> – ověřte, jaká je definice vichřice ve smlouvě (často minimální rychlost větru) a zda se na ni vztahuje i poškození způsobené padlým stromem</li>
                <li><strong>Připojištění vedlejších staveb</strong> – plot, pergola, kůlna nebo skleník nemusí být automaticky kryté v rámci pojištění hlavní budovy</li>
                <li><strong>Limity plnění u jednotlivých položek</strong> – elektronika, zahradní nábytek nebo technika mívají v pojištění domácnosti samostatné limity, které se mohou rychle vyčerpat</li>
                <li><strong>Spoluúčast</strong> – zkontrolujte, jakou částku byste při škodě hradili sami, a zda odpovídá vašim možnostem</li>
              </ul>
              <p>Po bouřce je důležité škodu zdokumentovat co nejdříve – nafotit poškození ještě před opravou, uschovat účtenky za případné nouzové zajištění (např. plachtu na střechu) a kontaktovat pojišťovnu bez zbytečného odkladu, ideálně do několika dnů od vzniku škody.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jak poznám, že mi hrozí škoda na střeše při bouřce?", a: "Varovné signály jsou uvolněné nebo posunuté tašky, praskliny v krytině, mech a nečistoty kolem komína, prohnuté nebo zkorodované okapy a stopy zatékání na stropech v podkroví. Pokud něco z toho vidíte, nechte to opravit ještě před bouřkovou sezónou." },
                  { q: "Jaké předměty na zahradě jsou při větru nejrizikovější?", a: "Nejčastěji odlétávají lehké předměty s velkou plochou – lehátka, slunečníky, plastové nádoby, trampolíny, plachty a fólie na záhonech, dále také nezajištěné květináče, popelnice a dekorace. Vše, co lze zvednout jednou rukou nebo co má plachtu, je potřeba před bouřkou uklidit nebo ukotvit." },
                  { q: "Potřebuji přepěťovou ochranu, i když mám pojištěnou elektroniku?", a: "Ano, pojištění a přepěťová ochrana řeší různé věci. Pojištění vám proplatí škodu, ale přepěťová ochrana jí předchází – chrání elektroniku před zničením a šetří čas i nervy s vyřizováním pojistné události. Kombinace obou je nejlevnější forma jistoty." },
                  { q: "Jak často kontrolovat stromy v blízkosti domu?", a: "Stačí jednou až dvakrát ročně – ideálně na jaře a na podzim, vždy před začátkem bouřkové sezóny. Po každé silnější bouřce je dobré stromy znovu prohlédnout, zda nevznikly nové praskliny nebo nakloněné větve, které by mohly spadnout při dalším větru." },
                  { q: "Pokrývá pojištění domácnosti škody způsobené vichřicí?", a: "Většina pojištění nemovitosti a domácnosti zahrnuje živelní rizika včetně vichřice, ale podmínky se liší – některé smlouvy mají limit rychlosti větru (např. od 75 km/h), jiné vyžadují prokázání síly větru meteorologickými daty. Vždy si zkontrolujte konkrétní podmínky a limity plnění ve smlouvě." },
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
                <li><a href="#okapy">Kontrola okapů a svodů</a></li>
                <li><a href="#strecha">Kontrola střechy a komínů</a></li>
                <li><a href="#okna-dvere">Okna a dveře</a></li>
                <li><a href="#zahrada">Zahradní nábytek a předměty</a></li>
                <li><a href="#stromy">Stromy a větve</a></li>
                <li><a href="#elektronika">Přepěťová ochrana</a></li>
                <li><a href="#pred-bourkou">Před bouřkou</a></li>
                <li><a href="#pojisteni">Pojištění proti škodám</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/sezonni-udrzba" className="sidebar-cat-link">🍂 Sezónní údržba<span>20 článků →</span></Link>
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
