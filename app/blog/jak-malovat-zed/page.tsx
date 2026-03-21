import type { Metadata } from "next";
import Link from "next/link";
import PaintCalculator from "@/app/components/PaintCalculator";
// ─── SEO Metadata ─────────────────────────────────────────────────────────────
<PaintCalculator />
export const metadata: Metadata = {
  title: "Jak malovat zeď – kompletní průvodce pro začátečníky 2025",
  description:
    "Krok za krokem: příprava podkladu, penetrace, výběr barvy, technika malování. Bez chyb, bez přemalování. Průvodce pro každého.",
  alternates: {
    canonical: "https://domovniguru.cz/blog/jak-malovat-zed",
  },
  openGraph: {
    title: "Jak malovat zeď – kompletní průvodce pro začátečníky 2025",
    description:
      "Krok za krokem: příprava podkladu, penetrace, výběr barvy, technika malování. Bez chyb, bez přemalování.",
    url: "https://domovniguru.cz/blog/jak-malovat-zed",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "article",
    publishedTime: "2025-01-15T08:00:00Z",
    modifiedTime: "2025-03-01T08:00:00Z",
    authors: ["DomovniGuru"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jak malovat zeď – kompletní průvodce pro začátečníky 2025",
    description:
      "Příprava podkladu, penetrace, výběr barvy, technika. Průvodce krok za krokem.",
  },
};

// ─── Schema.org JSON-LD ───────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // Article
    {
      "@type": "Article",
      "@id": "https://domovniguru.cz/blog/jak-malovat-zed#article",
      "headline": "Jak malovat zeď – kompletní průvodce pro začátečníky 2025",
      "description":
        "Krok za krokem: příprava podkladu, penetrace, výběr barvy, technika malování. Bez chyb, bez přemalování.",
      "datePublished": "2025-01-15T08:00:00Z",
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
        "@id": "https://domovniguru.cz/blog/jak-malovat-zed",
      },
      "inLanguage": "cs",
      "keywords": [
        "jak malovat zeď",
        "malování zdi postup",
        "příprava zdi před malováním",
        "penetrace před malováním",
        "jak vybrat barvu na zeď",
      ],
    },
    // BreadcrumbList
    {
      "@type": "BreadcrumbList",
      "@id": "https://domovniguru.cz/blog/jak-malovat-zed#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Domů",             "item": "https://domovniguru.cz" },
        { "@type": "ListItem", "position": 2, "name": "Blog",             "item": "https://domovniguru.cz/blog" },
        { "@type": "ListItem", "position": 3, "name": "Malování & barvy", "item": "https://domovniguru.cz/blog/kategorie/malovani" },
        { "@type": "ListItem", "position": 4, "name": "Jak malovat zeď",  "item": "https://domovniguru.cz/blog/jak-malovat-zed" },
      ],
    },
    // FAQPage
    {
      "@type": "FAQPage",
      "@id": "https://domovniguru.cz/blog/jak-malovat-zed#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Kolik vrstev barvy na zeď potřebuji?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Standardně stačí 2 vrstvy. Na tmavé podklady nebo velmi sytou barvu doporučujeme 3 vrstvy. Každou vrstvu nechte zaschnout alespoň 2–4 hodiny.",
          },
        },
        {
          "@type": "Question",
          "name": "Musím dávat penetraci před malováním?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Penetrace je nutná na savé nebo nové omítky, sádrokarton a po strhávání tapet. Na malovanou zeď v dobrém stavu ji přeskočit lze, ale zlepší přilnavost barvy.",
          },
        },
        {
          "@type": "Question",
          "name": "Jak dlouho schne barva na zdi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Latexové a akrylátové barvy schnou k dotyku za 1–2 hodiny. Plnou odolnosti dosáhnou za 24–48 hodin. Druhou vrstvu nanášejte nejdříve po 4 hodinách.",
          },
        },
        {
          "@type": "Question",
          "name": "Jak odhadnout, kolik barvy budu potřebovat?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Standardní výdej je 8–12 m² na litr při jedné vrstvě. Spočítej plochu stěn, odečti okna a dveře, vyděl vydatností barvy a přidej 10 % rezervu. Nebo použij naši kalkulačku barvy.",
          },
        },
        {
          "@type": "Question",
          "name": "Jaká barva je nejlepší na zeď v obývacím pokoji?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Do obýváku se hodí latexová nebo akrylátová barva s jemným hedvábným leskem – snadno se otírá a dobře vypadá. Matný povrch zakryje nerovnosti, lesklý je trvanlivější.",
          },
        },
      ],
    },
  ],
};

// ─── Related articles ─────────────────────────────────────────────────────────

const RELATED = [
  { title: "Latexová vs. akrylátová barva – jaký je rozdíl?",    href: "/blog/latexova-vs-akrylatova-barva",  read: "4 min" },
  { title: "Penetrace před malováním – kdy je nutná?",           href: "/blog/penetrace-pred-malovanim",      read: "4 min" },
  { title: "Jak malovat přes tmavou barvu na světlo",            href: "/blog/malovat-pres-tmavou-barvu",     read: "3 min" },
  { title: "Jak malovat rohy a lišty bez přetahování",           href: "/blog/jak-malovat-rohy-a-listy",      read: "3 min" },
  { title: "Jak se zbavit plísně na zdi natrvalo",               href: "/blog/jak-odstranit-plisen-na-zdi",   read: "5 min" },
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
              <span>Jak malovat zeď</span>
            </nav>

            {/* Header */}
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">
                  🎨 Malování & barvy
                </Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">
                Jak malovat zeď – kompletní průvodce pro začátečníky 2025
              </h1>
              <p className="article-lead">
                Malování zdi zvládne každý – ale bez správné přípravy skončíš s pruhy,
                loupanou barvou nebo přemalováváním. Tenhle průvodce tě provede od prázdné
                místnosti k perfektnímu výsledku krok za krokem.
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
                <li><a href="#co-budete-potrebovat">Co budeš potřebovat</a></li>
                <li><a href="#priprava-podkladu">Příprava podkladu</a></li>
                <li><a href="#penetrace">Penetrace – kdy a proč</a></li>
                <li><a href="#vyber-barvy">Jak vybrat správnou barvu</a></li>
                <li><a href="#technika-malovani">Technika malování</a></li>
                <li><a href="#typicke-chyby">Typické chyby a jak se jim vyhnout</a></li>
                <li><a href="#kalkukacka">Kolik barvy budeš potřebovat?</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            {/* ── Section 1 ── */}
            <section id="co-budete-potrebovat">
              <h2>Co budeš potřebovat</h2>
              <p>
                Správné nástroje ušetří hodiny práce a zabrání většině chyb.
                Před začátkem si nachystej:
              </p>
              <ul>
                <li><strong>Váleček</strong> – pro stěny doporučujeme délku 18 cm, hustota vlasu 10–12 mm na hladké povrchy, 15–18 mm na hrubší omítku</li>
                <li><strong>Štětec</strong> – 5–7 cm pro rohy, lišty a okraje, kde se váleček nevejde</li>
                <li><strong>Vana na barvu</strong> s mřížkou pro odkapávání</li>
                <li><strong>Malířská páska</strong> pro ochranu lišt, vypínačů a okenních rámů</li>
                <li><strong>Zakrývací fólie nebo noviny</strong> na podlahu a nábytek</li>
                <li><strong>Tmel a špachtle</strong> pro opravy děr a škrábanců</li>
                <li><strong>Brusný papír</strong> zrnitost 120–180 pro vyhlazení opravených míst</li>
                <li><strong>Penetrace</strong> (viz sekce níže)</li>
                <li><strong>Barva</strong> (viz sekce o výběru)</li>
              </ul>
              <div className="article-tip">
                <strong>💡 Tip:</strong> Nekupuj nejlevnější váleček. Levné vločkují a zanechávají v barvě chloupky. Dobrý váleček za 150–200 Kč ti ušetří přemalování.
              </div>
            </section>

            {/* ── Section 2 ── */}
            <section id="priprava-podkladu">
              <h2>Příprava podkladu – nejdůležitější krok</h2>
              <p>
                Příprava zabere 30–50 % celkového času, ale je to krok, který nejvíce
                rozhoduje o výsledku. Špatně připravená zeď = barva se loupe nebo jsou vidět
                každá nerovnost.
              </p>

              <h3>Čištění a opravy</h3>
              <p>
                Začni tím, že zeď očistíš od prachu, mastnoty a volně se odlupující barvy.
                Vlhkým hadrem setři prach, mastná místa (kuchyň, kolem světel) odmasti
                odmašťovačem nebo ředěným prostředkem na nádobí.
              </p>
              <p>
                Díry po hřebících, praskliny a škrábance vyplň tmelem nebo sádrovou hmotou.
                Po zaschnutí (min. 2 hodiny) přebrousíme brusným papírem naplocho.
              </p>

              <h3>Strhávání starých tapet</h3>
              <p>
                Pokud máš na zdi tapety, musí pryč – malovat přes ně nelze.
                Nastříkej vodu nebo použij párovač a tapety opatrně strhni špachtlí.
                Po stržení nechej zeď dobře vyschnout (alespoň 24–48 hodin) a pak teprve penetruj.
              </p>

              <h3>Kdy zeď opravdu není připravená</h3>
              <ul>
                <li>Zeď je vlhká nebo jsou na ní skvrny od vlhkosti → nejprve odstraň příčinu vlhkosti</li>
                <li>Jsou na ní plísně → ošetři fungicidním přípravkem, pak penetruj protiplísňovou penetrací</li>
                <li>Stará barva se odlupuje → strhni vše, co drží špatně, přebrousíme hrany</li>
              </ul>
            </section>

            {/* ── Section 3 ── */}
            <section id="penetrace">
              <h2>Penetrace – kdy a proč</h2>
              <p>
                Penetrace zlepšuje přilnavost barvy, sjednocuje savost podkladu a zabraňuje
                „vsakování" barvy do zdi. Výsledek je rovnoměrnější a barva vydrží déle.
              </p>

              <h3>Kdy penetraci použít</h3>
              <ul>
                <li><strong>Nová nebo opravená omítka</strong> – vždy. Nová omítka je velmi savá a bez penetrace spotřebuješ 2× více barvy.</li>
                <li><strong>Sádrokarton</strong> – vždy. Bez penetrace barva nedrží a papírový povrch se může narušit.</li>
                <li><strong>Po stržení tapet</strong> – vždy. Zeď je savá a nerovnoměrná.</li>
                <li><strong>Přemalování po plísni</strong> – speciální protiplísňová penetrace.</li>
              </ul>

              <h3>Kdy penetraci přeskočit lze</h3>
              <p>
                Na starší dobře přiléhající malované zdi, která je v dobrém stavu
                a nemění se typ barvy – penetraci přeskočit lze. Ale prodlouží životnost
                a zlepší výsledek i tam.
              </p>

              <h3>Jak penetraci nanést</h3>
              <p>
                Penetraci nanáš válenkem stejně jako barvu – jednou vrstvou.
                Nechej vyschnout dle pokynů výrobce (obvykle 2–4 hodiny), pak teprve maluj.
              </p>
            </section>

            {/* ── Section 4 ── */}
            <section id="vyber-barvy">
              <h2>Jak vybrat správnou barvu na zeď</h2>

              <h3>Latexová vs. akrylátová barva</h3>
              <p>
                Toto je nejčastější otázka. Obě jsou na vodní bázi, ale liší se:
              </p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead>
                    <tr>
                      <th>Vlastnost</th>
                      <th>Latexová</th>
                      <th>Akrylátová</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Omyvatelnost</td>     <td>✅ Výborná</td>    <td>✅ Dobrá</td></tr>
                    <tr><td>Cena</td>             <td>Vyšší</td>         <td>Nižší</td></tr>
                    <tr><td>Trvanlivost</td>      <td>✅ Vyšší</td>      <td>Dobrá</td></tr>
                    <tr><td>Zápach při sušení</td><td>Minimální</td>     <td>Minimální</td></tr>
                    <tr><td>Vhodné pro</td>       <td>Kuchyně, chodby</td><td>Ložnice, obývák</td></tr>
                  </tbody>
                </table>
              </div>

              <h3>Jaký povrch zvolit</h3>
              <ul>
                <li><strong>Matný</strong> – skryje nerovnosti zdi, působí elegantně, hůře se otírá</li>
                <li><strong>Hedvábný mat</strong> – kompromis, lehce omyvatelný, vhodný do obývacích pokojů</li>
                <li><strong>Pololesk / lesk</strong> – snadno omyvatelný, vhodný do kuchyní a koupelen, zvýrazní nerovnosti</li>
              </ul>

              <h3>Barvy do vlhkých prostor</h3>
              <p>
                Do koupelny, kuchyně nebo sklepa vždy vybírej barvu označenou jako
                „do vlhkých prostor", „koupelnová" nebo s označením odolnosti vůči plísni.
                Běžná barva v koupelně skončí plísní do pár měsíců.
              </p>

              {/* Internal link to calculator */}
              <div className="article-cta-box">
                <div className="article-cta-icon">🪣</div>
                <div>
                  <div className="article-cta-title">Nevíš, kolik barvy koupit?</div>
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

            {/* ── Section 5 ── */}
            <section id="technika-malovani">
              <h2>Technika malování – krok za krokem</h2>

              <h3>1. Zakryjte co nemá být postříkáno</h3>
              <p>
                Přelep malířskou páskou lišty, zárubně, vypínače a zásuvky.
                Podlahu zakryj fólií nebo starými novinami. Čas strávený zakrýváním
                ušetří hodiny čištění.
              </p>

              <h3>2. Začni od rohů a okrajů</h3>
              <p>
                Štětcem nanes barvu do všech rohů, podél stropu, kolem lišt a
                okolo vypínačů – asi 5–8 cm od okraje. Tato fáze se nazývá
                „odřezávání" a je klíčová pro čistý výsledek.
              </p>

              <h3>3. Váleček: pohyb W nebo M</h3>
              <p>
                Váleček neposouvej jen nahoru a dolů – maluj pohybem ve tvaru
                písmene <strong>W</strong> nebo <strong>M</strong> a pak rovnými
                tahy zarovnej. Tento postup zabrání pruhům a zajistí rovnoměrné
                pokrytí.
              </p>
              <p>
                Váleček nanáč s lehkým, rovnoměrným tlakem. Příliš velký tlak
                vytváří nežádoucí texturu.
              </p>

              <h3>4. Pořadí stěn</h3>
              <p>
                Ideálně maluj v tomto pořadí: strop → stěny shora dolů.
                Začni od okna a postupuj do místnosti – přirozené světlo ti
                ukáže přesně, kde jsou mezery.
              </p>

              <h3>5. Druhá vrstva</h3>
              <p>
                Počkej, až první vrstva úplně zaschne – minimálně 2–4 hodiny,
                ideálně přes noc. Druhá vrstva se nanáší kolmo na první
                (pokud jsi maloval svisle, maluj vodorovně), což pomáhá
                eliminovat pruhy a zajistí rovnoměrné krytí.
              </p>

              <div className="article-tip">
                <strong>💡 Tip:</strong> Mezi vrstvami barvy nezapomeň válečkem
                nebo štětcem projít kouty a okraje znovu – tam barva schne nejpomaleji
                a je nejtenčí.
              </div>
            </section>

            {/* ── Section 6 ── */}
            <section id="typicke-chyby">
              <h2>Typické chyby a jak se jim vyhnout</h2>

              <h3>Pruhy a nerovnoměrná barva</h3>
              <p>
                Příčina: špatný váleček, příliš suchý váleček nebo malování suché plochy
                vedle mokré. Řešení: pracuj mokré do mokrého, váleček pravidelně
                přenáč a udržuj rovnoměrný tlak.
              </p>

              <h3>Barva se loupe</h3>
              <p>
                Příčina: špatně připravený podklad, mastný povrch nebo malování
                na vlhkou zeď. Řešení: vždy nejdřív odmaštit a nechat zcela vyschnout.
              </p>

              <h3>Přesáknutí barvy pod páskou</h3>
              <p>
                Příčina: páska nebyla dobře přitlačená nebo byla použita na prašném
                povrchu. Řešení: pásku přilep prstem po celé délce těsně před malováním
                a sundej ji ještě za mokra pod úhlem 45°.
              </p>

              <h3>Viditelné spoje tahů</h3>
              <p>
                Příčina: příliš dlouhé tahy nebo překrývání zaschlé barvy.
                Řešení: maluj menší plochy a vždy navazuj na mokrou hranu.
              </p>
            </section>

            {/* ── Section 7 – internal link to calculator ── */}
            <section id="kalkukacka">
              <h2>Kolik barvy budeš potřebovat?</h2>
              <p>
                Standardní vydatnost malířské barvy je <strong>8–12 m² na litr</strong> při
                jedné vrstvě. Pro dvě vrstvy tedy potřebuješ přibližně dvojnásobek.
              </p>
              <p>
                Rychlý vzorec: <strong>(plocha stěn v m² ÷ vydatnost barvy) × počet vrstev + 10 % rezerva</strong>.
              </p>
              <p>
                Například místnost 4 × 5 m s výškou 2,6 m: obvod 18 m × výška 2,6 m = 46,8 m²
                stěn. Odečteme okna a dveře (~5 m²) = 41,8 m². Dvě vrstvy, vydatnost 10 m²/l:
                41,8 ÷ 10 × 2 = 8,36 l + 10 % rezerva = <strong>~9,2 litrů</strong>.
              </p>

              <div className="article-cta-box">
                <div className="article-cta-icon">🧮</div>
                <div>
                  <div className="article-cta-title">Kalkulačka barvy – zadej místnost, dostaneš litry</div>
                  <p className="article-cta-desc">
                    Nechtěj počítat ručně. Zadej rozměry a kalkulačka ti řekne
                    přesné množství i pro různé vydatnosti barev.
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
                    q: "Kolik vrstev barvy na zeď potřebuji?",
                    a: "Standardně stačí 2 vrstvy. Na tmavé podklady nebo velmi sytou barvu doporučujeme 3 vrstvy. Každou vrstvu nechte zaschnout alespoň 2–4 hodiny.",
                  },
                  {
                    q: "Musím dávat penetraci před malováním?",
                    a: "Penetrace je nutná na savé nebo nové omítky, sádrokarton a po strhávání tapet. Na malovanou zeď v dobrém stavu ji přeskočit lze, ale zlepší přilnavost barvy.",
                  },
                  {
                    q: "Jak dlouho schne barva na zdi?",
                    a: "Latexové a akrylátové barvy schnou k dotyku za 1–2 hodiny. Plnou odolnosti dosáhnou za 24–48 hodin. Druhou vrstvu nanášejte nejdříve po 4 hodinách.",
                  },
                  {
                    q: "Jak odhadnout, kolik barvy budu potřebovat?",
                    a: "Standardní výdej je 8–12 m² na litr při jedné vrstvě. Spočítej plochu stěn, odečti okna a dveře, vyděl vydatností barvy a přidej 10 % rezervu. Nebo použij naši kalkulačku barvy.",
                  },
                  {
                    q: "Jaká barva je nejlepší na zeď v obývacím pokoji?",
                    a: "Do obýváku se hodí latexová nebo akrylátová barva s jemným hedvábným leskem – snadno se otírá a dobře vypadá. Matný povrch zakryje nerovnosti, lesklý je trvanlivější.",
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
                  <li><a href="#co-budete-potrebovat">Co budeš potřebovat</a></li>
                  <li><a href="#priprava-podkladu">Příprava podkladu</a></li>
                  <li><a href="#penetrace">Penetrace</a></li>
                  <li><a href="#vyber-barvy">Výběr barvy</a></li>
                  <li><a href="#technika-malovani">Technika malování</a></li>
                  <li><a href="#typicke-chyby">Typické chyby</a></li>
                  <li><a href="#kalkukacka">Kolik barvy?</a></li>
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
