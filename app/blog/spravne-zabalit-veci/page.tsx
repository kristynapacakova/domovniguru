import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak správně zabalit věci při stěhování – bez poškození 2026",
  description: "Jak zabalit věci při stěhování aby nic nepoškodit. Křehké věci, oblečení, knihy, elektronika – správný postup, jaké krabice použít a jak je označit.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/spravne-zabalit-veci" },
  openGraph: { title: "Jak správně zabalit věci při stěhování 2026", description: "Křehké věci, elektronika, oblečení – jak zabalit vše bez poškození.", url: "https://www.domovniguru.cz/blog/spravne-zabalit-veci", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-22T08:00:00Z", modifiedTime: "2026-04-22T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20spr%C3%A1vn%C4%9B%20zabalit%20v%C4%9Bci%20p%C5%99i%20st%C4%9Bhov%C3%A1n%C3%AD%20%E2%80%93%20bez%20po%C5%A1kozen%C3%AD%202026", width: 1200, height: 630, alt: "Jak správně zabalit věci při stěhování – bez poškození 2026" }] },
  twitter: { card: "summary_large_image", title: "Jak správně zabalit věci při stěhování 2026", description: "Jak zabalit vše bez poškození – křehké věci, elektronika, oblečení." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/spravne-zabalit-veci#article",
    "headline": "Jak správně zabalit věci při stěhování – bez poškození 2026",
    "datePublished": "2026-04-22T08:00:00Z",
    "dateModified": "2026-04-22T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak zabalit věci při stěhování", "balení stěhování", "jak zabalit křehké věci", "stěhovací krabice", "jak označit krabice stěhování"]
  }]
};

const RELATED = [
  { title: "Jak vybrat stěhovací firmu", href: "/blog/vybrat-stehovaci-firmu", read: "5 min" },
  { title: "Jak se zbavit starého nábytku", href: "/blog/zbavit-se-stareho-nabytku", read: "5 min" },
  { title: "Jak přestěhovat velké spotřebiče", href: "/blog/prestehovat-velke-spotrebice", read: "5 min" },
  { title: "Stěhovací checklist", href: "/blog/stehovani-checklist", read: "6 min" },
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
              <span>Jak správně zabalit věci</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏠 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak správně zabalit věci při stěhování – bez poškození</h1>
              <p className="article-lead">Poškozené věci při stěhování jsou nejčastěji výsledkem špatného balení, ne špatných stěhovníků. Správná technika zabalení ušetří stres a peníze.</p>
              <div className="article-meta-row"><span>Aktualizováno: 22. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/spravne-zabalit-veci" title="Jak správně zabalit věci při stěhování – bez poškození 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 170" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="170" fill="#f8f6f2"/>
                <text x="380" y="22" textAnchor="middle" fontSize="10" fill="#6a6050" fontWeight="700" letterSpacing="0.04em">SYSTÉM BALENÍ PŘI STĚHOVÁNÍ</text>
                {[
                  { x:20, icon:"📦", label:"Krabice", tip:"Malé = těžké věci\nVelké = lehké věci\nNikdy nepřeplňovat", color:"#c8904a" },
                  { x:160, icon:"💫", label:"Bublinkový film", tip:"Každý křehký kus\nMin. 2 vrstvy\nPevně ovinout", color:"#4a90d9" },
                  { x:300, icon:"📰", label:"Noviny / papír", tip:"Výplň prázdných\nmíst v krabici\nLevná alternativa", color:"#5a9e6f" },
                  { x:440, icon:"🏷️", label:"Popis krabic", tip:"Místnost + obsah\nKde nahoře\nKřehké = ČERVENĚ", color:"#e07040" },
                  { x:580, icon:"🔒", label:"Uzavření páskou", tip:"Dno i víko\n3× přes hranu\nSilná lepicí páska", color:"#9b6fd4" },
                  { x:660, icon:"⚠️", label:"Označení křehkého", tip:"Červený popis\nNa všech stranách\nŠipka nahoru", color:"#f59e0b" },
                ].map(({x, icon, label, tip, color}) => (
                  <g key={x} transform={`translate(${x}, 28)`}>
                    <rect x="0" y="0" width="120" height="128" rx="8" fill="#fff" stroke={color} strokeWidth="1.2"/>
                    <text x="60" y="30" textAnchor="middle" fontSize="20">{icon}</text>
                    <text x="60" y="48" textAnchor="middle" fontSize="9.5" fill={color} fontWeight="700">{label}</text>
                    <line x1="8" y1="54" x2="112" y2="54" stroke={color} strokeWidth="0.5" opacity="0.4"/>
                    {tip.split('\n').map((t,i) => <text key={i} x="60" y={68+i*14} textAnchor="middle" fontSize="8" fill="#4a4a40">{t}</text>)}
                  </g>
                ))}
                <rect y="153" width="760" height="17" fill="#f0ece8" opacity="0.5"/>
                <text x="380" y="165" textAnchor="middle" fontSize="8" fill="#8a7050" fontWeight="600" letterSpacing="0.06em">📦 ZAČNI BALIT 2 TÝDNY PŘEDEM · NEJDŘÍV CO NEJMÉNĚ POUŽÍVÁŠ · NAKONEC KUCHYŇ A LOŽNICE</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#material">Co potřebuješ na balení</a></li>
                <li><a href="#krehke">Křehké věci – nádobí a sklo</a></li>
                <li><a href="#elektronika">Elektronika</a></li>
                <li><a href="#obleceni">Oblečení a textil</a></li>
                <li><a href="#system">Systém popisování krabic</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="material">
              <h2>Co potřebuješ na balení</h2>
              <ul>
                <li><strong>Krabice:</strong> Standardní stěhovací krabice (60×40×40 cm nebo menší). Malé krabice na těžké věci (knihy, nářadí), velké na lehké (polštáře, ložní prádlo). Zdarma v supermarketech nebo kup nové od stěhovací firmy.</li>
                <li><strong>Bublinkový film:</strong> Na každý křehký předmět zvlášť. Kupuj větší role — budeš spotřebovat víc než si myslíš.</li>
                <li><strong>Silná lepicí páska:</strong> Dno i víko krabice 3× přelepit. Slabá páska se rozlepí při přenášení.</li>
                <li><strong>Noviny nebo balicí papír:</strong> Na výplň prázdných míst v krabicích. Bez výplně se věci pohybují a rozbíjejí.</li>
                <li><strong>Fixy:</strong> Silný fix na označení každé krabice.</li>
              </ul>
            </section>

            <section id="krehke">
              <h2>Křehké věci – nádobí a sklo</h2>
              <ul>
                <li><strong>Talíře:</strong> Nikdy neklást naplocho — vždy na bok (jako LP desky). Každý talíř zabalit do papíru zvlášť. Ve stoje jsou odolnější vůči tlaku.</li>
                <li><strong>Sklenice:</strong> Každou sklenici zabalit do papíru nebo bublinkového filmu. Naplnit papírem zevnitř. Uložit dnem dolů v krabici s měkkou výplní.</li>
                <li><strong>Hrnce a pánve:</strong> Zabalit jednotlivě do papíru. Menší hrnce dát do větších. Pokličky odděleně nebo zabalit zvlášť.</li>
                <li><strong>Vázy a dekorace:</strong> Každý kus individuálně zabalit do bublinkového filmu, min. 2 vrstvy. Krabici vyložit zmačkaným papírem ze všech stran.</li>
                <li><strong>Krabice s křehkými věcmi:</strong> Nepřeplňovat — max. 15–20 kg. Označit ČERVENĚ "KŘEHKÉ" na všech stranách a šipkou "TATO STRANA NAHORU".</li>
              </ul>
            </section>

            <section id="elektronika">
              <h2>Elektronika</h2>
              <ul>
                <li><strong>Ideálně v originálních obalech:</strong> Pokud máš původní krabici od televize nebo počítače — perfektní. Jsou konstruovány přesně pro daný přístroj.</li>
                <li><strong>Televize:</strong> Zabalit do bublinkového filmu, pak do kartonu. Přepravovat ve stoje (nikdy naplocho) — panel se může poškodit tlakem při ležení.</li>
                <li><strong>Počítač:</strong> Odpoj všechny kabely a sfotografuj zapojení. Zabalit do antistatického sáčku nebo bublinkového filmu. Pevný disk lze vyjmout a přepravovat odděleně jako pojistka.</li>
                <li><strong>Kabely:</strong> Každý kabel smotej a zabal gumičkou nebo kablovací páskou. Dej do označeného pytlíčku "kabely od TV" atd. Ušetříš hodiny rozplétání.</li>
              </ul>
            </section>

            <section id="obleceni">
              <h2>Oblečení a textil</h2>
              <ul>
                <li><strong>Oblečení na ramínkách:</strong> Přepravuj na ramínkách rovnou v šatních kartonech (speciální vysoké krabice se tyčí). Nestěhuje se — prostě přendáš do nové skříně.</li>
                <li><strong>Složené oblečení:</strong> Primo do krabice nebo do cestovních kufrů a tašek. Kufry jsou přirozeně pevné a odolné.</li>
                <li><strong>Ložní prádlo a polštáře:</strong> Velké lehké věci — dej do velkých krabic. Polštáře chrání křehké věci — vlož mezi ně nádobí nebo dekorace.</li>
                <li><strong>Ručníky a prostěradla:</strong> Skvělá výplň — použij místo bublinkového filmu pro zabalení křehkých věcí. Ušetří balicí materiál.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Ručníky, ponožky a trika dej přímo do zásuvek nebo košů — přepravíš je i s nábytkem a nemusíš je balit do krabic.</div>
            </section>

            <section id="system">
              <h2>Systém popisování krabic</h2>
              <ul>
                <li><strong>Každá krabice musí mít:</strong> Místnost kam patří (Ložnice, Kuchyň, Obývák), obsah (hrubý popis – Nádobí, Knihy, Oblečení).</li>
                <li><strong>Barevný kód:</strong> Každá místnost = jiná barva pásky nebo bodu fixem. Stěhovníci okamžitě vědí kam krabici dát.</li>
                <li><strong>Křehké:</strong> Červený nápis KŘEHKÉ na všech 4 stranách krabice (ne jen na víku — víko se může obrátit).</li>
                <li><strong>Prioritní krabice:</strong> Jedna "pohotovostní" krabice s věcmi které potřebuješ první den — ložní prádlo, pyžamo, kávovar, nabíječky, toaletní potřeby. Označit OTEVŘÍT PRVNÍ.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Jak těžká má být jedna krabice?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Max. 20–25 kg — to je bezpečný limit pro jednu osobu. Krabice s knihami jsou nejčastější chybou — plná krabice knih váží 30–40 kg a je nebezpečná pro záda a pro dno krabice. Knihy dávej do malých krabic nebo do sportovních tašek.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Kdy začít balit před stěhováním?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Začni 2–3 týdny předem s věcmi které nejméně používáš — dekorace, knihy, sezónní oblečení, věci ze skladu. Týden před stěhováním: obývák, dětský pokoj, ložnice. Den před: kuchyň (nechej jen nezbytnosti). Ráno stěhovacího dne: toaletní věci a lůžkoviny.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Kde vzít krabice zdarma?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Supermarkety a hobbymarkety — zeptej se ve skladu nebo na pokladně. Nákupní centrum — u větších obchodů. Facebook Marketplace nebo Bazoš — "dám krabice zdarma" je časté. Lékárny mají pevné menší krabice vhodné pro křehké věci. Nové krabice kup jen pro nejcitlivější věci.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/spravne-zabalit-veci" title="Jak správně zabalit věci při stěhování – bez poškození 2026" />

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
                <li><a href="#material">Co potřebuješ</a></li>
                <li><a href="#krehke">Křehké věci</a></li>
                <li><a href="#elektronika">Elektronika</a></li>
                <li><a href="#obleceni">Oblečení</a></li>
                <li><a href="#system">Systém popisování</a></li>
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
