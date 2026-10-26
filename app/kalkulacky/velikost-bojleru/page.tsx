import type { Metadata } from "next";
import Link from "next/link";
import BojlerCalculator from "@/app/components/BojlerCalculator";
import AffiliateCTA from "@/app/components/AffiliateCTA";

export const metadata: Metadata = {
  title: "Kalkulačka velikosti bojleru 2026 – kolik litrů potřebuji?",
  description: "Jaký objem bojleru vybrat? Zadej počet osob a délku sprchování – doporučení velikosti bojleru okamžitě. 80 až 200 litrů.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/velikost-bojleru" },
  openGraph: { title: "Kalkulačka velikosti bojleru 2026", description: "Jaký objem bojleru vybrat? Zadej počet osob a délku sprchování – doporučení velikosti bojleru okamžitě. 80 až 200 litrů.", url: "https://www.domovniguru.cz/kalkulacky/velikost-bojleru", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20velikosti%20bojleru%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka velikosti bojleru 2026" }] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Jaký objem bojleru potřebuje čtyřčlenná rodina?", "acceptedAnswer": { "@type": "Answer", "text": "Při osmiminutové sprše na osobu a den vychází denní potřeba na 160 litrů teplé vody, takže vyhovuje bojler 200 litrů. Pokud se v rodině sprchuje kratší dobu, například pět minut, spadne potřeba na 100 litrů a stačí stolitrový zásobník. Rozhoduje tedy spíš délka sprchování a počet koupelí ve vaně než samotný počet členů domácnosti." } },
      { "@type": "Question", "name": "Jak kalkulačka počítá denní potřebu teplé vody?", "acceptedAnswer": { "@type": "Answer", "text": "Sprchování se počítá jako počet osob krát délka sprchy v minutách krát pět litrů teplé vody na minutu. Ke sprchám se přičte spotřeba vany: jedna koupel odpovídá sto litrům a týdenní počet koupelí se dělí sedmi, aby vznikl denní průměr. Výsledek se nakonec zaokrouhlí nahoru na nejbližší běžně prodávaný objem, tedy 80, 100, 120, 150 nebo 200 litrů." } },
      { "@type": "Question", "name": "Je lepší menší bojler, nebo větší s rezervou?", "acceptedAnswer": { "@type": "Answer", "text": "Zbytečně velký zásobník drží v teple vodu, kterou nikdo nespotřebuje, a každý den platíte za udržovací ztráty bez jakéhokoli užitku. Příliš malý bojler naopak vyčerpáte před koncem ranního provozu a dohřev padne do vysokého tarifu. Rozumné je zvolit objem, který denní potřebu pokryje s malou rezervou, a u větších domácností sáhnout po modelu se dvěma topnými tělesy." } },
      { "@type": "Question", "name": "Kolik stojí ohřev vody v bojleru za měsíc?", "acceptedAnswer": { "@type": "Answer", "text": "Ohřev sta litrů vody z deseti na pětapadesát stupňů spotřebuje přibližně 5,2 kWh. Domácnost se denní potřebou 160 litrů tedy spotřebuje asi 8,4 kWh denně, což je okolo 250 kWh za měsíc. Při ceně tří korun za kilowatthodinu v nízkém tarifu jde o přibližně 750 Kč měsíčně, k nimž je třeba přičíst udržovací ztráty zásobníku." } },
      { "@type": "Question", "name": "Proč se má bojler jednou za měsíc přehřát na 70 °C?", "acceptedAnswer": { "@type": "Answer", "text": "Bakterie legionelly se množí ve vodě o teplotě přibližně 30 až 45 stupňů, tedy právě v pásmu, na které se bojlery kvůli úsporám často nastavují. Jednorázový ohřev na sedmdesát stupňů jednou měsíčně bakterie v zásobníku spolehlivě zlikviduje. Při takovém cyklu je rozumné zkontrolovat také funkci pojistného ventilu a nechat vodu po přehřátí odtéct do odpadu, aby nedošlo k opaření." } }
    ]
  }, {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
      { "@type": "ListItem", "position": 2, "name": "Kalkulačky", "item": "https://www.domovniguru.cz/kalkulacky" },
      { "@type": "ListItem", "position": 3, "name": "Velikost bojleru", "item": "https://www.domovniguru.cz/kalkulacky/velikost-bojleru" }
    ]
  }]
};

export default function VelikostBojleruPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Velikost bojleru</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Jaký objem bojleru potřebuju?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej počet osob v domácnosti a zvyky při koupání — kalkulačka ti doporučí správný objem zásobníkového ohřívače vody.</p>

        <BojlerCalculator />
        <AffiliateCTA merchant="naradi" text="Vybrat bojler" />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Jak vybrat správný bojler – typy, velikosti a tipy</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Zásobníkový ohřívač vody (bojler) je nejrozšířenějším způsobem přípravy teplé vody v bytech bez centrálního zásobování. Základní parametr při výběru je objem zásobníku v litrech — ten musí pokrýt denní spotřebu celé domácnosti. Orientačně se uvádí 40–60 litrů na osobu při standardním sprchování, ale skutečná potřeba závisí na délce sprch, frekvenci koupelí ve vaně a počtu odběrných míst. Standardní velikosti jsou 80, 100, 120, 150 a 200 litrů — pro 1–2 osoby obvykle stačí 80–100 l, pro 3–4 osoby 120–150 l, pro 5 a více osob nebo domy s vanou 150–200 l.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Bojlery se dělí na přímotopné (elektrické topné těleso uvnitř zásobníku) a nepřímotopné (ohřev přes výměník napojený na plynový kotel nebo tepelné čerpadlo). Přímotopný bojler je jednoduší na instalaci a vhodný pro byty bez plynového kotle — tarif nočního vytápění (NT) výrazně snižuje provozní náklady. Nepřímotopný bojler je úspornější tam, kde máte plynový kotel nebo tepelné čerpadlo — ohřev přes výměník je efektivnější než elektrické topné těleso. Moderní tepelná čerpadla na ohřev vody (heat pump water heater) mají COP 2–3, tedy ohřejí vodu 2–3krát levněji než přímotop.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Umístění bojleru ovlivňuje komfort a tepelné ztráty. Čím blíže k odběrným místům (koupelna, kuchyň), tím méně vody teče do odpadu při čekání na teplou vodu. Stropní montáž v koupelně šetří podlahovou plochu. Tepelná izolace zásobníku je u moderních bojlerů standardem — staré modely s tenkou izolací mohly ztrácet přes 2 kWh/den jen čekáním. Pravidelná desinfekce při 70 °C (jednou měsíčně) eliminuje nebezpečné bakterie legionelly, které se množí při teplotách 30–45 °C.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Jak se výpočet dělá</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Kalkulačka nevychází z tabulkového pravidla „tolik litrů na osobu", ale sčítá skutečné odběry teplé vody během jednoho dne. Sprchování se počítá jako počet osob krát délka sprchy v minutách krát pět litrů teplé vody na každou minutu — pět litrů je obvyklý odtok teplé složky u běžné sprchové hlavice po smíchání se studenou vodou. Koupele ve vaně se zadávají za celý týden, protože se obvykle neopakují denně: jedna koupel odpovídá sto litrům a týdenní počet se dělí sedmi, aby vznikl denní průměr.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Konkrétní příklad: tříčlenná domácnost, kde se každý sprchuje osm minut a vana se použije dvakrát týdně. Sprchy dají 3 × 8 × 5 = 120 litrů, vana přidá 2 × 100 ÷ 7 = 29 litrů, denní potřeba je tedy 149 litrů. Kalkulačka výsledek zaokrouhlí nahoru na nejbližší běžně prodávaný objem a doporučí zásobník 150 litrů. Kdyby se sprchovalo deset minut, potřeba vyroste na 179 litrů a doporučení se posune na dvousetlitrový model.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Výsledek pracuje s řadou 80, 100, 120, 150 a 200 litrů, protože to jsou objemy, které se v Česku skutečně prodávají. Zaokrouhlení nahoru je zároveň přirozenou rezervou: zásobník se nikdy nevyčerpá do poslední kapky, protože ke dnu se přes den přimíchává dotékající studená voda a poslední desetina objemu už není použitelně teplá. Pokud vaše denní potřeba přesáhne dvě stě litrů, nemá smysl hledat větší zásobník — lepší je rozdělit ohřev na dva body nebo doplnit průtokový ohřívač u vzdáleného odběrného místa.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Nejčastější chyby</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Bojler se kupuje jednou za patnáct let a chyby při výběru se splácejí celou tu dobu na účtu za elektřinu:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Objem „s velkou rezervou".</strong> Dvousetlitrový zásobník pro dvoučlennou domácnost udržuje v teple vodu, kterou nikdo nespotřebuje. Udržovací ztráty platíte každý den v roce bez jakéhokoli užitku.</li>
            <li><strong>Příliš malý bojler k vaně.</strong> Jedna koupel spotřebuje sto litrů teplé vody. Osmdesátilitrový zásobník vanu nenaplní ani jednou a dohřev padne do vysokého tarifu.</li>
            <li><strong>Nastavená teplota 75 °C.</strong> Vyšší teplota neznamená víc teplé vody, jen vyšší ztráty a rychlejší zavápnění topného tělesa. Běžný provoz patří na 55 až 60 °C.</li>
            <li><strong>Neměněná magneziová anoda.</strong> Anoda chrání nádobu proti korozi a vydrží dva až tři roky. Zanedbaná kontrola znamená provrtanou nádobu a výměnu celého bojleru.</li>
            <li><strong>Bojler daleko od koupelny.</strong> Každý metr potrubí znamená litry vody, které před sprchou odtečou do odpadu. U delších rozvodů se vyplatí cirkulační okruh s časovačem.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Na co myslet před pořízením</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Cena samotného zásobníku je jen částí nákladů. Před poptáním instalace si projděte následující body a orientační ceny:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Samotný bojler.</strong> Elektrický zásobník 120 litrů stojí 5 000 až 9 000 Kč, dvousetlitrový 8 000 až 14 000 Kč. Nepřímotopný s výměníkem pro kotel nebo tepelné čerpadlo začíná okolo 12 000 Kč.</li>
            <li><strong>Instalace a připojení.</strong> Montáž na stěnu s napojením na rozvody a jištěný přívod vyjde na 3 000 až 7 000 Kč podle délky potrubí a nutnosti nových trubek.</li>
            <li><strong>Pojistný a redukční ventil.</strong> Povinná výstroj zásobníku, 500 až 1 500 Kč. Při tlaku ve vodovodu nad 6 barů je redukční ventil nezbytný, jinak pojistný ventil trvale odkapává.</li>
            <li><strong>Nosnost stěny.</strong> Plný stolitrový bojler váží přes 130 kg. Na sádrokarton nebo dutou příčku jej nelze zavěsit bez průvlaků — jinak zvolte stacionární model na podlahu.</li>
            <li><strong>Nízký tarif.</strong> Dvoutarifní sazba s nočním proudem a spínacím prvkem HDO snižuje náklady na ohřev o třetinu. Změna sazby je u distributora zdarma, ale váže se na podmínky odběru.</li>
            <li><strong>Tepelné čerpadlo na ohřev vody.</strong> Zásobník s integrovaným čerpadlem stojí 25 000 až 45 000 Kč, ale s COP okolo 3 ohřeje vodu třikrát levněji než topné těleso a vejde se do dotačních programů.</li>
            <li><strong>Tloušťka izolace.</strong> Moderní zásobník s pěti centimetry polyuretanu ztrácí kolem 1 kWh denně, starý model s tenkou izolací přes 2 kWh. Rozdíl dělá na účtu okolo tisíce korun za rok.</li>
          </ul>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Časté otázky</h2>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jaký objem bojleru potřebuje čtyřčlenná rodina?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Při osmiminutové sprše na osobu a den vychází denní potřeba na 160 litrů teplé vody, takže vyhovuje bojler 200 litrů. Pokud se v rodině sprchuje kratší dobu, například pět minut, spadne potřeba na 100 litrů a stačí stolitrový zásobník. Rozhoduje tedy spíš délka sprchování a počet koupelí ve vaně než samotný počet členů domácnosti.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jak kalkulačka počítá denní potřebu teplé vody?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Sprchování se počítá jako počet osob krát délka sprchy v minutách krát pět litrů teplé vody na minutu. Ke sprchám se přičte spotřeba vany: jedna koupel odpovídá sto litrům a týdenní počet koupelí se dělí sedmi, aby vznikl denní průměr. Výsledek se nakonec zaokrouhlí nahoru na nejbližší běžně prodávaný objem, tedy 80, 100, 120, 150 nebo 200 litrů.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Je lepší menší bojler, nebo větší s rezervou?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Zbytečně velký zásobník drží v teple vodu, kterou nikdo nespotřebuje, a každý den platíte za udržovací ztráty bez jakéhokoli užitku. Příliš malý bojler naopak vyčerpáte před koncem ranního provozu a dohřev padne do vysokého tarifu. Rozumné je zvolit objem, který denní potřebu pokryje s malou rezervou, a u větších domácností sáhnout po modelu se dvěma topnými tělesy.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik stojí ohřev vody v bojleru za měsíc?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Ohřev sta litrů vody z deseti na pětapadesát stupňů spotřebuje přibližně 5,2 kWh. Domácnost se denní potřebou 160 litrů tedy spotřebuje asi 8,4 kWh denně, což je okolo 250 kWh za měsíc. Při ceně tří korun za kilowatthodinu v nízkém tarifu jde o přibližně 750 Kč měsíčně, k nimž je třeba přičíst udržovací ztráty zásobníku.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Proč se má bojler jednou za měsíc přehřát na 70 °C?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Bakterie legionelly se množí ve vodě o teplotě přibližně 30 až 45 stupňů, tedy právě v pásmu, na které se bojlery kvůli úsporám často nastavují. Jednorázový ohřev na sedmdesát stupňů jednou měsíčně bakterie v zásobníku spolehlivě zlikviduje. Při takovém cyklu je rozumné zkontrolovat také funkci pojistného ventilu a nechat vodu po přehřátí odtéct do odpadu, aby nedošlo k opaření.
            </p>
          </details>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak správně topit – průvodce pro každý kotel", href: "/blog/jak-spravne-topit", icon: "🔥" },
              { title: "Tepelné čerpadlo – kompletní průvodce 2026", href: "/blog/tepelne-cerpadlo-pruvodce", icon: "♻️" },
              { title: "Kalkulačka spotřeby plynu", href: "/kalkulacky/spotreba-plynu", icon: "🔥" },
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
