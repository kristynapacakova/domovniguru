import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak postavit zahradní jezírko svépomocí",
  description: "Výběr místa, fólie nebo jezírková nádrž, filtrace a osázení – kompletní postup stavby zahradního jezírka.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/stavba-zahradniho-jezirka" },
  openGraph: { title: "Jak postavit zahradní jezírko svépomocí", description: "Výběr místa, fólie nebo jezírková nádrž, filtrace a osázení – kompletní postup stavby zahradního jezírka.", url: "https://www.domovniguru.cz/blog/stavba-zahradniho-jezirka", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-12T08:00:00Z", modifiedTime: "2026-06-12T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20postavit%20zahradn%C3%AD%20jez%C3%ADrko%20sv%C3%A9pomoc%C3%AD&cat=blog", width: 1200, height: 630, alt: "Jak postavit zahradní jezírko svépomocí" }] },
  twitter: { card: "summary_large_image", title: "Jak postavit zahradní jezírko svépomocí", description: "Výběr místa, fólie nebo jezírková nádrž, filtrace a osázení – kompletní postup stavby zahradního jezírka." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/stavba-zahradniho-jezirka#article", "headline": "Jak postavit zahradní jezírko svépomocí", "datePublished": "2026-06-12T08:00:00Z", "dateModified": "2026-06-12T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["zahradní jezírko", "stavba jezírka", "jezírková fólie", "filtrace jezírka", "jezírko na zahradě"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Zahrada & terasa", "item": "https://www.domovniguru.cz/blog/kategorie/zahrada" }, { "@type": "ListItem", "position": 4, "name": "Jak postavit zahradní jezírko svépomocí", "item": "https://www.domovniguru.cz/blog/stavba-zahradniho-jezirka" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jaká je nejlepší hloubka zahradního jezírka?", "acceptedAnswer": { "@type": "Answer", "text": "Pro jezírko, které má přes zimu fungovat i s rybami, je potřeba alespoň jedna zóna o hloubce 80–120 cm, kam mráz nedosáhne. Mělčí jezírka bez ryb mohou mít hloubku kolem 60–80 cm, ale i tak je dobré mít hlubší část kvůli stabilitě teploty vody." } }, { "@type": "Question", "name": "Fólie, nebo předtvarovaná nádrž?", "acceptedAnswer": { "@type": "Answer", "text": "Předtvarovaná nádrž je rychlejší řešení pro menší jezírka do pár tisíc litrů a má pevný tvar i danou hloubku. Fólie je univerzálnější, umožňuje libovolný tvar a velikost a vychází levněji na větší plochy, ale vyžaduje pečlivější přípravu podkladu." } }, { "@type": "Question", "name": "Potřebuje jezírko vždy filtraci a čerpadlo?", "acceptedAnswer": { "@type": "Answer", "text": "Malé jezírko bez ryb s dostatkem rostlin může fungovat i bez filtrace, voda se ale snadněji zazelená. Jezírko s rybami filtraci a oběh vody potřebuje vždy – ryby produkují odpadní látky, které musí biologický filtr rozkládat, jinak voda rychle degraduje." } }, { "@type": "Question", "name": "Jak se jezírko zazimuje?", "acceptedAnswer": { "@type": "Answer", "text": "Před zimou se odstraní spadané listí a odumřelé části rostlin, sníží se nebo vypne výkon čerpadla a UV lampa se na zimu vypíná. Pokud jsou v jezírku ryby, je potřeba zajistit otvor v ledu pro výměnu plynů – pomocí jezírkového odmrazovače nebo vzduchování." } }, { "@type": "Question", "name": "Je jezírko bezpečné, pokud máme malé děti?", "acceptedAnswer": { "@type": "Answer", "text": "Jezírko s otevřenou hladinou představuje riziko utonutí pro malé děti, proto je vhodné jej oplotit nebo zakrýt pevnou mřížkou, dokud děti nejsou starší. Alternativou je mělčí jezírko s pozvolnými okraji nebo dočasné zasíťování hladiny v období, kdy si děti hrají na zahradě bez dozoru." } }] }] };

const RELATED = [
  { title: "Jak navrhnout zahradu od nuly – plán, zóny a výběr rostlin", href: "/blog/jak-navrhnout-zahradu", read: "7 min" },
  { title: "Automatické zavlažování zahrady – instalace, nastavení a cena", href: "/blog/automaticke-zavlazovani-zahrady", read: "6 min" },
  { title: "Jak postavit vyvýšený záhon – dřevěný nebo z betonu", href: "/blog/vyvyseny-zahon-postup", read: "6 min" },
  { title: "Kalkulačka: kolik stojí zavlažování zahrady", href: "/kalkulacky/kolik-zavlahy", read: "2 min" },
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
              <span>Stavba zahradního jezírka</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 7 min čtení</span>
              </div>
              <h1 className="article-h1">Jak postavit zahradní jezírko svépomocí</h1>
              <p className="article-lead">Jezírko dokáže během pár let proměnit obyčejnou zahradu v místo, kam se chodíš dívat každý den. Stavba ale není jen o výkopu díry a vložení fólie – rozhoduje výběr místa, hloubka, filtrace a osázení. Tady je kompletní postup od plánu po zazimování.</p>
              <div className="article-meta-row"><span>Aktualizováno: 12. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#misto">Výběr vhodného místa</a></li>
                <li><a href="#typy">Typy jezírek – fólie, nádrž, nebo koupací jezírko</a></li>
                <li><a href="#vykop">Výkop a tvarování dna</a></li>
                <li><a href="#podklad">Podklad a ochrana fólie</a></li>
                <li><a href="#filtrace">Filtrace a oběh vody</a></li>
                <li><a href="#osazeni">Osázení a ryby vs. bez ryb</a></li>
                <li><a href="#udrzba">Údržba, zazimování a bezpečnost</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="misto">
              <h2>Výběr vhodného místa</h2>
              <p>Umístění jezírka je rozhodnutí, které se zpětně těžko opravuje, proto mu věnuj čas už při <Link href="/blog/jak-navrhnout-zahradu" style={{ color: "#2a6496", textDecoration: "underline" }}>návrhu zahrady</Link>. Ideální poloha je tam, kde jezírko dostane slunce alespoň polovinu dne, ale není vystaveno celodennímu žáru.</p>
              <ul>
                <li><strong>Slunce a stín</strong> – 4–6 hodin slunce denně stačí pro většinu vodních rostlin a lekníny kvetou nejlépe. Celodenní slunce ve spojení s malým objemem vody znamená rychlejší růst řas a kolísání teploty.</li>
                <li><strong>Vzdálenost od stromů</strong> – listí padající do vody se rozkládá, spotřebovává kyslík a zanáší dno. Kořeny velkých stromů navíc mohou poškodit fólii nebo nádrž. Od vzrostlých listnáčů udržuj odstup alespoň 3–5 metrů.</li>
                <li><strong>Svah a terén</strong> – na rovině se jezírko staví nejsnáz, okraje jsou na stejné úrovni a fólie se snadno vyrovnává. Na svahu je potřeba jednu stranu dosypat a zpevnit, aby okraj nebyl výš než hladina vody – jinak fólie prosvítá a vypadá to neuklizeně.</li>
                <li><strong>Dostupnost elektřiny</strong> – pro čerpadlo, filtr a případně UV lampu potřebuješ zásuvku poblíž, ideálně s ochranným spínačem (proudovým chráničem) kvůli vlhkému prostředí.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Než začneš kopat, vyznač tvar jezírka provazem nebo zahradní hadicí a nech ho na místě pár dní. Sleduj, kudy chodíš, kde stojí stín stromu v poledne a jak tvar působí z terasy.</div>
            </section>

            <section id="typy">
              <h2>Typy jezírek – fólie, nádrž, nebo koupací jezírko</h2>
              <p>Volba typu ovlivní rozpočet, náročnost stavby i konečný tvar jezírka. Vyplatí se rozhodnout dřív, než začneš kopat, protože každý typ má jiné nároky na tvar výkopu.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ</th><th>Vhodné pro</th><th>Tvar</th><th>Orientační cena materiálu</th></tr></thead>
                  <tbody>
                    <tr><td>Fóliové jezírko</td><td>libovolnou velikost a tvar</td><td>volný, organický</td><td>od cca 3 000 Kč (malé) výš</td></tr>
                    <tr><td>Předtvarovaná nádrž</td><td>menší jezírka do cca 2 000–3 000 l</td><td>pevný, daný tvarem</td><td>2 000–15 000 Kč</td></tr>
                    <tr><td>Přírodní koupací jezírko</td><td>plavání + okrasná funkce</td><td>dvě zóny – plavecká a regenerační</td><td>desítky tisíc a výš podle velikosti</td></tr>
                  </tbody>
                </table>
              </div>
              <h3>Fóliové jezírko</h3>
              <p>Nejflexibilnější řešení. Používá se PVC fólie (levnější, životnost cca 10–15 let) nebo kaučuková fólie EPDM (dražší, ale vydrží i 20–30 let a lépe odolává mrazu a UV záření). Fólie se přizpůsobí jakémukoli tvaru, takže můžeš navrhnout jezírko přesně podle zahrady.</p>
              <h3>Předtvarovaná nádrž</h3>
              <p>Plastová nebo skelnolaminátová nádrž s předem danými stupni a hloubkami. Stavba je rychlejší – stačí vykopat jámu podle tvaru nádrže, podsypat pískem a usadit. Nevýhodou je omezená velikost a tvar, větší nádrže navíc bývají drahé.</p>
              <h3>Přírodní koupací jezírko</h3>
              <p>Kombinuje plaveckou zónu s regenerační (rostlinnou) zónou, která funguje jako přirozený filtr bez chemie. Vyžaduje větší plochu (obvykle od cca 30–40 m² celkové vodní plochy) a propracovanější systém proudění vody mezi zónami. Je to investice na míru, často se zde vyplatí spolupráce s odborníkem na hydraulický návrh.</p>
            </section>

            <section id="vykop">
              <h2>Výkop a tvarování dna a stupňů pro rostliny</h2>
              <p>Výkop je nejnáročnější fyzická část stavby a zároveň určuje, jak bude jezírko fungovat. Nejde jen o díru – jde o systém stupňů (teras) v různých hloubkách.</p>
              <ul>
                <li><strong>Pobřežní zóna (0–20 cm)</strong> – mělký okraj pro bahenní a vlhkomilné rostliny, zároveň bezpečnostní stupeň, který zpomalí pád do vody.</li>
                <li><strong>Mokřadní zóna (20–40 cm)</strong> – pro rostliny jako kosatce, blatouchy nebo zevary, které mají kořeny ve vodě, ale listy nad hladinou.</li>
                <li><strong>Hlubší zóna (40–80 cm)</strong> – pro leknín a ponořené rostliny, zároveň přechodový stupeň ke dnu.</li>
                <li><strong>Hloubková zóna (80–120 cm)</strong> – nezbytná, pokud chceš v jezírku ryby přes zimu nebo chceš stabilní teplotu vody v létě. Pod úrovní zámrzu voda neztuhne na dno.</li>
              </ul>
              <p>Stupně by měly mít šířku alespoň 30–40 cm, aby na nich fólie nebo nádrž dobře držela a rostliny v košících měly kde stát. Stěny jezírka dělej se sklonem – ideálně 20–30° od svislice. Svislé stěny se časem sesouvají a u fólie hrozí protržení.</p>
              <p>Vykopanou zeminu využij na úpravu okolního terénu – třeba na mírný kopeček za jezírkem, který skryje hadice a kabeláž a zároveň zpestří kompozici.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Před zasypáním si zkontroluj vodorovnost okrajů vodováhou na dlouhém prkně. I malý rozdíl ve výšce okraje se po napuštění projeví jako nerovná hladina a viditelný pruh fólie na jedné straně.</div>
            </section>

            <section id="podklad">
              <h2>Podklad a ochrana fólie</h2>
              <p>Fólie sama o sobě je odolná, ale proti kořenům, kamínkům a hranatým předmětům v zemině potřebuje ochrannou vrstvu. Bez ní hrozí během měsíců až let propíchnutí a pomalý únik vody, který se těžko hledá.</p>
              <ul>
                <li><strong>Vyrovnání dna</strong> – odstraň kořeny, kameny a ostré předměty z celé plochy výkopu, včetně stupňů.</li>
                <li><strong>Vrstva písku (3–5 cm)</strong> – na dno a stupně se rozprostře jemný písek, který vyplní drobné nerovnosti.</li>
                <li><strong>Geotextilie</strong> – netkaná textilie se položí na písek a vytáhne i na stěny a okraje. Tvoří hlavní ochrannou bariéru mezi zeminou a fólií. U kamenitých podkladů je vhodné použít dvě vrstvy.</li>
                <li><strong>Fólie</strong> – rozprostře se přes geotextilii s dostatečnou rezervou na okrajích (alespoň 30–50 cm přesahu navíc na pozdější úpravu okrajů). Fólii nech den ležet na slunci, aby zvláčněla a lépe se přizpůsobila tvaru jámy.</li>
                <li><strong>Zatížení okrajů</strong> – fólii na okrajích zatíž kameny nebo zeminou až po napuštění vody, kdy si fólie sedne do finálního tvaru. Přebytečnou fólii ořízni až nakonec.</li>
              </ul>
              <p>U předtvarované nádrže je postup jiný – jáma se vykope podle tvaru nádrže s přesahem cca 10–15 cm na všech stranách, dno se vysype a zhutní pískem a nádrž se postupně dosypává pískem nebo zeminou současně s napouštěním vody, aby se nedeformovala.</p>
            </section>

            <section id="filtrace">
              <h2>Filtrace a oběh vody</h2>
              <p>Stojatá voda bez pohybu se rychle zazelená a zapáchá. Oběh vody a filtrace udržují jezírko čisté a zdravé pro rostliny i případné ryby.</p>
              <h3>Čerpadlo</h3>
              <p>Ponorné čerpadlo umístěné na dně jezírka žene vodu do filtru a zpátky, často přes potůček nebo fontánku, což zároveň okysličuje vodu. Výkon čerpadla se volí podle objemu jezírka – orientačně by mělo za hodinu přečerpat alespoň polovinu až celý objem vody u jezírek s rybami.</p>
              <h3>Biologický filtr</h3>
              <p>Voda protéká přes filtrační médium (houby, keramické kuličky, bioballs), na kterém se usadí bakterie rozkládající amoniak z rybích exkrementů a zbytků rostlin na méně škodlivé látky. Mechanická část filtru navíc zachytí hrubé nečistoty – listí, sediment.</p>
              <h3>UV lampa proti řasám</h3>
              <p>UV lampa se zařazuje do okruhu před nebo po filtru a její záření poškozuje buňky jednobuněčných řas (tzv. zelené vody), které se pak snáze zachytí ve filtru. Na vláknité řasy (chaluhy) má menší účinek. UV lampa se obvykle používá od dubna do října, na zimu se vypíná.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Menší jezírko s velkým množstvím rostlin a bez ryb se dlouhodobě umí udržet i bez filtrace – rostliny fungují jako přirozený filtr. Čerpadlo na drobný vodopád ale i tak doporučujeme, voda v pohybu vypadá lépe a omezuje líhnutí komárů.</div>
            </section>

            <section id="osazeni">
              <h2>Osázení a ryby vs. bez ryb</h2>
              <h3>Vodní a okrajové rostliny</h3>
              <p>Rostliny rozděl podle zón, do kterých jsi jezírko vykopal:</p>
              <ul>
                <li><strong>Plovoucí a ponořené</strong> – leknín, růžkatec, stolístek – zastiňují hladinu (omezují řasy) a produkují kyslík.</li>
                <li><strong>Mokřadní</strong> – kosatec žlutý, blatouch, zevar – sázejí se do košíků s jezírkovým substrátem na stupeň 20–40 cm.</li>
                <li><strong>Pobřežní</strong> – pomněnka, ďáblík, vrbina – rostou na rozhraní vody a břehu, dotvářejí přechod do zahradního záhonu.</li>
              </ul>
              <p>Doporučuje se zastínit rostlinami 50–70 % vodní hladiny – méně, a voda se přehřívá a zelená, více a jezírku chybí volná plocha.</p>
              <h3>Ryby vs. jezírko bez ryb</h3>
              <p>Bez ryb je jezírko jednodušší na údržbu – stačí udržovat rovnováhu rostlin a případně menší filtraci. Voda se přirozeně osídlí obojživelníky a hmyzem.</p>
              <p>S rybami (typicky koi nebo zlatí karasi) jezírko vypadá živěji, ale vyžaduje:</p>
              <ul>
                <li>výkonnější filtraci a UV lampu, protože ryby zatěžují vodu odpadními látkami</li>
                <li>dostatečnou hloubku (80–120 cm) pro přežití zimy</li>
                <li>krmení a sledování kvality vody, zejména v létě při vysokých teplotách</li>
                <li>ochranu před predátory (volavky, kočky) – síť nebo skryté úkryty na dně</li>
              </ul>
            </section>

            <section id="udrzba">
              <h2>Údržba jezírka přes rok, zazimování a bezpečnost</h2>
              <h3>Údržba během roku</h3>
              <ul>
                <li><strong>Jaro</strong> – vyčisti dno od usazenin nahromaděných za zimu, rozděl přerostlé trsy rostlin, spusť filtraci a UV lampu.</li>
                <li><strong>Léto</strong> – doplňuj odpařenou vodu, kontroluj řasy, případně proveď částečnou výměnu vody (max. 10–20 % najednou, aby se nenarušila biologická rovnováha).</li>
                <li><strong>Podzim</strong> – odstraňuj spadané listí síťkou, ořež odumírající části rostlin, omez krmení ryb se snižující se teplotou vody.</li>
              </ul>
              <h3>Zazimování</h3>
              <p>Před prvními mrazy odstraň ze dna zbytky listí a organického materiálu, aby se přes zimu nerozkládaly a neubíraly kyslík. Citlivější rostliny (např. leknín v mělčích jezírkách) přesuň do hlubší zóny nebo přes zimu uskladni jinde. Čerpadlo a UV lampu na zimu vypni nebo přesuň do hloubky pod zámrzem. Pokud jsou v jezírku ryby, použij jezírkový odmrazovač nebo vzduchovací kámen, aby v ledu zůstal otvor pro výměnu plynů – úplně zamrzlá hladina může vést k úhynu ryb.</p>
              <h3>Bezpečnost (děti, oplocení)</h3>
              <p>Jezírko s otevřenou hladinou je pro malé děti rizikem i při pár desítkách centimetrů vody. Pokud na zahradě bývají malé děti bez dozoru, zvaž:</p>
              <ul>
                <li>oplocení jezírka nízkým plůtkem s bránkou na zámek</li>
                <li>pevnou mřížku nebo síť pod hladinou, která unese váhu dítěte</li>
                <li>mělčí variantu s pozvolnými, schůdnými okraji namísto kolmých stěn</li>
              </ul>
              <p>Bezpečnostní opatření se vyplatí naplánovat už při výkopu – třeba jako pozvolný mokřadní okraj, který funguje zároveň jako rostlinná zóna i jako záchytný stupeň.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jaká je nejlepší hloubka zahradního jezírka?", a: "Pro jezírko, které má přes zimu fungovat i s rybami, je potřeba alespoň jedna zóna o hloubce 80–120 cm, kam mráz nedosáhne. Mělčí jezírka bez ryb mohou mít hloubku kolem 60–80 cm, ale i tak je dobré mít hlubší část kvůli stabilitě teploty vody." },
                  { q: "Fólie, nebo předtvarovaná nádrž?", a: "Předtvarovaná nádrž je rychlejší řešení pro menší jezírka do pár tisíc litrů a má pevný tvar i danou hloubku. Fólie je univerzálnější, umožňuje libovolný tvar a velikost a vychází levněji na větší plochy, ale vyžaduje pečlivější přípravu podkladu." },
                  { q: "Potřebuje jezírko vždy filtraci a čerpadlo?", a: "Malé jezírko bez ryb s dostatkem rostlin může fungovat i bez filtrace, voda se ale snadněji zazelená. Jezírko s rybami filtraci a oběh vody potřebuje vždy – ryby produkují odpadní látky, které musí biologický filtr rozkládat, jinak voda rychle degraduje." },
                  { q: "Jak se jezírko zazimuje?", a: "Před zimou se odstraní spadané listí a odumřelé části rostlin, sníží se nebo vypne výkon čerpadla a UV lampa se na zimu vypíná. Pokud jsou v jezírku ryby, je potřeba zajistit otvor v ledu pro výměnu plynů – pomocí jezírkového odmrazovače nebo vzduchování." },
                  { q: "Je jezírko bezpečné, pokud máme malé děti?", a: "Jezírko s otevřenou hladinou představuje riziko utonutí pro malé děti, proto je vhodné jej oplotit nebo zakrýt pevnou mřížkou, dokud děti nejsou starší. Alternativou je mělčí jezírko s pozvolnými okraji nebo dočasné zasíťování hladiny v období, kdy si děti hrají na zahradě bez dozoru." },
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
                <li><a href="#misto">Výběr vhodného místa</a></li>
                <li><a href="#typy">Typy jezírek</a></li>
                <li><a href="#vykop">Výkop a tvarování</a></li>
                <li><a href="#podklad">Podklad a fólie</a></li>
                <li><a href="#filtrace">Filtrace a oběh vody</a></li>
                <li><a href="#osazeni">Osázení a ryby</a></li>
                <li><a href="#udrzba">Údržba a bezpečnost</a></li>
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
