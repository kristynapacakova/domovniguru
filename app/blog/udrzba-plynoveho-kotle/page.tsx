import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak udržovat plynový kotel během celého roku",
  description: "Tlak v expanzní nádobě, odvzdušnění, povinná roční revize i příznaky problémů – kompletní průvodce péčí o plynový kotel po celý rok.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/udrzba-plynoveho-kotle" },
  openGraph: {
    title: "Jak udržovat plynový kotel během celého roku",
    description: "Tlak v expanzní nádobě, odvzdušnění, povinná roční revize i příznaky problémů – kompletní průvodce péčí o plynový kotel po celý rok.",
    url: "https://www.domovniguru.cz/blog/udrzba-plynoveho-kotle",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "article",
    publishedTime: "2026-06-22T08:00:00Z",
    modifiedTime: "2026-06-22T08:00:00Z",
    authors: ["DomovniGuru"],
    images: [{ url: "/api/og?title=Jak%20udr%C5%BEovat%20plynov%C3%BD%20kotel%20b%C4%9Bhem%20cel%C3%A9ho%20roku&cat=blog", width: 1200, height: 630, alt: "Jak udržovat plynový kotel během celého roku" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jak udržovat plynový kotel během celého roku",
    description: "Co dělat sám a co je povinná roční revize – kompletní průvodce péčí o plynový kotel.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.domovniguru.cz/blog/udrzba-plynoveho-kotle#article",
      "headline": "Jak udržovat plynový kotel během celého roku",
      "description": "Tlak v expanzní nádobě, odvzdušnění, povinná roční revize i příznaky problémů – kompletní průvodce péčí o plynový kotel po celý rok.",
      "datePublished": "2026-06-22T08:00:00Z",
      "dateModified": "2026-06-22T08:00:00Z",
      "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.domovniguru.cz/blog/udrzba-plynoveho-kotle" },
      "inLanguage": "cs",
      "keywords": ["údržba plynového kotle", "revize plynového kotle", "tlak v expanzní nádobě", "odvzdušnění kotle", "životnost plynového kotle"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.domovniguru.cz/blog/udrzba-plynoveho-kotle#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" },
        { "@type": "ListItem", "position": 3, "name": "Sezónní údržba", "item": "https://www.domovniguru.cz/blog/kategorie/sezonni-udrzba" },
        { "@type": "ListItem", "position": 4, "name": "Jak udržovat plynový kotel během celého roku", "item": "https://www.domovniguru.cz/blog/udrzba-plynoveho-kotle" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.domovniguru.cz/blog/udrzba-plynoveho-kotle#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Jaký tlak by měl mít plynový kotel v topném systému?", "acceptedAnswer": { "@type": "Answer", "text": "Většina domácích kotlů by se měla pohybovat v rozsahu přibližně 1 až 2 bary, přesnou hodnotu ale vždy uvádí výrobce v manuálu konkrétního modelu. Pokud tlak klesne pod minimum uvedené na manometru, je potřeba systém dopustit." } },
        { "@type": "Question", "name": "Jak často je potřeba dělat revizi plynového kotle?", "acceptedAnswer": { "@type": "Answer", "text": "Roční servisní kontrola odborným technikem je standardním požadavkem výrobců pro udržení záruky, revize plynového zařízení podle platné vyhlášky se pak provádí v intervalu stanoveném revizním technikem, obvykle jednou za jeden až tři roky podle typu zařízení." } },
        { "@type": "Question", "name": "Můžu si odvzdušnění topného systému udělat sám?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, odvzdušnění radiátorů přes odvzdušňovací ventil je běžný úkon, který zvládne i laik. Stačí klíč na radiátorový odvzdušňovací ventil, hadérek na zachycení vody a trpělivost, dokud nezačne vytékat čistá voda bez vzduchu." } },
        { "@type": "Question", "name": "Co znamená kolísavý plamen v plynovém kotli?", "acceptedAnswer": { "@type": "Answer", "text": "Kolísavý nebo žlutý plamen místo stálého modrého obvykle signalizuje problém se spalováním, často kvůli nedostatečnému přívodu vzduchu nebo znečištěnému hořáku. Jde o varovný signál, který by měl prověřit odborný technik, protože souvisí i s rizikem vzniku oxidu uhelnatého." } },
        { "@type": "Question", "name": "Jak dlouho vydrží plynový kotel?", "acceptedAnswer": { "@type": "Answer", "text": "Při pravidelné údržbě a roční servisní kontrole vydrží běžný plynový kotel přibližně 15 až 20 let. Bez údržby se životnost výrazně zkracuje a roste riziko poruch i vyšší spotřeby plynu." } },
        { "@type": "Question", "name": "Kdy už se vyplatí kotel vyměnit, ne opravovat?", "acceptedAnswer": { "@type": "Answer", "text": "Pokud je kotel starší než 15 let, opravy se opakují víc než jednou za rok nebo náklady na opravu přesahují polovinu ceny nového kotle, je obvykle výhodnější investovat do výměny za nový, účinnější model." } },
      ],
    },
    {
      "@type": "HowTo",
      "@id": "https://www.domovniguru.cz/blog/udrzba-plynoveho-kotle#howto",
      "name": "Jak udržovat plynový kotel během celého roku",
      "description": "Tlak v expanzní nádobě, odvzdušnění, povinná roční revize i příznaky problémů – kompletní průvodce péčí o plynový kotel po celý rok.",
      "step": [
        { "@type": "HowToStep", "name": "Kontrola tlaku v systému", "text": "Pravidelně sleduj manometr a udržuj tlak v topném systému v rozsahu doporučeném výrobcem kotle." },
        { "@type": "HowToStep", "name": "Odvzdušnění radiátorů", "text": "Pokud radiátory netopí rovnoměrně nebo bublají, odvzdušni je přes odvzdušňovací ventil." },
        { "@type": "HowToStep", "name": "Vizuální kontrola a okolí kotle", "text": "Pravidelně kontroluj okolí kotle, zda nikde neuniká voda, a udržuj prostor kolem kotle čistý a volný." },
        { "@type": "HowToStep", "name": "Sledování příznaků problému", "text": "Věnuj pozornost kolísavému plamenu, neobvyklým zvukům nebo zápachu, a při jejich výskytu kontaktuj servis." },
        { "@type": "HowToStep", "name": "Roční odborná revize", "text": "Jednou ročně objednej servisní techniky na povinnou revizi a kontrolu plynového kotle." },
        { "@type": "HowToStep", "name": "Posouzení životnosti", "text": "U starších kotlů pravidelně vyhodnocuj, zda se další opravy ještě vyplatí, nebo je čas na výměnu." },
      ],
    },
  ],
};

const RELATED = [
  { title: "Zkontrolovat kotel před zimou", href: "/blog/zkontrolovat-kotel-pred-zimou", read: "5 min" },
  { title: "Jak ušetřit na vytápění", href: "/blog/usetrit-na-vytapeni", read: "6 min" },
  { title: "Jak připravit dům na zimu", href: "/blog/priprava-domu-na-zimu", read: "6 min" },
  { title: "Kontrola hasicích přístrojů a detektorů kouře", href: "/blog/kontrola-hasicich-pristroju-a-detektoru-koure", read: "5 min" },
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
              <span>Jak udržovat plynový kotel během celého roku</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">❄️ Sezónní údržba</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak udržovat plynový kotel během celého roku</h1>
              <p className="article-lead">Plynový kotel patří mezi spotřebiče, kde se vyplácí kombinace vlastní pravidelné kontroly a odborné péče. Drobné úkony zvládneš sám během pár minut, ale některé kroky ze zákona i z bezpečnostních důvodů patří výhradně do rukou odborníka.</p>
              <div className="article-meta-row">
                <span>Aktualizováno: 22. června 2026</span><span>·</span><span>DomovniGuru</span>
              </div>
              <ShareButtons url="https://www.domovniguru.cz/blog/udrzba-plynoveho-kotle" title="Jak udržovat plynový kotel během celého roku" />
            </header>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#sam">Co zvládneš sám</a></li>
                <li><a href="#tlak">Kontrola tlaku v expanzní nádobě</a></li>
                <li><a href="#odvzduseni">Odvzdušnění topného systému</a></li>
                <li><a href="#revize">Povinná roční revize</a></li>
                <li><a href="#priznaky">Příznaky problému</a></li>
                <li><a href="#zivotnost">Jak prodloužit životnost kotle</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="sam">
              <h2>Co zvládneš u plynového kotle sám</h2>
              <p>Péče o plynový kotel se dělí na dvě skupiny úkonů – ty, které jako majitel domácnosti můžeš a měl bys dělat sám, a ty, které ze zákona i z bezpečnostních důvodů patří výhradně odborníkovi.</p>
              <h3>Pravidelné domácí úkony</h3>
              <ul>
                <li><strong>Kontrola tlaku</strong> na manometru kotle alespoň jednou za měsíc</li>
                <li><strong>Vizuální kontrola</strong> okolí kotle a přívodních hadic, jestli nikde nekape voda</li>
                <li><strong>Odvzdušnění radiátorů</strong>, pokud netopí rovnoměrně nebo v nich slyšíš bublání</li>
                <li><strong>Udržování čistoty</strong> a volného prostoru kolem kotle, bez uskladněných věcí, které by omezovaly proudění vzduchu</li>
              </ul>
              <h3>Proč mají tyto úkony smysl</h3>
              <p>Pravidelná domácí kontrola odhalí drobné problémy dřív, než se z nich stane vážná porucha. Pokles tlaku nebo bublání v radiátoru jsou typické signály, které když podchytíš včas, ušetříš si nákladnější servisní zásah později.</p>
            </section>

            <section id="tlak">
              <h2>Kontrola tlaku v expanzní nádobě a topném systému</h2>
              <p>Tlak v topném systému je jedním z nejdůležitějších parametrů, který bys měl pravidelně sledovat na manometru kotle.</p>
              <h3>Jaký tlak je správný</h3>
              <p>U většiny domácích kotlů se doporučený provozní tlak pohybuje v rozsahu přibližně 1 až 2 bary, přesnou hodnotu však vždy najdeš v manuálu ke konkrétnímu modelu. Pokud tlak klesne pod minimální hranici, kotel obvykle zobrazí varování nebo se odstaví.</p>
              <h3>Jak tlak doplnit</h3>
              <p>Doplnění vody do systému se provádí přes plnicí ventil, který bývá umístěn přímo na kotli nebo na přívodním potrubí. Postupně otevírej ventil, dokud manometr neukáže požadovanou hodnotu, a poté ventil znovu pečlivě uzavři.</p>
              <h3>Co dělá expanzní nádoba</h3>
              <p>Expanzní nádoba vyrovnává změny objemu vody při zahřívání a chladnutí topného systému. Pokud je tlak v expanzní nádobě nízký, systém ztrácí schopnost tyto změny tlumit a tlak v kotli kolísá výrazněji, než by měl – kontrolu předtlaku nádoby je vhodné přenechat servisnímu technikovi při roční revizi.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud musíš tlak doplňovat příliš často, často víc než jednou za měsíc, jde o signál možného úniku vody ze systému, který by měl prověřit odborník.</div>
            </section>

            <section id="odvzduseni">
              <h2>Odvzdušnění topného systému</h2>
              <p>Vzduch, který se dostane do topného systému, brání správnému proudění vody a snižuje výkon radiátorů.</p>
              <h3>Jak poznat, že je potřeba odvzdušnit</h3>
              <p>Typickým příznakem je radiátor, který je teplý jen v dolní části nebo nehřeje rovnoměrně, případně bublání slyšitelné při proudění vody v tělese radiátoru.</p>
              <h3>Postup odvzdušnění</h3>
              <p>Pomocí odvzdušňovacího klíče pomalu pootevři ventil na horním okraji radiátoru a nech unikat vzduch, dokud nezačne vytékat souvislý proud vody bez bublin. Ventil pak rychle, ale pečlivě uzavři. Pod ventil si přidrž nádobku nebo hadřík, voda totiž z ventilu při odvzdušňování často vystříkne.</p>
              <h3>Kontrola tlaku po odvzdušnění</h3>
              <p>Po odvzdušnění více radiátorů obvykle tlak v systému klesne, protože jsi ze systému vypustil vzduch i část vody. Po odvzdušnění proto vždy zkontroluj manometr a tlak případně doplň na doporučenou hodnotu.</p>
            </section>

            <section id="revize">
              <h2>Povinná roční revize a co dělá odborník</h2>
              <p>Některé kontroly plynového kotle nejde a ani by se nemělo dělat samostatně bez odborného vzdělání a oprávnění.</p>
              <h3>Co revize a servisní kontrola zahrnuje</h3>
              <p>Odborný technik při roční prohlídce kontroluje spalování a nastavení hořáku, těsnost spojů a přívodu plynu, funkci pojistných a bezpečnostních prvků, stav odtahu spalin a komína a celkový technický stav kotle. Měří také koncentraci spalin, což doma běžně dostupnými prostředky neověříš.</p>
              <h3>Proč je tato kontrola povinná</h3>
              <p>Pravidelná revize plynového zařízení vychází z platných právních předpisů a je podmínkou bezpečného provozu – neodhalené netěsnosti nebo špatné spalování plynu mohou vést až k úniku oxidu uhelnatého, který je bez detektoru takřka nezjistitelný. Roční servisní kontrola bývá navíc podmínkou pro zachování záruky výrobce.</p>
              <h3>Jak často revizi objednávat</h3>
              <p>Servisní kontrolu kotle objednávej jednou ročně, ideálně před začátkem otopné sezóny na podzim. Revize plynového zařízení podle vyhlášky probíhá v intervalu, který stanoví revizní technik podle typu a stáří zařízení, obvykle jednou za jeden až tři roky.</p>
            </section>

            <section id="priznaky">
              <h2>Příznaky problému, které neignoruj</h2>
              <p>Kotel obvykle dává najevo, že něco není v pořádku, ještě dřív, než dojde k závažné poruše.</p>
              <h3>Kolísavý nebo žlutý plamen</h3>
              <p>Stálý plamen v plynovém kotli by měl být modrý a klidný. Kolísavý, žlutý nebo oranžový plamen signalizuje problém se spalováním, často způsobený nedostatkem vzduchu nebo znečištěným hořákem, a souvisí i s rizikem vzniku oxidu uhelnatého.</p>
              <h3>Neobvyklé zvuky</h3>
              <p>Klepání, bublání, pískání nebo bzučení, které dříve kotel nevydával, často ukazují na usazeniny ve výměníku, vzduch v systému nebo opotřebovanou součástku. Čím dřív zvuk prověříš, tím menší je riziko následné poruchy.</p>
              <h3>Únik vody nebo zápach plynu</h3>
              <p>Jakákoliv kapající voda v okolí kotle nebo cítěný zápach plynu jsou důvodem k okamžitému zásahu – při podezření na únik plynu kotel a hlavní uzávěr plynu vypni, vyvětrej prostor a kontaktuj odbornou pohotovostní službu.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Do prostoru s plynovým kotlem se vyplatí instalovat detektor oxidu uhelnatého – jde o bezbarvý a nezapáchající plyn, který bez detektoru člověk nepozná.</div>
            </section>

            <section id="zivotnost">
              <h2>Jak prodloužit životnost kotle a kdy řešit výměnu</h2>
              <p>Životnost plynového kotle do velké míry ovlivňuje právě to, jak se o něj staráš.</p>
              <h3>Co životnost prodlužuje</h3>
              <p>Pravidelná roční servisní kontrola, udržování správného tlaku v systému, odvzdušňování radiátorů a čisté okolí kotle bez prachu jsou hlavní faktory, které dokážou životnost kotle prodloužit na horní hranici udávaného rozpětí, tedy k 20 letům.</p>
              <h3>Kdy uvažovat o výměně</h3>
              <p>Pokud je kotel starší 15 let, opravy se opakují víc než jednou za rok nebo náklady na jednotlivou opravu přesahují polovinu ceny nového kotle, vyplatí se obvykle investovat do výměny. Nové kondenzační kotle navíc dosahují vyšší účinnosti, což se postupně projeví i na nižších nákladech za plyn.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jaký tlak by měl mít plynový kotel v topném systému?", a: "Většina domácích kotlů by se měla pohybovat v rozsahu přibližně 1 až 2 bary, přesnou hodnotu ale vždy uvádí výrobce v manuálu konkrétního modelu. Pokud tlak klesne pod minimum uvedené na manometru, je potřeba systém dopustit." },
                  { q: "Jak často je potřeba dělat revizi plynového kotle?", a: "Roční servisní kontrola odborným technikem je standardním požadavkem výrobců pro udržení záruky, revize plynového zařízení podle platné vyhlášky se pak provádí v intervalu stanoveném revizním technikem, obvykle jednou za jeden až tři roky podle typu zařízení." },
                  { q: "Můžu si odvzdušnění topného systému udělat sám?", a: "Ano, odvzdušnění radiátorů přes odvzdušňovací ventil je běžný úkon, který zvládne i laik. Stačí klíč na radiátorový odvzdušňovací ventil, hadérek na zachycení vody a trpělivost, dokud nezačne vytékat čistá voda bez vzduchu." },
                  { q: "Co znamená kolísavý plamen v plynovém kotli?", a: "Kolísavý nebo žlutý plamen místo stálého modrého obvykle signalizuje problém se spalováním, často kvůli nedostatečnému přívodu vzduchu nebo znečištěnému hořáku. Jde o varovný signál, který by měl prověřit odborný technik, protože souvisí i s rizikem vzniku oxidu uhelnatého." },
                  { q: "Jak dlouho vydrží plynový kotel?", a: "Při pravidelné údržbě a roční servisní kontrole vydrží běžný plynový kotel přibližně 15 až 20 let. Bez údržby se životnost výrazně zkracuje a roste riziko poruch i vyšší spotřeby plynu." },
                  { q: "Kdy už se vyplatí kotel vyměnit, ne opravovat?", a: "Pokud je kotel starší než 15 let, opravy se opakují víc než jednou za rok nebo náklady na opravu přesahují polovinu ceny nového kotle, je obvykle výhodnější investovat do výměny za nový, účinnější model." },
                ].map(({ q, a }) => (
                  <details key={q} className="faq-item">
                    <summary className="faq-summary">{q}<span className="faq-icon">▾</span></summary>
                    <div className="faq-body">{a}</div>
                  </details>
                ))}
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/udrzba-plynoveho-kotle" title="Jak udržovat plynový kotel během celého roku" />

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
                <li><a href="#sam">Co zvládneš sám</a></li>
                <li><a href="#tlak">Tlak v expanzní nádobě</a></li>
                <li><a href="#odvzduseni">Odvzdušnění systému</a></li>
                <li><a href="#revize">Povinná roční revize</a></li>
                <li><a href="#priznaky">Příznaky problému</a></li>
                <li><a href="#zivotnost">Životnost kotle</a></li>
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
