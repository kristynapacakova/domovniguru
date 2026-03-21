import type { Metadata } from "next";
import Link from "next/link";
import PaintCalculator from "@/app/components/PaintCalculator";
<PaintCalculator />
export const metadata: Metadata = {
  title: "Penetrace před malováním – kdy je nutná a kdy ji přeskočit? 2025",
  description: "Penetrace před malováním: kdy ji použít, kdy ji vynechat a jak ji správně nanést. Kompletní průvodce pro každý typ podkladu.",
  alternates: { canonical: "https://domovniguru.cz/blog/penetrace-pred-malovanim" },
  openGraph: { title: "Penetrace před malováním – kdy je nutná?", description: "Kdy penetraci použít, kdy ji vynechat a jak ji správně nanést.", url: "https://domovniguru.cz/blog/penetrace-pred-malovanim", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2025-01-25T08:00:00Z", modifiedTime: "2025-03-01T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Penetrace před malováním – kdy je nutná?", description: "Kompletní průvodce: kdy penetraci použít a kdy ji přeskočit." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://domovniguru.cz/blog/penetrace-pred-malovanim#article", "headline": "Penetrace před malováním – kdy je nutná a kdy ji přeskočit?", "datePublished": "2025-01-25T08:00:00Z", "dateModified": "2025-03-01T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "inLanguage": "cs", "keywords": ["penetrace před malováním", "penetrace na zeď", "kdy dát penetraci", "penetrace sádrokarton"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Malování & barvy", "item": "https://domovniguru.cz/blog/kategorie/malovani" }, { "@type": "ListItem", "position": 4, "name": "Penetrace před malováním", "item": "https://domovniguru.cz/blog/penetrace-pred-malovanim" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Musím dávat penetraci vždy před malováním?", "acceptedAnswer": { "@type": "Answer", "text": "Ne vždy. Na dobře malovanou zeď v dobrém stavu penetraci přeskočit lze. Nutná je na nové omítky, sádrokarton, po stržení tapet a na savé podklady." } }, { "@type": "Question", "name": "Jak dlouho schne penetrace?", "acceptedAnswer": { "@type": "Answer", "text": "Většina penetrací schne 2–4 hodiny. Na nových nebo velmi savých omítkách doporučujeme počkat 4–6 hodin." } }] }] };

const RELATED = [
  { title: "Jak malovat zeď – kompletní průvodce pro začátečníky", href: "/blog/jak-malovat-zed", read: "5 min" },
  { title: "Latexová vs. akrylátová barva – jaký je rozdíl?", href: "/blog/latexova-vs-akrylatova-barva", read: "4 min" },
  { title: "Jak malovat přes tmavou barvu na světlo", href: "/blog/malovat-pres-tmavou-barvu", read: "3 min" },
  { title: "Jak se zbavit plísně na zdi natrvalo", href: "/blog/jak-odstranit-plisen-na-zdi", read: "5 min" },
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
              <span>Penetrace před malováním</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování & barvy</Link>
                <span className="article-read-time">⏱ 4 min čtení</span>
              </div>
              <h1 className="article-h1">Penetrace před malováním – kdy je nutná a kdy ji přeskočit?</h1>
              <p className="article-lead">Penetrace je jedním z nejpodceňovanějších kroků při malování. Někdo ji dává vždy, někdo nikdy. Pravda je uprostřed – záleží na podkladu. Tenhle článek ti řekne přesně, kdy ji nutně potřebuješ a kdy ji klidně vynecháš.</p>
              <div className="article-meta-row"><span>Aktualizováno: 1. března 2025</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#co-je-penetrace">Co je penetrace a jak funguje</a></li>
                <li><a href="#kdy-nutna">Kdy je penetrace nutná</a></li>
                <li><a href="#kdy-preskocit">Kdy ji přeskočit lze</a></li>
                <li><a href="#druhy">Druhy penetrací</a></li>
                <li><a href="#jak-nanest">Jak penetraci nanést</a></li>
                <li><a href="#chyby">Nejčastější chyby</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="co-je-penetrace">
              <h2>Co je penetrace a jak funguje</h2>
              <p>Penetrace (neboli penetrační nátěr nebo hloubkový penetrátor) je tekutý přípravek, který se nanáší na zeď nebo strop před malováním. Obsahuje pojiva, která pronikají do povrchu podkladu a zpevňují ho.</p>
              <p>Penetrace plní tři hlavní funkce:</p>
              <ul>
                <li><strong>Zpevňuje prašné nebo křehké podklady</strong> – zabraňuje odlupování barvy</li>
                <li><strong>Sjednocuje savost podkladu</strong> – barva se vstřebává rovnoměrně, bez skvrn</li>
                <li><strong>Zlepšuje přilnavost barvy</strong> – barva lépe drží a déle vydrží</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Penetrace nezakryje nerovnosti ani barvu. Není to základní nátěr – je to přípravný krok. Vypadá jako mléčná voda a po zaschnutí je téměř neviditelná.</div>
            </section>

            <section id="kdy-nutna">
              <h2>Kdy je penetrace nutná</h2>
              <h3>Nová nebo opravená omítka</h3>
              <p>Nová omítka je velmi savá. Bez penetrace barva okamžitě zasychá v povrchu, nevytváří pevný film a spotřebuješ 2–3× více barvy. Penetrace savost sníží a vytvoří rovnoměrný podklad.</p>
              <h3>Sádrokarton</h3>
              <p>Sádrokarton má papírový povrch, který je extrémně savý. Bez penetrace barva nedrží, papír se může zvlnit nebo odtrhnout. Zde penetrace není volitelná – je povinná.</p>
              <h3>Po stržení tapet</h3>
              <p>Po stržení tapet je zeď savá, nerovnoměrná a mohou na ní zůstat zbytky lepidla. Penetrace podklad zpevní a sjednotí. Nechej zeď vyschnout alespoň 24–48 hodin před penetrací.</p>
              <h3>Prašné nebo křehké stěny</h3>
              <p>Pokud při pohlazkání zdi zůstane na ruce prach nebo se povrch drobí, penetrace je nutná. Hloubkový penetrátor (ředěný 1:5 vodou) zpevní povrch a zabrání odlupování barvy.</p>
              <h3>Po opravě tmelem nebo sádrovou hmotou</h3>
              <p>Opravená místa mají jinou savost než okolní zeď. Bez penetrace budou po malování viditelná jako tmavší nebo světlejší skvrny.</p>
              <h3>Přemalování po plísni</h3>
              <p>Po ošetření plísně fungicidním přípravkem je nutná speciální protiplísňová penetrace. Bez ní se plíseň za čas vrátí i přes novou barvu.</p>
            </section>

            <section id="kdy-preskocit">
              <h2>Kdy penetraci přeskočit lze</h2>
              <p>Na starší malované zdi v dobrém stavu – barva přiléhá, povrch není prašný, nejsou skvrny od vlhkosti – penetraci vynechat lze. Zejména pokud:</p>
              <ul>
                <li>Přemalováváš stejný typ barvy (akrylát přes akrylát, latex přes latex)</li>
                <li>Zeď je rovnoměrně nasátá a barva se nevsakuje nerovnoměrně</li>
                <li>Stěna je v místnosti s nízkou vlhkostí a bez mechanického namáhání</li>
              </ul>
              <div className="article-tip"><strong>💡 Test savosti:</strong> Kápni na zeď pár kapek vody. Pokud se voda okamžitě vstřebá (do 30 sekund), zeď je savá a penetrace je potřeba. Pokud voda zůstane na povrchu déle, savost je nízká a penetraci lze přeskočit.</div>
            </section>

            <section id="druhy">
              <h2>Druhy penetrací – která pro jaký podklad</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ penetrace</th><th>Pro jaký podklad</th><th>Příklad</th></tr></thead>
                  <tbody>
                    <tr><td>Hloubkový penetrátor</td><td>Prašné, savé omítky, sádrokarton</td><td>Primalex Penetrace, Baumit Penetrace</td></tr>
                    <tr><td>Univerzální penetrace</td><td>Běžné malované povrchy</td><td>Dulux Penetrace, HET Penetrace</td></tr>
                    <tr><td>Protiplísňová penetrace</td><td>Po výskytu plísně</td><td>Soudal Fungicidní penetrace</td></tr>
                    <tr><td>Penetrace na savé podklady</td><td>Pórobeton, cihlové zdivo</td><td>Cemix Penetrace, Weber penetrace</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="jak-nanest">
              <h2>Jak penetraci nanést – krok za krokem</h2>
              <ul>
                <li><strong>Krok 1:</strong> Zeď očisti od prachu a mastnoty</li>
                <li><strong>Krok 2:</strong> Zředí penetraci dle pokynů výrobce (obvykle 1:5 vodou pro savé podklady)</li>
                <li><strong>Krok 3:</strong> Nanes válenkem nebo štětcem jednu rovnoměrnou vrstvu</li>
                <li><strong>Krok 4:</strong> Nechej schnout dle pokynů výrobce (obvykle 2–4 hodiny)</li>
                <li><strong>Krok 5:</strong> Ověř pohmatem, zda je zeď suchá a již neprašní – pak teprve maluj</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Na velmi savé podklady (nová omítka, sádrokarton) nanes dvě vrstvy penetrace. Druhou vrstvu nanáš po zaschnutí první.</div>
              <div className="article-cta-box">
                <div className="article-cta-icon">🪣</div>
                <div>
                  <div className="article-cta-title">Kolik barvy budeš potřebovat po penetraci?</div>
                  <p className="article-cta-desc">Penetrace sníží savost podkladu a ušetří barvu. Spočítej si přesné množství naší kalkulačkou.</p>
                  <Link href="/kalkulacky/kolik-barvy" className="btn btn-black">Spustit kalkulačku barvy →</Link>
                </div>
              </div>
            </section>

            <section id="chyby">
              <h2>Nejčastější chyby při penetraci</h2>
              <h3>Malování příliš brzy po penetraci</h3>
              <p>Penetrace musí být zcela suchá. Malování na mokrou nebo nedoschlou penetraci způsobí špatnou přilnavost barvy a tvorbu bublin.</p>
              <h3>Použití špatného typu penetrace</h3>
              <p>Univerzální penetrace na velmi savou novou omítku nestačí – potřebuješ hloubkový penetrátor. Na sádrokarton nestačí základní penetrace – použij speciální penetraci pro SDK.</p>
              <h3>Přeskočení penetrace na sádrokarton</h3>
              <p>Toto je nejčastější chyba začátečníků. Výsledek: barva se nerovnoměrně vstřebá, papírový povrch se může zvlnit a na spojích desek budou viditelné skvrny.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Musím dávat penetraci vždy před malováním?", a: "Ne vždy. Na dobře malovanou zeď v dobrém stavu penetraci přeskočit lze. Nutná je na nové omítky, sádrokarton, po stržení tapet a na savé podklady." },
                  { q: "Jak dlouho schne penetrace?", a: "Většina penetrací schne 2–4 hodiny. Na nových nebo velmi savých omítkách doporučujeme počkat 4–6 hodin před nanášením barvy." },
                  { q: "Kolik vrstev penetrace nanést?", a: "Obvykle stačí jedna vrstva. Na velmi savé nebo prašné podklady lze nanést dvě vrstvy – druhou po zaschnutí první." },
                  { q: "Lze penetraci ředit vodou?", a: "Ano, většinu penetrací lze ředit vodou v poměru 1:5 až 1:10 dle výrobce. Na savé podklady použij méně zředěnou verzi." },
                ].map(({ q, a }) => (
                  <details key={q} className="faq-item">
                    <summary className="faq-q">{q}</summary>
                    <p className="faq-a">{a}</p>
                  </details>
                ))}
              </div>
            </section>

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
                <li><a href="#co-je-penetrace">Co je penetrace</a></li>
                <li><a href="#kdy-nutna">Kdy je nutná</a></li>
                <li><a href="#kdy-preskocit">Kdy přeskočit</a></li>
                <li><a href="#druhy">Druhy penetrací</a></li>
                <li><a href="#jak-nanest">Jak nanést</a></li>
                <li><a href="#chyby">Nejčastější chyby</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget sidebar-cta">
              <div style={{ fontSize: 32, marginBottom: 10 }}>🪣</div>
              <div className="sidebar-cta-title">Kalkulačka barvy</div>
              <p className="sidebar-cta-desc">Zadej plochu a dostaneš přesný počet litrů i balení.</p>
              <Link href="/kalkulacky/kolik-barvy" className="btn btn-black" style={{ width: "100%", justifyContent: "center", marginTop: 14 }}>Spustit →</Link>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/malovani" className="sidebar-cat-link">🎨 Malování & barvy<span>20 článků →</span></Link>
            </div>
          </aside>
        </div>
      </div>
      <style>{`
        .article-layout { display: grid; grid-template-columns: 1fr 280px; gap: 56px; padding: 48px 0 80px; align-items: start; }
        .article-header { margin-bottom: 32px; }
        .article-meta-top { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
        .article-cat-pill { display: inline-flex; align-items: center; height: 24px; padding: 0 12px; border-radius: 999px; border: 1px solid var(--border); background: var(--surface); font-size: 11px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--muted); text-decoration: none; transition: background 120ms; }
        .article-cat-pill:hover { background: #e8e7e2; color: var(--text); }
        .article-read-time { font-size: 12px; color: var(--muted); font-weight: 500; }
        .article-h1 { font-family: var(--font-serif); font-size: clamp(26px, 3.5vw, 40px); line-height: 1.1; font-weight: 400; letter-spacing: -0.01em; margin-bottom: 16px; }
        .article-lead { font-size: 18px; line-height: 1.65; color: var(--muted); font-weight: 300; margin-bottom: 14px; }
        .article-meta-row { display: flex; gap: 8px; font-size: 12px; color: var(--muted); font-weight: 500; }
        .toc { background: var(--surface); border-radius: 10px; padding: 20px 24px; margin-bottom: 40px; }
        .toc-label { font-size: 11px; font-weight: 700; letter-spacing: 0.10em; text-transform: uppercase; color: var(--muted); margin-bottom: 12px; }
        .toc-list { padding-left: 18px; display: flex; flex-direction: column; gap: 6px; }
        .toc-list li a { font-size: 14px; color: var(--muted); text-decoration: none; font-weight: 400; transition: color 120ms; }
        .toc-list li a:hover { color: var(--text); }
        .article-body section { margin-bottom: 48px; }
        .article-body h2 { font-family: var(--font-serif); font-size: clamp(20px, 2.5vw, 26px); font-weight: 400; line-height: 1.2; margin-bottom: 16px; border-top: 1px solid var(--border); padding-top: 24px; margin-top: 8px; }
        .article-body h3 { font-family: var(--font-sans); font-size: 16px; font-weight: 600; margin-top: 24px; margin-bottom: 10px; color: var(--text); }
        .article-body p { font-size: 16px; line-height: 1.75; color: #2a2a28; font-weight: 300; margin-bottom: 14px; }
        .article-body ul, .article-body ol { padding-left: 22px; margin-bottom: 16px; display: flex; flex-direction: column; gap: 8px; }
        .article-body li { font-size: 15px; line-height: 1.6; color: #2a2a28; font-weight: 300; }
        .article-body strong { font-weight: 600; color: var(--text); }
        .article-tip { background: #fffbeb; border-left: 3px solid #f59e0b; border-radius: 0 8px 8px 0; padding: 14px 18px; font-size: 14px; line-height: 1.6; color: #78716c; margin: 20px 0; }
        .article-cta-box { display: flex; gap: 20px; align-items: flex-start; background: var(--surface); border-radius: 12px; padding: 24px; margin: 28px 0; border: 1px solid var(--border); }
        .article-cta-icon { font-size: 36px; flex-shrink: 0; margin-top: 2px; }
        .article-cta-title { font-family: var(--font-serif); font-size: 18px; margin-bottom: 6px; font-weight: 400; }
        .article-cta-desc { font-size: 14px !important; color: var(--muted); margin-bottom: 14px !important; }
        .article-table-wrap { overflow-x: auto; margin: 16px 0 24px; }
        .article-table { width: 100%; border-collapse: collapse; font-size: 14px; line-height: 1.5; }
        .article-table th { font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); padding: 10px 14px; text-align: left; border-bottom: 2px solid var(--border); background: var(--surface); }
        .article-table td { padding: 10px 14px; border-bottom: 1px solid var(--border); vertical-align: top; color: #2a2a28; font-weight: 300; }
        .article-table tr:last-child td { border-bottom: none; }
        .faq-list { display: flex; flex-direction: column; gap: 8px; }
        .faq-item { border: 1px solid var(--border); border-radius: 10px; overflow: hidden; background: #fff; }
        .faq-q { font-size: 15px; font-weight: 600; padding: 16px 20px; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; transition: background 120ms; }
        .faq-q:hover { background: var(--surface); }
        .faq-q::after { content: "+"; font-size: 18px; font-weight: 300; flex-shrink: 0; margin-left: 12px; }
        details[open] .faq-q::after { content: "−"; }
        .faq-a { font-size: 14px; line-height: 1.65; color: var(--muted); font-weight: 300; padding: 0 20px 16px; }
        .related-section { margin-top: 56px; }
        .related-section h2 { font-family: var(--font-serif); font-size: 22px; font-weight: 400; margin-bottom: 20px; padding-top: 24px; border-top: 1px solid var(--border); }
        .related-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .article-sidebar { position: sticky; top: 80px; display: flex; flex-direction: column; gap: 16px; }
        .sidebar-widget { background: #fff; border: 1px solid var(--border); border-radius: 12px; padding: 20px; }
        .sidebar-widget-title { font-size: 10px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); margin-bottom: 14px; }
        .sidebar-toc { list-style: none; display: flex; flex-direction: column; gap: 8px; }
        .sidebar-toc li a { font-size: 13px; color: var(--muted); text-decoration: none; font-weight: 400; transition: color 120ms; line-height: 1.4; display: block; }
        .sidebar-toc li a:hover { color: var(--text); }
        .sidebar-cta { background: var(--surface); border-color: transparent; }
        .sidebar-cta-title { font-family: var(--font-serif); font-size: 17px; font-weight: 400; margin-bottom: 6px; }
        .sidebar-cta-desc { font-size: 13px; color: var(--muted); font-weight: 300; line-height: 1.5; }
        .sidebar-cat-link { display: flex; justify-content: space-between; align-items: center; font-size: 14px; font-weight: 500; color: var(--text); text-decoration: none; padding: 8px 0; border-bottom: 1px solid var(--border); transition: color 120ms; }
        .sidebar-cat-link:hover { color: var(--muted); }
        .sidebar-cat-link span { font-size: 12px; color: var(--muted); }
        @media (max-width: 960px) { .article-layout { grid-template-columns: 1fr; gap: 0; } .article-sidebar { position: static; margin-top: 40px; } .related-grid { grid-template-columns: 1fr; } }
        @media (max-width: 600px) { .article-cta-box { flex-direction: column; gap: 12px; } .article-layout { padding: 32px 0 60px; } }
      `}</style>
    </>
  );
}
