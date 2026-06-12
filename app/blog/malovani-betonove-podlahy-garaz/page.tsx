import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak namalovat betonovou podlahu v garáži nebo dílně",
  description: "Příprava betonu, penetrace, výběr epoxidové nebo podlahové barvy a postup nátěru podlahy v garáži krok za krokem.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/malovani-betonove-podlahy-garaz" },
  openGraph: { title: "Jak namalovat betonovou podlahu v garáži nebo dílně", description: "Příprava betonu, penetrace, výběr epoxidové nebo podlahové barvy a postup nátěru podlahy v garáži krok za krokem.", url: "https://www.domovniguru.cz/blog/malovani-betonove-podlahy-garaz", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-12T08:00:00Z", modifiedTime: "2026-06-12T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20namalovat%20betonovou%20podlahu%20v%20gar%C3%A1%C5%BEi%20nebo%20d%C3%ADln%C4%9B&cat=blog", width: 1200, height: 630, alt: "Jak namalovat betonovou podlahu v garáži nebo dílně" }] },
  twitter: { card: "summary_large_image", title: "Jak namalovat betonovou podlahu v garáži nebo dílně", description: "Příprava betonu, penetrace, výběr epoxidové nebo podlahové barvy a postup nátěru podlahy v garáži krok za krokem." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/malovani-betonove-podlahy-garaz#article", "headline": "Jak namalovat betonovou podlahu v garáži nebo dílně", "datePublished": "2026-06-12T08:00:00Z", "dateModified": "2026-06-12T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["betonová podlaha", "malování garáže", "epoxidová barva", "penetrace betonu", "podlahová barva"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Malování & barvy", "item": "https://www.domovniguru.cz/blog/kategorie/malovani" }, { "@type": "ListItem", "position": 4, "name": "Malování betonové podlahy v garáži", "item": "https://www.domovniguru.cz/blog/malovani-betonove-podlahy-garaz" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Musí se betonová podlaha před nátěrem penetrovat?", "acceptedAnswer": { "@type": "Answer", "text": "Ano. Penetrace zpevní povrch, snižuje prašnost a zajistí lepší přídržnost barvy. Bez penetrace hrozí odlupování nátěru po několika měsících." } }, { "@type": "Question", "name": "Jaká barva je nejlepší na betonovou podlahu v garáži?", "acceptedAnswer": { "@type": "Answer", "text": "Pro garáže se nejčastěji volí epoxidové nebo polyuretanové barvy – jsou odolné vůči oleji, benzinu a mechanickému zatížení. Akrylátové barvy jsou levnější, ale méně odolné." } }, { "@type": "Question", "name": "Jak dlouho musí betonová podlaha vysychat před nátěrem?", "acceptedAnswer": { "@type": "Answer", "text": "Nová betonová podlaha musí zrát minimálně 28 dní. Vlhkost betonu by před nátěrem neměla přesahovat 4 %, ideálně se měří vlhkoměrem." } }, { "@type": "Question", "name": "Kolik vrstev barvy je potřeba na garážovou podlahu?", "acceptedAnswer": { "@type": "Answer", "text": "Obvykle se nanáší jedna vrstva penetrace a dvě vrstvy podlahové barvy. U epoxidových systémů se často doplňuje i ochranný vrchní lak." } }, { "@type": "Question", "name": "Jak dlouho vydrží nátěr betonové podlahy v garáži?", "acceptedAnswer": { "@type": "Answer", "text": "Při správné přípravě a kvalitní epoxidové nebo polyuretanové barvě vydrží nátěr 5–10 let i při běžném provozu garáže." } }] }] };

const RELATED = [
  { title: "Penetrace před malováním – kdy a proč ji použít", href: "/blog/penetrace-pred-malovanim", read: "4 min" },
  { title: "Jak ošetřit novou omítku před malováním", href: "/blog/osetrit-novou-omitku-pred-malovanim", read: "5 min" },
  { title: "Jak zateplit dům – kompletní průvodce", href: "/blog/jak-zateplit-dum", read: "7 min" },
  { title: "Sádrokartonová příčka – postup montáže", href: "/blog/sadrokarton-pricka-postup", read: "6 min" },
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
              <span>Malování betonové podlahy v garáži</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování & barvy</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak namalovat betonovou podlahu v garáži nebo dílně</h1>
              <p className="article-lead">Holý beton v garáži praší, špiní se a oleje se do něj rychle vsakují. Kvalitní nátěr podlahy to vyřeší – pokud beton správně připravíš, napenetruješ a zvolíš vhodnou barvu. Ukážeme ti celý postup krok za krokem.</p>
              <div className="article-meta-row"><span>Aktualizováno: 12. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#proc-natirat">Proč natírat betonovou podlahu</a></li>
                <li><a href="#priprava">Příprava povrchu</a></li>
                <li><a href="#penetrace">Penetrace betonu</a></li>
                <li><a href="#typy-barev">Typy podlahových barev</a></li>
                <li><a href="#postup">Postup nanášení a sušení</a></li>
                <li><a href="#udrzba">Zátěž, údržba a opravy</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="proc-natirat">
              <h2>Proč natírat betonovou podlahu</h2>
              <p>Holý beton je porézní materiál – nasává vodu, oleje, benzín i nečistoty, které se pak do něj natrvalo zabarví. Postupně se z povrchu uvolňuje prach (tzv. „prášení betonu"), který se usazuje na autě, nářadí i ve vzduchu dílny.</p>
              <p>Natřená podlaha má hned několik výhod:</p>
              <ul>
                <li><strong>Bezprašnost</strong> – zpevněný povrch nepráší ani po letech provozu</li>
                <li><strong>Snadné čištění</strong> – rozlitý olej nebo barvu stačí setřít hadrem</li>
                <li><strong>Odolnost</strong> – kvalitní nátěr zvládne zátěž auta, regálů i pádu nářadí</li>
                <li><strong>Vzhled</strong> – garáž nebo dílna působí udržovaně a světleji</li>
              </ul>
              <p>Než se pustíš do samotného malování, je dobré znát i přesné množství materiálu, které budeš potřebovat – ať jde o beton při opravě podlahy, nebo barvu na finální nátěr. Pro výpočet potřebného množství betonu při opravách nebo vyrovnávání můžeš použít naši <Link href="/kalkulacky/kolik-betonu" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačku spotřeby betonu</Link>.</p>
            </section>

            <section id="priprava">
              <h2>Příprava povrchu</h2>
              <p>Příprava rozhoduje o tom, jak dlouho nátěr vydrží. Na neošetřeném, mastném nebo prašném povrchu se barva odloupne během několika měsíců.</p>
              <h3>Odmaštění</h3>
              <p>Garážové podlahy bývají znečištěné oleji a mastnotami z auta. Skvrny od oleje je nutné odstranit odmašťovacím přípravkem na bázi tuků (např. saponát s vyšším pH nebo speciální odmašťovač na beton). Plochu důkladně omyj a opláchni vodou.</p>
              <h3>Spáry a praskliny</h3>
              <p>Všechny trhliny, dilatační spáry a vyštípaná místa je třeba vyspravit pomocí opravné stěrkové hmoty nebo cementové malty. U větších plošných nerovností je vhodné podlahu vyrovnat samonivelační stěrkou – pokud potřebuješ dopočítat objem opravného materiálu, pomůže ti opět <Link href="/kalkulacky/kolik-betonu" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačka na množství betonu</Link>.</p>
              <h3>Broušení</h3>
              <p>Hladký, zaplavkovaný beton má nízkou přídržnost pro nátěr. Před penetrací je vhodné povrch zdrsnit – buď diamantovým bruskem na beton, nebo jednoduše hrubým brusným papírem u menších ploch. Vznikne tak mírně drsný povrch, na kterém barva lépe ulpí.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Po broušení podlahu vždy důkladně vysaj nebo vymeť. Jakýkoliv prach pod nátěrem znamená horší přídržnost a riziko odlupování.</div>
            </section>

            <section id="penetrace">
              <h2>Penetrace betonu</h2>
              <p>Penetrační nátěr (primer) je nezbytný krok, který se často podceňuje. Penetrace má tři hlavní funkce:</p>
              <ul>
                <li><strong>Zpevní povrch</strong> – proniká do pórů betonu a zpevní zrnitou strukturu</li>
                <li><strong>Snižuje savost</strong> – beton tak nevsaje příliš mnoho vrchní barvy</li>
                <li><strong>Zajistí přídržnost</strong> – vytváří podklad, na kterém vrchní barva lépe drží</li>
              </ul>
              <p>Pro betonové podlahy se používají hloubkové penetrace na bázi epoxidu nebo akrylátu se zvýšenou penetrační schopností. Penetrace se nanáší válečkem nebo štětcem v jedné rovnoměrné vrstvě a musí zcela proschnout – obvykle 12–24 hodin podle typu a vlhkosti prostředí.</p>
              <p>Detailní postup penetrace různých povrchů, včetně tipů na výběr přípravku, najdeš v samostatném článku o <Link href="/blog/penetrace-pred-malovanim" style={{ color: "#2a6496", textDecoration: "underline" }}>penetraci před malováním</Link>.</p>
            </section>

            <section id="typy-barev">
              <h2>Typy podlahových barev – srovnání</h2>
              <p>Na trhu existují tři hlavní typy nátěrů na betonové podlahy. Liší se cenou, odolností i náročností aplikace.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ barvy</th><th>Odolnost</th><th>Cena</th><th>Vhodné pro</th></tr></thead>
                  <tbody>
                    <tr><td>Akrylátová</td><td>Nižší – citlivá na oleje a chemikálie</td><td>Nejlevnější</td><td>Sklepy, kůlny, lehký provoz</td></tr>
                    <tr><td>Epoxidová</td><td>Vysoká – odolná oleji, benzinu, otěru</td><td>Střední až vyšší</td><td>Garáže, dílny, provozy s vozidly</td></tr>
                    <tr><td>Polyuretanová</td><td>Nejvyšší – pružná, UV stabilní, odolná nárazům</td><td>Nejvyšší</td><td>Vytápěné garáže, dílny s těžkým provozem</td></tr>
                  </tbody>
                </table>
              </div>
              <h3>Akrylátové barvy</h3>
              <p>Nejjednodušší aplikace, rychlé sušení a nízká cena. Nevýhodou je nižší chemická odolnost – rozlitý olej nebo brzdová kapalina může povrch poškodit. Vhodné pro méně zatěžované prostory.</p>
              <h3>Epoxidové barvy</h3>
              <p>Nejčastější volba pro garáže. Vytvářejí tvrdý, hladký a velmi odolný povrch, který snáší pojezd auta, pád nářadí i kontakt s palivy a oleji. Aplikují se obvykle dvousložkové (barva + tužidlo), což vyžaduje přesné dodržení míchacího poměru.</p>
              <h3>Polyuretanové barvy</h3>
              <p>Kombinují vysokou odolnost s pružností – lépe snášejí teplotní výkyvy a drobné pohyby podkladu, takže méně praskají. Často se používají jako vrchní ochranná vrstva na epoxidový základ.</p>
            </section>

            <section id="postup">
              <h2>Postup nanášení a sušení</h2>
              <ol>
                <li><strong>Příprava podkladu</strong> – odmaštění, vyspravení spár, broušení a odstranění prachu (viz výše)</li>
                <li><strong>Penetrace</strong> – nanesení primeru válečkem, doba sušení 12–24 hodin</li>
                <li><strong>První vrstva barvy</strong> – nanáší se válečkem od nejvzdálenějšího rohu směrem ke dveřím, aby ses nedostal do uzavřeného prostoru</li>
                <li><strong>Sušení mezi vrstvami</strong> – u epoxidů obvykle 12–24 hodin, u akrylátů 6–8 hodin (vždy dle pokynů výrobce)</li>
                <li><strong>Druhá vrstva barvy</strong> – zajišťuje rovnoměrný odstín a vyšší odolnost</li>
                <li><strong>Plné vytvrzení</strong> – povrch je chodítelný po 24 hodinách, ale plné chemické a mechanické zatížení (nájezd auta) snese až po 5–7 dnech</li>
              </ol>
              <div className="article-tip"><strong>💡 Tip:</strong> Maluj při teplotě 10–25 °C a nízké vlhkosti. Příliš chladná nebo vlhká dílna prodlužuje dobu sušení a může způsobit, že nátěr zůstane lepkavý nebo nedostatečně vytvrdne.</div>
              <p>U nových betonových podlah platí ještě jedna důležitá podmínka – beton musí dostatečně vyzrát (minimálně 28 dní od lití) a jeho vlhkost by neměla přesahovat 4 %. Pokud plánuješ podlahu zároveň opravovat nebo dolévat, množství materiálu si snadno spočítáš pomocí <Link href="/kalkulacky/kolik-betonu" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačky betonu</Link>.</p>
            </section>

            <section id="udrzba">
              <h2>Zátěž, údržba a oprava poškození</h2>
              <h3>Zatížitelnost</h3>
              <p>Epoxidové a polyuretanové nátěry zvládnou bez problémů váhu osobního i lehkého nákladního automobilu, regály i pojízdné zvedáky. U akrylátových nátěrů hrozí při bodovém zatížení (např. stojan zvedáku) prokrojení nebo otlačení.</p>
              <h3>Běžná údržba</h3>
              <ul>
                <li>Pravidelně zametej nebo vysávej – hrubé nečistoty mohou natřený povrch poškrábat</li>
                <li>Skvrny od oleje stírej co nejdříve, dokud nezatečou do případných mikrotrhlin</li>
                <li>Na mytí používej běžné saponáty, vyhni se agresivním rozpouštědlům</li>
              </ul>
              <h3>Oprava poškození</h3>
              <p>Drobné škrábance nebo odřená místa lze opravit lokálním přebroušením a nanesením stejné barvy ve dvou vrstvách. Větší poškození (praskliny, odlupování ve větší ploše) je třeba nejprve opravit cementovou stěrkou nebo betonem a celý postup penetrace a nátěru opakovat. Pokud máš čerstvě upravenou omítku v okolních prostorách, vyplatí se podívat i na článek o tom, jak <Link href="/blog/osetrit-novou-omitku-pred-malovanim" style={{ color: "#2a6496", textDecoration: "underline" }}>ošetřit novou omítku před malováním</Link>.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Musí se betonová podlaha před nátěrem penetrovat?", a: "Ano. Penetrace zpevní povrch, snižuje prašnost a zajistí lepší přídržnost barvy. Bez penetrace hrozí odlupování nátěru po několika měsících." },
                  { q: "Jaká barva je nejlepší na betonovou podlahu v garáži?", a: "Pro garáže se nejčastěji volí epoxidové nebo polyuretanové barvy – jsou odolné vůči oleji, benzinu a mechanickému zatížení. Akrylátové barvy jsou levnější, ale méně odolné." },
                  { q: "Jak dlouho musí betonová podlaha vysychat před nátěrem?", a: "Nová betonová podlaha musí zrát minimálně 28 dní. Vlhkost betonu by před nátěrem neměla přesahovat 4 %, ideálně se měří vlhkoměrem." },
                  { q: "Kolik vrstev barvy je potřeba na garážovou podlahu?", a: "Obvykle se nanáší jedna vrstva penetrace a dvě vrstvy podlahové barvy. U epoxidových systémů se často doplňuje i ochranný vrchní lak." },
                  { q: "Jak dlouho vydrží nátěr betonové podlahy v garáži?", a: "Při správné přípravě a kvalitní epoxidové nebo polyuretanové barvě vydrží nátěr 5–10 let i při běžném provozu garáže." },
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
                <li><a href="#proc-natirat">Proč natírat podlahu</a></li>
                <li><a href="#priprava">Příprava povrchu</a></li>
                <li><a href="#penetrace">Penetrace betonu</a></li>
                <li><a href="#typy-barev">Typy barev</a></li>
                <li><a href="#postup">Postup nanášení</a></li>
                <li><a href="#udrzba">Zátěž a údržba</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/malovani" className="sidebar-cat-link">🎨 Malování & barvy<span>Více článků →</span></Link>
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
