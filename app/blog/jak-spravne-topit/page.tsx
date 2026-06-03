import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak správně topit – teploty, větrání a úspora energie 2026",
  description: "Jak správně topit aby bylo teplo, zdravý vzduch a nízké náklady. Optimální teploty v místnostech, jak větrat při topení a nejčastější chyby při vytápění.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-spravne-topit" },
  openGraph: { title: "Jak správně topit – teploty a úspora 2026", description: "Optimální teploty, větrání při topení a jak ušetřit na vytápění.", url: "https://www.domovniguru.cz/blog/jak-spravne-topit", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-05-01T08:00:00Z", modifiedTime: "2026-05-01T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20spr%C3%A1vn%C4%9B%20topit%20%E2%80%93%20teploty%2C%20v%C4%9Btr%C3%A1n%C3%AD%20a%20%C3%BAspora%20energie%202026", width: 1200, height: 630, alt: "Jak správně topit – teploty, větrání a úspora energie 2026" }] },
  twitter: { card: "summary_large_image", title: "Jak správně topit 2026", description: "Optimální teploty, větrání a nejčastější chyby při vytápění." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/jak-spravne-topit#article",
    "headline": "Jak správně topit – teploty, větrání a úspora energie 2026",
    "datePublished": "2026-05-01T08:00:00Z",
    "dateModified": "2026-05-01T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak správně topit", "optimální teplota místnosti", "větrání při topení", "úspora vytápění", "správné vytápění domu"]
  }]
};

const TEMPS = [
  { room:"Obývací pokoj", temp:"20–22 °C", note:"Komfortní teplota\npro sezení a aktivitu", color:"#e07040" },
  { room:"Ložnice", temp:"16–18 °C", note:"Chladnější = lepší\nkvalita spánku", color:"#4a90d9" },
  { room:"Koupelna", temp:"22–24 °C", note:"Teplejší kvůli\nodhalení těla", color:"#9b6fd4" },
  { room:"Kuchyně", temp:"18–20 °C", note:"Vaření přidává teplo\nméně topení třeba", color:"#5a9e6f" },
  { room:"Dětský pokoj", temp:"20–22 °C", note:"Stejně jako obývák\nbatole 22 °C", color:"#f59e0b" },
];

const RELATED = [
  { title: "Jak ušetřit na vytápění", href: "/blog/usetrit-na-vytapeni", read: "7 min" },
  { title: "Jak odvzdušnit radiátory", href: "/blog/jak-odvzdusnit-radiatory", read: "3 min" },
  { title: "Jak zkontrolovat kotel před zimou", href: "/blog/zkontrolovat-kotel-pred-zimou", read: "6 min" },
  { title: "Jak správně větrat byt", href: "/blog/spravne-vetrat-byt", read: "4 min" },
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
              <span>Jak správně topit</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">🍂 Sezónní údržba</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak správně topit – teploty, větrání a úspora energie</h1>
              <p className="article-lead">Přetápění je nejčastější chyba — za každý 1 °C navíc platíš o 6 % více. Správné nastavení teplot v jednotlivých místnostech a správné větrání jsou klíč ke komfortu i úspoře.</p>
              <div className="article-meta-row"><span>Aktualizováno: 1. května 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/jak-spravne-topit" title="Jak správně topit – teploty, větrání a úspora energie 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 175" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="175" fill="#fdf8f4"/>
                <text x="380" y="22" textAnchor="middle" fontSize="10" fill="#8a5030" fontWeight="700" letterSpacing="0.04em">OPTIMÁLNÍ TEPLOTA DLE MÍSTNOSTI</text>
                {TEMPS.map(({room, temp, note, color}, i) => (
                  <g key={i} transform={`translate(${20+i*148}, 28)`}>
                    <rect x="0" y="0" width="138" height="138" rx="8" fill="#fff" stroke={color} strokeWidth="1.5"/>
                    <text x="69" y="20" textAnchor="middle" fontSize="9" fill={color} fontWeight="700">{room}</text>
                    <line x1="8" y1="26" x2="130" y2="26" stroke={color} strokeWidth="0.5" opacity="0.4"/>
                    <text x="69" y="72" textAnchor="middle" fontSize="30" fill={color} fontWeight="200">{temp.split('–')[0]}°</text>
                    <text x="69" y="90" textAnchor="middle" fontSize="12" fill={color} opacity="0.7">–{temp.split('–')[1]}</text>
                    <rect x="6" y="104" width="126" height="28" rx="5" fill={color} opacity="0.08"/>
                    {note.split('\n').map((n,j) => <text key={j} x="69" y={116+j*12} textAnchor="middle" fontSize="7.5" fill={color}>{n}</text>)}
                  </g>
                ))}
                <rect y="158" width="760" height="17" fill="#f0e8e0" opacity="0.5"/>
                <text x="380" y="170" textAnchor="middle" fontSize="8" fill="#8a7050" fontWeight="600" letterSpacing="0.06em">🌡️ ZA KAŽDÝ 1 °C NAVÍC = 6 % VÍCE NA ÚČTU · LOŽNICE CHLADNĚJI = LEPŠÍ SPÁNEK</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#teploty">Optimální teploty v místnostech</a></li>
                <li><a href="#vetrani">Jak větrat při topení</a></li>
                <li><a href="#chyby">Nejčastější chyby při topení</a></li>
                <li><a href="#radiatory">Správné nastavení radiátorů</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="teploty">
              <h2>Optimální teploty v místnostech</h2>
              <p>Různé místnosti mají různé nároky na teplotu. Topit celý byt na stejnou teplotu je neekonomické a nepohodlné.</p>
              <ul>
                <li><strong>Obývací pokoj a pracovna (20–22 °C):</strong> Komfortní teplota pro sezení a kancelářskou práci. Při fyzické aktivitě může být i nižší.</li>
                <li><strong>Ložnice (16–18 °C):</strong> Chladnější ložnice zlepšuje kvalitu spánku — tělo potřebuje nižší teplotu pro hluboký spánek. Mnoho lidí přetápí ložnici zbytečně.</li>
                <li><strong>Koupelna (22–24 °C):</strong> Vyšší teplota je nutná kvůli odhalení těla při koupání a sprchování. Koupelna se rychle ochlazuje — podlahové topení nebo přídavný topný žebřík je ideální.</li>
                <li><strong>Dětský pokoj (20–22 °C):</strong> Kojenci do 1 roku: 20–22 °C. Batolata a starší děti: 18–20 °C. Příliš teplý pokoj zvyšuje riziko SIDS u kojenců.</li>
                <li><strong>Nevyužívané místnosti:</strong> Temperuj na 14–16 °C — zcela nevytápěná místnost způsobí kondenzaci a plíseň na stěnách.</li>
              </ul>
            </section>

            <section id="vetrani">
              <h2>Jak větrat při topení</h2>
              <p>Větrání při topení je nutné — bez výměny vzduchu se hromadí vlhkost, CO₂ a znečišťující látky. Ale špatné větrání zbytečně prodraží topení.</p>
              <ul>
                <li><strong>Krátké intenzivní větrání (průvan):</strong> Ideální způsob — otevři okna dokořán na 5–10 minut. Průvan rychle vymění vzduch bez výrazného ochlazení stěn a nábytku (mají velkou tepelnou kapacitu).</li>
                <li><strong>Nikoli ventilační mikrovětrání:</strong> Pootevřené okno na několik hodin = studený vzduch neustále proudí dovnitř = stěny se ochladí = topení pracuje neustále. Je to nejdražší způsob větrání.</li>
                <li><strong>Před větráním sniž termostat:</strong> Než otevřeš okno, sniž termostat — kotel se zbytečně neroztočí při průvanu.</li>
                <li><strong>Frekvence větrání:</strong> V obývaných místnostech: 2–3× denně po 5–10 minutách. Koupelna: vždy po sprchování nebo koupání. Kuchyně: při vaření a po vaření.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Vlhkost vzduchu při topení klesá. Ideální vlhkost je 40–60 %. Suchý vzduch (pod 30 %) způsobuje podráždění sliznic a statickou elektřinu. Použij zvlhčovač nebo postav nádoby s vodou k radiátorům.</div>
            </section>

            <section id="chyby">
              <h2>Nejčastější chyby při topení</h2>
              <ul>
                <li><strong>Přetápění:</strong> Každý 1 °C navíc = 6 % více na účtu. 24 °C v obýváku místo 21 °C = o 18 % vyšší náklady. Nastav termostat na 20–21 °C a oblékni se.</li>
                <li><strong>Zakrytí radiátorů:</strong> Nábytek nebo záclony před radiátorem blokují cirkulaci vzduchu. Radiátor hřeje jen okolní vzduch, který stoupá ke stropu místo do místnosti. Vždy min. 30 cm volného prostoru před radiátorem.</li>
                <li><strong>Topení a přitom otevřená okna:</strong> Topíš ven — doslova. Buď topíš nebo větráš — ne oboje najednou.</li>
                <li><strong>Nezavřené dveře v noci:</strong> Teplo z vytápěných místností uniká do nevytápěných prostor. Zavírej dveře — každá místnost by měla mít svou teplotní zónu.</li>
                <li><strong>Odvzdušnění radiátorů:</strong> Vzduch v radiátoru způsobuje studené plochy a menší výkon. Odvzdušni radiátory na začátku každé topné sezóny.</li>
              </ul>
            </section>

            <section id="radiatory">
              <h2>Správné nastavení radiátorů</h2>
              <ul>
                <li><strong>Termostatická hlavice:</strong> Nastav ji na požadovanou teplotu (číslice 1–5 nebo °C). Poloha 3 odpovídá přibližně 20 °C. Nenastavuj na maximum — kotel pracuje zbytečně a místnost se přetápí.</li>
                <li><strong>Noční útlum:</strong> V noci sniž teplotu o 2–4 °C. Moderní kotle s termostatem to dělají automaticky. Úspora 10–20 % oproti konstantnímu topení.</li>
                <li><strong>Programovatelný termostat:</strong> Nastav různé teploty pro různé části dne — nižší ráno (6–7 h), vyšší dopoledne a večer, nižší v noci. Návratnost termostatu je 1–2 topné sezóny.</li>
                <li><strong>Hydraulické vyvážení:</strong> Pokud některé radiátory hřejí málo a jiné příliš — soustava není vyvážená. Servisní technik nastaví průtoky — ušetří 10–15 % nákladů.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Je lepší topit méně ale nepřerušeně nebo více ale jen ráno a večer?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Pro teplovodní radiátory (velká tepelná kapacita): plynulé topení na nižší teplotu je efektivnější než přerušované topení na vyšší teplotu. Pro elektrické přímotopy (malá tepelná kapacita): přerušované topení může být výhodnější — rychle hřejí a rychle chladnou. Obecně: programovatelný termostat s nočním útlumem je optimální kompromis pro oba systémy.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Proč je v bytě sucho při topení a jak to řešit?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Topení vysušuje vzduch — ohřátý vzduch má relativně nižší vlhkost. Řešení: zvlhčovač vzduchu (elektrický nebo pasivní nádoba na radiátor), pokojové rostliny, časté větrání (přináší vlhčí venkovní vzduch v mrazivém počasí — ale v oblačném počasí venkovní vzduch může být vlhčí). Ideální vlhkost: 40–60 %. Měř hygrometrem (200–500 Kč).</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Kdy spustit topení na podzim?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Topnou sezónu spusť když průměrná venkovní teplota klesne pod 13 °C po dobu alespoň 2 dnů — to je standardní definice začátku topné sezóny v ČR. Prakticky: když je v bytě chladněji než 18–20 °C i přes den. Nečekej až bude zima — studené stěny se ohřívají pomalu a musíš topit více.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/jak-spravne-topit" title="Jak správně topit – teploty, větrání a úspora energie 2026" />

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
                <li><a href="#teploty">Optimální teploty</a></li>
                <li><a href="#vetrani">Větrání při topení</a></li>
                <li><a href="#chyby">Nejčastější chyby</a></li>
                <li><a href="#radiatory">Nastavení radiátorů</a></li>
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
