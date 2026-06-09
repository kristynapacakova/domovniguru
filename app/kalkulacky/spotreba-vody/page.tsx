import type { Metadata } from "next";
import Link from "next/link";
import SpotrebaVodyCalculator from "@/app/components/SpotrebaVodyCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka spotřeby vody 2026 – kolik m³ za rok domácnost?",
  description: "Spočítejte roční spotřebu vody vaší domácnosti a náklady v Kč. Sprcha, vana, WC, mytí – výsledek okamžitě.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/spotreba-vody" },
  openGraph: { title: "Kalkulačka spotřeby vody 2026 – kolik m³ za rok domácnost?", description: "Spočítejte roční spotřebu vody vaší domácnosti a náklady v Kč. Sprcha, vana, WC, mytí – výsledek okamžitě.", url: "https://www.domovniguru.cz/kalkulacky/spotreba-vody", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20spot%C5%99eby%20vody%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka spotřeby vody 2026" }] },
};

export default function SpotrebaVodyPage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Spotřeba vody</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik vody spotřebuje vaše domácnost?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadejte počet osob a své zvyklosti — kalkulačka okamžitě spočítá roční spotřebu vody v metrech krychlových a orientační náklady v korunách. Výsledek zahrnuje sprchování, koupání, splachování WC i pitnou vodu a vaření.</p>

        <SpotrebaVodyCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Jak snížit spotřebu vody doma</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Největší rozdíl v denní spotřebě vody dělá volba mezi sprchou a koupelí. Průměrná koupel spotřebuje 150–200 litrů vody, zatímco pětiminutová sprcha jen 45–60 litrů. Sprchový kohoutek s omezeným průtokem (6–8 l/min místo standardních 12–15 l/min) sníží spotřebu vody při sprchování o 40–50 % bez výrazného snížení komfortu. Pořizovací cena úsporné sprchové hlavice se pohybuje od 200 do 800 Kč a investice se vrátí za několik měsíců.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Splachování WC tvoří 25–35 % celkové spotřeby vody v domácnosti. Starší toalety splachují 9–13 litrů na jeden splach, moderní nízkokapacitní modely jen 3–6 litrů. Pokud výměna toalety není v plánu, lze do nádrže vložit plastovou lahev naplněnou vodou nebo pískem — zmenší objem nádrže a sníží spotřebu o 1–2 litry na splach. Dvojčinné splachování (plný/poloviční splach) je dnes standardem u nových instalací a může ušetřit až 40 % vody na WC.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Pračka a myčka by měly vždy běžet na plný cyklus — spotřeba vody je téměř stejná bez ohledu na množství prádla či nádobí. Moderní myčky nádobí spotřebují na jeden cyklus jen 9–12 litrů vody, zatímco ruční mytí pod tekoucí vodou spotřebuje 40–80 litrů. Na zahradě lze výrazně šetřit pitnou vodou instalací nádoby na dešťovou vodu — 1 000litrová nádrž se pořídí za 2 000–5 000 Kč a při průměrných srážkách pokryje velkou část potřeb pro zálivku po celé léto.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Sprchový kout nebo vana – co se vyplatí?", href: "/blog/sprchovy-kout-nebo-vana", icon: "🚿" },
              { title: "Automatické zavlažování zahrady", href: "/blog/automaticke-zavlazovani-zahrady", icon: "🌿" },
              { title: "Jak ušetřit na vytápění bez výměny kotle", href: "/blog/usetrit-na-vytapeni", icon: "🔥" },
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
