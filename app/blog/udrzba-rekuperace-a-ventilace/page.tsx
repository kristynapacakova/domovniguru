import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak udržovat rekuperaci a ventilaci, aby fungovala efektivně",
  description: "Filtry, výměník, kondenzát i mřížky – kompletní postup pravidelné údržby rekuperační jednotky pro zdravý vzduch a nízkou spotřebu energie.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/udrzba-rekuperace-a-ventilace" },
  openGraph: {
    title: "Jak udržovat rekuperaci a ventilaci, aby fungovala efektivně",
    description: "Filtry, výměník, kondenzát i mřížky – kompletní postup pravidelné údržby rekuperační jednotky pro zdravý vzduch a nízkou spotřebu energie.",
    url: "https://www.domovniguru.cz/blog/udrzba-rekuperace-a-ventilace",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "article",
    publishedTime: "2026-06-22T08:00:00Z",
    modifiedTime: "2026-06-22T08:00:00Z",
    authors: ["DomovniGuru"],
    images: [{ url: "/api/og?title=Jak%20udr%C5%BEovat%20rekuperaci%20a%20ventilaci%2C%20aby%20fungovala%20efektivn%C4%9B&cat=blog", width: 1200, height: 630, alt: "Jak udržovat rekuperaci a ventilaci, aby fungovala efektivně" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jak udržovat rekuperaci a ventilaci, aby fungovala efektivně",
    description: "Filtry, výměník, kondenzát i mřížky – kompletní postup pravidelné údržby rekuperace.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.domovniguru.cz/blog/udrzba-rekuperace-a-ventilace#article",
      "headline": "Jak udržovat rekuperaci a ventilaci, aby fungovala efektivně",
      "description": "Filtry, výměník, kondenzát i mřížky – kompletní postup pravidelné údržby rekuperační jednotky pro zdravý vzduch a nízkou spotřebu energie.",
      "datePublished": "2026-06-22T08:00:00Z",
      "dateModified": "2026-06-22T08:00:00Z",
      "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.domovniguru.cz/blog/udrzba-rekuperace-a-ventilace" },
      "inLanguage": "cs",
      "keywords": ["údržba rekuperace", "čištění filtrů rekuperace", "rekuperační jednotka servis", "výměna filtrů ventilace", "odvod kondenzátu rekuperace"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.domovniguru.cz/blog/udrzba-rekuperace-a-ventilace#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" },
        { "@type": "ListItem", "position": 3, "name": "Sezónní údržba", "item": "https://www.domovniguru.cz/blog/kategorie/sezonni-udrzba" },
        { "@type": "ListItem", "position": 4, "name": "Jak udržovat rekuperaci a ventilaci, aby fungovala efektivně", "item": "https://www.domovniguru.cz/blog/udrzba-rekuperace-a-ventilace" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.domovniguru.cz/blog/udrzba-rekuperace-a-ventilace#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Jak často se mají měnit filtry v rekuperaci?", "acceptedAnswer": { "@type": "Answer", "text": "Standardní filtry venkovního vzduchu se obvykle mění každé 3 měsíce, v lokalitách s vyšší prašností nebo pylem klidně i častěji. Filtry odváděného vzduchu z interiéru vydrží déle, zpravidla 6 měsíců, ale vždy záleží na doporučení výrobce konkrétní jednotky." } },
        { "@type": "Question", "name": "Jak poznám, že má rekuperace ucpaný filtr?", "acceptedAnswer": { "@type": "Answer", "text": "Typickým signálem je snížený výkon ventilace, hlučnější chod jednotky, zatuchlý vzduch v interiéru nebo zvýšená vlhkost na oknech. Některé jednotky mají i indikátor zanesení filtru, který upozorní na potřebu výměny." } },
        { "@type": "Question", "name": "Musí se čistit i výměník rekuperace?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, výměník se postupně zanáší prachem a mastnotou z kuchyně i přes kvalitní filtry. Doporučuje se kontrola a vyčištění jednou ročně, ideálně při výroční revizi jednotky odborným servisem." } },
        { "@type": "Question", "name": "Proč z rekuperace odtéká voda?", "acceptedAnswer": { "@type": "Answer", "text": "Při rekuperaci tepla z odváděného teplého vzduchu vzniká kondenzát, který musí odtékat odvodem do kanalizace nebo sběrné nádoby. Pokud je odvod ucpaný nebo zamrzlý, voda se hromadí v jednotce a může způsobit poškození nebo plísně." } },
        { "@type": "Question", "name": "Jak často čistit venkovní a vnitřní mřížky ventilace?", "acceptedAnswer": { "@type": "Answer", "text": "Mřížky a vyústění stačí čistit přibližně dvakrát až čtyřikrát ročně, podle prašnosti prostředí. Venkovní mřížky navíc zkontroluj po silném větru nebo na podzim, kdy se do nich zachytává listí." } },
        { "@type": "Question", "name": "Kdy je potřeba zavolat servis na rekuperaci?", "acceptedAnswer": { "@type": "Answer", "text": "Odborný servis je vhodný jednou ročně na kompletní kontrolu, čištění výměníku a ventilátorů a ověření funkce regulace. Mimo to volej servis vždy, když si všimneš neobvyklého zvuku, vibrací nebo trvale sníženého výkonu i po výměně filtrů." } },
      ],
    },
    {
      "@type": "HowTo",
      "@id": "https://www.domovniguru.cz/blog/udrzba-rekuperace-a-ventilace#howto",
      "name": "Jak udržovat rekuperaci a ventilaci, aby fungovala efektivně",
      "description": "Filtry, výměník, kondenzát i mřížky – kompletní postup pravidelné údržby rekuperační jednotky pro zdravý vzduch a nízkou spotřebu energie.",
      "step": [
        { "@type": "HowToStep", "name": "Výměna filtrů", "text": "Filtry venkovního i odváděného vzduchu kontroluj a měň podle doporučeného intervalu, obvykle každé 3 až 6 měsíců." },
        { "@type": "HowToStep", "name": "Kontrola a čištění výměníku", "text": "Jednou ročně zkontroluj a vyčisti výměník tepla, ideálně v rámci roční servisní prohlídky jednotky." },
        { "@type": "HowToStep", "name": "Odvod kondenzátu", "text": "Zkontroluj, že odtok kondenzátu není ucpaný ani zamrzlý a voda z jednotky volně odtéká." },
        { "@type": "HowToStep", "name": "Čištění mřížek a vyústění", "text": "Vyústění a mřížky v interiéru i venkovní sání a výfuk pravidelně zbavuj prachu a nečistot." },
        { "@type": "HowToStep", "name": "Kontrola potrubních rozvodů", "text": "Občas zkontroluj přístupné úseky vzduchotechnického potrubí, zda v nich nedochází k usazování prachu nebo netěsnostem." },
        { "@type": "HowToStep", "name": "Roční odborný servis", "text": "Jednou za rok přizvi odborný servis na kompletní kontrolu ventilátorů, regulace a celkové funkce jednotky." },
      ],
    },
  ],
};

const RELATED = [
  { title: "Jak připravit dům na zimu", href: "/blog/priprava-domu-na-zimu", read: "6 min" },
  { title: "Zkontrolovat kotel před zimou", href: "/blog/zkontrolovat-kotel-pred-zimou", read: "5 min" },
  { title: "Jak ušetřit na vytápění", href: "/blog/usetrit-na-vytapeni", read: "6 min" },
  { title: "Kontrola hasicích přístrojů a detektorů kouře", href: "/blog/kontrola-hasicich-pristroju-a-detektoru-koure", read: "5 min" },
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
              <span>Jak udržovat rekuperaci a ventilaci, aby fungovala efektivně</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">❄️ Sezónní údržba</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak udržovat rekuperaci a ventilaci, aby fungovala efektivně</h1>
              <p className="article-lead">Rekuperační jednotka ti šetří energii i zdravý vzduch v domě, ale jen za podmínky, že se o ni pravidelně staráš. Zanesené filtry a zapomenutý výměník dokážou výkon i účinnost ventilace výrazně omezit, aniž by si toho člověk hned všiml.</p>
              <div className="article-meta-row">
                <span>Aktualizováno: 22. června 2026</span><span>·</span><span>DomovniGuru</span>
              </div>
              <ShareButtons url="https://www.domovniguru.cz/blog/udrzba-rekuperace-a-ventilace" title="Jak udržovat rekuperaci a ventilaci, aby fungovala efektivně" />
            </header>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#proc">Proč je údržba důležitá</a></li>
                <li><a href="#filtry">Výměna a čištění filtrů</a></li>
                <li><a href="#vymenik">Kontrola výměníku</a></li>
                <li><a href="#kondenzat">Odvod kondenzátu</a></li>
                <li><a href="#mrizky">Čištění mřížek a potrubí</a></li>
                <li><a href="#servis">Kdy zavolat servis</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="proc">
              <h2>Proč je pravidelná údržba rekuperace tak důležitá</h2>
              <p>Rekuperační jednotka neustále vyměňuje vzduch v domě a zároveň zpětně získává teplo z toho, který odchází ven. Pokud se o ni nestaráš, dvě věci utrpí současně – kvalita vzduchu, který dýcháš, a účinnost, se kterou jednotka šetří energii na vytápění.</p>
              <h3>Dopad na kvalitu vzduchu</h3>
              <p>Zanesený filtr nezachytí prach, pyl ani jemné částice tak efektivně jako čistý, takže se do interiéru dostává více znečištění. Zároveň se na zanesených filtrech a ve vlhkém prostředí výměníku snadno množí bakterie a plísně, jejichž spory pak jednotka rozvádí po celém domě.</p>
              <h3>Dopad na spotřebu energie</h3>
              <p>Ucpaný filtr nutí ventilátory pracovat s vyšším výkonem, aby udržely potřebný průtok vzduchu, což zvyšuje spotřebu elektřiny. Zanesený výměník navíc předává méně tepla mezi odváděným a přiváděným vzduchem, takže se snižuje samotná účinnost rekuperace tepla, pro kterou byla jednotka pořízena.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Veď si jednoduchý kalendář výměny filtrů – ať v telefonu nebo na lístku u jednotky. Snadno se totiž stane, že se na výměnu zapomene o měsíc i dva, což už se na výkonu jednotky projeví.</div>
            </section>

            <section id="filtry">
              <h2>Výměna a čištění filtrů</h2>
              <p>Filtry jsou první a nejdůležitější linií ochrany celé jednotky i tvého interiéru.</p>
              <h3>Jak často filtry měnit</h3>
              <p>Filtr přiváděného venkovního vzduchu se obvykle mění každé 3 měsíce, v období vysoké prašnosti nebo pylové sezóny i častěji. Filtr odváděného vzduchu z interiéru bývá méně zanesený a vydrží přibližně 6 měsíců. Vždy se ale řiď konkrétním doporučením výrobce tvé jednotky, intervaly se mohou lišit.</p>
              <h3>Jak filtr vyměnit</h3>
              <p>Před výměnou jednotku vypni, otevři servisní dvířka a opatrně vytáhni starý filtr, aby se z něj nesesypal usazený prach do interiéru jednotky. Nový filtr vlož ve správné orientaci podle šipky průtoku vzduchu, kterou bývá filtr označen.</p>
              <h3>Kontrola mezi výměnami</h3>
              <p>I mezi plánovanými výměnami se vyplatí filtr jednou za měsíc vizuálně zkontrolovat, zejména v období vyšší prašnosti nebo pylu. Pokud je filtr výrazně zanesený dřív, než by měl být, vyměň ho bez ohledu na plánovaný interval.</p>
            </section>

            <section id="vymenik">
              <h2>Kontrola a čištění výměníku</h2>
              <p>Výměník je srdcem celé rekuperační jednotky – v něm dochází k přenosu tepla mezi odváděným a přiváděným vzduchem.</p>
              <h3>Proč se výměník zanáší i s funkčními filtry</h3>
              <p>I při správně fungujících filtrech se na lamelách výměníku postupně usazuje jemný prach a u jednotek napojených na kuchyňský odtah i mastnota. Tyto usazeniny snižují plochu pro přenos tepla a tím i celkovou účinnost rekuperace.</p>
              <h3>Jak často a jak kontrolovat</h3>
              <p>Vizuální kontrolu výměníku stačí provést jednou ročně, ideálně na podzim před zahájením otopné sezóny. Pokud má jednotka snímatelný výměník, lze ho opatrně vyjmout a omyt vlažnou vodou, u složitějších typů a vestavěných jednotek je lepší přenechat čištění odbornému servisu.</p>
            </section>

            <section id="kondenzat">
              <h2>Odvod kondenzátu</h2>
              <p>Při zpětném získávání tepla z teplého odváděného vzduchu vždy vzniká určité množství kondenzátu, který musí mít kam odtékat.</p>
              <h3>Proč je odvod kondenzátu kritický</h3>
              <p>Pokud je odtoková hadička nebo trubička ucpaná, zalomená nebo v zimě zamrzlá, voda se začne hromadit přímo v tělese jednotky. To může způsobit přetečení, poškození elektroniky nebo vznik plísně uvnitř jednotky, kterou je pak složité odstranit.</p>
              <h3>Co kontrolovat</h3>
              <ul>
                <li><strong>Volný průchod odtoku</strong> – zkontroluj, že hadička není zalomená ani ucpaná nečistotami</li>
                <li><strong>Sifon na odtoku</strong> – pokud jednotka sifon má, ověř, že je naplněný vodou a funguje jako zápachová uzávěra</li>
                <li><strong>Trasa vedená chladnými prostory</strong> – pokud odtok vede přes nevytápěný prostor, zkontroluj, že tam v mrazu nezamrzá</li>
              </ul>
            </section>

            <section id="mrizky">
              <h2>Čištění mřížek, vyústění a potrubí</h2>
              <p>Vyústění a mřížky ventilace jsou viditelnou součástí systému, na kterou je ale často potřeba myslet i v rámci pravidelného úklidu domu.</p>
              <h3>Vnitřní vyústění</h3>
              <p>Talířové ventily a mřížky v interiéru čisti přibližně dvakrát až čtyřikrát ročně vlhkým hadříkem nebo vysavačem s kartáčovým nástavcem, aby v nich nezůstával usazený prach, který se pak rozfoukává zpět do pokoje.</p>
              <h3>Venkovní sání a výfuk</h3>
              <p>Venkovní mřížky zkontroluj zejména na podzim, kdy se do nich nejčastěji zachytává spadané listí, a po silnějším větru, kdy se tam mohou dostat i drobné nečistoty. Ucpaná venkovní mřížka omezuje průtok vzduchu pro celý systém.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud bydlíš v lokalitě s vyšší prašností nebo v blízkosti silnice, počítej s tím, že filtry i mřížky se budou zanášet rychleji než udávané standardní intervaly.</div>
            </section>

            <section id="servis">
              <h2>Kdy zavolat odborný servis</h2>
              <p>Některé úkoly zvládneš sám, ale jsou situace, kdy se vyplatí přizvat odborníka.</p>
              <h3>Roční servisní prohlídka</h3>
              <p>Jednou ročně doporučujeme nechat jednotku zkontrolovat odborným servisem – zahrnuje kompletní čištění výměníku, kontrolu ventilátorů, ověření funkce regulace a měření skutečného průtoku vzduchu, což doma sám obvykle nezměříš.</p>
              <h3>Varovné signály</h3>
              <p>Neobvyklý hluk, vibrace, trvalý pokles výkonu i po výměně filtrů nebo opakované problémy s kondenzátem jsou signály, že je čas zavolat servis dříve, než dojde k vážnější poruše. Čím déle se problém řeší, tím vyšší bývá riziko poškození dražších součástí jednotky.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jak často se mají měnit filtry v rekuperaci?", a: "Standardní filtry venkovního vzduchu se obvykle mění každé 3 měsíce, v lokalitách s vyšší prašností nebo pylem klidně i častěji. Filtry odváděného vzduchu z interiéru vydrží déle, zpravidla 6 měsíců, ale vždy záleží na doporučení výrobce konkrétní jednotky." },
                  { q: "Jak poznám, že má rekuperace ucpaný filtr?", a: "Typickým signálem je snížený výkon ventilace, hlučnější chod jednotky, zatuchlý vzduch v interiéru nebo zvýšená vlhkost na oknech. Některé jednotky mají i indikátor zanesení filtru, který upozorní na potřebu výměny." },
                  { q: "Musí se čistit i výměník rekuperace?", a: "Ano, výměník se postupně zanáší prachem a mastnotou z kuchyně i přes kvalitní filtry. Doporučuje se kontrola a vyčištění jednou ročně, ideálně při výroční revizi jednotky odborným servisem." },
                  { q: "Proč z rekuperace odtéká voda?", a: "Při rekuperaci tepla z odváděného teplého vzduchu vzniká kondenzát, který musí odtékat odvodem do kanalizace nebo sběrné nádoby. Pokud je odvod ucpaný nebo zamrzlý, voda se hromadí v jednotce a může způsobit poškození nebo plísně." },
                  { q: "Jak často čistit venkovní a vnitřní mřížky ventilace?", a: "Mřížky a vyústění stačí čistit přibližně dvakrát až čtyřikrát ročně, podle prašnosti prostředí. Venkovní mřížky navíc zkontroluj po silném větru nebo na podzim, kdy se do nich zachytává listí." },
                  { q: "Kdy je potřeba zavolat servis na rekuperaci?", a: "Odborný servis je vhodný jednou ročně na kompletní kontrolu, čištění výměníku a ventilátorů a ověření funkce regulace. Mimo to volej servis vždy, když si všimneš neobvyklého zvuku, vibrací nebo trvale sníženého výkonu i po výměně filtrů." },
                ].map(({ q, a }) => (
                  <details key={q} className="faq-item">
                    <summary className="faq-summary">{q}<span className="faq-icon">▾</span></summary>
                    <div className="faq-body">{a}</div>
                  </details>
                ))}
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/udrzba-rekuperace-a-ventilace" title="Jak udržovat rekuperaci a ventilaci, aby fungovala efektivně" />

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
                <li><a href="#proc">Proč je údržba důležitá</a></li>
                <li><a href="#filtry">Výměna filtrů</a></li>
                <li><a href="#vymenik">Kontrola výměníku</a></li>
                <li><a href="#kondenzat">Odvod kondenzátu</a></li>
                <li><a href="#mrizky">Mřížky a potrubí</a></li>
                <li><a href="#servis">Kdy zavolat servis</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/sezonni-udrzba" className="sidebar-cat-link">❄️ Sezónní údržba<span>Více článků →</span></Link>
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
        .article-meta-row{display:flex;gap:8px;font-size:12px;color:var(--muted);font-weight:500}
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
        .faq-icon{font-size:14px;font-weight:400;flex-shrink:0;margin-left:12px;transition:transform 150ms}
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
