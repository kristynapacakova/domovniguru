import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sprchový kout nebo vana – co se vyplatí v malé koupelně?",
  description: "Sprchový kout nebo vana? Srovnání ceny, spotřeby vody, rozměrů a komfortu. Poradíme, co vybrat pro malou koupelnu v bytě.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/sprchovy-kout-nebo-vana" },
  openGraph: { title: "Sprchový kout nebo vana – co se vyplatí v malé koupelně?", description: "Srovnání ceny, spotřeby vody, rozměrů a komfortu. Poradíme, co vybrat pro malou koupelnu.", url: "https://www.domovniguru.cz/blog/sprchovy-kout-nebo-vana", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-09T08:00:00Z", modifiedTime: "2026-06-09T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Sprchov%C3%BD%20kout%20nebo%20vana%20%E2%80%93%20co%20se%20vyplat%C3%AD%20v%20mal%C3%A9%20koupeln%C4%9B%3F&cat=blog", width: 1200, height: 630, alt: "Sprchový kout nebo vana – co se vyplatí v malé koupelně?" }] },
  twitter: { card: "summary_large_image", title: "Sprchový kout nebo vana – co se vyplatí v malé koupelně?", description: "Srovnání ceny, spotřeby vody, rozměrů a komfortu. Poradíme, co vybrat pro malou koupelnu." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/sprchovy-kout-nebo-vana#article", "headline": "Sprchový kout nebo vana – co se vyplatí v malé koupelně?", "datePublished": "2026-06-09T08:00:00Z", "dateModified": "2026-06-09T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["sprchový kout", "vana", "malá koupelna", "rekonstrukce koupelny", "sprcha vs vana", "výběr koupelny"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Stěhování & rekonstrukce", "item": "https://www.domovniguru.cz/blog/kategorie/stehovani" }, { "@type": "ListItem", "position": 4, "name": "Sprchový kout nebo vana", "item": "https://www.domovniguru.cz/blog/sprchovy-kout-nebo-vana" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Kolik místa zabere sprchový kout oproti vaně?", "acceptedAnswer": { "@type": "Answer", "text": "Standardní vana zabírá 1,5–1,7 m², zatímco čtvercový sprchový kout 90×90 cm jen 0,81 m². Sprchový kout tedy ušetří v průměru 0,7–0,9 m² podlahové plochy – v malé koupelně to je zásadní rozdíl." } }, { "@type": "Question", "name": "Kolik vody spotřebuje sprcha oproti vaně?", "acceptedAnswer": { "@type": "Answer", "text": "Pětiminutová sprcha spotřebuje přibližně 40–50 litrů vody. Plná vana pojme 150–200 litrů. Sprchování je tedy 3–4× úspornější. Při každodenním koupání je roční úspora v nákladech na vodu a ohřev 3 000–6 000 Kč pro jednu osobu." } }, { "@type": "Question", "name": "Sníží vana hodnotu bytu?", "acceptedAnswer": { "@type": "Answer", "text": "V Česku se obecně udává, že alespoň jedna vana v bytě zvyšuje prodejní atraktivitu, zejména u rodin s dětmi. Moderní sprchový kout s walk-in designem však může nemovitost zhodnotit podobně. Záleží na cílové skupině kupujících a celkovém standardu bytu." } }, { "@type": "Question", "name": "Co jsou sprchové vany a kdy se hodí?", "acceptedAnswer": { "@type": "Answer", "text": "Sprchové vany (kombinace vany a sprchového koutu) mají délku 140–160 cm místo standardních 170 cm a plytší dno. Hodí se do koupelen od 4 m², kde chceme oba komforty v jednom kusu. Cena se pohybuje od 8 000 do 25 000 Kč." } }] }] };

const RELATED = [
  { title: "Rekonstrukce koupelny – kompletní průvodce", href: "/blog/rekonstrukce-koupelny-pruvodce", read: "8 min" },
  { title: "Cena rekonstrukce koupelny – přehled nákladů", href: "/blog/cena-rekonstrukce-koupelny", read: "6 min" },
  { title: "Jak vybrat dlažbu do koupelny", href: "/blog/jak-vybrat-dlazbu-do-koupelny", read: "5 min" },
  { title: "Plánování rekonstrukce bytu – kde začít", href: "/blog/planovani-rekonstrukce-bytu", read: "7 min" },
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
              <span>Sprchový kout nebo vana</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏠 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Sprchový kout nebo vana – co se vyplatí v malé koupelně?</h1>
              <p className="article-lead">Malá koupelna vás nutí k rozhodnutí: sprchový kout, nebo vana? Není to jen otázka vkusu – záleží na rozměrech, spotřebě vody, ceně i tom, kolik lidí koupelnu používá. Tenhle článek vám pomůže vybrat správně.</p>
              <div className="article-meta-row"><span>Publikováno: 9. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#srovnani">Hlavní srovnání</a></li>
                <li><a href="#sprchovy-kout">Sprchový kout – typy a rozměry</a></li>
                <li><a href="#vana">Vana – typy a materiály</a></li>
                <li><a href="#spotreba-vody">Spotřeba vody a náklady</a></li>
                <li><a href="#kombinace">Kombinace sprchy a vany</a></li>
                <li><a href="#pro-koho">Pro koho co</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="srovnani">
              <h2>Hlavní srovnání: sprchový kout vs. vana</h2>
              <p>Začněme přehlednou tabulkou. Čísla vycházejí z běžných českých bytů a reálných cen v roce 2026.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Parametr</th><th>Sprchový kout</th><th>Vana</th></tr></thead>
                  <tbody>
                    <tr><td>Zastavěná plocha</td><td>0,64–1,0 m² (80×80 až 100×100 cm)</td><td>1,4–1,8 m² (délka 150–180 cm)</td></tr>
                    <tr><td>Cena pořízení (základní)</td><td>5 000–15 000 Kč</td><td>4 000–20 000 Kč</td></tr>
                    <tr><td>Cena včetně montáže</td><td>15 000–40 000 Kč</td><td>12 000–45 000 Kč</td></tr>
                    <tr><td>Spotřeba vody (jedno použití)</td><td>40–60 l (5 min sprcha)</td><td>150–200 l (plná vana)</td></tr>
                    <tr><td>Komfort každodenního mytí</td><td>Rychlé, praktické</td><td>Pohodlné, relaxační</td></tr>
                    <tr><td>Nemovitostní hodnota</td><td>Neutrální až pozitivní</td><td>Pozitivní (zejm. pro rodiny)</td></tr>
                    <tr><td>Vhodnost pro rodiny s dětmi</td><td>Méně vhodné</td><td>Ideální</td></tr>
                    <tr><td>Vhodnost pro seniory / bezbariér</td><td>Výborné (walk-in)</td><td>Komplikované (přelézání)</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Nemáte-li koupelnu větší než 5–6 m², vana vám pravděpodobně ukrojí většinu volného prostoru. Sprchový kout ve většině malých bytů dává větší smysl.</div>
            </section>

            <section id="sprchovy-kout">
              <h2>Sprchový kout – typy, rozměry a bezbariérový přístup</h2>
              <p>Sprchové kouty se liší tvarem, vstupem i rozměry. Správný výběr závisí na dispozici vaší koupelny a na tom, kolik místa máte k dispozici.</p>
              <h3>Typy sprchových koutů</h3>
              <ul>
                <li><strong>Čtverec (80×80 nebo 90×90 cm)</strong> – nejčastější v panelácích, minimální varianta pro jednoho člověka. Cena od 5 000 Kč za kout bez montáže.</li>
                <li><strong>Obdélník (80×100, 90×120 nebo 90×140 cm)</strong> – pohodlnější, vhodné i pro dvě osoby. Cena od 7 000 Kč.</li>
                <li><strong>Čtvrtkruh (90×90 nebo 100×100 cm)</strong> – elegantní řešení do rohů, šetří místo díky zaobleným dveřím. Cena od 6 000 Kč.</li>
                <li><strong>Walk-in (bez dveří, nejméně 90×120 cm)</strong> – otevřený design bez sprchových dveří, snadná údržba, moderní vzhled. Vyžaduje dostatečné odizolování zbytku koupelny. Cena od 8 000 Kč za panel.</li>
              </ul>
              <h3>Minimální rozměry</h3>
              <p>Česká norma ČSN 73 4301 doporučuje minimální vnitřní rozměr 80×80 cm. V praxi je ale 90×90 cm komfortnější minimum – zejména pro osoby s nadváhou nebo větší postavou. Pro pohodlné sprchování dvou osob počítejte s 100×140 cm a více.</p>
              <h3>Bezbariérový přístup</h3>
              <p>Sprchový kout bez sprchové vaničky (nulový práh, spádovaná podlaha) je nejlepší řešení pro seniory a osoby se sníženou pohyblivostí. Vstup na vozíku vyžaduje šířku nejméně 90 cm, ideálně 110–120 cm. Sklopné sprchové sedátko za 1 500–4 000 Kč výrazně zvýší komfort.</p>
            </section>

            <section id="vana">
              <h2>Vana – typy, rozměry a materiály</h2>
              <p>Vana v koupelně má nezastupitelnou roli tam, kde žijí rodiny s dětmi nebo kde chcete možnost relaxačního koupele. Volba správného typu závisí na prostoru i rozpočtu.</p>
              <h3>Typy van</h3>
              <ul>
                <li><strong>Zabudovaná (vestavěná) vana</strong> – nejběžnější typ v bytových domech. Umísťuje se ke stěně nebo do rohu, záklop z obkladů nebo plastových panelů. Cena bez montáže: 4 000–12 000 Kč.</li>
                <li><strong>Volně stojící vana</strong> – designový prvek, vyžaduje prostor kolem ze všech stran (minimálně 60 cm). Vhodná do koupelen od 8 m². Cena: 15 000–60 000 Kč i více.</li>
                <li><strong>Rohová vana</strong> – trojúhelníkový nebo pětiúhelníkový tvar, využívá rohový prostor. Zaujme více místa než standardní vana, ale působí luxusně. Cena: 8 000–25 000 Kč.</li>
              </ul>
              <h3>Rozměry</h3>
              <p>Standardní vana má délku 170 cm, šířku 70–80 cm. Pro malé koupelny existují zkrácené vany délky 140–160 cm, kde se lze posadit nebo ležet v poloohnuté poloze. Hloubka vaničky bývá 40–50 cm.</p>
              <h3>Materiály</h3>
              <ul>
                <li><strong>Akryl</strong> – nejrozšířenější, lehký, levný (3 000–10 000 Kč), dobrá tepelná izolace, náchylnější na poškrábání.</li>
                <li><strong>Smaltovaná ocel</strong> – středně těžká, odolná, chladnější na dotek. Cena 5 000–15 000 Kč. Kompromis mezi akrylem a litinou.</li>
                <li><strong>Litina</strong> – prémiová varianta, velmi těžká (150–200 kg), vynikající tepelná akumulace (voda dlouho drží teplotu). Cena 20 000–80 000 Kč a více.</li>
              </ul>
            </section>

            <section id="spotreba-vody">
              <h2>Spotřeba vody a náklady</h2>
              <p>Jedním z nejdůležitějších rozdílů je spotřeba vody. Srovnání vychází z průměrných cen vody a ohřevu v ČR v roce 2026 (voda cca 110 Kč/m³, ohřev zemním plynem cca 1,8 Kč/kWh, elektrický bojler cca 4,5 Kč/kWh). Pro přesný výpočet nákladů na celkovou rekonstrukci využijte naši <Link href="/kalkulacky/cena-rekonstrukce-koupelny-odhad" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačku ceny rekonstrukce koupelny</Link>.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Parametr</th><th>Sprcha 5 min</th><th>Plná vana</th></tr></thead>
                  <tbody>
                    <tr><td>Spotřeba vody</td><td>40–50 l</td><td>150–200 l</td></tr>
                    <tr><td>Náklady na vodu (110 Kč/m³)</td><td>4,4–5,5 Kč</td><td>16,5–22 Kč</td></tr>
                    <tr><td>Energie na ohřev (plyn)</td><td>1,5–2 Kč</td><td>5–7 Kč</td></tr>
                    <tr><td>Energie na ohřev (elektřina)</td><td>3,5–5 Kč</td><td>13–18 Kč</td></tr>
                    <tr><td>Celkem (plyn, 1 osoba/den)</td><td>cca 7 Kč</td><td>cca 27 Kč</td></tr>
                    <tr><td>Roční náklady (365 dní, plyn)</td><td>cca 2 500 Kč</td><td>cca 9 900 Kč</td></tr>
                    <tr><td>Roční náklady (365 dní, elektřina)</td><td>cca 3 600 Kč</td><td>cca 14 600 Kč</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Úspora na sprchování oproti každodennímu koupání v páném vana dosahuje <strong>7 000–11 000 Kč ročně na osobu</strong> při elektrickém ohřevu. I při kombinaci (koupel 2× týdně, jinak sprcha) ušetříte 3 000–5 000 Kč ročně.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Průtokový omezovač na sprchovou hlavici (cca 200–500 Kč) sníží spotřebu vody ze standardních 12 l/min na 6–8 l/min bez výrazného snížení pocitu komfortu.</div>
            </section>

            <section id="kombinace">
              <h2>Kombinace sprchy a vany – kdy to dává smysl</h2>
              <p>Pokud nechcete volit a máte koupelnu alespoň 4–5 m², existují kompromisní řešení. Nejde jen o klasické sprchové kouty vedle vany – trh nabízí i úsporné alternativy.</p>
              <h3>Kdy instalovat oboje</h3>
              <p>Koupelna nad 6 m² snese jak standardní vanu (170 cm), tak samostatný sprchový kout 80×80 cm. Je to ideální řešení pro 3–4členné rodiny, kde někdo preferuje sprchu a jiný vanu. Počítejte ale s vyššími náklady na rekonstrukci.</p>
              <h3>Sklopné vany</h3>
              <p>Sklopné nebo výklopné vany jsou japonskou inovací nyní dostupnou i v ČR. Mají hloubku 60–70 cm (koupel vsedě, ne vleže), po vykoupání se sklopí ke stěně a uvolní prostor. Cena: 25 000–55 000 Kč. Praktické, ale niche řešení.</p>
              <h3>Sprchové vany</h3>
              <p>Sprchové vany (délka 140–160 cm, mělčí dno s protiskluzovou plochou) kombinují funkci vany i sprchové vaničky. Hodí se do koupelen 4–5 m², kde klasická 170cm vana nevypadá proporčně. Cena: 8 000–25 000 Kč. Přidáte sprchový set a záclonku – a máte obojí za rozumné peníze.</p>
            </section>

            <section id="pro-koho">
              <h2>Pro koho co – doporučení podle situace</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Kdo jste</th><th>Doporučení</th><th>Proč</th></tr></thead>
                  <tbody>
                    <tr><td>Single / bezdětný pár</td><td>Sprchový kout (walk-in nebo čtverec 90×90)</td><td>Úspora místa, nižší náklady na vodu, rychlá každodenní hygiena</td></tr>
                    <tr><td>Pár plánující děti</td><td>Sprchová vana nebo vana + sprcha</td><td>Flexibilita do budoucna, koupání dětí v vaně je výrazně jednodušší</td></tr>
                    <tr><td>Rodina s malými dětmi</td><td>Vana (zabudovaná, akryl)</td><td>Koupání dětí, bezpečnost, pohodlí</td></tr>
                    <tr><td>Rodina s dospívajícími dětmi</td><td>Vana + samostatný sprchový kout</td><td>Každý používá koupelnu jinak, sprcha urychlí ranní provoz</td></tr>
                    <tr><td>Senioři / bezbariér</td><td>Walk-in sprchový kout, nulový práh</td><td>Bezpečnost (žádné přelézání okraje), snadný přístup na vozíku nebo s chodítkem</td></tr>
                    <tr><td>Pronajímatelé bytů</td><td>Vana nebo sprchová vana</td><td>Větší okruh nájemníků, rodiny s dětmi ocení vanu</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Plánujete prodej bytu? Realitní makléři v ČR potvrzují, že absence vany může snížit zájem rodinných kupujících. Pokud máte koupelnu nad 5 m², zvažte alespoň sprchovou vanu jako kompromis.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Kolik místa zabere sprchový kout oproti vaně?", a: "Standardní vana zabírá 1,5–1,7 m², zatímco čtvercový sprchový kout 90×90 cm jen 0,81 m². Sprchový kout tedy ušetří v průměru 0,7–0,9 m² podlahové plochy – v malé koupelně to je zásadní rozdíl." },
                  { q: "Kolik vody spotřebuje sprcha oproti vaně?", a: "Pětiminutová sprcha spotřebuje přibližně 40–50 litrů vody. Plná vana pojme 150–200 litrů. Sprchování je tedy 3–4× úspornější. Při každodenním koupání je roční úspora v nákladech na vodu a ohřev 3 000–6 000 Kč pro jednu osobu." },
                  { q: "Sníží vana hodnotu bytu?", a: "V Česku se obecně udává, že alespoň jedna vana v bytě zvyšuje prodejní atraktivitu, zejména u rodin s dětmi. Moderní sprchový kout s walk-in designem však může nemovitost zhodnotit podobně. Záleží na cílové skupině kupujících a celkovém standardu bytu." },
                  { q: "Co jsou sprchové vany a kdy se hodí?", a: "Sprchové vany (kombinace vany a sprchového koutu) mají délku 140–160 cm místo standardních 170 cm a plytší dno. Hodí se do koupelen od 4 m², kde chceme oba komforty v jednom kusu. Cena se pohybuje od 8 000 do 25 000 Kč." },
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
                <li><a href="#srovnani">Hlavní srovnání</a></li>
                <li><a href="#sprchovy-kout">Sprchový kout</a></li>
                <li><a href="#vana">Vana</a></li>
                <li><a href="#spotreba-vody">Spotřeba vody</a></li>
                <li><a href="#kombinace">Kombinace</a></li>
                <li><a href="#pro-koho">Pro koho co</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/stehovani" className="sidebar-cat-link">🏠 Stěhování & rekonstrukce<span>25 článků →</span></Link>
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
