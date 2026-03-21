import type { Metadata } from "next";
import Link from "next/link";
import PaintCalculator from "@/app/components/PaintCalculator";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
<PaintCalculator />
export const metadata: Metadata = {
  title: "Latexová vs. akrylátová barva – jaký je rozdíl? 2025",
  description:
    "Latexová nebo akrylátová barva? Porovnání omyvatelnosti, ceny, trvanlivosti a vhodnosti pro různé místnosti. Poradíme, co koupit.",
  alternates: {
    canonical: "https://domovniguru.cz/blog/latexova-vs-akrylatova-barva",
  },
  openGraph: {
    title: "Latexová vs. akrylátová barva – jaký je rozdíl? 2025",
    description:
      "Porovnání latexové a akrylátové barvy: omyvatelnost, cena, trvanlivost a pro které místnosti se hodí.",
    url: "https://domovniguru.cz/blog/latexova-vs-akrylatova-barva",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "article",
    publishedTime: "2025-01-20T08:00:00Z",
    modifiedTime: "2025-03-01T08:00:00Z",
    authors: ["DomovniGuru"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Latexová vs. akrylátová barva – jaký je rozdíl?",
    description:
      "Porovnání omyvatelnosti, ceny, trvanlivosti. Která barva je pro tebe správná?",
  },
};

// ─── Schema.org JSON-LD ───────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://domovniguru.cz/blog/latexova-vs-akrylatova-barva#article",
      "headline": "Latexová vs. akrylátová barva – jaký je rozdíl? 2025",
      "description":
        "Porovnání latexové a akrylátové barvy: omyvatelnost, cena, trvanlivost a pro které místnosti se hodí.",
      "datePublished": "2025-01-20T08:00:00Z",
      "dateModified": "2025-03-01T08:00:00Z",
      "author": {
        "@type": "Organization",
        "name": "DomovniGuru",
        "url": "https://domovniguru.cz",
      },
      "publisher": {
        "@type": "Organization",
        "name": "DomovniGuru",
        "url": "https://domovniguru.cz",
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://domovniguru.cz/blog/latexova-vs-akrylatova-barva",
      },
      "inLanguage": "cs",
      "keywords": [
        "latexová barva",
        "akrylátová barva",
        "latexová vs akrylátová",
        "jakou barvu na zeď",
        "malování interiéru barva",
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://domovniguru.cz/blog/latexova-vs-akrylatova-barva#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Domů",             "item": "https://domovniguru.cz" },
        { "@type": "ListItem", "position": 2, "name": "Blog",             "item": "https://domovniguru.cz/blog" },
        { "@type": "ListItem", "position": 3, "name": "Malování & barvy", "item": "https://domovniguru.cz/blog/kategorie/malovani" },
        { "@type": "ListItem", "position": 4, "name": "Latexová vs. akrylátová barva", "item": "https://domovniguru.cz/blog/latexova-vs-akrylatova-barva" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://domovniguru.cz/blog/latexova-vs-akrylatova-barva#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Je latexová barva lepší než akrylátová?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Latexová barva má lepší omyvatelnost a trvanlivost, ale je dražší. Akrylátová barva je levnější a pro běžné místnosti jako ložnice nebo obývák plně dostačující.",
          },
        },
        {
          "@type": "Question",
          "name": "Která barva je vhodná do kuchyně?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Do kuchyně doporučujeme latexovou barvu s povrchovou úpravou hedvábný mat nebo pololesk. Snadno se otírá od mastnoty a odolá vlhkosti lépe než akrylátová.",
          },
        },
        {
          "@type": "Question",
          "name": "Lze latexovou a akrylátovou barvu kombinovat?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Kombinovat je lze – například akrylátová barva jako základní nátěr a latexová jako vrchní vrstva v namáhaných místech. Vždy se řiď doporučením výrobce.",
          },
        },
        {
          "@type": "Question",
          "name": "Jak poznám, která barva je latexová?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Na etiketě hledej označení 'latex', 'latexová', 'omyvatelná' nebo symbol kartáče s číslem označujícím třídu omyvatelnosti (třídy 1–2 jsou nejodolnější).",
          },
        },
        {
          "@type": "Question",
          "name": "Kolik stojí latexová barva oproti akrylátové?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Akrylátová barva stojí typicky 200–400 Kč za 4 litry. Latexová barva ve stejném objemu vyjde na 400–800 Kč. Prémiové latexové barvy mohou být i dražší.",
          },
        },
      ],
    },
  ],
};

// ─── Related articles ─────────────────────────────────────────────────────────

const RELATED = [
  { title: "Jak malovat zeď – kompletní průvodce pro začátečníky",  href: "/blog/jak-malovat-zed",               read: "5 min" },
  { title: "Penetrace před malováním – kdy je nutná?",              href: "/blog/penetrace-pred-malovanim",      read: "4 min" },
  { title: "Jak malovat přes tmavou barvu na světlo",               href: "/blog/malovat-pres-tmavou-barvu",     read: "3 min" },
  { title: "Jak malovat rohy a lišty bez přetahování",              href: "/blog/jak-malovat-rohy-a-listy",      read: "3 min" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ArticlePage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="wrap">
        <div className="article-layout">

          {/* ── Main content ── */}
          <article className="article-body">

            {/* Breadcrumb */}
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Domů</Link>
              <span className="breadcrumb-sep">/</span>
              <Link href="/blog">Blog</Link>
              <span className="breadcrumb-sep">/</span>
              <Link href="/blog/kategorie/malovani">Malování & barvy</Link>
              <span className="breadcrumb-sep">/</span>
              <span>Latexová vs. akrylátová barva</span>
            </nav>

            {/* Header */}
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">
                  🎨 Malování & barvy
                </Link>
                <span className="article-read-time">⏱ 4 min čtení</span>
              </div>
              <h1 className="article-h1">
                Latexová vs. akrylátová barva – jaký je rozdíl?
              </h1>
              <p className="article-lead">
                Na první pohled vypadají stejně. Obě jsou bílé, obě smrdí podobně a obě se
                nanášejí válečkem. Přesto mezi nimi je zásadní rozdíl – a záleží na tom,
                do které místnosti malujete.
              </p>
              <div className="article-meta-row">
                <span>Aktualizováno: 1. března 2025</span>
                <span>·</span>
                <span>DomovniGuru</span>
              </div>
            </header>

            {/* TOC */}
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#co-je-rozdil">Základní rozdíl</a></li>
                <li><a href="#porovnani">Srovnání vlastností</a></li>
                <li><a href="#kde-co-pouzit">Kde co použít</a></li>
                <li><a href="#povrchy">Matná, hedvábná nebo lesklá?</a></li>
                <li><a href="#cena">Cena a co za ni dostaneš</a></li>
                <li><a href="#tipy">Praktické tipy při nákupu</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            {/* ── Section 1 ── */}
            <section id="co-je-rozdil">
              <h2>Základní rozdíl mezi latexovou a akrylátovou barvou</h2>
              <p>
                Obě barvy jsou na vodní bázi a neobsahují rozpouštědla – to je spojuje.
                Rozdíl je v pojivové složce. Akrylátové barvy používají jako pojivo čistý
                akrylátový polymer. Latexové barvy mají pojivo na bázi syntetického latexu
                (nejčastěji styrén-akrylátová nebo vinylová emulze), což jim dává vyšší
                pružnost, lepší omyvatelnost a odolnost.
              </p>
              <p>
                V praxi to znamená: latexová barva lépe snáší otírání, čištění a mechanické
                namáhání. Akrylátová barva je levnější a pro méně namáhané místnosti
                naprosto dostačující.
              </p>
              <div className="article-tip">
                <strong>💡 Tip:</strong> Název „latexová" a „akrylátová" nejsou v českých
                obchodech vždy přesně používané. Spolehlivější vodítko je třída omyvatelnosti
                na etiketě – třídy 1 a 2 jsou nejodolnější.
              </div>
            </section>

            {/* ── Section 2 ── */}
            <section id="porovnani">
              <h2>Srovnání vlastností</h2>
              <p>
                Přehledná tabulka ti pomůže rychle rozhodnout, která barva je pro tvůj
                případ vhodnější:
              </p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead>
                    <tr>
                      <th>Vlastnost</th>
                      <th>Latexová barva</th>
                      <th>Akrylátová barva</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Omyvatelnost</td>
                      <td>✅ Výborná (třída 1–2)</td>
                      <td>Dobrá (třída 2–3)</td>
                    </tr>
                    <tr>
                      <td>Trvanlivost</td>
                      <td>✅ Vyšší, odolnější otěru</td>
                      <td>Dobrá pro méně namáhané místnosti</td>
                    </tr>
                    <tr>
                      <td>Cena (4 l)</td>
                      <td>400–800 Kč</td>
                      <td>200–400 Kč</td>
                    </tr>
                    <tr>
                      <td>Odolnost vlhkosti</td>
                      <td>✅ Vyšší</td>
                      <td>Střední</td>
                    </tr>
                    <tr>
                      <td>Zápach při sušení</td>
                      <td>Minimální</td>
                      <td>Minimální</td>
                    </tr>
                    <tr>
                      <td>Doba schnutí</td>
                      <td>1–2 hodiny k dotyku</td>
                      <td>1–2 hodiny k dotyku</td>
                    </tr>
                    <tr>
                      <td>Vydatnost</td>
                      <td>8–12 m²/l</td>
                      <td>8–12 m²/l</td>
                    </tr>
                    <tr>
                      <td>Vhodné pro</td>
                      <td>Kuchyně, chodby, dětské pokoje</td>
                      <td>Ložnice, obývák, pracovna</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* ── Section 3 ── */}
            <section id="kde-co-pouzit">
              <h2>Kde co použít – doporučení podle místnosti</h2>

              <h3>Kuchyně a jídelna</h3>
              <p>
                Jednoznačně latexová barva. Stěny v kuchyni jsou vystaveny mastnému
                aerosolu, parám a častému otírání. Akrylátová barva by se po několika měsících
                začala otírat a špinit. Latexová barva s hedvábným matem nebo pololeskem
                tady vydrží roky.
              </p>

              <h3>Chodba a předsíň</h3>
              <p>
                Opět latexová. Chodba trpí rukama, batohy a kabáty. Je to nejnamáhanější
                místo v bytě a levná barva se tu vyplatí nejméně – přemalování jednou za rok
                stojí víc než rozdíl v ceně barvy.
              </p>

              <h3>Dětský pokoj</h3>
              <p>
                Latexová barva s dobrou omyvatelností (třída 1). Děti malují na zdi, sahají
                na ně špinavýma rukama a občas do nich narážejí hračkami. Barva musí jít
                omýt bez toho, aby se odřela.
              </p>

              <h3>Ložnice a pracovna</h3>
              <p>
                Tady se stěny tolik nenamáhají a akrylátová barva plně postačí. Ušetříš
                a výsledek bude vizuálně stejný. Pokud chceš ale větší jistotu nebo plánuješ
                za pár let přemalovat tmavší barvou, i tady latexová nezaškodí.
              </p>

              <h3>Obývací pokoj</h3>
              <p>
                Záleží na životním stylu. Pokud máš malé děti nebo mazlíčky – latexová.
                Pro dospáckou domácnost bez velké zátěže stěn – akrylátová je v pořádku.
              </p>

              <div className="article-tip">
                <strong>💡 Tip:</strong> Koupelnu a vlhké sklepy nerešte ani latexovou
                ani akrylátovou barvou na stěny – tam patří speciální koupelnová nebo
                fasádní barva s protiplísňovou úpravou.
              </div>

              {/* Internal link to calculator */}
              <div className="article-cta-box">
                <div className="article-cta-icon">🪣</div>
                <div>
                  <div className="article-cta-title">Víš, jakou barvu chceš? Spočítej kolik jí potřebuješ.</div>
                  <p className="article-cta-desc">
                    Zadej plochu místnosti a naše kalkulačka ti řekne přesný počet litrů
                    i balení – pro jednu i dvě vrstvy.
                  </p>
                  <Link href="/kalkulacky/kolik-barvy" className="btn btn-black">
                    Spustit kalkulačku barvy →
                  </Link>
                </div>
              </div>
            </section>

            {/* ── Section 4 ── */}
            <section id="povrchy">
              <h2>Matná, hedvábná nebo lesklá? Povrchová úprava rozhoduje</h2>
              <p>
                Ať zvolíš latexovou nebo akrylátovou barvu, musíš se ještě rozhodnout
                pro povrchovou úpravu. Ta ovlivňuje praktičnost i výsledný vzhled místnosti.
              </p>
              <ul>
                <li>
                  <strong>Matný povrch</strong> – zakryje nerovnosti a nepravidelnosti zdi,
                  působí elegantně a vzdušně. Nevýhoda: hůře se otírá, při čištění může
                  zanechat lesklá místa.
                </li>
                <li>
                  <strong>Hedvábný mat</strong> – nejoblíbenější kompromis. Má jemný lesk,
                  dobře se otírá a nevyzdvihuje tolik nerovností jako pololesk. Vhodný
                  do obývacích pokojů, chodeb i dětských pokojů.
                </li>
                <li>
                  <strong>Pololesk a lesk</strong> – maximálně omyvatelný, odolný.
                  Nevýhoda: zdůrazní každou nerovnost zdi. Vhodný do kuchyní, koupelen
                  a na dřevěné prvky.
                </li>
              </ul>

              <div className="article-table-wrap">
                <table className="article-table">
                  <thead>
                    <tr>
                      <th>Povrch</th>
                      <th>Omyvatelnost</th>
                      <th>Zakrývá nerovnosti</th>
                      <th>Kde použít</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Matný</td>
                      <td>Nízká</td>
                      <td>✅ Ano</td>
                      <td>Ložnice, pracovna</td>
                    </tr>
                    <tr>
                      <td>Hedvábný mat</td>
                      <td>Střední</td>
                      <td>Částečně</td>
                      <td>Obývák, chodba, dětský pokoj</td>
                    </tr>
                    <tr>
                      <td>Pololesk</td>
                      <td>✅ Vysoká</td>
                      <td>Ne</td>
                      <td>Kuchyně, koupelna</td>
                    </tr>
                    <tr>
                      <td>Lesk</td>
                      <td>✅ Nejvyšší</td>
                      <td>Ne</td>
                      <td>Dřevěné prvky, dveře</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* ── Section 5 ── */}
            <section id="cena">
              <h2>Cena a co za ni dostaneš</h2>
              <p>
                Cena barvy je důležitá, ale není jediný faktor. Levná barva s nízkou
                vydatností tě může vyjít dráž než dražší barva s lepším pokrytím.
              </p>

              <h3>Akrylátové barvy (200–400 Kč / 4 l)</h3>
              <p>
                Základní akrylátové barvy jsou dostupné v každém hobby marketu.
                Vydatnost bývá 8–10 m²/l, potřebuješ 2 vrstvy. Na ložnici 12 m²
                vystačí jedna 4litrová plechovka. Pro méně namáhané místnosti
                je to ekonomická volba.
              </p>

              <h3>Latexové barvy (400–800 Kč / 4 l)</h3>
              <p>
                Vyšší cena je vyvážena vyšší trvanlivostí a omyvatelností.
                Latexová barva v kuchyni vydrží 5–8 let bez přemalování, zatímco
                levná akrylátová barva tam může „stárnout" viditelně už po 2–3 letech.
                Z dlouhodobého hlediska se latexová barva v namáhaných místnostech vyplatí.
              </p>

              <h3>Prémiové barvy (nad 800 Kč / 4 l)</h3>
              <p>
                Prémiové latexové barvy od značek jako Dulux, Primalex Polar nebo Caparol
                nabízí vydatnost 10–14 m²/l a speciální vlastnosti – antistatický povrch,
                ochrana proti plísni nebo barvy pro alergiky s minimální emisí VOC.
                Vyplatí se v dětských pokojích a pro lidi s citlivostí na chemické výpary.
              </p>
            </section>

            {/* ── Section 6 ── */}
            <section id="tipy">
              <h2>Praktické tipy při nákupu barvy</h2>

              <h3>Čti etiketu, ne jen název</h3>
              <p>
                Výrobci někdy nazývají barvy kreativně – „prémiová", „profesionální",
                „ultra". Spolehlivý údaj je třída omyvatelnosti podle normy EN 13300:
                třída 1 a 2 jsou nejodolnější, třída 5 nejméně.
              </p>

              <h3>Kup o litr víc</h3>
              <p>
                Vždy si zapiš přesné označení barvy a šarži. Pokud ti barva nestačí
                nebo potřebuješ opravit škrábanec za rok, bez přesného označení
                nenamícháš stejný odstín.
              </p>

              <h3>Testuj před nátěrem celé místnosti</h3>
              <p>
                Barva na vzorníku a barva na zdi vypadá jinak – záleží na osvětlení,
                podkladu i sousedních barvách. Vždy namaž testovací plochu aspoň
                50 × 50 cm a posuď ve dne i večer při umělém osvětlení.
              </p>

              <h3>Bílá není jen bílá</h3>
              <p>
                Bílé barvy mají desítky odstínů – teplá bílá, studená bílá, krémová.
                Na severní stěnu se hodí teplejší odstín, na jižní studený.
                Špatně zvolená bílá může místnost udělat nepříjemně chladnou nebo
                naopak nažloutlou.
              </p>

              <div className="article-cta-box">
                <div className="article-cta-icon">🧮</div>
                <div>
                  <div className="article-cta-title">Spočítej, kolik barvy potřebuješ</div>
                  <p className="article-cta-desc">
                    Zadej rozměry místnosti a kalkulačka ti spočítá litry i balení –
                    pro jednu i dvě vrstvy, s rezervou.
                  </p>
                  <Link href="/kalkulacky/kolik-barvy" className="btn btn-black">
                    Spustit kalkulačku →
                  </Link>
                </div>
              </div>
            </section>

            {/* ── FAQ ── */}
            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  {
                    q: "Je latexová barva lepší než akrylátová?",
                    a: "Latexová barva má lepší omyvatelnost a trvanlivost, ale je dražší. Akrylátová barva je levnější a pro běžné místnosti jako ložnice nebo obývák plně dostačující.",
                  },
                  {
                    q: "Která barva je vhodná do kuchyně?",
                    a: "Do kuchyně doporučujeme latexovou barvu s povrchovou úpravou hedvábný mat nebo pololesk. Snadno se otírá od mastnoty a odolá vlhkosti lépe než akrylátová.",
                  },
                  {
                    q: "Lze latexovou a akrylátovou barvu kombinovat?",
                    a: "Kombinovat je lze – například akrylátová barva jako základní nátěr a latexová jako vrchní vrstva v namáhaných místech. Vždy se řiď doporučením výrobce.",
                  },
                  {
                    q: "Jak poznám, která barva je latexová?",
                    a: "Na etiketě hledej označení 'latex', 'latexová', 'omyvatelná' nebo symbol kartáče s číslem označujícím třídu omyvatelnosti (třídy 1–2 jsou nejodolnější).",
                  },
                  {
                    q: "Kolik stojí latexová barva oproti akrylátové?",
                    a: "Akrylátová barva stojí typicky 200–400 Kč za 4 litry. Latexová barva ve stejném objemu vyjde na 400–800 Kč. Prémiové latexové barvy mohou být i dražší.",
                  },
                ].map(({ q, a }) => (
                  <details key={q} className="faq-item">
                    <summary className="faq-q">{q}</summary>
                    <p className="faq-a">{a}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* ── Related articles ── */}
            <section className="related-section">
              <h2>Související články</h2>
              <div className="related-grid">
                {RELATED.map((r) => (
                  <Link key={r.href} href={r.href} className="card">
                    <div className="card-eyebrow-row">
                      <span>Malování & barvy</span>
                      <span>⏱ {r.read}</span>
                    </div>
                    <div className="card-h" style={{ fontSize: 15 }}>{r.title}</div>
                    <div className="card-arrow">Číst →</div>
                  </Link>
                ))}
              </div>
            </section>

          </article>

          {/* ── Sidebar ── */}
          <aside className="article-sidebar">

            {/* Sticky TOC */}
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Obsah</div>
              <nav>
                <ul className="sidebar-toc">
                  <li><a href="#co-je-rozdil">Základní rozdíl</a></li>
                  <li><a href="#porovnani">Srovnání vlastností</a></li>
                  <li><a href="#kde-co-pouzit">Kde co použít</a></li>
                  <li><a href="#povrchy">Matná, hedvábná, lesklá</a></li>
                  <li><a href="#cena">Cena</a></li>
                  <li><a href="#tipy">Tipy při nákupu</a></li>
                  <li><a href="#faq">Časté otázky</a></li>
                </ul>
              </nav>
            </div>

            {/* Calculator CTA */}
            <div className="sidebar-widget sidebar-cta">
              <div style={{ fontSize: 32, marginBottom: 10 }}>🪣</div>
              <div className="sidebar-cta-title">Kalkulačka barvy</div>
              <p className="sidebar-cta-desc">
                Zadej plochu a dostaneš přesný počet litrů i balení.
              </p>
              <Link href="/kalkulacky/kolik-barvy" className="btn btn-black" style={{ width: "100%", justifyContent: "center", marginTop: 14 }}>
                Spustit →
              </Link>
            </div>

            {/* Category link */}
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/malovani" className="sidebar-cat-link">
                🎨 Malování & barvy
                <span>20 článků →</span>
              </Link>
            </div>

          </aside>

        </div>
      </div>

      {/* ── Article styles ── */}
      <style>{`
        .article-layout {
          display: grid;
          grid-template-columns: 1fr 280px;
          gap: 56px;
          padding: 48px 0 80px;
          align-items: start;
        }

        /* ── Header ── */
        .article-header { margin-bottom: 32px; }
        .article-meta-top {
          display: flex; align-items: center; gap: 12px; margin-bottom: 16px;
        }
        .article-cat-pill {
          display: inline-flex; align-items: center; height: 24px; padding: 0 12px;
          border-radius: 999px; border: 1px solid var(--border);
          background: var(--surface); font-size: 11px; font-weight: 600;
          letter-spacing: 0.06em; text-transform: uppercase; color: var(--muted);
          text-decoration: none; transition: background 120ms;
        }
        .article-cat-pill:hover { background: #e8e7e2; color: var(--text); }
        .article-read-time { font-size: 12px; color: var(--muted); font-weight: 500; }
        .article-h1 {
          font-family: var(--font-serif);
          font-size: clamp(26px, 3.5vw, 40px);
          line-height: 1.1; font-weight: 400;
          letter-spacing: -0.01em; margin-bottom: 16px;
        }
        .article-lead {
          font-size: 18px; line-height: 1.65; color: var(--muted);
          font-weight: 300; margin-bottom: 14px;
        }
        .article-meta-row {
          display: flex; gap: 8px; font-size: 12px;
          color: var(--muted); font-weight: 500;
        }

        /* ── TOC (inline) ── */
        .toc {
          background: var(--surface); border-radius: 10px;
          padding: 20px 24px; margin-bottom: 40px;
        }
        .toc-label {
          font-size: 11px; font-weight: 700; letter-spacing: 0.10em;
          text-transform: uppercase; color: var(--muted); margin-bottom: 12px;
        }
        .toc-list {
          padding-left: 18px; display: flex; flex-direction: column; gap: 6px;
        }
        .toc-list li a {
          font-size: 14px; color: var(--muted); text-decoration: none;
          font-weight: 400; transition: color 120ms;
        }
        .toc-list li a:hover { color: var(--text); }

        /* ── Article sections ── */
        .article-body section {
          margin-bottom: 48px;
        }
        .article-body h2 {
          font-family: var(--font-serif);
          font-size: clamp(20px, 2.5vw, 26px);
          font-weight: 400; line-height: 1.2;
          margin-bottom: 16px; padding-top: 8px;
          border-top: 1px solid var(--border);
          padding-top: 24px; margin-top: 8px;
        }
        .article-body h3 {
          font-family: var(--font-sans);
          font-size: 16px; font-weight: 600;
          margin-top: 24px; margin-bottom: 10px; color: var(--text);
        }
        .article-body p {
          font-size: 16px; line-height: 1.75; color: #2a2a28;
          font-weight: 300; margin-bottom: 14px;
        }
        .article-body ul, .article-body ol {
          padding-left: 22px; margin-bottom: 16px;
          display: flex; flex-direction: column; gap: 8px;
        }
        .article-body li {
          font-size: 15px; line-height: 1.6; color: #2a2a28; font-weight: 300;
        }
        .article-body strong { font-weight: 600; color: var(--text); }

        /* ── Tip box ── */
        .article-tip {
          background: #fffbeb;
          border-left: 3px solid #f59e0b;
          border-radius: 0 8px 8px 0;
          padding: 14px 18px;
          font-size: 14px; line-height: 1.6;
          color: #78716c; margin: 20px 0;
        }

        /* ── CTA box (internal link) ── */
        .article-cta-box {
          display: flex; gap: 20px; align-items: flex-start;
          background: var(--surface); border-radius: 12px;
          padding: 24px; margin: 28px 0; border: 1px solid var(--border);
        }
        .article-cta-icon { font-size: 36px; flex-shrink: 0; margin-top: 2px; }
        .article-cta-title {
          font-family: var(--font-serif); font-size: 18px;
          margin-bottom: 6px; font-weight: 400;
        }
        .article-cta-desc {
          font-size: 14px !important; color: var(--muted); margin-bottom: 14px !important;
        }

        /* ── Table ── */
        .article-table-wrap { overflow-x: auto; margin: 16px 0 24px; }
        .article-table {
          width: 100%; border-collapse: collapse;
          font-size: 14px; line-height: 1.5;
        }
        .article-table th {
          font-size: 11px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; color: var(--muted);
          padding: 10px 14px; text-align: left;
          border-bottom: 2px solid var(--border); background: var(--surface);
        }
        .article-table td {
          padding: 10px 14px; border-bottom: 1px solid var(--border);
          vertical-align: top; color: #2a2a28; font-weight: 300;
        }
        .article-table tr:last-child td { border-bottom: none; }

        /* ── FAQ ── */
        .faq-list { display: flex; flex-direction: column; gap: 8px; }
        .faq-item {
          border: 1px solid var(--border); border-radius: 10px;
          overflow: hidden; background: #fff;
        }
        .faq-q {
          font-size: 15px; font-weight: 600;
          padding: 16px 20px; cursor: pointer;
          list-style: none; display: flex;
          justify-content: space-between; align-items: center;
          transition: background 120ms;
        }
        .faq-q:hover { background: var(--surface); }
        .faq-q::after { content: "+"; font-size: 18px; font-weight: 300; flex-shrink: 0; margin-left: 12px; }
        details[open] .faq-q::after { content: "−"; }
        .faq-a {
          font-size: 14px; line-height: 1.65; color: var(--muted);
          font-weight: 300; padding: 0 20px 16px;
        }

        /* ── Related articles ── */
        .related-section { margin-top: 56px; }
        .related-section h2 {
          font-family: var(--font-serif); font-size: 22px;
          font-weight: 400; margin-bottom: 20px;
          padding-top: 24px; border-top: 1px solid var(--border);
        }
        .related-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
        }

        /* ── Sidebar ── */
        .article-sidebar {
          position: sticky; top: 80px;
          display: flex; flex-direction: column; gap: 16px;
        }
        .sidebar-widget {
          background: #fff; border: 1px solid var(--border);
          border-radius: 12px; padding: 20px;
        }
        .sidebar-widget-title {
          font-size: 10px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--muted); margin-bottom: 14px;
        }
        .sidebar-toc {
          list-style: none; display: flex; flex-direction: column; gap: 8px;
        }
        .sidebar-toc li a {
          font-size: 13px; color: var(--muted); text-decoration: none;
          font-weight: 400; transition: color 120ms; line-height: 1.4;
          display: block;
        }
        .sidebar-toc li a:hover { color: var(--text); }
        .sidebar-cta { background: var(--surface); border-color: transparent; }
        .sidebar-cta-title {
          font-family: var(--font-serif); font-size: 17px;
          font-weight: 400; margin-bottom: 6px;
        }
        .sidebar-cta-desc {
          font-size: 13px; color: var(--muted); font-weight: 300; line-height: 1.5;
        }
        .sidebar-cat-link {
          display: flex; justify-content: space-between; align-items: center;
          font-size: 14px; font-weight: 500; color: var(--text);
          text-decoration: none; padding: 8px 0;
          border-bottom: 1px solid var(--border); transition: color 120ms;
        }
        .sidebar-cat-link:hover { color: var(--muted); }
        .sidebar-cat-link span { font-size: 12px; color: var(--muted); }

        /* ── Responsive ── */
        @media (max-width: 960px) {
          .article-layout { grid-template-columns: 1fr; gap: 0; }
          .article-sidebar { position: static; margin-top: 40px; }
          .related-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .article-cta-box { flex-direction: column; gap: 12px; }
          .article-layout { padding: 32px 0 60px; }
        }
      `}</style>
    </>
  );
}
