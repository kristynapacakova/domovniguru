import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak se zbavit hmyzu v létě bez chemie – přírodní odpuzovače 2026",
  description: "Komáři, mravenci, mouchy a molové – jak se zbavit hmyzu doma a na zahradě bez pesticidů. Přírodní odpuzovače, sítě a preventivní opatření které skutečně fungují.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/zbavit-se-hmyzu-bez-chemie" },
  openGraph: { title: "Jak se zbavit hmyzu v létě bez chemie 2026", description: "Komáři, mravenci, mouchy – přírodní odpuzovače a sítě bez pesticidů.", url: "https://www.domovniguru.cz/blog/zbavit-se-hmyzu-bez-chemie", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-13T08:00:00Z", modifiedTime: "2026-04-13T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak se zbavit hmyzu v létě bez chemie 2026", description: "Komáři, mravenci, mouchy – přírodní odpuzovače a sítě bez pesticidů." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/zbavit-se-hmyzu-bez-chemie#article",
    "headline": "Jak se zbavit hmyzu v létě bez chemie – přírodní odpuzovače 2026",
    "datePublished": "2026-04-13T08:00:00Z",
    "dateModified": "2026-04-13T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak se zbavit hmyzu bez chemie", "přírodní odpuzovač komárů", "jak se zbavit mravenců", "mouchy v domě", "sítě proti hmyzu", "hmyz v bytě léto"]
  }]
};

const RELATED = [
  { title: "Jak správně větrat byt", href: "/blog/spravne-vetrat-byt", read: "6 min" },
  { title: "Jak se zbavit plísně v bytě jednou provždy", href: "/blog/jak-odstranit-plisen-na-zdi", read: "10 min" },
  { title: "Jak připravit zahradu na jaro", href: "/blog/jarni-zahrada", read: "6 min" },
  { title: "Jak se zbavit plevele bez chemie", href: "/blog/zbavit-se-plevele-bez-chemie", read: "4 min" },
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
              <span>Hmyz bez chemie</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">❄️ Sezónní údržba</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak se zbavit hmyzu v létě – bez chemie a pesticidů</h1>
              <p className="article-lead">Komáři v ložnici, mravenci v kuchyni, mouchy u stolu — letní hmyz dokáže znepříjemnit život. Ukážeme jak ho účinně odehnat přírodními metodami, bez pesticidů bezpečných pro děti i domácí zvířata.</p>
              <div className="article-meta-row"><span>Aktualizováno: 13. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/zbavit-se-hmyzu-bez-chemie" title="Jak se zbavit hmyzu v létě bez chemie – přírodní odpuzovače 2026" />
            </header>

            {/* HERO SVG */}
            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 195" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="195" fill="#f8fdf0"/>

                {/* Typy hmyzu — 4 karty */}
                {[
                  { x:20, icon:"🦟", name:"Komáři", tip:"Síť na okno\nLavender, citronela", color:"#4a90d9" },
                  { x:210, icon:"🐜", name:"Mravenci", tip:"Skořice, křída\nOdstranit zdroj jídla", color:"#e07040" },
                  { x:400, icon:"🪰", name:"Mouchy", tip:"Bazalka na parapet\nUzavřít odpad", color:"#9b6fd4" },
                  { x:590, icon:"🦗", name:"Švábi / molové", tip:"Cedřové kuličky\nSuchá skříň", color:"#5a9e6f" },
                ].map(({x, icon, name, tip, color}) => (
                  <g key={name} transform={`translate(${x}, 15)`}>
                    <rect x="0" y="0" width="155" height="155" rx="10" fill="#fff" stroke={color} strokeWidth="1" opacity="0.9"/>
                    <text x="77" y="45" textAnchor="middle" fontSize="28">{icon}</text>
                    <text x="77" y="68" textAnchor="middle" fontSize="11" fill={color} fontWeight="700">{name}</text>
                    <line x1="20" y1="78" x2="135" y2="78" stroke={color} strokeWidth="0.5" opacity="0.4"/>
                    {tip.split('\n').map((line, i) => (
                      <text key={i} x="77" y={96+i*18} textAnchor="middle" fontSize="9" fill="#4a4a40">{line}</text>
                    ))}
                    <rect x="15" y="138" width="125" height="12" rx="4" fill={color} opacity="0.1"/>
                    <text x="77" y="148" textAnchor="middle" fontSize="7.5" fill={color} fontWeight="600">přírodní metoda ✓</text>
                  </g>
                ))}

                {/* Dolní lišta */}
                <rect y="175" width="760" height="20" fill="#e8f8e0" opacity="0.5"/>
                <text x="380" y="188" textAnchor="middle" fontSize="8" fill="#3a7e4f" fontWeight="600" letterSpacing="0.08em">🌿 BEZ PESTICIDŮ · BEZPEČNÉ PRO DĚTI A DOMÁCÍ ZVÍŘATA · ÚČINNÉ PŘÍRODNÍ METODY</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#prevence">Prevence – nejlepší zbraň</a></li>
                <li><a href="#komari">Komáři – sítě a odpuzovače</a></li>
                <li><a href="#mravenci">Mravenci v kuchyni</a></li>
                <li><a href="#mouchy">Mouchy a ovády</a></li>
                <li><a href="#mol">Molové a švábi</a></li>
                <li><a href="#rostliny">Rostliny které odpuzují hmyz</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="prevence">
              <h2>Prevence – nejúčinnější a nejlevnější metoda</h2>
              <p>Nejlepší boj s hmyzem je ten který nenastanou. Většina letního hmyzu má konkrétní důvody proč vstupuje do bytu — a ty lze eliminovat.</p>
              <ul>
                <li><strong>Sítě na okna a dveře:</strong> Základní ochrana, investice 200–800 Kč za okno. Plisé sítě nebo roletové sítě nevyžadují vrtání a dají se sejmout na zimu.</li>
                <li><strong>Uzavřít zdroje jídla:</strong> Mravenci a mouchy přicházejí za jídlem. Potraviny v uzavřených nádobách, odpadkový koš s víkem, výskyt ovoce v lednici.</li>
                <li><strong>Odstranit stojatou vodu:</strong> Komáři se množí ve stojatá vodě — miska pod květináčem, zahradní nádoby, ucpané okapy. Každý zdroj stojaté vody je líheň komárů.</li>
                <li><strong>Těsnění netěsností:</strong> Mravenci a švábi vstupují přes skuliny kolem trubek, pod dveřmi a v rohách. Silikonové těsnění skulin zabrání vstupu.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Nejúčinnější síť proti komárům má hustotu min. 18×16 ok/cm². Levnější sítě s menší hustotou propustí drobný hmyz. Zkontroluj specifikaci při nákupu.</div>
            </section>

            <section id="komari">
              <h2>Komáři – jak je odehnat bez chemie</h2>
              <p>Komáři jsou nejotravnějším letním hostem. Dobrá zpráva: existuje řada účinných přírodních metod.</p>
              <ul>
                <li><strong>Síť na okno:</strong> Nejúčinnější prevence. Větrání bez komárů — žádná jiná metoda to nevyrovná.</li>
                <li><strong>Citronelové svíčky a tyčinky:</strong> Citronelový olej odpuzuje komáry na ploše 2–3 m². Účinné venku, méně uvnitř kde vzduch cirkuluje. Cena 50–200 Kč.</li>
                <li><strong>Levandulový olej:</strong> Kapka levandulového esenciálního oleje na zápěstí nebo na polštář — komáři nesnášejí vůni levandule. Bezpečné pro děti.</li>
                <li><strong>Eukalyptový olej:</strong> Studie potvrzují účinnost — eukalyptový olej nanesen na kůži odpuzuje komáry na 1–3 hodiny.</li>
                <li><strong>Ventilátor:</strong> Překvapivě účinná metoda. Komáři jsou slabí letci — proud vzduchu z ventilátoru jim zabrání přistát.</li>
                <li><strong>Odstraň stojatou vodu:</strong> Miska pod květináčem, zahradní jezírko bez okysličení, ucpané okapy — každý zdroj je líheň.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Komáři jsou aktivní hlavně v době soumraku a svítání — hodina před a po západu slunce. V tuto dobu zavři okna nebo zapni síť. Přes den je aktivita výrazně nižší.</div>
            </section>

            <section id="mravenci">
              <h2>Mravenci v kuchyni – jak je vypudit</h2>
              <p>Mravenci přicházejí za jídlem a vodou. Odstranění zdroje je priorita — bez potravy kolonii místo opustí sama.</p>
              <ul>
                <li><strong>Skořice:</strong> Mravenci nesnášejí vůni skořice. Posyp skořicí vstupní body — skuliny pod dveřmi, kolem trubek, na parapet. Obnovuj každé 2–3 dny nebo po dešti.</li>
                <li><strong>Křída nebo soda:</strong> Čára z křídy nebo jedlé sody na místech kudy mravenci procházejí — přeruší jejich feromonovou stezku.</li>
                <li><strong>Citronová šťáva:</strong> Setři citronovou šťávou místa kudy mravenci přicházejí — kyselina naruší feromonové stopy.</li>
                <li><strong>Uzavřít jídlo:</strong> Cukr, med, ovoce — vše do uzavřených nádob nebo do lednice. Bez potravy mravenci místo opustí.</li>
                <li><strong>Najít hnízdo:</strong> Sleduj odkud mravenci přicházejí a najdi vstupní bod. Zalej vařící vodou nebo aplikuj diatomitovou zeminu (bezpečná pro lidi, smrtelná pro hmyz).</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Nikdy nešlapej mravence — uvolní poplachové feromony které přilákají více mravenců. Odnes je daleko od domu nebo zalij jejich stezku vodou s citronovou šťávou.</div>
            </section>

            <section id="mouchy">
              <h2>Mouchy a ovády – odpuzení bez spreje</h2>
              <ul>
                <li><strong>Bazalka na parapetu:</strong> Mouchy nesnášejí vůni bazalky. Hrnkový keřík na kuchyňském parapetu odpuzuje mouchy a voní do jídla. Bonus: máš čerstvé bylinky.</li>
                <li><strong>Máta:</strong> Podobný efekt jako bazalka. Silná vůně máty odpuzuje mouchy, komáry i mravence.</li>
                <li><strong>Lepové pásky:</strong> Staromódní ale účinné. Neobsahují chemii — jen lepidlo. Nejlepší nad odpadkovým košem nebo u okna.</li>
                <li><strong>Uzavřít odpad:</strong> Odpadkový koš s pevným víkem je základ. Letní mouchy kladou vajíčka do organického odpadu — koš bez víka je líheň.</li>
                <li><strong>Závěs z provázků nebo pruhů fólie ve dveřích:</strong> Tradiční venkovské řešení — mouchy se vyhýbají pohybujícím se objektům ve vstupu.</li>
              </ul>
            </section>

            <section id="mol">
              <h2>Molové a švábi – přírodní prevence</h2>
              <h3>Molové (v oblečení a potravinách)</h3>
              <ul>
                <li><strong>Cedrové kuličky nebo cedřové věšáky:</strong> Vůně cedru odpuzuje molové. Umísti do skříní s vlnou a přírodními materiály. Cena 100–300 Kč za sadu.</li>
                <li><strong>Levandulové sáčky:</strong> Levandule odpuzuje molové a příjemně voní. Suché levandulové květy v malém sáčku do skříně.</li>
                <li><strong>Čisté oblečení do úložiště:</strong> Moly přitahují zbytky potu a organické nečistoty — ukládej jen čisté oblečení.</li>
                <li><strong>Potraviny v uzavřených nádobách:</strong> Potravinoví moli přicházejí do mouky, cereálií a sušeného ovoce. Vše do skleněných nebo plastových dóz.</li>
              </ul>
              <h3>Švábi</h3>
              <ul>
                <li><strong>Diatomitová zemina:</strong> Přírodní prášek z mořských rozsivek — mechanicky poškozuje vnější pokryv hmyzu, bezpečný pro lidi. Posyp za lednicí, pod dřezem, v rozích.</li>
                <li><strong>Kyselina boritá:</strong> Slabý přirozený insekticid. Posyp na místa kudy švábi procházejí — přilne na jejich tělo a při čistění je otráví. Pozor — ne v dosahu dětí a zvířat.</li>
                <li><strong>Zaplombovat skuliny:</strong> Švábi vstupují přes skuliny kolem trubek. Silikonové těsnění je nejúčinnější prevencí.</li>
              </ul>
            </section>

            <section id="rostliny">
              <h2>Rostliny které odpuzují hmyz</h2>
              <p>Některé rostliny přirozeně odpuzují hmyz díky esenciálním olejům. Umísti je na okna a terasy pro pasivní ochranu.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Rostlina</th><th>Odpuzuje</th><th>Kde umístit</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Levandule</strong></td><td>Komáři, moli, mouchy</td><td>Parapet, terasa, skříň (sušená)</td></tr>
                    <tr><td><strong>Citronela (Melissa)</strong></td><td>Komáři</td><td>Terasa, balkon</td></tr>
                    <tr><td><strong>Bazalka</strong></td><td>Mouchy, komáři</td><td>Kuchyňský parapet</td></tr>
                    <tr><td><strong>Máta</strong></td><td>Mouchy, mravenci, myši</td><td>Parapet, u vstupních dveří</td></tr>
                    <tr><td><strong>Rozmarýn</strong></td><td>Komáři, moli</td><td>Terasa, parapet</td></tr>
                    <tr><td><strong>Muškáty (pelargonie)</strong></td><td>Komáři</td><td>Okno, balkon</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Aby rostliny odpuzovaly lépe, lehce přejdi dlaní přes listy před použitím — mechanické poškození uvolní více esenciálních olejů a zesílí vůni.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Fungují přírodní metody stejně dobře jako chemické?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Na prevenci ano, na likvidaci velké infestace ne. Přírodní metody jsou výborné jako prevence a při malém výskytu hmyzu. Při masivní infestaci (švábi, bed bugs) je nutný profesionální zásah nebo silnější přípravky. Klíčové slovo je prevence — přírodní metody fungují nejlépe pokud začneš před problémem, ne po něm.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak se zbavit komárů v ložnici přes noc?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Nejlepší kombinace: (1) Síť na okno pro větrání bez vstupu. (2) Ventilátor u postele — komáři nemohou letět v proudu vzduchu. (3) Pár kapek levandulového oleje na polštář. (4) Před spaním projdi místnost s tyčinkou citronely. Pokud je komár již uvnitř, vypni světlo a zapni lampičku v jiné místnosti — přiláká ho tam.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Proč se mravenci vrací i po vyčištění kuchyně?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Mravenci sledují feromonové stopy které přetrvávají i po vizuálním vyčištění. Setři stopy octem nebo citronovou šťávou — kyselina feromony neutralizuje. Pak najdi a zapečeť vstupní bod. Pokud mravenci přicházejí i bez viditelného jídla, hnízdo je pravděpodobně uvnitř stěn — kontaktuj odborníka.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jsou elektrické odpuzovače hmyzu účinné?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ultrazvukové odpuzovače (zástrčkové přístroje) mají smíšené výsledky ve studiích — některé druhy hmyzu reagují, jiné ne. UV lapače (modré světlo + mřížka) jsou účinné na letající hmyz ale přitahují i užitečný hmyz. Elektrické odpuzovače jsou doplněk, ne náhrada za sítě a prevenci.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/zbavit-se-hmyzu-bez-chemie" title="Jak se zbavit hmyzu v létě bez chemie – přírodní odpuzovače 2026" />

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
                <li><a href="#prevence">Prevence</a></li>
                <li><a href="#komari">Komáři</a></li>
                <li><a href="#mravenci">Mravenci</a></li>
                <li><a href="#mouchy">Mouchy</a></li>
                <li><a href="#mol">Molové a švábi</a></li>
                <li><a href="#rostliny">Odpuzující rostliny</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/sezonni-udrzba" className="sidebar-cat-link">❄️ Sezónní údržba<span>20 článků →</span></Link>
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
        .article-body h3{font-family:var(--font-sans);font-size:16px;font-weight:600;margin-top:24px;margin-bottom:10px;color:var(--text)}
        .article-body p{font-size:16px;line-height:1.75;color:#2a2a28;font-weight:300;margin-bottom:14px}
        .article-body ul,.article-body ol{padding-left:22px;margin-bottom:16px;display:flex;flex-direction:column;gap:8px}
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
