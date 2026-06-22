import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak ošetřit a obnovit starý plot před zahradní sezónou",
  description: "Kontrola kůlů a podhrabových desek, oprava prohnilého dřeva, odstranění rzi, nátěr a impregnace plotu i rozpoznání, kdy je nutná výměna.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/osetreni-stareho-plotu-pred-sezonou" },
  openGraph: {
    title: "Jak ošetřit a obnovit starý plot před zahradní sezónou",
    description: "Kontrola kůlů a podhrabových desek, oprava prohnilého dřeva, odstranění rzi, nátěr a impregnace plotu i rozpoznání, kdy je nutná výměna.",
    url: "https://www.domovniguru.cz/blog/osetreni-stareho-plotu-pred-sezonou",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "article",
    publishedTime: "2026-06-22T08:00:00Z",
    modifiedTime: "2026-06-22T08:00:00Z",
    authors: ["DomovniGuru"],
    images: [{ url: "/api/og?title=Jak%20o%C5%A1et%C5%99it%20a%20obnovit%20star%C3%BD%20plot%20p%C5%99ed%20zahradn%C3%AD%20sez%C3%B3nou&cat=blog", width: 1200, height: 630, alt: "Jak ošetřit a obnovit starý plot před zahradní sezónou" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jak ošetřit a obnovit starý plot před sezónou",
    description: "Kontrola stability, oprava dřeva, odstranění rzi a nátěr plotu – kompletní postup.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.domovniguru.cz/blog/osetreni-stareho-plotu-pred-sezonou#article",
      "headline": "Jak ošetřit a obnovit starý plot před zahradní sezónou",
      "description": "Kontrola kůlů a podhrabových desek, oprava prohnilého dřeva, odstranění rzi, nátěr a impregnace plotu i rozpoznání, kdy je nutná výměna.",
      "datePublished": "2026-06-22T08:00:00Z",
      "dateModified": "2026-06-22T08:00:00Z",
      "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.domovniguru.cz/blog/osetreni-stareho-plotu-pred-sezonou" },
      "inLanguage": "cs",
      "keywords": ["ošetření plotu", "oprava starého plotu", "impregnace dřevěného plotu", "odstranění rzi z plotu", "výměna plotu"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.domovniguru.cz/blog/osetreni-stareho-plotu-pred-sezonou#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" },
        { "@type": "ListItem", "position": 3, "name": "Zahrada & terasa", "item": "https://www.domovniguru.cz/blog/kategorie/zahrada" },
        { "@type": "ListItem", "position": 4, "name": "Jak ošetřit a obnovit starý plot před zahradní sezónou", "item": "https://www.domovniguru.cz/blog/osetreni-stareho-plotu-pred-sezonou" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.domovniguru.cz/blog/osetreni-stareho-plotu-pred-sezonou#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Jak poznám, že je kůl plotu prohnilý u země?", "acceptedAnswer": { "@type": "Answer", "text": "Zatlač nebo zatřes kůlem v místě, kde vstupuje do země – pokud se viditelně viklá nebo povrch dřeva v zemi působí měkce a tmavě, je pravděpodobně napadený hnilobou a je třeba ho zpevnit nebo vyměnit." } },
        { "@type": "Question", "name": "Jak odstranit rez z kovového plotu před nátěrem?", "acceptedAnswer": { "@type": "Answer", "text": "Rez se odstraňuje ocelovým kartáčem, brusným papírem nebo bruskou s drátěným kotoučem až na čistý kov. Po obroušení se na místo nanese antikorozní základ a teprve poté finální vrchní nátěr." } },
        { "@type": "Question", "name": "Jak často je potřeba dřevěný plot natírat?", "acceptedAnswer": { "@type": "Answer", "text": "Tenkovrstvé lazury se obnovují přibližně každé 2–3 roky, kvalitní impregnační nátěry s UV filtrem vydrží 4–6 let. Frekvence závisí na umístění plotu a míře slunečního a dešťového zatížení." } },
        { "@type": "Question", "name": "Co dělat s prohnilou podhrabovou deskou?", "acceptedAnswer": { "@type": "Answer", "text": "Mírně prohnilé místo lze ošetřit konzervačním prostředkem a tmelem na dřevo, u zásadně poškozené desky je nutná výměna celého kusu, protože nese zatížení a chrání spodní část plotu před vlhkostí ze země." } },
        { "@type": "Question", "name": "Kdy se ještě starý plot vyplatí opravit a kdy je lepší ho vyměnit?", "acceptedAnswer": { "@type": "Answer", "text": "Opravu se vyplatí volit, pokud je poškození lokální a nosná konstrukce je v pořádku. Výměna je na místě, pokud je prohnilá nebo zkorodovaná většina kůlů, konstrukce je viditelně nestabilní nebo náklady na opravu přesahují podstatnou část ceny nového plotu." } },
        { "@type": "Question", "name": "Jakou roční dobu zvolit pro ošetření plotu?", "acceptedAnswer": { "@type": "Answer", "text": "Nejlepší je brzké jaro, kdy už neprší tak často a teploty jsou dostatečně vysoké pro zasychání nátěrů, ale ještě nepřišlo letní horko. Plot je tak připravený na celou zahradní sezónu." } },
      ],
    },
    {
      "@type": "HowTo",
      "@id": "https://www.domovniguru.cz/blog/osetreni-stareho-plotu-pred-sezonou#howto",
      "name": "Jak ošetřit a obnovit starý plot před zahradní sezónou",
      "description": "Kontrola kůlů a podhrabových desek, oprava prohnilého dřeva, odstranění rzi, nátěr a impregnace plotu i rozpoznání, kdy je nutná výměna.",
      "step": [
        { "@type": "HowToStep", "name": "Kontrola stability kůlů a desek", "text": "Zkontroluj viklání kůlů v zemi a stav podhrabových desek, najdi všechna problémová místa ještě před sezónou." },
        { "@type": "HowToStep", "name": "Oprava prohnilého dřeva", "text": "Lokálně poškozené dřevo ošetři konzervačním přípravkem a tmelem, výrazně prohnilé části nahraď novými kusy." },
        { "@type": "HowToStep", "name": "Odstranění rzi u kovových plotů", "text": "Zkorodovaná místa obruš ocelovým kartáčem nebo bruskou až na čistý kov a ošetři antikorozním základem." },
        { "@type": "HowToStep", "name": "Nátěr a impregnace dřevěného plotu", "text": "Očištěný a suchý povrch ošetři impregnačním nátěrem nebo lazurou s UV ochranou podle typu dřeva." },
        { "@type": "HowToStep", "name": "Rozhodnutí mezi opravou a výměnou", "text": "Posuď rozsah poškození a rozhodni, jestli se ještě vyplatí oprava, nebo je výhodnější výměna celého plotu." },
      ],
    },
  ],
};

const RELATED = [
  { title: "Zahradní plot ze dřeva – stavba a údržba", href: "/blog/zahradni-plot-ze-dreva", read: "6 min" },
  { title: "Zahradní nástroje a jejich péče", href: "/blog/zahradni-nastroje-pece", read: "5 min" },
  { title: "Jak navrhnout zahradu od základu", href: "/blog/jak-navrhnout-zahradu", read: "7 min" },
  { title: "Odvodnění zahrady při deštích", href: "/blog/odvodneni-zahrady-pri-destich", read: "6 min" },
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
              <span>Jak ošetřit a obnovit starý plot před zahradní sezónou</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak ošetřit a obnovit starý plot před zahradní sezónou</h1>
              <p className="article-lead">Plot, který přečkal několik zim bez údržby, často nepotřebuje rovnou výměnu – stačí mu věnovat jedno víkendové odpoledne. Ukážeme ti, jak zkontrolovat stabilitu konstrukce, opravit poškozené dřevo nebo kov a rozpoznat, kdy se oprava ještě vyplatí a kdy je čas na nový plot.</p>
              <div className="article-meta-row">
                <span>Aktualizováno: 22. června 2026</span><span>·</span><span>DomovniGuru</span>
              </div>
              <ShareButtons url="https://www.domovniguru.cz/blog/osetreni-stareho-plotu-pred-sezonou" title="Jak ošetřit a obnovit starý plot před zahradní sezónou" />
            </header>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#kontrola">Kontrola stability kůlů a desek</a></li>
                <li><a href="#oprava-drevo">Oprava prohnilého dřeva</a></li>
                <li><a href="#rez">Odstranění rzi u kovových plotů</a></li>
                <li><a href="#nater">Nátěr a impregnace dřevěného plotu</a></li>
                <li><a href="#kdy-stacit">Kdy plot ještě stačí ošetřit</a></li>
                <li><a href="#vymena">Kdy je nutná výměna</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="kontrola">
              <h2>Kontrola stability kůlů a podhrabových desek</h2>
              <p>Než se pustíš do nátěru nebo kosmetických oprav, je potřeba zjistit, jestli je konstrukce plotu vůbec stabilní.</p>
              <h3>Test viklání kůlů</h3>
              <p>U každého kůlu zkus rukou zatlačit a zatřást ve směru kolmo na plot. Pokud se kůl viklá v místě, kde vstupuje do země, signalizuje to buď prohnilou spodní část dřeva, nebo uvolněný betonový základ. Drobné viklání lze často zpevnit přidáním rychletuhnoucího betonu kolem patky, větší uvolnění vyžaduje vykopání a nové zabetonování kůlu.</p>
              <h3>Stav podhrabových desek</h3>
              <p>Podhrabové desky u spodního okraje plotu jsou nejvíc namáhané vlhkostí ze země a od trávy. Prohlédni je po celé délce, zejména v místech styku se zemí, kde se hniloba objevuje nejdřív. Mírné poškození povrchu lze ošetřit, výrazně zborcené nebo měknoucí desky je potřeba vyměnit za nové.</p>
              <h3>Kontrola kotvení a spojů</h3>
              <p>U kovových i dřevěných plotů zkontroluj všechny šrouby, svorníky a spojovací úhelníky. Povolené spoje dotáhni, zkorodované nebo prasklé spojovací prvky vyměň za nové, ideálně z nerezového nebo galvanizovaného materiálu odolného proti počasí.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Kontrolu prováděj nejlépe po dešti, kdy je dřevo i případná hniloba snáz rozpoznatelná podle barvy a vlhkosti povrchu.</div>
            </section>

            <section id="oprava-drevo">
              <h2>Oprava prohnilého dřeva</h2>
              <p>Dřevo je nejnáchylnější právě v místech dlouhodobého styku s vlhkostí – u země, na horní hraně desek a v místech bez nátěru.</p>
              <h3>Lokální poškození</h3>
              <p>Menší prohnilá místa nebo praskliny lze ošetřit – povrch nejdřív obruš nebo seškrabej shnilou hmotu až na zdravé dřevo, naimpregnuj konzervačním přípravkem proti houbám a dřevokaznému hmyzu a po zaschnutí vyplň tmelem na dřevo určeným pro venkovní použití.</p>
              <h3>Výměna jednotlivých prken nebo desek</h3>
              <p>Pokud je poškození rozsáhlejší, ale konstrukce zůstává jinak stabilní, vyměň pouze postižené kusy. Nové dřevo před montáží naimpregnuj ze všech stran včetně řezných hran, kde dřevo nasává vlhkost nejrychleji.</p>
              <h3>Prevence dalšího poškození</h3>
              <p>Po opravě zvaž odvětrání spodní hrany plotu od trávy a země – i pár centimetrů mezery výrazně sníží budoucí vlhkostní zatížení a prodlouží životnost opraveného dřeva.</p>
            </section>

            <section id="rez">
              <h2>Odstranění rzi u kovových plotů</h2>
              <p>Koroze u kovových plotů a branek postupuje nejrychleji v místech poškozeného nátěru, kde je kov přímo vystaven vlhkosti.</p>
              <h3>Mechanické odstranění rzi</h3>
              <p>Zkorodované plochy obruš ocelovým kartáčem, hrubým brusným papírem nebo úhlovou bruskou s drátěným kotoučem až na čistý, lesklý kov. U menších ploch postačí ruční nářadí, u rozsáhlejší koroze ušetří čas elektrické nářadí.</p>
              <h3>Antikorozní ochrana</h3>
              <p>Na vyčištěný kov nejdřív nanes antikorozní základní nátěr, který zabraňuje opětovnému vzniku rzi, a až po jeho zaschnutí aplikuj vrchní barvu odpovídající původnímu nebo zvolenému odstínu plotu. Vynechání základní vrstvy znamená, že se rez objeví znovu během jedné až dvou sezón.</p>
              <h3>Drobné praskliny a svary</h3>
              <p>Pokud koroze zasáhla i svary nebo způsobila prasklinu v kovové konstrukci, je vhodné nechat místo přivařit nebo zpevnit odborníkem ještě před nátěrem – samotný nátěr funkční problém s nosností nevyřeší.</p>
            </section>

            <section id="nater">
              <h2>Nátěr a impregnace dřevěného plotu</h2>
              <p>Kvalitní nátěr je nejdůležitější ochranou dřeva proti vlhkosti, UV záření a dřevokazným houbám.</p>
              <h3>Příprava povrchu</h3>
              <p>Starý, odlupující se nátěr odstraň broušením nebo škrabkou – nový nátěr na nesoudržný podklad totiž rychle popraská a odpadá. Povrch musí být před nanášením suchý a zbavený prachu a mastnoty.</p>
              <h3>Výběr typu nátěru</h3>
              <p>Tenkovrstvé lazury zvýrazňují kresbu dřeva a snadno se obnovují, ale vydrží kratší dobu, obvykle 2–3 roky. Hustší impregnační nátěry s UV filtrem a fungicidní přísadou chrání dřevo déle, typicky 4–6 let, ale po opotřebení se obtížněji obnovují.</p>
              <h3>Postup nanášení</h3>
              <p>Nátěr nanášej za sucha, při teplotě nad 10 °C a mimo přímé slunce, aby nezasychal příliš rychle a nezůstávaly na povrchu šmouhy. U savého, dlouho neošetřeného dřeva je vhodná i druhá vrstva po úplném zaschnutí první.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Plot nikdy nenatírej těsně před deštěm – čerstvý nátěr potřebuje k zaschnutí minimálně několik hodin bez srážek, ideálně celý den.</div>
            </section>

            <section id="kdy-stacit">
              <h2>Kdy plot ještě stačí ošetřit</h2>
              <p>Rozpoznat hranici mezi opravitelným a neopravitelným poškozením ušetří zbytečné výdaje na předčasnou výměnu.</p>
              <h3>Známky toho, že oprava stačí</h3>
              <ul>
                <li>Poškození je omezené na jednotlivé desky nebo menší úseky kovové konstrukce</li>
                <li>Hlavní nosné kůly nebo sloupky jsou stabilní a nevykazují viklání</li>
                <li>Koroze nebo hniloba nezasáhla spojovací a kotvící prvky</li>
              </ul>
              <h3>Ekonomické hledisko</h3>
              <p>Pokud náklady na materiál a čas potřebný k opravě nepřesahují zhruba třetinu ceny srovnatelného nového úseku plotu, oprava se obvykle vyplatí a prodlouží životnost konstrukce o několik dalších let.</p>
            </section>

            <section id="vymena">
              <h2>Kdy je nutná výměna celého plotu</h2>
              <p>Některá poškození jsou rozsáhlá nebo systémová do té míry, že dílčí opravy nemají dlouhodobý smysl.</p>
              <h3>Signály pro výměnu</h3>
              <p>Pokud je prohnilá nebo zkorodovaná většina nosných kůlů, sloupků nebo hlavní rám konstrukce, oprava jednotlivých kusů problém neřeší – plot zůstává celkově nestabilní. Stejně tak rozsáhlé praskliny v betonových patkách nebo viditelný náklon celého úseku signalizují, že je čas na novou konstrukci.</p>
              <h3>Bezpečnostní hledisko</h3>
              <p>U plotů kolem pozemků s dětmi nebo domácími zvířaty, případně u plotů sousedících s frekventovanou komunikací, je bezpečnost prioritou. Pokud máš o stabilitě plotu jakékoliv pochybnosti, je lepší investovat do výměny než riskovat zranění při zborcení.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jak poznám, že je kůl plotu prohnilý u země?", a: "Zatlač nebo zatřes kůlem v místě, kde vstupuje do země – pokud se viditelně viklá nebo povrch dřeva v zemi působí měkce a tmavě, je pravděpodobně napadený hnilobou a je třeba ho zpevnit nebo vyměnit." },
                  { q: "Jak odstranit rez z kovového plotu před nátěrem?", a: "Rez se odstraňuje ocelovým kartáčem, brusným papírem nebo bruskou s drátěným kotoučem až na čistý kov. Po obroušení se na místo nanese antikorozní základ a teprve poté finální vrchní nátěr." },
                  { q: "Jak často je potřeba dřevěný plot natírat?", a: "Tenkovrstvé lazury se obnovují přibližně každé 2–3 roky, kvalitní impregnační nátěry s UV filtrem vydrží 4–6 let. Frekvence závisí na umístění plotu a míře slunečního a dešťového zatížení." },
                  { q: "Co dělat s prohnilou podhrabovou deskou?", a: "Mírně prohnilé místo lze ošetřit konzervačním prostředkem a tmelem na dřevo, u zásadně poškozené desky je nutná výměna celého kusu, protože nese zatížení a chrání spodní část plotu před vlhkostí ze země." },
                  { q: "Kdy se ještě starý plot vyplatí opravit a kdy je lepší ho vyměnit?", a: "Opravu se vyplatí volit, pokud je poškození lokální a nosná konstrukce je v pořádku. Výměna je na místě, pokud je prohnilá nebo zkorodovaná většina kůlů, konstrukce je viditelně nestabilní nebo náklady na opravu přesahují podstatnou část ceny nového plotu." },
                  { q: "Jakou roční dobu zvolit pro ošetření plotu?", a: "Nejlepší je brzké jaro, kdy už neprší tak často a teploty jsou dostatečně vysoké pro zasychání nátěrů, ale ještě nepřišlo letní horko. Plot je tak připravený na celou zahradní sezónu." },
                ].map(({ q, a }) => (
                  <details key={q} className="faq-item">
                    <summary className="faq-summary">{q}<span className="faq-icon">▾</span></summary>
                    <div className="faq-body">{a}</div>
                  </details>
                ))}
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/osetreni-stareho-plotu-pred-sezonou" title="Jak ošetřit a obnovit starý plot před zahradní sezónou" />

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
                <li><a href="#kontrola">Kontrola stability</a></li>
                <li><a href="#oprava-drevo">Oprava prohnilého dřeva</a></li>
                <li><a href="#rez">Odstranění rzi</a></li>
                <li><a href="#nater">Nátěr a impregnace</a></li>
                <li><a href="#kdy-stacit">Kdy stačí ošetřit</a></li>
                <li><a href="#vymena">Kdy je nutná výměna</a></li>
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
