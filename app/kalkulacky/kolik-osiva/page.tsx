// ════════════════════════════════════════════════════════════════
// SOUBOR: app/kalkulacky/kolik-osiva/page.tsx
// ════════════════════════════════════════════════════════════════
import type { Metadata } from "next";
import Link from "next/link";
import OsivoCalculator from "@/app/components/OsivoCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka osiva na trávník 2026 – kolik kg potřebuji?",
  description: "Kolik kilogramů osiva na trávník? Zadej plochu a dávku – výpočet okamžitě. Nový trávník 25–35 g/m², přesev 10–15 g/m².",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-osiva" },
  openGraph: { title: "Kalkulačka osiva na trávník 2026", description: "Kolik kilogramů osiva na trávník? Zadej plochu a dávku – výpočet okamžitě.", url: "https://www.domovniguru.cz/kalkulacky/kolik-osiva", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20osiva%20na%20tr%C3%A1vn%C3%ADk%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka osiva na trávník 2026" }] },
};

export default function KolikOsivaPage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Kolik osiva</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik osiva na trávník potřebuju?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej plochu trávníku a dávku — kalkulačka ti okamžitě spočítá přesné množství v kilogramech a počet pytlíků k nákupu.</p>

        <OsivoCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Dávkování osiva a správný termín výsevu trávníku</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Dávkování osiva je jedním z nejčastějších kamenů úrazu při zakládání nového trávníku. Na holou plochu novostavby nebo nově prokopané zahradě sypte 25–35 g/m² — nižší dávka riskuje mezerovitý porost, kde se okamžitě usadí plevele. Na přesev stávajícího trávníku, kde jen záplatujete holá místa nebo trávník zhušťujete, stačí 10–15 g/m². Přesné dodržení dávky chrání i vaši peněženku: při plošném výsevu na 200 m² je rozdíl mezi dávkami 4–6 kg osiva, což u kvalitní travní směsi představuje stovky korun.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Nejlepší termín pro výsev trávníku je jaro (duben–červen) nebo raný podzim (srpen–září). Na jaře je půda vlhká z tání sněhu a teploty jsou příznivé pro klíčení — průměrná teplota půdy by měla dosahovat alespoň 8–10 °C. Podzimní výsev je pro mnoho zahradníků ještě lepší: menší tlak plevelů a obvykle dostatek přirozených srážek. Letní výsev (červenec) je možný, ale vyžaduje každodenní zavlažování, jinak klíčení neproběhne rovnoměrně.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Před výsevem vždy připravte půdu — odstraňte plevele, prokypřte do hloubky 10–15 cm, přidejte startovací hnojivo a povrch uhrabejte dohladka. Osivo rovnoměrně rozsypte ve dvou pasech kolmo na sebe a lehce zahrábejte nebo zaválcujte. Klíčení trvá 7–14 dní u rychlých travních směsí a 3–4 týdny u pomaleji klíčícího kostřavového osiva. Po celou dobu klíčení udržujte půdu mírně vlhkou — stres ze sucha v prvních 14 dnech je hlavním důvodem nerovnoměrného trávníku.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak zasít trávník od nuly – krok za krokem", href: "/blog/zasit-travnik-od-nuly", icon: "🌿" },
              { title: "Jak správně sekat trávník – průvodce pro hustý pažit", href: "/blog/jak-sekat-travnik", icon: "🌱" },
              { title: "Jak opravit trávník: plešiny, mech a nerovnosti", href: "/blog/opravit-travnik-ples-mech", icon: "✅" },
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
  );
}
