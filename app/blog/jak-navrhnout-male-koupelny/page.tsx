import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak navrhnout malou koupelnu, aby působila větší",
  description: "Tipy na rozvržení, barvy, osvětlení a úložné prostory v malé koupelně – jak vizuálně i prakticky zvětšit prostor.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-navrhnout-male-koupelny" },
  openGraph: { title: "Jak navrhnout malou koupelnu, aby působila větší", description: "Tipy na rozvržení, barvy, osvětlení a úložné prostory v malé koupelně – jak vizuálně i prakticky zvětšit prostor.", url: "https://www.domovniguru.cz/blog/jak-navrhnout-male-koupelny", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-12T08:00:00Z", modifiedTime: "2026-06-12T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20navrhnout%20malou%20koupelnu%2C%20aby%20p%C5%AFsobila%20v%C4%9Bt%C5%A1%C3%AD&cat=blog", width: 1200, height: 630, alt: "Jak navrhnout malou koupelnu, aby působila větší" }] },
  twitter: { card: "summary_large_image", title: "Jak navrhnout malou koupelnu, aby působila větší", description: "Tipy na rozvržení, barvy, osvětlení a úložné prostory v malé koupelně." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/jak-navrhnout-male-koupelny#article", "headline": "Jak navrhnout malou koupelnu, aby působila větší", "datePublished": "2026-06-12T08:00:00Z", "dateModified": "2026-06-12T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["malá koupelna", "návrh koupelny", "rozvržení koupelny", "vizuální zvětšení prostoru", "úložné prostory koupelna"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Stěhování & rekonstrukce", "item": "https://www.domovniguru.cz/blog/kategorie/stehovani" }, { "@type": "ListItem", "position": 4, "name": "Jak navrhnout malou koupelnu, aby působila větší", "item": "https://www.domovniguru.cz/blog/jak-navrhnout-male-koupelny" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jak vizuálně zvětšit malou koupelnu?", "acceptedAnswer": { "@type": "Answer", "text": "Pomáhá kombinace světlých barev, velkoformátové dlažby, skleněných ploch (sprchové zástěny bez rámu), velkého zrcadla a dobře umístěného osvětlení. Důležité je také minimalizovat počet vizuálních bariér – například nízkou vanovou zástěnu nahradit prosklenou stěnou bez rámu." } }, { "@type": "Question", "name": "Vana, nebo sprchový kout do malé koupelny?", "acceptedAnswer": { "@type": "Answer", "text": "Pro koupelny do cca 4–5 m² se obecně doporučuje sprchový kout – zabere méně místa, opticky prostor odlehčí a umožní lepší rozmístění ostatní sanity. Vana se vyplatí jen pokud má rodina malé děti nebo koupelnu sdílí jen jedna osoba s dostatkem místa." } }, { "@type": "Question", "name": "Jaká je minimální velikost koupelny s vanou, umyvadlem a WC?", "acceptedAnswer": { "@type": "Answer", "text": "Reálné minimum pro vanu (150–170 cm), umyvadlo a WC je zhruba 4,5–5 m², při pečlivém rozvržení a využití rohových nebo zkrácených prvků. Pod 4 m² je téměř vždy lepší volbou sprchový kout." } }, { "@type": "Question", "name": "Jaké barvy jsou vhodné do malé koupelny?", "acceptedAnswer": { "@type": "Answer", "text": "Nejlépe funguje jedna dominantní světlá barva (bílá, světle šedá, krémová) doplněná maximálně jedním sytějším akcentem – například na jedné stěně nebo v doplňcích. Velké kontrasty a mnoho různých odstínů prostor naopak opticky zmenšují a rozbíjejí." } }, { "@type": "Question", "name": "Jak vyřešit úložné prostory v malé koupelně?", "acceptedAnswer": { "@type": "Answer", "text": "Osvědčují se závěsné skříňky a police, výklenky (niše) v obkladu, prostor nad WC a vestavěné regály v nikách u sprchy. Zvedněte skříňky nad podlahu alespoň o 10–15 cm – vizuálně to prostor odlehčí a usnadní úklid." } }] }] };

const RELATED = [
  { title: "Sprchový kout nebo vana – co se vyplatí v malé koupelně?", href: "/blog/sprchovy-kout-nebo-vana", read: "5 min" },
  { title: "Jak vybrat dlažbu do koupelny – protiskluz, formát a spárování", href: "/blog/jak-vybrat-dlazbu-do-koupelny", read: "6 min" },
  { title: "Rekonstrukce koupelny – průvodce, ceny a pořadí prací", href: "/blog/rekonstrukce-koupelny-pruvodce", read: "8 min" },
  { title: "Jaká barva na strop a do koupelny? Praktický přehled", href: "/blog/barva-na-strop-a-do-koupelny", read: "5 min" },
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
              <span>Jak navrhnout malou koupelnu, aby působila větší</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏠 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 7 min čtení</span>
              </div>
              <h1 className="article-h1">Jak navrhnout malou koupelnu, aby působila větší</h1>
              <p className="article-lead">Malá koupelna nemusí působit stísněně. Se správným rozvržením, barvami, osvětlením a chytrým úložným prostorem dokážeš i pár čtverečních metrů přeměnit na místo, kde se budeš cítit pohodlně. Ukážeme ti konkrétní triky, které skutečně fungují.</p>
              <div className="article-meta-row"><span>Aktualizováno: 12. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#rozvrzeni">Rozvržení a umístění sanity</a></li>
                <li><a href="#sprcha-vana">Sprchový kout vs. vana</a></li>
                <li><a href="#barvy-obklady">Barvy, obklady a dlažba</a></li>
                <li><a href="#osvetleni">Osvětlení a zrcadla</a></li>
                <li><a href="#uloznost">Úložné prostory</a></li>
                <li><a href="#tipy">Praktické tipy a chyby</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="rozvrzeni">
              <h2>1. Rozvržení a umístění sanity v malém prostoru</h2>
              <p>Základem každé úspěšné malé koupelny je promyšlené rozvržení. Než se pustíš do výběru obkladů nebo barev, je potřeba vyřešit, kam umístit vanu nebo sprchu, umyvadlo a WC tak, aby na sebe navazovaly a zároveň zůstal volný manipulační prostor.</p>
              <p>Pokud plánuješ kompletní rekonstrukci, vyplatí se nejprve si spočítat orientační rozpočet pomocí <Link href="/kalkulacky/cena-rekonstrukce-koupelny-odhad" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačky ceny rekonstrukce koupelny</Link> – ukáže ti, kolik prostoru pro jednotlivé varianty máš finančně k dispozici.</p>
              <ul>
                <li><strong>Diagonální nebo podélné rozmístění</strong> – snaž se sanitu řadit podél jedné nebo dvou stěn, ne do středu místnosti. Volný střed prostor opticky i prakticky zvětší.</li>
                <li><strong>Umyvadlo blíž ke dveřím</strong> – nejčastěji používaný prvek by měl být po ruce hned po vstupu, aby se nekřížily cesty k WC nebo sprše.</li>
                <li><strong>Posuvné dveře nebo dveře dovnitř</strong> – klasické otevírací dveře "ukrojí" velký kus podlahy. Posuvné dveře nebo dveře otevírané do chodby ušetří až 1 m² volné plochy.</li>
                <li><strong>Rohová sanita</strong> – rohové umyvadlo nebo rohový sprchový kout dokáže efektivně využít místo, které by jinak zůstalo nevyužité.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Před finálním rozhodnutím si rozvržení vyznač lepicí páskou přímo na podlahu v reálné velikosti. Často se ukáže, že "ideální" plánek na papíře v realitě nefunguje.</div>
            </section>

            <section id="sprcha-vana">
              <h2>2. Sprchový kout vs. vana – co se vyplatí v malé koupelně</h2>
              <p>Jedna z nejdůležitějších otázek při návrhu malé koupelny je, zda zachovat vanu, nebo ji nahradit sprchovým koutem. Vana standardní délky (160–170 cm) zabere podstatnou část malého prostoru a často omezí možnosti pro umístění dalších prvků.</p>
              <p>Sprchový kout naproti tomu může mít i jen 80×80 cm, lze ho umístit do rohu a s prosklenou stěnou bez rámu opticky prostor odlehčí. Pokud řešíš, co se vyplatí konkrétně u vás, podívej se na náš samostatný článek <Link href="/blog/sprchovy-kout-nebo-vana">Sprchový kout nebo vana – co se vyplatí v malé koupelně?</Link>, kde rozebíráme cenu, spotřebu vody i komfort.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Kritérium</th><th>Sprchový kout</th><th>Vana</th></tr></thead>
                  <tbody>
                    <tr><td>Minimální půdorys</td><td>od 80×80 cm</td><td>od 150×70 cm</td></tr>
                    <tr><td>Vizuální dojem</td><td>Lehčí, prosklené stěny</td><td>Hmotnější, ohraničený blok</td></tr>
                    <tr><td>Spotřeba vody</td><td>nižší</td><td>vyšší</td></tr>
                    <tr><td>Vhodnost pro malé děti</td><td>omezená</td><td>velmi dobrá</td></tr>
                    <tr><td>Cena instalace</td><td>nižší až střední</td><td>střední až vyšší</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Pokud v koupelně musí zůstat vana (například z důvodu malých dětí), zvol verzi se zkrácenou délkou (120–140 cm) nebo asymetrický tvar, který lépe využije rohový prostor.</p>
            </section>

            <section id="barvy-obklady">
              <h2>3. Barvy, obklady a dlažba pro vizuální zvětšení</h2>
              <p>Barvy a obklady mají na vnímání velikosti prostoru obrovský vliv. Světlé, jednotné odstíny stěn i podlahy prostor opticky propojí a "rozšíří" pohled. Naopak tmavé barvy nebo příliš mnoho různých vzorů a materiálů malou koupelnu vizuálně zmenší a rozbijí.</p>
              <ul>
                <li><strong>Velkoformátová dlažba</strong> – dlaždice 60×60 cm nebo větší vytváří méně spárování, takže podlaha působí souvislejší a klidnější.</li>
                <li><strong>Stejná dlažba na podlaze i části stěn</strong> – pokud obklad plynule navazuje na dlažbu bez výrazného přechodu, prostor opticky splyne.</li>
                <li><strong>Diagonální nebo svislé pokládka</strong> – diagonální pokládka dlažby může opticky zvětšit půdorys, svislé formáty obkladů naopak zvyšují stropy.</li>
                <li><strong>Jeden dominantní akcent</strong> – pokud chceš barevný akcent, vyber jen jednu stěnu nebo jeden prvek (např. obklad za umyvadlem), zbytek prostoru zůstane neutrální.</li>
              </ul>
              <p>Při výběru materiálu se vyplatí dopředu odhadnout potřebné množství a rozpočet – pomůže ti k tomu <Link href="/kalkulacky/kolik-dlazby" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačka na výpočet potřeby dlažby</Link>. Konkrétní typy, formáty a protiskluzové třídy dlažby do koupelny pak najdeš v článku <Link href="/blog/jak-vybrat-dlazbu-do-koupelny">Jak vybrat dlažbu do koupelny – protiskluz, formát a spárování</Link>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Spárovací hmotu vol v podobném odstínu jako dlažbu – kontrastní spáry vytvářejí mřížkový efekt, který prostor opticky rozdrobí a zmenší.</div>
            </section>

            <section id="osvetleni">
              <h2>4. Osvětlení a zrcadla</h2>
              <p>Dobré osvětlení dokáže s vnímáním velikosti koupelny udělat malé zázraky. Cílem je rozložit světlo rovnoměrně po celé místnosti a vyhnout se tvrdým stínům, které prostor opticky rozdělují.</p>
              <ul>
                <li><strong>Kombinace více zdrojů světla</strong> – stropní svítidlo doplň bodovým osvětlením kolem zrcadla a případně i nepřímým LED páskem podél skříněk nebo niky.</li>
                <li><strong>Velké zrcadlo nad celou šířkou umyvadla</strong> – zrcadlo od stěny ke stěně zdvojnásobí vnímanou hloubku prostoru a odráží přicházející světlo.</li>
                <li><strong>Podsvícené zrcadlo</strong> – zrcadla s integrovaným LED osvětlením vytvářejí příjemné rozptýlené světlo bez ostrých stínů na obličeji.</li>
                <li><strong>Teplota světla 3000–4000 K</strong> – neutrální až lehce teplé světlo působí v koupelně příjemně a zároveň věrně zobrazuje barvy.</li>
                <li><strong>Využij denní světlo</strong> – pokud má koupelna okno, nezakrývej ho těžkými závěsy. Matná fólie na skle zajistí soukromí bez ztráty světla.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Lesklé povrchy (glazovaná dlažba, lakované skříňky, skleněné zástěny) odrážejí světlo a opticky prostor "rozsvítí" – v malé koupelně se proto vyplatí dát matným povrchům přednost jen u podlahy, kde řešíš protiskluznost.</div>
            </section>

            <section id="uloznost">
              <h2>5. Úložné prostory a skryté řešení</h2>
              <p>V malé koupelně je nedostatek úložného prostoru častým problémem. Řešením je hledat místo tam, kde by jinak zůstalo nevyužité – ve výklenkách, nad sanitou nebo v podobě závěsných prvků, které neukrajují z podlahové plochy.</p>
              <ul>
                <li><strong>Niky v obkladu</strong> – výklenek vyfrézovaný do stěny u sprchy nebo vany poskytne místo na šampony a kosmetiku bez nutnosti polic.</li>
                <li><strong>Závěsné skříňky</strong> – skříňka pod umyvadlem zavěšená 10–15 cm nad podlahou opticky odlehčí prostor a zjednoduší úklid.</li>
                <li><strong>Prostor nad WC</strong> – vysoká úzká skříňka nebo otevřené police nad záchodem využijí jinak prázdnou stěnu.</li>
                <li><strong>Zrcadlová skříňka</strong> – kombinace zrcadla a úložného prostoru ušetří místo, které by jinak zabraly dva samostatné prvky.</li>
                <li><strong>Vestavěné regály do sprchového koutu</strong> – police vyfrézované přímo do zdiny u sprchy nahradí volně stojící košíky a poličky.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Než začneš kupovat nové skříňky, projdi, co skutečně v koupelně potřebuješ mít po ruce každý den. Méně předmětů na viditelných plochách = vizuálně větší prostor.</div>
            </section>

            <section id="tipy">
              <h2>6. Praktické tipy a časté chyby</h2>
              <p>Na závěr shrnutí nejčastějších chyb, kterým se při návrhu malé koupelny vyplatí předejít, a pár praktických doporučení navíc.</p>
              <ul>
                <li><strong>Příliš mnoho barev a materiálů</strong> – kombinace tří a více odstínů nebo materiálů (dřevo, kámen, barevný obklad, vzorovaná dlažba) malou koupelnu vizuálně rozdrobí. Drž se maximálně dvou hlavních materiálů.</li>
                <li><strong>Malé zrcadlo</strong> – zrcadlo o velikosti pouhého umyvadla je promarněná příležitost. Vždy zvol co největší rozměr, který se na danou stěnu vejde.</li>
                <li><strong>Nízké osazení sanity bez konzultace</strong> – výška umyvadla, WC i sprchové hlavice by měla odpovídat výšce uživatelů domácnosti, ne jen "standardu". Špatně zvolená výška se těžko opravuje.</li>
                <li><strong>Podcenění větrání</strong> – v malém prostoru se vlhkost a zápach koncentrují rychleji. Kvalitní ventilátor s časovým doběhem je investice, která se vyplatí.</li>
                <li><strong>Zanedbaná hydroizolace</strong> – v malé koupelně se voda dostává všude. Hydroizolace pod dlažbou by měla být samozřejmostí, ne volitelnou položkou.</li>
                <li><strong>Plánování bez rezervy v rozpočtu</strong> – při rekonstrukci malé koupelny se často objeví skryté problémy (staré rozvody, plíseň pod obkladem). Počítej s rezervou alespoň 10–15 % rozpočtu.</li>
              </ul>
              <p>Pokud se chystáš na celkovou rekonstrukci, doporučujeme projít si i náš podrobný <Link href="/blog/rekonstrukce-koupelny-pruvodce">průvodce rekonstrukcí koupelny</Link>, který popisuje správné pořadí prací a reálné ceny. A nezapomeň ani na strop – vhodnou barvu a typ nátěru řeší článek <Link href="/blog/barva-na-strop-a-do-koupelny">Jaká barva na strop a do koupelny?</Link></p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jak vizuálně zvětšit malou koupelnu?", a: "Pomáhá kombinace světlých barev, velkoformátové dlažby, skleněných ploch (sprchové zástěny bez rámu), velkého zrcadla a dobře umístěného osvětlení. Důležité je také minimalizovat počet vizuálních bariér – například nízkou vanovou zástěnu nahradit prosklenou stěnou bez rámu." },
                  { q: "Vana, nebo sprchový kout do malé koupelny?", a: "Pro koupelny do cca 4–5 m² se obecně doporučuje sprchový kout – zabere méně místa, opticky prostor odlehčí a umožní lepší rozmístění ostatní sanity. Vana se vyplatí jen pokud má rodina malé děti nebo koupelnu sdílí jen jedna osoba s dostatkem místa." },
                  { q: "Jaká je minimální velikost koupelny s vanou, umyvadlem a WC?", a: "Reálné minimum pro vanu (150–170 cm), umyvadlo a WC je zhruba 4,5–5 m², při pečlivém rozvržení a využití rohových nebo zkrácených prvků. Pod 4 m² je téměř vždy lepší volbou sprchový kout." },
                  { q: "Jaké barvy jsou vhodné do malé koupelny?", a: "Nejlépe funguje jedna dominantní světlá barva (bílá, světle šedá, krémová) doplněná maximálně jedním sytějším akcentem – například na jedné stěně nebo v doplňcích. Velké kontrasty a mnoho různých odstínů prostor naopak opticky zmenšují a rozbíjejí." },
                  { q: "Jak vyřešit úložné prostory v malé koupelně?", a: "Osvědčují se závěsné skříňky a police, výklenky (niše) v obkladu, prostor nad WC a vestavěné regály v nikách u sprchy. Zvedněte skříňky nad podlahu alespoň o 10–15 cm – vizuálně to prostor odlehčí a usnadní úklid." },
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
                <li><a href="#rozvrzeni">Rozvržení a umístění sanity</a></li>
                <li><a href="#sprcha-vana">Sprchový kout vs. vana</a></li>
                <li><a href="#barvy-obklady">Barvy, obklady a dlažba</a></li>
                <li><a href="#osvetleni">Osvětlení a zrcadla</a></li>
                <li><a href="#uloznost">Úložné prostory</a></li>
                <li><a href="#tipy">Praktické tipy a chyby</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/stehovani" className="sidebar-cat-link">🏠 Stěhování & rekonstrukce<span>Více článků →</span></Link>
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
