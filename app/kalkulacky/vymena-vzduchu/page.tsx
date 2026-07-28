import type { Metadata } from "next";
import Link from "next/link";
import VymenaVzduchuCalculator from "@/app/components/VymenaVzduchuCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka výměny vzduchu 2026 – jaký průtok ventilace potřebuji?",
  description: "Spočítej potřebný průtok větrání podle plochy, výšky a typu místnosti. Výsledek v m³/h i l/s pro dimenzování rekuperace a ventilátorů. Okamžitě.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/vymena-vzduchu" },
  openGraph: { title: "Kalkulačka výměny vzduchu 2026", description: "Jaký průtok ventilace potřebuji? Výsledek v m³/h a l/s okamžitě.", url: "https://www.domovniguru.cz/kalkulacky/vymena-vzduchu", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20v%C3%BDm%C4%9Bny%20vzduchu%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka výměny vzduchu 2026" }] },
};

export default function VymenaVzduchuPage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Výměna vzduchu</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kalkulačka výměny vzduchu</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej rozměry místnosti a její typ — kalkulačka spočítá potřebný průtok ventilace v m³/h i l/s pro zdravé a suché vnitřní prostředí.</p>

        <VymenaVzduchuCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Kolik vzduchu potřebuje místnost vyměnit</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Potřebný průtok větrání se odvozuje od objemu místnosti a takzvané násobnosti výměny vzduchu — čísla, které udává, kolikrát za hodinu se má vyměnit celý objem vzduchu. Objem spočítáte snadno jako plochu podlahy vynásobenou výškou stropu, násobnost pak závisí na účelu místnosti. Obytné pokoje a ložnice si vystačí s hodnotou kolem 0,5×/h, kancelář s 1×/h, zatímco kuchyň (1,5×/h) a koupelna s WC (2×/h) potřebují intenzivnější výměnu kvůli vlhkosti, pachům a vodní páře.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Výsledný průtok kalkulačka uvádí ve dvou jednotkách. Metry krychlové za hodinu (m³/h) se hodí pro výběr a dimenzování rekuperační jednotky nebo odsávacího ventilátoru — výrobci ventilaci obvykle značí právě takto. Litry za sekundu (l/s) jsou praktické pro rychlé porovnání s hygienickými požadavky, které se často udávají na osobu (zhruba 25–30 m³/h na dospělou osobu v pobytové místnosti).
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300 }}>
            Nedostatečné větrání vede k vysoké koncentraci CO₂, únavě a hlavně k hromadění vlhkosti, která kondenzuje na chladných površích a živí plísně. Naopak přehnané větrání v zimě zbytečně odvádí teplo a zvyšuje účty za vytápění. Řízená ventilace s rekuperací tepla je kompromis: zajistí stálou výměnu vzduchu a přitom z odváděného vzduchu získá zpět většinu tepla. Při návrhu jednotky sečtěte potřebné průtoky všech obsluhovaných místností.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Rekuperace vs. větrání okny", href: "/blog/rekuperace-vs-vetrani-okny", icon: "🔄" },
              { title: "Jak správně větrat byt", href: "/blog/spravne-vetrat-byt", icon: "🪟" },
              { title: "Kalkulačka rosného bodu", href: "/kalkulacky/kalkulacka-rosneho-bodu", icon: "🌡️" },
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
