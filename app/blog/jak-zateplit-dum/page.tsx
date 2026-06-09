import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak zateplovat dům – fasáda, střecha, podlaha a návratnost",
  description: "Kompletní průvodce zateplením domu: ETICS fasáda, střecha, podlaha, okna. Ceny 2026, dotace NZÚ a reálná návratnost investice.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-zateplit-dum" },
  openGraph: { title: "Jak zateplovat dům – fasáda, střecha, podlaha a návratnost", description: "Kompletní průvodce zateplením domu: ceny 2026, dotace NZÚ a reálná návratnost.", url: "https://www.domovniguru.cz/blog/jak-zateplit-dum", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-09T08:00:00Z", modifiedTime: "2026-06-09T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20zateplovat%20d%C5%AFm%20%E2%80%93%20fas%C3%A1da%2C%20st%C5%99echa%2C%20podlaha%20a%20n%C3%A1vratnost&cat=blog", width: 1200, height: 630, alt: "Jak zateplovat dům – fasáda, střecha, podlaha a návratnost" }] },
  twitter: { card: "summary_large_image", title: "Jak zateplovat dům – fasáda, střecha, podlaha a návratnost", description: "Kompletní průvodce zateplením domu: ceny 2026, dotace NZÚ a reálná návratnost." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/jak-zateplit-dum#article", "headline": "Jak zateplovat dům – fasáda, střecha, podlaha a návratnost", "datePublished": "2026-06-09T08:00:00Z", "dateModified": "2026-06-09T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["zateplení domu", "zateplení fasády", "ETICS", "zateplení střechy", "dotace NZÚ", "návratnost zateplení"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Stěhování & rekonstrukce", "item": "https://www.domovniguru.cz/blog/kategorie/stehovani" }, { "@type": "ListItem", "position": 4, "name": "Jak zateplovat dům", "item": "https://www.domovniguru.cz/blog/jak-zateplit-dum" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Kolik stojí zateplení rodinného domu?", "acceptedAnswer": { "@type": "Answer", "text": "Zateplení fasády průměrného rodinného domu (150 m²) vyjde na 200 000–400 000 Kč. Střecha přidá dalších 80 000–180 000 Kč. S dotacemi NZÚ lze získat zpět 20–50 % nákladů." } }, { "@type": "Question", "name": "Která část domu ztrácí nejvíce tepla?", "acceptedAnswer": { "@type": "Answer", "text": "Největší podíl tepelných ztrát jde přes fasádu (35 %) a střechu (25 %). Okna a dveře tvoří dalších 15 %, podlaha 10 % a větrání 15 %." } }, { "@type": "Question", "name": "Jaká je návratnost zateplení fasády?", "acceptedAnswer": { "@type": "Answer", "text": "Bez dotací se zateplení fasády vrátí za 12–18 let. S dotacemi NZÚ (až 50 % nákladů) klesne doba návratnosti na 6–10 let. Při růstu cen energií se to ještě zkracuje." } }, { "@type": "Question", "name": "Musím mít stavební povolení na zateplení?", "acceptedAnswer": { "@type": "Answer", "text": "Na zateplení fasády stačí ohlášení stavebnímu úřadu – není potřeba stavební povolení. Výjimkou jsou domy v památkových zónách nebo zapsané kulturní památky, kde je nutné souhlas orgánu památkové péče." } }] }] };

const RELATED = [
  { title: "Jak utěsnit okna na zimu – přehled metod a co skutečně funguje", href: "/blog/jak-utesnit-okna-na-zimu", read: "4 min" },
  { title: "Chytrý termostat – jak funguje a kolik ušetří na vytápění", href: "/blog/chytry-termostat-uspora-vytapeni", read: "5 min" },
  { title: "Jak zateplit byt bez rekonstrukce – levná řešení", href: "/blog/zateplit-byt-bez-rekonstrukce", read: "6 min" },
  { title: "Tepelné čerpadlo: Kompletní průvodce výběrem, úsporami a instalací", href: "/blog/tepelne-cerpadlo-pruvodce", read: "11 min" },
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
              <span>Jak zateplovat dům</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏠 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 7 min čtení</span>
              </div>
              <h1 className="article-h1">Jak zateplovat dům – fasáda, střecha, podlaha a návratnost</h1>
              <p className="article-lead">Zateplení domu je jedna z nejlepších investic do nemovitosti – snižuje účty za topení, zvyšuje hodnotu domu a zlepšuje komfort. Kde ale začít, kolik to stojí a kdy se to vrátí? Tenhle průvodce ti to říká na rovinu.</p>
              <div className="article-meta-row"><span>Publikováno: 9. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#tepelne-ztraty">Kde se ztrácí nejvíce tepla</a></li>
                <li><a href="#fasada">Zateplení fasády (ETICS)</a></li>
                <li><a href="#strecha">Zateplení střechy a půdy</a></li>
                <li><a href="#podlaha">Zateplení podlahy a sklepa</a></li>
                <li><a href="#okna">Okna a dveře</a></li>
                <li><a href="#navratnost">Návratnost a dotace NZÚ</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="tepelne-ztraty">
              <h2>Proč zateplovat a kde se ztrácí nejvíce tepla</h2>
              <p>Nezateplený rodinný dům z 80. let spotřebuje na vytápění 150–200 kWh/m² ročně. Po komplexním zateplení klesne spotřeba na 40–80 kWh/m² – to je úspora 50–70 % na nákladech za topení. Přitom ceny plynu a tepla v ČR rostou každý rok.</p>
              <p>Před tím, než začneš investovat, je dobré vědět, kudy teplo uniká nejvíce. Rozložení tepelných ztrát typického nezatepleného rodinného domu:</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Část domu</th><th>Podíl tepelných ztrát</th><th>Priorita zateplení</th></tr></thead>
                  <tbody>
                    <tr><td>Fasáda (obvodové zdivo)</td><td><strong>35 %</strong></td><td>Velmi vysoká</td></tr>
                    <tr><td>Střecha / půda</td><td><strong>25 %</strong></td><td>Velmi vysoká</td></tr>
                    <tr><td>Větrání a infiltrace</td><td><strong>15 %</strong></td><td>Střední</td></tr>
                    <tr><td>Okna a dveře</td><td><strong>15 %</strong></td><td>Vysoká</td></tr>
                    <tr><td>Podlaha a sklep</td><td><strong>10 %</strong></td><td>Nízká až střední</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud máš omezený rozpočet, začni fasádou a střechou – společně pokrývají 60 % všech ztrát. Okna řeš až poté, jsou drahou investicí s nižší procentuální úsporou.</div>
            </section>

            <section id="fasada">
              <h2>Zateplení fasády (ETICS systém)</h2>
              <p>Zateplení fasády kontaktním zateplovacím systémem (ETICS – External Thermal Insulation Composite System) je nejčastější způsob zateplení v ČR. Na zdivo se přilepí a přikotví izolační desky, které se překryjí armovací vrstvou a finální omítkou.</p>
              <h3>Minerální vata vs. EPS (polystyren)</h3>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Vlastnost</th><th>Minerální vata</th><th>EPS (polystyren)</th></tr></thead>
                  <tbody>
                    <tr><td>Cena za m² (materiál)</td><td>350–550 Kč</td><td>150–280 Kč</td></tr>
                    <tr><td>Požární odolnost</td><td>Nehořlavá (A1)</td><td>Hořlavá (nutné protipožární pásy)</td></tr>
                    <tr><td>Paropropustnost</td><td>Vysoká – „dýchá"</td><td>Nízká</td></tr>
                    <tr><td>Zvuková izolace</td><td>Lepší</td><td>Nižší</td></tr>
                    <tr><td>Vhodnost</td><td>Starší domy, dřevostavby</td><td>Standardní zděné domy</td></tr>
                  </tbody>
                </table>
              </div>
              <h3>Doporučená tloušťka izolace</h3>
              <p>Minimální tloušťka pro splnění normy ČSN 73 0540 je 100 mm, ale pro dosažení nízkoenergetického standardu doporučujeme <strong>160–200 mm</strong>. Přidání 20 mm navíc stojí zlomek celkové investice, ale výrazně zlepší výsledek.</p>
              <h3>Cena za m² včetně montáže (2026)</h3>
              <ul>
                <li><strong>EPS 140 mm:</strong> 900–1 200 Kč/m² (materiál + práce)</li>
                <li><strong>Minerální vata 140 mm:</strong> 1 200–1 600 Kč/m² (materiál + práce)</li>
                <li><strong>Průměrný rodinný dům 150 m² fasády:</strong> 150 000–280 000 Kč celkem</li>
              </ul>
              <h3>Výběr firmy a dotace NZÚ</h3>
              <p>Vždy si vyžádej minimálně 3 nabídky. Firma musí mít oprávnění pro montáž ETICS a certifikaci od výrobce systému. Na zateplení fasády lze získat dotaci z programu <strong>Nová zelená úsporám (NZÚ)</strong> – podpora se pohybuje od 20 do 50 % uznatelných nákladů dle energetické úspory.</p>
              <div className="article-tip"><strong>💡 Pozor:</strong> Dotaci NZÚ musíš schválit před zahájením prací. Zpětně podanou žádost program nepodporuje. Žádost podáváš přes oprávněného poradce nebo přímo na portálu NZÚ.</div>
            </section>

            <section id="strecha">
              <h2>Zateplení střechy a půdy</h2>
              <p>Střecha je druhý největší zdroj tepelných ztrát. Způsob zateplení záleží na tom, zda půdu využíváš, nebo ne.</p>
              <h3>Zateplení podlahy nevyužívané půdy</h3>
              <p>Nejlevnější a nejefektivnější řešení. Na stropní konstrukci se položí izolace (minerální vata, foukaná celulóza). Doporučená tloušťka <strong>300–400 mm</strong>, cena 400–700 Kč/m² včetně práce.</p>
              <h3>Zateplení šikmé střechy (mezi krokvemi)</h3>
              <p>Izolace se vkládá do prostoru mezi krokve. Nevýhoda: krokve tvoří tepelné mosty a maximální tloušťka je omezena výškou krokví (běžně 160–200 mm). Často se kombinuje s vrstvou pod krokvemi.</p>
              <h3>Zateplení nad krokvemi</h3>
              <p>Nejdražší, ale nejlepší řešení – žádné tepelné mosty, větší tloušťka. Vhodné při výměně střešní krytiny. Cena 1 500–2 500 Kč/m².</p>
              <h3>Foukaná izolace</h3>
              <p>Vhodná pro těžko přístupné prostory a renovace. Celulóza nebo minerální vata se vhání do prostoru dmychadlem. Cena 300–500 Kč/m² při tloušťce 300 mm – velmi dobrý poměr cena/výkon.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Způsob zateplení střechy</th><th>Cena / m²</th><th>Vhodnost</th></tr></thead>
                  <tbody>
                    <tr><td>Podlaha půdy (minvata desky)</td><td>400–700 Kč</td><td>Nevyužívaná půda</td></tr>
                    <tr><td>Foukaná izolace (podlaha půdy)</td><td>300–500 Kč</td><td>Nevyužívaná půda, těžký přístup</td></tr>
                    <tr><td>Mezi krokvemi</td><td>800–1 300 Kč</td><td>Využívaná půda / podkroví</td></tr>
                    <tr><td>Nad krokvemi</td><td>1 500–2 500 Kč</td><td>Při výměně krytiny</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="podlaha">
              <h2>Zateplení podlahy a sklepa</h2>
              <p>Podlaha tvoří cca 10 % tepelných ztrát, takže priorita je nižší. Přesto se vyplatí v domech s nevytápěným sklepem nebo na zemině.</p>
              <h3>Kdy se zateplení podlahy vyplatí</h3>
              <ul>
                <li>Dům stojí přímo na zemině nebo nad nevytápěným sklepem</li>
                <li>Plánuješ rekonstrukci podlahy (výměna nášlapné vrstvy)</li>
                <li>Chceš instalovat podlahové topení</li>
              </ul>
              <h3>Materiály pro zateplení podlahy</h3>
              <ul>
                <li><strong>EPS (podlahový polystyren 100S/150S):</strong> nejrozšířenější, cena 80–150 Kč/m², tloušťka 80–120 mm</li>
                <li><strong>XPS (extrudovaný polystyren):</strong> odolný vůči vlhkosti, vhodný do sklepů, cena 150–250 Kč/m²</li>
                <li><strong>PIR/PUR desky:</strong> tenčí při stejném výkonu, vhodné tam, kde nelze ztratit výšku, cena 300–500 Kč/m²</li>
              </ul>
              <h3>Zateplení sklepa</h3>
              <p>Zateplení stropu sklepa (ze sklepní strany) je levnější alternativou k zateplení podlahy přízemí. Použij XPS nebo minerální vatu min. 80 mm, přilep a přišrob k stropu. Cena 500–800 Kč/m² včetně práce.</p>
            </section>

            <section id="okna">
              <h2>Okna a dveře</h2>
              <p>Okna tvoří 15 % tepelných ztrát, ale jsou relativně drahá na výměnu. Klíčový parametr je součinitel prostupu tepla <strong>U [W/m²K]</strong> – čím nižší, tím lepší izolace.</p>
              <h3>U-hodnoty a typy zasklení</h3>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ okna</th><th>U-hodnota (sklo)</th><th>Cena / m² (orientačně)</th></tr></thead>
                  <tbody>
                    <tr><td>Stará jednoduchá okna</td><td>5,0–6,0 W/m²K</td><td>–</td></tr>
                    <tr><td>Dvojsklo (starší)</td><td>2,8–3,5 W/m²K</td><td>–</td></tr>
                    <tr><td>Dvojsklo s izolačním plynem</td><td>1,1–1,4 W/m²K</td><td>3 500–5 000 Kč</td></tr>
                    <tr><td>Trojsklo standard</td><td>0,6–0,8 W/m²K</td><td>5 000–7 500 Kč</td></tr>
                    <tr><td>Trojsklo pasivní</td><td>0,5–0,6 W/m²K</td><td>7 000–10 000 Kč</td></tr>
                  </tbody>
                </table>
              </div>
              <h3>Trojskla – kdy se vyplatí?</h3>
              <p>Trojskla jsou povinná pro nízkoenergetické a pasivní domy. Pro běžnou rekonstrukci se vyplatí zejména v chladnějších oblastech ČR a na stinných stranách domu. Připlácíš cca 20–30 % oproti dvojsklu.</p>
              <h3>Dotace na okna z NZÚ</h3>
              <p>Výměna oken je podporována v rámci NZÚ standardní, ale pouze pokud splníš požadavky na U-hodnotu celého okna (rám + sklo): max. 1,1 W/m²K pro podporu. Podpora činí přibližně <strong>2 000–4 500 Kč na jedno okno</strong> dle velikosti.</p>
              <h3>Na co si dát pozor při výměně oken</h3>
              <ul>
                <li>Připojovací spára musí být správně utěsněna (parotěsná fólie zevnitř, difuzně otevřená zvenku)</li>
                <li>Okno musí být osazeno do roviny zateplení, ne do líce zdiva – jinak vznikají tepelné mosty v ostění</li>
                <li>Nechej si vystavit montážní protokol – je podmínkou pro uplatnění dotace i záruky</li>
              </ul>
            </section>

            <section id="navratnost">
              <h2>Návratnost investice a dotace NZÚ</h2>
              <p>Přesnou úsporu a návratnost pro svůj konkrétní dům spočítáš v naší <Link href="/kalkulacky/tepelna-izolace" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačce tepelné izolace</Link>. Níže jsou orientační hodnoty pro průměrný rodinný dům (130 m², plyn 2,5 Kč/kWh tepla, spotřeba před zateplením 180 kWh/m²/rok).</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Opatření</th><th>Investice</th><th>Roční úspora</th><th>Návratnost (bez dotace)</th><th>Dotace NZÚ (orientačně)</th></tr></thead>
                  <tbody>
                    <tr><td>Zateplení fasády (EPS 160 mm)</td><td>180 000 Kč</td><td>14 000 Kč</td><td>~13 let</td><td>až 80 000 Kč</td></tr>
                    <tr><td>Zateplení střechy / půdy</td><td>70 000 Kč</td><td>9 000 Kč</td><td>~8 let</td><td>až 35 000 Kč</td></tr>
                    <tr><td>Výměna oken (trojsklo)</td><td>120 000 Kč</td><td>5 500 Kč</td><td>~22 let</td><td>až 30 000 Kč</td></tr>
                    <tr><td>Zateplení podlahy</td><td>35 000 Kč</td><td>2 500 Kč</td><td>~14 let</td><td>až 10 000 Kč</td></tr>
                    <tr><td><strong>Komplexní zateplení</strong></td><td><strong>~400 000 Kč</strong></td><td><strong>~31 000 Kč</strong></td><td><strong>~13 let</strong></td><td><strong>až 155 000 Kč</strong></td></tr>
                  </tbody>
                </table>
              </div>
              <p>Komplexní zateplení (všechna opatření najednou) se navíc váže na vyšší sazbu dotace NZÚ – program odměňuje celkový přístup, ne dílčí kroky. Při komplexní renovaci s dotací klesá skutečná návratnost na <strong>8–10 let</strong>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Dotace NZÚ se čerpají z Modernizačního fondu a státního rozpočtu. Pro rok 2026 jsou stále otevřené výzvy pro rodinné domy. Podej žádost před zahájením stavebních prací – jinak na dotaci nárok ztrácíš.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Kolik stojí zateplení rodinného domu?", a: "Zateplení fasády průměrného rodinného domu (150 m²) vyjde na 200 000–400 000 Kč. Střecha přidá dalších 80 000–180 000 Kč. S dotacemi NZÚ lze získat zpět 20–50 % nákladů." },
                  { q: "Která část domu ztrácí nejvíce tepla?", a: "Největší podíl tepelných ztrát jde přes fasádu (35 %) a střechu (25 %). Okna a dveře tvoří dalších 15 %, podlaha 10 % a větrání 15 %." },
                  { q: "Jaká je návratnost zateplení fasády?", a: "Bez dotací se zateplení fasády vrátí za 12–18 let. S dotacemi NZÚ (až 50 % nákladů) klesne doba návratnosti na 6–10 let. Při růstu cen energií se to ještě zkracuje." },
                  { q: "Musím mít stavební povolení na zateplení?", a: "Na zateplení fasády stačí ohlášení stavebnímu úřadu – není potřeba stavební povolení. Výjimkou jsou domy v památkových zónách nebo zapsané kulturní památky, kde je nutné souhlas orgánu památkové péče." },
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
                <li><a href="#tepelne-ztraty">Kde se ztrácí teplo</a></li>
                <li><a href="#fasada">Zateplení fasády</a></li>
                <li><a href="#strecha">Střecha a půda</a></li>
                <li><a href="#podlaha">Podlaha a sklep</a></li>
                <li><a href="#okna">Okna a dveře</a></li>
                <li><a href="#navratnost">Návratnost a dotace</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/stehovani" className="sidebar-cat-link">🏠 Stěhování & rekonstrukce<span>Články →</span></Link>
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
