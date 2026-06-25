import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kamerový systém pro dům a zahradu: jak vybrat",
  description: "IP kamery vs. kabelové, cloud vs. lokální záznam, umístění kamer u domu a zahrady a co říká GDPR o natáčení sousedů a veřejného prostoru.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/kamerovy-system-pro-dum-a-zahradu" },
  openGraph: { title: "Kamerový systém pro dům a zahradu: jak vybrat", description: "IP kamery vs. kabelové, cloud vs. lokální záznam, umístění kamer u domu a zahrady a co říká GDPR o natáčení sousedů a veřejného prostoru.", url: "https://www.domovniguru.cz/blog/kamerovy-system-pro-dum-a-zahradu", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-25T08:00:00Z", modifiedTime: "2026-06-25T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Kamerov%C3%BD%20syst%C3%A9m%20pro%20d%C5%AFm%20a%20zahradu%3A%20jak%20vybrat&cat=blog", width: 1200, height: 630, alt: "Kamerový systém pro dům a zahradu: jak vybrat" }] },
  twitter: { card: "summary_large_image", title: "Kamerový systém pro dům a zahradu: jak vybrat", description: "IP kamery vs. kabelové, cloud vs. lokální záznam, umístění kamer u domu a zahrady a co říká GDPR o natáčení sousedů a veřejného prostoru." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/kamerovy-system-pro-dum-a-zahradu#article", "headline": "Kamerový systém pro dům a zahradu: jak vybrat", "datePublished": "2026-06-25T08:00:00Z", "dateModified": "2026-06-25T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["kamerový systém", "kamery k domu", "kamera na zahradu", "IP kamera", "NVR záznam", "GDPR kamery sousedé"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Elektrika & osvětlení", "item": "https://www.domovniguru.cz/blog/kategorie/elektrika" }, { "@type": "ListItem", "position": 4, "name": "Kamerový systém pro dům a zahradu", "item": "https://www.domovniguru.cz/blog/kamerovy-system-pro-dum-a-zahradu" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Je lepší kamera s WiFi nebo kabelová kamera?", "acceptedAnswer": { "@type": "Answer", "text": "WiFi kamera se snáz instaluje, protože nepotřebuje datový kabel, jen napájení nebo baterii. Kabelová kamera (PoE) je spolehlivější, nezávislá na síle signálu Wi-Fi a vhodnější pro trvalý provoz a vzdálenější body na zahradě, kde by Wi-Fi signál mohl být slabý." } }, { "@type": "Question", "name": "Můžu mít kameru namířenou na sousední pozemek?", "acceptedAnswer": { "@type": "Answer", "text": "Kamera by měla snímat především vlastní pozemek. Pokud záběr nevyhnutelně zasahuje i kousek sousedního pozemku nebo veřejného prostoru, je vhodné záběr clonami nebo nastavením zorného úhlu omezit na minimum a mít srozumitelný důvod (ochrana majetku). Cílené, zbytečně rozsáhlé natáčení sousedova pozemku nebo dlouhodobé sledování osob bez souhlasu může být problém z hlediska ochrany osobních údajů a soukromí." } }, { "@type": "Question", "name": "Je lepší cloudové uložiště, nebo záznam na SD kartu/NVR?", "acceptedAnswer": { "@type": "Answer", "text": "Cloud nabízí přístup k záznamům odkudkoli a ochranu proti tomu, že pachatel zařízení s záznamem odnese nebo zničí, ale obvykle vyžaduje měsíční předplatné. Lokální záznam na SD kartu nebo NVR je bez měsíčních poplatků a data zůstávají jen u tebe, ale při fyzickém poškození nebo odcizení zařízení může záznam zmizet." } }, { "@type": "Question", "name": "Kam mám kamery u domu umístit?", "acceptedAnswer": { "@type": "Answer", "text": "Klíčová místa jsou hlavní vchod, vjezd na pozemek, zadní vchod a garáž – tedy místa, kterými se nejčastěji vchází nebo kterými by mohl procházet nezvaný host. Kamery je dobré umístit dostatečně vysoko, mimo snadný dosah, a pokrýt i takzvaná slepá místa, kam nevidí žádná jiná kamera ani okno." } }, { "@type": "Question", "name": "Musím na kamerový systém upozornit nálepkou nebo cedulkou?", "acceptedAnswer": { "@type": "Answer", "text": "U rodinného domu pro vlastní ochranu majetku zákon výslovně nálepku nevyžaduje, ale je to dobrá praxe – informuje návštěvníky i případné pachatele, že je objekt monitorován, a snižuje riziko sporů se sousedy. U firem a komerčních prostor naopak povinnost informovat o kamerovém systému typicky platí." } }] }] };

const RELATED = [
  { title: "Domácí alarm a zabezpečovací systém", href: "/blog/domaci-alarm-a-zabezpecovaci-system", read: "6 min" },
  { title: "Výběr domovního zvonku a videotelefonu", href: "/blog/vyber-domovniho-zvonku-a-videotelefonu", read: "5 min" },
  { title: "Chytrá domácnost – jak začít", href: "/blog/chytra-domacnost-zaciname", read: "6 min" },
  { title: "Instalace venkovní zásuvky a osvětlení", href: "/blog/instalace-venkovni-zasuvky-a-osvetleni", read: "5 min" },
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
              <span>Kamerový systém pro dům a zahradu</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">⚡ Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Kamerový systém pro dům a zahradu</h1>
              <p className="article-lead">Kamery u domu dnes nejsou jen pro firmy a pevnosti s vysokým plotem – bezdrátová IP kamera za pár stovek korun s appkou v mobilu si dnes poradí s hlídáním vjezdu, zahrady i balíku doručeného přede dveře. Než ale začneš kamery rozmisťovat, vyplatí se promyslet typ záznamu, umístění i to, co říká zákon o natáčení okolí.</p>
              <div className="article-meta-row"><span>Aktualizováno: 25. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#typy-kamer">Výběr typu kamer</a></li>
                <li><a href="#rozliseni">Rozlišení a noční vidění</a></li>
                <li><a href="#uloziste">Cloud vs. lokální uložiště</a></li>
                <li><a href="#umisteni">Umístění kamer</a></li>
                <li><a href="#gdpr">Právní aspekty – GDPR a sousedé</a></li>
                <li><a href="#propojeni">Propojení s alarmem a appkou</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="typy-kamer">
              <h2>Výběr typu kamer</h2>
              <p>Na trhu existují v zásadě dvě hlavní dělení kamer pro domácí použití – podle způsobu připojení a podle způsobu napájení.</p>
              <h3>IP kamery s Wi-Fi vs. kabelové kamery</h3>
              <ul>
                <li><strong>Wi-Fi IP kamery</strong> – připojují se k domácí síti bezdrátově, stačí jim přívod napájení. Instalace je rychlá, vhodná i pro nájemníky a méně náročné umístění. Citlivější jsou na kvalitu signálu – u vzdálenějších rohů zahrady může být potřeba Wi-Fi extender.</li>
                <li><strong>Kabelové kamery (PoE)</strong> – napájení i datový přenos jde jedním kabelem (Power over Ethernet). Spolehlivější přenos, žádné výpadky signálu, vhodné pro trvalou instalaci a vzdálenější body. Náročnější na instalaci, protože je potřeba kabeláž protáhnout k NVR rekorderu.</li>
              </ul>
              <h3>Baterie vs. trvalé napájení</h3>
              <ul>
                <li><strong>Bateriové kamery</strong> – nejjednodušší instalace, často jen přilepit nebo přišroubovat na fasádu, žádný kabel k řešení. Nevýhodou je nutnost kamery pravidelně sundávat a dobíjet (typicky jednou za 1–3 měsíce podle frekvence záznamů), případně řešit solární panel jako doplněk.</li>
                <li><strong>Kamery s trvalým napájením</strong> – nepřetržitý provoz, vhodné pro místa s vysokou frekvencí pohybu (vjezd, hlavní vchod), kde by baterie rychle vybíjela. Vyžadují přívod elektřiny – buď z nejbližší zásuvky, nebo nové vedení.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pro hlavní vchod a vjezd, kde chceš nepřetržité sledování, zvol napájenou kameru. Pro doplňková místa na zahradě, kam se nechceš tahat s kabelem, je bateriová kamera praktický kompromis.</div>
            </section>

            <section id="rozliseni">
              <h2>Rozlišení a noční vidění</h2>
              <p>Vyšší rozlišení neznamená jen ostřejší obraz na první pohled – v praxi rozhoduje o tom, jestli ze záznamu rozeznáš obličej nebo registrační značku auta, nebo jen rozmazanou siluetu.</p>
              <ul>
                <li><strong>1080p (Full HD)</strong> – dostatečné pro menší vzdálenosti, např. kamera u dveří snímající návštěvníka z blízka.</li>
                <li><strong>2K až 4K</strong> – vhodné pro širší záběry zahrady, vjezdu nebo větší pozemek, kde chceš i z dálky rozeznat detaily.</li>
                <li><strong>Digitální zoom</strong> – u levnějších kamer zhoršuje kvalitu obrazu, optický zoom je výrazně lepší, ale dražší a méně běžný u domácích kamer.</li>
              </ul>
              <h3>Noční vidění</h3>
              <ul>
                <li><strong>Infračervené (IR) noční vidění</strong> – černobílý obraz v naprosté tmě, dosah obvykle 10–30 m podle modelu. Standard u většiny kamer.</li>
                <li><strong>Barevné noční vidění</strong> – využívá citlivější snímač a často přídavné bílé LED nebo reflektor, obraz zůstává barevný i za nízké hladiny světla, lépe se z něj identifikuje oblečení nebo barva auta.</li>
                <li><strong>Kombinace s pohybovým reflektorem</strong> – kamera při detekci pohybu rozsvítí přídavné světlo, což zlepší noční záběr a zároveň odradí nezvaného návštěvníka.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud řešíš i venkovní osvětlení zahrady, vyplatí se zkombinovat ho s pohybovým senzorem – nasvícení prostoru pomáhá kamerám i lidskému oku. Více v článku, jak <Link href="/blog/instalovat-pohybovy-senzor" style={{ color: "#2a6496", textDecoration: "underline" }}>instalovat pohybový senzor</Link>.</div>
            </section>

            <section id="uloziste">
              <h2>Cloudové vs. lokální uložiště záznamu</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ uložiště</th><th>Výhody</th><th>Nevýhody</th></tr></thead>
                  <tbody>
                    <tr><td>Cloud</td><td>Přístup odkudkoli, záznam přežije odcizení/zničení kamery, snadné sdílení klipu</td><td>Měsíční předplatné, závislost na internetovém připojení, data u třetí strany</td></tr>
                    <tr><td>SD karta v kameře</td><td>Bez měsíčních poplatků, jednoduché u jedné nebo pár kamer</td><td>Při odcizení kamery zmizí i záznam, omezená kapacita</td></tr>
                    <tr><td>NVR (síťový rekordér)</td><td>Centrální úložiště pro více kamer, žádné poplatky, velká kapacita disku</td><td>Vyšší vstupní investice, NVR musí být schovaný mimo dosah</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Praktický kompromis u větších instalací je takzvané hybridní řešení – lokální záznam na NVR pro běžný provoz a krátkodobé cloudové „klipy" jen z událostí (detekovaný pohyb), které se uloží i mimo dosah případného pachatele.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> NVR rekordér nebo router s SD kartami umísti na skryté, špatně dostupné místo (např. půda, zamčená komora), ne hned vedle hlavních dveří – jinak ho zloděj může jednoduše vzít s sebou společně s kamerami.</div>
            </section>

            <section id="umisteni">
              <h2>Umístění kamer</h2>
              <p>Efektivita kamerového systému závisí mnohem víc na chytrém umístění než na počtu kamer. Pár dobře zvolených pozic pokryje víc než deset nahodile rozmístěných kamer.</p>
              <ul>
                <li><strong>Hlavní vchod</strong> – kamera ve výšce, kde zachytí obličej příchozího, ne jen vrchol hlavy. Ideálně v kombinaci s domovním zvonkem s kamerou.</li>
                <li><strong>Vjezd na pozemek</strong> – pokrytí brány nebo vrat, ideálně se záběrem na registrační značku přijíždějícího vozu.</li>
                <li><strong>Garáž a vedlejší vchody</strong> – často podceňovaná místa, kterými se vchází mimo hlavní pozornost.</li>
                <li><strong>Zahrada a slepá místa</strong> – rohy domu, prostor za garáží, místa nekrytá veřejným osvětlením ani jinou kamerou.</li>
                <li><strong>Výška a úhel</strong> – kamery umísťuj výš než na dosah ruky (alespoň 2,5–3 m), s mírným náklonem dolů, aby nešly snadno zakrýt nebo poškodit.</li>
              </ul>
              <div className="article-tip"><strong>⚠️ Bezpečnost:</strong> Pokud kamera vyžaduje napájení ze sítě 230 V a vedeš nový kabel, vždy nejprve vypni jistič příslušného okruhu v rozvaděči, než se elektroinstalace dotkneš. Venkovní instalace navíc musí splňovat odpovídající krytí (IP) proti vlhkosti a dešti. Pokud si nejsi jistý zapojením nebo jde o nový rozvod, je vždy bezpečnější přizvat elektrikáře a po dokončení nechat stav zkontrolovat revizí.</div>
            </section>

            <section id="gdpr">
              <h2>Právní aspekty – GDPR a natáčení sousedů</h2>
              <p>Kamerový systém k ochraně vlastního domu a zahrady je legitimní zájem a v drtivé většině případů v pořádku. Problém nastává tam, kde záběr kamery zasahuje příliš daleko za hranice vlastního pozemku.</p>
              <ul>
                <li><strong>Vlastní pozemek</strong> – natáčení vlastního domu, vjezdu a zahrady pro účely ochrany majetku je v pořádku i bez zvláštního souhlasu, jde o zpracování osobních údajů pro tzv. oprávněný zájem (ochrana majetku a osob).</li>
                <li><strong>Záběr zasahující k sousedům</strong> – pokud kamera nevyhnutelně zabírá i kousek sousedního pozemku (např. kvůli tvaru pozemku), je vhodné zorný úhel omezit clonami nebo softwarovým maskováním té části obrazu, která patří sousedovi.</li>
                <li><strong>Cílené sledování soused­ské zahrady nebo oken</strong> – to už je problematické a může vést ke stížnosti na Úřad pro ochranu osobních údajů nebo k občanskoprávnímu sporu o ochranu soukromí.</li>
                <li><strong>Veřejný prostor (chodník, ulice)</strong> – krátký úsek chodníku před vchodem, který kamera nevyhnutelně zabírá, je obvykle tolerován. Trvalé sledování celé ulice nebo veřejného prostoru ve velkém rozsahu už spadá pod přísnější pravidla pro zpracování osobních údajů.</li>
                <li><strong>Doba uchovávání záznamu</strong> – záznamy z domácí kamery by se měly uchovávat jen po dobu nezbytně nutnou (řádově dny až týdny), ne archivovat neomezeně dlouho.</li>
              </ul>
              <p>Tohle je obecný přehled principů, nejde o právní poradenství – pokud řešíš spornou situaci se sousedem nebo si nejsi jistý rozsahem záběru, doporučujeme konzultaci s právníkem nebo přímo dotaz na Úřad pro ochranu osobních údajů.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> U kamer s pohyblivým (PTZ) záběrem nebo širokoúhlým objektivem využij funkci „privacy mask" v appce – umožní trvale rozmazat nebo zakrýt tu část obrazu, která patří sousedovi nebo veřejné komunikaci.</div>
            </section>

            <section id="propojeni">
              <h2>Propojení s alarmem a mobilní appkou</h2>
              <p>Samostatný kamerový systém je užitečný, ale skutečnou hodnotu získá v kombinaci s dalšími prvky zabezpečení. Podrobně se volbě alarmu věnujeme v článku <Link href="/blog/domaci-alarm-a-zabezpecovaci-system" style={{ color: "#2a6496", textDecoration: "underline" }}>domácí alarm a zabezpečovací systém</Link>.</p>
              <ul>
                <li><strong>Spuštění nahrávání při poplachu</strong> – alarm dá kameře signál, aby spustila záznam přesně v momentě detekce pohybu nebo otevření dveří.</li>
                <li><strong>Push notifikace s náhledem</strong> – do appky přijde nejen zpráva „detekován pohyb", ale i krátký klip nebo snímek.</li>
                <li><strong>Domovní zvonek s kamerou</strong> – propojení se zvonkem umožní vidět příchozího ještě před otevřením dveří, více v článku o <Link href="/blog/vyber-domovniho-zvonku-a-videotelefonu" style={{ color: "#2a6496", textDecoration: "underline" }}>výběru domovního zvonku a videotelefonu</Link>.</li>
                <li><strong>Integrace do chytré domácnosti</strong> – zobrazení živého náhledu na chytrém displeji v kuchyni nebo automatizace (rozsvícení světla při detekci pohybu večer).</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Při výběru appky pro kamery i alarm dej přednost řešením, která umí fungovat v jedné společné aplikaci nebo se aspoň propojit přes stejný standard – usnadní to každodenní používání i budoucí rozšiřování systému.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Je lepší kamera s WiFi nebo kabelová kamera?", a: "WiFi kamera se snáz instaluje, protože nepotřebuje datový kabel, jen napájení nebo baterii. Kabelová kamera (PoE) je spolehlivější, nezávislá na síle signálu Wi-Fi a vhodnější pro trvalý provoz a vzdálenější body na zahradě, kde by Wi-Fi signál mohl být slabý." },
                  { q: "Můžu mít kameru namířenou na sousední pozemek?", a: "Kamera by měla snímat především vlastní pozemek. Pokud záběr nevyhnutelně zasahuje i kousek sousedního pozemku nebo veřejného prostoru, je vhodné záběr clonami nebo nastavením zorného úhlu omezit na minimum. Cílené, zbytečně rozsáhlé natáčení sousedova pozemku nebo dlouhodobé sledování osob bez souhlasu může být problém z hlediska ochrany osobních údajů a soukromí." },
                  { q: "Je lepší cloudové uložiště, nebo záznam na SD kartu/NVR?", a: "Cloud nabízí přístup k záznamům odkudkoli a ochranu proti tomu, že pachatel zařízení s záznamem odnese nebo zničí, ale obvykle vyžaduje měsíční předplatné. Lokální záznam na SD kartu nebo NVR je bez měsíčních poplatků a data zůstávají jen u tebe, ale při fyzickém poškození nebo odcizení zařízení může záznam zmizet." },
                  { q: "Kam mám kamery u domu umístit?", a: "Klíčová místa jsou hlavní vchod, vjezd na pozemek, zadní vchod a garáž – tedy místa, kterými se nejčastěji vchází nebo kterými by mohl procházet nezvaný host. Kamery je dobré umístit dostatečně vysoko, mimo snadný dosah, a pokrýt i takzvaná slepá místa, kam nevidí žádná jiná kamera ani okno." },
                  { q: "Musím na kamerový systém upozornit nálepkou nebo cedulkou?", a: "U rodinného domu pro vlastní ochranu majetku zákon výslovně nálepku nevyžaduje, ale je to dobrá praxe – informuje návštěvníky i případné pachatele, že je objekt monitorován, a snižuje riziko sporů se sousedy. U firem a komerčních prostor naopak povinnost informovat o kamerovém systému typicky platí." },
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
                <li><a href="#typy-kamer">Výběr typu kamer</a></li>
                <li><a href="#rozliseni">Rozlišení a noční vidění</a></li>
                <li><a href="#uloziste">Cloud vs. lokální uložiště</a></li>
                <li><a href="#umisteni">Umístění kamer</a></li>
                <li><a href="#gdpr">Právní aspekty</a></li>
                <li><a href="#propojeni">Propojení s alarmem</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/elektrika" className="sidebar-cat-link">⚡ Elektrika & osvětlení<span>29 článků →</span></Link>
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
