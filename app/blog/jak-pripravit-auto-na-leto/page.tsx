import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak připravit auto na letní sezónu – kompletní kontrolní seznam",
  description: "Kontrola klimatizace, pneumatik, kapalin a karoserie – co všechno zkontrolovat na autě před letní sezónou.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-pripravit-auto-na-leto" },
  openGraph: { title: "Jak připravit auto na letní sezónu – kompletní kontrolní seznam", description: "Kontrola klimatizace, pneumatik, kapalin a karoserie – co všechno zkontrolovat na autě před letní sezónou.", url: "https://www.domovniguru.cz/blog/jak-pripravit-auto-na-leto", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-12T08:00:00Z", modifiedTime: "2026-06-12T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20p%C5%99ipravit%20auto%20na%20letn%C3%AD%20sez%C3%B3nu%20%E2%80%93%20kompletn%C3%AD%20kontroln%C3%AD%20seznam&cat=blog", width: 1200, height: 630, alt: "Jak připravit auto na letní sezónu – kompletní kontrolní seznam" }] },
  twitter: { card: "summary_large_image", title: "Jak připravit auto na letní sezónu", description: "Kontrola klimatizace, pneumatik, kapalin a karoserie – co všechno zkontrolovat na autě před letní sezónou." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/jak-pripravit-auto-na-leto#article", "headline": "Jak připravit auto na letní sezónu", "datePublished": "2026-06-12T08:00:00Z", "dateModified": "2026-06-12T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["příprava auta na léto", "letní pneumatiky", "klimatizace v autě", "kontrola auta před dovolenou", "letní servis auta"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Sezónní údržba", "item": "https://www.domovniguru.cz/blog/kategorie/sezonni-udrzba" }, { "@type": "ListItem", "position": 4, "name": "Jak připravit auto na letní sezónu", "item": "https://www.domovniguru.cz/blog/jak-pripravit-auto-na-leto" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Kdy je nejlepší čas připravit auto na léto?", "acceptedAnswer": { "@type": "Answer", "text": "Ideální je provést kontrolu v dubnu nebo květnu, ještě před nástupem vysokých teplot a před plánovanou dovolenou. Předejdete tak dlouhým čekacím lhůtám v servisech." } }, { "@type": "Question", "name": "Jak často je potřeba doplňovat chladicí kapalinu?", "acceptedAnswer": { "@type": "Answer", "text": "Chladicí kapalina by se neměla spotřebovávat – pokud hladina klesá, jde zpravidla o únik. Kontrolu hladiny dělejte alespoň jednou za měsíc, kompletní výměnu podle doporučení výrobce, obvykle každé 2–4 roky." } }, { "@type": "Question", "name": "Proč klimatizace v autě nechladí, i když je zapnutá?", "acceptedAnswer": { "@type": "Answer", "text": "Nejčastější příčinou je únik chladiva, znečištěný kabinový filtr nebo vadný kompresor. Pokud klimatizace nechladí dostatečně, doporučujeme nechat zkontrolovat tlak v systému a případně doplnit chladivo v servisu." } }, { "@type": "Question", "name": "Mám si na léto pořídit letní pneumatiky, nebo stačí celoroční?", "acceptedAnswer": { "@type": "Answer", "text": "Letní pneumatiky mají tvrdší směs pryže a lépe odolávají vysokým teplotám, mají kratší brzdnou dráhu a nižší opotřebení v létě. Celoroční pneumatiky jsou kompromisem, ale v létě nedosahují stejných výkonů jako sezónní letní gumy." } }, { "@type": "Question", "name": "Co bych měl zkontrolovat před delší cestou autem na dovolenou?", "acceptedAnswer": { "@type": "Answer", "text": "Před delší cestou zkontrolujte tlak v pneumatikách včetně rezervy, stav brzd, hladiny všech kapalin, funkčnost klimatizace, stáří baterie a zatížení vozu vzhledem k povolené hmotnosti, zejména při tažení vleku nebo střešního boxu." } }] }] };

const RELATED = [
  { title: "Zimní pneumatiky – kdy je nazout a kdy přezout zpět", href: "/blog/zimni-pneumatiky-kdy", read: "4 min" },
  { title: "Jak připravit auto na zimu – karoserie a lak", href: "/blog/auto-na-zimu-karoserie", read: "5 min" },
  { title: "Jak vyčistit kabinový filtr klimatizace", href: "/blog/cistit-filtr-klimatizace", read: "4 min" },
  { title: "Jak vybrat klimatizaci do domu nebo bytu", href: "/blog/jak-vybrat-klimatizaci", read: "6 min" },
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
              <span>Jak připravit auto na letní sezónu</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">❄️ Sezónní údržba</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak připravit auto na letní sezónu</h1>
              <p className="article-lead">S příchodem teplých měsíců potřebuje vaše auto trochu jiné zacházení než v zimě. Funkční klimatizace, správné pneumatiky a kapaliny v pořádku vám ušetří starosti na cestách i o dovolené. Tady je kompletní přehled, co před létem zkontrolovat.</p>
              <div className="article-meta-row"><span>Aktualizováno: 12. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#klimatizace">Kontrola a servis klimatizace</a></li>
                <li><a href="#pneumatiky">Výměna na letní pneumatiky a jejich kontrola</a></li>
                <li><a href="#kapaliny">Kontrola kapalin, baterie a chlazení motoru</a></li>
                <li><a href="#karoserie">Ochrana karoserie a interiéru proti slunci</a></li>
                <li><a href="#dovolena">Příprava na dovolenou autem</a></li>
                <li><a href="#checklist">Praktický kontrolní seznam</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="klimatizace">
              <h2>1. Kontrola a servis klimatizace</h2>
              <p>Po zimě bývá klimatizace nejvíce zanedbanou součástí auta – přes půl roku se prakticky nepoužívala, a to se může projevit sníženým chladicím výkonem nebo nepříjemným zápachem z ventilace.</p>
              <h3>Kabinový filtr</h3>
              <p>Prvním krokem je kontrola a případná výměna kabinového filtru. Zanesený filtr omezuje proudění vzduchu, snižuje chladicí výkon a může být zdrojem zápachu nebo množení bakterií a plísní. Pokud filtr neměníte pravidelně, podívejte se na náš podrobný návod <Link href="/blog/cistit-filtr-klimatizace" style={{ color: "#2a6496", textDecoration: "underline" }}>jak vyčistit kabinový filtr klimatizace</Link> – výměna je otázka pár minut a výrazně zlepší kvalitu vzduchu v kabině.</p>
              <h3>Chladivo a tlak v systému</h3>
              <p>Pokud klimatizace nechladí tak jako dřív, může jít o přirozený únik chladiva – systém ztrácí přibližně 10–15 % chladiva za rok i bez závady. Servis provede kontrolu tlaku, doplnění chladiva a případně dezinfekci výparníku, kde se usazují bakterie způsobující zápach.</p>
              <h3>Test před sezónou</h3>
              <p>Klimatizaci spusťte i v chladnějších dnech, alespoň jednou týdně na 10 minut. Pravidelné spouštění udržuje kompresor a těsnění v dobrém stavu a předchází vysychání mazacích olejů v systému.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Servisní kontrolu klimatizace plánujte na konec zimy nebo začátek jara – v dubnu a v květnu jsou servisy méně vytížené než v červnu, kdy už chce všichni najednou.</div>
            </section>

            <section id="pneumatiky">
              <h2>2. Výměna na letní pneumatiky a jejich kontrola</h2>
              <p>Zimní pneumatiky mají měkčí gumovou směs, která je při vyšších teplotách méně odolná a opotřebovává se rychleji. Letní pneumatiky naopak nabízejí lepší přilnavost, kratší brzdnou dráhu a nižší valivý odpor při teplém počasí. Podrobný harmonogram výměny najdete v článku <Link href="/blog/zimni-pneumatiky-kdy" style={{ color: "#2a6496", textDecoration: "underline" }}>zimní pneumatiky – kdy je nazout a kdy přezout zpět</Link>.</p>
              <h3>Co kontrolovat při výměně</h3>
              <ul>
                <li><strong>Hloubka dezénu</strong> – minimum je 1,6 mm, ale pro bezpečnou jízdu doporučujeme měnit pneumatiky už při 3–4 mm</li>
                <li><strong>Stav bočnic</strong> – praskliny, vyboulení nebo deformace jsou důvodem k okamžité výměně</li>
                <li><strong>Stáří pneumatik</strong> – i nepoužívané pneumatiky stárnou, po 6–8 letech ztrácí pryž pružnost</li>
                <li><strong>Tlak v pneumatikách</strong> – kontrolujte za studena, ideálně jednou měsíčně a před delší cestou</li>
                <li><strong>Vyvážení a geometrie</strong> – po výměně sad zkontrolujte, zda kola nevibrují a auto nestáhuje na stranu</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Sezónní pneumatiky uložené přes zimu uskladněte ve svislé poloze (osobní vozy) nebo zavěšené, mimo přímé sluneční světlo a zdroje tepla – prodloužíte tak jejich životnost.</div>
            </section>

            <section id="kapaliny">
              <h2>3. Kontrola kapalin, baterie a chlazení motoru</h2>
              <p>Vysoké letní teploty výrazně zatěžují motor a chladicí systém. Před sezónou má smysl projít všechny provozní kapaliny i stav baterie.</p>
              <h3>Chladicí kapalina</h3>
              <p>Hladina chladicí kapaliny by neměla v čase klesat – pokud ano, jde nejčastěji o únik v hadicích, chladiči nebo na těsnění. V létě motor pracuje na hranici svého tepelného výkonu, takže nedostatek chladicí kapaliny může vést k přehřátí, zejména v koloně nebo při tažení vleku.</p>
              <h3>Motorový olej a další kapaliny</h3>
              <ul>
                <li><strong>Motorový olej</strong> – kontrola hladiny i stáří, vysoké teploty zvyšují oxidaci oleje</li>
                <li><strong>Brzdová kapalina</strong> – hygroskopická, časem váže vodu a snižuje bod varu, což je nebezpečné při intenzivním brzdění v horku</li>
                <li><strong>Kapalina do ostřikovačů</strong> – v létě je potřeba měnit za letní směs, zimní nemrznoucí směs může zanechávat skvrny</li>
              </ul>
              <h3>Stav baterie</h3>
              <p>Autobaterie trpí spíš v zimě, ale vysoké teploty urychlují vypařování elektrolytu a chemické stárnutí baterie. Zkontrolujte čistotu pólů, dotažení svorek a u starších baterií (4–5 let) i jejich celkový stav v autoservisu.</p>
            </section>

            <section id="karoserie">
              <h2>4. Ochrana karoserie a interiéru proti slunci</h2>
              <p>Silné sluneční záření a vysoké teploty působí nejen na motor, ale i na lak, plasty a interiér vozu.</p>
              <h3>Lak a karoserie</h3>
              <ul>
                <li><strong>Voskování nebo keramická ochrana</strong> – chrání lak před UV zářením, ptačím trusem a mikroprasklinami</li>
                <li><strong>Důkladné umytí po zimě</strong> – odstraní zbytky solí, které v kombinaci s teplem urychlují korozi</li>
                <li><strong>Kontrola gumových těsnění</strong> – sluncem vysušená těsnění dveří a oken praskají a propouští vodu</li>
              </ul>
              <h3>Interiér</h3>
              <ul>
                <li><strong>Ochrana palubní desky</strong> – UV záření způsobuje vysušení a praskání plastů, pomůže parkování ve stínu nebo clona na okna</li>
                <li><strong>Kožené sedačky</strong> – ošetřete impregnací proti vysoušení a praskání kůže</li>
                <li><strong>Tónovací fólie</strong> – snižují tepelnou zátěž v kabině a chrání interiér před UV zářením</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Při parkování na slunci pootevřete okna o pár milimetrů (pokud to počasí dovolí) – sníží se teplota v kabině a omezí se tepelné namáhání palubní desky a plastových dílů.</div>
            </section>

            <section id="dovolena">
              <h2>5. Příprava na dovolenou autem</h2>
              <p>Pokud plánujete dlouhou cestu na dovolenou, vyplatí se věnovat přípravě auta o trochu víc času než při běžném provozu.</p>
              <h3>Zatížení vozu</h3>
              <p>Plně naložené auto s rodinou, zavazadly, případně střešním boxem nebo vlekem má úplně jiné jízdní vlastnosti – delší brzdnou dráhu, vyšší spotřebu a jiné chování v zatáčkách. Zkontrolujte povolenou celkovou hmotnost vozu a rozložte zátěž rovnoměrně, těžší předměty umístěte níž a co nejblíže ke středu vozu.</p>
              <h3>Klimatizace na dlouhé trase</h3>
              <p>Na dlouhých trasách klimatizace zvyšuje spotřebu paliva o přibližně 5–10 %, ale v horkém počasí je z bezpečnostního hlediska nezbytná – únava řidiče v rozpáleném autě roste mnohem rychleji. Před cestou nechte auto pár minut větrat, než klimatizaci nastartujete na plný výkon.</p>
              <h3>Kontrola před cestou</h3>
              <ul>
                <li>Tlak ve všech pneumatikách včetně rezervy nebo sady na dofukování</li>
                <li>Stav brzdových destiček a kotoučů, zejména u vozů s vlekem</li>
                <li>Funkčnost veškerého osvětlení a stěračů</li>
                <li>Platnost povinné výbavy – lékárnička, výstražný trojúhelník, reflexní vesta</li>
                <li>Doklady, dálniční známky nebo vinětky pro cílovou zemi</li>
              </ul>
            </section>

            <section id="checklist">
              <h2>6. Praktický kontrolní seznam</h2>
              <p>Pro rychlou orientaci shrnujeme nejdůležitější body, které byste před letní sezónou neměli vynechat:</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Oblast</th><th>Co zkontrolovat</th><th>Doporučený interval</th></tr></thead>
                  <tbody>
                    <tr><td>Klimatizace</td><td>Kabinový filtr, chladivo, dezinfekce výparníku</td><td>1× ročně, na začátku sezóny</td></tr>
                    <tr><td>Pneumatiky</td><td>Dezén, bočnice, tlak, stáří</td><td>Při sezónní výměně + měsíčně</td></tr>
                    <tr><td>Chladicí kapalina</td><td>Hladina, únik, koncentrace nemrznoucí směsi</td><td>Měsíčně</td></tr>
                    <tr><td>Motorový olej</td><td>Hladina, stáří, výměna podle intervalu výrobce</td><td>Podle servisního plánu</td></tr>
                    <tr><td>Baterie</td><td>Stav pólů, svorky, stáří baterie</td><td>1× ročně</td></tr>
                    <tr><td>Karoserie</td><td>Mytí, voskování, gumová těsnění</td><td>1–2× ročně</td></tr>
                    <tr><td>Interiér</td><td>Ochrana plastů a kůže před UV zářením</td><td>Před sezónou</td></tr>
                    <tr><td>Před dovolenou</td><td>Zatížení, brzdy, povinná výbava, doklady</td><td>Před každou delší cestou</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud nemáte čas projít vše sami, většina autoservisů nabízí balíček „letní prohlídka", který v rámci jedné návštěvy zkontroluje klimatizaci, kapaliny, pneumatiky i baterii.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Kdy je nejlepší čas připravit auto na léto?", a: "Ideální je provést kontrolu v dubnu nebo květnu, ještě před nástupem vysokých teplot a před plánovanou dovolenou. Předejdete tak dlouhým čekacím lhůtám v servisech." },
                  { q: "Jak často je potřeba doplňovat chladicí kapalinu?", a: "Chladicí kapalina by se neměla spotřebovávat – pokud hladina klesá, jde zpravidla o únik. Kontrolu hladiny dělejte alespoň jednou za měsíc, kompletní výměnu podle doporučení výrobce, obvykle každé 2–4 roky." },
                  { q: "Proč klimatizace v autě nechladí, i když je zapnutá?", a: "Nejčastější příčinou je únik chladiva, znečištěný kabinový filtr nebo vadný kompresor. Pokud klimatizace nechladí dostatečně, doporučujeme nechat zkontrolovat tlak v systému a případně doplnit chladivo v servisu." },
                  { q: "Mám si na léto pořídit letní pneumatiky, nebo stačí celoroční?", a: "Letní pneumatiky mají tvrdší směs pryže a lépe odolávají vysokým teplotám, mají kratší brzdnou dráhu a nižší opotřebení v létě. Celoroční pneumatiky jsou kompromisem, ale v létě nedosahují stejných výkonů jako sezónní letní gumy." },
                  { q: "Co bych měl zkontrolovat před delší cestou autem na dovolenou?", a: "Před delší cestou zkontrolujte tlak v pneumatikách včetně rezervy, stav brzd, hladiny všech kapalin, funkčnost klimatizace, stáří baterie a zatížení vozu vzhledem k povolené hmotnosti, zejména při tažení vleku nebo střešního boxu." },
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
                <li><a href="#klimatizace">Kontrola klimatizace</a></li>
                <li><a href="#pneumatiky">Letní pneumatiky</a></li>
                <li><a href="#kapaliny">Kapaliny a baterie</a></li>
                <li><a href="#karoserie">Karoserie a interiér</a></li>
                <li><a href="#dovolena">Příprava na dovolenou</a></li>
                <li><a href="#checklist">Kontrolní seznam</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/sezonni-udrzba" className="sidebar-cat-link">❄️ Sezónní údržba<span>20 článků →</span></Link>
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
