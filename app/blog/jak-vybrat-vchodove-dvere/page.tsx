import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak vybrat vchodové dveře do bytu nebo domu",
  description: "Bezpečnostní třídy, materiály, zámky a tepelná izolace – na co se zaměřit při výběru vchodových dveří.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-vybrat-vchodove-dvere" },
  openGraph: { title: "Jak vybrat vchodové dveře do bytu nebo domu", description: "Bezpečnostní třídy, materiály, zámky a tepelná izolace – na co se zaměřit při výběru vchodových dveří.", url: "https://www.domovniguru.cz/blog/jak-vybrat-vchodove-dvere", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-12T08:00:00Z", modifiedTime: "2026-06-12T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20vybrat%20vchodov%C3%A9%20dve%C5%99e%20do%20bytu%20nebo%20domu&cat=blog", width: 1200, height: 630, alt: "Jak vybrat vchodové dveře do bytu nebo domu" }] },
  twitter: { card: "summary_large_image", title: "Jak vybrat vchodové dveře do bytu nebo domu", description: "Bezpečnostní třídy, materiály, zámky a tepelná izolace – na co se zaměřit při výběru vchodových dveří." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/jak-vybrat-vchodove-dvere#article", "headline": "Jak vybrat vchodové dveře do bytu nebo domu", "datePublished": "2026-06-12T08:00:00Z", "dateModified": "2026-06-12T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["vchodové dveře", "bezpečnostní dveře", "bezpečnostní třída RC2", "zámky a kování", "tepelná izolace dveří"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Stěhování & rekonstrukce", "item": "https://www.domovniguru.cz/blog/kategorie/stehovani" }, { "@type": "ListItem", "position": 4, "name": "Jak vybrat vchodové dveře", "item": "https://www.domovniguru.cz/blog/jak-vybrat-vchodove-dvere" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jaký je rozdíl mezi bytovými a domovními vchodovými dveřmi?", "acceptedAnswer": { "@type": "Answer", "text": "Bytové vchodové dveře oddělují byt od společných prostor a musí splňovat protipožární normy domu (často EI 30), zatímco hlavní vchodové dveře domu řeší především tepelnou izolaci, odolnost proti počasí a celkovou bezpečnost objektu. U bytu se navíc často kombinuje bezpečnostní třída s požadavky SVJ na jednotný vzhled." } }, { "@type": "Question", "name": "Jaká bezpečnostní třída dveří je dostatečná pro byt?", "acceptedAnswer": { "@type": "Answer", "text": "Pro běžný byt nebo rodinný dům se doporučuje minimálně třída RC2, která odolá krátkému pokusu o vypáčení běžným nářadím (šroubovák, páčidlo) po dobu alespoň 3 minut. Třída RC3 je vhodná pro přízemní bytony, rohové jednotky nebo domy s vyšším rizikem vloupání." } }, { "@type": "Question", "name": "Z čeho se vyplatí vybrat vchodové dveře – ocel, dřevo nebo hliník?", "acceptedAnswer": { "@type": "Answer", "text": "Ocelové dveře s výplní z minerální vlny nebo polyuretanu nabízejí nejlepší poměr bezpečnosti a cenu. Dřevěné dveře s ocelovým jádrem mají hezčí vzhled a lepší zvukovou izolaci, ale jsou dražší a náročnější na údržbu. Hliníkové rámy se používají hlavně u prosklených vstupů a vyžadují kvalitní bezpečnostní výplň, aby splnily RC2/RC3." } }, { "@type": "Question", "name": "Jak poznám kvalitní cylindrickou vložku?", "acceptedAnswer": { "@type": "Answer", "text": "Kvalitní vložka má certifikaci podle ČSN EN 1303 s bezpečnostní třídou minimálně 4 nebo 5, ochranu proti vytrhnutí, vyvrtání a bumpingu, a je dodávána s bezpečnostní kartou pro dotisk klíčů. Levné vložky bez certifikace lze často vyrazit nebo vytrhnout kombinačkami během několika vteřin." } }, { "@type": "Question", "name": "Co nejvíc ovlivňuje cenu vchodových dveří?", "acceptedAnswer": { "@type": "Answer", "text": "Cenu nejvíc ovlivňuje bezpečnostní třída (RC2 vs. RC3), kvalita zámkového systému a kování, materiál a povrchová úprava křídla, tepelněizolační vlastnosti (hodnota U) a v případě bytových domů i požadovaná požární odolnost. Montáž odborníkem může tvořit 15–25 % celkové ceny, ale je klíčová pro funkčnost zabezpečení." } }] }] };

const RELATED = [
  { title: "Jak vyměnit staré dveře – výběr, montáž a zárubně", href: "/blog/vymenit-stare-dvere", read: "7 min" },
  { title: "Jak namazat dveře, aby nevrzaly", href: "/blog/jak-namazat-dvere-aby-nevrzaly", read: "4 min" },
  { title: "Jak naplánovat rekonstrukci bytu – rozpočet a pořadí prací", href: "/blog/planovani-rekonstrukce-bytu", read: "8 min" },
  { title: "Jak utěsnit okna na zimu", href: "/blog/jak-utesnit-okna-na-zimu", read: "4 min" },
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
              <span>Jak vybrat vchodové dveře</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏠 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak vybrat vchodové dveře do bytu nebo domu</h1>
              <p className="article-lead">Vchodové dveře nejsou jen design a cena – jsou to dveře, které chrání domácnost před vloupáním, hlukem a chladem. Vysvětlíme, co znamenají bezpečnostní třídy, jaký materiál a zámek zvolit a na co se zaměřit, ať řešíš byt v paneláku nebo hlavní vstup do rodinného domu.</p>
              <div className="article-meta-row"><span>Aktualizováno: 12. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#bytove-vs-domovni">Bytové vchodové dveře vs. hlavní dveře domu</a></li>
                <li><a href="#bezpecnostni-tridy">Bezpečnostní třídy RC2 a RC3</a></li>
                <li><a href="#materialy">Materiály a konstrukce</a></li>
                <li><a href="#zamky-kovani">Zámky, vložky a kování</a></li>
                <li><a href="#izolace-pozar">Tepelná, zvuková izolace a požární odolnost</a></li>
                <li><a href="#vzhled-cena">Vzhled, montáž a cena</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="bytove-vs-domovni">
              <h2>Bytové vchodové dveře vs. hlavní dveře domu</h2>
              <p>Než začneš vybírat, je dobré si ujasnit, jaký typ dveří vlastně řešíš – nároky se výrazně liší.</p>
              <p><strong>Bytové vchodové dveře</strong> oddělují tvůj byt od chodby nebo společných prostor v domě. Kromě bezpečnosti tu hraje roli i protipožární odolnost – ve většině bytových domů musí splňovat požadavky na požární uzávěr (typicky EI 30), což bývá ošetřeno už ve stavební dokumentaci nebo požadavcích SVJ. Pokud měníš jen vnitřní dveře v bytě, řeší to spíš samostatný článek o <Link href="/blog/vymenit-stare-dvere" style={{ color: "#2a6496", textDecoration: "underline" }}>výměnu dveří</Link> – tady se zaměřujeme čistě na vstupní, bezpečnostní dveře.</p>
              <p><strong>Hlavní vchodové dveře domu</strong> (do rodinného domu, ze zahrady, z chodby do domu) musí navíc odolávat počasí – dešti, mrazu, slunci – a obvykle se na ně klade větší důraz na tepelnou izolaci, protože tvoří součást obálky budovy. Bezpečnostní požadavky jsou tu obvykle vyšší, protože jde o jediný hlavní vstup do objektu.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> U bytu v patře nad přízemím často stačí RC2, u přízemních bytů, rohových jednotek nebo rodinných domů se vyplatí zvážit RC3 – riziko vloupání je tu statisticky vyšší.</div>
            </section>

            <section id="bezpecnostni-tridy">
              <h2>Bezpečnostní třídy RC2 a RC3 – co znamenají</h2>
              <p>Bezpečnostní třídy (RC – Resistance Class) podle evropské normy ČSN EN 1627 udávají, jak dlouho dveře odolají pokusu o násilné vniknutí a jakým nástrojem.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Třída</th><th>Odolnost</th><th>Typický útočník</th><th>Doporučení</th></tr></thead>
                  <tbody>
                    <tr><td>RC1</td><td>Základní ochrana proti nárazu</td><td>Příležitostný pachatel bez nářadí</td><td>Nedostatečné pro vchodové dveře</td></tr>
                    <tr><td>RC2</td><td>Odolnost min. 3 minuty proti páčení</td><td>Šroubovák, kleště, klíny</td><td>Standard pro byty a domy</td></tr>
                    <tr><td>RC3</td><td>Odolnost min. 5 minut proti páčení a vrtání</td><td>Vrtačka, druhý páčicí nástroj, sekáček</td><td>Přízemí, rohové bytové jednotky, vyšší riziko</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Třída se vztahuje na celý dveřní systém – křídlo, zárubeň, zámek, panty i kování musí spolu splňovat danou certifikaci. Nestačí tedy koupit „bezpečnostní" dveře a doplnit je libovolným zámkem z hobbymarketu – certifikace platí jen pro testovanou kombinaci.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Při nákupu si vždy vyžádej certifikát shody pro celý dveřní systém, ne jen prohlášení výrobce o „bezpečnostním provedení". Bez certifikátu nemáš jistotu, že dveře skutečně odpovídají deklarované třídě.</div>
            </section>

            <section id="materialy">
              <h2>Materiály a konstrukce</h2>
              <h3>Ocelový plech s výplní</h3>
              <p>Nejběžnější a cenově nejdostupnější řešení. Křídlo tvoří ocelový plech (často 1–2 mm) s vnitřní výplní z minerální vlny, polyuretanové pěny nebo papírového voštinového jádra. Voština je nejlevnější, ale méně tuhá a hůř izoluje – pro vchodové dveře se hodí spíše polyuretan nebo minerální vlna, které zároveň zlepšují tepelné i zvukové vlastnosti.</p>
              <h3>Dřevo s ocelovým jádrem</h3>
              <p>Dřevěné dveře s vloženou ocelovou výztuhou kombinují přírodní vzhled s odolností. Mají obvykle lepší zvukovou izolaci než čistě ocelové dveře, ale jsou náchylnější na vlhkost a vyžadují pravidelnou údržbu povrchu (nátěry, lakování), zejména u venkovních hlavních dveří domu.</p>
              <h3>Hliníkové rámy</h3>
              <p>Hliník se používá hlavně u prosklených vstupů a moderních designových dveří. Sám o sobě má nízkou odolnost proti vloupání, takže u bezpečnostních dveří musí být doplněn vyztuženou výplní a kvalitním kováním – jinak RC2/RC3 nesplní. Výhodou je nízká hmotnost a odolnost proti korozi.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Tloušťka křídla (typicky 50–80 mm u bezpečnostních dveří) sama o sobě nic neříká o bezpečnosti – rozhoduje konstrukce, výztuhy kolem zámku a pantů a kvalita zárubně.</div>
            </section>

            <section id="zamky-kovani">
              <h2>Zámky, vložky a kování</h2>
              <h3>Cylindrické vložky</h3>
              <p>Vložka je nejčastější slabina celého systému. Kvalitní vložka by měla splňovat ČSN EN 1303 s bezpečnostní třídou minimálně 4 nebo 5 a nabízet ochranu proti:</p>
              <ul>
                <li><strong>Vytrhnutí (pulling)</strong> – odolnost proti vytažení vložky speciálním nástrojem</li>
                <li><strong>Vyvrtání (drilling)</strong> – tvrzené pinové komponenty proti vrtačce</li>
                <li><strong>Bumpingu</strong> – speciální profil pinů odolný proti „bump klíčům"</li>
                <li><strong>Vyhmatání (picking)</strong> – nepravidelný profil komplikující odemčení šperhákem</li>
              </ul>
              <p>Vložka by měla přesahovat z kování maximálně o 1–3 mm – delší přesah usnadňuje vylomení kleštěmi. Součástí kvalitní vložky bývá bezpečnostní karta umožňující objednat duplikát klíče jen oprávněné osobě.</p>
              <h3>Bezpečnostní kování a panty</h3>
              <p>Kování by mělo mít protiúnikovou (protiotáčecí) rozetu, která zabrání odšroubování nebo ulomení vnější části kování a následnému vyvrtání vložky. Panty u bezpečnostních dveří jsou skryté nebo zesílené, často se třemi a více body kotvení, aby se křídlo nedalo vypáčit ze zárubně i v případě, že útočník zaútočí na stranu pantů.</p>
              <p>Samotný zámek u kvalitních dveří obvykle obsahuje vícebodové zamykání – hlavní závora plus 2–4 boční čepy, které zajíždí do zárubně po celé výšce křídla. To výrazně zvyšuje odolnost proti páčení.</p>
            </section>

            <section id="izolace-pozar">
              <h2>Tepelná a zvuková izolace, požární odolnost</h2>
              <h3>Tepelná izolace</h3>
              <p>U vchodových dveří se udává součinitel prostupu tepla U<sub>d</sub> (W/m²K) – čím nižší hodnota, tím lepší izolace. Běžné bezpečnostní dveře se pohybují kolem U<sub>d</sub> = 1,3–1,7 W/m²K, kvalitnější modely s dvojitým těsněním a izolační výplní dosahují 0,9–1,2 W/m²K. U hlavních dveří rodinného domu má tato hodnota přímý vliv na tepelné ztráty – zejména pokud dveře sousedí s neohřívanou chodbou nebo přímo s exteriérem.</p>
              <h3>Zvuková izolace</h3>
              <p>Zvuková neprůzvučnost se udává v dB – běžné dveře tlumí kolem 30 dB, kvalitnější bytové vchodové dveře s těsněním po celém obvodu a těžším křídlem dosahují 35–42 dB. To je rozdíl mezi tím, jestli slyšíš sousedy na chodbě, nebo ne.</p>
              <h3>Požární odolnost</h3>
              <p>U bytových domů bývá pro vstupní dveře do bytu předepsána požární odolnost EI 30 (případně EI 15 nebo EI 45 podle typu stavby a počtu podlaží) – tedy dveře musí 30 minut zabránit šíření plamenů a omezit prostup tepla. Tento požadavek vychází z požárně bezpečnostního řešení stavby a je nezávislý na bezpečnostní třídě RC. Při výběru proto ověř, zda dveře mají platný požárně-technický certifikát, ne jen bezpečnostní.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud SVJ nebo stavební úřad vyžaduje konkrétní požární odolnost, musí to splňovat celý systém včetně zárubně a těsnění – samotné křídlo s odpovídajícím označením nestačí, pokud zárubeň certifikaci nemá.</div>
            </section>

            <section id="vzhled-cena">
              <h2>Vzhled, montáž a co ovlivňuje cenu</h2>
              <h3>Povrchové úpravy a design</h3>
              <p>Bezpečnostní dveře dnes nemusí vypadat jako trezor. Běžně se nabízí povrchy v dekorech dřeva (fólie, laminát), hladké lakované plochy v různých barvách (RAL palety) i kombinace s nerezovými nebo hliníkovými prvky. U bytových dveří bývá vzhled často omezen pravidly SVJ, aby všechny vstupy na patře vypadaly jednotně.</p>
              <p>Prosklení se u vstupních dveří používá hlavně u hlavních dveří domu – bezpečnostní sklo musí být lepené nebo vrstvené (např. P4A), aby neoslabovalo bezpečnostní třídu. Malé prosklené výplně (světlíky) doplněné mřížkou nebo bezpečnostní fólií jsou běžným kompromisem mezi designem a ochranou.</p>
              <h3>Montáž</h3>
              <p>Montáž bezpečnostních dveří by měla provádět firma, která je zároveň zaškolená výrobcem – nesprávně osazená zárubeň nebo nedotažené kotvící body dokážou snížit reálnou odolnost dveří i o jednu bezpečnostní třídu, bez ohledu na to, co je napsáno na štítku. Montáž obvykle tvoří 15–25 % celkové ceny a zahrnuje vyrovnání zárubně, ukotvení do nosné konstrukce a seřízení kování.</p>
              <h3>Co ovlivňuje cenu</h3>
              <ul>
                <li><strong>Bezpečnostní třída</strong> – RC3 bývá o 30–60 % dražší než RC2</li>
                <li><strong>Zámkový systém a vložka</strong> – certifikovaná vícebodová vložka s kartou stojí podstatně víc než běžná vložka</li>
                <li><strong>Materiál a povrch</strong> – dýhované nebo lakované povrchy zvyšují cenu oproti základním fóliím</li>
                <li><strong>Tepelněizolační vlastnosti</strong> – nižší U<sub>d</sub> hodnota znamená kvalitnější (a dražší) izolační jádro a těsnění</li>
                <li><strong>Požární odolnost</strong> – certifikovaný systém EI 30 u bytových dveří přidává k ceně</li>
                <li><strong>Montáž</strong> – odborná montáž je investice, která se vyplatí, protože chrání hodnotu zbytku systému</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Při srovnávání nabídek se ptej vždy na celkovou cenu „na klíč" včetně demontáže starých dveří, montáže nových a seřízení – jednotlivé položky se mezi dodavateli často skládají jinak a samotná cena dveří bez montáže může být zavádějící.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jaký je rozdíl mezi bytovými a domovními vchodovými dveřmi?", a: "Bytové vchodové dveře oddělují byt od společných prostor a musí splňovat protipožární normy domu (často EI 30), zatímco hlavní vchodové dveře domu řeší především tepelnou izolaci, odolnost proti počasí a celkovou bezpečnost objektu. U bytu se navíc často kombinuje bezpečnostní třída s požadavky SVJ na jednotný vzhled." },
                  { q: "Jaká bezpečnostní třída dveří je dostatečná pro byt?", a: "Pro běžný byt nebo rodinný dům se doporučuje minimálně třída RC2, která odolá krátkému pokusu o vypáčení běžným nářadím (šroubovák, páčidlo) po dobu alespoň 3 minut. Třída RC3 je vhodná pro přízemní byty, rohové jednotky nebo domy s vyšším rizikem vloupání." },
                  { q: "Z čeho se vyplatí vybrat vchodové dveře – ocel, dřevo nebo hliník?", a: "Ocelové dveře s výplní z minerální vlny nebo polyuretanu nabízejí nejlepší poměr bezpečnosti a cenu. Dřevěné dveře s ocelovým jádrem mají hezčí vzhled a lepší zvukovou izolaci, ale jsou dražší a náročnější na údržbu. Hliníkové rámy se používají hlavně u prosklených vstupů a vyžadují kvalitní bezpečnostní výplň, aby splnily RC2/RC3." },
                  { q: "Jak poznám kvalitní cylindrickou vložku?", a: "Kvalitní vložka má certifikaci podle ČSN EN 1303 s bezpečnostní třídou minimálně 4 nebo 5, ochranu proti vytrhnutí, vyvrtání a bumpingu, a je dodávána s bezpečnostní kartou pro dotisk klíčů. Levné vložky bez certifikace lze často vyrazit nebo vytrhnout kombinačkami během několika vteřin." },
                  { q: "Co nejvíc ovlivňuje cenu vchodových dveří?", a: "Cenu nejvíc ovlivňuje bezpečnostní třída (RC2 vs. RC3), kvalita zámkového systému a kování, materiál a povrchová úprava křídla, tepelněizolační vlastnosti (hodnota U) a v případě bytových domů i požadovaná požární odolnost. Montáž odborníkem může tvořit 15–25 % celkové ceny, ale je klíčová pro funkčnost zabezpečení." },
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
                <li><a href="#bytove-vs-domovni">Bytové vs. domovní dveře</a></li>
                <li><a href="#bezpecnostni-tridy">Bezpečnostní třídy RC2/RC3</a></li>
                <li><a href="#materialy">Materiály a konstrukce</a></li>
                <li><a href="#zamky-kovani">Zámky a kování</a></li>
                <li><a href="#izolace-pozar">Izolace a požární odolnost</a></li>
                <li><a href="#vzhled-cena">Vzhled, montáž a cena</a></li>
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
