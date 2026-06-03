import type { Metadata } from "next";
import ShareButtons from "@/app/components/ShareButtons";
import Link from "next/link";
import CihelCalculator from "@/app/components/CihelCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka cihel a tvárnic 2026 – kolik kusů a palet potřebuju?",
  description: "Spočítej přesný počet cihel nebo tvárnic na zeď. Podporuje Ytong, Porotherm i klasické pálené cihly. Výsledek včetně počtu palet — zdarma.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-cihel" },
  openGraph: {
    title: "Kalkulačka cihel a tvárnic 2026 – kolik kusů a palet potřebuju?",
    description: "Kolik cihel nebo tvárnic potřebuju? Spočítej přesně pro Ytong, Porotherm i klasické zdivo.",
    url: "https://www.domovniguru.cz/kalkulacky/kolik-cihel",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "website",
    images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20cihel%20a%20tv%C3%A1rnic%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka cihel a tvárnic 2026" }],
  },
};

export default function KolikCihelPage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span>
          <Link href="/kalkulacky">Kalkulačky</Link><span>/</span>
          <span>Kolik cihel</span>
        </nav>

        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>
          Kolik cihel a tvárnic potřebuju?
        </h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>
          Zadej délku a výšku zdi a zvol typ zdiva — kalkulačka ti okamžitě spočítá počet kusů i palet včetně 5% ztratného na řezy a odpad.
        </p>

        <CihelCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>
            Jak vybrat správný typ zdiva a proč záleží na spotřebě
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Výběr typu zdiva zásadně ovlivňuje nejen cenu materiálu, ale i spotřebu práce a malty. Klasická pálená cihla formátu 250 × 120 × 65 mm má spotřebu přibližně 51 kusů na m² zdiva tloušťky 25 cm — to je mnohem více kusů než u moderních pórobetonových tvárnic Ytong, kde vychází jen 8–15 kusů na m². Vyšší počet kusů klasické cihly sice neznamená automaticky vyšší cenu (cihla je levnější kus od kusu), ale výrazně prodlužuje dobu zdění a zvyšuje spotřebu malty.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Tvárnice Ytong P4-500 tloušťky 17,5 cm jsou oblíbenou volbou pro příčky v bytových jádrech a přístavbách. Díky nízké hmotnosti (přibližně 8–9 kg/kus) je lze snadno zpracovávat i bez pomocníka. Ytong P2-400 tloušťky 30 cm nabízí lepší tepelnou izolaci a hodí se pro obvodové stěny menších staveb nebo přístavků. Porotherm 30 je keramický broušený blok s vysokou pevností a výbornou akumulací tepla — oblíbená volba pro rodinné domy. Při zdění na tenkovrstvou maltu stačí spára 1–3 mm, což ušetří materiál a urychlí práci.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Nezapomeň, že kalkulačka počítá plnou plochu zdi bez odečtení otvorů. U zdiva s oknem nebo dveřmi odečti plochu každého otvoru ručně před zadáváním — standardní okno 900 × 1 200 mm zabírá 1,08 m² a standardní dveřní otvor 900 × 2 100 mm asi 1,89 m². Přeprava zdícího materiálu je fyzicky i logisticky náročná — 1 paleta Ytong 17,5 cm váží přibližně 250 kg, paleta Porotherm 30 může vážit i 1 200 kg. Při plánování zásobování počítej s dostatečně únosnou přístupovou cestou.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>
            Mohlo by vás zajímat
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Sádrokarton příčka – postup krok za krokem", href: "/blog/sadrokarton-pricka-postup", icon: "🧱" },
              { title: "Kolik SDK desek a profilů potřebuju?", href: "/kalkulacky/kolik-sdk", icon: "📐" },
              { title: "Kalkulačka střešních tašek", href: "/kalkulacky/kolik-stresnych-tasek", icon: "🏠" },
            ].map(r => (
              <Link key={r.href} href={r.href} style={{ display:"block", background:"#f8f4f0", border:"1px solid #e8e0d8", borderRadius:"10px", padding:"14px 16px", textDecoration:"none", transition:"background 120ms" }}>
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
