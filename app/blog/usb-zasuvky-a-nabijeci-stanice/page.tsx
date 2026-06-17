import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "USB zásuvky a nabíjecí stanice doma – jak na to 2026",
  description: "Konec hromady adaptérů v zásuvce. Jak vybrat a nainstalovat USB zásuvku, kam ji umístit a kdy zvládneš výměnu sám a kdy zavolat elektrikáře.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/usb-zasuvky-a-nabijeci-stanice" },
  openGraph: { title: "USB zásuvky a nabíjecí stanice doma 2026", description: "USB-A vs USB-C, výkon nabíjení, instalace a kde USB zásuvky umístit – praktický návod.", url: "https://www.domovniguru.cz/blog/usb-zasuvky-a-nabijeci-stanice", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-17T08:00:00Z", modifiedTime: "2026-06-17T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=USB%20z%C3%A1suvky%20a%20nab%C3%ADjec%C3%AD%20stanice%20doma%20%E2%80%93%20jak%20na%20to%202026&cat=blog", width: 1200, height: 630, alt: "USB zásuvky a nabíjecí stanice doma – jak na to 2026" }] },
  twitter: { card: "summary_large_image", title: "USB zásuvky a nabíjecí stanice doma 2026", description: "USB-A vs USB-C, výkon nabíjení a kam zásuvky umístit." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.domovniguru.cz/blog/usb-zasuvky-a-nabijeci-stanice#article",
      "headline": "USB zásuvky a nabíjecí stanice doma – jak na to",
      "datePublished": "2026-06-17T08:00:00Z",
      "dateModified": "2026-06-17T08:00:00Z",
      "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "inLanguage": "cs",
      "keywords": ["USB zásuvka", "nabíjecí stanice doma", "USB-C zásuvka", "instalace USB zásuvky", "PD nabíjení", "víceportová nabíječka", "zásuvka s USB portem"]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.domovniguru.cz/blog/usb-zasuvky-a-nabijeci-stanice#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Zvládnu výměnu zásuvky za USB kombinovanou sám?", "acceptedAnswer": { "@type": "Answer", "text": "Pokud máš zkušenost s elektroinstalací, jisticí skříň znáš a víš jak bezpečně vypnout jistič, technicky jde o stejný postup jako výměna klasické zásuvky. Pokud si nejsi jistý, nech to na elektrikáři — práce trvá 15-20 minut a cena 300-600 Kč je zanedbatelná proti riziku špatného zapojení vodičů." } },
        { "@type": "Question", "name": "Jaký je rozdíl mezi USB-A a USB-C portem v zásuvce?", "acceptedAnswer": { "@type": "Answer", "text": "USB-A je starší obdélníkový konektor s nižším výkonem (obvykle do 12 W na port), používá se hlavně pro starší zařízení. USB-C je novější, podporuje rychlé PD nabíjení (18-30 W i více) a zvládne nabít i tablety nebo menší notebooky. Pro nové instalace doporučujeme zásuvku s alespoň jedním USB-C portem s podporou PD." } },
        { "@type": "Question", "name": "Kolik stojí USB zásuvka a její instalace?", "acceptedAnswer": { "@type": "Answer", "text": "Samotná USB kombinovaná zásuvka (230V + USB porty) vyjde na 400-900 Kč podle značky a výkonu. Instalace elektrikářem stojí typicky 300-600 Kč za zásuvku, pokud jde jen o výměnu v existující krabici bez úprav rozvodů." } },
        { "@type": "Question", "name": "Nabije USB zásuvka i notebook?", "acceptedAnswer": { "@type": "Answer", "text": "Záleží na výkonu portu. Běžné USB zásuvky s PD nabíjením zvládnou 18-30 W, což stačí na telefony a tablety, ale na výkonnější notebooky (45-65 W a více) to obvykle nestačí. Pro nabíjení notebooku přes USB-C je potřeba zásuvka s vyšším výkonem PD nebo klasická nabíječka v běžné 230V zásuvce." } },
        { "@type": "Question", "name": "Je bezpečné koupit levnou USB zásuvku z neznámého obchodu?", "acceptedAnswer": { "@type": "Answer", "text": "Nedoporučujeme. Levné USB zásuvky bez certifikace CE z nejistého zdroje mají riziko přehřátí nebo nestabilního výstupního napětí, což může poškodit nabíjená zařízení nebo představovat požární riziko. Vždy kupuj značkové produkty s certifikací CE od ověřeného prodejce." } },
        { "@type": "Question", "name": "Co je centrální nabíjecí stanice a vyplatí se?", "acceptedAnswer": { "@type": "Answer", "text": "Centrální nabíjecí stanice je víceportová nabíječka s několika USB-A/C výstupy, kterou zapojíš do jedné běžné zásuvky. Vyplatí se v místech jako předsíň nebo kuchyňská linka, kde potřebuješ nabíjet více zařízení najednou bez nutnosti měnit zásuvky ve zdi." } },
      ],
  }, {
    "@type": "HowTo",
    "@id": "https://www.domovniguru.cz/blog/usb-zasuvky-a-nabijeci-stanice#howto",
    "name": "USB zásuvky a nabíjecí stanice doma – jak na to",
    "description": "Konec hromady adaptérů v zásuvce. Jak vybrat a nainstalovat USB zásuvku, kam ji umístit a kdy zvládneš výměnu sám a kdy zavolat elektrikáře.",
    "step": [
      { "@type": "HowToStep", "name": "Proč zvážit vestavěné USB zásuvky", "text": "Adaptéry a nabíječky postupně zaplní každou volnou zásuvku v domácnosti — vestavěná USB zásuvka tento problém řeší přímo u zdroje." },
      { "@type": "HowToStep", "name": "USB-A vs USB-C a výkon nabíjení", "text": "Ne všechny USB porty jsou stejné — rozdíl je v konektoru i v tom, jak rychle dokážou zařízení nabít." },
      { "@type": "HowToStep", "name": "Instalace – kutil, nebo elektrikář", "text": "Výměna klasické zásuvky za USB kombinovanou znamená práci s vodiči pod napětím — postup i rozhodnutí kdy na to nesahat." },
      { "@type": "HowToStep", "name": "Kam USB zásuvky umístit", "text": "Umístění rozhoduje o tom, jak moc novou zásuvku reálně využiješ." },
      { "@type": "HowToStep", "name": "Centrální nabíjecí stanice jako alternativa", "text": "Pokud nechceš zasahovat do elektroinstalace, víceportová nabíječka řeší stejný problém bez vrtání do zdi." },
      { "@type": "HowToStep", "name": "Bezpečnost a ceny", "text": "Na co si dát pozor při výběru a kolik celá úprava reálně stojí." }
    ]
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://www.domovniguru.cz/blog/usb-zasuvky-a-nabijeci-stanice#breadcrumb",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" },
      { "@type": "ListItem", "position": 3, "name": "Elektrika & osvětlení", "item": "https://www.domovniguru.cz/blog/kategorie/elektrika" },
      { "@type": "ListItem", "position": 4, "name": "USB zásuvky a nabíjecí stanice doma – jak na to", "item": "https://www.domovniguru.cz/blog/usb-zasuvky-a-nabijeci-stanice" }
    ]
  }
  ],
};

const RELATED = [
  { title: "Jak vyměnit zásuvku sám", href: "/blog/jak-vymenit-zasuvku", read: "5 min" },
  { title: "Jak přidat novou zásuvku", href: "/blog/pridat-zasuvku", read: "6 min" },
  { title: "Chytrá domácnost – jak začít", href: "/blog/chytra-domacnost-zaciname", read: "7 min" },
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
              <span>USB zásuvky a nabíjecí stanice</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">⚡ Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">USB zásuvky a nabíjecí stanice doma – jak na to</h1>
              <p className="article-lead">Hromada nabíječek v jedné zásuvce a kabely všude po pokoji? Vestavěná USB zásuvka nebo centrální nabíjecí stanice tento nepořádek vyřeší. Tady je přehled typů, instalace a kam je umístit, aby je rodina skutečně používala.</p>
              <div className="article-meta-row"><span>Aktualizováno: 17. června 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/usb-zasuvky-a-nabijeci-stanice" title="USB zásuvky a nabíjecí stanice doma – jak na to" />
            </header>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#proc">Proč zvážit vestavěné USB zásuvky</a></li>
                <li><a href="#typy">USB-A vs USB-C a výkon nabíjení</a></li>
                <li><a href="#instalace">Instalace – kutil, nebo elektrikář</a></li>
                <li><a href="#umisteni">Kam USB zásuvky umístit</a></li>
                <li><a href="#stanice">Centrální nabíjecí stanice jako alternativa</a></li>
                <li><a href="#bezpecnost">Bezpečnost a ceny</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="proc">
              <h2>Proč zvážit vestavěné USB zásuvky</h2>
              <p>Telefon, tablet, chytré hodinky, sluchátka — průměrná domácnost dnes nabíjí čtyři až šest zařízení denně. Výsledkem je zásuvka obsazená několika adaptéry, kabely přes celou místnost a vizuální nepořádek na noční stolce nebo kuchyňské lince.</p>
              <ul>
                <li><strong>Méně adaptérů v zásuvce:</strong> Vestavěná USB zásuvka má port přímo v ní — adaptér už nepotřebuješ, jen kabel.</li>
                <li><strong>Lepší vzhled:</strong> Žádné velké černé krabičky vyčnívající ze zdi, jen čistý design zásuvky s diskrétními porty.</li>
                <li><strong>Méně opotřebení zásuvek:</strong> Časté vytahování a zasouvání adaptérů zásuvku mechanicky opotřebovává — USB port je naopak navržený na denní používání kabelu.</li>
                <li><strong>Praktičnost pro hosty:</strong> V hostinském pokoji nebo u jídelního stolu USB zásuvka ušetří hledání volné zásuvky pro cizí adaptér.</li>
              </ul>
            </section>

            <section id="typy">
              <h2>USB-A vs USB-C a výkon nabíjení</h2>
              <p>Ne všechny USB zásuvky jsou stejné. Liší se konektorem i tím, jak rychle dokážou zařízení nabít.</p>
              <h3>USB-A</h3>
              <p>Starší, obdélníkový konektor. Většina zásuvek s USB-A portem dává výkon kolem 5-12 W na port — to stačí na pomalejší nabíjení telefonu přes noc, ale na rychlé nabíjení nebo tablet to bývá nedostatečné.</p>
              <h3>USB-C s PD nabíjením</h3>
              <p>USB-C je dnes standard u nových telefonů, tabletů i sluchátek. Zásuvky s podporou PD (Power Delivery) zvládají 18-30 W na port, což odpovídá rychlému nabíjení většiny telefonů a tabletů za rozumný čas.</p>
              <h3>Notebooky a vyšší výkon</h3>
              <p>Pro nabíjení notebooku přes USB-C je potřeba výkon 45-65 W a víc — běžné USB zásuvky do zdi na to nejsou dimenzované. Pokud chceš nabíjet i notebook bez klasické nabíječky, hledej speciální vysoko-výkonové USB-C zásuvky nebo zůstaň u běžné 230V zásuvky s originální nabíječkou.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pro novou instalaci vybírej zásuvku s kombinací jednoho USB-C (PD) a jednoho USB-A portu — pokryješ tím nové i starší zařízení v domácnosti.</div>
            </section>

            <section id="instalace">
              <h2>Instalace – kutil, nebo elektrikář</h2>
              <p>USB kombinovaná zásuvka nahrazuje klasickou zásuvku 230V — obsahuje běžné zásuvkové otvory plus jeden nebo dva USB porty napájené ze stejného obvodu.</p>
              <ul>
                <li><strong>Co instalace obnáší:</strong> Vypnutí příslušného jističe v rozvaděči, demontáž staré zásuvky, přepojení vodičů (fáze, nulák, případně zemnící vodič) na novou USB zásuvku a její upevnění do krabice ve zdi.</li>
                <li><strong>Kdy to zvládneš sám:</strong> Pokud máš zkušenost s elektroinstalací, víš jak bezpečně vypnout jistič a ověřit, že v zásuvce skutečně neteče proud, jde o stejně náročnou práci jako výměna obyčejné zásuvky.</li>
                <li><strong>Kdy zavolat elektrikáře:</strong> Pokud si nejsi jistý zapojením vodičů, nemáš zkušenost s prací pod napětím, nebo jde o starší instalaci bez jasného barevného značení vodičů — nech to na odborníkovi. Špatné zapojení může způsobit zkrat nebo poškodit připojená zařízení.</li>
              </ul>
              <p>Cena instalace elektrikářem (300-600 Kč za zásuvku) je v poměru k riziku špatného zapojení zanedbatelná — zejména v bytě, kde závada ovlivní i sousední obvody.</p>
            </section>

            <section id="umisteni">
              <h2>Kam USB zásuvky umístit</h2>
              <p>Umístění rozhoduje o tom, jak moc novou zásuvku reálně využiješ.</p>
              <ul>
                <li><strong>U postele (noční stolek):</strong> Nejčastější a nejužitečnější místo — nabíjení telefonu přes noc bez kabelu táhnoucího se přes celý pokoj k zásuvce u zdi.</li>
                <li><strong>U kuchyňské linky:</strong> Praktické pro nabíjení tabletu při vaření podle receptu nebo telefonu při běžném používání v kuchyni.</li>
                <li><strong>V předsíni:</strong> Ideální místo pro malou nabíjecí stanici — telefon i klíče (s lokalizačním čipem) na jednom místě, hned po vstupu domů.</li>
                <li><strong>U pracovního stolu:</strong> Pro domácí kancelář — nabíjení telefonu a sluchátek bez zabírání zásuvky potřebné pro monitor nebo počítač.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Než zásuvku objednáš, ověř si výšku umístění — u nočního stolku se hodí o trochu výš než standardní zásuvka, aby kabel nemusel klesat až k podlaze.</div>
            </section>

            <section id="stanice">
              <h2>Centrální nabíjecí stanice jako alternativa</h2>
              <p>Pokud nechceš zasahovat do elektroinstalace nebo bydlíš v nájmu, kde úpravy zásuvek nejsou možné, řešením je centrální nabíjecí stanice — víceportová nabíječka s několika USB-A/C výstupy zapojená do jedné běžné zásuvky.</p>
              <ul>
                <li><strong>Výhoda:</strong> Místo čtyř až pěti samostatných adaptérů v jedné zásuvkové liště máš jedno zařízení s několika porty — méně kabelového chaosu a žádný zásah do zdi.</li>
                <li><strong>Kde se hodí nejvíc:</strong> Předsíň, kuchyňská linka nebo společný prostor, kde se schází více zařízení k nabíjení najednou.</li>
                <li><strong>Na co dát pozor:</strong> Celkový výkon stanice musí pokrýt součet všech připojených zařízení — u levných stanic se výkon mezi porty dělí, takže při plném obsazení nabíjí každé zařízení pomaleji.</li>
              </ul>
            </section>

            <section id="bezpecnost">
              <h2>Bezpečnost a ceny</h2>
              <p>USB zásuvka i nabíjecí stanice jsou v provozu nepřetržitě připojené do sítě — kvalita produktu se proto vyplatí.</p>
              <ul>
                <li><strong>Certifikace CE:</strong> Kupuj jen produkty s certifikací CE od značkového výrobce a ověřeného prodejce. Levné USB zásuvky bez certifikace z nejistého zdroje mají riziko přehřátí, nestabilního výstupu nebo poškození nabíjeného zařízení.</li>
                <li><strong>Orientační cena USB zásuvky:</strong> 400-900 Kč podle značky, výkonu a počtu portů (USB-A samotné jsou levnější, USB-C s PD a vyšším výkonem dražší).</li>
                <li><strong>Orientační cena instalace:</strong> 300-600 Kč za zásuvku při výměně v existující krabici bez úprav rozvodů. Cena se zvyšuje, pokud je potřeba upravit i samotné vedení.</li>
              </ul>
              <div className="article-tip"><strong>⚠️ Pozor:</strong> Nekupuj USB zásuvky ani nabíjecí stanice z neznámých e-shopů bez recenzí nebo bez uvedeného výrobce — riziko přehřátí nebo poškození zařízení převažuje nad nízkou cenou.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Zvládnu výměnu zásuvky za USB kombinovanou sám?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Pokud máš zkušenost s elektroinstalací, jisticí skříň znáš a víš jak bezpečně vypnout jistič, technicky jde o stejný postup jako výměna klasické zásuvky. Pokud si nejsi jistý, nech to na elektrikáři — práce trvá 15-20 minut a cena 300-600 Kč je zanedbatelná proti riziku špatného zapojení vodičů.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jaký je rozdíl mezi USB-A a USB-C portem v zásuvce?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">USB-A je starší obdélníkový konektor s nižším výkonem (obvykle do 12 W na port), používá se hlavně pro starší zařízení. USB-C je novější, podporuje rychlé PD nabíjení (18-30 W i více) a zvládne nabít i tablety nebo menší notebooky. Pro nové instalace doporučujeme zásuvku s alespoň jedním USB-C portem s podporou PD.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Kolik stojí USB zásuvka a její instalace?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Samotná USB kombinovaná zásuvka (230V + USB porty) vyjde na 400-900 Kč podle značky a výkonu. Instalace elektrikářem stojí typicky 300-600 Kč za zásuvku, pokud jde jen o výměnu v existující krabici bez úprav rozvodů.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Nabije USB zásuvka i notebook?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Záleží na výkonu portu. Běžné USB zásuvky s PD nabíjením zvládnou 18-30 W, což stačí na telefony a tablety, ale na výkonnější notebooky (45-65 W a více) to obvykle nestačí. Pro nabíjení notebooku přes USB-C je potřeba zásuvka s vyšším výkonem PD nebo klasická nabíječka v běžné 230V zásuvce.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Je bezpečné koupit levnou USB zásuvku z neznámého obchodu?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Nedoporučujeme. Levné USB zásuvky bez certifikace CE z nejistého zdroje mají riziko přehřátí nebo nestabilního výstupního napětí, což může poškodit nabíjená zařízení nebo představovat požární riziko. Vždy kupuj značkové produkty s certifikací CE od ověřeného prodejce.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Co je centrální nabíjecí stanice a vyplatí se?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Centrální nabíjecí stanice je víceportová nabíječka s několika USB-A/C výstupy, kterou zapojíš do jedné běžné zásuvky. Vyplatí se v místech jako předsíň nebo kuchyňská linka, kde potřebuješ nabíjet více zařízení najednou bez nutnosti měnit zásuvky ve zdi.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/usb-zasuvky-a-nabijeci-stanice" title="USB zásuvky a nabíjecí stanice doma – jak na to" />

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
                <li><a href="#proc">Proč USB zásuvky</a></li>
                <li><a href="#typy">USB-A vs USB-C</a></li>
                <li><a href="#instalace">Instalace</a></li>
                <li><a href="#umisteni">Kam umístit</a></li>
                <li><a href="#stanice">Nabíjecí stanice</a></li>
                <li><a href="#bezpecnost">Bezpečnost a ceny</a></li>
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
