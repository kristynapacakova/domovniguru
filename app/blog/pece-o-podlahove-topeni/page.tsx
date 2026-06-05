import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Péče o podlahové topení – teplota, provoz a údržba 2026",
  description: "Jak správně provozovat a pečovat o podlahové topení. Optimální teplota, jak rychle reaguje, čištění podlah nad topením a jak ušetřit na provozu.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/pece-o-podlahove-topeni" },
  openGraph: { title: "Péče o podlahové topení 2026", description: "Optimální teplota, provoz a údržba podlahového topení – teplovodní i elektrické.", url: "https://www.domovniguru.cz/blog/pece-o-podlahove-topeni", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-05-01T08:00:00Z", modifiedTime: "2026-05-01T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=P%C3%A9%C4%8De%20o%20podlahov%C3%A9%20topen%C3%AD%20%E2%80%93%20teplota%2C%20provoz%20a%20%C3%BAdr%C5%BEba%202026&cat=blog", width: 1200, height: 630, alt: "Péče o podlahové topení – teplota, provoz a údržba 2026" }] },
  twitter: { card: "summary_large_image", title: "Péče o podlahové topení 2026", description: "Teplota, provoz a údržba podlahového topení krok za krokem." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/pece-o-podlahove-topeni#article",
    "headline": "Péče o podlahové topení – teplota, provoz a údržba 2026",
    "datePublished": "2026-05-01T08:00:00Z",
    "dateModified": "2026-06-04T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["péče o podlahové topení", "podlahové topení teplota", "podlahové topení provoz", "teplovodní podlahové topení údržba", "jak nastavit podlahové topení"]
  }, {
    "@type": "FAQPage",
    "@id": "https://www.domovniguru.cz/blog/pece-o-podlahove-topeni#faq",
    "mainEntity": [
      { "@type": "Question", "name": "Proč podlahové topení nehřeje rovnoměrně?", "acceptedAnswer": { "@type": "Answer", "text": "Nejčastější příčiny: vzduch v systému (bublání, studená místa), nesprávně seřízené průtoky na rozdělovači (vyvažování okruhů), ucpaný filtr, nebo koberec/nábytek nad konkrétním okruhem. Zavolej technika — vyvážení podlahových okruhů je odborná práce." } },
      { "@type": "Question", "name": "Lze na podlahové topení položit koberec?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, ale koberec výrazně snižuje výkon topení (funguje jako izolátor) a způsobuje přehřívání hadnic. Pokud musíš — maximální tepelný odpor koberce 0,15 m²K/W (na etiketě koberce). Tenké koberce s nízkou hustotou jsou méně problematické než husté tlusté koberce." } },
      { "@type": "Question", "name": "Jak dlouho vydrží podlahové topení?", "acceptedAnswer": { "@type": "Answer", "text": "Teplovodní plastové hadnice (PEX, PE-RT) mají životnost 50+ let při správném provozování. Elektrické topné kabely 20–30 let. Nejčastěji se vymění termostat (10–15 let) nebo čerpadlo/rozdělovač. Celý systém by měl přežít několik rekonstrukcí podlah — hadnice jsou zabetonovány a nenahrazují se." } }
    ]
  }, {
    "@type": "HowTo",
    "@id": "https://www.domovniguru.cz/blog/pece-o-podlahove-topeni#howto",
    "name": "Péče o podlahové topení – teplota, provoz a údržba 2026",
    "description": "Jak správně provozovat a pečovat o podlahové topení. Optimální teplota, jak rychle reaguje, čištění podlah nad topením a jak ušetřit na provozu.",
    "step": [
      { "@type": "HowToStep", "name": "Správná teplota podlahového topení", "text": "Teplota podlahového topení se nastavuje ve dvou hodnotách: teplota teplonosné vody (u teplovodního) a teplota povrchu podlahy." },
      { "@type": "HowToStep", "name": "Jak správně provozovat podlahové topení", "text": "Jak správně provozovat podlahové topení" },
      { "@type": "HowToStep", "name": "Péče o podlahy nad topením", "text": "Péče o podlahy nad topením" },
      { "@type": "HowToStep", "name": "Údržba teplovodního podlahového topení", "text": "Údržba teplovodního podlahového topení" }
    ]
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://www.domovniguru.cz/blog/pece-o-podlahove-topeni#breadcrumb",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" },
      { "@type": "ListItem", "position": 3, "name": "Sezónní údržba", "item": "https://www.domovniguru.cz/blog/kategorie/sezonni-udrzba" },
      { "@type": "ListItem", "position": 4, "name": "Péče o podlahové topení – teplota, provoz a údržba 2026", "item": "https://www.domovniguru.cz/blog/pece-o-podlahove-topeni" }
    ]
  }
  ]
};

const RELATED = [
  { title: "Elektrické podlahové topení", href: "/blog/elektricke-podlahove-topeni", read: "7 min" },
  { title: "Jak ušetřit na vytápění", href: "/blog/usetrit-na-vytapeni", read: "7 min" },
  { title: "Jak odvzdušnit radiátory", href: "/blog/jak-odvzdusnit-radiatory", read: "3 min" },
  { title: "Jak zkontrolovat kotel před zimou", href: "/blog/zkontrolovat-kotel-pred-zimou", read: "6 min" },
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
              <Link href="/blog/kategorie/sezonni-udrzba">Sezónní údržba</Link><span className="breadcrumb-sep">/</span>
              <span>Péče o podlahové topení</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">🍂 Sezónní údržba</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Péče o podlahové topení – teplota, provoz a údržba</h1>
              <p className="article-lead">Podlahové topení je nejkomfortnější způsob vytápění — ale jen pokud je správně nastavené a udržované. Špatné nastavení zvyšuje náklady a zkracuje životnost systému.</p>
              <div className="article-meta-row"><span>Aktualizováno: 4. června 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/pece-o-podlahove-topeni" title="Péče o podlahové topení – teplota, provoz a údržba 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 170" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="170" fill="#f4f0fc"/>
                <text x="380" y="22" textAnchor="middle" fontSize="10" fill="#6a4a8a" fontWeight="700" letterSpacing="0.04em">OPTIMÁLNÍ TEPLOTA PODLAHY DLE MÍSTNOSTI A PODLAHOVINY</text>
                {[
                  { room:"Obývák\n(dlaždice)", temp:"27–29 °C", note:"Max. teplota podlahy\npro pohodlný pohyb", color:"#9b6fd4" },
                  { room:"Ložnice\n(dlaždice)", temp:"24–26 °C", note:"Nižší teplota\nlepší spánek", color:"#4a90d9" },
                  { room:"Koupelna\n(dlaždice)", temp:"27–29 °C", note:"Chladné ráno\nvyžaduje vyšší teplotu", color:"#5a9e6f" },
                  { room:"Plovoucí\npodlaha", temp:"Max. 27 °C", note:"Laminát praská\nnad 27 °C", color:"#f59e0b" },
                  { room:"Vinylová\npodlaha", temp:"Max. 27 °C", note:"Vinyl se deformuje\nnad 27–29 °C", color:"#e07040" },
                ].map(({room, temp, note, color}, i) => (
                  <g key={i} transform={`translate(${20+i*148}, 28)`}>
                    <rect x="0" y="0" width="138" height="128" rx="8" fill="#fff" stroke={color} strokeWidth="1.2"/>
                    {room.split('\n').map((r,j) => <text key={j} x="69" y={18+j*13} textAnchor="middle" fontSize="9" fill={color} fontWeight="700">{r}</text>)}
                    <line x1="8" y1="44" x2="130" y2="44" stroke={color} strokeWidth="0.5" opacity="0.4"/>
                    <text x="69" y="72" textAnchor="middle" fontSize="22" fill={color} fontWeight="300">{temp.split(' ')[0]}</text>
                    {temp.split(' ').slice(1).length > 0 && <text x="69" y="86" textAnchor="middle" fontSize="9" fill={color}>{temp.split(' ').slice(1).join(' ')}</text>}
                    <rect x="6" y="98" width="126" height="24" rx="4" fill={color} opacity="0.08"/>
                    {note.split('\n').map((n,j) => <text key={j} x="69" y={110+j*11} textAnchor="middle" fontSize="7.5" fill={color}>{n}</text>)}
                  </g>
                ))}
                <rect y="153" width="760" height="17" fill="#e8e0f4" opacity="0.5"/>
                <text x="380" y="165" textAnchor="middle" fontSize="8" fill="#6a4a8a" fontWeight="600" letterSpacing="0.06em">🌡️ MAX. PODLAHA 27–29 °C · PLOVOUCÍ A VINYL MAX. 27 °C · PROGRAMOVATELNÝ TERMOSTAT UŠETŘÍ 30 %</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#teplota">Správná teplota podlahového topení</a></li>
                <li><a href="#provoz">Jak správně provozovat</a></li>
                <li><a href="#podlahy">Péče o podlahy nad topením</a></li>
                <li><a href="#teplovodní">Údržba teplovodního podlahového topení</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="teplota">
              <h2>Správná teplota podlahového topení</h2>
              <p>Teplota podlahového topení se nastavuje ve dvou hodnotách: teplota teplonosné vody (u teplovodního) a teplota povrchu podlahy. Výkon a náklady svého systému snadno spočítáš v naší <Link href="/kalkulacky/podlahove-topeni" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačce podlahového topení</Link>.</p>
              <ul>
                <li><strong>Teplota povrchu podlahy:</strong> Max. 29 °C pro obytné místnosti. Max. 27 °C pro plovoucí a vinylové podlahy. Příliš horká podlaha je nepohodlná pro chůzi naboso a poškozuje podlahoviny.</li>
                <li><strong>Teplota vody (teplovodní):</strong> Standardně 35–45 °C (nízkoteplotní systém). Klasické kotle nastavené na 70–80 °C je třeba doplnit směšovacím ventilem pro snížení teploty na podlahu.</li>
                <li><strong>Teplota vzduchu v místnosti:</strong> Podlahové topení dosahuje komfortu při nižší teplotě vzduchu (19–20 °C místo 21–22 °C u radiátorů) — tělo vnímá sálání z podlahy jako teplejší.</li>
              </ul>
            </section>

            <section id="provoz">
              <h2>Jak správně provozovat podlahové topení</h2>
              <ul>
                <li><strong>Pomalá reakce = nepřerušuj zbytečně:</strong> Teplovodní podlahové topení reaguje pomalu — 2–6 hodin než dosáhne požadované teploty. Nešetři vypínáním na noc a ráno znovu zapínáním — spotřebuješ víc energie než plynulým provozem na nižší teplotu.</li>
                <li><strong>Programovatelný termostat:</strong> Nastav nižší teplotu v době nepřítomnosti (16–17 °C) a vyšší 1–2 hodiny před příchodem domů. Ušetříš 20–30 % nákladů oproti ručnímu ovládání.</li>
                <li><strong>Nekrátej topení kobercemi:</strong> Husté koberce nad podlahovým topením snižují výkon systému a zvyšují teplotu hadnic/kabelů — zkracuje to životnost. Pokud musíš mít koberec, volí tenký (do 15 mm) s nízkou tepelnou odolností.</li>
                <li><strong>Nábytek:</strong> Nábytek přímo na podlahovém topení (bez nožiček) způsobuje místní přehřívání. Vždy ponechej min. 5 cm vzduch pod nábytkem nebo použij podložky.</li>
              </ul>
            </section>

            <section id="podlahy">
              <h2>Péče o podlahy nad topením</h2>
              <ul>
                <li><strong>Dlaždice:</strong> Nejodolnější pro podlahové topení. Čisti normálně — vlhkým mopem nebo párou. Pozor na příliš agresivní čisticí prostředky na spáry.</li>
                <li><strong>Plovoucí laminátová podlaha:</strong> Vlhké čistění jen minimálně — přebytečná voda poškodí spoje. Používej vyžimávací mop. Pravidelně provětrávej místnost — suchý vzduch způsobuje smrštění laminátů.</li>
                <li><strong>Vinylová podlaha:</strong> Nejjednodušší čistění — mop nebo párovač. Nevyžaduje žádné speciální ošetření.</li>
                <li><strong>Dřevěná podlaha nad topením:</strong> Nejnáchylnější — dřevo reaguje na teplotu a vlhkost. Udržuj vlhkost vzduchu 40–60 % (humidifikátor v zimě). Pravidelně ošetřuj olejem nebo voskem.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Na začátku topné sezóny zvyšuj teplotu podlahového topení postupně — po 1–2 °C denně. Náhlé zapnutí na plný výkon po letní pauze způsobuje roztažení a praskání materiálů.</div>
            </section>

            <section id="teplovodní">
              <h2>Údržba teplovodního podlahového topení</h2>
              <ul>
                <li><strong>Odvzdušnění:</strong> Vzduch v teplovodním systému způsobuje hluk (bublání) a nerovnoměrné vytápění. Odvzdušnění provádí servisní technik jednou ročně nebo při prvních příznacích.</li>
                <li><strong>Tlak v systému:</strong> Tlak teplovodního vytápění musí být 1,5–2,5 bar (viz tlakoměr na kotli). Pokud tlak klesá, soustava ztrácí vodu — zavolat technika.</li>
                <li><strong>Filtr (magnetický nebo síťový):</strong> Filtr v soustavě zachytává nečistoty a magnetické částice. Čistit 1× ročně při výroční servisní prohlídce kotle.</li>
                <li><strong>Servis kotle:</strong> Roční servisní prohlídka kotle zahrnuje i kontrolu podlahového okruhu. Nezanedbávej ji — zjistí případné úniky nebo ucpání před topnou sezónou.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Proč podlahové topení nehřeje rovnoměrně?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Nejčastější příčiny: vzduch v systému (bublání, studená místa), nesprávně seřízené průtoky na rozdělovači (vyvažování okruhů), ucpaný filtr, nebo koberec/nábytek nad konkrétním okruhem. Zavolej technika — vyvážení podlahových okruhů je odborná práce.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Lze na podlahové topení položit koberec?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ano, ale koberec výrazně snižuje výkon topení (funguje jako izolátor) a způsobuje přehřívání hadnic. Pokud musíš — maximální tepelný odpor koberce 0,15 m²K/W (na etiketě koberce). Tenké koberce s nízkou hustotou jsou méně problematické než husté tlusté koberce.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak dlouho vydrží podlahové topení?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Teplovodní plastové hadnice (PEX, PE-RT) mají životnost 50+ let při správném provozování. Elektrické topné kabely 20–30 let. Nejčastěji se vymění termostat (10–15 let) nebo čerpadlo/rozdělovač. Celý systém by měl přežít několik rekonstrukcí podlah — hadnice jsou zabetonovány a nenahrazují se.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/pece-o-podlahove-topeni" title="Péče o podlahové topení – teplota, provoz a údržba 2026" />

            <section className="related-section">
              <h2>Související články</h2>
              <div className="related-grid">
                {RELATED.map((r) => (
                  <Link key={r.href} href={r.href} className="card">
                    <div className="card-eyebrow-row"><span>Sezónní údržba</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#teplota">Správná teplota</a></li>
                <li><a href="#provoz">Jak provozovat</a></li>
                <li><a href="#podlahy">Péče o podlahy</a></li>
                <li><a href="#teplovodní">Teplovodní topení</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/sezonni-udrzba" className="sidebar-cat-link">🍂 Sezónní údržba<span>20 článků →</span></Link>
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
