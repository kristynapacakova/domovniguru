import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Topení dřevem, peletami nebo plynem: srovnání nákladů",
  description: "Kolik stojí topení dřevem, peletami, plynem a tepelným čerpadlem? Srovnání ceny za kWh, účinnosti, komfortu, skladování a návratnosti v českých podmínkách a cenách v Kč.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/topeni-drevem-vs-peletami" },
  openGraph: { title: "Topení dřevem, peletami nebo plynem: srovnání nákladů", description: "Kolik stojí topení dřevem, peletami, plynem a tepelným čerpadlem? Srovnání ceny za kWh, účinnosti, komfortu, skladování a návratnosti v českých podmínkách a cenách v Kč.", url: "https://www.domovniguru.cz/blog/topeni-drevem-vs-peletami", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-07-21T08:00:00Z", modifiedTime: "2026-07-21T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Topen%C3%AD%20d%C5%99evem%2C%20peletami%20nebo%20plynem%3A%20srovn%C3%A1n%C3%AD%20n%C3%A1klad%C5%AF&cat=blog", width: 1200, height: 630, alt: "Topení dřevem, peletami nebo plynem: srovnání nákladů" }] },
  twitter: { card: "summary_large_image", title: "Topení dřevem, peletami nebo plynem: srovnání nákladů", description: "Kolik stojí topení dřevem, peletami, plynem a tepelným čerpadlem? Srovnání ceny za kWh, účinnosti, komfortu a návratnosti v Kč." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/topeni-drevem-vs-peletami#article", "headline": "Topení dřevem, peletami nebo plynem: srovnání nákladů", "datePublished": "2026-07-21T08:00:00Z", "dateModified": "2026-07-21T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["topení dřevem", "topení peletami", "topení plynem", "tepelné čerpadlo", "cena za kWh vytápění", "srovnání nákladů na topení", "čím je nejlevnější topit", "návratnost topení"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Sezónní údržba", "item": "https://www.domovniguru.cz/blog/kategorie/sezonni-udrzba" }, { "@type": "ListItem", "position": 4, "name": "Topení dřevem, peletami nebo plynem: srovnání nákladů", "item": "https://www.domovniguru.cz/blog/topeni-drevem-vs-peletami" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Čím je nejlevnější topit?", "acceptedAnswer": { "@type": "Answer", "text": "Z hlediska ceny za kWh tepla bývá nejlevnější topení kusovým dřevem, pokud si ho zajistíte levně nebo vlastní prací. Následují dřevěné pelety a tepelné čerpadlo, jehož provozní náklady sráží vysoká účinnost (topný faktor). Plyn je zpravidla nejdražší z běžných zdrojů. Do celkové úvahy ale patří i komfort, čas na obsluhu a pořizovací cena zdroje – nejlevnější palivo neznamená automaticky nejlevnější topení." } }, { "@type": "Question", "name": "Vyplatí se přejít z plynu na pelety?", "acceptedAnswer": { "@type": "Answer", "text": "Přechod z plynu na pelety má obvykle nižší provozní náklady na palivo, ale vyžaduje investici do automatického kotle (řádově 80 000–160 000 Kč) a prostor pro skladování pelet. Návratnost se u běžného rodinného domu pohybuje typicky mezi 5 a 10 lety podle spotřeby a rozdílu cen paliv. Peletový kotel navíc nabízí komfort blízký plynu díky automatickému podávání paliva." } }, { "@type": "Question", "name": "Kolik pelet spotřebuji za sezónu?", "acceptedAnswer": { "@type": "Answer", "text": "Běžný zateplený rodinný dům spotřebuje zhruba 3–6 tun pelet za topnou sezónu, starší nezateplený dům i více. Přesná spotřeba závisí na tepelných ztrátách domu, účinnosti kotle a způsobu vytápění teplé vody. Orientační množství dřeva i pelet podle vytápěné plochy a zateplení spočítá naše kalkulačka spotřeby dřeva a pelet." } }, { "@type": "Question", "name": "Je topení dřevem ekologické?", "acceptedAnswer": { "@type": "Answer", "text": "Dřevo i pelety jsou obnovitelné palivo a při spalování se považují za uhlíkově neutrální – uvolní tolik CO2, kolik strom při růstu pohltil. Rozhodující je ale kvalita spalování: moderní kotel na pelety nebo zplyňovací kotel na dřevo s akumulační nádrží emituje výrazně méně prachu než starý prohořívací kotel. Zásadní je suché palivo (vlhkost pod 20 %) a správný provoz, jinak roste množství škodlivin." } }, { "@type": "Question", "name": "Vyplatí se tepelné čerpadlo do staršího domu?", "acceptedAnswer": { "@type": "Answer", "text": "Tepelné čerpadlo dává největší smysl v domě s nižšími tepelnými ztrátami a nízkoteplotní otopnou soustavou (podlahové topení nebo dostatečně velké radiátory). Ve starším nezatepleném domě s vysokoteplotními radiátory klesá topný faktor a rostou provozní náklady i pořizovací cena. Před rozhodnutím se vyplatí spočítat tepelné ztráty, zvážit zateplení a porovnat návratnost s ostatními zdroji." } }] }] };

const RELATED = [
  { title: "Jak ušetřit na vytápění bez výměny kotle", href: "/blog/usetrit-na-vytapeni", read: "5 min" },
  { title: "Tepelné čerpadlo: průvodce výběrem a instalací", href: "/blog/tepelne-cerpadlo-pruvodce", read: "11 min" },
  { title: "Údržba krbu a kamen na dřevo", href: "/blog/udrzba-krbu-a-kamen-na-drevo", read: "6 min" },
  { title: "Jak správně topit a nepřeplácet", href: "/blog/jak-spravne-topit", read: "6 min" },
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
              <span>Topení dřevem, peletami nebo plynem</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">❄️ Sezónní údržba</Link>
                <span className="article-read-time">⏱ 7 min čtení</span>
              </div>
              <h1 className="article-h1">Topení dřevem, peletami nebo plynem</h1>
              <p className="article-lead">Ceny energií kolísají a otázka „čím topit levně a pohodlně" je aktuálnější než kdy dřív. Dřevo, pelety, plyn a tepelné čerpadlo se liší nejen cenou za kWh tepla, ale i účinností, komfortem obsluhy, nároky na skladování a emisemi. Tady je srovnání nákladů v českých podmínkách, které vám pomůže vybrat.</p>
              <div className="article-meta-row"><span>Aktualizováno: 21. července 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons
                url="https://www.domovniguru.cz/blog/topeni-drevem-vs-peletami"
                title="Topení dřevem, peletami nebo plynem: srovnání nákladů"
              />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 900 210" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="900" height="210" fill="#fdf6f0"/>
                <defs>
                  <linearGradient id="flameGrad" x1="0" y1="1" x2="0" y2="0" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#e0552f"/>
                    <stop offset="100%" stopColor="#f5c063"/>
                  </linearGradient>
                </defs>

                <text x="450" y="24" textAnchor="middle" fontSize="11" fill="#a08050" fontWeight="700" letterSpacing="0.08em">SROVNÁNÍ NÁKLADŮ NA VYTÁPĚNÍ (ORIENTAČNĚ)</text>

                {/* Čtyři sloupce paliv */}
                {[
                  { x: 70, label: "Dřevo", icon: "🪵", price: "1,20–2,00", h: 40, col: "#8B6340" },
                  { x: 265, label: "Pelety", icon: "🔥", price: "1,80–2,60", h: 62, col: "#c08a4a" },
                  { x: 460, label: "Tep. čerpadlo", icon: "⚡", price: "1,50–2,80", h: 58, col: "#5a9e9e" },
                  { x: 655, label: "Plyn", icon: "🔵", price: "2,40–3,60", h: 90, col: "#4a7ab0" },
                ].map(({ x, label, icon, price, h, col }, i) => (
                  <g key={i} transform={`translate(${x}, 45)`}>
                    <rect x="0" y="0" width="175" height="150" rx="10" fill="#fff" stroke="#e6ddd2" strokeWidth="1.5"/>
                    <text x="26" y="34" fontSize="20">{icon}</text>
                    <text x="60" y="30" fontSize="13" fill="#2a2a28" fontWeight="600">{label}</text>
                    {/* Sloupec ceny */}
                    <rect x="20" y={120 - h} width="34" height={h} rx="4" fill={col} opacity="0.75"/>
                    <text x="90" y="72" fontSize="10" fill="#88837a">Kč/kWh tepla</text>
                    <text x="90" y="92" fontSize="15" fill="#c05030" fontWeight="700">{price}</text>
                    <text x="90" y="112" fontSize="9" fill="#a09080">včetně účinnosti</text>
                  </g>
                ))}

                <rect x="290" y="182" width="320" height="22" rx="6" fill="#5a9e6f" opacity="0.12"/>
                <text x="450" y="197" textAnchor="middle" fontSize="10" fill="#3a7e4f" fontWeight="700">💰 Rozhoduje cena za kWh, komfort i pořizovací náklady</text>
              </svg>
              <div style={{display:"flex",justifyContent:"space-around",padding:"8px 30px 12px",fontSize:"9px",letterSpacing:"0.1em",color:"#a09080",textTransform:"uppercase",background:"#fdf6f0"}}>
                <span>🪵 Dřevo = nejlevnější palivo</span>
                <span>🔥 Pelety = automatika</span>
                <span>⚡ Čerpadlo = účinnost</span>
                <span>🔵 Plyn = komfort, vyšší cena</span>
              </div>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#jak-srovnavat">Jak srovnávat: cena za kWh tepla</a></li>
                <li><a href="#tabulka">Přehledná tabulka nákladů</a></li>
                <li><a href="#drevo-pelety">Dřevo a pelety podrobně</a></li>
                <li><a href="#plyn-cerpadlo">Plyn a tepelné čerpadlo</a></li>
                <li><a href="#komfort-skladovani">Komfort, skladování a emise</a></li>
                <li><a href="#navratnost">Návratnost a jak se rozhodnout</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="jak-srovnavat">
              <h2>Jak srovnávat: cena za kWh tepla</h2>
              <p>Ceny paliv se uvádějí v různých jednotkách – dřevo v prostorových metrech, pelety v tunách, plyn v kWh nebo m³, elektřina v kWh. Aby srovnání dávalo smysl, je nutné vše přepočítat na <strong>cenu za kilowatthodinu (kWh) dodaného tepla</strong>, tedy tepla, které skutečně vytopí dům – po započtení účinnosti zdroje.</p>
              <p>To je klíčové: kotel nikdy nepromění 100 % energie paliva na užitečné teplo. Starý kotel na dřevo má účinnost kolem 60–70 %, moderní peletový nebo plynový kondenzační kotel 90 % i více. Tepelné čerpadlo naopak dodá násobek elektrické energie, kterou spotřebuje – jeho „účinnost" (topný faktor COP) bývá 3 i vyšší.</p>
              <ul>
                <li><strong>Výhřevnost paliva</strong> – kolik energie palivo obsahuje (suché dřevo cca 4 kWh/kg, pelety cca 4,8 kWh/kg, zemní plyn cca 10,5 kWh/m³)</li>
                <li><strong>Účinnost zdroje</strong> – kolik z energie paliva se promění na užitečné teplo</li>
                <li><strong>Topný faktor (u čerpadla)</strong> – kolikanásobek spotřebované elektřiny čerpadlo dodá jako teplo</li>
                <li><strong>Aktuální cena paliva</strong> – silně kolísá, proto počítejte s rozpětím a přepočtem na kWh</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Ceny v tomto článku jsou orientační rozpětí pro rok 2026 a slouží k porovnání zdrojů mezi sebou. Skutečnou cenu si ověřte u lokálních dodavatelů – zejména cena dřeva a pelet se výrazně liší podle regionu a množství odběru.</div>
            </section>

            <section id="tabulka">
              <h2>Přehledná tabulka nákladů</h2>
              <p>Následující tabulka srovnává orientační náklady na kWh dodaného tepla, tedy po započtení účinnosti zdroje. Slouží k porovnání zdrojů mezi sebou, ne jako závazná cena.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Zdroj tepla</th><th>Účinnost / COP</th><th>Cena za kWh tepla</th><th>Komfort obsluhy</th></tr></thead>
                  <tbody>
                    <tr><td>Kusové dřevo</td><td>70–85 %</td><td>1,20–2,00 Kč</td><td>Nízký (ruční přikládání)</td></tr>
                    <tr><td>Dřevěné pelety</td><td>90–95 %</td><td>1,80–2,60 Kč</td><td>Vysoký (automatika)</td></tr>
                    <tr><td>Tepelné čerpadlo</td><td>COP 3–4</td><td>1,50–2,80 Kč</td><td>Nejvyšší (bezobslužné)</td></tr>
                    <tr><td>Zemní plyn</td><td>90–98 %</td><td>2,40–3,60 Kč</td><td>Vysoký (bezobslužné)</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Z tabulky je vidět, že nejnižší cenu za kWh nabízí kusové dřevo, ale za cenu nízkého komfortu a času stráveného obsluhou. Pelety a tepelné čerpadlo hledají rovnováhu mezi provozní cenou a pohodlím. Plyn je nejpohodlnější, ale zpravidla i nejdražší. Kolik konkrétně vytápění stojí ve vašem domě a kde ubrat, rozebíráme v článku <Link href="/blog/usetrit-na-vytapeni" style={{ color: "#2a6496", textDecoration: "underline" }}>jak ušetřit na vytápění</Link>.</p>
              <div className="article-tip"><strong>⚠️ Pozor:</strong> Cena za kWh tepla sama o sobě nestačí. Do celkových nákladů patří i pořizovací cena zdroje, jeho servis, revize a životnost. Levné palivo v drahém a poruchovém kotli nemusí vyjít levněji než dražší palivo v účinném a bezúdržbovém zařízení.</div>
            </section>

            <section id="drevo-pelety">
              <h2>Dřevo a pelety podrobně</h2>
              <h3>Kusové dřevo</h3>
              <p>Nejlevnější palivo za kWh, zvlášť pokud máte přístup k levnému dřevu nebo si ho zpracujete sami. Nevýhodou je nutnost ručního přikládání několikrát denně, potřeba velkého suchého skladu a kolísavý výkon. Nejvyšší účinnosti a nejnižších emisí dosáhnete se zplyňovacím kotlem doplněným o akumulační nádrž, která uloží teplo z jednoho zátopu na několik hodin.</p>
              <ul>
                <li><strong>Vlhkost pod 20 %</strong> – mokré dřevo má nižší výhřevnost, dehtuje komín a více kouří; dřevo suší 1–2 roky</li>
                <li><strong>Skladování</strong> – potřebujete kryté, větrané místo; roční spotřeba domu bývá 10–20 prostorových metrů</li>
                <li><strong>Obsluha</strong> – ruční přikládání, čištění popela, pravidelné vymetání komína</li>
              </ul>
              <h3>Dřevěné pelety</h3>
              <p>Pelety jsou lisované z pilin a nabízejí komfort blízký plynu – automatický kotel si palivo sám dávkuje ze zásobníku a udržuje nastavenou teplotu. Cena za kWh je vyšší než u kusového dřeva, ale stále obvykle nižší než u plynu. Kotel vyžaduje jednou za čas doplnit zásobník a vyčistit popelník.</p>
              <ul>
                <li><strong>Spotřeba</strong> – zateplený rodinný dům spotřebuje zhruba 3–6 tun pelet za sezónu</li>
                <li><strong>Skladování</strong> – pelety musí zůstat v suchu (vlhkem se rozpadají); skladují se v pytlích nebo v zásobníku</li>
                <li><strong>Kvalita</strong> – volte certifikované pelety (např. ENplus A1) s nízkým obsahem popela</li>
              </ul>
              <p>Kolik dřeva nebo pelet spotřebujete podle vytápěné plochy a zateplení, spočítá naše <Link href="/kalkulacky/spotreba-dreva-pelet" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačka spotřeby dřeva a pelet</Link>. O tom, jak udržet kamna a krb v kondici, píšeme v návodu <Link href="/blog/udrzba-krbu-a-kamen-na-drevo" style={{ color: "#2a6496", textDecoration: "underline" }}>údržba krbu a kamen na dřevo</Link>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Dřevo i pelety nakupujte mimo topnou sezónu, na jaře a v létě, kdy jsou ceny nejnižší. Předzásobení na celou sezónu vám ušetří jak peníze, tak stres z výpadků dodávek v zimě.</div>
            </section>

            <section id="plyn-cerpadlo">
              <h2>Plyn a tepelné čerpadlo</h2>
              <h3>Zemní plyn</h3>
              <p>Plynový kondenzační kotel je stále nejrozšířenějším zdrojem tepla v českých domech a bytech. Nabízí maximální komfort – bezobslužný provoz, žádné skladování paliva, malé rozměry a rychlou regulaci. Nevýhodou je nejvyšší cena za kWh z běžných zdrojů a závislost na jediném dodavateli i na vývoji cen plynu. Vyžaduje pravidelnou roční revizi a čištění.</p>
              <h3>Tepelné čerpadlo</h3>
              <p>Tepelné čerpadlo odebírá teplo z venkovního vzduchu, země nebo vody a „přečerpává" ho do topné soustavy. Za jednu kilowatthodinu elektřiny dodá 3 i více kilowatthodin tepla (topný faktor COP), díky čemuž je provoz levný. Největší smysl dává v domě s nízkými tepelnými ztrátami a nízkoteplotní soustavou (podlahové topení nebo velké radiátory). Pořizovací cena je vysoká, ale sráží ji dostupné dotace. Podrobně v článku <Link href="/blog/tepelne-cerpadlo-pruvodce" style={{ color: "#2a6496", textDecoration: "underline" }}>tepelné čerpadlo – průvodce výběrem a instalací</Link>.</p>
              <ul>
                <li><strong>Topný faktor klesá s teplotou</strong> – v silných mrazech dodá vzduchové čerpadlo méně tepla a spotřebuje více elektřiny</li>
                <li><strong>Nízkoteplotní soustava</strong> – čím nižší teplota topné vody, tím vyšší účinnost; ideál je podlahové topení</li>
                <li><strong>Tarif elektřiny</strong> – výhodná sazba pro tepelná čerpadla výrazně ovlivní výslednou cenu za kWh</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Než zdroj tepla vyměníte, zvažte nejprve zateplení a snížení tepelných ztrát. Menší tepelná ztráta znamená menší (a levnější) zdroj tepla, nižší spotřebu paliva a rychlejší návratnost jakékoli investice do topení.</div>
            </section>

            <section id="komfort-skladovani">
              <h2>Komfort, skladování a emise</h2>
              <p>Cena za kWh není jediné kritérium. Pro řadu domácností rozhoduje komfort obsluhy a nároky na prostor stejně jako čísla na faktuře.</p>
              <h3>Komfort a čas</h3>
              <ul>
                <li><strong>Dřevo:</strong> nejvíce práce – přikládání několikrát denně, příprava a sušení paliva, čištění popela a komína</li>
                <li><strong>Pelety:</strong> občasné doplnění zásobníku a čištění popelníku, jinak automatický provoz</li>
                <li><strong>Plyn a tepelné čerpadlo:</strong> prakticky bezobslužné, jen pravidelný servis a revize</li>
              </ul>
              <h3>Skladování</h3>
              <ul>
                <li><strong>Dřevo:</strong> největší nároky – 10–20 prostorových metrů v krytém větraném skladu</li>
                <li><strong>Pelety:</strong> menší objem, ale nutné suché prostředí; zásobník nebo paletové balení v pytlích</li>
                <li><strong>Plyn a čerpadlo:</strong> žádné skladování paliva</li>
              </ul>
              <h3>Emise a ekologie</h3>
              <p>Dřevo a pelety jsou obnovitelné palivo a při spalování se považují za uhlíkově neutrální. Rozhodující je ale technologie a kvalita paliva: moderní kotel na pelety nebo zplyňovací kotel na dřevo emituje řádově méně prachu než starý prohořívací kotel. Tepelné čerpadlo nemá lokální emise vůbec, jeho ekologická stopa závisí na zdroji elektřiny. Suché palivo a správný provoz jsou u dřeva klíčové pro nízké emise i zdraví komína.</p>
              <div className="article-tip"><strong>⚠️ Pozor:</strong> Provozovat starý kotel na tuhá paliva nižší emisní třídy je dnes v Česku zakázané. Před investicí do nového kotle na dřevo či pelety si ověřte aktuální požadavky na emisní třídu a případné dotační podmínky.</div>
            </section>

            <section id="navratnost">
              <h2>Návratnost a jak se rozhodnout</h2>
              <p>Volba zdroje tepla je kompromis mezi pořizovací cenou, provozními náklady a komfortem. Nejlevnější palivo za kWh nemusí vyjít nejlevněji, pokud vyžaduje drahý kotel nebo hodně vaší práce.</p>
              <ul>
                <li><strong>Máte levné dřevo a čas na obsluhu?</strong> Kusové dřevo se zplyňovacím kotlem a akumulační nádrží nabídne nejnižší provozní náklady</li>
                <li><strong>Chcete nízké náklady i komfort?</strong> Pelety spojují automatický provoz s příznivou cenou paliva</li>
                <li><strong>Máte zateplený dům a nízkoteplotní soustavu?</strong> Tepelné čerpadlo nabídne levný a bezobslužný provoz s podporou dotací</li>
                <li><strong>Ceníte si maximálního pohodlí a máte přípojku?</strong> Plyn zůstává nejjednodušší volbou, byť s vyšší cenou</li>
              </ul>
              <p>Návratnost přechodu z plynu na pelety nebo tepelné čerpadlo se u běžného rodinného domu pohybuje typicky mezi 5 a 10 lety podle spotřeby, rozdílu cen paliv a výše dotace. Než se rozhodnete, spočítejte si tepelné ztráty domu a orientační roční spotřebu paliva – teprve pak má srovnání ceny za kWh reálnou vypovídací hodnotu. Jak topit efektivně bez ohledu na zdroj, shrnuje návod <Link href="/blog/jak-spravne-topit" style={{ color: "#2a6496", textDecoration: "underline" }}>jak správně topit</Link>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Nerozhodujte se jen podle aktuálních cen paliv – ty kolísají. Zvažte i to, jak stabilní a předvídatelný zdroj chcete: dřevo a pelety vás činí méně závislými na velkých dodavatelích, plyn a elektřina nabízejí komfort výměnou za citlivost na tržní ceny.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Čím je nejlevnější topit?", a: "Z hlediska ceny za kWh tepla bývá nejlevnější topení kusovým dřevem, pokud si ho zajistíte levně nebo vlastní prací. Následují dřevěné pelety a tepelné čerpadlo, jehož provozní náklady sráží vysoká účinnost (topný faktor). Plyn je zpravidla nejdražší z běžných zdrojů. Do celkové úvahy ale patří i komfort, čas na obsluhu a pořizovací cena zdroje – nejlevnější palivo neznamená automaticky nejlevnější topení." },
                  { q: "Vyplatí se přejít z plynu na pelety?", a: "Přechod z plynu na pelety má obvykle nižší provozní náklady na palivo, ale vyžaduje investici do automatického kotle (řádově 80 000–160 000 Kč) a prostor pro skladování pelet. Návratnost se u běžného rodinného domu pohybuje typicky mezi 5 a 10 lety podle spotřeby a rozdílu cen paliv. Peletový kotel navíc nabízí komfort blízký plynu díky automatickému podávání paliva." },
                  { q: "Kolik pelet spotřebuji za sezónu?", a: "Běžný zateplený rodinný dům spotřebuje zhruba 3–6 tun pelet za topnou sezónu, starší nezateplený dům i více. Přesná spotřeba závisí na tepelných ztrátách domu, účinnosti kotle a způsobu vytápění teplé vody. Orientační množství dřeva i pelet podle vytápěné plochy a zateplení spočítá naše kalkulačka spotřeby dřeva a pelet." },
                  { q: "Je topení dřevem ekologické?", a: "Dřevo i pelety jsou obnovitelné palivo a při spalování se považují za uhlíkově neutrální – uvolní tolik CO2, kolik strom při růstu pohltil. Rozhodující je ale kvalita spalování: moderní kotel na pelety nebo zplyňovací kotel na dřevo s akumulační nádrží emituje výrazně méně prachu než starý prohořívací kotel. Zásadní je suché palivo (vlhkost pod 20 %) a správný provoz, jinak roste množství škodlivin." },
                  { q: "Vyplatí se tepelné čerpadlo do staršího domu?", a: "Tepelné čerpadlo dává největší smysl v domě s nižšími tepelnými ztrátami a nízkoteplotní otopnou soustavou (podlahové topení nebo dostatečně velké radiátory). Ve starším nezatepleném domě s vysokoteplotními radiátory klesá topný faktor a rostou provozní náklady i pořizovací cena. Před rozhodnutím se vyplatí spočítat tepelné ztráty, zvážit zateplení a porovnat návratnost s ostatními zdroji." },
                ].map(({ q, a }) => (
                  <details key={q} className="faq-item">
                    <summary className="faq-q">{q}</summary>
                    <p className="faq-a">{a}</p>
                  </details>
                ))}
              </div>
            </section>

            <ShareButtons
              url="https://www.domovniguru.cz/blog/topeni-drevem-vs-peletami"
              title="Topení dřevem, peletami nebo plynem: srovnání nákladů"
            />

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
                <li><a href="#jak-srovnavat">Cena za kWh tepla</a></li>
                <li><a href="#tabulka">Tabulka nákladů</a></li>
                <li><a href="#drevo-pelety">Dřevo a pelety</a></li>
                <li><a href="#plyn-cerpadlo">Plyn a čerpadlo</a></li>
                <li><a href="#komfort-skladovani">Komfort a skladování</a></li>
                <li><a href="#navratnost">Návratnost a rozhodnutí</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/sezonni-udrzba" className="sidebar-cat-link">❄️ Sezónní údržba<span>36 článků →</span></Link>
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
        .hero-illustration { margin: 28px 0 36px; border-radius: 12px; overflow: hidden; border: 1px solid var(--border); }
        .hero-svg { width: 100%; height: auto; display: block; }
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
