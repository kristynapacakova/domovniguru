import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak opravit praskliny ve fasádě před nátěrem",
  description: "Diagnostika typů prasklin na fasádě, jejich oprava tmelem nebo sítí a příprava povrchu před fasádním nátěrem.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/oprava-prasklin-ve-fasade-pred-malovanim" },
  openGraph: { title: "Jak opravit praskliny ve fasádě před nátěrem", description: "Diagnostika typů prasklin na fasádě, jejich oprava tmelem nebo sítí a příprava povrchu před fasádním nátěrem.", url: "https://www.domovniguru.cz/blog/oprava-prasklin-ve-fasade-pred-malovanim", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-12T08:00:00Z", modifiedTime: "2026-06-12T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20opravit%20praskliny%20ve%20fas%C3%A1d%C4%9B%20p%C5%99ed%20n%C3%A1t%C4%9Brem&cat=blog", width: 1200, height: 630, alt: "Jak opravit praskliny ve fasádě před nátěrem" }] },
  twitter: { card: "summary_large_image", title: "Jak opravit praskliny ve fasádě před nátěrem", description: "Diagnostika typů prasklin na fasádě, jejich oprava tmelem nebo sítí a příprava povrchu před fasádním nátěrem." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/oprava-prasklin-ve-fasade-pred-malovanim#article", "headline": "Jak opravit praskliny ve fasádě před nátěrem", "datePublished": "2026-06-12T08:00:00Z", "dateModified": "2026-06-12T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["praskliny ve fasádě", "oprava fasády", "tmel na fasádu", "armovací síť", "penetrace fasády", "fasádní nátěr"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Malování & barvy", "item": "https://www.domovniguru.cz/blog/kategorie/malovani" }, { "@type": "ListItem", "position": 4, "name": "Jak opravit praskliny ve fasádě před nátěrem", "item": "https://www.domovniguru.cz/blog/oprava-prasklin-ve-fasade-pred-malovanim" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jak rozeznám vlasovou prasklinu od statické?", "acceptedAnswer": { "@type": "Answer", "text": "Vlasová prasklina je tenčí než 0,5 mm, má nepravidelný tvar a nepokračuje přes spáry zdiva. Statická prasklina bývá širší než 2 mm, má rovný směr (často diagonální od rohů oken a dveří) a postupně se zvětšuje – tu je třeba nechat posoudit statikem." } }, { "@type": "Question", "name": "Kdy stačí opravit prasklinu tmelem a kdy je nutná armovací síť?", "acceptedAnswer": { "@type": "Answer", "text": "Vlasové a drobné praskliny do 1–2 mm zvládne fasádní akrylátový nebo silikonový tmel. U širších prasklin, opakovaně se objevujících trhlin nebo prasklin podél dilatačních spár je vhodné použít stěrku s vtlačenou armovací (perlinkovou) síťovinou, která trhlinu přemostí a zabrání jejímu opětovnému prokreslení." } }, { "@type": "Question", "name": "Proč je penetrace fasády před nátěrem důležitá?", "acceptedAnswer": { "@type": "Answer", "text": "Penetrační nátěr zpevní a sjednotí savost povrchu, zejména v místech oprav, kde se setkává původní omítka s novou stěrkou. Bez penetrace barva na opravená místa savě zatáhne, vznikají mapy a nátěr se může předčasně odlupovat." } }, { "@type": "Question", "name": "Jakou barvu vybrat na fasádu s opravenými prasklinami?", "acceptedAnswer": { "@type": "Answer", "text": "Vhodná je fasádní silikonová nebo silikátová barva s vysokou paropropustností a pružností, která dokáže přemostit drobné mikropraskliny (tzv. trhlinu-mosty). Akrylátové barvy jsou levnější, ale méně pružné a propustné." } }, { "@type": "Question", "name": "Jak předejít vzniku nových prasklin ve fasádě?", "acceptedAnswer": { "@type": "Answer", "text": "Pomáhá kvalitní podklad s dilatačními spárami v místech přechodu konstrukcí, dostatečná technologická pauza mezi vrstvami omítky, ochrana fasády před přímým sluncem při aplikaci a používání pružných, paropropustných materiálů, které snášejí teplotní a vlhkostní pohyby budovy." } }] }] };

const RELATED = [
  { title: "Jak vybrat fasádní barvu", href: "/blog/fasadni-barva-vyber", read: "5 min" },
  { title: "Obnova fasády nátěrem – krok za krokem", href: "/blog/obnova-fasady-naterem", read: "6 min" },
  { title: "Jak zateplit dům – kompletní průvodce", href: "/blog/jak-zateplit-dum", read: "7 min" },
  { title: "Jak opravit škrábance a díry ve zdi", href: "/blog/opravit-skrabance-diry-ve-zdi", read: "4 min" },
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
              <span>Jak opravit praskliny ve fasádě před nátěrem</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování & barvy</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak opravit praskliny ve fasádě před nátěrem</h1>
              <p className="article-lead">Praskliny ve fasádě nejsou jen estetický problém – pokud je přehlédneš a přetřeš barvou, voda se dostane pod nátěr a poškození se rychle vrátí. Než sáhneš po štětce nebo válečku, je potřeba prasklinu správně diagnostikovat, opravit a povrch připravit. Tenhle návod tě provede celým procesem.</p>
              <div className="article-meta-row"><span>Aktualizováno: 12. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#typy-prasklin">Typy prasklin ve fasádě</a></li>
                <li><a href="#kdy-statik">Kdy jde o kosmetický problém a kdy zavolat statika</a></li>
                <li><a href="#oprava-tmelem">Oprava tmelem a armovací sítí</a></li>
                <li><a href="#penetrace">Penetrace fasády před nátěrem</a></li>
                <li><a href="#vyber-barvy">Výběr fasádní barvy a aplikace</a></li>
                <li><a href="#prevence">Prevence vzniku nových prasklin</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="typy-prasklin">
              <h2>Typy prasklin ve fasádě</h2>
              <p>Ne každá prasklina znamená totéž. Než začneš s opravou, je dobré rozlišit, s jakým typem trhliny máš co dělat – od toho se odvíjí i postup opravy.</p>
              <h3>Vlasové praskliny</h3>
              <p>Tenké trhliny do 0,5 mm, které se táhnou nepravidelně po ploše omítky. Bývají způsobené smršťováním omítky nebo povrchové vrstvy při zrání a obvykle nejsou statickým problémem. Jde o nejčastější typ poruchy na starších fasádách.</p>
              <h3>Dilatační praskliny</h3>
              <p>Vznikají v místech, kde se setkávají různé materiály nebo konstrukční prvky – například na styku přístavby a původní stavby, kolem rohových lišt nebo nad prostupy instalací. Tyto praskliny se mohou v závislosti na teplotě pravidelně otevírat a zavírat, proto se musí řešit pružným tmelem, ne tuhou stěrkou.</p>
              <h3>Statické praskliny</h3>
              <p>Širší trhliny (obvykle nad 2 mm), často diagonální, vycházející z rohů oken a dveří nebo procházející přes celou výšku zdiva. Mohou signalizovat pohyb základů, sedání objektu nebo poruchu nosné konstrukce. Tyto praskliny se samotnou opravou fasády neřeší – je nutné nejprve odstranit příčinu.</p>
            </section>

            <section id="kdy-statik">
              <h2>Kdy jde o kosmetický problém a kdy zavolat statika</h2>
              <p>U vlasových prasklin do 0,5 mm, které se nemění v čase a nejsou doprovázené dalšími příznaky (např. nerovnoměrné sedání podlah, zaklínění dveří), jde téměř vždy o kosmetickou záležitost řešitelnou běžnou opravou.</p>
              <p>Varovné signály, při kterých je vhodné přizvat statika, jsou:</p>
              <ul>
                <li>Prasklina je širší než 2–3 mm nebo se v průběhu týdnů a měsíců zvětšuje</li>
                <li>Trhlina prochází přes celou výšku stěny nebo pokračuje i v interiéru</li>
                <li>Praskliny vycházejí diagonálně z rohů oken a dveří a souběžně se objevuje zaklínění oken či dveří</li>
                <li>Trhlina je doprovázená posunem nebo odštěpováním kusů omítky či cihel</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Jednoduchý test pohybu prasklinu udělej tak, že přes ni přilepíš proužek papíru nebo sádrový „svědek". Pokud se po několika týdnech protrhne, prasklina se stále pohybuje a je potřeba ji řešit jinak než kosmetickou opravou.</div>
            </section>

            <section id="oprava-tmelem">
              <h2>Oprava tmelem a armovací sítí</h2>
              <p>U drobných a vlasových prasklin do 1–2 mm postačí fasádní akrylátový nebo silikonový tmel. Prasklinu nejprve rozšíříme a vyčistíme od prachu a uvolněných částí omítky, poté tmel naneseme špachtlí a po zaschnutí přebrousíme do roviny s okolním povrchem.</p>
              <p>U širších, opakujících se nebo dilatačních prasklin se osvědčuje postup se stěrkovou hmotou a armovací (perlinkovou) síťovinou:</p>
              <ul>
                <li>Prasklinu vyčistíme a případně mírně rozšíříme do tvaru „V"</li>
                <li>Naneseme vrstvu stěrkové hmoty přesahující prasklinu na obě strany o 10–15 cm</li>
                <li>Do čerstvé stěrky vtlačíme pruh armovací síťoviny</li>
                <li>Po zaschnutí naneseme druhou vyrovnávací vrstvu stěrky a přebrousíme</li>
              </ul>
              <p>Na výpočet potřebného množství materiálu pro celou plochu fasády můžeš použít naši <Link href="/kalkulacky/kolik-sterky" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačku spotřeby stěrky</Link>, která ti pomůže odhadnout, kolik balení budeš potřebovat podle plochy a tloušťky vrstvy.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> U dilatačních prasklin nepoužívej tuhou cementovou stěrku bez armování – při dalším pohybu konstrukce se oprava znovu protrhne na stejném místě.</div>
            </section>

            <section id="penetrace">
              <h2>Penetrace fasády před nátěrem</h2>
              <p>Opravená místa mají odlišnou savost než okolní stará omítka – nová stěrka savě nasává vlhkost z barvy mnohem rychleji. Pokud bys přetřel fasádu bez penetrace, na opravených místech by se mohly objevit světlejší skvrny (tzv. mapy) a nátěr by se mohl dříve odlupovat.</p>
              <p>Penetrační nátěr proto naneseme na celou plochu fasády, nebo alespoň na všechna opravená místa a jejich okolí, a necháme dostatečně zaschnout podle technického listu výrobce (obvykle 6–24 hodin v závislosti na teplotě a vlhkosti). Pro odhad množství potřebné stěrky a penetrace na celou plochu je opět praktická <Link href="/kalkulacky/kolik-sterky" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačka spotřeby stěrky</Link>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Penetraci volej se stejnou nebo kompatibilní řadou produktů jako finální barvu – výrobci fasádních systémů obvykle nabízejí penetraci přímo doporučenou k danému typu nátěru.</div>
            </section>

            <section id="vyber-barvy">
              <h2>Výběr fasádní barvy a aplikace</h2>
              <p>Pro fasády s opravenými prasklinami se nejlépe hodí silikonové nebo silikátové barvy. Mají vysokou paropropustnost (fasáda „dýchá" a nehromadí se pod ní vlhkost) a dostatečnou pružnost, díky které dokážou přemostit drobné mikropraskliny, jež se mohou objevit i po kvalitní opravě.</p>
              <h3>Postup nanášení</h3>
              <ul>
                <li>Naneste první vrstvu barvy válečkem nebo štětcem ve vodorovných pásech</li>
                <li>Nechte zaschnout podle doporučení výrobce (obvykle 4–12 hodin)</li>
                <li>Naneste druhou vrstvu pro rovnoměrný odstín a krytí</li>
                <li>U opravených míst věnujte zvýšenou péči, aby vrstva barvy nebyla tenčí než na okolní ploše</li>
              </ul>
              <p>Fasádu nikdy nenatírejte za přímého slunečního svitu, při teplotách pod 5 °C nebo nad 25 °C, ani před deštěm – barva by mohla zaschnout nerovnoměrně nebo by déšť mohl čerstvý nátěr smyt.</p>
            </section>

            <section id="prevence">
              <h2>Prevence vzniku nových prasklin</h2>
              <p>Oprava sama o sobě nezaručí, že se praskliny v budoucnu znovu neobjeví. Pomáhá zejména:</p>
              <ul>
                <li>Respektovat dilatační spáry v místech přechodu různých konstrukcí a nepřetírat je tuhým materiálem</li>
                <li>Dodržet technologické pauzy mezi jednotlivými vrstvami omítky a stěrky podle technického listu</li>
                <li>Chránit čerstvou omítku a nátěr před přímým sluncem a deštěm při aplikaci i během zrání</li>
                <li>Používat pružné, paropropustné materiály, které lépe snášejí teplotní a vlhkostní pohyby budovy</li>
                <li>Pravidelně kontrolovat fasádu a drobné praskliny opravovat včas, než se rozšíří</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Po dokončení opravy a nátěru si poznamenej datum a místa oprav. Při příští kontrole tak snadno poznáš, zda se na stejném místě prasklina znovu objevila a zda je potřeba řešení posunout na statika.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jak rozeznám vlasovou prasklinu od statické?", a: "Vlasová prasklina je tenčí než 0,5 mm, má nepravidelný tvar a nepokračuje přes spáry zdiva. Statická prasklina bývá širší než 2 mm, má rovný směr (často diagonální od rohů oken a dveří) a postupně se zvětšuje – tu je třeba nechat posoudit statikem." },
                  { q: "Kdy stačí opravit prasklinu tmelem a kdy je nutná armovací síť?", a: "Vlasové a drobné praskliny do 1–2 mm zvládne fasádní akrylátový nebo silikonový tmel. U širších prasklin, opakovaně se objevujících trhlin nebo prasklin podél dilatačních spár je vhodné použít stěrku s vtlačenou armovací (perlinkovou) síťovinou, která trhlinu přemostí a zabrání jejímu opětovnému prokreslení." },
                  { q: "Proč je penetrace fasády před nátěrem důležitá?", a: "Penetrační nátěr zpevní a sjednotí savost povrchu, zejména v místech oprav, kde se setkává původní omítka s novou stěrkou. Bez penetrace barva na opravená místa savě zatáhne, vznikají mapy a nátěr se může předčasně odlupovat." },
                  { q: "Jakou barvu vybrat na fasádu s opravenými prasklinami?", a: "Vhodná je fasádní silikonová nebo silikátová barva s vysokou paropropustností a pružností, která dokáže přemostit drobné mikropraskliny (tzv. trhlinu-mosty). Akrylátové barvy jsou levnější, ale méně pružné a propustné." },
                  { q: "Jak předejít vzniku nových prasklin ve fasádě?", a: "Pomáhá kvalitní podklad s dilatačními spárami v místech přechodu konstrukcí, dostatečná technologická pauza mezi vrstvami omítky, ochrana fasády před přímým sluncem při aplikaci a používání pružných, paropropustných materiálů, které snášejí teplotní a vlhkostní pohyby budovy." },
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
                <li><a href="#typy-prasklin">Typy prasklin ve fasádě</a></li>
                <li><a href="#kdy-statik">Kosmetický problém vs. statik</a></li>
                <li><a href="#oprava-tmelem">Oprava tmelem a sítí</a></li>
                <li><a href="#penetrace">Penetrace před nátěrem</a></li>
                <li><a href="#vyber-barvy">Výběr barvy a aplikace</a></li>
                <li><a href="#prevence">Prevence nových prasklin</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/malovani" className="sidebar-cat-link">🎨 Malování & barvy<span>20 článků →</span></Link>
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
