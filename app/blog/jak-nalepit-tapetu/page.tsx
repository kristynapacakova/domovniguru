import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak nalepit tapetu – kompletní návod krok za krokem",
  description: "Příprava stěny, výpočet potřebného množství, nanesení lepidla a postup lepení tapety bez bublin a švů.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-nalepit-tapetu" },
  openGraph: { title: "Jak nalepit tapetu – kompletní návod krok za krokem", description: "Příprava stěny, výpočet potřebného množství, nanesení lepidla a postup lepení tapety bez bublin a švů.", url: "https://www.domovniguru.cz/blog/jak-nalepit-tapetu", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-24T08:00:00Z", modifiedTime: "2026-06-24T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20nalepit%20tapetu%20%E2%80%93%20kompletn%C3%AD%20n%C3%A1vod%20krok%20za%20krokem&cat=blog", width: 1200, height: 630, alt: "Jak nalepit tapetu – kompletní návod krok za krokem" }] },
  twitter: { card: "summary_large_image", title: "Jak nalepit tapetu – kompletní návod krok za krokem", description: "Příprava stěny, výpočet potřebného množství, nanesení lepidla a postup lepení tapety bez bublin a švů." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/jak-nalepit-tapetu#article", "headline": "Jak nalepit tapetu – kompletní návod krok za krokem", "datePublished": "2026-06-24T08:00:00Z", "dateModified": "2026-06-24T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["jak nalepit tapetu", "lepení tapety návod", "výpočet množství tapety", "lepidlo na tapety", "netkaná tapeta", "vinylová tapeta"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Malování & barvy", "item": "https://www.domovniguru.cz/blog/kategorie/malovani" }, { "@type": "ListItem", "position": 4, "name": "Jak nalepit tapetu", "item": "https://www.domovniguru.cz/blog/jak-nalepit-tapetu" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Kolik tapety potřebuji na pokoj?", "acceptedAnswer": { "@type": "Answer", "text": "Nejprve spočítej obvod místnosti v metrech a vyděl ho šířkou role (obvykle 0,53 m u papírových a vinylových, 1,06 m u netkaných). Tím získáš počet pruhů. Délku pruhu vynásob výškou stěny plus rezerva 10 cm na okraje a u vzorovaných tapet přičti rezervu na slícování vzoru, obvykle 10–20 % navíc." } }, { "@type": "Question", "name": "Musí se stěna před tapetováním penetrovat?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, penetrace je důležitý krok. Zpomaluje savost podkladu, takže lepidlo nezasychá příliš rychle a tapeta se lépe přichytí. Na sádrokarton a nové omítky je penetrace prakticky povinná, na starší vymalovaný povrch alespoň zkontroluj, že nedrolí a dobře drží." } }, { "@type": "Question", "name": "Jak se zbavím bublin pod tapetou?", "acceptedAnswer": { "@type": "Answer", "text": "Drobné bubliny se srovnají tapetovacím kartáčem nebo plastovou špachtlí tahy od středu pruhu k okrajům, dokud nevyteče přebytečné lepidlo a vzduch. Pokud se bublina objeví až po zaschnutí, opatrně do ní žiletkou udělej malý křížový řez, vstříkni trochu lepidla injekční stříkačkou a přitiskni hladítkem." } }, { "@type": "Question", "name": "Jak slícovat vzor tapety na švech?", "acceptedAnswer": { "@type": "Answer", "text": "Vzorované tapety mají na okraji role obvykle vyznačený rapport (opakující se vzor). Druhý a každý další pruh nastřihávej tak, aby vzor navazoval na předchozí pruh ještě na stole, a teprve poté ho přenes na stěnu. Ušetříš lepidlo i nervy, protože případnou chybu opravíš dřív, než pruh přilepíš." } }, { "@type": "Question", "name": "Jak odstraním starou tapetu před nalepením nové?", "acceptedAnswer": { "@type": "Answer", "text": "Starou tapetu nejprve naperforuj tapetovacím jehličkovým válečkem, navlhči teplou vodou s trochou přípravku na odstraňování tapet a po 10–15 minutách stahuj špachtlí. U vícevrstvých nebo vinylových tapet pomůže parní tapetovák. Zbytky lepidla je potřeba omyt a stěnu před novým tapetováním nechat důkladně vyschnout." } }] }] };

const RELATED = [
  { title: "Jak malovat zeď – kompletní průvodce pro začátečníky 2026", href: "/blog/jak-malovat-zed", read: "5 min" },
  { title: "Jak odstranit starou barvu ze zdi", href: "/blog/jak-odstranit-starou-barvu", read: "4 min" },
  { title: "Jak opravit praskliny ve fasádě před nátěrem", href: "/blog/oprava-prasklin-ve-fasade-pred-malovanim", read: "6 min" },
  { title: "Jak namalovat akcentovou stěnu – inspirace a postup krok za krokem", href: "/blog/malovani-akcentove-steny", read: "6 min" },
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
              <Link href="/blog/kategorie/malovani">🎨 Malování & barvy</Link><span className="breadcrumb-sep">/</span>
              <span>Jak nalepit tapetu</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování & barvy</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak nalepit tapetu – kompletní návod krok za krokem</h1>
              <p className="article-lead">Tapetování vypadá jako jednodušší práce než malování, ale opak je pravdou – bez správné přípravy stěny, přesného výpočtu množství a trochy trpělivosti skončíš s bublinami, otevřenými švy nebo nenavazujícím vzorem. Tady je kompletní postup, jak tapetu nalepit pořádně na první pokus.</p>
              <div className="article-meta-row"><span>Aktualizováno: 24. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#mnozstvi">Výpočet potřebného množství</a></li>
                <li><a href="#typy">Typy tapet a jejich vlastnosti</a></li>
                <li><a href="#pripravastena">Příprava a penetrace stěny</a></li>
                <li><a href="#lepidlo">Namíchání a nanesení lepidla</a></li>
                <li><a href="#postup">Postup lepení krok za krokem</a></li>
                <li><a href="#rohy">Rohy, zásuvky a problémová místa</a></li>
                <li><a href="#odstraneni">Jak tapetu později odstranit</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="mnozstvi">
              <h2>Výpočet potřebného množství tapety</h2>
              <p>Než vyrazíš do obchodu, změř si pokoj. Spočítej obvod stěn v metrech (sečti délky všech stěn, které chceš tapetovat) a vyděl ho šířkou role – nejčastěji <strong>0,53 m</strong> u klasických papírových a vinylových tapet, <strong>1,06 m</strong> u netkaných (vlies) tapet ve velké šíři. Výsledek je počet pruhů, které budeš potřebovat.</p>
              <p>Délku jednoho pruhu spočítej jako výšku stěny plus rezerva přibližně <strong>10 cm</strong> nahoře a dole na zarovnání. U tapet s opakujícím se vzorem (rapport) musíš přičíst další rezervu na slícování, obvykle <strong>10–20 %</strong> navíc – informace o velikosti rapportu najdeš na štítku role nebo v dokumentaci výrobku.</p>
              <ul>
                <li><strong>Role papírové/vinylové tapety</strong> – obvykle 10,05 m délky × 0,53 m šířky, tedy asi 5,3 m²</li>
                <li><strong>Role netkané tapety</strong> – často 10 m × 1,06 m, tedy přibližně 10,6 m²</li>
                <li><strong>Odečti otvory</strong> – velká okna a dveře nad cca 1 m² lze od celkové plochy odečíst, malé otvory raději ignoruj kvůli odřezkům</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Vždy kup o jednu roli víc, než kalkulačka vyjde. Tapety se vyrábí v sériích (dye lot) a pozdější dokoupení stejného odstínu může mít drobně jiný tón, který je na stěně vidět.</div>
            </section>

            <section id="typy">
              <h2>Typy tapet a jejich vlastnosti</h2>
              <p>Výběr typu tapety ovlivňuje nejen vzhled, ale i to, jakým způsobem se lepí.</p>
              <h3>Papírová tapeta</h3>
              <p>Nejlevnější a nejjednodušší varianta, ale také nejcitlivější na vlhkost a roztažení při lepení. Lepidlo se nanáší přímo na tapetu, která se pak musí na pár minut „odložit" (necháš ji nasát lepidlo), než ji přiložíš na stěnu.</p>
              <h3>Vinylová tapeta</h3>
              <p>Má papírový nebo textilní podklad s vinylovou vrchní vrstvou – je odolnější vůči otěru a dá se otřít vlhkým hadrem, takže se hodí do kuchyně nebo chodby. Lepidlo se nanáší na stěnu, protože vinylový povrch lepidlo nesaje.</p>
              <h3>Netkaná (vlies) tapeta</h3>
              <p>Dnes nejpoužívanější typ. Lepidlo se nanáší přímo na stěnu, ne na tapetu, takže se nemusí nic „odkládat" a práce je rychlejší. Netkaná tapeta se navíc po zaschnutí téměř nesmršťuje, takže švy zůstávají přesnější, a později se snadno strhává v suchém celém pruhu.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pro první vlastní tapetování zvol raději netkanou tapetu – jednodušší nanášení lepidla i snazší práce se švy ti ušetří spoustu frustrace.</div>
            </section>

            <section id="pripravastena">
              <h2>Příprava a penetrace stěny</h2>
              <p>Výsledek tapetování závisí především na podkladu. Stěna musí být čistá, hladká, suchá a bez nesoudržných míst.</p>
              <ul>
                <li><strong>Odstraň starou tapetu nebo nesoudržné vrstvy barvy</strong> – nová tapeta na starou nikdy nepatří, švy a bubliny se časem propíšou na povrch</li>
                <li><strong>Vyspravuj praskliny a díry</strong> tmelem, po zaschnutí přebrus jemným brusným papírem</li>
                <li><strong>Omyj mastné nebo začouzené plochy</strong>, hlavně v kuchyni a kolem topných těles</li>
                <li><strong>Napenetruj stěnu</strong> – penetrační nátěr zpomalí savost podkladu, takže lepidlo nezasychá příliš rychle a tapeta se k povrchu lépe přichytí; na sádrokarton, novou omítku a OSB desky je penetrace téměř povinná</li>
              </ul>
              <p>Pokud na stěně byla dřív vlhkost nebo plísně, je potřeba problém vyřešit ještě před tapetováním – jinak se škody objeví znovu pod novým povrchem. Více o tom najdeš v článcích o opravě prasklin ve fasádě nebo o odstranění staré barvy.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Penetraci nech zaschnout minimálně 4–6 hodin, ideálně přes noc. Lepení na čerstvě navlhčený podklad zpomaluje zasychání lepidla a zvyšuje riziko bublin.</div>
            </section>

            <section id="lepidlo">
              <h2>Namíchání a nanesení lepidla</h2>
              <p>Lepidlo na tapety se obvykle prodává jako prášek, který se rozmíchává s vodou podle poměru na obalu – přesné dávkování je důležité, řidší lepidlo hůř drží, hustší se obtížně rozetře a může prosvítat skrz tenčí papírové tapety.</p>
              <ul>
                <li><strong>Papírová tapeta</strong> – lepidlo se nanáší válečkem nebo štětcem přímo na rub tapety, pruh se poté přeloží napůl lepenou stranou k sobě a necháš ho 5–10 minut „odpočinout"</li>
                <li><strong>Vinylová a netkaná tapeta</strong> – lepidlo se nanáší přímo na stěnu pomocí válečku, v pruhu o něco širším, než je šířka role</li>
                <li><strong>Speciální lepidlo na netkané tapety</strong> – má vyšší viskozitu a delší dobu zavadnutí, což dává víc času na srovnání pruhu</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Lepidlo namíchej vždy o trochu víc, než plánuješ spotřebovat – dolévání během práce a riziko sražených hrudek v polovičním množství stojí víc času, než kolik ušetříš.</div>
            </section>

            <section id="postup">
              <h2>Postup lepení krok za krokem</h2>
              <p>Lepení vždy začíná od okna nebo nejviditelnějšího rohu místnosti a postupuje se po směru, kterým dopadá denní světlo – švy jsou tak nejméně vidět.</p>
              <ol>
                <li><strong>Vyznač svislou vodicí čáru</strong> vodováhou nebo olovnicí v místě, kde nalepíš první pruh – stěny ani rohy domu nejsou nikdy přesně svislé</li>
                <li><strong>Naneseš lepidlo</strong> na tapetu nebo stěnu podle typu materiálu</li>
                <li><strong>Přilož pruh shora dolů</strong>, nech přesah cca 5–10 cm na stropě a podlaze, který později seřežeš</li>
                <li><strong>Srovnej tapetovacím kartáčem nebo plastovým hladítkem</strong> – tahy veď od středu pruhu směrem k okrajům, aby se vytlačil vzduch i přebytečné lepidlo</li>
                <li><strong>Otři přebytečné lepidlo</strong> čistou vlhkou houbou ještě než zaschne, hlavně na švech a v rozích</li>
                <li><strong>Nalep další pruh</strong> přesně k okraji předchozího, u vzorovaných tapet slícuj vzor ještě na stole před přiložením</li>
                <li><strong>Seřež přesahy</strong> ostrým nožem podél kovového pravítka u stropu, podlahy a okrajů</li>
              </ol>
              <p>Švy by měly k sobě doléhat těsně, ne přes sebe – přeložené švy jsou na světle vidět jako tmavší pruh. U netkaných tapet pomáhá lehké přitlačení válečkem na švy přímo po nalepení.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Během práce nech zavřená okna a dveře – průvan urychluje zasychání lepidla a tapeta se pak hůř posouvá do přesné pozice.</div>
            </section>

            <section id="rohy">
              <h2>Rohy, zásuvky a problémová místa</h2>
              <h3>Vnitřní a vnější rohy</h3>
              <p>Tapeta se v rozích nikdy nelepí jedním kusem přes hranu – stěny nejsou dokonale rovné a pruh by se zvlnil. Pruh doveď do rohu s přesahem 1–2 cm na druhou stěnu, přitiskni a přeřízni svisle žiletkou. Druhý pruh nalep s malým přesahem přes ten první tak, aby zakryl spoj.</p>
              <h3>Zásuvky a vypínače</h3>
              <p>Před tapetováním vždy vypni jistič dané místnosti. Tapetu přelep přes celou zásuvku, poté udělej diagonální řezy od středu rámečku směrem k rohům a přebytečný materiál ustřihni tak, aby těsně doléhal k rámečku. Po zaschnutí lepidla rámeček zašroubuj zpět.</p>
              <h3>Radiátory a topná tělesa</h3>
              <p>Pokud nejde radiátor sundat, tapetu nastřihni a protáhni za něj s pomocí dlouhého hladítka nebo speciální tapetovací špachtle s prodlouženou rukojetí.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Na ostré řezy kolem zásuvek a v rozích používej vždy novou čepel – tupý nůž trhá tapetu místo čistého řezu a výsledek je vidět.</div>
            </section>

            <section id="odstraneni">
              <h2>Jak tapetu později odstranit</h2>
              <p>Až bude jednou potřeba tapetu sundat, postup se liší podle typu.</p>
              <ul>
                <li><strong>Naperforuj povrch</strong> jehličkovým tapetovacím válečkem, aby se k lepidlu pod tapetou dostala voda</li>
                <li><strong>Navlhči teplou vodou</strong> s přídavkem speciálního přípravku na odstraňování tapet, který rozpouští lepidlo</li>
                <li><strong>Po 10–15 minutách</strong> působení začni stahovat širokou špachtlí od rohu</li>
                <li><strong>Netkané tapety</strong> se často dají strhnout v suchém stavu celým pruhem, protože vrchní dekorační vrstva se odlepí od podkladní netkané textilie</li>
                <li><strong>Zbytky lepidla</strong> po stažení omyj vlhkou houbou a stěnu před dalším použitím nech důkladně proschnout</li>
              </ul>
              <p>Tento krok je užitečné znát už při výběru nové tapety – pokud počítáš s budoucí změnou výzdoby, netkaná tapeta ti práci výrazně zjednoduší.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Kolik tapety potřebuji na pokoj?", a: "Nejprve spočítej obvod místnosti v metrech a vyděl ho šířkou role (obvykle 0,53 m u papírových a vinylových, 1,06 m u netkaných). Tím získáš počet pruhů. Délku pruhu vynásob výškou stěny plus rezerva 10 cm na okraje a u vzorovaných tapet přičti rezervu na slícování vzoru, obvykle 10–20 % navíc." },
                  { q: "Musí se stěna před tapetováním penetrovat?", a: "Ano, penetrace je důležitý krok. Zpomaluje savost podkladu, takže lepidlo nezasychá příliš rychle a tapeta se lépe přichytí. Na sádrokarton a nové omítky je penetrace prakticky povinná, na starší vymalovaný povrch alespoň zkontroluj, že nedrolí a dobře drží." },
                  { q: "Jak se zbavím bublin pod tapetou?", a: "Drobné bubliny se srovnají tapetovacím kartáčem nebo plastovou špachtlí tahy od středu pruhu k okrajům, dokud nevyteče přebytečné lepidlo a vzduch. Pokud se bublina objeví až po zaschnutí, opatrně do ní žiletkou udělej malý křížový řez, vstříkni trochu lepidla injekční stříkačkou a přitiskni hladítkem." },
                  { q: "Jak slícovat vzor tapety na švech?", a: "Vzorované tapety mají na okraji role obvykle vyznačený rapport (opakující se vzor). Druhý a každý další pruh nastřihávej tak, aby vzor navazoval na předchozí pruh ještě na stole, a teprve poté ho přenes na stěnu. Ušetříš lepidlo i nervy, protože případnou chybu opravíš dřív, než pruh přilepíš." },
                  { q: "Jak odstraním starou tapetu před nalepením nové?", a: "Starou tapetu nejprve naperforuj tapetovacím jehličkovým válečkem, navlhči teplou vodou s trochou přípravku na odstraňování tapet a po 10–15 minutách stahuj špachtlí. U vícevrstvých nebo vinylových tapet pomůže parní tapetovák. Zbytky lepidla je potřeba omyt a stěnu před novým tapetováním nechat důkladně vyschnout." },
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
                <li><a href="#mnozstvi">Výpočet množství</a></li>
                <li><a href="#typy">Typy tapet</a></li>
                <li><a href="#pripravastena">Příprava stěny</a></li>
                <li><a href="#lepidlo">Lepidlo</a></li>
                <li><a href="#postup">Postup lepení</a></li>
                <li><a href="#rohy">Rohy a zásuvky</a></li>
                <li><a href="#odstraneni">Odstranění tapety</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/malovani" className="sidebar-cat-link">🎨 Malování & barvy<span>26 článků →</span></Link>
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
