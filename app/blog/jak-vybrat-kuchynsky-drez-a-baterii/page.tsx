import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak vybrat kuchyňský dřez a baterii – materiály, velikosti a typy",
  description: "Materiály, velikosti a typy dřezů a kuchyňských baterií – jak vybrat podle provozu domácnosti a rozpočtu.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-vybrat-kuchynsky-drez-a-baterii" },
  openGraph: { title: "Jak vybrat kuchyňský dřez a baterii", description: "Materiály, velikosti a typy dřezů a kuchyňských baterií – jak vybrat podle provozu domácnosti a rozpočtu.", url: "https://www.domovniguru.cz/blog/jak-vybrat-kuchynsky-drez-a-baterii", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-12T08:00:00Z", modifiedTime: "2026-06-12T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20vybrat%20kuchy%C5%88sk%C3%BD%20d%C5%99ez%20a%20baterii&cat=blog", width: 1200, height: 630, alt: "Jak vybrat kuchyňský dřez a baterii" }] },
  twitter: { card: "summary_large_image", title: "Jak vybrat kuchyňský dřez a baterii", description: "Materiály, velikosti a typy dřezů a kuchyňských baterií – jak vybrat podle provozu domácnosti a rozpočtu." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/jak-vybrat-kuchynsky-drez-a-baterii#article", "headline": "Jak vybrat kuchyňský dřez a baterii", "datePublished": "2026-06-12T08:00:00Z", "dateModified": "2026-06-12T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["kuchyňský dřez", "kuchyňská baterie", "výběr dřezu", "granitový dřez", "nerezový dřez"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Stěhování & rekonstrukce", "item": "https://www.domovniguru.cz/blog/kategorie/stehovani" }, { "@type": "ListItem", "position": 4, "name": "Jak vybrat kuchyňský dřez a baterii", "item": "https://www.domovniguru.cz/blog/jak-vybrat-kuchynsky-drez-a-baterii" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jaký materiál dřezu je nejlepší?", "acceptedAnswer": { "@type": "Answer", "text": "Nerez je nejodolnější a nejlevnější, granit (kompozit) vypadá luxusněji a tlumí hluk, keramika je elegantní, ale náchylnější na poškrábání a otřep. Výběr závisí na stylu kuchyně a rozpočtu." } }, { "@type": "Question", "name": "Jak velký dřez potřebuji?", "acceptedAnswer": { "@type": "Answer", "text": "Pro malou domácnost (1–2 osoby) postačí jednoduchý dřez 50–60 cm šířky. Pro rodiny s dětmi a častým vařením je lepší dřez s odkapávací plochou nebo dvěma vanami, ideálně 80 cm a více." } }, { "@type": "Question", "name": "Jaký typ montáže dřezu vybrat?", "acceptedAnswer": { "@type": "Answer", "text": "Montáž do desky je nejjednodušší a nejlevnější. Podstavná montáž (pod kamenem) vypadá elegantně a snadno se čistí, ale vyžaduje pevnější desku. Flush-mount je nejnáročnější na instalaci, ale dává nejčistší vzhled." } }, { "@type": "Question", "name": "Jaké funkce baterie se nejvíce hodí do kuchyně?", "acceptedAnswer": { "@type": "Answer", "text": "Výsuvná hubice je užitečná pro snadné mytí velkých hrnců, integrovaná filtrace vody šetří kupování balené vody a dotykové nebo senzorové ovládání zlepšuje hygienu při vaření." } }, { "@type": "Question", "name": "Kolik stojí dřez s baterií celkem?", "acceptedAnswer": { "@type": "Answer", "text": "Základní kombinace nerezového dřezu a jednoduché baterie vyjde od cca 2 500 Kč. Kvalitní granitový dřez s baterií s výsuvnou hubicí a filtrací se pohybuje od 8 000 do 20 000 Kč i více." } }] }] };

const RELATED = [
  { title: "Jak postupovat při instalaci kuchyňské linky", href: "/blog/instalovat-kuchynskou-linku", read: "6 min" },
  { title: "Plánování kuchyně krok za krokem", href: "/blog/planovani-kuchyne-krok-za-krokem", read: "7 min" },
  { title: "Jak rozložit IKEA kuchyň", href: "/blog/rozlozit-ikea-kuchyn", read: "5 min" },
  { title: "Kuchyňská linka na míru vs. IKEA", href: "/blog/kuchynska-linka-na-miru-vs-ikea", read: "6 min" },
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
              <span>Jak vybrat kuchyňský dřez a baterii</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏠 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak vybrat kuchyňský dřez a baterii</h1>
              <p className="article-lead">Dřez a baterie patří mezi prvky kuchyně, které denně používáš desítky let – a přitom se na ně často zapomíná až na poslední chvíli. Vybrat správný materiál, velikost, montáž a typ baterie ti ušetří peníze i nervy při vaření a mytí nádobí.</p>
              <div className="article-meta-row"><span>Aktualizováno: 12. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#materialy">Materiály kuchyňských dřezů</a></li>
                <li><a href="#velikost">Velikost a počet van</a></li>
                <li><a href="#montaz">Způsoby montáže dřezu</a></li>
                <li><a href="#baterie">Typy baterií a užitečné funkce</a></li>
                <li><a href="#udrzba">Údržba a čištění</a></li>
                <li><a href="#tipy">Tipy podle rozpočtu</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="materialy">
              <h2>Materiály kuchyňských dřezů</h2>
              <p>Materiál dřezu ovlivňuje nejen vzhled kuchyně, ale i hlučnost při mytí, odolnost vůči poškrábání a cenu. Tři nejčastější varianty jsou nerez, granitový kompozit a keramika.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Materiál</th><th>Cena</th><th>Odolnost</th><th>Hlučnost</th><th>Vzhled</th></tr></thead>
                  <tbody>
                    <tr><td>Nerez</td><td>1 000–4 000 Kč</td><td>Vysoká, odolná proti rázům</td><td>Vyšší (řeší se podložkami)</td><td>Moderní, technický</td></tr>
                    <tr><td>Granit (kompozit)</td><td>2 500–8 000 Kč</td><td>Velmi vysoká, odolná proti škrábancům</td><td>Nízká, tlumí zvuk</td><td>Matný, barevné varianty</td></tr>
                    <tr><td>Keramika</td><td>3 000–10 000 Kč</td><td>Tvrdá, ale citlivá na nárazy</td><td>Nízká</td><td>Elegantní, klasický look</td></tr>
                  </tbody>
                </table>
              </div>
              <h3>Nerezový dřez</h3>
              <p>Nejrozšířenější volba díky příznivé ceně a snadné dostupnosti. Kvalitní nerez (tloušťka stěny alespoň 0,8 mm) odolá pádu hrnce i ostrým nožům. Nevýhodou je hlučnost při dopadu vody a viditelné otisky prstů, které ale stačí občas přetřít hadříkem.</p>
              <h3>Granitový (kompozitní) dřez</h3>
              <p>Vyrábí se ze směsi granitové drtě a akrylové pryskyřice. Je velmi odolný proti škrábancům, vysokým teplotám i barvení od kávy či kečupu. Tlumí hluk a působí luxusněji – ideální do moderních i klasických kuchyní. Vychází dráž, ale rozdíl v dlouhodobém užívání stojí za to.</p>
              <h3>Keramický dřez</h3>
              <p>Klasická volba do venkovských i retro kuchyní, často ve velkém „farmhouse" formátu. Je odolný proti vysokým teplotám a chemikáliím, ale při neopatrném zacházení (pád těžkého předmětu) může otřepnout nebo prasknout. Vyšší hmotnost vyžaduje pevnou skříňku.</p>
            </section>

            <section id="velikost">
              <h2>Velikost a počet van podle provozu domácnosti</h2>
              <p>Velikost dřezu by měla odpovídat tomu, kolik lidí v domácnosti vaří a jak často se myje velké nádobí. Než si vybereš konkrétní model, je dobré si <Link href="/kalkulacky/cena-kuchyne" style={{ color: "#2a6496", textDecoration: "underline" }}>spočítat orientační cenu celé kuchyně</Link>, aby dřez a baterie zapadly do celkového rozpočtu.</p>
              <ul>
                <li><strong>Jednoduchý dřez (50–60 cm)</strong> – vhodný pro singles, páry nebo malé kuchyně, kde se hodně používá myčka</li>
                <li><strong>Dřez s odkapávací plochou (80–100 cm)</strong> – praktický kompromis, odkapávací plocha slouží i jako pracovní plocha navíc</li>
                <li><strong>Dvouvanový dřez (100 cm a více)</strong> – ideální pro rodiny, umožňuje oddělit mytí a odkládání, nebo namáčení a oplach</li>
                <li><strong>Dřez s malou přídavnou vanou</strong> – praktický na čištění zeleniny nebo odkládání zbytků při vaření</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud máš myčku nádobí, vystačíš si i s jednoduchým dřezem. Pokud myčku nemáš nebo vaříš často pro více lidí, vyplatí se investovat do větší vany nebo druhé menší vany navíc.</div>
            </section>

            <section id="montaz">
              <h2>Způsoby montáže dřezu</h2>
              <p>Typ montáže ovlivňuje jak vzhled, tak praktičnost čištění a náročnost instalace. Vybírej podle typu pracovní desky a celkového stylu kuchyně.</p>
              <h3>Montáž do desky (vestavná)</h3>
              <p>Nejběžnější a nejlevnější varianta. Dřez se vsadí do vyřezaného otvoru a okraj dřezu lehce přesahuje desku. Funguje s laminátovými i kamennými deskami a montáž zvládne i méně zkušený řemeslník.</p>
              <h3>Podstavná montáž</h3>
              <p>Dřez se připevní pod pracovní desku, takže přechod mezi deskou a dřezem je hladký. Vypadá elegantně a snadno se z desky stírají drobky a voda přímo do dřezu. Vyžaduje ale masivnější desku (typicky kámen nebo kompozit) a přesnější instalaci.</p>
              <h3>Flush-mount (zápustná montáž)</h3>
              <p>Dřez je zarovnaný s povrchem desky tak, že vznikne téměř neviditelný přechod. Vzhledově nejčistší řešení, ale technicky nejnáročnější a tedy i nejdražší – vyžaduje přesné CNC opracování desky a zkušeného instalatéra.</p>
            </section>

            <section id="baterie">
              <h2>Typy baterií a užitečné funkce</h2>
              <p>Kuchyňská baterie se používá desetkrát denně, takže se vyplatí investovat do kvalitní kartuše a praktických funkcí.</p>
              <h3>Základní typy baterií</h3>
              <ul>
                <li><strong>Stojánková baterie s pevnou hubicí</strong> – nejlevnější varianta, vhodná do malých kuchyní</li>
                <li><strong>Baterie s výsuvnou hubicí (pull-out/pull-down)</strong> – hubici lze vytáhnout a směrovat, ideální pro mytí velkých hrnců a pánví</li>
                <li><strong>Vysoká oblouková baterie</strong> – elegantní vzhled, dává více prostoru pod hubicí</li>
                <li><strong>Dvouramenná baterie (se sprchovou hadicí navíc)</strong> – praktická pro plnění hrnců i mytí v dřezu zároveň</li>
              </ul>
              <h3>Užitečné funkce</h3>
              <ul>
                <li><strong>Výsuvná hubice s přepínáním proudu/sprchy</strong> – usnadní oplach zeleniny i čištění dřezu</li>
                <li><strong>Integrovaná filtrace vody</strong> – samostatný kohoutek nebo přepínač na baterii dodává filtrovanou pitnou vodu bez zvláštního filtru pod dřezem</li>
                <li><strong>Dotykové nebo senzorové ovládání</strong> – zapnutí dotykem ruky nebo bez dotyku, praktické při manipulaci se syrovým masem</li>
                <li><strong>Omezovač teploty a průtoku</strong> – šetří vodu a chrání před opařením</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Při výběru baterie zkontroluj rozteč otvoru v desce a výšku nad dřezem – vysoká oblouková baterie se nemusí vejít pod horní skříňky.</div>
            </section>

            <section id="udrzba">
              <h2>Údržba a čištění</h2>
              <p>Pravidelná péče prodlouží životnost dřezu i baterie a udrží kuchyň hezky vypadající.</p>
              <ul>
                <li><strong>Nerez</strong> – stírej po směru broušení nerezu, používej neabrazivní prostředky, otisky prstů odstraníš jemným olejem na tkanině</li>
                <li><strong>Granit</strong> – stačí voda a saponát, vyhni se agresivním chemikáliím s vysokým obsahem kyselin, které mohou narušit povrch</li>
                <li><strong>Keramika</strong> – odolá běžným čisticím prostředkům, ale nepokládej na ni horké pánve přímo bez podložky, hrozí prasknutí</li>
                <li><strong>Baterie</strong> – pravidelně čisti perlátor (sítko na konci hubice) od vodního kamene, u oblastí s tvrdou vodou alespoň jednou za 2–3 měsíce</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Po umytí dřez vždy vytři suchým hadříkem – zabráníš tak usazování vodního kamene a skvrnám od kapek, zvlášť u tmavých granitových dřezů.</div>
            </section>

            <section id="tipy">
              <h2>Tipy na kombinaci dřezu a baterie podle rozpočtu</h2>
              <p>Než se rozhodneš, zvaž celkový rozpočet na kuchyň – dřez a baterie tvoří jen část nákladů, ale jejich kvalita se projeví v každodenním používání.</p>
              <ul>
                <li><strong>Nízký rozpočet (do 4 000 Kč)</strong> – nerezový dřez s odkapávací plochou + stojánková baterie s pevnou hubicí. Funkční a levné řešení s dobrou dostupností náhradních dílů.</li>
                <li><strong>Střední rozpočet (4 000–12 000 Kč)</strong> – granitový dřez s jednou nebo dvěma vanami + baterie s výsuvnou hubicí. Dobrý poměr vzhledu, odolnosti a komfortu.</li>
                <li><strong>Vyšší rozpočet (12 000 Kč a více)</strong> – podstavný nebo flush-mount granitový/keramický dřez + designová baterie s filtrací vody a dotykovým ovládáním. Investice, která vydrží i další rekonstrukci.</li>
              </ul>
              <p>Pro lepší přehled o celkových nákladech na rekonstrukci kuchyně doporučujeme využít <Link href="/kalkulacky/cena-kuchyne" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačku ceny kuchyně</Link>, kde si rozpočet rozdělíš na jednotlivé položky a uvidíš, kolik na dřez a baterii zbývá.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jaký materiál dřezu je nejlepší?", a: "Nerez je nejodolnější a nejlevnější, granit (kompozit) vypadá luxusněji a tlumí hluk, keramika je elegantní, ale náchylnější na poškrábání a otřep. Výběr závisí na stylu kuchyně a rozpočtu." },
                  { q: "Jak velký dřez potřebuji?", a: "Pro malou domácnost (1–2 osoby) postačí jednoduchý dřez 50–60 cm šířky. Pro rodiny s dětmi a častým vařením je lepší dřez s odkapávací plochou nebo dvěma vanami, ideálně 80 cm a více." },
                  { q: "Jaký typ montáže dřezu vybrat?", a: "Montáž do desky je nejjednodušší a nejlevnější. Podstavná montáž (pod kamenem) vypadá elegantně a snadno se čistí, ale vyžaduje pevnější desku. Flush-mount je nejnáročnější na instalaci, ale dává nejčistší vzhled." },
                  { q: "Jaké funkce baterie se nejvíce hodí do kuchyně?", a: "Výsuvná hubice je užitečná pro snadné mytí velkých hrnců, integrovaná filtrace vody šetří kupování balené vody a dotykové nebo senzorové ovládání zlepšuje hygienu při vaření." },
                  { q: "Kolik stojí dřez s baterií celkem?", a: "Základní kombinace nerezového dřezu a jednoduché baterie vyjde od cca 2 500 Kč. Kvalitní granitový dřez s baterií s výsuvnou hubicí a filtrací se pohybuje od 8 000 do 20 000 Kč i více." },
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
                <li><a href="#materialy">Materiály dřezů</a></li>
                <li><a href="#velikost">Velikost a počet van</a></li>
                <li><a href="#montaz">Způsoby montáže</a></li>
                <li><a href="#baterie">Typy baterií</a></li>
                <li><a href="#udrzba">Údržba a čištění</a></li>
                <li><a href="#tipy">Tipy podle rozpočtu</a></li>
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
