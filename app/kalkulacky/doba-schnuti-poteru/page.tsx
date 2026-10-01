import type { Metadata } from "next";
import Link from "next/link";
import SchnutiPoteruCalculator from "@/app/components/SchnutiPoteruCalculator";
import AffiliateCTA from "@/app/components/AffiliateCTA";

export const metadata: Metadata = {
  title: "Kalkulačka doby schnutí potěru 2026 – kdy pokládat podlahu?",
  description: "Spočítej orientační dobu schnutí cementového i anhydritového potěru podle tloušťky a podlahového topení. Zjisti, kdy je potěr připraven na pokládku podlahy.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/doba-schnuti-poteru" },
  openGraph: { title: "Kalkulačka doby schnutí potěru 2026", description: "Kdy pokládat podlahu na potěr? Orientační doba schnutí okamžitě.", url: "https://www.domovniguru.cz/kalkulacky/doba-schnuti-poteru", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20doby%20schnut%C3%AD%20pot%C4%9Bru%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka doby schnutí potěru 2026" }] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Jak dlouho schne cementový potěr o tloušťce 50 mm?", "acceptedAnswer": { "@type": "Answer", "text": "Orientačně přibližně 42 dní, tedy šest týdnů. Prvních 40 mm se počítá jako jeden týden na centimetr, což dává 28 dní, a každý další centimetr nad 40 mm trvá zhruba dvakrát déle, tedy dalších 14 dní. S funkčním vytápěním a provedenou topnou zkouškou lze dobu zkrátit asi o čtvrtinu, na cca 32 dní." } },
      { "@type": "Question", "name": "Kdy je potěr pochozí?", "acceptedAnswer": { "@type": "Answer", "text": "Opatrně pochozí je cementový i anhydritový potěr po 24 až 48 hodinách od pokládky. Pochozí ale neznamená suchý ani zatížitelný: lehká zátěž a stavba příček přichází nejdříve po 7 dnech a o pokládce podlahy rozhoduje až zbytková vlhkost změřená metodou CM, nikoli to, že po potěru lze chodit." } },
      { "@type": "Question", "name": "Jak urychlit schnutí potěru?", "acceptedAnswer": { "@type": "Answer", "text": "Po prvních sedmi dnech ošetřování pomáhá temperování místnosti na 20 až 25 °C, odvlhčovač vzduchu a pravidelné krátké intenzivní větrání. U podlahového vytápění se schnutí urychluje topnou zkouškou s postupným zvyšováním teploty podle protokolu. Nikdy nepoužívejte horkovzdušné pistole, přímotopy mířené na plochu ani průvan v prvních dnech — potěr popraská a sedne." } },
      { "@type": "Question", "name": "Jaká zbytková vlhkost potěru je povolena před pokládkou?", "acceptedAnswer": { "@type": "Answer", "text": "U cementového potěru je limit 2,0 % CM, s podlahovým vytápěním 1,8 % CM. U anhydritového potěru je limit výrazně přísnější: 0,5 % CM, s podlahovým vytápěním 0,3 % CM. Hodnoty se měří karbidovou metodou z odebraného vzorku z celé hloubky vrstvy, ne povrchovým vlhkoměrem." } },
      { "@type": "Question", "name": "V čem se liší schnutí anhydritu a cementového potěru?", "acceptedAnswer": { "@type": "Answer", "text": "Anhydrit v počáteční fázi schne o něco rychleji a lépe se roztéká do roviny, ale je citlivý na vlhkost a vyžaduje mnohem nižší zbytkovou vlhkost před pokládkou. Jeho povrch je navíc nutné před lepením přebrousit a odsát, protože na něm vzniká slabá šlemová vrstva. Cementový potěr snáší vlhké prostředí, zato schne pomaleji a víc se při vysychání kroutí." } }
    ]
  }, {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
      { "@type": "ListItem", "position": 2, "name": "Kalkulačky", "item": "https://www.domovniguru.cz/kalkulacky" },
      { "@type": "ListItem", "position": 3, "name": "Doba schnutí potěru", "item": "https://www.domovniguru.cz/kalkulacky/doba-schnuti-poteru" }
    ]
  }]
};

export default function DobaSchnutiPoteruPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Doba schnutí potěru</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Jak dlouho schne potěr?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej tloušťku a typ potěru — kalkulačka spočítá orientační dobu schnutí a připomene, kdy je potěr skutečně připraven na pokládku podlahy.</p>

        <SchnutiPoteruCalculator />
        <AffiliateCTA merchant="podlahy" text="Vybrat podlahové krytiny" />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Jak dlouho nechat potěr schnout před pokládkou podlahy</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Doba schnutí potěru je jednou z nejčastěji podceňovaných fází při rekonstrukci. Základní pravidlo pro cementový potěr říká, že do tloušťky 40 mm potřebuje přibližně jeden týden na každý centimetr. Nad 40 mm už schnutí neprobíhá lineárně — každý další centimetr trvá zhruba dvakrát déle, protože vlhkost se z hlubších vrstev odpařuje mnohem pomaleji. Anhydritový (síranovápenatý) potěr schne v počáteční fázi o něco rychleji, ale i u něj platí, že silnější vrstvy vyžadují trpělivost.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Rychlost schnutí ovlivňuje řada faktorů: teplota a vlhkost v místnosti, větrání, typ podlahové krytiny i to, zda je do potěru zabudováno podlahové topení. Funkčním vytápěním (tzv. topná zkouška podle protokolu) lze schnutí urychlit, ale teplotu je nutné zvyšovat postupně — prudké vytopení může způsobit praskliny a trvalé deformace potěru. Kalkulačka výše proto u zapnutého topení uvádí zkrácenou orientační dobu, kterou je ale vždy nutné ověřit měřením.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300 }}>
            Nejdůležitější zásada zní: nikdy nepokládejte podlahu jen podle kalendáře nebo podle pocitu, že už je potěr suchý na dotek. Rozhodující je zbytková vlhkost změřená metodou CM (karbidová metoda). U cementového potěru se pro pokládku obvykle vyžaduje hodnota do 2,0 % CM (do 1,8 % CM u podlahového topení), u anhydritu je limit výrazně přísnější — do 0,5 % CM, respektive do 0,3 % CM s topením. Vinylová a dřevěná podlaha položená na příliš vlhký potěr se může kroutit, boulit nebo odlepovat, což znamená nákladnou reklamaci.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Jak se doba schnutí počítá</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Kalkulačka vychází ze stavbařského pravidla, které zohledňuje, že vysychání neprobíhá rovnoměrně po celé tloušťce. Pro cementový potěr platí: do 40 mm se počítá jeden týden na každý centimetr, tedy 7 dní na 10 mm. Nad 40 mm se tempo zpomaluje na dvojnásobek, protože voda z hlubších vrstev musí nejprve difundovat k povrchu — každý další centimetr proto znamená asi 14 dní. Anhydritový potěr startuje o něco rychleji, kalkulačka pro něj používá 6,5 dne na centimetr do 40 mm a 13 dní na každý další.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Spočítejme běžný případ: cementový potěr 50 mm. Prvních 40 mm dává 4 × 7 = 28 dní, zbývající centimetr dalších 14 dní, celkem 42 dní neboli šest týdnů. Při 60 mm už jde o 56 dní a při 70 mm o 70 dní — z jedné stavební etapy se tak snadno stane dvouměsíční prodleva. Je-li v potěru podlahové vytápění a proběhne řádná topná zkouška, kalkulačka zkrátí dobu o 25 %, u zmíněných 50 mm tedy na přibližně 32 dní.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Pravidlo platí pro běžné podmínky, tedy teplotu kolem 20 °C a relativní vlhkost vzduchu do 65 %. Studená, nevětraná novostavba s vlhkými omítkami může schnutí prodloužit o polovinu, naopak vytápěná a odvlhčovaná místnost jej zkrátí. Právě proto je výsledek kalkulačky plánovacím vodítkem pro harmonogram rekonstrukce, ne technickým povolením k pokládce. To dává jedině měření CM přístrojem, u kterého se vzorek odebírá z celé hloubky vrstvy, typicky ve třech místech plochy.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Nejčastější chyby</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            U potěru se chyby projeví až za několik měsíců, kdy se podlaha nad ním začne kroutit nebo odlepovat. Nejdražší z nich jsou tyto:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Vyschnutí příliš brzy.</strong> Prvních 7 dní potěr nevysychá, ale tvrdne, a vodu na hydrataci potřebuje. Průvan, přímotop nebo horkovzdušná pistole v této fázi způsobí síť trhlin a sprašný povrch. Okna mají zůstat zavřená a plocha zakrytá fólií po dobu ošetřování.</li>
            <li><strong>Naopak zavřený prostor po celou dobu.</strong> Po ošetřovací fázi musí mít vlhkost kam odejít. Zavřená místnost bez větrání udržuje vzduch nasycený a schnutí se zastaví téměř úplně.</li>
            <li><strong>Pokládka podle kalendáře.</strong> Nikdy ne podle počtu dní ani podle dojmu, že je povrch suchý na dotek. Povrch vysychá první, jádro nejpozději.</li>
            <li><strong>Měření povrchovým vlhkoměrem.</strong> Odporový či kapacitní vlhkoměr měří jen několik milimetrů pod povrchem a u potěru nic nevypovídá. Platný je výsledek karbidové metody CM.</li>
            <li><strong>Topná zkouška bez protokolu.</strong> Teplota se zvyšuje postupně po dnech a stejně postupně snižuje. Prudké vytopení potěr zkroutí a popraská a reklamace podlahy pak padá na pokládku, ne na potěr.</li>
            <li><strong>Zapomenutá difuzní uzávěra krytiny.</strong> Vinyl, PVC a lepená dlažba potěr prakticky uzavřou. Vlhkost, která v něm zůstane, už nemá kudy odejít a projeví se bobláním nebo plísní.</li>
            <li><strong>Vynechané dilatace.</strong> Okrajové dilatační pásy u stěn a dilatace u prostupů, prahů a ploch nad 40 m² nejsou volitelné — bez nich potěr praská i při dokonalém schnutí.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Co ještě budete potřebovat</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Dobu schnutí nelze obejít, ale lze ji zkrátit a hlavně průběžně kontrolovat. K tomu se vyplatí mít po ruce:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Měření CM</strong> — vlastní karbidová souprava se nevyplatí, měření si objednejte u podlahářské firmy nebo stavebního technika a nechte si vystavit protokol s datem a hodnotami.</li>
            <li><strong>Odvlhčovač vzduchu</strong> s dostatečným výkonem na objem místnosti a prostředek k temperování na 20 až 25 °C.</li>
            <li><strong>Teploměr s vlhkoměrem</strong> na sledování podmínek v místnosti; bez čísel nelze poznat, zda schnutí vůbec pokračuje.</li>
            <li><strong>Protokol topné zkoušky</strong> u podlahového vytápění — tabulku teplot po dnech dodává zpravidla projektant nebo dodavatel systému.</li>
            <li><strong>Dvoumetrová lať nebo nivelační laser</strong> na kontrolu rovnosti; tolerance pro pokládku je zpravidla 2 mm na 2 m.</li>
            <li><strong>Penetrace a samonivelační stěrka</strong> na dorovnání, u anhydritu navíc bruska nebo mřížkové hladítko na odstranění šlemu a vysavač.</li>
            <li><strong>Parozábrana nebo difuzní fólie</strong> podle doporučení výrobce krytiny a okrajové dilatační pásy pro plovoucí podlahu.</li>
            <li><strong>Rezerva v harmonogramu.</strong> K vypočtené době přidejte 10 až 14 dní; termín pokládky se u potěru posouvá častěji než u jakékoli jiné fáze rekonstrukce.</li>
          </ul>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Časté otázky</h2>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jak dlouho schne cementový potěr o tloušťce 50 mm?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Orientačně přibližně 42 dní, tedy šest týdnů. Prvních 40 mm se počítá jako jeden týden na centimetr, což dává 28 dní, a každý další centimetr nad 40 mm trvá zhruba dvakrát déle, tedy dalších 14 dní. S funkčním vytápěním a provedenou topnou zkouškou lze dobu zkrátit asi o čtvrtinu, na cca 32 dní.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kdy je potěr pochozí?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Opatrně pochozí je cementový i anhydritový potěr po 24 až 48 hodinách od pokládky. Pochozí ale neznamená suchý ani zatížitelný: lehká zátěž a stavba příček přichází nejdříve po 7 dnech a o pokládce podlahy rozhoduje až zbytková vlhkost změřená metodou CM, nikoli to, že po potěru lze chodit.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jak urychlit schnutí potěru?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Po prvních sedmi dnech ošetřování pomáhá temperování místnosti na 20 až 25 °C, odvlhčovač vzduchu a pravidelné krátké intenzivní větrání. U podlahového vytápění se schnutí urychluje topnou zkouškou s postupným zvyšováním teploty podle protokolu. Nikdy nepoužívejte horkovzdušné pistole, přímotopy mířené na plochu ani průvan v prvních dnech — potěr popraská a sedne.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jaká zbytková vlhkost potěru je povolena před pokládkou?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              U cementového potěru je limit 2,0 % CM, s podlahovým vytápěním 1,8 % CM. U anhydritového potěru je limit výrazně přísnější: 0,5 % CM, s podlahovým vytápěním 0,3 % CM. Hodnoty se měří karbidovou metodou z odebraného vzorku z celé hloubky vrstvy, ne povrchovým vlhkoměrem.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>V čem se liší schnutí anhydritu a cementového potěru?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Anhydrit v počáteční fázi schne o něco rychleji a lépe se roztéká do roviny, ale je citlivý na vlhkost a vyžaduje mnohem nižší zbytkovou vlhkost před pokládkou. Jeho povrch je navíc nutné před lepením přebrousit a odsát, protože na něm vzniká slabá šlemová vrstva. Cementový potěr snáší vlhké prostředí, zato schne pomaleji a víc se při vysychání kroutí.
            </p>
          </details>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Betonový potěr a doba schnutí", href: "/blog/betonovy-poter-doba-schnuti", icon: "🧱" },
              { title: "Kladení vinylové podlahy", href: "/blog/kladeni-vinyl-podlahy", icon: "🪵" },
              { title: "Kalkulačka podlahového topení", href: "/kalkulacky/podlahove-topeni", icon: "♨️" },
            ].map(r => (
              <Link key={r.href} href={r.href} style={{ display: "block", background: "#f8f4f0", border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 16px", textDecoration: "none" }}>
                <div style={{ fontSize: "18px", marginBottom: "6px" }}>{r.icon}</div>
                <div style={{ fontSize: "14px", fontWeight: 500, color: "#2a2a28", lineHeight: 1.4 }}>{r.title}</div>
                <div style={{ fontSize: "12px", color: "#8a8a80", marginTop: "6px" }}>Číst →</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
