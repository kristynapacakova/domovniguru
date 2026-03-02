import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak odvzdušnit radiátor – krok za krokem za 10 minut 2025",
  description: "Radiátor studený nahoře a teplý dole? Vzduch v systému. Odvzdušnění zvládneš sám za 10 minut s jedním nástrojem. Návod krok za krokem.",
  alternates: { canonical: "https://domovniguru.cz/blog/jak-odvzdusit-radiatory" },
  openGraph: { title: "Jak odvzdušnit radiátor – krok za krokem za 10 minut", description: "Vzduch v radiátoru způsobuje studené místo nahoře. Odvzdušnění za 10 minut.", url: "https://domovniguru.cz/blog/jak-odvzdusit-radiatory", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2025-09-15T08:00:00Z", modifiedTime: "2025-03-01T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak odvzdušnit radiátor – za 10 minut", description: "Studený radiátor nahoře? Odvzdušni ho sám za 10 minut." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://domovniguru.cz/blog/jak-odvzdusit-radiatory#article", "headline": "Jak odvzdušnit radiátor – krok za krokem za 10 minut", "datePublished": "2025-09-15T08:00:00Z", "dateModified": "2025-03-01T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "inLanguage": "cs", "keywords": ["odvzdušnit radiátor", "studený radiátor nahoře", "odvzdušnění topení", "vzduch v radiátoru"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Sezónní údržba", "item": "https://domovniguru.cz/blog/kategorie/sezonni-udrzba" }, { "@type": "ListItem", "position": 4, "name": "Jak odvzdušnit radiátor", "item": "https://domovniguru.cz/blog/jak-odvzdusit-radiatory" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jak poznám, že radiátor potřebuje odvzdušnění?", "acceptedAnswer": { "@type": "Answer", "text": "Radiátor je studený nahoře, ale teplý dole. Při puštění topení slyšíš bublání nebo kloktání. Radiátor hřeje nerovnoměrně." } }, { "@type": "Question", "name": "Jak často odvzdušňovat radiátory?", "acceptedAnswer": { "@type": "Answer", "text": "Jednou ročně na začátku topné sezony, ideálně v září nebo říjnu. Pokud slyšíš bublání nebo jsou radiátory studené nahoře, odvzdušni je ihned." } }] }] };

const RELATED = [
  { title: "Jak připravit dům na zimu – kompletní checklist", href: "/blog/jak-pripravit-dum-na-zimu", read: "5 min" },
  { title: "Jak utěsnit okna na zimu", href: "/blog/jak-utesnit-okna-na-zimu", read: "4 min" },
  { title: "LED vs. žárovky – co se skutečně vyplatí?", href: "/blog/led-vs-zarovky", read: "4 min" },
  { title: "Jak vyměnit vypínač – krok za krokem", href: "/blog/jak-vymenit-vypinac", read: "4 min" },
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
              <span>Jak odvzdušnit radiátor</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">❄️ Sezónní údržba</Link>
                <span className="article-read-time">⏱ 3 min čtení</span>
              </div>
              <h1 className="article-h1">Jak odvzdušnit radiátor – krok za krokem za 10 minut</h1>
              <p className="article-lead">Platíš za topení a radiátor je nahoře studený? Vzduch uvězněný v systému blokuje cirkulaci teplé vody. Odvzdušnění je práce na 10 minut, nepotřebuješ skoro nic a ušetříš stovky korun ročně.</p>
              <div className="article-meta-row"><span>Aktualizováno: 1. března 2025</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#proc">Proč vzduch v radiátoru vadí</a></li>
                <li><a href="#poznam">Jak poznám, že je potřeba odvzdušnit</a></li>
                <li><a href="#co-potrebujes">Co budeš potřebovat</a></li>
                <li><a href="#postup">Postup odvzdušnění krok za krokem</a></li>
                <li><a href="#po-odvzduseni">Co udělat po odvzdušnění</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="proc">
              <h2>Proč vzduch v radiátoru vadí</h2>
              <p>Horká voda z kotle cirkuluje celým topným systémem. Vzduch je lehčí než voda a hromadí se v nejvyšším bodě radiátoru – nahoře. Tato vzduchová kapsa blokuje průtok vody a radiátor hřeje jen v části, kde voda proudí.</p>
              <p>Výsledek: platíš za topení, ale radiátor nevydává plný výkon. Kotel musí pracovat více, aby dosáhl požadované teploty. Podle odhadů může vzduch v radiátorech zvýšit spotřebu energie o 10–15 %.</p>
            </section>

            <section id="poznam">
              <h2>Jak poznám, že je potřeba odvzdušnit</h2>
              <ul>
                <li><strong>Radiátor je studený nahoře, teplý dole</strong> – nejjistější příznak vzduchu v systému</li>
                <li><strong>Bublání nebo kloktání</strong> při zapnutém topení – zvuk proudění vody kolem vzduchové kapsy</li>
                <li><strong>Radiátor hřeje nerovnoměrně</strong> – různé teploty v různých částech</li>
                <li><strong>Topení se zdá méně účinné</strong> než v předchozích letech</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Zkontroluj všechny radiátory najednou – vzduch se hromadí zejména v radiátorech v nejvyšším podlaží a na konci topné větve.</div>
            </section>

            <section id="co-potrebujes">
              <h2>Co budeš potřebovat</h2>
              <ul>
                <li><strong>Odvzdušňovací klíč</strong> – malý čtyřhranný nebo šestihranný klíč, který sedí do odvzdušňovacího ventilu. Stojí 20–50 Kč v každém hobbymarketu nebo ho dostaneš k radiátoru zdarma.</li>
                <li><strong>Hadřík nebo nádoba</strong> – zachytí pár kapek vody, která vytekne po vzduchu</li>
                <li><strong>Papírové utěrky</strong> pro jistotu</li>
              </ul>
            </section>

            <section id="postup">
              <h2>Postup odvzdušnění krok za krokem</h2>
              <h3>Krok 1: Zapni topení a nechej ho zahřát</h3>
              <p>Topení musí být zapnuté a teplá voda musí cirkulovat systémem. Nechej ho běžet 15–20 minut, než začneš odvzdušňovat.</p>
              <h3>Krok 2: Připrav se</h3>
              <p>Pod odvzdušňovací ventil (je v rohu radiátoru nahoře, vypadá jako malá čepička se čtvercovým nebo šestihranným otvorem) polož hadřík nebo nastav nádobu.</p>
              <h3>Krok 3: Otevři ventil</h3>
              <p>Zasuň odvzdušňovací klíč do ventilu a pomalu otočí proti směru hodinových ručiček – stačí čtvrt až půl otáčky. Uslyšíš syčení unikajícího vzduchu.</p>
              <div className="article-tip"><strong>⚠️ Pozor:</strong> Neotáčej příliš – ventil nemusíš celý vyšroubovat. Malá skulinka stačí na únik vzduchu.</div>
              <h3>Krok 4: Počkej, až začne téct voda</h3>
              <p>Nejdřív uniká vzduch (slyšíš syčení), pak směs vzduchu a vody, nakonec čistá voda. Jakmile z ventilu teče rovnoměrně voda bez bublin – zavři ventil.</p>
              <h3>Krok 5: Zavři ventil</h3>
              <p>Otočí klíčem zpět po směru hodinových ručiček. Neutahuj silou – ventil se snadno poškodí. Stačí pevně dotáhnout prsty.</p>
              <h3>Krok 6: Opakuj u všech radiátorů</h3>
              <p>Odvzdušni všechny radiátory v domě, ideálně od nejvyššího podlaží dolů.</p>
            </section>

            <section id="po-odvzduseni">
              <h2>Co udělat po odvzdušnění</h2>
              <h3>Zkontroluj tlak v kotli</h3>
              <p>Po odvzdušnění radiátorů se sníží tlak v topném systému – voda vytekla a nahradila vzduch. Zkontroluj manometr na kotli. Tlak by měl být 1,5–2 bar (při studeném systému). Pokud je nižší, dotlakuj systém dle návodu ke kotli (obvykle je na kotli kohout pro dotlakování).</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud po odvzdušnění musíš systém často dotlakovat (více než 1× za měsíc), pravděpodobně je někde malý únik. Zavolej topenáře.</div>
              <h3>Zkontroluj teplotu radiátorů</h3>
              <p>Po 15–20 minutách zkontroluj dlaní celou plochu každého odvzdušněného radiátoru. Měl by být rovnoměrně teplý od spodu nahoru. Pokud nahoře stále studený – odvzdušnění nebylo úplné, zopakuj.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jak poznám, že radiátor potřebuje odvzdušnění?", a: "Radiátor je studený nahoře, ale teplý dole. Při puštění topení slyšíš bublání nebo kloktání. Radiátor hřeje nerovnoměrně." },
                  { q: "Jak často odvzdušňovat radiátory?", a: "Jednou ročně na začátku topné sezony, ideálně v září nebo říjnu. Pokud slyšíš bublání nebo jsou radiátory studené nahoře, odvzdušni je ihned." },
                  { q: "Co když z ventilu nevychází vzduch, jen voda?", a: "Radiátor vzduch neobsahuje a odvzdušnění není potřeba. Zavři ventil a zkontroluj jiný radiátor." },
                  { q: "Co dělat, když se ventil točí ale nic nevychází?", a: "Ventil může být zanesený. Zkus ho otočit o trochu více – ale opatrně. Pokud stále nic, zavolej topenáře." },
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
                <li><a href="#proc">Proč vzduch vadí</a></li>
                <li><a href="#poznam">Jak poznám problém</a></li>
                <li><a href="#co-potrebujes">Co potřebuješ</a></li>
                <li><a href="#postup">Postup krok za krokem</a></li>
                <li><a href="#po-odvzduseni">Po odvzdušnění</a></li>
                <li><a href="#faq">Časté otázky</a></li>
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
        .sidebar-cat-link { display: flex; justify-content: space-between; align-items: center; font-size: 14px; font-weight: 500; color: var(--text); text-decoration: none; padding: 8px 0; border-bottom: 1px solid var(--border); transition: color 120ms; }
        .sidebar-cat-link:hover { color: var(--muted); }
        .sidebar-cat-link span { font-size: 12px; color: var(--muted); }
        @media (max-width: 960px) { .article-layout { grid-template-columns: 1fr; gap: 0; } .article-sidebar { position: static; margin-top: 40px; } .related-grid { grid-template-columns: 1fr; } }
        @media (max-width: 600px) { .article-layout { padding: 32px 0 60px; } }
      `}</style>
    </>
  );
}
