import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak vybudovat skalku na zahradě krok za krokem",
  description: "Výběr místa, kamenů a substrátu pro skalku a tipy na výsadbu skalniček, které zvládnou i suchá léta.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-vybudovat-skalku" },
  openGraph: { title: "Jak vybudovat skalku na zahradě krok za krokem", description: "Výběr místa, kamenů a substrátu pro skalku a tipy na výsadbu skalniček, které zvládnou i suchá léta.", url: "https://www.domovniguru.cz/blog/jak-vybudovat-skalku", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-12T08:00:00Z", modifiedTime: "2026-06-12T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20vybudovat%20skalku%20na%20zahrad%C4%9B%20krok%20za%20krokem&cat=blog", width: 1200, height: 630, alt: "Jak vybudovat skalku na zahradě krok za krokem" }] },
  twitter: { card: "summary_large_image", title: "Jak vybudovat skalku na zahradě krok za krokem", description: "Výběr místa, kamenů a substrátu pro skalku a tipy na výsadbu skalniček, které zvládnou i suchá léta." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/jak-vybudovat-skalku#article", "headline": "Jak vybudovat skalku na zahradě krok za krokem", "datePublished": "2026-06-12T08:00:00Z", "dateModified": "2026-06-12T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["skalka na zahradě", "stavba skalky", "skalničky", "drenáž skalky", "substrát pro skalku"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Zahrada & terasa", "item": "https://www.domovniguru.cz/blog/kategorie/zahrada" }, { "@type": "ListItem", "position": 4, "name": "Jak vybudovat skalku", "item": "https://www.domovniguru.cz/blog/jak-vybudovat-skalku" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jaké místo je pro skalku nejvhodnější?", "acceptedAnswer": { "@type": "Answer", "text": "Ideální je slunné až polostinné místo s mírným svahem, kde se nehromadí voda. Většina skalniček potřebuje minimálně 5–6 hodin slunce denně a propustnou půdu." } }, { "@type": "Question", "name": "Jaké kameny jsou pro skalku nejlepší?", "acceptedAnswer": { "@type": "Answer", "text": "Nejlépe vypadají kameny stejného druhu a podobné barvy, ideálně místní – pískovec, břidlice nebo žula. Kombinace více typů kamenů působí nepřirozeně a chaoticky." } }, { "@type": "Question", "name": "Je nutná drenáž pod skalkou?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, drenážní vrstva ze štěrku nebo kačírku o tloušťce 15–20 cm je klíčová. Zabraňuje hromadění vody u kořenů, kterou skalničky špatně snášejí a hnijí." } }, { "@type": "Question", "name": "Jaký substrát se hodí pro skalničky?", "acceptedAnswer": { "@type": "Answer", "text": "Skalničky vyžadují propustný, chudší substrát – směs zahradní zeminy, štěrku a písku v poměru přibližně 1:1:1. Těžká jílovitá hlína se musí vždy odlehčit." } }, { "@type": "Question", "name": "Kdy je nejlepší doba na výsadbu skalniček?", "acceptedAnswer": { "@type": "Answer", "text": "Nejvhodnější je jaro (duben–květen) nebo začátek podzimu (září), kdy rostliny mají čas zakořenit před extrémními teplotami léta nebo mrazy zimy." } }] }] };

const RELATED = [
  { title: "Jak navrhnout zahradu – kompletní průvodce", href: "/blog/jak-navrhnout-zahradu", read: "6 min" },
  { title: "Vyvýšený záhon – postup stavby krok za krokem", href: "/blog/vyvyseny-zahon-postup", read: "5 min" },
  { title: "Jak se zbavit plevele bez chemie", href: "/blog/zbavit-se-plevele-bez-chemie", read: "4 min" },
  { title: "Jak pěstovat jahody na zahradě", href: "/blog/jak-pestovat-jahody", read: "5 min" },
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
              <span>Jak vybudovat skalku</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak vybudovat skalku na zahradě krok za krokem</h1>
              <p className="article-lead">Skalka dokáže oživit i ten nejmenší kout zahrady a zároveň je jedním z nejméně náročných typů záhonů na údržbu. Klíčem k úspěchu je správný výběr místa, kamenů, drenáže a substrátu – a samozřejmě skalniček, které sucho a mráz zvládnou bez potíží.</p>
              <div className="article-meta-row"><span>Aktualizováno: 12. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#vyber-mista">Výběr místa a velikosti skalky</a></li>
                <li><a href="#kameny">Druhy kamenů a jejich uspořádání</a></li>
                <li><a href="#podloze-drenaz">Příprava podloží a drenáž</a></li>
                <li><a href="#substrat">Volba substrátu</a></li>
                <li><a href="#skalnicky">Výběr skalniček a výsadba</a></li>
                <li><a href="#udrzba">Údržba skalky přes sezónu</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="vyber-mista">
              <h2>1. Výběr místa a velikosti skalky</h2>
              <p>Skalka by měla působit jako přirozená součást terénu, ne jako násypka kamení uprostřed trávníku. Nejlépe se hodí mírně svažitý terén, okraj zahrady nebo přechod mezi terasou a trávníkem. Pokud máte rovinu, dá se svah snadno vytvořit navezením zeminy a kamenů – výškový rozdíl 30–60 cm už stačí na to, aby skalka vynikla.</p>
              <p>Naprostá většina skalniček miluje slunce – počítejte s minimálně 5–6 hodinami přímého světla denně. Stinné kouty zahrady jsou vhodné jen pro specifickou skupinu stínomilných skalniček (např. dryádky nebo netřesky odolnější druhy), proto si předem ujasněte, na jaké straně zahrady skalku budujete.</p>
              <p>Co se velikosti týče, menší skalka o rozloze 3–5 m² je pro začátek ideální – snadno se udržuje a dá se kdykoliv rozšířit. Důležité je také zvolit místo s dostatečným odstupem od stromů, jejichž kořeny by mohly konkurovat skalničkám o vodu a živiny.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Před stavbou si skalku vyznačte provázkem nebo hadicí přímo na pozemku a několik dní se na tvar dívejte z různých úhlů – ideálně i z okna domu, odkud na ni budete nejčastěji koukat.</div>
            </section>

            <section id="kameny">
              <h2>2. Druhy kamenů a jejich uspořádání</h2>
              <p>Klíčové pravidlo zní: <strong>jeden druh kamene, jedna barva</strong>. Kombinace pískovce, žuly a vápence na jednom místě působí neuspořádaně a uměle. Vyberte si jeden typ kamene, ideálně místní, který zapadne do okolní krajiny.</p>
              <ul>
                <li><strong>Pískovec</strong> – snadno se opracovává, má teplý odstín, ale na vlhku rychleji zarůstá mechem</li>
                <li><strong>Žula</strong> – velmi odolná, výrazná struktura, hodí se do moderních zahrad</li>
                <li><strong>Vápenec a travertin</strong> – světlé kameny, zvyšují pH půdy, vhodné pro vápnomilné skalničky</li>
                <li><strong>Břidlice</strong> – ploché desky vhodné pro vrstvené, „terasovité" skalky</li>
              </ul>
              <p>Při samotném ukládání kamenů platí, že velké, dominantní kameny (tzv. „matky") se umisťují jako první a tvoří kostru skalky – minimálně třetina kamene by měla být zapuštěná do země, aby vypadal jako přirozený výchoz, ne jako položený na povrchu. Kolem nich pak doplňujete menší kameny ve sklonu, který kopíruje vrstvení skutečné horniny – obvykle mírně sešikmené směrem dolů po svahu.</p>
              <p>Nepravidelné rozestupy mezi kameny vytvoří kapsy pro výsadbu. Vyhněte se symetrickému, „pravidelnému" rozmístění – v přírodě kameny nikdy neleží v řadě.</p>
            </section>

            <section id="podloze-drenaz">
              <h2>3. Příprava podloží a drenáž</h2>
              <p>Skalničky nesnášejí zamokřené kořeny, proto je drenáž tou nejdůležitější (a často podceňovanou) částí stavby. Postup je následující:</p>
              <ol>
                <li>Odstraňte vrstvu trávníku a ornice do hloubky 20–30 cm</li>
                <li>Na dno vysypte 15–20 cm vrstvu hrubého štěrku nebo kačírku (frakce 16–32 mm)</li>
                <li>Drenážní vrstvu zhutněte, aby se v budoucnu neproboural a nevytvořily se kaverny</li>
                <li>Pokud je podloží jílovité a voda na pozemku stagnuje, zvažte odvodňovací rýhu se spádem mimo skalku</li>
              </ol>
              <p>U menších skalek na propustném, písčitém podloží se dá drenážní vrstva omezit na 10 cm, u jílovitých půd naopak doporučujeme jít na horní hranici, případně drenáž doplnit perforovanou trubkou svedenou do nejnižšího místa zahrady.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud nevíte, kolik zeminy a štěrku na danou plochu potřebujete, použijte naši <Link href="/kalkulacky/kolik-hliny" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačku na výpočet objemu zeminy</Link> – zadáte rozměry a hloubku vrstvy a kalkulačka spočítá potřebné množství v m³ i v tunách.</div>
            </section>

            <section id="substrat">
              <h2>4. Volba substrátu</h2>
              <p>Na drenážní vrstvu přijde substrát, ve kterém budou skalničky růst. Klasická zahradní zemina je pro skalničky příliš bohatá a zadržuje vodu – výsledkem bývají přerostlé, „rozteklé" rostliny náchylné ke hnilobě. Osvědčená směs je:</p>
              <ul>
                <li>1 díl zahradní zeminy nebo kompostu (chudšího, ne přehnojeného)</li>
                <li>1 díl hrubého písku nebo drobného štěrku (frakce 2–8 mm)</li>
                <li>1 díl drobnějšího kačírku nebo perlitu pro provzdušnění</li>
              </ul>
              <p>Pokud máte na zahradě těžkou jílovitou hlínu, je potřeba ji výrazně odlehčit – buď ji zcela vyměňte za výše uvedenou směs, nebo do ní vmíchejte minimálně stejné množství písku a štěrku. Při odhadu, kolik materiálu objednat, opět pomůže <Link href="/kalkulacky/kolik-hliny" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačka objemu zeminy a substrátu</Link>, která zohlední plochu i tloušťku vrstvy.</p>
              <p>Na samém povrchu kolem rostlin je dobré rozprostřít 3–5 cm vrstvu drobného kačírku nebo drti – funguje jako mulč, který odráží vlhkost od krčků rostlin, zabraňuje růstu plevele a zároveň skalku vizuálně „dotáhne".</p>
            </section>

            <section id="skalnicky">
              <h2>5. Výběr skalniček a výsadba</h2>
              <h3>Osvědčené odolné druhy</h3>
              <p>Pro suchá a slunná stanoviště jsou ideální tyto rostliny, které zvládnou i extrémní letní vlny veder bez zalévání:</p>
              <ul>
                <li><strong>Netřesk (Sempervivum)</strong> – sukulent s desítkami odrůd, prakticky nezničitelný</li>
                <li><strong>Rozchodník (Sedum)</strong> – nízký poléhavý porost, kvete v létě</li>
                <li><strong>Tařice (Aurinia saxatilis)</strong> – jarní žluté koberce</li>
                <li><strong>Levandule a routa</strong> – pro větší skalky, voňavé a odolné dřevinky</li>
                <li><strong>Plamenka šidní (Phlox subulata)</strong> – hustý kvetoucí koberec brzy na jaře</li>
                <li><strong>Devaterník (Helianthemum)</strong> – dlouhé kvetení, snáší i chudou půdu</li>
              </ul>
              <h3>Postup výsadby</h3>
              <p>Sázejte od největších kamenů směrem ke kapsám mezi nimi a dodržujte zásadu „od velkého k malému" – stejně jako u kamenů. Kořenový bal namočte před výsadbou do vody, vysaďte do jamky o velikosti kořenového balu a substrát kolem rostliny dobře zhutněte, aby nezůstaly vzduchové kapsy.</p>
              <p>Po výsadbě rostliny zalijte, ale dál už je nezahrnujte do běžné zálivkové rutiny – právě nedostatek vody a propustný substrát jsou tím, co skalničkám vyhovuje. Přemokření je pro ně mnohem nebezpečnější než sucho.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Vysazujte v menších skupinkách po 3–5 kusech jednoho druhu, ne jednotlivě – skalka pak působí přirozeněji a rostliny se rychleji rozrostou do souvislého porostu.</div>
            </section>

            <section id="udrzba">
              <h2>6. Údržba skalky přes sezónu</h2>
              <p>Velkou výhodou skalky je minimální údržba ve srovnání s běžným záhonem nebo trávníkem. I tak je dobré dodržovat několik pravidel podle ročního období:</p>
              <ul>
                <li><strong>Jaro</strong> – odstraňte spadané listí a zbytky organického materiálu, který by mohl rostliny zadusit nebo podpořit hnilobu, doplňte případně mulč z kačírku</li>
                <li><strong>Léto</strong> – zalévejte jen v extrémním suchu a pouze nově vysazené rostliny, zavadlé nebo přerostlé části odstraňte</li>
                <li><strong>Podzim</strong> – ideální čas na dosazování a dělení trsů, odstraňte odkvetlé části</li>
                <li><strong>Zima</strong> – většina skalniček mráz snáší dobře, problémem bývá spíše vlhko, proto je propustný substrát a drenáž klíčová i v zimě</li>
              </ul>
              <p>Plevel na skalce se nejlépe odstraňuje ručně, dokud je malý – mulčová vrstva kačírku jeho růst výrazně omezí. Jednou za pár let je vhodné substrát v kapsách mezi kameny obnovit, protože se postupně zhutňuje a ztrácí propustnost.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jaké místo je pro skalku nejvhodnější?", a: "Ideální je slunné až polostinné místo s mírným svahem, kde se nehromadí voda. Většina skalniček potřebuje minimálně 5–6 hodin slunce denně a propustnou půdu." },
                  { q: "Jaké kameny jsou pro skalku nejlepší?", a: "Nejlépe vypadají kameny stejného druhu a podobné barvy, ideálně místní – pískovec, břidlice nebo žula. Kombinace více typů kamenů působí nepřirozeně a chaoticky." },
                  { q: "Je nutná drenáž pod skalkou?", a: "Ano, drenážní vrstva ze štěrku nebo kačírku o tloušťce 15–20 cm je klíčová. Zabraňuje hromadění vody u kořenů, kterou skalničky špatně snášejí a hnijí." },
                  { q: "Jaký substrát se hodí pro skalničky?", a: "Skalničky vyžadují propustný, chudší substrát – směs zahradní zeminy, štěrku a písku v poměru přibližně 1:1:1. Těžká jílovitá hlína se musí vždy odlehčit." },
                  { q: "Kdy je nejlepší doba na výsadbu skalniček?", a: "Nejvhodnější je jaro (duben–květen) nebo začátek podzimu (září), kdy rostliny mají čas zakořenit před extrémními teplotami léta nebo mrazy zimy." },
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
                <li><a href="#vyber-mista">Výběr místa a velikosti</a></li>
                <li><a href="#kameny">Druhy kamenů</a></li>
                <li><a href="#podloze-drenaz">Podloží a drenáž</a></li>
                <li><a href="#substrat">Volba substrátu</a></li>
                <li><a href="#skalnicky">Skalničky a výsadba</a></li>
                <li><a href="#udrzba">Údržba přes sezónu</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/zahrada" className="sidebar-cat-link">🌿 Zahrada & terasa<span>20 článků →</span></Link>
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
