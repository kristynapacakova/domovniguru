import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak přidat zásuvku do místnosti – povrchová nebo zapuštěná 2026",
  description: "Jak přidat novou elektrickou zásuvku do místnosti. Povrchová lišta bez bourání nebo zapuštěná do zdi – kdy potřebuješ elektrikáře a kdy to zvládneš sám.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/pridat-zasuvku" },
  openGraph: { title: "Jak přidat zásuvku do místnosti 2026", description: "Povrchová nebo zapuštěná zásuvka – kdy elektrikář a kdy sám. Postup a ceny.", url: "https://www.domovniguru.cz/blog/pridat-zasuvku", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-22T08:00:00Z", modifiedTime: "2026-04-22T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak přidat zásuvku do místnosti 2026", description: "Povrchová nebo zapuštěná – jak přidat zásuvku a kdy potřebuješ elektrikáře." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/pridat-zasuvku#article",
    "headline": "Jak přidat zásuvku do místnosti – povrchová nebo zapuštěná 2026",
    "datePublished": "2026-04-22T08:00:00Z",
    "dateModified": "2026-04-22T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak přidat zásuvku", "přidání zásuvky do místnosti", "povrchová zásuvka lišta", "zapuštěná zásuvka", "elektrikář nová zásuvka", "kabelová lišta zásuvka"]
  }]
};

const RELATED = [
  { title: "Jak prodloužit elektrický kabel", href: "/blog/prodlouzit-elektricky-kabel", read: "5 min" },
  { title: "Jak vyměnit zásuvku sám", href: "/blog/jak-vymenit-zasuvku", read: "6 min" },
  { title: "Co dělat když nejde proud v části bytu", href: "/blog/nejde-proud-cast-bytu", read: "5 min" },
  { title: "Chytrá domácnost – jak začít", href: "/blog/chytra-domacnost-zacinamy", read: "7 min" },
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
              <span>Přidání zásuvky</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">⚡ Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak přidat zásuvku do místnosti – povrchová nebo zapuštěná</h1>
              <p className="article-lead">Chybí ti zásuvka u postele, za televizí nebo na pracovním stole? Povrchová zásuvka v liště je rychlé řešení bez elektrikáře. Zapuštěná vypadá lépe ale vyžaduje odborníka. Tady je rozdíl a jak na to.</p>
              <div className="article-meta-row"><span>Aktualizováno: 22. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/pridat-zasuvku" title="Jak přidat zásuvku do místnosti – povrchová nebo zapuštěná 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 175" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="175" fill="#f4f8fc"/>

                {/* Povrchová */}
                <rect x="20" y="20" width="340" height="140" rx="8" fill="#fff" stroke="#5a9e6f" strokeWidth="1.5"/>
                <rect x="20" y="20" width="340" height="38" rx="8" fill="#5a9e6f" opacity="0.12"/>
                <text x="190" y="44" textAnchor="middle" fontSize="12" fill="#5a9e6f" fontWeight="700">🔌 POVRCHOVÁ V LIŠTĚ</text>
                {[
                  { icon:"✅", text:"Bez elektrikáře – zvládneš sám" },
                  { icon:"✅", text:"Bez bourání – kabel v liště po zdi" },
                  { icon:"✅", text:"Cena 500–2 000 Kč materiál" },
                  { icon:"✅", text:"Hotovo za odpoledne" },
                  { icon:"⚠️", text:"Lišta je viditelná na zdi" },
                  { icon:"⚠️", text:"Méně estetické než zapuštěná" },
                ].map(({icon, text}, i) => (
                  <text key={i} x="35" y={72+i*14} fontSize="9.5" fill={icon==="✅" ? "#3a7e4f" : "#e07040"}>{icon} {text}</text>
                ))}

                {/* Zapuštěná */}
                <rect x="400" y="20" width="340" height="140" rx="8" fill="#fff" stroke="#4a90d9" strokeWidth="1.5"/>
                <rect x="400" y="20" width="340" height="38" rx="8" fill="#4a90d9" opacity="0.12"/>
                <text x="570" y="44" textAnchor="middle" fontSize="12" fill="#4a90d9" fontWeight="700">🔧 ZAPUŠTĚNÁ DO ZDI</text>
                {[
                  { icon:"✅", text:"Čistý vzhled – kabel skrytý ve zdi" },
                  { icon:"✅", text:"Trvalé a profesionální řešení" },
                  { icon:"⚠️", text:"Nutný elektrikář (zapojení do rozvaděče)" },
                  { icon:"⚠️", text:"Bourání drážky ve zdi" },
                  { icon:"⚠️", text:"Cena 2 000–5 000 Kč včetně práce" },
                  { icon:"⚠️", text:"Trvá déle – 1–3 dny" },
                ].map(({icon, text}, i) => (
                  <text key={i} x="415" y={72+i*14} fontSize="9.5" fill={icon==="✅" ? "#3a7e4f" : "#e07040"}>{icon} {text}</text>
                ))}

                <rect y="158" width="760" height="17" fill="#e0eaf4" opacity="0.5"/>
                <text x="380" y="170" textAnchor="middle" fontSize="8" fill="#3a6a8a" fontWeight="600" letterSpacing="0.06em">⚡ POVRCHOVÁ = BEZ ELEKTRIKÁŘE · ZAPUŠTĚNÁ = NUTNÝ ELEKTRIKÁŘ · OBÁ JSOU BEZPEČNÉ</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#povrchova">Povrchová zásuvka v liště – jak na to</a></li>
                <li><a href="#zapustena">Zapuštěná zásuvka – kdy a jak</a></li>
                <li><a href="#elektrikar">Kdy nutně potřebuješ elektrikáře</a></li>
                <li><a href="#ceny">Orientační ceny</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="povrchova">
              <h2>Povrchová zásuvka v kabelové liště – jak na to sám</h2>
              <p>Povrchová zásuvka v elektroinstalační liště je nejrychlejší způsob jak přidat zásuvku bez elektrikáře a bez bourání. Kabel vedete po povrchu zdi v plastové liště.</p>
              <ul>
                <li><strong>Co potřebuješ:</strong> Kabelová lišta 20×10 mm nebo 40×16 mm (závisí na počtu kabelů), povrchová zásuvka (nastěnná), kabel CYKY-J 3×1,5 mm², šrouby a hmoždinky.</li>
                <li><strong>Krok 1 — Naplánuj trasu:</strong> Kabely veď vždy vodorovně nebo svisle — nikdy diagonálně. Ušetříš materiál a budoucí elektrikář bude vědět kde kabel hledat.</li>
                <li><strong>Krok 2 — Připevni lištu:</strong> Lištu přichyť ke zdi šrouby a hmoždinkami (rozteč 30–40 cm). Rohy lišty řeš speciálními rohovými díly.</li>
                <li><strong>Krok 3 — Veď kabel:</strong> Kabel vlož do lišty před jejím uzavřením. Kabel musí mít průřez min. 1,5 mm² pro standardní zásuvky.</li>
                <li><strong>Krok 4 — Připoj zásuvku:</strong> Povrchová zásuvka se připojuje stejně jako klasická — L (hnědá), N (modrá), PE (zeleno-žlutá). Viz <Link href="/blog/jak-vymenit-zasuvku" style={{color:"#5a9e6f",fontWeight:600}}>Jak vyměnit zásuvku →</Link></li>
                <li><strong>Krok 5 — Napájení:</strong> Kabel musí být zapojen do existující zásuvky nebo rozvaděče. <strong>Zapojení do rozvaděče musí provést elektrikář.</strong> Napájení z existující zásuvky zvládneš sám.</li>
              </ul>
              <div className="article-tip"><strong>⚠️ Důležité:</strong> Povrchová zásuvka napájená z existující zásuvky nesmí přetěžovat daný okruh. Silné spotřebiče (pračka, trouba) mají vlastní okruh — na něj nelze napojovat další zásuvky.</div>
            </section>

            <section id="zapustena">
              <h2>Zapuštěná zásuvka – kdy a jak</h2>
              <p>Zapuštěná zásuvka vypadá profesionálně — kabel je skrytý ve zdi, zásuvka je zapuštěná do krabice. Vyžaduje ale bourání drážky a zapojení elektrikářem.</p>
              <ul>
                <li><strong>Příprava drážky:</strong> Úhlovou bruskou nebo sekaním vytvořit drážku ve zdi pro kabel a krabici. Šířka drážky 2–3 cm, hloubka 3–4 cm.</li>
                <li><strong>Krabice do zdi:</strong> Do otvoru usadit elektroinstalační krabici (KO 68) a zafixovat montážní pěnou nebo sádrou.</li>
                <li><strong>Kabel v drážce:</strong> Kabel vedený v chráničce (flexi trubce) zamítnout do drážky a zazdít omítkovinou nebo sádrou.</li>
                <li><strong>Zapojení elektrikářem:</strong> Nový okruh nebo odbočení z existujícího musí provést elektrikář — práce v rozvaděči nebo ve zdech vyžaduje kvalifikaci.</li>
              </ul>
            </section>

            <section id="elektrikar">
              <h2>Kdy nutně potřebuješ elektrikáře</h2>
              <ul>
                <li><strong>Nový okruh z rozvaděče:</strong> Přidání nového jističe a vedení nového okruhu — vždy elektrikář.</li>
                <li><strong>Zapojení do rozvaděče:</strong> Jakákoli práce v rozvaděči — elektrikář.</li>
                <li><strong>Koupelna nebo kuchyň:</strong> Zásuvky ve vlhkých prostorách mají speciální požadavky — elektrikář.</li>
                <li><strong>Venkovní zásuvka:</strong> Vedení kabelu ven a zapojení venkovní zásuvky — elektrikář.</li>
                <li><strong>Sám zvládneš:</strong> Povrchová zásuvka napájená ze stávající zásuvky ve stejné místnosti (ne koupelna, ne kuchyňský okruh).</li>
              </ul>
            </section>

            <section id="ceny">
              <h2>Orientační ceny 2026</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ</th><th>Materiál</th><th>Práce elektrikáře</th><th>Celkem</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Povrchová v liště (DIY)</strong></td><td>300–800 Kč</td><td>0 (sám)</td><td>300–800 Kč</td></tr>
                    <tr><td><strong>Povrchová v liště (elektrikář)</strong></td><td>300–800 Kč</td><td>800–1 500 Kč</td><td>1 100–2 300 Kč</td></tr>
                    <tr><td><strong>Zapuštěná (nový odbočení)</strong></td><td>200–500 Kč</td><td>1 500–3 000 Kč</td><td>1 700–3 500 Kč</td></tr>
                    <tr><td><strong>Zapuštěná (nový okruh)</strong></td><td>500–1 000 Kč</td><td>3 000–6 000 Kč</td><td>3 500–7 000 Kč</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Kolik zásuvek mohu napojit na jednu existující?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Technicky lze napojit více zásuvek za sebou, ale musíš hlídat celkové zatížení okruhu. Standardní okruh 16 A unese 3 680 W (16 A × 230 V). Sečti příkony všech spotřebičů na daném okruhu — nesmí přesáhnout 80 % jmenovité hodnoty jističe (tedy 2 944 W pro 16 A). Přetížení = jistič vybaví nebo v horším případě přehřívání.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Potřebuji povolení na novou zásuvku?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Na přidání zásuvky v bytě stavební povolení nepotřebuješ. Elektrikářské práce ale musí provést osoba s příslušnou elektrotechnickou kvalifikací (vyhláška č. 50/1978 Sb.). Pokud se rozhodneš pro pojistné plnění po požáru způsobeném elektroinstalací, pojišťovna může žádat doklad o provedení prací certifikovanou osobou.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jaký kabel použít pro novou zásuvku?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Pro standardní zásuvky 230 V do 16 A: kabel CYKY-J 3×1,5 mm² (tři vodiče s ochranným zemněním). Pro silnější spotřebiče (pračka, myčka do 20 A): CYKY-J 3×2,5 mm². Kabel v chráničce pro vedení v zemi nebo za sádrokartonem. Barvy vodičů: L = hnědá, N = modrá, PE = zeleno-žlutá.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/pridat-zasuvku" title="Jak přidat zásuvku do místnosti – povrchová nebo zapuštěná 2026" />

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
                <li><a href="#povrchova">Povrchová v liště</a></li>
                <li><a href="#zapustena">Zapuštěná do zdi</a></li>
                <li><a href="#elektrikar">Kdy nutný elektrikář</a></li>
                <li><a href="#ceny">Orientační ceny</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/elektrika" className="sidebar-cat-link">⚡ Elektrika & osvětlení<span>20 článků →</span></Link>
            </div>
          </aside>
        </div>
      </div>
      <style>{`
        .article-layout{display:grid;grid-template-columns:1fr 280px;gap:56px;padding:48px 0 80px;align-items:start}
        .article-header{margin-bottom:32px}.article-meta-top{display:flex;align-items:center;gap:12px;margin-bottom:16px}
        .article-cat-pill{display:inline-flex;align-items:center;height:24px;padding:0 12px;border-radius:999px;border:1px solid var(--border);background:var(--surface);font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);text-decoration:none;transition:background 120ms}
        .article-cat-pill:hover{background:#e8e7e2;color:var(--text)}.article-read-time{font-size:12px;color:var(--muted);font-weight:500}
        .article-h1{font-family:var(--font-serif);font-size:clamp(26px,3.5vw,40px);line-height:1.1;font-weight:400;letter-spacing:-.01em;margin-bottom:16px}
        .article-lead{font-size:18px;line-height:1.65;color:var(--muted);font-weight:300;margin-bottom:14px}
        .article-meta-row{display:flex;gap:8px;font-size:12px;color:var(--muted);font-weight:500}
        .hero-illustration{margin:28px 0 36px;border-radius:12px;overflow:hidden;border:1px solid var(--border)}.hero-svg{width:100%;height:auto;display:block}
        .toc{background:var(--surface);border-radius:10px;padding:20px 24px;margin-bottom:40px}.toc-label{font-size:11px;font-weight:700;letter-spacing:.10em;text-transform:uppercase;color:var(--muted);margin-bottom:12px}
        .toc-list{padding-left:18px;display:flex;flex-direction:column;gap:6px}.toc-list li a{font-size:14px;color:var(--muted);text-decoration:none;font-weight:400;transition:color 120ms}.toc-list li a:hover{color:var(--text)}
        .article-body section{margin-bottom:48px}.article-body h2{font-family:var(--font-serif);font-size:clamp(20px,2.5vw,26px);font-weight:400;line-height:1.2;margin-bottom:16px;border-top:1px solid var(--border);padding-top:24px;margin-top:8px}
        .article-body p{font-size:16px;line-height:1.75;color:#2a2a28;font-weight:300;margin-bottom:14px}.article-body ul{padding-left:22px;margin-bottom:16px;display:flex;flex-direction:column;gap:8px}
        .article-body li{font-size:15px;line-height:1.6;color:#2a2a28;font-weight:300}.article-body strong{font-weight:600;color:var(--text)}
        .article-tip{background:#fff8e8;border-left:3px solid #f59e0b;border-radius:0 8px 8px 0;padding:14px 18px;font-size:14px;line-height:1.6;color:#78716c;margin:20px 0}
        .article-table-wrap{overflow-x:auto;margin:16px 0 24px}.article-table{width:100%;border-collapse:collapse;font-size:14px;line-height:1.5}
        .article-table th{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);padding:10px 14px;text-align:left;border-bottom:2px solid var(--border);background:var(--surface)}
        .article-table td{padding:10px 14px;border-bottom:1px solid var(--border);vertical-align:top;color:#2a2a28;font-weight:300}.article-table tr:last-child td{border-bottom:none}
        .faq-list{display:flex;flex-direction:column;gap:8px;margin-top:16px}.faq-item{border:1px solid var(--border);border-radius:10px;overflow:hidden}
        .faq-summary{display:flex;justify-content:space-between;align-items:center;padding:14px 18px;cursor:pointer;font-size:15px;font-weight:500;color:var(--text);background:var(--surface);list-style:none;gap:12px}
        .faq-summary:hover{background:#e8e7e2}.faq-icon{flex-shrink:0;color:var(--muted);transition:transform 200ms;font-size:14px}
        details[open] .faq-icon{transform:rotate(180deg)}.faq-body{padding:14px 18px;font-size:14px;line-height:1.7;color:#4a4a48;font-weight:300;border-top:1px solid var(--border);background:#fff}
        .related-section{margin-top:56px}.related-section h2{font-family:var(--font-serif);font-size:22px;font-weight:400;margin-bottom:20px;padding-top:24px;border-top:1px solid var(--border)}
        .related-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}.article-sidebar{position:sticky;top:80px;display:flex;flex-direction:column;gap:16px}
        .sidebar-widget{background:#fff;border:1px solid var(--border);border-radius:12px;padding:20px}.sidebar-widget-title{font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-bottom:14px}
        .sidebar-toc{list-style:none;display:flex;flex-direction:column;gap:8px}.sidebar-toc li a{font-size:13px;color:var(--muted);text-decoration:none;font-weight:400;transition:color 120ms;line-height:1.4;display:block}.sidebar-toc li a:hover{color:var(--text)}
        .sidebar-cat-link{display:flex;justify-content:space-between;align-items:center;font-size:14px;font-weight:500;color:var(--text);text-decoration:none;padding:8px 0;border-bottom:1px solid var(--border);transition:color 120ms}.sidebar-cat-link:hover{color:var(--muted)}.sidebar-cat-link span{font-size:12px;color:var(--muted)}
        @media(max-width:960px){.article-layout{grid-template-columns:1fr;gap:0}.article-sidebar{position:static;margin-top:40px}.related-grid{grid-template-columns:1fr}}
      `}</style>
    </>
  );
}
