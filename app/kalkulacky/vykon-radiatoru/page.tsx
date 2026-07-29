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

export default function VykonRadiatoruPage() {
  return (
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
  );
}
