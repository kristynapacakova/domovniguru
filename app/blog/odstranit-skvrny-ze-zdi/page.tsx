import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak odstranit skvrny a otisky ze zdi bez přemalování celé stěny",
  description: "Mastné skvrny, otisky rukou, fix nebo plísňové stopy na malované zdi – jak je odstranit jemným čištěním a retušováním, aniž byste museli přemalovat celou stěnu.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/odstranit-skvrny-ze-zdi" },
  openGraph: {
    title: "Jak odstranit skvrny a otisky ze zdi bez přemalování celé stěny",
    description: "Mastné skvrny, otisky rukou, fix nebo plísňové stopy na malované zdi – jak je odstranit jemným čištěním a retušováním, aniž byste museli přemalovat celou stěnu.",
    url: "https://www.domovniguru.cz/blog/odstranit-skvrny-ze-zdi",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "article",
    publishedTime: "2026-06-22T08:00:00Z",
    modifiedTime: "2026-06-22T08:00:00Z",
    authors: ["DomovniGuru"],
    images: [{ url: "/api/og?title=Jak%20odstranit%20skvrny%20a%20otisky%20ze%20zdi%20bez%20p%C5%99emalov%C3%A1n%C3%AD%20cel%C3%A9%20st%C4%9Bny&cat=blog", width: 1200, height: 630, alt: "Jak odstranit skvrny a otisky ze zdi bez přemalování celé stěny" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jak odstranit skvrny a otisky ze zdi",
    description: "Jemné čištění a retušování skvrn na malované zdi bez přemalování.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.domovniguru.cz/blog/odstranit-skvrny-ze-zdi#article",
      "headline": "Jak odstranit skvrny a otisky ze zdi bez přemalování celé stěny",
      "description": "Mastné skvrny, otisky rukou, fix nebo plísňové stopy na malované zdi – jak je odstranit jemným čištěním a retušováním, aniž byste museli přemalovat celou stěnu.",
      "datePublished": "2026-06-22T08:00:00Z",
      "dateModified": "2026-06-22T08:00:00Z",
      "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.domovniguru.cz/blog/odstranit-skvrny-ze-zdi" },
      "inLanguage": "cs",
      "keywords": ["jak odstranit skvrny ze zdi", "otisky rukou na zdi", "fix na zdi jak odstranit", "retušování barvy na zdi", "mastné skvrny na malované zdi"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.domovniguru.cz/blog/odstranit-skvrny-ze-zdi#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" },
        { "@type": "ListItem", "position": 3, "name": "Malování & barvy", "item": "https://www.domovniguru.cz/blog/kategorie/malovani" },
        { "@type": "ListItem", "position": 4, "name": "Jak odstranit skvrny a otisky ze zdi bez přemalování celé stěny", "item": "https://www.domovniguru.cz/blog/odstranit-skvrny-ze-zdi" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.domovniguru.cz/blog/odstranit-skvrny-ze-zdi#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Jak odstranit mastnou skvrnu z malované zdi?", "acceptedAnswer": { "@type": "Answer", "text": "Mastnou skvrnu nejprve otřete suchým hadříkem, aby se nerozšířila, poté ji jemně očistěte houbičkou navlhčenou ve vodě s trochou saponátu na nádobí. Otírejte krouživými pohyby od okraje skvrny směrem do středu a nakonec povrch osušte." } },
        { "@type": "Question", "name": "Jak odstranit fix nebo propisku ze zdi?", "acceptedAnswer": { "@type": "Answer", "text": "Na fix a propisku na omyvatelné malované zdi obvykle pomáhá vatový tampon namočený v bílém lihu nebo isopropylalkoholu. Otírejte jemně, bez tlaku, a vždy nejprve vyzkoušejte na nenápadném místě, zda barva alkohol snese." } },
        { "@type": "Question", "name": "Jak poznám, že skvrnu už nejde vyčistit a musím retušovat?", "acceptedAnswer": { "@type": "Answer", "text": "Pokud po jemném čištění skvrna zesvětlá, ale úplně nezmizí, nebo se v barvě objeví světlejší vymyté místo, je čas na retušování stejnou barvou. Stejně tak platí, že skvrny od plísně nebo hluboko zaschlé fixy se čištěním často jen rozmažou." } },
        { "@type": "Question", "name": "Jak správně retušovat malou plochu na zdi?", "acceptedAnswer": { "@type": "Answer", "text": "Použijte zbytek původní barvy, případně namíchejte co nejbližší odstín, a naneste ji malým štětcem v tenké vrstvě přesně na opravované místo. Okraje retuše jemně roztáhněte houbičkou, aby přechod nebyl vidět, a po zaschnutí případně přidejte druhou tenkou vrstvu." } },
        { "@type": "Question", "name": "Jak odstranit plísňovou skvrnu ze zdi?", "acceptedAnswer": { "@type": "Answer", "text": "Plíseň otřete přípravkem na odstranění plísně určeným pro interiér, dodržujte bezpečnostní pokyny a větrejte. Po ošetření a zaschnutí místo přetřete protiplísňovou barvou nebo penetrací, jinak se plíseň pravděpodobně vrátí." } },
        { "@type": "Question", "name": "Kdy se už vyplatí přemalovat celou stěnu místo retušování?", "acceptedAnswer": { "@type": "Answer", "text": "Pokud je poškozených míst na stěně víc, jsou rozptýlená po celé ploše, nebo se odstín retuše viditelně liší od okolní barvy kvůli vyšisování původního nátěru, je efektivnější přemalovat celou stěnu najednou." } },
      ],
    },
    {
      "@type": "HowTo",
      "@id": "https://www.domovniguru.cz/blog/odstranit-skvrny-ze-zdi#howto",
      "name": "Jak odstranit skvrny a otisky ze zdi bez přemalování celé stěny",
      "description": "Mastné skvrny, otisky rukou, fix nebo plísňové stopy na malované zdi – jak je odstranit jemným čištěním a retušováním, aniž byste museli přemalovat celou stěnu.",
      "step": [
        { "@type": "HowToStep", "name": "Identifikace typu skvrny", "text": "Určete, o jaký typ skvrny se jedná – mastná, otisk ruky, fix nebo plíseň – protože každá vyžaduje jiný postup čištění." },
        { "@type": "HowToStep", "name": "Jemné čištění houbou a saponátem", "text": "Skvrnu otřete houbičkou navlhčenou ve vodě se slabým saponátem, krouživými pohyby od okraje ke středu, a poté osušte." },
        { "@type": "HowToStep", "name": "Odstranění fixu bílým lihem", "text": "Na fix nebo propisku použijte vatový tampon s bílým lihem, otírejte jemně a vždy nejprve vyzkoušejte na nenápadném místě." },
        { "@type": "HowToStep", "name": "Ošetření plísně", "text": "Plísňové skvrny ošetřete vhodným přípravkem na plíseň pro interiér a po zaschnutí místo přetřete protiplísňovou barvou." },
        { "@type": "HowToStep", "name": "Retušování zbylou barvou", "text": "Pokud skvrna nezmizela úplně, naneste na místo tenkou vrstvu původní nebo namíchané barvy malým štětcem a okraje roztáhněte houbičkou." },
        { "@type": "HowToStep", "name": "Rozhodnutí o celkovém přemalování", "text": "Pokud je poškození rozsáhlé nebo retuš viditelně nesedí s okolní barvou, zvažte přemalování celé stěny." },
      ],
    },
  ],
};

const RELATED = [
  { title: "Jak malovat zeď – kompletní postup", href: "/blog/jak-malovat-zed", read: "5 min" },
  { title: "Jak vybrat barvu na zeď", href: "/blog/jak-vybrat-barvu-na-zed", read: "5 min" },
  { title: "Jak odstranit starou barvu", href: "/blog/jak-odstranit-starou-barvu", read: "5 min" },
  { title: "Nejčastější chyby při malování", href: "/blog/nejcastejsi-chyby-pri-malovani", read: "5 min" },
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
              <span>Jak odstranit skvrny a otisky ze zdi bez přemalování celé stěny</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování & barvy</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak odstranit skvrny a otisky ze zdi bez přemalování celé stěny</h1>
              <p className="article-lead">Mastný otisk ruky u vypínače, čmáranice od fixy nebo škrábanec od přesouvané skříně – takové drobné nedostatky nemusí znamenat, že je nutné sáhnout po válečku a přemalovat celou stěnu. Ve většině případů stačí trocha trpělivosti, vhodný čisticí prostředek a v krajním případě malá retuš.</p>
              <div className="article-meta-row">
                <span>Aktualizováno: 22. června 2026</span><span>·</span><span>DomovniGuru</span>
              </div>
              <ShareButtons url="https://www.domovniguru.cz/blog/odstranit-skvrny-ze-zdi" title="Jak odstranit skvrny a otisky ze zdi bez přemalování celé stěny" />
            </header>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#typy-skvrn">Jaké typy skvrn na zdi nejčastěji vznikají</a></li>
                <li><a href="#jemne-cisteni">Jemné čištění houbou a saponátem</a></li>
                <li><a href="#fix">Jak odstranit fix a propisku</a></li>
                <li><a href="#plisen">Plísňové skvrny a škrábance</a></li>
                <li><a href="#retus">Retušování stejnou barvou</a></li>
                <li><a href="#kdy-premalovat">Kdy je nutné přemalovat celou plochu</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="typy-skvrn">
              <h2>Jaké typy skvrn na zdi nejčastěji vznikají</h2>
              <p>Skvrny na zdi vznikají z různých příčin a každá vyžaduje trochu jiný přístup – co pomůže na mastnotu, nemusí zabrat na fix nebo plíseň.</p>
              <h3>Mastné skvrny a otisky rukou</h3>
              <p>Vznikají nejčastěji v okolí vypínačů, klik a v kuchyni od vaření. Mastnota se do malované plochy vsaje a postupně tmavne, takže čím dříve se jí věnujete, tím snáze ji odstraníte.</p>
              <h3>Fix, propiska a pastelky</h3>
              <p>Typické pro domácnosti s dětmi, ale objeví se i náhodně, například při stěhování nábytku. Inkoust z fixy se do barvy zatahuje hlouběji než tužka nebo pastelka, a proto bývá nejtěžší ho zcela odstranit.</p>
              <h3>Plísňové skvrny</h3>
              <p>Drobné šedé nebo černé skvrny, obvykle v rozích, za nábytkem nebo v koupelně, signalizují zvýšenou vlhkost. Na rozdíl od ostatních skvrn se zde nejedná jen o estetický problém, ale i o otázku zdravého vnitřního prostředí.</p>
              <h3>Škrábance a otřeniny</h3>
              <p>Vznikají při přesouvání nábytku nebo nárazem o ostrý předmět. Často jen odhalí podkladovou vrstvu nebo omítku, aniž by barva chybněla v hlubších vrstvách.</p>
            </section>

            <section id="jemne-cisteni">
              <h2>Jemné čištění houbou a saponátem</h2>
              <p>U většiny běžných skvrn na omyvatelné malované zdi je první volbou jemné mechanické čištění, ne hned sahání po chemii nebo retuši.</p>
              <h3>Postup čištění</h3>
              <p>Skvrnu nejprve otřete suchým hadříkem, aby se nerozetřela do okolní plochy. Poté navlhčete měkkou houbičku ve vodě s troškou saponátu na nádobí a otírejte krouživými pohyby od okraje skvrny směrem do jejího středu, ne naopak, aby se nešířila dál.</p>
              <h3>Na jaký typ barvy čištění funguje</h3>
              <p>Tento postup je vhodný především pro omyvatelné nebo otěruvzdorné interiérové barvy, které jsou na to přímo určené. Na matné a méně odolné barvy, zejména levnější interiérové nátěry, je třeba čistit velmi opatrně a netřít příliš silně, jinak hrozí, že se setře i samotná barva.</p>
              <h3>Po vyčištění</h3>
              <p>Plochu po vyčištění vždy osušte čistým suchým hadříkem. Pokud zůstal viditelný vlhký kruh, počkejte, až zcela oschne, než zhodnotíte, jak skvrna dopadla – vlhká plocha může vypadat tmavší a zkreslovat výsledek.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Před čištěním vždy vyzkoušejte zvolený přípravek na nenápadném místě, například v rohu za nábytkem, abyste se ujistili, že barva čištění bez problémů snese.</div>
            </section>

            <section id="fix">
              <h2>Jak odstranit fix a propisku ze zdi</h2>
              <p>Inkoust z popisovačů se zatahuje hlouběji do nátěru než běžná mastnota, a proto na něj samotná voda se saponátem často nestačí.</p>
              <h3>Bílý líh jako osvědčené řešení</h3>
              <p>Na omyvatelných malovaných plochách obvykle dobře funguje vatový tampon namočený v bílém lihu nebo isopropylalkoholu. Otírejte jemně, bez tlaku, krátkými tahy, a tampon často měňte, aby se inkoust nerozmazával dál po stěně.</p>
              <h3>Postupné odstraňování</h3>
              <p>U starších nebo hlouběji zaschlých skvrn nepočítejte s tím, že fix zmizí na první otření. Postupujte v několika krátkých kolech s čerstvým tamponem, místo intenzivního dření na jednom místě, které by mohlo barvu poškodit.</p>
              <h3>Co dělat, když fix nejde úplně odstranit</h3>
              <p>Pokud po lihu zůstane jen slabý stín, nechte plochu oschnout a posuďte, jestli stín v běžném světle vadí. Pokud ano, přechází se k retušování stejnou barvou na malé ploše.</p>
            </section>

            <section id="plisen">
              <h2>Plísňové skvrny a škrábance</h2>
              <p>Tyto dva typy poškození se řeší odlišně od běžných skvrn, protože u plísně jde primárně o odstranění příčiny, ne jen viditelné stopy.</p>
              <h3>Ošetření plísně</h3>
              <ul>
                <li><strong>Aplikace přípravku</strong> – použijte prostředek na odstranění plísně určený pro interiér, dodržujte návod a dostatečně větrejte</li>
                <li><strong>Zjištění příčiny</strong> – zkontrolujte, zda v místě nedochází ke kondenzaci vlhkosti nebo zatékání, jinak se plíseň brzy vrátí</li>
                <li><strong>Ochranný nátěr</strong> – po zaschnutí místo přetřete penetrací s protiplísňovým účinkem, případně speciální protiplísňovou barvou</li>
              </ul>
              <h3>Oprava škrábanců</h3>
              <p>Drobné škrábance, které neodhalily holou omítku, často stačí jemně přetřít barvou stejného odstínu malým štětcem. Pokud škrábanec zasahuje až do omítky nebo sádrokartonu, je třeba ho nejprve vyplnit tmelem a po zaschnutí přebrousit do roviny, než se přistoupí k retuši.</p>
            </section>

            <section id="retus">
              <h2>Retušování stejnou barvou na malou plochu</h2>
              <p>Pokud čištění skvrnu zcela neodstranilo nebo po opravě škrábance zůstalo světlejší místo, je retuš nejrychlejším řešením, jak se vyhnout přemalování celé stěny.</p>
              <h3>Příprava barvy na retuš</h3>
              <p>Ideální je použít zbytek původní barvy, kterou jste si po malování stěny uschovali. Pokud barva chybí, zkuste ji namíchat co nejblíže původnímu odstínu nebo nechte odstín naskenovat a namíchat v obchodě s barvami.</p>
              <h3>Technika nanášení retuše</h3>
              <p>Barvu naneste malým štětcem v tenké vrstvě přesně na opravované místo, bez přetahování za okraje. Po nanesení okraje jemně roztáhněte čistou houbičkou nebo houbičkovým štětcem, aby přechod mezi retuší a okolní plochou nebyl příliš ostrý.</p>
              <h3>Druhá vrstva a dosušení</h3>
              <p>Po zaschnutí první vrstvy zkontrolujte, jestli retuš dostatečně kryje. Pokud místo ještě prosvítá, přidejte druhou tenkou vrstvu. Barvy obecně po zaschnutí mírně změní odstín, proto hodnoťte výsledek až po úplném zaschnutí, ne na mokré barvě.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Retuš bude méně viditelná, pokud ji aplikujete v nepravidelném, rozmazaném tvaru spíš než v ostrém čtverci nebo kruhu – ostré hrany retuše totiž oko snadněji rozliší od okolní plochy.</div>
            </section>

            <section id="kdy-premalovat">
              <h2>Kdy je nutné přemalovat celou plochu</h2>
              <p>Retušování má své limity a v některých případech je efektivnější a rychlejší přemalovat celou stěnu najednou.</p>
              <h3>Rozsáhlé nebo rozptýlené poškození</h3>
              <p>Pokud je na stěně víc skvrn nebo škrábanců rozptýlených po celé ploše, vychází retušování jednotlivých míst časově i nákladově hůř než kompletní přemalování.</p>
              <h3>Vyšisovaný původní nátěr</h3>
              <p>Starší nátěry, které byly delší dobu vystaveny slunci, mohou mít jiný odstín než čerstvá barva ze stejné plechovky. V takovém případě bude retuš i přes stejnou barvu viditelně světlejší nebo tmavší než okolí, a lepším řešením je přemalovat celou stěnu.</p>
              <h3>Poškození podkladu</h3>
              <p>Pokud skvrna prosakuje skrz více vrstev, jako je tomu u starších zatečení nebo nikotinových skvrn, retuš barvu znovu prosytí a problém se objeví znovu. Zde je nutné místo nejprve ošetřit izolačním nátěrem proti prosakování skvrn a teprve potom přetřít.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jak odstranit mastnou skvrnu z malované zdi?", a: "Mastnou skvrnu nejprve otřete suchým hadříkem, aby se nerozšířila, poté ji jemně očistěte houbičkou navlhčenou ve vodě s trochou saponátu na nádobí. Otírejte krouživými pohyby od okraje skvrny směrem do středu a nakonec povrch osušte." },
                  { q: "Jak odstranit fix nebo propisku ze zdi?", a: "Na fix a propisku na omyvatelné malované zdi obvykle pomáhá vatový tampon namočený v bílém lihu nebo isopropylalkoholu. Otírejte jemně, bez tlaku, a vždy nejprve vyzkoušejte na nenápadném místě, zda barva alkohol snese." },
                  { q: "Jak poznám, že skvrnu už nejde vyčistit a musím retušovat?", a: "Pokud po jemném čištění skvrna zesvětlá, ale úplně nezmizí, nebo se v barvě objeví světlejší vymyté místo, je čas na retušování stejnou barvou. Stejně tak platí, že skvrny od plísně nebo hluboko zaschlé fixy se čištěním často jen rozmažou." },
                  { q: "Jak správně retušovat malou plochu na zdi?", a: "Použijte zbytek původní barvy, případně namíchejte co nejbližší odstín, a naneste ji malým štětcem v tenké vrstvě přesně na opravované místo. Okraje retuše jemně roztáhněte houbičkou, aby přechod nebyl vidět, a po zaschnutí případně přidejte druhou tenkou vrstvu." },
                  { q: "Jak odstranit plísňovou skvrnu ze zdi?", a: "Plíseň otřete přípravkem na odstranění plísně určeným pro interiér, dodržujte bezpečnostní pokyny a větrejte. Po ošetření a zaschnutí místo přetřete protiplísňovou barvou nebo penetrací, jinak se plíseň pravděpodobně vrátí." },
                  { q: "Kdy se už vyplatí přemalovat celou stěnu místo retušování?", a: "Pokud je poškozených míst na stěně víc, jsou rozptýlená po celé ploše, nebo se odstín retuše viditelně liší od okolní barvy kvůli vyšisování původního nátěru, je efektivnější přemalovat celou stěnu najednou." },
                ].map(({ q, a }) => (
                  <details key={q} className="faq-item">
                    <summary className="faq-summary">{q}<span className="faq-icon">▾</span></summary>
                    <div className="faq-body">{a}</div>
                  </details>
                ))}
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/odstranit-skvrny-ze-zdi" title="Jak odstranit skvrny a otisky ze zdi bez přemalování celé stěny" />

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
                <li><a href="#typy-skvrn">Typy skvrn na zdi</a></li>
                <li><a href="#jemne-cisteni">Jemné čištění</a></li>
                <li><a href="#fix">Odstranění fixu</a></li>
                <li><a href="#plisen">Plíseň a škrábance</a></li>
                <li><a href="#retus">Retušování barvou</a></li>
                <li><a href="#kdy-premalovat">Kdy přemalovat celou plochu</a></li>
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
