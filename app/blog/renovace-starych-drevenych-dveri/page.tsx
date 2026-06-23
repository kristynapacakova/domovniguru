import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak renovovat staré dřevěné dveře, než je vyhodíte",
  description: "Demontáž kování, broušení, tmelení a nový nátěr – kompletní postup, jak vrátit původním dřevěným dveřím krásu, místo aby skončily v kontejneru.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/renovace-starych-drevenych-dveri" },
  openGraph: {
    title: "Jak renovovat staré dřevěné dveře, než je vyhodíte",
    description: "Demontáž kování, broušení, tmelení a nový nátěr – kompletní postup, jak vrátit původním dřevěným dveřím krásu, místo aby skončily v kontejneru.",
    url: "https://www.domovniguru.cz/blog/renovace-starych-drevenych-dveri",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "article",
    publishedTime: "2026-06-22T08:00:00Z",
    modifiedTime: "2026-06-22T08:00:00Z",
    authors: ["DomovniGuru"],
    images: [{ url: "/api/og?title=Jak%20renovovat%20star%C3%A9%20d%C5%99ev%C4%9Bn%C3%A9%20dve%C5%99e%2C%20ne%C5%BE%20je%20vyhod%C3%ADte&cat=blog", width: 1200, height: 630, alt: "Jak renovovat staré dřevěné dveře, než je vyhodíte" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jak renovovat staré dřevěné dveře, než je vyhodíte",
    description: "Demontáž, broušení, tmelení a nový nátěr krok za krokem.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.domovniguru.cz/blog/renovace-starych-drevenych-dveri#article",
      "headline": "Jak renovovat staré dřevěné dveře, než je vyhodíte",
      "description": "Demontáž kování, broušení, tmelení a nový nátěr – kompletní postup, jak vrátit původním dřevěným dveřím krásu, místo aby skončily v kontejneru.",
      "datePublished": "2026-06-22T08:00:00Z",
      "dateModified": "2026-06-22T08:00:00Z",
      "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.domovniguru.cz/blog/renovace-starych-drevenych-dveri" },
      "inLanguage": "cs",
      "keywords": ["renovace dřevěných dveří", "staré dveře oprava", "broušení dveří", "nátěr dřevěných dveří", "výměna pant a zámku"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.domovniguru.cz/blog/renovace-starych-drevenych-dveri#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" },
        { "@type": "ListItem", "position": 3, "name": "Stěhování & rekonstrukce", "item": "https://www.domovniguru.cz/blog/kategorie/stehovani" },
        { "@type": "ListItem", "position": 4, "name": "Jak renovovat staré dřevěné dveře, než je vyhodíte", "item": "https://www.domovniguru.cz/blog/renovace-starych-drevenych-dveri" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.domovniguru.cz/blog/renovace-starych-drevenych-dveri#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Jak poznám, že se staré dveře vyplatí renovovat?", "acceptedAnswer": { "@type": "Answer", "text": "Pokud jsou dveře z masivního dřeva nebo kvalitní dýhy, mají rovný a nezborcený rám a dřevo není napadené hnilobou ani dřevokazným hmyzem, renovace se téměř vždy vyplatí. Naopak u levných dutých dveří z aglomerátu nebo silně poškozeného dřeva je výměna rychlejší i levnější." } },
        { "@type": "Question", "name": "Musím starou barvu úplně odstranit, nebo stačí přebrousit?", "acceptedAnswer": { "@type": "Answer", "text": "Pokud je stará vrstva barvy nebo laku popraskaná, odlupující se nebo je jich na sobě víc, je lepší ji odstranit celou pomocí odstraňovače nebo horkovzdušné pistole. Tenkou a dobře přilnavou vrstvu lze jen přebrousit a na ní udělat nový nátěr." } },
        { "@type": "Question", "name": "Jak opravím díry a praskliny ve dřevě?", "acceptedAnswer": { "@type": "Answer", "text": "Menší díry a praskliny vyplň dřevěným tmelem v odstínu blízkém dřevu, po zaschnutí přebrus do roviny s okolím. U větších poškození nebo vypadaných kusů dřeva se používá epoxidový tmel na dřevo, který je pevnější a lépe odolává mechanickému zatížení." } },
        { "@type": "Question", "name": "Mám použít lak, nebo krycí barvu na renovované dveře?", "acceptedAnswer": { "@type": "Answer", "text": "Pokud má dřevo hezkou kresbu a je v dobrém stavu, lak nebo olej kresbu zvýrazní a zachová přirozený vzhled. Krycí barva je lepší volbou tam, kde je dřevo poškozené, tmelené na více místech nebo má nerovnoměrný odstín, který by lak naopak zviditelnil." } },
        { "@type": "Question", "name": "Vyplatí se měnit panty u starých dveří?", "acceptedAnswer": { "@type": "Answer", "text": "Pokud panty vrzí, jsou zkorodované nebo dveře nedovírají kvůli prověšení, výměna za nové kvalitní panty vyřeší problém trvale. Funkční panty bez koroze stačí jen vyčistit, promazat a případně dotáhnout uvolněné šrouby." } },
        { "@type": "Question", "name": "Co dělat se starým skleněným výplněm ve dveřích?", "acceptedAnswer": { "@type": "Answer", "text": "Pokud je sklo prasklé nebo chybí, lze ho nahradit novým sklem stejné tloušťky, případně bezpečnostním sklem pro vyšší odolnost. Originální vzorované nebo barevné sklo je často možné nechat vyrobit na zakázku u specializovaného skláře." } },
      ],
    },
    {
      "@type": "HowTo",
      "@id": "https://www.domovniguru.cz/blog/renovace-starych-drevenych-dveri#howto",
      "name": "Jak renovovat staré dřevěné dveře, než je vyhodíte",
      "description": "Demontáž kování, broušení, tmelení a nový nátěr – kompletní postup, jak vrátit původním dřevěným dveřím krásu, místo aby skončily v kontejneru.",
      "step": [
        { "@type": "HowToStep", "name": "Zhodnocení stavu dveří", "text": "Posuď kvalitu dřeva, rovnost rámu a rozsah poškození, abys zjistil, zda se renovace vyplatí." },
        { "@type": "HowToStep", "name": "Demontáž kování a dveří", "text": "Sundej kliky, zámek a panty, dveře sejmi z rámu a ulož do dobře větraného prostoru pro další práci." },
        { "@type": "HowToStep", "name": "Odstranění staré barvy a laku", "text": "Starý nátěr odstraň chemickým odstraňovačem nebo horkovzdušnou pistolí a povrch zbav zbytků nátěru úplně." },
        { "@type": "HowToStep", "name": "Broušení povrchu", "text": "Postupně přebrus dřevo od hrubšího po jemnější brusný papír, aby byl povrch hladký a připravený na nátěr." },
        { "@type": "HowToStep", "name": "Tmelení poškození", "text": "Díry, praskliny a vypadané kusy dřeva vyplň vhodným tmelem a po zaschnutí přebrus do roviny." },
        { "@type": "HowToStep", "name": "Nový nátěr a obnova kování", "text": "Nanes lak, olej nebo krycí barvu ve více vrstvách a namontuj nové nebo opravené panty, zámek a kliky." },
      ],
    },
  ],
};

const RELATED = [
  { title: "Jak vybrat okna při rekonstrukci", href: "/blog/jak-vybrat-okna-pri-rekonstrukci", read: "6 min" },
  { title: "Plánování rekonstrukce bytu krok za krokem", href: "/blog/planovani-rekonstrukce-bytu", read: "7 min" },
  { title: "Jak odhalit skryté vady bytu", href: "/blog/odhalit-skryte-vady-bytu", read: "6 min" },
  { title: "Rekonstrukce bytu v nájmu – co je možné", href: "/blog/rekonstrukce-bytu-v-najmu-co-je-mozne", read: "6 min" },
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
              <span>Jak renovovat staré dřevěné dveře, než je vyhodíte</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏠 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 7 min čtení</span>
              </div>
              <h1 className="article-h1">Jak renovovat staré dřevěné dveře, než je vyhodíte</h1>
              <p className="article-lead">Původní dveře z masivního dřeva mívají kvalitu, kterou nové dveře z levných materiálů často nenabídnou. Než zaplatíte za výměnu, zvažte renovaci – s trochou času, správným postupem a pár nástroji můžete starým dveřím vrátit nejen funkčnost, ale i charakter, který se v novostavbách těžko hledá.</p>
              <div className="article-meta-row">
                <span>Aktualizováno: 22. června 2026</span><span>·</span><span>DomovniGuru</span>
              </div>
              <ShareButtons url="https://www.domovniguru.cz/blog/renovace-starych-drevenych-dveri" title="Jak renovovat staré dřevěné dveře, než je vyhodíte" />
            </header>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#hodnoceni">Kdy se renovace vyplatí</a></li>
                <li><a href="#demontaz">Demontáž kování a dveří</a></li>
                <li><a href="#odstraneni">Odstranění staré barvy a laku</a></li>
                <li><a href="#brouseni">Broušení a tmelení</a></li>
                <li><a href="#nater">Nový nátěr a lak</a></li>
                <li><a href="#kovani">Panty, zámek a sklo</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="hodnoceni">
              <h2>Kdy se renovace starých dveří vyplatí</h2>
              <p>Ne všechny staré dveře stojí za záchranu, ale ty z masivního dřeva nebo kvalitní dýhy si renovaci téměř vždy zaslouží. Dřevo používané v meziválečných a poválečných bytech bylo často hutnější a odolnější než materiály v levných dveřích dnes.</p>
              <h3>Jak posoudit kvalitu dřeva</h3>
              <p>Zkontroluj, zda dveře nejsou napadené dřevokazným hmyzem nebo hnilobou – poklepem zjistíš dutá místa, která zní jinak než zdravé dřevo. Pokud je dřevo na pohled celistvé a po poklepu zní plně, je to dobrý základ pro renovaci.</p>
              <h3>Stav rámu a zárubně</h3>
              <p>Dveře musí být rovné a nezborcené, jinak by ani perfektní renovace povrchu nezajistila správné dovírání. Mírné prověšení lze často vyřešit úpravou pantů, výrazné zborcení křídla už signalizuje, že oprava nebude jednoduchá.</p>
              <h3>Kdy je lepší výměna</h3>
              <p>U levných dutých dveří z aglomerátu, kde je poškozený jen povrchový dýhový plát, bývá oprava nákladnější a méně trvalá než koupě nových dveří. Stejně tak silně shnilé dřevo v dolní části křídla, kde dlouhodobě stála voda, se obvykle nevyplatí zachraňovat.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud váháš, zkus renovaci na méně viditelných dveřích, třeba do komory nebo spíže. Získáš zkušenost s postupem a teprve pak se pustíš do hlavních vstupních nebo pokojových dveří.</div>
            </section>

            <section id="demontaz">
              <h2>Demontáž kování a dveří</h2>
              <p>Než začneš s úpravou povrchu, je potřeba dveře úplně rozebrat – práce na zavěšených dveřích je nepohodlná a navíc riskuješ poškození podlahy nebo zárubně.</p>
              <h3>Sundání kliky a zámku</h3>
              <p>Odšroubuj kliku, štítky a vyjmi zámek včetně všech šroubů. Drobné součástky si vždy ulož do jednoho sáčku nebo krabičky, abys je při zpětné montáži nehledal po celé dílně.</p>
              <h3>Vysazení dveří z pantů</h3>
              <p>Dveře sejmi z pantů – u starších typů to znamená vyšroubování celého pantu, u novějších čepových pantů často stačí dveře nadzvednout a vysunout z čepu. Při manipulaci s těžkým masivním křídlem je vhodná druhá osoba, aby se dveře nepoškodily ani neporanily.</p>
              <h3>Vhodné místo pro práci</h3>
              <p>Renovaci prováděj v dobře větraném prostoru, ideálně v garáži nebo na zahradě, protože broušení a chemické odstraňovače produkují prach a výpary. Dveře polož na dva stojany nebo kozy, aby byly v pracovní výšce a stabilní.</p>
            </section>

            <section id="odstraneni">
              <h2>Odstranění staré barvy a laku</h2>
              <p>Staré vrstvy nátěru bývají nejčastěji popraskané, zažloutlé nebo se odlupují, a právě proto je potřeba je před novým nátěrem odstranit.</p>
              <h3>Chemický odstraňovač</h3>
              <p>Gelový nebo pastovitý odstraňovač nanes v silnější vrstvě, ponech působit podle návodu výrobce a starou barvu poté seškrabej špachtlí. Tato metoda je vhodná pro tvarované a profilované plochy, kde se brusný papír těžko dostane do všech detailů.</p>
              <h3>Horkovzdušná pistole</h3>
              <p>Teplý vzduch starý nátěr změkčí a barvu jde seškrábnout ve větších kusech. Tato metoda je rychlejší než chemický odstraňovač, ale vyžaduje opatrnost – příliš vysoká teplota nebo dlouhé působení na jednom místě může dřevo lokálně připálit.</p>
              <h3>Bezpečnost při práci se starými nátěry</h3>
              <p>Pokud jsou dveře starší několika desítek let, stará barva může obsahovat olovo. Při broušení i odstraňování proto vždy používej respirátor a práci prováděj venku nebo v dobře větraném prostoru.</p>
            </section>

            <section id="brouseni">
              <h2>Broušení a tmelení poškození</h2>
              <p>Po odstranění staré barvy je povrch nerovný a potřebuje důkladné přebroušení, aby nový nátěr dobře držel a vypadal hladce.</p>
              <h3>Postup broušení</h3>
              <ul>
                <li><strong>Hrubý brusný papír (60–80)</strong> – odstraní zbytky staré barvy a vyrovná hrubší nerovnosti</li>
                <li><strong>Střední zrnitost (120–150)</strong> – vyhladí povrch a odstraní rýhy po hrubém broušení</li>
                <li><strong>Jemný brusný papír (220 a vyšší)</strong> – dodá povrchu hladkost potřebnou pro kvalitní nátěr</li>
              </ul>
              <h3>Tmelení děr a prasklin</h3>
              <p>Menší díry po starém kování nebo praskliny ve dřevě vyplň dřevěným tmelem v odstínu blízkém dřevu. Po úplném zaschnutí tmel přebrus do roviny s okolním povrchem, jinak bude místo viditelné i pod novým nátěrem.</p>
              <h3>Větší poškození a vypadané kusy</h3>
              <p>U větších defektů, jako jsou vypadané kusy dřeva nebo hluboké praskliny po sesazení, použij dvoukomponentní epoxidový tmel na dřevo. Je pevnější než klasický akrylový tmel a dobře snáší i mechanické zatížení v oblasti kliky a zámku.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Mezi jednotlivými zrnitostmi brusného papíru otři povrch vlhkým hadříkem – odstraníš prach, který by se jinak zarýval do dřeva při dalším broušení.</div>
            </section>

            <section id="nater">
              <h2>Nový nátěr nebo lak</h2>
              <p>Volba povrchové úpravy závisí na stavu a vzhledu dřeva po vybroušení – rozhodnutí mezi lakem a krycí barvou ovlivní konečný vzhled dveří úplně.</p>
              <h3>Lak nebo olej pro zachování kresby</h3>
              <p>Pokud má dřevo hezkou strukturu a po vybroušení vypadá rovnoměrně, lak nebo olej kresbu zvýrazní a ponechá přirozený charakter materiálu. Naneste alespoň dvě až tři vrstvy s mezibroušením jemným papírem mezi jednotlivými vrstvami.</p>
              <h3>Krycí barva pro nerovnoměrné dřevo</h3>
              <p>Tam, kde je dřevo tmelené na více místech nebo má nerovnoměrný odstín, je krycí barva praktičtější volbou – skryje drobné nedokonalosti, které by lak naopak zviditelnil. Před barvou je vhodné použít penetrační nátěr pro lepší přilnavost.</p>
              <h3>Počet vrstev a sušení</h3>
              <p>Dodržuj dobu sušení mezi vrstvami podle návodu výrobce – uspěchaný nátěr se snadno poškodí už při zpětné montáži. Poslední vrstvu nechej zatvrdnout minimálně 24 hodin, než s dveřmi začneš znovu manipulovat.</p>
            </section>

            <section id="kovani">
              <h2>Panty, zámek a sklo</h2>
              <p>Vzhled dveří je jen polovina úspěchu – funkční kování je stejně důležité pro to, aby dveře po renovaci sloužily bez problémů dalších několik desítek let.</p>
              <h3>Oprava nebo výměna pantů</h3>
              <p>Funkční panty bez koroze stačí vyčistit, promazat a dotáhnout uvolněné šrouby. Pokud panty vrzí, jsou opotřebené nebo dveře kvůli nim nedovírají správně, výměna za nové kvalitní panty problém vyřeší trvale a stojí jen pár stovek korun.</p>
              <h3>Zámek a kování</h3>
              <p>Starý zámek lze často repasovat – vyčistit mechanismus, promazat a vyměnit jen opotřebené součástky. Pokud zámek neodpovídá současným bezpečnostním standardům, vyplatí se nahradit ho novým, který bude pasovat do původního výřezu ve dveřích.</p>
              <h3>Skleněné výplně</h3>
              <p>Prasklé nebo chybějící sklo nahraď novým ve stejné tloušťce, případně bezpečnostním sklem pro vyšší odolnost u vstupních dveří. Originální vzorovaná nebo barevná skla je možné nechat vyrobit na zakázku u specializovaného skláře, což zachová autentický vzhled dveří.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jak poznám, že se staré dveře vyplatí renovovat?", a: "Pokud jsou dveře z masivního dřeva nebo kvalitní dýhy, mají rovný a nezborcený rám a dřevo není napadené hnilobou ani dřevokazným hmyzem, renovace se téměř vždy vyplatí. Naopak u levných dutých dveří z aglomerátu nebo silně poškozeného dřeva je výměna rychlejší i levnější." },
                  { q: "Musím starou barvu úplně odstranit, nebo stačí přebrousit?", a: "Pokud je stará vrstva barvy nebo laku popraskaná, odlupující se nebo je jich na sobě víc, je lepší ji odstranit celou pomocí odstraňovače nebo horkovzdušné pistole. Tenkou a dobře přilnavou vrstvu lze jen přebrousit a na ní udělat nový nátěr." },
                  { q: "Jak opravím díry a praskliny ve dřevě?", a: "Menší díry a praskliny vyplň dřevěným tmelem v odstínu blízkém dřevu, po zaschnutí přebrus do roviny s okolím. U větších poškození nebo vypadaných kusů dřeva se používá epoxidový tmel na dřevo, který je pevnější a lépe odolává mechanickému zatížení." },
                  { q: "Mám použít lak, nebo krycí barvu na renovované dveře?", a: "Pokud má dřevo hezkou kresbu a je v dobrém stavu, lak nebo olej kresbu zvýrazní a zachová přirozený vzhled. Krycí barva je lepší volbou tam, kde je dřevo poškozené, tmelené na více místech nebo má nerovnoměrný odstín, který by lak naopak zviditelnil." },
                  { q: "Vyplatí se měnit panty u starých dveří?", a: "Pokud panty vrzí, jsou zkorodované nebo dveře nedovírají kvůli prověšení, výměna za nové kvalitní panty vyřeší problém trvale. Funkční panty bez koroze stačí jen vyčistit, promazat a případně dotáhnout uvolněné šrouby." },
                  { q: "Co dělat se starým skleněným výplněm ve dveřích?", a: "Pokud je sklo prasklé nebo chybí, lze ho nahradit novým sklem stejné tloušťky, případně bezpečnostním sklem pro vyšší odolnost. Originální vzorované nebo barevné sklo je často možné nechat vyrobit na zakázku u specializovaného skláře." },
                ].map(({ q, a }) => (
                  <details key={q} className="faq-item">
                    <summary className="faq-summary">{q}<span className="faq-icon">▾</span></summary>
                    <div className="faq-body">{a}</div>
                  </details>
                ))}
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/renovace-starych-drevenych-dveri" title="Jak renovovat staré dřevěné dveře, než je vyhodíte" />

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
                <li><a href="#hodnoceni">Kdy se renovace vyplatí</a></li>
                <li><a href="#demontaz">Demontáž kování</a></li>
                <li><a href="#odstraneni">Odstranění nátěru</a></li>
                <li><a href="#brouseni">Broušení a tmelení</a></li>
                <li><a href="#nater">Nový nátěr a lak</a></li>
                <li><a href="#kovani">Panty, zámek a sklo</a></li>
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
