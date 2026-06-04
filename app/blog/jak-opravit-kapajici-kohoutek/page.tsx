import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak opravit kapající kohoutek – výměna těsnění krok za krokem",
  description: "Kapající kohoutek vás stojí stovky korun ročně a otravuje nervy. Opravte ho sami za 20 minut výměnou těsnění – bez instalatéra a s nářadím z domácí dílny.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-opravit-kapajici-kohoutek" },
  openGraph: { title: "Jak opravit kapající kohoutek – výměna těsnění krok za krokem", description: "Kapající kohoutek vás stojí stovky korun ročně. Opravte ho sami za 20 minut výměnou těsnění – bez instalatéra.", url: "https://www.domovniguru.cz/blog/jak-opravit-kapajici-kohoutek", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-04T08:00:00Z", modifiedTime: "2026-06-04T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20opravit%20kapaj%C3%ADc%C3%AD%20kohoutek%20%E2%80%93%20v%C3%BDm%C4%9Bna%20t%C4%9Bsn%C4%9Bn%C3%AD&cat=blog", width: 1200, height: 630, alt: "Jak opravit kapající kohoutek – výměna těsnění krok za krokem" }] },
  twitter: { card: "summary_large_image", title: "Jak opravit kapající kohoutek 2026", description: "Výměna těsnění kohoutku krok za krokem – opravte sami za 20 minut bez instalatéra." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/jak-opravit-kapajici-kohoutek#article",
    "headline": "Jak opravit kapající kohoutek – výměna těsnění krok za krokem",
    "datePublished": "2026-06-04T08:00:00Z",
    "dateModified": "2026-06-04T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak opravit kapající kohoutek", "výměna těsnění kohoutku", "kapající kohoutek oprava", "baterie kape", "jak zastavit kapání kohoutku"]
  }]
};

const RELATED = [
  { title: "Jak vyměnit zásuvku – bezpečný postup svépomocí", href: "/blog/jak-vymenit-zasuvku", read: "7 min" },
  { title: "Jak vyčistit sifon – rychlý návod bez chemie", href: "/navody/jak-vycistit-sifon", read: "5 min" },
  { title: "Jak utěsnit vanu silikonem – krok za krokem", href: "/navody/jak-utesnit-vanu-silikonem", read: "6 min" },
  { title: "Jak odhadnout cenu rekonstrukce", href: "/blog/odhadnout-cenu-rekonstrukce", read: "9 min" },
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
              <Link href="/navody" className="breadcrumb">Návody &amp; opravy</Link><span className="breadcrumb-sep">/</span>
              <span>Oprava kapajícího kohoutku</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/navody" className="article-cat-pill">🔧 Návody &amp; opravy</Link>
                <span className="article-read-time">⏱ 8 min čtení</span>
              </div>
              <h1 className="article-h1">Jak opravit kapající kohoutek – výměna těsnění krok za krokem</h1>
              <p className="article-lead">Kapající kohoutek otravuje nervy, přerušuje spánek a tiše vám zdražuje účty za vodu. Dobrá zpráva: ve většině případů stačí vyměnit těsnění za pár korun — a celá oprava zabere méně než dvacet minut.</p>
              <div className="article-meta-row"><span>Publikováno: 4. června 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/jak-opravit-kapajici-kohoutek" title="Jak opravit kapající kohoutek – výměna těsnění krok za krokem" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 185" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="185" fill="#0d1f35"/>

                {/* Title */}
                <text x="380" y="22" textAnchor="middle" fontSize="10" fill="#7eaed4" fontWeight="700" letterSpacing="0.08em">PRŮŘEZ KOHOUTKEM – HLAVNÍ SOUČÁSTI</text>

                {/* Faucet body – vertical stem */}
                <rect x="344" y="32" width="72" height="110" rx="6" fill="#1a3550" stroke="#2e6095" strokeWidth="1.5"/>
                {/* Faucet spout */}
                <rect x="344" y="104" width="120" height="22" rx="5" fill="#1a3550" stroke="#2e6095" strokeWidth="1.5"/>
                <rect x="452" y="110" width="18" height="34" rx="4" fill="#1a3550" stroke="#2e6095" strokeWidth="1.5"/>

                {/* Handle top */}
                <rect x="328" y="28" width="104" height="18" rx="9" fill="#2e6095" stroke="#4a90d9" strokeWidth="1"/>
                <text x="380" y="41" textAnchor="middle" fontSize="9" fill="#c8e0f4" fontWeight="600">PÁKA / RUKOJEŤ</text>

                {/* Nut / matica */}
                <rect x="350" y="50" width="60" height="16" rx="3" fill="#1d4068" stroke="#3a7abf" strokeWidth="1"/>
                <text x="380" y="62" textAnchor="middle" fontSize="8.5" fill="#90c4e8" fontWeight="600">MATICA</text>

                {/* Vreteno */}
                <rect x="364" y="70" width="32" height="36" rx="3" fill="#163354" stroke="#2e6095" strokeWidth="1"/>
                <text x="380" y="93" textAnchor="middle" fontSize="8" fill="#7eaed4">VŘETENO</text>

                {/* Tesneni – highlighted */}
                <ellipse cx="380" cy="112" rx="18" ry="8" fill="#e05c3a" opacity="0.9"/>
                <text x="380" y="115" textAnchor="middle" fontSize="7.5" fill="#fff" fontWeight="700">TĚSNĚNÍ</text>

                {/* Sedlo */}
                <ellipse cx="380" cy="126" rx="22" ry="6" fill="#1a3550" stroke="#3a7abf" strokeWidth="1"/>
                <text x="380" y="129" textAnchor="middle" fontSize="7.5" fill="#90c4e8">SEDLO</text>

                {/* Labels with arrows – left side */}
                {/* Matica label */}
                <line x1="350" y1="58" x2="290" y2="58" stroke="#4a90d9" strokeWidth="0.8" strokeDasharray="3,2"/>
                <rect x="130" y="48" width="155" height="22" rx="5" fill="#1a3550" stroke="#2e6095" strokeWidth="1"/>
                <text x="208" y="58" textAnchor="middle" fontSize="8.5" fill="#7eaed4" fontWeight="600">Matica</text>
                <text x="208" y="68" textAnchor="middle" fontSize="7.5" fill="#4a7a9e">Přidržuje vřeteno v tělese</text>

                {/* Vreteno label */}
                <line x1="364" y1="88" x2="290" y2="88" stroke="#4a90d9" strokeWidth="0.8" strokeDasharray="3,2"/>
                <rect x="130" y="78" width="155" height="22" rx="5" fill="#1a3550" stroke="#2e6095" strokeWidth="1"/>
                <text x="208" y="88" textAnchor="middle" fontSize="8.5" fill="#7eaed4" fontWeight="600">Vřeteno</text>
                <text x="208" y="98" textAnchor="middle" fontSize="7.5" fill="#4a7a9e">Pohybuje se nahoru a dolů</text>

                {/* Labels with arrows – right side */}
                {/* Tesneni label */}
                <line x1="398" y1="112" x2="460" y2="112" stroke="#e05c3a" strokeWidth="0.8" strokeDasharray="3,2"/>
                <rect x="462" y="102" width="172" height="22" rx="5" fill="#2a1510" stroke="#e05c3a" strokeWidth="1"/>
                <text x="548" y="112" textAnchor="middle" fontSize="8.5" fill="#f4a080" fontWeight="700">Těsnění (guma / keramika)</text>
                <text x="548" y="122" textAnchor="middle" fontSize="7.5" fill="#c06040">← nejčastější příčina kapání</text>

                {/* Sedlo label */}
                <line x1="402" y1="126" x2="460" y2="134" stroke="#4a90d9" strokeWidth="0.8" strokeDasharray="3,2"/>
                <rect x="462" y="126" width="172" height="22" rx="5" fill="#1a3550" stroke="#2e6095" strokeWidth="1"/>
                <text x="548" y="136" textAnchor="middle" fontSize="8.5" fill="#7eaed4" fontWeight="600">Sedlo</text>
                <text x="548" y="146" textAnchor="middle" fontSize="7.5" fill="#4a7a9e">Těsnění dosedá na sedlo</text>

                {/* Bottom bar */}
                <rect y="168" width="760" height="17" fill="#0a1828" opacity="0.8"/>
                <text x="380" y="180" textAnchor="middle" fontSize="8" fill="#4a90d9" fontWeight="600" letterSpacing="0.06em">🔧 OPOTŘEBENÉ TĚSNĚNÍ = NEJČASTĚJŠÍ PŘÍČINA · OPRAVA: 5–20 KČ ZA NÁHRADNÍ DÍL · ČAS: 15–20 MINUT</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#proc">Proč kohoutek kape</a></li>
                <li><a href="#nastroje">Co budete potřebovat</a></li>
                <li><a href="#postup-starsi">Oprava starého kohoutku s gumovým těsněním</a></li>
                <li><a href="#postup-baterie">Oprava moderní baterie s keramickým ventilem</a></li>
                <li><a href="#kdyz-nestaci">Kdy oprava nestačí</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="proc">
              <h2>Proč kohoutek kape – nejčastější příčiny</h2>
              <p>Kapající kohoutek není jen otravný zvuk — jeden kapající kohoutek s frekvencí jedné kapky za sekundu spotřebuje přes 30 litrů vody denně, tedy přibližně 11 000 litrů ročně. To představuje zbytečný výdaj 200–500 Kč ročně jen za vodu, nepočítaje vodné a stočné. Oprava se tedy vyplatí i čistě ekonomicky.</p>
              <p>Příčiny kapání se liší podle typu kohoutku, ale ve většině případů jde o jeden ze tří problémů:</p>
              <ul>
                <li><strong>Opotřebené gumové těsnění:</strong> Nejčastější příčina u starších kohoutků s vřetenem. Guma se po letech používání tvrdne, praská a přestane doléhat na sedlo. Řešení: výměna těsnění za 5–15 Kč.</li>
                <li><strong>Poškozená keramická vložka:</strong> Moderní baterie a páková armatura využívají keramický disk místo gumového těsnění. Keramika je trvanlivější, ale nevydrží nečistoty v tvrdé vodě nebo mechanické poškození. Řešení: výměna celé keramické kazety (150–500 Kč).</li>
                <li><strong>Poškozené nebo zkorodované sedlo:</strong> Sedlo je kovová plocha, na které těsnění dosedá. Pokud je podrápané nebo zkorodované, ani nové těsnění nemusí pomoci. Sedlo lze leštit speciálním nástrojem nebo vyfrézovat, u starých kohoutků je ale lepší uvažovat o výměně celého kohoutku.</li>
                <li><strong>Uvolněné O-kroužky na těle baterie:</strong> Pokud voda nevytéká z hubice, ale ze základny baterie nebo kolem páky, problém je v O-kroužcích těsnících tělo armatury. Tyto kroužky jsou levné (2–10 Kč/ks) a výměna je snadná.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Než začnete rozmontovávat kohoutek, určete odkud přesně voda kape. Kapání z hubice = těsnění nebo keramická kazeta. Kapání ze základny nebo kolem páky = O-kroužky. Kapání ze závitu pod dřezem = těsnění na přípojce, ne na kohoutku.</div>
            </section>

            <section id="nastroje">
              <h2>Co budete potřebovat – nářadí a náhradní díly</h2>
              <p>Oprava kohoutku nevyžaduje specializované nářadí. Vše potřebné máte pravděpodobně doma nebo pořídíte v hobbymarketu za pár desítek korun.</p>
              <ul>
                <li><strong>Nastavitelný klíč nebo sada očkoplochých klíčů:</strong> Pro povolení matice kohoutku a přípojných matic pod dřezem. Klíč na 17, 19 a 22 mm pokryje 90 % běžných kohoutků.</li>
                <li><strong>Šroubováky (plochý i křížový):</strong> Pro sejmutí dekorativní čepičky a vyšroubování středového šroubu u starších kohoutků.</li>
                <li><strong>Sada těsnění a O-kroužků:</strong> V hobbymarketech se prodávají sady s desítkami různých průměrů za 50–100 Kč. Alternativně vezměte starý kohoutek s sebou a nechte si poradit v prodejně.</li>
                <li><strong>Teflonová páska (PTFE páska):</strong> Pro dotěsnění závitů při zpětné montáži. Svitek stojí 10–30 Kč a v domácí dílně se hodí pořád.</li>
                <li><strong>Silikonová vazelína nebo mazivo na armatury:</strong> Prodlužuje životnost nového těsnění a usnadňuje montáž. Nestačí žádné jiné mazivo — oleje na bázi ropy napadají gumu.</li>
                <li><strong>Hadřík a vědro:</strong> Z kohoutku po otevření vyteče zbytková voda. Mějte připravené.</li>
                <li><strong>Čelovka nebo svítilna:</strong> Pod dřezem bývá špatné osvětlení a potřebujete vidět na uzavírací ventily.</li>
              </ul>
              <p>Pokud nevíte, jaký typ kohoutku máte, existují tři základní typy běžné v českých domácnostech: <strong>starý kohoutek s vřetenem</strong> (dvě ovládací kolečka — jedno na teplou, jedno na studenou vodu), <strong>páková baterie</strong> (jedna páka ovládající průtok i teplotu) a <strong>termostatická baterie</strong> (páka průtoku + termostatický ovladač teploty). Postup se pro každý typ mírně liší — viz sekce 3 a 4.</p>
            </section>

            <section id="postup-starsi">
              <h2>Oprava starého kohoutku s gumovým těsněním</h2>
              <p>Staré kohoutky s dvěma ovládacími kolečky jsou nejjednodušší na opravu. Jejich vnitřní mechanismus se za posledních 80 let prakticky nezměnil.</p>
              <ul>
                <li><strong>Krok 1 – Zavřete přívod vody:</strong> Pod dřezem nebo vanou najděte uzavírací ventily na přívodních hadicích a otočte je doprava (po směru hodinových ručiček) až na doraz. Pokud přímé uzavírací ventily chybí, musíte uzavřít hlavní uzávěr pro celý byt nebo dům. Po zavření ventilu otevřete kohoutek a nechte vytéct zbytkovou vodu z potrubí.</li>
                <li><strong>Krok 2 – Sejměte ovládací kolečko:</strong> Hledejte malou dekorativní čepičku ve středu kolečka (označenou H nebo C, nebo modrou/červenou barvou). Vyjměte ji malým plochým šroubovákem nebo konečkem prstu. Pod čepičkou je šroub (nejčastěji křížový M4 nebo M5) — vyšroubujte ho a kolečko sejměte.</li>
                <li><strong>Krok 3 – Odšroubujte matici vřetena:</strong> Nastavitelným klíčem nebo klíčem příslušné velikosti odšroubujte šestihrannou matici pod kolečkem. Otáčejte doleva (proti směru hodinových ručiček). Matice může být tuhá — přidržte tělo kohoutku druhou rukou, aby se nevykroutil celý kohoutek z desky.</li>
                <li><strong>Krok 4 – Vytáhněte vřeteno:</strong> Po odšroubování matice celé vřeteno (bronzový nebo mosazný válec se závitem) vytáhněte nahoru. Na spodním konci vřetena uvidíte staré gumové těsnění — buď přidržované šroubkem, nebo zacvaknuté v plastovém košíčku.</li>
                <li><strong>Krok 5 – Vyměňte těsnění:</strong> Odšroubujte šroubek (nebo vyjměte starý kroužek) a nasaďte nové těsnění stejného průměru. Před nasazením potřete těsnění trochou silikonové vazelíny — bude lépe dosedhat a vydrží déle.</li>
                <li><strong>Krok 6 – Zkontrolujte sedlo:</strong> Svítilnou nahlédněte do tělesa kohoutku na sedlo — kovovou plochu, na které těsnění dosedá. Pokud je lesklé a hladké, je v pořádku. Pokud vidíte rýhy nebo koroze, jemně ho vyleštěte kouskem jemného smirkového papíru (P400) nebo nechte sedlo vyfrézovat.</li>
                <li><strong>Krok 7 – Zpětná montáž:</strong> Vřeteno zasuňte zpět, matici utáhněte klíčem (ne silou — přetažení poškodí závit), nasaďte kolečko a utáhněte šroub. Otevřete přívod vody a pomalu otestujte kohoutek.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Při zpětné montáži utahujte matici jen „na pevno" — nikoliv silou. Přetažená matice poškodí závit v těle kohoutku a z drobné opravy za 15 Kč se stane výměna za 1 500 Kč. Pravidlo pro armatury: utáhnout rukou + čtvrt otáčky klíčem.</div>
            </section>

            <section id="postup-baterie">
              <h2>Oprava moderní baterie s keramickým ventilem</h2>
              <p>Páková baterie (jedna páka pro průtok i teplotu) obsahuje uvnitř keramickou kazetu — dvojici přesných keramických disků, které se vůči sobě otáčejí a tím řídí průtok a teplotu. Keramika je trvanlivá, ale nevydrží usazeniny z tvrdé vody nebo mechanický otřes.</p>
              <ul>
                <li><strong>Krok 1 – Zavřete přívod vody:</strong> Stejně jako u starého kohoutku — uzavírací ventily pod dřezem otočte doprava. Otevřete baterii a nechte vytéct zbytkovou vodu.</li>
                <li><strong>Krok 2 – Sejměte páku:</strong> Na spodní straně páky (nebo pod dekorativní čepičkou na boku) najděte šroub — nejčastěji imbusový (Torx nebo hexagon, velikost 2–4 mm). Uvolněte šroub a páku vytáhněte nahoru.</li>
                <li><strong>Krok 3 – Sejměte kryt a pojistnou matici:</strong> Pod pákou je zpravidla plastový nebo chromový kryt. Sejměte ho (buď jde dolů, nebo se odšroubuje). Pod ním je velká pojistná matice nebo kroužek — odšroubujte ho klíčem nebo rukou.</li>
                <li><strong>Krok 4 – Vytáhněte keramickou kazetu:</strong> Kazeta vypadá jako válcová plastová patrona (průměr 35–40 mm u standardních baterií). Vytáhněte ji přímo nahoru — může trochu vzdorovat usazeninami, ale nepotřebujete sílu.</li>
                <li><strong>Krok 5 – Identifikujte a objednejte náhradní kazetu:</strong> Na kazetě najdete označení výrobce a kód. Vezměte kazetu do hobbymarketu nebo objednejte online. Standardní kazeta průměru 35 mm stojí 150–350 Kč. Originální kazety jsou o něco dražší (300–700 Kč) ale lépe pasují.</li>
                <li><strong>Krok 6 – Vyčistěte těleso baterie:</strong> Před montáží nové kazety vyčistěte těleso baterie od vodního kamene octem nebo přípravkem na vodní kámen. Nechte působit 10 minut, opláchněte vodou.</li>
                <li><strong>Krok 7 – Namontujte novou kazetu:</strong> Kazetu zasuňte do tělesa tak, aby výstupky na kazetě zapadly do drážek v tělese (kazeta jde jen jedním způsobem). Dotáhněte pojistnou matici, nasaďte kryt a páku. Otevřete přívod vody a testujte.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud baterie kape i po výměně kazety, zkontrolujte O-kroužky na přívodních hadicích. Tyto kroužky jsou součástí hadice — utáhněte přípojné matice klíčem nebo vyměňte celou flexibilní hadici (100–200 Kč za kus).</div>
            </section>

            <section id="kdyz-nestaci">
              <h2>Kdy oprava nestačí a je čas na výměnu kohoutku</h2>
              <p>Oprava těsnění nebo výměna keramické kazety vyřeší 80 % případů kapajících kohoutků. Existují ale situace, kdy je ekonomičtější nebo bezpečnější kohoutek rovnou vyměnit.</p>
              <ul>
                <li><strong>Kohoutek kape i po výměně těsnění:</strong> Pokud jste vyměnili těsnění a kohoutek stále kape, problém je pravděpodobně v sedlu. Poškrábané nebo zkorodované sedlo lze leštit sedlovacím nástrojem (prodává se v hobbymarketech, 200–400 Kč), ale u kohoutku staršího 20 let se to nevyplatí.</li>
                <li><strong>Poškozený závit na tělese kohoutku:</strong> Pokud jste přetáhli matici nebo je závit viditelně poničený, těsnění nebude správně přidrženo. Oprava závitu je komplikovaná — vyměňte celý kohoutek.</li>
                <li><strong>Kohoutek ze slitiny zinku nebo z plastu:</strong> Levné armatury z Číny jsou vyrobeny z křehkých slitin. Kohoutek se může prasknout při demontáži nebo po opravě vydržet jen pár měsíců. Investujte do mosazného nebo nerezového kohoutku renomované značky.</li>
                <li><strong>Stáří nad 20–25 let:</strong> Starý kohoutek má za sebou desítky tisíc cyklů otevření a zavření. I po opravě těsnění brzy selže jiná součást. Nový kohoutek stojí 300–2 000 Kč a vydrží 10–15 let bez problémů.</li>
                <li><strong>Kohoutek vytéká z více míst najednou:</strong> Kapání z hubice, ze základny a kolem páky současně signalizuje, že celá armatura je opotřebená. Opravovat ji po součástech je dražší než jednorázová výměna.</li>
              </ul>
              <p>Výměna celého kohoutku (bez nutnosti bourání) zvládne šikovný kutil sám — jediné, co potřebujete, je klíč na přípojné matice a teflonová páska. Pokud ale nemáte uzavírací ventily pod dřezem a museli byste zavírat hlavní uzávěr celého domu, zvažte přivolání instalatéra — práce za 1–2 hodiny vás vyjde na 500–1 500 Kč a ušetříte starosti.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Kolik stojí oprava kapajícího kohoutku svépomocí?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Výměna gumového těsnění vás vyjde na 5–15 Kč za samotné těsnění. Sada různých těsnění a O-kroužků stojí 50–100 Kč a vydrží na desítky oprav. Výměna keramické kazety v moderní baterii stojí 150–500 Kč za kazetu. Teflonová páska a silikonová vazelína přijdou dohromady na 50–80 Kč a budete je mít pro příští opravy. Celková investice: 50–600 Kč, oproti 500–2 000 Kč za instalatéra.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Musím vždy zavírat přívod vody pro celý byt?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ne. Moderní instalace mají pod každým dřezem, vanou nebo záchodem přímé uzavírací ventily (rohové ventily) na přívodních hadicích. Stačí uzavřít tyto ventily — ostatní spotřebiče v bytě zůstanou funkční. Pokud tyto ventily nemáte nebo nejdou zavřít (zrezivělé, netěsní), je to příležitost nechat je instalatérem vyměnit — cena za kus je 50–150 Kč plus práce.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak poznám, jaký průměr těsnění potřebuji?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Nejjistější způsob je vzít staré těsnění do hobbymarketu a porovnat na místě. Těsnění se vyrábí v průměrech 10, 13, 15, 17 a 19 mm (nejčastěji 15 mm pro standardní kohoutky). Alternativně změřte vnitřní průměr košíčku, do kterého těsnění sedí. Sada s různými průměry za 50–80 Kč vám zajistí, že vždy najdete správnou velikost.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Kape mi voda ze základny baterie, ne z hubice – co s tím?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Kapání ze základny baterie nebo kolem páky znamená poškozené O-kroužky na těle armatury. Tyto kroužky těsní spoj mezi pohyblivou pákou a tělem baterie. Postup je podobný jako výměna kazety — demontujte páku a kryt, najděte O-kroužky v drážkách na těle baterie, vyměňte je za stejně velké (průměr změřte nebo vezměte originál do obchodu), nasaďte zpátky. O-kroužky stojí 2–10 Kč za kus.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak dlouho vydrží nové těsnění nebo keramická kazeta?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Kvalitní gumové těsnění (EPDM nebo NBR guma) vydrží 5–10 let při běžném používání. Keramická kazeta renomované značky (Kerox, Sedal, Grohe) vydrží 10–15 let a zvládne 500 000 až 1 000 000 cyklů otevření. Levné keramické kazety z neznačkových armatur mohou selhat za 1–3 roky. Prodlouží životnost: pravidelné odstraňování vodního kamene z armatury, nesílové zacházení s pákou a kohoutkek (netlačit za doraz).</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/jak-opravit-kapajici-kohoutek" title="Jak opravit kapající kohoutek – výměna těsnění krok za krokem" />

            <section className="related-section">
              <h2>Související články</h2>
              <div className="related-grid">
                {RELATED.map((r) => (
                  <Link key={r.href} href={r.href} className="card">
                    <div className="card-eyebrow-row"><span>Návody &amp; opravy</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#proc">Proč kohoutek kape</a></li>
                <li><a href="#nastroje">Co budete potřebovat</a></li>
                <li><a href="#postup-starsi">Oprava starého kohoutku</a></li>
                <li><a href="#postup-baterie">Oprava moderní baterie</a></li>
                <li><a href="#kdyz-nestaci">Kdy vyměnit kohoutek</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/navody" className="sidebar-cat-link">🔧 Návody &amp; opravy<span>50 článků →</span></Link>
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
        .article-body p{font-size:16px;line-height:1.75;color:#2a2a28;font-weight:300;margin-bottom:14px}
        .article-body ul{padding-left:22px;margin-bottom:16px;display:flex;flex-direction:column;gap:8px}
        .article-body li{font-size:15px;line-height:1.6;color:#2a2a28;font-weight:300}
        .article-body strong{font-weight:600;color:var(--text)}
        .article-tip{background:#fff8e8;border-left:3px solid #f59e0b;border-radius:0 8px 8px 0;padding:14px 18px;font-size:14px;line-height:1.6;color:#78716c;margin:20px 0}
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
