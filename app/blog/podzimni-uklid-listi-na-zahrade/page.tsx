import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Podzimní úklid listí na zahradě – kdy hrabat a co s listím dál",
  description: "Kdy listí hrabat a kdy ho naopak nechat na záhonech, jaké nástroje použít a co s velkým množstvím listí – kompostování, mulčování i likvidace.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/podzimni-uklid-listi-na-zahrade" },
  openGraph: { title: "Podzimní úklid listí na zahradě – kdy hrabat a co s listím dál", description: "Kdy listí hrabat a kdy ho naopak nechat na záhonech, jaké nástroje použít a co s velkým množstvím listí – kompostování, mulčování i likvidace.", url: "https://www.domovniguru.cz/blog/podzimni-uklid-listi-na-zahrade", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-25T08:00:00Z", modifiedTime: "2026-06-25T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Podzimn%C3%AD%20%C3%BAklid%20list%C3%AD%20na%20zahrad%C4%9B%20%E2%80%93%20kdy%20hrabat%20a%20co%20s%20list%C3%ADm%20d%C3%A1l&cat=blog", width: 1200, height: 630, alt: "Podzimní úklid listí na zahradě – kdy hrabat a co s listím dál" }] },
  twitter: { card: "summary_large_image", title: "Podzimní úklid listí na zahradě – kdy hrabat a co s listím dál", description: "Kdy listí hrabat a kdy ho naopak nechat na záhonech, jaké nástroje použít a co s velkým množstvím listí – kompostování, mulčování i likvidace." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/podzimni-uklid-listi-na-zahrade#article", "headline": "Podzimní úklid listí na zahradě – kdy hrabat a co s listím dál", "datePublished": "2026-06-25T08:00:00Z", "dateModified": "2026-06-25T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["podzimní úklid listí", "hrabání listí", "kompostování listí", "listový kompost", "listí na trávníku", "mulčování listím"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Sezónní údržba", "item": "https://www.domovniguru.cz/blog/kategorie/sezonni-udrzba" }, { "@type": "ListItem", "position": 4, "name": "Podzimní úklid listí na zahradě", "item": "https://www.domovniguru.cz/blog/podzimni-uklid-listi-na-zahrade" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Musím hrabat veškeré listí na zahradě?", "acceptedAnswer": { "@type": "Answer", "text": "Ne, listí na záhonech a kolem keřů můžeš často nechat ležet jako přirozenou ochranu před mrazem a úkryt pro užitečný hmyz. Hrabat je potřeba hlavně listí na trávníku a chodnících, kde by jinak způsobilo zadušení trávy nebo bylo nebezpečné kvůli klouzavosti." } }, { "@type": "Question", "name": "Proč nesmí listí dlouho ležet na trávníku?", "acceptedAnswer": { "@type": "Answer", "text": "Vrstva listí omezuje přístup světla a vzduchu k trávě, pod ní se hromadí vlhkost a tráva začíná žloutnout, hnít a je náchylnější k plísňovým chorobám jako sněžná plíseň. I tenká souvislá vrstva by měla být odstraněna nebo rozdrcena mulčováním." } }, { "@type": "Question", "name": "Jaký je rozdíl mezi kompostováním listí a listovým kompostem (lisovanou hlínou)?", "acceptedAnswer": { "@type": "Answer", "text": "Běžný kompost kombinuje listí s dalším organickým odpadem a rozkládá se rychleji díky vyšší teplotě a mikrobiální aktivitě. Listový kompost (leaf mould) vzniká pomalým rozkladem čistě listí samostatně, trvá 1–2 roky, ale výsledkem je velmi kvalitní, jemná zlepšující půdní složka." } }, { "@type": "Question", "name": "Jak se zbavit velkého množství listí, když nemám kompost?", "acceptedAnswer": { "@type": "Answer", "text": "Většina obcí má sběrné dvory nebo BIO kontejnery na biologický odpad, kam lze listí odvézt nebo odložit zdarma či za symbolický poplatek. Alternativou je nabídnout listí sousedům se zahradou nebo komunitnímu kompostu, případně ho rozdrtit sekačkou a použít jako mulč přímo na zahradě." } }, { "@type": "Question", "name": "Jaké nástroje jsou nejlepší na úklid listí?", "acceptedAnswer": { "@type": "Answer", "text": "Pro menší zahrady stačí kvalitní hrábě s pružnými zuby, pro velké plochy se vyplatí foukač nebo vysavač listí, který práci výrazně zrychlí. Sekačka s funkcí mulčování umí listí rovnou rozdrtit na trávníku a vrátit ho jako živinu zpět do půdy." } }] }] };

const RELATED = [
  { title: "Jak vyčistit okapy na podzim", href: "/blog/jak-vycistit-okapy", read: "4 min" },
  { title: "Jak připravit dům na zimu", href: "/blog/priprava-domu-na-zimu", read: "5 min" },
  { title: "Jak se zbavit hmyzu bez chemie", href: "/blog/zbavit-se-hmyzu-bez-chemie", read: "4 min" },
  { title: "Jak připravit zahradu chaty na zimu", href: "/blog/priprava-chaty-na-zimu", read: "5 min" },
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
              <span>Podzimní úklid listí na zahradě</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">❄️ Sezónní údržba</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Podzimní úklid listí na zahradě</h1>
              <p className="article-lead">Spadané listí není jen estetická otázka – na trávníku dusí trávu a živí plísně, na chodníku klouže a v okapech ucpává odtok vody. Na záhonech a pod keři ale stejné listí naopak chrání půdu před mrazem a slouží jako úkryt pro užitečný hmyz. Klíčem je vědět, kde listí nechat a kde a jak ho efektivně odstranit.</p>
              <div className="article-meta-row"><span>Aktualizováno: 25. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#kdy-hrabat">Kdy hrabat a kdy listí nechat ležet</a></li>
                <li><a href="#nastroje">Nástroje na úklid listí</a></li>
                <li><a href="#co-s-listim">Co s nahrabaným listím</a></li>
                <li><a href="#travnik">Listí na trávníku – riziko zadušení a plísní</a></li>
                <li><a href="#okapy">Listí ve žlabech a okapech</a></li>
                <li><a href="#likvidace">Likvidace velkého množství listí</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="kdy-hrabat">
              <h2>Kdy hrabat a kdy listí nechat ležet</h2>
              <p>Ne každé listí na zahradě je problém, který je třeba okamžitě odstranit. Rozhodující je, kde listí leží a jak silná je vrstva.</p>
              <ul>
                <li><strong>Listí na trávníku</strong> – hrabat pravidelně, ideálně každých 5–7 dní během hlavního podzimního opadu, aby se nevytvořila souvislá dusivá vrstva</li>
                <li><strong>Listí na chodnících a schodech</strong> – odstraňovat ihned, mokré listí je extrémně klouzavé a představuje riziko úrazu</li>
                <li><strong>Listí na záhonech a kolem keřů</strong> – lze nechat ležet, funguje jako přirozená mulčová vrstva, chrání kořeny před mrazem a postupně se rozkládá a vyživuje půdu</li>
                <li><strong>Listí v koutech zahrady a pod živými ploty</strong> – ponechané listí je cenným úkrytem pro ježky, žížaly a užitečný hmyz přes zimu</li>
              </ul>
              <p>Obecně platí, že čím „uklizenější" je zahrada na podzim, tím méně přirozeného útočiště zůstává pro užitečné organismy, které jarní zahradě pak chybí. Rozumný kompromis je odklízet listí jen tam, kde skutečně škodí.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Tenkou vrstvu listí na záhonu (do 5–10 cm) můžeš nechat bez úprav, silnější vrstvu je lepší nahrubo rozhrabat nebo nasekat sekačkou, aby se snadněji a rychleji rozložila.</div>
            </section>

            <section id="nastroje">
              <h2>Nástroje na úklid listí</h2>
              <p>Výběr nástroje záleží především na velikosti zahrady a množství listí, se kterým je potřeba pracovat.</p>
              <ul>
                <li><strong>Hrábě s pružnými zuby</strong> – klasika pro menší a střední zahrady, vějířové hrábě s plastovými nebo kovovými pružnými zuby jsou šetrnější k trávníku než tuhé kovové</li>
                <li><strong>Foukač listí</strong> – elektrický nebo benzínový foukač rychle posbírá listí z velkých ploch nebo z míst, kam se hráběmi špatně dostaneš (rohy, mezi keři)</li>
                <li><strong>Vysavač listí</strong> – řada foukačů má i sací a drticí funkci, listí rovnou rozseká na menší kusy, které zaberou méně místa v pytlích nebo na kompostu</li>
                <li><strong>Sekačka s funkcí mulčování</strong> – přejetí trávníku se zapnutým mulčovacím nožem listí rozdrtí na drobné kousky, které propadnou mezi stébla trávy a poslouží jako přirozené hnojivo</li>
                <li><strong>Plachta na shrnování</strong> – velká textilní nebo plastová plachta usnadní přenos většího množství listí na jedno místo nebo přímo do kontejneru</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pracuj na listí, dokud je suché – mokré listí je výrazně těžší, hůř se hrabe i foukačem a více ulpívá na nástrojích i botách.</div>
            </section>

            <section id="co-s-listim">
              <h2>Co s nahrabaným listím</h2>
              <h3>Kompostování</h3>
              <p>Listí je vynikající surovina do běžného kompostu, kde se kombinuje s dalším organickým odpadem (zbytky zeleniny, posečená trávní hmota, větvičky). Listí dodává uhlík (hnědou složku), kterou je dobré kombinovat s dusíkatou zelenou složkou pro rychlejší a vyváženější rozklad. Velké kusy listí je vhodné nejprve nasekat nebo rozdrtit sekačkou, urychlí to rozklad.</p>
              <h3>Listový kompost (lisovaná hlína)</h3>
              <p>Pokud máš listí v opravdu velkém množství, vyplatí se založit samostatnou listovou hromadu nebo pytel s několika otvory pro vzduch. Listí samotné se rozkládá pomaleji než smíšený kompost, typicky 1–2 roky, ale výsledná hmota (leaf mould) je velmi kvalitní, jemný a strukturní zlepšovač půdy, skvělý pro záhony a truhlíky.</p>
              <h3>Mulčování záhonů</h3>
              <p>Nahrabané listí lze přímo rozprostřít jako mulč na záhony se zeleninou, růžemi nebo trvalkami. Vrstva 5–10 cm chrání kořeny před mrazovými výkyvy, omezuje růst plevele na jaře a postupně se zapracovává do půdy. Vyhni se listí napadenému plísní nebo houbovými chorobami (např. od jabloní s prašovkou) – takové listí patří do běžného odpadu nebo spalování, ne na záhon.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Listí dubu a ořechu se rozkládá pomaleji a je kyselejší než listí javoru nebo lísky – pro listový kompost je to výhoda (déle vydrží jako mulč), pro běžný kompost je lepší ho s ostatním listím promíchat v menším poměru.</div>
            </section>

            <section id="travnik">
              <h2>Listí na trávníku – riziko zadušení a plísní</h2>
              <p>Souvislá vrstva listí na trávníku funguje jako neprodyšný kryt – brání přístupu světla, omezuje výměnu vzduchu a pod listím se hromadí vlhkost. Tráva, která je takto „zadušená" déle než pár týdnů, začíná žloutnout, ztrácí na hustotě a je náchylnější k plísňovým chorobám, typicky ke sněžné plísni, která se projeví na jaře po odtátí snehu jako kruhové skvrny odumřelé trávy.</p>
              <ul>
                <li><strong>Pravidelnost je klíčová</strong> – raději hrabej častěji menší množství než jednou za měsíc velkou vrstvu</li>
                <li><strong>Poslední seč před zimou</strong> – kombinuj s posledním sečením trávníku na konci podzimu, tráva by neměla jít do zimy příliš vysoká ani příliš nízká</li>
                <li><strong>Mulčování přímo na trávníku</strong> – pokud je vrstva listí tenká (do pár centimetrů), lze ji jedním přejetím mulčovací sekačky rozdrtit a ponechat na místě jako živinu, aniž by to trávník zadusilo</li>
              </ul>
              <div className="article-tip"><strong>⚠️ Pozor:</strong> Vlhké listí na trávníku je i bezpečnostním rizikem – na svahu nebo u schodů snadno uklouzneš. Tyto plochy odlistuj jako první.</div>
            </section>

            <section id="okapy">
              <h2>Listí ve žlabech a okapech</h2>
              <p>Listí, které spadne na střechu nebo je do okapů zaneseno větrem, se v žlabech hromadí a postupně ucpává odtokový systém. Voda pak přetéká přes okraj žlabu, stéká po fasádě a může zatékat do základů nebo způsobit poškození podbití střechy. V mrazu navíc ucpaný okap snadno vytvoří ledové rampouchy, které mohou poškodit okap i ohrozit chodce pod ním.</p>
              <ul>
                <li><strong>Kontrola po hlavním opadu listí</strong> – typicky říjen až listopad, podle druhů stromů v okolí domu</li>
                <li><strong>Ochranné mřížky do okapů</strong> – síťky nebo perforované kryty zabraňují velké části listí v zachycení v žlabu</li>
                <li><strong>Vyčištění a propláchnutí</strong> – kompletní postup najdeš v článku, jak <Link href="/blog/jak-vycistit-okapy" style={{ color: "#2a6496", textDecoration: "underline" }}>vyčistit okapy na podzim</Link></li>
              </ul>
            </section>

            <section id="likvidace">
              <h2>Likvidace velkého množství listí</h2>
              <p>Pokud zahrada produkuje víc listí, než dokážeš zužitkovat na kompost nebo jako mulč, nabízí se několik dalších možností likvidace.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Možnost</th><th>Kdy se hodí</th><th>Poznámka</th></tr></thead>
                  <tbody>
                    <tr><td>BIO kontejner (hnědá nádoba)</td><td>Pravidelný menší objem v domácnosti</td><td>Dostupný ve většině obcí, svoz dle harmonogramu</td></tr>
                    <tr><td>Sběrný dvůr</td><td>Jednorázově větší množství</td><td>Často zdarma nebo za symbolický poplatek pro občany obce</td></tr>
                    <tr><td>Komunitní nebo sousedský kompost</td><td>Chybí vlastní kompost nebo místo</td><td>Dobrá sousedská výpomoc, ověř pravidla dané komunity</td></tr>
                    <tr><td>Mulčování přímo na zahradě</td><td>Rozumné množství, vlastní záhony a trávník</td><td>Nejlevnější a nejekologičtější varianta, žádný odvoz</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Pálení listí na zahradě je v řadě obcí omezeno nebo zcela zakázáno místní vyhláškou, navíc vlhké listí spíš čadí a obtěžuje okolí kouřem, než aby hořelo – touto cestou se obecně nevyplatí jít.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud listí sbíráš do papírových nebo kompostovatelných pytlů, můžeš je v mnoha obcích nechat přímo u silnice pro mimořádný podzimní svoz – informuj se na webu své obce o termínech.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Musím hrabat veškeré listí na zahradě?", a: "Ne, listí na záhonech a kolem keřů můžeš často nechat ležet jako přirozenou ochranu před mrazem a úkryt pro užitečný hmyz. Hrabat je potřeba hlavně listí na trávníku a chodnících, kde by jinak způsobilo zadušení trávy nebo bylo nebezpečné kvůli klouzavosti." },
                  { q: "Proč nesmí listí dlouho ležet na trávníku?", a: "Vrstva listí omezuje přístup světla a vzduchu k trávě, pod ní se hromadí vlhkost a tráva začíná žloutnout, hnít a je náchylnější k plísňovým chorobám jako sněžná plíseň. I tenká souvislá vrstva by měla být odstraněna nebo rozdrcena mulčováním." },
                  { q: "Jaký je rozdíl mezi kompostováním listí a listovým kompostem (lisovanou hlínou)?", a: "Běžný kompost kombinuje listí s dalším organickým odpadem a rozkládá se rychleji díky vyšší teplotě a mikrobiální aktivitě. Listový kompost (leaf mould) vzniká pomalým rozkladem čistě listí samostatně, trvá 1–2 roky, ale výsledkem je velmi kvalitní, jemná zlepšující půdní složka." },
                  { q: "Jak se zbavit velkého množství listí, když nemám kompost?", a: "Většina obcí má sběrné dvory nebo BIO kontejnery na biologický odpad, kam lze listí odvézt nebo odložit zdarma či za symbolický poplatek. Alternativou je nabídnout listí sousedům se zahradou nebo komunitnímu kompostu, případně ho rozdrtit sekačkou a použít jako mulč přímo na zahradě." },
                  { q: "Jaké nástroje jsou nejlepší na úklid listí?", a: "Pro menší zahrady stačí kvalitní hrábě s pružnými zuby, pro velké plochy se vyplatí foukač nebo vysavač listí, který práci výrazně zrychlí. Sekačka s funkcí mulčování umí listí rovnou rozdrtit na trávníku a vrátit ho jako živinu zpět do půdy." },
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
                <li><a href="#kdy-hrabat">Kdy hrabat a kdy ne</a></li>
                <li><a href="#nastroje">Nástroje na úklid listí</a></li>
                <li><a href="#co-s-listim">Co s nahrabaným listím</a></li>
                <li><a href="#travnik">Listí na trávníku</a></li>
                <li><a href="#okapy">Listí ve žlabech a okapech</a></li>
                <li><a href="#likvidace">Likvidace velkého množství</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/sezonni-udrzba" className="sidebar-cat-link">❄️ Sezónní údržba<span>28 článků →</span></Link>
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
