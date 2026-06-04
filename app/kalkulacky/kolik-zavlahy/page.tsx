import type { Metadata } from "next";
import Link from "next/link";
import ZavlahaCalculator from "@/app/components/ZavlahaCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka zavlažování 2026 – kolik litrů vody na zahradu?",
  description: "Kolik litrů vody potřebuje vaše zahrada za týden? Zadej plochu a typ rostlin – výpočet potřeby zavlažování okamžitě.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-zavlahy" },
  openGraph: { title: "Kalkulačka zavlažování 2026", description: "Kolik litrů vody potřebuje vaše zahrada za týden? Zadej plochu a typ rostlin – výpočet potřeby zavlažování okamžitě.", url: "https://www.domovniguru.cz/kalkulacky/kolik-zavlahy", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20zavla%C5%BEov%C3%A1n%C3%AD%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka zavlažování 2026" }] },
};

export default function KolikZavlahyPage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Kolik vody na zavlažování</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik vody potřebuje moje zahrada?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej plochu zahrady a potřebu vody na m² — kalkulačka ti okamžitě spočítá, kolik litrů potřebuješ na jedno zavlažování a za týden.</p>

        <ZavlahaCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Jak správně zavlažovat – zásady efektivní zálivky</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Potřeba vody se liší podle druhu rostlin a půdy. Trávník potřebuje 15–25 litrů na m² týdně v létě — v obdobích sucha i více. Záhony se zeleninou a letničkami mají vyšší potřebu (15–20 l/m²/týden), protože rychle rostou a odpařují vodu listy. Keře a dřeviny mají hlubší kořenový systém a vystačí si s 8–12 l/m²/týden. Výpočet předpokládá průměrné podmínky — v horkém a slunném letním týdnu může být skutečná potřeba o 30–50 % vyšší.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Načasování zálivky výrazně ovlivňuje efektivitu. Ranní zavlažování (6–9 hodin) je nejúčinnější — půda i vzduch jsou chladné, odpařování minimální a listy mají čas do poledne oschnout, čímž se snižuje riziko houbových chorob. Večerní zálivka (po 17 h) je druhá nejlepší možnost. Zálivka v poledne ztrácí 30–50 % vody odpařováním a způsobuje tepelný stres u rostlin. Kapková nebo podpovrchová zavlažování jsou nejefektivnější — přivádějí vodu přímo ke kořenům a snižují spotřebu o 30–60 % oproti sprinklerům.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Zachycování dešťové vody do nádrže (cisterna, sud) je ekologické a ekonomické — v průměrném českém roce padne 500–700 mm srážek, z střechy 100 m² lze zachytit 40–60 m³ vody ročně. To pokryje potřebu průměrné zahrady 100 m² po celou sezónu. Mulčování záhonů 7–10 cm vrstvou organického materiálu snižuje odpařování z půdy o 30–50 % a prodlužuje interval mezi zalévání. Kombinace mulčování + ranní zálivka + kapkový systém je nejlepší způsob, jak minimalizovat spotřebu vody při zachování zdravé zahrady.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak správně zalévat zahradu", href: "/blog/jak-spravne-zalevat", icon: "💧" },
              { title: "Zavlažovací systém – jak ho nainstalovat", href: "/blog/zavlaha-zahrada-postup", icon: "🌿" },
              { title: "Kalkulačka mulče na záhony", href: "/kalkulacky/kolik-mulce", icon: "🌿" },
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
