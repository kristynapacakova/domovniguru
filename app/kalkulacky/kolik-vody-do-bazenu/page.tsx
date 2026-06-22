import type { Metadata } from "next";
import Link from "next/link";
import BazenCalculator from "@/app/components/BazenCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka objemu bazénu 2026 – kolik vody a chlóru potřebujete?",
  description: "Spočítejte si objem bazénu v m³ i litrech a doporučenou dávku chlóru pro šokovou i běžnou údržbovou chloraci. Rychlý online výpočet zdarma.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-vody-do-bazenu" },
  openGraph: { title: "Kalkulačka objemu bazénu 2026", description: "Spočítejte si objem bazénu v m³ i litrech a doporučenou dávku chlóru pro šokovou i běžnou údržbovou chloraci. Rychlý online výpočet zdarma.", url: "https://www.domovniguru.cz/kalkulacky/kolik-vody-do-bazenu", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20objemu%20baz%C3%A9nu%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka objemu bazénu 2026" }] },
};

export default function KolikVodyDoBazenuPage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Kolik vody do bazénu</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik vody potřebuje můj bazén?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej rozměry bazénu — kalkulačka okamžitě spočítá objem v m³ i litrech a doporučí dávkování chlóru pro šokovou dezinfekci i běžnou týdenní údržbu.</p>

        <BazenCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Jak spočítat objem bazénu a starat se o kvalitu vody</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            U obdélníkového bazénu spočítáte objem jednoduše vynásobením délky, šířky a průměrné hloubky (délka × šířka × hloubka). Pokud má bazén skloněné dno (mělčina a hlubší konec), použijte průměr obou hloubek. U ovální nebo kruhové nádrže se objem počítá přes plochu kruhu/elipsy (π × poloměr² × hloubka, případně π × a × b × hloubka pro elipsu), v praxi ale i u oválných bazénů často vystačíte s orientačním výpočtem podle „vepsaného obdélníku“ vynásobeného korekčním koeficientem kolem 0,8. Výsledný objem v m³ jednoduše převedete na litry vynásobením tisícem (1 m³ = 1000 l) — tato hodnota je klíčová pro správné dávkování chemie i pro odhad nákladů na vodu.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Kompletní výměna vody se u zahradních bazénů s běžnou chemickou úpravou obvykle dělá jen jednou za sezónu, ideálně na jaře při zprovoznění. Naopak doplňování vody je potřeba prakticky neustále — bazén ztrácí vodu odparem (zejména v horkých dnech a při intenzivním používání), zpětným proplachem filtrace a vyplavováním při koupání. V létě je běžné doplnit i několik centimetrů hladiny týdně, u menších nadzemních bazénů to může být i víc. Pravidelná kontrola hladiny a doplňování čerstvou vodou zároveň částečně ředí nečistoty a stabilizuje chemii.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Základem zdravé bazénové vody je udržovat pH v rozsahu 7,2–7,6 — při vyšším pH klesá účinnost chlóru a voda může zakalit, při nižším hrozí podráždění kůže a očí a koroze kovových částí. Volný chlor by se měl pohybovat v rozmezí 1–3 mg/l, což zajišťuje dostatečnou dezinfekci bez nadměrného zápachu a dráždivosti. Šokovou chloraci (vyšší jednorázová dávka, orientačně kolem 20 g chlóru na m³) použijte při zprovoznění bazénu na začátku sezóny, po přemnožení řas, silném dešti nebo vysoké návštěvnosti. Běžná údržbová dávka (orientačně 5 g/m³ týdně) pak udržuje vodu čistou za standardního provozu. Testovací proužky nebo digitální testery vám během pár sekund ukážou, zda je potřeba dávkování upravit.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Příprava bazénu na léto", href: "/blog/priprava-bazenu-na-leto", icon: "☀️" },
              { title: "Zazimování bazénu", href: "/blog/zazimovani-bazenu", icon: "❄️" },
              { title: "Kalkulačka zavlažování zahrady", href: "/kalkulacky/kolik-zavlahy", icon: "💧" },
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
