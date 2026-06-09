import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak vybrat dlažbu do koupelny – protiskluz, formát a spárování",
  description: "Průvodce výběrem koupelnové dlažby: třídy protiskluznosti R9–R13, formáty, materiály, barvy a hydroizolace. Reálné ceny 2026.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-vybrat-dlazbu-do-koupelny" },
  openGraph: { title: "Jak vybrat dlažbu do koupelny – protiskluz, formát a spárování", description: "Třídy protiskluznosti, formáty, materiály a hydroizolace. Reálné ceny 2026.", url: "https://www.domovniguru.cz/blog/jak-vybrat-dlazbu-do-koupelny", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-09T08:00:00Z", modifiedTime: "2026-06-09T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20vybrat%20dl%C3%A1%C5%BEbu%20do%20koupelny%20%E2%80%93%20protiskluz%2C%20form%C3%A1t%20a%20sp%C3%A1rov%C3%A1n%C3%AD&cat=blog", width: 1200, height: 630, alt: "Jak vybrat dlažbu do koupelny – protiskluz, formát a spárování" }] },
  twitter: { card: "summary_large_image", title: "Jak vybrat dlažbu do koupelny – protiskluz, formát a spárování", description: "Třídy protiskluznosti, formáty, materiály a hydroizolace. Reálné ceny 2026." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/jak-vybrat-dlazbu-do-koupelny#article", "headline": "Jak vybrat dlažbu do koupelny – protiskluz, formát a spárování", "datePublished": "2026-06-09T08:00:00Z", "dateModified": "2026-06-09T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["dlažba do koupelny", "protiskluznost dlažby", "formát dlažby", "koupelnová dlažba", "spárování dlažby", "hydroizolace pod dlažbu"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Stěhování & rekonstrukce", "item": "https://www.domovniguru.cz/blog/kategorie/stehovani" }, { "@type": "ListItem", "position": 4, "name": "Jak vybrat dlažbu do koupelny", "item": "https://www.domovniguru.cz/blog/jak-vybrat-dlazbu-do-koupelny" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jaká třída protiskluznosti je nutná do sprchového koutu?", "acceptedAnswer": { "@type": "Answer", "text": "Do sprchového koutu je potřeba minimálně třída R10, ideálně R11. Norma ČSN EN 13353 doporučuje pro mokré provozní prostory alespoň R10. Třída R9 je vhodná pouze pro suchý provoz – například v obývacím pokoji." } }, { "@type": "Question", "name": "Jaký formát dlažby opticky zvětší malou koupelnu?", "acceptedAnswer": { "@type": "Answer", "text": "Velké dlaždice formátu 60×60 cm nebo 120×60 cm s úzkými spárami (1–2 mm) opticky zvětší malý prostor nejlépe. Méně spár znamená méně vizuálního rušení a podlaha působí souvisleji. Vodorovné kladení na menší koupelny může prostor ještě opticky prodloužit." } }, { "@type": "Question", "name": "Kolik stojí průměrná koupelnová dlažba za m²?", "acceptedAnswer": { "@type": "Answer", "text": "Keramická dlažba stojí 250–600 Kč/m², porcelánová 400–1 200 Kč/m², přírodní kámen 800–3 000 Kč/m² a cementové dlaždice 500–1 500 Kč/m². K ceně dlažby je nutné připočítat lepidlo (80–150 Kč/m²), spárovací hmotu (30–60 Kč/m²) a hydroizolaci (100–200 Kč/m²)." } }, { "@type": "Question", "name": "Je nutná hydroizolace pod dlažbu v koupelně?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, hydroizolace pod dlažbou v mokrých zónách (sprchový kout, vana) je povinná. Nanáší se stěrková nebo roletová hydroizolace v minimálně dvou vrstvách, s přeložením do stěny minimálně 15 cm. Bez hydroizolace hrozí průsak vody do sousedních místností nebo stropů nižšího podlaží." } }] }] };

const RELATED = [
  { title: "Rekonstrukce koupelny – kompletní průvodce", href: "/blog/rekonstrukce-koupelny-pruvodce", read: "8 min" },
  { title: "Kolik stojí rekonstrukce koupelny", href: "/blog/cena-rekonstrukce-koupelny", read: "6 min" },
  { title: "Plánování rekonstrukce bytu", href: "/blog/planovani-rekonstrukce-bytu", read: "7 min" },
  { title: "Jak odhadnout cenu rekonstrukce", href: "/blog/odhadnout-cenu-rekonstrukce", read: "5 min" },
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
              <span>Jak vybrat dlažbu do koupelny</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏠 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak vybrat dlažbu do koupelny – protiskluz, formát a spárování</h1>
              <p className="article-lead">Výběr koupelnové dlažby není jen o vzhledu. Špatná třída protiskluznosti, nevhodný formát nebo vynechaná hydroizolace tě mohou přijít draho. Tenhle průvodce ti ukáže, na co se zaměřit, než zajdeš do stavebnin.</p>
              <div className="article-meta-row"><span>Publikováno: 9. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#protiskluz">Protiskluz – třídy R9–R13</a></li>
                <li><a href="#formaty">Formáty a optické zvětšení</a></li>
                <li><a href="#materialy">Materiály – srovnání</a></li>
                <li><a href="#barva-povrch">Barva a povrch</a></li>
                <li><a href="#tloustka">Tloušťka a hmotnost</a></li>
                <li><a href="#sparovani">Spárování a hydroizolace</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="protiskluz">
              <h2>Protiskluz – třídy R9–R13, co platí norma</h2>
              <p>Protiskluznost dlažby se označuje třídami R9 až R13 podle normy DIN 51130 (v ČR respektováno normou ČSN EN ISO 10545). Čím vyšší číslo, tím hrubší povrch a vyšší odolnost vůči kluzkosti na mokrém povrchu.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Třída</th><th>Úhel sklonu</th><th>Vhodnost</th></tr></thead>
                  <tbody>
                    <tr><td><strong>R9</strong></td><td>6–10°</td><td>Suché prostory – obývací pokoj, chodba</td></tr>
                    <tr><td><strong>R10</strong></td><td>10–19°</td><td>Koupelnová podlaha, sprchový kout (min. požadavek)</td></tr>
                    <tr><td><strong>R11</strong></td><td>19–27°</td><td>Sprchový kout, bazénový lem, výstup z vany</td></tr>
                    <tr><td><strong>R12</strong></td><td>27–35°</td><td>Průmyslové provozy, venkovní schody</td></tr>
                    <tr><td><strong>R13</strong></td><td>nad 35°</td><td>Bazény, skluzavky, průmyslové kuchyně</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Pro standardní koupelnovou podlahu postačí <strong>R10</strong>. Do sprchového koutu a oblasti výstupu z vany volte <strong>R11</strong>. R9 do koupelny nepatří – povrch je příliš hladký a na mokré dlažbě hrozí pád.</p>
              <p>Vnitřní schodiště v domě by mělo mít minimálně R10, venkovní schodiště R12. Tyto požadavky vycházejí z normy ČSN 74 4505 (Podlahy – společná ustanovení).</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Protiskluznost je vždy uvedena na štítku nebo v technickém listu dlažby. Pokud ji obchodník nedokáže doložit, dlažbu nekupuj – zejména pro mokré prostory.</div>
            </section>

            <section id="formaty">
              <h2>Formáty a jak opticky zvětšit koupelnu</h2>
              <p>Formát dlaždice ovlivňuje nejen vzhled, ale i celkový dojem z prostoru. Malá koupelna snese velký formát – a výsledek může být překvapivě lepší než s malými dlaždičkami.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Formát</th><th>Typické použití</th><th>Efekt na malý prostor</th><th>Fugování</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Mozaika 2,5×2,5 cm</strong></td><td>Sprchový kout, dekor</td><td>Spíše zmenšuje, hodně spár</td><td>Náročné, hodně hmoty</td></tr>
                    <tr><td><strong>10×10 cm</strong></td><td>Retro koupelny, WC</td><td>Neutrální, tradiční vzhled</td><td>Střední</td></tr>
                    <tr><td><strong>30×30 cm</strong></td><td>Podlaha, stěna</td><td>Neutrální, bezpečná volba</td><td>Méně spár</td></tr>
                    <tr><td><strong>60×60 cm</strong></td><td>Podlaha, velká koupelna</td><td>Opticky zvětšuje prostor</td><td>Minimální spáry</td></tr>
                    <tr><td><strong>120×60 cm</strong></td><td>Podlaha i stěna</td><td>Výrazně zvětšuje, moderní vzhled</td><td>Spáry téměř neviditelné</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Obecné pravidlo: <strong>méně spár = větší pocit prostoru</strong>. Velké formáty jako 60×60 nebo 120×60 cm s úzkými spárami (1–2 mm) dělají z malé koupelny opticky větší místnost. Mozaika a malé dlaždičky naopak prostor vizuálně rozdrobí.</p>
              <p>Přesné množství dlažby spočítáš v naší <Link href="/kalkulacky/kolik-dlazby" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačce spotřeby dlažby</Link> – nezapomeň přidat 10–15 % na odpad a řezy.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Při kladení velkých formátů (60×60+) je nutná přesně rovná podkladní vrstva. Toleranci max. 3 mm na 2 m délky. Jinak dlaždice „houká" nebo praská.</div>
            </section>

            <section id="materialy">
              <h2>Materiály – keramika, porcelán, kámen, cement</h2>
              <p>Každý materiál má jiné vlastnosti, cenu i nároky na údržbu. Koupelna je náročné prostředí – vlhkost, teplota, čisticí prostředky. Ne všechny materiály jsou stejně odolné.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Materiál</th><th>Cena / m²</th><th>Údržba</th><th>Vhodnost do koupelny</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Keramika</strong></td><td>250–600 Kč</td><td>Snadná, odolná vůči chemii</td><td>Výborná – univerzální volba</td></tr>
                    <tr><td><strong>Porcelán (slinutá)</strong></td><td>400–1 200 Kč</td><td>Velmi snadná, nenasákavá</td><td>Výborná – nejodolnější volba</td></tr>
                    <tr><td><strong>Přírodní kámen</strong></td><td>800–3 000 Kč</td><td>Náročná, nutné impregnovat</td><td>Dobrá, ale vyžaduje péči</td></tr>
                    <tr><td><strong>Cementové dlaždice</strong></td><td>500–1 500 Kč</td><td>Střední, nutná impregnace</td><td>Podmínečná – citlivé na vlhkost</td></tr>
                  </tbody>
                </table>
              </div>
              <h3>Keramika</h3>
              <p>Nejrozšířenější a nejdostupnější volba. Povrch je glazovaný, takže nenasákavý a snadno čistitelný. Nevýhoda: glazura se může odštípnout při silném nárazu a oprava je obtížná.</p>
              <h3>Porcelán (slinutá keramika)</h3>
              <p>Vyrobená pod vysokým tlakem a teplotou, téměř nulová nasákavost (pod 0,5 %). Odolná vůči škrábancům, mrazu i chemii. Dražší, ale dlouhodobě nejlepší investice.</p>
              <h3>Přírodní kámen</h3>
              <p>Mramor, travertin nebo břidlice vypadají luxusně, ale jsou nasákavé a citlivé na kyselé čisticí prostředky. Nutná pravidelná impregnace 1× ročně. Cena práce je vyšší – kámen je těžší a křehčí při řezání.</p>
              <h3>Cementové dlaždice</h3>
              <p>Trendy materiál s charakteristickým vzhledem. Jsou velmi nasákavé, musí se impregnovat před i po položení. Do sprchového koutu nebo vlhkých prostor se příliš nedoporučují bez pečlivé impregnace.</p>
            </section>

            <section id="barva-povrch">
              <h2>Jak vybrat barvu a povrch</h2>
              <h3>Matný vs. lesklý povrch</h3>
              <p><strong>Lesklá dlažba</strong> odráží světlo a opticky zvětšuje prostor. Na druhou stranu jsou na ní vidět každý otisk prstu, vodní skvrna a kapka mýdla. Čistění je každodenní záležitost.</p>
              <p><strong>Matná dlažba</strong> je praktičtější – méně viditelné nečistoty, ale hůře se čistí do hloubky. Do koupelny je matný povrch zpravidla pohodlnější volbou pro každodenní život.</p>
              <h3>Světlá vs. tmavá barva</h3>
              <p>Světlé tóny (bílá, béžová, světle šedá) opticky zvětšují a prosvětlují koupelnu. Tmavé barvy (antracit, černá, tmavě zelená) jsou stylové, ale náročnější na údržbu – viditelné usazeniny vápníku a mýdla.</p>
              <h3>Stálobarevnost ve vlhkém prostředí</h3>
              <p>U glazované keramiky a porcelánu nehrozí barevná změna. U přírodního kamene a cementových dlaždic může dlouhodobé vystavení vlhkosti způsobit ztmavnutí nebo barevné skvrny. Proto je impregnace u těchto materiálů klíčová.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Vždy si objednej vzorky a podívej se na ně v reálném osvětlení koupelny – denní světlo a umělé osvětlení barvu výrazně mění. To, co vypadá v obchodě šedé, může doma být modré.</div>
            </section>

            <section id="tloustka">
              <h2>Tloušťka a hmotnost – podlaha vs. stěna</h2>
              <p>Tloušťka dlaždice určuje, kam ji lze použít a jak náročné bude lepení.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Použití</th><th>Doporučená tloušťka</th><th>Hmotnost (orientačně)</th></tr></thead>
                  <tbody>
                    <tr><td>Stěnový obklad</td><td>6–8 mm</td><td>10–14 kg/m²</td></tr>
                    <tr><td>Podlahová dlažba (koupelna)</td><td>8–10 mm</td><td>14–18 kg/m²</td></tr>
                    <tr><td>Velkoformátová dlažba (60×60+)</td><td>10–12 mm</td><td>18–25 kg/m²</td></tr>
                    <tr><td>Venkovní dlažba</td><td>20–30 mm</td><td>40–60 kg/m²</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Tenčí stěnové obklady (6–8 mm) nelze použít na podlahu – prasknou pod tlakem. Silnější podlahové dlaždice (10+ mm) lze naopak použít i na stěnu, ale jsou těžší a lepidlo musí být kvalitní, aby nedošlo ke sklouznutí.</p>
              <h3>Kdy potřebuješ lepení na podložku</h3>
              <p>Velkoformátové dlaždice (60×60 cm a větší) vyžadují <strong>plošné lepení</strong> – nanesení lepidla jak na podklad, tak na dlažbu (tzv. metoda dvojitého lepení). Bod lepení nestačí – dlaždice se prohne a praská. Pro velmi těžké dlaždice nebo nerovný podklad se doporučuje použití vyrovnávacích klipsů.</p>
            </section>

            <section id="sparovani">
              <h2>Spárování a hydroizolace</h2>
              <h3>Šířka spáry</h3>
              <p>Šířka spáry závisí na formátu dlaždice a přesnosti výroby. Rektifikované dlaždice (přesně řezané hrany) umožňují spáry 1–2 mm. Nerektifikované dlaždice vyžadují 3–5 mm. Přírodní kámen a cementové dlaždice mívají spáry 2–5 mm.</p>
              <p>Úzké spáry vypadají elegantněji, ale jsou náročnější na provedení – podklad musí být dokonale rovný.</p>
              <h3>Flexibilní vs. epoxidový tmel</h3>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ tmelu</th><th>Cena</th><th>Výhody</th><th>Nevýhody</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Cementová spárovačka</strong></td><td>40–80 Kč/kg</td><td>Snadná aplikace, mnoho barev</td><td>Pórovitá, nasákavá, může plesnivět</td></tr>
                    <tr><td><strong>Flexibilní spárovačka</strong></td><td>60–120 Kč/kg</td><td>Odolnější, vhodná pro podlahové topení</td><td>Stále pórovitá bez impregnace</td></tr>
                    <tr><td><strong>Epoxidový tmel</strong></td><td>300–600 Kč/kg</td><td>Nenasákavý, hygienický, odolný</td><td>Náročná aplikace, rychle tuhne</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Do sprchového koutu a vlhkých prostor doporučujeme <strong>epoxidový spárovací tmel</strong> nebo alespoň flexibilní spárovačku s impregnací. Klasická cementová spárovačka v mokré zóně časem plesnivět a zbarvovat.</p>
              <h3>Hydroizolace pod dlažbu</h3>
              <p>Hydroizolace v mokrých zónách koupelny (sprchový kout, oblast vany) je <strong>stavební povinnost</strong> – vyžaduje ji norma ČSN 73 0600 i pojistné podmínky většiny pojišťoven. Bez ní ti při škodě nepomůže pojišťovna.</p>
              <p>Standardní postup: stěrková hydroizolace ve dvou vrstvách, přeložení do stěny min. 15 cm, v rozích a napojení trubek páska nebo manžeta. Nechej ji vždy důkladně vyschnout (24–48 h) před kladením dlažby.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Hydroizolaci si nech nafotit před zalitím dlažbou – v případě pozdější škody budeš mít důkaz, že byla provedena správně.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jaká třída protiskluznosti je nutná do sprchového koutu?", a: "Do sprchového koutu je potřeba minimálně třída R10, ideálně R11. Norma ČSN EN 13353 doporučuje pro mokré provozní prostory alespoň R10. Třída R9 je vhodná pouze pro suchý provoz – například v obývacím pokoji." },
                  { q: "Jaký formát dlažby opticky zvětší malou koupelnu?", a: "Velké dlaždice formátu 60×60 cm nebo 120×60 cm s úzkými spárami (1–2 mm) opticky zvětší malý prostor nejlépe. Méně spár znamená méně vizuálního rušení a podlaha působí souvisleji. Vodorovné kladení na menší koupelny může prostor ještě opticky prodloužit." },
                  { q: "Kolik stojí průměrná koupelnová dlažba za m²?", a: "Keramická dlažba stojí 250–600 Kč/m², porcelánová 400–1 200 Kč/m², přírodní kámen 800–3 000 Kč/m² a cementové dlaždice 500–1 500 Kč/m². K ceně dlažby je nutné připočítat lepidlo (80–150 Kč/m²), spárovací hmotu (30–60 Kč/m²) a hydroizolaci (100–200 Kč/m²)." },
                  { q: "Je nutná hydroizolace pod dlažbu v koupelně?", a: "Ano, hydroizolace pod dlažbou v mokrých zónách (sprchový kout, vana) je povinná. Nanáší se stěrková nebo roletová hydroizolace v minimálně dvou vrstvách, s přeložením do stěny minimálně 15 cm. Bez hydroizolace hrozí průsak vody do sousedních místností nebo stropů nižšího podlaží." },
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
                <li><a href="#protiskluz">Protiskluz R9–R13</a></li>
                <li><a href="#formaty">Formáty a optika</a></li>
                <li><a href="#materialy">Materiály</a></li>
                <li><a href="#barva-povrch">Barva a povrch</a></li>
                <li><a href="#tloustka">Tloušťka a hmotnost</a></li>
                <li><a href="#sparovani">Spárování a hydroizolace</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/stehovani" className="sidebar-cat-link">🏠 Stěhování & rekonstrukce<span>20 článků →</span></Link>
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
