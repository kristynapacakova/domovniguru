import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak vybrat a nainstalovat robotickou sekačku",
  description: "Výkon, ohraničení pozemku, instalace nabíjecí stanice a údržba robotické sekačky na trávník.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/vyber-a-instalace-roboticke-sekacky" },
  openGraph: { title: "Jak vybrat a nainstalovat robotickou sekačku", description: "Výkon, ohraničení pozemku, instalace nabíjecí stanice a údržba robotické sekačky na trávník.", url: "https://www.domovniguru.cz/blog/vyber-a-instalace-roboticke-sekacky", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-24T08:00:00Z", modifiedTime: "2026-06-24T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20vybrat%20a%20nainstalovat%20robotickou%20seka%C4%8Dku&cat=blog", width: 1200, height: 630, alt: "Jak vybrat a nainstalovat robotickou sekačku" }] },
  twitter: { card: "summary_large_image", title: "Jak vybrat a nainstalovat robotickou sekačku", description: "Výkon, ohraničení pozemku, instalace nabíjecí stanice a údržba robotické sekačky na trávník." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/vyber-a-instalace-roboticke-sekacky#article", "headline": "Jak vybrat a nainstalovat robotickou sekačku", "datePublished": "2026-06-24T08:00:00Z", "dateModified": "2026-06-24T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["robotická sekačka", "instalace robotické sekačky", "ohraničovací drát", "nabíjecí stanice", "automatická sekačka trávníku"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Zahrada & terasa", "item": "https://www.domovniguru.cz/blog/kategorie/zahrada" }, { "@type": "ListItem", "position": 4, "name": "Výběr a instalace robotické sekačky", "item": "https://www.domovniguru.cz/blog/vyber-a-instalace-roboticke-sekacky" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jaký svah zvládne robotická sekačka?", "acceptedAnswer": { "@type": "Answer", "text": "Běžné modely pro domácí použití zvládnou svah do 25–35 % (přibližně 14–19 stupňů), výkonnější modely s lepším protiskluzovým podvozkem až 45–60 %. Před koupí je vždy nutné ověřit maximální deklarovaný sklon u konkrétního modelu a porovnat ho s nejsvažitějším místem na vlastním pozemku." } }, { "@type": "Question", "name": "Je instalace ohraničovacího drátu nutná u všech modelů?", "acceptedAnswer": { "@type": "Answer", "text": "Ne, novější modely využívají GPS navigaci s RTK korekcí nebo vizuální senzory a drát vůbec nepotřebují, případně jen krátký kabel u nabíjecí stanice. Klasické modely s ohraničovacím drátem jsou ale obvykle levnější a osvědčené, drát se ukládá na povrch nebo zahrabává do mírné hloubky kolem celého pozemku i kolem překážek." } }, { "@type": "Question", "name": "Je robotická sekačka bezpečná pro děti a domácí zvířata?", "acceptedAnswer": { "@type": "Answer", "text": "Moderní robotické sekačky mají senzory zdvihu a nárazu, které sekačku okamžitě zastaví, pokud je nadzvednutá nebo narazí na překážku. Riziko poranění existuje hlavně u malých dětí a velmi malých zvířat, která se nestihnou odsunout, proto výrobci doporučují nastavit sekání v době, kdy na zahradě nikdo nepobíhá, nebo používat modely s kamerovým rozpoznáváním překážek." } }, { "@type": "Question", "name": "Jak se robotická sekačka zazimovává?", "acceptedAnswer": { "@type": "Answer", "text": "Na konci sezóny se sekačka důkladně očistí, zkontrolují a případně vymění nože, dobije se baterie na doporučenou úroveň pro skladování a sekačka se uloží na suché místo s nezamrzající teplotou. Nabíjecí stanice a ohraničovací drát mohou v mnoha případech zůstat na zahradě přes zimu, pokud to výrobce povoluje." } }, { "@type": "Question", "name": "Jak často je nutné měnit nože u robotické sekačky?", "acceptedAnswer": { "@type": "Answer", "text": "Malé výměnné žiletkové nože se u běžně používané sekačky doporučuje měnit přibližně jednou za sezónu nebo i častěji při intenzivním používání a velkém trávníku. Tupé nože netrhají trávu čistě, což zvyšuje riziko plísní a zhoršuje vzhled trávníku." } }] }] };

const RELATED = [
  { title: "Jak správně sekat trávník: Průvodce pro hustý a zelený pažit bez plevele", href: "/blog/jak-sekat-travnik", read: "8 min" },
  { title: "Automatické zavlažování zahrady – instalace, nastavení a cena", href: "/blog/automaticke-zavlazovani-zahrady", read: "6 min" },
  { title: "Jak zazimovat sekačku a další zahradní techniku", href: "/blog/zazimovani-zahradni-techniky", read: "5 min" },
  { title: "Jak navrhnout zahradu od nuly – plán, zóny a výběr rostlin", href: "/blog/jak-navrhnout-zahradu", read: "7 min" },
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
              <Link href="/blog/kategorie/zahrada">🌿 Zahrada & terasa</Link><span className="breadcrumb-sep">/</span>
              <span>Výběr a instalace robotické sekačky</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak vybrat a nainstalovat robotickou sekačku</h1>
              <p className="article-lead">Robotická sekačka dnes umí udržet trávník hustý a zelený s minimem vlastní práce – stačí ji jednou správně nastavit a ona si poradí sama, v dešti i za slunce. Výběr ale nestojí jen na ceně, důležitý je výkon vůči ploše a svahu pozemku, typ ohraničení a samotná instalace. Tady je přehled, na co se zaměřit a jak postupovat.</p>
              <div className="article-meta-row"><span>Aktualizováno: 24. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#jak-funguje">Jak robotická sekačka funguje</a></li>
                <li><a href="#vyber">Výběr podle velikosti a sklonu pozemku</a></li>
                <li><a href="#ohraniceni">Ohraničovací drát vs. GPS a bezdrátové modely</a></li>
                <li><a href="#instalace">Instalace nabíjecí stanice</a></li>
                <li><a href="#planovani">Plánování trasy a časování sekání</a></li>
                <li><a href="#bezpecnost">Bezpečnost – děti a zvířata</a></li>
                <li><a href="#udrzba">Zazimování a běžná údržba</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="jak-funguje">
              <h2>Jak robotická sekačka funguje</h2>
              <p>Robotická sekačka pracuje na principu mulčování – malé žiletkové nože otáčející se vysokou rychlostí trávu jemně skracují při každém průjezdu, takže posekaná tráva propadá zpět mezi stébla a slouží jako přirozené hnojivo. Na rozdíl od klasické sekačky tak nevzniká odpad ke kompostování a trávník se seká častěji, ale méně najednou.</p>
              <p>Sekačka se po pozemku pohybuje buď náhodným vzorem s nárazovými senzory, které ji odrazí od ohraničení a překážek, nebo u modrnějších modelů systematicky podle interní mapy pozemku vytvořené pomocí GPS a senzorů. Mezi sekáním se sama vrací k nabíjecí stanici, dobije baterii a pokračuje v práci.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Časté krátké sekání mulčovacím systémem znamená, že trávník nikdy nevyžaduje hrabání ani sběr posekané trávy – ušetříš si tak jednu z nejpracnějších částí péče o trávník.</div>
            </section>

            <section id="vyber">
              <h2>Výběr podle velikosti a sklonu pozemku</h2>
              <p>Výrobci uvádějí u každého modelu maximální plochu, kterou sekačka zvládne udržet za sezónu – tento údaj by měl mít rezervu, protože nepravidelné tvary pozemku, hodně překážek nebo svahy snižují efektivní výkon. Pro pozemek o velikosti 600 m² je rozumné vybrat model deklarovaný na 800 m² a víc.</p>
              <ul>
                <li><strong>Malé zahrady do 500 m²</strong> – stačí základní model s menší baterií a jedním nožovým kotoučem</li>
                <li><strong>Střední zahrady 500–1500 m²</strong> – výkonnější modely s delší výdrží baterie a rychlejším nabíjením</li>
                <li><strong>Velké pozemky nad 1500 m²</strong> – modely s vyšší kapacitou baterie nebo s podporou více nabíjecích cyklů za den</li>
              </ul>
              <p>Svahovitost je druhý klíčový parametr. Běžné modely zvládnou svah do <strong>25–35 %</strong> (orientačně 14–19 stupňů), výkonnější modely s lepším podvozkem a protiskluzovými koly až 45–60 %. Pozemek se svažitými úseky nebo terénními zlomy vyžaduje model s vyšším deklarovaným maximálním sklonem, jinak hrozí prokluzování a nedosekané plochy.</p>
            </section>

            <section id="ohraniceni">
              <h2>Ohraničovací drát vs. GPS a bezdrátové modely</h2>
              <p>Klasický a stále nejrozšířenější způsob ohraničení pozemku je tenký <strong>ohraničovací drát</strong>, který se uloží po obvodu pozemku a kolem všech překážek (záhony, jezírka, stromy), buď přímo na trávník, nebo mírně zahrabaný do hloubky 1–3 cm. Sekačka drát snímá a podle něj se orientuje, kde má a kde nemá sekat.</p>
              <p>Novější modely využívají <strong>GPS navigaci s RTK korekcí</strong> nebo kamerové a senzorové rozpoznávání hranic, takže drát buď zcela odpadá, nebo je potřeba jen u samotné nabíjecí stanice. Tyto bezdrátové systémy se snadněji upravují, pokud se hranice zahrady později změní (nový záhon, rozšíření terasy), protože stačí upravit virtuální mapu v aplikaci místo přemisťování fyzického drátu.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> I u bezdrátových modelů má smysl mít zálohu v podobě fyzických zarážek nebo virtuálních zón v aplikaci kolem jezírka, schodů nebo svahu k vodě – senzorová navigace není stoprocentní a chyba u nebezpečného místa může být nákladná.</div>
            </section>

            <section id="instalace">
              <h2>Instalace nabíjecí stanice</h2>
              <p>Nabíjecí stanice by měla stát na rovném, zpevněném místě, ideálně v polostínu a chráněná před přímým deštěm, například pod malým přístřeškem nebo okapem. Důležité je zajistit volný nájezdový a výjezdový prostor alespoň 2–3 metry rovně před stanicí, aby sekačka mohla bez problémů najet a vyjet.</p>
              <ul>
                <li>Stanice se připojí k elektrické zásuvce s ochranou proti vlhkosti (venkovní zásuvka s krytím alespoň IP44)</li>
                <li>U modelů s drátem se kabel od stanice vede po obvodu pozemku a uzavírá smyčku</li>
                <li>Stanice se nikdy neumísťuje do nejnižšího místa zahrady, kde by se mohla srážet voda nebo stát po dešti</li>
                <li>Vzdálenost prvních 2 metrů od stanice by měla být bez prudkého zatáčení v trase drátu, jinak má sekačka problém přesně najet zpět</li>
              </ul>
            </section>

            <section id="planovani">
              <h2>Plánování trasy sekání a časování</h2>
              <p>Většina aplikací k robotickým sekačkám umožňuje nastavit časová okna, kdy má sekačka pracovat – typicky se doporučuje vynechat brzké ranní a pozdní noční hodiny, kdy je tráva mokrá od rosy nebo kdy by hluk mohl rušit sousedy. Ideální časy jsou dopoledne po oschnutí rosy a odpoledne.</p>
              <p>U modelů s mapováním pozemku lze nastavit i sekání v zónách – například intenzivnější sekání hlavní plochy trávníku a méně časté project na okrajových nebo stinných částech, kde tráva roste pomaleji. Rozumné rozvržení šetří baterii i opotřebení nožů.</p>
            </section>

            <section id="bezpecnost">
              <h2>Bezpečnost – děti a zvířata</h2>
              <p>Moderní robotické sekačky mají senzor zdvihu, který motor nožů okamžitě zastaví, pokud je sekačka nadzvednutá ze země, a nárazový senzor, který sekačku zastaví a odkloní při kontaktu s překážkou. I tak existuje riziko u malých dětí, miminek hrajících si na trávníku nebo drobných domácích zvířat (ježci, malá koťata), která se nemusí stihnout odsunout.</p>
              <ul>
                <li>Nastav sekání na časy, kdy na zahradě jistě nikdo nepobíhá, ideálně v době, kdy je dům prázdný nebo děti ve škole</li>
                <li>Modely s kamerovým rozpoznáváním objektů dokážou identifikovat a objet i menší pohybující se objekty</li>
                <li>Před večerním sekáním (typické aktivní hodiny ježků) zvaž vynechání sekání po setmění</li>
                <li>Vždy zkontroluj trávník před spuštěním sekačky, pokud na zahradě byli malé děti nebo hosté</li>
              </ul>
            </section>

            <section id="udrzba">
              <h2>Zazimování a běžná údržba</h2>
              <h3>Běžná údržba</h3>
              <p>Nože je potřeba pravidelně kontrolovat na ostrost a poškození, malé výměnné žiletky se obvykle mění jednou za sezónu nebo i častěji při intenzivním používání. Spodní část sekačky a kolečka je dobré čistit od nahromaděné trávy přibližně jednou za dva týdny, aby nedocházelo k přetěžování motoru.</p>
              <h3>Zazimování</h3>
              <p>Na konci sezóny se sekačka důkladně očistí, zkontrolují se nože a kryty, baterie se dobije na doporučenou úroveň pro dlouhodobé skladování (obvykle kolem 50 %) a sekačka se uloží na suché, nezamrzající místo, ideálně v garáži nebo sklepě. Ohraničovací drát a nabíjecí stanice mohou v řadě případů zůstat venku přes zimu, pokud to výrobce povoluje – informaci najdeš v manuálu konkrétního modelu.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Před zazimováním si v aplikaci nebo na samotné sekačce zazálohuj nastavení mapy a zón sekání, ať na jaře nemusíš vše zadávat znovu od začátku.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jaký svah zvládne robotická sekačka?", a: "Běžné modely pro domácí použití zvládnou svah do 25–35 % (přibližně 14–19 stupňů), výkonnější modely s lepším protiskluzovým podvozkem až 45–60 %. Před koupí je vždy nutné ověřit maximální deklarovaný sklon u konkrétního modelu a porovnat ho s nejsvažitějším místem na vlastním pozemku." },
                  { q: "Je instalace ohraničovacího drátu nutná u všech modelů?", a: "Ne, novější modely využívají GPS navigaci s RTK korekcí nebo vizuální senzory a drát vůbec nepotřebují, případně jen krátký kabel u nabíjecí stanice. Klasické modely s ohraničovacím drátem jsou ale obvykle levnější a osvědčené, drát se ukládá na povrch nebo zahrabává do mírné hloubky kolem celého pozemku i kolem překážek." },
                  { q: "Je robotická sekačka bezpečná pro děti a domácí zvířata?", a: "Moderní robotické sekačky mají senzory zdvihu a nárazu, které sekačku okamžitě zastaví, pokud je nadzvednutá nebo narazí na překážku. Riziko poranění existuje hlavně u malých dětí a velmi malých zvířat, která se nestihnou odsunout, proto výrobci doporučují nastavit sekání v době, kdy na zahradě nikdo nepobíhá, nebo používat modely s kamerovým rozpoznáváním překážek." },
                  { q: "Jak se robotická sekačka zazimovává?", a: "Na konci sezóny se sekačka důkladně očistí, zkontrolují a případně vymění nože, dobije se baterie na doporučenou úroveň pro skladování a sekačka se uloží na suché místo s nezamrzající teplotou. Nabíjecí stanice a ohraničovací drát mohou v mnoha případech zůstat na zahradě přes zimu, pokud to výrobce povoluje." },
                  { q: "Jak často je nutné měnit nože u robotické sekačky?", a: "Malé výměnné žiletkové nože se u běžně používané sekačky doporučuje měnit přibližně jednou za sezónu nebo i častěji při intenzivním používání a velkém trávníku. Tupé nože netrhají trávu čistě, což zvyšuje riziko plísní a zhoršuje vzhled trávníku." },
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
                <li><a href="#jak-funguje">Jak sekačka funguje</a></li>
                <li><a href="#vyber">Výběr podle pozemku</a></li>
                <li><a href="#ohraniceni">Drát vs. GPS</a></li>
                <li><a href="#instalace">Instalace nabíjecí stanice</a></li>
                <li><a href="#planovani">Plánování sekání</a></li>
                <li><a href="#bezpecnost">Bezpečnost</a></li>
                <li><a href="#udrzba">Zazimování a údržba</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/zahrada" className="sidebar-cat-link">🌿 Zahrada & terasa<span>32 článků →</span></Link>
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
