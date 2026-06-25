import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Domácí alarm a zabezpečovací systém: jak vybrat",
  description: "Drátové vs. bezdrátové alarmy, ústředna, čidla a kamery, napojení na pult, ceny a časté chyby při výběru zabezpečovacího systému pro dům i byt.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/domaci-alarm-a-zabezpecovaci-system" },
  openGraph: { title: "Domácí alarm a zabezpečovací systém: jak vybrat", description: "Drátové vs. bezdrátové alarmy, ústředna, čidla a kamery, napojení na pult, ceny a časté chyby při výběru zabezpečovacího systému pro dům i byt.", url: "https://www.domovniguru.cz/blog/domaci-alarm-a-zabezpecovaci-system", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-25T08:00:00Z", modifiedTime: "2026-06-25T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Domác%C3%AD%20alarm%20a%20zabezpe%C4%8Dovac%C3%AD%20syst%C3%A9m%3A%20jak%20vybrat&cat=blog", width: 1200, height: 630, alt: "Domácí alarm a zabezpečovací systém: jak vybrat" }] },
  twitter: { card: "summary_large_image", title: "Domácí alarm a zabezpečovací systém: jak vybrat", description: "Drátové vs. bezdrátové alarmy, ústředna, čidla a kamery, napojení na pult, ceny a časté chyby při výběru zabezpečovacího systému pro dům i byt." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/domaci-alarm-a-zabezpecovaci-system#article", "headline": "Domácí alarm a zabezpečovací systém: jak vybrat", "datePublished": "2026-06-25T08:00:00Z", "dateModified": "2026-06-25T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["domácí alarm", "zabezpečovací systém", "alarm do bytu", "alarm do domu", "PIR čidlo", "napojení na pult", "chytrý alarm"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Elektrika & osvětlení", "item": "https://www.domovniguru.cz/blog/kategorie/elektrika" }, { "@type": "ListItem", "position": 4, "name": "Domácí alarm a zabezpečovací systém", "item": "https://www.domovniguru.cz/blog/domaci-alarm-a-zabezpecovaci-system" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Je lepší drátový nebo bezdrátový alarm?", "acceptedAnswer": { "@type": "Answer", "text": "Bezdrátový alarm se snáz instaluje i do hotového bytu nebo domu bez sekání zdí a je vhodný i pro nájemníky. Drátový systém je odolnější proti rušení a vybíjení baterií čidel, ale instalace je náročnější a hodí se spíš do novostavby nebo při rekonstrukci, kdy se kabeláž vede souběžně s elektroinstalací." } }, { "@type": "Question", "name": "Musím mít alarm napojený na pult centrální ochrany?", "acceptedAnswer": { "@type": "Answer", "text": "Ne, napojení na pult centrální ochrany (PCO) je volitelné. Lokální alarm, který jen houká a pošle notifikaci do mobilu, je levnější a stačí mnoha domácnostem. Napojení na PCO se vyplatí tam, kde chceš jistotu, že na poplach reálně někdo dorazí, typicky u samostatně stojících domů nebo rekreačních objektů." } }, { "@type": "Question", "name": "Zvládnu instalaci alarmu sám, nebo potřebuju odborníka?", "acceptedAnswer": { "@type": "Answer", "text": "Bezdrátové sady určené pro domácí instalaci (typicky kategorie chytrých alarmů s appkou) lze ve většině případů namontovat svépomocí, výrobci je k tomu přímo navrhují. Složitější drátové systémy s napojením na pult nebo s mnoha zónami je lepší nechat na certifikované montážní firmě, hlavně pokud má systém splňovat podmínky pojišťovny." } }, { "@type": "Question", "name": "Kolik stojí domácí alarm včetně instalace?", "acceptedAnswer": { "@type": "Answer", "text": "Základní bezdrátová sada pro byt (ústředna, pár čidel, siréna) vyjde od přibližně 3 000 do 8 000 Kč při svépomocné instalaci. Profesionálně montovaný systém pro rodinný dům s napojením na pult se pohybuje od 15 000 Kč výše a k tomu je měsíční poplatek za monitoring v řádu stovek korun." } }, { "@type": "Question", "name": "Ovlivní domácí alarm cenu pojištění domácnosti?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, u řady pojišťoven funkční zabezpečovací systém snižuje pojistné nebo je podmínkou pro vyšší limity plnění při krádeži. Konkrétní podmínky, jaký typ alarmu a jaké napojení pojišťovna vyžaduje, je potřeba si ověřit přímo v pojistných podmínkách před uzavřením smlouvy." } }] }] };

const RELATED = [
  { title: "Kamerový systém pro dům a zahradu", href: "/blog/kamerovy-system-pro-dum-a-zahradu", read: "6 min" },
  { title: "Výběr domovního zvonku a videotelefonu", href: "/blog/vyber-domovniho-zvonku-a-videotelefonu", read: "5 min" },
  { title: "Chytrá domácnost – jak začít", href: "/blog/chytra-domacnost-zaciname", read: "6 min" },
  { title: "Jak instalovat pohybový senzor", href: "/blog/instalovat-pohybovy-senzor", read: "4 min" },
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
              <span>Domácí alarm a zabezpečovací systém</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">⚡ Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Domácí alarm a zabezpečovací systém: jak vybrat</h1>
              <p className="article-lead">Domácí alarm dnes nemusí znamenat sekání drážek do zdí a krabici plnou kabelů. Moderní bezdrátové systémy s appkou v mobilu zvládne nainstalovat i běžný uživatel za jedno odpoledne. Než ale začneš nakupovat, je dobré rozumět tomu, jaké typy systémů existují, co všechno potřebuješ a kdy se vyplatí přizvat profesionála.</p>
              <div className="article-meta-row"><span>Aktualizováno: 25. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#typy-systemu">Typy zabezpečovacích systémů</a></li>
                <li><a href="#komponenty">Základní komponenty alarmu</a></li>
                <li><a href="#chytre-alarmy">Chytré alarmy s appkou</a></li>
                <li><a href="#instalace">Vlastní instalace vs. profesionální montáž</a></li>
                <li><a href="#propojeni">Propojení s kamerami a chytrou domácností</a></li>
                <li><a href="#ceny">Orientační ceny</a></li>
                <li><a href="#chyby">Časté chyby při výběru</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="typy-systemu">
              <h2>Typy zabezpečovacích systémů</h2>
              <p>Než začneš srovnávat konkrétní produkty, je užitečné si ujasnit dvě základní osy, podle kterých se alarmy dělí: způsob propojení komponent (drátově nebo bezdrátově) a způsob reakce na poplach (lokálně, nebo s napojením na vzdálený dohled).</p>
              <h3>Drátové vs. bezdrátové systémy</h3>
              <ul>
                <li><strong>Drátové systémy</strong> – čidla a ústředna jsou propojené kabelem. Výhodou je vysoká spolehlivost, žádné baterie k dobíjení a odolnost proti rušení signálu. Nevýhodou je náročná instalace, ideálně při hrubé stavbě nebo rekonstrukci, kdy se kabeláž vede společně s elektroinstalací.</li>
                <li><strong>Bezdrátové systémy</strong> – čidla komunikují s ústřednou rádiově (např. v pásmu 868 MHz nebo přes Wi-Fi/Zigbee). Instalace je rychlá, nic se nesekán do zdí, ideální pro byty, nájemní bydlení nebo dodatečné zabezpečení staršího domu. Nevýhodou je nutnost měnit baterie v čidlech (obvykle jednou za 1–3 roky) a teoretická citlivost na rušení signálu.</li>
              </ul>
              <h3>Lokální alarm vs. napojení na pult centrální ochrany (PCO)</h3>
              <ul>
                <li><strong>Lokální alarm</strong> – při poplachu spustí sirénu a pošle notifikaci do mobilní aplikace. Reakci na poplach (zavolat sousedy, policii) řešíš sám. Levnější varianta, bez měsíčních poplatků.</li>
                <li><strong>Napojení na pult centrální ochrany</strong> – poplach se přenáší do dohledového centra bezpečnostní agentury, která vyšle zásahovou hlídku nebo informuje policii. Vyžaduje smlouvu s bezpečnostní agenturou a měsíční poplatek, ale dává jistotu reálné reakce i když nejsi doma nebo nemáš signál.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pro byt v bytovém domě s ostražitými sousedy často stačí lokální alarm s hlasitou sirénou a appkou. Pro samostatně stojící dům, chatu nebo objekt, kam dlouho nikdo nedorazí, zvaž napojení na PCO.</div>
            </section>

            <section id="komponenty">
              <h2>Základní komponenty alarmu</h2>
              <p>Ať zvolíš jakýkoli typ systému, jádro je u všech podobné. Zde jsou základní stavební kameny, ze kterých se zabezpečovací systém skládá.</p>
              <ul>
                <li><strong>Ústředna (centrála)</strong> – mozek celého systému. Přijímá signály z čidel, rozhoduje o spuštění poplachu a komunikuje s appkou nebo pultem. U bezdrátových systémů bývá zároveň hlavní jednotkou s SIM kartou nebo Wi-Fi modulem pro odesílání notifikací.</li>
                <li><strong>PIR čidla pohybu</strong> – detekují pohyb pomocí infračerveného záření. Umisťují se do rohů místností, na chodby nebo k oknům, odkud zachytí pohyb v celé místnosti. Kvalitní čidla mají filtr proti falešným poplachům od domácích mazlíčků.</li>
                <li><strong>Magnetické kontakty na dveře a okna</strong> – dvoudílný senzor (magnet + spínač), který vyhodnotí otevření dveří nebo okna. Patří k nejspolehlivějším a nejméně náchylným k falešným poplachům.</li>
                <li><strong>Siréna</strong> – vnitřní nebo venkovní, akustická i světelná. Venkovní siréna na fasádě má navíc odstrašující efekt – pachatel vidí, že dům je chráněný, ještě než se dostane dovnitř.</li>
                <li><strong>Klávesnice nebo čtečka karet/tagů</strong> – pro zapnutí a vypnutí systému bez nutnosti sahat po mobilu, praktické u vchodu.</li>
                <li><strong>Detektory rozbití skla, kouřové a záplavové čidlo</strong> – doplňkové senzory, které rozšiřují alarm i na další rizika než jen vniknutí.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Magnetické kontakty na hlavní vstupní dveře a balkon/terasu bývají základ, který pokryje nejčastější způsob vniknutí. PIR čidla pak doplňují krytí prostoru tam, kde nelze osadit kontakt na každý možný vstup.</div>
            </section>

            <section id="chytre-alarmy">
              <h2>Chytré alarmy s appkou</h2>
              <p>V posledních letech se prosadila kategorie takzvaných chytrých alarmů – bezdrátových systémů, které se ovládají primárně přes mobilní aplikaci a propojují se s dalšími chytrými prvky v domácnosti. Na trhu existuje řada značek v této kategorii, od jednodušších startovacích sad po pokročilé profesionální systémy s vlastní montážní sítí.</p>
              <p>Společné rysy chytrých alarmů:</p>
              <ul>
                <li><strong>Ovládání z mobilu</strong> – zapnutí, vypnutí, přehled historie poplachů a notifikace v reálném čase, ať jsi kdekoli.</li>
                <li><strong>Modulární skladba</strong> – systém si poskládáš podle potřeby a postupně doplňuješ další čidla, kamery nebo doplňky.</li>
                <li><strong>Snadná svépomocná instalace</strong> – čidla se lepí nebo šroubují, párování s ústřednou probíhá přes appku během pár minut.</li>
                <li><strong>Možnost profesionálního monitoringu</strong> – u většiny značek si lze navíc připlatit napojení na pult centrální ochrany přímo přes výrobce nebo partnerskou bezpečnostní agenturu.</li>
                <li><strong>Integrace s chytrou domácností</strong> – propojení s chytrými zásuvkami, žárovkami, kamerami nebo hlasovými asistenty.</li>
              </ul>
              <p>Při výběru konkrétní značky se vyplatí srovnat dostupnost servisu a náhradních čidel v ČR, délku záruky, cenu případného měsíčního monitoringu a to, jak dlouho je firma na trhu – u zabezpečovací techniky je dobré sázet na ověřené hráče s podporou, ne na nejlevnější neznačkový kus z e-shopu.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Před nákupem si ověř, zda appka podporuje více uživatelů (např. pro celou rodinu) a zda umožňuje nastavit dočasné kódy pro hosty nebo úklidovou firmu, aniž bys musela sdílet svůj hlavní přístup.</div>
            </section>

            <section id="instalace">
              <h2>Vlastní instalace vs. profesionální montáž</h2>
              <p>Bezdrátové sady určené pro domácí trh jsou navrženy tak, aby je zvládl nainstalovat běžný uživatel bez elektrotechnického vzdělání. Postup je obvykle: napárovat ústřednu s appkou, rozmístit čidla podle návodu a vyzkoušet detekci.</p>
              <h3>Kdy zvládneš instalaci sám</h3>
              <ul>
                <li>Bezdrátový systém pro byt nebo menší dům</li>
                <li>Čidla se lepí nebo šroubují na povrch, žádné zásahy do elektroinstalace</li>
                <li>Stačí lokální alarm bez napojení na pult</li>
              </ul>
              <h3>Kdy se vyplatí profesionální montáž</h3>
              <ul>
                <li>Drátový systém vyžadující vedení kabeláže ve zdech</li>
                <li>Velký objekt s mnoha zónami, branami, vraty nebo venkovním perimetrem</li>
                <li>Požadavek pojišťovny na certifikovanou instalaci pro vyšší pojistné krytí</li>
                <li>Napojení na pult centrální ochrany, kde montážní firma zařídí i smlouvu s bezpečnostní agenturou</li>
                <li>Nejistota, jak systém správně nakonfigurovat, aby nedocházelo k falešným poplachům</li>
              </ul>
              <p>Pokud má instalace zahrnovat i nové elektrické rozvody, třeba pro napájení venkovní sirény nebo kamer, platí stejná zásada jako u jiných elektroinstalačních prací: práci na vedení pod napětím nedělej sám, pokud si nejsi jistý – riziko úrazu elektrickým proudem i poškození instalace je reálné. V takovém případě, nebo kdykoli máš jakoukoli nejistotu, je vždy bezpečnější přizvat kvalifikovaného elektrikáře.</p>
            </section>

            <section id="propojeni">
              <h2>Propojení s kamerami a chytrou domácností</h2>
              <p>Alarm samotný řekne, že se něco stalo, ale nedá ti vizuální potvrzení. Proto má smysl ho doplnit o kamerový systém – při spuštění poplachu se ti do appky pošle nejen notifikace, ale i klip nebo živý záběr z kamery u vchodu. Podrobně se výběru kamer věnujeme v článku o tom, jak vybrat <Link href="/blog/kamerovy-system-pro-dum-a-zahradu" style={{ color: "#2a6496", textDecoration: "underline" }}>kamerový systém pro dům a zahradu</Link>.</p>
              <p>Další užitečná propojení:</p>
              <ul>
                <li><strong>Chytré osvětlení</strong> – při poplachu se automaticky rozsvítí všechna světla v domě, což odradí případného pachatele a zároveň upozorní okolí.</li>
                <li><strong>Domovní zvonek s kamerou</strong> – vidíš, kdo stojí před dveřmi, ještě než otevřeš. Více v článku o výběru <Link href="/blog/vyber-domovniho-zvonku-a-videotelefonu" style={{ color: "#2a6496", textDecoration: "underline" }}>domovního zvonku a videotelefonu</Link>.</li>
                <li><strong>Chytré zásuvky a vypínače</strong> – simulace přítomnosti (rozsvícení a zhasnutí v určitou dobu), když jste na dovolené.</li>
                <li><strong>Hlasoví asistenti</strong> – oznámení o stavu alarmu nebo otevřeném okně nahlas v domácnosti.</li>
              </ul>
              <p>Pokud s chytrou domácností začínáš úplně od nuly, doporučujeme nejdřív projít náš úvodní článek <Link href="/blog/chytra-domacnost-zaciname" style={{ color: "#2a6496", textDecoration: "underline" }}>chytrá domácnost – jak začít</Link>, kde najdeš základní principy a kompatibilitu jednotlivých standardů.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Při výběru více chytrých zařízení od různých výrobců ověř, zda spolu komunikují přes společný standard (např. Wi-Fi, Zigbee, Matter) – jinak skončíš s několika nekompatibilními appkami místo jednoho přehledného ovládání.</div>
            </section>

            <section id="ceny">
              <h2>Orientační ceny</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ systému</th><th>Pořizovací cena</th><th>Provozní náklady</th><th>Instalace</th></tr></thead>
                  <tbody>
                    <tr><td>Základní bezdrátová sada pro byt</td><td>3 000–8 000 Kč</td><td>Baterie do čidel, případně poplatek za appku/cloud</td><td>Svépomocně, 1–2 hodiny</td></tr>
                    <tr><td>Rozšířený bezdrátový systém pro dům</td><td>8 000–20 000 Kč</td><td>Baterie, volitelný monitoring 200–500 Kč/měsíc</td><td>Svépomocně nebo s montáží</td></tr>
                    <tr><td>Drátový systém s montáží</td><td>15 000–40 000 Kč a více</td><td>Servisní revize, monitoring dle agentury</td><td>Profesionální, v řádu dní</td></tr>
                    <tr><td>Napojení na pult centrální ochrany</td><td>Instalace + jednorázový poplatek za napojení</td><td>300–800 Kč/měsíc dle agentury</td><td>Smlouva s bezpečnostní agenturou</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Do celkové úvahy je dobré zahrnout i nepřímé úspory – řada pojišťoven nabízí nižší pojistné nebo vyšší limity plnění při krádeži, pokud je nemovitost vybavena funkčním zabezpečovacím systémem. Konkrétní podmínky najdeš v pojistné smlouvě nebo se zeptej svého pojišťovacího poradce.</p>
            </section>

            <section id="chyby">
              <h2>Časté chyby při výběru</h2>
              <ul>
                <li><strong>Podcenění počtu čidel</strong> – jedno PIR čidlo u dveří nestačí na celý dům, slabá místa (sklep, garáž, zadní vchod) zůstanou bez ochrany.</li>
                <li><strong>Zapomenutý záložní zdroj</strong> – pokud alarm při výpadku elektřiny nemá záložní baterii, pachatel může vniknutí naplánovat právě na chvíli bez proudu. Vyber systém s vlastní zálohou nebo dořeš zálohování přes <Link href="/blog/zalozni-zdroj-generator-pro-domacnost" style={{ color: "#2a6496", textDecoration: "underline" }}>záložní zdroj pro domácnost</Link>.</li>
                <li><strong>Špatné umístění PIR čidel</strong> – čidlo namířené proti oknu nebo radiátoru může generovat falešné poplachy od slunce nebo tepla.</li>
                <li><strong>Žádný test po instalaci</strong> – systém je potřeba po zapojení vyzkoušet ve všech zónách, ne se spolehnout, že „to bude fungovat".</li>
                <li><strong>Sdílení kódů s příliš mnoha lidmi</strong> – čím víc lidí znají hlavní přístupový kód, tím snáz unikne, a to i nedopatřením.</li>
                <li><strong>Spoléhání jen na sirénu bez notifikace</strong> – pokud nejsi doma, hlasitá siréna nikoho neinformuje. Vždy zvol systém s upozorněním do mobilu, ideálně i s napojením na pult.</li>
                <li><strong>Levná neznačková elektronika z nejasných zdrojů</strong> – u bezpečnostní techniky šetři jinde, ne na spolehlivosti a dostupnosti servisu.</li>
              </ul>
              <div className="article-tip"><strong>⚠️ Bezpečnost:</strong> Pokud je součástí instalace napájení venkovní sirény, kamer nebo klávesnice ze sítě 230 V, vždy nejprve vypni příslušný jistič v rozvaděči, než se čehokoli dotkneš. Po dokončení větších úprav elektroinstalace doporučujeme nechat stav zkontrolovat revizním technikem – víc se dozvíš v článku o tom, <Link href="/blog/revize-elektroinstalace-kdy-a-proc" style={{ color: "#2a6496", textDecoration: "underline" }}>kdy a proč dělat revizi elektroinstalace</Link>.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Je lepší drátový nebo bezdrátový alarm?", a: "Bezdrátový alarm se snáz instaluje i do hotového bytu nebo domu bez sekání zdí a je vhodný i pro nájemníky. Drátový systém je odolnější proti rušení a vybíjení baterií čidel, ale instalace je náročnější a hodí se spíš do novostavby nebo při rekonstrukci, kdy se kabeláž vede souběžně s elektroinstalací." },
                  { q: "Musím mít alarm napojený na pult centrální ochrany?", a: "Ne, napojení na pult centrální ochrany (PCO) je volitelné. Lokální alarm, který jen houká a pošle notifikaci do mobilu, je levnější a stačí mnoha domácnostem. Napojení na PCO se vyplatí tam, kde chceš jistotu, že na poplach reálně někdo dorazí, typicky u samostatně stojících domů nebo rekreačních objektů." },
                  { q: "Zvládnu instalaci alarmu sám, nebo potřebuju odborníka?", a: "Bezdrátové sady určené pro domácí instalaci lze ve většině případů namontovat svépomocí, výrobci je k tomu přímo navrhují. Složitější drátové systémy s napojením na pult nebo s mnoha zónami je lepší nechat na certifikované montážní firmě, hlavně pokud má systém splňovat podmínky pojišťovny." },
                  { q: "Kolik stojí domácí alarm včetně instalace?", a: "Základní bezdrátová sada pro byt (ústředna, pár čidel, siréna) vyjde od přibližně 3 000 do 8 000 Kč při svépomocné instalaci. Profesionálně montovaný systém pro rodinný dům s napojením na pult se pohybuje od 15 000 Kč výše a k tomu je měsíční poplatek za monitoring v řádu stovek korun." },
                  { q: "Ovlivní domácí alarm cenu pojištění domácnosti?", a: "Ano, u řady pojišťoven funkční zabezpečovací systém snižuje pojistné nebo je podmínkou pro vyšší limity plnění při krádeži. Konkrétní podmínky, jaký typ alarmu a jaké napojení pojišťovna vyžaduje, je potřeba si ověřit přímo v pojistných podmínkách před uzavřením smlouvy." },
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
                <li><a href="#typy-systemu">Typy systémů</a></li>
                <li><a href="#komponenty">Základní komponenty</a></li>
                <li><a href="#chytre-alarmy">Chytré alarmy s appkou</a></li>
                <li><a href="#instalace">Instalace</a></li>
                <li><a href="#propojeni">Propojení s kamerami</a></li>
                <li><a href="#ceny">Orientační ceny</a></li>
                <li><a href="#chyby">Časté chyby</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/elektrika" className="sidebar-cat-link">⚡ Elektrika & osvětlení<span>29 článků →</span></Link>
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
