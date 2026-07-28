import type { Metadata } from "next";
import Link from "next/link";
import RosnyBodCalculator from "@/app/components/RosnyBodCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka rosného bodu 2026 – hrozí kondenzace a plíseň?",
  description: "Spočítej rosný bod z teploty a vlhkosti vzduchu podle Magnusova vzorce. Zjisti, zda na stěně hrozí kondenzace a růst plísní. Výsledek okamžitě.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kalkulacka-rosneho-bodu" },
  openGraph: { title: "Kalkulačka rosného bodu 2026", description: "Hrozí kondenzace a plíseň na stěnách? Spočítej rosný bod okamžitě.", url: "https://www.domovniguru.cz/kalkulacky/kalkulacka-rosneho-bodu", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20rosn%C3%A9ho%20bodu%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka rosného bodu 2026" }] },
};

export default function KalkulackaRosnehoBoduPage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Kalkulačka rosného bodu</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kalkulačka rosného bodu</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej teplotu vzduchu a relativní vlhkost — kalkulačka spočítá rosný bod a vyhodnotí, zda na stěně hrozí kondenzace a plíseň.</p>

        <RosnyBodCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Co je rosný bod a proč na něm záleží</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Rosný bod je teplota, při které je vzduch nasycený vodní parou a přebytečná vlhkost začíná kondenzovat do kapalného skupenství. Když se teplý vlhký vzduch v místnosti dotkne povrchu chladnějšího než rosný bod — typicky obvodové stěny, rohu, ostění okna nebo tepelného mostu — vodní pára se na něm sráží ve formě kapiček. Právě tato skrytá vlhkost je nejčastější příčinou plísní v bytech, i když stěna na první pohled vypadá suchá.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Kalkulačka počítá rosný bod pomocí Magnusova vzorce, který je pro běžné pokojové teploty velmi přesný. Stačí zadat teplotu vzduchu a relativní vlhkost — údaje, které ukáže každý levný pokojový vlhkoměr. Pokud navíc změříte teplotu povrchu stěny (nejlépe bezdotykovým infračerveným teploměrem v nejchladnějším rohu), kalkulačka rovnou vyhodnotí, jestli je rozdíl dostatečně bezpečný.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300 }}>
            Praktické pravidlo zní: povrch stěny by měl být alespoň o 3 °C teplejší než rosný bod. Pokud je rozdíl menší, riskujete dlouhodobé zavlhčení a růst plísní. Snížit riziko lze dvěma cestami — snížit vlhkost vzduchu (pravidelné intenzivní větrání, méně sušení prádla v pokoji, odvětrání koupelny a kuchyně) nebo zvýšit teplotu chladných povrchů (zateplení, odstranění tepelných mostů, nezakrývání radiátorů nábytkem).
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Rosný bod a kondenzace na zdech", href: "/blog/rosny-bod-a-kondenzace-na-zdech", icon: "💧" },
              { title: "Jak se zbavit vlhkosti v bytě", href: "/blog/zbavit-se-vlhkosti-v-byte", icon: "🏠" },
              { title: "Kalkulačka výměny vzduchu", href: "/kalkulacky/vymena-vzduchu", icon: "💨" },
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
