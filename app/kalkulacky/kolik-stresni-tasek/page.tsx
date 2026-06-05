import type { Metadata } from "next";
import Link from "next/link";
import StresniTaskyCalculator from "@/app/components/StresniTaskyCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka střešních tašek 2026 – kolik tašek na střechu?",
  description: "Kolik střešních tašek potřebuji? Zadej plochu a sklon střechy – výpočet počtu tašek s rezervou okamžitě.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-stresni-tasek" },
  openGraph: { title: "Kalkulačka střešních tašek 2026", description: "Kolik střešních tašek potřebuji? Zadej plochu a sklon střechy – výpočet počtu tašek s rezervou okamžitě.", url: "https://www.domovniguru.cz/kalkulacky/kolik-stresni-tasek", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20st%C5%99e%C5%A1n%C3%ADch%20ta%C5%A1ek%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka střešních tašek 2026" }] },
};

export default function KolikStresniTaskPage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Kolik střešních tašek</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik střešních tašek potřebuju?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej půdorysnou plochu střechy a koeficient sklonu — kalkulačka ti okamžitě spočítá skutečnou plochu sklonu a počet tašek k nákupu.</p>

        <StresniTaskyCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Typy střešních tašek a jak správně vypočítat množství</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Střešní tašky se dělí podle materiálu na betonové a keramické (pálené). Betonové tašky jsou levnější (20–60 Kč/ks), dostupné v mnoha tvarech a barvách, ale jsou těžší (3,5–5 kg/ks) a vyžadují silnější krokve. Keramické (pálenky) jsou lehčí (2,5–3,5 kg/ks), trvanlivější (50–100 let), lépe odolávají mrazu a mají přirozený vzhled — ale jsou dražší (40–120 Kč/ks). Speciální tašky zahrnují: hřebenáče, nárožní, úžlabní a větrací tašky — ty nejsou zahrnuty v základním výpočtu, ale jsou potřeba pro každou střechu.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Počet tašek na m² závisí na tvaru a formátu tašky. Standardní betonová obdélníková taška (Tegalit, Bramac) pokryje 8–12 ks/m². Klasická bobrovka nebo esovka má vyšší překryv a počet dosahuje 15–28 ks/m². Střešní systémy s větším formátem (velkoformátové plechové tašky) mohou pokrýt až 1–3 ks/m². Vždy se řiďte specifikací konkrétního výrobce a modelu — kalkulačka počítá s zadaným počtem na m², který najdete v technickém listu tašky.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Sklon střechy výrazně ovlivňuje skutečnou pokládkovou plochu. Zatímco u ploché střechy je půdorysná plocha přibližně rovna ploše střechy, u sedlové střechy se sklonem 45° je plocha střechy o 41 % větší než půdorys domu. Minimální sklon pro většinu betonových a keramických tašek je 17–22° — při nižším sklonu hrozí zatékání vody pod tašky. Při sklonu pod 17° je nutné použít speciální nízko-skloné tašky nebo fóliovou krytinu. Střecha s pravidelnou revizí (každé 3–5 let) a výměnou popraskané omítky nebo chybějících tašek vydrží bez větší opravy 30–50 let.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak odvzdušnit radiátory – krok za krokem", href: "/blog/jak-odvzdusnit-radiatory", icon: "🔧" },
              { title: "Jak vyčistit okapy – bezpečně a efektivně", href: "/blog/jak-vycistit-okapy", icon: "🏠" },
              { title: "Příprava domu na zimu – kompletní checklist", href: "/blog/priprava-domu-na-zimu", icon: "❄️" },
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
