import type { Metadata } from "next";
import Link from "next/link";
import PodlahoveTopeniCalculator from "@/app/components/PodlahoveTopeniCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka podlahového topení 2026 – délka trubky a výkon",
  description: "Kolik metrů trubky nebo kabelu na podlahové topení? Zadej plochu a rozteč – výpočet délky a výkonu okamžitě.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/podlahove-topeni" },
  openGraph: { title: "Kalkulačka podlahového topení 2026", description: "Kolik metrů trubky nebo kabelu na podlahové topení? Zadej plochu a rozteč – výpočet délky a výkonu okamžitě.", url: "https://www.domovniguru.cz/kalkulacky/podlahove-topeni", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20podlahov%C3%A9ho%20top%C4%9Bn%C3%AD%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka podlahového topení 2026" }] },
};

export default function PodlahoveTopeniPage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Podlahové topení</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Délka trubky pro podlahové topení</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej plochu místnosti a rozteč trubek nebo kabelu — kalkulačka ti okamžitě spočítá celkovou délku potrubí a instalovaný výkon.</p>

        <PodlahoveTopeniCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Vodní vs. elektrické podlahové topení – jak vybrat a dimenzovat</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Podlahové topení existuje ve dvou základních variantách: vodní (teplovodní) a elektrické. Vodní podlahové topení cirkuluje teplou vodu (30–45 °C) v síti plastových trubek uložených v betonové mazanině — je ideální pro celkové vytápění domu nebo bytu a provozně levnější díky nízkým teplotám, kde tepelná čerpadla pracují nejefektivněji. Elektrické podlahové topení (odporové kabely nebo fólie) se instaluje rychleji a levněji, ale provozní náklady jsou vyšší. Elektrické topení je oblíbené pro rekonstrukce koupelen jako doplňkový zdroj tepla — pod dlažbou poskytuje příjemné teplo nohou.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Rozteč trubek nebo kabelu určuje hustotu topného pole a tedy výkon. Standardní rozteč 15 cm dává výkon 80–120 W/m², která pokryje tepelné ztráty běžného obývacího pokoje nebo ložnice. Pro koupelny, kde je větší tepelná ztráta (velké okno, studená venkovní zeď) a kde topení slouží i jako sušák ručníků, použijte rozteč 10 cm (výkon 150–200 W/m²). Při rozteči pod 10 cm hrozí přehřátí podlahové krytiny — maximální teplota povrchu podlahy by neměla překročit 29 °C (v koupelnách 33 °C).
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Podlahová krytina musí být kompatibilní s podlahovým topením. Nejlepšími vodiči tepla jsou keramická dlažba (λ ≈ 1,3 W/mK) a přírodní kámen. Vinylové SPC a kamenoplastové podlahy jsou vhodné a označují se symbolem podlahového topení. Laminát musí mít odpor ≤ 0,15 m²K/W — kontrolujte etiketu. Masivní dřevo nad 15 mm tloušťky se pro podlahové topení obecně nedoporučuje kvůli riziku praskání při opakovaných teplotních cyklech. Koberec je tepelným izolantem a výrazně snižuje účinnost topení.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak ušetřit na vytápění", href: "/blog/usetrit-na-vytapeni", icon: "🔥" },
              { title: "Jak správně topit", href: "/blog/jak-spravne-topit", icon: "🌡️" },
              { title: "Kalkulačka tepelné izolace", href: "/kalkulacky/tepelna-izolace", icon: "💧" },
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
