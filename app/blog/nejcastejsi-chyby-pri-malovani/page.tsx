import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nejčastější chyby při malování a jak se jim vyhnout",
  description: "Od špatné přípravy povrchu po nesprávné ředění barvy – přehled typických chyb při malování a jak je opravit.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/nejcastejsi-chyby-pri-malovani" },
  openGraph: { title: "Nejčastější chyby při malování a jak se jim vyhnout", description: "Od špatné přípravy povrchu po nesprávné ředění barvy – přehled typických chyb při malování a jak je opravit.", url: "https://www.domovniguru.cz/blog/nejcastejsi-chyby-pri-malovani", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-11T08:00:00Z", modifiedTime: "2026-06-11T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Nejčastější%20chyby%20při%20malování%20a%20jak%20se%20jim%20vyhnout&cat=blog", width: 1200, height: 630, alt: "Nejčastější chyby při malování a jak se jim vyhnout" }] },
  twitter: { card: "summary_large_image", title: "Nejčastější chyby při malování a jak se jim vyhnout", description: "Od špatné přípravy povrchu po nesprávné ředění barvy – přehled typických chyb při malování a jak je opravit." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/nejcastejsi-chyby-pri-malovani#article", "headline": "Nejčastější chyby při malování a jak se jim vyhnout", "datePublished": "2026-06-11T08:00:00Z", "dateModified": "2026-06-11T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["chyby při malování", "jak malovat zeď", "malování bez penetrace", "ředění barvy", "vyspravení trhlin"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Malování & barvy", "item": "https://www.domovniguru.cz/blog/kategorie/malovani" }, { "@type": "ListItem", "position": 4, "name": "Nejčastější chyby při malování", "item": "https://www.domovniguru.cz/blog/nejcastejsi-chyby-pri-malovani" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Musím vždy používat penetraci před malováním?", "acceptedAnswer": { "@type": "Answer", "text": "U nově vymalovaných nebo nasákavých povrchů ano – penetrace sjednotí nasákavost podkladu, zlepší přilnavost barvy a sníží spotřebu barvy. Vynechat ji lze jen u stěn v dobrém stavu, které už byly natřené kvalitní barvou." } }, { "@type": "Question", "name": "Kolik vrstev barvy je potřeba?", "acceptedAnswer": { "@type": "Answer", "text": "Standardně dvě vrstvy. První vrstva sjednotí podklad, druhá zajistí krycí schopnost a rovnoměrný odstín. Při přechodu z tmavé na světlou barvu může být potřeba i třetí vrstva." } }, { "@type": "Question", "name": "Jak dlouho čekat mezi jednotlivými vrstvami barvy?", "acceptedAnswer": { "@type": "Answer", "text": "U běžných disperzních barev na zeď a strop se doporučuje technologická přestávka 4–6 hodin při pokojové teplotě a běžné vlhkosti. Při nižší teplotě nebo vyšší vlhkosti je potřeba počkat déle, klidně přes noc." } }, { "@type": "Question", "name": "Proč mi na zdi zůstávají pruhy po válečku?", "acceptedAnswer": { "@type": "Answer", "text": "Pruhy nejčastěji vznikají špatným ředěním barvy, použitím nevhodného válečku, nanášením příliš silné vrstvy nebo malováním na již zaschlou hranu. Pomáhá malovat technikou \"mokré do mokrého\" a udržovat stejný směr tahů." } }, { "@type": "Question", "name": "Dá se zbylá barva ještě použít po několika měsících?", "acceptedAnswer": { "@type": "Answer", "text": "Pokud byla barva skladována v dobře uzavřeném obalu, mimo mráz a přímé slunce, je často použitelná i po roce. Před použitím ji ale vždy důkladně promíchejte a zkontrolujte konzistenci a zápach." } }] }] };

const RELATED = [
  { title: "Jak malovat zeď – kompletní průvodce krok za krokem", href: "/blog/jak-malovat-zed", read: "6 min" },
  { title: "Penetrace před malováním – kdy je nutná a jak na ni", href: "/blog/penetrace-pred-malovanim", read: "4 min" },
  { title: "Jak opravit škrábance a díry ve zdi před malováním", href: "/blog/opravit-skrabance-diry-ve-zdi", read: "5 min" },
  { title: "Malování přes tmavou barvu – jak na to bez šmouh", href: "/blog/malovat-pres-tmavou-barvu", read: "4 min" },
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
              <span>Nejčastější chyby při malování</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování & barvy</Link>
                <span className="article-read-time">⏱ 7 min čtení</span>
              </div>
              <h1 className="article-h1">Nejčastější chyby při malování a jak se jim vyhnout</h1>
              <p className="article-lead">Vymalovat pokoj vypadá jednoduše – kbelík barvy, váleček a za pár hodin je hotovo. Realita je ale jiná: prosvítající podklad, šmouhy po válečku, odlupující se barva nebo trhliny, které se po pár týdnech objeví znovu. Většina těchto problémů má jeden základ – chybu, která se stala dřív, než barva vůbec přišla na zeď. Projdeme si deset nejčastějších chyb a ukážeme, jak se jim vyhnout.</p>
              <div className="article-meta-row"><span>Aktualizováno: 11. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#priprava-povrchu">Malování bez přípravy povrchu</a></li>
                <li><a href="#trhliny-a-diry">Nedostatečné vyspravení trhlin a děr</a></li>
                <li><a href="#maskovaci-paska">Malování bez maskovací pásky</a></li>
                <li><a href="#redeni-barvy">Špatné ředění a míchání barvy</a></li>
                <li><a href="#podminky">Malování za nevhodných podmínek</a></li>
                <li><a href="#technika-naneseni">Technika nanášení – vrstvy, váleček, přestávky</a></li>
                <li><a href="#skladovani">Špatné skladování zbylé barvy</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="priprava-povrchu">
              <h2>1. Malování bez přípravy povrchu (a bez penetrace)</h2>
              <p>Nejčastější chyba vůbec: malíř se těší na výsledek a přeskočí přípravu. Stěna se jen rychle otře hadrem a jede se rovnou s barvou. Problém je, že povrch může být mastný, prašný nebo nestejně nasákavý – a to se na výsledku pozná i přes dvě vrstvy barvy.</p>
              <p>Před malováním je potřeba povrch důkladně očistit od prachu a mastnoty, případně přebrousit lesklá nebo nesourodá místa. U nově omítnutých nebo přestěrkovaných stěn, u sádrokartonu nebo u míst po opravě je téměř vždy nutná <strong>penetrace</strong>. Penetrační nátěr sjednotí savost podkladu, zpevní povrch a zajistí, že se barva nebude vsakovat nerovnoměrně – což je přesně ten jev, kdy po zaschnutí vidíte na zdi „mapy" a tmavší skvrny v místech oprav.</p>
              <p>Detailně jsme se penetraci věnovali v samostatném článku <Link href="/blog/penetrace-pred-malovanim" style={{ color: "#2a6496", textDecoration: "underline" }}>Penetrace před malováním – kdy je nutná a jak na ni</Link>. Pokud si nejste jistí, jestli ji vaše stěna potřebuje, je lepší ji použít – cena penetrace je zlomek ceny barvy a ušetří vám případné přemalovávání.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Penetraci nechte zaschnout podle pokynů výrobce (obvykle 2–4 hodiny). Malování na ještě vlhkou penetraci způsobí, že se barva nebude správně vsakovat a může se objevit nerovnoměrný lesk.</div>
            </section>

            <section id="trhliny-a-diry">
              <h2>2. Nedostatečné vyspravení trhlin a děr stěrkou</h2>
              <p>Druhá velmi rozšířená chyba: malíř zamaskuje trhliny a díry po hmoždinkách jen tenkou vrstvou stěrky „naslepo", bez přebroušení a bez penetrace přes opravené místo. Výsledek? Po zaschnutí barvy je oprava jasně vidět – buď jako vystouplé místo, nebo jako skvrna s jiným odstínem či leskem.</p>
              <p>Správný postup je: trhlinu nebo díru vyčistit od uvolněných částí, naplnit stěrkovou hmotou ve více tenčích vrstvách (silná vrstva najednou praská a sesedá), nechat důkladně zaschnout a přebrousit do roviny s okolím. Teprve pak přijde na řadu penetrace opraveného místa a samotné malování.</p>
              <p>Pokud řešíte víc menších oprav po celé místnosti, vyplatí se spočítat si dopředu spotřebu materiálu pomocí naší <Link href="/kalkulacky/kolik-sterky" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačku na stěrku</Link> – předejdete tak situaci, kdy vám uprostřed práce dojde stěrka a musíte čekat na dokoupení.</p>
              <p>Kompletní postup oprav včetně typů trhlin a vhodných materiálů najdete v článku <Link href="/blog/opravit-skrabance-diry-ve-zdi" style={{ color: "#2a6496", textDecoration: "underline" }}>Jak opravit škrábance a díry ve zdi před malováním</Link>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Po přebroušení opraveného místa otřete prach vlhkým hadrem a nechte zcela uschnout. Prach pod barvou je častou příčinou odlupování v místech oprav.</div>
            </section>

            <section id="maskovaci-paska">
              <h2>3. Malování bez maskovací pásky</h2>
              <p>„Mám pevnou ruku, pásku nepotřebuju" – tahle věta předchází spoustě dodatečného škrabání barvy z lišt, vypínačů a podlah. Maskovací páska sice práci na chvíli zpomalí, ale ušetří mnohem víc času na konci, kdy by se jinak musely opravovat přetažené hrany.</p>
              <ul>
                <li><strong>Lepte na čistý a suchý povrch</strong> – na prašné nebo mastné liště páska nedrží a barva pod ní zateče.</li>
                <li><strong>Přitlačte hranu pásky</strong> – nejlépe hladítkem nebo tvrdou kartou, aby barva nezatekla pod okraj.</li>
                <li><strong>Odstraňujte pásku včas</strong> – ideálně když je barva ještě mírně vlhká na povrchu, ale ne tekutá. Pokud necháte pásku zaschnout úplně, často s sebou strhne kousky zaschlé barvy a vznikne zubatý okraj.</li>
                <li><strong>Používejte malířskou pásku</strong>, ne univerzální lepicí – malířská páska má slabší a rovnoměrné lepidlo, které nepoškodí podklad.</li>
              </ul>
              <p>Při malování rohů a styků se zárubněmi nebo lištami se hodí i správná technika štětcem – tu jsme podrobně popsali v článku o malování rohů a lišt bez přetahování.</p>
            </section>

            <section id="redeni-barvy">
              <h2>4. Špatné ředění a míchání barvy</h2>
              <p>Barva přímo z plechovky nemusí mít vždy ideální konzistenci pro váš povrch a teplotu v místnosti. Časté chyby jsou dvě – buď se barva neředí vůbec, takže je příliš hustá a zanechává na zdi tahy a stopy po válečku, nebo se naopak přežene s ředěním, takže barva ztratí krycí schopnost a je potřeba o vrstvu navíc.</p>
              <p>Vždy se řiďte návodem výrobce na obalu – ten udává doporučené ředění vodou v procentech (obvykle 5–10 % pro první vrstvu u savějších podkladů). Stejně důležité je barvu před použitím i v jejím průběhu <strong>důkladně promíchat</strong>, protože pigment a pojivo se v plechovce postupně usazují. Nepromíchaná barva může mít na začátku a na konci kbelíku jiný odstín – což se projeví jako nerovnoměrné plochy na stěně.</p>
              <h3>Míchání více plechovek dohromady</h3>
              <p>Pokud na jednu místnost potřebujete víc plechovek stejné barvy, vždy je promíchejte dohromady ve větší nádobě (tzv. „boxování"). I barvy ze stejné šarže mohou mít drobné odchylky odstínu, které jsou na velké ploše stěny viditelné, pokud se barva mění uprostřed stěny.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud barvu ředíte, dělejte to postupně po malých dávkách a průběžně kontrolujte konzistenci – hustotu smetany je snazší naředit než zahustit zpět.</div>
            </section>

            <section id="podminky">
              <h2>5. Malování za nevhodných podmínek</h2>
              <p>Barva nezasychá jen „časem" – zásadní roli hrají teplota a vlhkost vzduchu v místnosti. Malování při nevhodných podmínkách patří mezi chyby, které nejsou hned vidět, ale projeví se po pár dnech nebo týdnech.</p>
              <ul>
                <li><strong>Zima a chladné stěny</strong> – při teplotě pod 10 °C barva zasychá pomalu a nerovnoměrně, hrozí horší přilnavost a praskání. Ideální teplota pro malování je 15–25 °C.</li>
                <li><strong>Vysoká vlhkost</strong> – v koupelně nebo nově omítnuté místnosti může vlhkost vzduchu prodloužit dobu schnutí na dvojnásobek i víc. Barva nanesená na vlhký podklad se může později odlupovat nebo pod ní vznikat plíseň.</li>
                <li><strong>Přímé slunce a průvan</strong> – pokud barva zasychá příliš rychle (např. na zdi osvětlené sluncem nebo u otevřeného okna s průvanem), povrch zaschne dřív, než stihnete navázat dalším tahem válečku. Vznikají viditelné přesahy a nerovnoměrný lesk.</li>
              </ul>
              <p>Ideální je malovat za rozptýleného světla, při zavřených oknech (průvan vypněte, ale místnost po dokončení vrstvy krátce vyvětrejte) a v rozmezí teplot doporučeném výrobcem barvy – obvykle bývá uvedeno přímo na obalu.</p>
            </section>

            <section id="technika-naneseni">
              <h2>6. Technika nanášení – silná vrstva, špatný váleček a přeskočené přestávky</h2>
              <h3>Příliš silná vrstva</h3>
              <p>Logika „čím víc barvy najednou, tím méně vrstev" v praxi nefunguje. Silná vrstva barvy zasychá nerovnoměrně – povrch může zaschnout dřív než spodní vrstva, což vede k popraskání, stékání nebo dlouhodobě k odlupování. Lepší jsou dvě tenčí, rovnoměrné vrstvy než jedna silná.</p>
              <h3>Nesprávný typ válečku</h3>
              <p>Váleček s příliš dlouhým vlasem na hladké stěně zanechává výraznou strukturu a spotřebovává zbytečně mnoho barvy. Naopak krátký vlas na hrubší omítce nepokryje povrch rovnoměrně a je potřeba víc vrstev. Orientačně:</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Povrch</th><th>Doporučený váleček</th></tr></thead>
                  <tbody>
                    <tr><td>Hladké stěny, sádrokarton</td><td>Krátký vlas (4–6 mm), pěnový nebo mikrovlákno</td></tr>
                    <tr><td>Jemně strukturovaná omítka</td><td>Střední vlas (10–12 mm)</td></tr>
                    <tr><td>Hrubá omítka, fasáda</td><td>Dlouhý vlas (18–25 mm)</td></tr>
                    <tr><td>Stropy</td><td>Krátký až střední vlas, teleskopická tyč</td></tr>
                  </tbody>
                </table>
              </div>
              <h3>Přeskočená technologická přestávka</h3>
              <p>Druhá vrstva nanesená na ještě nedostatečně zaschlou první vrstvu je častou příčinou „strhávání" barvy válečkem a nerovnoměrného odstínu. Standardní technologická přestávka mezi vrstvami u běžných interiérových barev je 4–6 hodin při pokojové teplotě, ale vždy se řiďte konkrétním návodem na obalu – u některých barev a při nižší teplotě může být potřeba i 24 hodin.</p>
              <h3>Nesprávný počet vrstev</h3>
              <p>Jedna vrstva barvy téměř nikdy nestačí, i když se to z plechovky může zdát. Standard jsou dvě vrstvy – první sjednotí podklad a odstín, druhá zajistí plnou krycí schopnost a rovnoměrný vzhled. Při přechodu z výrazně tmavé barvy na světlou (např. z červené na bílou) může být potřeba i třetí vrstva, případně speciální podkladová barva s vysokou krycí schopností.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Malujte technikou „mokré do mokrého" – navazujte další tah válečku na ještě vlhký okraj předchozího tahu. Zabráníte tak viditelným přesahům a pruhům.</div>
            </section>

            <section id="skladovani">
              <h2>7. Špatné skladování zbylé barvy</h2>
              <p>Po dokončení malování často zbyde část barvy „na opravy" – ale pokud se neuskladní správně, je za pár měsíců nepoužitelná. Nejčastější chyby: víko se nedovře pořádně (barva na povrchu zaschne a vytvoří krustu), plechovka se uloží v mrazu (u disperzních barev mráz nevratně poškodí strukturu) nebo na přímém slunci a teple (barva může zhoustnout nebo se srazit).</p>
              <ul>
                <li>Víko před uzavřením otřete od barvy, aby dobře těsnilo, případně přelijte zbytek do menší, plné nádoby – čím méně vzduchu nad hladinou, tím lépe.</li>
                <li>Skladujte v suchu, mimo mráz, ideálně při teplotě 5–25 °C.</li>
                <li>Plechovku popište datem a názvem odstínu/místnosti – ušetří to hledání při příští opravě.</li>
                <li>Před opětovným použitím barvu vždy znovu důkladně promíchejte a zkontrolujte konzistenci a zápach – zatuchlý zápach signalizuje, že barva už není v pořádku.</li>
              </ul>
              <p>Při správném skladování vydrží otevřená plechovka kvalitní disperzní barvy klidně rok i déle.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Musím vždy používat penetraci před malováním?", a: "U nově vymalovaných nebo nasákavých povrchů ano – penetrace sjednotí nasákavost podkladu, zlepší přilnavost barvy a sníží spotřebu barvy. Vynechat ji lze jen u stěn v dobrém stavu, které už byly natřené kvalitní barvou." },
                  { q: "Kolik vrstev barvy je potřeba?", a: "Standardně dvě vrstvy. První vrstva sjednotí podklad, druhá zajistí krycí schopnost a rovnoměrný odstín. Při přechodu z tmavé na světlou barvu může být potřeba i třetí vrstva." },
                  { q: "Jak dlouho čekat mezi jednotlivými vrstvami barvy?", a: "U běžných disperzních barev na zeď a strop se doporučuje technologická přestávka 4–6 hodin při pokojové teplotě a běžné vlhkosti. Při nižší teplotě nebo vyšší vlhkosti je potřeba počkat déle, klidně přes noc." },
                  { q: "Proč mi na zdi zůstávají pruhy po válečku?", a: "Pruhy nejčastěji vznikají špatným ředěním barvy, použitím nevhodného válečku, nanášením příliš silné vrstvy nebo malováním na již zaschlou hranu. Pomáhá malovat technikou „mokré do mokrého\" a udržovat stejný směr tahů." },
                  { q: "Dá se zbylá barva ještě použít po několika měsících?", a: "Pokud byla barva skladována v dobře uzavřeném obalu, mimo mráz a přímé slunce, je často použitelná i po roce. Před použitím ji ale vždy důkladně promíchejte a zkontrolujte konzistenci a zápach." },
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
                <li><a href="#priprava-povrchu">Příprava povrchu</a></li>
                <li><a href="#trhliny-a-diry">Trhliny a díry</a></li>
                <li><a href="#maskovaci-paska">Maskovací páska</a></li>
                <li><a href="#redeni-barvy">Ředění barvy</a></li>
                <li><a href="#podminky">Vhodné podmínky</a></li>
                <li><a href="#technika-naneseni">Technika nanášení</a></li>
                <li><a href="#skladovani">Skladování barvy</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/malovani" className="sidebar-cat-link">🎨 Malování & barvy<span>20 článků →</span></Link>
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
