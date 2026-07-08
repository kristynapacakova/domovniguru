import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak vybrat malíře nebo malířskou firmu",
  description: "Kompletní průvodce výběrem malíře – kdy malovat svépomocí a kdy zavolat odborníka, jak porovnat nabídky, co musí obsahovat smlouva a jak reklamovat.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-vybrat-malire-a-firmu" },
  openGraph: { title: "Jak vybrat malíře nebo malířskou firmu", description: "Kompletní průvodce výběrem malíře – kdy malovat svépomocí a kdy zavolat odborníka, jak porovnat nabídky, co musí obsahovat smlouva a jak reklamovat.", url: "https://www.domovniguru.cz/blog/jak-vybrat-malire-a-firmu", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-07-08T08:00:00Z", modifiedTime: "2026-07-08T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20vybrat%20mali%C5%99e%20nebo%20mali%C5%99skou%20firmu&cat=blog", width: 1200, height: 630, alt: "Jak vybrat malíře nebo malířskou firmu" }] },
  twitter: { card: "summary_large_image", title: "Jak vybrat malíře nebo malířskou firmu", description: "Kompletní průvodce výběrem malíře – kdy malovat svépomocí a kdy zavolat odborníka, jak porovnat nabídky, co musí obsahovat smlouva a jak reklamovat." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/jak-vybrat-malire-a-firmu#article", "headline": "Jak vybrat malíře nebo malířskou firmu", "datePublished": "2026-07-08T08:00:00Z", "dateModified": "2026-07-08T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["jak vybrat malíře", "malířská firma", "malování bytu cena", "poptávka malíř", "smlouva s malířem", "reklamace malování"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Malování & barvy", "item": "https://www.domovniguru.cz/blog/kategorie/malovani" }, { "@type": "ListItem", "position": 4, "name": "Jak vybrat malíře nebo malířskou firmu", "item": "https://www.domovniguru.cz/blog/jak-vybrat-malire-a-firmu" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Kolik stojí vymalování bytu od profesionálního malíře?", "acceptedAnswer": { "@type": "Answer", "text": "Cena profesionálního malování se pohybuje obvykle v rozmezí 80–180 Kč za m² stěn a stropů při dvou vrstvách barvy, bez materiálu. Cena závisí na regionu, stavu povrchu, požadované kvalitě přípravy a zda je v ceně zahrnuta barva a pomůcky. V Praze a větších městech jsou ceny vyšší. Vždy si vyžádejte aspoň tři srovnatelné nabídky." } }, { "@type": "Question", "name": "Jak ověřit, že malíř je spolehlivý a legitimní?", "acceptedAnswer": { "@type": "Answer", "text": "Ověřte živnostenský list nebo výpis ze živnostenského rejstříku (živnostenský rejstřík je veřejně přístupný na rzp.cz). Ptejte se na pojištění odpovědnosti za škodu – profesionální firmy ho mají. Reference a fotografie z předchozích zakázek jsou dalším klíčovým kritériem. Vyhněte se řemeslníkům bez smlouvy, kteří žádají celou platbu předem." } }, { "@type": "Question", "name": "Co musí obsahovat smlouva o malování?", "acceptedAnswer": { "@type": "Answer", "text": "Smlouva o malování (nebo alespoň písemná objednávka) by měla obsahovat: přesný rozsah prací (místnosti, plocha v m²), specifikaci barvy a počtu vrstev, termín zahájení a dokončení, celkovou cenu a platební podmínky, specifikaci kdo dodává materiál, záruční dobu a podmínky záruky. Smlouva chrání obě strany a usnadňuje případnou reklamaci." } }, { "@type": "Question", "name": "Jak reklamovat nekvalitně provedenou malbu?", "acceptedAnswer": { "@type": "Answer", "text": "Reklamaci uplatněte písemně u zhotovitele co nejdříve po zjištění vady – ideálně do 30 dnů. Popište konkrétní vady (odlupování, nerovnoměrný povrch, špatný krytí, viditelné stopy). Vady zdokumentujte fotografiemi. Zhotovitel má zákonnou záruční dobu 24 měsíců a je povinen vadu opravit nebo poskytnout slevu z ceny. Pokud odmítá, obraťte se na Českou obchodní inspekci nebo soud." } }, { "@type": "Question", "name": "Je levnější malovat svépomocí nebo najmout odborníka?", "acceptedAnswer": { "@type": "Answer", "text": "Materiál pro malování bytu svépomocí tvoří přibližně 30–40 % celkové ceny profesionálního malování. Ušetříte tedy 60–70 % na práci, ale investujete vlastní čas, fyzickou práci a riskujete horší výsledek bez zkušeností. Pro jednoduchá přemalování s bílou barvou je svépomoc výhodná. Pro náročnější práce (příprava povrchu, tmely, barevné akcentní stěny, štuky) se odborník obvykle vyplatí kvůli výsledku." } }] }] };

const RELATED = [
  { title: "Jak najít a prověřit řemeslníka", href: "/blog/najit-proveri-remeslnika", read: "5 min" },
  { title: "Malovat celý byt za víkend: je to reálné?", href: "/blog/malovat-cely-byt-za-vikend", read: "4 min" },
  { title: "Jak malovat zeď: postup krok za krokem", href: "/blog/jak-malovat-zed", read: "6 min" },
  { title: "Barva na beton a venkovní povrchy", href: "/blog/barva-na-beton-a-venkovni-povrchy", read: "5 min" },
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
              <Link href="/blog/kategorie/malovani">Malování &amp; barvy</Link><span className="breadcrumb-sep">/</span>
              <span>Jak vybrat malíře nebo malířskou firmu</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování &amp; barvy</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak vybrat malíře nebo malířskou firmu</h1>
              <p className="article-lead">Vymalování bytu nebo domu je jedna z nejčastějších řemeslných zakázek – a zároveň jedna z těch, kde se nejsnáze narazí na nekvalitní práci nebo nesplněné sliby. Tento článek vás provede celým procesem od rozhodnutí malovat svépomocí nebo najmout odborníka až po kontrolu hotové práce a případnou reklamaci.</p>
              <div className="article-meta-row"><span>Aktualizováno: 8. července 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#svepomoci-vs-odbornik">Svépomocí nebo odborník?</a></li>
                <li><a href="#kde-hledat">Kde hledat malíře</a></li>
                <li><a href="#poptavka">Na co se zeptat při poptávce</a></li>
                <li><a href="#cenove-nabidky">Srovnání cenových nabídek</a></li>
                <li><a href="#smlouva">Co musí obsahovat smlouva</a></li>
                <li><a href="#kontrola">Jak zkontrolovat hotovou práci</a></li>
                <li><a href="#reklamace">Reklamace a záruky</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="svepomoci-vs-odbornik">
              <h2>Svépomocí nebo povolat odborníka?</h2>
              <p>První rozhodnutí je, zda malování zvládnete sami nebo jestli je výhodné zaplatit odborníka. Odpověď závisí na rozsahu práce, stavu povrchů, vašich zkušenostech a dostupném čase.</p>
              <h3>Kdy malovat svépomocí</h3>
              <ul>
                <li>Přemalování bez barevné změny nebo změna na podobný tón (jedna nebo dvě vrstvy bílé či světlé barvy)</li>
                <li>Malé místnosti v dobrém stavu bez výrazných trhlin nebo poškození</li>
                <li>Máte čas, potřebné pomůcky a alespoň základní zkušenosti</li>
                <li>Nízký rozpočet a přijatelný kompromis v konečném výsledku</li>
              </ul>
              <h3>Kdy zavolat odborníka</h3>
              <ul>
                <li>Větší plochy nebo celý byt – profesionál práci zvládne rychleji a kvalitněji</li>
                <li>Povrch vyžaduje opravu (trhliny, vlhkostní skvrny, odpadávající starý nátěr) – špatná příprava povrchu je nejčastější příčinou špatného výsledku</li>
                <li>Výmalba výraznou barvou nebo barevnými technikami (strukturovaná omítka, dekorativní techniky)</li>
                <li>Malování ve výškách (schodiště, dvorana, místnosti s vysokým stropem) kde je přístup komplikovaný a potenciálně nebezpečný</li>
                <li>Nechcete ztrácet víkend a preferujete profesionální výsledek</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud zvažujete svépomoc, přečtěte si náš podrobný průvodce o tom, jak <Link href="/blog/jak-malovat-zed" style={{ color: "#2a6496", textDecoration: "underline" }}>malovat zeď krok za krokem</Link>. Zjistíte, co konkrétně obnáší příprava, a snáz odhadnete, zda je to práce pro vás.</div>
            </section>

            <section id="kde-hledat">
              <h2>Kde hledat malíře nebo malířskou firmu</h2>
              <p>Způsob, jak malíře najdete, do velké míry určí spolehlivost zakázky. Nejlepší malíři pracují díky doporučením a nemají problémy s nedostatkem práce – naopak jsou vytíženější a méně zugangliví přes inzerce.</p>
              <h3>Doporučení od známých</h3>
              <p>Osobní doporučení od souseda, přítele nebo kolegy, kteří nedávno nechali malovat a jsou spokojeni, je nejspolehlivější cesta. Získáte reálnou zpětnou vazbu, vidíte výsledek práce a malíř ví, že dostane hodnocení od vás i od osoby, která jej doporučila.</p>
              <h3>Recenze a hodnotící weby</h3>
              <p>Weby jako Firmy.cz, Google Maps nebo specializované platformy pro řemeslníky (Profesia, Crafton, Řemeslo v síti) umožňují číst recenze od reálných zákazníků. Hledejte malíře s více než deseti recenzemi a průměrným hodnocením nad 4,5. Pozor na profily s velmi malým počtem recenzí nebo recenze, kde zákazník neuvádí žádné konkrétní detaily zakázky.</p>
              <h3>Živnostenský rejstřík</h3>
              <p>Každý řemeslník nebo firma, která přijme zakázku za úplatu, musí mít živnostenské oprávnění. Základní ověření provedete zdarma na <strong>rzp.cz</strong> (Registr živnostenského podnikání) – zadejte jméno nebo IČO a zkontrolujte, zda je živnost aktivní a odpovídá malířské a natěračské činnosti. Malíř bez živnostenského listu je ve výrazně slabší pozici z hlediska záruk a odpovědnosti.</p>
              <h3>Místní inzerce a stavební firmy</h3>
              <p>Lokální inzerce (letáky ve schránkách, inzertní weby) je nejrizikovější volba – anonymní inzerenti s žádnou historií a referencemi. Větší stavební firmy mají vlastní malíře, ale cena bývá vyšší než u živnostníků.</p>
            </section>

            <section id="poptavka">
              <h2>Na co se zeptat při poptávce</h2>
              <p>Před uzavřením dohody s malířem si vyžádejte osobní prohlídku prostoru – zkušený malíř vám nabídku udělá vždy na místě, ne od stolu. Při prohlídce se ptejte na následující:</p>
              <h3>Zkušenosti a reference</h3>
              <ul>
                <li>Jak dlouho se malování věnujete?</li>
                <li>Můžete ukázat fotografie nebo kontakty na předchozí zákazníky?</li>
                <li>Máte zkušenosti s konkrétním typem práce, který potřebuji (výšky, speciální barvy, oprava povrchu)?</li>
              </ul>
              <h3>Pojištění a odpovědnost</h3>
              <ul>
                <li>Máte pojištění odpovědnosti za škodu způsobenou třetí osobě? (Pokud malíř poškodí vaše věci nebo způsobí škodu sousedovi, pojištění to kryje)</li>
                <li>Jak řeší škody, které vzniknou při práci?</li>
              </ul>
              <h3>Pracovní postup</h3>
              <ul>
                <li>Jaký postup přípravy povrchu navrhujete pro stav mých zdí?</li>
                <li>Kolik vrstev barvy plánujete nanést?</li>
                <li>Jakou barvu doporučujete a proč? (Schopný malíř má přehled o produktech a vysvětlí výhody konkrétního řešení)</li>
                <li>Budete práci dělat sám, nebo s partou? (Při partě je práce rychlejší, ale koordinace může být složitější)</li>
              </ul>
              <h3>Termín a flexibilita</h3>
              <ul>
                <li>Kdy nejdříve jste schopni zahájit?</li>
                <li>Jak dlouho bude malování trvat?</li>
                <li>Co se stane, pokud dojde ke zpoždění z vaší strany?</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Neptejte se jen na výsledek, ale na postup. Malíř, který umí přesně popsat, jak připraví povrch, kolik vrstev nanese a jakou barvu použije, je výrazně spolehlivější než ten, který říká jen „uděláme to jak má být".</div>
            </section>

            <section id="cenove-nabidky">
              <h2>Srovnání cenových nabídek</h2>
              <p>Vyžádejte si aspoň <strong>tři srovnatelné nabídky</strong> – ne dvě, protože pak nevíte, zda je jedna vysoká nebo druhá nízká. Srovnávání nabídek je náročné, pokud každý malíř počítá jinak.</p>
              <h3>Cena za m² nebo paušál?</h3>
              <ul>
                <li><strong>Cena za m² plochy stěn a stropů</strong> – transparentní a srovnatelná mezi dodavateli; nejčastější způsob; průměrná tržní cena se pohybuje 80–180 Kč/m² za práci bez materiálu (pro dvě vrstvy latexu); v Praze bývá vyšší</li>
                <li><strong>Paušální cena za zakázku</strong> – jednodušší pro zákazníka, ale je nutné přesně definovat rozsah; nepodepište paušál bez detailního soupisu prací</li>
              </ul>
              <h3>Co je a co není zahrnuto v ceně?</h3>
              <p>Při porovnávání nabídek si vždy ověřte, co přesně cena zahrnuje:</p>
              <ul>
                <li>Je v ceně materiál (barva, penetrace, tmel, páska, fólie)?</li>
                <li>Je v ceně příprava povrchu (broušení, tmelení, penetrace)?</li>
                <li>Je v ceně zakrytí nábytku a podlah?</li>
                <li>Kolik vrstev barvy je zahrnuto?</li>
                <li>Jsou v ceně rohy, lišty a výřezy kolem oken a dveří?</li>
              </ul>
              <p>Levná nabídka, která nezahrnuje materiál a přípravu povrchu, může vyjít dráž než komplexní nabídka s vším v ceně.</p>
              <h3>Červené vlajky v nabídkách</h3>
              <ul>
                <li>Nabídka výrazně pod ostatními bez vysvětlení – malíř buď chce zálohu a nedodělá práci, nebo šetří na materiálu a přípravě</li>
                <li>Žádost o platbu celé částky předem – standardem je záloha 20–30 %, zbytek po dokončení</li>
                <li>Odmítnutí písemné smlouvy nebo objednávky</li>
                <li>Nemožnost doložit reference nebo pojištění</li>
              </ul>
            </section>

            <section id="smlouva">
              <h2>Co musí obsahovat smlouva o malování</h2>
              <p>Smlouva o dílo (nebo alespoň písemná objednávka potvrzená oběma stranami) je základní ochranou zákazníka i malíře. V případě sporu je jediný spolehlivý důkaz o tom, co bylo sjednáno.</p>
              <h3>Povinné náležitosti smlouvy</h3>
              <ul>
                <li><strong>Identifikace stran</strong> – jméno, adresa, IČO zhotovitele; jméno a adresa objednatele</li>
                <li><strong>Přesný rozsah prací</strong> – které místnosti, které plochy (stěny, stropy, sokly), co se maluje a co ne; ideálně s výměrou v m²</li>
                <li><strong>Specifikace materiálu</strong> – název barvy, výrobce, barevný kód; počet vrstev; typ penetrace</li>
                <li><strong>Příprava povrchu</strong> – co malíř provede před malováním (tmelení, broušení, penetrace, zakrytí nábytku)</li>
                <li><strong>Termín zahájení a dokončení</strong> – s eventuálními podmínkami, které by termín ovlivnily</li>
                <li><strong>Cena a platební podmínky</strong> – celková cena, výše zálohy, kdy a jak se platí zbytek</li>
                <li><strong>Záruční doba a podmínky záruky</strong> – zákon stanoví minimálně 24 měsíců pro spotřebitelské zakázky; podmínky za nichž je záruka platná</li>
                <li><strong>Podmínky změn rozsahu</strong> – jak se řeší víceprací nebo méněprací oproti původnímu rozsahu</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud malíř odmítá podepsat smlouvu nebo naléhá na dohodu jen ústně, je to silná varovná zpráva. Smlouva chrání i jeho – a profesionální malíř to ví.</div>
            </section>

            <section id="kontrola">
              <h2>Jak zkontrolovat hotovou práci</h2>
              <p>Převzetí práce je okamžik, kdy zákazník musí být bedlivý. Podpis předávacího protokolu bez kontroly může zkomplikovat pozdější reklamaci.</p>
              <h3>Co kontrolovat při přejímce</h3>
              <ul>
                <li><strong>Rovnoměrné krytí</strong> – prohlédněte zeď z bočního pohledu (pod úhlem) v přirozeném světle; problémy s krytím nebo stopy válce jsou v tomto pohledu nejlépe viditelné</li>
                <li><strong>Rohy a výřezy</strong> – přechody u oken, dveří, lišt a stropu; špatně provedené řezání štětcem je nejčastější chybou</li>
                <li><strong>Čistota přechodu soklu a podlahy</strong> – stopy barvy na podlaze nebo na soklu, které nebyly zakryty</li>
                <li><strong>Omítka nábytku a doplňků</strong> – kapky barvy na vypínačích, zárubních, podlaze</li>
                <li><strong>Rovnoměrnost barevného tónu</strong> – kontrolujte na celé ploše, rozdílné tóny mohou vzniknout při nevymíchané barvě nebo nedostatečném počtu vrstev</li>
                <li><strong>Chybějící plochy</strong> – za nábytkem, v koutech nebo za radiátory; typická místa, kde malíři vynechají nebo udělají pouze jeden nátěr</li>
              </ul>
              <h3>Osvětlení při kontrole</h3>
              <p>Provádějte kontrolu při přirozeném denním světle, ideálně přisvícením přenosnou lampou vedenou podél stěny. Přímé boční osvětlení odhalí nerovnosti, stopy a problémy s krytím, které při normálním pokojovém osvětlení nejsou vidět.</p>
            </section>

            <section id="reklamace">
              <h2>Reklamace a záruky</h2>
              <p>Pokud po dokončení práce zjistíte vady – odlupující se barvu, viditelné přechody, špatné krytí nebo jiné problémy – máte ze zákona právo na reklamaci.</p>
              <h3>Zákonné záruční lhůty</h3>
              <p>Při zakázce fyzické osoby (spotřebitele) u podnikatele platí zákonná záruční doba <strong>24 měsíců</strong> ode dne předání díla. Tato lhůta se vztahuje na vady vzniklé z nekvalitně provedené práce nebo použití nevhodného materiálu. Vady způsobené vaším nevhodným zacházením (fyzické poškození, vlhkost z jiné příčiny) pod záruku nespadají.</p>
              <h3>Postup při reklamaci</h3>
              <ol>
                <li>Vadu zjistěte a zdokumentujte co nejdříve – pořiďte fotografie, ideálně s datem</li>
                <li>Reklamaci uplatněte <strong>písemně</strong> u zhotovitele – dopisem nebo e-mailem; popište konkrétní vady a jejich rozsah</li>
                <li>Zhotovitel má ze zákona 30 dní na vyřízení reklamace (potvrzení nebo zamítnutí a oprava)</li>
                <li>Trvejte na písemném potvrzení přijetí reklamace se datem</li>
                <li>Pokud zhotovitel odmítá reklamaci uznat nebo nereaguje, obraťte se na <strong>Českou obchodní inspekci (ČOI)</strong> nebo zvažte mediaci či soudní cestu</li>
              </ol>
              <p>Více o prověřování a výběru spolehlivých řemeslníků obecně se dočtete v článku <Link href="/blog/najit-proveri-remeslnika" style={{ color: "#2a6496", textDecoration: "underline" }}>jak najít a prověřit řemeslníka</Link>. Pokud plánujete náročnější zakázku jako nátěr venkovního betonu nebo fasády, přečtěte si také článek <Link href="/blog/barva-na-beton-a-venkovni-povrchy" style={{ color: "#2a6496", textDecoration: "underline" }}>barva na beton a venkovní povrchy</Link> – kde jsou vyšší nároky na materiál i postup práce.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Před podpisem předávacího protokolu si zapište všechny výhrady přímo do protokolu. Podpis bez výhrad znamená, že práci přijímáte jako bezchybnou, a pozdější reklamace viditelných vad je pak obtížnější.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Kolik stojí vymalování bytu od profesionálního malíře?", a: "Cena profesionálního malování se pohybuje obvykle v rozmezí 80–180 Kč za m² stěn a stropů při dvou vrstvách barvy, bez materiálu. Cena závisí na regionu, stavu povrchu, požadované kvalitě přípravy a zda je v ceně zahrnuta barva a pomůcky. V Praze a větších městech jsou ceny vyšší. Vždy si vyžádejte aspoň tři srovnatelné nabídky." },
                  { q: "Jak ověřit, že malíř je spolehlivý a legitimní?", a: "Ověřte živnostenský list nebo výpis ze živnostenského rejstříku (živnostenský rejstřík je veřejně přístupný na rzp.cz). Ptejte se na pojištění odpovědnosti za škodu – profesionální firmy ho mají. Reference a fotografie z předchozích zakázek jsou dalším klíčovým kritériem. Vyhněte se řemeslníkům bez smlouvy, kteří žádají celou platbu předem." },
                  { q: "Co musí obsahovat smlouva o malování?", a: "Smlouva o malování (nebo alespoň písemná objednávka) by měla obsahovat: přesný rozsah prací (místnosti, plocha v m²), specifikaci barvy a počtu vrstev, termín zahájení a dokončení, celkovou cenu a platební podmínky, specifikaci kdo dodává materiál, záruční dobu a podmínky záruky. Smlouva chrání obě strany a usnadňuje případnou reklamaci." },
                  { q: "Jak reklamovat nekvalitně provedenou malbu?", a: "Reklamaci uplatněte písemně u zhotovitele co nejdříve po zjištění vady – ideálně do 30 dnů. Popište konkrétní vady (odlupování, nerovnoměrný povrch, špatný krytí, viditelné stopy). Vady zdokumentujte fotografiemi. Zhotovitel má zákonnou záruční dobu 24 měsíců a je povinen vadu opravit nebo poskytnout slevu z ceny. Pokud odmítá, obraťte se na Českou obchodní inspekci nebo soud." },
                  { q: "Je levnější malovat svépomocí nebo najmout odborníka?", a: "Materiál pro malování bytu svépomocí tvoří přibližně 30–40 % celkové ceny profesionálního malování. Ušetříte tedy 60–70 % na práci, ale investujete vlastní čas, fyzickou práci a riskujete horší výsledek bez zkušeností. Pro jednoduchá přemalování s bílou barvou je svépomoc výhodná. Pro náročnější práce (příprava povrchu, tmely, barevné akcentní stěny, štuky) se odborník obvykle vyplatí kvůli výsledku." },
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
                    <div className="card-eyebrow-row"><span>Malování &amp; barvy</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#svepomoci-vs-odbornik">Svépomocí nebo odborník?</a></li>
                <li><a href="#kde-hledat">Kde hledat malíře</a></li>
                <li><a href="#poptavka">Na co se zeptat</a></li>
                <li><a href="#cenove-nabidky">Cenové nabídky</a></li>
                <li><a href="#smlouva">Co musí obsahovat smlouva</a></li>
                <li><a href="#kontrola">Kontrola hotové práce</a></li>
                <li><a href="#reklamace">Reklamace a záruky</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/malovani" className="sidebar-cat-link">🎨 Malování &amp; barvy<span>34 článků →</span></Link>
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
