import type { Metadata } from "next";
import Link from "next/link";
import HnojivoCalculator from "@/app/components/HnojivoCalculator";
import AffiliateCTA from "@/app/components/AffiliateCTA";

export const metadata: Metadata = {
  title: "Kalkulačka hnojiva 2026 – kolik pytlíků potřebuji?",
  description: "Kolik kilogramů hnojiva na trávník nebo záhony? Zadej plochu a dávku – výpočet okamžitě. Trávník: 30–40 g/m².",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-hnojiva" },
  openGraph: { title: "Kalkulačka hnojiva 2026 – kolik pytlíků potřebuji?", description: "Kolik kilogramů hnojiva na trávník nebo záhony? Zadej plochu a dávku – výpočet okamžitě. Trávník: 30–40 g/m².", url: "https://www.domovniguru.cz/kalkulacky/kolik-hnojiva", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20hnojiva%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka hnojiva 2026" }] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Kolik gramů hnojiva na metr čtvereční trávníku?", "acceptedAnswer": { "@type": "Answer", "text": "Na jaře a při hlavním hnojení se dávkuje 30 až 40 g/m², v letním přihnojení 20 až 30 g/m². Záhony se zeleninou a letničkami potřebují 20 až 30 g/m², ovocné stromy 50 až 80 g/m² plochy pod korunou. Vždy je rozhodující dávka uvedená výrobcem na obalu — koncentrovaná granulovaná hnojiva se dávkují i po 15 g/m², zatímco organominerální směsi i po 70 g/m²." } },
      { "@type": "Question", "name": "Kolik kg hnojiva potřebuji na 100 m² trávníku?", "acceptedAnswer": { "@type": "Answer", "text": "Při dávce 30 g/m² je to 3 kg, při dávce 40 g/m² celé 4 kg. Výpočet je jednoduchý: plocha v m² krát dávka v g/m² děleno tisícem dá kilogramy. Protože hnojiva se prodávají v baleních po 2,5, 5, 10 nebo 20 kg, kupuje se nejbližší vyšší celé balení — na 100 m² tedy jeden pytel po 5 kg s rezervou na dohnojení okrajů." } },
      { "@type": "Question", "name": "Kdy hnojit trávník na jaře a kdy na podzim?", "acceptedAnswer": { "@type": "Answer", "text": "Jarní hnojení patří do období, kdy půda dosáhne přibližně 8 °C a tráva začne rašit, tedy typicky od poloviny dubna do začátku května. Podzimní hnojení se aplikuje od konce srpna do poloviny října. Jarní hnojivo má vysoký podíl dusíku pro růst, podzimní naopak nízký dusík a vysoký draslík, který zpevňuje stěny buněk a zvyšuje mrazuvzdornost. Dusíkaté hnojivo po polovině září trávník nutí do měkkého přírůstku, který zimu nepřežije." } },
      { "@type": "Question", "name": "Jak poznám přehnojený trávník a co s ním?", "acceptedAnswer": { "@type": "Answer", "text": "Přehnojení se projeví žlutohnědými spálenými pruhy kopírujícími dráhu rozmetadla, sytě tmavou až modrozelenou barvou s měkkým vodnatým listem a bílou solnou krustou na povrchu půdy. První pomocí je vydatná zálivka 20 až 30 litrů na m² ve dvou až třech dnech, která soli vyplaví pod kořenovou zónu. Spálená místa po několika týdnech dosévejte; do konce sezóny už na ně žádné hnojivo nedávejte." } },
      { "@type": "Question", "name": "Můžu hnojit trávník a záhony stejným hnojivem?", "acceptedAnswer": { "@type": "Answer", "text": "Univerzální NPK hnojivo zvládne obojí, ale výsledek nebude optimální. Trávníková hnojiva mají poměr živin posunutý výrazně k dusíku, protože se z trávníku odvážejí posekané listy. Zeleninové a záhonové směsi mají vyšší podíl fosforu a draslíku pro nasazení plodů a vyzrání dřeva. Pokud chcete jedno hnojivo, zvolte vyvážené NPK přibližně 10-8-12 a dávku na trávníku zvedněte k horní hranici, na záhonech ponechte u dolní." } }
    ]
  }, {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
      { "@type": "ListItem", "position": 2, "name": "Kalkulačky", "item": "https://www.domovniguru.cz/kalkulacky" },
      { "@type": "ListItem", "position": 3, "name": "Kolik hnojiva", "item": "https://www.domovniguru.cz/kalkulacky/kolik-hnojiva" }
    ]
  }]
};

export default function KolikHnojivaPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Kolik hnojiva</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik hnojiva potřebuju?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej plochu a dávku hnojiva — kalkulačka ti okamžitě spočítá přesné množství v kilogramech a počet pytlíků k nákupu.</p>

        <HnojivoCalculator />
        <AffiliateCTA merchant="hnojik" text="Nakoupit hnojivo" />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Jak správně hnojit – typy hnojiv a termíny aplikace</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Hnojení trávníku se liší od hnojení záhonů jak dávkou, tak výběrem hnojiva. Trávník potřebuje hlavně dusík (N), který stimuluje tvorbu zeleného porostu — proto jarní hnojení dusíkatými hnojivy (NPK s vysokým N) dává trávníku startovací impuls po zimě. Na jaře (duben–květen) aplikujte 30–40 g/m², v létě 20–30 g/m² a na podzim přejděte na hnojivo s nižším N a vyšším K (draslíkem), který posiluje kořeny a odolnost vůči mrazu. Záhony s letničkami a zeleninou hnojte hloubkově již při přípravě půdy na jaře — zapracujte 20–30 g/m² granulovaného hnojiva do horních 10 cm půdy.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Organická hnojiva (kompost, hnůj, rybí moučka) jsou přirozenějším a šetrnějším způsobem hnojení — živiny uvolňují pomalu a zároveň zlepšují strukturu půdy a podporují půdní mikroorganismy. Nevýhodou je nepřesné složení a pomalejší nástup účinku. Minerální (průmyslová) hnojiva jsou přesně dávkovaná a rychle dostupná — vhodná pro akutní nedostatky živin. V praxi funguje nejlépe kombinace: základní hnojení organickým hnojivem na jaře a přihnojování minerálním hnojivem v sezóně.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Přehnojení je stejně škodlivé jako nedostatečné hnojení. Příliš vysoká koncentrace živin způsobuje spálení kořenů (&quot;hnojivový burn&quot;), oslabuje rostliny a kontaminuje spodní vody. Vždy se řiďte doporučením na obalu hnojiva a neplánujte hnojení těsně před deštěm — silné srážky hnojivo spláchnou do odtoku, aniž by ho rostliny stačily vstřebat. Ideální je hnojit na vlhkou půdu za bezdeštného počasí a pak lehce zavlažit.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Jak se výpočet dělá</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Spotřeba hnojiva se počítá přímo z plochy a dávky, protože dávka je na obalu vždy uvedena v gramech na metr čtvereční. Vzorec má jediný krok: plocha v m² vynásobená dávkou v g/m² dává gramy, a vydělením tisícem vznikne hmotnost v kilogramech. Druhý výpočet převádí kilogramy na počet balení — potřebné kilogramy se vydělí hmotností pytlíku a výsledek se zaokrouhlí nahoru na celé balení, protože hnojivo nelze koupit po půlkilech.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Konkrétní příklad: trávník o ploše 250 m², jarní dávka 35 g/m². Výpočet dá 250 × 35 = 8 750 g, tedy 8,75 kg hnojiva. Při balení po 5 kg to znamená dva pytle, z nichž ve druhém zbude asi 1,25 kg na pozdější dohnojení okrajů a míst po dosevu. U záhonů se čísla hýbou jinak: 18 m² zeleninového záhonu při dávce 25 g/m² vyjde na 450 g, tedy necelý půlkilový pytlík — a právě u takto malých ploch se nejčastěji sype „od oka" a končí to přehnojením.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Dvě věci výpočet záměrně neřeší. První je obsah živin: 5 kg hnojiva s poměrem NPK 15-5-20 dodá jiné množství dusíku než 5 kg směsi 7-7-7, takže dávka v gramech má smysl jen ve spojení s konkrétním produktem. Druhou je rozdíl mezi plochou pozemku a skutečně hnojenou plochou — od výměry trávníku odečtěte cestičky a terasu, u ovocných stromů počítejte jen kruh pod korunou, tedy asi 7 m² u mladého stromu a 20 až 30 m² u vzrostlé jabloně.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Nejčastější chyby</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Hnojení je krátká práce, ale chyba se projeví až za několik týdnů, kdy se už nedá vzít zpátky. Opakují se tyto:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Dávka „od oka".</strong> Rozsyp rukou dává na stejném trávníku místně i trojnásobek doporučené dávky. Spočítanou hmotnost rozdělte na dvě poloviny a plochu projděte dvakrát křížem — jednou podélně, jednou napříč.</li>
            <li><strong>Podzimní hnojení dusíkem.</strong> Dusík po polovině září vyvolá měkký přírůstek, který zmrzne a na jaře zůstane po něm hnědá plíseň. Od konce srpna se používá podzimní hnojivo s nízkým N a vysokým draslíkem.</li>
            <li><strong>Přehnojení.</strong> Dvojnásobek dávky neznamená dvojnásobný efekt, ale osmotický šok a spálené kořínky. Granule odebírají vodu z buněk a list zežloutne do dvou dnů. U hnojiva platí, že méně je bezpečnější než více.</li>
            <li><strong>Hnojení na suchou půdu a bez zálivky.</strong> Granule bez vlhkosti nezačnou pracovat a na horkém slunci se spečou k listům. Hnojte na vlhkou půdu a po aplikaci zalijte 5 až 10 litry na m².</li>
            <li><strong>Hnojení těsně před vydatným deštěm.</strong> Prudká srážka spláchne granule do kanalizace. Zkontrolujte předpověď a plánujte hnojení na dva až tři dny bez bouřky.</li>
            <li><strong>Hnojení v plném letním žáru.</strong> Nad 28 °C a na vyschlém trávníku je riziková i správná dávka. Odložte aplikaci, nebo ji snižte o třetinu.</li>
            <li><strong>Jedno hnojivo na celou zahradu.</strong> Rododendrony, azalky a borůvky potřebují kyselé hnojivo, trávník dusíkaté, rajčata draselné. Univerzální NPK je kompromis, ne optimum.</li>
            <li><strong>Granule nechané na dlažbě.</strong> Zbytky na chodníku zanechají rezavé fleky a při dešti odtečou do kanalizace. Po aplikaci je zameťte do trávníku.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Co ještě budete potřebovat</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Samotné hnojivo je u větších ploch nejmenší položkou. Rozhoduje to, čím ho rozprostřete a jak si ověříte, co půda vůbec potřebuje:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Ruční rozmetadlo</strong> (400–900 Kč) nebo pojezdové na větší trávník od 150 m² (1 500–4 000 Kč). Rovnoměrnost rozhodne o tom, zda bude trávník jednolitě zelený, nebo pruhovaný.</li>
            <li><strong>Kuchyňská nebo zahradní váha</strong> (200–500 Kč) na odvážení spočítané dávky. Bez ní je výpočet jen teorie.</li>
            <li><strong>Půdní tester pH</strong> (150–400 Kč) nebo laboratorní rozbor půdy (700–1 500 Kč). Při pH pod 5,5 jsou živiny pro trávník nedostupné a hnojivo se vyplácí až po vápnění.</li>
            <li><strong>Trávníkové hnojivo</strong> jarní i podzimní: 5kg balení za 250–500 Kč, 20kg pytel na větší pozemek 700–1 400 Kč.</li>
            <li><strong>Kompost nebo zrající hnůj</strong> na základní hnojení záhonů, 40litrový pytel 100–200 Kč, volně ložený kompost od obce zpravidla 300–600 Kč za m³.</li>
            <li><strong>Konvice s postřikovačem nebo hadice s růžicí</strong> (300–900 Kč) na zavlažení po aplikaci; bez zálivky granule nezačnou uvolňovat živiny.</li>
            <li><strong>Vápnec nebo dolomitický vápenec</strong> (25kg pytel 150–300 Kč), pokud rozbor ukáže kyselou půdu. Vápní se vždy v jiném termínu než hnojí, s odstupem alespoň tří týdnů.</li>
            <li><strong>Rukavice a respirátor</strong> (50–300 Kč). Granulovaná hnojiva jsou prašná a dráždí sliznice i kůži.</li>
            <li><strong>Vzduchotěsná nádoba na zbytky</strong> (150–400 Kč). Hnojivo je silně hygroskopické; v otevřeném pytli do příští sezóny slepne v nerozdrobitelný blok.</li>
          </ul>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Časté otázky</h2>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik gramů hnojiva na metr čtvereční trávníku?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Na jaře a při hlavním hnojení se dávkuje 30 až 40 g/m², v letním přihnojení 20 až 30 g/m². Záhony se zeleninou a letničkami potřebují 20 až 30 g/m², ovocné stromy 50 až 80 g/m² plochy pod korunou. Vždy je rozhodující dávka uvedená výrobcem na obalu — koncentrovaná granulovaná hnojiva se dávkují i po 15 g/m², zatímco organominerální směsi i po 70 g/m².
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik kg hnojiva potřebuji na 100 m² trávníku?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Při dávce 30 g/m² je to 3 kg, při dávce 40 g/m² celé 4 kg. Výpočet je jednoduchý: plocha v m² krát dávka v g/m² děleno tisícem dá kilogramy. Protože hnojiva se prodávají v baleních po 2,5, 5, 10 nebo 20 kg, kupuje se nejbližší vyšší celé balení — na 100 m² tedy jeden pytel po 5 kg s rezervou na dohnojení okrajů.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kdy hnojit trávník na jaře a kdy na podzim?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Jarní hnojení patří do období, kdy půda dosáhne přibližně 8 °C a tráva začne rašit, tedy typicky od poloviny dubna do začátku května. Podzimní hnojení se aplikuje od konce srpna do poloviny října. Jarní hnojivo má vysoký podíl dusíku pro růst, podzimní naopak nízký dusík a vysoký draslík, který zpevňuje stěny buněk a zvyšuje mrazuvzdornost. Dusíkaté hnojivo po polovině září trávník nutí do měkkého přírůstku, který zimu nepřežije.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jak poznám přehnojený trávník a co s ním?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Přehnojení se projeví žlutohnědými spálenými pruhy kopírujícími dráhu rozmetadla, sytě tmavou až modrozelenou barvou s měkkým vodnatým listem a bílou solnou krustou na povrchu půdy. První pomocí je vydatná zálivka 20 až 30 litrů na m² ve dvou až třech dnech, která soli vyplaví pod kořenovou zónu. Spálená místa po několika týdnech dosévejte; do konce sezóny už na ně žádné hnojivo nedávejte.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Můžu hnojit trávník a záhony stejným hnojivem?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Univerzální NPK hnojivo zvládne obojí, ale výsledek nebude optimální. Trávníková hnojiva mají poměr živin posunutý výrazně k dusíku, protože se z trávníku odvážejí posekané listy. Zeleninové a záhonové směsi mají vyšší podíl fosforu a draslíku pro nasazení plodů a vyzrání dřeva. Pokud chcete jedno hnojivo, zvolte vyvážené NPK přibližně 10-8-12 a dávku na trávníku zvedněte k horní hranici, na záhonech ponechte u dolní.
            </p>
          </details>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak správně hnojit zahradu", href: "/blog/jak-hnojit-zahradu", icon: "🌿" },
              { title: "Jak zasít trávník od nuly – krok za krokem", href: "/blog/zasit-travnik-od-nuly", icon: "🌱" },
              { title: "Kalkulačka osiva na trávník", href: "/kalkulacky/kolik-osiva", icon: "🌱" },
            ].map(r => (
              <Link key={r.href} href={r.href} style={{ display:"block", background:"#f8f4f0", border:"1px solid #e8e0d8", borderRadius:"10px", padding:"14px 16px", textDecoration:"none" }}>
                <div style={{ fontSize:"18px", marginBottom:"6px" }}>{r.icon}</div>
                <div style={{ fontSize:"14px", fontWeight:500, color:"#2a2a28", lineHeight:1.4 }}>{r.title}</div>
                <div style={{ fontSize:"12px", color:"#8a8a80", marginTop:"6px" }}>Číst →</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
