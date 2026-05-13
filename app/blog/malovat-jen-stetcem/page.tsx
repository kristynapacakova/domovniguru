import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak malovat jen štětcem – rohy, lišty a detaily bez válce 2026",
  description: "Kdy a jak malovat štětcem místo válce. Rohy, lišty, ostění oken a detaily – správná technika štětcem pro profesionální výsledek bez přetahování.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/malovat-jen-stetcem" },
  openGraph: { title: "Jak malovat jen štětcem – rohy a detaily 2026", description: "Rohy, lišty a detaily – správná technika štětcem pro čistý výsledek.", url: "https://www.domovniguru.cz/blog/malovat-jen-stetcem", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-22T08:00:00Z", modifiedTime: "2026-04-22T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak malovat jen štětcem 2026", description: "Rohy, lišty a detaily – správná technika štětcem pro čistý výsledek." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/malovat-jen-stetcem#article",
    "headline": "Jak malovat jen štětcem – rohy, lišty a detaily bez válce 2026",
    "datePublished": "2026-04-22T08:00:00Z",
    "dateModified": "2026-04-22T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["malovat štětcem rohy", "jak malovat štětcem", "malování rohů stěny", "štětec vs váleček", "malování lišt štětcem", "technika malování štětcem"]
  }]
};

const RELATED = [
  { title: "Jak malovat rohy a lišty bez přetahování", href: "/blog/jak-malovat-rohy-a-listy", read: "5 min" },
  { title: "Jak malovat zeď – kompletní průvodce", href: "/blog/jak-malovat-zed", read: "5 min" },
  { title: "Jak malovat celý byt za víkend", href: "/blog/malovat-cely-byt-za-vikend", read: "6 min" },
  { title: "Jak vybrat barvu na zeď", href: "/blog/jak-vybrat-barvu-na-zed", read: "9 min" },
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
              <Link href="/blog/kategorie/malovani">Malování & barvy</Link><span className="breadcrumb-sep">/</span>
              <span>Malování jen štětcem</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování & barvy</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak malovat jen štětcem – rohy, lišty a detaily bez válce</h1>
              <p className="article-lead">Váleček je král velkých ploch, ale rohy, lišty a detaily mu vzdorují. Správná technika štětcem je klíč ke krásnému výsledku bez ostrých přechodů a přetahování.</p>
              <div className="article-meta-row"><span>Aktualizováno: 22. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/malovat-jen-stetcem" title="Jak malovat jen štětcem – rohy, lišty a detaily bez válce 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 175" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="175" fill="#fdf8f4"/>
                <text x="380" y="22" textAnchor="middle" fontSize="10" fill="#6a6050" fontWeight="700" letterSpacing="0.04em">ŠTĚTEC vs. VÁLEČEK – KDE CO POUŽÍT</text>

                {/* Váleček sekce */}
                <rect x="20" y="32" width="340" height="128" rx="8" fill="#fff" stroke="#4a90d9" strokeWidth="1.2"/>
                <text x="190" y="52" textAnchor="middle" fontSize="11" fill="#4a90d9" fontWeight="700">🎨 VÁLEČEK</text>
                <text x="190" y="68" textAnchor="middle" fontSize="9" fill="#6a8aaa">Velké rovné plochy</text>
                {["✓ Stěny (velká plocha)", "✓ Strop", "✓ Rychlé a rovnoměrné krytí", "✓ Méně stop po nástroji", "✗ Rohy nedosáhne", "✗ Lišty a detaily nepřesné"].map((text, i) => (
                  <text key={i} x="35" y={85+i*14} fontSize="9" fill={text.startsWith("✓") ? "#3a7e4f" : "#e07040"}>{text}</text>
                ))}

                {/* Štětec sekce */}
                <rect x="400" y="32" width="340" height="128" rx="8" fill="#fff" stroke="#e07040" strokeWidth="1.2"/>
                <text x="570" y="52" textAnchor="middle" fontSize="11" fill="#e07040" fontWeight="700">🖌️ ŠTĚTEC</text>
                <text x="570" y="68" textAnchor="middle" fontSize="9" fill="#aa8a6a">Detaily a obtížná místa</text>
                {["✓ Rohy stěn", "✓ Lišty a římsy", "✓ Ostění oken a dveří", "✓ Za radiátorem", "✗ Pomalé na velké plochy", "✗ Stopy po štětinaách (špatná technika)"].map((text, i) => (
                  <text key={i} x="415" y={85+i*14} fontSize="9" fill={text.startsWith("✓") ? "#3a7e4f" : "#e07040"}>{text}</text>
                ))}

                <rect y="158" width="760" height="17" fill="#f0ece8" opacity="0.5"/>
                <text x="380" y="170" textAnchor="middle" fontSize="8" fill="#8a7050" fontWeight="600" letterSpacing="0.06em">🖌️ SPRÁVNÝ POSTUP: NEJDŘÍV ŠTĚTCEM ROHY A OKRAJE, PAK VÁLEČKEM VELKOU PLOCHU</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#kdy-stetec">Kdy použít štětec místo válce</a></li>
                <li><a href="#vyber">Výběr správného štětce</a></li>
                <li><a href="#technika">Technika malování štětcem</a></li>
                <li><a href="#rohy">Malování rohů</a></li>
                <li><a href="#listy">Malování lišt a ostění</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="kdy-stetec">
              <h2>Kdy použít štětec místo válce</h2>
              <ul>
                <li><strong>Rohy stěn:</strong> Váleček nedosáhne do rohů — vždy musíš nejdřív přejít štětcem 5–8 cm od rohu na každou stranu.</li>
                <li><strong>Podél lišt a soklů:</strong> Přesná čára podél dřevěné lišty nebo soklu bez přetahování na dřevo.</li>
                <li><strong>Ostění oken a dveří:</strong> Úzké plochy kde se váleček nevejde nebo by přetáhl barvu na rám.</li>
                <li><strong>Za radiátorem:</strong> Speciální úzký štětec nebo mini váleček s dlouhou rukojetí.</li>
                <li><strong>Oprava chyb:</strong> Lokální doplnění barvy po poškrábání nebo při opravě.</li>
              </ul>
              <div className="article-tip"><strong>💡 Zlaté pravidlo:</strong> Vždy maluj nejdřív štětcem okraje a rohy, teprve pak válečkem velkou plochu — přechod bude neznatelný dokud je štětcová barva ještě mokrá.</div>
            </section>

            <section id="vyber">
              <h2>Výběr správného štětce</h2>
              <ul>
                <li><strong>Šikmý štětec (angled brush):</strong> Nejlepší pro malování rohů a podél lišt. Šikmý okraj umožňuje přesnou čáru bez malířské pásky. Šířka 50–75 mm.</li>
                <li><strong>Plochý štětec:</strong> Pro lišty, rámy a ploché plochy. Šířka 25–50 mm pro detaily, 75–100 mm pro větší plochy.</li>
                <li><strong>Kulatý štětec:</strong> Pro velmi úzká místa — mezery za trubkami, úzké škvíry.</li>
                <li><strong>Kvalita štětin:</strong> Syntetické štětiny pro vodou ředitelné barvy (akrylát, latex). Přírodní štětiny pro olejové barvy a laky. Levný štětec zanechává stopy po štětinaách — investuj 150–400 Kč do kvalitního štětce.</li>
              </ul>
            </section>

            <section id="technika">
              <h2>Technika malování štětcem</h2>
              <ul>
                <li><strong>Správné naplnění štětce:</strong> Noř štětec do barvy do 1/3 délky štětin — ne až ke kovu. Odkap přebytek o okraj nádoby. Přeplněný štětec kape a zanechává kapky.</li>
                <li><strong>Pohyb štětcem:</strong> Tahy ve směru vlákna dřeva nebo podél lišty. Každý tah vedeno od suchého místa do čerstvé barvy — ne naopak.</li>
                <li><strong>Tlak:</strong> Lehký tlak pro přesné čáry, silnější pro rozetření. Štětec nesmíš mačkat tak aby se štětiny rozevřely — ztratíš přesnost.</li>
                <li><strong>Zakončení tahu:</strong> Každý tah zakončit lehkým zvednutím štětce — zabrání zanechávání stop na konci tahu.</li>
                <li><strong>Čerstvá do čerstvé:</strong> Vždy aplikuj novou barvu do ještě mokré předchozí vrstvy v dané sekci — přechod bude neznatelný.</li>
              </ul>
            </section>

            <section id="rohy">
              <h2>Malování rohů – technika krok za krokem</h2>
              <ul>
                <li><strong>Krok 1:</strong> Načti štětec správně — ne příliš mnoho barvy.</li>
                <li><strong>Krok 2:</strong> Přilož štětec 5–8 cm od rohu na jednu stěnu, tahem veď ke stěně druhé — štětec se v rohu přirozeně ohne.</li>
                <li><strong>Krok 3:</strong> Opakuj tahy shora dolů nebo zdola nahoru — vždy stejný směr pro rovnoměrný výsledek.</li>
                <li><strong>Krok 4:</strong> Totéž na druhé straně rohu.</li>
                <li><strong>Krok 5:</strong> Dokud je barva v rohu mokrá, přejdi válečkem velkou plochu — přechod zmizí.</li>
                <li><strong>Bez malířské pásky:</strong> Šikmý štětec zvládne přesnou čáru bez pásky po tréningu. Pokud ne — malířská páska je tvůj přítel.</li>
              </ul>
            </section>

            <section id="listy">
              <h2>Malování lišt a ostění</h2>
              <ul>
                <li><strong>Malířská páska jako pojistka:</strong> Pro čistou čáru podél lišty nalep malířskou pásku na lištu (ne na zeď). Maluj přes hranu pásky, nechej zaschnout a sundej pásku dokud je barva ještě mírně vlhká (ne zcela suchá — jinak se barva odtrhne).</li>
                <li><strong>Bez malířské pásky:</strong> Přilož štětec rovnoběžně s lištou, přesnou hranou štětin veď podél hrany lišty. Vyžaduje trénink a jistou ruku.</li>
                <li><strong>Pořadí:</strong> Nejdřív maluj lišty a detaily, pak stěnu. Drobné přetahování na stěnu zakryje váleček. Přetahování na lištu se opravuje hůř.</li>
                <li><strong>Ostění oken:</strong> Maluj od středu rámu k okraji — barva se nedostane na sklo. Malířská páska na skle je bezpečnější varianta.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Lze namalovat celý pokoj jen štětcem?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Technicky ano, ale je to mnohonásobně pomalejší a výsledek bývá méně rovnoměrný. Váleček aplikuje barvu rychleji a rovnoměrněji bez stop po nástroici. Štětcem celý pokoj zvládneš za 4–6 hodin, válečkem za 1–2 hodiny. Výjimka: velmi malé místnosti nebo specifické dekorativní techniky (efektová barva, lazura).</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak se zbavit stop po štětinaách?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Stopy po štětinaách vznikají z přeplněného štětce, špatné kvality štětce nebo malování přes zaschlou vrstvu. Řešení: méně barvy na štětci, kvalitnější štětec (syntetické štětiny Purdy nebo Wooster), maluj vždy do mokré vrstvy. Případné stopy po zaschnutí lehce přebrousit jemným papírem (180) a přemalovat.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Kdy sundat malířskou pásku?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ideálně dokud je barva ještě mírně vlhká — po 30–60 minutách od nanášení. Sundej pomalu pod úhlem 45° od čáry. Pokud pásku sundáš po úplném zaschnutí, může strhnout barvu se sebou. Pokud barva ještě schne a pásku sundáš příliš brzy, může se rozmazat.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/malovat-jen-stetcem" title="Jak malovat jen štětcem – rohy, lišty a detaily bez válce 2026" />

            <section className="related-section">
              <h2>Související články</h2>
              <div className="related-grid">
                {RELATED.map((r) => (
                  <Link key={r.href} href={r.href} className="card">
                    <div className="card-eyebrow-row"><span>Malování & barvy</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#kdy-stetec">Kdy použít štětec</a></li>
                <li><a href="#vyber">Výběr štětce</a></li>
                <li><a href="#technika">Technika</a></li>
                <li><a href="#rohy">Malování rohů</a></li>
                <li><a href="#listy">Lišty a ostění</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/malovani" className="sidebar-cat-link">🎨 Malování & barvy<span>20 článků →</span></Link>
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
