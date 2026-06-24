import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak vybrat robotický vysavač domů",
  description: "Navigace, výkon sání, mopování a baterie – na co se zaměřit při výběru robotického vysavače.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-vybrat-robotickeho-vysavace" },
  openGraph: { title: "Jak vybrat robotický vysavač domů", description: "Navigace, výkon sání, mopování a baterie – na co se zaměřit při výběru robotického vysavače.", url: "https://www.domovniguru.cz/blog/jak-vybrat-robotickeho-vysavace", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-24T08:00:00Z", modifiedTime: "2026-06-24T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20vybrat%20robotick%C3%A9ho%20vysava%C4%8De%20dom%C5%AF&cat=blog", width: 1200, height: 630, alt: "Jak vybrat robotický vysavač domů" }] },
  twitter: { card: "summary_large_image", title: "Jak vybrat robotický vysavač domů", description: "Navigace, výkon sání, mopování a baterie – na co se zaměřit při výběru robotického vysavače." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/jak-vybrat-robotickeho-vysavace#article", "headline": "Jak vybrat robotický vysavač domů", "datePublished": "2026-06-24T08:00:00Z", "dateModified": "2026-06-24T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["robotický vysavač výběr", "robotický vysavač s mopem", "navigace robotického vysavače", "samočisticí stanice", "robotický vysavač pro alergiky", "robotický vysavač baterie"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Elektrika & osvětlení", "item": "https://www.domovniguru.cz/blog/kategorie/elektrika" }, { "@type": "ListItem", "position": 4, "name": "Jak vybrat robotický vysavač domů", "item": "https://www.domovniguru.cz/blog/jak-vybrat-robotickeho-vysavace" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jaký typ navigace je u robotického vysavače nejlepší?", "acceptedAnswer": { "@type": "Answer", "text": "Laserová navigace (LiDAR) nebo kamerové mapování jsou výrazně přesnější než starší nárazová navigace – robot si vytvoří mapu domácnosti, jezdí systematicky a umí se vrátit přesně tam, kde skončil. Nárazová navigace je levnější, ale uklízí méně efektivně a hůř se vyhýbá překážkám." } }, { "@type": "Question", "name": "Potřebuji robotický vysavač s funkcí mopování?", "acceptedAnswer": { "@type": "Answer", "text": "Kombinovaný robot s mopováním se vyplatí v domácnostech s převahou tvrdých podlah (dlažba, vinyl, dřevo), kde dokáže po vysátí ještě setřít prach a drobné skvrny. V bytech s koberci je přínos menší, protože mopovací modul se na koberci obvykle automaticky zvedá nebo vypíná." } }, { "@type": "Question", "name": "Jak dlouho vydrží baterie robotického vysavače?", "acceptedAnswer": { "@type": "Answer", "text": "Běžné modely vydrží na jedno nabití uklízet 90–180 minut, což stačí na byt o velikosti 60–120 m². Modely se samočisticí stanicí navíc dojíždí k nabití i k vyprázdnění automaticky a po doplnění energie pokračují v uklízení tam, kde skončily." } }, { "@type": "Question", "name": "Je samočisticí stanice nutnost, nebo luxus?", "acceptedAnswer": { "@type": "Answer", "text": "Samočisticí stanice nejsou nezbytné, ale výrazně snižují potřebu manuální údržby – sama vyprázdní nádobu na prach, u dražších modelů i vypere a vysuší mop. Vyplatí se zejména pro domácnosti s mazlíčky nebo alergiky, kde se prach a chlupy hromadí rychle." } }, { "@type": "Question", "name": "Je robotický vysavač vhodný pro alergiky?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, pokud má kvalitní HEPA filtr a uzavřenou nádobu na prach, která zabraňuje úniku alergenů zpět do ovzduší. Pravidelné automatické vysávání navíc omezuje hromadění prachu a roztočů mezi běžným úklidem, což je pro alergiky přínosem." } }] }] };

const RELATED = [
  { title: "Spotřebiče v pohotovostním režimu – kolik stojí standby 2026", href: "/blog/spotrebice-ve-standby-jak-usetrit", read: "6 min" },
  { title: "USB zásuvky a nabíjecí stanice doma – jak na to 2026", href: "/blog/usb-zasuvky-a-nabijeci-stanice", read: "6 min" },
  { title: "Jak pečovat o myčku nádobí, aby vydržela a myla dokonale", href: "/blog/jak-udrzovat-mycku-nadobi", read: "5 min" },
  { title: "Jak vyčistit pračku – zbavte se zápachu a vodního kamene", href: "/blog/jak-vycistit-pracku", read: "7 min" },
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
              <Link href="/blog/kategorie/elektrika">⚡ Elektrika & osvětlení</Link><span className="breadcrumb-sep">/</span>
              <span>Jak vybrat robotický vysavač</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">⚡ Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak vybrat robotický vysavač domů</h1>
              <p className="article-lead">Nabídka robotických vysavačů je obrovská a ceny se pohybují od pár tisíc po desítky tisíc korun. Rozdíl ale není jen v ceně – liší se navigace, výkon sání, schopnost mopování i to, kolik práce kolem nich budeš muset sám odvést. Tady je přehled parametrů, na které se vyplatí zaměřit, abys vybral robota, který skutečně sedí tvé domácnosti.</p>
              <div className="article-meta-row"><span>Aktualizováno: 24. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#navigace">Typy navigace</a></li>
                <li><a href="#vykon-sani">Výkon sání a typ podlahy</a></li>
                <li><a href="#mopovani">Kombinované mopování</a></li>
                <li><a href="#baterie">Kapacita baterie a dosah</a></li>
                <li><a href="#samocisticí-stanice">Samočisticí stanice</a></li>
                <li><a href="#ovladani">Ovládání appkou a hlasovými asistenty</a></li>
                <li><a href="#mazlicci-alergici">Domácnosti s mazlíčky a alergiky</a></li>
                <li><a href="#udrzba">Údržba</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="navigace">
              <h2>Typy navigace – nárazová vs. laserová a kamerová</h2>
              <p>Způsob, jakým se robot orientuje v prostoru, je jeden z nejdůležitějších parametrů a má velký vliv na kvalitu a efektivitu úklidu.</p>
              <ul>
                <li><strong>Nárazová navigace (bumper)</strong> – nejlevnější varianta, robot se pohybuje víceméně nahodile a směr mění po nárazu do překážky. Uklízí pomaleji, méně systematicky a často míjí některá místa</li>
                <li><strong>Gyroskopická navigace</strong> – o stupeň lepší, robot sleduje svůj pohyb pomocí senzorů a jezdí v pravidelnějších drahách, ale stále bez skutečné mapy</li>
                <li><strong>Laserová navigace (LiDAR)</strong> – rotující laserový senzor vytváří přesnou mapu místnosti v reálném čase, robot jezdí systematicky v rovných drahách a umí se přesně vrátit na nabíjecí stanici</li>
                <li><strong>Kamerové mapování (vSLAM)</strong> – podobná přesnost jako LiDAR, využívá kamery a vizuální rozpoznávání, někdy citlivější na špatné světelné podmínky (tma, šero)</li>
              </ul>
              <p>Pro byt s více pokoji a nábytkem se vyplatí investovat do modelu s laserovou nebo kamerovou navigací – ušetří čas, energii baterie a uklízí výrazně důkladněji.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Modely s mapováním obvykle umožňují v appce nastavit virtuální zóny „no-go" (např. kolem misek pro mazlíčky) a naplánovat úklid jen určitých místností.</div>
            </section>

            <section id="vykon-sani">
              <h2>Výkon sání a typ podlahy</h2>
              <p>Výkon sání se udává v jednotkách Pa (pascal) a určuje, jak dobře robot zvládne hrubší nečistoty a koberce. Běžné modely se pohybují v rozsahu 2000–6000 Pa, výkonnější a dražší modely přesahují i 10 000 Pa.</p>
              <ul>
                <li><strong>Tvrdé podlahy (dlažba, vinyl, dřevo)</strong> – nižší výkon sání obvykle stačí, důležitější je kvalita kartáčů a hubice</li>
                <li><strong>Koberce a kratší vlasové koberce</strong> – vyžadují vyšší výkon sání a kvalitní hlavní kartáč, který nečistoty z vláken skutečně vytáhne</li>
                <li><strong>Domácnosti se zvířecí srstí</strong> – kombinace silikonového nebo „anti-tangle" kartáče (bez navíjení chlupů) a vyššího výkonu sání usnadní pravidelnou údržbu</li>
                <li><strong>Automatické přizpůsobení výkonu</strong> – modernější modely rozpoznají typ podlahy senzorem a automaticky zvýší výkon na koberci, čímž šetří baterii na tvrdých podlahách</li>
              </ul>
            </section>

            <section id="mopovani">
              <h2>Kombinované mopování</h2>
              <p>Robotický vysavač s mopováním kombinuje vysávání a vytírání v jednom průchodu – po vysání prachu provede mop vlhčený z integrované nádržky. Hodí se zejména do domácností s převahou tvrdých podlah.</p>
              <ul>
                <li><strong>Vibrující nebo rotující mop</strong> – pokročilejší modely mop mechanicky vibrují nebo rotují pro lepší odstranění zaschlých skvrn</li>
                <li><strong>Automatické zvednutí na koberci</strong> – důležitá funkce, pokud máš v bytě kombinaci podlah a koberců, aby se koberec nezvlhčil</li>
                <li><strong>Samostatné nádržky na vodu a prach</strong> – praktičtější než společná nádržka, protože umožňují déle pokračovat v úklidu bez doplňování</li>
              </ul>
              <p>Pro domácnost s velkou plochou koberců se mopovací funkce příliš nevyplatí – v takovém případě je lepší investovat ušetřené peníze do vyššího výkonu sání nebo lepší navigace.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud máš doma zvířata, zvol mop s odnímatelnou nádržkou, kterou lze snadno vyprat – ušetříš si nepříjemné překvapení se zaschlými skvrnami od mokrých tlapek.</div>
            </section>

            <section id="baterie">
              <h2>Kapacita baterie a dosah na jedno nabití</h2>
              <p>Výdrž baterie se udává v minutách provozu a v m² uklizené plochy. Běžné modely vydrží 90–180 minut, což odpovídá ploše zhruba 60–150 m² podle režimu sání.</p>
              <ul>
                <li><strong>Menší byty (do 60 m²)</strong> – stačí i levnější model s kratší výdrží baterie, robot zvládne celý prostor na jedno nabití</li>
                <li><strong>Větší domy a vícepatrové domácnosti</strong> – vyplatí se model s funkcí „resume" – po vybití baterie se sám dojede nabít a pak pokračuje přesně tam, kde skončil</li>
                <li><strong>Vícepatrové domy</strong> – některé modely umožňují uložit více map pro různá patra, takže robot pozná, ve kterém patře se právě nachází</li>
              </ul>
            </section>

            <section id="samocisticí-stanice">
              <h2>Samočisticí stanice</h2>
              <p>Samočisticí (nebo „all-in-one") stanice automaticky vyprázdní nádobu na prach z robota do většího sáčku nebo nádoby ve stanici, u dražších modelů navíc vypere a vysuší mopovací plátky a doplní čistou vodu.</p>
              <ul>
                <li><strong>Výhoda</strong> – výrazně méně manuální údržby, robot může pracovat několik týdnů bez nutnosti vyprazdňovat nádobu na prach ručně</li>
                <li><strong>Nevýhoda</strong> – stanice je velká, hlučná při vyprazdňování a zvyšuje celkovou cenu sestavy o několik tisíc korun</li>
                <li><strong>Pro koho se vyplatí</strong> – domácnosti s mazlíčky, alergiky nebo lidé, kteří chtějí úklid skutečně „odhodit z hlavy" na delší dobu</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> I se samočisticí stanicí je potřeba jednou za čas vyměnit filtr a vyčistit kartáče – stanice práci usnadní, ale úplně ji nenahradí.</div>
            </section>

            <section id="ovladani">
              <h2>Ovládání appkou a hlasovými asistenty</h2>
              <p>Téměř všechny moderní robotické vysavače se ovládají přes mobilní aplikaci, kde lze nastavit plán úklidu, intenzitu sání, zóny vynechání a sledovat aktuální mapu domácnosti v reálném čase.</p>
              <ul>
                <li><strong>Plánování úklidu</strong> – nastavení konkrétních dnů a časů, kdy má robot automaticky uklízet</li>
                <li><strong>Mapování více pater</strong> – uložení samostatných map pro různé podlaží domu</li>
                <li><strong>Hlasoví asistenti</strong> – kompatibilita s Google Assistant nebo Amazon Alexa umožňuje spustit úklid hlasovým příkazem</li>
                <li><strong>Chytrá domácnost</strong> – propojení s dalšími prvky chytré domácnosti (např. spuštění úklidu při odchodu z domu) – inspiraci najdeš v článku o tom, jak <Link href="/blog/chytra-domacnost-zaciname" style={{ color: "#2a6496", textDecoration: "underline" }}>začít s chytrou domácností</Link></li>
              </ul>
            </section>

            <section id="mazlicci-alergici">
              <h2>Vhodnost pro domácnosti s mazlíčky a alergiky</h2>
              <p>Pro domácnosti se zvířaty a pro alergiky se vyplatí zaměřit na specifické parametry navíc k běžnému srovnání.</p>
              <ul>
                <li><strong>HEPA filtr</strong> – zachytí drobné alergeny a prachové částice, díky kterým se nedostávají zpět do vzduchu</li>
                <li><strong>Uzavřená nádoba na prach</strong> – zabraňuje úniku zachyceného prachu a alergenů při vyprazdňování</li>
                <li><strong>Anti-tangle kartáč</strong> – speciální tvar nebo silikonové žebrování, na kterém se nenavíjí zvířecí srst</li>
                <li><strong>Pravidelnost úklidu</strong> – automatické plánování omezuje hromadění prachu a roztočů mezi běžným úklidem, což je přínosem zejména pro alergiky</li>
              </ul>
            </section>

            <section id="udrzba">
              <h2>Údržba – kartáče, filtry a senzory</h2>
              <p>I nejlepší robotický vysavač potřebuje základní pravidelnou údržbu, aby fungoval spolehlivě a dlouho.</p>
              <ul>
                <li><strong>Hlavní a boční kartáče</strong> – kontrola a čištění od navinutých vlasů a chlupů ideálně jednou týdně, výměna podle opotřebení jednou za 6–12 měsíců</li>
                <li><strong>Filtr</strong> – vyklepání nebo vyčištění po každém vyprázdnění nádoby, výměna podle doporučení výrobce (obvykle 2–6 měsíců)</li>
                <li><strong>Senzory a kamery</strong> – pravidelné otření měkkým hadříkem, prach na senzorech může způsobit nepřesnou navigaci nebo neúmyslné nárazy</li>
                <li><strong>Kolečka a podvozek</strong> – kontrola zanesených chlupů a nečistot kolem koleček, které mohou omezit pohyblivost robota</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Nastav si v appce pravidelnou připomínku na čištění filtru a kartáčů – prodloužíš tím životnost robota a udržíš stabilní výkon sání.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jaký typ navigace je u robotického vysavače nejlepší?", a: "Laserová navigace (LiDAR) nebo kamerové mapování jsou výrazně přesnější než starší nárazová navigace – robot si vytvoří mapu domácnosti, jezdí systematicky a umí se vrátit přesně tam, kde skončil. Nárazová navigace je levnější, ale uklízí méně efektivně a hůř se vyhýbá překážkám." },
                  { q: "Potřebuji robotický vysavač s funkcí mopování?", a: "Kombinovaný robot s mopováním se vyplatí v domácnostech s převahou tvrdých podlah (dlažba, vinyl, dřevo), kde dokáže po vysátí ještě setřít prach a drobné skvrny. V bytech s koberci je přínos menší, protože mopovací modul se na koberci obvykle automaticky zvedá nebo vypíná." },
                  { q: "Jak dlouho vydrží baterie robotického vysavače?", a: "Běžné modely vydrží na jedno nabití uklízet 90–180 minut, což stačí na byt o velikosti 60–120 m². Modely se samočisticí stanicí navíc dojíždí k nabití i k vyprázdnění automaticky a po doplnění energie pokračují v uklízení tam, kde skončily." },
                  { q: "Je samočisticí stanice nutnost, nebo luxus?", a: "Samočisticí stanice nejsou nezbytné, ale výrazně snižují potřebu manuální údržby – sama vyprázdní nádobu na prach, u dražších modelů i vypere a vysuší mop. Vyplatí se zejména pro domácnosti s mazlíčky nebo alergiky, kde se prach a chlupy hromadí rychle." },
                  { q: "Je robotický vysavač vhodný pro alergiky?", a: "Ano, pokud má kvalitní HEPA filtr a uzavřenou nádobu na prach, která zabraňuje úniku alergenů zpět do ovzduší. Pravidelné automatické vysávání navíc omezuje hromadění prachu a roztočů mezi běžným úklidem, což je pro alergiky přínosem." },
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
                <li><a href="#navigace">Typy navigace</a></li>
                <li><a href="#vykon-sani">Výkon sání</a></li>
                <li><a href="#mopovani">Mopování</a></li>
                <li><a href="#baterie">Baterie a dosah</a></li>
                <li><a href="#samocisticí-stanice">Samočisticí stanice</a></li>
                <li><a href="#ovladani">Ovládání appkou</a></li>
                <li><a href="#mazlicci-alergici">Mazlíčci a alergici</a></li>
                <li><a href="#udrzba">Údržba</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/elektrika" className="sidebar-cat-link">⚡ Elektrika & osvětlení<span>25 článků →</span></Link>
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
