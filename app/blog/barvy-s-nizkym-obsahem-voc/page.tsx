import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Barvy bez VOC – jak vybrat zdravou barvu do interiéru 2026",
  description: "Co je VOC, jak rozeznat nízko-VOC barvu, kdy je to klíčové (děti, ložnice, alergici) a jak správně větrat při malování. Praktický průvodce.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/barvy-s-nizkym-obsahem-voc" },
  openGraph: {
    title: "Barvy bez VOC – jak vybrat zdravou barvu do interiéru 2026",
    description: "Co je VOC, jak rozeznat nízko-VOC barvu a kdy je to klíčové. Praktický průvodce výběrem zdravé barvy.",
    url: "https://www.domovniguru.cz/blog/barvy-s-nizkym-obsahem-voc",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "article",
    publishedTime: "2026-06-17T08:00:00Z",
    modifiedTime: "2026-06-17T08:00:00Z",
    authors: ["DomovniGuru"],
    images: [{ url: "/api/og?title=Barvy%20bez%20VOC%20%E2%80%93%20jak%20vybrat%20zdravou%20barvu%20do%20interi%C3%A9ru%202026&cat=blog", width: 1200, height: 630, alt: "Barvy bez VOC – jak vybrat zdravou barvu do interiéru 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barvy bez VOC – jak vybrat zdravou barvu 2026",
    description: "Co je VOC, jak rozeznat nízko-VOC barvu a kdy je to klíčové. Praktický průvodce.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.domovniguru.cz/blog/barvy-s-nizkym-obsahem-voc#article",
      "headline": "Barvy bez VOC – jak vybrat zdravou barvu do interiéru",
      "description": "Co je VOC, jak rozeznat nízko-VOC barvu, kdy je to klíčové a jak správně větrat při malování. Praktický průvodce výběrem zdravé barvy.",
      "datePublished": "2026-06-17T08:00:00Z",
      "dateModified": "2026-06-17T08:00:00Z",
      "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.domovniguru.cz/blog/barvy-s-nizkym-obsahem-voc" },
      "inLanguage": "cs",
      "keywords": ["barvy bez VOC", "nízko-VOC barva", "zdravá barva do interiéru", "VOC v barvách", "EU Ecolabel barva", "barva do dětského pokoje bez VOC"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.domovniguru.cz/blog/barvy-s-nizkym-obsahem-voc#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" },
        { "@type": "ListItem", "position": 3, "name": "Malování & barvy", "item": "https://www.domovniguru.cz/blog/kategorie/malovani" },
        { "@type": "ListItem", "position": 4, "name": "Barvy bez VOC", "item": "https://www.domovniguru.cz/blog/barvy-s-nizkym-obsahem-voc" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.domovniguru.cz/blog/barvy-s-nizkym-obsahem-voc#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Co přesně znamená VOC v barvách?", "acceptedAnswer": { "@type": "Answer", "text": "VOC (volatilní organické sloučeniny) jsou látky, které se z barvy odpařují do vzduchu při nanášení i dlouho po zaschnutí. Najdeš je hlavně v rozpouštědlech, pojivech a aditivech – mohou dráždit dýchací cesty a oči." } },
        { "@type": "Question", "name": "Znamená 'bez zápachu' totéž jako 'nízký obsah VOC'?", "acceptedAnswer": { "@type": "Answer", "text": "Ne. Barva bez zápachu může stále obsahovat VOC – zápach maskují parfemační přísady nebo jde o látky, které jsou těkavé, ale bez výrazného pachu. Jediný spolehlivý ukazatel je deklarovaný obsah VOC v g/l a certifikace, ne vůně." } },
        { "@type": "Question", "name": "Jak poznám nízko-VOC barvu na obalu?", "acceptedAnswer": { "@type": "Answer", "text": "Hledej značení EU Ecolabel, text 'do interiéru s nízkým obsahem VOC' a konkrétní g/l hodnotu v technickém listu. Podle EU směrnice 2004/42/ES je limit pro matné barvy do interiéru 30 g/l, pro lesklé až 100 g/l." } },
        { "@type": "Question", "name": "O kolik je nízko-VOC barva dražší než běžná?", "acceptedAnswer": { "@type": "Answer", "text": "Typicky o 10–20 % víc než srovnatelná běžná barva. U menších místností je rozdíl v korunách často minimální, zatímco přínos pro kvalitu vzduchu je dlouhodobý." } },
        { "@type": "Question", "name": "Jak dlouho větrat po malování nízko-VOC barvou?", "acceptedAnswer": { "@type": "Answer", "text": "I u nízko-VOC barev se doporučuje větrat 24–48 hodin po vymalování. Obsah VOC je nižší, ne nulový, a čerstvě vymalovaný prostor by se neměl ihned uzavírat." } },
        { "@type": "Question", "name": "Je vodou ředitelná barva automaticky nízko-VOC?", "acceptedAnswer": { "@type": "Answer", "text": "Vodou ředitelné akrylátové a latexové barvy mají obvykle nižší VOC než olejové a alkydové, ale není to automatické pravidlo. Vždy je potřeba ověřit konkrétní g/l hodnotu nebo certifikaci u daného produktu." } },
      ],
    },
    {
      "@type": "HowTo",
      "@id": "https://www.domovniguru.cz/blog/barvy-s-nizkym-obsahem-voc#howto",
      "name": "Jak vybrat zdravou barvu s nízkým obsahem VOC",
      "description": "Postup, jak rozeznat a vybrat barvu s nízkým obsahem VOC pro zdravější vnitřní prostředí.",
      "step": [
        { "@type": "HowToStep", "name": "Zjisti, co je VOC a proč vadí", "text": "VOC jsou těkavé organické sloučeniny, které se z barvy uvolňují do vzduchu a mohou dráždit dýchací cesty, oči a způsobovat bolesti hlavy." },
        { "@type": "HowToStep", "name": "Hledej certifikaci a g/l hodnotu", "text": "Na obalu hledej značení EU Ecolabel a text 'nízký obsah VOC'. V technickém listu zkontroluj konkrétní g/l – do 30 g/l u matných, do 100 g/l u lesklých barev." },
        { "@type": "HowToStep", "name": "Zvaž typ prostoru", "text": "V dětském pokoji, ložnici, malých nebo špatně větratelných prostorách a u alergiků a astmatiků volí nízko-VOC barvu přednostně." },
        { "@type": "HowToStep", "name": "Vyber vodou ředitelný typ", "text": "Akrylátové a latexové barvy na vodní bázi mívají nižší VOC než olejové a alkydové. Ověř to ale vždy v technickém listu konkrétního produktu." },
        { "@type": "HowToStep", "name": "Připrav si rozpočet s rezervou", "text": "Nízko-VOC barvy bývají o 10–20 % dražší než běžné varianty. Počítej s tím při plánování nákupu." },
        { "@type": "HowToStep", "name": "Větrej i po nízko-VOC barvě", "text": "I při použití nízko-VOC barvy větrej prostor 24–48 hodin po vymalování – nízký obsah VOC neznamená nulový." }
      ]
    }
  ],
};

const RELATED = [
  { title: "Jak malovat zeď – kompletní průvodce", href: "/blog/jak-malovat-zed", read: "5 min" },
  { title: "Barvy do dětského pokoje – jak vybrat bezpečné a správné", href: "/blog/barvy-do-detskeho-pokoje", read: "6 min" },
  { title: "Latexová vs. akrylátová barva", href: "/blog/latexova-vs-akrylatova-barva", read: "5 min" },
  { title: "Jak vybrat barvu pro každou místnost", href: "/blog/jak-vybrat-barvu-pro-kazdou-mistnost", read: "6 min" },
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
              <span>Barvy bez VOC</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování & barvy</Link>
                <span className="article-read-time">⏱ 7 min čtení</span>
              </div>
              <h1 className="article-h1">Barvy bez VOC – jak vybrat zdravou barvu do interiéru</h1>
              <p className="article-lead">Ne každá barva, která nezapáchá, je zdravá. Vysvětlíme, co jsou VOC, jak nízko-VOC barvu poznat na obalu a kdy se vyplatí si připlatit za zdravější vzduch v interiéru.</p>
              <div className="article-meta-row">
                <span>Aktualizováno: 17. června 2026</span><span>·</span><span>DomovniGuru</span>
              </div>
              <ShareButtons url="https://www.domovniguru.cz/blog/barvy-s-nizkym-obsahem-voc" title="Barvy bez VOC – jak vybrat zdravou barvu do interiéru 2026" />
            </header>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#co-je-voc">Co je VOC a proč vadí zdraví</a></li>
                <li><a href="#jak-poznat">Jak rozeznat nízko-VOC barvu</a></li>
                <li><a href="#kdy-dulezite">Kdy je to obzvlášť důležité</a></li>
                <li><a href="#cena">Rozdíl v ceně oproti běžným barvám</a></li>
                <li><a href="#vetrani">Jak větrat při a po malování</a></li>
                <li><a href="#typy-barev">Konkrétní typy barev a jejich VOC</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="co-je-voc">
              <h2>Co je VOC a proč vadí zdraví</h2>
              <p>VOC (volatilní organické sloučeniny, anglicky volatile organic compounds) jsou látky, které se z barvy odpařují do vzduchu – při nanášení, během schnutí a v menší míře i dlouho po zaschnutí. Najdeš je v rozpouštědlech, pojivech, konzervačních látkách a dalších přísadách, které zajišťují roztíratelnost, přilnavost a trvanlivost barvy.</p>
              <h3>Jak se VOC projevují na zdraví</h3>
              <p>U citlivějších osob a při vyšší koncentraci mohou VOC způsobit:</p>
              <ul>
                <li><strong>Bolesti hlavy</strong> – nejčastější krátkodobý příznak po malování v nevětrané místnosti</li>
                <li><strong>Dráždění dýchacích cest, očí a nosu</strong> – pálení, kašel, slzení</li>
                <li><strong>Závratě a únava</strong> při delším pobytu v čerstvě vymalovaném prostoru</li>
                <li><strong>Dlouhodobou zátěž organismu</strong> – opakovaná expozice nižším koncentracím VOC z více zdrojů v domácnosti (barvy, lepidla, nábytek) se může kumulovat</li>
              </ul>
              <p>Riziko není jen otázkou jednoho vymalování – jde o kumulativní zátěž vnitřního prostředí, kde se sčítají VOC z barev, lepidel, lakovaného nábytku i čisticích prostředků.</p>
            </section>

            <section id="jak-poznat">
              <h2>Jak rozeznat nízko-VOC barvu</h2>
              <p>Spoléhat na čich nestačí – jediný spolehlivý způsob je číst obal a technický list.</p>
              <h3>Co hledat na obalu</h3>
              <ul>
                <li><strong>Značení EU Ecolabel</strong> – evropská ekoznačka, kterou výrobce získá jen po splnění přísnějších limitů VOC a dalších environmentálních kritérií</li>
                <li><strong>Text "do interiéru s nízkým obsahem VOC"</strong> nebo podobné tvrzení přímo na obalu</li>
                <li><strong>Konkrétní g/l hodnotu</strong> v technickém listu nebo na štítku – čím nižší číslo, tím méně těkavých látek</li>
              </ul>
              <h3>Limity podle EU směrnice</h3>
              <p>Podle směrnice EU 2004/42/ES platí pro barvy do interiéru orientační limity obsahu VOC:</p>
              <ul>
                <li><strong>Matné barvy do interiéru</strong> – do 30 g/l</li>
                <li><strong>Lesklé a pololesklé barvy do interiéru</strong> – do 100 g/l</li>
              </ul>
              <p>Tyto hodnoty jsou maximální povolené limity pro uvedení na trh, ne ukazatel kvality – kvalitní nízko-VOC produkty bývají hluboko pod limitem, často v jednotkách g/l.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud obal neuvádí konkrétní g/l číslo ani certifikaci, ale jen slovo "eko" nebo "přírodní", buď opatrný – jde často jen o marketing bez ověřitelného údaje.</div>
            </section>

            <section id="kdy-dulezite">
              <h2>Kdy je to obzvlášť důležité</h2>
              <p>Nízko-VOC barva se vyplatí téměř vždy, ale v některých případech je prakticky nutností:</p>
              <h3>Dětský pokoj a ložnice</h3>
              <p>V dětském pokoji a ložnici trávíme nejvíc souvislého času, často se zavřenými okny přes noc. Dětský organismus je citlivější na chemickou zátěž než dospělý, proto se v <Link href="/blog/barvy-do-detskeho-pokoje">dětském pokoji</Link> nízko-VOC barva doporučuje prakticky bez výjimky.</p>
              <h3>Malé a špatně větratelné prostory</h3>
              <p>V malé místnosti se stejné množství VOC rozpustí v menším objemu vzduchu, takže koncentrace je vyšší. Komory, šatny bez okna nebo koupelny s malým nebo žádným větráním jsou typickým rizikovým případem.</p>
              <h3>Alergici a astmatici</h3>
              <p>U lidí s astmatem, alergiemi nebo chemickou senzitivitou mohou i nízké koncentrace VOC spustit nepříjemné reakce – dráždění dýchacích cest, zhoršení astmatických příznaků nebo bolesti hlavy. Tady je nízko-VOC barva jasnou volbou číslo jedna.</p>
            </section>

            <section id="cena">
              <h2>Rozdíl v ceně oproti běžným barvám</h2>
              <p>Nízko-VOC a certifikované barvy bývají typicky <strong>o 10–20 % dražší</strong> než srovnatelná běžná barva stejné značky a kvality. U menší místnosti, kde spotřebuješ pár litrů, je absolutní rozdíl v korunách často zanedbatelný vůči celkovým nákladům na malování (barva, nářadí, čas).</p>
              <p>Příplatek se vrací v podobě nižší chemické zátěže – zejména pokud malujete prostor, kde se zdržujete dlouhé hodiny denně, jako je ložnice nebo dětský pokoj.</p>
            </section>

            <section id="vetrani">
              <h2>Jak větrat při a po malování nízko-VOC barvou</h2>
              <p>Nízký obsah VOC neznamená nulový obsah. I při použití certifikované nízko-VOC barvy platí stejná základní pravidla větrání jako u běžné barvy:</p>
              <h3>Během malování</h3>
              <ul>
                <li>Otevřená okna nebo alespoň štěrbinové větrání po celou dobu nanášení</li>
                <li>Průvan mezi dvěma okny nebo oknem a dveřmi urychlí odvod par</li>
                <li>Při malování ve více místnostech najednou větrej postupně, ne jen na konci</li>
              </ul>
              <h3>Po malování</h3>
              <p>I u nízko-VOC barvy se doporučuje větrat prostor <strong>24–48 hodin</strong> po vymalování, ideálně s minimálním pobytem v místnosti přes noc bezprostředně po dokončení. Citlivější osoby (děti, alergici, těhotné) by se měly čerstvě vymalovanému prostoru vyhýbat o něco déle.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Větrání nezačínej až po dokončení – průběžné větrání během malování snižuje vrcholovou koncentraci VOC ve vzduchu, což je důležitější než jen dlouhé větrání na konci.</div>
            </section>

            <section id="typy-barev">
              <h2>Konkrétní typy barev a jejich VOC</h2>
              <h3>Vodou ředitelné akrylátové a latexové barvy</h3>
              <p>Barvy na vodní bázi – akrylátové a latexové – mívají obecně nižší obsah VOC než barvy na bázi rozpouštědel, protože k ředění a roztírání používají vodu, ne organická rozpouštědla. To je hlavní důvod, proč jsou dnes výchozí volbou pro většinu interiérů.</p>
              <h3>Olejové a alkydové barvy</h3>
              <p>Olejové a alkydové barvy obsahují organická rozpouštědla, která se odpařují déle a ve vyšší koncentraci. Mívají výraznější a déletrvající zápach a vyšší VOC. Do obytných interiérů, zejména ložnic a dětských pokojů, se proto dnes volí jen výjimečně.</p>
              <h3>"Bez zápachu" není totéž co "bez VOC"</h3>
              <p>Tohle je nejčastější mýtus. Barva může být téměř bez zápachu, a přitom obsahovat nezanedbatelné množství VOC – zápach jen není dostatečně intenzivní nebo je překryt parfemační přísadou. A naopak, výrazně páchnoucí barva nemusí mít extrémně vysoký VOC, jen má charakteristickou vůni. Spolehlivým ukazatelem je vždy jen deklarovaný obsah v g/l nebo certifikace, nikdy čich.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Co přesně znamená VOC v barvách?", a: "VOC (volatilní organické sloučeniny) jsou látky, které se z barvy odpařují do vzduchu při nanášení i dlouho po zaschnutí. Najdeš je hlavně v rozpouštědlech, pojivech a aditivech – mohou dráždit dýchací cesty a oči." },
                  { q: "Znamená 'bez zápachu' totéž jako 'nízký obsah VOC'?", a: "Ne. Barva bez zápachu může stále obsahovat VOC – zápach maskují parfemační přísady nebo jde o látky, které jsou těkavé, ale bez výrazného pachu. Jediný spolehlivý ukazatel je deklarovaný obsah VOC v g/l a certifikace, ne vůně." },
                  { q: "Jak poznám nízko-VOC barvu na obalu?", a: "Hledej značení EU Ecolabel, text 'do interiéru s nízkým obsahem VOC' a konkrétní g/l hodnotu v technickém listu. Podle EU směrnice 2004/42/ES je limit pro matné barvy do interiéru 30 g/l, pro lesklé až 100 g/l." },
                  { q: "O kolik je nízko-VOC barva dražší než běžná?", a: "Typicky o 10–20 % víc než srovnatelná běžná barva. U menších místností je rozdíl v korunách často minimální, zatímco přínos pro kvalitu vzduchu je dlouhodobý." },
                  { q: "Jak dlouho větrat po malování nízko-VOC barvou?", a: "I u nízko-VOC barev se doporučuje větrat 24–48 hodin po vymalování. Obsah VOC je nižší, ne nulový, a čerstvě vymalovaný prostor by se neměl ihned uzavírat." },
                  { q: "Je vodou ředitelná barva automaticky nízko-VOC?", a: "Vodou ředitelné akrylátové a latexové barvy mají obvykle nižší VOC než olejové a alkydové, ale není to automatické pravidlo. Vždy je potřeba ověřit konkrétní g/l hodnotu nebo certifikaci u daného produktu." },
                ].map(({ q, a }) => (
                  <details key={q} className="faq-item">
                    <summary className="faq-summary">{q}<span className="faq-icon">▾</span></summary>
                    <div className="faq-body">{a}</div>
                  </details>
                ))}
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/barvy-s-nizkym-obsahem-voc" title="Barvy bez VOC – jak vybrat zdravou barvu do interiéru 2026" />

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
                <li><a href="#co-je-voc">Co je VOC</a></li>
                <li><a href="#jak-poznat">Jak poznat nízko-VOC barvu</a></li>
                <li><a href="#kdy-dulezite">Kdy je to důležité</a></li>
                <li><a href="#cena">Rozdíl v ceně</a></li>
                <li><a href="#vetrani">Větrání</a></li>
                <li><a href="#typy-barev">Typy barev</a></li>
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
        .article-tip{background:#fffbeb;border-left:3px solid #f59e0b;border-radius:0 8px 8px 0;padding:14px 18px;font-size:14px;line-height:1.6;color:#78716c;margin:20px 0}
        .faq-list{display:flex;flex-direction:column;gap:8px}
        .faq-item{border:1px solid var(--border);border-radius:10px;overflow:hidden;background:#fff}
        .faq-summary{font-size:15px;font-weight:600;padding:16px 20px;cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center;transition:background 120ms}
        .faq-summary:hover{background:var(--surface)}
        .faq-icon{font-size:14px;flex-shrink:0;margin-left:12px;transition:transform 150ms}
        details[open] .faq-icon{transform:rotate(180deg)}
        .faq-body{font-size:14px;line-height:1.65;color:var(--muted);font-weight:300;padding:0 20px 16px}
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
        @media(max-width:600px){.article-layout{padding:32px 0 60px}}
      `}</style>
    </>
  );
}
