import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Křídová barva na nábytek – postup pro vintage look 2026",
  description: "Jak natřít starý nábytek křídovou barvou bez broušení a penetrace. Postup krok za krokem, vintage efekt, voskování a typické chyby.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/kridova-barva-na-nabytek-postup" },
  openGraph: {
    title: "Křídová barva na nábytek – postup pro vintage look 2026",
    description: "Jak natřít starý nábytek křídovou barvou bez broušení a penetrace. Postup krok za krokem, vintage efekt, voskování a typické chyby.",
    url: "https://www.domovniguru.cz/blog/kridova-barva-na-nabytek-postup",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "article",
    publishedTime: "2026-06-17T08:00:00Z",
    modifiedTime: "2026-06-17T08:00:00Z",
    authors: ["DomovniGuru"],
    images: [{ url: "/api/og?title=K%C5%99%C3%ADdov%C3%A1%20barva%20na%20n%C3%A1bytek%20%E2%80%93%20postup%20pro%20vintage%20look%202026&cat=blog", width: 1200, height: 630, alt: "Křídová barva na nábytek – postup pro vintage look 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Křídová barva na nábytek – postup pro vintage look 2026",
    description: "Jak natřít starý nábytek křídovou barvou bez broušení a penetrace. Postup krok za krokem, vintage efekt a voskování.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.domovniguru.cz/blog/kridova-barva-na-nabytek-postup#article",
      "headline": "Křídová barva na nábytek – postup pro vintage look 2026",
      "description": "Jak natřít starý nábytek křídovou barvou bez broušení a penetrace. Postup krok za krokem, vintage efekt, voskování a typické chyby.",
      "datePublished": "2026-06-17T08:00:00Z",
      "dateModified": "2026-06-17T08:00:00Z",
      "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.domovniguru.cz/blog/kridova-barva-na-nabytek-postup" },
      "inLanguage": "cs",
      "keywords": ["křídová barva na nábytek", "chalk paint postup", "vintage nábytek barva", "jak natřít starý nábytek", "voskování nábytku"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.domovniguru.cz/blog/kridova-barva-na-nabytek-postup#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" },
        { "@type": "ListItem", "position": 3, "name": "Malování & barvy", "item": "https://www.domovniguru.cz/blog/kategorie/malovani" },
        { "@type": "ListItem", "position": 4, "name": "Křídová barva na nábytek", "item": "https://www.domovniguru.cz/blog/kridova-barva-na-nabytek-postup" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.domovniguru.cz/blog/kridova-barva-na-nabytek-postup#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Musím nábytek před křídovou barvou brousit?", "acceptedAnswer": { "@type": "Answer", "text": "Většinou ne. Křídová barva je navržena tak, aby přilnula i na lak, politúru nebo starý nátěr bez broušení a penetrace. Lehké přebroušení (zrnitost 220) se hodí jen na mastné nebo extrémně lesklé povrchy." } },
        { "@type": "Question", "name": "Kolik vrstev křídové barvy je potřeba?", "acceptedAnswer": { "@type": "Answer", "text": "Standardně 2 vrstvy. Mezi vrstvami nechte zaschnout 1–2 hodiny. Na tmavý podklad může být potřeba i třetí tenká vrstva." } },
        { "@type": "Question", "name": "Jak udělat vintage / shabby chic efekt?", "acceptedAnswer": { "@type": "Answer", "text": "Po úplném zaschnutí barvy lehce přebrušte hrany, rohy a místa s přirozeným opotřebením brusným papírem nebo houbičkou. Odhalíte tak podklad nebo spodní vrstvu barvy a vznikne přirozeně opotřebovaný vzhled." } },
        { "@type": "Question", "name": "Musím nábytek po křídové barvě voskovat?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, vosk je nutná finální ochrana. Křídová barva je matná a porézní, bez vosku nebo čirého laku se snadno špiní a otírá. Vosk naneste měkkým voskovacím kartáčem a před používáním nábytku počkejte alespoň 24 hodin." } },
        { "@type": "Question", "name": "Je křídová barva odolná vůči vodě a otěru?", "acceptedAnswer": { "@type": "Answer", "text": "Sama o sobě ne – je matná a méně odolná než klasický lak. Po zavoskování nebo přelakování čirým lakem ale zvládne běžné denní používání, otírání i drobné stříkance." } },
        { "@type": "Question", "name": "Je křídová barva levnější než klasické lakování nábytku?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, vychází levněji. Odpadá penetrace, broušení celé plochy i drahý lak – stačí barva, štětec a vosk. Na běžnou komodu nebo židli ušetříte i přes 50 % nákladů i času oproti klasickému lakování." } },
      ],
    },
    {
      "@type": "HowTo",
      "@id": "https://www.domovniguru.cz/blog/kridova-barva-na-nabytek-postup#howto",
      "name": "Křídová barva na nábytek – postup pro vintage look",
      "description": "Jak natřít starý nábytek křídovou barvou bez broušení a penetrace. Postup krok za krokem, vintage efekt, voskování a typické chyby.",
      "step": [
        { "@type": "HowToStep", "name": "Očištění povrchu", "text": "Nábytek omyjte vlhkým hadrem s trochou saponátu, odmastěte mastná místa a počkejte, až povrch zcela oschne." },
        { "@type": "HowToStep", "name": "Případné lehké přebroušení", "text": "Pouze na mastné nebo velmi lesklé povrchy lehce přejděte brusným papírem zrnitosti 220, abyste narušili lesk. Na běžný lak ani politúru broušení potřeba není." },
        { "@type": "HowToStep", "name": "První vrstva křídové barvy", "text": "Přírodním štětcem naneste první vrstvu tahy v jednom směru. Nechte zaschnout 1–2 hodiny." },
        { "@type": "HowToStep", "name": "Druhá vrstva křídové barvy", "text": "Naneste druhou vrstvu stejným způsobem, opět tahy v jednom směru, a nechte zaschnout." },
        { "@type": "HowToStep", "name": "Vintage efekt broušením hran", "text": "Po zaschnutí lehce přebruste hrany a rohy, abyste odhalili podklad a vytvořili přirozeně opotřebený vintage vzhled." },
        { "@type": "HowToStep", "name": "Voskování jako finální ochrana", "text": "Naneste měkkým voskovacím kartáčem vrstvu vosku po celém povrchu. Před používáním nábytku počkejte alespoň 24 hodin, než vosk zcela zatvrdne." }
      ],
    }
  ],
};

const RELATED = [
  { title: "Jak malovat nábytek a dveře", href: "/blog/jak-malovat-nabytek-a-dvere", read: "5 min" },
  { title: "Výběr štětců a válečků", href: "/blog/vyber-stetcu-a-valecku", read: "4 min" },
  { title: "Efektové barvy a techniky", href: "/blog/efektove-barvy-techniky", read: "6 min" },
  { title: "Jak odstranit starou barvu", href: "/blog/jak-odstranit-starou-barvu", read: "5 min" },
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
              <Link href="/blog/kategorie/malovani">Malování & barvy</Link><span className="breadcrumb-sep">/</span>
              <span>Křídová barva na nábytek</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování & barvy</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Křídová barva na nábytek – postup pro vintage look</h1>
              <p className="article-lead">Starou komodu, židli nebo skříňku můžeš proměnit za víkend bez broušení, penetrace a bez lakýrnické dílny. Křídová (chalk) barva přilne i na lak a politúru a vintage efekt zvládneš i jako úplný začátečník.</p>
              <div className="article-meta-row">
                <span>Aktualizováno: 17. června 2026</span><span>·</span><span>DomovniGuru</span>
              </div>
              <ShareButtons url="https://www.domovniguru.cz/blog/kridova-barva-na-nabytek-postup" title="Křídová barva na nábytek – postup pro vintage look 2026" />
            </header>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#co-je-kridova-barva">Co je křídová barva a proč se hodí na starý nábytek</a></li>
                <li><a href="#brouseni">Kdy broušení potřeba je a kdy ne</a></li>
                <li><a href="#postup">Postup krok za krokem</a></li>
                <li><a href="#vintage-efekt">Vintage / shabby chic efekt</a></li>
                <li><a href="#voskovani">Voskování jako finální ochrana</a></li>
                <li><a href="#udrzba">Údržba a odolnost</a></li>
                <li><a href="#chyby-a-cena">Typické chyby a cenové srovnání</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="co-je-kridova-barva">
              <h2>Co je křídová barva a proč se hodí na starý nábytek</h2>
              <p>Křídová barva (anglicky <strong>chalk paint</strong>) je matná dekorativní barva s velmi vysokým obsahem pigmentu a křídového plniva. Díky tomu má hutnou, sametovou texturu a po zaschnutí vytváří charakteristický matný, „křídový" povrch bez lesku.</p>
              <p>Hlavní důvod, proč je tak oblíbená na renovaci starého nábytku, je <strong>minimální příprava</strong>. Na rozdíl od klasického lakování přilne přímo na lak, politúru, mořidlo nebo starý nátěr – bez broušení celé plochy a bez penetrace. Molekuly barvy se mechanicky „zachytí" na hladkém povrchu i bez chemického podkladu, což renovaci zkrátí z víkendové akce na pár hodin práce.</p>
              <p>Křídová barva se proto hodí ideálně na:</p>
              <ul>
                <li>Starší komody, skříně a prádelníky s politúrou nebo lakem</li>
                <li>Židle a stoly s viditelnými škrábanci, kde by broušení trvalo hodiny</li>
                <li>Nábytek, který chceš rychle „oživit" do vintage nebo shabby chic stylu</li>
                <li>Kusy s detaily, výřezy a profilovanými hranami, kde se brousí těžko</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Křídová barva drží velmi dobře i na kovových kování a úchytkách – nemusíš je před natíráním demontovat, pokud nechceš zachovat originální vzhled kovu.</div>
            </section>

            <section id="brouseni">
              <h2>Kdy broušení potřeba je a kdy ne</h2>
              <h3>Kdy broušení nepotřebuješ</h3>
              <p>Pokud je povrch nábytku matný nebo jen mírně lesklý lak, politúra v dobrém stavu nebo starší nátěr, broušení ani penetraci nepotřebuješ. Stačí povrch důkladně očistit od prachu a mastnoty a může se rovnou natírat.</p>
              <h3>Kdy je lehké přebroušení nutné</h3>
              <p>Výjimkou jsou <strong>mastné nebo extrémně lesklé povrchy</strong> – typicky čerstvě lakovaný nábytek s vysokým gloss leskem nebo plochy v kuchyni zasažené mastnotou z vaření. V takovém případě lehce přebrus celou plochu brusným papírem o <strong>zrnitosti 220</strong>. Cílem není odstranit starý nátěr, jen narušit lesklý povrch, aby na něm barva lépe „chytla".</p>
              <h3>Jak rychle poznáš, jestli je broušení potřeba</h3>
              <ul>
                <li>Přejeď dlaní po povrchu – pokud je lepkavý nebo mastný, je potřeba odmastit, případně přebrousit</li>
                <li>Pokud se na lesklém povrchu zrcadlí světlo jako v zrcadle, doporučujeme jemné přebroušení</li>
                <li>Matný nebo jen lehce lesklý povrch v pořádku – broušení přeskoč</li>
              </ul>
            </section>

            <section id="postup">
              <h2>Postup krok za krokem</h2>
              <h3>1. Očištění povrchu</h3>
              <p>Nábytek omyj vlhkým hadrem s trochou saponátu nebo odmašťovače, odstraň prach a mastná místa. Před dalším krokem počkej, až povrch zcela oschne – ideálně alespoň 30 minut.</p>
              <h3>2. Případné lehké přebroušení</h3>
              <p>Pokud je povrch mastný nebo extrémně lesklý (viz sekce výše), přebrus zrnitostí 220 a otřete prach suchým nebo lehce vlhkým hadrem. Na běžný lak nebo politúru tento krok vynechej.</p>
              <h3>3. První vrstva křídové barvy</h3>
              <p>Použij přírodní štětec – díky přirozeným vláknům barva lépe kryje a nezanechává plastové stopy. Naneš tahy <strong>v jednom směru</strong> (například po směru dřevěného vlákna), nesnažíme se barvu „rozetřít" jako lak. Křídová barva je hutná a kryje i v jedné tenké vrstvě poměrně dobře.</p>
              <h3>4. Zaschnutí mezi vrstvami</h3>
              <p>Nech první vrstvu zaschnout <strong>1–2 hodiny</strong> při pokojové teplotě. Křídová barva schne rychle díky nízkému obsahu vody, ale nezkracuj čas zaschnutí – druhá vrstva na nedoschlý podklad by se mohla „rolovat".</p>
              <h3>5. Druhá vrstva</h3>
              <p>Naneš druhou vrstvu stejným způsobem, znovu tahy v jednom směru. Dvě vrstvy obvykle stačí na rovnoměrné krytí. Na velmi tmavý podklad (např. tmavě mořené dřevo) může být potřeba i tenká třetí vrstva.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Štětec mezi vrstvami nemusíš čistit – jen ho zabal do potravinové fólie nebo vlhkého hadříku, aby nezaschl, a po pár hodinách pokračuj.</div>
            </section>

            <section id="vintage-efekt">
              <h2>Vintage / shabby chic efekt</h2>
              <p>Typický vintage vzhled křídové barvy vzniká právě <strong>broušením hran po zaschnutí</strong>. Po úplném zaschnutí obou vrstev (počkej minimálně 24 hodin) vezmi jemný brusný papír nebo brusnou houbičku a lehce přejeď hrany, rohy, výřezy a místa, kde by se nábytek přirozeně používáním otíral.</p>
              <h3>Jak na to v praxi</h3>
              <ul>
                <li>Bruš jen lehkým tlakem a krátkými tahy – cílem je odhalit podklad, ne ho prodřít skrz</li>
                <li>Soustřeď se na hrany, rohy zásuvek, úchytky a místa s přirozeným opotřebením</li>
                <li>Pokud chceš výraznější kontrast, nanes pod křídovou barvu nejprve odlišně zbarvenou spodní vrstvu – po přebroušení vrchní vrstvy se objeví barevný „podklad"</li>
              </ul>
              <p>Po přebroušení otři povrch suchým hadrem od prachu – a nábytek je připravený na finální voskování.</p>
            </section>

            <section id="voskovani">
              <h2>Voskování jako finální ochrana</h2>
              <p>Křídová barva sama o sobě je matná, porézní a nechráněná – proto je voskování posledním a nezbytným krokem. Vosk povrch utěsní, dodá mu jemný hedvábný lesk a výrazně zvýší odolnost vůči otěru a vlhkosti.</p>
              <h3>Jak voskovat</h3>
              <p>Použij <strong>měkký voskovací kartáč</strong> (case štětec se speciálně tuhými, ale jemnými vlákny) nebo měkký hadřík. Vosk naneš v tenké vrstvě po celém povrchu krouživými pohyby, přebytek setřeš čistým hadříkem ještě před zaschnutím.</p>
              <h3>Doba zaschnutí</h3>
              <p>Po nanesení vosku nech nábytek zaschnout alespoň <strong>24 hodin</strong>, než ho začneš běžně používat – teprve poté vosk plně zatvrdne a poskytuje očekávanou ochranu. Na velmi exponované plochy (deska stolu, sedák židle) můžeš po prvním zaschnutí nanést druhou vrstvu vosku pro vyšší odolnost.</p>
            </section>

            <section id="udrzba">
              <h2>Údržba a odolnost</h2>
              <p>Křídová barva je matná a sama o sobě <strong>méně odolná vůči vodě a otěru</strong> než klasický lak. Bez ochranné vrstvy se snadno zašpiní, otírá a může na ní zůstávat otisky prstů nebo skvrny od vlhka.</p>
              <p>Proto je nutné nábytek navrch ošetřit buď voskem (viz výše), nebo <strong>čirým lakem</strong>, pokud potřebuješ vyšší odolnost – typicky u jídelních stolů, dětského nábytku nebo kuchyňských ploch, kde hrozí častý kontakt s vodou.</p>
              <p>Běžnou údržbu pak zajistí jen otření suchým nebo lehce vlhkým hadrem. Při zavoskovaném povrchu lze jednou za rok vosk obnovit novou tenkou vrstvou, čímž ochranu i vzhled „oživíš".</p>
            </section>

            <section id="chyby-a-cena">
              <h2>Typické chyby a cenové srovnání</h2>
              <h3>Příliš silná vrstva</h3>
              <p>Nejčastější chyba je nanesení jedné příliš silné vrstvy barvy místo dvou tenčích. Výsledkem jsou kapky, stékance a nerovnoměrné zaschnutí. Vždy je lepší natřít dvě tenké vrstvy než jednu silnou.</p>
              <h3>Vynechání vosku</h3>
              <p>Druhou nejčastější chybou je přeskočení finálního voskování „protože barva už vypadá hotová". Bez vosku se nábytek brzy špiní, otírá a ztrácí barvu na exponovaných místech – vosk je nutná, ne kosmetická, součást postupu.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Krok</th><th>Křídová barva</th><th>Klasické lakování</th></tr></thead>
                  <tbody>
                    <tr><td>Broušení</td><td>Většinou ne</td><td>✅ Vždy celá plocha</td></tr>
                    <tr><td>Penetrace</td><td>Ne</td><td>✅ Často nutná</td></tr>
                    <tr><td>Počet vrstev</td><td>2 + vosk</td><td>2–3 vrstvy laku</td></tr>
                    <tr><td>Čas práce</td><td>Cca 1 den</td><td>2–3 dny</td></tr>
                    <tr><td>Orientační náklady na komodu</td><td>300–500 Kč</td><td>700–1 200 Kč</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Díky vynechání broušení, penetrace a drahého laku vychází renovace křídovou barvou výrazně levněji a rychleji – na běžné komodě nebo židli ušetříš klidně přes <strong>50 % času i nákladů</strong> oproti klasickému lakování.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Musím nábytek před křídovou barvou brousit?", a: "Většinou ne. Křídová barva je navržena tak, aby přilnula i na lak, politúru nebo starý nátěr bez broušení a penetrace. Lehké přebroušení (zrnitost 220) se hodí jen na mastné nebo extrémně lesklé povrchy." },
                  { q: "Kolik vrstev křídové barvy je potřeba?", a: "Standardně 2 vrstvy. Mezi vrstvami nechte zaschnout 1–2 hodiny. Na tmavý podklad může být potřeba i třetí tenká vrstva." },
                  { q: "Jak udělat vintage / shabby chic efekt?", a: "Po úplném zaschnutí barvy lehce přebrušte hrany, rohy a místa s přirozeným opotřebením brusným papírem nebo houbičkou. Odhalíte tak podklad nebo spodní vrstvu barvy a vznikne přirozeně opotřebovaný vzhled." },
                  { q: "Musím nábytek po křídové barvě voskovat?", a: "Ano, vosk je nutná finální ochrana. Křídová barva je matná a porézní, bez vosku nebo čirého laku se snadno špiní a otírá. Vosk naneste měkkým voskovacím kartáčem a před používáním nábytku počkejte alespoň 24 hodin." },
                  { q: "Je křídová barva odolná vůči vodě a otěru?", a: "Sama o sobě ne – je matná a méně odolná než klasický lak. Po zavoskování nebo přelakování čirým lakem ale zvládne běžné denní používání, otírání i drobné stříkance." },
                  { q: "Je křídová barva levnější než klasické lakování nábytku?", a: "Ano, vychází levněji. Odpadá penetrace, broušení celé plochy i drahý lak – stačí barva, štětec a vosk. Na běžnou komodu nebo židli ušetříte i přes 50 % nákladů i času oproti klasickému lakování." },
                ].map(({ q, a }) => (
                  <details key={q} className="faq-item">
                    <summary className="faq-summary">{q}<span className="faq-icon">▾</span></summary>
                    <div className="faq-body">{a}</div>
                  </details>
                ))}
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/kridova-barva-na-nabytek-postup" title="Křídová barva na nábytek – postup pro vintage look 2026" />

            <section className="related-section">
              <h2>Související články</h2>
              <div className="related-grid">
                {RELATED.map((r) => (
                  <Link key={r.href} href={r.href} className="card">
                    <div className="card-eyebrow-row"><span>Malování & barvy</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#co-je-kridova-barva">Co je křídová barva</a></li>
                <li><a href="#brouseni">Broušení – kdy a kdy ne</a></li>
                <li><a href="#postup">Postup krok za krokem</a></li>
                <li><a href="#vintage-efekt">Vintage efekt</a></li>
                <li><a href="#voskovani">Voskování</a></li>
                <li><a href="#udrzba">Údržba a odolnost</a></li>
                <li><a href="#chyby-a-cena">Chyby a cena</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/malovani" className="sidebar-cat-link">🎨 Malování & barvy<span>Více článků →</span></Link>
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
        .article-tip{background:#fffbeb;border-left:3px solid #f59e0b;border-radius:0 8px 8px 0;padding:14px 18px;font-size:14px;line-height:1.6;color:#78716c;margin:20px 0}
        .article-table-wrap{overflow-x:auto;margin:16px 0 24px}
        .article-table{width:100%;border-collapse:collapse;font-size:14px;line-height:1.5}
        .article-table th{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);padding:10px 14px;text-align:left;border-bottom:2px solid var(--border);background:var(--surface)}
        .article-table td{padding:10px 14px;border-bottom:1px solid var(--border);vertical-align:top;color:#2a2a28;font-weight:300}
        .article-table tr:last-child td{border-bottom:none}
        .faq-list{display:flex;flex-direction:column;gap:8px}
        .faq-item{border:1px solid var(--border);border-radius:10px;overflow:hidden;background:#fff}
        .faq-summary{font-size:15px;font-weight:600;padding:16px 20px;cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center;transition:background 120ms}
        .faq-summary:hover{background:var(--surface)}
        .faq-icon{font-size:14px;font-weight:400;flex-shrink:0;margin-left:12px;transition:transform 150ms}
        details[open] .faq-icon{transform:rotate(180deg)}
        .faq-body{font-size:14px;line-height:1.65;color:var(--muted);font-weight:300;padding:0 20px 16px}
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
        @media(max-width:600px){.article-layout{padding:32px 0 60px}}
      `}</style>
    </>
  );
}
