import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak vybrat dodavatele a tarif elektřiny a ušetřit tisíce ročně",
  description: "Jak porovnat dodavatele elektřiny, vybrat výhodný tarif a přejít bez rizika. Konkrétní příklad úspory a časté chyby při výběru.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-vybrat-dodavatele-elektriny" },
  openGraph: { title: "Jak vybrat dodavatele a tarif elektřiny a ušetřit tisíce ročně", description: "Jednotarif, dvoutarif, spotová cena – jak porovnat nabídky a přejít k levnějšímu dodavateli.", url: "https://www.domovniguru.cz/blog/jak-vybrat-dodavatele-elektriny", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-05-04T08:00:00Z", modifiedTime: "2026-06-04T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20vybrat%20dodavatele%20a%20tarif%20elekt%C5%99iny%20a%20u%C5%A1et%C5%99it%20tis%C3%ADce%20ro%C4%8Dn%C4%9B&cat=blog", width: 1200, height: 630, alt: "Jak vybrat dodavatele a tarif elektřiny a ušetřit tisíce ročně" }] },
  twitter: { card: "summary_large_image", title: "Jak vybrat dodavatele a tarif elektřiny a ušetřit tisíce ročně", description: "Jak porovnat nabídky, vybrat tarif a přejít k levnějšímu dodavateli bez rizika." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/jak-vybrat-dodavatele-elektriny#article", "headline": "Jak vybrat dodavatele a tarif elektřiny a ušetřit tisíce ročně", "datePublished": "2026-05-04T08:00:00Z", "dateModified": "2026-06-04T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["dodavatel elektřiny", "tarif elektřiny", "porovnání cen elektřiny", "přechod k jinému dodavateli", "spotová elektřina", "jak ušetřit za elektřinu"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Elektrika & osvětlení", "item": "https://www.domovniguru.cz/blog/kategorie/elektrika" }, { "@type": "ListItem", "position": 4, "name": "Jak vybrat dodavatele a tarif elektřiny", "item": "https://www.domovniguru.cz/blog/jak-vybrat-dodavatele-elektriny" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Je přechod k jinému dodavateli elektřiny zdarma?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, změna dodavatele je ze zákona bezplatná a dodavatel ji za tebe vyřídí. Nesmí ti za ni účtovat žádný poplatek a nehrozí ani odpojení od sítě." } }, { "@type": "Question", "name": "Jak dlouho trvá přechod k novému dodavateli?", "acceptedAnswer": { "@type": "Answer", "text": "Standardně 4–6 týdnů od podpisu nové smlouvy. Po celou dobu zůstáváš připojený k síti, dodávka elektřiny se nepřeruší." } }, { "@type": "Question", "name": "Vyplatí se spotová elektřina pro běžnou domácnost?", "acceptedAnswer": { "@type": "Answer", "text": "Spotový tarif se vyplatí těm, kdo dokážou přesouvat spotřebu na levné hodiny – typicky majitelé tepelných čerpadel, elektromobilů nebo baterií. Pro domácnost s pevným režimem je často výhodnější fixní tarif." } }, { "@type": "Question", "name": "Co se stane, když mi vyprší fixace ceny?", "acceptedAnswer": { "@type": "Answer", "text": "Pokud smlouvu neřešíš, většina dodavatelů tě automaticky převede na dražší tzv. pokračovací produkt. Měsíc až dva před koncem fixace si proto vždy zkontroluj nabídky a případně přejdi k výhodnější smlouvě." } }] }] };

const RELATED = [
  { title: "LED vs. žárovky – co se skutečně vyplatí?", href: "/blog/led-vs-zarovky", read: "4 min" },
  { title: "Jak snížit účet za elektřinu doma", href: "/blog/snizit-ucet-za-elektrinu", read: "5 min" },
  { title: "Jak číst elektroměr a hlídat spotřebu", href: "/blog/jak-cist-elektromer", read: "4 min" },
  { title: "Proč mi vypadává jistič?", href: "/blog/proc-vypadava-jistic", read: "4 min" },
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
              <span>Jak vybrat dodavatele a tarif elektřiny</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">💡 Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak vybrat dodavatele a tarif elektřiny a ušetřit tisíce ročně</h1>
              <p className="article-lead">Spousta domácností platí za elektřinu zbytečně moc – ne proto, že by plýtvaly proudem, ale proto, že roky sedí u stejného dodavatele se starým, nevýhodným tarifem. Přechod k levnější nabídce je přitom zdarma, bez rizika a zabere jen pár minut. Ukážeme ti, jak na to.</p>
              <div className="article-meta-row"><span>Aktualizováno: 4. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#trh-s-elektrinou">Jak funguje trh s elektřinou v ČR</a></li>
                <li><a href="#druhy-tarifu">Druhy tarifů – jednotarif, dvoutarif, spot</a></li>
                <li><a href="#porovnani-nabidek">Jak porovnat nabídky a najít nejlevnějšího dodavatele</a></li>
                <li><a href="#jak-prejit">Kdy a jak přejít k jinému dodavateli</a></li>
                <li><a href="#kolik-usetris">Kolik reálně ušetříš – konkrétní příklad</a></li>
                <li><a href="#caste-chyby">Časté chyby a na co si dát pozor</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="trh-s-elektrinou">
              <h2>Jak funguje trh s elektřinou v ČR</h2>
              <p>První věc, kterou je dobré si ujasnit: <strong>dodavatel</strong> a <strong>distributor</strong> nejsou totéž. Distributor (ČEZ Distribuce, EG.D nebo PRE distribuce – podle toho, kde bydlíš) vlastní dráty, sloupy a trafostanice a stará se o to, aby ti elektřina fyzicky dotekla domů. Tohle si vybrat nemůžeš, je dané lokalitou. Naopak <strong>dodavatele</strong> – firmu, která ti elektřinu prodává a vystavuje vyúčtování – si vybrat můžeš, a to z desítek firem na trhu.</p>
              <p>Cena na tvé faktuře se skládá z několika složek a jen některé z nich dodavatel ovlivňuje:</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Složka ceny</th><th>Kdo ji určuje</th><th>Dá se ovlivnit výběrem dodavatele?</th></tr></thead>
                  <tbody>
                    <tr><td>Cena za silovou elektřinu (komodita)</td><td>Dodavatel</td><td>Ano – tady vznikají největší rozdíly mezi nabídkami</td></tr>
                    <tr><td>Stálý měsíční plat (paušál)</td><td>Dodavatel</td><td>Ano – liší se i o stovky korun ročně</td></tr>
                    <tr><td>Distribuční poplatky (přenos, ztráty)</td><td>Distributor + ERÚ</td><td>Ne – stejné pro všechny dodavatele v dané oblasti</td></tr>
                    <tr><td>Regulovaná cena za jistič a sazbu</td><td>Distributor + ERÚ</td><td>Ne – závisí na velikosti jističe a tarifu</td></tr>
                    <tr><td>Daň z elektřiny a DPH</td><td>Stát</td><td>Ne – pevně dané zákonem</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Jinými slovy – výběrem dodavatele neovlivníš celou fakturu, ale tu část, kterou ovlivnit můžeš (cena komodity a paušál), může mezi nejlevnější a nejdražší nabídkou na trhu znamenat rozdíl v řádu tisíců korun ročně. Stojí tedy za to věnovat výběru dodavatele pozornost stejně jako třeba výběru hypotéky nebo pojištění.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Než začneš porovnávat nabídky, zjisti si, jakou máš sazbu (např. D02d, D25d, D26d) a velikost hlavního jističe. Obě informace najdeš na poslední faktuře nebo ve smlouvě s distributorem – budeš je potřebovat při každém porovnání i při uzavírání nové smlouvy.</div>
            </section>

            <section id="druhy-tarifu">
              <h2>Druhy tarifů – jednotarif, dvoutarif, spot</h2>
              <p>Tarif určuje, jak se ti počítá cena elektřiny v průběhu dne a jakou techniku doma máš nebo plánuješ mít. Výběr špatného tarifu je jeden z nejčastějších důvodů, proč domácnosti platí víc, než musí.</p>
              <h3>Jednotarif (D01d, D02d)</h3>
              <p>Nejjednodušší varianta – elektřina stojí stejně po celý den. Vhodné pro byty a menší domácnosti bez elektrického vytápění, bojleru na noční proud nebo tepelného čerpadla. Nemusíš nic plánovat ani hlídat, kdy svítíš nebo péřeš.</p>
              <h3>Dvoutarif – nízký a vysoký tarif (D25d, D26d, D27d)</h3>
              <p>Dvoutarifové sazby rozdělují den na <strong>nízký tarif</strong> (NT, levnější, obvykle 8 hodin denně, často v noci a part odpoledne) a <strong>vysoký tarif</strong> (VT, dražší, zbytek dne). Liší se hlavně tím, jak dlouhý je nízký tarif a za jakých podmínek ho distributor přiznává:</p>
              <ul>
                <li><strong>D25d</strong> – nízký tarif typicky pro domácnosti s elektrickým ohřevem vody (akumulační bojler) nebo menším podílem elektrického vytápění</li>
                <li><strong>D26d</strong> – určeno pro domácnosti s tepelným čerpadlem jako hlavním zdrojem vytápění, dlouhý nízký tarif</li>
                <li><strong>D27d</strong> – pro přímotopné elektrické vytápění, nejdelší nízký tarif, ale i nejvyšší nárok na velikost jističe</li>
              </ul>
              <p>Dvoutarif se vyplatí, pokud dokážeš přesunout významnou část spotřeby (praní, myčku, nabíjení elektromobilu, ohřev vody) do levných hodin. Pokud žiješ v rytmu „přes den doma, večer vaříš a svítíš", může se ti naopak prodražit, protože velkou část spotřeby protočíš ve vysokém tarifu.</p>
              <h3>Spotové tarify</h3>
              <p>U spotových produktů neplatíš pevnou cenu, ale aktuální cenu elektřiny na burze, která se mění každou hodinu – někdy je nižší než u klasických tarifů, jindy naopak výrazně vyšší (zejména večerní špičky v zimě). Vyplatí se domácnostem, které mají chytrou techniku (řízení tepelného čerpadla, nabíjení elektromobilu, baterii) a dokážou spotřebu automaticky přesouvat na hodiny s nejnižší cenou.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ tarifu</th><th>Pro koho se hodí</th><th>Hlavní riziko</th></tr></thead>
                  <tbody>
                    <tr><td>Jednotarif</td><td>Byty, menší domácnosti, klasická spotřeba bez velkých spotřebičů</td><td>Promeškáš úsporu, pokud bys mohl přesouvat spotřebu</td></tr>
                    <tr><td>Dvoutarif (D25d/D26d/D27d)</td><td>Bojler, tepelné čerpadlo, elektrické vytápění, elektromobil</td><td>Prodraží se, pokud nepřesouváš spotřebu do nízkého tarifu</td></tr>
                    <tr><td>Spotový tarif</td><td>Chytrá domácnost s automatizací a flexibilní spotřebou</td><td>Výkyvy cen, potřeba sledovat trh nebo mít chytré řízení</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Pokud si nejsi jistý, který typ tarifu by ti nejvíc vyhovoval, nejdřív zjisti svou roční spotřebu a její rozložení během dne pomocí naší <Link href="/kalkulacky/spotreba-elektriciny" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačky spotřeby elektřiny</Link> – teprve s touto informací má smysl porovnávat konkrétní nabídky.</p>
            </section>

            <section id="porovnani-nabidek">
              <h2>Jak porovnat nabídky a najít nejlevnějšího dodavatele</h2>
              <p>Porovnávat dodavatele jen podle „ceny elektřiny" na webu je past – nabídky se totiž liší v několika parametrech najednou a ten, kdo má nejnižší cenu za MWh, může mít vysoký stálý plat nebo nevýhodné podmínky výpovědi. Při srovnání se zaměř na tyto body:</p>
              <ul>
                <li><strong>Cena za MWh (resp. přepočtená cena za kWh)</strong> – základní cena silové elektřiny bez DPH i s DPH; vždy srovnávej čísla ve stejné jednotce a se stejnou daní</li>
                <li><strong>Stálý měsíční plat</strong> – paušál, který platíš bez ohledu na to, kolik spotřebuješ; u menších domácností může tvořit překvapivě velkou část rozdílu mezi nabídkami</li>
                <li><strong>Délka fixace ceny</strong> – 12, 24 nebo 36 měsíců; delší fixace dává jistotu, ale může tě připravit o výhodnější nabídky, pokud ceny na trhu klesnou</li>
                <li><strong>Poplatky za odchod (výpověď před koncem fixace)</strong> – někteří dodavatelé si účtují smluvní pokutu, pokud smlouvu ukončíš dřív; hledej produkty bez vázanosti nebo s nízkou sankcí</li>
                <li><strong>Způsob a frekvence fakturace</strong> – měsíční zálohy, čtvrtletní vyúčtování, sleva za platbu přes SIPO nebo inkaso</li>
                <li><strong>Reference a hodnocení dodavatele</strong> – recenze, stížnosti u Energetického regulačního úřadu, rychlost řešení reklamací</li>
              </ul>
              <p>Nejjednodušší cesta je použít nezávislý srovnávač cen energií (např. ten, který provozuje ERÚ, nebo komerční srovnávače), kam zadáš svou spotřebu, sazbu a velikost jističe – nástroj ti pak spočítá, kolik bys za rok zaplatil u jednotlivých dodavatelů včetně všech poplatků. Vždy ale počítej s reálnou roční spotřebou, ne s odhadem „od oka" – podhodnocená i nadhodnocená spotřeba zkreslí výsledné pořadí nabídek.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Stahuj si vyúčtování za poslední 1–2 roky. Z nich zjistíš nejen celkovou roční spotřebu, ale i poměr mezi nízkým a vysokým tarifem (pokud ho máš) – to je klíčové číslo pro výběr správného produktu u nového dodavatele.</div>
            </section>

            <section id="jak-prejit">
              <h2>Kdy a jak přejít k jinému dodavateli</h2>
              <p>Změna dodavatele elektřiny je v Česku ze zákona bezplatná a nehrozí při ní žádné přerušení dodávek – po celou dobu zůstáváš připojený ke stejné distribuční síti, mění se jen firma, která ti elektřinu prodává a fakturuje. Postup je jednodušší, než se na první pohled zdá:</p>
              <ol>
                <li><strong>Zkontroluj výpovědní lhůtu u stávající smlouvy.</strong> Pokud máš smlouvu na dobu určitou s fixací, zjisti, kdy končí a jaká je výpovědní lhůta (obvykle 1–3 měsíce před koncem). U smluv na dobu neurčitou bývá výpovědní lhůta kratší, obvykle kolem 30 dní.</li>
                <li><strong>Vyber a podepiš smlouvu u nového dodavatele.</strong> Stačí mu poskytnout údaje z poslední faktury (EAN kód odběrného místa, sazbu, jistič). Novou smlouvu lze dnes uzavřít online za pár minut.</li>
                <li><strong>Vše ostatní vyřídí nový dodavatel za tebe.</strong> Podá výpověď u stávajícího dodavatele, zajistí registraci u distributora a zkoordinuje termín přechodu – nemusíš nic dalšího telefonovat ani vyplňovat.</li>
                <li><strong>Počkej na potvrzení a první fakturu od nového dodavatele.</strong> Celý proces obvykle trvá 4–6 týdnů. Starý dodavatel ti mezitím vystaví konečné vyúčtování ke dni ukončení smlouvy.</li>
              </ol>
              <p>Ideální okamžik pro přechod je 2–3 měsíce před koncem fixace ceny – máš tak dostatek času na porovnání nabídek i na vyřízení výpovědi bez stresu. Pokud žádnou fixaci nemáš (jsi na „pokračovacím" nebo neomezeném produktu), můžeš přejít prakticky kdykoliv, jakmile najdeš výhodnější nabídku.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Smlouvu s novým dodavatelem podepiš až ve chvíli, kdy máš jasno v podmínkách – zejména v délce fixace a poplatcích za případný předčasný odchod. Vyhneš se tak situaci, kdy za pár let budeš řešit stejný problém znovu.</div>
            </section>

            <section id="kolik-usetris">
              <h2>Kolik reálně ušetříš – konkrétní příklad</h2>
              <p>Abys měl/a lepší představu, podívejme se na modelový příklad domácnosti ve čtyřčlenném bytě s plynovým vytápěním (elektřina jen na spotřebiče, osvětlení a ohřev části teplé vody), roční spotřebou <strong>4 500 kWh</strong> v jednotarifu. Domácnost má starou smlouvu se „zapomenutým" tarifem, který po vypršení fixace automaticky přešel na dražší pokračovací produkt.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th></th><th>Starý tarif (pokračovací produkt)</th><th>Nový tarif po přechodu</th><th>Rozdíl</th></tr></thead>
                  <tbody>
                    <tr><td>Cena silové elektřiny</td><td>3,20 Kč/kWh</td><td>2,55 Kč/kWh</td><td>−0,65 Kč/kWh</td></tr>
                    <tr><td>Stálý měsíční plat</td><td>129 Kč/měsíc</td><td>89 Kč/měsíc</td><td>−40 Kč/měsíc</td></tr>
                    <tr><td>Náklady na komoditu / rok</td><td>14 400 Kč</td><td>11 475 Kč</td><td><strong>−2 925 Kč</strong></td></tr>
                    <tr><td>Stálý plat / rok</td><td>1 548 Kč</td><td>1 068 Kč</td><td><strong>−480 Kč</strong></td></tr>
                    <tr><td>Celkem / rok (jen ovlivnitelná část)</td><td>15 948 Kč</td><td>12 543 Kč</td><td><strong>−3 405 Kč</strong></td></tr>
                  </tbody>
                </table>
              </div>
              <p>V tomto modelovém příkladu domácnost ušetří přibližně <strong>3 400 Kč ročně</strong>, tedy zhruba 280 Kč měsíčně – jen tím, že vyplní jeden formulář a podepíše novou smlouvu. Za tři roky (typická délka, než lidé znovu řeší dodavatele) jde o víc než 10 000 Kč. U domácností s vyšší spotřebou (elektrické vytápění, tepelné čerpadlo, elektromobil) bývá absolutní úspora ještě výraznější, protože i malý rozdíl v ceně za kWh se násobí mnohem větším objemem spotřeby.</p>
              <p>Reálná úspora se samozřejmě liší podle aktuální situace na trhu, regionu a tvé spotřeby – proto se vyplatí počítat s vlastními čísly z faktury, ne s obecnými průměry.</p>
            </section>

            <section id="caste-chyby">
              <h2>Časté chyby a na co si dát pozor</h2>
              <h3>Skryté poplatky a „háčky" ve smlouvě</h3>
              <p>Některé na první pohled levné nabídky kompenzují nízkou cenu komodity vysokým stálým platem, poplatkem za papírovou fakturu, nebo sankcí za platbu mimo inkaso. Vždy si přečti smluvní podmínky a ceník celý – ne jen marketingové shrnutí na hlavní stránce.</p>
              <h3>Podomní prodejci a telefonické nabídky</h3>
              <p>Přechod k jinému dodavateli díky podomnímu nebo telefonickému prodejci patří mezi nejčastější zdroje stížností u Energetického regulačního úřadu. Smlouvu nikdy nepodepisuj „na místě" pod tlakem – máš ze zákona právo od smlouvy uzavřené mimo obchodní prostory odstoupit do 14 dnů, ale je jednodušší takovou nabídku rovnou odmítnout a porovnat si dodavatele sám/sama v klidu doma.</p>
              <h3>Automatické prodlužování smluv</h3>
              <p>Po skončení fixace tě dodavatel zpravidla automaticky převede na dražší „pokračovací" nebo neomezený produkt – přesně jak se to stalo v modelovém příkladu výše. Pokud si datum konce fixace nepohlídáš, klidně tak můžeš platit zvýšenou cenu i několik let, aniž by sis toho všiml/a. Nastav si proto připomínku 2–3 měsíce před koncem fixace.</p>
              <h3>Porovnávání „od oka" bez reálných čísel</h3>
              <p>Odhad spotřeby výrazně zkresluje výsledek porovnání – nadhodnocená spotřeba ti ukáže jiného „vítěze" než podhodnocená. Než budeš srovnávat nabídky, vytáhni si přesná čísla z posledních faktur nebo z portálu svého distributora.</p>
              <h3>Přecenění výhod spotových tarifů</h3>
              <p>Spotová elektřina umí být výrazně levnější, ale i výrazně dražší – záleží na tom, jak moc dokážeš přizpůsobit svůj režim aktuálním cenám. Bez chytrého řízení spotřeby (nebo ochoty ručně sledovat ceny) může spotový tarif nakonec vyjít dráž než klasická fixní nabídka.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Než cokoliv podepíšeš, zkontroluj si dodavatele v registru držitelů licencí na webu Energetického regulačního úřadu a přečti si recenze od reálných zákazníků – ne jen hodnocení na webu samotného dodavatele.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Je přechod k jinému dodavateli elektřiny zdarma?", a: "Ano, změna dodavatele je ze zákona bezplatná a dodavatel ji za tebe vyřídí. Nesmí ti za ni účtovat žádný poplatek a nehrozí ani odpojení od sítě." },
                  { q: "Jak dlouho trvá přechod k novému dodavateli?", a: "Standardně 4–6 týdnů od podpisu nové smlouvy. Po celou dobu zůstáváš připojený k síti, dodávka elektřiny se nepřeruší." },
                  { q: "Vyplatí se spotová elektřina pro běžnou domácnost?", a: "Spotový tarif se vyplatí těm, kdo dokážou přesouvat spotřebu na levné hodiny – typicky majitelé tepelných čerpadel, elektromobilů nebo baterií. Pro domácnost s pevným režimem je často výhodnější fixní tarif." },
                  { q: "Co se stane, když mi vyprší fixace ceny?", a: "Pokud smlouvu neřešíš, většina dodavatelů tě automaticky převede na dražší tzv. pokračovací produkt. Měsíc až dva před koncem fixace si proto vždy zkontroluj nabídky a případně přejdi k výhodnější smlouvě." },
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
                <li><a href="#trh-s-elektrinou">Jak funguje trh s elektřinou</a></li>
                <li><a href="#druhy-tarifu">Druhy tarifů</a></li>
                <li><a href="#porovnani-nabidek">Jak porovnat nabídky</a></li>
                <li><a href="#jak-prejit">Jak přejít k jinému dodavateli</a></li>
                <li><a href="#kolik-usetris">Kolik reálně ušetříš</a></li>
                <li><a href="#caste-chyby">Časté chyby</a></li>
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
