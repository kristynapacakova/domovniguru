import type { Metadata } from "next";
import Link from "next/link";
import SpotrebaElektCalculator from "@/app/components/SpotrebaElektCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka spotřeby elektřiny 2026 – kolik platím za domácnost?",
  description: "Spočítejte roční spotřebu elektřiny vaší domácnosti a náklady v Kč. Upravte příkon a dobu provozu každého spotřebiče.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/spotreba-elektriciny" },
  openGraph: { title: "Kalkulačka spotřeby elektřiny 2026", description: "Spočítejte roční spotřebu elektřiny vaší domácnosti a náklady v Kč. Upravte příkon a dobu provozu každého spotřebiče.", url: "https://www.domovniguru.cz/kalkulacky/spotreba-elektriciny", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20spot%C5%99eby%20elektřiny%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka spotřeby elektřiny 2026" }] },
};

export default function SpotrebaElektricinyPage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Spotřeba elektřiny</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik stojí elektřina v domácnosti?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Uprav příkon a počet hodin provozu každého spotřebiče — kalkulačka ti okamžitě spočítá roční spotřebu v kWh a náklady v korunách.</p>

        <SpotrebaElektCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Jak snížit spotřebu elektřiny v domácnosti</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Průměrná česká domácnost spotřebuje 2 500–4 500 kWh elektřiny ročně, přičemž největší podíl tvoří vytápění (pokud je elektrické), ohřev vody, chlazení (lednice + mraznička) a vaření. Největší vliv na roční účet má tedy výběr způsobu vytápění a přípravy teplé vody — domácnost s elektrickým bojlerem může ušetřit 30–50 % nákladů přechodem na solární ohřev nebo tepelné čerpadlo. Přístroje v klidovém režimu (standby) tvoří 5–10 % roční spotřeby — televizory, set-top boxy a nabíječky v zásuvce nonstop spotřebovávají „tiché watty".
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Největší okamžitý efekt na snížení spotřeby bez investic má změna chování: zkrátit dobu sprchování o 2 minuty ušetří 10–15 % výdajů za ohřev vody, plná myčka místo ruční mytí nádobí šetří vodu i energii, a vaření pod pokličkou zkracuje dobu vaření a snižuje spotřebu varné desky o 30 %. Při nákupu nových spotřebičů vybírejte energetickou třídu A nebo A+++ — moderní lednice třídy A+++ spotřebuje jen 100–150 kWh/rok oproti staré lednici třídy A, která může spotřebovat 400–500 kWh.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Chytré zásuvky a měřicí adaptéry (např. Shelly Plug, TP-Link Tapo) umožňují přesně změřit skutečnou spotřebu každého spotřebiče — výsledky bývají překvapivé. Stará plazmatová televize může spotřebovat 200–300 W, zatímco moderní OLED televizor jen 80–120 W. Robotický vysavač na baterie spotřebovává minimum energie na chodu, ale nabíječka v zástrčce 24/7 přidává klidové watty. Výsledky kalkulačky jsou orientační — skutečná spotřeba závisí na technickém stavu spotřebičů a způsobu jejich používání.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak snížit účet za elektřinu – 15 ověřených tipů", href: "/blog/snizit-ucet-za-elektrinu", icon: "💡" },
              { title: "Kalkulačka LED žárovek – kolik ušetřím?", href: "/kalkulacky/led-uspora", icon: "💡" },
              { title: "Chytrá domácnost – kde začít", href: "/blog/chytra-domacnost-zaciname", icon: "🏠" },
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
