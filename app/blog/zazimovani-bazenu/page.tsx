import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak zazimovat zahradní bazén, aby vydržel do dalšího léta",
  description: "Vypouštění, čištění, zazimovací chemie a ochrana konstrukce – jak bazén bezpečně připravit na zimu.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/zazimovani-bazenu" },
  openGraph: { title: "Jak zazimovat zahradní bazén, aby vydržel do dalšího léta", description: "Vypouštění, čištění, zazimovací chemie a ochrana konstrukce před mrazem.", url: "https://www.domovniguru.cz/blog/zazimovani-bazenu", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-12T08:00:00Z", modifiedTime: "2026-06-12T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20zazimovat%20zahradn%C3%AD%20baz%C3%A9n%2C%20aby%20vydr%C5%BEel%20do%20dal%C5%A1%C3%ADho%20l%C3%A9ta&cat=blog", width: 1200, height: 630, alt: "Jak zazimovat zahradní bazén, aby vydržel do dalšího léta" }] },
  twitter: { card: "summary_large_image", title: "Jak zazimovat zahradní bazén, aby vydržel do dalšího léta", description: "Vypouštění, čištění, zazimovací chemie a ochrana konstrukce před mrazem." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/zazimovani-bazenu#article", "headline": "Jak zazimovat zahradní bazén, aby vydržel do dalšího léta", "datePublished": "2026-06-12T08:00:00Z", "dateModified": "2026-06-12T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["zazimování bazénu", "jak zazimovat bazén", "vypuštění bazénu na zimu", "zazimovací chemie", "ochrana bazénu před mrazem"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Sezónní údržba", "item": "https://www.domovniguru.cz/blog/kategorie/sezonni-udrzba" }, { "@type": "ListItem", "position": 4, "name": "Jak zazimovat zahradní bazén", "item": "https://www.domovniguru.cz/blog/zazimovani-bazenu" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Kdy je nejlepší doba na zazimování bazénu?", "acceptedAnswer": { "@type": "Answer", "text": "Ideální je zazimovat bazén ve chvíli, kdy teplota vody trvale klesne pod 12–15 °C, obvykle v polovině až na konci října. Při vyšší teplotě se v bazénu ještě množí řasy a zazimovací chemie nebude účinná tak dlouho." } }, { "@type": "Question", "name": "Musím bazén před zimou úplně vypustit?", "acceptedAnswer": { "@type": "Answer", "text": "U zapuštěných bazénů se voda nikdy nevypouští úplně – hrozí poškození pláště tlakem okolní zeminy. Hladina se sníží pod skimmer a trysky. Nadzemní bazény, které se na zimu nepoužívají, je možné vypustit úplně, ale vždy podle doporučení výrobce konstrukce." } }, { "@type": "Question", "name": "Jak ochráním bazén před poškozením ledem?", "acceptedAnswer": { "@type": "Answer", "text": "Na hladinu se umisťují plovoucí polštáře nebo expandující dřevěné špalky (tzv. zazimovací polštáře), které zachytí tlak rozpínajícího se ledu a chrání stěny i fólii. Bez nich může led při mrznutí vodu roztáhnout a poškodit obklad nebo konstrukci skimmeru." } }, { "@type": "Question", "name": "Co se stane, když nezazimuji filtraci a čerpadlo?", "acceptedAnswer": { "@type": "Answer", "text": "Pokud zůstane voda v čerpadle, filtru nebo potrubí, mráz ji zmrazí a rozpínající se led prasklé skořepiny čerpadla, filtrační nádoby i trubky rozláme. Oprava nebo výměna těchto komponent stojí řádově tisíce korun, proto je nutné vše důsledně vypustit a vyfoukat." } }, { "@type": "Question", "name": "Jak připravím bazén na jaro po zazimování?", "acceptedAnswer": { "@type": "Answer", "text": "Na jaře sejmete zimní plachtu, odstraníte zazimovací polštáře, propláchnete a znovu napustíte filtraci, doplníte vodu na provozní hladinu a postupně rozjedete filtraci. Voda se poté musí znovu vyvážit chemicky – pH, alkalita a dezinfekce – než se bazén začne používat." } }] }] };

const RELATED = [
  { title: "Příprava domu na zimu – kompletní checklist", href: "/blog/priprava-domu-na-zimu", read: "7 min" },
  { title: "Jak přezimovat zahradní vodovodní přípojku", href: "/blog/prezimovat-zahradni-vodu", read: "5 min" },
  { title: "Jak ochránit rostliny před zimou", href: "/blog/ochrana-rostlin-pred-zimou", read: "5 min" },
  { title: "Jak ošetřit zahradní nábytek na zimu", href: "/blog/osetrit-zahradni-nabytek", read: "4 min" },
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
              <span>Jak zazimovat zahradní bazén</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">🍂 Sezónní údržba</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak zazimovat zahradní bazén, aby vydržel do dalšího léta</h1>
              <p className="article-lead">Bazén bez pořádného zazimování může za jednu zimu utrpět škody za desítky tisíc korun – popraskaná fólie, rozlámané čerpadlo, zničený filtr. Dobrá zpráva je, že pořádné zazimování zvládneš za jedno odpoledne a stojí jen pár stovek za chemii.</p>
              <div className="article-meta-row"><span>Aktualizováno: 12. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#kdy-zacit">Kdy začít se zazimováním</a></li>
                <li><a href="#cisteni">Vyčištění bazénu před zazimováním</a></li>
                <li><a href="#hladina">Snížení a vypuštění hladiny vody</a></li>
                <li><a href="#filtrace">Zazimování filtrace a čerpadla</a></li>
                <li><a href="#chemie">Zazimovací chemie</a></li>
                <li><a href="#ochrana">Ochrana proti mrazu a zakrytí bazénu</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="kdy-zacit">
              <h2>Kdy začít se zazimováním – sleduj teplotu vody</h2>
              <p>Nejčastější chyba je zazimovat bazén příliš brzy. Pokud je voda ještě teplá, řasy a bakterie se v ní dál množí a zazimovací chemie se rychle spotřebuje – na jaře pak najdeš zelenou kaši místo čisté vody.</p>
              <p>Správný okamžik je, když teplota vody trvale klesne pod <strong>12–15 °C</strong> a venkovní teploty se už pravidelně blíží nule. V Česku to bývá <strong>polovina až konec října</strong>, v teplejších letech klidně začátek listopadu. Počasí sleduj a nezazimovávej narychlo den před prvním mrazem – na pořádné vyčištění a vypuštění potřebuješ čas.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud jsi bazén používala až do podzimu, je rozumné nechat filtraci běžet ještě týden po posledním koupání, abys odfiltrovala zbytky nečistot. Šetří to práci při zazimovací chemii.</div>
            </section>

            <section id="cisteni">
              <h2>Vyčištění bazénu před zazimováním</h2>
              <p>Čistota vody na podzim rozhoduje o tom, v jakém stavu bazén najdeš na jaře. Cokoliv, co zůstane ve vodě nebo na stěnách přes zimu, se rozkládá a vytváří usazeniny, které se na jaře hůř odstraňují.</p>
              <ul>
                <li><strong>Vysav dno a stěny</strong> bazénovým vysavačem – odstraníš písek, listí a usazeniny.</li>
                <li><strong>Vykartáčuj stěny a vodní linku</strong>, kde se tvoří mastný povlak a řasy.</li>
                <li><strong>Vyčisti skimmer a předfiltr čerpadla</strong> – zbytky listí by tu přes zimu zahnívaly.</li>
                <li><strong>Sundej příslušenství</strong> – žebříky, hračky, trysky a tryskové hubice, které by mráz mohl poškodit.</li>
                <li><strong>Vyvaž chemii vody</strong> – pH na 7,2–7,4 a alkalitu na doporučenou hodnotu, než přidáš zazimovací přípravky. Nevyvážená voda totiž rozkládá zazimovací chemii rychleji.</li>
              </ul>
              <p>Teprve po důkladném vyčištění má smysl pokračovat dál – zazimovací chemie nedokáže nahradit mechanické odstranění nečistot.</p>
            </section>

            <section id="hladina">
              <h2>Snížení a vypuštění hladiny vody podle typu bazénu</h2>
              <h3>Zapuštěné bazény</h3>
              <p>U zapuštěného (zemního) bazénu se voda <strong>nikdy nevypouští úplně</strong>. Prázdná konstrukce by čelila tlaku okolní zeminy a podzemní vody zvenčí, a hrozí zborcení nebo vyboulení stěn i dna. Hladinu stačí snížit přibližně <strong>10–15 cm pod úroveň skimmeru a trysek</strong>, aby do nich nezatekla voda, která by po zamrznutí potrubí roztrhla.</p>
              <h3>Nadzemní bazény</h3>
              <p>Nadzemní bazény, které se na zimu nedemontují, se obvykle také jen sníží pod úroveň trysek a skimmeru – stěny z plechu nebo kompozitu tlak ledu z velké části vydrží, pokud je hladina níž než přívody. Menší nafukovací nebo rámové bazény, které přes zimu skládáš, je naopak vhodné <strong>úplně vypustit, vysušit a uskladnit</strong> v garáži nebo sklepě – mráz a UV záření fólii za pár sezón zničí.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Vždy se řiď doporučením výrobce konkrétní konstrukce – u kompozitních a skimmerových bazénů se postupy v detailech liší a špatný odhad hladiny je nejčastější příčinou zimních škod.</div>
            </section>

            <section id="filtrace">
              <h2>Zazimování filtrace a čerpadla</h2>
              <p>Filtrace a čerpadlo jsou nejdražší součásti bazénového systému a zároveň nejvíc náchylné na poškození mrazem – stačí pár kapek vody, které zmrznou a roztrhnou plastovou skořepinu.</p>
              <ul>
                <li><strong>Vypusť pískovou nebo kartušovou filtraci</strong> – odšroubuj vypouštěcí zátku na dně nádoby filtru a nech ji otevřenou.</li>
                <li><strong>Vypusť čerpadlo</strong> – odšroubuj vypouštěcí zátky na tělese čerpadla, případně demontuj a uskladni v temperovaném prostoru (sklep, kotelna, garáž).</li>
                <li><strong>Vyfoukej potrubí</strong> – kompresorem nebo vysavačem na fukar profoukni všechny rozvody mezi skimmerem, filtrací a tryskami, aby v nich nezůstala voda.</li>
                <li><strong>Demontuj a vyčisti hadice</strong> spojující bazén s filtrací, pokud to konstrukce umožňuje – sníží to riziko prasklin.</li>
                <li><strong>Solinátor nebo tepelné čerpadlo</strong> – pokud bazén má, postupuj podle návodu výrobce; většinou se také musí vypustit a chránit před mrazem.</li>
              </ul>
              <p>Pokud máš doma i další zahradní rozvody vody, vyplatí se zazimovat vše najednou – více v článku o <Link href="/blog/prezimovat-zahradni-vodu" style={{ color: "#2a6496", textDecoration: "underline" }}>přezimování zahradní vodovodní přípojky</Link>, kde je postup vypouštění a ochrany potrubí popsán podrobně.</p>
            </section>

            <section id="chemie">
              <h2>Zazimovací chemie – proč ji použít</h2>
              <p>Zazimovací (konzervační) přípravky se přidávají do vody před uzavřením bazénu na zimu. Jejich úkolem je zabránit růstu řas a bakterií po celou dobu, kdy voda nebude filtrovaná ani dezinfikovaná běžným způsobem.</p>
              <ul>
                <li><strong>Algicid v dlouhodobé koncentraci</strong> – zabraňuje tvorbě řas, které by se jinak na dně a stěnách rozmnožily během teplejších zimních dnů.</li>
                <li><strong>Zazimovací prostředek (winterizer)</strong> – kombinovaný přípravek, často obsahuje i látky proti vápenatým usazeninám a stabilizátor pH.</li>
                <li><strong>Dávkování podle objemu bazénu</strong> – přesné množství najdeš na obalu přípravku, přidávej až po vyčištění a vyvážení vody.</li>
              </ul>
              <p>Chemii nalévej rovnoměrně po hladině a nech krátce běžet filtraci (pokud ji ještě nemáš vypuštěnou), aby se přípravek promíchal po celém objemu. Až poté filtraci definitivně vypusť podle postupu v předchozí sekci.</p>
            </section>

            <section id="ochrana">
              <h2>Ochrana proti mrazu, zakrytí bazénu a kontrola během zimy</h2>
              <h3>Plovoucí polštáře proti ledu</h3>
              <p>Na hladinu vlož <strong>plovoucí zazimovací polštáře</strong> (vzduchové polštáře nebo plastové trubky) – při mrznutí vody se led roztahuje a polštář tento tlak pohltí, takže nepoškodí stěny ani fólii bazénu. U fóliových bazénů je tato ochrana téměř povinná.</p>
              <h3>Expandující objekty do skimmeru</h3>
              <p>Do otvoru skimmeru je vhodné umístit speciální expandující špalek (tzv. zimní zátka nebo gizmo) – pokud do skimmeru zateče voda a zmrzne, špalek se stlačí a zabrání rozlomení plastového tělesa skimmeru.</p>
              <h3>Zimní plachta</h3>
              <p>Kvalitní zimní plachta zabrání pádu listí, větví a nečistot do vody a omezí růst řas díky zastínění. U nadzemních bazénů zároveň pomáhá udržet plovoucí polštáře na místě a chrání horní hranu konstrukce před sněhem a ledem.</p>
              <h3>Kontrola během zimy</h3>
              <p>Jednou za 3–4 týdny se vyplatí bazén zkontrolovat – odstranit napadaný sníh z plachty (velká váha sněhu může plachtu i konstrukci poškodit), zkontrolovat polohu plovoucích polštářů a ujistit se, že plachta dobře drží a voda nezatéká k vypuštěným rozvodům.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Na jaře, až teploty trvale vystoupí nad cca 15 °C, je čas na opačný postup – sejmout plachtu, znovu napojit a propláchnout filtraci, doplnit vodu a chemicky ji vyvážit. Podrobný postup najdeš v článku <Link href="/blog/dum-priprava-na-leto" style={{ color: "#2a6496", textDecoration: "underline" }}>příprava domu na léto</Link>.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Kdy je nejlepší doba na zazimování bazénu?", a: "Ideální je zazimovat bazén ve chvíli, kdy teplota vody trvale klesne pod 12–15 °C, obvykle v polovině až na konci října. Při vyšší teplotě se v bazénu ještě množí řasy a zazimovací chemie nebude účinná tak dlouho." },
                  { q: "Musím bazén před zimou úplně vypustit?", a: "U zapuštěných bazénů se voda nikdy nevypouští úplně – hrozí poškození pláště tlakem okolní zeminy. Hladina se sníží pod skimmer a trysky. Nadzemní bazény, které se na zimu nepoužívají, je možné vypustit úplně, ale vždy podle doporučení výrobce konstrukce." },
                  { q: "Jak ochráním bazén před poškozením ledem?", a: "Na hladinu se umisťují plovoucí polštáře nebo expandující dřevěné špalky (tzv. zazimovací polštáře), které zachytí tlak rozpínajícího se ledu a chrání stěny i fólii. Bez nich může led při mrznutí vodu roztáhnout a poškodit obklad nebo konstrukci skimmeru." },
                  { q: "Co se stane, když nezazimuji filtraci a čerpadlo?", a: "Pokud zůstane voda v čerpadle, filtru nebo potrubí, mráz ji zmrazí a rozpínající se led prasklé skořepiny čerpadla, filtrační nádoby i trubky rozláme. Oprava nebo výměna těchto komponent stojí řádově tisíce korun, proto je nutné vše důsledně vypustit a vyfoukat." },
                  { q: "Jak připravím bazén na jaro po zazimování?", a: "Na jaře sejmete zimní plachtu, odstraníte zazimovací polštáře, propláchnete a znovu napustíte filtraci, doplníte vodu na provozní hladinu a postupně rozjedete filtraci. Voda se poté musí znovu vyvážit chemicky – pH, alkalita a dezinfekce – než se bazén začne používat." },
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
                <li><a href="#kdy-zacit">Kdy začít se zazimováním</a></li>
                <li><a href="#cisteni">Vyčištění bazénu</a></li>
                <li><a href="#hladina">Snížení hladiny vody</a></li>
                <li><a href="#filtrace">Filtrace a čerpadlo</a></li>
                <li><a href="#chemie">Zazimovací chemie</a></li>
                <li><a href="#ochrana">Ochrana a zakrytí</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/sezonni-udrzba" className="sidebar-cat-link">🍂 Sezónní údržba<span>20 článků →</span></Link>
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
