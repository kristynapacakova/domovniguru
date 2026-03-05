import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak se zbavit plevele bez chemie – mulčování, ocet, vroucí voda 2025",
  description: "Ekologické metody na plevel: mulčování, ocet, vroucí voda, ruční vytrhávání. Co funguje a co je mýtus.",
  alternates: { canonical: "https://domovniguru.cz/blog/zbavit-se-plevele-bez-chemie" },
  openGraph: { title: "Jak se zbavit plevele bez chemie", description: "Mulčování, ocet, vroucí voda – co opravdu funguje.", url: "https://domovniguru.cz/blog/zbavit-se-plevele-bez-chemie", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2025-02-05T08:00:00Z", modifiedTime: "2025-03-01T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Zbavit se plevele bez chemie", description: "Ekologické metody které fungují." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", "@id": "https://domovniguru.cz/blog/zbavit-se-plevele-bez-chemie#article", "headline": "Jak se zbavit plevele bez chemie", "datePublished": "2025-02-05T08:00:00Z", "dateModified": "2025-03-01T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "inLanguage": "cs" },
    { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Zahrada & terasa", "item": "https://domovniguru.cz/blog/kategorie/zahrada" }, { "@type": "ListItem", "position": 4, "name": "Plevel bez chemie", "item": "https://domovniguru.cz/blog/zbavit-se-plevele-bez-chemie" }] },
  ],
};

const RELATED = [
  { title: "Jak postavit vyvýšený záhon", href: "/blog/vyvyseny-zahon-postup", read: "6 min" },
  { title: "Jak připravit zahradu na jaro", href: "/blog/jarni-zahrada", read: "6 min" },
  { title: "Jak kompostovat doma a na zahradě", href: "/blog/jak-kompostovat", read: "4 min" },
  { title: "Jak správně zalévat zahradu", href: "/blog/jak-spravne-zalevat", read: "4 min" },
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
              <span>Plevel bez chemie</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 4 min čtení</span>
              </div>
              <h1 className="article-h1">Jak se zbavit plevele bez chemie</h1>
              <p className="article-lead">
                Herbicidy jsou rychlé, ale ničí půdní mikroorganismy, škodí včelám a mohou kontaminovat spodní vody.
                Dobrou zprávou je, že existují ekologické metody, které fungují stejně dobře – a některé ještě lépe.
              </p>
              <div className="article-meta-row">
                <span>Aktualizováno: 1. března 2025</span><span>·</span><span>DomovniGuru</span>
              </div>
            </header>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#mulcovani">Mulčování – nejlepší prevence</a></li>
                <li><a href="#rucni">Ruční vytrhávání – správná technika</a></li>
                <li><a href="#ocet">Ocet a sůl</a></li>
                <li><a href="#voda">Vroucí voda</a></li>
                <li><a href="#geotextilie">Geotextilie a štěrk</a></li>
                <li><a href="#mytus">Co nefunguje – mýty</a></li>
              </ol>
            </nav>

            <section id="mulcovani">
              <h2>Mulčování – nejlepší prevence plevele</h2>
              <p>
                Mulč je vrstva organického nebo anorganického materiálu na povrchu půdy. Blokuje světlo, bez kterého plevel nemůže klíčit a růst. Zároveň udržuje vlhkost a zlepšuje půdní strukturu.
              </p>
              <h3>Organický mulč</h3>
              <ul>
                <li><strong>Kůra a dřevní štěpka</strong> – nejpopulárnější, vydrží 1–3 roky, postupně se rozkládá a obohacuje půdu</li>
                <li><strong>Zkosená tráva</strong> – rychlá a zdarma, vrstva 5–8 cm. Nechej ji vždy trochu preschnout, aby nezaplesnivěla</li>
                <li><strong>Listí</strong> – výborný zimní mulč pod stromy a keři</li>
                <li><strong>Sláma</strong> – ideální mezi řádky zeleniny</li>
              </ul>
              <h3>Anorganický mulč</h3>
              <ul>
                <li><strong>Štěrk nebo kamenivo</strong> – perfektní pro okrasné záhony, trvalé řešení</li>
                <li><strong>Geotextilie pod štěrkem</strong> – kombinace blokuje plevel efektivně na 5–10 let</li>
              </ul>
              <div className="article-tip">
                <strong>💡 Tip:</strong> Vrstva mulče musí být <strong>min. 8–10 cm</strong> silná. Tenčí vrstva plevel nezastaví – prostě proroste.
              </div>
            </section>

            <section id="rucni">
              <h2>Ruční vytrhávání – správná technika</h2>
              <p>
                Zdá se triviální, ale špatná technika způsobí, že plevel za týden vyroste zpátky silnější než dřív.
              </p>
              <ul>
                <li><strong>Vytrhávej po dešti nebo zalití</strong> – mokrá půda pustí kořeny celé. Suchá půda kořen přetrhne a zbytek v zemi nový výhonek vypustí.</li>
                <li><strong>Táhni svisle dolů, ne do strany</strong> – dostaneš celý kořen.</li>
                <li><strong>Používej výtrhávač plevele</strong> – nástroj za 100–300 Kč, vytáhne i hluboký kůlový kořen (pampeliška, šťovík) bez ohýbání.</li>
                <li><strong>Nechej vytrhané rostliny uschnout na slunci</strong> – pak je dej do kompostu. Nezasyp je zpátky do záhonu – některé stihnou dozrát a semena spadnou do půdy.</li>
              </ul>
            </section>

            <section id="ocet">
              <h2>Ocet a sůl – kdy použít a kdy ne</h2>
              <p>
                Ocet (kyselina octová) skutečně plevel ničí – ale pouze nadzemní část. Kořeny přežijí a plevel vyroste zpátky.
                Funguje tedy jako dočasné řešení na jednoletý plevel nebo na spárách mezi dlaždicemi.
              </p>
              <p>
                <strong>Jak použít:</strong> Nastříkej čistý ocet (10% nebo potravinářský 8%) přímo na listy za slunečného dne. Plevel uschne za 24–48 hodin.
              </p>
              <div className="article-tip">
                <strong>⚠️ Pozor:</strong> Ocet a sůl <strong>okyselují a zaslaňují půdu</strong>. Při opakovaném použití na záhon poškodíš půdní strukturu a znemožníš pěstování po roky. Používej jen na spáry v dlažbě nebo na cestách.
              </div>
            </section>

            <section id="voda">
              <h2>Vroucí voda – jednoduchá a efektivní</h2>
              <p>
                Vroucí voda zabíjí plevel včetně kořenů – teplo denaturuje buněčné proteiny. Ideální na spáry v dlažbě, obrubníky nebo cestičky.
              </p>
              <p>
                Jednoduše přelij vroucí vodou z konvice přímo na plevel. Efekt je okamžitý – rostlina uschne během hodin.
                Na záhon nepoužívej – zabije i užitečné organismy v půdě.
              </p>
            </section>

            <section id="geotextilie">
              <h2>Geotextilie a štěrk – trvalé řešení</h2>
              <p>
                Pro okrasné záhony, pod keři nebo na cestičkách je kombinace geotextilie + štěrk nejtrvalejší řešení.
              </p>
              <ul>
                <li><strong>Krok 1:</strong> Záhon důkladně vyplej – odstraň všechny kořeny.</li>
                <li><strong>Krok 2:</strong> Rozlož geotextilii přes celou plochu, přesahy min. 20 cm.</li>
                <li><strong>Krok 3:</strong> Zasype vrstvou štěrku nebo kameniva 5–8 cm.</li>
                <li><strong>Krok 4:</strong> Rostliny sázej přes výřezy v textilii.</li>
              </ul>
              <div className="article-tip">
                <strong>💡 Tip:</strong> Nekupuj nejlevnější geotextilii – prořídne za 2–3 roky a plevel proroste. Kvalitní tkaná geotextilie (gramáž min. 100 g/m²) vydrží 10+ let.
              </div>
            </section>

            <section id="mytus">
              <h2>Co nefunguje – mýty o hubení plevele</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Mýtus</th><th>Realita</th></tr></thead>
                  <tbody>
                    <tr><td>Sůl trvale zničí plevel</td><td>Okyseluje půdu a brání pěstování čehokoli dalšího</td></tr>
                    <tr><td>Plamen z kahanu zabije i kořeny</td><td>Zabije jen nadzemní část, kořeny přežijí</td></tr>
                    <tr><td>Noviny pod mulčem zastaví plevel navždy</td><td>Pomůže na 1–2 roky, pak se rozloží</td></tr>
                    <tr><td>Stačí posekání plevele</td><td>Většina plevele sekáním stimuluje hustší růst</td></tr>
                  </tbody>
                </table>
              </div>
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
                <li><a href="#mulcovani">Mulčování</a></li>
                <li><a href="#rucni">Ruční vytrhávání</a></li>
                <li><a href="#ocet">Ocet a sůl</a></li>
                <li><a href="#voda">Vroucí voda</a></li>
                <li><a href="#geotextilie">Geotextilie</a></li>
                <li><a href="#mytus">Co nefunguje</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget sidebar-cta">
              <div style={{ fontSize: 32, marginBottom: 10 }}>🌱</div>
              <div className="sidebar-cta-title">Vyvýšený záhon</div>
              <p className="sidebar-cta-desc">Méně plevele, lepší zemina, pohodlná práce. Postav si ho za víkend.</p>
              <Link href="/blog/vyvseny-zahon-postup" className="btn btn-black" style={{ width: "100%", justifyContent: "center", marginTop: 14 }}>Číst článek →</Link>
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
      `}</style>
    </>
  );
}
