import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak obnovit fasádu domu novým nátěrem bez nového zateplení",
  description: "Kdy stačí jen přemalovat fasádu, jak ji připravit a jaký typ fasádní barvy vybrat pro dlouhou životnost.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/obnova-fasady-naterem" },
  openGraph: { title: "Jak obnovit fasádu domu novým nátěrem bez nového zateplení", description: "Kdy stačí jen přemalovat fasádu, jak ji připravit a jaký typ barvy vybrat pro dlouhou životnost.", url: "https://www.domovniguru.cz/blog/obnova-fasady-naterem", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-12T08:00:00Z", modifiedTime: "2026-06-12T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20obnovit%20fas%C3%A1du%20domu%20nov%C3%BDm%20n%C3%A1t%C4%9Brem%20bez%20nov%C3%A9ho%20zateplen%C3%AD&cat=blog", width: 1200, height: 630, alt: "Jak obnovit fasádu domu novým nátěrem bez nového zateplení" }] },
  twitter: { card: "summary_large_image", title: "Jak obnovit fasádu domu novým nátěrem bez nového zateplení", description: "Kdy stačí jen přemalovat fasádu, jak ji připravit a jaký typ barvy vybrat pro dlouhou životnost." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/obnova-fasady-naterem#article", "headline": "Jak obnovit fasádu domu novým nátěrem bez nového zateplení", "datePublished": "2026-06-12T08:00:00Z", "dateModified": "2026-06-12T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["obnova fasády", "nátěr fasády", "oprava fasády", "fasádní barva na starou fasádu", "čištění fasády před nátěrem"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Malování & barvy", "item": "https://www.domovniguru.cz/blog/kategorie/malovani" }, { "@type": "ListItem", "position": 4, "name": "Jak obnovit fasádu domu novým nátěrem bez nového zateplení", "item": "https://www.domovniguru.cz/blog/obnova-fasady-naterem" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jak poznám, že stačí fasádu jen přemalovat?", "acceptedAnswer": { "@type": "Answer", "text": "Pokud je omítka pevná, nepraská do hloubky, neodpadává a izolace domu vám vyhovuje, stačí fasádu očistit, ošetřit proti plísním, opravit drobné trhliny a natřít novou barvou. Pokud se omítka odlupuje ve velkých plochách, je za ní vlhko nebo uvažujete o zateplení, samotný nátěr problém nevyřeší." } }, { "@type": "Question", "name": "Jak dlouho vydrží nový nátěr fasády?", "acceptedAnswer": { "@type": "Answer", "text": "Při kvalitní přípravě a vhodné barvě vydrží silikonový nátěr 12–15 let, akrylátový 7–10 let a minerální 5–8 let. Životnost zkracuje špatná příprava podkladu, malování na vlhko nebo zanedbaná údržba okolí (okapy, parapety)." } }, { "@type": "Question", "name": "Je nutné fasádu před nátěrem mýt tlakovou vodou?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, pokud je na fasádě prach, mech, řasy nebo zašlá vrstva staré barvy. Tlaková voda odstraní nečistoty a uvolněné částice, díky čemuž nová barva i penetrace lépe přilnou. Po umytí je nutné fasádu nechat 2–4 týdny vyschnout." } }, { "@type": "Question", "name": "Kolik stojí obnova fasády nátěrem na m²?", "acceptedAnswer": { "@type": "Answer", "text": "Svépomocí vyjde materiál (mytí, biocid, penetrace, barva) na 150–300 Kč/m². Při objednání firmy včetně práce a lešení se cena pohybuje kolem 400–700 Kč/m², podle stavu fasády a potřebných oprav." } }, { "@type": "Question", "name": "Jak často je potřeba fasádu obnovovat novým nátěrem?", "acceptedAnswer": { "@type": "Answer", "text": "Orientačně každých 8–15 let podle typu barvy a orientace fasády. Jižní a západní strany vystavené slunci a dešti stárnou rychleji než severní. Pravidelná kontrola a včasné opravy drobných trhlin prodlouží interval mezi nátěry." } }] }] };

const RELATED = [
  { title: "Fasádní barva – jak vybrat správný typ a jak nanášet", href: "/blog/fasadni-barva-vyber", read: "6 min" },
  { title: "Jak odstranit plíseň na zdi", href: "/blog/jak-odstranit-plisen-na-zdi", read: "5 min" },
  { title: "Jak zateplit dům – kompletní průvodce", href: "/blog/jak-zateplit-dum", read: "8 min" },
  { title: "Kalkulačka: kolik barvy potřebujete", href: "/kalkulacky/kolik-barvy", read: "2 min" },
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
              <span>Obnova fasády nátěrem</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování & barvy</Link>
                <span className="article-read-time">⏱ 7 min čtení</span>
              </div>
              <h1 className="article-h1">Jak obnovit fasádu domu novým nátěrem bez nového zateplení</h1>
              <p className="article-lead">Fasáda po letech vypadá unaveně – ztrácí barvu, místy se objevují praskliny nebo zelené skvrny od řas. Než začnete uvažovat o nákladném zateplení, často stačí fasádu pořádně připravit a natřít novou barvou. Jak na to a kdy obnova nátěrem skutečně stačí.</p>
              <div className="article-meta-row"><span>Aktualizováno: 12. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#kdy-staci-naterem">Kdy stačí přemalování a kdy je potřeba víc</a></li>
                <li><a href="#diagnostika">Diagnostika stavu staré fasády</a></li>
                <li><a href="#cisteni">Čištění fasády před nátěrem</a></li>
                <li><a href="#opravy">Oprava trhlin a poškozených míst</a></li>
                <li><a href="#vyber-barvy">Penetrace a výběr barvy podle typu fasády</a></li>
                <li><a href="#naklady">Náklady a svépomoc vs. firma</a></li>
                <li><a href="#jak-casto">Jak často fasádu obnovovat</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="kdy-staci-naterem">
              <h2>Kdy stačí přemalování a kdy je potřeba víc</h2>
              <p>Ne každá vybledlá fasáda znamená problém se zateplením. Pokud je vrstva omítky pevná, dobře držící a tepelný komfort domu vám vyhovuje, je nový nátěr nejlevnější a nejrychlejší způsob, jak dům vizuálně i funkčně oživit. Obnova fasády nátěrem navíc obnovuje i ochrannou funkci povrchu – nová barva chrání omítku před vlhkostí, mrazem a UV zářením.</p>
              <p>Naopak nátěr problém nevyřeší, pokud:</p>
              <ul>
                <li>omítka se odlupuje na velkých souvislých plochách, ne jen v drobných místech</li>
                <li>za fasádou je trvale vlhko (vlhké skvrny se po vymalování objeví znovu)</li>
                <li>dům má vysokou spotřebu na vytápění a uvažujete o zateplení – v tom případě je lepší investovat přímo do izolace a fasádu řešit až poté</li>
                <li>na fasádě jsou rozsáhlé statické trhliny procházející až do zdiva, ne jen do omítky</li>
              </ul>
              <p>Pokud naopak plánujete zateplení v dohledné době (do 2–3 let), zvažte, zda se nevyplatí počkat – nový nátěr na nezateplenou fasádu, kterou pak strhnete kvůli polystyrenu, je vyhozená investice.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud si nejste jistí stavem fasády, nechte si ji posoudit odborníkem ještě před objednáním malířů. Drobná investice do konzultace vás může ušetřit od zbytečného nátěru, který za rok znovu popraská.</div>
            </section>

            <section id="diagnostika">
              <h2>Diagnostika stavu staré fasády</h2>
              <p>Před jakýmkoliv rozhodnutím si fasádu pečlivě prohlédněte – nejlépe za sucha a za vlhka (po dešti), protože vlhkost odhalí skryté problémy.</p>
              <h3>Praskliny</h3>
              <p>Vlasové trhlinky v omítce (do 0,3 mm) jsou běžné a po opravě je překryje i samotný nátěr. Širší trhliny, zejména diagonální nebo procházející kolem oken a rohů domu, mohou signalizovat pohyb konstrukce a je třeba je nechat posoudit statikem před tím, než je jen „zalepíte" tmelem.</p>
              <h3>Plísně a řasy</h3>
              <p>Zelené nebo černé skvrny, nejčastěji na severních stranách, u okapů nebo v místech, kam nesvítí slunce, signalizují vlhkost a biologické napadení. Pokud se objevují opakovaně i přes čištění, stojí za to zkontrolovat okapy, parapety a odvod srážkové vody – jinak se problém po novém nátěru vrátí. Podrobně se příčinami a řešením zabývá náš článek <Link href="/blog/jak-odstranit-plisen-na-zdi" style={{ color: "#2a6496", textDecoration: "underline" }}>jak odstranit plíseň na zdi</Link>.</p>
              <h3>Odlupování a bublání nátěru</h3>
              <p>Pokud se stará barva odlupuje v ploškách nebo se pod ní tvoří bublinky, znamená to, že pod povrchem je vlhkost nebo že předchozí nátěr nebyl paropropustný. Tyto plochy je nutné očistit až na zdravý podklad – jinak na nich neudrží ani nová barva.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Zkuste na podezřelém místě přiklepnout omítku tvrdým předmětem. Dutý zvuk znamená, že omítka je odpojená od zdiva a je třeba ji v tomto místě otlučit a opravit – nejen přemalovat.</div>
            </section>

            <section id="cisteni">
              <h2>Čištění fasády před nátěrem</h2>
              <p>Důkladné čištění je základ – nová barva nikdy nepřilne dobře na prach, mech nebo zvětralou vrstvu staré barvy.</p>
              <h3>Tlaková voda</h3>
              <p>Omytí fasády tlakovou vodou odstraní prach, pavučiny, uvolněné částice omítky i většinu povrchových nečistot. Pracujte s mírným tlakem a dostatečnou vzdáleností trysky od stěny (alespoň 30–50 cm) – příliš silný proud může poškodit měkčí omítky nebo do nich vehnat vodu hlouběji, než je zdrávo.</p>
              <h3>Biocidní nátěr proti řasám a plísním</h3>
              <p>Po umytí a vyschnutí naneste biocidní (algicidní/fungicidní) přípravek na místa s viditelným napadením i preventivně na celou fasádu, zejména na stinné a severní strany. Biocid potřebuje čas na působení – obvykle 24–48 hodin – než pokračujete dalšími kroky.</p>
              <h3>Doba na vyschnutí</h3>
              <p>Po umytí tlakovou vodou potřebuje fasáda minimálně 2–4 týdny na úplné vyschnutí, podle počasí a tloušťky omítky. Malování na vlhký podklad je jednou z nejčastějších příčin předčasného odlupování nového nátěru – raději vyčkejte delší dobu, než riskovat.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Plánujte čištění fasády na začátek sezóny (duben–květen), aby fasáda měla dost času vyschnout ještě před malováním v létě.</div>
            </section>

            <section id="opravy">
              <h2>Oprava trhlin a poškozených míst</h2>
              <p>Po vyschnutí fasády je čas na lokální opravy. Bez nich nový nátěr jen „zamaskuje" problém na pár sezón.</p>
              <ul>
                <li><strong>Vlasové trhliny</strong> – přetáhněte štěrkovým tmelem nebo přestěrkujte celé plochy stěrkovou hmotou, podle rozsahu poškození.</li>
                <li><strong>Větší trhliny a praskliny v rozích</strong> – rozšiřte je škrabkou, vyčistěte od prachu, naplňte sanační nebo trvale pružnou tmelovací hmotou a po zaschnutí přebruste.</li>
                <li><strong>Odpadlá nebo dutá omítka</strong> – otlučte až na zdravý podklad, případně na zdivo, a místo opravte novou omítkovou směsí. Po zaschnutí (klidně i několik týdnů u větších ploch) je třeba penetrovat stejně jako zbytek fasády.</li>
                <li><strong>Poškozené sokly a místa u země</strong> – často nejvíc namáhaná oblast vlhkostí. Pokud se omítka u soklu trvale rozpadá, zkontrolujte i hydroizolaci a odvod vody od stěny, ne jen samotnou omítku.</li>
              </ul>
              <p>Všechny opravená místa nechte řádně zatuhnout a vyschnout podle technického listu použité opravné hmoty – obvykle se jedná o dny, u rozsáhlejších oprav i týdny.</p>
            </section>

            <section id="vyber-barvy">
              <h2>Penetrace a výběr barvy podle typu staré fasády</h2>
              <h3>Penetrační nátěr</h3>
              <p>Penetrace zpevní povrch, sníží jeho savost a zajistí lepší a rovnoměrnější přilnavost finální barvy. Na opravovaných a přestěrkovaných místech je penetrace prakticky povinná – bez ní nová barva na tato místa „nasákne" jinak než na okolní plochu a po zaschnutí bude vidět rozdíl v odstínu i struktuře.</p>
              <h3>Jaký typ barvy zvolit</h3>
              <p>Výběr barvy by měl navazovat na typ a stav stávající fasády – kombinace nevhodných materiálů (např. paronepropustná barva na minerální omítce) může napáchat víc škody než užitku.</p>
              <ul>
                <li><strong>Silikonová barva</strong> – nejuniverzálnější volba pro obnovu. Vysoce paropropustná, odpuzuje vodu (samočisticí efekt), vhodná na většinu typů starých omítek. Životnost 12–15 let, vyšší cena.</li>
                <li><strong>Akrylátová barva</strong> – levnější, dobrá přilnavost a pružnost (překryje drobné vlasové trhliny), ale nižší paropropustnost. Vhodná tam, kde fasáda není vlhkostně problematická.</li>
                <li><strong>Minerální (silikátová) barva</strong> – tradiční volba na minerální omítky (vápenné, vápenocementové). Vysoce paropropustná a přírodní, ale méně pružná a kratší životnost (5–8 let) – vyžaduje pevný, nepoškozený podklad.</li>
              </ul>
              <p>Při obnově se obecně doporučuje zůstat u podobného typu materiálu, jaký už na fasádě je, nebo přejít na paropropustnější variantu (např. z akrylátové na silikonovou). Opačný směr – nanesení méně propustné barvy na starší minerální omítku – může vést k zadržování vlhkosti pod povrchem. Detailní srovnání typů barev a postup nanášení najdete v článku <Link href="/blog/fasadni-barva-vyber" style={{ color: "#2a6496", textDecoration: "underline" }}>výběr fasádní barvy</Link>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud měníte odstín fasády na výrazně tmavší, počítejte s vyšším tepelným namáháním povrchu (rychlejší ohřev na slunci), což může urychlit vznik vlasových trhlin. U tmavších odstínů vybírejte raději elastičtější (akrylátové nebo silikonové) barvy.</div>
            </section>

            <section id="naklady">
              <h2>Náklady a svépomoc vs. firma</h2>
              <p>Cena obnovy fasády se odvíjí především od rozsahu příprav a od toho, zda počítáte s pronájmem lešení.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Položka</th><th>Svépomoc</th><th>S firmou (práce + materiál)</th></tr></thead>
                  <tbody>
                    <tr><td>Čištění + biocid</td><td>30–60 Kč/m²</td><td>zahrnuto v ceně</td></tr>
                    <tr><td>Drobné opravy omítky</td><td>20–80 Kč/m² (lokálně)</td><td>zahrnuto v ceně</td></tr>
                    <tr><td>Penetrace + barva (2 vrstvy)</td><td>100–200 Kč/m²</td><td>zahrnuto v ceně</td></tr>
                    <tr><td>Lešení (pronájem 2–3 týdny)</td><td>5 000–15 000 Kč</td><td>často součást nabídky</td></tr>
                    <tr><td>Celkem na m²</td><td><strong>150–300 Kč</strong></td><td><strong>400–700 Kč</strong></td></tr>
                  </tbody>
                </table>
              </div>
              <p>Pro odhad celkové spotřeby a tedy i nákladů na materiál vám pomůže <Link href="/kalkulacky/kolik-barvy" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačka spotřeby fasádní barvy</Link> – stačí zadat rozměry domu a typ omítky.</p>
              <h3>Kdy se vyplatí firma</h3>
              <p>Práce ve výškách nad přízemí vyžadují lešení a bezpečnostní vybavení – pro patrový dům se svépomocná práce na žebříku nevyplatí ani z hlediska kvality, ani bezpečnosti. Firma navíc dokáže rychle posoudit, zda jde skutečně jen o nátěr, nebo zda je třeba řešit i konstrukční problémy (trhliny, vlhkost).</p>
              <h3>Kdy se vyplatí svépomoc</h3>
              <p>Pro přízemní stavby, menší plochy (např. jen jedna strana domu) nebo přístavby je svépomocná obnova reálná – ušetříte hlavně na práci, která tvoří většinu rozpočtu. Počítejte ale s tím, že nátěr je nutné provádět za vhodného počasí (10–25 °C, bez deště a přímého slunce), což může práci o víkendech protáhnout na více týdnů.</p>
            </section>

            <section id="jak-casto">
              <h2>Jak často fasádu obnovovat</h2>
              <p>Interval mezi nátěry závisí na typu barvy, orientaci fasády a kvalitě předchozí přípravy:</p>
              <ul>
                <li><strong>Silikonová barva:</strong> 12–15 let</li>
                <li><strong>Akrylátová barva:</strong> 7–10 let</li>
                <li><strong>Minerální barva:</strong> 5–8 let</li>
              </ul>
              <p>Jižní a západní strany domu, vystavené přímému slunci a dešti, stárnou rychleji než severní fasáda – nemusí proto vyžadovat obnovu ve stejnou dobu. Pravidelná vizuální kontrola jednou za rok (po zimě) a okamžitá oprava drobných trhlin výrazně prodlouží interval mezi celkovými obnovami a ušetří náklady na rozsáhlejší opravy do budoucna.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jak poznám, že stačí fasádu jen přemalovat?", a: "Pokud je omítka pevná, nepraská do hloubky, neodpadává a izolace domu vám vyhovuje, stačí fasádu očistit, ošetřit proti plísním, opravit drobné trhliny a natřít novou barvou. Pokud se omítka odlupuje ve velkých plochách, je za ní vlhko nebo uvažujete o zateplení, samotný nátěr problém nevyřeší." },
                  { q: "Jak dlouho vydrží nový nátěr fasády?", a: "Při kvalitní přípravě a vhodné barvě vydrží silikonový nátěr 12–15 let, akrylátový 7–10 let a minerální 5–8 let. Životnost zkracuje špatná příprava podkladu, malování na vlhko nebo zanedbaná údržba okolí (okapy, parapety)." },
                  { q: "Je nutné fasádu před nátěrem mýt tlakovou vodou?", a: "Ano, pokud je na fasádě prach, mech, řasy nebo zašlá vrstva staré barvy. Tlaková voda odstraní nečistoty a uvolněné částice, díky čemuž nová barva i penetrace lépe přilnou. Po umytí je nutné fasádu nechat 2–4 týdny vyschnout." },
                  { q: "Kolik stojí obnova fasády nátěrem na m²?", a: "Svépomocí vyjde materiál (mytí, biocid, penetrace, barva) na 150–300 Kč/m². Při objednání firmy včetně práce a lešení se cena pohybuje kolem 400–700 Kč/m², podle stavu fasády a potřebných oprav." },
                  { q: "Jak často je potřeba fasádu obnovovat novým nátěrem?", a: "Orientačně každých 8–15 let podle typu barvy a orientace fasády. Jižní a západní strany vystavené slunci a dešti stárnou rychleji než severní. Pravidelná kontrola a včasné opravy drobných trhlin prodlouží interval mezi nátěry." },
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
                <li><a href="#kdy-staci-naterem">Kdy stačí přemalování</a></li>
                <li><a href="#diagnostika">Diagnostika stavu fasády</a></li>
                <li><a href="#cisteni">Čištění před nátěrem</a></li>
                <li><a href="#opravy">Oprava trhlin</a></li>
                <li><a href="#vyber-barvy">Výběr barvy</a></li>
                <li><a href="#naklady">Náklady a svépomoc</a></li>
                <li><a href="#jak-casto">Jak často obnovovat</a></li>
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
