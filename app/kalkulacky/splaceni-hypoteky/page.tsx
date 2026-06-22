import type { Metadata } from "next";
import Link from "next/link";
import HypotekaCalculator from "@/app/components/HypotekaCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka hypotéky 2026 – měsíční splátka a přeplacení",
  description: "Spočítejte měsíční splátku hypotéky, celkové přeplacení a náklady na úroky. Jednoduchý výpočet pro libovolnou výši úvěru a sazbu.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/splaceni-hypoteky" },
  openGraph: { title: "Kalkulačka hypotéky 2026 – měsíční splátka a přeplacení", description: "Spočítejte měsíční splátku hypotéky, celkové přeplacení a náklady na úroky. Jednoduchý výpočet pro libovolnou výši úvěru a sazbu.", url: "https://www.domovniguru.cz/kalkulacky/splaceni-hypoteky", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20hypot%C3%A9ky%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka hypotéky 2026 – měsíční splátka a přeplacení" }] },
};

export default function SplaceniHypotekyPage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Splácení hypotéky</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik zaplatím na hypotéce?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadejte výši úvěru, úrokovou sazbu a dobu splatnosti — kalkulačka okamžitě spočítá měsíční splátku i celkové přeplacení. Výsledky se aktualizují živě při každé změně, takže snadno porovnáte různé varianty financování.</p>

        <HypotekaCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Co ovlivňuje výši hypotéky a jak ušetřit</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Úroková sazba má na celkové přeplacení zásadní vliv. Rozdíl jediného procentního bodu u hypotéky 3,5 milionu Kč na 25 let znamená o stovky tisíc korun vyšší celkové náklady. Proto se vyplatí věnovat čas porovnání nabídek více bank a pravidelně sledovat situaci při blížící se refixaci — přechod k jinému poskytovateli bývá administrativně jednoduchý a může přinést reálnou úsporu. Kratší splatnost snižuje celkové přeplacení, ale zvyšuje měsíční splátku; delší splatnost uvolní cashflow, avšak zaplatíte výrazně více na úrocích.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            LTV (poměr výše úvěru k hodnotě nemovitosti) přímo ovlivňuje, jakou sazbu banka nabídne. Čím více vlastních zdrojů vložíte, tím nižší sazbu zpravidla získáte — LTV pod 70 % nebo pod 80 % obvykle otvírá přístup k výhodnějším tarifům. Vlastní zdroje nemusí pocházet jen ze spoření; pomoci může mimořádná splátka z prodeje jiné nemovitosti, dědictví nebo dar od rodiny. Při financování koupě staršího domu zvažte, zda nezahrnout do hypotéky i prostředky na rekonstrukci — úrokové sazby hypotečních úvěrů bývají nižší než sazby spotřebitelských úvěrů nebo stavebního spoření.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Při výběru mezi fixní a variabilní sazbou záleží na aktuální situaci na trhu a vašem postoji k riziku. Fixace na 3–5 let poskytuje jistotu neměnné splátky a usnadňuje plánování rodinného rozpočtu. Variabilní sazba (PRIBOR + marže) může být v určitých obdobích výhodnější, ale splátka se může měnit každý měsíc. Většina českých hypotečních klientů volí fixaci, přičemž nejčastěji na 5 let — po uplynutí fixace je vhodné aktivně jednat s bankou nebo refinancovat, protože banky málokdy automaticky nabídnou nejlepší dostupnou sazbu.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Rekonstrukce koupelny – průvodce a ceny", href: "/blog/rekonstrukce-koupelny-pruvodce", icon: "🚿" },
              { title: "Jak zateplovat dům – návratnost investice", href: "/blog/jak-zateplit-dum", icon: "🏠" },
              { title: "Kuchyňská linka – na míru vs. IKEA", href: "/blog/kuchynska-linka-na-miru-vs-ikea", icon: "🍳" },
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
