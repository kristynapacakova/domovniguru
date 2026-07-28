import type { Metadata } from "next";
import Link from "next/link";
import PlotCalculator from "@/app/components/PlotCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka plotu 2026 – kolik dílců a sloupků potřebuji?",
  description: "Spočítej, kolik plotových dílců, sloupků a vzpěr potřebuješ podle délky plotu, šířky pole a počtu branek a bran. Výsledek okamžitě a zdarma.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-plotovych-dilcu" },
  openGraph: { title: "Kalkulačka plotu 2026", description: "Kolik plotových dílců a sloupků potřebuji? Výsledek okamžitě.", url: "https://www.domovniguru.cz/kalkulacky/kolik-plotovych-dilcu", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20plotu%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka plotu 2026" }] },
};

export default function KolikPlotovychDilcuPage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Kolik plotových dílců</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik plotových dílců a sloupků potřebuji?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej délku plotu, šířku jednoho pole a počet branek a bran — kalkulačka spočítá počet dílců, sloupků i vzpěr.</p>

        <PlotCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Jak spočítat materiál na plot kolem domu</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Základem každého rozpočtu na oplocení je čistá délka výplně — tedy celková délka plotu zmenšená o šířku branek a bran. Branka pro pěší má obvykle kolem 1 metru, brána nebo vjezd pro auto zpravidla 3,5 metru. Teprve zbývající délku dělíme šířkou jednoho pole (u většiny systémových plotů 2 až 2,5 metru), abychom zjistili počet plotových dílců. Výsledek se zaokrouhluje nahoru — poslední, kratší pole se buď zkrátí na míru, nebo se řeší dořezem.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Počet sloupků je vždy o jeden vyšší než počet polí v jednom souvislém úseku (na koncích i mezi poli stojí sloupek). U branek a bran je ale potřeba počítat s nosnými sloupky navíc — u každého otvoru stojí robustnější sloupky po obou stranách, protože nesou váhu křídla i zátěž při otevírání. Silnější sloupky u vrat proto do rozpočtu přidejte zvlášť a nešetřete na jejich ukotvení do betonu.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300 }}>
            Vzpěry (šikborné vzpěry) zpevňují napínací a rohové sloupky, zejména u pletivových plotů. Orientačně počítejte s jednou vzpěrou přibližně na každé čtyři sloupky, u rohů a na koncích řady je vzpěra prakticky vždy. Na svažitém terénu, v místech s návětrnou stranou nebo u vyšších plotů se počet vzpěr i hloubka základů zvyšuje — vždy proto berte výsledek kalkulačky jako výchozí odhad a upřesněte jej podle konkrétní situace a typu plotu.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak vybrat plot kolem domu", href: "/blog/jak-vybrat-plot-kolem-domu", icon: "🏡" },
              { title: "Zahradní plot ze dřeva", href: "/blog/zahradni-plot-ze-dreva", icon: "🪵" },
              { title: "Kalkulačka betonu", href: "/kalkulacky/kolik-betonu", icon: "🧱" },
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
