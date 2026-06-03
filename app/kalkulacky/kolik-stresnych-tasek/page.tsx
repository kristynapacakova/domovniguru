import type { Metadata } from "next";
import Link from "next/link";
import StrechaCalculator from "@/app/components/StrechaCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka střešních tašek 2026 – kolik tašek a palet potřebuju?",
  description: "Spočítej přesný počet střešních tašek na pokrytí střechy. Betonová, pálená, šindele i vláknocementová krytina. Výsledek včetně počtu palet — zdarma.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-stresnych-tasek" },
  openGraph: {
    title: "Kalkulačka střešních tašek 2026 – kolik tašek a palet potřebuju?",
    description: "Kolik střešních tašek potřebuju? Spočítej přesně pro sedlovou, pultovou nebo valbovou střechu.",
    url: "https://www.domovniguru.cz/kalkulacky/kolik-stresnych-tasek",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "website",
    images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20st%C5%99e%C5%A1n%C3%ADch%20ta%C5%A1ek%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka střešních tašek 2026" }],
  },
};

export default function KolikStrechTasekPage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span>
          <Link href="/kalkulacky">Kalkulačky</Link><span>/</span>
          <span>Kolik střešních tašek</span>
        </nav>

        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>
          Kolik střešních tašek potřebuju?
        </h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>
          Zadej délku hřebene, délku krokve a zvol typ střechy a krytiny — kalkulačka ti okamžitě spočítá plochu střechy, počet tašek i palet včetně 5% rezervy.
        </p>

        <StrechaCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>
            Jak správně změřit střechu a vybrat typ krytiny
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Klíčovým rozměrem pro výpočet je délka krokve — jde o šikmou vzdálenost od hřebene po okapnici, nikoliv o výšku štítu. Tuto délku změříš nejpřesněji přímo na střeše pomocí pásma vedeného podél krokve, nebo ji vypočítáš z půdorysné hloubky a výšky hřebene pomocí Pythagorovy věty. Délka hřebene odpovídá délce domu u sedlové střechy. Pro valbovou střechu, kde jsou zkoseny i čelní svahy, kalkulačka používá koeficient 2,2, který zohledňuje přidanou plochu valbových trojúhelníků.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Výběr krytiny závisí na sklonu střechy, zatížení krovu a architektonickém stylu domu. Betonové a pálené tašky jsou nejrozšířenější — jsou odolné, dlouhověké (50+ let) a dobře snáší česká klimatická pásma. Pálená keramická taška je o něco lehčí než betonová a přirozeně porézní, což jí dává příjemnou matnou patinu. Dřevěné šindele jsou vhodné pro horské chaty a historické stavby, ale vyžadují pravidelnější údržbu a impregnaci. Vláknocementové desky (např. Cembrit nebo Equitone) jsou moderní volbou pro ploché nebo mírně skloněné střechy a fasády — mají nízkou hmotnost a výbornou odolnost proti vlhkosti.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Přeprava střešní krytiny je logisticky náročná — paleta betonových tašek (200 ks) váží přibližně 500–700 kg, pálené tašky bývají lehčí. Pro přepravu na střechu se používá střešní výtah nebo taška-taška podávání. Při objednávce materiálu vždy přidej 5 % rezervu na řezy u okapů a štítů, případná poškození při dopravě a drobné opravy. Kalkulačka tuto rezervu již zahrnuje. Nezapomeň na doplňkový materiál — hřebenáče, větrací tašky, prostupové tašky pro komín a anténní průchody a nopové fólie jako pojistná hydroizolace pod taškami.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>
            Mohlo by vás zajímat
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Kolik cihel potřebuju – kalkulačka zdiva", href: "/kalkulacky/kolik-cihel", icon: "🏗️" },
              { title: "Kolik SDK desek a profilů potřebuju?", href: "/kalkulacky/kolik-sdk", icon: "🧱" },
              { title: "Jak malovat zeď – kompletní průvodce", href: "/blog/jak-malovat-zed", icon: "🖌️" },
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
