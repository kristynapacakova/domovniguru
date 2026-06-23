import type { Metadata } from "next";
import Link from "next/link";
import ProductBox from "@/app/components/ProductBox";
import AdBanner from "@/app/components/AdBanner";

export const metadata: Metadata = {
  title: "Jak vybrat podlahovou krytinu do bytu podle místnosti",
  description: "Srovnání laminátu, vinylu, dlažby a dřeva pro obytné místnosti, kuchyň, koupelnu a chodbu – co se kam hodí.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/vyber-podlahovych-krytin-pro-byt" },
  openGraph: { title: "Jak vybrat podlahovou krytinu do bytu podle místnosti", description: "Srovnání laminátu, vinylu, dlažby a dřeva pro obytné místnosti, kuchyň, koupelnu a chodbu – co se kam hodí.", url: "https://www.domovniguru.cz/blog/vyber-podlahovych-krytin-pro-byt", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-12T08:00:00Z", modifiedTime: "2026-06-12T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20vybrat%20podlahovou%20krytinu%20do%20bytu%20podle%20m%C3%ADstnosti&cat=blog", width: 1200, height: 630, alt: "Jak vybrat podlahovou krytinu do bytu podle místnosti" }] },
  twitter: { card: "summary_large_image", title: "Jak vybrat podlahovou krytinu do bytu podle místnosti", description: "Srovnání laminátu, vinylu, dlažby a dřeva pro obytné místnosti, kuchyň, koupelnu a chodbu – co se kam hodí." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/vyber-podlahovych-krytin-pro-byt#article", "headline": "Jak vybrat podlahovou krytinu do bytu podle místnosti", "datePublished": "2026-06-12T08:00:00Z", "dateModified": "2026-06-12T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["podlahové krytiny", "laminát vs vinyl", "dlažba do koupelny", "dřevěná podlaha", "výběr podlahy do bytu"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Stěhování & rekonstrukce", "item": "https://www.domovniguru.cz/blog/kategorie/stehovani" }, { "@type": "ListItem", "position": 4, "name": "Jak vybrat podlahovou krytinu do bytu podle místnosti", "item": "https://www.domovniguru.cz/blog/vyber-podlahovych-krytin-pro-byt" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jaká podlaha je nejlepší do bytu s malými dětmi a zvířaty?", "acceptedAnswer": { "@type": "Answer", "text": "Pro byty s dětmi a zvířaty je nejvhodnější vinyl nebo kvalitní laminát s vysokou odolností proti poškrábání (AC4/AC5). Vinyl je navíc tišší, teplejší na dotek a lépe tlumí pády." } }, { "@type": "Question", "name": "Můžu dát laminát do koupelny?", "acceptedAnswer": { "@type": "Answer", "text": "Standardní laminát do koupelny nepatří, protože vlhkost proniká do spojů a podklad bobtná. Pokud chcete vzhled dřeva, použijte vinylové dílce s vodotěsnými spoji, ideálně v kombinaci s dlažbou ve sprchovém koutu." } }, { "@type": "Question", "name": "Jak velký rozdíl v ceně je mezi laminátem a vinylem?", "acceptedAnswer": { "@type": "Answer", "text": "Laminát v základní kvalitě vyjde na 200–400 Kč/m², kvalitnější vinyl na 400–900 Kč/m². Při větší rozloze tak vinyl znamená vyšší vstupní investici, ale často nižší náklady na pokládku a delší životnost ve vlhčích prostorách." } }, { "@type": "Question", "name": "Jak vyřešit přechod mezi dlažbou a laminátem v otevřeném prostoru?", "acceptedAnswer": { "@type": "Answer", "text": "Nejčastěji se používá přechodová lišta (kovová, dřevěná nebo plastová), která zakryje rozdílnou výšku krytin a dilatační mezeru. Při minimálním rozdílu výšek lze také použít flexibilní silikonovou spárovací lištu pro hladší přechod." } }, { "@type": "Question", "name": "Vydrží dřevěná podlaha v ložnici a obýváku dlouho?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, kvalitní dřevěná podlaha (masivní nebo třívrstvá) vydrží desítky let a lze ji několikrát přebrousit a lakovat. V málo zatížených místnostech, jako je ložnice, je to investice, která se časem vrátí na vzhledu i hodnotě bytu." } }] }] };

const RELATED = [
  { title: "Plovoucí podlaha vs. dlažba – co zvolit?", href: "/blog/plovouci-podlaha-vs-dlazba", read: "5 min" },
  { title: "Kladení vinylové podlahy – návod krok za krokem", href: "/blog/kladeni-vinyl-podlahy", read: "6 min" },
  { title: "Jak renovovat staré parkety", href: "/blog/renovovat-parkety", read: "5 min" },
  { title: "Jak vybrat dlažbu do koupelny", href: "/blog/jak-vybrat-dlazbu-do-koupelny", read: "4 min" },
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
              <span>Jak vybrat podlahovou krytinu do bytu podle místnosti</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏠 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 7 min čtení</span>
              </div>
              <h1 className="article-h1">Jak vybrat podlahovou krytinu do bytu podle místnosti</h1>
              <p className="article-lead">Laminát, vinyl, dlažba nebo dřevo? Výběr podlahy by se neměl řídit jen vzhledem nebo cenou – záleží na tom, do jaké místnosti podlaha patří, jak je zatížená a jak je tam vlhko. Tenhle přehled vám pomůže vybrat krytinu, která vydrží a bude se hodit.</p>
              <div className="article-meta-row"><span>Aktualizováno: 12. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#kriteria">Kritéria výběru podlahy</a></li>
                <li><a href="#laminat-vinyl">Laminát vs. vinyl – srovnání</a></li>
                <li><a href="#dlazba">Dlažba do koupelny a kuchyně</a></li>
                <li><a href="#drevo">Dřevěné podlahy do obýváku a ložnice</a></li>
                <li><a href="#prechody">Přechody mezi podlahami a prahy</a></li>
                <li><a href="#doporuceni">Doporučení podle typu místnosti</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="kriteria">
              <h2>1. Kritéria výběru podlahy</h2>
              <p>Než se rozhodnete pro konkrétní materiál, vyplatí se zamyslet nad několika praktickými kritérii. Podlaha, která vypadá skvěle na fotce v showroomu, nemusí v reálném provozu obstát – zejména pokud do bytu chodí domácí zvířata, malé děti nebo je místnost vystavená vlhkosti.</p>
              <h3>Provoz a zatížení</h3>
              <p>V chodbě, kuchyni a obývacím pokoji se chodí denně a často ve venkovní obuvi nebo s mokrýma nohama. Tam se vyplatí volit odolnější materiály – kvalitní laminát s vysokou třídou odolnosti (AC4/AC5), vinyl nebo dlažbu. V ložnici nebo pracovně, kde je provoz mírnější, lze sáhnout i po citlivějších materiálech, například dřevě nebo koberci.</p>
              <h3>Vlhkost</h3>
              <p>Koupelna, kuchyň a často i chodba u vstupních dveří jsou prostory, kde se počítá s vlhkostí, rozlitou vodou nebo sněhem na botách. Sem patří materiály odolné vůči vodě – dlažba nebo vodotěsný vinyl. Klasický laminát ani masivní dřevo do takto vlhkých prostor nepatří.</p>
              <h3>Rozpočet</h3>
              <p>Cena podlahových krytin se velmi liší – od levného laminátu po desetinásobně dražší masivní dřevo nebo designovou dlažbu. Při plánování rekonstrukce je dobré počítat nejen s cenou materiálu, ale i s pokládkou, podložkou a lištami. Orientační množství materiálu pro vaši místnost si můžete spočítat pomocí <Link href="/kalkulacky/kolik-laminatu" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačky spotřeby laminátu</Link>.</p>
              <h3>Životnost</h3>
              <p>Pokud plánujete v bytě zůstat dlouho, vyplatí se investovat do trvanlivějších materiálů – dlažby nebo dřeva, které vydrží i desítky let. Naopak v bytě na pronájem nebo při dočasném řešení může dát smysl levnější laminát nebo vinyl s rychlou návratností.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Než nakoupíte materiál, udělejte si jednoduchý plánek bytu s rozdělením podle typu provozu – suché obytné místnosti, vlhké provozy (koupelna, kuchyň) a přechodové zóny (chodba, předsíň). Pro každou zónu pak vybírejte krytinu samostatně.</div>
            </section>

            <section id="laminat-vinyl">
              <h2>2. Laminát vs. vinyl – srovnání</h2>
              <p>Laminát a vinyl jsou nejčastější volbou pro obytné prostory bytu. Oba materiály nabízejí širokou škálu dekorů imitujících dřevo nebo kámen, ale liší se ve struktuře, odolnosti a chování ve vlhkém prostředí.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Vlastnost</th><th>Laminát</th><th>Vinyl</th></tr></thead>
                  <tbody>
                    <tr><td>Odolnost proti vlhkosti</td><td>Nízká – nevhodný do vlhkých prostor</td><td>Vysoká – vhodný i do kuchyně, částečně koupelny</td></tr>
                    <tr><td>Odolnost proti poškrábání</td><td>Dobrá (záleží na třídě AC)</td><td>Velmi dobrá</td></tr>
                    <tr><td>Pocit na dotek</td><td>Tvrdší, chladnější</td><td>Měkčí, teplejší</td></tr>
                    <tr><td>Hlučnost při chůzi</td><td>Vyšší (dutý zvuk)</td><td>Nižší, tišší</td></tr>
                    <tr><td>Cena</td><td>200–400 Kč/m²</td><td>400–900 Kč/m²</td></tr>
                    <tr><td>Pokládka</td><td>Plovoucí, na podložku</td><td>Klikový systém nebo lepení</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Laminát je tradiční volbou pro obytné pokoje, kde je suché prostředí a požaduje se spíš nižší cena. Vinyl je flexibilnější – snese i nárazovou vlhkost, je tišší a příjemnější na chodidla, takže se hodí i do kuchyně nebo chodby. Pro odhad nákladů na celou podlahu napříč více místnostmi je užitečná <Link href="/kalkulacky/cena-podlahy" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačka ceny podlahy</Link>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud řešíte podlahu v otevřeném prostoru kuchyň–obývák, zvažte jeden materiál pro celou plochu – ideálně vinyl, který snese provoz kuchyně i pohodlí obývacího pokoje a vyhnete se přechodové liště uprostřed prostoru.</div>
            </section>

            <section id="dlazba">
              <h2>3. Dlažba do koupelny a kuchyně</h2>
              <p>Dlažba je v koupelně a u kuchyňské linky stále nejosvědčenějším řešením. Je naprosto odolná vůči vodě, snadno se udržuje a vydrží desítky let bez ztráty kvality. Nevýhodou je chladný povrch (řešitelný podlahovým vytápěním) a náročnější pokládka.</p>
              <h3>Koupelna</h3>
              <p>Do koupelny volte dlažbu s protiskluzovou úpravou, zejména ve sprchovém koutu. Velkoformátové dlaždice (60×60 cm a větší) vizuálně zvětšují prostor a mají méně spár, které je třeba čistit. U menších koupelen se naopak hodí menší formáty, které lépe kopírují tvar prostoru a snižují odřez.</p>
              <h3>Kuchyň</h3>
              <p>V kuchyni je dlažba vhodná zejména v okolí dřezu a sporáku, kde hrozí rozlití vody nebo tuku. Pokud chcete v kuchyni teplejší materiál, je alternativou vodotěsný vinyl – kombinuje odolnost dlažby s příjemnějším pocitem na dotek a nižší hlučností.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Při výběru dlažby do koupelny zkontrolujte i protiskluznost (hodnota R – čím vyšší, tím lepší úchop). Pro mokré zóny doporučujeme minimálně R10.</div>
            </section>

            <section id="drevo">
              <h2>4. Dřevěné podlahy do obýváku a ložnice</h2>
              <p>Obývací pokoj a ložnice jsou typickými prostory pro dřevěnou podlahu – ať jde o masivní parkety, třívrstvé dřevěné lamely nebo dřevěné vlysy. Dřevo přináší do bytu teplo, příjemnou akustiku a dlouhou životnost, pokud je o něj správně postaráno.</p>
              <h3>Masivní dřevo</h3>
              <p>Nejdražší, ale nejtrvanlivější varianta. Lze ji opakovaně brousit a lakovat, takže vydrží i několik desetiletí a stárnutím spíše získává na charakteru. Hodí se do místností se stálou vlhkostí a teplotou – tedy přesně do obýváku nebo ložnice.</p>
              <h3>Třívrstvé dřevěné podlahy</h3>
              <p>Kompromis mezi cenou a kvalitou – horní vrstva je z pravého dřeva, spodní vrstvy z dřevotřísky nebo překližky pro stabilitu. Lze pokládat i plovoucím způsobem, což zrychluje montáž a umožňuje pozdější demontáž například při stěhování.</p>
              <h3>Na co si dát pozor</h3>
              <p>Dřevěné podlahy nejsou vhodné do vlhkých provozů a citlivě reagují na výkyvy vlhkosti vzduchu – mohou se vlnit nebo naopak vytvářet mezery mezi lamelami. Před pokládkou je proto potřeba dřevo akklimatizovat v místnosti a udržovat v bytě stabilní vlhkost vzduchu (ideálně 40–60 %).</p>
            </section>

            <section id="prechody">
              <h2>5. Přechody mezi podlahami a prahy</h2>
              <p>Pokud kombinujete více typů podlah – například dlažbu v koupelně a laminát v chodbě – je potřeba vyřešit přechod mezi materiály. Jednotlivé krytiny mají často odlišnou výšku, a navíc je potřeba zajistit dilatační mezeru, která umožní materiálu mírně „dýchat" při změnách teploty a vlhkosti.</p>
              <h3>Přechodové lišty</h3>
              <p>Nejběžnější řešení – kovové, dřevěné nebo plastové lišty, které zakryjí spoj a vyrovnají případný rozdíl ve výšce podlah. Vybírají se podle barvy a materiálu navazujících krytin, případně podle prahu dveří, kde se obvykle umisťují.</p>
              <h3>Bezprahové přechody</h3>
              <p>Pokud mají obě krytiny podobnou výšku, je možné zvolit i elegantnější bezprahové řešení – těsný spoj se spárovací hmotou nebo tenkou kovovou lištou téměř zarovnanou s podlahou. Vyžaduje to ale precizní pokládku a vyrovnaný podklad.</p>
              <h3>Dilatace u dveří</h3>
              <p>U dveřních prahů by měla být vždy dilatační mezera alespoň 8–10 mm, kterou lišta zakryje. Bez ní může při tepelné roztažnosti podlahy dojít k vyboulení nebo poškození krytiny na hraně.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud chcete jednotný vzhled bytu bez viditelných přechodů, řešením je sjednotit krytinu v sousedních prostorech – například jeden typ vinylu pro chodbu i obývák, a přechody řešit jen na hranici s mokrými provozy.</div>
            </section>

            <section id="doporuceni">
              <h2>6. Doporučení podle typu místnosti</h2>
              <p>Na závěr přehled, který shrnuje, jaká krytina se pro jednotlivé místnosti v bytě hodí nejlépe a proč. Slouží jako rychlá orientace při plánování rekonstrukce nebo nákupu materiálu.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Místnost</th><th>Doporučená krytina</th><th>Proč</th></tr></thead>
                  <tbody>
                    <tr><td>Obývací pokoj</td><td>Dřevo, třívrstvá podlaha nebo laminát</td><td>Mírný provoz, důraz na vzhled, teplo a akustiku</td></tr>
                    <tr><td>Ložnice</td><td>Dřevo, laminát nebo koberec</td><td>Nízký provoz, příjemný pocit na dotek, tlumení zvuku</td></tr>
                    <tr><td>Kuchyň</td><td>Vinyl nebo dlažba</td><td>Odolnost proti vlhkosti, tukům a rozlitým tekutinám</td></tr>
                    <tr><td>Koupelna</td><td>Dlažba (s protiskluzovou úpravou)</td><td>Plně vodotěsná, snadná údržba, dlouhá životnost</td></tr>
                    <tr><td>Chodba / předsíň</td><td>Vinyl nebo odolný laminát (AC5)</td><td>Vysoký provoz, odolnost vůči vlhku z venkovní obuvi</td></tr>
                    <tr><td>Pracovna</td><td>Laminát nebo třívrstvé dřevo</td><td>Nízký provoz, příznivá cena, příjemné prostředí pro práci</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Při kombinaci více krytin v jednom bytě nezapomeňte na sladění barevných odstínů a vyřešení přechodů mezi místnostmi, jak jsme popsali výše. Dobře zvolená kombinace materiálů podle provozu vám ušetří náklady na pozdější opravy a zajistí, že podlaha bude vypadat dobře i po letech používání.</p>
              <ProductBox
                name="Podlahové krytiny pro každou místnost"
                store="NejlevnějšíPodlahy.cz"
                price="dle aktuální nabídky"
                href="https://ehub.cz/system/scripts/click.php?a_aid=31989715&a_bid=06cfb451"
                why="Laminát, vinyl i další krytiny z přehledu výše najdeš v široké nabídce na NejlevnějšíPodlahy.cz — vyber podle místnosti a provozu, jak doporučujeme v tabulce."
                icon="🪵"
              />
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jaká podlaha je nejlepší do bytu s malými dětmi a zvířaty?", a: "Pro byty s dětmi a zvířaty je nejvhodnější vinyl nebo kvalitní laminát s vysokou odolností proti poškrábání (AC4/AC5). Vinyl je navíc tišší, teplejší na dotek a lépe tlumí pády." },
                  { q: "Můžu dát laminát do koupelny?", a: "Standardní laminát do koupelny nepatří, protože vlhkost proniká do spojů a podklad bobtná. Pokud chcete vzhled dřeva, použijte vinylové dílce s vodotěsnými spoji, ideálně v kombinaci s dlažbou ve sprchovém koutu." },
                  { q: "Jak velký rozdíl v ceně je mezi laminátem a vinylem?", a: "Laminát v základní kvalitě vyjde na 200–400 Kč/m², kvalitnější vinyl na 400–900 Kč/m². Při větší rozloze tak vinyl znamená vyšší vstupní investici, ale často nižší náklady na pokládku a delší životnost ve vlhčích prostorách." },
                  { q: "Jak vyřešit přechod mezi dlažbou a laminátem v otevřeném prostoru?", a: "Nejčastěji se používá přechodová lišta (kovová, dřevěná nebo plastová), která zakryje rozdílnou výšku krytin a dilatační mezeru. Při minimálním rozdílu výšek lze také použít flexibilní silikonovou spárovací lištu pro hladší přechod." },
                  { q: "Vydrží dřevěná podlaha v ložnici a obýváku dlouho?", a: "Ano, kvalitní dřevěná podlaha (masivní nebo třívrstvá) vydrží desítky let a lze ji několikrát přebrousit a lakovat. V málo zatížených místnostech, jako je ložnice, je to investice, která se časem vrátí na vzhledu i hodnotě bytu." },
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
                <li><a href="#kriteria">Kritéria výběru podlahy</a></li>
                <li><a href="#laminat-vinyl">Laminát vs. vinyl</a></li>
                <li><a href="#dlazba">Dlažba do koupelny a kuchyně</a></li>
                <li><a href="#drevo">Dřevěné podlahy</a></li>
                <li><a href="#prechody">Přechody mezi podlahami</a></li>
                <li><a href="#doporuceni">Doporučení podle místnosti</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/stehovani" className="sidebar-cat-link">🏠 Stěhování & rekonstrukce<span>Více článků →</span></Link>
            </div>
            <div className="sidebar-widget">
              <AdBanner
                href="https://ehub.cz/system/scripts/click.php?a_aid=31989715&a_bid=06cfb451"
                src="https://doc.ehub.cz/b/498c8ee2/06cfb451.png"
                alt="NejlevnějšíPodlahy.cz – podlahové krytiny"
                width={970}
                height={250}
              />
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
