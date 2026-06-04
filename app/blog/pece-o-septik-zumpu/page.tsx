import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak pečovat o septik a žumpu – frekvence vyvážení a péče 2026",
  description: "Jak správně pečovat o septik nebo žumpu. Jak často vyvážet, co do nich nepatří, jak prodloužit životnost a kdy je čas na výměnu za moderní ČOV.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/pece-o-septik-zumpu" },
  openGraph: { title: "Péče o septik a žumpu 2026", description: "Frekvence vyvážení, co do septiku nepatří a jak prodloužit jeho životnost.", url: "https://www.domovniguru.cz/blog/pece-o-septik-zumpu", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-05-01T08:00:00Z", modifiedTime: "2026-05-01T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20pe%C4%8Dovat%20o%20septik%20a%20%C5%BEumpu%20%E2%80%93%20frekvence%20vyv%C3%A1%C5%BEen%C3%AD%20a%20p%C3%A9%C4%8De%202026&cat=blog", width: 1200, height: 630, alt: "Jak pečovat o septik a žumpu – frekvence vyvážení a péče 2026" }] },
  twitter: { card: "summary_large_image", title: "Péče o septik a žumpu 2026", description: "Jak pečovat o septik a žumpu – frekvence vyvážení a tipy." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/pece-o-septik-zumpu#article",
    "headline": "Jak pečovat o septik a žumpu – frekvence vyvážení a péče 2026",
    "datePublished": "2026-05-01T08:00:00Z",
    "dateModified": "2026-06-04T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["péče o septik", "vyvážení žumpy", "jak často vyvážet septik", "septik žumpa rozdíl", "bakterie do septiku", "čistička odpadních vod dům"]
  }, {
    "@type": "FAQPage",
    "@id": "https://www.domovniguru.cz/blog/pece-o-septik-zumpu#faq",
    "mainEntity": [
      { "@type": "Question", "name": "Jak poznám že je žumpa nebo septik plný?", "acceptedAnswer": { "@type": "Answer", "text": "Signály plné žumpy: zpomalené odtékání vody v domácnosti, bublání v záchodech a odpadech, zápach v okolí nádrže. Zaplněný septik: voda se vrací nebo odtéká velmi pomalu, plísňový nebo shnilý zápach v blízkosti filtračního pole. Vizuální kontrola: otevři vstupní otvor a zkontroluj hladinu." } },
      { "@type": "Question", "name": "Musím mít povolení k provozu septiku nebo žumpy?", "acceptedAnswer": { "@type": "Answer", "text": "Ano — žumpa i septik musí být v souladu s místními předpisy a vodním zákonem. Žumpa musí být vodotěsná a vyvážení musí být doloženo dokladem od oprávněné firmy (při kontrole inspekce). Septik a domácí ČOV vyžadují povolení k vypouštění odpadních vod do půdy nebo vodoteče (vydává obecní úřad nebo vodoprávní úřad)." } },
      { "@type": "Question", "name": "Vyplatí se vyměnit starou žumpu za domácí ČOV?", "acceptedAnswer": { "@type": "Answer", "text": "Záleží na frekvenci vyvážení. Pokud vyvážíš žumpu 4× ročně po 2 500 Kč = 10 000 Kč/rok. Domácí ČOV pořizovací náklady 100 000–200 000 Kč, roční provoz (servis + elektřina + odvoz kalu) 5 000–8 000 Kč. Návratnost: 10–20 let. Ekologicky i provozně výhodnější — ale pořizovací investice je vysoká." } }
    ]
  }, {
    "@type": "HowTo",
    "@id": "https://www.domovniguru.cz/blog/pece-o-septik-zumpu#howto",
    "name": "Jak pečovat o septik a žumpu – frekvence vyvážení a péče 2026",
    "description": "Jak správně pečovat o septik nebo žumpu. Jak často vyvážet, co do nich nepatří, jak prodloužit životnost a kdy je čas na výměnu za moderní ČOV.",
    "step": [
      { "@type": "HowToStep", "name": "Septik vs. žumpa – jaký je rozdíl", "text": "Septik vs. žumpa – jaký je rozdíl" },
      { "@type": "HowToStep", "name": "Jak často vyvážet", "text": "Jak často vyvážet" },
      { "@type": "HowToStep", "name": "Jak pečovat o septik", "text": "Jak pečovat o septik" },
      { "@type": "HowToStep", "name": "Co do septiku a žumpy nepatří", "text": "Co do septiku a žumpy nepatří" }
    ]
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://www.domovniguru.cz/blog/pece-o-septik-zumpu#breadcrumb",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" },
      { "@type": "ListItem", "position": 3, "name": "Sezónní údržba", "item": "https://www.domovniguru.cz/blog/kategorie/sezonni-udrzba" },
      { "@type": "ListItem", "position": 4, "name": "Jak pečovat o septik a žumpu – frekvence vyvážení a péče 2026", "item": "https://www.domovniguru.cz/blog/pece-o-septik-zumpu" }
    ]
  }
  ]
};

const RELATED = [
  { title: "Příprava domu na zimu", href: "/blog/priprava-domu-na-zimu", read: "10 min" },
  { title: "Jak se zbavit vlhkosti v bytě", href: "/blog/zbavit-se-vlhkosti-v-byte", read: "7 min" },
  { title: "Jak zkontrolovat kotel před zimou", href: "/blog/zkontrolovat-kotel-pred-zimou", read: "6 min" },
  { title: "Jak přezimovat zahradní vodu", href: "/blog/prezimovat-zahradni-vodu", read: "4 min" },
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
              <span>Péče o septik a žumpu</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">🍂 Sezónní údržba</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak pečovat o septik a žumpu – frekvence vyvážení a péče</h1>
              <p className="article-lead">Zanedbaná žumpa nebo septik jsou nejdražší a nejzapáchanější problém domu. Přitom pravidelná péče stojí zlomek ceny havárie nebo pokuty od inspekce.</p>
              <div className="article-meta-row"><span>Aktualizováno: 4. června 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/pece-o-septik-zumpu" title="Jak pečovat o septik a žumpu – frekvence vyvážení a péče 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 175" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="175" fill="#f0f8ec"/>
                <text x="380" y="22" textAnchor="middle" fontSize="10" fill="#3a7e4f" fontWeight="700" letterSpacing="0.04em">SEPTIK VS. ŽUMPA VS. DOMÁCÍ ČOV – ZÁKLADNÍ ROZDÍLY</text>
                {[
                  { x:20, name:"Žumpa", icon:"🪣", desc:"Nepropustná nádrž\nna splaškovou vodu.\nBez čistění.", freq:"Dle naplnění\n1–4× ročně", pros:"Jednoduchá\nBez zápachu\nLevná instalace", cons:"Drahé vyvážení\nNutná přijezdová\ncesta pro cisterna", color:"#e07040" },
                  { x:260, name:"Septik", icon:"⚗️", desc:"3komorová nádrž.\nBakterie rozkládají\nkal, odtéká voda.", freq:"Kal 1× za 1–2 roky\nKontrola ročně", pros:"Levnější provoz\nnež žumpa\nBakterie pracují", cons:"Vyžaduje péči\nNutné přidávat\nbakterie", color:"#4a90d9" },
                  { x:500, name:"Domácí ČOV", icon:"🌊", desc:"Aktivní biologické\nčistění. Výstup čistá\nvoda do příkopu.", freq:"Servis 2× ročně\nKal 1× za 2–3 roky", pros:"Nejčistší výstup\nNejnižší provoz\nEkologické", cons:"Nejvyšší poříz.\nnáklady (80–200k)\nNutný servis", color:"#5a9e6f" },
                ].map(({x, name, icon, desc, freq, pros, cons, color}) => (
                  <g key={x} transform={`translate(${x}, 28)`}>
                    <rect x="0" y="0" width="220" height="138" rx="8" fill="#fff" stroke={color} strokeWidth="1.5"/>
                    <text x="110" y="26" textAnchor="middle" fontSize="18">{icon}</text>
                    <text x="110" y="44" textAnchor="middle" fontSize="12" fill={color} fontWeight="700">{name}</text>
                    <line x1="10" y1="50" x2="210" y2="50" stroke={color} strokeWidth="0.5" opacity="0.4"/>
                    {desc.split('\n').map((d,i) => <text key={i} x="110" y={62+i*12} textAnchor="middle" fontSize="8" fill="#4a4a40">{d}</text>)}
                    <text x="110" y="102" textAnchor="middle" fontSize="8" fill={color} fontWeight="600">Vyvážení: {freq.split('\n')[0]}</text>
                    {freq.split('\n')[1] && <text x="110" y="113" textAnchor="middle" fontSize="8" fill={color}>{freq.split('\n')[1]}</text>}
                    {pros.split('\n').map((p,i) => <text key={i} x="14" y={122+i*11} fontSize="7.5" fill="#3a7e4f">✓ {p}</text>)}
                  </g>
                ))}
                <rect y="158" width="760" height="17" fill="#d8f0d0" opacity="0.5"/>
                <text x="380" y="170" textAnchor="middle" fontSize="8" fill="#3a7e4f" fontWeight="600" letterSpacing="0.06em">🌿 ŽUMPA = VYVÁŽET PRAVIDELNĚ · SEPTIK = PŘIDÁVAT BAKTERIE · ČOV = SERVIS 2× ROČNĚ</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#rozdil">Septik vs. žumpa – jaký je rozdíl</a></li>
                <li><a href="#vyvazeni">Jak často vyvážet</a></li>
                <li><a href="#pece">Jak pečovat o septik</a></li>
                <li><a href="#nepatri">Co do septiku a žumpy nepatří</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="rozdil">
              <h2>Septik vs. žumpa – jaký je rozdíl</h2>
              <ul>
                <li><strong>Žumpa (bezodtoková jímka):</strong> Nepropustná nádrž která shromažďuje veškerou splaškovou vodu. Musí se pravidelně vyvážet. Levná na instalaci, drahá na provoz (časté vyvážení). Výtok do kanalizace zakázán.</li>
                <li><strong>Septik (tříkomorový):</strong> Nádrž kde bakterie biologicky rozkládají odpadní vodu. Přečištěná voda odtéká do půdního filtru nebo příkopu. Kal (pevná část) se vyvází méně často. Vyžaduje pravidelnou péči.</li>
                <li><strong>Domácí ČOV (čistička odpadních vod):</strong> Aktivní biologické čistění s provzdušňováním. Nejčistší výstup — přečištěná voda splňuje normy pro vypouštění do vodoteče. Nejvyšší pořizovací náklady (80–200 000 Kč), nejnižší provozní.</li>
              </ul>
            </section>

            <section id="vyvazeni">
              <h2>Jak často vyvážet</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ</th><th>Frekvence vyvážení</th><th>Signál k vyvážení</th><th>Cena vyvážení</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Žumpa</strong></td><td>Dle naplnění (1–4× ročně)</td><td>Hladina do 30 cm od víka</td><td>1 500–3 000 Kč/výjezd</td></tr>
                    <tr><td><strong>Septik – kal</strong></td><td>1× za 1–2 roky</td><td>Kal nad 1/3 objemu nádrže</td><td>2 000–5 000 Kč</td></tr>
                    <tr><td><strong>Domácí ČOV – kal</strong></td><td>1× za 2–3 roky</td><td>Dle pokynů výrobce</td><td>2 000–4 000 Kč</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Zaplněnou žumpu nebo septik neodkládej — přetečení způsobí kontaminaci půdy a studny. Pokuty od České inspekce životního prostředí mohou dosáhnout desítek tisíc korun.</div>
            </section>

            <section id="pece">
              <h2>Jak pečovat o septik</h2>
              <ul>
                <li><strong>Bakteriové přípravky:</strong> Přidávej biologické přípravky (bakterie a enzymy) 1× měsíčně do záchodu. Bakterie rozkládají organické látky a udržují septik funkční. Cena: 100–300 Kč/měsíc.</li>
                <li><strong>Roční kontrola:</strong> 1× ročně zkontroluj hladinu kalu (tyčí nebo vizuálně přes vstupní otvor). Kal nad třetinu objemu = čas na vyvážení.</li>
                <li><strong>Filtrační pole:</strong> Jednou za několik let zkontroluj funkčnost půdního filtru (perkolační test). Zanesené filtrační pole způsobí zpětné vzdouvání vody v septiku.</li>
                <li><strong>Po vyvážení:</strong> Po vyvážení přidej větší dávku bakteriového přípravku — obsah nádrže byl odstraněn spolu s bakteriemi a systém potřebuje nový start.</li>
              </ul>
            </section>

            <section id="nepatri">
              <h2>Co do septiku a žumpy nepatří</h2>
              <ul>
                <li><strong>Chemie zabíjející bakterie:</strong> Silné desinfekční prostředky (chlorové tablety, silné čističe odpadů) zabíjejí bakterie v septiku. Používej jen přípravky označené "vhodné pro septik".</li>
                <li><strong>Vlhčené ubrousky a hygienické potřeby:</strong> Nerozkládají se biologicky a ucpávají čerpadla a potrubí. Pouze toaletní papír patří do záchodu.</li>
                <li><strong>Tuky a oleje:</strong> Kuchyňské tuky tvoří plovoucí vrstvu která blokuje biologické procesy. Oleje likviduj v nádobě pro sběr tuku — nikdy do odpadu.</li>
                <li><strong>Léky:</strong> Antibiotika a jiné léky zabíjejí bakterie v septiku a kontaminují spodní vody. Léky odevzdej do lékárny.</li>
                <li><strong>Stavební odpad:</strong> Beton, barvy, ředidla, pesticidy — nic z toho nepatří do kanalizace nebo žumpy.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Jak poznám že je žumpa nebo septik plný?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Signály plné žumpy: zpomalené odtékání vody v domácnosti, bublání v záchodech a odpadech, zápach v okolí nádrže. Zaplněný septik: voda se vrací nebo odtéká velmi pomalu, plísňový nebo shnilý zápach v blízkosti filtračního pole. Vizuální kontrola: otevři vstupní otvor a zkontroluj hladinu.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Musím mít povolení k provozu septiku nebo žumpy?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ano — žumpa i septik musí být v souladu s místními předpisy a vodním zákonem. Žumpa musí být vodotěsná a vyvážení musí být doloženo dokladem od oprávněné firmy (při kontrole inspekce). Septik a domácí ČOV vyžadují povolení k vypouštění odpadních vod do půdy nebo vodoteče (vydává obecní úřad nebo vodoprávní úřad).</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Vyplatí se vyměnit starou žumpu za domácí ČOV?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Záleží na frekvenci vyvážení. Pokud vyvážíš žumpu 4× ročně po 2 500 Kč = 10 000 Kč/rok. Domácí ČOV pořizovací náklady 100 000–200 000 Kč, roční provoz (servis + elektřina + odvoz kalu) 5 000–8 000 Kč. Návratnost: 10–20 let. Ekologicky i provozně výhodnější — ale pořizovací investice je vysoká.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/pece-o-septik-zumpu" title="Jak pečovat o septik a žumpu – frekvence vyvážení a péče 2026" />

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
                <li><a href="#rozdil">Septik vs. žumpa</a></li>
                <li><a href="#vyvazeni">Jak často vyvážet</a></li>
                <li><a href="#pece">Péče o septik</a></li>
                <li><a href="#nepatri">Co tam nepatří</a></li>
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
