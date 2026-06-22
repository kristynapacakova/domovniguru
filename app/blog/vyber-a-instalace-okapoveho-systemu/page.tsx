import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak vybrat a nainstalovat okapový systém domu",
  description: "Materiály okapů, výpočet průměru podle plochy střechy, postup montáže žlabů a svodů, spád, lapač listí i údržba okapového systému.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/vyber-a-instalace-okapoveho-systemu" },
  openGraph: {
    title: "Jak vybrat a nainstalovat okapový systém domu",
    description: "Materiály okapů, výpočet průměru podle plochy střechy, postup montáže žlabů a svodů, spád, lapač listí i údržba okapového systému.",
    url: "https://www.domovniguru.cz/blog/vyber-a-instalace-okapoveho-systemu",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "article",
    publishedTime: "2026-06-22T08:00:00Z",
    modifiedTime: "2026-06-22T08:00:00Z",
    authors: ["DomovniGuru"],
    images: [{ url: "/api/og?title=Jak%20vybrat%20a%20nainstalovat%20okapov%C3%BD%20syst%C3%A9m%20domu&cat=blog", width: 1200, height: 630, alt: "Jak vybrat a nainstalovat okapový systém domu" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jak vybrat a nainstalovat okapový systém domu",
    description: "Materiály, výpočet průměru, montáž žlabů a svodů, spád i údržba okapů.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.domovniguru.cz/blog/vyber-a-instalace-okapoveho-systemu#article",
      "headline": "Jak vybrat a nainstalovat okapový systém domu",
      "description": "Materiály okapů, výpočet průměru podle plochy střechy, postup montáže žlabů a svodů, spád, lapač listí i údržba okapového systému.",
      "datePublished": "2026-06-22T08:00:00Z",
      "dateModified": "2026-06-22T08:00:00Z",
      "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.domovniguru.cz/blog/vyber-a-instalace-okapoveho-systemu" },
      "inLanguage": "cs",
      "keywords": ["okapový systém domu", "výběr okapů", "montáž okapů", "průměr okapu podle střechy", "lapač listí do okapu"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.domovniguru.cz/blog/vyber-a-instalace-okapoveho-systemu#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" },
        { "@type": "ListItem", "position": 3, "name": "Zahrada & terasa", "item": "https://www.domovniguru.cz/blog/kategorie/zahrada" },
        { "@type": "ListItem", "position": 4, "name": "Jak vybrat a nainstalovat okapový systém domu", "item": "https://www.domovniguru.cz/blog/vyber-a-instalace-okapoveho-systemu" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.domovniguru.cz/blog/vyber-a-instalace-okapoveho-systemu#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Jaký materiál okapu je nejlepší?", "acceptedAnswer": { "@type": "Answer", "text": "Plastové okapy jsou nejlevnější a snadné na montáž, titanzinkové vydrží desítky let a dobře vypadají i u starších domů, hliníkové kombinují nízkou hmotnost s vysokou odolností proti korozi. Volba závisí na rozpočtu a požadované životnosti." } },
        { "@type": "Question", "name": "Jak se vypočítá potřebný průměr okapu?", "acceptedAnswer": { "@type": "Answer", "text": "Průměr žlabu se odvozuje od odvodňované plochy střechy – pro běžné rodinné domy do 80 m² odvodňované plochy na jeden svod stačí žlab o průměru 100–125 mm, u větších ploch nebo strmějších střech je potřeba volit větší profil." } },
        { "@type": "Question", "name": "Jaký spád by měl mít okapový žlab?", "acceptedAnswer": { "@type": "Answer", "text": "Doporučený spád žlabu směrem ke svodu je přibližně 3–5 mm na běžný metr délky. Příliš malý spád způsobuje stojící vodu a usazeniny, příliš velký zase neestetický vzhled u dlouhých úseků." } },
        { "@type": "Question", "name": "Kolik svodů potřebuje běžný rodinný dům?", "acceptedAnswer": { "@type": "Answer", "text": "Obvykle jeden svod na každých 10–12 metrů délky žlabu nebo na každých 80–100 m² odvodňované plochy střechy. U složitějších tvarů střechy s více úžlabími může být potřeba svodů víc." } },
        { "@type": "Question", "name": "Je lapač listí nutný?", "acceptedAnswer": { "@type": "Answer", "text": "Není povinný, ale výrazně snižuje nutnost čištění okapů, zejména u domů obklopených stromy. Lapač zachytí listí a větší nečistoty, takže do svodu a kanalizace teče čistší voda." } },
        { "@type": "Question", "name": "Kdy se vyplatí montáž okapů přenechat odborníkům?", "acceptedAnswer": { "@type": "Answer", "text": "U jednoduché sedlové střechy nízkého rodinného domu zvládne montáž zručný kutil. U vyšších domů, složitých tvarů střechy nebo titanzinkových systémů s nutností přesného spojování je vhodnější přizvat zkušenou firmu." } },
      ],
    },
    {
      "@type": "HowTo",
      "@id": "https://www.domovniguru.cz/blog/vyber-a-instalace-okapoveho-systemu#howto",
      "name": "Jak vybrat a nainstalovat okapový systém domu",
      "description": "Materiály okapů, výpočet průměru podle plochy střechy, postup montáže žlabů a svodů, spád, lapač listí i údržba okapového systému.",
      "step": [
        { "@type": "HowToStep", "name": "Výběr materiálu okapu", "text": "Zvol mezi plastem, titanzinkem a hliníkem podle rozpočtu, požadované životnosti a vzhledu domu." },
        { "@type": "HowToStep", "name": "Výpočet potřebného průměru", "text": "Spočítej odvodňovanou plochu střechy a podle ní zvol vhodný průměr žlabu a počet svodů." },
        { "@type": "HowToStep", "name": "Montáž háků a žlabů se spádem", "text": "Připevni háky ve správném spádu 3–5 mm na metr a zavěs žlaby tak, aby voda samospádem stékala ke svodům." },
        { "@type": "HowToStep", "name": "Montáž svodů", "text": "Nainstaluj svislé svody s kotvami ke zdi a napoj je na žlaby přes kotlíky, ústí svodu sveď do kanalizace nebo dešťové jímky." },
        { "@type": "HowToStep", "name": "Instalace lapače listí", "text": "Pro snadnější údržbu nainstaluj do kotlíků nebo po délce žlabu lapač listí, zejména u domů obklopených stromy." },
        { "@type": "HowToStep", "name": "Pravidelná údržba a čištění", "text": "Minimálně dvakrát ročně okapy zkontroluj a vyčisti od listí a nečistot, ideálně na jaře a na podzim." },
      ],
    },
  ],
};

const RELATED = [
  { title: "Odvodnění zahrady při deštích", href: "/blog/odvodneni-zahrady-pri-destich", read: "6 min" },
  { title: "Automatické zavlažování zahrady", href: "/blog/automaticke-zavlazovani-zahrady", read: "6 min" },
  { title: "Jak navrhnout zahradu od základu", href: "/blog/jak-navrhnout-zahradu", read: "7 min" },
  { title: "Stavba zahradního jezírka", href: "/blog/stavba-zahradniho-jezirka", read: "7 min" },
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
              <Link href="/blog/kategorie/zahrada">Zahrada & terasa</Link><span className="breadcrumb-sep">/</span>
              <span>Jak vybrat a nainstalovat okapový systém domu</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak vybrat a nainstalovat okapový systém domu</h1>
              <p className="article-lead">Okapový systém vypadá jako drobnost, ale špatně zvolený nebo namontovaný dokáže způsobit zatékání do fasády, podmáčené základy i poškozenou zahradu pod okapem. Ukážeme ti, jak vybrat vhodný materiál a průměr žlabů a jak je správně namontovat, aby fungovaly desítky let.</p>
              <div className="article-meta-row">
                <span>Aktualizováno: 22. června 2026</span><span>·</span><span>DomovniGuru</span>
              </div>
              <ShareButtons url="https://www.domovniguru.cz/blog/vyber-a-instalace-okapoveho-systemu" title="Jak vybrat a nainstalovat okapový systém domu" />
            </header>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#material">Materiály okapových systémů</a></li>
                <li><a href="#vypocet">Výpočet potřebného průměru</a></li>
                <li><a href="#montaz">Postup montáže žlabů a svodů</a></li>
                <li><a href="#spad">Spád a odvod vody</a></li>
                <li><a href="#lapac">Lapač listí</a></li>
                <li><a href="#udrzba">Údržba a čištění</a></li>
                <li><a href="#odbornik">Kdy se vyplatí odborná montáž</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="material">
              <h2>Materiály okapových systémů</h2>
              <p>Volba materiálu ovlivňuje nejen cenu, ale i životnost, vzhled a nároky na údržbu celého systému.</p>
              <h3>Plastové okapy</h3>
              <p>Plast je nejdostupnější varianta s jednoduchou montáží na klik bez nutnosti speciálního nářadí. Nevýhodou je nižší odolnost vůči UV záření a extrémním teplotám – časem může křehnout nebo mírně ztrácet barvu. Životnost se pohybuje obvykle kolem 15–25 let.</p>
              <h3>Titanzinkové okapy</h3>
              <p>Titanzinek je tradiční materiál s velmi dlouhou životností přesahující 40–50 let, navíc postupně vytváří přirozenou patinu, která systém dál chrání. Montáž vyžaduje přesné spojování pájením nebo speciálními spojkami, takže se často svěřuje odborné firmě.</p>
              <h3>Hliníkové okapy</h3>
              <p>Hliník kombinuje nízkou hmotnost s velmi dobrou odolností proti korozi a UV záření, navíc je k dispozici v řadě barevných povrchových úprav. Cenově se pohybuje mezi plastem a titanzinkem a životnost dosahuje 30–40 let.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud má dům historickou nebo cihlovou fasádu, titanzink nebo měď opticky ladí lépe než plast a postupem let zlepšují celkový vzhled domu.</div>
            </section>

            <section id="vypocet">
              <h2>Výpočet potřebného průměru okapu</h2>
              <p>Špatně dimenzovaný systém za silného deště přetéká a voda stéká po fasádě, místo aby odtekla do svodu.</p>
              <h3>Odvodňovaná plocha střechy</h3>
              <p>Základem výpočtu je půdorysná plocha střechy, kterou daný úsek žlabu odvodňuje, nikoliv skutečná plocha krytiny. U strmějších střech se navíc do výpočtu započítává korekční koeficient sklonu, protože strmá střecha odvádí vodu rychleji a žlab musí pojmout větší průtok.</p>
              <h3>Doporučené průměry</h3>
              <ul>
                <li><strong>Do 80 m² odvodňované plochy na jeden svod</strong> – žlab o průměru 100–125 mm</li>
                <li><strong>80–130 m²</strong> – žlab o průměru 125–150 mm</li>
                <li><strong>Nad 130 m² nebo strmé střechy s vysokou intenzitou srážek</strong> – žlab 150 mm a větší, případně více svodů</li>
              </ul>
              <h3>Počet a rozmístění svodů</h3>
              <p>Obecně platí pravidlo jeden svod na 10–12 metrů délky žlabu. U členitějších střech s úžlabími, kde se srážková voda soustřeďuje do jednoho místa, je potřeba svod umístit přímo pod tímto bodem bez ohledu na vzdálenost od dalšího svodu.</p>
            </section>

            <section id="montaz">
              <h2>Postup montáže žlabů a svodů</h2>
              <p>Samotná montáž je při dodržení postupu zvládnutelná i pro zručného kutila u jednoduchých střech.</p>
              <h3>Montáž háků</h3>
              <p>Háky pro uchycení žlabu se kotví do krokví nebo do čelní desky střechy v rozestupu obvykle 50–60 cm. Přesné rozestupy a typ kotvení se liší podle konstrukce krovu a hmotnosti zvoleného materiálu.</p>
              <h3>Zavěšení žlabů</h3>
              <p>Žlaby se do háků zaklapnou nebo zaháknou podle systému výrobce a postupně spojují koncovkami a spojkami s gumovým těsněním. Před montáží odstraň ochrannou fólii z vnitřní strany žlabu, pokud je nalepená.</p>
              <h3>Instalace kotlíků a svodů</h3>
              <p>V místě plánovaného svodu se do žlabu osadí kotlík, na který se napojí svislá trubka svodu. Svod se ke zdi kotví objímkami v rozestupu přibližně 1–1,5 metru a ústí by mělo vést do dešťové kanalizace, jímky nebo alespoň do zpevněné odtokové plochy mimo základy domu.</p>
            </section>

            <section id="spad">
              <h2>Spád a odvod vody</h2>
              <p>Bez správného spádu systém nefunguje, i kdyby byl materiál i průměr zvolen perfektně.</p>
              <h3>Doporučený spád</h3>
              <p>Žlab by měl mít spád směrem ke svodu přibližně 3–5 mm na běžný metr délky. Tento spád se nastavuje už při montáži háků – první a poslední hák v úseku se osadí v různé výšce a zbylé háky se zarovnají podle napnuté šňůry mezi nimi.</p>
              <h3>Co se stane při špatném spádu</h3>
              <p>Příliš malý nebo nulový spád způsobuje, že voda v žlabu stagnuje, usazují se v ní nečistoty a v zimě může zmrznout a žlab poškodit. Naopak příliš velký spád u dlouhých úseků žlabu vypadá esteticky rušivě a u velmi dlouhých střech může být nutné rozdělit odtok do dvou svodů místo jednoho.</p>
            </section>

            <section id="lapac">
              <h2>Lapač listí</h2>
              <p>Lapač listí není povinnou součástí systému, ale výrazně usnadňuje dlouhodobou údržbu.</p>
              <h3>K čemu lapač slouží</h3>
              <p>Mřížka nebo kartáčový lapač umístěný do žlabu nebo přímo do kotlíku svodu zachycuje spadané listí, větvičky a další nečistoty, které by jinak ucpávaly svod nebo se usazovaly na dně žlabu.</p>
              <h3>Kdy se lapač vyplatí nejvíc</h3>
              <p>Investice se vrátí především u domů v blízkosti vzrostlých stromů, kde se žlaby bez ochrany ucpávají i několikrát za sezónu. U domů bez okolní vegetace je přínos menší, ale stále usnadní pravidelnou údržbu.</p>
            </section>

            <section id="udrzba">
              <h2>Údržba a čištění okapového systému</h2>
              <p>I kvalitně namontovaný systém potřebuje pravidelnou péči, jinak postupně ztrácí funkčnost.</p>
              <h3>Kdy a jak často čistit</h3>
              <p>Optimální je čistit okapy minimálně dvakrát ročně – na podzim po spadu listí a na jaře po zimě, kdy se v žlabech usazují zbytky větviček a prachu. U domů s hodně stromy v okolí je vhodná i třetí kontrola v polovině léta.</p>
              <h3>Postup čištění</h3>
              <p>Nečistoty se ze žlabu odstraňují ručně nebo plastovou lopatkou, aby nedošlo k poškrábání povrchové úpravy, a následně se žlab i svod propláchne proudem vody z hadice, který zároveň prověří, že voda volně protéká až ke konci svodu.</p>
              <h3>Kontrola spojů a uchycení</h3>
              <p>Při čištění zároveň zkontroluj, jestli nejsou uvolněné háky, prasklé spojky nebo netěsnící spoje mezi díly. Drobné netěsnosti je snazší opravit hned, než aby se z nich stal větší problém se zatékáním do fasády.</p>
            </section>

            <section id="odbornik">
              <h2>Kdy se vyplatí odborná montáž</h2>
              <p>Ne každou instalaci je rozumné zvládat samostatně, zejména pokud na ní závisí ochrana celé fasády a základů domu.</p>
              <h3>Kdy montáž zvládneš sám</h3>
              <p>U jednoduché sedlové střechy nízkého rodinného domu s plastovým nebo hliníkovým systémem a přístupem z lešení nebo žebříku zvládne montáž zručný kutil s pomocníkem. Klíčové je přesně dodržet spád a rozestupy háků podle návodu výrobce.</p>
              <h3>Kdy přizvat odbornou firmu</h3>
              <p>U vyšších domů, složitých tvarů střechy s množstvím úžlabí, titanzinkových systémů vyžadujících přesné pájené spoje, nebo pokud nemáš k dispozici vhodné lešení a vybavení pro bezpečnou práci ve výškách, je lepší montáž přenechat odborníkům. Chyba v dimenzování nebo spádu se projeví až při silném dešti a oprava bývá dražší než správná montáž od začátku.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jaký materiál okapu je nejlepší?", a: "Plastové okapy jsou nejlevnější a snadné na montáž, titanzinkové vydrží desítky let a dobře vypadají i u starších domů, hliníkové kombinují nízkou hmotnost s vysokou odolností proti korozi. Volba závisí na rozpočtu a požadované životnosti." },
                  { q: "Jak se vypočítá potřebný průměr okapu?", a: "Průměr žlabu se odvozuje od odvodňované plochy střechy – pro běžné rodinné domy do 80 m² odvodňované plochy na jeden svod stačí žlab o průměru 100–125 mm, u větších ploch nebo strmějších střech je potřeba volit větší profil." },
                  { q: "Jaký spád by měl mít okapový žlab?", a: "Doporučený spád žlabu směrem ke svodu je přibližně 3–5 mm na běžný metr délky. Příliš malý spád způsobuje stojící vodu a usazeniny, příliš velký zase neestetický vzhled u dlouhých úseků." },
                  { q: "Kolik svodů potřebuje běžný rodinný dům?", a: "Obvykle jeden svod na každých 10–12 metrů délky žlabu nebo na každých 80–100 m² odvodňované plochy střechy. U složitějších tvarů střechy s více úžlabími může být potřeba svodů víc." },
                  { q: "Je lapač listí nutný?", a: "Není povinný, ale výrazně snižuje nutnost čištění okapů, zejména u domů obklopených stromy. Lapač zachytí listí a větší nečistoty, takže do svodu a kanalizace teče čistší voda." },
                  { q: "Kdy se vyplatí montáž okapů přenechat odborníkům?", a: "U jednoduché sedlové střechy nízkého rodinného domu zvládne montáž zručný kutil. U vyšších domů, složitých tvarů střechy nebo titanzinkových systémů s nutností přesného spojování je vhodnější přizvat zkušenou firmu." },
                ].map(({ q, a }) => (
                  <details key={q} className="faq-item">
                    <summary className="faq-summary">{q}<span className="faq-icon">▾</span></summary>
                    <div className="faq-body">{a}</div>
                  </details>
                ))}
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/vyber-a-instalace-okapoveho-systemu" title="Jak vybrat a nainstalovat okapový systém domu" />

            <section className="related-section">
              <h2>Související články</h2>
              <div className="related-grid">
                {RELATED.map((r) => (
                  <Link key={r.href} href={r.href} className="card">
                    <div className="card-eyebrow-row"><span>Zahrada & terasa</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#material">Materiály okapů</a></li>
                <li><a href="#vypocet">Výpočet průměru</a></li>
                <li><a href="#montaz">Montáž žlabů a svodů</a></li>
                <li><a href="#spad">Spád a odvod vody</a></li>
                <li><a href="#lapac">Lapač listí</a></li>
                <li><a href="#udrzba">Údržba a čištění</a></li>
                <li><a href="#odbornik">Odborná montáž</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/zahrada" className="sidebar-cat-link">🌿 Zahrada & terasa<span>Více článků →</span></Link>
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
