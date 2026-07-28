import ShareButtons from "@/app/components/ShareButtons";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak vybrat stěhovací krabice a balicí materiál",
  description: "Jaké velikosti stěhovacích krabic zvolit, kolik jich budete potřebovat a jaký balicí materiál se vyplatí. Praktický přehled velikostí, bublinkové fólie, pásky a značení krabic.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-vybrat-stehovaci-krabice" },
  openGraph: { title: "Jak vybrat stěhovací krabice a balicí materiál", description: "Jaké velikosti stěhovacích krabic zvolit, kolik jich budete potřebovat a jaký balicí materiál se vyplatí. Praktický přehled velikostí, bublinkové fólie, pásky a značení krabic.", url: "https://www.domovniguru.cz/blog/jak-vybrat-stehovaci-krabice", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-07-21T08:00:00Z", modifiedTime: "2026-07-21T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20vybrat%20st%C4%9Bhovac%C3%AD%20krabice%20a%20balic%C3%AD%20materi%C3%A1l&cat=blog", width: 1200, height: 630, alt: "Jak vybrat stěhovací krabice a balicí materiál" }] },
  twitter: { card: "summary_large_image", title: "Jak vybrat stěhovací krabice a balicí materiál", description: "Jaké velikosti stěhovacích krabic zvolit, kolik jich budete potřebovat a jaký balicí materiál se vyplatí. Praktický přehled velikostí, bublinkové fólie, pásky a značení krabic." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/jak-vybrat-stehovaci-krabice#article", "headline": "Jak vybrat stěhovací krabice a balicí materiál", "datePublished": "2026-07-21T08:00:00Z", "dateModified": "2026-07-21T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["stěhovací krabice", "balicí materiál", "velikosti krabic", "krabice na knihy", "krabice na oblečení", "bublinková fólie", "balicí papír", "značení krabic"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Stěhování & rekonstrukce", "item": "https://www.domovniguru.cz/blog/kategorie/stehovani" }, { "@type": "ListItem", "position": 4, "name": "Jak vybrat stěhovací krabice a balicí materiál", "item": "https://www.domovniguru.cz/blog/jak-vybrat-stehovaci-krabice" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Kolik stěhovacích krabic budu potřebovat?", "acceptedAnswer": { "@type": "Answer", "text": "Orientačně počítejte s 10 až 15 krabicemi na jednu obytnou místnost běžně vybaveného bytu. Garsonka vyjde přibližně na 15–25 krabic, byt 2+kk na 30–50, byt 3+1 na 50–80 a rodinný dům klidně na více než 100 krabic. Přesné číslo podle počtu místností a vybavení vám spočítá naše kalkulačka počtu stěhovacích krabic." } }, { "@type": "Question", "name": "Jaké velikosti stěhovacích krabic mám koupit?", "acceptedAnswer": { "@type": "Answer", "text": "Základem jsou tři velikosti. Malé krabice (kolem 35 litrů) na těžké a drobné věci – knihy, nádobí, konzervy. Střední (kolem 55–65 litrů) jako univerzál na většinu domácnosti. Velké (nad 80 litrů) jen na objemné a lehké věci – peřiny, polštáře, plyšáky. K tomu se hodí speciální krabice na knihy a šatní krabice se závěsnou tyčí na oblečení na ramínkách." } }, { "@type": "Question", "name": "Vyplatí se koupit nové krabice, nebo shánět použité?", "acceptedAnswer": { "@type": "Answer", "text": "Nové dvouvrstvé nebo třívrstvé krabice mají zaručenou nosnost a dají se použít opakovaně, což se hodí při větším stěhování. Použité krabice ze supermarketu jsou zdarma, ale bývají různých rozměrů, hůř se stohují a jejich pevnost je nejistá – u těžkého obsahu mohou povolit. Kompromisem je koupit nové malé a střední krabice na těžké věci a použité shánět jen na lehký objem." } }, { "@type": "Question", "name": "Čím nahradit bublinkovou fólii při balení?", "acceptedAnswer": { "@type": "Answer", "text": "Nejlevnější náhradou je vlastní textil – ručníky, utěrky, ponožky, trička. Do nich zabalíte talíře, sklenice i drobnou elektroniku a ušetříte místo, protože textil stěhujete tak jako tak. Dobře poslouží i balicí (havraní) papír zmuchlaný do koulí jako výplň prázdných míst v krabici. Noviny raději nepoužívejte na světlé a porézní věci, tiskařská čerň se obtiskává." } }, { "@type": "Question", "name": "Jak správně označit stěhovací krabice?", "acceptedAnswer": { "@type": "Answer", "text": "Na každou krabici napište fixem cílovou místnost v novém bydlení a stručně obsah, ideálně na dvě sousední stěny a na víko, ať je popis vidět z každé strany. Křehké krabice zvýrazněte nápisem KŘEHKÉ a šipkou nahoru. Osvědčí se barevné značení – jedna barva pásky nebo štítku na místnost. Krabice, které otevřete jako první, označte hvězdou nebo nápisem PRVNÍ." } }] }] };

const RELATED = [
  { title: "Jak správně zabalit věci při stěhování", href: "/blog/spravne-zabalit-veci", read: "5 min" },
  { title: "Stěhování bez stresu – kompletní checklist", href: "/blog/stehovani-checklist", read: "5 min" },
  { title: "Jak přestěhovat velké spotřebiče", href: "/blog/prestehovat-velke-spotrebice", read: "5 min" },
  { title: "Jak vybrat stěhovací firmu", href: "/blog/vybrat-stehovaci-firmu", read: "5 min" },
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
              <span>Jak vybrat stěhovací krabice</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏠 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak vybrat stěhovací krabice a balicí materiál</h1>
              <p className="article-lead">Krabice vypadají jako banalita, dokud nezjistíte, že polovina praskla, druhá je poloprázdná a nádobí cestu nepřežilo. Správná volba velikostí a balicího materiálu ušetří peníze, záda i nervy. Tady je přehled, jaké krabice pořídit, kolik jich potřebujete a čím věci zabalit.</p>
              <div className="article-meta-row"><span>Aktualizováno: 21. července 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/jak-vybrat-stehovaci-krabice" title="Jak vybrat stěhovací krabice a balicí materiál" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 175" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="175" fill="#fdf8f4"/>
                <text x="380" y="22" textAnchor="middle" fontSize="10" fill="#8a5030" fontWeight="700" letterSpacing="0.04em">VELIKOSTI STĚHOVACÍCH KRABIC A CO DO NICH PATŘÍ</text>

                {[
                  { x:20, icon:"📦", size:"Malá (cca 35 l)", use:"Knihy\nNádobí, konzervy\nDrobné těžké věci", note:"Do 15 kg", color:"#e07040" },
                  { x:210, icon:"📦", size:"Střední (55–65 l)", use:"Univerzál\nKuchyně, drogerie\nHračky, doplňky", note:"Do 20 kg", color:"#4a90d9" },
                  { x:400, icon:"📦", size:"Velká (nad 80 l)", use:"Peřiny, polštáře\nLehký textil\nPlyšáci", note:"Jen lehké!", color:"#9b6fd4" },
                  { x:590, icon:"👔", size:"Šatní krabice", use:"Oblečení\nna ramínkách\nBez skládání", note:"Se závěsnou tyčí", color:"#3aa06a" },
                ].map(({x, icon, size, use, note, color}) => (
                  <g key={x} transform={`translate(${x}, 28)`}>
                    <rect x="0" y="0" width="163" height="132" rx="8" fill="#fff" stroke={color} strokeWidth="1.2"/>
                    <text x="81" y="26" textAnchor="middle" fontSize="18">{icon}</text>
                    <text x="81" y="43" textAnchor="middle" fontSize="9.5" fill={color} fontWeight="700">{size}</text>
                    <line x1="10" y1="50" x2="153" y2="50" stroke={color} strokeWidth="0.5" opacity="0.4"/>
                    {use.split('\n').map((l,i) => <text key={i} x="12" y={63+i*12} fontSize="8" fill="#4a4a40">· {l}</text>)}
                    <rect x="8" y="98" width="147" height="28" rx="4" fill={color} opacity="0.08"/>
                    <text x="81" y="115" textAnchor="middle" fontSize="8.5" fill={color} fontWeight="600">{note}</text>
                  </g>
                ))}

                <rect y="158" width="760" height="17" fill="#f0e8e0" opacity="0.5"/>
                <text x="380" y="170" textAnchor="middle" fontSize="8" fill="#8a7050" fontWeight="600" letterSpacing="0.06em">📦 TĚŽKÉ VĚCI PATŘÍ DO MALÝCH KRABIC – VELKÉ NAPLNĚNÉ KNIHAMI NIKDO NEUZVEDNE</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#velikosti">Velikosti a typy krabic</a></li>
                <li><a href="#kolik">Kolik krabic potřebujete</a></li>
                <li><a href="#material">Balicí materiál</a></li>
                <li><a href="#znaceni">Systém značení krabic</a></li>
                <li><a href="#chyby">Nejčastější chyby při balení</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="velikosti">
              <h2>Velikosti a typy krabic</h2>
              <p>Základní pravidlo zní: čím těžší obsah, tím menší krabice. Zní to protichůdně, ale má to logiku. Velká krabice naplněná knihami váží přes 30 kg, nikdo ji neuzvedne a dno stejně povolí. Proto se u stěhování pracuje se třemi hlavními velikostmi plus dvěma speciálními typy.</p>
              <h3>Tři univerzální velikosti</h3>
              <ul>
                <li><strong>Malá krabice (cca 35 litrů)</strong> – na těžké a drobné věci: knihy, nádobí, konzervy, nářadí, láhve. Naplněná by neměla vážit víc než 15 kg.</li>
                <li><strong>Střední krabice (55–65 litrů)</strong> – univerzální tahoun stěhování. Kuchyňské potřeby, drogerie, hračky, dekorace, boty. Ideální kompromis mezi objemem a hmotností.</li>
                <li><strong>Velká krabice (nad 80 litrů)</strong> – výhradně na objemné a lehké věci: peřiny, polštáře, deky, plyšáky, lehký textil. Do velké krabice nikdy nedávejte nic těžkého.</li>
              </ul>
              <h3>Speciální krabice, které se vyplatí</h3>
              <ul>
                <li><strong>Krabice na knihy</strong> – menší formát s vyztuženým dnem a nosností kolem 20 kg. Kniha je papír a papír je těžký, obyčejná krabice na plný náklad knih často nestačí.</li>
                <li><strong>Šatní krabice se závěsnou tyčí</strong> – vysoká krabice s kovovou tyčí, do které oblečení pověsíte přímo na ramínkách. Košile, saka a šaty se nemačkají a v novém bytě je jen přendáte do skříně.</li>
              </ul>
              <h3>Dvouvrstvá, nebo třívrstvá lepenka?</h3>
              <p>Označení se týká počtu vrstev vlnité lepenky. Dvouvrstvá (přesněji třívrstvá lepenka s jednou vlnou) stačí na běžný obsah. Pro těžké a křehké věci, opakované použití nebo stohování do výšky volte pevnější pětivrstvou lepenku. Poznáte ji podle tloušťky stěny a vyšší ceny.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Krabice jednoho výrobce a rozměru se dají hezky stohovat a v dodávce nebo pokoji zaberou méně místa. Změť různě velkých krabic ze supermarketu se rovná a nakládá mnohem hůř – to, co ušetříte na ceně, doplatíte na čase a rozbitých věcech.</div>
            </section>

            <section id="kolik">
              <h2>Kolik krabic potřebujete</h2>
              <p>Nejčastější chyba je koupit málo krabic a v půlce balení běžet pro další. Druhá nejčastější je koupit jen velké krabice, protože se zdají výhodnější. Realistický odhad vychází z počtu místností a vybavení domácnosti.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Velikost bydlení</th><th>Orientační počet krabic</th><th>Poznámka</th></tr></thead>
                  <tbody>
                    <tr><td>Garsonka / 1+kk</td><td>15–25</td><td>Převažují malé a střední</td></tr>
                    <tr><td>Byt 2+kk</td><td>30–50</td><td>Přidejte šatní krabice</td></tr>
                    <tr><td>Byt 3+1</td><td>50–80</td><td>Vyšší podíl krabic na knihy</td></tr>
                    <tr><td>Rodinný dům</td><td>100 a více</td><td>Plus sklep, dílna, garáž</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Obecné pravidlo počítá s 10 až 15 krabicemi na jednu obytnou místnost běžně vybaveného bytu. Knihomol, sběratel nebo domácnost s dětmi se dostane na horní hranici i výš. Přesnější číslo podle počtu pokojů, vybavení a životního stylu vám <Link href="/kalkulacky/kolik-stehovacich-krabic" style={{ color: "#2a6496", textDecoration: "underline" }}>kolik krabic budete potřebovat spočítá naše kalkulačka</Link>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Kupte o 10–15 % krabic víc, než vyjde odhad. Prázdné a nepoškozené krabice většina prodejců vykoupí zpět nebo je snadno prodáte přes bazar. Dojít balicí materiál v den stěhování je horší scénář než pár krabic navíc.</div>
            </section>

            <section id="material">
              <h2>Balicí materiál: co skutečně potřebujete</h2>
              <p>Kolem krabic se točí celá řada dalšího materiálu. Něco je nezbytné, něco se dá nahradit tím, co doma máte. Přehled od nejdůležitějšího:</p>
              <h3>Balicí páska</h3>
              <p>Kvalitní široká lepicí páska (48 mm) je základ. Kupte raději dvě až tři role a odvíječ – navlékání pásky z prstů vás po desáté krabici přestane bavit. Dno každé krabice přelepte do tvaru písmene H: podélný spoj a přes něj oba příčné okraje. Levná tenká páska se trhá a nedrží, na tomhle nešetřete.</p>
              <h3>Bublinková fólie a její náhrady</h3>
              <p>Bublinková fólie chrání sklo, porcelán, elektroniku a rámečky. Nemusíte jí ale kupovat hory – velkou část práce zastane vlastní textil. Ručníky, utěrky a trička poslouží jako výplň i ochrana zároveň a stěhujete je tak jako tak. Jak přesně jednotlivé předměty zabalit rozebírá článek <Link href="/blog/spravne-zabalit-veci" style={{ color: "#2a6496", textDecoration: "underline" }}>jak správně zabalit věci při stěhování</Link>.</p>
              <h3>Balicí papír</h3>
              <p>Čistý balicí (havraní) papír je univerzální – prokládáte jím talíře, balíte skleničky a mačkáte ho do koulí jako výplň prázdných míst. Novinový papír je zdarma, ale tiskařská čerň se obtiskává, na světlé a porézní věci ho nepoužívejte.</p>
              <h3>Drobnosti, na které se zapomíná</h3>
              <ul>
                <li><strong>Silné fixy (černý a barevné)</strong> – na popis krabic; tenký propiska přes lepenku není vidět</li>
                <li><strong>Stahovací pásky a provázek</strong> – na svazování kabelů, tyčí, smetáků</li>
                <li><strong>Strečová (paletizační) fólie</strong> – omotá šuplíky, aby se nevysypaly, a fixuje deky na nábytku</li>
                <li><strong>Uzavíratelné sáčky</strong> – na šroubky z demontovaného nábytku; přilepte je páskou přímo k dílu, ke kterému patří</li>
                <li><strong>Nůž nebo nůžky</strong> – na řezání pásky; mějte po ruce i při vybalování</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Šroubky, imbusy a spojovací kování z rozebraného nábytku dejte do sáčku, popište a přilepte zevnitř na dvířka nebo přišroubujte k rámu. Nic tak nezdrží skládání skříně v novém bytě jako pátrání po chybějících vrutech.</div>
            </section>

            <section id="znaceni">
              <h2>Systém značení krabic</h2>
              <p>Dobře popsané krabice jsou rozdíl mezi klidným a chaotickým prvním dnem. Stěhováci odnesou krabice rovnou do správné místnosti a vy nemusíte otevírat deset krabic, než najdete kávovar. Značení se vyplatí promyslet ještě před balením.</p>
              <h3>Co napsat na každou krabici</h3>
              <ul>
                <li><strong>Cílovou místnost</strong> – kam má krabice v novém bydlení jít (Kuchyně, Ložnice, Dětský pokoj), ne kde je teď</li>
                <li><strong>Stručný obsah</strong> – „hrnce a pánve", „knihy – police obývák", stačí heslovitě</li>
                <li><strong>Popis na víc stran</strong> – na dvě sousední boční stěny a na víko, ať je čitelný z každé strany hromady</li>
                <li><strong>Upozornění KŘEHKÉ a šipku nahoru</strong> tam, kde je sklo, porcelán nebo elektronika</li>
              </ul>
              <h3>Barevné značení podle místností</h3>
              <p>Přiřaďte každé místnosti jednu barvu – barevnou lepicí pásku nebo samolepicí štítek. V novém bytě vylepíte na dveře pokojů papír stejné barvy a i cizí pomocník pozná, kam krabice patří, aniž by četl popisky. Systém je rychlý a funguje i na dálku přes celou chodbu.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Krabice, které budete potřebovat hned první večer (povlečení, ručníky, toaletní potřeby, nabíječky, základní nádobí), označte velkou hvězdou nebo nápisem PRVNÍ a naložte je do auta jako poslední, ať jsou po ruce první. Tuhle „krabici první noci" nezakopejte pod hromadu ostatních.</div>
            </section>

            <section id="chyby">
              <h2>Nejčastější chyby při balení</h2>
              <p>Většina poškození a zbytečné dřiny při stěhování vzniká z pár opakujících se chyb. Když se jim vyhnete, ušetříte si rozbité nádobí i bolavá záda.</p>
              <ul>
                <li><strong>Přeplněné a přetěžkané krabice</strong> – krabice narvaná knihami po okraj váží tolik, že ji nikdo nezvedne a dno povolí. Držte se hmotnosti do 15–20 kg podle velikosti.</li>
                <li><strong>Poloprázdné krabice</strong> – druhý extrém. Prázdný prostor nahoře se pod vahou dalších krabic zboří a obsah se rozdrtí. Volná místa vyplňte textilem nebo zmuchlaným papírem.</li>
                <li><strong>Těžké věci do velkých krabic</strong> – klasika, která končí prasklým dnem. Do velkých patří jen lehký objem.</li>
                <li><strong>Nádobí naplocho</strong> – talíře se balí na výšku, postavené na hranu jako desky v myčce, každý proložený papírem nebo textilem. Naležato se lámou.</li>
                <li><strong>Nepodepsané krabice</strong> – bez popisu se v novém bytě z každé krabice stává překvapení a hledání trvá hodiny.</li>
                <li><strong>Nezajištěné dno</strong> – slabé přelepení jednou páskou křížem nestačí. Dno vždy vyztužte do tvaru H a u těžkého obsahu přelepte dvakrát.</li>
              </ul>
              <p>Objemné a těžké kusy jako lednice, pračka nebo pohovka se do krabic nevejdou a mají vlastní pravidla – jak na ně bezpečně bez poškození a bez úrazu popisuje článek <Link href="/blog/prestehovat-velke-spotrebice" style={{ color: "#2a6496", textDecoration: "underline" }}>jak přestěhovat velké spotřebiče</Link>. Celkový časový plán od prvních příprav až po nastěhování najdete v našem <Link href="/blog/stehovani-checklist" style={{ color: "#2a6496", textDecoration: "underline" }}>kompletním checklistu na stěhování</Link>.</p>
              <div className="article-tip"><strong>⚠️ Pozor:</strong> Lepicí pásku nikdy nelepte přímo na lakovaný nábytek, obrazovky nebo leštěné plochy – při odstranění strhne povrch nebo zanechá lepkavé zbytky. Plochu nejdřív obalte strečovou fólií nebo papírem a teprve tu přelepte páskou.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Kolik stěhovacích krabic budu potřebovat?", a: "Orientačně počítejte s 10 až 15 krabicemi na jednu obytnou místnost běžně vybaveného bytu. Garsonka vyjde přibližně na 15–25 krabic, byt 2+kk na 30–50, byt 3+1 na 50–80 a rodinný dům klidně na více než 100 krabic. Přesné číslo podle počtu místností a vybavení vám spočítá naše kalkulačka počtu stěhovacích krabic." },
                  { q: "Jaké velikosti stěhovacích krabic mám koupit?", a: "Základem jsou tři velikosti. Malé krabice (kolem 35 litrů) na těžké a drobné věci – knihy, nádobí, konzervy. Střední (kolem 55–65 litrů) jako univerzál na většinu domácnosti. Velké (nad 80 litrů) jen na objemné a lehké věci – peřiny, polštáře, plyšáky. K tomu se hodí speciální krabice na knihy a šatní krabice se závěsnou tyčí na oblečení na ramínkách." },
                  { q: "Vyplatí se koupit nové krabice, nebo shánět použité?", a: "Nové dvouvrstvé nebo třívrstvé krabice mají zaručenou nosnost a dají se použít opakovaně, což se hodí při větším stěhování. Použité krabice ze supermarketu jsou zdarma, ale bývají různých rozměrů, hůř se stohují a jejich pevnost je nejistá – u těžkého obsahu mohou povolit. Kompromisem je koupit nové malé a střední krabice na těžké věci a použité shánět jen na lehký objem." },
                  { q: "Čím nahradit bublinkovou fólii při balení?", a: "Nejlevnější náhradou je vlastní textil – ručníky, utěrky, ponožky, trička. Do nich zabalíte talíře, sklenice i drobnou elektroniku a ušetříte místo, protože textil stěhujete tak jako tak. Dobře poslouží i balicí (havraní) papír zmuchlaný do koulí jako výplň prázdných míst v krabici. Noviny raději nepoužívejte na světlé a porézní věci, tiskařská čerň se obtiskává." },
                  { q: "Jak správně označit stěhovací krabice?", a: "Na každou krabici napište fixem cílovou místnost v novém bydlení a stručně obsah, ideálně na dvě sousední stěny a na víko, ať je popis vidět z každé strany. Křehké krabice zvýrazněte nápisem KŘEHKÉ a šipkou nahoru. Osvědčí se barevné značení – jedna barva pásky nebo štítku na místnost. Krabice, které otevřete jako první, označte hvězdou nebo nápisem PRVNÍ." },
                ].map(({ q, a }) => (
                  <details key={q} className="faq-item">
                    <summary className="faq-q">{q}</summary>
                    <p className="faq-a">{a}</p>
                  </details>
                ))}
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/jak-vybrat-stehovaci-krabice" title="Jak vybrat stěhovací krabice a balicí materiál" />

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
                <li><a href="#velikosti">Velikosti a typy krabic</a></li>
                <li><a href="#kolik">Kolik krabic potřebujete</a></li>
                <li><a href="#material">Balicí materiál</a></li>
                <li><a href="#znaceni">Systém značení</a></li>
                <li><a href="#chyby">Nejčastější chyby</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/stehovani" className="sidebar-cat-link">🏠 Stěhování & rekonstrukce<span>36 článků →</span></Link>
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
        .hero-illustration{margin:28px 0 36px;border-radius:12px;overflow:hidden;border:1px solid var(--border)}.hero-svg{width:100%;height:auto;display:block}
      `}</style>
    </>
  );
}
