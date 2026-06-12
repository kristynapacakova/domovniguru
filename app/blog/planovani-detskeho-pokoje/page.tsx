import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak naplánovat dětský pokoj, který poroste s dítětem",
  description: "Tipy na nábytek, úložné prostory a uspořádání dětského pokoje, který vydrží od batolete až po školáka.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/planovani-detskeho-pokoje" },
  openGraph: { title: "Jak naplánovat dětský pokoj, který poroste s dítětem", description: "Tipy na nábytek, úložné prostory a uspořádání dětského pokoje, který vydrží od batolete až po školáka.", url: "https://www.domovniguru.cz/blog/planovani-detskeho-pokoje", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-12T08:00:00Z", modifiedTime: "2026-06-12T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20napl%C3%A1novat%20d%C4%9Btsk%C3%BD%20pokoj%2C%20kter%C3%BD%20poroste%20s%20d%C3%ADt%C4%9Btem&cat=blog", width: 1200, height: 630, alt: "Jak naplánovat dětský pokoj, který poroste s dítětem" }] },
  twitter: { card: "summary_large_image", title: "Jak naplánovat dětský pokoj, který poroste s dítětem", description: "Tipy na nábytek, úložné prostory a uspořádání dětského pokoje, který vydrží od batolete až po školáka." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/planovani-detskeho-pokoje#article", "headline": "Jak naplánovat dětský pokoj, který poroste s dítětem", "datePublished": "2026-06-12T08:00:00Z", "dateModified": "2026-06-12T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["dětský pokoj", "plánování dětského pokoje", "nábytek do dětského pokoje", "úložné prostory pro děti", "bezpečnost dětského pokoje"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Stěhování & rekonstrukce", "item": "https://www.domovniguru.cz/blog/kategorie/stehovani" }, { "@type": "ListItem", "position": 4, "name": "Jak naplánovat dětský pokoj, který poroste s dítětem", "item": "https://www.domovniguru.cz/blog/planovani-detskeho-pokoje" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jak velký by měl být dětský pokoj?", "acceptedAnswer": { "@type": "Answer", "text": "Ideální je 10–14 m², ale i menší pokoj lze dobře využít, pokud zvolíš multifunkční nábytek a promyšlené zónování. Důležitější než velikost je uspořádání a možnost prostor postupně přizpůsobovat." } }, { "@type": "Question", "name": "Jaký nábytek vydrží od batolete až po školáka?", "acceptedAnswer": { "@type": "Answer", "text": "Nejdéle vydrží postel s vyjímatelnou zábranou, výškově nastavitelný psací stůl a regálový systém s variabilními moduly. Vyhni se nábytku navrženému jen pro jednu věkovou kategorii, např. dětským postýlkám bez možnosti přestavby." } }, { "@type": "Question", "name": "Jak zónovat malý dětský pokoj?", "acceptedAnswer": { "@type": "Answer", "text": "I v malém pokoji lze oddělit spánek, hraní a učení vizuálně – pomocí koberce, barvy stěny nebo nábytku jako přepážky. Postel umísti do klidného rohu, pracovní koutek k oknu pro denní světlo." } }, { "@type": "Question", "name": "Jaké materiály jsou v dětském pokoji bezpečné?", "acceptedAnswer": { "@type": "Answer", "text": "Volit by se měly certifikované, neztratitelné nátěry a laky bez škodlivých látek, masivní nebo kvalitní lamino bez ostrých hran, a textilie z přírodních, snadno udržovatelných materiálů. Vždy ukotvi vysoké skříně a regály ke zdi." } }, { "@type": "Question", "name": "Jak často měnit uspořádání dětského pokoje?", "acceptedAnswer": { "@type": "Answer", "text": "Většinou stačí větší úpravu jednou za 3–4 roky – při přechodu z batolecího věku do předškolního a pak do školního. Drobné změny (přesun stolu, doplnění úložných boxů) lze dělat podle aktuálních potřeb dítěte." } }] }] };

const RELATED = [
  { title: "Jaké barvy do dětského pokoje vybrat", href: "/blog/barvy-do-detskeho-pokoje", read: "5 min" },
  { title: "Úložné prostory v malém bytě", href: "/blog/uloziste-v-malem-byte", read: "5 min" },
  { title: "Plánování osvětlení bytu krok za krokem", href: "/blog/planovani-osvetleni-bytu", read: "6 min" },
  { title: "Plánování kuchyně krok za krokem", href: "/blog/planovani-kuchyne-krok-za-krokem", read: "7 min" },
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
              <span>Jak naplánovat dětský pokoj, který poroste s dítětem</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏠 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak naplánovat dětský pokoj, který poroste s dítětem</h1>
              <p className="article-lead">Dětský pokoj se za pár let zásadně promění – z místnosti pro batole se stane herna a později pracovna školáka. Promyšlené plánování od začátku ušetří peníze i nervy, protože nábytek a uspořádání lze postupně přizpůsobovat, aniž bys musela pokoj kompletně zařizovat znovu.</p>
              <div className="article-meta-row"><span>Aktualizováno: 12. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#zonovani">Zónování pokoje</a></li>
                <li><a href="#nabytek">Výběr nábytku s ohledem na růst dítěte</a></li>
                <li><a href="#uloziste">Úložné prostory a organizace hraček</a></li>
                <li><a href="#bezpecnost">Bezpečnost a vhodné materiály</a></li>
                <li><a href="#barvy-osvetleni">Barvy a osvětlení pokoje</a></li>
                <li><a href="#postupne-upravy">Jak pokoj postupně upravovat s věkem dítěte</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="zonovani">
              <h2>1. Zónování pokoje</h2>
              <p>Dětský pokoj by měl vždy obsahovat tři základní zóny – spánek, hraní a učení. I v menší místnosti je dobré tyto oblasti od sebe alespoň vizuálně oddělit, aby dítě intuitivně rozeznávalo, kde má spát, kde si hrát a kde se soustředit na úkoly.</p>
              <h3>Zóna spánku</h3>
              <p>Postel umísti do nejklidnější části pokoje, ideálně dál od dveří a přímého proudění vzduchu. Pokud je v pokoji okno, postel by neměla stát přímo pod ním ani u radiátoru.</p>
              <h3>Zóna hraní</h3>
              <p>Herní koutek funguje nejlépe na koberci nebo měkké podlahové krytině, s dostatkem volného prostoru pro stavebnice, hry na zemi a pohyb. U menších dětí je vhodné tuto zónu umístit blízko úložných boxů s hračkami.</p>
              <h3>Zóna učení</h3>
              <p>Psací stůl patří k oknu, aby dítě mělo dostatek přirozeného světla. Tato zóna se postupně rozšiřuje s věkem – u batolat může stačit malý stolek na kreslení, u školáka už plnohodnotné pracovní místo s úložnými prostory na školní potřeby.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Zónování zvýrazni barevně nebo pomocí koberce – i bez stavebních úprav dítě snadno pozná, kde je „postýlková", „herní" a „pracovní" část pokoje.</div>
            </section>

            <section id="nabytek">
              <h2>2. Výběr nábytku s ohledem na růst dítěte</h2>
              <p>Nejdražší chybou při zařizování dětského pokoje je nákup nábytku, který vydrží jen pár let. Vyplatí se investovat do kusů, které se dají postupně přizpůsobovat – ušetříš tak za opakované nákupy a zároveň omezíš zátěž spojenou s výměnou celého pokoje.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ nábytku</th><th>Co hledat</th><th>Vydrží přibližně</th></tr></thead>
                  <tbody>
                    <tr><td>Postel</td><td>Rozměr 160–200 cm s vyjímatelnou bočnicí</td><td>od batolete do dospělosti</td></tr>
                    <tr><td>Psací stůl</td><td>Výškově a sklonově nastavitelná deska</td><td>od předškoláka do studií</td></tr>
                    <tr><td>Židle</td><td>Nastavitelná výška sedu i opěradla</td><td>5–10 let</td></tr>
                    <tr><td>Skříň / regál</td><td>Modulární systém, přidávatelné police</td><td>celé dětství</td></tr>
                    <tr><td>Přebalovací pult</td><td>Přestavitelný na komodu nebo stolek</td><td>1–3 roky, pak transformace</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Při výběru barev nábytku i stěn je dobré počítat s tím, že vkus dítěte se bude měnit. Pomůže zvolit neutrální základ a doplnit ho výměnnými dekoracemi – textiliemi, samolepkami nebo obrázky, které lze snadno obměnit. Pokud plánuješ i přemalování stěn v budoucnu, <Link href="/kalkulacky/kolik-barvy" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačka na spotřebu barvy</Link> ti pomůže odhadnout, kolik materiálu budeš potřebovat.</p>
            </section>

            <section id="uloziste">
              <h2>3. Úložné prostory a organizace hraček</h2>
              <p>Množství hraček, oblečení a školních pomůcek se s věkem dítěte mění, ale potřeba úložného prostoru roste téměř neustále. Vyplatí se naplánovat úložiště s rezervou už od začátku.</p>
              <ul>
                <li><strong>Nízké boxy a koše</strong> – ideální pro batolata, snadno dosáhnou a samy si uklidí hračky</li>
                <li><strong>Modulární regály</strong> – police lze přidávat nebo přesouvat podle aktuální výšky a potřeb dítěte</li>
                <li><strong>Úložný prostor pod postelí</strong> – využije se zejména u školáků pro sezónní oblečení nebo méně používané hračky</li>
                <li><strong>Skříň s přihrádkami</strong> – kombinace tyče na oblečení, zásuvek a polic na hračky i knihy</li>
                <li><strong>Nástěnné háčky a lišty</strong> – praktické pro batohy, bundy a oblíbené hračky v dosahu dítěte</li>
              </ul>
              <p>Pokud řešíš úložné prostory v celém bytě, nejen v dětském pokoji, podívej se na náš článek o <Link href="/blog/uloziste-v-malem-byte" style={{ color: "#2a6496", textDecoration: "underline" }}>úložných prostorech v malém bytě</Link> – mnoho principů platí i pro detský pokoj.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Zvol úložiště v takové výšce, aby na něj dítě samo dosáhlo. Podpoříš tím samostatnost při úklidu od malička.</div>
            </section>

            <section id="bezpecnost">
              <h2>4. Bezpečnost a vhodné materiály</h2>
              <p>Bezpečnost je v dětském pokoji prioritou číslo jedna – a to platí jak pro samotný nábytek, tak pro povrchové úpravy a textilie.</p>
              <h3>Ukotvení nábytku</h3>
              <p>Všechny vyšší kusy nábytku – skříně, regály, komody – by měly být přichyceny ke zdi pomocí kotvicích pásků nebo úchytů. Dítě se může o nábytek opřít, vylézt na něj nebo do něj zatáhnout, a převrácení vysoké skříně může mít vážné následky.</p>
              <h3>Povrchy a hrany</h3>
              <p>U menších dětí jsou vhodné nábytkové kusy se zaoblenými hranami nebo s ochrannými lištami na rohy. Nátěry a laky volí certifikované, bez rozpouštědel a škodlivých látek – zejména u postelí a stolů, kde dítě tráví hodně času v blízkém kontaktu.</p>
              <h3>Textilie a podlaha</h3>
              <p>Koberce a textilie volíme z přírodních nebo snadno omývatelných materiálů, protihořlavé a bez drobných ozdobných prvků, které by mohly být nebezpečné při polykání u nejmenších dětí.</p>
              <div className="article-tip"><strong>⚠️ Upozornění:</strong> Šňůry od žaluzií a závěsů vždy zkrať nebo umísti mimo dosah postýlky a hracího koutku – patří mezi nejčastější příčiny úrazů malých dětí v ložnicích.</div>
            </section>

            <section id="barvy-osvetleni">
              <h2>5. Barvy a osvětlení pokoje</h2>
              <p>Barvy a osvětlení ovlivňují nejen vzhled pokoje, ale i to, jak se v něm dítě cítí, jak dobře usíná a jak se soustředí při hraní nebo učení.</p>
              <p>Pro stěny se obecně doporučují klidnější, neutrální odstíny jako základ – usnadní to budoucí kombinace s textiliemi a doplňky, které je snadné měnit podle aktuálního věku a zájmů dítěte. Výraznější barvy lze použít na jedné akcentové stěně nebo v doplňcích, kde je výměna snadná a levná. Podrobněji se barvám věnujeme v článku <Link href="/blog/barvy-do-detskeho-pokoje" style={{ color: "#2a6496", textDecoration: "underline" }}>jaké barvy do dětského pokoje vybrat</Link>.</p>
              <p>Osvětlení by mělo kombinovat několik zdrojů: stropní svítidlo pro celkové osvětlení, stolní lampu nad pracovním místem a noční světlo s tlumeným jasem pro klidné usínání i orientaci v noci. S plánováním osvětlení v celém bytě, včetně dětského pokoje, ti pomůže náš článek <Link href="/blog/planovani-osvetleni-bytu" style={{ color: "#2a6496", textDecoration: "underline" }}>plánování osvětlení bytu krok za krokem</Link>.</p>
            </section>

            <section id="postupne-upravy">
              <h2>6. Jak pokoj postupně upravovat s věkem dítěte</h2>
              <p>Místo jednorázového velkého zařizování je efektivnější naplánovat pokoj jako prostor, který se postupně proměňuje – a to nejlépe ve třech fázích.</p>
              <h3>Batole (1–3 roky)</h3>
              <p>Bezpečná postýlka nebo nízká postel s bočnicí, nízké úložné boxy na hračky, měkký koberec a omezené množství volných drobných předmětů.</p>
              <h3>Předškolák (3–6 let)</h3>
              <p>Přechod na větší postel, doplnění malého stolku na kreslení a malování, rozšíření úložných prostor pro stavebnice, knihy a první hry.</p>
              <h3>Školák (6+ let)</h3>
              <p>Plnohodnotný psací stůl s nastavitelnou výškou, regál na školní pomůcky a knihy, úprava osvětlení pro práci u stolu a postupné omezování herní zóny ve prospěch klidného prostoru na učení.</p>
              <p>Díky modulárnímu nábytku a promyšlenému zónování od začátku zvládneš každou z těchto fází vyřešit jen drobnými úpravami – přesunem police, doplněním nového úložného boxu nebo výměnou textilií – bez nutnosti kupovat celý pokoj znovu.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jak velký by měl být dětský pokoj?", a: "Ideální je 10–14 m², ale i menší pokoj lze dobře využít, pokud zvolíš multifunkční nábytek a promyšlené zónování. Důležitější než velikost je uspořádání a možnost prostor postupně přizpůsobovat." },
                  { q: "Jaký nábytek vydrží od batolete až po školáka?", a: "Nejdéle vydrží postel s vyjímatelnou zábranou, výškově nastavitelný psací stůl a regálový systém s variabilními moduly. Vyhni se nábytku navrženému jen pro jednu věkovou kategorii, např. dětským postýlkám bez možnosti přestavby." },
                  { q: "Jak zónovat malý dětský pokoj?", a: "I v malém pokoji lze oddělit spánek, hraní a učení vizuálně – pomocí koberce, barvy stěny nebo nábytku jako přepážky. Postel umísti do klidného rohu, pracovní koutek k oknu pro denní světlo." },
                  { q: "Jaké materiály jsou v dětském pokoji bezpečné?", a: "Volit by se měly certifikované, neztratitelné nátěry a laky bez škodlivých látek, masivní nebo kvalitní lamino bez ostrých hran, a textilie z přírodních, snadno udržovatelných materiálů. Vždy ukotvi vysoké skříně a regály ke zdi." },
                  { q: "Jak často měnit uspořádání dětského pokoje?", a: "Většinou stačí větší úprava jednou za 3–4 roky – při přechodu z batolecího věku do předškolního a pak do školního. Drobné změny (přesun stolu, doplnění úložných boxů) lze dělat podle aktuálních potřeb dítěte." },
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
                <li><a href="#zonovani">Zónování pokoje</a></li>
                <li><a href="#nabytek">Výběr nábytku</a></li>
                <li><a href="#uloziste">Úložné prostory</a></li>
                <li><a href="#bezpecnost">Bezpečnost a materiály</a></li>
                <li><a href="#barvy-osvetleni">Barvy a osvětlení</a></li>
                <li><a href="#postupne-upravy">Postupné úpravy</a></li>
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
