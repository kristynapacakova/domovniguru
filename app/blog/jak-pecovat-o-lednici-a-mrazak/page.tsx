import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak pečovat o ledničku a mrazák – čištění a úspora energie",
  description: "Odmrazování mrazáku, čištění těsnění a kondenzátoru, správná teplota a organizace potravin. Jak prodloužit životnost lednice a snížit spotřebu.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-pecovat-o-lednici-a-mrazak" },
  openGraph: { title: "Jak pečovat o ledničku a mrazák – čištění a úspora energie", description: "Odmrazování mrazáku, čištění těsnění a kondenzátoru, správná teplota a organizace potravin. Jak prodloužit životnost lednice a snížit spotřebu.", url: "https://www.domovniguru.cz/blog/jak-pecovat-o-lednici-a-mrazak", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-25T08:00:00Z", modifiedTime: "2026-06-25T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20pe%C4%8Dovat%20o%20ledni%C4%8Dku%20a%20mraz%C3%A1k%20%E2%80%93%20%C4%8Di%C5%A1t%C4%9Bn%C3%AD%20a%20%C3%BAspora%20energie&cat=blog", width: 1200, height: 630, alt: "Jak pečovat o ledničku a mrazák – čištění a úspora energie" }] },
  twitter: { card: "summary_large_image", title: "Jak pečovat o ledničku a mrazák – čištění a úspora energie", description: "Odmrazování mrazáku, čištění těsnění a kondenzátoru, správná teplota a organizace potravin. Jak prodloužit životnost lednice a snížit spotřebu." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/jak-pecovat-o-lednici-a-mrazak#article", "headline": "Jak pečovat o ledničku a mrazák – čištění a úspora energie", "datePublished": "2026-06-25T08:00:00Z", "dateModified": "2026-06-25T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["péče o ledničku", "čištění mrazáku", "odmrazování mrazničky", "kondenzátor lednice", "spotřeba lednice", "těsnění dveří lednice"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Sezónní údržba", "item": "https://www.domovniguru.cz/blog/kategorie/sezonni-udrzba" }, { "@type": "ListItem", "position": 4, "name": "Jak pečovat o ledničku a mrazák", "item": "https://www.domovniguru.cz/blog/jak-pecovat-o-lednici-a-mrazak" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jak často mám odmrazovat mrazák?", "acceptedAnswer": { "@type": "Answer", "text": "Klasický mrazák bez systému No Frost odmrazuj, jakmile vrstva námrazy na stěnách přesáhne 3–5 mm, obvykle to vychází jednou za 2–3 měsíce. Při silnější námraze chladicí okruh musí pracovat déle a spotřeba energie znatelně stoupá." } }, { "@type": "Question", "name": "Jak vyčistím kondenzátor na zadní straně lednice?", "acceptedAnswer": { "@type": "Answer", "text": "Odpojenou ledničku odtáhni od zdi, kondenzátor (mřížka nebo trubkový hadovitý systém na zadní straně či pod spodním krytem) opatrně vyčisti vysavačem s úzkou hubicí nebo měkkým kartáčem. Stačí dvakrát do roka, prach totiž funguje jako izolace a brání odvodu tepla." } }, { "@type": "Question", "name": "Jaká je ideální teplota v lednici a mrazáku?", "acceptedAnswer": { "@type": "Answer", "text": "V chladicím prostoru lednice se doporučuje 4–5 °C, v mrazicím boxu −18 °C. Nižší teploty zvyšují spotřebu bez reálného přínosu pro skladování potravin, vyšší teploty zkracují trvanlivost a zvyšují riziko množení bakterií." } }, { "@type": "Question", "name": "Jak zjistím, že těsnění dveří lednice už nefunguje?", "acceptedAnswer": { "@type": "Answer", "text": "Vlož mezi dveře a rám list papíru nebo bankovku a dveře zavři. Pokud papír volně vytáhneš bez odporu, těsnění už nedotěsňuje a je třeba ho vyměnit. Netěsnost se projevuje i tvorbou námrazy a zvýšenou spotřebou." } }, { "@type": "Question", "name": "Kdy už se nevyplatí ledničku opravovat a je lepší koupit novou?", "acceptedAnswer": { "@type": "Answer", "text": "Pokud je lednička starší 10–12 let, opakovaně se porouchává nebo cena opravy (například výměna kompresoru) přesahuje třetinu ceny nové lednice ve stejné energetické třídě, vyplatí se obvykle investovat do nového spotřebiče, který navíc ušetří na provozu." } }] }] };

const RELATED = [
  { title: "Jak udržovat myčku nádobí v dobrém stavu", href: "/blog/jak-udrzovat-mycku-nadobi", read: "4 min" },
  { title: "Údržba digestoře a odsávání v kuchyni", href: "/blog/udrzba-digestore-a-odsavani", read: "4 min" },
  { title: "Jak správně větrat byt", href: "/blog/spravne-vetrat-byt", read: "4 min" },
  { title: "Jak se zbavit vlhkosti v bytě", href: "/blog/zbavit-se-vlhkosti-v-byte", read: "5 min" },
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
              <span>Péče o ledničku a mrazák</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">❄️ Sezónní údržba</Link>
                <span className="article-read-time">⏱ 4 min čtení</span>
              </div>
              <h1 className="article-h1">Jak pečovat o ledničku a mrazák</h1>
              <p className="article-lead">Lednička běží 24 hodin denně, 365 dní v roce – je to spotřebič, na který se nejvíc spoléháme a nejméně mu věnujeme pozornost. Pravidelná údržba přitom netrvá dlouho a dokáže prodloužit životnost spotřebiče o roky a snížit spotřebu elektřiny o desítky procent. Tady je přehled, co a jak často kontrolovat.</p>
              <div className="article-meta-row"><span>Aktualizováno: 25. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#odmrazovani">Odmrazování mrazáku a čištění odtokového kanálku</a></li>
                <li><a href="#tesneni">Čištění gumového těsnění dveří</a></li>
                <li><a href="#kondenzator">Kondenzátor a mřížka – prach a spotřeba</a></li>
                <li><a href="#teplota">Správné nastavení teploty</a></li>
                <li><a href="#organizace">Organizace potravin pro lepší proudění vzduchu</a></li>
                <li><a href="#tesnost">Kontrola těsnosti dveří</a></li>
                <li><a href="#zavada">Kdy řešit závadu a kdy koupit novou ledničku</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="odmrazovani">
              <h2>Odmrazování mrazáku a čištění odtokového kanálku</h2>
              <p>Pokud máš klasický mrazák bez technologie No Frost, na stěnách se postupně tvoří vrstva námrazy. Ta funguje jako tepelný izolant – kompresor musí pracovat déle a tvrději, aby udržel požadovanou teplotu, což zvyšuje spotřebu elektřiny a zkracuje životnost motoru.</p>
              <ul>
                <li><strong>Kdy odmrazovat</strong> – jakmile vrstva námrazy přesáhne 3–5 mm, obvykle jednou za 2–3 měsíce u běžně používaného mrazáku</li>
                <li><strong>Postup</strong> – vypni a vyprázdni mrazák, potraviny přelož do chladicí tašky nebo k sousedům, dveře otevři a podlož ručníkem nebo miskou na odtávající vodu</li>
                <li><strong>Urychlení</strong> – miska s horkou vodou uvnitř mrazáku zkrátí čas odmrazování, nikdy ale námrazu neodstraňuj nožem nebo špachtlí – riskuješ propíchnutí chladicího okruhu</li>
                <li><strong>Po odmrazení</strong> – vnitřek vytři roztokem vody a jedlé sody nebo octa, důkladně osuš a až poté znovu zapni</li>
              </ul>
              <p>U lednice s chladicím prostorem se často zapomíná na <strong>odtokový kanálek</strong> (malý otvor nebo žlábek na zadní stěně chladicí části), kterým odtéká kondenzovaná vlhkost do odpařovací misky nad kompresorem. Pokud se ucpe zbytky jídla nebo nečistotami, voda začne stékat po stěnách nebo se hromadit na dně lednice.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Odtokový kanálek pročistíš jemně vatovou tyčinkou nebo tenkým drátkem namočeným v teplé vodě. Dělej to při každém větším čištění lednice, tedy zhruba jednou za 1–2 měsíce.</div>
            </section>

            <section id="tesneni">
              <h2>Čištění gumového těsnění dveří</h2>
              <p>Gumové těsnění kolem dveří lednice a mrazáku je místo, kde se nejčastěji hromadí plíseň, drobky a zbytky potravin – je vlhké, často ve stínu a má spoustu záhybů. Zanedbané těsnění nejen špatně vypadá, ale postupně ztrácí pružnost a přestává dotěsňovat.</p>
              <ul>
                <li><strong>Čištění</strong> – jednou za 2–4 týdny otři těsnění hadříkem namočeným v roztoku teplé vody a trochy jedlé sody nebo octa</li>
                <li><strong>Záhyby</strong> – do úzkých rýh použij starý kartáček na zuby, zachytí plísně a nečistoty, na které se hadříkem nedostaneš</li>
                <li><strong>Sušení</strong> – po umytí těsnění vždy důkladně osuš, vlhkost v záhybech je živnou půdou pro plísně</li>
                <li><strong>Údržba pružnosti</strong> – občasné lehké potření těsnění silikonovým mazivem nebo glycerinem mu pomůže zůstat pružné a lépe doléhat</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud na těsnění objevíš černé skvrny plísně, které nejdou odstranit, je lepší těsnění vyměnit – levný náhradní díl seženeš přímo od výrobce nebo v autorizovaném servisu podle modelu spotřebiče.</div>
            </section>

            <section id="kondenzator">
              <h2>Kondenzátor a mřížka – prach a spotřeba</h2>
              <p>Kondenzátor je síť trubek nebo mřížka na zadní straně lednice (případně pod spodním krytem u novějších modelů), která odvádí teplo z chladicího okruhu do okolního vzduchu. Pokud je zanesená prachem a chuchvalci, teplo se neodvádí efektivně, kompresor běží déle a spotřeba elektřiny stoupá – v některých případech až o 25–30 %.</p>
              <ul>
                <li><strong>Jak často čistit</strong> – ideálně dvakrát do roka, typicky na podzim a na jaře</li>
                <li><strong>Postup</strong> – ledničku vypni a odpoješ ze zásuvky, odtáhni od zdi, kondenzátor opatrně vyčisti vysavačem s úzkou hubicí nebo dlouhým měkkým kartáčem</li>
                <li><strong>Prostor kolem lednice</strong> – nech mezi zadní stěnou spotřebiče a zdí alespoň 5–10 cm volného prostoru pro cirkulaci vzduchu, přiražená lednice ke zdi hůř odvádí teplo</li>
                <li><strong>Domácí mazlíčci</strong> – v domácnostech se zvířaty se na kondenzátoru hromadí chlupy mnohem rychleji, počítej s čištěním i třikrát ročně</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Zanesený kondenzátor poznáš i podle toho, že zadní nebo spodní část lednice je nezvykle horká na dotek a spotřebič je hlučnější než obvykle – kompresor totiž běží déle a častěji.</div>
            </section>

            <section id="teplota">
              <h2>Správné nastavení teploty</h2>
              <p>Mnoho domácností má lednici nastavenou zbytečně chladně, což zvyšuje spotřebu bez jakéhokoli přínosu pro skladování potravin. Optimální hodnoty jsou:</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Prostor</th><th>Doporučená teplota</th><th>Důsledek nesprávného nastavení</th></tr></thead>
                  <tbody>
                    <tr><td>Chladicí prostor lednice</td><td>4–5 °C</td><td>Nad 8 °C riziko množení bakterií, pod 2 °C zbytečná spotřeba</td></tr>
                    <tr><td>Mrazicí box / mraznička</td><td>−18 °C</td><td>Teplejší než −15 °C zkracuje trvanlivost potravin</td></tr>
                    <tr><td>Zóna na zeleninu (pokud má vlastní regulaci)</td><td>0–4 °C, vyšší vlhkost</td><td>Příliš chladno způsobuje promrznutí a rychlejší kažení</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Teplotu kontroluj pomocí samostatného teploměru umístěného doprostřed police – vestavěné displeje spotřebičů totiž často měří teplotu poblíž senzoru, ne uprostřed prostoru, kde jsou potraviny.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> V létě, kdy je v kuchyni tepleji a dveře lednice se otevírají častěji, může být potřeba teplotu mírně snížit o 1 °C oproti zimnímu nastavení, aby spotřebič udržel stabilní vnitřní klima.</div>
            </section>

            <section id="organizace">
              <h2>Organizace potravin pro lepší proudění vzduchu</h2>
              <p>I dokonale fungující lednice chladí nerovnoměrně, pokud je přeplněná nebo špatně naskládaná. Cirkulace chladného vzduchu mezi policemi je klíčová pro to, aby se teplota udržovala stejnoměrně v celém prostoru.</p>
              <ul>
                <li><strong>Nezacpávej ventilační otvory</strong> – u lednic s nuceným oběhem vzduchu (No Frost) nesmí být zakryté mřížky uvnitř police velkými nádobami</li>
                <li><strong>Nechávej mezery mezi nádobami</strong> – vzduch musí mít kudy proudit, přeplněná lednice chladí hůř a nerovnoměrně</li>
                <li><strong>Nejteplejší místo</strong> – dveřní poličky a horní část lednice, sem patří věci, které snesou vyšší teplotu (nápoje, koření, máslo)</li>
                <li><strong>Nejchladnější místo</strong> – zadní stěna a spodní police, ideální pro maso, ryby a mléčné výrobky</li>
                <li><strong>Horké jídlo nepatří do lednice</strong> – nech ho nejdřív vychladnout na pokojovou teplotu, jinak zvyšuje vnitřní teplotu a nutí kompresor pracovat navíc</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Lednice naplněná tak na 70–80 % objemu chladí nejúčinněji – dostatek hmoty pomáhá udržovat stabilní teplotu, ale stále je prostor pro proudění vzduchu.</div>
            </section>

            <section id="tesnost">
              <h2>Kontrola těsnosti dveří</h2>
              <p>Netěsnící dveře jsou jednou z nejčastějších a přitom nejsnáze odhalitelných příčin vysoké spotřeby a tvorby námrazy. Studený vzduch uniká ven, teplý a vlhký vzduch z kuchyně proudí dovnitř a kondenzuje na stěnách mrazáku.</p>
              <ul>
                <li><strong>Test bankovkou nebo papírem</strong> – vlož list papíru mezi dveře a rám tak, aby polovina zůstala uvnitř, dveře zavři a zkus papír vytáhnout. Pokud klade odpor, těsnění funguje. Pokud vyjde volně, je čas na výměnu.</li>
                <li><strong>Vizuální kontrola</strong> – zkontroluj, jestli těsnění nemá praskliny, deformace nebo místa, kde už nedoléhá k rámu</li>
                <li><strong>Vyrovnání dveří</strong> – u starších spotřebičů se může uvolnit závěs a dveře se mírně pokřiví, většinou lze seřídit šrouby na závěsu</li>
                <li><strong>Příznaky netěsnosti</strong> – nadměrná námraza v mrazáku, kondenzace na vnější straně dveří, déle běžící kompresor, vyšší spotřeba na vyúčtování</li>
              </ul>
            </section>

            <section id="zavada">
              <h2>Kdy řešit závadu a kdy už je čas na novou ledničku</h2>
              <p>Ne každý problém znamená konec spotřebiče. Některé závady se vyplatí opravit, jiné signalizují, že investice do nové lednice bude výhodnější.</p>
              <ul>
                <li><strong>Stojí za opravu</strong> – výměna těsnění, termostatu, ventilátoru nebo žárovky, ucpaný odtokový kanálek, uvolněný závěs dveří</li>
                <li><strong>Zvaž novou lednici</strong> – spotřebič je starší 10–12 let, opakovaně se porouchává, oprava (např. kompresor) přesahuje třetinu ceny nové lednice ve srovnatelné třídě</li>
                <li><strong>Energetická třída</strong> – novější spotřebiče ve třídě A nebo vyšší mohou ušetřit stovky korun ročně na elektřině oproti starým modelům</li>
                <li><strong>Varovné signály blížící se poruchy</strong> – neobvyklý hluk nebo vibrace, kompresor běží nepřetržitě bez pauz, vnitřní teplota kolísá, na zadní straně se tvoří led nebo kondenzace</li>
              </ul>
              <p>Pokud potřebuješ celkově zlepšit klima v kuchyni a omezit vlhkost, která se podílí i na rychlejším opotřebení spotřebičů, podívej se na článek o tom, jak <Link href="/blog/zbavit-se-vlhkosti-v-byte" style={{ color: "#2a6496", textDecoration: "underline" }}>se zbavit vlhkosti v bytě</Link>, a na tipy pro <Link href="/blog/spravne-vetrat-byt" style={{ color: "#2a6496", textDecoration: "underline" }}>správné větrání bytu</Link>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pravidelná údržba podle tohoto návodu (čištění kondenzátoru, těsnění a odmrazování) může životnost lednice prodloužit o několik let a citelně snížit položku za elektřinu na ročním vyúčtování.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jak často mám odmrazovat mrazák?", a: "Klasický mrazák bez systému No Frost odmrazuj, jakmile vrstva námrazy na stěnách přesáhne 3–5 mm, obvykle to vychází jednou za 2–3 měsíce. Při silnější námraze chladicí okruh musí pracovat déle a spotřeba energie znatelně stoupá." },
                  { q: "Jak vyčistím kondenzátor na zadní straně lednice?", a: "Odpojenou ledničku odtáhni od zdi, kondenzátor (mřížka nebo trubkový hadovitý systém na zadní straně či pod spodním krytem) opatrně vyčisti vysavačem s úzkou hubicí nebo měkkým kartáčem. Stačí dvakrát do roka, prach totiž funguje jako izolace a brání odvodu tepla." },
                  { q: "Jaká je ideální teplota v lednici a mrazáku?", a: "V chladicím prostoru lednice se doporučuje 4–5 °C, v mrazicím boxu −18 °C. Nižší teploty zvyšují spotřebu bez reálného přínosu pro skladování potravin, vyšší teploty zkracují trvanlivost a zvyšují riziko množení bakterií." },
                  { q: "Jak zjistím, že těsnění dveří lednice už nefunguje?", a: "Vlož mezi dveře a rám list papíru nebo bankovku a dveře zavři. Pokud papír volně vytáhneš bez odporu, těsnění už nedotěsňuje a je třeba ho vyměnit. Netěsnost se projevuje i tvorbou námrazy a zvýšenou spotřebou." },
                  { q: "Kdy už se nevyplatí ledničku opravovat a je lepší koupit novou?", a: "Pokud je lednička starší 10–12 let, opakovaně se porouchává nebo cena opravy (například výměna kompresoru) přesahuje třetinu ceny nové lednice ve stejné energetické třídě, vyplatí se obvykle investovat do nového spotřebiče, který navíc ušetří na provozu." },
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
                <li><a href="#odmrazovani">Odmrazování mrazáku</a></li>
                <li><a href="#tesneni">Čištění těsnění dveří</a></li>
                <li><a href="#kondenzator">Kondenzátor a mřížka</a></li>
                <li><a href="#teplota">Nastavení teploty</a></li>
                <li><a href="#organizace">Organizace potravin</a></li>
                <li><a href="#tesnost">Kontrola těsnosti dveří</a></li>
                <li><a href="#zavada">Závada nebo nová lednice?</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/sezonni-udrzba" className="sidebar-cat-link">❄️ Sezónní údržba<span>28 článků →</span></Link>
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
