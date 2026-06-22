import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak naplánovat novou kuchyň krok za krokem",
  description: "Od měření prostoru přes návrh dispozice až po výběr spotřebičů a rozpočet – kompletní plán pořízení kuchyně.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/planovani-kuchyne-krok-za-krokem" },
  openGraph: { title: "Jak naplánovat novou kuchyň krok za krokem", description: "Od měření prostoru přes návrh dispozice až po výběr spotřebičů a rozpočet – kompletní plán pořízení kuchyně.", url: "https://www.domovniguru.cz/blog/planovani-kuchyne-krok-za-krokem", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-11T08:00:00Z", modifiedTime: "2026-06-11T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20napl%C3%A1novat%20novou%20kuchy%C5%88%20krok%20za%20krokem&cat=blog", width: 1200, height: 630, alt: "Jak naplánovat novou kuchyň krok za krokem" }] },
  twitter: { card: "summary_large_image", title: "Jak naplánovat novou kuchyň krok za krokem", description: "Od měření prostoru přes návrh dispozice až po výběr spotřebičů a rozpočet – kompletní plán pořízení kuchyně." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/planovani-kuchyne-krok-za-krokem#article", "headline": "Jak naplánovat novou kuchyň krok za krokem", "datePublished": "2026-06-11T08:00:00Z", "dateModified": "2026-06-11T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["plánování kuchyně", "návrh kuchyně", "dispozice kuchyně", "pracovní trojúhelník", "rozpočet na kuchyň", "výběr spotřebičů"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Stěhování & rekonstrukce", "item": "https://www.domovniguru.cz/blog/kategorie/stehovani" }, { "@type": "ListItem", "position": 4, "name": "Jak naplánovat novou kuchyň krok za krokem", "item": "https://www.domovniguru.cz/blog/planovani-kuchyne-krok-za-krokem" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jak dlouho trvá naplánovat a pořídit novou kuchyň?", "acceptedAnswer": { "@type": "Answer", "text": "Od prvního zaměření po montáž počítejte se 2 až 4 měsíci. Samotné navrhování a výběr trvá obvykle 2–4 týdny, výroba a dodání 4–10 týdnů a montáž 1–5 dní podle rozsahu." } }, { "@type": "Question", "name": "Kolik by mělo zabírat místo na pracovní desce kolem sporáku?", "acceptedAnswer": { "@type": "Answer", "text": "Z obou stran sporáku počítejte minimálně s 30–40 cm volné pracovní plochy. Stejně tak by měl mít alespoň 40 cm odkládacího prostoru i dřez, aby se vám u něj vešlo nádobí na okapávání nebo prkénko." } }, { "@type": "Question", "name": "Je lepší vestavné, nebo volně stojící spotřebiče?", "acceptedAnswer": { "@type": "Answer", "text": "Vestavné spotřebiče (trouba, varná deska, lednice) působí sjednoceně a šetří místo, ale jsou dražší a jejich výměna je složitější. Volně stojící spotřebiče jsou levnější a snáz se vymění, hodí se hlavně do menších rozpočtů nebo nájemních bytů." } }, { "@type": "Question", "name": "Na čem se při plánování kuchyně dá ušetřit a na čem ne?", "acceptedAnswer": { "@type": "Answer", "text": "Ušetřit lze na dvířkách, úchytkách, spotřebičích nižší třídy a doplňcích – ty se dají později vyměnit. Nešetřete na korpusech skříněk, pracovní desce, dřezu, baterii a soft-close mechanismech, protože jejich výměna znamená demontáž celé linky." } }, { "@type": "Question", "name": "Je potřeba mít při plánování kuchyně hotový stavební projekt?", "acceptedAnswer": { "@type": "Answer", "text": "Ne vždy, ale u rekonstrukce je nutné znát přesné rozmístění přípojek vody, odpadu, elektřiny a případně plynu před objednáním kuchyně – přesun přípojek je nejdražší a nejnáročnější část přestavby." } }] }] };

const RELATED = [
  { title: "Kuchyňská linka – na míru, IKEA nebo kuchyňské studio?", href: "/blog/kuchynska-linka-na-miru-vs-ikea", read: "8 min" },
  { title: "Jak probíhá instalace kuchyňské linky", href: "/blog/instalovat-kuchynskou-linku", read: "6 min" },
  { title: "Jak rozložit IKEA kuchyň – návod krok za krokem", href: "/blog/rozlozit-ikea-kuchyn", read: "5 min" },
  { title: "Kalkulačka ceny kuchyně", href: "/kalkulacky/cena-kuchyne", read: "2 min" },
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
              <span>Jak naplánovat novou kuchyň krok za krokem</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏠 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 7 min čtení</span>
              </div>
              <h1 className="article-h1">Jak naplánovat novou kuchyň krok za krokem</h1>
              <p className="article-lead">Nová kuchyň je investice na 15–20 let, a špatně naplánovanou dispozici nebo přípojky pak nepřesunete jen tak. Tenhle průvodce vás provede celým procesem – od zaměření prostoru přes návrh rozmístění až po výběr spotřebičů, materiálů a sestavení reálného rozpočtu.</p>
              <div className="article-meta-row"><span>Aktualizováno: 11. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#zamereni">1. Zaměření prostoru a přípojky</a></li>
                <li><a href="#dispozice">2. Návrh dispozice a pracovní trojúhelník</a></li>
                <li><a href="#spotrebice">3. Výběr spotřebičů</a></li>
                <li><a href="#materialy">4. Materiály desky a dvířek</a></li>
                <li><a href="#osvetleni">5. Osvětlení kuchyně</a></li>
                <li><a href="#rozpocet">6. Rozpočet – kde šetřit a kde ne</a></li>
                <li><a href="#harmonogram">7. Harmonogram realizace</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="zamereni">
              <h2>1. Zaměření prostoru a přípojky</h2>
              <p>Než začnete řešit barvu dvířek nebo typ trouby, musíte mít přesné rozměry místnosti a vědět, kde jsou (nebo budou) přípojky vody, odpadu, elektřiny a případně plynu. Tohle je základ, na kterém stojí celý projekt – chyba v zaměření o pár centimetrů může později znamenat, že se vám nevejde lednice nebo myčka tam, kam jste počítali.</p>
              <h3>Co si připravit před měřením</h3>
              <ul>
                <li>Přesné rozměry místnosti – délky stěn, výšku stropu, umístění a rozměry oken a dveří</li>
                <li>Polohu všech přípojek vody a odpadu (i těch zazděných nebo zakrytých nábytkem)</li>
                <li>Rozmístění elektrických zásuvek a jejich výšku od podlahy</li>
                <li>Polohu plynové přípojky, pokud plánujete plynový sporák</li>
                <li>Umístění radiátorů, sloupů, šikmin nebo jiných stavebních prvků, které zasahují do prostoru</li>
              </ul>
              <p>Pokud měníte dispozici a přípojky se musí přesunout, je potřeba to vyřešit jako první – ještě před objednáním kuchyně. Přesun odpadu nebo plynové přípojky vyžaduje zásah do podlahy nebo zdiva a měl by ho dělat odborník. Více o tom, co všechno přestavba kuchyně obnáší, najdete v článku o <Link href="/blog/instalovat-kuchynskou-linku" style={{ color: "#2a6496", textDecoration: "underline" }}>instalaci kuchyňské linky</Link>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Zaměření raději nechte udělat odborníka z kuchyňského studia nebo si ho aspoň nechte zkontrolovat. Drobná odchylka v rozích místnosti (stěny málokdy svírají přesně 90°) dokáže pokazit přesnost celé linky na míru.</div>
            </section>

            <section id="dispozice">
              <h2>2. Návrh dispozice a pracovní trojúhelník</h2>
              <p>Dispozice rozhoduje o tom, jak pohodlně se v kuchyni bude vařit. Klasickým pravidlem je takzvaný <strong>pracovní trojúhelník</strong> – tři hlavní body kuchyně (dřez, sporák/varná deska a lednice) by měly tvořit trojúhelník, jehož strany dohromady měří 4–7 metrů. Příliš krátké vzdálenosti znamenají těsno a překážení si navzájem, příliš dlouhé zase zbytečné chození tam a zpět.</p>
              <h3>Tvary kuchyňské linky</h3>
              <table className="article-table">
                <thead><tr><th>Tvar</th><th>Vhodné pro</th><th>Výhody</th><th>Nevýhody</th></tr></thead>
                <tbody>
                  <tr><td>Rovná linka (jednořadá)</td><td>Malé a úzké kuchyně, kuchyňské kouty</td><td>Jednoduchá, levná, přehledná</td><td>Méně úložného prostoru, delší přesuny</td></tr>
                  <tr><td>Tvar L</td><td>Středně velké kuchyně, otevřené dispozice</td><td>Efektivní trojúhelník, více úložných ploch</td><td>Roh vyžaduje speciální výsuvy nebo karusel</td></tr>
                  <tr><td>Tvar U</td><td>Větší kuchyně, samostatné místnosti</td><td>Maximum úložného prostoru a pracovní plochy</td><td>Náročná na prostor, dva rohy k řešení</td></tr>
                  <tr><td>S ostrůvkem</td><td>Velké otevřené prostory, kuchyně s jídelnou</td><td>Centrální pracovní/společenský bod, velkorysý prostor</td><td>Vyžaduje minimálně 3,5–4 m volného prostoru kolem</td></tr>
                </tbody>
              </table>
              <h3>Praktické zásady při rozmisťování</h3>
              <ul>
                <li>Mezi protilehlými řadami linky (např. u tvaru U) nechte alespoň 120 cm volného prostoru pro pohodlný pohyb a otevírání spotřebičů</li>
                <li>Z obou stran sporáku/varné desky počítejte s minimálně 30–40 cm volné odkládací plochy</li>
                <li>U dřezu nechte podobně alespoň 40 cm prostoru na okapávání nádobí nebo prkénko</li>
                <li>Myčku umístěte vedle dřezu kvůli kratšímu vedení vody a odpadu</li>
                <li>Vysoké skříně (lednice, trouba ve sloupu, spíž) umisťujte na okraj dispozice, aby netvořily bariéru uprostřed pracovního trojúhelníku</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud váháte mezi tvary, nakreslete si půdorys na milimetrový papír v měřítku a vystřihněte si papírové obdélníky představující jednotlivé spotřebiče a skříňky. Fyzické přerovnávání odhalí problémy mnohem rychleji než pohled na výkres.</div>
            </section>

            <section id="spotrebice">
              <h2>3. Výběr spotřebičů</h2>
              <p>Spotřebiče tvoří významnou část rozpočtu i vzhledu kuchyně, a proto je dobré je vybírat brzy – jejich rozměry totiž ovlivňují návrh skříněk a otvorů v lince.</p>
              <h3>Vestavné vs. volně stojící</h3>
              <p>Vestavné spotřebiče (trouba, varná deska, myčka, lednice za panelem) splývají s linkou a působí sjednoceně, ale jsou dražší a jejich případná výměna za jiný model může vyžadovat úpravu skříňky. Volně stojící spotřebiče jsou levnější, snadno se vymění a hodí se zejména pro menší rozpočty, nájemní bydlení nebo kuchyně, kde chcete mít možnost spotřebiče odstěhovat při příštím stěhování.</p>
              <h3>Energetické třídy</h3>
              <p>U lednic, myček a praček dnes platí přepracovaná stupnice energetických štítků (A–G), kde A je nejúspornější a v praxi ho splňuje jen málo modelů. U lednice, která běží nepřetržitě 24 hodin denně, se rozdíl mezi třídou C a E na účtu za elektřinu projeví citelně za pár let provozu – vyšší pořizovací cena se obvykle vrátí.</p>
              <ul>
                <li><strong>Lednice a mraznička</strong> – běží non-stop, vyplatí se vyšší energetická třída i přes vyšší cenu</li>
                <li><strong>Myčka</strong> – sledujte i spotřebu vody na cyklus, ne jen energetickou třídu</li>
                <li><strong>Trouba</strong> – pyrolýza je komfort navíc, ale zvyšuje spotřebu při čištění a cenu spotřebiče</li>
                <li><strong>Varná deska</strong> – indukce je rychlejší a úspornější než klasická sklokeramika, ale vyžaduje kompatibilní nádobí</li>
              </ul>
              <p>Celkové náklady na spotřebiče i zbytek kuchyně si můžete předběžně spočítat v naší <Link href="/kalkulacky/cena-kuchyne" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačce ceny kuchyně</Link> – pomůže vám odhadnout rozpočet ještě předtím, než oslovíte konkrétní studio nebo prodejce.</p>
            </section>

            <section id="materialy">
              <h2>4. Materiály pracovní desky a dvířek</h2>
              <h3>Pracovní deska</h3>
              <table className="article-table">
                <thead><tr><th>Materiál</th><th>Cena za bm</th><th>Odolnost</th><th>Údržba</th></tr></thead>
                <tbody>
                  <tr><td>Laminát (HPL/postforming)</td><td>800–2 500 Kč</td><td>Dobrá, citlivá na horké hrnce a poškrábání</td><td>Snadná, otřít hadrem</td></tr>
                  <tr><td>Masivní dřevo</td><td>2 500–6 000 Kč</td><td>Citlivé na vlhkost a teplo, vyžaduje olejování</td><td>Pravidelné ošetřování olejem</td></tr>
                  <tr><td>Kompozit (Silestone, Dekton)</td><td>3 500–8 000 Kč</td><td>Velmi vysoká, odolává teplu i poškrábání</td><td>Minimální</td></tr>
                  <tr><td>Přírodní kámen (žula, mramor)</td><td>5 000–12 000 Kč</td><td>Vysoká, mramor je citlivý na kyseliny</td><td>Pravidelná impregnace</td></tr>
                </tbody>
              </table>
              <h3>Dvířka skříněk</h3>
              <p>Dvířka určují vzhled kuchyně nejvíc, ale technicky jsou na výměnu nejjednodušší – proto je to často první místo, kde lidé při omezeném rozpočtu šetří, a první, co později vymění za lepší materiál.</p>
              <ul>
                <li><strong>Lamino (dekor)</strong> – nejlevnější varianta, široká škála dekorů dřeva i jednobarevných odstínů</li>
                <li><strong>Lakované MDF (vysoký lesk i mat)</strong> – elegantní vzhled, ale náchylnější na otisky prstů a poškrábání</li>
                <li><strong>Dýha</strong> – přírodní vzhled dřeva, dražší a citlivější na vlhkost</li>
                <li><strong>Lamino s strukturou (např. imitace dřeva s reliéfem)</strong> – kompromis mezi vzhledem a cenou, dobře skrývá otisky</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Korpusy skříněk (vnitřní konstrukce) by měly být vždy v lepší kvalitě – vlhkuvzdorná dřevotříska (typicky s označením pro vlhké prostory) se vyplatí hlavně u skříněk pod dřezem a u myčky.</div>
            </section>

            <section id="osvetleni">
              <h2>5. Osvětlení kuchyně</h2>
              <p>Kuchyň potřebuje minimálně dvě vrstvy světla – celkové osvětlení místnosti a pracovní osvětlení nad pracovní plochou. Bez druhého z nich budete při krájení nebo vaření vždy stát ve vlastním stínu.</p>
              <ul>
                <li><strong>Celkové osvětlení</strong> – stropní svítidla nebo bodovky rozmístěné rovnoměrně po místnosti</li>
                <li><strong>Pracovní osvětlení</strong> – LED pásky nebo lišty pod horními skříňkami, které svítí přímo na pracovní desku</li>
                <li><strong>Akcentové osvětlení</strong> – podsvícení vitrín, otevřených polic nebo soklu skříněk pro atmosféru</li>
                <li><strong>Osvětlení nad ostrůvkem nebo jídelním stolem</strong> – závěsná svítidla v odpovídající výšce (obvykle 65–75 cm nad deskou)</li>
              </ul>
              <p>Elektrikář musí o pracovním osvětlení vědět už při plánování rozvodů, protože LED pásky pod skříňkami potřebují vlastní napájení a často i samostatný vypínač nebo stmívač. Pokud se elektroinstalace řeší zároveň s rekonstrukcí, je toto ideální moment vše doplnit – dodatečné tahání kabelů po dokončení kuchyně je výrazně dražší a nepraktické.</p>
            </section>

            <section id="rozpocet">
              <h2>6. Rozpočet – na čem se dá ušetřit a na čem ne</h2>
              <p>Cena kuchyně se odvíjí od velikosti, materiálů, spotřebičů a toho, zda jde o IKEA, kuchyňské studio nebo truhláře na míru – podrobné srovnání těchto variant najdete v článku <Link href="/blog/kuchynska-linka-na-miru-vs-ikea" style={{ color: "#2a6496", textDecoration: "underline" }}>kuchyňská linka na míru vs. IKEA</Link>. Ať zvolíte jakoukoli cestu, platí stejná zásada: u některých prvků se vyplatí investovat víc, jinde lze bez obav ušetřit.</p>
              <h3>Kde šetřit</h3>
              <ul>
                <li>Dvířka a dekory – dají se kdykoli v budoucnu vyměnit bez zásahu do zbytku kuchyně</li>
                <li>Úchytky a kování doplňků – levnější varianty fungují stejně, jen méně luxusně vypadají</li>
                <li>Spotřebiče nižší (ale ne nejnižší) energetické třídy u zařízení s krátkým provozem, např. trouba</li>
                <li>Doplňkové osvětlení a dekorativní prvky – lze doplnit postupně</li>
              </ul>
              <h3>Kde nešetřit</h3>
              <ul>
                <li><strong>Korpusy skříněk</strong> – jejich výměna znamená demontáž celé linky</li>
                <li><strong>Pracovní deska</strong> – nejvíce namáhaná část kuchyně, levný materiál se brzy znehodnotí</li>
                <li><strong>Dřez a baterie</strong> – levné modely často protékají nebo mají slabý povrch</li>
                <li><strong>Kvalitní výsuvy a panty se soft-close</strong> – levné mechanismy se po pár letech denního používání rozbijí</li>
                <li><strong>Lednice a myčka s vyšší energetickou třídou</strong> – běží denně po celé roky, rozdíl se projeví na účtech</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Než osloví konkrétního dodavatele, sestavte si v <Link href="/kalkulacky/cena-kuchyne" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačce ceny kuchyně</Link> orientační rozpočet podle metráže linky a požadované úrovně materiálů. Budete pak mít srovnání, jestli je nabídka studia realistická.</div>
            </section>

            <section id="harmonogram">
              <h2>7. Harmonogram realizace</h2>
              <p>Od rozhodnutí pořídit novou kuchyň po první uvařené jídlo uplyne typicky 2 až 4 měsíce. Délka se liší hlavně podle toho, jestli jde o standardní rozměry (IKEA, sériové studio) nebo atypickou kuchyň na míru od truhláře.</p>
              <table className="article-table">
                <thead><tr><th>Fáze</th><th>Doba trvání</th><th>Co zahrnuje</th></tr></thead>
                <tbody>
                  <tr><td>Zaměření a návrh</td><td>1–2 týdny</td><td>Měření prostoru, konzultace dispozice, 3D návrh, úpravy</td></tr>
                  <tr><td>Objednání a výroba</td><td>4–10 týdnů</td><td>Výroba korpusů a dvířek, dodání spotřebičů</td></tr>
                  <tr><td>Stavební přípravy</td><td>souběžně s výrobou</td><td>Přesun přípojek, malování, podlaha, elektroinstalace</td></tr>
                  <tr><td>Montáž</td><td>1–5 dní</td><td>Sestavení skříněk, instalace desky, zapojení spotřebičů</td></tr>
                  <tr><td>Dokončovací práce</td><td>1–2 dny</td><td>Sokly, lišty, těsnění, finální seřízení dvířek</td></tr>
                </tbody>
              </table>
              <p>Stavební přípravy je vhodné naplánovat tak, aby byly hotové ještě před dodáním kuchyně – montéři by neměli čekat na to, až se domaluje nebo položí podlaha. Pokud řešíte i přesun spotřebičů a rozvodů, podívejte se na podrobnosti v článku o <Link href="/blog/instalovat-kuchynskou-linku" style={{ color: "#2a6496", textDecoration: "underline" }}>instalaci kuchyňské linky</Link>, kde je popsán i postup samotné montáže.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Při objednávání si vždy nechte termín dodání a montáže napsat do smlouvy včetně sankcí za zpoždění. U vytížených studií se v sezóně (jaro a podzim) termíny běžně protahují o několik týdnů.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jak dlouho trvá naplánovat a pořídit novou kuchyň?", a: "Od prvního zaměření po montáž počítejte se 2 až 4 měsíci. Samotné navrhování a výběr trvá obvykle 2–4 týdny, výroba a dodání 4–10 týdnů a montáž 1–5 dní podle rozsahu." },
                  { q: "Kolik by mělo zabírat místo na pracovní desce kolem sporáku?", a: "Z obou stran sporáku počítejte minimálně s 30–40 cm volné pracovní plochy. Stejně tak by měl mít alespoň 40 cm odkládacího prostoru i dřez, aby se vám u něj vešlo nádobí na okapávání nebo prkénko." },
                  { q: "Je lepší vestavné, nebo volně stojící spotřebiče?", a: "Vestavné spotřebiče (trouba, varná deska, lednice) působí sjednoceně a šetří místo, ale jsou dražší a jejich výměna je složitější. Volně stojící spotřebiče jsou levnější a snáz se vymění, hodí se hlavně do menších rozpočtů nebo nájemních bytů." },
                  { q: "Na čem se při plánování kuchyně dá ušetřit a na čem ne?", a: "Ušetřit lze na dvířkách, úchytkách, spotřebičích nižší třídy a doplňcích – ty se dají později vyměnit. Nešetřete na korpusech skříněk, pracovní desce, dřezu, baterii a soft-close mechanismech, protože jejich výměna znamená demontáž celé linky." },
                  { q: "Je potřeba mít při plánování kuchyně hotový stavební projekt?", a: "Ne vždy, ale u rekonstrukce je nutné znát přesné rozmístění přípojek vody, odpadu, elektřiny a případně plynu před objednáním kuchyně – přesun přípojek je nejdražší a nejnáročnější část přestavby." },
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
                <li><a href="#zamereni">Zaměření a přípojky</a></li>
                <li><a href="#dispozice">Dispozice a trojúhelník</a></li>
                <li><a href="#spotrebice">Výběr spotřebičů</a></li>
                <li><a href="#materialy">Materiály desky a dvířek</a></li>
                <li><a href="#osvetleni">Osvětlení kuchyně</a></li>
                <li><a href="#rozpocet">Rozpočet</a></li>
                <li><a href="#harmonogram">Harmonogram realizace</a></li>
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
