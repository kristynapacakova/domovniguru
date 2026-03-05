import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak nastavit okna na zimu – přetočení kování krok za krokem | DomovniGuru",
  description: "Nastavení oken na zimní režim: přetočení kování, seřízení těsnění, teplejší byt a nižší účty. Zvládnete sami za 15 minut.",
  alternates: { canonical: "https://domovniguru.cz/navody/jak-nastavit-okna-na-zimu" },
};

export default function JakNastavitOknaNaZimu() {
  return (
    <>
      <div className="wrap">
        <div className="article-layout">
          <article className="article-body">

            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Domů</Link><span className="breadcrumb-sep">/</span>
              <Link href="/navody">Návody</Link><span className="breadcrumb-sep">/</span>
              <span>Jak nastavit okna na zimu</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <span className="article-cat-pill">🪟 Okna & těsnění</span>
                <span className="article-read-time">⏱ 15 min práce</span>
              </div>
              <h1 className="article-h1">Jak nastavit okna na zimu</h1>
              <p className="article-lead">
                Přetočení kování trvá 10 sekund na jedno okno a může ti ušetřit stovky korun za topení.
                Zimní režim přitlačí křídlo těsněji k rámu – táhne méně, méně se rosí sklo.
              </p>
              <div className="article-meta-row">
                <span>Aktualizováno: 1. března 2025</span><span>·</span><span>DomovniGuru</span>
              </div>
            </header>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah návodu</div>
              <ol className="toc-list">
                <li><a href="#co-budete-potrebovat">Co budete potřebovat</a></li>
                <li><a href="#kde-najit-kování">Kde najít přestavitelné kování</a></li>
                <li><a href="#postup">Postup přetočení kování</a></li>
                <li><a href="#tesni">Jak poznat, že okno těsní správně</a></li>
                <li><a href="#dalsi-tipy">Další tipy na zimní okna</a></li>
              </ol>
            </nav>

            <section id="co-budete-potrebovat">
              <h2>Co budete potřebovat</h2>
              <ul>
                <li>Plochý šroubovák nebo mince (na přetočení čepů)</li>
                <li>10–15 minut času</li>
                <li>Volitelně: silikonový sprej na mazání těsnění</li>
              </ul>
              <div className="article-tip">
                <strong>💡 Tip:</strong> Nástroj nepotřebuješ u většiny moderních plastových oken – čepy přetočíš prsty nebo mincí. Zkontroluj svá okna ještě dnes.
              </div>
            </section>

            <section id="kde-najit-kování">
              <h2>Kde najít přestavitelné kování</h2>
              <p>
                Hledej malé oválné nebo kulaté čepy na hraně okenního křídla – tam, kde křídlo dosedá na rám.
                Bývají na spodní hraně a na bočních stranách. Každý čep má dvě polohy označené ryskou nebo šipkou.
              </p>
              <p>
                <strong>Letní poloha:</strong> ryska vodorovně nebo šipka ven – křídlo méně přitlačeno, snazší otevírání.<br />
                <strong>Zimní poloha:</strong> ryska svisle nebo šipka dovnitř – křídlo přitlačeno těsněji k rámu.
              </p>
              <div className="article-tip">
                <strong>💡 Pozor:</strong> Ne všechna okna tuto funkci mají. Starší dřevěná okna a levná plastová okna bez seřiditelného kování přeskočíš a zaměříš se na těsnění.
              </div>
            </section>

            <section id="postup">
              <h2>Postup přetočení kování – krok za krokem</h2>
              <ul>
                <li><strong>Krok 1:</strong> Otevři okno dokořán, aby byly čepy dobře přístupné.</li>
                <li><strong>Krok 2:</strong> Najdi všechny čepy na hraně křídla (obvykle 2–4 kusy).</li>
                <li><strong>Krok 3:</strong> Plochým šroubovákem nebo mincí otočí každý čep o 90° do zimní polohy (ryska svisle).</li>
                <li><strong>Krok 4:</strong> Zavři okno a otestuj těsnost – křídlo by mělo jít zavřít s mírným odporem.</li>
                <li><strong>Krok 5:</strong> Opakuj na všech oknech v bytě.</li>
              </ul>
              <div className="article-tip">
                <strong>💡 Tip:</strong> Pokud se okno po přetočení velmi těžko zavírá nebo skřípe, přetočil jsi o moc. Vrať čep zpět o 45° – každé okno má jinou toleranci.
              </div>
            </section>

            <section id="tesni">
              <h2>Jak poznat, že okno těsní správně</h2>
              <p>Jednoduchý test: vlož papír A4 do zavřeného okna a zkus ho vytáhnout. Správně nastavené okno papír drží s mírným odporem po celém obvodu.</p>
              <p>Pokud papír volně vyklouzne, těsnění je opotřebované nebo kování potřebuje seřídit.</p>

              <div className="article-table-wrap">
                <table className="article-table">
                  <thead>
                    <tr>
                      <th>Problém</th>
                      <th>Příčina</th>
                      <th>Řešení</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Okno táhne i po přetočení</td><td>Opotřebené těsnění</td><td>Vyměnit těsnění (gumový profil)</td></tr>
                    <tr><td>Okno jde těžko zavřít</td><td>Kování přetočeno moc</td><td>Vrátit čep o 45°</td></tr>
                    <tr><td>Rosí se sklo uvnitř</td><td>Nedostatečné větrání</td><td>Větrat krátce a intenzivně 2× denně</td></tr>
                    <tr><td>Rosí se rám okna</td><td>Studený rám / tepelný most</td><td>Zateplení parapetu, záclony</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="dalsi-tipy">
              <h2>Další tipy na zimní okna</h2>

              <h3>Namazat těsnění</h3>
              <p>
                Jednou za rok nastříkej těsnění silikonovým sprejem nebo potři vazelínou. Guma zůstane pružná, nebude lepit a lépe těsní.
              </p>

              <h3>Těsnicí pásky jako záloha</h3>
              <p>
                Pokud okna nemají seřiditelné kování a táhnou, pomůže samolepiví těsnicí pásek z pěny nebo gumy. Nalepíš ho do drážky rámu – stojí pár korun a funguje sezónu.
              </p>

              <h3>Izolační fólie na sklo</h3>
              <p>
                Na starší jednosklenná nebo dvouvrstvá okna existují průhledné izolační fólie, které přilepíš na rám a foukačkou napneš. Snižují tepelné ztráty o 30–40 %.
              </p>

              <h3>Na jaře nezapomenout přepnout zpět</h3>
              <p>
                Zimní poloha kování znamená větší namáhání pantu i těsnění. Na jaře přetočí čepy zpět do letní polohy – okna se budou snadněji otevírat a těsnění vydrží déle.
              </p>
            </section>

            <section className="related-section">
              <h2>Související návody</h2>
              <div className="related-grid">
                {[
                  { title: "Jak utěsnit vanu silikonem?", href: "/navody/jak-utesnit-vanu-silikonem", time: "30 min" },
                  { title: "Jak odvzdušnit radiátor?", href: "/navody/jak-odvzdusnit-radiator", time: "10 min" },
                  { title: "Jak vyčistit sifon?", href: "/navody/jak-vycistit-sifon", time: "10 min" },
                ].map(r => (
                  <Link key={r.href} href={r.href} className="card">
                    <div className="card-eyebrow-row"><span>Návod</span><span>⏱ {r.time}</span></div>
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
                <li><a href="#co-budete-potrebovat">Co potřebujete</a></li>
                <li><a href="#kde-najit-kování">Kde najít kování</a></li>
                <li><a href="#postup">Postup</a></li>
                <li><a href="#tesni">Test těsnosti</a></li>
                <li><a href="#dalsi-tipy">Další tipy</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget sidebar-cta">
              <div style={{ fontSize: 32, marginBottom: 10 }}>❄️</div>
              <div className="sidebar-cta-title">Připrav dům na zimu</div>
              <p className="sidebar-cta-desc">Kompletní checklist co zkontrolovat před topnou sezónou.</p>
              <Link href="/blog/jak-pripravit-dum-na-zimu" className="btn btn-black" style={{ width: "100%", justifyContent: "center", marginTop: 14 }}>Číst článek →</Link>
            </div>
          </aside>
        </div>
      </div>

      <style>{`
        .article-layout { display: grid; grid-template-columns: 1fr 280px; gap: 56px; padding: 48px 0 80px; align-items: start; }
        .article-header { margin-bottom: 32px; }
        .article-meta-top { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
        .article-cat-pill { display: inline-flex; align-items: center; height: 24px; padding: 0 12px; border-radius: 999px; border: 1px solid var(--border); background: var(--surface); font-size: 11px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--muted); }
        .article-read-time { font-size: 12px; color: var(--muted); font-weight: 500; }
        .article-h1 { font-family: var(--font-serif); font-size: clamp(26px, 3.5vw, 40px); line-height: 1.1; font-weight: 400; letter-spacing: -0.01em; margin-bottom: 16px; }
        .article-lead { font-size: 18px; line-height: 1.65; color: var(--muted); font-weight: 300; margin-bottom: 14px; }
        .article-meta-row { display: flex; gap: 8px; font-size: 12px; color: var(--muted); font-weight: 500; }
        .toc { background: var(--surface); border-radius: 10px; padding: 20px 24px; margin-bottom: 40px; }
        .toc-label { font-size: 11px; font-weight: 700; letter-spacing: 0.10em; text-transform: uppercase; color: var(--muted); margin-bottom: 12px; }
        .toc-list { padding-left: 18px; display: flex; flex-direction: column; gap: 6px; }
        .toc-list li a { font-size: 14px; color: var(--muted); text-decoration: none; transition: color 120ms; }
        .toc-list li a:hover { color: var(--text); }
        .article-body section { margin-bottom: 48px; }
        .article-body h2 { font-family: var(--font-serif); font-size: clamp(20px, 2.5vw, 26px); font-weight: 400; line-height: 1.2; margin-bottom: 16px; border-top: 1px solid var(--border); padding-top: 24px; margin-top: 8px; }
        .article-body h3 { font-size: 16px; font-weight: 600; margin-top: 24px; margin-bottom: 10px; }
        .article-body p { font-size: 16px; line-height: 1.75; color: #2a2a28; font-weight: 300; margin-bottom: 14px; }
        .article-body ul, .article-body ol { padding-left: 22px; margin-bottom: 16px; display: flex; flex-direction: column; gap: 8px; }
        .article-body li { font-size: 15px; line-height: 1.6; color: #2a2a28; font-weight: 300; }
        .article-body strong { font-weight: 600; color: var(--text); }
        .article-tip { background: #fffbeb; border-left: 3px solid #f59e0b; border-radius: 0 8px 8px 0; padding: 14px 18px; font-size: 14px; line-height: 1.6; color: #78716c; margin: 20px 0; }
        .article-table-wrap { overflow-x: auto; margin: 16px 0 24px; }
        .article-table { width: 100%; border-collapse: collapse; font-size: 14px; }
        .article-table th { font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); padding: 10px 14px; text-align: left; border-bottom: 2px solid var(--border); background: var(--surface); }
        .article-table td { padding: 10px 14px; border-bottom: 1px solid var(--border); color: #2a2a28; font-weight: 300; vertical-align: top; }
        .article-table tr:last-child td { border-bottom: none; }
        .related-section { margin-top: 56px; }
        .related-section h2 { font-family: var(--font-serif); font-size: 22px; font-weight: 400; margin-bottom: 20px; padding-top: 24px; border-top: 1px solid var(--border); }
        .related-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .article-sidebar { position: sticky; top: 80px; display: flex; flex-direction: column; gap: 16px; }
        .sidebar-widget { background: #fff; border: 1px solid var(--border); border-radius: 12px; padding: 20px; }
        .sidebar-widget-title { font-size: 10px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); margin-bottom: 14px; }
        .sidebar-toc { list-style: none; display: flex; flex-direction: column; gap: 8px; }
        .sidebar-toc li a { font-size: 13px; color: var(--muted); text-decoration: none; transition: color 120ms; line-height: 1.4; display: block; }
        .sidebar-toc li a:hover { color: var(--text); }
        .sidebar-cta { background: var(--surface); border-color: transparent; }
        .sidebar-cta-title { font-family: var(--font-serif); font-size: 17px; font-weight: 400; margin-bottom: 6px; }
        .sidebar-cta-desc { font-size: 13px; color: var(--muted); font-weight: 300; line-height: 1.5; }
        @media (max-width: 960px) { .article-layout { grid-template-columns: 1fr; } .article-sidebar { position: static; margin-top: 40px; } .related-grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}
