import type { Metadata } from "next";
import Link from "next/link";
import OhrevVodyCalculator from "@/app/components/OhrevVodyCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka nákladů na ohřev vody 2026 – kolik stojí teplá voda?",
  description: "Spočítej roční náklady na ohřev teplé vody podle počtu osob, spotřeby a zdroje energie. Porovnej elektřinu, plyn a tepelné čerpadlo okamžitě.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/naklady-na-ohrev-vody" },
  openGraph: { title: "Kalkulačka nákladů na ohřev vody 2026", description: "Kolik stojí teplá voda? Spočítej roční náklady na ohřev.", url: "https://www.domovniguru.cz/kalkulacky/naklady-na-ohrev-vody", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20n%C3%A1klad%C5%AF%20na%20oh%C5%99ev%20vody&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka nákladů na ohřev vody 2026" }] },
};

export default function NakladyNaOhrevVodyPage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Náklady na ohřev vody</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik stojí ohřev teplé vody?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej počet osob, denní spotřebu teplé vody a zdroj energie — kalkulačka spočítá roční i měsíční náklady na ohřev a porovná elektřinu, plyn i tepelné čerpadlo.</p>

        <OhrevVodyCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Jak se počítají náklady na ohřev vody</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Ohřev teplé vody tvoří v běžné domácnosti druhou největší položku spotřeby energie hned po vytápění — zpravidla 15 až 25 % celkových nákladů na energie. Množství potřebné energie závisí na třech faktorech: kolik litrů teplé vody denně spotřebujete, o kolik stupňů je potřeba vodu ohřát (rozdíl mezi teplotou studené vody z vodovodu a cílovou teplotou v bojleru) a jaká je účinnost vašeho zdroje. Fyzikální základ je jednoduchý: ohřát jeden litr vody o jeden stupeň Celsia vyžaduje přibližně 1,163 watthodiny energie.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Zásadní rozdíl mezi zdroji dělá jejich účinnost. Elektrický bojler přemění na teplo téměř veškerou dodanou elektřinu (účinnost okolo 95 %), plynový ohřívač pracuje s účinností kolem 90 %, ale tepelné čerpadlo díky topnému faktoru COP okolo 3 dodá na jednu spotřebovanou kilowatthodinu elektřiny zhruba trojnásobek tepla. Právě proto vychází tepelné čerpadlo na ohřev vody výrazně levněji, přestože platíte stejnou cenu za kilowatthodinu jako u přímého elektrického ohřevu.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300 }}>
            Na výsledné roční náklady má velký vliv i chování domácnosti. Sprchování místo koupání ušetří desítky litrů teplé vody na každé použití, úsporné sprchové hlavice sníží průtok o třetinu a dobře zaizolovaný zásobník omezí tepelné ztráty. Pozor ale na příliš nízkou teplotu vody: pod 50 °C hrozí v zásobníku množení bakterie legionella, proto se doporučuje udržovat v bojleru alespoň 55 °C a jednou týdně provést krátký tepelný proplach na vyšší teplotu.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak snížit náklady na ohřev vody", href: "/blog/jak-snizit-naklady-na-ohrev-vody", icon: "💧" },
              { title: "Jaký bojler vybrat?", href: "/blog/jaky-bojler-vybrat", icon: "♨️" },
              { title: "Kalkulačka spotřeby vody", href: "/kalkulacky/spotreba-vody", icon: "🚰" },
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
  );
}
