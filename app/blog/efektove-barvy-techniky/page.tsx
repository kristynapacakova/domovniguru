import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Efektové barvy a techniky – mramorování, vintage, beton 2026",
  description: "Jak dosáhnout efektů mramorování, vintážního vzhledu nebo betonové stěny pomocí speciálních barev a technik. Průvodce dekorativními malířskými technikami.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/efektove-barvy-techniky" },
  openGraph: { title: "Efektové barvy a techniky – mramorování, vintage, beton 2026", description: "Mramorování, vintage, beton – jak dosáhnout dekorativních efektů na stěně.", url: "https://www.domovniguru.cz/blog/efektove-barvy-techniky", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-22T08:00:00Z", modifiedTime: "2026-04-22T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Efektov%C3%A9%20barvy%20a%20techniky%20%E2%80%93%20mramorov%C3%A1n%C3%AD%2C%20vintage%2C%20beton%202026", width: 1200, height: 630, alt: "Efektové barvy a techniky – mramorování, vintage, beton 2026" }] },
  twitter: { card: "summary_large_image", title: "Efektové barvy a techniky 2026", description: "Mramorování, vintage, beton – dekorativní malířské techniky krok za krokem." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/efektove-barvy-techniky#article",
    "headline": "Efektové barvy a techniky – mramorování, vintage, beton 2026",
    "datePublished": "2026-04-22T08:00:00Z",
    "dateModified": "2026-04-22T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["efektové barvy stěny", "mramorování stěny", "dekorativní malířské techniky", "vintage efekt stěna", "betonový efekt stěna", "glazura stěna technika"]
  }]
};

const RELATED = [
  { title: "Jak vybrat barvu na zeď", href: "/blog/jak-vybrat-barvu-na-zed", read: "9 min" },
  { title: "Jak malovat zeď – kompletní průvodce", href: "/blog/jak-malovat-zed", read: "5 min" },
  { title: "Tapety vs. barva na zeď", href: "/blog/tapety-vs-barva", read: "6 min" },
  { title: "Míchání barev RAL a NCS", href: "/blog/michani-barev-ral-ncs", read: "5 min" },
];

const TECHNIQUES = [
  {
    name: "Betonový efekt",
    difficulty: "⭐⭐ Střední",
    time: "1 den",
    cost: "500–1 500 Kč/m²",
    color: "#808090",
    desc: "Moderní industriální vzhled bez skutečného betonu. Speciální stěrková hmota nebo barva vytvoří autentický betonový povrch.",
    steps: ["Penetrace povrchu", "Nanést základní vrstvu (šedá)", "Nanést stěrkovou hmotu špachtlí", "Brousit po zaschnutí", "Zapečetit transparentním lakem"],
  },
  {
    name: "Mramorování",
    difficulty: "⭐⭐⭐ Náročné",
    time: "2 dny",
    cost: "300–800 Kč/m²",
    color: "#c8b090",
    desc: "Luxusní vzhled mramoru za zlomek ceny kamene. Vyžaduje trpělivost a správnou techniku s houbičkou a štětcem.",
    steps: ["Základní barva (světlá)", "Glazura v odstínu mramoru", "Žíly štětcem nebo peřím", "Rozpíjet houbičkou", "Lakovat lesklým lakem"],
  },
  {
    name: "Vintage / patina",
    difficulty: "⭐ Snadné",
    time: "Půl dne",
    cost: "200–500 Kč/m²",
    color: "#9a8060",
    desc: "Záměrně 'opotřebovaný' vzhled s viditelnou historií. Ideální pro rustikální nebo shabby chic interiéry.",
    steps: ["Základní barva", "Druhá barva přes ni (světlejší)", "Přebrousit hrany a výstupky", "Nanést vosk nebo glazuru", "Leštit pro patinový efekt"],
  },
  {
    name: "Ombre gradient",
    difficulty: "⭐⭐ Střední",
    time: "1 den",
    cost: "200–400 Kč/m²",
    color: "#6090c0",
    desc: "Plynulý přechod mezi dvěma nebo třemi barvami na jedné stěně. Moderní a vizuálně zajímavé.",
    steps: ["Rozděl stěnu na 3 zóny", "Nanes barvy v zónách", "Přechody promíchej mokrý do mokrého", "Vyhlazovat válečkem", "Druhá vrstva po zaschnutí"],
  },
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
              <span>Efektové barvy a techniky</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování & barvy</Link>
                <span className="article-read-time">⏱ 7 min čtení</span>
              </div>
              <h1 className="article-h1">Efektové barvy a techniky – mramorování, vintage, beton</h1>
              <p className="article-lead">Dekorativní malířské techniky promění obyčejnou zeď v designový prvek. Betonový efekt, mramorování nebo vintage patina — žádná z těchto technik není tak složitá jak vypadá.</p>
              <div className="article-meta-row"><span>Aktualizováno: 22. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/efektove-barvy-techniky" title="Efektové barvy a techniky – mramorování, vintage, beton 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 185" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="185" fill="#f8f6f4"/>
                {TECHNIQUES.map(({name, difficulty, cost, color}, i) => (
                  <g key={i} transform={`translate(${20+i*185}, 15)`}>
                    <rect x="0" y="0" width="170" height="155" rx="8" fill={color} opacity="0.15" stroke={color} strokeWidth="1.5"/>
                    <rect x="0" y="0" width="170" height="50" rx="8" fill={color} opacity="0.3"/>
                    <text x="85" y="32" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="700">{name}</text>
                    <text x="85" y="48" textAnchor="middle" fontSize="8" fill="#fff" opacity="0.9">{difficulty}</text>
                    <line x1="10" y1="55" x2="160" y2="55" stroke={color} strokeWidth="0.5" opacity="0.5"/>
                    <text x="85" y="72" textAnchor="middle" fontSize="8" fill="#4a4a40" fontWeight="600">Cena materiálu:</text>
                    <text x="85" y="86" textAnchor="middle" fontSize="9" fill={color} fontWeight="700">{cost}</text>
                    {["Speciální barva/stěrka", "Glazura nebo vosk", "Štětec + houba", "Brusný papír"].map((item, j) => (
                      <text key={j} x="12" y={104+j*13} fontSize="8" fill="#4a4a40">· {item}</text>
                    ))}
                  </g>
                ))}
                <rect y="168" width="760" height="17" fill="#f0e8e0" opacity="0.5"/>
                <text x="380" y="180" textAnchor="middle" fontSize="8" fill="#8a7050" fontWeight="600" letterSpacing="0.06em">🎨 VYZKOUŠEJ NEJDŘÍV NA KOUSKU KARTONU · MÉNĚ JE VÍCE · TRPĚLIVOST = VÝSLEDEK</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#beton">Betonový efekt</a></li>
                <li><a href="#mramor">Mramorování</a></li>
                <li><a href="#vintage">Vintage a patina</a></li>
                <li><a href="#ombre">Ombre gradient</a></li>
                <li><a href="#tipy">Obecné tipy pro efektové techniky</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            {TECHNIQUES.map(({name, difficulty, time, cost, color, desc, steps}, i) => (
              <section key={i} id={["beton","mramor","vintage","ombre"][i]}>
                <h2>{name}</h2>
                <div style={{display:"flex",gap:"12px",flexWrap:"wrap",marginBottom:"16px"}}>
                  {[{label:"Náročnost",val:difficulty},{label:"Čas",val:time},{label:"Cena mat.",val:cost}].map(({label,val}) => (
                    <div key={label} style={{background:color+"18",border:`1px solid ${color}40`,borderRadius:"6px",padding:"6px 12px",fontSize:"13px"}}>
                      <span style={{color:"var(--muted)",fontSize:"11px",display:"block"}}>{label}</span>
                      <span style={{color,fontWeight:600}}>{val}</span>
                    </div>
                  ))}
                </div>
                <p>{desc}</p>
                <h3>Postup:</h3>
                <ol style={{paddingLeft:"22px",display:"flex",flexDirection:"column",gap:"6px"}}>
                  {steps.map((step, j) => (
                    <li key={j} style={{fontSize:"15px",lineHeight:1.6,color:"#2a2a28",fontWeight:300}}><strong style={{fontWeight:600,color:"var(--text)"}}>Krok {j+1}:</strong> {step}</li>
                  ))}
                </ol>
              </section>
            ))}

            <section id="tipy">
              <h2>Obecné tipy pro efektové techniky</h2>
              <ul>
                <li><strong>Vždy nejdřív vyzkoušej na kartonu:</strong> Efektové techniky jsou nepředvídatelné. Vyzkoušej techniku na větším kusu kartonu nebo dřevotřísky před aplikací na zeď.</li>
                <li><strong>Pracuj v sekcích:</strong> Efektové barvy schnou rychle — pracuj v menších sekcích (1–2 m²) aby přechody nebyly viditelné.</li>
                <li><strong>Dva lidé = lepší výsledek:</strong> Jeden nanáší barvu, druhý ihned vytváří efekt. U mramorování a betonového efektu je to téměř nutnost.</li>
                <li><strong>Zapečetit finální vrstvou:</strong> Efektové povrchy jsou citlivější než standardní malba. Vždy zapečeť transparentním matným nebo lesklým lakem.</li>
                <li><strong>Méně je více:</strong> Začni subtilně — efekt lze vždy zesílit, ale přehnaný efekt těžko opravit.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Jsou efektové barvy vhodné pro začátečníky?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Vintage patina a ombre gradient zvládne začátečník po tréningu na kartonu. Mramorování a betonový efekt vyžadují více trpělivosti a zručnosti — doporučujeme začít jednoduchou technikou. Žádná technika není nevratná — pokud se nepovede, přemaluj základní barvou a zkus znovu.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Kolik stojí efektová malba oproti klasické?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Klasická malba: 50–200 Kč/m² materiál. Efektové techniky: 200–1 500 Kč/m² materiál (závisí na technice). Profesionální provedení efektové malby: 500–3 000 Kč/m² práce + materiál. DIY ušetří 60–80 % nákladů oproti profesionálovi.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak dlouho vydrží efektová malba?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Efektová malba správně zapečetěná lakem vydrží 5–10 let — stejně jako standardní malba. Bez laku je náchylnější na poškrábání a vlhkost. Vintage patina a mramorování jsou méně omyvatelné než standardní barva — nevhodné do kuchyně nebo koupelny.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/efektove-barvy-techniky" title="Efektové barvy a techniky – mramorování, vintage, beton 2026" />

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
                <li><a href="#beton">Betonový efekt</a></li>
                <li><a href="#mramor">Mramorování</a></li>
                <li><a href="#vintage">Vintage a patina</a></li>
                <li><a href="#ombre">Ombre gradient</a></li>
                <li><a href="#tipy">Obecné tipy</a></li>
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
        .article-body h3{font-family:var(--font-sans);font-size:16px;font-weight:600;margin-top:20px;margin-bottom:10px;color:var(--text)}
        .article-body p{font-size:16px;line-height:1.75;color:#2a2a28;font-weight:300;margin-bottom:14px}.article-body ul{padding-left:22px;margin-bottom:16px;display:flex;flex-direction:column;gap:8px}
        .article-body li{font-size:15px;line-height:1.6;color:#2a2a28;font-weight:300}.article-body strong{font-weight:600;color:var(--text)}
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
