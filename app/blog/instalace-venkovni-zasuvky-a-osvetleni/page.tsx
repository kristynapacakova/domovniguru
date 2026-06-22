import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak bezpečně instalovat venkovní zásuvku a osvětlení na zahradě",
  description: "Krytí IP, proudový chránič a uložení kabelu do země – co je potřeba pro bezpečnou venkovní elektroinstalaci.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/instalace-venkovni-zasuvky-a-osvetleni" },
  openGraph: { title: "Jak bezpečně instalovat venkovní zásuvku a osvětlení na zahradě", description: "Krytí IP, proudový chránič a uložení kabelu do země – co je potřeba pro bezpečnou venkovní elektroinstalaci.", url: "https://www.domovniguru.cz/blog/instalace-venkovni-zasuvky-a-osvetleni", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-12T08:00:00Z", modifiedTime: "2026-06-12T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20bezpe%C4%8Dn%C4%9B%20instalovat%20venkovn%C3%AD%20z%C3%A1suvku%20a%20osv%C4%9Btlen%C3%AD%20na%20zahrad%C4%9B&cat=blog", width: 1200, height: 630, alt: "Jak bezpečně instalovat venkovní zásuvku a osvětlení na zahradě" }] },
  twitter: { card: "summary_large_image", title: "Jak bezpečně instalovat venkovní zásuvku a osvětlení na zahradě", description: "Krytí IP, proudový chránič a uložení kabelu do země – co je potřeba pro bezpečnou venkovní elektroinstalaci." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/instalace-venkovni-zasuvky-a-osvetleni#article", "headline": "Jak bezpečně instalovat venkovní zásuvku a osvětlení na zahradě", "datePublished": "2026-06-12T08:00:00Z", "dateModified": "2026-06-12T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["venkovní zásuvka", "krytí IP44", "proudový chránič", "elektroinstalace zahrada", "kabel do země"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Elektrika & osvětlení", "item": "https://www.domovniguru.cz/blog/kategorie/elektrika" }, { "@type": "ListItem", "position": 4, "name": "Instalace venkovní zásuvky a osvětlení", "item": "https://www.domovniguru.cz/blog/instalace-venkovni-zasuvky-a-osvetleni" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jaké krytí IP musí mít venkovní zásuvka?", "acceptedAnswer": { "@type": "Answer", "text": "Venkovní zásuvka by měla mít minimálně krytí IP44 pro místa chráněná před deštěm (např. pod přístřeškem) a IP65 nebo IP67 pro místa vystavená přímému dešti a stříkající vodě. Krytka musí zůstat zavřená i se zasunutou zástrčkou." } }, { "@type": "Question", "name": "Je povinný proudový chránič pro venkovní zásuvky?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, podle normy ČSN 33 2000-7-704 musí být všechny venkovní okruhy chráněny proudovým chráničem (RCD) s vybavovacím proudem maximálně 30 mA. Chránič odpojí napájení během zlomku sekundy při úniku proudu." } }, { "@type": "Question", "name": "Jak hluboko se ukládá kabel do země na zahradě?", "acceptedAnswer": { "@type": "Answer", "text": "Standardně se kabel ukládá do hloubky 35–40 cm na pískové lože, chrání se ochrannou trubkou (chráničkou) a nad ním se ve výšce přibližně 20 cm umisťuje výstražná folie, která upozorní při budoucím kopání." } }, { "@type": "Question", "name": "Můžu si venkovní zásuvku zapojit sám?", "acceptedAnswer": { "@type": "Answer", "text": "Drobné úpravy jako výměna svítidla za stejný typ zvládne zkušený kutil. Nové okruhy vedené do země, napojení na rozvaděč a instalace nových zásuvek by ale měl provést elektrikář s odpovídající kvalifikací, a celé dílo musí mít platnou revizi." } }, { "@type": "Question", "name": "Jaké jištění potřebuje okruh pro venkovní zásuvky?", "acceptedAnswer": { "@type": "Answer", "text": "Běžný okruh pro venkovní zásuvky se jistí jističem 16 A (kabel CYKY 3×2,5 mm²) a vždy se kombinuje s proudovým chráničem 30 mA. Pro výkonnější spotřebiče, jako je bazénová technologie, se používá samostatný okruh s vyšším jištěním podle výkonu zařízení." } }] }] };

const RELATED = [
  { title: "Venkovní osvětlení zahrady – solární nebo kabelové?", href: "/blog/venkovni-osvetleni-zahrady", read: "6 min" },
  { title: "Jak přidat zásuvku do místnosti – povrchová nebo zapuštěná", href: "/blog/pridat-zasuvku", read: "6 min" },
  { title: "Jak fungují pojistky a jističe – výměna a bezpečnost", href: "/blog/jak-funguji-pojistky", read: "5 min" },
  { title: "Proč mi vypadává jistič?", href: "/blog/proc-vypadava-jistic", read: "4 min" },
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
              <Link href="/blog/kategorie/elektrika">Elektrika & osvětlení</Link><span className="breadcrumb-sep">/</span>
              <span>Instalace venkovní zásuvky a osvětlení</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">💡 Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak bezpečně instalovat venkovní zásuvku a osvětlení na zahradě</h1>
              <p className="article-lead">Zásuvka na terase, osvětlení u branky nebo přípojka pro bazénové čerpadlo – venkovní elektroinstalace má svá pravidla. Voda a elektřina se nesnášejí, a proto je tu krytí IP, proudový chránič a správné uložení kabelu do země úplný základ, ne nadstandard.</p>
              <div className="article-meta-row"><span>Aktualizováno: 12. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#krytí-ip">Krytí IP – co znamená a jaké zvolit</a></li>
                <li><a href="#chránič">Proudový chránič – povinná ochrana</a></li>
                <li><a href="#kabel-do-zeme">Uložení kabelu do země</a></li>
                <li><a href="#typy-zasuvek">Typy venkovních zásuvek a rozvodnic</a></li>
                <li><a href="#rozvadec">Napojení na rozvaděč a jištění</a></li>
                <li><a href="#chyby">Typické chyby a kdy volat elektrikáře</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="krytí-ip">
              <h2>Krytí IP – co znamená a jaké zvolit</h2>
              <p>Krytí IP (Ingress Protection) udává, jak je elektrické zařízení odolné proti vniknutí prachu a vody. Skládá se ze dvou číslic – první popisuje ochranu proti pevným předmětům a prachu, druhá proti vodě. Pro venkovní instalace je důležitá především ta druhá.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Krytí</th><th>Ochrana proti vodě</th><th>Kde se použije</th></tr></thead>
                  <tbody>
                    <tr><td>IP44</td><td>Stříkající voda ze všech směrů</td><td>Zásuvka pod přístřeškem, na zastřešené terase</td></tr>
                    <tr><td>IP54</td><td>Stříkající voda + prach</td><td>Osvětlení na fasádě, technické prostory</td></tr>
                    <tr><td>IP65</td><td>Proud vody z hadice</td><td>Svítidla na otevřené zahradě, na pergole</td></tr>
                    <tr><td>IP67</td><td>Krátké ponoření do vody</td><td>Reflektory u jezírka, kabelové spoje v zemi</td></tr>
                    <tr><td>IP68</td><td>Trvalé ponoření</td><td>Podvodní osvětlení bazénu, čerpadla</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Pro venkovní zásuvku platí jednoduché pravidlo: pokud na ni může v jakékoliv situaci dopadnout déšť nebo stříkající voda ze zalévání, potřebuješ minimálně IP44, ideálně IP65/IP67 s krytkou, která zůstane uzavřená i se zasunutou zástrčkou. Mnoho zásuvek vypadá krytě, ale po zasunutí kabelu krytka odskočí a zásuvka je nechráněná – na tohle se vyplatí dát pozor při výběru.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Krytí IP44 je minimum jen pro chráněná místa (pod stříškou, ve výklenku). Na otevřené ploše zahrady volej raději IP65 a vyšší – počasí v Česku je nevyzpytatelné a stříkající vodu od sekačky nebo zahradní hadice čekej kdekoliv.</div>
            </section>

            <section id="chránič">
              <h2>Proudový chránič – povinná ochrana</h2>
              <p>Proudový chránič (RCD, někdy nazývaný „fíčko") sleduje, zda se proud, který vtéká do okruhu, rovná proudu, který se vrací zpět. Pokud část proudu unikne jinam – například přes vlhkou zem nebo přes tělo člověka – chránič okruh během desítek milisekund odpojí. To je naprosto zásadní ochrana proti úrazu elektrickým proudem.</p>
              <p>Norma ČSN 33 2000-7-704, která se týká staveništních a venkovních rozvodů, vyžaduje, aby všechny venkovní okruhy byly chráněny proudovým chráničem s vybavovacím proudem <strong>maximálně 30 mA</strong>. Platí to pro zásuvky, osvětlení i napájení zahradní techniky.</p>
              <p>Chránič může být umístěn přímo v domovním rozvaděči (chrání celý okruh vedoucí na zahradu) nebo jako samostatná zásuvková jednotka s vlastním chráničem, kterou lze instalovat dodatečně. Druhá varianta je rychlejší řešení, ale neřeší ochranu kabelu vedeného k zásuvce – proto je vždy lepší mít chránič už v rozvaděči.</p>
              <div className="article-tip"><strong>💡 Důležité:</strong> Chránič si pravidelně testuj. Má testovací tlačítko (obvykle označené „T" nebo „TEST") – po jeho stisknutí by měl okruh okamžitě vypnout. Pokud nevypne, chránič je vadný a je potřeba ho vyměnit.</div>
            </section>

            <section id="kabel-do-zeme">
              <h2>Uložení kabelu do země</h2>
              <p>Pokud potřebuješ dostat elektřinu na vzdálenější místo zahrady – ke skleníku, bazénu nebo zahradnímu domku – nejčastější a nejbezpečnější řešení je kabel uložený v zemi. Postup má jasná pravidla:</p>
              <ul>
                <li><strong>Hloubka uložení:</strong> standardně 35–40 cm pod povrchem, u příjezdových cest a míst s vyšším zatížením i hlouběji (50–80 cm)</li>
                <li><strong>Pískové lože:</strong> kabel se ukládá do vrstvy písku (cca 10 cm pod a nad kabelem), který ho chrání před ostrými kameny</li>
                <li><strong>Ochranná trubka (chránička):</strong> kabel se vkládá do plastové chráničky, která ho mechanicky chrání a usnadní případnou výměnu bez rozkopávání zahrady</li>
                <li><strong>Výstražná folie:</strong> ve výšce přibližně 20 cm nad kabelem se umisťuje žlutá nebo oranžová výstražná folie s nápisem „pozor, elektrický kabel" – upozorní každého, kdo bude v budoucnu na zahradě kopat</li>
                <li><strong>Vhodný kabel:</strong> pro uložení v zemi se používá kabel typu CYKY (s pancéřovou vrstvou nebo v chráničce), nikdy běžný prodlužovací kabel ani kabel CYSY určený pro pohyblivé spotřebiče</li>
              </ul>
              <p>Trasu kabelu se vyplatí zakreslit do jednoduchého plánku zahrady – ušetří to starosti při budoucím sázení stromů nebo stavbě nového záhonu.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud plánuješ na zahradě i automatickou závlahu nebo osvětlení cestiček, ulož všechny kabely do jedné trasy najednou. Vykopat výkop dvakrát je zbytečná práce navíc.</div>
            </section>

            <section id="typy-zasuvek">
              <h2>Typy venkovních zásuvek a rozvodnic</h2>
              <p>Na trhu existuje několik typů řešení podle toho, kam a k čemu zásuvku potřebuješ:</p>
              <ul>
                <li><strong>Nástěnná venkovní zásuvka s krytkou (IP44/IP54)</strong> – montuje se na fasádu nebo zděný sloupek, vhodná pod přístřešek nebo na chráněnou terasu</li>
                <li><strong>Zásuvková sloupkové rozvodnice (IP65/IP67)</strong> – samostatně stojící sloupek s jednou nebo více zásuvkami, ideální uprostřed zahrady pro napájení zahradní techniky, světel nebo party stanu</li>
                <li><strong>Zapuštěné zásuvky do terasy/dlažby</strong> – víčko zarovnané s povrchem, řeší napájení na terase bez viditelného sloupku, vyžadují vysoké krytí (IP67) kvůli stojící vodě</li>
                <li><strong>Rozvodnice pro bazén</strong> – samostatný rozvaděč s odděleným jištěním a chráničem pro filtraci, ohřev a osvětlení bazénu, umístěný v bezpečné vzdálenosti od vody</li>
                <li><strong>Venkovní svítidla se zásuvkou</strong> – kombinace osvětlení a zásuvky v jednom tělese, praktické u vchodu nebo na pergole</li>
              </ul>
              <p>Pro běžné využití – napájení sekačky, vysokotlakého čističe, vánočního osvětlení nebo nabíjení elektrokola – plně postačí jedna kvalitní sloupková rozvodnice s krytím IP65 umístěná na praktickém místě zahrady.</p>
            </section>

            <section id="rozvadec">
              <h2>Napojení na rozvaděč a jištění</h2>
              <p>Venkovní okruh se napojuje na domovní rozvaděč jako samostatný okruh – nikdy by neměl být jen „odbočkou" z vnitřní zásuvky pomocí prodlužovacího kabelu vedeného oknem nebo dveřmi. Takové řešení je nebezpečné a navíc nepraktické.</p>
              <p>Standardní jištění pro venkovní zásuvky:</p>
              <ul>
                <li><strong>Jistič:</strong> 16 A pro běžný okruh s kabelem CYKY 3×2,5 mm²</li>
                <li><strong>Proudový chránič:</strong> 30 mA, buď samostatný pro daný okruh, nebo skupinový pro více venkovních okruhů</li>
                <li><strong>Samostatný okruh pro náročnější spotřebiče:</strong> bazénová technologie, tepelné čerpadlo nebo nabíječka elektromobilu potřebují vlastní okruh dimenzovaný podle příkonu zařízení – tady se vyplatí poradit se s elektrikářem už ve fázi plánování</li>
              </ul>
              <p>Pokud rozvaděč nemá volné místo pro nový jistič a chránič, je potřeba ho rozšířit nebo doplnit přídavnou rozvodnici. Tohle rozhodně není práce na improvizaci – přetížený nebo neorganizovaný rozvaděč je častou příčinou problémů popsaných v článku o tom, <Link href="/blog/proc-vypadava-jistic" style={{ color: "#2a6496", textDecoration: "underline" }}>proč vypadává jistič</Link>.</p>
            </section>

            <section id="chyby">
              <h2>Typické chyby a kdy volat elektrikáře</h2>
              <h3>Nejčastější chyby</h3>
              <ul>
                <li><strong>Použití nevhodného kabelu</strong> – prodlužovací kabel natažený přes zahradu a zakopaný „narychlo" bez chráničky a pískového lože. Izolace se časem poruchí, voda se dostane ke kabelu a hrozí zkrat nebo úraz.</li>
                <li><strong>Chybějící proudový chránič</strong> – bez chrániče může i drobná závada na svítidle nebo zásuvce znamenat smrtelné nebezpečí, zejména na vlhké zahradě nebo u bazénu.</li>
                <li><strong>Nedostatečné krytí IP</strong> – zásuvka s krytkou, která se po zapojení nedovře, nebo svítidlo s IP20 namontované venku „protože vypadá hezky".</li>
                <li><strong>Příliš mělké uložení kabelu</strong> – kabel poškozený rýčem při kopání záhonu je jedna z nejčastějších závad, se kterou elektrikáři na zahradách bojují.</li>
                <li><strong>Improvizované spoje</strong> – krabice nebo spojky bez odpovídajícího krytí, často „zaizolované" páskou a zakopané do země.</li>
              </ul>
              <h3>Co lze udělat svépomocí</h3>
              <p>Pokud máš základní znalosti a hotovou instalaci od elektrikáře, můžeš sám: vyměnit svítidlo za stejný typ se stejným krytím, doplnit prodlužovací kabel s vlastním přenosným chráničem pro krátkodobé použití (sekačka, vánoční osvětlení) nebo vyměnit poškozenou krytku zásuvky.</p>
              <h3>Kdy je nutný elektrikář a revize</h3>
              <p>Jakmile jde o nový okruh vedený do země, napojení na rozvaděč, instalaci nové zásuvkové rozvodnice nebo cokoliv u bazénu, je elektrikář s odpovídající kvalifikací nezbytný. Po dokončení práce musí proběhnout <strong>revize elektrického zařízení</strong> – revizní technik změří izolační odpor, funkčnost chrániče a vystaví revizní zprávu. Bez ní nemusí pojišťovna v případě škody plnit a u novostaveb nebo rekonstrukcí je revize navíc často vyžadována stavebním úřadem.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Než se zahrada zazelená a kabely zmizí pod trávníkem, je dobrý čas naplánovat i venkovní <Link href="/blog/venkovni-osvetleni-zahrady" style={{ color: "#2a6496", textDecoration: "underline" }}>osvětlení zahrady</Link> – sloupková rozvodnice se zásuvkou ti pak poslouží i pro napájení reflektorů, světelných řetězů nebo zahradního jezírka.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jaké krytí IP musí mít venkovní zásuvka?", a: "Venkovní zásuvka by měla mít minimálně krytí IP44 pro místa chráněná před deštěm (např. pod přístřeškem) a IP65 nebo IP67 pro místa vystavená přímému dešti a stříkající vodě. Krytka musí zůstat zavřená i se zasunutou zástrčkou." },
                  { q: "Je povinný proudový chránič pro venkovní zásuvky?", a: "Ano, podle normy ČSN 33 2000-7-704 musí být všechny venkovní okruhy chráněny proudovým chráničem (RCD) s vybavovacím proudem maximálně 30 mA. Chránič odpojí napájení během zlomku sekundy při úniku proudu." },
                  { q: "Jak hluboko se ukládá kabel do země na zahradě?", a: "Standardně se kabel ukládá do hloubky 35–40 cm na pískové lože, chrání se ochrannou trubkou (chráničkou) a nad ním se ve výšce přibližně 20 cm umisťuje výstražná folie, která upozorní při budoucím kopání." },
                  { q: "Můžu si venkovní zásuvku zapojit sám?", a: "Drobné úpravy jako výměna svítidla za stejný typ zvládne zkušený kutil. Nové okruhy vedené do země, napojení na rozvaděč a instalace nových zásuvek by ale měl provést elektrikář s odpovídající kvalifikací, a celé dílo musí mít platnou revizi." },
                  { q: "Jaké jištění potřebuje okruh pro venkovní zásuvky?", a: "Běžný okruh pro venkovní zásuvky se jistí jističem 16 A (kabel CYKY 3×2,5 mm²) a vždy se kombinuje s proudovým chráničem 30 mA. Pro výkonnější spotřebiče, jako je bazénová technologie, se používá samostatný okruh s vyšším jištěním podle výkonu zařízení." },
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
                <li><a href="#krytí-ip">Krytí IP</a></li>
                <li><a href="#chránič">Proudový chránič</a></li>
                <li><a href="#kabel-do-zeme">Kabel do země</a></li>
                <li><a href="#typy-zasuvek">Typy zásuvek</a></li>
                <li><a href="#rozvadec">Rozvaděč a jištění</a></li>
                <li><a href="#chyby">Chyby a elektrikář</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/elektrika" className="sidebar-cat-link">💡 Elektrika & osvětlení<span>20 článků →</span></Link>
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
