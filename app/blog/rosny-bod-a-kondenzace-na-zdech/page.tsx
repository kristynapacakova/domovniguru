import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Rosný bod a kondenzace: jak zabránit plísni na zdech",
  description: "Co je rosný bod, proč voda kondenzuje na chladných zdech a jak vznikají tepelné mosty. Praktický návod, jak větráním, topením a zateplením zabránit plísni na stěnách.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/rosny-bod-a-kondenzace-na-zdech" },
  openGraph: { title: "Rosný bod a kondenzace: jak zabránit plísni na zdech", description: "Co je rosný bod, proč voda kondenzuje na chladných zdech a jak vznikají tepelné mosty. Praktický návod, jak větráním, topením a zateplením zabránit plísni na stěnách.", url: "https://www.domovniguru.cz/blog/rosny-bod-a-kondenzace-na-zdech", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-07-21T08:00:00Z", modifiedTime: "2026-07-21T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Rosn%C3%BD%20bod%20a%20kondenzace%20na%20zdech&cat=blog", width: 1200, height: 630, alt: "Rosný bod a kondenzace na zdech" }] },
  twitter: { card: "summary_large_image", title: "Rosný bod a kondenzace: jak zabránit plísni na zdech", description: "Co je rosný bod, proč voda kondenzuje na chladných zdech a jak zabránit plísni na stěnách." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/rosny-bod-a-kondenzace-na-zdech#article", "headline": "Rosný bod a kondenzace: jak zabránit plísni na zdech", "datePublished": "2026-07-21T08:00:00Z", "dateModified": "2026-07-21T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["rosný bod", "kondenzace na zdech", "plíseň na stěně", "tepelný most", "kondenzace vlhkosti", "jak zabránit plísni", "vlhkost na zdi"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Sezónní údržba", "item": "https://www.domovniguru.cz/blog/kategorie/sezonni-udrzba" }, { "@type": "ListItem", "position": 4, "name": "Rosný bod a kondenzace na zdech", "item": "https://www.domovniguru.cz/blog/rosny-bod-a-kondenzace-na-zdech" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Co je rosný bod jednoduše vysvětleno?", "acceptedAnswer": { "@type": "Answer", "text": "Rosný bod je teplota, na kterou musí vzduch vychladnout, aby se v něm obsažená vodní pára začala srážet na kapky. Závisí na teplotě a relativní vlhkosti vzduchu. Při 21 °C a 60 % vlhkosti je rosný bod přibližně 13 °C – jakmile se nějaký povrch v místnosti ochladí pod tuto hodnotu, začne na něm kondenzovat voda." } }, { "@type": "Question", "name": "Proč se sráží voda a plíseň jen v rohu místnosti?", "acceptedAnswer": { "@type": "Answer", "text": "Rohy obvodových stěn jsou takzvané tepelné mosty – teplo tudy uniká rychleji a povrch zdi je zde chladnější než uprostřed stěny. Pokud teplota v rohu klesne pod rosný bod, vzdušná vlhkost tam zkondenzuje jako první. Proto plíseň typicky začíná právě v rozích za nábytkem, u stropu a kolem oken." } }, { "@type": "Question", "name": "Jaká vlhkost v bytě zabrání kondenzaci na zdech?", "acceptedAnswer": { "@type": "Answer", "text": "Udržujte relativní vlhkost vzduchu mezi 40 a 55 %. Při této hodnotě je rosný bod nízko (kolem 7–11 °C při běžné pokojové teplotě) a povrch zdí se pod něj běžně nedostane. Nad 60 % vlhkosti riziko kondenzace prudce roste a nad 65 % plíseň aktivně roste. Vlhkost sledujte vlhkoměrem za pár set korun." } }, { "@type": "Question", "name": "Jak zabránit kondenzaci na studené zdi bez zateplení?", "acceptedAnswer": { "@type": "Answer", "text": "Zvyšte teplotu povrchu zdi a snižte vlhkost vzduchu. Prakticky to znamená: pravidelně krátce a intenzivně větrat (2–3× denně 5–10 minut křížem), rovnoměrně temperovat i málo užívané místnosti alespoň na 18 °C, odsunout nábytek nejméně 5 cm od obvodových stěn kvůli cirkulaci vzduchu a nesušit prádlo v uzavřených pokojích. Zateplení je nejúčinnější, ale tyto kroky pomohou i bez něj." } }, { "@type": "Question", "name": "Stačí na kondenzaci jen víc topit?", "acceptedAnswer": { "@type": "Answer", "text": "Topení samo o sobě nestačí. Zvýší sice teplotu povrchu zdí, ale pokud zároveň nevětráte, vlhkost se hromadí a rosný bod stoupá. Nejlepší je kombinace: temperovat rovnoměrně celý byt a k tomu pravidelně krátce větrat, aby vlhký vzduch odešel ven. Samotné přetápění bez větrání problém s kondenzací nevyřeší." } }] }] };

const RELATED = [
  { title: "Jak se zbavit vlhkosti v bytě", href: "/blog/zbavit-se-vlhkosti-v-byte", read: "7 min" },
  { title: "Jak odstranit plíseň na zdi", href: "/blog/jak-odstranit-plisen-na-zdi", read: "10 min" },
  { title: "Čištění a odvlhčení sklepa", href: "/blog/cisteni-a-odvlhceni-sklepa", read: "4 min" },
  { title: "Jak správně větrat byt", href: "/blog/spravne-vetrat-byt", read: "6 min" },
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
              <Link href="/blog/kategorie/sezonni-udrzba">Sezónní údržba</Link><span className="breadcrumb-sep">/</span>
              <span>Rosný bod a kondenzace na zdech</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">❄️ Sezónní údržba</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Rosný bod a kondenzace na zdech</h1>
              <p className="article-lead">Tmavé skvrny v rozích, orosená okna a plíseň za skříní nejsou náhoda ani smůla – jsou to důsledky fyziky. Za většinou vlhkých stěn v bytě stojí jediný pojem: rosný bod. Když pochopíte, jak funguje, dokážete kondenzaci i plísni předejít dřív, než vůbec vznikne.</p>
              <div className="article-meta-row"><span>Aktualizováno: 21. července 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/rosny-bod-a-kondenzace-na-zdech" title="Rosný bod a kondenzace: jak zabránit plísni na zdech" />
            </header>

            {/* HERO SVG */}
            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 210" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="210" fill="#eef3f8"/>

                {/* ── VZDUCH V POKOJI (vlevo) ── */}
                <g transform="translate(28, 18)">
                  <rect x="0" y="0" width="185" height="174" rx="10" fill="#fff" stroke="#d0d8e0" strokeWidth="1.2"/>
                  <text x="92" y="22" textAnchor="middle" fontSize="9" fill="#6a7a8a" fontWeight="700" letterSpacing="0.05em">VZDUCH V POKOJI</text>
                  <g transform="translate(20, 40)">
                    <text x="0" y="10" fontSize="10" fill="#4a4a40" fontWeight="500">🌡️ Teplota</text>
                    <text x="145" y="10" textAnchor="end" fontSize="11" fill="#e07a5f" fontWeight="700">21 °C</text>
                  </g>
                  <g transform="translate(20, 68)">
                    <text x="0" y="10" fontSize="10" fill="#4a4a40" fontWeight="500">💧 Vlhkost</text>
                    <text x="145" y="10" textAnchor="end" fontSize="11" fill="#4a90d9" fontWeight="700">60 %</text>
                  </g>
                  <line x1="20" y1="90" x2="165" y2="90" stroke="#e0e8f0" strokeWidth="1"/>
                  <rect x="20" y="100" width="145" height="54" rx="6" fill="#f0f7ff" stroke="#c0d8ec" strokeWidth="0.8"/>
                  <text x="92" y="120" textAnchor="middle" fontSize="8.5" fill="#3a6a9a" fontWeight="600">ROSNÝ BOD</text>
                  <text x="92" y="142" textAnchor="middle" fontSize="17" fill="#3a6a9a" fontWeight="700">13 °C</text>
                </g>

                {/* šipka */}
                <g transform="translate(222, 95)">
                  <path d="M0 15 L26 15" stroke="#c8b89a" strokeWidth="1.8" strokeLinecap="round"/>
                  <path d="M20 9 L28 15 L20 21" stroke="#c8b89a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </g>

                {/* ── TEPLOTA POVRCHU ZDI (střed) ── */}
                <g transform="translate(258, 18)">
                  <rect x="0" y="0" width="220" height="174" rx="10" fill="#fff" stroke="#d0d8e0" strokeWidth="1.2"/>
                  <text x="110" y="22" textAnchor="middle" fontSize="9" fill="#6a7a8a" fontWeight="700" letterSpacing="0.05em">TEPLOTA POVRCHU ZDI</text>

                  <g transform="translate(16, 40)">
                    <rect x="0" y="0" width="188" height="50" rx="6" fill="#f0faf5" stroke="#b8d8c8" strokeWidth="0.9"/>
                    <text x="12" y="20" fontSize="10" fill="#2a3a2a" fontWeight="600">Vytápěná stěna</text>
                    <text x="12" y="38" fontSize="8" fill="#6a8a7a">nad rosným bodem – suchá</text>
                    <text x="176" y="24" textAnchor="end" fontSize="14" fill="#3a7e4f" fontWeight="700">17 °C</text>
                    <text x="176" y="40" textAnchor="end" fontSize="10">✅</text>
                  </g>

                  <g transform="translate(16, 100)">
                    <rect x="0" y="0" width="188" height="50" rx="6" fill="#fdf0ec" stroke="#e6bfb2" strokeWidth="0.9"/>
                    <text x="12" y="20" fontSize="10" fill="#3a2a2a" fontWeight="600">Studený roh</text>
                    <text x="12" y="38" fontSize="8" fill="#a86a5a">pod rosným bodem – kondenzuje</text>
                    <text x="176" y="24" textAnchor="end" fontSize="14" fill="#e07a5f" fontWeight="700">11 °C</text>
                    <text x="176" y="40" textAnchor="end" fontSize="10">💧</text>
                  </g>
                </g>

                {/* šipka 2 */}
                <g transform="translate(490, 95)">
                  <path d="M0 15 L26 15" stroke="#c8b89a" strokeWidth="1.8" strokeLinecap="round"/>
                  <path d="M20 9 L28 15 L20 21" stroke="#c8b89a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </g>

                {/* ── JAK ZABRÁNIT (vpravo) ── */}
                <g transform="translate(526, 18)">
                  <rect x="0" y="0" width="206" height="174" rx="10" fill="#f0faf5" stroke="#b8d8c8" strokeWidth="1.2"/>
                  <text x="103" y="22" textAnchor="middle" fontSize="9" fill="#3a7e4f" fontWeight="700" letterSpacing="0.05em">JAK ZABRÁNIT</text>

                  {[
                    { n: "1", text: "Větrat krátce a často", sub: "2–3× denně křížem" },
                    { n: "2", text: "Rovnoměrně temperovat", sub: "min. 18 °C všude" },
                    { n: "3", text: "Nábytek od zdi", sub: "mezera 5 cm" },
                    { n: "4", text: "Vlhkost pod 55 %", sub: "hlídat vlhkoměrem" },
                    { n: "5", text: "Zateplit tepelné mosty", sub: "roh, ostění, strop" },
                  ].map(({n, text, sub}, i) => (
                    <g key={i} transform={`translate(14, ${34 + i * 27})`}>
                      <circle cx="10" cy="8" r="9" fill="#5a9e6f" opacity="0.15"/>
                      <text x="10" y="13" textAnchor="middle" fontSize="9" fill="#3a7e4f" fontWeight="700">{n}</text>
                      <text x="26" y="10" fontSize="9" fill="#2a3a2a" fontWeight="600">{text}</text>
                      <text x="26" y="21" fontSize="7.5" fill="#6a8a7a">{sub}</text>
                    </g>
                  ))}
                </g>

                {/* dolní lišta */}
                <rect y="192" width="760" height="18" fill="#e0eaf4" opacity="0.7"/>
                <text x="150" y="204" textAnchor="middle" fontSize="8" fill="#5a7a9a" fontWeight="600" letterSpacing="0.04em">🌡️ VZDUCH URČUJE ROSNÝ BOD</text>
                <text x="390" y="204" textAnchor="middle" fontSize="8" fill="#e07a5f" fontWeight="600" letterSpacing="0.04em">💧 POVRCH POD ROSNÝM BODEM = KONDENZACE</text>
                <text x="628" y="204" textAnchor="middle" fontSize="8" fill="#3a7e4f" fontWeight="600" letterSpacing="0.04em">✅ TEPLO + VĚTRÁNÍ = SUCHO</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#co-je-rosny-bod">Co je rosný bod</a></li>
                <li><a href="#proc-kondenzuje">Proč voda kondenzuje na chladných zdech</a></li>
                <li><a href="#tepelne-mosty">Tepelné mosty – nejrizikovější místa</a></li>
                <li><a href="#vetrani-topeni">Prevence: větrání a rovnoměrné topení</a></li>
                <li><a href="#zatepleni-vlhkost">Zateplení a kontrola vlhkosti</a></li>
                <li><a href="#kdy-plisen">Když už plíseň je a kdy volat odborníka</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="co-je-rosny-bod">
              <h2>Co je rosný bod</h2>
              <p>Rosný bod je teplota, na kterou musí vzduch vychladnout, aby se v něm obsažená vodní pára začala srážet na kapalnou vodu. Teplý vzduch pojme více vodní páry než studený – a když ho ochladíte, jeho kapacita pro vlhkost klesá. Jakmile teplota klesne na rosný bod, vzduch je párou nasycen na 100 % a přebytečná vlhkost se sráží na nejbližším chladném povrchu. Přesně to vidíte ráno na orosené sklenici s ledovým nápojem nebo na zamlžených oknech.</p>
              <p>Rosný bod závisí na dvou veličinách: teplotě vzduchu a jeho relativní vlhkosti. Čím je vzduch teplejší a vlhčí, tím vyšší je rosný bod – a tím snáze někde v místnosti zkondenzuje. Pár příkladů pro běžnou pokojovou teplotu:</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Teplota vzduchu</th><th>Relativní vlhkost</th><th>Rosný bod</th><th>Riziko kondenzace</th></tr></thead>
                  <tbody>
                    <tr><td>21 °C</td><td>40 %</td><td>≈ 7 °C</td><td>Nízké</td></tr>
                    <tr><td>21 °C</td><td>50 %</td><td>≈ 10 °C</td><td>Nízké</td></tr>
                    <tr><td>21 °C</td><td>60 %</td><td>≈ 13 °C</td><td>Střední</td></tr>
                    <tr><td>21 °C</td><td>70 %</td><td>≈ 15 °C</td><td>Vysoké</td></tr>
                    <tr><td>23 °C</td><td>70 %</td><td>≈ 17 °C</td><td>Velmi vysoké</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Z tabulky je vidět jádro problému: čím vlhčí vzduch, tím „tepleji“ musí být na povrchu zdi, aby na ní nekondenzovalo. Pokud si chcete pro své konkrétní hodnoty spočítat přesné číslo, <Link href="/kalkulacky/kalkulacka-rosneho-bodu" style={{ color: "#2a6496", textDecoration: "underline" }}>spočítejte si rosný bod v naší kalkulačce</Link>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Zapamatujte si jedno pravidlo – kondenzace vzniká tam, kde se potkává teplý vlhký vzduch se studeným povrchem. Ovlivnit můžete obojí: buď snížíte vlhkost vzduchu, nebo zvýšíte teplotu povrchu zdi. Nejlepší prevence dělá obojí zároveň.</div>
            </section>

            <section id="proc-kondenzuje">
              <h2>Proč voda kondenzuje na chladných zdech</h2>
              <p>Vzduch v obývaném bytě je téměř vždy vlhčí, než si myslíme. Sprchování, vaření, sušení prádla i obyčejné dýchání dodávají do ovzduší několik litrů vody denně. Tato pára se volně pohybuje po celém bytě a hledá nejchladnější místo, kde se může srazit. Tím místem bývá povrch obvodové (venkovní) stěny, sklo okna nebo studený kout.</p>
              <p>Rozhodující je teplotní rozdíl mezi vzduchem a povrchem. Uprostřed vytápěné místnosti má stěna zhruba pokojovou teplotu a k žádné kondenzaci nedochází. Ale u obvodové zdi, zvlášť za skříní nebo v rohu, kde vzduch necirkuluje, může být povrch výrazně chladnější. Jakmile jeho teplota klesne pod rosný bod, začne na něm voda kondenzovat – nejdřív neviditelně, jako trvale zvýšená vlhkost povrchu, a časem jako viditelné vlhké mapy a černá plíseň.</p>
              <h3>Typické příznaky kondenzace</h3>
              <ul>
                <li><strong>Orosená okna ráno</strong> – sklo je nejchladnější plocha v místnosti a kondenzuje jako první; je to včasné varování, že vlhkost je vysoká</li>
                <li><strong>Tmavé skvrny v rozích u stropu a podlahy</strong> – klasický projev studeného rohu obvodové stěny</li>
                <li><strong>Plíseň za nábytkem přistaveným ke zdi</strong> – nábytek brání cirkulaci vzduchu, povrch zdi za ním je chladnější</li>
                <li><strong>Vlhký, zatuchlý vzduch</strong> zejména v ložnici ráno – přes noc se v uzavřené místnosti nahromadí vlhkost z dýchání</li>
              </ul>
              <p>Kondenzace se od zatékání nebo vzlínající vlhkosti liší tím, že je rovnoměrná a vázaná na chladné plochy, ne na konkrétní zdroj vody. Jak jednotlivé typy vlhkosti bezpečně rozlišit, podrobně rozebíráme v článku <Link href="/blog/zbavit-se-vlhkosti-v-byte" style={{ color: "#2a6496", textDecoration: "underline" }}>jak se zbavit vlhkosti v bytě</Link>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Jednoduchý test: přiložte na podezřelé vlhké místo kus alobalu a přelepte okraje páskou. Po 24 hodinách zkontrolujte. Vlhkost na povrchu fólie (straně do místnosti) znamená kondenzaci; vlhkost pod fólií (u zdi) znamená, že voda přichází ze zdiva.</div>
            </section>

            <section id="tepelne-mosty">
              <h2>Tepelné mosty – nejrizikovější místa</h2>
              <p>Tepelný most je místo v konstrukci, kudy teplo z bytu uniká rychleji než okolím. Povrch stěny je tam na vnitřní straně chladnější – a právě proto tam kondenzuje voda a nejdřív se objevuje plíseň. Tepelné mosty nejsou vada v užívání bytu, ale slabina konstrukce; poznáte je podle toho, že plíseň se rok co rok vrací na stejné místo, i když jinak větráte a topíte správně.</p>
              <h3>Kde tepelné mosty nejčastěji vznikají</h3>
              <ul>
                <li><strong>Rohy obvodových stěn</strong> – roh ochlazují dvě venkovní plochy najednou, teplo tudy uniká z více stran</li>
                <li><strong>Ostění a nadpraží oken</strong> – přechod mezi rámem okna a zdivem bývá tenčí a hůř izolovaný</li>
                <li><strong>Železobetonové překlady a věnce</strong> – beton vede teplo mnohem lépe než okolní zdivo, takže je studenější</li>
                <li><strong>Napojení balkonu</strong> – vyložená betonová deska balkonu funguje jako obrovské chladicí žebro zavedené dovnitř</li>
                <li><strong>Kouty u podlahy a stropu</strong> – zejména u nezateplené fasády nebo pod nezaizolovanou střechou</li>
              </ul>
              <p>Tepelné mosty odhalíte i bez přístrojů: přiložte na podezřelé místo ruku – studený povrch oproti okolní stěně je jasný signál. Přesnou mapu chladných míst ale ukáže termokamera, kterou dnes zvládne i nástavec na telefon nebo revizní technik při energetickém auditu.</p>
              <div className="article-tip"><strong>⚠️ Pozor:</strong> Nejčastější chyba je přistavět skříň nebo postel těsně k obvodové zdi s tepelným mostem. Za nábytkem se vytvoří studená vzduchová kapsa bez cirkulace, povrch zdi klesne hluboko pod rosný bod a plíseň roste skrytě, dokud ji neobjevíte při stěhování. Nechte vždy mezeru alespoň 5 cm.</div>
            </section>

            <section id="vetrani-topeni">
              <h2>Prevence: větrání a rovnoměrné topení</h2>
              <p>Nejúčinnější a zároveň nejlevnější zbraň proti kondenzaci je kombinace správného větrání a rovnoměrného topení. Cílem je snížit vlhkost vzduchu a zároveň udržet povrch zdí nad rosným bodem. Ani jedno samo o sobě nestačí.</p>
              <h3>Jak správně větrat</h3>
              <ul>
                <li><strong>Krátce a intenzivně</strong> – otevřete okna dokořán na 5–10 minut, ideálně křížem přes byt, aby se vzduch rychle vyměnil</li>
                <li><strong>2–3× denně</strong> – vždy ráno po probuzení, po sprchování a po vaření, kdy je vlhkosti nejvíc</li>
                <li><strong>Ne trvale pootevřené okno</strong> – dlouhodobě vyklopené okno vzduch nevymění, jen ochladí ostění kolem sebe a vytvoří nový studený povrch pro kondenzaci</li>
              </ul>
              <p>Detailní návod, jak větrat v různých ročních obdobích, najdete v samostatném článku <Link href="/blog/spravne-vetrat-byt" style={{ color: "#2a6496", textDecoration: "underline" }}>jak správně větrat byt</Link>.</p>
              <h3>Jak správně topit</h3>
              <ul>
                <li><strong>Temperujte celý byt rovnoměrně</strong> – i málo užívané místnosti udržujte alespoň na 18 °C; zcela vychladlý pokoj má studené zdi, na kterých kondenzuje vlhkost přicházející z vytápěných místností</li>
                <li><strong>Nezavírejte dveře do studených pokojů</strong>, do kterých proudí teplý vlhký vzduch – jinak v nich vlhkost zkondenzuje</li>
                <li><strong>Nezakrývejte radiátory</strong> nábytkem ani závěsy, aby teplo mohlo prohřát i plochu zdi za nimi</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Ložnice bývá nejrizikovější místnost. Lidé ji často nechávají chladnou a spí při zavřeném okně – přes noc se tak nahromadí vlhkost z dýchání a ráno kondenzuje na studených zdech. Řešení: mírně temperovat i ložnici a hned po probuzení ji krátce vyvětrat.</div>
            </section>

            <section id="zatepleni-vlhkost">
              <h2>Zateplení a kontrola vlhkosti</h2>
              <p>Pokud kondenzace přetrvává i přes správné větrání a topení, příčina je nejspíš v konstrukci – studené stěny nebo tepelné mosty. Tady pomůže zvýšit teplotu povrchu zdí zateplením a zároveň mít vlhkost trvale pod kontrolou.</p>
              <h3>Zateplení jako trvalé řešení</h3>
              <p>Zateplení fasády posune teplotu vnitřního povrchu stěny výš – klidně o několik stupňů – takže se dostane bezpečně nad rosný bod a kondenzace zmizí. U rohů, ostění a balkonových desek jde často jen o cílené odstranění konkrétního tepelného mostu, ne o zateplení celého domu. Vnitřní zateplení je možné, ale je citlivé na správný návrh a parozábranu; chybné provedení může vlhkost naopak uzavřít do zdi. Proto ho vždy nechte spočítat odborníkem.</p>
              <h3>Kontrola vlhkosti v každodenním provozu</h3>
              <ul>
                <li><strong>Vlhkoměr do každé rizikové místnosti</strong> – cílem je udržet relativní vlhkost mezi 40 a 55 %; nad 60 % zpozorněte</li>
                <li><strong>Odvod vlhkosti u zdroje</strong> – ventilátor v koupelně nechte běžet ještě 15 minut po sprše, při vaření zapněte digestoř s odtahem</li>
                <li><strong>Nesušte prádlo v uzavřených pokojích</strong> – jedna pračka prádla uvolní do vzduchu i 2 litry vody</li>
                <li><strong>Odvlhčovač jako podpora</strong> – v místnostech, kde větrání nestačí (sklep, byt bez oken v koupelně), pomůže udržet vlhkost pod kontrolou</li>
              </ul>
              <p>Kondenzace trápí typicky i sklepy, které přes zimu prochladnou. Jak je bezpečně vysušit a vyčistit, popisujeme v návodu <Link href="/blog/cisteni-a-odvlhceni-sklepa" style={{ color: "#2a6496", textDecoration: "underline" }}>čištění a odvlhčení sklepa</Link>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Než investujete do zateplení, ověřte, že problém není jen v návycích. Měsíc důsledně větrejte a temperujte a sledujte vlhkoměr. Pokud kondenzace zmizí, ušetříte si drahou stavební akci. Pokud přetrvává na konkrétním studeném místě, máte potvrzený tepelný most k řešení.</div>
            </section>

            <section id="kdy-plisen">
              <h2>Když už plíseň je a kdy volat odborníka</h2>
              <p>Pokud kondenzace přerostla ve viditelnou plíseň, je potřeba ji nejprve bezpečně odstranit a teprve pak řešit příčinu. Samotné umytí povrchu nestačí – bez odstranění příčiny (studený povrch a vysoká vlhkost) se plíseň za pár týdnů vrátí.</p>
              <h3>Základní postup u malé plochy</h3>
              <ul>
                <li><strong>Ochrana především</strong> – respirátor FFP2 nebo FFP3, brýle a rukavice; spory plísní dráždí dýchací cesty a mohou vyvolat alergii</li>
                <li><strong>Aplikujte přípravek na plíseň</strong> (fungicid nebo prostředek na bázi chloru), nechte působit dle návodu a setřete</li>
                <li><strong>Nechte plochu důkladně vyschnout</strong> a teprve pak řešte příčinu – teplotu povrchu a vlhkost vzduchu</li>
              </ul>
              <p>Podrobný a bezpečný postup krok za krokem, včetně výběru přípravku, najdete v návodu <Link href="/blog/jak-odstranit-plisen-na-zdi" style={{ color: "#2a6496", textDecoration: "underline" }}>jak odstranit plíseň na zdi</Link>.</p>
              <h3>Kdy je problém za hranicí svépomoci</h3>
              <ul>
                <li><strong>Plocha plísně nad 0,5 m²</strong> nebo plíseň prorůstající do omítky a zdiva</li>
                <li><strong>Plíseň se vrací</strong> na stejném místě i po správném větrání, topení a ošetření – jasný signál konstrukčního tepelného mostu</li>
                <li><strong>Alergie nebo dýchací potíže</strong> obyvatel, které se zhoršují doma</li>
                <li><strong>Vlhkost nepochází z kondenzace</strong>, ale ze zatékání či vzlínání ze základů – to vyžaduje stavební sanaci</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Při hledání odborníka volte firmu se zaměřením na sanaci vlhkosti a tepelnou techniku, ne jen malíře. Dobrý specialista nejdřív změří teploty povrchů a vlhkost, najde tepelný most termokamerou a navrhne cílené řešení – jinak se plíseň po přemalování vrátí.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Co je rosný bod jednoduše vysvětleno?", a: "Rosný bod je teplota, na kterou musí vzduch vychladnout, aby se v něm obsažená vodní pára začala srážet na kapky. Závisí na teplotě a relativní vlhkosti vzduchu. Při 21 °C a 60 % vlhkosti je rosný bod přibližně 13 °C – jakmile se nějaký povrch v místnosti ochladí pod tuto hodnotu, začne na něm kondenzovat voda." },
                  { q: "Proč se sráží voda a plíseň jen v rohu místnosti?", a: "Rohy obvodových stěn jsou takzvané tepelné mosty – teplo tudy uniká rychleji a povrch zdi je zde chladnější než uprostřed stěny. Pokud teplota v rohu klesne pod rosný bod, vzdušná vlhkost tam zkondenzuje jako první. Proto plíseň typicky začíná právě v rozích za nábytkem, u stropu a kolem oken." },
                  { q: "Jaká vlhkost v bytě zabrání kondenzaci na zdech?", a: "Udržujte relativní vlhkost vzduchu mezi 40 a 55 %. Při této hodnotě je rosný bod nízko (kolem 7–11 °C při běžné pokojové teplotě) a povrch zdí se pod něj běžně nedostane. Nad 60 % vlhkosti riziko kondenzace prudce roste a nad 65 % plíseň aktivně roste. Vlhkost sledujte vlhkoměrem za pár set korun." },
                  { q: "Jak zabránit kondenzaci na studené zdi bez zateplení?", a: "Zvyšte teplotu povrchu zdi a snižte vlhkost vzduchu. Prakticky to znamená: pravidelně krátce a intenzivně větrat (2–3× denně 5–10 minut křížem), rovnoměrně temperovat i málo užívané místnosti alespoň na 18 °C, odsunout nábytek nejméně 5 cm od obvodových stěn kvůli cirkulaci vzduchu a nesušit prádlo v uzavřených pokojích. Zateplení je nejúčinnější, ale tyto kroky pomohou i bez něj." },
                  { q: "Stačí na kondenzaci jen víc topit?", a: "Topení samo o sobě nestačí. Zvýší sice teplotu povrchu zdí, ale pokud zároveň nevětráte, vlhkost se hromadí a rosný bod stoupá. Nejlepší je kombinace: temperovat rovnoměrně celý byt a k tomu pravidelně krátce větrat, aby vlhký vzduch odešel ven. Samotné přetápění bez větrání problém s kondenzací nevyřeší." },
                ].map(({ q, a }) => (
                  <details key={q} className="faq-item">
                    <summary className="faq-q">{q}</summary>
                    <p className="faq-a">{a}</p>
                  </details>
                ))}
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/rosny-bod-a-kondenzace-na-zdech" title="Rosný bod a kondenzace: jak zabránit plísni na zdech" />

            <section className="related-section">
              <h2>Související články</h2>
              <div className="related-grid">
                {RELATED.map((r) => (
                  <Link key={r.href} href={r.href} className="card">
                    <div className="card-eyebrow-row"><span>Sezónní údržba</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#co-je-rosny-bod">Co je rosný bod</a></li>
                <li><a href="#proc-kondenzuje">Proč voda kondenzuje</a></li>
                <li><a href="#tepelne-mosty">Tepelné mosty</a></li>
                <li><a href="#vetrani-topeni">Větrání a topení</a></li>
                <li><a href="#zatepleni-vlhkost">Zateplení a vlhkost</a></li>
                <li><a href="#kdy-plisen">Když už plíseň je</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/sezonni-udrzba" className="sidebar-cat-link">❄️ Sezónní údržba<span>36 článků →</span></Link>
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
        .hero-illustration { margin: 28px 0 36px; border-radius: 12px; overflow: hidden; border: 1px solid var(--border); }
        .hero-svg { width: 100%; height: auto; display: block; }
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
