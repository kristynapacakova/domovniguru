import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stěhování s dětmi – jak to zvládnout v klidu",
  description: "Praktické tipy, jak připravit děti na stěhování, zorganizovat balení a první dny v novém bydlení.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/stehovani-s-detmi-tipy" },
  openGraph: { title: "Stěhování s dětmi – jak to zvládnout v klidu", description: "Praktické tipy, jak připravit děti na stěhování, zorganizovat balení a první dny v novém bydlení.", url: "https://www.domovniguru.cz/blog/stehovani-s-detmi-tipy", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-12T08:00:00Z", modifiedTime: "2026-06-12T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=St%C4%9Bhov%C3%A1n%C3%AD%20s%20d%C4%9Btmi%20%E2%80%93%20jak%20to%20zvl%C3%A1dnout%20v%20klidu&cat=blog", width: 1200, height: 630, alt: "Stěhování s dětmi – jak to zvládnout v klidu" }] },
  twitter: { card: "summary_large_image", title: "Stěhování s dětmi – jak to zvládnout v klidu", description: "Praktické tipy, jak připravit děti na stěhování, zorganizovat balení a první dny v novém bydlení." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/stehovani-s-detmi-tipy#article", "headline": "Stěhování s dětmi – jak to zvládnout v klidu", "datePublished": "2026-06-12T08:00:00Z", "dateModified": "2026-06-12T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["stěhování s dětmi", "stěhování a děti", "balení dětského pokoje", "adaptace dítěte na nové bydlení", "stěhovací den s dětmi"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Stěhování & rekonstrukce", "item": "https://www.domovniguru.cz/blog/kategorie/stehovani" }, { "@type": "ListItem", "position": 4, "name": "Stěhování s dětmi – jak to zvládnout v klidu", "item": "https://www.domovniguru.cz/blog/stehovani-s-detmi-tipy" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jak dlouho dopředu mám dětem o stěhování řekt?", "acceptedAnswer": { "@type": "Answer", "text": "Ideálně 4–6 týdnů předem u dětí školního věku, u menších dětí postačí 1–2 týdny. Důležité je dát dětem čas postupně si na změnu zvyknout a zapojit je do příprav." } }, { "@type": "Question", "name": "Jak zabalit oblíbené hračky a věci dítěte?", "acceptedAnswer": { "@type": "Answer", "text": "Nejoblíbenější hračky, plyšáky a deky si nechte po ruce a balte je až jako poslední do samostatné, výrazně označené krabice nebo tašky, kterou poveze dítě nebo bude jasně viditelná při vybalování." } }, { "@type": "Question", "name": "Co dělat s dětmi přímo ve stěhovací den?", "acceptedAnswer": { "@type": "Answer", "text": "Nejlepší je zajistit dětem hlídání nebo program mimo bytu – u prarodičů, kamarádů nebo na hřišti. Pokud to nejde, vyhraďte dětem jednu klidnou místnost s hračkami a oblíbenou krabičkou věcí." } }, { "@type": "Question", "name": "Jak rychle zařídit dětský pokoj v novém bydlení?", "acceptedAnswer": { "@type": "Answer", "text": "Postel, oblíbené hračky, noční lampičku a osobní předměty rozbalte hned první den. I neuspořádaný pokoj s povlečením, na které je dítě zvyklé, mu pomůže rychleji se uklidnit a zorientovat." } }, { "@type": "Question", "name": "Jak pomoci dítěti zvyknout si na novou školu nebo školku?", "acceptedAnswer": { "@type": "Answer", "text": "Navštivte školu nebo školku ještě před zahájením docházky, projděte si s dítětem cestu a pokud možno domluvte seznámení s budoucí třídou nebo paní učitelkou. Postupný náběh a udržení známých rituálů pomáhá adaptaci." } }] }] };

const RELATED = [
  { title: "Stěhování – kompletní checklist krok za krokem", href: "/blog/stehovani-checklist", read: "6 min" },
  { title: "Plánování dětského pokoje – praktický průvodce", href: "/blog/planovani-detskeho-pokoje", read: "5 min" },
  { title: "Jak správně zabalit věci při stěhování", href: "/blog/spravne-zabalit-veci", read: "5 min" },
  { title: "Převzetí bytu – checklist na předávací protokol", href: "/blog/prebrani-bytu-checklist", read: "4 min" },
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
              <span>Stěhování s dětmi – jak to zvládnout v klidu</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏠 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Stěhování s dětmi – jak to zvládnout v klidu</h1>
              <p className="article-lead">Stěhování je pro dospělé stresující samo o sobě – pro děti k tomu přidává navíc nejistotu a strach ze změny. S trochou plánování a empatie ale zvládnete přesun do nového bydlení bez velkých dramat. Tady je průvodce, jak na to.</p>
              <div className="article-meta-row"><span>Aktualizováno: 12. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#pred-stehovanim">Jak děti na stěhování připravit předem</a></li>
                <li><a href="#baleni-pokoje">Balení dětského pokoje a oblíbených věcí</a></li>
                <li><a href="#stehovaci-den">Stěhovací den – co řešit jako první</a></li>
                <li><a href="#zarizeni-pokoje">Rychlé zařízení dětského pokoje</a></li>
                <li><a href="#adaptace">Adaptace na nové prostředí, školku a školu</a></li>
                <li><a href="#emoce">Tipy na zvládnutí emocí</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="pred-stehovanim">
              <h2>1. Jak děti na stěhování připravit předem</h2>
              <p>Děti potřebují čas, aby si na velkou změnu zvykly. Stěhování jim oznamte s předstihem – u školních dětí ideálně 4–6 týdnů předem, u menších dětí stačí 1–2 týdny. Mluvte o tom otevřeně a pozitivně, ale nezamlčujte, že se jedná o velkou věc.</p>
              <ul>
                <li><strong>Mluvte o důvodech</strong> – vysvětlete jednoduše a srozumitelně, proč se stěhujete (větší pokoj, blíž škole, zahrada apod.)</li>
                <li><strong>Ukažte nové bydlení</strong> – pokud je to možné, zajděte se na byt nebo dům podívat společně, případně si prohlédněte fotky nebo video</li>
                <li><strong>Zapojte děti do plánování</strong> – ať si vyberou barvu na zeď nového pokoje nebo si naplánují, kam si dají postel</li>
                <li><strong>Rozlučte se s místem</strong> – navštivte oblíbená místa v okolí starého bydlení, vyfoťte pokoj naposledy, dejte prostor smutku i radosti</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pro lepší přehled o tom, co všechno je potřeba zařídit, se podívejte na náš <Link href="/blog/stehovani-checklist" style={{ color: "#2a6496", textDecoration: "underline" }}>kompletní checklist pro stěhování</Link>, který pokrývá vše od papírování až po samotný přesun.</div>
            </section>

            <section id="baleni-pokoje">
              <h2>2. Balení dětského pokoje a oblíbených věcí</h2>
              <p>Balení dětského pokoje je nejlepší dělat postupně a klidně – ne na poslední chvíli, aby z toho nebyl chaos a stres pro celou rodinu.</p>
              <h3>Krok za krokem</h3>
              <ul>
                <li><strong>Začněte tím, co se nepoužívá denně</strong> – sezónní oblečení, knihy, hračky, které dítě zrovna nehraje</li>
                <li><strong>Necháte stranou „balíček klidu"</strong> – oblíbený plyšák, deku, polštář a pár hraček, které zůstanou venku až do poslední chvíle</li>
                <li><strong>Zapojte dítě do balení</strong> – ať si samo rozhoduje, co si zabalí do své krabice, dejte mu i fixy na popsání a omalovávání krabic</li>
                <li><strong>Označte krabice viditelně a barevně</strong> – pro dětský pokoj zvolte jednu barvu, ať je při vybalování rychle najdete</li>
                <li><strong>Vyřazujte postupně</strong> – pokud chcete část hraček darovat nebo vyhodit, dělejte to s předstihem a s dítětem, ne narychlo bez jeho souhlasu</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pro praktický postup balení nejen dětského pokoje, ale celé domácnosti, mrkněte na článek o tom, jak <Link href="/blog/spravne-zabalit-veci" style={{ color: "#2a6496", textDecoration: "underline" }}>správně zabalit věci při stěhování</Link>.</div>
            </section>

            <section id="stehovaci-den">
              <h2>3. Stěhovací den – co řešit jako první s ohledem na děti</h2>
              <p>Samotný den stěhování je nejhektičtější a pro děti nejvíc matoucí – byt se najednou vyprázdní, všude jsou krabice a cizí lidé. Proto je dobré myslet na pár věcí dopředu.</p>
              <ul>
                <li><strong>Zajistěte hlídání</strong> – pokud máte tu možnost, nejlepší je dát děti na den stěhování k prarodičům, kamarádům nebo na hřiště. Ušetří to nervy všem stranám</li>
                <li><strong>Pokud děti zůstávají s vámi</strong>, vyhraďte jim jednu klidnou místnost nebo koutek s hračkami, který se bude balit jako poslední</li>
                <li><strong>Mějte u sebe „balíček klidu"</strong> – plyšák, oblíbenou hračku, svačinu a pití po ruce, ne v krabici v autě</li>
                <li><strong>Naplánujte přesun pro děti samostatně</strong> – ideálně aby nebyly v bytě v okamžiku, kdy ho stěhováci vyklízejí</li>
                <li><strong>Připravte první noc dopředu</strong> – povlečení, pyžama a hygienické potřeby dejte do samostatné tašky, ne do nákladního auta se vším ostatním</li>
              </ul>
            </section>

            <section id="zarizeni-pokoje">
              <h2>4. Rychlé zařízení dětského pokoje v novém bydlení</h2>
              <p>Čím dřív bude dětský pokoj alespoň trochu fungovat, tím rychleji se dítě v novém prostředí zorientuje a uklidní. Nemusí být hotový – stačí pár klíčových věcí.</p>
              <h3>Co rozbalit a postavit jako první</h3>
              <ul>
                <li><strong>Postel a povlečení</strong> – stejné povlečení jako ve starém bytě dává dítěti pocit jistoty</li>
                <li><strong>Noční lampička</strong> – pro děti, které se bojí tmy v novém prostředí, je to klíčová věc</li>
                <li><strong>Oblíbené hračky a knihy</strong> – nemusí být uklizené v poličkách, hlavně ať jsou na dosah</li>
                <li><strong>Osobní předměty a fotky</strong> – obrázek, fotka rodiny nebo plakát na zeď pomůže prostor okamžitě „zlidštit"</li>
              </ul>
              <p>Zbytek – skříně, poličky, dekorace – můžete doladit v klidu během následujících dní a týdnů. Pokud plánujete pokoj zařídit i nově, podívejte se na náš podrobný návod na <Link href="/blog/planovani-detskeho-pokoje" style={{ color: "#2a6496", textDecoration: "underline" }}>plánování dětského pokoje</Link>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Při převzetí nového bytu nebo domu si zkontrolujte i stav elektriky, oken a vytápění v dětském pokoji – ať máte jistotu, že je prostředí bezpečné a útulné hned od začátku.</div>
            </section>

            <section id="adaptace">
              <h2>5. Adaptace na nové prostředí, školku a školu</h2>
              <p>Změna bydliště často znamená i změnu školky nebo školy, což je pro děti další velká zátěž navíc. Adaptace může trvat několik týdnů i měsíců, a to je naprosto normální.</p>
              <ul>
                <li><strong>Navštivte školu/školku předem</strong> – projděte si budovu, třídu, pokud možno se seznamte s učitelkou nebo paní učitelkou</li>
                <li><strong>Projděte si cestu</strong> – ať dítě ví, jak se do školy nebo školky dostane, a cesta mu nebude cizí</li>
                <li><strong>Udržujte rituály</strong> – stejný čas večerky, stejná pohádka na dobrou noc, stejné rituály jako dřív dávají dítěti pocit stability</li>
                <li><strong>Podporujte nová přátelství</strong> – pozvěte spolužáky na návštěvu, zapojte dítě do kroužků nebo aktivit v okolí</li>
                <li><strong>Buďte trpěliví</strong> – některé děti se adaptují za týden, jiné potřebují i několik měsíců, než si zvyknou</li>
              </ul>
              <p>Nezapomeňte také vyřídit přihlášení k novému praktickému lékaři a případně přepis dokumentace ze školky či školy – to vše je dobré naplánovat ještě před samotným stěhováním.</p>
            </section>

            <section id="emoce">
              <h2>6. Tipy na zvládnutí emocí (vlastních i dětských)</h2>
              <p>Stěhování je emocionálně náročné pro celou rodinu – i pro dospělé. Je naprosto v pořádku, že se občas objeví slzy, vztek nebo únava, ať jde o děti nebo o vás.</p>
              <ul>
                <li><strong>Dovolte dětem smutek</strong> – stěhování často znamená i ztrátu – kamarádů, pokoje, zahrady. Nechte dítě prožít smutek, nesnažte se ho hned „opravit"</li>
                <li><strong>Mluvte o pocitech</strong> – ptejte se, co dítě trápí nebo z čeho má strach, a normalizujte tyto emoce</li>
                <li><strong>Nepřenášejte vlastní stres</strong> – děti velmi citlivě vnímají napětí mezi rodiči; pokud jste vy ve stresu, snažte se to při dětech alespoň trochu zvládat</li>
                <li><strong>Udělejte si čas na oddech</strong> – i v nejhektičtějších dnech si naplánujte alespoň krátkou společnou chvíli – procházku, hru nebo večeři bez krabic</li>
                <li><strong>Oslavte nový začátek</strong> – první noc v novém bydlení si udělejte malou rodinnou oslavu – objednejte si jídlo, udělejte si „picnic" na podlaze, ať se nový domov spojí i s pozitivní vzpomínkou</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Po nastěhování nezapomeňte na formální stránku věci – kontrolu stavu bytu a stavu měřidel si můžete projít podle našeho <Link href="/blog/prebrani-bytu-checklist" style={{ color: "#2a6496", textDecoration: "underline" }}>checklistu pro převzetí bytu</Link>.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jak dlouho dopředu mám dětem o stěhování řekt?", a: "Ideálně 4–6 týdnů předem u dětí školního věku, u menších dětí postačí 1–2 týdny. Důležité je dát dětem čas postupně si na změnu zvyknout a zapojit je do příprav." },
                  { q: "Jak zabalit oblíbené hračky a věci dítěte?", a: "Nejoblíbenější hračky, plyšáky a deky si nechte po ruce a balte je až jako poslední do samostatné, výrazně označené krabice nebo tašky, kterou poveze dítě nebo bude jasně viditelná při vybalování." },
                  { q: "Co dělat s dětmi přímo ve stěhovací den?", a: "Nejlepší je zajistit dětem hlídání nebo program mimo bytu – u prarodičů, kamarádů nebo na hřišti. Pokud to nejde, vyhraďte dětem jednu klidnou místnost s hračkami a oblíbenou krabičkou věcí." },
                  { q: "Jak rychle zařídit dětský pokoj v novém bydlení?", a: "Postel, oblíbené hračky, noční lampičku a osobní předměty rozbalte hned první den. I neuspořádaný pokoj s povlečením, na které je dítě zvyklé, mu pomůže rychleji se uklidnit a zorientovat." },
                  { q: "Jak pomoci dítěti zvyknout si na novou školu nebo školku?", a: "Navštivte školu nebo školku ještě před zahájením docházky, projděte si s dítětem cestu a pokud možno domluvte seznámení s budoucí třídou nebo paní učitelkou. Postupný náběh a udržení známých rituálů pomáhá adaptaci." },
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
                <li><a href="#pred-stehovanim">Příprava dětí předem</a></li>
                <li><a href="#baleni-pokoje">Balení dětského pokoje</a></li>
                <li><a href="#stehovaci-den">Stěhovací den</a></li>
                <li><a href="#zarizeni-pokoje">Zařízení pokoje</a></li>
                <li><a href="#adaptace">Adaptace na nové prostředí</a></li>
                <li><a href="#emoce">Zvládání emocí</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/stehovani" className="sidebar-cat-link">🏠 Stěhování & rekonstrukce<span>Více článků →</span></Link>
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
