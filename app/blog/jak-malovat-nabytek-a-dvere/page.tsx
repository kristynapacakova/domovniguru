import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak malovat nábytek a dveře krok za krokem",
  description: "Postup renovace starého nábytku a dveří barvou – příprava povrchu, výběr barvy, technika nanášení a finální ochrana.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-malovat-nabytek-a-dvere" },
  openGraph: { title: "Jak malovat nábytek a dveře krok za krokem", description: "Příprava povrchu, výběr barvy, technika nanášení a finální ochrana – kompletní postup renovace.", url: "https://www.domovniguru.cz/blog/jak-malovat-nabytek-a-dvere", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-11T08:00:00Z", modifiedTime: "2026-06-11T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20malovat%20n%C3%A1bytek%20a%20dve%C5%99e%20krok%20za%20krokem&cat=blog", width: 1200, height: 630, alt: "Jak malovat nábytek a dveře krok za krokem" }] },
  twitter: { card: "summary_large_image", title: "Jak malovat nábytek a dveře krok za krokem", description: "Příprava povrchu, výběr barvy, technika nanášení a finální ochrana." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/jak-malovat-nabytek-a-dvere#article", "headline": "Jak malovat nábytek a dveře krok za krokem", "datePublished": "2026-06-11T08:00:00Z", "dateModified": "2026-06-11T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["malování nábytku", "natírání dveří", "renovace nábytku barvou", "křídová barva na nábytek", "jak natřít dveře"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Malování & barvy", "item": "https://www.domovniguru.cz/blog/kategorie/malovani" }, { "@type": "ListItem", "position": 4, "name": "Jak malovat nábytek a dveře", "item": "https://www.domovniguru.cz/blog/jak-malovat-nabytek-a-dvere" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Musím starý nábytek vždy brousit před natíráním?", "acceptedAnswer": { "@type": "Answer", "text": "Pokud používáš křídovou barvu, broušení často odpadá – stačí povrch odmastit. U akrylátových barev a emailů je broušení a penetrace nutné, jinak barva nedrží a po čase se loupe." } }, { "@type": "Question", "name": "Jaká barva je nejlepší na kuchyňskou linku nebo dveře, které se často omývají?", "acceptedAnswer": { "@type": "Answer", "text": "Pro plochy se zvýšeným opotřebením je nejvhodnější akrylátová barva na nábytek nebo email s vyšším leskem, ideálně doplněný transparentním lakem. Křídová barva sama o sobě je méně odolná a vyžaduje vždy ochranný vosk nebo lak." } }, { "@type": "Question", "name": "Kolik vrstev barvy potřebuji na nábytek nebo dveře?", "acceptedAnswer": { "@type": "Answer", "text": "Obvykle stačí jedna vrstva penetrace (pokud je potřeba) a dvě tenké vrstvy barvy. Tmavé barvy přetírané světlým odstínem nebo silně nasákavé povrchy mohou potřebovat třetí vrstvu." } }, { "@type": "Question", "name": "Jak dlouho musí barva na nábytku schnout mezi vrstvami?", "acceptedAnswer": { "@type": "Answer", "text": "Akrylátové a křídové barvy na dotek schnou za 1–2 hodiny, na další vrstvu je ale lepší počkat 4–6 hodin. Plné vytvrzení a zatížení nábytku snese až po 24–48 hodinách, u emailů i déle." } }, { "@type": "Question", "name": "Mám demontovat kování a sklo před natíráním dveří?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, vždy. Kliky, panty a zámky se demontují nebo alespoň zakryjí maskovací páskou, jinak se zalepí barvou a budou drhnout. Skleněné výplně se zamaskují páskou a fólií po celém obvodu." } }] }] };

const RELATED = [
  { title: "Jak odstranit starou barvu z nábytku a dveří", href: "/blog/jak-odstranit-starou-barvu", read: "5 min" },
  { title: "Kdy vyměnit staré dveře a na co si dát pozor", href: "/blog/vymenit-stare-dvere", read: "5 min" },
  { title: "Jak namazat dveře, aby nevrzaly", href: "/blog/jak-namazat-dvere-aby-nevrzaly", read: "3 min" },
  { title: "Kalkulačka spotřeby barvy", href: "/kalkulacky/kolik-barvy", read: "1 min" },
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
              <span>Jak malovat nábytek a dveře</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování & barvy</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak malovat nábytek a dveře krok za krokem</h1>
              <p className="article-lead">Stará skříň, kuchyňská linka nebo otlučené dveře nemusí skončit v kontejneru. S trochou trpělivosti, správnou přípravou a vhodnou barvou z nich uděláš kus, který vypadá jako nový – a vydrží roky. Tady je celý postup od broušení až po finální vosk.</p>
              <div className="article-meta-row"><span>Aktualizováno: 11. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#priprava">Příprava povrchu</a></li>
                <li><a href="#vyber-barvy">Výběr barvy</a></li>
                <li><a href="#naradi">Nářadí na malování nábytku</a></li>
                <li><a href="#technika">Technika nanášení</a></li>
                <li><a href="#susenii">Sušení a počet vrstev</a></li>
                <li><a href="#ochrana">Finální ochrana</a></li>
                <li><a href="#kovani-sklo">Kování, kliky a sklo</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="priprava">
              <h2>Příprava povrchu – základ celé renovace</h2>
              <p>Devadesát procent úspěchu se rozhoduje ještě předtím, než vezmeš do ruky štětec. Pokud povrch dobře nepřipravíš, nová barva se bude loupat, praskat nebo nedrží vůbec – ať použiješ sebelepší produkt.</p>
              <h3>Broušení</h3>
              <p>U laminovaných povrchů (typické u kuchyňských linek a starších skříní) je potřeba zdrsnit lesklou vrstvu, aby se barva měla čeho chytit. Stačí brusný papír zrnitosti 180–240, kterým přejdeš celou plochu do matného odstínu – nemusíš brousit až na surový materiál. U masivního dřeva nebo dřevotřísky s odlupující se starou barvou musíš naopak brousit důkladněji, ideálně až na zdravý podklad. Pokud je staré barvy na povrchu hodně, vyplatí se ji nejdřív odstranit – postup najdeš v článku <Link href="/blog/jak-odstranit-starou-barvu" style={{ color: "#2a6496", textDecoration: "underline" }}>jak odstranit starou barvu z nábytku a dveří</Link>.</p>
              <h3>Odmaštění</h3>
              <p>Po broušení povrch důkladně otři vlhkým hadrem, necháš oschnout a poté přejdeš odmašťovačem nebo technickým lihem. Zejména u kuchyňského nábytku se na povrchu drží mastnota z vaření, kterou voda sama neodstraní – a barva by se na mastném místě po pár týdnech odlupovala v celých plátech.</p>
              <h3>Penetrace (základová barva)</h3>
              <p>Penetrační nátěr (primer) je krok, který se často přeskakuje – a zbytečně. Na laminát, lakované dřevo nebo kov potřebuješ adhezní penetraci, která zajistí přilnavost vrchní barvy. Na nasákavé dřevo nebo dřevotřísku zase penetrace zpevní povrch a sjednotí nasákavost, takže barva schne rovnoměrně a nevznikají skvrny. Penetrace se nanáší v jedné tenké vrstvě a před dalším krokem musí úplně proschnout – obvykle 4–8 hodin podle typu produktu.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Před broušením a malováním demontuj veškeré kování, kliky a panty, pokud to jde. Ušetříš si maskování a výsledek bude vypadat profesionálněji – barva se dostane i do míst, která by jinak zůstala nenatřená.</div>
            </section>

            <section id="vyber-barvy">
              <h2>Výběr barvy – křída, akrylát, nebo email?</h2>
              <p>Volba barvy závisí na tom, co maluješ a jak moc bude povrch namáhaný. Tady jsou tři nejčastější varianty.</p>
              <h3>Křídová barva (chalk paint)</h3>
              <p>Křídová barva je oblíbená hlavně díky tomu, že se dá nanášet i bez broušení a penetrace – stačí odmaštěný povrch. Má matný, sametový vzhled a skvěle se hodí na vintage a venkovský styl nábytku. Nevýhodou je nižší odolnost vůči otěru a vlhkosti – proto vždy potřebuje finální ochranu voskem nebo lakem (viz dále). Hodí se na komody, židle, rámy postelí a dekorativní kusy nábytku, méně už na plochy s denním kontaktem rukou, jako jsou kliky zásuvek nebo pracovní desky.</p>
              <h3>Akrylátová barva na nábytek</h3>
              <p>Akrylátové barvy na vodní bázi jsou univerzální volbou pro nábytek i dveře. Po zaschnutí vytvoří odolný, omyvatelný povrch, jsou téměř bez zápachu a dají se ředit vodou. Existují v matném, saténovém i lesklém provedení – pro kuchyně a koupelny doporučujeme alespoň saténový lesk, který lépe odolává otěru a dá se utřít na vlhko.</p>
              <h3>Email na dveře</h3>
              <p>Email (syntetická nebo vodou ředitelná emailová barva) je klasická volba na dveře, zárubně a radiátory. Vytváří tvrdý, hladký a velmi odolný povrch, který snese časté otevírání, dotyk i otření. Syntetické emaily mají výraznější zápach a delší dobu schnutí, vodou ředitelné varianty jsou pohodlnější na práci uvnitř bytu a schnou rychleji. Na dveře do bytu je email obvykle lepší volba než křídová barva – vydrží déle bez nutnosti přelakovávání.</p>
              <p>Než barvu koupíš, spočítej si potřebné množství podle plochy a počtu vrstev pomocí naší <Link href="/kalkulacky/kolik-barvy" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačku na barvu</Link> – předejdeš tak situaci, kdy ti barva dojde uprostřed druhé vrstvy a odstín se mírně liší mezi šaržemi.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ barvy</th><th>Příprava povrchu</th><th>Odolnost</th><th>Vhodné na</th></tr></thead>
                  <tbody>
                    <tr><td>Křídová barva</td><td>Minimální (odmaštění)</td><td>Nízká–střední, nutný vosk/lak</td><td>Komody, židle, dekorativní nábytek</td></tr>
                    <tr><td>Akrylátová barva na nábytek</td><td>Broušení + penetrace</td><td>Střední–vysoká</td><td>Skříně, kuchyňské linky, police</td></tr>
                    <tr><td>Email</td><td>Broušení + penetrace</td><td>Vysoká</td><td>Vstupní a interiérové dveře, zárubně, radiátory</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="naradi">
              <h2>Nářadí na malování nábytku</h2>
              <p>Kvalitní nářadí dělá rozdíl hlavně ve výsledném povrchu – levný váleček zanechává bublinky a chlupy, které pak musíš brousit a přetírat.</p>
              <ul>
                <li><strong>Štětec s jemnými syntetickými vlákny</strong> – na rohy, hrany, profilované dveře a detaily kolem kování. Pro vodou ředitelné barvy volej syntetické štětiny, ne přírodní.</li>
                <li><strong>Mini váleček s krátkým vlasem (mohér nebo pěna)</strong> – ideální na rovné plochy dvířek, korpusů a dveřních křídel. Krátký vlas zajistí hladký povrch bez výrazné struktury.</li>
                <li><strong>Stříkací pistole (HVLP)</strong> – nejhladší a nejrychlejší výsledek, vhodná zejména pokud maluješ více kusů nábytku najednou nebo celá dvířka kuchyně. Vyžaduje ale dobré odvětrání, zakrytí okolí a trochu cviku s nastavením trysky a tlaku.</li>
                <li><strong>Brusné houbičky a brusný papír</strong> (zrnitost 180–320) – na přípravu i na lehké přebroušení mezi vrstvami.</li>
                <li><strong>Maskovací páska a fólie</strong> – na ochranu skla, kování a okolních ploch.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud maluješ více dvířek nebo zásuvek, polož je naplocho na kozy nebo stojánky a natírej shora. Svislé natírání zvyšuje riziko stékání a kapek na hranách.</div>
            </section>

            <section id="technika">
              <h2>Technika nanášení – tenké vrstvy jsou klíč</h2>
              <p>Největší chybou začátečníků je snaha „zamalovat to napoprvé" silnou vrstvou. Výsledkem jsou stékance, nerovnoměrný lesk a dlouhé schnutí, při kterém se do barvy nalepí prach.</p>
              <h3>Postup nanášení</h3>
              <ul>
                <li>Barvu před použitím promíchej, případně lehce zřeď podle doporučení výrobce – hustá barva se hůř roztírá a zanechává stopy po štětci.</li>
                <li>Nanášej tenkou, rovnoměrnou vrstvu – u válečku táhni dlouhými tahy ve stejném směru, u štětce postupuj od rohů a hran směrem do plochy.</li>
                <li>Pracuj „za mokra do mokra" – na ploše dvířek nebo dveří se snaž vrstvu dokončit, dokud je okraj ještě vlhký, jinak vzniknou viditelné přechody.</li>
                <li>U stříkací pistole veď trysku rovnoběžně s povrchem ve vzdálenosti cca 15–20 cm a pohybuj celou paží, ne jen zápěstím, aby vrstva byla rovnoměrná.</li>
                <li>Profilované hrany a frézování na dveřích natírej štětcem jako první, plochu pak válečkem nebo stříkáním – předejdeš zatékání barvy do spár.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pracuj v dobře osvětlené místnosti a kontroluj povrch z boku proti světlu – stékance a nerovnoměrnosti se tak odhalí ihned, dokud je ještě snadné je rozetřít.</div>
            </section>

            <section id="susenii">
              <h2>Sušení a počet vrstev</h2>
              <p>Mezi vrstvami je potřeba dodržet dostatečnou pauzu – jinak se vrchní vrstva zvlní nebo strhne tu spodní.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Krok</th><th>Doba schnutí</th><th>Poznámka</th></tr></thead>
                  <tbody>
                    <tr><td>Penetrace</td><td>4–8 hodin</td><td>Dle typu, raději nechat přes noc</td></tr>
                    <tr><td>1. vrstva barvy (akrylát/křída)</td><td>1–2 hodiny na dotek</td><td>Pro další vrstvu počkej 4–6 hodin</td></tr>
                    <tr><td>1. vrstva emailu</td><td>4–6 hodin na dotek</td><td>Pro další vrstvu 16–24 hodin</td></tr>
                    <tr><td>Finální vrstva</td><td>24 hodin</td><td>Plné vytvrzení až 1–2 týdny</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Standardně vystačíš se dvěma tenkými vrstvami barvy. Pokud přetíráš tmavý podklad světlým odstínem, nebo je povrch hodně nasákavý, počítej spíše se třemi vrstvami. Mezi vrstvami je dobré povrch jemně přebrousit brusnou houbičkou se zrnitostí 320–400 – odstraníš tím drobné nerovnosti a další vrstva lépe přilne. Po přebroušení vždy otři prach vlhkým nebo lepicím hadrem, jinak ho zatřeš do nové vrstvy.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> I když je povrch „suchý na dotek", barva ještě dozrává a tvrdne. Nábytek nezatěžuj, nestavěj na něj předměty a dveře nezavírej na doraz minimálně 24–48 hodin po poslední vrstvě, u emailů klidně i déle.</div>
            </section>

            <section id="ochrana">
              <h2>Finální ochrana – vosk, nebo lak?</h2>
              <p>Finální ochranná vrstva prodlužuje životnost nátěru a usnadňuje údržbu – zejména u křídových barev je prakticky povinná.</p>
              <h3>Nábytkový vosk</h3>
              <p>Vosk se nanáší hadříkem nebo voskovacím kartáčem v tenké vrstvě, krátce zaschne a poté se vyleští do hladka. Dodá povrchu jemný hedvábný lesk a příjemný omak, je ale méně odolný vůči vodě a horku – nehodí se na pracovní desky nebo místa, kam se odkládají horké hrnky. Voskovaný povrch je potřeba občas (jednou za 1–2 roky) obnovit.</p>
              <h3>Transparentní lak (akrylátový nebo polyuretanový)</h3>
              <p>Lak vytvoří tvrdý, odolný a omyvatelný povrch, který dobře snáší vlhkost i otěr. Je ideální na kuchyňské linky, dětský nábytek, parapety nebo dveře v koupelně. K dispozici je v matném, saténovém i lesklém provedení – matný lak nejlépe skryje drobné nedokonalosti povrchu.</p>
              <p>Obecné pravidlo: čím víc bude nábytek nebo dveře v kontaktu s rukama, vodou nebo teplem, tím víc se vyplatí lak místo vosku.</p>
            </section>

            <section id="kovani-sklo">
              <h2>Kování, kliky a skleněné výplně</h2>
              <h3>Kovové kování</h3>
              <p>Panty, kliky, zámky a šroubky vždy demontuj – natřené kování vypadá nedbale a navíc se zalepí, takže dveře nebo zásuvky pak drhnou. Pokud je kování staré a chceš ho také obnovit, je lepší ho natřít samostatně sprejovou barvou na kov určenou přímo pro kovové povrchy, ideálně po odmaštění a lehkém přebroušení jemným brusným papírem. Po dokončení malování a před montáží zpět nech veškeré nátěry minimálně 24 hodin zatvrdnout, jinak se kov při montáži otiskne do měkké barvy.</p>
              <p>Pokud po malování dveře vrzají nebo drhnou v zárubni, mrkni na článek <Link href="/blog/jak-namazat-dvere-aby-nevrzaly" style={{ color: "#2a6496", textDecoration: "underline" }}>jak namazat dveře, aby nevrzaly</Link> – nová vrstva barvy totiž může mírně změnit tloušťku dveří v místě pantů.</p>
              <h3>Skleněné výplně</h3>
              <p>Skla ve dveřích nebo vitrínových skříňkách zakryj po celém obvodu maskovací páskou a přesahující fólií nebo papírem. I tenká vrstva barvy zaschlá na skle se odstraňuje obtížně – škrabkou riskuješ poškrábání skla nebo těsnění. Pásku odstraňuj ještě než barva úplně zatvrdne (ideálně do 24 hodin), jinak se může spolu s barvou odloupnout i kousek čerstvého nátěru na hraně.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud renovuješ celé dveře včetně rámu, zvaž, jestli se vyplatí oprava, nebo je čas na výměnu – starší dveře mohou mít prohnutý rám nebo poškozenou výplň, která se po natření znovu projeví. Srovnání najdeš v článku o výměně starých dveří.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Musím starý nábytek vždy brousit před natíráním?", a: "Pokud používáš křídovou barvu, broušení často odpadá – stačí povrch odmastit. U akrylátových barev a emailů je broušení a penetrace nutné, jinak barva nedrží a po čase se loupe." },
                  { q: "Jaká barva je nejlepší na kuchyňskou linku nebo dveře, které se často omývají?", a: "Pro plochy se zvýšeným opotřebením je nejvhodnější akrylátová barva na nábytek nebo email s vyšším leskem, ideálně doplněný transparentním lakem. Křídová barva sama o sobě je méně odolná a vyžaduje vždy ochranný vosk nebo lak." },
                  { q: "Kolik vrstev barvy potřebuji na nábytek nebo dveře?", a: "Obvykle stačí jedna vrstva penetrace (pokud je potřeba) a dvě tenké vrstvy barvy. Tmavé barvy přetírané světlým odstínem nebo silně nasákavé povrchy mohou potřebovat třetí vrstvu." },
                  { q: "Jak dlouho musí barva na nábytku schnout mezi vrstvami?", a: "Akrylátové a křídové barvy na dotek schnou za 1–2 hodiny, na další vrstvu je ale lepší počkat 4–6 hodin. Plné vytvrzení a zatížení nábytku snese až po 24–48 hodinách, u emailů i déle." },
                  { q: "Mám demontovat kování a sklo před natíráním dveří?", a: "Ano, vždy. Kliky, panty a zámky se demontují nebo alespoň zakryjí maskovací páskou, jinak se zalepí barvou a budou drhnout. Skleněné výplně se zamaskují páskou a fólií po celém obvodu." },
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
                <li><a href="#priprava">Příprava povrchu</a></li>
                <li><a href="#vyber-barvy">Výběr barvy</a></li>
                <li><a href="#naradi">Nářadí</a></li>
                <li><a href="#technika">Technika nanášení</a></li>
                <li><a href="#susenii">Sušení a vrstvy</a></li>
                <li><a href="#ochrana">Finální ochrana</a></li>
                <li><a href="#kovani-sklo">Kování a sklo</a></li>
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
