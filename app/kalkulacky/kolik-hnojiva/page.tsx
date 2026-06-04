import type { Metadata } from "next";
import Link from "next/link";
import HnojivoCalculator from "@/app/components/HnojivoCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka hnojiva 2026 – kolik pytlíků potřebuji?",
  description: "Kolik kilogramů hnojiva na trávník nebo záhony? Zadej plochu a dávku – výpočet okamžitě. Trávník: 30–40 g/m².",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-hnojiva" },
  openGraph: { title: "Kalkulačka hnojiva 2026 – kolik pytlíků potřebuji?", description: "Kolik kilogramů hnojiva na trávník nebo záhony? Zadej plochu a dávku – výpočet okamžitě. Trávník: 30–40 g/m².", url: "https://www.domovniguru.cz/kalkulacky/kolik-hnojiva", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20hnojiva%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka hnojiva 2026" }] },
};

export default function KolikHnojivaPage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Kolik hnojiva</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik hnojiva potřebuju?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej plochu a dávku hnojiva — kalkulačka ti okamžitě spočítá přesné množství v kilogramech a počet pytlíků k nákupu.</p>

        <HnojivoCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Jak správně hnojit – typy hnojiv a termíny aplikace</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Hnojení trávníku se liší od hnojení záhonů jak dávkou, tak výběrem hnojiva. Trávník potřebuje hlavně dusík (N), který stimuluje tvorbu zeleného porostu — proto jarní hnojení dusíkatými hnojivy (NPK s vysokým N) dává trávníku startovací impuls po zimě. Na jaře (duben–květen) aplikujte 30–40 g/m², v létě 20–30 g/m² a na podzim přejděte na hnojivo s nižším N a vyšším K (draslíkem), který posiluje kořeny a odolnost vůči mrazu. Záhony s letničkami a zeleninou hnojte hloubkově již při přípravě půdy na jaře — zapracujte 20–30 g/m² granulovaného hnojiva do horních 10 cm půdy.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Organická hnojiva (kompost, hnůj, rybí moučka) jsou přirozenějším a šetrnějším způsobem hnojení — živiny uvolňují pomalu a zároveň zlepšují strukturu půdy a podporují půdní mikroorganismy. Nevýhodou je nepřesné složení a pomalejší nástup účinku. Minerální (průmyslová) hnojiva jsou přesně dávkovaná a rychle dostupná — vhodná pro akutní nedostatky živin. V praxi funguje nejlépe kombinace: základní hnojení organickým hnojivem na jaře a přihnojování minerálním hnojivem v sezóně.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Přehnojení je stejně škodlivé jako nedostatečné hnojení. Příliš vysoká koncentrace živin způsobuje spálení kořenů (&quot;hnojivový burn&quot;), oslabuje rostliny a kontaminuje spodní vody. Vždy se řiďte doporučením na obalu hnojiva a neplánujte hnojení těsně před deštěm — silné srážky hnojivo spláchnou do odtoku, aniž by ho rostliny stačily vstřebat. Ideální je hnojit na vlhkou půdu za bezdeštného počasí a pak lehce zavlažit.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak správně hnojit zahradu", href: "/blog/jak-hnojit-zahradu", icon: "🌿" },
              { title: "Jak zasít trávník od nuly – krok za krokem", href: "/blog/zasit-travnik-od-nuly", icon: "🌱" },
              { title: "Kalkulačka osiva na trávník", href: "/kalkulacky/kolik-osiva", icon: "🌱" },
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
