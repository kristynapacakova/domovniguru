import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak pěstovat česnek a cibuli na zahradě – kompletní návod 2026",
  description: "Ozimý vs. jarní česnek, sadba vs. semena cibule, sázení, hnojení i sklizeň a uskladnění. Praktický návod krok za krokem pro celou sezónu.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-pestovat-cesnek-a-cibuli" },
  openGraph: {
    title: "Jak pěstovat česnek a cibuli na zahradě 2026",
    description: "Ozimý vs. jarní česnek, sadba vs. semena cibule, sázení, hnojení i sklizeň a uskladnění.",
    url: "https://www.domovniguru.cz/blog/jak-pestovat-cesnek-a-cibuli",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "article",
    publishedTime: "2026-06-17T08:00:00Z",
    modifiedTime: "2026-06-17T08:00:00Z",
    authors: ["DomovniGuru"],
    images: [{ url: "/api/og?title=Jak%20p%C4%9Bstovat%20%C4%8Desnek%20a%20cibuli%20na%20zahrad%C4%9B%20%E2%80%93%20kompletn%C3%AD%20n%C3%A1vod%202026&cat=blog", width: 1200, height: 630, alt: "Jak pěstovat česnek a cibuli na zahradě – kompletní návod 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jak pěstovat česnek a cibuli na zahradě 2026",
    description: "Ozimý vs. jarní česnek, sadba vs. semena cibule, sázení, hnojení, sklizeň a uskladnění.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.domovniguru.cz/blog/jak-pestovat-cesnek-a-cibuli#article",
      "headline": "Jak pěstovat česnek a cibuli na zahradě – kompletní návod 2026",
      "description": "Ozimý vs. jarní česnek, sadba vs. semena cibule, sázení, hnojení i sklizeň a uskladnění. Praktický návod krok za krokem pro celou sezónu.",
      "datePublished": "2026-06-17T08:00:00Z",
      "dateModified": "2026-06-17T08:00:00Z",
      "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.domovniguru.cz/blog/jak-pestovat-cesnek-a-cibuli" },
      "inLanguage": "cs",
      "keywords": ["jak pěstovat česnek", "jak pěstovat cibuli", "ozimý česnek", "jarní česnek", "sázení česneku", "sázení cibule", "sklizeň česneku"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.domovniguru.cz/blog/jak-pestovat-cesnek-a-cibuli#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" },
        { "@type": "ListItem", "position": 3, "name": "Zahrada & terasa", "item": "https://www.domovniguru.cz/blog/kategorie/zahrada" },
        { "@type": "ListItem", "position": 4, "name": "Jak pěstovat česnek a cibuli", "item": "https://www.domovniguru.cz/blog/jak-pestovat-cesnek-a-cibuli" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.domovniguru.cz/blog/jak-pestovat-cesnek-a-cibuli#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Kdy se sází ozimý a kdy jarní česnek?", "acceptedAnswer": { "@type": "Answer", "text": "Ozimý česnek se sází v říjnu až listopadu, aby do zimy zakořenil a sklízí se v červenci. Jarní česnek se sází v březnu a sklízí v srpnu. Ozimý dává větší stroužky a lépe se skladuje, jarní má menší hlávky, ale snáší pozdější sázení." } },
        { "@type": "Question", "name": "Jak hluboko sázet česnek a cibuli?", "acceptedAnswer": { "@type": "Answer", "text": "Stroužky česneku sázej špičkou nahoru do hloubky 3–5 cm, rozestup 10–15 cm. Sadbu cibule sázej tak, aby vrcholek cibulky lehce čněl z půdy, rozestup 8–10 cm mezi rostlinami." } },
        { "@type": "Question", "name": "Je lepší sázet cibuli ze sadby, nebo sít ze semen?", "acceptedAnswer": { "@type": "Answer", "text": "Pro začátečníky je jednoznačně lepší sadba — je rychlejší, jistější a méně náchylná na výkyvy počasí. Semena vyžadují delší vegetační dobu a pečlivější péči o mladé rostliny, ale vyjdou levněji a nabízí větší výběr odrůd." } },
        { "@type": "Question", "name": "Jak poznám, že je čas na sklizeň česneku a cibule?", "acceptedAnswer": { "@type": "Answer", "text": "Hlavním signálem je zažloutnutí a polehnutí listů — u česneku zežloutne přibližně třetina až polovina listů, u cibule listy zežloutnou a polehnou k zemi téměř celé. Sklízej za suchého počasí, abys hlávky nemusel sušit od mokra." } },
        { "@type": "Question", "name": "Jak správně uskladnit česnek a cibuli po sklizni?", "acceptedAnswer": { "@type": "Answer", "text": "Po vytažení nech hlávky proschnout na vzduchu na stinném, větraném místě 1–2 týdny. Poté je zapleť do pletenců nebo ulož do síťek a skladuj na suchém, chladném místě (ideálně 0–5 °C) s dobrým větráním." } },
        { "@type": "Question", "name": "Jak zabránit plísni česnekové a cibulové mouchy?", "acceptedAnswer": { "@type": "Answer", "text": "Nejúčinnější prevencí je střídání plodin — na stejné místo sázej česnek a cibuli nejdříve po 3–4 letech. Dále pomáhá dostatečný rozestup pro proudění vzduchu, vyhýbání se přemokření a odstraňování napadených rostlin co nejdříve." } },
      ],
    },
    {
      "@type": "HowTo",
      "@id": "https://www.domovniguru.cz/blog/jak-pestovat-cesnek-a-cibuli#howto",
      "name": "Jak pěstovat česnek a cibuli na zahradě – kompletní návod 2026",
      "description": "Ozimý vs. jarní česnek, sadba vs. semena cibule, sázení, hnojení i sklizeň a uskladnění. Praktický návod krok za krokem pro celou sezónu.",
      "step": [
        { "@type": "HowToStep", "name": "Příprava půdy", "text": "Půda pro česnek a cibuli musí být propustná, s pH 6–7, a nesmí být čerstvě hnojená statkovým hnojem — hrozí riziko houbových chorob." },
        { "@type": "HowToStep", "name": "Sázení česneku", "text": "Jednotlivé stroužky sázej špičkou nahoru do hloubky 3–5 cm, rozestup 10–15 cm. Ozimý česnek v říjnu až listopadu, jarní v březnu." },
        { "@type": "HowToStep", "name": "Sázení cibule", "text": "Sadbu cibule sázej tak, aby vrcholek čněl z půdy, rozestup 8–10 cm. Sadba je pro začátečníky jistější volba než výsev ze semen." },
        { "@type": "HowToStep", "name": "Zálivka a hnojení", "text": "Oba druhy jsou málo náročné. Přehnojení dusíkem škodí — podporuje růst listů na úkor velikosti cibule a hlávky." },
        { "@type": "HowToStep", "name": "Sklizeň", "text": "Indikátorem zralosti je zažloutnutí a polehnutí listů. Sklízej za suchého počasí." },
        { "@type": "HowToStep", "name": "Sušení a uskladnění", "text": "Proschnutí na vzduchu 1–2 týdny, poté uložení do pletenců nebo síťek na suchém a chladném místě." },
      ],
    },
  ],
};

const RELATED = [
  { title: "Jak připravit zahradu na jaro – co udělat v dubnu", href: "/blog/jarni-zahrada", read: "7 min" },
  { title: "Jak pěstovat rajčata – od výsevu po sklizeň", href: "/blog/jak-pestovat-rajcata", read: "6 min" },
  { title: "Jak hnojit zahradu – organicky i minerálně", href: "/blog/jak-hnojit-zahradu", read: "6 min" },
  { title: "Bylinková zahrádka – co a jak pěstovat", href: "/blog/bylinkova-zahradka", read: "5 min" },
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
              <span>Jak pěstovat česnek a cibuli</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 7 min čtení</span>
              </div>
              <h1 className="article-h1">Jak pěstovat česnek a cibuli na zahradě – kompletní návod 2026</h1>
              <p className="article-lead">Česnek a cibule patří k nejvděčnějším plodinám na zahradě — nenáročné, odolné a téměř bezúdržbové. Tady je vše, co potřebuješ vědět od výběru sadby po sklizeň a dlouhé skladování.</p>
              <div className="article-meta-row"><span>Aktualizováno: 17. června 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/jak-pestovat-cesnek-a-cibuli" title="Jak pěstovat česnek a cibuli na zahradě – kompletní návod 2026" />
            </header>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#ozimy-vs-jarni">Ozimý vs. jarní česnek</a></li>
                <li><a href="#priprava-pudy">Příprava půdy</a></li>
                <li><a href="#sazeni-cesneku">Sázení česneku</a></li>
                <li><a href="#cibule-sadba-semena">Cibule: sadba vs. semena</a></li>
                <li><a href="#sazeni-cibule">Sázení cibule</a></li>
                <li><a href="#zaliva-hnojeni">Zálivka a hnojení</a></li>
                <li><a href="#sklizen">Sklizeň a zralost</a></li>
                <li><a href="#sklad">Sušení a uskladnění</a></li>
                <li><a href="#problemy">Nejčastější problémy</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="ozimy-vs-jarni">
              <h2>Ozimý vs. jarní česnek</h2>
              <p>Česnek se dělí na dva základní typy podle doby výsadby — a rozdíl mezi nimi je podstatný, pokud chceš velké hlávky a dlouhou skladovatelnost.</p>
              <h3>Ozimý česnek</h3>
              <p>Sází se v <strong>říjnu až listopadu</strong>, ještě před prvními mrazy, aby stroužky stihly do zimy zakořenit. Sklízí se na začátku léta, typicky v <strong>červenci</strong>. Ozimé odrůdy dávají větší a vyrovnanější hlávky se silnými stroužky a obvykle se lépe a déle skladují — vydrží i do dalšího jara.</p>
              <h3>Jarní česnek</h3>
              <p>Sází se <strong>v březnu</strong>, jakmile to počasí dovolí, a sklízí se na konci léta, kolem <strong>srpna</strong>. Hlávky bývají menší a stroužky drobnější, skladovatelnost je kratší. Jarní česnek je ale dobrou volbou, pokud jsi na podzim výsadbu nestihl, nebo pokud chceš mít na zahradě dvě sklizně rozložené v sezóně.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud máš na výběr, dej přednost ozimému česneku — ve většině podmínek ČR poskytuje větší výnos a hlávky vydrží v komoře klidně do jara.</div>
            </section>

            <section id="priprava-pudy">
              <h2>Příprava půdy pro česnek</h2>
              <p>Česnek (a stejně tak cibule) potřebuje <strong>propustnou, lehkou půdu</strong> — na těžké jílovité a zamokřené půdě hlávky hnijí a snadno se uchytí houbové choroby.</p>
              <h3>pH a struktura</h3>
              <p>Ideální pH půdy je <strong>6–7</strong>. Na kyselejších půdách (pod 6) doporučujeme přidat dolomitický vápenec několik týdnů před sázením. Půdu prokypři do hloubky 20–25 cm a odstraň kameny a zbytky kořenů plevele.</p>
              <h3>Hnojení před sázením</h3>
              <p>Důležité pravidlo: <strong>nikdy nesázej česnek do čerstvě hnojené půdy statkovým hnojem</strong> (hnůj, kompost z nezralého materiálu). Čerstvý hnůj zvyšuje riziko houbových chorob a způsobuje praskání a deformaci hlávek. Pokud chceš půdu vyživit, udělej to alespoň měsíc předem, ideálně zapracuj dobře vyzrálý kompost už na podzim před jarní výsadbou.</p>
              <p>Více o správném dávkování živin najdeš v článku <Link href="/blog/jak-hnojit-zahradu">Jak hnojit zahradu →</Link>.</p>
            </section>

            <section id="sazeni-cesneku">
              <h2>Sázení česneku – krok za krokem</h2>
              <h3>Příprava stroužků</h3>
              <p>Hlávku rozeber na jednotlivé stroužky bezprostředně před sázením — netrhej je předem. Vybírej jen velké, zdravé stroužky bez skvrn a poškození, drobné a deformované stroužky vyřaď, dávaly by malé hlávky.</p>
              <h3>Hloubka a rozestup</h3>
              <p>Stroužek sázej <strong>špičkou nahoru</strong> do hloubky <strong>3–5 cm</strong>. Rozestup mezi rostlinami nech <strong>10–15 cm</strong>, mezi řádky 25–30 cm — dostatek prostoru pro vývoj hlávky i proudění vzduchu, které snižuje riziko plísně.</p>
              <ul>
                <li><strong>Hloubka:</strong> 3–5 cm (na lehčích půdách spíše hlouběji)</li>
                <li><strong>Rozestup rostlin:</strong> 10–15 cm</li>
                <li><strong>Rozestup řádků:</strong> 25–30 cm</li>
                <li><strong>Orientace:</strong> špička stroužku vždy nahoru</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Po zasazení ozimého česneku záhon přikryj tenkou vrstvou mulče nebo slámy — ochrání stroužky před vyzimováním a vymrznutím při velmi nízkých teplotách.</div>
            </section>

            <section id="cibule-sadba-semena">
              <h2>Cibule: ze sadby vs. ze semen</h2>
              <p>U cibule máš na výběr dva způsoby založení porostu, a volba má vliv na to, jak rychle a jistě dosáhneš sklizně.</p>
              <h3>Sadba (cibulky)</h3>
              <p>Sadba jsou malé cibulky vypěstované v předchozí sezóně. Je to <strong>rychlejší a jistější volba pro začátečníky</strong> — sadba má za sebou nejnáročnější fázi růstu a na záhonu jen dorůstá do plné velikosti. Vegetační doba je kratší a riziko neúspěchu nižší.</p>
              <h3>Semena</h3>
              <p>Výsev ze semen vyžaduje delší vegetační dobu a pečlivější péči — semena je třeba zasít dříve (často už v únoru do truhlíku, nebo přímo na záhon v dubnu) a mladé rostlinky jsou citlivější na plevel a výkyvy vlhkosti. Výhodou je nižší cena a širší výběr odrůd.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pro první sezónu vždy sáhni po sadbě. Se semeny experimentuj až po té, co máš osázení a péči o cibuli zažité.</div>
            </section>

            <section id="sazeni-cibule">
              <h2>Sázení cibule – krok za krokem</h2>
              <h3>Hloubka sázení</h3>
              <p>Sadbu cibule sázej tak, aby <strong>vrcholek cibulky lehce čněl z půdy</strong> — typicky se zatlačí jen kořínková část a spodní třetina cibulky do prokypřené zeminy. Příliš hluboké zasazení zpomaluje vývoj, příliš povrchní vede k vyschnutí.</p>
              <h3>Rozestup</h3>
              <p>Mezi jednotlivými cibulkami nech <strong>8–10 cm</strong>, mezi řádky 20–25 cm. Hustší výsadba znamená menší cibule, protože si rostliny konkurují o živiny a místo.</p>
              <ul>
                <li><strong>Hloubka:</strong> vrcholek cibulky nad povrchem půdy</li>
                <li><strong>Rozestup rostlin:</strong> 8–10 cm</li>
                <li><strong>Rozestup řádků:</strong> 20–25 cm</li>
                <li><strong>Termín sázení:</strong> březen až duben, jakmile půda jde zpracovat</li>
              </ul>
            </section>

            <section id="zaliva-hnojeni">
              <h2>Zálivka a hnojení</h2>
              <p>Dobrá zpráva — česnek i cibule jsou <strong>málo náročné na péči</strong>. Po zasazení potřebují hlavně pravidelnou, ale mírnou zálivku v období sucha, zejména v prvních týdnech po výsadbě a během tvorby hlávky/cibule.</p>
              <h3>Přehnojení dusíkem škodí</h3>
              <p>Největší chybou je <strong>přehnojení dusíkem</strong>. Vysoký obsah dusíku v půdě podporuje bujný růst listů, ale na úkor velikosti samotné cibule nebo hlávky — výsledkem jsou krásné zelené natě a drobná, vodnatá úroda. Pokud hnojíš, použij hnojivo s vyváženým poměrem živin nebo s důrazem na draslík a fosfor, ne na dusík, a omez hnojení v posledních týdnech před sklizní.</p>
              <p>Zálivku omez asi 2–3 týdny před plánovanou sklizní — sušší půda pomáhá hlávkám a cibulím lépe „uzrát" a zlepšuje skladovatelnost.</p>
            </section>

            <section id="sklizen">
              <h2>Sklizeň a indikátory zralosti</h2>
              <p>Nejspolehlivějším signálem, že je čas sklízet, jsou <strong>zažloutlé a polehlé listy</strong>.</p>
              <h3>Česnek</h3>
              <p>U česneku sleduj, kdy zežloutne přibližně <strong>třetina až polovina listů</strong> — to je signál, že hlávka dosáhla své velikosti a stroužky jsou plně vyvinuté. Příliš pozdní sklizeň vede k popraskání obalových slupek a horší skladovatelnosti.</p>
              <h3>Cibule</h3>
              <p>U cibule čekej, až listy zežloutnou a <strong>téměř celé polehnou k zemi</strong> — to je jasný signál konce vegetace. Sklízej za suchého, slunečného počasí, ideálně po několika dnech beze srážek, aby hlávky/cibule nebyly vlhké a lépe se sušily.</p>
            </section>

            <section id="sklad">
              <h2>Sušení a uskladnění</h2>
              <h3>Proschnutí</h3>
              <p>Po vytažení nech česnek i cibuli <strong>proschnout na vzduchu 1–2 týdny</strong> na stinném, dobře větraném místě (kůlna, přístřešek, podkroví) — přímé slunce by hlávky spálilo. Listy a kořeny zatím neodstraňuj, dokud nejsou úplně suché.</p>
              <h3>Skladování</h3>
              <p>Po proschnutí listy zapleť do <strong>pletenců</strong> nebo hlávky/cibule ulož do <strong>síťek</strong> a zavěs nebo ulož na suché, chladné místo s dobrým větráním — ideální teplota je <strong>0–5 °C</strong>. Vyhni se plastovým sáčkům a uzavřeným nádobám, kde by se tvořila vlhkost a hlávky plesnivěly.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pravidelně kontroluj uskladněnou úrodu a vyřazuj jakoukoliv hlávku se známkami plísně nebo měknutí — jinak se nákaza rychle šíří na zbytek zásoby.</div>
            </section>

            <section id="problemy">
              <h2>Nejčastější problémy</h2>
              <h3>Plíseň česneková</h3>
              <p>Projevuje se žlutými a hnědými skvrnami na listech, které postupně odumírají, a šedavým povlakem za vlhkého počasí. Šíří se zejména v deštivých sezónách a na přehoustlých záhonech.</p>
              <h3>Cibulová mucha</h3>
              <p>Larvy cibulové mouchy napadají cibule a stroužky zevnitř, rostlina vadne a hlávka hnije. Náletu mouchy nejvíc pomáhá teplé počasí na přelomu dubna a května.</p>
              <h3>Jak problémům předejít</h3>
              <p>Nejúčinnější ochranou je <strong>střídání plodin</strong> — na stejné místo nesázej česnek ani cibuli dříve než po <strong>3–4 letech</strong>. Dále pomáhá dodržovat doporučené rozestupy pro proudění vzduchu, nepřelévat záhon a včas odstraňovat napadené rostliny, aby se nákaza nešířila dál.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Kdy se sází ozimý a kdy jarní česnek?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ozimý česnek se sází v říjnu až listopadu, aby do zimy zakořenil, a sklízí se v červenci. Jarní česnek se sází v březnu a sklízí v srpnu. Ozimý dává větší stroužky a lépe se skladuje, jarní má menší hlávky, ale snáší pozdější sázení.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak hluboko sázet česnek a cibuli?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Stroužky česneku sázej špičkou nahoru do hloubky 3–5 cm, rozestup 10–15 cm. Sadbu cibule sázej tak, aby vrcholek cibulky lehce čněl z půdy, rozestup 8–10 cm mezi rostlinami.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Je lepší sázet cibuli ze sadby, nebo sít ze semen?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Pro začátečníky je jednoznačně lepší sadba — je rychlejší, jistější a méně náchylná na výkyvy počasí. Semena vyžadují delší vegetační dobu a pečlivější péči o mladé rostliny, ale vyjdou levněji a nabízí větší výběr odrůd.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak poznám, že je čas na sklizeň česneku a cibule?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Hlavním signálem je zažloutnutí a polehnutí listů — u česneku zežloutne přibližně třetina až polovina listů, u cibule listy zežloutnou a polehnou k zemi téměř celé. Sklízej za suchého počasí, abys hlávky nemusel sušit od mokra.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak správně uskladnit česnek a cibuli po sklizni?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Po vytažení nech hlávky proschnout na vzduchu na stinném, větraném místě 1–2 týdny. Poté je zapleť do pletenců nebo ulož do síťek a skladuj na suchém, chladném místě (ideálně 0–5 °C) s dobrým větráním.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak zabránit plísni česnekové a cibulové mouchy?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Nejúčinnější prevencí je střídání plodin — na stejné místo sázej česnek a cibuli nejdříve po 3–4 letech. Dále pomáhá dostatečný rozestup pro proudění vzduchu, vyhýbání se přemokření a odstraňování napadených rostlin co nejdříve.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/jak-pestovat-cesnek-a-cibuli" title="Jak pěstovat česnek a cibuli na zahradě – kompletní návod 2026" />

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
                <li><a href="#ozimy-vs-jarni">Ozimý vs. jarní česnek</a></li>
                <li><a href="#priprava-pudy">Příprava půdy</a></li>
                <li><a href="#sazeni-cesneku">Sázení česneku</a></li>
                <li><a href="#cibule-sadba-semena">Cibule: sadba vs. semena</a></li>
                <li><a href="#sazeni-cibule">Sázení cibule</a></li>
                <li><a href="#zaliva-hnojeni">Zálivka a hnojení</a></li>
                <li><a href="#sklizen">Sklizeň a zralost</a></li>
                <li><a href="#sklad">Sušení a uskladnění</a></li>
                <li><a href="#problemy">Nejčastější problémy</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/zahrada" className="sidebar-cat-link">🌿 Zahrada & terasa<span>20 článků →</span></Link>
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
        .article-tip{background:#fff8e8;border-left:3px solid #f59e0b;border-radius:0 8px 8px 0;padding:14px 18px;font-size:14px;line-height:1.6;color:#78716c;margin:20px 0}
        .faq-list{display:flex;flex-direction:column;gap:8px;margin-top:16px}
        .faq-item{border:1px solid var(--border);border-radius:10px;overflow:hidden}
        .faq-summary{display:flex;justify-content:space-between;align-items:center;padding:14px 18px;cursor:pointer;font-size:15px;font-weight:500;color:var(--text);background:var(--surface);list-style:none;gap:12px}
        .faq-summary:hover{background:#e8e7e2}
        .faq-icon{flex-shrink:0;color:var(--muted);transition:transform 200ms;font-size:14px}
        details[open] .faq-icon{transform:rotate(180deg)}
        .faq-body{padding:14px 18px;font-size:14px;line-height:1.7;color:#4a4a48;font-weight:300;border-top:1px solid var(--border);background:#fff}
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
      `}</style>
    </>
  );
}
