import type { Metadata } from "next";
import Link from "next/link";
import BazenCalculator from "@/app/components/BazenCalculator";
import AffiliateCTA from "@/app/components/AffiliateCTA";

export const metadata: Metadata = {
  title: "Kalkulačka objemu bazénu 2026 – kolik vody a chlóru potřebujete?",
  description: "Spočítejte si objem bazénu v m³ i litrech a doporučenou dávku chlóru pro šokovou i běžnou údržbovou chloraci. Rychlý online výpočet zdarma.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-vody-do-bazenu" },
  openGraph: { title: "Kalkulačka objemu bazénu 2026", description: "Spočítejte si objem bazénu v m³ i litrech a doporučenou dávku chlóru pro šokovou i běžnou údržbovou chloraci. Rychlý online výpočet zdarma.", url: "https://www.domovniguru.cz/kalkulacky/kolik-vody-do-bazenu", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20objemu%20baz%C3%A9nu%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka objemu bazénu 2026" }] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Kolik vody se vejde do bazénu 6 × 3 metry?", "acceptedAnswer": { "@type": "Answer", "text": "Při průměrné hloubce 1,3 metru má takový bazén objem 6 × 3 × 1,3 = 23,4 m³, tedy 23 400 litrů. Při hloubce 1,5 metru vzroste objem na 27 m³ a při 1,2 metru klesne na 21,6 m³. Každých deset centimetrů hloubky u této velikosti znamená rozdíl 1 800 litrů, takže hloubku je potřeba měřit poměrně přesně." } },
      { "@type": "Question", "name": "Kolik chlóru se dávkuje na kubík vody?", "acceptedAnswer": { "@type": "Answer", "text": "Pro šokovou dezinfekci se orientačně počítá 20 gramů chlóru na metr kubický vody, pro běžnou týdenní údržbovou chloraci přibližně 5 gramů na metr kubický. U bazénu o objemu 23,4 m³ to znamená 0,47 kg na šokovou dávku a 0,12 kg týdně. Vždy ale platí dávkování uvedené výrobcem konkrétního přípravku, protože koncentrace aktivního chlóru se mezi produkty výrazně liší." } },
      { "@type": "Question", "name": "Jaké má být pH a obsah chlóru v bazénu?", "acceptedAnswer": { "@type": "Answer", "text": "Hodnota pH má být mezi 7,2 a 7,6 a volný chlor v rozmezí 1 až 3 mg na litr. Při pH nad 7,8 ztrácí chlor většinu dezinfekční účinnosti, voda se kalí a tvoří se vápenaté usazeniny. Při pH pod 7,0 hrozí dráždění očí a kůže a koroze kovových částí filtrace. Nejprve vždy upravte pH, teprve potom dávkujte chlor — v opačném pořadí přípravek nezabere." } },
      { "@type": "Question", "name": "Jak často se v bazénu mění voda?", "acceptedAnswer": { "@type": "Answer", "text": "U zahradního bazénu s funkční filtrací a chemickou úpravou obvykle jednou za sezónu, typicky na jaře při zprovoznění. Během sezóny se voda jen doplňuje — odparem, zpětným proplachem filtrace a vyplavováním zmizí v letních týdnech i několik centimetrů hladiny. Výměnu uprostřed sezóny si vynutí jen zabahnělá voda, kterou se nedaří vyčistit, nebo příliš vysoký obsah stabilizátoru kyseliny cyanurové." } },
      { "@type": "Question", "name": "Jak bezpečně zacházet s bazénovou chemií?", "acceptedAnswer": { "@type": "Answer", "text": "Jednotlivé přípravky nikdy nemíchejte mezi sebou ani je nesypte na sebe — chlorové a kyselé přípravky spolu reagují a uvolňují jedovatý plyn. Chemii vždy přidávejte do vody, nikdy vodu do chemie, dávkujte do plovoucího dávkovače nebo skimmeru při zapnuté filtraci a používejte rukavice a ochranu očí. Mezi dávkováním dvou různých přípravků nechte alespoň několik hodin, skladujte je v suchu mimo dosah dětí a vždy dodržujte dávkování uvedené výrobcem." } }
    ]
  }, {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
      { "@type": "ListItem", "position": 2, "name": "Kalkulačky", "item": "https://www.domovniguru.cz/kalkulacky" },
      { "@type": "ListItem", "position": 3, "name": "Kolik vody do bazénu", "item": "https://www.domovniguru.cz/kalkulacky/kolik-vody-do-bazenu" }
    ]
  }]
};

export default function KolikVodyDoBazenuPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Kolik vody do bazénu</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik vody potřebuje můj bazén?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej rozměry bazénu — kalkulačka okamžitě spočítá objem v m³ i litrech a doporučí dávkování chlóru pro šokovou dezinfekci i běžnou týdenní údržbu.</p>

        <BazenCalculator />
        <AffiliateCTA merchant="zahrada" text="Vybrat bazénovou chemii" />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Jak spočítat objem bazénu a starat se o kvalitu vody</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            U obdélníkového bazénu spočítáte objem jednoduše vynásobením délky, šířky a průměrné hloubky (délka × šířka × hloubka). Pokud má bazén skloněné dno (mělčina a hlubší konec), použijte průměr obou hloubek. U ovální nebo kruhové nádrže se objem počítá přes plochu kruhu/elipsy (π × poloměr² × hloubka, případně π × a × b × hloubka pro elipsu), v praxi ale i u oválných bazénů často vystačíte s orientačním výpočtem podle „vepsaného obdélníku“ vynásobeného korekčním koeficientem kolem 0,8. Výsledný objem v m³ jednoduše převedete na litry vynásobením tisícem (1 m³ = 1000 l) — tato hodnota je klíčová pro správné dávkování chemie i pro odhad nákladů na vodu.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Kompletní výměna vody se u zahradních bazénů s běžnou chemickou úpravou obvykle dělá jen jednou za sezónu, ideálně na jaře při zprovoznění. Naopak doplňování vody je potřeba prakticky neustále — bazén ztrácí vodu odparem (zejména v horkých dnech a při intenzivním používání), zpětným proplachem filtrace a vyplavováním při koupání. V létě je běžné doplnit i několik centimetrů hladiny týdně, u menších nadzemních bazénů to může být i víc. Pravidelná kontrola hladiny a doplňování čerstvou vodou zároveň částečně ředí nečistoty a stabilizuje chemii.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Základem zdravé bazénové vody je udržovat pH v rozsahu 7,2–7,6 — při vyšším pH klesá účinnost chlóru a voda může zakalit, při nižším hrozí podráždění kůže a očí a koroze kovových částí. Volný chlor by se měl pohybovat v rozmezí 1–3 mg/l, což zajišťuje dostatečnou dezinfekci bez nadměrného zápachu a dráždivosti. Šokovou chloraci (vyšší jednorázová dávka, orientačně kolem 20 g chlóru na m³) použijte při zprovoznění bazénu na začátku sezóny, po přemnožení řas, silném dešti nebo vysoké návštěvnosti. Běžná údržbová dávka (orientačně 5 g/m³ týdně) pak udržuje vodu čistou za standardního provozu. Testovací proužky nebo digitální testery vám během pár sekund ukážou, zda je potřeba dávkování upravit.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Jak se výpočet dělá</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Kalkulačka pracuje se třemi vstupy — délkou, šířkou a průměrnou hloubkou v metrech — a objem spočítá jejich jednoduchým vynásobením. Výsledek je v metrech kubických a na litry se převede vynásobením tisícem, protože jeden metr kubický odpovídá přesně tisíci litrům. Z objemu se pak odvodí obě dávky chemie: šoková dezinfekce v hodnotě 20 gramů chlóru na metr kubický a běžná týdenní údržbová chlorace ve výši 5 gramů na metr kubický. Oba výsledky kalkulačka přepočítává na kilogramy.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Konkrétní příklad: bazén 6 × 3 metry s průměrnou hloubkou 1,3 metru. Objem je 6 × 3 × 1,3 = 23,4 m³, tedy 23 400 litrů. Šoková dávka vychází na 23,4 × 20 = 468 gramů, tedy 0,47 kg chlóru. Údržbová chlorace je 23,4 × 5 = 117 gramů, tedy přibližně 0,12 kg za týden. Za desetitýdenní sezónu to znamená kolem 1,2 kg chlóru na běžnou údržbu plus šokové dávky při zprovoznění a po přívalových dešťích.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            U nepravidelných tvarů se vzorec používá s průměrnou hloubkou — u bazénu se mělčinou 1,0 m a hlubokým koncem 1,8 m zadejte 1,4 m. U kruhového bazénu vynásobte plochu kruhu (π × poloměr²) hloubkou, u oválného vystačí výpočet podle opsaného obdélníku vynásobený koeficientem přibližně 0,8. Uvedené dávky chlóru jsou orientační a platí pro přípravky s běžnou koncentrací aktivního chlóru; skutečná dávka se vždy odečte z obalu konkrétního produktu.
          </p>
          <div style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "16px", background: "#fffbf0" }}>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
              <strong>Bezpečnostní upozornění.</strong> Bazénové přípravky nikdy nemíchejte mezi sebou ani je nesypte na sebe do jedné nádoby — chlorové a kyselé přípravky spolu reagují a uvolňují jedovatý plyn. Chemii vždy přidávejte do vody, nikdy vodu do chemie. Dávkujte při zapnuté filtraci, do plovoucího dávkovače nebo skimmeru, používejte rukavice a ochranu očí a mezi aplikací dvou různých přípravků nechte několik hodin odstup. Přípravky skladujte v suchu, v originálním obalu a mimo dosah dětí. Dávkování vždy řiďte podle údajů výrobce, nikoliv podle orientačních hodnot v kalkulačce.
            </p>
          </div>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Nejčastější chyby</h2>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Dávkování chlóru před úpravou pH.</strong> Při pH nad 7,8 ztrácí chlor většinu účinnosti a přípravek se prakticky vyplýtvá. Nejprve pH, pak dezinfekce.</li>
            <li><strong>Hádání objemu místo měření.</strong> U bazénu 6 × 3 m znamená omyl v hloubce deset centimetrů rozdíl 1 800 litrů, tedy víc než sedm procent dávky chemie.</li>
            <li><strong>Sypání chlóru přímo do bazénu.</strong> Nerozpuštěné tablety a granule na fólii ji vybělí a trvale poškodí. Používejte dávkovač nebo přípravek rozpusťte v kbelíku vody.</li>
            <li><strong>Šoková dezinfekce před koupáním.</strong> Po šokové dávce se do bazénu smí vstoupit nejdříve po dvanácti hodinách, až se obsah volného chlóru vrátí do rozmezí 1 až 3 mg/l.</li>
            <li><strong>Krátký běh filtrace.</strong> Voda musí protéct filtrací celým objemem alespoň dvakrát denně — u 23 m³ a čerpadla s výkonem 6 m³/h to znamená přibližně osm hodin provozu.</li>
            <li><strong>Zanedbaný zpětný proplach.</strong> Zanesený písek ve filtru propouští zákal a vede k přidávání většího množství chemie, než je potřeba. Proplachujte při vzestupu tlaku o 0,3 bar.</li>
            <li><strong>Nekontrolovaná kyselina cyanurová.</strong> Stabilizovaný chlor ji do vody vnáší a nad 75 mg/l chlor přestane fungovat. Řešením je částečná výměna vody, ne vyšší dávky.</li>
            <li><strong>Měření jen jednou za týden.</strong> V horkých dnech a při vysokém zatížení chlor mizí během hodin. Testujte vodu minimálně dvakrát týdně, v letních vlnách horka denně.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Co ještě budete potřebovat</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Orientační ceny chemie a vybavení pro jednu sezónu u bazénu kolem 23 m³:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Chlorové tablety nebo granule</strong> — 400 až 900 Kč za 5 kg, na sezónu obvykle vystačí jedno až dvě balení.</li>
            <li><strong>pH minus a pH plus</strong> — 150 až 300 Kč za balení 1,5 kg; pH minus se spotřebuje výrazně častěji.</li>
            <li><strong>Vločkovač pro čiření zákalu</strong> — 200 až 400 Kč za litr nebo balení kartuší.</li>
            <li><strong>Algicid proti řasám</strong> — 250 až 500 Kč za litr, dávkuje se preventivně po dolití vody.</li>
            <li><strong>Testovací proužky nebo digitální tester</strong> — proužky 150 až 300 Kč za 50 ks, elektronický tester 1 500 až 4 000 Kč.</li>
            <li><strong>Filtrační písek nebo kartuše</strong> — 25 kg písku 300 až 500 Kč, kartuše 200 až 600 Kč za kus.</li>
            <li><strong>Bazénový vysavač nebo robot</strong> — ruční sada od 800 Kč, automatický robot 6 000 až 20 000 Kč.</li>
            <li><strong>Solární plachta nebo krycí fólie</strong> — 100 až 250 Kč za metr čtvereční; omezí odpar i spotřebu chemie.</li>
            <li><strong>Voda na naplnění</strong> — při ceně kolem 120 Kč za metr kubický vyjde napuštění 23 m³ přibližně na 2 800 Kč.</li>
          </ul>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Časté otázky</h2>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik vody se vejde do bazénu 6 × 3 metry?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Při průměrné hloubce 1,3 metru má takový bazén objem 6 × 3 × 1,3 = 23,4 m³, tedy 23 400 litrů. Při hloubce 1,5 metru vzroste objem na 27 m³ a při 1,2 metru klesne na 21,6 m³. Každých deset centimetrů hloubky u této velikosti znamená rozdíl 1 800 litrů, takže hloubku je potřeba měřit poměrně přesně.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik chlóru se dávkuje na kubík vody?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Pro šokovou dezinfekci se orientačně počítá 20 gramů chlóru na metr kubický vody, pro běžnou týdenní údržbovou chloraci přibližně 5 gramů na metr kubický. U bazénu o objemu 23,4 m³ to znamená 0,47 kg na šokovou dávku a 0,12 kg týdně. Vždy ale platí dávkování uvedené výrobcem konkrétního přípravku, protože koncentrace aktivního chlóru se mezi produkty výrazně liší.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jaké má být pH a obsah chlóru v bazénu?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Hodnota pH má být mezi 7,2 a 7,6 a volný chlor v rozmezí 1 až 3 mg na litr. Při pH nad 7,8 ztrácí chlor většinu dezinfekční účinnosti, voda se kalí a tvoří se vápenaté usazeniny. Při pH pod 7,0 hrozí dráždění očí a kůže a koroze kovových částí filtrace. Nejprve vždy upravte pH, teprve potom dávkujte chlor — v opačném pořadí přípravek nezabere.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jak často se v bazénu mění voda?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              U zahradního bazénu s funkční filtrací a chemickou úpravou obvykle jednou za sezónu, typicky na jaře při zprovoznění. Během sezóny se voda jen doplňuje — odparem, zpětným proplachem filtrace a vyplavováním zmizí v letních týdnech i několik centimetrů hladiny. Výměnu uprostřed sezóny si vynutí jen zabahnělá voda, kterou se nedaří vyčistit, nebo příliš vysoký obsah stabilizátoru kyseliny cyanurové.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jak bezpečně zacházet s bazénovou chemií?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Jednotlivé přípravky nikdy nemíchejte mezi sebou ani je nesypte na sebe — chlorové a kyselé přípravky spolu reagují a uvolňují jedovatý plyn. Chemii vždy přidávejte do vody, nikdy vodu do chemie, dávkujte do plovoucího dávkovače nebo skimmeru při zapnuté filtraci a používejte rukavice a ochranu očí. Mezi dávkováním dvou různých přípravků nechte alespoň několik hodin, skladujte je v suchu mimo dosah dětí a vždy dodržujte dávkování uvedené výrobcem.
            </p>
          </details>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Příprava bazénu na léto", href: "/blog/priprava-bazenu-na-leto", icon: "☀️" },
              { title: "Zazimování bazénu", href: "/blog/zazimovani-bazenu", icon: "❄️" },
              { title: "Kalkulačka zavlažování zahrady", href: "/kalkulacky/kolik-zavlahy", icon: "💧" },
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
