// ════════════════════════════════════════════════════════════════
// SOUBOR: app/kalkulacky/kolik-dlazby/page.tsx
// ════════════════════════════════════════════════════════════════
import type { Metadata } from "next";
import Link from "next/link";
import DlazbCalculator from "@/app/components/DlazbCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka dlažby 2026 – kolik dlaždic potřebuju s rezervou?",
  description: "Spočítej přesný počet dlaždic včetně 10% rezervy na prořezy a rohy. Zadej rozměry místnosti a dlaždice – výsledek okamžitě.",
  alternates: { canonical: "https://domovniguru.cz/kalkulacky/kolik-dlazby" },
  openGraph: { title: "Kalkulačka dlažby 2026", description: "Počet dlaždic s rezervou na prořezy. Výsledek okamžitě.", url: "https://domovniguru.cz/kalkulacky/kolik-dlazby", siteName: "DomovniGuru", locale: "cs_CZ", type: "website" },
};

export default function KolikDlazbyPage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Kolik dlažby</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik dlažby potřebuju?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej rozměry místnosti a dlaždice — kalkulačka přidá 10% rezervu na prořezy a rohy.</p>

        <DlazbCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Proč je 10% rezerva u dlažby nutností, ne volbou</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            U každé pokládky dlažby vznikají prořezy — u rohů, sloupků, výklenků a kolem sanitárních zařízení. I v zdánlivě čtvercové místnosti tvoří prořezy typicky 8–12 % z celkové plochy. U vzorované nebo diagonálně kladené dlažby může odpad vzrůst až na 15–20 %. Pokud koupíš přesně tolik kusů kolik vychází z plochy místnosti, téměř jistě ti bude na konci chybět 3–10 dlaždic — a druhá objednávka ze stejné šarže nemusí být dostupná.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Šarže (výrobní série) je klíčový pojem u dlažby. Stejný model dlažby vyrobený v jiné šarži může mít mírně odlišný odstín nebo strukturu povrchu — rozdíl nemusí být viditelný v obchodě pod umělým světlem, ale na položené podlaze v přirozeném světle bude patrný. Vždy kupuj všechny dlaždice najednou a z jedné šarže (číslo je na krabici nebo etiketě). Zbývající dlaždice ulož — jsou neocenitelné pro budoucí opravy.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Před pokládkou nechej dlažbu 24–48 hodin aklimatizovat v místnosti. Keramická a porcelánová dlažba jsou sice relativně stabilní, ale prudká změna teploty (z chladného skladu do teplé koupelny) může způsobit mikrotrhliny nebo deformace maltového lože. Materiál skladuj ve svislé poloze (na hraně) nebo naplocho na rovné ploše — nikdy nenakládej krabice na výšku přes 4–5 vrstev, hrozí prasknutí spodních kusů.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak pokládat betonové dlaždice na terasu", href: "/blog/pokladat-betonove-dlazdice", icon: "🔲" },
              { title: "Jak vyčistit spáry v dlažbě", href: "/navody/jak-vycistit-spary-v-dlazbe", icon: "🧹" },
              { title: "Jak utěsnit vanu silikonem", href: "/navody/jak-utesnit-vanu-silikonem", icon: "🚿" },
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
