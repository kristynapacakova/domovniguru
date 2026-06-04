// ════════════════════════════════════════════════════════════════
// SOUBOR: app/kalkulacky/kolik-primeru/page.tsx
// ════════════════════════════════════════════════════════════════
import type { Metadata } from "next";
import Link from "next/link";
import PrimerCalculator from "@/app/components/PrimerCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka penetrace 2026 – kolik litrů primeru potřebuji?",
  description: "Kolik litrů penetrace před malováním? Zadej plochu a vydatnost – výpočet okamžitě. Na savé omítky doporučujeme 2 vrstvy.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-primeru" },
  openGraph: { title: "Kalkulačka penetrace 2026", description: "Kolik litrů penetrace před malováním? Zadej plochu a vydatnost – výpočet okamžitě.", url: "https://www.domovniguru.cz/kalkulacky/kolik-primeru", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20penetrace%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka penetrace 2026" }] },
};

export default function KolikPrimeruPage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Kolik penetrace</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik penetrace (primeru) potřebuju?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej plochu stěn, vydatnost penetrace a počet vrstev — kalkulačka ti okamžitě spočítá přesné množství v litrech.</p>

        <PrimerCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Proč penetrovat a kdy použít dvě vrstvy</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Penetrace (primer) je tenká vrstva přípravného nátěru, která sjednocuje savost podkladu před malováním nebo lepením. Nové sádrové a vápenopískové omítky jsou extrémně savé — bez penetrace barva proniká hluboko do povrchu, výsledný povrch je matný a nerovnoměrný a spotřeba barvy se zvyšuje o 20–40 %. Na starých omítkách nebo beton penetrace naopak zlepšuje přilnavost, takže barva neodpadá a neprasklelá. Každý výrobce udává vydatnost na litr — ta bývá 8–12 m²/l na standardních podkladech, ale na silně savých materiálech (sádra, porobeton) klesá na 4–6 m²/l.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Dvě vrstvy penetrace jsou doporučovány vždy, když: (1) jde o novou, ještě nevyschlou omítku, (2) malujete na porobeton nebo na hrubou vápennou omítku, (3) předchozí nátěr se drolí nebo loupá, nebo (4) přecházíte z tmavé barvy na světlou a chcete dosáhnout krycí schopnosti na dvě vrstvy finální barvy. Mezi vrstvami počkejte minimálně 2–4 hodiny do úplného vyschnutí — vlhká penetrace neváže a druhá vrstva ji stáhne zpět.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Penetraci nanášejte válečkem nebo štětkou, stejnými nástroji jako barvu. Ředění závisí na výrobci — nejčastěji 5–10 % vodou pro první vrstvu na vysoce savé povrchy. Pro betonové povrchy, kde musí primer proniknout do hloubky (např. garážová podlaha), zvolte speciální hloubkovou penetraci (deep penetration primer), která váže volné části a posiluje podklad. Po vyschnutí penetrace lehce přebruste povrch brusnou houbičkou — odstraníte stojící vlákna papíru z omítky a nátěr barvy bude rovnoměrnější.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Proč malovat s penetrací – a co hrozí bez ní", href: "/blog/penetrace-pred-malovanim", icon: "🪣" },
              { title: "Jak malovat zeď – kompletní průvodce", href: "/blog/jak-malovat-zed", icon: "🖌️" },
              { title: "Kalkulačka barvy na zeď", href: "/kalkulacky/kolik-barvy", icon: "🪣" },
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
