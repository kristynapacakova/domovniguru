import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak zateplit podkroví a strop, aby teplo zůstalo v domě",
  description: "Výběr izolačního materiálu, tloušťka vrstvy a postup zateplení podkroví a stropu pod nevytápěnou půdou.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/zatepleni-podkrovi-a-stropu" },
  openGraph: { title: "Jak zateplit podkroví a strop, aby teplo zůstalo v domě", description: "Výběr izolačního materiálu, tloušťka vrstvy a postup zateplení podkroví a stropu pod nevytápěnou půdou.", url: "https://www.domovniguru.cz/blog/zatepleni-podkrovi-a-stropu", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-24T08:00:00Z", modifiedTime: "2026-06-24T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20zateplit%20podkrov%C3%AD%20a%20strop%2C%20aby%20teplo%20z%C5%AFstalo%20v%20dom%C4%9B&cat=blog", width: 1200, height: 630, alt: "Jak zateplit podkroví a strop, aby teplo zůstalo v domě" }] },
  twitter: { card: "summary_large_image", title: "Jak zateplit podkroví a strop, aby teplo zůstalo v domě", description: "Výběr izolačního materiálu, tloušťka vrstvy a postup zateplení podkroví a stropu pod nevytápěnou půdou." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/zatepleni-podkrovi-a-stropu#article", "headline": "Jak zateplit podkroví a strop, aby teplo zůstalo v domě", "datePublished": "2026-06-24T08:00:00Z", "dateModified": "2026-06-24T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["zateplení podkroví", "zateplení stropu", "foukaná celulóza", "parozábrana", "tepelné mosty", "dotace NZÚ"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Stěhování & rekonstrukce", "item": "https://www.domovniguru.cz/blog/kategorie/stehovani" }, { "@type": "ListItem", "position": 4, "name": "Jak zateplit podkroví a strop, aby teplo zůstalo v domě", "item": "https://www.domovniguru.cz/blog/zatepleni-podkrovi-a-stropu" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Je lepší zateplit střechu, nebo jen strop pod podkrovím?", "acceptedAnswer": { "@type": "Answer", "text": "Pokud podkroví nevyužíváš k bydlení a slouží jen jako sklad, je levnější a jednodušší zateplit strop pod nevytápěnou půdou než celou střešní konstrukci. Pokud chceš podkroví v budoucnu obývat nebo ho už obýváš, je nutné zateplit přímo střechu (mezi krokvemi a případně i nad krokvemi)." } }, { "@type": "Question", "name": "Jakou tloušťku izolace potřebuji ve střeše nebo stropu?", "acceptedAnswer": { "@type": "Answer", "text": "Pro splnění doporučených hodnot součinitele prostupu tepla podle ČSN 73 0540-2 potřebuješ u šikmé střechy obvykle 280–360 mm izolace (kombinace mezi krokvemi a nad krokvemi), u rovného stropu pod nevytápěnou půdou 300–400 mm foukané izolace nebo desek. Přesná tloušťka závisí na typu materiálu a jeho součiniteli tepelné vodivosti." } }, { "@type": "Question", "name": "Co je parozábrana a proč je tak důležitá?", "acceptedAnswer": { "@type": "Answer", "text": "Parozábrana je fólie instalovaná na teplé straně izolace (ze strany interiéru), která zabraňuje vlhkosti z vnitřního vzduchu pronikat do izolace a kondenzovat v ní. Bez správně provedené a vzduchotěsně napojené parozábrany se izolace postupně provlhčuje, ztrácí tepelný odpor a může docházet i k plísním a degradaci dřevěné konstrukce krovu." } }, { "@type": "Question", "name": "Jaké dotace lze získat na zateplení podkroví?", "acceptedAnswer": { "@type": "Answer", "text": "Na zateplení střechy nebo stropu lze čerpat dotaci z programu Nová zelená úsporám (NZÚ), který hradí desítky procent uznatelných nákladů podle typu opatření a celkové úspory energie. Výše dotace se odvíjí od toho, jestli zateplení je součástí komplexnějšího opatření, a od aktuálních podmínek programu, které je nutné ověřit před podáním žádosti." } }, { "@type": "Question", "name": "Jaké jsou nejčastější chyby při zateplování podkroví?", "acceptedAnswer": { "@type": "Answer", "text": "Nejčastější chyby jsou tepelné mosty kolem krokví a komínů, chybějící nebo neprodyšně napojená parozábrana, podcenění tloušťky izolace a zanedbání větrané mezery mezi izolací a střešní krytinou. Každá z těchto chyb může výrazně snížit účinnost celého zateplení i při použití kvalitního materiálu." } }] }] };

const RELATED = [
  { title: "Jak zateplit dům – kompletní přehled možností", href: "/blog/jak-zateplit-dum", read: "7 min" },
  { title: "Návratnost zateplení domu – kdy se investice vrátí", href: "/blog/navratnost-zatepleni-domu", read: "6 min" },
  { title: "Jak vybrat okna při rekonstrukci", href: "/blog/jak-vybrat-okna-pri-rekonstrukci", read: "6 min" },
  { title: "Hypotéka na rekonstrukci – jak ji získat a na co si dát pozor", href: "/blog/hypoteka-na-rekonstrukci", read: "6 min" },
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
              <span>Jak zateplit podkroví a strop, aby teplo zůstalo v domě</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏠 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 7 min čtení</span>
              </div>
              <h1 className="article-h1">Jak zateplit podkroví a strop, aby teplo zůstalo v domě</h1>
              <p className="article-lead">Teplý vzduch přirozeně stoupá nahoru, a pokud střecha nebo strop pod podkrovím nejsou dobře zateplené, dům ztrácí přes ně víc tepla než přes stěny nebo okna. Zateplení podkroví patří mezi opatření s nejrychlejší návratností, ale jen pokud se zvolí správný materiál, tloušťka a hlavně se nezapomene na parozábranu. Tady je přehled, jak na to.</p>
              <div className="article-meta-row"><span>Aktualizováno: 24. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#ztraty">Kde dům nejvíc ztrácí teplo</a></li>
                <li><a href="#mezi-nad">Zateplení mezi krokvemi vs. nad krokvemi</a></li>
                <li><a href="#materialy">Izolační materiály</a></li>
                <li><a href="#parozabrana">Parozábrana a její důležitost</a></li>
                <li><a href="#strop">Zateplení stropu pod nevytápěnou půdou</a></li>
                <li><a href="#tloustka">Doporučená tloušťka izolace podle normy</a></li>
                <li><a href="#dotace">Dotace NZÚ na zateplení</a></li>
                <li><a href="#chyby">Časté chyby</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="ztraty">
              <h2>Kde dům nejvíc ztrácí teplo</h2>
              <p>Teplý vzduch je lehčí než chladný a přirozeně stoupá k nejvyšším místům domu. Pokud střecha nebo strop nad obytnými prostory nejsou dostatečně zateplené, právě tudy uniká velká část tepla – u nezateplených nebo špatně zateplených střech to může být přes čtvrtinu celkových tepelných ztrát domu.</p>
              <p>Proto se zateplení podkroví nebo stropu pod ním obvykle vyplatí jako jedno z prvních opatření při snižování energetické náročnosti domu, ještě před výměnou oken nebo zateplením fasády. Celkový přehled možností, jak dům zateplit, najdeš v článku <Link href="/blog/jak-zateplit-dum" style={{ color: "#2a6496", textDecoration: "underline" }}>jak zateplit dům</Link>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud si nejsi jistý, kde dům ztrácí nejvíc tepla, termovizní snímkování (termokamera) rychle ukáže slabá místa – často je vidět i to, jestli stávající izolace v podkroví funguje rovnoměrně, nebo má mezery.</div>
            </section>

            <section id="mezi-nad">
              <h2>Rozdíl mezi zateplením mezi krokvemi a nad krokvemi</h2>
              <p>Pokud chceš podkroví využívat k bydlení (nebo ho už obýváš), zateplení musí být součástí střešní konstrukce, ne jen stropu pod ní.</p>
              <ul>
                <li><strong>Zateplení mezi krokvemi</strong> – izolace se vkládá do prostoru mezi dřevěné krokve. Je to nejběžnější a nejlevnější způsob, ale tloušťka izolace je omezená výškou krokví, což může vést k tepelným mostům v místě samotných krokví.</li>
                <li><strong>Zateplení nad krokvemi (nadkrokevní izolace)</strong> – souvislá vrstva tuhých desek nad krokvemi, bez přerušení dřevěnou konstrukcí. Eliminuje tepelné mosty a umožňuje zachovat krokve viditelné z interiéru, ale je náročnější a dražší, typicky se řeší při výměně střešní krytiny.</li>
                <li><strong>Kombinace obou</strong> – mezikrokevní izolace doplněná tenčí vrstvou nad krokvemi pro maximální tepelný odpor a minimalizaci mostů, časté u novostaveb a kompletních rekonstrukcí střechy.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud plánuješ i výměnu střešní krytiny, je ideální čas přidat nadkrokevní izolaci současně – odpadá tím nutnost znovu rozebírat střechu za pár let.</div>
            </section>

            <section id="materialy">
              <h2>Izolační materiály</h2>
              <h3>Minerální vlna</h3>
              <p>Nejběžnější materiál pro zateplení mezi krokvemi – dobrá tepelná i akustická izolace, nehořlavá, propustná pro vodní páru. Vyrábí se jako pásy nebo rolovaná, montuje se mezi krokve a zajišťuje se proti vypadávání.</p>
              <h3>Foukaná celulóza</h3>
              <p>Recyklovaný papírový materiál foukaný strojně do dutin nebo na strop. Výborně vyplňuje i nepravidelné prostory a těžko přístupná místa, má dobré tepelné i akustické vlastnosti a je ekologičtější volbou. Vyžaduje odbornou aplikaci strojem, ne svépomocnou montáž.</p>
              <h3>PIR desky</h3>
              <p>Tuhé polyuretanové desky s velmi nízkým součinitelem tepelné vodivosti – stejný tepelný odpor dosáhnou na podstatně menší tloušťce než minerální vlna. Hodí se zejména pro nadkrokevní izolaci, kde je nutné šetřit tloušťku konstrukce. Jsou dražší, ale úspora místa může být rozhodující u nízkých podkroví.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud řešíš i zateplení zbytku domu, podívej se na náš článek o návratnosti investice – pomůže porovnat, kde se zateplovací opatření vyplatí nejrychleji, viz <Link href="/blog/navratnost-zatepleni-domu" style={{ color: "#2a6496", textDecoration: "underline" }}>návratnost zateplení domu</Link>.</div>
            </section>

            <section id="parozabrana">
              <h2>Parozábrana a její důležitost</h2>
              <p>Parozábrana je fólie instalovaná na teplé straně izolace (směrem do interiéru), která zabraňuje vlhkosti z vnitřního vzduchu pronikat do izolační vrstvy. Bez parozábrany vodní pára prochází přes izolaci ven, a pokud na cestě narazí na chladnější vrstvu, zkondenzuje uvnitř konstrukce.</p>
              <p>Provlhlá izolace ztrácí velkou část svého tepelného odporu a vlhkost navíc časem napadá dřevěnou konstrukci krovu plísní nebo hnilobou. Proto je naprosto kritické, aby byla parozábrana nejen instalovaná, ale i vzduchotěsně napojená ve všech spojích, kolem prostupů (komín, odvětrání) a na okrajích u stěn – jakákoli netěsnost funguje jako díra, kterou vlhký vzduch unikne přímo do izolace.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Na lepení spojů parozábrany používej speciální certifikovanou pásku k danému typu fólie, ne běžnou izolepu nebo lepicí pásku – ty časem ztrácí přilnavost a spoj se rozpojí.</div>
            </section>

            <section id="strop">
              <h2>Zateplení stropu pod nevytápěnou půdou jako levnější alternativa</h2>
              <p>Pokud podkroví nevyužíváš k bydlení a slouží jen jako nevytápěný sklad, je mnohem jednodušší a levnější zateplit rovný strop pod ním než celou složitou střešní konstrukci. Izolace se v tomto případě klade přímo na strop shora (z půdy), nejčastěji jako foukaná celulóza nebo desky z minerální vlny volně položené na sebe ve dvou vrstvách.</p>
              <p>Výhodou je jednodušší instalace bez nutnosti zasahovat do krovu, nevýhodou je, že samotná půda zůstává nevytápěná a v zimě promrzá – což může být problém, pokud na půdě vedou rozvody vody nebo jiné citlivé instalace, ty je třeba dodatečně izolovat samostatně.</p>
            </section>

            <section id="tloustka">
              <h2>Doporučená tloušťka izolace podle normy</h2>
              <p>Česká norma ČSN 73 0540-2 stanovuje doporučené hodnoty součinitele prostupu tepla, ze kterých se odvíjí potřebná tloušťka izolace podle typu materiálu.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Konstrukce</th><th>Orientační tloušťka izolace</th><th>Poznámka</th></tr></thead>
                  <tbody>
                    <tr><td>Šikmá střecha (mezi + nad krokvemi)</td><td>280–360 mm</td><td>Kombinace minerální vlny a PIR desek</td></tr>
                    <tr><td>Šikmá střecha (jen mezi krokvemi)</td><td>200–280 mm</td><td>Omezeno výškou krokví, riziko tepelných mostů</td></tr>
                    <tr><td>Rovný strop pod nevytápěnou půdou</td><td>300–400 mm</td><td>Foukaná celulóza nebo dvě vrstvy desek</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Přesná potřebná tloušťka se liší podle součinitele tepelné vodivosti konkrétního materiálu (čím nižší hodnota, tím tenčí vrstva dosáhne stejného výsledku) – proto je vždy lepší nechat si tloušťku spočítat energetickým specialistou nebo projektantem pro daný materiál a konstrukci.</p>
            </section>

            <section id="dotace">
              <h2>Dotace NZÚ na zateplení</h2>
              <p>Na zateplení střechy nebo stropu lze čerpat dotaci z programu Nová zelená úsporám (NZÚ), který podporuje zlepšení tepelně technických vlastností budovy. Výše dotace se odvíjí od typu opatření, dosažené úspory energie a toho, jestli je zateplení součástí širšího komplexního opatření (např. spolu se zateplením fasády a výměnou oken) nebo jde o samostatný krok.</p>
              <p>Podmínky programu, výše dotace i seznam uznatelných materiálů se v čase mění, proto se vyplatí ověřit aktuální pravidla přímo na webu Státního fondu životního prostředí ČR před zahájením prací – dotace se obvykle žádá ještě před realizací nebo krátce po ní, podle aktuální výzvy.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud zateplení financuješ částečně úvěrem, dotace NZÚ se dá kombinovat s hypotékou na rekonstrukci – víc se dozvíš v článku o <Link href="/blog/hypoteka-na-rekonstrukci" style={{ color: "#2a6496", textDecoration: "underline" }}>hypotéce na rekonstrukci</Link>.</div>
            </section>

            <section id="chyby">
              <h2>Časté chyby při zateplování podkroví</h2>
              <ul>
                <li><strong>Tepelné mosty kolem krokví</strong> – pokud je izolace jen mezi krokvemi, samotné dřevo krokví vede teplo hůř izolovaně než okolní vrstva, vzniká tak pravidelný pruh tepelné ztráty</li>
                <li><strong>Chybějící nebo netěsná parozábrana</strong> – nejzávažnější chyba, vede k provlhání izolace a degradaci konstrukce krovu</li>
                <li><strong>Podcenění tloušťky izolace</strong> – snaha ušetřit na materiálu vede k tomu, že zateplení nedosáhne normou doporučených hodnot a úspora energie je nižší, než by mohla být</li>
                <li><strong>Zanedbaná větraná mezera</strong> – mezi izolací a střešní krytinou musí zůstat průchozí vzduchová mezera pro odvětrání vlhkosti, jinak hrozí kondenzace pod krytinou</li>
                <li><strong>Neprodyšné utěsnění prostupů</strong> – komíny, odvětrání kanalizace nebo elektrické rozvody vyžadují speciální pásky a manžety, obyčejné zalepení nestačí</li>
              </ul>
              <p>Každá z těchto chyb dokáže výrazně snížit účinnost zateplení, i když je samotný izolační materiál kvalitní – proto se u větších zásahů do střechy vyplatí přizvat odbornou firmu nebo si od ní alespoň nechat zkontrolovat klíčové detaily (napojení parozábrany, řešení tepelných mostů).</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Je lepší zateplit střechu, nebo jen strop pod podkrovím?", a: "Pokud podkroví nevyužíváš k bydlení a slouží jen jako sklad, je levnější a jednodušší zateplit strop pod nevytápěnou půdou než celou střešní konstrukci. Pokud chceš podkroví v budoucnu obývat nebo ho už obýváš, je nutné zateplit přímo střechu (mezi krokvemi a případně i nad krokvemi)." },
                  { q: "Jakou tloušťku izolace potřebuji ve střeše nebo stropu?", a: "Pro splnění doporučených hodnot součinitele prostupu tepla podle ČSN 73 0540-2 potřebuješ u šikmé střechy obvykle 280–360 mm izolace (kombinace mezi krokvemi a nad krokvemi), u rovného stropu pod nevytápěnou půdou 300–400 mm foukané izolace nebo desek. Přesná tloušťka závisí na typu materiálu a jeho součiniteli tepelné vodivosti." },
                  { q: "Co je parozábrana a proč je tak důležitá?", a: "Parozábrana je fólie instalovaná na teplé straně izolace (ze strany interiéru), která zabraňuje vlhkosti z vnitřního vzduchu pronikat do izolace a kondenzovat v ní. Bez správně provedené a vzduchotěsně napojené parozábrany se izolace postupně provlhčuje, ztrácí tepelný odpor a může docházet i k plísním a degradaci dřevěné konstrukce krovu." },
                  { q: "Jaké dotace lze získat na zateplení podkroví?", a: "Na zateplení střechy nebo stropu lze čerpat dotaci z programu Nová zelená úsporám (NZÚ), který hradí desítky procent uznatelných nákladů podle typu opatření a celkové úspory energie. Výše dotace se odvíjí od toho, jestli zateplení je součástí komplexnějšího opatření, a od aktuálních podmínek programu, které je nutné ověřit před podáním žádosti." },
                  { q: "Jaké jsou nejčastější chyby při zateplování podkroví?", a: "Nejčastější chyby jsou tepelné mosty kolem krokví a komínů, chybějící nebo neprodyšně napojená parozábrana, podcenění tloušťky izolace a zanedbání větrané mezery mezi izolací a střešní krytinou. Každá z těchto chyb může výrazně snížit účinnost celého zateplení i při použití kvalitního materiálu." },
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
                <li><a href="#ztraty">Kde dům ztrácí teplo</a></li>
                <li><a href="#mezi-nad">Mezi vs. nad krokvemi</a></li>
                <li><a href="#materialy">Izolační materiály</a></li>
                <li><a href="#parozabrana">Parozábrana</a></li>
                <li><a href="#strop">Zateplení stropu</a></li>
                <li><a href="#tloustka">Doporučená tloušťka</a></li>
                <li><a href="#dotace">Dotace NZÚ</a></li>
                <li><a href="#chyby">Časté chyby</a></li>
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
