import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ochrana domu před bleskem – hromosvod a přepětí",
  description: "Jak funguje hromosvod, kdy je povinný a jak ochránit elektroniku v domě před přepětím při bouřce.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-ochranit-dum-pred-blesky" },
  openGraph: { title: "Ochrana domu před bleskem – hromosvod a přepětí", description: "Jak funguje hromosvod, kdy je povinný a jak ochránit elektroniku v domě před přepětím při bouřce.", url: "https://www.domovniguru.cz/blog/jak-ochranit-dum-pred-blesky", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-15T08:00:00Z", modifiedTime: "2026-06-15T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Ochrana%20domu%20p%C5%99ed%20bleskem%20%E2%80%93%20hromosvod%20a%20p%C5%99ep%C4%9Bt%C3%AD&cat=blog", width: 1200, height: 630, alt: "Ochrana domu před bleskem – hromosvod a přepětí" }] },
  twitter: { card: "summary_large_image", title: "Ochrana domu před bleskem – hromosvod a přepětí", description: "Jak funguje hromosvod, kdy je povinný a jak ochránit elektroniku v domě před přepětím při bouřce." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/jak-ochranit-dum-pred-blesky#article", "headline": "Ochrana domu před bleskem – hromosvod a přepětí", "datePublished": "2026-06-15T08:00:00Z", "dateModified": "2026-06-15T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["hromosvod", "bleskosvod", "ochrana před bleskem", "přepěťová ochrana", "revize hromosvodu"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Sezónní údržba", "item": "https://www.domovniguru.cz/blog/kategorie/sezonni-udrzba" }, { "@type": "ListItem", "position": 4, "name": "Ochrana domu před bleskem", "item": "https://www.domovniguru.cz/blog/jak-ochranit-dum-pred-blesky" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Je hromosvod na rodinném domě povinný?", "acceptedAnswer": { "@type": "Answer", "text": "Záleží na typu objektu a jeho umístění. U nových staveb posuzuje nutnost hromosvodu projektová dokumentace na základě analýzy rizika podle ČSN EN 62305. U starších domů, kde byl hromosvod součástí původního projektu, je jeho udržování v provozuschopném stavu povinné." } }, { "@type": "Question", "name": "Jak často se musí dělat revize hromosvodu?", "acceptedAnswer": { "@type": "Answer", "text": "U běžných rodinných domů se revize hromosvodu (bleskosvodu) provádí standardně jednou za 4 roky, u objektů s vyšším rizikem (např. veřejné budovy, objekty s nebezpečím požáru) jednou za 2 roky. Vždy je vhodné nechat zkontrolovat hromosvod i po silné bouřce nebo zásahu blesku v okolí." } }, { "@type": "Question", "name": "Chrání hromosvod i elektroniku v domě?", "acceptedAnswer": { "@type": "Answer", "text": "Samotný hromosvod svádí přímý úder blesku do země a chrání hlavně konstrukci domu před požárem. Elektroniku a spotřebiče před přepětím chrání až přepěťové ochrany instalované v rozvaděči a případně i přímo u citlivých zařízení." } }, { "@type": "Question", "name": "Pomůže vypnutí spotřebičů ze zásuvky během bouřky?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, odpojení citlivé elektroniky (počítače, televize, routery) ze zásuvky a anténního či síťového kabelu je jednoduchá a účinná ochrana, zejména pokud dům nemá kvalitní přepěťové ochrany. Přepětí se totiž může šířit i po datových a anténních vedeních." } }, { "@type": "Question", "name": "Co se stane, když dům nemá ani hromosvod, ani přepěťové ochrany?", "acceptedAnswer": { "@type": "Answer", "text": "Riziko přímého poškození konstrukce domu při úderu blesku i riziko zničení elektroniky přepětím je výrazně vyšší. Přepětí může do domu vniknout i z blízkého venkovního vedení, aniž by blesk udeřil přímo do domu, a poškodit spotřebiče, kotel, fotovoltaiku nebo domácí síť." } }] }] };

const RELATED = [
  { title: "Jak připravit dům na bouřku a vítr", href: "/blog/pripravit-dum-na-boure-a-vitr", read: "5 min" },
  { title: "Jak připravit dům na zimu – checklist", href: "/blog/priprava-domu-na-zimu", read: "5 min" },
  { title: "Záložní zdroj a generátor pro domácnost", href: "/blog/zalozni-zdroj-generator-pro-domacnost", read: "6 min" },
  { title: "Fotovoltaika s baterií – jak vybrat", href: "/blog/fotovoltaika-s-baterii", read: "7 min" },
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
              <span>Ochrana domu před bleskem</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">❄️ Sezónní údržba</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Ochrana domu před bleskem – hromosvod a přepětí</h1>
              <p className="article-lead">Bouřky s blesky jsou v Česku čím dál častější a intenzivnější. Hromosvod a přepěťové ochrany patří mezi ta opatření, na která se snadno zapomíná – dokud nepřijde úder blesku do blízkosti domu a nezničí kotel, router nebo celou elektroinstalaci. Tento článek vysvětluje, jak hromosvod funguje, kdy je potřeba a jak chránit elektroniku před přepětím.</p>
              <div className="article-meta-row"><span>Aktualizováno: 15. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#jak-funguje">Jak funguje hromosvod (bleskosvod)</a></li>
                <li><a href="#kdy-povinne">Kdy je instalace povinná nebo doporučená</a></li>
                <li><a href="#revize">Revize hromosvodu – jak často a co se kontroluje</a></li>
                <li><a href="#pripeti">Ochrana spotřebičů a elektroniky přepěťovými ochranami</a></li>
                <li><a href="#behem-bourky">Co dělat během bouřky</a></li>
                <li><a href="#omyly">Časté omyly a rizika neošetřeného domu</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="jak-funguje">
              <h2>Jak funguje hromosvod (bleskosvod)</h2>
              <p>Hromosvod, odborně označovaný jako <strong>vnější systém ochrany před bleskem (LPS)</strong>, má jediný hlavní úkol – zachytit přímý úder blesku a bezpečně ho svést do země, aniž by poškodil konstrukci budovy nebo ohrozil osoby uvnitř.</p>
              <p>Skládá se ze tří základních částí:</p>
              <ul>
                <li><strong>Jímací soustava</strong> – tyče, dráty a mřížky na střeše, které blesk „přitáhnou" a zachytí dříve, než zasáhne jinou část domu</li>
                <li><strong>Svody</strong> – vodiče vedoucí po fasádě, kterými se zachycený proud svádí dolů k zemi</li>
                <li><strong>Uzemnění</strong> – soustava zemnicích pásků nebo tyčí v zemi, které rozptylují elektrický proud do okolní půdy</li>
              </ul>
              <p>Důležité je si uvědomit, že hromosvod chrání především <strong>konstrukci a obyvatele domu</strong> před požárem a přímým rizikem úrazu. Sám o sobě ale nezabrání poškození citlivé elektroniky uvnitř domu – proti tomu slouží přepěťové ochrany, o kterých je řeč dále.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Hromosvod by měl tvořit propojený systém s celkovým uzemněním domu, včetně uzemnění elektroinstalace, plynové přípojky a dalších kovových konstrukcí. Nepropojené nebo poddimenzované uzemnění je jedna z nejčastějších závad zjištěných při revizích.</div>
            </section>

            <section id="kdy-povinne">
              <h2>Kdy je instalace povinná nebo doporučená</h2>
              <p>Povinnost instalovat hromosvod na rodinném domě nevyplývá z jednoho obecného zákona platného pro všechny stavby – posuzuje se individuálně podle projektové dokumentace a normy <strong>ČSN EN 62305</strong> (Ochrana před bleskem), která stanovuje postup analýzy rizika.</p>
              <p>Analýza rizika zohledňuje například:</p>
              <ul>
                <li>polohu domu (samostatně stojící objekt na kopci nebo v otevřené krajině je rizikovější než dům v hustě zastavěné ulici)</li>
                <li>výšku a velikost budovy</li>
                <li>typ střešní krytiny a konstrukce (hořlavé materiály zvyšují riziko požáru)</li>
                <li>hodnotu a charakter vybavení uvnitř (fotovoltaika, domácí automatizace, citlivá elektronika)</li>
                <li>počet osob, které se v domě běžně pohybují</li>
              </ul>
              <p>U <strong>nových staveb</strong> tuto analýzu provádí projektant a výsledek je součástí projektové dokumentace ke stavebnímu povolení. Pokud projekt hromosvod předepisuje, je jeho instalace povinná a kontroluje se i při kolaudaci.</p>
              <p>U <strong>starších domů</strong>, kde už hromosvod existuje, platí povinnost udržovat jej v provozuschopném stavu a podrobovat pravidelným revizím – i v případě, že by se podle dnešních norem na nový dům stejné velikosti hromosvod už nemusel předepisovat.</p>
              <p>I tam, kde hromosvod není povinný, bývá jeho instalace <strong>doporučená</strong> – zejména u domů s fotovoltaikou na střeše, dřevostaveb, domů na samotách nebo v lokalitách s vyšším výskytem bouřek. Více o celkové přípravě domu na nepříznivé počasí najdeš v článku <Link href="/blog/pripravit-dum-na-boure-a-vitr" style={{ color: "#2a6496", textDecoration: "underline" }}>jak připravit dům na bouřku a vítr</Link>.</p>
            </section>

            <section id="revize">
              <h2>Revize hromosvodu – jak často a co se kontroluje</h2>
              <p>Pokud dům hromosvod má, musí procházet pravidelnými revizemi podle normy ČSN EN 62305-3. Revize provádí revizní technik s odpovídající kvalifikací a vystavuje o ní revizní zprávu.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ objektu</th><th>Interval revize</th></tr></thead>
                  <tbody>
                    <tr><td>Rodinný dům, běžný objekt</td><td>1× za 4 roky</td></tr>
                    <tr><td>Objekty s vyšším rizikem (požár, výbuch, veřejné budovy)</td><td>1× za 2 roky</td></tr>
                    <tr><td>Po úderu blesku do domu nebo blízkého okolí</td><td>Mimořádná revize co nejdříve</td></tr>
                    <tr><td>Po stavebních úpravách (např. nová střecha, přístavba)</td><td>Mimořádná revize</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Při revizi technik kontroluje zejména:</p>
              <ul>
                <li>celistvost a mechanické upevnění jímací soustavy a svodů (uvolněné nebo zkorodované spoje)</li>
                <li>stav uzemnění – přechodový odpor zemniče musí být v normě</li>
                <li>vizuální stav vodičů (koroze, mechanické poškození, povolené úchyty)</li>
                <li>propojení hromosvodu s dalšími uzemněnými systémy domu</li>
                <li>správné dotažení a stav přepěťových ochran v rozvaděči</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Revizní zprávu uschovej – při pojistné události způsobené blesky pojišťovna často vyžaduje doklad o platné revizi hromosvodu, jinak může plnění krátit nebo zcela zamítnout.</div>
            </section>

            <section id="pripeti">
              <h2>Ochrana spotřebičů a elektroniky pomocí přepěťových ochran</h2>
              <p>Většina škod způsobených bouřkami v domácnostech nepochází z přímého úderu blesku do domu, ale z <strong>atmosférického přepětí</strong> – krátké, ale extrémně silné napěťové špičky, která se do domu dostane po elektrickém vedení, telefonní lince nebo anténním kabelu i při úderu blesku ve vzdálenosti několika set metrů až kilometrů.</p>
              <p>Přepěťové ochrany se dělí do tří stupňů podle umístění a úrovně ochrany:</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Stupeň ochrany</th><th>Umístění</th><th>Funkce</th></tr></thead>
                  <tbody>
                    <tr><td>Svodič bleskového proudu (typ 1)</td><td>Hlavní rozvaděč / přípojková skříň</td><td>Zvládne svést i část energie přímého úderu blesku do vedení</td></tr>
                    <tr><td>Přepěťová ochrana (typ 2)</td><td>Podružný rozvaděč</td><td>Omezuje zbytkové přepětí na bezpečnou úroveň pro spotřebiče</td></tr>
                    <tr><td>Přepěťová ochrana (typ 3)</td><td>Zásuvka nebo přímo u zařízení</td><td>Jemná dodatečná ochrana citlivé elektroniky (PC, TV, audio)</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Pro běžný rodinný dům bez hromosvodu i s ním dává smysl mít alespoň kombinaci typu 1+2 v hlavním rozvaděči – instalaci provádí elektrikář. Doplňkové přepěťové lišty (typ 3) pak chrání jednotlivá zařízení jako počítač, televizi, router nebo herní konzoli.</p>
              <p>Zvláštní pozornost si zaslouží i <strong>datová a anténní vedení</strong> – fotovoltaika, satelitní anténa, domácí síť nebo zabezpečovací systém. Přepětí se po těchto vedeních šíří stejně snadno jako po silových rozvodech, a proto se i tato vedení doplňují vlastními přepěťovými ochranami.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud máš doma fotovoltaiku, ověř, že přepěťová ochrana je instalovaná jak na straně střídače (DC strana), tak na straně rozvaděče (AC strana). Měniče bez přepěťové ochrany jsou při bouřkách jednou z nejčastěji poškozených součástí FVE.</div>
            </section>

            <section id="behem-bourky">
              <h2>Co dělat během bouřky</h2>
              <p>Hromosvod a přepěťové ochrany jsou trvalá opatření, ale i v okamžiku, kdy bouřka přichází, lze udělat několik kroků, které riziko poškození dále sníží:</p>
              <ul>
                <li><strong>Odpoj citlivou elektroniku ze zásuvky</strong> – televizi, počítač, herní konzole, routery a síťová úložiště. Vytáhni i anténní a síťové kabely, pokud zařízení nemá vlastní přepěťovou ochranu.</li>
                <li><strong>Nezapojuj a neodpojuj spotřebiče během bouřky</strong> – manipulace se zástrčkami v okamžiku přepětí může zvýšit riziko zásahu.</li>
                <li><strong>Zavři okna a venkovní žaluzie</strong> – omezí riziko vniknutí vody při doprovodném dešti a větru.</li>
                <li><strong>Vyhni se koupání, sprchování a mytí nádobí</strong> během silné bouřky – kovové potrubí může vést elektrický náboj.</li>
                <li><strong>Pokud jsi venku</strong>, vyhýbej se vysokým osamoceným stromům, kovovým konstrukcím a otevřeným plochám.</li>
              </ul>
              <p>Po odeznění bouřky je dobré zkontrolovat funkčnost klíčových spotřebičů (kotel, router, fotovoltaika) – pokud něco nefunguje, může to signalizovat poškození přepětím, i když hromosvod žádný viditelný zásah neutrpěl.</p>
            </section>

            <section id="omyly">
              <h2>Časté omyly a rizika neošetřeného domu</h2>
              <h3>„Blesk musí udeřit přímo do domu, aby způsobil škodu"</h3>
              <p>Není to pravda. Naprostá většina škod na elektronice vzniká z přepětí přenášeného po vedení z úderu vzdáleného i stovky metrů od domu. Hromosvod proti tomuto typu škody sám o sobě nepomůže – potřeba je kombinace s přepěťovými ochranami.</p>
              <h3>„Starý hromosvod stačí, hlavně že tam nějaký je"</h3>
              <p>Zkorodovaný, mechanicky poškozený nebo nepropojený hromosvod může být ve skutečnosti horší než žádný – při úderu se nemusí podařit bezpečně svést proud do země a může se zvýšit riziko požáru nebo přeskoku napětí do vnitřních rozvodů domu. Proto je pravidelná revize zásadní.</p>
              <h3>„Pojistka mě ochrání před vším"</h3>
              <p>Pojišťovny u škod způsobených bleskem a přepětím často vyžadují platnou revizi hromosvodu a odpovídající přepěťové ochrany. Bez nich může pojišťovna plnění výrazně krátit nebo škodu odmítnout úplně – přečti si proto pojistné podmínky a podmínky pro pojistná plnění při poškození bleskem.</p>
              <h3>„Přepěťová ochrana v zásuvce vyřeší vše"</h3>
              <p>Levná přepěťová lišta z marketu chrání jen omezeně a jen proti menším špičkám. Skutečnou ochranu poskytuje až kombinace ochran ve více stupních – od hlavního rozvaděče až po jednotlivá zařízení.</p>
              <h3>„Dům bez hromosvodu nemá smysl chránit přepěťovkami"</h3>
              <p>Naopak – přepěťové ochrany mají smysl i bez hromosvodu, protože chrání primárně proti přepětí z vedení, nikoliv proti přímému úderu. Jsou tak prvním a často nejdostupnějším krokem k ochraně elektroniky v domě.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Je hromosvod na rodinném domě povinný?", a: "Záleží na typu objektu a jeho umístění. U nových staveb posuzuje nutnost hromosvodu projektová dokumentace na základě analýzy rizika podle ČSN EN 62305. U starších domů, kde byl hromosvod součástí původního projektu, je jeho udržování v provozuschopném stavu povinné." },
                  { q: "Jak často se musí dělat revize hromosvodu?", a: "U běžných rodinných domů se revize hromosvodu (bleskosvodu) provádí standardně jednou za 4 roky, u objektů s vyšším rizikem (např. veřejné budovy, objekty s nebezpečím požáru) jednou za 2 roky. Vždy je vhodné nechat zkontrolovat hromosvod i po silné bouřce nebo zásahu blesku v okolí." },
                  { q: "Chrání hromosvod i elektroniku v domě?", a: "Samotný hromosvod svádí přímý úder blesku do země a chrání hlavně konstrukci domu před požárem. Elektroniku a spotřebiče před přepětím chrání až přepěťové ochrany instalované v rozvaděči a případně i přímo u citlivých zařízení." },
                  { q: "Pomůže vypnutí spotřebičů ze zásuvky během bouřky?", a: "Ano, odpojení citlivé elektroniky (počítače, televize, routery) ze zásuvky a anténního či síťového kabelu je jednoduchá a účinná ochrana, zejména pokud dům nemá kvalitní přepěťové ochrany. Přepětí se totiž může šířit i po datových a anténních vedeních." },
                  { q: "Co se stane, když dům nemá ani hromosvod, ani přepěťové ochrany?", a: "Riziko přímého poškození konstrukce domu při úderu blesku i riziko zničení elektroniky přepětím je výrazně vyšší. Přepětí může do domu vniknout i z blízkého venkovního vedení, aniž by blesk udeřil přímo do domu, a poškodit spotřebiče, kotel, fotovoltaiku nebo domácí síť." },
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
                <li><a href="#jak-funguje">Jak funguje hromosvod</a></li>
                <li><a href="#kdy-povinne">Kdy je instalace povinná</a></li>
                <li><a href="#revize">Revize hromosvodu</a></li>
                <li><a href="#pripeti">Ochrana přepěťovými ochranami</a></li>
                <li><a href="#behem-bourky">Co dělat během bouřky</a></li>
                <li><a href="#omyly">Časté omyly a rizika</a></li>
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
