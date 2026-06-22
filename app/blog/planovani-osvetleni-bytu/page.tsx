import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak naplánovat osvětlení v celém bytě při rekonstrukci",
  description: "Vrstvení světla, rozmístění zásuvek a vypínačů, teplota barvy a chytré ovládání – plán osvětlení pro každou místnost.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/planovani-osvetleni-bytu" },
  openGraph: { title: "Jak naplánovat osvětlení v celém bytě při rekonstrukci", description: "Vrstvení světla, rozmístění zásuvek a vypínačů, teplota barvy a chytré ovládání – plán osvětlení pro každou místnost.", url: "https://www.domovniguru.cz/blog/planovani-osvetleni-bytu", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-12T08:00:00Z", modifiedTime: "2026-06-12T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20napl%C3%A1novat%20osv%C4%9Btlen%C3%AD%20v%20cel%C3%A9m%20byt%C4%9B%20p%C5%99i%20rekonstrukci&cat=blog", width: 1200, height: 630, alt: "Jak naplánovat osvětlení v celém bytě při rekonstrukci" }] },
  twitter: { card: "summary_large_image", title: "Jak naplánovat osvětlení v celém bytě při rekonstrukci", description: "Vrstvení světla, rozmístění zásuvek a vypínačů, teplota barvy a chytré ovládání – plán osvětlení pro každou místnost." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/planovani-osvetleni-bytu#article", "headline": "Jak naplánovat osvětlení v celém bytě při rekonstrukci", "datePublished": "2026-06-12T08:00:00Z", "dateModified": "2026-06-12T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["plánování osvětlení", "osvětlení bytu", "vrstvené osvětlení", "rozmístění bodovek", "elektroinstalace osvětlení"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Stěhování & rekonstrukce", "item": "https://www.domovniguru.cz/blog/kategorie/stehovani-rekonstrukce" }, { "@type": "ListItem", "position": 4, "name": "Jak naplánovat osvětlení v celém bytě při rekonstrukci", "item": "https://www.domovniguru.cz/blog/planovani-osvetleni-bytu" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Kdy se má řešit plán osvětlení při rekonstrukci?", "acceptedAnswer": { "@type": "Answer", "text": "Plán osvětlení musí být hotový před hrubou elektroinstalací – tedy ještě před sádrováním a omítkami. V tu chvíli se totiž rozhoduje o pozicích krabic pro svítidla, vypínače, zásuvky a počtu samostatných okruhů. Dodatečné úpravy po zaomítkování jsou výrazně dražší a často znamenají bourání." } }, { "@type": "Question", "name": "Kolik okruhů osvětlení potřebuje běžný byt?", "acceptedAnswer": { "@type": "Answer", "text": "V menším bytě (2+kk až 3+kk) se obvykle počítá s 4–8 samostatnými okruhy osvětlení – typicky obývák a kuchyně bývají rozdělené na hlavní a akcentové světlo, koupelna a chodba mívají vlastní okruh a kuchyňská linka s LED páskem také. Přesný počet vychází z dispozice a požadavků na scény." } }, { "@type": "Question", "name": "Jaká teplota barvy světla je nejvhodnější do obytných prostor?", "acceptedAnswer": { "@type": "Answer", "text": "Do obývacích pokojů, ložnic a jídelen se nejlépe hodí teplá bílá 2700–3000 K, která vytváří klidnou a domácí atmosféru. Do kuchyně, koupelny a pracovny je vhodnější neutrální bílá 3500–4000 K, protože podporuje soustředění a lépe ukáže skutečné barvy. Studená bílá nad 5000 K se v bytech používá výjimečně, spíše do garáží nebo technických místností." } }, { "@type": "Question", "name": "Je nutné instalovat stmívače do každé místnosti?", "acceptedAnswer": { "@type": "Answer", "text": "Není to nutné, ale vyplatí se to alespoň v obývacím pokoji, ložnici a jídelně, kde se mění nálada podle denní doby a aktivity. V kuchyni a koupelně bývá stmívání spíše bonus, hlavní okruh by tam měl dávat dostatek světla pro práci. Pokud uvažuješ o stmívačích, je potřeba na to myslet už při výběru svítidel a vedení kabeláže – ne každé svítidlo a ne každý starší jednožilový rozvod je pro stmívání vhodný." } }, { "@type": "Question", "name": "Jak velký rozestup mezi bodovkami na stropě zvolit?", "acceptedAnswer": { "@type": "Answer", "text": "Obecné pravidlo říká, že rozestup mezi bodovkami by měl zhruba odpovídat výšce stropu nad podlahou – u standardních stropů 2,5–2,7 m to vychází na rozestup kolem 100–120 cm. Od stěny se bodovky obvykle umisťují 40–60 cm, aby nevytvářely tvrdé stíny na zdi. U pracovních ploch a nik se vzdálenosti přizpůsobují konkrétnímu nábytku." } }] }] };

const RELATED = [
  { title: "Jak vybrat svítidla do místnosti", href: "/blog/vybrat-svitidla-do-mistnosti", read: "6 min" },
  { title: "Jak vybrat LED žárovku", href: "/blog/jak-vybrat-led-zarovku", read: "8 min" },
  { title: "Jak nainstalovat stmívač světla", href: "/blog/instalovat-stmivac", read: "6 min" },
  { title: "Jak osvětlit kuchyňskou linku", href: "/blog/osvetlit-kuchynskou-linku", read: "6 min" },
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
              <Link href="/blog/kategorie/stehovani-rekonstrukce">Stěhování & rekonstrukce</Link><span className="breadcrumb-sep">/</span>
              <span>Jak naplánovat osvětlení v celém bytě při rekonstrukci</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani-rekonstrukce" className="article-cat-pill">🏠 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 7 min čtení</span>
              </div>
              <h1 className="article-h1">Jak naplánovat osvětlení v celém bytě při rekonstrukci</h1>
              <p className="article-lead">Osvětlení je jedna z věcí, na kterou se při rekonstrukci nejčastěji myslí až na poslední chvíli – a pak je pozdě. Plán světla totiž musí být hotový dřív, než elektrikář zatáhne kabely do zdí. Ukážeme ti, jak na to po jednotlivých místnostech.</p>
              <div className="article-meta-row"><span>Aktualizováno: 12. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#vrstveni">Vrstvené osvětlení – základ dobrého plánu</a></li>
                <li><a href="#elektroinstalace">Kdy řešit osvětlení – hrubá elektroinstalace</a></li>
                <li><a href="#teplota">Teplota barvy světla podle místnosti</a></li>
                <li><a href="#stmivani">Stmívání a chytré ovládání</a></li>
                <li><a href="#specificke">Kuchyňská linka, koupelna a šatník</a></li>
                <li><a href="#chyby">Časté chyby při plánování osvětlení</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="vrstveni">
              <h2>Vrstvené osvětlení – základ dobrého plánu</h2>
              <p>Jedna stropní svítidla uprostřed pokoje stačila babičkám, ale dnešní byty potřebují víc. Profesionálové pracují s tzv. vrstveným osvětlením – kombinací tří typů světla, které se doplňují a dají se ovládat odděleně.</p>
              <ul>
                <li><strong>Celkové (hlavní) světlo</strong> – rovnoměrně rozsvítí celou místnost. Bývá to stropní svítidlo, lustr nebo řada bodovek v podhledu. Slouží jako základní vrstva, kterou rozsvítíš, když potřebuješ vidět všude.</li>
                <li><strong>Pracovní světlo</strong> – cílené na konkrétní činnost: čtení, vaření, psaní, líčení. Jde o stolní lampy, závěsná svítidla nad pracovní deskou, LED pásky pod kuchyňskou linkou nebo zrcadlové osvětlení v koupelně.</li>
                <li><strong>Akcentové (dekorativní) světlo</strong> – zvýrazňuje detaily a vytváří atmosféru. Sem patří podsvícené niky, LED pásky za televizí, nástěnná svítidla nebo bodovky mířící na obraz či regál.</li>
              </ul>
              <p>Dobrý plán počítá s tím, že všechny tři vrstvy půjdou zapnout samostatně – a ideálně i kombinovat do scén. Při samotném rozmisťování bodovek, lustrů a nástěnných svítidel se vyplatí promyslet dispozici nábytku ještě před rekonstrukcí, protože pozice světel se odvíjí od toho, kde bude sedačka, postel nebo jídelní stůl. Více k samotnému výběru typů svítidel najdeš v článku <Link href="/blog/vybrat-svitidla-do-mistnosti" style={{ color: "#2a6496", textDecoration: "underline" }}>jak vybrat svítidla do místnosti</Link>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Při plánování si pro každou místnost nakresli jednoduchý půdorys a vyznač si do něj, kde bude stůl, sedačka, postel nebo pracovní deska. Teprve potom umísťuj světla – ne naopak.</div>
            </section>

            <section id="elektroinstalace">
              <h2>Kdy řešit osvětlení – hrubá elektroinstalace</h2>
              <p>Největší chybou je řešit osvětlení až ve fázi výběru svítidel, kdy už jsou zdi zaomítkované. Plán osvětlení musí vzniknout společně s projektem elektroinstalace – tedy ještě před tažením kabelů, sádrováním a omítkami.</p>
              <p>V této fázi se rozhoduje o několika klíčových věcech:</p>
              <ul>
                <li><strong>Pozice stropních krabic</strong> – kde přesně bude lustr, kde bodovky a kde třeba budoucí ventilátor. Přesun krabice o 30 cm po zaomítkování znamená sekání drážek a opravu omítky.</li>
                <li><strong>Počet a umístění vypínačů</strong> – u vstupu do pokoje, ale i u postele (sériový/křížový spínač pro ovládání světla z více míst), u vchodu do koupelny apod.</li>
                <li><strong>Počet samostatných okruhů</strong> – každá vrstva osvětlení (hlavní, pracovní, akcentové) by měla mít vlastní okruh a vlastní vypínač nebo stmívač. V menším bytě se obvykle počítá se 4–8 okruhy osvětlení.</li>
                <li><strong>Kabeláž pro budoucí stmívače a chytré ovládání</strong> – pokud plánuješ stmívače nebo chytré spínače, musí na ně elektrikář natáhnout vhodný typ kabelu (a u některých řešení i nulový vodič do krabice vypínače).</li>
                <li><strong>Napájení pro LED pásky a nepřímé osvětlení</strong> – niky, podhledy a kuchyňské linky potřebují přivedené napájení 12 V nebo 24 V a místo pro driver/trafo.</li>
              </ul>
              <p>Pravidlo je jednoduché: čím dřív si sedneš s elektrikářem nebo projektantem a probereš plán svítidel po jednotlivých místnostech, tím levnější a hladší bude celá rekonstrukce.</p>
            </section>

            <section id="teplota">
              <h2>Teplota barvy světla podle místnosti</h2>
              <p>Teplota barvy světla se udává v Kelvinech (K) a výrazně ovlivňuje atmosféru i to, jak se v prostoru cítíš. Obecně platí tři kategorie:</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Teplota</th><th>Charakter</th><th>Doporučené místnosti</th></tr></thead>
                  <tbody>
                    <tr><td>Teplá bílá (2700–3000 K)</td><td>Klidná, domácí, příjemná</td><td>Obývák, ložnice, jídelna, chodba</td></tr>
                    <tr><td>Neutrální bílá (3500–4000 K)</td><td>Přirozená, podporuje soustředění</td><td>Kuchyně, pracovna, koupelna, šatník</td></tr>
                    <tr><td>Studená bílá (5000–6500 K)</td><td>Ostrá, aktivizující</td><td>Garáž, dílna, sklep, technické prostory</td></tr>
                  </tbody>
                </table>
              </div>
              <p>V praxi se v jedné místnosti často kombinují dvě teploty – například v kuchyni teplá bílá pro celkové osvětlení a neutrální bílá nad pracovní deskou, kde potřebuješ vidět skutečné barvy potravin. Pokud si nejsi jistý, jakou teplotu zvolit pro konkrétní typ žárovky nebo LED pásku, podrobnější přehled najdeš v článku o výběru LED žárovek.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Vyhni se kombinaci výrazně odlišných teplot v jedné místnosti najednou (např. 2700 K a 6000 K současně) – výsledek působí nepříjemně a nesourodě. Drž se rozdílu max. 1000 K mezi jednotlivými svítidly.</div>
            </section>

            <section id="stmivani">
              <h2>Stmívání a chytré ovládání</h2>
              <p>Stmívání není jen luxus – je to nástroj, jak ze stejných svítidel vykouzlit úplně jinou atmosféru podle denní doby a nálady. Plánuj ho hlavně v obývacím pokoji, ložnici a jídelně, kde se aktivity nejvíc liší (práce, čtení, večerní relax, hosté).</p>
              <ul>
                <li><strong>Klasické stmívače</strong> – nahrazují běžný vypínač, fungují okamžitě a nepotřebují žádnou aplikaci. Musí ale být kompatibilní se zvoleným typem žárovek (ne všechny LED jsou stmívatelné) a s typem zapojení. Podrobný návod na zapojení najdeš v článku <Link href="/blog/instalovat-stmivac" style={{ color: "#2a6496", textDecoration: "underline" }}>jak nainstalovat stmívač</Link>.</li>
                <li><strong>Chytré spínače a žárovky</strong> – umožňují vytvářet světelné scény (např. „večer", „film", „úklid"), které najednou změní jas a barvu více okruhů. Vyžadují buď chytré žárovky, nebo chytré spínače/moduly za vypínačem.</li>
                <li><strong>Hlasové ovládání</strong> – přes chytré reproduktory nebo asistenty lze zapínat scény i jednotlivá světla hlasem. Funguje nad chytrými žárovkami nebo spínači, žádnou speciální kabeláž navíc nepotřebuje.</li>
              </ul>
              <p>Pokud o chytrém ovládání uvažuješ jen jako o budoucí možnosti, vyplatí se to zohlednit už při hrubé elektroinstalaci – některé chytré spínače potřebují nulový vodič v krabici vypínače, který se dodatečně těžko dotahuje.</p>
            </section>

            <section id="specificke">
              <h2>Kuchyňská linka, koupelna a šatník</h2>
              <h3>Kuchyňská linka</h3>
              <p>Horní skříňky vrhají stín přesně na desku, kde nejvíc potřebuješ vidět – proto je nutné pracovní osvětlení řešit samostatně od stropního světla. Nejčastěji se používá LED pásek pod horními skříňkami, doplněný případně bodovkami nad ostrůvkem. Kompletní návod, jak na rozmístění a napájení, najdeš v článku o osvětlení kuchyňské linky.</p>
              <h3>Koupelna</h3>
              <p>V koupelně je potřeba minimálně dvě vrstvy: celkové stropní osvětlení a osvětlení u zrcadla (po stranách, ne shora – boční svícení omezuje stíny na obličeji). Důležité je i krytí svítidel podle zón vlhkosti (IP44 a vyšší v blízkosti umyvadla a vany, IP65 nad sprchou). Teplota světla u zrcadla by měla být neutrální bílá, aby barvy odpovídaly realitě venku.</p>
              <h3>Šatník</h3>
              <p>Vestavěné skříně a šatníky potřebují vlastní osvětlení, protože hlavní světlo z místnosti do nich často nedosáhne. Osvědčují se LED pásky na hranách polic nebo malé bodovky se senzorem pohybu, které se rozsvítí při otevření dveří. I sem patří neutrální bílá – snáz podle ní poznáš skutečné barvy oblečení.</p>
            </section>

            <section id="chyby">
              <h2>Časté chyby při plánování osvětlení</h2>
              <p>Většina problémů s osvětlením se neřeší vadným svítidlem, ale chybou v plánu, která se projeví až po dokončení rekonstrukce. Nejčastější jsou tyto:</p>
              <ul>
                <li><strong>Málo vypínačů a okruhů</strong> – jeden vypínač pro celý pokoj znamená, že nelze oddělit hlavní a akcentové světlo. Výsledkem je, že večer svítí buď „všechno", nebo „nic".</li>
                <li><strong>Špatné umístění stropních krabic</strong> – krabice uprostřed stropu sice vyhovuje klasickému lustru, ale pokud má sedačka stát jinde, hlavní světlo padá na špatné místo. Krabice se musí umístit podle finálního rozmístění nábytku, ne podle geometrického středu pokoje.</li>
                <li><strong>Chybějící napájení pro LED pásky</strong> – dodatečné přivedení 12V/24V kabelu k nice nebo kuchyňské lince po zaomítkování je nepříjemná a viditelná oprava.</li>
                <li><strong>Podcenění počtu zásuvek u vypínačů</strong> – pro chytré spínače je často potřeba nulový vodič, na který se při hrubé instalaci zapomíná, a dodatečně se těžko dotahuje.</li>
                <li><strong>Jedna teplota světla pro celý byt</strong> – sjednocení na jednu Kelvinovou hodnotu zní jako zjednodušení, ale v praxi vede k tomu, že kuchyň působí příliš studeně, nebo naopak ložnice příliš žlutě.</li>
                <li><strong>Plánování svítidel až po výběru nábytku</strong> – pokud se nábytek vybírá až po dokončení elektroinstalace, často se ukáže, že světla svítí na zeď za skříní, ne na místo, kde budeš číst nebo vařit.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Než elektrikář zafixuje pozice krabic, polož si do bytu (i na podlahu) papírové makety nábytku v reálné velikosti. Pomůže to vizualizovat, kam přesně má světlo svítit.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Kdy se má řešit plán osvětlení při rekonstrukci?", a: "Plán osvětlení musí být hotový před hrubou elektroinstalací – tedy ještě před sádrováním a omítkami. V tu chvíli se totiž rozhoduje o pozicích krabic pro svítidla, vypínače, zásuvky a počtu samostatných okruhů. Dodatečné úpravy po zaomítkování jsou výrazně dražší a často znamenají bourání." },
                  { q: "Kolik okruhů osvětlení potřebuje běžný byt?", a: "V menším bytě (2+kk až 3+kk) se obvykle počítá s 4–8 samostatnými okruhy osvětlení – typicky obývák a kuchyně bývají rozdělené na hlavní a akcentové světlo, koupelna a chodba mívají vlastní okruh a kuchyňská linka s LED páskem také. Přesný počet vychází z dispozice a požadavků na scény." },
                  { q: "Jaká teplota barvy světla je nejvhodnější do obytných prostor?", a: "Do obývacích pokojů, ložnic a jídelen se nejlépe hodí teplá bílá 2700–3000 K, která vytváří klidnou a domácí atmosféru. Do kuchyně, koupelny a pracovny je vhodnější neutrální bílá 3500–4000 K, protože podporuje soustředění a lépe ukáže skutečné barvy. Studená bílá nad 5000 K se v bytech používá výjimečně, spíše do garáží nebo technických místností." },
                  { q: "Je nutné instalovat stmívače do každé místnosti?", a: "Není to nutné, ale vyplatí se to alespoň v obývacím pokoji, ložnici a jídelně, kde se mění nálada podle denní doby a aktivity. V kuchyni a koupelně bývá stmívání spíše bonus, hlavní okruh by tam měl dávat dostatek světla pro práci. Pokud uvažuješ o stmívačích, je potřeba na to myslet už při výběru svítidel a vedení kabeláže – ne každé svítidlo a ne každý starší jednožilový rozvod je pro stmívání vhodný." },
                  { q: "Jak velký rozestup mezi bodovkami na stropě zvolit?", a: "Obecné pravidlo říká, že rozestup mezi bodovkami by měl zhruba odpovídat výšce stropu nad podlahou – u standardních stropů 2,5–2,7 m to vychází na rozestup kolem 100–120 cm. Od stěny se bodovky obvykle umisťují 40–60 cm, aby nevytvářely tvrdé stíny na zdi. U pracovních ploch a nik se vzdálenosti přizpůsobují konkrétnímu nábytku." },
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
                <li><a href="#vrstveni">Vrstvené osvětlení</a></li>
                <li><a href="#elektroinstalace">Hrubá elektroinstalace</a></li>
                <li><a href="#teplota">Teplota barvy světla</a></li>
                <li><a href="#stmivani">Stmívání a chytré ovládání</a></li>
                <li><a href="#specificke">Linka, koupelna, šatník</a></li>
                <li><a href="#chyby">Časté chyby</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/stehovani-rekonstrukce" className="sidebar-cat-link">🏠 Stěhování & rekonstrukce<span>Další články →</span></Link>
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
