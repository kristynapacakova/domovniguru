import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Malování ve výškách: lešení a žebříky",
  description: "Kdy stačí žebřík a kdy je potřeba lešení, jak bezpečně malovat schodiště a vysoké stropy, a jak se vyhnout nejčastějším úrazům.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/malovani-ve-vyskach-lesteni-a-zebriky" },
  openGraph: {
    title: "Malování ve výškách: lešení a žebříky",
    description: "Kdy stačí žebřík a kdy je potřeba lešení, jak bezpečně malovat schodiště a vysoké stropy, a jak se vyhnout nejčastějším úrazům.",
    url: "https://www.domovniguru.cz/blog/malovani-ve-vyskach-lesteni-a-zebriky",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "article",
    publishedTime: "2026-06-25T08:00:00Z",
    modifiedTime: "2026-06-25T08:00:00Z",
    authors: ["DomovniGuru"],
    images: [{ url: "/api/og?title=Malov%C3%A1n%C3%AD%20ve%20v%C3%BD%C5%A1k%C3%A1ch%3A%20le%C5%A1en%C3%AD%20a%20%C5%BEebř%C3%ADky&cat=blog", width: 1200, height: 630, alt: "Malování ve výškách: lešení a žebříky" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Malování ve výškách: lešení a žebříky",
    description: "Kdy stačí žebřík a kdy je potřeba lešení, bezpečnostní zásady a časté úrazy.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.domovniguru.cz/blog/malovani-ve-vyskach-lesteni-a-zebriky#article",
      "headline": "Malování ve výškách: lešení a žebříky",
      "description": "Kdy stačí žebřík a kdy je potřeba lešení, jak bezpečně malovat schodiště a vysoké stropy, a jak se vyhnout nejčastějším úrazům.",
      "datePublished": "2026-06-25T08:00:00Z",
      "dateModified": "2026-06-25T08:00:00Z",
      "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.domovniguru.cz/blog/malovani-ve-vyskach-lesteni-a-zebriky" },
      "inLanguage": "cs",
      "keywords": ["malování ve výškách", "lešení na malování", "žebřík na malování stropu", "bezpečnost na žebříku", "malování schodiště"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.domovniguru.cz/blog/malovani-ve-vyskach-lesteni-a-zebriky#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" },
        { "@type": "ListItem", "position": 3, "name": "Malování & barvy", "item": "https://www.domovniguru.cz/blog/kategorie/malovani" },
        { "@type": "ListItem", "position": 4, "name": "Malování ve výškách: lešení a žebříky", "item": "https://www.domovniguru.cz/blog/malovani-ve-vyskach-lesteni-a-zebriky" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.domovniguru.cz/blog/malovani-ve-vyskach-lesteni-a-zebriky#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Kdy už nestačí žebřík a je potřeba lešení?", "acceptedAnswer": { "@type": "Answer", "text": "Žebřík je vhodný do běžné výšky stropu v bytě (do cca 2,7–3 m), kde se dá pohodlně pracovat z jedné polohy. Při vyšších stropech, v atriích, nad schodišti nebo když potřebuješ malovat delší dobu na jednom místě, je bezpečnější a efektivnější malířská kozová lešení nebo pracovní plošina." } },
        { "@type": "Question", "name": "Jaký žebřík je nejvhodnější na malování stropu?", "acceptedAnswer": { "@type": "Answer", "text": "Pro malování stropu se nejlépe hodí dvojitý (štafle) žebřík se širokou plošinou nahoře, případně teleskopický žebřík, který lze nastavit na přesnou výšku. Jednoduchý opěrný žebřík se musí opírat o stěnu, což pro práci se stropem není praktické." } },
        { "@type": "Question", "name": "Je bezpečné stoupat na poslední příčku žebříku?", "acceptedAnswer": { "@type": "Answer", "text": "Ne, na poslední příčku ani na horní plošinu žebříku (pokud výrobce výslovně neoznačí jako plošinu pro stání) se nestoupá. Snižuje se tím stabilita a hrozí převážení žebříku. Vždy zůstaň minimálně jednu až dvě příčky od vrcholu." } },
        { "@type": "Question", "name": "Jak bezpečně malovat schodiště nebo vysoký prostor nad schody?", "acceptedAnswer": { "@type": "Answer", "text": "Nad schodištěm se kvůli nerovnému podkladu nedoporučuje běžný žebřík – řešením jsou speciální žebříky s nastavitelnou délkou noh pro schody, nebo lépe lehké modulární lešení se stavitelnými patkami, které se srovná do roviny i na schodech." } },
        { "@type": "Question", "name": "Co je prodlužovací váleček a kdy ho použít místo žebříku?", "acceptedAnswer": { "@type": "Answer", "text": "Prodlužovací (teleskopická) tyč na váleček umožňuje malovat strop nebo vysoké části stěny ze země, bez nutnosti žebříku. Je vhodná pro rovné plochy, ale nehodí se do rohů, kolem světel nebo na detailní práci, kde je potřeba žebřík nebo plošina." } },
        { "@type": "Question", "name": "Jaké jsou nejčastější úrazy při malování ve výškách a jak jim předejít?", "acceptedAnswer": { "@type": "Answer", "text": "Nejčastější jsou pády ze žebříku kvůli přetížení na jednu stranu, nestabilnímu podkladu nebo stoupnutí na horní příčky. Prevence: vždy mít žebřík na rovném a stabilním povrchu, nepřetěžovat se na jednu stranu, mít při delší práci ve výšce druhou osobu nablízku a nepřeceňovat dosah – raději žebřík posunout o krok než se přetahovat." } },
      ],
    },
  ],
};

const RELATED = [
  { title: "Jak malovat strop bez šmouh", href: "/blog/jak-malovat-strop", read: "5 min" },
  { title: "Jak vybrat štětce a válečky pro různé typy nátěrů", href: "/blog/vyber-stetcu-a-valecku", read: "5 min" },
  { title: "Jak malovat dřevěné schody a zábradlí, aby barva vydržela", href: "/blog/jak-malovat-drevene-schody", read: "6 min" },
  { title: "Jak používat stříkací pistoli na nátěry", href: "/blog/jak-pouzivat-strikaci-pistoli", read: "5 min" },
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
              <span>Malování ve výškách: lešení a žebříky</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování & barvy</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Malování ve výškách: lešení a žebříky</h1>
              <p className="article-lead">Vysoký strop, schodiště nebo atrium dokážou nepříjemně zkomplikovat i jinak jednoduché malování. Špatně zvolený žebřík nebo improvizované „lešení" z bedny a stoličky patří mezi nejčastější příčiny úrazů při domácích pracích. V tomto článku si ukážeme, kdy stačí žebřík, kdy se vyplatí lešení, a jak celou práci zvládnout bezpečně.</p>
              <div className="article-meta-row"><span>Aktualizováno: 25. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#zebrik-nebo-lesteni">Žebřík, nebo lešení?</a></li>
                <li><a href="#typy-zebriku">Typy žebříků a jejich použití</a></li>
                <li><a href="#bezpecne-pouzivani">Bezpečné používání žebříku</a></li>
                <li><a href="#lesteni">Jednoduché malířské lešení a plošiny</a></li>
                <li><a href="#schodiste">Malování nad schodištěm a v atriu</a></li>
                <li><a href="#valecky">Prodlužovací válečky jako alternativa</a></li>
                <li><a href="#urazy">Časté úrazy a jak jim předejít</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="zebrik-nebo-lesteni">
              <h2>Žebřík, nebo lešení?</h2>
              <p>První rozhodnutí, které musíš udělat, je, jestli na danou práci stačí žebřík, nebo je potřeba lešení či pracovní plošina. Hlavní kritéria jsou výška stropu, charakter prostoru a délka práce na jednom místě.</p>
              <ul>
                <li><strong>Standardní byt nebo dům (do cca 2,7–3 m)</strong> – obvykle stačí kvalitní dvojitý žebřík nebo štafle</li>
                <li><strong>Vyšší stropy, atria, schodišťové prostory</strong> – zde se žebřík stává nestabilním nebo nedosáhne, je čas na lešení</li>
                <li><strong>Dlouhodobá práce na jednom místě</strong> – stahování a opětovné přestavování žebříku každých pár minut je nepraktické a zvyšuje riziko nehody; lešení nebo plošina umožní stabilní práci po delší dobu</li>
                <li><strong>Práce nad schody</strong> – nerovný podklad vyžaduje speciální žebřík se stavitelnými nohami nebo modulární lešení</li>
              </ul>
              <p>Obecné pravidlo: pokud bys na žebříku musel stát déle než pár minut na jednom místě, nebo pokud se necítíš stabilně, je čas sáhnout po jiném řešení – zapůjčení malého lešení stojí řádově stovky korun na den a vyplatí se to i kvůli rychlosti práce.</p>
            </section>

            <section id="typy-zebriku">
              <h2>Typy žebříků a jejich použití</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ žebříku</th><th>Vhodné pro</th><th>Poznámka</th></tr></thead>
                  <tbody>
                    <tr><td>Dvojitý (štafle)</td><td>Stropy, samostatně stojící práce bez opory o zeď</td><td>Stojí samostatně, ideální do volného prostoru místnosti</td></tr>
                    <tr><td>Teleskopický</td><td>Univerzální použití, transport a uskladnění</td><td>Lze přesně nastavit výšku, kompaktní při skládání</td></tr>
                    <tr><td>Vícenásobný / víceúčelový žebřík</td><td>Schody, různé výšky a tvary povrchu</td><td>Stavitelné segmenty se přizpůsobí nerovnému terénu</td></tr>
                    <tr><td>Jednoduchý opěrný</td><td>Práce u stěny, vstup na střechu/balkón</td><td>Musí se opírat o pevný a stabilní povrch, nehodí se na stropy uprostřed místnosti</td></tr>
                  </tbody>
                </table>
              </div>
              <h3>Dvojitý žebřík (štafle)</h3>
              <p>Nejběžnější volba pro malování stropu a horních částí stěn v interiéru. Stojí samostatně, takže ho lze umístit kamkoliv do místnosti bez nutnosti opory. Vybírej model se širší horní plošinou pro odložení barvy a štětce.</p>
              <h3>Teleskopický žebřík</h3>
              <p>Výhodou je možnost přesně nastavit výšku a po práci žebřík složit do malého balíku – ideální, pokud máš omezený prostor na uskladnění. Při malování je potřeba ho opírat o stabilní svislou plochu.</p>
              <h3>Víceúčelový (kloubový) žebřík</h3>
              <p>Segmenty s klouby umožňují žebřík nastavit do tvaru schodů, do tvaru "A" nebo jako prodloužený opěrný žebřík. Vhodný univerzálně, zejména pro nerovné prostory jako schodiště.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Před nákupem nebo zapůjčením žebříku ověř maximální nosnost (uvedenou na štítku) – musí počítat nejen s tvou váhou, ale i s váhou barvy, nářadí a případného nářadí v opasku.</div>
            </section>

            <section id="bezpecne-pouzivani">
              <h2>Bezpečné používání žebříku</h2>
              <ul>
                <li><strong>Stabilní a rovný povrch</strong> – žebřík nikdy nestav na nestabilní, klouzavou nebo nerovnou podlahu; pod nohy lze v interiéru použít neklouzavou podložku</li>
                <li><strong>Nikdy na poslední příčku</strong> – u dvojitého žebříku nikdy nestoupej na nejvyšší příčku ani na horní plošinu, pokud nejde o plošinu výslovně určenou k stání</li>
                <li><strong>Tři opěrné body</strong> – při práci ve výšce udržuj kontakt se žebříkem alespoň dvěma nohama a jednou rukou, ideálně i dvěma rukama, pokud práce dovolí</li>
                <li><strong>Nepřetěžuj se na stranu</strong> – pokud nedosáhneš na místo, posuň žebřík, nepřetahuj se a neklaň se do strany – to je nejčastější příčina převrácení</li>
                <li><strong>Druhá osoba nablízku</strong> – při delší práci ve výšce je dobré mít v doslechu nebo na dohled druhou osobu, která může v případě potřeby pomoct nebo zavolat pomoc</li>
                <li><strong>Vhodné boty</strong> – pevná, neklouzavá obuv, nikdy práce v ponožkách nebo na boso</li>
                <li><strong>Zkontroluj zámky a klouby</strong> – u skládacích a teleskopických žebříků se před každým použitím ujisti, že jsou všechny zajišťovací mechanismy plně zaklapnuté</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Plechovku s barvou nenos v ruce po žebříku nahoru a dolů – zavěs si malý kbelík s barvou na hák přímo na žebřík nebo používej opasek s kapsou na nářadí. Volné ruce při výstupu výrazně zvyšují bezpečnost.</div>
            </section>

            <section id="lesteni">
              <h2>Jednoduché malířské lešení a pracovní plošiny</h2>
              <p>Pro rozsáhlejší malování (celé patro, schodišťová hala, vysoký strop v obytné místnosti) se vyplatí zapůjčit jednoduché kozové lešení nebo modulární pracovní plošinu – v půjčovnách nářadí je to běžná a cenově dostupná služba.</p>
              <h3>Kozové (malířské) lešení</h3>
              <p>Skládá se z kovových koz a dřevěných nebo hliníkových fošen, které mezi nimi vytvoří pevnou pracovní plochu. Výhodou je stabilní, široký prostor k práci, na kterém se dá pohodlně pohybovat s barvou i nářadím, aniž bys musel přerušovat práci a slézat dolů.</p>
              <h3>Modulární lešení</h3>
              <p>Skládá se z rámů, které se na sebe vrství a vytvoří pevnou konstrukci do libovolné výšky. Hodí se pro vyšší stropy a fasády. Půjčovny obvykle nabízejí i montáž, což se vyplatí, pokud s lešením nemáš zkušenost.</p>
              <h3>Na co si dát pozor při půjčování</h3>
              <ul>
                <li>Vždy si nech vysvětlit maximální nosnost a způsob správného sestavení</li>
                <li>Zkontroluj, že všechny patky lešení stojí na pevném a rovném povrchu, případně použij stavitelné patky pro vyrovnání</li>
                <li>Zábradlí nebo boční výztuhy nejsou u malých lešení samozřejmostí – pokud práce trvá delší dobu a jsi ve velké výšce, vyžádej si verzi se zábradlím</li>
              </ul>
            </section>

            <section id="schodiste">
              <h2>Malování nad schodištěm a v atriu</h2>
              <p>Schodiště a atria patří mezi nejrizikovější místa pro malování ve výškách – kombinace nerovného podkladu a velké výšky pádu vyžaduje speciální přístup.</p>
              <ul>
                <li><strong>Žebřík se stavitelnými nohami pro schody</strong> – umožňuje srovnat žebřík do roviny i na schodišťových stupních</li>
                <li><strong>Modulární lešení s nastavitelnými patkami</strong> – bezpečnější varianta pro delší práci, patky se vyrovnají na různou výšku jednotlivých stupňů</li>
                <li><strong>Nikdy neimprovizovat</strong> – žebřík opřený o zábradlí, podložený knihami nebo kombinovaný se štaflemi položenými na schodu je extrémně nebezpečný a je hlavní příčinou vážných pádů</li>
                <li><strong>Pracuj s pomocníkem</strong> – ve schodišťovém prostoru je riziko pádu výrazně vyšší, druhá osoba může žebřík nebo lešení přidržet a v případě problému okamžitě zasáhnout</li>
              </ul>
              <p>Pokud zároveň řešíš povrchovou úpravu dřevěného zábradlí nebo schodů, mrkni na náš návod, jak <Link href="/blog/jak-malovat-drevene-schody" style={{ color: "#2a6496", textDecoration: "underline" }}>malovat dřevěné schody a zábradlí</Link>, aby barva dlouho vydržela.</p>
            </section>

            <section id="valecky">
              <h2>Prodlužovací válečky jako alternativa</h2>
              <p>Pro rovné plochy stropu nebo horní části stěn je často nejpraktičtějším a nejbezpečnějším řešením teleskopická (prodlužovací) tyč na váleček. Umožňuje malovat ze země, bez nutnosti vystupovat na žebřík vůbec.</p>
              <ul>
                <li><strong>Výhody</strong> – žádné riziko pádu, rychlejší práce na velkých rovných plochách, není potřeba časté přestavování žebříku</li>
                <li><strong>Nevýhody</strong> – nehodí se do rohů, kolem osvětlení nebo na detailní práci; vyžaduje trochu cviku s odhadem tlaku a směru tahu</li>
                <li><strong>Kombinace s žebříkem</strong> – velké rovné plochy zvládneš tyčí ze země, rohy a detaily pak doladíš krátkým výstupem na žebřík se štětcem</li>
              </ul>
              <p>Více o výběru vhodných válečků a štětců pro různé povrchy najdeš v článku <Link href="/blog/vyber-stetcu-a-valecku" style={{ color: "#2a6496", textDecoration: "underline" }}>jak vybrat štětce a válečky</Link>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Při práci s prodlužovací tyčí maluj v menších úsecích a pravidelně kontroluj rovnoměrnost nátěru – ze země je těžší odhadnout, jestli nezůstávají na stropě šmouhy nebo nedomalovaná místa.</div>
            </section>

            <section id="urazy">
              <h2>Časté úrazy a jak jim předejít</h2>
              <h3>Pád ze žebříku při přetížení na stranu</h3>
              <p>Nejčastější úraz vůbec. Vzniká, když se člověk natahuje do strany, aby nemusel slézat a posunout žebřík. Prevence: vždy mít boky mezi postranicemi žebříku, při potřebě dosáhnout dál žebřík přesunout.</p>
              <h3>Sjetí žebříku po nestabilním povrchu</h3>
              <p>Stávat se může na hladké dlažbě, koberci nebo nerovné podlaze. Prevence: neklouzavé patky, kontrola rovnosti podkladu, případně neklouzavá podložka pod nohy žebříku.</p>
              <h3>Pád z poslední příčky nebo horní plošiny</h3>
              <p>Stání na nejvyšší příčce snižuje stabilitu žebříku a zvyšuje riziko převrácení dozadu. Prevence: vždy zůstat alespoň jednu až dvě příčky pod vrcholem.</p>
              <h3>Pád předmětu na hlavu druhé osoby</h3>
              <p>Při práci ve výšce může spadnout nářadí nebo plechovka s barvou. Prevence: nářadí ukládej do upevněné kapsy nebo háčku na žebříku, ne na okraj plošiny, a vykaž ostatní osoby z prostoru přímo pod žebříkem.</p>
              <h3>Podcenění výšky a délky práce</h3>
              <p>Dlouhá práce ve výšce únavou zhoršuje koncentraci a koordinaci. Prevence: dělej pravidelné přestávky, nepracuj ve výškách, pokud jsi unavený nebo ti není dobře.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Kdy už nestačí žebřík a je potřeba lešení?", a: "Žebřík je vhodný do běžné výšky stropu v bytě (do cca 2,7–3 m), kde se dá pohodlně pracovat z jedné polohy. Při vyšších stropech, v atriích, nad schodišti nebo když potřebuješ malovat delší dobu na jednom místě, je bezpečnější a efektivnější malířská kozová lešení nebo pracovní plošina." },
                  { q: "Jaký žebřík je nejvhodnější na malování stropu?", a: "Pro malování stropu se nejlépe hodí dvojitý (štafle) žebřík se širokou plošinou nahoře, případně teleskopický žebřík, který lze nastavit na přesnou výšku. Jednoduchý opěrný žebřík se musí opírat o stěnu, což pro práci se stropem není praktické." },
                  { q: "Je bezpečné stoupat na poslední příčku žebříku?", a: "Ne, na poslední příčku ani na horní plošinu žebříku (pokud výrobce výslovně neoznačí jako plošinu pro stání) se nestoupá. Snižuje se tím stabilita a hrozí převážení žebříku. Vždy zůstaň minimálně jednu až dvě příčky od vrcholu." },
                  { q: "Jak bezpečně malovat schodiště nebo vysoký prostor nad schody?", a: "Nad schodištěm se kvůli nerovnému podkladu nedoporučuje běžný žebřík – řešením jsou speciální žebříky s nastavitelnou délkou noh pro schody, nebo lépe lehké modulární lešení se stavitelnými patkami, které se srovná do roviny i na schodech." },
                  { q: "Co je prodlužovací váleček a kdy ho použít místo žebříku?", a: "Prodlužovací (teleskopická) tyč na váleček umožňuje malovat strop nebo vysoké části stěny ze země, bez nutnosti žebříku. Je vhodná pro rovné plochy, ale nehodí se do rohů, kolem světel nebo na detailní práci, kde je potřeba žebřík nebo plošina." },
                  { q: "Jaké jsou nejčastější úrazy při malování ve výškách a jak jim předejít?", a: "Nejčastější jsou pády ze žebříku kvůli přetížení na jednu stranu, nestabilnímu podkladu nebo stoupnutí na horní příčky. Prevence: vždy mít žebřík na rovném a stabilním povrchu, nepřetěžovat se na jednu stranu, mít při delší práci ve výšce druhou osobu nablízku a nepřeceňovat dosah – raději žebřík posunout o krok než se přetahovat." },
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
                <li><a href="#zebrik-nebo-lesteni">Žebřík, nebo lešení?</a></li>
                <li><a href="#typy-zebriku">Typy žebříků</a></li>
                <li><a href="#bezpecne-pouzivani">Bezpečné používání</a></li>
                <li><a href="#lesteni">Lešení a plošiny</a></li>
                <li><a href="#schodiste">Schodiště a atria</a></li>
                <li><a href="#valecky">Prodlužovací válečky</a></li>
                <li><a href="#urazy">Časté úrazy</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/malovani" className="sidebar-cat-link">🎨 Malování & barvy<span>30 článků →</span></Link>
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
