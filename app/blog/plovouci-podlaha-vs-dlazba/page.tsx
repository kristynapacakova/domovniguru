import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plovoucí podlaha vs. dlažba – co vybrat do jakých místností? 2026",
  description: "Srovnání plovoucí podlahy (laminát, vinyl, dřevo) a dlažby (keramika, porcelán). Ceny, montáž, vhodnost pro každou místnost a podlahové topení.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/plovouci-podlaha-vs-dlazba" },
  openGraph: { title: "Plovoucí podlaha vs. dlažba – co vybrat do jakých místností?", description: "Laminát, vinyl, dřevo nebo dlažba? Srovnání cen, montáže, vlhkosti a komfortu pro každou místnost.", url: "https://www.domovniguru.cz/blog/plovouci-podlaha-vs-dlazba", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-09T08:00:00Z", modifiedTime: "2026-06-09T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Plovoucí%20podlaha%20vs.%20dlažba%20–%20co%20vybrat%20do%20jakých%20místností%3F&cat=blog", width: 1200, height: 630, alt: "Plovoucí podlaha vs. dlažba – co vybrat do jakých místností?" }] },
  twitter: { card: "summary_large_image", title: "Plovoucí podlaha vs. dlažba – co vybrat do jakých místností?", description: "Srovnání laminát, vinyl, dřevo a dlažby – ceny, montáž, vhodnost 2026." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/plovouci-podlaha-vs-dlazba#article", "headline": "Plovoucí podlaha vs. dlažba – co vybrat do jakých místností?", "datePublished": "2026-06-09T08:00:00Z", "dateModified": "2026-06-09T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["plovoucí podlaha", "dlažba", "laminát vs dlažba", "vinyl podlaha", "podlaha do koupelny", "podlahové topení podlaha"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Stěhování & rekonstrukce", "item": "https://www.domovniguru.cz/blog/kategorie/stehovani" }, { "@type": "ListItem", "position": 4, "name": "Plovoucí podlaha vs. dlažba", "item": "https://www.domovniguru.cz/blog/plovouci-podlaha-vs-dlazba" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Je plovoucí podlaha nebo dlažba levnější?", "acceptedAnswer": { "@type": "Answer", "text": "Základní laminát vychází nejlevněji – materiál od 150 Kč/m² a montáž od 120 Kč/m². Keramická dlažba stojí materiál 250–600 Kč/m², ale pokládka je nákladnější (250–450 Kč/m²). Celkově bývá plovoucí podlaha levnější o 30–50 %." } }, { "@type": "Question", "name": "Jaká podlaha je nejlepší do koupelny?", "acceptedAnswer": { "@type": "Answer", "text": "Do koupelny jednoznačně dlažba – keramická nebo porcelánová. Dobře zvládá vlhkost, je snadno omyvatelná a nevede k plísním. Pokud přece jen chcete plovoucí podlahu, volte výhradně SPC vinyl (100% vodotěsný)." } }, { "@type": "Question", "name": "Lze plovoucí podlahu kombinovat s podlahovým topením?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, ale záleží na typu. Vinyl (LVT/SPC) je nejlepší volba – ohřívá se rychle a má nízký tepelný odpor. Laminát musí mít λ ≥ 0,1 W/mK, maximální povrchová teplota je 27 °C. Masivní dřevo se s podlahovým topením kombinuje špatně." } }, { "@type": "Question", "name": "Jak dlouho vydrží laminátová podlaha?", "acceptedAnswer": { "@type": "Answer", "text": "Kvalitní laminát třídy AC4 vydrží v obývacím pokoji 15–20 let, ve frekventovanějších prostorách 8–12 let. AC5 je vhodný do komerčních prostor a vydrží ještě déle. Rozhodující je třída odolnosti a správná údržba." } }] }] };

const RELATED = [
  { title: "Jak pokládat vinylovou podlahu – krok za krokem", href: "/blog/kladeni-vinyl-podlahy", read: "6 min" },
  { title: "Jak renovovat parketovou podlahu – broušení, tmelení, lak", href: "/blog/renovovat-parkety", read: "7 min" },
  { title: "Kolik stojí rekonstrukce koupelny – ceny 2026", href: "/blog/cena-rekonstrukce-koupelny", read: "6 min" },
  { title: "Vodní podlahové topení – průvodce instalací, provozem a náklady", href: "/blog/vodni-podlahove-topeni", read: "6 min" },
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
              <span>Plovoucí podlaha vs. dlažba</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏠 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Plovoucí podlaha vs. dlažba – co vybrat do jakých místností?</h1>
              <p className="article-lead">Laminát, vinyl nebo dřevo? Nebo raději keramická dlažba? Výběr podlahy patří k nejdůležitějším rozhodnutím při rekonstrukci – ovlivňuje komfort, cenu i životnost bytu na desítky let dopředu. Tenhle průvodce ti pomůže vybrat správně.</p>
              <div className="article-meta-row"><span>Publikováno: 9. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#hlavni-srovnani">Hlavní srovnání</a></li>
                <li><a href="#plovouci-podlaha">Plovoucí podlaha – laminát, vinyl, dřevo</a></li>
                <li><a href="#dlazba">Dlažba – keramika vs. porcelán</a></li>
                <li><a href="#co-kam">Co kam v bytě</a></li>
                <li><a href="#podlahove-topeni">Podlahové topení a podlahy</a></li>
                <li><a href="#ceny-montaz">Ceny a montáž</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="hlavni-srovnani">
              <h2>Hlavní srovnání: plovoucí podlaha vs. dlažba</h2>
              <p>Dřív bylo rozhodování jednoduché – do koupelny dlažba, jinam koberec nebo parkety. Dnes je nabídka mnohem širší a hranice se stírají. SPC vinyl zvládne i koupelnu, porcelánová dlažba s podlahovým topením zahřeje obývák. Aby bylo jasno, tady je srovnání na první pohled:</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead>
                    <tr>
                      <th>Vlastnost</th>
                      <th>Laminát</th>
                      <th>Vinyl (LVT/SPC)</th>
                      <th>Dřevo (masiv/dýha)</th>
                      <th>Keramická dlažba</th>
                      <th>Porcelánová dlažba</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Cena materiálu / m²</td><td>150–500 Kč</td><td>300–900 Kč</td><td>800–3 000 Kč</td><td>250–600 Kč</td><td>400–1 500 Kč</td></tr>
                    <tr><td>Montáž / m²</td><td>120–200 Kč</td><td>120–200 Kč</td><td>250–450 Kč</td><td>250–450 Kč</td><td>300–500 Kč</td></tr>
                    <tr><td>Komfort chůze</td><td>Dobrý (teplý)</td><td>Dobrý (teplý)</td><td>Výborný (teplý)</td><td>Studený</td><td>Studený</td></tr>
                    <tr><td>Odolnost vůči vlhkosti</td><td>Nízká</td><td>Výborná</td><td>Nízká–střední</td><td>Výborná</td><td>Výborná</td></tr>
                    <tr><td>Hluk při chůzi</td><td>Střední</td><td>Nízký</td><td>Nízký</td><td>Nízký</td><td>Nízký</td></tr>
                    <tr><td>Podlahové topení</td><td>Podmíněně ✓</td><td>Výborně ✓</td><td>Špatně ✗</td><td>Výborně ✓</td><td>Výborně ✓</td></tr>
                    <tr><td>Životnost</td><td>10–20 let</td><td>15–25 let</td><td>30–50+ let</td><td>20–30 let</td><td>30–50+ let</td></tr>
                    <tr><td>Snadnost pokládky (svépomocí)</td><td>Snadná</td><td>Snadná</td><td>Střední</td><td>Obtížná</td><td>Obtížná</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Klíčové zjištění:</strong> Vinyl (LVT/SPC) je dnes nejuniverzálnější volba – kombinuje teplo plovoucí podlahy s odolností dlažby a funguje s podlahovým topením. Čistá dlažba zůstává nejlepší volbou pro koupelny, WC a venkovní prostory.</div>
            </section>

            <section id="plovouci-podlaha">
              <h2>Plovoucí podlaha – laminát vs. vinyl (LVT/SPC) vs. dřevo</h2>
              <p>Plovoucí podlahy se neklepí ani nešroubují – leží na podkladu volně, díky systému pero-drážka (click systém). Snadná montáž je jejich velkou výhodou. Uvnitř kategorie se ale výrazně liší.</p>
              <h3>Laminát</h3>
              <p>Laminát je nejprodávanější plovoucí podlaha v Česku. Skládá se z HDF jádra s laminátovým povrchem imitujícím dřevo nebo kámen. Klíčovým parametrem je <strong>třída odolnosti AC</strong>:</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead>
                    <tr><th>Třída AC</th><th>Použití</th><th>Příklady místností</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>AC3</td><td>Domácnost – nízká zátěž</td><td>Ložnice, dětský pokoj</td></tr>
                    <tr><td>AC4</td><td>Domácnost – střední zátěž</td><td>Obývák, kuchyně, chodba</td></tr>
                    <tr><td>AC5</td><td>Komerční – střední zátěž</td><td>Kanceláře, obchody</td></tr>
                    <tr><td>AC6</td><td>Komerční – vysoká zátěž</td><td>Nákupní centra, hotely</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Hlavní slabina laminátu je <strong>citlivost na vlhkost</strong> – při zalití nebo dlouhodobé vlhkosti HDF jádro bobtná a deformuje se. Do koupelny nebo k dřezu se laminát nehodí.</p>
              <h3>Vinyl – LVT a SPC</h3>
              <p><strong>LVT (Luxury Vinyl Tile)</strong> má pružné PVC jádro, je tišší a pohodlnější na chůzi. <strong>SPC (Stone Plastic Composite)</strong> má tužší kamenno-plastové jádro, lépe odolává teplotním výkyvům a je 100% vodotěsný. Oba typy jsou ideální tam, kde laminát selhává – koupelna, kuchyně, kotelna. Cena je vyšší než u laminátu, ale nižší než u dřeva nebo dobré dlažby.</p>
              <h3>Masivní dřevo a dřevěné dýhy</h3>
              <p>Masivní dřevo je nejprestižnější volba. Lze ho opakovaně přebrousit a naolejovat, takže vydrží desítky let. Nevýhody: vysoká cena (800–3 000 Kč/m²), citlivost na vlhkost a teplotní výkyvy, a špatná kompatibilita s podlahovým topením. Dřevěné dýhy (třívrstvé parkety) jsou kompromis – levnější než masiv, stabilnější, ale přebrousit lze jen jednou nebo dvakrát.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud hledáš plovoucí podlahu do celého bytu včetně koupelny, volte SPC vinyl. Jeden typ v celém bytě vytváří vizuální jednotu a zjednodušuje pokládku.</div>
            </section>

            <section id="dlazba">
              <h2>Dlažba – keramika vs. porcelán, formáty a použití</h2>
              <p>Dlažba se lepí do malty nebo flexibilního tmelu – montáž je náročnější a dražší než plovoucí podlahy, ale výsledek je trvalý a odolný.</p>
              <h3>Keramická dlažba</h3>
              <p>Tradiční varianta s glazovaným povrchem. Nasákavost je vyšší než u porcelánu, takže se nehodí do prostorů s mrazem (balkón, terasa) ani do venkovního použití. Cena začíná na 250 Kč/m², výběr formátů a designů je obrovský. Do interiéru (koupelna, kuchyně, vstup) je plně dostačující.</p>
              <h3>Porcelánová dlažba (slinutá)</h3>
              <p>Porcelán se vypaluje při vyšší teplotě, má minimální nasákavost (&lt; 0,5 %) a je podstatně tvrdší. Hodí se na terasy, balkóny, exteriéry i do průmyslových provozů. Cena je vyšší (400–1 500 Kč/m²), ale životnost je srovnatelná s kamenem. Moderní velkoformátové dlaždice (600×600 mm, 800×800 mm nebo i 1200×600 mm) jsou téměř výhradně porcelán.</p>
              <h3>Formáty a spáry</h3>
              <ul>
                <li><strong>Malé formáty (mosaic, 10×10, 20×20)</strong> – tradiční koupelna, rustikální styl; více spár = náročnější čištění</li>
                <li><strong>Střední formáty (30×30, 45×45, 60×30)</strong> – nejprodávanější, vhodné pro většinu interiérů</li>
                <li><strong>Velké formáty (60×60, 80×80, 120×60)</strong> – moderní vzhled, méně spár, vizuálně zvětšují prostor; náročnější pokládka</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pro venkovní terasy a balkóny vždy volte mrazuvzdornou porcelánovou dlažbu s protiskluzností R11 nebo R12. Běžná keramika na mrazu praská.</div>
            </section>

            <section id="co-kam">
              <h2>Co kam v bytě – doporučení pro každou místnost</h2>
              <p>Tady je přehled pro celý byt. Vychází z praktických zkušeností – nejen z katalogu výrobce.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead>
                    <tr><th>Místnost</th><th>Doporučení</th><th>Proč</th></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Obývací pokoj</strong></td>
                      <td>Laminát AC4, SPC vinyl, dřevěné dýhy</td>
                      <td>Teplo pod nohama, dobrá akustika, nízká vlhkost. Dřevo nebo vinyl dají prémiový pocit.</td>
                    </tr>
                    <tr>
                      <td><strong>Ložnice</strong></td>
                      <td>Laminát AC3, SPC vinyl, masiv</td>
                      <td>Nízká zátěž, priorita je teplo a tichý povrch. Koberec je alternativa, ale hůře se udržuje.</td>
                    </tr>
                    <tr>
                      <td><strong>Kuchyně</strong></td>
                      <td>SPC vinyl, keramická dlažba</td>
                      <td>Riziko rozlití vody, tuku. Laminát nevhodný. Vinyl je snadnější na pokládku, dlažba odolnější.</td>
                    </tr>
                    <tr>
                      <td><strong>Koupelna / WC</strong></td>
                      <td>Keramická nebo porcelánová dlažba, SPC vinyl</td>
                      <td>Stálá vlhkost vylučuje laminát i masiv. Dlažba je nejspolehlivější. SPC vinyl jako levnější alternativa.</td>
                    </tr>
                    <tr>
                      <td><strong>Dětský pokoj</strong></td>
                      <td>SPC vinyl, laminát AC3–AC4</td>
                      <td>Vinyl je tišší (hračky, pády), teplejší a snadněji se čistí. Laminát je levnější volba.</td>
                    </tr>
                    <tr>
                      <td><strong>Chodba / vstup</strong></td>
                      <td>Keramická dlažba, SPC vinyl, laminát AC5</td>
                      <td>Vysoká zátěž, písek a vlhkost z bot. Dlažba nebo odolný vinyl jsou nejpraktičtější.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="podlahove-topeni">
              <h2>Podlahové topení a podlahy – co je kompatibilní?</h2>
              <p>Podlahové topení (elektrické i vodní) výrazně ovlivňuje výběr podlahy. Zásadní parametr je <strong>tepelný odpor podlahy</strong> – čím nižší, tím lépe topení funguje.</p>
              <h3>Dlažba – ideální kombinace</h3>
              <p>Keramika a porcelán mají výbornou tepelnou vodivost. Podlahové topení pod dlažbou ohřeje povrch rychle a rovnoměrně. Tato kombinace je standardem v koupelnách i v moderních obývacích pokojích.</p>
              <h3>Vinyl (LVT/SPC) – dobrá volba</h3>
              <p>Vinyl má nízký tepelný odpor a je plně kompatibilní s podlahovým topením (vodním i elektrickým). Maximální povrchová teplota je obvykle 27–28 °C – ověř v technickém listu výrobce. SPC je stabilnější než LVT při teplotních výkyvech.</p>
              <h3>Laminát – podmíněná kompatibilita</h3>
              <p>Laminát lze kombinovat s podlahovým topením, ale platí přísná pravidla. Výrobce musí uvést kompatibilitu a tepelný odpor <strong>λ ≥ 0,1 W/mK</strong>. Maximální povrchová teplota je 27 °C – vyšší teplota podlahu deformuje. Podložka pod laminát nesmí mít příliš velký tepelný odpor (celkový odpor souvrství max. 0,15 m²K/W).</p>
              <h3>Masivní dřevo – špatná volba</h3>
              <p>Masivní dřevo se s podlahovým topením kombinuje velmi špatně. Teplotní výkyvy způsobují rozpínání a smršťování, vznikají spáry a deformace. Pokud chceš dřevo a podlahové topení, volte stabilizované třívrstvé parkety nebo raději vinyl s dřevěným dekorem.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud plánuješ podlahové topení, rozhodni se nejprve pro něj a teprve pak vyber podlahu. Ne naopak. Zpětná montáž topení pod existující plovoucí podlahu je možná jen u elektrických rohoží s tenčí vrstvou.</div>
            </section>

            <section id="ceny-montaz">
              <h2>Ceny a montáž – přehled nákladů 2026</h2>
              <p>Celkové náklady na novou podlahu včetně montáže snadno spočítáš v naší <Link href="/kalkulacky/cena-podlahy" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačce ceny podlahy</Link>. Tady jsou orientační ceny pro Česko v roce 2026:</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead>
                    <tr>
                      <th>Typ podlahy</th>
                      <th>Materiál / m²</th>
                      <th>Montáž / m² (řemeslník)</th>
                      <th>Celkem / m²</th>
                      <th>Svépomocí?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Laminát základní (AC3–AC4)</td><td>150–300 Kč</td><td>120–180 Kč</td><td>270–480 Kč</td><td>Ano – snadné</td></tr>
                    <tr><td>Laminát kvalitní (AC4–AC5)</td><td>300–500 Kč</td><td>150–200 Kč</td><td>450–700 Kč</td><td>Ano – snadné</td></tr>
                    <tr><td>Vinyl LVT</td><td>300–600 Kč</td><td>120–180 Kč</td><td>420–780 Kč</td><td>Ano – snadné</td></tr>
                    <tr><td>Vinyl SPC</td><td>400–900 Kč</td><td>150–200 Kč</td><td>550–1 100 Kč</td><td>Ano – snadné</td></tr>
                    <tr><td>Dřevěné dýhy (třívrstvé parkety)</td><td>600–1 500 Kč</td><td>250–400 Kč</td><td>850–1 900 Kč</td><td>Podmíněně</td></tr>
                    <tr><td>Masivní dřevo</td><td>800–3 000 Kč</td><td>350–500 Kč</td><td>1 150–3 500 Kč</td><td>Obtížně</td></tr>
                    <tr><td>Keramická dlažba</td><td>250–600 Kč</td><td>250–400 Kč</td><td>500–1 000 Kč</td><td>Obtížně</td></tr>
                    <tr><td>Porcelánová dlažba</td><td>400–1 500 Kč</td><td>300–500 Kč</td><td>700–2 000 Kč</td><td>Obtížně</td></tr>
                  </tbody>
                </table>
              </div>
              <p>K materiálu je třeba připočítat <strong>podložku pod plovoucí podlahu</strong> (30–80 Kč/m²), tmel a spárovací hmotu pro dlažbu (50–150 Kč/m²) a lišty (50–200 Kč/bm). Při větší rekonstrukci nezapomeň na přípravu podkladu – frézování, samonivelaci nebo stěrku (100–300 Kč/m²).</p>
              <h3>Svépomocí vs. řemeslník</h3>
              <p>Plovoucí podlahy (laminát, vinyl) zvládne bez zkušeností téměř každý – stačí click systém, klikací lišty a jeden víkend. Dlažbu bez zkušeností nedělej: špatně vyspádovaná podlaha, nerovnoměrné spáry nebo špatný tmel se opravují těžko a draho. Řemeslník pro dlažbu na 20 m² vyjde na 5 000–10 000 Kč za práci, ale výsledek bude spolehlivý.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Vždy kup o 10 % materiálu navíc (na prořez a zásobu pro případné opravy). Totéž platí pro dlažbu – šarže keramiky se barevně liší, doobjednat identickou barvu po čase nemusí být možné.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Je plovoucí podlaha nebo dlažba levnější?", a: "Základní laminát vychází nejlevněji – materiál od 150 Kč/m² a montáž od 120 Kč/m². Keramická dlažba stojí materiál 250–600 Kč/m², ale pokládka je nákladnější (250–450 Kč/m²). Celkově bývá plovoucí podlaha levnější o 30–50 %." },
                  { q: "Jaká podlaha je nejlepší do koupelny?", a: "Do koupelny jednoznačně dlažba – keramická nebo porcelánová. Dobře zvládá vlhkost, je snadno omyvatelná a nevede k plísním. Pokud přece jen chcete plovoucí podlahu, volte výhradně SPC vinyl (100% vodotěsný)." },
                  { q: "Lze plovoucí podlahu kombinovat s podlahovým topením?", a: "Ano, ale záleží na typu. Vinyl (LVT/SPC) je nejlepší volba – ohřívá se rychle a má nízký tepelný odpor. Laminát musí mít λ ≥ 0,1 W/mK, maximální povrchová teplota je 27 °C. Masivní dřevo se s podlahovým topením kombinuje špatně." },
                  { q: "Jak dlouho vydrží laminátová podlaha?", a: "Kvalitní laminát třídy AC4 vydrží v obývacím pokoji 15–20 let, ve frekventovanějších prostorách 8–12 let. AC5 je vhodný do komerčních prostor a vydrží ještě déle. Rozhodující je třída odolnosti a správná údržba." },
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
                <li><a href="#hlavni-srovnani">Hlavní srovnání</a></li>
                <li><a href="#plovouci-podlaha">Plovoucí podlaha</a></li>
                <li><a href="#dlazba">Dlažba</a></li>
                <li><a href="#co-kam">Co kam v bytě</a></li>
                <li><a href="#podlahove-topeni">Podlahové topení</a></li>
                <li><a href="#ceny-montaz">Ceny a montáž</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/stehovani" className="sidebar-cat-link">🏠 Stěhování & rekonstrukce<span>články →</span></Link>
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
