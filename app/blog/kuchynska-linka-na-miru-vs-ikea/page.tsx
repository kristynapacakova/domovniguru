import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kuchyňská linka – na míru, IKEA nebo kuchyňské studio? Srovnání 2026",
  description: "Srovnání IKEA kuchyně, kuchyňského studia a truhláře na míru: ceny, termíny, kvalita a přizpůsobitelnost. Jak vybrat správnou volbu pro váš byt?",
  alternates: { canonical: "https://www.domovniguru.cz/blog/kuchynska-linka-na-miru-vs-ikea" },
  openGraph: { title: "Kuchyňská linka – na míru, IKEA nebo kuchyňské studio?", description: "Ceny, termíny, kvalita a přizpůsobitelnost. Kompletní srovnání 2026.", url: "https://www.domovniguru.cz/blog/kuchynska-linka-na-miru-vs-ikea", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-09T08:00:00Z", modifiedTime: "2026-06-09T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Kuchy%C5%88sk%C3%A1%20linka%20%E2%80%93%20na%20m%C3%ADru%2C%20IKEA%20nebo%20kuchy%C5%88sk%C3%A9%20studio%3F%20Srovn%C3%A1n%C3%AD%202026&cat=blog", width: 1200, height: 630, alt: "Kuchyňská linka – na míru, IKEA nebo kuchyňské studio? Srovnání 2026" }] },
  twitter: { card: "summary_large_image", title: "Kuchyňská linka – na míru, IKEA nebo kuchyňské studio?", description: "Ceny, termíny, kvalita a přizpůsobitelnost. Kompletní srovnání 2026." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/kuchynska-linka-na-miru-vs-ikea#article", "headline": "Kuchyňská linka – na míru, IKEA nebo kuchyňské studio?", "datePublished": "2026-06-09T08:00:00Z", "dateModified": "2026-06-09T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["kuchyňská linka na míru", "IKEA kuchyně", "kuchyňské studio", "truhlář kuchyně", "cena kuchyně", "rekonstrukce kuchyně"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Stěhování & rekonstrukce", "item": "https://www.domovniguru.cz/blog/kategorie/stehovani" }, { "@type": "ListItem", "position": 4, "name": "Kuchyňská linka – na míru, IKEA nebo kuchyňské studio?", "item": "https://www.domovniguru.cz/blog/kuchynska-linka-na-miru-vs-ikea" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Kolik stojí kompletní IKEA kuchyně?", "acceptedAnswer": { "@type": "Answer", "text": "Kompletní IKEA kuchyně pro 3m linku vyjde při vlastní montáži na 40 000–70 000 Kč včetně spotřebičů. Pro 5m linku počítejte s 70 000–120 000 Kč. Při objednání montáže přes IKEA přidejte 10 000–20 000 Kč navíc." } }, { "@type": "Question", "name": "Za jak dlouho kuchyňské studio dodá kuchyni?", "acceptedAnswer": { "@type": "Answer", "text": "Standardní termín je 6–14 týdnů od podpisu smlouvy a zaplacení zálohy. U vytížených studií nebo nestandardních materiálů může termín přesáhnout 16 týdnů. Vždy si nechte termín zapsat do smlouvy." } }, { "@type": "Question", "name": "Kdy se kuchyně na míru od truhláře skutečně vyplatí?", "acceptedAnswer": { "@type": "Answer", "text": "Truhlář na míru se vyplatí při atypickém půdorysu (šikminy, výklenky, nestandardní výška), specifických materiálech (masivní dřevo, dýha) nebo požadavku na exkluzivní řešení. Ceny začínají od 120 000 Kč a snadno překročí 300 000 Kč." } }, { "@type": "Question", "name": "Jaká pracovní deska je nejlepší pro rodinnou kuchyni?", "acceptedAnswer": { "@type": "Answer", "text": "Pro rodinnou kuchyň s denním vařením je nejlepší poměr cena/výkon laminátová deska (HPL) – odolná, snadná údržba, cena 800–2 500 Kč/bm. Kompozit (Silestone, Dekton) nabízí lepší odolnost za cenu 3 500–8 000 Kč/bm. Kámen je nejprestižnější, ale vyžaduje pravidelné ošetřování." } }] }] };

const RELATED = [
  { title: "Jak naplánovat rekonstrukci bytu – rozpočet a pořadí prací 2026", href: "/blog/planovani-rekonstrukce-bytu", read: "7 min" },
  { title: "Jak odhadnout cenu rekonstrukce předem – kalkulace 2026", href: "/blog/odhadnout-cenu-rekonstrukce", read: "5 min" },
  { title: "Kolik stojí rekonstrukce koupelny – ceny 2026", href: "/blog/cena-rekonstrukce-koupelny", read: "6 min" },
  { title: "Stěhování bez stresu – kompletní checklist 2026", href: "/blog/stehovani-checklist", read: "5 min" },
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
              <span>Kuchyňská linka – na míru, IKEA nebo studio?</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏠 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Kuchyňská linka – na míru, IKEA nebo kuchyňské studio?</h1>
              <p className="article-lead">Nová kuchyň je jedna z největších investic při rekonstrukci. IKEA, kuchyňské studio nebo truhlář na míru – každá volba má jiné ceny, termíny i výsledek. Tenhle článek ti pomůže vybrat správně.</p>
              <div className="article-meta-row"><span>Publikováno: 9. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#hlavni-srovnani">Hlavní srovnání</a></li>
                <li><a href="#ikea-kuchyne">IKEA kuchyně</a></li>
                <li><a href="#kuchynske-studio">Kuchyňské studio</a></li>
                <li><a href="#kuchyne-na-miru">Kuchyně na míru od truhláře</a></li>
                <li><a href="#pracovni-deska">Pracovní deska</a></li>
                <li><a href="#priprava-rekonstrukce">Jak se připravit na rekonstrukci kuchyně</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="hlavni-srovnani">
              <h2>Hlavní srovnání: IKEA vs. kuchyňské studio vs. truhlář na míru</h2>
              <p>Než se pustíš do výběru, podívej se na základní parametry. Hrubý odhad celkových nákladů na rekonstrukci ti dá naše <Link href="/kalkulacky/cena-rekonstrukce-koupelny-odhad" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačka pro odhad ceny rekonstrukce</Link> – hodí se i při plánování kuchyně jako součásti celkové přestavby.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Parametr</th><th>IKEA</th><th>Kuchyňské studio</th><th>Truhlář na míru</th></tr></thead>
                  <tbody>
                    <tr><td>Cena (3m linka, bez spotřebičů)</td><td>25 000–55 000 Kč</td><td>60 000–180 000 Kč</td><td>120 000–350 000 Kč</td></tr>
                    <tr><td>Kvalita korpusů</td><td>Dobrá (18mm dřevotříska)</td><td>Velmi dobrá (HDF, voděodolné)</td><td>Výborná (masiv, dýha, HDF)</td></tr>
                    <tr><td>Termín dodání</td><td>2–6 týdnů</td><td>6–14 týdnů</td><td>8–20 týdnů</td></tr>
                    <tr><td>Přizpůsobitelnost</td><td>Nízká (modulární systém)</td><td>Střední až vysoká</td><td>Maximální</td></tr>
                    <tr><td>Záruky</td><td>25 let na korpusy</td><td>5–10 let dle smlouvy</td><td>Dle smlouvy (2–5 let)</td></tr>
                    <tr><td>Typická délka realizace</td><td>1–2 dny (montáž)</td><td>1–3 dny (montáž)</td><td>2–5 dnů (montáž)</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Ceny v tabulce nezahrnují spotřebiče, pracovní desku ani dřezy a baterie. Ty mohou přidat 30 000–80 000 Kč navíc v závislosti na značce a kvalitě.</div>
            </section>

            <section id="ikea-kuchyne">
              <h2>IKEA kuchyně – co umí dobře a kde jsou limity</h2>
              <p>IKEA SEKTION (v ČR prodávaná jako METOD) je nejoblíbenější modulární kuchyňský systém v Česku. Nabízí solidní poměr cena/výkon a desítky front v různých stylech. Hlavní výhoda: standardizovaný systém, dostupné náhradní díly, dlouhá záruka na korpusy.</p>
              <h3>Co IKEA umí dobře</h3>
              <ul>
                <li>Rychlá dostupnost – většina zboží je skladem nebo do 2–4 týdnů</li>
                <li>Nízká vstupní cena – nejlevnější varianta na trhu</li>
                <li>25letá záruka na korpusy</li>
                <li>Plánování zdarma přes IKEA Home Planner nebo na prodejně</li>
                <li>Snadná výměna poškozených dílů v budoucnu</li>
              </ul>
              <h3>Limity IKEA kuchyní</h3>
              <ul>
                <li>Modulární systém – standardní rozměry 60/80/90 cm, obtížná adaptace na atypické prostory</li>
                <li>Fronty z MDF a fólie – méně odolné než lakované nebo dýhované fronty od studií</li>
                <li>Montáž je relativně složitá, trvá déle než u studií</li>
                <li>Méně možností u vestavěných spotřebičů (nutno kombinovat s jinými značkami)</li>
              </ul>
              <h3>Montáž svépomocí vs. montážní firma</h3>
              <p>IKEA kuchyni zvládne sestavit šikovný domácí kutil za 1–2 víkendy. Pokud nechceš riskovat nebo nemáš čas, IKEA nabízí montáž přes partnery – počítej s <strong>10 000–20 000 Kč</strong> za standardní linku. Alternativou jsou nezávislé montážní firmy (8 000–15 000 Kč).</p>
              <h3>Příklady cen kompletní IKEA kuchyně (2026)</h3>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Velikost linky</th><th>Korpusy + fronty</th><th>+ Pracovní deska</th><th>+ Spotřebiče (střední)</th><th>Celkem</th></tr></thead>
                  <tbody>
                    <tr><td>3 m (základní)</td><td>25 000–35 000 Kč</td><td>5 000–12 000 Kč</td><td>20 000–35 000 Kč</td><td><strong>50 000–82 000 Kč</strong></td></tr>
                    <tr><td>5 m (standard)</td><td>45 000–70 000 Kč</td><td>8 000–20 000 Kč</td><td>25 000–50 000 Kč</td><td><strong>78 000–140 000 Kč</strong></td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="kuchynske-studio">
              <h2>Kuchyňské studio – průměrné ceny, harmonogram a jak poznat dobrou firmu</h2>
              <p>Kuchyňská studia nabízejí větší přizpůsobitelnost než IKEA při zachování rozumné ceny. Pracují s kvalitnějšími materiály – HDF korpusy odolné vůči vlhkosti, lakované nebo dýhované fronty, precizní řezání na míru.</p>
              <h3>Průměrné cenové pásmo (2026)</h3>
              <ul>
                <li><strong>Economy třída</strong> (Naturel, Sykora základní řada): 60 000–100 000 Kč za 3m linku bez spotřebičů</li>
                <li><strong>Mid-range</strong> (Sykora, Hanák, Oresi mid): 100 000–180 000 Kč za 3m linku bez spotřebičů</li>
                <li><strong>Premium</strong> (Hanák Premium, Leicht, Bulthaup): 200 000 Kč a více</li>
              </ul>
              <h3>Časový harmonogram</h3>
              <p>Po podpisu smlouvy a zaplacení zálohy (obvykle 30–50 %) trvá výroba a dodání <strong>6–14 týdnů</strong>. U vytížených studií nebo nestandardních materiálů počítej s 16 týdny. Samotná montáž trvá 1–3 dny.</p>
              <h3>Jak poznat dobrou firmu</h3>
              <ul>
                <li><strong>Reference a showroom:</strong> Navštiv showroom, prohlédni si vystavené kuchyně naživo, požádej o reference od zákazníků</li>
                <li><strong>Smlouva:</strong> Trvej na písemné smlouvě s přesným termínem dodání, specifikací materiálů a podmínkami reklamace</li>
                <li><strong>Pojištění:</strong> Solidní studio má pojištění odpovědnosti za škodu – ověř si to</li>
                <li><strong>Záloha max. 50 %:</strong> Nedávej zálohu přes 50 % před zahájením výroby</li>
                <li><strong>Technický projekt:</strong> Žádej technický výkres s kótami, nikoli jen vizualizaci</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Vyhni se firmám, které trvají na záloze přes 70 % předem nebo odmítají dát smlouvu s konkrétním termínem. To jsou jasné varovné signály.</div>
            </section>

            <section id="kuchyne-na-miru">
              <h2>Kuchyně na míru od truhláře – kdy se vyplatí a realistické ceny</h2>
              <p>Truhlář na míru je nejdražší, ale nejflexibilnější varianta. Vyplatí se v situacích, kdy standardní systémy nestačí.</p>
              <h3>Kdy volat truhláře</h3>
              <ul>
                <li><strong>Atypické prostory:</strong> Šikminy, výklenky, nestandardní výška stropu, nepravidelný půdorys</li>
                <li><strong>Specifické materiály:</strong> Masivní dřevo, dýha, exotické dřeviny, kombinace materiálů</li>
                <li><strong>Integrace do interiéru:</strong> Kuchyně, která plynule navazuje na vestavěné skříně nebo obývací stěnu</li>
                <li><strong>Historické nebo designové byty:</strong> Kde by modularita vypadala nevhodně</li>
              </ul>
              <h3>Realistické ceny (2026)</h3>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Rozsah</th><th>Materiál</th><th>Cena za linku (bez spotřebičů)</th></tr></thead>
                  <tbody>
                    <tr><td>3 m linka</td><td>MDF lakovaný</td><td>120 000–180 000 Kč</td></tr>
                    <tr><td>3 m linka</td><td>Masiv + dýha</td><td>180 000–280 000 Kč</td></tr>
                    <tr><td>5 m linka</td><td>MDF lakovaný</td><td>180 000–280 000 Kč</td></tr>
                    <tr><td>5 m linka</td><td>Masiv + dýha</td><td>250 000–400 000 Kč</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Termín realizace: projekt + výroba + montáž obvykle trvá <strong>10–20 týdnů</strong>. Vždy si vyžádej reference, fotografie předchozích prací a smlouvu s termínem a specifikací materiálů.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Dobrý truhlář ti nabídne technický výkres a materiálový vzorek ještě před podpisem smlouvy. Pokud to odmítne, hledej dál.</div>
            </section>

            <section id="pracovni-deska">
              <h2>Pracovní deska – laminát vs. dřevo vs. kámen vs. kompozit</h2>
              <p>Pracovní deska je funkční i estetický střed kuchyně. Výběr materiálu ovlivní nejen vzhled, ale i údržbu a životnost.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Materiál</th><th>Cena (za bm)</th><th>Údržba</th><th>Odolnost vůči vodě</th><th>Odolnost vůči teplu</th></tr></thead>
                  <tbody>
                    <tr><td>Laminát (HPL)</td><td>800–2 500 Kč</td><td>Velmi snadná</td><td>Dobrá (spoje citlivé)</td><td>Střední (ne přímo hrnec)</td></tr>
                    <tr><td>Masivní dřevo</td><td>2 000–5 000 Kč</td><td>Olejování 1–2× ročně</td><td>Slabá (nutná péče)</td><td>Dobrá</td></tr>
                    <tr><td>Přírodní kámen (granit)</td><td>4 000–10 000 Kč</td><td>Impregnace 1× ročně</td><td>Výborná</td><td>Výborná</td></tr>
                    <tr><td>Kompozit (Silestone, Dekton)</td><td>3 500–8 000 Kč</td><td>Velmi snadná</td><td>Výborná</td><td>Výborná (Dekton)</td></tr>
                    <tr><td>Nerez</td><td>3 000–7 000 Kč</td><td>Snadná (viditelné škrábance)</td><td>Výborná</td><td>Výborná</td></tr>
                  </tbody>
                </table>
              </div>
              <h3>Doporučení podle situace</h3>
              <ul>
                <li><strong>Rodina s dětmi, časté vaření:</strong> Kompozit (Silestone, Dekton) – nejlepší odolnost, snadná údržba</li>
                <li><strong>Designový byt, méně intenzivní provoz:</strong> Přírodní kámen nebo masivní dřevo</li>
                <li><strong>Pronájem nebo omezený rozpočet:</strong> Laminát HPL – stále solidní volba, snadno vyměnitelný</li>
                <li><strong>Profesionální kuchyně nebo gastro:</strong> Nerez</li>
              </ul>
            </section>

            <section id="priprava-rekonstrukce">
              <h2>Jak se připravit na rekonstrukci kuchyně</h2>
              <p>Výměna kuchyně je komplexní projekt, který zasahuje do elektroinstalace, vodoinstalace i vzduchotechniky. Špatná příprava prodraží a prodlouží celou akci.</p>
              <h3>Co zařídit předem</h3>
              <ul>
                <li><strong>Elektrikář:</strong> Kuchyně potřebuje samostatné jištěné okruhy pro trouba, varná deska, myčka a lednice. Pokud rekonstruuješ starší byt, elektrikář musí zkontrolovat kapacitu jistítek a přívodního kabelu. Naplánuj to <strong>před</strong> objednáním kuchyně.</li>
                <li><strong>Instalatér:</strong> Přívod studené vody, odpad pro dřez a myčku. Pokud měníš polohu dřezu, jde o větší zásah – počítej s 5 000–15 000 Kč za přeložení odpadů.</li>
                <li><strong>Větrání a digestoř:</strong> Zkontroluj, zda jde digestoř vyvést do stávajícího průduchu nebo zda potřebuješ recirkulaci. Vyvést nový otvor do fasády přidá 3 000–8 000 Kč.</li>
                <li><strong>Podlaha a obklady:</strong> Pokud měníš dlažbu, udělej to před montáží kuchyně. Obklady za kuchyní (zástěra) naopak montuj po instalaci kuchyně.</li>
              </ul>
              <h3>Jak přežít bez kuchyně</h3>
              <p>Rekonstrukce kuchyně trvá obvykle <strong>1–3 týdny</strong> (demolice + řemeslníci + montáž + připojení spotřebičů). Připrav se:</p>
              <ul>
                <li>Elektrický vařič nebo indukční desku na stůl – vaříš kdekoli</li>
                <li>Mikrovlnná trouba a rychlovarná konvice – základní výbava</li>
                <li>Připrav zásobu jídla nebo počítej s restauracemi a rozvozem</li>
                <li>Dočasný dřez – sanitární technik ti může zapojit provizorní odpad</li>
                <li>Chladničku přesuň do obývacího pokoje nebo chodby</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Celý projekt naplánuj tak, aby montáž kuchyně proběhla jako jeden z posledních kroků rekonstrukce. Nejprve elektrika, instalatér, podlahy, malování – pak teprve kuchyně.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Kolik stojí kompletní IKEA kuchyně?", a: "Kompletní IKEA kuchyně pro 3m linku vyjde při vlastní montáži na 40 000–70 000 Kč včetně spotřebičů. Pro 5m linku počítejte s 70 000–140 000 Kč. Při objednání montáže přes IKEA přidejte 10 000–20 000 Kč navíc." },
                  { q: "Za jak dlouho kuchyňské studio dodá kuchyni?", a: "Standardní termín je 6–14 týdnů od podpisu smlouvy a zaplacení zálohy. U vytížených studií nebo nestandardních materiálů může termín přesáhnout 16 týdnů. Vždy si nechte termín zapsat do smlouvy." },
                  { q: "Kdy se kuchyně na míru od truhláře skutečně vyplatí?", a: "Truhlář na míru se vyplatí při atypickém půdorysu (šikminy, výklenky, nestandardní výška), specifických materiálech (masivní dřevo, dýha) nebo požadavku na exkluzivní řešení. Ceny začínají od 120 000 Kč a snadno překročí 300 000 Kč." },
                  { q: "Jaká pracovní deska je nejlepší pro rodinnou kuchyni?", a: "Pro rodinnou kuchyň s denním vařením je nejlepší poměr cena/výkon laminátová deska (HPL) – odolná, snadná údržba, cena 800–2 500 Kč/bm. Kompozit (Silestone, Dekton) nabízí lepší odolnost za cenu 3 500–8 000 Kč/bm. Kámen je nejprestižnější, ale vyžaduje pravidelné ošetřování." },
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
                <li><a href="#hlavni-srovnani">Hlavní srovnání</a></li>
                <li><a href="#ikea-kuchyne">IKEA kuchyně</a></li>
                <li><a href="#kuchynske-studio">Kuchyňské studio</a></li>
                <li><a href="#kuchyne-na-miru">Kuchyně na míru</a></li>
                <li><a href="#pracovni-deska">Pracovní deska</a></li>
                <li><a href="#priprava-rekonstrukce">Příprava rekonstrukce</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/stehovani" className="sidebar-cat-link">🏠 Stěhování & rekonstrukce<span>20 článků →</span></Link>
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
