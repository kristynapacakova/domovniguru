import type { Metadata } from "next";
import Link from "next/link";
import BojlerCalculator from "@/app/components/BojlerCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka velikosti bojleru 2026 – kolik litrů potřebuji?",
  description: "Jaký objem bojleru vybrat? Zadej počet osob a délku sprchování – doporučení velikosti bojleru okamžitě. 80 až 200 litrů.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/velikost-bojleru" },
  openGraph: { title: "Kalkulačka velikosti bojleru 2026", description: "Jaký objem bojleru vybrat? Zadej počet osob a délku sprchování – doporučení velikosti bojleru okamžitě. 80 až 200 litrů.", url: "https://www.domovniguru.cz/kalkulacky/velikost-bojleru", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20velikosti%20bojleru%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka velikosti bojleru 2026" }] },
};

export default function VelikostBojleruPage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Velikost bojleru</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Jaký objem bojleru potřebuju?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej počet osob v domácnosti a zvyky při koupání — kalkulačka ti doporučí správný objem zásobníkového ohřívače vody.</p>

        <BojlerCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Jak vybrat správný bojler – typy, velikosti a tipy</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Zásobníkový ohřívač vody (bojler) je nejrozšířenějším způsobem přípravy teplé vody v bytech bez centrálního zásobování. Základní parametr při výběru je objem zásobníku v litrech — ten musí pokrýt denní spotřebu celé domácnosti. Orientačně se uvádí 40–60 litrů na osobu při standardním sprchování, ale skutečná potřeba závisí na délce sprch, frekvenci koupelí ve vaně a počtu odběrných míst. Standardní velikosti jsou 80, 100, 120, 150 a 200 litrů — pro 1–2 osoby obvykle stačí 80–100 l, pro 3–4 osoby 120–150 l, pro 5 a více osob nebo domy s vanou 150–200 l.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Bojlery se dělí na přímotopné (elektrické topné těleso uvnitř zásobníku) a nepřímotopné (ohřev přes výměník napojený na plynový kotel nebo tepelné čerpadlo). Přímotopný bojler je jednoduší na instalaci a vhodný pro byty bez plynového kotle — tarif nočního vytápění (NT) výrazně snižuje provozní náklady. Nepřímotopný bojler je úspornější tam, kde máte plynový kotel nebo tepelné čerpadlo — ohřev přes výměník je efektivnější než elektrické topné těleso. Moderní tepelná čerpadla na ohřev vody (heat pump water heater) mají COP 2–3, tedy ohřejí vodu 2–3krát levněji než přímotop.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Umístění bojleru ovlivňuje komfort a tepelné ztráty. Čím blíže k odběrným místům (koupelna, kuchyň), tím méně vody teče do odpadu při čekání na teplou vodu. Stropní montáž v koupelně šetří podlahovou plochu. Tepelná izolace zásobníku je u moderních bojlerů standardem — staré modely s tenkou izolací mohly ztrácet přes 2 kWh/den jen čekáním. Pravidelná desinfekce při 70 °C (jednou měsíčně) eliminuje nebezpečné bakterie legionelly, které se množí při teplotách 30–45 °C.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak správně topit – průvodce pro každý kotel", href: "/blog/jak-spravne-topit", icon: "🔥" },
              { title: "Tepelné čerpadlo – kompletní průvodce 2026", href: "/blog/tepelne-cerpadlo-pruvodce", icon: "♻️" },
              { title: "Kalkulačka spotřeby plynu", href: "/kalkulacky/spotreba-plynu", icon: "🔥" },
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
