import type { Metadata } from "next";
import ShareButtons from "@/app/components/ShareButtons";
import Link from "next/link";
import StrechaCalculator from "@/app/components/StrechaCalculator";
import AffiliateCTA from "@/app/components/AffiliateCTA";

export const metadata: Metadata = {
  title: "Kalkulačka střešních tašek 2026 – kolik tašek a palet potřebuju?",
  description: "Spočítej přesný počet střešních tašek na pokrytí střechy. Betonová, pálená, šindele i vláknocementová krytina. Výsledek včetně počtu palet — zdarma.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-stresnych-tasek" },
  openGraph: {
    title: "Kalkulačka střešních tašek 2026 – kolik tašek a palet potřebuju?",
    description: "Kolik střešních tašek potřebuju? Spočítej přesně pro sedlovou, pultovou nebo valbovou střechu.",
    url: "https://www.domovniguru.cz/kalkulacky/kolik-stresnych-tasek",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "website",
    images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20st%C5%99e%C5%A1n%C3%ADch%20ta%C5%A1ek%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka střešních tašek 2026" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Jak zjistím délku krokve, když se nemůžu dostat na střechu?", "acceptedAnswer": { "@type": "Answer", "text": "Spočítáte ji z půdorysu Pythagorovou větou. U sedlové střechy vezměte polovinu šířky domu a výšku hřebene nad úrovní pozednice: při šířce domu 8 metrů a výšce hřebene 2,3 metru je krokev odmocnina ze součtu 4² a 2,3², tedy 4,61 metru. K výsledku přidejte přesah střechy u okapu, obvykle 0,4 až 0,6 metru." } },
      { "@type": "Question", "name": "Proč má valbová střecha koeficient 2,2 a ne 2?", "acceptedAnswer": { "@type": "Answer", "text": "U valbové střechy jsou zkosené i čelní strany, takže hřeben je kratší než dům, ale plocha krytiny je ve skutečnosti větší než u dvou pravoúhlých polí. Koeficient 2,2 tento rozdíl zprůměruje, takže zadáváte délku vlastního hřebene a kalkulačka plochu valbových trojúhelníků dopočítá. U pultové střechy je koeficient 1, u sedlové 2." } },
      { "@type": "Question", "name": "Kolik tašek se vejde na jednu paletu?", "acceptedAnswer": { "@type": "Answer", "text": "Kalkulačka počítá s 200 kusy u betonové i pálené tašky, se 100 kusy u šindelů a se 40 kusy u vláknocementových desek. Počet palet se zaokrouhluje nahoru, takže u menších střech skoro vždy zbyde část palety navíc. Paleta tašek váží stovky kilogramů, u betonových po 200 kusech běžně více než půl tuny, s čímž je nutné počítat při složení i při dopravě na lešení." } },
      { "@type": "Question", "name": "Jsou v počtu tašek zahrnuté i hřebenáče a okrajové tašky?", "acceptedAnswer": { "@type": "Answer", "text": "Nejsou. Kalkulačka počítá pouze plošnou krytinu. Hřebenáče se objednávají podle délky hřebene a nároží, obvykle 2,5 kusu na běžný metr, okrajové tašky podle délky štítů a odvětrávací i prostupové tašky podle počtu komínů, antén a odvětrání kanalizace. Tyto doplňky tvoří u běžné sedlové střechy 5 až 10 % ceny krytiny." } },
      { "@type": "Question", "name": "Stačí u střešní krytiny pětiprocentní rezerva?", "acceptedAnswer": { "@type": "Answer", "text": "U jednoduché sedlové nebo pultové střechy bez vikýřů ano, protože se řeže jen u štítů a u hřebene. U členité střechy s úžlabími, vikýři a nárožími se řezaných tašek vyskytuje mnohem víc a je lepší počítat s 10 až 12 %. Navíc se vyplatí dokoupit jeden balík tašek do zásoby — po několika letech už nemusí být stejný odstín dostupný." } }
    ]
  }, {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
      { "@type": "ListItem", "position": 2, "name": "Kalkulačky", "item": "https://www.domovniguru.cz/kalkulacky" },
      { "@type": "ListItem", "position": 3, "name": "Kolik střešních tašek", "item": "https://www.domovniguru.cz/kalkulacky/kolik-stresnych-tasek" }
    ]
  }]
};

export default function KolikStrechTasekPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span>
          <Link href="/kalkulacky">Kalkulačky</Link><span>/</span>
          <span>Kolik střešních tašek</span>
        </nav>

        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>
          Kolik střešních tašek potřebuju?
        </h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>
          Zadej délku hřebene, délku krokve a zvol typ střechy a krytiny — kalkulačka ti okamžitě spočítá plochu střechy, počet tašek i palet včetně 5% rezervy.
        </p>

        <StrechaCalculator />
        <AffiliateCTA merchant="naradi" text="Nakoupit střešní materiál" />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>
            Jak správně změřit střechu a vybrat typ krytiny
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Klíčovým rozměrem pro výpočet je délka krokve — jde o šikmou vzdálenost od hřebene po okapnici, nikoliv o výšku štítu. Tuto délku změříš nejpřesněji přímo na střeše pomocí pásma vedeného podél krokve, nebo ji vypočítáš z půdorysné hloubky a výšky hřebene pomocí Pythagorovy věty. Délka hřebene odpovídá délce domu u sedlové střechy. Pro valbovou střechu, kde jsou zkoseny i čelní svahy, kalkulačka používá koeficient 2,2, který zohledňuje přidanou plochu valbových trojúhelníků.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Výběr krytiny závisí na sklonu střechy, zatížení krovu a architektonickém stylu domu. Betonové a pálené tašky jsou nejrozšířenější — jsou odolné, dlouhověké (50+ let) a dobře snáší česká klimatická pásma. Pálená keramická taška je o něco lehčí než betonová a přirozeně porézní, což jí dává příjemnou matnou patinu. Dřevěné šindele jsou vhodné pro horské chaty a historické stavby, ale vyžadují pravidelnější údržbu a impregnaci. Vláknocementové desky (např. Cembrit nebo Equitone) jsou moderní volbou pro ploché nebo mírně skloněné střechy a fasády — mají nízkou hmotnost a výbornou odolnost proti vlhkosti.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Přeprava střešní krytiny je logisticky náročná — paleta betonových tašek (200 ks) váží přibližně 500–700 kg, pálené tašky bývají lehčí. Pro přepravu na střechu se používá střešní výtah nebo taška-taška podávání. Při objednávce materiálu vždy přidej 5 % rezervu na řezy u okapů a štítů, případná poškození při dopravě a drobné opravy. Kalkulačka tuto rezervu již zahrnuje. Nezapomeň na doplňkový materiál — hřebenáče, větrací tašky, prostupové tašky pro komín a anténní průchody a nopové fólie jako pojistná hydroizolace pod taškami.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Jak se výpočet dělá</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Výpočet začíná u plochy střechy, a to je nejčastější místo, kde se lidé seknou. Kalkulačka nepracuje s půdorysem domu, ale s délkou hřebene a šikmou délkou krokve. Tyto dva rozměry se vynásobí a výsledek se ještě vynásobí koeficientem podle tvaru střechy: pultová střecha s jedním svahem má koeficient 1, sedlová se dvěma svahy koeficient 2 a valbová koeficient 2,2, aby se zohlednila plocha zkosených čelních stran. Sklon je přitom v délce krokve už obsažený, takže se nikde nezadává zvlášť.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Plocha se potom vynásobí spotřebou tašek na metr čtvereční podle zvolené krytiny — betonová taška 10 ks/m², pálená 12 ks/m², dřevěné šindele 7 ks/m² a vláknocementové desky 5 ks/m² — a nakonec koeficientem 1,05, tedy pětiprocentní rezervou. Výsledek se zaokrouhlí nahoru na celý kus a vydělí počtem kusů na paletě, který je u betonové i pálené tašky 200, u šindelů 100 a u vláknocementu 40.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Příklad pro běžný rodinný dům: hřeben dlouhý 8 metrů, krokev 5 metrů, sedlová střecha. Plocha vyjde 8 × 5 × 2 = 80 m². S betonovou taškou to je 80 × 10 = 800 kusů, po přidání rezervy 840 kusů, tedy 5 palet. Stejná střecha pokrytá pálenou taškou znamená 80 × 12 = 960 kusů a se rezervou 1 008 kusů, tedy 6 palet. Když je ale střecha valbová, plocha naroste na 88 m² a u pálené tašky už jste na 1 109 kusech — rozdíl jedné palety jen kvůli tvaru střechy.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Nejčastější chyby</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            U střechy se chyba v množství řeší těžko — doprava palet je drahá a dodatečná objednávka pár desítek tašek může znamenat jinou výrobní šarži a tím i jiný odstín. Vyplatí se proto vyhnout těmto nepřesnostem:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Záměna délky krokve s výškou štítu.</strong> Krokev je šikmá vzdálenost od hřebene k okapnici, nikdy ne svislá výška hřebene. Kdo zadá výšku, podhodnotí plochu u střechy se sklonem 35° přibližně o čtvrtinu.</li>
            <li><strong>Vynechaný přesah u okapu a u štítu.</strong> Krytina běží za obrys domu, obvykle 40 až 60 cm u okapu a 20 až 40 cm u štítu. U domu 8 × 10 metrů to jsou další dva až tři metry čtvereční plochy na každém svahu.</li>
            <li><strong>Použití koeficientu sedlové střechy u valbové.</strong> Valba má kratší hřeben, ale větší plochu. Kdo zadá délku hřebene a nechá koeficient 2, vyjde mu výrazně méně tašek, než kolik na střechu skutečně padne.</li>
            <li><strong>Krytina mimo povolený sklon.</strong> Betonové a pálené tašky mají bezpečný sklon od 17 až 22°. Při nižším sklonu je nutná jiná krytina nebo plnohodnotná hydroizolace pod latěním, jinak voda zateče pod krytinu vzlínáním a při zafoukání sněhu.</li>
            <li><strong>Nezohledněná únosnost krovu.</strong> Betonová krytina váží kolem 45 kg/m², pálená o pár kilogramů méně, vláknocementová deska jen 15 až 20 kg/m². Výměna plechu za betonovou tašku bez posouzení krovu je vážná chyba.</li>
            <li><strong>Objednávka bez doplňků.</strong> Hřebenáče, úžlabní plech, okrajové a odvětrávací tašky se dodávají zvlášť a často mají delší dodací lhůtu než plošná krytina. Bez nich se střecha nedá dokončit.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Co ještě budete potřebovat</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Krytina sama tvoří jen asi polovinu nákladů na střešní plášť. Druhou polovinu spolkne latění, pojistná hydroizolace a klempířské prvky:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Difuzní pojistná hydroizolace</strong> pod latěním, 30 až 70 Kč/m² podle gramáže; pokládá se s přesahem 10 až 15 cm a u nižších sklonů se přesahy lepí.</li>
            <li><strong>Kontralatě 30 × 50 mm a latě 40 × 60 mm</strong> za 25 až 45 Kč/bm. Rozteč latí se řídí krycí délkou konkrétní tašky, ne odhadem.</li>
            <li><strong>Hřebenáče</strong> 60 až 150 Kč/kus, přibližně 2,5 kusu na běžný metr hřebene, plus větrací pás hřebene za 150 až 300 Kč/bm.</li>
            <li><strong>Odvětrávací a prostupové tašky</strong> — odvětrávací od 300 Kč, prostup pro kanalizaci nebo anténu 800 až 2 000 Kč za sestavu.</li>
            <li><strong>Okapní systém</strong> — žlab, kotlík a svod od 250 Kč/bm v plastu, od 450 Kč/bm v titanzinku, k tomu okapnice a ochranná mřížka.</li>
            <li><strong>Nerezové vruty nebo příložky na tašky</strong> v krajích a na vrcholech, kde je riziko zafoukání; u sklonu nad 45° se kotví každá taška.</li>
            <li><strong>Lešení nebo střešní výtah</strong> — půjčovna 500 až 900 Kč/den za výtah, lešení kolem 60 až 120 Kč/m² na měsíc.</li>
            <li><strong>Bezpečnostní postroj s tlumičem pádu a lanem</strong> za 2 000 až 4 000 Kč. Práce na střeše bez zajištění je nejčastější zdroj vážných úrazů při svépomocné rekonstrukci.</li>
          </ul>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Časté otázky</h2>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jak zjistím délku krokve, když se nemůžu dostat na střechu?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Spočítáte ji z půdorysu Pythagorovou větou. U sedlové střechy vezměte polovinu šířky domu a výšku hřebene nad úrovní pozednice: při šířce domu 8 metrů a výšce hřebene 2,3 metru je krokev odmocnina ze součtu 4² a 2,3², tedy 4,61 metru. K výsledku přidejte přesah střechy u okapu, obvykle 0,4 až 0,6 metru.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Proč má valbová střecha koeficient 2,2 a ne 2?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              U valbové střechy jsou zkosené i čelní strany, takže hřeben je kratší než dům, ale plocha krytiny je ve skutečnosti větší než u dvou pravoúhlých polí. Koeficient 2,2 tento rozdíl zprůměruje, takže zadáváte délku vlastního hřebene a kalkulačka plochu valbových trojúhelníků dopočítá. U pultové střechy je koeficient 1, u sedlové 2.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik tašek se vejde na jednu paletu?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Kalkulačka počítá s 200 kusy u betonové i pálené tašky, se 100 kusy u šindelů a se 40 kusy u vláknocementových desek. Počet palet se zaokrouhluje nahoru, takže u menších střech skoro vždy zbyde část palety navíc. Paleta tašek váží stovky kilogramů, u betonových po 200 kusech běžně více než půl tuny, s čímž je nutné počítat při složení i při dopravě na lešení.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jsou v počtu tašek zahrnuté i hřebenáče a okrajové tašky?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Nejsou. Kalkulačka počítá pouze plošnou krytinu. Hřebenáče se objednávají podle délky hřebene a nároží, obvykle 2,5 kusu na běžný metr, okrajové tašky podle délky štítů a odvětrávací i prostupové tašky podle počtu komínů, antén a odvětrání kanalizace. Tyto doplňky tvoří u běžné sedlové střechy 5 až 10 % ceny krytiny.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Stačí u střešní krytiny pětiprocentní rezerva?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              U jednoduché sedlové nebo pultové střechy bez vikýřů ano, protože se řeže jen u štítů a u hřebene. U členité střechy s úžlabími, vikýři a nárožími se řezaných tašek vyskytuje mnohem víc a je lepší počítat s 10 až 12 %. Navíc se vyplatí dokoupit jeden balík tašek do zásoby — po několika letech už nemusí být stejný odstín dostupný.
            </p>
          </details>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>
            Mohlo by vás zajímat
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Kolik cihel potřebuju – kalkulačka zdiva", href: "/kalkulacky/kolik-cihel", icon: "🏗️" },
              { title: "Kolik SDK desek a profilů potřebuju?", href: "/kalkulacky/kolik-sdk", icon: "🧱" },
              { title: "Jak malovat zeď – kompletní průvodce", href: "/blog/jak-malovat-zed", icon: "🖌️" },
            ].map(r => (
              <Link key={r.href} href={r.href} style={{ display:"block", background:"#f8f4f0", border:"1px solid #e8e0d8", borderRadius:"10px", padding:"14px 16px", textDecoration:"none", transition:"background 120ms" }}>
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
