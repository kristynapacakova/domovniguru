import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak natřít plastová okna a parapety",
  description: "Lze natírat plastová okna a parapety? Příprava povrchu, vhodné barvy na PVC, postup nátěru i časté chyby, kterým se vyhnout.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/natrit-plastova-okna-a-parapety" },
  openGraph: {
    title: "Jak natřít plastová okna a parapety",
    description: "Lze natírat plastová okna a parapety? Příprava povrchu, vhodné barvy na PVC, postup nátěru i časté chyby, kterým se vyhnout.",
    url: "https://www.domovniguru.cz/blog/natrit-plastova-okna-a-parapety",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "article",
    publishedTime: "2026-06-25T08:00:00Z",
    modifiedTime: "2026-06-25T08:00:00Z",
    authors: ["DomovniGuru"],
    images: [{ url: "/api/og?title=Jak%20nat%C5%99%C3%ADt%20plastov%C3%A1%20okna%20a%20parapety&cat=blog", width: 1200, height: 630, alt: "Jak natřít plastová okna a parapety" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jak natřít plastová okna a parapety",
    description: "Lze natírat plastová okna a parapety? Příprava povrchu, vhodné barvy na PVC, postup nátěru i časté chyby.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.domovniguru.cz/blog/natrit-plastova-okna-a-parapety#article",
      "headline": "Jak natřít plastová okna a parapety",
      "description": "Lze natírat plastová okna a parapety? Příprava povrchu, vhodné barvy na PVC, postup nátěru i časté chyby, kterým se vyhnout.",
      "datePublished": "2026-06-25T08:00:00Z",
      "dateModified": "2026-06-25T08:00:00Z",
      "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.domovniguru.cz/blog/natrit-plastova-okna-a-parapety" },
      "inLanguage": "cs",
      "keywords": ["natřít plastová okna", "barva na plastové parapety", "nátěr PVC oken", "jak natřít zažloutlý plast", "barva na plast"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.domovniguru.cz/blog/natrit-plastova-okna-a-parapety#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" },
        { "@type": "ListItem", "position": 3, "name": "Malování & barvy", "item": "https://www.domovniguru.cz/blog/kategorie/malovani" },
        { "@type": "ListItem", "position": 4, "name": "Jak natřít plastová okna a parapety", "item": "https://www.domovniguru.cz/blog/natrit-plastova-okna-a-parapety" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.domovniguru.cz/blog/natrit-plastova-okna-a-parapety#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Dá se natřít jakýkoliv plastový rám nebo parapet?", "acceptedAnswer": { "@type": "Answer", "text": "Většinu PVC oken a parapetů natřít lze, pokud je plast pevný a bez velkých deformací. Nevyplatí se to ale u silně zkřehlého nebo popraskaného plastu – tam nátěr praskliny nezakryje a brzy se na nich znovu objeví." } },
        { "@type": "Question", "name": "Jakou barvu použít na plastové okno?", "acceptedAnswer": { "@type": "Answer", "text": "Potřebuješ speciální barvu určenou přímo na plasty nebo PVC, případně dvousložkovou polyuretanovou barvu pro exteriér. Běžná akrylátová barva na zeď nebo klasický email na plastu dlouhodobě nedrží a odlupuje se." } },
        { "@type": "Question", "name": "Musím plast před natíráním brousit?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, jemné zdrsnění brusným papírem o zrnitosti 280–400 je nutné, aby se barva měla čeho zachytit. Hladký plast bez přebroušení barva časem odlupuje, i když je samotná barva kvalitní." } },
        { "@type": "Question", "name": "Kolik vrstev barvy na plast potřebuji?", "acceptedAnswer": { "@type": "Answer", "text": "Obvykle stačí dvě tenké vrstvy. První vrstva (často i speciální základ na plasty) zajistí přilnavost, druhá dá barvě plnou krycí schopnost a barevný odstín. Silná jedna vrstva se nedoporučuje, protože hůře zasychá a snadno se poškrábe." } },
        { "@type": "Question", "name": "Jak dlouho vydrží nátěr na plastovém okně?", "acceptedAnswer": { "@type": "Answer", "text": "Při správné přípravě a kvalitní barvě na PVC vydrží nátěr na venkovním okně přibližně 5–8 let, na parapetu v interiéru i déle. Životnost zkracuje přímé sluneční záření, mechanické otírání a nedostatečné odmaštění před nátěrem." } },
        { "@type": "Question", "name": "Proč se barva na plastu odlupuje?", "acceptedAnswer": { "@type": "Answer", "text": "Nejčastější příčinou je špatná příprava povrchu – plast nebyl odmaštěný nebo přebroušený, případně byla použita barva, která nemá deklarovanou přilnavost na PVC. Plast se navíc teplotně roztahuje a smršťuje víc než dřevo nebo kov, takže potřebuje pružnou barvu." } },
      ],
    },
  ],
};

const RELATED = [
  { title: "Jak natřít dřevěná okna a okenice", href: "/blog/natrit-drevena-okna-a-okenice", read: "5 min" },
  { title: "Jak vybrat štětce a válečky pro různé typy nátěrů", href: "/blog/vyber-stetcu-a-valecku", read: "5 min" },
  { title: "Barvy bez VOC – jak vybrat zdravou barvu do interiéru", href: "/blog/barvy-s-nizkym-obsahem-voc", read: "7 min" },
  { title: "Jak odstranit skvrny a otisky ze zdi bez přemalování celé stěny", href: "/blog/odstranit-skvrny-ze-zdi", read: "5 min" },
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
              <span>Jak natřít plastová okna a parapety</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování & barvy</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak natřít plastová okna a parapety</h1>
              <p className="article-lead">Zažloutlý nebo poškrábaný plastový rám okna nemusí znamenat výměnu za nová okna. Při správné přípravě a vhodné barvě na PVC se dá plast natřít a vrátit mu skoro nový vzhled – pojďme si projít celý postup od příprav až po dlouhodobou údržbu.</p>
              <div className="article-meta-row"><span>Aktualizováno: 25. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#lze-natrit">Lze plastová okna a parapety vůbec natírat?</a></li>
                <li><a href="#kdy-to-dava-smysl">Kdy natírání dává smysl</a></li>
                <li><a href="#priprava">Příprava povrchu</a></li>
                <li><a href="#vyber-barvy">Vhodné barvy na plast a PVC</a></li>
                <li><a href="#postup">Postup nátěru krok za krokem</a></li>
                <li><a href="#vrstvy-sušení">Počet vrstev a sušení</a></li>
                <li><a href="#udrzba">Údržba natřeného plastu</a></li>
                <li><a href="#chyby">Časté chyby</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="lze-natrit">
              <h2>Lze plastová okna a parapety vůbec natírat?</h2>
              <p>Ano, plastová (PVC) okenní rámy i parapety se dají natřít, pokud je k tomu plast v dostatečně dobrém stavu a použiješ vhodnou barvu. Plast je ale jiný materiál než dřevo nebo kov – je hladký, prakticky nesavý a teplotně se výrazně roztahuje a smršťuje. Běžná barva na zeď nebo klasický syntetický email se na něm bez správné přípravy a vhodného složení neudrží a brzy popraská nebo se odloupne.</p>
              <p>Existují speciální barvy přímo deklarované pro nátěr plastů a PVC – ty jsou navržené tak, aby zůstaly pružné i při teplotních výkyvech a dobře přilnuly i na hladký povrch. Bez nich je výsledek nátěru jen otázkou času, než se barva začne loupat ve velkých plochách.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud si nejsi jistý, z jakého plastu je tvůj rám, zkus na nenápadném místě (např. na spodní straně parapetu) menší testovací plochu. Po pár dnech zkontroluj přilnavost přelepením a odlepením kousku lepicí pásky.</div>
            </section>

            <section id="kdy-to-dava-smysl">
              <h2>Kdy natírání dává smysl</h2>
              <p>Natírání plastových oken a parapetů se vyplatí především v těchto situacích:</p>
              <ul>
                <li><strong>Zažloutlý plast</strong> – bílé plastové rámy postupně žloutnou vlivem UV záření, zejména na jižní straně domu. Nátěr je výrazně levnější řešení než výměna oken.</li>
                <li><strong>Poškrábaný povrch</strong> – drobné škrábance od úklidu, domácích zvířat nebo nešetrného zacházení jsou po nátěru téměř neviditelné.</li>
                <li><strong>Změna barvy</strong> – chceš sladit okna s novou fasádou nebo interiérem a nechceš investovat do nových rámů.</li>
                <li><strong>Drobné mechanické poškození</strong> – menší praskliny v laku nebo povrchové vrstvě, které ještě nezasahují do nosné konstrukce rámu.</li>
              </ul>
              <p>Naopak natírání nemá smysl, pokud je plast zkřehlý, viditelně deformovaný teplem, nebo má hluboké trhliny zasahující do struktury materiálu – v takovém případě nátěr problém jen krátkodobě zamaskuje a praskliny se časem propíšou i přes novou barvu.</p>
            </section>

            <section id="priprava">
              <h2>Příprava povrchu</h2>
              <p>Příprava je u nátěru plastu ještě důležitější než u dřeva nebo zdiva – plast je málo savý a barva se na něm musí mechanicky a chemicky "zachytit". Bez pečlivé přípravy se i ta nejlepší barva na PVC dříve nebo později odloupe.</p>
              <h3>1. Důkladné odmaštění</h3>
              <p>Nejdřív povrch umyj vodou se saponátem a odstraň prach, mastnotu a zbytky silikonu. Poté použij odmašťovač (technický benzín, izopropylalkohol nebo speciální odmašťovač na plasty) a celý povrch znovu otři čistým hadříkem. Mastnota je nejčastější příčinou, proč nová barva nedrží – i otisky prstů mohou stačit k tomu, aby se barva v daném místě časem odloupla.</p>
              <h3>2. Broušení jemným brusným papírem</h3>
              <p>Celý povrch lehce přebrus brusným papírem o zrnitosti přibližně <strong>280–400</strong>. Cílem není plast výrazně zdrsnit, ale jen narušit jeho hladký, lesklý povrch tak, aby se na něm barva mohla mechanicky zachytit. Po broušení povrch znovu otři vlhkým hadrem a necháme oschnout, ideálně ho ještě jednou přejdi odmašťovačem.</p>
              <h3>3. Zakrytí okolí a skel</h3>
              <p>Malířskou páskou přelep skla, gumové těsnění a kování (kliky, panty). Kvalitní páska pro venkovní použití odolá i slunci, aniž by za sebou zanechala lepivé zbytky. Více o správném použití pásky najdeš v článku o <Link href="/blog/malirska-paska-jak-spravne-pouzivat" style={{ color: "#2a6496", textDecoration: "underline" }}>malířské pásce</Link>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud je na rámu silikonový tmel kolem skla, nepřebrušuj ho – jen ho pečlivě zalep páskou. Broušení by silikon mohlo narušit a zhoršit jeho těsnící funkci.</div>
            </section>

            <section id="vyber-barvy">
              <h2>Vhodné barvy na plast a PVC</h2>
              <p>Výběr správné barvy je klíčový krok – ne každá barva, která vypadá vhodně, na plastu skutečně dlouhodobě vydrží.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ barvy</th><th>Vhodnost na PVC</th><th>Použití</th></tr></thead>
                  <tbody>
                    <tr><td>Speciální barva na plasty/PVC</td><td>✅ Nejlepší volba</td><td>Okna, parapety, plastové dveře, zahradní nábytek</td></tr>
                    <tr><td>Akrylátová barva s přídavkem adhezního základu</td><td>✅ Dobrá, s přípravkem</td><td>Interiérové parapety, méně exponovaná místa</td></tr>
                    <tr><td>Dvousložková polyuretanová barva</td><td>✅ Velmi odolná, ale náročnější na nanesení</td><td>Venkovní okna ve velké zátěži (jih, mořské klima)</td></tr>
                    <tr><td>Klasický syntetický email</td><td>❌ Nevhodný bez úpravy</td><td>Špatná přilnavost, praskání, neodolá UV ani teplotě</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Speciální barvy na plast obsahují měkčidla a pojiva, díky kterým zůstávají pružné i při roztahování a smršťování materiálu vlivem teploty. Hledej na obale označení "na plast", "na PVC" nebo "pro syntetické materiály". U barev pro exteriér je dobré zvolit i odolnost vůči UV záření, jinak časem znovu zažloutne nebo ztratí barevný odstín.</p>
              <h3>Lesk, nebo mat?</h3>
              <p>Saténový nebo polomatný odstín je pro okna a parapety nejpraktičtější – dobře kryje drobné nedokonalosti povrchu a zároveň je odolný vůči otěru a snadno se čistí. Vysoký lesk zvýrazňuje nerovnosti po broušení, úplný mat se naopak rychleji ušpiní a hůř čistí.</p>
            </section>

            <section id="postup">
              <h2>Postup nátěru krok za krokem</h2>
              <h3>1. Základní nátěr (pokud výrobce doporučuje)</h3>
              <p>Některé systémy barev na plast vyžadují speciální adhezní základ (primer), který se nanáší jako první tenká vrstva před samotnou barvou. Pokud ho barva vyžaduje, nevynechávej ho – výrazně zlepšuje přilnavost na hladkém plastu.</p>
              <h3>2. Nanesení barvy štětcem nebo malou pěnovou stěrkou</h3>
              <p>Na rovné plochy parapetů se dobře hodí malý plastový nebo pěnový váleček, do rohů a profilů rámu spíš menší štětec se syntetickým vlasem (syntetika lépe snáší rozpouštědlové i akrylátové barvy na bázi PVC). Nanášej tenkou, rovnoměrnou vrstvu – silná vrstva barvy na plastu déle schne a snadněji vytváří kapky nebo neprodyšný film, který se časem praská.</p>
              <h3>3. Tahy ve směru profilu</h3>
              <p>U okenních rámů veď tahy štětce podél délky profilu, ne napříč – výsledek je hladší a méně viditelné jsou případné drobné nerovnosti nátěru.</p>
              <h3>4. Kontrola rohů a spojů</h3>
              <p>V rozích rámů a u spojů křídel se barva často hromadí do kapek. Po nanesení vrstvy tato místa ještě jednou přejdi suchým štětcem, aby se přebytečná barva rozetřela.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Maluj za bezvětrného dne s mírnou teplotou (ideálně 15–25 °C) a ne na přímém slunci – barva by na horkém plastu zasychala nerovnoměrně rychle a mohla by se tvořit bublinky.</div>
            </section>

            <section id="vrstvy-sušení">
              <h2>Počet vrstev a sušení</h2>
              <p>U barev na plast obvykle stačí <strong>dvě tenké vrstvy</strong>. První vrstva zajistí přilnavost a základní krytí, druhá dodá plnou barevnost a rovnoměrný odstín. Mezi vrstvami dodržuj dobu schnutí udávanou výrobcem – obvykle 2–6 hodin podle typu barvy a teploty v místnosti nebo venku.</p>
              <ul>
                <li><strong>Schnutí na dotek</strong> – typicky 1–3 hodiny</li>
                <li><strong>Možnost druhé vrstvy</strong> – obvykle po 4–6 hodinách</li>
                <li><strong>Plné vytvrzení a odolnost vůči otěru</strong> – 5–7 dní, u dvousložkových barev i déle</li>
              </ul>
              <p>Po dobu vytvrzování se vyhni mytí nebo otírání natřeného povrchu a otevírání oken, pokud nátěr zasahuje i na pohyblivé části (např. spoj rámu a křídla) – čerstvá barva by se mohla otřít nebo slepit.</p>
            </section>

            <section id="udrzba">
              <h2>Údržba natřeného plastu</h2>
              <p>Natřený plast vydrží dlouho, pokud se o něj správně staráš:</p>
              <ul>
                <li><strong>Čištění</strong> – jemný hadřík s vodou a saponátem, vyhni se abrazivním houbičkám a agresivním rozpouštědlům</li>
                <li><strong>Kontrola každý rok</strong> – zvlášť na jižní straně domu zkontroluj, jestli se nezačíná odlupovat nebo ztrácet barva</li>
                <li><strong>Drobné retuše</strong> – malé škrábance lze přemalovat zbytkem barvy bez nutnosti celý povrch obnovovat</li>
                <li><strong>Vyhýbej se ostrým předmětům</strong> – škrabky a nože při čištění oken mohou snadno proříznout i kvalitní nátěr</li>
              </ul>
              <p>Pokud řešíš i venkovní dřevěné prvky kolem oken, mrkni na článek, jak <Link href="/blog/natrit-drevena-okna-a-okenice" style={{ color: "#2a6496", textDecoration: "underline" }}>natřít dřevěná okna a okenice</Link> – princip přípravy je podobný, jen materiál a barvy se liší.</p>
            </section>

            <section id="chyby">
              <h2>Časté chyby</h2>
              <h3>Vynechání odmaštění</h3>
              <p>Nejčastější chyba. I zdánlivě čistý plast má na povrchu mastný film z výroby nebo z čisticích prostředků na okna. Bez odmaštění barva nedrží, i když je jinak kvalitní a správně nanesená.</p>
              <h3>Použití nevhodné barvy</h3>
              <p>Barva, která není deklarovaná pro plasty, se může zdánlivě dobře nanést, ale po pár týdnech či měsících se začne odlupovat ve velkých kusech, protože nedokáže snášet roztahování a smršťování PVC.</p>
              <h3>Příliš silná vrstva</h3>
              <p>Snaha "to mít hotové na jednou" silnou vrstvou barvy vede k pomalému a nerovnoměrnému zasychání, vzniku kapek a praskání povrchu při zatížení.</p>
              <h3>Natírání za nevhodného počasí</h3>
              <p>Malování na přímém slunci, za velkého vedra nebo vysoké vlhkosti zhoršuje přilnavost i vzhled výsledného nátěru.</p>
              <h3>Ignorování pohyblivých částí</h3>
              <p>Pokud natíráš i okenní křídlo, nezapomeň, že se musí po zaschnutí stále volně otevírat – přemalovaný spoj rámu a křídla může po zaschnutí "slepit" pohyblivé části k sobě.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Dá se natřít jakýkoliv plastový rám nebo parapet?", a: "Většinu PVC oken a parapetů natřít lze, pokud je plast pevný a bez velkých deformací. Nevyplatí se to ale u silně zkřehlého nebo popraskaného plastu – tam nátěr praskliny nezakryje a brzy se na nich znovu objeví." },
                  { q: "Jakou barvu použít na plastové okno?", a: "Potřebuješ speciální barvu určenou přímo na plasty nebo PVC, případně dvousložkovou polyuretanovou barvu pro exteriér. Běžná akrylátová barva na zeď nebo klasický email na plastu dlouhodobě nedrží a odlupuje se." },
                  { q: "Musím plast před natíráním brousit?", a: "Ano, jemné zdrsnění brusným papírem o zrnitosti 280–400 je nutné, aby se barva měla čeho zachytit. Hladký plast bez přebroušení barva časem odlupuje, i když je samotná barva kvalitní." },
                  { q: "Kolik vrstev barvy na plast potřebuji?", a: "Obvykle stačí dvě tenké vrstvy. První vrstva (často i speciální základ na plasty) zajistí přilnavost, druhá dá barvě plnou krycí schopnost a barevný odstín. Silná jedna vrstva se nedoporučuje, protože hůře zasychá a snadno se poškrábe." },
                  { q: "Jak dlouho vydrží nátěr na plastovém okně?", a: "Při správné přípravě a kvalitní barvě na PVC vydrží nátěr na venkovním okně přibližně 5–8 let, na parapetu v interiéru i déle. Životnost zkracuje přímé sluneční záření, mechanické otírání a nedostatečné odmaštění před nátěrem." },
                  { q: "Proč se barva na plastu odlupuje?", a: "Nejčastější příčinou je špatná příprava povrchu – plast nebyl odmaštěný nebo přebroušený, případně byla použita barva, která nemá deklarovanou přilnavost na PVC. Plast se navíc teplotně roztahuje a smršťuje víc než dřevo nebo kov, takže potřebuje pružnou barvu." },
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
                <li><a href="#lze-natrit">Lze plast natírat?</a></li>
                <li><a href="#kdy-to-dava-smysl">Kdy to dává smysl</a></li>
                <li><a href="#priprava">Příprava povrchu</a></li>
                <li><a href="#vyber-barvy">Výběr barvy</a></li>
                <li><a href="#postup">Postup nátěru</a></li>
                <li><a href="#vrstvy-sušení">Vrstvy a sušení</a></li>
                <li><a href="#udrzba">Údržba</a></li>
                <li><a href="#chyby">Časté chyby</a></li>
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
