import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Schodišťový vypínač – jak zapojit a k čemu slouží 2026",
  description: "Schodišťové (střídavé) zapojení vypínače umožní rozsvítit i zhasnout světlo ze dvou míst. Schéma zapojení, bezpečnost a kdy to zvládne kutil sám.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/schodistovy-vypinac-zapojeni" },
  openGraph: { title: "Schodišťový vypínač – jak zapojit a k čemu slouží 2026", description: "Schéma střídavého zapojení, rozdíl od obyčejného vypínače a kdy to zvládne kutil sám.", url: "https://www.domovniguru.cz/blog/schodistovy-vypinac-zapojeni", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-17T08:00:00Z", modifiedTime: "2026-06-17T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Schodi%C5%A1%C5%A5ov%C3%BD%20vyp%C3%ADna%C4%8D%20%E2%80%93%20jak%20zapojit%20a%20k%20%C4%8Demu%20slou%C5%BE%C3%AD%202026&cat=blog", width: 1200, height: 630, alt: "Schodišťový vypínač – jak zapojit a k čemu slouží 2026" }] },
  twitter: { card: "summary_large_image", title: "Schodišťový vypínač – jak zapojit a k čemu slouží 2026", description: "Schéma střídavého zapojení a kdy to zvládne kutil sám." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.domovniguru.cz/blog/schodistovy-vypinac-zapojeni#article",
      "headline": "Schodišťový vypínač – jak zapojit a k čemu slouží",
      "datePublished": "2026-06-17T08:00:00Z",
      "dateModified": "2026-06-17T08:00:00Z",
      "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "inLanguage": "cs",
      "keywords": ["schodišťový vypínač", "střídavé zapojení", "schodišťové zapojení schéma", "dvojitý vypínač zapojení", "křížové zapojení vypínačů", "vypínač ze dvou míst", "zapojení světla ze dvou míst"]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.domovniguru.cz/blog/schodistovy-vypinac-zapojeni#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Co je schodišťové zapojení vypínače?", "acceptedAnswer": { "@type": "Answer", "text": "Schodišťové (střídavé) zapojení umožňuje ovládat jedno svítidlo dvěma vypínači z různých míst — typicky dole a nahoře na schodech. Použijí se dva střídavé vypínače propojené dvěma spínacími vodiči místo jednoho." } },
        { "@type": "Question", "name": "Jaký je rozdíl mezi obyčejným a střídavým vypínačem?", "acceptedAnswer": { "@type": "Answer", "text": "Obyčejný (sériový) vypínač má dva kontakty a dva vodiče — jednoduše přerušuje obvod. Střídavý vypínač má přepínací kontakt se třemi vodiči — vstupní vodič se přepíná mezi dvěma výstupy, takže nepřerušuje obvod, ale přesměrovává ho." } },
        { "@type": "Question", "name": "Kolik vodičů potřebuji na schodišťové zapojení?", "acceptedAnswer": { "@type": "Answer", "text": "Od jistič ke prvnímu vypínači vede fáze (1 vodič). Mezi oběma vypínači vedou 2 spínací vodiče. Od druhého vypínače ke svítidlu vede 1 vodič zpět na svítidlo. Nulový vodič jde přímo z rozvaděče na svítidlo." } },
        { "@type": "Question", "name": "Zvládnu výměnu schodišťového vypínače sám?", "acceptedAnswer": { "@type": "Answer", "text": "Pokud měníš starý vypínač za nový se stejným typem zapojení a vodiče v krabici zůstávají stejné, zvládne to zkušenější kutil — stačí si vyfotit původní zapojení a vypnout jistič. Pokud je potřeba nové vedení nebo přidání krabice, jde o práci pro elektrikáře." } },
        { "@type": "Question", "name": "Co je křížové zapojení vypínačů?", "acceptedAnswer": { "@type": "Answer", "text": "Křížové zapojení rozšiřuje schodišťové zapojení na tři nebo více míst ovládání. Mezi dva krajní střídavé vypínače se vloží jeden nebo více křížových (předávacích) vypínačů se čtyřmi vodiči, které prohazují dvojici spínacích vodičů." } },
        { "@type": "Question", "name": "Jak ověřím, že je vedení bez napětí před prací?", "acceptedAnswer": { "@type": "Answer", "text": "Po vypnutí jističe ověř napětí fázovou tužkou nebo zkoušečkou na všech vodičích v krabici, nikdy nespoléhej jen na vypnutý jistič — může být špatně označený nebo se v krabici sbíhá více okruhů." } }
      ],
    }, {
      "@type": "HowTo",
      "@id": "https://www.domovniguru.cz/blog/schodistovy-vypinac-zapojeni#howto",
      "name": "Schodišťový vypínač – jak zapojit a k čemu slouží",
      "description": "Schodišťové (střídavé) zapojení vypínače umožní rozsvítit i zhasnout světlo ze dvou míst. Schéma zapojení, bezpečnost a kdy to zvládne kutil sám.",
      "step": [
        { "@type": "HowToStep", "name": "K čemu schodišťové zapojení slouží", "text": "Umožňuje rozsvítit a zhasnout stejné světlo ze dvou různých míst." },
        { "@type": "HowToStep", "name": "Rozdíl mezi obyčejným a střídavým vypínačem", "text": "Sériový vypínač přerušuje obvod, střídavý ho přepíná mezi dvěma výstupy." },
        { "@type": "HowToStep", "name": "Schéma zapojení krok za krokem", "text": "Fáze do prvního vypínače, mezi vypínači dva spínací vodiče, ze druhého vypínače do svítidla." },
        { "@type": "HowToStep", "name": "Bezpečnost při práci", "text": "Vždy vypni jistič a ověř fázovou tužkou, že vedení je bez napětí." },
        { "@type": "HowToStep", "name": "Kdy na to kutil a kdy elektrikář", "text": "Výměnu se stejným zapojením zvládne zkušenější kutil, nové vedení je práce pro elektrikáře." },
        { "@type": "HowToStep", "name": "Křížové zapojení pro tři a více míst", "text": "Rozšíření o křížový vypínač umožní ovládání ze tří a více míst." }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.domovniguru.cz/blog/schodistovy-vypinac-zapojeni#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" },
        { "@type": "ListItem", "position": 3, "name": "Elektrika & osvětlení", "item": "https://www.domovniguru.cz/blog/kategorie/elektrika" },
        { "@type": "ListItem", "position": 4, "name": "Schodišťový vypínač – jak zapojit a k čemu slouží", "item": "https://www.domovniguru.cz/blog/schodistovy-vypinac-zapojeni" }
      ]
    }
  ],
};

const RELATED = [
  { title: "Jak vyměnit vypínač sám", href: "/blog/jak-vymenit-vypinac", read: "5 min" },
  { title: "Jak instalovat stmívač", href: "/blog/instalovat-stmivac", read: "6 min" },
  { title: "Jak zapojit světlo na strop", href: "/blog/zapojit-svetlo-na-strop", read: "5 min" },
  { title: "Jak fungují pojistky a jak je vyměnit", href: "/blog/jak-funguji-pojistky", read: "4 min" },
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
              <Link href="/blog/kategorie/elektrika">Elektrika & osvětlení</Link><span className="breadcrumb-sep">/</span>
              <span>Schodišťový vypínač – zapojení</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">⚡ Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Schodišťový vypínač – jak zapojit a k čemu slouží</h1>
              <p className="article-lead">Rozsvítíš dole na schodech a zhasneš nahoře — bez chození zpátky ke zhasnutému vypínači. Schodišťové (střídavé) zapojení je jeden z nejčastějších dotazů kolem domácí elektroinstalace. Vysvětlíme princip, schéma i to, kdy to zvládneš sám a kdy zavolat elektrikáře.</p>
              <div className="article-meta-row"><span>Aktualizováno: 17. června 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/schodistovy-vypinac-zapojeni" title="Schodišťový vypínač – jak zapojit a k čemu slouží 2026" />
            </header>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#k-cemu-slouzi">K čemu schodišťové zapojení slouží</a></li>
                <li><a href="#rozdil">Rozdíl mezi obyčejným a střídavým vypínačem</a></li>
                <li><a href="#schema">Schéma zapojení krok za krokem</a></li>
                <li><a href="#bezpecnost">Bezpečnost při práci</a></li>
                <li><a href="#kutil-vs-elektrikar">Kdy na to kutil a kdy elektrikář</a></li>
                <li><a href="#krizove">Křížové zapojení pro tři a více míst</a></li>
                <li><a href="#chyby">Typické chyby</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="k-cemu-slouzi">
              <h2>K čemu schodišťové zapojení slouží</h2>
              <p>Schodišťové zapojení (odborně se mu říká také <strong>střídavé zapojení</strong>) řeší jednu praktickou věc: chceš ovládat jedno svítidlo ze dvou různých míst. Klasický příklad je schodiště — vypínač dole rozsvítí světlo, vypínač nahoře ho zase zhasne, a je úplně jedno, kterým z nich to uděláš jako první.</p>
              <ul>
                <li><strong>Schodiště mezi patry:</strong> rozsvítíš dole, zhasneš nahoře, nemusíš se vracet ve tmě.</li>
                <li><strong>Dlouhá chodba:</strong> vypínač na obou koncích — typicky v bytových domech nebo na chalupě.</li>
                <li><strong>Ložnice se dvěma vchody nebo postelí u dveří:</strong> jeden vypínač u dveří, druhý u postele, abys nemusel/a vstávat.</li>
                <li><strong>Garáž a dílna:</strong> vypínač u vrat a vypínač u pracovního stolu.</li>
              </ul>
              <p>Princip je vždy stejný — jde o pohodlí a bezpečnost, abys nemusel/a chodit tmou k jedinému vypínači na druhém konci prostoru.</p>
            </section>

            <section id="rozdil">
              <h2>Rozdíl mezi obyčejným a střídavým vypínačem</h2>
              <p>Aby zapojení ze dvou míst fungovalo, nestačí obyčejný vypínač — potřebuješ vypínač jiné konstrukce.</p>
              <h3>Obyčejný (sériový) vypínač</h3>
              <p>Má dva vodivé kontakty a dva vodiče — jeden vstupní, jeden výstupní. Funguje jako jednoduchý spínač: buď obvod spojuje (svítí), nebo ho rozpojuje (nesvítí). Pro ovládání z jednoho místa je to ideální a nejlevnější řešení.</p>
              <h3>Střídavý vypínač</h3>
              <p>Má přepínací kontakt a <strong>tři vodiče</strong> — jeden společný (vstupní) a dva přepínací (výstupní). Uvnitř nejde o spínač, ale o přepínač: vstupní vodič se přesměrovává buď na výstup A, nebo na výstup B. Obvod se tedy nikdy nepřerušuje úplně — jen se mění cesta, kterou proud teče k dalšímu vypínači nebo ke svítidlu.</p>
              <p>Navenek se střídavý vypínač od obyčejného často vůbec nepozná — rozdíl je uvnitř, ve svorkách. Proto je důležité při výměně vědět, jaký typ máš v krabici zapojený.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Na zadní straně střídavého vypínače najdeš obvykle tři svorky — jednu oddělenou (společná, často značená "L" nebo šipkou) a dvě vedle sebe (přepínací, "1" a "2"). U obyčejného vypínače jsou jen dvě svorky.</div>
            </section>

            <section id="schema">
              <h2>Schéma zapojení krok za krokem</h2>
              <p>Celé schodišťové zapojení má jen čtyři úseky vodičů. Stačí je pochopit v pořadí, jak proud teče.</p>
              <ul>
                <li><strong>1. Fáze z jističe do prvního vypínače:</strong> Fázový vodič (typicky hnědý nebo černý) vede z rozvaděče na společnou svorku prvního střídavého vypínače.</li>
                <li><strong>2. Dva spínací vodiče mezi vypínači:</strong> Z výstupních svorek prvního vypínače vedou dva samostatné vodiče (obvykle stejné barvy, např. šedé nebo černé) do výstupních svorek druhého vypínače. Tyto dva vodiče jsou srdcem celého zapojení — nesou informaci, kterým směrem je obvod aktuálně přepnutý.</li>
                <li><strong>3. Výstup ze druhého vypínače na svítidlo:</strong> Společná svorka druhého vypínače se propojí jedním vodičem se svítidlem (fázová svorka svítidla).</li>
                <li><strong>4. Nulový vodič přímo na svítidlo:</strong> Modrý nulový vodič (N) nejde přes žádný vypínač — vede přímo z rozvaděče na druhou svorku svítidla.</li>
              </ul>
              <p>Výsledek: ať sepneš kterýkoliv ze dvou vypínačů, obvod se buď uzavře, nebo rozpojí — podle toho, na který ze dvou spínacích vodičů je aktuálně přepnuto na obou stranách současně.</p>
              <h3>Co budeš potřebovat</h3>
              <ul>
                <li>2× střídavý vypínač (musí být oba stejného typu — "schodišťový" / "alternativní")</li>
                <li>Kabel s minimálně 3 vodiči mezi vypínači (často CYKY 3×1,5)</li>
                <li>Šroubovák, zkoušečka napětí, případně svorkovnice na propojení</li>
              </ul>
            </section>

            <section id="bezpecnost">
              <h2>Bezpečnost při práci</h2>
              <p>Práce na elektroinstalaci, byť jen výměna vypínače, vyžaduje dodržet základní bezpečnostní pravidla — bez výjimky.</p>
              <ul>
                <li><strong>Vždy vypni příslušný jistič v rozvaděči</strong> — ne jen vypínač na zdi. I při zhasnutém světle může být v krabici vypínače stále fáze pod napětím.</li>
                <li><strong>Ověř beznapěťový stav fázovou tužkou nebo zkoušečkou</strong> na všech vodičích v krabici, než se jich dotkneš. Vizuální kontrola jističe nestačí — může být špatně popsaný nebo se v jedné krabici sbíhá více okruhů z různých jističů.</li>
                <li><strong>Vyfoť si původní zapojení</strong> před odpojením vodičů — usnadní to zpětné připojení, pokud si nejsi jistý/á pořadím svorek.</li>
                <li><strong>Nepracuj sám/sama v domě, pokud si nejsi jistý/á</strong> — alespoň ať je někdo v dosahu, kdyby bylo potřeba rychle zasáhnout.</li>
              </ul>
              <div className="article-tip"><strong>⚠️ Pozor:</strong> Nikdy nespoléhej na to, že "to bude ten správný jistič". Levné fázové tužky stojí pár desítek korun a ušetří ti riziko úrazu elektrickým proudem.</div>
            </section>

            <section id="kutil-vs-elektrikar">
              <h2>Kdy na to kutil a kdy elektrikář</h2>
              <p>Schodišťové zapojení není složité, ale rozsah práce rozhoduje o tom, jestli je to bezpečné zvládnout sám/sama.</p>
              <h3>Zvládne zkušenější kutil</h3>
              <ul>
                <li>Výměna starého vypínače za nový <strong>se stejným typem zapojení</strong> — vodiče v krabici zůstávají na svém místě, jen se přesunou na nové svorky.</li>
                <li>Výměna obou vypínačů za stejný model, např. z důvodu opotřebení nebo designu.</li>
              </ul>
              <h3>Práce pro elektrikáře</h3>
              <ul>
                <li>Zavádění <strong>nového vedení</strong> tam, kde dosud žádné nebylo (nový druhý vypínač, kam dosud nevedl kabel).</li>
                <li>Přidávání nových krabic nebo úprava tras kabelů ve zdi.</li>
                <li>Pokud nevíš, který vodič je fáze, který nulák a který spínací — a v krabici nejsou barvy jednoznačné.</li>
                <li>Starší instalace s neobvyklým barevným kódováním vodičů (časté v domech postavených před rokem 2000).</li>
              </ul>
              <p>Jednoduché pravidlo: pokud měníš jen "krabičku na zdi" a vodiče zůstávají stejné, jde o bezpečnou výměnu. Pokud bys měl/a tahat nové kabely nebo bourat do zdi, zavolej odborníka.</p>
            </section>

            <section id="krizove">
              <h2>Křížové zapojení pro tři a více míst</h2>
              <p>Pokud chceš ovládat světlo ze tří nebo více míst (typicky dlouhá chodba se třemi vchody nebo schodiště se třemi podlažími), schodišťové zapojení samo nestačí — potřebuješ ho rozšířit o tzv. <strong>křížové (předávací) zapojení</strong>.</p>
              <p>Princip: na obou krajích zůstávají střídavé vypínače stejné jako u schodišťového zapojení. Mezi ně se ale vloží jeden nebo více <strong>křížových vypínačů</strong> se čtyřmi vodiči — ty dokážou prohodit dvojici spínacích vodičů mezi sebou. Každý další bod ovládání tak znamená jeden další křížový vypínač zapojený do "série" mezi oba krajní vypínače.</p>
              <p>Pro běžnou domácnost je tato situace vzácná, ale dobré je vědět, že existuje — pokud projektuješ elektroinstalaci u dlouhé chodby nebo vícepodlažního schodiště, počítej s tím už při návrhu kabeláže.</p>
            </section>

            <section id="chyby">
              <h2>Typické chyby</h2>
              <ul>
                <li><strong>Záměna fázového a spínacích vodičů:</strong> Pokud se fázový vodič omylem zapojí na spínací svorku, obvod buď nefunguje vůbec, nebo (hůř) je pod napětím i v zhasnutém stavu na nečekaném místě. Při zapojování si vždy ověř, která svorka je společná a která přepínací.</li>
                <li><strong>Špatně dotažené šroubové spoje:</strong> Uvolněný spoj ve svorce způsobuje jiskření, zahřívání vodiče a postupem času i požár. Po zapojení vždy zkontroluj, že je každý vodič pevně dotažený a nejde ho vytáhnout jemným tahem.</li>
                <li><strong>Prohození obou spínacích vodičů u jednoho vypínače:</strong> Funkčně to nevadí (zapojení bude fungovat stejně), ale je to zbytečný zdroj zmatku při pozdější údržbě — držet konzistentní pořadí (např. "1" vždy nahoře) usnadní práci do budoucna.</li>
                <li><strong>Použití obyčejného vypínače místo střídavého:</strong> Pokud omylem nainstaluješ sériový vypínač na místo střídavého, zapojení nebude fungovat správně — světlo se nedá ovládat z obou míst nezávisle.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Co je schodišťové zapojení vypínače?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Schodišťové (střídavé) zapojení umožňuje ovládat jedno svítidlo dvěma vypínači z různých míst — typicky dole a nahoře na schodech. Použijí se dva střídavé vypínače propojené dvěma spínacími vodiči místo jednoho.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jaký je rozdíl mezi obyčejným a střídavým vypínačem?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Obyčejný (sériový) vypínač má dva kontakty a dva vodiče — jednoduše přerušuje obvod. Střídavý vypínač má přepínací kontakt se třemi vodiči — vstupní vodič se přepíná mezi dvěma výstupy, takže nepřerušuje obvod, ale přesměrovává ho.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Kolik vodičů potřebuji na schodišťové zapojení?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Od jističe ke prvnímu vypínači vede fáze (1 vodič). Mezi oběma vypínači vedou 2 spínací vodiče. Od druhého vypínače ke svítidlu vede 1 vodič zpět na svítidlo. Nulový vodič jde přímo z rozvaděče na svítidlo.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Zvládnu výměnu schodišťového vypínače sám?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Pokud měníš starý vypínač za nový se stejným typem zapojení a vodiče v krabici zůstávají stejné, zvládne to zkušenější kutil — stačí si vyfotit původní zapojení a vypnout jistič. Pokud je potřeba nové vedení nebo přidání krabice, jde o práci pro elektrikáře.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Co je křížové zapojení vypínačů?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Křížové zapojení rozšiřuje schodišťové zapojení na tři nebo více míst ovládání. Mezi dva krajní střídavé vypínače se vloží jeden nebo více křížových (předávacích) vypínačů se čtyřmi vodiči, které prohazují dvojici spínacích vodičů.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak ověřím, že je vedení bez napětí před prací?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Po vypnutí jističe ověř napětí fázovou tužkou nebo zkoušečkou na všech vodičích v krabici, nikdy nespoléhej jen na vypnutý jistič — může být špatně označený nebo se v krabici sbíhá více okruhů.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/schodistovy-vypinac-zapojeni" title="Schodišťový vypínač – jak zapojit a k čemu slouží 2026" />

            <section className="related-section">
              <h2>Související články</h2>
              <div className="related-grid">
                {RELATED.map((r) => (
                  <Link key={r.href} href={r.href} className="card">
                    <div className="card-eyebrow-row"><span>Elektrika & osvětlení</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#k-cemu-slouzi">K čemu slouží</a></li>
                <li><a href="#rozdil">Rozdíl vypínačů</a></li>
                <li><a href="#schema">Schéma zapojení</a></li>
                <li><a href="#bezpecnost">Bezpečnost</a></li>
                <li><a href="#kutil-vs-elektrikar">Kutil vs. elektrikář</a></li>
                <li><a href="#krizove">Křížové zapojení</a></li>
                <li><a href="#chyby">Typické chyby</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/elektrika" className="sidebar-cat-link">⚡ Elektrika & osvětlení<span>20 článků →</span></Link>
            </div>
          </aside>
        </div>
      </div>
      <style>{`
        .article-layout{display:grid;grid-template-columns:1fr 280px;gap:56px;padding:48px 0 80px;align-items:start}
        .article-header{margin-bottom:32px}
        .article-meta-top{display:flex;align-items:center;gap:12px;margin-bottom:16px}
        .article-cat-pill{display:inline-flex;align-items:center;height:24px;padding:0 12px;border-radius:999px;border:1px solid var(--border);background:var(--surface);font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);text-decoration:none;transition:background 120ms}
        .article-cat-pill:hover{background:#e8e7e2;color:var(--text)}
        .article-read-time{font-size:12px;color:var(--muted);font-weight:500}
        .article-h1{font-family:var(--font-serif);font-size:clamp(26px,3.5vw,40px);line-height:1.1;font-weight:400;letter-spacing:-.01em;margin-bottom:16px}
        .article-lead{font-size:18px;line-height:1.65;color:var(--muted);font-weight:300;margin-bottom:14px}
        .article-meta-row{display:flex;gap:8px;font-size:12px;color:var(--muted);font-weight:500}
        .toc{background:var(--surface);border-radius:10px;padding:20px 24px;margin-bottom:40px}
        .toc-label{font-size:11px;font-weight:700;letter-spacing:.10em;text-transform:uppercase;color:var(--muted);margin-bottom:12px}
        .toc-list{padding-left:18px;display:flex;flex-direction:column;gap:6px}
        .toc-list li a{font-size:14px;color:var(--muted);text-decoration:none;font-weight:400;transition:color 120ms}
        .toc-list li a:hover{color:var(--text)}
        .article-body section{margin-bottom:48px}
        .article-body h2{font-family:var(--font-serif);font-size:clamp(20px,2.5vw,26px);font-weight:400;line-height:1.2;margin-bottom:16px;border-top:1px solid var(--border);padding-top:24px;margin-top:8px}
        .article-body h3{font-family:var(--font-sans);font-size:16px;font-weight:600;margin-top:24px;margin-bottom:10px;color:var(--text)}
        .article-body p{font-size:16px;line-height:1.75;color:#2a2a28;font-weight:300;margin-bottom:14px}
        .article-body ul,.article-body ol{padding-left:22px;margin-bottom:16px;display:flex;flex-direction:column;gap:8px}
        .article-body li{font-size:15px;line-height:1.6;color:#2a2a28;font-weight:300}
        .article-body strong{font-weight:600;color:var(--text)}
        .article-tip{background:#fff8e8;border-left:3px solid #f59e0b;border-radius:0 8px 8px 0;padding:14px 18px;font-size:14px;line-height:1.6;color:#78716c;margin:20px 0}
        .faq-list{display:flex;flex-direction:column;gap:8px;margin-top:16px}
        .faq-item{border:1px solid var(--border);border-radius:10px;overflow:hidden}
        .faq-summary{display:flex;justify-content:space-between;align-items:center;padding:14px 18px;cursor:pointer;font-size:15px;font-weight:500;color:var(--text);background:var(--surface);list-style:none;gap:12px}
        .faq-summary:hover{background:#e8e7e2}
        .faq-icon{flex-shrink:0;color:var(--muted);transition:transform 200ms;font-size:14px}
        details[open] .faq-icon{transform:rotate(180deg)}
        .faq-body{padding:14px 18px;font-size:14px;line-height:1.7;color:#4a4a48;font-weight:300;border-top:1px solid var(--border);background:#fff}
        .related-section{margin-top:56px}
        .related-section h2{font-family:var(--font-serif);font-size:22px;font-weight:400;margin-bottom:20px;padding-top:24px;border-top:1px solid var(--border)}
        .related-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
        .article-sidebar{position:sticky;top:80px;display:flex;flex-direction:column;gap:16px}
        .sidebar-widget{background:#fff;border:1px solid var(--border);border-radius:12px;padding:20px}
        .sidebar-widget-title{font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-bottom:14px}
        .sidebar-toc{list-style:none;display:flex;flex-direction:column;gap:8px}
        .sidebar-toc li a{font-size:13px;color:var(--muted);text-decoration:none;font-weight:400;transition:color 120ms;line-height:1.4;display:block}
        .sidebar-toc li a:hover{color:var(--text)}
        .sidebar-cat-link{display:flex;justify-content:space-between;align-items:center;font-size:14px;font-weight:500;color:var(--text);text-decoration:none;padding:8px 0;border-bottom:1px solid var(--border);transition:color 120ms}
        .sidebar-cat-link:hover{color:var(--muted)}
        .sidebar-cat-link span{font-size:12px;color:var(--muted)}
        @media(max-width:960px){.article-layout{grid-template-columns:1fr;gap:0}.article-sidebar{position:static;margin-top:40px}.related-grid{grid-template-columns:1fr}}
      `}</style>
    </>
  );
}
