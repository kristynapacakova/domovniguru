// ════════════════════════════════════════════════════════════════
// SOUBOR: app/kalkulacky/kolik-sadrokartonu/page.tsx
// ════════════════════════════════════════════════════════════════
import type { Metadata } from "next";
import Link from "next/link";
import SadrokartonCalculator from "@/app/components/SadrokartonCalculator";
import AffiliateCTA from "@/app/components/AffiliateCTA";

export const metadata: Metadata = {
  title: "Kalkulačka sádrokartonu 2026 – kolik desek SDK potřebuji?",
  description: "Kolik desek sádrokartonu na příčku nebo podhled? Zadej rozměry plochy – výpočet počtu SDK desek ihned. Zdarma.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-sadrokartonu" },
  openGraph: { title: "Kalkulačka sádrokartonu 2026", description: "Kolik desek sádrokartonu na příčku nebo podhled? Zadej rozměry plochy – výpočet počtu SDK desek ihned.", url: "https://www.domovniguru.cz/kalkulacky/kolik-sadrokartonu", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20s%C3%A1drokartonu%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka sádrokartonu 2026" }] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Kolik desek sádrokartonu je potřeba na 1 m² příčky?", "acceptedAnswer": { "@type": "Answer", "text": "Příčka má dvě strany, takže na 1 m² hotové stěny potřebujete 2 m² desek při jednoduchém opláštění a 4 m² při dvojitém. Kalkulačka počítá jednu plochu, kterou zadáte — u příčky proto zadejte dvojnásobek délky nebo výsledek vynásobte dvěma. U podhledu a obkladu stěny se naopak počítá jen jedna strana a výsledek se použije přímo." } },
      { "@type": "Question", "name": "Jakou tloušťku a typ SDK desky zvolit?", "acceptedAnswer": { "@type": "Answer", "text": "Standardem pro příčky i podhledy je deska 12,5 mm. Do koupelny, prádelny a kuchyňského koutu patří impregnovaná deska RH, označená zeleně. Do kotelny, garáže, k šachtám a tam, kde to předepisuje požární projekt, se používá deska RF s červeným potiskem. Tloušťka 15 mm se hodí na podhledy s větším rozpětím a na stěny, kde se požaduje lepší neprůzvučnost." } },
      { "@type": "Question", "name": "Jak spočítám počet profilů CW a UW na příčku?", "acceptedAnswer": { "@type": "Answer", "text": "Svislé profily CW se staví v osové rozteči 625 mm, takže jejich počet je délka příčky v metrech dělená 0,625 plus jeden kus na konec. Vodorovných profilů UW je potřeba dvojnásobek délky příčky v běžných metrech, protože jde na podlahu i na strop. U příčky 4 m dlouhé to znamená 8 kusů CW a 8 běžných metrů UW." } },
      { "@type": "Question", "name": "Kolik šroubů a tmelu se spotřebuje na metr čtvereční?", "acceptedAnswer": { "@type": "Answer", "text": "Při rozteči šroubů 250 mm na profilu vychází přibližně 20 až 25 šroubů TN na metr čtvereční opláštění, u podhledu o několik kusů méně. Spárovacího tmelu se spotřebuje 0,4 až 0,5 kg na metr čtvereční při tmelení spár ve dvou vrstvách, u celoplošného přetažení do kvality Q3 počítejte s dvojnásobkem. Výztužné pásky je potřeba přibližně 1,5 až 2 metry na metr čtvereční plochy." } },
      { "@type": "Question", "name": "Jakou rezervu na řezy nastavit v kalkulačce?", "acceptedAnswer": { "@type": "Answer", "text": "Pro jednoduchou rovnou příčku bez otvorů stačí 10 procent, což je i výchozí nastavení. U plochy se dveřmi, okny, šikminami nebo nišemi zvyšte rezervu na 15 procent a u podkroví s mnoha úhlovými řezy až na 20 procent. Rezerva nemá krýt jen odřezky, ale i poškozené hrany desek při manipulaci." } }
    ]
  }, {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
      { "@type": "ListItem", "position": 2, "name": "Kalkulačky", "item": "https://www.domovniguru.cz/kalkulacky" },
      { "@type": "ListItem", "position": 3, "name": "Kolik sádrokartonu", "item": "https://www.domovniguru.cz/kalkulacky/kolik-sadrokartonu" }
    ]
  }]
};

export default function KolikSadrokartonuPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Kolik sádrokartonu</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik desek sádrokartonu potřebuju?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej rozměry příčky nebo podhledu — kalkulačka přidá rezervu na řezy a řekne ti přesný počet SDK desek k nákupu.</p>

        <SadrokartonCalculator />
        <AffiliateCTA merchant="naradi" text="Nakoupit sádrokarton a profily" />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Jakou tloušťku SDK desky vybrat a jak minimalizovat odpad</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Nejběžnější sádrokartonová deska pro příčky a podhledové obklady má tloušťku 12,5 mm a rozměr 1,25 × 2,0 m nebo 1,25 × 2,6 m (plocha 2,5 resp. 3,25 m²). Pro koupelny a vlhká prostředí volte zelené desky (RH = resistance humidity) — mají hydrofobizovanou sádru a papír. Požárně odolné (červené) desky RF se používají v technických místnostech a tam, kde to předepisuje projekt. Tloušťka 15 mm se hodí pro podhledové konstrukce se zvýšeným zatížením nebo tam, kde je předepsána lepší vzduchová neprůzvučnost.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Klíčem k minimalizaci odpadu je správné naplánování kladení. Desky pokládejte vždy svisle — výška místnosti 2,5 m odpovídá desce 2,5 m, takže prořez je nulový. Vodorovné řezy jsou nutné jen v místech oken nebo při nestandardní výšce. Využijte zbytky desek pro menší plochy — doměrky nad dveřní otvory, zásuvky a rohové výplně. Odpad 10 % je realistická rezerva pro zkušené kutily, 15 % pro začátečníky.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Před montáží SDK nechte desky 24 hodin aklimatizovat v místnosti — sádrokarton je hygroskopický a reaguje na vlhkost a teplotu. Šrouby zapouštějte 0,5–1 mm pod povrch desky, nikdy ne hlouběji — jinak průrazem papírového povrchu ztratí šroub pevnost. Spáry mezi deskami přetáhněte sklotextilní síťovinou a tmelem ve dvou vrstvách. Výsledný povrch pak přebruste a nakryje se penetrací — sádrokarton je extrémně savý a bez penetrace pohltí neúměrné množství barvy.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Jak se výpočet dělá</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Logika je záměrně jednoduchá a vždy se dá přepočítat na papíře. Kalkulačka nejprve z délky a výšky určí čistou plochu, tu zvětší o zadanou rezervu a výsledek vydělí plochou jedné desky. Poslední krok se zaokrouhluje nahoru, protože desky se nekupují na půlky: vzorec tedy zní počet desek = zaokrouhleno nahoru z (délka × výška × (1 + rezerva ÷ 100) ÷ plocha desky).
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Příklad s výchozími hodnotami: příčka dlouhá 4 m a vysoká 2,5 m dává čistou plochu 10 m². Při rezervě 10 % jde o 11 m² a při desce 1,25 × 2,0 m, tedy 2,5 m², vychází 11 ÷ 2,5 = 4,4, po zaokrouhlení 5 desek. Kdybyste zadali větší desku 1,25 × 2,6 m (3,25 m²), vyjde 11 ÷ 3,25 = 3,4, tedy 4 desky — a protože se u výšky 2,5 m z každé desky odřízne 10 cm, zůstane prořez malý a nákup levnější.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Jednu věc si ale musíte dopočítat sami: kalkulačka pracuje s jednou plochou, kterou jí zadáte. Příčka má dvě strany, takže výsledek pro ni zdvojnásobte, a u dvojitého opláštění, které se používá u příček s vyššími nároky na zvukovou izolaci a na nosnost pro skříňky, jej vynásobte čtyřmi. Z našeho příkladu tak vyjde na jednostranný podhled 5 desek, na oboustrannou příčku 10 desek a na příčku s dvojitým opláštěním 20 desek.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Nejčastější chyby</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            U sádrokartonu se chyby neprojeví hned při montáži, ale až za několik měsíců — prasklinou ve spáře nebo vlnitým povrchem pod bočním světlem. Tyto se opakují nejčastěji:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Nákup materiálu jen na jednu stranu příčky.</strong> Nejdražší chyba v celém projektu je druhá cesta do hobbymarketu. Před objednávkou si ověřte, kolik stran a kolik vrstev opláštění vlastně děláte.</li>
            <li><strong>Příliš velká rozteč profilů.</strong> Rozteč CW profilů musí odpovídat šířce desky, tedy 625 mm, aby spára vždy padla na profil. Při 700 mm se deska mezi profily prohýbá a spára praská.</li>
            <li><strong>Vodorovné kladení desek na příčku.</strong> Vznikne dlouhá nepodepřená spára přes celou stěnu, navíc v úrovni opírání nábytku. Svislé kladení s prostřídáním spár o půl desky je pevnější a méně viditelné.</li>
            <li><strong>Desky dotažené na podlahu.</strong> Spodní hrana má být 10 mm nad podlahou a tato mezera se vyplní akrylem, jinak deska nasákne vlhkost z podkladu a zvlní se. Stejně tak u stropu je potřeba nechat dilataci.</li>
            <li><strong>Přetažené nebo utopené šrouby.</strong> Jakmile šroub protrhne kartón, nedrží. Používejte šroubovák s hloubkovým nástavcem a kontrolujte, že hlavička je 0,5 až 1 mm pod povrchem.</li>
            <li><strong>Vynechaná výztužná páska.</strong> Tmel sám o sobě spáru nikdy neudrží. Do první vrstvy tmelu vždy patří sklovláknitá síťovina nebo papírová páska, do rohů kovová nebo plastová rohová lišta.</li>
            <li><strong>Malování bez penetrace a bez bodového světla.</strong> Nepenetrovaný sádrokarton pohltí dvojnásobek barvy a tmelené plochy prosvítají. Povrch před malováním přesvětlete lampou z boku a dobruste, co vidíte.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Co ještě budete potřebovat</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Desky tvoří zhruba třetinu ceny konstrukce. Zbytek jsou profily, spojovací materiál a tmelení — pro orientaci v cenách roku 2026:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Deska 12,5 mm:</strong> standardní bílá 60–90 Kč/m², impregnovaná zelená RH 100–140 Kč/m², požární červená RF 120–170 Kč/m².</li>
            <li><strong>Profily:</strong> svislý CW 75 v délce 3 m za 90–140 Kč/ks, vodorovný UW 75 za 60–100 Kč/ks, u podhledu profily CD a UD plus pérové závěsy po 15–30 Kč/ks.</li>
            <li><strong>Šrouby TN 3,5 × 25 mm</strong> na jednu vrstvu desky, balení 1000 ks za 200–320 Kč, k tomu šrouby do plechu LB a hmoždinky na ukotvení UW do podlahy a stropu.</li>
            <li><strong>Spárovací tmel</strong> 25kg pytel za 300–480 Kč, finální tmel v kbelíku 15 kg za 450–700 Kč a výztužná páska 45 m za 50–90 Kč.</li>
            <li><strong>Minerální vata 50–60 mm</strong> do dutiny příčky za 100–170 Kč/m² — bez výplně má příčka neprůzvučnost jako dveře.</li>
            <li><strong>Akrylový tmel</strong> 70–120 Kč/kartuše na dilatace a rohové lišty 25–60 Kč/bm.</li>
            <li><strong>Penetrace</strong> 5 l za 300–550 Kč a brusná mřížka nebo žirafa s odsáváním, kterou lze půjčit za 300–600 Kč na den.</li>
            <li><strong>Nářadí:</strong> šroubovák s hloubkovým nástavcem 900–2500 Kč, nůžky na plech 300–600 Kč, SDK nůž, rašple a hoblík na hrany, nerezové hladítko, křížový laser nebo dlouhá vodováha, a u podhledu zvedák desek z půjčovny za 250–450 Kč/den.</li>
          </ul>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Časté otázky</h2>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik desek sádrokartonu je potřeba na 1 m² příčky?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Příčka má dvě strany, takže na 1 m² hotové stěny potřebujete 2 m² desek při jednoduchém opláštění a 4 m² při dvojitém. Kalkulačka počítá jednu plochu, kterou zadáte — u příčky proto zadejte dvojnásobek délky nebo výsledek vynásobte dvěma. U podhledu a obkladu stěny se naopak počítá jen jedna strana a výsledek se použije přímo.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jakou tloušťku a typ SDK desky zvolit?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Standardem pro příčky i podhledy je deska 12,5 mm. Do koupelny, prádelny a kuchyňského koutu patří impregnovaná deska RH, označená zeleně. Do kotelny, garáže, k šachtám a tam, kde to předepisuje požární projekt, se používá deska RF s červeným potiskem. Tloušťka 15 mm se hodí na podhledy s větším rozpětím a na stěny, kde se požaduje lepší neprůzvučnost.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jak spočítám počet profilů CW a UW na příčku?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Svislé profily CW se staví v osové rozteči 625 mm, takže jejich počet je délka příčky v metrech dělená 0,625 plus jeden kus na konec. Vodorovných profilů UW je potřeba dvojnásobek délky příčky v běžných metrech, protože jde na podlahu i na strop. U příčky 4 m dlouhé to znamená 8 kusů CW a 8 běžných metrů UW.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik šroubů a tmelu se spotřebuje na metr čtvereční?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Při rozteči šroubů 250 mm na profilu vychází přibližně 20 až 25 šroubů TN na metr čtvereční opláštění, u podhledu o několik kusů méně. Spárovacího tmelu se spotřebuje 0,4 až 0,5 kg na metr čtvereční při tmelení spár ve dvou vrstvách, u celoplošného přetažení do kvality Q3 počítejte s dvojnásobkem. Výztužné pásky je potřeba přibližně 1,5 až 2 metry na metr čtvereční plochy.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jakou rezervu na řezy nastavit v kalkulačce?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Pro jednoduchou rovnou příčku bez otvorů stačí 10 procent, což je i výchozí nastavení. U plochy se dveřmi, okny, šikminami nebo nišemi zvyšte rezervu na 15 procent a u podkroví s mnoha úhlovými řezy až na 20 procent. Rezerva nemá krýt jen odřezky, ale i poškozené hrany desek při manipulaci.
            </p>
          </details>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Sádrokartonová příčka – postup krok za krokem", href: "/blog/sadrokarton-pricka-postup", icon: "🧱" },
              { title: "Jak plánovat rekonstrukci bytu", href: "/blog/planovani-rekonstrukce-bytu", icon: "📋" },
              { title: "Kalkulačka barvy na zeď", href: "/kalkulacky/kolik-barvy", icon: "🪣" },
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
