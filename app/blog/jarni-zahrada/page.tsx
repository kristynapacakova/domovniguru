import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak připravit zahradu na jaro – kompletní checklist 2025",
  description: "Co udělat na zahradě v březnu a dubnu. Checklist jarních prací: trávník, záhony, keře, nástroje, závlaha a kompost.",
  alternates: { canonical: "https://domovniguru.cz/blog/jarni-zahrada" },
  openGraph: { title: "Jak připravit zahradu na jaro – kompletní checklist", description: "Co udělat na zahradě v březnu a dubnu. Checklist jarních prací.", url: "https://domovniguru.cz/blog/jarni-zahrada", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2025-02-10T08:00:00Z", modifiedTime: "2025-03-01T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak připravit zahradu na jaro – kompletní checklist", description: "Co udělat na zahradě v březnu a dubnu." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://domovniguru.cz/blog/jarni-zahrada#article", "headline": "Jak připravit zahradu na jaro – kompletní checklist", "datePublished": "2025-02-10T08:00:00Z", "dateModified": "2025-03-01T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "inLanguage": "cs", "keywords": ["jarní zahrada", "příprava zahrady na jaro", "co dělat na zahradě v březnu", "jarní práce zahrada", "zahrada checklist"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Zahrada & terasa", "item": "https://domovniguru.cz/blog/kategorie/zahrada" }, { "@type": "ListItem", "position": 4, "name": "Jak připravit zahradu na jaro", "item": "https://domovniguru.cz/blog/jarni-zahrada" }] }] };

const RELATED = [
  { title: "Jak ošetřit dřevěnou terasu před zimou", href: "/blog/drevo-terasa-zima", read: "4 min" },
  { title: "Jak připravit dům na zimu – checklist", href: "/blog/jak-pripravit-dum-na-zimu", read: "5 min" },
  { title: "Jak se zbavit plísně na zdi natrvalo", href: "/blog/jak-odstranit-plisen-na-zdi", read: "5 min" },
  { title: "Stěhování do nového – kompletní checklist", href: "/blog/stehovani-checklist", read: "5 min" },
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
              <span>Jak připravit zahradu na jaro</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak připravit zahradu na jaro – kompletní checklist</h1>
              <p className="article-lead">Zahrada, která na jaře vypadá skvěle, se nepřipravuje v dubnu – připravuje se v březnu. Tenhle checklist tě provede vším, co je potřeba udělat, v pořadí, v jakém to má smysl.</p>
              <div className="article-meta-row"><span>Aktualizováno: 1. března 2025</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#kdy-zacit">Kdy začít – teplotní signály</a></li>
                <li><a href="#travnik">Trávník</a></li>
                <li><a href="#keresastromy">Keře a stromy</a></li>
                <li><a href="#zahony">Záhony a záhonky</a></li>
                <li><a href="#nastroje">Nástroje a závlaha</a></li>
                <li><a href="#terasa">Terasa a nábytek</a></li>
                <li><a href="#checklist">Kompletní checklist</a></li>
              </ol>
            </nav>

            <section id="kdy-zacit">
              <h2>Kdy začít – jak poznat správný čas</h2>
              <p>Neřiď se datem, ale teplotou. Základní pravidlo: zahradní práce začínáš, když teplota v noci neklesá pod 0 °C a přes den stabilně přesahuje 5 °C. V Česku to bývá konec února až polovina března, v závislosti na regionu.</p>
              <ul>
                <li><strong>Konec února – začátek března:</strong> Čištění záhonů, prořez ovocných stromů, hnojení trávníku</li>
                <li><strong>Března – duben:</strong> Setí, sázení, ošetření keřů, příprava záhonů</li>
                <li><strong>Duben – květen:</strong> Výsadba citlivých rostlin, zálivka, mulčování</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Nespěchej se setím. Semena vysazená do studené půdy (pod 8 °C) neklíčí a hnijí. Počkej na oteplení – zahrada ti to vrátí rychlejším a silnějším klíčením.</div>
            </section>

            <section id="travnik">
              <h2>Trávník – jak ho probrat po zimě</h2>
              <h3>Vertikutace</h3>
              <p>Vertikutace (provzdušnění) je nejdůležitější jarní práce na trávníku. Vertikutátor nebo hrabičky projedou trávníkem a vytrhají zfilcovanou vrstvu starého trávníku, mechu a organické hmoty, která blokuje přístup vzduchu a vody ke kořenům.</p>
              <p>Dělá se na jaře, kdy je trávník alespoň 5 cm vysoký a půda není mokrá. Po vertikutaci trávník vypadá hrozně – ale za 2–3 týdny se krásně zazelená.</p>
              <h3>Dosévání holých míst</h3>
              <p>Po vertikutaci dosej holá a prořídlá místa. Smíchej trávníkové semeno se substrátem (poměr 1:3), rovnoměrně rozhoď a přitlač. Udržuj vlhké po dobu 2–3 týdnů.</p>
              <h3>Hnojení</h3>
              <p>Na jaře trávník potřebuje dusíkaté hnojivo pro rychlý start. Použij jarní trávníkové hnojivo s vyšším obsahem dusíku (N). Aplikuj dle návodu, obvykle 20–30 g/m².</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Neaplikuj hnojivo na příliš suchý nebo promočený trávník. Ideální je lehce vlhká půda a suchý den.</div>
            </section>

            <section id="keresastromy">
              <h2>Keře a stromy – prořez a ošetření</h2>
              <h3>Ovocné stromy</h3>
              <p>Prořez ovocných stromů se dělá na konci zimy – ideálně v únoru nebo začátkem března, před rašením pupenů. Odstraň suché, nemocné a do středu koruny směřující větve. Cílem je vzdušná koruna ve tvaru poháru.</p>
              <h3>Růže</h3>
              <p>Růže prořezáváš, když pupeny začínají rašit (typicky březen). Prořezej na 3–5 očka od země, šikmo nad pupenem. Odstraň všechny suché a slabé výhony.</p>
              <h3>Okrasné keře</h3>
              <p>Keře kvetoucí na letošních výhonech (levandule, tavolník) prořezej na jaře. Keře kvetoucí na loňských výhonech (forsythie, zlatice) prořezávej až po odkvětu.</p>
              <h3>Ochrana před škůdci</h3>
              <p>Na jaře postříkej ovocné stromy a keře přípravkem proti přezimujícím škůdcům a houbovým chorobám. Vhodná jsou olejová postřiková emulze nebo síra.</p>
            </section>

            <section id="zahony">
              <h2>Záhony – příprava na sezónu</h2>
              <h3>Čištění a provzdušnění</h3>
              <p>Odstraň zbytky loňských rostlin, suché listy a odumřelé části trvalek. Záhon lehce překopej nebo jen zrýpej vidlemi, abys nenarušil strukturu půdy. Nevytahuj červy – jsou tvoji spojenci.</p>
              <h3>Kompost a hnojení</h3>
              <p>Záhony obohaťte kompostem nebo vyzrálým hnojem (4–6 cm vrstva), který zapracuj do horní vrstvy půdy. Čerstvý kompost přidej jako mulč na povrch – udrží vlhkost a potlačí plevel.</p>
              <h3>Mulčování</h3>
              <p>Mulč (kůra, štěpka, kompost) nanesený 5–8 cm na záhony zabrání plevelům, udrží vlhkost a postupně obohacuje půdu. Nejlepší investice do záhonu.</p>
            </section>

            <section id="nastroje">
              <h2>Nástroje a závlaha – příprava před sezónou</h2>
              <h3>Kontrola a nabroušení nástrojů</h3>
              <ul>
                <li>Naolejuj kovové části lopat, rýčů a vidlí</li>
                <li>Naostruj nůžky na keře a sekáče – tupý nástroj trápí rostlinu</li>
                <li>Zkontroluj hadice na praskliny a poškozené spojky</li>
                <li>Seřiď sekačku – vyměň zapalovací svíčku, vyčisti vzduchový filtr a nabrousí nůž</li>
              </ul>
              <h3>Závlahový systém</h3>
              <p>Pokud máš automatickou závlahu, zkontroluj postřikovače a hadice po zimě. Spusť systém a zkontroluj, zda někde netéče a zda všechny zóny fungují. Upravuj časovač závlahy podle aktuálního počasí.</p>
            </section>

            <section id="terasa">
              <h2>Terasa a zahradní nábytek</h2>
              <h3>Dřevěná terasa</h3>
              <p>Dřevěnou terasu umyj tlakovou vodou (nebo kartáčem s čistícím prostředkem), nechej vyschnout a ošetři terasovým olejem nebo lazurou. Chráníš tím dřevo před vlhkostí, UV zářením a plísněmi na celou sezónu.</p>
              <h3>Zahradní nábytek</h3>
              <p>Vyndej nábytek ze zimního skladování, umyj a zkontroluj. Plastový nábytek stačí umýt mýdlovou vodou. Dřevěný nábytek ošetři olejem. Kovový zkontroluj na rez – zrezlá místa přebrousí a ošetři antirezovým nátěrem.</p>
              <h3>Závěsné lampy a osvětlení</h3>
              <p>Zkontroluj stav elektriky na terase – těsnění, patice, kabely. Po zimě mohou být poškozené mrazem nebo vlhkostí.</p>
            </section>

            <section id="checklist">
              <h2>Kompletní jarní checklist</h2>
              <div className="article-tip"><strong>✅ Únor / začátek března</strong></div>
              <ul>
                <li>Prořez ovocných stromů</li>
                <li>Ošetření stromů a keřů proti přezimujícím škůdcům</li>
                <li>Hnojení trávníku jarním hnojivem</li>
                <li>Kontrola a nabroušení zahradních nástrojů</li>
              </ul>
              <div className="article-tip"><strong>✅ Březen</strong></div>
              <ul>
                <li>Vertikutace trávníku</li>
                <li>Dosévání holých míst v trávníku</li>
                <li>Čištění záhonů od loňských zbytků</li>
                <li>Přidání kompostu do záhonů</li>
                <li>Prořez růží</li>
                <li>Kontrola závlahového systému</li>
              </ul>
              <div className="article-tip"><strong>✅ Duben</strong></div>
              <ul>
                <li>Mulčování záhonů</li>
                <li>Sázení cibulovin a raných zelenin</li>
                <li>Umytí a ošetření dřevěné terasy</li>
                <li>Vyndání a ošetření zahradního nábytku</li>
                <li>Prořez keřů kvetoucích na letošních výhonech</li>
                <li>První sekání trávníku (při výšce 8–10 cm)</li>
              </ul>
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
                <li><a href="#kdy-zacit">Kdy začít</a></li>
                <li><a href="#travnik">Trávník</a></li>
                <li><a href="#keresastromy">Keře a stromy</a></li>
                <li><a href="#zahony">Záhony</a></li>
                <li><a href="#nastroje">Nástroje a závlaha</a></li>
                <li><a href="#terasa">Terasa a nábytek</a></li>
                <li><a href="#checklist">Kompletní checklist</a></li>
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
