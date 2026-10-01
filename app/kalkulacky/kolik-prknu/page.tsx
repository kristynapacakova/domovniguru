import type { Metadata } from "next";
import Link from "next/link";
import PrknaCalculator from "@/app/components/PrknaCalculator";
import AffiliateCTA from "@/app/components/AffiliateCTA";

export const metadata: Metadata = {
  title: "Kalkulačka prken na terasu 2026 – kolik kusů potřebuji?",
  description: "Kolik kusů dřevěných prken na terasu? Zadej rozměry terasy a prken – výpočet okamžitě. Zdarma, bez registrace.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-prknu" },
  openGraph: { title: "Kalkulačka prken na terasu 2026 – kolik kusů potřebuji?", description: "Kolik kusů dřevěných prken na terasu? Zadej rozměry terasy a prken – výpočet okamžitě. Zdarma, bez registrace.", url: "https://www.domovniguru.cz/kalkulacky/kolik-prknu", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20prken%20na%20terasu%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka prken na terasu 2026" }] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Kolik běžných metrů prken je potřeba na 1 m² terasy?", "acceptedAnswer": { "@type": "Answer", "text": "Rozhoduje rozteč, tedy šířka prkna plus šířka spáry. U prkna 120 mm se spárou 5 mm je rozteč 125 mm, takže na metr čtvereční padne 8 běžných metrů prken. U úzkého prkna 90 mm se spárou 5 mm je to už 10,5 běžného metru a u širokého prkna 145 mm se spárou 6 mm jen 6,6 běžného metru. Čím širší prkno, tím méně kusů i šroubů, ale tím větší tendence ke kroucení." } },
      { "@type": "Question", "name": "Jak velkou spáru mezi terasovými prkny nechat?", "acceptedAnswer": { "@type": "Answer", "text": "Pro většinu dřevin je optimum 5 mm, rozumné rozmezí 4 až 6 mm. Užší spára se při nabrání vlhkosti uzavře a prkna se o sebe začnou tlačit, širší než 8 mm už propadává drobný nepořádek a nepříjemně se do ní zachytává podpatek. U exotických dřev, která hodně pracují, a u montáže vysušeného dřeva v zimě volte horní hranici. Čelní spára mezi prkny na délku má být 3 až 5 mm." } },
      { "@type": "Question", "name": "Jakou délku prken zvolit, aby byl prořez nejmenší?", "acceptedAnswer": { "@type": "Answer", "text": "Takovou, která se vejde do délky terasy beze zbytku. U terasy 4 m dlouhé jsou ideální prkna 4 m nebo 2 m, protože jedna řada vyjde přesně. Prkna 2,5 m vedou na dva kusy v řadě, z nichž se jeden metr odřízne — to je 20 procent materiálu do odpadu. Délku prken proto volte podle rozměru terasy, ne naopak, a teprve pak doplňte 10procentní rezervu." } },
      { "@type": "Question", "name": "Jaká je správná rozteč nosného roštu pod terasou?", "acceptedAnswer": { "@type": "Answer", "text": "U prken tloušťky 26 až 28 mm je osová rozteč hranolů 50 cm, u tenkých prken 21 mm jen 40 cm a u silných exotických prken 40 mm lze jít na 60 cm. Hranoly běží vždy napříč směru prken a musí být impregnované, minimálně 60 × 40 mm. Na konci prkna má podpora být maximálně 5 cm od čela, jinak se nezatížený konec zvedá." } },
      { "@type": "Question", "name": "Kolik šroubů na terasu a mají být nerezové?", "acceptedAnswer": { "@type": "Answer", "text": "Na každém křížení prkna s hranolem patří dva šrouby, takže u terasy 4 × 3 m s roštem po 50 cm a prkny 120 mm vyjde přibližně 430 šroubů. Vždy nerezové v jakosti A2, u bazénu a u moře A4 — běžná pozinkovaná ocel po pár sezónách zrezaví a po prkně stečou neodstranitelné hnědé skvrny. U tvrdých a exotických dřev se otvor předvrtává, jinak prkno praskne." } }
    ]
  }, {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
      { "@type": "ListItem", "position": 2, "name": "Kalkulačky", "item": "https://www.domovniguru.cz/kalkulacky" },
      { "@type": "ListItem", "position": 3, "name": "Kolik prken", "item": "https://www.domovniguru.cz/kalkulacky/kolik-prknu" }
    ]
  }]
};

export default function KolikPrknuPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Kolik prken</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik prken na terasu potřebuju?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej rozměry terasy i prken — kalkulačka ti okamžitě spočítá přesný počet kusů s ohledem na šířku spár.</p>

        <PrknaCalculator />
        <AffiliateCTA merchant="podlahy" text="Nakoupit terasová prkna" />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Jak vybrat dřevo na terasu a správné rozměry prken</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Výběr dřeviny pro venkovní terasu je klíčové rozhodnutí ovlivňující životnost a náklady na údržbu. Nejběžnějším a nejdostupnějším dřevem pro terasové deskování v ČR je smrk nebo borovice — levné, snadno dostupné, ale vyžadují pravidelnou údržbu (nátěr každé 2–3 roky) a při zanedbání podléhají hnilobě. Modřín odolává vlhkosti přirozeně lépe díky vysokému obsahu pryskyřice a vydrží bez nátěru 8–12 let. Exotická dřeva (bangkirai, teak, ipe) jsou maximálně trvanlivá, ale nákladná a ekologicky sporná — vybírejte certifikát FSC.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Standardní šířka terasových prken je 90–145 mm, tloušťka 26–28 mm. Širší prkna (145 mm) vypadají moderněji, ale na slunci se snáze kroutí — pro venkovní použití je optimum kolem 90–120 mm. Délky prken bývají 2,0–4,0 m; při objednávce zvolte délku blízkou délce terasy, abyste minimalizovali prořezy. Šířka spáry 4–6 mm zajišťuje odvodnění a zároveň kompenzuje teplotní roztažnost dřeva (borovice se mění o 3–5 mm na metr délky mezi létem a zimou).
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Před pokládkou nechte dřevo 48 hodin aklimatizovat na místě použití — vyrovnání vlhkosti dřeva s okolním prostředím předchází pozdějšímu kroucení a praskání. Prkna montujte na rošt z impregnovaných hranolů (min. 60 × 40 mm) s osovou vzdáleností 40–60 cm. Šrouby musí být nerezové nebo pozinkované — klasická ocel rezaví a stéká hnědými skvrnami. Před prvním nátěrem nechte nové dřevo 2–3 měsíce „zvětrat" — barva pak lépe přilne.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Jak se výpočet dělá</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Kalkulačka počítá s tím, že prkna leží podél délky terasy a řady se skládají napříč její šířkou. Nejprve určí rozteč jedné řady jako šířka prkna plus šířka spáry — u prkna 120 mm a spáry 5 mm je to 125 mm, tedy 0,125 m. Šířku terasy touto roztečí vydělí a zaokrouhlí nahoru, čímž vyjde počet řad. Potom spočítá, kolik prken je potřeba na jednu řadu: délku terasy vydělí délkou prkna a opět zaokrouhlí nahoru. Celkový počet je součin obou čísel.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Příklad s výchozími hodnotami: terasa 4 × 3 m, prkno 2,5 m dlouhé a 120 mm široké, spára 5 mm. Řad je 3 ÷ 0,125 = 24, prken na řadu 4 ÷ 2,5 = 1,6, po zaokrouhlení 2. Celkem tedy 48 kusů, což je 120 běžných metrů prken na terasu o ploše 12 m².
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            A právě na tomto příkladu je vidět, proč je volba délky prkna důležitější než cena za metr. Čistá potřeba je 24 řad × 4 m = 96 běžných metrů, ale s prkny 2,5 m nakoupíte 120 metrů — každá řada má o metr víc, než je potřeba, a 20 procent materiálu skončí v odpadu. Stačí zvolit prkna 4 m (24 kusů) nebo 2 m (48 kusů) a nakoupíte přesně 96 metrů. Zkuste si v kalkulačce zadat obě varianty a porovnat.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Nejčastější chyby</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Terasa je konstrukce, která celý rok pracuje ve vlhku a na slunci. Většina problémů nevzniká ve prknech samotných, ale v tom, co je pod nimi:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Terasa položená do vodorovné roviny.</strong> Plocha musí mít spád 1 až 2 procenta směrem od domu, aby voda odtékala. Vodorovná terasa drží vodu v rozích a u stěny a hnije odspodu.</li>
            <li><strong>Příliš velká rozteč hranolů.</strong> U prken 26 až 28 mm se nesmí přesáhnout 50 cm. Při 70 cm prkna pruží, zámky šroubů se povolí a terasa začne vrzat už po první sezóně.</li>
            <li><strong>Hranoly položené přímo na beton nebo zeminu.</strong> Rošt potřebuje odvětrání zespodu a oddělení od vlhkosti — rektifikační terče, gumové podložky nebo štěrkové lože s geotextilií. Nasáklý hranol zahnije dřív než prkna.</li>
            <li><strong>Pozinkované nebo černé šrouby.</strong> Jediná správná volba jsou nerezové šrouby A2, u bazénu A4. Běžný zinek v kontaktu s tříslovinami ve dřevě koroduje a kolem hlavičky vzniknou černé kruhy.</li>
            <li><strong>Šroubování bez předvrtání.</strong> U modřínu a exotických dřev se prkno u čela nevyhnutelně rozštípne. Předvrtejte otvor o 1 mm menší než šroub a zahlubte hlavičku.</li>
            <li><strong>Nulová nebo nestejná spára.</strong> Prkna se v létě rozepnou a terasa se vyboulí. Používejte distanční podložky nebo klipy, ne odhad od oka — nestejné spáry jsou na hotové terase vidět na první pohled.</li>
            <li><strong>Prkna otočená drážkami nahoru.</strong> Rýhovaná strana drží vodu a nečistoty a klouže — pokládejte hladkou stranou vzhůru.</li>
            <li><strong>Natírání nového dřeva ihned.</strong> Povrch je ještě mastný a olej se nevsákne — nechte terasu nejdřív zvětrat.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Co ještě budete potřebovat</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Prkna jsou jen pohledová vrstva. Rošt, kotvení a první ošetření přidají k rozpočtu dalších 30 až 50 procent — orientační ceny roku 2026:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Prkna:</strong> impregnovaná borovice 350–550 Kč/m², modřín sibirský 700–1 200 Kč/m², bangkirai a ipe 1 400–2 600 Kč/m², kompozit WPC 900–1 800 Kč/m².</li>
            <li><strong>Hranoly na rošt</strong> 60 × 40 mm impregnované 45–80 Kč/bm. Na terasu 4 × 3 m s roztečí 50 cm potřebujete 9 hranolů po 3 m, tedy 27 běžných metrů.</li>
            <li><strong>Nerezové šrouby A2 5 × 60 mm:</strong> 700–1 300 Kč za 250 ks, na zmíněnou terasu počítejte dvě balení. Alternativou je skrytý montážní klip za 8–16 Kč/ks.</li>
            <li><strong>Rektifikační terče nebo gumové podložky</strong> 25–70 Kč/ks a geotextilie 20–45 Kč/m².</li>
            <li><strong>Olej nebo lazura na terasu:</strong> 600–1 300 Kč za 2,5 l, což vystačí asi na 20 až 25 m² v jedné vrstvě.</li>
            <li><strong>Ochrana hranolů:</strong> samolepicí butylová páska na horní hranu 150–300 Kč/role.</li>
            <li><strong>Nářadí:</strong> aku vrtačka s nástavcem na předvrtání a zahloubení 1 200–3 000 Kč, pokosová pila, distanční podložky 150–300 Kč, dlouhá vodováha a pásmo.</li>
          </ul>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Časté otázky</h2>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik běžných metrů prken je potřeba na 1 m² terasy?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Rozhoduje rozteč, tedy šířka prkna plus šířka spáry. U prkna 120 mm se spárou 5 mm je rozteč 125 mm, takže na metr čtvereční padne 8 běžných metrů prken. U úzkého prkna 90 mm se spárou 5 mm je to už 10,5 běžného metru a u širokého prkna 145 mm se spárou 6 mm jen 6,6 běžného metru. Čím širší prkno, tím méně kusů i šroubů, ale tím větší tendence ke kroucení.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jak velkou spáru mezi terasovými prkny nechat?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Pro většinu dřevin je optimum 5 mm, rozumné rozmezí 4 až 6 mm. Užší spára se při nabrání vlhkosti uzavře a prkna se o sebe začnou tlačit, širší než 8 mm už propadává drobný nepořádek a nepříjemně se do ní zachytává podpatek. U exotických dřev, která hodně pracují, a u montáže vysušeného dřeva v zimě volte horní hranici. Čelní spára mezi prkny na délku má být 3 až 5 mm.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jakou délku prken zvolit, aby byl prořez nejmenší?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Takovou, která se vejde do délky terasy beze zbytku. U terasy 4 m dlouhé jsou ideální prkna 4 m nebo 2 m, protože jedna řada vyjde přesně. Prkna 2,5 m vedou na dva kusy v řadě, z nichž se jeden metr odřízne — to je 20 procent materiálu do odpadu. Délku prken proto volte podle rozměru terasy, ne naopak, a teprve pak doplňte 10procentní rezervu.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jaká je správná rozteč nosného roštu pod terasou?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              U prken tloušťky 26 až 28 mm je osová rozteč hranolů 50 cm, u tenkých prken 21 mm jen 40 cm a u silných exotických prken 40 mm lze jít na 60 cm. Hranoly běží vždy napříč směru prken a musí být impregnované, minimálně 60 × 40 mm. Na konci prkna má podpora být maximálně 5 cm od čela, jinak se nezatížený konec zvedá.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik šroubů na terasu a mají být nerezové?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Na každém křížení prkna s hranolem patří dva šrouby, takže u terasy 4 × 3 m s roštem po 50 cm a prkny 120 mm vyjde přibližně 430 šroubů. Vždy nerezové v jakosti A2, u bazénu a u moře A4 — běžná pozinkovaná ocel po pár sezónách zrezaví a po prkně stečou neodstranitelné hnědé skvrny. U tvrdých a exotických dřev se otvor předvrtává, jinak prkno praskne.
            </p>
          </details>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak ošetřit dřevěnou terasu na zimu", href: "/blog/drevo-terasa-zima", icon: "🪵" },
              { title: "Jak natřít venkovní dřevo – průvodce", href: "/blog/natrit-venkovni-drevo", icon: "🖌️" },
              { title: "Jak zařídit terasu na balkoně", href: "/blog/terasa-na-balkone", icon: "🌿" },
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
