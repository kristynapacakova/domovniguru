import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stěhování bez stresu – kompletní checklist 2025",
  description: "Kompletní checklist na stěhování: 6 týdnů před, den D a co udělat po nastěhování. Nic nezapomeneš, nic tě nepřekvapí.",
  alternates: { canonical: "https://domovniguru.cz/blog/stehovani-checklist" },
  openGraph: { title: "Stěhování bez stresu – kompletní checklist", description: "6 týdnů před, den D a co udělat po nastěhování.", url: "https://domovniguru.cz/blog/stehovani-checklist", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2025-02-15T08:00:00Z", modifiedTime: "2025-03-01T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Stěhování bez stresu – kompletní checklist", description: "6 týdnů před, den D a co udělat po nastěhování." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://domovniguru.cz/blog/stehovani-checklist#article", "headline": "Stěhování bez stresu – kompletní checklist", "datePublished": "2025-02-15T08:00:00Z", "dateModified": "2025-03-01T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "inLanguage": "cs", "keywords": ["stěhování checklist", "jak se stěhovat", "příprava na stěhování", "stěhování do nového bytu", "stěhovací firma"] }] };

const RELATED = [
  { title: "Co zkontrolovat při přebírání nového bytu", href: "/blog/prebrani-bytu-checklist", read: "4 min" },
  { title: "Jak vymalovat byt před stěhováním", href: "/blog/malovani-pred-stehovani", read: "5 min" },
  { title: "Jak připravit zahradu na jaro – kompletní checklist", href: "/blog/jarni-zahrada", read: "6 min" },
  { title: "Jak připravit dům na zimu – checklist", href: "/blog/jak-pripravit-dum-na-zimu", read: "5 min" },
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
              <Link href="/blog/kategorie/stehovani">Stěhování & rekonstrukce</Link><span className="breadcrumb-sep">/</span>
              <span>Stěhování bez stresu</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">📦 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Stěhování bez stresu – kompletní checklist</h1>
              <p className="article-lead">Stěhování je jeden z nejstresovějších životních momentů – ale ne proto, že by bylo tak složité. Stresuje proto, že nikdy nevíš, na co jsi zapomněl. Tenhle checklist to řeší.</p>
              <div className="article-meta-row"><span>Aktualizováno: 1. března 2025</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#6-tydnu">6 týdnů před stěhováním</a></li>
                <li><a href="#4-tydny">4 týdny před</a></li>
                <li><a href="#2-tydny">2 týdny před</a></li>
                <li><a href="#tyden">Týden před</a></li>
                <li><a href="#den-d">Den stěhování</a></li>
                <li><a href="#po-stehovani">Po nastěhování</a></li>
                <li><a href="#tipy">Praktické tipy</a></li>
              </ol>
            </nav>

            <section id="6-tydnu">
              <h2>6 týdnů před stěhováním</h2>
              <p>Čím dříve začneš, tím méně stresu v posledních dnech. Šest týdnů dopředu je ideální start pro větší stěhování.</p>
              <ul>
                <li><strong>Zjisti termín předání nového bytu</strong> – od toho se odvíjí vše ostatní</li>
                <li><strong>Domluv stěhovací firmu nebo auto</strong> – oblíbené termíny se obsazují rychle, zejm. víkendy a konce měsíce</li>
                <li><strong>Začni třídit</strong> – projdi každou místnost a rozhodni: vezmu to, dám pryč, nebo vyhodím?</li>
                <li><strong>Prodej nebo daruj nepotřebné věci</strong> – Bazoš, Facebook Marketplace, charita</li>
                <li><strong>Nafotit stav stávajícího bytu</strong> – kvůli složení kauce nebo předání pronajímateli</li>
              </ul>
            </section>

            <section id="4-tydny">
              <h2>4 týdny před stěhováním</h2>
              <ul>
                <li><strong>Objednej krabice a obalový materiál</strong> – papírové krabice, bublinková fólie, páska, fixy na popis</li>
                <li><strong>Začni balit věci, které nepoužíváš</strong> – knihy, dekorace, sezónní oblečení</li>
                <li><strong>Nahlásí změnu adresy</strong> na poště (přesměrování pošty na 3 měsíce)</li>
                <li><strong>Informuj zaměstnavatele</strong> o změně adresy pro výplatní pásky a daňové doklady</li>
                <li><strong>Zjisti, co je potřeba zařídit v novém bytě</strong> – přepis energií, internet, případné opravy</li>
              </ul>
            </section>

            <section id="2-tydny">
              <h2>2 týdny před stěhováním</h2>
              <ul>
                <li><strong>Kontaktuj dodavatele energií</strong> – oznám změnu adresy nebo přepis smluv na nový byt</li>
                <li><strong>Odhlásí se z trvalého pobytu</strong> (pokud stěhuješ trvale) a zaregistruj na nové adrese</li>
                <li><strong>Informuj banku</strong> o změně adresy</li>
                <li><strong>Zruš nebo přesuň</strong> pravidelné dodávky (noviny, voda, předplatné)</li>
                <li><strong>Domluvit hlídání dětí nebo zvířat</strong> na den stěhování</li>
                <li><strong>Informuj lékaře a pojišťovnu</strong> o změně adresy</li>
              </ul>
            </section>

            <section id="tyden">
              <h2>Týden před stěhováním</h2>
              <ul>
                <li><strong>Sbal skoro vše</strong> – nechej jen nezbytnosti na poslední týden</li>
                <li><strong>Popis každé krabice</strong> – obsah + místnost (např. „Kuchyně – hrnce")</li>
                <li><strong>Příprav „první pomoc" krabici</strong> – věci, které budeš potřebovat hned v noci po nastěhování (povlečení, ručník, nabíječka, toaletní potřeby, hrnek, káva)</li>
                <li><strong>Odtaj ledničku a mrazák</strong> – 24–48 hodin před stěhováním</li>
                <li><strong>Spotřebuj nebo daruj jídlo</strong> z lednice a spíže</li>
                <li><strong>Zkontroluj stav nového bytu</strong> – nafotit pro jistotu před nastěhováním</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> „První pomoc" krabici nakresli velkou hvězdu nebo ji dej do auta jako poslední – ať ji najdeš ihned, bez prohrabávání hory krabic.</div>
            </section>

            <section id="den-d">
              <h2>Den stěhování</h2>
              <ul>
                <li>Zkontroluj, že stěhovací firma nebo auto přijede v domluvený čas</li>
                <li>Vyfotografuj odpočty energií v původním bytě (elektroměr, plynoměr, vodoměr)</li>
                <li>Projdi všechny místnosti, šuplíky, skříně, sklep, garáž – nic nezapomeneš</li>
                <li>Předej klíče od původního bytu (pronajímateli nebo novému majiteli)</li>
                <li>Vyfotografuj odpočty energií v novém bytě ihned po přebírání</li>
                <li>Zkontroluj, že máš klíče od nového bytu, poštovní schránky a sklepa</li>
                <li>Zajisti přístup do nového bytu pro stěhováky – výtah, výtahový zámek, parkování</li>
              </ul>
            </section>

            <section id="po-stehovani">
              <h2>Po nastěhování – první týden</h2>
              <ul>
                <li><strong>Vyměň zámky</strong> – nevíš, kolik klíčů od bytu koluje. 500–1000 Kč za klid v duši se vyplatí.</li>
                <li><strong>Změřit místnosti</strong> pro případ nákupu nábytku nebo koberců</li>
                <li><strong>Zjisti umístění hlavních uzávěrů</strong> – voda, plyn, elektrika. Bude se ti to hodit.</li>
                <li><strong>Přepiš energie na své jméno</strong> – elektřina, plyn, voda</li>
                <li><strong>Zkontroluj funkci všeho</strong> – topení, teplá voda, zásuvky, okna, dveře</li>
                <li><strong>Zjisti pravidla domu</strong> – třídění odpadu, pravidla pro hosty, tichá hodina</li>
                <li><strong>Představ se sousedům</strong> – alespoň na patře. Dobří sousedi jsou nečekaně cenní.</li>
              </ul>
            </section>

            <section id="tipy">
              <h2>Praktické tipy, které ušetří nervy</h2>
              <h3>Krabice po místnostech, ne po kategoriích</h3>
              <p>Intuitivně se chce balit „všechny knihy dohromady" nebo „vše z kuchyně". Lepší strategie: krabice označuj místností v novém bytě, kam mají jít. Stěhováci je pak rovnou odnesou správně a ty nemusíš hledat nic v hromadě 50 krabic.</p>
              <h3>Nefotografuj krabice – fotografuj obsah</h3>
              <p>Než krabici zabalíš, vyfoť obsah. Za měsíc, když budeš hledat ten jeden kabel, ti to ušetří otevírání 10 krabic.</p>
              <h3>Pronájem auta vs. stěhovací firma</h3>
              <p>Pronájem dodávky (1 500–3 000 Kč/den) je výrazně levnější než stěhovací firma (5 000–15 000 Kč). Ale stěhovací firma ušetří 6–8 hodin dřiny a záda. Pokud máš nábytek z masivu nebo piano – firma je jasná volba.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Největší stěhování se dějí v pátek a v poslední den měsíce. Pokud můžeš, vyber střed měsíce a uprostřed týdne – stěhovací firmy bývají levnější a flexibilnější.</div>
            </section>

            <section className="related-section">
              <h2>Související články</h2>
              <div className="related-grid">
                {RELATED.map((r) => (
                  <Link key={r.href} href={r.href} className="card">
                    <div className="card-eyebrow-row"><span>Stěhování & rekonstrukce</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#6-tydnu">6 týdnů před</a></li>
                <li><a href="#4-tydny">4 týdny před</a></li>
                <li><a href="#2-tydny">2 týdny před</a></li>
                <li><a href="#tyden">Týden před</a></li>
                <li><a href="#den-d">Den stěhování</a></li>
                <li><a href="#po-stehovani">Po nastěhování</a></li>
                <li><a href="#tipy">Praktické tipy</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/stehovani" className="sidebar-cat-link">📦 Stěhování & rekonstrukce<span>20 článků →</span></Link>
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
