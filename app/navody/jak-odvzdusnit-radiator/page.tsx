import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak odvzdušnit radiátor – krok za krokem za 10 minut | DomovniGuru",
  description: "Studený radiátor nahoře? Vzduch v soustavě je příčina. Odvzdušnění zvládneš sám za 10 minut s odvzdušňovacím klíčem.",
  alternates: { canonical: "https://domovniguru.cz/navody/jak-odvzdusnit-radiator" },
};

export default function JakOdvzdusnitRadiator() {
  return (
    <>
      <div className="wrap">
        <div className="article-layout">
          <article className="article-body">

            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Domů</Link><span className="breadcrumb-sep">/</span>
              <Link href="/navody">Návody</Link><span className="breadcrumb-sep">/</span>
              <span>Jak odvzdušnit radiátor</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <span className="article-cat-pill">🌡️ Topení</span>
                <span className="article-read-time">⏱ 10 min práce</span>
              </div>
              <h1 className="article-h1">Jak odvzdušnit radiátor</h1>
              <p className="article-lead">
                Radiátor hřeje dole, ale nahoře je studený? Problém je vzduch zachycený v soustavě.
                Odvzdušnění zvládneš sám za 10 minut – potřebuješ jen odvzdušňovací klíč a nádobku.
              </p>
              <div className="article-meta-row">
                <span>Aktualizováno: 1. března 2025</span><span>·</span><span>DomovniGuru</span>
              </div>
            </header>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah návodu</div>
              <ol className="toc-list">
                <li><a href="#proc">Proč radiátor nehřeje nahoře?</a></li>
                <li><a href="#co-potrebujes">Co budete potřebovat</a></li>
                <li><a href="#postup">Postup odvzdušnění</a></li>
                <li><a href="#po-odvzduseni">Co dělat po odvzdušnění</a></li>
                <li><a href="#kdy-volat">Kdy zavolat odborníka</a></li>
              </ol>
            </nav>

            <section id="proc">
              <h2>Proč radiátor nehřeje nahoře?</h2>
              <p>
                Horká voda z kotle je těžší než vzduch. Vzduch, který se dostane do soustavy (při doplňování vody, opravách nebo přirozeně), stoupá nahoru a shromažďuje se v nejvyšším místě radiátoru.
              </p>
              <p>
                Tato vzduchová kapsa blokuje průtok horké vody – radiátor je dole teplý, nahoře studený. Topení spotřebuje více energie, ale místnost se nevytopí správně.
              </p>
              <div className="article-tip">
                <strong>💡 Test:</strong> Polož ruku na různá místa radiátoru. Pokud je horní třetina výrazně chladnější než spodní, je čas odvzdušnit.
              </div>
            </section>

            <section id="co-potrebujes">
              <h2>Co budete potřebovat</h2>
              <ul>
                <li><strong>Odvzdušňovací klíč</strong> – malý čtyřhranný klíč (stojí 20–50 Kč v každém hobby marketu). Někdy ho nahradí plochý šroubovák.</li>
                <li><strong>Nádobka nebo hadřík</strong> – zachytit kapky vody.</li>
                <li><strong>Ručník</strong> – pod radiátor pro jistotu.</li>
              </ul>
            </section>

            <section id="postup">
              <h2>Postup odvzdušnění – krok za krokem</h2>
              <ul>
                <li><strong>Krok 1:</strong> Zapni topení a nechej soustavu prohřát – radiátory musí být teplé.</li>
                <li><strong>Krok 2:</strong> Najdi odvzdušňovací ventil – je to malý čtyřhranný nebo šestihranný šroub na boku nebo nahoře radiátoru (zpravidla naproti přívodu).</li>
                <li><strong>Krok 3:</strong> Připrav nádobku pod ventil a měj hadřík po ruce.</li>
                <li><strong>Krok 4:</strong> Odvzdušňovacím klíčem otáčej ventil pomalu proti směru hodinových ručiček – maximálně o půl otáčky.</li>
                <li><strong>Krok 5:</strong> Uslyšíš syčení – to je unikající vzduch. Drž nádobku připravenou.</li>
                <li><strong>Krok 6:</strong> Jakmile místo vzduchu začne téct voda (bez přerušení), zavři ventil otočením po směru hodinových ručiček.</li>
                <li><strong>Krok 7:</strong> Utáhni ventil pevně, ale nepřetahuj – je z mosazi a snadno se poničí.</li>
              </ul>
              <div className="article-tip">
                <strong>💡 Tip:</strong> Odvzdušňuj radiátory od nejnižšího podlaží nahoru – vzduch stoupá, a tak ho vytlačíš systematicky.
              </div>
              <div className="article-tip">
                <strong>⚠️ Pozor:</strong> Otevírej ventil pomalu a jen o půl otáčky. Pokud ho otočíš příliš, může vytéct velké množství vody nebo se ventil úplně uvolní.
              </div>
            </section>

            <section id="po-odvzduseni">
              <h2>Co dělat po odvzdušnění</h2>

              <h3>Zkontroluj tlak v soustavě</h3>
              <p>
                Při odvzdušnění unikne trochu vody spolu se vzduchem. Tlak v otopné soustavě mírně klesne.
                Podívej se na manometr (tlakoměr) na kotli – správný tlak je obvykle <strong>1,5–2,0 bar</strong>.
              </p>
              <p>
                Pokud je tlak pod 1 barem, doplň vodu do soustavy přes plnící kohout (obvykle pod kotlem). Doplňuj pomalu a sleduj manometr.
              </p>

              <h3>Ověř, že radiátor hřeje rovnoměrně</h3>
              <p>
                Po 10–15 minutách od odvzdušnění zkontroluj, zda je radiátor teplý po celé ploše. Pokud je horní část stále studená, opakuj odvzdušnění – vzduch nemusel celý uniknout.
              </p>

              <h3>Jak poznat, že je hotovo</h3>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead>
                    <tr><th>Příznak</th><th>Znamená</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Radiátor hřeje rovnoměrně</td><td>✅ Odvzdušnění proběhlo správně</td></tr>
                    <tr><td>Stále studený nahoře</td><td>Zbývá vzduch – odvzdušni znovu</td></tr>
                    <tr><td>Tlak pod 1 bar</td><td>Doplň vodu do soustavy</td></tr>
                    <tr><td>Ventil kape po utažení</td><td>Opotřebené těsnění – vyměnit ventil</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="kdy-volat">
              <h2>Kdy zavolat odborníka</h2>
              <p>Odvzdušnění nepomohlo, pokud:</p>
              <ul>
                <li>Radiátor je studený celý (problém s ventilem nebo rozvodem)</li>
                <li>Vzduch se vrací opakovaně (netěsnost v soustavě)</li>
                <li>Tlak v soustavě rychle klesá (únik vody)</li>
                <li>Kotel hlásí chybu nebo nevyhřívá vodu</li>
                <li>Odvzdušňovací ventil teče i po utažení</li>
              </ul>
              <p>
                V těchto případech je potřeba odborná prohlídka kotle nebo celé otopné soustavy.
              </p>
            </section>

            <section className="related-section">
              <h2>Související návody a články</h2>
              <div className="related-grid">
                {[
                  { title: "Jak nastavit okna na zimu?", href: "/navody/jak-nastavit-okna-na-zimu", time: "15 min" },
                  { title: "Jak připravit dům na zimu", href: "/blog/jak-pripravit-dum-na-zimu", time: "5 min čtení" },
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
                <li><a href="#proc">Proč nehřeje nahoře?</a></li>
                <li><a href="#co-potrebujes">Co potřebujete</a></li>
                <li><a href="#postup">Postup</a></li>
                <li><a href="#po-odvzduseni">Po odvzdušnění</a></li>
                <li><a href="#kdy-volat">Kdy volat odborníka</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget sidebar-cta">
              <div style={{ fontSize: 32, marginBottom: 10 }}>❄️</div>
              <div className="sidebar-cta-title">Připrav dům na zimu</div>
              <p className="sidebar-cta-desc">Kompletní checklist – kotel, okna, okapy, voda.</p>
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
