import type { Metadata } from "next";
import Link from "next/link";
import VykonRadiatoruCalculator from "@/app/components/VykonRadiatoruCalculator";
import AffiliateCTA from "@/app/components/AffiliateCTA";

export const metadata: Metadata = {
  title: "Kalkulačka výkonu radiátoru 2026 – kolik W radiátor potřebuji?",
  description: "Spočítej potřebný výkon radiátoru podle plochy a výšky místnosti, zateplení domu a typu místnosti. Výsledek ve wattech, kilowattech i počtu článků okamžitě.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/vykon-radiatoru" },
  openGraph: { title: "Kalkulačka výkonu radiátoru 2026", description: "Kolik W radiátor potřebuji? Výsledek okamžitě.", url: "https://www.domovniguru.cz/kalkulacky/vykon-radiatoru", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20v%C3%BDkonu%20radi%C3%A1toru%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka výkonu radiátoru 2026" }] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Jaký výkon radiátoru potřebuji na místnost 20 m²?", "acceptedAnswer": { "@type": "Answer", "text": "Při výšce stropu 2,6 metru má taková místnost objem 52 m³. V běžném domě s měrnou potřebou 50 W/m³ vychází potřebný výkon na 2 600 W, tedy 2,6 kW. V zatepleném domě nebo novostavbě s hodnotou 40 W/m³ stačí 2 080 W, u staršího nezatepleného domu s 65 W/m³ je potřeba 3 380 W. Rozdíl mezi nejlepším a nejhorším zateplením je tedy více než 60 procent výkonu." } },
      { "@type": "Question", "name": "Kolik článků radiátoru odpovídá výkonu 2 000 W?", "acceptedAnswer": { "@type": "Answer", "text": "Kalkulačka počítá orientačně se 150 W na jeden článek, takže 2 000 W znamená přibližně 14 článků. Jde o hrubý odhad pro klasický litinový nebo článkový radiátor o výšce okolo 600 mm. Skutečný výkon článku se liší podle výšky, hloubky a materiálu — u nízkých článků klesá ke 100 W, u vysokých hliníkových stoupá nad 200 W. U deskových radiátorů se místo článků volí typ a délka podle katalogové tabulky výrobce." } },
      { "@type": "Question", "name": "Jaký výkon radiátoru do koupelny?", "acceptedAnswer": { "@type": "Answer", "text": "Koupelna se vytápí na 24 °C místo běžných 20 °C, proto kalkulačka přidává k výkonu 30 procent. Koupelna 6 m² s výškou 2,6 metru má objem 15,6 m³, v běžném domě tedy 780 W navýšených na přibližně 1 014 W. Protože se v koupelně často suší prádlo a žebříkový radiátor bývá z estetických důvodů poddimenzovaný, bývá rozumné doplnit elektrickou patronu nebo podlahové vytápění." } },
      { "@type": "Question", "name": "Co znamená teplotní spád 75/65/20 °C a proč je důležitý?", "acceptedAnswer": { "@type": "Answer", "text": "Čísla znamenají teplotu vody na vstupu do radiátoru, teplotu na výstupu a teplotu v místnosti. Katalogový výkon radiátoru platí právě pro tyto podmínky. Pokud topíte tepelným čerpadlem se spádem 45/35 °C, je rozdíl teplot mezi vodou a vzduchem mnohem menší a reálný výkon radiátoru klesá na 40 až 50 procent katalogové hodnoty. Proto se k nízkoteplotním zdrojům volí výrazně větší radiátory nebo podlahové vytápění." } },
      { "@type": "Question", "name": "Může být radiátor příliš velký?", "acceptedAnswer": { "@type": "Answer", "text": "Mírná rezerva 10 až 20 procent je žádoucí, protože umožní rychlejší zátop a provoz s nižší teplotou vody, což zvyšuje účinnost kondenzačního kotle i tepelného čerpadla. Výrazné předimenzování ale vede k tomu, že termostatická hlavice pracuje v krajní poloze, teplota v místnosti kolísá a u kotlů dochází k častému taktování. Zásahy do topné soustavy — výměnu radiátoru, přepojení rozvodů i nové hydraulické vyvážení — proto přenechte vytápěcí firmě." } }
    ]
  }, {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
      { "@type": "ListItem", "position": 2, "name": "Kalkulačky", "item": "https://www.domovniguru.cz/kalkulacky" },
      { "@type": "ListItem", "position": 3, "name": "Výkon radiátoru", "item": "https://www.domovniguru.cz/kalkulacky/vykon-radiatoru" }
    ]
  }]
};

export default function VykonRadiatoruPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Výkon radiátoru</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Jaký výkon radiátoru potřebuji?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej rozměry místnosti, stav zateplení domu a typ místnosti — kalkulačka spočítá potřebný výkon radiátoru ve wattech i orientační počet článků.</p>

        <VykonRadiatoruCalculator />
        <AffiliateCTA merchant="naradi" text="Vybrat radiátor a nářadí" />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Jak správně dimenzovat výkon radiátoru</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Výkon radiátoru se nejčastěji odhaduje podle objemu vytápěné místnosti a měrné tepelné potřeby, která závisí na kvalitě zateplení. U novostaveb a zateplených domů si vystačíte přibližně se 40 W na krychlový metr, u běžných domů počítejte s 50 W/m³ a u starších nezateplených budov s okny se špatnou těsností klidně 65 W/m³ i více. Přesný tepelný výpočet podle normy zohledňuje i orientaci ke světovým stranám, plochu oken a počet ochlazovaných stěn — kalkulačka proto slouží k rychlé orientaci, ne k projektu vytápění.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Nezapomeňte na typ místnosti. Koupelna se vytápí na vyšší teplotu (často 24 °C místo 20 °C), a proto potřebuje výkon navýšit zhruba o 30 %. Rohové a severní místnosti mají více ochlazovaných stěn a nedostatek slunečního zisku, takže je rozumné přidat okolo 15 %. Naopak vnitřní místnosti obklopené vytápěnými prostory si vystačí s menším výkonem.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300 }}>
            Pozor na teplotní spád. Katalogový výkon radiátorů se udává pro spád 75/65/20 °C, tedy horkou vodu z klasického kotle. Pokud topíte tepelným čerpadlem nebo kondenzačním kotlem s nižší teplotou vody (např. 55/45 °C), reálný výkon radiátoru klesá klidně o třetinu. V takovém případě volte radiátor s výraznou rezervou nebo větší teplosměnnou plochu.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Jak se výpočet dělá</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Kalkulačka pracuje s objemovou metodou, v praxi nejrozšířenější. Vzorec je: výkon ve wattech = plocha × výška stropu × měrná tepelná potřeba × koeficient místnosti. Měrná potřeba je 40 W/m³ pro novostavbu nebo zateplený dům, 50 W/m³ pro běžný dům a 65 W/m³ pro starší nezateplenou budovu. Koeficient je 1,0 pro běžnou místnost, 1,15 pro rohovou či severní a 1,3 pro koupelnu, kde se topí na vyšší teplotu.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Konkrétní příklad: ložnice o ploše 20 m² s výškou stropu 2,6 metru má objem 52 m³. V běžném domě s měrnou potřebou 50 W/m³ a bez navýšení za typ místnosti vychází potřebný výkon 52 × 50 × 1,0 = 2 600 W, tedy 2,6 kW. Kalkulačka k tomu dopočítá orientační počet článků — dělí výsledek hodnotou 150 W na článek a zaokrouhluje nahoru, takže ukáže 18 článků. Kdyby šlo o rohovou místnost, výkon by stoupl na 2 990 W, a kdyby stejná místnost byla ve starém nezatepleném domě, vyšlo by 3 380 W.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Z toho je vidět, co s výsledkem hýbe nejvíc. Zateplení mění potřebný výkon o desítky procent a výška stropu působí přímo proporčně — místnost se stropem 3,2 metru potřebuje o pětinu více než standardních 2,6 metru. Objemová metoda je ale záměrně hrubá: nerozlišuje počet ani orientaci oken a nezohledňuje, kolik stěn sousedí s nevytápěným prostorem. Pro výměnu jednoho radiátoru to stačí, pro projekt nové otopné soustavy je potřeba výpočet tepelných ztrát podle normy ČSN EN 12831.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Nejčastější chyby</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Nesprávně dimenzovaný radiátor se pozná až v mrazech, kdy už se s tím nedá nic dělat bez bourání. Vyplatí se vyhnout těmto chybám:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Ignorovaný teplotní spád.</strong> Nejčastější a nejdražší chyba. Radiátor vybraný podle katalogového výkonu pro 75/65/20 °C dá při provozu tepelného čerpadla se spádem 45/35 °C jen zhruba polovinu. Vždy hledejte v katalogu tabulku pro spád, se kterým váš zdroj skutečně pracuje.</li>
            <li><strong>Výkon podle plochy místo objemu.</strong> Pravidlo „100 W na metr čtvereční“ selže všude, kde není strop ve výšce 2,6 metru — ve staré zástavbě se tím místnost nedotopí.</li>
            <li><strong>Zakrytý radiátor.</strong> Dekorativní kryt, dlouhá záclona nebo nábytek těsně před tělesem snižují skutečný výkon o 10 až 20 procent.</li>
            <li><strong>Radiátor na nesprávném místě.</strong> Pod oknem vytváří teplou clonu, která brání padání ochlazeného vzduchu do místnosti. Po přesunu na vnitřní stěnu zůstává u okna chladno i při vyšším výkonu.</li>
            <li><strong>Výměna jediného radiátoru bez vyvážení.</strong> Nový, výkonnější radiátor si vezme více vody a ochudí zbytek soustavy. Po každé výměně je potřeba znovu nastavit ventily.</li>
            <li><strong>Hrubé předimenzování „pro jistotu“.</strong> Rezerva 10 až 20 procent je v pořádku, dvojnásobek už vede ke kolísání teploty a taktování kotle.</li>
          </ul>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            <strong>Bezpečnostní poznámka:</strong> jakýkoli zásah do topné soustavy — vypuštění vody, přepojení rozvodů, pájení nebo tlakování — patří do rukou odborníka s příslušným oprávněním. Platí to dvojnásob u plynových kotlů, kde je revize podmínkou záruky i pojištění.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Co ještě budete potřebovat</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Samotný radiátor je jen část nákladů. K výměně nebo doplnění otopného tělesa patří i tyto položky, ceny jsou orientační včetně DPH:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Deskový radiátor</strong> typ 22 o výkonu 1 500 až 2 500 W: 2 500 až 6 000 Kč podle délky a výrobce. Designový nebo koupelnový žebřík 3 000 až 12 000 Kč.</li>
            <li><strong>Termostatická hlavice</strong> 300 až 700 Kč, programovatelná elektronická 800 až 2 500 Kč. Přednastavitelný ventil s připojovacím šroubením 600 až 1 500 Kč.</li>
            <li><strong>Radiátorové připojení</strong> — rohový nebo přímý H-blok pro spodní připojení 800 až 2 000 Kč, konzole a držáky 300 až 900 Kč.</li>
            <li><strong>Materiál na rozvody</strong> — měděná nebo plastová trubka 80 až 200 Kč/m, lisovací či svěrné fitinky 60 až 200 Kč za kus, odvzdušňovací ventil a zátky okolo 150 Kč.</li>
            <li><strong>Nářadí</strong> — hasák, montážní klíče, vrtačka s příklepem na konzole, vodováha. Lisovací kleště na měď se půjčují za 400 až 800 Kč na den.</li>
            <li><strong>Práce vytápěcí firmy</strong> — výměna jednoho radiátoru 1 500 až 3 500 Kč, hydraulické vyvážení soustavy 2 000 až 6 000 Kč, výpočet tepelných ztrát domu 3 000 až 8 000 Kč.</li>
          </ul>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Časté otázky</h2>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jaký výkon radiátoru potřebuji na místnost 20 m²?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Při výšce stropu 2,6 metru má taková místnost objem 52 m³. V běžném domě s měrnou potřebou 50 W/m³ vychází potřebný výkon na 2 600 W, tedy 2,6 kW. V zatepleném domě nebo novostavbě s hodnotou 40 W/m³ stačí 2 080 W, u staršího nezatepleného domu s 65 W/m³ je potřeba 3 380 W. Rozdíl mezi nejlepším a nejhorším zateplením je tedy více než 60 procent výkonu.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik článků radiátoru odpovídá výkonu 2 000 W?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Kalkulačka počítá orientačně se 150 W na jeden článek, takže 2 000 W znamená přibližně 14 článků. Jde o hrubý odhad pro klasický litinový nebo článkový radiátor o výšce okolo 600 mm. Skutečný výkon článku se liší podle výšky, hloubky a materiálu — u nízkých článků klesá ke 100 W, u vysokých hliníkových stoupá nad 200 W. U deskových radiátorů se místo článků volí typ a délka podle katalogové tabulky výrobce.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jaký výkon radiátoru do koupelny?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Koupelna se vytápí na 24 °C místo běžných 20 °C, proto kalkulačka přidává k výkonu 30 procent. Koupelna 6 m² s výškou 2,6 metru má objem 15,6 m³, v běžném domě tedy 780 W navýšených na přibližně 1 014 W. Protože se v koupelně často suší prádlo a žebříkový radiátor bývá z estetických důvodů poddimenzovaný, bývá rozumné doplnit elektrickou patronu nebo podlahové vytápění.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Co znamená teplotní spád 75/65/20 °C a proč je důležitý?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Čísla znamenají teplotu vody na vstupu do radiátoru, teplotu na výstupu a teplotu v místnosti. Katalogový výkon radiátoru platí právě pro tyto podmínky. Pokud topíte tepelným čerpadlem se spádem 45/35 °C, je rozdíl teplot mezi vodou a vzduchem mnohem menší a reálný výkon radiátoru klesá na 40 až 50 procent katalogové hodnoty. Proto se k nízkoteplotním zdrojům volí výrazně větší radiátory nebo podlahové vytápění.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Může být radiátor příliš velký?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Mírná rezerva 10 až 20 procent je žádoucí, protože umožní rychlejší zátop a provoz s nižší teplotou vody, což zvyšuje účinnost kondenzačního kotle i tepelného čerpadla. Výrazné předimenzování ale vede k tomu, že termostatická hlavice pracuje v krajní poloze, teplota v místnosti kolísá a u kotlů dochází k častému taktování. Zásahy do topné soustavy — výměnu radiátoru, přepojení rozvodů i nové hydraulické vyvážení — proto přenechte vytápěcí firmě.
            </p>
          </details>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak vybrat a vyměnit radiátor", href: "/blog/jak-vybrat-a-vymenit-radiator", icon: "🔧" },
              { title: "Jak ušetřit na vytápění", href: "/blog/usetrit-na-vytapeni", icon: "💰" },
              { title: "Spotřeba dřeva a pelet", href: "/kalkulacky/spotreba-dreva-pelet", icon: "🪵" },
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
