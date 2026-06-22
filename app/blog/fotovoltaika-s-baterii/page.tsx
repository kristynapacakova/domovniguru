import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fotovoltaika s baterií – má smysl doma skladovat elektřinu?",
  description: "Vyplatí se přidat baterii k solárním panelům? Srovnání typů baterií, výpočet kapacity, náklady, návratnost a dotace NZÚ 2026.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/fotovoltaika-s-baterii" },
  openGraph: { title: "Fotovoltaika s baterií – má smysl doma skladovat elektřinu?", description: "Srovnání LFP vs. NMC baterií, výpočet kapacity a realistická návratnost. Dotace NZÚ 2026.", url: "https://www.domovniguru.cz/blog/fotovoltaika-s-baterii", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-09T08:00:00Z", modifiedTime: "2026-06-09T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Fotovoltaika%20s%20bater%C3%AD%20%E2%80%93%20m%C3%A1%20smysl%20doma%20skladovat%20elekt%C5%99inu%3F&cat=blog", width: 1200, height: 630, alt: "Fotovoltaika s baterií – má smysl doma skladovat elektřinu?" }] },
  twitter: { card: "summary_large_image", title: "Fotovoltaika s baterií – má smysl doma skladovat elektřinu?", description: "Srovnání LFP vs. NMC baterií, výpočet kapacity a realistická návratnost. Dotace NZÚ 2026." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/fotovoltaika-s-baterii#article", "headline": "Fotovoltaika s baterií – má smysl doma skladovat elektřinu?", "datePublished": "2026-06-09T08:00:00Z", "dateModified": "2026-06-09T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["fotovoltaika s baterií", "baterie pro solární panely", "LFP baterie", "NZÚ dotace baterie", "virtuální baterie", "domácí akumulátor"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Elektrika & osvětlení", "item": "https://www.domovniguru.cz/blog/kategorie/elektrika" }, { "@type": "ListItem", "position": 4, "name": "Fotovoltaika s baterií", "item": "https://www.domovniguru.cz/blog/fotovoltaika-s-baterii" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Kolik stojí domácí baterie k fotovoltaice?", "acceptedAnswer": { "@type": "Answer", "text": "Cena domácí baterie se v roce 2026 pohybuje od 40 000 Kč za 5 kWh (LFP) do 150 000 Kč za 15 kWh (prémiové systémy). Průměrná cena za 10 kWh LFP baterii je přibližně 80 000–100 000 Kč včetně instalace." } }, { "@type": "Question", "name": "Jak dlouho trvá návratnost baterie k FVE?", "acceptedAnswer": { "@type": "Answer", "text": "Samotná baterie má při realistickém výpočtu dobu návratnosti 12–18 let, zatímco její zaručená životnost je 10–15 let. Baterie se tedy nemusí finančně vrátit, ale přináší energetickou nezávislost a jistotu při výpadcích sítě." } }, { "@type": "Question", "name": "Jaká dotace NZÚ je na baterii v roce 2026?", "acceptedAnswer": { "@type": "Answer", "text": "V roce 2026 lze z programu Nová zelená úsporám získat dotaci až 50 000 Kč na akumulátor energie (při kapacitě min. 4 kWh). Podmínkou je kombinace s FVE instalací a splnění technických parametrů zařízení." } }, { "@type": "Question", "name": "Co je virtuální baterie a kdy se vyplatí?", "acceptedAnswer": { "@type": "Answer", "text": "Virtuální baterie je služba od distributora nebo obchodníka s elektřinou – přebytky z FVE ukládáte do sítě a čerpáte je zpět v době nedostatku výroby. Vyplatí se jako levnější alternativa fyzické baterie, pokud váš dodavatel takový produkt nabízí a výkupní podmínky jsou výhodné." } }] }] };

const RELATED = [
  { title: "Solární panely na dům – jak vybrat výkon, typ a dodavatele", href: "/blog/jak-vybrat-solarni-panely", read: "7 min" },
  { title: "Jak vybrat dodavatele a tarif elektřiny a ušetřit tisíce ročně", href: "/blog/jak-vybrat-dodavatele-elektriny", read: "5 min" },
  { title: "Jak snížit účet za elektřinu doma – bez výměny spotřebičů", href: "/blog/snizit-ucet-za-elektrinu", read: "5 min" },
  { title: "Chytrý termostat – jak funguje a kolik ušetří na vytápění", href: "/blog/chytry-termostat-uspora-vytapeni", read: "5 min" },
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
              <span>Fotovoltaika s baterií</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">💡 Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Fotovoltaika s baterií – má smysl doma skladovat elektřinu?</h1>
              <p className="article-lead">Solární panely vyrábějí elektřinu přes den, ale spotřeba je nejvyšší ráno a večer. Baterie tento nesoulad řeší – ale za jakou cenu a s jakou návratností? Tenhle článek ti dá konkrétní čísla za rok 2026.</p>
              <div className="article-meta-row"><span>Publikováno: 9. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#fve-s-baterii-vs-bez">FVE bez baterie vs. s baterií</a></li>
                <li><a href="#typy-baterii">Typy baterií – LFP vs. NMC</a></li>
                <li><a href="#kapacita-baterie">Jak vybrat kapacitu baterie</a></li>
                <li><a href="#naklady-navratnost">Náklady a návratnost</a></li>
                <li><a href="#dotace-nzu">Dotace NZÚ na baterie 2026</a></li>
                <li><a href="#virtualni-baterie">Virtuální baterie a přebytky do sítě</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="fve-s-baterii-vs-bez">
              <h2>FVE bez baterie vs. s baterií</h2>
              <p>Fotovoltaická elektrárna bez baterie posílá přebytky do distribuční sítě za výkupní cenu. Ta je v roce 2026 typicky <strong>1,5–2,5 Kč/kWh</strong>, zatímco cena elektřiny ze sítě se pohybuje kolem <strong>5,5–7 Kč/kWh</strong>. Baterie ti umožní spotřebovat vlastní elektřinu místo levného výkupu – a to se promítne do úspor.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Parametr</th><th>FVE bez baterie</th><th>FVE s baterií 10 kWh</th></tr></thead>
                  <tbody>
                    <tr><td>Přebytky do sítě</td><td>40–60 % výroby</td><td>5–15 % výroby</td></tr>
                    <tr><td>Cena za přebytky</td><td>1,5–2,5 Kč/kWh</td><td>minimální export</td></tr>
                    <tr><td>Vlastní spotřeba (self-sufficiency)</td><td>40–50 %</td><td>70–85 %</td></tr>
                    <tr><td>Nezávislost při výpadku sítě</td><td>Ne (standardní střídač)</td><td>Ano (s off-grid funkcí)</td></tr>
                    <tr><td>Investice navíc oproti FVE bez baterie</td><td>–</td><td>80 000–120 000 Kč</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Čím vyšší máš cenu elektřiny ze sítě a čím vyšší je spotřeba domácnosti ve večerních hodinách, tím více se baterie vyplatí.</div>
            </section>

            <section id="typy-baterii">
              <h2>Typy baterií – LFP vs. NMC</h2>
              <p>Na trhu dominují dva typy lithiových článků: LFP (lithium-železo-fosfátové) a NMC (lithium-nikl-mangan-kobalt). Každý má jiné vlastnosti a hodí se do jiných podmínek.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Vlastnost</th><th>LFP (LiFePO4)</th><th>NMC</th></tr></thead>
                  <tbody>
                    <tr><td>Cena za kWh (2026)</td><td>8 000–12 000 Kč/kWh</td><td>6 000–9 000 Kč/kWh</td></tr>
                    <tr><td>Životnost cyklů</td><td>4 000–6 000 cyklů</td><td>1 500–3 000 cyklů</td></tr>
                    <tr><td>Bezpečnost</td><td>Velmi vysoká (stabilní chemie)</td><td>Střední (citlivější na teplo)</td></tr>
                    <tr><td>Teplotní odolnost</td><td>−20 °C až +60 °C</td><td>0 °C až +45 °C</td></tr>
                    <tr><td>Energetická hustota</td><td>Nižší (větší rozměry)</td><td>Vyšší (kompaktnější)</td></tr>
                    <tr><td>Doporučení pro domácnosti</td><td><strong>Ano – preferovaná volba</strong></td><td>Spíše ne (kratší životnost)</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Pro domácí použití je LFP jednoznačně lepší volbou – delší životnost kompenzuje vyšší pořizovací cenu a bezpečnost je klíčová při instalaci v garáži nebo technické místnosti.</p>
            </section>

            <section id="kapacita-baterie">
              <h2>Jak vybrat kapacitu baterie</h2>
              <p>Základní pravidlo: baterie by měla pojmout přebytky z typického slunečného dne a pokrýt večerní spotřebu. Výkon FVE a roční výnos ověříš pomocí naší <Link href="/kalkulacky/solarni-panely" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačky solárních panelů</Link>.</p>
              <h3>Jednoduchý výpočet</h3>
              <ul>
                <li>Zjisti denní spotřebu domácnosti (typicky 8–20 kWh/den)</li>
                <li>Odhadni, kolik elektřiny FVE vyrobí přes den (5 kWp FVE = cca 15–20 kWh v létě, 3–5 kWh v zimě)</li>
                <li>Požadovaná kapacita baterie = průměrná večerní spotřeba (17:00–23:00), typicky 3–8 kWh</li>
                <li>Přidej 20% rezervu pro degradaci baterie v čase</li>
              </ul>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Velikost domácnosti</th><th>Denní spotřeba</th><th>Doporučená kapacita baterie</th><th>Orientační cena baterie</th></tr></thead>
                  <tbody>
                    <tr><td>Byt / malý dům (2 osoby)</td><td>6–10 kWh</td><td>5–7 kWh</td><td>45 000–85 000 Kč</td></tr>
                    <tr><td>Rodinný dům (4 osoby)</td><td>10–16 kWh</td><td>8–12 kWh</td><td>70 000–130 000 Kč</td></tr>
                    <tr><td>Velký dům / tepelné čerpadlo</td><td>16–25 kWh</td><td>12–20 kWh</td><td>110 000–200 000 Kč</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Předimenzovaná baterie se nevyplatí. Lepší je začít s menší kapacitou (7–10 kWh) a případně ji rozšířit, pokud systém umožňuje modulární rozšíření.</div>
            </section>

            <section id="naklady-navratnost">
              <h2>Náklady a návratnost</h2>
              <p>Přidání baterie prodlužuje celkovou dobu návratnosti FVE systému. Počítej realisticky – ne s optimistickými scénáři výrobců.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Parametr</th><th>FVE 5 kWp bez baterie</th><th>FVE 5 kWp + baterie 10 kWh</th></tr></thead>
                  <tbody>
                    <tr><td>Pořizovací cena (bez dotace)</td><td>180 000–220 000 Kč</td><td>270 000–340 000 Kč</td></tr>
                    <tr><td>Roční úspora na elektřině</td><td>18 000–25 000 Kč</td><td>24 000–32 000 Kč</td></tr>
                    <tr><td>Self-sufficiency</td><td>~45 %</td><td>~78 %</td></tr>
                    <tr><td>Doba návratnosti FVE</td><td>8–11 let</td><td>10–14 let</td></tr>
                    <tr><td>Příplatek za baterii (návratnost)</td><td>–</td><td>+12–18 let (baterie samotná)</td></tr>
                    <tr><td>Životnost baterie (LFP)</td><td>–</td><td>12–16 let (4 000+ cyklů)</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Z čísel je zřejmé, že baterie se <strong>čistě finančně nevyplatí</strong> ve většině případů – zejména pokud počítáš s tím, že ji jednou budeš muset vyměnit. Její přidaná hodnota je v energetické nezávislosti, ochraně před výpadky sítě a pohodlí.</p>
              <div className="article-tip"><strong>💡 Pozor:</strong> Výpočty předpokládají cenu elektřiny 6 Kč/kWh a roční výrobu 5 000 kWh pro 5 kWp FVE v ČR. Pokud ceny elektřiny porostou, návratnost se zkrátí.</div>
            </section>

            <section id="dotace-nzu">
              <h2>Dotace NZÚ na baterie (aktuální 2026)</h2>
              <p>Program <strong>Nová zelená úsporám (NZÚ)</strong> v roce 2026 podporuje instalaci akumulátorů energie v rodinných domech. Podmínkou je kombinace s fotovoltaickou elektrárnou nebo jiným zdrojem obnovitelné energie.</p>
              <h3>Výše dotace</h3>
              <ul>
                <li>Až <strong>50 000 Kč</strong> na akumulátor energie (při kapacitě min. 4 kWh)</li>
                <li>Dotace se kombinuje s dotací na FVE (až 100 000 Kč pro rodinný dům)</li>
                <li>Celková dotace FVE + baterie může dosáhnout až <strong>150 000 Kč</strong></li>
              </ul>
              <h3>Podmínky pro dotaci</h3>
              <ul>
                <li>Rodinný nebo bytový dům na území ČR</li>
                <li>Baterie musí splňovat technické parametry NZÚ (certifikace, bezpečnost)</li>
                <li>Instalaci provede oprávněná osoba (certifikovaný instalatér)</li>
                <li>Žádost podáš přes portál NZÚ před zahájením stavebních prací nebo do 12 měsíců po dokončení</li>
              </ul>
              <h3>Jak žádat</h3>
              <ul>
                <li>Registrace na portálu <strong>novazelenausporam.cz</strong></li>
                <li>Vyplnění žádosti online + doložení projektové dokumentace</li>
                <li>Po schválení realizace a doložení faktur proběhne proplacení dotace</li>
                <li>Průměrná doba vyřízení: 3–6 měsíců od podání žádosti</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Vždy zkontroluj aktuální podmínky přímo na portálu NZÚ – parametry programu se průběžně aktualizují. S dotací se doba návratnosti celého systému zkrátí o 1–3 roky.</div>
            </section>

            <section id="virtualni-baterie">
              <h2>Virtuální baterie a přebytky do sítě</h2>
              <p>Fyzická baterie není jediná možnost, jak využít přebytky z FVE. <strong>Virtuální baterie</strong> je komerční produkt, který nabízí stále více dodavatelů elektřiny v ČR (např. ČEZ, E.ON, Innogy/MND).</p>
              <h3>Jak virtuální baterie funguje</h3>
              <ul>
                <li>Přebytky z FVE „ukládáš" do sítě za tržní nebo smluvní cenu</li>
                <li>V době nedostatku výroby (večer, zima) čerpáš uložené kWh zpět</li>
                <li>Platíš jen distribuční poplatky za přenesené elektřiny – „energie" samotná je tvoje</li>
              </ul>
              <h3>Srovnání virtuální vs. fyzické baterie</h3>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Parametr</th><th>Fyzická baterie</th><th>Virtuální baterie</th></tr></thead>
                  <tbody>
                    <tr><td>Pořizovací náklady</td><td>80 000–130 000 Kč</td><td>0 Kč (součást tarifu)</td></tr>
                    <tr><td>Funguje při výpadku sítě</td><td>Ano (s off-grid střídačem)</td><td>Ne</td></tr>
                    <tr><td>Ztráty při přenosu</td><td>~5–10 % (nabíjení/vybíjení)</td><td>Distribuční poplatky</td></tr>
                    <tr><td>Sezónní přenos energie</td><td>Ne (denní cyklus)</td><td>Ano (léto → zima)</td></tr>
                    <tr><td>Závislost na dodavateli</td><td>Ne</td><td>Ano – změna tarifu nebo dodavatele komplikuje situaci</td></tr>
                    <tr><td>Vhodnost</td><td>Energetická nezávislost</td><td>Maximální finanční efektivita</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Virtuální baterie je zajímavá alternativa pro ty, kteří chtějí co nejkratší dobu návratnosti FVE bez velké počáteční investice do akumulátoru. Hlavní nevýhodou je závislost na konkrétním dodavateli a absenci ochrany při výpadku sítě.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Kolik stojí domácí baterie k fotovoltaice?", a: "Cena domácí baterie se v roce 2026 pohybuje od 40 000 Kč za 5 kWh (LFP) do 150 000 Kč za 15 kWh (prémiové systémy). Průměrná cena za 10 kWh LFP baterii je přibližně 80 000–100 000 Kč včetně instalace." },
                  { q: "Jak dlouho trvá návratnost baterie k FVE?", a: "Samotná baterie má při realistickém výpočtu dobu návratnosti 12–18 let, zatímco její zaručená životnost je 10–15 let. Baterie se tedy nemusí finančně vrátit, ale přináší energetickou nezávislost a jistotu při výpadcích sítě." },
                  { q: "Jaká dotace NZÚ je na baterii v roce 2026?", a: "V roce 2026 lze z programu Nová zelená úsporám získat dotaci až 50 000 Kč na akumulátor energie (při kapacitě min. 4 kWh). Podmínkou je kombinace s FVE instalací a splnění technických parametrů zařízení." },
                  { q: "Co je virtuální baterie a kdy se vyplatí?", a: "Virtuální baterie je služba od distributora nebo obchodníka s elektřinou – přebytky z FVE ukládáte do sítě a čerpáte je zpět v době nedostatku výroby. Vyplatí se jako levnější alternativa fyzické baterie, pokud váš dodavatel takový produkt nabízí a výkupní podmínky jsou výhodné." },
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
                <li><a href="#fve-s-baterii-vs-bez">FVE bez baterie vs. s baterií</a></li>
                <li><a href="#typy-baterii">Typy baterií – LFP vs. NMC</a></li>
                <li><a href="#kapacita-baterie">Jak vybrat kapacitu</a></li>
                <li><a href="#naklady-navratnost">Náklady a návratnost</a></li>
                <li><a href="#dotace-nzu">Dotace NZÚ 2026</a></li>
                <li><a href="#virtualni-baterie">Virtuální baterie</a></li>
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
