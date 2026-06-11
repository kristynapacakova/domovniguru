import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak vyzdobit zeď pomocí šablon a vzorů",
  description: "Návod na malování geometrických vzorů, pruhů a šablon na zeď – pomůcky, postup a tipy pro rovné linie.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/malovani-vzory-sablony-postup" },
  openGraph: { title: "Jak vyzdobit zeď pomocí šablon a vzorů", description: "Návod na malování geometrických vzorů, pruhů a šablon na zeď – pomůcky, postup a tipy pro rovné linie.", url: "https://www.domovniguru.cz/blog/malovani-vzory-sablony-postup", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-11T08:00:00Z", modifiedTime: "2026-06-11T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20vyzdobit%20ze%C4%8F%20pomoc%C3%AD%20%C5%A1ablon%20a%20vzor%C5%AF&cat=blog", width: 1200, height: 630, alt: "Jak vyzdobit zeď pomocí šablon a vzorů" }] },
  twitter: { card: "summary_large_image", title: "Jak vyzdobit zeď pomocí šablon a vzorů", description: "Návod na malování geometrických vzorů, pruhů a šablon na zeď – pomůcky, postup a tipy pro rovné linie." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/malovani-vzory-sablony-postup#article", "headline": "Jak vyzdobit zeď pomocí šablon a vzorů", "datePublished": "2026-06-11T08:00:00Z", "dateModified": "2026-06-11T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["malování vzory na zeď", "šablony na malování", "geometrické vzory na zeď", "pruhy na zeď", "ombré na zeď"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Malování & barvy", "item": "https://www.domovniguru.cz/blog/kategorie/malovani" }, { "@type": "ListItem", "position": 4, "name": "Jak vyzdobit zeď pomocí šablon a vzorů", "item": "https://www.domovniguru.cz/blog/malovani-vzory-sablony-postup" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jaká maskovací páska je nejlepší na malování vzorů?", "acceptedAnswer": { "@type": "Answer", "text": "Nejlepší je malířská páska s nízkou přilnavostí (tzv. \"sharp line\" nebo \"delicate surface\"), která se snadno odlepuje a nestrhává podkladovou barvu. Levné papírové pásky z hobby marketů často zatékají a po odlepení trhají barvu." } }, { "@type": "Question", "name": "Kdy odlepit pásku, aby byly hrany ostré?", "acceptedAnswer": { "@type": "Answer", "text": "Pásku odlepuj v okamžiku, kdy je barva ještě mírně vlhká až na povrchu zaschlá (zhruba 30–60 minut po nátěru, podle typu barvy). Pokud počkáš, až barva úplně zatvrdne, hrozí odtržení zaschlého filmu spolu s páskou." } }, { "@type": "Question", "name": "Jak zabránit zatékání barvy pod pásku?", "acceptedAnswer": { "@type": "Answer", "text": "Pásku po nalepení důkladně přejeď stěrkou nebo hřbetem nehtu, aby dokonale přilnula k povrchu. Hrany pásky pak přetři tenkou vrstvou podkladové (původní) barvy – tím \"zapečetíš\" okraj a nová barva pod ni nezateče." } }, { "@type": "Question", "name": "Jaký vzor zvládne i začátečník?", "acceptedAnswer": { "@type": "Answer", "text": "Nejjednodušší jsou svislé nebo vodorovné pruhy o šířce 10–15 cm a jednoduché šablony s opakujícím se motivem (např. trojúhelníky nebo půlkruhy). Vyžadují jen vodováhu, pásku a trpělivost při lepení." } }, { "@type": "Question", "name": "Kolik barvy potřebuji na malování vzoru?", "acceptedAnswer": { "@type": "Answer", "text": "Záleží na ploše vzoru – obvykle stačí menší balení (0,7–1 l) pro jednu zeď s pruhy nebo šablonou. Přesné množství podle plochy a typu nátěru spočítáš v naší kalkulačce na barvu." } }] }] };

const RELATED = [
  { title: "Kalkulačka spotřeby barvy", href: "/kalkulacky/kolik-barvy", read: "2 min" },
  { title: "Efektové barvy a malířské techniky", href: "/blog/efektove-barvy-techniky", read: "5 min" },
  { title: "Jak malovat rohy a kouty bez rozmazání", href: "/blog/jak-malovat-rohy-a-listy", read: "4 min" },
  { title: "Jaké barvy zvolit do dětského pokoje", href: "/blog/barvy-do-detskeho-pokoje", read: "5 min" },
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
              <span>Jak vyzdobit zeď pomocí šablon a vzorů</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování & barvy</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak vyzdobit zeď pomocí šablon a vzorů</h1>
              <p className="article-lead">Pruhy, geometrické tvary nebo ombré přechod dokážou proměnit nudnou zeď v dominantu místnosti – a nepotřebuješ k tomu malíře. Stačí trocha plánování, kvalitní páska a klidná ruka. V tomto návodu projdeme všechny kroky od výběru vzoru až po odlepení pásky.</p>
              <div className="article-meta-row"><span>Aktualizováno: 11. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#typy-vzoru">Jaké vzory zvolit</a></li>
                <li><a href="#pomucky">Pomůcky, které potřebuješ</a></li>
                <li><a href="#priprava">Příprava podkladu a podkladová barva</a></li>
                <li><a href="#postup">Postup krok za krokem</a></li>
                <li><a href="#rovne-linie">Tipy pro rovné linie a ostré přechody</a></li>
                <li><a href="#chyby">Časté chyby a jak se jim vyhnout</a></li>
                <li><a href="#mistnosti">Nápady pro různé místnosti</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="typy-vzoru">
              <h2>Jaké vzory zvolit</h2>
              <p>Než sáhneš po pásce a štětci, vyber si typ vzoru, který bude odpovídat velikosti místnosti, výšce stropu i tvé trpělivosti. Některé vzory zvládneš za odpoledne, jiné zaberou celý víkend.</p>
              <h3>Vodorovné a svislé pruhy</h3>
              <p>Nejoblíbenější a zároveň nejjednodušší volba. Svislé pruhy opticky zvyšují strop, vodorovné naopak místnost opticky rozšíří a zklidní. Klasická šířka pruhu je 10–20 cm, ale i nepravidelné šířky (například střídání 30 cm a 5 cm) vypadají moderně.</p>
              <h3>Geometrické tvary</h3>
              <p>Trojúhelníky, šestiúhelníky, kosočtverce nebo diagonální linie – tyto vzory vyžadují přesnější měření, ale efekt stojí za to. Hodí se zejména na čelní stěnu (tzv. accent wall) v obýváku nebo ložnici.</p>
              <h3>Šablony s motivy</h3>
              <p>Opakující se motiv (listy, mandaly, geometrické ornamenty) se nanáší pomocí plastové nebo papírové šablony a válečku či houbičky. Výhodou je, že stačí jedna šablona, kterou postupně posouváš po zdi.</p>
              <h3>Ombré přechod</h3>
              <p>Plynulý přechod mezi dvěma odstíny stejné barvy – od světlé nahoře po tmavou dole (nebo naopak). Vyžaduje míchání několika odstínů a jejich rozetření při přechodech, ale vizuálně působí velmi efektně bez nutnosti přesného lepení pásky.</p>
            </section>

            <section id="pomucky">
              <h2>Pomůcky, které potřebuješ</h2>
              <p>Kvalita pomůcek rozhoduje o tom, jak ostré a čisté budou hrany vzoru. Nešetři hlavně na pásce.</p>
              <ul>
                <li><strong>Maskovací páska na malování</strong> – ideálně typ s nízkou přilnavostí, která se snadno odlepí bez strhávání barvy</li>
                <li><strong>Vodováha (laserová nebo klasická)</strong> – pro přesné vodorovné a svislé linie, u větších ploch se vyplatí laserová křížová vodováha</li>
                <li><strong>Tužka, krejčovský metr a provázek</strong> – na rozměřování a vyznačení bodů</li>
                <li><strong>Šablony</strong> – plastové (opakovaně použitelné) nebo papírové (jednorázové, levnější)</li>
                <li><strong>Malé štětce a mini válečky</strong> – pro detaily a okraje šablon</li>
                <li><strong>Stěrka nebo plastová karta</strong> – na přitlačení pásky k povrchu</li>
                <li><strong>Plastová fólie a noviny</strong> – ochrana podlahy a nábytku</li>
                <li><strong>Barva</strong> – kontrastní odstín na vzor a případně podkladová barva navíc na opravy</li>
              </ul>
              <p>Množství barvy se odvíjí od velikosti vzoru a počtu vrstev. Pro odhad spotřeby použij naši <Link href="/kalkulacky/kolik-barvy" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačku na barvu</Link> – stačí zadat plochu vzoru a kalkulačka ti řekne, kolik litrů koupit.</p>
            </section>

            <section id="priprava">
              <h2>Příprava podkladu a podkladová barva</h2>
              <p>Vzor bude vypadat jen tak dobře, jak dobře je připravený podklad. Před lepením pásky je potřeba mít zeď hotovou – vymalovanou základní barvou, suchou a bez prachu.</p>
              <h3>Podkladová vrstva</h3>
              <p>Zeď nejprve celou natři podkladovou (základní) barvou – bude to barva pozadí, na které vznikne vzor. Nech ji minimálně 24 hodin zaschnout, ideálně i déle podle doporučení výrobce. Na vlhkou nebo nedoschlou barvu se páska nepřilepí pořádně a hrany budou rozmazané.</p>
              <h3>Čistota a hladkost povrchu</h3>
              <p>Otři zeď suchým hadrem od prachu. Pokud má povrch nerovnosti, drobné praskliny nebo zbytky staré tapety, přebrus je a přetři tmelem – páska na nerovném podkladu nedrží a barva pod ní zatéká do prohlubní.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud používáš sytou nebo tmavou barvu na vzor, zvaž nanesení dvou vrstev. První vrstva často neprokryje podkladovou barvu úplně, zvlášť u žlutých, oranžových nebo červených odstínů.</div>
            </section>

            <section id="postup">
              <h2>Postup krok za krokem</h2>
              <h3>1. Naplánuj a rozměř vzor</h3>
              <p>Na papír si nakresli návrh a rozměř, kde přesně budou jednotlivé linie nebo opakování šablony. U pruhů si vypočítej, jak rozdělit šířku zdi tak, aby krajní pruhy nebyly příliš úzké nebo nesymetrické.</p>
              <h3>2. Vyznač linie na zdi</h3>
              <p>Pomocí vodováhy (nebo laseru) a tužky vyznač na zdi přesné body a linie. U pruhů si nejprve zakresli všechny svislé nebo vodorovné čáry tužkou – uvidíš tak hned, jestli vzor sedí a je rovnoměrný.</p>
              <h3>3. Nalep pásku</h3>
              <p>Pásku lep přesně podél vyznačených linií. Po celé délce ji pevně přitiskni stěrkou nebo nehtem – to je klíčový krok proti zatékání barvy pod pásku.</p>
              <h3>4. Přetři okraj pásky podkladovou barvou</h3>
              <p>Tenkou vrstvou podkladové (původní) barvy přetři okraj pásky, který sousedí s plochou, kterou budeš malovat. Tím „zapečetíš" případné mikroskopické mezery a zabráníš zatékání nové barvy pod pásku.</p>
              <h3>5. Naneste barvu vzoru</h3>
              <p>Po zaschnutí zapečeťovací vrstvy (obvykle 30–60 minut) naneste barvu vzoru – válečkem na větší plochy, štětcem na detaily a rohy. U šablon nanášej barvu „naprázdno" – štětec nebo houbičku nejprve setři o papír, aby barva pod šablonu nezatékala.</p>
              <h3>6. Odlep pásku ve správný moment</h3>
              <p>Pásku odlepuj pod úhlem zhruba 45°, pomalu a plynule, dokud je barva ještě mírně vlhká nebo čerstvě zaschlá na povrchu (ne úplně vytvrzená). Tím získáš nejostřejší možné hrany.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud malujete vícebarevný vzor (např. ombré nebo více pruhů různých odstínů), pracujte postupně po sekcích – nalepte, přetřete, namalujte, odlepte – a teprve pak pokračujte další částí. Šetří to čas i nervy.</div>
            </section>

            <section id="rovne-linie">
              <h2>Tipy pro rovné linie a ostré přechody</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Problém</th><th>Řešení</th></tr></thead>
                  <tbody>
                    <tr><td>Zeď není dokonale rovná</td><td>Místo měření od rohu použij vodováhu nebo laser – roh zdi často není svislý</td></tr>
                    <tr><td>Páska se vlní na nerovnostech</td><td>Použij kratší úseky pásky (30–50 cm) a každý postupně přitlač</td></tr>
                    <tr><td>Rozmazané hrany u šablony</td><td>Šablonu fixuj malířskou páskou ze všech stran a barvu nanášej téměř suchým štětcem</td></tr>
                    <tr><td>Nepravidelný přechod u ombré</td><td>Sousední odstíny rozetři ještě vlhké suchým štětcem nebo houbou krouživým pohybem</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Obecně platí: čím méně barvy na štětci nebo válečku, tím menší riziko zatečení. Přebytečnou barvu vždy setři o okraj nádoby nebo mřížku.</p>
            </section>

            <section id="chyby">
              <h2>Časté chyby a jak se jim vyhnout</h2>
              <ul>
                <li><strong>Zatékání barvy pod pásku</strong> – nejčastější problém, řeší ho právě zapečetění okraje podkladovou barvou (krok 4 výše)</li>
                <li><strong>Odlepení pásky příliš pozdě</strong> – zaschlá barva se při odlepování trhá společně s páskou a vznikají zubaté hrany</li>
                <li><strong>Špatně rozměřený vzor</strong> – pruhy nebo šablony nesedí na konci zdi, vznikne nesouměrný „zbytek" – vždy začínej rozměřovat od středu zdi nebo nejviditelnějšího místa</li>
                <li><strong>Příliš mnoho barvy na štětci</strong> – způsobuje zatékání pod šablony a nerovnoměrné krytí</li>
                <li><strong>Malování bez podkladové vrstvy</strong> – sytý vzor pak prosvítá nerovnoměrně a je potřeba více vrstev navíc</li>
              </ul>
              <p>Pokud se i přes opatrnost objeví drobné zatečení, počkej, až barva zaschne, a opravte ji jemným štětečkem podkladovou barvou – po zaschnutí bude oprava téměř neviditelná.</p>
            </section>

            <section id="mistnosti">
              <h2>Nápady pro různé místnosti</h2>
              <h3>Dětský pokoj</h3>
              <p>Veselé geometrické tvary, vlnky nebo duhové pruhy v pastelových barvách oživí pokoj a dají se kombinovat s nálepkami. Při výběru barev se inspiruj naším článkem o tom, <Link href="/blog/barvy-do-detskeho-pokoje" style={{ color: "#2a6496", textDecoration: "underline" }}>jaké barvy zvolit do dětského pokoje</Link> – některé odstíny totiž lépe podporují klid a spánek.</p>
              <h3>Ložnice</h3>
              <p>Jemné ombré přechody nebo decentní svislé pruhy v tlumených tónech (šedá, pudrová, hořčicová) vytvoří útulnou atmosféru za čelem postele bez toho, aby místnost opticky zmenšily.</p>
              <h3>Chodba</h3>
              <p>Vodorovné pruhy v dolní třetině zdi (tzv. „lambris efekt" v barvě) opticky prodlouží úzkou chodbu a zároveň chrání stěnu před oděrem. Geometrické vzory u stropu naopak zútulní vyšší prostory.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud si nejste jistí kombinací barev nebo technikou, vyzkoušejte vzor nejprve na velkém kusu kartonu nebo nepoužívané desce – ušetříte si případné opravy přímo na zdi. Pro inspiraci dalšími technikami se podívejte na náš přehled <Link href="/blog/efektove-barvy-techniky" style={{ color: "#2a6496", textDecoration: "underline" }}>efektových barev a malířských technik</Link>.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jaká maskovací páska je nejlepší na malování vzorů?", a: "Nejlepší je malířská páska s nízkou přilnavostí (tzv. \"sharp line\" nebo \"delicate surface\"), která se snadno odlepí bez strhávání barvy. Levné papírové pásky z hobby marketů často zatékají a po odlepení trhají barvu." },
                  { q: "Kdy odlepit pásku, aby byly hrany ostré?", a: "Pásku odlepuj v okamžiku, kdy je barva ještě mírně vlhká až na povrchu zaschlá (zhruba 30–60 minut po nátěru, podle typu barvy). Pokud počkáš, až barva úplně zatvrdne, hrozí odtržení zaschlého filmu spolu s páskou." },
                  { q: "Jak zabránit zatékání barvy pod pásku?", a: "Pásku po nalepení důkladně přejeď stěrkou nebo hřbetem nehtu, aby dokonale přilnula k povrchu. Hrany pásky pak přetři tenkou vrstvou podkladové (původní) barvy – tím \"zapečetíš\" okraj a nová barva pod ni nezateče." },
                  { q: "Jaký vzor zvládne i začátečník?", a: "Nejjednodušší jsou svislé nebo vodorovné pruhy o šířce 10–15 cm a jednoduché šablony s opakujícím se motivem (např. trojúhelníky nebo půlkruhy). Vyžadují jen vodováhu, pásku a trpělivost při lepení." },
                  { q: "Kolik barvy potřebuji na malování vzoru?", a: "Záleží na ploše vzoru – obvykle stačí menší balení (0,7–1 l) pro jednu zeď s pruhy nebo šablonou. Přesné množství podle plochy a typu nátěru spočítáš v naší kalkulačce na barvu." },
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
                <li><a href="#typy-vzoru">Jaké vzory zvolit</a></li>
                <li><a href="#pomucky">Pomůcky</a></li>
                <li><a href="#priprava">Příprava podkladu</a></li>
                <li><a href="#postup">Postup krok za krokem</a></li>
                <li><a href="#rovne-linie">Rovné linie a přechody</a></li>
                <li><a href="#chyby">Časté chyby</a></li>
                <li><a href="#mistnosti">Nápady pro místnosti</a></li>
                <li><a href="#faq">Časté otázky</a></li>
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
