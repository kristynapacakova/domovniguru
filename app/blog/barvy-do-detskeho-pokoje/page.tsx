import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Barvy do dětského pokoje – jak vybrat bezpečné a správné 2026",
  description: "Jak vybrat barvy do dětského pokoje. Bezpečné barvy bez VOC, správné odstíny pro různý věk a jak kombinovat barvy pro klidný spánek i aktivní hru.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/barvy-do-detskeho-pokoje" },
  openGraph: { title: "Barvy do dětského pokoje 2026", description: "Bezpečné barvy bez VOC, správné odstíny pro věk dítěte a jak je kombinovat.", url: "https://www.domovniguru.cz/blog/barvy-do-detskeho-pokoje", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-22T08:00:00Z", modifiedTime: "2026-04-22T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Barvy do dětského pokoje 2026", description: "Bezpečné barvy bez VOC a správné odstíny pro dětský pokoj." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/barvy-do-detskeho-pokoje#article",
    "headline": "Barvy do dětského pokoje – jak vybrat bezpečné a správné 2026",
    "datePublished": "2026-04-22T08:00:00Z",
    "dateModified": "2026-04-22T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["barvy do dětského pokoje", "bezpečné barvy pro děti", "barvy bez VOC dětský pokoj", "jakou barvu do dětského pokoje", "dětský pokoj barva stěny"]
  }]
};

const RELATED = [
  { title: "Jak vybrat barvu na zeď", href: "/blog/jak-vybrat-barvu-na-zed", read: "9 min" },
  { title: "Jak malovat zeď – kompletní průvodce", href: "/blog/jak-malovat-zed", read: "5 min" },
  { title: "Tapety vs. barva na zeď", href: "/blog/tapety-vs-barva", read: "6 min" },
  { title: "Barva do vlhkých prostor", href: "/blog/barva-do-vlhkych-prostoru", read: "5 min" },
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
              <span>Barvy do dětského pokoje</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování & barvy</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Barvy do dětského pokoje – jak vybrat bezpečné a správné</h1>
              <p className="article-lead">Barvy v dětském pokoji ovlivňují náladu, soustředění i kvalitu spánku. A ne každá barva je pro děti bezpečná. Tady je jak vybrat správně — bezpečně i esteticky.</p>
              <div className="article-meta-row"><span>Aktualizováno: 22. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/barvy-do-detskeho-pokoje" title="Barvy do dětského pokoje – jak vybrat bezpečné a správné 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 185" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="185" fill="#fdf8ff"/>
                <text x="380" y="22" textAnchor="middle" fontSize="10" fill="#6a4a8a" fontWeight="700" letterSpacing="0.04em">PSYCHOLOGIE BAREV V DĚTSKÉM POKOJI</text>

                {[
                  { x:20, color:"#a8d8ea", name:"Modrá", effect:"Uklidňuje, zlepšuje\nsoustředění", best:"Školáci, studovna", warn:"Příliš tmavá = chladná" },
                  { x:175, color:"#b8e0b8", name:"Zelená", effect:"Přirozená, klidná,\nstimuluje kreativitu", best:"Všechny věkové\nkategorie", warn:"Sytá zelená může\nbýt rušivá" },
                  { x:330, color:"#ffd6a5", name:"Žlutá (pastel)", effect:"Radostná, podporuje\nenergie a učení", best:"Předškoláci,\nhravé prostory", warn:"Jasná žlutá = agrese\na neklid" },
                  { x:485, color:"#ffb3c1", name:"Růžová (pastel)", effect:"Jemná, uklidňující\nv světlých odstínech", best:"Kojenci, malé děti", warn:"Jen pastelová,\nne sytá" },
                  { x:620, color:"#e8e0f0", name:"Levandulová", effect:"Klidná, podporuje\nspánek", best:"Ložnice, odpočinek", warn:"Nevhodná pro\npracovní kout" },
                ].map(({x, color, name, effect, best, warn}) => (
                  <g key={x} transform={`translate(${x}, 30)`}>
                    <rect x="0" y="0" width="128" height="142" rx="8" fill="#fff" stroke={color} strokeWidth="2"/>
                    <rect x="0" y="0" width="128" height="35" rx="8" fill={color} opacity="0.8"/>
                    <text x="64" y="22" textAnchor="middle" fontSize="11" fill="#2a2a28" fontWeight="700">{name}</text>
                    <line x1="8" y1="35" x2="120" y2="35" stroke={color} strokeWidth="1"/>
                    {effect.split('\n').map((line, i) => (
                      <text key={i} x="64" y={52+i*13} textAnchor="middle" fontSize="8" fill="#4a4a40">{line}</text>
                    ))}
                    <text x="64" y="88" textAnchor="middle" fontSize="7.5" fill="#3a7e4f" fontWeight="600">✓ {best.split('\n')[0]}</text>
                    {best.split('\n')[1] && <text x="64" y="100" textAnchor="middle" fontSize="7.5" fill="#3a7e4f">{best.split('\n')[1]}</text>}
                    <text x="64" y="118" textAnchor="middle" fontSize="7" fill="#e07040">⚠ {warn.split('\n')[0]}</text>
                    {warn.split('\n')[1] && <text x="64" y="129" textAnchor="middle" fontSize="7" fill="#e07040">{warn.split('\n')[1]}</text>}
                  </g>
                ))}

                <rect y="168" width="760" height="17" fill="#f0e8ff" opacity="0.5"/>
                <text x="380" y="180" textAnchor="middle" fontSize="8" fill="#6a4a8a" fontWeight="600" letterSpacing="0.06em">🎨 PASTELOVÉ ODSTÍNY VŽDY BEZPEČNĚJŠÍ · SYTOST BARVY ZVYŠUJE STIMULACI</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#bezpecnost">Bezpečné barvy – co je VOC a proč záleží</a></li>
                <li><a href="#vek">Barvy podle věku dítěte</a></li>
                <li><a href="#psychologie">Psychologie barev – co která dělá</a></li>
                <li><a href="#kombinace">Jak kombinovat barvy</a></li>
                <li><a href="#tipy">Praktické tipy</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="bezpecnost">
              <h2>Bezpečné barvy – co je VOC a proč záleží</h2>
              <p>VOC (těkavé organické sloučeniny) jsou chemické látky které se uvolňují z mokré i zaschlé barvy a mohou způsobovat bolesti hlavy, podráždění dýchacích cest a při dlouhodobé expozici závažnější zdravotní problémy. V dětském pokoji je to zvlášť důležité — děti tráví v pokoji hodně času a jsou na tyto látky citlivější.</p>
              <ul>
                <li><strong>Hledej označení "Low VOC" nebo "Zero VOC":</strong> Tyto barvy obsahují minimální množství nebo žádné těkavé sloučeniny. Nejsou jen bezpečnější — mají i méně zápachu.</li>
                <li><strong>Přírodní barvy:</strong> Barvy na bázi přírodních pigmentů a pojidel (kasein, lněný olej) jsou alternativou pro nejcitlivější děti. Dražší ale maximálně bezpečné.</li>
                <li><strong>Větrání po malování:</strong> I Low VOC barvy vyžadují důkladné větrání — maluj s otevřenými okny a nechej pokoj vyvětrat min. 48–72 hodin před nastěhováním dítěte.</li>
                <li><strong>Certifikace:</strong> Hledej certifikaci Blue Angel (Modrý anděl), Ecolabel nebo Eurofins Indoor Air Comfort Gold — garantují nízké emise VOC.</li>
              </ul>
            </section>

            <section id="vek">
              <h2>Barvy podle věku dítěte</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Věk</th><th>Doporučené barvy</th><th>Proč</th><th>Vyvarovat se</th></tr></thead>
                  <tbody>
                    <tr><td><strong>0–2 roky (kojenec)</strong></td><td>Bílá, krémová, světle růžová, světle modrá</td><td>Uklidňující, stimuluje zrakový vývoj</td><td>Sytých a kontrastních barev</td></tr>
                    <tr><td><strong>3–6 let (předškolák)</strong></td><td>Pastelové odstíny, žlutá, zelená, světle oranžová</td><td>Podporuje kreativitu a hru</td><td>Příliš tmavých nebo studených barev</td></tr>
                    <tr><td><strong>7–12 let (školák)</strong></td><td>Modrá, zelená, neutrální s akcentem</td><td>Soustředění, klid na učení</td><td>Příliš rušivých vzorů a sytých barev</td></tr>
                    <tr><td><strong>Teenager</strong></td><td>Dle preference dítěte</td><td>Autonomie a vlastní identita</td><td>Rozhoduj spolu s dítětem, ne za něj</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="psychologie">
              <h2>Psychologie barev – co která dělá</h2>
              <ul>
                <li><strong>Modrá:</strong> Uklidňuje a zlepšuje soustředění. Světlé odstíny jsou ideální pro školáky. Tmavá modrá může působit chladně a depresivně — drž se světlých a středních tónů.</li>
                <li><strong>Zelená:</strong> Přirozená a uklidňující. Asociuje se s přírodou. Světlá zelená funguje téměř v každém dětském pokoji. Sytá nebo žlutozelená může být rušivá.</li>
                <li><strong>Žlutá:</strong> V pastelových odstínech radostná a podporuje energii. Sytá nebo jasná žlutá může vyvolávat neklid a agresivitu — v dětském pokoji vždy jemné tóny.</li>
                <li><strong>Červená a oranžová:</strong> Stimulující, zvyšují energii a chuť k jídlu. Do ložnice nebo klidové části nevhodné. Malý akcent (podušky, koberec) je v pořádku.</li>
                <li><strong>Fialová a levandulová:</strong> Klidné a podporují spánek. Pastelová levandulová je výborná pro ložnici nebo dětský pokoj kde dítě potřebuje klid.</li>
              </ul>
            </section>

            <section id="kombinace">
              <h2>Jak kombinovat barvy v dětském pokoji</h2>
              <ul>
                <li><strong>Pravidlo 60-30-10:</strong> 60 % dominantní barva (stěny, hlavní plochy), 30 % doplňková barva (nábytek, textil), 10 % akcentní barva (polštáře, doplňky).</li>
                <li><strong>Akcentní stěna:</strong> Tři stěny neutrální nebo světle pastelové, jedna stěna výraznější barva nebo tapeta. Dítě dostane výrazný vizuální prvek bez přesycení.</li>
                <li><strong>Zóny v pokoji:</strong> Pokud pokoj slouží jako ložnice i pracovna, odliš zóny — klidná barva u postele, lehce stimulující u pracovního stolu.</li>
                <li><strong>Nechej prostor pro změnu:</strong> Děti rychle mění preference. Neutrální stěny s výraznými doplňky (polštáře, koberec, plakáty) je levnější přemalovat nebo vyměnit než celý pokoj.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Zapoď dítě do výběru barvy — pocit spoluvlastnictví podporuje zodpovědnost za prostor. I malé dítě si může vybrat z předem vybraných bezpečných variant.</div>
            </section>

            <section id="tipy">
              <h2>Praktické tipy pro malování dětského pokoje</h2>
              <ul>
                <li><strong>Omyvatelná barva je nutnost:</strong> Dětský pokoj = kresby na zdech, šmouhy, otisky rukou. Vždy vol barvu s třídou omyvatelnosti 1 (nejvyšší).</li>
                <li><strong>Testovací vzorník:</strong> Kup testovací balení (50–100 Kč) a nanes na zeď. Nechej zaschnout 24 hodin a pozoruj v různém světle — ráno, odpoledne, večer.</li>
                <li><strong>Světlost místnosti:</strong> Tmavý pokoj na sever = světlé barvy pro odraz světla. Slunný pokoj na jih = můžeš si dovolit tmavší odstíny.</li>
                <li><strong>Výška malování:</strong> Pro malé děti přemýšlej o jiné barvě v dolní části zdi (do výšky 1 m) — snadněji se vymaluje po kresbách.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Kdy po malování může dítě spát v pokoji?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Minimálně 48 hodin po vymalování, ideálně 72 hodin. Tuto dobu větr s otevřenými okny. Pro kojence a alergiky doporučujeme týden. Low VOC barvy mají výrazně méně zápachu a emisí — ale přesto větrání doporučujeme.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jaká barva pomáhá dětem lépe spát?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Světlá modrá, levandulová a světlé pastelové zelené jsou nejlepší pro spánek. Věda potvrzuje že modré tóny snižují srdeční tep a podporují relaxaci. Červená, oranžová a jasná žlutá naopak spánek narušují. Pro nejlepší výsledek kombinuj uklidňující barvu stěn s tmavými závěsy (blackout).</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Smím dát výraznou barvu do dětského pokoje?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ano, ale s mírou. Výrazná barva jako akcent (jedna stěna, nábytek) je v pořádku. Čtyři výrazně červené nebo tmavě fialové stěny mohou být pro dítě přestimulující nebo rušivé. Pokud dítě trvá na výrazné barvě, nabídni kompromis — jedna akcentní stěna.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/barvy-do-detskeho-pokoje" title="Barvy do dětského pokoje – jak vybrat bezpečné a správné 2026" />

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
                <li><a href="#bezpecnost">Bezpečné barvy – VOC</a></li>
                <li><a href="#vek">Barvy podle věku</a></li>
                <li><a href="#psychologie">Psychologie barev</a></li>
                <li><a href="#kombinace">Jak kombinovat</a></li>
                <li><a href="#tipy">Praktické tipy</a></li>
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
