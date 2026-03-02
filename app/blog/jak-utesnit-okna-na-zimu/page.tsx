import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak utěsnit okna na zimu – přehled metod a co skutečně funguje 2025",
  description: "Průvan u oken zvyšuje účty za topení. Přehled metod utěsnění: těsnicí pásky, kity, fólie a přenastavení plastových oken. Co funguje a co nestojí za to.",
  alternates: { canonical: "https://domovniguru.cz/blog/jak-utesnit-okna-na-zimu" },
  openGraph: { title: "Jak utěsnit okna na zimu – přehled metod", description: "Průvan u oken? Přehled metod utěsnění, co funguje a jak na to.", url: "https://domovniguru.cz/blog/jak-utesnit-okna-na-zimu", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2025-09-20T08:00:00Z", modifiedTime: "2025-03-01T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak utěsnit okna na zimu", description: "Průvan u oken? Přehled metod utěsnění, co funguje." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://domovniguru.cz/blog/jak-utesnit-okna-na-zimu#article", "headline": "Jak utěsnit okna na zimu – přehled metod", "datePublished": "2025-09-20T08:00:00Z", "dateModified": "2025-03-01T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "inLanguage": "cs", "keywords": ["utěsnit okna na zimu", "průvan u oken", "těsnicí páska okna", "zimní nastavení oken"] }] };

const RELATED = [
  { title: "Jak připravit dům na zimu – kompletní checklist", href: "/blog/jak-pripravit-dum-na-zimu", read: "5 min" },
  { title: "Jak odvzdušnit radiátory", href: "/blog/jak-odvzdusit-radiatory", read: "3 min" },
  { title: "LED vs. žárovky – co se skutečně vyplatí?", href: "/blog/led-vs-zarovky", read: "4 min" },
  { title: "Jak ošetřit dřevěnou terasu před zimou", href: "/blog/drevo-terasa-zima", read: "4 min" },
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
              <span>Jak utěsnit okna na zimu</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">❄️ Sezónní údržba</Link>
                <span className="article-read-time">⏱ 4 min čtení</span>
              </div>
              <h1 className="article-h1">Jak utěsnit okna na zimu – přehled metod a co skutečně funguje</h1>
              <p className="article-lead">Průvan kolem oken může tvořit až 25 % tepelných ztrát v domácnosti. Přitom utěsnění stojí korunky a hodinu práce. Tenhle článek ti ukáže, co kdy použít a co nestojí za čas ani peníze.</p>
              <div className="article-meta-row"><span>Aktualizováno: 1. března 2025</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#kde-teci">Kde nejvíce uniká teplo</a></li>
                <li><a href="#plasticka-okna">Plastová okna – zimní nastavení</a></li>
                <li><a href="#tesnici-paska">Těsnicí páska</a></li>
                <li><a href="#silikonovy-tmel">Silikonový tmel a akrylový kit</a></li>
                <li><a href="#folie">Izolační fólie na okna</a></li>
                <li><a href="#zavesy">Těžké závěsy jako doplněk</a></li>
                <li><a href="#porovnani">Srovnání metod</a></li>
              </ol>
            </nav>

            <section id="kde-teci">
              <h2>Kde nejvíce uniká teplo kolem oken</h2>
              <p>Než začneš těsnit, zjisti kde přesně tvoří průvan. Hlavní místa úniku tepla jsou:</p>
              <ul>
                <li><strong>Spára mezi rámem a křídlem okna</strong> – nejčastější místo, řeší ho těsnicí páska nebo přenastavení oken</li>
                <li><strong>Spára mezi rámem okna a zdí</strong> – tady bývá starý nebo prasknutý silikon/kit, řeší ho přetmelení</li>
                <li><strong>Sklo samotné</strong> – u starších oken s jednoduchým sklem, řeší ho fólie nebo výměna za izolační dvojsklo</li>
                <li><strong>Dřevěné rámy se spárami</strong> – starší okna, kde dřevo sesychá a tvoří mezery</li>
              </ul>
              <div className="article-tip"><strong>💡 Test průvanu:</strong> Přilož zapálenou svíčku (nebo vlhkou ruku) ke každé spáře. Kde se plamen odchýlí nebo cítíš chlad – tam uniká teplo.</div>
            </section>

            <section id="plasticka-okna">
              <h2>Plastová okna – zimní nastavení kování</h2>
              <p>Toto je nejrychlejší a nejlevnější řešení pro plastová okna. Moderní plastová okna mají nastavitelné kování, které umožňuje změnit přítlak křídla k rámu.</p>
              <h3>Jak na to</h3>
              <p>Na závěsech (pantech) okna najdeš excentrický čep – malý válec s drážkou na šroubovák. Letní poloha (drážka svisle) = volnější, s mezerou pro ventilaci. Zimní poloha (drážka vodorovně) = pevnější přítlak těsnění.</p>
              <p>Otočení všech čepů zabere 5 minut a nevyžaduje žádné nářadí kromě šroubováku. Efekt: výrazně lepší utěsnění bez jakýchkoli nákladů.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Nezapomeň na jaře přepnout zpět do letní polohy – příliš silné celoroční přitlačení zkracuje životnost těsnění.</div>
            </section>

            <section id="tesnici-paska">
              <h2>Těsnicí páska – rychlé a levné řešení</h2>
              <p>Samolepicí těsnicí páska z pěnového nebo gumového materiálu se lepí do drážky rámu nebo na rám a při zavření okna utěsní spáru. Stojí 30–100 Kč za 6 metrů.</p>
              <h3>Kde se hodí</h3>
              <ul>
                <li>Starší dřevěná okna s většími spárami</li>
                <li>Dveře s průvanem (vstupní, balkónové)</li>
                <li>Okna bez nastavitelného kování</li>
              </ul>
              <h3>Nevýhody</h3>
              <p>Páska se po 2–3 sezonách rozlepuje a musí se vyměnit. Na plastová okna s nastavitelným kováním ji nepoužívej – zimní přenastavení funguje lépe a páska může bránit správnému zavírání.</p>
              <h3>Jak nalepit</h3>
              <p>Povrch musí být suchý, čistý a odmaštěný. Pásku nanes do drážky rámu (ne na vnější stranu). Přitlač po celé délce. Okno zavři a zkontroluj, že jde normálně zavřít bez přílišné síly.</p>
            </section>

            <section id="silikonovy-tmel">
              <h2>Silikonový tmel a akrylový kit – trvalé utěsnění spár</h2>
              <p>Spára mezi rámem okna a zdí nebo ostěním se utěsňuje tmelem. Stará spára praskla, vyschla nebo chybí? Tady je řešení.</p>
              <h3>Silikon vs. akrylový kit</h3>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Vlastnost</th><th>Silikon</th><th>Akrylový kit</th></tr></thead>
                  <tbody>
                    <tr><td>Pružnost</td><td>✅ Vysoká</td><td>Střední</td></tr>
                    <tr><td>Přemalování</td><td>Ne</td><td>✅ Ano</td></tr>
                    <tr><td>Odolnost vlhkosti</td><td>✅ Výborná</td><td>Dobrá</td></tr>
                    <tr><td>Životnost</td><td>10–20 let</td><td>5–10 let</td></tr>
                    <tr><td>Kde použít</td><td>Koupelna, exteriér</td><td>Interiér, malované rámy</td></tr>
                  </tbody>
                </table>
              </div>
              <h3>Postup</h3>
              <p>Odstraň starý tmel (nůž, špachtle), povrch očisti a odmaštěni. Nanes tmel pistolí, uhlaď prstem nebo mokrým štětcem do 5 minut. Nechej schnout dle pokynů výrobce.</p>
            </section>

            <section id="folie">
              <h2>Izolační fólie na okna – pro starší okna</h2>
              <p>Průhledná izolační fólie se lepí na okenní tabule a vytváří vzduchovou kapsu, která snižuje tepelné ztráty. Vhodná zejména pro starší okna s jednoduchým sklem.</p>
              <p>Fólie se lepí oboustrannou páskou na rám, pak se zahřeje fénem a napne. Efekt je znatelný – snižuje kondenzaci a tepelné ztráty přes sklo o 20–30 %. Na jaře se snadno odstraní.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Fólie na plastová okna s dvojsklem nemá velký smysl – tam jsou tepelné ztráty přes spáry, ne přes sklo. Zaměř se na přenastavení kování a utěsnění spár.</div>
            </section>

            <section id="zavesy">
              <h2>Těžké závěsy jako doplněk</h2>
              <p>Těžké termální závěsy nebo záclony nevyřeší průvan, ale snižují tepelné ztráty přes studené okno. Fungují jako tepelná bariéra mezi chladným oknem a místností. Jejich efekt je největší v noci, kdy jsou zatažené.</p>
              <p>Nejsou náhradou za utěsnění, ale dobrý doplněk – zejména u starších oken, kde kompletní výměna není aktuálně v plánu.</p>
            </section>

            <section id="porovnani">
              <h2>Srovnání metod – co kdy použít</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Metoda</th><th>Cena</th><th>Obtížnost</th><th>Efekt</th><th>Pro koho</th></tr></thead>
                  <tbody>
                    <tr><td>Zimní nastavení kování</td><td>Zdarma</td><td>Snadné</td><td>✅ Vysoký</td><td>Plastová okna</td></tr>
                    <tr><td>Těsnicí páska</td><td>30–100 Kč</td><td>Snadné</td><td>Střední</td><td>Dřevěná okna, dveře</td></tr>
                    <tr><td>Silikonový tmel</td><td>100–200 Kč</td><td>Střední</td><td>✅ Vysoký</td><td>Spáry rám–zeď</td></tr>
                    <tr><td>Izolační fólie</td><td>200–500 Kč</td><td>Střední</td><td>Střední</td><td>Stará okna s jednosklem</td></tr>
                    <tr><td>Termální závěsy</td><td>500–2000 Kč</td><td>Snadné</td><td>Doplňkový</td><td>Jako doplněk</td></tr>
                  </tbody>
                </table>
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
                <li><a href="#kde-teci">Kde uniká teplo</a></li>
                <li><a href="#plasticka-okna">Plastová okna</a></li>
                <li><a href="#tesnici-paska">Těsnicí páska</a></li>
                <li><a href="#silikonovy-tmel">Silikon a kit</a></li>
                <li><a href="#folie">Izolační fólie</a></li>
                <li><a href="#zavesy">Závěsy</a></li>
                <li><a href="#porovnani">Srovnání metod</a></li>
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
