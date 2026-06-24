import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak natřít dřevěná okna a okenice",
  description: "Postup broušení, penetrace a nátěru dřevěných oken a okenic, aby vydržely venkovním podmínkám.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/natrit-drevena-okna-a-okenice" },
  openGraph: { title: "Jak natřít dřevěná okna a okenice", description: "Postup broušení, penetrace a nátěru dřevěných oken a okenic, aby vydržely venkovním podmínkám.", url: "https://www.domovniguru.cz/blog/natrit-drevena-okna-a-okenice", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-24T08:00:00Z", modifiedTime: "2026-06-24T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20nat%C5%99%C3%ADt%20d%C5%99ev%C4%9Bn%C3%A1%20okna%20a%20okenice&cat=blog", width: 1200, height: 630, alt: "Jak natřít dřevěná okna a okenice" }] },
  twitter: { card: "summary_large_image", title: "Jak natřít dřevěná okna a okenice", description: "Postup broušení, penetrace a nátěru dřevěných oken a okenic, aby vydržely venkovním podmínkám." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/natrit-drevena-okna-a-okenice#article", "headline": "Jak natřít dřevěná okna a okenice", "datePublished": "2026-06-24T08:00:00Z", "dateModified": "2026-06-24T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["nátěr dřevěných oken", "natřít okenice", "lazura na okna", "venkovní nátěr dřeva", "broušení oken", "impregnace dřeva"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Malování & barvy", "item": "https://www.domovniguru.cz/blog/kategorie/malovani" }, { "@type": "ListItem", "position": 4, "name": "Jak natřít dřevěná okna a okenice", "item": "https://www.domovniguru.cz/blog/natrit-drevena-okna-a-okenice" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Kdy je nejlepší doba na natírání dřevěných oken?", "acceptedAnswer": { "@type": "Answer", "text": "Ideální je suché, teplé počasí s teplotou 15–25 °C, bez přímého slunce na natíraný povrch a bez deště v plánu na příštích 24–48 hodin. Nejlepší měsíce jsou pozdní jaro a léto (květen až září), kdy je nízká vzdušná vlhkost a dřevo má čas pořádně proschnout mezi vrstvami." } }, { "@type": "Question", "name": "Musím okna před natřením brousit, i když stará barva drží?", "acceptedAnswer": { "@type": "Answer", "text": "I zdánlivě pevná stará barva se musí zdrsnit jemným brusným papírem (zrnitost 120–180), aby na ní nová barva nebo lazura přilnula. Hladký, lesklý povrch nový nátěr nedrží a během pár měsíců se začne odlupovat v celých plochách." } }, { "@type": "Question", "name": "Jaký je rozdíl mezi lazurou a barvou na okna?", "acceptedAnswer": { "@type": "Answer", "text": "Lazura je polopropustná, dřevo pod ní dýchá a vlhkost může unikat, takže se méně odlupuje a je jednodušší na obnovu. Krycí barva vytváří souvislý neprůhledný film, který dřevo lépe chrání před UV zářením, ale při poškození praská a odlupuje se ve větších kusech a oprava je náročnější." } }, { "@type": "Question", "name": "Kolik vrstev nátěru dřevěná okna potřebují?", "acceptedAnswer": { "@type": "Answer", "text": "Standardní postup je jedna vrstva impregnace nebo penetrace, poté dvě vrstvy vrchního nátěru (lazury nebo barvy). U okenic vystavených přímému slunci a dešti se často doporučuje třetí vrstva navíc, hlavně na spodní hraně a spárách, kde se voda nejvíc zdržuje." } }, { "@type": "Question", "name": "Jak často je potřeba dřevěná okna venku přetírat?", "acceptedAnswer": { "@type": "Answer", "text": "Lazura na okenním rámu obvykle vydrží 3–5 let, krycí barva 5–8 let, v závislosti na orientaci okna ke světovým stranám a intenzitě slunečního a dešťového zatížení. Jihozápadní strana domu bývá nejvíc namáhaná a potřebuje obnovu nátěru častěji než severní strana." } }] }] };

const RELATED = [
  { title: "Jak natřít venkovní dřevo – lazura, olej nebo lak", href: "/blog/natrit-venkovni-drevo", read: "6 min" },
  { title: "Jak odstranit starou barvu ze zdi", href: "/blog/jak-odstranit-starou-barvu", read: "4 min" },
  { title: "Jak vybrat štětce a válečky pro různé typy nátěrů", href: "/blog/vyber-stetcu-a-valecku", read: "5 min" },
  { title: "Jak opravit praskliny ve fasádě před nátěrem", href: "/blog/oprava-prasklin-ve-fasade-pred-malovanim", read: "6 min" },
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
              <Link href="/blog/kategorie/malovani">🎨 Malování & barvy</Link><span className="breadcrumb-sep">/</span>
              <span>Jak natřít dřevěná okna a okenice</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování & barvy</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak natřít dřevěná okna a okenice</h1>
              <p className="article-lead">Dřevěná okna a okenice jsou na rozdíl od interiérových povrchů vystavené dešti, slunci a mrazu celý rok, a proto potřebují pečlivější přípravu i odolnější nátěr než stěna v obýváku. Špatně připravený povrch se odloupe během jedné sezóny. Tady je celý postup od demontáže kování až po finální vrstvu, která vydrží roky.</p>
              <div className="article-meta-row"><span>Aktualizováno: 24. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#kdy">Kdy okna a okenice natírat</a></li>
                <li><a href="#demontaz">Demontáž kování a příprava</a></li>
                <li><a href="#odstraneni">Odstranění staré barvy a laku</a></li>
                <li><a href="#brouseni">Broušení povrchu</a></li>
                <li><a href="#impregnace">Impregnace a ochrana proti houbám</a></li>
                <li><a href="#vyber">Výběr venkovní barvy nebo lazury</a></li>
                <li><a href="#natirani">Technika nanášení a počet vrstev</a></li>
                <li><a href="#udrzba">Údržba do budoucna</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="kdy">
              <h2>Kdy okna a okenice natírat</h2>
              <p>Počasí rozhoduje o tom, jak dobře nátěr zaschne a jak dlouho vydrží. Ideální jsou suché dny s teplotou <strong>15–25 °C</strong>, bez přímého slunce dopadajícího na natíraný povrch (na slunci barva zasychá příliš rychle a tvoří se v ní bubliny a šmouhy) a bez deště v plánu na následujících alespoň 24–48 hodin.</p>
              <ul>
                <li><strong>Nejlepší období</strong> – pozdní jaro až léto, květen až září, kdy je nízká vzdušná vlhkost a dlouhé dny na proschnutí mezi vrstvami</li>
                <li><strong>Nevhodné podmínky</strong> – mráz, déšť, vysoká vzdušná vlhkost nad 80 %, silný vítr (zanáší prach a hmyz do čerstvého nátěru)</li>
                <li><strong>Ranní rosa</strong> – počkej, až dřevo zcela proschne, vlhký povrch barva nepřijme rovnoměrně</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud okno natíráš na místě (bez demontáže), naplánuj práci na dopoledne, kdy dané okno ještě není na přímém slunci – obejdi dům a sleduj, kdy je která strana ve stínu.</div>
            </section>

            <section id="demontaz">
              <h2>Demontáž kování a příprava okolí</h2>
              <p>Pokud je to možné, okna a okenice před natíráním sundej z pantů a polož na kozy nebo stůl – práce na vodorovné ploše je rychlejší, přesnější a nátěr nezatéká do spár tak, jak se to stává u svisle namontovaného okna.</p>
              <ul>
                <li><strong>Vyšroubuj kliky, panty a zámky</strong> – kovové součásti zalep malířskou páskou, pokud je nelze sundat</li>
                <li><strong>Sklo zakryj malířskou páskou a fólií</strong>, případně použij speciální okenní pásku, která se snadno odlepuje i po delší době</li>
                <li><strong>Připrav si dostatek prostoru</strong> – okna potřebují čas na schnutí, ideálně v zastřešeném, ale větraném prostoru (garáž, kryté terasy)</li>
                <li><strong>Označ si polohu kování</strong> fotkou nebo poznámkou, ať vše po zaschnutí správně sedí zpátky</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Panty a kování po demontáži vlož do sáčku s benzinem nebo odmašťovačem na pár hodin – stará mazadla a barva se uvolní a kování bude po vyčištění fungovat jako nové.</div>
            </section>

            <section id="odstraneni">
              <h2>Odstranění staré barvy a laku</h2>
              <p>Odlupující se nebo popraskaná stará vrstva musí pryč, jinak na ní nová barva nikdy nedrží pořádně. Možnosti odstranění:</p>
              <ul>
                <li><strong>Horkovzdušná pistole</strong> – rozehřeje barvu, kterou pak stahuješ špachtlí; rychlé, ale hrozí přehřátí a popraskání skla, drž si proto bezpečnou vzdálenost od tabulí</li>
                <li><strong>Chemický odstraňovač barev</strong> – nanese se na povrch, po čase změkne starou vrstvu, která se stáhne špachtlí; vhodné na detailní profily a římsy</li>
                <li><strong>Mechanické broušení</strong> – nejpomalejší, ale nejbezpečnější metoda, hodí se na menší plochy nebo dokončovací práce po předchozích dvou metodách</li>
              </ul>
              <p>Detailní postup a srovnání metod najdeš v samostatném článku o tom, jak <Link href="/blog/jak-odstranit-starou-barvu" style={{ color: "#2a6496", textDecoration: "underline" }}>odstranit starou barvu ze zdi</Link> – principy odstraňování barvy z dřevěných povrchů jsou velmi podobné.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> U starších oken (před rokem 2008) může stará barva obsahovat olovo. Pokud nevíš jistě, broušení dělej v respirátoru a omezuj prášení vlhčením povrchu.</div>
            </section>

            <section id="brouseni">
              <h2>Broušení povrchu</h2>
              <p>I když se stará barva nezdá poškozená, povrch je potřeba zdrsnit, aby na něm nová vrstva přilnula. Postupuj od hrubšího zrna k jemnějšímu:</p>
              <ul>
                <li><strong>Hrubé broušení (zrnitost 80–100)</strong> – odstraní zbytky odlupující se barvy a vyrovná nerovnosti</li>
                <li><strong>Jemné broušení (zrnitost 120–180)</strong> – zdrsní povrch pro lepší přilnavost nátěru, aniž by poškodilo strukturu dřeva</li>
                <li><strong>Brus vždy ve směru vláken dřeva</strong>, příčné broušení zanechává rýhy viditelné i pod nátěrem</li>
                <li><strong>Po broušení otři prach</strong> suchým hadrem nebo vysav, mastný nebo zaprášený povrch zhoršuje přilnavost penetrace</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Rohy a spáry mezi rámem a křídlem se obtížně brousí brusným papírem – použij na ně malý drátěný kartáček nebo brusnou houbičku, která se ohne do tvaru spáry.</div>
            </section>

            <section id="impregnace">
              <h2>Impregnace a ochrana proti houbám a hnilobě</h2>
              <p>Než nanášíš vrchní barvu, dřevo by mělo dostat impregnační nátěr s fungicidní složkou, hlavně pokud má okno nebo okenice viditelné stopy vlhkosti, plísně nebo začínající hnilobu.</p>
              <ul>
                <li><strong>Impregnace proti dřevokazným houbám a hmyzu</strong> – proniká do struktury dřeva a chrání ho i v místech, kam se vrchní nátěr nedostane (spáry, čela prken)</li>
                <li><strong>Aplikuj na čisté, vybroušené a suché dřevo</strong>, nejlépe štětcem, aby se přípravek dostal i do drobných trhlin</li>
                <li><strong>Nech zcela proschnout</strong> podle doby uvedené na obalu, obvykle 12–24 hodin, než nanášíš další vrstvu</li>
                <li><strong>Poškozené dřevo</strong> (měkké, drolící se) je potřeba lokálně vytmelit dvoukomponentním dřevěným tmelem nebo vyměnit celý díl, impregnace samotná hnilobu nezastaví</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Věnuj zvláštní pozornost spodní hraně okenního křídla a spárám – tam se nejvíc zdržuje dešťová voda a hniloba tam začíná nejčastěji.</div>
            </section>

            <section id="vyber">
              <h2>Výběr venkovní barvy nebo lazury</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ nátěru</th><th>Vzhled</th><th>Odolnost</th><th>Obnova</th></tr></thead>
                  <tbody>
                    <tr><td>Lazura (tenkovrstvá)</td><td>Průhledná, zvýrazňuje kresbu dřeva</td><td>Propustná pro vodní páry, méně odlupuje</td><td>Cca 3–5 let</td></tr>
                    <tr><td>Lazura (silnovrstvá)</td><td>Sytější barva, zachovává kresbu dřeva</td><td>Vyšší odolnost UV záření a vlhkosti</td><td>Cca 4–6 let</td></tr>
                    <tr><td>Krycí barva</td><td>Neprůhledná, jednotná barva</td><td>Vysoká ochrana proti UV a vodě, ale praská při poškození</td><td>Cca 5–8 let</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Lazura nechává prokreslit strukturu dřeva a je propustná pro vodní páry, takže dřevo „dýchá" a méně se odlupuje v celých plochách – pokud se poškodí, obnova je jednodušší, stačí přebrousit a přetřít. Krycí barva tvoří souvislý neprůhledný film, který lépe chrání proti UV záření, ale při mechanickém poškození praská a odlupuje se ve větších kusech.</p>
              <p>Pro detailní srovnání lazur, olejů a laků na venkovní dřevo se podívej do článku o tom, jak <Link href="/blog/natrit-venkovni-drevo" style={{ color: "#2a6496", textDecoration: "underline" }}>natřít venkovní dřevo</Link>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Vždy používej barvu nebo lazuru určenou přímo pro venkovní použití s UV filtrem – interiérové produkty na okně vydrží jen zlomek doby.</div>
            </section>

            <section id="natirani">
              <h2>Technika nanášení a počet vrstev</h2>
              <p>Standardní postup je jedna vrstva impregnace, poté minimálně dvě vrstvy vrchního nátěru. U okenic na jižní a jihozápadní straně domu, které jsou nejvíc namáhané sluncem a deštěm, se vyplatí třetí vrstva navíc, hlavně na spodních hranách a v spárách.</p>
              <ul>
                <li><strong>Natírej ve směru vláken dřeva</strong>, štětcem s přírodními nebo syntetickými vlákny podle typu barvy</li>
                <li><strong>Nejdřív profily a rohy</strong>, pak rovné plochy – předejdeš zaschlým okrajům a viditelným přechodům</li>
                <li><strong>Tenké vrstvy jsou lepší než jedna silná</strong> – silná vrstva zatéká, vytváří kapky a déle nerovnoměrně zasychá</li>
                <li><strong>Mezi vrstvami dodržuj dobu zasychání</strong> uvedenou na obalu, obvykle 4–24 hodin podle typu produktu a teploty</li>
                <li><strong>Nezapomeň na čela prken a spodní hrany</strong> okenních křídel a okenic – tam dřevo nasává nejvíc vlhkosti</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Mezi jednotlivými vrstvami přebrus povrch velmi jemným papírem (zrnitost 220–320) a setři prach – výsledek bude hladší a barva lépe přilne k předchozí vrstvě.</div>
            </section>

            <section id="udrzba">
              <h2>Údržba do budoucna</h2>
              <p>I kvalitní nátěr potřebuje pravidelnou kontrolu, aby vydržel co nejdéle.</p>
              <ul>
                <li><strong>Jednou ročně zkontroluj</strong> nátěr na okenních rámech a okenicích, hlavně po zimě – praskliny a odlupující se místa oprav lokálně dřív, než se vlhkost dostane do dřeva</li>
                <li><strong>Lokální opravy</strong> jsou rychlejší a levnější než celková obnova – přebrus poškozené místo a přetři ho stejným odstínem</li>
                <li><strong>Promazávej kování</strong> jednou až dvakrát ročně silikonovým olejem, aby panty nevrzaly a klika nedřela do natřeného rámu</li>
                <li><strong>Sleduj spáry kolem skla</strong> – pokud se tmel mezi sklem a rámem začne odlupovat, vlhkost se dostane přímo na dřevo pod nátěrem</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Kdy je nejlepší doba na natírání dřevěných oken?", a: "Ideální je suché, teplé počasí s teplotou 15–25 °C, bez přímého slunce na natíraný povrch a bez deště v plánu na příštích 24–48 hodin. Nejlepší měsíce jsou pozdní jaro a léto (květen až září), kdy je nízká vzdušná vlhkost a dřevo má čas pořádně proschnout mezi vrstvami." },
                  { q: "Musím okna před natřením brousit, i když stará barva drží?", a: "I zdánlivě pevná stará barva se musí zdrsnit jemným brusným papírem (zrnitost 120–180), aby na ní nová barva nebo lazura přilnula. Hladký, lesklý povrch nový nátěr nedrží a během pár měsíců se začne odlupovat v celých plochách." },
                  { q: "Jaký je rozdíl mezi lazurou a barvou na okna?", a: "Lazura je polopropustná, dřevo pod ní dýchá a vlhkost může unikat, takže se méně odlupuje a je jednodušší na obnovu. Krycí barva vytváří souvislý neprůhledný film, který dřevo lépe chrání před UV zářením, ale při poškození praská a odlupuje se ve větších kusech a oprava je náročnější." },
                  { q: "Kolik vrstev nátěru dřevěná okna potřebují?", a: "Standardní postup je jedna vrstva impregnace nebo penetrace, poté dvě vrstvy vrchního nátěru (lazury nebo barvy). U okenic vystavených přímému slunci a dešti se často doporučuje třetí vrstva navíc, hlavně na spodní hraně a spárách, kde se voda nejvíc zdržuje." },
                  { q: "Jak často je potřeba dřevěná okna venku přetírat?", a: "Lazura na okenním rámu obvykle vydrží 3–5 let, krycí barva 5–8 let, v závislosti na orientaci okna ke světovým stranám a intenzitě slunečního a dešťového zatížení. Jihozápadní strana domu bývá nejvíc namáhaná a potřebuje obnovu nátěru častěji než severní strana." },
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
                <li><a href="#kdy">Kdy okna natírat</a></li>
                <li><a href="#demontaz">Demontáž kování</a></li>
                <li><a href="#odstraneni">Odstranění staré barvy</a></li>
                <li><a href="#brouseni">Broušení povrchu</a></li>
                <li><a href="#impregnace">Impregnace</a></li>
                <li><a href="#vyber">Výběr barvy nebo lazury</a></li>
                <li><a href="#natirani">Technika nanášení</a></li>
                <li><a href="#udrzba">Údržba do budoucna</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/malovani" className="sidebar-cat-link">🎨 Malování & barvy<span>26 článků →</span></Link>
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
