import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak pečovat o dřevěné a parketové podlahy během roku",
  description: "Pravidelné čištění, ochrana proti vlhkosti a poškrábání a sezónní úpravy vlhkosti vzduchu pro dřevěné podlahy.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/pece-o-drevene-podlahy" },
  openGraph: { title: "Jak pečovat o dřevěné a parketové podlahy během roku", description: "Pravidelné čištění, ochrana proti vlhkosti a poškrábání a sezónní úpravy vlhkosti vzduchu pro dřevěné podlahy.", url: "https://www.domovniguru.cz/blog/pece-o-drevene-podlahy", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-12T08:00:00Z", modifiedTime: "2026-06-12T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20pe%C4%8Dovat%20o%20d%C5%99ev%C4%9Bn%C3%A9%20a%20parketov%C3%A9%20podlahy%20b%C4%9Bhem%20roku&cat=blog", width: 1200, height: 630, alt: "Jak pečovat o dřevěné a parketové podlahy během roku" }] },
  twitter: { card: "summary_large_image", title: "Jak pečovat o dřevěné a parketové podlahy během roku", description: "Pravidelné čištění, ochrana proti vlhkosti a poškrábání a sezónní úpravy vlhkosti vzduchu pro dřevěné podlahy." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/pece-o-drevene-podlahy#article", "headline": "Jak pečovat o dřevěné a parketové podlahy během roku", "datePublished": "2026-06-12T08:00:00Z", "dateModified": "2026-06-12T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["péče o dřevěné podlahy", "údržba parket", "čištění dřevěné podlahy", "vlhkost a dřevěná podlaha", "olejovaná podlaha", "lakovaná podlaha"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Sezónní údržba", "item": "https://www.domovniguru.cz/blog/kategorie/sezonni-udrzba" }, { "@type": "ListItem", "position": 4, "name": "Péče o dřevěné podlahy", "item": "https://www.domovniguru.cz/blog/pece-o-drevene-podlahy" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jak často mám vysávat nebo mopovat dřevěnou podlahu?", "acceptedAnswer": { "@type": "Answer", "text": "Vysávat nebo zametat by se mělo ideálně každý den nebo obden, aby se nehromadil prach a drobné kamínky, které podlahu škrábou. Mopování na vlhko stačí jednou až dvakrát týdně, vždy s dobře vyžehnutým mopem a vhodným přípravkem na dřevo." } }, { "@type": "Question", "name": "Jaká vlhkost vzduchu je pro dřevěnou podlahu ideální?", "acceptedAnswer": { "@type": "Answer", "text": "Optimální relativní vlhkost vzduchu pro dřevěné podlahy je 40–60 %. Pod 30 % dřevo vysychá a vznikají spáry, nad 60 % hrozí bobtnání a vyboulení spojů. V zimě proto pomáhá zvlhčovač, v létě naopak odvlhčovač nebo důkladné větrání." } }, { "@type": "Question", "name": "Mohu na dřevěnou podlahu používat páru z parního mopu?", "acceptedAnswer": { "@type": "Answer", "text": "Parní mop se na masivní dřevěné a parketové podlahy nedoporučuje. Vysoká teplota a vlhkost mohou narušit lak nebo olej a způsobit bobtnání dřeva. Bezpečnější je vlhký, dobře vyžehnutý hadr nebo mop na dřevo s pH neutrálním přípravkem." } }, { "@type": "Question", "name": "Jak poznám, že je čas podlahu přebrousit a přelakovat?", "acceptedAnswer": { "@type": "Answer", "text": "Signálem je matný nebo poškrábaný povrch, místa kde lak zcela zmizel a dřevo je vidět holé, nebo tmavé skvrny od vlhkosti, které se nedají vyčistit. Lehčí broušení a obnova povrchové vrstvy se obvykle dělá jednou za 7–10 let podle zátěže." } }, { "@type": "Question", "name": "Jaký je rozdíl v péči o lakovanou, olejovanou a voskovanou podlahu?", "acceptedAnswer": { "@type": "Answer", "text": "Lakovaná podlaha má uzavřený povrch, stačí ji běžně utírat vlhkým hadrem a chránit před poškrábáním. Olejovaná a voskovaná podlaha má otevřené póry, takže potřebuje speciální čisticí prostředky bez agresivních detergentů a pravidelnou obnovu oleje nebo vosku jednou až dvakrát ročně." } }] }] };

const RELATED = [
  { title: "Jak renovovat parketovou podlahu – broušení, tmelení, lak", href: "/blog/renovovat-parkety", read: "6 min" },
  { title: "Jak se zbavit vlhkosti v bytě", href: "/blog/zbavit-se-vlhkosti-v-byte", read: "5 min" },
  { title: "Jak správně větrat byt", href: "/blog/spravne-vetrat-byt", read: "4 min" },
  { title: "Jak klást vinylovou podlahu", href: "/blog/kladeni-vinyl-podlahy", read: "5 min" },
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
              <span>Péče o dřevěné podlahy</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">❄️ Sezónní údržba</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak pečovat o dřevěné a parketové podlahy během roku</h1>
              <p className="article-lead">Dřevěná podlaha vydrží desítky let, ale jen pokud se o ni pravidelně staráš. Špatný čisticí prostředek, suchý vzduch v zimě nebo zapomenuté podložky pod nohami židlí dokážou krásnou podlahu zničit mnohem dřív, než je nutné. Tady je přehled, co dělat každý den, co řešit sezónně a kdy už pomůže jen broušení.</p>
              <div className="article-meta-row"><span>Aktualizováno: 12. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#denni-udrzba">Každodenní úklid</a></li>
                <li><a href="#vlhkost">Ochrana proti vlhkosti a teplotním výkyvům</a></li>
                <li><a href="#poskrabani">Ochrana proti poškrábání</a></li>
                <li><a href="#drobne-skody">Řešení drobných škod</a></li>
                <li><a href="#prebrousit">Kdy přebrousit a přelakovat</a></li>
                <li><a href="#povrchy">Lak, olej nebo vosk – rozdíly v péči</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="denni-udrzba">
              <h2>Každodenní úklid dřevěné podlahy</h2>
              <p>Základem dlouhé životnosti dřevěné podlahy je odstraňovat prach a drobné nečistoty dřív, než se zarýjí do povrchu. Píseček, kamínky a prach se chovají jako brusný papír – při každém kroku nebo posunu židle mikroskopicky škrábou lak nebo olej.</p>
              <ul>
                <li><strong>Vysávání nebo zametání</strong> – ideálně denně nebo obden, zvlášť v místech s vyšším provozem (chodba, kuchyně, vstupní dveře)</li>
                <li><strong>Vysavač s měkkým kartáčovým nástavcem</strong> – kovové nebo tvrdé hubice mohou povrch poškrábat</li>
                <li><strong>Mopování na vlhko</strong> – jednou až dvakrát týdně, mop musí být důkladně vyžehnutý, ne mokrý</li>
                <li><strong>Vhodné přípravky</strong> – speciální čistič na dřevěné podlahy s pH neutrálním nebo mírně kyselým složením</li>
                <li><strong>Nevhodné přípravky</strong> – agresivní odmašťovače, čističe s amoniakem nebo bělidlem, mýdlové vločky (zanechávají matný film), octová voda ve vysoké koncentraci</li>
              </ul>
              <p>Parní mop na masivní dřevo a parkety nepatří – horká pára poškozuje lak i samotné dřevo a může způsobit jeho bobtnání. Pokud máš dřevěnou podlahu v kuchyni, vytírej okamžitě jakoukoli rozlitou vodu nebo tekutinu, ideálně do několika minut.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Na suché otírání používej hadr z mikrovlákna – zachytí prach i drobné vlasy, aniž by po sobě zanechával vlákna nebo škrábal povrch.</div>
            </section>

            <section id="vlhkost">
              <h2>Ochrana proti vlhkosti a teplotním výkyvům</h2>
              <p>Dřevo je přírodní materiál, který reaguje na vlhkost vzduchu – v suchu se smršťuje, ve vlhku bobtná. Velké výkyvy mezi sezónami jsou pro podlahu mnohem horší než stálá, byť ne ideální vlhkost.</p>
              <p>Optimální relativní vlhkost vzduchu pro dřevěné podlahy je <strong>40–60 %</strong>. Pod touto hranicí se dřevo vysušuje, mezi lamelami vznikají spáry a povrch může praskat. Nad 60 % naopak hrozí bobtnání, vyboulení spojů a v krajním případě i deformace celých prken. Pokud řešíš obecně problémy s vlhkostí v bytě, podívej se na náš článek o tom, jak <Link href="/blog/zbavit-se-vlhkosti-v-byte" style={{ color: "#2a6496", textDecoration: "underline" }}>se zbavit vlhkosti v bytě</Link>.</p>
              <h3>Podlahové vytápění a dřevo</h3>
              <p>Pokud máš teplovodní nebo elektrické podlahové vytápění, je nutné používat dřevo a podlahové krytiny k tomu certifikované (deklarace „vhodné pro podlahové vytápění"). Teplota povrchu podlahy by neměla přesahovat 27–28 °C. Náhlé zapnutí vytápění na maximum po dlouhé odstávce dřevo „šokuje" – teplotu zvyšuj postupně, v řádu jednotek stupňů denně.</p>
              <h3>Větrání jako prevence</h3>
              <p>Pravidelné krátké a intenzivní větrání pomáhá udržovat stabilní vlhkost v bytě a zároveň odvádí vlhkost po vaření, sušení prádla nebo koupání. Více tipů najdeš v článku, jak <Link href="/blog/spravne-vetrat-byt" style={{ color: "#2a6496", textDecoration: "underline" }}>správně větrat byt</Link> v každém ročním období.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Vlhkoměr (hygrometr) za pár desítek korun ti rychle ukáže, jestli je vzduch v bytě v pohodě, nebo jestli je čas na zvlhčovač či odvlhčovač.</div>
            </section>

            <section id="poskrabani">
              <h2>Ochrana proti poškrábání</h2>
              <p>Drobné škrábance se na dřevěné podlaze hromadí nepozorovaně a po pár letech podlahu vizuálně „sedřou", i když je technicky stále v pořádku. Nejčastější příčinou jsou nohy nábytku, drápky domácích mazlíčků a písek z venku.</p>
              <ul>
                <li><strong>Filcové podložky pod nohy nábytku</strong> – samolepicí filcové kluzáky na židle, stoly, skříně i pohovky; pravidelně kontroluj, jestli nejsou opotřebované nebo neodlepené</li>
                <li><strong>Koberečky u vstupních dveří</strong> – zachytí písek a drobné kamínky, které se jinak roznesou po celém bytě</li>
                <li><strong>Botníky a přezouvání</strong> – obuv s tvrdou nebo špičatou podrážkou (jehlové podpatky, kovové cvočky) může povrch promáčknout nebo poškrábat</li>
                <li><strong>Podložky pod kolečkové židle</strong> – kancelářská židle bez podložky umí udělat z parket během půl roku skoro brusný kotouč</li>
                <li><strong>Péče o drápky domácích mazlíčků</strong> – pravidelné stříhání nebo broušení drápků psům a kočkám výrazně omezí drobné rýhy</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Při stěhování nábytku ho nikdy nesunuj po podlaze – i krátký posun těžké skříně může zanechat hlubokou rýhu. Vždy zvedni nebo použij klouzáky na přesun.</div>
            </section>

            <section id="drobne-skody">
              <h2>Řešení drobných škod</h2>
              <h3>Škrábance a oděrky</h3>
              <p>Drobné povrchové škrábance na lakovaných podlahách lze často zamaskovat retušovacím voskem nebo tužkou na dřevo ve odstínu podlahy – seženeš v hobby marketech. Hlubší rýhy, které prošly skrz lak až do dřeva, vyžadují lokální přebroušení a nový nátěr laku v daném místě, jinak by tam mohla začít vlhkost.</p>
              <p>U olejovaných podlah je oprava jednodušší – stačí místo lehce zbrousit jemným brusným papírem a znovu naolejovat, olej se snadno spojí s okolním povrchem bez viditelného přechodu.</p>
              <h3>Vyboulení spojů a vlnění prken</h3>
              <p>Pokud se na podlaze objeví vyboulené spoje nebo zvlněné lamely, nejčastější příčinou je nadměrná vlhkost – ať z rozlité vody, vlhkého mopování, nebo celkově vysoké vlhkosti vzduchu v daném období. Mírné vyboulení po vysušení místa a stabilizaci vlhkosti často samo ustoupí, protože dřevo se vrátí do původního tvaru. Pokud spoje zůstanou trvale zvlněné nebo se začnou prkna odlupovat od podkladu, je potřeba postižený úsek vyměnit nebo nechat opravit odborníkem.</p>
              <p>Velmi podobné problémy řeší i kompletní renovace starší podlahy – inspiraci a postup najdeš v článku o tom, jak <Link href="/blog/renovovat-parkety" style={{ color: "#2a6496", textDecoration: "underline" }}>renovaci parket</Link> zvládnout krok za krokem.</p>
            </section>

            <section id="prebrousit">
              <h2>Kdy přebrousit a přelakovat nebo přeolejovat</h2>
              <p>Povrchová úprava (lak, olej, vosk) chrání dřevo pod ní – jakmile se opotřebuje, dřevo začne přijímat vlhkost a nečistoty přímo a opotřebení se zrychluje. Signály, že je čas na obnovu povrchu:</p>
              <ul>
                <li>Povrch je viditelně matný nebo místy ztratil lesk i přes pravidelné čištění</li>
                <li>Na frekventovaných místech (chodby, prostor před gaučem) je vidět holé dřevo bez ochranné vrstvy</li>
                <li>Voda po kapce nezůstává na povrchu, ale rychle se vsakuje do dřeva</li>
                <li>Objevují se tmavé skvrny od vlhkosti, které nezmizí ani po vyčištění</li>
                <li>Podlaha je celkově plná drobných škrábanců, které dohromady tvoří „šedý" vzhled</li>
              </ul>
              <p>Lehčí obnova (broušení jemným zrnem a nový nátěr laku nebo oleje) se u lakovaných podlah obvykle doporučuje jednou za <strong>7–10 let</strong> podle zátěže, u olejovaných povrchů pomáhá lehká obnova oleje i v kratších intervalech – viz další sekce. Kompletní broušení až na živé dřevo je radikálnější zákrok, který má smysl jen u výrazně poškozených nebo starých podlah.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Než se rozhodneš pro celoplošné broušení, zkus na nenápadném místě (např. pod skříní) jen lehké přebroušení a nový lak nebo olej. Často to stačí a ušetříš si náročnější a dražší zásah.</div>
            </section>

            <section id="povrchy">
              <h2>Lak, olej nebo vosk – rozdíly v péči</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Povrch</th><th>Běžné čištění</th><th>Odolnost</th><th>Obnova povrchu</th></tr></thead>
                  <tbody>
                    <tr><td>Lakovaný</td><td>Vlhký hadr, čistič na dřevo</td><td>Vysoká, uzavřený povrch odolává vodě i skvrnám</td><td>Cca jednou za 7–10 let, lokálně i dříve</td></tr>
                    <tr><td>Olejovaný</td><td>Speciální čistič bez agresivních detergentů, šetrné mopování</td><td>Střední, otevřené póry propouštějí vlhkost i nečistoty</td><td>Obnovovací olej 1–2× ročně na zatížená místa</td></tr>
                    <tr><td>Voskovaný</td><td>Pouze suché čištění nebo lehce navlhčený hadr, vosk se nesmí přemáčet</td><td>Nízká až střední, citlivý na vodu a teplo</td><td>Nový vosk přibližně 1–2× ročně, broušení zřídka</td></tr>
                  </tbody>
                </table>
              </div>
              <h3>Lakovaná podlaha</h3>
              <p>Má souvislou ochrannou vrstvu, která dřevo prakticky izoluje od vzduchu i vlhkosti. Stačí běžné čištění vlhkým hadrem nebo mopem, hlavní riziko je mechanické poškrábání laku – jakmile se lak provrtá, dřevo pod ním je nechráněné.</p>
              <h3>Olejovaná podlaha</h3>
              <p>Olej vniká do struktury dřeva a nechává povrch „dýchat" – podlaha tak působí přirozeněji, ale je citlivější na skvrny od vody, vína nebo tuku. Čisticí prostředky musí být určené přímo pro olejované podlahy, běžné saponáty olej postupně rozpouštějí. Místa s vysokým provozem (kolem stolu, vstupní dveře) je dobré jednou až dvakrát ročně lokálně přeolejovat.</p>
              <h3>Voskovaná podlaha</h3>
              <p>Vosk dává podlaze sametový vzhled, ale je nejcitlivější na vodu – mokré skvrny mohou zanechat bílé fleky. Čistí se primárně na suchu nebo extrémně lehce navlhčeným hadrem, vosk se pravidelně obnovuje speciální voskovou emulzí.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud nevíš, jaký povrch tvoje podlaha má, kápni na nenápadné místo kapku vody. Pokud kapka zůstane ležet na povrchu, je podlaha lakovaná. Pokud se rychle vsákne a vytvoří temnou skvrnu, jde nejspíš o olej nebo vosk.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jak často mám vysávat nebo mopovat dřevěnou podlahu?", a: "Vysávat nebo zametat by se mělo ideálně každý den nebo obden, aby se nehromadil prach a drobné kamínky, které podlahu škrábou. Mopování na vlhko stačí jednou až dvakrát týdně, vždy s dobře vyžehnutým mopem a vhodným přípravkem na dřevo." },
                  { q: "Jaká vlhkost vzduchu je pro dřevěnou podlahu ideální?", a: "Optimální relativní vlhkost vzduchu pro dřevěné podlahy je 40–60 %. Pod 30 % dřevo vysychá a vznikají spáry, nad 60 % hrozí bobtnání a vyboulení spojů. V zimě proto pomáhá zvlhčovač, v létě naopak odvlhčovač nebo důkladné větrání." },
                  { q: "Mohu na dřevěnou podlahu používat páru z parního mopu?", a: "Parní mop se na masivní dřevěné a parketové podlahy nedoporučuje. Vysoká teplota a vlhkost mohou narušit lak nebo olej a způsobit bobtnání dřeva. Bezpečnější je vlhký, dobře vyžehnutý hadr nebo mop na dřevo s pH neutrálním přípravkem." },
                  { q: "Jak poznám, že je čas podlahu přebrousit a přelakovat?", a: "Signálem je matný nebo poškrábaný povrch, místa kde lak zcela zmizel a dřevo je vidět holé, nebo tmavé skvrny od vlhkosti, které se nedají vyčistit. Lehčí broušení a obnova povrchové vrstvy se obvykle dělá jednou za 7–10 let podle zátěže." },
                  { q: "Jaký je rozdíl v péči o lakovanou, olejovanou a voskovanou podlahu?", a: "Lakovaná podlaha má uzavřený povrch, stačí ji běžně utírat vlhkým hadrem a chránit před poškrábáním. Olejovaná a voskovaná podlaha má otevřené póry, takže potřebuje speciální čisticí prostředky bez agresivních detergentů a pravidelnou obnovu oleje nebo vosku jednou až dvakrát ročně." },
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
                <li><a href="#denni-udrzba">Každodenní úklid</a></li>
                <li><a href="#vlhkost">Ochrana proti vlhkosti</a></li>
                <li><a href="#poskrabani">Ochrana proti poškrábání</a></li>
                <li><a href="#drobne-skody">Řešení drobných škod</a></li>
                <li><a href="#prebrousit">Kdy přebrousit a přelakovat</a></li>
                <li><a href="#povrchy">Lak, olej nebo vosk</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/sezonni-udrzba" className="sidebar-cat-link">❄️ Sezónní údržba<span>20 článků →</span></Link>
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
