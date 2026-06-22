import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Údržba a čištění grilu před sezónou – kompletní návod",
  description: "Jak vyčistit a zkontrolovat plynový, uhlíkový nebo elektrický gril před první letní sezónou.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/udrzba-grilu-pred-sezonou" },
  openGraph: { title: "Údržba a čištění grilu před sezónou", description: "Jak vyčistit a zkontrolovat plynový, uhlíkový nebo elektrický gril před první letní sezónou.", url: "https://www.domovniguru.cz/blog/udrzba-grilu-pred-sezonou", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-12T08:00:00Z", modifiedTime: "2026-06-12T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=%C3%9Adr%C5%BEba%20a%20%C4%8Di%C5%A1t%C4%9Bn%C3%AD%20grilu%20p%C5%99ed%20sez%C3%B3nou&cat=blog", width: 1200, height: 630, alt: "Údržba a čištění grilu před sezónou" }] },
  twitter: { card: "summary_large_image", title: "Údržba a čištění grilu před sezónou", description: "Jak vyčistit a zkontrolovat plynový, uhlíkový nebo elektrický gril před první letní sezónou." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/udrzba-grilu-pred-sezonou#article", "headline": "Údržba a čištění grilu před sezónou", "datePublished": "2026-06-12T08:00:00Z", "dateModified": "2026-06-12T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["údržba grilu", "čištění grilu", "plynový gril", "uhlíkový gril", "skladování grilu"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Sezónní údržba", "item": "https://www.domovniguru.cz/blog/kategorie/sezonni-udrzba" }, { "@type": "ListItem", "position": 4, "name": "Údržba a čištění grilu před sezónou", "item": "https://www.domovniguru.cz/blog/udrzba-grilu-pred-sezonou" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jak často je potřeba čistit gril?", "acceptedAnswer": { "@type": "Answer", "text": "Rošty je dobré očistit po každém grilování, zatímco důkladné čištění vnitřních ploch, hořáků a sběrné misky stačí provést na začátku sezóny a poté přibližně jednou za měsíc při častém používání." } }, { "@type": "Question", "name": "Jak poznám, že je plynová hadice nebo regulátor poškozený?", "acceptedAnswer": { "@type": "Answer", "text": "Hadici natřete roztokem vody a saponátu a otevřete přívod plynu – pokud se na povrchu objeví bublinky, hadice nebo spoj netěsní a je nutné je vyměnit. Praskliny, ztvrdlý nebo popraskaný povrch hadice jsou rovněž důvodem k výměně." } }, { "@type": "Question", "name": "Můžu nechat gril přes zimu venku?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, pokud je gril kvalitně zakrytý voděodolným, ale prodyšným potahem a stojí na suchém, zpevněném povrchu. Lepší je ale uskladnit ho v garáži, kůlně nebo na zastřešené terase, aby se předešlo korozi kovových částí." } }, { "@type": "Question", "name": "Jak vyčistit litinové rošty bez poškození povrchu?", "acceptedAnswer": { "@type": "Answer", "text": "Litinové rošty čistěte drátěným kartáčem za horka, opláchněte vodou, dosušte a lehce naolejujte rostlinným olejem, aby nezačaly rezivět. Nepoužívejte agresivní chemické čističe, které narušují ochrannou patinu." } }, { "@type": "Question", "name": "Co kontrolovat u plynového grilu jako první před spuštěním?", "acceptedAnswer": { "@type": "Answer", "text": "Nejprve zkontrolujte těsnost hadice a regulátoru pomocí saponátové vody, dále stav hořáků (zda nejsou ucpané pavučinami nebo hmyzem) a funkčnost zapalování. Až poté gril zapalujte a pozorujte, zda hoří plamen rovnoměrně." } }] }] };

const RELATED = [
  { title: "Jak vybrat zahradní gril – kompletní průvodce", href: "/blog/vybrat-zahradni-gril", read: "6 min" },
  { title: "Jak ošetřit zahradní nábytek po zimě", href: "/blog/osetrit-zahradni-nabytek", read: "4 min" },
  { title: "Terasa na balkoně – jak ji zařídit a udržovat", href: "/blog/terasa-na-balkone", read: "5 min" },
  { title: "Příprava domu na léto – kompletní checklist", href: "/blog/dum-priprava-na-leto", read: "5 min" },
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
              <span>Údržba a čištění grilu před sezónou</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">❄️ Sezónní údržba</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Údržba a čištění grilu před sezónou</h1>
              <p className="article-lead">Než se gril po zimě poprvé rozhoří, vyplatí se mu věnovat dvacet minut péče. Špinavé rošty, ucpané hořáky nebo netěsná hadice nejen kazí chuť jídla, ale mohou být i bezpečnostním rizikem. V tomto návodu projdeme údržbu plynového, uhlíkového i elektrického grilu krok za krokem.</p>
              <div className="article-meta-row"><span>Aktualizováno: 12. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#typy-grilu">Typy grilů a jejich specifika</a></li>
                <li><a href="#cisteni-rostu">Čištění roštů a vnitřních ploch</a></li>
                <li><a href="#plynovy-gril">Kontrola hadic, regulátoru a hořáků</a></li>
                <li><a href="#uhlikovy-gril">Údržba a čištění uhlíkového grilu</a></li>
                <li><a href="#skladovani">Skladování a ochrana mimo sezónu</a></li>
                <li><a href="#bezpecnost">Bezpečnostní kontrola před sezónou</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="typy-grilu">
              <h2>1. Typy grilů a jejich specifika</h2>
              <p>Než začnete s údržbou, je dobré vědět, jaký typ grilu máte – každý vyžaduje trochu jiný postup. Pokud teprve gril vybíráte, podívejte se na náš článek <Link href="/blog/vybrat-zahradni-gril" style={{ color: "#2a6496", textDecoration: "underline" }}>jak vybrat zahradní gril</Link>, kde najdete srovnání všech typů.</p>
              <ul>
                <li><strong>Plynový gril</strong> – nejrychlejší na rozehřátí, vyžaduje kontrolu hadic, regulátoru a hořáků. Riziko úniku plynu je hlavním důvodem, proč mu věnovat zvýšenou pozornost.</li>
                <li><strong>Uhlíkový gril</strong> – nejjednodušší konstrukce, ale po sezóně bývá nejvíce zanesený popelem, mastnotou a sazemi. Náchylný na korozi, pokud se v něm popel nechá přes zimu.</li>
                <li><strong>Elektrický gril</strong> – nejméně náročný na údržbu, neřeší se hadice ani plyn, ale je třeba dávat pozor na vlhkost u elektrických částí a topných těles.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Bez ohledu na typ grilu platí jedno pravidlo – čištění je vždy snazší a rychlejší, pokud se neodkládá na poslední chvíli a provádí se postupně po jednotlivých částech.</div>
            </section>

            <section id="cisteni-rostu">
              <h2>2. Čištění roštů a vnitřních ploch</h2>
              <p>Rošty jsou nejvíce zanesenou částí každého grilu. Nejlepší je je čistit ještě teplé, hned po posledním grilování, ale na začátku sezóny je často nutné odstranit i zaschlé zbytky z předchozího roku.</p>
              <h3>Postup čištění roštů</h3>
              <ul>
                <li>Rošty vyjměte a namočte na 20–30 minut do horké vody se saponátem nebo speciálním čističem na gril.</li>
                <li>Drátěným kartáčem nebo škrabkou odstraňte zbytky spáleného jídla a mastnoty.</li>
                <li>U litinových roštů po umytí důkladně osušte a lehce naolejujte rostlinným olejem, aby nezačaly rezivět.</li>
                <li>U smaltovaných nebo nerezových roštů stačí opláchnout a osušit – olejování zde není nutné.</li>
              </ul>
              <h3>Vnitřní plochy a víko</h3>
              <p>Vnitřní stěny grilu, deflektory a víko bývají pokryté vrstvou ztuhlého tuku a sazí. Tyto usazeniny seškrábněte škrabkou nebo špachtlí a poté otřete hadrem namočeným v horké vodě s odmašťovacím prostředkem. U plynových grilů dávejte pozor, aby se voda nedostala do hořáků a elektrického zapalování.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Sběrnou misku na tuk pod grilem vyprázdněte a umyjte před každou sezónou – nahromaděný starý tuk je jedním z nejčastějších zdrojů zápachu i požárního rizika.</div>
            </section>

            <section id="plynovy-gril">
              <h2>3. Kontrola hadic, regulátoru a hořáků u plynového grilu</h2>
              <p>U plynového grilu je kontrola plynového vedení nejdůležitějším bezpečnostním krokem před spuštěním po zimní pauze.</p>
              <h3>Test těsnosti hadice a regulátoru</h3>
              <ul>
                <li>Připravte roztok vody a saponátu (1:1) a naneste ho štětečkem na všechny spoje – napojení hadice na lahev, na regulátor i na vstup do grilu.</li>
                <li>Pomalu otevřete přívod plynu na lahvi a sledujte, zda se na potřených místech tvoří bublinky.</li>
                <li>Pokud bublinky vznikají, spoj dotáhněte. Pokud problém přetrvává nebo je hadice popraskaná či ztvrdlá, vyměňte ji za novou.</li>
              </ul>
              <h3>Kontrola a čištění hořáků</h3>
              <p>Hořáky bývají po zimě často ucpané pavučinami nebo hnízdy hmyzu, což může způsobit nerovnoměrné hoření nebo dokonce vznícení mimo hořák (tzv. flashback). Vyjměte hořáky podle návodu k výrobku a otvory propláchněte stlačeným vzduchem nebo opatrně prošťouchněte tenkým drátkem či jehlou.</p>
              <h3>Zapalování a první test</h3>
              <p>Po kontrole těsnosti a vyčištění hořáků zapalte gril podle návodu výrobce a sledujte plamen – měl by být modrý a rovnoměrný po celé délce hořáku. Žlutý, kouřivý nebo nerovnoměrný plamen značí, že hořák je ještě potřeba vyčistit nebo seřídit.</p>
              <div className="article-tip"><strong>⚠️ Upozornění:</strong> Pokud i po vyčištění cítíte zápach plynu, gril nezapalujte a kontaktujte servis nebo vyměňte plynové komponenty za nové.</div>
            </section>

            <section id="uhlikovy-gril">
              <h2>4. Údržba a čištění uhlíkového grilu</h2>
              <p>Uhlíkový gril je konstrukčně nejjednodušší, ale po sezóně v něm často zůstává popel, který při vlhku tvoří agresivní směs urychlující korozi kovových částí.</p>
              <h3>Odstranění popela a zbytků uhlí</h3>
              <ul>
                <li>Vyberte veškerý popel a nedohořelé zbytky uhlí z ohniště i z popelníku pod roštem.</li>
                <li>Kovovým kartáčem vyčistěte ohniště od přilepených zbytků a usazenin.</li>
                <li>Zkontrolujte ventilační otvory (přívod a odvod vzduchu) – pokud jsou ucpané popelem, gril hůře táhne a uhlí se obtížně rozhořívá.</li>
              </ul>
              <h3>Kontrola tělesa grilu</h3>
              <p>Prohlédněte celé tělo grilu, zda se neobjevily praskliny nebo ložiska rezu, zejména na spodní straně a u nožiček. Drobnou korozi lze odstranit ocelovou drátěnkou a místo přetřít vysokoteplotní barvou určenou pro grily a krbová kamna. Zkontrolujte také funkčnost koleček a stabilitu nožiček.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Před první sezónou nechte uhlíkový gril jednou „vypálit“ na prázdno – rozpalte v něm uhlí na maximum a necháte hořet 15–20 minut. Spálíte tím zbytky starého tuku a zápach z předchozí sezóny.</div>
            </section>

            <section id="skladovani">
              <h2>5. Skladování a ochrana grilu mimo sezónu</h2>
              <p>Správné skladování je stejně důležité jako čištění – nevyčištěný nebo nezakrytý gril rychle koroduje a ztrácí životnost. Mimochodem, podobné zásady ochrany před počasím platí i pro <Link href="/blog/osetrit-zahradni-nabytek" style={{ color: "#2a6496", textDecoration: "underline" }}>zahradní nábytek</Link>.</p>
              <ul>
                <li><strong>Ideální umístění</strong> – pokud možno gril uchovávejte v garáži, kůlně nebo na zastřešené terase, kde nebude vystaven dešti a sněhu.</li>
                <li><strong>Venkovní skladování</strong> – pokud gril musí zůstat venku, použijte kvalitní voděodolný, ale prodyšný potah, který zabrání hromadění vlhkosti pod plachtou.</li>
                <li><strong>Plynové lahve</strong> – skladujte odděleně od grilu na dobře větraném místě, nikdy v uzavřeném sklepě nebo obytné místnosti.</li>
                <li><strong>Baterie do zapalování</strong> – pokud gril nebude delší dobu používán, vyjměte baterie z piezo zapalování, aby nedošlo k jejich vytečení a poškození elektroniky.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Před uskladněním na zimu nechte gril ještě jednou krátce rozehřát a vychladnout – pomůže to odpařit zbytkovou vlhkost z vnitřních ploch.</div>
            </section>

            <section id="bezpecnost">
              <h2>6. Bezpečnostní kontrola před první sezónou</h2>
              <p>Před prvním grilováním v sezóně proveďte rychlou bezpečnostní kontrolu celého grilu – zabere to jen pár minut, ale výrazně snižuje riziko nehody.</p>
              <ul>
                <li>Zkontrolujte stabilitu grilu na podložce, dotažení šroubů a koleček.</li>
                <li>U plynového grilu znovu otestujte těsnost spojů saponátovou vodou, i když jste je čistili už dříve.</li>
                <li>Ujistěte se, že gril stojí minimálně 1,5 metru od hořlavých předmětů, fasády domu, dřevěné pergoly nebo markýzy.</li>
                <li>Připravte si hasicí přikrývku nebo hasicí přístroj v dosahu, zejména pokud grilujete na terase nebo balkoně.</li>
                <li>Zkontrolujte, zda je v okolí grilu dostatek volného místa a zda děti a domácí zvířata mají k němu omezený přístup.</li>
              </ul>
              <p>Pokud gril používáte na terase nebo balkonu, vyplatí se promyslet i celkové uspořádání prostoru – inspiraci najdete v článku o <Link href="/blog/terasa-na-balkone" style={{ color: "#2a6496", textDecoration: "underline" }}>terase na balkoně</Link>.</p>
              <div className="article-tip"><strong>✅ Shrnutí:</strong> Vyčištěný rošt, zkontrolovaná plynová cesta, stabilní umístění a hasicí pomůcka v dosahu – s tímto základem je gril připravený na celou sezónu.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jak často je potřeba čistit gril?", a: "Rošty je dobré očistit po každém grilování, zatímco důkladné čištění vnitřních ploch, hořáků a sběrné misky stačí provést na začátku sezóny a poté přibližně jednou za měsíc při častém používání." },
                  { q: "Jak poznám, že je plynová hadice nebo regulátor poškozený?", a: "Hadici natřete roztokem vody a saponátu a otevřete přívod plynu – pokud se na povrchu objeví bublinky, hadice nebo spoj netěsní a je nutné je vyměnit. Praskliny, ztvrdlý nebo popraskaný povrch hadice jsou rovněž důvodem k výměně." },
                  { q: "Můžu nechat gril přes zimu venku?", a: "Ano, pokud je gril kvalitně zakrytý voděodolným, ale prodyšným potahem a stojí na suchém, zpevněném povrchu. Lepší je ale uskladnit ho v garáži, kůlně nebo na zastřešené terase, aby se předešlo korozi kovových částí." },
                  { q: "Jak vyčistit litinové rošty bez poškození povrchu?", a: "Litinové rošty čistěte drátěným kartáčem za horka, opláchněte vodou, dosušte a lehce naolejujte rostlinným olejem, aby nezačaly rezivět. Nepoužívejte agresivní chemické čističe, které narušují ochrannou patinu." },
                  { q: "Co kontrolovat u plynového grilu jako první před spuštěním?", a: "Nejprve zkontrolujte těsnost hadice a regulátoru pomocí saponátové vody, dále stav hořáků (zda nejsou ucpané pavučinami nebo hmyzem) a funkčnost zapalování. Až poté gril zapalujte a pozorujte, zda hoří plamen rovnoměrně." },
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
                <li><a href="#typy-grilu">Typy grilů</a></li>
                <li><a href="#cisteni-rostu">Čištění roštů</a></li>
                <li><a href="#plynovy-gril">Plynový gril</a></li>
                <li><a href="#uhlikovy-gril">Uhlíkový gril</a></li>
                <li><a href="#skladovani">Skladování</a></li>
                <li><a href="#bezpecnost">Bezpečnostní kontrola</a></li>
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
