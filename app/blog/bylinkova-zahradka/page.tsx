import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Bylinková zahradka – jak pěstovat bylinky doma i venku 2026",
  description: "Jak založit bylinkovou zahrádku na parapetu, balkonu nebo v zahradě. Které bylinky jsou nejjednodušší a jak je sázet.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/bylinkova-zahradka" },
  openGraph: { title: "Bylinková zahradka – pěstování bylinek doma i venku 2026", description: "Které bylinky pěstovat, jak je sázet a sklízet – zahrádka na parapetu i zahradě.", url: "https://www.domovniguru.cz/blog/bylinkova-zahradka", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-22T08:00:00Z", modifiedTime: "2026-04-22T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Bylinkov%C3%A1%20zahradka%20%E2%80%93%20jak%20p%C4%9Bstovat%20bylinky%20doma%20i%20venku%202026&cat=blog", width: 1200, height: 630, alt: "Bylinková zahradka – jak pěstovat bylinky doma i venku 2026" }] },
  twitter: { card: "summary_large_image", title: "Bylinková zahradka 2026", description: "Bylinky doma i venku – jak začít a co pěstovat." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/bylinkova-zahradka#article",
    "headline": "Bylinková zahradka – jak pěstovat bylinky doma i venku 2026",
    "datePublished": "2026-04-22T08:00:00Z",
    "dateModified": "2026-06-04T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["bylinková zahradka", "pěstování bylinek doma", "bylinky na parapetu", "bylinky balkon", "jak pěstovat bazalku", "bylinky pro začátečníky"]
  }, {
    "@type": "FAQPage",
    "@id": "https://www.domovniguru.cz/blog/bylinkova-zahradka#faq",
    "mainEntity": [
      { "@type": "Question", "name": "Mohu pěstovat bylinky bez přirozeného světla?", "acceptedAnswer": { "@type": "Answer", "text": "S přirozeným světlem je to vždy lepší, ale speciální LED lampy (grow lights) přirozené světlo nahradí. LED panel (400–1 500 Kč) zavěšený 20–30 cm nad bylinkami 12–16 hodin denně umožní pěstování i v tmavé místnosti nebo v bytě bez slunečního okna." } },
      { "@type": "Question", "name": "Proč bazalka z obchodu rychle uhyne?", "acceptedAnswer": { "@type": "Answer", "text": "Supermarketové bylinky jsou pěstované v hydroponii za intenzivního osvětlení — jsou přemnožené a stresované prodejem. Na parapetu jim chybí světlo. Řešení: přesadit do většího květináče, oddělit trs na 3–4 menší části, přemístit na nejsvětlejší místo v bytě." } },
      { "@type": "Question", "name": "Kdy přesadit bylinky ven po zimě?", "acceptedAnswer": { "@type": "Answer", "text": "Trvalky (pažitka, máta, tymián) lze přesunout ven jakmile nehrozí mráz — typicky po polovině května (po zmrzlých). Bazalku venku sázej nejdříve koncem května kdy jsou noci teplé — bazalka je tropická rostlina a mráz ji okamžitě zničí." } }
    ]
  }, {
    "@type": "HowTo",
    "@id": "https://www.domovniguru.cz/blog/bylinkova-zahradka#howto",
    "name": "Bylinková zahradka – jak pěstovat bylinky doma i venku 2026",
    "description": "Jak založit bylinkovou zahrádku na parapetu, balkonu nebo v zahradě. Které bylinky jsou nejjednodušší a jak je sázet.",
    "step": [
      { "@type": "HowToStep", "name": "Kde pěstovat – parapet, balkon nebo zahrada", "text": "Kde pěstovat – parapet, balkon nebo zahrada" },
      { "@type": "HowToStep", "name": "Jak začít – semena nebo sazenice", "text": "Jak začít – semena nebo sazenice" },
      { "@type": "HowToStep", "name": "Péče o bylinky", "text": "Péče o bylinky" },
      { "@type": "HowToStep", "name": "Jak správně sklízet bylinky", "text": "Jak správně sklízet bylinky" },
      { "@type": "HowToStep", "name": "Nejčastější problémy", "text": "Nejčastější problémy" }
    ]
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://www.domovniguru.cz/blog/bylinkova-zahradka#breadcrumb",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" },
      { "@type": "ListItem", "position": 3, "name": "Zahrada & terasa", "item": "https://www.domovniguru.cz/blog/kategorie/zahrada" },
      { "@type": "ListItem", "position": 4, "name": "Bylinková zahradka – jak pěstovat bylinky doma i venku 2026", "item": "https://www.domovniguru.cz/blog/bylinkova-zahradka" }
    ]
  }
  ]
};

const RELATED = [
  { title: "Jak pěstovat rajčata", href: "/blog/jak-pestovat-rajcata", read: "6 min" },
  { title: "Jak zavlažovat zahradu", href: "/blog/zavlaha-zahrada-postup", read: "6 min" },
  { title: "Jak hnojit zahradu", href: "/blog/jak-hnojit-zahradu", read: "6 min" },
  { title: "Jak připravit zahradu na jaro", href: "/blog/jarni-zahrada", read: "7 min" },
];

const HERBS = [
  { name:"Bazalka", icon:"🌿", diff:"Snadná", light:"☀️ Slunce", water:"💧💧 2× týdně", tip:"Odštipuj vrcholky aby větvila", color:"#5a9e6f" },
  { name:"Pažitka", icon:"🌱", diff:"Velmi snadná", light:"⛅ Polostín", water:"💧 1× týdně", tip:"Stříhej těsně nad zemí", color:"#3a7e4f" },
  { name:"Máta", icon:"🍃", diff:"Snadná", light:"⛅ Polostín", water:"💧💧 2× týdně", tip:"Pěstuj odděleně – šíří se!", color:"#4a90d9" },
  { name:"Rozmarýn", icon:"🌲", diff:"Střední", light:"☀️ Slunce", water:"💧 1× týdně", tip:"Nesnáší přemokření – propustný substrát", color:"#9b6fd4" },
  { name:"Petržel", icon:"🌾", diff:"Snadná", light:"☀️⛅ Oboje", water:"💧💧 2× týdně", tip:"Klíčí pomalu – 3–4 týdny", color:"#c8904a" },
  { name:"Tymián", icon:"🌿", diff:"Snadná", light:"☀️ Slunce", water:"💧 1× týdně", tip:"Seč po kvetení aby zhoustl", color:"#e07040" },
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
              <Link href="/blog/kategorie/zahrada">Zahrada & terasa</Link><span className="breadcrumb-sep">/</span>
              <span>Bylinková zahradka</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Bylinková zahradka – jak pěstovat bylinky doma i venku</h1>
              <p className="article-lead">Čerstvé bylinky jsou nejjednodušší zahradničení jaké existuje — nevyžadují zahradu, stačí parapet nebo balkon. Za pár týdnů máš bazalku, pažitku i rozmarýn kdykoliv po ruce.</p>
              <div className="article-meta-row"><span>Aktualizováno: 4. června 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/bylinkova-zahradka" title="Bylinková zahradka – jak pěstovat bylinky doma i venku 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 190" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="190" fill="#f0f8ec"/>
                <text x="380" y="22" textAnchor="middle" fontSize="10" fill="#3a7e4f" fontWeight="700" letterSpacing="0.04em">6 NEJLEPŠÍCH BYLINEK PRO ZAČÁTEČNÍKY</text>
                {HERBS.map(({name, icon, diff, light, water, tip, color}, i) => (
                  <g key={i} transform={`translate(${20+i*123}, 28)`}>
                    <rect x="0" y="0" width="116" height="150" rx="8" fill="#fff" stroke={color} strokeWidth="1.2"/>
                    <text x="58" y="30" textAnchor="middle" fontSize="22">{icon}</text>
                    <text x="58" y="48" textAnchor="middle" fontSize="10" fill={color} fontWeight="700">{name}</text>
                    <line x1="8" y1="54" x2="108" y2="54" stroke={color} strokeWidth="0.5" opacity="0.4"/>
                    <text x="58" y="67" textAnchor="middle" fontSize="7.5" fill="#3a7e4f">{diff}</text>
                    <text x="58" y="81" textAnchor="middle" fontSize="7.5" fill="#4a4a40">{light}</text>
                    <text x="58" y="95" textAnchor="middle" fontSize="7.5" fill="#4a90d9">{water}</text>
                    <rect x="6" y="108" width="104" height="34" rx="4" fill={color} opacity="0.08"/>
                    {tip.split(' – ').map((t, j) => (
                      <text key={j} x="58" y={120+j*12} textAnchor="middle" fontSize="7" fill={color}>{j===0 ? "💡 "+t : t}</text>
                    ))}
                  </g>
                ))}
                <rect y="173" width="760" height="17" fill="#d8f0d0" opacity="0.5"/>
                <text x="380" y="185" textAnchor="middle" fontSize="8" fill="#3a7e4f" fontWeight="600" letterSpacing="0.06em">🌿 ZAČNI S PAŽITKOU A BAZALKOU · SKLÍZEJ PRŮBĚŽNĚ · NEKUPUJ BYLINKY V SUPERMARKETU</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#kde">Kde pěstovat – parapet, balkon nebo zahrada</a></li>
                <li><a href="#zacatek">Jak začít – semena nebo sazenice</a></li>
                <li><a href="#pece">Péče o bylinky</a></li>
                <li><a href="#sklizen">Jak správně sklízet</a></li>
                <li><a href="#problemy">Nejčastější problémy</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="kde">
              <h2>Kde pěstovat – parapet, balkon nebo zahrada</h2>
              <ul>
                <li><strong>Parapet (okno):</strong> Ideální pro bazalku, pažitku a petržel. Potřebuješ aspoň 4 hodiny přímého slunce denně — okno na jih nebo západ. Severní parapet je příliš tmavý. Nádoby musí mít odtokové otvory.</li>
                <li><strong>Balkon:</strong> Více prostoru a světla než parapet. Vhodné pro všechny bylinky. Venkovní bylinky jsou odolnější — vzduch a přirozené podmínky jim prospívají.</li>
                <li><strong>Zahrada nebo záhon:</strong> Nejlepší podmínky pro bylinky. Bylinky v záhoně jsou větší, robustnější a méně náchylné na sucho. Ideální pro trvalky jako rozmarýn, tymián a mátu.</li>
                <li><strong>Velikost nádob:</strong> Bylinky nepotřebují velké nádoby — 10–15 cm průměr na jednu rostlinu. Větší nádoba = více substrátu = lepší zásobárna vody.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Mátu vždy pěstuj v oddělené nádobě — šíří se podzemními výhony a vytlačí ostatní bylinky z nádoby.</div>
            </section>

            <section id="zacatek">
              <h2>Jak začít – semena nebo sazenice</h2>
              <ul>
                <li><strong>Sazenice (koupit hotové):</strong> Nejrychlejší start — koupíš hotovou rostlinu v zahradnictví nebo supermarketu. Přesaď do většího květináče s čerstvým substrátem. Dostaneš bylinky ihned.</li>
                <li><strong>Semena:</strong> Levnější ale pomalejší. Pažitka klíčí za 7–10 dní, bazalka 5–7 dní, petržel 3–4 týdny. Semena sej do vlhkého substrátu, přikryj fólií do vzejití, drž na teple (20–25 °C).</li>
                <li><strong>Substrát:</strong> Bylinky potřebují propustný substrát — smíchej zahradní hlínu s pískem nebo perlitem (3:1). Ucpávající se těžká zemina způsobí hnilobu kořenů.</li>
                <li><strong>Dobrý start:</strong> Při přesazování z supermarketové nádoby přesaď celý trs do 2× většího květináče s čerstvým substrátem. Supermarketové bylinky jsou přemnoženévystresované — v nové nádobě se zotaví.</li>
              </ul>
            </section>

            <section id="pece">
              <h2>Péče o bylinky</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Bylinka</th><th>Světlo</th><th>Zalévání</th><th>Hnojení</th><th>Přezimování</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Bazalka</strong></td><td>Plné slunce</td><td>2–3× týdně</td><td>Každé 2 týdny</td><td>Jednoletnáodumře</td></tr>
                    <tr><td><strong>Pažitka</strong></td><td>Polostín–slunce</td><td>1–2× týdně</td><td>Jednou měsíčně</td><td>Trvalka – přežije</td></tr>
                    <tr><td><strong>Máta</strong></td><td>Polostín</td><td>2× týdně</td><td>Jednou měsíčně</td><td>Trvalka – přežije</td></tr>
                    <tr><td><strong>Rozmarýn</strong></td><td>Plné slunce</td><td>1× týdně</td><td>Na jaře</td><td>Poloodolný – chránit</td></tr>
                    <tr><td><strong>Tymián</strong></td><td>Plné slunce</td><td>1× týdně</td><td>Na jaře</td><td>Trvalka – přežije</td></tr>
                    <tr><td><strong>Petržel</strong></td><td>Slunce–polostín</td><td>2× týdně</td><td>Jednou měsíčně</td><td>Dvouletá</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="sklizen">
              <h2>Jak správně sklízet bylinky</h2>
              <ul>
                <li><strong>Sklízej průběžně, ne najednou:</strong> Odštipuj nebo stříhej vždy jen 1/3 rostliny. Rostlina se obnoví a znovu vyroste. Přestřižení na kořen rostlinu oslabí nebo zabije.</li>
                <li><strong>Bazalka:</strong> Odštipuj vrcholové listy a celé větvičky. Jakmile začne kvést, odštip květ — kvetení snižuje chuť listů a rostlina přestane tvořit nové.</li>
                <li><strong>Pažitka:</strong> Stříhej nůžkami těsně nad zemí. Znovu vyroste za 2–3 týdny.</li>
                <li><strong>Rozmarýn a tymián:</strong> Odštipuj jemné vrcholové větvičky. Tvrdé dřevnaté části nestříhej — neobnoví se.</li>
                <li><strong>Uchovávání:</strong> Čerstvé bylinky uchovej v mokré utěrce v lednici (3–5 dní). Bazalku nikdy do lednice — zčerná. Bylinky lze sušit nebo mrazit.</li>
              </ul>
            </section>

            <section id="problemy">
              <h2>Nejčastější problémy</h2>
              <ul>
                <li><strong>Žloutnoucí listy:</strong> Nejčastěji přemokření nebo nedostatek světla. Nechej substrát vyschnout před dalším zálivkou.</li>
                <li><strong>Padavka (semenáčky padají):</strong> Příliš mokrý substrát. Redukuj zálivku, zlepši odvodnění.</li>
                <li><strong>Mšice:</strong> Jemný insekticidní mýdlový spray nebo ruční odstraňování. Nenápadná zálivka pod listy.</li>
                <li><strong>Rostlina vytahuje do výšky (etiolace):</strong> Nedostatek světla — přesuň blíže k oknu nebo na balkon.</li>
                <li><strong>Bazalka po koupi z obchodu vadne:</strong> Supermarketové bylinky jsou pěstované za extrémně intenzivního světla — na parapetu se přizpůsobují. Přesaď do většího květináče a trpělivě čekej.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Mohu pěstovat bylinky bez přirozeného světla?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">S přirozeným světlem je to vždy lepší, ale existují speciální LED lampy na pěstování (grow lights) které přirozené světlo nahradí. LED panel (400–1 500 Kč) zavěšený 20–30 cm nad bylinkami 12–16 hodin denně umožní pěstování i v tmavé místnosti. Populární pro pěstování bylinek v zimě nebo v bytě bez slunečního okna.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Proč bazalka z obchodu rychle uhyne?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Supermarketové bylinky jsou pěstované v hydroponii nebo velmi živném substrátu za intenzivního osvětlení — jsou přemnoženéa stresovanéprodejem. Na parapetu jim chybí světlo a podmínky se změní. Řešení: přesadit do většího květináče, oddělit trs na 3–4 menší části, přemístit na nejsvětlejší místo v bytě.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Kdy přesadit bylinky ven po zimě?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Trvalky (pažitka, máta, tymián) lze přesunout ven jakmile nehrozí mráz — typicky po polovině května (po "zmrzlých). Bazalku venku sázej nejdříve koncem května kdy jsou noci teplé — bazalka je tropická rostlina a mráz ji okamžitě zničí. Jednu noc pod 8 °C stačí aby bazalka zčernala.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/bylinkova-zahradka" title="Bylinková zahradka – jak pěstovat bylinky doma i venku 2026" />

            <section className="related-section">
              <h2>Související články</h2>
              <div className="related-grid">
                {RELATED.map((r) => (
                  <Link key={r.href} href={r.href} className="card">
                    <div className="card-eyebrow-row"><span>Zahrada & terasa</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#kde">Kde pěstovat</a></li>
                <li><a href="#zacatek">Jak začít</a></li>
                <li><a href="#pece">Péče</a></li>
                <li><a href="#sklizen">Sklizeň</a></li>
                <li><a href="#problemy">Nejčastější problémy</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/zahrada" className="sidebar-cat-link">🌿 Zahrada & terasa<span>20 článků →</span></Link>
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
