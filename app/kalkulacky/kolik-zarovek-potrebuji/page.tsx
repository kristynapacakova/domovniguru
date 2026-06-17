import type { Metadata } from "next";
import Link from "next/link";
import ZarovkyCalculator from "@/app/components/ZarovkyCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka počtu žárovek 2026 – kolik lumenů potřebuje místnost",
  description: "Kolik LED žárovek a kolik lumenů potřebuje vaše místnost? Zadejte plochu a typ místnosti – kalkulačka okamžitě spočítá doporučený počet žárovek.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-zarovek-potrebuji" },
  openGraph: { title: "Kalkulačka počtu žárovek 2026", description: "Kolik LED žárovek a kolik lumenů potřebuje vaše místnost? Zadejte plochu a typ místnosti – kalkulačka okamžitě spočítá doporučený počet žárovek.", url: "https://www.domovniguru.cz/kalkulacky/kolik-zarovek-potrebuji", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20po%C4%8Dtu%20%C5%BE%C3%A1rovek%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka počtu žárovek 2026" }] },
};

export default function KolikZarovekPotrebujiPage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Počet žárovek</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik žárovek potřebuji do místnosti?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej plochu místnosti a vyber její typ — kalkulačka ti okamžitě spočítá potřebné množství lumenů a doporučený počet LED žárovek.</p>

        <ZarovkyCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Lumeny vs. watty – jak vybrat správné osvětlení</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Dříve se síla osvětlení odhadovala podle wattů, protože klasické wolframové žárovky měly u všech výrobců podobnou účinnost. U LED žárovek to ale neplatí — stejný výkon ve wattech může u různých výrobků dát úplně jiné množství světla. Proto je správné jednotkou pro plánování osvětlení lumen (lm), který udává skutečné množství vyzářeného světla. Watt naopak vyjadřuje jen spotřebu elektřiny. Orientačně platí, že 800 lm odpovídá přibližně 60W klasické žárovce, 1000 lm zhruba 75W žárovce a 1500 lm asi 100W žárovce — LED žárovka ale na dosažení stejného světelného výkonu spotřebuje jen zlomek této energie, typicky 8–15 W.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Kromě množství světla je důležitá i jeho barevná teplota, udávaná v kelvinech (K). Teplé bílé světlo (2700–3000 K) působí příjemně a útulně, podporuje uvolnění a je proto ideální do obývacího pokoje a ložnice, kde chcete vytvořit klidnou atmosféru na odpočinek. Neutrální až studené bílé světlo (4000 K a více) naopak zvyšuje pozornost a usnadňuje soustředění na detaily — hodí se do kuchyně, koupelny nebo pracovny, kde potřebujete dobře vidět při vaření, holení nebo práci u počítače. Špatně zvolená teplota světla dokáže i dostatečně silné osvětlení znepříjemnit — studené světlo v ložnici působí nepříjemně chladně a rušivě, teplé světlo v pracovně naopak unavuje oči a snižuje koncentraci.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Při plánování osvětlení se vyplatí myslet i na rozmístění svítidel, nejen na celkový součet lumenů. Jedno silné stropní svítidlo uprostřed místnosti často vytváří tvrdé stíny, ostré přechody mezi světlem a tmou a nerovnoměrně osvětlené koutky. Více slabších zdrojů světla rozmístěných po místnosti — stropní svítidla doplněná stojací lampou, nástěnnými svítidly nebo LED páskem — rozloží světlo rovnoměrněji, omezí stíny a umožní podle potřeby kombinovat různé zóny osvětlení (například jasné světlo na čtení a tlumenější ambientní světlo na večerní odpočinek). Tento přístup je zvlášť užitečný v obývacích pokojích a kuchyních s jídelním koutem, kde se v jedné místnosti odehrávají různé činnosti vyžadující jinou intenzitu světla.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak vybrat LED žárovku", href: "/blog/jak-vybrat-led-zarovku", icon: "💡" },
              { title: "LED vs. klasické žárovky", href: "/blog/led-vs-zarovky", icon: "🔆" },
              { title: "Kalkulačka úspory LED osvětlení", href: "/kalkulacky/led-uspora", icon: "⚡" },
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
