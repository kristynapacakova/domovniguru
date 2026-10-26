import type { Metadata } from "next";
import Link from "next/link";
import PlotCalculator from "@/app/components/PlotCalculator";
import AffiliateCTA from "@/app/components/AffiliateCTA";

export const metadata: Metadata = {
  title: "Kalkulačka plotu 2026 – kolik dílců a sloupků potřebuji?",
  description: "Spočítej, kolik plotových dílců, sloupků a vzpěr potřebuješ podle délky plotu, šířky pole a počtu branek a bran. Výsledek okamžitě a zdarma.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-plotovych-dilcu" },
  openGraph: { title: "Kalkulačka plotu 2026", description: "Kolik plotových dílců a sloupků potřebuji? Výsledek okamžitě.", url: "https://www.domovniguru.cz/kalkulacky/kolik-plotovych-dilcu", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20plotu%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka plotu 2026" }] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Jak spočítám počet plotových dílců?", "acceptedAnswer": { "@type": "Answer", "text": "Od celkové délky oplocení nejprve odečtěte šířku všech otvorů — branka se počítá jako 1 metr, brána nebo vjezd jako 3,5 metru. Zbývající čistou délku výplně vydělte šířkou jednoho pole a výsledek zaokrouhlete nahoru. U plotu 40 metrů s jednou brankou a jednou bránou zbývá 35,5 metru výplně, což při polích po 2,5 metru znamená 15 dílců." } },
      { "@type": "Question", "name": "Kolik sloupků je potřeba na plot?", "acceptedAnswer": { "@type": "Answer", "text": "V souvislé řadě je sloupků vždy o jeden více než polí, protože sloupek stojí i na obou koncích. K tomu se přidávají dva nosné sloupky ke každé brance a dva ke každé bráně. U 15 polí, jedné branky a jedné brány to je 15 + 1 + 2 + 2, tedy 20 sloupků. Sloupky u bran bývají silnější a hlouběji zabetonované než sloupky v řadě." } },
      { "@type": "Question", "name": "Kolik vzpěr potřebuji a kam patří?", "acceptedAnswer": { "@type": "Answer", "text": "Orientačně se počítá jedna vzpěra na každé čtyři sloupky, takže u 20 sloupků vychází 5 vzpěr. Patří ke koncovým a rohovým sloupkům a k napínacím sloupkům v dlouhých rovných úsecích, protože ty nesou tah výplně. U pletivových plotů a na svahu jich bývá potřeba víc, u těžkých systémových panelů s pevnými sloupky naopak méně." } },
      { "@type": "Question", "name": "Jak hluboko se betonují plotové sloupky?", "acceptedAnswer": { "@type": "Answer", "text": "Patka musí sahat pod úroveň promrzání, v Česku zpravidla 80 až 100 cm. Pro sloupek plotu do výšky 1,5 metru stačí patka o průměru asi 25 cm a hloubce 80 cm, což je přibližně 40 litrů betonu na sloupek. U sloupků nesoucích bránu se dělá patka 40 × 40 cm hluboká metr a často se vyztužuje. Horní okraj patky se vysvahuje, aby od sloupku odváděl vodu." } },
      { "@type": "Question", "name": "Potřebuji na plot povolení?", "acceptedAnswer": { "@type": "Answer", "text": "U běžného plotu do výšky dvou metrů, který nestojí na hranici s veřejnou komunikací ani v chráněném území, se stavební povolení obvykle nevyžaduje. Pravidla se ale liší podle obce, regulačního plánu a toho, zda je plot na hranici se sousedem. Před stavbou si vždy ověřte situaci na stavebním úřadu a hranici pozemku si nechte potvrdit — plot postavený o půl metru vedle je drahý omyl." } }
    ]
  }, {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
      { "@type": "ListItem", "position": 2, "name": "Kalkulačky", "item": "https://www.domovniguru.cz/kalkulacky" },
      { "@type": "ListItem", "position": 3, "name": "Kolik plotových dílců", "item": "https://www.domovniguru.cz/kalkulacky/kolik-plotovych-dilcu" }
    ]
  }]
};

export default function KolikPlotovychDilcuPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Kolik plotových dílců</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik plotových dílců a sloupků potřebuji?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej délku plotu, šířku jednoho pole a počet branek a bran — kalkulačka spočítá počet dílců, sloupků i vzpěr.</p>

        <PlotCalculator />
        <AffiliateCTA merchant="zahrada" text="Vybavit se na plot" />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Jak spočítat materiál na plot kolem domu</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Základem každého rozpočtu na oplocení je čistá délka výplně — tedy celková délka plotu zmenšená o šířku branek a bran. Branka pro pěší má obvykle kolem 1 metru, brána nebo vjezd pro auto zpravidla 3,5 metru. Teprve zbývající délku dělíme šířkou jednoho pole (u většiny systémových plotů 2 až 2,5 metru), abychom zjistili počet plotových dílců. Výsledek se zaokrouhluje nahoru — poslední, kratší pole se buď zkrátí na míru, nebo se řeší dořezem.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Počet sloupků je vždy o jeden vyšší než počet polí v jednom souvislém úseku (na koncích i mezi poli stojí sloupek). U branek a bran je ale potřeba počítat s nosnými sloupky navíc — u každého otvoru stojí robustnější sloupky po obou stranách, protože nesou váhu křídla i zátěž při otevírání. Silnější sloupky u vrat proto do rozpočtu přidejte zvlášť a nešetřete na jejich ukotvení do betonu.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300 }}>
            Vzpěry (šikborné vzpěry) zpevňují napínací a rohové sloupky, zejména u pletivových plotů. Orientačně počítejte s jednou vzpěrou přibližně na každé čtyři sloupky, u rohů a na koncích řady je vzpěra prakticky vždy. Na svažitém terénu, v místech s návětrnou stranou nebo u vyšších plotů se počet vzpěr i hloubka základů zvyšuje — vždy proto berte výsledek kalkulačky jako výchozí odhad a upřesněte jej podle konkrétní situace a typu plotu.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Jak se výpočet dělá</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Výpočet probíhá ve čtyřech navazujících krocích. Nejprve se stanoví čistá délka výplně: od celkové délky oplocení se odečte součin počtu branek a jednoho metru a součin počtu bran a 3,5 metru. Tato čistá délka se vydělí šířkou jednoho pole a zaokrouhlí nahoru — tak vznikne počet plotových dílců. Počet sloupků je potom počet polí plus jeden koncový, plus dva nosné sloupky na každou branku a dva na každou bránu. Počet vzpěr nakonec vyjde jako počet sloupků dělený čtyřmi, opět zaokrouhlený nahoru.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Konkrétní příklad odpovídá výchozímu nastavení kalkulačky. Plot má 40 metrů, pole šířku 2,5 metru, v plotě je jedna branka a jedna brána. Čistá délka výplně je 40 − (1 + 3,5) = 35,5 metru. Počet polí vychází 35,5 ÷ 2,5 = 14,2, po zaokrouhlení nahoru 15 dílců. Sloupků je 15 + 1 + 2 + 2 = 20 kusů a vzpěr 20 ÷ 4 = 5 kusů. Posledních pole bude o 0,5 metru užší, takže se buď zkrátí na míru, nebo se rozteč mezi sloupky nepatrně rozprostře.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Výpočet předpokládá jeden souvislý úsek plotu. Pokud oplocení rozdělíte na více samostatných řad — třeba tři strany pozemku přerušené vjezdem a rohy — přibude v každé řadě jeden koncový sloupek navíc. Pro přesnější výsledek proto zadejte každou stranu zvlášť a výsledky sečtěte. Stejně tak se u svažitého terénu rozteče zkracují, aby panely kopírovaly terén po schodech, a počet sloupků roste.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Nejčastější chyby</h2>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Neověřená hranice pozemku.</strong> Plot postavený podle starého plotu nebo podle dohody se sousedem může stát na cizím pozemku. Hranici si nechte vytyčit geodetem, zápis z katastru nestačí.</li>
            <li><strong>Příliš mělké patky.</strong> Betonová patka musí sahat pod úroveň promrzání, u nás tedy 80 až 100 cm. Mělká patka plot za dvě zimy vyzvedne a nakloní.</li>
            <li><strong>Stejné sloupky u branky a v řadě.</strong> Sloupek nesoucí křídlo brány dostává při otevírání páčivou zátěž. Potřebuje silnější profil a objemnější, vyztuženou patku.</li>
            <li><strong>Pokládka panelů bez vyměření.</strong> Když se první sloupek postaví bez natažené šňůry a nivelace, odchylka se po třiceti metrech nasčítá do několika centimetrů a poslední pole nesedí.</li>
            <li><strong>Zapomenuté rohy.</strong> Každý roh znamená zvláštní sloupek se vzpěrou do obou směrů. V jednoduchém výpočtu podle celkové délky rohy chybí.</li>
            <li><strong>Žádná rezerva materiálu.</strong> U dřevěných a pletivových plotů se vždy něco poškodí při dopravě nebo při dořezu. Počítejte s rezervou kolem pěti procent.</li>
            <li><strong>Betonování všech sloupků v jeden den.</strong> Beton potřebuje vyzrát, než se do sloupků zavěsí panely. Napínat pletivo do čerstvé patky znamená sloupky vychýlit.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Co ještě budete potřebovat</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Dílce a sloupky jsou jen část rozpočtu. K nim patří ještě tyto položky s orientačními cenami:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Beton na patky</strong> — asi 40 litrů na běžný sloupek, u sloupků bran dvojnásobek. Suchá betonová směs vyjde přibližně na 90 až 130 Kč za 25 kg.</li>
            <li><strong>Příchytky, objímky a spojovací materiál</strong>, u systémových plotů 150 až 400 Kč na jedno pole.</li>
            <li><strong>Krytky sloupků</strong> proti vnikání vody, 20 až 60 Kč za kus — bez nich sloupek zvnitřku koroduje.</li>
            <li><strong>Branka a brána</strong> — branka od 3 000 Kč, dvoukřídlá brána od 12 000 Kč, samonosná posuvná brána od 30 000 Kč.</li>
            <li><strong>Pohon posuvné nebo křídlové brány</strong> včetně kabeláže a dálkového ovládání, 15 000 až 40 000 Kč.</li>
            <li><strong>Podhrabové desky</strong> pro vyrovnání terénu a zabránění podhrabání, 250 až 500 Kč za metr.</li>
            <li><strong>Nástroje</strong> — zemní vrták nebo kopací lžíce, vodováha, nivelační šňůra, míchačka či míchadlo. Půjčovna zemního vrtáku vychází na 500 až 900 Kč za den.</li>
            <li><strong>Nátěr nebo impregnace</strong> u dřevěného plotu, orientačně 60 až 120 Kč za metr čtvereční plotu a jeden nános.</li>
          </ul>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Časté otázky</h2>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jak spočítám počet plotových dílců?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Od celkové délky oplocení nejprve odečtěte šířku všech otvorů — branka se počítá jako 1 metr, brána nebo vjezd jako 3,5 metru. Zbývající čistou délku výplně vydělte šířkou jednoho pole a výsledek zaokrouhlete nahoru. U plotu 40 metrů s jednou brankou a jednou bránou zbývá 35,5 metru výplně, což při polích po 2,5 metru znamená 15 dílců.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik sloupků je potřeba na plot?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              V souvislé řadě je sloupků vždy o jeden více než polí, protože sloupek stojí i na obou koncích. K tomu se přidávají dva nosné sloupky ke každé brance a dva ke každé bráně. U 15 polí, jedné branky a jedné brány to je 15 + 1 + 2 + 2, tedy 20 sloupků. Sloupky u bran bývají silnější a hlouběji zabetonované než sloupky v řadě.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik vzpěr potřebuji a kam patří?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Orientačně se počítá jedna vzpěra na každé čtyři sloupky, takže u 20 sloupků vychází 5 vzpěr. Patří ke koncovým a rohovým sloupkům a k napínacím sloupkům v dlouhých rovných úsecích, protože ty nesou tah výplně. U pletivových plotů a na svahu jich bývá potřeba víc, u těžkých systémových panelů s pevnými sloupky naopak méně.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jak hluboko se betonují plotové sloupky?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Patka musí sahat pod úroveň promrzání, v Česku zpravidla 80 až 100 cm. Pro sloupek plotu do výšky 1,5 metru stačí patka o průměru asi 25 cm a hloubce 80 cm, což je přibližně 40 litrů betonu na sloupek. U sloupků nesoucích bránu se dělá patka 40 × 40 cm hluboká metr a často se vyztužuje. Horní okraj patky se vysvahuje, aby od sloupku odváděl vodu.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Potřebuji na plot povolení?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              U běžného plotu do výšky dvou metrů, který nestojí na hranici s veřejnou komunikací ani v chráněném území, se stavební povolení obvykle nevyžaduje. Pravidla se ale liší podle obce, regulačního plánu a toho, zda je plot na hranici se sousedem. Před stavbou si vždy ověřte situaci na stavebním úřadu a hranici pozemku si nechte potvrdit — plot postavený o půl metru vedle je drahý omyl.
            </p>
          </details>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak vybrat plot kolem domu", href: "/blog/jak-vybrat-plot-kolem-domu", icon: "🏡" },
              { title: "Zahradní plot ze dřeva", href: "/blog/zahradni-plot-ze-dreva", icon: "🪵" },
              { title: "Kalkulačka betonu", href: "/kalkulacky/kolik-betonu", icon: "🧱" },
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
