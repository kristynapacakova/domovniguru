import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak vybrat plot kolem domu: dřevo, pletivo, gabiony",
  description: "Srovnání typů plotů – dřevěný, pletivo, svařované panely, gabiony a betonový. Cena, soukromí, údržba, životnost a kdy je potřeba ohlášení nebo povolení.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-vybrat-plot-kolem-domu" },
  openGraph: { title: "Jak vybrat plot kolem domu: dřevo, pletivo, gabiony", description: "Srovnání typů plotů – dřevěný, pletivo, svařované panely, gabiony a betonový. Cena, soukromí, údržba, životnost a kdy je potřeba ohlášení nebo povolení.", url: "https://www.domovniguru.cz/blog/jak-vybrat-plot-kolem-domu", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-07-21T08:00:00Z", modifiedTime: "2026-07-21T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20vybrat%20plot%20kolem%20domu&cat=blog", width: 1200, height: 630, alt: "Jak vybrat plot kolem domu: dřevo, pletivo, gabiony" }] },
  twitter: { card: "summary_large_image", title: "Jak vybrat plot kolem domu: dřevo, pletivo, gabiony", description: "Srovnání typů plotů – dřevo, pletivo, panely, gabiony a beton. Cena, soukromí, údržba, životnost a povolení." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/jak-vybrat-plot-kolem-domu#article", "headline": "Jak vybrat plot kolem domu: dřevo, pletivo, gabiony", "datePublished": "2026-07-21T08:00:00Z", "dateModified": "2026-07-21T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["jak vybrat plot", "typy plotů", "dřevěný plot", "plotové pletivo", "svařované panely", "gabionový plot", "betonový plot", "ohlášení plotu"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Zahrada & terasa", "item": "https://www.domovniguru.cz/blog/kategorie/zahrada" }, { "@type": "ListItem", "position": 4, "name": "Jak vybrat plot kolem domu", "item": "https://www.domovniguru.cz/blog/jak-vybrat-plot-kolem-domu" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Který plot je nejlevnější?", "acceptedAnswer": { "@type": "Answer", "text": "Nejlevnější variantou je pozinkované nebo poplastované plotové pletivo natažené mezi sloupky, které vyjde na nejnižší cenu za metr a snadno se instaluje svépomocí. O něco dražší jsou svařované panely. Dřevěný plot je cenově velmi variabilní podle typu dřeva a hustoty latí. Nejdražší bývají gabiony a betonové ploty kvůli množství materiálu a náročnějším základům." } }, { "@type": "Question", "name": "Jaký plot zajistí nejvíc soukromí?", "acceptedAnswer": { "@type": "Answer", "text": "Nejvíc soukromí poskytne plný plot bez mezer, tedy hustý dřevěný plot (prkna na sraz), gabion nebo betonový plot. Pletivo a řídké panely soukromí prakticky neposkytují, dají se ale doplnit stínicí tkaninou nebo popínavou zelení. Kombinace panelového plotu se živým plotem je oblíbený kompromis mezi cenou a soukromím." } }, { "@type": "Question", "name": "Který plot vyžaduje nejmenší údržbu?", "acceptedAnswer": { "@type": "Answer", "text": "Nejméně údržby potřebují gabiony a betonové ploty, u kterých prakticky jen kontrolujete stav. Poplastované pletivo a svařované panely s kvalitní povrchovou úpravou vydrží dlouho bez péče. Nejnáročnější je dřevěný plot, který je potřeba pravidelně natírat nebo olejovat, jinak šedne, praská a hnije." } }, { "@type": "Question", "name": "Jak hluboko dělat základy pro sloupky plotu?", "acceptedAnswer": { "@type": "Answer", "text": "Sloupky plotu je potřeba usadit do nezámrzné hloubky, v našich podmínkách zhruba 80 cm, aby je mráz nevytlačoval. Betonová patka by měla mít průměr alespoň 20–30 cm podle výšky a hmotnosti plotu. U těžkých plotů (gabiony, beton) a u sloupků bran jsou nutné mohutnější a hlubší základy podle statického návrhu." } }, { "@type": "Question", "name": "Potřebuji na stavbu plotu ohlášení nebo povolení?", "acceptedAnswer": { "@type": "Answer", "text": "Běžný plot do výšky 2 metrů, který nesousedí s veřejnou komunikací a nezasahuje do rozhledových poměrů, obvykle nevyžaduje ani ohlášení. Vyšší plot, plot u silnice nebo v památkové zóně už zpravidla ohlášení stavebnímu úřadu potřebuje. Pravidla se liší podle obce, proto si před stavbou vždy ověřte konkrétní požadavky na svém stavebním úřadě." } }] }] };

const RELATED = [
  { title: "Jak postavit dřevěný plot na zahradě", href: "/blog/zahradni-plot-ze-dreva", read: "6 min" },
  { title: "Zahradní branka a vjezdová brána", href: "/blog/zahradni-branka-a-vjezdova-brana", read: "5 min" },
  { title: "Ošetření starého plotu před sezónou", href: "/blog/osetreni-stareho-plotu-pred-sezonou", read: "5 min" },
  { title: "Jak natřít venkovní dřevo", href: "/blog/natrit-venkovni-drevo", read: "5 min" },
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
              <Link href="/blog/kategorie/zahrada">Zahrada & terasa</Link><span className="breadcrumb-sep">/</span>
              <span>Jak vybrat plot kolem domu</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak vybrat plot kolem domu</h1>
              <p className="article-lead">Plot vymezuje pozemek, chrání soukromí a spoluvytváří první dojem z domu, proto se vyplatí volbu nepodcenit. Každý typ plotu má jiný poměr ceny, soukromí, údržby a životnosti. Porovnáme pět nejběžnějších variant, poradíme se základy i s tím, kdy potřebujete ohlášení, abyste se rozhodli s jistotou.</p>
              <div className="article-meta-row"><span>Aktualizováno: 21. července 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/jak-vybrat-plot-kolem-domu" title="Jak vybrat plot kolem domu: dřevo, pletivo, gabiony" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 175" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="175" fill="#f4faf4"/>
                {[
                  { x:20, icon:"🪵", name:"Dřevěný plot", price:"Variabilní", use:"Přírodní vzhled\nSoukromí (na sraz)\nNutná údržba", color:"#b07a3a" },
                  { x:210, icon:"🕸️", name:"Pletivo", price:"Nejlevnější", use:"Rychlá montáž\nMinimální soukromí\nDlouhá životnost", color:"#5a9e6f" },
                  { x:400, icon:"🧱", name:"Gabiony", price:"Dražší", use:"Bezúdržbové\nPlné soukromí\nMohutné základy", color:"#8a8078" },
                  { x:590, icon:"🏗️", name:"Betonový", price:"Nejdražší", use:"Bez údržby\nPlné soukromí\nNáročná stavba", color:"#6a6a70" },
                ].map(({x, icon, name, price, use, color}) => (
                  <g key={x} transform={`translate(${x}, 12)`}>
                    <rect x="0" y="0" width="163" height="150" rx="8" fill="#fff" stroke={color} strokeWidth="1.2"/>
                    <text x="81" y="34" textAnchor="middle" fontSize="22">{icon}</text>
                    <text x="81" y="56" textAnchor="middle" fontSize="11" fill={color} fontWeight="700">{name}</text>
                    <text x="81" y="72" textAnchor="middle" fontSize="8" fill="#8a8078">{price}</text>
                    <line x1="10" y1="80" x2="153" y2="80" stroke={color} strokeWidth="0.5" opacity="0.4"/>
                    {use.split('\n').map((l,i) => <text key={i} x="12" y={96+i*13} fontSize="8.5" fill="#3a7e4f">✓ {l}</text>)}
                  </g>
                ))}
                <rect y="158" width="760" height="17" fill="#dcefdc" opacity="0.6"/>
                <text x="380" y="170" textAnchor="middle" fontSize="8" fill="#3a7a4a" fontWeight="600" letterSpacing="0.06em">🌿 CENA VS. SOUKROMÍ VS. ÚDRŽBA · SLOUPKY DO NEZÁMRZNÉ HLOUBKY · OVĚŘTE OHLÁŠENÍ</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#kriteria">Podle čeho vybírat</a></li>
                <li><a href="#typy">Přehled typů plotů</a></li>
                <li><a href="#srovnani">Srovnávací tabulka</a></li>
                <li><a href="#zaklady">Sloupky a základy</a></li>
                <li><a href="#povoleni">Ohlášení a povolení</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="kriteria">
              <h2>Podle čeho vybírat</h2>
              <p>Před výběrem konkrétního materiálu si ujasněte, co od plotu hlavně čekáte. Priority se totiž u různých pozemků liší a určují, která varianta se vyplatí.</p>
              <ul>
                <li><strong>Cena</strong> za metr i celkový rozpočet včetně sloupků, základů a bran</li>
                <li><strong>Soukromí,</strong> tedy zda má plot krýt výhled, nebo jen vymezit hranici</li>
                <li><strong>Údržba,</strong> kolik péče jste ochotni plotu věnovat po celou dobu jeho životnosti</li>
                <li><strong>Vzhled,</strong> který ladí s domem a okolní zástavbou</li>
                <li><strong>Životnost,</strong> aby investice odpovídala tomu, jak dlouho plot vydrží</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Kolik dílců, sloupků a vzpěr budete potřebovat na svůj obvod, spočítáte v naší <Link href="/kalkulacky/kolik-plotovych-dilcu" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačce plotu</Link>. Zadáte délku, šířku pole a počet branek a bran a rovnou uvidíte potřebný materiál.</div>
            </section>

            <section id="typy">
              <h2>Přehled typů plotů</h2>
              <h3>Dřevěný plot</h3>
              <p>Klasika s přírodním vzhledem, kterou lze postavit hustě na sraz pro plné soukromí, nebo vzdušně jako laťkový plot. Hlavní nevýhodou je údržba, dřevo je potřeba pravidelně natírat nebo olejovat, jinak šedne a hnije. Postup stavby popisujeme v článku <Link href="/blog/zahradni-plot-ze-dreva" style={{ color: "#2a6496", textDecoration: "underline" }}>jak postavit dřevěný plot</Link>.</p>
              <h3>Plotové pletivo</h3>
              <p>Nejlevnější a nejrychlejší řešení, pozinkované nebo poplastované pletivo natažené mezi sloupky. Soukromí prakticky neposkytuje, dá se ale doplnit stínicí tkaninou nebo popínavou zelení. Ideální pro dlouhé obvody zahrad, kde jde hlavně o vymezení hranice.</p>
              <h3>Svařované panely</h3>
              <p>3D svařované panely (například typu „2D/3D") jsou pevné, moderní a nenáročné na údržbu. Nabízejí střední cenu, dlouhou životnost a čistý vzhled. Doplněné plotovými vložkami do panelů získají i slušné soukromí.</p>
              <h3>Gabiony</h3>
              <p>Drátěné koše plněné kamenivem tvoří mohutný, plný a prakticky bezúdržbový plot s výborným soukromím i tlumením hluku. Jsou dražší a vyžadují únosné základy, protože jde o velmi těžkou konstrukci.</p>
              <h3>Betonový plot</h3>
              <p>Betonové ploty (štípaný beton, prefabrikované desky) nabízejí plné soukromí a nulovou údržbu, ale patří k nejdražším a nejnáročnějším na stavbu kvůli hmotnosti a základům.</p>
            </section>

            <section id="srovnani">
              <h2>Srovnávací tabulka</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead>
                    <tr><th>Typ plotu</th><th>Cena</th><th>Soukromí</th><th>Údržba</th><th>Životnost</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Dřevěný</td><td>Nízká–střední</td><td>Vysoké (na sraz)</td><td>Vysoká</td><td>15–25 let</td></tr>
                    <tr><td>Pletivo</td><td>Nejnižší</td><td>Nízké</td><td>Nízká</td><td>20–30 let</td></tr>
                    <tr><td>Svařované panely</td><td>Střední</td><td>Střední</td><td>Nízká</td><td>25–40 let</td></tr>
                    <tr><td>Gabiony</td><td>Vyšší</td><td>Plné</td><td>Minimální</td><td>50+ let</td></tr>
                    <tr><td>Betonový</td><td>Nejvyšší</td><td>Plné</td><td>Minimální</td><td>50+ let</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Univerzálně „nejlepší" plot neexistuje, rozhoduje kombinace vašich priorit a rozpočtu. Oblíbeným kompromisem je panelový plot doplněný živým plotem, který spojuje rozumnou cenu s postupně rostoucím soukromím.</p>
            </section>

            <section id="zaklady">
              <h2>Sloupky a základy</h2>
              <p>Ať zvolíte jakýkoli typ, o životnosti a stabilitě plotu rozhodují sloupky a jejich ukotvení. Podceněné základy jsou nejčastější příčinou křivých a padajících plotů.</p>
              <ul>
                <li><strong>Nezámrzná hloubka:</strong> sloupky usaďte zhruba 80 cm hluboko, aby je mráz nevytlačoval</li>
                <li><strong>Betonová patka</strong> o průměru 20–30 cm podle výšky a hmotnosti plotu</li>
                <li><strong>Vzpěry u koncových a rohových sloupků,</strong> které přenášejí tah pletiva nebo panelů</li>
                <li><strong>Mohutnější základy</strong> u těžkých plotů (gabiony, beton) a u sloupků bran a branek</li>
              </ul>
              <p>Kolik betonu na patky přibližně potřebujete, si ověříte v <Link href="/kalkulacky/kolik-betonu" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačce betonu</Link>. Montáž samotné brány a branky pak rozebírá článek <Link href="/blog/zahradni-branka-a-vjezdova-brana" style={{ color: "#2a6496", textDecoration: "underline" }}>zahradní branka a vjezdová brána</Link>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Sloupky pečlivě vyrovnejte vodováhou a mezi krajními natáhněte provázek, podle kterého osadíte ostatní. Betonové patky nechte pořádně zatuhnout (ideálně týden), než na sloupky zavěsíte výplň, jinak riskujete jejich vychýlení.</div>
            </section>

            <section id="povoleni">
              <h2>Ohlášení a povolení</h2>
              <p>Legislativa u plotů není u všech případů stejná a vyplatí se ji ověřit dřív, než začnete stavět.</p>
              <ul>
                <li><strong>Běžný plot do 2 metrů,</strong> který nesousedí s veřejnou komunikací a nebrání rozhledu, obvykle nevyžaduje ani ohlášení</li>
                <li><strong>Vyšší plot, plot u silnice</strong> nebo v památkové zóně zpravidla ohlášení stavebnímu úřadu potřebuje</li>
                <li><strong>Hranice pozemku:</strong> plot stavte na své straně a hraniční plot ideálně po dohodě se sousedem</li>
              </ul>
              <p>Pravidla se liší podle obce, proto si konkrétní požadavky vždy ověřte na svém stavebním úřadě ještě před nákupem materiálu. Ušetříte si tím případné problémy i náklady na dodatečné úpravy.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Který plot je nejlevnější?", a: "Nejlevnější variantou je pozinkované nebo poplastované plotové pletivo natažené mezi sloupky, které vyjde na nejnižší cenu za metr a snadno se instaluje svépomocí. O něco dražší jsou svařované panely. Dřevěný plot je cenově velmi variabilní podle typu dřeva a hustoty latí. Nejdražší bývají gabiony a betonové ploty kvůli množství materiálu a náročnějším základům." },
                  { q: "Jaký plot zajistí nejvíc soukromí?", a: "Nejvíc soukromí poskytne plný plot bez mezer, tedy hustý dřevěný plot (prkna na sraz), gabion nebo betonový plot. Pletivo a řídké panely soukromí prakticky neposkytují, dají se ale doplnit stínicí tkaninou nebo popínavou zelení. Kombinace panelového plotu se živým plotem je oblíbený kompromis mezi cenou a soukromím." },
                  { q: "Který plot vyžaduje nejmenší údržbu?", a: "Nejméně údržby potřebují gabiony a betonové ploty, u kterých prakticky jen kontrolujete stav. Poplastované pletivo a svařované panely s kvalitní povrchovou úpravou vydrží dlouho bez péče. Nejnáročnější je dřevěný plot, který je potřeba pravidelně natírat nebo olejovat, jinak šedne, praská a hnije." },
                  { q: "Jak hluboko dělat základy pro sloupky plotu?", a: "Sloupky plotu je potřeba usadit do nezámrzné hloubky, v našich podmínkách zhruba 80 cm, aby je mráz nevytlačoval. Betonová patka by měla mít průměr alespoň 20–30 cm podle výšky a hmotnosti plotu. U těžkých plotů (gabiony, beton) a u sloupků bran jsou nutné mohutnější a hlubší základy podle statického návrhu." },
                  { q: "Potřebuji na stavbu plotu ohlášení nebo povolení?", a: "Běžný plot do výšky 2 metrů, který nesousedí s veřejnou komunikací a nezasahuje do rozhledových poměrů, obvykle nevyžaduje ani ohlášení. Vyšší plot, plot u silnice nebo v památkové zóně už zpravidla ohlášení stavebnímu úřadu potřebuje. Pravidla se liší podle obce, proto si před stavbou vždy ověřte konkrétní požadavky na svém stavebním úřadě." },
                ].map(({ q, a }) => (
                  <details key={q} className="faq-item">
                    <summary className="faq-q">{q}</summary>
                    <p className="faq-a">{a}</p>
                  </details>
                ))}
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/jak-vybrat-plot-kolem-domu" title="Jak vybrat plot kolem domu: dřevo, pletivo, gabiony" />

            <section className="related-section">
              <h2>Související články</h2>
              <div className="related-grid">
                {RELATED.map((r) => (
                  <Link key={r.href} href={r.href} className="card">
                    <div className="card-eyebrow-row"><span>Zahrada & terasa</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#kriteria">Podle čeho vybírat</a></li>
                <li><a href="#typy">Přehled typů plotů</a></li>
                <li><a href="#srovnani">Srovnávací tabulka</a></li>
                <li><a href="#zaklady">Sloupky a základy</a></li>
                <li><a href="#povoleni">Ohlášení a povolení</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/zahrada" className="sidebar-cat-link">🌿 Zahrada & terasa<span>41 článků →</span></Link>
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
        .hero-illustration { margin: 28px 0 36px; border-radius: 12px; overflow: hidden; border: 1px solid var(--border); }
        .hero-svg { width: 100%; height: auto; display: block; }
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
