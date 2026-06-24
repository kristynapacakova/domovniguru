import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak pěstovat borůvky a další drobné ovoce na zahradě",
  description: "Výběr odrůd, kyselost půdy, výsadba a péče o borůvky, rybíz a další drobné ovoce na zahradě.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/pestovani-boruvek-a-drobneho-ovoce" },
  openGraph: { title: "Jak pěstovat borůvky a další drobné ovoce na zahradě", description: "Výběr odrůd, kyselost půdy, výsadba a péče o borůvky, rybíz a další drobné ovoce na zahradě.", url: "https://www.domovniguru.cz/blog/pestovani-boruvek-a-drobneho-ovoce", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-24T08:00:00Z", modifiedTime: "2026-06-24T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20p%C4%9Bstovat%20bor%C5%AFvky%20a%20dal%C5%A1%C3%AD%20drobn%C3%A9%20ovoce%20na%20zahrad%C4%9B&cat=blog", width: 1200, height: 630, alt: "Jak pěstovat borůvky a další drobné ovoce na zahradě" }] },
  twitter: { card: "summary_large_image", title: "Jak pěstovat borůvky a další drobné ovoce na zahradě", description: "Výběr odrůd, kyselost půdy, výsadba a péče o borůvky, rybíz a další drobné ovoce na zahradě." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/pestovani-boruvek-a-drobneho-ovoce#article", "headline": "Jak pěstovat borůvky a další drobné ovoce na zahradě", "datePublished": "2026-06-24T08:00:00Z", "dateModified": "2026-06-24T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["pěstování borůvek", "kyselá půda", "drobné ovoce na zahradě", "rybíz", "angrešt", "maliny"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Zahrada & terasa", "item": "https://www.domovniguru.cz/blog/kategorie/zahrada" }, { "@type": "ListItem", "position": 4, "name": "Pěstování borůvek a drobného ovoce", "item": "https://www.domovniguru.cz/blog/pestovani-boruvek-a-drobneho-ovoce" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jakou půdu borůvky potřebují?", "acceptedAnswer": { "@type": "Answer", "text": "Borůvky potřebují kyselou půdu s pH 4,5–5,5. Běžná zahradní zemina je obvykle příliš zásaditá, proto se vysazují do směsi rašeliny, jehličnatého kompostu nebo speciálního substrátu pro acidofilní rostliny, ideálně do vyvýšeného záhonu nebo velké nádoby." } }, { "@type": "Question", "name": "Jakou vodou borůvky zalévat?", "acceptedAnswer": { "@type": "Answer", "text": "Borůvky jsou citlivé na vápník obsažený ve tvrdé vodovodní vodě. Nejlepší je zálivka dešťovou vodou nebo jinou měkkou vodou. Pokud musíš použít vodovodní vodu, nech ji nejprve den odstát nebo přidej trochu octa či kyseliny citronové na úpravu pH." } }, { "@type": "Question", "name": "Kdy a jak řezat borůvky?", "acceptedAnswer": { "@type": "Answer", "text": "Borůvky se řežou na konci zimy nebo brzy na jaře, dokud jsou v klidu. U mladých keřů se řez omezuje na odstranění poškozených větví, u starších keřů od čtvrtého roku se postupně odstraňují nejstarší, málo plodné výhony u země, aby keř zůstal vzdušný a plodný." } }, { "@type": "Question", "name": "Jak chránit borůvky před ptáky?", "acceptedAnswer": { "@type": "Answer", "text": "Nejspolehlivější ochranou je síť proti ptákům natažená přes konstrukci kolem keřů v době zrání plodů. Pomáhají i lesklé pásky nebo CD zavěšené nad keři, ale jejich účinek se časem snižuje, protože si na ně ptáci zvyknou." } }, { "@type": "Question", "name": "Jsou borůvky mrazuvzdorné?", "acceptedAnswer": { "@type": "Answer", "text": "Většina odrůd vysokých borůvek pěstovaných v ČR zvládá mráz do -25 až -30 °C, problém jsou spíš pozdní jarní mrazíky, které mohou poškodit rozkvetlé květy. V kritických nocích na přelomu dubna a května je vhodné keře přes noc přikrýt netkanou textilií." } }] }] };

const RELATED = [
  { title: "Jak pěstovat jahody – výsadba, péče a sklizeň", href: "/blog/jak-pestovat-jahody", read: "6 min" },
  { title: "Jak pěstovat vinnou révu na zahradě – výsadba, řez a treláž", href: "/blog/pestovani-revy-na-zahrade", read: "7 min" },
  { title: "Jak hnojit zahradu – organicky i minerálně", href: "/blog/jak-hnojit-zahradu", read: "6 min" },
  { title: "Vyvýšené záhony: Kompletní průvodce od stavby po první sklizeň", href: "/blog/vyvysene-zahony", read: "10 min" },
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
              <Link href="/blog/kategorie/zahrada">🌿 Zahrada & terasa</Link><span className="breadcrumb-sep">/</span>
              <span>Pěstování borůvek a drobného ovoce</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak pěstovat borůvky a další drobné ovoce na zahradě</h1>
              <p className="article-lead">Borůvky, rybíz, angrešt a maliny patří k nejvděčnějšímu ovoci na zahradě – jednou zasazené plodí roky a sklizeň ze čtverečního metru je nesrovnatelná s jiným ovocem. Háček je v tom, že borůvky mají na rozdíl od ostatního drobného ovoce úplně jiné nároky na půdu. Tady je přehled, jak na výsadbu, péči a srovnání s dalšími druhy.</p>
              <div className="article-meta-row"><span>Aktualizováno: 24. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#puda">Kyselá půda – základ úspěchu</a></li>
                <li><a href="#odrudy">Výběr odrůd podle klimatu ČR</a></li>
                <li><a href="#vysadba">Výsadba a rozestupy</a></li>
                <li><a href="#hnojeni-zaliv">Hnojení a zálivka</a></li>
                <li><a href="#rez">Řez borůvek</a></li>
                <li><a href="#srovnani">Srovnání s rybízem, angreštem a malinami</a></li>
                <li><a href="#ochrana">Ochrana před ptáky a mrazem</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="puda">
              <h2>Kyselá půda – základ úspěchu</h2>
              <p>Borůvky jsou ericaceous rostliny, tedy příbuzné vřesu a rododendronům, a na rozdíl od většiny zahradní zeleniny a ovoce vyžadují <strong>kyselou půdu s pH 4,5–5,5</strong>. Běžná zahradní hlína má pH kolem 6,5–7,5, což je pro borůvky zásadně nevhodné – v takové půdě nedokážou přijímat železo a další živiny, listy žloutnou a keř postupně chřadne.</p>
              <p>Pokud máš na zahradě běžnou neutrální nebo zásaditou půdu, nejjednodušší řešení je nevysazovat borůvky přímo do záhonu, ale do jámy nebo vyvýšeného záhonu vyplněného speciální směsí – rašelina, jehličnatý kompost (z borovice nebo smrku), kůrový substrát a písek v poměru, který dá výsledné pH kolem 5. V zahradnictvích se prodává i hotový substrát pro acidofilní rostliny, který stačí smíchat s trochou zahradní hlíny.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Než vysadíš, změř pH půdy levným půdním testerem nebo papírkovými indikátory. Pokud je pH nad 6, vyplatí se připravit samostatnou jámu o průměru alespoň 60 cm naplněnou kyselým substrátem, než spoléhat na zákyselení celého záhonu.</div>
            </section>

            <section id="odrudy">
              <h2>Výběr odrůd podle klimatu ČR</h2>
              <p>Pro zahrady v ČR se nejčastěji pěstují vysoké borůvky (Vaccinium corymbosum), které snášejí naše zimy bez problémů a dávají velké, sladké plody.</p>
              <ul>
                <li><strong>Duke</strong> – raná odrůda, sklizeň už v červnu, kompaktní vzrůst vhodný i do menších zahrad</li>
                <li><strong>Bluecrop</strong> – nejrozšířenější odrůda u nás, středně raná, vysoké a stabilní výnosy, odolná vůči mrazu</li>
                <li><strong>Patriot</strong> – raná až středně raná, velmi mrazuvzdorná, snáší i těžší a vlhčí půdy</li>
                <li><strong>Chandler</strong> – pozdní odrůda s extra velkými plody, dlouhá sklizňová sezóna až do srpna</li>
                <li><strong>Northland</strong> – nižší, kompaktní keř vhodný do menších záhonů nebo nádob</li>
              </ul>
              <p>Pro lepší a jistější sklizeň se doporučuje vysadit alespoň dvě různé odrůdy s podobnou dobou kvetení – i když jsou borůvky částečně samosprašné, opylení mezi odrůdami zvyšuje výnos i velikost plodů.</p>
            </section>

            <section id="vysadba">
              <h2>Výsadba a rozestupy</h2>
              <p>Nejlepší doba pro výsadbu borůvek je brzy na podzim (září–říjen) nebo na začátku jara po odeznění mrazů. Keře se sázejí na slunné až polostinné stanoviště chráněné před silným větrem.</p>
              <ul>
                <li><strong>Rozestup mezi keři</strong> – 100–150 cm podle vzrůstu odrůdy, mezi řadami 180–200 cm</li>
                <li><strong>Hloubka výsadby</strong> – kořenový bal se umístí stejně hluboko, jak byl v kontejneru, lehké zahloubení o 2–3 cm podpoří zakořenění</li>
                <li><strong>Mulč</strong> – po výsadbě je nutný mulč z borové kůry nebo jehličí v tloušťce 5–8 cm, který udržuje vlhkost, tlumí plevel a postupně dál zakyseluje půdu</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Před vysazením kořenový bal z kontejneru na pár minut ponoř do kádě s vodou – borůvky mají jemné, vlasové kořeny, které se snadno poškodí při suchém přesazování.</div>
            </section>

            <section id="hnojeni-zaliv">
              <h2>Hnojení a zálivka</h2>
              <p>Borůvky se hnojí výhradně speciálním hnojivem pro acidofilní (kyselomilné) rostliny – běžná univerzální hnojiva nebo hnojiva s vápníkem (například mletý vápenec, popel) jsou pro ně škodlivá a zvyšují pH půdy. Hnojí se od dubna do konce června, ve dvou až třech dávkách, podle návodu na obalu. Po polovině léta se hnojení zastavuje, aby keř dozrál na zimu.</p>
              <h3>Zálivka měkkou vodou</h3>
              <p>Tvrdá vodovodní voda obsahuje vápník, který borůvkám škodí a postupně neutralizuje kyselost substrátu. Ideální je zálivka dešťovou vodou ze sudu. Pokud nemáš jinou možnost, vodovodní voda by měla alespoň den odstát, případně se okyselí malým množstvím octa nebo kyseliny citronové. Zálivka by měla být pravidelná a vydatná, borůvky mají povrchový kořenový systém, který rychle vysychá – obzvlášť důležité je nepřerušit zálivku v době dozrávání plodů.</p>
            </section>

            <section id="rez">
              <h2>Řez borůvek</h2>
              <p>Řez se provádí na konci zimy nebo začátku jara, dokud je keř v klidu a pupeny ještě nepukly. První tři roky po výsadbě se neřeže prakticky nic, jen se odstraňují poškozené nebo zlomené větve – keř potřebuje čas na vybudování kořenového systému a kosterních výhonů.</p>
              <p>Od čtvrtého roku se prování pravidelný udržovací řez:</p>
              <ul>
                <li>Odstraní se nejstarší výhony (starší 5–6 let), které už nesou málo a drobné plody</li>
                <li>Vyřežou se větve rostoucí do středu keře a křížící se výhony</li>
                <li>Ponechávají se silné, jednoleté až dvouleté výhony, na kterých vznikají nejkvalitnější plody</li>
                <li>Cílem je udržet keř vzdušný, prosvětlený, s 6–10 hlavními kosterními výhony</li>
              </ul>
            </section>

            <section id="srovnani">
              <h2>Srovnání s rybízem, angreštem a malinami</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Ovoce</th><th>Nároky na půdu</th><th>Sklizeň</th><th>Náročnost péče</th></tr></thead>
                  <tbody>
                    <tr><td>Borůvky</td><td>Kyselá, pH 4,5–5,5, nutný speciální substrát</td><td>Červenec–srpen</td><td>Vyšší – nutná úprava půdy a měkká voda</td></tr>
                    <tr><td>Rybíz</td><td>Běžná zahradní půda, neutrální pH</td><td>Červen–červenec</td><td>Nízká, nenáročný a odolný</td></tr>
                    <tr><td>Angrešt</td><td>Běžná půda, snáší i sušší stanoviště</td><td>Červen–červenec</td><td>Nízká, citlivý hlavně na americké padlí</td></tr>
                    <tr><td>Maliny</td><td>Běžná, propustná půda bohatá na živiny</td><td>Červen–září (podle typu)</td><td>Střední, nutná opora a pravidelné odstraňování výmladků</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Rybíz a angrešt jsou nesrovnatelně méně náročné na typ půdy a zvládnou prakticky jakoukoli běžnou zahradní zeminu, proto jsou vhodným doplňkem pro zahradníky, kteří nechtějí řešit úpravu pH. Maliny potřebují oporu (treláž nebo kůly) a pravidelné odstraňování přerůstajících výmladků, jinak se rychle rozrůstají do okolí.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud váháš, zda se borůvkám vyplatí věnovat extra péči, zkus nejprve jeden nebo dva keře ve velkém květináči s kyselým substrátem – ověříš si nároky bez velkého zásahu do zahrady.</div>
            </section>

            <section id="ochrana">
              <h2>Ochrana před ptáky a mrazem</h2>
              <p>Sladké borůvky lákají kosy, špačky i sýkory, kteří umí keř vyklovat za pár dní. Nejúčinnější ochranou je síť proti ptákům natažená na konstrukci z tyček nebo rámu, ideálně už od chvíle, kdy plody začínají měnit barvu.</p>
              <p>Z hlediska mrazu jsou dospělé keře vysokých borůvek velmi odolné, klidně přežijí i -25 °C v zimním klidu. Rizikem jsou naopak pozdní jarní mrazíky po rozkvětu – poškozené květy neodnesou plody. V kritických nocích kolem konce dubna a začátku května pomůže přes noc přehodit přes keř netkanou textilii.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jakou půdu borůvky potřebují?", a: "Borůvky potřebují kyselou půdu s pH 4,5–5,5. Běžná zahradní zemina je obvykle příliš zásaditá, proto se vysazují do směsi rašeliny, jehličnatého kompostu nebo speciálního substrátu pro acidofilní rostliny, ideálně do vyvýšeného záhonu nebo velké nádoby." },
                  { q: "Jakou vodou borůvky zalévat?", a: "Borůvky jsou citlivé na vápník obsažený ve tvrdé vodovodní vodě. Nejlepší je zálivka dešťovou vodou nebo jinou měkkou vodou. Pokud musíš použít vodovodní vodu, nech ji nejprve den odstát nebo přidej trochu octa či kyseliny citronové na úpravu pH." },
                  { q: "Kdy a jak řezat borůvky?", a: "Borůvky se řežou na konci zimy nebo brzy na jaře, dokud jsou v klidu. U mladých keřů se řez omezuje na odstranění poškozených větví, u starších keřů od čtvrtého roku se postupně odstraňují nejstarší, málo plodné výhony u země, aby keř zůstal vzdušný a plodný." },
                  { q: "Jak chránit borůvky před ptáky?", a: "Nejspolehlivější ochranou je síť proti ptákům natažená přes konstrukci kolem keřů v době zrání plodů. Pomáhají i lesklé pásky nebo CD zavěšené nad keři, ale jejich účinek se časem snižuje, protože si na ně ptáci zvyknou." },
                  { q: "Jsou borůvky mrazuvzdorné?", a: "Většina odrůd vysokých borůvek pěstovaných v ČR zvládá mráz do -25 až -30 °C, problém jsou spíš pozdní jarní mrazíky, které mohou poškodit rozkvetlé květy. V kritických nocích na přelomu dubna a května je vhodné keře přes noc přikrýt netkanou textilií." },
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
                <li><a href="#puda">Kyselá půda</a></li>
                <li><a href="#odrudy">Výběr odrůd</a></li>
                <li><a href="#vysadba">Výsadba a rozestupy</a></li>
                <li><a href="#hnojeni-zaliv">Hnojení a zálivka</a></li>
                <li><a href="#rez">Řez borůvek</a></li>
                <li><a href="#srovnani">Srovnání s ostatním ovocem</a></li>
                <li><a href="#ochrana">Ochrana před ptáky a mrazem</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/zahrada" className="sidebar-cat-link">🌿 Zahrada & terasa<span>32 článků →</span></Link>
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
