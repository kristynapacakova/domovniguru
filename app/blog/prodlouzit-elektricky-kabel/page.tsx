import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak prodloužit elektrický kabel bezpečně – postup 2026",
  description: "Jak bezpečně prodloužit elektrický kabel pomocí spojky, prodlužovačky nebo nové zásuvky. Co je legální a co je nebezpečné – průvodce pro domácí kutily.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/prodlouzit-elektricky-kabel" },
  openGraph: { title: "Jak prodloužit elektrický kabel bezpečně 2026", description: "Spojka, prodlužovačka nebo nová zásuvka – jak bezpečně prodloužit kabel.", url: "https://www.domovniguru.cz/blog/prodlouzit-elektricky-kabel", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-22T08:00:00Z", modifiedTime: "2026-04-22T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak prodloužit elektrický kabel bezpečně 2026", description: "Spojka, prodlužovačka nebo nová zásuvka – jak prodloužit kabel bezpečně." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/prodlouzit-elektricky-kabel#article",
    "headline": "Jak prodloužit elektrický kabel bezpečně – postup 2026",
    "datePublished": "2026-04-22T08:00:00Z",
    "dateModified": "2026-04-22T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak prodloužit elektrický kabel", "prodloužení kabelu", "kabelová spojka", "prodlužovačka bezpečnost", "elektro kabel prodloužení", "přidání zásuvky"]
  }]
};

const RELATED = [
  { title: "Jak přidat zásuvku do místnosti", href: "/blog/pridat-zasuvku", read: "6 min" },
  { title: "Jak vyměnit zásuvku sám", href: "/blog/jak-vymenit-zasuvku", read: "6 min" },
  { title: "Co dělat když nejde proud v části bytu", href: "/blog/nejde-proud-cast-bytu", read: "5 min" },
  { title: "Jak fungují pojistky a jak je vyměnit", href: "/blog/jak-funguji-pojistky", read: "5 min" },
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
              <span>Prodloužení kabelu</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">⚡ Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak prodloužit elektrický kabel bezpečně</h1>
              <p className="article-lead">Krátký kabel od spotřebiče je frustrace každého domácího kutila. Existují tři způsoby jak to vyřešit — každý má jiné použití a jiné bezpečnostní nároky. Tady je který kdy použít.</p>
              <div className="article-meta-row"><span>Aktualizováno: 22. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/prodlouzit-elektricky-kabel" title="Jak prodloužit elektrický kabel bezpečně – postup 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 185" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="185" fill="#f4f8fc"/>
                {[
                  { x:20, icon:"🔌", name:"Prodlužovačka", ok:true, desc:"Dočasné použití\nBez zatížení pod kobercem\nMax. dle štítku", color:"#5a9e6f", tag:"✅ Nejbezpečnější" },
                  { x:210, icon:"🔗", name:"Kabelová spojka", ok:true, desc:"Pevné prodloužení\nIzolovaná svorkovnice\nPouze do krabice", color:"#4a90d9", tag:"✅ OK s krabicí" },
                  { x:400, icon:"⚡", name:"Nová zásuvka", ok:true, desc:"Nejlepší řešení\nTrvale v elektroinstalaci\nNutný elektrikář", color:"#9b6fd4", tag:"✅ Ideální řešení" },
                  { x:590, icon:"❌", name:"Páska + spojen. vodiče", ok:false, desc:"ZAKÁZÁNO!\nPožární nebezpečí\nNepevný kontakt", color:"#e07a5f", tag:"❌ Nikdy!" },
                ].map(({x, icon, name, desc, color, tag}) => (
                  <g key={x} transform={`translate(${x}, 15)`}>
                    <rect x="0" y="0" width="163" height="155" rx="8" fill="#fff" stroke={color} strokeWidth="1.5"/>
                    <rect x="0" y="0" width="163" height="5" rx="4" fill={color} opacity="0.5"/>
                    <text x="81" y="38" textAnchor="middle" fontSize="24">{icon}</text>
                    <text x="81" y="57" textAnchor="middle" fontSize="10" fill={color} fontWeight="700">{name}</text>
                    <line x1="12" y1="64" x2="151" y2="64" stroke={color} strokeWidth="0.5" opacity="0.4"/>
                    {desc.split('\n').map((line, i) => (
                      <text key={i} x="81" y={80+i*14} textAnchor="middle" fontSize="8" fill="#4a4a40">{line}</text>
                    ))}
                    <rect x="8" y="128" width="147" height="20" rx="4" fill={color} opacity="0.12"/>
                    <text x="81" y="141" textAnchor="middle" fontSize="9" fill={color} fontWeight="700">{tag}</text>
                  </g>
                ))}
                <rect y="168" width="760" height="17" fill="#e0eaf4" opacity="0.5"/>
                <text x="380" y="180" textAnchor="middle" fontSize="8" fill="#3a6a8a" fontWeight="600" letterSpacing="0.06em">⚡ NIKDY NESPOJUJ VODIČE PÁSKOU NEBO TWIST KONEKTORY BEZ KRABICE · POŽÁRNÍ NEBEZPEČÍ</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#prodluzovacka">Prodlužovačka – dočasné řešení</a></li>
                <li><a href="#spojka">Kabelová spojka – pevné prodloužení</a></li>
                <li><a href="#zasuvka">Nová zásuvka – nejlepší řešení</a></li>
                <li><a href="#nikdy">Co nikdy nedělat</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="prodluzovacka">
              <h2>Prodlužovačka – dočasné řešení</h2>
              <p>Prodlužovačka je nejrychlejší a nejbezpečnější řešení pro přechodné potřeby. Ale má svá pravidla.</p>
              <ul>
                <li><strong>Používej pouze certifikované prodlužovačky</strong> se značkou CE a přepěťovou ochranou pro cenné spotřebiče.</li>
                <li><strong>Nikdy nezakrývej prodlužovačku kobercem nebo nábytkem</strong> — kabel se přehřívá a může způsobit požár.</li>
                <li><strong>Nikdy nepřekračuj jmenovitý výkon</strong> uvedený na štítku prodlužovačky. Běžná prodlužovačka unese 2 500 W (10 A při 230 V).</li>
                <li><strong>Prodlužovačky do zásuvek nezapínej za sebou</strong> ("řetězení") — každé spojení zvyšuje odpor a přehřívání.</li>
                <li><strong>Pro venkovní použití</strong> vyber prodlužovačku s krytím min. IP44.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Prodlužovačka je dočasné řešení. Pokud ji používáš trvale na stejném místě, je čas přidat zásuvku do elektroinstalace.</div>
            </section>

            <section id="spojka">
              <h2>Kabelová spojka – pevné prodloužení</h2>
              <p>Kabelová spojka umožňuje pevně prodloužit kabel spotřebiče. Musí být provedena správně — v elektroinstalační krabici s víkem.</p>
              <ul>
                <li><strong>Co potřebuješ:</strong> Elektroinstalační krabice s víkem (20–50 Kč), svorkovnice WAGO nebo šroubové svorkovnice, kabel stejného průřezu jako původní.</li>
                <li><strong>Průřez kabelu musí odpovídat původnímu</strong> — pro běžné spotřebiče (do 2 500 W) stačí 1,5 mm², pro silnější (pračka, bojler) 2,5 mm².</li>
                <li><strong>Postup:</strong> Odstraň izolaci 8–10 mm od každého vodiče. Spoj L-L, N-N, PE-PE (hnědá-hnědá, modrá-modrá, zeleno-žlutá-zeleno-žlutá). Vlož do svorkovnice, ulož do krabice, zavři víko.</li>
                <li><strong>Spoj vždy v krabici</strong> — spoje mimo krabici jsou nebezpečné a v ČR zakázané.</li>
              </ul>
              <div className="article-tip"><strong>⚠️ Pozor:</strong> Prodloužení kabelu pevného spotřebiče (vestavná trouba, bojler) musí provést elektrikář. Prodloužení kabelu přenosného spotřebiče (lampa, nabíječka) zvládneš sám pokud dodržíš postup.</div>
            </section>

            <section id="zasuvka">
              <h2>Nová zásuvka – nejlepší trvalé řešení</h2>
              <p>Pokud ti zásuvka stále chybí na stejném místě, nejlepší řešení je přidat novou zásuvku do elektroinstalace. Trvale, bezpečně a bez kabelů křížem přes místnost.</p>
              <ul>
                <li><strong>Povrchová zásuvka (na lištu):</strong> Nejjednodušší — kabel vedeš v elektroinstalační liště po povrchu zdi. Bez bourání. Elektrikář nebo šikovný laik. Cena 500–2 000 Kč.</li>
                <li><strong>Zapuštěná zásuvka:</strong> Kabel vedeš v drážce ve zdi (sekat). Vyžaduje elektrikáře pro zapojení do rozvaděče. Výsledek je čistý bez viditelných lišt. Cena 2 000–5 000 Kč.</li>
              </ul>
              <p>Viz podrobný návod: <Link href="/blog/pridat-zasuvku" style={{color:"#5a9e6f",fontWeight:600}}>Jak přidat zásuvku do místnosti →</Link></p>
            </section>

            <section id="nikdy">
              <h2>Co nikdy nedělat</h2>
              <ul>
                <li><strong>Nikdy nespojuj vodiče izolační páskou:</strong> Páska časem vysychá a odpadá. Holé vodiče = zkrat = požár.</li>
                <li><strong>Nikdy twist konektory bez krabice:</strong> Twist konektory jsou určeny pro dočasné spoje v krabici, ne jako trvalé řešení volně visící v prostoru.</li>
                <li><strong>Nikdy prodlužovačku pod kobercem:</strong> Koberec kabel tepelně izoluje, kabel se přehřívá a může se vznítit.</li>
                <li><strong>Nikdy nepřipojuj více spotřebičů než je povoleno:</strong> Přetížená zásuvka nebo prodlužovačka = přehřívání = požár.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Jaký průřez kabelu potřebuji na prodloužení?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Průřez prodlužovacího kabelu musí být stejný nebo větší než průřez původního kabelu. Pro běžné spotřebiče do 2 500 W (svítidla, televize, počítač): 1,5 mm². Pro silnější spotřebiče (pračka, myčka, trouba): 2,5 mm². Pro elektrokotle a klimatizace: 4 mm² a více — nutný elektrikář.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Smím sám prodloužit kabel od svítidla?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ano — prodloužení kabelu přenosného svítidla (stolní lampa, stojací lampa) zvládneš sám v kabelové spojovací krabici. Vždy vypoj svítidlo ze zásuvky před zahájením práce. Prodloužení pevně zapojeného svítidla (svítidlo připojené přímo do elektroinstalace) musí provést elektrikář.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak dlouhá může být prodlužovačka?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Délka prodlužovačky závisí na průřezu kabelu a zatížení. Standardní prodlužovačka (1,5 mm², 10 A): do 10 m bez výrazné ztráty napětí. Delší prodlužovačky pro silné spotřebiče potřebují silnější kabel (2,5 mm²). Při delším kabelu vždy bubnovou prodlužovačku zcela odroluj — navinutý kabel se přehřívá.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/prodlouzit-elektricky-kabel" title="Jak prodloužit elektrický kabel bezpečně – postup 2026" />

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
                <li><a href="#prodluzovacka">Prodlužovačka</a></li>
                <li><a href="#spojka">Kabelová spojka</a></li>
                <li><a href="#zasuvka">Nová zásuvka</a></li>
                <li><a href="#nikdy">Co nikdy nedělat</a></li>
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
        .article-header{margin-bottom:32px}
        .article-meta-top{display:flex;align-items:center;gap:12px;margin-bottom:16px}
        .article-cat-pill{display:inline-flex;align-items:center;height:24px;padding:0 12px;border-radius:999px;border:1px solid var(--border);background:var(--surface);font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);text-decoration:none;transition:background 120ms}
        .article-cat-pill:hover{background:#e8e7e2;color:var(--text)}
        .article-read-time{font-size:12px;color:var(--muted);font-weight:500}
        .article-h1{font-family:var(--font-serif);font-size:clamp(26px,3.5vw,40px);line-height:1.1;font-weight:400;letter-spacing:-.01em;margin-bottom:16px}
        .article-lead{font-size:18px;line-height:1.65;color:var(--muted);font-weight:300;margin-bottom:14px}
        .article-meta-row{display:flex;gap:8px;font-size:12px;color:var(--muted);font-weight:500}
        .hero-illustration{margin:28px 0 36px;border-radius:12px;overflow:hidden;border:1px solid var(--border)}
        .hero-svg{width:100%;height:auto;display:block}
        .toc{background:var(--surface);border-radius:10px;padding:20px 24px;margin-bottom:40px}
        .toc-label{font-size:11px;font-weight:700;letter-spacing:.10em;text-transform:uppercase;color:var(--muted);margin-bottom:12px}
        .toc-list{padding-left:18px;display:flex;flex-direction:column;gap:6px}
        .toc-list li a{font-size:14px;color:var(--muted);text-decoration:none;font-weight:400;transition:color 120ms}
        .toc-list li a:hover{color:var(--text)}
        .article-body section{margin-bottom:48px}
        .article-body h2{font-family:var(--font-serif);font-size:clamp(20px,2.5vw,26px);font-weight:400;line-height:1.2;margin-bottom:16px;border-top:1px solid var(--border);padding-top:24px;margin-top:8px}
        .article-body p{font-size:16px;line-height:1.75;color:#2a2a28;font-weight:300;margin-bottom:14px}
        .article-body ul{padding-left:22px;margin-bottom:16px;display:flex;flex-direction:column;gap:8px}
        .article-body li{font-size:15px;line-height:1.6;color:#2a2a28;font-weight:300}
        .article-body strong{font-weight:600;color:var(--text)}
        .article-tip{background:#fff8e8;border-left:3px solid #f59e0b;border-radius:0 8px 8px 0;padding:14px 18px;font-size:14px;line-height:1.6;color:#78716c;margin:20px 0}
        .faq-list{display:flex;flex-direction:column;gap:8px;margin-top:16px}
        .faq-item{border:1px solid var(--border);border-radius:10px;overflow:hidden}
        .faq-summary{display:flex;justify-content:space-between;align-items:center;padding:14px 18px;cursor:pointer;font-size:15px;font-weight:500;color:var(--text);background:var(--surface);list-style:none;gap:12px}
        .faq-summary:hover{background:#e8e7e2}
        .faq-icon{flex-shrink:0;color:var(--muted);transition:transform 200ms;font-size:14px}
        details[open] .faq-icon{transform:rotate(180deg)}
        .faq-body{padding:14px 18px;font-size:14px;line-height:1.7;color:#4a4a48;font-weight:300;border-top:1px solid var(--border);background:#fff}
        .related-section{margin-top:56px}
        .related-section h2{font-family:var(--font-serif);font-size:22px;font-weight:400;margin-bottom:20px;padding-top:24px;border-top:1px solid var(--border)}
        .related-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
        .article-sidebar{position:sticky;top:80px;display:flex;flex-direction:column;gap:16px}
        .sidebar-widget{background:#fff;border:1px solid var(--border);border-radius:12px;padding:20px}
        .sidebar-widget-title{font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-bottom:14px}
        .sidebar-toc{list-style:none;display:flex;flex-direction:column;gap:8px}
        .sidebar-toc li a{font-size:13px;color:var(--muted);text-decoration:none;font-weight:400;transition:color 120ms;line-height:1.4;display:block}
        .sidebar-toc li a:hover{color:var(--text)}
        .sidebar-cat-link{display:flex;justify-content:space-between;align-items:center;font-size:14px;font-weight:500;color:var(--text);text-decoration:none;padding:8px 0;border-bottom:1px solid var(--border);transition:color 120ms}
        .sidebar-cat-link:hover{color:var(--muted)}
        .sidebar-cat-link span{font-size:12px;color:var(--muted)}
        @media(max-width:960px){.article-layout{grid-template-columns:1fr;gap:0}.article-sidebar{position:static;margin-top:40px}.related-grid{grid-template-columns:1fr}}
      `}</style>
    </>
  );
}
