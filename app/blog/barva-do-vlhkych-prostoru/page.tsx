import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jakou barvu do vlhkých prostor – koupelna, kuchyň, sklep 2026",
  description: "Výběr barvy do koupelny, kuchyně nebo sklepa. Silikonová, akrylátová nebo speciální koupelnová barva? Co znamená třída omyvatelnosti a jak zabránit plísni.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/barva-do-vlhkych-prostoru" },
  openGraph: { title: "Jakou barvu do vlhkých prostor 2026", description: "Koupelna, kuchyň, sklep – jak vybrat správnou barvu odolnou vlhkosti a plísni.", url: "https://www.domovniguru.cz/blog/barva-do-vlhkych-prostoru", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-16T08:00:00Z", modifiedTime: "2026-04-16T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jakou barvu do vlhkých prostor 2026", description: "Koupelna, kuchyň, sklep – správná barva odolná vlhkosti a plísni." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/barva-do-vlhkych-prostoru#article",
    "headline": "Jakou barvu do vlhkých prostor – koupelna, kuchyň, sklep 2026",
    "datePublished": "2026-04-16T08:00:00Z",
    "dateModified": "2026-04-16T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["barva do koupelny", "barva do vlhkých prostor", "koupelnová barva výběr", "barva odolná vlhkosti", "barva proti plísni", "omyvatelná barva kuchyň"]
  }]
};

const RELATED = [
  { title: "Jak malovat zeď – kompletní průvodce", href: "/blog/jak-malovat-zed", read: "5 min" },
  { title: "Jak se zbavit plísně na zdi natrvalo", href: "/blog/jak-odstranit-plisen-na-zdi", read: "10 min" },
  { title: "Jak se zbavit vlhkosti v bytě", href: "/blog/zbavit-se-vlhkosti-v-byte", read: "7 min" },
  { title: "Tapety vs. barva na zeď", href: "/blog/tapety-vs-barva", read: "6 min" },
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
              <span>Barva do vlhkých prostor</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování & barvy</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jakou barvu do vlhkých prostor – koupelna, kuchyň, sklep</h1>
              <p className="article-lead">Běžná malířská barva v koupelně nebo kuchyni vydrží pár měsíců než začne plesnivět nebo se loupit. Správná barva pro vlhké prostory vydrží roky — tady je jak ji vybrat.</p>
              <div className="article-meta-row"><span>Aktualizováno: 16. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/barva-do-vlhkych-prostoru" title="Jakou barvu do vlhkých prostor – koupelna, kuchyň, sklep 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 190" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="190" fill="#f0f4f8"/>

                {/* Třídy barvy */}
                <text x="380" y="22" textAnchor="middle" fontSize="10" fill="#4a6080" fontWeight="700" letterSpacing="0.04em">TŘÍDY OMYVATELNOSTI BAREV (ČSN EN 13300)</text>

                {[
                  { x:20, cls:"Třída 1", label:"Velmi omyvatelná", desc:"Odolává silnému drhnutí", icon:"💪", use:"Koupelna, kuchyň", color:"#3a7e4f", bg:"#f0fdf4" },
                  { x:175, cls:"Třída 2", label:"Omyvatelná", desc:"Odolává mírné abrazi", icon:"🧽", use:"Chodba, dětský pokoj", color:"#4a90d9", bg:"#f0f8ff" },
                  { x:330, cls:"Třída 3", label:"Otěruvzdorná", desc:"Lze setřít vlhkým hadrem", icon:"💧", use:"Obývák, ložnice", color:"#9b6fd4", bg:"#faf0ff" },
                  { x:485, cls:"Třída 4–5", label:"Méně odolná", desc:"Jen lehké otření", icon:"🪶", use:"Strop, sklady", color:"#f59e0b", bg:"#fffbf0" },
                  { x:620, cls:"Speciální", label:"Fungicidní barva", desc:"Proti plísním a vlhkosti", icon:"🛡️", use:"Sklep, koupelna", color:"#e07a5f", bg:"#fff8f5" },
                ].map(({x, cls, label, desc, icon, use, color, bg}) => (
                  <g key={x} transform={`translate(${x}, 32)`}>
                    <rect x="0" y="0" width="128" height="148" rx="8" fill={bg} stroke={color} strokeWidth="1.2"/>
                    <text x="64" y="22" textAnchor="middle" fontSize="9.5" fill={color} fontWeight="700">{cls}</text>
                    <text x="64" y="48" textAnchor="middle" fontSize="20">{icon}</text>
                    <text x="64" y="70" textAnchor="middle" fontSize="9" fill={color} fontWeight="600">{label}</text>
                    <line x1="10" y1="77" x2="118" y2="77" stroke={color} strokeWidth="0.5" opacity="0.4"/>
                    <text x="64" y="92" textAnchor="middle" fontSize="8" fill="#4a4a40">{desc}</text>
                    <rect x="8" y="112" width="112" height="26" rx="4" fill={color} opacity="0.1"/>
                    <text x="64" y="122" textAnchor="middle" fontSize="7.5" fill={color} fontWeight="600">Vhodné pro:</text>
                    <text x="64" y="133" textAnchor="middle" fontSize="7.5" fill={color}>{use}</text>
                  </g>
                ))}

                <rect y="173" width="760" height="17" fill="#e0eaf4" opacity="0.5"/>
                <text x="380" y="185" textAnchor="middle" fontSize="8" fill="#3a6080" fontWeight="600" letterSpacing="0.06em">🎨 KOUPELNA = TŘÍDA 1 + FUNGICIDNÍ PŘÍSADA · KUCHYŇ = MIN. TŘÍDA 1–2</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#tridy">Třídy omyvatelnosti – co znamenají</a></li>
                <li><a href="#koupelna">Barva do koupelny</a></li>
                <li><a href="#kuchyn">Barva do kuchyně</a></li>
                <li><a href="#sklep">Barva do sklepa a vlhkých prostor</a></li>
                <li><a href="#typy">Typy barev pro vlhké prostory</a></li>
                <li><a href="#postup">Příprava povrchu a postup nanášení</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="tridy">
              <h2>Třídy omyvatelnosti – co znamenají</h2>
              <p>Každá malířská barva má třídu omyvatelnosti podle normy ČSN EN 13300. Tato třída určuje jak moc je povrch odolný vůči vlhkosti, čistění a otěru.</p>
              <ul>
                <li><strong>Třída 1 (velmi omyvatelná):</strong> Odolá silnému drhnutí a opakovanému čistění. Povinná pro koupelnu a kuchyň.</li>
                <li><strong>Třída 2 (omyvatelná):</strong> Odolá mírnému drhnutí. Vhodná pro chodbu, dětský pokoj nebo WC.</li>
                <li><strong>Třída 3 (otěruvzdorná):</strong> Lze setřít vlhkým hadrem. Standardní pro obývák a ložnici.</li>
                <li><strong>Třídy 4–5:</strong> Minimální odolnost — pouze pro strofy a nekritická místa.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Třídu omyvatelnosti najdeš na plechovce nebo v technickém listu barvy. Výrobci ji uvádějí různě — hledej výraz "omyvatelná", "velmi omyvatelná" nebo konkrétní třídu 1–5.</div>
            </section>

            <section id="koupelna">
              <h2>Barva do koupelny</h2>
              <p>Koupelna je nejnáročnější prostředí pro barvu — vysoká vlhkost, teplotní výkyvy a kondenzace páry. Běžná barva zde nevydrží déle než 1–2 roky.</p>
              <ul>
                <li><strong>Speciální koupelnová barva:</strong> Obsahuje fungicidní přísadu (biocid) která zabraňuje růstu plísní. Třída omyvatelnosti 1. Značky: Primalex Koupelna, HET Klasik Koupelna, Dulux Koupelna. Cena 200–400 Kč/litr.</li>
                <li><strong>Silikonová barva:</strong> Difuzní — propouští vodní páru ven ale nepouští vlhkost dovnitř. Ideální pro koupelny s kondenzací. Výrazně odolnější než akrylátová.</li>
                <li><strong>Lesk nebo mat?</strong> Pololesk nebo saténový lesk je snazší na čistění a odolnější než matný povrch. V koupelně volte minimálně pololesk.</li>
                <li><strong>Co nepoužívat:</strong> Standardní malířská barva (třída 3–5), tapety (bobtnají od vlhkosti), starý lihový nátěr.</li>
              </ul>
              <div className="article-tip"><strong>⚠️ Pozor:</strong> Žádná barva nevydrží v koupelně bez správné ventilace. Větrání po sprchování je základ — bez odvodu vlhkosti se bude plesnivět i ta nejlepší barva.</div>
            </section>

            <section id="kuchyn">
              <h2>Barva do kuchyně</h2>
              <p>Kuchyň kombinuje vlhkost od vaření s mastnými výpary — povrch musí odolat obojímu a pravidelném čistění.</p>
              <ul>
                <li><strong>Min. třída 1 (velmi omyvatelná):</strong> Kuchyňská stěna se čistí mnohokrát za rok — slabší barva se rychle otře.</li>
                <li><strong>Pololesk nebo lesklý povrch:</strong> Matný povrch saje mastnotu a špatně se čistí. V kuchyni volte pololesk nebo lesklý nátěr.</li>
                <li><strong>Kuchyňská barva nebo omyvatelná disperzní:</strong> Primalex Fortissimo, HET Thermo, Dulux Omyvatelná — všechny vhodné pro kuchyň.</li>
                <li><strong>Oblast nad sporákem a u dřezu:</strong> Nejintenzivněji namáhané plochy — zvažte obklady místo barvy pro snadnější údržbu.</li>
              </ul>
            </section>

            <section id="sklep">
              <h2>Barva do sklepa a vlhkých prostor</h2>
              <p>Sklep má specifické problémy — zemní vlhkost, kondenzace a případné zatékání. Standardní barva zde nestačí.</p>
              <ul>
                <li><strong>Hydroizolační nátěr:</strong> Pro stěny které propouštějí zemní vlhkost — speciální silikonová nebo epoxidová hydroizolace. Neřeší aktivní zatékání ale zastaví kapilárně vzlínající vlhkost.</li>
                <li><strong>Fungicidní barva:</strong> Obsahuje biocid proti plísním — nutnost pro každý sklep. Primalex Protec, Baumit Klimacolor, HET Klasik Protec.</li>
                <li><strong>Sanační omítka:</strong> Pro vážnější problémy s vlhkostí — před malováním aplikuj sanační omítku která akumuluje soli a zastaví vzlínání.</li>
              </ul>
            </section>

            <section id="typy">
              <h2>Typy barev pro vlhké prostory – srovnání</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ barvy</th><th>Odolnost vlhkosti</th><th>Fungicid</th><th>Cena/litr</th><th>Vhodné pro</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Koupelnová (speciální)</strong></td><td>⭐⭐⭐⭐⭐</td><td>✅</td><td>200–400 Kč</td><td>Koupelna, WC</td></tr>
                    <tr><td><strong>Silikonová</strong></td><td>⭐⭐⭐⭐⭐</td><td>Záleží na výrobci</td><td>300–600 Kč</td><td>Koupelna, fasáda</td></tr>
                    <tr><td><strong>Omyvatelná akrylátová (třída 1)</strong></td><td>⭐⭐⭐⭐</td><td>Záleží</td><td>150–300 Kč</td><td>Kuchyň, chodba</td></tr>
                    <tr><td><strong>Fungicidní / protiplísňová</strong></td><td>⭐⭐⭐⭐</td><td>✅</td><td>200–500 Kč</td><td>Sklep, vlhké zdi</td></tr>
                    <tr><td><strong>Standardní disperzní</strong></td><td>⭐⭐</td><td>❌</td><td>80–150 Kč</td><td>Obývák, ložnice</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="postup">
              <h2>Příprava povrchu a postup nanášení</h2>
              <p>I nejlepší barva selže na špatně připraveném povrchu — zvlášť ve vlhkých prostorách.</p>
              <ul>
                <li><strong>Odstraň plíseň:</strong> Před malováním ošetři plísňové skvrny fungicidním přípravkem. Barva přes plíseň plíseň nezabije — jen ji zakryje na pár měsíců. Viz <Link href="/blog/jak-odstranit-plisen-na-zdi" style={{color:"#5a9e6f",fontWeight:600}}>Jak se zbavit plísně →</Link></li>
                <li><strong>Penetrace:</strong> Na savý nebo nový povrch aplikuj penetraci kompatibilní s koupelnovou barvou. Penetrace zlepší přilnavost a sníží spotřebu barvy.</li>
                <li><strong>2 vrstvy minimum:</strong> Ve vlhkých prostorách nikdy nestačí jedna vrstva. Dvě tenké vrstvy jsou lepší než jedna silná.</li>
                <li><strong>Schnutí:</strong> Koupelnová barva potřebuje min. 24–48 hodin na schnutí a vytvrzení před první vlhkostí. Nekupuj se po natírání hned.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Mohu použít normální barvu v koupelně?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Technicky ano ale nevydrží — začne se loupit, žloutnout nebo plesnivět do 1–2 let. Speciální koupelnová barva stojí o 50–100 Kč/litr více ale vydrží 5–8 let. Investice do správné barvy se vrátí vyhnutím se nutnosti předčasně přemalovat.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak poznat barvu odolnou plísním?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Na plechovce nebo v technickém listu hledej výrazy: "fungicidní", "protiplísňová", "biocidní přísada" nebo "antimikrobiální". Výrobci jako Primalex, HET, Dulux mají speciální řady pro vlhké prostory — obvykle označeny "Koupelna" nebo "Protec" v názvu.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Musím novou barvu nanášet na celou koupelnu nebo jen na poškozené části?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Pro nejlepší výsledek celou koupelnu — záplata bude patrná i pod barvou pokud se barvy mírně liší. Pokud opravuješ malou plochu, snaž se sehnat stejnou barvu ze stejné šarže nebo proveď barevnou korekci. Lokální oprava je přijatelná pro drobné poškození, ne pro plíseň.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/barva-do-vlhkych-prostoru" title="Jakou barvu do vlhkých prostor – koupelna, kuchyň, sklep 2026" />

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
                <li><a href="#tridy">Třídy omyvatelnosti</a></li>
                <li><a href="#koupelna">Koupelna</a></li>
                <li><a href="#kuchyn">Kuchyně</a></li>
                <li><a href="#sklep">Sklep</a></li>
                <li><a href="#typy">Typy barev – srovnání</a></li>
                <li><a href="#postup">Příprava a nanášení</a></li>
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
        .article-table-wrap{overflow-x:auto;margin:16px 0 24px}
        .article-table{width:100%;border-collapse:collapse;font-size:14px;line-height:1.5}
        .article-table th{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);padding:10px 14px;text-align:left;border-bottom:2px solid var(--border);background:var(--surface)}
        .article-table td{padding:10px 14px;border-bottom:1px solid var(--border);vertical-align:top;color:#2a2a28;font-weight:300}
        .article-table tr:last-child td{border-bottom:none}
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
