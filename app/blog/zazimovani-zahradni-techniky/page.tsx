import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak zazimovat sekačku a další zahradní techniku",
  description: "Postup zazimování sekačky, křovinořezu a dalšího zahradního nářadí, aby na jaře bez problémů nastartovaly.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/zazimovani-zahradni-techniky" },
  openGraph: { title: "Jak zazimovat sekačku a další zahradní techniku", description: "Postup zazimování sekačky, křovinořezu a dalšího zahradního nářadí, aby na jaře bez problémů nastartovaly.", url: "https://www.domovniguru.cz/blog/zazimovani-zahradni-techniky", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-15T08:00:00Z", modifiedTime: "2026-06-15T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20zazimovat%20seka%C4%8Dku%20a%20dal%C5%A1%C3%AD%20zahradn%C3%AD%20techniku&cat=blog", width: 1200, height: 630, alt: "Jak zazimovat sekačku a další zahradní techniku" }] },
  twitter: { card: "summary_large_image", title: "Jak zazimovat sekačku a další zahradní techniku", description: "Postup zazimování sekačky, křovinořezu a dalšího zahradního nářadí, aby na jaře bez problémů nastartovaly." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/zazimovani-zahradni-techniky#article", "headline": "Jak zazimovat sekačku a další zahradní techniku", "datePublished": "2026-06-15T08:00:00Z", "dateModified": "2026-06-15T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["zazimování sekačky", "zazimování zahradní techniky", "péče o sekačku", "uskladnění sekačky na zimu", "křovinořez zazimování"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Sezónní údržba", "item": "https://www.domovniguru.cz/blog/kategorie/sezonni-udrzba" }, { "@type": "ListItem", "position": 4, "name": "Jak zazimovat sekačku a další zahradní techniku", "item": "https://www.domovniguru.cz/blog/zazimovani-zahradni-techniky" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Musím před zimou vypustit benzín ze sekačky?", "acceptedAnswer": { "@type": "Answer", "text": "Ideálně ano, nebo alespoň přidat stabilizátor paliva. Starý benzín v nádrži se rozkládá, vytváří usazeniny a může ucpat karburátor, takže sekačka na jaře nenastartuje." } }, { "@type": "Question", "name": "Jak se starám o akumulátorovou zahradní techniku přes zimu?", "acceptedAnswer": { "@type": "Answer", "text": "Baterii vyjměte z nářadí, nabijte ji na 40–60 % a uložte na suché místo s teplotou nad bodem mrazu, ideálně 0–20 °C. Plně vybitá nebo zcela nabitá baterie skladovaná v mrazu ztrácí kapacitu." } }, { "@type": "Question", "name": "Jak často mám ostřit nože sekačky?", "acceptedAnswer": { "@type": "Answer", "text": "Jednou ročně, ideálně právě před zazimováním nebo na začátku sezóny. Tupé nože trávu trhají, ne stříhají, což zvyšuje riziko nemocí trávníku a zatěžuje motor." } }, { "@type": "Question", "name": "Kam mám sekačku přes zimu uložit?", "acceptedAnswer": { "@type": "Answer", "text": "Na suché, kryté místo s rovnoměrnou teplotou – garáž, sklep nebo zahradní domek. Vyhněte se vlhkým prostorám bez větrání, kde rychle vzniká koroze a plíseň." } }, { "@type": "Question", "name": "Stačí sekačku jen umyt, nebo je potřeba i mazání?", "acceptedAnswer": { "@type": "Answer", "text": "Umytí je první krok, ale nestačí. Po vyčištění je třeba promazat kloubové a pohyblivé části, ošetřit kovové plochy proti korozi a u benzínových motorů zkontrolovat olej." } }] }] };

const RELATED = [
  { title: "Jak připravit dům na zimu – checklist", href: "/blog/priprava-domu-na-zimu", read: "5 min" },
  { title: "Ochrana rostlin před zimou", href: "/blog/ochrana-rostlin-pred-zimou", read: "4 min" },
  { title: "Zahradní nástroje – péče a údržba", href: "/blog/zahradni-nastroje-pece", read: "4 min" },
  { title: "Jak zazimovat bazén", href: "/blog/zazimovani-bazenu", read: "5 min" },
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
              <span>Jak zazimovat sekačku a další zahradní techniku</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">❄️ Sezónní údržba</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak zazimovat sekačku a další zahradní techniku</h1>
              <p className="article-lead">Sekačka, křovinořez, plotostřih nebo zahradní traktor – na konci sezóny je snadné je jen tak odložit do kouta garáže. Pár desítek minut věnovaných správnému zazimování ale rozhodne, jestli vám na jaře stroj naskočí na první zatažení, nebo strávíte víkend čištěním karburátoru.</p>
              <div className="article-meta-row"><span>Aktualizováno: 15. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#proc-zazimovat">Proč zazimovat zahradní techniku</a></li>
                <li><a href="#cisteni">Čištění sekačky a dalšího nářadí před uskladněním</a></li>
                <li><a href="#motor-palivo">Péče o motor a palivo</a></li>
                <li><a href="#skladovani">Skladování a ochrana proti vlhkosti a korozi</a></li>
                <li><a href="#ostreni">Údržba a ostření nožů</a></li>
                <li><a href="#checklist">Kontrolní seznam před zimou</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="proc-zazimovat">
              <h2>Proč zazimovat zahradní techniku</h2>
              <p>Zahradní technika tráví zimu v klidu, ale to neznamená, že jí neškodí. Zbytky trávy a hlíny váží vlhkost a urychlují korozi kovových částí. Benzín v nádrži a karburátoru se postupně rozkládá, odpařuje lehčí složky a zanechává lepkavé usazeniny, které ucpávají trysky. Tupé nože a nedotažené šrouby se přes zimu nezlepší sami od sebe.</p>
              <p>Pokud podobně jako u <Link href="/blog/priprava-domu-na-zimu" style={{ color: "#2a6496", textDecoration: "underline" }}>přípravy domu na zimu</Link> projdete techniku systematicky podle seznamu, na jaře vám stroje nastartují bez problémů a prodloužíte si jejich životnost o roky.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Zazimování je nejlepší naplánovat hned po poslední sezónní seči nebo úpravě – stroj je ještě teplý, motorový olej se snáz vypouští a vy máte čerstvou paměť, co je potřeba opravit nebo doplnit.</div>
            </section>

            <section id="cisteni">
              <h2>Čištění sekačky a dalšího nářadí před uskladněním</h2>
              <p>Než cokoliv uložíte, důkladně to očistěte. Zbytky trávy přilepené na podvozku, nožích nebo kolem motoru totiž drží vlhkost a jsou hlavní příčinou koroze přes zimu.</p>
              <ul>
                <li><strong>Spodní část sekačky</strong> – seškrabejte usazenou trávu dřevěnou nebo plastovou škrabkou, poté omyjte vodou. U sekaček s funkcí mycí přípojky napojte hadici a spusťte motor na chvíli v chodu.</li>
                <li><strong>Sběrný koš</strong> – vyprázdněte, vyklepejte a nechte úplně vyschnout, jinak v něm přes zimu vznikne plíseň.</li>
                <li><strong>Vzduchový filtr</strong> – vyjměte, vyklepejte nebo vyfoukejte, papírové filtry při silném znečištění vyměňte.</li>
                <li><strong>Křovinořez a plotostřih</strong> – očistěte lišty a nůžky od zbytků rostlin a pryskyřice, otřete olejovým hadříkem.</li>
                <li><strong>Kola a podvozek</strong> – odstraňte nahromaděnou hlínu z náprav a kloubů, aby se nezadřely.</li>
              </ul>
              <p>Při čištění vždy odpojte zapalovací kabel od svíčky (u benzínových strojů) nebo vyjměte baterii (u akumulátorových), abyste předešli neúmyslnému spuštění motoru nebo nožů.</p>
            </section>

            <section id="motor-palivo">
              <h2>Péče o motor a palivo (benzínové vs. akumulátorové stroje)</h2>
              <h3>Benzínové stroje</h3>
              <p>Palivo je největší slabina zazimovaných benzínových strojů. Máte dvě možnosti:</p>
              <ul>
                <li><strong>Vypustit nádrž úplně</strong> – necháte motor běžet, dokud nevyčerpá zbytek paliva a sám se nezastaví. Tím se vyprázdní i karburátor.</li>
                <li><strong>Přidat stabilizátor paliva</strong> – pokud chcete nádrž ponechat plnou (omezí korozi vevnitř), přidejte stabilizátor a nechte motor pár minut běžet, aby se rozvedl celým palivovým systémem.</li>
              </ul>
              <p>Dále zkontrolujte a podle potřeby vyměňte motorový olej – starý olej obsahuje spaliny a kondenzát, které mohou přes zimu poškozovat vnitřní součásti motoru. Vyjměte zapalovací svíčku, zkontrolujte její stav a do otvoru kápněte několik kapek motorového oleje, poté pár otočení ručně protočte motor, aby se olej rozvedl po stěnách válce.</p>
              <h3>Akumulátorové a elektrické stroje</h3>
              <p>Akumulátorová technika je na zazimování jednodušší, ale baterie potřebují svou péči. Vyjměte baterii ze stroje a uložte ji na suchém místě s teplotou ideálně mezi 0 a 20 °C. Nikdy ji neskladujte zcela vybitou ani zcela nabitou – nejlepší je stav kolem 40–60 % kapacity, který udržuje chemii baterie ve stabilním stavu. Jednou za 1–2 měsíce baterii zkontrolujte a případně dobijte.</p>
              <p>U elektrických strojů na kabel zkontrolujte stav přívodního kabelu a zástrčky, případně je uložte stočené bez ostrých zlomů.</p>
            </section>

            <section id="skladovani">
              <h2>Skladování a ochrana proti vlhkosti a korozi</h2>
              <p>Místo uskladnění rozhoduje o tom, v jakém stavu techniku na jaře vytáhnete. Ideální je suchý, krytý a větraný prostor – garáž, sklep nebo zahradní domek s rovnoměrnou teplotou. Vlhké, nevětrané kóje jsou nejčastější příčinou koroze a plísně na textilních součástech (sedáky, kryty).</p>
              <ul>
                <li><strong>Kovové plochy</strong> – ošetřete ochranným olejem nebo sprejem proti korozi, zejména nože, hřídele a nelakované díly.</li>
                <li><strong>Pohyblivé části</strong> – kolové ložiska, výškové nastavení, kloubové spoje u křovinořezů promažte univerzálním mazivem.</li>
                <li><strong>Lakované plochy</strong> – ošetřete voskem na karoserie, zabráníte odprýskávání laku.</li>
                <li><strong>Pneumatiky</strong> – u zahradních traktorů dofoukněte na doporučený tlak, sníží se riziko deformace při dlouhém stání.</li>
                <li><strong>Kryt přes stroj</strong> – pokud technika stojí v garáži s kolísavou teplotou, použijte dýchavý kryt, který chrání před prachem, ale nezadržuje vlhkost.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Nikdy nepřikrývejte techniku neprodyšnou plastovou plachtou přímo na vlhký povrch – kondenzace pod plachtou koroduje kov rychleji, než kdyby stál nepřikrytý.</div>
            </section>

            <section id="ostreni">
              <h2>Údržba a ostření nožů</h2>
              <p>Konec sezóny je nejlepší doba na ostření nožů sekačky – na jaře je pak stroj hned připravený a vy nemusíte řešit servis ve špičce sezóny, kdy bývají dlouhé čekací lhůty.</p>
              <ul>
                <li><strong>Demontáž</strong> – odpojte zapalovací kabel nebo baterii, sekačku položte na bok podle návodu (obvykle s karburátorem nahoru, aby nevytékal olej) a nůž odšroubujte.</li>
                <li><strong>Ostření</strong> – pilníkem nebo bruskou zachovejte původní úhel hrany, broušení provádějte rovnoměrně z obou stran, aby nůž zůstal vyvážený.</li>
                <li><strong>Kontrola vyvážení</strong> – nůž zavěšený na hřebíku nebo šroubováku by měl zůstat v rovnováze. Nevyvážený nůž způsobuje vibrace, které ničí ložiska motoru.</li>
                <li><strong>Kontrola opotřebení</strong> – praskliny, ohnuté hrany nebo výrazné vroubky jsou důvodem k výměně, ne k broušení.</li>
                <li><strong>Montáž</strong> – šrouby dotáhněte na předepsaný moment, povolený nůž je bezpečnostní riziko.</li>
              </ul>
              <p>U křovinořezů a plotostřihů ošetřete stříhací lišty olejem proti korozi a zkontrolujte vůli mezi noži, kterou je obvykle možné seřídit utažením matek podél lišty.</p>
            </section>

            <section id="checklist">
              <h2>Kontrolní seznam před zimou</h2>
              <p>Než techniku odložíte na zimní spánek, projděte tento přehled:</p>
              <ul>
                <li>Sekačka, křovinořez a další nářadí jsou očištěné od trávy, hlíny a zbytků rostlin</li>
                <li>Sběrný koš je vyprázdněný, vymytý a suchý</li>
                <li>Vzduchový filtr je vyčištěný nebo vyměněný</li>
                <li>Benzínová nádrž je vyprázdněná nebo palivo ošetřené stabilizátorem</li>
                <li>Motorový olej je zkontrolovaný, případně vyměněný</li>
                <li>Zapalovací svíčka je zkontrolovaná a válec ošetřený olejem</li>
                <li>Akumulátory jsou vyjmuté, nabité na 40–60 % a uložené v suchu</li>
                <li>Nože jsou nabroušené, vyvážené a řádně dotažené</li>
                <li>Kovové a pohyblivé části jsou ošetřené proti korozi a promazané</li>
                <li>Pneumatiky zahradního traktoru jsou dofouknuté na správný tlak</li>
                <li>Stroje stojí na suchém, krytém a větraném místě</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Musím před zimou vypustit benzín ze sekačky?", a: "Ideálně ano, nebo alespoň přidat stabilizátor paliva. Starý benzín v nádrži se rozkládá, vytváří usazeniny a může ucpat karburátor, takže sekačka na jaře nenastartuje." },
                  { q: "Jak se starám o akumulátorovou zahradní techniku přes zimu?", a: "Baterii vyjměte z nářadí, nabijte ji na 40–60 % a uložte na suché místo s teplotou nad bodem mrazu, ideálně 0–20 °C. Plně vybitá nebo zcela nabitá baterie skladovaná v mrazu ztrácí kapacitu." },
                  { q: "Jak často mám ostřit nože sekačky?", a: "Jednou ročně, ideálně právě před zazimováním nebo na začátku sezóny. Tupé nože trávu trhají, ne stříhají, což zvyšuje riziko nemocí trávníku a zatěžuje motor." },
                  { q: "Kam mám sekačku přes zimu uložit?", a: "Na suché, kryté místo s rovnoměrnou teplotou – garáž, sklep nebo zahradní domek. Vyhněte se vlhkým prostorám bez větrání, kde rychle vzniká koroze a plíseň." },
                  { q: "Stačí sekačku jen umyt, nebo je potřeba i mazání?", a: "Umytí je první krok, ale nestačí. Po vyčištění je třeba promazat kloubové a pohyblivé části, ošetřit kovové plochy proti korozi a u benzínových motorů zkontrolovat olej." },
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
                <li><a href="#proc-zazimovat">Proč zazimovat techniku</a></li>
                <li><a href="#cisteni">Čištění před uskladněním</a></li>
                <li><a href="#motor-palivo">Péče o motor a palivo</a></li>
                <li><a href="#skladovani">Skladování a koroze</a></li>
                <li><a href="#ostreni">Ostření nožů</a></li>
                <li><a href="#checklist">Kontrolní seznam</a></li>
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
