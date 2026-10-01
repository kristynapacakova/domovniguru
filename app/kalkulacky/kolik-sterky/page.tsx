// ════════════════════════════════════════════════════════════════
// SOUBOR: app/kalkulacky/kolik-sterky/page.tsx
// ════════════════════════════════════════════════════════════════
import type { Metadata } from "next";
import Link from "next/link";
import SterkaCalculator from "@/app/components/SterkaCalculator";
import AffiliateCTA from "@/app/components/AffiliateCTA";

export const metadata: Metadata = {
  title: "Kalkulačka stěrky 2026 – kolik pytlů tmelu potřebuji?",
  description: "Kolik kg stěrky nebo tmelu na zeď? Zadej plochu a tloušťku vrstvy – výpočet okamžitě. Finální štuková stěrka: 1–3 mm.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-sterky" },
  openGraph: { title: "Kalkulačka stěrky 2026", description: "Kolik kg stěrky nebo tmelu na zeď? Zadej plochu a tloušťku vrstvy – výpočet okamžitě.", url: "https://www.domovniguru.cz/kalkulacky/kolik-sterky", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20st%C4%9Brky%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka stěrky 2026" }] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Kolik kg stěrky potřebuji na 1 m²?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rozhoduje tloušťka vrstvy. Jemná štuková stěrka má spotřebu přibližně 1–1,2 kg na m² a milimetr tloušťky, takže při běžné finální vrstvě 1–2 mm vychází 1–2,4 kg/m². Hrubší vyrovnávací stěrky mají 1,4–1,8 kg na m² a milimetr, protože obsahují hrubší plnivo. Při srovnávání nerovností 10 mm tak potřebujete i 14–18 kg na m². Přesnou hodnotu najdete vždy na pytli pod údajem spotřeba."
          }
        },
        {
          "@type": "Question",
          "name": "Jaký je rozdíl mezi stěrkou, tmelem a štukem?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Stěrka je materiál pro celoplošné srovnání povrchu ve vrstvě od desetin milimetru do několika centimetrů. Tmel slouží k lokálním opravám – díry po hmoždinkách, praskliny, spáry sádrokartonu – a nanáší se bodově špachtlí. Štuk je tradiční označení pro jemnou finální vrstvu z vápna nebo sádry o tloušťce 1–3 mm, dnes se prakticky překrývá s pojmem finální stěrka. V obchodech se názvy volně míchají, proto se vždy řiďte zrnitostí a doporučenou tloušťkou na obalu."
          }
        },
        {
          "@type": "Question",
          "name": "Kolik vrstev stěrky je potřeba na hladkou zeď?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Na rovné, jen mírně zdrsnělé omítce stačí jedna vrstva 1–2 mm a přebroušení. U běžné starší omítky s drobnými nerovnostmi se dělají dvě vrstvy po 1–2 mm křížem, protože druhá vrstva zaplní stopy po hladítku z první. Pro povrch kvality Q4 (bez stínů pod bočním světlem, vhodný pro lesklé nátěry) se nanáší tři vrstvy a brousí se bruskou s odsáváním. Každá vrstva musí zaschnout, než přijde další."
          }
        },
        {
          "@type": "Question",
          "name": "Kolik stojí stěrkování stěn za m²?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Materiál je levný: pytel 20–25 kg jemné stěrky stojí 250–500 Kč, tedy při vrstvě 1–2 mm přibližně 15–40 Kč/m². Hlavní nákladovou položkou je práce – řemeslník si za celoplošné stěrkování a přebroušení účtuje 180–350 Kč/m² podle počtu vrstev a požadované kvality povrchu. U kvality Q4 se sazby dostávají i nad 400 Kč/m². Svépomocí tedy ušetříte nejvíc právě u stěrkování."
          }
        },
        {
          "@type": "Question",
          "name": "Musí se stěrka penetrovat před malováním?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ano, prakticky vždy. Stěrkovaný a přebroušený povrch je velmi savý a plný mikroskopického prachu z broušení. Bez penetrace barva nasákne nerovnoměrně, nátěr bude matný s flekatými místy a spotřeba barvy vzroste o 20–40 %. Postup je: přebrousit, odsát prach, penetrovat a nechat 4–24 hodin vyzrát, teprve pak malovat. Penetrovat se musí i před stěrkováním, pokud je podkladem nová omítka nebo sádrokarton."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz/" },
        { "@type": "ListItem", "position": 2, "name": "Kalkulačky", "item": "https://www.domovniguru.cz/kalkulacky" },
        { "@type": "ListItem", "position": 3, "name": "Kolik stěrky", "item": "https://www.domovniguru.cz/kalkulacky/kolik-sterky" }
      ]
    }
  ]
};

export default function KolikSterkyPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Kolik stěrky</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik stěrky a tmelu potřebuju?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej plochu stěn, tloušťku vrstvy a spotřebu materiálu — kalkulačka ti okamžitě spočítá přesné množství v kilogramech a počet pytlů.</p>

        <SterkaCalculator />
        <AffiliateCTA merchant="naradi" text="Nakoupit stěrku a nářadí" />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Druhy stěrek a štuků – jak vybrat správný materiál</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Stěrky a tmely pro interiéry se rozdělují podle účelu a zrnitosti. Jemná finální štuková stěrka (zrnitost 0–0,3 mm) se nanáší v tloušťce 1–3 mm a dává povrchu hladký, malírsky připravený povrch — pracuje se s ní stěrkou do šířky 50–80 cm a brousí se po vyschnutí. Hrubší vyrovnávací stěrka (zrnitost do 1–3 mm) slouží ke srovnání nerovností 5–15 mm a nanáší se ocelovým hladítkem nebo strojem. Pro opravy děr a prasklin se používají speciální tmely — sádrové (pro vnitřní použití, rychlé zasychání) nebo polymerové (pro pohyblivé spáry a přechody mezi materiály).
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Správná příprava podkladu je klíčem k trvanlivosti stěrkování. Podklad musí být čistý, zbavený prachu a uvolněných částí, mírně vlhký ale ne promočený. Savé povrchy (nová omítka, sádrokarton) penetrujte nejméně 24 hodin před stěrkováním. Stěrku míchejte dle návodu výrobce — příliš řídká stěrka steče, příliš hustá se špatně roztahuje. Po nanesení vždy stahujte přebytky rovným hladítkem — zbytečné tlouštky prodražují projekt a zhoršují výsledný povrch.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Mezi vrstvami stěrky nechte pokaždé minimálně 4–6 hodin sušení (sádrové tmely tuhnou za 30–60 minut, polymerové za 4–24 hodin). Finální vrstvu přebruste brusným papírem 120 nebo 150 a odstraňte prach. Pak penetrujte a malujte — stěrkovaný povrch bez penetrace pohltí daleko více barvy. Pokud plánujete tapetovat, stačí jedna rovná vrstva stěrky bez broušení, tapeta drobné nerovnosti skryje.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Jak se výpočet dělá</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Spotřeba stěrky se počítá podle vzorce <strong>kilogramy = plocha v m² × tloušťka v mm × spotřeba v kg/m²/mm</strong>. Výsledek pak vydělíte hmotností pytle a zaokrouhlíte nahoru. Konkrétně: stěna 30 m², finální štuková stěrka v tloušťce 2 mm a spotřeba 1,1 kg/m²/mm dávají 30 × 2 × 1,1 = 66 kg, tedy tři pytle po 25 kg. Hodnota spotřeby je vždy uvedena na obalu — u jemných štuků bývá 0,9–1,2 kg, u hrubších vyrovnávacích stěrek 1,4–1,8 kg na m² a milimetr.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Největší neznámou je tloušťka vrstvy. Nejde o konstantu, ale o průměr: stěrka zaplňuje prohlubně a na vrcholech nerovností je téměř nulová. Praktický postup je přiložit ke stěně dvoumetrovou latu a změřit největší mezeru. Je-li mezera 5 mm, průměrná tloušťka vrstvy bude přibližně polovina, tedy 2–3 mm. Pro samotné vyhlazení už rovného povrchu počítejte 1–2 mm, pro srovnání patrných vln 3–6 mm, a při rozdílech nad 10 mm už sahejte po vyrovnávací stěrce nebo rovnou po nové omítce — stěrkovat deset milimetrů jemným štukem je drahé a náchylné k praskání.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            K vypočtenému množství vždy přidejte rezervu 10–15 %. Část materiálu zůstane na hladítku a ve vaničce, část spadne na podlahu a při broušení se odstraní 10–20 % nanesené vrstvy. Pokud plánujete dvě vrstvy, nepočítejte je jako dvojnásobek — druhá vrstva je zpravidla tenčí, protože už jen dorovnává stopy po hladítku, takže reálná spotřeba je asi 1,6násobek jedné vrstvy.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Nejčastější chyby</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Stěrkování je nejméně odpustná část přípravy stěn — každá chyba je po vymalování vidět v bočním světle. Těmto se vyhněte:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Příliš silná vrstva na jeden záběr.</strong> Jemná stěrka nanesená v 5 mm místo doporučených 1–3 mm nevyschne rovnoměrně a popraská do mapy jemných trhlin. Dodržujte maximální tloušťku z technického listu.</li>
            <li><strong>Míchání po částech a „na odhad“.</strong> Každá nová záměs s jiným množstvím vody má jinou konzistenci i barvu po zaschnutí. Měřte vodu odměrkou a vždy ji dávejte do kbelíku první, pak sypte prášek.</li>
            <li><strong>Použití zatuhlé směsi.</strong> Sádrová stěrka má zpracovatelnost 30–60 minut. Rozmíchání tuhnoucí směsi s dalším přídavkem vody nevratně zničí její pevnost — vrstva se pak po zaschnutí drolí a padá.</li>
            <li><strong>Nepenetrovaný savý podklad.</strong> Nová omítka či sádrokarton vytáhne ze stěrky vodu dřív, než zreaguje. Výsledkem je prašný povrch bez pevnosti.</li>
            <li><strong>Broušení bez odsávání a bez respirátoru.</strong> Z 30 m² stěny se vybrousí několik kilogramů jemného prachu, který se dostane do celého bytu a do plic. Bruska s odsáváním nebo alespoň respirátor FFP2 je nutnost.</li>
            <li><strong>Brousí se příliš brzy.</strong> Nedoschlá stěrka se maže a brusivo se okamžitě zalepí. Počkejte na světlý, jednolitý odstín celé plochy.</li>
            <li><strong>Chybějící kontrola světlem.</strong> Hotový povrch posviťte lampou téměř rovnoběžně se stěnou. Teprve tak uvidíte vlny a stopy hladítka, které po vymalování nelze opravit bez nového stěrkování.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Co ještě budete potřebovat</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Stěrkování je o nářadí víc než o materiálu. Krátkou špachtlí se velká plocha narovnat nedá, proto se investice do širokého hladítka vrátí hned na první stěně.
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Nerezové hladítko 40–60 cm</strong> na plochu a menší 15–20 cm na kouty a detaily (600–1 500 Kč za sadu).</li>
            <li><strong>Míchadlo do vrtačky a kbelík 20–30 l</strong> — ručně se stěrka nikdy nerozmíchá bez hrudek (míchadlo 250–700 Kč).</li>
            <li><strong>Hliníková lata 2 m</strong> na kontrolu rovinnosti před i po stěrkování (400–900 Kč).</li>
            <li><strong>Brusná deska s držadlem nebo excentrická bruska s odsáváním</strong> a papíry P120, P150 a P180 (ruční deska od 300 Kč, bruska na stěny od 2 500 Kč, půjčovna 300–600 Kč/den).</li>
            <li><strong>Penetrace</strong> před stěrkováním na savý podklad i po přebroušení před malováním — počítejte 30–50 Kč/m² na každou fázi.</li>
            <li><strong>Výztužná páska nebo perlinka</strong> na spáry sádrokartonu, přechody mezi materiály a praskliny, které se vracejí (50–200 Kč za roli).</li>
            <li><strong>Rohové lišty a začišťovací profily</strong> pro ostré a trvanlivé hrany u okenních ostění (30–80 Kč/m).</li>
            <li><strong>Krycí fólie, lepicí páska a reflektor</strong> — fólií oddělte zbytek bytu od prachu, lampou kontrolujte rovinnost povrchu.</li>
            <li><strong>Respirátor FFP2 a brýle</strong> při míchání i broušení.</li>
          </ul>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Časté otázky</h2>

          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik kg stěrky potřebuji na 1 m²?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0", marginTop: "12px" }}>
              Rozhoduje tloušťka vrstvy. Jemná štuková stěrka má spotřebu přibližně 1–1,2 kg na m² a milimetr tloušťky, takže při běžné finální vrstvě 1–2 mm vychází 1–2,4 kg/m². Hrubší vyrovnávací stěrky mají 1,4–1,8 kg na m² a milimetr, protože obsahují hrubší plnivo. Při srovnávání nerovností 10 mm tak potřebujete i 14–18 kg na m². Přesnou hodnotu najdete vždy na pytli pod údajem spotřeba.
            </p>
          </details>

          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jaký je rozdíl mezi stěrkou, tmelem a štukem?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0", marginTop: "12px" }}>
              Stěrka je materiál pro celoplošné srovnání povrchu ve vrstvě od desetin milimetru do několika centimetrů. Tmel slouží k lokálním opravám — díry po hmoždinkách, praskliny, spáry sádrokartonu — a nanáší se bodově špachtlí. Štuk je tradiční označení pro jemnou finální vrstvu z vápna nebo sádry o tloušťce 1–3 mm, dnes se prakticky překrývá s pojmem finální stěrka. V obchodech se názvy volně míchají, proto se vždy řiďte zrnitostí a doporučenou tloušťkou na obalu.
            </p>
          </details>

          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik vrstev stěrky je potřeba na hladkou zeď?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0", marginTop: "12px" }}>
              Na rovné, jen mírně zdrsnělé omítce stačí jedna vrstva 1–2 mm a přebroušení. U běžné starší omítky s drobnými nerovnostmi se dělají dvě vrstvy po 1–2 mm křížem, protože druhá vrstva zaplní stopy po hladítku z první. Pro povrch kvality Q4 (bez stínů pod bočním světlem, vhodný pro lesklé nátěry) se nanáší tři vrstvy a brousí se bruskou s odsáváním. Každá vrstva musí zaschnout, než přijde další.
            </p>
          </details>

          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik stojí stěrkování stěn za m²?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0", marginTop: "12px" }}>
              Materiál je levný: pytel 20–25 kg jemné stěrky stojí 250–500 Kč, tedy při vrstvě 1–2 mm přibližně 15–40 Kč/m². Hlavní nákladovou položkou je práce — řemeslník si za celoplošné stěrkování a přebroušení účtuje 180–350 Kč/m² podle počtu vrstev a požadované kvality povrchu. U kvality Q4 se sazby dostávají i nad 400 Kč/m². Svépomocí tedy ušetříte nejvíc právě u stěrkování.
            </p>
          </details>

          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Musí se stěrka penetrovat před malováním?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0", marginTop: "12px" }}>
              Ano, prakticky vždy. Stěrkovaný a přebroušený povrch je velmi savý a plný mikroskopického prachu z broušení. Bez penetrace barva nasákne nerovnoměrně, nátěr bude matný s flekatými místy a spotřeba barvy vzroste o 20–40 %. Postup je: přebrousit, odsát prach, penetrovat a nechat 4–24 hodin vyzrát, teprve pak malovat. Penetrovat se musí i před stěrkováním, pokud je podkladem nová omítka nebo sádrokarton.
            </p>
          </details>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak opravit škrábance a díry ve zdi", href: "/blog/opravit-skrabance-diry-ve-zdi", icon: "🔧" },
              { title: "Jak malovat zeď – kompletní průvodce", href: "/blog/jak-malovat-zed", icon: "🖌️" },
              { title: "Kalkulačka penetrace", href: "/kalkulacky/kolik-primeru", icon: "🪣" },
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
