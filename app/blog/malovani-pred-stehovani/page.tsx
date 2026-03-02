import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak vymalovat byt před stěhováním – průvodce a načasování 2025",
  description: "Malovat před nebo po stěhování? Jak vymalovat prázdný byt efektivně, v jakém pořadí a co neopomenout. Průvodce krok za krokem.",
  alternates: { canonical: "https://domovniguru.cz/blog/malovani-pred-stehovani" },
  openGraph: { title: "Jak vymalovat byt před stěhováním – průvodce a načasování", description: "Malovat před nebo po stěhování? Jak na to efektivně.", url: "https://domovniguru.cz/blog/malovani-pred-stehovani", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2025-02-22T08:00:00Z", modifiedTime: "2025-03-01T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak vymalovat byt před stěhováním", description: "Průvodce a načasování. Malovat před nebo po stěhování?" },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://domovniguru.cz/blog/malovani-pred-stehovani#article", "headline": "Jak vymalovat byt před stěhováním – průvodce a načasování", "datePublished": "2025-02-22T08:00:00Z", "dateModified": "2025-03-01T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "inLanguage": "cs", "keywords": ["malovat před stěhováním", "malování prázdného bytu", "jak vymalovat byt", "malování při stěhování"] }] };

const RELATED = [
  { title: "Jak malovat zeď – kompletní průvodce pro začátečníky", href: "/blog/jak-malovat-zed", read: "5 min" },
  { title: "Penetrace před malováním – kdy je nutná?", href: "/blog/penetrace-pred-malovanim", read: "4 min" },
  { title: "Latexová vs. akrylátová barva – jaký je rozdíl?", href: "/blog/latexova-vs-akrylatova-barva", read: "4 min" },
  { title: "Co zkontrolovat při přebírání nového bytu", href: "/blog/prebrani-bytu-checklist", read: "4 min" },
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
              <Link href="/blog/kategorie/stehovani">Stěhování & rekonstrukce</Link><span className="breadcrumb-sep">/</span>
              <span>Jak vymalovat byt před stěhováním</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">📦 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak vymalovat byt před stěhováním – průvodce a načasování</h1>
              <p className="article-lead">Prázdný byt se maluje třikrát rychleji než zařízený. Žádné stěhování nábytku, žádné zakrývání, dokonalý přístup ke každé stěně. Tenhle článek ti ukáže, jak to udělat chytře – s správným načasováním a pořadím místností.</p>
              <div className="article-meta-row"><span>Aktualizováno: 1. března 2025</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#pred-nebo-po">Malovat před nebo po stěhování?</a></li>
                <li><a href="#nacasovani">Načasování – kdy přesně</a></li>
                <li><a href="#priprava">Příprava prázdného bytu</a></li>
                <li><a href="#poradi">Pořadí místností</a></li>
                <li><a href="#technika">Technika malování prázdného bytu</a></li>
                <li><a href="#kolik-barvy">Kolik barvy potřebuješ</a></li>
                <li><a href="#tipy">Tipy pro rychlé malování</a></li>
              </ol>
            </nav>

            <section id="pred-nebo-po">
              <h2>Malovat před nebo po stěhování?</h2>
              <p>Odpověď je jasná: <strong>vždy malovat před stěhováním do prázdného bytu</strong>, pokud to situace umožňuje. Důvody:</p>
              <ul>
                <li><strong>Rychlost</strong> – v prázdném bytě malíš 2–3× rychleji. Žádné stěhování nábytku, žádné zakrývání, volný pohyb</li>
                <li><strong>Kvalita</strong> – dostaneš se ke každé části stěny, za radiátory, do rohů</li>
                <li><strong>Méně chyb</strong> – stěhování nábytku po čerstvě vymalovaném bytě způsobuje škrábance a odreptávání</li>
                <li><strong>Čistota</strong> – barva na nábytku nebo věcech je zbytečný problém</li>
              </ul>
              <p>Jedinou výjimkou je situace, kdy nemáš přechodné ubytování a musíš se nastěhovat ihned. V tom případě maluj místnost po místnosti, vždy před nastěhováním nábytku do té konkrétní místnosti.</p>
            </section>

            <section id="nacasovani">
              <h2>Načasování – kdy přesně malovat</h2>
              <p>Ideální scénář: dostaneš klíče od prázdného bytu, máš 3–5 dní před nastěhováním a v tu dobu vymaluješ. Barva stihne vyschnout a zafixovat se (doporučuje se 48–72 hodin před nastěhováním nábytku).</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Situace</th><th>Doporučení</th></tr></thead>
                  <tbody>
                    <tr><td>Máš 3+ dní před nastěhováním</td><td>Vymaluj celý byt najednou</td></tr>
                    <tr><td>Máš 1–2 dny</td><td>Prioritizuj – ložnice a obývák, kuchyň počká</td></tr>
                    <tr><td>Stěhuješ se ihned</td><td>Maluj místnost po místnosti před nastěhováním nábytku</td></tr>
                    <tr><td>Byt je zařízený</td><td>Maluj místnost po místnosti, vykliď a zakryj nábytek</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Nezapomeň na dobu schnutí. Dvě vrstvy barvy + schnutí mezi vrstvami = minimálně 6–8 hodin na místnost. Dvoupokojový byt reálně zaberou 2 dny.</div>
            </section>

            <section id="priprava">
              <h2>Příprava prázdného bytu</h2>
              <h3>Zakryj podlahy</h3>
              <p>I v prázdném bytě zakryj podlahy fólií nebo starými novinami – kapky barvy jsou nevyhnutelné a z dlažby nebo dřevěné podlahy se špatně odstraňují.</p>
              <h3>Zkontroluj stav stěn</h3>
              <p>V prázdném bytě poprvé vidíš stěny v plném světle. Hledej díry po hřebících, praskliny a místa s odlupující barvou. Oprav je tmelem a přebrousí před malováním.</p>
              <h3>Demontuj zásuvky a vypínače</h3>
              <p>V prázdném bytě to jde rychle – sejmout kryty zásuvek a vypínačů a malovat kolem nich s čistým výsledkem. Alternativně přelep malířskou páskou.</p>
              <h3>Penetrace</h3>
              <p>Pokud byt vypadá, že nebyl malován roky, nebo jsou na stěnách skvrny, dej penetraci. V prázdném bytě je to rychlé – váleček, jedna vrstva, 2 hodiny schnutí.</p>
            </section>

            <section id="poradi">
              <h2>Pořadí místností a ploch</h2>
              <h3>Pořadí místností</h3>
              <p>Začni od místností, které budeš potřebovat první: ložnice (kde budeš spát první noc), pak obývák, kuchyň, koupelna. Chodbu maluj nakonec – průchozí prostor se rychle zašpiní.</p>
              <h3>Pořadí ploch v místnosti</h3>
              <ul>
                <li><strong>Strop jako první</strong> – kapky padají dolů, na hotovou zeď bys musel opravovat</li>
                <li><strong>Stěny druhé</strong> – od rohů a okrajů štětcem, pak středem válečkem</li>
                <li><strong>Detaily nakonec</strong> – sokly, lišty, okraje kolem oken a dveří</li>
              </ul>
            </section>

            <section id="technika">
              <h2>Technika malování prázdného bytu</h2>
              <h3>Výhoda prázdného prostoru</h3>
              <p>Bez nábytku se pohybuješ volně. Využij to – táhni válečkem delší tahy, nepřerušované od stropu k podlaze. Kratší tahy způsobují viditelné spoje. V prázdném bytě nejsi limitovaný nábytkem a stačí ti méně přesahů.</p>
              <h3>Rohy a okraje</h3>
              <p>Rohy maluj štětcem (5–7 cm) nebo speciálním rohovým válečkem. Malířskou pásku používej u lišt, okenních rámů a zárubní. V prázdném bytě máš dostatek prostoru u každé stěny.</p>
              <h3>Dvě vrstvy vždy</h3>
              <p>Jedna vrstva nestačí – průsvitá místa, nerovnoměrné krytí. Vždy dej dvě vrstvy s přestávkou alespoň 4 hodiny mezi nimi.</p>
              <div className="article-cta-box">
                <div className="article-cta-icon">🪣</div>
                <div>
                  <div className="article-cta-title">Kolik barvy budeš potřebovat na celý byt?</div>
                  <p className="article-cta-desc">Zadej rozměry místností a kalkulačka ti spočítá litry pro každou místnost zvlášť.</p>
                  <Link href="/kalkulacky/kolik-barvy" className="btn btn-black">Spustit kalkulačku barvy →</Link>
                </div>
              </div>
            </section>

            <section id="kolik-barvy">
              <h2>Kolik barvy potřebuješ</h2>
              <p>Orientační spotřeba pro standardní místnosti (výška stropu 2,6 m, dvě vrstvy):</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Místnost</th><th>Plocha stěn</th><th>Barva (2 vrstvy)</th></tr></thead>
                  <tbody>
                    <tr><td>Ložnice 3×4 m</td><td>~35 m²</td><td>~4 l</td></tr>
                    <tr><td>Obývák 4×5 m</td><td>~47 m²</td><td>~5–6 l</td></tr>
                    <tr><td>Kuchyně 3×3 m</td><td>~28 m²</td><td>~3 l</td></tr>
                    <tr><td>Koupelna 2×2 m</td><td>~18 m²</td><td>~2 l</td></tr>
                    <tr><td>Chodba 1,5×4 m</td><td>~22 m²</td><td>~2–3 l</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Pro přesný výpočet včetně odečtení oken a dveří použij <Link href="/kalkulacky/kolik-barvy">kalkulačku barvy</Link>.</p>
            </section>

            <section id="tipy">
              <h2>Tipy pro rychlé a čisté malování</h2>
              <ul>
                <li><strong>Kup o 10–15 % více barvy</strong> než kalkulačka ukazuje – na opravy a druhé nátěry se vždy hodí</li>
                <li><strong>Zapiš označení barvy a šarži</strong> – za rok budeš potřebovat přidat nebo opravit</li>
                <li><strong>Nečisti váleček vodou – zabal ho do fólie</strong> a dej do lednice na noc. Ráno je připravený k dalšímu použití bez nutnosti sušení</li>
                <li><strong>Malujte ve dvou</strong> – jedna osoba štětcem dělá okraje, druhá válečkem středové plochy. Rychlost se zdvojnásobí</li>
                <li><strong>Nespěchej na druhou vrstvu</strong> – počkej skutečně 4 hodiny, ne 2. Rychlé přemalování mokré barvy způsobuje šmouhy</li>
              </ul>
            </section>

            <section className="related-section">
              <h2>Související články</h2>
              <div className="related-grid">
                {RELATED.map((r) => (
                  <Link key={r.href} href={r.href} className="card">
                    <div className="card-eyebrow-row"><span>Malování & stěhování</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#pred-nebo-po">Před nebo po stěhování?</a></li>
                <li><a href="#nacasovani">Načasování</a></li>
                <li><a href="#priprava">Příprava bytu</a></li>
                <li><a href="#poradi">Pořadí místností</a></li>
                <li><a href="#technika">Technika malování</a></li>
                <li><a href="#kolik-barvy">Kolik barvy</a></li>
                <li><a href="#tipy">Tipy pro rychlost</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget sidebar-cta">
              <div style={{ fontSize: 32, marginBottom: 10 }}>🪣</div>
              <div className="sidebar-cta-title">Kalkulačka barvy</div>
              <p className="sidebar-cta-desc">Zadej plochu a dostaneš přesný počet litrů i balení.</p>
              <Link href="/kalkulacky/kolik-barvy" className="btn btn-black" style={{ width: "100%", justifyContent: "center", marginTop: 14 }}>Spustit →</Link>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/stehovani" className="sidebar-cat-link">📦 Stěhování & rekonstrukce<span>20 článků →</span></Link>
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
        .article-cta-box { display: flex; gap: 20px; align-items: flex-start; background: var(--surface); border-radius: 12px; padding: 24px; margin: 28px 0; border: 1px solid var(--border); }
        .article-cta-icon { font-size: 36px; flex-shrink: 0; margin-top: 2px; }
        .article-cta-title { font-family: var(--font-serif); font-size: 18px; margin-bottom: 6px; font-weight: 400; }
        .article-cta-desc { font-size: 14px !important; color: var(--muted); margin-bottom: 14px !important; }
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
        .sidebar-cta { background: var(--surface); border-color: transparent; }
        .sidebar-cta-title { font-family: var(--font-serif); font-size: 17px; font-weight: 400; margin-bottom: 6px; }
        .sidebar-cta-desc { font-size: 13px; color: var(--muted); font-weight: 300; line-height: 1.5; }
        .sidebar-cat-link { display: flex; justify-content: space-between; align-items: center; font-size: 14px; font-weight: 500; color: var(--text); text-decoration: none; padding: 8px 0; border-bottom: 1px solid var(--border); transition: color 120ms; }
        .sidebar-cat-link:hover { color: var(--muted); }
        .sidebar-cat-link span { font-size: 12px; color: var(--muted); }
        @media (max-width: 960px) { .article-layout { grid-template-columns: 1fr; gap: 0; } .article-sidebar { position: static; margin-top: 40px; } .related-grid { grid-template-columns: 1fr; } }
        @media (max-width: 600px) { .article-cta-box { flex-direction: column; gap: 12px; } .article-layout { padding: 32px 0 60px; } }
      `}</style>
    </>
  );
}
