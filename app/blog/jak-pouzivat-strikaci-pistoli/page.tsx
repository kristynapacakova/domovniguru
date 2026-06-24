import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak používat stříkací pistoli na nátěry",
  description: "Výběr stříkací pistole, ředění barvy, technika stříkání a údržba pistole po použití.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-pouzivat-strikaci-pistoli" },
  openGraph: { title: "Jak používat stříkací pistoli na nátěry", description: "Výběr stříkací pistole, ředění barvy, technika stříkání a údržba pistole po použití.", url: "https://www.domovniguru.cz/blog/jak-pouzivat-strikaci-pistoli", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-24T08:00:00Z", modifiedTime: "2026-06-24T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20pou%C5%BE%C3%ADvat%20st%C5%99%C3%ADkac%C3%AD%20pistoli%20na%20n%C3%A1t%C4%9Bry&cat=blog", width: 1200, height: 630, alt: "Jak používat stříkací pistoli na nátěry" }] },
  twitter: { card: "summary_large_image", title: "Jak používat stříkací pistoli na nátěry", description: "Výběr stříkací pistole, ředění barvy, technika stříkání a údržba pistole po použití." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/jak-pouzivat-strikaci-pistoli#article", "headline": "Jak používat stříkací pistoli na nátěry", "datePublished": "2026-06-24T08:00:00Z", "dateModified": "2026-06-24T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["stříkací pistole na barvu", "jak ředit barvu do stříkací pistole", "HVLP pistole", "airless stříkání", "technika stříkání barvy", "čištění stříkací pistole"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Malování & barvy", "item": "https://www.domovniguru.cz/blog/kategorie/malovani" }, { "@type": "ListItem", "position": 4, "name": "Jak používat stříkací pistoli", "item": "https://www.domovniguru.cz/blog/jak-pouzivat-strikaci-pistoli" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Kdy se vyplatí stříkat barvu místo malování štětcem nebo válečkem?", "acceptedAnswer": { "@type": "Answer", "text": "Stříkání má smysl u velkých rovných ploch (fasáda, ploty, garážová vrata), u členitých povrchů s mnoha škvírami (mřížoví, žaluzie, radiátory) nebo když potřebuješ dokonale hladký povrch bez stop po štětci, například u nábytku nebo dveří. U malých ploch a rohů místností je oproti tomu váleček a štětec rychlejší a méně náročný na přípravu okolí." } }, { "@type": "Question", "name": "Musí se barva do stříkací pistole ředit?", "acceptedAnswer": { "@type": "Answer", "text": "Většina barev z plechovky je na stříkání příliš hustá a musí se naředit podle doporučení výrobce, obvykle vodou u akrylových barev nebo ředidlem u olejových a syntetických nátěrů. Správnou viskozitu zkontroluješ viskozimetrickým pohárkem nebo jednoduchou zkouškou – barva by měla z lžičky odkapávat v souvislém proudu, ne kapat po kapkách ani lít se jako voda." } }, { "@type": "Question", "name": "Proč mi ze stříkací pistole barva zatéká a tvoří kapky?", "acceptedAnswer": { "@type": "Answer", "text": "Zatékání nejčastěji způsobuje příliš pomalý pohyb pistole, příliš krátká vzdálenost od povrchu nebo nadměrné množství naředěné barvy v jedné vrstvě. Pomáhá udržovat rovnoměrnou rychlost pohybu, vzdálenost trysky od povrchu 15–25 cm a nanášet víc tenčích vrstev místo jedné silné." } }, { "@type": "Question", "name": "Jaký respirátor je potřeba při stříkání barvy?", "acceptedAnswer": { "@type": "Answer", "text": "Při stříkání vznikají drobné kapénky barvy a rozpouštědel rozptýlené ve vzduchu, na běžnou roušku nebo látkový respirátor se nelze spolehnout. Potřebný je respirátor s filtrem alespoň třídy FFP2, ideálně FFP3 nebo poloobličejová maska s kombinovaným filtrem proti částicím i parám rozpouštědel, hlavně při práci s olejovými a syntetickými barvami." } }, { "@type": "Question", "name": "Jak vyčistím stříkací pistoli po použití?", "acceptedAnswer": { "@type": "Answer", "text": "Nejdřív z nádobky vylij zbytek barvy, poté pistolí prostříkej čistou vodu (u vodou ředitelných barev) nebo ředidlo (u olejových barev), dokud nevytéká čirá kapalina. Rozeber trysku, jehlu a filtr a propláchni je samostatně v čisticí kapalině, případně starým štětečkem odstraň zaschlé zbytky. Nikdy nenechávej barvu zaschnout v pistoli přes noc, zaschlá barva ucpává trysku a kanálky natrvalo." } }] }] };

const RELATED = [
  { title: "Jak vybrat štětce a válečky pro různé typy nátěrů", href: "/blog/vyber-stetcu-a-valecku", read: "5 min" },
  { title: "Jak natřít venkovní dřevo – lazura, olej nebo lak", href: "/blog/natrit-venkovni-drevo", read: "6 min" },
  { title: "Jak malovat zeď – kompletní průvodce pro začátečníky 2026", href: "/blog/jak-malovat-zed", read: "5 min" },
  { title: "Jak správně skladovat a uchovat zbylou barvu", href: "/blog/jak-skladovat-zbylou-barvu", read: "6 min" },
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
              <span>Jak používat stříkací pistoli</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování & barvy</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak používat stříkací pistoli na nátěry</h1>
              <p className="article-lead">Stříkací pistole umí nanést dokonale hladký nátěr bez stop po štětci a ušetří spoustu času na velkých nebo členitých plochách – ale jen pokud víš, jak barvu naředit, jak pistoli nastavit a jakou techniku stříkání použít. Špatně nastavená pistole umí během minuty zničit víc, než kolik práce ušetří. Tady je kompletní postup.</p>
              <div className="article-meta-row"><span>Aktualizováno: 24. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#typy">Typy stříkacích pistolí</a></li>
                <li><a href="#kdyse">Kdy se stříkání vyplatí</a></li>
                <li><a href="#redeni">Příprava a ředění barvy</a></li>
                <li><a href="#nastaveni">Nastavení tlaku a trysky</a></li>
                <li><a href="#technika">Technika stříkání</a></li>
                <li><a href="#ochrana">Ochrana okolí a respirátor</a></li>
                <li><a href="#cisteni">Čištění pistole po použití</a></li>
                <li><a href="#chyby">Časté chyby</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="typy">
              <h2>Typy stříkacích pistolí</h2>
              <p>Na trhu jsou tři základní kategorie stříkacích zařízení a každá se hodí na jinou práci.</p>
              <ul>
                <li><strong>HVLP pistole (High Volume Low Pressure)</strong> – pracuje s velkým objemem vzduchu při nízkém tlaku, nanáší tenkou a přesnou vrstvu s minimem rozprašování do okolí; ideální pro nábytek, dveře a detailní práce v interiéru</li>
                <li><strong>Airless stříkání</strong> – tlačí neředěnou nebo jen lehce ředěnou barvu hadicí vysokým tlakem bez stlačeného vzduchu; rychlé pokrytí velkých ploch jako fasáda nebo plot, ale náročnější na čistou techniku a větší přesah rozstřiku</li>
                <li><strong>Kompresorové (vzduchové) pistole</strong> – klasická stříkací pistole napojená na kompresor, univerzální použití od auto-laků po nátěry dřeva, vyžaduje výkonnější kompresor a víc zkušeností s nastavením</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pro první zkušenost se stříkáním doma zvol HVLP – odpouští víc chyb v technice a má menší přesah rozstřiku než airless systém.</div>
            </section>

            <section id="kdyse">
              <h2>Kdy se stříkání vyplatí vs. štětec nebo váleček</h2>
              <p>Stříkání není automaticky lepší než klasické nanášení – má smysl tam, kde vynikají jeho přednosti.</p>
              <ul>
                <li><strong>Velké rovné plochy</strong> – fasáda, plot, garážová vrata – stříkání je výrazně rychlejší než váleček</li>
                <li><strong>Členité povrchy</strong> – mřížoví, žaluzie, radiátory, židle s laťkami – štětec se do všech škvír nedostane stejně rovnoměrně</li>
                <li><strong>Dokonale hladký vzhled</strong> – nábytek, dveře, kuchyňské linky – stříkání nezanechává stopy po štětci ani válečku</li>
                <li><strong>Malé plochy a rohy</strong> – tady je naopak štětec rychlejší, protože stříkání vyžaduje zakrytí celého okolí a delší přípravu</li>
              </ul>
              <p>Pokud řešíš renovaci kuchyňských skříněk nebo podobný menší kus nábytku, stříkací pistole dá nejhladší výsledek, ale i klasický váleček s dobrou technikou zvládne velmi solidní povrch bez nutnosti stříkací výbavy.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Stříkání má vyšší spotřebu barvy než váleček – část nátěru vždy odletí mimo povrch jako mlha. Počítej s rezervou barvy navíc 15–25 % oproti klasickým metodám.</div>
            </section>

            <section id="redeni">
              <h2>Příprava a ředění barvy</h2>
              <p>Barva z plechovky je obvykle příliš hustá na to, aby prošla tryskou v rovnoměrném proudu. Než začneš stříkat, je potřeba ji naředit na správnou viskozitu.</p>
              <ul>
                <li><strong>Akrylové a vodou ředitelné barvy</strong> – ředí se čistou vodou, obvykle 5–15 % objemu podle doporučení výrobce a typu pistole</li>
                <li><strong>Olejové a syntetické barvy</strong> – ředí se příslušným ředidlem (technický benzin, syntetické ředidlo), poměr najdeš na obalu barvy</li>
                <li><strong>Zkouška viskozity</strong> – pokud nemáš viskozimetrický pohárek, vyzkoušej barvu na lžičce: měla by stékat v souvislém tenkém proudu, ne padat po kapkách (příliš hustá) ani téct jako voda (příliš naředěná)</li>
                <li><strong>Přefiltruj barvu</strong> přes nylonovou síťku nebo punčochu před nalitím do nádobky – i drobné zaschlé kousky barvy umí ucpat trysku</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Vždy si naředi jen tolik barvy, kolik na práci skutečně spotřebuješ. Naředěná barva se v plechovce nedá uložit stejně dobře jako neředěná, viz článek o skladování zbylé barvy.</div>
            </section>

            <section id="nastaveni">
              <h2>Nastavení tlaku a trysky</h2>
              <p>Správné nastavení pistole je klíčové pro rovnoměrný nátěr bez kapek a šmouh.</p>
              <ul>
                <li><strong>Velikost trysky</strong> – menší trysky (1,0–1,4 mm) pro tenké barvy a laky, větší (1,8–2,5 mm) pro hustší krycí barvy a fasádní nátěry</li>
                <li><strong>Tvar rozstřiku</strong> – kruhový vzorek pro malé detaily a rohy, plochý (oválný) vzorek pro velké rovné plochy</li>
                <li><strong>Tlak vzduchu</strong> – začni na nižším nastavení doporučeném výrobcem a postupně zvyšuj, dokud nátěr nevychází rovnoměrně bez hrubých kapek</li>
                <li><strong>Vždy nejdřív vyzkoušej na kartonu nebo neviditelném místě</strong>, než začneš stříkat finální povrch – ušetříš si opravu kapek a nerovnoměrné vrstvy</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud z trysky vychází nátěr nerovnoměrně nebo „prská", obvykle je to ucpaný filtr nebo zaschlá barva v jehle – pistoli rozeber a vyčisti, než budeš dál upravovat tlak.</div>
            </section>

            <section id="technika">
              <h2>Technika stříkání</h2>
              <p>Samotná technika pohybu pistole rozhoduje o tom, jestli bude nátěr rovnoměrný, nebo se na něm objeví zatékání a pruhy.</p>
              <ul>
                <li><strong>Vzdálenost od povrchu</strong> – udržuj konstantně 15–25 cm po celou dobu tahu, kolísání vzdálenosti způsobuje nerovnoměrnou vrstvu</li>
                <li><strong>Rychlost pohybu</strong> – plynulý, rovnoměrný tah ruky, ne příliš pomalý (zatékání) ani příliš rychlý (tenká, nedostatečná vrstva)</li>
                <li><strong>Pistoli vždy veď rovnoběžně s povrchem</strong>, ne obloukem ze zápěstí – obloukový pohyb nanáší víc barvy uprostřed tahu a méně na okrajích</li>
                <li><strong>Překryv jednotlivých tahů</strong> – každý další tah by měl překrývat předchozí o cca 50 %, aby nezůstaly světlejší pruhy mezi tahy</li>
                <li><strong>Spínač stříkej až po začátku pohybu</strong> a pusť ho ještě před zastavením ruky – předejdeš nahromadění barvy na začátku a konci tahu</li>
                <li><strong>Více tenkých vrstev</strong> je vždy lepší než jedna silná – nech každou vrstvu zaschnout podle doporučení výrobce před nanesením další</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Než začneš stříkat skutečný povrch, najeď tah na kartonu vedle něj a teprve uprostřed pohybu, kdy je proud stabilní, přejeď na natíraný povrch.</div>
            </section>

            <section id="ochrana">
              <h2>Ochrana okolí a respirátor</h2>
              <p>Stříkání vytváří jemnou mlhu barvy, která se šíří mnohem dál než při natírání štětcem nebo válečkem, proto je příprava okolí zásadní.</p>
              <ul>
                <li><strong>Zakryj vše v okolí</strong> minimálně 2–3 metry od místa stříkání fólií nebo plachtou, včetně podlahy, oken a nábytku</li>
                <li><strong>Stříkej za bezvětří nebo ve uzavřeném, větraném prostoru</strong> – venku i mírný vítr odnese mlhu barvy na sousední plochy nebo auta</li>
                <li><strong>Respirátor minimálně třídy FFP2</strong>, lépe FFP3 nebo poloobličejová maska s filtrem proti parám u olejových a syntetických barev</li>
                <li><strong>Ochranné brýle</strong> chrání oči před odraženou mlhou barvy, hlavně při stříkání nad hlavou nebo ve stísněném prostoru</li>
                <li><strong>Pracovní oděv s dlouhým rukávem</strong>, barva se na pokožce a ve vlasech usazuje rychleji, než by se čekalo</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud stříkáš v garáži nebo dílně, zajisti průvan – otevřené dveře na obou stranách prostoru pomáhají odvádět výpary a zrychlují zasychání nátěru.</div>
            </section>

            <section id="cisteni">
              <h2>Čištění pistole po použití</h2>
              <p>Stříkací pistole je přesný nástroj s úzkými kanálky, které zaschlá barva ucpe natrvalo. Čištění hned po práci je nutnost, ne volitelný krok.</p>
              <ol>
                <li><strong>Vylij zbytek barvy</strong> z nádobky zpět do plechovky nebo ji ulož podle pravidel pro skladování zbylé barvy</li>
                <li><strong>Prostříkej čistou vodu</strong> (u vodou ředitelných barev) nebo vhodné ředidlo (u olejových barev) pistolí, dokud nevytéká čirá kapalina</li>
                <li><strong>Rozeber trysku, jehlu a filtr</strong> podle návodu k pistoli a propláchni je samostatně v čisticí kapalině</li>
                <li><strong>Zaschlé zbytky odstraň</strong> starým měkkým štětečkem, nikdy ne kovovým předmětem, který by mohl poškodit přesný otvor trysky</li>
                <li><strong>Před uložením vše osuš a smontuj zpět</strong>, pohyblivé části lehce promaž doporučeným olejem podle návodu</li>
              </ol>
              <div className="article-tip"><strong>💡 Tip:</strong> Nikdy nenechávej barvu v pistoli zaschnout přes noc, ani „jen na pár hodin". Zaschlá barva v jehle a trysce se často nedá odstranit jinak než výměnou součástky.</div>
            </section>

            <section id="chyby">
              <h2>Časté chyby a jak je opravit</h2>
              <ul>
                <li><strong>Zatékání a kapky</strong> – příliš pomalý pohyb, příliš krátká vzdálenost od povrchu nebo příliš silná vrstva najednou; zpomal pohyb ruky a snižuj tloušťku jednotlivé vrstvy</li>
                <li><strong>Nerovnoměrná vrstva, „pruhy"</strong> – nedostatečný překryv jednotlivých tahů; zvyš překryv na 50 % a udržuj konstantní vzdálenost</li>
                <li><strong>Hrubý, „pomerančový" povrch</strong> – barva je příliš hustá nebo tlak příliš nízký; naředi barvu o trochu víc nebo zvyš tlak</li>
                <li><strong>Příliš velký rozstřik mimo plochu</strong> – tlak je nastaven příliš vysoko; postupně ho snižuj, dokud rozstřik nezůstává v cílené ploše</li>
                <li><strong>Prskání a nerovnoměrný proud</strong> – ucpaný filtr nebo vzduchová bublina v hadici; vyčisti filtr a zkontroluj přívod barvy</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Kdy se vyplatí stříkat barvu místo malování štětcem nebo válečkem?", a: "Stříkání má smysl u velkých rovných ploch (fasáda, ploty, garážová vrata), u členitých povrchů s mnoha škvírami (mřížoví, žaluzie, radiátory) nebo když potřebuješ dokonale hladký povrch bez stop po štětci, například u nábytku nebo dveří. U malých ploch a rohů místností je oproti tomu váleček a štětec rychlejší a méně náročný na přípravu okolí." },
                  { q: "Musí se barva do stříkací pistole ředit?", a: "Většina barev z plechovky je na stříkání příliš hustá a musí se naředit podle doporučení výrobce, obvykle vodou u akrylových barev nebo ředidlem u olejových a syntetických nátěrů. Správnou viskozitu zkontroluješ viskozimetrickým pohárkem nebo jednoduchou zkouškou – barva by měla z lžičky odkapávat v souvislém proudu, ne kapat po kapkách ani lít se jako voda." },
                  { q: "Proč mi ze stříkací pistole barva zatéká a tvoří kapky?", a: "Zatékání nejčastěji způsobuje příliš pomalý pohyb pistole, příliš krátká vzdálenost od povrchu nebo nadměrné množství naředěné barvy v jedné vrstvě. Pomáhá udržovat rovnoměrnou rychlost pohybu, vzdálenost trysky od povrchu 15–25 cm a nanášet víc tenčích vrstev místo jedné silné." },
                  { q: "Jaký respirátor je potřeba při stříkání barvy?", a: "Při stříkání vznikají drobné kapénky barvy a rozpouštědel rozptýlené ve vzduchu, na běžnou roušku nebo látkový respirátor se nelze spolehnout. Potřebný je respirátor s filtrem alespoň třídy FFP2, ideálně FFP3 nebo poloobličejová maska s kombinovaným filtrem proti částicím i parám rozpouštědel, hlavně při práci s olejovými a syntetickými barvami." },
                  { q: "Jak vyčistím stříkací pistoli po použití?", a: "Nejdřív z nádobky vylij zbytek barvy, poté pistolí prostříkej čistou vodu (u vodou ředitelných barev) nebo ředidlo (u olejových barev), dokud nevytéká čirá kapalina. Rozeber trysku, jehlu a filtr a propláchni je samostatně v čisticí kapalině, případně starým štětečkem odstraň zaschlé zbytky. Nikdy nenechávej barvu zaschnout v pistoli přes noc, zaschlá barva ucpává trysku a kanálky natrvalo." },
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
                <li><a href="#typy">Typy stříkacích pistolí</a></li>
                <li><a href="#kdyse">Kdy se stříkání vyplatí</a></li>
                <li><a href="#redeni">Ředění barvy</a></li>
                <li><a href="#nastaveni">Nastavení tlaku a trysky</a></li>
                <li><a href="#technika">Technika stříkání</a></li>
                <li><a href="#ochrana">Ochrana okolí</a></li>
                <li><a href="#cisteni">Čištění pistole</a></li>
                <li><a href="#chyby">Časté chyby</a></li>
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
