// ════════════════════════════════════════════════════════════════
// SOUBOR: app/kalkulacky/led-uspora/page.tsx
// ════════════════════════════════════════════════════════════════
import type { Metadata } from "next";
import Link from "next/link";
import LedSavingsCalculator from "@/app/components/LedSavingsCalculator";

export const metadata: Metadata = {
  title: "Kolik ušetřím LED žárovkami? Kalkulačka úspory 2026",
  description:
    "Spočítej roční úsporu při výměně klasických žárovek za LED. Zadej počet žárovek, příkon a cenu elektřiny – výsledek okamžitě.",
  alternates: { canonical: "https://domovniguru.cz/kalkulacky/led-uspora" },
  openGraph: {
    title: "Kolik ušetřím LED žárovkami? Kalkulačka 2026",
    description: "Roční úspora, návratnost investice a úspora CO₂. Výsledek okamžitě.",
    url: "https://domovniguru.cz/kalkulacky/led-uspora",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "website",
  },
};

export default function LedUsporaPage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "720px" }}>

        {/* Breadcrumb */}
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span>
          <Link href="/kalkulacky">Kalkulačky</Link><span>/</span>
          <span>LED úspora</span>
        </nav>

        {/* Nadpis */}
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>
          Kolik ušetřím přechodem na LED žárovky?
        </h1>
        <p style={{ fontSize: "17px", color: "#7a6020", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>
          Posuň slidery a zjisti roční úsporu pro celou domácnost — včetně doby návratnosti investice a úspory CO₂.
        </p>

        {/* KALKULAČKA */}
        <LedSavingsCalculator />

        {/* ══ SEO TEXT ══════════════════════════════════════════════ */}
        <div style={{ marginTop: "56px", borderTop: "1px solid #e8d860", paddingTop: "40px" }}>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", color: "#2a1f00" }}>
            Proč nečekat, až stará žárovka praskne
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.85, color: "#3a2a00", fontWeight: 300, marginBottom: "16px" }}>
            Intuice říká: „Vyměním žárovku, až přestane svítit." Ekonomická logika říká přesný opak. Každý den kdy fungující 60W žárovka svítí místo 9W LED tě stojí peníze — při 4 hodinách svícení a ceně 6 Kč/kWh to dělá přibližně 1,25 Kč denně na jedinou žárovku. Na 12 žárovkách v bytě je to přes 5 400 Kč ročně navíc oproti LED alternativě. Pořizovací cena kvalitní LED žárovky (Philips, Osram) se pohybuje kolem 80–120 Kč — celá investice se vrátí za 2–4 měsíce. Každý měsíc odkládání výměny funkční staré žárovky je tedy čistá ztráta, nikoliv úspora. Navíc klasické žárovky (wolframové vlákno) jsou v EU od roku 2012 zakázány k prodeji a dostupnost náhrad postupně mizí.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", color: "#2a1f00" }}>
            Co je světelný tok (lumen) a proč watty nestačí
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.85, color: "#3a2a00", fontWeight: 300, marginBottom: "16px" }}>
            Watt (W) měří příkon — tedy kolik energie žárovka spotřebuje. U klasických žárovek byl příkon a jas přímočaře propojený, proto jsme si zvykli říkat „60wattová žárovka". U LED to neplatí — moderní LED produkuje stejný jas (světelný tok) za zlomek energie. Správnou jednotkou pro porovnání jasu je <strong>lumen (lm)</strong>. 60W klasická žárovka produkuje přibližně 750–800 lm. LED náhrada dosahuje stejného toku při pouhých 8–9 W — tedy při přibližně 85 % nižší spotřebě energie. Pro koupelnu a pracovnu hledej žárovky s 800+ lm, pro ambientní osvětlení ložnice stačí 400–600 lm. Druhý klíčový parametr je CRI (index podání barev) — hledej hodnotu 80+, v koupelně ideálně 90+ pro přesné vnímání barev.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", color: "#2a1f00" }}>
            Jak LED žárovky snižují produkci tepla v bytě
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.85, color: "#3a2a00", fontWeight: 300, marginBottom: "0" }}>
            Klasická wolframová žárovka přeměňuje na viditelné světlo pouze 5–8 % spotřebované energie — zbylých 92–95 % se mění v teplo. V létě toto teplo zvyšuje teplotu v místnosti a zvyšuje nároky na klimatizaci nebo větrání. U 12 klasických 60W žárovek v bytě jde o tepelný výkon přes 650 W — srovnatelný s malým elektrickým topidlem. LED žárovky přeměňují na světlo 30–50 % energie a zbytek se sice také mění na teplo, ale při příkonu 9 W místo 60 W je celkové tepelné zatížení místnosti dramaticky nižší. V zimě toto teplo z žárovek trochu pomáhá — v létě je to čistý problém. Přechod na LED tak šetří nejen na účtu za elektřinu, ale v klimatizovaných bytech i na chlazení.
          </p>
        </div>

        {/* Mohlo by vás zajímat */}
        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a7020", marginBottom: "16px" }}>
            Mohlo by vás zajímat
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak vybrat LED žárovku – parametry, Kelviny, CRI", href: "/blog/jak-vybrat-led-zarovku", icon: "💡" },
              { title: "LED vs. žárovky – co se skutečně vyplatí?", href: "/blog/led-vs-zarovky", icon: "⚖️" },
              { title: "Jak snížit účet za elektřinu doma", href: "/blog/snizit-ucet-za-elektrinu", icon: "💰" },
            ].map(r => (
              <Link key={r.href} href={r.href} style={{
                display: "block", background: "#fffdf0",
                border: "1px solid #e8d860", borderRadius: "10px",
                padding: "14px 16px", textDecoration: "none",
              }}>
                <div style={{ fontSize: "18px", marginBottom: "6px" }}>{r.icon}</div>
                <div style={{ fontSize: "14px", fontWeight: 500, color: "#2a1f00", lineHeight: 1.4 }}>{r.title}</div>
                <div style={{ fontSize: "12px", color: "#9a7820", marginTop: "6px" }}>Číst →</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
