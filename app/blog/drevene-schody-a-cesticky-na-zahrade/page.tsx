import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak postavit dřevěné schody a zahradní cestičky svépomocí",
  description: "Návod na stavbu dřevěných schodů do svahu a zahradních cestiček z dřevěných pražců nebo dlažby.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/drevene-schody-a-cesticky-na-zahrade" },
  openGraph: { title: "Jak postavit dřevěné schody a zahradní cestičky svépomocí", description: "Návod na stavbu dřevěných schodů do svahu a zahradních cestiček z dřevěných pražců nebo dlažby.", url: "https://www.domovniguru.cz/blog/drevene-schody-a-cesticky-na-zahrade", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-12T08:00:00Z", modifiedTime: "2026-06-12T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20postavit%20d%C5%99ev%C4%9Bn%C3%A9%20schody%20a%20zahradn%C3%AD%20cesti%C4%8Dky%20sv%C3%A9pomoc%C3%AD&cat=blog", width: 1200, height: 630, alt: "Jak postavit dřevěné schody a zahradní cestičky svépomocí" }] },
  twitter: { card: "summary_large_image", title: "Jak postavit dřevěné schody a zahradní cestičky svépomocí", description: "Návod na stavbu dřevěných schodů do svahu a zahradních cestiček z dřevěných pražců nebo dlažby." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/drevene-schody-a-cesticky-na-zahrade#article", "headline": "Jak postavit dřevěné schody a zahradní cestičky svépomocí", "datePublished": "2026-06-12T08:00:00Z", "dateModified": "2026-06-12T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["dřevěné schody do svahu", "zahradní cestičky", "dřevěné pražce", "schody na zahradě", "zahradní cestička z dlažby"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Zahrada & terasa", "item": "https://www.domovniguru.cz/blog/kategorie/zahrada" }, { "@type": "ListItem", "position": 4, "name": "Dřevěné schody a cestičky na zahradě", "item": "https://www.domovniguru.cz/blog/drevene-schody-a-cesticky-na-zahrade" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Vyplatí se dřevěné schody do svahu, nebo je lepší kámen?", "acceptedAnswer": { "@type": "Answer", "text": "Dřevěné schody jsou levnější a rychleji se staví, hodí se pro mírnější svahy a méně frekventované trasy. Kamenné nebo betonové schody vydrží déle a snesou větší zatížení, ale stavba je dražší a náročnější. Pro běžnou zahradu jsou dřevěné schody z impregnovaných trámů nebo pražců dobrým kompromisem na 10–15 let." } }, { "@type": "Question", "name": "Jaké dřevo je nejlepší na zahradní schody a cestičky?", "acceptedAnswer": { "@type": "Answer", "text": "Nejlépe se osvědčí impregnované dřevo třídy odolnosti pro přímý styk se zemí (např. tlakově impregnovaná borovice), dubové nebo akátové pražce, případně kompozitní prkna z WPC. Dub a akát jsou přirozeně odolné proti vlhkosti i bez impregnace, ale jsou dražší." } }, { "@type": "Question", "name": "Jaký sklon by měly mít schody do svahu?", "acceptedAnswer": { "@type": "Answer", "text": "Ideální je výška stupně 12–18 cm a šířka nášlapu 28–35 cm. Při větším sklonu svahu raději zvol více nižších stupňů než méně vysokých – chůze bude pohodlnější a bezpečnější, zejména pro děti a starší osoby." } }, { "@type": "Question", "name": "Jak ochránit dřevěné schody proti houbám a hnilobě?", "acceptedAnswer": { "@type": "Answer", "text": "Použij impregnované dřevo nebo dřevo přirozeně odolné (dub, akát, modřín), pod stupně i kolem nich zajisti drenáž štěrkem a geotextilií, aby voda neustále nezatékala do dřeva. Pravidelně (každé 1–2 roky) obnovuj nátěr nebo impregnaci na viditelných plochách." } }, { "@type": "Question", "name": "Jak udělat dřevěné schody protiskluzové?", "acceptedAnswer": { "@type": "Answer", "text": "Na nášlapné plochy nalep protiskluzové pásky nebo použij rýhované terasové desky. Pomáhá i posyp jemným štěrkem nebo pískem zatlačeným do nátěru. V zimě je nutné schody udržovat bez listí, mechu a ledu, protože vlhké dřevo klouže nejvíc." } }] }] };

const RELATED = [
  { title: "Jak navrhnout zahradu od nuly – plán, zóny a výběr rostlin", href: "/blog/jak-navrhnout-zahradu", read: "8 min" },
  { title: "Jak ošetřit dřevěnou terasu – broušení, olej a lazura 2026", href: "/blog/drevo-terasa-zima", read: "5 min" },
  { title: "Jak postavit pergolu na terasu – dřevěná nebo hliníková 2026", href: "/blog/pergola-postup-stavba", read: "6 min" },
  { title: "Jak postavit dřevěný zahradní plot – postup krok za krokem 2026", href: "/blog/zahradni-plot-ze-dreva", read: "6 min" },
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
              <span>Dřevěné schody a cestičky na zahradě</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak postavit dřevěné schody a zahradní cestičky svépomocí</h1>
              <p className="article-lead">Svažitý pozemek nemusí být problém – stačí pár schodů a pohodlná cestička a ze svahu se stane funkční část zahrady. Dřevěné schody a cestičky z pražců nebo kulatiny se zvládnou postavit i bez bagru a betonu. Poradíme, jak na to, aby vám vydržely dlouho a bez hniloby.</p>
              <div className="article-meta-row"><span>Aktualizováno: 12. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#kdy-drevo">Kdy se vyplatí dřevo a kdy kámen nebo dlažba</a></li>
                <li><a href="#material">Výběr materiálu: impregnované dřevo, pražce, kompozit</a></li>
                <li><a href="#planovani">Plánování trasy a sklonu schodů ve svahu</a></li>
                <li><a href="#stavba-schodu">Postup stavby schodů do svahu</a></li>
                <li><a href="#cesticky">Stavba cestičky z pražců nebo kulatiny</a></li>
                <li><a href="#ochrana-bezpecnost">Ochrana dřeva, bezpečnost a údržba</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="kdy-drevo">
              <h2>Kdy se vyplatí dřevěné schody a cestičky, a kdy kámen nebo dlažba</h2>
              <p>Dřevo je první volba, pokud chcete řešení rychle, levně a vlastníma rukama. Stupně ze dřeva nebo pražců se dají poskládat za víkend, nepotřebujete míchačku ani bednění a v případě potřeby je snadno upravíte nebo přeskládáte. Hodí se hlavně pro mírnější a střední svahy, zahradní stezky do kompostu, k záhonům nebo k posezení.</p>
              <p>Kámen, betonová dlažba nebo zámková dlažba jsou naopak na místě tam, kde je svah hodně prudký, schody jsou hlavním a často používaným vstupem do domu, nebo kde chcete řešení na 30 a více let bez údržby. Kamenné schody snesou větší zatížení, lépe odolávají erozi a nehrozí u nich hniloba – za to si ale připlatíte a stavba je pracnější.</p>
              <p>Praktický kompromis je kombinace: dřevěné nebo pražcové schody do svahu, a kolem nich klasická cestička z dlažby nebo kačírku. Dřevo tak nese hlavní konstrukční roli (stupně), zatímco okolní plochy snesou vlhkost a provoz lépe.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud svah používáte denně (cesta k autu, ke vchodu), investujte raději do odolnějšího materiálu. Pro příležitostné trasy do kompostu nebo na záhony postačí i jednodušší dřevěné řešení.</div>
            </section>

            <section id="material">
              <h2>Výběr materiálu: impregnované dřevo, pražce, kompozit</h2>
              <h3>Impregnované dřevo</h3>
              <p>Nejdostupnější varianta jsou tlakově impregnované trámy a hranoly určené přímo pro styk se zemí (často označované jako třída použití 4). Impregnace dřevo chrání proti houbám a dřevokaznému hmyzu, životnost se tím prodlouží na 10–15 let. Cenově je to nejlevnější varianta na metr.</p>
              <h3>Dubové a akátové pražce</h3>
              <p>Staré železniční pražce z dubu nebo nové akátové pražce jsou přirozeně velmi odolné proti vlhkosti i bez impregnace – akát patří mezi nejtrvanlivější dřeviny vůbec a vydrží v zemi i 20–25 let. Nevýhodou je vyšší cena a u použitých dubových pražců často impregnace starého typu (creosot), kterou je dobré před použitím v zahradě prověřit, zejména pokud máte děti nebo zahrádku se zeleninou poblíž.</p>
              <h3>Kompozitní prkna (WPC)</h3>
              <p>Kompozit ze dřevěných vláken a plastu se nehodí jako nosný stupeň schodu, ale výborně poslouží jako nášlapná plocha na konstrukci z impregnovaných trámů. Nepotřebuje nátěry, nepraská a je odolný proti vlhkosti – ideální tam, kde chcete minimální údržbu. Než materiál koupíte, vyplatí se spočítat si přesné množství v <Link href="/kalkulacky/kolik-prknu" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačce počtu prken</Link>, ať nekupujete zbytečně mnoho a nevznikne velký odpad.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Kotevní prvky (vruty, úhelníky, kotevní hroty) volte vždy v nerezu nebo s povrchovou úpravou pro venkovní použití – běžné pozinkované šrouby ve vlhké zemině rychle zkorodují.</div>
            </section>

            <section id="planovani">
              <h2>Plánování trasy a sklonu schodů ve svahu</h2>
              <p>Než začnete kopat, vyznačte si trasu pomocí dřevěných kolíků a provázku. Sledujte, kudy přirozeně chodíte – lidé si stejně časem vyšlápnou nejkratší cestu, takže schody umístěné mimo přirozenou trasu se budou obcházet.</p>
              <p>Pro pohodlnou chůzi platí osvědčené poměry: výška jednoho stupně 12–18 cm, hloubka (šířka) nášlapu 28–35 cm. Čím nižší stupeň a hlubší nášlap, tím pohodlnější a bezpečnější chůze – zvlášť pokud schody budou používat děti, starší lidé nebo budete po nich vozit kolečko.</p>
              <p>Celkový počet stupňů zjistíte snadno: změřte výškový rozdíl mezi začátkem a koncem svahu (např. pomocí dlouhého rovného prkna a vodováhy nebo laserového měřiče) a vydělte ho zvolenou výškou stupně. Výsledek zaokrouhlete na celé číslo a tomu pak přizpůsobte výšku jednotlivých stupňů, aby byly všechny stejné – nerovnoměrné stupně jsou nejčastější příčina zakopnutí.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Výškový rozdíl svahu</th><th>Výška stupně</th><th>Orientační počet stupňů</th></tr></thead>
                  <tbody>
                    <tr><td>1 m</td><td>14 cm</td><td>~7</td></tr>
                    <tr><td>1,5 m</td><td>15 cm</td><td>~10</td></tr>
                    <tr><td>2 m</td><td>16 cm</td><td>~12–13</td></tr>
                    <tr><td>2,5 m</td><td>17 cm</td><td>~15</td></tr>
                  </tbody>
                </table>
              </div>
              <p>U delších schodišť (více než 10–12 stupňů) je vhodné vložit malou odpočinkovou plošinu – přeruší to monotónní stoupání a sníží riziko pádu při delším výstupu.</p>
            </section>

            <section id="stavba-schodu">
              <h2>Postup stavby schodů do svahu</h2>
              <h3>1. Výkop a hrubé tvarování</h3>
              <p>Podle vyznačené trasy vykopejte hrubý profil schodiště – odkrojte zeminu tak, aby vznikly přibližné stupně podle vypočítaných rozměrů. Zeminu z výkopu si nechte na vyrovnání okolí nebo na záhony, ušetříte odvoz.</p>
              <h3>2. Zajištění stupňů kůly</h3>
              <p>Pod přední hranu každého stupně (tam, kde bude trám nebo pražec) zatlučte dva až tři dřevěné nebo ocelové kůly, které zabrání posunu konstrukce dopředu při zatížení a tlaku zeminy. Kůly by měly vyčnívat jen mírně nad úroveň trámu, nebo být zaříznuty pod jeho horní hranu, aby nepřekážely.</p>
              <h3>3. Uložení trámů nebo pražců</h3>
              <p>Trám či pražec položte na zhutněný podklad (vrstva drceného kameniva pod ním pomůže s odvodem vody) a přitáhněte ho ke kůlům dlouhými vruty nebo skobami. Zkontrolujte vodováhou, že je stupeň v rovině podél své délky – mírný spád 1–2 % směrem dopředu je v pořádku a pomáhá odtoku vody.</p>
              <h3>4. Zásyp a zhutnění</h3>
              <p>Prostor za stupněm zasypte štěrkodrtí nebo zeminou a postupně zhutňujte po vrstvách (ručním pěchem nebo deskou). Horní vrstvu nášlapu můžete doplnit kačírkem, mlatovým povrchem nebo trávou podle toho, jaký vzhled chcete. Postup opakujte stupeň po stupni od spodu nahoru.</p>
              <h3>5. Boční zajištění svahu</h3>
              <p>Pokud je svah po stranách schodiště nestabilní nebo se sype, doplňte po stranách nízké pražcové nebo prkenné zídky, které zeminu podrží. U širších schodišť pomohou i postranní zábradlí nebo alespoň madlo z kulatiny – zejména u delších a krčejších schodišť.</p>
            </section>

            <section id="cesticky">
              <h2>Stavba cestičky z dřevěných pražců nebo kulatiny</h2>
              <p>Cestička z pražců nebo plátů kulatiny funguje podobně jako nášlapné kameny – jednotlivé kusy se kladou na připravený podklad v rozestupech odpovídajících přirozenému kroku (zhruba 60–70 cm mezi středy).</p>
              <h3>Příprava podkladu</h3>
              <p>Na trase cestičky odeberte ornici do hloubky 10–15 cm, dno zhutněte a nasypte vrstvu štěrku (frakce 8–16 mm nebo drceného kameniva) o tloušťce alespoň 8–10 cm. Štěrk zajistí drenáž – voda se nebude hromadit pod dřevem, což výrazně prodlouží jeho životnost.</p>
              <h3>Kladení pražců a kulatiny</h3>
              <p>Jednotlivé pražce nebo plátky kulatiny zapusťte do štěrkového lože tak, aby horní hrana byla v úrovni okolního terénu nebo jen nepatrně nad ním – zabráníte tak hromadění vody na povrchu dřeva i zakopnutí. Mezi jednotlivými kusy ponechte mezery 1–2 cm, případně je vyplňte kačírkem nebo nízkým rostlinným porostem (např. mateřídouškou) – mezery umožní odtok vody a zabrání tomu, aby se dřevo a okolní zemina staly jednou nepropustnou plochou.</p>
              <h3>Souvislá cestička z prken</h3>
              <p>Pokud chcete souvislejší povrch, lze postavit i jednoduchou dřevěnou pochozí lávku z impregnovaných hranolů jako nosníků a prken nebo kompozitních desek jako nášlapu – podobně jako u terasy, jen v užším provedení. I zde platí, že mezi prkny by měla zůstat spára 4–6 mm pro odvod vody a dilataci dřeva.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Než cestičku položíte, zkuste si trasu na pár dní vyznačit provázkem nebo deskami a sledujte, jak po ní chodíte. Často se ukáže, že ideální trasa je trochu jiná, než jste původně plánovali na papíře.</div>
            </section>

            <section id="ochrana-bezpecnost">
              <h2>Ochrana dřeva, bezpečnost a údržba</h2>
              <h3>Ochrana proti vlhkosti a houbám</h3>
              <p>Základem je správný výběr materiálu (impregnované dřevo, dub, akát) a kvalitní odvodnění – štěrkový podklad a geotextilie pod ním zabrání prorůstání plevele i nadměrnému zadržování vody v zemině pod dřevem. Geotextilie navíc oddělí štěrk od jílovité zeminy, takže se podklad časem nezanese a nepřestane fungovat jako drenáž.</p>
              <p>Řezné plochy a místa, kde jste trámy zkracovali nebo vrtali, doporučujeme dodatečně ošetřit impregnačním nátěrem nebo olejem – v těchto místech je dřevo nejvíc náchylné k navlhání. Více o údržbě dřeva venku najdete v článku o <Link href="/blog/drevo-terasa-zima" style={{ color: "#2a6496", textDecoration: "underline" }}>ošetření dřevěné terasy</Link>, postup je u schodů a cestiček velmi podobný.</p>
              <h3>Protiskluzové úpravy</h3>
              <p>Hladké dřevo nebo mokré pražce mohou v dešti i mrazu výrazně klouzat. Na nášlapné plochy schodů použijte rýhované terasové desky, protiskluzové pásky nebo lišty, případně do posledního nátěru zatřete jemný křemičitý písek. U cestiček pomáhá kačírek nebo mlatový povrch v mezerách mezi pražci, který zlepší přilnavost.</p>
              <h3>Osvětlení schodů</h3>
              <p>U schodů, které se používají i po setmění, vyplatí se osvětlení – stačí nízkonapěťové zahradní LED svítidla zapuštěná do bočnic nebo solární svítidla umístěná na okraji každého stupně. Osvětlení výrazně snižuje riziko zakopnutí a zároveň zvýrazní schodiště jako designový prvek zahrady.</p>
              <h3>Údržba a životnost</h3>
              <p>Jednou až dvakrát za rok zkontrolujte, zda nedošlo k uvolnění kůlů nebo prokácení trámů, odstraňte spadané listí a mech (zejména na podzim a v zimě, kdy nejvíc klouže) a obnovte nátěr nebo impregnaci podle doporučení výrobce, obvykle každé 1–3 roky. Při dodržení těchto zásad vydrží schody a cestičky z impregnovaného dřeva 10–15 let, z dubových nebo akátových pražců i 20 let a více.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Vyplatí se dřevěné schody do svahu, nebo je lepší kámen?", a: "Dřevěné schody jsou levnější a rychleji se staví, hodí se pro mírnější svahy a méně frekventované trasy. Kamenné nebo betonové schody vydrží déle a snesou větší zatížení, ale stavba je dražší a náročnější. Pro běžnou zahradu jsou dřevěné schody z impregnovaných trámů nebo pražců dobrým kompromisem na 10–15 let." },
                  { q: "Jaké dřevo je nejlepší na zahradní schody a cestičky?", a: "Nejlépe se osvědčí impregnované dřevo třídy odolnosti pro přímý styk se zemí (např. tlakově impregnovaná borovice), dubové nebo akátové pražce, případně kompozitní prkna z WPC. Dub a akát jsou přirozeně odolné proti vlhkosti i bez impregnace, ale jsou dražší." },
                  { q: "Jaký sklon by měly mít schody do svahu?", a: "Ideální je výška stupně 12–18 cm a šířka nášlapu 28–35 cm. Při větším sklonu svahu raději zvol více nižších stupňů než méně vysokých – chůze bude pohodlnější a bezpečnější, zejména pro děti a starší osoby." },
                  { q: "Jak ochránit dřevěné schody proti houbám a hnilobě?", a: "Použij impregnované dřevo nebo dřevo přirozeně odolné (dub, akát, modřín), pod stupně i kolem nich zajisti drenáž štěrkem a geotextilií, aby voda neustále nezatékala do dřeva. Pravidelně (každé 1–2 roky) obnovuj nátěr nebo impregnaci na viditelných plochách." },
                  { q: "Jak udělat dřevěné schody protiskluzové?", a: "Na nášlapné plochy nalep protiskluzové pásky nebo použij rýhované terasové desky. Pomáhá i posyp jemným štěrkem nebo pískem zatlačeným do nátěru. V zimě je nutné schody udržovat bez listí, mechu a ledu, protože vlhké dřevo klouže nejvíc." },
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
                <li><a href="#kdy-drevo">Dřevo, nebo kámen?</a></li>
                <li><a href="#material">Výběr materiálu</a></li>
                <li><a href="#planovani">Plánování trasy a sklonu</a></li>
                <li><a href="#stavba-schodu">Stavba schodů do svahu</a></li>
                <li><a href="#cesticky">Stavba cestičky</a></li>
                <li><a href="#ochrana-bezpecnost">Ochrana a bezpečnost</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/zahrada" className="sidebar-cat-link">🌿 Zahrada & terasa<span>články →</span></Link>
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
