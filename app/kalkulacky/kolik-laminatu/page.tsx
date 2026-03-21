// ════════════════════════════════════════════════════════════════
// SOUBOR: app/kalkulacky/kolik-laminatu/page.tsx
// ════════════════════════════════════════════════════════════════
import type { Metadata } from "next";
import Link from "next/link";
import LaminatCalculator from "@/app/components/LaminatCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka laminátu 2026 – kolik balení plovoucí podlahy potřebuju?",
  description: "Spočítej počet balení laminátu nebo vinylové podlahy s rezervou na prořezy. Zadej rozměry místnosti a m² v balení – výsledek ihned.",
  alternates: { canonical: "https://domovniguru.cz/kalkulacky/kolik-laminatu" },
  openGraph: { title: "Kalkulačka laminátu 2026", description: "Balení laminátu s rezervou na prořezy. Výsledek okamžitě.", url: "https://domovniguru.cz/kalkulacky/kolik-laminatu", siteName: "DomovniGuru", locale: "cs_CZ", type: "website" },
};

export default function KolikLaminatuPage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Kolik laminátu</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik laminátu potřebuju?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej rozměry místnosti a m² v balení — kalkulačka přidá rezervu na prořezy a dilataci.</p>

        <LaminatCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>10% rezerva a aklimatizace – proč jsou klíčové</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Laminátová nebo vinylová podlaha se při pokládce vždy zkracuje u stěn a dveří — prořezy tvoří typicky 8–12 % materiálu. Pokud pokládáš laminát diagonálně (na šikmo), odpad může být 15–20 %. Rezerva 10 % není zbytečnost — je to standard doporučovaný všemi výrobci a instalatéry. Navíc je vhodné ponechat si 1–2 prkna pro případné budoucí opravy poškozených prken; náhradní prkna ze stejné šarže nemusí být po roce dostupná.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Aklimatizace je nezbytný krok který mnoho kutilů přeskočí s fatálními následky. Laminát je hygroskopický — reaguje na vlhkost vzduchu a teplotu. Prkno uskladněné ve studené garáži a položené do teplé místnosti se bude rozměrově měnit ještě dny po pokládce, což způsobuje vyboulení nebo mezery ve spojích. Před pokládkou nechej uzavřená balení ležet v místnosti 48 hodin. Ideální podmínky: teplota 15–25 °C, vlhkost 45–65 %.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Dilatační mezera u stěn (obvykle 8–12 mm) není volitelná — je fyzicky nutná pro teplotní roztažnost. Zakryje ji soklová lišta, takže vizuálně nevadí. Bez dilatace dojde při změnách teploty nebo vlhkosti k vyboulení podlahy uprostřed místnosti — a náprava znamená demontáž a novou pokládku. Používej vždy plastové klínky pro udržení konzistentní mezery po celém obvodu místnosti.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak klást vinyl podlahu", href: "/blog/kladeni-vinyl-podlahy", icon: "🪵" },
              { title: "Jak renovovat parketovou podlahu", href: "/blog/renovovat-parkety", icon: "✨" },
              { title: "Jak stěhovat velké spotřebiče při rekonstrukci", href: "/blog/prestehovat-velke-spotrebice", icon: "📦" },
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
