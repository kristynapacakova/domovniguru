import ShareButtons from "@/app/components/ShareButtons";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak financovat rekonstrukci: úvěr, hypotéka, úspory",
  description: "Přehled možností, jak zaplatit rekonstrukci bytu nebo domu – vlastní úspory, spotřebitelský úvěr, hypotéka a její navýšení, stavební spoření a dotace Nová zelená úsporám. Výhody, nevýhody a úroky.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-financovat-rekonstrukci" },
  openGraph: { title: "Jak financovat rekonstrukci: úvěr, hypotéka, úspory", description: "Přehled možností, jak zaplatit rekonstrukci bytu nebo domu – vlastní úspory, spotřebitelský úvěr, hypotéka a její navýšení, stavební spoření a dotace Nová zelená úsporám. Výhody, nevýhody a úroky.", url: "https://www.domovniguru.cz/blog/jak-financovat-rekonstrukci", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-07-21T08:00:00Z", modifiedTime: "2026-07-21T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20financovat%20rekonstrukci%3A%20%C3%BAv%C4%9Br%2C%20hypot%C3%A9ka%2C%20%C3%BAspory&cat=blog", width: 1200, height: 630, alt: "Jak financovat rekonstrukci: úvěr, hypotéka, úspory" }] },
  twitter: { card: "summary_large_image", title: "Jak financovat rekonstrukci: úvěr, hypotéka, úspory", description: "Přehled možností, jak zaplatit rekonstrukci bytu nebo domu – vlastní úspory, spotřebitelský úvěr, hypotéka a její navýšení, stavební spoření a dotace Nová zelená úsporám. Výhody, nevýhody a úroky." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/jak-financovat-rekonstrukci#article", "headline": "Jak financovat rekonstrukci: úvěr, hypotéka, úspory", "datePublished": "2026-07-21T08:00:00Z", "dateModified": "2026-07-21T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["financování rekonstrukce", "úvěr na rekonstrukci", "hypotéka na rekonstrukci", "spotřebitelský úvěr", "stavební spoření", "Nová zelená úsporám", "refinancování hypotéky", "dotace na rekonstrukci"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Stěhování & rekonstrukce", "item": "https://www.domovniguru.cz/blog/kategorie/stehovani" }, { "@type": "ListItem", "position": 4, "name": "Jak financovat rekonstrukci: úvěr, hypotéka, úspory", "item": "https://www.domovniguru.cz/blog/jak-financovat-rekonstrukci" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Je lepší na rekonstrukci spotřebitelský úvěr, nebo hypotéka?", "acceptedAnswer": { "@type": "Answer", "text": "Záleží na částce a době splácení. U menších rekonstrukcí zhruba do 500 tisíc korun bývá výhodnější spotřebitelský úvěr – je rychlý, bez zajištění nemovitostí a bez odhadu. U větších částek nad zhruba 500 tisíc až milion korun se vyplatí hypotéka nebo účelový úvěr na bydlení, protože má výrazně nižší úrok, i když je administrativně náročnější a vyžaduje zástavu nemovitosti." } }, { "@type": "Question", "name": "Dá se navýšit stávající hypotéka na rekonstrukci?", "acceptedAnswer": { "@type": "Answer", "text": "Ano. Pokud už na nemovitosti hypotéku máte, banka ji za určitých podmínek navýší o částku na rekonstrukci. Nejčastěji to jde při refinancování, tedy převodu hypotéky k jiné bance na konci fixace, nebo v rámci předschváleného navýšení u stávající banky. Podmínkou je dostatečná hodnota nemovitosti a dostatečný příjem na vyšší splátku." } }, { "@type": "Question", "name": "Na co lze čerpat dotaci Nová zelená úsporám?", "acceptedAnswer": { "@type": "Answer", "text": "Nová zelená úsporám podporuje energeticky úsporná opatření – zateplení fasády, střechy a stropů, výměnu oken a dveří, výměnu zdroje vytápění za tepelné čerpadlo nebo kotel na biomasu, instalaci fotovoltaiky, solárního ohřevu vody a řízeného větrání s rekuperací. Nepokrývá běžnou rekonstrukci typu nová koupelna nebo kuchyně, cílí na snížení spotřeby energie." } }, { "@type": "Question", "name": "Kolik peněz na rekonstrukci bych měl mít našetřeno předem?", "acceptedAnswer": { "@type": "Answer", "text": "Doporučuje se mít v hotovosti alespoň rezervu 15 až 20 procent nad rozpočet na nečekané práce, které se u rekonstrukcí objevují téměř vždy – skryté vady, přepětí rozpočtu, dražší materiál. I když většinu financujete úvěrem, vlastní rezerva vás ochrání před tím, abyste museli uprostřed stavby shánět další peníze." } }, { "@type": "Question", "name": "Vyplatí se na rekonstrukci ještě stavební spoření?", "acceptedAnswer": { "@type": "Answer", "text": "Stavební spoření dává smysl, pokud smlouvu už máte a chcete využít úvěr ze stavebního spoření nebo překlenovací úvěr účelově na bydlení. Výhodou je účelovost a u řádného úvěru pevná úroková sazba. Pro nové střadatele je ale státní podpora dnes nižší než dříve a rozjezd trvá roky, takže jako rychlý zdroj na blízkou rekonstrukci se spíš nehodí." } }] }] };

const RELATED = [
  { title: "Jak naplánovat rekonstrukci bytu krok za krokem", href: "/blog/planovani-rekonstrukce-bytu", read: "6 min" },
  { title: "Jak odhadnout cenu rekonstrukce", href: "/blog/odhadnout-cenu-rekonstrukce", read: "5 min" },
  { title: "Hypotéka na rekonstrukci: jak na ni", href: "/blog/hypoteka-na-rekonstrukci", read: "6 min" },
  { title: "Jak bydlet během rekonstrukce", href: "/blog/jak-bydlet-behem-rekonstrukce", read: "5 min" },
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
              <span>Jak financovat rekonstrukci</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏠 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak financovat rekonstrukci</h1>
              <p className="article-lead">Rozpočet na rekonstrukci se snadno vyšplhá do statisíců a málokdo má celou částku v hotovosti. Naštěstí existuje víc cest, jak ji zaplatit – od vlastních úspor přes spotřebitelský úvěr a hypotéku až po dotace. Každá varianta se hodí na něco jiného. Tady je přehled možností, jejich úroků, výhod i úskalí.</p>
              <div className="article-meta-row"><span>Aktualizováno: 21. července 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/jak-financovat-rekonstrukci" title="Jak financovat rekonstrukci: úvěr, hypotéka, úspory" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 175" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="175" fill="#fdf8f4"/>
                <text x="380" y="22" textAnchor="middle" fontSize="10" fill="#8a5030" fontWeight="700" letterSpacing="0.04em">JAK ZAPLATIT REKONSTRUKCI – PODLE VÝŠE ROZPOČTU</text>

                {[
                  { x:20, icon:"💰", src:"Vlastní úspory", detail:"Bez úroku a dluhu\nOkamžitě k dispozici\nDrobné opravy", best:"Do 200 tis.", color:"#3aa06a" },
                  { x:210, icon:"🏦", src:"Spotřebitelský úvěr", detail:"Rychlý, bez zástavy\nVyšší úrok\nKratší splatnost", best:"200–500 tis.", color:"#4a90d9" },
                  { x:400, icon:"🏠", src:"Hypotéka / navýšení", detail:"Nízký úrok\nZástava nemovitosti\nDelší vyřízení", best:"Nad 500 tis.", color:"#9b6fd4" },
                  { x:590, icon:"🌿", src:"Dotace NZÚ", detail:"Nevratný příspěvek\nJen úsporná opatření\nProplácí se zpětně", best:"Doplněk", color:"#e0a040" },
                ].map(({x, icon, src, detail, best, color}) => (
                  <g key={x} transform={`translate(${x}, 28)`}>
                    <rect x="0" y="0" width="163" height="132" rx="8" fill="#fff" stroke={color} strokeWidth="1.2"/>
                    <text x="81" y="26" textAnchor="middle" fontSize="18">{icon}</text>
                    <text x="81" y="43" textAnchor="middle" fontSize="9.5" fill={color} fontWeight="700">{src}</text>
                    <line x1="10" y1="50" x2="153" y2="50" stroke={color} strokeWidth="0.5" opacity="0.4"/>
                    {detail.split('\n').map((l,i) => <text key={i} x="12" y={63+i*12} fontSize="8" fill="#4a4a40">· {l}</text>)}
                    <rect x="8" y="98" width="147" height="28" rx="4" fill={color} opacity="0.08"/>
                    <text x="81" y="115" textAnchor="middle" fontSize="8.5" fill={color} fontWeight="600">{best}</text>
                  </g>
                ))}

                <rect y="158" width="760" height="17" fill="#f0e8e0" opacity="0.5"/>
                <text x="380" y="170" textAnchor="middle" fontSize="8" fill="#8a7050" fontWeight="600" letterSpacing="0.06em">💡 ČASTO SE VYPLATÍ KOMBINACE – ÚSPORY NA ROZBĚH, ÚVĚR NA ZBYTEK, DOTACE NA ÚSPORNÁ OPATŘENÍ</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#kolik">Nejdřív si spočítejte, kolik potřebujete</a></li>
                <li><a href="#uspory">Vlastní úspory</a></li>
                <li><a href="#uver">Spotřebitelský úvěr</a></li>
                <li><a href="#hypoteka">Hypotéka a její navýšení</a></li>
                <li><a href="#sporeni-dotace">Stavební spoření a dotace</a></li>
                <li><a href="#kombinace">Jak možnosti kombinovat</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="kolik">
              <h2>Nejdřív si spočítejte, kolik potřebujete</h2>
              <p>Volba financování začíná u čísla. Jiné řešení dává smysl u nové koupelny za 200 tisíc a jiné u kompletní rekonstrukce bytu za dva miliony. Než začnete obcházet banky, potřebujete realistický rozpočet – včetně rezervy.</p>
              <p>Rekonstrukce má neblahou vlastnost prodražit se oproti prvnímu odhadu. Skryté vady, přepětí rozpočtu i dražší materiál jsou spíš pravidlo než výjimka. Proto počítejte s rezervou alespoň 15 až 20 procent nad rozpočet. Jak se k reálnému číslu dobrat popisuje článek <Link href="/blog/odhadnout-cenu-rekonstrukce" style={{ color: "#2a6496", textDecoration: "underline" }}>jak odhadnout cenu rekonstrukce</Link>, širší postup od záměru po realizaci pak <Link href="/blog/planovani-rekonstrukce-bytu" style={{ color: "#2a6496", textDecoration: "underline" }}>jak naplánovat rekonstrukci bytu</Link>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Než se rozhodnete pro konkrétní úvěr, spočítejte si měsíční splátku pro různé částky a doby splácení. Kolik vás rekonstrukce bude stát na splátkách měsíčně, ukáže naše <Link href="/kalkulacky/splatky-uveru-na-rekonstrukci" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačka splátek úvěru na rekonstrukci</Link>. Uvidíte, jaká varianta se vejde do vašeho rozpočtu.</div>
            </section>

            <section id="uspory">
              <h2>Vlastní úspory</h2>
              <p>Nejlevnější peníze jsou ty vlastní. Financování z úspor nemá žádný úrok, žádné poplatky a žádnou administrativu – prostě zaplatíte a máte hotovo. U menších oprav a dílčích rekonstrukcí je to jasná první volba.</p>
              <h3>Kdy dává smysl</h3>
              <ul>
                <li><strong>Drobné a střední opravy</strong> – výmalba, nová podlaha, dílčí modernizace, kde se částka pohybuje v desítkách až nižších stovkách tisíc</li>
                <li><strong>Máte rezervu i po zaplacení</strong> – rekonstrukci z úspor financujte jen tehdy, když vám zůstane finanční polštář na běžný život a nečekané výdaje</li>
                <li><strong>Nechcete se zadlužit</strong> – úvěr vždy zaplatíte dráž o úrok; kdo peníze má, ušetří tím, že si nepůjčuje</li>
              </ul>
              <p>Pozor na jednu chybu: vysypat na rekonstrukci úplně všechno, co máte, a zůstat bez rezervy. Pokud se pak porouchá auto nebo vypadne příjem, dostáváte se do úzkých. I když financujete z vlastního, nechte si stranou pohotovostní rezervu na několik měsíců výdajů.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Kombinace bývá rozumnější než extrém. Část rekonstrukce zaplaťte z úspor a zbytek dofinancujte úvěrem – snížíte si tím úročenou částku, a přesto vám zůstane hotovostní rezerva.</div>
            </section>

            <section id="uver">
              <h2>Spotřebitelský úvěr</h2>
              <p>Spotřebitelský (bezúčelový) úvěr je nejrychlejší cesta k penězům. Nevyžaduje zástavu nemovitosti ani odhad, banka ho schválí často během pár dní jen na základě příjmu. Za tuhle rychlost a nenáročnost ale platíte vyšším úrokem než u hypotéky.</p>
              <h3>Pro koho se hodí</h3>
              <ul>
                <li><strong>Menší rekonstrukce zhruba do 500 tisíc korun</strong> – nová koupelna, kuchyně, výměna oken v bytě</li>
                <li><strong>Když potřebujete peníze rychle</strong> – vyřízení je otázka dní, ne týdnů</li>
                <li><strong>Když nechcete zatížit nemovitost zástavou</strong> – u bezúčelového úvěru neručíte bytem ani domem</li>
                <li><strong>Nájemníci a lidé bez vlastní nemovitosti</strong> – hypotéku na cizí byt nedostanete, spotřebitelský úvěr ano</li>
              </ul>
              <h3>Na co si dát pozor</h3>
              <p>Úroky spotřebitelských úvěrů bývají znatelně vyšší než u hypoték a splatnost je kratší, obvykle do sedmi až deseti let. To znamená vyšší měsíční splátku. Vždy porovnávejte podle ukazatele RPSN, který zahrnuje i poplatky, ne jen podle nabízené úrokové sazby. A nenechte se zlákat k půjčce vyšší, než skutečně potřebujete.</p>
              <div className="article-tip"><strong>⚠️ Pozor:</strong> U bezúčelového úvěru banku nezajímá, na co peníze použijete, ale právě proto je dražší. Existuje i účelový úvěr na bydlení, který je levnější výměnou za doložení, že peníze jdou na rekonstrukci. Pokud faktury doložit můžete, účelová varianta vyjde levněji.</div>
            </section>

            <section id="hypoteka">
              <h2>Hypotéka a její navýšení</h2>
              <p>U větších rekonstrukcí, řekněme od půl milionu nahoru, je hypotéka nebo účelový úvěr na bydlení zpravidla nejlevnější cesta. Úrok je výrazně nižší než u spotřebitelského úvěru a díky dlouhé splatnosti je měsíční splátka únosná. Cenou je náročnější vyřízení a zástava nemovitosti.</p>
              <h3>Nová hypotéka na rekonstrukci</h3>
              <p>Banka poskytne účelovou hypotéku na rekonstrukci proti zástavě nemovitosti. Peníze se obvykle nečerpají najednou, ale postupně proti fakturám nebo podle odhadu. Budete potřebovat doložit příjem, účel a nechat zpracovat odhad nemovitosti. Detailní postup, dokumenty i podmínky rozebírá samostatný článek <Link href="/blog/hypoteka-na-rekonstrukci" style={{ color: "#2a6496", textDecoration: "underline" }}>hypotéka na rekonstrukci</Link>.</p>
              <h3>Navýšení stávající hypotéky a refinancování</h3>
              <p>Pokud už na nemovitosti hypotéku máte, často je nejjednodušší ji navýšit o částku na rekonstrukci. Nabízí se dvě cesty:</p>
              <ul>
                <li><strong>Navýšení u stávající banky</strong> – banka za určitých podmínek přidá k hypotéce další úvěr; podmínkou je dostatečná hodnota nemovitosti a příjem na vyšší splátku</li>
                <li><strong>Refinancování s navýšením</strong> – na konci fixace převedete hypotéku k jiné bance a rovnou ji navýšíte; často tím získáte i lepší úrok na celý zůstatek</li>
              </ul>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Parametr</th><th>Spotřebitelský úvěr</th><th>Hypotéka / navýšení</th></tr></thead>
                  <tbody>
                    <tr><td>Úrok</td><td>Vyšší</td><td>Nižší</td></tr>
                    <tr><td>Zajištění</td><td>Bez zástavy</td><td>Zástava nemovitosti</td></tr>
                    <tr><td>Splatnost</td><td>Zpravidla do 10 let</td><td>Až desítky let</td></tr>
                    <tr><td>Rychlost vyřízení</td><td>Dny</td><td>Týdny</td></tr>
                    <tr><td>Vhodná částka</td><td>Do cca 500 tis.</td><td>Nad cca 500 tis.</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Delší splatnost hypotéky sníží měsíční splátku, ale celkově na úrocích zaplatíte víc. Pokud vám to rozpočet dovolí, volte kratší dobu splácení nebo splátku průběžně navyšujte mimořádnými splátkami.</div>
            </section>

            <section id="sporeni-dotace">
              <h2>Stavební spoření a dotace</h2>
              <h3>Stavební spoření a úvěr ze stavebka</h3>
              <p>Stavební spoření má smysl hlavně pro toho, kdo smlouvu už má. Naspořené peníze můžete použít přímo, případně sáhnout po úvěru ze stavebního spoření nebo překlenovacím úvěru účelově na bydlení. Výhodou řádného úvěru ze stavebka je pevná úroková sazba na celou dobu splácení. Pro nové střadatele je ale dnešní státní podpora nižší než dříve a naspoření trvá roky, takže jako rychlý zdroj na brzkou rekonstrukci se spíš nehodí.</p>
              <h3>Nová zelená úsporám a další dotace</h3>
              <p>Dotace nejsou půjčka – jde o nevratný příspěvek státu, o který si snížíte náklady. Nejznámější je program Nová zelená úsporám, který podporuje opatření vedoucí k úspoře energie:</p>
              <ul>
                <li><strong>Zateplení</strong> fasády, střechy, stropů a podlah</li>
                <li><strong>Výměna oken a vchodových dveří</strong> za úspornější</li>
                <li><strong>Výměna zdroje vytápění</strong> za tepelné čerpadlo nebo kotel na biomasu</li>
                <li><strong>Fotovoltaika</strong> a solární ohřev vody</li>
                <li><strong>Řízené větrání s rekuperací</strong> tepla</li>
              </ul>
              <p>Dotace se zpravidla proplácí zpětně po dokončení a doložení, takže náklady musíte nejdřív pokrýt z vlastního nebo z úvěru a příspěvek dostanete až potom. Běžnou rekonstrukci typu nová koupelna nebo kuchyně dotace nepokryjí, cílí čistě na snížení spotřeby energie.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Podmínky dotačních programů se v čase mění – výše příspěvku, uznatelná opatření i termíny. Než začnete rekonstrukci plánovat kolem dotace, ověřte si aktuální podmínky na oficiálních stránkách programu a raději si nechte pomoct energetickým specialistou.</div>
            </section>

            <section id="kombinace">
              <h2>Jak možnosti kombinovat</h2>
              <p>V praxi málokdo financuje rekonstrukci z jediného zdroje. Nejrozumnější bývá chytrá kombinace, která sníží celkové náklady i riziko.</p>
              <ul>
                <li><strong>Úspory na rozjezd, úvěr na zbytek</strong> – část zaplatíte z vlastního, snížíte úročenou částku a zachováte si rezervu</li>
                <li><strong>Levnější úvěr místo dražšího</strong> – u vyšších částek dejte přednost hypotéce nebo jejímu navýšení před spotřebitelským úvěrem</li>
                <li><strong>Dotace jako doplněk</strong> – energeticky úsporná opatření financujte úvěrem a náklad si následně snižte příspěvkem z Nové zelené úsporám</li>
                <li><strong>Rezerva stranou</strong> – ať už financujete jakkoli, nechte si hotovostní polštář na nečekané práce</li>
              </ul>
              <p>Rekonstrukce je i logistický a časový oříšek, nejen finanční. Jak ji zvládnout, když v bytě zároveň bydlíte, radí článek <Link href="/blog/jak-bydlet-behem-rekonstrukce" style={{ color: "#2a6496", textDecoration: "underline" }}>jak bydlet během rekonstrukce</Link>. Ať se rozhodnete pro jakoukoli kombinaci, klíčové je spočítat si měsíční zatížení dopředu, aby vás splátky nepřerostly.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Než podepíšete smlouvu, projděte si víc nabídek a nechte si udělat srovnání u nezávislého finančního poradce nebo přímo u několika bank. Rozdíl v úroku i pár desetin procenta znamená na dlouhé hypotéce desítky tisíc korun.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Je lepší na rekonstrukci spotřebitelský úvěr, nebo hypotéka?", a: "Záleží na částce a době splácení. U menších rekonstrukcí zhruba do 500 tisíc korun bývá výhodnější spotřebitelský úvěr – je rychlý, bez zajištění nemovitostí a bez odhadu. U větších částek nad zhruba 500 tisíc až milion korun se vyplatí hypotéka nebo účelový úvěr na bydlení, protože má výrazně nižší úrok, i když je administrativně náročnější a vyžaduje zástavu nemovitosti." },
                  { q: "Dá se navýšit stávající hypotéka na rekonstrukci?", a: "Ano. Pokud už na nemovitosti hypotéku máte, banka ji za určitých podmínek navýší o částku na rekonstrukci. Nejčastěji to jde při refinancování, tedy převodu hypotéky k jiné bance na konci fixace, nebo v rámci předschváleného navýšení u stávající banky. Podmínkou je dostatečná hodnota nemovitosti a dostatečný příjem na vyšší splátku." },
                  { q: "Na co lze čerpat dotaci Nová zelená úsporám?", a: "Nová zelená úsporám podporuje energeticky úsporná opatření – zateplení fasády, střechy a stropů, výměnu oken a dveří, výměnu zdroje vytápění za tepelné čerpadlo nebo kotel na biomasu, instalaci fotovoltaiky, solárního ohřevu vody a řízeného větrání s rekuperací. Nepokrývá běžnou rekonstrukci typu nová koupelna nebo kuchyně, cílí na snížení spotřeby energie." },
                  { q: "Kolik peněz na rekonstrukci bych měl mít našetřeno předem?", a: "Doporučuje se mít v hotovosti alespoň rezervu 15 až 20 procent nad rozpočet na nečekané práce, které se u rekonstrukcí objevují téměř vždy – skryté vady, přepětí rozpočtu, dražší materiál. I když většinu financujete úvěrem, vlastní rezerva vás ochrání před tím, abyste museli uprostřed stavby shánět další peníze." },
                  { q: "Vyplatí se na rekonstrukci ještě stavební spoření?", a: "Stavební spoření dává smysl, pokud smlouvu už máte a chcete využít úvěr ze stavebního spoření nebo překlenovací úvěr účelově na bydlení. Výhodou je účelovost a u řádného úvěru pevná úroková sazba. Pro nové střadatele je ale státní podpora dnes nižší než dříve a rozjezd trvá roky, takže jako rychlý zdroj na blízkou rekonstrukci se spíš nehodí." },
                ].map(({ q, a }) => (
                  <details key={q} className="faq-item">
                    <summary className="faq-q">{q}</summary>
                    <p className="faq-a">{a}</p>
                  </details>
                ))}
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/jak-financovat-rekonstrukci" title="Jak financovat rekonstrukci: úvěr, hypotéka, úspory" />

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
                <li><a href="#kolik">Kolik potřebujete</a></li>
                <li><a href="#uspory">Vlastní úspory</a></li>
                <li><a href="#uver">Spotřebitelský úvěr</a></li>
                <li><a href="#hypoteka">Hypotéka a navýšení</a></li>
                <li><a href="#sporeni-dotace">Spoření a dotace</a></li>
                <li><a href="#kombinace">Jak kombinovat</a></li>
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
