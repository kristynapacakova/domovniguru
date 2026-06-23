import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak funguje proudový chránič (RCD) a kdy je v bytě povinný",
  description: "Co proudový chránič dělá, jak chrání před úrazem elektrickým proudem, kdy je povinný, jak ho otestovat a co dělat, když často vybavuje.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-funguje-proudovy-chranic" },
  openGraph: {
    title: "Jak funguje proudový chránič (RCD) a kdy je v bytě povinný",
    description: "Co proudový chránič dělá, jak chrání před úrazem elektrickým proudem, kdy je povinný, jak ho otestovat a co dělat, když často vybavuje.",
    url: "https://www.domovniguru.cz/blog/jak-funguje-proudovy-chranic",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "article",
    publishedTime: "2026-06-22T08:00:00Z",
    modifiedTime: "2026-06-22T08:00:00Z",
    authors: ["DomovniGuru"],
    images: [{ url: "/api/og?title=Jak%20funguje%20proudov%C3%BD%20chr%C3%A1ni%C4%8D%20(RCD)%20a%20kdy%20je%20v%20byt%C4%9B%20povinn%C3%BD&cat=blog", width: 1200, height: 630, alt: "Jak funguje proudový chránič (RCD) a kdy je v bytě povinný" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jak funguje proudový chránič (RCD)",
    description: "Rozdíl od jističe, kdy je povinný a jak ho otestovat.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.domovniguru.cz/blog/jak-funguje-proudovy-chranic#article",
      "headline": "Jak funguje proudový chránič (RCD) a kdy je v bytě povinný",
      "description": "Co proudový chránič dělá, jak chrání před úrazem elektrickým proudem, kdy je povinný, jak ho otestovat a co dělat, když často vybavuje.",
      "datePublished": "2026-06-22T08:00:00Z",
      "dateModified": "2026-06-22T08:00:00Z",
      "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.domovniguru.cz/blog/jak-funguje-proudovy-chranic" },
      "inLanguage": "cs",
      "keywords": ["proudový chránič", "RCD", "rozdíl jistič a chránič", "proudový chránič koupelna", "proudový chránič vybavuje"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.domovniguru.cz/blog/jak-funguje-proudovy-chranic#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" },
        { "@type": "ListItem", "position": 3, "name": "Elektrika & osvětlení", "item": "https://www.domovniguru.cz/blog/kategorie/elektrika" },
        { "@type": "ListItem", "position": 4, "name": "Jak funguje proudový chránič (RCD)", "item": "https://www.domovniguru.cz/blog/jak-funguje-proudovy-chranic" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.domovniguru.cz/blog/jak-funguje-proudovy-chranic#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Jaký je rozdíl mezi jističem a proudovým chráničem?", "acceptedAnswer": { "@type": "Answer", "text": "Jistič chrání elektroinstalaci a vodiče před přetížením a zkratem tím, že vypne obvod při nadměrném proudu. Proudový chránič (RCD) chrání člověka před úrazem elektrickým proudem tím, že porovnává proud na vstupu a výstupu obvodu a při úniku, například přes lidské tělo do země, obvod během zlomku sekundy odpojí." } },
        { "@type": "Question", "name": "Kde je proudový chránič podle normy povinný?", "acceptedAnswer": { "@type": "Answer", "text": "Aktuální norma ČSN 33 2000-4-41 vyžaduje proudový chránič s vybavovacím proudem 30 mA pro zásuvkové obvody v koupelnách, na venkovních zásuvkách, v nových bytových rozvodech obecně a u obvodů, kde hrozí zvýšené riziko úrazu, například u zásuvek v dětských pokojích nebo v podlahových vpustích." } },
        { "@type": "Question", "name": "Jak otestuji, že proudový chránič funguje?", "acceptedAnswer": { "@type": "Answer", "text": "Na chrániči je tlačítko TEST – po jeho stisknutí by se chránič měl okamžitě vybavit a vypnout daný obvod. Pokud se nevybaví, chránič je vadný a je třeba ho nechat vyměnit elektrikářem. Test se doporučuje provádět přibližně jednou za půl roku." } },
        { "@type": "Question", "name": "Proč proudový chránič často vybavuje?", "acceptedAnswer": { "@type": "Answer", "text": "Nejčastější příčinou je vlhkost v zásuvce nebo spotřebiči, vadný spotřebič se svodovým proudem, poškozená izolace kabelu nebo příliš mnoho spotřebičů se svodovým proudem na jednom chrániči. Pokud vybavuje opakovaně, je potřeba problém nechat diagnostikovat elektrikářem, ne chránič jen resetovat." } },
        { "@type": "Question", "name": "Musí mít proudový chránič i starší byt?", "acceptedAnswer": { "@type": "Answer", "text": "Starší instalace bez proudového chrániče nemusí být v rozporu s normou platnou v době výstavby, ale s ohledem na bezpečnost se doporučuje chránič doinstalovat při jakékoliv rekonstrukci elektroinstalace, a vždy povinně u koupelen a venkovních zásuvek." } },
        { "@type": "Question", "name": "Kolik proudových chráničů potřebuje běžný byt?", "acceptedAnswer": { "@type": "Answer", "text": "Záleží na rozsahu rozvodů, obvykle se používá jeden až dva chrániče na byt rozdělené podle skupin obvodů, například jeden pro koupelnu a kuchyň a druhý pro zásuvky v obytných místnostech, aby výpadek jednoho chrániče neodpojil celý byt." } },
      ],
    },
    {
      "@type": "HowTo",
      "@id": "https://www.domovniguru.cz/blog/jak-funguje-proudovy-chranic#howto",
      "name": "Jak funguje proudový chránič (RCD) a kdy je v bytě povinný",
      "description": "Co proudový chránič dělá, jak chrání před úrazem elektrickým proudem, kdy je povinný, jak ho otestovat a co dělat, když často vybavuje.",
      "step": [
        { "@type": "HowToStep", "name": "Pochopení principu chrániče", "text": "Proudový chránič porovnává proud tekoucí do obvodu a z obvodu – při rozdílu signalizujícím únik proudu mimo vodiče obvod okamžitě odpojí." },
        { "@type": "HowToStep", "name": "Ověření povinných míst v bytě", "text": "Zkontroluj, zda jsou chráničem chráněny koupelna, venkovní zásuvky a další místa vyžadovaná normou ČSN 33 2000-4-41." },
        { "@type": "HowToStep", "name": "Pravidelný test tlačítkem TEST", "text": "Přibližně jednou za půl roku stiskni testovací tlačítko na chrániči v rozváděči a ověř, že obvod skutečně vypne." },
        { "@type": "HowToStep", "name": "Identifikace příčiny častého vybavování", "text": "Při opakovaném vybavování postupně odpojuj spotřebiče na daném obvodu a sleduj, zda problém zmizí – pomůže to lokalizovat vadný spotřebič nebo vlhkost." },
        { "@type": "HowToStep", "name": "Přivolání elektrikáře při přetrvávajícím problému", "text": "Pokud chránič vybavuje i bez zapojených spotřebičů nebo se nevybaví při testu, kontaktuj elektrikáře s revizí – může jít o poškozenou izolaci nebo vadný chránič." },
      ],
    },
  ],
};

const RELATED = [
  { title: "Jak vyměnit zásuvku", href: "/blog/jak-vymenit-zasuvku", read: "5 min" },
  { title: "Proč vypadává jistič", href: "/blog/proc-vypadava-jistic", read: "5 min" },
  { title: "Jak fungují pojistky", href: "/blog/jak-funguji-pojistky", read: "5 min" },
  { title: "Jak otestovat zásuvku", href: "/blog/otestovat-zasuvku", read: "4 min" },
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
              <span>Jak funguje proudový chránič (RCD)</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">⚡ Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak funguje proudový chránič (RCD) a kdy je v bytě povinný</h1>
              <p className="article-lead">Jistič a proudový chránič si lidé často pletou, přitom chrání před úplně odlišným nebezpečím. Zatímco jistič hlídá vodiče, proudový chránič hlídá lidský život – odpojí obvod ve chvíli, kdy proud začne unikat mimo izolaci, třeba do vlhké zdi nebo přímo přes tělo člověka.</p>
              <div className="article-meta-row">
                <span>Aktualizováno: 22. června 2026</span><span>·</span><span>DomovniGuru</span>
              </div>
              <ShareButtons url="https://www.domovniguru.cz/blog/jak-funguje-proudovy-chranic" title="Jak funguje proudový chránič (RCD) a kdy je v bytě povinný" />
            </header>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#princip">Jak proudový chránič funguje</a></li>
                <li><a href="#rozdil">Rozdíl mezi jističem a chráničem</a></li>
                <li><a href="#povinnost">Kde je chránič povinný</a></li>
                <li><a href="#test">Jak chránič otestovat</a></li>
                <li><a href="#vybavuje">Co dělat, když chránič často vybavuje</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="princip">
              <h2>Jak proudový chránič funguje</h2>
              <p>Proudový chránič, odborně označovaný jako RCD (residual current device), neustále porovnává velikost proudu, který do obvodu vstupuje fázovým vodičem, s proudem, který se vrací nulovým vodičem zpět. Za normálního provozu jsou tyto hodnoty totožné.</p>
              <h3>Co se stane při úniku proudu</h3>
              <p>Pokud část proudu odejde jinou cestou než zpět přes nulový vodič – například přes poškozenou izolaci do vlhkého zdiva, nebo přes tělo člověka, který se dotkne živé části – chránič tento rozdíl zachytí během milisekund a obvod odpojí, dříve než dojde k závažnému zranění.</p>
              <h3>Citlivost 30 mA</h3>
              <p>Pro ochranu osob se používají chrániče s vybavovacím proudem 30 mA. Tato hodnota je zvolena tak, aby zareagovala dříve, než únikový proud ohrozí lidský srdeční rytmus, ale zároveň nevypínala obvod při běžných, neškodných svodových proudech některých spotřebičů.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Chránič nechrání před zkratem mezi fázovým a nulovým vodičem ani před přetížením – na to slouží jistič. Proto se v rozváděči vždy kombinuje chránič s jističi, nikdy ho nepoužívej jako náhradu jističe.</div>
            </section>

            <section id="rozdil">
              <h2>Rozdíl mezi jističem a proudovým chráničem</h2>
              <p>Oba prvky najdeš v rozváděči vedle sebe, ale chrání před jiným typem rizika.</p>
              <h3>Jistič chrání vodiče</h3>
              <p>Jistič vypne obvod, když jím protéká vyšší proud, než na jaký je vodič dimenzován – ať při zkratu, nebo při přetížení obvodu příliš velkým počtem spotřebičů. Bez jističe by se vodiče přehřívaly a hrozilo by riziko požáru.</p>
              <h3>Chránič chrání člověka</h3>
              <p>Proudový chránič nesleduje absolutní velikost proudu, ale rozdíl mezi přiváděným a vraceným proudem. I malý únik v řádu desítek miliampérů, který by jistič nikdy nezachytil, chránič okamžitě vypne, protože i tak malý proud může být pro člověka smrtelný.</p>
              <h3>Proč potřebuješ obojí</h3>
              <p>V moderní elektroinstalaci se oba prvky doplňují – jistič řeší bezpečnost vedení a požární riziko, chránič řeší bezpečnost osob při dotyku s živými částmi nebo poruše izolace. Jeden bez druhého nepokrývá všechna rizika.</p>
            </section>

            <section id="povinnost">
              <h2>Kde je proudový chránič povinný</h2>
              <p>Současná norma ČSN 33 2000-4-41 stanovuje místa, kde je instalace chrániče 30 mA povinná u nových a rekonstruovaných rozvodů.</p>
              <h3>Povinná místa</h3>
              <ul>
                <li><strong>Koupelny a místa se zvýšenou vlhkostí</strong> – zásuvkové i světelné obvody</li>
                <li><strong>Venkovní zásuvky</strong> – terasy, zahrady, balkony</li>
                <li><strong>Všechny nové zásuvkové obvody v bytě</strong> nebo domě bez ohledu na místnost</li>
                <li><strong>Obvody v dětských pokojích a podlahových vpustích</strong>, kde hrozí zvýšené riziko kontaktu</li>
              </ul>
              <h3>Starší byty</h3>
              <p>Pokud byla elektroinstalace provedena podle dříve platné normy a od té doby neproběhla rekonstrukce, chránič nemusí být doplněn zpětně ze zákona. Z bezpečnostního hlediska se ale doplnění chrániče doporučuje, zejména u koupelen a venkovních zásuvek, kde je riziko úrazu nejvyšší.</p>
              <h3>Kdo instalaci provádí</h3>
              <p>Instalaci nebo doplnění proudového chrániče v rozváděči svěř výhradně elektrikáři s odpovídající kvalifikací. Po jakémkoliv zásahu do rozváděče nebo nové elektroinstalace je v Česku ze zákona nutná revizní zpráva, kterou vystavuje revizní technik – bez ní nelze prokázat, že instalace splňuje bezpečnostní normy.</p>
            </section>

            <section id="test">
              <h2>Jak proudový chránič otestovat</h2>
              <p>Test chrániče je jednoduchý úkon, který zvládne každý, a měl by se provádět pravidelně.</p>
              <h3>Tlačítko TEST</h3>
              <p>Na čelní straně chrániče v rozváděči je tlačítko označené TEST. Po jeho stisknutí chránič simuluje únik proudu a měl by se okamžitě vybavit – tedy vypnout daný obvod. Pokud se obvod vypne, chránič je funkční a stačí ho znovu zapnout páčkou.</p>
              <h3>Jak často testovat</h3>
              <p>Doporučená frekvence je přibližně jednou za půl roku, dobrým zvykem je spojit test s jinou pravidelnou činností, například s přechodem na letní a zimní čas.</p>
              <h3>Co dělat, když se chránič nevybaví</h3>
              <p>Pokud se chránič po stisknutí tlačítka TEST nevybaví, jde o vadný přístroj, který v případě skutečné poruchy neochrání. V takovém případě obvod dál nepoužívej a kontaktuj elektrikáře, aby chránič vyměnil.</p>
            </section>

            <section id="vybavuje">
              <h2>Co dělat, když chránič často vybavuje</h2>
              <p>Opakované vybavování chrániče je vždy signál, že je v obvodu reálný únik proudu – ignorovat ho nebo jen chránič znovu nahazovat není bezpečné řešení.</p>
              <h3>Nejčastější příčiny</h3>
              <ul>
                <li><strong>Vlhkost</strong> – v zásuvce, krabici nebo přímo ve spotřebiči, typicky po umytí podlahy nebo u venkovních rozvodů po dešti</li>
                <li><strong>Vadný spotřebič</strong> – starší pračka, bojler nebo ohřívač se svodovým proudem</li>
                <li><strong>Poškozená izolace kabelu</strong> – následkem stáří, hlodavců nebo mechanického poškození</li>
                <li><strong>Příliš mnoho spotřebičů na jednom chrániči</strong> – součet malých svodových proudů jednotlivých spotřebičů překročí 30 mA</li>
              </ul>
              <h3>Jak problém vystopovat</h3>
              <p>Odpojuj spotřebiče na daném obvodu jeden po druhém a sleduj, zda chránič znovu vybaví. Pokud problém zmizí po odpojení konkrétního spotřebiče, máš pravděpodobně viníka identifikovaného.</p>
              <h3>Kdy zavolat elektrikáře</h3>
              <p>Pokud chránič vybavuje i bez zapojených spotřebičů, nebo pokud se problém opakuje i po odstranění podezřelého spotřebiče, nech si obvod proměřit elektrikářem s revizí. Sám do rozváděče ani do pevných rozvodů nezasahuj – jakýkoliv zásah do rozvodů bez příslušné revize je v Česku v rozporu s předpisy a hrozí reálné riziko úrazu.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Před jakoukoliv manipulací v rozváděči vždy nejprve vypni hlavní jistič a ověř bezproudí zkušební zkoušečkou napětí – nikdy se nespoléhej jen na to, že je páčka jističe v poloze vypnuto.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jaký je rozdíl mezi jističem a proudovým chráničem?", a: "Jistič chrání elektroinstalaci a vodiče před přetížením a zkratem tím, že vypne obvod při nadměrném proudu. Proudový chránič (RCD) chrání člověka před úrazem elektrickým proudem tím, že porovnává proud na vstupu a výstupu obvodu a při úniku, například přes lidské tělo do země, obvod během zlomku sekundy odpojí." },
                  { q: "Kde je proudový chránič podle normy povinný?", a: "Aktuální norma ČSN 33 2000-4-41 vyžaduje proudový chránič s vybavovacím proudem 30 mA pro zásuvkové obvody v koupelnách, na venkovních zásuvkách, v nových bytových rozvodech obecně a u obvodů, kde hrozí zvýšené riziko úrazu, například u zásuvek v dětských pokojích nebo v podlahových vpustích." },
                  { q: "Jak otestuji, že proudový chránič funguje?", a: "Na chrániči je tlačítko TEST – po jeho stisknutí by se chránič měl okamžitě vybavit a vypnout daný obvod. Pokud se nevybaví, chránič je vadný a je třeba ho nechat vyměnit elektrikářem. Test se doporučuje provádět přibližně jednou za půl roku." },
                  { q: "Proč proudový chránič často vybavuje?", a: "Nejčastější příčinou je vlhkost v zásuvce nebo spotřebiči, vadný spotřebič se svodovým proudem, poškozená izolace kabelu nebo příliš mnoho spotřebičů se svodovým proudem na jednom chrániči. Pokud vybavuje opakovaně, je potřeba problém nechat diagnostikovat elektrikářem, ne chránič jen resetovat." },
                  { q: "Musí mít proudový chránič i starší byt?", a: "Starší instalace bez proudového chrániče nemusí být v rozporu s normou platnou v době výstavby, ale s ohledem na bezpečnost se doporučuje chránič doinstalovat při jakékoliv rekonstrukci elektroinstalace, a vždy povinně u koupelen a venkovních zásuvek." },
                  { q: "Kolik proudových chráničů potřebuje běžný byt?", a: "Záleží na rozsahu rozvodů, obvykle se používá jeden až dva chrániče na byt rozdělené podle skupin obvodů, například jeden pro koupelnu a kuchyň a druhý pro zásuvky v obytných místnostech, aby výpadek jednoho chrániče neodpojil celý byt." },
                ].map(({ q, a }) => (
                  <details key={q} className="faq-item">
                    <summary className="faq-summary">{q}<span className="faq-icon">▾</span></summary>
                    <div className="faq-body">{a}</div>
                  </details>
                ))}
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/jak-funguje-proudovy-chranic" title="Jak funguje proudový chránič (RCD) a kdy je v bytě povinný" />

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
                <li><a href="#princip">Jak chránič funguje</a></li>
                <li><a href="#rozdil">Jistič vs. chránič</a></li>
                <li><a href="#povinnost">Kde je povinný</a></li>
                <li><a href="#test">Jak ho otestovat</a></li>
                <li><a href="#vybavuje">Často vybavuje</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/elektrika" className="sidebar-cat-link">⚡ Elektrika & osvětlení<span>Více článků →</span></Link>
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
