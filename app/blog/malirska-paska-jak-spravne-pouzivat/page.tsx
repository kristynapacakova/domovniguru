import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Malířská páska – jak ji správně použít, aby nepropustila barvu",
  description: "Výběr správného typu malířské pásky, nalepení pro čistou rovnou linii a správné odlepování – návod, jak páskou ochránit lišty, rámy oken a stropy bez prosáknutí barvy.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/malirska-paska-jak-spravne-pouzivat" },
  openGraph: {
    title: "Malířská páska – jak ji správně použít, aby nepropustila barvu",
    description: "Výběr správného typu malířské pásky, nalepení pro čistou rovnou linii a správné odlepování – návod, jak páskou ochránit lišty, rámy oken a stropy bez prosáknutí barvy.",
    url: "https://www.domovniguru.cz/blog/malirska-paska-jak-spravne-pouzivat",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "article",
    publishedTime: "2026-06-22T08:00:00Z",
    modifiedTime: "2026-06-22T08:00:00Z",
    authors: ["DomovniGuru"],
    images: [{ url: "/api/og?title=Mal%C3%AD%C5%99sk%C3%A1%20p%C3%A1ska%20%E2%80%93%20jak%20ji%20spr%C3%A1vn%C4%9B%20pou%C5%BE%C3%ADt%2C%20aby%20nepropustila%20barvu&cat=blog", width: 1200, height: 630, alt: "Malířská páska – jak ji správně použít, aby nepropustila barvu" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Malířská páska – jak ji správně použít",
    description: "Výběr pásky, nalepení pro rovnou linii a správné odlepování.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.domovniguru.cz/blog/malirska-paska-jak-spravne-pouzivat#article",
      "headline": "Malířská páska – jak ji správně použít, aby nepropustila barvu",
      "description": "Výběr správného typu malířské pásky, nalepení pro čistou rovnou linii a správné odlepování – návod, jak páskou ochránit lišty, rámy oken a stropy bez prosáknutí barvy.",
      "datePublished": "2026-06-22T08:00:00Z",
      "dateModified": "2026-06-22T08:00:00Z",
      "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.domovniguru.cz/blog/malirska-paska-jak-spravne-pouzivat" },
      "inLanguage": "cs",
      "keywords": ["malířská páska", "jak lepit malířskou pásku", "páska propustila barvu", "rovná linie při malování", "washi páska na malování"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.domovniguru.cz/blog/malirska-paska-jak-spravne-pouzivat#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" },
        { "@type": "ListItem", "position": 3, "name": "Malování & barvy", "item": "https://www.domovniguru.cz/blog/kategorie/malovani" },
        { "@type": "ListItem", "position": 4, "name": "Malířská páska – jak ji správně použít, aby nepropustila barvu", "item": "https://www.domovniguru.cz/blog/malirska-paska-jak-spravne-pouzivat" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.domovniguru.cz/blog/malirska-paska-jak-spravne-pouzivat#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Proč mi barva pod malířskou páskou propíká?", "acceptedAnswer": { "@type": "Answer", "text": "Nejčastější příčinou je nedostatečně přitlačená páska nebo nerovný, prašný či nerovný povrch, kterým se páska nedokáže dokonale spojit. Pomáhá pásku po nalepení důkladně přejet plastovou špachtlí nebo hranou kartičky." } },
        { "@type": "Question", "name": "Jak dlouho může malířská páska zůstat na zdi nebo na rámu?", "acceptedAnswer": { "@type": "Answer", "text": "Běžná papírová páska by neměla zůstat nalepená déle než 14 dní, jinak se lepidlo zatáhne do povrchu a hůř se odstraňuje. Speciální UV odolné pásky vydrží i několik týdnů, vždy se ale řiďte údajem na obalu." } },
        { "@type": "Question", "name": "Kdy je nejlepší odlepit malířskou pásku – za mokra, nebo po zaschnutí?", "acceptedAnswer": { "@type": "Answer", "text": "Ideální je odlepovat pásku, když je barva ještě lehce vlhká na povrchu, ale ne tekutá – obvykle 30–60 minut po nátěru podle typu barvy. Odlepování po úplném zaschnutí barvy hrozí odtržením tenké vrstvy barvy spolu s páskou." } },
        { "@type": "Question", "name": "Jaký typ malířské pásky vybrat na strukturovaný povrch?", "acceptedAnswer": { "@type": "Answer", "text": "Na strukturované omítky a štukové povrchy je vhodná silnější páska s vyšší flexibilitou a lepší přídržností, často označovaná jako páska na hrubé povrchy. Tenká kancelářská nebo univerzální páska se na nerovnostech nedotáhne a propustí barvu." } },
        { "@type": "Question", "name": "Můžu použít obyčejnou lepicí pásku místo malířské?", "acceptedAnswer": { "@type": "Answer", "text": "Nelze to doporučit. Běžná lepicí páska má silnější lepidlo, které po odlepení strhne nátěr nebo zanechá lepivé zbytky, a navíc se hůř odlepuje v rovné linii. Malířská páska je navržena přesně na dočasné použití na maľovaných plochách." } },
        { "@type": "Question", "name": "Jak odstranit lepidlo, které po pásce zůstalo na zdi?", "acceptedAnswer": { "@type": "Answer", "text": "Drobné zbytky lepidla obvykle stačí setřít suchým nebo lehce navlhčeným hadříkem. Pokud lepidlo zaschlo a zatáhlo se do barvy, pomůže opatrné otření hadříkem s troškou isopropylalkoholu, vždy nejprve vyzkoušené na malé nenápadné ploše." } },
      ],
    },
    {
      "@type": "HowTo",
      "@id": "https://www.domovniguru.cz/blog/malirska-paska-jak-spravne-pouzivat#howto",
      "name": "Malířská páska – jak ji správně použít, aby nepropustila barvu",
      "description": "Výběr správného typu malířské pásky, nalepení pro čistou rovnou linii a správné odlepování – návod, jak páskou ochránit lišty, rámy oken a stropy bez prosáknutí barvy.",
      "step": [
        { "@type": "HowToStep", "name": "Výběr typu pásky", "text": "Zvolte pásku podle povrchu – papírovou na hladké stěny, washi pásku na citlivé povrchy a silnější pásku na strukturované omítky." },
        { "@type": "HowToStep", "name": "Příprava povrchu před lepením", "text": "Povrch očistěte od prachu a mastnoty a ujistěte se, že je suchý, jinak páska nepřilne rovnoměrně." },
        { "@type": "HowToStep", "name": "Nalepení pásky pro rovnou linii", "text": "Pásku natahujte v jednom tahu podél hrany a po nalepení ji důkladně přitlačte špachtlí nebo hranou kartičky." },
        { "@type": "HowToStep", "name": "Nátěr a doba na zdi", "text": "Natírejte tahy směrem od pásky a nepřetěžujte hranu nadměrným množstvím barvy, pásku nechte na zdi maximálně doporučenou dobu." },
        { "@type": "HowToStep", "name": "Odlepení pásky ve správný moment", "text": "Pásku odlepujte, když je barva lehce zaschlá na povrchu, tahem pod úhlem 45 stupňů směrem k sobě a pomalu." },
        { "@type": "HowToStep", "name": "Dokončení a kontrola linie", "text": "Po odlepení zkontrolujte linii a případné drobné nedostatky opravte tenkým štětcem ihned, dokud je barva ještě čerstvá." },
      ],
    },
  ],
};

const RELATED = [
  { title: "Jak malovat zeď – kompletní postup", href: "/blog/jak-malovat-zed", read: "5 min" },
  { title: "Nejčastější chyby při malování", href: "/blog/nejcastejsi-chyby-pri-malovani", read: "5 min" },
  { title: "Jak vybrat barvu na zeď", href: "/blog/jak-vybrat-barvu-na-zed", read: "5 min" },
  { title: "Jak malovat nábytek a dveře", href: "/blog/jak-malovat-nabytek-a-dvere", read: "5 min" },
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
              <span>Malířská páska – jak ji správně použít, aby nepropustila barvu</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování & barvy</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Malířská páska – jak ji správně použít, aby nepropustila barvu</h1>
              <p className="article-lead">Malířská páska vypadá jako jednoduchá pomůcka, ale špatně vybraná nebo špatně nalepená dokáže celý nátěr zkazit – barva pod ní propíká, linie je zvlněná a po odlepení zůstávají otrhané okraje. Ukážeme vám, jak na to, aby výsledná hrana byla čistá a rovná na první pokus.</p>
              <div className="article-meta-row">
                <span>Aktualizováno: 22. června 2026</span><span>·</span><span>DomovniGuru</span>
              </div>
              <ShareButtons url="https://www.domovniguru.cz/blog/malirska-paska-jak-spravne-pouzivat" title="Malířská páska – jak ji správně použít, aby nepropustila barvu" />
            </header>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#typy-pasky">Jaké typy malířské pásky existují</a></li>
                <li><a href="#priprava">Příprava povrchu před lepením</a></li>
                <li><a href="#lepeni">Jak pásku nalepit pro rovnou linii</a></li>
                <li><a href="#doba">Jak dlouho nechat pásku na zdi</a></li>
                <li><a href="#odlepeni">Kdy a jak pásku odlepovat</a></li>
                <li><a href="#chyby">Nejčastější chyby</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="typy-pasky">
              <h2>Jaké typy malířské pásky existují</h2>
              <p>Na trhu je celá řada malířských pásek a výběr nesprávného typu je jednou z nejčastějších příčin, proč se pod páskou objeví prosáklá barva.</p>
              <h3>Papírová páska na hladké povrchy</h3>
              <p>Základní a nejpoužívanější typ pro hladké omítky, sádrokarton nebo dřevěné lišty. Má dobrou přídržnost a po odlepení nezanechává lepivé zbytky, pokud se nenechá na povrchu příliš dlouho.</p>
              <h3>Washi páska na citlivé povrchy</h3>
              <p>Tenčí a jemnější páska vyrobená z rýžového papíru, určená pro citlivé nebo již natřené povrchy, tapety a čerstvě vymalované plochy. Šetrně se odlepuje a nehrozí takové riziko strhnutí podkladu.</p>
              <h3>Páska na strukturované a hrubé povrchy</h3>
              <p>Pro štukové omítky, hrubé zdivo nebo betonové povrchy je potřeba silnější a flexibilnější páska, která se dokáže přizpůsobit nerovnostem a vytvořit souvislou bariéru proti barvě. Tenká univerzální páska se na takovém povrchu nedotáhne všude stejně a barva pod ní propíká.</p>
              <h3>UV odolná páska na delší použití</h3>
              <p>Pokud má páska zůstat na místě déle, například při malování ve více fázích nebo na fasádě, vyberte typ odolný proti UV záření, který se nezatáhne a nezkřehne na slunci.</p>
            </section>

            <section id="priprava">
              <h2>Příprava povrchu před lepením</h2>
              <p>Páska se nikdy nedokáže dokonale spojit s prašným, mastným nebo vlhkým povrchem, a právě tam vznikají nejčastější mezery, kterými barva propíká.</p>
              <h3>Očištění povrchu</h3>
              <p>Před lepením setřete z povrchu prach, pavučiny a drobné nečistoty suchým hadříkem. Mastné skvrny, například otisky prstů na rámu okna, odstraňte přípravkem na odmaštění a povrch nechte oschnout.</p>
              <h3>Suchý povrch je nutnost</h3>
              <p>Páska nalepená na vlhký povrch nedrží a po chvíli se sama odlupuje od hrany. Pokud jste stěnu před malováním omývali, vyčkejte na úplné oschnutí, než začnete lepit.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Na velmi prašné nebo drolivé omítky pomáhá povrch nejprve přetřít penetračním nátěrem a až po jeho zaschnutí lepit pásku – sníží se tím riziko, že se páska spolu s drolící se omítkou odtrhne.</div>
            </section>

            <section id="lepeni">
              <h2>Jak pásku nalepit pro čistou rovnou linii</h2>
              <p>Samotné nalepení rozhoduje o tom, jak rovná a čistá bude výsledná hrana mezi barvami nebo mezi stěnou a rámem.</p>
              <h3>Natahování v jednom tahu</h3>
              <p>Pásku natahujte podél hrany pomalu a v jednom souvislém tahu, aby nevznikaly zvlněné úseky. Krátké přerušované úseky obvykle vedou k nerovné linii a je nutné je opravovat.</p>
              <h3>Přitlačení je klíčové</h3>
              <p>Po nalepení pásku vždy důkladně přitlačte – nejlépe plastovou špachtlí, hranou staré kreditní karty nebo zadní stranou nůžek. Tento krok je nejdůležitější pro zabránění prosáknutí barvy, protože vytváří těsný kontakt mezi páskou a povrchem po celé délce.</p>
              <h3>Rohy a nerovnosti</h3>
              <p>V rozích a na nerovných místech pásku přestřihněte a slepte přes sebe v krátkém přesahu, místo aby se snažila ohýbat kolem rohu v jednom kuse – jinak se v rohu nadzdvihne a vznikne mezera.</p>
            </section>

            <section id="doba">
              <h2>Jak dlouho nechat pásku na zdi</h2>
              <p>Doba, po kterou páska zůstává nalepená, ovlivňuje, jak snadno se nakonec odlepí a jestli nepoškodí podklad.</p>
              <h3>Maximální doporučená doba</h3>
              <p>Běžná papírová malířská páska by neměla zůstat na povrchu déle než přibližně 14 dní. Po delší době se lepidlo zatáhne hlouběji do podkladu nebo do natřené plochy a odlepování pak zanechává stopy.</p>
              <h3>Co dělat při delších projektech</h3>
              <p>Pokud malování probíhá po etapách a páska by musela zůstat déle, použijte typ odolný proti UV záření a delšímu vystavení, nebo pásku po týdnu vyměňte za novou.</p>
            </section>

            <section id="odlepeni">
              <h2>Kdy a jak pásku odlepovat</h2>
              <p>Načasování odlepení je možná nejdůležitější krok celého procesu a zároveň nejčastější zdroj chyb.</p>
              <h3>Ideální moment pro odlepení</h3>
              <p>Pásku je nejlepší odlepovat, když je barva na povrchu už lehce zaschlá na dotyk, ale ještě ne úplně vytvrzená – obvykle 30 až 60 minut po nátěru, podle typu barvy a tloušťky vrstvy. V tomto stadiu se hrana barvy spolu s páskou neodtrhne.</p>
              <h3>Proč nečekat na úplné zaschnutí</h3>
              <p>Pokud barva zcela zaschne a vytvoří souvislý film i na pásce, odlepování pásku odtrhne tuto tenkou vrstvu barvy s sebou a na hraně vznikne otrhaný, neúhledný okraj, který se musí dodatečně opravovat štětcem.</p>
              <h3>Technika odlepování</h3>
              <p>Pásku odlepujte pomalu, pod úhlem přibližně 45 stupňů směrem k sobě, ne nahoru ani do strany. Pokud narazíte na odpor, místo tahání raději přiložte ostrý nůž a hranu lehce naříznete podél linie barvy.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud nejste jisti přesným časem zaschnutí, odlepte zkusmo malý kousek pásky v rohu – pokud se barva neodtrhává, můžete pokračovat na celé délce.</div>
            </section>

            <section id="chyby">
              <h2>Nejčastější chyby při používání malířské pásky</h2>
              <ul>
                <li><strong>Odlepování po úplném zaschnutí</strong> – barva se odtrhne s páskou a vznikne otrhaná hrana</li>
                <li><strong>Příliš dlouhé ponechání pásky na povrchu</strong> – lepidlo se zatáhne a obtížně se odstraňuje</li>
                <li><strong>Nedostatečné přitlačení pásky</strong> – mezi páskou a povrchem zůstávají mikroskopické mezery, kterými barva prosakuje</li>
                <li><strong>Použití nevhodného typu na strukturovaný povrch</strong> – tenká páska se nedotáhne na nerovnosti omítky</li>
                <li><strong>Lepení na prašný nebo mastný povrch</strong> – páska nedrží a postupně se odlupuje od hrany už během malování</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Proč mi barva pod malířskou páskou propíká?", a: "Nejčastější příčinou je nedostatečně přitlačená páska nebo nerovný, prašný či nerovný povrch, kterým se páska nedokáže dokonale spojit. Pomáhá pásku po nalepení důkladně přejet plastovou špachtlí nebo hranou kartičky." },
                  { q: "Jak dlouho může malířská páska zůstat na zdi nebo na rámu?", a: "Běžná papírová páska by neměla zůstat nalepená déle než 14 dní, jinak se lepidlo zatáhne do povrchu a hůř se odstraňuje. Speciální UV odolné pásky vydrží i několik týdnů, vždy se ale řiďte údajem na obalu." },
                  { q: "Kdy je nejlepší odlepit malířskou pásku – za mokra, nebo po zaschnutí?", a: "Ideální je odlepovat pásku, když je barva ještě lehce vlhká na povrchu, ale ne tekutá – obvykle 30–60 minut po nátěru podle typu barvy. Odlepování po úplném zaschnutí barvy hrozí odtržením tenké vrstvy barvy spolu s páskou." },
                  { q: "Jaký typ malířské pásky vybrat na strukturovaný povrch?", a: "Na strukturované omítky a štukové povrchy je vhodná silnější páska s vyšší flexibilitou a lepší přídržností, často označovaná jako páska na hrubé povrchy. Tenká kancelářská nebo univerzální páska se na nerovnostech nedotáhne a propustí barvu." },
                  { q: "Můžu použít obyčejnou lepicí pásku místo malířské?", a: "Nelze to doporučit. Běžná lepicí páska má silnější lepidlo, které po odlepení strhne nátěr nebo zanechá lepivé zbytky, a navíc se hůř odlepuje v rovné linii. Malířská páska je navržena přesně na dočasné použití na malovaných plochách." },
                  { q: "Jak odstranit lepidlo, které po pásce zůstalo na zdi?", a: "Drobné zbytky lepidla obvykle stačí setřít suchým nebo lehce navlhčeným hadříkem. Pokud lepidlo zaschlo a zatáhlo se do barvy, pomůže opatrné otření hadříkem s troškou isopropylalkoholu, vždy nejprve vyzkoušené na malé nenápadné ploše." },
                ].map(({ q, a }) => (
                  <details key={q} className="faq-item">
                    <summary className="faq-summary">{q}<span className="faq-icon">▾</span></summary>
                    <div className="faq-body">{a}</div>
                  </details>
                ))}
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/malirska-paska-jak-spravne-pouzivat" title="Malířská páska – jak ji správně použít, aby nepropustila barvu" />

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
                <li><a href="#typy-pasky">Typy malířské pásky</a></li>
                <li><a href="#priprava">Příprava povrchu</a></li>
                <li><a href="#lepeni">Nalepení pro rovnou linii</a></li>
                <li><a href="#doba">Doba na zdi</a></li>
                <li><a href="#odlepeni">Kdy a jak odlepovat</a></li>
                <li><a href="#chyby">Nejčastější chyby</a></li>
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
        .faq-icon{font-size:14px;font-weight:400;flex-shrink:0;margin-left:12px;transition:transform 150ms}
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
