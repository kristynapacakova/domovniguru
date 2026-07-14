import type { Metadata } from "next";
import Link from "next/link";
import LepidloNaDlazbCalculator from "@/app/components/LepidloNaDlazbCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka lepidla na dlažbu 2026 – kolik kg potřebuji?",
  description: "Spočítej přesnou spotřebu lepidla na dlažbu podle plochy a typu lepidla. Výsledek v kg a pytlích okamžitě.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-lepidla-na-dlazbu" },
  openGraph: { title: "Kalkulačka lepidla na dlažbu 2026", description: "Kolik kg lepidla na dlažbu? Výsledek okamžitě.", url: "https://www.domovniguru.cz/kalkulacky/kolik-lepidla-na-dlazbu", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20lepidla%20na%20dla%C5%BEbu%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka lepidla na dlažbu 2026" }] },
};

export default function KolikLepidlaNaDlazbPage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Kolik lepidla na dlažbu</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik lepidla na dlažbu potřebuji?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej plochu a vyber typ lepidla — kalkulačka spočítá kilogramy i počet pytlů s rezervou.</p>

        <LepidloNaDlazbCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Jak vybrat správné lepidlo na dlažbu</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Lepidla na dlažbu se dělí podle normy ČSN EN 12004 do tříd. Standardní lepidlo třídy C1 (cementové, normální) je vhodné pro keramiku na pevné a rovné podklady v interiéru. Flexibilní lepidlo C2 (nebo označení S1/S2 pro deformovatelnost) je nutností na podlahové vytápění, na anhydritové potěry, na větší formáty dlaždic (nad 30×30 cm) a do koupelen nebo venkovních prostor. Epoxidové lepidlo R2 je nejodolnější — chemicky, mechanicky i teplotně — ale také nejdražší a technicky nejnáročnější na zpracování.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Spotřeba lepidla závisí nejen na specifikaci výrobce, ale zejména na rovnosti podkladu. Pokud podklad vykazuje odchylky větší než 3 mm na 2 m latě, je třeba nejprve vyrovnat samonivelační stěrkou — snaha kompenzovat nerovnosti extra tloušťkou lepidla vede k praskání nebo k tomu, že se dlažba nikdy nepřilne plnoploše. Zubová stěrka se volí dle velikosti formátu: 6 mm zuby na dlažbu do 15×15 cm, 8–10 mm na formáty do 30×30 cm, 12 mm a více na velkoformátové desky.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300 }}>
            Klíčové pravidlo: každá dlaždice musí být plnoploše přilepena. To znamená, že po sejmutí čerstvě položené dlaždice by mělo mít lepidlo kontakt s alespoň 90 % plochy (v exteriéru a mokrém prostředí 100 %). Dutiny pod dlaždicí jsou místem, kde se hromadí vlhkost, dochází ke kondenzaci a v zimě ke kryogennímu rozrušení. „Dutá" dlaždice je zárodek pozdějšího prasknutí.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Kolik dlažby potřebuji?", href: "/kalkulacky/kolik-dlazby", icon: "🧱" },
              { title: "Kolik spárovačky potřebuji?", href: "/kalkulacky/kolik-sparovacky", icon: "🪣" },
              { title: "Kladení dlažby v koupelně", href: "/blog/kladeni-dlazby-v-koupelne", icon: "🚿" },
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
