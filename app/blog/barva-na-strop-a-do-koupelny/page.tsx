import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jaká barva na strop a do koupelny? Praktický přehled",
  description: "Proč potřebuje strop jinou barvu než stěny a jak vybrat omyvatelnou barvu odolnou vlhkosti do koupelny.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/barva-na-strop-a-do-koupelny" },
  openGraph: { title: "Jaká barva na strop a do koupelny?", description: "Proč potřebuje strop jinou barvu než stěny a jak vybrat omyvatelnou barvu odolnou vlhkosti do koupelny.", url: "https://www.domovniguru.cz/blog/barva-na-strop-a-do-koupelny", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-12T08:00:00Z", modifiedTime: "2026-06-12T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%C3%A1%20barva%20na%20strop%20a%20do%20koupelny%3F%20Praktick%C3%BD%20p%C5%99ehled&cat=blog", width: 1200, height: 630, alt: "Jaká barva na strop a do koupelny? Praktický přehled" }] },
  twitter: { card: "summary_large_image", title: "Jaká barva na strop a do koupelny?", description: "Proč potřebuje strop jinou barvu než stěny a jak vybrat omyvatelnou barvu odolnou vlhkosti do koupelny." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/barva-na-strop-a-do-koupelny#article", "headline": "Jaká barva na strop a do koupelny? Praktický přehled", "datePublished": "2026-06-12T08:00:00Z", "dateModified": "2026-06-12T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["barva na strop", "stropní barva", "barva do koupelny", "omyvatelná barva", "barva proti plísni"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Malování & barvy", "item": "https://www.domovniguru.cz/blog/kategorie/malovani" }, { "@type": "ListItem", "position": 4, "name": "Barva na strop a do koupelny", "item": "https://www.domovniguru.cz/blog/barva-na-strop-a-do-koupelny" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Musím na strop kupovat speciální stropní barvu?", "acceptedAnswer": { "@type": "Answer", "text": "Nemusíš, ale vyplatí se to. Stropní barvy mají vyšší bělost, nižší lesk a hustší konzistenci, takže méně stříkají a kryjí na méně vrstev. Běžnou bílou barvou na zeď strop natřeš taky, ale výsledek bývá méně rovnoměrný a se znatelnějším odstínem do žluta nebo šeda." } }, { "@type": "Question", "name": "Jaká barva je nejlepší do koupelny bez okna?", "acceptedAnswer": { "@type": "Answer", "text": "Do koupelny bez okna a se slabým odvětráním vybírej speciální koupelnové barvy s antibakteriální a protiplísňovou přísadou, vysokou odolností proti otěru a kondenzaci. Stěny u vany a u umyvadla je navíc dobré doplnit obkladem nebo umyvatelným panelem, protože i nejlepší barva přímý kontakt s vodou dlouhodobě nevydrží." } }, { "@type": "Question", "name": "Je lepší tmavá nebo světlá barva do malé koupelny?", "acceptedAnswer": { "@type": "Answer", "text": "Do malé koupelny bez denního světla se obecně doporučují světlé odstíny, protože prostor opticky zvětší a rozjasní. Tmavá barva ale není zakázaná – pokud koupelna má dostatek umělého osvětlení, tmavý odstín na jedné stěně nebo na stropě může dodat hloubku a útulnost, aniž by prostor opticky zmenšil tolik, jak se obvykle čeká." } }, { "@type": "Question", "name": "Vydrží malba v koupelně, nebo je lepší obklad?", "acceptedAnswer": { "@type": "Answer", "text": "Kvalitní koupelnová barva s vysokou odolností proti vlhkosti vydrží roky, pokud koupelna má funkční odvětrání. Obklad je odolnější v přímém kontaktu s vodou (kolem vany, sprchy, umyvadla), barva se naopak hodí na plochy mimo stříkající zónu – stropy, horní pásy stěn, výklenky. Kombinace obkladu dole a barvy nahoře je nejběžnější a nejekonomičtější řešení." } }, { "@type": "Question", "name": "Jak velký rozdíl je mezi matnou stropní barvou a barvou na stěny?", "acceptedAnswer": { "@type": "Answer", "text": "Hlavní rozdíl je v lesku a krycí schopnosti. Stropní barvy mají téměř nulový odraz lesku (matný až hluboce matný povrch), což skryje drobné nerovnosti stropu a zabrání odlescům od světel. Barvy na stěny bývají k dispozici i v pololesku nebo satinu pro snazší údržbu, ale na stropě by lesklejší povrch zvýraznil každou nerovnost a stíny." } }] }] };

const RELATED = [
  { title: "Jak malovat strop bez šmouh", href: "/blog/jak-malovat-strop", read: "6 min" },
  { title: "Jakou barvu do vlhkých prostor – koupelna, kuchyň, sklep", href: "/blog/barva-do-vlhkych-prostoru", read: "7 min" },
  { title: "Jak se zbavit plísně na zdi natrvalo", href: "/blog/jak-odstranit-plisen-na-zdi", read: "10 min" },
  { title: "Kalkulačka: kolik barvy potřebuji?", href: "/kalkulacky/kolik-barvy", read: "1 min" },
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
              <span>Barva na strop a do koupelny</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování & barvy</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jaká barva na strop a do koupelny? Praktický přehled</h1>
              <p className="article-lead">Strop a koupelna jsou dvě plochy, kde se obyčejná barva na zeď neosvědčí. Strop potřebuje vyšší bělost a nižší lesk, koupelna odolnost proti vlhkosti a plísni. V tomto přehledu si vybereš konkrétní typ barvy pro oba případy – bez zbytečné teorie o technice natírání.</p>
              <div className="article-meta-row"><span>Aktualizováno: 12. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#proc-stropni-barva">Proč má strop vlastní barvu</a></li>
                <li><a href="#matnost-vs-stena">Matná stropní barva vs. barva na stěny</a></li>
                <li><a href="#koupelna-vetrani">Barva do koupelny podle odvětrání</a></li>
                <li><a href="#pridavne-latky">Antibakteriální a protiplísňové přísady</a></li>
                <li><a href="#odstiny">Barevné odstíny do malé koupelny</a></li>
                <li><a href="#kombinace-obklad">Kombinace barvy a obkladu</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="proc-stropni-barva">
              <h2>Proč má strop vlastní barvu</h2>
              <p>Strop je nejvíce osvětlená plocha v místnosti – dopadá na něj světlo ze stropních svítidel, lustru i okna, a každá nerovnost nebo barevný rozdíl se na něm projeví víc než na stěnách. Proto se pro strop vyrábí samostatná kategorie barev, tzv. stropní barvy, které se liší ve třech věcech: bělosti, odrazivosti lesku a způsobu nanášení.</p>
              <p>Stropní barvy mají typicky vyšší stupeň bělosti než běžné interiérové barvy na stěny – díky tomu strop opticky zvyšuje strop a sjednocuje barevný tón i v rozích, kam dopadá méně světla. Druhá výhoda je hustší, „netekoucí" konzistence, která omezuje stříkání a odkapávání při natírání nad hlavou – to je sice spíš otázka techniky, ale samotná barva to výrazně ovlivňuje. Pokud tě zajímá i postup natírání, návod najdeš v článku <Link href="/blog/jak-malovat-strop" style={{ color: "#2a6496", textDecoration: "underline" }}>jak malovat strop bez šmouh</Link>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud má byt nižší stropy, vyber stropní barvu s co nejvyšší bělostí (95 % a více). Bílý strop opticky zvedne výšku místnosti víc, než by se zdálo.</div>
            </section>

            <section id="matnost-vs-stena">
              <h2>Matná stropní barva vs. barva na stěny</h2>
              <p>Hlavní rozdíl mezi stropní barvou a barvou na stěny je v lesku. Stropní barvy jsou prakticky vždy v hluboce matné nebo matné úpravě, zatímco barvy na stěny se nabízejí i v pololesku, satinu nebo dokonce lesku.</p>
              <p>Důvod je jednoduchý: jakýkoliv lesk na stropě se chová jako zrcadlo pro bodová světla a zvýrazňuje každou drobnou nerovnost, vlnku nebo stopu po válečku. Matný povrch naopak světlo rozptyluje a nedokonalosti opticky „schová". Na stěnách je to naopak – tam se často oceňuje lehký satin nebo pololesk, protože se snáz udržuje a otírá.</p>
              <ul>
                <li><strong>Strop:</strong> hluboce matná nebo matná stropní barva, vysoká bělost, hustší konzistence</li>
                <li><strong>Stěny v obytných prostorech:</strong> matná až satinová barva, širší škála odstínů</li>
                <li><strong>Stěny v koupelně a kuchyni:</strong> satin až pololesk pro snadné setření</li>
              </ul>
              <p>Pokud chceš na strop použít stejnou barvu jako na stěny (například kvůli jednomu kýblu navíc), zvol nejmatnější variantu, kterou výrobce nabízí, a počítej s tím, že krytí na stropě bude o trochu horší než u specializované stropní barvy.</p>
            </section>

            <section id="koupelna-vetrani">
              <h2>Barva do koupelny podle odvětrání</h2>
              <p>Výběr barvy do koupelny závisí hlavně na tom, jak dobře se prostor odvětrává. Koupelna s oknem nebo funkčním nuceným odvětráním (ventilátorem napojeným na spínač světla nebo vlhkostní senzor) má mnohem nižší riziko dlouhodobého zvlhčení stěn než koupelna bez okna, kde se vlhký vzduch po koupání nebo sprchování zdrží v místnosti déle.</p>
              <h3>Koupelna s dobrým odvětráním</h3>
              <p>Pokud se vlhkost po sprchování rychle odvede, postačí kvalitní omyvatelná interiérová barva s deklarovanou odolností proti vlhkosti – obvykle se značí jako „do koupelen a kuchyní" nebo „vysoce odolná proti otěru". Takové barvy snesou pravidelné utírání hubkou a běžnou kondenzaci na stěnách.</p>
              <h3>Koupelna bez okna nebo se slabým odvětráním</h3>
              <p>Tady je potřeba sáhnout po specializované koupelnové barvě s vyšší paropropustností a přísadami proti plísním a bakteriím (viz další sekce). Tyto barvy bývají dražší, ale dlouhodobě se vyplatí – odpadá opakované odstraňování plísně a přemalovávání. Pokud už se plíseň objevila, nejdřív ji potřeba řešit u zdroje – postup najdeš v článku <Link href="/blog/jak-odstranit-plisen-na-zdi" style={{ color: "#2a6496", textDecoration: "underline" }}>jak se zbavit plísně na zdi natrvalo</Link>, samotná barva plíseň nevyřeší, pokud zůstane příčina vlhkosti.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> I nejlepší barva nenahradí funkční větrání. V koupelně bez okna je nucené odvětrání investice, která se vrátí v podobě delší životnosti malby i obkladů.</div>
            </section>

            <section id="pridavne-latky">
              <h2>Antibakteriální a protiplísňové přísady</h2>
              <p>Koupelnové a kuchyňské barvy se od běžných liší přidanými látkami, které brzdí růst plísní, řas a bakterií na povrchu nátěru. Na obalu je najdeš pod různými označeními – „antibakteriální", „s fungicidní přísadou", „proti plísni a řasám" nebo podobně.</p>
              <p>Tyto přísady fungují na principu zpomalení růstu mikroorganismů na povrchu barvy, nikoliv jako trvalá bariéra – pokud je za stěnou skutečný problém s vlhkostí (zatékání, kondenzace v konstrukci), přísada to oddálí, ale nevyřeší. Detailní rozbor toho, jaká barva se hodí do kterého vlhkého prostoru, najdeš v článku <Link href="/blog/barva-do-vlhkych-prostoru" style={{ color: "#2a6496", textDecoration: "underline" }}>jakou barvu do vlhkých prostor</Link>.</p>
              <p>Při výběru se vyplatí zkontrolovat dvě věci:</p>
              <ul>
                <li><strong>Paropropustnost</strong> – barva by měla umožnit zdi „dýchat", aby se vlhkost mohla postupně odvádět, a ne hromadit pod nátěrem</li>
                <li><strong>Odolnost proti otěru a omyvatelnost</strong> – udává se v třídách (např. třída 1 = nejvyšší odolnost), důležité pro místa, kde se stěna otírá nebo čistí</li>
              </ul>
            </section>

            <section id="odstiny">
              <h2>Barevné odstíny do malé koupelny</h2>
              <p>Malé koupelny bez okna trpí často dvěma věcmi najednou – nedostatkem přirozeného světla a stísněným prostorem. Volba odstínu může oba problémy zmírnit, nebo naopak zhoršit.</p>
              <h3>Světlé odstíny</h3>
              <p>Bílá, světle šedá, krémová nebo pastelové tóny odráží více umělého světla a opticky koupelnu zvětšují. Jsou bezpečnou volbou, pokud chceš prostor rozjasnit a působit čistě a vzdušně. Nevýhodou je, že na světlých plochách se víc projeví vodní kameny a šmouhy.</p>
              <h3>Tmavé odstíny</h3>
              <p>Tmavě modrá, zelená nebo antracitová mohou v malé koupelně s dostatečným osvětlením vypadat překvapivě dobře – dodají hloubku a luxusnější dojem, zvlášť v kombinaci se světlým obkladem nebo zrcadlem. Tmavý strop nebo jedna tmavá stěna „za umyvadlem" je oblíbený trik, jak koupelně dát charakter bez nutnosti malovat celý prostor temně.</p>
              <p>Obecné pravidlo: čím méně přirozeného světla koupelna má, tím opatrnější bys měl být s tmavými odstíny na velkých plochách. Tmavý akcent na jedné stěně nebo na stropě je bezpečnější než tmavá barva na všech čtyřech stěnách.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud si nejsi jistý, namaluj si vzorek odstínu na kus kartonu a polož ho do koupelny při zapnutém osvětlení v různou denní dobu. Barvy v koupelně bez okna vypadají jinak při umělém světle než na vzorníku u okna v obchodě.</div>
            </section>

            <section id="kombinace-obklad">
              <h2>Kombinace barvy a obkladu</h2>
              <p>V praxi se v koupelnách nejčastěji kombinuje obklad a malba – obklad na plochách, které přicházejí do přímého kontaktu s vodou (kolem vany, sprchového koutu, za umyvadlem), a barva na zbytku stěn a na stropě.</p>
              <p>Tato kombinace má několik výhod:</p>
              <ul>
                <li><strong>Ekonomická</strong> – obklad je dražší a náročnější na práci, takže omezení na nutné plochy snižuje náklady</li>
                <li><strong>Vizuálně lehčí</strong> – velká plocha obkladu může působit chladně, malba dodá prostoru teplejší charakter</li>
                <li><strong>Snadná údržba</strong> – kritické plochy (sprcha, vana) jsou plně omyvatelné, ostatní plochy stačí občas otřít</li>
                <li><strong>Flexibilita do budoucna</strong> – přemalovat stěnu je výrazně levnější a rychlejší než přeobkladačit</li>
              </ul>
              <p>Při kombinaci je dobré sladit odstín barvy s tónem obkladu – buď zvolit neutrální barvu, která doplní výraznější obklad, nebo naopak nechat obklad neutrální a barvou dodat barevný akcent. Pokud chceš spočítat, kolik barvy na danou plochu potřebuješ, využij <Link href="/kalkulacky/kolik-barvy" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačku spotřeby barvy</Link>.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Musím na strop kupovat speciální stropní barvu?", a: "Nemusíš, ale vyplatí se to. Stropní barvy mají vyšší bělost, nižší lesk a hustší konzistenci, takže méně stříkají a kryjí na méně vrstev. Běžnou bílou barvou na zeď strop natřeš taky, ale výsledek bývá méně rovnoměrný a se znatelnějším odstínem do žluta nebo šeda." },
                  { q: "Jaká barva je nejlepší do koupelny bez okna?", a: "Do koupelny bez okna a se slabým odvětráním vybírej speciální koupelnové barvy s antibakteriální a protiplísňovou přísadou, vysokou odolností proti otěru a kondenzaci. Stěny u vany a u umyvadla je navíc dobré doplnit obkladem nebo umyvatelným panelem, protože i nejlepší barva přímý kontakt s vodou dlouhodobě nevydrží." },
                  { q: "Je lepší tmavá nebo světlá barva do malé koupelny?", a: "Do malé koupelny bez denního světla se obecně doporučují světlé odstíny, protože prostor opticky zvětší a rozjasní. Tmavá barva ale není zakázaná – pokud koupelna má dostatek umělého osvětlení, tmavý odstín na jedné stěně nebo na stropě může dodat hloubku a útulnost, aniž by prostor opticky zmenšil tolik, jak se obvykle čeká." },
                  { q: "Vydrží malba v koupelně, nebo je lepší obklad?", a: "Kvalitní koupelnová barva s vysokou odolností proti vlhkosti vydrží roky, pokud koupelna má funkční odvětrání. Obklad je odolnější v přímém kontaktu s vodou (kolem vany, sprchy, umyvadla), barva se naopak hodí na plochy mimo stříkající zónu – stropy, horní pásy stěn, výklenky. Kombinace obkladu dole a barvy nahoře je nejběžnější a nejekonomičtější řešení." },
                  { q: "Jak velký rozdíl je mezi matnou stropní barvou a barvou na stěny?", a: "Hlavní rozdíl je v lesku a krycí schopnosti. Stropní barvy mají téměř nulový odraz lesku (matný až hluboce matný povrch), což skryje drobné nerovnosti stropu a zabrání odlescům od světel. Barvy na stěny bývají k dispozici i v pololesku nebo satinu pro snazší údržbu, ale na stropě by lesklejší povrch zvýraznil každou nerovnost a stíny." },
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
                <li><a href="#proc-stropni-barva">Proč má strop vlastní barvu</a></li>
                <li><a href="#matnost-vs-stena">Matná barva vs. barva na stěny</a></li>
                <li><a href="#koupelna-vetrani">Barva do koupelny podle odvětrání</a></li>
                <li><a href="#pridavne-latky">Antibakteriální přísady</a></li>
                <li><a href="#odstiny">Odstíny do malé koupelny</a></li>
                <li><a href="#kombinace-obklad">Barva a obklad</a></li>
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
