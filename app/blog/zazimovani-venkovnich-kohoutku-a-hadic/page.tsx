import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak zazimovat venkovní kohoutky a zahradní hadice",
  description: "Proč zamrzlý venkovní kohoutek praskne a jak tomu předejít – postup, jak vypustit hadice, uzavřít přívod vody a ochránit kohoutek před mrazem.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/zazimovani-venkovnich-kohoutku-a-hadic" },
  openGraph: {
    title: "Jak zazimovat venkovní kohoutky a zahradní hadice",
    description: "Proč zamrzlý venkovní kohoutek praskne a jak tomu předejít – postup, jak vypustit hadice, uzavřít přívod vody a ochránit kohoutek před mrazem.",
    url: "https://www.domovniguru.cz/blog/zazimovani-venkovnich-kohoutku-a-hadic",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "article",
    publishedTime: "2026-06-22T08:00:00Z",
    modifiedTime: "2026-06-22T08:00:00Z",
    authors: ["DomovniGuru"],
    images: [{ url: "/api/og?title=Jak%20zazimovat%20venkovn%C3%AD%20kohoutky%20a%20zahradn%C3%AD%20hadice&cat=blog", width: 1200, height: 630, alt: "Jak zazimovat venkovní kohoutky a zahradní hadice" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jak zazimovat venkovní kohoutky a zahradní hadice",
    description: "Postup, jak vypustit hadice, uzavřít přívod vody a ochránit kohoutek před mrazem.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.domovniguru.cz/blog/zazimovani-venkovnich-kohoutku-a-hadic#article",
      "headline": "Jak zazimovat venkovní kohoutky a zahradní hadice",
      "description": "Proč zamrzlý venkovní kohoutek praskne a jak tomu předejít – postup, jak vypustit hadice, uzavřít přívod vody a ochránit kohoutek před mrazem.",
      "datePublished": "2026-06-22T08:00:00Z",
      "dateModified": "2026-06-22T08:00:00Z",
      "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.domovniguru.cz/blog/zazimovani-venkovnich-kohoutku-a-hadic" },
      "inLanguage": "cs",
      "keywords": ["zazimování venkovního kohoutku", "zahradní hadice na zimu", "prasklý kohoutek mráz", "uzavření přívodu vody venkovní kohoutek", "izolace venkovního kohoutku"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.domovniguru.cz/blog/zazimovani-venkovnich-kohoutku-a-hadic#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" },
        { "@type": "ListItem", "position": 3, "name": "Sezónní údržba", "item": "https://www.domovniguru.cz/blog/kategorie/sezonni-udrzba" },
        { "@type": "ListItem", "position": 4, "name": "Jak zazimovat venkovní kohoutky a zahradní hadice", "item": "https://www.domovniguru.cz/blog/zazimovani-venkovnich-kohoutku-a-hadic" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.domovniguru.cz/blog/zazimovani-venkovnich-kohoutku-a-hadic#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Proč venkovní kohoutek v mrazu praskne?", "acceptedAnswer": { "@type": "Answer", "text": "Voda, která zůstane v potrubí nebo v těle kohoutku, při zmrznutí zvětší svůj objem až o 9 %. Tento tlak materiál kohoutku nebo spoj potrubí nevydrží a praskne – škoda se ale často projeví až na jaře, kdy kohoutek po roztání začne protékat nebo vůbec nedrží vodu." } },
        { "@type": "Question", "name": "Kdy je nejlepší čas zazimovat venkovní kohoutek?", "acceptedAnswer": { "@type": "Answer", "text": "Ideálně v polovině až konci října, určitě však ještě před prvními nočními mrazíky. Pokud čekáš na poslední chvíli, riskuješ, že jednu chladnou noc kohoutek nebo hadici prostě zapomeneš a poškození už nejde vrátit." } },
        { "@type": "Question", "name": "Stačí jen zavřít kohoutek, nebo musím odpojit i hadici?", "acceptedAnswer": { "@type": "Answer", "text": "Nestačí. I zavřený kohoutek může mít v těle zbytek vody a připojená hadice navíc brání kompletnímu vypuštění. Hadici je potřeba odpojit, vypustit z ní vodu a uložit ji do tepla, kohoutek pak nechat otevřený, aby z něj mohla odtéct zbytková voda." } },
        { "@type": "Question", "name": "Co je to mrazuvzdorný venkovní kohoutek?", "acceptedAnswer": { "@type": "Answer", "text": "Jde o kohoutek s prodlouženým tělem, jehož uzavírací ventil je posunutý dovnitř domu, do vytápěného prostoru. I tak je ale po skončení sezóny vhodné vodu z přívodní trubky mezi ventilem a výtokem vypustit, protože riziko zamrznutí úplně neodstraňuje." } },
        { "@type": "Question", "name": "Jak poznám, že už je pozdě a kohoutek je poškozený?", "acceptedAnswer": { "@type": "Answer", "text": "Typickým příznakem je kohoutek, který po otevření na jaře kape nebo stříká i v zavřeném stavu, případně viditelná prasklina na těle kohoutku. V takovém případě je nutná výměna, oprava praskliny se obvykle nevyplatí." } },
        { "@type": "Question", "name": "Mohu izolační kryt na kohoutek použít místo vypuštění vody?", "acceptedAnswer": { "@type": "Answer", "text": "Izolační kryt funguje jen jako doplňková ochrana proti krátkodobým mrazíkům, ne jako náhrada vypuštění vody. Při delším a silnějším mrazu izolace samotná nezabrání zamrznutí vody, která v potrubí zůstala." } },
      ],
    },
    {
      "@type": "HowTo",
      "@id": "https://www.domovniguru.cz/blog/zazimovani-venkovnich-kohoutku-a-hadic#howto",
      "name": "Jak zazimovat venkovní kohoutky a zahradní hadice",
      "description": "Proč zamrzlý venkovní kohoutek praskne a jak tomu předejít – postup, jak vypustit hadice, uzavřít přívod vody a ochránit kohoutek před mrazem.",
      "step": [
        { "@type": "HowToStep", "name": "Vypuštění a svinutí hadic", "text": "Odpojenou hadici nadzvedni a postupně z ní vypusť vodu, poté ji nech důkladně oschnout a sviň do sucha pro uskladnění." },
        { "@type": "HowToStep", "name": "Uzavření přívodu vody", "text": "Uvnitř domu nebo v technické místnosti uzavři hlavní ventil přívodu vody k venkovnímu kohoutku." },
        { "@type": "HowToStep", "name": "Vypuštění zbytkové vody", "text": "Otevři venkovní kohoutek a nech z něj odtéct veškerou zbytkovou vodu, dokud nezačne kapat vzduch." },
        { "@type": "HowToStep", "name": "Instalace izolačního krytu", "text": "Na vychladlý a prázdný kohoutek nasaď izolační kryt, který ochrání tělo kohoutku před krátkodobými mrazíky." },
        { "@type": "HowToStep", "name": "Kontrola během zimy", "text": "Po silných mrazech kohoutek a jeho okolí zkontroluj, jestli se neobjevily praskliny nebo známky úniku vody." },
      ],
    },
  ],
};

const RELATED = [
  { title: "Jak připravit dům na zimu", href: "/blog/priprava-domu-na-zimu", read: "6 min" },
  { title: "Zkontrolovat kotel před zimou", href: "/blog/zkontrolovat-kotel-pred-zimou", read: "5 min" },
  { title: "Jak připravit garáž na zimu", href: "/blog/jak-pripravit-garaz-na-zimu", read: "5 min" },
  { title: "Zazimování zahradní techniky", href: "/blog/zazimovani-zahradni-techniky", read: "5 min" },
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
              <span>Jak zazimovat venkovní kohoutky a zahradní hadice</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">❄️ Sezónní údržba</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak zazimovat venkovní kohoutky a zahradní hadice</h1>
              <p className="article-lead">Zapomenutý venkovní kohoutek je jedna z nejčastějších a nejlevněji odstranitelných příčin škod na podzim a v zimě. Pár minut práce dnes tě ušetří prasklého potrubí, vytopené zdi nebo zbytečné výměny kohoutku zjara.</p>
              <div className="article-meta-row">
                <span>Aktualizováno: 22. června 2026</span><span>·</span><span>DomovniGuru</span>
              </div>
              <ShareButtons url="https://www.domovniguru.cz/blog/zazimovani-venkovnich-kohoutku-a-hadic" title="Jak zazimovat venkovní kohoutky a zahradní hadice" />
            </header>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#proc">Proč kohoutek v mrazu praskne</a></li>
                <li><a href="#hadice">Vypuštění a uložení hadic</a></li>
                <li><a href="#pripoj">Uzavření přívodu vody</a></li>
                <li><a href="#vypusteni">Vypuštění zbytkové vody</a></li>
                <li><a href="#izolace">Izolační kryt na kohoutek</a></li>
                <li><a href="#kdy">Kdy je nutné odpojit úplně</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="proc">
              <h2>Proč nezazimovaný venkovní kohoutek praskne</h2>
              <p>Voda má tu nepříjemnou vlastnost, že při zmrznutí zvětšuje svůj objem – až o devět procent. Pokud zůstane v těle kohoutku nebo v přívodním potrubí, vzniklý led tlačí na stěny materiálu zevnitř a ten dříve nebo později povolí.</p>
              <h3>Proč si poškození často nevšimneme hned</h3>
              <p>Prasklina vznikne často už během prvního silnějšího mrazu, ale projeví se až na jaře, kdy led roztaje a voda začne unikat. Pokud je kohoutek napojený přímo na vnitřní rozvod domu, může voda téct dovnitř konstrukce stěny a způsobit mnohem větší škodu, než jen výměnu kohoutku.</p>
              <h3>Rizikové typy kohoutků</h3>
              <p>Nejvíc ohrožené jsou klasické venkovní kohoutky namontované přímo na fasádě, jejichž celé tělo i uzavírací mechanismus jsou vystaveny mrazu. Bezpečnější jsou mrazuvzdorné kohoutky s prodlouženým tělem, u kterých je ventil posunutý do vytápěného prostoru, ale ani ty nejsou stoprocentně bez rizika.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud nevíš, jaký typ kohoutku máš, zazimuj ho stejně důkladně jako klasický – vypuštění vody nikdy neuškodí, i kdyby šlo o mrazuvzdorný model.</div>
            </section>

            <section id="hadice">
              <h2>Vypuštění a uložení zahradních hadic</h2>
              <p>Zahradní hadice patří mezi věci, na které se nejčastěji zapomíná, přitom voda v nich zmrzlá způsobí prasklinu stejně snadno jako v pevném potrubí.</p>
              <h3>Jak hadici správně vypustit</h3>
              <p>Hadici nejdřív odpojte od kohoutku i od zahradní stříkací pistole nebo nástavce. Poté ji zvedněte z jednoho konce a postupně nechte vodu vytéct na druhém konci – nejlépe tak, že hadici provlékáte rukama ve směru spádu, dokud nevyteče všechna voda.</p>
              <h3>Sušení a skladování</h3>
              <p>Vypuštěnou hadici nech ještě chvíli rozloženou, aby zbytková vlhkost úplně vyschla, a teprve potom ji sviň do kruhu nebo na navíjecí stojan. Skladuj ji v garáži, sklepě nebo komoře, kde nehrozí mráz – plast hadice mrazem postupně tvrdne a křehne, a to i v případě, že je prázdná.</p>
            </section>

            <section id="pripoj">
              <h2>Uzavření přívodu vody k venkovnímu kohoutku</h2>
              <p>Většina venkovních kohoutků má vlastní uzavírací ventil umístěný uvnitř domu, v technické místnosti, sklepě nebo na vstupu vodovodní přípojky.</p>
              <h3>Jak ventil najít a uzavřít</h3>
              <p>Ventil bývá označen popisem nebo je viditelně napojen na potrubí směřující k vnější zdi. Otočením do uzavřené polohy přeruš přívod vody k venkovnímu kohoutku, aniž bys musel omezovat zbytek vodovodního rozvodu v domě.</p>
              <h3>Co dělat, když ventil chybí</h3>
              <p>Pokud venkovní kohoutek samostatný uzavírací ventil nemá a je napojený přímo na hlavní rozvod, je vhodné nechat si ho při příští rekonstrukci instalovat. Bez něj totiž nejde kohoutek na zimu spolehlivě zabezpečit a riziko prasknutí zůstává vysoké každý rok.</p>
            </section>

            <section id="vypusteni">
              <h2>Vypuštění zbytkové vody z kohoutku</h2>
              <p>Samotné uzavření přívodu nestačí – v úseku potrubí mezi ventilem a výtokem kohoutku zůstává voda, kterou je potřeba také odstranit.</p>
              <h3>Postup vypuštění</h3>
              <ul>
                <li><strong>Uzavři vnitřní ventil</strong> přívodu vody k venkovnímu kohoutku</li>
                <li><strong>Otevři venkovní kohoutek</strong> a nech veškerou vodu volně odtéct</li>
                <li><strong>Vyčkej, až přestane voda kapat</strong> a z kohoutku uniká už jen vzduch</li>
                <li><strong>Kohoutek nech otevřený</strong> přes celou zimu, aby v něm nezůstal tlak ani vlhkost</li>
              </ul>
              <h3>Pozor na nízko položené úseky potrubí</h3>
              <p>Pokud potrubí mezi ventilem a kohoutkem vede v nějakém úseku mírně dolů a pak zase nahoru, voda se v tomto sedlu může zadržet i přes otevřený kohoutek. V takovém případě pomůže krátké odpojení potrubí v nejnižším bodě nebo použití kompresoru k profouknutí zbytkové vody.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Nezapomeň na kohoutky u zahradního jezírka, skleníku nebo venkovní kuchyně – často se na ně zapomíná, přitom mrazu jsou vystaveny stejně jako ten u hlavního vchodu.</div>
            </section>

            <section id="izolace">
              <h2>Izolační kryt na kohoutek</h2>
              <p>Izolační kryt je užitečný doplněk, ale je důležité chápat, co dokáže a co ne.</p>
              <h3>K čemu kryt slouží</h3>
              <p>Polystyrenový nebo pěnový kryt nasazený na vypuštěný a uzavřený kohoutek snižuje riziko poškození při náhlých krátkodobých mrazících, kdy by jinak mráz působil přímo na kovové tělo kohoutku. Funguje jako tepelná izolace, podobně jako u potrubí vedeného nechráněnými prostory.</p>
              <h3>Co kryt nenahradí</h3>
              <p>Izolační kryt v žádném případě nenahrazuje vypuštění vody. Pokud je v kohoutku nebo v přívodním potrubí stále voda, dlouhotrvající mráz ji nakonec promrzne i přes izolaci – kryt jen prodlouží čas, než k tomu dojde, ne zabrání tomu úplně.</p>
            </section>

            <section id="kdy">
              <h2>Kdy je potřeba hadici odpojit úplně</h2>
              <p>U některých typů zahradních systémů nestačí jen vypustit vodu, ale je nutné odpojit hadici nebo celý systém od zdroje úplně.</p>
              <h3>Zahradní zavlažovací systémy</h3>
              <p>Pokud máš na zahradě instalovaný automatický závlahový systém s rozvody pod povrchem, je nutné na konci sezóny vodu z celého systému profouknout kompresorem a hlavní přívod uzavřít a odpojit – zbytková voda v plastových trubkách pod zemí je při mrazu stejně rizikové jako voda v hadici.</p>
              <h3>Hadice napojené na nádrže nebo barely</h3>
              <p>Hadice vedoucí k dešťovým barelům nebo zahradním nádržím odpoj úplně a nádrže samotné z větší části vypusť nebo alespoň otevři výpustní ventil, aby v nich nezůstala stojící voda, která by mohla nádrž mrazem poškodit.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Proč venkovní kohoutek v mrazu praskne?", a: "Voda, která zůstane v potrubí nebo v těle kohoutku, při zmrznutí zvětší svůj objem až o 9 %. Tento tlak materiál kohoutku nebo spoj potrubí nevydrží a praskne – škoda se ale často projeví až na jaře, kdy kohoutek po roztání začne protékat nebo vůbec nedrží vodu." },
                  { q: "Kdy je nejlepší čas zazimovat venkovní kohoutek?", a: "Ideálně v polovině až konci října, určitě však ještě před prvními nočními mrazíky. Pokud čekáš na poslední chvíli, riskuješ, že jednu chladnou noc kohoutek nebo hadici prostě zapomeneš a poškození už nejde vrátit." },
                  { q: "Stačí jen zavřít kohoutek, nebo musím odpojit i hadici?", a: "Nestačí. I zavřený kohoutek může mít v těle zbytek vody a připojená hadice navíc brání kompletnímu vypuštění. Hadici je potřeba odpojit, vypustit z ní vodu a uložit ji do tepla, kohoutek pak nechat otevřený, aby z něj mohla odtéct zbytková voda." },
                  { q: "Co je to mrazuvzdorný venkovní kohoutek?", a: "Jde o kohoutek s prodlouženým tělem, jehož uzavírací ventil je posunutý dovnitř domu, do vytápěného prostoru. I tak je ale po skončení sezóny vhodné vodu z přívodní trubky mezi ventilem a výtokem vypustit, protože riziko zamrznutí úplně neodstraňuje." },
                  { q: "Jak poznám, že už je pozdě a kohoutek je poškozený?", a: "Typickým příznakem je kohoutek, který po otevření na jaře kape nebo stříká i v zavřeném stavu, případně viditelná prasklina na těle kohoutku. V takovém případě je nutná výměna, oprava praskliny se obvykle nevyplatí." },
                  { q: "Mohu izolační kryt na kohoutek použít místo vypuštění vody?", a: "Izolační kryt funguje jen jako doplňková ochrana proti krátkodobým mrazíkům, ne jako náhrada vypuštění vody. Při delším a silnějším mrazu izolace samotná nezabrání zamrznutí vody, která v potrubí zůstala." },
                ].map(({ q, a }) => (
                  <details key={q} className="faq-item">
                    <summary className="faq-summary">{q}<span className="faq-icon">▾</span></summary>
                    <div className="faq-body">{a}</div>
                  </details>
                ))}
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/zazimovani-venkovnich-kohoutku-a-hadic" title="Jak zazimovat venkovní kohoutky a zahradní hadice" />

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
                <li><a href="#proc">Proč kohoutek praskne</a></li>
                <li><a href="#hadice">Hadice na zimu</a></li>
                <li><a href="#pripoj">Uzavření přívodu</a></li>
                <li><a href="#vypusteni">Vypuštění vody</a></li>
                <li><a href="#izolace">Izolační kryt</a></li>
                <li><a href="#kdy">Odpojení úplně</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/sezonni-udrzba" className="sidebar-cat-link">❄️ Sezónní údržba<span>Více článků →</span></Link>
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
