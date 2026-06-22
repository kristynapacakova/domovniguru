import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak vybrat a nainstalovat domovní zvonek nebo videotelefon",
  description: "Drátový vs. bezdrátový zvonek, klasický vypínač nebo videotelefon s kamerou – přehled, výběr a instalace.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/vyber-domovniho-zvonku-a-videotelefonu" },
  openGraph: { title: "Jak vybrat a nainstalovat domovní zvonek nebo videotelefon", description: "Drátový vs. bezdrátový zvonek, klasický vypínač nebo videotelefon s kamerou – přehled, výběr a instalace.", url: "https://www.domovniguru.cz/blog/vyber-domovniho-zvonku-a-videotelefonu", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-12T08:00:00Z", modifiedTime: "2026-06-12T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20vybrat%20a%20nainstalovat%20domovn%C3%AD%20zvonek%20nebo%20videotelefon&cat=blog", width: 1200, height: 630, alt: "Jak vybrat a nainstalovat domovní zvonek nebo videotelefon" }] },
  twitter: { card: "summary_large_image", title: "Jak vybrat a nainstalovat domovní zvonek nebo videotelefon", description: "Drátový vs. bezdrátový zvonek, klasický vypínač nebo videotelefon s kamerou – přehled, výběr a instalace." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/vyber-domovniho-zvonku-a-videotelefonu#article", "headline": "Jak vybrat a nainstalovat domovní zvonek nebo videotelefon", "datePublished": "2026-06-12T08:00:00Z", "dateModified": "2026-06-12T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["domovní zvonek", "bezdrátový zvonek", "videotelefon", "videozvonek", "chytrá domácnost"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Elektrika & osvětlení", "item": "https://www.domovniguru.cz/blog/kategorie/elektrika" }, { "@type": "ListItem", "position": 4, "name": "Výběr domovního zvonku a videotelefonu", "item": "https://www.domovniguru.cz/blog/vyber-domovniho-zvonku-a-videotelefonu" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jaký je rozdíl mezi drátovým a bezdrátovým zvonkem?", "acceptedAnswer": { "@type": "Answer", "text": "Drátový zvonek je napojený na transformátor a kabelové vedení k tlačítku i zvoniči, je trvale spolehlivý a nepotřebuje baterie. Bezdrátový zvonek komunikuje rádiovým signálem mezi tlačítkem na baterii a zvoničem zapojeným do zásuvky – instalace je rychlejší, ale baterie je třeba čas od času vyměnit." } }, { "@type": "Question", "name": "Vyplatí se videotelefon do běžného rodinného domu?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, pokud chcete vidět a slyšet návštěvu ještě před otevřením dveří, případně řešit doručení balíků, když nejste doma. U domu s plotem nebo brankou dál od vchodu je videozvonek navíc užitečný jako náhrada domácího telefonu k bráně." } }, { "@type": "Question", "name": "Potřebuji k chytrému videozvonku elektrikáře?", "acceptedAnswer": { "@type": "Answer", "text": "U bateriového videozvonku elektrikáře nepotřebujete – stačí připevnit konzoli a propojit zařízení s Wi-Fi. Pokud chcete videozvonek napojit na stávající zvonkové vedení nebo používat PoE napájení, je vhodné nechat zapojení zkontrolovat elektrikářem, zejména v bytovém domě." } }, { "@type": "Question", "name": "Funguje videozvonek i při výpadku internetu?", "acceptedAnswer": { "@type": "Answer", "text": "Samotné zazvonění a propojení s vnitřním zvoničem funguje obvykle i bez internetu, protože jde o lokální signál. Notifikace do mobilu, živý obraz z kamery a záznamy ale vyžadují připojení k Wi-Fi a internetu – bez něj fungují jen jako základní zvonek." } }, { "@type": "Question", "name": "Jak vybrat zvonek do bytu v bytovém domě?", "acceptedAnswer": { "@type": "Answer", "text": "V bytovém domě je potřeba respektovat společné domovní vedení a vrátníka/interkom u vchodu – samostatný videozvonek na dveře bytu lze doplnit jako bateriové zařízení bez zásahu do společných rozvodů. U klasického zvonku na dveřích bytu stačí jednoduchý bezdrátový set." } }] }] };

const RELATED = [
  { title: "Jak funguje chytrá domácnost – začínáme", href: "/blog/chytra-domacnost-zaciname", read: "6 min" },
  { title: "Jak nainstalovat pohybový senzor – PIR detektor krok za krokem", href: "/blog/instalovat-pohybovy-senzor", read: "5 min" },
  { title: "Jak vyměnit vypínač – krok za krokem bez elektrikáře", href: "/blog/jak-vymenit-vypinac", read: "4 min" },
  { title: "Jak snížit účet za elektřinu doma", href: "/blog/snizit-ucet-za-elektrinu", read: "5 min" },
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
              <Link href="/blog/kategorie/elektrika">Elektrika & osvětlení</Link><span className="breadcrumb-sep">/</span>
              <span>Výběr domovního zvonku a videotelefonu</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">💡 Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak vybrat a nainstalovat domovní zvonek nebo videotelefon</h1>
              <p className="article-lead">Starý zvonek dosloužil, nebo si chcete u dveří udělat trochu pořádek? Vyberte si mezi drátovým zvonkem, bezdrátovým setem na baterie a chytrým videozvonkem s kamerou – a podle toho i instalaci zvládnete sami, nebo si přizvete elektrikáře.</p>
              <div className="article-meta-row"><span>Aktualizováno: 12. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#typy">Typy domovních zvonků a videotelefonů</a></li>
                <li><a href="#kdy-co">Kdy stačí bezdrátový zvonek a kdy se vyplatí videotelefon</a></li>
                <li><a href="#dratovy">Instalace klasického drátového zvonku</a></li>
                <li><a href="#bezdratovy">Instalace bezdrátového zvonku bez zásahu do elektroinstalace</a></li>
                <li><a href="#videozvonek">Chytré videozvonky – napájení, aplikace a chytrá domácnost</a></li>
                <li><a href="#vyber">Výběr podle typu nemovitosti</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="typy">
              <h2>Typy domovních zvonků a videotelefonů</h2>
              <p>Než začnete cokoliv kupovat, je dobré vědět, co se vlastně nabízí. Na trhu jsou v zásadě tři základní kategorie a každá má jiné nároky na instalaci i jiný rozpočet.</p>
              <h3>Drátový zvonek s transformátorem</h3>
              <p>Klasika, kterou znáte z většiny starších domů. Tlačítko u dveří je propojeno kabelem se zvoničem (obvykle umístěným v chodbě nebo v technické místnosti) a malým transformátorem, který sníží napětí z 230 V na bezpečných 8–12 V. Žádné baterie, žádné dobíjení – zvonek funguje, dokud funguje vedení.</p>
              <h3>Bezdrátový zvonek na baterie</h3>
              <p>Tlačítko obsahuje vysílač a baterii (často knoflíkovou nebo AAA), zvonič se zapojí do běžné zásuvky a signál mezi nimi jde rádiem na frekvenci 433 MHz nebo podobné. Žádné kabely, žádné vrtání do zdi kromě upevnění tlačítka – ideální tam, kde se kabel táhnout nechce nebo nedá.</p>
              <h3>Chytrý videozvonek s wifi</h3>
              <p>Tlačítko v sobě skrývá kameru, mikrofon, reproduktor a wifi modul. Po zazvonění (nebo i při pohybu před dveřmi) přijde notifikace do mobilu, kde vidíte živý obraz a můžete s návštěvou mluvit – ať jste doma, nebo na druhém konci světa. Napájení řeší baterie, propojení na stávající zvonkové vedení nebo PoE kabel.</p>
            </section>

            <section id="kdy-co">
              <h2>Kdy stačí bezdrátový zvonek a kdy se vyplatí videotelefon</h2>
              <p>Volba mezi jednoduchým zvonkem a videotelefonem by se neměla řešit jen podle ceny, ale především podle toho, co od dveří skutečně potřebujete.</p>
              <p><strong>Bezdrátový zvonek na baterie stačí</strong>, pokud:</p>
              <ul>
                <li>dveře jsou v dohledu nebo doslechu z většiny bytu a vidíte z okna, kdo přišel</li>
                <li>chcete jen funkční náhradu rozbitého zvonku za pár stovek korun</li>
                <li>nepotřebujete vědět, kdo zvonil, když nejste doma</li>
                <li>nechcete řešit wifi, aplikace a nabíjení kamery</li>
              </ul>
              <p><strong>Videotelefon (videozvonek) se vyplatí</strong>, pokud:</p>
              <ul>
                <li>vchod není vidět z obytných místností nebo je dům patrový a ke dveřím je to daleko</li>
                <li>často přijímáte balíčky a chcete vědět, že kurýr dorazil, i když nejste doma</li>
                <li>řešíte zabezpečení – záznam návštěv u vchodu má i preventivní efekt</li>
                <li>chcete dveře propojit s dalšími prvky <Link href="/blog/chytra-domacnost-zaciname" style={{ color: "#2a6496", textDecoration: "underline" }}>chytrou domácnost</Link>, třeba s automatickým rozsvícením světla na verandě</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud váháte, zkuste začít levnějším bezdrátovým zvonkem a videozvonek doplnit později – řada modelů se dá namontovat na stejné místo bez větších úprav.</div>
            </section>

            <section id="dratovy">
              <h2>Instalace klasického drátového zvonku</h2>
              <p>Pokud máte starý drátový zvonek a jen vyměňujete tlačítko nebo zvonič, je práce poměrně jednoduchá – nízké napětí ze sekundární strany transformátoru (8–12 V) je bezpečné a nehrozí úraz elektrickým proudem jako u rozvodů 230 V.</p>
              <h3>Co budete potřebovat</h3>
              <ul>
                <li>nové tlačítko zvonku (zkontrolujte, zda odpovídá napětí stávajícího transformátoru)</li>
                <li>zvonič – mechanický (gong) nebo elektronický s reproduktorem</li>
                <li>šroubovák, případně zkoušečku napětí</li>
              </ul>
              <h3>Postup</h3>
              <ol>
                <li>Vypněte jistič, který napájí zvonkový obvod – i nízké napětí je lepší odpojit, než šroubovat naživo.</li>
                <li>Odšroubujte staré tlačítko a zapamatujte si (nebo vyfoťte) zapojení dvou vodičů.</li>
                <li>Připojte vodiče ke svorkám nového tlačítka – u zvonku obvykle nezáleží na polarit, takže nemůžete vodiče zaměnit.</li>
                <li>Přišroubujte tlačítko ke zdi nebo zárubni a zvonič zapojte podle stejného principu.</li>
                <li>Zapněte jistič a zazvoněním ověřte funkčnost.</li>
              </ol>
              <p>Pokud naopak instalujete drátový zvonek úplně nově – tedy táhnete nové vedení od transformátoru přes zeď ke dveřím – jde už o zásah do elektroinstalace. Vedení by mělo být odděleno od silových rozvodů 230 V a transformátor připojen přes vlastní jistič. Pro novou instalaci se vyplatí přizvat elektrikáře, hlavně pokud vedete kabel skrz nosné zdi nebo k vchodu vzdálenému od rozvaděče.</p>
            </section>

            <section id="bezdratovy">
              <h2>Instalace bezdrátového zvonku bez zásahu do elektroinstalace</h2>
              <p>Bezdrátový zvonek je nejrychlejší cestou, jak vyměnit nefunkční nebo zastaralý zvonek bez vrtání kabelových drážek. Celá instalace zabere typicky do 15 minut.</p>
              <h3>Postup</h3>
              <ol>
                <li>Vyberte umístění tlačítka – nejčastěji na zárubeň nebo na zeď vedle dveří, v dosahu páru s vnitřním zvoničem (dosah bývá 100–150 m na volném prostoru, v budově méně).</li>
                <li>Vložte baterie do tlačítka podle návodu.</li>
                <li>Zvonič zapojte do běžné zásuvky 230 V uvnitř bytu nebo domu, na místě, kde ho dobře uslyšíte.</li>
                <li>Spárujte tlačítko se zvoničem – u většiny modelů se to provede stiskem tlačítka po zapojení zvoniče (do cca 30 sekund od zapojení do zásuvky).</li>
                <li>Vyzkoušejte zvonek a případně zvolte melodii a hlasitost na zvoniči.</li>
                <li>Tlačítko připevněte na stěnu pomocí přiložených šroubů nebo oboustranné lepicí pásky.</li>
              </ol>
              <p>Jediné, na co je potřeba dát pozor, je výdrž baterií – u bateriového tlačítka počítejte s výměnou jednou za 1–2 roky, podle toho, jak často zvonek používáte a jaké je počasí (mráz baterie vybíjí rychleji).</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud se vám signál nedostane přes silnější zděné stěny nebo armovaný beton, zkuste zvonič přemístit blíž k tlačítku, případně zvolte model s opakovačem signálu (repeaterem).</div>
            </section>

            <section id="videozvonek">
              <h2>Chytré videozvonky – napájení, aplikace a chytrá domácnost</h2>
              <h3>Napájení</h3>
              <p>Chytré videozvonky řeší napájení třemi způsoby a každý má jiné nároky na instalaci:</p>
              <ul>
                <li><strong>Baterie</strong> – nejjednodušší varianta, žádné kabely. Zařízení se přišroubuje na zeď a po vyčerpání (typicky 1–6 měsíců podle počtu nahrávek) se vyjme a doma dobije. Nevýhodou je nutnost demontáže k dobití.</li>
                <li><strong>Propojení se stávajícím zvonkovým vedením</strong> – pokud máte funkční drátový zvonek s transformátorem 8–24 V, videozvonek se zapojí přímo do tohoto obvodu a je trvale nabitý, baterie slouží jen jako záloha. Obvykle je potřeba zkontrolovat výkon transformátoru – starší transformátory nemusí dát dostatečný proud pro kameru a wifi.</li>
                <li><strong>PoE (Power over Ethernet)</strong> – napájení i datový přenos po jednom síťovém kabelu, typické u profesionálnějších systémů. Vyžaduje přivedení datového kabelu ke dveřím a PoE switch nebo injektor.</li>
              </ul>
              <h3>Propojení s vnitřním zvoničem</h3>
              <p>U videozvonků napojených na stávající zvonkové vedení obvykle zazvoní i původní mechanický zvonič v domě – to je výhoda, pokud chcete zvonění slyšet i bez telefonu po ruce. U bateriových videozvonků zvonění řeší samostatná wifi reprobedna (chime), kterou umístíte kamkoliv do dosahu domácí sítě.</p>
              <h3>Aplikace a vzdálený přístup</h3>
              <p>Veškerá komunikace s videozvonkem jde přes mobilní aplikaci výrobce. Po zazvonění nebo zaznamenání pohybu přijde push notifikace, v aplikaci si pak přehrajete živý obraz, promluvíte přes mikrofon a u většiny modelů i vzdáleně odemknete dveře, pokud je videozvonek propojen s elektrickým zámkem nebo vrátníkem.</p>
              <p>Záznamy z kamery se ukládají buď na cloud výrobce (často s měsíčním předplatným za delší historii), nebo na mikroSD kartu přímo v zařízení – při výběru modelu zkontrolujte, jakou variantu nabízí a jaké jsou s ní spojené další náklady.</p>
              <h3>Propojení s chytrou domácností</h3>
              <p>Videozvonky se dnes běžně integrují do širších systémů <Link href="/blog/chytra-domacnost-zaciname" style={{ color: "#2a6496", textDecoration: "underline" }}>chytré domácnosti</Link> – po zazvonění se může automaticky rozsvítit venkovní světlo, spustit záznam i z dalších kamer, nebo se zobrazit obraz na chytré obrazovce v kuchyni. Pokud máte doma elektrický zámek nebo vrátníkový systém s elektrickým otvíráním, lze videozvonek propojit i s otevíráním dveří na dálku – to bývá nejužitečnější právě u bytových domů nebo domů s brankou.</p>
            </section>

            <section id="vyber">
              <h2>Výběr podle typu nemovitosti</h2>
              <h3>Byt v bytovém domě</h3>
              <p>U bytu na dveřích bytu obvykle stačí jednoduchý bezdrátový zvonek na baterie – instalace je rychlá, nezasahuje do společných rozvodů a nevyžaduje souhlas SVJ. Videozvonek na dveře bytu lze doplnit jako samostatné bateriové zařízení, ideálně takové, které se připevní na dveře oboustrannou páskou bez vrtání, pokud to stanovy domu vyžadují.</p>
              <p>Pokud řešíte hlavní vchod do domu (vrátník/interkom), jde o společnou instalaci celého domu a změny by měly procházet přes SVJ nebo správce domu – to je jiná kategorie než zvonek na dveřích jednotlivého bytu.</p>
              <h3>Rodinný dům</h3>
              <p>U rodinného domu má smysl uvažovat o videozvonku už jen proto, že vchod bývá dál od obytných místností a u branky nebo plotu navíc často chybí jakákoliv signalizace. Pokud má dům funkční drátové zvonkové vedení, je propojení videozvonku na toto vedení nejlevnější a nejspolehlivější varianta z hlediska napájení. Pokud vedení chybí nebo je v havarijním stavu, bateriový videozvonek bez nutnosti kabelovat je rychlejší řešení – jen počítejte s pravidelným dobíjením.</p>
              <p>U větších pozemků se vyplatí kombinace: videozvonek u hlavní branky propojený s elektrickým zámkem, doplněný klasickým nebo bezdrátovým zvonkem přímo u vchodových dveří domu pro návštěvy, které už jsou na pozemku.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jaký je rozdíl mezi drátovým a bezdrátovým zvonkem?", a: "Drátový zvonek je napojený na transformátor a kabelové vedení k tlačítku i zvoniči, je trvale spolehlivý a nepotřebuje baterie. Bezdrátový zvonek komunikuje rádiovým signálem mezi tlačítkem na baterii a zvoničem zapojeným do zásuvky – instalace je rychlejší, ale baterie je třeba čas od času vyměnit." },
                  { q: "Vyplatí se videotelefon do běžného rodinného domu?", a: "Ano, pokud chcete vidět a slyšet návštěvu ještě před otevřením dveří, případně řešit doručení balíků, když nejste doma. U domu s plotem nebo brankou dál od vchodu je videozvonek navíc užitečný jako náhrada domácího telefonu k bráně." },
                  { q: "Potřebuji k chytrému videozvonku elektrikáře?", a: "U bateriového videozvonku elektrikáře nepotřebujete – stačí připevnit konzoli a propojit zařízení s Wi-Fi. Pokud chcete videozvonek napojit na stávající zvonkové vedení nebo používat PoE napájení, je vhodné nechat zapojení zkontrolovat elektrikářem, zejména v bytovém domě." },
                  { q: "Funguje videozvonek i při výpadku internetu?", a: "Samotné zazvonění a propojení s vnitřním zvoničem funguje obvykle i bez internetu, protože jde o lokální signál. Notifikace do mobilu, živý obraz z kamery a záznamy ale vyžadují připojení k Wi-Fi a internetu – bez něj fungují jen jako základní zvonek." },
                  { q: "Jak vybrat zvonek do bytu v bytovém domě?", a: "V bytovém domě je potřeba respektovat společné domovní vedení a vrátníka/interkom u vchodu – samostatný videozvonek na dveře bytu lze doplnit jako bateriové zařízení bez zásahu do společných rozvodů. U klasického zvonku na dveřích bytu stačí jednoduchý bezdrátový set." },
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
                    <div className="card-eyebrow-row"><span>Elektrika & osvětlení</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#typy">Typy zvonků a videotelefonů</a></li>
                <li><a href="#kdy-co">Bezdrátový zvonek, nebo videotelefon</a></li>
                <li><a href="#dratovy">Instalace drátového zvonku</a></li>
                <li><a href="#bezdratovy">Instalace bezdrátového zvonku</a></li>
                <li><a href="#videozvonek">Chytré videozvonky</a></li>
                <li><a href="#vyber">Výběr podle nemovitosti</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/elektrika" className="sidebar-cat-link">💡 Elektrika & osvětlení<span>20 článků →</span></Link>
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
