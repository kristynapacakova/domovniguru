import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Rekuperace vs. větrání okny: co je lepší",
  description: "Srovnání řízeného větrání s rekuperací a ručního větrání okny – úspora energie, kvalita vzduchu, vlhkost, náklady a kdy se která varianta vyplatí.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/rekuperace-vs-vetrani-okny" },
  openGraph: { title: "Rekuperace vs. větrání okny: co je lepší", description: "Srovnání řízeného větrání s rekuperací a ručního větrání okny – úspora energie, kvalita vzduchu, vlhkost, náklady a kdy se která varianta vyplatí.", url: "https://www.domovniguru.cz/blog/rekuperace-vs-vetrani-okny", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-07-21T08:00:00Z", modifiedTime: "2026-07-21T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Rekuperace%20vs.%20v%C4%9Btr%C3%A1n%C3%AD%20okny&cat=blog", width: 1200, height: 630, alt: "Rekuperace vs. větrání okny: co je lepší" }] },
  twitter: { card: "summary_large_image", title: "Rekuperace vs. větrání okny: co je lepší", description: "Srovnání řízeného větrání s rekuperací a ručního větrání okny – úspora energie, kvalita vzduchu, vlhkost a náklady." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/rekuperace-vs-vetrani-okny#article", "headline": "Rekuperace vs. větrání okny: co je lepší", "datePublished": "2026-07-21T08:00:00Z", "dateModified": "2026-07-21T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["rekuperace vs větrání", "řízené větrání s rekuperací", "větrání okny", "úspora energie větrání", "kvalita vzduchu byt", "vlhkost v bytě", "rekuperace návratnost"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Sezónní údržba", "item": "https://www.domovniguru.cz/blog/kategorie/sezonni-udrzba" }, { "@type": "ListItem", "position": 4, "name": "Rekuperace vs. větrání okny", "item": "https://www.domovniguru.cz/blog/rekuperace-vs-vetrani-okny" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Kolik energie ušetří rekuperace oproti větrání okny?", "acceptedAnswer": { "@type": "Answer", "text": "Kvalitní rekuperační jednotka zpětně získává 75–90 % tepla z odváděného vzduchu, takže na ohřev čerstvého vzduchu spotřebujete jen zlomek energie oproti větrání okny, kdy teplo uniká pryč. V dobře zatepleném domě může rekuperace snížit náklady na vytápění řádově o 20–40 %. Úspora je tím větší, čím lépe je dům utěsněný a čím chladnější je zima." } }, { "@type": "Question", "name": "Musím při rekuperaci vůbec otevírat okna?", "acceptedAnswer": { "@type": "Answer", "text": "Nemusíte, řízené větrání s rekuperací zajišťuje trvalý přísun čerstvého vzduchu automaticky. V létě nebo pro rychlé provětrání je ale otevření oken samozřejmě možné a vhodné. V přechodných obdobích se často jednotka vypne a větrá se okny, aby se ušetřila elektřina ventilátorů." } }, { "@type": "Question", "name": "Jak často a jak dlouho větrat okny, když rekuperaci nemám?", "acceptedAnswer": { "@type": "Answer", "text": "Nejúčinnější je krátké intenzivní (nárazové) větrání, ideálně průvanem přes protilehlá okna po dobu 5–10 minut, opakované několikrát denně. V zimě větrejte krátce a naplno místo trvale otevřené ventilačky, tím vyměníte vzduch, ale nevychladíte zdivo a nábytek. V koupelně a kuchyni větrejte vždy po sprchování a vaření." } }, { "@type": "Question", "name": "Pomůže rekuperace proti vlhkosti a plísni?", "acceptedAnswer": { "@type": "Answer", "text": "Ano. Trvalý řízený odvod vlhkého vzduchu z koupelny, kuchyně a ložnic udržuje relativní vlhkost v bytě na zdravé úrovni a výrazně snižuje riziko kondenzace a plísně na chladných místech. U větrání okny záleží na disciplíně obyvatel, při nedostatečném větrání se vlhkost hromadí a plíseň se objevuje snadno." } }, { "@type": "Question", "name": "Vyplatí se rekuperace i do staršího bytu bez rekonstrukce?", "acceptedAnswer": { "@type": "Answer", "text": "Do bytu bez možnosti vést rozvody se hodí lokální (decentrální) rekuperační jednotky, které se instalují do obvodové zdi jedné místnosti a nevyžadují potrubní síť. Centrální rekuperace s rozvody se vyplatí hlavně při větší rekonstrukci nebo v novostavbě, kde se potrubí schová do podhledů. V netěsném starém domě s množstvím spár je efekt rekuperace nižší." } }] }] };

const RELATED = [
  { title: "Jak správně větrat byt", href: "/blog/spravne-vetrat-byt", read: "5 min" },
  { title: "Jak se zbavit vlhkosti v bytě", href: "/blog/zbavit-se-vlhkosti-v-byte", read: "5 min" },
  { title: "Jak zateplit dům", href: "/blog/jak-zateplit-dum", read: "7 min" },
  { title: "Údržba rekuperace a ventilace", href: "/blog/udrzba-rekuperace-a-ventilace", read: "6 min" },
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
              <span>Rekuperace vs. větrání okny</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">❄️ Sezónní údržba</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Rekuperace vs. větrání okny</h1>
              <p className="article-lead">Čerstvý vzduch potřebuje každá domácnost, ale způsob, jakým ho zajistíte, zásadně ovlivní účet za vytápění i kvalitu bydlení. Postavíme proti sobě řízené větrání s rekuperací a klasické větrání okny, porovnáme úsporu energie, kvalitu vzduchu, vlhkost, náklady i komfort a poradíme, kdy se která varianta vyplatí.</p>
              <div className="article-meta-row"><span>Aktualizováno: 21. července 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/rekuperace-vs-vetrani-okny" title="Rekuperace vs. větrání okny: co je lepší" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 175" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="175" fill="#f4f8fc"/>
                {[
                  { x:20, icon:"🪟", name:"Větrání okny", price:"Zdarma", use:"Nárazově 5–10 min\nTeplo uniká pryč\nZávisí na disciplíně", color:"#4a90d9" },
                  { x:210, icon:"♻️", name:"Rekuperace", price:"Zpětný zisk tepla", use:"75–90 % tepla zpět\nTrvalý čerstvý vzduch\nÚspora 20–40 %", color:"#5a9e6f" },
                  { x:400, icon:"💧", name:"Vlhkost a plíseň", price:"Prevence", use:"Řízený odvod vlhka\nMéně kondenzace\nZdravé klima", color:"#e07040" },
                  { x:590, icon:"💰", name:"Náklady", price:"Investice vs. 0 Kč", use:"Rekuperace: desítky tis.\nOkna: zdarma\nNávratnost 8–15 let", color:"#9b6fd4" },
                ].map(({x, icon, name, price, use, color}) => (
                  <g key={x} transform={`translate(${x}, 12)`}>
                    <rect x="0" y="0" width="163" height="150" rx="8" fill="#fff" stroke={color} strokeWidth="1.2"/>
                    <text x="81" y="34" textAnchor="middle" fontSize="22">{icon}</text>
                    <text x="81" y="56" textAnchor="middle" fontSize="11" fill={color} fontWeight="700">{name}</text>
                    <text x="81" y="72" textAnchor="middle" fontSize="8" fill="#8a8078">{price}</text>
                    <line x1="10" y1="80" x2="153" y2="80" stroke={color} strokeWidth="0.5" opacity="0.4"/>
                    {use.split('\n').map((l,i) => <text key={i} x="12" y={96+i*13} fontSize="8.5" fill="#3a7e4f">✓ {l}</text>)}
                  </g>
                ))}
                <rect y="158" width="760" height="17" fill="#e0eaf4" opacity="0.5"/>
                <text x="380" y="170" textAnchor="middle" fontSize="8" fill="#3a6a8a" fontWeight="600" letterSpacing="0.06em">♻️ REKUPERACE ŠETŘÍ TEPLO · OKNA JSOU ZDARMA · ROZHODUJE TĚSNOST DOMU A DISCIPLÍNA</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#proc-vetrat">Proč vůbec větrat</a></li>
                <li><a href="#okny">Větrání okny: klady a zápory</a></li>
                <li><a href="#rekuperace">Rekuperace: jak funguje</a></li>
                <li><a href="#srovnani">Přímé srovnání</a></li>
                <li><a href="#kdy-co">Kdy se co vyplatí</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="proc-vetrat">
              <h2>Proč vůbec větrat</h2>
              <p>V uzavřené místnosti stoupá koncentrace oxidu uhličitého, vlhkosti a pachů a hromadí se škodliviny z nábytku i úklidových prostředků. Nadměrná vlhkost navíc kondenzuje na chladných místech a živí plísně. Cílem větrání je vyměnit vydýchaný a vlhký vzduch za čerstvý, ideálně bez zbytečných tepelných ztrát.</p>
              <p>Moderní okna a zateplení domy výrazně utěsnily, takže přirozená výměna vzduchu spárami dnes prakticky nestačí. Právě proto se otázka správného větrání stala tak důležitou, těsný dům bez řízeného přísunu vzduchu snadno trpí vlhkostí. Souvislost mezi vlhkostí a kondenzací rozebíráme v článku <Link href="/blog/zbavit-se-vlhkosti-v-byte" style={{ color: "#2a6496", textDecoration: "underline" }}>jak se zbavit vlhkosti v bytě</Link>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Potřebný objem čerstvého vzduchu pro konkrétní místnost si spočítáte v naší <Link href="/kalkulacky/vymena-vzduchu" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačce výměny vzduchu</Link>. Pomůže vám odhadnout, jak intenzivně je potřeba větrat nebo jak dimenzovat rekuperaci.</div>
            </section>

            <section id="okny">
              <h2>Větrání okny: klady a zápory</h2>
              <p>Otevřené okno je nejjednodušší a nejlevnější způsob výměny vzduchu, nestojí nic a nevyžaduje žádné zařízení. Má však dvě zásadní slabiny: uniká jím teplo a jeho účinnost stojí a padá s tím, jak často a správně větráte.</p>
              <h3>Jak větrat okny správně</h3>
              <ul>
                <li><strong>Nárazově a naplno,</strong> ideálně průvanem přes protilehlá okna po dobu 5–10 minut</li>
                <li><strong>Několikrát denně,</strong> hlavně ráno, po vaření a po sprchování</li>
                <li><strong>V zimě krátce,</strong> místo trvale pootevřené ventilačky, která jen vychlazuje zdivo a plýtvá teplem</li>
              </ul>
              <p>Podrobný návod na správnou techniku najdete v článku <Link href="/blog/spravne-vetrat-byt" style={{ color: "#2a6496", textDecoration: "underline" }}>jak správně větrat byt</Link>. Hlavní nevýhodou zůstává, že při každém větrání v zimě vyhodíte teplo z místnosti ven, a že celý systém závisí na tom, zda na větrání nezapomenete.</p>
            </section>

            <section id="rekuperace">
              <h2>Rekuperace: jak funguje</h2>
              <p>Řízené větrání s rekuperací je systém, který nepřetržitě odvádí vydýchaný vzduch z koupelny, kuchyně a záchodu a přivádí čerstvý vzduch do obytných místností. Klíčem je výměník tepla: odcházející teplý vzduch v něm předá většinu své tepelné energie přicházejícímu studenému vzduchu, aniž by se oba proudy smíchaly.</p>
              <h3>Co rekuperace přináší</h3>
              <ul>
                <li><strong>Zpětný zisk tepla 75–90 %,</strong> čerstvý vzduch tak přichází předehřátý a topení má výrazně méně práce</li>
                <li><strong>Trvale čerstvý vzduch</strong> bez nutnosti na cokoli myslet a bez hluku z ulice</li>
                <li><strong>Filtrace</strong> pylu a prachu, výhoda hlavně pro alergiky</li>
                <li><strong>Řízený odvod vlhkosti,</strong> který drží zdravé vnitřní klima</li>
              </ul>
              <p>Rekuperace ale není bezúdržbová, filtry a výměník potřebují pravidelnou péči, jinak klesá výkon i kvalita vzduchu. Postup rozebíráme v článku <Link href="/blog/udrzba-rekuperace-a-ventilace" style={{ color: "#2a6496", textDecoration: "underline" }}>jak udržovat rekuperaci a ventilaci</Link>.</p>
              <div className="article-tip"><strong>⚠️ Pozor:</strong> Skutečná úspora rekuperace závisí na těsnosti domu. V dobře zatepleném a utěsněném domě dává největší smysl, zatímco v netěsné starší stavbě s množstvím spár uniká vzduch mimo systém a efekt se snižuje. Rekuperace proto jde ruku v ruce se <Link href="/blog/jak-zateplit-dum" style={{ color: "#2a6496", textDecoration: "underline" }}>zateplením domu</Link>.</div>
            </section>

            <section id="srovnani">
              <h2>Přímé srovnání</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead>
                    <tr><th>Hledisko</th><th>Větrání okny</th><th>Rekuperace</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Pořizovací cena</td><td>0 Kč</td><td>Desítky tisíc až statisíce Kč</td></tr>
                    <tr><td>Tepelné ztráty</td><td>Vysoké (teplo uniká)</td><td>Nízké (75–90 % zpět)</td></tr>
                    <tr><td>Kvalita vzduchu</td><td>Kolísá, závisí na disciplíně</td><td>Trvale vysoká</td></tr>
                    <tr><td>Filtrace pylu a prachu</td><td>Ne</td><td>Ano</td></tr>
                    <tr><td>Provozní náklady</td><td>Nepřímé (únik tepla)</td><td>Elektřina ventilátorů + filtry</td></tr>
                    <tr><td>Údržba</td><td>Žádná</td><td>Filtry a výměník pravidelně</td></tr>
                    <tr><td>Vhodné pro</td><td>Každý byt hned</td><td>Novostavby a rekonstrukce</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Z tabulky je vidět, že nejde o souboj, kde jedna varianta vždy vyhrává. Okna jsou dostupná okamžitě a zdarma, rekuperace nabízí komfort a úsporu tepla výměnou za investici a údržbu.</p>
            </section>

            <section id="kdy-co">
              <h2>Kdy se co vyplatí</h2>
              <ul>
                <li><strong>Novostavba nebo velká rekonstrukce:</strong> jednoznačně centrální rekuperace, rozvody schováte do podhledů a využijete plný potenciál úspory</li>
                <li><strong>Zateplený těsný byt bez možnosti rozvodů:</strong> zvažte lokální (decentrální) rekuperační jednotky do obvodové zdi</li>
                <li><strong>Starší netěsný dům:</strong> často stačí důsledné nárazové větrání okny, dokud neproběhne zateplení</li>
                <li><strong>Alergici a rušná lokalita:</strong> rekuperace s filtrací výrazně zlepší kvalitu života</li>
              </ul>
              <p>Ať už zvolíte cokoliv, platí, že špatné nebo nedostatečné větrání se vždy projeví vlhkostí a plísní. Pokud řešíte vlhké zdi, podívejte se také na článek o <Link href="/blog/zbavit-se-vlhkosti-v-byte" style={{ color: "#2a6496", textDecoration: "underline" }}>vlhkosti v bytě</Link>, kde větrání navazuje na další opatření.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> I s rekuperací se vyplatí přes léto vypnout jednotku a večer vyvětrat okny, ušetříte elektřinu ventilátorů a využijete chladnějšího nočního vzduchu. Obě metody se tak nevylučují, ale doplňují.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Kolik energie ušetří rekuperace oproti větrání okny?", a: "Kvalitní rekuperační jednotka zpětně získává 75–90 % tepla z odváděného vzduchu, takže na ohřev čerstvého vzduchu spotřebujete jen zlomek energie oproti větrání okny, kdy teplo uniká pryč. V dobře zatepleném domě může rekuperace snížit náklady na vytápění řádově o 20–40 %. Úspora je tím větší, čím lépe je dům utěsněný a čím chladnější je zima." },
                  { q: "Musím při rekuperaci vůbec otevírat okna?", a: "Nemusíte, řízené větrání s rekuperací zajišťuje trvalý přísun čerstvého vzduchu automaticky. V létě nebo pro rychlé provětrání je ale otevření oken samozřejmě možné a vhodné. V přechodných obdobích se často jednotka vypne a větrá se okny, aby se ušetřila elektřina ventilátorů." },
                  { q: "Jak často a jak dlouho větrat okny, když rekuperaci nemám?", a: "Nejúčinnější je krátké intenzivní (nárazové) větrání, ideálně průvanem přes protilehlá okna po dobu 5–10 minut, opakované několikrát denně. V zimě větrejte krátce a naplno místo trvale otevřené ventilačky, tím vyměníte vzduch, ale nevychladíte zdivo a nábytek. V koupelně a kuchyni větrejte vždy po sprchování a vaření." },
                  { q: "Pomůže rekuperace proti vlhkosti a plísni?", a: "Ano. Trvalý řízený odvod vlhkého vzduchu z koupelny, kuchyně a ložnic udržuje relativní vlhkost v bytě na zdravé úrovni a výrazně snižuje riziko kondenzace a plísně na chladných místech. U větrání okny záleží na disciplíně obyvatel, při nedostatečném větrání se vlhkost hromadí a plíseň se objevuje snadno." },
                  { q: "Vyplatí se rekuperace i do staršího bytu bez rekonstrukce?", a: "Do bytu bez možnosti vést rozvody se hodí lokální (decentrální) rekuperační jednotky, které se instalují do obvodové zdi jedné místnosti a nevyžadují potrubní síť. Centrální rekuperace s rozvody se vyplatí hlavně při větší rekonstrukci nebo v novostavbě, kde se potrubí schová do podhledů. V netěsném starém domě s množstvím spár je efekt rekuperace nižší." },
                ].map(({ q, a }) => (
                  <details key={q} className="faq-item">
                    <summary className="faq-q">{q}</summary>
                    <p className="faq-a">{a}</p>
                  </details>
                ))}
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/rekuperace-vs-vetrani-okny" title="Rekuperace vs. větrání okny: co je lepší" />

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
                <li><a href="#proc-vetrat">Proč vůbec větrat</a></li>
                <li><a href="#okny">Větrání okny</a></li>
                <li><a href="#rekuperace">Rekuperace</a></li>
                <li><a href="#srovnani">Přímé srovnání</a></li>
                <li><a href="#kdy-co">Kdy se co vyplatí</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/sezonni-udrzba" className="sidebar-cat-link">❄️ Sezónní údržba<span>36 článků →</span></Link>
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
        .hero-illustration { margin: 28px 0 36px; border-radius: 12px; overflow: hidden; border: 1px solid var(--border); }
        .hero-svg { width: 100%; height: auto; display: block; }
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
