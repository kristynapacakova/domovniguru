import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak vybrat štětce a válečky pro různé typy nátěrů",
  description: "Přehled štětců, válečků a jejich použití podle typu barvy a povrchu – jak vybrat správné nářadí a jak o něj pečovat.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/vyber-stetcu-a-valecku" },
  openGraph: { title: "Jak vybrat štětce a válečky pro různé typy nátěrů", description: "Přehled štětců, válečků a jejich použití podle typu barvy a povrchu – jak vybrat správné nářadí a jak o něj pečovat.", url: "https://www.domovniguru.cz/blog/vyber-stetcu-a-valecku", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-12T08:00:00Z", modifiedTime: "2026-06-12T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20vybrat%20%C5%A1t%C4%9Btce%20a%20v%C3%A1le%C4%8Dky%20pro%20r%C5%AFzn%C3%A9%20typy%20n%C3%A1t%C4%9Br%C5%AF&cat=blog", width: 1200, height: 630, alt: "Jak vybrat štětce a válečky pro různé typy nátěrů" }] },
  twitter: { card: "summary_large_image", title: "Jak vybrat štětce a válečky pro různé typy nátěrů", description: "Přehled štětců, válečků a jejich použití podle typu barvy a povrchu – jak vybrat správné nářadí a jak o něj pečovat." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/vyber-stetcu-a-valecku#article", "headline": "Jak vybrat štětce a válečky pro různé typy nátěrů", "datePublished": "2026-06-12T08:00:00Z", "dateModified": "2026-06-12T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["štětce", "válečky", "malování", "nátěry", "malířské nářadí"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Malování & barvy", "item": "https://www.domovniguru.cz/blog/kategorie/malovani" }, { "@type": "ListItem", "position": 4, "name": "Jak vybrat štětce a válečky", "item": "https://www.domovniguru.cz/blog/vyber-stetcu-a-valecku" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jaký štětec na rohy a hrany?", "acceptedAnswer": { "@type": "Answer", "text": "Na rohy, hrany a kouty se nejlépe hodí úhlový (zkosený) štětec o šířce 30–50 mm. Díky šikmému tvaru přesně vykryje rohy mezi stěnou a stropem nebo kolem oken a dveří." } }, { "@type": "Question", "name": "Jaký váleček použít na hladkou zeď?", "acceptedAnswer": { "@type": "Answer", "text": "Na hladké stěny natřené latexovou nebo akrylovou barvou je nejvhodnější váleček z mikrovlákna s krátkým vlasem (8–10 mm), který zanechá hladký, jemně strukturovaný povrch bez výrazných stop." } }, { "@type": "Question", "name": "Kdy použít pěnový váleček?", "acceptedAnswer": { "@type": "Answer", "text": "Pěnový váleček je vhodný pro nanášení laků, email barev a olejových nátěrů na dveře, zárubně nebo nábytek, protože nezanechává vlasové stopy a vytváří hladký, lesklý povrch." } }, { "@type": "Question", "name": "Jak velký váleček na malování stropu?", "acceptedAnswer": { "@type": "Answer", "text": "Na strop se hodí váleček o šířce 25 cm s delším vlasem (12–18 mm), který pojme více barvy a zvládne i mírně hrubší strukturu, takže malování zabere méně času a méně přejezdů." } }, { "@type": "Question", "name": "Jak správně vyčistit štětce a válečky po malování?", "acceptedAnswer": { "@type": "Answer", "text": "Štětce a válečky s vodou ředitelnými barvami stačí důkladně propláchnout pod tekoucí vodou, dokud nepřestane vytékat barva, poté je vytvarovat a usušit naležato. U olejových barev je nutné použít ředidlo nebo technický benzín před omytím vodou a mýdlem." } }] }] };

const RELATED = [
  { title: "Jak vybrat barvu na zeď", href: "/blog/jak-vybrat-barvu-na-zed", read: "5 min" },
  { title: "Jak malovat zeď – krok za krokem", href: "/blog/jak-malovat-zed", read: "6 min" },
  { title: "Malování jen štětcem – kdy se to vyplatí", href: "/blog/malovat-jen-stetcem", read: "4 min" },
  { title: "Jak malovat strop bez šmouh", href: "/blog/jak-malovat-strop", read: "5 min" },
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
              <Link href="/blog/kategorie/malovani">Malování & barvy</Link><span className="breadcrumb-sep">/</span>
              <span>Jak vybrat štětce a válečky pro různé typy nátěrů</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování & barvy</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak vybrat štětce a válečky pro různé typy nátěrů</h1>
              <p className="article-lead">Správné nářadí rozhoduje o tom, jak rychle malování zvládneš a jak bude výsledek vypadat. Špatný štětec nebo váleček dokáže zkazit i kvalitní barvu – zanechá šmouhy, chlupy nebo nerovnoměrný nátěr. Ukážeme ti, jak vybrat štětce a válečky podle typu barvy, povrchu i velikosti plochy.</p>
              <div className="article-meta-row"><span>Aktualizováno: 12. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#proc-zalezi">Proč záleží na výběru nářadí</a></li>
                <li><a href="#typy-stetcu">Typy štětců</a></li>
                <li><a href="#typy-valecku">Typy válečků</a></li>
                <li><a href="#velikosti">Velikosti a kdy které použít</a></li>
                <li><a href="#pece">Péče a čištění nářadí</a></li>
                <li><a href="#chyby">Časté chyby</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="proc-zalezi">
              <h2>Proč záleží na výběru nářadí</h2>
              <p>Štětec nebo váleček je první věc, která přijde do styku s barvou a se stěnou – a právě on rozhoduje o tom, jak bude výsledný povrch vypadat. Levné nářadí často ztrácí chlupy nebo vlákna přímo do nátěru, nerovnoměrně nanáší barvu a vyžaduje víc vrstev, než je nutné.</p>
              <p>Než se pustíš do práce, vyplatí se promyslet i to, kolik barvy budeš potřebovat – pomůže ti k tomu <Link href="/kalkulacky/kolik-barvy" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačka spotřeby barvy</Link>, která spočítá množství podle plochy a počtu vrstev.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Kvalitní nářadí se vyplatí i finančně – dobrý štětec nebo váleček vydrží desítky maleb, pokud o něj správně pečuješ.</div>
            </section>

            <section id="typy-stetcu">
              <h2>Typy štětců</h2>
              <p>Štětce se liší tvarem, šířkou i materiálem vlasu a každý typ má své ideální využití.</p>
              <h3>Ploché štětce</h3>
              <p>Univerzální štětce s rovným zakončením, vhodné pro nátěry větších rovných ploch, dřeva, dveří nebo nábytku. Výborně se hodí i na nanášení podkladových nátěrů a lazur.</p>
              <h3>Kulaté štětce</h3>
              <p>Mají kulatý průřez a špičaté nebo zaoblené zakončení. Používají se hlavně na detailní práce, malování ozdobných prvků, mříží nebo tvarovaných lišt, kde je potřeba nářadí dobře ovladatelné.</p>
              <h3>Radiátorové štětce</h3>
              <p>Mají dlouhou ohebnou rukojeť a zakončení mírně zalomené, díky čemuž se dostanou za radiátory, do úzkých mezer mezi skříněmi nebo pod kuchyňskou linku – tedy na místa, kam se běžný štětec nevejde.</p>
              <h3>Úhlové (zkosené) štětce</h3>
              <p>Vlas je seříznutý do úhlu, což umožňuje precizní vedení podél hran. Jsou nepostradatelné při malování rohů, kde se stěna setkává se stropem, kolem oken, dveří a u podlahových lišt.</p>
            </section>

            <section id="typy-valecku">
              <h2>Typy válečků podle barvy a povrchu</h2>
              <p>Váleček je hlavní nástroj pro nátěry velkých ploch jako stěny a stropy. Klíčové je vybrat správný typ potahu podle barvy, kterou používáš, a podle struktury povrchu.</p>
              <h3>Pěnové válečky</h3>
              <p>Hladký pěnový povrch je ideální pro syntetické barvy, laky a email nátěry na dveřích, zárubních nebo nábytku. Nezanechává vlasové stopy a vytváří rovnoměrný, hladký film barvy. Pro velké stěny se ale příliš nehodí, protože pojme málo barvy.</p>
              <h3>Vlasové válečky</h3>
              <p>Klasické válečky z přírodního nebo syntetického vlasu jsou univerzální volbou pro disperzní a latexové barvy na stěny. Delší vlas (15–18 mm) je vhodný na hrubší omítky, kratší vlas (8–12 mm) na hladší povrchy.</p>
              <h3>Mikrovlákno</h3>
              <p>Válečky z mikrovlákna kombinují vysokou savost s jemným povrchem – nanášejí barvu rovnoměrně, neodkapávají a zanechávají minimum stop. Jsou skvělou volbou pro kvalitní akrylové a latexové barvy na hladké i mírně strukturované stěny, a obecně patří k nejlepším volbám pro běžné malování interiéru. Více o postupu najdeš v návodu <Link href="/blog/jak-malovat-zed" style={{ color: "#2a6496", textDecoration: "underline" }}>jak malovat zeď krok za krokem</Link>.</p>
            </section>

            <section id="velikosti">
              <h2>Velikosti a kdy které použít</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Nářadí</th><th>Velikost / šířka</th><th>Vhodné použití</th></tr></thead>
                  <tbody>
                    <tr><td>Štětec plochý</td><td>25–75 mm</td><td>Dveře, okna, nábytek, podklady</td></tr>
                    <tr><td>Štětec úhlový</td><td>30–50 mm</td><td>Rohy, hrany, kouty u stropu</td></tr>
                    <tr><td>Štětec radiátorový</td><td>30–50 mm, dlouhá rukojeť</td><td>Za radiátory, úzké mezery</td></tr>
                    <tr><td>Váleček na stěny</td><td>18–25 cm, vlas 8–18 mm</td><td>Velké plochy stěn a stropů</td></tr>
                    <tr><td>Mini váleček</td><td>10–15 cm</td><td>Menší plochy, výklenky, niky</td></tr>
                    <tr><td>Pěnový váleček</td><td>10–20 cm</td><td>Dveře, laky, email nátěry</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Pro velké plochy obytných pokojů se vyplatí váleček o šířce 25 cm s delším vlasem – pojme více barvy a zvládne i nerovnosti omítky bez nutnosti přejíždět stejné místo vícekrát. Naopak pro detailní práce u rohů a lišt vždy sáhni po menším úhlovém štětci, který umožní přesné vedení.</p>
            </section>

            <section id="pece">
              <h2>Péče a čištění nářadí</h2>
              <p>Životnost štětců a válečků závisí hlavně na tom, jak se o ně staráš po malování. Zanedbaná péče znamená ztuhlou barvu, ztracený tvar a chlupy padající do dalšího nátěru.</p>
              <h3>Vodou ředitelné barvy</h3>
              <p>Štětce i válečky propláchni co nejdříve po skončení práce pod tekoucí teplou vodou, dokud voda nezačne odtékat čirá. U štětců promni vlas mezi prsty, u válečků potah jemně vymačkej. Po umytí vytvaruj vlas štětce a ulož naležato nebo zavěšený, aby se nedeformoval.</p>
              <h3>Olejové a syntetické barvy</h3>
              <p>Před omytím vodou je nutné nářadí vymáchat v ředidle nebo technickém benzínu, dokud nepřestane uvolňovat barvu. Až poté je možné domyt vodou a saponátem. Použité ředidlo nelikviduj do odpadu, ale odevzdej na sběrném místě nebezpečného odpadu.</p>
              <h3>Krátkodobé přerušení práce</h3>
              <p>Pokud malování přerušíš jen na pár hodin, štětec ani váleček nemusíš mýt – zabal je do potravinářské fólie nebo igelitového sáčku a vlož do mrazáku či chladné místnosti. Barva nezaschne a nářadí je hned znovu použitelné.</p>
            </section>

            <section id="chyby">
              <h2>Časté chyby při výběru a používání</h2>
              <ul>
                <li><strong>Použití jednoho štětce na všechno</strong> – levný univerzální štětec na rohy i velké plochy vede k nerovnoměrnému nátěru a ztrátě chlupů.</li>
                <li><strong>Příliš krátký vlas na hrubou omítku</strong> – váleček s krátkým vlasem nedokáže pokrýt nerovnosti a zanechává nenatřená místa.</li>
                <li><strong>Nenamočení nového válečku před prvním použitím</strong> – suchý potah z válečku uvolňuje vlákna a nerovnoměrně přijímá barvu.</li>
                <li><strong>Přetížení válečku barvou</strong> – přebytek barvy odkapává a vytváří nepravidelné nánosy a stékance.</li>
                <li><strong>Nedostatečné čištění mezi barvami</strong> – zbytky staré barvy se mísí s novou a mění odstín i kvalitu nátěru.</li>
                <li><strong>Ukládání mokrého nářadí v uzavřené krabici</strong> – vede k plísni a nepříjemnému zápachu, který se přenese do dalšího nátěru.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Vždy si připrav alespoň dvě sady nářadí – jednu na podkladové vrstvy a hrubší práce, druhou na finální vrstvu, kde záleží na hladkém výsledku.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jaký štětec na rohy a hrany?", a: "Na rohy, hrany a kouty se nejlépe hodí úhlový (zkosený) štětec o šířce 30–50 mm. Díky šikmému tvaru přesně vykryje rohy mezi stěnou a stropem nebo kolem oken a dveří." },
                  { q: "Jaký váleček použít na hladkou zeď?", a: "Na hladké stěny natřené latexovou nebo akrylovou barvou je nejvhodnější váleček z mikrovlákna s krátkým vlasem (8–10 mm), který zanechá hladký, jemně strukturovaný povrch bez výrazných stop." },
                  { q: "Kdy použít pěnový váleček?", a: "Pěnový váleček je vhodný pro nanášení laků, email barev a olejových nátěrů na dveře, zárubně nebo nábytek, protože nezanechává vlasové stopy a vytváří hladký, lesklý povrch." },
                  { q: "Jak velký váleček na malování stropu?", a: "Na strop se hodí váleček o šířce 25 cm s delším vlasem (12–18 mm), který pojme více barvy a zvládne i mírně hrubší strukturu, takže malování zabere méně času a méně přejezdů." },
                  { q: "Jak správně vyčistit štětce a válečky po malování?", a: "Štětce a válečky s vodou ředitelnými barvami stačí důkladně propláchnout pod tekoucí vodou, dokud nepřestane vytékat barva, poté je vytvarovat a usušit naležato. U olejových barev je nutné použít ředidlo nebo technický benzín před omytím vodou a mýdlem." },
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
                    <div className="card-eyebrow-row"><span>Malování & barvy</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#proc-zalezi">Proč záleží na výběru nářadí</a></li>
                <li><a href="#typy-stetcu">Typy štětců</a></li>
                <li><a href="#typy-valecku">Typy válečků</a></li>
                <li><a href="#velikosti">Velikosti a kdy které použít</a></li>
                <li><a href="#pece">Péče a čištění nářadí</a></li>
                <li><a href="#chyby">Časté chyby</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/malovani" className="sidebar-cat-link">🎨 Malování & barvy<span>Více článků →</span></Link>
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
