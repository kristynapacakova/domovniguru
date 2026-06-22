import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak natřít sklo, zrcadla a kovové prvky v bytě",
  description: "Speciální barvy a postupy pro natírání skla, rámů zrcadel, klik, baterií a dalších kovových prvků.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/malovani-skla-zrcadel-a-kovu" },
  openGraph: { title: "Jak natřít sklo, zrcadla a kovové prvky v bytě", description: "Speciální barvy a postupy pro natírání skla, rámů zrcadel, klik, baterií a dalších kovových prvků.", url: "https://www.domovniguru.cz/blog/malovani-skla-zrcadel-a-kovu", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-12T08:00:00Z", modifiedTime: "2026-06-12T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20nat%C5%99%C3%ADt%20sklo%2C%20zrcadla%20a%20kovov%C3%A9%20prvky%20v%20byt%C4%9B&cat=blog", width: 1200, height: 630, alt: "Jak natřít sklo, zrcadla a kovové prvky v bytě" }] },
  twitter: { card: "summary_large_image", title: "Jak natřít sklo, zrcadla a kovové prvky v bytě", description: "Speciální barvy a postupy pro natírání skla, rámů zrcadel, klik, baterií a dalších kovových prvků." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/malovani-skla-zrcadel-a-kovu#article", "headline": "Jak natřít sklo, zrcadla a kovové prvky v bytě", "datePublished": "2026-06-12T08:00:00Z", "dateModified": "2026-06-12T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["malování skla", "barva na sklo", "natírání zrcadel", "barva na kov", "natírání klik a baterií", "vitrážové barvy"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Malování & barvy", "item": "https://www.domovniguru.cz/blog/kategorie/malovani" }, { "@type": "ListItem", "position": 4, "name": "Malování skla, zrcadel a kovu", "item": "https://www.domovniguru.cz/blog/malovani-skla-zrcadel-a-kovu" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jakou barvou natřít sklo?", "acceptedAnswer": { "@type": "Answer", "text": "Na sklo se hodí speciální sprejové barvy na sklo a keramiku, případně vitrážové barvy pro dekorativní motivy. Běžná barva na zeď nebo dřevo na skle dlouho nedrží, protože sklo je nesavý a hladký povrch, který potřebuje speciální přilnavost." } }, { "@type": "Question", "name": "Musí se sklo před natíráním brousit?", "acceptedAnswer": { "@type": "Answer", "text": "Lehké zdrsnění jemným brusným papírem (zrnitost 400–600) zlepší přilnavost nátěru, ale není vždy nutné. Klíčové je důkladné odmaštění povrchu lihem nebo odmašťovačem – bez tohoto kroku se barva časem odlupuje." } }, { "@type": "Question", "name": "Jak natřít kovovou kliku nebo baterii?", "acceptedAnswer": { "@type": "Answer", "text": "Nejprve odstraň starý nátěr a rez brusným papírem nebo odmašťovačem, poté naneste antikorozní základ (primer na kov) a nakonec syntetickou nebo sprejovou barvu určenou na kov ve dvou tenkých vrstvách." } }, { "@type": "Question", "name": "Jaká barva nejlépe drží na kovu?", "acceptedAnswer": { "@type": "Answer", "text": "Na kov se nejčastěji používají syntetické (alkydové) emaily a sprejové barvy s antikorozní složkou. Pro silně zatěžované prvky jako zábradlí nebo klika se vyplatí dvouvrstvý systém – základ proti korozi a vrchní email." } }, { "@type": "Question", "name": "Jak dlouho vydrží nátěr na kovu nebo skle?", "acceptedAnswer": { "@type": "Answer", "text": "Při správné přípravě povrchu a kvalitní barvě vydrží nátěr na kovu 3–8 let podle namáhání, na skle podobně, pokud nejde o místa s častým otěrem nebo vlhkostí. Pravidelná lehká údržba prodlouží životnost o několik let." } }] }] };

const RELATED = [
  { title: "Jak malovat radiátor – příprava, barva a postup", href: "/blog/jak-malovat-radiator", read: "6 min" },
  { title: "Efektové barvy a techniky malování", href: "/blog/efektove-barvy-techniky", read: "5 min" },
  { title: "Jak vybrat barvu na zeď", href: "/blog/jak-vybrat-barvu-na-zed", read: "5 min" },
  { title: "Kalkulačka: kolik barvy potřebuji", href: "/kalkulacky/kolik-barvy", read: "2 min" },
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
              <span>Malování skla, zrcadel a kovu</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování & barvy</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak natřít sklo, zrcadla a kovové prvky v bytě</h1>
              <p className="article-lead">Stará klika, ošoupaný rám zrcadla nebo nudná skleněná výplň dveří – někdy stačí pár tahů štětcem nebo sprejem a detail v bytě úplně ožije. Sklo a kov ale nejsou stěna ani dřevo. Bez správné přípravy a vhodné barvy se nátěr odloupe za pár týdnů. Ukážeme ti, co a jak.</p>
              <div className="article-meta-row"><span>Aktualizováno: 12. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#barvy-na-sklo">Jaké barvy se hodí na sklo</a></li>
                <li><a href="#priprava-skla">Příprava povrchu skla a zrcadel</a></li>
                <li><a href="#techniky-sklo">Techniky natírání skla</a></li>
                <li><a href="#kovove-prvky">Natírání kovových prvků</a></li>
                <li><a href="#priprava-kov">Příprava kovu a vhodné barvy</a></li>
                <li><a href="#bezpecnost">Bezpečnost, větrání a údržba</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="barvy-na-sklo">
              <h2>Jaké barvy se hodí na sklo</h2>
              <p>Sklo je hladký, nesavý a naprosto neprodyšný povrch – běžná barva na zeď nebo dřevo se na něm prostě nezachytí a po čase se odloupe v celých plátech. Pro natírání skla existují dvě hlavní cesty.</p>
              <h3>Sprejové barvy na sklo a keramiku</h3>
              <p>Speciální sprejové barvy s označením „na sklo a keramiku" obsahují přídavné pojivo, které vytváří přilnavost i na hladkém povrchu. Po vytvrzení (obvykle za studena, někdy s dopečením v troubě podle návodu) jsou odolné otěru i mytí. Hodí se na skleněné výplně dveří, vázy, lahve nebo dekorativní úpravu zrcadlového rámu.</p>
              <h3>Vitrážové barvy</h3>
              <p>Pro dekorativní motivy – kytičky, vzory, geometrické tvary na okenní tabuli nebo skleněné dveře – jsou ideální vitrážové barvy. Existují ve variantě s konturovacím obrysem (imitace olovnatého rámečku) i bez něj, v lahvičkách s aplikátorem pro přesné kreslení. Některé jsou na vodní bázi a vytvrzují na vzduchu, jiné se po zaschnutí zapečou v troubě, čímž získají trvalou odolnost.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud chceš jen jednoduše zakrýt průhled (např. na koupelnových dveřích), zvaž i samolepicí matnou fólii. Nejde o nátěr, ale je to rychlá a snadno odstranitelná alternativa, která se hodí i do nájmu.</div>
            </section>

            <section id="priprava-skla">
              <h2>Příprava povrchu skla a zrcadel</h2>
              <p>Příprava je u skla a zrcadel naprosto klíčová – rozhoduje o tom, jestli nátěr vydrží roky, nebo se začne loupat po prvním utření hadříkem.</p>
              <h3>Odmaštění</h3>
              <p>Sklo důkladně umyj a poté odmasti technickým lihem, izopropylalkoholem nebo speciálním odmašťovačem na sklo. I drobné otisky prstů nebo zbytky čisticích prostředků s leštidlem zabrání barvě se pořádně chytit. Po odmaštění se povrchu už nedotýkej holýma rukama – používej hadřík nebo papírovou utěrku.</p>
              <h3>Lehké zdrsnění</h3>
              <p>U hladkého skla pomáhá jemné přebroušení velmi jemným brusným papírem (zrnitost 400–600) nebo brusnou houbičkou. Vytvoří se tím mikroskopické rýhy, do kterých se barva lépe „zakousne". Po zbroušení sklo znovu otři navlhčeným hadříkem a důkladně vysuš, aby na něm nezůstal prach.</p>
              <h3>Zrcadla – pozor na okraje</h3>
              <p>U zrcadel maluj pouze na přední (skleněnou) stranu, nikdy na zadní amalgámovou vrstvu – ta je citlivá na rozpouštědla a chemikálie, které by ji mohly poškodit a způsobit skvrny. Pokud natíráš jen rám zrcadla, hrany skla zakryj malířskou páskou, aby ses vyhnul zatékání barvy pod zrcadlovou fólii.</p>
            </section>

            <section id="techniky-sklo">
              <h2>Techniky natírání skla</h2>
              <h3>Sprej</h3>
              <p>Sprejová barva dává nejrovnoměrnější a nejhladší výsledek bez tahů štětce. Nanáší se ze vzdálenosti 20–30 cm v několika tenkých vrstvách – silná vrstva najednou steče a vytvoří kapky. Mezi vrstvami dodržuj čas zaschnutí udávaný výrobcem (obvykle 10–15 minut). Okolní plochy důkladně zakryj, sprej se rozptyluje na velkou vzdálenost.</p>
              <h3>Štětec</h3>
              <p>Pro menší plochy a dekorativní motivy je vhodnější štětec – zejména u vitrážových barev, kde potřebuješ kontrolu nad tahem. Používej kvalitní štětec s měkkými štětinami, aby na skle nezůstávaly viditelné stopy. Vitrážové barvy se obvykle nanášejí v jedné silnější vrstvě, protože při přetahování se rozmazávají.</p>
              <h3>Fólie jako alternativa</h3>
              <p>Pokud nechceš pracovat s barvou vůbec, samolepicí dekorativní nebo matná fólie je rychlá náhrada. Nalepuje se na čisté a odmaštěné sklo, dá se přesně vyříznout podle tvaru výplně a v případě potřeby zase odstranit beze stopy. Nevýhodou je kratší životnost u míst s častým otíráním a horší odolnost vůči mechanickému poškození než kvalitní nátěr.</p>
            </section>

            <section id="kovove-prvky">
              <h2>Natírání kovových prvků – kliky, baterie, rámy, zábradlí</h2>
              <p>Natírání radiátorů má svá specifika ohledně tepelné odolnosti, kterým se podrobně věnuje samostatný článek o <Link href="/blog/jak-malovat-radiator" style={{ color: "#2a6496", textDecoration: "underline" }}>natírání radiátorů</Link>. Tady se zaměříme na ostatní kovové prvky v bytě – kliky, vodovodní baterie, kovové rámy oken a dveří, zábradlí nebo nohy nábytku.</p>
              <p>Tyto prvky mají společné to, že jsou často chromované, lakované nebo pozinkované – tedy s povrchovou úpravou, která má původně barvu odpuzovat. Proto je u nich příprava ještě důležitější než u běžného plechu.</p>
              <h3>Kliky a kování</h3>
              <p>U klik se nejprve vyplatí zvážit, jestli se nátěr opravdu vyplatí – chromované kliky se po pár měsících používání oklepou až na kov a nátěr vypadá hůř než původní povrch. Pokud se rozhodneš pro nátěr, demontuj kliku ze dveří, odmasti, zdrsni jemným brusným papírem a natírej sprejem v několika tenkých vrstvách, ideálně zavěšenou na drátku, aby barva zatekla i do detailů.</p>
              <h3>Vodovodní baterie</h3>
              <p>Natírání baterií je sázka na nejistou kartu – povrch je v ustálém kontaktu s vodou, vlhkostí a otěrem ruky, takže běžný nátěr dlouho nevydrží. Pokud se přesto rozhodneš starou baterii „omladit", použij speciální sprej na kov s vysokou odolností vůči vlhkosti, baterii důkladně odmasti a po zaschnutí ji nech minimálně 24–48 hodin vytvrdnout, než přijde do kontaktu s vodou.</p>
              <h3>Kovové rámy, zábradlí a nohy nábytku</h3>
              <p>Tady má natírání smysl nejvíc – plochy jsou větší, méně se otírají rukama a změna barvy (např. černé matné zábradlí nebo zlatavé nohy stolu) dokáže prostor opravdu proměnit. Postup je stejný jako u jiných kovových prvků: odstranění starého nátěru a rezu, základ a vrchní barva ve dvou vrstvách.</p>
            </section>

            <section id="priprava-kov">
              <h2>Příprava povrchu kovu a vhodné typy barev</h2>
              <h3>Odstranění rezu a starého nátěru</h3>
              <p>Rez i odlupující se starý nátěr musí pryč – jinak nová barva časem popraská a odpadne s nimi. Použij drátěný kartáč, brusný papír (zrnitost 80–120 na hrubé čištění, 220–320 na finální zdrsnění) nebo chemický odstraňovač rezu. Po obroušení povrch odmasti, protože mastnota z rukou i konzervačních olejů na kovu je další běžná příčina špatné přilnavosti.</p>
              <h3>Základní nátěr (primer) na kov</h3>
              <p>Antikorozní základ je u kovu téměř povinnost, zvlášť pokud má prvek přijít do styku s vlhkostí. Primer vytváří podklad, na který se vrchní barva chytá mnohem lépe, a navíc sám brání vzniku nové rezi. Existují i barvy „2 v 1" (základ + vrchní vrstva), které jsou pohodlnější, ale na hodně zkorodovaném povrchu je lepší dvouvrstvý systém – samostatný antikorozní základ a poté email.</p>
              <h3>Vhodné typy barev na kov</h3>
              <ul>
                <li><strong>Syntetické (alkydové) emaily</strong> – klasika, dobrá odolnost, dostupné v mnoha odstínech a lescích (mat, satin, lesk). Hodí se na zábradlí, rámy, nohy nábytku.</li>
                <li><strong>Sprejové barvy na kov</strong> – nejrychlejší a nejrovnoměrnější aplikace, ideální pro menší prvky jako kliky, kování nebo doplňky. Většina obsahuje i antikorozní složku.</li>
                <li><strong>Speciální barvy na chrom a hladké povrchy</strong> – určené přímo pro kovové prvky bez přirozené savosti, obsahují zvýšený podíl pojiva pro lepší přilnavost.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Než natřeš celý prvek, vyzkoušej barvu na malé skryté ploše a počkej, jak zareaguje a jak dobře drží. U starších kovových prvků se občas stane, že pod vrstvami nátěru je jiný kov nebo materiál, než čekáš, a barva se chová jinak.</div>
            </section>

            <section id="bezpecnost">
              <h2>Bezpečnost, větrání a údržba nátěru</h2>
              <h3>Bezpečnost při práci se spreji</h3>
              <p>Sprejové barvy obsahují rozpouštědla a hnací plyny, jejichž výpary jsou škodlivé při vdechování a hořlavé. Při stříkání vždy zajisti dobré větrání – ideálně práci přesuň ven na balkon nebo terasu, případně pracuj u otevřeného okna s průvanem. Používej respirátor s filtrem proti organickým výparům, ne jen látkovou roušku, a chraň si oči brýlemi.</p>
              <h3>Ochrana okolí</h3>
              <p>Sprej se rozptyluje mnohem víc, než se na první pohled zdá – zakryj podlahu, okolní povrchy i sebe starými novinami nebo fólií v širším okruhu, než si myslíš, že bude potřeba. U vitrážových a štětcových barev na sklo je riziko menší, ale i tak pracuj na podložené ploše, aby případné kapky nezašly do koberce nebo dřevěné podlahy.</p>
              <h3>Údržba a životnost nátěru</h3>
              <p>Čerstvě natřené kovové prvky nech před plným zatížením (zavěšení, používání kliky, kontakt s vodou u baterie) vytvrdnout podle doporučení výrobce – často je to 24–72 hodin, i když je povrch na dotek suchý už po hodině. Při čištění používej jen vlhký hadřík a šetrné prostředky bez abrazivních částic, které by nátěr poškrábaly. Při správné přípravě a kvalitní barvě vydrží nátěr na kovu i skle běžně 3–8 let; drobné odřeniny lze včas přetřít stejnou barvou a prodloužit tak životnost o další roky.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jakou barvou natřít sklo?", a: "Na sklo se hodí speciální sprejové barvy na sklo a keramiku, případně vitrážové barvy pro dekorativní motivy. Běžná barva na zeď nebo dřevo na skle dlouho nedrží, protože sklo je nesavý a hladký povrch, který potřebuje speciální přilnavost." },
                  { q: "Musí se sklo před natíráním brousit?", a: "Lehké zdrsnění jemným brusným papírem (zrnitost 400–600) zlepší přilnavost nátěru, ale není vždy nutné. Klíčové je důkladné odmaštění povrchu lihem nebo odmašťovačem – bez tohoto kroku se barva časem odlupuje." },
                  { q: "Jak natřít kovovou kliku nebo baterii?", a: "Nejprve odstraň starý nátěr a rez brusným papírem nebo odmašťovačem, poté naneste antikorozní základ (primer na kov) a nakonec syntetickou nebo sprejovou barvu určenou na kov ve dvou tenkých vrstvách." },
                  { q: "Jaká barva nejlépe drží na kovu?", a: "Na kov se nejčastěji používají syntetické (alkydové) emaily a sprejové barvy s antikorozní složkou. Pro silně zatěžované prvky jako zábradlí nebo klika se vyplatí dvouvrstvý systém – základ proti korozi a vrchní email." },
                  { q: "Jak dlouho vydrží nátěr na kovu nebo skle?", a: "Při správné přípravě povrchu a kvalitní barvě vydrží nátěr na kovu 3–8 let podle namáhání, na skle podobně, pokud nejde o místa s častým otěrem nebo vlhkostí. Pravidelná lehká údržba prodlouží životnost o několik let." },
                ].map(({ q, a }) => (
                  <details key={q} className="faq-item">
                    <summary className="faq-q">{q}</summary>
                    <p className="faq-a">{a}</p>
                  </details>
                ))}
              </div>
            </section>

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
                <li><a href="#barvy-na-sklo">Jaké barvy na sklo</a></li>
                <li><a href="#priprava-skla">Příprava skla a zrcadel</a></li>
                <li><a href="#techniky-sklo">Techniky natírání skla</a></li>
                <li><a href="#kovove-prvky">Natírání kovových prvků</a></li>
                <li><a href="#priprava-kov">Příprava kovu a barvy</a></li>
                <li><a href="#bezpecnost">Bezpečnost a údržba</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/malovani" className="sidebar-cat-link">🎨 Malování & barvy<span>20 článků →</span></Link>
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
