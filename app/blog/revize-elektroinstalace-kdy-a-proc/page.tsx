import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Revize elektroinstalace – kdy je nutná a co obsahuje",
  description: "Jak často revidovat elektroinstalaci v bytě i domě, co revizní technik kontroluje a kolik revize stojí.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/revize-elektroinstalace-kdy-a-proc" },
  openGraph: { title: "Revize elektroinstalace – kdy je nutná a co obsahuje", description: "Jak často revidovat elektroinstalaci v bytě i domě, co revizní technik kontroluje a kolik revize stojí.", url: "https://www.domovniguru.cz/blog/revize-elektroinstalace-kdy-a-proc", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-24T08:00:00Z", modifiedTime: "2026-06-24T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Revize%20elektroinstalace%20%E2%80%93%20kdy%20je%20nutn%C3%A1%20a%20co%20obsahuje&cat=blog", width: 1200, height: 630, alt: "Revize elektroinstalace – kdy je nutná a co obsahuje" }] },
  twitter: { card: "summary_large_image", title: "Revize elektroinstalace – kdy je nutná a co obsahuje", description: "Jak často revidovat elektroinstalaci v bytě i domě, co revizní technik kontroluje a kolik revize stojí." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/revize-elektroinstalace-kdy-a-proc#article", "headline": "Revize elektroinstalace – kdy je nutná a co obsahuje", "datePublished": "2026-06-24T08:00:00Z", "dateModified": "2026-06-24T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["revize elektroinstalace", "revizní technik", "revize elektřiny v bytě", "lhůty revize", "cena revize elektroinstalace", "revizní zpráva"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Elektrika & osvětlení", "item": "https://www.domovniguru.cz/blog/kategorie/elektrika" }, { "@type": "ListItem", "position": 4, "name": "Revize elektroinstalace – kdy je nutná a co obsahuje", "item": "https://www.domovniguru.cz/blog/revize-elektroinstalace-kdy-a-proc" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jak často musím revidovat elektroinstalaci v bytě?", "acceptedAnswer": { "@type": "Answer", "text": "U bytů a rodinných domů se běžně doporučuje výchozí revize po dokončení nebo úpravě instalace a periodická revize jednou za 5 let pro bytové prostory, respektive jednou za 5 let i pro rodinné domy podle platné normy ČSN 33 1500 a navazujících předpisů. Pronajímané nemovitosti a prostory se zvýšeným rizikem mohou mít kratší lhůty." } }, { "@type": "Question", "name": "Je revize elektroinstalace povinná ze zákona?", "acceptedAnswer": { "@type": "Answer", "text": "Pro běžné vlastnické bydlení revize ze zákona přímo vyžadována není, ale bez platné revizní zprávy může pojišťovna při škodě způsobené elektroinstalací (požár, zkrat) krátit nebo zcela odmítnout pojistné plnění. U pronajímaných bytů a nemovitostí k podnikání je revize prakticky povinná." } }, { "@type": "Question", "name": "Kolik stojí revize elektroinstalace bytu?", "acceptedAnswer": { "@type": "Answer", "text": "Revize menšího bytu (2+kk až 3+1) obvykle vyjde na 1 500–3 000 Kč, revize rodinného domu na 3 000–7 000 Kč v závislosti na počtu obvodů, rozvaděčů a rozsahu měření. Cena se odvíjí i od lokality a konkrétního revizního technika." } }, { "@type": "Question", "name": "Co se stane, když revize odhalí závadu?", "acceptedAnswer": { "@type": "Answer", "text": "Revizní technik závadu zapíše do revizní zprávy a ohodnotí, zda instalace je, nebo není schopná bezpečného provozu. U závažných závad (např. chybějící chránič, poškozená izolace) doporučí okamžitou nápravu. Po opravě je nutná tzv. revize po odstranění závad, která potvrdí, že je instalace v pořádku." } }, { "@type": "Question", "name": "Jak vybrat revizního technika?", "acceptedAnswer": { "@type": "Answer", "text": "Revizní technik musí mít platné osvědčení podle vyhlášky č. 50/1978 Sb. (nebo navazujících předpisů) pro daný rozsah revizí. Osvědčení si lze vyžádat k nahlédnutí. Doporučuje se technik s referencemi, jasně danou cenou předem a vystavením revizní zprávy v písemné i elektronické podobě." } }] }] };

const RELATED = [
  { title: "Jak fungují pojistky a jističe – výměna a bezpečnost 2026", href: "/blog/jak-funguji-pojistky", read: "5 min" },
  { title: "Jak funguje proudový chránič (RCD) a kdy je v bytě povinný", href: "/blog/jak-funguje-proudovy-chranic", read: "5 min" },
  { title: "Jak otestovat zásuvku – fázová tužka a multimetr", href: "/blog/otestovat-zasuvku", read: "4 min" },
  { title: "Proč vypadává jistič? Přetížení nebo zkrat", href: "/blog/proc-vypadava-jistic", read: "4 min" },
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
              <Link href="/blog/kategorie/elektrika">⚡ Elektrika & osvětlení</Link><span className="breadcrumb-sep">/</span>
              <span>Revize elektroinstalace</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">⚡ Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Revize elektroinstalace – kdy je nutná a co obsahuje</h1>
              <p className="article-lead">Revize elektroinstalace patří k věcem, na které se snadno zapomíná, dokud se něco nestane. Přitom pravidelná revize není jen formalita pro razítko – odhalí skryté závady, které mohou způsobit požár nebo úraz, a bez ní ti při škodě pojišťovna často nezaplatí. Tady je přehled, kdy revizi potřebuješ, co technik kontroluje a co dělat, když najde problém.</p>
              <div className="article-meta-row"><span>Aktualizováno: 24. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#proc-revize">Proč je revize důležitá</a></li>
                <li><a href="#lhuty">Zákonné lhůty revize</a></li>
                <li><a href="#co-se-kontroluje">Co revizní technik měří a kontroluje</a></li>
                <li><a href="#prubeh">Jak probíhá revize a jak dlouho trvá</a></li>
                <li><a href="#negativni-nalez">Co dělat při negativním nálezu</a></li>
                <li><a href="#cena">Orientační cena revize</a></li>
                <li><a href="#vyber-technika">Jak vybrat revizního technika</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="proc-revize">
              <h2>Proč je revize elektroinstalace důležitá</h2>
              <p>Elektroinstalace se opotřebovává nenápadně. Izolace vodičů postupně stárne, kontakty v zásuvkách a rozvaděči se uvolňují, jištění se může přizpůsobit dřívější zástavbě, která dnes neodpovídá reálnému zatížení (myčka, klimatizace, nabíječka elektromobilu). Revize tyto skryté závady odhalí dřív, než se projeví zkratem, jiskřením nebo požárem.</p>
              <ul>
                <li><strong>Bezpečnost</strong> – revize zachytí poškozenou izolaci, chybějící nebo nefunkční proudový chránič, přetížené obvody a špatně dimenzované jištění</li>
                <li><strong>Pojištění</strong> – při škodě způsobené elektroinstalací (požár, zkrat) může pojišťovna bez platné revizní zprávy výrazně krátit nebo úplně odmítnout plnění</li>
                <li><strong>Prodej a pronájem nemovitosti</strong> – platná revize je u realitních transakcí standardním požadavkem a u pronájmu prakticky povinností, protože pronajímatel odpovídá za bezpečnost nemovitosti</li>
                <li><strong>Klid v duši</strong> – zvlášť u starších domů s instalací z 70.–90. let revize ukáže, zda je potřeba modernizace rozvaděče nebo výměna vedení</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud kupuješ starší nemovitost a revizní zpráva chybí nebo je stará přes 5 let, počítej s revizí jako se standardní položkou rozpočtu hned po nastěhování.</div>
            </section>

            <section id="lhuty">
              <h2>Zákonné lhůty revize bytových a rodinných domů</h2>
              <p>Lhůty revizí stanovuje norma ČSN 33 1500 a navazující předpisy podle prostředí a typu objektu. Orientační přehled pro běžné bydlení:</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ objektu / prostředí</th><th>Lhůta periodické revize</th></tr></thead>
                  <tbody>
                    <tr><td>Byt, rodinný dům (běžné prostředí)</td><td>1× za 5 let</td></tr>
                    <tr><td>Společné prostory bytového domu</td><td>1× za 5 let</td></tr>
                    <tr><td>Garáž, sklep, prostory se zvýšenou vlhkostí</td><td>1× za 3 roky</td></tr>
                    <tr><td>Venkovní elektrické rozvody, zahradní zásuvky</td><td>1× za 4 roky</td></tr>
                    <tr><td>Pronajímané prostory k podnikání</td><td>obvykle 1× za 1–3 roky podle provozu</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Mimo periodické lhůty je nutná i <strong>výchozí revize</strong> – tedy revize nově zhotovené nebo zásadně upravené elektroinstalace, například po rekonstrukci bytu, výměně rozvaděče nebo přidání nového okruhu. Bez výchozí revize by nová instalace nemusela mít vůbec povolen provoz.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Datum poslední revize a doporučený termín další najdeš přímo v revizní zprávě – stačí si ji uložit a nastavit si připomínku v kalendáři.</div>
            </section>

            <section id="co-se-kontroluje">
              <h2>Co revizní technik měří a kontroluje</h2>
              <p>Revize se skládá z vizuální kontroly, měření a vyzkoušení funkčnosti ochranných prvků.</p>
              <ul>
                <li><strong>Vizuální kontrola</strong> – stav rozvaděče, označení obvodů, mechanické poškození kabelů a zásuvek, přístupnost hlavního vypínače</li>
                <li><strong>Měření izolačního odporu</strong> – ověřuje, že izolace vodičů není narušená vlhkostí, stářím nebo mechanickým poškozením</li>
                <li><strong>Měření impedance smyčky</strong> – kontroluje, zda při poruše dojde k dostatečně rychlému odpojení jištěním</li>
                <li><strong>Funkční zkouška proudových chráničů (RCD)</strong> – test tlačítkem i měřicím přístrojem, zda chránič vybaví v předepsaném čase</li>
                <li><strong>Kontrola spojitosti ochranných vodičů a uzemnění</strong> – ověřuje, že kovové části spotřebičů a rozvodů jsou správně uzemněné</li>
                <li><strong>Dimenzování jištění</strong> – zda hodnota jističů odpovídá průřezu vodičů a reálnému zatížení obvodu</li>
              </ul>
              <p>Více o tom, jak jednotlivé ochranné prvky funguji v praxi, najdeš v článcích o tom, <Link href="/blog/jak-funguje-proudovy-chranic" style={{ color: "#2a6496", textDecoration: "underline" }}>jak funguje proudový chránič</Link>, a o tom, <Link href="/blog/jak-funguji-pojistky" style={{ color: "#2a6496", textDecoration: "underline" }}>jak fungují pojistky a jističe</Link>.</p>
            </section>

            <section id="prubeh">
              <h2>Jak probíhá revize a jak dlouho trvá</h2>
              <p>Revizní technik nejprve potřebuje přístup do rozvaděče a do všech místností, kde se nachází zásuvky, vypínače a svítidla. U běžného bytu (2+kk až 3+1) trvá revize zhruba <strong>2–4 hodiny</strong>, u rodinného domu se zahradou a více obvody i celý den.</p>
              <ol>
                <li><strong>Příprava</strong> – technik si vyžádá projektovou dokumentaci nebo předchozí revizní zprávu, pokud existuje</li>
                <li><strong>Vizuální kontrola</strong> – prohlídka rozvaděče, kabeláže, zásuvek a svítidel</li>
                <li><strong>Měření</strong> – izolační odpor, impedance smyčky, funkce chráničů, spojitost uzemnění</li>
                <li><strong>Vyhodnocení</strong> – technik porovná naměřené hodnoty s normou a posoudí, zda je instalace schopná bezpečného provozu</li>
                <li><strong>Revizní zpráva</strong> – písemný dokument s výsledky měření, soupisem případných závad a doporučeným termínem další revize</li>
              </ol>
              <div className="article-tip"><strong>💡 Tip:</strong> Před návštěvou technika si zpřístupni rozvaděč (odstraň nábytek, krabice) a uvolni přístup ke všem zásuvkám – ušetříš čas i peníze za zbytečné prodlužování revize.</div>
            </section>

            <section id="negativni-nalez">
              <h2>Co dělat při negativním nálezu</h2>
              <p>Pokud revize odhalí závadu, revizní technik ji zapíše do zprávy a podle závažnosti doporučí postup. Drobné nedostatky (např. chybějící popisky obvodů) lze často odstranit ihned na místě. Závažnější závady – chybějící nebo nefunkční chránič, poškozená izolace, podhodnocené jištění – vyžadují zásah elektrikáře, ideálně toho, kdo provedl revizi nebo s ním spolupracuje.</p>
              <p>Po opravě závad je nutné provést tzv. <strong>revizi po odstranění závad</strong>, která potvrdí, že je instalace v souladu s normou. Teprve tato následná revize je platným podkladem pro pojišťovnu i případný prodej nemovitosti.</p>
              <p>Pokud problém způsobuje opakované výpadky napájení ještě před revizí, podívej se na článek o tom, <Link href="/blog/proc-vypadava-jistic" style={{ color: "#2a6496", textDecoration: "underline" }}>proč vypadává jistič</Link> – často jde o přetížení, které revize jen formálně potvrdí.</p>
            </section>

            <section id="cena">
              <h2>Orientační cena revize</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ nemovitosti</th><th>Orientační cena</th></tr></thead>
                  <tbody>
                    <tr><td>Byt 1+kk až 2+kk</td><td>1 500–2 200 Kč</td></tr>
                    <tr><td>Byt 3+kk a větší</td><td>2 000–3 000 Kč</td></tr>
                    <tr><td>Rodinný dům</td><td>3 000–7 000 Kč</td></tr>
                    <tr><td>Revize po odstranění závad (dílčí)</td><td>500–1 500 Kč</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Konečná cena záleží na počtu obvodů, rozvaděčů, ploše nemovitosti a regionu. Cenu si vždy domluv předem a ptej se, co je v ní zahrnuto – zda jde o kompletní revizní zprávu, nebo jen dílčí měření.</p>
            </section>

            <section id="vyber-technika">
              <h2>Jak vybrat revizního technika</h2>
              <ul>
                <li><strong>Platné osvědčení</strong> – technik musí mít osvědčení podle příslušné vyhlášky pro rozsah revizí, které provádí; osvědčení si lze vyžádat k nahlédnutí</li>
                <li><strong>Referencee a zkušenosti</strong> – ideálně technik se zkušeností s podobným typem nemovitosti (byt, rodinný dům, starší instalace)</li>
                <li><strong>Jasná cena předem</strong> – vyhni se technikům, kteří cenu neumí nebo nechtějí specifikovat dopředu</li>
                <li><strong>Písemná revizní zpráva</strong> – měla by obsahovat naměřené hodnoty, soupis závad (pokud nějaké jsou) a doporučený termín další revize</li>
                <li><strong>Doporučení</strong> – revizní technici se často doporučují mezi elektrikáři, správci budov nebo přes recenze na specializovaných portálech</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud plánuješ zároveň drobné úpravy elektroinstalace (např. <Link href="/blog/instalovat-stmivac" style={{ color: "#2a6496", textDecoration: "underline" }}>instalaci stmívače</Link> nebo výměnu zásuvek), domluv si revizi až po dokončení úprav – ušetříš za opakovanou revizi.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jak často musím revidovat elektroinstalaci v bytě?", a: "U bytů a rodinných domů se běžně doporučuje výchozí revize po dokončení nebo úpravě instalace a periodická revize jednou za 5 let pro bytové prostory, respektive jednou za 5 let i pro rodinné domy podle platné normy ČSN 33 1500 a navazujících předpisů. Pronajímané nemovitosti a prostory se zvýšeným rizikem mohou mít kratší lhůty." },
                  { q: "Je revize elektroinstalace povinná ze zákona?", a: "Pro běžné vlastnické bydlení revize ze zákona přímo vyžadována není, ale bez platné revizní zprávy může pojišťovna při škodě způsobené elektroinstalací (požár, zkrat) krátit nebo zcela odmítnout pojistné plnění. U pronajímaných bytů a nemovitostí k podnikání je revize prakticky povinná." },
                  { q: "Kolik stojí revize elektroinstalace bytu?", a: "Revize menšího bytu (2+kk až 3+1) obvykle vyjde na 1 500–3 000 Kč, revize rodinného domu na 3 000–7 000 Kč v závislosti na počtu obvodů, rozvaděčů a rozsahu měření. Cena se odvíjí i od lokality a konkrétního revizního technika." },
                  { q: "Co se stane, když revize odhalí závadu?", a: "Revizní technik závadu zapíše do revizní zprávy a ohodnotí, zda instalace je, nebo není schopná bezpečného provozu. U závažných závad (např. chybějící chránič, poškozená izolace) doporučí okamžitou nápravu. Po opravě je nutná tzv. revize po odstranění závad, která potvrdí, že je instalace v pořádku." },
                  { q: "Jak vybrat revizního technika?", a: "Revizní technik musí mít platné osvědčení podle vyhlášky č. 50/1978 Sb. (nebo navazujících předpisů) pro daný rozsah revizí. Osvědčení si lze vyžádat k nahlédnutí. Doporučuje se technik s referencemi, jasně danou cenou předem a vystavením revizní zprávy v písemné i elektronické podobě." },
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
                <li><a href="#proc-revize">Proč je revize důležitá</a></li>
                <li><a href="#lhuty">Zákonné lhůty revize</a></li>
                <li><a href="#co-se-kontroluje">Co se kontroluje</a></li>
                <li><a href="#prubeh">Průběh revize</a></li>
                <li><a href="#negativni-nalez">Negativní nález</a></li>
                <li><a href="#cena">Orientační cena</a></li>
                <li><a href="#vyber-technika">Výběr technika</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/elektrika" className="sidebar-cat-link">⚡ Elektrika & osvětlení<span>25 článků →</span></Link>
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
