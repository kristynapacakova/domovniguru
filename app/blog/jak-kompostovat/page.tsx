import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak kompostovat doma a na zahradě – průvodce pro začátečníky 2025",
  description: "Kompostování krok za krokem: co patří do kompostu, co ne, jak vrstvit, jak urychlit. Kompost za 3 měsíce místo roku.",
  alternates: { canonical: "https://domovniguru.cz/blog/jak-kompostovat" },
  openGraph: { title: "Jak kompostovat doma a na zahradě", description: "Co do kompostu patří, co ne, jak urychlit zrání.", url: "https://domovniguru.cz/blog/jak-kompostovat", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2025-02-15T08:00:00Z", modifiedTime: "2025-03-01T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak kompostovat", description: "Průvodce kompostováním pro začátečníky." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", "@id": "https://domovniguru.cz/blog/jak-kompostovat#article", "headline": "Jak kompostovat doma a na zahradě", "datePublished": "2025-02-15T08:00:00Z", "dateModified": "2025-03-01T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "inLanguage": "cs" },
    { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Zahrada & terasa", "item": "https://domovniguru.cz/blog/kategorie/zahrada" }, { "@type": "ListItem", "position": 4, "name": "Jak kompostovat", "item": "https://domovniguru.cz/blog/jak-kompostovat" }] },
    { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jak dlouho zraje kompost?", "acceptedAnswer": { "@type": "Answer", "text": "Při správném vrstvení a pravidelném obracení 3–6 měsíců. Bez obracení a péče i 12–18 měsíců. Hotový kompost je tmavý, sypký, voní jako lesní půda." } }, { "@type": "Question", "name": "Co nesmí do kompostu?", "acceptedAnswer": { "@type": "Answer", "text": "Maso, ryby, kosti, mléčné výrobky, oleje, nemocné rostliny, plevel se semeny, popel z uhlí, psí nebo kočičí výkaly, barevný papír a lepenka s tiskem." } }] },
  ],
};

const RELATED = [
  { title: "Jak se zbavit plevele bez chemie", href: "/blog/zbavit-se-plevele-bez-chemie", read: "4 min" },
  { title: "Jak postavit vyvýšený záhon", href: "/blog/vyvyseny-zahon-postup", read: "6 min" },
  { title: "Jak připravit zahradu na jaro", href: "/blog/jarni-zahrada", read: "6 min" },
  { title: "Jak sekat trávník správně", href: "/blog/jak-sekat-travnik", read: "4 min" },
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
              <span>Jak kompostovat</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 4 min čtení</span>
              </div>
              <h1 className="article-h1">Jak kompostovat doma a na zahradě – průvodce pro začátečníky</h1>
              <p className="article-lead">
                Kompostování je nejjednodušší způsob, jak proměnit kuchyňský a zahradní odpad v nejlepší hnojivo, které existuje. Nepotřebuješ nic koupit – stačí správně vrstvit a čekat.
              </p>
              <div className="article-meta-row">
                <span>Aktualizováno: 1. března 2025</span><span>·</span><span>DomovniGuru</span>
              </div>
            </header>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#kompostnik">Výběr kompostéru</a></li>
                <li><a href="#co-patri">Co patří do kompostu</a></li>
                <li><a href="#co-nepatri">Co do kompostu nepatří</a></li>
                <li><a href="#vrstveni">Jak správně vrstvit</a></li>
                <li><a href="#urychlit">Jak urychlit zrání</a></li>
                <li><a href="#hotovy">Jak poznat hotový kompost</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="kompostnik">
              <h2>Výběr kompostéru</h2>

              <h3>Zahradní kompostér (venkovní)</h3>
              <p>
                Plastový nebo dřevěný box 300–1000 litrů. Nejpopulárnější varianta pro zahrady. Plastové kompostéry drží teplo lépe a urychlují zrání. Dřevěné jsou ekologičtější a lépe vypadají.
                Cena: 300–1500 Kč, nebo si postav vlastní ze dřevěných palet zdarma.
              </p>

              <h3>Kompostér pro byt (vermikompostér)</h3>
              <p>
                Vermikompostér (červí kompostér) je uzavřená nádoba s žížalami, která nemá zápach a vejde se pod dřez.
                Žížaly zpracují kuchyňský odpad za 2–4 týdny na tekuté hnojivo a vermikompost.
                Ideální pro lidi bez zahrady. Cena: 800–2500 Kč nebo DIY z plastových nádob.
              </p>

              <h3>Bokashi</h3>
              <p>
                Japonská metoda fermentace v uzavřené nádobě s pomocí mikroorganismů. Zpracuje i maso a mléčné výrobky. Výsledek není ještě hotový kompost – musí se zakopat do půdy nebo přidat do klasického kompostu.
              </p>
            </section>

            <section id="co-patri">
              <h2>Co patří do kompostu</h2>
              <p>Kompost potřebuje mix <strong>zelených (dusíkatých)</strong> a <strong>hnědých (uhlíkatých)</strong> materiálů v poměru přibližně 1:3.</p>

              <h3>Zelené materiály (dusík)</h3>
              <ul>
                <li>Kuchyňský odpad – slupky ze zeleniny a ovoce, kávová sedlina, čajové sáčky</li>
                <li>Čerstvě posečená tráva</li>
                <li>Čerstvé rostlinné zbytky ze zahrady</li>
                <li>Chleba a obiloviny (v malém množství)</li>
              </ul>

              <h3>Hnědé materiály (uhlík)</h3>
              <ul>
                <li>Suché listí, sláma, seno</li>
                <li>Dřevní štěpka, pilin</li>
                <li>Trhané noviny a karton (bez lesklého tisku)</li>
                <li>Větve nasekané na kousky</li>
                <li>Dřevní popel (v malém množství)</li>
              </ul>
            </section>

            <section id="co-nepatri">
              <h2>Co do kompostu nepatří</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Co nepatří</th><th>Proč</th></tr></thead>
                  <tbody>
                    <tr><td>Maso, ryby, kosti</td><td>Přitahují hlodavce, zapáchají</td></tr>
                    <tr><td>Mléčné výrobky, oleje</td><td>Zapáchají, zpomalují zrání</td></tr>
                    <tr><td>Nemocné rostliny</td><td>Choroby přežijí kompostování</td></tr>
                    <tr><td>Plevel se semeny</td><td>Semena přežijí a vyklíčí v záhonu</td></tr>
                    <tr><td>Popel z uhlí</td><td>Obsahuje škodlivé látky</td></tr>
                    <tr><td>Psí/kočičí výkaly</td><td>Patogeny nebezpečné pro zdraví</td></tr>
                    <tr><td>Barevný tisk, lepenka</td><td>Obsahuje těžké kovy z tiskových barev</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="vrstveni">
              <h2>Jak správně vrstvit kompost</h2>
              <p>Vrstvení je klíč k rychlému zrání bez zápachu:</p>
              <ul>
                <li><strong>Spodní vrstva (10–15 cm):</strong> Hrubé větvičky nebo štěpka – zajistí provzdušnění zdola.</li>
                <li><strong>Zelená vrstva (5–8 cm):</strong> Kuchyňský odpad, tráva, čerstvé zbytky.</li>
                <li><strong>Hnědá vrstva (10–15 cm):</strong> Listí, noviny, sláma – vždy více hnědého než zeleného.</li>
                <li><strong>Opakuj:</strong> Zelená → hnědá → zelená → hnědá…</li>
              </ul>
              <div className="article-tip">
                <strong>💡 Tip:</strong> Po každém přidání kuchyňského odpadu ho zakryj vrstvou hnědého materiálu. Zabráníš zápachu a odradíš mouchy.
              </div>
            </section>

            <section id="urychlit">
              <h2>Jak urychlit zrání kompostu</h2>
              <ul>
                <li><strong>Obracení kompostu</strong> – každé 2–4 týdny přehoď kompost vidlemi nebo lopatou. Přísun kyslíku nastartuje mikroorganismy. Toto je nejúčinnější způsob.</li>
                <li><strong>Správná vlhkost</strong> – kompost má být vlhký jako vyždímaná houba. Příliš suchý nezraje, příliš mokrý zapáchá. V suchu zalij.</li>
                <li><strong>Drobné kousky</strong> – čím menší kousky, tím rychleji se rozkládají. Větvičky nasekej, listí podrtí sekačkou.</li>
                <li><strong>Kompostový urychlovač</strong> – přípravky s mikroorganismy nebo dusíkatými látkami zkrátí zrání o 30–50 %.</li>
                <li><strong>Přidej hlíny</strong> – hrst zahradní hlíny přinese mikroorganismy a urychlí start.</li>
              </ul>
            </section>

            <section id="hotovy">
              <h2>Jak poznat hotový kompost</h2>
              <p>Hotový kompost (tzv. zralý kompost nebo humus) poznáš takto:</p>
              <ul>
                <li><strong>Barva:</strong> tmavě hnědá až černá</li>
                <li><strong>Struktura:</strong> sypká, drobtovitá, bez velkých kusů</li>
                <li><strong>Vůně:</strong> příjemně zemitá, jako les po dešti</li>
                <li><strong>Původní materiály:</strong> nejsou rozpoznatelné (výjimka: silnější větve)</li>
              </ul>
              <p>Použití: přidej 5–10 cm na povrch záhonu jako mulč, zaprax do půdy při výsadbě nebo smíchej se zahradní zeminou v poměru 1:3.</p>
              <div className="article-tip">
                <strong>💡 Tip:</strong> Nezralý kompost (příliš čerstvý, ještě tepný) poškodí kořeny rostlin. Pokud si nejsi jistý zralostí, nechej ho ještě 4–6 týdnů dolehnout.
              </div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jak dlouho zraje kompost?", a: "Při správném vrstvení a pravidelném obracení 3–6 měsíců. Bez obracení a péče i 12–18 měsíců. Hotový kompost je tmavý, sypký, voní jako lesní půda." },
                  { q: "Co nesmí do kompostu?", a: "Maso, ryby, kosti, mléčné výrobky, oleje, nemocné rostliny, plevel se semeny, popel z uhlí, psí nebo kočičí výkaly, barevný papír a lepenka s tiskem." },
                  { q: "Kompost zapáchá – co s tím?", a: "Příčina je obvykle příliš mnoho zeleného materiálu nebo nedostatek vzduchu. Přidej hnědý materiál (listí, noviny), přehoď kompost vidlemi a zkontroluj vlhkost." },
                  { q: "Lze kompostovat v bytě?", a: "Ano – vermikompostér (červí kompostér) nebo bokashi fermenter fungují bez zápachu v bytě. Zpracují kuchyňský odpad za 2–4 týdny." },
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
                <li><a href="#kompostnik">Výběr kompostéru</a></li>
                <li><a href="#co-patri">Co patří do kompostu</a></li>
                <li><a href="#co-nepatri">Co nepatří</a></li>
                <li><a href="#vrstveni">Jak vrstvit</a></li>
                <li><a href="#urychlit">Jak urychlit</a></li>
                <li><a href="#hotovy">Hotový kompost</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget sidebar-cta">
              <div style={{ fontSize: 32, marginBottom: 10 }}>🌱</div>
              <div className="sidebar-cta-title">Vyvýšený záhon</div>
              <p className="sidebar-cta-desc">Postav si záhon za víkend a dej do něj svůj čerstvý kompost.</p>
              <Link href="/blog/vyvseny-zahon-postup" className="btn btn-black" style={{ width: "100%", justifyContent: "center", marginTop: 14 }}>Číst článek →</Link>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/zahrada" className="sidebar-cat-link">🌿 Zahrada & terasa<span>20 článků →</span></Link>
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
      `}</style>
    </>
  );
}
