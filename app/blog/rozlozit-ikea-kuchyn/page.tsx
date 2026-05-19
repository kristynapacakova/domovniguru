import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak rozložit a přestěhovat kuchyň – postup bez poškození 2026",
  description: "Jak bezpečně rozložit kuchyňskou linku při stěhování. Co demontovat jako první, jak zabalit dvířka a pracovní desku a jak kuchyni znovu sestavit na novém místě.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/rozlozit-ikea-kuchyn" },
  openGraph: { title: "Jak rozložit a přestěhovat kuchyň 2026", description: "Postup demontáže kuchyňské linky – co nejdřív, jak zabalit a jak znovu sestavit.", url: "https://www.domovniguru.cz/blog/rozlozit-ikea-kuchyn", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-22T08:00:00Z", modifiedTime: "2026-04-22T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak rozložit a přestěhovat kuchyň 2026", description: "Demontáž kuchyňské linky – postup krok za krokem bez poškození." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/rozlozit-ikea-kuchyn#article",
    "headline": "Jak rozložit a přestěhovat kuchyň – postup bez poškození 2026",
    "datePublished": "2026-04-22T08:00:00Z",
    "dateModified": "2026-04-22T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak rozložit kuchyň", "přestěhování kuchyňské linky", "demontáž kuchyně", "stěhování kuchyň postup", "jak sejmout dvířka kuchyně"]
  }]
};

const RELATED = [
  { title: "Jak vybrat stěhovací firmu", href: "/blog/vybrat-stehovaci-firmu", read: "5 min" },
  { title: "Jak přestěhovat velké spotřebiče", href: "/blog/prestehovat-velke-spotrebice", read: "5 min" },
  { title: "Jak správně zabalit věci při stěhování", href: "/blog/spravne-zabalit-veci", read: "4 min" },
  { title: "Jak instalovat kuchyňskou linku", href: "/blog/instalovat-kuchynskou-linku", read: "7 min" },
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
              <span>Rozložit a přestěhovat kuchyň</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏠 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak rozložit a přestěhovat kuchyň – postup bez poškození</h1>
              <p className="article-lead">Přestěhování kuchyně je jeden z nejtěžších úkolů při stěhování. Správné pořadí demontáže a balení rozhoduje o tom jestli kuchyni úspěšně sestavíš na novém místě.</p>
              <div className="article-meta-row"><span>Aktualizováno: 22. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/rozlozit-ikea-kuchyn" title="Jak rozložit a přestěhovat kuchyň – postup bez poškození 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 170" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="170" fill="#f8f6f2"/>
                <text x="380" y="22" textAnchor="middle" fontSize="10" fill="#6a6050" fontWeight="700" letterSpacing="0.04em">POŘADÍ DEMONTÁŽE KUCHYNĚ</text>
                {[
                  { n:"1", x:20, title:"Odpoj spotřebiče", desc:"Dřez, myčka,\ndřevůbek, trouba", color:"#e07040", icon:"🔌" },
                  { n:"2", x:148, title:"Sejmi dvířka", desc:"Sejmout ze závěsů\nzabalit bublinkovou fólií", color:"#f59e0b", icon:"🚪" },
                  { n:"3", x:276, title:"Vyjmi zásuvky", desc:"Vyjmout celé,\nzabalit papírem", color:"#5a9e6f", icon:"📦" },
                  { n:"4", x:404, title:"Odšroubuj pracovní\ndesku", desc:"Silikon podříznout\nnožem, šrouby zdola", color:"#4a90d9", icon:"🔧" },
                  { n:"5", x:532, title:"Odepni horní skříňky", desc:"Shora dolů\nvždy dva lidé", color:"#9b6fd4", icon:"⬆️" },
                  { n:"6", x:620, title:"Odepni spodní\nskříňky", desc:"Odšroubovat od zdi\nod rohu ke středu", color:"#c8904a", icon:"⬇️" },
                ].map(({n, x, title, desc, color, icon}) => (
                  <g key={n} transform={`translate(${x}, 30)`}>
                    <rect x="0" y="0" width="120" height="125" rx="8" fill="#fff" stroke={color} strokeWidth="1.2"/>
                    <circle cx="60" cy="18" r="14" fill={color} opacity="0.15"/>
                    <text x="60" y="23" textAnchor="middle" fontSize="10" fill={color} fontWeight="700">{n}</text>
                    <text x="60" y="46" textAnchor="middle" fontSize="18">{icon}</text>
                    {title.split('\n').map((t,i) => <text key={i} x="60" y={64+i*12} textAnchor="middle" fontSize="8.5" fill={color} fontWeight="600">{t}</text>)}
                    {desc.split('\n').map((d,i) => <text key={i} x="60" y={90+i*12} textAnchor="middle" fontSize="8" fill="#4a4a40">{d}</text>)}
                  </g>
                ))}
                <rect y="153" width="760" height="17" fill="#f0ece8" opacity="0.5"/>
                <text x="380" y="165" textAnchor="middle" fontSize="8" fill="#8a7050" fontWeight="600" letterSpacing="0.06em">🔧 FOŤ KAŽDÝ KROK · ŠROUBY DO PYTLÍČKŮ S POPISKEM · VŽDY DVA LIDÉ NA HORNÍ SKŘÍŇKY</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#priprava">Příprava před demontáží</a></li>
                <li><a href="#postup">Postup demontáže krok za krokem</a></li>
                <li><a href="#baleni">Jak zabalit díly na transport</a></li>
                <li><a href="#sestaveni">Sestavení na novém místě</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="priprava">
              <h2>Příprava před demontáží</h2>
              <ul>
                <li><strong>Vyfotografuj vše předem:</strong> Každou část kuchyně z více úhlů — detaily zapojení, polohu skříněk, způsob upevnění. Fotky ti ušetří hodiny při sestavování.</li>
                <li><strong>Připrav nářadí:</strong> Šroubovák (křížový i plochý), imbusové klíče, kleště, silikonový nůž, tužka, pytlíčky na šrouby, lepicí páska, bublinkový film, kartony.</li>
                <li><strong>Odpoj vodu a elektřinu:</strong> Zavři přívod vody ke dřezu a myčce. Vytáhni spotřebiče ze zásuvek. Pro pevně zapojené (trouba, varná deska) zavolej elektrikáře.</li>
                <li><strong>Vyprázdni skříňky:</strong> Veškerý obsah vyklidit před demontáží — kuchyňské skříňky jsou těžké i bez obsahu.</li>
              </ul>
            </section>

            <section id="postup">
              <h2>Postup demontáže krok za krokem</h2>
              <ul>
                <li><strong>1. Odpoj spotřebiče:</strong> Dřez odpoj od odpadní trubky a přívodu vody. Myčku odpoj od vody, odpadu a elektřiny. Troubu a varnou desku pouze elektrikář (pokud jsou pevně zapojeny).</li>
                <li><strong>2. Sejmi dvířka:</strong> Většina kuchyňských závěsů má tlačítko nebo páčku pro rychlé sejmutí dvířek bez nářadí. Dvířka čísluji nebo fot pro správné sestavení zpět.</li>
                <li><strong>3. Vyjmi zásuvky:</strong> Zásuvky vysunout co nejdál, zvednout a vytáhnout. Vložky zásuvek vyjmout zvlášť.</li>
                <li><strong>4. Odřízni silikon a odšroubuj pracovní desku:</strong> Silikonový nůž podél stěny a dřezu. Šrouby zpevňující desku jsou přístupné ze spodu skříněk.</li>
                <li><strong>5. Sejmout horní skříňky:</strong> Vždy dva lidé — jeden drží, druhý odšroubovává od zdi. Začni od krajů ke středu. Horní skříňky jsou lehčí ale nebezpečnější.</li>
                <li><strong>6. Odepni spodní skříňky:</strong> Odšroubovat od zdi a podlahy. Odpojit vodovod a odpad. Skříňky přesunout od zdi a vynést.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Šrouby od každé skříňky dej do zvlášť označeného pytlíčku ("horní skříňka vlevo", "pracovní deska"). Bez tohoto systému při sestavování ztratíš hodinu hledáním správných šroubů.</div>
            </section>

            <section id="baleni">
              <h2>Jak zabalit díly na transport</h2>
              <ul>
                <li><strong>Dvířka:</strong> Každé dvířko zabalit do bublinkového filmu zvlášť. Neskládej dvířka na sebe bez ochrany — poškrábají se.</li>
                <li><strong>Pracovní deska:</strong> Zabalit do ochranné fólie nebo kartonu. Přepravovat horizontálně — deska se snadno prohne nebo zlomí při přepravě na stojato.</li>
                <li><strong>Skříňky:</strong> Přepravovat bez dvířek. Kartónem vyloži vnitřek aby se nepoškrábaly při přepravě. Skříňky ze stejného řadu skládat na sebe (ne jiné tvary).</li>
                <li><strong>Drobné díly:</strong> Závěsy, šrouby, přepady — vše do označených pytlíčků do jednoho krabice "Kuchyň – příslušenství".</li>
              </ul>
            </section>

            <section id="sestaveni">
              <h2>Sestavení na novém místě</h2>
              <ul>
                <li><strong>Změř prostor předem:</strong> Před stěhováním přesně změř novou kuchyni — šířka, výška, poloha oken, výstupy vody a odpadů. Kuchyň nemusí pasovat!</li>
                <li><strong>Postup je opačný:</strong> Nejdřív spodní skříňky, pak horní, pak pracovní deska, pak dvířka a zásuvky, nakonec spotřebiče.</li>
                <li><strong>Vyrovnání nožiček:</strong> Spodní skříňky mají nastavitelné nožičky. Vyrovnej každou skříňku vodováhou před přišroubováním k sousední.</li>
                <li><strong>Silikonování:</strong> Po instalaci pracovní desky a dřezu přetěsnit silikónem podél stěny a kolem dřezu — zabrání zatékání vody do skříněk.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Vyplatí se přestěhovat starou kuchyň nebo koupit novou?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Záleží na stáří a stavu kuchyně. Kuchyň starší 15 let nebo poškozená demontáží se pravděpodobně nevyplatí stěhovat. Mladší kuchyň v dobrém stavu se vyplatí přestěhovat — nová kuchyň stojí 50 000–200 000 Kč a víc, přestěhování kuchyně 3 000–8 000 Kč práce. Navíc nová kuchyň nemusí pasovat do nového prostoru.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak dlouho trvá demontáž kuchyně?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Průměrná kuchyň (3–4 metry): 3–5 hodin pro dva lidi. Velká kuchyň nebo kuchyň s mnoha spotřebiči: 5–8 hodin. Profesionální stěhovací firma se specializací na kuchyně zvládne demontáž za 2–3 hodiny. Nezapočítávej čas na balení — to je dalších 1–2 hodiny.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Co dělat pokud kuchyň není šroubovaná ale přilepená?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Starší kuchyně nebo kuchyně montované "natvrdo" mohou být přilepené ke zdi montážní pěnou nebo tmelem. V tom případě je demontáž destructivní — skříňky se při oddělování od zdi poškodí. Zavolej odbornou firmu která posoudí jestli je demontáž bez poškození možná, nebo zda je lepší kuchyň nechat a koupit novou.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/rozlozit-ikea-kuchyn" title="Jak rozložit a přestěhovat kuchyň – postup bez poškození 2026" />

            <section className="related-section">
              <h2>Související články</h2>
              <div className="related-grid">
                {RELATED.map((r) => (
                  <Link key={r.href} href={r.href} className="card">
                    <div className="card-eyebrow-row"><span>Stěhování & rekonstrukce</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#priprava">Příprava</a></li>
                <li><a href="#postup">Postup demontáže</a></li>
                <li><a href="#baleni">Balení na transport</a></li>
                <li><a href="#sestaveni">Sestavení na novém místě</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/stehovani" className="sidebar-cat-link">🏠 Stěhování & rekonstrukce<span>20 článků →</span></Link>
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
