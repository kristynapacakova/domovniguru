import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Okenní truhlíky – postup instalace a výběr rostlin 2026",
  description: "Jak vybrat truhlík, bezpečně ho uchytit a zvolit rostliny podle orientace okna. Substrát, zálivka, hnojení a bezpečnost pro kolemjdoucí.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/okenni-truhliky-postup-a-vyber-rostlin" },
  openGraph: {
    title: "Okenní truhlíky – postup instalace a výběr rostlin 2026",
    description: "Jak vybrat truhlík, bezpečně ho uchytit a zvolit rostliny podle orientace okna. Substrát, zálivka, hnojení a bezpečnost.",
    url: "https://www.domovniguru.cz/blog/okenni-truhliky-postup-a-vyber-rostlin",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "article",
    publishedTime: "2026-06-17T08:00:00Z",
    modifiedTime: "2026-06-17T08:00:00Z",
    authors: ["DomovniGuru"],
    images: [{ url: "/api/og?title=Okenn%C3%AD%20truhl%C3%ADky%20%E2%80%93%20postup%20instalace%20a%20v%C3%BDb%C4%9Br%20rostlin%202026&cat=blog", width: 1200, height: 630, alt: "Okenní truhlíky – postup instalace a výběr rostlin 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Okenní truhlíky – postup instalace a výběr rostlin 2026",
    description: "Výběr truhlíku, bezpečné uchycení, substrát, rostliny podle orientace a zálivka.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.domovniguru.cz/blog/okenni-truhliky-postup-a-vyber-rostlin#article",
      "headline": "Okenní truhlíky – postup instalace a výběr rostlin",
      "description": "Jak vybrat truhlík, bezpečně ho uchytit a zvolit rostliny podle orientace okna. Substrát, zálivka, hnojení a bezpečnost pro kolemjdoucí.",
      "datePublished": "2026-06-17T08:00:00Z",
      "dateModified": "2026-06-17T08:00:00Z",
      "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.domovniguru.cz/blog/okenni-truhliky-postup-a-vyber-rostlin" },
      "inLanguage": "cs",
      "keywords": ["okenní truhlíky", "truhlíky na okno", "výběr rostlin do truhlíku", "uchycení truhlíku na parapet", "zálivka truhlíků", "truhlík na balkon"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.domovniguru.cz/blog/okenni-truhliky-postup-a-vyber-rostlin#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" },
        { "@type": "ListItem", "position": 3, "name": "Zahrada & terasa", "item": "https://www.domovniguru.cz/blog/kategorie/zahrada" },
        { "@type": "ListItem", "position": 4, "name": "Okenní truhlíky", "item": "https://www.domovniguru.cz/blog/okenni-truhliky-postup-a-vyber-rostlin" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.domovniguru.cz/blog/okenni-truhliky-postup-a-vyber-rostlin#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Jaký materiál truhlíku je nejlepší?", "acceptedAnswer": { "@type": "Answer", "text": "Plastový truhlík je nejlehčí a nejlevnější, ideální na okenní parapet, kde každý kilogram navíc zatěžuje úchyty. Dřevo a kov vypadají hezky, ale jsou těžší a u okenních truhlíků zvyšují nárok na nosnost držáků." } },
        { "@type": "Question", "name": "Kolik váží truhlík plný zeminy?", "acceptedAnswer": { "@type": "Answer", "text": "Truhlík délky 80–100 cm naplněný mokrým substrátem a rostlinami může vážit 15–20 kg i víc. Před instalací je nutné ověřit, že parapet i držáky tuto váhu bezpečně unesou." } },
        { "@type": "Question", "name": "Musí mít truhlík drenážní otvory?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, drenážní otvory ve dně jsou nutné. Bez nich voda v substrátu stagnuje, kořeny hnijí a rostliny rychle uhynou. Na dno před substrátem navíc patří vrstva keramzitu nebo perlitu." } },
        { "@type": "Question", "name": "Jaké rostliny do truhlíku na slunné jižní okno?", "acceptedAnswer": { "@type": "Answer", "text": "Na jižní, plně osluněné okno se hodí surfínie, muškáty a levandule – snášejí sucho i přímé slunce a celý den kvetou. Naopak stínomilné druhy jako begonie by na jihu spálily listy." } },
        { "@type": "Question", "name": "Jak často zalévat okenní truhlík?", "acceptedAnswer": { "@type": "Answer", "text": "Truhlíky vysychají rychleji než záhony, protože mají malý objem substrátu a jsou vystavené větru a slunci ze všech stran. V létě je obvykle nutné zalévat denně, ideálně ráno nebo večer. Alternativou je samozavlažovací systém se zásobníkem vody." } },
        { "@type": "Question", "name": "Jak zajistit truhlík proti pádu?", "acceptedAnswer": { "@type": "Answer", "text": "Truhlík umístěný na vnější straně okna musí mít pevné kovové držáky kotvené do parapetu nebo zdi, nikdy jen opřené o okraj. Zejména v bytových domech jde i o bezpečnost kolemjdoucích – v některých domech to upravují i domovní předpisy či nájemní smlouva." } },
      ],
    },
    {
      "@type": "HowTo",
      "@id": "https://www.domovniguru.cz/blog/okenni-truhliky-postup-a-vyber-rostlin#howto",
      "name": "Okenní truhlíky – postup instalace a výběr rostlin",
      "description": "Jak vybrat truhlík, bezpečně ho uchytit a zvolit rostliny podle orientace okna. Substrát, zálivka, hnojení a bezpečnost pro kolemjdoucí.",
      "step": [
        { "@type": "HowToStep", "name": "Vyber správný truhlík", "text": "Zvol materiál podle nosnosti parapetu – plast je nejlehčí, dřevo a kov hezčí, ale těžší. Truhlík musí mít drenážní otvory ve dně." },
        { "@type": "HowToStep", "name": "Bezpečně uchyť truhlík k oknu", "text": "Použij kovové držáky kotvené do parapetu nebo zdi, které unesou mokrou zeminu i rostliny – klidně 15–20 kg. U vyšších pater zkontroluj únosnost dvojnásobně." },
        { "@type": "HowToStep", "name": "Připrav substrát", "text": "Na dno dej vrstvu keramzitu nebo perlitu pro drenáž, pak naplň kvalitní truhlíkovou zeminou určenou pro nádobové pěstování." },
        { "@type": "HowToStep", "name": "Vyber rostliny podle orientace okna", "text": "Na jih a slunce zvol surfínie, muškáty nebo levanduli. Na sever a stín begonie, netýkavky nebo brečtan." },
        { "@type": "HowToStep", "name": "Zalévej a hnoj pravidelně", "text": "V létě zalévej denně, truhlíky vysychají rychleji než záhony. Každé dva týdny v sezóně růstu přidej tekuté hnojivo." },
      ],
    },
  ],
};

const RELATED = [
  { title: "Bylinky a zelenina na balkoně – co a jak pěstovat", href: "/blog/bylinky-a-zelenina-na-balkone", read: "6 min" },
  { title: "Terasa na balkoně – jak ji zařídit a vybavit", href: "/blog/terasa-na-balkone", read: "5 min" },
  { title: "Jak navrhnout zahradu od nuly", href: "/blog/jak-navrhnout-zahradu", read: "7 min" },
  { title: "Jak správně zalévat zahradu a rostliny", href: "/blog/jak-spravne-zalevat", read: "5 min" },
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
              <span>Okenní truhlíky</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Okenní truhlíky – postup instalace a výběr rostlin</h1>
              <p className="article-lead">Truhlík na okně dokáže oživit i ten nejmenší byt – ale jen pokud je správně vybraný, bezpečně uchycený a osazený rostlinami, které danému oknu vyhovují. Tenhle průvodce tě provede od výběru truhlíku až po celosezónní květinovou výzdobu.</p>
              <div className="article-meta-row">
                <span>Aktualizováno: 17. června 2026</span><span>·</span><span>DomovniGuru</span>
              </div>
              <ShareButtons url="https://www.domovniguru.cz/blog/okenni-truhliky-postup-a-vyber-rostlin" title="Okenní truhlíky – postup instalace a výběr rostlin 2026" />
            </header>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#vyber-truhliku">Výběr truhlíku</a></li>
                <li><a href="#bezpecne-uchyceni">Bezpečné uchycení</a></li>
                <li><a href="#substrat">Substrát a drenáž</a></li>
                <li><a href="#vyber-rostlin">Výběr rostlin podle orientace okna</a></li>
                <li><a href="#celosezonni-efekt">Kombinace pro celosezónní efekt</a></li>
                <li><a href="#zaliva-hnojeni">Zálivka a hnojení</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="vyber-truhliku">
              <h2>Výběr truhlíku</h2>
              <p>Prvním rozhodnutím je materiál. Každý má své výhody a nevýhody, a u okenního truhlíku hraje váha mnohem větší roli než u truhlíku na zemi nebo na zábradlí terasy.</p>
              <h3>Plast</h3>
              <p>Plastový truhlík je nejlehčí a nejlevnější varianta. Sortiment je široký, barvy i tvary se hodí téměř ke každému domu a navíc plast nehnije ani nerezaví. Pro okenní parapet je to obvykle nejrozumnější volba – nízká váha znamená menší nároky na úchyty.</p>
              <h3>Dřevo a kov</h3>
              <p>Dřevěné a kovové truhlíky vypadají vizuálně lépe a působí přírodněji nebo elegantněji, ale jsou výrazně těžší – samotný truhlík bez zeminy může vážit i několik kilogramů navíc. Pokud se pro ně rozhodneš, je o to důležitější ověřit nosnost uchycení (viz další sekce).</p>
              <h3>Drenážní otvory jsou nutnost</h3>
              <p>Bez ohledu na materiál musí mít truhlík ve dně drenážní otvory. Voda, která se nemá kam vsáknout, v substrátu stagnuje, kořeny rostlin začnou hnít a během pár týdnů rostliny uhynou. Pokud koupíš truhlík bez otvorů, je potřeba si je vyvrtat sám.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Volitelně lze pod truhlík umístit miskovitý podstavec, který zachytí přebytečnou vodu a chrání parapet i fasádu před zatékáním.</div>
            </section>

            <section id="bezpecne-uchyceni">
              <h2>Bezpečné uchycení</h2>
              <p>Uchycení truhlíku je sekce, kterou nikdy nevyplatí se podcenit. Truhlík plný mokré zeminy a rostlin totiž váží mnohem víc, než by se na první pohled zdálo.</p>
              <h3>Jak velká je skutečná zátěž</h3>
              <p>Truhlík délky 80–100 cm naplněný substrátem, navlhčenou zeminou a vzrostlými rostlinami snadno dosáhne <strong>15–20 kg</strong>. Po dešti nebo po zálivce je váha ještě vyšší. Držáky na okenní parapet musí tuto zátěž unést bez deformace nebo povolení.</p>
              <h3>Kontrola únosnosti a kotvení</h3>
              <ul>
                <li>Používej kovové držáky určené přímo pro okenní truhlíky, nikoliv univerzální konzoly</li>
                <li>Drák musí být kotven do pevného materiálu – do parapetu nebo zdiva, nikdy jen zavěšený na tenký plech</li>
                <li>U starších nebo dřevěných parapetů zkontroluj, zda materiál není zvětralý či prasklý</li>
                <li>U vyšších pater je kontrola únosnosti ještě důležitější – pád truhlíku z výšky může způsobit vážné zranění</li>
              </ul>
              <h3>Bezpečnost pro kolemjdoucí</h3>
              <p>Truhlík umístěný na vnější straně okna musí mít pevné zajištění proti pádu. To platí dvojnásob v bytových domech, kde truhlík visí nad chodníkem nebo vchodem – pád i menšího truhlíku může ohrozit chodce. V některých domech to dokonce upravuje domovní řád nebo nájemní smlouva, takže je dobré si pravidla předem ověřit u SVJ nebo pronajímatele.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud máš pochybnosti o nosnosti parapetu, umísti truhlík raději na vnitřní stranu okna nebo na zábradlí balkonu, kde je riziko pádu na chodce nulové.</div>
            </section>

            <section id="substrat">
              <h2>Substrát a drenáž</h2>
              <p>Kvalitní substrát rozhoduje o tom, jak rostliny v truhlíku porostou celé léto.</p>
              <h3>Vrstva drenáže na dně</h3>
              <p>Před samotnou zeminou nasyp na dno truhlíku vrstvu <strong>keramzitu nebo perlitu</strong> o tloušťce 2–3 cm. Tato vrstva pomáhá odvádět přebytečnou vodu k drenážním otvorům a zabraňuje zamokření kořenů.</p>
              <h3>Truhlíková zemina</h3>
              <p>Použij kvalitní substrát určený přímo pro truhlíky a nádobové pěstování – má lehčí strukturu než zahradní zemina a obsahuje živiny pro počáteční růst. Levná univerzální zemina často příliš zadržuje vodu a rostliny v ní rychle „zamoknou".</p>
            </section>

            <section id="vyber-rostlin">
              <h2>Výběr rostlin podle orientace okna</h2>
              <p>Orientace okna je nejdůležitější faktor při výběru rostlin – stejné druhy se na jihu i severu chovají úplně jinak.</p>
              <h3>Jižní okno – plné slunce</h3>
              <p>Na jižní straně, kde truhlík dostává slunce většinu dne, volíme rostliny snášející sucho a vysoké teploty:</p>
              <ul>
                <li><strong>Surfínie</strong> – bohatě kvetoucí převislé druhy, ideální pro truhlíky</li>
                <li><strong>Muškáty</strong> – klasika na jižní okno, odolné a dlouho kvetoucí</li>
                <li><strong>Levandule</strong> – snáší sucho i přímé slunce, navíc příjemně voní</li>
              </ul>
              <h3>Severní okno – stín</h3>
              <p>Na severní straně nebo ve stínu budovy potřebuješ druhy, které snášejí méně světla:</p>
              <ul>
                <li><strong>Begonie</strong> – kvetou i v polostínu, snadná péče</li>
                <li><strong>Netýkavky</strong> – bohatě kvetou i bez přímého slunce</li>
                <li><strong>Brečtan</strong> – popínavá zeleň, vhodná i jako doplněk k jiným druhům</li>
              </ul>
              <p>Pokud okno přijímá slunce jen část dne (východ nebo západ), kombinuj druhy snášející polostín, jako jsou begonie nebo netýkavky, případně muškáty, které jsou v péči flexibilnější.</p>
            </section>

            <section id="celosezonni-efekt">
              <h2>Kombinace pro celosezónní efekt</h2>
              <p>Aby truhlík kvetl od brzkého jara až do podzimu, je nejlepší plánovat výsadbu po etapách.</p>
              <h3>Jaro – cibuloviny</h3>
              <p>Na začátku sezóny vysaď jarní cibuloviny, jako jsou krokusy, narcisky nebo tulipány. Kvetou ještě před tím, než přijde čas na letničky, a truhlík tak není prázdný hned od začátku.</p>
              <h3>Léto – letničky</h3>
              <p>Po odeznění cibulovin nahraď je letničkami podle orientace okna – surfínie, muškáty nebo begonie podle toho, kolik slunce truhlík dostává. Tato fáze tvoří hlavní letní výzdobu.</p>
              <h3>Podzim – vřesy</h3>
              <p>Na podzim letničky postupně odkvétají, a je čas je nahradit podzimními vřesy nebo dalšími odolnými druhy, které vydrží i první mrazíky a prodlouží barevnost truhlíku až do listopadu.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Při přesazování mezi etapami substrát jen prokypři a přidej trochu kompostu nebo hnojiva – kompletní výměna zeminy není nutná víc než jednou za rok.</div>
            </section>

            <section id="zaliva-hnojeni">
              <h2>Zálivka a hnojení</h2>
              <h3>Proč truhlíky vysychají rychleji</h3>
              <p>Truhlíky mají malý objem substrátu a jsou vystavené slunci i větru ze všech stran, proto vysychají mnohem rychleji než záhony na zahradě. V létě je často nutné zalévat <strong>denně</strong>, ideálně brzy ráno nebo večer, kdy voda méně odpařuje.</p>
              <h3>Samozavlažovací systém</h3>
              <p>Pokud nemáš čas na denní zálivku, vyplatí se samozavlažovací truhlík nebo zásobník se zavlažovacím systémem. Zásobník vody udrží substrát vlhký i několik dní a výrazně snižuje riziko, že rostliny při výpadku zálivky usychnou.</p>
              <h3>Hnojení</h3>
              <p>V sezóně růstu (květen–září) přidávej <strong>tekuté hnojivo každé dva týdny</strong> přímo do zálivky. Truhlíkové rostliny kvetou intenzivně a substrát má omezenou zásobu živin, takže pravidelné hnojení je nutné pro dlouhé a bohaté kvetení.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Jaký materiál truhlíku je nejlepší?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Plastový truhlík je nejlehčí a nejlevnější, ideální na okenní parapet, kde každý kilogram navíc zatěžuje úchyty. Dřevo a kov vypadají hezky, ale jsou těžší a u okenních truhlíků zvyšují nárok na nosnost držáků.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Kolik váží truhlík plný zeminy?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Truhlík délky 80–100 cm naplněný mokrým substrátem a rostlinami může vážit 15–20 kg i víc. Před instalací je nutné ověřit, že parapet i držáky tuto váhu bezpečně unesou.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Musí mít truhlík drenážní otvory?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ano, drenážní otvory ve dně jsou nutné. Bez nich voda v substrátu stagnuje, kořeny hnijí a rostliny rychle uhynou. Na dno před substrátem navíc patří vrstva keramzitu nebo perlitu.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jaké rostliny do truhlíku na slunné jižní okno?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Na jižní, plně osluněné okno se hodí surfínie, muškáty a levandule – snášejí sucho i přímé slunce a celý den kvetou. Naopak stínomilné druhy jako begonie by na jihu spálily listy.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak často zalévat okenní truhlík?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Truhlíky vysychají rychleji než záhony, protože mají malý objem substrátu a jsou vystavené větru a slunci ze všech stran. V létě je obvykle nutné zalévat denně, ideálně ráno nebo večer. Alternativou je samozavlažovací systém se zásobníkem vody.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak zajistit truhlík proti pádu?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Truhlík umístěný na vnější straně okna musí mít pevné kovové držáky kotvené do parapetu nebo zdi, nikdy jen opřené o okraj. Zejména v bytových domech jde i o bezpečnost kolemjdoucích – v některých domech to upravují i domovní předpisy či nájemní smlouva.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/okenni-truhliky-postup-a-vyber-rostlin" title="Okenní truhlíky – postup instalace a výběr rostlin 2026" />

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
                <li><a href="#vyber-truhliku">Výběr truhlíku</a></li>
                <li><a href="#bezpecne-uchyceni">Bezpečné uchycení</a></li>
                <li><a href="#substrat">Substrát a drenáž</a></li>
                <li><a href="#vyber-rostlin">Výběr rostlin</a></li>
                <li><a href="#celosezonni-efekt">Celosezónní efekt</a></li>
                <li><a href="#zaliva-hnojeni">Zálivka a hnojení</a></li>
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
        .article-layout{display:grid;grid-template-columns:1fr 280px;gap:56px;padding:48px 0 80px;align-items:start}
        .article-header{margin-bottom:32px}
        .article-meta-top{display:flex;align-items:center;gap:12px;margin-bottom:16px}
        .article-cat-pill{display:inline-flex;align-items:center;height:24px;padding:0 12px;border-radius:999px;border:1px solid var(--border);background:var(--surface);font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);text-decoration:none;transition:background 120ms}
        .article-cat-pill:hover{background:#e8e7e2;color:var(--text)}
        .article-read-time{font-size:12px;color:var(--muted);font-weight:500}
        .article-h1{font-family:var(--font-serif);font-size:clamp(26px,3.5vw,40px);line-height:1.1;font-weight:400;letter-spacing:-.01em;margin-bottom:16px}
        .article-lead{font-size:18px;line-height:1.65;color:var(--muted);font-weight:300;margin-bottom:14px}
        .article-meta-row{display:flex;gap:8px;font-size:12px;color:var(--muted);font-weight:500;margin-bottom:16px}
        .toc{background:var(--surface);border-radius:10px;padding:20px 24px;margin-bottom:40px}
        .toc-label{font-size:11px;font-weight:700;letter-spacing:.10em;text-transform:uppercase;color:var(--muted);margin-bottom:12px}
        .toc-list{padding-left:18px;display:flex;flex-direction:column;gap:6px}
        .toc-list li a{font-size:14px;color:var(--muted);text-decoration:none;font-weight:400;transition:color 120ms}
        .toc-list li a:hover{color:var(--text)}
        .article-body section{margin-bottom:48px}
        .article-body h2{font-family:var(--font-serif);font-size:clamp(20px,2.5vw,26px);font-weight:400;line-height:1.2;margin-bottom:16px;border-top:1px solid var(--border);padding-top:24px;margin-top:8px}
        .article-body h3{font-family:var(--font-sans);font-size:16px;font-weight:600;margin-top:24px;margin-bottom:10px;color:var(--text)}
        .article-body p{font-size:16px;line-height:1.75;color:#2a2a28;font-weight:300;margin-bottom:14px}
        .article-body ul,.article-body ol{padding-left:22px;margin-bottom:16px;display:flex;flex-direction:column;gap:8px}
        .article-body li{font-size:15px;line-height:1.6;color:#2a2a28;font-weight:300}
        .article-body strong{font-weight:600;color:var(--text)}
        .article-tip{background:#fffbeb;border-left:3px solid #f59e0b;border-radius:0 8px 8px 0;padding:14px 18px;font-size:14px;line-height:1.6;color:#78716c;margin:20px 0}
        .faq-list{display:flex;flex-direction:column;gap:8px}
        .faq-item{border:1px solid var(--border);border-radius:10px;overflow:hidden;background:#fff}
        .faq-summary{font-size:15px;font-weight:600;padding:16px 20px;cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center;transition:background 120ms}
        .faq-summary:hover{background:var(--surface)}
        .faq-icon{font-size:14px;font-weight:400;flex-shrink:0;margin-left:12px;transition:transform 120ms}
        details[open] .faq-icon{transform:rotate(180deg)}
        .faq-body{font-size:14px;line-height:1.65;color:var(--muted);font-weight:300;padding:0 20px 16px}
        .related-section{margin-top:56px}
        .related-section h2{font-family:var(--font-serif);font-size:22px;font-weight:400;margin-bottom:20px;padding-top:24px;border-top:1px solid var(--border)}
        .related-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
        .article-sidebar{position:sticky;top:80px;display:flex;flex-direction:column;gap:16px}
        .sidebar-widget{background:#fff;border:1px solid var(--border);border-radius:12px;padding:20px}
        .sidebar-widget-title{font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-bottom:14px}
        .sidebar-toc{list-style:none;display:flex;flex-direction:column;gap:8px}
        .sidebar-toc li a{font-size:13px;color:var(--muted);text-decoration:none;font-weight:400;transition:color 120ms;line-height:1.4;display:block}
        .sidebar-toc li a:hover{color:var(--text)}
        .sidebar-cat-link{display:flex;justify-content:space-between;align-items:center;font-size:14px;font-weight:500;color:var(--text);text-decoration:none;padding:8px 0;border-bottom:1px solid var(--border);transition:color 120ms}
        .sidebar-cat-link:hover{color:var(--muted)}
        .sidebar-cat-link span{font-size:12px;color:var(--muted)}
        @media(max-width:960px){.article-layout{grid-template-columns:1fr;gap:0}.article-sidebar{position:static;margin-top:40px}.related-grid{grid-template-columns:1fr}}
        @media(max-width:600px){.article-layout{padding:32px 0 60px}}
      `}</style>
    </>
  );
}
