import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak vyměnit vypínač – krok za krokem bez elektrikáře 2025",
  description: "Výměna vypínače světla svépomocí: bezpečný postup krok za krokem, co potřebuješ a jak se vyhnout chybám. Hotovo za 20 minut.",
  alternates: { canonical: "https://domovniguru.cz/blog/jak-vymenit-vypinac" },
  openGraph: { title: "Jak vyměnit vypínač – krok za krokem bez elektrikáře", description: "Bezpečný postup výměny vypínače svépomocí. Hotovo za 20 minut.", url: "https://domovniguru.cz/blog/jak-vymenit-vypinac", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2025-02-05T08:00:00Z", modifiedTime: "2025-03-01T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak vyměnit vypínač – krok za krokem", description: "Bezpečný postup výměny vypínače svépomocí za 20 minut." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://domovniguru.cz/blog/jak-vymenit-vypinac#article", "headline": "Jak vyměnit vypínač – krok za krokem bez elektrikáře", "datePublished": "2025-02-05T08:00:00Z", "dateModified": "2025-03-01T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "inLanguage": "cs", "keywords": ["jak vyměnit vypínač", "výměna vypínače", "vypínač světla postup", "elektrika svépomocí"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Elektrika & osvětlení", "item": "https://domovniguru.cz/blog/kategorie/elektrika" }, { "@type": "ListItem", "position": 4, "name": "Jak vyměnit vypínač", "item": "https://domovniguru.cz/blog/jak-vymenit-vypinac" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Je výměna vypínače bezpečná svépomocí?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, pokud dodržíš základní pravidlo: před prací vždy vypni jistič a ověř zkoušečkou, že vedení není pod napětím. Výměna samotného vypínače (ne instalace nového vedení) je pro laika bezpečná." } }, { "@type": "Question", "name": "Kdy je nutný elektrikář?", "acceptedAnswer": { "@type": "Answer", "text": "Elektrikář je nutný při instalaci nového vedení, přidávání nových okruhů, práci v rozvaděči nebo pokud si nejsi jistý zapojením. Samotnou výměnu 1:1 zvládneš sám." } }] }] };

const RELATED = [
  { title: "LED vs. žárovky – co se skutečně vyplatí?", href: "/blog/led-vs-zarovky", read: "4 min" },
  { title: "Jak vyměnit zásuvku – bezpečně bez elektrikáře", href: "/blog/vymena-zasuvky", read: "4 min" },
  { title: "Jak odvzdušnit radiátory", href: "/blog/jak-odvzdusit-radiatory", read: "3 min" },
  { title: "Jak utěsnit okna na zimu", href: "/blog/jak-utesnit-okna-na-zimu", read: "4 min" },
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
              <Link href="/blog/kategorie/elektrika">Elektrika & osvětlení</Link><span className="breadcrumb-sep">/</span>
              <span>Jak vyměnit vypínač</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">💡 Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 4 min čtení</span>
              </div>
              <h1 className="article-h1">Jak vyměnit vypínač – krok za krokem bez elektrikáře</h1>
              <p className="article-lead">Rozbil se vypínač nebo chceš modernější design? Výměna vypínače je jedna z mála elektrikářských prací, které bezpečně zvládneš sám – pokud dodržíš základní pravidla. Hotovo za 20 minut.</p>
              <div className="article-meta-row"><span>Aktualizováno: 1. března 2025</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#bezpecnost">Bezpečnost na prvním místě</a></li>
                <li><a href="#co-potrebujes">Co budeš potřebovat</a></li>
                <li><a href="#postup">Postup výměny krok za krokem</a></li>
                <li><a href="#typy">Typy vypínačů a jejich zapojení</a></li>
                <li><a href="#problemy">Časté problémy a jejich řešení</a></li>
                <li><a href="#kdy-elektrikar">Kdy zavolat elektrikáře</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="bezpecnost">
              <h2>Bezpečnost na prvním místě</h2>
              <p>Elektřina je nebezpečná. Než začneš cokoliv dělat, musíš dodržet tato pravidla:</p>
              <ul>
                <li><strong>Vždy vypni jistič</strong> – ne jen vypínač na stěně. Jdi k rozvaděči a vypni příslušný jistič (nebo hlavní jistič, pokud si nejsi jistý který)</li>
                <li><strong>Ověř zkoušečkou</strong> – i po vypnutí jističe ověř zkoušečkou napětí, že vedení není pod proudem. Zkoušečka stojí 50–200 Kč a je to nutná investice</li>
                <li><strong>Nikdy nepracuj s mokrýma rukama</strong></li>
                <li><strong>Pracuj sám</strong> – druhá osoba by mohla neúmyslně zapnout jistič zpět</li>
              </ul>
              <div className="article-tip"><strong>⚠️ Důležité:</strong> Pokud si nejsi jistý zapojením nebo najdeš více drátů, než očekáváš, zavolej elektrikáře. Výměna vypínače stojí elektrikáře 500–1000 Kč. Chyba v elektroinstalaci může stát víc.</div>
            </section>

            <section id="co-potrebujes">
              <h2>Co budeš potřebovat</h2>
              <ul>
                <li><strong>Nový vypínač</strong> – stejný typ jako stávající (jednopólový, sériový, křížový – viz sekce typy). Cena: 80–400 Kč</li>
                <li><strong>Šroubovák plochý a křížový</strong> (malý, elektrikářský)</li>
                <li><strong>Zkoušečka napětí</strong> – fázová nebo bezkontaktní</li>
                <li><strong>Případně kleště na dráty</strong></li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Vyfotografuj staré zapojení před odpojením drátů. Pokud se spleteš, fotka ti ukáže, co bylo kde.</div>
            </section>

            <section id="postup">
              <h2>Postup výměny krok za krokem</h2>
              <h3>Krok 1: Vypni jistič a ověř napětí</h3>
              <p>Jdi k rozvaděči a vypni jistič příslušného okruhu. Přejdi k vypínači a zkoušečkou ověř, že není pod napětím. Pokud zkoušečka svítí – jistič je špatný nebo máš v krabičce více okruhů.</p>
              <h3>Krok 2: Sejmi kryty</h3>
              <p>Většina moderních vypínačů má kryt, který jde sundat prsty nebo šroubovákem. Pod krytem najdeš rámeček uchycený šrouby nebo klipy. Sejmi rámeček a dostaneš se ke krabičce ve zdi.</p>
              <h3>Krok 3: Vyšroubuj a vytáhni staré těleso</h3>
              <p>Těleso vypínače je přichyceno dvěma šrouby. Vyšroubuj je a opatrně vytáhni těleso ze zdi. Dráty zůstanou připojeny.</p>
              <h3>Krok 4: Vyfotografuj zapojení</h3>
              <p>Než odpojíš jakýkoli drát, vyfotografuj nebo nakresli, který drát je zapojen do které svorky. Označení svorek (L, N, L1, L2...) se může lišit model od modelu.</p>
              <h3>Krok 5: Odpoj dráty ze starého vypínače</h3>
              <p>Uvolni šrouby svorek nebo zmáčkni pružinové svorky a vytáhni dráty. Zkontroluj stav drátů – pokud jsou spálené nebo popraskané, kontaktuj elektrikáře.</p>
              <h3>Krok 6: Zapoj dráty do nového vypínače</h3>
              <p>Zasuň dráty do správných svorek nového vypínače dle fotky nebo schématu v návodu. Utáhni svorky – drát musí sedět pevně, nesmí se pohybovat.</p>
              <h3>Krok 7: Usaď vypínač a sestav</h3>
              <p>Složi dráty do krabičky ve zdi, usaď těleso, přišroubuj, nasaď rámeček a kryt. Zapni jistič a otestuj.</p>
            </section>

            <section id="typy">
              <h2>Typy vypínačů a jejich zapojení</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ</th><th>Označení</th><th>Použití</th><th>Počet drátů</th></tr></thead>
                  <tbody>
                    <tr><td>Jednopólový</td><td>č. 1</td><td>Ovládání světla z jednoho místa</td><td>2</td></tr>
                    <tr><td>Sériový</td><td>č. 5</td><td>Dva okruhy světel v jednom vypínači</td><td>3</td></tr>
                    <tr><td>Střídavý</td><td>č. 6</td><td>Ovládání světla ze dvou míst</td><td>3</td></tr>
                    <tr><td>Křížový</td><td>č. 7</td><td>Ovládání ze tří a více míst</td><td>4</td></tr>
                    <tr><td>Tlačítko</td><td>č. 1/0</td><td>Zvonky, časové relé</td><td>2</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Typ vypínače najdeš na štítku na starém tělese nebo v krabičce ve zdi. Nový vypínač musí být stejného typu – záměna typů způsobí nefunkčnost nebo poškození.</div>
            </section>

            <section id="problemy">
              <h2>Časté problémy a jejich řešení</h2>
              <h3>Vypínač po výměně nefunguje</h3>
              <p>Zkontroluj: jsou dráty správně v svorkách? Je zapnut jistič? Zkontroluj zapojení dle fotky nebo schématu. Pokud problém přetrvává, zavolej elektrikáře.</p>
              <h3>Jistič ihned vypadne po zapnutí</h3>
              <p>Zkratovalo vedení – pravděpodobně se dotýkají dva dráty. Vypni jistič a zkontroluj, zda někde dráty nesvítí na zkrat. Volej elektrikáře.</p>
              <h3>V krabičce je víc drátů, než čekám</h3>
              <p>Krabička může obsahovat dráty pro více okruhů nebo propojení. Nesnaž se to řešit sám – zavolej elektrikáře.</p>
            </section>

            <section id="kdy-elektrikar">
              <h2>Kdy zavolat elektrikáře</h2>
              <ul>
                <li>Pokud najdeš spálené nebo popraskané dráty</li>
                <li>Pokud v krabičce vidíš více drátů, než odpovídá typu vypínače</li>
                <li>Pokud si nejsi jistý zapojením</li>
                <li>Pokud jistič vypadne ihned po zapnutí</li>
                <li>Pokud instaluješ nový okruh (ne jen výměna 1:1)</li>
                <li>Pokud pracuješ v koupelně nebo mokrém prostředí</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Je výměna vypínače bezpečná svépomocí?", a: "Ano, pokud dodržíš základní pravidlo: před prací vždy vypni jistič a ověř zkoušečkou, že vedení není pod napětím. Výměna samotného vypínače (ne instalace nového vedení) je pro laika bezpečná." },
                  { q: "Kdy je nutný elektrikář?", a: "Elektrikář je nutný při instalaci nového vedení, přidávání nových okruhů, práci v rozvaděči nebo pokud si nejsi jistý zapojením. Samotnou výměnu 1:1 zvládneš sám." },
                  { q: "Jak dlouho trvá výměna vypínače?", a: "Zkušenému člověku 10–15 minut. Prvnímu výměně věnuj klidně 30–45 minut – nespěchej, bezpečnost je důležitější než rychlost." },
                  { q: "Potřebuji speciální nářadí?", a: "Stačí šroubovák (plochý a křížový) a zkoušečka napětí. Zkoušečka je nutnost – bez ní nevíš, zda je vedení bezpečně vypnuté." },
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
                    <div className="card-eyebrow-row"><span>Elektrika & osvětlení</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#bezpecnost">Bezpečnost</a></li>
                <li><a href="#co-potrebujes">Co potřebuješ</a></li>
                <li><a href="#postup">Postup krok za krokem</a></li>
                <li><a href="#typy">Typy vypínačů</a></li>
                <li><a href="#problemy">Časté problémy</a></li>
                <li><a href="#kdy-elektrikar">Kdy zavolat elektrikáře</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/elektrika" className="sidebar-cat-link">💡 Elektrika & osvětlení<span>20 článků →</span></Link>
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
        .sidebar-cat-link { display: flex; justify-content: space-between; align-items: center; font-size: 14px; font-weight: 500; color: var(--text); text-decoration: none; padding: 8px 0; border-bottom: 1px solid var(--border); transition: color 120ms; }
        .sidebar-cat-link:hover { color: var(--muted); }
        .sidebar-cat-link span { font-size: 12px; color: var(--muted); }
        @media (max-width: 960px) { .article-layout { grid-template-columns: 1fr; gap: 0; } .article-sidebar { position: static; margin-top: 40px; } .related-grid { grid-template-columns: 1fr; } }
        @media (max-width: 600px) { .article-layout { padding: 32px 0 60px; } }
      `}</style>
    </>
  );
}
