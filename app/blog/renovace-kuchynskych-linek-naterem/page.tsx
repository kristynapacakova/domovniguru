import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak renovovat kuchyňské linky a skříňky novým nátěrem",
  description: "Jak natřít staré kuchyňské skříňky bez výměny linky – příprava povrchu, výběr barvy a finální ochrana.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/renovace-kuchynskych-linek-naterem" },
  openGraph: { title: "Jak renovovat kuchyňské linky a skříňky novým nátěrem", description: "Jak natřít staré kuchyňské skříňky bez výměny linky – příprava povrchu, výběr barvy a finální ochrana.", url: "https://www.domovniguru.cz/blog/renovace-kuchynskych-linek-naterem", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-24T08:00:00Z", modifiedTime: "2026-06-24T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20renovovat%20kuchy%C5%88sk%C3%A9%20linky%20a%20sk%C5%99%C3%AD%C5%88ky%20nov%C3%BDm%20n%C3%A1t%C4%9Brem&cat=blog", width: 1200, height: 630, alt: "Jak renovovat kuchyňské linky a skříňky novým nátěrem" }] },
  twitter: { card: "summary_large_image", title: "Jak renovovat kuchyňské linky a skříňky novým nátěrem", description: "Jak natřít staré kuchyňské skříňky bez výměny linky – příprava povrchu, výběr barvy a finální ochrana." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/renovace-kuchynskych-linek-naterem#article", "headline": "Jak renovovat kuchyňské linky a skříňky novým nátěrem", "datePublished": "2026-06-24T08:00:00Z", "dateModified": "2026-06-24T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["renovace kuchyňské linky", "natřít kuchyňské skříňky", "barva na laminát", "penetrace na laminát", "výměna úchytek", "lakování kuchyňských dvířek"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Malování & barvy", "item": "https://www.domovniguru.cz/blog/kategorie/malovani" }, { "@type": "ListItem", "position": 4, "name": "Renovace kuchyňských linek nátěrem", "item": "https://www.domovniguru.cz/blog/renovace-kuchynskych-linek-naterem" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Vyplatí se přetřít kuchyňskou linku, nebo je lepší ji vyměnit?", "acceptedAnswer": { "@type": "Answer", "text": "Přetření se vyplatí, pokud je korpus skříněk a vnitřní vybavení (zásuvky, panty, pracovní deska) v dobrém technickém stavu a problém je jen v opotřebovaném nebo nemoderním vzhledu dvířek. Nový nátěr vyjde na zlomek ceny výměny linky, obvykle v řádu tisíců korun za celou kuchyň oproti desítkám tisíc za novou linku." } }, { "@type": "Question", "name": "Jde natřít lesklý laminát, aniž by se barva odlupovala?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, ale jen po důkladném odmaštění a zdrsnění povrchu jemným brusným papírem (zrnitost 180–240) a následné penetraci speciálním základem pro hladké a neporézní povrchy (adhezní můstek). Bez tohoto kroku se barva na laminátu během pár týdnů začne odlupovat ve velkých plochách." } }, { "@type": "Question", "name": "Jakou barvu použít na kuchyňské skříňky?", "acceptedAnswer": { "@type": "Answer", "text": "Nejlepší jsou speciální kuchyňské nebo lakýrnické barvy na bázi akrylátu nebo polyuretanu, určené přímo pro kuchyňský a koupelnový nábytek – jsou odolné proti vlhkosti, mastnotě a otěru a po zaschnutí se dají omývat. Běžná interiérová barva na zdi tyto nároky nesplňuje a rychle se opotřebuje." } }, { "@type": "Question", "name": "Jak natřít dvířka bez šmouh a stop po štětci?", "acceptedAnswer": { "@type": "Answer", "text": "Nejhladší výsledek dá pěnový váleček s jemnou strukturou nebo stříkací pistole, klasický štětec se hodí jen na rohy a profilované hrany. Nanášej víc tenkých vrstev místo jedné silné a každou vrstvu nech zcela proschnout, než nanášíš další – silná vrstva zatéká a vytváří viditelné šmouhy." } }, { "@type": "Question", "name": "Jak dlouho po natření nesmím dvířka zavěsit zpátky?", "acceptedAnswer": { "@type": "Answer", "text": "I když se barva na dotek zdá suchá už po několika hodinách, plné vytvrzení a maximální odolnost proti otěru a vlhkosti trvá u většiny kuchyňských barev 5–7 dní. Dvířka je proto lepší nechat ležet naplocho minimálně 48 hodin a se zavěšením a běžným používáním vyčkat alespoň týden." } }] }] };

const RELATED = [
  { title: "Křídová barva na nábytek – postup pro vintage look", href: "/blog/kridova-barva-na-nabytek-postup", read: "6 min" },
  { title: "Jak vybrat štětce a válečky pro různé typy nátěrů", href: "/blog/vyber-stetcu-a-valecku", read: "5 min" },
  { title: "Jak odstranit starou barvu ze zdi", href: "/blog/jak-odstranit-starou-barvu", read: "4 min" },
  { title: "Jak používat stříkací pistoli na nátěry", href: "/blog/jak-pouzivat-strikaci-pistoli", read: "5 min" },
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
              <span>Renovace kuchyňských linek nátěrem</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování & barvy</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak renovovat kuchyňské linky a skříňky novým nátěrem</h1>
              <p className="article-lead">Stará kuchyňská linka v dobrém technickém stavu, ale s nevzhlednými nebo zastaralými dvířky, nemusí skončit na skládce. Nový nátěr na laminát, dřevotřísku nebo masivní dřevo dokáže kuchyni vizuálně proměnit za zlomek ceny výměny a o víkendu navíc. Tady je postup, jak na to bez šmouh a odlupující se barvy.</p>
              <div className="article-meta-row"><span>Aktualizováno: 24. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#kdy">Kdy se přetření vyplatí</a></li>
                <li><a href="#demontaz">Demontáž dvířek a kování</a></li>
                <li><a href="#odmasteni">Odmaštění a broušení povrchu</a></li>
                <li><a href="#penetrace">Penetrace na hladké povrchy</a></li>
                <li><a href="#vyberbarvy">Výběr kvalitní barvy</a></li>
                <li><a href="#technika">Technika nanášení bez šmouh</a></li>
                <li><a href="#uchytky">Výměna úchytek</a></li>
                <li><a href="#ochranafinal">Finální ochrana a vytvrzení</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="kdy">
              <h2>Kdy se vyplatí přetřít linku místo výměny</h2>
              <p>Přetření má smysl, pokud je samotná konstrukce linky v pořádku – korpusy skříněk nejsou poškozené vlhkostí, zásuvky a panty fungují a pracovní deska je v přijatelném stavu. Problém je jen v opotřebovaném, poškrábaném nebo prostě nemoderním vzhledu dvířek a čel zásuvek.</p>
              <ul>
                <li><strong>Cena</strong> – nátěr celé kuchyně vyjde obvykle na zlomek ceny nové linky, v řádu jednotek tisíc korun za barvu, penetraci a drobné vybavení</li>
                <li><strong>Čas</strong> – víkendová práce oproti týdnům čekání na novou kuchyň a její montáž</li>
                <li><strong>Ekologie a odpad</strong> – nemusíš likvidovat funkční korpusy skříněk</li>
                <li><strong>Limity</strong> – přetření nezmění rozměry ani rozmístění skříněk, a pokud je povrch dvířek silně poškozený (bobtnání dřevotřísky od vlhkosti, prasklý laminát), nátěr problém nevyřeší</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Než se rozhodneš pro nátěr, zkontroluj hrany dvířek zblízka – pokud se laminát na hranách odlupuje nebo dřevotříska pod ním bobtná, je to znak vlhkosti, kterou samotná barva nezakryje ani nevyřeší.</div>
            </section>

            <section id="demontaz">
              <h2>Demontáž dvířek a kování</h2>
              <p>Natírání na místě je vždy horší volba než práce na sundaných dvířkách položených na vodorovné ploše – nátěr je rovnoměrnější a nezatéká do spár u pantů.</p>
              <ul>
                <li><strong>Vyšroubuj všechna dvířka a čela zásuvek</strong>, panty si označ lihovým fixem nebo štítkem, ke kterým skříňkám patří</li>
                <li><strong>Sundej úchytky a kliky</strong> – pokud je plánuješ vyměnit, zkontroluj rozteč šroubů, aby nové úchytky seděly do stejných otvorů, nebo si otvory připrav na vytmelení</li>
                <li><strong>Panty důkladně vyčisti</strong> odmašťovačem, stará mastnota z kuchyně se na ně lepí roky a brání hladkému zavírání</li>
                <li><strong>Připrav si dostatek místa na schnutí</strong> – ideálně v garáži nebo dobře větraném prostoru, kde dvířka mohou leže nerušeně zaschnout</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Na rub dvířek vlož krátké vruty nebo hřebíky (hlavou nahoru), na kterých dvířka leží – nedotýkají se tak podložky a nepřilepí se k ní čerstvým nátěrem.</div>
            </section>

            <section id="odmasteni">
              <h2>Odmaštění a broušení laminátu nebo dřeva</h2>
              <p>Kuchyňská dvířka jsou roky vystavená mastnotě z vaření, a i když se nezdají mastná na pohled, na povrchu je neviditelný film, který brání přilnavosti nátěru.</p>
              <ul>
                <li><strong>Odmaštění</strong> – umyj povrch odmašťovačem nebo roztokem sody na praní, opláchni čistou vodou a nech zcela proschnout</li>
                <li><strong>Broušení laminátu a melaminu</strong> – jemný brusný papír (zrnitost 180–240) zdrsní hladký, neporézní povrch, aby na něm penetrace a barva přilnula; nejde o agresivní broušení, jen o zmatnění lesku</li>
                <li><strong>Broušení masivního dřeva nebo dýhy</strong> – pokud má dvířko starý lak nebo lesklý nátěr, postupuj stejně jako u jiných dřevěných povrchů: hrubší zrno na odstranění lesku, jemnější na finální zdrsnění</li>
                <li><strong>Otři prach</strong> po broušení vlhkým hadrem a nech znovu proschnout, prach pod nátěrem vytváří zrnitý povrch</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud je laminát extrémně lesklý a hladký, broušení doplň ještě otřením isopropylalkoholem – odstraní zbytky mastnoty, které odmašťovač nestihl plně rozpustit.</div>
            </section>

            <section id="penetrace">
              <h2>Penetrace na hladké povrchy</h2>
              <p>Standardní penetrace na zeď není pro laminát a melamin dostatečná – tyto povrchy jsou neporézní a běžný základ na nich nedrží. Potřebný je speciální adhezní (přilnavostní) základ určený přímo pro hladké a nesavé povrchy, jako je laminát, sklo, kov nebo lakované dřevo.</p>
              <ul>
                <li><strong>Adhezní základ</strong> vytváří mikroskopicky drsný film, na který se další vrstvy barvy chemicky i mechanicky lépe naváží</li>
                <li><strong>Nanášej tenkou, rovnoměrnou vrstvu</strong> štětcem nebo pěnovým válečkem, silná vrstva základu se chová podobně jako silná vrstva barvy – zatéká a tvoří šmouhy</li>
                <li><strong>Doba zaschnutí</strong> se liší podle produktu, obvykle 1–24 hodin – řiď se přesně podle obalu, příliš brzké přetření novou vrstvou narušuje přilnavost</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Bez tohoto kroku se nátěr na laminátu i přes pečlivé broušení často odlupuje v celých plochách během prvních týdnů používání – adhezní základ je jediný způsob, jak se tomu vyhnout.</div>
            </section>

            <section id="vyberbarvy">
              <h2>Výběr kvalitní krycí barvy</h2>
              <p>Kuchyňské skříňky jsou denně vystavené mastnotě, vlhkosti a otěru rukama, proto běžná interiérová barva na zdi nestačí.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ barvy</th><th>Vhodné pro</th><th>Odolnost</th></tr></thead>
                  <tbody>
                    <tr><td>Kuchyňská/koupelnová barva</td><td>Laminát, dřevotříska, dřevo</td><td>Vysoká odolnost proti vlhkosti, otěru a omytí</td></tr>
                    <tr><td>Lakýrnická (polyuretanová) barva</td><td>Dřevo, MDF, dýha</td><td>Velmi vysoká, tvrdý a hladký povrch jako tovární lak</td></tr>
                    <tr><td>Křídová barva</td><td>Masivní dřevo, MDF</td><td>Nižší bez vrchního laku, potřebuje ochranný vosk nebo lak</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Pro klasický hladký a odolný vzhled zvol kuchyňskou nebo lakýrnickou barvu na bázi akrylátu či polyuretanu – po zaschnutí snese omývání i běžné otírání mastných skvrn. Pokud máš v plánu spíš venkovský nebo vintage styl s patinou, vyplatí se podívat na postup s křídovou barvou, která ale vždy potřebuje finální ochranný vosk nebo lak.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Vyhni se levným univerzálním sprejům z hobby marketů – na denně používaných kuchyňských dvířkách se opotřebují mnohem rychleji než specializovaná kuchyňská barva.</div>
            </section>

            <section id="technika">
              <h2>Technika nanášení bez šmouh</h2>
              <p>Hladký výsledek bez stop po štětci je u kuchyňských dvířek důležitější než u stěny, protože se na ně dívá zblízka a denně.</p>
              <ul>
                <li><strong>Pěnový váleček s jemnou strukturou</strong> dává nejhladší povrch z běžně dostupných nástrojů, klasický váleček s dlouhým vlasem zanechává viditelnou strukturu</li>
                <li><strong>Štětec použij jen na rohy a profilované hrany</strong>, kam se váleček nedostane, a okamžitě po něm přejdi válečkem, aby se stopy po štětci rozetřely</li>
                <li><strong>Stříkací pistole</strong> dává nejhladší možný výsledek, pokud máš vybavení a prostor – postup najdeš v samostatném článku o používání stříkací pistole</li>
                <li><strong>Více tenkých vrstev</strong> místo jedné silné – obvykle dvě až tři vrstvy s dostatečnou dobou zaschnutí mezi nimi</li>
                <li><strong>Mezi vrstvami lehce přebrus</strong> velmi jemným papírem (zrnitost 320–400) a setři prach – výsledný povrch bude hladší jako po lakování</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Dvířka natírej naležato, ne svisle zavěšená – u svislé plochy barva snáz stéká a vytváří kapky na spodním okraji.</div>
            </section>

            <section id="uchytky">
              <h2>Výměna úchytek pro nový vzhled</h2>
              <p>Nové úchytky a kliky umí proměnit vzhled kuchyně téměř stejně výrazně jako nová barva, a je to nejlevnější část celé renovace.</p>
              <ul>
                <li><strong>Stejná rozteč otvorů</strong> – nejjednodušší varianta, nové úchytky zapadnou do původních děr bez vrtání</li>
                <li><strong>Jiná rozteč</strong> – staré otvory je nutné vytmelit dřevěným tmelem, přebrousit a přetřít, nové otvory vyvrtat na přesně vyměřeném místě</li>
                <li><strong>Styl úchytek</strong> – jednoduché rovné madlo nebo úchytka v matném kovu (černá, mosaz, broušená ocel) okamžitě dodá modernější vzhled i staré lince</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud měníš rozteč úchytek, vyvrtej zkušební otvor nejdřív do kousku odpadní dřevotřísky a přilož úchytku – ověříš si přesné rozměry dřív, než vrtáš do hotových natřených dvířek.</div>
            </section>

            <section id="ochranafinal">
              <h2>Finální lak a ochrana proti vlhkosti a otěru</h2>
              <p>I kvalitní kuchyňská barva má delší životnost s vrchní ochrannou vrstvou, hlavně na nejvíc zatížených místech.</p>
              <ul>
                <li><strong>Transparentní lak na vrchní vrstvu</strong> (vodou ředitelný polyuretanový) zvyšuje odolnost proti otěru rukama a omývání, doporučuje se hlavně u světlých a matných barev, které jsou na otisky prstů citlivější</li>
                <li><strong>Doba plného vytvrzení</strong> – i když je barva na dotek suchá za pár hodin, plnou odolnost proti otěru a vlhkosti dosáhne většina kuchyňských barev až po 5–7 dnech</li>
                <li><strong>Dvířka nezavěšuj zpět dřív než po 48 hodinách</strong> od poslední vrstvy a běžné používání (otevírání, opírání rukou) odlož o týden, pokud to provoz domácnosti dovolí</li>
                <li><strong>Místa kolem dřezu a varné desky</strong> jsou nejvíc namáhaná vlhkostí a teplem – zvaž tam silnější nebo dvojnásobnou vrstvu ochranného laku</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Vyplatí se přetřít kuchyňskou linku, nebo je lepší ji vyměnit?", a: "Přetření se vyplatí, pokud je korpus skříněk a vnitřní vybavení (zásuvky, panty, pracovní deska) v dobrém technickém stavu a problém je jen v opotřebovaném nebo nemoderním vzhledu dvířek. Nový nátěr vyjde na zlomek ceny výměny linky, obvykle v řádu tisíců korun za celou kuchyň oproti desítkám tisíc za novou linku." },
                  { q: "Jde natřít lesklý laminát, aniž by se barva odlupovala?", a: "Ano, ale jen po důkladném odmaštění a zdrsnění povrchu jemným brusným papírem (zrnitost 180–240) a následné penetraci speciálním základem pro hladké a neporézní povrchy (adhezní můstek). Bez tohoto kroku se barva na laminátu během pár týdnů začne odlupovat ve velkých plochách." },
                  { q: "Jakou barvu použít na kuchyňské skříňky?", a: "Nejlepší jsou speciální kuchyňské nebo lakýrnické barvy na bázi akrylátu nebo polyuretanu, určené přímo pro kuchyňský a koupelnový nábytek – jsou odolné proti vlhkosti, mastnotě a otěru a po zaschnutí se dají omývat. Běžná interiérová barva na zdi tyto nároky nesplňuje a rychle se opotřebuje." },
                  { q: "Jak natřít dvířka bez šmouh a stop po štětci?", a: "Nejhladší výsledek dá pěnový váleček s jemnou strukturou nebo stříkací pistole, klasický štětec se hodí jen na rohy a profilované hrany. Nanášej víc tenkých vrstev místo jedné silné a každou vrstvu nech zcela proschnout, než nanášíš další – silná vrstva zatéká a vytváří viditelné šmouhy." },
                  { q: "Jak dlouho po natření nesmím dvířka zavěsit zpátky?", a: "I když se barva na dotek zdá suchá už po několika hodinách, plné vytvrzení a maximální odolnost proti otěru a vlhkosti trvá u většiny kuchyňských barev 5–7 dní. Dvířka je proto lepší nechat ležet naplocho minimálně 48 hodin a se zavěšením a běžným používáním vyčkat alespoň týden." },
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
                <li><a href="#kdy">Kdy se přetření vyplatí</a></li>
                <li><a href="#demontaz">Demontáž dvířek</a></li>
                <li><a href="#odmasteni">Odmaštění a broušení</a></li>
                <li><a href="#penetrace">Penetrace na hladké povrchy</a></li>
                <li><a href="#vyberbarvy">Výběr barvy</a></li>
                <li><a href="#technika">Technika nanášení</a></li>
                <li><a href="#uchytky">Výměna úchytek</a></li>
                <li><a href="#ochranafinal">Finální ochrana</a></li>
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
