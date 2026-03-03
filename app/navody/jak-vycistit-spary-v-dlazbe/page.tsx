import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak vyčistit spáry v dlažbě – bez drhnutí | DomovniGuru",
  description: "Zčernalé spáry v koupelně nebo kuchyni? Jednoduché metody bez agresivní chemie – soda, ocet, kyslíkové bělení. Funguje.",
  alternates: { canonical: "https://domovniguru.cz/navody/jak-vycistit-spary-v-dlazbe" },
};

export default function JakVycistitSparyVDlazbe() {
  return (
    <>
      <div className="wrap">
        <div className="article-layout">
          <article className="article-body">

            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Domů</Link><span className="breadcrumb-sep">/</span>
              <Link href="/navody">Návody</Link><span className="breadcrumb-sep">/</span>
              <span>Jak vyčistit spáry v dlažbě</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <span className="article-cat-pill">🧹 Čištění</span>
                <span className="article-read-time">⏱ 20 min práce</span>
              </div>
              <h1 className="article-h1">Jak vyčistit spáry v dlažbě</h1>
              <p className="article-lead">
                Zčernalé spáry kazí i jinak čistou koupelnu. Drhnutí kartáčkem bez správného přípravku nepomůže.
                Ukážeme ti metody, které fungují – bez drahé chemie.
              </p>
              <div className="article-meta-row">
                <span>Aktualizováno: 1. března 2025</span><span>·</span><span>DomovniGuru</span>
              </div>
            </header>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah návodu</div>
              <ol className="toc-list">
                <li><a href="#co-potrebujes">Co budete potřebovat</a></li>
                <li><a href="#metoda-soda">Metoda 1: Soda + ocet</a></li>
                <li><a href="#metoda-kyslík">Metoda 2: Kyslíkové bělení</a></li>
                <li><a href="#metoda-chemie">Metoda 3: Spárová chemie</a></li>
                <li><a href="#prevence">Jak udržet spáry čisté déle</a></li>
              </ol>
            </nav>

            <section id="co-potrebujes">
              <h2>Co budete potřebovat</h2>
              <ul>
                <li>Starý zubní kartáček nebo spárový kartáček</li>
                <li>Jedlá soda a ocet (metoda 1)</li>
                <li>Kyslíkový bělidlo (např. Vanish Oxi, metoda 2)</li>
                <li>Spárová chemie z obchodu (metoda 3)</li>
                <li>Hadřík a teplá voda na opláchnutí</li>
              </ul>
            </section>

            <section id="metoda-soda">
              <h2>Metoda 1: Soda + ocet (ekologická)</h2>
              <p>Nejlevnější a nejbezpečnější metoda. Funguje na lehké až střední znečištění.</p>
              <ul>
                <li><strong>Krok 1:</strong> Posyp spáry jedlou sodou.</li>
                <li><strong>Krok 2:</strong> Nastříkej nebo nakapej ocet – spáry začnou syčet a pěnit. To je správně.</li>
                <li><strong>Krok 3:</strong> Nechej působit 5–10 minut.</li>
                <li><strong>Krok 4:</strong> Vydrhni kartáčkem pohybem podél spáry (ne příčně – nerozmazává špínu).</li>
                <li><strong>Krok 5:</strong> Opláchni teplou vodou a vytři dosucha.</li>
              </ul>
              <div className="article-tip">
                <strong>💡 Tip:</strong> Na mramorovou nebo přírodní kamennou dlažbu ocet nepoužívej – kyselina povrch naleptá. Použij pouze sodový roztok (soda + voda).
              </div>
            </section>

            <section id="metoda-kyslík">
              <h2>Metoda 2: Kyslíkové bělení (pro silnější špínu)</h2>
              <p>Kyslíkové bělidlo (Vanish Oxi, Dr. Beckmann nebo podobné) rozkládá organické nečistoty a plíseň bez chloru.</p>
              <ul>
                <li><strong>Krok 1:</strong> Smíchej prášek s teplou vodou podle návodu na obalu (obvykle 1 lžíce na 500 ml).</li>
                <li><strong>Krok 2:</strong> Nanes roztok na spáry – štětcem, kartáčkem nebo sprejem.</li>
                <li><strong>Krok 3:</strong> Nechej působit 15–30 minut (u silného zčernání i přes noc).</li>
                <li><strong>Krok 4:</strong> Vydrhni kartáčkem a opláchni.</li>
              </ul>
              <div className="article-tip">
                <strong>💡 Tip:</strong> Kyslíkové bělení funguje lépe v teple. V létě nebo po předehřátí podlahy teplou vodou je účinnější.
              </div>
            </section>

            <section id="metoda-chemie">
              <h2>Metoda 3: Spárová chemie z obchodu</h2>
              <p>
                Pro velmi zašlé nebo plesnivé spáry je nejlepší spárový čistič z obchodu (Fagi, HG, Aqua Clean a podobné).
                Obsahují kyseliny nebo chlor, které mechanicky narušují nečistoty.
              </p>
              <ul>
                <li><strong>Krok 1:</strong> Větrání – otevři okno. Tyto přípravky jsou silné.</li>
                <li><strong>Krok 2:</strong> Nanes přípravek na spáry dle návodu výrobce.</li>
                <li><strong>Krok 3:</strong> Nechej působit stanovenou dobu (obvykle 5–15 minut).</li>
                <li><strong>Krok 4:</strong> Vydrhni a důkladně opláchni – přípravky nesmí zůstat na povrchu dlaždic.</li>
              </ul>
              <div className="article-tip">
                <strong>⚠️ Pozor:</strong> Přípravky s chlorem nebo kyselinami nepoužívej na leštěný mramor, travertin ani barevné spáry – mohou způsobit trvalé poškození.
              </div>

              <div className="article-table-wrap">
                <table className="article-table">
                  <thead>
                    <tr>
                      <th>Metoda</th>
                      <th>Stupeň znečištění</th>
                      <th>Cena</th>
                      <th>Bezpečnost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Soda + ocet</td><td>Lehké – střední</td><td>Do 30 Kč</td><td>✅ Bezpečné</td></tr>
                    <tr><td>Kyslíkové bělení</td><td>Střední – silné</td><td>50–100 Kč</td><td>✅ Bezpečné</td></tr>
                    <tr><td>Spárová chemie</td><td>Silné – extrémní</td><td>100–300 Kč</td><td>⚠️ Rukavice, větrání</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="prevence">
              <h2>Jak udržet spáry čisté déle</h2>

              <h3>Impregnace spár</h3>
              <p>
                Po vyčištění nanes impregnaci na spáry (spárový impregnátor). Vytvoří ochranný film, do kterého se špína a vlhkost hůř dostávají. Opakuj jednou za rok.
              </p>

              <h3>Pravidelné větrání koupelny</h3>
              <p>
                Plíseň ve spárách vzniká z vlhkosti. Po sprchování větrá alespoň 10–15 minut, nebo nechej zapnutý ventilátor.
              </p>

              <h3>Stírat vodu ze spár</h3>
              <p>
                Jednoduchý gumový stěrač na sklo (na sprchovém koutu) výrazně snižuje množství vody, která zůstává na dlažbě a ve spárách.
              </p>

              <h3>Rychlé čištění jednou týdně</h3>
              <p>
                Krátké přetření spár roztokm vody s trochou octu nebo čisticím sprejem jednou týdně zabrání usazování špíny. Je to snazší než jednou za rok vydrhávat plíseň.
              </p>
            </section>

            <section className="related-section">
              <h2>Související návody</h2>
              <div className="related-grid">
                {[
                  { title: "Jak utěsnit vanu silikonem?", href: "/navody/jak-utesnit-vanu-silikonem", time: "30 min" },
                  { title: "Jak vyčistit sifon?", href: "/navody/jak-vycistit-sifon", time: "10 min" },
                  { title: "Jak nastavit okna na zimu?", href: "/navody/jak-nastavit-okna-na-zimu", time: "15 min" },
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
                <li><a href="#co-potrebujes">Co potřebujete</a></li>
                <li><a href="#metoda-soda">Soda + ocet</a></li>
                <li><a href="#metoda-kyslík">Kyslíkové bělení</a></li>
                <li><a href="#metoda-chemie">Spárová chemie</a></li>
                <li><a href="#prevence">Prevence</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget sidebar-cta">
              <div style={{ fontSize: 32, marginBottom: 10 }}>🧹</div>
              <div className="sidebar-cta-title">Jak vyčistit sifon?</div>
              <p className="sidebar-cta-desc">Voda neodtéká? Vyřeš to za 10 minut bez chemie.</p>
              <Link href="/navody/jak-vycistit-sifon" className="btn btn-black" style={{ width: "100%", justifyContent: "center", marginTop: 14 }}>Číst návod →</Link>
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
