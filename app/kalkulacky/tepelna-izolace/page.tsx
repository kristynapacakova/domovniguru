// ════════════════════════════════════════════════════════════════
// SOUBOR: app/kalkulacky/tepelna-izolace/page.tsx
// ════════════════════════════════════════════════════════════════
import type { Metadata } from "next";
import Link from "next/link";
import IzolaceCalculator from "@/app/components/IzolaceCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka tepelné izolace 2026 – kolik balení minerální vaty nebo EPS?",
  description: "Spočítej počet balení tepelné izolace (minerální vata, EPS, XPS) s rezervou na prořezy. Zadej plochu a m² v balení – výsledek okamžitě.",
  alternates: { canonical: "https://domovniguru.cz/kalkulacky/tepelna-izolace" },
  openGraph: { title: "Kalkulačka tepelné izolace 2026", description: "Balení minerální vaty nebo EPS s rezervou. Výsledek okamžitě.", url: "https://domovniguru.cz/kalkulacky/tepelna-izolace", siteName: "DomovniGuru", locale: "cs_CZ", type: "website" },
};

export default function TepelnaIzolacePage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Tepelná izolace</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik tepelné izolace potřebuju?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej plochu a m² v balení — kalkulačka přidá rezervu na prořezy kolem trámů a ostění.</p>

        <IzolaceCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Tepelné mosty a proč nešetřit na tloušťce izolace</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Tepelný most je místo v konstrukci kde tepelný odpor výrazně klesá oproti okolnímu plášti — typicky ocelové nebo dřevěné trámy, kotvící prvky, ostění oken, rohy stěn nebo věnce. Přestože tepelné mosty mohou tvořit pouhá 3–5 % plochy fasády, způsobují 15–30 % celkových tepelných ztrát díky dramaticky vyšší tepelné vodivosti kovů a betonu oproti izolaci. Proto je nezbytné tyto místa překrýt přídavnou vrstvou izolace nebo použít přerušenou tepelnou vazbu.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Tloušťka izolace není otázkou estetiky — je to fyzická veličina s přímým dopadem na úspory. Pro porovnání: minerální vata 100 mm dosahuje hodnoty Rλ = 2,5 m²K/W, vata 200 mm pak Rλ = 5,0 m²K/W. Zdvojnásobení tloušťky zdvojnásobí tepelný odpor a zhruba o třetinu sníží tepelné ztráty přes danou plochu. Současné normy (ČSN 73 0540) doporučují pro střechy minimálně 240 mm izolace, pro fasády 160–200 mm — a nová výstavba standardně překračuje i tyto hodnoty.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Výběr správného typu izolace záleží na aplikaci. Minerální (kamenná nebo skelná) vata je prodyšná, nehořlavá a vhodná pro střechy, podhledy a dřevostavby. Pěnový polystyren (EPS) je levnější, vhodný pro fasády a podlahy ale méně prodyšný. Extrudovaný polystyren (XPS) má nízkou nasákavost a hodí se do vlhkého prostředí (základy, plochá střecha, podlahy na terénu). Nikdy nesměšuj typy izolace v jedné vrstvě — kombinace různých tepelných vodivostí způsobuje kondenzaci na rozhraní.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Tepelné čerpadlo – kompletní průvodce 2026", href: "/blog/tepelne-cerpadlo-pruvodce", icon: "♨️" },
              { title: "Jak zateplit byt bez rekonstrukce", href: "/blog/zateplit-byt-bez-rekonstrukce", icon: "🧱" },
              { title: "Jak ušetřit na vytápění bez výměny kotle", href: "/blog/usetrit-na-vytapeni", icon: "💰" },
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
