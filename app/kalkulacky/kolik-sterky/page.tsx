// ════════════════════════════════════════════════════════════════
// SOUBOR: app/kalkulacky/kolik-sterky/page.tsx
// ════════════════════════════════════════════════════════════════
import type { Metadata } from "next";
import Link from "next/link";
import SterkaCalculator from "@/app/components/SterkaCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka stěrky 2026 – kolik pytlů tmelu potřebuji?",
  description: "Kolik kg stěrky nebo tmelu na zeď? Zadej plochu a tloušťku vrstvy – výpočet okamžitě. Finální štuková stěrka: 1–3 mm.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-sterky" },
  openGraph: { title: "Kalkulačka stěrky 2026", description: "Kolik kg stěrky nebo tmelu na zeď? Zadej plochu a tloušťku vrstvy – výpočet okamžitě.", url: "https://www.domovniguru.cz/kalkulacky/kolik-sterky", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20st%C4%9Brky%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka stěrky 2026" }] },
};

export default function KolikSterkyPage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Kolik stěrky</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik stěrky a tmelu potřebuju?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej plochu stěn, tloušťku vrstvy a spotřebu materiálu — kalkulačka ti okamžitě spočítá přesné množství v kilogramech a počet pytlů.</p>

        <SterkaCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Druhy stěrek a štuků – jak vybrat správný materiál</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Stěrky a tmely pro interiéry se rozdělují podle účelu a zrnitosti. Jemná finální štuková stěrka (zrnitost 0–0,3 mm) se nanáší v tloušťce 1–3 mm a dává povrchu hladký, malírsky připravený povrch — pracuje se s ní stěrkou do šířky 50–80 cm a brousí se po vyschnutí. Hrubší vyrovnávací stěrka (zrnitost do 1–3 mm) slouží ke srovnání nerovností 5–15 mm a nanáší se ocelovým hladítkem nebo strojem. Pro opravy děr a prasklin se používají speciální tmely — sádrové (pro vnitřní použití, rychlé zasychání) nebo polymerové (pro pohyblivé spáry a přechody mezi materiály).
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Správná příprava podkladu je klíčem k trvanlivosti stěrkování. Podklad musí být čistý, zbavený prachu a uvolněných částí, mírně vlhký ale ne promočený. Savé povrchy (nová omítka, sádrokarton) penetrujte nejméně 24 hodin před stěrkováním. Stěrku míchejte dle návodu výrobce — příliš řídká stěrka steče, příliš hustá se špatně roztahuje. Po nanesení vždy stahujte přebytky rovným hladítkem — zbytečné tlouštky prodražují projekt a zhoršují výsledný povrch.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Mezi vrstvami stěrky nechte pokaždé minimálně 4–6 hodin sušení (sádrové tmely tuhnou za 30–60 minut, polymerové za 4–24 hodin). Finální vrstvu přebruste brusným papírem 120 nebo 150 a odstraňte prach. Pak penetrujte a malujte — stěrkovaný povrch bez penetrace pohltí daleko více barvy. Pokud plánujete tapetovat, stačí jedna rovná vrstva stěrky bez broušení, tapeta drobné nerovnosti skryje.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak opravit škrábance a díry ve zdi", href: "/blog/opravit-skrabance-diry-ve-zdi", icon: "🔧" },
              { title: "Jak malovat zeď – kompletní průvodce", href: "/blog/jak-malovat-zed", icon: "🖌️" },
              { title: "Kalkulačka penetrace", href: "/kalkulacky/kolik-primeru", icon: "🪣" },
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
