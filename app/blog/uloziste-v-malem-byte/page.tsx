import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak vyřešit úložné prostory v malém bytě",
  description: "Vestavěné skříně, využití výšky stropu, multifunkční nábytek a šikovné systémy úložného prostoru pro malé byty.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/uloziste-v-malem-byte" },
  openGraph: { title: "Jak vyřešit úložné prostory v malém bytě", description: "Vestavěné skříně, výška stropu, multifunkční nábytek a chytré systémy úložného prostoru.", url: "https://www.domovniguru.cz/blog/uloziste-v-malem-byte", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-12T08:00:00Z", modifiedTime: "2026-06-12T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20vy%C5%99e%C5%A1it%20%C3%BAlo%C5%BEn%C3%A9%20prostory%20v%20mal%C3%A9m%20byt%C4%9B&cat=blog", width: 1200, height: 630, alt: "Jak vyřešit úložné prostory v malém bytě" }] },
  twitter: { card: "summary_large_image", title: "Jak vyřešit úložné prostory v malém bytě", description: "Vestavěné skříně, výška stropu, multifunkční nábytek a chytré systémy úložného prostoru." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/uloziste-v-malem-byte#article", "headline": "Jak vyřešit úložné prostory v malém bytě", "datePublished": "2026-06-12T08:00:00Z", "dateModified": "2026-06-12T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["úložný prostor v bytě", "vestavěné skříně", "malý byt", "úložné prostory", "organizace bytu"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Stěhování & rekonstrukce", "item": "https://www.domovniguru.cz/blog/kategorie/stehovani" }, { "@type": "ListItem", "position": 4, "name": "Úložné prostory v malém bytě", "item": "https://www.domovniguru.cz/blog/uloziste-v-malem-byte" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Vyplatí se vestavěná skřín na míru, nebo typová skříň z obchodu?", "acceptedAnswer": { "@type": "Answer", "text": "Vestavěná skříň na míru využije prostor přesně podle dispozice bytu, včetně šikmin, výklenků a prostoru až ke stropu. Typová skříň je levnější a rychleji dostupná, ale skoro vždy zůstane nevyužitý prostor nad ní nebo po stranách. U malých bytů se rozdíl v efektivitě využití prostoru často vyrovná rozdílu v ceně." } }, { "@type": "Question", "name": "Jak nejlépe využít vysoký strop v malém bytě?", "acceptedAnswer": { "@type": "Answer", "text": "Nejjednodušší je nechat skříně a police vytáhnout až ke stropu – horní patra slouží na sezónní věci, kufry nebo zásoby, které nepotřebuješ denně. Pomůže k tomu skládací žebřík nebo schůdky, které se po použití uloží na minimální prostor." } }, { "@type": "Question", "name": "Jaký multifunkční nábytek se nejvíc vyplatí do malého bytu?", "acceptedAnswer": { "@type": "Answer", "text": "Nejvíc prostoru ušetří postel s úložným prostorem pod matrací nebo s výsuvnými boxy, dále rozkládací nebo skládací stůl a taburety s úložím uvnitř. Tyto kusy nahrazují jak samostatnou skříň, tak část jídelního nebo obývacího nábytku." } }, { "@type": "Question", "name": "Kam ukládat sezónní věci, když v bytě není místo?", "acceptedAnswer": { "@type": "Answer", "text": "Sezónní věci jako zimní pneumatiky, lyže nebo vánoční dekorace se hodí do sklepní kóje, na půdu, případně do samoobslužného skladu (self storage), který si lze pronajmout na měsíční bázi. V bytě samotném na ně stačí vyhradit jen horní patra skříní nebo prostor pod postelí." } }, { "@type": "Question", "name": "Kdy je nejlepší řešit úložný prostor – až po nastěhování, nebo už při rekonstrukci?", "acceptedAnswer": { "@type": "Answer", "text": "Ideální je promyslet úložné prostory už ve fázi projektu rekonstrukce, kdy se ještě dají upravit dispozice, elektrika a osvětlení podle umístění skříní. Dodatečné řešení po nastěhování je možné, ale často znamená kompromisy – třeba skříň, která zakryje zásuvku nebo vypínač." } }] }] };

const RELATED = [
  { title: "Jak naplánovat rekonstrukci bytu – rozpočet a pořadí prací", href: "/blog/planovani-rekonstrukce-bytu", read: "8 min" },
  { title: "Jak postavit příčku ze sádrokartonu", href: "/blog/sadrokarton-pricka-postup", read: "6 min" },
  { title: "Jak nainstalovat kuchyňskou linku – postup montáže", href: "/blog/instalovat-kuchynskou-linku", read: "7 min" },
  { title: "Kuchyňská linka – na míru, IKEA nebo kuchyňské studio?", href: "/blog/kuchynska-linka-na-miru-vs-ikea", read: "7 min" },
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
              <span>Úložné prostory v malém bytě</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏠 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak vyřešit úložné prostory v malém bytě</h1>
              <p className="article-lead">V malém bytě se každý centimetr počítá dvakrát. Místo hledání nábytku, který se „nějak vejde", se vyplatí přemýšlet systémově – od podlahy po strop, od předsíně po koupelnu. Tady je přehled toho, co skutečně funguje.</p>
              <div className="article-meta-row"><span>Aktualizováno: 12. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#skrine">Vestavěné skříně na míru vs. typové skříně</a></li>
                <li><a href="#vyska">Využití výšky – police a žebříky ke stropu</a></li>
                <li><a href="#multifunkcni">Multifunkční nábytek</a></li>
                <li><a href="#koupelna-kuchyne">Úložný prostor v koupelně a kuchyni</a></li>
                <li><a href="#predsin">Řešení pro předsíň</a></li>
                <li><a href="#extra">Schody, podkroví a sklady mimo byt</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="skrine">
              <h2>Vestavěné skříně na míru vs. typové skříně</h2>
              <p>Typová skříň z obchodu má dané rozměry, a v malém bytě téměř nikdy nesedí dokonale. Zůstane mezera mezi skříní a stropem, štěrbina ve výklenku nebo nevyužitý kout u okna. Na první pohled drobnosti, ale v bytě o 35–45 m² se ze sčítaných mezer snadno stane metr čtverečních ztraceného úložného prostoru.</p>
              <p>Vestavěná skříň na míru naopak kopíruje skutečnou geometrii místnosti – včetně šikmin, sloupů, ústí potrubí nebo nerovných stěn. Vejde se do výklenku, který by jinak zůstal prázdný, a táhne se klidně až ke stropu. Nevýhodou je vyšší cena (zpravidla o 30–60 % víc než srovnatelná typová skříň) a delší dodací doba, protože se vyrábí na zakázku.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Kritérium</th><th>Vestavěná na míru</th><th>Typová z obchodu</th></tr></thead>
                  <tbody>
                    <tr><td>Využití prostoru</td><td>Téměř 100 % – kopíruje stěny a strop</td><td>Závisí na shodě rozměrů, často zbývají mezery</td></tr>
                    <tr><td>Cena</td><td>Vyšší, podle materiálu a rozměrů</td><td>Nižší, fixní ceník</td></tr>
                    <tr><td>Dodací lhůta</td><td>4–10 týdnů</td><td>Ihned nebo do týdne</td></tr>
                    <tr><td>Stěhování</td><td>Obtížné, většinou zůstává v bytě</td><td>Lze rozebrat a přestěhovat</td></tr>
                    <tr><td>Vhodné pro</td><td>Šikminy, výklenky, nepravidelné půdorysy</td><td>Standardní pravoúhlé místnosti</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Praktický kompromis je kombinace – v hlavních místnostech vestavěné řešení tam, kde je nepravidelný prostor (šikmina pod střechou, výklenek vedle komína), a v pravidelných částech bytu kvalitní typové skříně, které lze v případě stěhování vzít s sebou.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud řešíš úložné prostory současně s úpravou dispozice, je dobré téma probrat hned na začátku – viz <Link href="/blog/planovani-rekonstrukce-bytu" style={{ color: "#2a6496", textDecoration: "underline" }}>plánování rekonstrukce bytu</Link>. Pozice zásuvek, vypínačů a topných těles se pak dá přizpůsobit tomu, kam skříně skutečně přijdou.</div>
            </section>

            <section id="vyska">
              <h2>Využití výšky – police a žebříky ke stropu</h2>
              <p>Většina bytů má strop ve výšce 2,6–2,8 m, ale skříně a police se běžně zastavují na 2 m, protože „výš se stejně nedosáhne". Tím se ztrácí pás prostoru o výšce 60–80 cm po celé délce stěny – v bytě s obvodem místnosti 12 m je to klidně 7–10 m³ nevyužitého objemu.</p>
              <p>Řešení je jednoduché: police a skříně táhnout až ke stropu a horní patra vyhradit pro věci, ke kterým nepotřebuješ přístup denně – sezónní oblečení, kufry, vánoční dekorace, archiv dokumentů. K dosahu pak slouží:</p>
              <ul>
                <li><strong>Skládací schůdky nebo žebřík</strong> – po použití se uloží naplocho za skříň nebo dveře, zaberou minimum místa</li>
                <li><strong>Výsuvný schůdek integrovaný do soklu skříně</strong> – řešení u kuchyňských linek a vestavěných skříní, schůdek se vysune ze spodní lišty</li>
                <li><strong>Teleskopická tyč s háčkem</strong> – pro snadné stažení krabic z nejvyšší police bez nutnosti vylézat</li>
              </ul>
              <p>U otevřených polic ve vyšších patrech se vyplatí používat uzavřené boxy nebo koše se štítky – jednak to vypadá uklizeně, jednak se snadněji pozná, co je kde, aniž by ses musel/a vyšplhat nahoru a kontrolovat to po hmatu.</p>
            </section>

            <section id="multifunkcni">
              <h2>Multifunkční nábytek</h2>
              <p>V malém bytě platí jednoduchá rovnice: každý kus nábytku, který umí dvě věci najednou, ti efektivně přidává metry čtverečné, aniž bys cokoliv stavěl/a.</p>
              <h3>Postel s úložným prostorem</h3>
              <p>Postel zabírá v ložnici nejvíc plochy ze všech kusů nábytku, a přitom je pod ní typicky 25–35 cm volného prostoru, který nikdo nevyužívá. Postele s výsuvnými zásuvkami nebo s roštem na pístech, který se zvedne a odhalí úložný box pod celou matrací, pojmou ložní prádlo, oblečení mimo sezónu nebo sportovní vybavení – klidně objem srovnatelný s menší skříní.</p>
              <h3>Rozkládací nebo skládací stůl</h3>
              <p>Jídelní stůl pro čtyři lidi zabere i ve sklopeném stavu místo. Rozkládací stůl, který má v základní podobě poloviční rozměr a rozšiřuje se jen na návštěvy, nebo stůl sklopný ke stěně, uvolní v běžném dni průchod nebo prostor pro jinou činnost.</p>
              <h3>Taburety a lavice s úložím</h3>
              <p>Taburet s odklápěcím víkem nahradí jak sedák, tak menší skříňku – hodí se na boty u dveří, deky v obýváku nebo hračky v dětském pokoji. Lavice s úložným prostorem pod sedákem funguje stejně, navíc poskytuje místo k sezení navíc, když přijde víc lidí.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Při výběru multifunkčního nábytku zkontroluj nosnost a způsob otevírání úložného prostoru. Plynové píst na posteli se zvedá snadno i s matrací a povlečením, zatímco u levnějších mechanismů to může být problém zvládnout sám/sama.</div>
            </section>

            <section id="koupelna-kuchyne">
              <h2>Úložný prostor v koupelně a kuchyni</h2>
              <p>Koupelna a kuchyně jsou prostory, kde se kumuluje nejvíc drobných předmětů – od kosmetiky a léků po koření, nádobí a spotřebiče. Zároveň jde často o nejmenší místnosti v bytě, takže každé řešení musí být promyšlené.</p>
              <h3>Vysoké skříňky místo nízkých</h3>
              <p>V koupelně i kuchyni se vyplatí jít s horními skříňkami až ke stropu, podobně jako u skříní v obytných místnostech. Horní patro slouží na věci, které se používají jen příležitostně – sváteční nádobí, zásoby toaletního papíru, žehlička.</p>
              <h3>Organizéry a vnitřní vybavení dvířek</h3>
              <p>Hodně prostoru se ztrácí uvnitř skříněk samotných – v hloubce skříňky zůstávají věci vzadu nedohledatelné. Pomáhají:</p>
              <ul>
                <li><strong>Dvířka s vnitřními zásuvkami nebo síťkami</strong> – využijí jinak prázdný prostor mezi dvířky a obsahem skříňky, ideální na koření, fólie nebo drobnou kosmetiku</li>
                <li><strong>Výsuvné koše a karuselové (otočné) police</strong> – do rohových skříněk, kam se jinak nedosáhne</li>
                <li><strong>Zásuvkové organizéry</strong> – přihrádky na příbory, nářadí nebo make-up, díky kterým se v zásuvce nevytváří chaos</li>
                <li><strong>Háčky a lišty na vnitřní straně dvířek</strong> – na utěrky, ochranné rukavice nebo víčka od hrnců</li>
              </ul>
              <p>Pokud řešíš kuchyň komplexně, vyplatí se promyslet úložné prostory už při výběru linky – viz srovnání <Link href="/blog/kuchynska-linka-na-miru-vs-ikea" style={{ color: "#2a6496", textDecoration: "underline" }}>kuchyňské linky na míru a typových řešení</Link>, kde se výrazně liší i možnosti vnitřního vybavení skříněk.</p>
            </section>

            <section id="predsin">
              <h2>Řešení pro předsíň</h2>
              <p>Předsíň bývá v malých bytech nejmenší a nejvytíženější místnost – boty, kabáty, klíče, tašky, deštníky. Pokud tu chybí systém, věci se hromadí na podlaze a u dveří.</p>
              <h3>Botníky</h3>
              <p>Nízký botník pod 90 cm pojme jen omezené množství párů. V malé předsíni se víc vyplatí úzký, ale vysoký botník (hloubka 20–25 cm, výška až ke stropu) s výklopnými nebo posuvnými přihrádkami – boty se ukládají naležato a šikmé přihrádky šetří hloubku.</p>
              <h3>Věšákové stěny</h3>
              <p>Místo klasické skříně na kabáty funguje v malé předsíni věšáková stěna – kombinace háčků, krátké tyče na ramínka a horní police na čepice nebo tašky. Zabere jen pár centimetrů hloubky stěny, na rozdíl od skříně, která potřebuje minimálně 50–60 cm.</p>
              <p>Užitečné je i zrcadlo se skrytým úložným prostorem za zrcadlovou plochou – funguje jako zrcadlo i jako skříňka na klíče, brýle nebo drobnosti, které jinak končí na lince nebo komodě.</p>
            </section>

            <section id="extra">
              <h2>Schody, podkroví a sklady mimo byt</h2>
              <p>Pokud byt navazuje na schodiště, podkroví nebo má přístup ke sklepní kóji, jde o prostor, který se vyplatí zahrnout do celkové bilance úložiště – i když fyzicky neleží přímo v bytě.</p>
              <h3>Prostor pod schody</h3>
              <p>V mezonetových bytech nebo rodinných domech zůstává prostor pod schodištěm často nevyužitý, případně slouží jako odkladiště nahodile naskládaných věcí. Vestavěné zásuvky vysouvané z boku schodiště nebo skříňky se dveřmi kopírujícími tvar schodů z něj udělají plnohodnotné úložiště – typicky na knihy, hračky nebo sezónní textil.</p>
              <h3>Podkroví</h3>
              <p>Šikmé stěny podkroví se často nechávají prázdné, protože „se tam nedá postavit nic rovného". Přesně sem ale patří vestavěné skříně na míru – nízké skříňky podél šikmin s hlubokým, ale nízkým prostorem jsou ideální na uložení plochých věcí (deky, kufry, lyže, sezónní oblečení na ramínkách položených naležato).</p>
              <h3>Sezónní věci a samoobslužné sklady</h3>
              <p>Ne všechno musí být v bytě. Zimní pneumatiky, lyže, kempingové vybavení nebo archiv starších dokumentů lze bez problémů uložit do sklepní kóje nebo do samoobslužného skladu (self storage), který se pronajímá po měsících podle aktuální potřeby. Pro byt o 40 m² může pronájem skladovacího boxu o 2–4 m² za pár set korun měsíčně znamenat, že se v bytě uvolní celá skříň pro věci, které skutečně potřebuješ po ruce.</p>
            </section>

            <section id="planovani">
              <h2>Jak naplánovat úložný prostor už při rekonstrukci</h2>
              <p>Nejlevnější a nejúčinnější úložný prostor je ten, se kterým se počítá od začátku. Při <Link href="/blog/planovani-rekonstrukce-bytu" style={{ color: "#2a6496", textDecoration: "underline" }}>plánování rekonstrukce bytu</Link> se vyplatí zařadit úložné prostory jako samostatnou položku, ne až jako dodatečné řešení po nastěhování.</p>
              <p>Co se vyplatí promyslet už v projektové fázi:</p>
              <ul>
                <li><strong>Umístění zásuvek a vypínačů</strong> tak, aby je vestavěná skříň nebo botník nezakryly</li>
                <li><strong>Konstrukci příček</strong> – pokud staví, dá se rovnou navrhnout výklenek nebo nika přesně pod plánovanou skříň, viz <Link href="/blog/sadrokarton-pricka-postup" style={{ color: "#2a6496", textDecoration: "underline" }}>postup stavby sádrokartonové příčky</Link></li>
                <li><strong>Osvětlení uvnitř skříní</strong> – LED páska napojená na spínač u dveří skříně, kterou je potřeba naplánovat s elektrikou ještě před zazděním</li>
                <li><strong>Pořadí montáže</strong> – vestavěné skříně a kuchyňská linka se obvykle montují až po podlahách a malování, ale rozměry a přípojky se musí znát už dřív, podobně jako při <Link href="/blog/instalovat-kuchynskou-linku" style={{ color: "#2a6496", textDecoration: "underline" }}>instalaci kuchyňské linky</Link></li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Než objednáš jakoukoliv vestavěnou skříň nebo linku na míru, udělej si jednoduchý plán úložného prostoru pro celý byt – kde co bude, kolik metrů krychlových potřebuješ a co z toho se reálně používá denně. Ušetří to nejen peníze, ale i pozdější přestavby.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Vyplatí se vestavěná skřín na míru, nebo typová skříň z obchodu?", a: "Vestavěná skříň na míru využije prostor přesně podle dispozice bytu, včetně šikmin, výklenků a prostoru až ke stropu. Typová skříň je levnější a rychleji dostupná, ale skoro vždy zůstane nevyužitý prostor nad ní nebo po stranách. U malých bytů se rozdíl v efektivitě využití prostoru často vyrovná rozdílu v ceně." },
                  { q: "Jak nejlépe využít vysoký strop v malém bytě?", a: "Nejjednodušší je nechat skříně a police vytáhnout až ke stropu – horní patra slouží na sezónní věci, kufry nebo zásoby, které nepotřebuješ denně. Pomůže k tomu skládací žebřík nebo schůdky, které se po použití uloží na minimální prostor." },
                  { q: "Jaký multifunkční nábytek se nejvíc vyplatí do malého bytu?", a: "Nejvíc prostoru ušetří postel s úložným prostorem pod matrací nebo s výsuvnými boxy, dále rozkládací nebo skládací stůl a taburety s úložím uvnitř. Tyto kusy nahrazují jak samostatnou skříň, tak část jídelního nebo obývacího nábytku." },
                  { q: "Kam ukládat sezónní věci, když v bytě není místo?", a: "Sezónní věci jako zimní pneumatiky, lyže nebo vánoční dekorace se hodí do sklepní kóje, na půdu, případně do samoobslužného skladu (self storage), který si lze pronajmout na měsíční bázi. V bytě samotném na ně stačí vyhradit jen horní patra skříní nebo prostor pod postelí." },
                  { q: "Kdy je nejlepší řešit úložný prostor – až po nastěhování, nebo už při rekonstrukci?", a: "Ideální je promyslet úložné prostory už ve fázi projektu rekonstrukce, kdy se ještě dají upravit dispozice, elektrika a osvětlení podle umístění skříní. Dodatečné řešení po nastěhování je možné, ale často znamená kompromisy – třeba skříň, která zakryje zásuvku nebo vypínač." },
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
                <li><a href="#skrine">Vestavěné vs. typové skříně</a></li>
                <li><a href="#vyska">Výška – police a žebříky</a></li>
                <li><a href="#multifunkcni">Multifunkční nábytek</a></li>
                <li><a href="#koupelna-kuchyne">Koupelna a kuchyně</a></li>
                <li><a href="#predsin">Předsíň</a></li>
                <li><a href="#extra">Schody, podkroví, sklady</a></li>
                <li><a href="#planovani">Plánování při rekonstrukci</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/stehovani" className="sidebar-cat-link">🏠 Stěhování & rekonstrukce<span>20 článků →</span></Link>
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
