import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Malování nových sádrokartonových stěn – co nepodcenit",
  description: "Jak správně připravit a natřít nový sádrokarton – penetrace, tmelení spojů, počet vrstev a výběr barvy.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-malovat-na-sadrokarton" },
  openGraph: { title: "Malování nových sádrokartonových stěn – co nepodcenit", description: "Jak správně připravit a natřít nový sádrokarton – penetrace, tmelení spojů, počet vrstev a výběr barvy.", url: "https://www.domovniguru.cz/blog/jak-malovat-na-sadrokarton", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-12T08:00:00Z", modifiedTime: "2026-06-12T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Malov%C3%A1n%C3%AD%20nov%C3%BDch%20s%C3%A1drokartonov%C3%BDch%20st%C4%9Bn%20%E2%80%93%20co%20nepodcenit&cat=blog", width: 1200, height: 630, alt: "Malování nových sádrokartonových stěn – co nepodcenit" }] },
  twitter: { card: "summary_large_image", title: "Malování nových sádrokartonových stěn – co nepodcenit", description: "Jak správně připravit a natřít nový sádrokarton – penetrace, tmelení spojů, počet vrstev a výběr barvy." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/jak-malovat-na-sadrokarton#article", "headline": "Malování nových sádrokartonových stěn – co nepodcenit", "datePublished": "2026-06-12T08:00:00Z", "dateModified": "2026-06-12T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["malování sádrokartonu", "nový sádrokarton", "penetrace sádrokartonu", "tmelení spojů", "základní nátěr"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Malování & barvy", "item": "https://www.domovniguru.cz/blog/kategorie/malovani" }, { "@type": "ListItem", "position": 4, "name": "Malování nových sádrokartonových stěn", "item": "https://www.domovniguru.cz/blog/jak-malovat-na-sadrokarton" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Musím nový sádrokarton penetrovat před malováním?", "acceptedAnswer": { "@type": "Answer", "text": "Ano. Penetrace zpevní povrch, vyrovná savost mezi tmelenými spoji a kartonovou deskou a zajistí, že barva přilne rovnoměrně. Bez penetrace hrozí skvrnité prosvítání a nerovnoměrný lesk nátěru." } }, { "@type": "Question", "name": "Kolik vrstev tmelu potřebuji na spoje sádrokartonu?", "acceptedAnswer": { "@type": "Answer", "text": "Standardně se nanášejí tři vrstvy tmelu – první zatlačí výztužnou pásku do spoje, druhá vyrovná povrch a třetí (finální) se brousí do roviny se zbytkem stěny. Mezi vrstvami je nutné nechat tmel řádně zaschnout." } }, { "@type": "Question", "name": "Kolik vrstev barvy je potřeba na nový sádrokarton?", "acceptedAnswer": { "@type": "Answer", "text": "Po penetraci a základním nátěru se obvykle nanášejí dvě vrstvy vrchní malby. U sytých nebo tmavých odstínů na světlém podkladu může být potřeba i třetí vrstva pro rovnoměrné krytí." } }, { "@type": "Question", "name": "Proč mi na sádrokartonu prosvítají spoje po vymalování?", "acceptedAnswer": { "@type": "Answer", "text": "Nejčastější příčinou je nedostatečné přebroušení tmelu, vynechaná penetrace nebo příliš tenká vrstva barvy. Tmelené pásy mají jinou savost než karton, a pokud nejsou vyrovnané penetrací, prosvítají i po vymalování jako mírně odlišný lesk nebo odstín." } }, { "@type": "Question", "name": "Jak zabránit praskání spojů na sádrokartonovém stropě?", "acceptedAnswer": { "@type": "Answer", "text": "Praskání spojů obvykle způsobuje pohyb konstrukce, nedostatečně provedená výztužná páska nebo tmelení v příliš silných vrstvách najednou. Důležité je použít pružný tmel na spoje, dodržet technologické přestávky na zaschnutí a nepodcenit penetraci, která pomáhá držet tmel pevně na podkladu." } }] }] };

const RELATED = [
  { title: "Sádrokartonová příčka – postup montáže", href: "/blog/sadrokarton-pricka-postup", read: "6 min" },
  { title: "Penetrace před malováním – kdy je nutná", href: "/blog/penetrace-pred-malovanim", read: "4 min" },
  { title: "Jak malovat strop bez šmouh", href: "/blog/jak-malovat-strop", read: "5 min" },
  { title: "Jak ošetřit novou omítku před malováním", href: "/blog/osetrit-novou-omitku-pred-malovanim", read: "4 min" },
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
              <span>Malování nových sádrokartonových stěn</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování & barvy</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Malování nových sádrokartonových stěn – co nepodcenit</h1>
              <p className="article-lead">Nový sádrokarton vypadá hladce a čistě, ale na malování není připravený hned. Spoje, rohy a samotná deska mají úplně jinou savost a strukturu povrchu – pokud přípravu odbydete, prosvitnou vám spoje i po dvou vrstvách barvy. Ukážeme, jak na to krok za krokem.</p>
              <div className="article-meta-row"><span>Aktualizováno: 12. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#proc-priprava">Proč nový sádrokarton vyžaduje přípravu</a></li>
                <li><a href="#tmeleni">Tmelení spojů a broušení</a></li>
                <li><a href="#penetrace">Penetrace a základní nátěr</a></li>
                <li><a href="#vyber-barvy">Výběr barvy a počet vrstev</a></li>
                <li><a href="#stropy-steny">Malování stropů vs. stěn ze sádrokartonu</a></li>
                <li><a href="#chyby">Časté chyby</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="proc-priprava">
              <h2>Proč nový sádrokarton vyžaduje přípravu</h2>
              <p>Sádrokartonová deska, tmel ve spojích a sádrová stěrka na šroubech – to jsou tři různé materiály s různou savostí a strukturou povrchu. Pokud byste na takový povrch natřeli barvu přímo, výsledek by byl nerovnoměrný: tmelené pásy by vsákly více barvy a působily matněji nebo světleji než okolní karton, a u sytějších odstínů by tento rozdíl byl viditelný i z dálky.</p>
              <p>Příprava nového sádrokartonu má tři kroky: dokončit tmelení a přebroušení spojů, ošetřit celou plochu penetrací a teprve poté malovat. Vynechání kteréhokoli z těchto kroků se prakticky vždy projeví na výsledném vzhledu stěny – ať už prosvítajícími spoji, nerovnoměrným leskem nebo praskáním v místech spojů desek.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Než začnete malovat, projděte celou plochu rukou i pohledem v šikmém světle (např. s baterkou). Nerovnosti, přesahy tmelu nebo nedotažené šrouby se v šikmém světle ukážou mnohem lépe než při běžném osvětlení.</div>
            </section>

            <section id="tmeleni">
              <h2>Tmelení spojů a broušení</h2>
              <p>Spoje mezi deskami a hlavičky šroubů se tmelí ve třech vrstvách. První vrstva zatlačí výztužnou papírovou nebo skelnou pásku do spoje a zajistí, že se spoj v budoucnu nerozevře. Druhá vrstva vyrovná povrch do širšího pásu, aby přechod mezi tmelem a kartonem nebyl ostrý. Třetí, finální vrstva se nanáší v ještě širším a tenčím pásu a po zaschnutí se přebrousí brusnou mřížkou nebo houbou s jemným zrnem.</p>
              <p>Mezi jednotlivými vrstvami je nutné dodržet technologickou přestávku – tmel musí zcela proschnout, jinak se při broušení drolí nebo se v něm objeví praskliny. U sádrokartonových stropů a příček platí stejný postup; rozdíl je popsaný dále v sekci o stropech. Pokud řešíte i samotnou montáž příčky, podívejte se na náš návod na <Link href="/blog/sadrokarton-pricka-postup" style={{ color: "#2a6496", textDecoration: "underline" }}>sádrokartonovou příčku a postup montáže</Link>.</p>
              <p>Po přebroušení by měl být povrch hladký a přechod mezi tmelem a kartonem na dotek téměř nerozeznatelný. Prach po broušení důkladně odstraňte – nejlépe vysavačem a poté suchým hadrem nebo štětcem, aby nezůstal v drobných rýhách a neovlivnil přilnavost penetrace.</p>
              <p>Pro odhad množství materiálu na celou plochu se vyplatí spočítat si potřebu předem – orientační množství tmelu na spoje a opravy zjistíte v naší <Link href="/kalkulacky/kolik-sterky" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačce na spotřebu stěrky</Link>.</p>
            </section>

            <section id="penetrace">
              <h2>Penetrace a základní nátěr</h2>
              <p>Penetrace je klíčový krok, který se u nového sádrokartonu často podceňuje. Jejím úkolem je vyrovnat savost povrchu – přebroušené tmelené spoje totiž savost mají jinou než samotná kartonová deska. Bez penetrace se barva do tmelu vsákne jinak než do kartonu, což se po zaschnutí projeví jako mírně odlišný lesk nebo odstín v místech spojů, tzv. „mapy".</p>
              <p>Na sádrokarton se používá hloubková nebo univerzální penetrace ve vodou ředitelné formě, nanášená válečkem nebo štětcem v jedné rovnoměrné vrstvě. Penetraci nechte zcela proschnout podle doporučení výrobce (obvykle 4–24 hodin v závislosti na teplotě a vlhkosti vzduchu).</p>
              <p>U sádrokartonu se místo samostatného základního nátěru často kombinuje penetrace s první vrstvou barvy ředěné podle doporučení výrobce – tím se sníží spotřeba vrchní barvy a zlepší se její krytí. U tmavých nebo sytých odstínů se však vyplatí použít samostatný bílý nebo šedý základní (podkladní) nátěr, který pomůže výslednému odstínu vyniknout a sníží počet potřebných vrstev finální barvy.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Penetraci aplikujte i na hrany a rohy desek, kam se při válečkování snadno zapomíná – právě tam je tmel nejčastěji a savost nejvyšší.</div>
            </section>

            <section id="vyber-barvy">
              <h2>Výběr barvy a počet vrstev</h2>
              <p>Pro nové sádrokartonové stěny se hodí kvalitní disperzní nebo akrylátová barva s dobrou krycí schopností. U bytových prostor postačí barva s odolností proti otěru za mokra třídy 2–3, v koupelnách a kuchyních se vyplatí třída 1 nebo barva s přídavkem proti plísním.</p>
              <p>Po penetraci se nanášejí obvykle dvě vrstvy vrchní barvy. Mezi vrstvami dodržte dobu zaschnutí uvedenou na obalu, typicky 4–6 hodin při pokojové teplotě. U sytých nebo tmavých odstínů na světlém podkladu, anebo naopak světlých odstínů na šedém tmelu, může být potřeba třetí vrstva, aby byl odstín skutečně rovnoměrný v celé ploše – včetně tmelených spojů.</p>
              <p>Při plánování materiálu počítejte i s tím, kolik desek a tedy i kolik spojů budete tmelit a malovat – množství sádrokartonu na celou rekonstrukci si můžete předem odhadnout v naší <Link href="/kalkulacky/kolik-sadrokartonu" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačce spotřeby sádrokartonu</Link>.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ prostoru</th><th>Doporučená barva</th><th>Počet vrstev</th></tr></thead>
                  <tbody>
                    <tr><td>Obývací pokoj, ložnice</td><td>Disperzní, otěr třída 2–3</td><td>2 vrstvy</td></tr>
                    <tr><td>Kuchyň, předsíň</td><td>Otěr třída 1–2, omyvatelná</td><td>2 vrstvy</td></tr>
                    <tr><td>Koupelna (suché zóny)</td><td>S přísadou proti plísním</td><td>2–3 vrstvy</td></tr>
                    <tr><td>Tmavé/syté odstíny</td><td>S podkladovým nátěrem v odstínu</td><td>2–3 vrstvy</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="stropy-steny">
              <h2>Malování stropů vs. stěn ze sádrokartonu</h2>
              <p>Sádrokartonové stropy se z hlediska tmelení a penetrace připravují stejně jako stěny, ale malování má svá specifika. Boční světlo z oken nebo bodových svítidel velmi výrazně zvýrazňuje jakoukoli nerovnost povrchu a každý nedokonale přebroušený spoj. Proto je u stropů ještě důležitější dokonalé přebroušení a kontrola v šikmém světle před nanesením barvy.</p>
              <p>Na strop se obvykle volí matná bílá nebo velmi světlý odstín – matný povrch totiž drobné nerovnosti opticky tlumí, zatímco lesklejší barvy je naopak zvýrazňují. Při natírání stropu pracujte v menších úsecích a barvu nanášejte křížovým tahem (nejprve jedním směrem, poté druhým), aby nevznikaly přechody mezi jednotlivými záběry válečku.</p>
              <p>U stěn je oproti tomu více prostoru pro sytější odstíny a barvy s vyšším leskem, zejména pokud stěna není přímo osvětlena bodovým světlem z boku. I tak ale platí, že kvalitní příprava (tmelení, broušení, penetrace) je základem pro rovnoměrný výsledek bez ohledu na to, zda jde o strop, nebo stěnu.</p>
            </section>

            <section id="chyby">
              <h2>Časté chyby</h2>
              <h3>Praskající spoje</h3>
              <p>Praskliny v místech spojů desek bývají nejčastěji způsobeny nedostatečně zatlačenou výztužnou páskou v první vrstvě tmelu, příliš silnou vrstvou tmelu nanesenou najednou nebo pohybem konstrukce (např. u sádrokartonových příček bez dostatečného ukotvení). Řešením je vždy použít pružný tmel určený přímo na spoje, dodržet doporučenou tloušťku jednotlivých vrstev a nechat každou vrstvu řádně proschnout.</p>
              <h3>Prosvítání tmelu po vymalování</h3>
              <p>Pokud po zaschnutí barvy vidíte v místech spojů jemné „mapy" nebo rozdílný lesk, je to téměř vždy důsledek vynechané nebo nedostatečné penetrace. Penetrace srovná savost tmelu a kartonu – bez ní se barva vsakuje nerovnoměrně a rozdíl je viditelný i po dvou vrstvách.</p>
              <h3>Malování příliš brzy po tmelení</h3>
              <p>Tmel i penetrace potřebují čas na zaschnutí. Pokud se na ně nanese barva předčasně, může docházet k zadržené vlhkosti, která se projeví puchýřky nebo odlupováním nátěru po několika týdnech. Vždy dodržujte technologické přestávky uvedené výrobcem.</p>
              <h3>Přeskočení brusné fáze</h3>
              <p>Nepřebroušené přesahy tmelu vytvářejí na stěně viditelné hrany, které jsou v bočním světle (zejména u stropů a u oken) velmi nápadné. Broušení se nevyplácí přeskakovat ani u ploch, které „vypadají rovně" – rozdíl se ukáže až po nátěru.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Musím nový sádrokarton penetrovat před malováním?", a: "Ano. Penetrace zpevní povrch, vyrovná savost mezi tmelenými spoji a kartonovou deskou a zajistí, že barva přilne rovnoměrně. Bez penetrace hrozí skvrnité prosvítání a nerovnoměrný lesk nátěru." },
                  { q: "Kolik vrstev tmelu potřebuji na spoje sádrokartonu?", a: "Standardně se nanášejí tři vrstvy tmelu – první zatlačí výztužnou pásku do spoje, druhá vyrovná povrch a třetí (finální) se brousí do roviny se zbytkem stěny. Mezi vrstvami je nutné nechat tmel řádně zaschnout." },
                  { q: "Kolik vrstev barvy je potřeba na nový sádrokarton?", a: "Po penetraci a základním nátěru se obvykle nanášejí dvě vrstvy vrchní malby. U sytých nebo tmavých odstínů na světlém podkladu může být potřeba i třetí vrstva pro rovnoměrné krytí." },
                  { q: "Proč mi na sádrokartonu prosvítají spoje po vymalování?", a: "Nejčastější příčinou je nedostatečné přebroušení tmelu, vynechaná penetrace nebo příliš tenká vrstva barvy. Tmelené pásy mají jinou savost než karton, a pokud nejsou vyrovnané penetrací, prosvítají i po vymalování jako mírně odlišný lesk nebo odstín." },
                  { q: "Jak zabránit praskání spojů na sádrokartonovém stropě?", a: "Praskání spojů obvykle způsobuje pohyb konstrukce, nedostatečně provedená výztužná páska nebo tmelení v příliš silných vrstvách najednou. Důležité je použít pružný tmel na spoje, dodržet technologické přestávky na zaschnutí a nepodcenit penetraci, která pomáhá držet tmel pevně na podkladu." },
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
                <li><a href="#proc-priprava">Proč nový sádrokarton vyžaduje přípravu</a></li>
                <li><a href="#tmeleni">Tmelení spojů a broušení</a></li>
                <li><a href="#penetrace">Penetrace a základní nátěr</a></li>
                <li><a href="#vyber-barvy">Výběr barvy a počet vrstev</a></li>
                <li><a href="#stropy-steny">Stropy vs. stěny</a></li>
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
