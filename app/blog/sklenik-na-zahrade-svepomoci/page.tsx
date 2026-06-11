import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak vybudovat skleník na zahradě svépomocí",
  description: "Typy skleníků, výběr materiálu, umístění na zahradě a postup stavby svépomocí krok za krokem.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/sklenik-na-zahrade-svepomoci" },
  openGraph: { title: "Jak vybudovat skleník na zahradě svépomocí", description: "Typy skleníků, výběr materiálu, umístění a postup stavby krok za krokem.", url: "https://www.domovniguru.cz/blog/sklenik-na-zahrade-svepomoci", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2025-02-01T08:00:00Z", modifiedTime: "2026-06-04T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20vybudovat%20skleník%20na%20zahradě%20svépomocí&cat=blog", width: 1200, height: 630, alt: "Jak vybudovat skleník na zahradě svépomocí" }] },
  twitter: { card: "summary_large_image", title: "Jak vybudovat skleník na zahradě svépomocí", description: "Typy skleníků, výběr materiálu, umístění a postup stavby krok za krokem." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/sklenik-na-zahrade-svepomoci#article", "headline": "Jak vybudovat skleník na zahradě svépomocí", "datePublished": "2025-02-01T08:00:00Z", "dateModified": "2026-06-04T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["skleník na zahradě", "stavba skleníku svépomocí", "polykarbonátový skleník", "foliovník", "umístění skleníku"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Zahrada & terasa", "item": "https://www.domovniguru.cz/blog/kategorie/zahrada" }, { "@type": "ListItem", "position": 4, "name": "Skleník na zahradě svépomocí", "item": "https://www.domovniguru.cz/blog/sklenik-na-zahrade-svepomoci" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jaký skleník je nejlepší pro začátečníky?", "acceptedAnswer": { "@type": "Answer", "text": "Pro začátečníky je nejvhodnější skládaný hliníkový skleník s polykarbonátovou výplní. Montáž zvládnou dva lidé za víkend, materiál je lehký, dobře izoluje a má dlouhou životnost bez nutnosti pravidelné údržby." } }, { "@type": "Question", "name": "Potřebuji ke skleníku stavební povolení?", "acceptedAnswer": { "@type": "Answer", "text": "Menší zahradní skleníky do 25 m² zastavěné plochy a do 5 m výšky obvykle stavební povolení ani ohlášení nevyžadují, pokud splňují odstupové vzdálenosti od hranic pozemku. U větších staveb nebo skleníků pevně spojených se zemí je vhodné ověřit požadavky na místním stavebním úřadě." } }, { "@type": "Question", "name": "Jaká je nejlepší orientace skleníku ke světovým stranám?", "acceptedAnswer": { "@type": "Answer", "text": "Ideální je orientace delší stranou ve směru východ-západ, díky čemuž skleník zachytí maximum slunečního světla po celý den. U menších skleníků není orientace tak kritická, důležitější je umístění na nejslunnější místo zahrady bez stínu stromů a budov." } }, { "@type": "Question", "name": "Skleno, polykarbonát, nebo fólie – co zvolit?", "acceptedAnswer": { "@type": "Answer", "text": "Sklo propouští nejvíce světla, ale je těžké a křehké. Polykarbonát je odolný, lehký a dobře izoluje – nejvyváženější volba pro většinu zahrad. Fólie je nejlevnější varianta vhodná na pár sezón, ale má nejkratší životnost (2–4 roky) a nejhorší izolační vlastnosti." } }, { "@type": "Question", "name": "Jak skleník připravit na zimu?", "acceptedAnswer": { "@type": "Answer", "text": "Před zimou skleník důkladně vyčistěte, opravte poškozené panely a těsnění, zajistěte odklízení sněhu ze střechy kvůli zatížení konstrukce a u nevytápěných skleníků chraňte citlivé rostliny netkanou textilií nebo je přesuňte do interiéru." } }] }] };

const RELATED = [
  { title: "Kalkulačka osiva – kolik semen potřebujete", href: "/kalkulacky/kolik-osiva", read: "2 min" },
  { title: "Jak pěstovat rajčata – kompletní návod", href: "/blog/jak-pestovat-rajcata", read: "6 min" },
  { title: "Vyvýšený záhon – postup stavby krok za krokem", href: "/blog/vyvyseny-zahon-postup", read: "5 min" },
  { title: "Jak navrhnout zahradu od základu", href: "/blog/jak-navrhnout-zahradu", read: "7 min" },
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
              <span>Skleník na zahradě svépomocí</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak vybudovat skleník na zahradě svépomocí</h1>
              <p className="article-lead">Vlastní skleník prodlouží pěstební sezónu o několik měsíců a otevře vám možnost pěstovat rajčata, papriky nebo bylinky i v chladnějších měsících. Stavba zvládnutelná svépomocí přitom nemusí stát majlant – stačí zvolit správný typ, materiál a umístění.</p>
              <div className="article-meta-row"><span>Aktualizováno: 11. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#typy">Typy skleníků pro zahradu</a></li>
                <li><a href="#materialy">Výběr materiálu krytiny</a></li>
                <li><a href="#umisteni">Velikost a umístění na zahradě</a></li>
                <li><a href="#zaklady">Příprava základů</a></li>
                <li><a href="#montaz">Postup montáže krok za krokem</a></li>
                <li><a href="#vybaveni">Vybavení a údržba</a></li>
                <li><a href="#pestovani">Co a kdy ve skleníku pěstovat</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="typy">
              <h2>Typy skleníků pro zahradu</h2>
              <p>Než začnete plánovat stavbu, vyberte si typ konstrukce, který odpovídá vašim potřebám, rozpočtu a velikosti pozemku. Na trhu se nejčastěji setkáte se třemi variantami.</p>
              <h3>Skládaný hliníkový skleník s polykarbonátem</h3>
              <p>Nejrozšířenější varianta pro zahrady rodinných domů. Konstrukce z hliníkových profilů je lehká, nekoroduje a panely z polykarbonátu se montují relativně snadno. Skládá se podle návodu jako velká stavebnice – dva lidé zvládnou menší model za jeden až dva víkendy.</p>
              <h3>Dřevěný foliovník</h3>
              <p>Levnější a jednodušší řešení, vhodné zejména jako dočasné nebo sezónní krytí. Konstrukci z dřevěných latí nebo trubek překryjete zahradní fólií. Životnost fólie je omezená, ale pořizovací náklady jsou nejnižší ze všech variant.</p>
              <h3>Vyzděný skleník</h3>
              <p>Nejnáročnější, ale zároveň nejtrvanlivější varianta. Spodní část tvoří zděná nebo betonová podezdívka, na kterou se osazuje konstrukce s prosklením. Hodí se pro celoroční pěstování a kombinaci s vytápěním, vyžaduje ale základy a stavební práce odpovídající menší stavbě.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pro první skleník na zahradě je nejlepší volbou skládaný hliníkový model s polykarbonátem – kombinuje nízkou pořizovací cenu, snadnou montáž i bez stavebních zkušeností a dostatečnou životnost.</div>
            </section>

            <section id="materialy">
              <h2>Výběr materiálu krytiny</h2>
              <p>Materiál krytiny ovlivňuje propustnost světla, izolační vlastnosti i celkovou životnost skleníku. Porovnání tří nejběžnějších možností:</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Materiál</th><th>Propustnost světla</th><th>Izolace</th><th>Životnost</th><th>Cena</th></tr></thead>
                  <tbody>
                    <tr><td>Sklo</td><td>90–92 %</td><td>Nízká</td><td>20+ let</td><td>Vysoká</td></tr>
                    <tr><td>Polykarbonát (komůrkový)</td><td>80–85 %</td><td>Vysoká</td><td>10–15 let</td><td>Střední</td></tr>
                    <tr><td>Zahradní fólie</td><td>85–90 %</td><td>Nízká</td><td>2–4 roky</td><td>Nízká</td></tr>
                  </tbody>
                </table>
              </div>
              <h3>Sklo</h3>
              <p>Propouští nejvíce světla a vypadá esteticky, ale je těžké, křehké a hůř izoluje teplo. Vyžaduje robustnější konstrukci a opatrnost při montáži – při krupobití nebo nárazu se snadno rozbije.</p>
              <h3>Polykarbonát</h3>
              <p>Komůrkové desky z polykarbonátu jsou kompromisem mezi cenou, hmotností a izolací. Vzduchové komůrky uvnitř desky fungují jako tepelná izolace, takže skleník udrží teplo lépe než sklo i fólie. Navíc je odolný proti nárazu a kroupám, což oceníte hlavně u větších konstrukcí.</p>
              <h3>Zahradní fólie</h3>
              <p>Nejlevnější řešení vhodné na pár sezón nebo jako provizorní krytí. UV stabilizovaná fólie vydrží 2–4 roky, poté ztrácí pružnost a praská. Hodí se spíš pro foliovníky a dočasné konstrukce než pro skleník, který má sloužit roky.</p>
            </section>

            <section id="umisteni">
              <h2>Velikost a umístění na zahradě</h2>
              <p>Správné umístění rozhoduje o tom, jak efektivně bude skleník fungovat. Zvažte následující kritéria ještě před nákupem.</p>
              <h3>Orientace ke světovým stranám</h3>
              <p>U menších skleníků (do 6 m²) není orientace kritická – důležitější je umístit konstrukci na nejslunnější místo zahrady, kam dopadá slunce co nejdéle během dne. U větších skleníků je výhodné orientovat delší stranu ve směru východ-západ, díky čemuž rostliny dostanou rovnoměrné osvětlení po celý den.</p>
              <h3>Odvodnění pozemku</h3>
              <p>Vyhněte se místům, kde se po dešti drží voda nebo kam stéká voda ze svahu. Stojatá voda kolem základů poškozuje konstrukci a v interiéru zvyšuje vlhkost na úroveň, která podporuje plísně a hniloby. Pokud je pozemek rovinatý, zvažte mírné vyvýšení místa pod skleníkem o 5–10 cm pomocí štěrkového podsypu.</p>
              <h3>Blízkost vody a elektřiny</h3>
              <p>Při plánování umístění myslete i na praktickou stránku provozu. Pokud chcete řešit zavlažování nebo osvětlení, vyplatí se umístit skleník v dosahu vodovodní přípojky a elektrické zásuvky – dodatečné natahování kabelů a hadic přes celou zahradu je nepohodlné a méně bezpečné.</p>
              <p>Při plánování osázení skleníku vám pomůže <Link href="/kalkulacky/kolik-osiva" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačku osiva</Link>, která podle plochy záhonů spočítá, kolik semen jednotlivých druhů zeleniny budete potřebovat.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Nechejte kolem skleníku alespoň 50–60 cm volného prostoru ze všech stran. Usnadní to údržbu, čištění panelů i otevírání bočních oken pro větrání.</div>
            </section>

            <section id="zaklady">
              <h2>Příprava základů</h2>
              <p>Pevný a rovný podklad je základem stability celé konstrukce. Volba typu základů závisí na velikosti a hmotnosti skleníku.</p>
              <h3>Zatravňovací dlaždice nebo štěrkový podklad</h3>
              <p>Pro lehčí skládané skleníky postačí vyrovnaná plocha pokrytá zatravňovacími dlaždicemi nebo zhutněným štěrkovým ložem o tloušťce 10–15 cm. Toto řešení zajišťuje dobré odvodnění a zabraňuje prorůstání plevele dovnitř skleníku.</p>
              <h3>Betonový rám</h3>
              <p>U větších a těžších konstrukcí je vhodný obvodový betonový základ – tzv. základový rám. Vykopete rýhu hlubokou 30–40 cm po celém obvodu skleníku, vyplníte ji betonem vyztuženým kari sítí a necháte vytvrdnout minimálně 7 dní před montáží konstrukce. Rám zajistí pevné kotvení a zabrání prosakování vody pod stěny.</p>
              <h3>Kotvení konstrukce</h3>
              <p>Hliníkové i dřevěné konstrukce se ke spodní hraně kotví pomocí ocelových kotev nebo L-profilů zabetonovaných do základu, případně pomocí zemních vrutů u lehčích modelů. Kvalitní kotvení je klíčové – nezakotvený skleník může silný vítr doslova odnést.</p>
            </section>

            <section id="montaz">
              <h2>Postup montáže krok za krokem</h2>
              <p>Samotná montáž skládaného skleníku probíhá ve standardizovaných krocích, které se u většiny modelů příliš neliší.</p>
              <ul>
                <li><strong>1. Příprava a vytyčení plochy</strong> – přeneste rozměry skleníku na pozemek pomocí provázků a kolíků, zkontrolujte úhlopříčky pro pravoúhlost</li>
                <li><strong>2. Příprava základů</strong> – dle zvoleného typu (dlaždice, štěrk, betonový rám) a vyčkání na vytvrdnutí betonu</li>
                <li><strong>3. Sestavení podlahového rámu</strong> – první díl, který se kotví k základům a tvoří obvod celé stavby</li>
                <li><strong>4. Montáž svislých sloupků a štítů</strong> – sestavení nosné konstrukce stěn a čelních stran se dveřním otvorem</li>
                <li><strong>5. Sestavení střešní konstrukce</strong> – montáž krokví a hřebenové lišty, ideálně za pomoci druhé osoby</li>
                <li><strong>6. Osazení panelů krytiny</strong> – postupné zasouvání polykarbonátových desek nebo skleněných tabulí do profilů, od spodních řad směrem nahoru</li>
                <li><strong>7. Montáž dveří a oken</strong> – osazení posuvných nebo otočných dveří a větracích oken do připravených otvorů</li>
                <li><strong>8. Utěsnění spojů</strong> – aplikace těsnicích profilů a případně silikonu na kritická místa proti zatékání</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Montáž neprovádějte za silného větru – velké panely fungují jako plachta a snadno se s nimi nedá manipulovat ani ve dvou lidech. Ideální je bezvětrný den s teplotou nad 10 °C, kdy je polykarbonát i fólie pružnější.</div>
            </section>

            <section id="vybaveni">
              <h2>Vybavení a údržba přes zimu</h2>
              <h3>Regály a uspořádání prostoru</h3>
              <p>Police a regály po stranách skleníku využijete k pěstování sazenic v truhlících nebo k uložení nářadí a hnojiv. Vyšší regály umístěte na severní stranu, aby nestínily nižším rostlinám na záhonech.</p>
              <h3>Zavlažování</h3>
              <p>Pro pravidelné zalévání se osvědčí kapénková závlaha napojená na sud s dešťovou vodou nebo na zahradní rozvod. Automatický systém s časovačem ušetří čas zejména v období dovolených, kdy by rostliny ve skleníku bez zálivky rychle uvadly.</p>
              <h3>Větrání</h3>
              <p>Bez dostatečného větrání teplota uvnitř skleníku za slunečného dne snadno přesáhne 40 °C, což rostlinám škodí. Boční a střešní okna by měla pokrývat alespoň 15–20 % plochy stěn a střechy. U menších skleníků pomohou automatické otvírače oken reagující na teplotu bez potřeby elektřiny.</p>
              <h3>Stínění</h3>
              <p>V létě chrání rostliny před spálením stínicí tkanina nebo nátěr na bázi vápna nanesený na vnější stranu krytiny. Stínění snižuje intenzitu světla o 30–50 % a zároveň pomáhá udržet nižší teplotu uvnitř.</p>
              <h3>Údržba přes zimu</h3>
              <p>Před zimou skleník důkladně vyčistěte – zbavíte se tak přezimujících škůdců a plísní. Zkontrolujte těsnění panelů a opravte poškozená místa, kterými by mohl unikat teplo nebo zatékat voda. U nevytápěných skleníků pravidelně odklízejte sníh ze střechy, aby konstrukci nepřetížil. Citlivější rostliny přes zimu zakryjte netkanou textilií nebo je přemístěte do interiéru.</p>
            </section>

            <section id="pestovani">
              <h2>Co a kdy ve skleníku pěstovat</h2>
              <p>Skleník umožňuje začít sezónu o 4–6 týdnů dříve a prodloužit ji na podzim o stejnou dobu. Typický harmonogram vypadá takto:</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Plodina</th><th>Výsev/výsadba</th><th>Sklizeň</th></tr></thead>
                  <tbody>
                    <tr><td>Rajčata</td><td>Březen – sazenice, duben – výsadba</td><td>Červenec – říjen</td></tr>
                    <tr><td>Papriky a chilli</td><td>Únor – sazenice, duben – výsadba</td><td>Srpen – říjen</td></tr>
                    <tr><td>Okurky</td><td>Duben – výsadba</td><td>Červenec – září</td></tr>
                    <tr><td>Saláty a ředkvičky</td><td>Únor – březen, srpen – září</td><td>Duben, říjen – listopad</td></tr>
                    <tr><td>Bylinky (bazalka, koriandr)</td><td>Březen – duben</td><td>Květen – říjen</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Na pěstování rajčat ve skleníku se podrobně zaměřuje náš návod <Link href="/blog/jak-pestovat-rajcata" style={{ color: "#2a6496", textDecoration: "underline" }}>jak pěstovat rajčata</Link>, kde najdete tipy na výsadbu, hnojení i řešení nejčastějších problémů. Pokud teprve plánujete uspořádání záhonů, mrkněte také na náš návod na <Link href="/blog/vyvyseny-zahon-postup" style={{ color: "#2a6496", textDecoration: "underline" }}>stavbu vyvýšeného záhonu</Link>, který se výborně kombinuje i s prostorem uvnitř skleníku.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jaký skleník je nejlepší pro začátečníky?", a: "Pro začátečníky je nejvhodnější skládaný hliníkový skleník s polykarbonátovou výplní. Montáž zvládnou dva lidé za víkend, materiál je lehký, dobře izoluje a má dlouhou životnost bez nutnosti pravidelné údržby." },
                  { q: "Potřebuji ke skleníku stavební povolení?", a: "Menší zahradní skleníky do 25 m² zastavěné plochy a do 5 m výšky obvykle stavební povolení ani ohlášení nevyžadují, pokud splňují odstupové vzdálenosti od hranic pozemku. U větších staveb nebo skleníků pevně spojených se zemí je vhodné ověřit požadavky na místním stavebním úřadě." },
                  { q: "Jaká je nejlepší orientace skleníku ke světovým stranám?", a: "Ideální je orientace delší stranou ve směru východ-západ, díky čemuž skleník zachytí maximum slunečního světla po celý den. U menších skleníků není orientace tak kritická, důležitější je umístění na nejslunnější místo zahrady bez stínu stromů a budov." },
                  { q: "Sklo, polykarbonát, nebo fólie – co zvolit?", a: "Sklo propouští nejvíce světla, ale je těžké a křehké. Polykarbonát je odolný, lehký a dobře izoluje – nejvyváženější volba pro většinu zahrad. Fólie je nejlevnější varianta vhodná na pár sezón, ale má nejkratší životnost (2–4 roky) a nejhorší izolační vlastnosti." },
                  { q: "Jak skleník připravit na zimu?", a: "Před zimou skleník důkladně vyčistěte, opravte poškozené panely a těsnění, zajistěte odklízení sněhu ze střechy kvůli zatížení konstrukce a u nevytápěných skleníků chraňte citlivé rostliny netkanou textilií nebo je přesuňte do interiéru." },
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
                <li><a href="#typy">Typy skleníků</a></li>
                <li><a href="#materialy">Výběr materiálu</a></li>
                <li><a href="#umisteni">Velikost a umístění</a></li>
                <li><a href="#zaklady">Příprava základů</a></li>
                <li><a href="#montaz">Postup montáže</a></li>
                <li><a href="#vybaveni">Vybavení a údržba</a></li>
                <li><a href="#pestovani">Co a kdy pěstovat</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/zahrada" className="sidebar-cat-link">🌿 Zahrada & terasa<span>20 článků →</span></Link>
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
