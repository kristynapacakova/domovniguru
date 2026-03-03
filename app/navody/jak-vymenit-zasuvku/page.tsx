import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak vyměnit zásuvku sám – bezpečný postup krok za krokem | DomovniGuru",
  description: "Výměna elektrické zásuvky svépomocí: vypni jistič, odšroubuj, přepoj vodiče. Bezpečný postup bez elektrikáře za 25 minut.",
  alternates: { canonical: "https://domovniguru.cz/navody/jak-vymenit-zasuvku" },
};

export default function JakVymenit_Zasuvku() {
  return (
    <>
      <div className="wrap">
        <div className="article-layout">
          <article className="article-body">

            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Domů</Link><span className="breadcrumb-sep">/</span>
              <Link href="/navody">Návody</Link><span className="breadcrumb-sep">/</span>
              <span>Jak vyměnit zásuvku</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <span className="article-cat-pill">💡 Elektrika</span>
                <span className="article-read-time">⏱ 25 min práce</span>
              </div>
              <h1 className="article-h1">Jak vyměnit zásuvku sám</h1>
              <p className="article-lead">
                Rozbitá nebo zastaralá zásuvka? Výměna je jednodušší, než si myslíš.
                Nepotřebuješ elektrikáře – jen šroubovák, fázovou tužku a 25 minut.
              </p>
              <div className="article-meta-row">
                <span>Aktualizováno: 1. března 2025</span><span>·</span><span>DomovniGuru</span>
              </div>
            </header>

            <div className="article-tip" style={{ marginBottom: 32 }}>
              <strong>⚠️ Bezpečnost na prvním místě:</strong> Vždy vypni příslušný jistič v rozvaděči a ověř fázovou tužkou, že zásuvka není pod napětím. Nikdy nepracuj na živém obvodu.
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah návodu</div>
              <ol className="toc-list">
                <li><a href="#co-budete-potrebovat">Co budete potřebovat</a></li>
                <li><a href="#bezpecnost">Bezpečnost – první krok</a></li>
                <li><a href="#demontaz">Demontáž staré zásuvky</a></li>
                <li><a href="#zapojeni">Zapojení nové zásuvky</a></li>
                <li><a href="#montaz">Montáž a test</a></li>
                <li><a href="#vodiče">Jak poznat vodiče L, N, PE</a></li>
              </ol>
            </nav>

            <section id="co-budete-potrebovat">
              <h2>Co budete potřebovat</h2>
              <ul>
                <li>Plochý a křížový šroubovák</li>
                <li>Fázová tužka (testovací šroubovák) – povinná pomůcka</li>
                <li>Nová zásuvka (stejný typ – podomítková nebo na omítku)</li>
                <li>Případně kleště a odizolovávač</li>
              </ul>
              <div className="article-tip">
                <strong>💡 Tip:</strong> Při koupi nové zásuvky si vyfotografuj starou a ukažte prodavači. Existují různé rámy a krabičky – ne vždy je vše kompatibilní.
              </div>
            </section>

            <section id="bezpecnost">
              <h2>Bezpečnost – první krok</h2>
              <ul>
                <li><strong>Krok 1:</strong> Jdi k elektrickému rozvaděči (jistič box) – obvykle v chodbě nebo na chodbě.</li>
                <li><strong>Krok 2:</strong> Vypni jistič příslušného okruhu. Pokud nevíš který, vypni hlavní jistič.</li>
                <li><strong>Krok 3:</strong> Vrať se k zásuvce a přilož fázovou tužku do každého otvoru. Nesmí svítit – pak je proud opravdu vypnutý.</li>
                <li><strong>Krok 4:</strong> Teprve teď začni pracovat.</li>
              </ul>
              <div className="article-tip">
                <strong>⚠️ Nikdy nevynechej test fázovou tužkou.</strong> Jistič může být špatně popsán nebo chránit jiný okruh než čekáš.
              </div>
            </section>

            <section id="demontaz">
              <h2>Demontáž staré zásuvky</h2>
              <ul>
                <li><strong>Krok 1:</strong> Odstraň kryt zásuvky – většinou se odšroubuje jeden středový šroub nebo se odclipne.</li>
                <li><strong>Krok 2:</strong> Odšroubuj dva boční šroubky, které drží mechanismus v krabičce ve zdi.</li>
                <li><strong>Krok 3:</strong> Opatrně vytáhni mechanismus ze zdi – vodiče jsou krátké, netrhej.</li>
                <li><strong>Krok 4:</strong> Vyfotografuj zapojení (který vodič kam jde) – před odpojením!</li>
                <li><strong>Krok 5:</strong> Odšroubuj svorky a vodiče odpoj.</li>
              </ul>
            </section>

            <section id="zapojeni">
              <h2>Zapojení nové zásuvky</h2>
              <p>Nová zásuvka má tři svorky označené:</p>
              <ul>
                <li><strong>L</strong> (fáze) – hnědý nebo černý vodič</li>
                <li><strong>N</strong> (nula) – modrý vodič</li>
                <li><strong>PE</strong> (zem, ochranný) – zeleno-žlutý vodič</li>
              </ul>
              <ul>
                <li><strong>Krok 1:</strong> Zkontroluj délku odizolování vodičů – má být 8–10 mm. Pokud je kratší, odizoluj kleštěmi.</li>
                <li><strong>Krok 2:</strong> Zasuň hnědý/černý vodič do svorky L a utáhni šroub.</li>
                <li><strong>Krok 3:</strong> Zasuň modrý vodič do svorky N a utáhni.</li>
                <li><strong>Krok 4:</strong> Zasuň zeleno-žlutý vodič do svorky PE a utáhni.</li>
                <li><strong>Krok 5:</strong> Zkontroluj, že žádný vodič nevykukuje mimo svorku a holý kov se nedotýká jiného vodiče.</li>
              </ul>
              <div className="article-tip">
                <strong>💡 Tip:</strong> Svorky utahuj pevně, ale nepřetahuj – plastové těleso zásuvky by se mohlo prasknout.
              </div>
            </section>

            <section id="montaz">
              <h2>Montáž a test</h2>
              <ul>
                <li><strong>Krok 1:</strong> Přeložte vodiče do krabičky a zasuň mechanismus – vodiče nesmí být skřípnuté.</li>
                <li><strong>Krok 2:</strong> Přišroubuj mechanismus k elektrokrabičce ve zdi.</li>
                <li><strong>Krok 3:</strong> Nasaď kryt a přišroubuj.</li>
                <li><strong>Krok 4:</strong> Zapni jistič zpět.</li>
                <li><strong>Krok 5:</strong> Otestuj zásuvku – zasuň nabíječku nebo lampu a ověř, že funguje.</li>
              </ul>
              <div className="article-tip">
                <strong>💡 Tip:</strong> Pokud jistič hned vyskočí po zapnutí, je někde zkrat – zásuvku okamžitě vypni a znovu zkontroluj zapojení.
              </div>
            </section>

            <section id="vodiče">
              <h2>Jak poznat vodiče L, N, PE ve starém bytě</h2>
              <p>
                Ve starších bytech (před rokem 1990) mohou být vodiče označeny jinak nebo nemít standardní barvy.
                Jak se orientovat:
              </p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead>
                    <tr><th>Vodič</th><th>Moderní barva</th><th>Starší byty</th><th>Jak ověřit</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>L (fáze)</strong></td><td>Hnědá, černá, šedá</td><td>Červená, černá</td><td>Fázová tužka svítí</td></tr>
                    <tr><td><strong>N (nula)</strong></td><td>Modrá</td><td>Modrá, šedá</td><td>Fázová tužka nesvítí</td></tr>
                    <tr><td><strong>PE (zem)</strong></td><td>Zeleno-žlutá</td><td>Zelená nebo chybí</td><td>Připojen na kovový kryt</td></tr>
                  </tbody>
                </table>
              </div>
              <p>
                Pokud si nejsi jistý nebo vodiče nemají standardní barvy, raději zavolej elektrikáře. Záměna L a N zásuvku zničí a může způsobit úraz.
              </p>
            </section>

            <section className="related-section">
              <h2>Související návody</h2>
              <div className="related-grid">
                {[
                  { title: "Jak odvzdušnit radiátor?", href: "/navody/jak-odvzdusit-radiator", time: "10 min" },
                  { title: "Jak nastavit okna na zimu?", href: "/navody/jak-nastavit-okna-na-zimu", time: "15 min" },
                  { title: "Jak utěsnit vanu silikonem?", href: "/navody/jak-utesnit-vanu-silikonem", time: "30 min" },
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
                <li><a href="#bezpecnost">Bezpečnost</a></li>
                <li><a href="#demontaz">Demontáž</a></li>
                <li><a href="#zapojeni">Zapojení</a></li>
                <li><a href="#montaz">Montáž a test</a></li>
                <li><a href="#vodiče">Barvy vodičů</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget sidebar-cta">
              <div style={{ fontSize: 32, marginBottom: 10 }}>⚡</div>
              <div className="sidebar-cta-title">LED vs. žárovky</div>
              <p className="sidebar-cta-desc">Co se skutečně vyplatí? Srovnání spotřeby a nákladů.</p>
              <Link href="/blog/led-vs-zarovky" className="btn btn-black" style={{ width: "100%", justifyContent: "center", marginTop: 14 }}>Číst článek →</Link>
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
