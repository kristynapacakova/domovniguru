import type { Metadata } from "next";
import Link from "next/link";
import UverCalculator from "@/app/components/UverCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka splátek úvěru na rekonstrukci 2026 – měsíční splátka",
  description: "Spočítej měsíční splátku úvěru na rekonstrukci podle výše úvěru, úrokové sazby a doby splácení. Výsledek včetně celkového přeplatku a počtu splátek okamžitě.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/splatky-uveru-na-rekonstrukci" },
  openGraph: { title: "Kalkulačka splátek úvěru na rekonstrukci 2026", description: "Jaká bude měsíční splátka úvěru na rekonstrukci? Výsledek okamžitě.", url: "https://www.domovniguru.cz/kalkulacky/splatky-uveru-na-rekonstrukci", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20spl%C3%A1tek%20%C3%BAv%C4%9Bru&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka splátek úvěru na rekonstrukci 2026" }] },
};

export default function SplatkyUveruNaRekonstrukciPage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Splátky úvěru na rekonstrukci</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Splátky úvěru na rekonstrukci</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej výši úvěru, úrokovou sazbu a dobu splácení — kalkulačka spočítá měsíční splátku i celkový přeplatek na úrocích.</p>

        <UverCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Jak funguje splácení úvěru na rekonstrukci</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Většina spotřebitelských úvěrů i úvěrů na rekonstrukci se splácí anuitně — po celou dobu splácení platíte stejnou měsíční částku. Na začátku tvoří většinu splátky úroky a jen menší část umořuje jistinu, postupně se ale poměr obrací a ke konci splácíte převážně jistinu. Naše kalkulačka počítá přesně tuto anuitní splátku ze tří vstupů: výše úvěru, roční úrokové sazby a doby splácení.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Doba splácení má na celkovou cenu úvěru zásadní vliv. Delší splatnost sníží měsíční zatížení rozpočtu, ale zaplatíte výrazně více na úrocích — přeplatek může u dlouhých úvěrů dosáhnout desítek procent půjčené částky. Kratší splatnost naopak znamená vyšší měsíční splátku, ale nižší celkový přeplatek. Ideální je zvolit nejkratší dobu, kterou váš rozpočet bezpečně zvládne i s rezervou pro neočekávané výdaje.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300 }}>
            Při porovnávání nabídek se nedívejte jen na úrokovou sazbu, ale hlavně na RPSN — roční procentní sazbu nákladů, která zahrnuje i poplatky za sjednání a vedení úvěru. Ověřte si také možnost mimořádných splátek zdarma, díky nim můžete úvěr doplatit dříve a ušetřit na úrocích. U větších rekonstrukcí bývá výhodnější účelový úvěr na bydlení nebo navýšení hypotéky, které mají zpravidla nižší sazbu než běžná spotřebitelská půjčka.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak financovat rekonstrukci", href: "/blog/jak-financovat-rekonstrukci", icon: "💰" },
              { title: "Jak odhadnout cenu rekonstrukce", href: "/blog/odhadnout-cenu-rekonstrukce", icon: "🔨" },
              { title: "Splácení hypotéky", href: "/kalkulacky/splaceni-hypoteky", icon: "🏠" },
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
