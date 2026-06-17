import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Hasicí přístroj a detektory kouře doma – kontrola a údržba 2026",
  description: "Jak často testovat detektor kouře, kdy měnit baterii, jaká je revizní lhůta hasicího přístroje a proč potřebuješ i detektor CO. Praktický návod.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/kontrola-hasicich-pristroju-a-detektoru-koure" },
  openGraph: { title: "Hasicí přístroj a detektory kouře doma – kontrola a údržba 2026", description: "Jak často testovat detektor kouře, kdy měnit baterii, revizní lhůty hasicího přístroje a detektor CO.", url: "https://www.domovniguru.cz/blog/kontrola-hasicich-pristroju-a-detektoru-koure", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-17T08:00:00Z", modifiedTime: "2026-06-17T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Hasic%C3%AD%20p%C5%99%C3%ADstroj%20a%20detektory%20kou%C5%99e%20doma%20%E2%80%93%20kontrola%20a%20%C3%BAdr%C5%BEba%202026&cat=blog", width: 1200, height: 630, alt: "Hasicí přístroj a detektory kouře doma – kontrola a údržba 2026" }] },
  twitter: { card: "summary_large_image", title: "Hasicí přístroj a detektory kouře doma 2026", description: "Jak často testovat detektor kouře, kdy měnit baterii a jaká je revizní lhůta hasicího přístroje." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.domovniguru.cz/blog/kontrola-hasicich-pristroju-a-detektoru-koure#article",
      "headline": "Hasicí přístroj a detektory kouře doma – kontrola a údržba 2026",
      "description": "Jak často testovat detektor kouře, kdy měnit baterii, jaká je revizní lhůta hasicího přístroje a proč potřebuješ i detektor CO.",
      "datePublished": "2026-06-17T08:00:00Z",
      "dateModified": "2026-06-17T08:00:00Z",
      "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.domovniguru.cz/blog/kontrola-hasicich-pristroju-a-detektoru-koure" },
      "inLanguage": "cs",
      "keywords": ["kontrola hasicího přístroje", "revize hasicího přístroje", "detektor kouře baterie", "jak často testovat detektor kouře", "detektor oxidu uhelnatého", "životnost detektoru kouře"]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.domovniguru.cz/blog/kontrola-hasicich-pristroju-a-detektoru-koure#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Jak často musím testovat detektor kouře?", "acceptedAnswer": { "@type": "Answer", "text": "Tlačítko testu zmáčkni jednou měsíčně – ověříš tím funkci sirény i senzoru. Baterii (pokud detektor nemá pevnou 10letou baterii) vyměň jednou ročně, ideálně při přechodu na zimní nebo letní čas, kdy si to snáz zapamatuješ." } },
        { "@type": "Question", "name": "Jak dlouho vydrží baterie v detektoru kouře?", "acceptedAnswer": { "@type": "Answer", "text": "Klasická 9V nebo AA baterie vydrží 1–2 roky provozu, proto se doporučuje roční výměna. Detektory s pevnou lithiovou baterií ji mají na celou dobu životnosti přístroje, tedy běžně 10 let, a po jejím vybití se celý detektor vyměňuje." } },
        { "@type": "Question", "name": "Jak často se musí dělat revize hasicího přístroje?", "acceptedAnswer": { "@type": "Answer", "text": "U přenosných hasicích přístrojů v domácnostech a na pracovištích se podle vyhlášky o požární prevenci provádí pravidelná kontrola jednou za rok odbornou osobou. Mezi revizemi si sám můžeš zkontrolovat tlakoměr a celkový stav přístroje." } },
        { "@type": "Question", "name": "Jaký hasicí přístroj je nejlepší do domácnosti?", "acceptedAnswer": { "@type": "Answer", "text": "Pro běžnou domácnost je nejuniverzálnější práškový hasicí přístroj – zvládne dřevo, papír, textil, hořlavé kapaliny i elektrická zařízení. Do kuchyně se navíc hodí pěnový nebo speciální hasicí přístroj na tuky, k elektronice a serverům CO2 přístroj, který nezanechává korozivní zbytky." } },
        { "@type": "Question", "name": "Potřebuju doma detektor oxidu uhelnatého?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, pokud máš plynový kotel, plynový sporák, krb, kamna na tuhá paliva nebo garáž propojenou s obytným prostorem. Oxid uhelnatý je bez zápachu a barvy, takže ho člověk bez detektoru nepozná dřív, než se projeví otrava." } },
        { "@type": "Question", "name": "Co dělat s hasicím přístrojem po vypršení revize nebo expiraci náplně?", "acceptedAnswer": { "@type": "Answer", "text": "Hasicí přístroj nikdy nepatří do běžného odpadu – obsahuje tlakovou nádobu a chemickou náplň. Odevzdej ho specializované firmě, která provádí revize a plnění hasicích přístrojů, případně do sběrného dvora určeného pro nebezpečný odpad." } },
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://www.domovniguru.cz/blog/kontrola-hasicich-pristroju-a-detektoru-koure#howto",
      "name": "Hasicí přístroj a detektory kouře doma – kontrola a údržba 2026",
      "description": "Jak často testovat detektor kouře, kdy měnit baterii, jaká je revizní lhůta hasicího přístroje a proč potřebuješ i detektor CO.",
      "step": [
        { "@type": "HowToStep", "name": "Proč kontrolovat pravidelně, ne jen po instalaci", "text": "Baterie detektoru kouře vydrží 1–2 roky, u typů s pevnou baterií až 10 let. Hasicí přístroj má povinné revizní lhůty. Bez pravidelné kontroly nikdy nezjistíš, že zařízení v okamžiku potřeby nebude funkční." },
        { "@type": "HowToStep", "name": "Detektor kouře – test, baterie, umístění", "text": "Testuj tlačítkem jednou měsíčně, baterii měň jednou ročně – ideálně při přechodu na zimní nebo letní čas. Umísti do chodeb a blízko ložnic, ne přímo do kuchyně. Celý detektor má životnost 8–10 let." },
        { "@type": "HowToStep", "name": "Hasicí přístroj – typ, revize, umístění", "text": "Vyber práškový univerzální, pěnový nebo CO2 typ podle účelu. Povinná revize jednou za rok, mezitím kontroluj tlakoměr – jehla musí být v zelené zóně. Umísti do kuchyně a u krbu nebo kotle." },
        { "@type": "HowToStep", "name": "Detektor oxidu uhelnatého (CO)", "text": "Nutný u domů s plynovým kotlem, krbem nebo garáží napojenou na obytný prostor. Test a výměna baterie probíhá stejně jako u detektoru kouře." },
        { "@type": "HowToStep", "name": "Co dělat při expiraci", "text": "Hasicí přístroj po revizi nebo expiraci náplně odevzdej k recyklaci nebo výměně náplně u specializované firmy. Nikdy ho nevyhazuj do běžného odpadu." },
        { "@type": "HowToStep", "name": "Roční checklist pro celou domácnost", "text": "Jednou měsíčně test detektorů, jednou ročně výměna baterií a kontrola tlakoměru hasicího přístroje, jednou ročně odborná revize hasicího přístroje, jednou za 8–10 let výměna celých detektorů." }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.domovniguru.cz/blog/kontrola-hasicich-pristroju-a-detektoru-koure#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" },
        { "@type": "ListItem", "position": 3, "name": "Sezónní údržba", "item": "https://www.domovniguru.cz/blog/kategorie/sezonni-udrzba" },
        { "@type": "ListItem", "position": 4, "name": "Hasicí přístroj a detektory kouře doma – kontrola a údržba", "item": "https://www.domovniguru.cz/blog/kontrola-hasicich-pristroju-a-detektoru-koure" }
      ]
    }
  ]
};

const RELATED = [
  { title: "Příprava domu na zimu – kompletní checklist", href: "/blog/priprava-domu-na-zimu", read: "10 min" },
  { title: "Jak vyčistit komín – kdy a jak na to, revize", href: "/blog/vycistit-komin", read: "5 min" },
  { title: "Jak fungují pojistky a proč jistič vypadává", href: "/blog/jak-funguji-pojistky", read: "5 min" },
  { title: "Jak zkontrolovat kotel před topnou sezónou", href: "/blog/zkontrolovat-kotel-pred-zimou", read: "6 min" },
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
              <span>Hasicí přístroj a detektory kouře</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">🍂 Sezónní údržba</Link>
                <span className="article-read-time">⏱ 7 min čtení</span>
              </div>
              <h1 className="article-h1">Hasicí přístroj a detektory kouře doma – kontrola a údržba</h1>
              <p className="article-lead">Detektor kouře, hasicí přístroj a detektor oxidu uhelnatého patří mezi věci, na které si vzpomeneme až ve chvíli, kdy nefungují. Pravidelná kontrola trvá pár minut, ale rozhoduje o tom, jestli ti v kritickém okamžiku pomůžou, nebo ne.</p>
              <div className="article-meta-row"><span>Aktualizováno: 17. června 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/kontrola-hasicich-pristroju-a-detektoru-koure" title="Hasicí přístroj a detektory kouře doma – kontrola a údržba 2026" />
            </header>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#proc">Proč kontrolovat pravidelně, ne jen po instalaci</a></li>
                <li><a href="#detektor-koure">Detektor kouře – test, baterie, umístění</a></li>
                <li><a href="#hasici-pristroj">Hasicí přístroj – typy, revize, umístění</a></li>
                <li><a href="#detektor-co">Detektor oxidu uhelnatého (CO)</a></li>
                <li><a href="#expirace">Co dělat při expiraci</a></li>
                <li><a href="#checklist">Roční checklist pro celou domácnost</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="proc">
              <h2>Proč kontrolovat pravidelně, ne jen po instalaci</h2>
              <p>Většina lidí nainstaluje detektor kouře nebo pověsí hasicí přístroj na zeď a dál se o ně nestará – až do chvíle, kdy je potřebuje. Problém je, že obě tato zařízení mají omezenou životnost a bez pravidelné kontroly nikdy nevíš, jestli v kritickém okamžiku skutečně zafungují.</p>
              <p>Baterie v běžném detektoru kouře vydrží <strong>1–2 roky</strong> provozu. U novějších typů s pevnou (zapouzdřenou) lithiovou baterií výrobce garantuje výdrž po celou dobu životnosti přístroje, tedy běžně <strong>10 let</strong> – ale i tady jednou baterie dojde a celý detektor se musí vyměnit.</p>
              <p>Hasicí přístroj má naproti tomu jasně stanovené <strong>revizní lhůty</strong>. Tlaková nádoba i náplň časem ztrácí účinnost, těsnění stárne a tlak může pomalu unikat – bez revize si toho ale nikdy nevšimneš, dokud přístroj nezkusíš použít.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Spoj kontrolu detektorů a hasicího přístroje s jinou pravidelnou činností v domácnosti – třeba s přechodem na zimní nebo letní čas. Snáz si to zapamatuješ a kontrola se stane automatickým rituálem.</div>
            </section>

            <section id="detektor-koure">
              <h2>Detektor kouře – test, baterie, umístění</h2>
              <h3>Měsíční test tlačítkem</h3>
              <p>Každý detektor kouře má testovací tlačítko. Jednou měsíčně ho přidrž několik sekund – měla by se spustit hlasitá siréna. Pokud se nic neozve nebo je zvuk slabý, baterie je vybitá nebo je detektor poškozený.</p>
              <h3>Výměna baterie jednou ročně</h3>
              <p>I když detektor při testu funguje, baterie se postupně vybíjí a v běžném provozu (ne při testu) nemusí mít dost energie na spuštění poplachu. Proto baterii měň <strong>jednou ročně</strong>, bez ohledu na to, jak dopadl poslední test.</p>
              <p>Dobrý zvyk je provést výměnu při přechodu na zimní nebo letní čas – termín si snadno zapamatuješ a navíc to vychází na podzim, kdy se více topí a riziko požáru roste.</p>
              <h3>Kam detektor umístit</h3>
              <ul>
                <li><strong>Chodby a schodiště</strong> – kouř se šíří nahoru a do společných prostor, detektor tam zachytí požár včas</li>
                <li><strong>Blízko ložnic</strong> – aby tě siréna spolehlivě vzbudila i ve spánku</li>
                <li><strong>Ne přímo do kuchyně</strong> – běžné vaření a smažení způsobuje falešné poplachy; do kuchyně raději tepelný nebo speciální kuchyňský detektor</li>
                <li><strong>Strop, ne stěna</strong> – kouř stoupá nahoru, detektor na stěně reaguje pomaleji</li>
              </ul>
              <h3>Životnost celého detektoru</h3>
              <p>Senzor uvnitř detektoru kouře postupně ztrácí citlivost – výrobci udávají životnost <strong>8–10 let</strong> od data výroby (najdeš ho na zadní straně přístroje). Po uplynutí této doby nepomůže ani nová baterie – detektor je potřeba vyměnit celý.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Datum výroby si zapiš nebo vyfoť hned po instalaci. Ušetříš si pak hádání, jestli je detektor ještě v záruční životnosti, nebo už je čas na výměnu.</div>
            </section>

            <section id="hasici-pristroj">
              <h2>Hasicí přístroj – typy, revize, umístění</h2>
              <h3>Jaký typ hasicího přístroje vybrat</h3>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ</th><th>Vhodný na</th><th>Kam umístit</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Práškový univerzální</strong></td><td>Dřevo, papír, textil, hořlavé kapaliny, elektrická zařízení</td><td>Chodba, garáž, dílna</td></tr>
                    <tr><td><strong>Pěnový</strong></td><td>Hořlavé kapaliny, dřevo, papír – bez poškození elektroniky práškem</td><td>Obývací pokoj, ložnice</td></tr>
                    <tr><td><strong>CO2</strong></td><td>Elektrická zařízení, elektronika, servery – nezanechává zbytky</td><td>Pracovna, místnost s elektronikou</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Pro běžnou domácnost je nejpraktičtější <strong>práškový univerzální</strong> přístroj – zvládne nejširší spektrum požárů. Do kuchyně se navíc hodí doplnit hasicí přístroj nebo hasicí sprej určený přímo na hořící tuky a oleje, protože vodou ani běžným práškem se kuchyňský požár tuku hasit nemá.</p>
              <h3>Povinná roční revize</h3>
              <p>U přenosných hasicích přístrojů se podle vyhlášky o požární prevenci provádí <strong>pravidelná kontrola jednou za rok</strong> odbornou osobou s oprávněním. Revizní technik zkontroluje tlak, stav nádoby, hadici, závěr i váhu náplně a vystaví revizní štítek s datem příští kontroly.</p>
              <h3>Co zkontroluješ sám mezi revizemi</h3>
              <ul>
                <li><strong>Tlakoměr</strong> – jehla musí být v <strong>zelené zóně</strong>. Pokud je v červené (příliš nízký nebo příliš vysoký tlak), přístroj nemusí fungovat a je potřeba ho dát do servisu mimo plánovanou revizi</li>
                <li><strong>Plomba a pojistka</strong> – musí být neporušené, jinak je jisté, že s přístrojem už někdo manipuloval</li>
                <li><strong>Viditelná koroze nebo poškození nádoby</strong> – při jakékoli deformaci přístroj dál nepoužívej</li>
                <li><strong>Volný přístup</strong> – přístroj nesmí být zacloněný nábytkem nebo jinými předměty</li>
              </ul>
              <h3>Kam hasicí přístroj umístit</h3>
              <p>Ideální místa jsou <strong>kuchyně</strong> (nejčastější zdroj domácích požárů), prostor <strong>u krbu nebo kotle</strong> a chodba blízko vchodových dveří, aby byl přístroj snadno dostupný i při úniku z hořící místnosti.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Hasicí přístroj věš v dosahu i pro menší členy domácnosti – ve výšce zhruba 1,2–1,5 m od podlahy, ne příliš vysoko.</div>
            </section>

            <section id="detektor-co">
              <h2>Detektor oxidu uhelnatého (CO)</h2>
              <p>Oxid uhelnatý vzniká při nedokonalém spalování a je bez barvy a zápachu – člověk ho bez detektoru vůbec nepozná, dokud se neprojeví příznaky otravy. Proto je detektor CO stejně důležitý jako detektor kouře, jen na úplně jiné riziko.</p>
              <h3>Kdy je detektor CO nutný</h3>
              <ul>
                <li><strong>Plynový kotel nebo plynový sporák</strong> – riziko úniku CO při špatném spalování nebo ucpaném odtahu spalin</li>
                <li><strong>Krb nebo kamna na tuhá paliva</strong> – zejména pokud komín není v perfektním stavu</li>
                <li><strong>Garáž napojená na obytný prostor</strong> – výfukové plyny z nastartovaného auta se mohou dostat do domu</li>
              </ul>
              <h3>Test a výměna baterie</h3>
              <p>Detektor CO funguje stejně jako detektor kouře – testovací tlačítko jednou měsíčně, výměna baterie jednou ročně (u typů s pevnou baterií výměna celého přístroje po uplynutí životnosti, obvykle po 5–7 letech). Umísti ho do blízkosti spotřebiče, který CO může produkovat, a do ložnic.</p>
              <div className="article-tip"><strong>⚠️ Pozor:</strong> Pokud detektor CO spustí poplach, okamžitě vyvětrej, opusť prostor a nevracej se, dokud nebude příčina zjištěna a odstraněna odborníkem.</div>
            </section>

            <section id="expirace">
              <h2>Co dělat při expiraci</h2>
              <p>Po revizi, která odhalí nedostatečný tlak, nebo po vypršení doporučené životnosti náplně, hasicí přístroj <strong>nikdy nepatří do běžného odpadu</strong>. Obsahuje tlakovou nádobu a chemickou náplň, která může být nebezpečná, pokud se s ní nesprávně zachází.</p>
              <ul>
                <li><strong>Specializovaná firma</strong> – provádí revize hasicích přístrojů a zároveň zajistí výměnu náplně nebo recyklaci celého přístroje</li>
                <li><strong>Sběrný dvůr</strong> – řada sběrných dvorů přijímá hasicí přístroje jako nebezpečný odpad, ověř si to předem telefonicky</li>
                <li><strong>Výměna náplně místo nového přístroje</strong> – u kvalitní nádoby v dobrém stavu je často levnější jen doplnit a přetlakovat náplň než kupovat nový přístroj</li>
              </ul>
              <p>Expirovaný nebo prošlý detektor kouře a CO stačí vyhodit do směsného odpadu po vyjmutí baterie – tu odevzdej do sběrného boxu na baterie, který najdeš v supermarketech a na sběrných dvorech.</p>
            </section>

            <section id="checklist">
              <h2>Roční checklist pro celou domácnost</h2>
              <p>Pro přehled je nejjednodušší mít kontrolu rozdělenou podle frekvence – ne všechno se dělá stejně často.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Frekvence</th><th>Co kontrolovat</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Jednou měsíčně</strong></td><td>Test tlačítkem u všech detektorů kouře a CO</td></tr>
                    <tr><td><strong>Jednou ročně</strong></td><td>Výměna baterií v detektorech, kontrola tlakoměru hasicího přístroje, odborná revize hasicího přístroje</td></tr>
                    <tr><td><strong>Jednou za 5–7 let</strong></td><td>Výměna detektoru CO s pevnou baterií</td></tr>
                    <tr><td><strong>Jednou za 8–10 let</strong></td><td>Výměna celého detektoru kouře (i s pevnou baterií)</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Nejjednodušší způsob, jak na nic nezapomenout, je svázat tyto kontroly s konkrétním kalendářním okamžikem – třeba s přechodem na zimní čas pro výměnu baterií a s plánovanou revizí kotle pro objednání revize hasicího přístroje.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud bydlíš v bytě nebo domě s více detektory, vyrob si jednoduchou tabulku s datem poslední výměny baterie a datem výroby každého přístroje. Pár minut jednou ročně tě ušetří nejistoty, jestli je vše v pořádku.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Jak často musím testovat detektor kouře?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Tlačítko testu zmáčkni jednou měsíčně – ověříš tím funkci sirény i senzoru. Baterii (pokud detektor nemá pevnou 10letou baterii) vyměň jednou ročně, ideálně při přechodu na zimní nebo letní čas, kdy si to snáz zapamatuješ.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak dlouho vydrží baterie v detektoru kouře?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Klasická 9V nebo AA baterie vydrží 1–2 roky provozu, proto se doporučuje roční výměna. Detektory s pevnou lithiovou baterií ji mají na celou dobu životnosti přístroje, tedy běžně 10 let, a po jejím vybití se celý detektor vyměňuje.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak často se musí dělat revize hasicího přístroje?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">U přenosných hasicích přístrojů v domácnostech a na pracovištích se podle vyhlášky o požární prevenci provádí pravidelná kontrola jednou za rok odbornou osobou. Mezi revizemi si sám můžeš zkontrolovat tlakoměr a celkový stav přístroje.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jaký hasicí přístroj je nejlepší do domácnosti?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Pro běžnou domácnost je nejuniverzálnější práškový hasicí přístroj – zvládne dřevo, papír, textil, hořlavé kapaliny i elektrická zařízení. Do kuchyně se navíc hodí pěnový nebo speciální hasicí přístroj na tuky, k elektronice a serverům CO2 přístroj, který nezanechává korozivní zbytky.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Potřebuju doma detektor oxidu uhelnatého?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ano, pokud máš plynový kotel, plynový sporák, krb, kamna na tuhá paliva nebo garáž propojenou s obytným prostorem. Oxid uhelnatý je bez zápachu a barvy, takže ho člověk bez detektoru nepozná dřív, než se projeví otrava.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Co dělat s hasicím přístrojem po vypršení revize nebo expiraci náplně?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Hasicí přístroj nikdy nepatří do běžného odpadu – obsahuje tlakovou nádobu a chemickou náplň. Odevzdej ho specializované firmě, která provádí revize a plnění hasicích přístrojů, případně do sběrného dvora určeného pro nebezpečný odpad.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/kontrola-hasicich-pristroju-a-detektoru-koure" title="Hasicí přístroj a detektory kouře doma – kontrola a údržba 2026" />

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
                <li><a href="#proc">Proč kontrolovat pravidelně</a></li>
                <li><a href="#detektor-koure">Detektor kouře</a></li>
                <li><a href="#hasici-pristroj">Hasicí přístroj</a></li>
                <li><a href="#detektor-co">Detektor CO</a></li>
                <li><a href="#expirace">Co dělat při expiraci</a></li>
                <li><a href="#checklist">Roční checklist</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/sezonni-udrzba" className="sidebar-cat-link">🍂 Sezónní údržba<span>20 článků →</span></Link>
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
        .toc{background:var(--surface);border-radius:10px;padding:20px 24px;margin-bottom:40px}
        .toc-label{font-size:11px;font-weight:700;letter-spacing:.10em;text-transform:uppercase;color:var(--muted);margin-bottom:12px}
        .toc-list{padding-left:18px;display:flex;flex-direction:column;gap:6px}
        .toc-list li a{font-size:14px;color:var(--muted);text-decoration:none;font-weight:400;transition:color 120ms}
        .toc-list li a:hover{color:var(--text)}
        .article-body section{margin-bottom:48px}
        .article-body h2{font-family:var(--font-serif);font-size:clamp(20px,2.5vw,26px);font-weight:400;line-height:1.2;margin-bottom:16px;border-top:1px solid var(--border);padding-top:24px;margin-top:8px}
        .article-body h3{font-family:var(--font-sans);font-size:16px;font-weight:600;margin-top:24px;margin-bottom:10px;color:var(--text)}
        .article-body p{font-size:16px;line-height:1.75;color:#2a2a28;font-weight:300;margin-bottom:14px}
        .article-body ul,.article-body ol{padding-left:22px;margin-bottom:16px;display:flex;flex-direction:column;gap:8px}
        .article-body li{font-size:15px;line-height:1.6;color:#2a2a28;font-weight:300}
        .article-body strong{font-weight:600;color:var(--text)}
        .article-tip{background:#fff8e8;border-left:3px solid #f59e0b;border-radius:0 8px 8px 0;padding:14px 18px;font-size:14px;line-height:1.6;color:#78716c;margin:20px 0}
        .article-table-wrap{overflow-x:auto;margin:16px 0 24px}
        .article-table{width:100%;border-collapse:collapse;font-size:14px;line-height:1.5}
        .article-table th{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);padding:10px 14px;text-align:left;border-bottom:2px solid var(--border);background:var(--surface)}
        .article-table td{padding:10px 14px;border-bottom:1px solid var(--border);vertical-align:top;color:#2a2a28;font-weight:300}
        .article-table tr:last-child td{border-bottom:none}
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
