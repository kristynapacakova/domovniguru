import type { Metadata } from "next";
import Link from "next/link";
import CenaPodlahyCalculator from "@/app/components/CenaPodlahyCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka ceny podlahy 2026 – kolik stojí nová podlaha?",
  description: "Kolik stojí nová podlaha? Zadej plochu, cenu materiálu a pokládky – celkový odhad nákladů okamžitě. Laminát, vinyl, parkety.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/cena-podlahy" },
  openGraph: { title: "Kalkulačka ceny podlahy 2026", description: "Kolik stojí nová podlaha? Zadej plochu, cenu materiálu a pokládky – celkový odhad nákladů okamžitě. Laminát, vinyl, parkety.", url: "https://www.domovniguru.cz/kalkulacky/cena-podlahy", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20ceny%20podlahy%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka ceny podlahy 2026" }] },
};

export default function CenaPodlahyPage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Cena podlahy</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik stojí nová podlaha?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej plochu místnosti, cenu materiálu a pokládky — kalkulačka ti okamžitě odhadne celkové náklady na novou podlahu v korunách.</p>

        <CenaPodlahyCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Přehled cen podlah a nákladů na pokládku 2026</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Ceny podlahových materiálů v ČR pokrývají velmi široké spektrum. Laminátové podlahy (AC3–AC5) jsou nejdostupnějším řešením — ekonomická třída AC3 stojí 150–250 Kč/m², kvalitní AC5 pro intenzivní provoz 400–700 Kč/m². Vinylové SPC podlahy (stone plastic composite) jsou odolnější vůči vodě a vhodné do koupelen a kuchyní — ceny se pohybují 350–900 Kč/m². Dřevěné parkety a třívrstvé dřevo začínají na 800 Kč/m² u dubových 3-vrstvých desek a dosahují 2 500–5 000 Kč/m² za masivní exotické dřevo. Keramická dlažba (kalkulačka kolik-dlazby) je kategorií sama pro sebe.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Pokládku podlahy lze zadat řemeslníkovi nebo provést svépomocně. Profesionální pokládka stojí 150–300 Kč/m² pro laminát a vinyl, 300–600 Kč/m² pro parkety (broušení, lakování). Svépomocná pokládka laminátu není obtížná — jde o systém click-lock bez lepidla. Parkety vyžadují zkušenosti a specializované nářadí. Podložka (kročejová izolace) je nezbytná pro zvukový útlum — stojí 30–80 Kč/m² a pokládá se pod laminát i vinyl.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Před výpočtem celkových nákladů zohledněte i přípravné práce: vyrovnání betonové vrstvy (samonivelační hmota stojí 100–200 Kč/m², práce 150–300 Kč/m²), demontáž staré podlahy (50–150 Kč/m²), soklové lišty (30–80 Kč/bm) a případné zakrytí topných trubek nebo kabelu v podlaze. U bytů v panelovém domě ověřte, zda nová podlaha nepřekračuje povolenou váhu — masivní kamenná dlažba nebo lité podlahy mohou mít vyšší m² hmotnost než stavební projekt předpokládá.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak klást vinyl podlahu krok za krokem", href: "/blog/kladeni-vinyl-podlahy", icon: "🪵" },
              { title: "Kalkulačka laminátu", href: "/kalkulacky/kolik-laminatu", icon: "📐" },
              { title: "Jak renovovat parketovou podlahu", href: "/blog/renovovat-parkety", icon: "✨" },
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
