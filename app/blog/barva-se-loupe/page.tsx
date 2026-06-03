import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Proč se barva loupe – příčiny a jak to opravit 2026",
  description: "Proč se barva na zdi nebo dřevě loupe, praskáte a odlupuje? Nejčastější příčiny a jak správně opravit odlupující se barvu bez nutnosti přemalovat celou zeď.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/barva-se-loupe" },
  openGraph: { title: "Proč se barva loupe – příčiny a jak opravit 2026", description: "Příčiny loupající se barvy a jak ji správně opravit – zeď i dřevo.", url: "https://www.domovniguru.cz/blog/barva-se-loupe", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-22T08:00:00Z", modifiedTime: "2026-04-22T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "DomovniGuru" }] },
  twitter: { card: "summary_large_image", title: "Proč se barva loupe 2026", description: "Příčiny a oprava loupající se barvy na zdi i dřevě." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/barva-se-loupe#article",
    "headline": "Proč se barva loupe – příčiny a jak to opravit 2026",
    "datePublished": "2026-04-22T08:00:00Z",
    "dateModified": "2026-04-22T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["proč se barva loupe", "odlupující se barva zeď", "barva praská a loupe", "jak opravit loupající barvu", "barva se loupe příčiny", "oprava odlupující se barvy"]
  }]
};

const RELATED = [
  { title: "Jak opravit škrábance a díry ve zdi", href: "/blog/opravit-skrabance-diry-ve-zdi", read: "5 min" },
  { title: "Jak malovat zeď – kompletní průvodce", href: "/blog/jak-malovat-zed", read: "5 min" },
  { title: "Penetrace před malováním – proč a jak", href: "/blog/penetrace-pred-malovanim", read: "4 min" },
  { title: "Jak malovat přes tmavou barvu", href: "/blog/malovat-pres-tmavou-barvu", read: "5 min" },
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
              <span>Proč se barva loupe</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování & barvy</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Proč se barva loupe – příčiny a jak to opravit</h1>
              <p className="article-lead">Loupající se barva není jen estetický problém — je to signál že příprava povrchu nebo samotné malování neproběhlo správně. Správná oprava trvá déle než přemalování, ale výsledek drží roky.</p>
              <div className="article-meta-row"><span>Aktualizováno: 22. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/barva-se-loupe" title="Proč se barva loupe – příčiny a jak to opravit 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 175" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="175" fill="#fdf8f4"/>
                <text x="380" y="22" textAnchor="middle" fontSize="10" fill="#8a5030" fontWeight="700" letterSpacing="0.04em">NEJČASTĚJŠÍ PŘÍČINY LOUPAJÍCÍ SE BARVY</text>

                {[
                  { x:20, icon:"💧", cause:"Vlhkost ve zdi", signs:"Bubliny pod barvou\nBílé výkvěty solí\nLoupe se od kraje", fix:"Odstranit vlhkost\nPenetrace na vlhkost\nNová barva", color:"#4a90d9" },
                  { x:210, icon:"🚫", cause:"Bez penetrace", signs:"Barva se loupe\nve velkých kusech\nPovrch suchý a savý", fix:"Obrousit\nPenetrovat\nPřemalovat", color:"#e07040" },
                  { x:400, icon:"🧱", cause:"Mastný povrch", signs:"Barva nedrží\nv určitých místech\nSkluzkost povrchu", fix:"Odmastit saponátem\nPřebrousit\nNenést barvu", color:"#9b6fd4" },
                  { x:590, icon:"🌡️", cause:"Malování za chladu\nnebo tepla", signs:"Barva praská\nhned po zaschnutí\nNerovnoměrný povrch", fix:"Malovat při 15–25 °C\nNe za přímého\nslunce", color:"#f59e0b" },
                ].map(({x, icon, cause, signs, fix, color}) => (
                  <g key={x} transform={`translate(${x}, 28)`}>
                    <rect x="0" y="0" width="163" height="132" rx="8" fill="#fff" stroke={color} strokeWidth="1.2"/>
                    <text x="81" y="26" textAnchor="middle" fontSize="18">{icon}</text>
                    <text x="81" y="43" textAnchor="middle" fontSize="9.5" fill={color} fontWeight="700">{cause}</text>
                    <line x1="10" y1="50" x2="153" y2="50" stroke={color} strokeWidth="0.5" opacity="0.4"/>
                    {signs.split('\n').map((l,i) => <text key={i} x="12" y={63+i*12} fontSize="8" fill="#4a4a40">· {l}</text>)}
                    <rect x="8" y="98" width="147" height="28" rx="4" fill={color} opacity="0.08"/>
                    <text x="81" y="110" textAnchor="middle" fontSize="7.5" fill={color} fontWeight="600">Oprava:</text>
                    {fix.split('\n').map((l,i) => <text key={i} x="81" y={120+i*10} textAnchor="middle" fontSize="7.5" fill={color}>{l}</text>)}
                  </g>
                ))}

                <rect y="158" width="760" height="17" fill="#f0e8e0" opacity="0.5"/>
                <text x="380" y="170" textAnchor="middle" fontSize="8" fill="#8a7050" fontWeight="600" letterSpacing="0.06em">🎨 PŘEMALOVÁNÍ BEZ OPRAVY PŘÍČINY = BARVA SE ODLOUPE ZNOVU ZA PÁR MĚSÍCŮ</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#priciny">Nejčastější příčiny</a></li>
                <li><a href="#vlhkost">Vlhkost – nejzákeřnější příčina</a></li>
                <li><a href="#oprava">Jak opravit loupající se barvu</a></li>
                <li><a href="#prevence">Jak předejít loupání v budoucnu</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="priciny">
              <h2>Nejčastější příčiny loupající se barvy</h2>
              <ul>
                <li><strong>Vlhkost ve zdi:</strong> Nejčastější příčina. Barva se odlupuje zdola nahoru nebo ve formě bublin. Příčiny vlhkosti: zatékání střechou, kondenzace, vzlínající vlhkost ze základů nebo netěsné rozvody.</li>
                <li><strong>Přeskočení penetrace:</strong> Savý povrch bez penetrace "vysaje" barvu dříve než stihne zaschnout a přilnout. Výsledek: barva se loupe ve velkých kusech bez zjevné příčiny.</li>
                <li><strong>Mastný nebo zaprášený povrch:</strong> Barva nepřilne na mastnotu (nicotinové usazeniny, vaření, ruční otisky). Loupe se typicky v kuchyni nebo kolem vypínačů.</li>
                <li><strong>Malování za špatných podmínek:</strong> Příliš horko nebo chlad způsobí nevhodné schnutí barvy — praská nebo se neváže na podklad.</li>
                <li><strong>Nespojitelné barvy:</strong> Olejová barva pod akrylátovou nebo naopak — různé barvy se nevážou na sebe a po čase se oddělí.</li>
                <li><strong>Příliš silná vrstva:</strong> Silná vrstva barvy praská při schnutí jako zemina za sucha. Dvě tenké vrstvy jsou vždy lepší.</li>
              </ul>
            </section>

            <section id="vlhkost">
              <h2>Vlhkost – nejzákeřnější příčina</h2>
              <p>Pokud se barva loupe ve formě bublin nebo se začíná od spodního okraje zdi, je velmi pravděpodobná vlhkost. Přemalování bez odstranění příčiny vlhkosti způsobí totéž za 6–12 měsíců.</p>
              <ul>
                <li><strong>Identifikace zdroje vlhkosti:</strong> Bílé výkvěty solí (eflorescence) = vzlínající vlhkost ze základů. Skvrny na stropě nebo horní části zdi = zatékání. Kondenzace = nedostatečné větrání.</li>
                <li><strong>Vzlínající vlhkost:</strong> Nutná chemická nebo mechanická injektáž — odborná práce. Povrchová oprava bez řešení zdroje je dočasná.</li>
                <li><strong>Zatékání:</strong> Opravit střechu, parapety nebo spáry dříve než malovat. Ani nejlepší barva nezastaví zatékající vodu.</li>
                <li><strong>Kondenzace:</strong> Zlepšit větrání — rekuperace, pravidelné větrání, snížení vlhkosti vzduchu. Na zdi použít difuzní barvu která propouští páru.</li>
              </ul>
            </section>

            <section id="oprava">
              <h2>Jak opravit loupající se barvu</h2>
              <ul>
                <li><strong>Krok 1 — Odstraň vše co se loupe:</strong> Škrabkou nebo bruskou odstraň vše co není pevně spojeno s podkladem. Loupe-li se víc než si myslíš — je to normální, odstraň vše nestabilní.</li>
                <li><strong>Krok 2 — Přebrousit hrany:</strong> Na hranách kde barva přechází od odlupujícího se místa k pevnému podkladu přebrousit jemným papírem — vytvoříš plynulý přechod.</li>
                <li><strong>Krok 3 — Oprav povrch:</strong> Prohlubně a nerovnosti vyplň tmelem nebo omítkovinou. Nechej zaschnout.</li>
                <li><strong>Krok 4 — Penetruj:</strong> Penetrace je povinná — sjednotí savost a zlepší přilnavost nové barvy.</li>
                <li><strong>Krok 5 — Namaluj novou vrstvu:</strong> Dvě tenké vrstvy barvy, nechej každou vrstvu řádně zaschnout.</li>
              </ul>
              <div className="article-tip"><strong>⚠️ Varování:</strong> Nestříkej novou barvu přes loupající se povrch bez opravy — nová barva se začne loupit s tou starou brzy. Je to ztráta času a peněz.</div>
            </section>

            <section id="prevence">
              <h2>Jak předejít loupání v budoucnu</h2>
              <ul>
                <li><strong>Vždy penetrovat:</strong> Penetrace je pojistka přilnavosti barvy. Na nový nebo savý povrch vždy.</li>
                <li><strong>Odmastit před malováním:</strong> Otřít zeď vlhkým hadrem s přídavkem saponátu — odstraní mastnotu, prach a otisky.</li>
                <li><strong>Správné podmínky:</strong> Malovat při 15–25 °C, ne za přímého slunce, deště nebo mrazu.</li>
                <li><strong>Dvě tenké vrstvy místo jedné silné:</strong> Každá vrstva max. 100–150 μm (viz doporučení výrobce). Nespěchej na druhou vrstvu — nechej první řádně zaschnout.</li>
                <li><strong>Kompatibilní barvy:</strong> Vždy se ujisti že nová barva je kompatibilní s podkladem. Akrylát nad akrylát, olej nad olej.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Mohu přemalovat přes loupající se barvu?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ne — nová barva nanášená přes nestabilní starý podklad se začne loupit s ním brzy. Vždy odstraň vše co se loupe, oprav povrch, penetruj a teprve pak mal. Přemalování bez opravy podkladu je nejčastější chyba která způsobí opakování problému za 6–12 měsíců.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Proč se barva loupe jen v koupelně nebo kuchyni?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Vlhkost a mastnota — typické problémy koupelny a kuchyně. V koupelně: nedostatečné větrání způsobí kondenzaci páry na stěnách. V kuchyni: mastnota z vaření se usazuje na zdi. Řešení: použít speciální koupelnovou nebo kuchyňskou barvu s vyšší odolností a zlepšit větrání.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak poznat jestli je starý nátěr kompatibilní s novou barvou?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Jednoduchý test: otři zeď isopropylalkoholem (lihem). Pokud se barva rozpustí nebo rozmaže — je to olejová barva. Pokud se nerozpustí — je to akrylát nebo latex. Olejový nátěr přetírat olejovým, akrylát akrátem. Akrylát nad starý olej bez přípravy způsobí loupaní.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/barva-se-loupe" title="Proč se barva loupe – příčiny a jak to opravit 2026" />

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
                <li><a href="#priciny">Nejčastější příčiny</a></li>
                <li><a href="#vlhkost">Vlhkost</a></li>
                <li><a href="#oprava">Jak opravit</a></li>
                <li><a href="#prevence">Jak předejít</a></li>
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
