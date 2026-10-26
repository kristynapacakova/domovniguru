// ════════════════════════════════════════════════════════════════
// SOUBOR: app/kalkulacky/led-uspora/page.tsx
// ════════════════════════════════════════════════════════════════
import type { Metadata } from "next";
import ShareButtons from "@/app/components/ShareButtons";
import Link from "next/link";
import LedSavingsCalculator from "@/app/components/LedSavingsCalculator";
import AffiliateCTA from "@/app/components/AffiliateCTA";

export const metadata: Metadata = {
  title: "Kolik ušetřím LED žárovkami? Kalkulačka úspory 2026",
  description:
    "Spočítej roční úsporu při výměně klasických žárovek za LED. Zadej počet žárovek, příkon a cenu elektřiny – výsledek okamžitě.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/led-uspora" },
  openGraph: {
    title: "Kolik ušetřím LED žárovkami? Kalkulačka 2026",
    description: "Roční úspora, návratnost investice a úspora CO₂. Výsledek okamžitě.",
    url: "https://www.domovniguru.cz/kalkulacky/led-uspora",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "website",
    images: [{ url: "/api/og?title=Kolik%20u%C5%A1et%C5%99%C3%ADm%20LED%20%C5%BE%C3%A1rovkami%3F%20Kalkula%C4%8Dka%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kolik ušetřím LED žárovkami? Kalkulačka 2026" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Kolik ušetřím výměnou dvanácti žárovek za LED?", "acceptedAnswer": { "@type": "Answer", "text": "U dvanácti šedesátiwattových žárovek, které svítí čtyři hodiny denně, a ceny šesti korun za kilowatthodinu jsou roční náklady 6 307 Kč. LED náhrada o příkonu 8 W stojí za stejný provoz 841 Kč, úspora je tedy přibližně 5 466 Kč za rok. Investice 1 200 Kč za dvanáct žárovek se vrátí za necelé tři měsíce." } },
      { "@type": "Question", "name": "Jak kalkulačka určuje příkon LED náhrady?", "acceptedAnswer": { "@type": "Answer", "text": "Pracuje s převodní tabulkou podle příkonu původní žárovky: do 25 W odpovídá 3 W LED, do 40 W pět wattů, do 60 W osm wattů, do 75 W jedenáct wattů a do 100 W čtrnáct wattů. U silnějších žárovek počítá se čtrnácti procenty původního příkonu. Hodnoty odpovídají tomu, co nabízejí běžné LED žárovky se stejným světelným tokem v lumenech." } },
      { "@type": "Question", "name": "Jak se počítá roční spotřeba a návratnost?", "acceptedAnswer": { "@type": "Answer", "text": "Roční spotřeba jedné žárovky je příkon dělený tisícem, krát počet hodin svícení denně, krát 365 dní. Tato spotřeba se vynásobí cenou kilowatthodiny a počtem žárovek v domácnosti, zvlášť pro původní žárovky a zvlášť pro LED. Rozdíl je roční úspora. Investice počítá se stovkou korun za žárovku a návratnost v měsících vznikne jako investice dělená roční úsporou krát dvanáct." } },
      { "@type": "Question", "name": "Vyplatí se vyměnit žárovku, která ještě funguje?", "acceptedAnswer": { "@type": "Answer", "text": "Ano. Každý den, kdy šedesátiwattová žárovka svítí místo osmiwattové LED, stojí při čtyřech hodinách provozu a ceně šesti korun za kilowatthodinu přibližně 1,25 Kč. Žárovka za sto korun se tedy zaplatí za necelé tři měsíce a zbytek jejího života je čistá úspora. Čekání na to, až stará žárovka praskne, je ztráta, nikoli spoření." } },
      { "@type": "Question", "name": "Kolik kilogramů CO₂ ušetří přechod na LED?", "acceptedAnswer": { "@type": "Answer", "text": "Kalkulačka počítá s emisním faktorem 0,22 kg CO₂ na kilowatthodinu, který odpovídá průměru českého energetického mixu. Domácnost s dvanácti šedesátiwattovými žárovkami svítícími čtyři hodiny denně ušetří ročně okolo 911 kWh, tedy přibližně 200 kg CO₂. Za desetiletou životnost LED žárovek jde o dvě tuny." } }
    ]
  }, {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
      { "@type": "ListItem", "position": 2, "name": "Kalkulačky", "item": "https://www.domovniguru.cz/kalkulacky" },
      { "@type": "ListItem", "position": 3, "name": "LED úspora", "item": "https://www.domovniguru.cz/kalkulacky/led-uspora" }
    ]
  }]
};

export default function LedUsporaPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "720px" }}>

        {/* Breadcrumb */}
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span>
          <Link href="/kalkulacky">Kalkulačky</Link><span>/</span>
          <span>LED úspora</span>
        </nav>

        {/* Nadpis */}
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>
          Kolik ušetřím přechodem na LED žárovky?
        </h1>
        <p style={{ fontSize: "17px", color: "#7a6020", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>
          Posuň slidery a zjisti roční úsporu pro celou domácnost — včetně doby návratnosti investice a úspory CO₂.
        </p>

        {/* KALKULAČKA */}
        <LedSavingsCalculator />
        <AffiliateCTA merchant="aku" text="Nakoupit LED žárovky" />

        {/* ══ SEO TEXT ══════════════════════════════════════════════ */}
        <div style={{ marginTop: "56px", borderTop: "1px solid #e8d860", paddingTop: "40px" }}>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", color: "#2a1f00" }}>
            Proč nečekat, až stará žárovka praskne
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.85, color: "#3a2a00", fontWeight: 300, marginBottom: "16px" }}>
            Intuice říká: „Vyměním žárovku, až přestane svítit." Ekonomická logika říká přesný opak. Každý den kdy fungující 60W žárovka svítí místo 9W LED tě stojí peníze — při 4 hodinách svícení a ceně 6 Kč/kWh to dělá přibližně 1,25 Kč denně na jedinou žárovku. Na 12 žárovkách v bytě je to přes 5 400 Kč ročně navíc oproti LED alternativě. Pořizovací cena kvalitní LED žárovky (Philips, Osram) se pohybuje kolem 80–120 Kč — celá investice se vrátí za 2–4 měsíce. Každý měsíc odkládání výměny funkční staré žárovky je tedy čistá ztráta, nikoliv úspora. Navíc klasické žárovky (wolframové vlákno) jsou v EU od roku 2012 zakázány k prodeji a dostupnost náhrad postupně mizí.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", color: "#2a1f00" }}>
            Co je světelný tok (lumen) a proč watty nestačí
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.85, color: "#3a2a00", fontWeight: 300, marginBottom: "16px" }}>
            Watt (W) měří příkon — tedy kolik energie žárovka spotřebuje. U klasických žárovek byl příkon a jas přímočaře propojený, proto jsme si zvykli říkat „60wattová žárovka". U LED to neplatí — moderní LED produkuje stejný jas (světelný tok) za zlomek energie. Správnou jednotkou pro porovnání jasu je <strong>lumen (lm)</strong>. 60W klasická žárovka produkuje přibližně 750–800 lm. LED náhrada dosahuje stejného toku při pouhých 8–9 W — tedy při přibližně 85 % nižší spotřebě energie. Pro koupelnu a pracovnu hledej žárovky s 800+ lm, pro ambientní osvětlení ložnice stačí 400–600 lm. Druhý klíčový parametr je CRI (index podání barev) — hledej hodnotu 80+, v koupelně ideálně 90+ pro přesné vnímání barev.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", color: "#2a1f00" }}>
            Jak LED žárovky snižují produkci tepla v bytě
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.85, color: "#3a2a00", fontWeight: 300, marginBottom: "0" }}>
            Klasická wolframová žárovka přeměňuje na viditelné světlo pouze 5–8 % spotřebované energie — zbylých 92–95 % se mění v teplo. V létě toto teplo zvyšuje teplotu v místnosti a zvyšuje nároky na klimatizaci nebo větrání. U 12 klasických 60W žárovek v bytě jde o tepelný výkon přes 650 W — srovnatelný s malým elektrickým topidlem. LED žárovky přeměňují na světlo 30–50 % energie a zbytek se sice také mění na teplo, ale při příkonu 9 W místo 60 W je celkové tepelné zatížení místnosti dramaticky nižší. V zimě toto teplo z žárovek trochu pomáhá — v létě je to čistý problém. Přechod na LED tak šetří nejen na účtu za elektřinu, ale v klimatizovaných bytech i na chlazení.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Jak se výpočet dělá</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Kalkulačka nejprve určí, jakou LED náhradu vaše žárovka potřebuje, aby svítila stejně. Pracuje s převodní tabulkou podle příkonu originálu: do 25 W odpovídá tříwattová LED, do 40 W pětiwattová, do 60 W osmiwattová, do 75 W jedenáctiwattová a do 100 W čtrnáctiwattová. U silnějších žárovek počítá se čtrnácti procenty původního příkonu. Hodnoty odpovídají tomu, co se skutečně prodává — LED s osmi watty dává přibližně 800 lumenů, tedy totéž co klasická šedesátka.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Pak následuje samotná energetika. Roční spotřeba jedné žárovky je příkon dělený tisícem, krát hodiny svícení denně, krát 365 dní. Tato spotřeba se vynásobí cenou kilowatthodiny a počtem žárovek v domácnosti — zvlášť pro původní osvětlení a zvlášť pro LED. Rozdíl je roční úspora. Investice se počítá jako počet žárovek krát sto korun, což odpovídá ceně kvalitní LED žárovky od zavedené značky, a návratnost v měsících vznikne jako investice dělená roční úsporou a vynásobená dvanácti.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Konkrétní příklad: dvanáct šedesátiwattových žárovek, čtyři hodiny svícení denně, šest korun za kilowatthodinu. Jedna stará žárovka spotřebuje 87,6 kWh za rok, celá domácnost tedy 1 051 kWh a zaplatí 6 307 Kč. LED náhrada o osmi wattech spotřebuje 11,7 kWh na žárovku, celkem 140 kWh a 841 Kč. Roční úspora je 5 466 Kč, investice 1 200 Kč a návratnost necelé tři měsíce. Úspora energie 911 kWh znamená při emisním faktoru 0,22 kg CO₂ na kilowatthodinu také přibližně 200 kg CO₂ ročně.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Nejčastější chyby</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            LED žárovka je zdánlivě bezproblémový nákup, ale většina zklamání z „levných LED" má jednu z následujících příčin:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Výběr podle wattů místo lumenů.</strong> U LED watty nevypovídají o jasu. Pro náhradu klasické šedesátky hledejte 800 lumenů, u stowattové žárovky 1 500 lumenů.</li>
            <li><strong>Špatná teplota chromatičnosti.</strong> Do obytných místností patří teplá bílá 2700 K. Hodnota 4000 K a výše působí v ložnici nemocničně a potlačuje tvorbu melatoninu před spaním.</li>
            <li><strong>Nestmívatelná LED do stmívače.</strong> Běžná LED žárovka ve obvodu se stmívačem bliká, bručí a rychle odejde. Stmívatelné modely musí být takto výslovně označeny.</li>
            <li><strong>Levné žárovky s nízkým CRI.</strong> Index podání barev pod 80 zkresluje barvy jídla i pokožky. Do kuchyně a koupelny hledejte 90 a výš.</li>
            <li><strong>Výměna jen tam, kde se svítí málo.</strong> Pořadí výměny určuje doba svícení. Nejdříve kuchyň, chodba a obývací pokoj, až nakonec sklep nebo komora.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Na co myslet před pořízením</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Než sáhnete po celém balení LED žárovek, projděte si domácnost a připravte si následující body i s orientačními cenami:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Typ patice.</strong> E27, E14, GU10 a G9 nejsou vzájemně zaměnitelné. Projděte svítidla a sepište počty podle patic, než začnete objednávat.</li>
            <li><strong>Cena žárovek.</strong> Kvalitní LED E27 s 800 lumeny stojí 70 až 130 Kč, reflektor GU10 okolo 80 až 150 Kč, filamentová dekorativní verze 150 až 250 Kč.</li>
            <li><strong>Stmívatelné modely.</strong> Připlatíte si 50 až 120 Kč na žárovku a stmívač musí být určen pro LED zátěž, jinak bude světlo poblikávat.</li>
            <li><strong>LED pásy do kuchyně.</strong> Metr pásu s napájecím zdrojem vyjde na 150 až 400 Kč podle hustoty čipů a krytí. Pod linku se vyplatí teplá bílá s CRI 90.</li>
            <li><strong>Chytré žárovky.</strong> 300 až 700 Kč za kus podle protokolu. Vyplatí se jen tam, kde skutečně využijete scény nebo časování, jinak jde o drahou náhradu vypínače.</li>
            <li><strong>Krytí do vlhka.</strong> Do koupelnové zóny a na terasu patří svítidlo s krytím alespoň IP44, do sprchy IP65. Žárovka sama krytí neřeší, rozhoduje svítidlo.</li>
          </ul>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Časté otázky</h2>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik ušetřím výměnou dvanácti žárovek za LED?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              U dvanácti šedesátiwattových žárovek, které svítí čtyři hodiny denně, a ceny šesti korun za kilowatthodinu jsou roční náklady 6 307 Kč. LED náhrada o příkonu 8 W stojí za stejný provoz 841 Kč, úspora je tedy přibližně 5 466 Kč za rok. Investice 1 200 Kč za dvanáct žárovek se vrátí za necelé tři měsíce.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jak kalkulačka určuje příkon LED náhrady?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Pracuje s převodní tabulkou podle příkonu původní žárovky: do 25 W odpovídá 3 W LED, do 40 W pět wattů, do 60 W osm wattů, do 75 W jedenáct wattů a do 100 W čtrnáct wattů. U silnějších žárovek počítá se čtrnácti procenty původního příkonu. Hodnoty odpovídají tomu, co nabízejí běžné LED žárovky se stejným světelným tokem v lumenech.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jak se počítá roční spotřeba a návratnost?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Roční spotřeba jedné žárovky je příkon dělený tisícem, krát počet hodin svícení denně, krát 365 dní. Tato spotřeba se vynásobí cenou kilowatthodiny a počtem žárovek v domácnosti, zvlášť pro původní žárovky a zvlášť pro LED. Rozdíl je roční úspora. Investice počítá se stovkou korun za žárovku a návratnost v měsících vznikne jako investice dělená roční úsporou krát dvanáct.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Vyplatí se vyměnit žárovku, která ještě funguje?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Ano. Každý den, kdy šedesátiwattová žárovka svítí místo osmiwattové LED, stojí při čtyřech hodinách provozu a ceně šesti korun za kilowatthodinu přibližně 1,25 Kč. Žárovka za sto korun se tedy zaplatí za necelé tři měsíce a zbytek jejího života je čistá úspora. Čekání na to, až stará žárovka praskne, je ztráta, nikoli spoření.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik kilogramů CO₂ ušetří přechod na LED?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Kalkulačka počítá s emisním faktorem 0,22 kg CO₂ na kilowatthodinu, který odpovídá průměru českého energetického mixu. Domácnost s dvanácti šedesátiwattovými žárovkami svítícími čtyři hodiny denně ušetří ročně okolo 911 kWh, tedy přibližně 200 kg CO₂. Za desetiletou životnost LED žárovek jde o dvě tuny.
            </p>
          </details>
        </div>

        {/* Mohlo by vás zajímat */}
        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a7020", marginBottom: "16px" }}>
            Mohlo by vás zajímat
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak vybrat LED žárovku – parametry, Kelviny, CRI", href: "/blog/jak-vybrat-led-zarovku", icon: "💡" },
              { title: "LED vs. žárovky – co se skutečně vyplatí?", href: "/blog/led-vs-zarovky", icon: "⚖️" },
              { title: "Jak snížit účet za elektřinu doma", href: "/blog/snizit-ucet-za-elektrinu", icon: "💰" },
            ].map(r => (
              <Link key={r.href} href={r.href} style={{
                display: "block", background: "#fffdf0",
                border: "1px solid #e8d860", borderRadius: "10px",
                padding: "14px 16px", textDecoration: "none",
              }}>
                <div style={{ fontSize: "18px", marginBottom: "6px" }}>{r.icon}</div>
                <div style={{ fontSize: "14px", fontWeight: 500, color: "#2a1f00", lineHeight: 1.4 }}>{r.title}</div>
                <div style={{ fontSize: "12px", color: "#9a7820", marginTop: "6px" }}>Číst →</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
