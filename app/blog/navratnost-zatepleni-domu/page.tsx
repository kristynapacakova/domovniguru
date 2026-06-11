import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Zateplení domu: kolik stojí a za jak dlouho se vrátí",
  description: "Náklady na zateplení fasády, střechy a oken, dostupné dotace a reálná doba návratnosti investice.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/navratnost-zatepleni-domu" },
  openGraph: { title: "Zateplení domu: kolik stojí a za jak dlouho se vrátí", description: "Náklady na zateplení fasády, střechy a oken, dostupné dotace a reálná doba návratnosti investice.", url: "https://www.domovniguru.cz/blog/navratnost-zatepleni-domu", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-11T08:00:00Z", modifiedTime: "2026-06-11T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Zateplen%C3%AD%20domu%3A%20kolik%20stoj%C3%AD%20a%20za%20jak%20dlouho%20se%20vr%C3%A1t%C3%AD&cat=blog", width: 1200, height: 630, alt: "Zateplení domu: kolik stojí a za jak dlouho se vrátí" }] },
  twitter: { card: "summary_large_image", title: "Zateplení domu: kolik stojí a za jak dlouho se vrátí", description: "Náklady na zateplení fasády, střechy a oken, dostupné dotace a reálná doba návratnosti investice." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/navratnost-zatepleni-domu#article", "headline": "Zateplení domu: kolik stojí a za jak dlouho se vrátí", "datePublished": "2026-06-11T08:00:00Z", "dateModified": "2026-06-11T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["návratnost zateplení", "cena zateplení fasády", "dotace na zateplení", "Nová zelená úsporám", "zateplení domu cena"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Stěhování & rekonstrukce", "item": "https://www.domovniguru.cz/blog/kategorie/stehovani" }, { "@type": "ListItem", "position": 4, "name": "Návratnost zateplení domu", "item": "https://www.domovniguru.cz/blog/navratnost-zatepleni-domu" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Kolik stojí zateplení fasády za m²?", "acceptedAnswer": { "@type": "Answer", "text": "Zateplení fasády polystyrenem nebo minerální vatou v tloušťce 14–18 cm vyjde na 1 800–2 800 Kč/m² včetně práce, fasádní omítky a lešení. U domu se 150 m² obvodových stěn je to typicky 270 000–420 000 Kč." } }, { "@type": "Question", "name": "Jak velkou dotaci lze získat z programu Nová zelená úsporám?", "acceptedAnswer": { "@type": "Answer", "text": "Program Nová zelená úsporám hradí 30–50 % způsobilých výdajů na zateplení, u nízkopříjmových domácností a v rámci kotlíkových dotací i více. Konkrétní výše závisí na rozsahu opatření a dosažené úspoře energie." } }, { "@type": "Question", "name": "Za jak dlouho se zateplení domu vrátí?", "acceptedAnswer": { "@type": "Answer", "text": "Bez dotace se zateplení fasády obvykle vrátí za 12–18 let, se střechou a okny za 10–15 let. S dotací NZÚ se doba návratnosti zkracuje na zhruba 6–10 let, při růstu cen energií i méně." } }, { "@type": "Question", "name": "V jakém pořadí zateplovat dům – okna, fasáda, nebo střecha?", "acceptedAnswer": { "@type": "Answer", "text": "Obecně se doporučuje nejprve zateplit střechu a půdu, protože tudy uniká nejvíc tepla a práce je relativně levná. Poté fasádu a nakonec okna – výměna oken před zateplením fasády často vede ke špatnému osazení rámů." } }, { "@type": "Question", "name": "Co se stane, když se zateplení provede špatně?", "acceptedAnswer": { "@type": "Answer", "text": "Špatně provedené zateplení – chybějící parozábrana, nedostatečné větrání nebo tepelné mosty – může vést ke kondenzaci vlhkosti uvnitř konstrukce, vzniku plísní a degradaci izolantu. Oprava takových chyb bývá dražší než samotné zateplení." } }] }] };

const RELATED = [
  { title: "Jak zateplovat dům – fasáda, střecha, podlaha a návratnost", href: "/blog/jak-zateplit-dum", read: "8 min" },
  { title: "Jak zateplit byt bez rekonstrukce – levná řešení", href: "/blog/zateplit-byt-bez-rekonstrukce", read: "6 min" },
  { title: "Jak připravit dům na zimu – checklist", href: "/blog/priprava-domu-na-zimu", read: "5 min" },
  { title: "Jak utěsnit okna na zimu", href: "/blog/jak-utesnit-okna-na-zimu", read: "4 min" },
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
              <span>Návratnost zateplení domu</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏠 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 7 min čtení</span>
              </div>
              <h1 className="article-h1">Zateplení domu: kolik stojí a za jak dlouho se vrátí</h1>
              <p className="article-lead">Zateplení je jedna z mála investic do domu, která se dá spočítat na korunu i na rok. Kolik zaplatíš za fasádu, střechu a okna, kolik ti vrátí stát formou dotace a kdy se ti to celé otočí v reálnou úsporu na účtech za energie?</p>
              <div className="article-meta-row"><span>Aktualizováno: 11. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#cena-fasada">Kolik stojí zateplení fasády</a></li>
                <li><a href="#cena-strecha-okna">Cena zateplení střechy a výměny oken</a></li>
                <li><a href="#dotace">Dotace z programu Nová zelená úsporám</a></li>
                <li><a href="#vypocet-navratnosti">Jak se počítá doba návratnosti</a></li>
                <li><a href="#faktory">Co ovlivňuje skutečnou návratnost</a></li>
                <li><a href="#poradi">V jakém pořadí zateplovat</a></li>
                <li><a href="#rizika">Rizika špatně provedeného zateplení</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="cena-fasada">
              <h2>Kolik stojí zateplení fasády</h2>
              <p>Cena zateplení fasády se odvíjí hlavně od tloušťky a typu izolantu, kvality podkladu a samozřejmě od toho, jestli si práci necháš na firmě nebo zvládneš část svépomocí. Nejčastěji se používá fasádní polystyren (EPS) nebo minerální vata – ta je dražší, ale lépe propouští vodní páru a má lepší protipožární vlastnosti.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Tloušťka izolantu</th><th>EPS (polystyren)</th><th>Minerální vata</th><th>Vhodné pro</th></tr></thead>
                  <tbody>
                    <tr><td>8–10 cm</td><td>1 200–1 600 Kč/m²</td><td>1 500–2 000 Kč/m²</td><td>Dílčí opravy, méně náročné stěny</td></tr>
                    <tr><td>14–16 cm</td><td>1 800–2 400 Kč/m²</td><td>2 200–2 800 Kč/m²</td><td>Standardní novostavby i starší domy</td></tr>
                    <tr><td>18–20 cm</td><td>2 200–2 800 Kč/m²</td><td>2 600–3 300 Kč/m²</td><td>Pasivní a nízkoenergetický standard</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Ceny zahrnují materiál, lepení, kotvení, perlinku, penetraci a finální omítku včetně práce. Lešení si firmy obvykle účtují zvlášť – počítej s 30–60 Kč/m² fasády za měsíc pronájmu. U běžného rodinného domu s plochou obvodových stěn kolem 150 m² tak zateplení v doporučené tloušťce 14–18 cm vyjde na zhruba <strong>270 000–420 000 Kč</strong>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Tenčí izolant sice ušetří na materiálu, ale rozdíl v ceně mezi 12 cm a 18 cm bývá jen pár desítek tisíc korun na celý dům – zatímco rozdíl v úspoře tepla je citelný po celou životnost fasády (25–30 let). Vyplatí se nešetřit na tloušťce.</div>
            </section>

            <section id="cena-strecha-okna">
              <h2>Cena zateplení střechy a výměny oken</h2>
              <h3>Zateplení střechy nebo půdy</h3>
              <p>Pokud je půda nevyužitá, nejlevnější variantou je položit tepelnou izolaci na strop posledního podlaží – foukanou celulózu, minerální vlnu nebo desky z PIR pěny. To vyjde na <strong>400–800 Kč/m²</strong>. Zateplení šikmé střechy mezi a pod krokvemi, včetně sádrokartonového podhledu, je výrazně dražší: <strong>1 200–2 200 Kč/m²</strong>. U průměrné střechy o ploše 100–150 m² tak počítej s investicí <strong>80 000–250 000 Kč</strong> podle typu řešení.</p>
              <h3>Výměna oken</h3>
              <p>Nová plastová okna s trojsklem stojí včetně montáže a parapetů typicky <strong>7 000–12 000 Kč/m²</strong> okenní plochy, dřevěná nebo dřevohliníková okna pak <strong>12 000–20 000 Kč/m²</strong>. Rodinný dům má obvykle 20–30 m² oken, takže celková výměna vyjde na <strong>180 000–400 000 Kč</strong>. K tomu je potřeba připočítat demontáž a likvidaci starých oken a případné úpravy parapetů a ostění.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Opatření</th><th>Orientační cena</th><th>Typická úspora na vytápění</th></tr></thead>
                  <tbody>
                    <tr><td>Zateplení fasády (14–18 cm)</td><td>270 000–420 000 Kč</td><td>20–30 %</td></tr>
                    <tr><td>Zateplení střechy/půdy</td><td>80 000–250 000 Kč</td><td>10–20 %</td></tr>
                    <tr><td>Výměna oken</td><td>180 000–400 000 Kč</td><td>10–15 %</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Procenta úspor se sčítají jen orientačně – jednotlivá opatření se navzájem ovlivňují. Pokud chceš zjistit, kolik by konkrétně tvůj dům mohl ušetřit po zateplení, zkus naši <Link href="/kalkulacky/uspora-zatepleni" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačku úspory ze zateplení</Link> – stačí zadat plochu, typ izolantu a aktuální spotřebu na vytápění.</p>
            </section>

            <section id="dotace">
              <h2>Dotace z programu Nová zelená úsporám</h2>
              <p>Program Nová zelená úsporám (NZÚ) je hlavní dotační titul pro vlastníky rodinných i bytových domů, kteří chtějí snížit energetickou náročnost svého bydlení. Dotace se vyplácí zpětně po dokončení a vyúčtování realizace, na základě podané žádosti se zpracovaným projektem nebo odborným posudkem.</p>
              <ul>
                <li><strong>Výše dotace:</strong> obvykle 30–50 % způsobilých výdajů, u kombinace více opatření (fasáda + střecha + okna) bývá procento vyšší než při dílčím zateplení.</li>
                <li><strong>Bonusy:</strong> k dotaci je možné přičíst bonus za kombinaci opatření, bonus pro nízkopříjmové domácnosti nebo bonus za řešení odborníkem se zelenou úsporou.</li>
                <li><strong>Podmínky:</strong> práce musí provést firma s příslušným oprávněním, použité materiály musí splňovat požadované součinitele prostupu tepla (U) a celé řešení musí odpovídat schválenému energetickému posouzení.</li>
                <li><strong>Žádost:</strong> ideálně se podává před zahájením prací (lze i zpětně u některých výzev), vyplácí se po doložení faktur a kontrole realizace.</li>
              </ul>
              <p>Kromě NZÚ existují i regionální a obecní programy, které lze s celostátní dotací kombinovat – vyplatí se ověřit nabídku kraje a obce před podáním žádosti.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Podmínky a procentní sazby NZÚ se v čase mění podle aktuálních výzev. Před zahájením realizace si vždy ověř aktuální parametry na webu Státního fondu životního prostředí – žádost podaná po nesprávném zadání se těžko opravuje.</div>
            </section>

            <section id="vypocet-navratnosti">
              <h2>Jak se počítá doba návratnosti</h2>
              <p>Doba návratnosti je v podstatě jednoduchý poměr: <strong>investice (po odečtení dotace) děleno roční úsporou na vytápění</strong>. Příklad pro zateplení fasády:</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th></th><th>Bez dotace</th><th>S dotací NZÚ (40 %)</th></tr></thead>
                  <tbody>
                    <tr><td>Investice do fasády</td><td>350 000 Kč</td><td>350 000 Kč</td></tr>
                    <tr><td>Dotace</td><td>0 Kč</td><td>140 000 Kč</td></tr>
                    <tr><td>Vlastní náklad</td><td>350 000 Kč</td><td>210 000 Kč</td></tr>
                    <tr><td>Roční úspora na vytápění</td><td>22 000 Kč</td><td>22 000 Kč</td></tr>
                    <tr><td>Doba návratnosti</td><td><strong>~16 let</strong></td><td><strong>~9,5 roku</strong></td></tr>
                  </tbody>
                </table>
              </div>
              <p>Roční úsporu zjistíš nejpřesněji porovnáním spotřeby plynu, elektřiny nebo dřeva před a po zateplení – buď z vlastních faktur, nebo odhadem podle energetického štítku domu. Fasáda z předchozí sekce typicky šetří 20–30 % nákladů na vytápění; pokud dům dnes topí za 70 000–90 000 Kč ročně, úspora 20 000–25 000 Kč ročně je realistický odhad.</p>
              <p>Životnost zateplovacího systému se pohybuje kolem 25–30 let, takže i návratnost 12–18 let stále znamená, že polovinu nebo více životnosti fasáda už jen čistě šetří.</p>
            </section>

            <section id="faktory">
              <h2>Co ovlivňuje skutečnou návratnost</h2>
              <h3>Cena energií</h3>
              <p>Čím dráž platíš za plyn, elektřinu nebo dřevo, tím rychleji se zateplení zaplatí – úspora v korunách roste přímo úměrně s cenou energie. Při růstu cen energií o desítky procent, jak se to v posledních letech opakovaně stalo, se doba návratnosti může zkrátit o roky i bez jakékoliv dotace.</p>
              <h3>Stav budovy před zateplením</h3>
              <p>Starý dům bez jakékoliv izolace, s jednoduchými okny a netěsnou střechou má obrovský potenciál úspory – první centimetry izolace přinesou nejvíc. Naopak dům, který už má alespoň částečné zateplení nebo novější okna, ušetří po dalším zateplení procentuálně méně, takže návratnost dalších investic se prodlužuje.</p>
              <h3>Kvalita provedení</h3>
              <p>Zateplení provedené bez tepelných mostů, s kvalitním kotvením a správně řešenými detaily kolem oken, rohů a soklu funguje podle projektových předpokladů. Levná realizace s ušetřeným materiálem nebo špatně provedenými detaily může reálnou úsporu snížit o desítky procent – a navíc časem přinést dodatečné náklady na opravy.</p>
            </section>

            <section id="poradi">
              <h2>V jakém pořadí zateplovat</h2>
              <p>Pokud neřešíš dům najednou, ale postupně, pořadí kroků má vliv jak na návratnost, tak na to, abys zbytečně nepřekopával už hotovou práci.</p>
              <ol>
                <li><strong>Střecha a půda</strong> – teplo stoupá vzhůru a touto cestou uniká velká část tepelných ztrát. Práce je relativně levná a rychlá, často se dá zvládnout i svépomocí (foukaná izolace, minerální vlna mezi krokve).</li>
                <li><strong>Fasáda</strong> – největší investice, ale i největší podíl na celkové úspoře. Před zateplením fasády je vhodné mít vyřešené případné vlhkostní problémy zdiva.</li>
                <li><strong>Okna</strong> – ideálně až po zateplení fasády, nebo alespoň současně s ním. Pokud se okna mění samostatně a později se přidává zateplení, je potřeba počítat s tím, že rám okna by měl být osazen blíž k vnějšímu líci zdi, aby na něj navazovala izolace bez tepelného mostu.</li>
              </ol>
              <p>V praxi se často kombinuje – třeba okna a střecha v jedné etapě, fasáda v další. Důležité je mít od začátku představu o celkovém řešení (i kdyby se realizovalo postupně), aby na sebe jednotlivé kroky technicky navazovaly. Pokud řešíš jen byt v bytovém domě a fasáda není ve tvé kompetenci, podívej se na článek <Link href="/blog/zateplit-byt-bez-rekonstrukce" style={{ color: "#2a6496", textDecoration: "underline" }}>jak zateplit byt bez rekonstrukce</Link>.</p>
            </section>

            <section id="rizika">
              <h2>Rizika špatně provedeného zateplení</h2>
              <p>Zateplení mění tepelné a vlhkostní chování celé konstrukce – pokud se to udělá špatně, problémy se často projeví až po čase a oprava bývá nákladnější než samotné zateplení.</p>
              <ul>
                <li><strong>Kondenzace vlhkosti v konstrukci</strong> – pokud izolace zabrání odvodu vodní páry ze zdiva směrem ven (typicky u nevhodně zvoleného difuzně uzavřeného systému na vlhkém zdivu), vlhkost se hromadí uvnitř stěny.</li>
                <li><strong>Plísně</strong> – nejčastěji se objevují v rozích místností, za nábytkem u obvodových stěn nebo kolem oken, pokud zateplení vytvoří tepelné mosty nebo pokud se po zateplení nezmění návyky ve větrání. Vzduchotěsnější dům potřebuje pravidelné větrání, jinak vlhkost ze sprchování a vaření nemá kam uniknout.</li>
                <li><strong>Tepelné mosty</strong> – nedotažená izolace kolem oken, balkonů, rohů budovy nebo prostupů instalací vytváří místa, kde teplo uniká rychleji a kde se naopak srazí vlhkost na vnitřním povrchu zdi.</li>
                <li><strong>Degradace izolantu</strong> – špatně provedená finální omítka nebo poškozená hydroizolace u soklu může vést k zatékání vody do izolace, ztrátě izolačních vlastností a nutnosti dřívější opravy.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Při zateplení staršího domu se vyplatí nechat si předem zpracovat alespoň jednoduchý posudek o vlhkosti zdiva a navrhnout systém (difuzně otevřený vs. uzavřený) podle skutečného stavu, ne podle nejlevnější nabídky. A po zateplení nezapomeň upravit režim větrání – krátké intenzivní větrání několikrát denně místo pootevřených oken na celý den.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Kolik stojí zateplení fasády za m²?", a: "Zateplení fasády polystyrenem nebo minerální vatou v tloušťce 14–18 cm vyjde na 1 800–2 800 Kč/m² včetně práce, fasádní omítky a lešení. U domu se 150 m² obvodových stěn je to typicky 270 000–420 000 Kč." },
                  { q: "Jak velkou dotaci lze získat z programu Nová zelená úsporám?", a: "Program Nová zelená úsporám hradí 30–50 % způsobilých výdajů na zateplení, u nízkopříjmových domácností a v rámci kombinace více opatření i více. Konkrétní výše závisí na rozsahu opatření a dosažené úspoře energie." },
                  { q: "Za jak dlouho se zateplení domu vrátí?", a: "Bez dotace se zateplení fasády obvykle vrátí za 12–18 let, se střechou a okny za 10–15 let. S dotací NZÚ se doba návratnosti zkracuje na zhruba 6–10 let, při růstu cen energií i méně." },
                  { q: "V jakém pořadí zateplovat dům – okna, fasáda, nebo střecha?", a: "Obecně se doporučuje nejprve zateplit střechu a půdu, protože tudy uniká nejvíc tepla a práce je relativně levná. Poté fasádu a nakonec okna – výměna oken před zateplením fasády často vede ke špatnému osazení rámů." },
                  { q: "Co se stane, když se zateplení provede špatně?", a: "Špatně provedené zateplení – chybějící parozábrana, nedostatečné větrání nebo tepelné mosty – může vést ke kondenzaci vlhkosti uvnitř konstrukce, vzniku plísní a degradaci izolantu. Oprava takových chyb bývá dražší než samotné zateplení." },
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
                <li><a href="#cena-fasada">Cena zateplení fasády</a></li>
                <li><a href="#cena-strecha-okna">Střecha a okna</a></li>
                <li><a href="#dotace">Dotace NZÚ</a></li>
                <li><a href="#vypocet-navratnosti">Výpočet návratnosti</a></li>
                <li><a href="#faktory">Co ovlivňuje návratnost</a></li>
                <li><a href="#poradi">Pořadí kroků</a></li>
                <li><a href="#rizika">Rizika špatného zateplení</a></li>
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
