import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak snížit náklady na ohřev teplé vody",
  description: "Ohřev vody tvoří velkou část účtu za energii. Poradíme, jak nastavit teplotu bojleru, zateplit nádrž i potrubí, využít nízký tarif a kolik ušetří úsporná sprchová hlavice nebo tepelné čerpadlo.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-snizit-naklady-na-ohrev-vody" },
  openGraph: { title: "Jak snížit náklady na ohřev teplé vody", description: "Ohřev vody tvoří velkou část účtu za energii. Poradíme, jak nastavit teplotu bojleru, zateplit nádrž i potrubí, využít nízký tarif a kolik ušetří úsporná sprchová hlavice nebo tepelné čerpadlo.", url: "https://www.domovniguru.cz/blog/jak-snizit-naklady-na-ohrev-vody", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-07-21T08:00:00Z", modifiedTime: "2026-07-21T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20sn%C3%AD%C5%BEit%20n%C3%A1klady%20na%20oh%C5%99ev%20tepl%C3%A9%20vody&cat=blog", width: 1200, height: 630, alt: "Jak snížit náklady na ohřev teplé vody" }] },
  twitter: { card: "summary_large_image", title: "Jak snížit náklady na ohřev teplé vody", description: "Ohřev vody tvoří velkou část účtu za energii. Poradíme, jak nastavit teplotu bojleru, zateplit nádrž i potrubí, využít nízký tarif a kolik ušetří úsporná sprchová hlavice nebo tepelné čerpadlo." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/jak-snizit-naklady-na-ohrev-vody#article", "headline": "Jak snížit náklady na ohřev teplé vody", "datePublished": "2026-07-21T08:00:00Z", "dateModified": "2026-07-21T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["náklady na ohřev vody", "úspora ohřev vody", "teplota bojleru", "izolace bojleru", "nízký tarif ohřev vody", "úsporná sprchová hlavice", "tepelné čerpadlo bojler"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Elektrika & osvětlení", "item": "https://www.domovniguru.cz/blog/kategorie/elektrika" }, { "@type": "ListItem", "position": 4, "name": "Jak snížit náklady na ohřev teplé vody", "item": "https://www.domovniguru.cz/blog/jak-snizit-naklady-na-ohrev-vody" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Na kolik stupňů nastavit bojler, aby byl úsporný a bezpečný?", "acceptedAnswer": { "@type": "Answer", "text": "Optimum je 55–60 °C. Nižší teplota (pod 50 °C) sice šetří energii, ale zvyšuje riziko množení bakterie Legionella v nádrži. Vyšší teplota (nad 65 °C) zbytečně zvyšuje tepelné ztráty a urychluje usazování vodního kamene. U elektrického bojleru, který se ohřívá jen jednou denně v nízkém tarifu, se doporučuje spíše 60 °C, aby voda vydržela teplá po celý den." } }, { "@type": "Question", "name": "Kolik ušetřím zateplením bojleru a potrubí?", "acceptedAnswer": { "@type": "Answer", "text": "Termoizolační obal na starší nezateplený bojler sníží tepelné ztráty zásobníku zhruba o 25–40 %, což u běžné domácnosti znamená úsporu řádově stovek až přes tisíc korun ročně. Návlekové izolace na rozvody teplé vody stojí pár desítek korun za metr a zabrání zbytečnému chladnutí vody v potrubí. Obojí je levné, rychlé a vrátí se během jedné až dvou sezón." } }, { "@type": "Question", "name": "Vyplatí se ohřívat vodu jen v nízkém tarifu (NT)?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, pokud máte dvoutarifní sazbu (například D25d nebo D26d) s akumulačním ohřevem. Elektrický bojler přepněte přes spínací hodiny nebo HDO tak, aby se ohříval převážně v době nízkého tarifu, kdy je kWh výrazně levnější. Zásobník o objemu 100–160 litrů obvykle vydrží zásobit domácnost teplou vodou po celý den z jednoho nočního ohřevu." } }, { "@type": "Question", "name": "Kolik vody a peněz ušetří úsporná sprchová hlavice?", "acceptedAnswer": { "@type": "Answer", "text": "Úsporná (provzdušňovací) sprchová hlavice sníží průtok z běžných 12–15 litrů za minutu na zhruba 6–9 litrů, tedy zhruba na polovinu, aniž byste pocítili slabší proud. Protože sprchování je největší spotřebitel teplé vody v domácnosti, znamená to úsporu jak vody, tak energie na její ohřev, u čtyřčlenné rodiny běžně řádově tisíce korun ročně dohromady." } }, { "@type": "Question", "name": "Vyplatí se tepelné čerpadlo pro ohřev vody?", "acceptedAnswer": { "@type": "Answer", "text": "Bojler s integrovaným tepelným čerpadlem spotřebuje na ohřev vody zhruba třetinu energie oproti klasickému elektrickému bojleru, protože teplo odebírá ze vzduchu. Pořizovací cena je vyšší (řádově desítky tisíc korun), ale u domácnosti s vyšší spotřebou teplé vody se investice vrátí obvykle za 4–7 let. Vyžaduje ale prostor a přívod vzduchu, ideálně technickou místnost nebo sklep." } }] }] };

const RELATED = [
  { title: "Jaký bojler vybrat", href: "/blog/jaky-bojler-vybrat", read: "6 min" },
  { title: "Jak snížit spotřebu vody", href: "/blog/jak-snizit-spotrebu-vody", read: "5 min" },
  { title: "Jak snížit účet za elektřinu", href: "/blog/snizit-ucet-za-elektrinu", read: "6 min" },
  { title: "Spotřebiče ve standby: jak ušetřit", href: "/blog/spotrebice-ve-standby-jak-usetrit", read: "5 min" },
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
              <span>Náklady na ohřev vody</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">⚡ Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak snížit náklady na ohřev teplé vody</h1>
              <p className="article-lead">Ohřev teplé vody je po vytápění zpravidla druhá největší položka energetického účtu domácnosti, běžně kolem 15–20 % spotřeby. Dobrá zpráva je, že řada opatření nic nestojí nebo se zaplatí během jediné sezóny. Projdeme je od nejlevnějších (nastavení teploty) až po velké investice (tepelné čerpadlo, solár) a u každého ukážeme, kolik reálně ušetří.</p>
              <div className="article-meta-row"><span>Aktualizováno: 21. července 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/jak-snizit-naklady-na-ohrev-vody" title="Jak snížit náklady na ohřev teplé vody" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 175" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="175" fill="#f4f8fc"/>
                {[
                  { x:20, icon:"🌡️", name:"Teplota bojleru", price:"Zdarma", use:"Nastav 55–60 °C\nNižší = riziko bakterií\nVyšší = větší ztráty", color:"#f59e0b" },
                  { x:210, icon:"🧥", name:"Izolace nádrže", price:"200–800 Kč", use:"Termoobal na bojler\nNávleky na potrubí\nÚspora 25–40 %", color:"#5a9e6f" },
                  { x:400, icon:"🕐", name:"Nízký tarif (NT)", price:"Spínací hodiny", use:"Ohřev v noci\nLevnější kWh\nAkumulace na den", color:"#4a90d9" },
                  { x:590, icon:"🚿", name:"Úsporná sprcha", price:"150–500 Kč", use:"Průtok na polovinu\n6–9 l/min\nMéně vody i energie", color:"#e07040" },
                ].map(({x, icon, name, price, use, color}) => (
                  <g key={x} transform={`translate(${x}, 12)`}>
                    <rect x="0" y="0" width="163" height="150" rx="8" fill="#fff" stroke={color} strokeWidth="1.2"/>
                    <text x="81" y="34" textAnchor="middle" fontSize="22">{icon}</text>
                    <text x="81" y="56" textAnchor="middle" fontSize="11" fill={color} fontWeight="700">{name}</text>
                    <text x="81" y="72" textAnchor="middle" fontSize="8" fill="#8a8078">{price}</text>
                    <line x1="10" y1="80" x2="153" y2="80" stroke={color} strokeWidth="0.5" opacity="0.4"/>
                    {use.split('\n').map((l,i) => <text key={i} x="12" y={96+i*13} fontSize="8.5" fill="#3a7e4f">✓ {l}</text>)}
                  </g>
                ))}
                <rect y="158" width="760" height="17" fill="#e0eaf4" opacity="0.5"/>
                <text x="380" y="170" textAnchor="middle" fontSize="8" fill="#3a6a8a" fontWeight="600" letterSpacing="0.06em">⚡ NEJDŘÍV LEVNÁ OPATŘENÍ ZDARMA · POTOM IZOLACE A NT · VELKÉ INVESTICE AŽ NAKONEC</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#kolik-stoji">Kolik stojí ohřev vody</a></li>
                <li><a href="#teplota">Nastavení teploty bojleru</a></li>
                <li><a href="#izolace">Izolace nádrže a potrubí</a></li>
                <li><a href="#nizky-tarif">Nízký tarif a časovač</a></li>
                <li><a href="#sprcha">Úsporné sprchové hlavice</a></li>
                <li><a href="#velke-investice">Tepelné čerpadlo a solár</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="kolik-stoji">
              <h2>Kolik stojí ohřev vody</h2>
              <p>Ohřev teplé vody spotřebuje energii úměrně tomu, kolik litrů denně natočíte a o kolik stupňů je potřeba vodu ohřát. Průměrná osoba spotřebuje 30–50 litrů teplé vody denně. Ohřát 1 litr vody z 10 °C na 55 °C stojí zhruba 0,05 kWh, takže čtyřčlenná domácnost lehce spotřebuje 8–12 kWh denně jen na ohřev vody.</p>
              <p>Při běžné ceně elektřiny to dělá řádově několik tisíc až přes deset tisíc korun ročně. Přesný odhad pro vaši domácnost si spočítáte v naší <Link href="/kalkulacky/naklady-na-ohrev-vody" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačce nákladů na ohřev vody</Link>, kde zadáte počet osob, způsob ohřevu a cenu energie.</p>
              <p>Náklady vznikají ve dvou místech: samotný ohřev spotřebované vody a takzvané pohotovostní ztráty, tedy chladnutí nádrže a potrubí, když vodu zrovna neodebíráte. Úsporná opatření cílí na obě části, a právě od nich se odvíjí struktura tohoto článku.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Než začnete šetřit na ohřevu, zjistěte, kolik vody vlastně odebíráte. Kdo sníží spotřebu teplé vody, ušetří automaticky i na energii. Konkrétní opatření najdete v článku <Link href="/blog/jak-snizit-spotrebu-vody" style={{ color: "#2a6496", textDecoration: "underline" }}>jak snížit spotřebu vody</Link>.</div>
            </section>

            <section id="teplota">
              <h2>Nastavení teploty bojleru</h2>
              <p>Nastavení termostatu bojleru je nejlevnější úspora vůbec, nestojí ani korunu. Přesto má mnoho domácností bojler nastavený zbytečně vysoko, často na 70 °C a víc. Každý stupeň navíc znamená vyšší tepelné ztráty a rychlejší usazování vodního kamene.</p>
              <h3>Ideální teplota</h3>
              <ul>
                <li><strong>55–60 °C</strong> je optimum pro většinu domácností, dostatečně teplá voda a rozumné ztráty</li>
                <li><strong>Pod 50 °C nechoďte</strong> kvůli riziku množení bakterie Legionella, která se v teplé stojaté vodě rychle šíří</li>
                <li><strong>Nad 65 °C</strong> je zbytečné plýtvání, ztráty rostou a vodní kámen se usazuje mnohem rychleji</li>
              </ul>
              <p>U elektrického bojleru, který se ohřívá jen jednou denně (typicky v noci), volte spíše horní hranici, tedy 60 °C, aby voda vydržela teplá po celý den. U průtokového nebo plynového ohřevu, kde se voda ohřívá až v okamžiku odběru, stačí i nižší nastavení.</p>
              <div className="article-tip"><strong>⚠️ Pozor:</strong> Nesnažte se ušetřit trvalým snížením pod 50 °C. Riziko bakterie Legionella (způsobuje těžké zápaly plic) je reálné. Pokud máte bojler kvůli úspoře nastavený nízko, alespoň jednou týdně jej nechte ohřát na 65–70 °C, aby se nádrž tepelně vydezinfikovala.</div>
            </section>

            <section id="izolace">
              <h2>Izolace nádrže a potrubí</h2>
              <p>Starší bojlery mají často slabou tovární izolaci a horkou vodu ochlazují rychleji, než by musely. Nádrž pak chladne i v době, kdy vodu vůbec neodebíráte, a topné těleso musí opakovaně dohřívat. Zateplení je jedno z nejrychleji návratných opatření.</p>
              <h3>Termoizolační obal na bojler</h3>
              <p>Na trhu jsou hotové termoobaly (izolační „bundy") na standardní velikosti zásobníků, ale poslouží i minerální vata nebo mirelon obalený reflexní fólií. Zateplení nezatepleného zásobníku sníží pohotovostní ztráty zhruba o 25–40 %. Dbejte na to, abyste nezakryli termostat, přírubu topného tělesa ani odvzdušňovací a pojistný ventil.</p>
              <h3>Izolace potrubí</h3>
              <ul>
                <li><strong>Návlekové izolace</strong> (mirelon, kaučuk) na rozvody teplé vody stojí pár desítek korun za metr</li>
                <li><strong>Zateplete hlavně první metry</strong> od bojleru a všechny úseky vedoucí nevytápěnými prostory (sklep, technická místnost)</li>
                <li><strong>Cirkulační okruh</strong> teplé vody, pokud jej máte, izolujte celý, jinak nepřetržitě ztrácí teplo</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Sáhněte si na potrubí i na plášť bojleru chvíli po ohřevu. Pokud jsou znatelně teplé, unikají jimi peníze. Teplo, které cítíte na povrchu, je energie, za kterou jste zaplatili a která ohřívá místnost místo vody.</div>
            </section>

            <section id="nizky-tarif">
              <h2>Nízký tarif a časovač</h2>
              <p>Máte-li dvoutarifovou sazbu (například D25d nebo D26d), platíte v době nízkého tarifu (NT) za kWh výrazně méně než ve vysokém tarifu. Elektrický akumulační bojler je pro tuto sazbu ideální, ohřejete zásobník levně v noci a teplo pak čerpáte celý den.</p>
              <h3>Jak na to</h3>
              <ul>
                <li><strong>Spínací hodiny nebo HDO</strong> zajistí, že se bojler zapne převážně v době nízkého tarifu</li>
                <li><strong>Objem zásobníku 100–160 litrů</strong> obvykle stačí zásobit domácnost z jednoho nočního ohřevu na celý den</li>
                <li><strong>Zkontrolujte signál HDO</strong> u distributora, časy nízkého tarifu se liší podle regionu a sazby</li>
              </ul>
              <p>I bez dvoutarifové sazby má smysl ohřev řídit časovačem, například ohřívat jen ráno a večer podle skutečné potřeby, místo aby topné těleso dotápělo nádrž nepřetržitě. Úprava způsobu ohřevu je součástí širší strategie, kterou rozebíráme v článku <Link href="/blog/snizit-ucet-za-elektrinu" style={{ color: "#2a6496", textDecoration: "underline" }}>jak snížit účet za elektřinu</Link>.</p>
              <div className="article-tip"><strong>⚡ Bezpečnost:</strong> Zapojení nebo přenastavení spínacích hodin, stykače HDO a přívodu bojleru je zásah do pevné elektroinstalace. Provádějte jej vždy na odpojeném okruhu (vypnutý jistič) a připojení do rozvaděče přenechte kvalifikovanému elektrikáři. Sami bezpečně zvládnete nastavení termostatu a časovače přístupného zvenčí.</div>
            </section>

            <section id="sprcha">
              <h2>Úsporné sprchové hlavice</h2>
              <p>Sprchování je zdaleka největší spotřebitel teplé vody v domácnosti. Klasická sprchová hlavice má průtok 12–15 litrů za minutu, úsporná (provzdušňovací) hlavice jen 6–9 litrů, tedy zhruba polovinu. Díky přimíchávání vzduchu přitom subjektivně nepocítíte slabší proud.</p>
              <h3>Co pořídit</h3>
              <ul>
                <li><strong>Provzdušňovací sprchová hlavice</strong> za 150–500 Kč, největší efekt za nejmenší peníz</li>
                <li><strong>Perlátory (spořiče) do baterií</strong> u umyvadel a dřezu, sníží průtok při mytí rukou a nádobí</li>
                <li><strong>Termostatická baterie</strong> nastaví požadovanou teplotu okamžitě, takže neplýtváte vodou při jejím ladění</li>
              </ul>
              <p>U čtyřčlenné rodiny přinese samotná výměna sprchové hlavice úsporu vody i energie na její ohřev v řádu tisíců korun ročně, přičemž hlavice se zaplatí během několika týdnů. Je to prakticky nejlepší poměr úspory k ceně z celého tohoto seznamu.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Zkraťte sprchování o dvě minuty a přidejte úspornou hlavici, jde o dvě nezávislá opatření, která se sčítají. Kratší, ale plnohodnotná sprcha s úsporným průtokem spotřebuje jen zlomek vody oproti dlouhé sprše s klasickou hlavicí.</div>
            </section>

            <section id="velke-investice">
              <h2>Tepelné čerpadlo a solár</h2>
              <p>Když vyčerpáte levná opatření, přicházejí na řadu investice, které zásadně mění samotný způsob ohřevu. Mají vyšší pořizovací cenu, ale i největší dlouhodobou úsporu, zvlášť u domácností s vyšší spotřebou teplé vody.</p>
              <h3>Bojler s tepelným čerpadlem</h3>
              <p>Integrované tepelné čerpadlo odebírá teplo ze vzduchu a na ohřev vody spotřebuje jen zhruba třetinu energie oproti klasickému elektrickému bojleru. Pořizovací cena je řádově desítky tisíc korun, návratnost obvykle 4–7 let. Potřebuje ale prostor a přívod vzduchu, ideálně technickou místnost nebo sklep, kde navíc příjemně vysušuje vzduch.</p>
              <h3>Solární ohřev vody</h3>
              <p>Termické solární kolektory dokážou přes léto pokrýt většinu potřeby teplé vody, v přechodných obdobích ji předehřívají. Kombinují se s bojlerem, který dohřeje vodu, když sluneční energie nestačí. Návratnost je delší (typicky 8–15 let) a závisí na dotačních programech a orientaci střechy.</p>
              <p>Výběr samotného zásobníku, ať už klasického, s tepelným čerpadlem, nebo pro kombinaci se solárem, rozebíráme podrobně v článku <Link href="/blog/jaky-bojler-vybrat" style={{ color: "#2a6496", textDecoration: "underline" }}>jaký bojler vybrat</Link>.</p>
              <div className="article-tip"><strong>⚠️ Kdy volat odborníka:</strong> Instalaci tepelného čerpadla i solárních kolektorů, včetně elektrického připojení a zapojení do topné soustavy, vždy svěřte specializované firmě. Jde o kombinaci vodoinstalace a silnoproudu, kterou nelze provádět svépomocí, a nesprávné zapojení ohrožuje bezpečnost i platnost záruky a případné dotace.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Na kolik stupňů nastavit bojler, aby byl úsporný a bezpečný?", a: "Optimum je 55–60 °C. Nižší teplota (pod 50 °C) sice šetří energii, ale zvyšuje riziko množení bakterie Legionella v nádrži. Vyšší teplota (nad 65 °C) zbytečně zvyšuje tepelné ztráty a urychluje usazování vodního kamene. U elektrického bojleru, který se ohřívá jen jednou denně v nízkém tarifu, se doporučuje spíše 60 °C, aby voda vydržela teplá po celý den." },
                  { q: "Kolik ušetřím zateplením bojleru a potrubí?", a: "Termoizolační obal na starší nezateplený bojler sníží tepelné ztráty zásobníku zhruba o 25–40 %, což u běžné domácnosti znamená úsporu řádově stovek až přes tisíc korun ročně. Návlekové izolace na rozvody teplé vody stojí pár desítek korun za metr a zabrání zbytečnému chladnutí vody v potrubí. Obojí je levné, rychlé a vrátí se během jedné až dvou sezón." },
                  { q: "Vyplatí se ohřívat vodu jen v nízkém tarifu (NT)?", a: "Ano, pokud máte dvoutarifní sazbu (například D25d nebo D26d) s akumulačním ohřevem. Elektrický bojler přepněte přes spínací hodiny nebo HDO tak, aby se ohříval převážně v době nízkého tarifu, kdy je kWh výrazně levnější. Zásobník o objemu 100–160 litrů obvykle vydrží zásobit domácnost teplou vodou po celý den z jednoho nočního ohřevu." },
                  { q: "Kolik vody a peněz ušetří úsporná sprchová hlavice?", a: "Úsporná (provzdušňovací) sprchová hlavice sníží průtok z běžných 12–15 litrů za minutu na zhruba 6–9 litrů, tedy zhruba na polovinu, aniž byste pocítili slabší proud. Protože sprchování je největší spotřebitel teplé vody v domácnosti, znamená to úsporu jak vody, tak energie na její ohřev, u čtyřčlenné rodiny běžně řádově tisíce korun ročně dohromady." },
                  { q: "Vyplatí se tepelné čerpadlo pro ohřev vody?", a: "Bojler s integrovaným tepelným čerpadlem spotřebuje na ohřev vody zhruba třetinu energie oproti klasickému elektrickému bojleru, protože teplo odebírá ze vzduchu. Pořizovací cena je vyšší (řádově desítky tisíc korun), ale u domácnosti s vyšší spotřebou teplé vody se investice vrátí obvykle za 4–7 let. Vyžaduje ale prostor a přívod vzduchu, ideálně technickou místnost nebo sklep." },
                ].map(({ q, a }) => (
                  <details key={q} className="faq-item">
                    <summary className="faq-q">{q}</summary>
                    <p className="faq-a">{a}</p>
                  </details>
                ))}
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/jak-snizit-naklady-na-ohrev-vody" title="Jak snížit náklady na ohřev teplé vody" />

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
                <li><a href="#kolik-stoji">Kolik stojí ohřev vody</a></li>
                <li><a href="#teplota">Nastavení teploty bojleru</a></li>
                <li><a href="#izolace">Izolace nádrže a potrubí</a></li>
                <li><a href="#nizky-tarif">Nízký tarif a časovač</a></li>
                <li><a href="#sprcha">Úsporné sprchové hlavice</a></li>
                <li><a href="#velke-investice">Tepelné čerpadlo a solár</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/elektrika" className="sidebar-cat-link">⚡ Elektrika & osvětlení<span>35 článků →</span></Link>
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
