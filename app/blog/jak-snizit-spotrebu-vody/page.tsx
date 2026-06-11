import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak snížit spotřebu vody v domácnosti",
  description: "Praktické tipy na úsporu vody při sprchování, praní, mytí nádobí i zalévání zahrady – kolik se dá reálně ušetřit.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-snizit-spotrebu-vody" },
  openGraph: { title: "Jak snížit spotřebu vody v domácnosti", description: "Praktické tipy na úsporu vody při sprchování, praní, mytí nádobí i zalévání zahrady – kolik se dá reálně ušetřit.", url: "https://www.domovniguru.cz/blog/jak-snizit-spotrebu-vody", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2025-04-10T08:00:00Z", modifiedTime: "2026-06-04T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20sn%C3%AD%C5%BEit%20spot%C5%99ebu%20vody%20v%20dom%C3%A1cnosti&cat=blog", width: 1200, height: 630, alt: "Jak snížit spotřebu vody v domácnosti" }] },
  twitter: { card: "summary_large_image", title: "Jak snížit spotřebu vody v domácnosti", description: "Praktické tipy na úsporu vody při sprchování, praní, mytí nádobí i zalévání zahrady." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/jak-snizit-spotrebu-vody#article", "headline": "Jak snížit spotřebu vody v domácnosti", "datePublished": "2025-04-10T08:00:00Z", "dateModified": "2026-06-04T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["úspora vody", "spotřeba vody v domácnosti", "vodné a stočné", "perlátor", "dvojí splachování", "dešťová voda"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Sezónní údržba", "item": "https://www.domovniguru.cz/blog/kategorie/sezonni-udrzba" }, { "@type": "ListItem", "position": 4, "name": "Jak snížit spotřebu vody v domácnosti", "item": "https://www.domovniguru.cz/blog/jak-snizit-spotrebu-vody" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Kolik vody spotřebuje průměrná domácnost?", "acceptedAnswer": { "@type": "Answer", "text": "Podle statistik je v ČR průměrná spotřeba okolo 85–90 litrů na osobu a den, tedy zhruba 90–100 m³ ročně na čtyřčlennou domácnost. Nejvíc vody spotřebuje sprchování a koupání, následuje splachování WC a praní." } }, { "@type": "Question", "name": "Kolik stojí m³ vody v ČR?", "acceptedAnswer": { "@type": "Answer", "text": "Cena vodného a stočného se v jednotlivých obcích liší, orientačně se ale pohybuje mezi 90–130 Kč za m³ včetně DPH. Pro čtyřčlennou domácnost se 100 m³ ročně to znamená výdaj přibližně 9 000–13 000 Kč za rok." } }, { "@type": "Question", "name": "Vyplatí se úsporná sprchová hlavice?", "acceptedAnswer": { "@type": "Answer", "text": "Ano. Úsporná sprchová hlavice nebo perlátor stojí 200–600 Kč a sníží průtok vody o 30–50 %, aniž by byl pocit ze sprchování výrazně horší. Návratnost je obvykle během několika měsíců." } }, { "@type": "Question", "name": "Jak moc šetří dvojí splachování WC?", "acceptedAnswer": { "@type": "Answer", "text": "Splachovací nádržka s tlačítkem pro malé a velké splachování ušetří v průměru 20–30 % vody na splachování oproti starým nádržkám s jedním pevným objemem 9 litrů." } }, { "@type": "Question", "name": "Má smysl sbírat dešťovou vodu na zalévání?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, hlavně v sezóně, kdy zahrada spotřebuje nejvíc vody. Sud na 200–500 litrů u svodu okapu pokryje běžné zalévání záhonů na několik dní a ušetří jak vodné, tak měkčí dešťová voda prospívá rostlinám." } }] }] };

const RELATED = [
  { title: "Spočítejte si spotřebu vody v domácnosti", href: "/kalkulacky/spotreba-vody", read: "2 min" },
  { title: "Jak správně zalévat zahradu", href: "/blog/jak-spravne-zalevat", read: "5 min" },
  { title: "Automatické zavlažování zahrady", href: "/blog/automaticke-zavlazovani-zahrady", read: "6 min" },
  { title: "Jak ušetřit na vytápění", href: "/blog/usetrit-na-vytapeni", read: "6 min" },
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
              <span>Jak snížit spotřebu vody v domácnosti</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">🍂 Sezónní údržba</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak snížit spotřebu vody v domácnosti</h1>
              <p className="article-lead">Vodné a stočné v posledních letech jen rostou a u větších domácností se náklady na vodu blíží nákladům na elektřinu. Dobrá zpráva je, že většinu spotřeby jde snížit jednoduchými opatřeními, aniž by ses musel(a) v koupelně nebo kuchyni nějak omezovat.</p>
              <div className="article-meta-row"><span>Aktualizováno: 11. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#kde-mizi-voda">Kde domácnost spotřebuje nejvíc vody</a></li>
                <li><a href="#sprchovani">Sprchování a koupání</a></li>
                <li><a href="#wc">Splachování WC</a></li>
                <li><a href="#prani-myti">Praní a mytí nádobí</a></li>
                <li><a href="#zahrada">Zalévání zahrady a dešťová voda</a></li>
                <li><a href="#netesnosti">Netěsnosti a recyklace vody</a></li>
                <li><a href="#cena">Kolik stojí voda v ČR</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="kde-mizi-voda">
              <h2>Kde domácnost spotřebuje nejvíc vody</h2>
              <p>Než se pustíš do úspor, je dobré vědět, kam voda v domácnosti vlastně mizí. Většina lidí by tipovala mytí nádobí nebo praní, realita je ale jiná – nejvíc vody spolkne hygiena.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Spotřeba</th><th>Podíl na celkové spotřebě</th><th>Litry / osoba / den (orientačně)</th></tr></thead>
                  <tbody>
                    <tr><td>Sprchování a koupání</td><td>~35 %</td><td>30–35 l</td></tr>
                    <tr><td>Splachování WC</td><td>~25 %</td><td>20–25 l</td></tr>
                    <tr><td>Praní prádla</td><td>~12 %</td><td>10–12 l</td></tr>
                    <tr><td>Mytí nádobí</td><td>~10 %</td><td>8–10 l</td></tr>
                    <tr><td>Vaření a pití</td><td>~5 %</td><td>4–5 l</td></tr>
                    <tr><td>Úklid, zalévání, ostatní</td><td>~13 %</td><td>10–13 l</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Celkově se průměrná spotřeba pohybuje kolem 85–90 litrů na osobu a den. U čtyřčlenné domácnosti to dělá zhruba 90–100 m³ za rok. Pokud chceš zjistit, jak na tom je tvoje domácnost, zkus naši <Link href="/kalkulacky/spotreba-vody" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačku spotřeby vody</Link> – stačí zadat počet osob a obvyklé návyky a uvidíš, kde máš největší rezervy.</p>
            </section>

            <section id="sprchovani">
              <h2>Sprchování a koupání</h2>
              <p>Klasická sprchová hlavice protéká rychlostí 12–15 litrů za minutu. Při deseti minutách sprchování je to 120–150 litrů na jedno sprchování – tedy podobně jako celá vana.</p>
              <h3>Úsporná sprchová hlavice a perlátory</h3>
              <p>Nejjednodušší a nejlevnější opatření vůbec. Úsporná sprchová hlavice s aerátorem smíchá vodu se vzduchem a sníží průtok na 6–9 litrů za minutu, aniž bys to při sprchování výrazně poznal(a). Pořizovací cena se pohybuje od 200 do 800 Kč, návratnost je obvykle pár měsíců.</p>
              <p>Stejný princip platí pro <strong>perlátory</strong> – malé sítka, která se našroubují na kohoutky u umyvadla a dřezu. Sníží průtok zhruba o 30–50 % a stojí pár desítek korun za kus.</p>
              <h3>Kratší sprchování a vypínání vody</h3>
              <ul>
                <li>Zkrácení sprchování z 10 na 5 minut ušetří přibližně 60–75 litrů na osobu a den</li>
                <li>Vypnutí vody během mydlení nebo mytí vlasů ušetří dalších 10–20 litrů</li>
                <li>Sprchování místo koupání ve vaně ušetří 60–100 litrů na koupel</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud máš starší termostatickou baterii, zkontroluj, jak dlouho trvá, než teče teplá voda. Pokud to trvá déle než 15–20 sekund, zvaž instalaci cirkulace teplé vody nebo aspoň nech rozehřívanou vodu chytat do konvice na zalévání nebo úklid.</div>
            </section>

            <section id="wc">
              <h2>Splachování WC</h2>
              <p>Starší splachovací nádržky mají objem 9–12 litrů a splachují vždy naplno. Moderní nádržky mají dvě tlačítka – malé splachování (3 litry) a velké (6 litrů).</p>
              <h3>Dvojí splachování</h3>
              <p>Pokud máš starší nádržku s jedním tlačítkem, existují dvě možnosti:</p>
              <ul>
                <li><strong>Výměna nádržky nebo mechanismu</strong> za sadu s dvojím splachováním – cena dílu od 300 do 1 000 Kč, montáž zvládne i šikovný kutil za hodinu</li>
                <li><strong>Vodní pytlík nebo láhev v nádržce</strong> – vložením naplněné PET lahve (1–1,5 l) do nádržky sníží objem každého splachování o tento objem. Je to provizorní řešení, ale funguje okamžitě a zdarma</li>
              </ul>
              <p>Při průměru 5 splachování na osobu denně může přechod z 9litrové na úsporné splachování (průměr 4–5 l) ušetřit 20–25 litrů na osobu denně, tedy přes 7 m³ ročně na osobu.</p>
            </section>

            <section id="prani-myti">
              <h2>Praní a mytí nádobí</h2>
              <h3>Pračka</h3>
              <p>Moderní pračky spotřebují na jeden cyklus 40–60 litrů vody bez ohledu na to, jestli je bubn napůl plný, nebo plný. Z toho plyne jednoduché pravidlo: prát vždy s plnou náplní.</p>
              <ul>
                <li>Praní poloprázdné pračky dvakrát místo jednou plné téměř zdvojnásobí spotřebu vody i energie</li>
                <li>Eko programy spotřebují méně vody i energie, jen trvají déle – ideální na noc nebo když nikdo doma nečeká na prádlo</li>
                <li>Pračka starší 10–12 let může spotřebovávat o 30–50 % vody víc než nový úsporný model (třída A)</li>
              </ul>
              <h3>Myčka nádobí</h3>
              <p>Myčka na jeden cyklus spotřebuje 9–12 litrů vody, zatímco mytí stejného množství nádobí ručně pod tekoucí vodou klidně 30–40 litrů. Myčka je tedy téměř vždy úspornější – pokud ji ovšem pouštíš jen plnou a na eko program.</p>
              <h3>Mytí nádobí v ruce</h3>
              <p>Pokud myčku nemáš, mytí pod tekoucí vodou je nejhorší varianta. Mnohem úspornější je napustit dřez nebo umyvadlo vodou s saponátem, umýt v ní všechno nádobí a opláchnout najednou v druhé vodě. Rozdíl může být 20–30 litrů na jedno mytí.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Vodu z vaření brambor, těstovin nebo zeleniny nelej do odpadu. Po vychladnutí je skvělá na zalévání pokojových rostlin nebo záhonů – obsahuje navíc i trochu rozpuštěných minerálů, které rostlinám prospějí.</div>
            </section>

            <section id="zahrada">
              <h2>Zalévání zahrady a dešťová voda</h2>
              <p>V letních měsících může zalévání zahrady tvořit i třetinu celkové spotřeby vody domácnosti s pozemkem. Přitom jde o oblast, kde se dá ušetřit nejvíc – jednak chytřejším zaléváním, jednak využitím dešťové vody.</p>
              <h3>Sběr dešťové vody</h3>
              <p>Sud nebo nádrž napojená na svod okapu dokáže při běžném dešti nasbírat stovky litrů vody zdarma. I obyčejný 200litrový sud pokryje zalévání menšího záhonu na několik dní. Dešťová voda je navíc měkká a bez chlóru, takže rostlinám vyhovuje víc než voda z vodovodu.</p>
              <h3>Zalévání ve správnou dobu a správným způsobem</h3>
              <p>Zalévání brzy ráno nebo večer omezí odpar a rostliny dostanou víc vody tam, kam mají – ke kořenům. Podrobný postup najdeš v článku <Link href="/blog/jak-spravne-zalevat" style={{ color: "#2a6496", textDecoration: "underline" }}>jak správně zalévat zahradu</Link>, kde se dozvíš i jak často a kolik vody jednotlivé rostliny potřebují.</p>
              <p>Pokud chceš zalévání úplně automatizovat a ušetřit tak vodu i čas, mrkni na <Link href="/blog/automaticke-zavlazovani-zahrady" style={{ color: "#2a6496", textDecoration: "underline" }}>automatické zavlažování zahrady</Link> – kapkové zavlažování s časovačem dokáže snížit spotřebu vody na zahradě o 30–50 % oproti plošnému zalévání hadicí nebo postřikovačem.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Mulčování záhonů kůrou, slámou nebo posečenou trávou zpomalí odpařování vody z půdy a omezí potřebu zalévání i o desítky procent.</div>
            </section>

            <section id="netesnosti">
              <h2>Netěsnosti a recyklace vody</h2>
              <h3>Kapající kohoutky a protékající WC</h3>
              <p>Kapající kohoutek vypadá jako maličkost, ale za rok dokáže „ukapat" i přes 1 000 litrů vody. Protékající splachovací mechanismus ve WC je ještě horší – netěsnící těsnění může za den protéct desítky až stovky litrů, aniž by sis toho všiml(a), protože voda odtéká tiše do odpadu.</p>
              <ul>
                <li>Kapající kohoutek – výměna těsnění nebo kartuše stojí desítky korun a zvládneš to sám(a) za pár minut</li>
                <li>Protékající WC – jednoduchý test: do nádržky kápni potravinářské barvivo a počkej 15 minut bez splachování. Pokud se barva objeví v míse, těsnění netěsní a je potřeba ho vyměnit</li>
                <li>Pravidelná kontrola vodoměru – pokud se i při zavřených kohoutcích číselník hýbe, máš někde únik</li>
              </ul>
              <h3>Recyklace a opětovné využití vody</h3>
              <p>Kromě vody z vaření se dá využít i:</p>
              <ul>
                <li>Voda po opláchnutí ovoce a zeleniny – na zalévání</li>
                <li>Studená voda, která vyteče, než se ohřeje teplá – do konvice nebo na splachování</li>
                <li>Voda z odvlhčovače vzduchu nebo kondenzátoru sušičky – na zalévání pokojových rostlin</li>
              </ul>
            </section>

            <section id="cena">
              <h2>Kolik stojí voda v ČR</h2>
              <p>Cena vody se skládá ze dvou položek – <strong>vodné</strong> (pitná voda dodaná do domácnosti) a <strong>stočné</strong> (odvedení a čištění odpadní vody). Obě položky se platí za m³ (1 000 litrů) a sčítají se dohromady.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th></th><th>Orientační cena</th></tr></thead>
                  <tbody>
                    <tr><td>Vodné (Kč/m³ s DPH)</td><td>45–60 Kč</td></tr>
                    <tr><td>Stočné (Kč/m³ s DPH)</td><td>40–55 Kč</td></tr>
                    <tr><td>Vodné + stočné celkem</td><td><strong>90–130 Kč/m³</strong></td></tr>
                    <tr><td>Roční náklad – 4členná domácnost (~100 m³)</td><td><strong>9 000–13 000 Kč</strong></td></tr>
                  </tbody>
                </table>
              </div>
              <p>Ceny se výrazně liší podle obce a provozovatele vodovodů a kanalizací – v některých regionech se cena blíží i 150 Kč/m³. Pokud zvládneš snížit spotřebu jen o 20 %, u průměrné domácnosti to znamená úsporu 1 800–2 600 Kč ročně, a to bez jakékoliv velké investice.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Kolik vody spotřebuje průměrná domácnost?", a: "Podle statistik je v ČR průměrná spotřeba okolo 85–90 litrů na osobu a den, tedy zhruba 90–100 m³ ročně na čtyřčlennou domácnost. Nejvíc vody spotřebuje sprchování a koupání, následuje splachování WC a praní." },
                  { q: "Kolik stojí m³ vody v ČR?", a: "Cena vodného a stočného se v jednotlivých obcích liší, orientačně se ale pohybuje mezi 90–130 Kč za m³ včetně DPH. Pro čtyřčlennou domácnost se 100 m³ ročně to znamená výdaj přibližně 9 000–13 000 Kč za rok." },
                  { q: "Vyplatí se úsporná sprchová hlavice?", a: "Ano. Úsporná sprchová hlavice nebo perlátor stojí 200–600 Kč a sníží průtok vody o 30–50 %, aniž by byl pocit ze sprchování výrazně horší. Návratnost je obvykle během několika měsíců." },
                  { q: "Jak moc šetří dvojí splachování WC?", a: "Splachovací nádržka s tlačítkem pro malé a velké splachování ušetří v průměru 20–30 % vody na splachování oproti starým nádržkám s jedním pevným objemem 9 litrů." },
                  { q: "Má smysl sbírat dešťovou vodu na zalévání?", a: "Ano, hlavně v sezóně, kdy zahrada spotřebuje nejvíc vody. Sud na 200–500 litrů u svodu okapu pokryje běžné zalévání záhonů na několik dní a ušetří jak vodné, tak měkčí dešťová voda prospívá rostlinám." },
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
                <li><a href="#kde-mizi-voda">Kde mizí voda</a></li>
                <li><a href="#sprchovani">Sprchování a koupání</a></li>
                <li><a href="#wc">Splachování WC</a></li>
                <li><a href="#prani-myti">Praní a mytí nádobí</a></li>
                <li><a href="#zahrada">Zalévání a dešťová voda</a></li>
                <li><a href="#netesnosti">Netěsnosti a recyklace</a></li>
                <li><a href="#cena">Kolik stojí voda</a></li>
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
