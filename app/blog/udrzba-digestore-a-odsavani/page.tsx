import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Údržba digestoře a odsávání v kuchyni",
  description: "Čištění tukových filtrů, výměna uhlíkového filtru, kontrola potrubí a zpětné klapky. Jak udržet digestoř funkční a bezpečnou.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/udrzba-digestore-a-odsavani" },
  openGraph: { title: "Údržba digestoře a odsávání v kuchyni", description: "Čištění tukových filtrů, výměna uhlíkového filtru, kontrola potrubí a zpětné klapky. Jak udržet digestoř funkční a bezpečnou.", url: "https://www.domovniguru.cz/blog/udrzba-digestore-a-odsavani", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-25T08:00:00Z", modifiedTime: "2026-06-25T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=%C3%9Adr%C5%BEba%20digesto%C5%99e%20a%20ods%C3%A1v%C3%A1n%C3%AD%20v%20kuchyni&cat=blog", width: 1200, height: 630, alt: "Údržba digestoře a odsávání v kuchyni" }] },
  twitter: { card: "summary_large_image", title: "Údržba digestoře a odsávání v kuchyni", description: "Čištění tukových filtrů, výměna uhlíkového filtru, kontrola potrubí a zpětné klapky. Jak udržet digestoř funkční a bezpečnou." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/udrzba-digestore-a-odsavani#article", "headline": "Údržba digestoře a odsávání v kuchyni", "datePublished": "2026-06-25T08:00:00Z", "dateModified": "2026-06-25T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["údržba digestoře", "čištění tukového filtru", "uhlíkový filtr digestoř", "odsávání v kuchyni", "cirkulační digestoř", "ucpaná digestoř"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Sezónní údržba", "item": "https://www.domovniguru.cz/blog/kategorie/sezonni-udrzba" }, { "@type": "ListItem", "position": 4, "name": "Údržba digestoře a odsávání", "item": "https://www.domovniguru.cz/blog/udrzba-digestore-a-odsavani" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jak často mám čistit tukový filtr digestoře?", "acceptedAnswer": { "@type": "Answer", "text": "Tukový kovový filtr by se měl čistit jednou za 2–4 týdny při běžném vaření, u domácností, kde se vaří denně a často smaží, klidně každé 1–2 týdny. Filtr lze prát v myčce nebo ručně horkou vodou se saponátem na tuk." } }, { "@type": "Question", "name": "Jak často se vyměňuje uhlíkový filtr v digestoři?", "acceptedAnswer": { "@type": "Answer", "text": "Uhlíkový filtr u cirkulačních (recirkulačních) digestořů se vyměňuje přibližně každé 3–6 měsíců podle intenzity vaření, protože aktivní uhlí postupně ztrácí schopnost pohlcovat pachy a nelze ho vyprat ani regenerovat." } }, { "@type": "Question", "name": "Jaký je rozdíl mezi odsávací a cirkulační digestoří?", "acceptedAnswer": { "@type": "Answer", "text": "Odsávací (odtahová) digestoř vede vzduch potrubím ven z budovy a je účinnější, protože pachy a vlhkost odvádí mimo kuchyň. Cirkulační (recirkulační) digestoř vzduch jen filtruje přes tukový a uhlíkový filtr a vrací ho zpět do místnosti, hodí se tam, kde nelze vyvést potrubí ven." } }, { "@type": "Question", "name": "Jak poznám, že je digestoř nebo potrubí ucpané?", "acceptedAnswer": { "@type": "Answer", "text": "Typické příznaky jsou přetrvávající zápach jídla v kuchyni i hodiny po vaření, kondenzace a mastný film na kuchyňské lince a oknech, slabší tah i na nejvyšší rychlostní stupeň a hlučnější chod motoru, který se snaží překonat odpor v ucpaném potrubí." } }, { "@type": "Question", "name": "Je zanesený tukový filtr požárně nebezpečný?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, vrstva ztuhlého tuku ve filtru je hořlavá a při vyšší teplotě (například při flambování nebo prudkém smažení) se může vznítit. Pravidelné čištění filtru je proto nejen otázkou účinnosti odsávání, ale i základní požární prevencí v kuchyni." } }] }] };

const RELATED = [
  { title: "Jak pečovat o ledničku a mrazák", href: "/blog/jak-pecovat-o-lednici-a-mrazak", read: "4 min" },
  { title: "Jak udržovat myčku nádobí v dobrém stavu", href: "/blog/jak-udrzovat-mycku-nadobi", read: "4 min" },
  { title: "Jak správně větrat byt", href: "/blog/spravne-vetrat-byt", read: "4 min" },
  { title: "Údržba rekuperace a ventilace", href: "/blog/udrzba-rekuperace-a-ventilace", read: "5 min" },
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
              <span>Údržba digestoře a odsávání</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">❄️ Sezónní údržba</Link>
                <span className="article-read-time">⏱ 4 min čtení</span>
              </div>
              <h1 className="article-h1">Údržba digestoře a odsávání v kuchyni</h1>
              <p className="article-lead">Digestoř pracuje nejvíc v okamžiku, kdy na ni nejméně myslíme – při smažení, pečení a vaření, kdy je v kuchyni nejvíc tuku, páry a pachů. Zanedbaná digestoř ale rychle ztrácí výkon, hůř odvádí vlhkost a v krajním případě představuje i požární riziko. Tady je přehled, jak o ni pečovat podle typu, který máš doma.</p>
              <div className="article-meta-row"><span>Aktualizováno: 25. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#typy">Typy digestoří – odsávací vs. cirkulační</a></li>
                <li><a href="#tukove-filtry">Čištění tukových filtrů</a></li>
                <li><a href="#uhlikovy-filtr">Výměna uhlíkového filtru</a></li>
                <li><a href="#potrubi">Čištění potrubí odvodu vzduchu</a></li>
                <li><a href="#klapka">Kontrola zpětné klapky</a></li>
                <li><a href="#priznaky">Příznaky ucpaného systému</a></li>
                <li><a href="#bezpecnost">Bezpečnost – riziko vznícení tuku</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="typy">
              <h2>Typy digestoří – odsávací vs. cirkulační</h2>
              <p>Než se pustíš do údržby, je dobré vědět, jaký typ digestoře máš doma – liší se totiž v tom, co a jak často potřebuje čištění nebo výměnu.</p>
              <ul>
                <li><strong>Odsávací (odtahová) digestoř</strong> – vzduch s tukem, párou a pachy vede potrubím přímo mimo budovu. Je výkonnější a účinněji odvádí vlhkost z kuchyně, vyžaduje ale instalaci potrubí na fasádu nebo do komína.</li>
                <li><strong>Cirkulační (recirkulační) digestoř</strong> – vzduch se nasává, profiltruje přes tukový a následně uhlíkový filtr a čistý se vrací zpět do kuchyně. Hodí se tam, kde nelze vyvést odtah ven, například v bytech bez vhodné šachty.</li>
                <li><strong>Kombinovaný režim</strong> – řada moderních digestoří umí pracovat v obou režimech podle toho, jestli je připojené potrubí ven, nebo je nasazen uhlíkový filtr</li>
              </ul>
              <p>Pro celkovou kvalitu vzduchu v domácnosti hraje roli i to, jak často a jak <Link href="/blog/spravne-vetrat-byt" style={{ color: "#2a6496", textDecoration: "underline" }}>správně větráš byt</Link> – digestoř totiž zvládne jen lokální zápach a tuk z vaření, ne celkovou výměnu vzduchu v bytě.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud máš možnost výběru, odsávací varianta s vyvedením potrubí ven je dlouhodobě účinnější a levnější na provoz – nemusíš pravidelně kupovat uhlíkové filtry.</div>
            </section>

            <section id="tukove-filtry">
              <h2>Čištění tukových filtrů</h2>
              <p>Kovový tukový filtr (síťka nebo soustava plechových lamel u vstupu vzduchu do digestoře) zachycuje většinu tuku z vařicích par. Je to první linie ochrany jak pro motor digestoře, tak pro případný uhlíkový filtr za ním.</p>
              <ul>
                <li><strong>Jak často</strong> – při běžném vaření jednou za 2–4 týdny, u domácností, které vaří denně a často smaží, i jednou za 1–2 týdny</li>
                <li><strong>Mytí v myčce</strong> – většina kovových filtrů je myčkovatelná, stačí je vyjmout a vložit na program s vyšší teplotou, ideálně bez sušení horkým vzduchem, které může deformovat tenký plech</li>
                <li><strong>Ruční mytí</strong> – horká voda s odmašťovacím saponátem nebo jedlou sodou, filtr namoč na 20–30 minut a pak prokartáčuj měkkým kartáčem</li>
                <li><strong>Sušení</strong> – filtr osuš nebo nech okapat, než ho vrátíš zpět, vlhký filtr v provozu zhoršuje proudění vzduchu</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud má filtr silnou vrstvu ztuhlého tuku, namoč ho předem ve vodě s trochou octa nebo speciálního odmašťovače na trouby – tuk se uvolní mnohem snáz a šetříš si dření.</div>
            </section>

            <section id="uhlikovy-filtr">
              <h2>Výměna uhlíkového filtru u cirkulačních digestoří</h2>
              <p>Uhlíkový (aktivní uhlí) filtr pohlcuje pachy z vařicích par u digestoří v cirkulačním režimu. Na rozdíl od tukového filtru se nedá prát ani regenerovat – aktivní uhlí má omezenou kapacitu a po jejím vyčerpání přestává fungovat, i když vizuálně vypadá v pořádku.</p>
              <ul>
                <li><strong>Interval výměny</strong> – obvykle 3–6 měsíců podle intenzity vaření a doporučení výrobce konkrétního modelu</li>
                <li><strong>Signál, že je čas na výměnu</strong> – přetrvávající pachy z vaření, i když je tukový filtr čistý a digestoř běží na plný výkon</li>
                <li><strong>Některé modely</strong> – mají uhlíkový filtr, který lze jednou regenerovat vysušením v troubě podle návodu výrobce, většina běžných filtrů ale počítá pouze s výměnou</li>
                <li><strong>Nákup náhradních filtrů</strong> – vždy podle přesného typového označení modelu digestoře, filtry nejsou univerzální</li>
              </ul>
              <div className="article-tip"><strong>⚠️ Pozor:</strong> Pokud digestoř v cirkulačním režimu provozuješ bez uhlíkového filtru nebo s vyčerpaným filtrem, ztrácí smysl odstraňovat pachy – vzduch se jen profiltruje přes tuk a vrátí zpět do kuchyně.</div>
            </section>

            <section id="potrubi">
              <h2>Čištění potrubí odvodu vzduchu</h2>
              <p>U odsávacích digestoří se v potrubí postupně usazuje tenká vrstva tuku, zejména v ohybech a v místech s pomalejším proudem vzduchu. Tato vrstva omezuje průtok vzduchu a digestoř musí pracovat na vyšší výkon, aby dosáhla stejného efektu.</p>
              <ul>
                <li><strong>Vizuální kontrola</strong> – jednou za rok zkontroluj přístupné části potrubí, hlavně spoje a kolena, kde se usazeniny tvoří nejvíc</li>
                <li><strong>Čištění</strong> – krátké úseky potrubí lze rozebrat a umyt stejně jako tukový filtr, dlouhé trasy vedené ve zdi nebo podhledu řeší specializovaná firma s kartáčovacím nebo tlakovým systémem</li>
                <li><strong>Délka a tvar potrubí</strong> – příliš dlouhé trasy s mnoha ohyby snižují účinnost odsávání bez ohledu na čistotu, při instalaci je dobré volit nejkratší a nejrovnější možnou trasu</li>
              </ul>
            </section>

            <section id="klapka">
              <h2>Kontrola zpětné klapky</h2>
              <p>Zpětná klapka je malá mechanická chlopeň v potrubí nebo přímo na vyústění digestoře, která zabraňuje pronikání venkovního vzduchu, hmyzu a pachů zpět do kuchyně, když digestoř neběží.</p>
              <ul>
                <li><strong>Funkce</strong> – otevírá se tlakem proudícího vzduchu při provozu digestoře a sama se zavírá, jakmile motor vypneš</li>
                <li><strong>Kontrola</strong> – jednou za rok zkontroluj, jestli klapka volně pohybuje a dovírá, zalepená tukem nebo zkorodovaná klapka nedoléhá a propouští studený vzduch nebo pachy z venku</li>
                <li><strong>Čištění</strong> – setři usazený tuk vlhkým hadříkem, u kovových klapek lze použít i jemný odmašťovač</li>
                <li><strong>Příznaky vadné klapky</strong> – průvan z vyústění digestoře i když je vypnutá, pachy z venku pronikající do kuchyně, klepání nebo vrzání klapky při silnějším větru</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud zpětná klapka netěsní a venku je v zimě mráz, dochází i k tepelným ztrátám skrz potrubí – stojí za to ji zkontrolovat při sezónní přípravě domu, podobně jako řešíš <Link href="/blog/priprava-domu-na-zimu" style={{ color: "#2a6496", textDecoration: "underline" }}>přípravu domu na zimu</Link>.</div>
            </section>

            <section id="priznaky">
              <h2>Příznaky ucpaného systému</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Příznak</th><th>Pravděpodobná příčina</th><th>Řešení</th></tr></thead>
                  <tbody>
                    <tr><td>Zápach jídla přetrvává hodiny</td><td>Vyčerpaný uhlíkový filtr nebo ucpaný tukový filtr</td><td>Vyměnit uhlíkový filtr, vyčistit tukový filtr</td></tr>
                    <tr><td>Kondenzace a mastný film na lince a oknech</td><td>Slabý odtah, ucpané potrubí nebo netěsná zpětná klapka</td><td>Zkontrolovat a vyčistit potrubí, zkontrolovat klapku</td></tr>
                    <tr><td>Hlučnější chod motoru</td><td>Motor překonává odpor v ucpaném potrubí nebo filtru</td><td>Vyčistit filtry a potrubí, zkontrolovat motor</td></tr>
                    <tr><td>Slabý tah i na nejvyšší stupeň</td><td>Kombinace zanesených filtrů a potrubí</td><td>Kompletní servisní čištění systému</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud po vyčištění filtrů a kontrole klapky problém přetrvává, může jít o opotřebovaný motor nebo poškozené lopatky ventilátoru – v tom případě je na místě odborný servis.</div>
            </section>

            <section id="bezpecnost">
              <h2>Bezpečnost – riziko vznícení tuku ve filtrech</h2>
              <p>Zanesený tukový filtr není jen otázkou účinnosti odsávání, ale i reálné požární bezpečnosti v kuchyni. Vrstva ztuhlého tuku je hořlavá a při vyšší teplotě, například při intenzivním smažení, flambování nebo vznícení oleje na pánvi, se může vzplanout přímo ve filtru.</p>
              <ul>
                <li><strong>Pravidelné čištění filtru</strong> je nejlevnější a nejjednodušší prevence – dodržuj interval 2–4 týdnů podle intenzity vaření</li>
                <li><strong>Nikdy nehas hořící tuk vodou</strong> – voda reaguje s hořícím olejem explozivně, použij hasicí přikrývku nebo poklop na pánvi, případně hasicí sprej určený na tuky</li>
                <li><strong>Funkční detektor kouře</strong> v kuchyni nebo poblíž pomáhá včas odhalit začínající požár, víc se dozvíš v článku o <Link href="/blog/kontrola-hasicich-pristroju-a-detektoru-koure" style={{ color: "#2a6496", textDecoration: "underline" }}>kontrole hasicích přístrojů a detektorů kouře</Link></li>
                <li><strong>Nikdy nenechávej digestoř běžet bez filtru</strong> – tuk by se usazoval přímo na motoru a ventilátoru, což zvyšuje riziko poruchy i požáru</li>
              </ul>
              <div className="article-tip"><strong>⚠️ Pozor:</strong> Pokud zaznamenáš na filtru nebo uvnitř digestoře zápach spáleného tuku nebo stopy po jiskření, digestoř okamžitě vypni a nech zkontrolovat odborníkem, než ji znovu použiješ.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jak často mám čistit tukový filtr digestoře?", a: "Tukový kovový filtr by se měl čistit jednou za 2–4 týdny při běžném vaření, u domácností, kde se vaří denně a často smaží, klidně každé 1–2 týdny. Filtr lze prát v myčce nebo ručně horkou vodou se saponátem na tuk." },
                  { q: "Jak často se vyměňuje uhlíkový filtr v digestoři?", a: "Uhlíkový filtr u cirkulačních (recirkulačních) digestořů se vyměňuje přibližně každé 3–6 měsíců podle intenzity vaření, protože aktivní uhlí postupně ztrácí schopnost pohlcovat pachy a nelze ho vyprat ani regenerovat." },
                  { q: "Jaký je rozdíl mezi odsávací a cirkulační digestoří?", a: "Odsávací (odtahová) digestoř vede vzduch potrubím ven z budovy a je účinnější, protože pachy a vlhkost odvádí mimo kuchyň. Cirkulační (recirkulační) digestoř vzduch jen filtruje přes tukový a uhlíkový filtr a vrací ho zpět do místnosti, hodí se tam, kde nelze vyvést potrubí ven." },
                  { q: "Jak poznám, že je digestoř nebo potrubí ucpané?", a: "Typické příznaky jsou přetrvávající zápach jídla v kuchyni i hodiny po vaření, kondenzace a mastný film na kuchyňské lince a oknech, slabší tah i na nejvyšší rychlostní stupeň a hlučnější chod motoru, který se snaží překonat odpor v ucpaném potrubí." },
                  { q: "Je zanesený tukový filtr požárně nebezpečný?", a: "Ano, vrstva ztuhlého tuku ve filtru je hořlavá a při vyšší teplotě (například při flambování nebo prudkém smažení) se může vznítit. Pravidelné čištění filtru je proto nejen otázkou účinnosti odsávání, ale i základní požární prevencí v kuchyni." },
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
                <li><a href="#typy">Typy digestoří</a></li>
                <li><a href="#tukove-filtry">Čištění tukových filtrů</a></li>
                <li><a href="#uhlikovy-filtr">Výměna uhlíkového filtru</a></li>
                <li><a href="#potrubi">Čištění potrubí</a></li>
                <li><a href="#klapka">Kontrola zpětné klapky</a></li>
                <li><a href="#priznaky">Příznaky ucpaného systému</a></li>
                <li><a href="#bezpecnost">Bezpečnost</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/sezonni-udrzba" className="sidebar-cat-link">❄️ Sezónní údržba<span>28 článků →</span></Link>
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
